import React from 'react';
import {createRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
window.React=React;
window.nativeFlush=flushSync;
const root=createRoot(document.getElementById('root'));
let session=null,frame=0,lastFrame=0,frames=[],lastTitle=0;
function tick(now){
  if(lastFrame)frames.push(now-lastFrame);
  lastFrame=now;
  if(frames.length>10000)frames.shift();
  if(now-lastTitle>1000){const recent=frames.slice(-165);document.title='DSH Screenshot GPU PERF '+Math.round(recent.length*1000/(recent.reduce((a,b)=>a+b,0)||1))+' Hz';lastTitle=now;}
  frame=requestAnimationFrame(tick);
}
window.finishNative=(error)=>{
  if(!session)return;
  cancelAnimationFrame(frame);
  const sorted=[...frames].sort((a,b)=>a-b);
  const sum=frames.reduce((a,b)=>a+b,0);
  URL.revokeObjectURL(session.image);
  window.nativeShot.complete({id:session.id,error,metrics:{frameCount:frames.length,averageFrameMs:sum/Math.max(1,frames.length),p95FrameMs:sorted[Math.floor(sorted.length*.95)]||0,maxFrameMs:sorted.at(-1)||0}});
  session=null;
};
window.fetch=async(url,options)=>{
  const action=url==='/dsh-wechat-screenshot/copy'?'copy':url==='/dsh-wechat-screenshot/save'?'save':null;
  if(!action||!session)throw Error('截图会话已结束');
  try{
    const result=await window.nativeShot.exportImage({id:session.id,action,bytes:new Uint8Array(await options.body.arrayBuffer())});
    return new Response(JSON.stringify(result),{status:200,headers:{'content-type':'application/json'}});
  }catch(error){return new Response(JSON.stringify({error:error.message}),{status:500});}
};
window.__ModuleLoader__={load({factory}){
  const plugin=factory(()=>React);
  plugin.apply({effect:callback=>callback(),slots:{inject:(_name,callback)=>callback(),register:(meta,component)=>{
    if(meta.name==='shell.overlay')root.render(React.createElement(component));
  }}});
}};
window.nativeShot.onOpen(async payload=>{
  try {
    window.nativeShot.stage('renderer callback');
    // contextBridge arguments are frozen; keep mutable session data locally.
    payload={...payload};
    session=payload;frames=[];lastFrame=0;lastTitle=0;cancelAnimationFrame(frame);
    await window.openNative(payload);
    window.nativeShot.stage('image decoded');
    await new Promise(requestAnimationFrame);await new Promise(requestAnimationFrame);
    window.nativeShot.stage('frames ready');
    if(session?.id!==payload.id)return;
    frame=requestAnimationFrame(tick);
    window.nativeShot.painted(payload.id);
  } catch(error) {
    if(session)window.finishNative(error.message);
    else window.nativeShot.complete({id:payload.id,error:error.message,metrics:{}});
  }
});
// Host cancellation must also stop the renderer's animation loop.
window.nativeShot.onCancel(id=>{if(session?.id===id)window.finishNative();});
// The generated plugin module follows this entry in the bundle.
