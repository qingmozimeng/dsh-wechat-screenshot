const {contextBridge,ipcRenderer}=require('electron');
let imageUrl=null;
contextBridge.exposeInMainWorld('nativeShot',{
 ready:()=>ipcRenderer.send('dsh-shot:ready'),
 onCancel:callback=>ipcRenderer.on('dsh-shot:cancelled',(_event,id)=>callback(id)),
 stage:stage=>ipcRenderer.send('dsh-shot:debug',stage),
 onOpen:callback=>ipcRenderer.on('dsh-shot:open',(_event,payload)=>{
   ipcRenderer.send('dsh-shot:debug','preload received');
   if(imageUrl)URL.revokeObjectURL(imageUrl);
   const {imageBytes,...data}=payload;
   imageUrl=URL.createObjectURL(new Blob([imageBytes],{type:payload.mime}));
   ipcRenderer.send('dsh-shot:debug','preload blob ready');
   callback({...data,image:imageUrl});
   ipcRenderer.send('dsh-shot:debug','preload delivered');
 }),
 painted:id=>ipcRenderer.send('dsh-shot:painted',id),
 exportImage:payload=>ipcRenderer.invoke('dsh-shot:export',payload),
 complete:payload=>{ipcRenderer.send('dsh-shot:complete',payload);if(imageUrl)URL.revokeObjectURL(imageUrl);imageUrl=null;},
});
