window.__ModuleLoader__.load({
  id: 'dsh-wechat-screenshot',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const { useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } = React;

    const CSS = `
.wxshot-anchor{position:relative;display:inline-flex;align-items:center;min-width:0;flex:none;order:0;height:28px;border-radius:8px;background:var(--dsw-alias-interactive-bg-hover,rgba(0,0,0,.04))}

html.wxshot-active{visibility:hidden;background:#000}
html.wxshot-active .wxshot-overlay,html.wxshot-active .wxshot-toast{visibility:visible}
.wxshot-button{box-sizing:border-box;display:inline-flex;align-items:center;gap:5px;height:28px;padding:0 8px;border:0;border-radius:var(--dsw-radius-sm,6px);background:transparent;color:var(--dsw-alias-label-tertiary,rgba(255,255,255,.62));font:inherit;font-size:12px;line-height:20px;cursor:pointer;white-space:nowrap;transition:background-color .12s,color .12s}
.wxshot-button:hover,.wxshot-button[aria-expanded=true]{background:var(--dsw-alias-interactive-bg-hover,rgba(255,255,255,.08));color:var(--dsw-alias-label-secondary,rgba(255,255,255,.82))}
.wxshot-button:disabled{opacity:.6;cursor:default}
.wxshot-button svg{width:15px;height:15px;flex:none}
.wxshot-button.wxshot-button-icon{width:26px;height:28px;padding:0;justify-content:center;gap:0;border-radius:8px 0 0 8px;color:var(--dsw-alias-label-secondary,rgba(255,255,255,.82))}
.wxshot-button.wxshot-button-icon:hover{color:var(--dsw-alias-label-primary,#fff)}
.wxshot-button.wxshot-button-icon svg{width:16px;height:16px}
.wxshot-caret{box-sizing:border-box;display:grid;place-items:center;width:14px;height:28px;padding:0;border:0;border-radius:0 8px 8px 0;background:transparent;color:var(--dsw-alias-label-tertiary,rgba(255,255,255,.55));cursor:pointer}
.wxshot-caret:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(255,255,255,.08));color:var(--dsw-alias-label-primary,#fff)}
.wxshot-caret svg{width:10px;height:10px}
.wxshot-spin{animation:wxshot-spin 1s linear infinite}
@keyframes wxshot-spin{to{transform:rotate(360deg)}}
.wxshot-menu{position:fixed;z-index:1200;box-sizing:border-box;min-width:248px;max-width:min(280px,calc(100vw - 16px));padding:6px;border-radius:12px;background:var(--dsw-specific-menu,#26262a);border:1px solid var(--dsw-alias-border-l1,rgba(255,255,255,.12));box-shadow:0 14px 48px rgba(0,0,0,.5);color:var(--dsw-alias-label-primary,#fff);font-size:13px;line-height:18px;backdrop-filter:blur(18px)}
.wxshot-menu-title{padding:6px 10px 5px;color:var(--dsw-alias-label-tertiary,rgba(255,255,255,.55));font-size:11px;line-height:15px;letter-spacing:.02em}
.wxshot-menu-row{box-sizing:border-box;display:flex;align-items:center;gap:10px;width:100%;padding:8px 10px;border:0;border-radius:8px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}
.wxshot-menu-row:hover{background:var(--dsw-alias-interactive-bg-hover,rgba(255,255,255,.08))}
.wxshot-menu-icon{display:grid;place-items:center;width:26px;height:26px;flex:none;border-radius:7px;background:rgba(7,193,96,.14);color:#07c160}
.wxshot-menu-icon svg{width:16px;height:16px}
.wxshot-menu-text{display:flex;flex-direction:column;gap:1px;min-width:0;flex:1}
.wxshot-menu-label{font-weight:500}
.wxshot-menu-desc{color:var(--dsw-alias-label-tertiary,rgba(255,255,255,.55));font-size:11px;line-height:15px}
.wxshot-menu-key{flex:none;color:var(--dsw-alias-label-caption,rgba(255,255,255,.42));font-size:10px;font-family:var(--ds-font-family-code,monospace)}
.wxshot-menu-foot{padding:7px 10px 3px;color:var(--dsw-alias-label-tertiary,rgba(255,255,255,.45));font-size:11px;line-height:16px;border-top:1px solid rgba(255,255,255,.07);margin-top:4px}
.wxshot-overlay{position:fixed;inset:0;z-index:2147483000;overflow:hidden;background:#050506;cursor:crosshair;user-select:none;-webkit-user-select:none;-webkit-app-region:no-drag;touch-action:none;contain:layout paint;font-family:system-ui,-apple-system,"Segoe UI","Microsoft YaHei",sans-serif;outline:none}
.wxshot-image{position:absolute;display:block;pointer-events:none;user-select:none;-webkit-user-drag:none;transform:translateZ(0)}
.wxshot-dim{position:absolute;left:0;top:0;width:1px;height:1px;pointer-events:none;background:rgba(0,0,0,.5);transform-origin:0 0;will-change:transform}
.wxshot-drag{position:absolute;z-index:3;pointer-events:none;display:none;box-sizing:border-box;border:1.5px solid #07c160;background:rgba(7,193,96,.08)}
.wxshot-drag-size{position:absolute;z-index:4;pointer-events:none;display:none;box-sizing:border-box;padding:2px 6px;border-radius:4px;background:rgba(0,0,0,.65);color:#fff;font-size:11px;line-height:16px;white-space:nowrap}
.wxshot-window{position:absolute;pointer-events:none;box-sizing:border-box;border:1.5px solid #07c160;background:rgba(7,193,96,.10);box-shadow:0 0 0 1px rgba(0,0,0,.25)}
.wxshot-sel{position:absolute;pointer-events:none;box-sizing:border-box;border:1px solid rgba(255,255,255,.96);box-shadow:0 0 0 1px rgba(0,0,0,.5),0 0 24px rgba(0,0,0,.25)}
.wxshot-handle{position:absolute;width:8px;height:8px;margin:-4px 0 0 -4px;box-sizing:border-box;border-radius:1px;background:#fff;border:1px solid rgba(0,0,0,.55);pointer-events:none;box-shadow:0 1px 2px rgba(0,0,0,.35)}
.wxshot-size{position:absolute;pointer-events:none;padding:3px 7px;border-radius:5px;background:rgba(18,18,20,.86);color:#fff;font-size:11px;line-height:16px;font-variant-numeric:tabular-nums;white-space:nowrap;border:1px solid rgba(255,255,255,.14)}
.wxshot-canvas{position:absolute;pointer-events:none;z-index:2}
.wxshot-toolbar{position:absolute;z-index:5;box-sizing:border-box;display:flex;align-items:center;flex-wrap:wrap;gap:2px;padding:5px 6px;border-radius:11px;background:rgba(28,28,31,.97);border:1px solid rgba(255,255,255,.13);box-shadow:0 16px 50px rgba(0,0,0,.55);color:#fff}
.wxshot-tool{box-sizing:border-box;display:grid;place-items:center;width:30px;height:30px;padding:0;border:0;border-radius:7px;background:transparent;color:rgba(255,255,255,.86);cursor:pointer}
.wxshot-tool:hover{background:rgba(255,255,255,.10);color:#fff}
.wxshot-tool.is-active{background:#07c160;color:#fff}
.wxshot-tool:disabled{opacity:.3;cursor:default}
.wxshot-tool svg{width:18px;height:18px}
.wxshot-sep{width:1px;height:20px;margin:0 4px;background:rgba(255,255,255,.14);flex:none}
.wxshot-colors{display:flex;align-items:center;gap:5px;padding:0 3px}
.wxshot-color{width:17px;height:17px;padding:0;border-radius:50%;border:2px solid transparent;cursor:pointer;box-shadow:inset 0 0 0 1px rgba(0,0,0,.3);box-sizing:border-box}
.wxshot-color.is-active{border-color:#fff;box-shadow:inset 0 0 0 1px rgba(0,0,0,.25),0 0 0 2px rgba(7,193,96,.75)}
.wxshot-action{box-sizing:border-box;display:inline-flex;align-items:center;gap:4px;height:30px;padding:0 9px;border:0;border-radius:7px;background:transparent;color:rgba(255,255,255,.88);font:inherit;font-size:12px;cursor:pointer;white-space:nowrap}
.wxshot-action:hover{background:rgba(255,255,255,.10)}
.wxshot-action:disabled{opacity:.45;cursor:default}
.wxshot-action svg{width:16px;height:16px}
.wxshot-primary{background:#07c160;color:#fff;font-weight:600}
.wxshot-primary:hover{background:#06ad56}
.wxshot-primary:disabled{background:#07c160;opacity:.45}
.wxshot-hint{position:absolute;left:50%;bottom:22px;transform:translateX(-50%);z-index:6;padding:7px 13px;border-radius:999px;background:rgba(20,20,22,.86);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.86);font-size:12px;line-height:17px;white-space:nowrap;pointer-events:none;box-shadow:0 8px 30px rgba(0,0,0,.35)}
.wxshot-close{position:absolute;top:52px;right:16px;z-index:7;box-sizing:border-box;display:grid;place-items:center;width:34px;height:34px;padding:0;border-radius:9px;border:1px solid rgba(255,255,255,.16);background:rgba(24,24,26,.82);color:#fff;font:400 22px/1 system-ui,sans-serif;cursor:pointer;box-shadow:0 8px 30px rgba(0,0,0,.35)}
.wxshot-close:hover{background:rgba(255,255,255,.14)}
.wxshot-input{position:absolute;z-index:8;box-sizing:border-box;padding:2px 4px;margin:0;border:1px dashed rgba(255,255,255,.8);border-radius:3px;background:rgba(0,0,0,.55);font:16px/1.35 system-ui,-apple-system,"Segoe UI","Microsoft YaHei",sans-serif;outline:none;resize:none;overflow:hidden;min-height:26px;max-height:120px;white-space:pre-wrap;caret-color:#fff}
.wxshot-toast{position:fixed;left:50%;bottom:46px;transform:translateX(-50%);z-index:2147483002;max-width:min(680px,calc(100vw - 40px));padding:10px 16px;border-radius:10px;background:rgba(26,26,29,.97);border:1px solid rgba(255,255,255,.14);color:#fff;font-size:13px;line-height:19px;text-align:center;box-shadow:0 14px 44px rgba(0,0,0,.5);overflow-wrap:anywhere;font-family:system-ui,-apple-system,"Segoe UI","Microsoft YaHei",sans-serif;pointer-events:none}
.wxshot-toast.is-error{border-color:rgba(255,69,58,.55);background:rgba(52,22,22,.97)}
.wxshot-error{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2147483001;box-sizing:border-box;width:min(430px,calc(100vw - 32px));padding:18px 20px;border-radius:14px;background:#1f1f22;border:1px solid rgba(255,255,255,.14);color:#fff;box-shadow:0 24px 80px rgba(0,0,0,.6);font-family:system-ui,-apple-system,"Segoe UI","Microsoft YaHei",sans-serif}
.wxshot-error-title{margin:0 0 8px;font-size:15px;font-weight:600}
.wxshot-error-text{margin:0;color:rgba(255,255,255,.68);font-size:12px;line-height:18px;overflow-wrap:anywhere;white-space:pre-wrap}
.wxshot-error-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:16px}
.wxshot-btn{box-sizing:border-box;display:inline-flex;align-items:center;gap:5px;height:32px;padding:0 14px;border:1px solid rgba(255,255,255,.14);border-radius:8px;background:transparent;color:#fff;font:inherit;font-size:12px;cursor:pointer}
.wxshot-btn:hover{background:rgba(255,255,255,.08)}
.wxshot-btn.wxshot-primary{background:#07c160;border-color:#07c160}
`;

    const COLORS = ['#ff3b30', '#ff9500', '#ffcc00', '#34c759', '#0a84ff', '#af52de'];

    const createInitial = () => ({
      phase: 'idle',
      mode: 'desktop',
      imageUrl: '',
      image: null,
      imageWidth: 0,
      imageHeight: 0,
      screen: null,
      windows: [],
      selection: null,
      hover: -1,
      shapes: [],
      redo: [],
      tool: 'rect',
      color: COLORS[0],
      width: 3,
      drawing: null,
      text: null,
      busy: false,
      error: '',
      toast: null,
    });

    let state = createInitial();
    const listeners = new Set();
    let objectUrl = null;
    let toastTimer = 0;
    let fullscreenRequested = false;
    let disposed = false;
    let captureSequence = 0;
    let curtain = null;
    let heldWindow = false;
    let closing = false;

    function notify() {
      for (const listener of [...listeners]) {
        try {
          listener();
        } catch {
          /* a subscriber must not break the store */
        }
      }
    }

    function setState(patch) {
      state = { ...state, ...patch };
      notify();
    }

    function subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    }

    const getState = () => state;

    function useSnapshot() {
      return useSyncExternalStore(subscribe, getState, getState);
    }

    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

    function messageOf(error) {
      if (error instanceof Error) return error.message;
      return String(error);
    }

    function parseErrorText(text, status) {
      if (text) {
        try {
          const data = JSON.parse(text);
          if (data && typeof data.error === 'string' && data.error) return data.error;
        } catch {
          /* not JSON */
        }
        return text;
      }
      return `截图服务返回 HTTP ${status}`;
    }

    function decodeMeta(value) {
      if (!value) return {};
      try {
        const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
        const padded = base64 + '==='.slice((base64.length + 3) % 4);
        const binary = window.atob(padded);
        const bytes = Uint8Array.from(binary, (character) => character.charCodeAt(0));
        return JSON.parse(new TextDecoder().decode(bytes));
      } catch {
        return {};
      }
    }

    function loadImage(url) {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.decoding = 'async';
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error('无法解码截图图片'));
        image.src = url;
      });
    }

    function revokeObjectUrl() {
      if (objectUrl !== null) {
        try {
          URL.revokeObjectURL(objectUrl);
        } catch {
          /* ignore */
        }
        objectUrl = null;
      }
    }

    // Cover the page synchronously before the fullscreen transition so the
    // user never sees the Harness UI blown up full-screen, only the frozen shot.
    function showCurtain() {
      if (curtain !== null) return;
      try {
        const element = document.createElement('div');
        element.setAttribute('data-dsh-wechat-screenshot', 'curtain');
        element.style.cssText = 'position:fixed;inset:0;z-index:2147483000;background:#000;pointer-events:none;';
        document.body.appendChild(element);
        curtain = element;
      } catch {
        curtain = null;
      }
    }

    function hideCurtain() {
      if (curtain === null) return;
      try {
        curtain.remove();
      } catch {
        /* ignore */
      }
      curtain = null;
    }

    function focusEditor() {
      try {
        const editor = document.querySelector('[contenteditable="true"]');
        if (editor instanceof HTMLElement) editor.focus({ preventScroll: true });
      } catch {
        /* ignore */
      }
    }

    function exitFullscreenIfNeeded() {
      if (!fullscreenRequested) return;
      fullscreenRequested = false;
      try {
        if (document.fullscreenElement && typeof document.exitFullscreen === 'function') {
          const promise = document.exitFullscreen();
          if (promise && typeof promise.catch === 'function') promise.catch(() => undefined);
        }
      } catch {
        /* ignore */
      }
    }

    function enterFullscreenIfPossible() {
      if (document.fullscreenElement) return;
      const element = document.documentElement;
      if (!element || typeof element.requestFullscreen !== 'function') return;
      fullscreenRequested = true;
      try {
        const promise = element.requestFullscreen({ navigationUI: 'hide' });
        if (promise && typeof promise.catch === 'function') promise.catch(() => undefined);
      } catch {
        fullscreenRequested = false;
      }
    }

    function showToast(message, kind = 'success', duration = 2600) {
      if (toastTimer) {
        clearTimeout(toastTimer);
        toastTimer = 0;
      }
      setState({ toast: { message, kind, id: Date.now() } });
      toastTimer = window.setTimeout(() => {
        toastTimer = 0;
        setState({ toast: null });
      }, duration);
    }

    function shotFetch(url, init = {}) {
      return fetch(url, { ...init, signal: AbortSignal.timeout(20000) });
    }

    async function requestWindowRestore() {
      for (let attempt = 0; attempt < 2; attempt += 1) {
        try {
          const response = await shotFetch('/dsh-wechat-screenshot/restore', {
            method: 'POST',
            headers: { 'x-dsh-shot': '1' },
          });
          if (response.ok) return true;
        } catch {
          /* retry once */
        }
        if (attempt === 0) await new Promise((resolve) => setTimeout(resolve, 200));
      }
      return false;
    }

    async function requestWindowShow() {
      try {
        const response = await shotFetch('/dsh-wechat-screenshot/show', {
          method: 'POST',
          headers: { 'x-dsh-shot': '1' },
        });
        return response.ok;
      } catch {
        return false;
      }
    }

    function close(options) {
      if (closing) return Promise.resolve();
      captureSequence += 1;
      if (state.phase === 'capturing') window.dshShotDesktop?.cancel?.().catch(() => {});
      document.documentElement.classList.remove('wxshot-active');
      if (heldWindow) {
        closing = true;
        const finish = () => {
          heldWindow = false;
          closing = false;
          hideCurtain();
          exitFullscreenIfNeeded();
          revokeObjectUrl();
          state = createInitial();
          notify();
          if (options?.focus !== false) window.setTimeout(() => focusEditor(), 0);
        };
        return requestWindowRestore().then((restored) => {
          finish();
          if (!restored) showToast('窗口恢复失败，请刷新页面', 'error', 6000);
        });
      }
      hideCurtain();
      exitFullscreenIfNeeded();
      revokeObjectUrl();
      state = createInitial();
      notify();
      if (options?.focus !== false) {
        window.setTimeout(() => focusEditor(), 0);
      }
      return Promise.resolve();
    }

    async function begin(mode) {
      if (state.phase === 'capturing') return;
      if (state.phase !== 'idle') await close({ focus: false });
      if (disposed) return;
      const activeMode = mode === 'window' ? 'window' : 'desktop';
      if (toastTimer) {
        clearTimeout(toastTimer);
        toastTimer = 0;
      }
      const sequence = ++captureSequence;
      setState({ ...createInitial(), phase: 'capturing', mode: activeMode });
      // Desktop bridge uses a dedicated hardware-composited renderer.
      if (window.dshShotDesktop?.capture) {
        try {
          const result = await window.dshShotDesktop.capture(activeMode);
          if (disposed || sequence !== captureSequence) return;
          setState(createInitial());
          if (result?.error) showToast(result.error, 'error', 4200);
          else if (result?.action === 'copy') showToast('已复制到剪贴板，按 Ctrl+V 粘贴');
          else if (result?.action === 'save') showToast(`已保存到 ${result.path}`, 'success', 3600);
          focusEditor();
        } catch (error) {
          if (!disposed) { setState(createInitial()); showToast(messageOf(error), 'error', 4200); }
        }
        return;
      }
      let localUrl = '';
      try {
        const response = await shotFetch(`/dsh-wechat-screenshot/capture?t=${Date.now()}`, {
          method: 'POST',
          headers: { 'content-type': 'application/json', 'x-dsh-shot': '1' },
          body: JSON.stringify({ mode: activeMode }),
        });
        if (!response.ok) {
          const text = await response.text().catch(() => '');
          throw new Error(parseErrorText(text, response.status));
        }
        const meta = decodeMeta(response.headers.get('x-dsh-shot-meta'));
        heldWindow = activeMode === 'desktop' && meta.windowHeld === true;
        const blob = await response.blob();
        if (!blob || blob.size === 0) throw new Error('截图服务返回了空图片');
        localUrl = URL.createObjectURL(blob);
        const image = await loadImage(localUrl);
        if (sequence !== captureSequence || disposed) {
          if (heldWindow) {
            heldWindow = false;
            await requestWindowRestore();
          }
          try {
            URL.revokeObjectURL(localUrl);
          } catch {
            /* ignore */
          }
          return;
        }
        revokeObjectUrl();
        objectUrl = localUrl;
        setState({
          ...createInitial(),
          phase: 'ready',
          mode: activeMode,
          imageUrl: localUrl,
          image,
          imageWidth: image.naturalWidth,
          imageHeight: image.naturalHeight,
          screen: meta.screen ?? { x: 0, y: 0, width: image.naturalWidth, height: image.naturalHeight },
          windows: Array.isArray(meta.windows) ? meta.windows : [],
        });
        if (heldWindow) {
          await new Promise((resolve) => setTimeout(resolve, 30));
          const shown = await requestWindowShow();
          if (shown) {
            try {
              window.focus();
              const surface = document.querySelector('[data-dsh-wechat-screenshot="overlay"]');
              if (surface instanceof HTMLElement) surface.focus({ preventScroll: true });
            } catch {
              /* focus is best effort */
            }
          }
          if (!shown) {
            heldWindow = false;
            await requestWindowRestore();
            close({ focus: false });
            showToast('无法显示截图窗口', 'error', 4000);
          }
        }
      } catch (error) {
        if (localUrl) {
          try {
            URL.revokeObjectURL(localUrl);
          } catch {
            /* ignore */
          }
        }
        if (heldWindow) {
          heldWindow = false;
          await requestWindowRestore();
        }
        hideCurtain();
        if (sequence !== captureSequence || disposed) return;
        setState({ ...createInitial(), phase: 'error', mode: activeMode, error: messageOf(error) });
      }
    }

    function viewportOf() {
      return {
        width: Math.max(1, window.innerWidth || 1),
        height: Math.max(1, window.innerHeight || 1),
      };
    }

    function fitOf(snapshot, viewport) {
      if (!snapshot.imageWidth || !snapshot.imageHeight) return null;
      const scale = Math.min(viewport.width / snapshot.imageWidth, viewport.height / snapshot.imageHeight);
      if (!Number.isFinite(scale) || scale <= 0) return null;
      const width = snapshot.imageWidth * scale;
      const height = snapshot.imageHeight * scale;
      return {
        scale,
        width,
        height,
        left: (viewport.width - width) / 2,
        top: (viewport.height - height) / 2,
      };
    }

    function rectOf(points) {
      const first = points[0];
      const last = points[points.length - 1];
      const x = Math.min(first.x, last.x);
      const y = Math.min(first.y, last.y);
      return { x, y, w: Math.abs(first.x - last.x), h: Math.abs(first.y - last.y) };
    }

    function drawArrow(context, points) {
      const first = points[0];
      const last = points[points.length - 1];
      const angle = Math.atan2(last.y - first.y, last.x - first.x);
      const head = 11;
      context.beginPath();
      context.moveTo(first.x, first.y);
      context.lineTo(last.x, last.y);
      context.stroke();
      context.beginPath();
      context.moveTo(last.x, last.y);
      context.lineTo(last.x - head * Math.cos(angle - Math.PI / 7), last.y - head * Math.sin(angle - Math.PI / 7));
      context.lineTo(last.x - head * Math.cos(angle + Math.PI / 7), last.y - head * Math.sin(angle + Math.PI / 7));
      context.closePath();
      context.fill();
    }

    let mosaicScratch = null;

    function drawShape(context, shape, scale, source) {
      const points = shape.points;
      if (!points || points.length === 0) {
        if (shape.tool === 'index' || shape.tool === 'text') {
          /* fall through to the special drawings below */
        } else {
          return;
        }
      }
      context.save();
      context.scale(scale, scale);
      const color = shape.color || '#ff3b30';
      context.strokeStyle = color;
      context.fillStyle = color;
      context.lineWidth = shape.width || 3;
      context.lineCap = 'round';
      context.lineJoin = 'round';

      if (shape.tool === 'rect') {
        const rect = rectOf(points);
        context.strokeRect(rect.x, rect.y, rect.w, rect.h);
      } else if (shape.tool === 'ellipse') {
        const rect = rectOf(points);
        context.beginPath();
        context.ellipse(rect.x + rect.w / 2, rect.y + rect.h / 2, Math.max(0.5, rect.w / 2), Math.max(0.5, rect.h / 2), 0, 0, Math.PI * 2);
        context.stroke();
      } else if (shape.tool === 'arrow') {
        drawArrow(context, points);
      } else if (shape.tool === 'pen') {
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for (let index = 1; index < points.length; index += 1) {
          context.lineTo(points[index].x, points[index].y);
        }
        if (points.length === 1) context.lineTo(points[0].x + 0.01, points[0].y + 0.01);
        context.stroke();
      } else if (shape.tool === 'mosaic' && source && source.image) {
        const rect = rectOf(points);
        const sourceX = source.x + rect.x * source.scale;
        const sourceY = source.y + rect.y * source.scale;
        const sourceWidth = rect.w * source.scale;
        const sourceHeight = rect.h * source.scale;
        if (rect.w > 1 && rect.h > 1 && sourceWidth > 1 && sourceHeight > 1) {
          const blocks = Math.max(1, Math.round(Math.max(rect.w, rect.h) / 9));
          const temp = mosaicScratch || (mosaicScratch = document.createElement('canvas'));
          temp.width = Math.max(2, Math.round((rect.w / Math.max(rect.w, rect.h)) * blocks));
          temp.height = Math.max(2, Math.round((rect.h / Math.max(rect.w, rect.h)) * blocks));
          const tempContext = temp.getContext('2d');
          tempContext.imageSmoothingEnabled = true;
          tempContext.drawImage(source.image, sourceX, sourceY, sourceWidth, sourceHeight, 0, 0, temp.width, temp.height);
          context.imageSmoothingEnabled = false;
          context.drawImage(temp, 0, 0, temp.width, temp.height, rect.x, rect.y, rect.w, rect.h);
        }
      } else if (shape.tool === 'text') {
        const size = shape.size || 18;
        context.font = `600 ${size}px system-ui,-apple-system,"Segoe UI","Microsoft YaHei",sans-serif`;
        context.textBaseline = 'top';
        const lines = String(shape.text || '').split('\n');
        const lineHeight = size * 1.35;
        for (let index = 0; index < lines.length; index += 1) {
          context.fillText(lines[index], shape.x, shape.y + index * lineHeight);
        }
      } else if (shape.tool === 'index') {
        const radius = shape.radius || 11;
        context.beginPath();
        context.arc(shape.x, shape.y, radius, 0, Math.PI * 2);
        context.fill();
        context.fillStyle = '#fff';
        context.font = `700 ${Math.round(radius * 1.15)}px system-ui,-apple-system,"Segoe UI","Microsoft YaHei",sans-serif`;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(String(shape.number ?? ''), shape.x, shape.y + 0.5);
      }
      context.restore();
    }

    function composeBlob() {
      return new Promise((resolve, reject) => {
        const snapshot = getState();
        const viewport = viewportOf();
        const fit = fitOf(snapshot, viewport);
        if (!fit || !snapshot.image) {
          reject(new Error('没有可保存的截图'));
          return;
        }
        const selection = snapshot.selection;
        const useSelection = selection !== null && selection.w >= 2 && selection.h >= 2;
        const crop = useSelection
          ? {
              x: clamp(selection.x / fit.scale, 0, Math.max(0, snapshot.imageWidth - 1)),
              y: clamp(selection.y / fit.scale, 0, Math.max(0, snapshot.imageHeight - 1)),
              w: 0,
              h: 0,
            }
          : { x: 0, y: 0, w: snapshot.imageWidth, h: snapshot.imageHeight };
        if (useSelection) {
          crop.w = clamp(selection.w / fit.scale, 1, snapshot.imageWidth - crop.x);
          crop.h = clamp(selection.h / fit.scale, 1, snapshot.imageHeight - crop.y);
        }
        const width = Math.max(1, Math.round(crop.w));
        const height = Math.max(1, Math.round(crop.h));
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext('2d');
        if (!context) {
          reject(new Error('无法创建画布'));
          return;
        }
        context.imageSmoothingEnabled = true;
        context.drawImage(snapshot.image, crop.x, crop.y, crop.w, crop.h, 0, 0, width, height);
        const scale = width / Math.max(1, useSelection ? selection.w : snapshot.imageWidth);
        const source = {
          image: snapshot.image,
          x: crop.x,
          y: crop.y,
          scale: 1 / fit.scale,
        };
        for (const shape of snapshot.shapes) drawShape(context, shape, scale, source);
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else reject(new Error('无法生成 PNG'));
        }, 'image/png');
      });
    }

    async function copyBlob(blob) {
      let hostFailure = null;
      try {
        const response = await shotFetch('/dsh-wechat-screenshot/copy', {
          method: 'POST',
          headers: { 'content-type': 'image/png', 'x-dsh-shot': '1' },
          body: blob,
        });
        if (response.ok) return;
        const text = await response.text().catch(() => '');
        hostFailure = new Error(parseErrorText(text, response.status));
      } catch (error) {
        hostFailure = error;
      }
      try {
        if (navigator.clipboard && typeof navigator.clipboard.write === 'function' && typeof window.ClipboardItem === 'function') {
          await navigator.clipboard.write([new window.ClipboardItem({ 'image/png': blob })]);
          return;
        }
      } catch (error) {
        throw hostFailure ?? error;
      }
      throw hostFailure ?? new Error('无法写入剪贴板');
    }

    async function saveBlob(blob) {
      const response = await shotFetch('/dsh-wechat-screenshot/save', {
        method: 'POST',
        headers: { 'content-type': 'image/png', 'x-dsh-shot': '1' },
        body: blob,
      });
      if (!response.ok) {
        const text = await response.text().catch(() => '');
        throw new Error(parseErrorText(text, response.status));
      }
      const data = await response.json().catch(() => ({}));
      return typeof data.path === 'string' ? data.path : '图片文件夹';
    }

    async function finish(action) {
      const snapshot = getState();
      if (snapshot.phase !== 'ready' || snapshot.busy) return;
      setState({ busy: true, text: null, drawing: null });
      try {
        const blob = await composeBlob();
        if (action === 'save') {
          const path = await saveBlob(blob);
          await close();
          showToast(`已保存到 ${path}`, 'success', 3600);
        } else {
          await copyBlob(blob);
          await close();
          showToast('已复制到剪贴板，回输入框按 Ctrl+V 粘贴', 'success', 2400);
        }
      } catch (error) {
        setState({ busy: false });
        showToast(`操作失败：${messageOf(error)}`, 'error', 4200);
      }
    }

    function undoShape() {
      const snapshot = getState();
      if (snapshot.phase !== 'ready' || snapshot.busy || snapshot.shapes.length === 0) return;
      const last = snapshot.shapes[snapshot.shapes.length - 1];
      setState({
        shapes: snapshot.shapes.slice(0, -1),
        redo: [...snapshot.redo, last],
        text: null,
        drawing: null,
      });
    }

    function redoShape() {
      const snapshot = getState();
      if (snapshot.phase !== 'ready' || snapshot.busy || snapshot.redo.length === 0) return;
      const last = snapshot.redo[snapshot.redo.length - 1];
      setState({
        shapes: [...snapshot.shapes, last],
        redo: snapshot.redo.slice(0, -1),
        text: null,
        drawing: null,
      });
    }

    function onGlobalKey(event) {
      if (event.isComposing) return;
      const phase = state.phase;
      if (phase === 'ready' || phase === 'error') {
        if (state.text) {
          if (event.key === 'Escape') {
            event.preventDefault();
            event.stopPropagation();
            setState({ text: null });
          }
          return;
        }
        if (event.key === 'Escape') {
          event.preventDefault();
          event.stopPropagation();
          close();
          return;
        }
        if (phase === 'ready') {
          const control = event.ctrlKey || event.metaKey;
          if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            event.stopPropagation();
            void finish('copy');
            return;
          }
          if (control && event.code === 'KeyC') {
            event.preventDefault();
            event.stopPropagation();
            void finish('copy');
            return;
          }
          if (control && event.code === 'KeyS') {
            event.preventDefault();
            event.stopPropagation();
            void finish('save');
            return;
          }
          if (control && event.code === 'KeyZ') {
            event.preventDefault();
            event.stopPropagation();
            if (event.shiftKey) redoShape();
            else undoShape();
            return;
          }
          if (control && event.code === 'KeyY') {
            event.preventDefault();
            event.stopPropagation();
            redoShape();
            return;
          }
        }
      }
      if (
        (phase === 'idle' || phase === 'error') &&
        event.altKey &&
        !event.ctrlKey &&
        !event.metaKey &&
        event.code === 'KeyA'
      ) {
        event.preventDefault();
        event.stopImmediatePropagation();
        void begin(event.shiftKey ? 'window' : 'desktop');
      }
    }

    function Icon(props) {
      const name = props.name;
      const common = {
        viewBox: '0 0 20 20',
        width: 18,
        height: 18,
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: 1.6,
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        'aria-hidden': true,
      };
      if (name === 'camera') {
        return h('svg', common, [
          h('path', { key: 'body', d: 'M3 7.2h3l1.2-2h5.6L14 7.2h3v8.3H3z' }),
          h('circle', { key: 'lens', cx: 10, cy: 11.2, r: 3.1 }),
        ]);
      }
      if (name === 'rect') return h('svg', common, h('rect', { x: 3.2, y: 4.6, width: 13.6, height: 10.8, rx: 1.4 }));
      if (name === 'ellipse') return h('svg', common, h('ellipse', { cx: 10, cy: 10, rx: 7.2, ry: 5.6 }));
      if (name === 'arrow') {
        return h('svg', common, [
          h('path', { key: 'line', d: 'M3.5 16.5 16.5 3.5' }),
          h('path', { key: 'head', d: 'M10.2 3.5h6.3v6.3' }),
        ]);
      }
      if (name === 'pen') {
        return h('svg', common, h('path', { d: 'M3.6 16.4c3.2-1.1 3.2-4.4 5.5-6.7 1.9-1.9 4.6-2.1 6.3-.4 1.7 1.7 1.5 4.4-.4 6.3-2.3 2.3-5.6 2.3-6.7 5.5' }));
      }
      if (name === 'mosaic') {
        return h('svg', common, [
          h('rect', { key: 'a', x: 3.4, y: 3.4, width: 5, height: 5, rx: 0.5 }),
          h('rect', { key: 'b', x: 11.6, y: 3.4, width: 5, height: 5, rx: 0.5 }),
          h('rect', { key: 'c', x: 3.4, y: 11.6, width: 5, height: 5, rx: 0.5 }),
          h('rect', { key: 'd', x: 11.6, y: 11.6, width: 5, height: 5, rx: 0.5 }),
        ]);
      }
      if (name === 'text') {
        return h('svg', common, [
          h('path', { key: 'stem', d: 'M4.6 4.4h10.8' }),
          h('path', { key: 'bar', d: 'M10 4.4v11.2' }),
          h('path', { key: 'foot', d: 'M7.5 15.6h5' }),
        ]);
      }
      if (name === 'index') {
        return h('svg', common, [
          h('circle', { key: 'c', cx: 10, cy: 10, r: 7.2 }),
          h('path', { key: 'one', d: 'M9.1 7.6 10.8 6.7v6.5' }),
        ]);
      }
      if (name === 'undo') {
        return h('svg', common, [
          h('path', { key: 'a', d: 'M7.5 5.2 4 8.6l3.5 3.4' }),
          h('path', { key: 'b', d: 'M4.4 8.6h5.3c3.2 0 5.2 1.7 5.2 4.4 0 2.1-1.3 3.6-3.4 4.2' }),
        ]);
      }
      if (name === 'redo') {
        return h('svg', common, [
          h('path', { key: 'a', d: 'M12.5 5.2 16 8.6l-3.5 3.4' }),
          h('path', { key: 'b', d: 'M15.6 8.6h-5.3c-3.2 0-5.2 1.7-5.2 4.4 0 2.1 1.3 3.6 3.4 4.2' }),
        ]);
      }
      if (name === 'reselect') {
        return h('svg', common, [
          h('path', { key: 'a', d: 'M3.2 6V3.6h2.4M14.4 3.6h2.4V6M16.8 14v2.4h-2.4M5.6 16.4H3.2V14' }),
          h('path', { key: 'b', d: 'M7 7h6v6H7z', strokeDasharray: '2 2' }),
        ]);
      }
      if (name === 'save') {
        return h('svg', common, [
          h('path', { key: 'a', d: 'M10 3v9' }),
          h('path', { key: 'b', d: 'M6.2 8.8 10 12.6l3.8-3.8' }),
          h('path', { key: 'c', d: 'M3.6 14.2v2.2h12.8v-2.2' }),
        ]);
      }
      if (name === 'close') {
        return h('svg', common, [
          h('path', { key: 'a', d: 'm5 5 10 10' }),
          h('path', { key: 'b', d: 'm15 5-10 10' }),
        ]);
      }
      if (name === 'check') return h('svg', common, h('path', { d: 'm4 10.4 4 4L16 5.6' }));
      if (name === 'scissors') {
        return h('svg', { ...common, viewBox: '0 0 24 24' }, [
          h('circle', { key: 'a', cx: 6, cy: 6, r: 2.6 }),
          h('circle', { key: 'b', cx: 6, cy: 18, r: 2.6 }),
          h('path', { key: 'c', d: 'M8.12 8.12 12 12' }),
          h('path', { key: 'd', d: 'M20 4 8.12 15.88' }),
          h('path', { key: 'e', d: 'M14.8 14.8 20 20' }),
        ]);
      }
      if (name === 'chevron') {
        return h('svg', common, h('path', { d: 'M5 7.5l5 5 5-5' }));
      }
      if (name === 'spinner') {
        return h('svg', { ...common, className: 'wxshot-spin' }, h('path', { d: 'M10 3a7 7 0 1 0 7 7', strokeWidth: 2 }));
      }
      if (name === 'screen') {
        return h('svg', common, [
          h('rect', { key: 'a', x: 2.8, y: 4.2, width: 14.4, height: 9.6, rx: 1.2 }),
          h('path', { key: 'b', d: 'M7.2 16.4h5.6M10 13.8v2.6' }),
        ]);
      }
      return h('svg', common, h('circle', { cx: 10, cy: 10, r: 6 }));
    }

    function ScreenshotButton() {
      const snapshot = useSnapshot();
      const [open, setOpen] = useState(false);
      const [menuStyle, setMenuStyle] = useState(null);
      const anchor = useRef(null);
      const busy = snapshot.phase === 'capturing';
      const stop = (event) => event.stopPropagation();

      useEffect(() => {
        if (!open) return undefined;
        const dismiss = (event) => {
          if (anchor.current !== null && !anchor.current.contains(event.target)) setOpen(false);
        };
        const onKey = (event) => {
          if (event.key === 'Escape') {
            event.preventDefault();
            event.stopPropagation();
            setOpen(false);
          }
        };
        document.addEventListener('pointerdown', dismiss, true);
        document.addEventListener('keydown', onKey, true);
        return () => {
          document.removeEventListener('pointerdown', dismiss, true);
          document.removeEventListener('keydown', onKey, true);
        };
      }, [open]);

      useEffect(() => {
        if (snapshot.phase !== 'idle') setOpen(false);
      }, [snapshot.phase]);

      const start = (mode) => {
        setOpen(false);
        if (!busy) void begin(mode);
      };

      const toggleMenu = () => {
        if (open) {
          setOpen(false);
          return;
        }
        if (anchor.current === null) return;
        const rect = anchor.current.getBoundingClientRect();
        const width = 252;
        const left = clamp(rect.left, 8, Math.max(8, window.innerWidth - width - 8));
        setMenuStyle({ left, bottom: window.innerHeight - rect.top + 6, width });
        setOpen(true);
      };

      return h(
        'div',
        { className: 'wxshot-anchor', ref: anchor },
        h(
          'button',
          {
            type: 'button',
            className: 'wxshot-button wxshot-button-icon',
            title: '截图（Alt+A）',
            'aria-label': '截图（Alt+A）',
            'aria-busy': busy,
            disabled: busy,
            onPointerDown: stop,
            onClick: () => start('desktop'),
          },
          h(Icon, { name: busy ? 'spinner' : 'scissors' }),
        ),
        h(
          'button',
          {
            type: 'button',
            className: 'wxshot-caret',
            title: '截图方式',
            'aria-label': '截图方式',
            'aria-haspopup': 'menu',
            'aria-expanded': open,
            disabled: busy,
            onPointerDown: stop,
            onClick: toggleMenu,
          },
          h(Icon, { name: 'chevron' }),
        ),
        open
          ? h(
              'div',
              {
                className: 'wxshot-menu',
                role: 'menu',
                style: menuStyle,
                onPointerDown: stop,
                onContextMenu: stop,
              },
              h('div', { className: 'wxshot-menu-title' }, '截图方式'),
              h(
                'button',
                {
                  type: 'button',
                  className: 'wxshot-menu-row',
                  role: 'menuitem',
                  onClick: () => start('window'),
                },
                h('span', { className: 'wxshot-menu-icon' }, h(Icon, { name: 'screen' })),
                h(
                  'span',
                  { className: 'wxshot-menu-text' },
                  h('span', { className: 'wxshot-menu-label' }, '保留窗口截图'),
                  h('span', { className: 'wxshot-menu-desc' }, '保留当前 Harness 画面并截图'),
                ),
                h('span', { className: 'wxshot-menu-key' }, 'Shift+Alt+A'),
              ),
              h('div', { className: 'wxshot-menu-foot' }, window.dshShotDesktop?.capture
                ? '默认：隐藏 Harness 窗口截图（点剪刀直接截）'
                : '当前模式保留窗口，点剪刀即可截图'),
            )
          : null,
      );
    }

    function Toolbar(props) {
      const snapshot = props.snapshot;
      const disabled = snapshot.busy;
      const stop = (event) => event.stopPropagation();
      const tool = (id, label, icon) =>
        h(
          'button',
          {
            type: 'button',
            className: 'wxshot-tool' + (snapshot.tool === id ? ' is-active' : ''),
            title: label,
            disabled,
            onPointerDown: stop,
            onClick: () => setState({ tool: id, text: null }),
          },
          h(Icon, { name: icon }),
        );

      return h(
        'div',
        { className: 'wxshot-toolbar', style: props.style, onPointerDown: stop, onContextMenu: stop },
        tool('rect', '矩形', 'rect'),
        tool('ellipse', '椭圆', 'ellipse'),
        tool('arrow', '箭头', 'arrow'),
        tool('pen', '画笔', 'pen'),
        tool('mosaic', '马赛克', 'mosaic'),
        tool('text', '文字', 'text'),
        tool('index', '序号', 'index'),
        h('span', { className: 'wxshot-sep' }),
        h(
          'span',
          { className: 'wxshot-colors' },
          COLORS.map((color) =>
            h('button', {
              key: color,
              type: 'button',
              className: 'wxshot-color' + (snapshot.color === color ? ' is-active' : ''),
              style: { background: color },
              title: `颜色 ${color}`,
              disabled,
              onPointerDown: stop,
              onClick: () => setState({ color }),
            }),
          ),
        ),
        h('span', { className: 'wxshot-sep' }),
        h(
          'button',
          {
            type: 'button',
            className: 'wxshot-tool',
            title: '撤销 (Ctrl+Z)',
            disabled: disabled || snapshot.shapes.length === 0,
            onPointerDown: stop,
            onClick: undoShape,
          },
          h(Icon, { name: 'undo' }),
        ),
        h(
          'button',
          {
            type: 'button',
            className: 'wxshot-tool',
            title: '重做 (Ctrl+Shift+Z)',
            disabled: disabled || snapshot.redo.length === 0,
            onPointerDown: stop,
            onClick: redoShape,
          },
          h(Icon, { name: 'redo' }),
        ),
        h(
          'button',
          {
            type: 'button',
            className: 'wxshot-tool',
            title: '重新框选',
            disabled,
            onPointerDown: stop,
            onClick: () => setState({ selection: null, shapes: [], redo: [], text: null, hover: -1 }),
          },
          h(Icon, { name: 'reselect' }),
        ),
        h('span', { className: 'wxshot-sep' }),
        h(
          'button',
          {
            type: 'button',
            className: 'wxshot-action',
            title: '保存到图片文件夹 (Ctrl+S)',
            disabled,
            onPointerDown: stop,
            onClick: () => void finish('save'),
          },
          h(Icon, { name: 'save' }),
          '保存',
        ),
        h(
          'button',
          {
            type: 'button',
            className: 'wxshot-action',
            title: '取消 (Esc)',
            disabled,
            onPointerDown: stop,
            onClick: () => close(),
          },
          h(Icon, { name: 'close' }),
          '取消',
        ),
        h(
          'button',
          {
            type: 'button',
            className: 'wxshot-action wxshot-primary',
            title: '复制并完成 (Enter)',
            disabled,
            onPointerDown: stop,
            onClick: () => void finish('copy'),
          },
          h(Icon, { name: snapshot.busy ? 'spinner' : 'check' }),
          snapshot.busy ? '处理中' : '完成',
        ),
      );
    }

    function Overlay() {
      const snapshot = useSnapshot();
      const [viewport, setViewport] = useState(viewportOf);
      const [cursor, setCursor] = useState('crosshair');
      const rootRef = useRef(null);
      const imageRef = useRef(null);
      const canvasRef = useRef(null);
      const previewRef = useRef(null);
      const maskRefs = useRef([]);
      const textRef = useRef(null);
      const dragRef = useRef(null);
      const dragBoxRef = useRef(null);
      const dragSizeRef = useRef(null);
      const moveFrame = useRef(0);
      const pendingMove = useRef(null);

      useEffect(
        () => () => {
          if (moveFrame.current) window.cancelAnimationFrame(moveFrame.current);
          moveFrame.current = 0;
          pendingMove.current = null;
        },
        [],
      );

      useEffect(() => {
        const root = document.documentElement;
        if (snapshot.phase === 'ready' || snapshot.phase === 'error') root.classList.add('wxshot-active');
        else root.classList.remove('wxshot-active');
        return () => root.classList.remove('wxshot-active');
      }, [snapshot.phase]);

      useEffect(() => {
        const onViewport = () => setViewport(viewportOf());
        window.addEventListener('resize', onViewport);
        document.addEventListener('fullscreenchange', onViewport);
        return () => {
          window.removeEventListener('resize', onViewport);
          document.removeEventListener('fullscreenchange', onViewport);
        };
      }, []);

      useEffect(() => {
        if (snapshot.phase === 'ready' && rootRef.current) {
          rootRef.current.focus({ preventScroll: true });
        }
        if (snapshot.phase === 'idle') dragRef.current = null;
      }, [snapshot.phase]);

      useEffect(() => {
        if (snapshot.text && textRef.current) textRef.current.focus();
      }, [snapshot.text]);

      const fit = useMemo(
        () => fitOf(snapshot, viewport),
        [snapshot.image, snapshot.imageWidth, snapshot.imageHeight, viewport.width, viewport.height],
      );

      // Four tiny compositor layers replace the full-screen animated box shadow.
      const paintMask = (rect) => {
        if (!fit) return;
        const r = rect || { x: 0, y: 0, w: 0, h: 0 };
        const areas = [
          [0, 0, fit.width, r.y],
          [0, r.y + r.h, fit.width, Math.max(0, fit.height - r.y - r.h)],
          [0, r.y, r.x, r.h],
          [r.x + r.w, r.y, Math.max(0, fit.width - r.x - r.w), r.h],
        ];
        areas.forEach(([x, y, w, h], i) => {
          const node = maskRefs.current[i];
          if (node) node.style.transform = `translate(${fit.left + x}px,${fit.top + y}px) scale(${w},${h})`;
        });
      };
      useLayoutEffect(() => { paintMask(snapshot.selection); }, [fit, snapshot.selection, snapshot.phase]);

      // Finished annotations are rasterized only when the committed content changes.
      useLayoutEffect(() => {
        if (!fit || !snapshot.selection || !canvasRef.current) return;
        const selection = snapshot.selection;
        const ratio = window.devicePixelRatio || 1;
        const width = Math.max(1, Math.ceil(fit.width));
        const height = Math.max(1, Math.ceil(fit.height));
        const canvas = canvasRef.current;
        if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
          canvas.width = Math.round(width * ratio);
          canvas.height = Math.round(height * ratio);
        }
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        const context = canvas.getContext('2d');
        if (!context) return;
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        context.clearRect(0, 0, width, height);
        const source = {
          image: snapshot.image,
          x: selection.x / fit.scale,
          y: selection.y / fit.scale,
          scale: 1 / fit.scale,
        };
        for (const shape of snapshot.shapes) drawShape(context, shape, 1, source);

      }, [fit, snapshot.selection?.x, snapshot.selection?.y, snapshot.shapes, snapshot.image]);

      useLayoutEffect(() => {
        const canvas = canvasRef.current;
        const selection = snapshot.selection;
        if (canvas && selection && fit) {
          canvas.style.clipPath = `inset(0 ${Math.max(0, Math.ceil(fit.width) - selection.w)}px ${Math.max(0, Math.ceil(fit.height) - selection.h)}px 0)`;
        }
      }, [fit, snapshot.selection]);

      const paintPreview = (shape) => {
        const canvas = previewRef.current;
        const selection = getState().selection;
        if (!canvas || !selection || !fit) return;
        const ratio = window.devicePixelRatio || 1;
        const width = Math.max(1, Math.round(selection.w));
        const height = Math.max(1, Math.round(selection.h));
        if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
          canvas.width = Math.round(width * ratio);
          canvas.height = Math.round(height * ratio);
        }
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        const context = canvas.getContext('2d');
        if (!context) return;
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        context.clearRect(0, 0, width, height);
        if (shape) drawShape(context, shape, 1, {
          image: getState().image, x: selection.x / fit.scale,
          y: selection.y / fit.scale, scale: 1 / fit.scale,
        });
      };
      useLayoutEffect(() => {
        if (!snapshot.drawing) paintPreview(null);
      }, [snapshot.drawing, snapshot.selection, fit]);

      if (snapshot.phase === 'idle') return renderToast(snapshot.toast);
      if (snapshot.phase === 'capturing') return null;

      if (snapshot.phase === 'error') {
        return h(
          React.Fragment,
          null,
          h(
            'div',
            {
              className: 'wxshot-overlay',
              style: { background: 'rgba(8,8,10,.6)', cursor: 'default' },
              onPointerDown: (event) => event.stopPropagation(),
              onContextMenu: (event) => event.preventDefault(),
            },
            h(
              'div',
              { className: 'wxshot-error' },
              h('div', { className: 'wxshot-error-title' }, '截图失败'),
              h('div', { className: 'wxshot-error-text' }, snapshot.error || '未知错误'),
              h(
                'div',
                { className: 'wxshot-error-actions' },
                h('button', { type: 'button', className: 'wxshot-btn', onClick: () => close() }, '关闭'),
                h(
                  'button',
                  {
                    type: 'button',
                    className: 'wxshot-btn wxshot-primary',
                    onClick: () => {
                      const mode = snapshot.mode;
                      close({ focus: false });
                      void begin(mode);
                    },
                  },
                  '重试',
                ),
              ),
            ),
          ),
          renderToast(snapshot.toast),
        );
      }

      if (snapshot.phase !== 'ready' || !fit) return null;

      const selection = snapshot.selection;
      const hasSelection = selection !== null && selection.w > 2 && selection.h > 2;
      const absolute = selection ? { x: fit.left + selection.x, y: fit.top + selection.y } : null;

      const toLocal = (point) => {
        if (!fit) return null;
        return {
          x: clamp(point.clientX - fit.left, 0, fit.width),
          y: clamp(point.clientY - fit.top, 0, fit.height),
        };
      };

      const showDragBox = (rect) => {
        const box = dragBoxRef.current;
        const label = dragSizeRef.current;
        if (!box || !label || !fit) return;
        paintMask(rect);
        const left = fit.left + rect.x;
        const top = fit.top + rect.y;
        const width = Math.max(0, rect.w);
        const height = Math.max(0, rect.h);
        box.style.display = 'block';
        box.style.left = `${left}px`;
        box.style.top = `${top}px`;
        box.style.width = `${width}px`;
        box.style.height = `${height}px`;
        label.style.display = 'block';
        label.style.left = `${clamp(left, 4, Math.max(4, viewport.width - 110))}px`;
        label.style.top = `${Math.max(4, top - 26)}px`;
        label.textContent = `${Math.round(width / fit.scale)} × ${Math.round(height / fit.scale)}`;
      };

      const hideDragBox = () => {
        if (dragBoxRef.current) dragBoxRef.current.style.display = 'none';
        if (dragSizeRef.current) dragSizeRef.current.style.display = 'none';
        paintMask(getState().selection);
      };

      const windowRectFor = (win) => ({
        x: (win.x - snapshot.screen.x) * fit.scale,
        y: (win.y - snapshot.screen.y) * fit.scale,
        w: win.width * fit.scale,
        h: win.height * fit.scale,
      });

      const hoverWindowAt = (point) => {
        const current = getState();
        if (!current.screen || current.windows.length === 0) return -1;
        const screenX = current.screen.x + point.x / fit.scale;
        const screenY = current.screen.y + point.y / fit.scale;
        for (let index = 0; index < current.windows.length; index += 1) {
          const win = current.windows[index];
          if (
            screenX >= win.x &&
            screenX <= win.x + win.width &&
            screenY >= win.y &&
            screenY <= win.y + win.height
          ) {
            return index;
          }
        }
        return -1;
      };

      const insideRect = (rect, point) =>
        point.x >= rect.x && point.x <= rect.x + rect.w && point.y >= rect.y && point.y <= rect.y + rect.h;

      const hitHandle = (rect, point) => {
        if (!rect || rect.w < 12 || rect.h < 12) return null;
        const tolerance = 10;
        const nearLeft = Math.abs(point.x - rect.x) <= tolerance;
        const nearRight = Math.abs(point.x - (rect.x + rect.w)) <= tolerance;
        const nearTop = Math.abs(point.y - rect.y) <= tolerance;
        const nearBottom = Math.abs(point.y - (rect.y + rect.h)) <= tolerance;
        const inX = point.x >= rect.x - tolerance && point.x <= rect.x + rect.w + tolerance;
        const inY = point.y >= rect.y - tolerance && point.y <= rect.y + rect.h + tolerance;
        if (!inX || !inY) return null;
        if (nearLeft && nearTop) return 'nw';
        if (nearRight && nearTop) return 'ne';
        if (nearLeft && nearBottom) return 'sw';
        if (nearRight && nearBottom) return 'se';
        if (nearLeft) return 'w';
        if (nearRight) return 'e';
        if (nearTop) return 'n';
        if (nearBottom) return 's';
        return null;
      };

      const resizeSelection = (original, handle, point) => {
        let left = original.x;
        let top = original.y;
        let right = original.x + original.w;
        let bottom = original.y + original.h;
        if (handle.includes('w')) left = clamp(point.x, 0, right - 6);
        if (handle.includes('e')) right = clamp(point.x, left + 6, fit.width);
        if (handle.includes('n')) top = clamp(point.y, 0, bottom - 6);
        if (handle.includes('s')) bottom = clamp(point.y, top + 6, fit.height);
        return { x: left, y: top, w: Math.max(1, right - left), h: Math.max(1, bottom - top) };
      };

      const cursorFor = (point) => {
        if (!snapshot.selection) return 'crosshair';
        const handle = hitHandle(snapshot.selection, point);
        if (handle === 'nw' || handle === 'se') return 'nwse-resize';
        if (handle === 'ne' || handle === 'sw') return 'nesw-resize';
        if (handle === 'n' || handle === 's') return 'ns-resize';
        if (handle === 'e' || handle === 'w') return 'ew-resize';
        return 'crosshair';
      };

      const commitText = () => {
        const current = getState();
        const text = current.text;
        if (!text) return;
        const value = text.value.trim();
        if (!value) {
          setState({ text: null });
          return;
        }
        const shape = {
          tool: 'text',
          x: text.x,
          y: text.y,
          text: value,
          color: current.color,
          width: current.width,
          size: 18,
        };
        setState({ shapes: [...current.shapes, shape], redo: [], text: null });
      };

      const onPointerDown = (event) => {
        if (event.button !== 0) return;
        const current = getState();
        if (current.phase !== 'ready' || current.busy) return;
        const local = toLocal(event);
        if (!local) return;
        event.preventDefault();
        try {
          if (rootRef.current) rootRef.current.setPointerCapture(event.pointerId);
        } catch {
          /* ignore */
        }
        if (current.text) {
          setState({ text: null });
          return;
        }
        const selected = current.selection;
        if (selected) {
          const handle = hitHandle(selected, local);
          if (handle) {
            dragRef.current = { kind: 'resize', handle, original: { ...selected } };
            setState({ text: null });
            return;
          }
          if (insideRect(selected, local)) {
            if (current.tool === 'text') {
              setState({ text: { x: local.x - selected.x, y: local.y - selected.y, value: '' }, hover: -1 });
              return;
            }
            if (current.tool === 'index') {
              const number = current.shapes.filter((shape) => shape.tool === 'index').length + 1;
              setState({
                shapes: [
                  ...current.shapes,
                  {
                    tool: 'index',
                    number,
                    x: local.x - selected.x,
                    y: local.y - selected.y,
                    color: current.color,
                    width: current.width,
                    radius: 11,
                  },
                ],
                redo: [],
                text: null,
              });
              return;
            }
            const shape = {
              tool: current.tool,
              color: current.color,
              width: current.width,
              points: [
                { x: local.x - selected.x, y: local.y - selected.y },
                { x: local.x - selected.x, y: local.y - selected.y },
              ],
            };
            dragRef.current = { kind: 'shape', shape };
            paintPreview(shape);
            setState({ drawing: shape, text: null, hover: -1 });
            return;
          }
        }
        dragRef.current = { kind: 'select', start: local, hovered: current.hover };
        setState({ selection: null, shapes: [], redo: [], drawing: null, text: null, hover: -1 });
        hideDragBox();
      };

      const applyPointerMove = (point) => {
        const current = getState();
        if (current.phase !== 'ready' || !fit) return;
        const local = toLocal(point);
        if (!local) return;
        const drag = dragRef.current;
        if (!drag) {
          if (!current.selection) {
            const hover = hoverWindowAt(local);
            if (hover !== current.hover) setState({ hover });
          }
          const nextCursor = cursorFor(local);
          if (nextCursor !== cursor) setCursor(nextCursor);
          return;
        }
        if (drag.kind === 'select') {
          drag.moved = drag.moved || Math.abs(local.x - drag.start.x) > 4 || Math.abs(local.y - drag.start.y) > 4;
          showDragBox(normalizeRect(drag.start, local, fit));
          return;
        } else if (drag.kind === 'resize') {
          setState({ selection: resizeSelection(drag.original, drag.handle, local) });
        } else if (drag.kind === 'shape') {
          const selected = current.selection;
          const shape = current.drawing;
          if (!selected || !shape) return;
          const x = clamp(local.x - selected.x, 0, Math.max(1, selected.w));
          const y = clamp(local.y - selected.y, 0, Math.max(1, selected.h));
          // The in-progress stroke belongs to this gesture, not React state.
          // Keep all pen samples without cloning its growing point array each frame.
          if (shape.tool === 'pen') {
            const last = shape.points[shape.points.length - 1];
            if (last.x !== x || last.y !== y) shape.points.push({ x, y });
          } else shape.points[1] = { x, y };
          if (!point.deferPaint) paintPreview(shape);
        }
      };

      const cancelPendingMove = () => {
        if (moveFrame.current) {
          window.cancelAnimationFrame(moveFrame.current);
          moveFrame.current = 0;
        }
        pendingMove.current = null;
      };

      const onPointerMove = (event) => {
        const native = event.nativeEvent || event;
        const samples = native.getCoalescedEvents?.() || [];
        const points = (samples.length ? samples : [event]).map(p => ({ clientX: p.clientX, clientY: p.clientY }));
        if (dragRef.current?.kind === 'shape' && getState().drawing?.tool === 'pen') {
          (pendingMove.current || (pendingMove.current = [])).push(...points);
        } else pendingMove.current = [points[points.length - 1]];
        if (moveFrame.current) return;
        moveFrame.current = window.requestAnimationFrame(() => {
          moveFrame.current = 0;
          const points = pendingMove.current;
          pendingMove.current = null;
          points?.forEach((point, i) => applyPointerMove({ ...point, deferPaint: i < points.length - 1 }));
        });
      };

      const onPointerUp = (event) => {
        // Flush the final samples before committing: pointerup can precede rAF.
        if (dragRef.current) {
          pendingMove.current?.forEach(point => applyPointerMove({ ...point, deferPaint: true }));
          applyPointerMove(event);
        }
        cancelPendingMove();
        const drag = dragRef.current;
        dragRef.current = null;
        try {
          if (rootRef.current) rootRef.current.releasePointerCapture(event.pointerId);
        } catch {
          /* ignore */
        }
        if (!drag) return;
        const current = getState();
        if (current.phase !== 'ready') return;
        if (drag.kind === 'select') {
          hideDragBox();
          const local = toLocal(event) ?? drag.start;
          const moved = Math.abs(local.x - drag.start.x) > 4 || Math.abs(local.y - drag.start.y) > 4;
          if (!moved && drag.hovered >= 0) {
            const win = current.windows[drag.hovered];
            if (win && current.screen) {
              const rect = windowRectFor(win);
              setState({ selection: rect, shapes: [], redo: [], drawing: null, hover: -1 });
              return;
            }
          }
          const rect = normalizeRect(drag.start, local, fit);
          if (rect.w < 4 || rect.h < 4) {
            setState({ selection: null, shapes: [], redo: [], drawing: null });
          } else {
            setState({ selection: rect, shapes: [], redo: [], drawing: null });
          }
          return;
        }
        if (drag.kind === 'resize') {
          const selected = current.selection;
          if (selected && (selected.w < 6 || selected.h < 6)) {
            setState({ selection: null, shapes: [], redo: [], drawing: null });
          }
          return;
        }
        if (drag.kind === 'shape') {
          const shape = current.drawing;
          paintPreview(null);
          if (!shape) return;
          const first = shape.points[0];
          const last = shape.points[shape.points.length - 1];
          const width = Math.abs(last.x - first.x);
          const height = Math.abs(last.y - first.y);
          if (shape.tool === 'pen' ? shape.points.length < 2 : width < 2 && height < 2) {
            setState({ drawing: null });
            return;
          }
          setState({ shapes: [...current.shapes, shape], redo: [], drawing: null });
        }
      };

      const onPointerCancel = (event) => {
        cancelPendingMove();
        hideDragBox();
        const drag = dragRef.current;
        dragRef.current = null;
        try {
          if (rootRef.current) rootRef.current.releasePointerCapture(event.pointerId);
        } catch {
          /* ignore */
        }
        if (drag && drag.kind === 'shape') setState({ drawing: null });
      };

      let hoverRect = null;
      if (!selection && snapshot.hover >= 0) {
        const win = snapshot.windows[snapshot.hover];
        if (win) hoverRect = windowRectFor(win);
      }

      let toolbarStyle = null;
      if (hasSelection && absolute) {
        const toolbarWidth = Math.min(760, Math.max(280, viewport.width - 16));
        const minCenter = toolbarWidth / 2 + 8;
        const maxCenter = Math.max(minCenter, viewport.width - toolbarWidth / 2 - 8);
        const center = clamp(absolute.x + selection.w / 2, minCenter, maxCenter);
        const toolbarHeight = viewport.width >= 760 ? 62 : 118;
        let top = absolute.y + selection.h + 12;
        if (top + toolbarHeight > viewport.height) top = Math.max(8, absolute.y - toolbarHeight);
        if (top < 8) top = 8;
        toolbarStyle = {
          left: center,
          top,
          transform: 'translateX(-50%)',
          maxWidth: toolbarWidth,
        };
      }

      const hint = hasSelection
        ? '拖动绘制标注 · Enter 复制 · Esc 退出'
        : snapshot.hover >= 0
          ? '单击选中窗口，或拖动框选区域'
          : '拖动鼠标选择截图区域 · Alt+A 微信式截图';

      const handles = [
        ['nw', 0, 0],
        ['n', 0.5, 0],
        ['ne', 1, 0],
        ['e', 1, 0.5],
        ['se', 1, 1],
        ['s', 0.5, 1],
        ['sw', 0, 1],
        ['w', 0, 0.5],
      ];

      const textEditor = snapshot.text && selection
        ? h('textarea', {
            ref: textRef,
            className: 'wxshot-input',
            value: snapshot.text.value,
            rows: 1,
            spellCheck: false,
            style: {
              left: fit.left + selection.x + snapshot.text.x,
              top: fit.top + selection.y + snapshot.text.y,
              width: Math.max(130, Math.min(280, selection.w - snapshot.text.x + 4)),
              color: snapshot.color,
            },
            onChange: (event) => setState({ text: { ...snapshot.text, value: event.target.value } }),
            onPointerDown: (event) => event.stopPropagation(),
            onKeyDown: (event) => {
              if (event.key === 'Escape') {
                event.preventDefault();
                event.stopPropagation();
                setState({ text: null });
                return;
              }
              if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
                event.preventDefault();
                event.stopPropagation();
                commitText();
              }
            },
            onBlur: () => {
              if (getState().text) commitText();
            },
          })
        : null;

      return h(
        React.Fragment,
        null,
        h(
          'div',
          {
            className: 'wxshot-overlay',
            ref: rootRef,
            tabIndex: -1,
            style: { cursor },
            'data-dsh-wechat-screenshot': 'overlay',
            onPointerDown,
            onPointerMove,
            onPointerUp,
            onPointerCancel,
            onKeyDown: (event) => {
              if (event.key === 'Escape' && getState().text === null) {
                event.preventDefault();
                event.stopPropagation();
                close();
              }
            },
            onContextMenu: (event) => {
              event.preventDefault();
              event.stopPropagation();
              close();
            },
          },
          h('img', {
            ref: imageRef,
            className: 'wxshot-image',
            src: snapshot.imageUrl,
            alt: '',
            draggable: false,
            style: { left: fit.left, top: fit.top, width: fit.width, height: fit.height },
          }),
          h('div', { ref: dragBoxRef, className: 'wxshot-drag' }),
          h('div', { ref: dragSizeRef, className: 'wxshot-drag-size' }),
          [0, 1, 2, 3].map(index => h('div', { key: `dim-${index}`, ref: node => { maskRefs.current[index] = node; }, className: 'wxshot-dim' })),
          hoverRect
            ? h('div', {
                className: 'wxshot-window',
                style: { left: fit.left + hoverRect.x, top: fit.top + hoverRect.y, width: hoverRect.w, height: hoverRect.h },
              })
            : null,
          selection
            ? h('div', {
                className: 'wxshot-sel',
                style: {
                  left: absolute.x,
                  top: absolute.y,
                  width: Math.max(0, selection.w),
                  height: Math.max(0, selection.h),
                },
              })
            : null,
          hasSelection
            ? handles.map(([name, fx, fy]) =>
                h('div', {
                  key: `handle-${name}`,
                  className: 'wxshot-handle',
                  style: {
                    left: absolute.x + selection.w * fx,
                    top: absolute.y + selection.h * fy,
                  },
                }),
              )
            : null,
          hasSelection
            ? h(
                'div',
                {
                  className: 'wxshot-size',
                  style: {
                    left: clamp(absolute.x, 4, Math.max(4, viewport.width - 120)),
                    top: Math.max(4, absolute.y - 26),
                  },
                },
                `${Math.round(selection.w / fit.scale)} × ${Math.round(selection.h / fit.scale)}`,
              )
            : null,
          hasSelection
            ? h('canvas', {
                ref: canvasRef,
                className: 'wxshot-canvas',
                style: { left: absolute.x, top: absolute.y },
              })
            : null,
          hasSelection
            ? h('canvas', {
                ref: previewRef,
                className: 'wxshot-canvas',
                style: { left: absolute.x, top: absolute.y },
              })
            : null,
          hasSelection ? h(Toolbar, { snapshot, style: toolbarStyle }) : null,
          h('div', { className: 'wxshot-hint', style: hasSelection ? { top: 16, bottom: 'auto' } : undefined }, hint),
          h(
            'button',
            {
              type: 'button',
              className: 'wxshot-close',
              title: '退出截图 (Esc)',
              'aria-label': '退出截图',
              onPointerDown: (event) => event.stopPropagation(),
              onClick: () => close(),
            },
            '×',
          ),
          textEditor,
        ),
        renderToast(snapshot.toast),
      );
    }

    // The browser consumes Escape to leave HTML fullscreen before the page sees
    // the keydown. Treat that exit as the same cancel gesture as Escape.
    function onFullscreenChange() {
      if (!fullscreenRequested || document.fullscreenElement) return;
      fullscreenRequested = false;
      if (!disposed && (state.phase === 'ready' || state.phase === 'error' || state.phase === 'capturing')) {
        close({ focus: false });
      }
    }

    function renderToast(toast) {
      if (!toast) return null;
      return h(
        'div',
        {
          key: `toast-${toast.id}`,
          className: 'wxshot-toast' + (toast.kind === 'error' ? ' is-error' : ''),
          role: 'status',
        },
        toast.message,
      );
    }

    function normalizeRect(start, end, fit) {
      const x = clamp(Math.min(start.x, end.x), 0, fit.width);
      const y = clamp(Math.min(start.y, end.y), 0, fit.height);
      const right = clamp(Math.max(start.x, end.x), 0, fit.width);
      const bottom = clamp(Math.max(start.y, end.y), 0, fit.height);
      return { x, y, w: right - x, h: bottom - y };
    }

    function onUnload() {
      window.dshShotDesktop?.cancel?.().catch(() => {});
      document.documentElement.classList.remove('wxshot-active');
      if (heldWindow) {
        heldWindow = false;
        try {
          fetch('/dsh-wechat-screenshot/restore', {
            method: 'POST',
            headers: { 'x-dsh-shot': '1' },
            keepalive: true,
          }).catch(() => undefined);
        } catch {
          /* ignore */
        }
      }
      hideCurtain();
      exitFullscreenIfNeeded();
      if (toastTimer) {
        clearTimeout(toastTimer);
        toastTimer = 0;
      }
      revokeObjectUrl();
    }

    return {
      inject: ['slots'],
      apply(ctx) {
        disposed = false;
        ctx.effect(() => {
          const style = document.createElement('style');
          style.setAttribute('data-dsh-wechat-screenshot', 'styles');
          style.textContent = CSS;
          document.head.appendChild(style);
          return () => style.remove();
        });

        ctx.effect(() => {
          window.addEventListener('keydown', onGlobalKey, true);
          window.addEventListener('beforeunload', onUnload);
          document.addEventListener('fullscreenchange', onFullscreenChange);
          return () => {
            window.removeEventListener('keydown', onGlobalKey, true);
            window.removeEventListener('beforeunload', onUnload);
            document.removeEventListener('fullscreenchange', onFullscreenChange);
          };
        });

        ctx.effect(() => () => {
          disposed = true;
          if (toastTimer) {
            clearTimeout(toastTimer);
            toastTimer = 0;
          }
          close({ focus: false });
        });

        ctx.slots.inject('conversation.input.left', () =>
          ctx.slots.register(
            {
              name: 'conversation.input.left',
              id: 'dsh-wechat-screenshot',
              order: 8,
            },
            ScreenshotButton,
          ),
        );

        ctx.slots.inject('shell.overlay', () =>
          ctx.slots.register(
            {
              name: 'shell.overlay',
              id: 'dsh-wechat-screenshot-overlay',
              order: 110,
            },
            Overlay,
          ),
        );
      },
    };
  },
});
