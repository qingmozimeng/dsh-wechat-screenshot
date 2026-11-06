const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const { EventEmitter } = require('node:events');
function harness() {
  const app = new EventEmitter(), ipcMain = new EventEmitter(), handlers = new Map(), windows = [], timers = new Map();
  let nextTimer = 0, workerStarts = 0, fallbackCalls = 0;
  app.getPath = () => __dirname;
  ipcMain.handle = (key, fn) => { if (handlers.has(key)) throw Error('duplicate'); handlers.set(key, fn); };
  ipcMain.removeHandler = key => handlers.delete(key);
  class Window extends EventEmitter {
    constructor() {
      super(); this.webContents = new EventEmitter(); this.webContents.mainFrame = {};
      this.webContents.setWindowOpenHandler = () => {};
      this.webContents.send = (channel, data) => { this.sent = data; };
      this.visible = true; this.destroyed = false; windows.push(this);
    }
    isDestroyed() { return this.destroyed; }
    isVisible() { return this.visible; }
    setMenu() {} setBounds() {} setAlwaysOnTop() {} focus() {}
    show() { this.visible = true; } hide() { this.visible = false; }
    destroy() { this.destroyed = true; this.emit('closed'); }
    loadFile() { return Promise.resolve(); }
    getBounds() { return { x: 0, y: 0, width: 100, height: 100 }; }
    getNativeWindowHandle() { return Buffer.alloc(8); }
  }
  const main = new Window();
  main.webContents.getURL = () => 'http://127.0.0.1:3080/';
  windows.length = 0;
  class Worker {
    request() { workerStarts++; return Promise.reject(Error('simulate failed native capture')); }
    stop() {} dispose() {}
  }
  const electron = { app, ipcMain, BrowserWindow: Window,
    screen: { getDisplayMatching: () => ({ id: 1, bounds: main.getBounds(), size: {width:100,height:100}, scaleFactor: 1 }),
      dipToScreenRect: (_main, bounds) => bounds },
    desktopCapturer: { getSources: () => { fallbackCalls++; return new Promise(() => {}); } } };
  const module = { exports: {} };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '../native-gpu/host.cjs'), 'utf8'), {
    module, Buffer, process, Uint8Array, __dirname: path.join(__dirname, '../native-gpu'),
    setTimeout: (fn, ms) => { const id = ++nextTimer; timers.set(id, {fn,ms}); return id; },
    clearTimeout: id => timers.delete(id),
    require: name => name === 'node:fs' ? { promises: { unlink: async () => {} } } : name === 'electron' ? electron : name === './worker.cjs' ? Worker :
      name === './origin.cjs' ? require('../native-gpu/origin.cjs') : require(name),
  });
  return { app, ipcMain, handlers, windows, main, install: module.exports, timers,
    starts: () => workerStarts, fallbacks: () => fallbackCalls,
    event: win => ({ sender: win.webContents, senderFrame: win.webContents.mainFrame }),
    tick(ms) { for (const [id,timer] of [...timers]) if (timer.ms === ms) { timers.delete(id); timer.fn(); } },
    async flush() { for (let i=0;i<20;i++) await Promise.resolve(); } };
}
test('install is lazy, idempotent and fully disposable', () => {
  const h = harness();
  const dispose = h.install(() => h.main);
  assert.equal(h.windows.length, 0); assert.equal(h.starts(), 0);
  assert.equal(h.install(() => h.main), dispose);
  dispose(); assert.equal(h.handlers.size, 0); assert.equal(h.app.listenerCount('before-quit'), 0);
  assert.equal(h.ipcMain.eventNames().length, 0);
  const again = h.install(() => h.main); again();
});
test('IPC collision cannot remove another plugin handler', () => {
  const h = harness(), original = () => {};
  h.handlers.set('dsh-shot:export', original);
  assert.throws(() => h.install(() => h.main), /duplicate/);
  assert.equal(h.handlers.size, 1); assert.equal(h.handlers.get('dsh-shot:export'), original);
  assert.equal(h.ipcMain.eventNames().length, 0);
});
test('renderer load failure resolves request and allows retry', async () => {
  const h = harness(), dispose = h.install(() => h.main);
  const result = h.handlers.get('dsh-shot:start')(h.event(h.main), 'desktop');
  h.windows[0].webContents.emit('did-fail-load', {}, -6, 'missing', '', true);
  assert.match((await result).error, /加载失败/);
  assert.equal(h.main.visible, true);
  const again = h.handlers.get('dsh-shot:start')(h.event(h.main), 'desktop');
  assert.equal(h.windows.length, 2);
  h.handlers.get('dsh-shot:cancel')(h.event(h.main));
  assert.equal((await again).action, 'cancel'); dispose();
});
test('stalled Electron fallback cannot keep main hidden or IPC pending', async () => {
  const h = harness(), dispose = h.install(() => h.main);
  const result = h.handlers.get('dsh-shot:start')(h.event(h.main), 'desktop');
  h.ipcMain.emit('dsh-shot:ready', h.event(h.windows[0])); await h.flush();
  assert.equal(h.main.visible, false);
  h.tick(16); await h.flush();
  assert.equal(h.fallbacks(), 1);
  h.tick(15000);
  assert.match((await result).error, /超时/);
  assert.equal(h.main.visible, true); dispose();
});
test('main reload and application quit both resolve active capture', async () => {
  for (const quit of [false, true]) {
    const h = harness(), dispose = h.install(() => h.main);
    const result = h.handlers.get('dsh-shot:start')(h.event(h.main), 'desktop');
    h.ipcMain.emit('dsh-shot:ready', h.event(h.windows[0])); await h.flush();
    assert.equal(h.main.visible, false);
    if (quit) h.app.emit('before-quit'); else h.main.webContents.emit('did-start-navigation');
    assert.equal((await result).action, 'cancel'); assert.equal(h.main.visible, true);
    dispose(); h.tick(16); await h.flush(); assert.equal(h.starts(), 0);
  }
});
test('renderer crash after paint restores main and completes IPC', async () => {
  const h = harness(), dispose = h.install(() => h.main);
  const result = h.handlers.get('dsh-shot:start')(h.event(h.main), 'desktop');
  h.ipcMain.emit('dsh-shot:ready', h.event(h.windows[0])); await h.flush();
  h.ipcMain.emit('dsh-shot:painted', h.event(h.windows[0]), 1);
  h.windows[0].webContents.emit('render-process-gone');
  assert.match((await result).error, /渲染进程/); assert.equal(h.main.visible, true);
  dispose(); h.tick(16); await h.flush();
});
test('invalid sender is rejected before any window or worker starts', () => {
  const h = harness(), dispose = h.install(() => h.main);
  assert.throws(() => h.handlers.get('dsh-shot:start')({ sender: {}, senderFrame: {} }, 'desktop'), /来源/);
  assert.equal(h.windows.length, 0); dispose();
});

