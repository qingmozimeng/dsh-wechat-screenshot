'use strict';
const { app, BrowserWindow, ipcMain, desktopCapturer, screen, clipboard, nativeImage } = require('electron');
const fs = require('node:fs');
const path = require('node:path');
const { randomUUID } = require('node:crypto');
const { isAllowedOrigin } = require('./origin.cjs');
const JsonWorker = require('./worker.cjs');
const INSTALLATION = Symbol.for('dsh.screenshot.installation.v1');

module.exports = function install(getMainWindow, options = {}) {
  if (app[INSTALLATION]) return app[INSTALLATION];
  let overlay = null, ready = null, readyResolve = null, readyReject = null;
  let active = null, sequence = 0, disposed = false, idleTimer = null;
  const listeners = [], handlers = [];
  const worker = new JsonWorker(path.join(process.env.SystemRoot || 'C:\\Windows',
    'System32/WindowsPowerShell/v1.0/powershell.exe'),
    ['-NoProfile', '-NonInteractive', '-ExecutionPolicy', 'Bypass', '-File', path.join(__dirname, 'windows.ps1')]);
  function trace(stage, data = {}) {
    if (!options.diagnostics) return;
    void fs.promises.appendFile(path.join(app.getPath('userData'), 'screenshot-debug.jsonl'),
      JSON.stringify({ time: new Date().toISOString(), stage, ...data }) + '\n').catch(() => {});
  }
  function on(emitter, event, listener) {
    emitter.on(event, listener);
    listeners.push(() => emitter.removeListener(event, listener));
  }
  function handle(channel, listener) {
    ipcMain.handle(channel, listener);
    handlers.push(channel);
  }
  function releaseOverlay() {
    const win = overlay;
    overlay = null;
    readyReject?.(new Error('截图窗口已关闭'));
    ready = readyResolve = readyReject = null;
    if (win && !win.isDestroyed()) win.destroy();
  }
  function settle(session, result = { action: 'cancel' }) {
    if (!session || active !== session) return;
    active = null;
    clearTimeout(session.timer);
    session.cancelPrepare?.();
    session.unwatch?.();
    try {
      if (overlay && !overlay.isDestroyed()) {
        overlay.webContents.send('dsh-shot:cancelled', session.id);
        overlay.hide();
      }
    } catch (error) { trace('overlay-close-error', { message: error.message }); }
    try {
      const main = session.main;
      if (session.hidden && !main.isDestroyed()) { main.show(); main.focus(); }
    } catch (error) { trace('restore-error', { message: error.message }); }
    finally { session.resolve(result); }
    worker.stop();
    if (!disposed) {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => { if (!active) releaseOverlay(); }, 30000);
      idleTimer.unref?.();
    }
  }
  function allowed(event) {
    return overlay && !overlay.isDestroyed() && event.sender === overlay.webContents &&
      event.senderFrame === overlay.webContents.mainFrame;
  }
  function fromMain(event) {
    const main = getMainWindow();
    return !disposed && main && !main.isDestroyed() && event.sender === main.webContents &&
      event.senderFrame === main.webContents.mainFrame && isAllowedOrigin(main.webContents.getURL(), options.origin);
  }
  function prepare() {
    if (overlay && !overlay.isDestroyed()) return ready;
    ready = new Promise((resolve, reject) => { readyResolve = resolve; readyReject = reject; });
    ready.catch(() => {});
    const win = new BrowserWindow({ show: false, frame: false, transparent: false,
      backgroundColor: '#050506', title: 'DSH Screenshot GPU', skipTaskbar: true,
      alwaysOnTop: true, resizable: false, movable: false, hasShadow: false,
      enableLargerThanScreen: true, webPreferences: {
        preload: path.join(__dirname, 'overlay-preload.cjs'), sandbox: true,
        contextIsolation: true, nodeIntegration: false, backgroundThrottling: false, spellcheck: false,
      } });
    overlay = win;
    win.setMenu(null);
    win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
    win.webContents.on('will-navigate', event => event.preventDefault());
    const fail = message => {
      if (overlay !== win) return;
      settle(active, { error: message });
      releaseOverlay();
    };
    win.webContents.on('render-process-gone', () => fail('截图渲染进程退出，请重试'));
    win.on('unresponsive', () => fail('截图界面无响应，已恢复主窗口'));
    win.webContents.on('did-fail-load', (_event, _code, _description, _url, isMainFrame) => {
      if (isMainFrame !== false) fail('截图界面加载失败');
    });
    win.on('close', event => { if (!disposed) { event.preventDefault(); settle(active); } });
    win.on('closed', () => { if (overlay === win) fail('截图窗口已关闭'); });
    win.loadFile(path.join(__dirname, 'overlay.html')).catch(() => fail('截图界面加载失败'));
    return ready;
  }
  async function captureScreen(display, main) {
    const output = path.join(app.getPath('temp'), 'dsh-shot-' + randomUUID() + '.bmp');
    try {
      const handle = main.getNativeWindowHandle();
      const hwnd = handle.length === 8 ? handle.readBigUInt64LE().toString() : String(handle.readUInt32LE());
      const bounds = screen.dipToScreenRect(main, display.bounds);
      const result = await worker.request({ hwnd, ...bounds, out: output }, 5000);
      return { ...result, imageBytes: new Uint8Array(await fs.promises.readFile(output)), mime: 'image/bmp' };
    } finally { await fs.promises.unlink(output).catch(() => {}); }
  }
  async function run(session, mode) {
    let timer;
    try {
      await Promise.race([prepare(), new Promise((_, reject) => {
        session.cancelPrepare = () => reject(new Error('截图已取消'));
        timer = setTimeout(() => reject(new Error('截图窗口准备超时')), 8000);
      })]);
    } finally { clearTimeout(timer); session.cancelPrepare = null; }
    if (active !== session) return;
    const main = session.main;
    const display = screen.getDisplayMatching(main.getBounds());
    if (mode === 'desktop' && main.isVisible()) {
      session.hidden = true;
      main.hide();
      await new Promise(resolve => setTimeout(resolve, 16));
    }
    if (active !== session) return;
    const size = { width: Math.round(display.size.width * display.scaleFactor),
      height: Math.round(display.size.height * display.scaleFactor) };
    let capture;
    try { capture = await captureScreen(display, main); }
    catch {
      if (active !== session) return;
      const sources = await desktopCapturer.getSources({ types: ['screen'], thumbnailSize: size, fetchWindowIcons: false });
      if (active !== session) return;
      const source = sources.find(item => item.display_id === String(display.id));
      if (!source || source.thumbnail.isEmpty()) throw new Error('无法获取当前显示器截图');
      const actual = source.thumbnail.getSize();
      if (actual.width !== size.width || actual.height !== size.height) throw new Error('截图分辨率与显示器不匹配');
      capture = { imageBytes: new Uint8Array(source.thumbnail.toPNG()), mime: 'image/png', windows: [] };
    }
    if (active !== session) return;
    overlay.setBounds(display.bounds);
    overlay.setAlwaysOnTop(true, 'screen-saver');
    const bounds = screen.dipToScreenRect(main, display.bounds);
    overlay.webContents.send('dsh-shot:open', { ...capture, id: session.id, mode,
      screen: { x: bounds.x, y: bounds.y, ...size } });
  }
  function dispose() {
    if (disposed) return;
    disposed = true;
    settle(active, { action: 'cancel' });
    clearTimeout(idleTimer);
    worker.dispose();
    releaseOverlay();
    for (const remove of listeners) remove();
    for (const channel of handlers) ipcMain.removeHandler(channel);
    if (app[INSTALLATION] === dispose) delete app[INSTALLATION];
  }
  try {
    handle('dsh-shot:start', (event, mode) => {
      if (!fromMain(event)) throw new Error('无效截图来源');
      if (mode !== 'desktop' && mode !== 'window') throw new Error('无效截图模式');
      if (active) return { error: '截图正在进行' };
      clearTimeout(idleTimer);
      const main = getMainWindow();
      const session = { id: ++sequence, main, hidden: false };
      const result = new Promise(resolve => { session.resolve = resolve; });
      active = session;
      const cancel = () => settle(session);
      const events = ['did-start-navigation', 'render-process-gone', 'destroyed'];
      for (const name of events) main.webContents.on(name, cancel);
      session.unwatch = () => { for (const name of events) main.webContents.removeListener(name, cancel); };
      session.timer = setTimeout(() => {
        settle(session, { error: '截图准备超时，已恢复主窗口' });
        releaseOverlay();
      }, 15000);
      // The IPC promise settles independently of capture, even if getSources hangs.
      void run(session, mode).catch(error => {
        if (active !== session) return;
        settle(session, { error: error.message });
        releaseOverlay();
      });
      return result;
    });
    handle('dsh-shot:cancel', event => {
      if (!fromMain(event)) throw new Error('无效截图来源');
      settle(active);
      return { action: 'cancel' };
    });
    handle('dsh-shot:export', async (event, { id, action, bytes }) => {
      const session = active;
      if (!allowed(event) || !session || id !== session.id) throw new Error('截图会话已结束');
      if (!['copy', 'save'].includes(action)) throw new Error('无效操作');
      if (!(bytes instanceof Uint8Array) || !bytes.length || bytes.length > 64 * 1024 * 1024) throw new Error('无效图片');
      const image = nativeImage.createFromBuffer(Buffer.from(bytes));
      if (image.isEmpty()) throw new Error('图片解码失败');
      let result;
      if (action === 'copy') { clipboard.writeImage(image); result = { action }; }
      else {
        const dir = path.join(app.getPath('pictures'), 'Screenshots');
        await fs.promises.mkdir(dir, { recursive: true });
        if (active !== session) throw new Error('截图会话已结束');
        const file = path.join(dir, '微信截图-' + Date.now() + '-' + randomUUID() + '.png');
        await fs.promises.writeFile(file, Buffer.from(bytes), { flag: 'wx' });
        result = { action, path: file };
      }
      if (active === session) session.result = result;
      return result;
    });
    on(ipcMain, 'dsh-shot:ready', event => { if (allowed(event)) readyResolve?.(); });
    on(ipcMain, 'dsh-shot:debug', (event, stage) => { if (allowed(event)) trace('renderer', { stage }); });
    on(ipcMain, 'dsh-shot:painted', (event, id) => {
      if (!allowed(event) || !active || active.id !== id) return;
      clearTimeout(active.timer);
      const session = active;
      session.timer = setTimeout(() => settle(session, { error: '截图会话超时，已恢复主窗口' }), 10 * 60 * 1000);
      overlay.show();
      overlay.focus();
    });
    on(ipcMain, 'dsh-shot:complete', (event, data) => {
      if (!allowed(event) || !active || data?.id !== active.id) return;
      settle(active, data.error ? { error: data.error } : active.result || { action: 'cancel' });
    });
    on(app, 'before-quit', dispose);
    app[INSTALLATION] = dispose;
    return dispose;
  } catch (error) {
    dispose();
    throw error;
  }
};

