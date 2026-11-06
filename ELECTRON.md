# Electron 接入（1.3.1 修复版）

截图必须是可选功能。插件被卸载、移动、更新或加载失败时，DSH 应继续启动。安装 npm 包不会自动修改 Electron 启动器。

## 没有现有 preload 的宿主

在宿主自己的代码中保留下面的 try/catch。不要把安装路径写死成别人的 E 盘路径，也不要在启动时创建截图窗口或启动截图辅助进程。

```js
const { app, BrowserWindow } = require('electron');
let mainWindow;
let screenshotPreload;
let disposeScreenshot;
try {
  const preload = require.resolve('dsh-wechat-screenshot/preload');
  const install = require('dsh-wechat-screenshot/electron');
  disposeScreenshot = install(() => mainWindow, {
    origin: 'http://127.0.0.1:3080',
  });
  screenshotPreload = preload;
} catch (error) {
  console.warn('截图功能暂不可用，DSH 继续启动:', error.message);
}
app.whenReady().then(() => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      ...(screenshotPreload ? { preload: screenshotPreload } : {}),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });
  // 接回宿主原有的登录和 loadURL 流程。
});
```

DSH profile 与宿主依赖目录不同时，用 createRequire 从实际 profile 解析插件。上例是桥接示例，不能替换整个启动器。

## 已有 preload 的宿主

必须保留宿主原有 preload，在其中合并桥接代码。覆盖宿主 preload 会破坏其他插件依赖的桥接能力。

```js
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('dshShotDesktop', {
  capture: mode => ipcRenderer.invoke('dsh-shot:start', mode),
  cancel: () => ipcRenderer.invoke('dsh-shot:cancel'),
});
```

## 生命周期

- 注册时不创建窗口、不启动 PowerShell；点击截图才开始。
- 同一新版重复接入返回原有清理函数，不重复注册 IPC。
- 与旧版桥接共用 IPC 时会报告冲突；由外层 try/catch 隔离，不能覆盖其他注册者。
- 返回的 disposeScreenshot() 会结束会话、恢复本插件隐藏的主窗口、销毁截图窗口、清理自己的 IPC 和辅助进程。应用退出时自动调用。
- 准备阶段最多 15 秒；界面已显示后最多 10 分钟。取消、渲染崩溃、主页面导航或重载也会恢复。
- 截图结束后停止辅助进程，空闲 30 秒销毁截图窗口。首次或再次冷启动截图可能略慢。
- 默认不写诊断日志；需要排查时传 diagnostics: true，异步写入宿主 userData/screenshot-debug.jsonl。
- 来源限制仍校验主窗口、主 frame 和指定 origin。

## 普通浏览器模式

没有 Electron 桥接时仍能截图、框选、标注、保存和复制，但不再按窗口标题隐藏、全屏化或置顶 DSH。截图可能包含当前浏览器窗口；要隐藏 DSH 截桌面，应使用已接入的独立 Electron 模式。

## 不要同时安装多个名称的副本

旧本地包 dsh-wechat-shot、候选包 dsh-qingmozimeng-shot 与本包 dsh-wechat-screenshot 的桥接协议相同。只启用一个；先确定当前安装的包名再部署。本修复源码基于用户提供的 1.3.0 备份，不包含另一个 1.4.0 开发目录新增的吸附线功能。

