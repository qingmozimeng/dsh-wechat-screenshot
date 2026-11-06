const fs=require('fs');const path=require('path');const esbuild=require('esbuild');
const base=fs.readFileSync(path.join(__dirname,'../client.js'),'utf8');
let native=base.replace('    function close(options) {','    function close(options) {\n      window.finishNative();');
native=native.replace(/\.wxshot-drag\{[^}]+\}/,'.wxshot-drag{position:absolute;inset:0;z-index:3;pointer-events:none;display:none}.wxshot-drag-edge{position:absolute;left:0;top:0;width:1px;height:1px;transform-origin:0 0;background:#07c160;will-change:transform}');
native=native.replace('box-shadow:0 0 0 1px rgba(0,0,0,.5),0 0 24px rgba(0,0,0,.25)','box-shadow:0 0 0 1px rgba(0,0,0,.5)');
native=native.replace("h('div', { ref: dragBoxRef, className: 'wxshot-drag' })","h('div', { ref: dragBoxRef, className: 'wxshot-drag' }, [0,1,2,3].map(i => h('div', { key: i, className: 'wxshot-drag-edge' })))");
const dimensions='        box.style.left = `${left}px`;\n        box.style.top = `${top}px`;\n        box.style.width = `${width}px`;\n        box.style.height = `${height}px`;';
if(!native.includes(dimensions))throw Error('drag dimensions not found');
native=native.replace(dimensions,`        const edges = [[left,top,width,1.5], [left,top+height-1.5,width,1.5], [left,top,1.5,height], [left+width-1.5,top,1.5,height]];
        edges.forEach(([x,y,w,h],i) => { box.children[i].style.transform = \`translate(\${x}px,\${y}px) scale(\${Math.max(0,w)},\${Math.max(0,h)})\`; });`);
native=native.replace('      const onPointerMove = (event) => {',`      const onPointerMove = (event) => {
        // Pointer moves are already coalesced by Chromium. Update the lightweight
        // selection layers immediately instead of adding another rAF delay.
        if (dragRef.current?.kind === 'select') { applyPointerMove(event); return; }
        if (dragRef.current?.kind === 'shape') {
          const samples=(event.nativeEvent || event).getCoalescedEvents?.() || [];
          if(samples.length) samples.forEach((point,i)=>applyPointerMove({clientX:point.clientX,clientY:point.clientY,deferPaint:i<samples.length-1}));
          else applyPointerMove(event);
          return;
        }
`);
const point="    return {\n      inject: ['slots'],";
if(!native.includes(point))throw Error('no insertion point');
native=native.replace(point,`    window.openNative = async payload => {
      const image = await loadImage(payload.image);
      window.nativeFlush(() => setState({ ...createInitial(), phase: 'ready', mode: payload.mode,
        imageUrl: payload.image, image, imageWidth: image.naturalWidth, imageHeight: image.naturalHeight,
        screen: payload.screen, windows: payload.windows || [] }));
    };
`+point);
fs.writeFileSync(__dirname+'/plugin.generated.js',native);
esbuild.buildSync({entryPoints:[__dirname+'/renderer-entry.jsx'],bundle:true,minify:true,define:{'process.env.NODE_ENV':'"production"'},outfile:__dirname+'/renderer.js',footer:{js:native+'\nwindow.nativeShot.ready();'}});
