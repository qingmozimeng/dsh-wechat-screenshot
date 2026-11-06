(()=>{var dd=Object.create;var Z0=Object.defineProperty;var hd=Object.getOwnPropertyDescriptor;var gd=Object.getOwnPropertyNames;var Sd=Object.getPrototypeOf,sd=Object.prototype.hasOwnProperty;var Vt=(l,t)=>()=>{try{return t||l((t={exports:{}}).exports,t),t.exports}catch(u){throw t=0,u}};var Td=(l,t,u,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of gd(t))!sd.call(l,n)&&n!==u&&Z0(l,n,{get:()=>t[n],enumerable:!(a=hd(t,n))||a.enumerable});return l};var Bf=(l,t,u)=>(u=l!=null?dd(Sd(l)):{},Td(t||!l||!l.__esModule?Z0(u,"default",{value:l,enumerable:!0}):u,l));var l1=Vt(N=>{"use strict";var Qf=Symbol.for("react.transitional.element"),Ed=Symbol.for("react.portal"),zd=Symbol.for("react.fragment"),bd=Symbol.for("react.strict_mode"),Od=Symbol.for("react.profiler"),_d=Symbol.for("react.consumer"),Ad=Symbol.for("react.context"),Nd=Symbol.for("react.forward_ref"),rd=Symbol.for("react.suspense"),Dd=Symbol.for("react.memo"),J0=Symbol.for("react.lazy"),Md=Symbol.for("react.activity"),Ud=Symbol.for("react.view_transition"),x0=Symbol.iterator;function Cd(l){return l===null||typeof l!="object"?null:(l=x0&&l[x0]||l["@@iterator"],typeof l=="function"?l:null)}var w0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},F0=Object.assign,W0={};function pu(l,t,u){this.props=l,this.context=t,this.refs=W0,this.updater=u||w0}pu.prototype.isReactComponent={};pu.prototype.setState=function(l,t){if(typeof l!="object"&&typeof l!="function"&&l!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,l,t,"setState")};pu.prototype.forceUpdate=function(l){this.updater.enqueueForceUpdate(this,l,"forceUpdate")};function $0(){}$0.prototype=pu.prototype;function jf(l,t,u){this.props=l,this.context=t,this.refs=W0,this.updater=u||w0}var Vf=jf.prototype=new $0;Vf.constructor=jf;F0(Vf,pu.prototype);Vf.isPureReactComponent=!0;var L0=Array.isArray;function Xf(){}var p={H:null,A:null,T:null,S:null},I0=Object.prototype.hasOwnProperty;function Zf(l,t,u){var a=u.ref;return{$$typeof:Qf,type:l,key:t,ref:a!==void 0?a:null,props:u}}function Hd(l,t){return Zf(l.type,t,l.props)}function xf(l){return typeof l=="object"&&l!==null&&l.$$typeof===Qf}function Rd(l){var t={"=":"=0",":":"=2"};return"$"+l.replace(/[=:]/g,function(u){return t[u]})}var p0=/\/+/g;function Gf(l,t){return typeof l=="object"&&l!==null&&l.key!=null?Rd(""+l.key):t.toString(36)}function Yd(l){switch(l.status){case"fulfilled":return l.value;case"rejected":throw l.reason;default:switch(typeof l.status=="string"?l.then(Xf,Xf):(l.status="pending",l.then(function(t){l.status==="pending"&&(l.status="fulfilled",l.value=t)},function(t){l.status==="pending"&&(l.status="rejected",l.reason=t)})),l.status){case"fulfilled":return l.value;case"rejected":throw l.reason}}throw l}function Lu(l,t,u,a,n){var e=typeof l;(e==="undefined"||e==="boolean")&&(l=null);var f=!1;if(l===null)f=!0;else switch(e){case"bigint":case"string":case"number":f=!0;break;case"object":switch(l.$$typeof){case Qf:case Ed:f=!0;break;case J0:return f=l._init,Lu(f(l._payload),t,u,a,n)}}if(f)return n=n(l),f=a===""?"."+Gf(l,0):a,L0(n)?(u="",f!=null&&(u=f.replace(p0,"$&/")+"/"),Lu(n,t,u,"",function(o){return o})):n!=null&&(xf(n)&&(n=Hd(n,u+(n.key==null||l&&l.key===n.key?"":(""+n.key).replace(p0,"$&/")+"/")+f)),t.push(n)),1;f=0;var c=a===""?".":a+":";if(L0(l))for(var i=0;i<l.length;i++)a=l[i],e=c+Gf(a,i),f+=Lu(a,t,u,e,n);else if(i=Cd(l),typeof i=="function")for(l=i.call(l),i=0;!(a=l.next()).done;)a=a.value,e=c+Gf(a,i++),f+=Lu(a,t,u,e,n);else if(e==="object"){if(typeof l.then=="function")return Lu(Yd(l),t,u,a,n);throw t=String(l),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return f}function pn(l,t,u){if(l==null)return l;var a=[],n=0;return Lu(l,a,"","",function(e){return t.call(u,e,n++)}),a}function qd(l){if(l._status===-1){var t=l._result,u=t();u.then(function(a){(l._status===0||l._status===-1)&&(l._status=1,l._result=a,u.status===void 0&&(u.status="fulfilled",u.value=a))},function(a){(l._status===0||l._status===-1)&&(l._status=2,l._result=a,u.status===void 0&&(u.status="rejected",u.reason=a))}),l._status===-1&&(l._status=0,l._result=u)}if(l._status===1)return l._result.default;throw l._result}var K0=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)};function k0(l){var t=p.T,u={};u.types=t!==null?t.types:null,p.T=u;try{var a=l(),n=p.S;n!==null&&n(u,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(Xf,K0)}catch(e){K0(e)}finally{t!==null&&u.types!==null&&(t.types=u.types),p.T=t}}function P0(l){var t=p.T;if(t!==null){var u=t.types;u===null?t.types=[l]:u.indexOf(l)===-1&&u.push(l)}else k0(P0.bind(null,l))}var Bd={map:pn,forEach:function(l,t,u){pn(l,function(){t.apply(this,arguments)},u)},count:function(l){var t=0;return pn(l,function(){t++}),t},toArray:function(l){return pn(l,function(t){return t})||[]},only:function(l){if(!xf(l))throw Error("React.Children.only expected to receive a single React element child.");return l}};N.Activity=Md;N.Children=Bd;N.Component=pu;N.Fragment=zd;N.Profiler=Od;N.PureComponent=jf;N.StrictMode=bd;N.Suspense=rd;N.ViewTransition=Ud;N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=p;N.__COMPILER_RUNTIME={__proto__:null,c:function(l){return p.H.useMemoCache(l)}};N.addTransitionType=P0;N.cache=function(l){return function(){return l.apply(null,arguments)}};N.cacheSignal=function(){return null};N.cloneElement=function(l,t,u){if(l==null)throw Error("The argument must be a React element, but you passed "+l+".");var a=F0({},l.props),n=l.key;if(t!=null)for(e in t.key!==void 0&&(n=""+t.key),t)!I0.call(t,e)||e==="key"||e==="__self"||e==="__source"||e==="ref"&&t.ref===void 0||(a[e]=t[e]);var e=arguments.length-2;if(e===1)a.children=u;else if(1<e){for(var f=Array(e),c=0;c<e;c++)f[c]=arguments[c+2];a.children=f}return Zf(l.type,n,a)};N.createContext=function(l){return l={$$typeof:Ad,_currentValue:l,_currentValue2:l,_threadCount:0,Provider:null,Consumer:null},l.Provider=l,l.Consumer={$$typeof:_d,_context:l},l};N.createElement=function(l,t,u){var a,n={},e=null;if(t!=null)for(a in t.key!==void 0&&(e=""+t.key),t)I0.call(t,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(n[a]=t[a]);var f=arguments.length-2;if(f===1)n.children=u;else if(1<f){for(var c=Array(f),i=0;i<f;i++)c[i]=arguments[i+2];n.children=c}if(l&&l.defaultProps)for(a in f=l.defaultProps,f)n[a]===void 0&&(n[a]=f[a]);return Zf(l,e,n)};N.createRef=function(){return{current:null}};N.forwardRef=function(l){return{$$typeof:Nd,render:l}};N.isValidElement=xf;N.lazy=function(l){return{$$typeof:J0,_payload:{_status:-1,_result:l},_init:qd}};N.memo=function(l,t){return{$$typeof:Dd,type:l,compare:t===void 0?null:t}};N.startTransition=k0;N.unstable_useCacheRefresh=function(){return p.H.useCacheRefresh()};N.use=function(l){return p.H.use(l)};N.useActionState=function(l,t,u){return p.H.useActionState(l,t,u)};N.useCallback=function(l,t){return p.H.useCallback(l,t)};N.useContext=function(l){return p.H.useContext(l)};N.useDebugValue=function(){};N.useDeferredValue=function(l,t){return p.H.useDeferredValue(l,t)};N.useEffect=function(l,t){return p.H.useEffect(l,t)};N.useEffectEvent=function(l){return p.H.useEffectEvent(l)};N.useId=function(){return p.H.useId()};N.useImperativeHandle=function(l,t,u){return p.H.useImperativeHandle(l,t,u)};N.useInsertionEffect=function(l,t){return p.H.useInsertionEffect(l,t)};N.useLayoutEffect=function(l,t){return p.H.useLayoutEffect(l,t)};N.useMemo=function(l,t){return p.H.useMemo(l,t)};N.useOptimistic=function(l,t){return p.H.useOptimistic(l,t)};N.useReducer=function(l,t,u){return p.H.useReducer(l,t,u)};N.useRef=function(l){return p.H.useRef(l)};N.useState=function(l){return p.H.useState(l)};N.useSyncExternalStore=function(l,t,u){return p.H.useSyncExternalStore(l,t,u)};N.useTransition=function(){return p.H.useTransition()};N.version="19.3.1"});var Kn=Vt((JS,t1)=>{"use strict";t1.exports=l1()});var y1=Vt(F=>{"use strict";function Jf(l,t){var u=l.length;l.push(t);l:for(;0<u;){var a=u-1>>>1,n=l[a];if(0<Jn(n,t))l[a]=t,l[u]=n,u=a;else break l}}function ft(l){return l.length===0?null:l[0]}function Fn(l){if(l.length===0)return null;var t=l[0],u=l.pop();if(u!==t){l[0]=u;l:for(var a=0,n=l.length,e=n>>>1;a<e;){var f=2*(a+1)-1,c=l[f],i=f+1,o=l[i];if(0>Jn(c,u))i<n&&0>Jn(o,c)?(l[a]=o,l[i]=u,a=i):(l[a]=c,l[f]=u,a=f);else if(i<n&&0>Jn(o,u))l[a]=o,l[i]=u,a=i;else break l}}return t}function Jn(l,t){var u=l.sortIndex-t.sortIndex;return u!==0?u:l.id-t.id}F.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(u1=performance,F.unstable_now=function(){return u1.now()}):(Lf=Date,a1=Lf.now(),F.unstable_now=function(){return Lf.now()-a1});var u1,Lf,a1,Ot=[],Zt=[],Gd=1,pl=null,Tl=3,wf=!1,Za=!1,xa=!1,Ff=!1,f1=typeof setTimeout=="function"?setTimeout:null,c1=typeof clearTimeout=="function"?clearTimeout:null,n1=typeof setImmediate<"u"?setImmediate:null;function wn(l){for(var t=ft(Zt);t!==null;){if(t.callback===null)Fn(Zt);else if(t.startTime<=l)Fn(Zt),t.sortIndex=t.expirationTime,Jf(Ot,t);else break;t=ft(Zt)}}function Wf(l){if(xa=!1,wn(l),!Za)if(ft(Ot)!==null)Za=!0,Ju||(Ju=!0,Ku());else{var t=ft(Zt);t!==null&&$f(Wf,t.startTime-l)}}var Ju=!1,La=-1,i1=5,v1=-1;function o1(){return Ff?!0:!(F.unstable_now()-v1<i1)}function pf(){if(Ff=!1,Ju){var l=F.unstable_now();v1=l;var t=!0;try{l:{Za=!1,xa&&(xa=!1,c1(La),La=-1),wf=!0;var u=Tl;try{t:{for(wn(l),pl=ft(Ot);pl!==null&&!(pl.expirationTime>l&&o1());){var a=pl.callback;if(typeof a=="function"){pl.callback=null,Tl=pl.priorityLevel;var n=a(pl.expirationTime<=l);if(l=F.unstable_now(),typeof n=="function"){pl.callback=n,wn(l),t=!0;break t}pl===ft(Ot)&&Fn(Ot),wn(l)}else Fn(Ot);pl=ft(Ot)}if(pl!==null)t=!0;else{var e=ft(Zt);e!==null&&$f(Wf,e.startTime-l),t=!1}}break l}finally{pl=null,Tl=u,wf=!1}t=void 0}}finally{t?Ku():Ju=!1}}}var Ku;typeof n1=="function"?Ku=function(){n1(pf)}:typeof MessageChannel<"u"?(Kf=new MessageChannel,e1=Kf.port2,Kf.port1.onmessage=pf,Ku=function(){e1.postMessage(null)}):Ku=function(){f1(pf,0)};var Kf,e1;function $f(l,t){La=f1(function(){l(F.unstable_now())},t)}F.unstable_IdlePriority=5;F.unstable_ImmediatePriority=1;F.unstable_LowPriority=4;F.unstable_NormalPriority=3;F.unstable_Profiling=null;F.unstable_UserBlockingPriority=2;F.unstable_cancelCallback=function(l){l.callback=null};F.unstable_forceFrameRate=function(l){0>l||125<l?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):i1=0<l?Math.floor(1e3/l):5};F.unstable_getCurrentPriorityLevel=function(){return Tl};F.unstable_next=function(l){switch(Tl){case 1:case 2:case 3:var t=3;break;default:t=Tl}var u=Tl;Tl=t;try{return l()}finally{Tl=u}};F.unstable_requestPaint=function(){Ff=!0};F.unstable_runWithPriority=function(l,t){switch(l){case 1:case 2:case 3:case 4:case 5:break;default:l=3}var u=Tl;Tl=l;try{return t()}finally{Tl=u}};F.unstable_scheduleCallback=function(l,t,u){var a=F.unstable_now();switch(typeof u=="object"&&u!==null?(u=u.delay,u=typeof u=="number"&&0<u?a+u:a):u=a,l){case 1:var n=-1;break;case 2:n=250;break;case 5:n=1073741823;break;case 4:n=1e4;break;default:n=5e3}return n=u+n,l={id:Gd++,callback:t,priorityLevel:l,startTime:u,expirationTime:n,sortIndex:-1},u>a?(l.sortIndex=u,Jf(Zt,l),ft(Ot)===null&&l===ft(Zt)&&(xa?(c1(La),La=-1):xa=!0,$f(Wf,u-a))):(l.sortIndex=n,Jf(Ot,l),Za||wf||(Za=!0,Ju||(Ju=!0,Ku()))),l};F.unstable_shouldYield=o1;F.unstable_wrapCallback=function(l){var t=Tl;return function(){var u=Tl;Tl=t;try{return l.apply(this,arguments)}finally{Tl=u}}}});var d1=Vt((FS,m1)=>{"use strict";m1.exports=y1()});var S1=Vt(El=>{"use strict";var Xd=Kn();function g1(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var u=2;u<arguments.length;u++)t+="&args[]="+encodeURIComponent(arguments[u])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function xt(){}var bl={d:{f:xt,r:function(){throw Error(g1(522))},D:xt,C:xt,L:xt,m:xt,X:xt,S:xt,M:xt},p:0,findDOMNode:null},Qd=Symbol.for("react.portal"),jd=Symbol.for("react.recoverable"),h1=Symbol.for("react.optimistic_key");function Vd(l,t,u){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Qd,key:a==null?null:a===h1?h1:""+a,children:l,containerInfo:t,implementation:u}}var pa=Xd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Wn(l,t){if(l==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}El.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=bl;El.browser=function(l){return{$$typeof:jd,_reason:l}};El.createPortal=function(l,t){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(g1(299));return Vd(l,t,null,u)};El.flushSync=function(l){var t=pa.T,u=bl.p;try{if(pa.T=null,bl.p=2,l)return l()}finally{pa.T=t,bl.p=u,bl.d.f()}};El.preconnect=function(l,t){typeof l=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,bl.d.C(l,t))};El.prefetchDNS=function(l){typeof l=="string"&&bl.d.D(l)};El.preinit=function(l,t){if(typeof l=="string"&&t&&typeof t.as=="string"){var u=t.as,a=Wn(u,t.crossOrigin),n=typeof t.integrity=="string"?t.integrity:void 0,e=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;u==="style"?bl.d.S(l,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:a,integrity:n,fetchPriority:e}):u==="script"&&bl.d.X(l,{crossOrigin:a,integrity:n,fetchPriority:e,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};El.preinitModule=function(l,t){if(typeof l=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var u=Wn(t.as,t.crossOrigin);bl.d.M(l,{crossOrigin:u,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&bl.d.M(l)};El.preload=function(l,t){if(typeof l=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var u=t.as,a=Wn(u,t.crossOrigin);bl.d.L(l,u,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};El.preloadModule=function(l,t){if(typeof l=="string")if(t){var u=Wn(t.as,t.crossOrigin);bl.d.m(l,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:u,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else bl.d.m(l)};El.requestFormReset=function(l){bl.d.r(l)};El.unstable_batchedUpdates=function(l,t){return l(t)};El.useFormState=function(l,t,u){return pa.H.useFormState(l,t,u)};El.useFormStatus=function(){return pa.H.useHostTransitionStatus()};El.version="19.3.1"});var If=Vt(($S,T1)=>{"use strict";function s1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s1)}catch(l){console.error(l)}}s1(),T1.exports=S1()});var ed=Vt(Hf=>{"use strict";var fl=d1(),ao=Kn(),Zd=If();function T(l){var t="https://react.dev/errors/"+l;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var u=2;u<arguments.length;u++)t+="&args[]="+encodeURIComponent(arguments[u])}return"Minified React error #"+l+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function no(l){return!(!l||l.nodeType!==1&&l.nodeType!==9&&l.nodeType!==11)}function Rn(l){for(var t=l,u=t;u&&!u.alternate;)t=u,(t.flags&4098)!==0&&(l=t.return),u=t.return;for(;t.return;)t=t.return;return t.tag===3?l:null}function eo(l){if(l.tag===13){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function fo(l){if(l.tag===31){var t=l.memoizedState;if(t===null&&(l=l.alternate,l!==null&&(t=l.memoizedState)),t!==null)return t.dehydrated}return null}function E1(l){if(Rn(l)!==l)throw Error(T(188))}function xd(l){var t=l.alternate;if(!t){if(t=Rn(l),t===null)throw Error(T(188));return t!==l?null:l}for(var u=l,a=t;;){var n=u.return;if(n===null)break;var e=n.alternate;if(e===null){if(a=n.return,a!==null){u=a;continue}break}if(n.child===e.child){for(e=n.child;e;){if(e===u)return E1(n),l;if(e===a)return E1(n),t;e=e.sibling}throw Error(T(188))}if(u.return!==a.return)u=n,a=e;else{for(var f=!1,c=n.child;c;){if(c===u){f=!0,u=n,a=e;break}if(c===a){f=!0,a=n,u=e;break}c=c.sibling}if(!f){for(c=e.child;c;){if(c===u){f=!0,u=e,a=n;break}if(c===a){f=!0,a=e,u=n;break}c=c.sibling}if(!f)throw Error(T(189))}}if(u.alternate!==a)throw Error(T(190))}if(u.tag!==3)throw Error(T(188));return u.stateNode.current===u?l:t}function co(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l;for(l=l.child;l!==null;){if(t=co(l),t!==null)return t;l=l.sibling}return null}function Hl(l,t,u,a,n,e){for(;l!==null;){if((l.tag===5||l.tag===27||l.tag===6)&&u(l,a,n,e)||(l.tag!==22||l.memoizedState===null)&&(t||l.tag!==5&&l.tag!==27)&&Hl(l.child,t,u,a,n,e))return!0;l=l.sibling}return!1}function Qu(l){for(l=l.return;l!==null;){if(l.tag===3||l.tag===5||l.tag===27)return l;l=l.return}return null}function z1(l){var t=!1;for(l=l.return;l!==null&&(l.tag===4&&(t=!0),!(l.tag===3||l.tag===5||l.tag===27));)l=l.return;return t}function io(l){var t=[null,null],u=Qu(l);return u===null||vo(t,l,u.child,{foundSelf:!1}),t}function vo(l,t,u,a){for(;u!==null;){if(u===t)a.foundSelf=!0;else if(u.tag===5||u.tag===27||u.tag===6){if(a.foundSelf)return l[1]=u,!0;l[0]=u}else if((u.tag!==22||u.memoizedState===null)&&vo(l,t,u.child,a))return!0;u=u.sibling}return!1}function el(l){switch(l.tag){case 5:case 27:case 6:return l.stateNode;case 3:return l.stateNode.containerInfo;default:throw Error(T(559))}}var Pu=null,Uc=null;function Ld(l,t,u){return l===u?!0:l===t?(Pu=l,!0):!1}function pd(l,t,u){return l===u?(Uc=l,!1):l===t?(Uc!==null&&(Pu=l),!0):!1}function b1(l){if(l===null)return null;do l=l===null?null:l.return;while(l&&l.tag!==5&&l.tag!==27&&l.tag!==3);return l||null}function Cc(l,t,u){for(var a=0,n=l;n;n=u(n))a++;n=0;for(var e=t;e;e=u(e))n++;for(;0<a-n;)l=u(l),a--;for(;0<n-a;)t=u(t),n--;for(;a--;){if(l===t||t!==null&&l===t.alternate)return l;l=u(l),t=u(t)}return null}var L=Object.assign,Kd=Symbol.for("react.element"),$n=Symbol.for("react.transitional.element"),Ia=Symbol.for("react.portal"),la=Symbol.for("react.fragment"),oo=Symbol.for("react.strict_mode"),Hc=Symbol.for("react.profiler"),yo=Symbol.for("react.consumer"),mt=Symbol.for("react.context"),Vi=Symbol.for("react.forward_ref"),Rc=Symbol.for("react.suspense"),Yc=Symbol.for("react.suspense_list"),Zi=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),qc=Symbol.for("react.activity"),Jd=Symbol.for("react.legacy_hidden"),wd=Symbol.for("react.memo_cache_sentinel"),Bc=Symbol.for("react.view_transition"),Fd=Symbol.for("react.recoverable"),O1=Symbol.iterator;function Ka(l){return l===null||typeof l!="object"?null:(l=O1&&l[O1]||l["@@iterator"],typeof l=="function"?l:null)}var Wd=Symbol.for("react.client.reference");function Gc(l){if(l==null)return null;if(typeof l=="function")return l.$$typeof===Wd?null:l.displayName||l.name||null;if(typeof l=="string")return l;switch(l){case la:return"Fragment";case Hc:return"Profiler";case oo:return"StrictMode";case Rc:return"Suspense";case Yc:return"SuspenseList";case qc:return"Activity";case Bc:return"ViewTransition"}if(typeof l=="object")switch(l.$$typeof){case Ia:return"Portal";case mt:return l.displayName||"Context";case yo:return(l._context.displayName||"Context")+".Consumer";case Vi:var t=l.render;return l=l.displayName,l||(l=t.displayName||t.name||"",l=l!==""?"ForwardRef("+l+")":"ForwardRef"),l;case Zi:return t=l.displayName||null,t!==null?t:Gc(l.type)||"Memo";case Jt:t=l._payload,l=l._init;try{return Gc(l(t))}catch{}}return null}var ka=Array.isArray,A=ao.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=Zd.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Nu={pending:!1,data:null,method:null,action:null},Xc=[],ta=-1;function Et(l){return{current:l}}function hl(l){0>ta||(l.current=Xc[ta],Xc[ta]=null,ta--)}function w(l,t){ta++,Xc[ta]=l.current,l.current=t}var St=Et(null),Sn=Et(null),tu=Et(null),Ge=Et(null);function Xe(l,t){switch(w(tu,t),w(Sn,l),w(St,null),t.nodeType){case 9:case 11:l=(l=t.documentElement)&&(l=l.namespaceURI)?Gv(l):0;break;default:if(l=t.tagName,t=t.namespaceURI)t=Gv(t),l=qm(t,l);else switch(l){case"svg":l=1;break;case"math":l=2;break;default:l=0}}hl(St),w(St,l)}function ba(){hl(St),hl(Sn),hl(tu)}function Qc(l){var t=l.memoizedState;t!==null&&(Ha._currentValue=t.memoizedState,w(Ge,l)),t=St.current;var u=qm(t,l.type);t!==u&&(w(Sn,l),w(St,u))}function Qe(l){Sn.current===l&&(hl(St),hl(Sn)),Ge.current===l&&(hl(Ge),Ha._currentValue=Nu)}var kf,_1;function pt(l){if(kf===void 0)try{throw Error()}catch(u){var t=u.stack.trim().match(/\n( *(at )?)/);kf=t&&t[1]||"",_1=-1<u.stack.indexOf(`
    at`)?" (<anonymous>)":-1<u.stack.indexOf("@")?"@unknown:0:0":""}return`
`+kf+l+_1}var Pf=!1;function lc(l,t){if(!l||Pf)return"";Pf=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var s=function(){throw Error()};if(Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(E){var y=E}Reflect.construct(l,[],s)}else{try{s.call()}catch(E){y=E}s=!1;try{var h=Object.getOwnPropertyDescriptor(l.prototype,"props");Object.defineProperty(l.prototype,"props",{configurable:!0,set:function(){throw Error()}}),s=!0,new l}finally{s&&(h!==void 0?Object.defineProperty(l.prototype,"props",h):delete l.prototype.props)}}}else{try{throw Error()}catch(E){y=E}(s=l())&&typeof s.catch=="function"&&s.catch(function(){})}}catch(E){if(E&&y&&typeof E.stack=="string")return[E.stack,y.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var e=a.DetermineComponentFrameRoot(),f=e[0],c=e[1];if(f&&c){var i=f.split(`
`),o=c.split(`
`);for(n=a=0;a<i.length&&!i[a].includes("DetermineComponentFrameRoot");)a++;for(;n<o.length&&!o[n].includes("DetermineComponentFrameRoot");)n++;if(a===i.length||n===o.length)for(a=i.length-1,n=o.length-1;1<=a&&0<=n&&i[a]!==o[n];)n--;for(;1<=a&&0<=n;a--,n--)if(i[a]!==o[n]){if(a!==1||n!==1)do if(a--,n--,0>n||i[a]!==o[n]){var g=`
`+i[a].replace(" at new "," at ");return l.displayName&&g.includes("<anonymous>")&&(g=g.replace("<anonymous>",l.displayName)),g}while(1<=a&&0<=n);break}}}finally{Pf=!1,Error.prepareStackTrace=u}return(u=l?l.displayName||l.name:"")?pt(u):""}function $d(l,t){switch(l.tag){case 26:case 27:case 5:return pt(l.type);case 16:return pt("Lazy");case 13:return l.child!==t&&t!==null?pt("Suspense Fallback"):pt("Suspense");case 19:return pt("SuspenseList");case 0:case 15:return lc(l.type,!1);case 11:return lc(l.type.render,!1);case 1:return lc(l.type,!0);case 31:return pt("Activity");case 30:return pt("ViewTransition");default:return""}}function A1(l){try{var t="",u=null;do t+=$d(l,u),u=l,l=l.return;while(l);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var jc=Object.prototype.hasOwnProperty,xi=fl.unstable_scheduleCallback,tc=fl.unstable_cancelCallback,Id=fl.unstable_shouldYield,kd=fl.unstable_requestPaint,Ql=fl.unstable_now,Pd=fl.unstable_getCurrentPriorityLevel,mo=fl.unstable_ImmediatePriority,ho=fl.unstable_UserBlockingPriority,je=fl.unstable_NormalPriority,lh=fl.unstable_LowPriority,go=fl.unstable_IdlePriority,th=fl.log,uh=fl.unstable_setDisableYieldValue,Yn=null,jl=null;function Wt(l){if(typeof th=="function"&&uh(l),jl&&typeof jl.setStrictMode=="function")try{jl.setStrictMode(Yn,l)}catch{}}var Vl=Math.clz32?Math.clz32:eh,ah=Math.log,nh=Math.LN2;function eh(l){return l>>>=0,l===0?32:31-(ah(l)/nh|0)|0}var In=256,kn=262144,Pn=4194304;function zu(l){var t=l&42;if(t!==0)return t;switch(l&-l){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return l&-l;case 262144:case 524288:case 1048576:case 2097152:return l&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return l&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return l}}function mf(l,t,u){var a=l.pendingLanes;if(a===0)return 0;var n=0,e=l.suspendedLanes,f=l.pingedLanes;l=l.warmLanes;var c=a&134217727;return c!==0?(a=c&~e,a!==0?n=zu(a):(f&=c,f!==0?n=zu(f):u||(u=c&~l,u!==0&&(n=zu(u))))):(c=a&~e,c!==0?n=zu(c):f!==0?n=zu(f):u||(u=a&~l,u!==0&&(n=zu(u)))),n===0?0:t!==0&&t!==n&&(t&e)===0&&(e=n&-n,u=t&-t,e>=u||e===32&&(u&4194048)!==0)?t:n}function qn(l,t){return(l.pendingLanes&~(l.suspendedLanes&~l.pingedLanes)&t)===0}function So(l,t){(t&8)!==0&&(t|=t&32);var u=l.entangledLanes;if(u!==0)for(l=l.entanglements,u&=t;0<u;){var a=31-Vl(u),n=1<<a;t|=l[a],u&=~n}return t}function fh(l,t){switch(l){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function so(){var l=Pn;return Pn<<=1,(Pn&62914560)===0&&(Pn=4194304),l}function uc(l){for(var t=[],u=0;31>u;u++)t.push(l);return t}function Bn(l,t){l.pendingLanes|=t,t!==268435456&&(l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0)}function ch(l,t,u,a,n,e){var f=l.pendingLanes;l.pendingLanes=u,l.suspendedLanes=0,l.pingedLanes=0,l.warmLanes=0,l.expiredLanes&=u,l.entangledLanes&=u,l.errorRecoveryDisabledLanes&=u,l.shellSuspendCounter=0;var c=l.entanglements,i=l.expirationTimes,o=l.hiddenUpdates;for(u=f&~u;0<u;){var g=31-Vl(u),s=1<<g;c[g]=0,i[g]=-1;var y=o[g];if(y!==null)for(o[g]=null,g=0;g<y.length;g++){var h=y[g];h!==null&&(h.lane&=-536870913)}u&=~s}a!==0&&To(l,a,0),e!==0&&n===0&&l.tag!==0&&(l.suspendedLanes|=e&~(f&~t))}function To(l,t,u){l.pendingLanes|=t,l.suspendedLanes&=~t;var a=31-Vl(t);l.entangledLanes|=t,l.entanglements[a]=l.entanglements[a]|1073741824|u&261930}function Eo(l,t){var u=l.entangledLanes|=t;for(l=l.entanglements;u;){var a=31-Vl(u),n=1<<a;n&t|l[a]&t&&(l[a]|=t),u&=~n}}function zo(l,t){var u=t&-t;return u=(u&42)!==0?1:Li(u),(u&(l.suspendedLanes|t))!==0?0:u}function Li(l){switch(l){case 2:l=1;break;case 8:l=4;break;case 32:l=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:l=128;break;case 268435456:l=134217728;break;default:l=0}return l}function pi(l){return l&=-l,2<l?8<l?(l&134217727)!==0?32:268435456:8:2}function bo(){var l=G.p;return l!==0?l:(l=window.event,l===void 0?32:ud(l.type))}function N1(l,t){var u=G.p;try{return G.p=l,t()}finally{G.p=u}}var Bt=Math.random().toString(36).slice(2),ml="__reactFiber$"+Bt,Rl="__reactProps$"+Bt,qa="__reactContainer$"+Bt,r1="__reactEvents$"+Bt,ih="__reactListeners$"+Bt,vh="__reactHandles$"+Bt,D1="__reactResources$"+Bt,Gn="__reactMarker$"+Bt,Ve="__reactLoad$"+Bt;function df(l){delete l[ml],delete l[Rl],delete l[ih],delete l[vh]}function _u(l){var t;if(t=l[ml])return t;for(var u=l.parentNode;u;){if(t=u[qa]||u[ml]){if(u=t.alternate,t.child!==null||u!==null&&u.child!==null)for(l=pv(l);l!==null;){if(u=l[ml])return u;l=pv(l)}return t}l=u,u=l.parentNode}return null}function Ba(l){if(l=l[ml]||l[qa]){var t=l.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return l}return null}function Pa(l){var t=l.tag;if(t===5||t===26||t===27||t===6)return l.stateNode;throw Error(T(33))}function ya(l){var t=l[D1];return t||(t=l[D1]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function vl(l){l[Gn]=!0}function Oo(l){l[Ve]=void 0}var _o=new Set,Ao={};function ju(l,t){Oa(l,t),Oa(l+"Capture",t)}function Oa(l,t){for(Ao[l]=t,l=0;l<t.length;l++)_o.add(t[l])}var oh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),M1={},U1={};function yh(l){return jc.call(U1,l)?!0:jc.call(M1,l)?!1:oh.test(l)?U1[l]=!0:(M1[l]=!0,!1)}var q=!1;function C1(){var l=q;return q=!1,l}function se(l,t,u){if(yh(t))if(u===null)l.removeAttribute(t);else{switch(typeof u){case"undefined":case"function":case"symbol":l.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){l.removeAttribute(t);return}}l.setAttribute(t,u)}}function le(l,t,u){if(u===null)l.removeAttribute(t);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(t);return}l.setAttribute(t,u)}}function _t(l,t,u,a){if(a===null)l.removeAttribute(u);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":l.removeAttribute(u);return}l.setAttributeNS(t,u,a)}}function ql(l){switch(typeof l){case"bigint":case"boolean":case"number":case"string":case"undefined":return l;case"object":return l;default:return""}}function No(l){var t=l.type;return(l=l.nodeName)&&l.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mh(l,t,u){var a=Object.getOwnPropertyDescriptor(l.constructor.prototype,t);if(!l.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,e=a.set;return Object.defineProperty(l,t,{configurable:!0,get:function(){return n.call(this)},set:function(f){u=""+f,e.call(this,f)}}),Object.defineProperty(l,t,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(f){u=""+f},stopTracking:function(){l._valueTracker=null,delete l[t]}}}}function Vc(l){if(!l._valueTracker){var t=No(l)?"checked":"value";l._valueTracker=mh(l,t,""+l[t])}}function ro(l){if(!l)return!1;var t=l._valueTracker;if(!t)return!0;var u=t.getValue(),a="";return l&&(a=No(l)?l.checked?"true":"false":l.value),l=a,l!==u?(t.setValue(l),!0):!1}var dh=/[\n"\\]/g;function Wl(l){return l.replace(dh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Zc(l,t,u,a,n,e,f,c){l.name="",f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?l.type=f:l.removeAttribute("type"),t!=null?f==="number"?(t===0&&l.value===""||l.value!=t)&&(l.value=""+ql(t)):l.value!==""+ql(t)&&(l.value=""+ql(t)):f!=="submit"&&f!=="reset"||l.removeAttribute("value"),t!=null?f==="number"&&l.value==t?ac(l,ql(l.value)):ac(l,ql(t)):u!=null?ac(l,ql(u)):a!=null&&l.removeAttribute("value"),n==null&&e!=null&&(l.defaultChecked=!!e),n!=null&&(l.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?l.name=""+ql(c):l.removeAttribute("name")}function Do(l,t,u,a,n,e,f,c){if(e!=null&&typeof e!="function"&&typeof e!="symbol"&&typeof e!="boolean"&&(l.type=e),t!=null||u!=null){if(!(e!=="submit"&&e!=="reset"||t!=null)){Vc(l);return}u=u!=null?""+ql(u):"",t=t!=null?""+ql(t):u,c||t===l.value||(l.value=t),l.defaultValue=t}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,l.checked=c?l.checked:!!a,l.defaultChecked=!!a,f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(l.name=f),Vc(l)}function ac(l,t){l.defaultValue!==""+t&&(l.defaultValue=""+t)}function ma(l,t,u,a){if(l=l.options,t){t={};for(var n=0;n<u.length;n++)t["$"+u[n]]=!0;for(u=0;u<l.length;u++)n=t.hasOwnProperty("$"+l[u].value),l[u].selected!==n&&(l[u].selected=n),n&&a&&(l[u].defaultSelected=!0)}else{for(u=""+ql(u),t=null,n=0;n<l.length;n++){if(l[n].value===u){l[n].selected=!0,a&&(l[n].defaultSelected=!0);return}t!==null||l[n].disabled||(t=l[n])}t!==null&&(t.selected=!0)}}function Mo(l,t,u){if(t!=null&&(t=""+ql(t),t!==l.value&&(l.value=t),u==null)){l.defaultValue!==t&&(l.defaultValue=t);return}l.defaultValue=u!=null?""+ql(u):""}function Uo(l,t,u,a){if(t==null){if(a!=null){if(u!=null)throw Error(T(92));if(ka(a)){if(1<a.length)throw Error(T(93));a=a[0]}u=a}u==null&&(u=""),t=u}u=ql(t),l.defaultValue=u,a=l.textContent,a===u&&a!==""&&a!==null&&(l.value=a),Vc(l)}function _a(l,t){if(t){var u=l.firstChild;if(u&&u===l.lastChild&&u.nodeType===3){u.nodeValue=t;return}}l.textContent=t}var hh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function H1(l,t,u){var a=t.indexOf("--")===0;u==null||typeof u=="boolean"||u===""?a?l.setProperty(t,""):t==="float"?l.cssFloat="":l[t]="":a?l.setProperty(t,u):typeof u!="number"||u===0||hh.has(t)?t==="float"?l.cssFloat=u:l[t]=(""+u).trim():l[t]=u+"px"}function Co(l,t,u){if(t!=null&&typeof t!="object")throw Error(T(62));if(l=l.style,u!=null){for(var a in u)!u.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?l.setProperty(a,""):a==="float"?l.cssFloat="":l[a]="",q=!0);for(var n in t)a=t[n],t.hasOwnProperty(n)&&u[n]!==a&&(H1(l,n,a),q=!0)}else for(var e in t)t.hasOwnProperty(e)&&H1(l,e,t[e])}function Ki(l){if(l.indexOf("-")===-1)return!1;switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Te(l){return Sh.test(""+l)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":l}function dt(){}var xc=null;function Ji(l){return l=l.target||l.srcElement||window,l.correspondingUseElement&&(l=l.correspondingUseElement),l.nodeType===3?l.parentNode:l}var ua=null,da=null;function R1(l){var t=Ba(l);if(t&&(l=t.stateNode)){var u=l[Rl]||null;l:switch(l=t.stateNode,t.type){case"input":if(Zc(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name),t=u.name,u.type==="radio"&&t!=null){for(u=l;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll('input[name="'+Wl(""+t)+'"][type="radio"]'),t=0;t<u.length;t++){var a=u[t];if(a!==l&&a.form===l.form){var n=a[Rl]||null;if(!n)throw Error(T(90));Zc(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<u.length;t++)a=u[t],a.form===l.form&&ro(a)}break l;case"textarea":Mo(l,u.value,u.defaultValue);break l;case"select":t=u.value,t!=null&&ma(l,!!u.multiple,t,!1)}}}var nc=!1;function Ho(l,t,u){if(nc)return l(t,u);nc=!0;try{var a=l(t);return a}finally{if(nc=!1,(ua!==null||da!==null)&&(Df(),ua&&(t=ua,l=da,da=ua=null,R1(t),l)))for(t=0;t<l.length;t++)R1(l[t])}}function sn(l,t){var u=l.stateNode;if(u===null)return null;var a=u[Rl]||null;if(a===null)return null;u=a[t];l:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(l=l.type,a=!(l==="button"||l==="input"||l==="select"||l==="textarea")),l=!a;break l;default:l=!1}if(l)return null;if(u&&typeof u!="function")throw Error(T(231,t,typeof u));return u}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lc=!1;if(Ut)try{wu={},Object.defineProperty(wu,"passive",{get:function(){Lc=!0}}),window.addEventListener("test",wu,wu),window.removeEventListener("test",wu,wu)}catch{Lc=!1}var wu,$t=null,wi=null,Ee=null;function Ro(){if(Ee)return Ee;var l,t=wi,u=t.length,a,n="value"in $t?$t.value:$t.textContent,e=n.length;for(l=0;l<u&&t[l]===n[l];l++);var f=u-l;for(a=1;a<=f&&t[u-a]===n[e-a];a++);return Ee=n.slice(l,1<a?1-a:void 0)}function ze(l){var t=l.keyCode;return"charCode"in l?(l=l.charCode,l===0&&t===13&&(l=13)):l=t,l===10&&(l=13),32<=l||l===13?l:0}function te(){return!0}function Y1(){return!1}function Nl(l){function t(u,a,n,e,f){this._reactName=u,this._targetInst=n,this.type=a,this.nativeEvent=e,this.target=f,this.currentTarget=null;for(var c in l)l.hasOwnProperty(c)&&(u=l[c],this[c]=u?u(e):e[c]);return this.isDefaultPrevented=(e.defaultPrevented!=null?e.defaultPrevented:e.returnValue===!1)?te:Y1,this.isPropagationStopped=Y1,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=te)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=te)},persist:function(){},isPersistent:te}),t}var Su={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(l){return l.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hf=Nl(Su),Xn=L({},Su,{view:0,detail:0}),sh=Nl(Xn),ec,fc,Ja,gf=L({},Xn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fi,button:0,buttons:0,relatedTarget:function(l){return l.relatedTarget===void 0?l.fromElement===l.srcElement?l.toElement:l.fromElement:l.relatedTarget},movementX:function(l){return"movementX"in l?l.movementX:(l!==Ja&&(Ja&&l.type==="mousemove"?(ec=l.screenX-Ja.screenX,fc=l.screenY-Ja.screenY):fc=ec=0,Ja=l),ec)},movementY:function(l){return"movementY"in l?l.movementY:fc}}),q1=Nl(gf),Th=L({},gf,{dataTransfer:0}),Eh=Nl(Th),zh=L({},Xn,{relatedTarget:0}),cc=Nl(zh),bh=L({},Su,{animationName:0,elapsedTime:0,pseudoElement:0}),Oh=Nl(bh),_h=L({},Su,{clipboardData:function(l){return"clipboardData"in l?l.clipboardData:window.clipboardData}}),Ah=Nl(_h),Nh=L({},Su,{data:0}),B1=Nl(Nh),rh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uh(l){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(l):(l=Mh[l])?!!t[l]:!1}function Fi(){return Uh}var Ch=L({},Xn,{key:function(l){if(l.key){var t=rh[l.key]||l.key;if(t!=="Unidentified")return t}return l.type==="keypress"?(l=ze(l),l===13?"Enter":String.fromCharCode(l)):l.type==="keydown"||l.type==="keyup"?Dh[l.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fi,charCode:function(l){return l.type==="keypress"?ze(l):0},keyCode:function(l){return l.type==="keydown"||l.type==="keyup"?l.keyCode:0},which:function(l){return l.type==="keypress"?ze(l):l.type==="keydown"||l.type==="keyup"?l.keyCode:0}}),Hh=Nl(Ch),Rh=L({},gf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),G1=Nl(Rh),Yh=L({},Su,{submitter:0}),qh=Nl(Yh),Bh=L({},Xn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fi}),Gh=Nl(Bh),Xh=L({},Su,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qh=Nl(Xh),jh=L({},gf,{deltaX:function(l){return"deltaX"in l?l.deltaX:"wheelDeltaX"in l?-l.wheelDeltaX:0},deltaY:function(l){return"deltaY"in l?l.deltaY:"wheelDeltaY"in l?-l.wheelDeltaY:"wheelDelta"in l?-l.wheelDelta:0},deltaZ:0,deltaMode:0}),Vh=Nl(jh),Zh=L({},Su,{newState:0,oldState:0,source:0}),xh=Nl(Zh),Lh=[9,13,27,32],Wi=Ut&&"CompositionEvent"in window,un=null;Ut&&"documentMode"in document&&(un=document.documentMode);var ph=Ut&&"TextEvent"in window&&!un,Yo=Ut&&(!Wi||un&&8<un&&11>=un),X1=" ",Q1=!1;function qo(l,t){switch(l){case"keyup":return Lh.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bo(l){return l=l.detail,typeof l=="object"&&"data"in l?l.data:null}var aa=!1;function Kh(l,t){switch(l){case"compositionend":return Bo(t);case"keypress":return t.which!==32?null:(Q1=!0,X1);case"textInput":return l=t.data,l===X1&&Q1?null:l;default:return null}}function Jh(l,t){if(aa)return l==="compositionend"||!Wi&&qo(l,t)?(l=Ro(),Ee=wi=$t=null,aa=!1,l):null;switch(l){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yo&&t.locale!=="ko"?null:t.data;default:return null}}var wh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function j1(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t==="input"?!!wh[l.type]:t==="textarea"}function Go(l,t,u,a){ua?da?da.push(a):da=[a]:ua=a,t=vf(t,"onChange"),0<t.length&&(u=new hf("onChange","change",null,u,a),l.push({event:u,listeners:t}))}var an=null,Tn=null;function Fh(l){Hm(l,0)}function Sf(l){var t=Pa(l);if(ro(t))return l}function V1(l,t){if(l==="change")return t}var Xo=!1;Ut&&(Ut?(ae="oninput"in document,ae||(ic=document.createElement("div"),ic.setAttribute("oninput","return;"),ae=typeof ic.oninput=="function"),ue=ae):ue=!1,Xo=ue&&(!document.documentMode||9<document.documentMode));var ue,ae,ic;function Z1(){an&&(an.detachEvent("onpropertychange",Qo),Tn=an=null)}function Qo(l){if(l.propertyName==="value"&&Sf(Tn)){var t=[];Go(t,Tn,l,Ji(l)),Ho(Fh,t)}}function Wh(l,t,u){l==="focusin"?(Z1(),an=t,Tn=u,an.attachEvent("onpropertychange",Qo)):l==="focusout"&&Z1()}function $h(l){if(l==="selectionchange"||l==="keyup"||l==="keydown")return Sf(Tn)}function Ih(l,t){if(l==="click")return Sf(t)}function kh(l,t){if(l==="input"||l==="change")return Sf(t)}function Ph(l,t){return l===t&&(l!==0||1/l===1/t)||l!==l&&t!==t}var xl=typeof Object.is=="function"?Object.is:Ph;function En(l,t){if(xl(l,t))return!0;if(typeof l!="object"||l===null||typeof t!="object"||t===null)return!1;var u=Object.keys(l),a=Object.keys(t);if(u.length!==a.length)return!1;for(a=0;a<u.length;a++){var n=u[a];if(!jc.call(t,n)||!xl(l[n],t[n]))return!1}return!0}function pc(l){if(l=l||(typeof document<"u"?document:void 0),typeof l>"u")return null;try{return l.activeElement||l.body}catch{return l.body}}function x1(l){for(;l&&l.firstChild;)l=l.firstChild;return l}function L1(l,t){var u=x1(l);l=0;for(var a;u;){if(u.nodeType===3){if(a=l+u.textContent.length,l<=t&&a>=t)return{node:u,offset:t-l};l=a}l:{for(;u;){if(u.nextSibling){u=u.nextSibling;break l}u=u.parentNode}u=void 0}u=x1(u)}}function jo(l,t){return l&&t?l===t?!0:l&&l.nodeType===3?!1:t&&t.nodeType===3?jo(l,t.parentNode):"contains"in l?l.contains(t):l.compareDocumentPosition?!!(l.compareDocumentPosition(t)&16):!1:!1}function Vo(l){l=l!=null&&l.ownerDocument!=null&&l.ownerDocument.defaultView!=null?l.ownerDocument.defaultView:window;for(var t=pc(l.document);t instanceof l.HTMLIFrameElement;){try{var u=typeof t.contentWindow.location.href=="string"}catch{u=!1}if(u)l=t.contentWindow;else break;t=pc(l.document)}return t}function $i(l){var t=l&&l.nodeName&&l.nodeName.toLowerCase();return t&&(t==="input"&&(l.type==="text"||l.type==="search"||l.type==="tel"||l.type==="url"||l.type==="password")||t==="textarea"||l.contentEditable==="true")}var lg=Ut&&"documentMode"in document&&11>=document.documentMode,na=null,Kc=null,nn=null,Jc=!1;function p1(l,t,u){var a=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;Jc||na==null||na!==pc(a)||(a=na,"selectionStart"in a&&$i(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),nn&&En(nn,a)||(nn=a,a=vf(Kc,"onSelect"),0<a.length&&(t=new hf("onSelect","select",null,t,u),l.push({event:t,listeners:a}),t.target=na)))}function Tu(l,t){var u={};return u[l.toLowerCase()]=t.toLowerCase(),u["Webkit"+l]="webkit"+t,u["Moz"+l]="moz"+t,u}var ea={animationend:Tu("Animation","AnimationEnd"),animationiteration:Tu("Animation","AnimationIteration"),animationstart:Tu("Animation","AnimationStart"),transitionrun:Tu("Transition","TransitionRun"),transitionstart:Tu("Transition","TransitionStart"),transitioncancel:Tu("Transition","TransitionCancel"),transitionend:Tu("Transition","TransitionEnd")},vc={},Zo={};Ut&&(Zo=document.createElement("div").style,"AnimationEvent"in window||(delete ea.animationend.animation,delete ea.animationiteration.animation,delete ea.animationstart.animation),"TransitionEvent"in window||delete ea.transitionend.transition);function Vu(l){if(vc[l])return vc[l];if(!ea[l])return l;var t=ea[l],u;for(u in t)if(t.hasOwnProperty(u)&&u in Zo)return vc[l]=t[u];return l}var xo=Vu("animationend"),Lo=Vu("animationiteration"),po=Vu("animationstart"),tg=Vu("transitionrun"),ug=Vu("transitionstart"),ag=Vu("transitioncancel"),Ko=Vu("transitionend"),Jo=new Map,wc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wc.push("scrollEnd");function et(l,t){Jo.set(l,t),ju(t,[l])}var ng=0;function Ct(l,t){if(l.name!=null&&l.name!=="auto")return l.name;if(t.autoName!==null)return t.autoName;l=nt.identifierPrefix;var u=ng++;return l="_"+l+"t_"+u.toString(32)+"_",t.autoName=l}function K1(l){if(l==null||typeof l=="string")return l;var t=null,u=za;if(u!==null)for(var a=0;a<u.length;a++){var n=l[u[a]];if(n!=null){if(n==="none")return"none";t=t==null?n:t+(" "+n)}}return t??l.default}function Gt(l,t){return l=K1(l),t=K1(t),t==null?l==="auto"?null:l:t==="auto"?null:t}var Ze=typeof reportError=="function"?reportError:function(l){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof l=="object"&&l!==null&&typeof l.message=="string"?String(l.message):String(l),error:l});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",l);return}console.error(l)},Jl=[],fa=0,Ii=0;function sf(){for(var l=fa,t=Ii=fa=0;t<l;){var u=Jl[t];Jl[t++]=null;var a=Jl[t];Jl[t++]=null;var n=Jl[t];Jl[t++]=null;var e=Jl[t];if(Jl[t++]=null,a!==null&&n!==null){var f=a.pending;f===null?n.next=n:(n.next=f.next,f.next=n),a.pending=n}e!==0&&wo(u,n,e)}}function Tf(l,t,u,a){Jl[fa++]=l,Jl[fa++]=t,Jl[fa++]=u,Jl[fa++]=a,Ii|=a,l.lanes|=a,l=l.alternate,l!==null&&(l.lanes|=a)}function ki(l,t,u,a){return Tf(l,t,u,a),xe(l)}function Zu(l,t){return Tf(l,null,null,t),xe(l)}function wo(l,t,u){l.lanes|=u;var a=l.alternate;a!==null&&(a.lanes|=u);for(var n=!1,e=l.return;e!==null;)e.childLanes|=u,a=e.alternate,a!==null&&(a.childLanes|=u),e.tag===22&&(l=e.stateNode,l===null||l._visibility&1||(n=!0)),l=e,e=e.return;return l.tag===3?(e=l.stateNode,n&&t!==null&&(n=31-Vl(u),l=e.hiddenUpdates,a=l[n],a===null?l[n]=[t]:a.push(t),t.lane=u|536870912),e):null}function xe(l){if(50<gn)throw gn=0,Ce=null,Error(T(185));for(var t=l.return;t!==null;)l=t,t=l.return;return l.tag===3?l.stateNode:null}var ca={};function eg(l,t,u,a){this.tag=l,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ul(l,t,u,a){return new eg(l,t,u,a)}function Pi(l){return l=l.prototype,!(!l||!l.isReactComponent)}function Dt(l,t){var u=l.alternate;return u===null?(u=Ul(l.tag,t,l.key,l.mode),u.elementType=l.elementType,u.type=l.type,u.stateNode=l.stateNode,u.alternate=l,l.alternate=u):(u.pendingProps=t,u.type=l.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=l.flags&1206910976,u.childLanes=l.childLanes,u.lanes=l.lanes,u.child=l.child,u.memoizedProps=l.memoizedProps,u.memoizedState=l.memoizedState,u.updateQueue=l.updateQueue,t=l.dependencies,u.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},u.sibling=l.sibling,u.index=l.index,u.ref=l.ref,u.refCleanup=l.refCleanup,u}function Fo(l,t){l.flags&=1206910978;var u=l.alternate;return u===null?(l.childLanes=0,l.lanes=t,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=u.childLanes,l.lanes=u.lanes,l.child=u.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=u.memoizedProps,l.memoizedState=u.memoizedState,l.updateQueue=u.updateQueue,l.type=u.type,t=u.dependencies,l.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),l}function be(l,t,u,a,n,e){var f=0;if(a=l,typeof a=="function")Pi(a)&&(f=1);else if(typeof a=="string")f=HS(l,u,St.current)?26:l==="html"||l==="head"||l==="body"?27:5;else l:switch(a){case qc:return l=Ul(31,u,t,n),l.elementType=qc,l.lanes=e,l;case la:return ru(u.children,n,e,t);case oo:f=8,n|=24;break;case Hc:return l=Ul(12,u,t,n|2),l.elementType=Hc,l.lanes=e,l;case Rc:return l=Ul(13,u,t,n),l.elementType=Rc,l.lanes=e,l;case Yc:return l=Ul(19,u,t,n),l.elementType=Yc,l.lanes=e,l;case Jd:case Bc:return l=n|32,l=Ul(30,u,t,l),l.elementType=Bc,l.lanes=e,l.stateNode={autoName:null,paired:null,clones:null,ref:null},l;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case mt:f=10;break l;case yo:f=9;break l;case Vi:f=11;break l;case Zi:f=14;break l;case Jt:f=16,a=null;break l}f=29,u=Error(T(130,l===null?"null":typeof l,"")),a=null}return t=Ul(f,u,t,n),t.elementType=l,t.type=a,t.lanes=e,t}function ru(l,t,u,a){return l=Ul(7,l,a,t),l.lanes=u,l}function oc(l,t,u){return l=Ul(6,l,null,t),l.lanes=u,l}function Wo(l){var t=Ul(18,null,null,0);return t.stateNode=l,t}function yc(l,t,u){return t=Ul(4,l.children!==null?l.children:[],l.key,t),t.lanes=u,t.stateNode={containerInfo:l.containerInfo,pendingChildren:null,implementation:l.implementation},t}var J1=new WeakMap;function $l(l,t){if(typeof l=="object"&&l!==null){var u=J1.get(l);return u!==void 0?u:(t={value:l,source:t,stack:A1(t)},J1.set(l,t),t)}return{value:l,source:t,stack:A1(t)}}var ia=[],va=0,Le=null,zn=0,wl=[],Fl=0,yu=null,ht=1,gt="";function Nt(l,t){ia[va++]=zn,ia[va++]=Le,Le=l,zn=t}function $o(l,t,u){wl[Fl++]=ht,wl[Fl++]=gt,wl[Fl++]=yu,yu=l;var a=ht;l=gt;var n=32-Vl(a)-1;a&=~(1<<n),u+=1;var e=32-Vl(t)+n;if(30<e){var f=n-n%5;e=(a&(1<<f)-1).toString(32),a>>=f,n-=f,ht=1<<32-Vl(t)+n|u<<n|a,gt=e+l}else ht=1<<e|u<<n|a,gt=l}function Ef(l){l.return!==null&&(Nt(l,1),$o(l,1,0))}function l0(l){for(;l===Le;)Le=ia[--va],ia[va]=null,zn=ia[--va],ia[va]=null;for(;l===yu;)yu=wl[--Fl],wl[Fl]=null,gt=wl[--Fl],wl[Fl]=null,ht=wl[--Fl],wl[Fl]=null}function Io(l,t){wl[Fl++]=ht,wl[Fl++]=gt,wl[Fl++]=yu,ht=t.id,gt=t.overflow,yu=l}var ol=null,J=null,M=!1,uu=null,Il=!1,Fc=Error(T(519));function mu(l){var t=Error(T(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bn($l(t,l)),Fc}function w1(l){var t=l.stateNode,u=l.type,a=l.memoizedProps;switch(t[ml]=l,t[Rl]=a,u){case"dialog":U("cancel",t),U("close",t);break;case"iframe":case"object":case"embed":U("load",t);break;case"video":case"audio":for(u=0;u<Nn.length;u++)U(Nn[u],t);break;case"source":U("error",t);break;case"img":case"image":case"link":U("error",t),U("load",t);break;case"details":U("toggle",t);break;case"input":U("invalid",t),Do(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":U("invalid",t);break;case"textarea":U("invalid",t),Uo(t,a.value,a.defaultValue,a.children)}u=a.children,typeof u!="string"&&typeof u!="number"&&typeof u!="bigint"||t.textContent===""+u||a.suppressHydrationWarning===!0||Ym(t.textContent,u)?(a.popover!=null&&(U("beforetoggle",t),U("toggle",t)),a.onScroll!=null&&U("scroll",t),a.onScrollEnd!=null&&U("scrollend",t),a.onClick!=null&&(t.onclick=dt),t=!0):t=!1,t||mu(l,!0)}function pe(l){for(ol=l.return;ol;)switch(ol.tag){case 5:case 31:case 13:Il=!1;return;case 27:case 3:Il=!0;return;default:ol=ol.return}}function Fu(l){if(l!==ol)return!1;if(!M)return pe(l),M=!0,!1;var t=l.tag,u;if((u=t!==3&&t!==27)&&((u=t===5)&&(u=l.type,u=!(u!=="form"&&u!=="button")||Ri(l.type,l.memoizedProps)),u=!u),u&&J&&mu(l),pe(l),t===13){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(T(317));J=Lv(l)}else if(t===31){if(l=l.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(T(317));J=Lv(l)}else t===27?(t=J,su(l.type)?(l=Gi,Gi=null,J=l):J=t):J=ol?kl(l.stateNode.nextSibling):null;return!0}function Cu(){J=ol=null,M=!1}function mc(){var l=uu;return l!==null&&(Dl===null?Dl=l:Dl.push.apply(Dl,l),uu=null),l}function bn(l){uu===null?uu=[l]:uu.push(l)}var Wc=Et(null),xu=null,rt=null;function It(l,t,u){w(Wc,t._currentValue),t._currentValue=u}function Mt(l){l._currentValue=Wc.current,hl(Wc)}function Oe(l,t,u){for(;l!==null;){var a=l.alternate;if((l.childLanes&t)!==t?(l.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),l===u)break;l=l.return}}function $c(l,t,u,a){var n=l.child;for(n!==null&&(n.return=l);n!==null;){var e=n.dependencies;if(e!==null){var f=n.child;e=e.firstContext;l:for(;e!==null;){var c=e;e=n;for(var i=0;i<t.length;i++)if(c.context===t[i]){e.lanes|=u,c=e.alternate,c!==null&&(c.lanes|=u),Oe(e.return,u,l),a||(f=null);break l}e=c.next}}else if(n.tag===18){if(f=n.return,f===null)throw Error(T(341));f.lanes|=u,e=f.alternate,e!==null&&(e.lanes|=u),Oe(f,u,l),f=null}else n.tag===13&&n.memoizedState!==null&&n.memoizedState.dehydrated===null?(n.lanes|=u,f=n.alternate,f!==null&&(f.lanes|=u),Oe(n.return,u,l),f=n.child,f=f!==null?f.sibling:null):f=n.child;if(f!==null)f.return=n;else for(f=n;f!==null;){if(f===l){f=null;break}if(n=f.sibling,n!==null){n.return=f.return,f=n;break}f=f.return}n=f}}function Hu(l,t,u,a){l=null;for(var n=t,e=!1;n!==null;){if(!e){if((n.flags&524288)!==0)e=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var f=n.alternate;if(f===null)throw Error(T(387));if(f=f.memoizedProps,f!==null){var c=n.type;xl(n.pendingProps.value,f.value)||(l!==null?l.push(c):l=[c])}}else if(n===Ge.current){if(f=n.alternate,f===null)throw Error(T(387));f.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(l!==null?l.push(Ha):l=[Ha])}n=n.return}return l!==null&&$c(t,l,u,a),t.flags|=262144,l!==null}function Ke(l){for(l=l.firstContext;l!==null;){if(!xl(l.context._currentValue,l.memoizedValue))return!0;l=l.next}return!1}function Ru(l){xu=l,rt=null,l=l.dependencies,l!==null&&(l.firstContext=null)}function dl(l){return ko(xu,l)}function ne(l,t){return xu===null&&Ru(l),ko(l,t)}function ko(l,t){var u=t._currentValue;if(t={context:t,memoizedValue:u,next:null},rt===null){if(l===null)throw Error(T(308));rt=t,l.dependencies={lanes:0,firstContext:t},l.flags|=524288}else rt=rt.next=t;return u}var fg=typeof AbortController<"u"?AbortController:function(){var l=[],t=this.signal={aborted:!1,addEventListener:function(u,a){l.push(a)}};this.abort=function(){t.aborted=!0,l.forEach(function(u){return u()})}},cg=fl.unstable_scheduleCallback,ig=fl.unstable_NormalPriority,ul={$$typeof:mt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function t0(){return{controller:new fg,data:new Map,refCount:0}}function Qn(l){l.refCount--,l.refCount===0&&cg(ig,function(){l.controller.abort()})}function F1(l,t){if((l.pendingLanes&4194048)!==0){var u=l.transitionTypes;for(u===null&&(u=l.transitionTypes=[]),l=0;l<t.length;l++){var a=t[l];u.indexOf(a)===-1&&u.push(a)}}}var ln=null;function vg(l){var t=l.transitionTypes;return l.transitionTypes=null,t}var en=null,Ic=0,Yu=0,ha=null;function og(l,t){if(en===null){var u=en=[];Ic=0,Yu=U0(),ha={status:"pending",value:void 0,then:function(a){u.push(a)}}}return Ic++,t.then(W1,W1),t}function W1(){if(--Ic===0&&(ln=null,en!==null)){ha!==null&&(ha.status="fulfilled");var l=en;en=null,Yu=0,ha=null;for(var t=0;t<l.length;t++)(0,l[t])()}}function yg(l,t){var u=[],a={status:"pending",value:null,reason:null,then:function(n){u.push(n)}};return l.then(function(){a.status="fulfilled",a.value=t;for(var n=0;n<u.length;n++)(0,u[n])(t)},function(n){for(a.status="rejected",a.reason=n,n=0;n<u.length;n++)(0,u[n])(void 0)}),a}var $1=A.S;A.S=function(l,t){if(Sm=Ql(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&og(l,t),ln!==null)for(var u=Ma;u!==null;)F1(u,ln),u=u.next;if(u=l.types,u!==null){for(var a=Ma;a!==null;)F1(a,u),a=a.next;if(Yu!==0){a=ln,a===null&&(a=ln=[]);for(var n=0;n<u.length;n++){var e=u[n];a.indexOf(e)===-1&&a.push(e)}}}$1!==null&&$1(l,t)};var Du=Et(null);function u0(){var l=Du.current;return l!==null?l:x.pooledCache}function _e(l,t){t===null?w(Du,Du.current):w(Du,t.pool)}function Po(){var l=u0();return l===null?null:{parent:ul._currentValue,pool:l}}var Ga=Error(T(460)),a0=Error(T(474)),zf=Error(T(542)),Je={then:function(){}};function I1(l){return l=l.status,l==="fulfilled"||l==="rejected"}function ly(l,t,u){switch(u=l[u],u===void 0?l.push(t):u!==t&&(t.then(dt,dt),t=u),t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,P1(l),l===void 0&&!("reason"in t)?Error(T(600)):l;default:if(typeof t.status=="string")t.then(dt,dt);else{if(l=x,l!==null&&100<l.shellSuspendCounter)throw Error(T(482));l=t,l.status="pending",l.then(function(a){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=a}},function(a){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw l=t.reason,P1(l),l}throw Mu=t,Ga}}function bu(l){try{var t=l._init;return t(l._payload)}catch(u){throw u!==null&&typeof u=="object"&&typeof u.then=="function"?(Mu=u,Ga):u}}var Mu=null;function k1(){if(Mu===null)throw Error(T(459));var l=Mu;return Mu=null,l}function P1(l){if(l===Ga||l===zf)throw Error(T(483))}var ga=null,On=0;function ee(l){var t=On;return On+=1,ga===null&&(ga=[]),ly(ga,l,t)}function Lt(l,t){t=t.props.ref,l.ref=t!==void 0?t:null}function fe(l,t){throw t.$$typeof===Kd?Error(T(525)):(l=Object.prototype.toString.call(t),Error(T(31,l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)))}function ty(l){function t(m,v){if(l){var d=m.deletions;d===null?(m.deletions=[v],m.flags|=16):d.push(v)}}function u(m,v){if(!l)return null;for(;v!==null;)t(m,v),v=v.sibling;return null}function a(m){for(var v=new Map;m!==null;)m.key===null?v.set(m.index,m):v.set(m.key,m),m=m.sibling;return v}function n(m,v){return m=Dt(m,v),m.index=0,m.sibling=null,m}function e(m,v,d){return m.index=d,l?(d=m.alternate,d!==null?(d=d.index,d<v?(m.flags|=2,v):d):(m.flags|=134217730,v)):(m.flags|=1048576,v)}function f(m){return l&&m.alternate===null&&(m.flags|=134217730),m}function c(m,v,d,S){return v===null||v.tag!==6?(v=oc(d,m.mode,S),v.return=m,v):(v=n(v,d),v.return=m,v)}function i(m,v,d,S){var z=d.type;return z===la?(m=g(m,v,d.props.children,S,d.key),Lt(m,d),m):v!==null&&(v.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Jt&&bu(z)===v.type)?(v=n(v,d.props),Lt(v,d),v.return=m,v):(v=be(d.type,d.key,d.props,null,m.mode,S),Lt(v,d),v.return=m,v)}function o(m,v,d,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==d.containerInfo||v.stateNode.implementation!==d.implementation?(v=yc(d,m.mode,S),v.return=m,v):(v=n(v,d.children||[]),v.return=m,v)}function g(m,v,d,S,z){return v===null||v.tag!==7?(v=ru(d,m.mode,S,z),v.return=m,v):(v=n(v,d),v.return=m,v)}function s(m,v,d){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=oc(""+v,m.mode,d),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case $n:return d=be(v.type,v.key,v.props,null,m.mode,d),Lt(d,v),d.return=m,d;case Ia:return v=yc(v,m.mode,d),v.return=m,v;case Jt:return v=bu(v),s(m,v,d)}if(ka(v)||Ka(v))return v=ru(v,m.mode,d,null),v.return=m,v;if(typeof v.then=="function")return s(m,ee(v),d);if(v.$$typeof===mt)return s(m,ne(m,v),d);fe(m,v)}return null}function y(m,v,d,S){var z=v!==null?v.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return z!==null?null:c(m,v,""+d,S);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case $n:return d.key===z?i(m,v,d,S):null;case Ia:return d.key===z?o(m,v,d,S):null;case Jt:return d=bu(d),y(m,v,d,S)}if(ka(d)||Ka(d))return z!==null?null:g(m,v,d,S,null);if(typeof d.then=="function")return y(m,v,ee(d),S);if(d.$$typeof===mt)return y(m,v,ne(m,d),S);fe(m,d)}return null}function h(m,v,d,S,z){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return m=m.get(d)||null,c(v,m,""+S,z);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case $n:return m=m.get(S.key===null?d:S.key)||null,i(v,m,S,z);case Ia:return m=m.get(S.key===null?d:S.key)||null,o(v,m,S,z);case Jt:return S=bu(S),h(m,v,d,S,z)}if(ka(S)||Ka(S))return m=m.get(d)||null,g(v,m,S,z,null);if(typeof S.then=="function")return h(m,v,d,ee(S),z);if(S.$$typeof===mt)return h(m,v,d,ne(v,S),z);fe(v,S)}return null}function E(m,v,d,S){for(var z=null,H=null,O=v,_=v=0,ll=null;O!==null&&_<d.length;_++){O.index>_?(ll=O,O=null):ll=O.sibling;var Y=y(m,O,d[_],S);if(Y===null){O===null&&(O=ll);break}l&&O&&Y.alternate===null&&t(m,O),v=e(Y,v,_),H===null?z=Y:H.sibling=Y,H=Y,O=ll}if(_===d.length)return u(m,O),M&&Nt(m,_),z;if(O===null){for(;_<d.length;_++)O=s(m,d[_],S),O!==null&&(v=e(O,v,_),H===null?z=O:H.sibling=O,H=O);return M&&Nt(m,_),z}for(O=a(O);_<d.length;_++)ll=h(O,m,_,d[_],S),ll!==null&&(l&&(Y=ll.alternate,Y!==null&&O.delete(Y.key===null?_:Y.key)),v=e(ll,v,_),H===null?z=ll:H.sibling=ll,H=ll);return l&&O.forEach(function(jt){return t(m,jt)}),M&&Nt(m,_),z}function b(m,v,d,S){if(d==null)throw Error(T(151));for(var z=null,H=null,O=v,_=v=0,ll=null,Y=d.next();O!==null&&!Y.done;_++,Y=d.next()){O.index>_?(ll=O,O=null):ll=O.sibling;var jt=y(m,O,Y.value,S);if(jt===null){O===null&&(O=ll);break}l&&O&&jt.alternate===null&&t(m,O),v=e(jt,v,_),H===null?z=jt:H.sibling=jt,H=jt,O=ll}if(Y.done)return u(m,O),M&&Nt(m,_),z;if(O===null){for(;!Y.done;_++,Y=d.next())Y=s(m,Y.value,S),Y!==null&&(v=e(Y,v,_),H===null?z=Y:H.sibling=Y,H=Y);return M&&Nt(m,_),z}for(O=a(O);!Y.done;_++,Y=d.next())Y=h(O,m,_,Y.value,S),Y!==null&&(l&&(ll=Y.alternate,ll!==null&&O.delete(ll.key===null?_:ll.key)),v=e(Y,v,_),H===null?z=Y:H.sibling=Y,H=Y);return l&&O.forEach(function(md){return t(m,md)}),M&&Nt(m,_),z}function r(m,v,d,S){if(typeof d=="object"&&d!==null&&d.type===la&&d.key===null&&d.props.ref===void 0&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case $n:l:{for(var z=d.key;v!==null;){if(v.key===z){if(z=d.type,z===la){if(v.tag===7){u(m,v.sibling),S=n(v,d.props.children),Lt(S,d),S.return=m,m=S;break l}}else if(v.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Jt&&bu(z)===v.type){u(m,v.sibling),S=n(v,d.props),Lt(S,d),S.return=m,m=S;break l}u(m,v);break}else t(m,v);v=v.sibling}d.type===la?(S=ru(d.props.children,m.mode,S,d.key),Lt(S,d),S.return=m,m=S):(S=be(d.type,d.key,d.props,null,m.mode,S),Lt(S,d),S.return=m,m=S)}return f(m);case Ia:l:{for(z=d.key;v!==null;){if(v.key===z)if(v.tag===4&&v.stateNode.containerInfo===d.containerInfo&&v.stateNode.implementation===d.implementation){u(m,v.sibling),S=n(v,d.children||[]),S.return=m,m=S;break l}else{u(m,v);break}else t(m,v);v=v.sibling}S=yc(d,m.mode,S),S.return=m,m=S}return f(m);case Jt:return d=bu(d),r(m,v,d,S)}if(ka(d))return E(m,v,d,S);if(Ka(d)){if(z=Ka(d),typeof z!="function")throw Error(T(150));return d=z.call(d),b(m,v,d,S)}if(typeof d.then=="function")return r(m,v,ee(d),S);if(d.$$typeof===mt)return r(m,v,ne(m,d),S);fe(m,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,v!==null&&v.tag===6?(u(m,v.sibling),S=n(v,d),S.return=m,m=S):(u(m,v),S=oc(d,m.mode,S),S.return=m,m=S),f(m)):u(m,v)}return function(m,v,d,S){try{On=0;var z=r(m,v,d,S);return ga=null,z}catch(O){if(O===Ga||O===zf)throw O;var H=Ul(29,O,null,m.mode);return H.lanes=S,H.return=m,H}}}var qu=ty(!0),uy=ty(!1),wt=!1;function n0(l){l.updateQueue={baseState:l.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function kc(l,t){l=l.updateQueue,t.updateQueue===l&&(t.updateQueue={baseState:l.baseState,firstBaseUpdate:l.firstBaseUpdate,lastBaseUpdate:l.lastBaseUpdate,shared:l.shared,callbacks:null})}function au(l){return{lane:l,tag:0,payload:null,callback:null,next:null}}function nu(l,t,u){var a=l.updateQueue;if(a===null)return null;if(a=a.shared,(B&2)!==0){var n=a.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),a.pending=t,t=xe(l),wo(l,null,u),t}return Tf(l,a,t,u),xe(l)}function fn(l,t,u){if(t=t.updateQueue,t!==null&&(t=t.shared,(u&4194048)!==0)){var a=t.lanes;a&=l.pendingLanes,u|=a,t.lanes=u,Eo(l,u)}}function dc(l,t){var u=l.updateQueue,a=l.alternate;if(a!==null&&(a=a.updateQueue,u===a)){var n=null,e=null;if(u=u.firstBaseUpdate,u!==null){do{var f={lane:u.lane,tag:u.tag,payload:u.payload,callback:null,next:null};e===null?n=e=f:e=e.next=f,u=u.next}while(u!==null);e===null?n=e=t:e=e.next=t}else n=e=t;u={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:e,shared:a.shared,callbacks:a.callbacks},l.updateQueue=u;return}l=u.lastBaseUpdate,l===null?u.firstBaseUpdate=t:l.next=t,u.lastBaseUpdate=t}var Pc=!1;function cn(){if(Pc){var l=ha;if(l!==null)throw l}}function vn(l,t,u,a){Pc=!1;var n=l.updateQueue;wt=!1;var e=n.firstBaseUpdate,f=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var i=c,o=i.next;i.next=null,f===null?e=o:f.next=o,f=i;var g=l.alternate;g!==null&&(g=g.updateQueue,c=g.lastBaseUpdate,c!==f&&(c===null?g.firstBaseUpdate=o:c.next=o,g.lastBaseUpdate=i))}if(e!==null){var s=n.baseState;f=0,g=o=i=null,c=e;do{var y=c.lane&-536870913,h=y!==c.lane;if(h?(R&y)===y:(a&y)===y){y!==0&&y===Yu&&(Pc=!0),g!==null&&(g=g.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});l:{var E=l,b=c;y=t;var r=u;switch(b.tag){case 1:if(E=b.payload,typeof E=="function"){s=E.call(r,s,y);break l}s=E;break l;case 3:E.flags=E.flags&-65537|128;case 0:if(E=b.payload,y=typeof E=="function"?E.call(r,s,y):E,y==null)break l;s=L({},s,y);break l;case 2:wt=!0}}y=c.callback,y!==null&&(l.flags|=64,h&&(l.flags|=8192),h=n.callbacks,h===null?n.callbacks=[y]:h.push(y))}else h={lane:y,tag:c.tag,payload:c.payload,callback:c.callback,next:null},g===null?(o=g=h,i=s):g=g.next=h,f|=y;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;h=c,c=h.next,h.next=null,n.lastBaseUpdate=h,n.shared.pending=null}}while(!0);g===null&&(i=s),n.baseState=i,n.firstBaseUpdate=o,n.lastBaseUpdate=g,e===null&&(n.shared.lanes=0),gu|=f,l.lanes=f,l.memoizedState=s}}function ay(l,t){if(typeof l!="function")throw Error(T(191,l));l.call(t)}function ny(l,t){var u=l.callbacks;if(u!==null)for(l.callbacks=null,l=0;l<u.length;l++)ay(u[l],t)}var du=Et(null),we=Et(0);function lv(l,t){l=qt,w(we,l),w(du,t),qt=l|t.baseLanes}function li(){w(we,qt),w(du,du.current)}function e0(){qt=we.current,hl(du),hl(we)}var sl=Et(null),zl=null;function eu(l){var t=l.alternate;w(gl,gl.current&1),w(sl,l),zl===null&&(t===null||du.current!==null||t.memoizedState!==null)&&(zl=l)}function ti(l){w(gl,gl.current),w(sl,l),zl===null&&(zl=l)}function ey(l){l.tag===22?(w(gl,gl.current),w(sl,l),zl===null&&(zl=l)):fu()}function fu(){w(gl,gl.current),w(sl,sl.current)}function Bl(l){hl(sl),zl===l&&(zl=null),hl(gl)}var gl=Et(0);function _n(l,t){w(sl,sl.current),w(gl,t)}function f0(l){hl(gl),hl(sl),zl===l&&(zl=null)}function Fe(l){for(var t=l;t!==null;){if(t.tag===13){var u=t.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||Bi(u)||Y0(u)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ht=0,D=null,Z=null,tl=null,We=!1,Sa=!1,Bu=!1,$e=0,An=0,sa=null,mg=0;function I(){throw Error(T(321))}function c0(l,t){if(t===null)return!1;for(var u=0;u<t.length&&u<l.length;u++)if(!xl(l[u],t[u]))return!1;return!0}function i0(l,t,u,a,n,e){return Ht=e,D=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,A.H=l===null||l.memoizedState===null?Gy:Xy,Bu=!1,e=u(a,n),Bu=!1,Sa&&(e=cy(t,u,a,n)),fy(l),e}function fy(l){A.H=Ie;var t=Z!==null&&Z.next!==null;if(Ht=0,tl=Z=D=null,We=!1,An=0,sa=null,t)throw Error(T(300));l===null||al||(l=l.dependencies,l!==null&&Ke(l)&&(al=!0))}function cy(l,t,u,a){D=l;var n=0;do{if(Sa&&(sa=null),An=0,Sa=!1,25<=n)throw Error(T(301));if(n+=1,tl=Z=null,l.updateQueue!=null){var e=l.updateQueue;e.lastEffect=null,e.events=null,e.stores=null,e.memoCache!=null&&(e.memoCache.index=0)}A.H=zg,e=t(u,a)}while(Sa);return e}function dg(){var l=A.H,t=l.useState()[0];return t=typeof t.then=="function"?jn(t):t,l=l.useState()[0],(Z!==null?Z.memoizedState:null)!==l&&(D.flags|=1024),t}function v0(){var l=$e!==0;return $e=0,l}function o0(l,t,u){t.updateQueue=l.updateQueue,t.flags&=-2053,l.lanes&=~u}function y0(l){if(We){for(l=l.memoizedState;l!==null;){var t=l.queue;t!==null&&(t.pending=null),l=l.next}We=!1}Ht=0,tl=Z=D=null,Sa=!1,An=$e=0,sa=null}function Al(){var l={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tl===null?D.memoizedState=tl=l:tl=tl.next=l,tl}function P(){if(Z===null){var l=D.alternate;l=l!==null?l.memoizedState:null}else l=Z.next;var t=tl===null?D.memoizedState:tl.next;if(t!==null)tl=t,Z=l;else{if(l===null)throw D.alternate===null?Error(T(467)):Error(T(310));Z=l,l={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},tl===null?D.memoizedState=tl=l:tl=tl.next=l}return tl}function bf(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jn(l){var t=An;return An+=1,sa===null&&(sa=[]),l=ly(sa,l,t),t=D,(tl===null?t.memoizedState:tl.next)===null&&(t=t.alternate,A.H=t===null||t.memoizedState===null?Gy:Xy),l}function Of(l){if(l!==null&&typeof l=="object"){if(typeof l.then=="function")return jn(l);if(l.$$typeof===Fd)return;if(l.$$typeof===mt)return dl(l)}throw Error(T(438,String(l)))}function m0(l){var t=null,u=D.updateQueue;if(u!==null&&(t=u.memoCache),t==null){var a=D.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),u===null&&(u=bf(),D.updateQueue=u),u.memoCache=t,u=t.data[t.index],u===void 0)for(u=t.data[t.index]=Array(l),a=0;a<l;a++)u[a]=wd;return t.index++,u}function Rt(l,t){return typeof t=="function"?t(l):t}function Ae(l){var t=P();return d0(t,Z,l)}function d0(l,t,u){var a=l.queue;if(a===null)throw Error(T(311));a.lastRenderedReducer=u;var n=l.baseQueue,e=a.pending;if(e!==null){if(n!==null){var f=n.next;n.next=e.next,e.next=f}t.baseQueue=n=e,a.pending=null}if(e=l.baseState,n===null)l.memoizedState=e;else{t=n.next;var c=f=null,i=null,o=t,g=!1;do{var s=o.lane&-536870913;if(s!==o.lane?(R&s)===s:(Ht&s)===s){var y=o.revertLane;if(y===0)i!==null&&(i=i.next={lane:0,revertLane:0,gesture:null,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),s===Yu&&(g=!0);else if((Ht&y)===y){o=o.next,y===Yu&&(g=!0);continue}else s={lane:0,revertLane:o.revertLane,gesture:null,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},i===null?(c=i=s,f=e):i=i.next=s,D.lanes|=y,gu|=y;s=o.action,Bu&&u(e,s),e=o.hasEagerState?o.eagerState:u(e,s)}else y={lane:s,revertLane:o.revertLane,gesture:o.gesture,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},i===null?(c=i=y,f=e):i=i.next=y,D.lanes|=s,gu|=s;o=o.next}while(o!==null&&o!==t);if(i===null?f=e:i.next=c,!xl(e,l.memoizedState)&&(al=!0,g&&(u=ha,u!==null)))throw u;l.memoizedState=e,l.baseState=f,l.baseQueue=i,a.lastRenderedState=e}return n===null&&(a.lanes=0),[l.memoizedState,a.dispatch]}function hc(l){var t=P(),u=t.queue;if(u===null)throw Error(T(311));u.lastRenderedReducer=l;var a=u.dispatch,n=u.pending,e=t.memoizedState;if(n!==null){u.pending=null;var f=n=n.next;do e=l(e,f.action),f=f.next;while(f!==n);xl(e,t.memoizedState)||(al=!0),t.memoizedState=e,t.baseQueue===null&&(t.baseState=e),u.lastRenderedState=e}return[e,a]}function iy(l,t,u){var a=D,n=P(),e=M;if(e){if(u===void 0)throw Error(T(407));u=u()}else u=t();var f=!xl((Z||n).memoizedState,u);if(f&&(n.memoizedState=u,al=!0),n=n.queue,h0(yy.bind(null,a,n,l),[l]),l=n.getSnapshot!==t||f||tl!==null&&(tl.memoizedState.tag&1)!==0,Aa(l?9:8,{destroy:void 0},oy.bind(null,a,n,u,t),null),l){if(a.flags|=2048,x===null)throw Error(T(349));e||(Ht&127)!==0||vy(a,t,u)}return u}function vy(l,t,u){l.flags|=16384,l={getSnapshot:t,value:u},t=D.updateQueue,t===null?(t=bf(),D.updateQueue=t,t.stores=[l]):(u=t.stores,u===null?t.stores=[l]:u.push(l))}function oy(l,t,u,a){t.value=u,t.getSnapshot=a,my(t)&&dy(l)}function yy(l,t,u){return u(function(){my(t)&&dy(l)})}function my(l){var t=l.getSnapshot;l=l.value;try{var u=t();return!xl(l,u)}catch{return!0}}function dy(l){var t=Zu(l,2);t!==null&&Cl(t,l,2)}function ui(l){var t=Al();if(typeof l=="function"){var u=l;if(l=u(),Bu){Wt(!0);try{u()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=l,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rt,lastRenderedState:l},t}function hy(l,t,u,a){return l.baseState=u,d0(l,Z,typeof a=="function"?a:Rt)}function hg(l,t,u,a,n){if(Af(l))throw Error(T(485));if(l=t.action,l!==null){var e={payload:n,action:l,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(f){e.listeners.push(f)}};A.T!==null?u(!0):e.isTransition=!1,a(e),u=t.pending,u===null?(e.next=t.pending=e,gy(t,e)):(e.next=u.next,t.pending=u.next=e)}}function gy(l,t){var u=t.action,a=t.payload,n=l.state;if(t.isTransition){var e=A.T,f={};f.types=e!==null?e.types:null,A.T=f;try{var c=u(n,a),i=A.S;i!==null&&i(f,c),tv(l,t,c)}catch(o){ai(l,t,o)}finally{e!==null&&f.types!==null&&(e.types=f.types),A.T=e}}else try{e=u(n,a),tv(l,t,e)}catch(o){ai(l,t,o)}}function tv(l,t,u){u!==null&&typeof u=="object"&&typeof u.then=="function"?u.then(function(a){uv(l,t,a)},function(a){return ai(l,t,a)}):uv(l,t,u)}function uv(l,t,u){t.status="fulfilled",t.value=u,Sy(t),l.state=u,t=l.pending,t!==null&&(u=t.next,u===t?l.pending=null:(u=u.next,t.next=u,gy(l,u)))}function ai(l,t,u){var a=l.pending;if(l.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=u,Sy(t),t=t.next;while(t!==a)}l.action=null}function Sy(l){l=l.listeners;for(var t=0;t<l.length;t++)(0,l[t])()}function sy(l,t){return t}function av(l,t){if(M){var u=x.formState;if(u!==null){l:{var a=D;if(M){if(J){t:{for(var n=J,e=Il;n.nodeType!==8;){if(!e){n=null;break t}if(n=kl(n.nextSibling),n===null){n=null;break t}}e=n.data,n=e==="F!"||e==="F"?n:null}if(n){J=kl(n.nextSibling),a=n.data==="F!";break l}}mu(a)}a=!1}a&&(t=u[0])}}return u=Al(),u.memoizedState=u.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sy,lastRenderedState:t},u.queue=a,u=Yy.bind(null,D,a),a.dispatch=u,a=ui(!1),e=T0.bind(null,D,!1,a.queue),a=Al(),n={state:t,dispatch:null,action:l,pending:null},a.queue=n,u=hg.bind(null,D,n,e,u),n.dispatch=u,a.memoizedState=l,[t,u,!1]}function nv(l){var t=P();return Ty(t,Z,l)}function Ty(l,t,u){if(t=d0(l,t,sy)[0],l=Ae(Rt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=jn(t)}catch(f){throw f===Ga?zf:f}else a=t;t=P();var n=t.queue,e=n.dispatch;return u!==t.memoizedState&&(D.flags|=2048,Aa(9,{destroy:void 0},gg.bind(null,n,u),null)),[a,e,l]}function gg(l,t){l.action=t}function ev(l){var t=P(),u=Z;if(u!==null)return Ty(t,u,l);P(),t=t.memoizedState,u=P();var a=u.queue.dispatch;return u.memoizedState=l,[t,a,!1]}function Aa(l,t,u,a){return l={tag:l,create:u,deps:a,inst:t,next:null},t=D.updateQueue,t===null&&(t=bf(),D.updateQueue=t),u=t.lastEffect,u===null?t.lastEffect=l.next=l:(a=u.next,u.next=l,l.next=a,t.lastEffect=l),l}function Ey(){return P().memoizedState}function Ne(l,t,u,a){var n=Al();D.flags|=l,n.memoizedState=Aa(1|t,{destroy:void 0},u,a===void 0?null:a)}function _f(l,t,u,a){var n=P();a=a===void 0?null:a;var e=n.memoizedState.inst;Z!==null&&a!==null&&c0(a,Z.memoizedState.deps)?n.memoizedState=Aa(t,e,u,a):(D.flags|=l,n.memoizedState=Aa(1|t,e,u,a))}function fv(l,t){Ne(8390656,8,l,t)}function h0(l,t){_f(2048,8,l,t)}function Sg(l){D.flags|=4;var t=D.updateQueue;if(t===null)t=bf(),D.updateQueue=t,t.events=[l];else{var u=t.events;u===null?t.events=[l]:u.push(l)}}function zy(l){var t=P().memoizedState;return Sg({ref:t,nextImpl:l}),function(){if((B&2)!==0)throw Error(T(440));return t.impl.apply(void 0,arguments)}}function by(l,t){return _f(4,2,l,t)}function Oy(l,t){return _f(4,4,l,t)}function _y(l,t){if(typeof t=="function"){l=l();var u=t(l);return function(){typeof u=="function"?u():t(null)}}if(t!=null)return l=l(),t.current=l,function(){t.current=null}}function Ay(l,t,u){u=u!=null?u.concat([l]):null,_f(4,4,_y.bind(null,t,l),u)}function g0(){}function Ny(l,t){var u=P();t=t===void 0?null:t;var a=u.memoizedState;return t!==null&&c0(t,a[1])?a[0]:(u.memoizedState=[l,t],l)}function ry(l,t){var u=P();t=t===void 0?null:t;var a=u.memoizedState;if(t!==null&&c0(t,a[1]))return a[0];if(a=l(),Bu){Wt(!0);try{l()}finally{Wt(!1)}}return u.memoizedState=[a,t],a}function S0(l,t,u){return u===void 0||(Ht&1073741824)!==0&&(R&261930)===0?l.memoizedState=t:(l.memoizedState=u,l=Tm(),D.lanes|=l,gu|=l,u)}function Dy(l,t,u,a){return xl(u,t)?u:du.current!==null?(l=S0(l,u,a),xl(l,t)||(al=!0),l):(Ht&106)===0||(Ht&1073741824)!==0&&(R&261930)===0?(al=!0,l.memoizedState=u):(l=Tm(),D.lanes|=l,gu|=l,t)}function My(l,t,u,a,n){var e=G.p;G.p=e!==0&&8>e?e:8;var f=A.T,c={};c.types=f!==null?f.types:null,A.T=c,T0(l,!1,t,u);try{var i=n(),o=A.S;if(o!==null&&o(c,i),i!==null&&typeof i=="object"&&typeof i.then=="function"){var g=yg(i,a);on(l,t,g,Zl(l))}else on(l,t,a,Zl(l))}catch(s){on(l,t,{then:function(){},status:"rejected",reason:s},Zl())}finally{G.p=e,f!==null&&c.types!==null&&(f.types=c.types),A.T=f}}function sg(){}function ni(l,t,u,a){if(l.tag!==5)throw Error(T(476));var n=Uy(l).queue;My(l,n,t,Nu,u===null?sg:function(){return Cy(l),u(a)})}function Uy(l){var t=l.memoizedState;if(t!==null)return t;t={memoizedState:Nu,baseState:Nu,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rt,lastRenderedState:Nu},next:null};var u={};return t.next={memoizedState:u,baseState:u,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rt,lastRenderedState:u},next:null},l.memoizedState=t,l=l.alternate,l!==null&&(l.memoizedState=t),t}function Cy(l){var t=Uy(l);t.next===null&&(t=l.alternate.memoizedState),on(l,t.next.queue,{},Zl())}function s0(){return dl(Ha)}function Hy(){return P().memoizedState}function Ry(){return P().memoizedState}function Tg(l){for(var t=l.return;t!==null;){switch(t.tag){case 24:case 3:var u=Zl();l=au(u);var a=nu(t,l,u);a!==null&&(Cl(a,t,u),fn(a,t,u)),t={cache:t0()},l.payload=t;return}t=t.return}}function Eg(l,t,u){var a=Zl();u={lane:a,revertLane:0,gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Af(l)?qy(t,u):(u=ki(l,t,u,a),u!==null&&(Cl(u,l,a),By(u,t,a)))}function Yy(l,t,u){var a=Zl();on(l,t,u,a)}function on(l,t,u,a){var n={lane:a,revertLane:0,gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null};if(Af(l))qy(t,n);else{var e=l.alternate;if(l.lanes===0&&(e===null||e.lanes===0)&&(e=t.lastRenderedReducer,e!==null))try{var f=t.lastRenderedState,c=e(f,u);if(n.hasEagerState=!0,n.eagerState=c,xl(c,f))return Tf(l,t,n,0),x===null&&sf(),!1}catch{}if(u=ki(l,t,n,a),u!==null)return Cl(u,l,a),By(u,t,a),!0}return!1}function T0(l,t,u,a){if(a={lane:2,revertLane:U0(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Af(l)){if(t)throw Error(T(479))}else t=ki(l,u,a,2),t!==null&&Cl(t,l,2)}function Af(l){var t=l.alternate;return l===D||t!==null&&t===D}function qy(l,t){Sa=We=!0;var u=l.pending;u===null?t.next=t:(t.next=u.next,u.next=t),l.pending=t}function By(l,t,u){if((u&4194048)!==0){var a=t.lanes;a&=l.pendingLanes,u|=a,t.lanes=u,Eo(l,u)}}var Ie={readContext:dl,use:Of,useCallback:I,useContext:I,useEffect:I,useImperativeHandle:I,useLayoutEffect:I,useInsertionEffect:I,useMemo:I,useReducer:I,useRef:I,useState:I,useDebugValue:I,useDeferredValue:I,useTransition:I,useSyncExternalStore:I,useId:I,useHostTransitionStatus:I,useFormState:I,useActionState:I,useOptimistic:I,useMemoCache:I,useCacheRefresh:I,useEffectEvent:I},Gy={readContext:dl,use:Of,useCallback:function(l,t){return Al().memoizedState=[l,t===void 0?null:t],l},useContext:dl,useEffect:fv,useImperativeHandle:function(l,t,u){u=u!=null?u.concat([l]):null,Ne(4194308,4,_y.bind(null,t,l),u)},useLayoutEffect:function(l,t){return Ne(4194308,4,l,t)},useInsertionEffect:function(l,t){Ne(4,2,l,t)},useMemo:function(l,t){var u=Al();t=t===void 0?null:t;var a=l();if(Bu){Wt(!0);try{l()}finally{Wt(!1)}}return u.memoizedState=[a,t],a},useReducer:function(l,t,u){var a=Al();if(u!==void 0){var n=u(t);if(Bu){Wt(!0);try{u(t)}finally{Wt(!1)}}}else n=t;return a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:l,lastRenderedState:n},a.queue=l,l=l.dispatch=Eg.bind(null,D,l),[a.memoizedState,l]},useRef:function(l){var t=Al();return l={current:l},t.memoizedState=l},useState:function(l){l=ui(l);var t=l.queue,u=Yy.bind(null,D,t);return t.dispatch=u,[l.memoizedState,u]},useDebugValue:g0,useDeferredValue:function(l,t){var u=Al();return S0(u,l,t)},useTransition:function(){var l=ui(!1);return l=My.bind(null,D,l.queue,!0,!1),Al().memoizedState=l,[!1,l]},useSyncExternalStore:function(l,t,u){var a=D,n=Al();if(M){if(u===void 0)throw Error(T(407));u=u()}else{if(u=t(),x===null)throw Error(T(349));(R&127)!==0||vy(a,t,u)}n.memoizedState=u;var e={value:u,getSnapshot:t};return n.queue=e,fv(yy.bind(null,a,e,l),[l]),a.flags|=2048,Aa(9,{destroy:void 0},oy.bind(null,a,e,u,t),null),u},useId:function(){var l=Al(),t=x.identifierPrefix;if(M){var u=gt,a=ht;u=(a&~(1<<32-Vl(a)-1)).toString(32)+u,t="_"+t+"R_"+u,u=$e++,0<u&&(t+="H"+u.toString(32)),t+="_"}else u=mg++,t="_"+t+"r_"+u.toString(32)+"_";return l.memoizedState=t},useHostTransitionStatus:s0,useFormState:av,useActionState:av,useOptimistic:function(l){var t=Al();t.memoizedState=t.baseState=l;var u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=u,t=T0.bind(null,D,!0,u),u.dispatch=t,[l,t]},useMemoCache:m0,useCacheRefresh:function(){return Al().memoizedState=Tg.bind(null,D)},useEffectEvent:function(l){var t=Al(),u={impl:l};return t.memoizedState=u,function(){if((B&2)!==0)throw Error(T(440));return u.impl.apply(void 0,arguments)}}},Xy={readContext:dl,use:Of,useCallback:Ny,useContext:dl,useEffect:h0,useImperativeHandle:Ay,useInsertionEffect:by,useLayoutEffect:Oy,useMemo:ry,useReducer:Ae,useRef:Ey,useState:function(){return Ae(Rt)},useDebugValue:g0,useDeferredValue:function(l,t){var u=P();return Dy(u,Z.memoizedState,l,t)},useTransition:function(){var l=Ae(Rt)[0],t=P().memoizedState;return[typeof l=="boolean"?l:jn(l),t]},useSyncExternalStore:iy,useId:Hy,useHostTransitionStatus:s0,useFormState:nv,useActionState:nv,useOptimistic:function(l,t){var u=P();return hy(u,Z,l,t)},useMemoCache:m0,useCacheRefresh:Ry,useEffectEvent:zy},zg={readContext:dl,use:Of,useCallback:Ny,useContext:dl,useEffect:h0,useImperativeHandle:Ay,useInsertionEffect:by,useLayoutEffect:Oy,useMemo:ry,useReducer:hc,useRef:Ey,useState:function(){return hc(Rt)},useDebugValue:g0,useDeferredValue:function(l,t){var u=P();return Z===null?S0(u,l,t):Dy(u,Z.memoizedState,l,t)},useTransition:function(){var l=hc(Rt)[0],t=P().memoizedState;return[typeof l=="boolean"?l:jn(l),t]},useSyncExternalStore:iy,useId:Hy,useHostTransitionStatus:s0,useFormState:ev,useActionState:ev,useOptimistic:function(l,t){var u=P();return Z!==null?hy(u,Z,l,t):(u.baseState=l,[l,u.queue.dispatch])},useMemoCache:m0,useCacheRefresh:Ry,useEffectEvent:zy};function gc(l,t,u,a){t=l.memoizedState,u=u(a,t),u=u==null?t:L({},t,u),l.memoizedState=u,l.lanes===0&&(l.updateQueue.baseState=u)}var ei={enqueueSetState:function(l,t,u){l=l._reactInternals;var a=Zl(),n=au(a);n.payload=t,u!=null&&(n.callback=u),t=nu(l,n,a),t!==null&&(Cl(t,l,a),fn(t,l,a))},enqueueReplaceState:function(l,t,u){l=l._reactInternals;var a=Zl(),n=au(a);n.tag=1,n.payload=t,u!=null&&(n.callback=u),t=nu(l,n,a),t!==null&&(Cl(t,l,a),fn(t,l,a))},enqueueForceUpdate:function(l,t){l=l._reactInternals;var u=Zl(),a=au(u);a.tag=2,t!=null&&(a.callback=t),t=nu(l,a,u),t!==null&&(Cl(t,l,u),fn(t,l,u))}};function cv(l,t,u,a,n,e,f){return l=l.stateNode,typeof l.shouldComponentUpdate=="function"?l.shouldComponentUpdate(a,e,f):t.prototype&&t.prototype.isPureReactComponent?!En(u,a)||!En(n,e):!0}function iv(l,t,u,a){l=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(u,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(u,a),t.state!==l&&ei.enqueueReplaceState(t,t.state,null)}function Gu(l,t){var u=t;if("ref"in t){u={};for(var a in t)a!=="ref"&&(u[a]=t[a])}if(l=l.defaultProps){u===t&&(u=L({},u));for(var n in l)u[n]===void 0&&(u[n]=l[n])}return u}function Qy(l){Ze(l)}function jy(l){console.error(l)}function Vy(l){Ze(l)}function ke(l,t){try{var u=l.onUncaughtError;u(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function vv(l,t,u){try{var a=l.onCaughtError;a(u.value,{componentStack:u.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function fi(l,t,u){return u=au(u),u.tag=3,u.payload={element:null},u.callback=function(){ke(l,t)},u}function Zy(l){return l=au(l),l.tag=3,l}function xy(l,t,u,a){var n=u.type.getDerivedStateFromError;if(typeof n=="function"){var e=a.value;l.payload=function(){return n(e)},l.callback=function(){vv(t,u,a)}}var f=u.stateNode;f!==null&&typeof f.componentDidCatch=="function"&&(l.callback=function(){vv(t,u,a),typeof n!="function"&&(cu===null?cu=new Set([this]):cu.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function bg(l,t,u,a,n){if(u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=u.alternate,t!==null&&Hu(t,u,n,!0),u=sl.current,u!==null){switch(u.tag){case 31:case 13:case 19:return zl===null?ff():u.alternate===null&&k===0&&(k=3),u.flags&=-257,u.flags|=65536,u.lanes=n,a===Je?u.flags|=16384:(t=u.updateQueue,t===null?u.updateQueue=new Set([a]):t.add(a),Oc(l,a,n)),!1;case 22:return u.flags|=65536,a===Je?u.flags|=16384:(t=u.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},u.updateQueue=t):(u=t.retryQueue,u===null?t.retryQueue=new Set([a]):u.add(a)),Oc(l,a,n)),!1}throw Error(T(435,u.tag))}return Oc(l,a,n),ff(),!1}if(M)return t=sl.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,a!==Fc&&(l=Error(T(422),{cause:a}),bn($l(l,u)))):(a!==Fc&&(t=Error(T(423),{cause:a}),bn($l(t,u))),l=l.current.alternate,l.flags|=65536,n&=-n,l.lanes|=n,a=$l(a,u),n=fi(l.stateNode,a,n),dc(l,n),k!==4&&(k=2)),!1;var e=Error(T(520),{cause:a});if(e=$l(e,u),hn===null?hn=[e]:hn.push(e),k!==4&&(k=2),t===null)return!0;a=$l(a,u),u=t;do{switch(u.tag){case 3:return u.flags|=65536,l=n&-n,u.lanes|=l,l=fi(u.stateNode,a,l),dc(u,l),!1;case 1:if(t=u.type,e=u.stateNode,(u.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||e!==null&&typeof e.componentDidCatch=="function"&&(cu===null||!cu.has(e))))return u.flags|=65536,n&=-n,u.lanes|=n,n=Zy(n),xy(n,l,u,a),dc(u,n),!1;break;case 22:if(u.memoizedState!==null)return u.flags|=65536,!1}u=u.return}while(u!==null);return!1}var E0=Error(T(461)),al=!1;function nl(l,t,u,a){t.child=l===null?uy(t,null,u,a):qu(t,l.child,u,a)}function ov(l,t,u,a,n){u=u.render;var e=t.ref;if("ref"in a){var f={};for(var c in a)c!=="ref"&&(f[c]=a[c])}else f=a;return Ru(t),a=i0(l,t,u,f,e,n),c=v0(),l!==null&&!al?(o0(l,t,n),Yt(l,t,n)):(M&&c&&Ef(t),t.flags|=1,nl(l,t,a,n),t.child)}function yv(l,t,u,a,n){if(l===null){var e=u.type;return typeof e=="function"&&!Pi(e)&&e.defaultProps===void 0&&u.compare===null?(t.tag=15,t.type=e,Ly(l,t,e,a,n)):(l=be(u.type,null,a,t,t.mode,n),l.ref=t.ref,l.return=t,t.child=l)}if(e=l.child,!b0(l,n)){var f=e.memoizedProps;if(u=u.compare,u=u!==null?u:En,u(f,a)&&l.ref===t.ref)return Yt(l,t,n)}return t.flags|=1,l=Dt(e,a),l.ref=t.ref,l.return=t,t.child=l}function Ly(l,t,u,a,n){if(l!==null){var e=l.memoizedProps;if(En(e,a)&&l.ref===t.ref)if(al=!1,t.pendingProps=a=e,b0(l,n))(l.flags&131072)!==0&&(al=!0);else return t.lanes=l.lanes,Yt(l,t,n)}return ci(l,t,u,a,n)}function py(l,t,u,a){var n=a.children,e=l!==null?l.memoizedState:null;if(l===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(e=e!==null?e.baseLanes|u:u,l!==null){for(a=t.child=l.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~e}else a=0,t.child=null;return mv(l,t,e,u,a)}if((u&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},l!==null&&_e(t,e!==null?e.cachePool:null),e!==null?lv(t,e):li(),ey(t);else return a=t.lanes=536870912,mv(l,t,e!==null?e.baseLanes|u:u,u,a)}else e!==null?(_e(t,e.cachePool),lv(t,e),fu(),t.memoizedState=null):(l!==null&&_e(t,null),li(),fu());return nl(l,t,n,u),t.child}function yn(l,t){return l!==null&&l.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mv(l,t,u,a,n){var e=u0();return e=e===null?null:{parent:ul._currentValue,pool:e},t.memoizedState={baseLanes:u,cachePool:e},l!==null&&_e(t,null),li(),ey(t),l!==null&&Hu(l,t,a,!0),t.childLanes=n,null}function re(l,t){return t=Nf({mode:t.mode,children:t.children},l.mode),t.ref=l.ref,l.child=t,t.return=l,t}function dv(l,t,u){return qu(t,l.child,null,u),l=re(t,t.pendingProps),l.flags|=2,Bl(t),t.memoizedState=null,l}function Og(l,t,u){var a=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,l===null){if(M){if(a.mode==="hidden")return l=re(t,a),t.lanes=536870912,l.memoizedState={baseLanes:0,cachePool:null},yn(null,l);if(ti(t),(l=J)?(l=pm(l,Il),l=l!==null&&l.data==="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:yu!==null?{id:ht,overflow:gt}:null,retryLane:536870912,hydrationErrors:null},u=Wo(l),u.return=t,t.child=u,ol=t,J=null)):l=null,l===null)throw mu(t);return t.lanes=536870912,null}return re(t,a)}var e=l.memoizedState;if(e!==null){var f=e.dehydrated;if(ti(t),n)if(t.flags&256)t.flags&=-257,t=dv(l,t,u);else if(t.memoizedState!==null)t.child=l.child,t.flags|=128,t=null;else throw Error(T(558));else if(al||Hu(l,t,u,!1),n=(u&l.childLanes)!==0,al||n){if(du.current===null){if(a=x,a!==null&&(f=zo(a,u),f!==0&&f!==e.retryLane))throw e.retryLane=f,Zu(l,f),Cl(a,l,f),E0;ff()}t=dv(l,t,u)}else l=e.treeContext,J=kl(f.nextSibling),ol=t,M=!0,uu=null,Il=!1,l!==null&&Io(t,l),t=re(t,a),t.flags|=134221824;return t}return l=Dt(l.child,{mode:a.mode,children:a.children}),l.ref=t.ref,t.child=l,l.return=t,l}function $u(l,t){var u=t.ref;if(u===null)l!==null&&l.ref!==null&&(t.flags|=4194816);else{if(typeof u!="function"&&typeof u!="object")throw Error(T(284));(l===null||l.ref!==u)&&(t.flags|=4194816)}}function ci(l,t,u,a,n){return Ru(t),u=i0(l,t,u,a,void 0,n),a=v0(),l!==null&&!al?(o0(l,t,n),Yt(l,t,n)):(M&&a&&Ef(t),t.flags|=1,nl(l,t,u,n),t.child)}function hv(l,t,u,a,n,e){return Ru(t),t.updateQueue=null,u=cy(t,a,u,n),fy(l),a=v0(),l!==null&&!al?(o0(l,t,e),Yt(l,t,e)):(M&&a&&Ef(t),t.flags|=1,nl(l,t,u,e),t.child)}function gv(l,t,u,a,n){if(Ru(t),t.stateNode===null){var e=ca,f=u.contextType;typeof f=="object"&&f!==null&&(e=dl(f)),e=new u(a,e),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ei,t.stateNode=e,e._reactInternals=t,e=t.stateNode,e.props=a,e.state=t.memoizedState,e.refs={},n0(t),f=u.contextType,e.context=typeof f=="object"&&f!==null?dl(f):ca,e.state=t.memoizedState,f=u.getDerivedStateFromProps,typeof f=="function"&&(gc(t,u,f,a),e.state=t.memoizedState),typeof u.getDerivedStateFromProps=="function"||typeof e.getSnapshotBeforeUpdate=="function"||typeof e.UNSAFE_componentWillMount!="function"&&typeof e.componentWillMount!="function"||(f=e.state,typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount(),f!==e.state&&ei.enqueueReplaceState(e,e.state,null),vn(t,a,e,n),cn(),e.state=t.memoizedState),typeof e.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(l===null){e=t.stateNode;var c=t.memoizedProps,i=Gu(u,c);e.props=i;var o=e.context,g=u.contextType;f=ca,typeof g=="object"&&g!==null&&(f=dl(g));var s=u.getDerivedStateFromProps;g=typeof s=="function"||typeof e.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,g||typeof e.UNSAFE_componentWillReceiveProps!="function"&&typeof e.componentWillReceiveProps!="function"||(c||o!==f)&&iv(t,e,a,f),wt=!1;var y=t.memoizedState;e.state=y,vn(t,a,e,n),cn(),o=t.memoizedState,c||y!==o||wt?(typeof s=="function"&&(gc(t,u,s,a),o=t.memoizedState),(i=wt||cv(t,u,i,a,y,o,f))?(g||typeof e.UNSAFE_componentWillMount!="function"&&typeof e.componentWillMount!="function"||(typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount()),typeof e.componentDidMount=="function"&&(t.flags|=4194308)):(typeof e.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=o),e.props=a,e.state=o,e.context=f,a=i):(typeof e.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{e=t.stateNode,kc(l,t),f=t.memoizedProps,g=Gu(u,f),e.props=g,s=t.pendingProps,y=e.context,o=u.contextType,i=ca,typeof o=="object"&&o!==null&&(i=dl(o)),c=u.getDerivedStateFromProps,(o=typeof c=="function"||typeof e.getSnapshotBeforeUpdate=="function")||typeof e.UNSAFE_componentWillReceiveProps!="function"&&typeof e.componentWillReceiveProps!="function"||(f!==s||y!==i)&&iv(t,e,a,i),wt=!1,y=t.memoizedState,e.state=y,vn(t,a,e,n),cn();var h=t.memoizedState;f!==s||y!==h||wt||l!==null&&l.dependencies!==null&&Ke(l.dependencies)?(typeof c=="function"&&(gc(t,u,c,a),h=t.memoizedState),(g=wt||cv(t,u,g,a,y,h,i)||l!==null&&l.dependencies!==null&&Ke(l.dependencies))?(o||typeof e.UNSAFE_componentWillUpdate!="function"&&typeof e.componentWillUpdate!="function"||(typeof e.componentWillUpdate=="function"&&e.componentWillUpdate(a,h,i),typeof e.UNSAFE_componentWillUpdate=="function"&&e.UNSAFE_componentWillUpdate(a,h,i)),typeof e.componentDidUpdate=="function"&&(t.flags|=4),typeof e.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof e.componentDidUpdate!="function"||f===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof e.getSnapshotBeforeUpdate!="function"||f===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=h),e.props=a,e.state=h,e.context=i,a=g):(typeof e.componentDidUpdate!="function"||f===l.memoizedProps&&y===l.memoizedState||(t.flags|=4),typeof e.getSnapshotBeforeUpdate!="function"||f===l.memoizedProps&&y===l.memoizedState||(t.flags|=1024),a=!1)}return e=a,$u(l,t),a=(t.flags&128)!==0,e||a?(e=t.stateNode,u=a&&typeof u.getDerivedStateFromError!="function"?null:e.render(),t.flags|=1,l!==null&&a?(t.child=qu(t,l.child,null,n),t.child=qu(t,null,u,n)):nl(l,t,u,n),t.memoizedState=e.state,l=t.child):l=Yt(l,t,n),l}function Sv(l,t,u,a){return Cu(),t.flags|=256,nl(l,t,u,a),t.child}var ii={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vi(l){return{baseLanes:l,cachePool:Po()}}function oi(l,t,u){return l=l!==null?l.childLanes&~u:0,t&&(l|=Xl),l}function Ky(l,t,u){var a=t.pendingProps,n=!1,e=(t.flags&128)!==0,f;if((f=e)||(f=l!==null&&l.memoizedState===null?!1:(gl.current&2)!==0),f&&(n=!0,t.flags&=-129),f=(t.flags&32)!==0,t.flags&=-33,l===null){if(M){if(n?eu(t):fu(),(l=J)?(l=pm(l,Il),l=l!==null&&l.data!=="&"?l:null,l!==null&&(t.memoizedState={dehydrated:l,treeContext:yu!==null?{id:ht,overflow:gt}:null,retryLane:536870912,hydrationErrors:null},u=Wo(l),u.return=t,t.child=u,ol=t,J=null)):l=null,l===null)throw mu(t);return Y0(l)?t.lanes=32:t.lanes=536870912,null}return e=a.children,a=a.fallback,n?(fu(),n=t.mode,e=Nf({mode:"hidden",children:e},n),a=ru(a,n,u,null),e.return=t,a.return=t,e.sibling=a,t.child=e,a=t.child,a.memoizedState=vi(u),a.childLanes=oi(l,f,u),t.memoizedState=ii,yn(null,a)):(eu(t),z0(t,e))}var c=l.memoizedState;if(c!==null){var i=c.dehydrated;if(i!==null)return _g(l,t,e,f,a,i,c,u)}return n?(fu(),n=a.fallback,e=t.mode,c=l.child,i=c.sibling,a=Dt(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&1206910976,i!==null?n=Dt(i,n):(n=ru(n,e,u,null),n.flags|=2),n.return=t,a.return=t,a.sibling=n,t.child=a,yn(null,a),a=t.child,n=l.child.memoizedState,n===null?n=vi(u):(e=n.cachePool,e!==null?(c=ul._currentValue,e=e.parent!==c?{parent:c,pool:c}:e):e=Po(),n={baseLanes:n.baseLanes|u,cachePool:e}),a.memoizedState=n,a.childLanes=oi(l,f,u),t.memoizedState=ii,yn(l.child,a)):(eu(t),u=l.child,l=u.sibling,u=Dt(u,{mode:"visible",children:a.children}),u.return=t,u.sibling=null,l!==null&&(f=t.deletions,f===null?(t.deletions=[l],t.flags|=16):f.push(l)),t.child=u,t.memoizedState=null,u)}function z0(l,t){return t=Nf({mode:"visible",children:t},l.mode),t.return=l,l.child=t}function Nf(l,t){return l=Ul(22,l,null,t),l.lanes=0,l}function ce(l,t,u){return qu(t,l.child,null,u),l=z0(t,t.pendingProps.children),l.flags|=2,t.memoizedState=null,l}function _g(l,t,u,a,n,e,f,c){if(u)return t.flags&256?(eu(t),t.flags&=-257,ce(l,t,c)):t.memoizedState!==null?(fu(),t.child=l.child,t.flags|=128,null):(fu(),e=n.fallback,f=t.mode,n=Nf({mode:"visible",children:n.children},f),e=ru(e,f,c,null),e.flags|=2,n.return=t,e.return=t,n.sibling=e,t.child=n,qu(t,l.child,null,c),n=t.child,n.memoizedState=vi(c),n.childLanes=oi(l,a,c),t.memoizedState=ii,yn(null,n));if(eu(t),Y0(e)){if(a=e.nextSibling&&e.nextSibling.dataset,a)var i=a.dgst;return a=i,a!==""&&(n=Error(T(419)),n.stack="",n.digest=a,bn({value:n,source:null,stack:null})),ce(l,t,c)}if(al||Hu(l,t,c,!1),a=(c&l.childLanes)!==0,al||a){if(du.current!==null)return ce(l,t,c);if(a=x,a!==null&&(n=zo(a,c),n!==0&&n!==f.retryLane))throw f.retryLane=n,Zu(l,n),Cl(a,l,n),E0;return Bi(e)||ff(),ce(l,t,c)}return Bi(e)?(t.flags|=192,t.child=l.child,null):(l=f.treeContext,J=kl(e.nextSibling),ol=t,M=!0,uu=null,Il=!1,l!==null&&Io(t,l),t=z0(t,n.children),t.flags|=134221824,t)}function sv(l,t,u){l.lanes|=t;var a=l.alternate;a!==null&&(a.lanes|=t),Oe(l.return,t,u)}function Tv(l){for(var t=null;l!==null;){var u=l.alternate;u!==null&&Fe(u)===null&&(t=l),l=l.sibling}return t}function ie(l,t,u,a,n,e){var f=l.memoizedState;f===null?l.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:u,tailMode:n,treeForkCount:e}:(f.isBackwards=t,f.rendering=null,f.renderingStartTime=0,f.last=a,f.tail=u,f.tailMode=n,f.treeForkCount=e)}function Sc(l){var t=l.child;for(l.child=null;t!==null;){var u=t.sibling;t.sibling=l.child,l.child=t,t=u}}function yi(l,t,u){var a=t.pendingProps,n=a.revealOrder,e=a.tail;a=a.children;var f=gl.current;if(t.flags&128)return _n(t,f),null;var c=(f&2)!==0;if(c?(f=f&1|2,t.flags|=128):f&=1,_n(t,f),n==="backwards"&&l!==null?(Sc(l),nl(l,t,a,u),Sc(l)):nl(l,t,a,u),a=M?zn:0,!c&&l!==null&&(l.flags&128)!==0)l:for(l=t.child;l!==null;){if(l.tag===13)l.memoizedState!==null&&sv(l,u,t);else if(l.tag===19)sv(l,u,t);else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break l;for(;l.sibling===null;){if(l.return===null||l.return===t)break l;l=l.return}l.sibling.return=l.return,l=l.sibling}switch(n){case"backwards":u=Tv(t.child),u===null?(n=t.child,t.child=null):(n=u.sibling,u.sibling=null,Sc(t)),ie(t,!0,n,null,e,a);break;case"unstable_legacy-backwards":for(u=null,n=t.child,t.child=null;n!==null;){if(l=n.alternate,l!==null&&Fe(l)===null){t.child=n;break}l=n.sibling,n.sibling=u,u=n,n=l}ie(t,!0,u,null,e,a);break;case"together":ie(t,!1,null,null,void 0,a);break;case"independent":t.memoizedState=null;break;default:u=Tv(t.child),u===null?(n=t.child,t.child=null):(n=u.sibling,u.sibling=null),ie(t,!1,n,u,e,a)}return t.child}function Ev(l,t,u){var a=t.pendingProps;return It(t,t.type,a.value),nl(l,t,a.children,u),t.child}function Yt(l,t,u){if(l!==null&&(t.dependencies=l.dependencies),gu|=t.lanes,(u&t.childLanes)===0)if(l!==null){if(Hu(l,t,u,!1),(u&t.childLanes)===0)return null}else return null;if(l!==null&&t.child!==l.child)throw Error(T(153));if(t.child!==null){for(l=t.child,u=Dt(l,l.pendingProps),t.child=u,u.return=t;l.sibling!==null;)l=l.sibling,u=u.sibling=Dt(l,l.pendingProps),u.return=t;u.sibling=null}return t.child}function b0(l,t){return(l.lanes&t)!==0?!0:(l=l.dependencies,!!(l!==null&&Ke(l)))}function Ag(l,t,u){switch(t.tag){case 3:Xe(t,t.stateNode.containerInfo),It(t,ul,l.memoizedState.cache),Cu();break;case 27:case 5:Qc(t);break;case 4:Xe(t,t.stateNode.containerInfo);break;case 10:It(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,ti(t),null;break;case 13:var a=t.memoizedState;if(a!==null){if(a.dehydrated!==null)return eu(t),t.flags|=128,null;a=Hu(l,t,u,!1);var n=t.child.childLanes;return a||(u&n)!==0?Ky(l,t,u):(eu(t),l=Yt(l,t,u),l!==null?l.sibling:null)}eu(t);break;case 19:if(t.flags&128)return yi(l,t,u);if(n=(l.flags&128)!==0,a=(u&t.childLanes)!==0,a||(Hu(l,t,u,!1),a=(u&t.childLanes)!==0),n){if(a)return yi(l,t,u);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),_n(t,gl.current),a)break;return null;case 22:return t.lanes=0,py(l,t,u,t.pendingProps);case 24:It(t,ul,l.memoizedState.cache)}return Yt(l,t,u)}function Jy(l,t,u){if(l!==null)if(l.memoizedProps!==t.pendingProps)al=!0;else{if(!b0(l,u)&&(t.flags&128)===0)return al=!1,Ag(l,t,u);al=(l.flags&131072)!==0}else al=!1,M&&(t.flags&1048576)!==0&&$o(t,zn,t.index);switch(t.lanes=0,t.tag){case 16:l:{var a=t.pendingProps;if(l=bu(t.elementType),t.type=l,typeof l=="function")Pi(l)?(a=Gu(l,a),t.tag=1,t=gv(null,t,l,a,u)):(t.tag=0,t=ci(null,t,l,a,u));else{if(l!=null){var n=l.$$typeof;if(n===Vi){t.tag=11,t=ov(null,t,l,a,u);break l}else if(n===Zi){t.tag=14,t=yv(null,t,l,a,u);break l}else if(n===mt){t.tag=10,t.type=l,t=Ev(null,t,u);break l}}throw t=Gc(l)||l,Error(T(306,t,""))}}return t;case 0:return ci(l,t,t.type,t.pendingProps,u);case 1:return a=t.type,n=Gu(a,t.pendingProps),gv(l,t,a,n,u);case 3:l:{if(Xe(t,t.stateNode.containerInfo),l===null)throw Error(T(387));a=t.pendingProps;var e=t.memoizedState;n=e.element,kc(l,t),vn(t,a,null,u);var f=t.memoizedState;if(a=f.cache,It(t,ul,a),a!==e.cache&&$c(t,[ul],u,!0),cn(),a=f.element,e.isDehydrated)if(e={element:a,isDehydrated:!1,cache:f.cache},t.updateQueue.baseState=e,t.memoizedState=e,t.flags&256){t=Sv(l,t,a,u);break l}else if(a!==n){n=$l(Error(T(424)),t),bn(n),t=Sv(l,t,a,u);break l}else for(l=t.stateNode.containerInfo,l.nodeType===9?l=l.body:l=l.nodeName==="HTML"?l.ownerDocument.body:l,J=kl(l.firstChild),ol=t,M=!0,uu=null,Il=!0,u=uy(t,null,a,u),t.child=u;u;)u.flags=u.flags&-3|134221824,u=u.sibling;else{if(Cu(),a===n){t=Yt(l,t,u);break l}nl(l,t,a,u)}t=t.child}return t;case 26:return $u(l,t),l===null?(u=Jv(t.type,null,t.pendingProps,null))?t.memoizedState=u:M||(t.stateNode=Bm(t.type,t.pendingProps,tu.current,t)):t.memoizedState=Jv(t.type,l.memoizedProps,t.pendingProps,l.memoizedState),null;case 27:return Qc(t),l===null&&M&&(a=t.stateNode=Km(t.type,t.pendingProps,tu.current),ol=t,Il=!0,n=J,su(t.type)?(Gi=n,J=kl(a.firstChild)):J=n),nl(l,t,t.pendingProps.children,u),$u(l,t),l===null&&(t.flags|=4194304),t.child;case 5:return l===null&&M&&((n=a=J)&&(a=SS(a,t.type,t.pendingProps,Il),a!==null?(t.stateNode=a,ol=t,J=kl(a.firstChild),Il=!1,n=!0):n=!1),n||mu(t)),Qc(t),n=t.type,e=t.pendingProps,f=l!==null?l.memoizedProps:null,a=e.children,Ri(n,e)?a=null:f!==null&&Ri(n,f)&&(t.flags|=32),t.memoizedState!==null&&(n=i0(l,t,dg,null,null,u),Ha._currentValue=n),$u(l,t),nl(l,t,a,u),t.child;case 6:return l===null&&M&&((l=u=J)&&(u=sS(u,t.pendingProps,Il),u!==null?(t.stateNode=u,ol=t,J=null,l=!0):l=!1),l||mu(t)),null;case 13:return Ky(l,t,u);case 4:return Xe(t,t.stateNode.containerInfo),a=t.pendingProps,l===null?t.child=qu(t,null,a,u):nl(l,t,a,u),t.child;case 11:return ov(l,t,t.type,t.pendingProps,u);case 7:return a=t.pendingProps,$u(l,t),nl(l,t,a,u),t.child;case 8:return nl(l,t,t.pendingProps.children,u),t.child;case 12:return nl(l,t,t.pendingProps.children,u),t.child;case 10:return Ev(l,t,u);case 9:return n=t.type._context,a=t.pendingProps.children,Ru(t),n=dl(n),a=a(n),t.flags|=1,nl(l,t,a,u),t.child;case 14:return yv(l,t,t.type,t.pendingProps,u);case 15:return Ly(l,t,t.type,t.pendingProps,u);case 19:return yi(l,t,u);case 31:return Og(l,t,u);case 22:return py(l,t,u,t.pendingProps);case 24:return Ru(t),a=dl(ul),l===null?(n=u0(),n===null&&(n=x,e=t0(),n.pooledCache=e,e.refCount++,e!==null&&(n.pooledCacheLanes|=u),n=e),t.memoizedState={parent:a,cache:n},n0(t),It(t,ul,n)):((l.lanes&u)!==0&&(kc(l,t),vn(t,null,null,u),cn()),n=l.memoizedState,e=t.memoizedState,n.parent!==a?(n={parent:a,cache:a},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),It(t,ul,a)):(a=e.cache,It(t,ul,a),a!==n.cache&&$c(t,[ul],u,!0))),nl(l,t,t.pendingProps.children,u),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),a=t.pendingProps,a.name!=null&&a.name!=="auto"?t.flags|=l===null?18882560:18874368:M&&Ef(t),l!==null&&l.memoizedProps.name!==a.name?t.flags|=4194816:$u(l,t),nl(l,t,a.children,u),t.child;case 29:throw t.pendingProps}throw Error(T(156,t.tag))}function At(l){l.flags|=4}function sc(l,t,u,a,n){var e;if((e=(l.mode&32)!==0)&&(e=u===null?Wv(t,a):Wv(t,a)&&(a.src!==u.src||a.srcSet!==u.srcSet)),e){if(l.flags|=16777216,(n&335544128)===n)if(l.stateNode.complete)l.flags|=8192;else if(bm())l.flags|=8192;else throw Mu=Je,a0}else l.flags&=-16777217}function zv(l,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)l.flags&=-16777217;else if(l.flags|=16777216,!Wm(t))if(bm())l.flags|=8192;else throw Mu=Je,a0}function ve(l,t){t!==null&&(l.flags|=4),l.flags&16384&&(t=l.tag!==22?so():536870912,l.lanes|=t,Na|=t)}function wa(l,t){if(!M)switch(l.tailMode){case"visible":break;case"collapsed":for(var u=l.tail,a=null;u!==null;)u.alternate!==null&&(a=u),u=u.sibling;a===null?t||l.tail===null?l.tail=null:l.tail.sibling=null:a.sibling=null;break;default:for(t=l.tail,u=null;t!==null;)t.alternate!==null&&(u=t),t=t.sibling;u===null?l.tail=null:u.sibling=null}}function K(l){var t=l.alternate!==null&&l.alternate.child===l.child,u=0,a=0;if(t)for(var n=l.child;n!==null;)u|=n.lanes|n.childLanes,a|=n.subtreeFlags&1206910976,a|=n.flags&1206910976,n.return=l,n=n.sibling;else for(n=l.child;n!==null;)u|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=l,n=n.sibling;return l.subtreeFlags|=a,l.childLanes=u,t}function Ng(l,t,u){var a=t.pendingProps;switch(l0(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return K(t),null;case 1:return K(t),null;case 3:return u=t.stateNode,a=null,l!==null&&(a=l.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Mt(ul),ba(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(l===null||l.child===null)&&(Fu(t)?At(t):l===null||l.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,mc())),K(t),null;case 26:var n=t.type,e=t.memoizedState;return l===null?(At(t),e!==null?(K(t),zv(t,e)):(K(t),sc(t,n,null,a,u))):e?e!==l.memoizedState?(At(t),K(t),zv(t,e)):(K(t),t.flags&=-16777217):(l=l.memoizedProps,l!==a&&At(t),K(t),sc(t,n,l,a,u)),null;case 27:if(Qe(t),u=tu.current,n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&At(t);else{if(!a){if(t.stateNode===null)throw Error(T(166));return K(t),t.subtreeFlags&=-33554433,null}l=St.current,Fu(t)?w1(t,l):(l=Km(n,a,u),t.stateNode=l,At(t))}return K(t),t.subtreeFlags&=-33554433,null;case 5:if(Qe(t),n=t.type,l!==null&&t.stateNode!=null)l.memoizedProps!==a&&At(t);else{if(!a){if(t.stateNode===null)throw Error(T(166));return K(t),t.subtreeFlags&=-33554433,null}if(e=St.current,Fu(t))w1(t,e);else{var f=Dn(tu.current);switch(e){case 1:e=f.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=f.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=f.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=f.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":e=f.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof a.is=="string"?f.createElement("select",{is:a.is}):f.createElement("select"),a.multiple?e.multiple=!0:a.size&&(e.size=a.size);break;default:e=typeof a.is=="string"?f.createElement(n,{is:a.is}):f.createElement(n)}}e[ml]=t,e[Rl]=a;l:for(f=t.child;f!==null;){if(f.tag===5||f.tag===6)e.appendChild(f.stateNode);else if(f.tag!==4&&f.tag!==27&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break l;for(;f.sibling===null;){if(f.return===null||f.return===t)break l;f=f.return}f.sibling.return=f.return,f=f.sibling}t.stateNode=e;l:switch(Sl(e,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break l;case"img":a=!0;break l;default:a=!1}a&&At(t)}}return K(t),t.subtreeFlags&=-33554433,sc(t,t.type,l===null?null:l.memoizedProps,t.pendingProps,u),null;case 6:if(l&&t.stateNode!=null)l.memoizedProps!==a&&At(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(T(166));if(l=tu.current,Fu(t)){if(l=t.stateNode,u=t.memoizedProps,a=null,n=ol,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}l[ml]=t,l=!!(l.nodeValue===u||a!==null&&a.suppressHydrationWarning===!0||Ym(l.nodeValue,u)),l||mu(t,!0)}else l=Dn(l).createTextNode(a),l[ml]=t,t.stateNode=l}return K(t),null;case 31:if(u=t.memoizedState,l===null||l.memoizedState!==null){if(a=Fu(t),u!==null){if(l===null){if(!a)throw Error(T(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(T(557));l[ml]=t}else Cu(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;K(t),l=!1}else u=mc(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=u),l=!0;if(!l)return t.flags&256?(Bl(t),t):(Bl(t),null);if((t.flags&128)!==0)throw Error(T(558))}return K(t),null;case 13:if(a=t.memoizedState,l===null||l.memoizedState!==null&&l.memoizedState.dehydrated!==null){if(n=Fu(t),a!==null&&a.dehydrated!==null){if(l===null){if(!n)throw Error(T(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(T(317));n[ml]=t}else Cu(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;K(t),n=!1}else n=mc(),l!==null&&l.memoizedState!==null&&(l.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Bl(t),t):(Bl(t),null)}return Bl(t),(t.flags&128)!==0?(t.lanes=u,t):(u=a!==null,l=l!==null&&l.memoizedState!==null,u&&(a=t.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(a.flags|=2048)),u!==l&&u&&(t.child.flags|=8192),ve(t,t.updateQueue),K(t),null);case 4:return ba(),l===null&&C0(t.stateNode.containerInfo),t.flags|=67108864,K(t),null;case 10:return Mt(t.type),K(t),null;case 19:if(f0(t),a=t.memoizedState,a===null)return K(t),null;if(n=(t.flags&128)!==0,e=a.rendering,e===null)if(n)wa(a,!1);else{if(k!==0||l!==null&&(l.flags&128)!==0)for(l=t.child;l!==null;){if(e=Fe(l),e!==null){for(t.flags|=128,wa(a,!1),l=e.updateQueue,t.updateQueue=l,ve(t,l),t.subtreeFlags=0,l=u,u=t.child;u!==null;)Fo(u,l),u=u.sibling;return _n(t,gl.current&1|2),M&&Nt(t,a.treeForkCount),t.child}l=l.sibling}a.tail!==null&&Ql()>nf&&(t.flags|=128,n=!0,wa(a,!1),t.lanes=4194304)}else{if(!n)if(l=Fe(e),l!==null){if(t.flags|=128,n=!0,l=l.updateQueue,t.updateQueue=l,ve(t,l),wa(a,!0),a.tail===null&&a.tailMode!=="collapsed"&&a.tailMode!=="visible"&&!e.alternate&&!M)return K(t),null}else 2*Ql()-a.renderingStartTime>nf&&u!==536870912&&(t.flags|=128,n=!0,wa(a,!1),t.lanes=4194304);a.isBackwards?(e.sibling=t.child,t.child=e):(l=a.last,l!==null?l.sibling=e:t.child=e,a.last=e)}if(a.tail!==null){l=a.tail;l:{for(u=l;u!==null;){if(u.alternate!==null){u=!1;break l}u=u.sibling}u=!0}return a.rendering=l,a.tail=l.sibling,a.renderingStartTime=Ql(),l.sibling=null,e=gl.current,e=n?e&1|2:e&1,a.tailMode==="visible"||a.tailMode==="collapsed"||!u||M?_n(t,e):(u=e,w(sl,t),w(gl,u),zl===null&&(zl=t)),M&&Nt(t,a.treeForkCount),l}return K(t),null;case 22:case 23:return Bl(t),e0(),a=t.memoizedState!==null,l!==null?l.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(u&536870912)!==0&&(t.flags&128)===0&&(K(t),t.subtreeFlags&6&&(t.flags|=8192)):K(t),u=t.updateQueue,u!==null&&ve(t,u.retryQueue),u=null,l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==u&&(t.flags|=2048),l!==null&&hl(Du),null;case 24:return u=null,l!==null&&(u=l.memoizedState.cache),t.memoizedState.cache!==u&&(t.flags|=2048),Mt(ul),K(t),null;case 25:return null;case 30:return t.flags|=33554432,K(t),null}throw Error(T(156,t.tag))}function rg(l,t){switch(l0(t),t.tag){case 1:return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 3:return Mt(ul),ba(),l=t.flags,(l&65536)!==0&&(l&128)===0?(t.flags=l&-65537|128,t):null;case 26:case 27:case 5:return Qe(t),null;case 31:if(t.memoizedState!==null){if(Bl(t),t.alternate===null)throw Error(T(340));Cu()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 13:if(Bl(t),l=t.memoizedState,l!==null&&l.dehydrated!==null){if(t.alternate===null)throw Error(T(340));Cu()}return l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 19:return f0(t),l=t.flags,l&65536?(t.flags=l&-65537|128,l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null),t.flags|=4,t):null;case 4:return ba(),null;case 10:return Mt(t.type),null;case 22:case 23:return Bl(t),e0(),l!==null&&hl(Du),l=t.flags,l&65536?(t.flags=l&-65537|128,t):null;case 24:return Mt(ul),null;case 25:return null;default:return null}}function wy(l,t){switch(l0(t),t.tag){case 3:Mt(ul),ba();break;case 26:case 27:case 5:Qe(t);break;case 4:ba();break;case 31:t.memoizedState!==null&&Bl(t);break;case 13:Bl(t);break;case 19:f0(t);break;case 10:Mt(t.type);break;case 22:case 23:Bl(t),e0(),l!==null&&hl(Du);break;case 24:Mt(ul)}}function Vn(l,t){try{var u=t.updateQueue,a=u!==null?u.lastEffect:null;if(a!==null){var n=a.next;u=n;do{if((u.tag&l)===l){a=void 0;var e=u.create,f=u.inst;a=e(),f.destroy=a}u=u.next}while(u!==n)}}catch(c){V(t,t.return,c)}}function hu(l,t,u){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var e=n.next;a=e;do{if((a.tag&l)===l){var f=a.inst,c=f.destroy;if(c!==void 0){f.destroy=void 0,n=t;var i=u,o=c;try{o()}catch(g){V(n,i,g)}}}a=a.next}while(a!==e)}}catch(g){V(t,t.return,g)}}function Fy(l){var t=l.updateQueue;if(t!==null){var u=l.stateNode;try{ny(t,u)}catch(a){V(l,l.return,a)}}}function Wy(l,t,u){u.props=Gu(l.type,l.memoizedProps),u.state=l.memoizedState;try{u.componentWillUnmount()}catch(a){V(l,t,a)}}function ot(l,t){try{var u=l.ref;if(u!==null){switch(l.tag){case 26:case 27:case 5:var a=l.stateNode;break;case 30:var n=l.stateNode,e=Ct(l.memoizedProps,n);(n.ref===null||n.ref.name!==e)&&(n.ref=jm(e)),a=n.ref;break;case 7:if(l.stateNode===null){var f=new Ll(l);Hl(l.child,!1,hS,f,void 0,void 0),l.stateNode=f}a=l.stateNode;break;default:a=l.stateNode}typeof u=="function"?l.refCleanup=u(a):u.current=a}}catch(c){V(l,t,c)}}function yl(l,t){var u=l.ref,a=l.refCleanup;if(u!==null)if(typeof a=="function")try{a()}catch(n){V(l,t,n)}finally{l.refCleanup=null,l=l.alternate,l!=null&&(l.refCleanup=null)}else if(typeof u=="function")try{u(null)}catch(n){V(l,t,n)}else u.current=null}function Pe(l,t){if((l.tag===5||l.tag===27||l.tag===6)&&l.alternate===null&&t!==null)for(var u=0;u<t.length;u++)Lm(l.stateNode,t[u])}function bv(l){for(var t=l.return;t!==null&&(_0(t)&&Lm(l.stateNode,t.stateNode),!O0(t));)t=t.return}function mn(l){for(var t=l.return;t!==null&&(_0(t)&&gS(l.stateNode,t.stateNode),!O0(t));)t=t.return}function O0(l){return l.tag===5||l.tag===3||l.tag===27}function _0(l){return l&&l.tag===7&&l.stateNode!==null}function mi(l){var t=l.type,u=l.memoizedProps,a=l.stateNode;try{l:switch(t){case"button":case"input":case"select":case"textarea":u.autoFocus&&a.focus();break l;case"img":u.src?a.src=u.src:u.srcSet&&(a.srcset=u.srcSet)}}catch(n){V(l,l.return,n)}}function Tc(l,t,u){try{var a=l.stateNode;$g(a,l.type,u,t),a[Rl]=t}catch(n){V(l,l.return,n)}}function $y(l){return l.tag===5||l.tag===3||l.tag===26||l.tag===27&&su(l.type)||l.tag===4}function Ec(l){l:for(;;){for(;l.sibling===null;){if(l.return===null||$y(l.return))return null;l=l.return}for(l.sibling.return=l.return,l=l.sibling;l.tag!==5&&l.tag!==6&&l.tag!==18;){if(l.tag===27&&su(l.type)||l.flags&2||l.child===null||l.tag===4)continue l;l.child.return=l,l=l.child}if(!(l.flags&2))return l.stateNode}}function di(l,t,u,a){var n=l.tag;if(n===5||n===6)n=l.stateNode,t?(u.nodeType===9?u.body:u.nodeName==="HTML"?u.ownerDocument.body:u).insertBefore(n,t):(t=u.nodeType===9?u.body:u.nodeName==="HTML"?u.ownerDocument.body:u,t.appendChild(n),u=u._reactRootContainer,u!=null||t.onclick!==null||(t.onclick=dt)),Pe(l,a),q=!0;else if(n!==4&&(n===27&&(Pe(l,a),a=null,su(l.type)&&(u=l.stateNode,t=null)),l=l.child,l!==null))for(di(l,t,u,a),l=l.sibling;l!==null;)di(l,t,u,a),l=l.sibling}function lf(l,t,u,a){var n=l.tag;if(n===5||n===6)n=l.stateNode,t?u.insertBefore(n,t):u.appendChild(n),Pe(l,a),q=!0;else if(n!==4&&(n===27&&(Pe(l,a),a=null,su(l.type)&&(u=l.stateNode)),l=l.child,l!==null))for(lf(l,t,u,a),l=l.sibling;l!==null;)lf(l,t,u,a),l=l.sibling}function Iy(l){var t=l.stateNode,u=l.memoizedProps;try{for(var a=l.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Sl(t,a,u),t[ml]=l,t[Rl]=u}catch(e){V(l,l.return,e)}}var tf=!1,Gl=null;function Ov(l){(l.tag===30||(l.subtreeFlags&33554432)!==0)&&(tf=!0)}var yt=null;function _v(){var l=yt;return yt=null,l}var Ml=0;function Xa(l,t,u,a,n){return Ml=0,ky(l.child,t,u,a,n)}function ky(l,t,u,a,n){for(var e=!1;l!==null;){if(l.tag===5){var f=l.stateNode;if(a!==null){var c=Yi(f);a.push(c),c.view&&(e=!0)}else e||Yi(f).view&&(e=!0);tf=!0,Gm(f,Ml===0?t:t+"_"+Ml,u),Ml++}else(l.tag!==22||l.memoizedState===null)&&(l.tag===30&&n||ky(l.child,t,u,a,n)&&(e=!0));l=l.sibling}return e}function Tt(l,t){for(;l!==null;)l.tag===5?Xm(l.stateNode,l.memoizedProps):(l.tag!==22||l.memoizedState===null)&&(l.tag===30&&t||Tt(l.child,t)),l=l.sibling}function De(l){if((l.subtreeFlags&18874368)!==0)for(l=l.child;l!==null;){if((l.tag!==22||l.memoizedState===null)&&(De(l),l.tag===30&&(l.flags&18874368)!==0&&l.stateNode.paired)){var t=l.memoizedProps;if(t.name==null||t.name==="auto")throw Error(T(544));var u=t.name;t=Gt(t.default,t.share),t!=="none"&&(Xa(l,u,t,null,!1)||Tt(l.child,!1))}l=l.sibling}}function hi(l,t){if(l.tag===30){var u=l.stateNode,a=l.memoizedProps,n=Ct(a,u),e=Gt(a.default,u.paired?a.share:a.enter);e!=="none"?Xa(l,n,e,null,!1)?(De(l),u.paired||t||ra(l,a.onEnter)):Tt(l.child,!1):De(l)}else if((l.subtreeFlags&33554432)!==0)for(l=l.child;l!==null;)hi(l,t),l=l.sibling;else De(l)}function gi(l){if(Gl!==null&&Gl.size!==0){var t=Gl;if((l.subtreeFlags&18874368)!==0)for(l=l.child;l!==null;){if(l.tag!==22||l.memoizedState===null){if(l.tag===30&&(l.flags&18874368)!==0){var u=l.memoizedProps,a=u.name;if(a!=null&&a!=="auto"){var n=t.get(a);if(n!==void 0){var e=Gt(u.default,u.share);if(e!=="none"&&(Xa(l,a,e,null,!1)?(e=l.stateNode,n.paired=e,e.paired=n,ra(l,u.onShare)):Tt(l.child,!1)),t.delete(a),t.size===0)break}}}gi(l)}l=l.sibling}}}function Si(l){if(l.tag===30){var t=l.memoizedProps,u=Ct(t,l.stateNode),a=Gl!==null?Gl.get(u):void 0,n=Gt(t.default,a!==void 0?t.share:t.exit);n!=="none"&&(Xa(l,u,n,null,!1)?a!==void 0?(n=l.stateNode,a.paired=n,n.paired=a,Gl.delete(u),ra(l,t.onShare)):ra(l,t.onExit):Tt(l.child,!1)),Gl!==null&&gi(l)}else if((l.subtreeFlags&33554432)!==0)for(l=l.child;l!==null;)Si(l),l=l.sibling;else Gl!==null&&gi(l)}function Py(l){for(l=l.child;l!==null;){if(l.tag===30){var t=l.memoizedProps,u=Ct(t,l.stateNode);t=Gt(t.default,t.update),l.flags&=-5,t!=="none"&&Xa(l,u,t,l.memoizedState=[],!1)}else(l.subtreeFlags&33554432)!==0&&Py(l);l=l.sibling}}function si(l){if((l.subtreeFlags&18874368)!==0)for(l=l.child;l!==null;){if(l.tag!==22||l.memoizedState===null){if(l.tag===30&&(l.flags&18874368)!==0){var t=l.stateNode;t.paired!==null&&(t.paired=null,Tt(l.child,!1))}si(l)}l=l.sibling}}function Me(l){if(l.tag===30)l.stateNode.paired=null,Tt(l.child,!1),si(l);else if((l.subtreeFlags&33554432)!==0)for(l=l.child;l!==null;)Me(l),l=l.sibling;else si(l)}function lm(l){for(l=l.child;l!==null;)l.tag===30?Tt(l.child,!1):(l.subtreeFlags&33554432)!==0&&lm(l),l=l.sibling}function A0(l,t,u,a,n,e,f){for(var c=!1;t!==null;){if(t.tag===5){var i=t.stateNode;if(e!==null&&Ml<e.length){var o=e[Ml],g=Yi(i);(o.view||g.view)&&(c=!0);var s;if(s=(l.flags&4)===0)if(g.clip)s=!0;else{s=o.rect;var y=g.rect;s=s.y!==y.y||s.x!==y.x||s.height!==y.height||s.width!==y.width}s&&(l.flags|=4),g.abs?g=!o.abs:(o=o.rect,g=g.rect,g=o.height!==g.height||o.width!==g.width),g&&(l.flags|=32)}else l.flags|=32;(l.flags&4)!==0&&Gm(i,Ml===0?u:u+"_"+Ml,n),c&&(l.flags&4)!==0||(yt===null&&(yt=[]),yt.push(i,Ml===0?a:a+"_"+Ml,t.memoizedProps)),Ml++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&f?l.flags|=t.flags&32:A0(l,t.child,u,a,n,e,f)&&(c=!0));t=t.sibling}return c}function tm(l,t){for(l=l.child;l!==null;){if(l.tag===30){var u=l.memoizedProps,a=l.stateNode,n=Ct(u,a),e=Gt(u.default,u.update);if(t){a=a.clones;var f=a===null?null:a.map(uS)}else f=l.memoizedState,l.memoizedState=null;a=l;var c=l.child;Ml=0,n=A0(a,c,n,n,e,f,!1),(l.flags&4)!==0&&n&&(t||ra(l,u.onUpdate))}else(l.subtreeFlags&33554432)!==0&&tm(l,t);l=l.sibling}}var cl=!1,X=!1,ct=!1,zc=!1,Av=typeof WeakSet=="function"?WeakSet:Set,il=null,it=!1,tn=!1,uf=!1,Ti=!1;function Dg(l,t,u){if(l=l.containerInfo,Ci=Ra,l=Vo(l),$i(l)){if("selectionStart"in l)var a={start:l.selectionStart,end:l.selectionEnd};else l:{a=(a=l.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var e=n.anchorOffset,f=n.focusNode;n=n.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break l}var c=0,i=-1,o=-1,g=0,s=0,y=l,h=null;t:for(;;){for(var E;y!==a||e!==0&&y.nodeType!==3||(i=c+e),y!==f||n!==0&&y.nodeType!==3||(o=c+n),y.nodeType===3&&(c+=y.nodeValue.length),(E=y.firstChild)!==null;)h=y,y=E;for(;;){if(y===l)break t;if(h===a&&++g===e&&(i=c),h===f&&++s===n&&(o=c),(E=y.nextSibling)!==null)break;y=h,h=y.parentNode}y=E}a=i===-1||o===-1?null:{start:i,end:o}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hi={focusedElem:l,selectionRange:a},Ra=!1,u=(u&335544064)===u,il=t,t=u?9270:1024;il!==null;){if(l=il,u&&(a=l.deletions,a!==null))for(e=0;e<a.length;e++)u&&Si(a[e]);if(l.alternate===null&&(l.flags&2)!==0)u&&Ov(l),oe(u);else{if(l.tag===22){if(a=l.alternate,l.memoizedState!==null){a!==null&&a.memoizedState===null&&u&&Si(a),oe(u);continue}else if(a!==null&&a.memoizedState!==null){u&&Ov(l),oe(u);continue}}a=l.child,(l.subtreeFlags&t)!==0&&a!==null?(a.return=l,il=a):(u&&Py(l),oe(u))}}Gl=null}function oe(l){for(;il!==null;){var t=il,u=l,a=t.alternate,n=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((n&1024)!==0&&a!==null){u=void 0,n=a.memoizedProps,a=a.memoizedState;var e=t.stateNode;try{var f=Gu(t.type,n);u=e.getSnapshotBeforeUpdate(f,a),e.__reactInternalSnapshotBeforeUpdate=u}catch(c){V(t,t.return,c)}}break;case 3:if((n&1024)!==0){if(a=t.stateNode.containerInfo,u=a.nodeType,u===9)qi(a);else if(u===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":qi(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:u&&a!==null&&(u=Ct(a.memoizedProps,a.stateNode),n=t.memoizedProps,n=Gt(n.default,n.update),n!=="none"&&Xa(a,u,n,a.memoizedState=[],!0));break;default:if((n&1024)!==0)throw Error(T(163))}if(a=t.sibling,a!==null){a.return=t.return,il=a;break}il=t.return}}function um(l,t,u){var a=u.flags;switch(u.tag){case 0:case 11:case 15:vt(l,u),a&4&&Vn(5,u);break;case 1:if(vt(l,u),a&4)if(l=u.stateNode,t===null)try{l.componentDidMount()}catch(f){V(u,u.return,f)}else{var n=Gu(u.type,t.memoizedProps);t=t.memoizedState;try{l.componentDidUpdate(n,t,l.__reactInternalSnapshotBeforeUpdate)}catch(f){V(u,u.return,f)}}a&64&&Fy(u),a&512&&ot(u,u.return);break;case 3:if(vt(l,u),a&64&&(l=u.updateQueue,l!==null)){if(t=null,u.child!==null)switch(u.child.tag){case 27:case 5:t=u.child.stateNode;break;case 1:t=u.child.stateNode}try{ny(l,t)}catch(f){V(u,u.return,f)}}break;case 27:t===null&&a&4&&Iy(u);case 26:case 5:vt(l,u),t===null&&a&4&&mi(u),a&512&&ot(u,u.return);break;case 12:vt(l,u);break;case 31:vt(l,u),a&4&&fm(l,u);break;case 13:vt(l,u),a&4&&cm(l,u),a&64&&(l=u.memoizedState,l!==null&&(l=l.dehydrated,l!==null&&(u=jg.bind(null,u),TS(l,u))));break;case 22:if(a=u.memoizedState!==null||cl,!a){var e=t!==null&&t.memoizedState!==null||X;t=cl,n=X,cl=a,(X=e)&&!n?(a=2,(u.subtreeFlags&8772)!==0&&(a|=1),tt(l,u,a)):vt(l,u),cl=t,X=n}break;case 30:vt(l,u),a&512&&ot(u,u.return);break;case 7:a&512&&ot(u,u.return);default:vt(l,u)}}function Ei(l,t){for(l=l.child;l!==null;)am(l,t),l=l.sibling}function am(l,t){switch(l.tag){case 5:case 26:try{var u=l.stateNode;if(t){var a=u.style;typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"}else{var n=l.stateNode,e=l.memoizedProps.style,f=e!=null&&e.hasOwnProperty("display")?e.display:null;n.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(i){V(l,l.return,i)}zi(l,t);break;case 6:try{l.stateNode.nodeValue=t?"":l.memoizedProps,q=!0}catch(i){V(l,l.return,i)}break;case 18:try{var c=l.stateNode;t?Vv(c,!0):Vv(l.stateNode,!1)}catch(i){V(l,l.return,i)}break;case 22:case 23:l.memoizedState===null&&Ei(l,t);break;default:Ei(l,t)}}function zi(l,t){if(l.subtreeFlags&67108864)for(l=l.child;l!==null;){l:{var u=l,a=t;switch(u.tag){case 4:am(u,a);break l;case 22:u.memoizedState===null&&zi(u,a);break l;default:zi(u,a)}}l=l.sibling}}function nm(l){var t=l.alternate;t!==null&&(l.alternate=null,nm(t)),l.child=null,l.deletions=null,l.sibling=null,l.tag===5&&(t=l.stateNode,t!==null&&df(t)),l.stateNode=null,l.return=null,l.dependencies=null,l.memoizedProps=null,l.memoizedState=null,l.pendingProps=null,l.stateNode=null,l.updateQueue=null}var W=null,rl=!1;function lt(l,t,u){for(u=u.child;u!==null;)em(l,t,u),u=u.sibling}function em(l,t,u){if(jl&&typeof jl.onCommitFiberUnmount=="function")try{jl.onCommitFiberUnmount(Yn,u)}catch{}switch(u.tag){case 26:X||yl(u,t),lt(l,t,u),u.memoizedState?u.memoizedState.count--:u.stateNode&&!X&&(u=u.stateNode,u.parentNode.removeChild(u));break;case 27:X||yl(u,t),mn(u);var a=W,n=rl;su(u.type)&&(W=u.stateNode,rl=!1),lt(l,t,u),Jm(u.stateNode,u.type,u.memoizedProps),W=a,rl=n;break;case 5:X||yl(u,t),mn(u);case 6:if(u.tag===6&&mn(u),a=W,n=rl,W=null,lt(l,t,u),W=a,rl=n,W!==null)if(rl)try{(W.nodeType===9?W.body:W.nodeName==="HTML"?W.ownerDocument.body:W).removeChild(u.stateNode),q=!0}catch(e){V(u,t,e)}else try{W.removeChild(u.stateNode),q=!0}catch(e){V(u,t,e)}break;case 18:W!==null&&(rl?(l=W,jv(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,u.stateNode),Ya(l)):jv(W,u.stateNode));break;case 4:a=W,n=rl,W=u.stateNode.containerInfo,rl=!0,lt(l,t,u),W=a,rl=n;break;case 0:case 11:case 14:case 15:hu(2,u,t),X||hu(4,u,t),lt(l,t,u);break;case 1:X||(yl(u,t),a=u.stateNode,typeof a.componentWillUnmount=="function"&&Wy(u,t,a)),lt(l,t,u);break;case 21:lt(l,t,u);break;case 22:X=(a=X)||u.memoizedState!==null,lt(l,t,u),X=a;break;case 30:yl(u,t),lt(l,t,u);break;case 7:X||yl(u,t),lt(l,t,u);break;default:lt(l,t,u)}}function fm(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null))){l=l.dehydrated;try{Ya(l)}catch(u){V(t,t.return,u)}}}function cm(l,t){if(t.memoizedState===null&&(l=t.alternate,l!==null&&(l=l.memoizedState,l!==null&&(l=l.dehydrated,l!==null))))try{Ya(l)}catch(u){V(t,t.return,u)}}function Mg(l){switch(l.tag){case 31:case 13:case 19:var t=l.stateNode;return t===null&&(t=l.stateNode=new Av),t;case 22:return l=l.stateNode,t=l._retryCache,t===null&&(t=l._retryCache=new Av),t;default:throw Error(T(435,l.tag))}}function ye(l,t){var u=Mg(l);t.forEach(function(a){if(!u.has(a)){u.add(a);var n=Vg.bind(null,l,a);a.then(n,n)}})}function Ol(l,t,u){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var e=a[n],f=l,c=t,i=c;l:for(;i!==null;){switch(i.tag){case 27:if(su(i.type)){W=i.stateNode,rl=!1;break l}break;case 5:W=i.stateNode,rl=!1;break l;case 3:case 4:W=i.stateNode.containerInfo,rl=!0;break l}i=i.return}if(W===null)throw Error(T(160));em(f,c,e),W=null,rl=!1,f=e.alternate,f!==null&&(f.return=null),e.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)im(t,l,u),t=t.sibling}var ut=null;function im(l,t,u){var a=l.alternate,n=l.flags;switch(l.tag){case 0:case 11:case 14:case 15:if(n&4&&(a=l.updateQueue,a=a!==null?a.events:null,a!==null))for(var e=0;e<a.length;e++){var f=a[e];f.ref.impl=f.nextImpl}Ol(t,l,u),_l(l),n&4&&(hu(3,l,l.return),Vn(3,l),hu(5,l,l.return));break;case 1:Ol(t,l,u),_l(l),n&512&&(X||a===null||yl(a,a.return)),n&64&&cl&&(l=l.updateQueue,l!==null&&(t=l.callbacks,t!==null&&(u=l.shared.hiddenCallbacks,l.shared.hiddenCallbacks=u===null?t:u.concat(t))));break;case 26:if(e=ut,Ol(t,l,u),_l(l),n&512&&(X||a===null||yl(a,a.return)),n&4)if(n=a!==null?a.memoizedState:null,u=l.memoizedState,a===null)if(u===null)if(l.stateNode===null)if(cl)l.stateNode=Bm(l.type,l.memoizedProps,t.containerInfo,l);else{l:{t=l.type,u=l.memoizedProps,n=e.ownerDocument||e;t:switch(t){case"title":a=n.getElementsByTagName("title")[0],(!a||a[Gn]||a[ml]||a.namespaceURI==="http://www.w3.org/2000/svg"||a.hasAttribute("itemprop"))&&(a=n.createElement(t),n.head.insertBefore(a,n.querySelector("head > title"))),Sl(a,t,u),a[ml]=l,vl(a),t=a;break l;case"link":if(e=Fv("link","href",n).get(t+(u.href||""))){for(f=0;f<e.length;f++)if(a=e[f],a.getAttribute("href")===(u.href==null||u.href===""?null:u.href)&&a.getAttribute("rel")===(u.rel==null?null:u.rel)&&a.getAttribute("title")===(u.title==null?null:u.title)&&a.getAttribute("crossorigin")===(u.crossOrigin==null?null:u.crossOrigin)){e.splice(f,1);break t}}a=n.createElement(t),Sl(a,t,u),n.head.appendChild(a);break;case"meta":if(e=Fv("meta","content",n).get(t+(u.content||""))){for(f=0;f<e.length;f++)if(a=e[f],a.getAttribute("content")===(u.content==null?null:""+u.content)&&a.getAttribute("name")===(u.name==null?null:u.name)&&a.getAttribute("property")===(u.property==null?null:u.property)&&a.getAttribute("http-equiv")===(u.httpEquiv==null?null:u.httpEquiv)&&a.getAttribute("charset")===(u.charSet==null?null:u.charSet)){e.splice(f,1);break t}}a=n.createElement(t),Sl(a,t,u),n.head.appendChild(a);break;default:throw Error(T(468,t))}a[ml]=l,vl(a),t=a}l.stateNode=t}else cl||Xi(e,l.type,l.stateNode);else l.stateNode=wv(e,u,l.memoizedProps);else n!==u?(n===null?(t=a.stateNode,t===null||X||t.parentNode.removeChild(t)):n.count--,u===null?cl||Xi(e,l.type,l.stateNode):wv(e,u,l.memoizedProps)):u===null&&l.stateNode!==null&&Tc(l,l.memoizedProps,a.memoizedProps);break;case 27:Ol(t,l,u),_l(l),n&512&&(X||a===null||yl(a,a.return)),a!==null&&n&4&&Tc(l,l.memoizedProps,a.memoizedProps);break;case 5:if(e=ct,ct=!1,Ol(t,l,u),ct=e,_l(l),n&512&&(X||a===null||yl(a,a.return)),l.flags&32){t=l.stateNode;try{_a(t,""),q=!0}catch(g){V(l,l.return,g)}}n&4&&l.stateNode!=null&&(t=l.memoizedProps,Tc(l,t,a!==null?a.memoizedProps:t)),n&1024&&(zc=!0);break;case 6:if(Ol(t,l,u),_l(l),n&4){if(l.stateNode===null)throw Error(T(162));t=l.memoizedProps,u=l.stateNode;try{u.nodeValue=t,q=!0}catch(g){V(l,l.return,g)}}break;case 3:if(q=!1,Re=null,e=ut,ut=Mn(t.containerInfo),Ol(t,l,u),ut=e,_l(l),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Ya(t.containerInfo)}catch(g){V(l,l.return,g)}zc&&(zc=!1,vm(l)),q=!1;break;case 4:n=ct,ct=cl,a=C1(),e=ut,ut=Mn(l.stateNode.containerInfo),Ol(t,l,u),_l(l),ut=e,q&&tn&&(uf=!0),q=a,ct=n;break;case 12:Ol(t,l,u),_l(l);break;case 31:Ol(t,l,u),_l(l),n&4&&(t=l.updateQueue,t!==null&&(l.updateQueue=null,ye(l,t)));break;case 13:Ol(t,l,u),_l(l),l.child.flags&8192&&l.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(rf=Ql()),n&4&&(t=l.updateQueue,t!==null&&(l.updateQueue=null,ye(l,t)));break;case 22:e=l.memoizedState!==null,f=a!==null&&a.memoizedState!==null;var c=cl,i=X,o=ct;cl=c||e,ct=o||e,X=i||f,Ol(t,l,u),X=i,ct=o,cl=c,_l(l),n&8192&&(t=l.stateNode,t._visibility=e?t._visibility&-2:t._visibility|1,!e||a===null||f||cl||X||(t=f||X,u=cl,a=X,cl=e||cl,X=t,Kt(l,2),cl=u,X=a),!e&&ct||Ei(l,e)),n&4&&(t=l.updateQueue,t!==null&&(u=t.retryQueue,u!==null&&(t.retryQueue=null,ye(l,u))));break;case 19:Ol(t,l,u),_l(l),n&4&&(t=l.updateQueue,t!==null&&(l.updateQueue=null,ye(l,t)));break;case 30:n&512&&(X||a===null||yl(a,a.return)),n=C1(),e=tn,f=(u&335544064)===u,c=l.memoizedProps,tn=f&&Gt(c.default,c.update)!=="none",Ol(t,l,u),_l(l),f&&a!==null&&q&&(l.flags|=4),tn=e,q=n;break;case 21:break;case 7:n&512&&(X||a===null||yl(a,a.return)),a&&a.stateNode!==null&&(a.stateNode._fragmentFiber=l);default:Ol(t,l,u),_l(l)}}function _l(l){var t=l.flags;if(t&2){try{for(var u,a=l.return;a!==null;){if($y(a)){u=a;break}a=a.return}a=null;for(var n=l.return;n!==null;){if(_0(n)){var e=n.stateNode;a===null?a=[e]:a.push(e)}if(O0(n))break;n=n.return}var f=a;if(u==null)throw Error(T(160));switch(u.tag){case 27:var c=u.stateNode,i=Ec(l);lf(l,i,c,f);break;case 5:var o=u.stateNode;u.flags&32&&(_a(o,""),u.flags&=-33);var g=Ec(l);lf(l,g,o,f);break;case 3:case 4:var s=u.stateNode.containerInfo,y=Ec(l);di(l,y,s,f);break;default:throw Error(T(161))}}catch(h){V(l,l.return,h)}l.flags&=-3}t&4096&&(l.flags&=-4097)}function vm(l){if(l.subtreeFlags&1024)for(l=l.child;l!==null;){var t=l;vm(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,Ra=!0,t.reset(),Ra=!1),l=l.sibling}}function Wu(l,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)om(t,l),t=t.sibling;else tm(t,!1)}function om(l,t){var u=l.alternate;if(u===null)hi(l,!1);else switch(l.tag){case 3:if(Ti=it=!1,_v(),Wu(t,l),!it&&!uf){if(l=yt,l!==null)for(var a=0;a<l.length;a+=3){u=l[a];var n=l[a+1];Xm(u,l[a+2]),u=u.ownerDocument.documentElement,u!==null&&u.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+n+")"})}l=t.containerInfo,l=l.nodeType===9?l.documentElement:l.ownerDocument.documentElement,l!==null&&l.style.viewTransitionName===""&&(l.style.viewTransitionName="none",l.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),l.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ti=!0}yt=null;break;case 5:Wu(t,l);break;case 4:a=it,it=!1,Wu(t,l),it&&(uf=!0),it=a;break;case 22:l.memoizedState===null&&(u.memoizedState!==null?hi(l,!1):Wu(t,l));break;case 30:a=it,n=_v(),it=!1,Wu(t,l),it&&(l.flags|=4);var e=l.memoizedProps,f=l.stateNode;t=Ct(e,f),f=Ct(u.memoizedProps,f);var c=Gt(e.default,e.update);c==="none"?t=!1:(e=u.memoizedState,u.memoizedState=null,u=l.child,Ml=0,t=A0(l,u,t,f,c,e,!0),Ml!==(e===null?0:e.length)&&(l.flags|=32)),(l.flags&4)!==0&&t?(ra(l,l.memoizedProps.onUpdate),yt=n):n!==null&&(n.push.apply(n,yt),yt=n),it=(l.flags&32)!==0?!0:a;break;default:Wu(t,l)}}function vt(l,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)um(l,t.alternate,t),t=t.sibling}function Kt(l,t){for(l=l.child;l!==null;){var u=l,a=t;switch(u.tag){case 0:case 11:case 14:case 15:hu(4,u,u.return),Kt(u,a);break;case 1:yl(u,u.return);var n=u.stateNode;typeof n.componentWillUnmount=="function"&&Wy(u,u.return,n),Kt(u,a);break;case 27:(a&2)!==0&&Jm(u.stateNode,u.type,u.memoizedProps);case 5:yl(u,u.return),u.tag!==5&&u.tag!==27||mn(u),Kt(u,a);break;case 6:mn(u);break;case 26:yl(u,u.return),n=u.stateNode,u.memoizedState!==null||n===null||X||n.parentNode.removeChild(n),Kt(u,a);break;case 22:u.memoizedState===null&&Kt(u,a);break;case 30:yl(u,u.return),Kt(u,a);break;case 7:yl(u,u.return);default:Kt(u,a)}l=l.sibling}}function tt(l,t,u){for(u=(t.subtreeFlags&8772)!==0?u:u&-2,t=t.child;t!==null;){var a=t.alternate,n=l,e=t,f=e.flags,c=(u&1)!==0;switch(e.tag){case 0:case 11:case 15:tt(n,e,u),Vn(4,e);break;case 1:if(tt(n,e,u),a=e,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(g){V(a,a.return,g)}if(a=e,n=a.updateQueue,n!==null){var i=a.stateNode;try{var o=n.shared.hiddenCallbacks;if(o!==null)for(n.shared.hiddenCallbacks=null,n=0;n<o.length;n++)ay(o[n],i)}catch(g){V(a,a.return,g)}}c&&f&64&&Fy(e),ot(e,e.return);break;case 27:(u&2)!==0&&Iy(e);case 5:e.tag!==5&&e.tag!==27||bv(e),tt(n,e,u),c&&a===null&&f&4&&mi(e),ot(e,e.return);break;case 6:bv(e);break;case 26:i=e.stateNode,e.memoizedState!==null||i===null||cl||Xi(Mn(i.ownerDocument),e.type,i),tt(n,e,u),c&&a===null&&f&4&&mi(e),ot(e,e.return);break;case 12:tt(n,e,u);break;case 31:tt(n,e,u),c&&f&4&&fm(n,e);break;case 13:tt(n,e,u),c&&f&4&&cm(n,e);break;case 22:e.memoizedState===null&&tt(n,e,u),ot(e,e.return);break;case 30:tt(n,e,u),ot(e,e.return);break;case 7:ot(e,e.return);default:tt(n,e,u)}t=t.sibling}}function N0(l,t){var u=null;l!==null&&l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==u&&(l!=null&&l.refCount++,u!=null&&Qn(u))}function r0(l,t){l=null,t.alternate!==null&&(l=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==l&&(t.refCount++,l!=null&&Qn(l))}function Kl(l,t,u,a){var n=(u&335544064)===u;if(t.subtreeFlags&(n?10262:10256))for(t=t.child;t!==null;)ym(l,t,u,a),t=t.sibling;else n&&lm(t)}function ym(l,t,u,a){var n=(u&335544064)===u;n&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&Me(t);var e=t.flags;switch(t.tag){case 0:case 11:case 15:Kl(l,t,u,a),e&2048&&Vn(9,t);break;case 1:Kl(l,t,u,a);break;case 3:Kl(l,t,u,a),n&&Ti&&(l=l.containerInfo,l=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,l.style.viewTransitionName==="root"&&(l.style.viewTransitionName=""),l=l.ownerDocument.documentElement,l!==null&&l.style.viewTransitionName==="none"&&(l.style.viewTransitionName="")),e&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Qn(e)));break;case 12:if(e&2048){Kl(l,t,u,a),e=t.stateNode;try{var f=t.memoizedProps,c=f.id,i=f.onPostCommit;typeof i=="function"&&i(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(o){V(t,t.return,o)}}else Kl(l,t,u,a);break;case 31:Kl(l,t,u,a);break;case 13:Kl(l,t,u,a);break;case 23:break;case 22:f=t.stateNode,c=t.alternate,t.memoizedState!==null?(n&&c!==null&&c.memoizedState===null&&Me(c),f._visibility&2?Kl(l,t,u,a):dn(l,t)):(n&&c!==null&&c.memoizedState!==null&&Me(t),f._visibility&2?Kl(l,t,u,a):(f._visibility|=2,Iu(l,t,u,a,(t.subtreeFlags&10256)!==0||!1))),e&2048&&N0(c,t);break;case 24:Kl(l,t,u,a),e&2048&&r0(t.alternate,t);break;case 30:n&&(e=t.alternate,e!==null&&(Tt(e.child,!0),Tt(t.child,!0))),Kl(l,t,u,a);break;default:Kl(l,t,u,a)}}function Iu(l,t,u,a,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var e=l,f=t,c=u,i=a,o=f.flags;switch(f.tag){case 0:case 11:case 15:Iu(e,f,c,i,n),Vn(8,f);break;case 23:break;case 22:var g=f.stateNode;f.memoizedState!==null?g._visibility&2?Iu(e,f,c,i,n):dn(e,f):(g._visibility|=2,Iu(e,f,c,i,n)),n&&o&2048&&N0(f.alternate,f);break;case 24:Iu(e,f,c,i,n),n&&o&2048&&r0(f.alternate,f);break;default:Iu(e,f,c,i,n)}t=t.sibling}}function dn(l,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var u=l,a=t,n=a.flags;switch(a.tag){case 22:dn(u,a),n&2048&&N0(a.alternate,a);break;case 24:dn(u,a),n&2048&&r0(a.alternate,a);break;default:dn(u,a)}t=t.sibling}}var Ou=8192;function Eu(l,t,u){if(l.subtreeFlags&Ou)for(l=l.child;l!==null;)mm(l,t,u),l=l.sibling}function mm(l,t,u){switch(l.tag){case 26:Eu(l,t,u),l.flags&Ou&&(l.memoizedState!==null?RS(u,ut,l.memoizedState,l.memoizedProps):(l=l.stateNode,(t&335544128)===t&&$v(u,l)));break;case 5:Eu(l,t,u),l.flags&Ou&&(l=l.stateNode,(t&335544128)===t&&$v(u,l));break;case 3:case 4:var a=ut;ut=Mn(l.stateNode.containerInfo),Eu(l,t,u),ut=a;break;case 22:l.memoizedState===null&&(a=l.alternate,a!==null&&a.memoizedState!==null?(a=Ou,Ou=16777216,Eu(l,t,u),Ou=a):Eu(l,t,u));break;case 30:if((l.flags&Ou)!==0&&(a=l.memoizedProps.name,a!=null&&a!=="auto")){var n=l.stateNode;n.paired=null,Gl===null&&(Gl=new Map),Gl.set(a,n)}Eu(l,t,u);break;default:Eu(l,t,u)}}function dm(l){var t=l.alternate;if(t!==null&&(l=t.child,l!==null)){t.child=null;do t=l.sibling,l.sibling=null,l=t;while(l!==null)}}function Fa(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var u=0;u<t.length;u++){var a=t[u];il=a,gm(a,l)}dm(l)}if(l.subtreeFlags&10256)for(l=l.child;l!==null;)hm(l),l=l.sibling}function hm(l){switch(l.tag){case 0:case 11:case 15:Fa(l),l.flags&2048&&hu(9,l,l.return);break;case 3:Fa(l);break;case 12:Fa(l);break;case 22:var t=l.stateNode;l.memoizedState!==null&&t._visibility&2&&(l.return===null||l.return.tag!==13)?(t._visibility&=-3,Ue(l)):Fa(l);break;default:Fa(l)}}function Ue(l){var t=l.deletions;if((l.flags&16)!==0){if(t!==null)for(var u=0;u<t.length;u++){var a=t[u];il=a,gm(a,l)}dm(l)}for(l=l.child;l!==null;){switch(t=l,t.tag){case 0:case 11:case 15:hu(8,t,t.return),Ue(t);break;case 22:u=t.stateNode,u._visibility&2&&(u._visibility&=-3,Ue(t));break;default:Ue(t)}l=l.sibling}}function gm(l,t){for(;il!==null;){var u=il;switch(u.tag){case 0:case 11:case 15:hu(8,u,t);break;case 23:case 22:if(u.memoizedState!==null&&u.memoizedState.cachePool!==null){var a=u.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Qn(u.memoizedState.cache)}if(a=u.child,a!==null)a.return=u,il=a;else l:for(u=l;il!==null;){a=il;var n=a.sibling,e=a.return;if(nm(a),a===u){il=null;break l}if(n!==null){n.return=e,il=n;break l}il=e}}}var Ug={getCacheForType:function(l){var t=dl(ul),u=t.data.get(l);return u===void 0&&(u=l(),t.data.set(l,u)),u},cacheSignal:function(){return dl(ul).controller.signal}},Cg=typeof WeakMap=="function"?WeakMap:Map,B=0,x=null,C=null,R=0,Q=0,Yl=null,kt=!1,Qa=!1,D0=!1,qt=0,k=0,gu=0,Uu=0,af=0,Xl=0,Na=0,hn=null,Dl=null,bi=!1,rf=0,Sm=0,nf=1/0,ef=null,cu=null,$=0,nt=null,Xu=null,st=0,Oi=0,_i=null,sm=null,Ta=null,Ea=null,za=null,gn=0,Ce=null;function Zl(){return(B&2)!==0&&R!==0?R&-R:A.T!==null?U0():bo()}function Tm(){if(Xl===0)if((R&536870912)===0||M){var l=kn;kn<<=1,(kn&3932160)===0&&(kn=262144),Xl=l}else Xl=536870912;return l=sl.current,l!==null&&(l.flags|=32),Xl}function ra(l,t){if(t!=null){var u=l.stateNode,a=u.ref;a===null&&(a=u.ref=jm(Ct(l.memoizedProps,u))),Ea===null&&(Ea=[]),Ea.push(t.bind(null,a))}}function Cl(l,t,u){(l===x&&(Q===2||Q===9)||l.cancelPendingCommit!==null)&&(Da(l,0),Pt(l,R,Xl,!1)),Bn(l,u),((B&2)===0||l!==x)&&(l===x&&((B&2)===0&&(Uu|=u),k===4&&Pt(l,R,Xl,!1)),zt(l))}function Em(l,t,u){if((B&6)!==0)throw Error(T(327));var a=!u&&(t&127)===0&&(t&l.expiredLanes)===0||qn(l,t),n=a?Yg(l,t):bc(l,t,!0),e=a;do{if(n===0){Qa&&!a&&Pt(l,t,0,!1);break}else{if(u=l.current.alternate,e&&!Hg(u)){n=bc(l,t,!1),e=!1;continue}if(n===2){if(e=t,l.errorRecoveryDisabledLanes&e)var f=0;else f=l.pendingLanes&-536870913,f=f!==0?f:f&536870912?536870912:0;if(f!==0){t=f;l:{var c=l;n=hn;var i=c.current.memoizedState.isDehydrated;if(i&&(Da(c,f).flags|=256),f=bc(c,f,!1),f!==2&&f!==6){if(D0&&!i){c.errorRecoveryDisabledLanes|=e,Uu|=e,n=4;break l}e=Dl,Dl=n,e!==null&&(Dl===null?Dl=e:Dl.push.apply(Dl,e))}n=f}if(e=!1,n!==2)continue}}if(n===1){Da(l,0),Pt(l,t,0,!0);break}l:{switch(a=l,e=n,e){case 0:case 1:throw Error(T(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:Pt(a,t,Xl,!kt);break l;case 2:Dl=null;break;case 3:case 5:break;default:throw Error(T(329))}if((t&62914560)===t&&(n=rf+300-Ql(),10<n)){if(Pt(a,t,Xl,!kt),mf(a,0,!0)!==0)break l;st=t,a.timeoutHandle=H0(Nv.bind(null,a,u,Dl,ef,bi,t,Xl,Uu,Na,kt,e,"Throttled",-0,0),n);break l}Nv(a,u,Dl,ef,bi,t,Xl,Uu,Na,kt,e,null,-0,0)}}break}while(!0);zt(l)}function Nv(l,t,u,a,n,e,f,c,i,o,g,s,y,h){l.timeoutHandle=-1;var E=t.subtreeFlags,b=(e&335544064)===e;if(s=null,(b||E&8192||(E&16785408)===16785408)&&(s={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:dt},Gl=null,mm(t,e,s),b&&(E=s,b=l.containerInfo,b=(b.nodeType===9?b:b.ownerDocument).__reactViewTransition,b!=null&&(E.count++,E.waitingForViewTransition=!0,E=Un.bind(E),b.finished.then(E,E))),E=(e&62914560)===e?rf-Ql():(e&4194048)===e?Sm-Ql():0,E=YS(s,E),E!==null)){st=e,l.cancelPendingCommit=E(Dv.bind(null,l,t,e,u,a,n,f,c,i,o,g,s,null,y,h)),Pt(l,e,f,!o);return}Dv(l,t,e,u,a,n,f,c,i,o,g,s)}function Hg(l){for(var t=l;;){var u=t.tag;if((u===0||u===11||u===15)&&t.flags&16384&&(u=t.updateQueue,u!==null&&(u=u.stores,u!==null)))for(var a=0;a<u.length;a++){var n=u[a],e=n.getSnapshot;n=n.value;try{if(!xl(e(),n))return!1}catch{return!1}}if(u=t.child,t.subtreeFlags&16384&&u!==null)u.return=t,t=u;else{if(t===l)break;for(;t.sibling===null;){if(t.return===null||t.return===l)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(l,t,u,a){t=So(l,t),t&=~af,t&=~Uu,l.suspendedLanes|=t,l.pingedLanes&=~t,a&&(l.warmLanes|=t),a=l.expirationTimes;for(var n=t;0<n;){var e=31-Vl(n),f=1<<e;a[e]=-1,n&=~f}u!==0&&To(l,u,t)}function Df(){return(B&6)===0?(Zn(0,!1),!1):!0}function M0(){if(C!==null){if(Q===0)var l=C.return;else l=C,rt=xu=null,y0(l),ga=null,On=0,l=C;for(;l!==null;)wy(l.alternate,l),l=l.return;C=null}}function Da(l,t){var u=l.timeoutHandle;return u!==-1&&(l.timeoutHandle=-1,Pg(u)),u=l.cancelPendingCommit,u!==null&&(l.cancelPendingCommit=null,u()),st=0,M0(),x=l,C=u=Dt(l.current,null),R=t,Q=0,Yl=null,kt=!1,Qa=qn(l,t),D0=!1,Na=Xl=af=Uu=gu=k=0,Dl=hn=null,bi=!1,qt=So(l,t),sf(),u}function zm(l,t){D=null,A.H=Ie,t===Ga||t===zf?(t=k1(),Q=3):t===a0?(t=k1(),Q=4):Q=t===E0?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Yl=t,C===null&&(k=1,ke(l,$l(t,l.current)))}function bm(){var l=sl.current;return l===null?!0:(R&4194048)===R?zl===null:(R&62914560)===R||(R&536870912)!==0?l===zl:!1}function Om(){var l=A.H;return A.H=Ie,l===null?Ie:l}function _m(){var l=A.A;return A.A=Ug,l}function ff(){k=4,kt||(R&4194048)!==R&&sl.current!==null||(Qa=!0),(gu&134217727)===0&&(Uu&134217727)===0||x===null||Pt(x,R,Xl,!1)}function bc(l,t,u){var a=B;B|=2;var n=Om(),e=_m();(x!==l||R!==t)&&(ef=null,Da(l,t)),t=!1;var f=k;l:do try{if(Q!==0&&C!==null){var c=C,i=Yl;switch(Q){case 8:M0(),f=6;break l;case 3:case 2:case 9:case 6:sl.current===null&&(t=!0);var o=Q;if(Q=0,Yl=null,oa(l,c,i,o),u&&Qa){f=0;break l}break;default:o=Q,Q=0,Yl=null,oa(l,c,i,o)}}Rg(),f=k;break}catch(g){zm(l,g)}while(!0);return t&&l.shellSuspendCounter++,rt=xu=null,B=a,A.H=n,A.A=e,C===null&&(x=null,R=0,sf()),f}function Rg(){for(;C!==null;)Am(C)}function Yg(l,t){var u=B;B|=2;var a=Om(),n=_m();x!==l||R!==t?(ef=null,nf=Ql()+500,Da(l,t)):Qa=qn(l,t);l:do try{if(Q!==0&&C!==null){t=C;var e=Yl;t:switch(Q){case 1:Q=0,Yl=null,oa(l,t,e,1);break;case 2:case 9:if(I1(e)){Q=0,Yl=null,rv(t);break}t=function(){Q!==2&&Q!==9||x!==l||(Q=7),zt(l)},e.then(t,t);break l;case 3:Q=7;break l;case 4:Q=5;break l;case 7:I1(e)?(Q=0,Yl=null,rv(t)):(Q=0,Yl=null,oa(l,t,e,7));break;case 5:var f=null;switch(C.tag){case 26:f=C.memoizedState;case 5:case 27:var c=C;if(f?Wm(f):c.stateNode.complete){Q=0,Yl=null;var i=c.sibling;if(i!==null)C=i;else{var o=c.return;o!==null?(C=o,Mf(o)):C=null}break t}}Q=0,Yl=null,oa(l,t,e,5);break;case 6:Q=0,Yl=null,oa(l,t,e,6);break;case 8:M0(),k=6;break l;default:throw Error(T(462))}}qg();break}catch(g){zm(l,g)}while(!0);return rt=xu=null,A.H=a,A.A=n,B=u,C!==null?0:(x=null,R=0,sf(),k)}function qg(){for(;C!==null&&!Id();)Am(C)}function Am(l){var t=Jy(l.alternate,l,qt);l.memoizedProps=l.pendingProps,t===null?Mf(l):C=t}function rv(l){var t=l,u=t.alternate;switch(t.tag){case 15:case 0:t=hv(u,t,t.pendingProps,t.type,void 0,R);break;case 11:t=hv(u,t,t.pendingProps,t.type.render,t.ref,R);break;case 5:y0(t);var a=t;a===ol&&(M?(pe(a),a.tag===5&&a.stateNode!=null&&(J=a.stateNode)):(pe(a),M=!0));default:wy(u,t),t=C=Fo(t,qt),t=Jy(u,t,qt)}l.memoizedProps=l.pendingProps,t===null?Mf(l):C=t}function oa(l,t,u,a){rt=xu=null,y0(t),ga=null,On=0;var n=t.return;try{if(bg(l,n,t,u,R)){k=1,ke(l,$l(u,l.current)),C=null;return}}catch(e){if(n!==null)throw C=n,e;k=1,ke(l,$l(u,l.current)),C=null;return}t.flags&32768?(M||a===1?l=!0:Qa||(R&536870912)!==0?l=!1:(kt=l=!0,(a===2||a===9||a===3||a===6)&&(a=sl.current,a!==null&&a.tag===13&&(a.flags|=16384))),Nm(t,l)):Mf(t)}function Mf(l){var t=l;do{if((t.flags&32768)!==0){Nm(t,kt);return}l=t.return;var u=Ng(t.alternate,t,qt);if(u!==null){C=u;return}if(t=t.sibling,t!==null){C=t;return}C=t=l}while(t!==null);k===0&&(k=5)}function Nm(l,t){do{var u=rg(l.alternate,l);if(u!==null){u.flags&=32767,C=u;return}if(u=l.return,u!==null&&(u.flags|=32768,u.subtreeFlags=0,u.deletions=null),!t&&(l=l.sibling,l!==null)){C=l;return}C=l=u}while(l!==null);k=6,C=null}function Dv(l,t,u,a,n,e,f,c,i,o,g,s){l.cancelPendingCommit=null;do Uf();while($!==0);if((B&6)!==0)throw Error(T(327));if(t!==null){if(t===l.current)throw Error(T(177));l===x&&(C=x=null,R=0),Xu=t,nt=l,st=u,_i=n,sm=a,Bg(l,t,u,f,c,i,s)}}function Bg(l,t,u,a,n,e,f){var c=t.lanes|t.childLanes;if(Oi=c,c|=Ii,ch(l,u,c,a,n,e),Ea=null,(u&335544064)===u?(za=vg(l),a=10262):(za=null,a=10256),(t.subtreeFlags&a)!==0||(t.flags&a)!==0?(l.callbackNode=null,l.callbackPriority=0,Zg(je,function(){return Di(),null})):(l.callbackNode=null,l.callbackPriority=0),tf=!1,a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null,n=G.p,G.p=2,e=B,B|=4;try{Dg(l,t,u)}finally{B=e,G.p=n,A.T=a}}$=1,tf?Ta=eS(f,l.containerInfo,za,Ai,Ni,Xg,ri,Di,Gg,null,null):(Ai(),Ni(),ri())}function Gg(l){if($!==0){var t=nt.onRecoverableError;t(l,{componentStack:null})}}function Xg(){$===3&&($=0,om(Xu,nt),$=4)}function Ai(){if($===1){$=0;var l=nt,t=Xu,u=st,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var n=G.p;G.p=2;var e=B;B|=4;try{tn=uf=!1,im(t,l,u),u=Hi;var f=Vo(l.containerInfo),c=u.focusedElem,i=u.selectionRange;if(f!==c&&c&&c.ownerDocument&&jo(c.ownerDocument.documentElement,c)){if(i!==null&&$i(c)){var o=i.start,g=i.end;if(g===void 0&&(g=o),"selectionStart"in c)c.selectionStart=o,c.selectionEnd=Math.min(g,c.value.length);else{var s=c.ownerDocument||document,y=s&&s.defaultView||window;if(y.getSelection){var h=y.getSelection(),E=c.textContent.length,b=Math.min(i.start,E),r=i.end===void 0?b:Math.min(i.end,E);!h.extend&&b>r&&(f=r,r=b,b=f);var m=L1(c,b),v=L1(c,r);if(m&&v&&(h.rangeCount!==1||h.anchorNode!==m.node||h.anchorOffset!==m.offset||h.focusNode!==v.node||h.focusOffset!==v.offset)){var d=s.createRange();d.setStart(m.node,m.offset),h.removeAllRanges(),b>r?(h.addRange(d),h.extend(v.node,v.offset)):(d.setEnd(v.node,v.offset),h.addRange(d))}}}}for(s=[],h=c;h=h.parentNode;)h.nodeType===1&&s.push({element:h,left:h.scrollLeft,top:h.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<s.length;c++){var S=s[c];S.element.scrollLeft=S.left,S.element.scrollTop=S.top}}Ra=!!Ci,Hi=Ci=null}finally{B=e,G.p=n,A.T=a}}l.current=t,$=2}}function Ni(){if($===2){$=0;var l=nt,t=Xu,u=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||u){u=A.T,A.T=null;var a=G.p;G.p=2;var n=B;B|=4;try{um(l,t.alternate,t)}finally{B=n,G.p=a,A.T=u}}$=3}}function ri(){if($===4||$===3){$=0;var l=Ta;Ta=null,kd();var t=nt,u=Xu,a=st,n=sm,e=(a&335544064)===a?10262:10256;if((u.subtreeFlags&e)!==0||(u.flags&e)!==0?$=5:($=0,Xu=nt=null,rm(t,t.pendingLanes)),e=t.pendingLanes,e===0&&(cu=null),pi(a),u=u.stateNode,jl&&typeof jl.onCommitFiberRoot=="function")try{jl.onCommitFiberRoot(Yn,u,void 0,(u.current.flags&128)===128)}catch{}if(n!==null){u=A.T,e=G.p,G.p=2,A.T=null;try{for(var f=t.onRecoverableError,c=0;c<n.length;c++){var i=n[c];f(i.value,{componentStack:i.stack})}}finally{A.T=u,G.p=e}}if(n=Ea,f=za,za=null,n!==null&&(Ea=null,f===null&&(f=[]),l!==null))for(i=0;i<n.length;i++)u=(0,n[i])(f),u!==void 0&&l.finished.finally(u);(st&3)!==0&&Uf(),zt(t),e=t.pendingLanes,(a&261930)!==0&&(e&42)!==0?t===Ce?gn++:(gn=0,Ce=t):(gn=0,Ce=null),Zn(0,!1)}}function rm(l,t){(l.pooledCacheLanes&=t)===0&&(t=l.pooledCache,t!=null&&(l.pooledCache=null,Qn(t)))}function Uf(){return Ta!==null&&(Ta.skipTransition(),Ta=null),Ai(),Ni(),ri(),Di()}function Di(){if($!==5)return!1;var l=nt,t=Oi;Oi=0;var u=pi(st),a=A.T,n=G.p;try{G.p=32>u?32:u,A.T=null,u=_i,_i=null;var e=nt,f=st;if($=0,Xu=nt=null,st=0,(B&6)!==0)throw Error(T(331));var c=B;if(B|=4,hm(e.current),ym(e,e.current,f,u),B=c,Zn(0,!1),jl&&typeof jl.onPostCommitFiberRoot=="function")try{jl.onPostCommitFiberRoot(Yn,e)}catch{}return!0}finally{G.p=n,A.T=a,rm(l,t)}}function Mv(l,t,u){t=$l(u,t),t=fi(l.stateNode,t,2),l=nu(l,t,2),l!==null&&(Bn(l,2),zt(l))}function V(l,t,u){if(l.tag===3)Mv(l,l,u);else for(;t!==null;){if(t.tag===3){Mv(t,l,u);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(cu===null||!cu.has(a))){l=$l(u,l),u=Zy(2),a=nu(t,u,2),a!==null&&(xy(u,a,t,l),Bn(a,2),zt(a));break}}t=t.return}}function Oc(l,t,u){var a=l.pingCache;if(a===null){a=l.pingCache=new Cg;var n=new Set;a.set(t,n)}else n=a.get(t),n===void 0&&(n=new Set,a.set(t,n));n.has(u)||(D0=!0,n.add(u),l=Qg.bind(null,l,t,u),t.then(l,l))}function Qg(l,t,u){var a=l.pingCache;a!==null&&a.delete(t),l.pingedLanes|=l.suspendedLanes&u,l.warmLanes&=~u,x===l&&(R&u)===u&&((k===4||k===3&&(R&62914560)===R&&300>Ql()-rf)&&(B&2)===0?Da(l,0):af|=u,Na===R&&(Na=0)),zt(l)}function Dm(l,t){t===0&&(t=so()),l=Zu(l,t),l!==null&&(Bn(l,t),zt(l))}function jg(l){var t=l.memoizedState,u=0;t!==null&&(u=t.retryLane),Dm(l,u)}function Vg(l,t){var u=0;switch(l.tag){case 31:case 13:var a=l.stateNode,n=l.memoizedState;n!==null&&(u=n.retryLane);break;case 19:a=l.stateNode;break;case 22:a=l.stateNode._retryCache;break;default:throw Error(T(314))}a!==null&&a.delete(t),Dm(l,u)}function Zg(l,t){return xi(l,t)}var Ma=null,ku=null,Mi=!1,cf=!1,_c=!1,lu=0;function zt(l){l!==ku&&l.next===null&&(ku===null?Ma=ku=l:ku=ku.next=l),cf=!0,Mi||(Mi=!0,Lg())}function Zn(l,t){if(!_c&&cf){_c=!0;do for(var u=!1,a=Ma;a!==null;){if(!t)if(l!==0){var n=a.pendingLanes;if(n===0)var e=0;else{var f=a.suspendedLanes,c=a.pingedLanes;e=(1<<31-Vl(42|l)+1)-1,e&=n&~(f&~c),e=e&201326741?e&201326741|1:e?e|2:0}e!==0&&(u=!0,Uv(a,e))}else e=R,e=mf(a,a===x?e:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(e&3)===0||qn(a,e)||(u=!0,Uv(a,e));a=a.next}while(u);_c=!1}}function xg(){Mm()}function Mm(){cf=Mi=!1;var l=0;lu!==0&&kg()&&(l=lu);for(var t=Ql(),u=null,a=Ma;a!==null;){var n=a.next,e=Um(a,t);e===0?(a.next=null,u===null?Ma=n:u.next=n,n===null&&(ku=u)):(u=a,(l!==0||(e&3)!==0)&&(cf=!0)),a=n}$!==0&&$!==5||Zn(l,!1),lu!==0&&(lu=0)}function Um(l,t){for(var u=l.suspendedLanes,a=l.pingedLanes,n=l.expirationTimes,e=l.pendingLanes&-62914561;0<e;){var f=31-Vl(e),c=1<<f,i=n[f];i===-1?((c&u)===0||(c&a)!==0)&&(n[f]=fh(c,t)):i<=t&&(l.expiredLanes|=c),e&=~c}if(t=x,u=R,u=mf(l,l===t?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a=l.callbackNode,u===0||l===t&&(Q===2||Q===9)||l.cancelPendingCommit!==null)return a!==null&&a!==null&&tc(a),l.callbackNode=null,l.callbackPriority=0;if((u&3)===0||qn(l,u)){if(t=u&-u,t===l.callbackPriority)return t;switch(a!==null&&tc(a),pi(u)){case 2:case 8:u=ho;break;case 32:u=je;break;case 268435456:u=go;break;default:u=je}return a=Cm.bind(null,l),u=xi(u,a),l.callbackPriority=t,l.callbackNode=u,t}return a!==null&&a!==null&&tc(a),l.callbackPriority=2,l.callbackNode=null,2}function Cm(l,t){if($!==0&&$!==5)return l.callbackNode=null,l.callbackPriority=0,null;var u=l.callbackNode;if(Uf()&&l.callbackNode!==u)return null;var a=R;return a=mf(l,l===x?a:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),a===0?null:(Em(l,a,t),Um(l,Ql()),l.callbackNode!=null&&l.callbackNode===u?Cm.bind(null,l):null)}function Uv(l,t){if(Uf())return null;Em(l,t,!0)}function Lg(){lS(function(){(B&6)!==0?xi(mo,xg):Mm()})}function U0(){if(lu===0){var l=Yu;l===0&&(l=In,In<<=1,(In&261888)===0&&(In=256)),lu=l}return lu}function Cv(l){return l==null||typeof l=="symbol"||typeof l=="boolean"?null:typeof l=="function"?l:Te(l)}function pg(l,t,u,a,n){if(t==="submit"&&u&&u.stateNode===n){var e=Cv((n[Rl]||null).action),f=a.submitter;f&&(t=(t=f[Rl]||null)?Cv(t.formAction):f.getAttribute("formAction"),t!==null&&(e=t,f=null));var c=new hf("action","action",null,a,n);l.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(lu!==0){var i=new FormData(n,f);ni(u,{pending:!0,data:i,method:n.method,action:e},null,i)}}else typeof e=="function"&&(c.preventDefault(),i=new FormData(n,f),ni(u,{pending:!0,data:i,method:n.method,action:e},e,i))},currentTarget:n}]})}}for(me=0;me<wc.length;me++)de=wc[me],Hv=de.toLowerCase(),Rv=de[0].toUpperCase()+de.slice(1),et(Hv,"on"+Rv);var de,Hv,Rv,me;et(xo,"onAnimationEnd");et(Lo,"onAnimationIteration");et(po,"onAnimationStart");et("dblclick","onDoubleClick");et("focusin","onFocus");et("focusout","onBlur");et(tg,"onTransitionRun");et(ug,"onTransitionStart");et(ag,"onTransitionCancel");et(Ko,"onTransitionEnd");Oa("onMouseEnter",["mouseout","mouseover"]);Oa("onMouseLeave",["mouseout","mouseover"]);Oa("onPointerEnter",["pointerout","pointerover"]);Oa("onPointerLeave",["pointerout","pointerover"]);ju("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ju("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ju("onBeforeInput",["compositionend","keypress","textInput","paste"]);ju("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ju("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ju("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Nn));function Hm(l,t){t=(t&4)!==0;for(var u=0;u<l.length;u++){var a=l[u],n=a.event;a=a.listeners;l:{var e=void 0;if(t)for(var f=a.length-1;0<=f;f--){var c=a[f],i=c.instance,o=c.currentTarget;if(c=c.listener,i!==e&&n.isPropagationStopped())break l;e=c,n.currentTarget=o;try{e(n)}catch(g){Ze(g)}n.currentTarget=null,e=i}else for(f=0;f<a.length;f++){if(c=a[f],i=c.instance,o=c.currentTarget,c=c.listener,i!==e&&n.isPropagationStopped())break l;e=c,n.currentTarget=o;try{e(n)}catch(g){Ze(g)}n.currentTarget=null,e=i}}}}function U(l,t){var u=t[r1];u===void 0&&(u=t[r1]=new Set);var a=l+"__bubble";u.has(a)||(Rm(t,l,2,!1),u.add(a))}function Ac(l,t,u){var a=0;t&&(a|=4),Rm(u,l,a,t)}var he="_reactListening"+Math.random().toString(36).slice(2);function C0(l){if(!l[he]){l[he]=!0,_o.forEach(function(u){u!=="selectionchange"&&(Kg.has(u)||Ac(u,!1,l),Ac(u,!0,l))});var t=l.nodeType===9?l:l.ownerDocument;t===null||t[he]||(t[he]=!0,Ac("selectionchange",!1,t))}}function Rm(l,t,u,a){switch(ud(t)){case 2:var n=XS;break;case 8:n=QS;break;default:n=X0}u=n.bind(null,t,u,l),n=void 0,!Lc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),a?n!==void 0?l.addEventListener(t,u,{capture:!0,passive:n}):l.addEventListener(t,u,!0):n!==void 0?l.addEventListener(t,u,{passive:n}):l.addEventListener(t,u,!1)}function Nc(l,t,u,a,n){var e=a;if((t&1)===0&&(t&2)===0&&a!==null)l:for(;;){if(a===null)return;var f=a.tag;if(f===3||f===4){var c=a.stateNode.containerInfo;if(c===n)break;if(f===4)for(f=a.return;f!==null;){var i=f.tag;if((i===3||i===4)&&f.stateNode.containerInfo===n)return;f=f.return}for(;c!==null;){if(f=_u(c),f===null)return;if(i=f.tag,i===5||i===6||i===26||i===27){a=e=f;continue l}c=c.parentNode}}a=a.return}Ho(function(){var o=e,g=Ji(u),s=[];l:{var y=Jo.get(l);if(y!==void 0){var h=hf,E=l;switch(l){case"keypress":if(ze(u)===0)break l;case"keydown":case"keyup":h=Hh;break;case"focusin":E="focus",h=cc;break;case"focusout":E="blur",h=cc;break;case"beforeblur":case"afterblur":h=cc;break;case"click":if(u.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=q1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=Eh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Gh;break;case xo:case Lo:case po:h=Oh;break;case Ko:h=Qh;break;case"scroll":case"scrollend":h=sh;break;case"wheel":h=Vh;break;case"copy":case"cut":case"paste":h=Ah;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=G1;break;case"submit":h=qh;break;case"toggle":case"beforetoggle":h=xh}var b=(t&4)!==0,r=!b&&(l==="scroll"||l==="scrollend"),m=b?y!==null?y+"Capture":null:y;b=[];for(var v=o,d;v!==null;){var S=v;if(d=S.stateNode,S=S.tag,S!==5&&S!==26&&S!==27||d===null||m===null||(S=sn(v,m),S!=null&&b.push(rn(v,S,d))),r)break;v=v.return}0<b.length&&(y=new h(y,E,null,u,g),s.push({event:y,listeners:b}))}}if((t&7)===0){l:{if(h=l==="mouseover"||l==="pointerover",y=l==="mouseout"||l==="pointerout",h&&u!==xc&&(E=u.relatedTarget||u.fromElement)&&(_u(E)||E[qa]))break l;(y||h)&&(E=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,y?(h=u.relatedTarget||u.toElement,y=o,h=h?_u(h):null,h!==null&&(r=Rn(h),b=h.tag,h!==r||b!==5&&b!==27&&b!==6)&&(h=null)):(y=null,h=o),y!==h&&(b=q1,S="onMouseLeave",m="onMouseEnter",v="mouse",(l==="pointerout"||l==="pointerover")&&(b=G1,S="onPointerLeave",m="onPointerEnter",v="pointer"),r=y==null?E:Pa(y),d=h==null?E:Pa(h),E=new b(S,v+"leave",y,u,g),E.target=r,E.relatedTarget=d,S=null,_u(g)===o&&(b=new b(m,v+"enter",h,u,g),b.target=d,b.relatedTarget=r,S=b),r=S,b=y&&h?Cc(y,h,Jg):null,y!==null&&Yv(s,E,y,b,!1),h!==null&&r!==null&&Yv(s,r,h,b,!0)))}l:{if(y=o?Pa(o):window,h=y.nodeName&&y.nodeName.toLowerCase(),h==="select"||h==="input"&&y.type==="file")var z=V1;else if(j1(y))if(Xo)z=kh;else{z=$h;var H=Wh}else h=y.nodeName,!h||h.toLowerCase()!=="input"||y.type!=="checkbox"&&y.type!=="radio"?o&&Ki(o.elementType)&&(z=V1):z=Ih;if(z&&(z=z(l,o))){Go(s,z,u,g);break l}H&&H(l,y,o)}switch(H=o?Pa(o):window,l){case"focusin":(j1(H)||H.contentEditable==="true")&&(na=H,Kc=o,nn=null);break;case"focusout":nn=Kc=na=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,p1(s,u,g);break;case"selectionchange":if(lg)break;case"keydown":case"keyup":p1(s,u,g)}var O;if(Wi)l:{switch(l){case"compositionstart":var _="onCompositionStart";break l;case"compositionend":_="onCompositionEnd";break l;case"compositionupdate":_="onCompositionUpdate";break l}_=void 0}else aa?qo(l,u)&&(_="onCompositionEnd"):l==="keydown"&&u.keyCode===229&&(_="onCompositionStart");_&&(Yo&&u.locale!=="ko"&&(aa||_!=="onCompositionStart"?_==="onCompositionEnd"&&aa&&(O=Ro()):($t=g,wi="value"in $t?$t.value:$t.textContent,aa=!0)),H=vf(o,_),0<H.length&&(_=new B1(_,l,null,u,g),s.push({event:_,listeners:H}),O?_.data=O:(O=Bo(u),O!==null&&(_.data=O)))),(O=ph?Kh(l,u):Jh(l,u))&&(_=vf(o,"onBeforeInput"),0<_.length&&(H=new B1("onBeforeInput","beforeinput",null,u,g),s.push({event:H,listeners:_}),H.data=O)),pg(s,l,o,u,g)}Hm(s,t)})}function rn(l,t,u){return{instance:l,listener:t,currentTarget:u}}function vf(l,t){for(var u=t+"Capture",a=[];l!==null;){var n=l,e=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||e===null||(n=sn(l,u),n!=null&&a.unshift(rn(l,n,e)),n=sn(l,t),n!=null&&a.push(rn(l,n,e))),l.tag===3)return a;l=l.return}return[]}function Jg(l){if(l===null)return null;do l=l.return;while(l&&l.tag!==5&&l.tag!==27);return l||null}function Yv(l,t,u,a,n){for(var e=t._reactName,f=[];u!==null&&u!==a;){var c=u,i=c.alternate,o=c.stateNode;if(c=c.tag,i!==null&&i===a)break;c!==5&&c!==26&&c!==27||o===null||(i=o,n?(o=sn(u,e),o!=null&&f.unshift(rn(u,o,i))):n||(o=sn(u,e),o!=null&&f.push(rn(u,o,i)))),u=u.return}f.length!==0&&l.push({event:t,listeners:f})}var wg=/\r\n?/g,Fg=/\u0000|\uFFFD/g;function qv(l){return(typeof l=="string"?l:""+l).replace(wg,`
`).replace(Fg,"")}function Ym(l,t){return t=qv(t),qv(l)===t}function j(l,t,u,a,n,e){switch(u){case"children":if(typeof a=="string")t==="body"||t==="textarea"&&a===""||_a(l,a);else if(typeof a=="number"||typeof a=="bigint")t!=="body"&&_a(l,""+a);else return;break;case"className":le(l,"class",a);break;case"tabIndex":le(l,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":le(l,u,a);break;case"style":Co(l,a,e);return;case"data":if(t!=="object"){le(l,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||u!=="href")){l.removeAttribute(u);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(u);break}a=Te(a),l.setAttribute(u,a);break;case"action":case"formAction":if(typeof a=="function"){l.setAttribute(u,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof e=="function"&&(u==="formAction"?(t!=="input"&&j(l,t,"name",n.name,n,null),j(l,t,"formEncType",n.formEncType,n,null),j(l,t,"formMethod",n.formMethod,n,null),j(l,t,"formTarget",n.formTarget,n,null)):(j(l,t,"encType",n.encType,n,null),j(l,t,"method",n.method,n,null),j(l,t,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){l.removeAttribute(u);break}a=Te(a),l.setAttribute(u,a);break;case"onClick":a!=null&&(l.onclick=dt);return;case"onScroll":a!=null&&U("scroll",l);return;case"onScrollEnd":a!=null&&U("scrollend",l);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(T(61));if(u=a.__html,u!=null){if(n.children!=null)throw Error(T(60));e?.__html!==u&&(l.innerHTML=u)}}break;case"multiple":l.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":l.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){l.removeAttribute("xlink:href");break}u=Te(a),l.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",u);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(u,a):l.removeAttribute(u);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(u,""):l.removeAttribute(u);break;case"capture":case"download":a===!0?l.setAttribute(u,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?l.setAttribute(u,a):l.removeAttribute(u);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?l.setAttribute(u,a):l.removeAttribute(u);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?l.removeAttribute(u):l.setAttribute(u,a);break;case"popover":U("beforetoggle",l),U("toggle",l),se(l,"popover",a);break;case"xlinkActuate":_t(l,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":_t(l,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":_t(l,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":_t(l,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":_t(l,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":_t(l,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":_t(l,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":_t(l,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":_t(l,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":se(l,"is",a);break;case"innerText":case"textContent":return;default:if(!(2<u.length)||u[0]!=="o"&&u[0]!=="O"||u[1]!=="n"&&u[1]!=="N")u=gh.get(u)||u,se(l,u,a);else return}q=!0}function Ui(l,t,u,a,n,e){switch(u){case"style":Co(l,a,e);return;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(T(61));if(u=a.__html,u!=null){if(n.children!=null)throw Error(T(60));e?.__html!==u&&(l.innerHTML=u)}}break;case"children":if(typeof a=="string")_a(l,a);else if(typeof a=="number"||typeof a=="bigint")_a(l,""+a);else return;break;case"onScroll":a!=null&&U("scroll",l);return;case"onScrollEnd":a!=null&&U("scrollend",l);return;case"onClick":a!=null&&(l.onclick=dt);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Ao.hasOwnProperty(u))l:{if(u[0]==="o"&&u[1]==="n"&&(n=u.endsWith("Capture"),e=u.slice(2,n?u.length-7:void 0),t=l[Rl]||null,t=t!=null?t[u]:null,typeof t=="function"&&l.removeEventListener(e,t,n),typeof a=="function")){typeof t!="function"&&t!==null&&(u in l?l[u]=null:l.hasAttribute(u)&&l.removeAttribute(u)),l.addEventListener(e,a,n);break l}q=!0,u in l?l[u]=a:a===!0?l.setAttribute(u,""):se(l,u,a)}return}q=!0}function Sl(l,t,u){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":U("error",l),U("load",l);var a=!1,n=!1,e;for(e in u)if(u.hasOwnProperty(e)){var f=u[e];if(f!=null)switch(e){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(T(137,t));default:j(l,t,e,f,u,null)}}n&&j(l,t,"srcSet",u.srcSet,u,null),a&&j(l,t,"src",u.src,u,null);return;case"input":U("invalid",l);var c=e=f=n=null,i=null,o=null;for(a in u)if(u.hasOwnProperty(a)){var g=u[a];if(g!=null)switch(a){case"name":n=g;break;case"type":f=g;break;case"checked":i=g;break;case"defaultChecked":o=g;break;case"value":e=g;break;case"defaultValue":c=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(T(137,t));break;default:j(l,t,a,g,u,null)}}Do(l,e,c,i,o,f,n,!1);return;case"select":U("invalid",l),a=f=e=null;for(n in u)if(u.hasOwnProperty(n)&&(c=u[n],c!=null))switch(n){case"value":e=c;break;case"defaultValue":f=c;break;case"multiple":a=c;default:j(l,t,n,c,u,null)}t=e,u=f,l.multiple=!!a,t!=null?ma(l,!!a,t,!1):u!=null&&ma(l,!!a,u,!0);return;case"textarea":U("invalid",l),e=n=a=null;for(f in u)if(u.hasOwnProperty(f)&&(c=u[f],c!=null))switch(f){case"value":a=c;break;case"defaultValue":n=c;break;case"children":e=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(T(91));break;default:j(l,t,f,c,u,null)}Uo(l,a,n,e);return;case"option":for(i in u)u.hasOwnProperty(i)&&(a=u[i],a!=null)&&(i==="selected"?l.selected=a&&typeof a!="function"&&typeof a!="symbol":j(l,t,i,a,u,null));return;case"dialog":U("beforetoggle",l),U("toggle",l),U("cancel",l),U("close",l);break;case"iframe":case"object":U("load",l);break;case"video":case"audio":for(a=0;a<Nn.length;a++)U(Nn[a],l);break;case"image":U("error",l),U("load",l);break;case"details":U("toggle",l);break;case"embed":case"source":case"link":U("error",l),U("load",l);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(o in u)if(u.hasOwnProperty(o)&&(a=u[o],a!=null))switch(o){case"children":case"dangerouslySetInnerHTML":throw Error(T(137,t));default:j(l,t,o,a,u,null)}return;default:if(Ki(t)){for(g in u)u.hasOwnProperty(g)&&(a=u[g],a!==void 0&&Ui(l,t,g,a,u,void 0));return}}for(c in u)u.hasOwnProperty(c)&&(a=u[c],a!=null&&j(l,t,c,a,u,null))}var Wg={};function $g(l,t,u,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,e=null,f=null,c=null,i=null,o=null,g=null;for(h in u){var s=u[h];if(u.hasOwnProperty(h)&&s!=null)switch(h){case"checked":break;case"value":break;case"defaultValue":i=s;default:a.hasOwnProperty(h)||j(l,t,h,null,a,s)}}for(var y in a){var h=a[y];if(s=u[y],a.hasOwnProperty(y)&&(h!=null||s!=null))switch(y){case"type":h!==s&&(q=!0),e=h;break;case"name":h!==s&&(q=!0),n=h;break;case"checked":h!==s&&(q=!0),o=h;break;case"defaultChecked":h!==s&&(q=!0),g=h;break;case"value":h!==s&&(q=!0),f=h;break;case"defaultValue":h!==s&&(q=!0),c=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(T(137,t));break;default:h!==s&&j(l,t,y,h,a,s)}}Zc(l,f,c,i,o,g,e,n);return;case"select":h=f=c=y=null;for(e in u)if(i=u[e],u.hasOwnProperty(e)&&i!=null)switch(e){case"value":break;case"multiple":h=i;default:a.hasOwnProperty(e)||j(l,t,e,null,a,i)}for(n in a)if(e=a[n],i=u[n],a.hasOwnProperty(n)&&(e!=null||i!=null))switch(n){case"value":e!==i&&(q=!0),y=e;break;case"defaultValue":e!==i&&(q=!0),c=e;break;case"multiple":e!==i&&(q=!0),f=e;default:e!==i&&j(l,t,n,e,a,i)}t=c,u=f,a=h,y!=null?ma(l,!!u,y,!1):!!a!=!!u&&(t!=null?ma(l,!!u,t,!0):ma(l,!!u,u?[]:"",!1));return;case"textarea":h=y=null;for(c in u)if(n=u[c],u.hasOwnProperty(c)&&n!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:j(l,t,c,null,a,n)}for(f in a)if(n=a[f],e=u[f],a.hasOwnProperty(f)&&(n!=null||e!=null))switch(f){case"value":n!==e&&(q=!0),y=n;break;case"defaultValue":n!==e&&(q=!0),h=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(T(91));break;default:n!==e&&j(l,t,f,n,a,e)}Mo(l,y,h);return;case"option":for(var E in u)y=u[E],u.hasOwnProperty(E)&&y!=null&&!a.hasOwnProperty(E)&&(E==="selected"?l.selected=!1:j(l,t,E,null,a,y));for(i in a)y=a[i],h=u[i],a.hasOwnProperty(i)&&y!==h&&(y!=null||h!=null)&&(i==="selected"?(y!==h&&(q=!0),l.selected=y&&typeof y!="function"&&typeof y!="symbol"):j(l,t,i,y,a,h));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in u)y=u[b],u.hasOwnProperty(b)&&y!=null&&!a.hasOwnProperty(b)&&j(l,t,b,null,a,y);for(o in a)if(y=a[o],h=u[o],a.hasOwnProperty(o)&&y!==h&&(y!=null||h!=null))switch(o){case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(T(137,t));break;default:j(l,t,o,y,a,h)}return;default:if(Ki(t)){for(var r in u)y=u[r],u.hasOwnProperty(r)&&y!==void 0&&!a.hasOwnProperty(r)&&Ui(l,t,r,void 0,a,y);for(g in a)y=a[g],h=u[g],!a.hasOwnProperty(g)||y===h||y===void 0&&h===void 0||Ui(l,t,g,y,a,h);return}}for(var m in u)y=u[m],u.hasOwnProperty(m)&&y!=null&&!a.hasOwnProperty(m)&&j(l,t,m,null,a,y);for(s in a)y=a[s],h=u[s],!a.hasOwnProperty(s)||y===h||y==null&&h==null||j(l,t,s,y,a,h)}function Bv(l){switch(l){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ig(){if(typeof performance.getEntriesByType=="function"){for(var l=0,t=0,u=performance.getEntriesByType("resource"),a=0;a<u.length;a++){var n=u[a],e=n.transferSize,f=n.initiatorType,c=n.duration;if(e&&c&&Bv(f)){for(f=0,c=n.responseEnd,a+=1;a<u.length;a++){var i=u[a],o=i.startTime;if(o>c)break;var g=i.transferSize,s=i.initiatorType;g&&Bv(s)&&(i=i.responseEnd,f+=g*(i<c?1:(c-o)/(i-o)))}if(--a,t+=8*(e+f)/(n.duration/1e3),l++,10<l)break}}if(0<l)return t/l/1e6}return navigator.connection&&(l=navigator.connection.downlink,typeof l=="number")?l:5}var Ci=null,Hi=null;function Dn(l){return l.nodeType===9?l:l.ownerDocument}function Gv(l){switch(l){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qm(l,t){if(l===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return l===1&&t==="foreignObject"?0:l}function Bm(l,t,u,a){return u=Dn(u).createElement(l),u[ml]=a,u[Rl]=t,Sl(u,l,t),vl(u),u}function Ri(l,t){return l==="textarea"||l==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var rc=null;function kg(){var l=window.event;return l&&l.type==="popstate"?l===rc?!1:(rc=l,!0):(rc=null,!1)}var H0=typeof setTimeout=="function"?setTimeout:void 0,Pg=typeof clearTimeout=="function"?clearTimeout:void 0,Xv=typeof Promise=="function"?Promise:void 0,Qv=typeof requestAnimationFrame=="function"?requestAnimationFrame:H0,lS=typeof queueMicrotask=="function"?queueMicrotask:typeof Xv<"u"?function(l){return Xv.resolve(null).then(l).catch(tS)}:H0;function tS(l){setTimeout(function(){throw l})}function su(l){return l==="head"}function jv(l,t){var u=t,a=0;do{var n=u.nextSibling;if(l.removeChild(u),n&&n.nodeType===8)if(u=n.data,u==="/$"||u==="/&"){if(a===0){l.removeChild(n),Ya(t);return}a--}else if(u==="$"||u==="$?"||u==="$~"||u==="$!"||u==="&")a++;else if(u==="html")Mc(l.ownerDocument.documentElement);else if(u==="head"){u=l.ownerDocument.head,Mc(u);for(var e=u.firstChild;e;){var f=e.nextSibling,c=e.nodeName;e[Gn]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&e.rel.toLowerCase()==="stylesheet"||u.removeChild(e),e=f}}else u==="body"&&Mc(l.ownerDocument.body);u=n}while(u);Ya(t)}function Vv(l,t){var u=l;l=0;do{var a=u.nextSibling;if(u.nodeType===1?t?(u._stashedDisplay=u.style.display,u.style.display="none"):(u.style.display=u._stashedDisplay||"",u.getAttribute("style")===""&&u.removeAttribute("style")):u.nodeType===3&&(t?(u._stashedText=u.nodeValue,u.nodeValue=""):u.nodeValue=u._stashedText||""),a&&a.nodeType===8)if(u=a.data,u==="/$"){if(l===0)break;l--}else u!=="$"&&u!=="$?"&&u!=="$~"&&u!=="$!"||l++;u=a}while(u)}function Gm(l,t,u){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,l.style.viewTransitionName=t,u!=null&&(l.style.viewTransitionClass=u),u=getComputedStyle(l),u.display==="inline"){if(t=l.getClientRects(),t.length===1)var a=1;else for(var n=a=0;n<t.length;n++){var e=t[n];0<e.width&&0<e.height&&a++}a===1&&(l=l.style,l.display=t.length===1?"inline-block":"block",l.marginTop="-"+u.paddingTop,l.marginBottom="-"+u.paddingBottom)}}function Xm(l,t){l=l.style,t=t.style;var u=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;l.viewTransitionName=u==null||typeof u=="boolean"?"":(""+u).trim(),u=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,l.viewTransitionClass=u==null||typeof u=="boolean"?"":(""+u).trim(),l.display==="inline-block"&&(t==null?l.display=l.margin="":(u=t.display,l.display=u==null||typeof u=="boolean"?"":u,u=t.margin,u!=null?l.margin=u:(u=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],l.marginTop=u==null||typeof u=="boolean"?"":u,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],l.marginBottom=t==null||typeof t=="boolean"?"":t)))}function Qm(l,t,u){return u=u.ownerDocument.defaultView,{rect:l,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=l.bottom&&0<=l.right&&l.top<=u.innerHeight&&l.left<=u.innerWidth}}function Yi(l){var t=l.getBoundingClientRect(),u=getComputedStyle(l);return Qm(t,u,l)}function uS(l){var t=l.getBoundingClientRect();t=new DOMRect(t.x+2e4,t.y+2e4,t.width,t.height);var u=getComputedStyle(l);return Qm(t,u,l)}function aS(l){return l.documentElement.clientHeight}function nS(l){this.addEventListener("load",l),this.addEventListener("error",l)}function eS(l,t,u,a,n,e,f,c,i){var o=t.nodeType===9?t:t.ownerDocument;try{var g=o.startViewTransition({update:function(){var y=o.defaultView,h=y.navigation&&y.navigation.transition,E=o.fonts.status;a();var b=[];if(E==="loaded"&&(aS(o),o.fonts.status==="loading"&&b.push(o.fonts.ready)),E=b.length,l!==null)for(var r=l.suspenseyImages,m=0,v=0;v<r.length;v++){var d=r[v];if(!d.complete){var S=d.getBoundingClientRect();if(0<S.bottom&&0<S.right&&S.top<y.innerHeight&&S.left<y.innerWidth){if(m+=$m(d),m>Ye){b.length=E;break}d=new Promise(nS.bind(d)),b.push(d)}}}if(0<b.length)return y=Promise.race([Promise.all(b),new Promise(function(z){return setTimeout(z,500)})]).then(n,n),(h?Promise.allSettled([h.finished,y]):y).then(e,e);if(n(),h)return h.finished.then(e,e);e()},types:u});o.__reactViewTransition=g;var s=[];return g.ready.then(function(){for(var y=o.documentElement.getAnimations({subtree:!0}),h=0;h<y.length;h++){var E=y[h],b=E.effect,r=b.pseudoElement;if(r!=null&&r.startsWith("::view-transition")){s.push(E),E=b.getKeyframes();for(var m=r=void 0,v=!0,d=0;d<E.length;d++){var S=E[d],z=S.width;if(r===void 0)r=z;else if(r!==z){v=!1;break}if(z=S.height,m===void 0)m=z;else if(m!==z){v=!1;break}delete S.width,delete S.height,S.transform==="none"&&delete S.transform}v&&r!==void 0&&m!==void 0&&(b.setKeyframes(E),v=getComputedStyle(b.target,b.pseudoElement),v.width!==r||v.height!==m)&&(v=E[0],v.width=r,v.height=m,v=E[E.length-1],v.width=r,v.height=m,b.setKeyframes(E))}}f()},function(y){o.__reactViewTransition===g&&(o.__reactViewTransition=null);try{typeof y=="object"&&y!==null&&y.name==="InvalidStateError"&&(y.message==="View transition was skipped because document visibility state is hidden."||y.message==="Skipping view transition because document visibility state has become hidden."||y.message==="Skipping view transition because viewport size changed."||y.message==="Transition was aborted because of invalid state")&&(y=null),y!==null&&i(y)}finally{a(),n(),f()}}),g.finished.finally(function(){for(var y=0;y<s.length;y++)s[y].cancel();o.__reactViewTransition===g&&(o.__reactViewTransition=null),c()}),g}catch{return a(),n(),f(),null}}function Au(l,t){this._scope=document.documentElement,this._selector="::view-transition-"+l+"("+t+")"}Au.prototype.animate=function(l,t){return t=typeof t=="number"?{duration:t}:L({},t),t.pseudoElement=this._selector,this._scope.animate(l,t)};Au.prototype.getAnimations=function(){for(var l=this._scope,t=this._selector,u=l.getAnimations({subtree:!0}),a=[],n=0;n<u.length;n++){var e=u[n].effect;e!==null&&e.target===l&&e.pseudoElement===t&&a.push(u[n])}return a};Au.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function jm(l){return{name:l,group:new Au("group",l),imagePair:new Au("image-pair",l),old:new Au("old",l),new:new Au("new",l)}}function Ll(l){this._fragmentFiber=l,this._observers=this._eventListeners=null}Ll.prototype.addEventListener=function(l,t,u){var a=null,n=null;if(!(u!=null&&typeof u!="boolean"&&(a=u.signal||null,a!==null&&a.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var e=this._eventListeners;if(Vm(e,l,t,u)===-1){var f=this,c=t;u!=null&&typeof u!="boolean"&&u.once===!0&&(c=function(i){f.removeEventListener(l,t,u),typeof t=="function"?t.call(this,i):t.handleEvent(i)}),a!==null&&(n=f.removeEventListener.bind(f,l,t,u),a.addEventListener("abort",n,{once:!0}),n=a.removeEventListener.bind(a,"abort",n)),a=Ua(u),e.push({type:l,listener:t,optionsOrUseCapture:u,attachedListener:c,cleanup:n}),Hl(this._fragmentFiber.child,!1,fS,l,c,a)}this._eventListeners=e}};function fS(l,t,u,a){return el(l).addEventListener(t,u,a),!1}Ll.prototype.removeEventListener=function(l,t,u){var a=this._eventListeners;if(a!==null&&(t=Vm(a,l,t,u),t!==-1)){var n=a[t];u=n.attachedListener;var e=n.cleanup;n=Ua(n.optionsOrUseCapture),Hl(this._fragmentFiber.child,!1,cS,l,u,n),a.splice(t,1),e!==null&&e()}};function cS(l,t,u,a){return el(l).removeEventListener(t,u,a),!1}function Ua(l){return l!=null&&typeof l!="boolean"&&(l.once===!0||l.signal instanceof AbortSignal)?{capture:l.capture,passive:l.passive}:l}function Zv(l){return l==null?"c=0":typeof l=="boolean"?"c="+(l?"1":"0"):"c="+(l.capture?"1":"0")}function Vm(l,t,u,a){if(l.length===0)return-1;a=Zv(a);for(var n=0;n<l.length;n++){var e=l[n];if(e.type===t&&e.listener===u&&Zv(e.optionsOrUseCapture)===a)return n}return-1}Ll.prototype.dispatchEvent=function(l){var t=Qu(this._fragmentFiber);if(t===null)return!0;t=el(t);var u=this._eventListeners;if(u!==null&&0<u.length||!l.bubbles){var a=t.nodeType===9?t.createComment(""):document.createTextNode("");if(u)for(var n=0;n<u.length;n++){var e=u[n];a.addEventListener(e.type,e.attachedListener,Ua(e.optionsOrUseCapture))}if(t.appendChild(a),l=a.dispatchEvent(l),u)for(n=0;n<u.length;n++)e=u[n],a.removeEventListener(e.type,e.attachedListener,Ua(e.optionsOrUseCapture));return t.removeChild(a),l}return t.dispatchEvent(l)};Ll.prototype.focus=function(l){Hl(this._fragmentFiber.child,!0,Zm,l,void 0,void 0)};function Zm(l,t){return l.tag===6?!1:(l=el(l),ES(l,t))}Ll.prototype.focusLast=function(l){var t=[];Hl(this._fragmentFiber.child,!0,R0,t,void 0,void 0);for(var u=t.length-1;0<=u&&!Zm(t[u],l);u--);};function R0(l,t){return t.push(l),!1}Ll.prototype.blur=function(){var l=Qu(this._fragmentFiber);l!==null&&(l=el(l),l=Dn(l).activeElement,l!==null&&Hl(this._fragmentFiber.child,!1,iS,l,void 0,void 0))};function iS(l,t){return l.tag===6?!1:(l=el(l),l===t||l.contains(t)?(t.blur(),!0):!1)}Ll.prototype.observeUsing=function(l){this._observers===null&&(this._observers=new Set),this._observers.add(l),Hl(this._fragmentFiber.child,!1,vS,l,void 0,void 0)};function vS(l,t){return l.tag===6||(l=el(l),t.observe(l)),!1}Ll.prototype.unobserveUsing=function(l){var t=this._observers;if(t!==null&&t.has(l)){t.delete(l),Hl(this._fragmentFiber.child,!1,oS,l,void 0,void 0);for(var u=t=0;u<at.length;u++){var a=at[u];a.fragmentInstance===this&&a.observer===l?l.unobserve(a.instance):at[t++]=a}at.length=t}};function oS(l,t){return l.tag===6||(l=el(l),t.unobserve(l)),!1}var at=[],Dc=!1;function yS(l,t,u){at.push({fragmentInstance:l,observer:t,instance:u}),Dc||(Dc=!0,zS(function(){Dc=!1;var a=at;at=[];for(var n=0;n<a.length;n++){var e=a[n];e.observer.unobserve(e.instance)}}))}Ll.prototype.getClientRects=function(){var l=[];return Hl(this._fragmentFiber.child,!1,mS,l,void 0,void 0),l};function mS(l,t){if(l.tag===6){l=l.stateNode;var u=l.ownerDocument.createRange();u.selectNodeContents(l),t.push.apply(t,u.getClientRects())}else l=el(l),t.push.apply(t,l.getClientRects());return!1}Ll.prototype.getRootNode=function(l){var t=Qu(this._fragmentFiber);return t===null?this:el(t).getRootNode(l)};Ll.prototype.compareDocumentPosition=function(l){var t=Qu(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var u=[];Hl(this._fragmentFiber.child,!1,R0,u,void 0,void 0);var a=el(t);if(u.length===0){if(u=a,z1(this._fragmentFiber)){l:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break l}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(u=t)}t=this._fragmentFiber;var n=a=u.compareDocumentPosition(l);return u===l?n=Node.DOCUMENT_POSITION_CONTAINS:a&Node.DOCUMENT_POSITION_CONTAINED_BY&&(u=io(t)[1],u===null?n=Node.DOCUMENT_POSITION_PRECEDING:(l=el(u).compareDocumentPosition(l),n=l===0||l&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),n|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=el(u[0]),n=el(u[u.length-1]);var e=z1(this._fragmentFiber)?t.parentElement:a;if(e==null)return Node.DOCUMENT_POSITION_DISCONNECTED;a=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,e=e.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY;var f=t.compareDocumentPosition(l),c=n.compareDocumentPosition(l),i=f&Node.DOCUMENT_POSITION_CONTAINED_BY||c&Node.DOCUMENT_POSITION_CONTAINED_BY;return c=a&&e&&f&Node.DOCUMENT_POSITION_FOLLOWING&&c&Node.DOCUMENT_POSITION_PRECEDING,t=a&&t===l||e&&n===l||i||c?Node.DOCUMENT_POSITION_CONTAINED_BY:!a&&t===l||!e&&n===l?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:f,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||dS(t,this._fragmentFiber,u[0],u[u.length-1],l)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function dS(l,t,u,a,n){var e=_u(n);if(l&Node.DOCUMENT_POSITION_CONTAINED_BY){if(u=!!e)l:{for(;e!==null;){if(e.tag===7&&(e===t||e.alternate===t)){u=!0;break l}e=e.return}u=!1}return u}if(l&Node.DOCUMENT_POSITION_CONTAINS){if(e===null)return e=n.ownerDocument,n===e||n===e.documentElement||n===e.body;l:{for(e=t,t=Qu(t);e!==null;){if(!(e.tag!==5&&e.tag!==3&&e.tag!==27||e!==t&&e.alternate!==t)){e=!0;break l}e=e.return}e=!1}return e}return l&Node.DOCUMENT_POSITION_PRECEDING?((t=!!e)&&!(t=e===u)&&(t=Cc(u,e,b1),t===null?t=!1:(Hl(t,!0,Ld,e,u),e=Pu,Pu=null,t=e!==null)),t):l&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!e)&&!(t=e===a)&&(t=Cc(a,e,b1),t===null?t=!1:(Hl(t,!0,pd,e,a),e=Pu,Uc=Pu=null,t=e!==null)),t):!1}function xv(l,t){var u=l.ownerDocument.createRange();u.selectNodeContents(l),l=u.getBoundingClientRect(),window.scrollTo(window.scrollX+l.left,t?window.scrollY+l.top:window.scrollY+l.bottom-window.innerHeight)}Ll.prototype.scrollIntoView=function(l){if(typeof l=="object")throw Error(T(566));var t=[];Hl(this._fragmentFiber.child,!1,R0,t,void 0,void 0);var u=l!==!1;if(t.length===0){var a=io(this._fragmentFiber);if(a=u?a[1]||a[0]||Qu(this._fragmentFiber):a[0]||a[1],a===null)return;if(a.tag===6){l=el(a),xv(l,u);return}if(a=el(a),a.nodeType!==9){if(a.nodeType===11){u="host"in a?a.host:null,u!==null&&u.scrollIntoView(l);return}a.scrollIntoView(l)}}for(a=u?t.length-1:0;a!==(u?-1:t.length);){var n=t[a];n.tag===6?(n=el(n),xv(n,u)):el(n).scrollIntoView(l),a+=u?-1:1}};function hS(l,t){return l=el(l),xm(l,t),!1}function xm(l,t){l.reactFragments==null&&(l.reactFragments=new Set),l.reactFragments.add(t)}function Lm(l,t){var u=t._eventListeners;if(u!==null)for(var a=0;a<u.length;a++){var n=u[a];l.addEventListener(n.type,n.attachedListener,Ua(n.optionsOrUseCapture))}l.nodeType!==3&&(u=t._observers,u!==null&&u.forEach(function(e){for(var f=0,c=0;c<at.length;c++){var i=at[c];(i.fragmentInstance!==t||i.observer!==e||i.instance!==l)&&(at[f++]=i)}at.length=f,e.observe(l)}),xm(l,t))}function gS(l,t){var u=t._eventListeners;if(u!==null)for(var a=0;a<u.length;a++){var n=u[a];l.removeEventListener(n.type,n.attachedListener,Ua(n.optionsOrUseCapture))}l.nodeType!==3&&(u=t._observers,u!==null&&u.forEach(function(e){typeof e.rootMargin=="string"?yS(t,e,l):e.unobserve(l)}),l.reactFragments!=null&&l.reactFragments.delete(t))}function qi(l){var t=l.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var u=t;switch(t=t.nextSibling,u.nodeName){case"HTML":case"HEAD":case"BODY":qi(u),df(u);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(u.rel.toLowerCase()==="stylesheet")continue}l.removeChild(u)}}function SS(l,t,u,a){for(;l.nodeType===1;){var n=u;if(l.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(l.nodeName!=="INPUT"||l.type!=="hidden"))break}else if(a){if(!l[Gn])switch(t){case"meta":if(!l.hasAttribute("itemprop"))break;return l;case"link":if(e=l.getAttribute("rel"),e==="stylesheet"&&l.hasAttribute("data-precedence"))break;if(e!==n.rel||l.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||l.getAttribute("title")!==(n.title==null?null:n.title))break;return l;case"style":if(l.hasAttribute("data-precedence"))break;return l;case"script":if(e=l.getAttribute("src"),(e!==(n.src==null?null:n.src)||l.getAttribute("type")!==(n.type==null?null:n.type)||l.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&e&&l.hasAttribute("async")&&!l.hasAttribute("itemprop"))break;return l;default:return l}}else if(t==="input"&&l.type==="hidden"){var e=n.name==null?null:""+n.name;if(n.type==="hidden"&&l.getAttribute("name")===e)return l}else return l;if(l=kl(l.nextSibling),l===null)break}return null}function sS(l,t,u){if(t==="")return null;for(;l.nodeType!==3;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!u||(l=kl(l.nextSibling),l===null))return null;return l}function pm(l,t){for(;l.nodeType!==8;)if((l.nodeType!==1||l.nodeName!=="INPUT"||l.type!=="hidden")&&!t||(l=kl(l.nextSibling),l===null))return null;return l}function Bi(l){return l.data==="$?"||l.data==="$~"}function Y0(l){return l.data==="$!"||l.data==="$?"&&l.ownerDocument.readyState!=="loading"}function TS(l,t){var u=l.ownerDocument;if(l.data==="$~")l._reactRetry=t;else if(l.data!=="$?"||u.readyState!=="loading")t();else{var a=function(){t(),u.removeEventListener("DOMContentLoaded",a)};u.addEventListener("DOMContentLoaded",a),l._reactRetry=a}}function kl(l){for(;l!=null;l=l.nextSibling){var t=l.nodeType;if(t===1||t===3)break;if(t===8){if(t=l.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return l}var Gi=null;function Lv(l){l=l.nextSibling;for(var t=0;l;){if(l.nodeType===8){var u=l.data;if(u==="/$"||u==="/&"){if(t===0)return kl(l.nextSibling);t--}else u!=="$"&&u!=="$!"&&u!=="$?"&&u!=="$~"&&u!=="&"||t++}l=l.nextSibling}return null}function pv(l){l=l.previousSibling;for(var t=0;l;){if(l.nodeType===8){var u=l.data;if(u==="$"||u==="$!"||u==="$?"||u==="$~"||u==="&"){if(t===0)return l;t--}else u!=="/$"&&u!=="/&"||t++}l=l.previousSibling}return null}function ES(l,t){function u(){a=!0}if(l.ownerDocument.activeElement===l)return!0;var a=!1;try{l.ownerDocument.addEventListener("focus",u,!0),(l.focus||HTMLElement.prototype.focus).call(l,t)}finally{l.ownerDocument.removeEventListener("focus",u,!0)}return a}function zS(l){Qv(function(){Qv(function(t){return l(t)})})}function Km(l,t,u){switch(t=Dn(u),l){case"html":if(l=t.documentElement,!l)throw Error(T(452));return l;case"head":if(l=t.head,!l)throw Error(T(453));return l;case"body":if(l=t.body,!l)throw Error(T(454));return l;default:throw Error(T(451))}}function Jm(l,t,u){for(var a in u){var n=u[a];u.hasOwnProperty(a)&&n!=null&&j(l,t,a,null,Wg,n)}u.dangerouslySetInnerHTML!=null&&(l.textContent=""),l.onclick===dt&&(l.onclick=null),df(l)}function Mc(l){for(var t=l.attributes;t.length;)l.removeAttributeNode(t[0]);df(l)}var Pl=new Map,Kv=new Set;function Mn(l){if(typeof l.getRootNode=="function"){var t=l.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return l.nodeType===9?l:l.ownerDocument}var Xt=G.d;G.d={f:bS,r:OS,D:_S,C:AS,L:NS,m:rS,X:MS,S:DS,M:US};function bS(){var l=Xt.f(),t=Df();return l||t}function OS(l){var t=Ba(l);t!==null&&t.tag===5&&t.type==="form"?Cy(t):Xt.r(l)}var ja=typeof document>"u"?null:document;function wm(l,t,u){var a=ja;if(a&&typeof t=="string"&&t){var n=Wl(t);n='link[rel="'+l+'"][href="'+n+'"]',typeof u=="string"&&(n+='[crossorigin="'+u+'"]'),Kv.has(n)||(Kv.add(n),l={rel:l,crossOrigin:u,href:t},a.querySelector(n)===null&&(t=a.createElement("link"),Sl(t,"link",l),vl(t),a.head.appendChild(t)))}}function _S(l){Xt.D(l),wm("dns-prefetch",l,null)}function AS(l,t){Xt.C(l,t),wm("preconnect",l,t)}function NS(l,t,u){Xt.L(l,t,u);var a=ja;if(a&&l&&t){var n='link[rel="preload"][as="'+Wl(t)+'"]';t==="image"&&u&&u.imageSrcSet?(n+='[imagesrcset="'+Wl(u.imageSrcSet)+'"]',typeof u.imageSizes=="string"&&(n+='[imagesizes="'+Wl(u.imageSizes)+'"]')):n+='[href="'+Wl(l)+'"]';var e=n;switch(t){case"style":e=Ca(l);break;case"script":e=Va(l)}if(!(Pl.has(e)||(l=L({rel:"preload",href:t==="image"&&u&&u.imageSrcSet?void 0:l,as:t},u),Pl.set(e,l),a.querySelector(n)!==null||t==="style"&&a.querySelector(xn(e))||t==="script"&&a.querySelector(Ln(e))))){var f=a.createElement("link");Sl(f,"link",l),t==="style"&&(f[Ve]=!0,f.onload=f.onerror=function(){Oo(f)}),vl(f),a.head.appendChild(f)}}}function rS(l,t){Xt.m(l,t);var u=ja;if(u&&l){var a=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+Wl(a)+'"][href="'+Wl(l)+'"]',e=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":e=Va(l)}if(!Pl.has(e)&&(l=L({rel:"modulepreload",href:l},t),Pl.set(e,l),u.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(u.querySelector(Ln(e)))return}a=u.createElement("link"),Sl(a,"link",l),vl(a),u.head.appendChild(a)}}}function DS(l,t,u){Xt.S(l,t,u);var a=ja;if(a&&l){var n=ya(a).hoistableStyles,e=Ca(l);t=t||"default";var f=n.get(e);if(!f){var c={loading:0,preload:null};if(f=a.querySelector(xn(e)))c.loading=5;else{l=L({rel:"stylesheet",href:l,"data-precedence":t},u),(u=Pl.get(e))&&q0(l,u);var i=f=a.createElement("link");vl(i),Sl(i,"link",l),i._p=new Promise(function(o,g){i.onload=o,i.onerror=g}),i.addEventListener("load",function(){c.loading|=1}),i.addEventListener("error",function(){c.loading|=2}),c.loading|=4,He(f,t,a)}f={type:"stylesheet",instance:f,count:1,state:c},n.set(e,f)}}}function MS(l,t){Xt.X(l,t);var u=ja;if(u&&l){var a=ya(u).hoistableScripts,n=Va(l),e=a.get(n);e||(e=u.querySelector(Ln(n)),e||(l=L({src:l,async:!0},t),(t=Pl.get(n))&&B0(l,t),e=u.createElement("script"),vl(e),Sl(e,"link",l),u.head.appendChild(e)),e={type:"script",instance:e,count:1,state:null},a.set(n,e))}}function US(l,t){Xt.M(l,t);var u=ja;if(u&&l){var a=ya(u).hoistableScripts,n=Va(l),e=a.get(n);e||(e=u.querySelector(Ln(n)),e||(l=L({src:l,async:!0,type:"module"},t),(t=Pl.get(n))&&B0(l,t),e=u.createElement("script"),vl(e),Sl(e,"link",l),u.head.appendChild(e)),e={type:"script",instance:e,count:1,state:null},a.set(n,e))}}function Jv(l,t,u,a){var n=(n=tu.current)?Mn(n):null;if(!n)throw Error(T(446));switch(l){case"meta":case"title":return null;case"style":return typeof u.precedence=="string"&&typeof u.href=="string"?(u=Ca(u.href),t=ya(n).hoistableStyles,a=t.get(u),a||(a={type:"style",instance:null,count:0,state:null},t.set(u,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(u.rel==="stylesheet"&&typeof u.href=="string"&&typeof u.precedence=="string"){l=Ca(u.href);var e=ya(n).hoistableStyles,f=e.get(l);if(f||(n=n.ownerDocument||n,f={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},e.set(l,f),(e=n.querySelector(xn(l)))?e._p||(f.instance=e,f.state.loading=5):(e=Pl.get(l),e||(e={rel:"preload",as:"style",href:u.href,crossOrigin:u.crossOrigin,integrity:u.integrity,media:u.media,hrefLang:u.hrefLang,referrerPolicy:u.referrerPolicy},Pl.set(l,e)),CS(n,l,e,f.state))),t&&a===null)throw Error(T(528,""));return f}if(t&&a!==null)throw Error(T(529,""));return null;case"script":return t=u.async,u=u.src,typeof u=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(u=Va(u),t=ya(n).hoistableScripts,a=t.get(u),a||(a={type:"script",instance:null,count:0,state:null},t.set(u,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(T(444,l))}}function Ca(l){return'href="'+Wl(l)+'"'}function xn(l){return'link[rel="stylesheet"]['+l+"]"}function Fm(l){return L({},l,{"data-precedence":l.precedence,precedence:null})}function CS(l,t,u,a){if(t=l.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[Ve]!==!0){a.loading=1;return}}else t=l.createElement("link"),t[Ve]=!0,t.onload=t.onerror=Oo.bind(null,t),Sl(t,"link",u),vl(t),l.head.appendChild(t);a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2})}function Va(l){return'[src="'+Wl(l)+'"]'}function Ln(l){return"script[async]"+l}function wv(l,t,u){if(t.count++,t.instance===null)switch(t.type){case"style":var a=l.querySelector('style[data-href~="'+Wl(u.href)+'"]');if(a)return t.instance=a,vl(a),a;var n=L({},u,{"data-href":u.href,"data-precedence":u.precedence,href:null,precedence:null});return a=(l.ownerDocument||l).createElement("style"),vl(a),Sl(a,"style",n),He(a,u.precedence,l),t.instance=a;case"stylesheet":n=Ca(u.href);var e=l.querySelector(xn(n));if(e)return t.state.loading|=4,t.instance=e,vl(e),e;a=Fm(u),(n=Pl.get(n))&&q0(a,n),e=(l.ownerDocument||l).createElement("link"),vl(e);var f=e;return f._p=new Promise(function(c,i){f.onload=c,f.onerror=i}),Sl(e,"link",a),t.state.loading|=4,He(e,u.precedence,l),t.instance=e;case"script":return e=Va(u.src),(n=l.querySelector(Ln(e)))?(t.instance=n,vl(n),n):(a=u,(n=Pl.get(e))&&(a=L({},u),B0(a,n)),l=l.ownerDocument||l,n=l.createElement("script"),vl(n),Sl(n,"link",a),l.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(T(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,He(a,u.precedence,l));return t.instance}function He(l,t,u){for(var a=u.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,e=n,f=0;f<a.length;f++){var c=a[f];if(c.dataset.precedence===t)e=c;else if(e!==n)break}e?e.parentNode.insertBefore(l,e.nextSibling):(t=u.nodeType===9?u.head:u,t.insertBefore(l,t.firstChild))}function q0(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.title==null&&(l.title=t.title)}function B0(l,t){l.crossOrigin==null&&(l.crossOrigin=t.crossOrigin),l.referrerPolicy==null&&(l.referrerPolicy=t.referrerPolicy),l.integrity==null&&(l.integrity=t.integrity)}var Re=null;function Fv(l,t,u){if(Re===null){var a=new Map,n=Re=new Map;n.set(u,a)}else n=Re,a=n.get(u),a||(a=new Map,n.set(u,a));if(a.has(l))return a;for(a.set(l,null),u=u.getElementsByTagName(l),n=0;n<u.length;n++){var e=u[n];if(!(e[Gn]||e[ml]||l==="link"&&e.getAttribute("rel")==="stylesheet")&&e.namespaceURI!=="http://www.w3.org/2000/svg"){var f=e.getAttribute(t)||"";f=l+f;var c=a.get(f);c?c.push(e):a.set(f,[e])}}return a}function Xi(l,t,u){l=l.ownerDocument||l,l.head.insertBefore(u,t==="title"?l.querySelector("head > title"):null)}function HS(l,t,u){if(u===1||t.itemProp!=null)return!1;switch(l){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(l=t.disabled,typeof t.precedence=="string"&&l==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Wv(l,t){return l==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Wm(l){return!(l.type==="stylesheet"&&(l.state.loading&3)===0)}function $m(l){return(l.width||100)*(l.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function $v(l,t){typeof t.decode=="function"&&(l.imgCount++,t.complete||(l.imgBytes+=$m(t),l.suspenseyImages.push(t)),l=qS.bind(l),t.decode().then(l,l))}function RS(l,t,u,a){if(u.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(u.state.loading&4)===0){if(u.instance===null){var n=Ca(a.href),e=t.querySelector(xn(n));if(e){t=e._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=Un.bind(l),t.then(l,l)),u.state.loading|=4,u.instance=e,vl(e);return}e=t.ownerDocument||t,a=Fm(a),(n=Pl.get(n))&&q0(a,n),e=e.createElement("link"),vl(e);var f=e;f._p=new Promise(function(c,i){f.onload=c,f.onerror=i}),Sl(e,"link",a),u.instance=e}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(u,t),(t=u.state.preload)&&(u.state.loading&3)===0&&(l.count++,u=Un.bind(l),t.addEventListener("load",u),t.addEventListener("error",u))}}var Ye=0;function YS(l,t){return l.stylesheets&&l.count===0&&qe(l,l.stylesheets),0<l.count||0<l.imgCount?function(u){var a=setTimeout(function(){if(l.stylesheets&&qe(l,l.stylesheets),l.unsuspend){var e=l.unsuspend;l.unsuspend=null,e()}},6e4+t);0<l.imgBytes&&Ye===0&&(Ye=62500*Ig());var n=setTimeout(function(){if(l.waitingForImages=!1,l.count===0&&(l.stylesheets&&qe(l,l.stylesheets),l.unsuspend)){var e=l.unsuspend;l.unsuspend=null,e()}},(l.imgBytes>Ye?50:800)+t);return l.unsuspend=u,function(){l.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function Im(l){if(l.count===0&&(l.imgCount===0||!l.waitingForImages)){if(l.stylesheets)qe(l,l.stylesheets);else if(l.unsuspend){var t=l.unsuspend;l.unsuspend=null,t()}}}function Un(){this.count--,Im(this)}function qS(){this.imgCount--,Im(this)}var of=null;function qe(l,t){l.stylesheets=null,l.unsuspend!==null&&(l.count++,of=new Map,t.forEach(BS,l),of=null,Un.call(l))}function BS(l,t){if(!(t.state.loading&4)){var u=of.get(l);if(u)var a=u.get(null);else{u=new Map,of.set(l,u);for(var n=l.querySelectorAll("link[data-precedence],style[data-precedence]"),e=0;e<n.length;e++){var f=n[e];(f.nodeName==="LINK"||f.getAttribute("media")!=="not all")&&(u.set(f.dataset.precedence,f),a=f)}a&&u.set(null,a)}n=t.instance,f=n.getAttribute("data-precedence"),e=u.get(f)||a,e===a&&u.set(null,n),u.set(f,n),this.count++,a=Un.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),e?e.parentNode.insertBefore(n,e.nextSibling):(l=l.nodeType===9?l.head:l,l.insertBefore(n,l.firstChild)),t.state.loading|=4}}var Ha={$$typeof:mt,Provider:null,Consumer:null,_currentValue:Nu,_currentValue2:Nu,_threadCount:0};function GS(l,t,u,a,n,e,f,c,i){this.tag=1,this.containerInfo=l,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=uc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=uc(0),this.hiddenUpdates=uc(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=e,this.onRecoverableError=f,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=i,this.transitionTypes=null,this.incompleteTransitions=new Map}function km(l,t,u,a,n,e,f,c,i,o,g,s){return l=new GS(l,t,u,f,i,o,g,s,c),t=1,e===!0&&(t|=24),e=Ul(3,null,null,t),l.current=e,e.stateNode=l,t=t0(),t.refCount++,l.pooledCache=t,t.refCount++,e.memoizedState={element:a,isDehydrated:u,cache:t},n0(e),l}function Pm(l){return l?(l=ca,l):ca}function ld(l,t,u,a,n,e){n=Pm(n),a.context===null?a.context=n:a.pendingContext=n,a=au(t),a.payload={element:u},e=e===void 0?null:e,e!==null&&(a.callback=e),u=nu(l,a,t),u!==null&&(Cl(u,l,t),fn(u,l,t))}function Iv(l,t){if(l=l.memoizedState,l!==null&&l.dehydrated!==null){var u=l.retryLane;l.retryLane=u!==0&&u<t?u:t}}function G0(l,t){Iv(l,t),(l=l.alternate)&&Iv(l,t)}function td(l){if(l.tag===13||l.tag===31){var t=Zu(l,67108864);t!==null&&Cl(t,l,67108864),G0(l,67108864)}}function kv(l){if(l.tag===13||l.tag===31){var t=Zl();t=Li(t);var u=Zu(l,t);u!==null&&Cl(u,l,t),G0(l,t)}}var Ra=!0;function XS(l,t,u,a){var n=A.T;A.T=null;var e=G.p;try{G.p=2,X0(l,t,u,a)}finally{G.p=e,A.T=n}}function QS(l,t,u,a){var n=A.T;A.T=null;var e=G.p;try{G.p=8,X0(l,t,u,a)}finally{G.p=e,A.T=n}}function X0(l,t,u,a){if(Ra){var n=Qi(a);if(n===null)Nc(l,t,a,yf,u),Pv(l,a);else if(VS(n,l,t,u,a))a.stopPropagation();else if(Pv(l,a),t&4&&-1<jS.indexOf(l)){for(;n!==null;){var e=Ba(n);if(e!==null)switch(e.tag){case 3:if(e=e.stateNode,e.current.memoizedState.isDehydrated){var f=zu(e.pendingLanes);if(f!==0){var c=e;for(c.pendingLanes|=2,c.entangledLanes|=2;f;){var i=1<<31-Vl(f);c.entanglements[1]|=i,f&=~i}zt(e),(B&6)===0&&(nf=Ql()+500,Zn(0,!1))}}break;case 31:case 13:c=Zu(e,2),c!==null&&Cl(c,e,2),Df(),G0(e,2)}if(e=Qi(a),e===null&&Nc(l,t,a,yf,u),e===n)break;n=e}n!==null&&a.stopPropagation()}else Nc(l,t,a,null,u)}}function Qi(l){return l=Ji(l),Q0(l)}var yf=null;function Q0(l){if(yf=null,l=_u(l),l!==null){var t=Rn(l);if(t===null)l=null;else{var u=t.tag;if(u===13){if(l=eo(t),l!==null)return l;l=null}else if(u===31){if(l=fo(t),l!==null)return l;l=null}else if(u===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;l=null}else t!==l&&(l=null)}}return yf=l,null}function ud(l){switch(l){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Pd()){case mo:return 2;case ho:return 8;case je:case lh:return 32;case go:return 268435456;default:return 32}default:return 32}}var ji=!1,iu=null,vu=null,ou=null,Cn=new Map,Hn=new Map,Ft=[],jS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Pv(l,t){switch(l){case"focusin":case"focusout":iu=null;break;case"dragenter":case"dragleave":vu=null;break;case"mouseover":case"mouseout":ou=null;break;case"pointerover":case"pointerout":Cn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hn.delete(t.pointerId)}}function Wa(l,t,u,a,n,e){return l===null||l.nativeEvent!==e?(l={blockedOn:t,domEventName:u,eventSystemFlags:a,nativeEvent:e,targetContainers:[n]},t!==null&&(t=Ba(t),t!==null&&td(t)),l):(l.eventSystemFlags|=a,t=l.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),l)}function VS(l,t,u,a,n){switch(t){case"focusin":return iu=Wa(iu,l,t,u,a,n),!0;case"dragenter":return vu=Wa(vu,l,t,u,a,n),!0;case"mouseover":return ou=Wa(ou,l,t,u,a,n),!0;case"pointerover":var e=n.pointerId;return Cn.set(e,Wa(Cn.get(e)||null,l,t,u,a,n)),!0;case"gotpointercapture":return e=n.pointerId,Hn.set(e,Wa(Hn.get(e)||null,l,t,u,a,n)),!0}return!1}function ad(l){var t=_u(l.target);if(t!==null){var u=Rn(t);if(u!==null){if(t=u.tag,t===13){if(t=eo(u),t!==null){l.blockedOn=t,N1(l.priority,function(){kv(u)});return}}else if(t===31){if(t=fo(u),t!==null){l.blockedOn=t,N1(l.priority,function(){kv(u)});return}}else if(t===3&&u.stateNode.current.memoizedState.isDehydrated){l.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}l.blockedOn=null}function Be(l){if(l.blockedOn!==null)return!1;for(var t=l.targetContainers;0<t.length;){var u=Qi(l.nativeEvent);if(u===null){u=l.nativeEvent;var a=new u.constructor(u.type,u);xc=a,u.target.dispatchEvent(a),xc=null}else return t=Ba(u),t!==null&&td(t),l.blockedOn=u,!1;t.shift()}return!0}function lo(l,t,u){Be(l)&&u.delete(t)}function ZS(){ji=!1,iu!==null&&Be(iu)&&(iu=null),vu!==null&&Be(vu)&&(vu=null),ou!==null&&Be(ou)&&(ou=null),Cn.forEach(lo),Hn.forEach(lo)}function ge(l,t){l.blockedOn===t&&(l.blockedOn=null,ji||(ji=!0,fl.unstable_scheduleCallback(fl.unstable_NormalPriority,ZS)))}var Se=null;function to(l){Se!==l&&(Se=l,fl.unstable_scheduleCallback(fl.unstable_NormalPriority,function(){Se===l&&(Se=null);for(var t=0;t<l.length;t+=3){var u=l[t],a=l[t+1],n=l[t+2];if(typeof a!="function"){if(Q0(a||u)===null)continue;break}var e=Ba(u);e!==null&&(l.splice(t,3),t-=3,ni(e,{pending:!0,data:n,method:u.method,action:a},a,n))}}))}function Ya(l){function t(i){return ge(i,l)}iu!==null&&ge(iu,l),vu!==null&&ge(vu,l),ou!==null&&ge(ou,l),Cn.forEach(t),Hn.forEach(t);for(var u=0;u<Ft.length;u++){var a=Ft[u];a.blockedOn===l&&(a.blockedOn=null)}for(;0<Ft.length&&(u=Ft[0],u.blockedOn===null);)ad(u),u.blockedOn===null&&Ft.shift();if(u=(l.ownerDocument||l).$$reactFormReplay,u!=null)for(a=0;a<u.length;a+=3){var n=u[a],e=u[a+1],f=n[Rl]||null;if(typeof e=="function")f||to(u);else if(f){var c=null;if(e&&e.hasAttribute("formAction")){if(n=e,f=e[Rl]||null)c=f.formAction;else if(Q0(n)!==null)continue}else c=f.action;typeof c=="function"?u[a+1]=c:(u.splice(a,3),a-=3),to(u)}}}function nd(){function l(e){e.canIntercept&&e.info==="react-transition"&&e.intercept({handler:function(){return new Promise(function(f){return n=f})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),a||setTimeout(u,20)}function u(){if(!a&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",l),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(u,100),function(){a=!0,navigation.removeEventListener("navigate",l),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function j0(l){this._internalRoot=l}Cf.prototype.render=j0.prototype.render=function(l){var t=this._internalRoot;if(t===null)throw Error(T(409));var u=t.current,a=Zl();ld(u,a,l,t,null,null)};Cf.prototype.unmount=j0.prototype.unmount=function(){var l=this._internalRoot;if(l!==null){this._internalRoot=null;var t=l.containerInfo;ld(l.current,2,null,l,null,null),Df(),t[qa]=null}};function Cf(l){this._internalRoot=l}Cf.prototype.unstable_scheduleHydration=function(l){if(l){var t=bo();l={blockedOn:null,target:l,priority:t};for(var u=0;u<Ft.length&&t!==0&&t<Ft[u].priority;u++);Ft.splice(u,0,l),u===0&&ad(l)}};var uo=ao.version;if(uo!=="19.3.1")throw Error(T(527,uo,"19.3.1"));G.findDOMNode=function(l){var t=l._reactInternals;if(t===void 0)throw typeof l.render=="function"?Error(T(188)):(l=Object.keys(l).join(","),Error(T(268,l)));return l=xd(t),l=l!==null?co(l):null,l=l===null?null:l.stateNode,l};var xS={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&($a=__REACT_DEVTOOLS_GLOBAL_HOOK__,!$a.isDisabled&&$a.supportsFiber))try{Yn=$a.inject(xS),jl=$a}catch{}var $a;Hf.createRoot=function(l,t){if(!no(l))throw Error(T(299));var u=!1,a="",n=Qy,e=jy,f=Vy;return t!=null&&(t.unstable_strictMode===!0&&(u=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(e=t.onCaughtError),t.onRecoverableError!==void 0&&(f=t.onRecoverableError)),t=km(l,1,!1,null,null,u,a,null,n,e,f,nd),l[qa]=t.current,C0(l),new j0(t)};Hf.hydrateRoot=function(l,t,u){if(!no(l))throw Error(T(299));var a=!1,n="",e=Qy,f=jy,c=Vy,i=null;return u!=null&&(u.unstable_strictMode===!0&&(a=!0),u.identifierPrefix!==void 0&&(n=u.identifierPrefix),u.onUncaughtError!==void 0&&(e=u.onUncaughtError),u.onCaughtError!==void 0&&(f=u.onCaughtError),u.onRecoverableError!==void 0&&(c=u.onRecoverableError),u.formState!==void 0&&(i=u.formState)),t=km(l,1,!0,t,u??null,a,n,i,e,f,c,nd),t.context=Pm(null),u=t.current,a=Zl(),a=Li(a),n=au(a),n.callback=null,nu(u,n,a),u=a,t.current.lanes=u,Bn(t,u),zt(t),l[qa]=t.current,C0(l),new Cf(t)};Hf.version="19.3.1"});var id=Vt((kS,cd)=>{"use strict";function fd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fd)}catch(l){console.error(l)}}fd(),cd.exports=ed()});var Yf=Bf(Kn()),vd=Bf(id()),od=Bf(If());window.React=Yf.default;window.nativeFlush=od.flushSync;var LS=(0,vd.createRoot)(document.getElementById("root")),bt=null,qf=0,Rf=0,Qt=[],V0=0;function yd(l){if(Rf&&Qt.push(l-Rf),Rf=l,Qt.length>1e4&&Qt.shift(),l-V0>1e3){let t=Qt.slice(-165);document.title="DSH Screenshot GPU PERF "+Math.round(t.length*1e3/(t.reduce((u,a)=>u+a,0)||1))+" Hz",V0=l}qf=requestAnimationFrame(yd)}window.finishNative=l=>{if(!bt)return;cancelAnimationFrame(qf);let t=[...Qt].sort((a,n)=>a-n),u=Qt.reduce((a,n)=>a+n,0);URL.revokeObjectURL(bt.image),window.nativeShot.complete({id:bt.id,error:l,metrics:{frameCount:Qt.length,averageFrameMs:u/Math.max(1,Qt.length),p95FrameMs:t[Math.floor(t.length*.95)]||0,maxFrameMs:t.at(-1)||0}}),bt=null};window.fetch=async(l,t)=>{let u=l==="/dsh-wechat-screenshot/copy"?"copy":l==="/dsh-wechat-screenshot/save"?"save":null;if(!u||!bt)throw Error("\u622A\u56FE\u4F1A\u8BDD\u5DF2\u7ED3\u675F");try{let a=await window.nativeShot.exportImage({id:bt.id,action:u,bytes:new Uint8Array(await t.body.arrayBuffer())});return new Response(JSON.stringify(a),{status:200,headers:{"content-type":"application/json"}})}catch(a){return new Response(JSON.stringify({error:a.message}),{status:500})}};window.__ModuleLoader__={load({factory:l}){l(()=>Yf.default).apply({effect:u=>u(),slots:{inject:(u,a)=>a(),register:(u,a)=>{u.name==="shell.overlay"&&LS.render(Yf.default.createElement(a))}}})}};window.nativeShot.onOpen(async l=>{try{if(window.nativeShot.stage("renderer callback"),l={...l},bt=l,Qt=[],Rf=0,V0=0,cancelAnimationFrame(qf),await window.openNative(l),window.nativeShot.stage("image decoded"),await new Promise(requestAnimationFrame),await new Promise(requestAnimationFrame),window.nativeShot.stage("frames ready"),bt?.id!==l.id)return;qf=requestAnimationFrame(yd),window.nativeShot.painted(l.id)}catch(t){bt?window.finishNative(t.message):window.nativeShot.complete({id:l.id,error:t.message,metrics:{}})}});window.nativeShot.onCancel(l=>{bt?.id===l&&window.finishNative()});})();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
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
.wxshot-drag{position:absolute;inset:0;z-index:3;pointer-events:none;display:none}.wxshot-drag-edge{position:absolute;left:0;top:0;width:1px;height:1px;transform-origin:0 0;background:#07c160;will-change:transform}
.wxshot-drag-size{position:absolute;z-index:4;pointer-events:none;display:none;box-sizing:border-box;padding:2px 6px;border-radius:4px;background:rgba(0,0,0,.65);color:#fff;font-size:11px;line-height:16px;white-space:nowrap}
.wxshot-window{position:absolute;pointer-events:none;box-sizing:border-box;border:1.5px solid #07c160;background:rgba(7,193,96,.10);box-shadow:0 0 0 1px rgba(0,0,0,.25)}
.wxshot-sel{position:absolute;pointer-events:none;box-sizing:border-box;border:1px solid rgba(255,255,255,.96);box-shadow:0 0 0 1px rgba(0,0,0,.5)}
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
      window.finishNative();
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
        const edges = [[left,top,width,1.5], [left,top+height-1.5,width,1.5], [left,top,1.5,height], [left+width-1.5,top,1.5,height]];
        edges.forEach(([x,y,w,h],i) => { box.children[i].style.transform = `translate(${x}px,${y}px) scale(${Math.max(0,w)},${Math.max(0,h)})`; });
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
        // Pointer moves are already coalesced by Chromium. Update the lightweight
        // selection layers immediately instead of adding another rAF delay.
        if (dragRef.current?.kind === 'select') { applyPointerMove(event); return; }
        if (dragRef.current?.kind === 'shape') {
          const samples=(event.nativeEvent || event).getCoalescedEvents?.() || [];
          if(samples.length) samples.forEach((point,i)=>applyPointerMove({clientX:point.clientX,clientY:point.clientY,deferPaint:i<samples.length-1}));
          else applyPointerMove(event);
          return;
        }

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
          h('div', { ref: dragBoxRef, className: 'wxshot-drag' }, [0,1,2,3].map(i => h('div', { key: i, className: 'wxshot-drag-edge' }))),
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

    window.openNative = async payload => {
      const image = await loadImage(payload.image);
      window.nativeFlush(() => setState({ ...createInitial(), phase: 'ready', mode: payload.mode,
        imageUrl: payload.image, image, imageWidth: image.naturalWidth, imageHeight: image.naturalHeight,
        screen: payload.screen, windows: payload.windows || [] }));
    };
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

window.nativeShot.ready();
