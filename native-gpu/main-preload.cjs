const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('dshShotDesktop',{
  capture: mode => ipcRenderer.invoke('dsh-shot:start', mode),
  cancel: () => ipcRenderer.invoke('dsh-shot:cancel'),
});
