var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var S={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function C(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function re(e,t){return C(e.type,t,e.props)}function ie(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(ie(o)&&(o=re(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},T={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!ie(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=T,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return C(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return C(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ie,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,w)}catch(e){w(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.2.6`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,ie());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}var ee=!1,te=-1,S=5,ne=-1;function C(){return g?!0:!(e.unstable_now()-ne<S)}function re(){if(g=!1,ee){var t=e.unstable_now();ne=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&C());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?ie():ee=!1}}}var ie;if(typeof y==`function`)ie=function(){y(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){_(re,0)};function se(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):S=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,ie()))),r},e.unstable_shouldYield=C,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.6`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),ne=Symbol.for(`react.suspense`),C=Symbol.for(`react.suspense_list`),re=Symbol.for(`react.memo`),ie=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function ue(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ne:return`Suspense`;case C:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case te:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case re:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case ie:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,w=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function he(e){return{current:e}}function E(e){0>me||(e.current=pe[me],pe[me]=null,me--)}function D(e,t){me++,pe[me]=e.current,e.current=t}var ge=he(null),_e=he(null),ve=he(null),ye=he(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}E(ge),D(ge,e)}function xe(){E(ge),E(_e),E(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(E(ge),E(_e)),ye.current===e&&(E(ye),Qf._currentValue=fe)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ht(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[_t])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function kt(e){var t=e[Ct];return t||=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function O(e){e[wt]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return je.call(It,e)?!0:je.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(de(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&rn(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&rn(e,o,t[o])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function k(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fn=null,pn=null;function mn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[vt]||null;if(!a)throw Error(i(90));Yt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var hn=!1;function gn(e,t,n){if(hn)return e(t,n);hn=!0;try{return e(t)}finally{if(hn=!1,(fn!==null||pn!==null)&&(bu(),fn&&(t=fn,e=pn,pn=fn=null,mn(t),e)))for(t=0;t<e.length;t++)mn(e[t])}}function _n(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var vn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),yn=!1;if(vn)try{var bn={};Object.defineProperty(bn,`passive`,{get:function(){yn=!0}}),window.addEventListener(`test`,bn,bn),window.removeEventListener(`test`,bn,bn)}catch{yn=!1}var xn=null,Sn=null,Cn=null;function wn(){if(Cn)return Cn;var e,t=Sn,n=t.length,r,i=`value`in xn?xn.value:xn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return Cn=i.slice(e,1<r?1-r:void 0)}function Tn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function En(){return!0}function Dn(){return!1}function On(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?En:Dn,this.isPropagationStopped=Dn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=En)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=En)},persist:function(){},isPersistent:En}),t}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},An=On(kn),jn=h({},kn,{view:0,detail:0}),Mn=On(jn),Nn,Pn,Fn,In=h({},jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Fn&&(Fn&&e.type===`mousemove`?(Nn=e.screenX-Fn.screenX,Pn=e.screenY-Fn.screenY):Pn=Nn=0,Fn=e),Nn)},movementY:function(e){return`movementY`in e?e.movementY:Pn}}),Ln=On(In),Rn=On(h({},In,{dataTransfer:0})),zn=On(h({},jn,{relatedTarget:0})),Bn=On(h({},kn,{animationName:0,elapsedTime:0,pseudoElement:0})),Vn=On(h({},kn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Hn=On(h({},kn,{data:0})),Un={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Wn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Gn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Kn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gn[e])?!!t[e]:!1}function qn(){return Kn}var Jn=On(h({},jn,{key:function(e){if(e.key){var t=Un[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Tn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Wn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qn,charCode:function(e){return e.type===`keypress`?Tn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Tn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Yn=On(h({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Xn=On(h({},jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qn})),Zn=On(h({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Qn=On(h({},In,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),$n=On(h({},kn,{newState:0,oldState:0})),er=[9,13,27,32],tr=vn&&`CompositionEvent`in window,nr=null;vn&&`documentMode`in document&&(nr=document.documentMode);var rr=vn&&`TextEvent`in window&&!nr,ir=vn&&(!tr||nr&&8<nr&&11>=nr),ar=` `,or=!1;function sr(e,t){switch(e){case`keyup`:return er.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function cr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var lr=!1;function ur(e,t){switch(e){case`compositionend`:return cr(t);case`keypress`:return t.which===32?(or=!0,ar):null;case`textInput`:return e=t.data,e===ar&&or?null:e;default:return null}}function dr(e,t){if(lr)return e===`compositionend`||!tr&&sr(e,t)?(e=wn(),Cn=Sn=xn=null,lr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ir&&t.locale!==`ko`?null:t.data;default:return null}}var fr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!fr[e.type]:t===`textarea`}function mr(e,t,n,r){fn?pn?pn.push(r):pn=[r]:fn=r,t=Ed(t,`onChange`),0<t.length&&(n=new An(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var hr=null,gr=null;function _r(e){yd(e,0)}function A(e){if(Gt(Ot(e)))return e}function vr(e,t){if(e===`change`)return t}var yr=!1;if(vn){var br;if(vn){var xr=`oninput`in document;if(!xr){var Sr=document.createElement(`div`);Sr.setAttribute(`oninput`,`return;`),xr=typeof Sr.oninput==`function`}br=xr}else br=!1;yr=br&&(!document.documentMode||9<document.documentMode)}function Cr(){hr&&(hr.detachEvent(`onpropertychange`,wr),gr=hr=null)}function wr(e){if(e.propertyName===`value`&&A(gr)){var t=[];mr(t,gr,e,k(e)),gn(_r,t)}}function Tr(e,t,n){e===`focusin`?(Cr(),hr=t,gr=n,hr.attachEvent(`onpropertychange`,wr)):e===`focusout`&&Cr()}function Er(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return A(gr)}function Dr(e,t){if(e===`click`)return A(t)}function Or(e,t){if(e===`input`||e===`change`)return A(t)}function kr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ar=typeof Object.is==`function`?Object.is:kr;function jr(e,t){if(Ar(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Ar(e[i],t[i]))return!1}return!0}function Mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var n=Mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Mr(n)}}function Pr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Lr=vn&&`documentMode`in document&&11>=document.documentMode,Rr=null,zr=null,Br=null,Vr=!1;function Hr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vr||Rr==null||Rr!==Kt(r)||(r=Rr,`selectionStart`in r&&Ir(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Br&&jr(Br,r)||(Br=r,r=Ed(zr,`onSelect`),0<r.length&&(t=new An(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Rr)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Wr={animationend:Ur(`Animation`,`AnimationEnd`),animationiteration:Ur(`Animation`,`AnimationIteration`),animationstart:Ur(`Animation`,`AnimationStart`),transitionrun:Ur(`Transition`,`TransitionRun`),transitionstart:Ur(`Transition`,`TransitionStart`),transitioncancel:Ur(`Transition`,`TransitionCancel`),transitionend:Ur(`Transition`,`TransitionEnd`)},Gr={},Kr={};vn&&(Kr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Wr.animationend.animation,delete Wr.animationiteration.animation,delete Wr.animationstart.animation),`TransitionEvent`in window||delete Wr.transitionend.transition);function qr(e){if(Gr[e])return Gr[e];if(!Wr[e])return e;var t=Wr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Kr)return Gr[e]=t[n];return e}var Jr=qr(`animationend`),Yr=qr(`animationiteration`),Xr=qr(`animationstart`),Zr=qr(`transitionrun`),Qr=qr(`transitionstart`),$r=qr(`transitioncancel`),ei=qr(`transitionend`),ti=new Map,ni=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ni.push(`scrollEnd`);function ri(e,t){ti.set(e,t),Mt(t,[e])}var ii=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ai=[],oi=0,si=0;function ci(){for(var e=oi,t=si=oi=0;t<e;){var n=ai[t];ai[t++]=null;var r=ai[t];ai[t++]=null;var i=ai[t];ai[t++]=null;var a=ai[t];if(ai[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&fi(n,i,a)}}function li(e,t,n,r){ai[oi++]=e,ai[oi++]=t,ai[oi++]=n,ai[oi++]=r,si|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ui(e,t,n,r){return li(e,t,n,r),pi(e)}function di(e,t){return li(e,null,null,t),pi(e)}function fi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function pi(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var mi={};function hi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(e,t,n,r){return new hi(e,t,n,r)}function _i(e){return e=e.prototype,!(!e||!e.isReactComponent)}function vi(e,t){var n=e.alternate;return n===null?(n=gi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function yi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)_i(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=gi(31,n,t,a),e.elementType=ae,e.lanes=o,e;case y:return xi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=gi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case ne:return e=gi(13,n,t,a),e.elementType=ne,e.lanes=o,e;case C:return e=gi(19,n,t,a),e.elementType=C,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:s=10;break a;case ee:s=9;break a;case S:s=11;break a;case re:s=14;break a;case ie:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=gi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function xi(e,t,n,r){return e=gi(7,e,r,t),e.lanes=n,e}function Si(e,t,n){return e=gi(6,e,null,t),e.lanes=n,e}function Ci(e){var t=gi(18,null,null,0);return t.stateNode=e,t}function wi(e,t,n){return t=gi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ti=new WeakMap;function Ei(e,t){if(typeof e==`object`&&e){var n=Ti.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Ti.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var Di=[],Oi=0,ki=null,Ai=0,ji=[],Mi=0,Ni=null,Pi=1,Fi=``;function Ii(e,t){Di[Oi++]=Ai,Di[Oi++]=ki,ki=e,Ai=t}function Li(e,t,n){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Ni=e;var r=Pi;e=Fi;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Pi=1<<32-Je(t)+i|n<<i|r,Fi=a+e}else Pi=1<<a|n<<i|r,Fi=e}function Ri(e){e.return!==null&&(Ii(e,1),Li(e,1,0))}function zi(e){for(;e===ki;)ki=Di[--Oi],Di[Oi]=null,Ai=Di[--Oi],Di[Oi]=null;for(;e===Ni;)Ni=ji[--Mi],ji[Mi]=null,Fi=ji[--Mi],ji[Mi]=null,Pi=ji[--Mi],ji[Mi]=null}function Bi(e,t){ji[Mi++]=Pi,ji[Mi++]=Fi,ji[Mi++]=Ni,Pi=t.id,Fi=t.overflow,Ni=e}var Vi=null,j=null,M=!1,Hi=null,Ui=!1,Wi=Error(i(519));function Gi(e){throw Zi(Ei(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Wi}function Ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||Gi(e,!0)}function qi(e){for(Vi=e.return;Vi;)switch(Vi.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:Vi=Vi.return}}function Ji(e){if(e!==Vi)return!1;if(!M)return qi(e),M=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&j&&Gi(e),qi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));j=uf(e)}else t===27?(t=j,Zd(e.type)?(e=lf,lf=null,j=e):j=t):j=Vi?cf(e.stateNode.nextSibling):null;return!0}function Yi(){j=Vi=null,M=!1}function Xi(){var e=Hi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Hi=null),e}function Zi(e){Hi===null?Hi=[e]:Hi.push(e)}var Qi=he(null),$i=null,ea=null;function ta(e,t,n){D(Qi,t._currentValue),t._currentValue=n}function na(e){e._currentValue=Qi.current,E(Qi)}function ra(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ia(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ra(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ra(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function aa(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Ar(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===ye.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ia(t,e,n,r),t.flags|=262144}function oa(e){for(e=e.firstContext;e!==null;){if(!Ar(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sa(e){$i=e,ea=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ca(e){return ua($i,e)}function la(e,t){return $i===null&&sa(e),ua(e,t)}function ua(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ea===null){if(e===null)throw Error(i(308));ea=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ea=ea.next=t;return n}var da=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},fa=t.unstable_scheduleCallback,pa=t.unstable_NormalPriority,N={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ma(){return{controller:new da,data:new Map,refCount:0}}function ha(e){e.refCount--,e.refCount===0&&fa(pa,function(){e.controller.abort()})}var ga=null,_a=0,va=0,ya=null;function ba(e,t){if(ga===null){var n=ga=[];_a=0,va=dd(),ya={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return _a++,t.then(xa,xa),t}function xa(){if(--_a===0&&ga!==null){ya!==null&&(ya.status=`fulfilled`);var e=ga;ga=null,va=0,ya=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Sa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var Ca=w.S;w.S=function(e,t){tu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&ba(e,t),Ca!==null&&Ca(e,t)};var wa=he(null);function Ta(){var e=wa.current;return e===null?G.pooledCache:e}function Ea(e,t){t===null?D(wa,wa.current):D(wa,t.pool)}function Da(){var e=Ta();return e===null?null:{parent:N._currentValue,pool:e}}var Oa=Error(i(460)),ka=Error(i(474)),Aa=Error(i(542)),ja={then:function(){}};function Ma(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Na(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,La(e),e}throw Fa=t,Oa}}function Pa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Fa=e,Oa):e}}var Fa=null;function Ia(){if(Fa===null)throw Error(i(459));var e=Fa;return Fa=null,e}function La(e){if(e===Oa||e===Aa)throw Error(i(483))}var Ra=null,za=0;function Ba(e){var t=za;return za+=1,Ra===null&&(Ra=[]),Na(Ra,e,t)}function Va(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ha(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Ua(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=vi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=Si(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===ie&&Pa(i)===t.type)?(t=a(t,n.props),Va(t,n),t.return=e,t):(t=bi(n.type,n.key,n.props,null,e.mode,r),Va(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=wi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=xi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=Si(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=bi(t.type,t.key,t.props,null,e.mode,n),Va(n,t),n.return=e,n;case v:return t=wi(t,e.mode,n),t.return=e,t;case ie:return t=Pa(t),f(e,t,n)}if(de(t)||ce(t))return t=xi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ba(t),n);if(t.$$typeof===te)return f(e,la(e,t),n);Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case ie:return n=Pa(n),p(e,t,n,r)}if(de(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ba(n),r);if(n.$$typeof===te)return p(e,t,la(e,n),r);Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case ie:return r=Pa(r),m(e,t,n,r,i)}if(de(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ba(r),i);if(r.$$typeof===te)return m(e,t,n,la(t,r),i);Ha(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),M&&Ii(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return M&&Ii(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),M&&Ii(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),M&&Ii(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return M&&Ii(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),M&&Ii(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===ie&&Pa(l)===r.type){n(e,r.sibling),c=a(r,o.props),Va(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=xi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=bi(o.type,o.key,o.props,null,e.mode,c),Va(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=wi(o,e.mode,c),c.return=e,e=c}return s(e);case ie:return o=Pa(o),b(e,r,o,c)}if(de(o))return h(e,r,o,c);if(ce(o)){if(l=ce(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ba(o),c);if(o.$$typeof===te)return b(e,r,la(e,o),c);Ha(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=Si(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{za=0;var i=b(e,t,n,r);return Ra=null,i}catch(t){if(t===Oa||t===Aa)throw t;var a=gi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Wa=Ua(!0),Ga=Ua(!1),Ka=!1;function qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ja(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=pi(e),fi(e,null,n),t}return li(e,r,t,n),pi(e)}function Za(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function Qa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var $a=!1;function eo(){if($a){var e=ya;if(e!==null)throw e}}function to(e,t,n,r){$a=!1;var i=e.updateQueue;Ka=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===va&&($a=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ka=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function no(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function ro(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)no(n[e],t)}var io=he(null),ao=he(0);function oo(e,t){e=Gl,D(ao,e),D(io,t),Gl=e|t.baseLanes}function so(){D(ao,Gl),D(io,io.current)}function co(){Gl=ao.current,E(io),E(ao)}var lo=he(null),uo=null;function fo(e){var t=e.alternate;D(P,P.current&1),D(lo,e),uo===null&&(t===null||io.current!==null||t.memoizedState!==null)&&(uo=e)}function po(e){D(P,P.current),D(lo,e),uo===null&&(uo=e)}function mo(e){e.tag===22?(D(P,P.current),D(lo,e),uo===null&&(uo=e)):ho(e)}function ho(){D(P,P.current),D(lo,lo.current)}function go(e){E(lo),uo===e&&(uo=null),E(P)}var P=he(0);function _o(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var vo=0,F=null,I=null,L=null,yo=!1,bo=!1,xo=!1,So=0,Co=0,wo=null,To=0;function R(){throw Error(i(321))}function Eo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ar(e[n],t[n]))return!1;return!0}function Do(e,t,n,r,i,a){return vo=a,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Us:Ws,xo=!1,a=n(r,i),xo=!1,bo&&(a=ko(t,n,r,i)),Oo(e),a}function Oo(e){w.H=Hs;var t=I!==null&&I.next!==null;if(vo=0,L=I=F=null,yo=!1,Co=0,wo=null,t)throw Error(i(300));e===null||B||(e=e.dependencies,e!==null&&oa(e)&&(B=!0))}function ko(e,t,n,r){F=e;var a=0;do{if(bo&&(wo=null),Co=0,bo=!1,25<=a)throw Error(i(301));if(a+=1,L=I=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}w.H=Gs,o=t(n,r)}while(bo);return o}function Ao(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(I===null?null:I.memoizedState)!==e&&(F.flags|=1024),t}function jo(){var e=So!==0;return So=0,e}function Mo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function No(e){if(yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}yo=!1}vo=0,L=I=F=null,bo=!1,Co=So=0,wo=null}function Po(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return L===null?F.memoizedState=L=e:L=L.next=e,L}function z(){if(I===null){var e=F.alternate;e=e===null?null:e.memoizedState}else e=I.next;var t=L===null?F.memoizedState:L.next;if(t!==null)L=t,I=e;else{if(e===null)throw F.alternate===null?Error(i(467)):Error(i(310));I=e,e={memoizedState:I.memoizedState,baseState:I.baseState,baseQueue:I.baseQueue,queue:I.queue,next:null},L===null?F.memoizedState=L=e:L=L.next=e}return L}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=Co;return Co+=1,wo===null&&(wo=[]),e=Na(wo,e,t),t=F,(L===null?t.memoizedState:L.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Us:Ws),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===te)return ca(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=F.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=F.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),F.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(z(),I,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(vo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===va&&(d=!0);else if((vo&p)===p){u=u.next,p===va&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,F.lanes|=p,Kl|=p;f=u.action,xo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,F.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Ar(o,e.memoizedState)&&(B=!0,d&&(n=ya,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=z(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ar(o,t.memoizedState)||(B=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=F,a=z(),o=M;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Ar((I||a).memoizedState,n);if(s&&(a.memoizedState=n,B=!0),a=a.queue,ms(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||L!==null&&L.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),G===null)throw Error(i(349));o||vo&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t=Fo(),F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ar(e,n)}catch{return!0}}function Jo(e){var t=di(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=Po();if(typeof e==`function`){var n=e;if(e=n(),xo){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,I,typeof r==`function`?r:zo)}function Zo(e,t,n,r,a){if(zs(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};w.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(M){var n=G.formState;if(n!==null){a:{var r=F;if(M){if(j){b:{for(var i=j,a=Ui;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){j=cf(i.nextSibling),r=i.data===`F!`;break a}}Gi(r)}r=!1}r&&(t=n[0])}}return n=Po(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Is.bind(null,F,r),r.dispatch=n,r=Yo(!1),a=Rs.bind(null,F,!1,r.queue),r=Po(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,F,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(z(),I,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Oa?Aa:e}else r=t;t=z();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(F.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=z(),n=I;if(n!==null)return os(t,n,e);z(),t=t.memoizedState,n=z();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=F.updateQueue,t===null&&(t=Fo(),F.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return z().memoizedState}function ds(e,t,n,r){var i=Po();F.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=z();r=r===void 0?null:r;var a=i.memoizedState.inst;I!==null&&r!==null&&Eo(r,I.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(F.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){F.flags|=4;var t=F.updateQueue;if(t===null)t=Fo(),F.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=z().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Eo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=z();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Eo(t,r[1]))return r[0];if(r=e(),xo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||vo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),F.lanes|=e,Kl|=e,n)}function Ts(e,t,n,r){return Ar(n,t)?n:io.current===null?!(vo&42)||vo&1073741824&&!(q&261930)?(B=!0,e.memoizedState=n):(e=mu(),F.lanes|=e,Kl|=e,t):(e=ws(e,n,r),Ar(e,t)||(B=!0),e)}function Es(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};w.T=s,Rs(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ls(e,t,Sa(c,r),pu(e)):Ls(e,t,r,pu(e))}catch(n){Ls(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ks(e).queue;Es(e,a,t,fe,n===null?Ds:function(){return As(e),n(r)})}function ks(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function As(e){var t=ks(e);t.next===null&&(t=e.alternate.memoizedState),Ls(e,t.next.queue,{},pu())}function js(){return ca(Qf)}function Ms(){return z().memoizedState}function Ns(){return z().memoizedState}function Ps(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Ya(n);var r=Xa(t,e,n);r!==null&&(hu(r,t,n),Za(r,t,n)),t={cache:ma()},e.payload=t;return}t=t.return}}function Fs(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Bs(t,n):(n=ui(e,t,n,r),n!==null&&(hu(n,e,r),Vs(n,t,r)))}function Is(e,t,n){Ls(e,t,n,pu())}function Ls(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Bs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ar(s,o))return li(e,t,i,0),G===null&&ci(),!1}catch{}if(n=ui(e,t,i,r),n!==null)return hu(n,e,r),Vs(n,t,r),!0}return!1}function Rs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(i(479))}else t=ui(e,n,r,2),t!==null&&hu(t,e,2)}function zs(e){var t=e.alternate;return e===F||t!==null&&t===F}function Bs(e,t){bo=yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Vs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Hs={readContext:ca,use:Lo,useCallback:R,useContext:R,useEffect:R,useImperativeHandle:R,useLayoutEffect:R,useInsertionEffect:R,useMemo:R,useReducer:R,useRef:R,useState:R,useDebugValue:R,useDeferredValue:R,useTransition:R,useSyncExternalStore:R,useId:R,useHostTransitionStatus:R,useFormState:R,useActionState:R,useOptimistic:R,useMemoCache:R,useCacheRefresh:R};Hs.useEffectEvent=R;var Us={readContext:ca,use:Lo,useCallback:function(e,t){return Po().memoizedState=[e,t===void 0?null:t],e},useContext:ca,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=Po();t=t===void 0?null:t;var r=e();if(xo){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Po();if(n!==void 0){var i=n(t);if(xo){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Fs.bind(null,F,e),[r.memoizedState,e]},useRef:function(e){var t=Po();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Is.bind(null,F,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(Po(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,F,e.queue,!0,!1),Po().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=F,a=Po();if(M){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),G===null)throw Error(i(349));q&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ps(Ko.bind(null,r,o,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=Po(),t=G.identifierPrefix;if(M){var n=Fi,r=Pi;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=So++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=To++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:js,useFormState:is,useActionState:is,useOptimistic:function(e){var t=Po();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Rs.bind(null,F,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return Po().memoizedState=Ps.bind(null,F)},useEffectEvent:function(e){var t=Po(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},Ws={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(z(),I.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(z(),I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Ws.useEffectEvent=gs;var Gs={readContext:ca,use:Lo,useCallback:Ss,useContext:ca,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=z();return I===null?ws(n,e,t):Ts(n,I.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=z().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:Ms,useHostTransitionStatus:js,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=z();return I===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,I,e,t)},useMemoCache:Ro,useCacheRefresh:Ns};Gs.useEffectEvent=gs;function Ks(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var qs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Ya(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Xa(e,i,r),t!==null&&(hu(t,e,r),Za(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Ya(n);r.tag=2,t!=null&&(r.callback=t),t=Xa(e,r,n),t!==null&&(hu(t,e,n),Za(t,e,n))}};function Js(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!jr(n,r)||!jr(i,a):!0}function Ys(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&qs.enqueueReplaceState(t,t.state,null)}function Xs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Zs(e){ii(e)}function Qs(e){console.error(e)}function $s(e){ii(e)}function ec(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function tc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){return n=Ya(n),n.tag=3,n.payload={element:null},n.callback=function(){ec(e,t)},n}function rc(e){return e=Ya(e),e.tag=3,e}function ic(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){tc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){tc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ac(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&aa(t,n,a,!0),n=lo.current,n!==null){switch(n.tag){case 31:case 13:return uo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ja?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(M)return t=lo.current,t===null?(r!==Wi&&(t=Error(i(423),{cause:r}),Zi(Ei(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ei(r,n),a=nc(e.stateNode,r,a),Qa(e,a),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Wi&&(e=Error(i(422),{cause:r}),Zi(Ei(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ei(o,n),Zl===null?Zl=[o]:Zl.push(o),Y!==4&&(Y=2),t===null)return!0;r=Ei(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=nc(n.stateNode,r,e),Qa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(iu===null||!iu.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=rc(a),ic(a,e,n,r),Qa(n,a),!1}n=n.return}while(n!==null);return!1}var oc=Error(i(461)),B=!1;function sc(e,t,n,r){t.child=e===null?Ga(t,null,n,r):Wa(t,e.child,n,r)}function cc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return sa(t),r=Do(e,t,n,o,a,i),s=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&s&&Ri(t),t.flags|=1,sc(e,t,r,i),t.child)}function lc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!_i(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,uc(e,t,a,r,i)):(e=bi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Nc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?jr:n,n(o,r)&&e.ref===t.ref)return Mc(e,t,i)}return t.flags|=1,e=vi(a,r),e.ref=t.ref,e.return=t,t.child=e}function uc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(jr(a,r)&&e.ref===t.ref)if(B=!1,t.pendingProps=r=a,Nc(e,i))e.flags&131072&&(B=!0);else return t.lanes=e.lanes,Mc(e,t,i)}return vc(e,t,n,r,i)}function dc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return pc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ea(t,a===null?null:a.cachePool),a===null?so():oo(t,a),mo(t);else return r=t.lanes=536870912,pc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Ea(t,null),so(),ho(t)):(Ea(t,a.cachePool),oo(t,a),ho(t),t.memoizedState=null);return sc(e,t,i,n),t.child}function fc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pc(e,t,n,r,i){var a=Ta();return a=a===null?null:{parent:N._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Ea(t,null),so(),mo(t),e!==null&&aa(e,t,r,!0),t.childLanes=i,null}function mc(e,t){return t=Dc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function hc(e,t,n){return Wa(t,e.child,null,n),e=mc(t,t.pendingProps),e.flags|=2,go(t),t.memoizedState=null,e}function gc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(M){if(r.mode===`hidden`)return e=mc(t,r),t.lanes=536870912,fc(null,e);if(po(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return t.lanes=536870912,null}return mc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(po(t),a)if(t.flags&256)t.flags&=-257,t=hc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(B||aa(e,t,n,!1),a=(n&e.childLanes)!==0,B||a){if(r=G,r!==null&&(s=dt(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,di(e,s),hu(r,e,s),oc;Du(),t=hc(e,t,n)}else e=o.treeContext,j=cf(s.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=mc(t,r),t.flags|=4096;return t}return e=vi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function _c(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function vc(e,t,n,r,i){return sa(t),n=Do(e,t,n,r,void 0,i),r=jo(),e!==null&&!B?(Mo(e,t,i),Mc(e,t,i)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,i),t.child)}function yc(e,t,n,r,i,a){return sa(t),t.updateQueue=null,n=ko(t,r,n,i),Oo(e),r=jo(),e!==null&&!B?(Mo(e,t,a),Mc(e,t,a)):(M&&r&&Ri(t),t.flags|=1,sc(e,t,n,a),t.child)}function bc(e,t,n,r,i){if(sa(t),t.stateNode===null){var a=mi,o=n.contextType;typeof o==`object`&&o&&(a=ca(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=qs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},qa(t),o=n.contextType,a.context=typeof o==`object`&&o?ca(o):mi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Ks(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&qs.enqueueReplaceState(a,a.state,null),to(t,r,a,i),eo(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Xs(n,s);a.props=c;var l=a.context,u=n.contextType;o=mi,typeof u==`object`&&u&&(o=ca(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ys(t,a,r,o),Ka=!1;var f=t.memoizedState;a.state=f,to(t,r,a,i),eo(),l=t.memoizedState,s||f!==l||Ka?(typeof d==`function`&&(Ks(t,n,d,r),l=t.memoizedState),(c=Ka||Js(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ja(e,t),o=t.memoizedProps,u=Xs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=mi,typeof l==`object`&&l&&(c=ca(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ys(t,a,r,c),Ka=!1,f=t.memoizedState,a.state=f,to(t,r,a,i),eo();var p=t.memoizedState;o!==d||f!==p||Ka||e!==null&&e.dependencies!==null&&oa(e.dependencies)?(typeof s==`function`&&(Ks(t,n,s,r),p=t.memoizedState),(u=Ka||Js(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&oa(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_c(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Wa(t,e.child,null,i),t.child=Wa(t,null,n,i)):sc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Mc(e,t,i),e}function xc(e,t,n,r){return Yi(),t.flags|=256,sc(e,t,n,r),t.child}var Sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cc(e){return{baseLanes:e,cachePool:Da()}}function wc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Tc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(P.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(M){if(a?fo(t):ho(t),(e=j)?(e=rf(e,Ui),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ni===null?null:{id:Pi,overflow:Fi},retryLane:536870912,hydrationErrors:null},n=Ci(e),n.return=t,t.child=n,Vi=t,j=null)):e=null,e===null)throw Gi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(ho(t),a=t.mode,c=Dc({mode:`hidden`,children:c},a),r=xi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(null,r)):(fo(t),Ec(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(fo(t),t.flags&=-257,t=Oc(e,t,n)):t.memoizedState===null?(ho(t),c=r.fallback,a=t.mode,r=Dc({mode:`visible`,children:r.children},a),c=xi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Wa(t,e.child,null,n),r=t.child,r.memoizedState=Cc(n),r.childLanes=wc(e,s,n),t.memoizedState=Sc,t=fc(null,r)):(ho(t),t.child=e.child,t.flags|=128,t=null);else if(fo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Zi({value:r,source:null,stack:null}),t=Oc(e,t,n)}else if(B||aa(e,t,n,!1),s=(n&e.childLanes)!==0,B||s){if(s=G,s!==null&&(r=dt(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,di(e,r),hu(s,e,r),oc;af(c)||Du(),t=Oc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,j=cf(c.nextSibling),Vi=t,M=!0,Hi=null,Ui=!1,e!==null&&Bi(t,e),t=Ec(t,r.children),t.flags|=4096);return t}return a?(ho(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=vi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=xi(c,a,n,null),c.flags|=2):c=vi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,fc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=Cc(n):(a=c.cachePool,a===null?a=Da():(l=N._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=wc(e,s,n),t.memoizedState=Sc,fc(e.child,r)):(fo(t),n=e.child,e=n.sibling,n=vi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Ec(e,t){return t=Dc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Dc(e,t){return e=gi(22,e,null,t),e.lanes=0,e}function Oc(e,t,n){return Wa(t,e.child,null,n),e=Ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function kc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ra(e.return,t,n)}function Ac(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function jc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=P.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,D(P,o),sc(e,t,r,n),r=M?Ai:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&kc(e,n,t);else if(e.tag===19)kc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_o(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ac(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_o(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ac(t,!0,n,null,a,r);break;case`together`:Ac(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Mc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(aa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=vi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Nc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&oa(e))):!0}function Pc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ta(t,N,e.memoizedState.cache),Yi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,po(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(fo(t),e=Mc(e,t,n),e===null?null:e.sibling):Tc(e,t,n):(fo(t),t.flags|=128,null);fo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(aa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return jc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(P,P.current),r)break;return null;case 22:return t.lanes=0,dc(e,t,n,t.pendingProps);case 24:ta(t,N,e.memoizedState.cache)}return Mc(e,t,n)}function Fc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)B=!0;else{if(!Nc(e,n)&&!(t.flags&128))return B=!1,Pc(e,t,n);B=!!(e.flags&131072)}else B=!1,M&&t.flags&1048576&&Li(t,Ai,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Pa(t.elementType),t.type=e,typeof e==`function`)_i(e)?(r=Xs(e,r),t.tag=1,t=bc(null,t,e,r,n)):(t.tag=0,t=vc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===S){t.tag=11,t=cc(null,t,e,r,n);break a}else if(a===re){t.tag=14,t=lc(null,t,e,r,n);break a}}throw t=ue(e)||e,Error(i(306,t,``))}}return t;case 0:return vc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Xs(r,t.pendingProps),bc(e,t,r,a,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ja(e,t),to(t,r,null,n);var s=t.memoizedState;if(r=s.cache,ta(t,N,r),r!==o.cache&&ia(t,[N],n,!0),eo(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=xc(e,t,r,n);break a}else if(r!==a){a=Ei(Error(i(424)),t),Zi(a),t=xc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(j=cf(e.firstChild),Vi=t,M=!0,Hi=null,Ui=!0,n=Ga(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Yi(),r===a){t=Mc(e,t,n);break a}sc(e,t,r,n)}t=t.child}return t;case 26:return _c(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:M||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[_t]=t,r[vt]=e,Pd(r,n,e),O(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&M&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),Vi=t,Ui=!0,a=j,Zd(t.type)?(lf=a,j=cf(r.firstChild)):j=a),sc(e,t,t.pendingProps.children,n),_c(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&M&&((a=r=j)&&(r=tf(r,t.type,t.pendingProps,Ui),r===null?a=!1:(t.stateNode=r,Vi=t,j=cf(r.firstChild),Ui=!1,a=!0)),a||Gi(t)),Se(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Do(e,t,Ao,null,null,n),Qf._currentValue=a),_c(e,t),sc(e,t,r,n),t.child;case 6:return e===null&&M&&((e=n=j)&&(n=nf(n,t.pendingProps,Ui),n===null?e=!1:(t.stateNode=n,Vi=t,j=null,e=!0)),e||Gi(t)),null;case 13:return Tc(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wa(t,null,r,n):sc(e,t,r,n),t.child;case 11:return cc(e,t,t.type,t.pendingProps,n);case 7:return sc(e,t,t.pendingProps,n),t.child;case 8:return sc(e,t,t.pendingProps.children,n),t.child;case 12:return sc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ta(t,t.type,r.value),sc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,sa(t),a=ca(a),r=r(a),t.flags|=1,sc(e,t,r,n),t.child;case 14:return lc(e,t,t.type,t.pendingProps,n);case 15:return uc(e,t,t.type,t.pendingProps,n);case 19:return jc(e,t,n);case 31:return gc(e,t,n);case 22:return dc(e,t,n,t.pendingProps);case 24:return sa(t),r=ca(N),e===null?(a=Ta(),a===null&&(a=G,o=ma(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},qa(t),ta(t,N,a)):((e.lanes&n)!==0&&(Ja(e,t),to(t,null,null,n),eo()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,ta(t,N,r),r!==a.cache&&ia(t,[N],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),ta(t,N,r))),sc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Ic(e){e.flags|=4}function Lc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Fa=ja,ka}else e.flags&=-16777217}function Rc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Fa=ja,ka}function zc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,Xl|=t)}function Bc(e,t){if(!M)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function V(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vc(e,t,n){var r=t.pendingProps;switch(zi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return V(t),null;case 1:return V(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),na(N),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ji(t)?Ic(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xi())),V(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Ic(t),o===null?(V(t),Lc(t,a,null,r,n)):(V(t),Rc(t,o))):o?o===e.memoizedState?(V(t),t.flags&=-16777217):(Ic(t),V(t),Rc(t,o)):(e=e.memoizedProps,e!==r&&Ic(t),V(t),Lc(t,a,e,r,n)),null;case 27:if(Ce(t),n=ve.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}e=ge.current,Ji(t)?Ki(t,e):(e=ff(a,r,n),t.stateNode=e,Ic(t))}return V(t),null;case 5:if(Ce(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return V(t),null}if(o=ge.current,Ji(t))Ki(t,o);else{var s=Bd(ve.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[_t]=t,o[vt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ic(t)}}return V(t),Lc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ic(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ve.current,Ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Vi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Gi(t,!0)}else e=Bd(e).createTextNode(r),e[_t]=t,t.stateNode=e}return V(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ji(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[_t]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),e=!1}else n=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(go(t),t):(go(t),null);if(t.flags&128)throw Error(i(558))}return V(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[_t]=t}else Yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;V(t),a=!1}else a=Xi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(go(t),t):(go(t),null)}return go(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),zc(t,t.updateQueue),V(t),null);case 4:return xe(),e===null&&Sd(t.stateNode.containerInfo),V(t),null;case 10:return na(t.type),V(t),null;case 19:if(E(P),r=t.memoizedState,r===null)return V(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Bc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=_o(e),o!==null){for(t.flags|=128,Bc(r,!1),e=o.updateQueue,t.updateQueue=e,zc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)yi(n,e),n=n.sibling;return D(P,P.current&1|2),M&&Ii(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>nu&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304)}else{if(!a)if(e=_o(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,zc(t,e),Bc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!M)return V(t),null}else 2*Ie()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,a=!0,Bc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(V(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=P.current,D(P,a?n&1|2:n&1),M&&Ii(t,r.treeForkCount),e);case 22:case 23:return go(t),co(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(V(t),t.subtreeFlags&6&&(t.flags|=8192)):V(t),n=t.updateQueue,n!==null&&zc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&E(wa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),na(N),V(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Hc(e,t){switch(zi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return na(N),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(go(t),t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(go(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(P),null;case 4:return xe(),null;case 10:return na(t.type),null;case 22:case 23:return go(t),co(),e!==null&&E(wa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return na(N),null;case 25:return null;default:return null}}function Uc(e,t){switch(zi(t),t.tag){case 3:na(N),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&go(t);break;case 13:go(t);break;case 19:E(P);break;case 10:na(t.type);break;case 22:case 23:go(t),co(),e!==null&&E(wa);break;case 24:na(N)}}function Wc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Gc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Kc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ro(t,n)}catch(t){Z(e,e.return,t)}}}function qc(e,t,n){n.props=Xs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Jc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Yc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Xc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Zc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[vt]=t}catch(t){Z(e,e.return,t)}}function Qc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function $c(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Qc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function el(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(el(e,t,n),e=e.sibling;e!==null;)el(e,t,n),e=e.sibling}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[_t]=e,t[vt]=n}catch(t){Z(e,e.return,t)}}var rl=!1,H=!1,il=!1,al=typeof WeakSet==`function`?WeakSet:Set,ol=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Fr(e),Ir(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,ol=t;ol!==null;)if(t=ol,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,ol=e;else for(;ol!==null;){switch(t=ol,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Xs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,ol=e;break}ol=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Wc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Xs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Kc(n),r&512&&Jc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ro(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&nl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Xc(n),r&512&&Jc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||rl,!r){t=t!==null&&t.memoizedState!==null||H,i=rl;var a=H;rl=r,(H=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),rl=i,H=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:H||Yc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:H||Yc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:H||Yc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Gc(2,n,t),H||Gc(4,n,t),dl(e,t,n);break;case 1:H||(Yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&qc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:H=(r=H)||n.memoizedState!==null,dl(e,t,n),H=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new al),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new al),t;default:throw Error(i(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(i(160));fl(o,s,a),U=null,ul=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Gc(3,e,e.return),Wc(3,e),Gc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&64&&rl&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=vl;if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[wt]||o[_t]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[_t]=e,O(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[_t]=e,O(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Zc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),n!==null&&r&4&&Zc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(H||n===null||Yc(n,n.return)),e.flags&32){a=e.stateNode;try{tn(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Zc(e,a,n===null?a:n.memoizedProps)),r&1024&&(il=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=vl,vl=gf(t.containerInfo),_l(t,e),vl=a,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}il&&(il=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=rl,d=H;if(rl=u||a,H=d||l,_l(t,e),H=d,rl=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||rl||H||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Qc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;tl(e,$c(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(tn(o,``),n.flags&=-33),tl(e,$c(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;el(e,$c(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Gc(4,t,t.return),Cl(t);break;case 1:Yc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&qc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Yc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Wc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)no(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Kc(a),Jc(a,a.return);break;case 27:nl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Xc(a),Jc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Jc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ha(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Wc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ha(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Wc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Gc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];ol=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Gc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;ol!==null;){var n=ol;switch(n.tag){case 0:case 11:case 15:Gc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ha(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,ol=r;else a:for(n=e;ol!==null;){r=ol;var i=r.sibling,a=r.return;if(ll(r),r===n){ol=null;break a}if(i!==null){i.return=a,ol=i;break a}ol=a}}}var zl={getCacheForType:function(e){var t=ca(N),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return ca(N).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:w.T===null?mt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||M){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),Yl=e}else Yl=536870912;return e=lo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),st(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||rt(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,ql|=o,a=4;break a}o=Ql,Ql=a,o!==null&&(Ql===null?Ql=o:Ql.push.apply(Ql,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=eu+300-Ie(),10<a)){if(yu(r,t,Yl,!Hl),nt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,`Throttled`,-0,0),a);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Nl(t,a,d);var m=(a&62914560)===a?eu-Ie():(a&4194048)===a?tu-Ie():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ar(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,ea=$i=null,No(e),Ra=null,za=0,e=K;for(;e!==null;)Uc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=vi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=rt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ci(),n}function Cu(e,t){F=null,w.H=Hs,t===Oa||t===Aa?(t=Ia(),J=3):t===ka?(t=Ia(),J=4):J=t===oc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,ec(e,Ei(t,e.current)))}function wu(){var e=lo.current;return e===null?!0:(q&4194048)===q?uo===null:(q&62914560)===q||q&536870912?e===uo:!1}function Tu(){var e=w.H;return w.H=Hs,e===null?Hs:e}function Eu(){var e=w.A;return w.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&lo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:lo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,ea=$i=null,W=r,w.H=i,w.A=a,K===null&&(G=null,q=0,ci()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),a=Eu();G!==e||q!==t?(ru=null,nu=Ie()+500,Su(e,t)):Ul=rt(e,t);a:do try{if(J!==0&&K!==null){t=K;var o=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,o,1);break;case 2:case 9:if(Ma(o)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},o.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Ma(o)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(K.tag){case 26:s=K.memoizedState;case 5:case 27:var c=K;if(s?Wf(s):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,o,5);break;case 6:J=0,Vl=null,Pu(e,t,o,6);break;case 8:xu(),Y=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return ea=$i=null,w.H=r,w.A=a,W=n,K===null?(G=null,q=0,ci(),Y):0}function ju(){for(;K!==null&&!Pe();)Mu(K)}function Mu(e){var t=Fc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=yc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=yc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:No(t);default:Uc(n,t),t=K=yi(t,Gl),t=Fc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){ea=$i=null,No(t),Ra=null,za=0;var i=t.return;try{if(ac(e,i,t,n,q)){Y=1,ec(e,Ei(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,ec(e,Ei(n,e.current)),K=null;return}t.flags&32768?(M||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=lo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Vc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Hc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=si,ct(e,n,o,s,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Be,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=w.T,w.T=null,a=T.p,T.p=2,s=W,W|=4;try{sl(e,t,n)}finally{W=s,T.p=a,w.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Fr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Pr(s.ownerDocument.documentElement,s)){if(c!==null&&Ir(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Nr(s,h),v=Nr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,T.p=r,w.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,T.p=r,w.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=w.T,i=T.p,T.p=2,w.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{w.T=t,T.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ha(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=pt(su),r=w.T,a=T.p;try{T.p=32>n?32:n,w.T=null,n=lu,lu=null;var o=au,s=su;if(X=0,ou=au=null,su=0,W&6)throw Error(i(331));var c=W;if(W|=4,Il(o.current),Ol(o,o.current,s,n),W=c,id(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,o)}catch{}return!0}finally{T.p=a,w.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ei(n,t),t=nc(e.stateNode,t,2),e=Xa(e,t,2),e!==null&&(st(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Ei(n,e),n=rc(2),r=Xa(t,n,2),r!==null&&(ic(n,r,t,e),st(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Ie()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=at()),e=di(e,t),e!==null&&(st(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=nt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ie(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=nt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Me(Re,ad):od()})}function dd(){if(nd===0){var e=va;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new An(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ni.length;hd++){var gd=ni[hd];ri(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ri(Jr,`onAnimationEnd`),ri(Yr,`onAnimationIteration`),ri(Xr,`onAnimationStart`),ri(`dblclick`,`onDoubleClick`),ri(`focusin`,`onFocus`),ri(`focusout`,`onBlur`),ri(Zr,`onTransitionRun`),ri(Qr,`onTransitionStart`),ri($r,`onTransitionCancel`),ri(ei,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ii(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!yn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=Et(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}gn(function(){var r=a,i=k(n),s=[];a:{var c=ti.get(e);if(c!==void 0){var l=An,u=e;switch(e){case`keypress`:if(Tn(n)===0)break a;case`keydown`:case`keyup`:l=Jn;break;case`focusin`:u=`focus`,l=zn;break;case`focusout`:u=`blur`,l=zn;break;case`beforeblur`:case`afterblur`:l=zn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Ln;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Rn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Xn;break;case Jr:case Yr:case Xr:l=Bn;break;case ei:l=Zn;break;case`scroll`:case`scrollend`:l=Mn;break;case`wheel`:l=Qn;break;case`copy`:case`cut`:case`paste`:l=Vn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Yn;break;case`toggle`:case`beforetoggle`:l=$n}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=_n(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?Et(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Ln,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Yn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ot(l),h=u==null?c:Ot(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Ot(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=vr;else if(pr(c))if(yr)v=Or;else{v=Er;var y=Tr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&on(r.elementType)&&(v=vr):v=Dr;if(v&&=v(e,r)){mr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&Zt(c,`number`,c.value)}switch(y=r?Ot(r):window,e){case`focusin`:(pr(y)||y.contentEditable===`true`)&&(Rr=y,zr=r,Br=null);break;case`focusout`:Br=zr=Rr=null;break;case`mousedown`:Vr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Vr=!1,Hr(s,n,i);break;case`selectionchange`:if(Lr)break;case`keydown`:case`keyup`:Hr(s,n,i)}var b;if(tr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else lr?sr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ir&&n.locale!==`ko`&&(lr||x!==`onCompositionStart`?x===`onCompositionEnd`&&lr&&(b=wn()):(xn=i,Sn=`value`in xn?xn.value:xn.textContent,lr=!0)),y=Ed(r,x),0<y.length&&(x=new Hn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=cr(n),b!==null&&(x.data=b)))),(b=rr?ur(e,n):dr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Hn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=_n(e,n),i!=null&&r.unshift(Td(e,i,a)),i=_n(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=_n(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=_n(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:an(e,r,o);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:an(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[vt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Xt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}en(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Yt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=T.d;T.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?As(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),O(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),O(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),O(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=kt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);O(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),O(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),O(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ve.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=kt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=kt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=kt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),O(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,O(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),O(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,O(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),O(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,O(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),O(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,O(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),O(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:te,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=gi(3,null,null,t),e.current=a,a.stateNode=e,t=ma(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},qa(a),e}function tp(e){return e?(e=mi,e):mi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Ya(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Xa(e,r,t),n!==null&&(hu(n,e,t),Za(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=di(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ft(t);var n=di(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,up(e,t,n,r)}finally{T.p=a,w.T=i}}function lp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,up(e,t,n,r)}finally{T.p=a,w.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Ie()+500,id(0,!1))}}break;case 31:case 13:s=di(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=k(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Et(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Et(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Dt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[yt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.6`)throw Error(i(527,Lp,`19.2.6`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Zs,s=Qs,c=$s;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[yt]=t.current,Sd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()})),_=c(u(),1),v=g(),y=[{slug:`eglise-laique-vs-eglise-clericale`,title:`Église laïque vs Église cléricale`,summary:`Vidéo source, transcription accessible, étude critique non binaire, contre-traditions, Contre-folie et complément Luce Irigaray sur le féminin, le Nom et la capture.`,tags:[`Église`,`Laïcat`,`Cléricalisme`,`Féminin divin`,`Contre-folie`,`Irigaray`],status:`Exploration`,category:`Ecclésiologie`,date:`2026-05-22`,image:`https://img.youtube.com/vi/y6HvOEovgG8/hqdefault.jpg`,imageAlt:`Miniature de la vidéo Église laïque vs Église cléricale`},{slug:`romer-bible-obscure`,title:`Thomas Römer — Bible, violence, sexualité`,summary:`Analyse factuelle de l’entretien, complétée par une lecture T^ × MNL^ × MCPP^ sur Bible, Trinité, Église, Incarnation, Logos Spermatikos et Traditions.`,tags:[`Bible`,`Thomas Römer`,`T^`,`MNL^`,`MCPP^`,`Traditions`],status:`Exploration`,category:`Theobiblos`,date:`2026-05-20`,image:`https://img.youtube.com/vi/bstGOxKcUGM/hqdefault.jpg`,imageAlt:`Miniature de l’entretien avec Thomas Römer`},{slug:`romer-origine-bible`,title:`D’où vient la Bible ? — Thomas Römer`,summary:`Restitution horodatée de l’entretien et exploration spécialisée des origines bibliques, de Yhwh, d’Ashera, de Moïse, de l’Exode et du monothéisme ancien.`,tags:[`Theobiblos`,`Bible`,`Yhwh`,`Ashera`,`Exode`,`Moïse`,`Monothéisme`],status:`Exploration`,category:`Theobiblos`,date:`2026-05-20`,image:`https://img.youtube.com/vi/Rc6obrXJEbY/hqdefault.jpg`,imageAlt:`Miniature de l’entretien D’où vient la Bible avec Thomas Römer`},{slug:`langlois-bible-technologies`,title:`Michael Langlois — Bible, manuscrits et nouvelles technologies`,summary:`Alphabet, stèle de Mésha, Qumrân, RTI, imagerie multispectrale et scribes éditeurs.`,tags:[`Theobiblos`,`Épigraphie`,`Bible hébraïque`,`Qumrân`],status:`Exploration`,category:`Theobiblos`,date:`2026-05-20`,image:`https://img.youtube.com/vi/nDOXud3QqTI/hqdefault.jpg`,imageAlt:`Miniature de la conférence de Michael Langlois à la BnF`},{slug:`kogi-choix-du-vivant`,title:`Kogi / Le choix du vivant`,summary:`Aluna, Sé, Loi d’Origine, Mamos, Sagas, reliance, altérité radicale et grammaire du vivant.`,tags:[`Kogi`,`Aluna`,`Sé`,`Vivant`,`MNL^`,`MCPP^`],status:`Exploration`,category:`Vivant`,date:`2026-05-18`,image:`https://img.youtube.com/vi/mA8P8DpSJIE/hqdefault.jpg`,imageAlt:`Miniature de la vidéo Kogi / Kággaba — Le choix du vivant`}],b=[`paniquer en rassurant`,`en espérant qu’ils ne l’aient pas modifié`,`le traité pandémie est un scandale absolu`,`le vrai n’est pas nécessairement faux ; il peut être agencé pour produire une autre vérité que la sienne`],x=[{id:`introduction-generale`,title:`Introduction générale`,body:[`L’affaire MV Hondius n’est qu’un point d’entrée. Dans la vidéo, Christian Perronne ne parle pas seulement d’un cluster d’hantavirus sur un navire. Il élargit immédiatement l’analyse à une séquence beaucoup plus vaste : histoire des hantavirus, rôle des rongeurs, souches européennes et américaines, Andes virus, transmission interhumaine rare, réponse de l’OMS, traité pandémie, sorties de l’Argentine et des États-Unis, rôle de l’industrie pharmaceutique, vaccins ARNm, précédents historiques d’expérimentations biologiques et dérives de la gouvernance sanitaire mondiale.`,`La thèse centrale peut être formulée ainsi : un virus réel et connu serait utilisé comme support d’une opération de panique contrôlée, dans laquelle l’OMS rassure verbalement tout en produisant, par le dispositif, les images et les procédures, une scène de gravité maximale.`],quote:`Paniquer en rassurant.`},{id:`hantavirus`,title:`Ce que Perronne dit sur l’hantavirus`,body:[`Perronne rappelle d’abord que l’hantavirus est un virus réel, connu depuis longtemps, principalement associé aux rongeurs. La transmission se fait classiquement par inhalation de particules contaminées provenant d’urine, de salive ou de déjections de rongeurs infectés.`,`Il insiste sur un point important : il ne s’agit pas d’un virus respiratoire classique comparable au SARS-CoV-2. La contamination suppose généralement une exposition spécifique : proximité avec des déjections, poussières contaminées, espace confiné, aérosolisation accidentelle.`,`Le virus n’est donc pas, dans sa logique habituelle, un agent de panique collective mondiale.`]},{id:`histoire-hantan`,title:`Histoire : guerre de Corée, fièvre hémorragique coréenne, rivière Hantan`,body:[`Perronne replace l’hantavirus dans son histoire. Il rappelle les cas documentés pendant la guerre de Corée, notamment chez des militaires américains exposés dans les tranchées.`,`La maladie a d’abord été connue sous le nom de fièvre hémorragique coréenne. Le nom hantavirus vient de la rivière Hantan, dans la zone coréenne. Cette origine historique lui permet de souligner que le virus n’est pas nouveau, qu’il est étudié depuis longtemps, et qu’il ne surgit pas soudainement comme une menace inconnue.`]},{id:`souches-europeennes`,title:`Souches européennes et formes rénales`,body:[`Perronne distingue les formes européennes, notamment celles que l’on peut rencontrer en France ou en Europe, des formes américaines.`,`Selon lui, les souches européennes sont généralement moins virulentes. Elles provoquent rarement des formes hémorragiques graves. Leur complication typique est plutôt une atteinte rénale aiguë, parfois impressionnante mais temporaire, pouvant nécessiter quelques séances de rein artificiel.`,`Il insiste aussi sur un point : ces formes européennes ne se transmettent pas d’homme à homme.`]},{id:`andes-virus`,title:`Souches américaines et Andes virus`,body:[`Perronne distingue ensuite les souches américaines, plus graves dans certaines formes. Les hantavirus d’Amérique du Nord et du Sud peuvent provoquer des syndromes pulmonaires et cardio-pulmonaires sévères.`,`Le cas particulier est l’Andes virus, identifié en Amérique du Sud. C’est cette souche qui est associée au dossier MV Hondius.`,`Perronne souligne que l’Andes virus est une exception parmi les hantavirus, car une transmission interhumaine limitée a été décrite.`]},{id:`transmission-interhumaine`,title:`Transmission interhumaine : exception Andes`,body:[`Selon Perronne, même dans le cas de l’Andes virus, la transmission interhumaine reste rare et limitée. Elle suppose généralement un contact prolongé, intime, familial, confiné ou de soins.`,`Il conteste donc l’idée d’un risque comparable à une pandémie respiratoire globale. Pour lui, l’Andes virus peut justifier des mesures ciblées autour de cas réels et de contacts proches, mais pas une panique administrative massive.`],bullets:[`le risque réel pour certains contacts proches`,`la scénographie d’un danger global`,`la conversion de ce risque limité en argument de gouvernance mondiale`]},{id:`mv-hondius`,title:`L’affaire MV Hondius`,body:[`Perronne présente l’affaire du MV Hondius comme le déclencheur médiatique. Un navire parti d’Argentine devient le centre d’une alerte internationale. Quelques cas graves sont signalés, avec plusieurs décès.`,`Il ne nie pas la réalité des cas. Son point est différent : il considère que la réponse institutionnelle et médiatique est disproportionnée par rapport à la nature connue du virus et au nombre de cas.`,`L’affaire devient selon lui un théâtre sanitaire : navire, malades, décès, évacuations, combinaisons, OMS, pays multiples, frontières, quarantaine, tests, traités internationaux.`]},{id:`origine-naturelle`,title:`Le récit du couple de photographes et la critique des récits d’origine naturelle`,body:[`Perronne critique le récit selon lequel un couple de photographes aurait contracté le virus dans une décharge ou un environnement contaminé en Argentine.`,`Il ne se contente pas de dire que cette explication est impossible. Il la met en parallèle avec d’autres récits d’origine naturelle qui, selon lui, ont servi à fermer trop vite des questions plus gênantes : marchés d’animaux, zoonoses, contacts avec des animaux sauvages, scénarios environnementaux commodes.`,`Sa critique vise un réflexe narratif : dès qu’un pathogène apparaît, un récit d’origine naturelle simple est proposé, puis médiatiquement stabilisé, alors que d’autres pistes pourraient devoir rester ouvertes.`]},{id:`sequencage-suisse`,title:`Séquençage suisse et souche apparemment naturelle`,body:[`Perronne mentionne le séquençage réalisé par un laboratoire suisse. Il indique que la souche identifiée ressemble très fortement à un Andes virus naturel connu.`,`Il reconnaît donc qu’à ce stade, il n’y a pas de preuve publique évidente de manipulation génétique.`,`Mais cette reconnaissance ne clôt pas son interrogation. Pour lui, l’absence d’anomalie immédiatement visible ne suffit pas à fermer toutes les hypothèses. Il faut voir les données complètes, les séquences brutes, les comparaisons, les lignées régionales, les prélèvements environnementaux et la reconstruction précise de la chaîne de transmission.`]},{id:`modification`,title:`“En espérant qu’ils ne l’aient pas modifié”`,body:[`Cette phrase est importante parce qu’elle ne dit pas : le virus est modifié, c’est prouvé. Elle dit : dans le contexte actuel, il serait irresponsable de fermer immédiatement cette hypothèse.`,`Perronne introduit ici une suspicion biologique résiduelle : le virus est réel, la souche semble naturelle selon les données initiales, mais l’histoire récente des laboratoires, des recherches sur les pathogènes, des gains de fonction, des récits officiels fragiles et des intérêts institutionnels impose une vérification complète.`],quote:`En espérant qu’ils ne l’aient pas modifié.`,bullets:[`modification génétique directe`,`sélection en laboratoire`,`adaptation par passages`,`propriété inhabituelle de transmissibilité`,`souche naturelle mais atypique`,`souche naturelle utilisée narrativement sans modification`]},{id:`mise-en-scene`,title:`Mise en scène sanitaire : combinaisons, incohérences visuelles, scaphandres`,body:[`Perronne critique fortement les images de soignants en combinaisons intégrales. Il parle d’une mise en scène de danger biologique extrême.`,`Il relève des incohérences visuelles : certains intervenants apparaissent surprotégés, tandis que d’autres personnes proches de la scène, parfois policiers, chauffeurs, proches ou personnels non spécialisés, semblent beaucoup moins protégés.`,`Pour lui, cette dissymétrie est révélatrice : si le danger exige réellement un niveau maximal de protection, pourquoi toutes les personnes exposées ne sont-elles pas protégées de manière cohérente ? Si le danger n’exige pas ce niveau, pourquoi montrer des combinaisons spectaculaires ?`,`La réponse implicite, selon Perronne, est que l’image sert à produire de la peur.`]},{id:`paniquer`,title:`“Paniquer en rassurant”`,body:[`Perronne ne dit pas que l’OMS panique les populations par un discours ouvertement catastrophiste. Il dit quelque chose de plus subtil : l’OMS rassure verbalement, mais dramatise par les procédures.`,`La structure qu’il décrit repose sur un discours verbal de risque faible et de situation maîtrisée, des images de combinaisons, d’évacuations, de navire et d’isolement, des procédures de quarantaine, tests et coordination internationale, puis une conversion politique par les règlements sanitaires internationaux.`],quote:`L’OMS ne dit pas seulement : n’ayez pas peur. Elle montre surtout : sans nous, vous devriez avoir peur.`},{id:`oms-tedros`,title:`OMS, Tedros et conversion politique de l’événement`,body:[`Perronne critique le rôle de l’OMS et de Tedros. Il considère que l’implication du directeur de l’OMS pour un nombre limité de cas est disproportionnée.`,`Le point central est la conversion politique : l’affaire n’est pas seulement présentée comme un problème médical, mais comme une preuve de la nécessité des International Health Regulations.`],bullets:[`les virus ne respectent pas les frontières`,`il faut une coordination internationale`,`les États ne peuvent pas gérer seuls`,`l’OMS est nécessaire`,`les IHR sont justifiés`]},{id:`argentine`,title:`Argentine : sortie de l’OMS et timing politique`,body:[`Perronne insiste sur le timing avec l’Argentine. L’Argentine vient de quitter ou de décider de quitter l’OMS. Or le navire part d’Argentine. L’Andes virus est lié à l’Amérique du Sud. L’affaire surgit donc comme un contre-récit parfait à la souveraineté sanitaire argentine.`,`Dans sa lecture, l’affaire fonctionne comme une scène pédagogique ou punitive.`],quote:`Vous voulez quitter l’OMS ? Regardez ce qui arrive dès qu’un événement sanitaire transfrontalier apparaît.`},{id:`etats-unis`,title:`États-Unis : contestation de l’OMS et message aux pays dissidents`,body:[`Perronne rattache aussi le dossier aux États-Unis, qui contestent l’OMS et ont engagé ou annoncé une sortie.`,`L’affaire ne viserait donc pas seulement l’Argentine. Elle fonctionnerait aussi comme message à tous les États dissidents : ceux qui veulent reprendre leur souveraineté sanitaire, ceux qui contestent le rôle de l’OMS, ceux qui refusent ou questionnent le traité pandémie.`]},{id:`traite-pandemie`,title:`Traité pandémie : pourquoi Perronne parle de scandale absolu`,body:[`Perronne qualifie le traité pandémie de scandale absolu. Selon lui, le traité pandémie n’est pas un simple instrument technique de coopération. Il représente une architecture de gouvernance mondiale de la santé, susceptible de réduire la souveraineté sanitaire des États.`,`Sa critique ne porte pas seulement sur un pouvoir direct de l’OMS, mais sur un pouvoir de cadrage : catégories de risque, recommandations internationales, pression diplomatique, coordination obligatoire ou quasi obligatoire, standards de réponse, normalisation des mesures, communication publique, circulation des données, accès aux produits médicaux et coût politique de la dissidence.`],quote:`Le pouvoir ne passe pas seulement par l’ordre direct. Il passe par le cadre, la norme, l’urgence, la dépendance et la réputation.`},{id:`pabs`,title:`PABS : pathogènes, séquences, vaccins, diagnostics, bénéfices`,body:[`PABS concerne l’accès aux pathogènes à potentiel pandémique, le partage des séquences génétiques, les bénéfices issus des vaccins, les diagnostics, les thérapeutiques, les contre-mesures médicales, les chaînes de production, l’équité d’accès et la gouvernance de ces flux.`,`Dans cette perspective, le virus n’est pas seulement un objet biologique. Il devient une donnée, une ressource, un signal d’alerte, une justification de coordination, un support de marché et un argument politique.`,`Le MV Hondius devient alors une scène parfaite pour PABS : un pathogène, plusieurs pays, besoin de tests, séquençage, coordination, rapatriement, quarantaine, discours OMS.`]},{id:`gates-oms`,title:`Bill Gates, OMS et conflits d’intérêts structurels`,body:[`Dans la lecture de Christian Perronne, Bill Gates et la Bill & Melinda Gates Foundation occupent une place centrale dans l’architecture contemporaine de la santé mondiale.`,`Le problème, selon cette lecture, n’est pas seulement qu’une fondation privée finance des programmes de santé. Le problème est qu’une organisation internationale présentée comme publique, intergouvernementale et neutre dépend largement de contributions volontaires, souvent fléchées vers des programmes déterminés.`,`L’OMS reconnaît elle-même que les contributions obligatoires des États membres représentent une part minoritaire de son financement. Les contributions obligatoires représentent moins de 20 % du financement de l’organisation, le reste provenant de contributions volontaires. Ces contributions volontaires viennent notamment d’États, d’organisations internationales, de fondations philanthropiques, d’acteurs privés et d’autres partenaires.`,`C’est ici que Perronne situe le problème de fond : lorsque les contributions volontaires deviennent majoritaires, l’agenda sanitaire mondial peut être orienté par les priorités des financeurs.`,`La Bill & Melinda Gates Foundation est l’un des acteurs majeurs de ce système. Elle finance directement l’OMS sur différents programmes, notamment autour de la vaccination, de la polio, des maladies infectieuses, de la surveillance, des diagnostics, de la génomique, de l’épidémiologie et de la préparation pandémique.`,`Elle joue aussi un rôle majeur dans Gavi, l’Alliance du vaccin. Gavi indique que la Gates Foundation est un partenaire fondateur et que ses engagements envers Gavi se chiffrent en milliards de dollars. La fondation Gates a notamment joué un rôle catalyseur dans la création et le développement de cette alliance vaccinale mondiale.`,`Dans la lecture de Perronne, cette architecture crée une situation de conflit d’intérêts structurel. Il ne s’agit pas nécessairement d’un ordre direct donné par Bill Gates à l’OMS. Le problème est plus profond : un pouvoir peut s’exercer par financement, dépendance, programmation, priorités de recherche, choix des maladies ciblées, développement des vaccins, stratégies de surveillance, infrastructures de données, plateformes technologiques et partenariats public-privé.`,`Selon Perronne, Bill Gates n’est donc pas seulement un philanthrope extérieur au système. Il devient un nœud majeur d’un complexe sanitaire mondial où se croisent OMS, Gavi, fondations privées, industrie pharmaceutique, plateformes vaccinales, diagnostics, surveillance épidémiologique, santé globale, préparation pandémique, communication publique et traités sanitaires internationaux.`,`Dans cette perspective, le traité pandémie et le mécanisme PABS ne peuvent pas être lus seulement comme des instruments techniques de coopération. Ils appartiennent à une architecture plus large où pathogènes, séquences génétiques, diagnostics, vaccins, traitements, financements et bénéfices circulent dans un réseau mêlant institutions publiques, fondations privées, États, laboratoires et industriels.`,`Le point critique est donc le suivant : si les mêmes acteurs financent, orientent, promeuvent et bénéficient indirectement d’une architecture centrée sur la vaccination, les diagnostics, la surveillance et les contre-mesures médicales, alors la neutralité de la gouvernance sanitaire mondiale devient une question ouverte.`,`Perronne voit dans ce système une forme de privatisation indirecte de la santé mondiale : l’OMS reste formellement intergouvernementale, mais son agenda peut être partiellement structuré par des flux financiers et des priorités venus d’acteurs non élus.`,`Il faut donc distinguer deux niveaux : le niveau officiel, où Bill Gates et la Gates Foundation financent des programmes de santé mondiale, notamment vaccination, polio, prévention, diagnostics et préparation sanitaire ; et le niveau critique selon Perronne, où cette philanthropie sanitaire crée un pouvoir de cadrage mondial capable d’orienter les priorités de l’OMS et de renforcer une vision vaccinale, technologique, centralisée et public-privé de la santé globale.`],quote:`Le pouvoir ne passe pas seulement par l’ordre direct ; il passe par le financement, les priorités, les infrastructures et la dépendance.`,grid:[[`Gates Foundation`,`OMS / Gavi / programmes vaccinaux`],[`OMS`,`normes / alertes / IHR / traité pandémie`],[`Gavi`,`vaccination globale / marchés / logistique`],[`Industrie`,`diagnostics / vaccins / plateformes / contre-mesures`],[`États`,`financement / application / souveraineté contrainte`]],subsections:[{title:`Le nœud Gates–OMS selon Perronne`,body:[`Bill Gates n’apparaît pas seulement comme financeur. Il apparaît comme opérateur de champ.`,`Il finance. Il oriente. Il soutient Gavi. Il soutient les architectures vaccinales. Il pèse sur la préparation pandémique. Il participe à la construction d’un imaginaire sanitaire mondial centré sur l’anticipation, la surveillance, les vaccins, les diagnostics et les contre-mesures.`,`Dans cette lecture, le problème n’est pas seulement l’existence de financements privés. Le problème est la conversion de ces financements en pouvoir de programmation du réel sanitaire.`]},{title:`Pourquoi ce point est lié au dossier MV Hondius`,body:[`Le dossier MV Hondius / Hantavirus ne concerne pas directement Bill Gates au sens d’une implication opérationnelle directe dans l’événement.`,`Mais il réactive le même système : un pathogène rare, un besoin de séquençage, des diagnostics, une coordination OMS, une mise en scène de risque transfrontalier, une référence aux règlements sanitaires internationaux, un arrière-plan de traité pandémie, une possible relance des contre-mesures médicales et une valorisation des systèmes de préparation pandémique.`,`C’est pour cette raison que la lecture de Perronne intègre Bill Gates : non comme acteur direct de chaque crise, mais comme figure centrale du système global de préparation, vaccination, financement, surveillance et gouvernance sanitaire.`,`Dans la lecture Perronne, Gates n’est pas l’explication unique de l’affaire Hondius ; il est l’un des noms propres du système dans lequel ce type d’affaire devient immédiatement gouvernable, finançable, vaccinable et politiquement exploitable.`]}]},{id:`pcr`,title:`PCR, asymptomatiques et critique de la médecine administrative`,body:[`Perronne critique très fortement l’usage des PCR chez les asymptomatiques. Il considère que tester des bien-portants ou des personnes sans symptômes pertinents relève d’une logique administrative plus que clinique.`,`Il oppose le malade réel, symptomatique, examiné, pris en charge, au cas administratif défini par test, contact, procédure ou exposition théorique.`,`Il juge que la crise Covid a déplacé la médecine vers une bureaucratie du test et du cas contact. Dans l’affaire hantavirus, il voit le même logiciel réactivé.`]},{id:`isolement`,title:`Cas contacts, isolement, chambres à pression négative`,body:[`Perronne critique l’isolement lourd des cas contacts, notamment les chambres à pression négative ou les procédures hospitalières très strictes appliquées à des personnes qui ne sont pas forcément malades.`,`Il juge disproportionné de traiter des contacts comme des menaces biologiques majeures. Selon lui, ce type de mesure produit de la peur, surcharge le système, entretient le réflexe Covid et donne l’impression d’un danger beaucoup plus large qu’il ne l’est réellement.`]},{id:`gestion-alternative`,title:`Gestion alternative du navire selon Perronne`,body:[`Perronne propose ou suggère une gestion alternative plus simple : couper ou contrôler la ventilation, sortir les passagers du navire, identifier les vrais malades, isoler les symptomatiques, inspecter les zones techniques, rechercher les rongeurs, dératiser, nettoyer les zones contaminées et éviter de transformer tous les passagers en suspects sanitaires.`,`L’idée est qu’une gestion matérielle et clinique ciblée aurait été plus rationnelle qu’une scénographie globale.`]},{id:`ventilation`,title:`Ventilation, rongeurs, cale, dératisation`,body:[`Perronne insiste sur le fait que si l’hantavirus se transmet par aérosolisation de particules issues de rongeurs, alors il faut regarder les conditions matérielles : présence de rongeurs, déjections, poussières, zones confinées, ventilation, cale, espaces techniques, nettoyage et circulation de l’air.`,`Il considère que ces questions concrètes sont plus importantes que la mise en scène de combinaisons ou la multiplication des tests administratifs.`]},{id:`traitements`,title:`Traitements : soins symptomatiques, hydroxychloroquine, ivermectine`,body:[`Perronne reconnaît que le traitement officiel de l’hantavirus est principalement symptomatique : oxygène, réanimation, soutien respiratoire, soutien cardio-circulatoire, dialyse si atteinte rénale, soins intensifs.`,`Mais il mentionne aussi des pistes ou données autour de l’hydroxychloroquine et de l’ivermectine. Il ne s’agit pas nécessairement de dire que ces traitements sont homologués ou prouvés comme traitement standard de l’hantavirus ; il affirme plutôt que des pistes existent et que les autorités les écartent trop vite, dans la continuité de ce qu’il reproche à la gestion Covid.`]},{id:`moderna-arnm`,title:`Moderna, ARNm et vaccins hantavirus`,body:[`Perronne dénonce les recherches ou annonces autour d’un vaccin ARNm contre l’hantavirus. Il y voit la répétition d’un schéma : apparition médiatisée d’un risque viral, activation de la peur, justification de nouvelles plateformes vaccinales, intérêt industriel et acceptation accrue de technologies médicales nouvelles.`,`Il critique les vaccins ARNm, qu’il décrit comme relevant de la thérapie génique plutôt que du vaccin classique. Il évoque des risques qu’il associe aux produits ARNm : toxicité, thromboses, effets cardiovasculaires et turbo-cancers.`]},{id:`industrie`,title:`Industrie pharmaceutique et marché des contre-mesures`,body:[`Perronne relie l’affaire à une économie des contre-mesures. Chaque crise virale peut générer tests, diagnostics, vaccins, traitements, contrats, plateformes technologiques, marchés publics, stocks stratégiques, financements et partenariats public-privé.`,`Le problème n’est pas seulement l’existence de produits médicaux. Le problème est que la peur sanitaire peut devenir le moteur d’un marché organisé autour de la menace.`]},{id:`experimentations`,title:`Expérimentations biologiques historiques : Serratia, Guatemala`,body:[`Perronne rappelle des précédents historiques d’expérimentations biologiques menées par des autorités. Il cite notamment la diffusion de bactéries de type Serratia dans des lieux publics, des expérimentations humaines au Guatemala et des opérations reconnues après coup.`,`Le rôle de cette section est important : Perronne veut montrer que l’idée d’expérimentations ou d’abus biologiques institutionnels n’est pas une fiction paranoïaque. Il existe des précédents historiques où des autorités ont exposé des populations ou dissimulé des pratiques.`]},{id:`fort-detrick`,title:`Fort Detrick, Lyme et le livre Bitten`,body:[`Perronne évoque le livre Bitten de Kris Newby, dont il dit avoir rédigé la préface pour l’édition française. Il associe ce livre à l’hypothèse d’une origine ou d’un lien militaire dans l’histoire de la maladie de Lyme, notamment autour de Fort Detrick.`,`Cette partie élargit son propos : le dossier hantavirus est replacé dans une histoire plus large des pathogènes, des laboratoires militaires, des vecteurs biologiques et des récits d’origine contestés.`]},{id:`grippe-aviaire`,title:`Grippe aviaire et barrière d’espèce`,body:[`Perronne aborde aussi la grippe aviaire. Il rappelle que la barrière d’espèce protège généralement l’homme.`,`Il affirme que les cas humains graves sont rares et surviennent surtout dans des contextes d’exposition massive, prolongée et professionnelle, par exemple chez des personnes vivant ou travaillant au contact de milliers de volailles dans des atmosphères confinées.`,`Il conteste donc la transformation automatique de chaque alerte aviaire en menace pandémique humaine.`]},{id:`catastrophisme`,title:`Critique du catastrophisme sanitaire permanent`,body:[`Perronne critique une dynamique récurrente : chaque virus, chaque zoonose, chaque foyer local devient potentiellement la prochaine pandémie.`,`Selon lui, cette logique entretient une urgence permanente. Elle permet de justifier surveillance accrue, tests, stocks, vaccins, traités, pouvoirs d’exception, centralisation, contrôle des populations et alignement des États.`]},{id:`logiciel-covid`,title:`Recyclage du logiciel Covid`,body:[`Perronne voit dans l’affaire hantavirus une reproduction des réflexes Covid : peur médiatique, asymptomatiques, PCR, cas contacts, isolement, quarantaine, OMS, produits médicaux, récit de menace globale, experts, images spectaculaires, argument d’autorité scientifique et culpabilisation des dissidents.`,`Selon lui, le logiciel Covid ne s’est pas arrêté : il est réactivé sur d’autres pathogènes.`]},{id:`synthese`,title:`Synthèse : ce que Perronne cherche à montrer`,body:[`Perronne ne dit pas simplement : il y a un hantavirus. Il dit qu’un virus connu et relativement circonscrit est utilisé comme scène de démonstration pour une gouvernance sanitaire globale.`,`Il ne dit pas seulement : l’OMS ment. Il dit plutôt que l’OMS rassure tout en construisant une scène anxiogène, puis transforme cette scène en preuve de sa propre nécessité.`,`Il ne dit pas seulement : le virus est modifié. Il dit que les données initiales semblent montrer une souche naturelle, mais que dans ce contexte il faut vérifier sérieusement qu’il n’y a pas modification, sélection, adaptation ou récit d’origine trop commode.`],quote:`Le vrai n’est pas nécessairement faux ; il peut être agencé pour produire une autre vérité que la sienne.`}],ee=`Les Kogi, aussi appelés Kogui ou Kággaba, sont l’un des peuples autochtones de la Sierra Nevada de Santa Marta, au nord de la Colombie. Ils appartiennent à un ensemble plus large de peuples de la Sierra, avec les Arhuaco, les Wiwa et les Kankuamo. Leur monde ne peut pas être compris à partir d’une séparation moderne entre nature, culture, religion, politique, écologie ou territoire. Chez eux, la montagne, les rivières, les forêts, les lieux sacrés, les lignées humaines, les ancêtres, les rythmes du vivant et les puissances invisibles forment un même champ relationnel. La Sierra Nevada n’est donc pas simplement le lieu où ils habitent ; elle est un organisme-monde, une matrice vivante, une structure de relations et d’obligations.

Cette précision est essentielle. Une lecture trop rapide ferait des Kogi un peuple “écologique” au sens occidental contemporain, comme s’ils représentaient seulement une sagesse environnementale générale. Or leur rapport au vivant est beaucoup plus profond et beaucoup plus situé. Il ne s’agit pas seulement de respecter la nature, mais de vivre dans un monde où chaque être, chaque lieu, chaque rivière, chaque sommet, chaque pierre et chaque site sacré participe à un ordre relationnel. Le territoire n’est pas une ressource disponible ; il est une mémoire active. Il n’est pas un espace neutre ; il est un tissu d’obligations. Il n’est pas un décor ; il est une forme de présence.

Dans cette perspective, le vivant ne commence pas par l’individu. Il commence par la relation. L’identité n’est pas première. Elle est une stabilisation locale, provisoire, d’un champ relationnel antérieur. Une personne, une communauté, une montagne, une rivière, un site sacré, un chant, un rite ou une parole ne sont jamais des unités isolées. Ce sont des nœuds dans un tissu plus ancien qu’eux. C’est pourquoi on peut formuler, comme principe de lecture, que la reliance précède l’identité. Être, ce n’est pas d’abord être séparé puis entrer ensuite en relation ; être, c’est apparaître dans un réseau de relations qui nous précède, nous traverse et nous oblige.

La Sierra Nevada de Santa Marta est au cœur de cette compréhension. Elle concentre des zones écologiques extrêmement diverses, depuis les basses terres et les forêts jusqu’aux hautes montagnes et aux sommets enneigés. Cette verticalité n’est pas seulement géographique. Elle est aussi cosmologique. Les différents étages du territoire ne sont pas de simples milieux naturels ; ils correspondent à des formes de circulation, de mémoire, de soin, de limite et d’équilibre. Les rivières relient les hauteurs et les basses terres. Les chemins relient les lieux. Les sites sacrés assurent une continuité invisible entre les plans du monde. Ce qui est fait à un endroit peut avoir des conséquences ailleurs, parce que le territoire fonctionne comme un corps relationnel.

Cette vision du territoire est liée à la notion d’Aluna. Aluna peut être comprise comme un champ-mémoire génératif, une pensée originaire, une matrice subtile où les choses existent avant leur manifestation visible. Il ne faut pas réduire Aluna à une “idée”, à une “croyance” ou à une “conscience” au sens psychologique moderne. Aluna désigne plutôt un champ antérieur de relation, de mémoire, de pensée et de formation. Les êtres ne surgissent pas dans le monde comme des objets séparés ; ils sont précédés par une forme de pensée-reliance. Dans Aluna, le visible est déjà porté par l’invisible. La forme visible est précédée par une forme subtile. Le monde manifeste est précédé par un champ de mémoire et de relation.

On pourrait dire, avec prudence, qu’Aluna désigne le champ antérieur où la relation précède la forme. Cette formule ne prétend pas traduire parfaitement la pensée Kogi ; elle propose une lecture structurale. Elle permet de comprendre pourquoi, dans ce monde, aucune manifestation visible ne peut être séparée de ce qui la rend possible. La montagne n’est pas seulement un relief. La rivière n’est pas seulement de l’eau. La forêt n’est pas seulement une biomasse. Le site sacré n’est pas seulement un point géographique. Chaque réalité visible garde une profondeur invisible, et cette profondeur doit être reconnue, entretenue, consultée et respectée.

La notion de Sé se situe dans cette même profondeur. Sé renvoie au registre invisible, originaire, non-créé, lié à la Loi d’Origine. Sé n’est pas simplement un arrière-monde séparé du monde visible. Il est plutôt le plan originaire de co-appartenance, le registre où les êtres sont reliés avant d’être isolés dans des formes visibles. Sé donne à la relation une dimension d’obligation. Le monde n’est pas seulement relié ; il est tenu par des obligations. Il faut demander, offrir, réparer, rendre, respecter les lieux, maintenir les équilibres. La Loi d’Origine n’est donc pas un code juridique moderne. Elle est une grammaire cosmologique de la relation.

Dans cette grammaire, les humains ne sont pas souverains. Ils ne sont pas au-dessus du territoire. Ils ne sont pas les propriétaires du monde. Ils sont des répondants, des gardiens, des médiateurs, parfois des perturbateurs, toujours des êtres pris dans une trame plus large. Les actes humains ont des conséquences qui dépassent l’intention individuelle. Prendre, cultiver, construire, circuler, couper, parler, transmettre, se marier, guérir ou décider implique toujours une relation avec l’ordre invisible du monde. C’est pourquoi les pratiques rituelles, les offrandes, les paiements symboliques, les consultations et les formes de réparation ne sont pas secondaires. Elles maintiennent la circulation entre visible et invisible, entre action matérielle et ordre relationnel.

Les Mamos occupent une place centrale dans cette structure. Ils sont souvent décrits comme des sages, des autorités spirituelles, des prêtres ou des guides rituels, mais ces traductions restent imparfaites. Le Mamo n’est pas seulement un religieux au sens occidental. Il est un spécialiste de la relation entre les plans du monde, un lecteur des signes du territoire, un gardien des équilibres, un médiateur entre les humains, les lieux, les ancêtres, les puissances invisibles et les cycles du vivant. Sa fonction n’est pas de dominer le monde mais de le lire, de l’écouter, de l’entretenir et de rappeler les obligations qui le structurent.

Il faut toutefois éviter de survisibiliser uniquement les Mamos. Les Sagas, femmes de connaissance, appartiennent également au système ancestral. Elles ne doivent pas être réduites à un rôle secondaire, domestique ou décoratif. Elles participent à la transmission, à la sensibilité, à la lecture du vivant et au maintien de la relation avec l’ordre invisible. Dans une réception occidentale, les figures masculines de sages ou de chefs spirituels sont souvent plus facilement identifiées et mises en avant. Or la mention des Sagas oblige à maintenir la structure dissymétrique du système : le savoir n’est pas seulement masculin, la médiation n’est pas seulement masculine, la relation au monde invisible n’est pas portée par un seul pôle.

Une image transmise dans ce travail permet de préciser cette dissymétrie. Elle distingue un régime féminin associé au silence, à la pensée, à l’intériorité et à la stratégie, et un régime masculin associé à la parole, à la matérialité, au mouvement et à la communication. Le régime féminin est formulé par la chaîne SE, NE, NU, LANG. SE désigne l’invisible, le non-créé, l’obscurité. NE désigne la diversité des formes et des disciplines. NU désigne l’essence de tout ce qui existe. LANG désigne les sons, le bruit, la réserve sonore. Le régime masculin est formulé par la chaîne MUL, DI, GABA, SHI, ZHA. MUL désigne le principe du mouvement. DI désigne la vibration. GABA désigne les connexions invisibles. SHI désigne la connaissance des connexions. ZHA désigne l’analyse des visions.

Cette structure est extrêmement riche, à condition de ne pas la transformer en opposition simpliste entre femmes silencieuses et hommes parlants. Le silence féminin n’est pas une absence de parole par infériorité. Il est une stratégie silencieuse, une tenue intérieure du non-créé, de l’obscur, de la diversité des formes, de l’essence et du son latent. Le féminin ne se définit donc pas par le manque de parole, mais par la garde de ce qui précède la parole. Il est silence chargé, réserve sonore, profondeur invisible. De l’autre côté, la parole masculine ne doit pas être comprise comme domination ou bavardage. Elle est communication vibratoire : mouvement, vibration, connaissance des connexions invisibles, analyse des visions. Elle rend transmissible une relation qui demeure en partie invisible.

Le point central de cette structure est l’équilibre. L’équilibre ne signifie pas fusion. Il ne signifie pas que le féminin et le masculin deviennent identiques. Il ne signifie pas que le silence doit être absorbé dans la parole ou que la parole doit retourner au silence sans reste. Il signifie que les deux régimes doivent tenir ensemble sans se remplacer. Le silence stratégique garde le monde dans sa profondeur. La communication vibratoire permet au monde de circuler, de se dire, de se transmettre et d’être interprété. Si le silence disparaît, la parole devient bruit. Si la parole disparaît, le silence ne circule plus. Si l’invisible est oublié, la manifestation devient extraction. Si la manifestation est refusée, l’invisible reste sans passage.

Cette chaîne peut être lue comme une géodésique symbolique du passage entre invisible et visible. SE ouvre le régime de l’invisible, du non-créé et de l’obscurité. NE introduit la diversité des formes. NU donne le noyau d’essence de ce qui existe. LANG introduit le son latent, les sons et le bruit encore contenus dans le silence. MUL met ce champ en mouvement. DI actualise la vibration. GABA maintient les connexions invisibles au cœur même de la communication. SHI devient connaissance des connexions. ZHA devient analyse des visions. Le visible ne sort donc pas directement de l’invisible. Il passe par des seuils : formes, essence, son latent, mouvement, vibration, connexion invisible, connaissance et vision analysée.

Cette structure permet aussi de comprendre la formule de la reliance avant identité. Dans cette perspective, le féminin et le masculin ne sont pas d’abord deux identités closes. Ils sont deux régimes relationnels. Le féminin n’est pas une substance isolée ; il est une position dans le silence, l’invisible, l’obscurité, la diversité des formes et la réserve sonore. Le masculin n’est pas une substance isolée ; il est une position dans le mouvement, la vibration, la communication, les connexions et l’analyse des visions. L’identité vient après la fonction relationnelle. Elle n’est pas abolie, mais elle n’est plus première. Elle devient une configuration locale dans un champ plus large.

Cette pensée conduit directement à l’altérité radicale. L’autre n’est pas simplement l’autre humain. L’autre peut être la montagne, la rivière, la forêt, le site sacré, la pierre, l’animal, le silence, la parole, la vision, le territoire ou le monde invisible. L’autre ne se réduit jamais à mon régime d’accès. Une rivière ne se réduit pas à de l’eau exploitable. Une montagne ne se réduit pas à un relief. Une forêt ne se réduit pas à une ressource. Une vision ne se réduit pas à une image. Une parole ne se réduit pas à un message. Un territoire ne se réduit pas à un espace administrable. Chaque être conserve une part non appropriable.

Cette altérité radicale n’est pas d’abord une morale ajoutée au monde. Elle est structurelle. Parce que le monde est relationnel avant d’être objectivable, chaque être excède sa fonction immédiate. Il n’est jamais totalement disponible. Il ne peut pas être entièrement capturé par l’usage, la mesure, la propriété, la catégorie ou la représentation. L’altérité radicale oblige donc à répondre sans posséder. Elle impose une limite à la prise, à l’extraction, à la réduction et à la totalisation. Elle maintient l’écart entre connaître et posséder, entre voir et absorber, entre parler et épuiser, entre habiter et exploiter.

Le livre Le choix du vivant entre dans cette exploration comme une porte d’entrée contemporaine vers une grammaire du vivant. Il propose neuf principes pour vivre en harmonie avec le vivant : altérité, interdépendance, sens, communication, valeurs, cadre, créativité, temps et transmission. Ces principes sont associés à des notions biologiques ou bio-systémiques comme attraction, rétroaction, apoptose, homéostasie, signalisation cellulaire, endosymbiose, régulation trophique, biomimétisme, plasticité neuronale et mémoire cellulaire. Il faut toutefois être prudent. Ces correspondances ne doivent pas être prises comme une preuve scientifique directe d’Aluna, de Sé ou de la cosmologie Kogi. Elles fonctionnent comme analogies pédagogiques et comme résonances systémiques, non comme démonstrations.

Le premier principe, l’altérité, est décisif. Il confirme que le vivant ne commence pas par l’identité fermée, mais par la rencontre d’un autre, d’une différence, d’un écart, d’un signal ou d’une limite. L’altérité provoque une rétroaction. La rétroaction ouvre une relation. La relation devient interdépendance. L’interdépendance appelle une régulation. La régulation rend possible le sens, la communication, les valeurs, le cadre, la créativité, le temps et la transmission. Le vivant ne se comprend donc pas comme substance isolée, mais comme système relationnel dynamique. Il est altérité reliée, régulée, communicante, créatrice, temporelle et transmissible.

Le deuxième principe, l’interdépendance, indique que rien ne tient seul. Un vivant n’est pas une unité autonome fermée sur elle-même. Il dépend d’échanges, de seuils, de cycles, de milieux, de relations et de pertes. L’association avec l’apoptose rappelle que le vivant ne se maintient pas seulement par croissance et conservation, mais aussi par disparition réglée, par mort cellulaire organisée, par capacité à laisser mourir certaines formes pour que l’ensemble continue. Dans une lecture structurale, l’interdépendance n’est pas seulement l’harmonie des relations ; elle inclut aussi la limite, la coupure, la fin et la transformation.

Le troisième principe, le sens, associé à l’homéostasie, indique que le vivant cherche des équilibres dynamiques. Le sens n’est pas seulement une signification abstraite. Il est orientation, régulation, maintien d’un état viable dans un milieu changeant. Le vivant ne reste pas identique à lui-même ; il se maintient par ajustements. Cette dimension résonne avec la Loi d’Origine : vivre, ce n’est pas imposer une volonté séparée au monde, mais maintenir une relation juste avec les équilibres qui rendent la vie possible.

Le quatrième principe, la communication, associé à la signalisation cellulaire, est particulièrement important pour la chaîne Kogi. Communication ne signifie pas simple émission d’un message. Elle suppose un signal, un milieu, une réception, une interprétation, une réponse et une rétroaction. Dans la chaîne MUL, DI, GABA, SHI, ZHA, la communication vraie n’est pas coupée de l’invisible. Elle passe par le mouvement, la vibration, les connexions invisibles, la connaissance de ces connexions et l’analyse des visions. Communiquer, ce n’est donc pas seulement parler ; c’est rendre transmissible un lien sans prétendre l’épuiser.

Le cinquième principe, les valeurs, associé à l’endosymbiose, rappelle que le vivant se forme par cohabitation, incorporation, association et transformation mutuelle. Une valeur n’est pas seulement une norme morale abstraite ; elle peut être comprise comme ce qui oriente un système vers des formes de coexistence viables. L’endosymbiose montre que certaines formes de vie naissent de relations internes, d’associations devenues constitutives. Cela résonne fortement avec la formule selon laquelle la reliance précède l’identité. Ce que nous appelons identité peut être le résultat d’anciennes relations devenues structurelles.

Le sixième principe, le cadre, associé à la régulation trophique, rappelle que la vie a besoin de limites. Le cadre n’est pas une prison ; il est une condition de circulation. Sans seuils, sans membranes, sans régulations, sans différenciations, le vivant se désorganise. Dans la pensée Kogi, le territoire fonctionne aussi par limites, lignes sacrées, lieux spécifiques, obligations et interdits. L’équilibre ne consiste pas à tout ouvrir indistinctement. Il consiste à maintenir les passages justes, les limites justes, les restitutions justes.

Le septième principe, la créativité, associé au biomimétisme, montre que le vivant invente des formes. Mais cette créativité n’est pas une innovation productiviste ou une optimisation sans limite. Elle est exaptation, variation, adaptation, recomposition, réponse à des contraintes. Elle peut être lue avec NE, la diversité des formes et des disciplines. La créativité ne surgit pas dans un vide ; elle naît d’un champ de formes possibles, de contraintes, de relations et d’équilibres. Le vivant crée parce qu’il est exposé à l’altérité, au temps, aux milieux et aux limites.

Le huitième principe, le temps, associé à la plasticité neuronale, introduit la transformation lente. Le vivant n’est pas instantané. Il apprend, se reconfigure, s’habitue, se sensibilise, se réaccorde ou se rigidifie. Le temps est la condition de la mémoire, de la transmission et de la maturation. Cette dimension est fondamentale pour comprendre les Mamos et les Sagas : leur savoir n’est pas une information rapide, mais une formation longue, une sensibilité acquise, une capacité d’écoute et de lecture du monde. Le temps n’est pas un simple support ; il est une matière de transformation.

Le neuvième principe, la transmission, associé à la mémoire cellulaire, ferme la chaîne sans la clôturer. Transmettre, ce n’est pas répéter à l’identique. C’est faire passer une forme, un savoir, une mémoire, un rythme ou une orientation dans un autre contexte. La transmission suppose sélection, transformation, adaptation et fidélité partielle. Dans le monde Kogi, la transmission ne concerne pas seulement des connaissances verbales. Elle passe par les rites, les lieux, les gestes, les tissages, les chemins, les paroles, les silences, les offrandes et les obligations. La mémoire n’est pas uniquement dans les textes ; elle est dans le territoire et dans les pratiques.

Ces neuf principes peuvent être mis en résonance avec la chaîne Kogi sans les confondre. SE peut résonner avec l’altérité, comme invisible non appropriable. NE peut résonner avec la créativité, comme diversité des formes. NU peut résonner avec le sens et les valeurs, comme essence et orientation du vivant. LANG peut résonner avec la communication latente, comme son ou bruit avant la parole. MUL peut résonner avec le cadre dynamique, comme mouvement structurant. DI peut résonner avec la communication, comme vibration ou signal. GABA peut résonner avec l’interdépendance, comme connexions invisibles. SHI peut résonner avec la connaissance relationnelle. ZHA peut résonner avec la transmission, comme analyse des visions rendue communicable. Ces correspondances ne sont pas des équivalences. Elles sont des rapprochements morphologiques prudents.

La résonance avec MNL^ permet d’affiner les trois régimes Materia, Nox et Lux. Nox ne doit pas être comprise comme simple absence, vide ou obscurité négative. À partir de SE et LANG, Nox devient réserve sonore, profondeur relationnelle, mémoire, temps, altérité, non-capture. Elle est silence chargé de sons non encore adressés. Elle est l’invisible qui ne se donne pas entièrement, mais qui porte la possibilité des formes. Nox garde l’altérité et la mémoire.

Materia, à partir de NE et MUL, ne doit pas être réduite à une matière brute. Elle devient diversité des formes, modulation, discipline, cadre, mouvement, limite et portance vivante. Elle est le milieu structuré dans lequel les relations prennent forme. Elle organise les échanges, les seuils, les régulations et les supports. Materia n’est donc pas l’opposé de l’esprit ; elle est la condition incarnée de la relation.

Lux, à partir de SHI et ZHA, ne doit pas être confondue avec une surexposition. La lumière n’est pas la destruction de l’obscurité. Elle est connaissance des connexions, analyse des visions, manifestation, sens communicable, créativité et transmission. Mais une Lux coupée de Nox devient surexposition. Elle prétend tout rendre visible, tout expliquer, tout posséder. La base Kogi rappelle au contraire que la vraie vision reste reliée aux connexions invisibles. Lux doit donc demeurer traversée par Nox et portée par Materia.

La formule MNL^ enrichie serait alors la suivante : Nox garde l’altérité et la mémoire ; Materia organise les cadres et les échanges ; Lux rend lisibles le sens, la communication et la créativité. Cette formule évite deux dérives. Elle évite de transformer Nox en obscurité vide. Elle évite de transformer Lux en lumière souveraine. Elle évite aussi de réduire Materia à une masse passive. Les trois régimes deviennent des manières de tenir le vivant sans le totaliser.

La résonance avec MCPP^ est tout aussi forte. MCPP^ peut distinguer deux états du phono. LANG correspond au Phono latent : son-source, bruit originaire, silence chargé, vibration non encore émise. DI correspond au Phono actualisé : vibration, mouvement communicable, passage vers matière et vision. Cette distinction est décisive. Tout son n’est pas encore parole. Toute vibration n’est pas encore communication. Toute communication n’est pas encore connaissance. Il existe un passage, une maturation, une actualisation.

MCPP^ devient ainsi une matrice de passage entre silence sonore, vibration communicante et vision analysée. La chaîne SE, NE, NU, LANG, MUL, DI, GABA, SHI, ZHA peut être lue comme une géodésique MCPP^ : invisible, formes, essence, son latent, mouvement, vibration, connexion invisible, connaissance, vision analysée. Elle montre que le visible ne surgit pas directement. Il se forme par médiations. Il traverse des seuils, des vibrations, des liens et des lectures. La vision n’est pas première ; elle vient après la connexion invisible et la connaissance des connexions.

Cette structure impose une prudence méthodologique. Il ne faut pas transformer les Kogi en preuve de MNL^ ou de MCPP^. Il ne faut pas faire d’Aluna ou de Sé des équivalents directs de concepts occidentaux. Il ne faut pas utiliser les Mamos et les Sagas comme figures décoratives dans un imaginaire ésotérique. Il ne faut pas réduire leur monde à un réservoir de symboles disponibles. La résonance Kogi doit rester située, externe, non appropriative, non fondante, non doctrinale. Elle ouvre une comparaison, elle ne fournit pas une validation.

De la même manière, les notions biologiques associées aux neuf principes du vivant doivent rester analogiques. L’apoptose, l’homéostasie, la signalisation cellulaire, l’endosymbiose, la régulation trophique, le biomimétisme, la plasticité neuronale ou la mémoire cellulaire ne prouvent pas une cosmologie. Elles permettent de penser des formes de relation, de régulation, de communication, de mémoire et de transformation. Elles éclairent certaines structures, mais elles ne doivent pas être utilisées comme fondement pseudo-scientifique. Le vivant inspire et met en résonance ; il ne légifère pas directement.

La phrase “tout est écrit dans la nature” doit donc être entendue avec prudence. Comme formule poétique ou pédagogique, elle peut ouvrir une attention au vivant. Mais prise littéralement, elle risque de produire un naturalisme naïf. La nature n’est pas un livre simple dont il suffirait de lire les lois pour fonder directement des normes humaines. Le vivant est complexe, ambivalent, parfois violent, parfois coopératif, toujours situé. Il peut inspirer des analogies puissantes, mais il ne dispense pas de discernement. La sagesse ne consiste pas à copier la nature, mais à apprendre à lire les relations sans les réduire.

Au terme de cette exploration, la base Kogi donne un champ relationnel : Aluna, Sé, Loi d’Origine, Mamos, Sagas. La chaîne SE, NE, NU, LANG, MUL, DI, GABA, SHI, ZHA donne le passage entre silence, son, vibration, connexion et vision. La grille du vivant donne une traduction bio-systémique prudente : altérité, interdépendance, sens, communication, valeurs, cadre, créativité, temps et transmission. Ces trois plans ne doivent pas être fusionnés. Ils doivent rester en résonance, sans hiérarchie et sans capture.

La leçon centrale est que le vivant n’est pas une substance isolée. Il est une altérité reliée, régulée, communicante, créatrice, temporelle et transmissible. Le monde ne commence pas par des individus séparés qui entrent ensuite en relation. Il commence par un tissu de relations dans lequel des formes apparaissent, se stabilisent, se transforment et se transmettent. La reliance précède l’identité. L’altérité radicale empêche toute réduction du silence à la parole, du territoire à la ressource, de la vision à l’image et du monde à son usage.`.split(/\n{2,}/),te=`Résonances avec la Trinité, les missions et les structures du vivant`,S=`L’exploration Kogi peut être prolongée par une lecture théologique prudente, en particulier autour de la Trinité, de la distinction entre Trinité immanente et missions, et des structures du vivant telles qu’elles apparaissent dans les sciences physiques et biologiques. Cette extension ne doit pas être comprise comme une identification directe. Aluna n’est pas Dieu. Sé n’est pas le Père. Les Mamos et les Sagas ne sont pas des figures trinitaires. Les structures du vivant ne prouvent pas la Trinité. Il s’agit plutôt d’une résonance structurale : certaines formes de relation, de procession, de manifestation, de communication, de mémoire et de transmission permettent d’éclairer analogiquement des dimensions déjà présentes dans la théologie trinitaire.

La Trinité immanente désigne Dieu en lui-même, dans la vie éternelle du Père, du Fils et de l’Esprit. Elle ne relève pas d’abord de l’histoire, du monde ou de la création, mais de la relation interne de Dieu. Dans la théologie classique, le Père est source sans être engendré, le Fils est engendré du Père, et l’Esprit procède du Père — et, dans la théologie latine, du Père et du Fils. Ces distinctions ne divisent pas Dieu en trois parties. Elles désignent des relations réelles, irréductibles, non interchangeables, sans hiérarchie d’essence. Le Père n’est pas le Fils, le Fils n’est pas l’Esprit, l’Esprit n’est pas le Père, mais les trois ne sont pas trois dieux. La relation précède ici toute représentation individualiste de l’identité.

C’est à ce niveau que la formule “la reliance précède l’identité” peut entrer en résonance avec la Trinité, à condition d’être corrigée théologiquement. Dans la Trinité, les personnes ne sont pas des individus séparés qui entrent ensuite en relation. Elles sont des relations subsistantes. Leur identité n’est pas extérieure à leur relation. Le Père est Père en relation au Fils. Le Fils est Fils en relation au Père. L’Esprit est Esprit comme procession, souffle, don, lien vivant. La personne divine n’est pas une substance isolée ; elle est identité relationnelle absolue. La théologie trinitaire interdit donc de penser l’identité divine comme solitude première.

La pensée Kogi, avec Aluna, Sé, la Loi d’Origine et la priorité du lien, ne donne évidemment pas une doctrine trinitaire. Mais elle peut servir de résonance négative contre une mauvaise représentation de Dieu comme individu suprême isolé. Si le monde Kogi insiste sur un champ relationnel antérieur aux formes visibles, la Trinité chrétienne affirme, sur un autre plan, que le réel ultime n’est pas solitude mais communion. Là où la modernité tend à partir de l’individu, la Trinité et la pensée relationnelle Kogi obligent toutes deux à déplacer le point de départ : l’être ne se comprend pas sans relation.

La distinction entre Trinité immanente et missions permet d’affiner ce lien. Les missions désignent l’envoi du Fils et de l’Esprit dans l’histoire : le Fils est envoyé dans l’incarnation, l’Esprit est envoyé comme souffle, don, illumination, sanctification, mémoire vivante et fécondité de l’Église. La mission ne crée pas la relation trinitaire ; elle la manifeste dans le monde. Ce qui est éternellement vrai en Dieu se donne historiquement dans la création, l’incarnation, la grâce et la sanctification. Les missions sont donc des actualisations visibles d’une relation invisible antérieure.

Cette structure peut être rapprochée, analogiquement, de la chaîne Kogi. Dans la chaîne SE, NE, NU, LANG, MUL, DI, GABA, SHI, ZHA, le visible ne surgit pas immédiatement de l’invisible. Il passe par des médiations : obscurité, formes, essence, son latent, mouvement, vibration, connexions invisibles, connaissance, analyse des visions. De même, dans la théologie chrétienne, la manifestation historique de Dieu n’épuise pas le mystère immanent. Le Fils incarné rend visible le Père, mais le Père n’est pas capturé par la visibilité du Fils. L’Esprit rend Dieu présent, mais sa présence ne supprime pas l’invisible. La mission rend manifeste sans totaliser.

On peut alors proposer une analogie forte, mais limitée : la Trinité immanente correspond au mystère relationnel non saturable ; les missions correspondent à la manifestation historique de ce mystère ; la création et le vivant correspondent aux lieux où cette manifestation peut être reçue, interprétée, transmise ou refusée. Le danger serait de confondre ces niveaux. La création n’est pas Dieu. Le vivant n’est pas la Trinité. La nature n’est pas une quatrième personne divine. Mais le vivant peut porter des traces analogiques de relation, de don, de différenciation, de communication et de fécondité.

Dans cette perspective, MNL^ peut recevoir une lecture trinitaire exploratoire. Nox peut être comprise comme le retrait non capturable du mystère, non pas comme absence de Dieu, mais comme profondeur non possédable. Materia peut désigner la portance, l’incarnation, le milieu où la relation prend corps. Lux peut désigner la manifestation, la lisibilité, l’éclat, la connaissance et la transmission. Cette triade ne doit pas être identifiée directement à Père, Fils et Esprit. Elle peut toutefois servir à penser une économie de manifestation : le mystère se retire, se porte, s’éclaire ; il ne se donne jamais comme objet total.

La distinction immanence / mission empêche ici une confusion majeure. Dans la Trinité immanente, Dieu n’a pas besoin du monde pour être relation. Le Père, le Fils et l’Esprit ne deviennent pas relationnels parce qu’ils créent. Ils sont éternellement relation. Les missions ne complètent pas Dieu ; elles donnent Dieu au monde. Cela protège contre une dérive panthéiste ou naturaliste. Les structures du vivant peuvent être belles, relationnelles, dynamiques, communicantes ; elles ne sont pas pour autant la vie interne de Dieu. Elles peuvent être des résonances, non des équivalents.

La chaîne Kogi peut aussi être mise en relation avec les missions. SE, comme invisible, non-créé, obscurité, peut évoquer non pas le Père directement, mais la réserve apophatique du mystère divin : Dieu comme source non possédable, non disponible, non réductible à sa manifestation. NE, diversité des formes, peut résonner avec la création comme multiplicité ordonnée, non comme chaos informe. NU, essence de ce qui existe, peut évoquer la profondeur ontologique par laquelle toute chose reçoit sa consistance. LANG, son latent, peut résonner avec le Verbe avant son émission audible, non comme silence vide, mais comme parole contenue, puissance de dire non encore exposée.

MUL, principe du mouvement, peut résonner avec la sortie missionnaire, l’envoi, la dynamique de manifestation. DI, vibration, peut évoquer la parole rendue sensible, le Verbe comme communication incarnée, le souffle comme énergie relationnelle. GABA, connexions invisibles, peut entrer en résonance avec l’Esprit comme lien, communion, circulation non objectivable. SHI, connaissance des connexions, peut évoquer l’intelligence spirituelle, la reconnaissance des liens de grâce, la sagesse qui discerne les rapports. ZHA, analyse des visions, peut évoquer la tâche herméneutique : ne pas seulement voir, mais interpréter, transmettre, purifier les visions.

Cette correspondance doit rester ouverte et auto-annulable. Elle n’est pas une équivalence. Elle ne dit pas “SE est le Père”, “DI est le Fils” ou “GABA est l’Esprit”. Elle dit seulement qu’une structure de passage entre invisible, son, mouvement, vibration, connexion et vision peut aider à penser, analogiquement, le passage entre mystère immanent, mission, manifestation et interprétation. Elle permet surtout d’éviter deux erreurs : d’un côté, réduire Dieu à une présence visible immédiatement disponible ; de l’autre, couper le mystère de toute manifestation concrète.

Les sciences physiques ajoutent un autre niveau de résonance. La physique contemporaine montre que le réel n’est pas seulement constitué d’objets isolés, mais de champs, d’interactions, de forces, de symétries, de ruptures de symétrie, de seuils, de mesures, d’états, de transitions et de relations. Une particule n’est pas simplement une petite bille autonome ; elle se comprend dans un champ, dans un régime d’interaction, dans des conditions de mesure. De même, une forme matérielle n’existe pas indépendamment des relations qui la constituent. Cette dimension ne prouve rien théologiquement, mais elle affaiblit l’imaginaire naïf d’un monde fait d’objets séparés.

Dans une lecture MCPP^, les structures physiques permettent de penser le passage entre champ, vibration, manifestation et mesure. Le son, la lumière, les ondes, les champs gravitationnels, les interactions électromagnétiques ou quantiques ne sont pas à confondre avec Aluna ou Sé. Mais ils offrent une grammaire analogique : le visible dépend de conditions invisibles ; l’apparition dépend d’un régime de relation ; la mesure ne possède pas totalement ce qu’elle rend visible ; l’état local dépend d’un champ plus large. Cette logique rejoint la prudence Kogi : ce qui apparaît n’épuise pas ce qui le porte.

La physique des systèmes complexes et de la thermodynamique non linéaire peut aussi enrichir la réflexion. Les formes vivantes ou pré-vivantes émergent souvent dans des situations de flux, de contraintes, de dissipation, d’auto-organisation et de déséquilibre régulé. Le vivant n’est pas une simple stabilité morte. Il se maintient par échanges, par gradients, par régulations et par transformations. L’équilibre du vivant n’est pas immobilité ; il est dynamique. Cette idée résonne avec la notion Kogi d’équilibre : il ne s’agit pas d’un état figé, mais d’une tenue active des relations entre les plans, les lieux, les êtres et les obligations.

Les sciences biologiques renforcent encore cette lecture. Le vivant est fait de membranes, de signaux, de métabolisme, de rétroactions, de coopérations, de compétitions, de symbioses, de morts cellulaires réglées, de plasticité, de mémoire et de transmission. Une cellule n’existe pas comme une entité fermée absolument autonome. Elle se définit par une membrane qui sépare et relie, par des échanges avec son milieu, par des signaux reçus et émis, par des régulations internes, par une mémoire moléculaire et par une capacité de reproduction ou de transformation. Le vivant est donc un régime de limites ouvertes : il tient parce qu’il distingue, mais il meurt s’il ne communique plus.

Cette structure biologique est très précieuse pour penser l’altérité. Une membrane ne nie pas l’autre ; elle rend possible une relation différenciée avec l’autre. Sans membrane, il n’y a pas de cellule. Sans échanges, il n’y a pas de vie. Sans régulation, il n’y a pas de forme durable. Sans altérité, il n’y a pas de signal. Le vivant commence donc par une différence qui n’est pas simplement opposition, mais condition de relation. Cela rejoint la formule selon laquelle l’altérité n’est pas une morale ajoutée ; elle est une condition morphogénétique.

La biologie de la symbiose permet aussi d’approfondir la phrase “la reliance précède l’identité”. De nombreuses formes vivantes ne sont pas des unités pures, mais des assemblages, des cohabitations, des héritages de relations anciennes. Les mitochondries, par exemple, sont souvent interprétées comme héritage d’une ancienne endosymbiose devenue constitutive des cellules eucaryotes. Sans transformer cette donnée en théologie, elle montre qu’une identité biologique peut être le résultat d’une relation intégrée. Ce que nous appelons “un organisme” est souvent un monde de relations stabilisées.

Les microbiomes, les écosystèmes, les réseaux trophiques et les cycles biogéochimiques prolongent cette logique. Un vivant est toujours plus qu’un individu. Il dépend de populations microbiennes, de milieux, de flux d’énergie, de nutriments, d’autres espèces, de cycles de matière, de conditions climatiques et de relations écologiques. L’individu vivant est une interface. Il est local, mais il est traversé par des réseaux. Cela ne supprime pas son identité ; cela la rend relationnelle. L’identité devient une tenue provisoire dans un champ d’interdépendances.

Dans cette perspective, les neuf principes du vivant prennent une portée plus large. L’altérité correspond à la différence nécessaire au signal et à la relation. L’interdépendance correspond aux réseaux sans lesquels aucun vivant ne se maintient. Le sens correspond à l’orientation régulatrice d’un système qui cherche sa viabilité. La communication correspond aux signaux qui permettent coordination, réponse et adaptation. Les valeurs correspondent, analogiquement, aux attracteurs ou aux orientations qui favorisent la continuation du vivant. Le cadre correspond aux membranes, aux seuils, aux niches et aux régulations. La créativité correspond à l’évolution, à l’exaptation, à la variation et à l’invention morphologique. Le temps correspond à la plasticité, à l’apprentissage, au développement et à la mémoire. La transmission correspond à l’héritage, à la reproduction, à la culture, aux traces et aux lignées.

Il est alors possible de formuler une résonance triangulaire entre Kogi, Trinité et vivant. Le monde Kogi met en avant la relation antérieure, le territoire vivant, l’invisible, la Loi d’Origine et l’équilibre des communications. La Trinité met en avant la relation immanente, la communion sans fusion, la distinction sans séparation, et les missions comme manifestation du mystère. Les sciences du vivant mettent en avant les systèmes relationnels, les membranes, les signaux, les rétroactions, les symbioses, la plasticité et la transmission. Ces trois plans ne se confondent pas. Mais ils résistent ensemble à une même réduction : l’idée que le réel serait composé d’unités isolées, autosuffisantes, sans dette relationnelle.

La Trinité peut alors être lue comme la forme théologique la plus radicale de l’anti-solitude de l’être. Dieu n’est pas solitude absolue, mais communion absolue. Le vivant peut être lu comme un ordre créé dans lequel l’être se manifeste toujours sous forme de relations, de dépendances, de transmissions et de différenciations. La pensée Kogi peut être lue comme une cosmologie territoriale où cette relation prend la forme d’un monde habité par des obligations visibles et invisibles. Dans les trois cas, la relation n’est pas secondaire.

Cependant, il faut maintenir une asymétrie stricte. La Trinité n’est pas un modèle biologique. Le vivant n’est pas une image adéquate de Dieu. Les Kogi ne sont pas des théologiens trinitaires implicites. Les sciences ne confirment pas la foi. La valeur de la comparaison se situe ailleurs : dans la capacité à faire apparaître des structures de relation, de distinction, de circulation, de manifestation et de transmission. Cette comparaison est heuristique, non probatoire. Elle ouvre des passages de pensée, mais elle ne fonde pas une doctrine.

La distinction entre immanence et missions permet de garder cette rigueur. En Dieu, la relation est éternelle et incréée. Dans les missions, cette relation se donne au monde. Dans le vivant, cette donation peut être reçue analogiquement comme création, ordre, fécondité, souffle, temporalité et transmission. Mais le vivant ne remonte pas de lui-même jusqu’à l’essence divine. Il demeure créé, limité, fragile, ambivalent. Il peut être signe, non preuve. Il peut être icône partielle, non possession.

Cette prudence est également nécessaire face aux structures physiques. Les champs, les ondes, les vibrations ou les réseaux ne doivent pas devenir un vocabulaire magique. Parler de vibration ne signifie pas que tout est spirituellement équivalent. Parler de champ ne signifie pas que le champ physique est Dieu. Parler de lumière ne signifie pas que le photon est la grâce. Ces analogies deviennent fécondes seulement si elles restent analogies. Elles permettent de penser autrement, non de court-circuiter les différences entre science, théologie et cosmologie autochtone.

La fécondité de cette extension est donc de proposer une lecture en trois plans. Sur le plan Kogi, Aluna et Sé rappellent que le monde visible est précédé et soutenu par une profondeur relationnelle. Sur le plan trinitaire, la vie immanente de Dieu rappelle que la relation n’est pas une propriété secondaire mais une réalité première, et les missions montrent comment cette relation se manifeste sans s’épuiser. Sur le plan scientifique, les structures physiques et biologiques rappellent que les formes locales émergent de champs, de réseaux, d’interactions, de signaux, de régulations et de transmissions.

La formule synthétique pourrait être la suivante : Aluna/Sé donne une grammaire territoriale de l’invisible relationnel ; la Trinité immanente donne une grammaire théologique de la relation absolue ; les missions donnent une grammaire de la manifestation ; les sciences du vivant donnent une grammaire des relations incarnées, régulées, communicantes et transmissibles. Ces grammaires ne se remplacent pas. Elles se répondent sans se fusionner.

Dans cette lecture, la Trinité immanente peut être pensée comme communion sans confusion ; les missions comme sortie sans perte ; le vivant comme relation sans isolement ; la pensée Kogi comme territoire sans réduction à la ressource. Le Père, le Fils et l’Esprit ne sont pas trois fonctions du monde, mais leur distinction communionnelle empêche de penser l’ultime comme identité solitaire. Les missions du Fils et de l’Esprit empêchent de penser Dieu comme invisible sans manifestation. Le vivant empêche de penser la manifestation comme objet mort. Les Kogi empêchent de penser le territoire comme simple espace exploitable.

La chaîne Kogi peut ainsi recevoir une lecture théologico-cosmologique élargie. SE indique la réserve invisible. NE indique la pluralité des formes. NU indique le noyau d’être. LANG indique la parole encore retenue dans le silence. MUL indique la mise en mouvement. DI indique la vibration communicante. GABA indique la communion invisible. SHI indique la connaissance des liens. ZHA indique l’interprétation des visions. Cette chaîne peut aider à penser toute mission comme passage prudent : ne pas sortir du mystère en le détruisant, ne pas manifester en saturant, ne pas communiquer en possédant, ne pas interpréter en capturant.

Appliquée à MNL^, cette extension donne une triade enrichie. Nox correspond à la réserve du mystère, à l’altérité non possédable, au silence sonore, à la profondeur invisible. Materia correspond à la création comme portance, cadre, incarnation, milieu de relations, membrane et régulation. Lux correspond à la manifestation, à la connaissance des connexions, à la mission, à la lumière non souveraine et à la transmission. Mais Nox, Materia et Lux ne sont pas la Trinité. Elles forment une grammaire de lecture des passages entre mystère, incarnation et manifestation.

Appliquée à MCPP^, cette extension ajoute une dimension missionnelle. Le phono latent correspond à la parole non encore émise, au silence chargé, à LANG. Le phono actualisé correspond à DI, vibration, communication, émission. Le photonique correspond à la visibilité, à la manifestation, à la vision analysée. Les connexions invisibles correspondent à GABA, réseau relationnel non visible qui empêche la lumière de devenir simple surface. MCPP^ devient alors matrice de passage entre silence, parole, lumière et lien.

Cette extension peut aussi enrichir la compréhension de la grâce. La grâce ne serait pas une substance ajoutée au vivant, ni une énergie magique, ni une simple émotion religieuse. Elle pourrait être pensée comme accordage relationnel, restauration d’une circulation, réouverture d’un passage entre invisible, forme, parole, vibration, connaissance et transmission. Dans les missions, la grâce vient du don du Fils et de l’Esprit ; dans le vivant, elle peut être analogiquement reçue comme réparation, fécondité, réorientation, respiration et nouvelle capacité de relation. Mais elle reste théologiquement don, non propriété du système.

La conclusion de cette extension pourrait être formulée ainsi. La pensée Kogi, la théologie trinitaire et les sciences du vivant ne disent pas la même chose, ne parlent pas depuis le même régime et ne doivent pas être confondues. Pourtant, elles permettent ensemble de résister à une ontologie de l’isolement. Elles montrent, chacune à sa manière, que l’identité n’est pas première comme fermeture, que la manifestation n’épuise pas l’invisible, que la communication suppose des connexions, que le vivant se maintient par régulation et transmission, et que l’altérité est une condition de relation. La Trinité immanente donne la profondeur absolue de la relation sans fusion ; les missions donnent la manifestation sans épuisement ; les Kogi donnent le territoire comme monde d’obligations ; les sciences du vivant donnent les structures incarnées de l’interdépendance.

La formule finale serait donc : la Trinité n’est pas expliquée par le vivant, mais le vivant peut devenir lisible comme résonance créée d’une logique relationnelle ; les Kogi ne prouvent pas la Trinité, mais leur monde rappelle que le réel n’est jamais seulement objet ; les sciences ne fondent pas la théologie, mais elles montrent que la forme vivante est réseau, signal, mémoire, seuil, relation et transmission. Ainsi, la reliance précède l’identité non seulement comme intuition cosmologique, mais comme axe transversal : en Dieu comme communion, dans les missions comme don, dans le vivant comme interdépendance, et dans le territoire comme obligation.`.split(/\n{2,}/),ne=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),C=o(((e,t)=>{t.exports=ne()}))();function re({videoId:e,title:t,eyebrow:n,children:r,badges:i=[],actions:a,note:o,className:s=``}){return(0,C.jsxs)(`section`,{className:`video-hero ${s}`,children:[(0,C.jsx)(`div`,{className:`video-frame`,children:(0,C.jsx)(`iframe`,{src:`https://www.youtube.com/embed/${e}`,title:t,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,allowFullScreen:!0})}),(0,C.jsxs)(`div`,{className:`video-copy`,children:[n&&(0,C.jsx)(`p`,{className:`video-eyebrow`,children:n}),(0,C.jsx)(`div`,{className:`video-copy-body`,children:r}),i.length>0&&(0,C.jsx)(`div`,{className:`video-badges`,children:i.map(e=>(0,C.jsx)(`span`,{children:e},e))}),o&&(0,C.jsx)(`p`,{className:`video-note`,children:o}),a&&(0,C.jsx)(`div`,{className:`video-actions`,children:a})]})]})}var ie=[{title:`I. Des hieroglyphes a la naissance de l'alphabet`,timecodes:[`00:05:03`,`00:07:37`,`00:08:29`,`00:10:52`,`00:12:17`,`00:18:01`],summary:[`Langlois presente d'abord la facon dont les nouvelles technologies renouvellent l'etude de l'histoire redactionnelle de la Bible. Il revient ensuite a la naissance de l'ecriture alphabetique : les hieroglyphes egyptiens combinent signes figuratifs, signes de mots et signes de sons. Le principe acrophonique permet de transformer un dessin d'objet en signe sonore, a partir du premier son du nom de cet objet.`,`Dans le Sinai, notamment a Serabit el-Khadem, des locuteurs semitiques adaptent ce principe a leur propre langue. Le proto-alphabet nait ainsi d'un deplacement decisif : l'image ne sert plus seulement a representer, elle devient une unite phonetique. L'exemple de la lettre Aleph / Alpha / A, issue de la stylisation d'une tete de boeuf, permet de visualiser cette transformation.`],essentials:[`acrophonie`,`Serabit el-Khadem`,`proto-alphabet`,`Aleph / Alpha / A`],issue:`Le passage de l'image a la lettre montre que l'ecriture biblique appartient a une longue histoire materielle du signe, ou le visible devient son, puis lettre.`},{title:`II. Continuite de l'ecriture et age possible des traditions bibliques`,timecodes:[`00:12:46`,`00:13:17`,`00:15:44`,`00:23:41`],summary:[`Langlois aborde ensuite le probleme du chainon manquant. On a longtemps suppose un vide important entre les premieres inscriptions alphabetiques anciennes et les ecritures hebraiques plus tardives. Les decouvertes recentes, notamment a Lachish, Jerusalem et dans d'autres sites du Levant, reduisent ce vide.`,`Elles montrent une continuite plus forte de l'usage alphabetique au cours du IIe millenaire et au debut du Ier millenaire av. J.-C. La consequence doit etre formulee avec prudence : il ne s'agit pas de prouver que la Bible etait deja redigee dans sa forme connue, mais de rendre scientifiquement possible l'existence de traditions, sources ou materiaux ecrits plus anciens que ce que l'on imaginait dans certains modeles.`],essentials:[`chainon manquant`,`Lachish`,`Jerusalem`,`traditions ecrites anciennes`],issue:`La question n'est pas : la Bible existait-elle deja ? Elle est : quels milieux, quels supports et quelles pratiques d'ecriture rendaient possible la conservation de traditions anciennes ?`},{title:`III. Stele de Mesha et technologie RTI`,timecodes:[`00:24:56`,`00:25:34`,`00:26:24`,`00:27:02`,`00:29:43`,`00:30:45`,`00:31:08`,`00:35:22`],summary:[`La stele de Mesha, decouverte en 1868 en Jordanie et conservee au Louvre, constitue un temoin epigraphique majeur du IXe siecle av. J.-C. Le roi Mesha de Moab y celebre ses victoires contre Israel. La stele mentionne le royaume d'Israel, Omri, et contient une attestation ancienne du nom YHWH.`,`Langlois presente ensuite l'apport de la RTI, Reflectance Transformation Imaging : plusieurs photographies sont prises sous des eclairages differents, puis recomposees numeriquement pour faire varier virtuellement la lumiere. Cette methode permet de mieux lire les reliefs graves. En croisant la stele abimee avec l'estampage ancien, Langlois travaille notamment sur la lecture Beth David, Maison de David, qui demeure un point de debat scientifique et doit etre presentee avec prudence selon le degre exact de certitude donne par les sources.`],essentials:[`Mesha`,`Moab`,`Israel`,`YHWH`,`RTI`,`Beth David`],issue:`La pierre n'est pas seulement un support ancien ; elle devient une surface relisible par la variation numerique de la lumiere.`},{title:`IV. Imagerie multispectrale, ostraca et Qumran`,timecodes:[`00:37:29`,`00:40:56`,`00:41:19`,`00:43:19`,`00:44:02`,`00:46:24`,`00:47:33`],summary:[`Langlois presente ensuite l'imagerie multispectrale. Cette technique photographie les objets dans des longueurs d'onde invisibles a l'oeil humain, notamment en ultraviolet et en infrarouge. Elle permet de faire apparaitre des traces d'encre effacees, des textes laves, des palimpsestes ou des fragments noircis.`,`L'exemple d'un ostracon de Juda vers 600 av. J.-C. montre qu'un tesson de poterie peut conserver plusieurs etats d'ecriture. La technologie permet de distinguer artificiellement les couches et de restituer des textes invisibles a l'oeil nu. Langlois applique ensuite cette logique aux fragments de Qumran conserves notamment a la BnF. Les manuscrits de la mer Morte, decouverts a partir de 1947, ont fait reculer d'environ mille ans notre acces aux temoins bibliques hebreux par rapport aux grands codex medievaux. Certains fragments noircis ou apparemment illisibles redeviennent lisibles sous infrarouge.`],essentials:[`multispectral`,`ostracon`,`palimpseste`,`Qumran`,`infrarouge`],issue:`Le texte n'est pas toujours absent ; il peut etre simplement situe hors de notre fenetre ordinaire de perception.`},{title:`V. Scribes antiques, Septante et edition du texte`,timecodes:[`00:49:36`,`00:51:31`,`00:55:14`,`00:56:33`,`00:57:24`,`00:58:25`,`00:59:06`,`00:59:41`,`01:00:47`,`01:00:54`],summary:[`La derniere partie porte sur les formes d'ecriture et les variantes textuelles. L'etude des lettres montre une continuite de certaines formes paleo-hebraiques et permet de reevaluer le Pentateuque samaritain : il ne peut pas etre reduit a une falsification medievale tardive, puisque des formes proches sont attestees a Qumran.`,`Langlois analyse ensuite un fragment de Josue 10 lu aux infrarouges. Une variante oppose le verbe marcher au verbe monter. La version grecque ancienne, la Septante, correspond a cette variante, ce qui montre que les traducteurs grecs pouvaient disposer d'un modele hebreu different du texte massoretique actuel. Le cas devient exemplaire : un scribe a pu modifier le texte pour preciser la topographie, accentuer le denivele et renforcer le caractere extraordinaire de l'action. La conclusion de Langlois est donc que les scribes antiques n'etaient pas de simples photocopieurs, mais de veritables editeurs, capables d'adapter, clarifier et actualiser le texte pour leur communaute.`],essentials:[`paleo-hebreu`,`Pentateuque samaritain`,`Josue 10`,`Septante`,`scribes editeurs`],issue:`L'histoire de l'ecriture faconne l'histoire des Ecritures : copier, transmettre et interpreter ne sont pas des operations separees.`}],ae=[{title:`De l'image a la lettre : naissance de l'alphabet`,summary:`Le passage image -> son -> lettre est le seuil fondateur de la page : l'alphabet n'abolit pas l'image, il la convertit en notation phonique.`,details:`Dans le resume horodate, la conference part des hieroglyphes comme systeme mixte : signes figuratifs, logogrammes, phonogrammes et valeurs sonores. Le principe acrophonique transforme un objet nomme en indice phonique : la tete de boeuf devient aleph, puis alpha, puis A. Le developpement thematique relie cette operation aux inscriptions proto-sinaitiques et proto-cananeennes, notamment dans l'horizon de Serabit el-Khadem, ou des locuteurs semitiques au contact de l'ecriture egyptienne adaptent l'image a leur propre langue.`,philology:`L'enjeu philologique est de ne pas confondre forme graphique, valeur phonique et nom de lettre. Une lettre conserve parfois la memoire iconique de son origine tout en fonctionnant comme signe abstrait.`,history:`Historiquement, la reduction d'un systeme graphique complexe a un nombre restreint de signes phonetiques modifie les conditions sociales de l'ecrit.`,theo:`Piste Theobiblos : la lettre garde une trace de l'image qu'elle a traversee ; le texte biblique commence aussi comme histoire de surfaces, d'objets et de seuils de lisibilite.`,sources:[`BnF`,`Bibliographie selective BnF a consulter`,`Travaux sur Serabit el-Khadem et inscriptions proto-sinaitiques`]},{title:`Le chainon manquant et la continuite alphabetique`,summary:`Le vide chronologique entre premieres inscriptions alphabetiques et ecritures hebraiques anciennes est reconfigure par les decouvertes recentes du Levant.`,details:`Selon le resume horodate, Langlois presente le probleme du chainon manquant puis les decouvertes de Lachish, Jerusalem et d'autres sites. L'article de Höflmayer, Misgav, Webster et Streit publie dans Antiquity en 2021 documente une inscription alphabetique de Tel Lachish datee du XVe siecle av. J.-C. et la presente comme un jalon majeur pour le Levant meridional.`,philology:`La continuite ne signifie pas identite parfaite des lettres : il faut suivre les ductus, les formes, les supports, la chronologie et les milieux linguistiques.`,history:`L'enjeu historique est considerable : la presence d'ecritures alphabetiques plus anciennes rend plus plausible l'existence de milieux scribaux capables de conserver, transformer ou amorcer des traditions ecrites.`,theo:`Piste Theobiblos : une tradition n'apparait pas d'un bloc ; elle circule dans des supports partiels, fragmentaires, administratifs, votifs ou monumentaux.`,sources:[`Höflmayer et al., Antiquity, 2021`,`BnF`]},{title:`La stele de Mesha : Moab, Israel, YHWH`,summary:`La stele de Mesha met en contact inscription royale, memoire de guerre, royaumes voisins et attestations extra-bibliques.`,details:`Dans le resume horodate, la stele est introduite par sa decouverte en 1868, son contexte moabite, le conflit avec Israel, la figure d'Omri et la presence du tetragramme YHWH. Le developpement thematique insiste sur la nature royale et politique de l'inscription : elle ne doit pas etre lue comme un simple double de 2 Rois 3, mais comme une inscription de victoire, de legitimite et de memoire.`,philology:`Lire la stele suppose de croiser lettres conservees, lacunes, estampage ancien, photographie et hypotheses de restitution.`,history:`La stele constitue un temoin extra-biblique essentiel pour Moab, Israel, Omri et les relations politiques du IXe siecle av. J.-C.`,theo:`Piste Theobiblos : la Bible dialogue avec des inscriptions de pierre qui ne lui appartiennent pas, mais qui partagent son espace historique et linguistique.`,sources:[`Louvre a verifier`,`Michael Langlois, Semitica 61`,`BnF`]},{title:`RTI : lire la pierre par la lumiere`,summary:`La Reflectance Transformation Imaging transforme la lumiere en outil critique de lecture.`,details:`Dans la conference, la RTI est presentee comme une technique fondee sur plusieurs photographies prises sous differents angles lumineux. Le logiciel permet ensuite de rejouer virtuellement l'eclairage, de produire une lumiere rasante numerique et de mieux percevoir les reliefs graves. La publication de Langlois sur la stele de Mesha souligne que ces nouvelles techniques ameliorent le dechiffrement, notamment lorsqu'elles sont appliquees a la stele et a ses estampages.`,philology:`La RTI ne remplace pas le jugement epigraphique : elle augmente la lisibilite, mais l'identification d'une lettre reste une interpretation.`,history:`La technique permet de rouvrir des inscriptions deja connues sans les manipuler physiquement.`,theo:`Piste Theobiblos : la lumiere n'est pas seulement illumination symbolique ; elle devient methode de lecture des traces.`,sources:[`Michael Langlois, The Kings, the City and the House of David on the Mesha Stele`]},{title:`Maison de David : stele, estampage et debat scientifique`,summary:`La lecture Beth David se situe dans un espace de prudence : importante historiquement, mais dependante de lignes abimees et de restitutions.`,details:`Selon le resume horodate, Langlois croise la stele abimee et l'estampage ancien pour proposer ou confirmer une lecture Maison de David avec prudence scientifique. Sa presentation de 2019 indique que, pour la ligne 31, la mention de la House of David demeure hypothetique mais constitue la lecture la plus probable.`,philology:`L'enjeu tient au degre de certitude : possible, probable, confirme ou hypothetique ne sont pas des equivalents.`,history:`Si elle est retenue, la lecture aurait une importance majeure avec Tel Dan pour l'histoire de la memoire dynastique davidique.`,theo:`Piste Theobiblos : une lettre fragmentaire peut deplacer une cartographie entiere des traditions.`,sources:[`Michael Langlois, publication sur la stele de Mesha`]},{title:`Imagerie multispectrale : voir l'invisible`,summary:`L'ultraviolet et l'infrarouge rendent lisibles des encres, effacements et couches que l'oeil ne distingue plus.`,details:`Dans le resume, Langlois presente l'imagerie multispectrale comme photographie a des longueurs d'onde invisibles, avec des usages sur ostraca, palimpsestes et fragments noircis. Le developpement porte sur la reaction differenciee de l'encre et du support : une surface noire a l'oeil peut redevenir lisible sous infrarouge.`,philology:`Le texte revele par image doit etre etabli, segmente, compare et critique comme tout temoignage manuscrit.`,history:`La methode modifie l'acces aux collections fragiles : elle permet une lecture non destructive et partageable.`,theo:`Piste Theobiblos : l'invisible n'est pas absence ; il peut etre une couche de texte en attente d'un regime de lumiere.`,sources:[`BnF`,`Ressources sur multispectral imaging et manuscrits de Qumran`]},{title:`Ostraca : ecriture quotidienne, militaire et administrative`,summary:`Le tesson inscrit montre que l'ecrit biblique appartient aussi a un monde de pratiques ordinaires.`,details:`L'ostracon est un fragment de poterie recycle comme support d'ecriture. Dans le resume, l'imagerie revele une ecriture effacee ou anterieure sur un ostracon de Juda. Ces supports rappellent que l'ecrit circule dans la correspondance militaire, l'administration, la logistique et les pratiques quotidiennes.`,philology:`La lecture d'un ostracon depend de l'encre, du support, de la casse, du contexte archeologique et de la paleographie.`,history:`Vers 600 av. J.-C., l'ecriture ordinaire de Juda aide a comprendre les milieux ou la culture ecrite biblique devient possible.`,theo:`Piste Theobiblos : l'ecriture sainte ne flotte pas au-dessus de l'ecriture ordinaire ; elle emerge dans une ecologie scribale.`,sources:[`BnF`,`Ressources sur ostraca judeens`]},{title:`Qumran et les manuscrits de la mer Morte`,summary:`Qumran deplace d'environ un millenaire l'histoire manuscrite de la Bible hebraique.`,details:`Le resume rappelle que les decouvertes de Qumran ont bouleverse la connaissance de la Bible et des religions qui l'ont portee. Les fragments conserves a la BnF s'inscrivent dans cet ensemble : textes bibliques, parabibliques, communautaires, en hebreu, arameen et parfois grec.`,philology:`Qumran oblige a travailler par fragments, variantes, familles textuelles et supports endommages.`,history:`Les rouleaux montrent une pluralite textuelle avant la stabilisation medievale du texte massoretique.`,theo:`Piste Theobiblos : le canon se comprend mieux lorsqu'on regarde le champ de variantes qui le precede et l'accompagne.`,sources:[`BnF`,`Notices BnF sur les fragments de la mer Morte`]},{title:`Paleo-hebreu, ecriture carree et traditions samaritaines`,summary:`Les formes d'ecriture portent aussi des memoires communautaires.`,details:`Le resume horodate mentionne le paleo-hebreu et le Pentateuque samaritain. La conference indique que le Pentateuque samaritain ne peut pas etre reduit a une falsification medievale tardive, car des traditions proches sont attestees a Qumran.`,philology:`La difference entre paleo-hebreu et ecriture carree arameenne ou hebraique concerne les formes graphiques, les usages et parfois la valeur identitaire du support.`,history:`Les traditions samaritaines et qumraniennes attestent une pluralite ancienne des formes textuelles.`,theo:`Piste Theobiblos : une tradition scripturaire peut se reconnaitre dans sa lettre, son ductus et son support autant que dans son contenu.`,sources:[`BnF`,`Ressources sur Pentateuque samaritain et Qumran`]},{title:`Septante, texte massoretique et modeles hebreux differents`,summary:`La Septante peut parfois temoigner d'un autre modele hebreu, et pas seulement d'une erreur de traduction.`,details:`Selon le resume, Langlois explique que les traducteurs grecs pouvaient disposer d'un texte hebreu different. La notion de Vorlage devient centrale : une version ancienne peut preserver la trace d'un etat textuel hebreu non identique au texte massoretique.`,philology:`Comparer Septante, Qumran et texte massoretique impose de distinguer traduction, variante, harmonisation et tradition source.`,history:`La Bible antique est un champ pluriel de textes en circulation.`,theo:`Piste Theobiblos : la traduction n'est pas seulement perte ; elle peut etre archive d'un autre etat du texte.`,sources:[`BnF`,`Ressources de critique textuelle biblique`]},{title:`Josue 10 : marcher / monter`,summary:`Une variante verbale devient lieu d'analyse topographique, narrative et theologique.`,details:`Le resume donne le coeur de l'exemple : un fragment de Josue 10 lu aux infrarouges semble correspondre a marcher, tandis que le texte massoretique porte monter ; cette variante correspond a la Septante. Le denivele du trajet permet de comprendre l'intervention scribale comme explicitation topographique et theologique.`,philology:`Le passage marcher -> monter montre qu'une variante minime peut transformer la precision narrative.`,history:`La geographie du recit intervient dans l'histoire du texte.`,theo:`Piste Theobiblos : le scribe n'ajoute pas seulement un mot ; il donne une direction, un relief, une intensite au recit.`,sources:[`BnF`,`Fragment de Josue 10 a verifier sur transcription exacte`]},{title:`Les scribes comme editeurs`,summary:`La transmission biblique est une operation vivante : copie, correction, clarification, variante, traduction.`,details:`Le resume se termine sur une formule forte : les scribes antiques ne sont pas de simples photocopieurs. Ils participent a la transmission active du texte. Copier peut inclure corriger, harmoniser, clarifier, expliciter, adapter a une communaute ou stabiliser une tradition.`,philology:`La critique textuelle devient alors etude des gestes scribaux autant que comparaison de lecons.`,history:`La figure du scribe appartient a une histoire sociale du texte.`,theo:`Piste Theobiblos : l'Ecriture est aussi histoire de l'ecriture, de ses gestes et de ses seuils techniques.`,sources:[`BnF`]},{title:`Theobiblos : Bible comme champ de traces`,summary:`La Bible n'est pas seulement un texte ; elle est une histoire de surfaces, de traces, de supports et de seuils de lisibilite.`,details:`Pierre, tesson, parchemin, encre, relief, effacement, lumiere, infrarouge, variante, scribe, communaute et transmission composent un champ Theobiblos. Cette lecture ne remplace pas l'histoire critique ; elle la met en forme comme cartographie des supports et des passages.`,philology:`Toute lecture commence par une surface et une trace.`,history:`La formation du texte biblique implique des milieux, des techniques et des communautes.`,theo:`Piste Theobiblos : lire la Bible, c'est lire les seuils ou une trace devient lettre, ou une lettre devient tradition, ou une tradition devient Ecriture.`,sources:[`Synthese Theobiblos issue de la page`]}],oe=[[`BnF - Mediatheque : L'ecriture des plus anciens manuscrits de la Bible a la lumiere des nouvelles technologies`,`https://www.bnf.fr/fr/mediatheque/lecriture-des-plus-anciens-manuscrits-de-la-bible-la-lumiere-des-nouvelles-technologies`],[`BnF - Agenda : notice de la conference`,`https://www.bnf.fr/fr/agenda/lecriture-des-plus-anciens-manuscrits-de-la-bible-la-lumiere-des-nouvelles-technologies`],[`Michael Langlois - The Kings, the City and the House of David on the Mesha Stele in Light of New Imaging Techniques`,`https://michaellanglois.org/publications/les-rois-la-cite-et-la-maison-de-david-sur-la-stele-de-mesha-a-la-lumiere-de-nouvelles-techniques-dimagerie/`],[`Felix Hoflmayer, Haggai Misgav, Lyndelle Webster, Katharina Streit - Early alphabetic writing in the ancient Near East`,`https://www.cambridge.org/core/journals/antiquity/article/early-alphabetic-writing-in-the-ancient-near-east-the-missing-link-from-tel-lachish/C73F769B7CF3A7E4E2607958A096B7D8`]],se={alphabet:[`Hieroglyphe`,`Acrophonie`,`Proto-alphabet`,`Paleo-hebreu`,`Ecriture carree`,`Manuscrits bibliques`],technologies:[[`RTI`,`relief`],[`Multispectral`,`encre invisible`],[`Infrarouge`,`fragments noircis`],[`Photogrammetrie`,`surface`],[`Bases de donnees`,`comparaison`],[`IA / traitement d'image`,`segmentation, aide au dechiffrement`]],transmission:[`Texte source`,`Copie`,`Variante`,`Correction`,`Traduction`,`Communaute`,`Canonisation`],supportTable:[[`Pierre`,`Stele de Mesha`,`RTI`,`reliefs, lettres, noms royaux`],[`Tesson`,`Ostracon`,`multispectral`,`couches d'encre, palimpseste`],[`Parchemin`,`Qumran`,`infrarouge`,`texte invisible`],[`Manuscrit`,`Josue 10`,`critique textuelle`,`variantes entre traditions`]]},ce=`https://youtu.be/nDOXud3QqTI`;function le(e){let t=e.split(`:`).map(Number);return t.length===3?t[0]*3600+t[1]*60+t[2]:t[0]*60+t[1]}function ue(e){return e.startsWith(`00:`)?e.slice(3):e}function de({href:e,children:t,variant:n=`ghost`}){return(0,C.jsx)(`a`,{href:e,className:`rounded-full border px-4 py-2 text-sm font-bold transition ${n===`gold`?`border-amber-100/30 bg-amber-100/12 text-amber-50 hover:border-amber-100/52 hover:bg-amber-100/18`:`border-sky-200/14 bg-slate-950/42 text-slate-200 hover:border-cyan-100/30 hover:text-cyan-50`}`,children:t})}function w({id:e,eyebrow:t,title:n,intro:r,children:i,accent:a=`cyan`}){return(0,C.jsxs)(`section`,{id:e,className:`scroll-mt-6 rounded-[30px] border border-amber-100/14 bg-[radial-gradient(circle_at_90%_0%,rgba(216,182,106,0.08),transparent_36%),rgba(5,7,13,0.72)] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)] sm:p-7 lg:p-9`,children:[t&&(0,C.jsx)(`p`,{className:`mb-3 text-xs font-black uppercase tracking-[0.26em] ${a===`gold`?`text-amber-100/72`:a===`red`?`text-[#f0a096]`:`text-cyan-100/68`}`,children:t}),(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold leading-tight text-[#f4efe4] sm:text-3xl`,children:n}),r&&(0,C.jsx)(`p`,{className:`mt-4 max-w-4xl text-sm leading-7 text-[#b8b2a4] sm:text-base sm:leading-8`,children:r}),(0,C.jsx)(`div`,{className:`mt-6`,children:i})]})}function T({items:e}){return(0,C.jsx)(`div`,{className:`flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center`,children:e.map((t,n)=>(0,C.jsxs)(_.Fragment,{children:[(0,C.jsx)(`div`,{className:`rounded-full border border-amber-100/20 bg-[#080a12]/74 px-4 py-3 text-sm font-bold text-[#f4efe4] shadow-[0_0_24px_rgba(216,182,106,0.08)]`,children:t}),n<e.length-1&&(0,C.jsx)(`span`,{className:`hidden text-amber-100/38 md:inline`,children:`→`})]},t))})}function fe(){return(0,C.jsx)(`div`,{className:`grid gap-3 sm:grid-cols-2 lg:grid-cols-3`,children:se.technologies.map(([e,t])=>(0,C.jsxs)(`article`,{className:`rounded-[22px] border border-[#4d6f91]/24 bg-[#080a12]/62 p-4`,children:[(0,C.jsx)(`h3`,{className:`m-0 text-lg font-semibold text-[#f4efe4]`,children:e}),(0,C.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-[#b8b2a4]`,children:t})]},e))})}function pe(){return(0,C.jsx)(`div`,{className:`overflow-x-auto rounded-[24px] border border-amber-100/14`,children:(0,C.jsxs)(`table`,{className:`w-full min-w-[720px] border-collapse bg-[#05070d]/70 text-left text-sm`,children:[(0,C.jsx)(`thead`,{className:`text-xs uppercase tracking-[0.18em] text-amber-100/72`,children:(0,C.jsx)(`tr`,{children:[`Support`,`Exemple`,`Technologie`,`Ce que cela revele`].map(e=>(0,C.jsx)(`th`,{className:`border-b border-amber-100/12 px-4 py-3 font-black`,children:e},e))})}),(0,C.jsx)(`tbody`,{children:se.supportTable.map(e=>(0,C.jsx)(`tr`,{className:`border-b border-amber-100/8 last:border-0`,children:e.map((e,t)=>(0,C.jsx)(`td`,{className:`px-4 py-4 align-top ${t===0?`font-semibold text-[#f4efe4]`:`text-[#b8b2a4]`}`,children:e},e))},e.join(`-`)))})]})})}function me({theme:e,index:t}){return(0,C.jsxs)(`article`,{className:`rounded-[26px] border border-amber-100/14 bg-[linear-gradient(145deg,rgba(8,10,18,0.86),rgba(4,7,14,0.72))] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.24)]`,children:[(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,C.jsxs)(`span`,{className:`rounded-full border border-[#c86b5a]/30 bg-[#c86b5a]/10 px-3 py-1 text-xs font-black text-[#f0a096]`,children:[`Theme `,String(t+1).padStart(2,`0`)]}),e.sources.map(e=>(0,C.jsx)(`span`,{className:`rounded-full border border-[#4d6f91]/20 bg-[#4d6f91]/10 px-3 py-1 text-xs text-[#b8b2a4]`,children:e},e))]}),(0,C.jsx)(`h3`,{className:`mt-4 text-xl font-semibold leading-7 text-[#f4efe4]`,children:e.title}),(0,C.jsx)(`p`,{className:`mt-3 text-sm font-semibold leading-7 text-amber-100/78`,children:e.summary}),(0,C.jsxs)(`div`,{className:`mt-5 grid gap-4 text-sm leading-7 text-[#b8b2a4]`,children:[(0,C.jsx)(`p`,{children:e.details}),(0,C.jsxs)(`div`,{className:`grid gap-3`,children:[(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`b`,{className:`text-[#f4efe4]`,children:`Enjeux philologiques.`}),` `,e.philology]}),(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`b`,{className:`text-[#f4efe4]`,children:`Enjeux historiques.`}),` `,e.history]}),(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`b`,{className:`text-[#f4efe4]`,children:`Enjeux Theobiblos.`}),` `,e.theo]})]})]})]})}function he({movement:e,index:t}){return(0,C.jsxs)(`details`,{open:t===0,className:`group rounded-[26px] border border-amber-100/14 bg-[linear-gradient(145deg,rgba(8,10,18,0.86),rgba(4,7,14,0.74))] p-4 shadow-[0_18px_70px_rgba(0,0,0,0.24)] sm:p-5`,children:[(0,C.jsxs)(`summary`,{className:`flex cursor-pointer list-none items-start justify-between gap-4`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsxs)(`span`,{className:`mb-3 inline-flex rounded-full border border-[#c86b5a]/28 bg-[#c86b5a]/10 px-3 py-1 text-xs font-black text-[#f0a096]`,children:[`Mouvement `,String(t+1).padStart(2,`0`)]}),(0,C.jsx)(`h3`,{className:`m-0 text-xl font-semibold leading-7 text-[#f4efe4]`,children:e.title})]}),(0,C.jsx)(`span`,{className:`mt-1 rounded-full border border-amber-100/16 px-3 py-1 text-xs font-black text-amber-100/72 transition group-open:rotate-45`,children:`+`})]}),(0,C.jsx)(`div`,{className:`mt-5 flex flex-wrap gap-2`,children:e.timecodes.map(e=>(0,C.jsx)(`a`,{href:`https://www.youtube.com/watch?v=nDOXud3QqTI&t=${le(e)}`,target:`_blank`,rel:`noreferrer`,className:`rounded-full border border-[#4d6f91]/30 bg-[#4d6f91]/12 px-3 py-1.5 text-xs font-bold text-cyan-50/82 transition hover:border-cyan-100/42 hover:text-cyan-50`,children:ue(e)},e))}),(0,C.jsx)(`div`,{className:`mt-5 grid gap-4 text-sm leading-7 text-[#b8b2a4] sm:text-[0.95rem]`,children:e.summary.map(e=>(0,C.jsx)(`p`,{children:e},e.slice(0,64)))}),(0,C.jsx)(`div`,{className:`mt-5 flex flex-wrap gap-2`,children:e.essentials.map(e=>(0,C.jsx)(`span`,{className:`rounded-full border border-amber-100/12 bg-amber-100/[0.055] px-3 py-1 text-xs text-amber-50/78`,children:e},e))}),(0,C.jsxs)(`p`,{className:`mt-5 rounded-[20px] border border-[#c86b5a]/22 bg-[#c86b5a]/8 p-4 text-sm font-semibold leading-7 text-[#f4efe4]/88`,children:[`Enjeu : `,e.issue]})]})}function E({navigate:e}){return(0,C.jsx)(`section`,{className:`w-full overflow-x-hidden bg-[#05070d] px-4 py-6 text-[#f4efe4] sm:px-6 lg:px-10`,children:(0,C.jsxs)(`div`,{className:`mx-auto flex w-full max-w-[1180px] flex-col gap-6`,children:[(0,C.jsx)(`button`,{type:`button`,onClick:()=>e(`explorations`),className:`w-fit rounded-full border border-amber-100/18 bg-[#080a12]/70 px-4 py-2 text-sm font-bold text-[#f4efe4] transition hover:border-amber-100/36`,children:`Retour aux explorations`}),(0,C.jsxs)(`header`,{className:`relative overflow-hidden rounded-[30px] border border-amber-100/18 bg-[radial-gradient(circle_at_78%_16%,rgba(216,182,106,0.14),transparent_30%),radial-gradient(circle_at_18%_78%,rgba(200,107,90,0.1),transparent_34%),linear-gradient(135deg,#080a12,#05070d)] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.42)] sm:p-8 lg:p-10`,children:[(0,C.jsx)(`div`,{className:`pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(216,182,106,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(216,182,106,0.026)_1px,transparent_1px)] bg-[size:44px_44px]`}),(0,C.jsxs)(`div`,{className:`relative max-w-5xl`,children:[(0,C.jsx)(`p`,{className:`text-xs font-black uppercase tracking-[0.34em] text-amber-100/70`,children:`Theobiblos / Explorations`}),(0,C.jsxs)(`h1`,{className:`mt-4 text-4xl font-semibold leading-[1.05] tracking-[0.02em] text-[#f4efe4] sm:text-6xl`,children:[`Michael Langlois`,(0,C.jsx)(`span`,{className:`block text-3xl text-amber-100/90 sm:text-5xl`,children:`Bible, manuscrits et nouvelles technologies`})]}),(0,C.jsx)(`p`,{className:`mt-4 max-w-3xl text-base leading-8 text-[#b8b2a4] sm:text-lg`,children:`Restitution horodatee et exploration thematique d'une conference sur l'ecriture des plus anciens manuscrits bibliques.`}),(0,C.jsx)(`div`,{className:`mt-5 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.14em]`,children:[`BnF - 15 juin 2022`,`Duree : 1 h 01`,`Theobiblos / Explorations`].map(e=>(0,C.jsx)(`span`,{className:`rounded-full border border-amber-100/18 bg-amber-100/[0.07] px-3 py-1.5 text-amber-50/82`,children:e},e))}),(0,C.jsxs)(`div`,{className:`mt-6 flex flex-wrap gap-3`,children:[(0,C.jsx)(de,{href:`#video`,variant:`gold`,children:`Voir la video`}),(0,C.jsx)(de,{href:`#resume-horodate`,children:`Aller au resume horodate`}),(0,C.jsx)(de,{href:`#thematiques`,children:`Aller aux thematiques`})]})]})]}),(0,C.jsx)(`nav`,{className:`sticky top-3 z-20 overflow-x-auto rounded-[22px] border border-amber-100/14 bg-[#05070d]/86 p-2 shadow-[0_16px_60px_rgba(0,0,0,0.3)] backdrop-blur`,children:(0,C.jsx)(`div`,{className:`flex min-w-max gap-2`,children:[[`video`,`Video`],[`resume-horodate`,`Resume horodate`],[`thematiques`,`Thematiques`],[`modules`,`Modules visuels`],[`sources`,`Sources`]].map(([e,t])=>(0,C.jsx)(`a`,{href:`#${e}`,className:`rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#b8b2a4] transition hover:bg-amber-100/8 hover:text-amber-50`,children:t},e))})}),(0,C.jsx)(w,{id:`video`,eyebrow:`Source vidéo principale`,title:`Voir la conférence`,children:(0,C.jsx)(re,{videoId:`nDOXud3QqTI`,title:`Michael Langlois - L??criture des plus anciens manuscrits de la Bible ? la lumi?re des nouvelles technologies`,eyebrow:`BnF - 15 juin 2022`,badges:[`Dur?e : 1 h 01`,`Theobiblos`,`Qumr?n`,`Nouvelles technologies`],note:`Conférence de Michael Langlois à la BnF, 15 juin 2022 — restitution structurée à partir du résumé horodaté fourni.`,actions:(0,C.jsx)(de,{href:ce,variant:`gold`,children:`Voir la vidéo source`}),children:(0,C.jsx)(`p`,{className:`text-sm leading-7 text-[#b8b2a4] sm:text-base`,children:`La vidéo reste le premier appui de lecture ; les développements thématiques viennent ensuite comme dossier de recherche.`})})}),(0,C.jsxs)(`div`,{className:`rounded-[22px] border border-amber-100/14 bg-[#080a12]/68 p-4 text-sm leading-7 text-[#b8b2a4]`,children:[(0,C.jsx)(`b`,{className:`text-[#f4efe4]`,children:`Statut de cette page.`}),` Elle distingue restitution horodatee, developpement thematique, sources bibliographiques et pistes Theobiblos. Les formulations attribuees a Michael Langlois restent liees aux passages horodates ; toute extension interpretative est indiquee comme telle.`]}),(0,C.jsxs)(w,{id:`resume-horodate`,eyebrow:`Dans la video / selon le resume horodate`,title:`Resume horodate de la conference`,children:[(0,C.jsx)(`p`,{className:`-mt-1 mb-5 max-w-3xl text-sm leading-7 text-[#b8b2a4]`,children:`Une restitution structuree en cinq mouvements, suivant le deroulement de la video.`}),(0,C.jsx)(`div`,{className:`grid gap-4`,children:ie.map((e,t)=>(0,C.jsx)(he,{movement:e,index:t},e.title))})]}),(0,C.jsx)(w,{id:`thematiques`,eyebrow:`Developpement thematique`,title:`Thematiques de recherche`,intro:`Ces blocs ne sont pas presentes comme une transcription de la conference. Ils developpent, a partir du resume horodate et des sources affichees, les problemes philologiques, historiques et Theobiblos ouverts par l'expose.`,children:(0,C.jsx)(`div`,{className:`grid gap-5 lg:grid-cols-2`,children:ae.map((e,t)=>(0,C.jsx)(me,{theme:e,index:t},e.title))})}),(0,C.jsx)(w,{id:`modules`,eyebrow:`Modules visuels`,title:`Cartes de lecture`,accent:`red`,children:(0,C.jsxs)(`div`,{className:`grid gap-5`,children:[(0,C.jsxs)(`div`,{className:`rounded-[26px] border border-amber-100/14 bg-[#080a12]/68 p-5`,children:[(0,C.jsx)(`h3`,{className:`m-0 text-xl font-semibold text-[#f4efe4]`,children:`De l'image a la lettre`}),(0,C.jsx)(`div`,{className:`mt-5`,children:(0,C.jsx)(T,{items:se.alphabet})})]}),(0,C.jsxs)(`div`,{className:`rounded-[26px] border border-amber-100/14 bg-[#080a12]/68 p-5`,children:[(0,C.jsx)(`h3`,{className:`m-0 text-xl font-semibold text-[#f4efe4]`,children:`Technologies de lecture`}),(0,C.jsx)(`div`,{className:`mt-5`,children:(0,C.jsx)(fe,{})})]}),(0,C.jsxs)(`div`,{className:`rounded-[26px] border border-amber-100/14 bg-[#080a12]/68 p-5`,children:[(0,C.jsx)(`h3`,{className:`m-0 text-xl font-semibold text-[#f4efe4]`,children:`Transmission active`}),(0,C.jsx)(`div`,{className:`mt-5`,children:(0,C.jsx)(T,{items:se.transmission})})]}),(0,C.jsx)(pe,{})]})}),(0,C.jsx)(w,{id:`sources`,eyebrow:`Sources scientifiques / bibliographiques`,title:`Bibliographie et ressources`,children:(0,C.jsx)(`div`,{className:`grid gap-3`,children:oe.map(([e,t])=>(0,C.jsx)(`a`,{href:t,target:`_blank`,rel:`noreferrer`,className:`rounded-[20px] border border-amber-100/14 bg-[#080a12]/68 p-4 text-sm font-semibold leading-6 text-[#f4efe4] transition hover:border-amber-100/36 hover:text-amber-100`,children:e},t))})})]})})}var D={sections:[{title:`Préambule`,content:[``,`L’enjeu n’est pas de juger les lectures bibliques, ni de classer les approches en bonnes ou mauvaises. Il s’agit plutôt de décrire des **régimes d’actualisation du champ biblique**.`,``,`Une lecture historique, une lecture liturgique, une lecture dogmatique, une lecture mystique, une lecture critique, une lecture ecclésiale ou une lecture existentielle ne produisent pas le même état du champ. Chacune opère une mesure locale. Chacune rend visibles certains éléments, en laisse d’autres en latence, organise certains rapports, modifie certaines trajectoires de sens.`,``,`La question devient donc :`,``,`**Comment le champ biblique s’actualise-t-il selon différents régimes de lecture, sans qu’un seul régime soit confondu avec la totalité du champ ?**`,``,`Dans cette perspective, la Bible n’est pas seulement un objet textuel. Elle est un **champ scripturaire incarné**, traversé par des langues, des récits, des mémoires, des corps, des liturgies, des institutions, des conflits, des traditions, des traductions, des pertes, des réceptions et des recommencements.`,``,``]},{title:`1. Le déplacement initial : de la Bible-bloc au champ biblique`,content:[``,`L’entretien avec Thomas Römer déplace d’abord la perception de la Bible. Elle n’apparaît plus comme un volume homogène, stable, immédiatement transparent. Elle apparaît comme une **bibliothèque**, c’est-à-dire comme un ensemble de textes hétérogènes, formés dans la durée, reçus dans des traditions différentes, organisés selon des canons distincts.`,``,`Ce déplacement n’a pas besoin d’être lu comme une attaque contre la Bible. Il peut être compris comme un changement de base d’observation.`,``,`Dans une base de lecture compacte, la Bible apparaît comme unité forte : un Livre, une Parole, une continuité, une autorité, une transmission.`,``,`Dans une base historico-philologique, la Bible apparaît comme pluralité : langues, couches, rédactions, variantes, canons, reprises, contextes, déplacements.`,``,`Dans une base liturgique, la Bible apparaît comme parole proclamée, chantée, ritualisée, incorporée dans une communauté.`,``,`Dans une base théologique, elle apparaît comme espace de révélation, de promesse, d’alliance, de jugement, de sagesse, d’accomplissement.`,``,`Dans une base existentielle, elle apparaît comme texte de confrontation, de consolation, de crise, de conversion, de blessure ou de relèvement.`,``,`Aucune de ces bases ne peut épuiser le champ. Chacune produit une visibilité locale. La difficulté commence lorsqu’une base locale se prend pour la totalité du champ.`,``,`La lecture de Römer renforce principalement la **Materia textuelle** : elle rend visibles les strates, les supports, les transmissions, les conditions historiques, les différences canoniques, les écarts entre texte ancien et usages modernes. Elle ne supprime pas les autres bases ; elle oblige seulement à ne pas les faire fonctionner comme si cette matérialité n’existait pas.`,``,`La Bible devient alors non pas moins riche, mais plus complexe : elle n’est pas seulement un texte à croire, ni seulement un texte à expliquer, ni seulement un texte à critiquer, ni seulement un texte à célébrer. Elle est un champ de co-présence où ces opérations se croisent.`,``,``]},{title:`2. T^ : tenue du champ sans totalisation`,content:`(Dans une lecture T^, la Bible peut être pensée comme un **holochamp scripturaire** : un champ de co-présence où plusieurs configurations locales tiennent ensemble sans se résoudre dans une synthèse simple.((T^ n’ajoute pas une doctrine supplémentaire. Il donne une manière de maintenir le champ ouvert sans le dissoudre.((La Bible contient plusieurs régimes de parole : récit, loi, prophétie, sagesse, chant, apocalypse, évangile, lettre, généalogie, mythe, prière, mémoire, polémique, bénédiction, plainte, vision, exhortation. Ces régimes ne sont pas interchangeables. Une loi ne fonctionne pas comme un psaume. Un récit d’origine ne fonctionne pas comme une apocalypse. Une parabole ne fonctionne pas comme une généalogie. Un oracle prophétique ne fonctionne pas comme une lettre paulinienne.((Le champ biblique est donc traversé par des **configurations locales**. Chaque configuration possède sa densité, sa portance, son mode de visibilité, son rythme, sa temporalité.((T^ permet de ne pas rabattre ces configurations sur une seule modalité. Il maintient l’écart entre :((- le texte comme document historique ;(- le texte comme parole liturgique ;(- le texte comme mémoire communautaire ;(- le texte comme lieu de théologie ;(- le texte comme machine symbolique ;(- le texte comme archive de violences et de consolations ;(- le texte comme espace de réinterprétation ;(- le texte comme seuil de rencontre.((Ce maintien n’est pas neutralité molle. C’est une tenue. Le champ n’est pas abandonné à l’éclatement ; il n’est pas non plus comprimé dans une unité artificielle. Il demeure en tension.((T^ permet donc de formuler ceci :((**La Bible n’est pas une totalité lisse ; elle est une co-présence structurée de voix, de strates et de régimes, dont l’unité ne peut être pensée qu’en maintenant les écarts internes.**((Cette unité n’est pas une uniformité. Elle ressemble davantage à une portance distribuée : le champ tient parce que plusieurs zones, plusieurs rythmes et plusieurs mémoires restent en relation, sans fusion.((`.split(`(`)},{title:`3. MNL^ : Materia, Nox, Lux comme régimes de traversée`,content:`(La grammaire MNL^ permet d’éviter une lecture plate de la Bible. Elle ne classe pas les éléments en bons ou mauvais. Elle décrit trois régimes co-présents.((### Materia : la chair textuelle((Materia désigne l’épaisseur concrète de l’Écriture.((La Bible existe dans des langues : hébreu, araméen, grec. Elle existe dans des supports : rouleaux, manuscrits, fragments, codex, traductions, éditions. Elle existe dans des institutions : temple, synagogue, Église, écoles, monastères, universités, liturgies. Elle existe dans des gestes : lire, chanter, copier, traduire, commenter, prêcher, mémoriser, transmettre.((La lecture historico-critique met fortement en visibilité cette Materia. Elle rappelle que la Bible n’est pas seulement un message abstrait. Elle a un corps.((Cette matérialité n’est pas extérieure à la théologie. Dans une perspective chrétienne, elle entre en résonance avec l’Incarnation : la Parole ne se donne pas hors sol, hors langue, hors temps, hors chair. Elle traverse la matière humaine.((La Materia biblique comprend aussi les différences de canons : Tanakh, Bible protestante, Bible catholique, Bible orthodoxe. Ces différences ne sont pas de simples détails techniques. Elles modifient les seuils de lecture, les clôtures, les trajectoires, les résonances finales.((Même l’ordre des livres agit comme une courbure. Une Bible qui se termine sur les Chroniques ne produit pas exactement le même horizon qu’une Bible chrétienne qui organise les prophètes comme seuil vers le Nouveau Testament.((Ainsi, le canon n’est pas seulement une liste. C’est une architecture de visibilité.((### Nox : latence, obscurité, indécidables((Nox désigne ce qui demeure non saturé par la lecture : pertes, incertitudes, variantes, textes difficiles, violences, lacunes, ambiguïtés, zones de non-savoir.((Il y a Nox dans l’histoire des rédactions : qui a écrit, repris, déplacé, compilé, corrigé, transmis ? À quelles dates exactes ? Selon quelles écoles ? Dans quels conflits ?((Il y a Nox dans la transmission : vocalisation tardive, variantes de Qumran, versions grecques, écarts entre traditions manuscrites.((Il y a Nox dans les textes eux-mêmes : violence divine, guerre, sacrifice, patriarcat, exclusion, sexualité, jugement, vengeance, apocalypse.((Il y a Nox dans la réception : usages antijudaïques, lectures moralisantes, lectures traumatiques, usages disciplinaires du texte, conflits entre traditions.((Nox n’est pas un défaut à effacer. Elle est un régime de non-possession. Elle empêche la lecture de devenir une appropriation totale.((Une lecture qui traverse Nox reconnaît que la Bible contient des zones qui ne sont pas immédiatement disponibles à la clarté. Elle ne les efface pas. Elle ne les absolutise pas. Elle les maintient comme zones de travail.((### Lux : éclaircie locale((Lux n’est pas la lumière totale. Ce n’est pas la victoire d’un système. C’est une éclaircie locale, une visibilité qui surgit dans le champ sans supprimer la matière ni la nuit.((Lux apparaît lorsque la pluralité des récits de création ouvre une anthropologie plus subtile.((Lux apparaît lorsque Adam cesse d’être lu uniquement comme premier individu masculin et redevient figure de l’humain-terreux, antérieure à certaines fermetures de genre.((Lux apparaît lorsque Sodome cesse d’être superposé à l’homosexualité moderne et redevient récit de violence, d’humiliation, de seuil hospitalier brisé.((Lux apparaît lorsque Jonas montre un Dieu qui déborde l’attente punitive du prophète.((Lux apparaît lorsque le Cantique des Cantiques fait surgir une théologie du corps, du désir, de la voix, de l’absence et de la rencontre.((Lux apparaît lorsque l’opposition entre Ancien Testament violent et Nouveau Testament doux se défait, laissant apparaître une structure plus complexe.((MNL^ permet donc de dire :((**La Bible est Materia textuelle, Nox interprétative et Lux herméneutique. Ces trois régimes ne se remplacent pas. Ils coexistent.**((Une Lux qui oublierait Materia deviendrait illumination sans corps.((Une Materia qui oublierait Nox deviendrait positivisme sans profondeur.((Une Nox qui oublierait Lux deviendrait obscurité sans passage.((La lecture gagne en portance lorsque les trois régimes restent co-présents.((`.split(`(`)},{title:`4. MCPP^ : matrice chiasmique phono-photonique du sens biblique`,content:[``,`En MCPP^, la Bible peut être lue comme une **matrice chiasmique phono-photonique**.`,``,`Elle est **phono** parce qu’elle vient de voix, de récitations, de traditions orales, de proclamations, de chants, de lectures liturgiques. La Bible n’est pas seulement écrite ; elle a été dite, entendue, répétée, scandée, priée.`,``,`Elle est **photonique** parce qu’elle produit des visibilités : images de Dieu, figures de l’humain, scènes d’origine, seuils de justice, éclats prophétiques, apparitions christologiques, visions apocalyptiques.`,``,`Elle est **chiasmique** parce qu’elle croise des axes hétérogènes : ancien et présent, lettre et esprit, Israël et Église, histoire et théologie, texte et liturgie, corps et parole, violence et miséricorde, loi et grâce, masculin et féminin, visible et invisible.`,``,`Elle est **matricielle** parce qu’elle continue à produire des formes de sens selon les régimes de lecture qui l’actualisent.`,``,`Dans cette perspective, l’entretien de Römer effectue un travail sur la partie **Materia-phono-textuelle** du champ. Il fait réapparaître les conditions de formation, les voix multiples, les transmissions, les divergences, les couches. Mais ce travail n’annule pas la dimension photonique ; il modifie les conditions de son apparition.`,``,`Une lumière théologique qui passe par la lecture historico-critique n’est plus la même lumière. Elle devient plus incarnée, moins immédiate, moins compacte, plus attentive aux médiations.`,``,`Le champ biblique se comporte alors comme un espace de superpositions interprétatives. Une lecture ne détruit pas nécessairement l’autre ; elle peut la déphaser, la corriger, la ralentir, l’enrichir, la rendre moins saturante.`,``,`MCPP^ permet donc de dire :`,``,`**Le sens biblique n’est pas contenu dans un seul point du texte ; il apparaît dans la courbure produite par le croisement entre texte, tradition, communauté, histoire, corps, liturgie et horizon théologique.**`,``,``]},{title:`5. Theoquantique : lecture comme mesure locale du champ biblique`,content:`(Dans une formulation Theoquantique, la Bible peut être pensée comme un champ Θ-scripturaire.((Ce champ n’est jamais donné en totalité. Toute lecture agit comme une mesure locale. Elle actualise certaines potentialités, en laisse d’autres en latence, et modifie la distribution des possibles.((La lecture de Römer correspond à une mesure dans une base historico-philologique. Cette mesure fait apparaître :((- les couches rédactionnelles ;(- les pluralités canoniques ;(- les variantes ;(- les écarts entre catégories anciennes et modernes ;(- les processus de transmission ;(- les effets de contexte ;(- les discontinuités internes ;(- les réécritures ;(- les tensions entre récits.((Une lecture liturgique mesure autrement le champ. Elle actualise la proclamation, le rythme, la mémoire communautaire, l’incorporation rituelle, le calendrier, la prière.((Une lecture dogmatique actualise les relations entre Écriture, règle de foi, conciles, formulations doctrinales, Christ, Trinité, Esprit.((Une lecture mystique actualise les zones de silence, d’union, de désir, de nuit, de transformation intérieure.((Une lecture ecclésiale actualise la transmission, la communauté, l’autorité, la réception, la continuité, l’interprétation partagée.((Aucune de ces mesures ne coïncide avec le champ entier.((La difficulté n’est donc pas l’existence de plusieurs mesures. La difficulté est la **saturation de base** : lorsqu’une mesure locale oublie sa localité et se prend pour le champ entier.((On peut alors parler non pas de faute, mais de **condensation uniaxiale**. Le champ se contracte autour d’un axe unique. Ce régime peut donner de la clarté, de la stabilité, de l’efficacité. Mais il réduit aussi la variance interne du champ.((Une lecture Theoquantique cherchera donc à maintenir la circulation entre les bases : historique, liturgique, théologique, symbolique, ecclésiale, mystique, anthropologique, patristique.((La Bible devient un espace de **non-commutation herméneutique** : changer de base de lecture change ce qui devient visible. On ne voit pas la même chose selon que l’on lit Genèse 2 comme philologue, liturge, dogmaticien, mystique, anthropologue ou lecteur blessé par un usage moral du texte.((Cela ne signifie pas que tout se vaut indistinctement. Cela signifie que la portance du champ dépend de la capacité à maintenir plusieurs bases en co-présence, sans les écraser les unes par les autres.((`.split(`(`)},{title:`6. Trinité : unité différenciée, non fusionnelle`,content:`(La Trinité peut être mobilisée comme une grammaire relationnelle. Non pas pour imposer artificiellement un schéma trinitaire à chaque détail biblique, mais pour penser une unité qui ne supprime pas la différence.((Dans une structure trinitaire, l’unité n’est pas uniformité. La distinction n’est pas séparation. La relation n’est pas confusion.((Appliquée analogiquement au champ biblique, cette grammaire permet de penser une pluralité canonique sans éclatement.((Les voix bibliques ne sont pas simplement fusionnées dans une voix unique. Elles ne sont pas non plus laissées comme fragments sans rapport. Elles tiennent dans une communion de lecture, mais une communion qui garde les différences.((Genèse 1 et Genèse 2 ne sont pas identiques.((Les quatre évangiles ne sont pas une biographie harmonisée.((Paul, Jacques, Jean, Matthieu, Luc, l’Apocalypse, les Psaumes, Job, Jonas, Isaïe, le Cantique, le Lévitique n’actualisent pas le champ de la même manière.((La Trinité permet de concevoir une unité où la différence ne doit pas être immédiatement absorbée.((Cela produit une ecclésiologie du canon : l’Église ne reçoit pas un texte monophonique, mais une polyphonie tenue. Le canon devient un espace relationnel : les textes se répondent, se déplacent, se rééquilibrent, se mettent en tension, parfois se corrigent par voisinage.((La pluralité biblique n’est donc pas nécessairement un problème à résoudre. Elle peut être une forme de portance.((Formule :((**La Bible peut être reçue comme polyphonie canonique : unité de réception, pluralité de voix, circulation interprétative.**((`.split(`(`)},{title:`7. Incarnation : l’historicité comme médiation, non comme obstacle`,content:`(L’Incarnation est un axe central.((Si le Verbe se fait chair, alors le christianisme ne peut pas rêver d’un divin sans médiation. Le Verbe ne se donne pas comme abstraction pure. Il passe par un corps, une langue, une mère, un peuple, une généalogie, une époque, des gestes, une vulnérabilité, une mort.((Cette logique transforme la manière de recevoir l’historicité biblique.((Une Écriture qui passe par des langues, des scribes, des transmissions, des variantes, des traditions, des communautés, des conflits et des canons ne devient pas automatiquement moins théologique. Elle devient plus incarnée.((Le problème n’est pas que l’Écriture ait une histoire. Le problème serait plutôt d’imaginer une Écriture hors histoire.((Une Bible sans Materia, sans transmission, sans texture linguistique, sans corps communautaire, sans reprise, sans mémoire, serait une Bible désincarnée.((Dans une perspective incarnatoire :((- le texte n’est pas diminué par sa matérialité ;(- la parole n’est pas diminuée par la langue ;(- la révélation n’est pas diminuée par la médiation ;(- la tradition n’est pas diminuée par sa transmission ;(- le sens n’est pas diminué par son histoire.((Cela ne veut pas dire que toute médiation est transparente. L’Incarnation n’abolit pas le discernement. Elle empêche seulement de traiter l’histoire comme un déchet théologique.((Formule :((**L’historicité de la Bible n’est pas extérieure à une théologie chrétienne de la Parole ; elle en devient une condition de pensabilité.**((Ou encore :((**Le Verbe fait chair rend pensable une Écriture à chair textuelle.**((`.split(`(`)},{title:`8. Logos Spermatikos : Justin, Clément et les semences du Verbe`,content:`(Le Logos Spermatikos permet d’élargir le champ.((Chez Justin Martyr, le Logos n’est pas absent du monde avant le christianisme explicite. Des semences du Verbe peuvent être présentes dans les philosophies, les sagesses, les recherches de vérité, les intuitions humaines. Le Christ est la plénitude du Logos, mais cette plénitude n’exclut pas des participations partielles.((Chez Clément d’Alexandrie, la philosophie grecque peut jouer un rôle pédagogique. Elle prépare, forme, dispose, ouvre. Elle n’est pas identique à l’Évangile, mais elle peut être comprise comme une médiation antérieure, une préparation, une propédeutique.((Cette logique est essentielle pour penser Bible, cultures et Traditions.((Si les textes bibliques se forment dans le Proche-Orient ancien, en relation avec des mondes politiques, mythiques, juridiques, cultuels et sapientiels, il n’est pas nécessaire de choisir entre deux simplifications :((- la Bible serait purement isolée de son environnement ;(- ou la Bible serait seulement un produit culturel parmi d’autres.((Le Logos Spermatikos ouvre une troisième possibilité :((**le Logos travaille dans des matériaux culturels que l’Écriture reprend, déplace, transforme, intensifie, conteste ou réoriente.**((La culture n’est donc pas simplement dehors. Elle peut contenir des semences, des attentes, des formes préparatoires, des intuitions partielles, des structures inachevées.((Mais ces semences ne sont pas encore la plénitude. Elles sont partielles, ambiguës, mélangées, parfois lumineuses, parfois obscures. Elles demandent discernement.((En MNL^ :((- **Materia** : cultures, mythes, philosophies, lois, rites, symboles, sagesses.(- **Nox** : ambiguïtés, violences, idolâtries, confusions, usages politiques, projections humaines.(- **Lux** : reconnaissance partielle du Logos, préparation, purification, accomplissement, transfiguration.((Le Logos Spermatikos ne sert donc pas à annexer toutes les traditions. Il sert à décrire une **zone de résonance** : des éclats de Logos dans des champs qui ne se réduisent pas encore à la confession chrétienne explicite.((Cela permet de penser une Église moins crispée, mais pas indifférenciée : attentive aux semences, sans perdre le centre christologique.((`.split(`(`)},{title:`9. Église : champ de réception, non point fixe propriétaire`,content:`(L’Église ne se situe pas simplement après la Bible, comme un organisme qui posséderait un objet déjà fermé. Elle est elle-même prise dans le champ scripturaire.((Elle reçoit, lit, chante, canonise, interprète, transmet, traduit, commente, ritualise, parfois resserre, parfois ouvre, parfois oublie, parfois redécouvre.((Dans une lecture MCPP^, l’Église est un **organe de portance phono-liturgique et photonique**. Elle porte la voix du texte dans la proclamation. Elle rend visibles certains éclats dans la liturgie, l’iconographie, la doctrine, la prédication, la vie sacramentelle.((Mais cette portance n’est pas un état fixe. Elle est dynamique.((On peut distinguer plusieurs régimes ecclésiaux :((### Église lectrice((Elle reçoit le texte. Elle ne le crée pas ex nihilo. Elle se tient devant lui.((### Église liturgique((Elle transforme le texte en voix communautaire. La Bible devient lecture publique, chant, rythme, année liturgique, mémoire partagée.((### Église canonisante((Elle stabilise un espace de réception. Le canon n’est pas seulement clôture ; il est aussi seuil, architecture, chambre d’échos.((### Église interprétante((Elle formule, commente, articule, dogmatise, catéchise. Elle produit des formes de visibilité théologique.((### Église pénitentielle((Elle relit ses propres usages du texte. Elle reconnaît que certaines actualisations ecclésiales ont pu produire de la blessure, de la réduction, de la violence symbolique ou de la fermeture de portance.((### Église pneumatique((Elle ne se contente pas d’administrer un héritage ; elle reçoit dans l’Esprit une capacité de discernement, de renouvellement, de purification, de reprise.((L’Église n’est donc pas propriétaire immobile du sens. Elle est un lieu de passage, un corps de réception, un champ de transmission.((Formule :((**L’Église ne possède pas l’Écriture comme un objet ; elle la porte comme une parole qui la précède, la traverse et la dépasse.**((`.split(`(`)},{title:`10. Traditions : corps historiques de transmission`,content:`(Il faut parler des Traditions au pluriel.((Traditions juives, rabbiniques, patristiques, grecques, latines, syriaques, coptes, arméniennes, orientales, occidentales, monastiques, liturgiques, mystiques, doctrinales, populaires, réformées, catholiques, orthodoxes.((Une tradition n’est pas seulement une idée. C’est un corps : langue, mémoire, rite, geste, calendrier, chant, vêtement, architecture, commentaire, autorité, manière de lire, manière de prier.((En MNL^ :((### Materia des Traditions((Rites, conciles, liturgies, langues, manuscrits, icônes, gestes, chants, calendriers, lieux saints, règles, institutions, écoles théologiques.((### Nox des Traditions((Oublis, blessures, conflits, schismes, durcissements identitaires, exclusions, voix minorées, usages de pouvoir, mémoires sélectives, transmissions traumatiques.((### Lux des Traditions((Sainteté, beauté, sagesse accumulée, intelligence dogmatique, profondeur mystique, puissance liturgique, maturation, discernement, capacité de conversion.((Une tradition n’est donc pas à idéaliser ni à dissoudre. Elle est à lire comme un corps vivant, traversé de régimes hétérogènes.((Son ancienneté peut être une portance. Mais l’ancienneté seule ne suffit pas à produire Lux. Elle peut aussi porter Nox. Inversement, une nouveauté n’est pas automatiquement rupture féconde ni appauvrissement. Elle doit être située dans le champ.((La Tradition vivante n’est donc pas répétition mécanique. Elle est **transmission avec métabolisme**.((Elle reçoit.((Elle transforme.((Elle conserve.((Elle traverse.((Elle purifie.((Elle réactive.((Elle laisse parfois mourir des formes qui ne portent plus.((Elle retrouve parfois des formes anciennes devenues à nouveau fécondes.((Dans une logique Theoquantique, les Traditions sont des **bases d’actualisation communautaire** du champ biblique. Elles donnent des formes stables de lecture, mais ces formes restent locales, historiques, situées.((`.split(`(`)},{title:`11. Canon : clôture, seuil, chambre d’échos`,content:`(Le canon est souvent pensé comme fermeture. Mais en MCPP^, il peut être pensé comme **architecture de résonance**.((Le canon fixe un espace, mais cet espace n’est pas silencieux. Il crée des rapports entre textes.((Genèse 1 et Genèse 2 coexistent.((Les quatre évangiles coexistent.((Jonas et Nahum peuvent résonner différemment autour de Ninive.((Job et Proverbes ne portent pas la même logique de rétribution.((Le Cantique des Cantiques demeure dans l’espace canonique comme force érotique, poétique, mystique.((L’Ecclésiaste demeure comme voix de vanité, de trouble et de lucidité.((L’Apocalypse demeure comme vision extrême, imaginale, cosmique.((Le canon ne supprime donc pas les tensions ; il les contient dans un espace de co-présence.((Il ne produit pas seulement une clôture. Il produit une **chambre d’échos**.((Dans T^, le canon devient une forme locale de tenue : il donne un champ commun, mais il n’annule pas la pluralité interne. Il rend possible une conversation entre textes.((Formule :((**Le canon n’est pas seulement la limite extérieure de l’Écriture ; il est la courbure interne qui permet aux textes de se répondre.**((`.split(`(`)},{title:`12. Adam : humain-terreux, différenciation, vis-à-vis`,content:[``,`La lecture d’Adam comme humain-terreux, et non simplement comme premier homme masculin au sens moderne, ouvre un champ anthropologique majeur.`,``,`Adam renvoie à l’humain lié à la terre. Il est Materia : poussière, sol, souffle, corps, vulnérabilité.`,``,`Avant même la différenciation homme/femme, il y a une humanité en attente de relation. Le problème n’est pas d’abord l’absence d’une structure sociale complète ; c’est la solitude. « Il n’est pas bon que l’humain soit seul » devient une phrase de haute intensité anthropologique.`,``,`La différenciation n’est donc pas seulement organisation sexuelle. Elle est apparition du vis-à-vis.`,``,`En MNL^ :`,``,`- **Materia** : terre, corps, sommeil, chair, côté, différenciation.`,`- **Nox** : solitude, manque, non-savoir de soi, coupure, attente.`,`- **Lux** : reconnaissance du vis-à-vis, parole, relation, altérité.`,``,`Dans une lecture trinitaire, l’humain n’est pas une monade. Il est image d’un Dieu qui n’est pas solitude fermée, mais relation vivante.`,``,`Dans une lecture incarnatoire, le Christ nouvel Adam ne supprime pas cette condition terreuse ; il l’assume, la traverse, la réouvre.`,``,`Adam devient alors une figure morphogénétique : non pas une preuve figée, mais un seuil de formation de l’humain comme être de matière, de manque et de relation.`,``,``]},{title:`13. Sodome : seuil hospitalier, violence de champ, retournement de lecture`,content:`(La relecture de Sodome est un point majeur, parce qu’elle modifie la base d’actualisation du récit.((Dans une lecture moralisante tardive, Sodome a souvent été superposée à la question de l’homosexualité.((Dans la lecture rappelée par Römer, le champ visible se déplace : il ne s’agit pas d’orientation sexuelle au sens moderne, mais d’agression, d’humiliation, de violence collective et de violation de l’hospitalité.((Le texte change alors de courbure.((Ce qui apparaît, ce n’est pas d’abord une norme sexuelle abstraite ; c’est un seuil brisé : visiteurs menacés, maison assiégée, ville fermée, hospitalité retournée en violence.((En MNL^ :((- **Materia** : ville, maison, seuil, visiteurs, corps exposés, foule.(- **Nox** : humiliation, domination, menace de viol, destruction de l’accueil.(- **Lux** : l’hospitalité devient critère de lecture.((Dans une lecture ecclésiale, Sodome peut alors devenir un miroir : comment une communauté traite-t-elle le visiteur, l’étranger, le non conforme, le vulnérable, celui qui arrive au seuil ?((Il ne s’agit pas de dire : telle lecture est coupable. Il s’agit de constater que le récit peut s’actualiser selon plusieurs régimes. Le régime hospitalier fait apparaître une puissance du texte souvent recouverte par le régime moralisant.((Formule :((**Sodome n’est pas seulement un récit de transgression ; c’est une scène de seuil où l’hospitalité se contracte en violence.**((`.split(`(`)},{title:`14. Cantique des Cantiques : désir, corps, Nox amoureuse, Lux nuptiale`,content:[``,`Le Cantique des Cantiques est une zone de très haute intensité MNL^.`,``,`Il donne au champ biblique une texture corporelle, poétique, amoureuse, nocturne, vocale.`,``,`Il y a **Materia** : corps, peau, bouche, parfum, jardin, lit, ville, mains, voix, fruits, chevelure, présence sensible.`,``,`Il y a **Nox** : absence, recherche, nuit, perte, attente, blessure, distance, porte fermée, bien-aimé qui échappe.`,``,`Il y a **Lux** : reconnaissance, rencontre, chant, apparition, intensification du désir, éclat de la voix aimée.`,``,`Le Cantique empêche une réduction fonctionnelle de la sexualité à la reproduction. Il empêche aussi une spiritualisation qui mépriserait le corps. Le corps y est lieu de parole, de beauté, de quête, de présence.`,``,`Mais le Cantique ne se laisse pas non plus réduire à une simple célébration immédiate du désir. Il contient du retrait, de la distance, de l’absence. Le désir n’y est pas possession plate ; il est mouvement, appel, perte, retour, tension.`,``,`Dans une lecture ecclésiale et mystique, cette structure a permis des lectures du rapport entre Dieu et l’âme, entre Christ et Église, entre Verbe et désir humain. Ces lectures ne suppriment pas le niveau corporel ; elles actualisent une autre base du champ.`,``,`Formule :`,``,`**Le Cantique est une matrice phono-érotique où le corps devient parole et où le désir devient espace de révélation sans cesser d’être désir.**`,``,``]},{title:`15. Violence divine : obscurité, mémoire, transformation des images de Dieu`,content:`(La question de la violence divine ne doit pas être traitée selon une opposition simple : Ancien Testament violent contre Nouveau Testament doux. Cette opposition est trop compacte et produit une forte déformation du champ, notamment dans son rapport au judaïsme.((Le champ biblique contient plusieurs régimes de violence :((- violence de guerre ;(- violence judiciaire ;(- violence apocalyptique ;(- violence sacrificielle ;(- violence symbolique ;(- violence politique ;(- violence subie ;(- violence attribuée à Dieu ;(- violence critiquée par Dieu ;(- violence retournée par la miséricorde.((Ces régimes ne sont pas identiques.((Jonas montre une configuration remarquable : le prophète attend une actualisation punitive, mais le récit fait surgir une autre courbure, celle d’un Dieu qui renonce à détruire Ninive. Le texte ne supprime pas la possibilité du jugement, mais il déplace son actualisation.((Job déstabilise les systèmes de rétribution trop mécaniques.((Les prophètes déplacent la valeur du culte vers la justice.((Le Nouveau Testament contient lui aussi jugement, apocalypse, séparation, feu, guerre cosmique, damnation. Il ne permet donc pas de projeter toute la violence sur l’Ancien Testament.((En MNL^ :((- **Materia** : textes de guerre, mémoires d’exil, conflits politiques, institutions, liturgies, royaumes, destructions.(- **Nox** : scandale, trauma, images du Dieu violent, usages historiques de ces images.(- **Lux** : travail interne du texte, déplacements, contestations, relectures, miséricorde, figure christologique.((La violence divine devient alors non pas un bloc doctrinal, mais un champ de transformation des images de Dieu.((Formule :((**La Bible ne donne pas seulement des images de Dieu ; elle montre aussi des images de Dieu en train d’être travaillées, déplacées, obscurcies, éclairées, parfois retournées de l’intérieur.**((`.split(`(`)},{title:`16. Ancien et Nouveau Testament : continuité dissymétrique, non substitution`,content:`(Le rapport entre Ancien et Nouveau Testament doit être pensé sans substitution simpliste.((Le Nouveau Testament ne tombe pas après un premier livre raté. Il naît dans les Écritures d’Israël, avec elles, à partir d’elles, en tension avec elles, en relecture d’elles.((Jésus, Paul, les évangélistes, les premières communautés chrétiennes lisent les Écritures d’Israël. Le Christ n’est pas extérieur à cette mémoire ; il surgit en elle.((Mais la lecture chrétienne produit une nouvelle courbure : christologique, ecclésiale, sacramentelle, pneumatologique.((Il faut donc maintenir une dissymétrie sans confiscation.((La lecture chrétienne n’est pas identique à la lecture juive.((Mais elle ne doit pas annuler Israël.((Elle ne doit pas transformer l’Ancien Testament en simple préface inférieure.((Elle ne doit pas opposer Dieu des Juifs et Dieu des chrétiens.((Dans T^, cela se formule comme co-présence dissymétrique : plusieurs réceptions du même champ scripturaire ne se superposent pas, mais aucune ne doit être aplatie par l’autre.((En MNL^ :((- **Materia** : textes d’Israël, langues, rites, mémoire, alliances, lectures juives, lectures chrétiennes.(- **Nox** : substitution, antijudaïsme, confiscation, effacement de la lecture juive.(- **Lux** : reconnaissance de la racine, lecture christologique non prédatrice, humilité ecclésiale.((Formule :((**Le Nouveau Testament ne remplace pas l’Ancien comme une lumière qui effacerait une nuit ; il reconfigure un champ déjà habité par des lumières, des nuits et des matières propres.**((`.split(`(`)},{title:`17. Trinité, Église et Traditions : portance relationnelle`,content:`(La Trinité permet aussi de penser l’Église et les Traditions.((Une Église relationnelle ne fonctionne pas comme centre solitaire. Elle tient par communion, altérité, circulation, mémoire, parole, Esprit.((Les Traditions ne sont pas des blocs juxtaposés. Elles sont des régimes de portance : chacune actualise certains aspects du champ chrétien.((Une tradition liturgique donne une visibilité au temps.((Une tradition monastique donne une visibilité à l’ascèse, au silence, à la répétition.((Une tradition patristique donne une visibilité à la formation doctrinale.((Une tradition mystique donne une visibilité à l’expérience de Dieu au-delà des concepts immédiats.((Une tradition populaire donne une visibilité au corps collectif, aux images, aux gestes, aux fêtes.((Une tradition académique donne une visibilité aux strates, aux sources, aux contextes.((Aucune n’est le tout.((La catholicité profonde n’est donc pas uniformité, mais capacité de porter plusieurs formes de fidélité dans une communion non fusionnelle.((Formule :((**La catholicité n’est pas la réduction du multiple ; elle est la portance du multiple dans une unité qui ne l’écrase pas.**((`.split(`(`)},{title:`18. Logos Spermatikos et Traditions non chrétiennes`,content:[``,`Le Logos Spermatikos ouvre aussi l’espace des traditions non chrétiennes.`,``,`Si des semences du Logos peuvent apparaître dans les philosophies grecques, comme chez Justin et Clément, alors on peut penser plus largement des résonances du Logos dans des sagesses, rites, intuitions, mythes, structures symboliques, expériences du sacré.`,``,`Mais cette ouverture doit rester non totalisante.`,``,`Le Logos Spermatikos ne signifie pas : tout est déjà identique au Christ.`,``,`Il signifie : le champ du Logos déborde les frontières visibles, sous forme partielle, fragmentaire, préparatoire, parfois mélangée, parfois obscure, parfois étonnamment lumineuse.`,``,`Cela permet de penser les traditions comme champs de Materia, Nox et Lux :`,``,`- **Materia** : langues, rites, symboles, pratiques, textes, mythes.`,`- **Nox** : ambiguïtés, violences, idolâtries, fermetures, confusions.`,`- **Lux** : semences, attentes, éclats de sagesse, préparations, intuitions du vrai, du juste, du beau.`,``,`L’Église n’a pas à annexer ces traditions. Elle peut entrer en discernement avec elles.`,``,`Formule :`,``,`**Le Logos Spermatikos ne colonise pas les traditions ; il rend pensable une résonance partielle du Verbe dans des champs culturels qui demeurent autres.**`,``,``]},{title:`19. Synthèse morphogénétique`,content:[``,`On peut maintenant reprendre l’ensemble en une architecture.`,``,`La vidéo de Römer ouvre un champ historico-critique : Bible comme bibliothèque, pluralité des canons, histoire des textes, distance avec les catégories modernes, tensions internes.`,``,`T^ maintient ce champ sans le fermer : aucune lecture locale ne devient le tout.`,``,`MNL^ distribue les régimes : Materia des textes et traditions, Nox des obscurités et tensions, Lux des éclaircies locales.`,``,`MCPP^ décrit la Bible comme matrice chiasmique phono-photonique : voix, visibilité, croisement, production de formes.`,``,`Theoquantique pense chaque lecture comme mesure locale du champ : historique, liturgique, dogmatique, mystique, ecclésiale, anthropologique, patristique.`,``,`La Trinité donne une grammaire d’unité différenciée : ni fusion des voix, ni dispersion sans communion.`,``,`L’Incarnation rend l’historicité théologiquement pensable : le Verbe ne contourne pas la chair, donc l’Écriture ne contourne pas la matière du temps.`,``,`Le Logos Spermatikos ouvre le champ des semences : cultures, philosophies, traditions et sagesses peuvent porter des résonances partielles du Logos.`,``,`L’Église devient corps de réception : lectrice, liturgique, canonisante, interprétante, pénitentielle, pneumatique.`,``,`Les Traditions deviennent corps historiques de transmission : ni idoles du passé, ni matériaux jetables, mais formes vivantes de portance, traversées de Materia, Nox et Lux.`,``,``]},{title:`20. Formule finale`,content:`(La Bible n’est pas un bloc immobile. Elle est un champ scripturaire incarné.((Elle ne se réduit pas à son histoire, mais elle ne se donne jamais sans histoire.((Elle ne se réduit pas à l’Église, mais elle ne circule jamais sans communautés de réception.((Elle ne se réduit pas aux Traditions, mais elle les traverse, les nourrit, les déplace et les expose.((Elle ne se réduit pas à la lettre, mais elle ne devient jamais esprit sans lettre.((Elle ne se réduit pas à la lumière, mais elle n’est pas non plus nuit pure.((Elle est **Materia textuelle**, **Nox herméneutique**, **Lux christologique**.((Elle est champ de voix, de seuils, de transmissions, de blessures, d’éclaircies, de résonances.((Dans cette perspective, l’entretien de Römer n’affaiblit pas la Bible. Il modifie sa base de visibilité. Il rend plus nette sa chair textuelle. Il oblige les lectures théologiques à devenir plus incarnées, plus attentives aux médiations, moins compactes, plus capables de tenir ensemble l’histoire, le canon, la liturgie, l’Église, les Traditions et le Logos.((Formule synthétique :((**L’Écriture n’est pas la négation de l’histoire ; elle est un champ où l’histoire devient matière de transmission, nuit de discernement et lumière d’actualisation.**((Formule T^ × MNL^ × MCPP^ :((**La Bible tient comme holochamp scripturaire : Materia des textes, Nox des transmissions, Lux des éclaircies ; matrice phono-photonique où le Logos se laisse entendre, voir, perdre, retrouver et transmettre, sans qu’aucune actualisation locale ne puisse se confondre avec la totalité du champ.**(`.split(`(`)}]};function ge(e){return e.normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).toLowerCase().replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)}function _e(e){return e.split(/(\*\*[^*]+\*\*)/g).map((e,t)=>e.startsWith(`**`)&&e.endsWith(`**`)?(0,C.jsx)(`strong`,{className:`font-semibold text-[#f7e5b1]`,children:e.slice(2,-2)},`${e}-${t}`):(0,C.jsx)(_.Fragment,{children:e},`${e}-${t}`))}function ve(e){let t=[],n=[],r=[];function i(){n.length&&(t.push({type:`paragraph`,text:n.join(` `)}),n=[])}function a(){r.length&&(t.push({type:`list`,items:r}),r=[])}return e.forEach(e=>{let o=e.trim();if(!o){i(),a();return}if(o.startsWith(`### `)){i(),a(),t.push({type:`subheading`,text:o.replace(/^###\s+/,``)});return}if(o.startsWith(`- `)){i(),r.push(o.replace(/^-\s+/,``));return}if(o.startsWith(`>`)){i(),a(),t.push({type:`quote`,text:o.replace(/^>\s?/,``)});return}a(),n.push(o)}),i(),a(),t}function ye({lines:e}){return(0,C.jsx)(`div`,{className:`grid gap-4`,children:ve(e).map((e,t)=>e.type===`subheading`?(0,C.jsx)(`h4`,{className:`mt-3 text-lg font-semibold text-[#f4f4f5]`,children:e.text},`${e.text}-${t}`):e.type===`list`?(0,C.jsx)(`ul`,{className:`grid gap-2 pl-0`,children:e.items.map(e=>(0,C.jsx)(`li`,{className:`list-none rounded-[16px] border border-white/10 bg-black/18 px-4 py-3 text-sm leading-7 text-zinc-300`,children:_e(e)},e))},`list-${t}`):e.type===`quote`?(0,C.jsx)(`blockquote`,{className:`max-w-[75ch] rounded-[20px] border border-[#d6b36a]/24 bg-[#d6b36a]/9 p-4 text-base font-semibold leading-8 text-[#ead6a4]`,children:_e(e.text)},`${e.text}-${t}`):(0,C.jsx)(`p`,{className:`max-w-[75ch] text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8`,children:_e(e.text)},`${e.text}-${t}`))})}function be(){let e=D.sections.filter(e=>/^\d+\./.test(e.title));return(0,C.jsxs)(`section`,{id:`analyse-tmnl-mcpp`,className:`scroll-mt-6 overflow-hidden rounded-[34px] border border-[#d6b36a]/20 bg-[radial-gradient(circle_at_8%_0%,rgba(214,179,106,0.14),transparent_32%),radial-gradient(circle_at_92%_12%,rgba(138,180,248,0.1),transparent_30%),linear-gradient(145deg,rgba(9,11,18,0.96),rgba(3,5,10,0.98))] p-5 shadow-[0_30px_110px_rgba(0,0,0,0.44)] sm:p-7 lg:p-9`,children:[(0,C.jsxs)(`div`,{className:`reading-shell mx-0`,children:[(0,C.jsx)(`p`,{className:`mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#d6b36a]/75`,children:`Lecture secondaire`}),(0,C.jsx)(`h2`,{className:`m-0 text-3xl font-semibold leading-tight text-[#f4f4f5] sm:text-4xl`,children:`Analyse T^ × MNL^ × MCPP^`}),(0,C.jsx)(`p`,{className:`mt-3 max-w-[72ch] text-lg leading-8 text-[#ead6a4]`,children:`Bible, Trinité, Église, Incarnation, Logos Spermatikos, Traditions`}),(0,C.jsx)(`div`,{className:`mt-6 rounded-[24px] border border-[#d6b36a]/28 bg-[#d6b36a]/10 p-5 text-sm leading-7 text-[#ead6a4]/92 sm:text-base sm:leading-8`,children:`Cette analyse ne restitue pas directement les propos de Thomas Römer. Elle propose une lecture théologico-herméneutique secondaire à partir des thèmes ouverts par l’entretien : pluralité biblique, histoire des textes, diversité des canons, transmission, interprétation, sexualité, violence divine, Église et Traditions.`})]}),(0,C.jsxs)(`nav`,{className:`mt-7 rounded-[26px] border border-white/10 bg-white/[0.035] p-4`,"aria-label":`Sommaire de l’analyse T MNL MCPP`,children:[(0,C.jsx)(`p`,{className:`mb-4 text-xs font-black uppercase tracking-[0.2em] text-zinc-400`,children:`Sommaire interne`}),(0,C.jsx)(`div`,{className:`grid gap-2 sm:grid-cols-2 lg:grid-cols-4`,children:e.map(e=>(0,C.jsx)(`a`,{href:`#${ge(e.title)}`,className:`rounded-[16px] border border-white/10 bg-black/16 px-3 py-3 text-sm font-semibold leading-5 text-zinc-200 transition hover:border-[#d6b36a]/36 hover:text-[#f7e5b1]`,children:e.title},e.title))})]}),(0,C.jsx)(`div`,{className:`mt-7 grid gap-4`,children:D.sections.map((e,t)=>(0,C.jsxs)(`details`,{id:ge(e.title),open:t<2,className:`group scroll-mt-24 rounded-[26px] border border-white/12 bg-[linear-gradient(145deg,rgba(13,16,25,0.92),rgba(5,7,13,0.82))] p-4 shadow-[0_18px_70px_rgba(0,0,0,0.24)] sm:p-5 lg:p-6`,children:[(0,C.jsxs)(`summary`,{className:`flex cursor-pointer list-none items-start justify-between gap-4`,children:[(0,C.jsx)(`h3`,{className:`m-0 max-w-[74ch] text-xl font-semibold leading-7 text-[#f4f4f5] sm:text-2xl sm:leading-8`,children:e.title}),(0,C.jsx)(`span`,{className:`mt-1 shrink-0 rounded-full border border-white/14 px-3 py-1 text-xs font-black text-zinc-300 transition group-open:rotate-45`,children:`+`})]}),(0,C.jsx)(`div`,{className:`mt-6 border-t border-white/10 pt-5`,children:(0,C.jsx)(ye,{lines:e.content})})]},e.title))})]})}var xe=[{title:`Vidéo YouTube`,text:`Entretien vidéo avec Thomas Römer, publié sous le titre : Le CÔTÉ OBSCUR de la BIBLE : CRUAUTÉ, SEXE et VIOLENCE.`,href:`https://youtu.be/bstGOxKcUGM?is=eItC8bYjcC8fUZ_B`},{title:`Transcription Ausha`,text:`Page Ausha contenant la transcription et les chapitres de l’entretien.`,href:`https://podcast.ausha.co/podcast-spiritualite/les-textes-bibliques-ont-e-te-manipule-s-thomas-romer-de-voile-tout-77`},{title:`Contexte académique`,text:`Compte rendu / recension autour de Thomas Römer et de Dieu obscur. Source utilisée uniquement pour contextualiser les thèmes, non pour remplacer l’interview.`,href:`https://journals.sagepub.com/doi/10.1177/000842989702600124`}],Se=[[`La Bible comme bibliothèque`,`Römer insiste sur le fait que la Bible n’est pas un livre unique, mais une collection de textes, traditions et livres organisés progressivement.`],[`Des canons différents`,`Tanakh juif, Bibles catholiques, protestantes et orthodoxes ne sont pas strictement identiques. L’ordre des livres modifie aussi la lecture.`],[`Composition et transmission`,`Les textes bibliques résultent de processus longs : oralité, mise par écrit, recopie, variantes, réécritures, interprétations.`],[`Historicité et vérité narrative`,`L’historicité moderne n’épuise pas la valeur des récits bibliques. Un récit peut dire quelque chose de l’humain sans être vérifiable comme chronique historique.`],[`Genèse plurielle`,`Genèse 1 et Genèse 2 ne racontent pas la création humaine de la même manière. La Bible conserve plusieurs récits.`],[`Adam`,`Adam n’est pas d’abord un prénom masculin moderne : le terme renvoie à l’humain, au terrien, avant la différenciation homme/femme.`],[`Sodome`,`Römer affirme que Sodome ne parle pas d’homosexualité au sens moderne, mais d’agression, de viol, d’humiliation et de violation de l’hospitalité.`],[`Sexualité et couple`,`Le modèle d’un couple biblique unique et naturel est réducteur. Le Cantique des Cantiques ouvre notamment une autre lecture du désir.`],[`Pluralité interne`,`La Bible conserve tensions, variantes, marges et débats. Cette pluralité peut fonctionner comme antidote au fondamentalisme.`],[`Ancien / Nouveau Testament`,`Römer refuse l’opposition simpliste entre Ancien Testament violent et Nouveau Testament doux.`]],Ce=[{time:`0:00`,title:`Introduction éditoriale`,restitution:`L’introduction annonce les thèmes de l’entretien : sexualité, plaisir, Sodome, Adam, place des femmes, statut des personnages bibliques, rapport entre Bible et certitude. Le ton est celui d’une accroche éditoriale destinée à ouvrir l’épisode.`,vigilance:`Le titre de l’épisode et les formulations d’ouverture sont plus sensationnels que la position réelle de Römer.`,dontSay:`Römer ne formule pas une thèse complotiste selon laquelle la Bible aurait simplement été manipulée.`},{time:`1:00`,title:`Présentation de Thomas Römer`,restitution:`L’intervieweuse présente Thomas Römer comme spécialiste de l’Ancien Testament et auteur de plusieurs ouvrages, notamment L’Invention de Dieu, Dieu obscur, et des travaux sur l’homosexualité dans le Proche-Orient ancien et la Bible.`,vigilance:`Cette présentation vient de l’intervieweuse. Il faut distinguer l’introduction biographique de ce que Römer développe ensuite.`},{time:`5:00`,title:`Enfance, protestantisme, Bible familiale`,restitution:`Römer évoque ses origines allemandes, une famille protestante, un environnement marqué par la lecture biblique et certaines pratiques de piété. Il raconte notamment le rapport familial à la Bible comme texte à interpréter.`,vigilance:`La Bible n’est pas présentée comme un objet immédiatement transparent, mais comme un texte qui demande interprétation.`},{time:`13:00`,title:`C’est quoi, la Bible ?`,restitution:`Römer explique que la Bible n’est pas un livre unique, mais une bibliothèque. Elle rassemble des livres différents, transmis et regroupés progressivement.`,development:`Il distingue le Tanakh juif, composé de la Torah, des Nevi’im et des Ketuvim, des organisations chrétiennes de l’Ancien Testament. Il rappelle aussi les différences entre Bibles catholiques, protestantes et orthodoxes.`,vigilance:`Même lorsque les textes sont proches, l’ordre des livres produit déjà une interprétation.`},{time:`13:00-22:00`,title:`Auteurs, composition, transmission`,restitution:`Römer insiste sur la pluralité des auteurs et sur la longue durée de composition des textes bibliques. Un livre comme la Genèse n’a pas été écrit d’un seul trait.`,development:`Il évoque l’oralité, la mise par écrit, la recopie, les variantes, les ajouts et les réinterprétations. Il faut comprendre ces phénomènes comme des processus normaux d’histoire textuelle.`,dontSay:`Il ne faut pas traduire cela par : la Bible serait simplement falsifiée ou manipulée au sens moderne.`},{time:`22:00`,title:`Historicité des personnages bibliques`,restitution:`Römer déplace la question de l’existence historique des personnages. Il explique que l’historicité est une question moderne et qu’un récit peut être vrai autrement que comme chronique factuelle.`,development:`Il prend l’exemple de Caïn et Abel : même si le récit n’est pas vérifiable comme événement historique, il dit quelque chose de la jalousie, de la violence et de l’humain.`,vigilance:`Il ne nie pas toute historicité biblique : certains rois ou événements peuvent être mis en relation avec des inscriptions assyriennes ou babyloniennes.`},{time:`29:00`,title:`Que cherche-t-on dans la Bible ?`,restitution:`Römer invite à rencontrer d’abord le texte lui-même, avant de passer aux commentaires. Il décrit la Bible comme un vis-à-vis qui interroge, déplace et accompagne.`,vigilance:`Sa position n’est pas anti-savante : il est historien et philologue, mais il distingue le contact initial avec le texte et le travail académique.`},{time:`31:00`,title:`Genèse et création`,restitution:`Römer refuse une lecture créationniste littérale de Genèse 1. Il replace le récit dans une cosmologie ancienne.`,development:`Il souligne que Genèse 1 et Genèse 2 ne racontent pas exactement la création humaine de la même manière. La Bible conserve donc plusieurs récits d’origine.`,vigilance:`La question n’est pas seulement : est-ce arrivé exactement ainsi ? La question devient : que signifie ce récit dans son contexte ?`},{time:`35:00`,title:`Adam : humain, terrien, différenciation`,restitution:`Römer rappelle qu’Adam n’est pas d’abord un prénom masculin au sens moderne. Le terme renvoie à l’humain, au terrien.`,development:`Il explique que le mot souvent traduit par côte peut aussi être compris comme côté. La création de la femme peut donc être lue comme différenciation d’un humain initial, avant l’apparition du couple ish / isha.`,vigilance:`Il mentionne des lectures rabbiniques parlant d’un être androgyne ou asexué, tout en restant prudent.`},{time:`37:00`,title:`Intersexes, transgenres et vis-à-vis`,restitution:`Face aux lectures fondamentalistes de « homme et femme », Römer déplace l’enjeu vers la formule : il n’est pas bon que l’humain soit seul.`,development:`L’idée centrale devient celle du vis-à-vis, de la sortie de la solitude, plus que celle d’un modèle unique de couple. Il rapproche ce motif d’autres récits anciens, notamment Gilgamesh et Enkidu.`,vigilance:`Il faut éviter de projeter trop directement les catégories contemporaines sur les textes anciens.`},{time:`41:00`,title:`Sodome et homosexualité`,restitution:`Römer affirme que Sodome et Gomorrhe n’ont rien à voir avec l’homosexualité au sens moderne.`,development:`Le récit concerne l’agression de visiteurs, la menace de viol, l’humiliation et la violation de l’hospitalité. Le concept moderne d’homosexualité n’est pas celui des auteurs bibliques.`,vigilance:`Römer distingue violence sexuelle, domination, humiliation et orientation sexuelle.`},{time:`41:00-47:00`,title:`Lévitique et rapports hommes-hommes`,restitution:`Römer analyse les interdits du Lévitique dans un cadre ancien de hiérarchie de genre et de positions sociales.`,development:`Le problème n’est pas formulé dans les termes modernes d’orientation sexuelle. Il concerne plutôt l’idée qu’un homme soit placé dans une position socialement assimilée à celle d’une femme.`,vigilance:`Prudence sur les rapprochements avec la pédérastie grecque et avec les catégories modernes.`},{time:`47:00`,title:`Eunuques et assinnu`,restitution:`Römer évoque les eunuques comme figures connues du monde antique. Il mentionne aussi les assinnu, liés notamment à des contextes religieux mésopotamiens et à la figure d’Ishtar.`,vigilance:`Il ne faut pas traduire automatiquement ces catégories anciennes par les catégories modernes de transidentité.`},{time:`50:00`,title:`Le couple biblique n’existe pas`,restitution:`Römer critique l’idée d’un modèle biblique unique du couple. Il reconnaît l’importance de la reproduction dans certains textes, mais refuse de réduire toute sexualité biblique à la procréation.`,development:`Le Cantique des Cantiques est présenté comme un texte majeur du désir, du plaisir et de la parole amoureuse, sans correspondre au modèle d’un couple marié standard.`,dontSay:`Il ne dit pas que la Bible n’a aucune norme. Il dit que la Bible est plus plurielle que certaines constructions doctrinales ultérieures.`},{time:`52:00`,title:`Place des femmes`,restitution:`Römer reconnaît le cadre patriarcal des sociétés bibliques, mais souligne que plusieurs femmes bibliques agissent, décident, orientent les récits.`,development:`Exemples à mentionner : Sarah, Agar, Léa, Rachel, Rebecca.`,vigilance:`Ne pas effacer le patriarcat ; ne pas réduire non plus les femmes bibliques à une passivité uniforme.`},{time:`55:00`,title:`Pluralité interne et anti-fondamentalisme`,restitution:`Römer insiste sur le fait que la Bible conserve des tensions, des variantes et des pluralités internes.`,development:`Il mentionne notamment les deux récits de création et les quatre évangiles. La pluralité n’est pas simplement extérieure au texte ; elle est conservée dans le texte.`,vigilance:`L’intervieweuse formule l’idée que la Bible contient un antidote au fondamentalisme ; Römer va dans ce sens en valorisant le débat interprétatif.`},{time:`55:00-1:03:00`,title:`Hébreu consonantique, voyelles, Qumran`,restitution:`Römer explique que l’hébreu ancien s’écrivait d’abord principalement avec des consonnes. Les voyelles ont été ajoutées plus tard pour stabiliser la lecture.`,development:`Cette situation ouvre un espace interprétatif. Il évoque aussi les manuscrits de Qumran comme témoins matériels anciens, mais non comme origine absolue des textes.`,vigilance:`Qumran permet d’observer des variantes et une histoire de transmission déjà en cours.`},{time:`1:03:00`,title:`Bible sacrée ?`,restitution:`Römer distingue plusieurs sens du mot sacré. Si sacré signifie intouchable, il prend ses distances. Si sacré signifie mis à part, la Bible garde un statut particulier.`,development:`Il affirme qu’il faut parfois défendre la Bible contre certains interprètes, notamment lorsque des lectures imposées ont traumatisé des personnes.`,vigilance:`Il ne réduit pas la Bible à un texte banal ; il refuse surtout son enfermement dans des lectures autoritaires.`},{time:`1:06:00`,title:`Texte préféré : Jonas`,restitution:`Römer dit aimer le livre de Jonas. Il y voit un texte qui déstabilise les certitudes théologiques, notamment parce que Dieu peut changer d’avis.`,development:`Jonas annonce la destruction de Ninive, mais Dieu renonce à détruire la ville. Le récit travaille donc la question de la prophétie, de la miséricorde et de la surprise théologique.`},{time:`1:07:00`,title:`L’Invention de Dieu`,restitution:`Römer corrige la formulation de l’intervieweuse : son livre ne s’intitule pas Dieu, une invention humaine, mais L’Invention de Dieu.`,development:`Il donne au mot invention un double sens : invention comme construction, mais aussi invention comme découverte. Le livre interroge historiquement l’origine du dieu biblique Yahvé.`,vigilance:`Ne pas simplifier le propos en : Dieu serait simplement fabriqué.`},{time:`1:07:00-1:13:00`,title:`Dieu violent, Ancien et Nouveau Testament`,restitution:`Römer refuse l’opposition simpliste entre un Ancien Testament violent et un Nouveau Testament miséricordieux.`,development:`Jonas montre déjà une figure de miséricorde dans l’Ancien Testament. À l’inverse, Matthieu 25 et l’Apocalypse montrent que le Nouveau Testament contient aussi jugement, violence ou guerre cosmique.`,vigilance:`Römer met en garde contre les lectures antijudaïques qui opposeraient le Dieu des Juifs au Dieu des chrétiens.`},{time:`1:13:00-1:16:00`,title:`Questions finales`,restitution:`Römer dit qu’il aimerait rencontrer le dernier rédacteur du Pentateuque, ou les auteurs et rédacteurs bibliques, pour confronter ses hypothèses de chercheur.`,development:`À propos de Noël, il en parle comme d’une fête de lumière, de lien et de traditions multiples, malgré son aspect commercial.`}],we={says:[`La Bible est une bibliothèque.`,`Les textes bibliques ont une histoire rédactionnelle.`,`Les traditions bibliques ont été transmises, recopiées, reprises et réinterprétées.`,`Les récits peuvent avoir une vérité narrative sans être des chroniques historiques.`,`Genèse 1 et Genèse 2 conservent des récits différents.`,`Adam renvoie d’abord à l’humain / au terrien.`,`Sodome ne parle pas d’homosexualité au sens moderne.`,`Le modèle d’un couple biblique unique est réducteur.`,`La Bible conserve des tensions et des pluralités internes.`,`Il faut éviter l’opposition Ancien Testament violent / Nouveau Testament doux.`],doesNotSay:[`Il ne dit pas que la Bible est simplement fausse.`,`Il ne dit pas que tout aurait été manipulé par complot.`,`Il ne dit pas que les catégories LGBT modernes se trouvent telles quelles dans la Bible.`,`Il ne dit pas que Sodome serait un texte sur l’homosexualité.`,`Il ne dit pas que la Bible n’a plus aucun statut sacré.`,`Il ne dit pas que l’Ancien Testament serait mauvais et le Nouveau Testament bon.`,`Il ne dit pas que l’histoire des textes annule toute valeur religieuse, littéraire ou existentielle.`]},Te=[[`Histoire canonique`,`Tanakh, Septante, Bibles catholiques, protestantes et orthodoxes : la Bible existe à travers plusieurs organisations textuelles et traditions de réception.`],[`Critique rédactionnelle`,`Les livres bibliques portent des traces de composition, de reprise, de juxtaposition et de réinterprétation.`],[`Philologie de la Genèse`,`Adam, ish, isha, tsela, humain, terrien, côté/côte : les choix de traduction modifient profondément la lecture théologique et anthropologique.`],[`Genre et sexualité`,`Sodome, Lévitique, eunuques, assinnu, Cantique des Cantiques : les textes bibliques et proche-orientaux anciens ne se laissent pas réduire aux catégories modernes.`],[`Violence divine`,`Les passages violents doivent être replacés dans leurs contextes littéraires, historiques, politiques et théologiques.`],[`Herméneutique`,`La Bible conserve des désaccords internes. Sa lecture exige donc débat, contextualisation et prudence.`],[`Yahvé et l’histoire de Dieu`,`L’Invention de Dieu interroge l’émergence historique du dieu biblique Yahvé, sans réduire la question à une opposition simple entre invention et vérité.`]],Ee=[[`Tanakh`,`Nom juif de la Bible hébraïque, formé à partir de Torah, Nevi’im et Ketuvim.`],[`Torah`,`Les cinq premiers livres de la Bible hébraïque.`],[`Nevi’im`,`Les Prophètes dans l’organisation juive du canon.`],[`Ketuvim`,`Les Écrits dans l’organisation juive du canon.`],[`Septante`,`Traduction grecque ancienne des Écritures juives, importante dans l’histoire des Bibles chrétiennes.`],[`Pentateuque`,`Ensemble des cinq premiers livres bibliques.`],[`Qumran`,`Site associé aux manuscrits de la mer Morte, témoins anciens de la transmission biblique.`],[`Massorètes`,`Savants juifs médiévaux ayant contribué à stabiliser la vocalisation et la transmission du texte hébreu.`],[`Adam`,`Terme lié à l’humain, au terrien, et non simplement prénom masculin moderne.`],[`Ish / Isha`,`Termes hébreux souvent traduits par homme et femme.`],[`Tsela`,`Terme souvent traduit par côte, mais pouvant aussi renvoyer au côté.`],[`Sodome`,`Récit biblique souvent mal associé à l’homosexualité ; Römer l’analyse plutôt comme violence, humiliation et violation de l’hospitalité.`],[`Lévitique`,`Livre biblique contenant notamment des prescriptions rituelles, sociales et sexuelles.`],[`Eunuque`,`Figure antique liée à la castration ou à une fonction sociale particulière dans certains contextes de cour.`],[`Assinnu`,`Figure mésopotamienne complexe, liée à certains cultes, notamment autour d’Ishtar ; à ne pas confondre directement avec les catégories modernes.`],[`Yahvé`,`Nom du dieu biblique étudié historiquement par Römer dans L’Invention de Dieu.`],[`Canon`,`Ensemble stabilisé de textes reconnus comme normatifs par une tradition religieuse.`],[`Critique rédactionnelle`,`Méthode d’étude des couches, reprises, compositions et réorganisations d’un texte.`]],De=[[`Vidéo YouTube`,`https://youtu.be/bstGOxKcUGM?is=eItC8bYjcC8fUZ_B`],[`Transcription Ausha`,`https://podcast.ausha.co/podcast-spiritualite/les-textes-bibliques-ont-e-te-manipule-s-thomas-romer-de-voile-tout-77`],[`Recension / contexte académique`,`https://journals.sagepub.com/doi/10.1177/000842989702600124`],[`Thomas Römer, L’Invention de Dieu`,``],[`Thomas Römer, Dieu obscur`,``],[`Thomas Römer, travaux sur l’homosexualité dans le Proche-Orient ancien et la Bible`,``]],Oe=`bstGOxKcUGM`,ke=`https://youtu.be/bstGOxKcUGM?is=eItC8bYjcC8fUZ_B`;function Ae(e){let t=e.split(`-`)[0].split(`:`).map(Number);return t.length===3?t[0]*3600+t[1]*60+t[2]:t[0]*60+t[1]}function je({id:e,eyebrow:t,title:n,intro:r,children:i}){return(0,C.jsxs)(`section`,{id:e,className:`scroll-mt-6 rounded-[30px] border border-white/12 bg-[radial-gradient(circle_at_88%_0%,rgba(214,179,106,0.08),transparent_34%),linear-gradient(145deg,rgba(11,13,20,0.84),rgba(5,7,13,0.92))] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)] sm:p-7 lg:p-9`,children:[t&&(0,C.jsx)(`p`,{className:`mb-3 text-xs font-black uppercase tracking-[0.24em] text-[#d6b36a]/75`,children:t}),(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold leading-tight text-[#f4f4f5] sm:text-3xl`,children:n}),r&&(0,C.jsx)(`p`,{className:`mt-4 max-w-[72ch] text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8`,children:r}),(0,C.jsx)(`div`,{className:`mt-6`,children:i})]})}function Me({source:e}){return(0,C.jsxs)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,className:`content-card text-left transition hover:-translate-y-0.5 hover:border-[#d6b36a]/40 hover:bg-white/[0.075]`,children:[(0,C.jsx)(`h3`,{className:`m-0 text-lg font-semibold text-[#f4f4f5]`,children:e.title}),(0,C.jsx)(`p`,{className:`mt-3 text-sm leading-7 text-zinc-400`,children:e.text}),(0,C.jsx)(`span`,{className:`mt-4 inline-flex text-sm font-bold text-[#d6b36a]`,children:`Ouvrir la source`})]})}function Ne({item:e,index:t}){return(0,C.jsxs)(`details`,{open:t===0,className:`group rounded-[24px] border border-white/12 bg-[linear-gradient(145deg,rgba(13,15,24,0.9),rgba(6,8,15,0.76))] p-4 shadow-[0_18px_70px_rgba(0,0,0,0.22)] sm:p-5`,children:[(0,C.jsxs)(`summary`,{className:`flex cursor-pointer list-none items-start justify-between gap-4`,children:[(0,C.jsxs)(`div`,{className:`min-w-0`,children:[(0,C.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2`,children:[(0,C.jsx)(`a`,{href:`https://www.youtube.com/watch?v=${Oe}&t=${Ae(e.time)}`,target:`_blank`,rel:`noreferrer`,className:`rounded-full border border-[#8ab4f8]/35 bg-[#8ab4f8]/10 px-3 py-1 text-xs font-black text-[#d7e6ff] transition hover:border-[#8ab4f8]/70`,children:e.time}),(0,C.jsx)(`span`,{className:`rounded-full border border-[#d6b36a]/18 bg-[#d6b36a]/8 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#ead6a4]/80`,children:`Restitution`})]}),(0,C.jsx)(`h3`,{className:`m-0 text-lg font-semibold leading-7 text-[#f4f4f5] sm:text-xl`,children:e.title})]}),(0,C.jsx)(`span`,{className:`mt-1 shrink-0 rounded-full border border-white/14 px-3 py-1 text-xs font-black text-zinc-300 transition group-open:rotate-45`,children:`+`})]}),(0,C.jsxs)(`div`,{className:`mt-5 grid gap-4 text-sm leading-7 text-zinc-400 sm:text-[0.95rem]`,children:[(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`b`,{className:`text-[#f4f4f5]`,children:`Restitution factuelle.`}),` `,e.restitution]}),e.development&&(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`b`,{className:`text-[#f4f4f5]`,children:`Développement.`}),` `,e.development]}),e.vigilance&&(0,C.jsxs)(`p`,{className:`rounded-[18px] border border-[#d6b36a]/18 bg-[#d6b36a]/8 p-4 text-[#ead6a4]/88`,children:[(0,C.jsx)(`b`,{children:`Point de vigilance.`}),` `,e.vigilance]}),e.dontSay&&(0,C.jsxs)(`p`,{className:`rounded-[18px] border border-[#8ab4f8]/18 bg-[#8ab4f8]/8 p-4 text-[#d7e6ff]/88`,children:[(0,C.jsx)(`b`,{children:`À ne pas lui faire dire.`}),` `,e.dontSay]})]})]})}function Pe({title:e,text:t}){return(0,C.jsxs)(`article`,{className:`content-card`,children:[(0,C.jsx)(`h3`,{className:`m-0 text-lg font-semibold text-[#f4f4f5]`,children:e}),(0,C.jsx)(`p`,{className:`mt-3 text-sm leading-7 text-zinc-400`,children:t})]})}function Fe({title:e,items:t,tone:n=`gold`}){return(0,C.jsxs)(`article`,{className:`rounded-[26px] border p-5 ${n===`blue`?`text-[#d7e6ff] border-[#8ab4f8]/22 bg-[#8ab4f8]/8`:`text-[#ead6a4] border-[#d6b36a]/22 bg-[#d6b36a]/8`}`,children:[(0,C.jsx)(`h3`,{className:`m-0 text-xl font-semibold`,children:e}),(0,C.jsx)(`ul`,{className:`mt-5 grid gap-3 pl-0 text-sm leading-7`,children:t.map(e=>(0,C.jsx)(`li`,{className:`list-none rounded-[18px] border border-white/10 bg-black/18 p-3 text-zinc-200/86`,children:e},e))})]})}function Ie({navigate:e}){return(0,C.jsx)(`section`,{className:`w-full overflow-x-hidden bg-[#07080d] py-6 text-[#f4f4f5]`,children:(0,C.jsxs)(`div`,{className:`wide-shell flex flex-col gap-6`,children:[(0,C.jsxs)(`article`,{className:`rounded-[30px] border border-white/12 bg-[radial-gradient(circle_at_82%_0%,rgba(138,180,248,0.12),transparent_34%),linear-gradient(145deg,#0b0d14,#07080d)] p-4 shadow-[0_28px_100px_rgba(0,0,0,0.42)] sm:p-5 lg:p-6`,children:[(0,C.jsx)(`h1`,{className:`m-0 mb-5 text-3xl font-semibold leading-tight text-[#f4f4f5] sm:text-5xl`,children:`Thomas Römer — Bible, violence, sexualité`}),(0,C.jsx)(re,{videoId:Oe,title:`Thomas Römer — Bible, violence, sexualité`,eyebrow:`Exploration biblique`,badges:[`Thomas Römer`,`Interview 2025`,`Ancien Testament`,`Histoire des textes`],note:`La restitution repose d’abord sur la transcription Ausha. Les titres éditoriaux ne sont pas confondus avec les thèses de l’invité.`,actions:(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`button`,{type:`button`,onClick:()=>e(`explorations`),className:`rounded-full border border-white/14 bg-white/[0.055] px-4 py-2 text-sm font-bold text-zinc-100 transition hover:border-[#d6b36a]/34`,children:`Retour aux Explorations`}),(0,C.jsx)(`a`,{href:ke,target:`_blank`,rel:`noreferrer`,className:`rounded-full border border-[#d6b36a]/30 bg-[#d6b36a]/12 px-4 py-2 text-sm font-bold text-[#ead6a4] transition hover:border-[#d6b36a]/52`,children:`Voir la vidéo source`})]}),children:(0,C.jsx)(`p`,{className:`text-base leading-8 text-zinc-300 sm:text-lg`,children:`Lecture factuelle et analytique d’un entretien avec Thomas Römer sur la Bible comme bibliothèque composite, plurielle et interprétée.`})})]}),(0,C.jsxs)(`section`,{className:`reading-shell rounded-[24px] border border-[#d6b36a]/20 bg-[#d6b36a]/8 p-5 text-sm leading-7 text-[#ead6a4]/88`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-xl font-semibold text-[#f4f4f5]`,children:`Méthode de lecture`}),(0,C.jsx)(`p`,{className:`mt-3`,children:`Cette page repose d’abord sur la transcription Ausha de l’entretien. La transcription semblant automatique, certaines formulations peuvent contenir des erreurs de reconnaissance. La restitution ci-dessous distingue donc les données établies, les reformulations prudentes et les contextualisations externes. Aucune citation directe n’est ajoutée si elle n’est pas vérifiable dans la source.`}),(0,C.jsx)(`p`,{className:`mt-3 font-semibold`,children:`Le titre éditorial de l’épisode ne doit pas être confondu avec une thèse brute de Thomas Römer.`})]}),(0,C.jsx)(je,{id:`sources`,eyebrow:`Sources`,title:`Sources utilisées`,children:(0,C.jsx)(`div`,{className:`card-grid`,children:xe.map(e=>(0,C.jsx)(Me,{source:e},e.href))})}),(0,C.jsx)(je,{id:`executif`,eyebrow:`Résumé exécutif`,title:`En une page`,children:(0,C.jsx)(`div`,{className:`card-grid`,children:Se.map(([e,t])=>(0,C.jsx)(Pe,{title:e,text:t},e))})}),(0,C.jsx)(je,{id:`horodatee`,eyebrow:`Ce que dit l’entretien`,title:`Lecture horodatée`,intro:`Restitution lisible par segments : horodatage, reformulation prudente, point de vigilance, et rappel de ce qu’il ne faut pas attribuer à Römer.`,children:(0,C.jsx)(`div`,{className:`grid gap-4`,children:Ce.map((e,t)=>(0,C.jsx)(Ne,{item:e,index:t},`${e.time}-${e.title}`))})}),(0,C.jsx)(je,{id:`dit-ne-dit-pas`,eyebrow:`Attribution`,title:`Ce que Römer dit / ne dit pas`,children:(0,C.jsxs)(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[(0,C.jsx)(Fe,{title:`Römer dit`,items:we.says}),(0,C.jsx)(Fe,{title:`Römer ne dit pas`,items:we.doesNotSay,tone:`blue`})]})}),(0,C.jsx)(be,{}),(0,C.jsx)(je,{id:`axes`,eyebrow:`Contextualisation académique`,title:`Axes de recherche`,intro:`Les axes suivants prolongent l’entretien. Ils ne remplacent pas la parole de Römer dans la vidéo ; ils servent à situer les grands dossiers évoqués.`,children:(0,C.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2`,children:Te.map(([e,t])=>(0,C.jsx)(Pe,{title:e,text:t},e))})}),(0,C.jsx)(je,{id:`glossaire`,eyebrow:`Repères`,title:`Glossaire`,children:(0,C.jsx)(`div`,{className:`grid gap-4 sm:grid-cols-2 lg:grid-cols-3`,children:Ee.map(([e,t])=>(0,C.jsxs)(`article`,{className:`content-card`,children:[(0,C.jsx)(`h3`,{className:`m-0 text-base font-semibold text-[#f4f4f5]`,children:e}),(0,C.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-zinc-400`,children:t})]},e))})}),(0,C.jsx)(je,{id:`bibliographie`,eyebrow:`Liens`,title:`Bibliographie et liens`,children:(0,C.jsx)(`div`,{className:`grid gap-3`,children:De.map(([e,t])=>t?(0,C.jsx)(`a`,{href:t,target:`_blank`,rel:`noreferrer`,className:`rounded-[18px] border border-white/12 bg-white/[0.055] p-4 text-sm font-semibold text-zinc-100 transition hover:border-[#d6b36a]/36 hover:text-[#ead6a4]`,children:e},e):(0,C.jsx)(`div`,{className:`rounded-[18px] border border-white/10 bg-white/[0.035] p-4 text-sm font-semibold text-zinc-300`,children:e},e))})})]})})}var Le=[{time:`01:20`,title:`La Bible n'est pas tombee du ciel`,mini:`Romer affirme que la Bible est une oeuvre humaine, issue de temoignages, d'experiences et de comprehensions de Dieu.`,body:`Thomas Romer commence par refuser l'idee d'une Bible descendue directement du ciel comme un bloc sacre immediatement constitue. La Bible est l'oeuvre d'humains qui ont mis par ecrit leur experience, leur memoire, leur comprehension de Dieu et de l'histoire. Elle est donc a lire comme une production religieuse, litteraire et historique, non comme un texte apparu sans mediation humaine.`,points:[`la Bible est une oeuvre humaine`,`elle temoigne d'experiences religieuses`,`elle ne se presente pas comme un livre ecrit d'un seul geste`,`l'histoire de sa formation est essentielle pour la comprendre`],keywords:[`Bible`,`oeuvre humaine`,`temoignage`,`experience de Dieu`]},{time:`02:21`,title:`Oralite, ecriture et transmission`,mini:`Les traditions bibliques ont souvent circule oralement avant d'etre mises par ecrit.`,body:`Romer rappelle que les textes bibliques ne sont pas apparus directement sous leur forme ecrite definitive. Beaucoup de recits, traditions, genealogies, lois ou memoires ont d'abord circule oralement. La mise par ecrit intervient ensuite, dans des contextes particuliers, a partir de traditions deja travaillees par la memoire collective.`,points:[`importance de l'oralite`,`passage progressif a l'ecriture`,`traditions collectives avant stabilisation textuelle`,`transmission comme transformation`],keywords:[`oralite`,`ecriture`,`tradition`,`transmission`]},{time:`02:34`,title:`Papyrus, copies et amplification`,mini:`La fragilite des supports et le travail des copistes ont favorise ajouts, precisions et amplifications.`,body:`Les textes etaient ecrits sur des supports fragiles, notamment le papyrus. Dans le climat du Levant, ces supports ne se conservaient pas indefiniment. Les textes devaient donc etre recopies. Or la copie n'etait pas un simple acte mecanique : les scribes pouvaient ajouter des details, clarifier un passage, amplifier un recit ou integrer une interpretation nouvelle.`,points:[`supports fragiles`,`necessite de recopier`,`role actif des scribes`,`ajout de precisions et de developpements`],keywords:[`papyrus`,`scribes`,`copie`,`amplification`]},{time:`02:57`,title:`Qumran et le travail des scribes`,mini:`Les manuscrits de la mer Morte montrent concretement le travail scribal : variantes, gloses, ajouts.`,body:`Les manuscrits de Qumran sont decisifs parce qu'ils donnent acces a des etats anciens du texte biblique. Ils montrent que les scribes ajoutaient parfois des gloses en marge. Ces gloses pouvaient ensuite etre integrees directement dans le corps du texte par un copiste ulterieur. On observe donc materiellement la maniere dont un texte biblique pouvait s'enrichir, se modifier et se complexifier.`,points:[`conservation exceptionnelle a Qumran`,`gloses marginales`,`integration progressive des ajouts`,`preuve materielle du travail scribal`],keywords:[`Qumran`,`manuscrits de la mer Morte`,`gloses`,`variantes`]},{time:`05:22`,title:`Stabilisation progressive du texte`,mini:`Le texte biblique se stabilise progressivement, sans cesser immediatement d'etre retouche.`,body:`Romer situe une stabilisation importante du texte de l'Ancien Testament vers les Ve-IVe siecles avant notre ere. Mais cette stabilisation ne signifie pas arret absolu. Des retouches, variantes et developpements continuent encore jusqu'a l'epoque romaine. La Bible est donc le resultat d'une longue fixation progressive.`,points:[`stabilisation vers -500 / -400`,`continuite des retouches`,`processus long`,`texte non fige immediatement`],keywords:[`stabilisation`,`Ancien Testament`,`epoque perse`,`epoque romaine`]},{time:`06:36`,title:`Incoherences et sedimentation`,mini:`Les incoherences bibliques sont des traces de couches redactionnelles superposees.`,body:`La Bible contient des incoherences parce que les redacteurs n'ont pas toujours supprime les versions anciennes lorsqu'ils ajoutaient ou reprenaient des traditions. Les recits plus recents ont ete places a cote des recits plus anciens, ou superposes a eux. Les tensions internes du texte deviennent ainsi des indices precieux de son histoire.`,points:[`contradictions comme traces`,`couches anciennes et recentes`,`superposition plutot que remplacement`,`texte comme sedimentation`],keywords:[`incoherences`,`sedimentation`,`reecriture`,`couches redactionnelles`]},{time:`06:49`,title:`Abraham, Sarah et Pharaon`,mini:`Genese 12 montre Abraham mentant au Pharaon au sujet de Sarah et tirant profit de la situation.`,body:`Dans Genese 12, Abraham fait passer Sarah pour sa soeur aupres du Pharaon. Le recit est embarrassant : Abraham ment, expose Sarah et recoit des biens en echange. Il n'est pas presente ici comme un modele moral parfaitement lisse. Ce passage conserve une tradition ancienne ou la figure patriarcale reste ambigue.`,points:[`Abraham ment`,`Sarah est presentee comme soeur`,`le Pharaon donne des biens`,`le texte conserve une ambiguite morale`],keywords:[`Abraham`,`Sarah`,`Pharaon`,`Genese 12`]},{time:`07:07`,title:`Abraham, Sarah et Abimelek`,mini:`Genese 20 reprend le motif, mais cherche davantage a excuser Abraham.`,body:`Dans Genese 20, un recit proche se repete avec Abimelek. Cette fois, le texte attenue la faute d'Abraham : Sarah est presentee comme sa demi-soeur, ce qui rend la parole d'Abraham moins mensongere. L'argent recu est aussi interprete autrement. Romer y voit un exemple de relecture interne : la Bible reprend un recit ancien et le corrige de l'interieur.`,points:[`reprise du meme motif`,`Abraham est davantage justifie`,`Sarah devient demi-soeur`,`la Bible interprete ses propres traditions`],keywords:[`Abimelek`,`Genese 20`,`relecture`,`justification`]},{time:`11:19`,title:`De la monolatrie au monotheisme`,mini:`Les anciens Israelites n'ont pas toujours ete monotheistes au sens strict.`,body:`Romer explique que Yahve fut d'abord compris comme le dieu d'Israel dans un monde ou d'autres peuples avaient aussi leurs dieux. Il ne s'agit donc pas, au depart, d'un monotheisme philosophique ou theologique strict. La situation ancienne releve plutot de la monolatrie : Israel adore son dieu, sans nier necessairement l'existence des autres dieux.`,points:[`Yahve comme dieu national`,`autres dieux reconnus`,`monolatrie avant monotheisme`,`evolution progressive`],keywords:[`monolatrie`,`Yahve`,`dieux nationaux`,`monotheisme`]},{time:`12:01`,title:`Jephthe et les dieux nationaux`,mini:`Le recit de Jephthe illustre une vision ou chaque peuple recoit sa terre de son dieu.`,body:`Dans l'histoire de Jephthe, la terre et les peuples sont penses a travers leurs dieux respectifs. Israel possede ce que Yahve lui donne ; d'autres peuples possedent ce que leurs divinites leur attribuent. Cette logique suppose un monde religieux pluriel, ou les dieux nationaux sont reconnus comme puissances attachees a des peuples et territoires.`,points:[`lien entre dieu, peuple et territoire`,`Yahve comme dieu d'Israel`,`coexistence de plusieurs divinites nationales`,`trace d'un ancien paysage religieux proche-oriental`],keywords:[`Jephthe`,`territoire`,`dieux nationaux`,`Israel`]},{time:`12:42`,title:`Deuteronome 32 et les fils d'Elyon`,mini:`Les versions anciennes de Deuteronome 32 suggerent une repartition des nations entre les fils d'Elyon.`,body:`Romer evoque les traditions textuelles anciennes du Deuteronome, notamment le grec et Qumran. Dans cette version, le dieu supreme Elyon repartit les nations entre ses fils, et Israel revient a Yahve. Cette representation implique que Yahve est d'abord situe dans un monde divin plus large, avant d'etre identifie au Dieu unique.`,points:[`importance du texte grec et de Qumran`,`Elyon comme dieu supreme`,`repartition des peuples`,`Israel comme part de Yahve`,`trace d'une theologie pre-monotheiste`],keywords:[`Deuteronome 32`,`Elyon`,`fils de Dieu`,`Yahve`]},{time:`13:43`,title:`Ashera, compagne ou epouse de Yahve`,mini:`Romer presente Ashera comme la compagne ou l'epouse de Yahve dans certaines formes anciennes du culte.`,body:`Des inscriptions archeologiques mentionnent des benedictions au nom de Yahve et de son Ashera. Romer interprete ces donnees comme l'indice qu'Ashera etait comprise comme la compagne, voire l'epouse de Yahve, dans certaines formes anciennes de la religion israelite. Cette affirmation montre que le monotheisme strict n'est pas le point de depart, mais le resultat d'une transformation et d'une selection religieuse.`,points:[`inscriptions Yahve et son Ashera`,`Ashera comme compagne ou epouse`,`forme ancienne du culte israelite`,`effacement ou marginalisation ulterieure`,`evolution vers le monotheisme strict`],keywords:[`Ashera`,`Yahve`,`epouse divine`,`archeologie`,`inscriptions`]},{time:`14:17`,title:`La Reine du ciel et les reformes religieuses`,mini:`Le culte de la Reine du ciel etait populaire et sa suppression fut contestee.`,body:`Romer evoque le culte de la Reine du ciel, tres populaire dans certains milieux. Sa suppression, notamment dans le cadre des reformes religieuses, n'a pas ete unanimement acceptee. Pour certains, l'abandon de ce culte a meme pu etre interprete comme une cause de catastrophe ou de chute. Cela montre que l'evolution vers le monotheisme strict fut conflictuelle.`,points:[`culte populaire de la Reine du ciel`,`suppression religieuse`,`resistances`,`interpretation de la catastrophe`,`conflit interne autour du culte legitime`],keywords:[`Reine du ciel`,`Josias`,`reforme`,`Jerusalem`]},{time:`16:01`,title:`Exil et monotheisme strict`,mini:`Le monotheisme strict s'impose surtout pendant et apres l'Exil.`,body:`L'Exil joue un role decisif dans la transformation de la religion d'Israel. Apres la perte du temple, de la royaute et de la terre, il faut repenser Yahve autrement. Le Dieu d'Israel ne peut plus etre seulement le dieu d'un territoire ou d'un sanctuaire. Il devient progressivement le Dieu unique, universel, capable d'agir meme dans la catastrophe et hors de Jerusalem.`,points:[`destruction de Jerusalem`,`perte du temple`,`crise de la royaute`,`universalisation de Yahve`,`consolidation du monotheisme`],keywords:[`Exil`,`monotheisme`,`Temple`,`Juda`]},{time:`17:54`,title:`Satan comme developpement tardif`,mini:`Les textes tardifs introduisent Satan pour deplacer la responsabilite du mal.`,body:`Romer explique que certains passages mettant en scene Satan ou l'Accusateur sont tardifs. Cette figure permet de repondre a une difficulte theologique : si Dieu est juste, comment penser son rapport au mal, a l'epreuve ou a la catastrophe ? Satan devient alors une figure de mediation ou de deplacement.`,points:[`apparition tardive de Satan`,`probleme du mal`,`deplacement de responsabilite`,`developpement theologique progressif`],keywords:[`Satan`,`Accusateur`,`mal`,`Job`]},{time:`18:33`,title:`Dieu, le bien et le mal`,mini:`Dans des couches anciennes, Dieu peut etre presente comme responsable du bien comme du malheur.`,body:`Dans certains textes anciens, Dieu est pense comme celui qui est a l'origine de tout, y compris des evenements negatifs. Cette conception devient plus difficile a accepter dans des traditions ulterieures. Les reecritures bibliques introduisent alors des mediations permettant de ne plus attribuer directement a Dieu certaines actions problematiques.`,points:[`Dieu comme source totale`,`difficulte theologique croissante`,`reecriture de certains recits`,`deplacement vers Satan ou l'Accusateur`],keywords:[`mal`,`theodicee`,`Samuel`,`Chroniques`]},{time:`19:25`,title:`Exode 3,14 comme interpretation theologique`,mini:`Je suis celui qui suis est une interpretation theologique tardive du nom Yahve.`,body:`Romer precise que l'explication du nom divin en Exode 3,14, a partir du verbe etre, releve d'une speculation theologique tardive. Le texte joue sur la proximite entre Yahve et le verbe etre, mais cette explication ne correspond pas necessairement a l'origine linguistique premiere du nom.`,points:[`Exode 3,14`,`jeu de mots theologique`,`interpretation tardive`,`difference entre theologie biblique et etymologie historique`],keywords:[`Exode 3,14`,`Je suis`,`Yahve`,`etymologie`]},{time:`20:05`,title:`Yahve, souffle et vent`,mini:`Romer rattache probablement le nom Yahve au souffle ou au vent.`,body:`Romer indique que la veritable racine linguistique du nom pourrait etre liee a l'action de souffler ou de faire souffler le vent. Yahve serait alors originellement associe a une manifestation atmospherique, au souffle, au vent, voire a une puissance du desert.`,points:[`racine liee au souffle`,`vent / manifestation atmospherique`,`dieu du desert ou de l'orage`,`origine non metaphysique du nom`],keywords:[`Yahve`,`souffle`,`vent`,`desert`]},{time:`20:36`,title:`Origine meridionale de Yahve`,mini:`Yahve aurait des racines au Sud : Madian, Edom, Neguev ou peninsule arabique.`,body:`Romer situe l'origine de Yahve dans le Sud, en lien avec le desert, les territoires madianites ou edomites, le Neguev, voire la peninsule arabique. Yahve ne serait donc pas d'abord une divinite de Jerusalem, mais une puissance meridionale progressivement adoptee par Israel.`,points:[`origine sudiste`,`Madian`,`Edom`,`Neguev`,`integration progressive a Israel`],keywords:[`Madian`,`Edom`,`Neguev`,`Yahve`]},{time:`21:26`,title:`Les Shasous de Yahwa`,mini:`Des textes egyptiens mentionnent les Shasous de Yahwa / Yhw.`,body:`Romer mobilise les textes egyptiens qui mentionnent des nomades appeles Shasous de Yahwa ou Yhw. Cette donnee est importante parce qu'elle soutient l'hypothese d'une origine meridionale du nom Yahve. Elle ne constitue pas une preuve totale de l'ensemble de la theologie biblique, mais elle offre un indice ancien et precieux.`,points:[`attestations egyptiennes`,`nomades Shasous`,`Yahwa / Yhw`,`indice d'origine sudiste`,`lien avec Madian / Edom / desert`],keywords:[`Shasous`,`Egypte`,`Yahwa`,`Yhw`]},{time:`23:22`,title:`Pas de preuve d'un Exode massif`,mini:`Il n'existe pas de preuve archeologique d'un Exode massif de millions de personnes.`,body:`Romer rappelle qu'aucune preuve archeologique ne permet de soutenir l'idee d'un Exode massif tel que le raconte litteralement le texte biblique. L'image de millions de personnes quittant l'Egypte et traversant la mer en une nuit ne correspond pas aux donnees disponibles.`,points:[`absence de preuve archeologique`,`impossibilite du scenario massif litteral`,`distinction entre recit et evenement historique`,`necessite d'une lecture critique`],keywords:[`Exode`,`historicite`,`archeologie`]},{time:`23:30`,title:`L'Exode comme mythe fondateur`,mini:`L'Exode est un mythe fondateur, non un simple mensonge historique.`,body:`Romer interprete l'Exode comme un mythe fondateur. Cela ne veut pas dire que le recit est faux ou inutile, mais qu'il structure l'identite d'Israel. Il peut s'appuyer sur des souvenirs diffus : groupes semitiques presents en Egypte, sorties ponctuelles, experiences de domination, recul de l'emprise egyptienne sur le Levant.`,points:[`mythe fondateur`,`memoire diffuse`,`identite d'Israel`,`liberation comme matrice theologique`,`distinction entre mythe et mensonge`],keywords:[`Exode`,`mythe fondateur`,`memoire`,`liberation`]},{time:`24:41`,title:`Moise comme figure composite`,mini:`Moise n'est pas accessible comme personnage historique direct ; il est une figure composite.`,body:`Romer explique qu'il n'existe pas de Moise historique directement accessible. Le personnage biblique semble etre une construction composite, une fusion de plusieurs figures ou souvenirs, notamment de hauts fonctionnaires semitiques ayant vecu dans un contexte egyptien.`,points:[`absence de Moise historique directement accessible`,`figure composite`,`souvenirs lies a l'Egypte`,`fonction de mediateur et fondateur`],keywords:[`Moise`,`Egypte`,`historicite`,`figure composite`]},{time:`29:05`,title:`Le nom egyptien de Moise`,mini:`Le nom Moise est d'origine egyptienne.`,body:`Le nom Moise est explique comme un nom d'origine egyptienne, comparable a des noms comme Ramses ou Thoutmosis. L'element mose / mes renvoie a l'idee d'etre ne ou engendre. Cette etymologie inscrit fortement la figure de Moise dans un horizon egyptien.`,points:[`nom egyptien`,`comparaison avec Ramses et Thoutmosis`,`idee de naissance / engendrement`,`memoire egyptienne du personnage`],keywords:[`Moise`,`nom egyptien`,`Ramses`,`Thoutmosis`]},{time:`29:53`,title:`Moise et le motif de Sargon`,mini:`Le recit de naissance de Moise reprend un motif ancien connu avec Sargon d'Akkad.`,body:`Le motif de l'enfant place sur les eaux puis sauve est connu dans des recits de legitimation anciens, notamment celui de Sargon d'Akkad. En reprenant ce motif, le recit biblique inscrit Moise dans une forme litteraire de naissance heroique ou fondatrice.`,points:[`enfant sauve des eaux`,`motif de legitimation`,`parallele avec Sargon`,`construction litteraire du personnage`],keywords:[`Sargon`,`Moise`,`naissance heroique`,`motif litteraire`]},{time:`31:16`,title:`Abraham comme figure d'ancetre`,mini:`Abraham est une figure mysterieuse liee a des traditions d'ancetre autour d'Hebron.`,body:`Romer presente Abraham comme une figure difficile a historiciser. Son nom etait courant. Il pourrait etre rattache a un culte d'ancetre autour d'un arbre sacre a Hebron, lieu de croisement entre groupes judeens, arabes ou ismaelites. Abraham devient ainsi une figure-carrefour.`,points:[`historicite difficile`,`nom courant`,`Hebron`,`arbre sacre`,`ancetre commun ou figure-carrefour`],keywords:[`Abraham`,`Hebron`,`ancetre`,`arbre sacre`]},{time:`34:34`,title:`La Bible et l'archeologie du Levant`,mini:`Sans la Bible, le Levant n'aurait probablement pas ete autant fouille.`,body:`Romer souligne que la Bible a fortement stimule l'archeologie du Levant. Les recits, lieux et noms bibliques ont oriente de nombreuses recherches. Mais l'archeologie ne doit pas etre reduite a une tentative de prouver la Bible : elle permet aussi de nuancer, deplacer ou contredire certaines lectures.`,points:[`role moteur de la Bible dans les fouilles`,`importance du Levant`,`archeologie comme dialogue critique`,`ni preuve naive, ni destruction du texte`],keywords:[`archeologie biblique`,`Levant`,`fouilles`]},{time:`35:12`,title:`Kiriath-Jearim`,mini:`Romer evoque les fouilles de Kiriath-Jearim, lieu associe a l'Arche d'Alliance.`,body:`Les fouilles a Kiriath-Jearim, auxquelles Romer est associe, ont revele un site important, avec un sanctuaire antique et une plateforme monumentale. Ce site est lie dans la tradition biblique a l'Arche d'Alliance, ce qui en fait un lieu majeur pour articuler texte biblique et archeologie.`,points:[`Kiriath-Jearim`,`sanctuaire antique`,`plateforme monumentale`,`lien avec l'Arche d'Alliance`,`croisement texte / terrain`],keywords:[`Kiriath-Jearim`,`Arche`,`sanctuaire`,`archeologie`]},{time:`36:54`,title:`L'Arche comme coffre sacre`,mini:`Romer avance l'hypothese d'une Arche comparable a un coffre sacre transportable.`,body:`Romer propose que l'Arche d'Alliance ait pu ressembler a des coffres sacres transportables connus en Egypte. Il avance l'hypothese qu'elle aurait pu contenir une ou deux petites statuettes anthropomorphes de Yahve. Cette hypothese eclaire la tension entre anciennes formes figuratives et aniconisme ulterieur.`,points:[`coffre sacre transportable`,`paralleles egyptiens`,`hypothese de statuettes de Yahve`,`ancien regime figuratif`,`tension avec l'aniconisme`],keywords:[`Arche`,`coffre sacre`,`statuettes`,`Yahve`]},{time:`37:07`,title:`Reinterpretation aniconique de l'Arche`,mini:`Lorsque le culte devient aniconique, l'Arche est reinterpretee comme contenant les Tables de la Loi.`,body:`Dans un contexte ou les representations divines deviennent problematiques ou interdites, le contenu de l'Arche est reinterprete. Elle ne contient plus des representations de Yahve, mais les Tables de la Loi. L'interdiction de regarder a l'interieur peut alors etre comprise comme la trace d'une ancienne tension cultuelle.`,points:[`passage a l'aniconisme`,`remplacement des images par la Loi`,`Tables de la Loi`,`interdit du regard`,`reecriture theologique`],keywords:[`aniconisme`,`Arche`,`Tables de la Loi`,`image divine`]},{time:`41:13`,title:`La critique historique comme liberation`,mini:`La lecture historico-critique libere les textes de certaines lectures dogmatiques.`,body:`Romer defend la lecture historico-critique comme une demarche liberatrice. Elle ne detruit pas la Bible ; elle permet au contraire de distinguer le texte lui-meme de certaines interpretations tardives, parfois dogmatiques ou traumatisantes. Lire historiquement permet de mieux entendre ce que les textes disent vraiment.`,points:[`critique historique`,`liberation du texte`,`distinction texte / dogme`,`lecture moins culpabilisante`,`dialogue renouvele`],keywords:[`critique historique`,`liberation`,`Bible`]},{time:`41:20`,title:`Genese 3 et le peche originel`,mini:`Genese 3 ne contient pas explicitement le concept de peche originel.`,body:`Romer rappelle que le concept de peche originel n'est pas present comme tel dans Genese 3. Le mot peche n'y figure pas. Le recit peut etre lu comme une transgression, mais aussi comme un passage, une maturation, une sortie de l'innocence et une entree dans la condition humaine.`,points:[`absence du mot peche`,`distinction texte / doctrine ulterieure`,`transgression`,`maturation humaine`,`relecture non culpabilisante`],keywords:[`Genese 3`,`peche originel`,`transgression`]},{time:`41:56`,title:`Sodome et Gomorrhe`,mini:`Le recit de Sodome ne vise pas originellement une condamnation de l'homosexualite.`,body:`Romer explique que le recit de Sodome et Gomorrhe n'a pas, a l'origine, le sens qu'on lui a souvent attribue dans certaines lectures religieuses tardives. Il ne s'agit pas d'abord d'une condamnation de l'homosexualite, mais d'un recit portant sur la violence, l'inhospitalite, l'humiliation et la corruption sociale.`,points:[`critique d'une lecture reductrice`,`importance du contexte ancien`,`hospitalite`,`violence collective`,`reception ulterieure`],keywords:[`Sodome`,`Gomorrhe`,`hospitalite`,`violence`]},{time:`42:25`,title:`Droit de reinterpreter`,mini:`Les auteurs bibliques ayant eux-memes reinterprete leurs traditions, les lecteurs peuvent aussi dialoguer avec le texte.`,body:`Romer souligne que la Bible est deja faite de reinterpretations. Les auteurs bibliques ont repris, corrige, transforme et actualise des traditions anciennes. Des lors, les lecteurs contemporains peuvent eux aussi entrer dans ce dialogue, non pour inventer arbitrairement, mais pour continuer une conversation avec un texte vivant.`,points:[`Bible comme tradition de reinterpretation`,`droit au dialogue`,`actualisation`,`fidelite non figee`,`lecture vivante`],keywords:[`reinterpretation`,`tradition`,`lecteurs`,`dialogue`]},{time:`44:12`,title:`La Bible comme etre vivant`,mini:`Redonner a la Bible son histoire ne la detruit pas : cela la rend vivante.`,body:`En conclusion, Romer affirme que replacer la Bible dans son histoire ne revient pas a l'appauvrir. Au contraire, cela permet de la comprendre comme un etre vivant, un texte avec lequel on peut dialoguer. La Bible n'est pas un bloc fige, mais une tradition traversee par des voix, des crises, des ajouts, des lectures et des reprises.`,points:[`Bible vivante`,`histoire du texte`,`dialogue`,`complexite`,`critique comme approfondissement`],keywords:[`Bible vivante`,`histoire`,`dialogue`,`interpretation`]}],Re=[[`La Bible est une oeuvre humaine`,`La Bible nait d'experiences, de traditions, d'ecritures, de copies et de reecritures. Elle ne tombe pas du ciel comme un bloc acheve.`],[`Le texte biblique est stratifie`,`Ses incoherences et doublons sont des traces de couches redactionnelles successives, non de simples erreurs.`],[`Yahve a une histoire`,`Yahve n'est pas immediatement le Dieu unique du monotheisme classique. Il apparait dans un paysage religieux pluriel.`],[`Le monotheisme est un resultat`,`Le monotheisme strict s'impose progressivement, notamment a travers les crises, les reformes et l'Exil.`],[`Les recits fondateurs ne sont pas des reportages`,`L'Exode, Moise ou Abraham ne doivent pas etre lus comme de simples comptes rendus historiques, mais comme des recits et figures de memoire.`],[`La critique historique libere le texte`,`Elle permet de distinguer les textes de certaines lectures dogmatiques tardives, et de rendre la Bible plus vivante.`]],ze=[{title:`La Bible comme texte sedimente`,video:`La video insiste sur l'oralite, les supports fragiles, les copies, Qumran, les gloses et la stabilisation progressive.`,development:`La Bible hebraique se comprend comme un texte sedimente : traditions orales, premieres mises par ecrit, recopiages sur supports fragiles, gloses marginales, variantes, regroupements, expansions et stabilisations successives. Qumran donne un acces materiel a cette pluralite ancienne : un meme texte peut circuler sous des formes voisines mais non identiques. La canonisation ne supprime pas cette histoire ; elle en fixe une partie.`,issues:`L'enjeu est de penser le texte biblique comme archive vivante : ni chaos arbitraire, ni bloc tombe du ciel, mais tradition transmise, retouchee, lue et stabilisee dans des communautes.`,sources:[`Emanuel Tov, Textual Criticism of the Hebrew Bible`,`Eugene Ulrich, The Dead Sea Scrolls and the Origins of the Bible`,`Romer, Macchi, Nihan, Introduction a l'Ancien Testament`,`Konrad Schmid, The Old Testament: A Literary History`]},{title:`Incoherences, doublons et reecritures internes`,video:`Romer mobilise notamment Genese 12 et Genese 20 pour montrer comment un recit embarrassant peut etre repris et relu de l'interieur.`,development:`Les contradictions bibliques ne sont pas seulement des problemes a harmoniser : elles sont souvent des traces de transmission. Le doublet Abraham-Sarah-Pharaon / Abraham-Sarah-Abimelek montre une tradition reprise, nuancee, moralement retravaillee. La Bible conserve parfois cote a cote le recit ancien et sa reprise plus tardive. Cette logique vaut aussi pour les rapports entre Samuel et Chroniques, ou des recits sont relus a partir d'enjeux theologiques nouveaux.`,issues:`La contradiction devient un outil de lecture historique : elle signale le travail des scribes, des ecoles et des communautes.`,sources:[`Thomas Romer, Introduction a l'Ancien Testament`,`Jean-Louis Ska, Introduction to Reading the Pentateuch`,`Konrad Schmid, The Old Testament: A Literary History`]},{title:`Yhwh avant le monotheisme`,video:`L'entretien affirme que les anciens Israelites n'ont pas toujours ete monotheistes au sens strict.`,development:`Yahve apparait d'abord dans un paysage religieux pluriel, comme dieu d'Israel parmi d'autres dieux protecteurs de peuples. Cette situation releve de la monolatrie : on adore un dieu national sans nier necessairement l'existence d'autres puissances. Les textes gardent des traces d'assemblee divine, de dieux nationaux et de relations entre El, Elyon et Yahve. Le monotheisme biblique strict est donc le resultat d'une histoire religieuse et politique, pas un point de depart immediat.`,issues:`Cette lecture deplace la question : il ne s'agit plus seulement de demander ce que le monotheisme affirme, mais comment il s'est impose.`,sources:[`Thomas Romer, L'Invention de Dieu`,`Mark S. Smith, The Early History of God`,`Mark S. Smith, The Origins of Biblical Monotheism`,`John Day, Yahweh and the Gods and Goddesses of Canaan`,`Karel van der Toorn, Family Religion in Babylonia, Syria and Israel`]},{title:`Elyon, El et les fils divins`,video:`Romer evoque Deuteronome 32, le grec et Qumran, ou les nations sont reparties entre les fils d'Elyon.`,development:`Deuteronome 32,8-9 est un lieu majeur de critique textuelle et d'histoire religieuse. Le texte massoretique parle des fils d'Israel, tandis que des temoins anciens, dont la Septante et Qumran, preservent une lecture de type fils de Dieu. Cette version suppose un partage des nations entre des puissances divines, Israel revenant a Yahve. Elle conserve la trace d'une representation ou Yahve s'inscrit dans un pantheon ou une assemblee divine avant l'identification monotheiste.`,issues:`La variante textuelle n'est pas un detail : elle modifie la reconstruction du paysage religieux ancien.`,sources:[`Emanuel Tov, Textual Criticism of the Hebrew Bible`,`Mark S. Smith, The Origins of Biblical Monotheism`,`Thomas Romer, L'Invention de Dieu`,`John Day, Yahweh and the Gods and Goddesses of Canaan`]},{title:`Ashera, epouse de Yahve et feminin divin efface`,video:`Dans l'entretien, Romer presente Ashera comme la compagne ou l'epouse de Yahve dans certaines formes anciennes du culte israelite.`,development:`Les inscriptions de Kuntillet Ajrud et de Khirbet el-Qom mentionnent des benedictions liees a Yahve et son Ashera. Cette formule a nourri un important debat sur Ashera : deesse, symbole cultuel, parèdre, presence feminine associee a Yahve. Romer l'inscrit clairement dans l'histoire du monotheisme : le Dieu unique biblique emerge apres un processus de selection, d'effacement et de marginalisation des formes concurrentes, y compris du feminin divin. Le culte de la Reine du ciel, evoque en Jeremie 7 et 44, montre que ces formes populaires ont resiste.`,issues:`Dans l'entretien, Romer presente Ashera comme la compagne ou l'epouse de Yahve dans certaines formes anciennes du culte israelite. Cette donnee ne doit pas etre attenuee : elle est centrale pour comprendre que le monotheisme biblique strict est le resultat d'un processus historique.`,sources:[`William G. Dever, Did God Have a Wife?`,`Judith Hadley, The Cult of Asherah in Ancient Israel and Judah`,`Mark S. Smith, The Early History of God`,`Thomas Romer, L'Invention de Dieu`,`Othmar Keel, Christoph Uehlinger, Gods, Goddesses, and Images of God in Ancient Israel`]},{title:`Reforme de Josias et centralisation du culte`,video:`La Reine du ciel et les resistances aux reformes religieuses ouvrent la question d'une centralisation conflictuelle.`,development:`La reforme de Josias, racontee en 2 Rois 22-23, est associee a une centralisation du culte a Jerusalem, a la suppression des hauts lieux et a la lutte contre des pratiques locales. Dans une lecture historico-critique, cette reforme n'est pas seulement une purification religieuse : elle restructure l'espace du culte, redefinit la legitimite et marginalise des formes populaires, familiales ou locales. La Bible garde la memoire d'une reforme conflictuelle.`,issues:`La centralisation est aussi une operation politique et symbolique : elle produit un centre, des marges, et des cultes disqualifies.`,sources:[`2 Rois 22-23`,`Thomas Romer, L'Invention de Dieu`,`Israel Finkelstein, Neil Asher Silberman, The Bible Unearthed`,`Christophe Nihan, travaux sur les lois bibliques`]},{title:`L'Exil comme matrice du monotheisme strict`,video:`Romer situe l'imposition du monotheisme strict surtout pendant et apres l'Exil.`,development:`La destruction de Jerusalem, la perte du temple, de la royaute et de la terre forcent une reconfiguration radicale. Si Yahve etait seulement le dieu d'un territoire, la catastrophe serait une defaite divine. La pensee exilique et post-exilique universalise Yahve : il peut agir hors de son sanctuaire, juger son propre peuple, gouverner l'histoire et se presenter comme Dieu unique. L'Exil devient ainsi une matrice de redaction, de reecriture et de monotheisation.`,issues:`Le monotheisme apparait comme une reponse theologique a la catastrophe, non comme un simple principe abstrait.`,sources:[`Thomas Romer, L'Invention de Dieu`,`Rainer Albertz, Israel in Exile`,`Konrad Schmid, The Old Testament: A Literary History`,`Jean-Daniel Macchi, travaux sur l'Exil`]},{title:`Le nom Yahve : etymologie, souffle, desert`,video:`Romer distingue Exode 3,14 comme interpretation theologique tardive et l'hypothese d'une racine liee au souffle ou au vent.`,development:`Exode 3,14 propose une interpretation du nom divin par le verbe etre : Je suis / Je serai. Romer la comprend comme une speculation theologique, non comme l'origine linguistique premiere. L'hypothese du souffle ou du vent rattache Yahve a une puissance atmospherique ou desertique. Cette piste s'accorde avec l'origine meridionale : Madian, Edom, Neguev, peninsule arabique. Yahve serait d'abord une divinite du Sud progressivement integree a Israel.`,issues:`Le nom divin devient un lieu de tension entre etymologie, theologie et memoire geographique.`,sources:[`Thomas Romer, L'Invention de Dieu`,`Frank Moore Cross, Canaanite Myth and Hebrew Epic`,`Mark S. Smith, The Early History of God`,`Martin Leuenberger, travaux sur Yahve du Sud`,`Christian Frevel, travaux sur l'histoire religieuse d'Israel`]},{title:`Les Shasous de Yhw / Yahwa`,video:`Les textes egyptiens mentionnant les Shasous de Yahwa soutiennent l'hypothese sudiste.`,development:`Les listes topographiques egyptiennes parlent de groupes nomades Shasou associes a Yhw ou Yahwa. Ces attestations sont importantes parce qu'elles placent un nom proche de Yahve dans un horizon meridional et nomade. Elles ne prouvent pas toute la theologie biblique de Yahve, mais elles constituent un indice ancien pour comprendre comment un nom divin du Sud a pu etre adopte et reinterprete par Israel.`,issues:`Indice fort ne signifie pas preuve totale : le lien doit etre pose avec prudence, sans perdre sa force historique.`,sources:[`Donald B. Redford, travaux sur Egypte et Israel`,`Thomas Romer, L'Invention de Dieu`,`Anson Rainey, travaux sur les Shasou`,`Amihai Mazar, travaux sur les origines d'Israel`]},{title:`Satan, l'Accusateur et le probleme du mal`,video:`Romer relie le developpement de Satan au deplacement de la responsabilite du mal.`,development:`Dans 2 Samuel 24, Dieu incite David au recensement ; dans 1 Chroniques 21, c'est Satan qui pousse David. Cette reecriture montre une mutation theologique : il devient difficile d'attribuer directement a Dieu certaines actions problematiques. Dans Job 1-2, ha-satan appartient a la cour celeste comme accusateur, et non encore comme Satan chretien tardif. La figure se developpe progressivement pour penser le mal, l'epreuve et la responsabilite.`,issues:`Eviter l'anachronisme : le Satan biblique ancien n'est pas encore la figure demonologique pleinement construite des traditions ulterieures.`,sources:[`Job 1-2`,`2 Samuel 24`,`1 Chroniques 21`,`Peggy Day, An Adversary in Heaven`,`Archie T. Wright, travaux sur Satan et les esprits mauvais`,`Thomas Romer, travaux sur reecriture biblique`]},{title:`Exode : mythe fondateur et memoire historique`,video:`Romer distingue l'absence de preuve d'un Exode massif et la force identitaire du recit comme mythe fondateur.`,development:`L'Exode ne doit pas etre lu comme un reportage sur la sortie de millions de personnes. Il fonctionne comme recit fondateur : liberation, alliance, naissance d'un peuple, memoire de domination et de sortie. Il peut conserver des souvenirs diffus : groupes semitiques en Egypte, experiences de travail force, sorties ponctuelles, recul de l'emprise egyptienne sur le Levant. Le mythe n'est pas un mensonge ; il est une matrice narrative et theologique.`,issues:`La question historique devient : quelles experiences ont ete condensees dans un recit fondateur ?`,sources:[`Thomas Romer, L'Invention de Dieu`,`Israel Finkelstein, Neil Asher Silberman, The Bible Unearthed`,`Jan Assmann, Moses the Egyptian`,`William G. Dever, travaux sur les origines d'Israel`,`Richard Elliott Friedman, The Exodus`]},{title:`Moise : nom egyptien et figure composite`,video:`Romer presente Moise comme une figure composite, au nom egyptien, rattachee a des memoires egyptiennes.`,development:`Moise n'est pas directement accessible comme individu historique. Son nom, proche de l'element egyptien mose / mes, le rattache a l'Egypte, comme Ramses ou Thoutmosis. Le recit de l'enfant sauve des eaux reprend un motif ancien de legitimation, connu notamment avec Sargon d'Akkad. Moise devient figure de mediation : Egypte, desert, loi, peuple, liberation. Il condense plusieurs memoires et fonctions fondatrices.`,issues:`Moise est moins un dossier biographique qu'un noeud de memoire : nom, recit de naissance, fonction politique, mediation religieuse.`,sources:[`Jan Assmann, Moses the Egyptian`,`Thomas Romer, travaux sur Moise`,`Jean-Louis Ska, travaux sur le Pentateuque`,`Konrad Schmid, travaux sur le Pentateuque`]},{title:`Abraham, Hebron et l'ancetre fondateur`,video:`Romer presente Abraham comme une figure mysterieuse, difficile a historiciser, liee a Hebron.`,development:`Abraham peut etre compris comme figure d'ancetre autour d'Hebron, dans un contexte de traditions judéennes, arabes ou ismaelites. Le nom est courant, la figure est carrefour, et le recit organise une memoire commune. L'arbre sacre, le culte d'ancetre et le lieu d'Hebron permettent de comprendre Abraham comme point de convergence de groupes et de traditions.`,issues:`La figure patriarcale n'est pas seulement un individu du passe ; elle organise des appartenances.`,sources:[`Thomas Romer, L'Invention de Dieu`,`Jean-Louis Ska, etudes sur Abraham`,`Israel Finkelstein, travaux sur les patriarches`,`Thomas Romer, travaux sur les traditions patriarcales`]},{title:`Arche d'Alliance, Kiriath-Jearim et aniconisme`,video:`Romer evoque Kiriath-Jearim, l'Arche comme coffre sacre et l'hypothese d'anciennes statuettes de Yahve.`,development:`Kiriath-Jearim articule texte biblique et terrain archeologique : sanctuaire, plateforme monumentale, memoire de l'Arche. Romer propose que l'Arche ait pu ressembler a des coffres sacres transportables egyptiens et contenir une ou deux statuettes anthropomorphes de Yahve. Lorsque le culte devient aniconique, le contenu est reinterprete : non plus images, mais Tables de la Loi. L'interdit de regarder dans l'Arche peut garder la trace d'une tension cultuelle ancienne.`,issues:`L'aniconisme n'efface pas seulement des images ; il reecrit la memoire de leur presence possible.`,sources:[`Thomas Romer, publications sur Kiriath-Jearim`,`Israel Finkelstein, Thomas Romer, Christophe Nicolle, travaux sur Kiriath-Jearim`,`Othmar Keel, Christoph Uehlinger, Gods, Goddesses, and Images of God in Ancient Israel`,`Tryggve Mettinger, No Graven Image?`]},{title:`Genese 3 sans peche originel`,video:`Romer rappelle que Genese 3 ne contient pas explicitement le concept de peche originel.`,development:`Le recit de Genese 3 parle de transgression, de connaissance, de passage, de sortie d'un etat initial, mais le mot peche n'y figure pas. La doctrine du peche originel releve de lectures ulterieures, notamment augustiniennes. Une lecture historico-critique peut rendre le texte moins culpabilisant : il devient recit de condition humaine, de maturation, de limite et de responsabilite.`,issues:`Distinguer texte hebraique et doctrine ulterieure libere le recit d'une reception unique.`,sources:[`Genese 3`,`Paul Ricoeur, La symbolique du mal`,`James Barr, travaux sur Genese`,`Andre Wenin, lectures narratives de Genese`,`Thomas Romer, interventions sur lecture critique`]},{title:`Sodome et Gomorrhe : hospitalite, violence, interpretation`,video:`Romer affirme que le recit de Sodome ne vise pas originellement une condamnation de l'homosexualite.`,development:`Genese 19 doit etre replace dans un univers de l'hospitalite, de l'humiliation et de la violence collective. Ezechiel 16,49 parle de faute sociale, d'orgueil, d'abondance et de refus de soutenir le pauvre. Les lectures tardives ont souvent reduit Sodome a une condamnation sexuelle, mais l'analyse historico-critique montre un recit plus large sur la violence, la domination et la rupture de l'hospitalite.`,issues:`Le sens d'un texte ne se reduit pas a ses usages polemiques ulterieurs.`,sources:[`Genese 19`,`Ezechiel 16,49`,`Martti Nissinen, Homoeroticism in the Biblical World`,`Thomas Romer, interventions sur lecture historico-critique`,`John Boswell, histoire de reception a utiliser avec prudence`]}],Be=[{heading:`Source video`,items:[`Thomas Romer, entretien avec Louis Pernot, D'ou vient la Bible ?, Les Debats de l'Etoile, YouTube : https://youtu.be/Rc6obrXJEbY`]},{heading:`Sources bibliques`,items:[`Genese 3 ; Genese 12 ; Genese 19 ; Genese 20.`,`Exode 3.`,`Deuteronome 32.`,`Juges 11.`,`2 Samuel 24.`,`1 Chroniques 21.`,`Job 1-2.`,`Jeremie 7 ; Jeremie 44.`,`2 Rois 22-23.`,`Ezechiel 16.`]},{heading:`Thomas Romer`,items:[`Thomas Romer, L'Invention de Dieu, Seuil.`,`Thomas Romer, Jean-Daniel Macchi, Christophe Nihan, Introduction a l'Ancien Testament.`,`Thomas Romer, cours et conferences du College de France, chaire Milieux bibliques.`,`Thomas Romer, publications sur Kiriath-Jearim et l'Arche d'Alliance.`]},{heading:`Histoire religieuse d'Israel`,items:[`Mark S. Smith, The Early History of God.`,`Mark S. Smith, The Origins of Biblical Monotheism.`,`John Day, Yahweh and the Gods and Goddesses of Canaan.`,`William G. Dever, Did God Have a Wife?`,`Judith Hadley, The Cult of Asherah in Ancient Israel and Judah.`,`Othmar Keel, Christoph Uehlinger, Gods, Goddesses, and Images of God in Ancient Israel.`,`Karel van der Toorn, Family Religion in Babylonia, Syria and Israel.`]},{heading:`Texte biblique, Qumran et Pentateuque`,items:[`Emanuel Tov, Textual Criticism of the Hebrew Bible.`,`Eugene Ulrich, The Dead Sea Scrolls and the Origins of the Bible.`,`Jean-Louis Ska, Introduction to Reading the Pentateuch.`,`Konrad Schmid, The Old Testament: A Literary History.`]},{heading:`Exode, Moise, archeologie`,items:[`Jan Assmann, Moses the Egyptian.`,`Israel Finkelstein, Neil Asher Silberman, The Bible Unearthed.`,`Rainer Albertz, Israel in Exile.`,`Tryggve Mettinger, No Graven Image?`]}],Ve=`Rc6obrXJEbY`,He=`https://youtu.be/${Ve}`;function Ue(e){let t=e.split(`:`).map(Number);return t.length===3?t[0]*3600+t[1]*60+t[2]:t[0]*60+t[1]}function We({href:e,children:t,variant:n=`ghost`}){return(0,C.jsx)(`a`,{href:e,className:`rounded-full border px-4 py-2 text-sm font-bold transition ${n===`gold`?`border-amber-100/32 bg-amber-100/12 text-amber-50 hover:border-amber-100/54 hover:bg-amber-100/18`:`border-violet-100/16 bg-slate-950/48 text-slate-200 hover:border-amber-100/32 hover:text-amber-50`}`,children:t})}function Ge({id:e,eyebrow:t,title:n,intro:r,children:i}){return(0,C.jsxs)(`section`,{id:e,className:`scroll-mt-6 rounded-[30px] border border-amber-100/14 bg-[radial-gradient(circle_at_88%_0%,rgba(216,182,106,0.08),transparent_34%),linear-gradient(145deg,rgba(8,10,18,0.78),rgba(4,7,14,0.88))] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.28)] sm:p-7 lg:p-9`,children:[t&&(0,C.jsx)(`p`,{className:`mb-3 text-xs font-black uppercase tracking-[0.26em] text-amber-100/70`,children:t}),(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold leading-tight text-[#f4efe4] sm:text-3xl`,children:n}),r&&(0,C.jsx)(`p`,{className:`mt-4 max-w-4xl text-sm leading-7 text-[#b8b2a4] sm:text-base sm:leading-8`,children:r}),(0,C.jsx)(`div`,{className:`mt-6`,children:i})]})}function Ke({item:e,index:t}){return(0,C.jsxs)(`details`,{open:t===0,className:`group rounded-[24px] border border-violet-100/14 bg-[linear-gradient(145deg,rgba(8,10,18,0.88),rgba(4,7,14,0.74))] p-4 shadow-[0_18px_70px_rgba(0,0,0,0.22)] sm:p-5`,children:[(0,C.jsxs)(`summary`,{className:`flex cursor-pointer list-none items-start justify-between gap-4`,children:[(0,C.jsxs)(`div`,{className:`min-w-0`,children:[(0,C.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2`,children:[(0,C.jsx)(`a`,{href:`https://www.youtube.com/watch?v=${Ve}&t=${Ue(e.time)}`,target:`_blank`,rel:`noreferrer`,className:`rounded-full border border-[#c86b5a]/34 bg-[#c86b5a]/10 px-3 py-1 text-xs font-black text-[#f0a096] transition hover:border-[#f0a096]/56`,children:e.time}),(0,C.jsx)(`span`,{className:`rounded-full border border-amber-100/14 bg-amber-100/[0.055] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-amber-50/72`,children:`Video`})]}),(0,C.jsx)(`h3`,{className:`m-0 text-lg font-semibold leading-7 text-[#f4efe4] sm:text-xl`,children:e.title}),(0,C.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-[#b8b2a4]`,children:e.mini})]}),(0,C.jsx)(`span`,{className:`mt-1 shrink-0 rounded-full border border-amber-100/16 px-3 py-1 text-xs font-black text-amber-100/72 transition group-open:rotate-45`,children:`+`})]}),(0,C.jsxs)(`div`,{className:`mt-5 grid gap-4 text-sm leading-7 text-[#b8b2a4] sm:text-[0.95rem]`,children:[(0,C.jsx)(`p`,{children:e.body}),(0,C.jsx)(`div`,{className:`grid gap-2 sm:grid-cols-2`,children:e.points.map(e=>(0,C.jsx)(`span`,{className:`rounded-[18px] border border-amber-100/12 bg-amber-100/[0.045] px-3 py-2 text-amber-50/78`,children:e},e))}),(0,C.jsxs)(`p`,{className:`rounded-[18px] border border-violet-100/14 bg-slate-950/44 p-3 text-xs font-semibold uppercase tracking-[0.12em] text-slate-300/76`,children:[`Mots-cles : `,e.keywords.join(` / `)]})]})]})}function qe({thesis:e,index:t}){return(0,C.jsxs)(`article`,{className:`rounded-[24px] border border-amber-100/14 bg-[#080a12]/70 p-5`,children:[(0,C.jsxs)(`span`,{className:`text-xs font-black uppercase tracking-[0.2em] text-[#c86b5a]/82`,children:[`These `,String(t+1).padStart(2,`0`)]}),(0,C.jsx)(`h3`,{className:`mt-3 text-xl font-semibold leading-7 text-[#f4efe4]`,children:e[0]}),(0,C.jsx)(`p`,{className:`mt-3 text-sm leading-7 text-[#b8b2a4]`,children:e[1]})]})}function Je({theme:e,index:t}){return(0,C.jsxs)(`article`,{className:`rounded-[26px] border border-amber-100/14 bg-[linear-gradient(145deg,rgba(8,10,18,0.86),rgba(4,7,14,0.74))] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.24)]`,children:[(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,C.jsxs)(`span`,{className:`rounded-full border border-[#c86b5a]/30 bg-[#c86b5a]/10 px-3 py-1 text-xs font-black text-[#f0a096]`,children:[`Axe `,String(t+1).padStart(2,`0`)]}),(0,C.jsx)(`span`,{className:`rounded-full border border-violet-100/18 bg-violet-100/[0.06] px-3 py-1 text-xs font-bold text-violet-50/76`,children:`Developpement thematique`})]}),(0,C.jsx)(`h3`,{className:`mt-4 text-xl font-semibold leading-7 text-[#f4efe4]`,children:e.title}),(0,C.jsxs)(`p`,{className:`mt-3 text-sm font-semibold leading-7 text-amber-100/78`,children:[(0,C.jsx)(`b`,{children:`Dans la video.`}),` `,e.video]}),(0,C.jsxs)(`div`,{className:`mt-5 grid gap-4 text-sm leading-7 text-[#b8b2a4]`,children:[(0,C.jsx)(`p`,{children:e.development}),(0,C.jsxs)(`p`,{className:`rounded-[20px] border border-amber-100/12 bg-amber-100/[0.045] p-4 text-amber-50/80`,children:[(0,C.jsx)(`b`,{children:`Enjeux.`}),` `,e.issues]})]}),(0,C.jsx)(`div`,{className:`mt-5 flex flex-wrap gap-2`,children:e.sources.map(e=>(0,C.jsx)(`span`,{className:`rounded-full border border-[#4d6f91]/22 bg-[#4d6f91]/10 px-3 py-1 text-xs text-[#b8b2a4]`,children:e},e))})]})}function Ye({group:e}){return(0,C.jsxs)(`article`,{className:`rounded-[24px] border border-amber-100/14 bg-[#080a12]/68 p-5`,children:[(0,C.jsx)(`h3`,{className:`m-0 text-lg font-semibold text-[#f4efe4]`,children:e.heading}),(0,C.jsx)(`ul`,{className:`mt-4 grid gap-3 pl-0 text-sm leading-7 text-[#b8b2a4]`,children:e.items.map(e=>{let t=e.match(/https?:\/\/\S+/);return(0,C.jsx)(`li`,{className:`list-none`,children:t?(0,C.jsx)(`a`,{href:t[0],target:`_blank`,rel:`noreferrer`,className:`text-amber-100/88 underline decoration-amber-100/28 underline-offset-4 hover:text-amber-50`,children:e}):e},e)})})]})}function Xe({navigate:e}){return(0,C.jsx)(`section`,{className:`w-full overflow-x-hidden bg-[#05070d] px-4 py-6 text-[#f4efe4] sm:px-6 lg:px-10`,children:(0,C.jsxs)(`div`,{className:`mx-auto flex w-full max-w-[1180px] flex-col gap-6`,children:[(0,C.jsxs)(`section`,{id:`video`,className:`rounded-[30px] border border-amber-100/16 bg-[radial-gradient(circle_at_82%_0%,rgba(216,182,106,0.08),transparent_34%),linear-gradient(145deg,#080a12,#05070d)] p-4 shadow-[0_28px_100px_rgba(0,0,0,0.42)] sm:p-5`,children:[(0,C.jsx)(`h2`,{className:`mb-4 text-xl font-semibold text-[#f4efe4] sm:text-2xl`,children:`Voir l’entretien`}),(0,C.jsx)(re,{videoId:Ve,title:`D’où vient la Bible ? | Entretien avec Thomas Römer`,eyebrow:`Entretien - Les Débats de l’Étoile`,badges:[`Thomas Römer`,`Bible`,`Yhwh`,`Exode`,`Monothéisme`],note:`Entretien de Thomas Römer avec Louis Pernot — restitution structurée à partir du résumé horodaté fourni.`,actions:(0,C.jsx)(We,{href:He,variant:`gold`,children:`Voir la vidéo source`}),children:(0,C.jsx)(`p`,{className:`text-sm leading-7 text-[#b8b2a4] sm:text-base`,children:`La vidéo reste en tête de page, avec une présentation synthétique à côté sur desktop et un empilement propre sur mobile.`})})]}),(0,C.jsxs)(`header`,{id:`titre`,className:`relative overflow-hidden rounded-[30px] border border-amber-100/16 bg-[radial-gradient(circle_at_80%_18%,rgba(77,111,145,0.16),transparent_34%),radial-gradient(circle_at_20%_88%,rgba(200,107,90,0.09),transparent_34%),linear-gradient(135deg,#080a12,#05070d)] p-5 shadow-[0_28px_100px_rgba(0,0,0,0.36)] sm:p-8 lg:p-10`,children:[(0,C.jsx)(`div`,{className:`pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(216,182,106,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(216,182,106,0.024)_1px,transparent_1px)] bg-[size:44px_44px]`}),(0,C.jsxs)(`div`,{className:`relative max-w-5xl`,children:[(0,C.jsx)(`p`,{className:`text-xs font-black uppercase tracking-[0.34em] text-amber-100/70`,children:`Theobiblos / Explorations`}),(0,C.jsxs)(`h1`,{className:`mt-4 text-4xl font-semibold leading-[1.04] tracking-[0.01em] text-[#f4efe4] sm:text-6xl`,children:[`D'ou vient la Bible ?`,(0,C.jsx)(`span`,{className:`block text-2xl text-amber-100/90 sm:text-4xl`,children:`Thomas Romer - restitution horodatee et axes de recherche`})]}),(0,C.jsx)(`p`,{className:`mt-5 max-w-4xl text-base leading-8 text-[#b8b2a4] sm:text-lg`,children:`Cette page distingue deux niveaux : d'abord une restitution horodatee de l'entretien, attachee au deroulement de la video ; ensuite des developpements thematiques qui elargissent les questions ouvertes par Thomas Romer a partir de sources academiques specialisees.`}),(0,C.jsx)(`div`,{className:`mt-5 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.14em]`,children:[`Intervenant : Thomas Romer`,`Entretien : Louis Pernot`,`Les Debats de l'Etoile`,`Duree : environ 46-47 min`,`Source : YouTube`].map(e=>(0,C.jsx)(`span`,{className:`rounded-full border border-amber-100/18 bg-amber-100/[0.07] px-3 py-1.5 text-amber-50/82`,children:e},e))}),(0,C.jsx)(`div`,{className:`mt-4 flex flex-wrap gap-2`,children:[`Bible`,`Yhwh`,`Ashera`,`Exode`,`Moise`,`Monotheisme`,`Archeologie biblique`].map(e=>(0,C.jsx)(`span`,{className:`rounded-full border border-violet-100/16 bg-violet-100/[0.055] px-3 py-1 text-xs text-violet-50/74`,children:e},e))}),(0,C.jsxs)(`div`,{className:`mt-6 flex flex-wrap gap-3`,children:[(0,C.jsx)(`button`,{type:`button`,onClick:()=>e(`explorations`),className:`rounded-full border border-amber-100/20 bg-[#080a12]/72 px-4 py-2 text-sm font-bold text-[#f4efe4] transition hover:border-amber-100/40`,children:`Retour aux Explorations`}),(0,C.jsx)(We,{href:He,variant:`gold`,children:`Voir la video`}),(0,C.jsx)(We,{href:`#resume`,children:`Aller au resume horodate`}),(0,C.jsx)(We,{href:`#axes`,children:`Aller aux axes`})]})]})]}),(0,C.jsx)(`nav`,{className:`sticky top-3 z-20 overflow-x-auto rounded-[22px] border border-amber-100/14 bg-[#05070d]/86 p-2 shadow-[0_16px_60px_rgba(0,0,0,0.3)] backdrop-blur`,children:(0,C.jsx)(`div`,{className:`flex min-w-max gap-2`,children:[[`video`,`Video`],[`titre`,`Titre`],[`resume`,`Resume`],[`theses`,`Theses`],[`axes`,`Axes`],[`bibliographie`,`Sources`],[`methode`,`Methode`],[`conclusion`,`Conclusion`]].map(([e,t])=>(0,C.jsx)(`a`,{href:`#${e}`,className:`rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#b8b2a4] transition hover:bg-amber-100/8 hover:text-amber-50`,children:t},e))})}),(0,C.jsx)(Ge,{id:`resume`,eyebrow:`Ce que dit la video`,title:`Resume horodate de l'entretien`,intro:`Un resume developpe mais condense visuellement : chaque accordéon suit un moment precis de l'entretien, avec timecode cliquable, synthese, points clefs et mots-cles.`,children:(0,C.jsx)(`div`,{className:`grid gap-4`,children:Le.map((e,t)=>(0,C.jsx)(Ke,{item:e,index:t},`${e.time}-${e.title}`))})}),(0,C.jsx)(Ge,{id:`theses`,eyebrow:`Carte synthetique`,title:`Carte synthetique des theses`,children:(0,C.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2 lg:grid-cols-3`,children:Re.map((e,t)=>(0,C.jsx)(qe,{thesis:e,index:t},e[0]))})}),(0,C.jsx)(Ge,{id:`axes`,eyebrow:`Developpements thematiques`,title:`Axes de recherche ouverts par l'entretien`,intro:`Ces sections approfondissent les enjeux a partir de sources specialisees. Elles ne remplacent pas la restitution de la video : elles l'eclairent par l'histoire des textes, l'archeologie, la critique textuelle et l'histoire religieuse d'Israel.`,children:(0,C.jsx)(`div`,{className:`grid gap-5 lg:grid-cols-2`,children:ze.map((e,t)=>(0,C.jsx)(Je,{theme:e,index:t},e.title))})}),(0,C.jsx)(Ge,{id:`bibliographie`,eyebrow:`Sources scientifiques / bibliographiques`,title:`Bibliographie et sources`,children:(0,C.jsx)(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:Be.map(e=>(0,C.jsx)(Ye,{group:e},e.heading))})}),(0,C.jsx)(Ge,{id:`methode`,eyebrow:`Notes de methode`,title:`Notes de methode`,children:(0,C.jsxs)(`div`,{className:`grid gap-4 text-sm leading-7 text-[#b8b2a4]`,children:[(0,C.jsx)(`p`,{children:`Cette page distingue strictement la restitution de l'entretien et les developpements thematiques. Le resume horodate suit le contenu de la video. Les sections thematiques approfondissent les enjeux a partir de sources academiques specialisees.`}),(0,C.jsx)(`p`,{children:`Les hypotheses sont signalees comme hypotheses. Les affirmations explicites de Romer ne sont pas attenuees sans preuve contraire. Les sources secondaires ne doivent pas etre utilisees pour remplacer le propos de la video, mais pour l'eclairer.`}),(0,C.jsx)(`p`,{className:`rounded-[20px] border border-[#c86b5a]/24 bg-[#c86b5a]/8 p-4 font-semibold text-[#f4efe4]/88`,children:`Resume != commentaire. Video != bibliographie generale. Hypothese != fait etabli. Developpement academique != correction du propos de Romer.`})]})}),(0,C.jsx)(Ge,{id:`conclusion`,eyebrow:`Conclusion`,title:`Bible comme archive vivante`,children:(0,C.jsxs)(`div`,{className:`grid gap-5 text-base leading-8 text-[#b8b2a4]`,children:[(0,C.jsx)(`p`,{children:`L'entretien de Thomas Romer montre que la Bible n'est pas un bloc fige, mais une archive vivante : une oeuvre humaine, historique, scribale et theologique, traversee par des reecritures, des conflits, des corrections et des relectures.`}),(0,C.jsx)(`p`,{children:`La force de cette approche n'est pas de reduire la Bible a un simple document ancien, mais de lui rendre son epaisseur : celle d'un texte qui garde les traces de ses propres transformations. Yahve, Moise, l'Exode, Abraham, Ashera, l'Arche ou le monotheisme ne sont pas seulement des themes religieux ; ce sont des lieux ou se croisent memoire, pouvoir, culte, recit, archeologie et interpretation.`}),(0,C.jsx)(`p`,{className:`rounded-[22px] border border-amber-100/16 bg-amber-100/[0.06] p-5 text-lg font-semibold leading-8 text-amber-50/88`,children:`Redonner a la Bible son histoire, ce n'est donc pas l'appauvrir. C'est la rendre a sa complexite, a sa conflictualite et a sa puissance de dialogue.`})]})})]})})}var Ze=`# Page Codex — Église laïque vs Église cléricale

> **Destination suggérée :** section \`Explorations\` du site Theo.  
> **Objectif :** créer une page longue, lisible, structurée, responsive, avec vidéo en haut, transcription accessible, analyse thématique de la conférence, puis étude historique, ecclésiologique, théologique et morphodynamique.  
> **Régime d’écriture :** étude critique non binaire : distinguer clergé, ministère, cléricalisme, laïcat, couple, conscience, corps, parole morale, emprise, autorité et réception.  
> **Point d’attention :** ne pas transformer la page en attaque personnelle contre le conférencier. Le problème traité est plus large : la conférence sert de symptôme local d’un champ historique et institutionnel beaucoup plus vaste.

---

## 0. Vidéo source en haut de page

La vidéo doit apparaître **tout en haut de la page**, avant toute introduction longue.

**Lien vidéo source :**  
https://youtu.be/y6HvOEovgG8?is=nLnkonWHWFcLZes6

**Lien YouTube sans paramètre complémentaire :**  
https://www.youtube.com/watch?v=y6HvOEovgG8

### Intégration demandée

Créer un bloc d’ouverture premium :

- titre de page ;
- sous-titre court ;
- lecteur vidéo intégré ;
- lien direct vers YouTube ;
- image de couverture de la vidéo si disponible ;
- mention claire : « Vidéo source » ;
- bouton ou ancre vers la transcription texte ;
- bouton ou ancre vers l’analyse de la conférence ;
- bouton ou ancre vers l’étude complète.

Exemple HTML possible :

\`\`\`html
<section class="hero-video">
  <div class="hero-copy">
    <p class="eyebrow">Exploration ecclésiologique</p>
    <h1>Église laïque vs Église cléricale</h1>
    <p class="lead">
      À partir d’une conférence sur la vie affective, le baiser et les relations,
      cette page analyse la tension entre peuple baptismal, parole cléricale,
      morale du corps, couples séculiers, conscience et dérives institutionnelles.
    </p>
    <div class="hero-actions">
      <a href="https://youtu.be/y6HvOEovgG8?is=nLnkonWHWFcLZes6" target="_blank" rel="noopener">Voir sur YouTube</a>
      <a href="#transcription">Lire la transcription accessible</a>
      <a href="#analyse-video">Lire l’analyse de la vidéo</a>
      <a href="#etude-complete">Aller à l’étude complète</a>
    </div>
  </div>

  <div class="video-frame">
    <iframe
      src="https://www.youtube.com/embed/y6HvOEovgG8"
      title="Vidéo source — Conférence Frère Antoine"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  </div>
</section>
\`\`\`

---

## 1. Transcription texte accessible

<section id="transcription"></section>

> **Instruction Codex :** créer une section accessible, lisible, repliable si nécessaire, mais indexable par le navigateur.  
> Ne pas mettre la transcription dans une image.  
> Ne pas la masquer complètement avec \`display:none\`, afin qu’elle reste accessible aux lecteurs d’écran et à la recherche interne.  
> Utiliser \`details\` / \`summary\` ou un accordéon accessible.

### Structure HTML recommandée

\`\`\`html
<section id="transcription" class="transcript-section">
  <h2>Transcription texte accessible</h2>
  <p class="section-note">
    Cette transcription permet de rendre le contenu de la vidéo consultable sans lecteur vidéo,
    accessible aux lecteurs d’écran et exploitable pour la lecture, la recherche et l’étude.
  </p>

  <details open>
    <summary>Afficher / masquer la transcription</summary>
    <article class="transcript-body">
      <!-- Coller ici la transcription ci-dessous -->
    </article>
  </details>
</section>
\`\`\`

### Transcription à intégrer

Source de transcription : fichier fourni \`transcription_conference_frere_antoine.pdf\`.  
La transcription ci-dessous est à intégrer comme texte lisible, idéalement avec paragraphes courts et blocs respirants.

<details open>
<summary>Transcription complète</summary>

TRANSCRIPTION DE LA CONFÉRENCE – FRÈRE ANTOINE (DOMINICAINS DE
MARSEILLE)
Sujet : La vie affective, les relations et le sens du baiser (« pécho »)
Lien de la vidéo : http://www.youtube.com/watch?v=y6HvOEovgG8

***

« J'ai une demande spéciale aujourd'hui, c'est que si ce soir vous sortez votre téléphone, la
seule chose impérative que je vous demande, c'est que la première chose que vous faites, c'est
de vous abonner au compte Instagram Dominicains Marseille que nous essayons en ce
moment de développer. Dominicains Marseille, ça c'est facile à trouver. Il y a beaucoup de trucs
débiles dessus, "bien pécho" ou "pas pécho", comment font les cathos...

Commençons. Pour préparer la conférence, comme tout bon dominicain, j'ai ouvert non pas ma
Bible, non pas le catéchisme, non pas la Somme de théologie, mais j'ai ouvert mon ordinateur
pour voir si j'avais déjà fait des choses dans le passé qui permettraient de me resservir sans
trop me fatiguer. Et là, avec stupeur et tremblement, je réalise que depuis 12 ans... oui, je suis
dominicain depuis 12 ans... j'ai fait non pas une, mais deux, et parfois trois fois par an, quelque
chose sur la vie affective, les bisous, la première fois, le mariage, tout ça. Et au Groupe Mission
Marseille, si on regarde sur le programme, il y a au moins deux fois par an, parfois deux et
demi, quelque chose sur ce sujet-là.

Et à chaque fois, la salle est remplie ! Et curieusement, ça n'est pas le cas de la conférence sur
la Trinité que je n'ose pas reproposer depuis 4 ans. Nous n'avons pas eu de conférence sur la
Trinité, grand mystère de notre foi. La dernière fois, c'était à une date stratégique, c'était bien
annoncé partout, il y avait 12 personnes. Alors c'est pas mal, mais bon... Les gens continuent à
venir [sur la vie affective] parce que la question n'est pas facile, et que même parfois elle est
difficile.

C'est très rare qu'en entretien un jeune vienne et dise : "Frère, est-ce qu'aujourd'hui on pourrait
parler de la Trinité ?" C'est très rare qu'en confession un jeune dise : "Frère, j'ai dit des choses
inadaptées sur la Trinité, j'ai mal parlé de la Trinité, j'ai été hérétique." Et si cela arrive, en
principe, le jeune accepte de se convertir. On lui dit : "Ah, tu ne dois pas le dire parce que c'est
faux." Et il dit : "D'accord, je ne le dirai plus." Et voilà.

Alors que pour ce qui touche à la vie affective, à la vie sexuelle, non seulement le péché parfois
se répète, mais il est plus difficile de sortir de la confession avec une résolution vraie, franche et
profonde de dire : "Oui, je ne veux plus jamais le faire." Si j'ai frappé quelqu'un, c'est pas bien...
Non, Grégory, c'est pas bien, ça n'est pas bien. Il y a eu de la colère, de la violence, il y a eu du
sang, je le regrette beaucoup. Et si je vais me confesser, je vais avoir la voix qui tremble un
peu, je vais demander pardon et j'aurai vraiment envie que ça n'arrive plus jamais. De même, si
j'ai dit qu'il n'y avait pas d'union des hypostases ou de circonscription trinitaire, ce qui est un
scandale absolu, j'ai dit cela, je le regrette, on me dit c'est pas bien, je dis je ne le ferai plus


---

jamais.

Autre exemple : "Frère, j'ai embrassé une fille en soirée..." Je ne vais pas dire que je le
regrette... Je le regrette totalement ? Je ne vais pas dire non plus... (Le rang du fond, je vous
entends bien !)... Je ne vais pas dire non plus que j'assume complètement. Est-ce que je le fais
à nouveau ? Est-ce que je suis sûr que quand je sors de confession je me dis : "Ça, plus
jamais" ? Est-ce que je suis certain que j'ai compris ce qu'on m'a dit ? Je vais recroiser
peut-être cette jeune fille (bonjour Mademoiselle !), je vais recroiser peut-être cette jeune fille,
qu'est-ce qui se passe à la prochaine soirée où je la vois ?

Alors je vais peut-être aller voir une conférence du frère Paul-Adrien ou d'autres conférenciers
sur le net, auxquels vous pouvez aussi vous abonner, et je vais me former, je vais lire des
livres... C'est bon, tout ça. Et pourtant, je reviens à la conférence d'après parce que c'est pas
clair et j'ai besoin de réviser un peu. Et donc c'est bon, et je continuerai à le faire, de préciser un
peu les choses, et pas toujours sous le même angle.

Donc, si vous voulez savoir précisément ce qu'on va faire aujourd'hui avant de vous en aller...
après on fera une petite pause, on peut s'en aller ? Non, c'est pas vrai. Aujourd'hui, nous
parlons plutôt "bisous". Il y a eu un grand débat en amont de cette conférence sur la
signification du mot "pécho" qui évolue chaque année au gré des utilisations dans les réseaux
sociaux. À Lacordaire, où j'étais aumônier du primaire, j'ai entendu un petit de CE1 dire : "Ce
soir, Viken, j'attends plus pour lui. Viken, il va pécho Manon." Et la réponse était quand même la
plus mignonne qui soit : "Non, c'est déjà fait, frère, c'est le 20." Et c'est pas exactement la
même chose que quand vos amis vous regardent le vendredi matin... (je ne sais pas si on va
encore en soirée le jeudi à votre âge, je ne sais plus, mais bon bref)... un peu blafard comme
ça, et ils te disent : "Alors, toi et Pécho ? Toi et elle ?" Et là, on sent peut-être un peu plus que
par rapport à Viken et Manon... J'espère, Viken, si tu me regardes, j'espère que nous en
sommes restés à des choses très mignonnes !

Donc ce soir, c'est bisous. Si vous voulez des choses plus explicites, il y a d'autres conférences
sur la chaîne, en particulier celle sur la Théologie du corps. Là, on aborde un geste particulier et
on l'aborde dans des circonstances différentes. Donc le même geste, le même bisou, on va le
regarder dans plusieurs circonstances et voir en quoi parfois c'est un geste adapté, bon et sain,
et parfois un geste inadapté qui peut entraîner des choses encore moins adaptées.

Alors, je suis précis 5 minutes, mais je pense que c'est bien de dire de quoi on parle, parce qu'il
y a bisous et bisous. Et donc, le geste que l'on utilise ce soir est celui où deux personnes,
l'individu A et l'individu B, se placent dans une position où leur langue se touche, impliquant des
mouvements exploratoires de la langue de l'individu A dans la bouche de l'individu B, créant
une sensation tout à fait intense et intime. Il est rare que l'individu A et l'individu B tiennent leurs
mains dans leur dos lors de ce geste, et ce sera une des circonstances que l'on devra regarder.

Cas numéro 1 : L'individu A connaît l'individu B, et mieux, ils s'aiment. Voilà plusieurs mois qu'ils


---

passent beaucoup de leur temps libre ensemble, ils se sont ouvert leur âme plus qu'ils ne
l'avaient fait avec personne d'autre auparavant.

Cas numéro 2 : L'individu A et l'individu B ne s'étaient jamais vus avant le jour où le geste est
posé.

Alors, j'ai fait un petit sondage il y a deux semaines dont j'ai noté les résultats qui vont être
projetés tout à l'heure, en demandant au Groupe Mission sur la terrasse : "Ces deux cas,
qu'est-ce qui vous semble le plus adapté, Groupe Mission ?" Alors tout le monde m'a dit : "Enfin
mon frère, c'est évident qu'au Groupe Mission ce ne sera jamais le cas numéro 2. Jamais
quelqu'un au Groupe Mission ne va pécho quelqu'un qu'on a juste rencontré, ça n'arrive
jamais." Bien. Je pense que cette phrase est vraie la plupart du temps. Néanmoins, pour les
petites exceptions qui peuvent arriver, je vous propose de prendre 10 ou 12 minutes sur le cas
numéro 2, au cas où il concerne quelqu'un... soit dans cette pièce (certainement pas !), soit
derrière cet écran (certainement !). On verra.

Cas numéro 2 donc, puis cas numéro 1. Le cas numéro 2, vous avez compris, c'est : je connais
pas du tout la personne que je suis en train d'embrasser, ou du moins pas plus que depuis une
heure. Et le cas numéro 1 : je l'aime très fort.

Regardons le Cas numéro 2, alinéa 1 : Attention, il va falloir avoir un tout petit peu de structure
dans la tête. Cas numéro 2, alinéa 1 : je repère une demoiselle (bonjour Mademoiselle !) qui
traverse la piste de danse. Elle est là, je la vois, et avant la fin de la soirée, j'ai pécho. Après la
chanson, on va boire un verre ensemble, on échange nos prénoms, je découvre qu'elle est
ukrainienne, elle s'appelle Ivanka, elle ne parle ni français, ni anglais, ni espagnol. Elle a de
bonnes bases de suédois, ce qui ne m'avance pas beaucoup. Et je suis devant un choix.

Cas numéro 2, alinéa 1, sous-partie A : je me rends compte que j'ai été un peu chaud ce soir, et
peut-être que je vais m'arrêter là. Dire bonsoir à Ivanka, "je vais prier pour toi, et rentre bien
dans ton pays".

Cas numéro 2, sous-partie B : mais non, elle est là en Erasmus ! Ce cas-là n'arrive pas en
principe dans cette pièce... Je suis beaucoup, beaucoup trop chaud après ce petit moment avec
Ivanka, elle aussi, donc que ce soit espagnol, suédois, tchèque ou slovaque, le reste de la
soirée ne suppose pas trop qu'on parle. Et si, à tout hasard, cette situation commence à arriver
et que vous manquez un peu de motivation pour mettre un petit stop aux événements, je vous
invite quand même à penser à Philippine. Parce qu'aujourd'hui il y a Ivanka, mais dans 3 ans, il
y aura Philippine. Et Philippine, je veux l'épouser, et elle va m'épouser, et je l'aime, et elle
m'aime. Et pendant la préparation au mariage, on va être un petit peu sérieux et puis on va
regarder un tout petit peu les choses qu'on a cachées un peu sous le tapis dans notre vie. Et
d'un coup, Ivanka va ressortir comme ça, et ce sera beaucoup moins rigolo de la regarder entre
moi et Philippine que... enfin bref, vous m'avez compris. Bien. Donc, pensez s'il vous plaît à ce
que vous voulez faire avec votre cœur dans votre vie, ça vous aidera. Mais encore une fois, je


---

ne pense pas que ce cas soit hyper fréquent.

Ce qui peut peut-être un peu plus arriver (j'oublie Ivanka, je vais maintenant dans une soirée
beaucoup plus Groupe Mission) : il y a un garçon... Je suis devenu une fille, hein ! Non mais
voilà, il y a un contexte, parce que parfois il y a des conférences c'est un peu moins lisible, là
voilà. Je suis une fille, je vois un garçon, nous dansons ensemble, on fait un tour dans le parc,
on discute de tas de choses, on se correspond super bien, on est tout émus, il me fait rire, je le
fais rire, on parle sans voir le temps qui passe, il est tard, il m'embrasse, je l'embrasse. C'est
formidable.

On voit déjà que ce n'est pas la même chose. C'est un peu le jour et la nuit. Dans le premier
cas, il y avait une impression physique suivie immédiatement d'un stimulus qui conduisait à un
bisou. Là, il y a la raison qui est entrée en jeu. Il y avait une personne qui m'intéressait, pas
uniquement comme un corps, mais comme une personne. C'est l'âme d'une personne qui a
touché mon âme, c'est sa vie, c'est son humour, c'est ses centres d'intérêt, ce qu'elle veut, c'est
peut-être même sa foi, sait-on jamais. Il y a quelque chose qui est rentré.

Mais je suis un tout petit peu honnête avec moi-même, parce que je suis une fille sérieuse.
Dans ce cas numéro 2.2 dans lequel nous sommes, je suis attirée par ce garçon, et toute la
conversation qu'on va avoir, elle est quand même guidée aussi par cette excitation. Je n'ai pas
d'un côté mon cœur et mon esprit qui parlent à cette jeune fille ou à ce jeune homme, et de
l'autre mon corps qui se réveille quand il aura envie de se réveiller. Ce que je vais dire,
comment je vais le regarder, comment je vais me laisser regarder, comment je vais me
présenter... enfin, tout ce que je suis, toute ma relation avec ce garçon ou avec cette jeune fille
dépend quand même de cette attirance que j'ai en moi. Et donc, je ne suis pas sûr, moi, que le
baiser qui arrive à la fin de cet exemple soit juste le fruit du hasard du dernier moment où on n'a
pas tout à fait bien géré, où on aurait peut-être préféré faire autrement, mais ça s'est fait comme
ça et c'était super.

En gros, soit je commence à parler avec ce jeune homme en ayant déjà décidé un peu ce que
je faisais dans les soirées dans ma vie, en ayant décidé si oui ou non il est possible à la fin
d'une rencontre d'une personne que je l'embrasse ou que je ne l'embrasse pas. Soit j'ai pas
décidé grand-chose dans ma vie, je suis dans une spontanéité sympathique, et je ne suis pas
sûr que cette spontanéité rende la discussion beaucoup plus libre. Si j'ai décidé que c'est clair
qu'on n'embrassait pas quelqu'un la première fois qu'on le rencontrait, alors je pense que ma
conversation va être plus gratuite parce que je ne suis pas en train de chercher à arriver
quelque part, même malgré moi. Je suis simplement en train de faire ce que moi j'avais prévu
que je voulais faire : découvrir une personne. C'est un choix que j'ai posé à l'avance, point. Et
c'est ce que je fais.

Ah, vous me direz : "Mais mon frère, vous êtes complètement malade, on n'est pas en train de
calculer chaque parole qu'on dit pour réussir à embrasser une personne." Certes. Mais vous
avez peut-être remarqué dans ce qu'est le péché – enfin moi j'ai remarqué en tout cas dans ce


---

qu'est le péché pour ce qui touche à l'affectivité, à l'attirance, à la pureté – qu'il y a quelque
chose qui est ce que je veux (Saint Paul le dit lui-même), et il y a quelque chose qui est
l'enchaînement progressif de petits actes, de petits renoncements pas choisis, un peu subis, qui
finissent à la fin par une situation, un acte, quelque chose, une parole que je regrette infiniment.
Et je dis : "Mais comment est-ce que j'ai pu en arriver là ? J'avais pas l'impression de choisir."
Mais si je suis un tout petit peu honnête avec moi-même, je pense qu'il y a eu un choix de base,
un manque de prudence qui a été fait, de ne pas suffisamment poser de cadre dans ma vie, et
de faire en sorte que cette situation puisse naturellement arriver là où je ne voulais pas
forcément arriver... cette situation à laquelle je ne voulais pas exactement arriver.

Donc finalement, ce cas numéro 2, ce cas où je ne veux pas juste aller embrasser quelqu'un,
n'est pas si différent. Même s'il y a eu du charme, de l'échange, du discours, de la raison,
derrière la tête il y avait quand même cette possibilité ou ce désir un peu inavoué du contact
physique, de la proximité physique qui a un petit peu guidé quand même notre façon d'être
ensemble. Et donc c'est plus compliqué.

Et c'est beau ! Enfin, c'est grand ce contact physique, il est beau, il est mis par Dieu dans mon
cœur. Et c'est beau d'être aimé, d'être regardé, d'être embrassé, d'embrasser, de se dire qu'on
compte aux yeux de quelqu'un. C'est sympa aussi de se dire le lendemain quand on passera
que "le mec a pécho Marguerite, formidable". Mais il y a quelque chose qui n'a pas été
courageux, je pense, à la base, d'avoir pas choisi ce que c'était que ce geste, ce que je voulais
en réalité. Il n'y a pas une relation réelle dans la mesure où les deux personnes ne se
connaissent pas complètement, même si c'est une soirée qui dure longtemps, même si le bisou
est arrivé à 2h du matin. On ne peut pas dire qu'on a choisi vraiment d'embrasser une
personne. On a choisi de suivre un instinct, on a choisi de suivre une pulsion, un désir d'une
sensation, et on n'est pas vraiment allé rencontrer une personne.

Citation ! Le premier qui lève la main et qui me dit d'où ça vient aura la palme de la culture :
"Un baiser, mais à tout prendre, qu'est-ce ?" J'écoute... Cyrano ! Magnifique. "Un serment fait
d'un peu plus près, une promesse plus précise, un aveu qui veut se confirmer, un point rose
qu'on met sur l'i du verbe aimer ; c'est un secret qui prend la bouche pour l'oreille, un instant
d'infini qui fait un bruit d'abeille, une communion ayant un goût de fleur, une façon d'un peu se
respirer le cœur, et d'un peu se goûter, au bord des lèvres, l'âme !" C'est beau ça, "se respirer le
cœur et se goûter du bord des lèvres l'âme". Ça suppose quand même qu'on ait un petit peu
cherché à atteindre un cœur et un petit peu cherché à atteindre une âme. Alors certes, Dieu
seul connaît les cœurs et les reins, et on ne peut pas dire : "C'est sûr que quand quelqu'un vient
dire 'je ne suis pas sûr d'avoir posé un acte hyper prudent', ouais évidemment c'est ton corps
qui a parlé tout ça". Il y a une sincérité, il y a une honnêteté. Mais au fond, même vous, je
pense, n'avez pas le regard transparent et limpide sur votre propre cœur. Les hormones font
beaucoup, l'esprit est parfois un peu submergé, et il est bon de pouvoir, en dehors de la
situation, décider un peu, réfléchir un peu sur ce qu'on aimerait faire.

À travers ma petite expérience du péché, je vois bien quand même qu'il peut y avoir une


---

confession ou un entretien très sincère où, après quelques années, la même personne
reviendra sur ce péché ou reviendra sur la situation et dira : "Bah oui, effectivement, je pensais
que je pouvais rien faire pour lutter, que c'était complètement fait, que j'étais totalement donné,
que c'était de l'amour, que c'était beau, que c'était grand..." Mais il y a une force morale à
acquérir, qui ne devient pas forcément une rigidité, qui ne veut pas dire qu'on n'est pas drôle,
pas sympa ou inaccessible, mais qui dit : je choisis les actes que je pose, et je choisis des actes
que je ne pose pas.

Donc pour conclure tranquillement sur ce cas numéro 2, c'est donc le cas de l'individu A et de
l'individu B qui ne se connaissent pas. Comment font les cathos, disait le sous-titre de cette
conférence ? Ils ne font pas dans ce cas-là. Le catho estime qu'il ne convient pas de mettre sa
langue dans la bouche de quelqu'un qu'on ne connaît pas, même si ce quelqu'un est joli, et
même si ce quelqu'un a une particule.

Oui, mais... mais tout le monde le fait autour de moi, mon frère ! Et ça, c'est un argument réel.
Enfin moi en tout cas, quand j'avais votre âge, j'ai beaucoup souffert de ça parce que j'avais pas
de Groupe Mission du tout, et donc l'exemple absolu c'était différent partout. Et c'est pas très
facile. Ça n'est pas très facile pour votre génération de tenir des principes qui semblaient très
évidents à la génération de vos grands-parents, des trucs, des règles qu'on se dit être hyper
compliqués. Vous imaginez la génération de vos parents ou arrière-grands-parents transgresser
ces règles-là ? Mais cétait la folie, quoi ! Enfin, pas toujours... Si vous allez gratter un peu chez
vos grands-parents, parfois il y a des trucs rigolos qui sortent. Vous avez déjà fait ça ? Moi j'ai
fait une fois... Je peux raconter une anecdote de ma grande-tante qui est morte ? Non mais ça
va, c'est mignon. Moi je suis petit, hein, j'ai 12 ans, j'ai rien compris quand elle m'a raconté, j'ai
compris plus tard. Elle vient comme ça, puis elle veut me faire une petite leçon de choses
comme une bonne grand-mère, et elle me dit (cétait la famille allemande) : "Mon petit Antoine,
tu sais, quand un jour tu vas te fiancer, c'est comme quand tu achètes une bicyclette : tu peux la
voir à la maison, mais tu ne peux pas monter dessus." Et là, je dis : "Bon, d'accord..." Et là, je
vois mon père qui fait une drôle de tête. Et après, elle incline la tête, elle fait : "Mais tu peux
peut-être jouer avec la sonnette." Là, j'ai vu mon père qui fait une très, très drôle de tête !

Bref, les grands-parents sont des modèles de vertu, mais... pourquoi j'ai raconté cette histoire
de ma grand-mère ? Ça n'a aucun sens ! Des modèles de vertu, mais qui nous montrent aussi
que le péché ne date pas d'hier. Et que même si les règles étaient plus claires et peut-être plus
lisibles dans le milieu, dans les familles, dans la société, la force de la tentation, elle, est
similaire. Donc on ne peut pas simplement s'excuser ou se justifier derrière un monde païen en
disant : "Oui, mais de toute façon maintenant notre monde va à vau-l'eau, donc si moi je fais
des petits écarts ou des petits excès, c'est parce que c'est pas facile." C'est faux. Et quand on le
lit les vies de jeunes saints, vous lisez Pier Giorgio, vous lisez Carlo Acutis, vous voyez qu'ils
ont eu une espèce d'héroïsme aussi de la vertu dans des circonstances qui semblaient plus
faciles que pour vous, mais qui n'étaient pas faciles du tout.

Donc, tout le monde autour de moi fait à peu près n'importe quoi, il y a un petit malaise de se


---

voir regarder comme quelqu'un d'un peu bizarre en fin de soirée. Moi, j'avais des copains en
soirée qui se donnaient un mal fou pour m'envoyer plein de gens du type Ivanka, qui étaient très
gentilles d'ailleurs, les unes comme les autres, et après ils arrivaient : "Mais pourquoi tu as pas
pécho ?" Et comme c'était pas du tout... enfin, à 3h30 c'était pas le moment pour faire le topo, et
quand je leur faisais le topo cétait plus compliqué, puis j'étais pas très formé... Enfin bref, c'est
pas simple d'avoir un monde autour de nous qui nous pousse à faire exactement ce qu'on a
envie de faire. Enfin, quand même, quelque part en nous on a envie de faire cela. Le monde
nous dit : "C'est excellent, il faut que tu fasses ça." La société, les amis... Et pourtant, j'ai Jésus,
Dieu, la Genèse, Jean-Paul II et frère Antoine... une gradation comme ça, hein, pas forcément à
la retourner !... qui me disent que ça n'est pas formidable.

Et pour comprendre pourquoi ce cas est très mauvais, il faut regarder le Cas numéro 1. Il faut
regarder si j'embrasse la personne que j'aime, et comment j'embrasse la personne que j'aime,
pourquoi j'embrasse la personne que j'aime. Et une fois que j'ai bien médité sur le cas numéro
1, une fois que je me suis laissé un peu toucher par la beauté de ce que je veux vivre en
embrassant la personne que j'aime et que je veux aimer, alors peut-être que ça m'aide à
résister un petit peu au cas numéro 2, ou 1 et demi, ou 1,8.

Le cas numéro 1 donc : je suis à nouveau une jeune fille, et il y a ce jeune homme. Nous nous
connaissons, nous nous tutoyons (on dit ça ou pas à votre âge ? "Ils se tutoient" ? On dit pas ça
? Ah d'accord, au montage !)... ils cheminent (on dit ça ? On dit pas ça ? Milieu catho, tout ça
!)... bref. Je suis très amoureuse, très très amoureuse. Nous nous voyons très souvent, c'est
pas un secret, les gens voient qu'on parle sans arrêt ensemble. Aucun de nous deux ne fait
semblant que c'est juste une amitié proche. Nous nous aimons franchement. Mais comme nous
avons lu l'Abbé Grosjean, nous ne nous sommes pas forcément fait d'immenses déclarations
d'amour très, très profondes, mais nous nous aimons. Et voilà maintenant plus de 2 mois qu'on
s'est rencontrés, et on se dit : "Bah voilà, maintenant on a passé un peu les cases de la
prudence grosjeannienne, d'alienne et jean-paul-deuxienne, et est-ce qu'on peut aller plus loin ?
Comment ? Combien de temps ? Qu'est-ce que je fais avec mes mains ?" Tout ça.

Et là, vous avez toute une liste de prêtres qui apparaissent devant vous avec toute une liste
d'avis différents. Il y a premièrement l'Abbé "Zéro Bisou quoi qu'il arrive", ou le Frère "Zéro
Bisou". Que ce soit le lendemain, 3 jours après, 2 mois après, 6 mois après, tant qu'on n'est pas
marié, c'est zéro bisou. Après 10 mois de fiançailles, "frère, quand même ?" Zéro bisou. Et oui,
il y a des frères comme ça aussi. Il y en avait au moins deux dans cette communauté, il y en
avait trois avant que frère Louis parte en Haïti... oups, pardon ! C'est pas des frères méchants,
c'est des frères qui ont des principes, voilà, comme ça. Et ben ce frère-là, ou ce prêtre-là, ou cet
abbé-là, souvent on ne va pas forcément se confesser à lui tout le temps, on ne le choisit pas
forcément pour la préparation au mariage parce qu'on se dit qu'il n'a rien compris à la vie.

C'est intéressant quand même de voir leur avis et de voir le lien qu'il y a entre chacun de ces
gestes affectifs. Et de voir que très souvent, quand il y a des gestes réservés aux époux qu'on
regrette un peu d'avoir posés, ou quand il y a des gestes qui s'en approchent ou des gestes un


---

peu "zone grise", et ben ça a commencé par un baiser qu'on a mal géré. Ça a commencé par
toujours ce début. Et donc certains disent : "Bah, c'est mieux de mettre une ligne assez stricte,
simple, et qui signifie vraiment là où on en est : quand on commencera à se respirer le cœur et
s'échanger l'âme quand on sera mariés, alors on pourra faire ce geste que Cyrano décrit si
bien, mais tant qu'on n'en est pas encore à s'échanger nos cœurs et à se respirer l'âme, zéro
bisou." Bien. Moi je trouve ça un tout petit peu raide, mais ça peut arriver, et il ne faut pas
forcément éviter ces prêtres-là, ce qu'ils disent est intéressant.

J'ai beaucoup souffert, moi, pendant le Covid parce que les gens m'évitaient parce que j'avais
apparemment une doctrine trop dure, parce que j'ai toujours refusé d'accepter de dire à
quelqu'un qu'il pouvait continuer à faire des faux documents, ou à piquer la carte vitale de son
voisin, ou à... Vous avez connu cette période dure ou pas, vous ? Vous êtes trop petits, c'est
vos grands frères et sœurs. Ça dépend qui, ça dépend qui... parce que j'ai remarqué qu'il y a
beaucoup d'enfants dans cette salle ! Enfin bref. On disait : "Le frère Antoine, il comprend rien, il
sait pas qu'on est dans une situation unique" et compagnie. Mais il y a une rigueur morale, il
faut respecter l'argument pour voir. Passons.

Dans la conférence... placement de produit !... "Mon père, jusqu'où on peut aller ?", l'histoire
d'un garçon qui disait au prêtre qui l'accompagnait : "Avec ma fiancée, nous avons compris qu'il
était défendu de faire la chose conjugale, mais nous pensons que ce n'est pas un péché du tout
de se donner des caresses très intimes qui vont jusqu à une grande jouissance, pas la
jouissance de l'acte sexuel mais pas loin, et ça nous rapproche beaucoup, ça nous unit
beaucoup. C'est autorisé puisque je ne touche pas les parties génitales de ma fiancée, ni
l'inverse." Pourquoi je dis ça ? Oui, parce qu'on a dit voilà, c'est une anecdote, on a dit qu'on
parlait plutôt baiser, c'est ça. Mais dans cette conférence-là, j'avais sorti du Père de Bauclère la
catégorie, pour répondre à ce jeune garçon, du "G.E." : le Geste...

Le Geste Efficace ! A dit Madeleine qui n'était pas là l'année dernière. Merci Madeleine, ça fait
plaisir de voir que c'est utile ce qu'on dit dans cette pièce.

Le geste efficace. Le geste interdit ou le geste qu'il ne faudrait pas poser n'est pas forcément un
immense péché, il n'est pas forcément hyper mauvais, mais c'est pas parce qu'il n'est pas
formellement interdit qu'il est bon. Et il y a une différence entre l'interdit et le bon ou le vertueux.
Et donc, il y a certains gestes qui ne sont pas marqués quelque part dans la Bible comme
mauvais, ou dans le catéchisme comme mauvais, mais qui peuvent aller à l'encontre de l'amour
que je dois à mon fiancé ou à ma fiancée car j'agis simplement pour un plaisir physique, soit le
sien soit le mien d'ailleurs, mais non pas pour le don d'un amour, pour le fait de se respirer le
cœur ou l'âme.

Et donc, le danger du raisonnement en "permis/défendu", c'est d'aller toujours aux limites de ce
qu'on pense être autorisé : "Je peux l'embrasser en faisant avec les mains jusque-là, et pas
plus, mais jusque-là ça va, je peux faire tout ce que je veux." Donc on va poser des gestes pour
ressentir des choses dans la limite qu'on a fixée ensemble, et c'est pas formidable parce qu'on


---

ne réfléchit plus tellement au sens du geste, à ce qu'il veut dire, à ce qu'il est et à ce qu'il
signifie pour nous deux. On réfléchit simplement à partir d'une norme qu'on s'est posée, quel
que soit ce qu'on ressent. Donc je peux être très mal à l'aise par rapport à un geste qu'on pose
sur moi, je peux être très excité sans trop réfléchir pourquoi, et j'en parle pas tant qu'on a dit
qu'on s'arrêtait ici.

Revenons à nos bisous, enfin aux bisous de la conférence. J'aime profondément le garçon qui
est en face de moi, il m'aime profondément. Je ne suis pas ukrainienne, j'espère que vous
l'aviez remarqué, je ne m'appelle pas Marguerite (Marguerite cétait le cas numéro 2.2, alinéa
2.7, vous vous souvenez ?). Nous nous embrassons, il y a un certain nombre de caresses qui
accompagnent ce baiser, et l'enjeu n'est pas tellement de faire un dessin, un tableau avec les
zones du corps, ce que je peux, ce que je peux pas, ce qui est bon, ce qui est pas bon. L'enjeu
profond, c'est notre amour là où il en est maintenant, ce qu'on veut ensemble, la vie qu'on veut
construire maintenant et plus tard.

Ça, c'est la petite note... Je serai peut-être un peu "zéro bisou" dans ce domaine, mais j'assume
: je ne vois pas du tout, alors mais du tout, l'intérêt d'embrasser quelqu'un s'il est exclu qu'il
puisse y avoir un avenir durable avec cette personne. Alors, je ne dois pas forcément signer un
papier comme quoi je suis prêt à épouser cette personne si jamais elle me le demande demain
matin, mais je ne vois pas du tout l'intérêt de s'éprouver physiquement avec quelqu'un si on est
sûr que pour des raisons, je sais pas, de milieu, d'éducation, de quelque chose, de caractère,
de tout ce que vous voulez, j'envisage pas un avenir solide possible. Si je suis sûr qu'il n'y aura
pas d'avenir solide possible, alors l'embrasser, c'est un mensonge, un grand mensonge envers
elle, envers moi-même et envers Dieu.

Donc, quand je suis avec celui que j'aime ou celle que j'aime, et que j'ai des gestes intimes
avec lui ou elle, je dois avoir pour but d'échanger de l'amour au stade où nous en sommes
aujourd'hui. Et le stade où nous en sommes aujourd'hui... c'est assez soft, objectivement. Enfin,
à votre âge, des gens qui sont en face de moi, c'est assez soft. Je suis plutôt vers le début, je
suis pas trop prêt à m'engager dans des fiançailles demain matin. Et donc, nos gestes doivent
en rester à quelque chose d'assez soft, ils vont exprimer notre amour là où nous en sommes.

Et ça doit être absolument symétrique. Vous n'avez pas le même baromètre de gestes que la
personne que vous aimez, que votre voisin actuel, c'est pas pareil. Il y a des gens pour qui
poser tel geste est extrêmement puissant, extrêmement engageant, ça les rejoint au plus
profond de leur cœur ; et d'autres pour qui c'est comme taper l'épaule de son voisin quand on
lui dit "Vas-y, dans le métro". Ce que nos gestes doivent faire, c'est ce que nos cœurs
ressentent et expriment. Et c'est pour ça qu'il faut beaucoup, beaucoup, beaucoup parler. La
communication sera le sujet phare de vos fiançailles. Il faut absolument mettre cette
communication au centre d'un couple, aussi novice, aussi soft soit-il.

Si j'ai l'impression que ce geste que je pose met la personne en face mal à l'aise, c'est grave,
mais vraiment grave de le pousser simplement parce que moi j'aime bien ce geste-là et que lui


---

ou elle, il pense ce qu'il veut, moi ce geste il me va très bien. Et la personne en face,
elle-même, elle est un peu émue, elle est un petit peu novice, elle est un petit peu en train de
tâtonner, elle sait pas trop, donc elle osera pas dire non, elle osera pas réagir. Et je fais quelque
chose de pas bien, vraiment pas bien, si j'arrive pas à parler avant, à discuter, à revenir sur ce
qui est en train de se passer. Nos gestes doivent exprimer ce que nos cœurs vivent de façon
symétrique.

Ça va dans les deux sens, hein ! Ça peut être un geste qui est trop engageant ou par ce que je
fais, moi, et bien je mets une personne mal à l'aise ; mais ça peut être totalement l'inverse. Il
faut pouvoir oser dire à une personne que ce geste qu'elle pose sur moi me met dans un état
d'excitation déraisonnable, ça n'est pas possible. La personne en face ne s'en rend pas compte,
pour elle c'est quelque chose de simple, normal, tout va bien ; et moi je me retrouve dans un
état où j'ai envie qu'il se passe beaucoup, beaucoup, beaucoup plus de choses, et j'ai pas envie
de me retrouver dans cet état-là, ça me met pas à l'aise. Il faut que j'aie l'honnêteté, la simplicité
de pouvoir dire à la personne en face : "Écoute, c'est un petit peu... c'est un petit peu trop..."
Vous avez vu La Truite ? Non, c'est trop vieux... "Ça va un tout petit peu trop vite entre nous, je
propose qu'on... qu'on parle de la Chine !" Bien. Bon ben Madeleine, je pense qu'on va bien
s'entendre, nous sommes deux à avoir vu ce monument !

Le G.E., le geste efficace, donc, est celui qui nous permet de vivre ce que nous voulons vivre. Il
y a un but qu'on s'est donné ensemble, quelque chose qu'on veut vivre ensemble, et ce geste
est ajusté à ce qu'on veut vivre ensemble. Ça n'est pas le geste qui apporte forcément le plus
de plaisir dans une situation donnée, mais c'est le geste qui traduit notre amour, qui nous
permet d'avancer sereinement vers le moment où, un jour, les choses seront peut-être moins
soft, enfin seront soft, enfin bref... mais il y aura un don total, un maximum d'amour donné, de
plaisirs donnés, de plaisirs reçus. Il n'y aura rien de honteux ou d'excessif dans ce plaisir qui
accompagne l'amour, parce que le plaisir sera immense à la mesure du don de l'amour qui est
immense.

À 19 ans, j'ai un don d'amour qui n'est pas immense. Il me paraît immense, il me paraît me
bouleverser le cœur, mais il n'est pas du tout de l'ordre de l'amour d'un homme de 30 ans qui
pense chaque jour à comment il pourrait rendre sa femme plus heureuse alors que les choses
deviennent un tout petit peu moins roses qu'elles étaient quand ils se sont mariés il y a 6 ans.
Cet amour n'est pas du même ordre. Il y en a un qui est beau, sincère, serein, tout ce que vous
voulez ; il y en a un qui est la suite d'un choix répété, voulu, de demeurer.

Quand j'étais tout jeune prêtre, j'ai eu un tout vieux monsieur qui vraiment était au bord des
larmes à 85 ans du fait de ne pas réussir à montrer assez d'amour à sa femme. Donc lui était
au bord des larmes, moi j'étais fini, je chialais partout. "Mais qu'est-ce qu'il y a, mon père ?"
"Rien, c'est très beau ce que vous êtes en train de dire, monsieur..." Il était désolé, quoi ! Il
disait : "Comment je pourrais mieux aimer ma femme ? Ça fait... Ah là là, c'est vraiment c'est le
centre de ma vie, c'est le cœur de ma vie." Comme le Frère Denis ! Regardez... bonjour Frère
Denis ! Frère Denis, il a quel âge ? 80 je sais plus combien... Et bien chaque jour, chaque jour...


---

83 ? 80... L'avantage c'est qu'il est sourd ! Chaque jour, le Frère Denis, il peut plus faire
grand-chose, il prie pour les gens autour de lui et il va poser une question chaque jour aux
frères pour savoir comment ils vont. Alors que moi j'arrive, j'ai Groupe Mission ci, j'ai Groupe
Mission ça, ce que frère Clément a fait de sa journée je m'en fous, enfin il est grand ! Alors que
Frère Denis, lui, il va y aller, il va aller voir et frère Clément et frère Antoine et frère machin :
"Comment vas-tu ? Comment te sens-tu en ce moment ? Qu'est-ce que tu as lu ?" Des
personnes qui ont compris ce que c'est, finalement, que l'amour, pendant que nous on croit
qu'on est des mecs super à parler de Jésus aux gens, et en fait il y a cette préoccupation sans
arrêt : dans la situation où je suis, comment je peux donner le plus d'amour à quelqu'un ? Bien.
Et donc l'amour n'est pas stimulé par le corps de quelqu'un, il n'est pas stimulé par une
situation, il est choisi par un cœur résolu et profond. C'est pas mal ça, dis donc ! Frère Denis, ce
passage m'a beaucoup inspiré... Frère Denis, le bon Frère Denis. Bien.

Et donc ces choix-là, ces choix de gestes efficaces... Bah reprenons l'exemple de Marguerite.
Marguerite est dans son... dans sa soirée un peu Groupe Mission, il y a plein de gens chics,
c'est sympa, 12 personnes par mètre carré. Et qu'est-ce que c'est le geste efficace avec
Marguerite ? Non, prenons plus loin, qu'est-ce que c'est le geste efficace avec Ivanka ? Elle est
au bout de la soirée, elle est là, elle est jolie et elle danse, et moi aussi. Et bon, peut-être que le
geste efficace pourrait être un sourire, et puis après je pourrais lui demander son prénom, pas
forcément dans l'ordre qu'on a fait tout à l'heure, le prénom viendra avant la suite. Et là, je me
rends compte du coup qu'elle parle pas français, et c'est pas très grave, et tant pis si je peux
pas dire à mes potes après : "J'ai pécho Ivanka", c'est pas un drame.

Marguerite, qui est plus catatho que Ivanka, n'a pas forcément besoin d'ajouter beaucoup de
gestes à la fin de la soirée. Donc elle a parlé beaucoup pendant 2h, 3h, 4h. On s'est regardé,
puis on n'est pas débiles : quand vous êtes avec un garçon, vous êtes avec une fille, vous
passez 4 heures à une soirée ensemble à vous regarder dans le blanc des yeux et à parler de
la façon dont vous aimez la littérature flamande, la peinture flamande, ou les paysages
flamands... enfin, tout ce qui est flamand, n'est-ce pas ? Il n'y a pas besoin d'en rajouter
beaucoup plus pour comprendre qu'il s'est passé quelque chose ce soir. Il y avait des petits
silences, il y avait des petits regards, il y avait des petits... bien. Et ça suffit. Il n'y a pas
forcément besoin de rajouter quelque chose. Et peut-être que quelques années plus tard, on
sera content de pouvoir dire à son futur beau-père : "Monsieur de ceci, de cela, votre... votre
fille était absolument radieuse ce soir-là. Nous nous sommes parlé au bord de la fontaine et tout
à coup nous avons découvert que nous connaissions tous deux l'écrivain Germain Van Der
Schepuck." Et là le monsieur dit : "Vous connaissez Germain Van Der Schepuck ?" "Mais oui,
monsieur de La Verdière, je connais Germain Van Der Schepuck !" Et c'est tout à fait
intéressant, plutôt que le mémorable : "Madame, Ukraine... moi violemment pécho, fin de soirée
intégration". Non, ça ne va pas.

Donc, nous sommes dans un cas plus solide, plus sérieux, une relation dans laquelle on s'aime.
Et bien, je ne donnerai pas d'échéancier ou de rétroplanning des gestes qu'on peut faire parce
que ça dépendra beaucoup des couples, et c'est dur mais c'est comme ça. Il y a des couples


---

pour lesquels, après 2 ans, un baiser trop intime est source de troubles. Il dit quelque chose de
faux, il mène le cœur dans des situations pas possibles, et donc il ne nous fait pas grandir. Et
donc, il vaut mieux pas forcément le poser de façon aussi intime, il faudra reculer un petit peu
dans l'échelle du soft et d'apprendre à s'embrasser dans la façon qui convient à là où nous
sommes.

Et cette façon qui convient à là où nous sommes, petit rappel, je la discerne :
1. Sous le regard de Dieu, parce que j'ai quand même des choses assez objectifs qu'on m'a
apprises quand j'étais petit.
2. Sous le regard de la personne qui est en face de moi, c'est ensemble qu'on va devoir faire ce
choix, choisir ce qui est bon, ce qui est moins bon pour nous, ce qui nous fait grandir ou non.
3. Et peut-être, sous le regard d'un accompagnateur extérieur ou de conseils de gens sages qui
peuvent m'aider.

Plus ce travail de communication est fait sérieusement pendant ces relations soft et au début,
plus c'est facile après de s'engager dans les fiançailles. Encore une fois, quand vous serez
fiancés, vous devrez aller creuser des trucs parfois très profonds, difficiles à aller chercher, des
trucs qu'on n'a vraiment pas beaucoup sortis à qui que ce soit dans sa vie. Et on ne se marie
pas avec quelqu'un en construisant une maison avec des fondations pourries. Donc, si j'ai
quelque chose dans mon être qui est abîmé (on va pas dire pourri, c'est pas très sympa), mais
qui est abîmé et qui pourrait du coup fragiliser la maison qu'on va construire ensemble, il faut
que ça puisse sortir et que la personne en face épouse quelqu'un en connaissance de cause. Et
donc, plus j'apprends tôt à communiquer sur des choses pas forcément faciles à dire ou à
échanger, plus ça va être facile plus tard de sortir les choses profondes, difficiles, qui ont besoin
d'être échangées. Personne ne peut le faire à votre place. Donc, s'il vous plaît, parlez
beaucoup. Ne faites pas quelque chose qui met la personne en face mal à l'aise, et ne vous
laissez pas être mal à l'aise sans oser dire quoi que ce soit parce que la personne en face de
vous pose des gestes qui ne vous conviennent pas.

Question intéressante : comment je fais lorsque, en face de moi, j'ai quelqu'un qui n'est pas
forcément totalement... il manque un mot, c'est marrant ça, on peut rester longtemps comme ça
parce qu'il manque un mot... "dévergondé" ? C'est ça que je voulais... qui est pas... voilà,
quelqu'un de bien rangé tout ça, mais qui n'est pas baptisé ? Mais qui a quand même une
particule, rassurons-nous... non, pardon ! Qui n'est pas baptisé, qui n'est pas catholique, et
donc moi j'ai mes principes, j'ai mon truc, c'est super, mais on commence à s'aimer quand
même vachement. C'est quelqu'un de très bien, très droit, très honnête, tout ce qu'on veut, mais
elle n'est pas baptisée, il n'est pas baptisé.

La bonne nouvelle, c'est que tout ce que j'ai raconté ce soir... est-ce que j'ai dit une fois le mot
"Jésus" ? Ouais, non mais je l'ai pas dit comme un truc... enfin, vous voyez ce que je veux dire.
Tout ce que j'ai raconté, il n'y a rien qui... il y a un prérequis, il faut croire en Dieu pour accepter
ce que j'ai raconté ? C'est quelque chose qui est de l'ordre du bien qu'on veut vivre ensemble,
du mariage qu'on veut vivre ensemble, de l'amour qu'on veut échanger ensemble. Et c'est pas


---

un commandement qui s'impose en disant : "Tu feras ceci ou tu feras cela." C'est : moi je veux
vivre quelque chose de grand, alors je choisis de faire ça, de faire ça, de faire ça. Bien. Et ça,
en principe, ça parle au cœur de chaque homme, puisque c'est Genèse 1, je sais pas combien :
"L'homme est fait à l'image de Dieu, à son image et à sa ressemblance il le créa." Et donc,
quand Saint Jean-Paul II parle de la Théologie du corps dans ses catéchèses dans les années
80, il développe un concept qu'il nomme... Madeleine ? ... L'écho des origines. L'écho des
origines. Bon, on va refaire une petite conférence à la fin de l'année, hein, sur ce sujet ! L'écho
des origines fait donc que, dans le cœur de chaque homme, il y a comme cet écho de la
présence de l'amour de Dieu, cette capacité à aimer complètement et entièrement, ce désir
d'être aimé totalement en profondeur pour tout ce que je suis et d'aimer en profondeur pour tout
ce que la personne est. Ce désir de me perdre totalement – enfin de me perdre, de me donner,
de m'abandonner, de choisir de renoncer à moi-même pour aimer l'autre. Ça, en principe, c'est
au cœur de chaque homme. Et ça n'est pas développé mieux que sur la Croix, ça n'est pas
développé mieux que dans la Bible, ce désir total que l'autre puisse avoir ce qui est le plus
grand, même si moi du coup je l'ai pas. Le modèle de l'amour pur.

Et donc ça, en principe, tout le monde y croit, tout le monde en veut. Et donc, même si Nathan,
dont je suis follement amoureuse, n'est pas baptisé, n'a pas de culture catho, Nathan devrait
pouvoir être sensible à cette idée de l'amour que moi je porte, à cette vocation que je veux vivre
d'être aimée et d'aimer non pas à moitié, non pas en se prêtant pour une période X, mais en se
disant : "Bah voilà, si je te choisis c'est pour toujours, et si tu me choisis c'est pour toujours. Et
si nous nous prenons la main, ça veut dire quelque chose, et si nous nous embrassons, ça veut
dire ceci et ça signifie ce que nous voulons nous donner, c'est-à-dire rien de moins que notre
cœur."

Voilà. L'écho des origines parle au cœur de chaque homme. En ce moment, soyons honnêtes, il
y a un peu de bruit, et l'écho des origines est peut-être moins facile à entendre qu'il y a un siècle
et demi. Mais dans les périodes de grand n'importe quoi, il y a aussi des périodes de
conversion. Vous avez quand même des... faut faire un peu d'histoire et se rassurer... des
périodes où le libertinage et l'image de l'Église et des curés étaient... mais c'est lunaire, quoi, en
France ce qui a pu se passer ! Et à partir de ces périodes-là, et ben la foi a pu repartir, a pu
grandir dans le cœur des personnes. Donc, il peut y avoir autour de vous, malgré le côté un peu
dégénéré ambiant, au contraire des personnes de bonne volonté, pas baptisées, pas
chrétiennes, qui cherchent un autre modèle de sexualité, un autre modèle d'amour, un autre
modèle de société. Il y a des conversions spéciales en ce moment. Il y a des conversions
"avortement" : des gens qui ne comprennent plus les lois qui se passent et qui voient que les
seules personnes qui... enfin il y en a pas beaucoup, hein, mais il y en a quand même... les
seules institutions qui disent que l'avortement n'est pas un bien et ne peut jamais l'être, c'est
l'Église catholique. Tel machin, tel truc, ils commencent à se poser des questions et à découvrir
le besoin d'un socle pour un ordre moral, et se ditsnt peut-être que Dieu existe. Il y a des
conversions "affectivité" de gens qui lisent ces textes d'Yves Semen, de Jean-Paul II, de frère
Antoine, et qui découvrent ce que c'est que l'amour.


---

Deux ou trois objections, après j'ai fini. Objection, objection, objection.

Objection numéro 1 : "Si je ne fais pas ce geste que mon individu B en face de moi veut poser, il
va s'en aller." Tant mieux ! Tant mieux. On fera pas du solide avec une relation qui est basée
comme ça sur une espèce de jeu de "il faut que tu fasses ci, il faut que tu fasses ça, sinon je
m'en vais". Tant mieux s'il y a une crainte que, parce que la personne n'accepte pas mon choix,
elle s'en aille. Mais qu'elle s'en aille tout de suite ! Parce qu'il y aura d'autres choix plus tard, on
sera pas d'accord, il faudra que la personne puisse accepter et respecter telle ou telle chose.
Donc, il me largue ? C'est génial, il y en a plein d'autres dans le monde, c'est super.
Deuxième objection, peut-être plus masculine : "Si je ne vais pas un peu plus loin, elle va me
prendre pour un con." Tant mieux aussi ! S'il n'y a pas suffisamment de confiance pour que je
puisse dire en vérité ce que moi je suis prêt à faire ou ce que moi j'ai envie de faire dans ma vie,
et ben on pourra pas non plus bâtir sur du solide.

Donc, ayons le courage d'être ce que nous sommes. Mais ayons aussi la charité de dire
pourquoi. Je ne peux pas laisser Nathan 4 mois et refuser la moindre approche physique qu'il
fait sans lui expliquer un tout petit peu ce que j'ai dans le cœur ou ce que j'ai derrière la tête.
Parce que peut-être que Nathan, avant, était avec une personne avec qui les choses sont
allées beaucoup plus vite, et il comprend pas trop pourquoi ça se passe pas exactement
comme avant. Et donc il faut éduquer... enfin, éduquer un petit peu... mais si, allez, il faut
éduquer Nathan, Mademoiselle ! Il faut lui permettre de comprendre pourquoi vous voulez ou ne
voulez pas poser tel ou tel geste. Il faut bien se connaître, il faut bien s'écouter, il faut bien
connaître l'autre, il faut bien écouter l'autre. Et donc, Nathan ne fonctionne pas de la même
façon que Serge ou Ivanka, et il est nécessaire de pouvoir dire qui on est, ce qu'on veut, à
l'autre.

Ultime point. Ça fait trois fois que je dis qu'après j'ai fini, et là vraiment cette fois c'est vrai, après
j'ai fini, quoi ! Je reviens sur un dernier point que j'entends souvent : il y a une espèce de
pression à être en couple. Enfin moi en tout cas, quand j'étais de votre âge, il y avait une
obsession à être en couple, et j'ai accompagné des personnes qui portaient ça de façon difficile.
Elles voulaient qu'on parle de la Trinité, et on parlait du fait de : "Est-ce que je vais pouvoir être
en couple ?" On s'en fout ! Enfin, c'est pas... c'est pas du tout une question, n'importe qui peut
être en couple, il suffit d'avoir des... enfin bref. "En couple ? Est-ce que je vais pouvoir être en
couple ? Je veux être en couple, je veux être... j'aimerais tant être en couple, c'est tellement
bien d'être en couple." Je ne vois pas du tout l'intérêt, et je le redis, de faire des mamours à
quelqu'un à qui on sait pertinemment qu'on ne donnera jamais rien d'autre qu'une sensation
physique passagère. Donc, on parlera peut-être pas mariage tout de suite, mais si je suis sûr
que mon cœur n'est pas disponible pour être livré et donné à cette personne, ça n'est pas bien,
ça n'est pas juste, ça n'est pas vrai de me donner à elle. Donc se mettre en couple par
convenance sociale sans penser à l'avenir, c'est mauvais. J'éprouve quelque chose ? Oui, c'est
sincère, oui, c'est réel, oui, c'est chimique, oui. Mais ça n'est pas un amour choisi, éprouvé
totalement et voulu. Aucun intérêt. Je me mets en couple pour aimer quelqu'un, pour l'aimer de
plus en plus et de mieux en mieux.


---

Oh, j'ai fini ! Je tiens... »


---



</details>

---

# 2. Analyse de la vidéo et cartographie des thèmes du fil

<section id="analyse-video"></section>

## 2.1. Objet immédiat de la conférence

La conférence porte explicitement sur la vie affective, les relations et le sens du baiser. Le conférencier annonce qu’il ne traite pas toute la sexualité, mais un geste précis : le baiser intime, présenté dans plusieurs circonstances relationnelles. La conférence distingue principalement deux cas : le baiser entre personnes qui ne se connaissent pas ou très peu, et le baiser entre personnes qui s’aiment déjà dans une relation plus construite.

Ce point est important : la vidéo n’est pas seulement un discours moral abstrait. Elle propose une casuistique pastorale, avec exemples, objections, anecdotes, références à Cyrano, à la théologie du corps, à Jean-Paul II, à l’écho des origines et à une logique du geste ajusté.

Mais c’est précisément cette casuistique qui ouvre le problème plus vaste : qui parle ? depuis quelle position ? avec quelle autorité ? sur quels corps ? sur quels couples ? selon quelle expérience ? avec quel degré de reconnaissance de la conscience des laïcs ?

## 2.2. Thème 1 — La centralité pastorale de l’affectivité

La conférence commence par un constat significatif : les conférences sur l’affectivité remplissent la salle, contrairement aux conférences sur la Trinité. Cela révèle une réalité pastorale forte : les jeunes catholiques ne viennent pas seulement chercher une doctrine abstraite ; ils viennent avec des tensions corporelles, affectives, sexuelles, relationnelles, sociales et spirituelles.

Ce constat est juste et important. Il montre que la morale affective n’est pas périphérique. Elle touche la conscience, le désir, la culpabilité, la confession, la relation à Dieu, l’image de soi, la construction du couple et la peur de mal faire.

Mais il révèle aussi un risque : lorsque l’Église attire fortement sur ces sujets, elle peut devenir un lieu de clarification ou un lieu de sur-contrôle. La frontière est fine. Une parole pastorale peut aider à nommer, discerner, protéger, responsabiliser. Elle peut aussi installer une surveillance de l’intime.

## 2.3. Thème 2 — Confession, répétition du péché et culpabilité affective

Le conférencier oppose les fautes plus clairement regrettées — violence, erreur doctrinale — aux situations affectives où le repentir est moins simple. Ce passage est révélateur. Il montre que le domaine affectif résiste au schéma moral binaire : j’ai fait mal / je regrette / je ne recommence plus.

Dans l’affectivité, il y a attraction, plaisir, ambivalence, désir de recommencer, incertitude, honte, demi-consentement, pression sociale, attachement, projection d’avenir.

La conférence touche donc un point anthropologique réel : le corps et le désir ne se laissent pas réduire à un acte isolé. Ils appartiennent à une dynamique.

Le problème est que cette complexité peut être lue de deux manières : soit comme appel à un discernement mature, soit comme justification d’un encadrement renforcé des gestes, des seuils et des comportements. Le passage de l’un à l’autre est le point critique.

## 2.4. Thème 3 — Cas numéro 2 : le baiser sans relation construite

Le premier grand cas traité est celui du baiser avec une personne à peine connue. La conférence distingue plusieurs sous-cas : attraction immédiate, soirée, danse, charme, discussion, émotion, excitation, possibilité de prolongement physique.

Le conférencier considère que ce geste est problématique parce qu’il ne correspond pas à une vraie rencontre de la personne. Il serait plutôt guidé par l’instinct, la pulsion, la recherche de sensation ou la validation sociale.

Cette critique contient une intuition forte : le geste corporel n’est pas neutre. Il engage une signification. Il peut être en décalage avec la relation réelle. Il peut produire une promesse implicite qui n’existe pas encore.

Mais la formulation peut aussi devenir problématique si elle absolutise une lecture unique du geste. Un baiser n’a pas toujours la même charge symbolique selon les personnes, les cultures, les âges, les histoires et les contextes. Il peut être maladroit, léger, exploratoire, affectif, érotique, relationnel, ou déjà très engageant. L’analyse doit donc éviter deux réductions : banaliser tous les gestes ou les surcharger moralement de manière uniforme.

## 2.5. Thème 4 — Le geste comme promesse

La citation de Cyrano permet au conférencier de présenter le baiser comme serment, promesse, aveu, respiration du cœur et contact de l’âme. C’est probablement le noyau poétique et théologique de la conférence.

Le baiser n’est pas seulement un contact physique. Il peut être signe, seuil, langage, annonce, promesse.

Cette intuition est riche. Elle évite le pur biologisme. Elle refuse de réduire le corps à une mécanique de plaisir. Elle inscrit le geste dans une dramaturgie de l’amour.

Mais la difficulté vient ensuite : si le baiser est trop fortement défini comme promesse, alors tout baiser hors relation durable devient presque automatiquement mensonge. Ce déplacement est discutable. La signification d’un geste n’est pas seulement donnée par une théologie abstraite du geste ; elle se construit aussi dans la relation concrète, la parole, la culture, la maturité, le consentement et l’intention partagée.

## 2.6. Thème 5 — Cas numéro 1 : relation amoureuse déjà construite

Le second grand cas est celui de deux personnes qui se connaissent, s’aiment, se fréquentent depuis plusieurs mois et se demandent jusqu’où aller. Le conférencier présente plusieurs positions : la position très stricte du “zéro bisou”, puis une position plus graduée centrée sur le sens du geste, l’ajustement, la communication et le discernement.

Ce passage est intéressant parce qu’il ne se limite pas à un interdit brut. Il reconnaît la diversité des couples, la nécessité de parler, la différence des seuils, le fait qu’un même geste n’a pas le même poids pour chacun.

Ce passage ouvre une branche moins r?ductrice du discours : il introduit la communication, l?ajustement et la diff?rence des seuils entre les personnes. Mais cette branche reste ambivalente, car elle demeure port?e par une parole cl?ricale ext?rieure qui explique aux couples comment lire leurs propres gestes. Un geste peut mettre l?autre mal ? l?aise, ?tre v?cu comme impos?, ou porter une intensit? diff?rente selon les personnes : le champ relationnel demande alors parole, ?coute et ajustement.

Cependant, même ici, la parole reste tenue par un clerc célibataire qui explique aux jeunes couples comment penser leurs gestes. Cela ne rend pas sa parole illégitime, mais cela doit être situé. La parole morale devrait être accompagnée d’une reconnaissance explicite de sa limite d’expérience.

## 2.7. Thème 6 — Le “geste efficace”

Le “geste efficace” est l’une des catégories importantes de la conférence. Il ne s’agit pas du geste qui maximise le plaisir, ni seulement du geste permis ou défendu, mais du geste qui sert ce que les deux personnes veulent vivre ensemble.

Cette notion est meilleure qu’une simple logique d’interdit. Elle déplace la question : non plus “jusqu’où peut-on aller ?”, mais “qu’est-ce que ce geste fait à notre relation ?”.

Cela ouvre une éthique plus relationnelle : un geste est évalué selon sa vérité, son ajustement, sa proportion, son effet sur le lien, son respect des deux personnes, son inscription dans une trajectoire commune.

Mais cette catégorie doit être protégée contre une récupération cléricale. Qui juge l’efficacité du geste ? Le prêtre ? Le couple ? La conscience ? La norme ? L’accompagnateur ? Si le “geste efficace” devient une grille imposée de l’extérieur, il redevient un instrument de contrôle. S’il reste une catégorie de discernement partagée, il peut être utile.

## 2.8. Thème 7 — Consentement, symétrie et communication

La conférence insiste fortement sur la nécessité de parler. C’est un point positif majeur. Le conférencier dit clairement qu’il est grave de pousser un geste qui met l’autre mal à l’aise, et qu’il est nécessaire de pouvoir dire quand un geste provoque une excitation déraisonnable ou un trouble.

Cela rejoint des thèmes contemporains essentiels : consentement, limites, écoute, réciprocité, non-pression, parole du corps, parole du malaise.

Dans une lecture ecclésiologique, ce point ouvre une critique du cléricalisme : si la relation juste exige parole, symétrie et consentement, alors l’Église elle-même doit être interrogée sur ses propres asymétries. Comment une institution peut-elle enseigner la symétrie dans les couples tout en maintenant des formes asymétriques fortes dans la parole morale, le gouvernement, la place des femmes, l’écoute des victimes ou la consultation des laïcs ?

## 2.9. Thème 8 — Mariage, avenir durable et vérité du geste

La conférence affirme qu’embrasser quelqu’un avec qui aucun avenir durable n’est envisageable serait un mensonge. C’est l’une des thèses les plus fortes et les plus discutables.

Elle a une cohérence interne : si le baiser est promesse d’un don plus total, alors le poser sans horizon d’avenir serait contradictoire.

Mais cette logique peut devenir trop totalisante. Elle risque de faire porter à des gestes de jeunesse une charge nuptiale excessive. Elle peut aussi confondre exploration relationnelle et mensonge. Dans la réalité humaine, les relations ne savent pas toujours d’avance ce qu’elles deviendront. Un lien peut commencer fragile, indécis, léger, puis se densifier ; ou au contraire commencer sincèrement et ne pas durer.

L’enjeu n’est donc pas de dire que tout baiser doit annoncer le mariage, mais de penser la proportion entre geste, parole, attente, consentement et vérité relationnelle.

## 2.10. Thème 9 — Personne non baptisée et universalisation morale

La conférence aborde le cas d’une relation avec une personne non baptisée. Le conférencier affirme que l’essentiel de son propos peut parler à tout humain, parce qu’il ne repose pas seulement sur un commandement religieux, mais sur un désir profond d’aimer et d’être aimé totalement.

C’est une tentative de passer d’une morale confessionnelle à une anthropologie générale. Elle est intéressante. Elle évite de réduire l’éthique chrétienne à un règlement interne.

Mais elle peut aussi devenir une universalisation problématique si elle suppose que tout humain devrait reconnaître spontanément la même structure morale du geste. Les cultures relationnelles sont plurielles. L’anthropologie chrétienne peut dialoguer avec elles, mais elle ne peut pas simplement s’imposer comme évidence universelle.

## 2.11. Thème 10 — Objections : peur d’être quitté, peur d’être jugé

La conférence traite deux objections : “si je refuse, l’autre va partir” et “si je ne vais pas plus loin, on va me prendre pour un idiot”. La réponse est nette : si l’autre part pour cette raison, tant mieux ; on ne construit pas sur une pression.

Ce point est solide : une relation qui exige de franchir ses limites pour être maintenue n’est pas saine.

Mais il faut ajouter une nuance : dans la vie réelle, les relations se construisent aussi avec maladresses, incompréhensions, différences d’histoire et ajustements progressifs. Toute tension ne signifie pas nécessairement manipulation. Il faut distinguer pression, chantage, impatience, maladresse, incompréhension et vraie violence relationnelle.

## 2.12. Thème 11 — Pression à être en couple

La conférence se termine sur la pression sociale à être en couple. C’est un thème important. Être en couple peut devenir un signe de validation sociale, de réussite affective, de normalité, y compris dans les milieux catholiques.

Le conférencier critique le couple de convenance sociale, sans avenir ni don réel. Ce point est juste : la relation ne doit pas servir seulement à se rassurer, à s’afficher, à obtenir des sensations ou à répondre à une pression de groupe.

Mais il faut aussi éviter de sur-idéaliser l’amour comme choix déjà total dès le début. Les relations humaines apprennent souvent à devenir vraies par étapes. La maturité n’est pas donnée immédiatement.

## 2.13. Thème 12 — Ce que la conférence révèle du champ clérical

La conférence révèle plusieurs tensions structurelles :

- une forte demande de parole morale sur l’affectivité ;
- une difficulté des jeunes à articuler désir, foi, culpabilité et liberté ;
- une parole cléricale qui cherche à aider, mais qui parle depuis une position extérieure à la vie conjugale ;
- une tendance à charger les gestes affectifs d’une signification très haute ;
- une volonté de protéger contre la consommation des corps ;
- un risque de sur-normer l’intime ;
- une tension entre accompagnement et contrôle ;
- une tension entre conscience personnelle et cadrage pastoral ;
- une tension entre morale du couple et absence de couples comme co-auteurs principaux du discours.

Le point critique n’est pas que le conférencier parle de morale. Le point critique est que l’institution ecclésiale produit encore souvent une parole sur les couples dans laquelle les couples eux-mêmes ne sont pas les premiers sujets théologiques de leur propre expérience.

## 2.14. Thème 13 — Église laïque vs Église cléricale à partir de la vidéo

À partir de la vidéo, la distinction peut être formulée ainsi :

Une Église cléricale parle des couples depuis une position d’autorité morale extérieure. Elle encadre, distingue, autorise, déconseille, avertit, classe les gestes et définit leur sens. Même lorsqu’elle le fait avec humour et prudence, elle garde le centre de gravité de la parole.

Une Église laïque / baptismale ferait autrement. Elle ne supprimerait pas la parole des prêtres, mais elle ferait parler aussi les couples, les fiancés, les époux, les femmes, les jeunes, les personnes blessées, les éducateurs, les psychologues, les théologiens laïcs. Elle reconnaîtrait que la vie affective n’est pas seulement un objet pastoral à encadrer, mais un lieu de théologie vécue.

La différence n’est pas “morale ou pas morale”. La différence est : qui parle, depuis où, avec qui, sous quel régime d’autorité, et avec quelle reconnaissance de l’expérience vécue ?

## 2.15. Thème 14 — Dérive plus large : morale régulière, cléricale et séculiers

Le fil de réflexion dépasse la vidéo. Il touche une dérive longue : la tendance de certains modèles religieux, réguliers ou cléricaux à projeter sur les laïcs, les couples et la vie séculière des exigences issues de la séparation, de la continence, de la clôture, de l’obéissance ou de la discipline communautaire.

Cette dérive peut prendre plusieurs formes :

- idéalisation du célibat comme état supérieur ;
- soupçon envers le désir conjugal ;
- confusion entre prudence et méfiance du corps ;
- importation de critères monastiques dans la vie amoureuse ;
- direction spirituelle transformée en contrôle de l’intime ;
- valorisation de la pureté comme conformité plutôt que comme vérité relationnelle ;
- parole masculine cléricale sur des expériences féminines, conjugales ou corporelles non vécues ;
- effacement du discernement propre des couples.

Ce n’est pas seulement une question de discours moderne. C’est une sédimentation historique : plusieurs siècles de séparation des états de vie ont produit des réflexes de supériorité symbolique du religieux et du clerc sur le séculier.

## 2.16. Thème 15 — Ce qu’il faut approfondir dans la page

Codex doit intégrer la vidéo comme point de départ, mais la page doit élargir vers :

1. la distinction laïc / clerc ;
2. la distinction clergé / cléricalisme ;
3. la tension peuple baptismal / caste sacrée ;
4. la morale affective comme lieu d’asymétrie ;
5. la projection du modèle régulier sur les couples ;
6. la place des femmes ;
7. les abus et l’emprise ;
8. Vatican II et la revalorisation du laïcat ;
9. la synodalité comme tentative de décléricalisation ;
10. la nécessité de faire des couples de vrais sujets théologiques ;
11. la lecture Q^ : faits, portances, corps, matrices, branches, actualisations, restes vivants ;
12. la lecture T^ : co-présence dissymétrique, non-totalisation, refus de la capture, libellule, césure minimale.

---

# 2. Étude complète

<section id="etude-complete"></section>

## Introduction générale

L’opposition entre **Église laïque** et **Église cléricale** ne doit pas être comprise comme une opposition simpliste entre « bons laïcs » et « mauvais prêtres ». Elle désigne deux régimes ecclésiaux profondément différents.

D’un côté, l’Église peut être comprise comme **peuple baptismal**, corps vivant formé par l’ensemble des baptisés, avec pluralité de charismes, d’expériences, de responsabilités, de vocations et de formes de sainteté. Dans ce régime, le clergé existe, mais il est situé comme ministère de service.

De l’autre côté, l’Église peut se figer comme **système clérical**, où l’ordination devient le centre de gravité presque exclusif de la parole, du pouvoir, de la décision, de la morale, de la légitimité et de la visibilité. Dans ce régime, le clergé ne sert plus seulement la communion : il tend à représenter, absorber ou contrôler l’Église entière.

Le problème n’est donc pas l’existence du ministère ordonné. Le problème est la **capture cléricale** de la vie ecclésiale.

La question centrale devient alors :

> Comment une Église fondée sur le baptême, les charismes et la communion a-t-elle pu produire, au fil des siècles, des formes de pouvoir clérical capables d’infantiliser les laïcs, de normer les couples, de marginaliser les femmes, de protéger les abus et de confondre autorité spirituelle avec pouvoir social ?

Cette étude propose une lecture historique, théologique, institutionnelle et morphodynamique de cette tension.

---

## 3. Définitions fondamentales

### 3.1. Laïcs

Dans le langage catholique courant, les laïcs sont souvent définis négativement : ceux qui ne sont ni prêtres, ni évêques, ni diacres, ni religieux. Cette définition est insuffisante.

La théologie contemporaine, particulièrement depuis Vatican II, insiste sur une définition positive : les laïcs sont des baptisés, membres du peuple de Dieu, participant à leur manière à la mission sacerdotale, prophétique et royale du Christ.

Le laïc n’est donc pas un chrétien incomplet. Il n’est pas un simple récepteur de sacrements. Il n’est pas un auxiliaire paroissial. Il n’est pas un exécutant pastoral. Il est un sujet ecclésial réel.

### 3.2. Clercs

Les clercs sont les fidèles ordonnés : diacres, prêtres et évêques. Leur ministère est lié à l’ordination, à la prédication, aux sacrements, à la présidence liturgique et au gouvernement pastoral.

Mais l’existence d’un clergé ne produit pas mécaniquement une Église cléricale. Il faut distinguer :

- le ministère ordonné comme service ;
- le clergé comme groupe institutionnel ;
- le cléricalisme comme dérive de pouvoir.

### 3.3. Cléricalisme

Le cléricalisme apparaît lorsque le ministère ordonné devient statut supérieur, monopole symbolique, immunité institutionnelle ou pouvoir de surplomb.

Il se reconnaît à plusieurs signes :

- la parole du clerc vaut plus que celle du fidèle ;
- la conscience du laïc est infantilisée ;
- la sexualité conjugale est normée depuis l’extérieur ;
- les victimes sont moins crues que les représentants institutionnels ;
- la structure protège l’image du clergé ;
- les femmes portent la vie réelle de l’Église mais restent hors des décisions majeures ;
- les laïcs sont consultés sans véritable pouvoir de discernement ;
- l’obéissance est confondue avec la foi.

Le cléricalisme est donc moins une doctrine explicite qu’une culture. Il fonctionne par réflexes, positions, habitus, langage, privilèges implicites et asymétries intériorisées.

---

## 4. Origines lexicales : *laos* et *klêros*

Le mot « laïc » vient du grec *laos*, qui signifie le peuple. Dans une perspective ecclésiale, il renvoie au peuple de Dieu, non à une masse profane inférieure.

Le mot « clergé » vient de *klêros*, qui désigne le lot, la part, l’héritage. Historiquement, il en est venu à désigner ceux qui ont reçu une charge particulière dans l’Église.

La tension apparaît lorsque ces deux termes se rigidifient :

| Terme | Sens dynamique | Dérive possible |
|---|---|---|
| *Laos* | Peuple vivant de Dieu | Masse passive, non experte, gouvernée |
| *Klêros* | Charge reçue, part de service | Caste sacrée, séparée, supérieure |

La dérive cléricale commence quand le *klêros* cesse d’être une fonction dans le peuple et devient une classe au-dessus du peuple.

---

## 5. Modèle biblique : peuple, corps, charismes

Dans le Nouveau Testament, l’Église apparaît comme peuple, assemblée, corps, fraternité, communauté de disciples. Il existe des ministères : apôtres, prophètes, docteurs, anciens, épiscopes, diacres. Mais ces ministères ne sont pas encore structurés selon le modèle médiéval d’une caste sacrée séparée.

Paul utilise l’image du corps : plusieurs membres, plusieurs fonctions, une seule vie commune. La diversité des fonctions ne supprime pas la dignité commune.

Le point décisif est celui-ci : la différence ministérielle existe, mais elle ne justifie pas une confiscation du corps entier par une fonction particulière.

Une lecture morphodynamique permet de dire :

> Le ministère est une articulation locale du corps, non le corps lui-même.

Lorsqu’une articulation locale se prend pour la totalité, elle cesse de servir le corps et commence à le capturer.

---

## 6. Formation historique du régime clérical

### 6.1. Les premiers siècles : structuration nécessaire

Les premières communautés chrétiennes ont dû s’organiser. Il fallait garantir la transmission apostolique, célébrer l’eucharistie, résoudre les conflits, soutenir les pauvres, enseigner, maintenir l’unité et résister aux divisions.

La montée de l’épiscopat et du presbytérat n’est donc pas d’abord une dérive. Elle répond à une nécessité réelle de cohésion.

Mais toute fonction de cohésion porte un risque : ce qui sert à maintenir l’unité peut devenir ce qui contrôle l’unité.

### 6.2. Après Constantin : visibilité sociale du clerc

Avec la reconnaissance impériale du christianisme au IVe siècle, les évêques et les clercs deviennent des acteurs sociaux visibles. L’évêque n’est plus seulement responsable d’une communauté liturgique ; il devient juge, médiateur, notable, administrateur, interlocuteur du pouvoir.

L’Église gagne en stabilité, mais elle entre aussi dans une logique de représentation publique et de hiérarchie sociale.

La parole cléricale prend du poids. Le corps ecclésial se concentre progressivement autour de figures d’autorité.

### 6.3. Moyen Âge : séparation des états

Le Moyen Âge stabilise une société chrétienne organisée en états : clercs, religieux, laïcs. Cette organisation produit une vision profondément hiérarchisée de la vie chrétienne.

La vie monastique ou cléricale est souvent pensée comme plus parfaite. La vie conjugale, familiale, économique, politique ou corporelle est parfois perçue comme inférieure, risquée ou spirituellement secondaire.

Cette hiérarchie symbolique produit une trace durable :

> Le clerc semble plus proche du sacré ; le laïc semble plus proche du monde.

C’est l’un des noyaux profonds du cléricalisme.

### 6.4. Réforme grégorienne : purification et séparation

La réforme grégorienne lutte contre la simonie, les ingérences politiques et certaines corruptions du clergé. Elle cherche une plus grande liberté de l’Église face aux pouvoirs laïcs.

Mais elle renforce aussi la séparation entre clercs et laïcs, notamment par l’affirmation du célibat ecclésiastique et la sacralisation accrue de la fonction sacerdotale.

Le prêtre devient un homme séparé, hors du régime commun du mariage, de la famille et de la vie domestique.

Cette séparation peut être féconde si elle est comprise comme disponibilité. Elle devient dangereuse si elle produit une supériorité implicite.

### 6.5. Concile de Trente : discipline et centralité sacerdotale

Après la Réforme protestante, le catholicisme réorganise fortement la formation des prêtres, la discipline, la prédication, la confession, la catéchèse et la vie sacramentelle.

Le prêtre paroissial devient une figure centrale de la vie catholique. Cela permet une meilleure formation et une pastorale plus structurée. Mais cela consolide aussi l’idée que l’Église visible passe d’abord par le prêtre.

Pendant des siècles, de nombreux fidèles vivent l’Église principalement sous la forme :

- messe ;
- confession ;
- catéchisme ;
- curé ;
- morale ;
- obéissance ;
- discipline sacramentelle.

L’Église baptismale est toujours présente théologiquement, mais l’Église vécue devient souvent cléricale.

---

## 7. Structure interne de l’Église cléricale

### 7.1. Monopole de la parole légitime

Dans une Église cléricale, le clerc parle et le laïc reçoit. Le clerc interprète et le laïc applique. Le clerc discerne et le laïc obéit.

Cela ne signifie pas que chaque prêtre agit ainsi personnellement. Le problème est structurel : la position cléricale reçoit un crédit supérieur avant même tout discernement.

### 7.2. Confusion entre autorité spirituelle et pouvoir social

L’autorité pastorale peut se transformer en pouvoir total sur les consciences, les couples, les familles, l’éducation, la culpabilité, le corps et la sexualité.

La direction spirituelle peut devenir direction de vie. La confession peut devenir contrôle. La morale peut devenir emprise. La parole religieuse peut devenir tribunal.

### 7.3. Immunité institutionnelle

Le clerc bénéficie souvent d’une présomption de pureté, de sacrifice et de légitimité. Cette présomption a joué un rôle majeur dans les affaires d’abus : la parole du prêtre a trop souvent été crue contre celle de l’enfant, de la femme, du fidèle, de la victime ou du subalterne.

Le cléricalisme protège la fonction avant de protéger la personne vulnérable.

### 7.4. Infantilisation des laïcs

Le laïc peut être mobilisé pour travailler, payer, enseigner, chanter, animer, organiser, transmettre, nettoyer, accueillir, mais sans être reconnu comme co-sujet réel du discernement.

Il est utile, mais pas pleinement sujet.

### 7.5. Cléricalisation des laïcs

Le cléricalisme peut aussi être reproduit par des laïcs : responsables pastoraux, théologiens, militants, permanents d’Église, responsables associatifs.

Le problème n’est donc pas uniquement sociologique. Il est culturel : goût du contrôle, langage d’autorité, sacralisation de la fonction, mépris implicite de l’expérience ordinaire.

---

## 8. Vatican II : retournement baptismal

Vatican II marque un tournant majeur. Dans *Lumen gentium*, le chapitre sur le peuple de Dieu précède celui sur la hiérarchie. Ce geste théologique est décisif.

Il signifie que l’Église est d’abord peuple de Dieu avant d’être hiérarchie. La hiérarchie n’est pas supprimée ; elle est resituée.

Le baptême redevient la matrice fondamentale.

### 8.1. Peuple de Dieu

Le peuple de Dieu n’est pas une masse indistincte. Il est une communion différenciée. Les ministères y ont une place, mais ils ne fondent pas seuls l’existence ecclésiale.

### 8.2. Appel universel à la sainteté

Vatican II insiste sur l’appel universel à la sainteté. La sainteté n’est pas réservée aux clercs, aux religieux ou aux états de vie séparés.

La vie familiale, professionnelle, sociale, politique et culturelle devient lieu de sainteté.

### 8.3. Apostolat des laïcs

*Apostolicam actuositatem* affirme que les laïcs participent à la mission de l’Église. Ils ne sont pas de simples auxiliaires internes. Leur champ propre est aussi le monde : famille, travail, culture, politique, économie, éducation, soin, relations sociales.

Ce point est crucial : la mission laïque ne consiste pas seulement à aider le prêtre dans la paroisse. Elle consiste à vivre et transformer chrétiennement le monde depuis l’intérieur.

---

## 9. Auteurs majeurs

### 9.1. Yves Congar

Yves Congar est l’un des théologiens majeurs du laïcat. Il refuse de définir le laïc uniquement comme non-clerc. Il cherche à penser sa dignité propre, sa mission, sa participation au triple office du Christ et son insertion dans le monde.

Son apport central :

> Le laïc ne reçoit pas sa valeur du clerc. Il reçoit sa dignité du baptême.

Congar permet de sortir d’une ecclésiologie de la délégation : le laïc ne fait pas seulement ce que le prêtre lui permet de faire. Il agit en vertu de sa vocation baptismale.

### 9.2. John Henry Newman

Newman est essentiel pour le *sensus fidelium*. Il rappelle que les fidèles ne sont pas une masse muette dans la vie doctrinale de l’Église. Le peuple croyant possède une capacité de réception, de conservation, de discernement et parfois de résistance.

Ce n’est pas une démocratie d’opinion. C’est une reconnaissance du fait que la foi vit dans le corps entier de l’Église.

### 9.3. Edward Schillebeeckx

Schillebeeckx travaille la relation entre communauté et ministères. Pour lui, le ministère ordonné doit être compris à partir de la communauté croyante et non contre elle.

Question centrale :

> Le ministère sert-il la communauté, ou la communauté est-elle organisée pour préserver le ministère ?

Cette question reste décisive pour l’avenir de l’Église.

### 9.4. Karl Rahner

Rahner permet de penser la foi vécue, les charismes, la conscience, la responsabilité des chrétiens dans le monde moderne. Il contribue à ouvrir la théologie à l’expérience concrète des croyants et à la complexité de la modernité.

### 9.5. Hans Küng

Küng développe une critique forte des structures de pouvoir ecclésial. Même lorsque ses positions sont discutées, son apport est important pour comprendre les tensions entre institution, vérité, réforme, autorité et liberté.

### 9.6. Paul Lakeland

Paul Lakeland propose une théologie contemporaine du laïcat attentive au risque de subordination structurelle des fidèles non ordonnés. Il montre que la théologie du laïcat reste inachevée si l’Église continue à penser les laïcs depuis le centre clérical.

---

## 10. Morale cléricale et vie séculière

L’un des points les plus sensibles concerne la manière dont une morale cléricale, régulière ou monastique peut prétendre normer la vie séculière, conjugale et corporelle.

Il ne s’agit pas de dire qu’un prêtre ou un religieux ne peut jamais parler du mariage, du désir ou du corps. Ce serait trop simple.

La difficulté commence lorsque cette parole :

- ignore sa propre position de célibat ou de séparation ;
- parle de l’intimité conjugale sans reconnaître l’expérience des couples ;
- transpose sur les laïcs des idéaux réguliers ou monastiques ;
- confond prudence spirituelle et contrôle moral ;
- transforme la sexualité conjugale en zone de soupçon ;
- sacralise la continence comme norme implicite supérieure ;
- fait du corps un objet de surveillance ;
- culpabilise ce qui relève de la tendresse, de l’alliance, du désir ou de la croissance conjugale.

Ici, l’Église cléricale ne se contente plus d’enseigner. Elle colonise symboliquement la vie séculière.

### 10.1. Couple et asymétrie d’expérience

Un homme célibataire ordonné peut avoir une parole théologique, biblique ou pastorale sur le mariage. Mais cette parole doit rester consciente de sa limite d’expérience.

La vie conjugale n’est pas seulement une matière morale. Elle est une expérience incarnée : quotidien, fatigue, désir, enfantement, conflit, pardon, tendresse, fidélité, sexualité, vulnérabilité, argent, parentalité, vieillissement, maladie, charge domestique.

Une parole cléricale devient scandaleuse lorsqu’elle juge de haut ce qu’elle n’habite pas.

### 10.2. Corps, désir et soupçon

Une dérive régulière ou cléricale peut produire une anthropologie du soupçon : le corps est dangereux, le désir est suspect, le baiser est glissant, la sexualité est tolérée seulement sous conditions strictes.

Cette logique peut contaminer la vie des couples en remplaçant le discernement par la culpabilité.

Une morale chrétienne adulte devrait distinguer :

- le désir captateur ;
- le désir relationnel ;
- la tendresse ;
- l’alliance ;
- la domination ;
- la vulnérabilité ;
- la fidélité ;
- la maturation du couple.

Sans cette finesse, la morale devient mécanique de suspicion.

---

## 11. Femmes, laïcat et pouvoir ecclésial

La question des femmes est inséparable du cléricalisme.

Dans de nombreuses communautés, les femmes portent concrètement la vie ecclésiale : catéchèse, transmission, soin, liturgie, accompagnement, accueil, solidarité, éducation, présence aux pauvres, mémoire familiale, théologie vécue.

Pourtant, les lieux ultimes de décision restent très souvent liés à l’ordination masculine.

La dérive est alors double :

- les femmes sont indispensables dans les faits ;
- elles restent marginalisées dans les structures de pouvoir.

Cela produit une dissymétrie massive : le corps vivant de l’Église est largement porté par celles et ceux qui ne disposent pas du centre décisionnel.

La question féminine ne se réduit pas à l’ordination. Elle concerne l’ensemble de la structure : parole, décision, autorité, formation, reconnaissance, écoute, gouvernance, théologie, mémoire, justice.

---

## 12. Abus, emprise et culture cléricale

La crise des abus sexuels, spirituels et institutionnels a révélé une dimension fondamentale : les abus ne sont pas seulement des actes individuels. Ils ont été rendus possibles, couverts ou minimisés par des structures de pouvoir.

Le cléricalisme favorise l’abus parce qu’il crée :

- asymétrie de parole ;
- sacralisation de la fonction ;
- obéissance mal comprise ;
- peur du scandale ;
- protection de l’institution ;
- méfiance envers les victimes ;
- culture du secret ;
- confusion entre pardon et effacement de la justice ;
- déplacement des coupables ;
- absence de contre-pouvoirs.

Une Église cléricale peut donc devenir un système de protection de ses propres représentants.

Une Église baptismale devrait au contraire créer les conditions où la parole vulnérable peut être entendue avant la défense de l’image institutionnelle.

---

## 13. Synodalité : tentative de déverrouillage

La synodalité contemporaine cherche à rouvrir l’Église comme processus d’écoute, de discernement et de participation.

Elle ne signifie pas simplement démocratie parlementaire. Elle signifie que l’Église marche ensemble, écoute ensemble, discerne ensemble.

Mais la synodalité peut rester superficielle si elle ne modifie pas réellement les asymétries de pouvoir.

Il faut donc distinguer :

| Synodalité réelle | Synodalité décorative |
|---|---|
| Écoute effective | Consultation sans conséquence |
| Parole des laïcs intégrée | Parole des laïcs archivée |
| Reconnaissance des conflits | Harmonie de façade |
| Décision plus transparente | Décision déjà verrouillée |
| Responsabilité partagée | Maintien du centre clérical |

La synodalité devient crédible lorsqu’elle touche la gouvernance, les nominations, les finances, les abus, la parole des femmes, les conseils pastoraux, la formation des prêtres, la responsabilité des évêques et la place réelle des laïcs.

---

## 14. Grille comparative

| Dimension | Église laïque / baptismale | Église cléricale |
|---|---|---|
| Centre | Baptême, peuple de Dieu, communion | Ordination, statut, hiérarchie |
| Clergé | Ministère de service | Classe sacrée dominante |
| Laïcs | Sujets de mission | Récepteurs, auxiliaires, exécutants |
| Monde | Lieu de mission et de discernement | Lieu suspect, inférieur ou profane |
| Couple | Lieu d’alliance et de conscience | Objet de réglementation morale externe |
| Femme | Sujet ecclésial réel | Présence utile mais peu décisionnelle |
| Théologie | Écoute des expériences croyantes | Discours autorisé du haut vers le bas |
| Autorité | Service de communion | Contrôle des consciences |
| Morale | Discernement incarné | Norme descendante |
| Abus | Parole vulnérable prioritaire | Institution protégée |
| Synodalité | Participation réelle | Consultation décorative |
| Danger principal | Dilution si mal pensée | Emprise, abus, infantilisation |
| Correctif | Formation, discernement, communion | Décléricalisation, responsabilité |

---

## 15. Lecture Q^ : champ morphodynamique

Dans une lecture Q^, il ne s’agit pas de créer un binôme plat :

> laïcs = bons  
> clercs = mauvais

Ce serait encore une réduction.

La question se lit plutôt comme un champ d’actualisation :

- un champ baptismal large ;
- un champ ministériel local ;
- un champ institutionnel ;
- un champ moral ;
- un champ des corps ;
- un champ des victimes ;
- un champ des couples ;
- un champ féminin ;
- un champ de mémoire historique ;
- un champ de pouvoir symbolique.

La dérive cléricale apparaît lorsque le champ ministériel absorbe, compacte ou neutralise les autres champs.

Formule :

> Le cléricalisme est une compaction du champ ecclésial autour d’un seul régime de légitimité : l’ordination.

À l’inverse, une Église baptismale ne supprime pas les ministères. Elle les replace dans une portance distribuée.

Formule :

> L’Église baptismale n’abolit pas le ministère ; elle empêche le ministère de se prendre pour le corps entier.

---

## 16. Lecture T^Total / libellule

Sous horizon T^Total, la tension « laïque / cléricale » doit être tenue sans totalisation, sans hiérarchie simpliste, sans trajectoire unique.

Le champ ecclésial fonctionne comme un holochamp morphogénétique fractal : plusieurs configurations locales coexistent, parfois en conflit, parfois en fécondation, parfois en capture.

La figure de la libellule permet de tenir :

- portance sans fondation ;
- mobilité sans fuite ;
- différenciation sans domination ;
- présence sans capture ;
- co-tenue des ailes opposées.

La figure du coin de papillon marque la césure minimale : l’endroit où une différence doit être maintenue pour éviter la confusion.

Ici, la césure minimale est :

> ministère ordonné ≠ monopole de l’Église.

Et aussi :

> laïcat ≠ passivité.

Et encore :

> vie séculière ≠ état chrétien inférieur.

Une Église saine tient ces césures sans les transformer en guerre de camps.

---

## 17. Approfondissement : Église laïque ne signifie pas Église sécularisée

L’expression « Église laïque » peut être mal comprise. Elle ne signifie pas :

- Église sans sacrements ;
- Église sans prêtres ;
- Église anti-hiérarchique ;
- Église réduite à une ONG ;
- Église alignée sur la modernité séculière ;
- Église sans doctrine.

Elle signifie plutôt :

- Église où le baptême est premier ;
- Église où les laïcs sont sujets ;
- Église où la vie du monde est reconnue comme lieu de mission ;
- Église où le clergé sert sans absorber ;
- Église où la parole circule ;
- Église où les couples, les femmes, les familles, les pauvres, les victimes et les travailleurs sont reconnus comme porteurs d’expérience théologique ;
- Église où le sacré n’est pas capturé par une caste.

---

## 18. Approfondissement : Église cléricale ne signifie pas seulement “Église avec prêtres”

Il faut éviter une confusion inverse. Une Église cléricale n’est pas simplement une Église avec des prêtres.

Elle est une Église où les prêtres, ou plus largement les logiques cléricales, concentrent abusivement :

- visibilité ;
- décision ;
- vérité ;
- pureté ;
- autorité ;
- morale ;
- gouvernement ;
- interprétation ;
- protection institutionnelle.

Le cléricalisme est donc possible même avec peu de prêtres. Il peut aussi être reproduit par des laïcs, des mouvements, des communautés nouvelles, des responsables pastoraux ou des réseaux militants.

Le cléricalisme est un régime de pouvoir, pas seulement une catégorie sociale.

---

## 19. Approfondissement : les couples comme lieu théologique

La vie conjugale ne doit pas être seulement pensée comme objet de pastorale familiale. Elle est un lieu théologique en elle-même.

Le couple porte des réalités que la parole cléricale ne peut pas simplement déduire abstraitement :

- alliance ;
- désir ;
- fidélité ;
- conflit ;
- pardon ;
- charge mentale ;
- sexualité ;
- fécondité ;
- stérilité ;
- vieillissement ;
- argent ;
- fatigue ;
- soin ;
- parentalité ;
- hospitalité ;
- vulnérabilité.

Une théologie qui parle du couple sans écouter les couples risque de produire une morale hors-sol.

L’enjeu n’est pas de dire que l’expérience suffit à tout. L’enjeu est de reconnaître qu’une doctrine désincarnée peut devenir violente lorsqu’elle ignore les corps qu’elle prétend guider.

---

## 20. Approfondissement : religieux, réguliers et séculiers

Il faut distinguer plusieurs positions :

- clergé séculier : prêtres diocésains, insérés dans un diocèse ;
- clergé régulier : prêtres membres d’ordres religieux ;
- religieux non prêtres ;
- religieuses ;
- laïcs mariés ou non mariés ;
- consacrés laïcs ;
- mouvements ecclésiaux ;
- permanents pastoraux ;
- théologiens.

La dérive peut venir de plusieurs lieux.

Une morale régulière ou monastique peut être magnifique dans son lieu propre : pauvreté, chasteté, obéissance, silence, ascèse, prière, disponibilité, retrait.

Mais elle devient problématique lorsqu’elle est projetée sur la vie séculière comme norme supérieure.

Le mariage n’est pas une version affaiblie de la vie monastique. La vie séculière n’est pas une spiritualité de seconde zone. Le couple n’est pas une concession à la faiblesse humaine.

---

## 21. Approfondissement historique : hiérarchie des états de vie

Pendant des siècles, la tradition chrétienne a souvent classé les états de vie selon une hiérarchie de perfection :

- virginité consacrée ;
- vie monastique ;
- clergé ;
- veuvage ;
- mariage ;
- vie séculière ordinaire.

Cette hiérarchie a eu des effets profonds sur la perception du corps et du couple.

Même lorsque le mariage est reconnu comme sacrement, il a souvent été pensé comme inférieur à la continence. Cette structure n’est pas sans conséquence : elle installe une suspicion durable sur la sexualité conjugale.

La revalorisation moderne du mariage, du laïcat et de la vocation séculière n’efface pas immédiatement ces couches anciennes.

---

## 22. Approfondissement : parole morale et dissymétrie

Une parole morale devient crédible lorsqu’elle reconnaît sa propre position.

Une parole cléricale sur le couple devrait donc être :

- humble ;
- informée ;
- dialogique ;
- attentive aux expériences concrètes ;
- consciente de l’asymétrie ;
- non intrusive ;
- non culpabilisante ;
- capable de distinguer principe, conseil, accompagnement et norme.

À l’inverse, une parole morale devient scandaleuse lorsqu’elle :

- généralise depuis une position extérieure ;
- se présente comme supérieure ;
- ignore les réalités vécues ;
- culpabilise la tendresse ;
- traite le désir comme menace automatique ;
- remplace le discernement par l’obéissance.

---

## 23. Approfondissement : victimes et renversement de priorité

Dans un régime clérical, l’institution cherche spontanément à se protéger. Dans un régime baptismal et évangélique, la personne vulnérable devrait être prioritaire.

Le renversement nécessaire est donc :

| Ancien réflexe clérical | Correctif évangélique |
|---|---|
| Protéger l’image de l’Église | Protéger la personne blessée |
| Croire d’abord le représentant | Écouter d’abord la victime |
| Gérer discrètement | Nommer, enquêter, réparer |
| Éviter le scandale | Refuser le mensonge |
| Spiritualiser la souffrance | Reconnaître le tort |
| Déplacer le problème | Traiter la cause |
| Pardon imposé | Justice, vérité, soin |

La décléricalisation n’est donc pas seulement une réforme administrative. C’est une conversion du centre de gravité moral.

---

## 24. Approfondissement : formation des prêtres

Une Église moins cléricale suppose une autre formation des prêtres.

Points nécessaires :

- formation à l’écoute ;
- connaissance réelle de la vie conjugale et familiale ;
- psychologie des abus de pouvoir ;
- rapport au corps et à l’affectivité ;
- formation au consentement ;
- théologie du laïcat ;
- travail sur les asymétries ;
- expérience de collaboration avec des femmes et des laïcs compétents ;
- transparence financière ;
- gouvernance partagée ;
- supervision ;
- culture du compte rendu.

Le prêtre ne doit pas être formé comme un homme séparé au-dessus du peuple, mais comme un ministre situé dans le peuple.

---

## 25. Approfondissement : gouvernance, droit et responsabilité

La décléricalisation doit toucher les structures concrètes :

- conseils pastoraux dotés d’un vrai poids ;
- conseils économiques transparents ;
- commissions indépendantes pour les abus ;
- présence effective de femmes dans les lieux de décision ;
- consultation réelle des communautés ;
- limitation du pouvoir discrétionnaire ;
- traçabilité des décisions ;
- obligation de rendre compte ;
- protection des lanceurs d’alerte ;
- formation des fidèles à leurs droits.

Sans responsabilité institutionnelle, la critique du cléricalisme reste rhétorique.

---

## 26. Approfondissement : langage

Le cléricalisme passe aussi par le langage.

Signes possibles :

- « L’Église dit » alors qu’un groupe de clercs décide ;
- « obéissance » utilisée pour bloquer une question légitime ;
- « scandale » utilisé pour cacher une faute ;
- « charité » utilisée pour empêcher la justice ;
- « communion » utilisée pour neutraliser les désaccords ;
- « tradition » utilisée comme clôture ;
- « accompagnement » utilisé comme contrôle ;
- « discernement » utilisé alors que la décision est déjà prise.

Une Église baptismale doit assainir son langage. Les mots doivent redevenir respirables.

---

## 27. Synthèse finale

L’Église cléricale n’est pas simplement l’Église avec des prêtres. Elle est l’Église lorsque le ministère ordonné se transforme en centre de domination symbolique, morale, institutionnelle et sociale.

L’Église laïque ou baptismale n’est pas une Église sans ministère. Elle est l’Église lorsque le baptême, le peuple de Dieu, les charismes, la vie séculière, les couples, les femmes, les victimes et les expériences concrètes sont reconnus comme lieux réels de discernement et de mission.

La question n’est donc pas :

> Faut-il supprimer le clergé ?

La vraie question est :

> Comment empêcher que le clergé capture l’Église entière ?

Formule finale :

> Une Église cléricale fait du prêtre le centre de l’Église.  
> Une Église baptismale fait du peuple de Dieu le corps vivant de l’Église, avec des ministères au service de sa communion.

Et, en lecture morphodynamique :

> Le ministère est une aile de la libellule ecclésiale.  
> Il devient dangereux lorsqu’il se prend pour tout le vol.

---

# 28. Sources et références à intégrer sur la page

## Textes magistériels

- Vatican II, *Lumen gentium*, Constitution dogmatique sur l’Église, 1964.  
  https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19641121_lumen-gentium_fr.html

- Vatican II, *Apostolicam actuositatem*, Décret sur l’apostolat des laïcs, 1965.  
  https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_decree_19651118_apostolicam-actuositatem_fr.html

- Jean-Paul II, *Christifideles laici*, Exhortation apostolique sur la vocation et la mission des laïcs, 1988.  
  https://www.vatican.va/content/john-paul-ii/fr/apost_exhortations/documents/hf_jp-ii_exh_30121988_christifideles-laici.html

- Code de droit canonique, canons sur les fidèles et les laïcs.  
  https://www.vatican.va/archive/cod-iuris-canonici/cic_index_fr.html

- François, Lettre au peuple de Dieu, 20 août 2018.  
  https://www.vatican.va/content/francesco/fr/letters/2018/documents/papa-francesco_20180820_lettera-popolo-didio.html

- Commission théologique internationale, *Le sensus fidei dans la vie de l’Église*, 2014.  
  https://www.vatican.va/roman_curia/congregations/cfaith/cti_documents/rc_cti_20140610_sensus-fidei_fr.html

## Théologiens et auteurs

- Yves Congar, *Jalons pour une théologie du laïcat*.
- Yves Congar, *Vraie et fausse réforme dans l’Église*.
- John Henry Newman, *On Consulting the Faithful in Matters of Doctrine*.
- Edward Schillebeeckx, travaux sur Église, ministères et communauté.
- Karl Rahner, textes sur l’Église, les charismes, les laïcs et la foi vécue.
- Hans Küng, travaux critiques sur structures, réforme et ecclésiologie.
- Paul Lakeland, travaux contemporains sur le laïcat.
- Hervé Legrand, travaux sur ecclésiologie, synodalité et ministères.
- Anne-Marie Pelletier, travaux sur femmes, Bible, théologie et Église.
- Lucetta Scaraffia, travaux sur femmes et catholicisme.
- Marie-Jo Thiel, travaux sur abus, éthique, corps et institution.

---

# 29. Consignes de mise en page pour Codex

## Architecture visuelle

Créer une page claire, dense mais respirable :

1. Hero vidéo.
2. Transcription accessible.
3. Résumé exécutif.
4. Étude complète.
5. Grilles comparatives.
6. Approfondissements.
7. Sources.
8. Navigation interne.

## Navigation interne

Ajouter une table des matières sticky ou repliable :

- Vidéo
- Transcription
- Introduction
- Définitions
- Histoire
- Vatican II
- Auteurs
- Couples
- Femmes
- Abus
- Synodalité
- Lecture Q^
- Synthèse
- Sources

Sur mobile, la navigation doit devenir un menu accordéon ou un bouton « Sommaire ».

## Responsive

Vérifier impérativement :

- aucun débordement horizontal ;
- iframe vidéo responsive en 16/9 ;
- tableaux scrollables sur mobile ;
- marges suffisantes ;
- police lisible ;
- contrastes forts ;
- ancres fonctionnelles ;
- pas de menu latéral trop long qui dépasse de l’écran.

## Style

Style souhaité :

- premium ;
- sombre ou clair selon la cohérence du site ;
- typographie sans-serif ;
- titres hiérarchisés ;
- blocs citation élégants ;
- encadrés pour les formules importantes ;
- tableaux lisibles ;
- largeur de texte raisonnable ;
- pas de pavés illisibles ;
- éviter les effets décoratifs excessifs.

## Accessibilité

- Chaque iframe doit avoir un \`title\`.
- Les liens doivent avoir des intitulés explicites.
- Les contrastes doivent être suffisants.
- La transcription doit être lisible sans JavaScript.
- Les tableaux doivent rester consultables sur mobile.
- Les ancres doivent fonctionner au clavier.
- Ne pas utiliser uniquement la couleur pour distinguer les informations.

---

# 30. Bloc résumé exécutif à afficher près du haut

\`\`\`markdown
Cette page étudie la tension entre Église laïque et Église cléricale. Elle ne propose pas une opposition simpliste entre laïcs et prêtres, mais analyse deux régimes ecclésiaux : d’un côté, l’Église comme peuple baptismal ; de l’autre, l’Église comme système clérical où l’ordination concentre parole, pouvoir, morale et légitimité.

L’enjeu central n’est pas de supprimer le ministère ordonné, mais d’empêcher sa capture du corps ecclésial entier. Une Église baptismale reconnaît les laïcs, les couples, les femmes, les victimes, les familles et la vie séculière comme lieux réels de mission et de discernement. Une Église cléricale tend au contraire à infantiliser, contrôler, protéger l’institution et parler depuis un surplomb moral.

La lecture proposée articule histoire, théologie, abus, synodalité, morale conjugale, place des femmes, formation des prêtres et analyse morphodynamique Q^.
\`\`\`

---

# 31. Bloc formules à mettre en valeur

\`\`\`markdown
Le clergé peut être ministère de service ; le cléricalisme commence lorsqu’il devient statut de surplomb.

Le laïc n’est pas un chrétien incomplet ; il est sujet baptismal de mission.

Le ministère ordonné est une articulation locale du corps ecclésial, non le corps entier.

Une Église cléricale fait du prêtre le centre de l’Église.

Une Église baptismale fait du peuple de Dieu le corps vivant de l’Église, avec des ministères au service de sa communion.

Le cléricalisme est une compaction du champ ecclésial autour d’un seul régime de légitimité : l’ordination.

Le ministère est une aile de la libellule ecclésiale ; il devient dangereux lorsqu’il se prend pour tout le vol.
\`\`\`

---

# 32. Tâches concrètes pour Codex

1. Créer une nouvelle page dans la section \`Explorations\`.
2. Placer la vidéo YouTube en haut de page.
3. Ajouter une section « Transcription texte accessible » directement sous la vidéo.
4. Prévoir un bloc repliable mais accessible pour la transcription.
5. Ajouter le résumé exécutif.
6. Intégrer toute l’étude en sections structurées.
7. Ajouter la table comparative.
8. Ajouter les approfondissements.
9. Ajouter les sources en fin de page.
10. Ajouter une navigation interne responsive.
11. Vérifier mobile, tablette et desktop.
12. Vérifier que les tableaux ne cassent pas la mise en page.
13. Vérifier que le lien vidéo et les ancres fonctionnent.
14. Vérifier qu’aucun contenu n’est masqué de manière inaccessible.
15. Adapter la page au style existant du site Theo sans modifier le contenu doctrinal.

---

# 33. Note finale pour Codex

Ne pas réduire le texte à une simple opposition « laïcs contre clercs ».  
Ne pas moraliser de manière simpliste.  
Ne pas supprimer les nuances historiques.  
Ne pas transformer l’étude en pamphlet.  
Ne pas effacer les asymétries.  
Ne pas neutraliser la critique du cléricalisme.  
Conserver la tension : ministère réel, mais non souverain ; laïcat réel, mais non dissolution ; peuple baptismal, mais sans anti-institutionalisme plat.

`,Qe=`---
title: "Complément — Les délires des religieux / Contre-traditions théologiques du corps"
slug: "delires-religieux-contre-traditions-corps-amour-sexualite"
status: "draft-ready"
type: "complement"
video: "https://youtu.be/y6HvOEovgG8?is=nLnkonWHWFcLZes6"
source_context: "Complément à la page sur Église laïque vs Église cléricale, à partir de la conférence du frère Antoine et du fil critique."
---

# Complément à intégrer : Les délires des religieux / Contre-traditions théologiques du corps

> **Vidéo source à afficher en haut de page :**  
> https://youtu.be/y6HvOEovgG8?is=nLnkonWHWFcLZes6

## Consigne d’intégration pour Codex

Ce fichier est un **complément complet** à ajouter à la page existante consacrée à la conférence, à la vie affective, au baiser, à l’Église laïque et à l’Église cléricale.

L’intégration recommandée :

1. Ajouter un bouton ou lien dans le sommaire principal : **Complément polémique et recherches contradictoires**.
2. Créer une nouvelle section après l’analyse principale, ou une sous-page dédiée :
   - \`/explorations/eglise-laique-clericale/delires-religieux-contretraditions\`
3. Conserver la vidéo source en haut de page, avant tout développement.
4. Prévoir deux grands blocs visuellement distincts :
   - **I. Article polémique assumé**
   - **II. Recherches contradictoires complètes**
5. Le premier bloc peut avoir un style plus incisif : fond sombre, titre fort, encadrés, citations.
6. Le second bloc doit être plus académique : bibliographie, sources, notes, tableaux comparatifs.
7. Ajouter une note d’avertissement éditoriale :
   > Ce texte critique des formes de discours religieux et clérical. Il ne vise pas les personnes consacrées en tant que telles, ni la vie religieuse comme vocation. Il analyse des dérives de langage, de pouvoir, de compétence et d’emprise symbolique.

---

# I. Article polémique assumé

# Les délires des religieux

## Quand des célibataires consacrés prétendent gouverner les corps, les couples et les consciences laïques

Il y a un moment où la parole religieuse cesse d’éclairer et commence à délirer.

Non pas délirer au sens médical. Il ne s’agit pas de pathologiser des personnes, ni de mépriser la foi, ni de caricaturer la vie religieuse. Le mot est ici critique, polémique, structurel : il désigne une parole qui sort de sa mesure, qui ne sait plus d’où elle parle, qui confond ministère et surplomb, prudence et police, accompagnement et gouvernement des consciences.

Le délire religieux commence quand un religieux, un prêtre, un clerc, un prédicateur ou un accompagnateur spirituel parle du corps des autres comme s’il lui appartenait symboliquement.

Il commence quand un célibataire consacré, vivant hors de la conjugalité, hors de la sexualité partagée, hors de la parentalité, hors de la négociation ordinaire d’un couple, s’autorise à définir de manière trop sûre ce que signifie un baiser, un désir, une caresse, une attirance, un commencement amoureux, une hésitation, une maladresse, un rythme corporel.

Il commence quand celui qui ne vit pas la condition conjugale prétend en fixer la grammaire intime.

Il commence quand la parole cléricale ne dit plus : « voici une sagesse possible, reçue d’une tradition, offerte à votre discernement », mais : « voici ce que votre geste signifie, voici ce qu’il vaut, voici jusqu’où vous pouvez aller, voici où commence la faute, voici où votre amour devient mensonge ».

Le scandale n’est pas qu’un religieux parle d’amour. Le scandale est qu’il parle parfois comme si l’amour des autres lui appartenait.

---

## 1. Le religieux parle depuis un lieu séparé

Le religieux n’habite pas le même lieu existentiel que le couple laïc.

Il ne vit pas l’épaisseur quotidienne du mariage. Il ne vit pas la sexualité conjugale comme langage partagé, avec ses joies, ses tensions, ses rythmes différents, ses blessures, ses reprises, ses silences, ses fatigues, ses gestes tendres, ses gestes maladroits, ses fidélités minuscules.

Il ne vit pas la parentalité qui déplace le corps, le sommeil, le désir, la disponibilité. Il ne vit pas l’usure du couple, ni le retour du désir après des années, ni l’apprentissage de l’autre dans la durée, ni la sexualité réconciliée après une dispute, ni la tendresse physique quand la passion a changé de forme.

Il peut pourtant parler. Bien sûr.

Il peut transmettre une tradition. Il peut proposer une anthropologie. Il peut nommer des risques. Il peut rappeler que le corps n’est pas un objet. Il peut dénoncer la consommation sexuelle, la pression, la manipulation, le mensonge, l’usage de l’autre.

Mais il devrait toujours le faire avec une humilité radicale : **je parle depuis un lieu séparé**.

Ce qui devient insupportable, c’est la disparition de ce lieu d’énonciation. Le religieux ne dit plus : « je parle depuis ma règle, depuis mon célibat, depuis ma tradition, depuis mon expérience spirituelle limitée ». Il dit : « je sais ce que vous devez vivre ».

Or le lieu séparé ne donne pas automatiquement une lucidité supérieure. Il donne une perspective. Rien de plus.

---

## 2. Le problème n’est pas la morale, mais la confiscation morale

Il faut être précis. Toute morale n’est pas oppressive. Toute parole religieuse sur la sexualité n’est pas abusive. Toute prudence n’est pas peur. Toute exigence n’est pas emprise.

Une tradition spirituelle peut aider à ne pas réduire l’autre à un corps consommable. Elle peut aider à penser la fidélité, la promesse, la lenteur, la limite, la parole, le consentement, la non-possession. Elle peut rappeler que le désir peut devenir aveugle, que la séduction peut blesser, que l’intensité n’est pas toujours l’amour.

Mais une morale devient cléricale quand elle confisque la capacité des personnes à discerner leur propre relation.

Elle ne propose plus : elle administre.

Elle n’accompagne plus : elle qualifie.

Elle n’écoute plus : elle classe.

Elle ne fait plus confiance à la conscience : elle la remplace.

Dans cette logique, le couple n’est plus sujet de sa propre maturation. Il devient objet de discours. Deux jeunes qui s’aiment ne sont plus des personnes en apprentissage ; ils deviennent des cas. Cas numéro 1, cas numéro 2, cas limite, cas dangereux, cas prudent, cas impur, cas sérieux, cas non sérieux.

Le vivant relationnel est transformé en grille de contrôle.

---

## 3. Le délire de la pureté

La pureté pourrait être une belle notion. Si elle signifiait : ne pas utiliser l’autre, ne pas mentir, ne pas forcer, ne pas séparer le corps du cœur, ne pas transformer le désir en prédation.

Mais dans certains discours religieux, la pureté devient un régime de surveillance.

Elle devient obsession du seuil. Obsession du « jusqu’où ». Obsession du permis et du défendu. Obsession de la zone grise. Obsession du geste efficace, du geste dangereux, du geste déclencheur, du geste trop intime, du geste qui mène plus loin.

Le corps est alors découpé comme une carte militaire.

Ici, c’est prudent. Là, c’est risqué. Plus loin, c’est faute. Ici les lèvres. Là la langue. Ici les mains. Là l’excitation. Ici l’intention. Là la chute.

On prétend élever l’amour, mais on fabrique une cartographie anxieuse du corps.

Le résultat est lourd : au lieu d’apprendre à aimer, certains apprennent à se soupçonner.

Ai-je désiré trop fort ? Ai-je aimé ou ai-je péché ? Ai-je été sincère ou déjà impur ? Ai-je embrassé une personne ou suivi une pulsion ? Ai-je donné mon cœur ou seulement cherché une sensation ? Ai-je été libre ou déjà entraîné ?

Cette suspicion permanente n’est pas une éducation de l’amour. C’est une mise sous surveillance de l’âme.

---

## 4. Le baiser comme symptôme d’un surinvestissement religieux

Le baiser est un révélateur.

Une parole équilibrée pourrait dire : un baiser n’est pas rien. Il engage le corps, l’affect, la confiance, la proximité. Il peut être beau, léger, maladroit, sérieux, joueur, profond, ambigu, prématuré ou blessant selon les situations. Il demande consentement, parole, respect, intelligence du contexte.

Mais dans certains discours religieux, le baiser devient surchargé. Il devient presque un objet dogmatique. Il devient promesse, seuil, pré-mariage, risque de mensonge, risque de chute, test de pureté, indice d’intention matrimoniale.

Un baiser n’est plus un baiser : il doit porter toute la métaphysique du mariage, de la vocation, du don total, de la chasteté, de la faute, de la future épouse, de la future blessure, du futur regret.

Ce surpoids est délirant.

Car un geste humain peut avoir du sens sans être obligé de porter l’éternité.

Tout geste amoureux n’est pas déjà un serment. Toute attirance n’est pas déjà une vocation. Toute maladresse affective n’est pas déjà un mensonge. Toute relation qui n’aboutit pas au mariage n’est pas forcément une tromperie morale.

Il existe des étapes. Des tâtonnements. Des apprentissages. Des gestes immatures mais non pervers. Des relations vraies mais non définitives. Des émotions sincères mais non encore capables de promesse.

La vie affective réelle n’entre pas dans une logique binaire : mariage ou mensonge, don total ou usage, pureté ou chute.

---

## 5. Le mariage comme horizon écrasant

Une des formes les plus problématiques du discours catholique sur l’affectivité consiste à projeter très tôt le mariage comme horizon de vérité.

L’intention peut être compréhensible : ne pas banaliser le corps, ne pas transformer l’autre en divertissement, inscrire l’amour dans la durée, rappeler que le désir demande une promesse pour ne pas se dissoudre.

Mais quand l’horizon matrimonial arrive trop vite, il écrase les étapes.

Il devient impossible de vivre une rencontre comme rencontre. Un baiser comme baiser. Une attirance comme attirance. Un commencement comme commencement. Tout est jugé depuis la fin supposée : si ce n’est pas orienté vers le mariage, c’est mensonge ; si ce n’est pas sérieux, c’est usage ; si ce n’est pas promesse, c’est pulsion.

Ce régime est affectivement violent.

Il empêche de reconnaître que la maturation humaine passe aussi par des expériences non terminales. Des relations qui n’aboutissent pas peuvent avoir été réelles. Des amours de jeunesse peuvent avoir été sincères sans être définitifs. Des baisers peuvent avoir été beaux sans être déjà matrimoniaux. Des erreurs peuvent avoir été formatrices sans devoir être transformées en faute identitaire.

Le délire religieux, ici, consiste à vouloir faire porter au commencement le poids de la fin.

---

## 6. L’ascèse régulière projetée sur les laïcs

La vie religieuse a sa grandeur propre : règle, célibat, disponibilité, communauté, prière, renoncement, service.

Mais cette grandeur devient dangereuse lorsqu’elle se transforme en norme implicite pour juger la vie des laïcs.

Le couple n’est pas un monastère raté.

Le mariage n’est pas une concession à ceux qui n’auraient pas la force de rester continents.

La sexualité conjugale n’est pas une zone dangereuse qu’il faudrait tolérer parce que les humains ne sont pas des anges.

Le désir conjugal n’est pas une faiblesse domestiquée par le sacrement.

La vie laïque n’est pas une spiritualité diminuée. Elle est une autre forme d’incarnation. Elle a ses risques, mais aussi sa vérité propre : alliance, soin du quotidien, corps partagé, fécondité possible, durée, hospitalité, travail, argent, fatigue, enfants, vieillissement, deuil, réconciliation.

Le délire des religieux apparaît quand leur renoncement devient tribunal de ce qu’ils n’ont pas choisi de vivre.

---

## 7. Le langage du bien peut devenir violent

Les discours les plus problématiques ne sont pas toujours brutaux.

Ils peuvent être drôles, pédagogiques, chaleureux, jeunes, accessibles, pleins d’anecdotes. Ils peuvent dire vouloir protéger l’amour, aider les jeunes, éviter les blessures, former les consciences.

Mais le langage du bien peut devenir violent quand il installe une dépendance à l’approbation morale extérieure.

La violence n’est pas seulement dans l’interdit. Elle peut être dans l’insistance, la répétition, la culpabilisation douce, l’humour qui ridiculise certains gestes, la mise en scène de la pente, l’idée que le désir est presque toujours en train de trahir le cœur.

On ne crie pas. On ne menace pas. On explique. On raconte. On accompagne. Et pourtant, un filet se referme : le jeune croyant n’apprend plus seulement à discerner ; il apprend à se regarder avec les yeux d’un clerc.

C’est peut-être cela, l’un des effets les plus graves : la conscience ne s’éveille pas, elle se cléricalise.

---

## 8. L’oubli des corps réels

L’Église a beaucoup parlé du corps.

Corps comme temple. Corps comme signe. Corps comme langage. Corps comme don. Corps comme vocation. Corps comme lieu de pureté. Corps comme lieu de péché. Corps comme lieu de sanctification.

Mais elle a souvent moins écouté les corps.

Le corps des femmes. Le corps des couples. Le corps des victimes. Le corps des adolescents. Le corps des personnes homosexuelles. Le corps des époux âgés. Le corps traumatisé. Le corps qui désire sans savoir encore parler. Le corps qui a peur. Le corps qui se ferme. Le corps qui se souvient.

Une théologie du corps qui n’écoute pas les corps risque de devenir une idéologie du corps.

C’est ici que la parole religieuse doit être radicalement déplacée : moins parler sur les corps ; davantage écouter ce que les corps vivent, portent, subissent, désirent, refusent, cherchent.

---

## 9. Le religieux n’est pas propriétaire du sens

Le prêtre peut bénir. Il peut accompagner. Il peut confesser. Il peut enseigner. Il peut rappeler une tradition. Il peut proposer un chemin.

Mais il n’est pas propriétaire du sens des gestes d’un couple.

Il ne possède pas le baiser des autres. Il ne possède pas leur rythme. Il ne possède pas leur désir. Il ne possède pas leur conscience. Il ne possède pas leur futur. Il ne possède pas leur manière d’apprendre.

Le cléricalisme commence exactement là : quand celui qui accompagne devient celui qui sait à la place des autres.

---

## 10. Conclusion polémique

Les religieux n’ont pas à se taire. Mais ils doivent apprendre à parler depuis leur limite.

Parler moins haut.

Parler moins vite.

Parler moins sur.

Parler avec.

Parler avec les couples, non sur les couples. Avec les femmes, non sur les femmes. Avec les jeunes, non sur leur désir. Avec les victimes, non depuis la protection de l’institution. Avec les corps, non depuis l’abstraction du corps.

La foi chrétienne n’a pas besoin d’une police des baisers.

Elle a besoin d’une parole capable de reconnaître le désir sans l’idolâtrer, le corps sans le soupçonner, la prudence sans la transformer en peur, la chasteté sans la réduire à une cartographie anxieuse des gestes.

Le délire religieux commence quand une parole séparée prétend gouverner l’intime.

Et la sortie du délire ne consiste pas à supprimer toute exigence, mais à rendre la parole à ceux qui vivent : les couples, les femmes, les laïcs, les corps, les consciences.

---

# II. Recherches contradictoires complètes

## Introduction : pourquoi ce contre-dossier est nécessaire

La critique polémique serait faible si elle laissait croire que toute théologie du corps, de l’amour ou de la sexualité serait nécessairement répressive.

Ce n’est pas vrai.

Les traditions bibliques, juives, chrétiennes et catholiques contiennent des lignes très différentes. Certaines sont ascétiques, méfiantes, disciplinaires, parfois culpabilisantes. Mais d’autres sont nuptiales, sensuelles, poétiques, conjugales, mystiques, érotiques, incarnées.

Il faut donc lire le champ religieux comme un champ conflictuel, non comme un bloc.

D’un côté, il existe une ligne de soupçon : corps dangereux, désir instable, sexualité suspecte, pureté comme contrôle, clerc comme régulateur.

De l’autre, il existe une ligne de bénédiction : corps chanté, désir reconnu, sexualité conjugale honorée, plaisir situé, amour comme connaissance, femme désirante comme sujet, érotique comme langage théologique.

Le dossier contradictoire permet de dire : certains discours religieux contemporains ne sont pas seulement contestables au regard de la modernité ; ils peuvent aussi être pauvres au regard de leurs propres traditions.

---

# A. Le Cantique des cantiques : un texte biblique érotique au cœur du canon

Le premier contre-exemple est biblique : le **Cantique des cantiques**.

Le Cantique ne parle presque pas de loi, de faute, de pureté ou de contrôle. Il chante le désir. Il met en scène une femme et un homme qui se cherchent, s’appellent, se décrivent, se désirent. Le texte est saturé d’images corporelles : bouche, parfum, seins, peau, cou, yeux, jardin, vin, fruits, nuit, lit, voix.

Ce texte est capital parce qu’il empêche toute réduction biblique du désir à la chute. Dans le canon, il existe un livre où l’amour humain est chanté dans sa puissance sensible.

La tradition juive et chrétienne a beaucoup allégorisé le Cantique : amour de Dieu pour Israël, amour du Christ pour l’Église, union de l’âme avec Dieu. Mais cette lecture spirituelle ne supprime jamais complètement la matière érotique du texte. Elle la transporte, la travaille, la transpose.

On peut donc dire : le corps désirant est entré dans le langage biblique avant que les moralistes ne le mettent sous surveillance.

## Points à retenir

Le Cantique des cantiques donne une dignité scripturaire au langage du désir.

La femme y est sujet parlant et désirant.

Le texte ne commence pas par la culpabilité mais par l’appel amoureux.

L’érotique y précède la police morale.

## Usage dans l’article

À utiliser contre toute parole religieuse qui ferait du corps amoureux un problème avant d’en faire un lieu de beauté.

Formule possible :

> Une tradition qui possède le Cantique des cantiques n’a pas le droit de réduire le baiser à une zone de risque moral. Elle porte en elle un livre où la bouche, le parfum, la peau, la nuit et le jardin deviennent langage de l’amour.

---

# B. Judaïsme rabbinique : \`onah\`, devoir conjugal et reconnaissance du désir de l’épouse

La tradition juive rabbinique offre un contrepoint très fort à certaines tendances chrétiennes ascétiques.

La notion de **\`onah\`** désigne l’obligation conjugale, traditionnellement comprise comme le devoir du mari de répondre aux droits sexuels de son épouse. Dans la tradition halakhique, la sexualité conjugale n’est pas seulement une concession à la faiblesse humaine ni seulement un instrument de procréation. Elle est une obligation relationnelle.

La Mishnah Ketubot 5:6 discute la fréquence du devoir conjugal selon les conditions de vie et de travail du mari. Ce point est profondément significatif : la sexualité n’est pas hors du droit ni hors de la relation ; elle est pensée comme une dimension due à l’autre dans l’alliance conjugale.

Ce cadre reste patriarcal et doit être lu historiquement. Mais il contient une intuition très forte : la sexualité conjugale est une responsabilité envers l’autre, et pas seulement un danger à encadrer.

## Points à retenir

La sexualité conjugale est intégrée à l’obligation matrimoniale.

Le désir de l’épouse est reconnu dans l’interprétation traditionnelle de \`onah\`.

Le corps n’est pas traité comme impureté mais comme dimension de l’alliance.

L’absence de sexualité peut devenir un manquement relationnel.

## Usage dans l’article

À utiliser pour montrer qu’une théologie religieuse peut penser la sexualité comme responsabilité de joie, de soin et de réponse à l’autre, non comme suspicion.

Formule possible :

> Là où certains discours cléricaux demandent surtout jusqu’où le corps peut aller sans tomber, la tradition juive demande aussi comment l’époux répond au désir et à la joie de son épouse.

---

# C. Iggeret ha-Kodesh : l’union sexuelle comme acte saint

L’**Iggeret ha-Kodesh**, texte juif médiéval souvent attribué traditionnellement à Nahmanide, représente une contre-tradition majeure.

Le texte affirme que l’union sexuelle accomplie de manière juste, au moment juste et avec une intention juste, est sainte et pure. Il refuse l’idée que l’union sexuelle serait honteuse ou répugnante en elle-même.

Cette perspective est théologiquement très forte : le problème n’est pas le corps, mais la manière dont il est vécu. L’union sexuelle peut être dégradée par la violence, l’égoïsme, la contrainte, la brutalité, l’absence de parole. Mais elle peut aussi être un acte de sainteté, de connaissance, de joie et de présence.

Dans certaines traditions juives, le rapport sexuel conjugal devient même un lieu où la Shekhinah, la présence divine, peut se manifester.

## Points à retenir

La sexualité peut être dite sainte, non simplement tolérée.

L’intention, le moment, la relation et la qualité du geste comptent.

La honte du corps est refusée.

La douceur, la parole, l’attention et le désir partagé sont valorisés.

## Usage dans l’article

À utiliser pour contraster avec les discours religieux qui parlent du baiser et de la sexualité surtout comme pente dangereuse.

Formule possible :

> Une tradition spirituelle sérieuse ne devrait pas commencer par demander comment empêcher les corps de tomber, mais comment les corps peuvent devenir justes, doux, libres et vrais.

---

# D. Kabbale et Zohar : érotique cosmique et Shekhinah désirante

La mystique juive, notamment le **Zohar**, va encore plus loin : elle utilise le langage de l’érotique pour penser la vie divine elle-même. Les unions entre sefirot, la dynamique entre masculin et féminin divins, la présence de la Shekhinah, les images du Cantique deviennent des figures de la circulation du divin.

Il faut évidemment éviter une lecture pseudo-ésotérique ou simpliste. Il ne s’agit pas de dire : « le sexe est Dieu ». Mais la tradition kabbalistique ose penser que l’érotique peut être une langue de la structure du réel et de la relation au divin.

Ce point est redoutable pour une critique du cléricalisme : une tradition religieuse peut avoir assez de profondeur pour ne pas avoir peur de l’érotique. Elle peut le symboliser, le discipliner, le ritualiser, mais elle ne le réduit pas à une zone sale.

La figure de la **Shekhinah** est ici importante : elle permet de penser un féminin divin actif, désirant, mobile, non réduit à la passivité.

## Points à retenir

Le langage érotique peut devenir langage mystique.

La Shekhinah peut être pensée comme figure active du désir.

Le Cantique des cantiques devient matrice d’une romance intradivine.

Le féminin désirant n’est pas nécessairement diabolisé ou réduit au danger.

## Usage dans l’article

À utiliser pour montrer que les traditions religieuses contiennent des ressources beaucoup plus riches que la police morale des gestes.

Formule possible :

> Là où des prédicateurs réduisent le désir à une pente, le Zohar ose en faire une langue de l’union divine. On mesure l’appauvrissement.

---

# E. David Biale : le judaïsme comme histoire conflictuelle de l’éros

David Biale, dans **Eros and the Jews**, montre que le judaïsme n’a pas une position simple ou uniforme sur la sexualité. Il retrace une histoire faite de tensions, de normes, de fantasmes, de continuités et de ruptures, depuis la Bible et le Talmud jusqu’au judaïsme moderne.

L’intérêt de Biale est d’éviter une inversion simpliste : judaïsme positif contre christianisme négatif. La réalité est plus complexe. Le judaïsme a aussi ses normes, ses asymétries, ses formes de contrôle patriarcal. Mais il conserve souvent une structure importante : la sexualité conjugale n’est pas inférieure au célibat consacré, et le mariage reste une forme centrale de vie religieuse.

Ce contraste est décisif face à certaines traditions chrétiennes qui ont survalorisé la virginité, la continence ou le célibat, parfois au détriment de la conjugalité.

## Points à retenir

Le judaïsme ne peut pas être idéalisé comme pure libération sexuelle.

Mais il offre une tradition robuste de valorisation conjugale.

Il pense l’éros à travers la loi, le mariage, la famille, la mystique et l’histoire.

Il constitue un contrepoint majeur à l’ascétisme chrétien excessif.

---

# F. Christianisme ancien et médiéval : le Cantique comme matrice mystique

Le christianisme a souvent déplacé l’érotique vers la mystique. Chez Origène, Bernard de Clairvaux, Guillaume de Saint-Thierry, Hadewijch, Mechthild de Magdebourg ou Jean de la Croix, le langage de l’amour, du baiser, de la blessure, de la nuit, de l’union et du désir devient langage de l’âme et de Dieu.

Cette tradition est ambivalente.

D’un côté, elle peut spiritualiser l’éros au point d’éloigner la sexualité concrète. Le corps des couples disparaît parfois derrière l’âme mystique.

De l’autre, elle prouve que le christianisme n’a jamais pu se passer de la grammaire du désir. Pour parler de Dieu, il a fallu parler de baiser, de nuit, de blessure, d’époux, d’épouse, d’étreinte, de manque et d’union.

Cela signifie que le désir n’est pas étranger au langage théologique. Il en est l’une des sources poétiques les plus puissantes.

## Points à retenir

Le christianisme a une tradition nuptiale et mystique très riche.

Cette tradition peut être corporelle dans son langage, même si elle est souvent ascétique dans sa pratique.

Les mystiques féminines réintroduisent souvent une intensité affective et charnelle du langage de Dieu.

Cette tradition peut servir contre une théologie froide, juridique ou disciplinaire.

## Usage dans l’article

Formule possible :

> Le christianisme qui prétend se méfier du désir oublie qu’il a parlé de Dieu avec les mots du désir pendant des siècles.

---

# G. Catholicisme conciliaire : Gaudium et spes et la dignité des actes conjugaux

Le concile Vatican II marque un tournant dans la manière catholique officielle de parler du mariage. Dans **Gaudium et spes**, le mariage est décrit comme une communauté de vie et d’amour. Les actes propres à l’amour conjugal, lorsqu’ils sont vécus dans la dignité humaine, doivent être honorés avec grand respect.

Ce texte est important car il déplace l’accent. La sexualité conjugale n’est plus pensée seulement à partir de la procréation ou du devoir. Elle est intégrée à l’amour des époux.

Cela ne supprime pas les normes catholiques, notamment sur la fécondité, la contraception ou l’indissolubilité. Mais cela donne une base officielle pour refuser les discours qui parlent de sexualité conjugale comme d’une concession honteuse.

## Points à retenir

Le mariage est communauté de vie et d’amour.

Les actes conjugaux sont honorables dans la dignité humaine.

L’amour conjugal a une valeur propre.

La sexualité conjugale est intégrée à la relation personnelle des époux.

## Usage dans l’article

Formule possible :

> Même Vatican II est plus riche que certaines prédications anxieuses sur la pureté : le concile demande d’honorer les actes propres de l’amour conjugal avec grand respect.

---

# H. Catéchisme catholique : intimité physique et communion spirituelle

Le Catéchisme de l’Église catholique présente la sexualité comme ordonnée à l’amour conjugal de l’homme et de la femme. Il affirme que, dans le mariage, l’intimité corporelle devient signe et gage de communion spirituelle.

On peut critiquer les limites de cette formulation, notamment son cadre strictement matrimonial et hétérosexuel. Mais elle contient néanmoins une affirmation positive : le corps sexuel n’est pas extérieur à la communion spirituelle. Il peut en être le signe.

La sexualité conjugale n’est pas pure animalité. Elle peut exprimer la personne. Elle peut dire l’alliance.

## Points à retenir

L’intimité physique peut être signe de communion spirituelle.

Le plaisir sexuel n’est pas condamné en soi dans le mariage.

La sexualité est pensée comme langage du don.

Le catholicisme officiel contient des ressources anti-puritaines.

---

# I. Jean-Paul II : théologie du corps, nudité sans honte et signification nuptiale

La théologie du corps de Jean-Paul II est souvent mobilisée dans les milieux catholiques conservateurs ou identitaires. Elle peut être utilisée de manière rigide, apologétique ou culpabilisante. Mais son noyau est plus complexe.

Jean-Paul II part notamment de la nudité originelle sans honte en Genèse 2. Il voit dans le corps humain une capacité d’exprimer le don de la personne. Le corps a une signification nuptiale : il est fait pour la communion.

Ce point peut être retourné contre les usages policiers de la théologie du corps. Si le corps est langage de la personne, alors il ne peut pas être réduit à une carte de gestes permis/défendus. Il demande écoute, parole, consentement, histoire, relation, interprétation située.

## Points à retenir

Le corps n’est pas l’ennemi de l’âme.

La sexualité n’est pas pure pulsion.

Le corps peut exprimer le don de la personne.

La théologie du corps peut être libératrice ou cléricalisée selon son usage.

## Usage dans l’article

Formule possible :

> Le paradoxe est violent : une théologie du corps qui voulait rendre au corps sa dignité peut être transformée en système de surveillance des corps.

---

# J. Benoît XVI : Deus caritas est et la non-séparation de l’eros et de l’agapè

Benoît XVI, dans **Deus caritas est**, refuse une opposition brutale entre eros et agapè. L’eros n’est pas supprimé par l’amour chrétien ; il doit être purifié, intégré, unifié à l’agapè.

Ce point est essentiel. Il signifie que même dans une théologie catholique classique et exigeante, l’eros n’est pas l’ennemi de l’amour. Il est une dimension de l’amour humain qui demande maturation, mais non destruction.

Cela peut servir de critique interne des discours catholiques qui opposent trop vite désir et charité, corps et don, plaisir et vérité.

## Points à retenir

Eros et agapè ne doivent pas être séparés radicalement.

L’amour chrétien ne détruit pas le désir.

Le désir demande intégration, non suspicion permanente.

Benoît XVI fournit une source catholique forte contre le puritanisme.

## Usage dans l’article

Formule possible :

> Même Benoît XVI ne demande pas de tuer l’eros. Il demande de ne pas le séparer de l’amour. Certains moralistes font pire que le magistère qu’ils prétendent défendre.

---

# K. François : Amoris laetitia et la dimension érotique de l’amour

Dans **Amoris laetitia**, François consacre explicitement une section à la dimension érotique de l’amour. Il affirme que la sexualité est un don merveilleux de Dieu et que la dimension érotique ne doit pas être considérée comme un mal permis ou un fardeau toléré pour le bien de la famille.

C’est une source importante car elle parle directement contre une réduction de la sexualité à une concession.

François insiste aussi sur la tendresse, la patience, la croissance, la gradualité, les situations concrètes, l’accompagnement. Sa perspective n’est pas sans limites, mais elle est nettement moins cartographique que certains discours de pureté.

## Points à retenir

La sexualité est un don merveilleux.

La dimension érotique de l’amour enrichit la relation conjugale.

Elle ne doit pas être vue comme un mal toléré.

L’accompagnement doit tenir compte des situations concrètes.

## Usage dans l’article

Formule possible :

> Quand un discours catholique transforme l’érotique en risque permanent, il oublie qu’Amoris laetitia demande de la voir comme un don qui enrichit la relation des époux.

---

# L. Théologies contemporaines du corps, de la sexualité et de la justice relationnelle

Plusieurs théologiens et théologiennes contemporains travaillent à sortir d’une morale sexuelle centrée sur l’interdit pour développer une éthique de la relation.

## Margaret Farley

Dans **Just Love**, Margaret Farley propose une éthique sexuelle fondée sur justice, consentement, mutualité, égalité, engagement, fécondité relationnelle et non-domination. Son travail a été contesté par Rome, mais il demeure une référence majeure pour penser une éthique sexuelle chrétienne à partir de la justice relationnelle.

## James B. Nelson

James B. Nelson a développé une théologie du corps et de la sexualité où l’incarnation, la grâce, la relation et la vulnérabilité sont centrales. Il cherche à dépasser la séparation entre spiritualité et sexualité.

## Lisa Sowle Cahill

Lisa Sowle Cahill travaille sur le mariage, la famille, la sexualité, le genre et l’éthique catholique dans une perspective sociale et relationnelle.

## Tina Beattie

Tina Beattie développe une théologie catholique féministe attentive au corps, au désir, à Marie, au genre, à la symbolique et aux structures de pouvoir.

## Sarah Coakley

Sarah Coakley pense le désir, l’ascèse et Dieu dans une structure plus complexe que la simple opposition entre renoncement et pulsion.

## Points à retenir

L’éthique sexuelle contemporaine ne se réduit pas au permis/défendu.

Le consentement, la justice, la mutualité et la non-domination deviennent centraux.

La tradition chrétienne peut être retravaillée depuis le corps vécu et non seulement depuis la norme.

Ces travaux permettent de contester le cléricalisme sans sortir nécessairement de la théologie.

---

# III. Tableau comparatif des deux régimes théologiques

| Dimension | Régime clérical de soupçon | Régime théologique de bénédiction |
|---|---|---|
| Corps | Risque, pente, zone de faute | Langage, présence, alliance, joie |
| Désir | Instable, suspect, à surveiller | Énergie relationnelle à discerner |
| Baiser | Seuil moral, danger, promesse lourde | Geste situé, sensible, relationnel |
| Sexualité | Concession, danger, devoir normé | Don, joie, connaissance, communion |
| Couple | Objet pastoral à encadrer | Sujet de discernement |
| Laïc | Récepteur de normes | Sujet baptismal et moral |
| Prêtre/religieux | Régulateur des consciences | Témoin, accompagnateur, serviteur |
| Pureté | Surveillance des limites | Non-utilisation de l’autre, justesse du lien |
| Chasteté | Contrôle des gestes | Amour non possessif |
| Tradition | Norme disciplinaire | Ressources multiples, parfois contradictoires |
| Femme | Objet de protection ou tentation | Sujet désirant et parlant |
| Spiritualité | Sortie du corps | Corps traversé, habité, transfiguré |

---

# IV. Synthèse Q^ : lecture morphogénétique du champ

La lecture Q^ ne réduit pas le religieux à un bloc. Elle lit le champ comme coexistence de branches, de forces, de traditions concurrentes.

## Q^FACT : noyau local

Un discours religieux contemporain sur le baiser et l’affectivité produit une parole morale destinée à de jeunes catholiques. Il articule prudence, pureté, avenir conjugal, communication et maîtrise de soi.

## Q^MEDIA : apparition publique

La vidéo est diffusée sur YouTube. Elle devient un objet public, transmissible, réinterprétable, détaché de son contexte pastoral immédiat. Une parole initialement adressée à un groupe devient disponible pour critique générale.

## Q^BIO : corps et charge affective

Le discours porte sur la langue, la bouche, les mains, l’excitation, le malaise, l’amour, le désir, la gêne, la honte possible. Il touche donc des zones corporelles sensibles. Sa charge affective est forte.

## Q^SOC : portances sociales

Le discours se situe dans un milieu catholique jeune, avec codes sociaux spécifiques, pression du couple, culture des soirées, idéal de pureté, références à des prêtres, accompagnateurs, auteurs catholiques.

## Q^HIST : résonances longues

Il réactive une longue histoire chrétienne de contrôle du corps, mais aussi une histoire de valorisation nuptiale et mystique du désir. Le conflit est interne à la tradition.

## Q^MORPH : formes

Deux formes se superposent :

1. Forme pastorale : aider à discerner, éviter la consommation, protéger la liberté.
2. Forme cléricale : catégoriser, normer, surinvestir, contrôler, parler depuis le dehors.

## Q^BRANCH : branches contradictoires

Branche A : pureté, prudence, peur de la pente, mariage comme horizon normatif.

Branche B : Cantique, \`onah\`, Iggeret ha-Kodesh, Zohar, mystique nuptiale, Gaudium et spes, Deus caritas est, Amoris laetitia.

## Actualisation critique

L’article polémique n’attaque pas la tradition religieuse en bloc. Il oppose à une branche cléricale de contrôle une autre constellation interne : biblique, juive, mystique, conciliaire, conjugale, érotique, incarnée.

---

# V. Formules fortes à intégrer dans la page

## Formule 1

Le problème n’est pas que la religion parle du corps. Le problème est qu’elle parle trop souvent sur le corps sans écouter les corps.

## Formule 2

Un religieux peut parler d’amour. Il devient clérical lorsqu’il parle comme si l’amour des autres lui appartenait.

## Formule 3

Le couple n’est pas un monastère raté.

## Formule 4

Une tradition qui possède le Cantique des cantiques n’a pas le droit de réduire le baiser à une zone de risque moral.

## Formule 5

Là où certains discours religieux demandent jusqu’où le corps peut aller sans tomber, la tradition juive demande aussi comment l’époux répond au désir et à la joie de son épouse.

## Formule 6

Le paradoxe est violent : une théologie du corps qui voulait rendre au corps sa dignité peut être transformée en système de surveillance des corps.

## Formule 7

La foi chrétienne n’a pas besoin d’une police des baisers.

## Formule 8

Les délires religieux commencent quand une parole séparée prétend gouverner l’intime.

---

# VI. Sources et références pour la section académique

## Sources bibliques et juives

- Cantique des cantiques.
- Mishnah Ketubot 5:6, sur les fréquences du devoir conjugal : https://www.sefaria.org/Mishnah_Ketubot.5.6
- Explication de Mishnah Ketubot 5:6 : https://www.sefaria.org/English_Explanation_of_Mishnah_Ketubot.5.6
- TheTorah.com, « Onah: A Husband’s Conjugal Duties? » : https://www.thetorah.com/article/onah-a-husbands-conjugal-duties
- Jewish Women’s Archive, « Iggeret Ha-Kodesh » : https://jwa.org/encyclopedia/article/iggeret-ha-kodesh
- My Jewish Learning, « Judaism and Sexuality » : https://www.myjewishlearning.com/article/judaism-and-sexuality/
- Luke Devine, « Active/Passive, ‘Diminished’/‘Beautiful’, ‘Light’ from Above and Below: Rereading Shekhinah’s Sexual Desire in Zohar al Shir ha-Shirim » : https://journals.sagepub.com/doi/10.1177/0966735020906946
- David Biale, *Eros and the Jews: From Biblical Israel to Contemporary America*, University of California Press : https://www.ucpress.edu/book/9780520211346/eros-and-the-jews

## Sources catholiques officielles

- Vatican II, *Gaudium et spes* : https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651207_gaudium-et-spes_en.html
- Catéchisme de l’Église catholique, article sur l’amour des époux : https://www.vatican.va/content/catechism/en/part_three/section_two/chapter_two/article_6/iii_the_love_of_husband_and_wife.html
- Benoît XVI, *Deus caritas est* : https://www.vatican.va/content/benedict-xvi/en/encyclicals/documents/hf_ben-xvi_enc_20051225_deus-caritas-est.html
- François, *Amoris laetitia* : https://www.vatican.va/content/dam/francesco/pdf/apost_exhortations/documents/papa-francesco_esortazione-ap_20160319_amoris-laetitia_en.pdf

## Auteurs et pistes théologiques contemporaines

- Margaret Farley, *Just Love: A Framework for Christian Sexual Ethics*.
- James B. Nelson, *Embodiment: An Approach to Sexuality and Christian Theology*.
- Lisa Sowle Cahill, travaux sur mariage, sexualité, famille et éthique catholique.
- Tina Beattie, théologie catholique féministe du corps, de Marie, du genre et du désir.
- Sarah Coakley, travaux sur désir, ascèse et théologie.
- Marcella Althaus-Reid, théologie sexuelle, politique et queer, plus radicale.

---

# VII. Notes éditoriales de prudence

## 1. Ne pas attaquer indistinctement les religieux

Le titre « Les délires des religieux » est volontairement polémique. Il doit être accompagné d’un sous-titre qui précise la cible : **les dérives cléricales, discursives et morales**, non les personnes consacrées comme telles.

Sous-titre recommandé :

> Quand la parole cléricale prétend gouverner les corps, les couples et les consciences laïques.

## 2. Ne pas faire du judaïsme un fantasme inverse

Le judaïsme ne doit pas être présenté comme une tradition simplement libératrice ou égalitaire. Il contient aussi des cadres patriarcaux, normatifs et juridiques. Sa force, ici, est d’offrir une autre grammaire : sexualité conjugale comme devoir, joie, sainteté, attention au désir de l’épouse.

## 3. Ne pas idéaliser le christianisme mystique

La mystique chrétienne utilise fortement le langage du désir, mais elle peut aussi spiritualiser le corps concret. Elle est donc une ressource ambivalente : puissante contre le moralisme sec, mais pas toujours suffisante pour fonder une théologie positive de la sexualité conjugale.

## 4. Ne pas confondre critique et relativisme

Critiquer une parole cléricale de contrôle ne signifie pas dire que tout geste serait équivalent. Il reste des critères : consentement, réciprocité, non-domination, parole, respect du rythme, vérité du lien, capacité à ne pas utiliser l’autre.

## 5. Garder la distinction centrale

Le problème n’est pas l’exigence. Le problème est la confiscation de l’exigence par une parole séparée qui ne reconnaît pas sa propre limite.

---

# VIII. Proposition de bloc d’introduction pour la page web

À placer juste avant le complément :

> Ce complément prolonge l’analyse de la conférence en deux directions. D’abord, un article polémique assumé interroge les dérives de certaines paroles religieuses sur la vie affective, lorsque des clercs ou religieux prétendent régir les corps, les couples et les consciences laïques depuis une position séparée. Ensuite, un contre-dossier théologique montre que les traditions bibliques, juives, chrétiennes et catholiques contiennent aussi de puissantes ressources positives sur le désir, le corps, la sensualité, la sexualité conjugale et l’amour. La critique ne vise donc pas la foi ni la vie religieuse en tant que telles, mais l’appauvrissement clérical d’une tradition beaucoup plus vaste.

---

# IX. Proposition de conclusion finale

Le débat ne se joue pas entre religion et sexualité, ni entre foi et désir, ni entre Église et corps.

Il se joue entre deux manières de parler du corps.

Une première parole surveille, découpe, soupçonne, classe, moralise, avertit, qualifie depuis le dehors.

Une seconde parole écoute, situe, discerne, honore, accompagne, reconnaît la joie, nomme les blessures, protège sans confisquer.

La tradition religieuse contient les deux.

Elle contient la police des seuils, mais aussi le Cantique des cantiques.

Elle contient la méfiance envers la chair, mais aussi l’\`onah\`.

Elle contient l’ascèse, mais aussi l’Iggeret ha-Kodesh.

Elle contient des clercs qui surveillent les baisers, mais aussi des mystiques qui parlent de Dieu dans la langue du désir.

Elle contient des normes, mais aussi des textes où l’érotique devient langage de l’alliance.

La question n’est donc pas de savoir si la religion doit parler du corps. Elle doit le faire, si elle veut parler de l’humain. Mais elle doit parler autrement : depuis l’écoute, depuis la limite, depuis la reconnaissance des corps vécus, depuis la parole des couples, des femmes, des laïcs, des victimes, des consciences.

Une tradition qui possède tant de ressources sensuelles, nuptiales, mystiques et conjugales n’a pas à devenir une police des baisers.

Le vrai scandale n’est pas que des religieux parlent d’amour.

Le scandale est qu’ils oublient parfois que l’amour ne leur appartient pas.
`,$e=`---
title: "Complément III — Lecture trinitaire, féminin divin et morphogénétique du désir"
subtitle: "T^ × Q^ × MCPP^ × MNL^"
type: "article-complement"
status: "ready-for-codex"
placement: "Après les sections : I. Article polémique assumé ; II. Recherches contradictoires complètes"
video: "https://youtu.be/y6HvOEovgG8?is=nLnkonWHWFcLZes6"
---

# Complément III — Lecture trinitaire, féminin divin et morphogénétique du désir  
## T^ × Q^ × MCPP^ × MNL^

> **Emplacement conseillé dans la page :**  
> Ajouter cette section après :
> 1. **Article polémique assumé**  
> 2. **Recherches contradictoires complètes**  
>
> Cette troisième partie ne remplace pas la polémique ; elle la déplace vers une exploration théologique plus profonde : Trinité, relation, féminin divin, corps, désir, parole, lumière, nuit, matière et champ morphogénétique.

---

## 0. Fonction de ce complément

Cette section vise à ouvrir une lecture plus profonde de la critique des discours religieux sur l’amour, le baiser, la sensualité et la sexualité.

L’article polémique assumé nomme une dérive : certains discours religieux ou cléricaux prétendent gouverner les corps, les couples et les consciences laïques depuis une position séparée, célibataire, régulière ou institutionnelle.

Les recherches contradictoires montrent ensuite que cette dérive n’épuise pas les traditions religieuses : judaïsme, Cantique des cantiques, mystique juive, théologie nuptiale chrétienne, Vatican II, Benoît XVI, François et d’autres courants valorisent aussi l’amour, la sensualité, le désir, le corps et la sexualité conjugale.

Ce troisième complément propose alors une lecture **T^ × Q^ × MCPP^ × MNL^** : non pas seulement dénoncer une dérive morale, mais montrer que cette dérive révèle une réduction beaucoup plus profonde de la relation, de la Trinité, du féminin divin et du champ incarné du désir.

---

# I. Thèse générale

La dérive cléricale ne concerne pas seulement la morale sexuelle.

Elle révèle une déformation plus profonde : une manière de penser Dieu, l’Église, le corps et la relation selon un modèle vertical, masculinisé, univoque, disciplinaire et souvent désincarné.

Or une théologie trinitaire forte devrait empêcher cette réduction.

La Trinité n’est pas un monarque solitaire auquel on ajoute trois noms. Elle est relation, circulation, donation, altérité interne, co-présence, différence sans séparation, unité sans fusion.

Si Dieu est relation vivante, alors toute théologie qui écrase le corps, le désir, le féminin, la réciprocité ou la parole des laïcs trahit quelque chose du champ trinitaire lui-même.

La question devient donc :

> **Comment une Église qui confesse un Dieu relationnel a-t-elle pu produire des formes aussi unilatérales, cléricales et contrôlantes de la relation ?**

La polémique prend alors une autre profondeur.

Le problème n’est pas seulement qu’un religieux parle maladroitement du baiser ou de la sexualité. Le problème est que certains discours religieux fonctionnent comme si la relation devait être gouvernée depuis un centre extérieur, alors que la confession trinitaire devrait ouvrir à une intelligence de la circulation, de la réciprocité, de la parole partagée et de la co-présence.

---

# II. Lecture T^ : le problème de la capture

En lecture T^, le problème n’est pas seulement qu’un religieux donne un conseil discutable.

Le problème est la **capture d’un champ vivant**.

Le champ vivant concerné est celui de l’amour : rencontre, corps, désir, parole, consentement, promesse, hésitation, beauté, maturation, joie, risque, vulnérabilité.

La capture cléricale consiste à réduire ce champ à une grille :

- permis / interdit ;
- pur / impur ;
- sérieux / frivole ;
- mariage / mensonge ;
- don / pulsion ;
- vertu / chute ;
- prudence / danger ;
- chasteté / soupçon.

La relation est alors enfermée dans une logique binaire. Le religieux prétend stabiliser ce qui devrait rester vivant, respirable, situé, co-discerné.

T^ permet de tenir une césure minimale : ne pas laisser un discours religieux se prendre pour la totalité du réel affectif.

Le geste du baiser, le désir, l’amour naissant, la sensualité ou la sexualité conjugale ne peuvent pas être intégralement capturés par une parole cléricale extérieure.

## Formule T^

> **T^ désactive la prétention d’un discours religieux à posséder le sens total du corps d’autrui.**

Ce n’est pas une négation de toute parole spirituelle. C’est une clause de non-capture.

Une parole théologique peut éclairer, accompagner, interroger, ouvrir, avertir parfois. Mais elle s’annule comme parole juste dès qu’elle prétend totaliser le sens d’un geste vécu par d’autres.

Le religieux peut dire : “voici une tradition, voici une prudence, voici une sagesse possible.”

Il ne peut pas dire, sans violence symbolique : “je possède le sens de votre corps, de votre désir, de votre baiser, de votre relation.”

---

# III. Lecture Q^ : information vivante, branches et actualisations

En lecture Q^, un geste affectif n’est pas une donnée simple.

Un baiser, une caresse, une attirance, une conversation nocturne, une relation amoureuse sont des **actualisations locales d’un champ relationnel**.

Un même geste peut porter plusieurs branches.

## 1. Branche corporelle

Sensation, excitation, douceur, chaleur, souffle, proximité, peau, rythme, intensité.

Le corps n’est pas seulement un risque. Il est une information vivante.

## 2. Branche affective

Attachement, trouble, joie, manque, timidité, confiance, peur, désir d’être choisi, besoin de reconnaissance.

Le geste ne signifie pas seulement “plaisir”. Il peut porter une demande d’amour, une fragilité, une recherche de sécurité, une ouverture.

## 3. Branche symbolique

Reconnaissance, promesse, seuil, appartenance, passage, secret, mémoire.

Un baiser peut être léger, mais il peut aussi devenir symbole. Le problème n’est pas de lui imposer un sens unique, mais de comprendre quelles branches symboliques il actualise réellement pour les personnes concernées.

## 4. Branche sociale

Regard des autres, réputation, pression du groupe, codes de soirée, appartenance générationnelle, modèle culturel de la séduction.

Le geste n’est jamais purement individuel. Il est aussi pris dans un champ social.

## 5. Branche spirituelle

Alliance, vérité, respect, don, présence, liberté, non-usage de l’autre, parole devant Dieu.

Ici, la tradition religieuse peut avoir une parole. Mais elle n’est qu’une branche parmi d’autres, non la totalité du champ.

## 6. Branche biographique

Blessures, mémoire, histoires passées, expériences heureuses ou traumatiques, maturité affective, peur de l’abandon, rapport à son propre corps.

Le même geste n’a pas le même poids selon les histoires.

## 7. Branche éthique

Consentement, réciprocité, liberté, parole, limites, respect du rythme de l’autre, possibilité de dire non ou de changer d’avis.

Une lecture morale pauvre demande seulement : “est-ce permis ?”

Une lecture éthique riche demande : “est-ce libre, réciproque, situé, respirable, respectueux, habité ?”

## Formule Q^

> **Q^ lit le baiser non comme faute ou permission, mais comme actualisation locale d’un champ relationnel à branches multiples.**

Le délire religieux apparaît lorsque cette pluralité est écrasée.

Il ne lit plus les branches. Il force une seule actualisation : “ce geste veut dire ceci”. Ou pire : “ce geste conduit nécessairement à cela”.

Q^ permet au contraire de dire : un geste humain n’est jamais simplement un point moral. C’est une condensation de portances, de corps, de temporalités, de mémoires et de possibles.

---

# IV. MNL^ : Materia, Nox, Lux

MNL^ permet de lire le féminin divin, le corps et la relation selon trois régimes : **Materia**, **Nox**, **Lux**.

Ces trois régimes ne sont pas trois cases fixes. Ils forment une dynamique. Ils permettent de comprendre comment la relation se donne dans la chair, se creuse dans la nuit et apparaît dans la lumière.

---

## A. Materia — portance incarnée

Materia désigne la portance incarnée : corps, peau, souffle, rythme, ventre, présence, gestes, chaleur, terre, nourriture, fécondité.

Dans la dérive cléricale, Materia est suspectée.

Le corps devient risque.

La peau devient seuil dangereux.

La sensualité devient pente.

Le féminin devient tentation ou objet de vigilance.

Mais dans une théologie plus profonde, Materia n’est pas l’ennemie du divin.

Elle est le lieu où la relation prend corps.

Sans Materia, l’amour devient idée.

Sans corps, la charité devient abstraction.

Sans peau, la tendresse devient discours.

Sans souffle, la parole se dessèche.

Sans présence, la relation se transforme en norme.

Le féminin divin, ici, apparaît comme **portance matérielle du lien** : non pas femme-idole, non pas déesse substitutive, mais puissance symbolique d’incarnation, de réception active, de fécondité et de présence.

## Formule Materia

> **Materia rappelle que l’amour ne peut pas être sauvé contre le corps ; il doit être discerné dans le corps.**

Une théologie qui soupçonne constamment le corps finit par perdre la logique même de l’Incarnation.

---

## B. Nox — nuit féconde

Nox désigne la nuit : absence, attente, pudeur, retrait, secret, non-savoir, maturation, silence.

Dans la relation amoureuse, tout ne doit pas être exposé, expliqué, contrôlé, confessé, classé.

Il existe une nuit légitime de l’amour : ce qui mûrit, ce qui hésite, ce qui n’a pas encore de nom, ce qui cherche son rythme.

La dérive cléricale supporte mal cette nuit.

Elle veut éclairer trop vite.

Elle veut qualifier, nommer, décider : péché, vertu, prudence, danger, promesse, mensonge.

Mais une théologie trinitaire devrait respecter la Nox : l’amour n’est pas immédiatement transparent à lui-même. La relation contient une part d’inconnu non fautif.

Le féminin divin, ici, apparaît comme **nuit féconde**, non comme obscurité dangereuse : matrice, attente, profondeur, non-saturation.

## Formule Nox

> **Nox protège la relation contre la violence d’une lumière trop rapide.**

Tout n’a pas besoin d’être immédiatement nommé par une autorité extérieure.

Tout n’a pas besoin d’être transformé en cas moral.

La pudeur n’est pas seulement dissimulation ; elle est parfois condition de maturation.

---

## C. Lux — apparition non capturante

Lux désigne l’apparition, la parole, la vérité, la reconnaissance, la lumière du visage.

Dans l’amour, Lux n’est pas la surveillance.

Ce n’est pas le projecteur moral braqué sur les corps.

C’est la lumière qui permet de voir l’autre comme autre, de reconnaître sa dignité, d’ouvrir la parole, de sortir de l’usage.

La dérive cléricale transforme Lux en contrôle. Elle confond lumière et inspection.

Mais la vraie Lux relationnelle est révélation douce :

- “je te vois” ;
- “je t’écoute” ;
- “je ne te prends pas” ;
- “je ne t’enferme pas” ;
- “je te laisse apparaître”.

Le féminin divin, ici, peut être pensé comme **lumière de manifestation non capturante** : apparition du vivant sans possession.

## Formule Lux

> **Lux n’est pas le contrôle du visible ; elle est la possibilité donnée à l’autre d’apparaître sans être capturé.**

---

# V. MCPP^ : phono-photonique du désir et de la parole

MCPP^ permet de lire le champ relationnel comme interaction entre voix, lumière, matière et seuils.

La relation ne se réduit pas au geste.

Elle est un champ où circulent des voix, des regards, des signes, des silences, des intensités, des attracteurs symboliques et des seuils corporels.

---

## A. Phono — la voix

La relation commence par une voix.

Pas seulement un discours doctrinal, mais une parole adressée : appel, prénom, rire, confidence, tremblement, silence partagé.

Dans la dérive cléricale, la voix du religieux couvre souvent la voix des personnes concernées.

Il parle “sur” les couples.

Il parle “sur” les jeunes.

Il parle “sur” le désir.

Il parle “sur” le féminin.

Il parle “sur” le corps.

MCPP^ permet de rétablir une hiérarchie non hiérarchique des voix : la parole théologique n’a pas le droit d’écraser la parole vécue.

La voix du couple, la voix de la femme, la voix du corps, la voix de la victime, la voix du désir et la voix de la conscience doivent rester audibles.

## Formule Phono

> **Une théologie du corps qui n’écoute pas les corps devient un monologue sur les corps.**

---

## B. Photon — visibilité, beauté, regard

Le photonique désigne ce qui apparaît : le visage, la beauté, le regard, la peau, l’éclat du désir.

Le religieux clérical peut traiter cette visibilité comme danger : voir, désirer, être attiré, être troublé.

Mais dans une lecture MCPP^, la visibilité est aussi lieu de révélation.

Le corps visible n’est pas immédiatement tentation.

Il peut être manifestation de présence, de beauté, d’altérité.

Le problème n’est pas que le corps apparaisse.

Le problème est que le regard devienne capturant, consommateur ou dominateur.

## Formule Photon

> **Le regard n’est pas impur parce qu’il voit ; il devient impur lorsqu’il capture.**

Cette distinction est capitale.

Une théologie saine ne devrait pas produire une peur du visible, mais une éducation du regard.

---

## C. Materia — corps et seuil

MCPP^ relie aussi la parole et la lumière à la matière : corps réel, gestes, souffle, peau.

Le cléricalisme moral a souvent voulu gouverner les seuils du corps : où mettre les mains, jusqu’où aller, à quel moment, avec quelle intention.

Mais le seuil corporel ne peut pas être réduit à une carte de zones autorisées.

Il doit être discerné dans la relation vivante : parole, consentement, rythme, histoire, liberté, réciprocité.

Le problème n’est donc pas seulement “jusqu’où peut-on aller ?”

La vraie question est :

> **Qu’est-ce que ce geste fait à la relation, au corps, à la liberté, au rythme, à la vérité des deux personnes ?**

---

## D. Champs gravitationnels — les masses symboliques du désir

Dans MCPP^, certains motifs agissent comme attracteurs :

- le baiser ;
- la peau ;
- la voix aimée ;
- le regard ;
- la promesse ;
- la peur de la faute ;
- le mariage ;
- la pureté ;
- la honte ;
- le désir ;
- le féminin ;
- Dieu.

La dérive cléricale apparaît quand certains attracteurs deviennent trop lourds.

Par exemple :

Le mot **pureté** peut courber tout le champ relationnel jusqu’à rendre le corps suspect.

Le mot **mariage** peut courber une relation naissante jusqu’à l’écraser sous une finalité trop lourde.

Le mot **péché** peut courber le désir jusqu’à l’enfermer dans la culpabilité.

Le mot **prudence** peut courber la liberté jusqu’à devenir peur.

Le mot **chasteté** peut courber l’amour jusqu’à devenir surveillance.

MCPP^ permet d’écrire :

> **Il ne suffit pas d’analyser le geste ; il faut analyser les masses symboliques qui courbent le champ du geste.**

---

# VI. Trinité : relation sans capture

Une lecture trinitaire sérieuse ouvre une critique radicale du cléricalisme.

La Trinité n’est pas une hiérarchie solitaire.

Elle est co-relation : Père, Fils, Esprit ; origine, expression, souffle ; donation, réception, circulation ; distinction sans séparation ; unité sans absorption.

Si la structure ultime du divin est relationnelle, alors une Église qui concentre la parole dans un seul pôle trahit quelque chose de sa propre confession.

La Trinité interdit théologiquement :

- le monopole d’une parole unique ;
- la réduction de l’autre à l’obéissance ;
- la suppression de la réciprocité ;
- la confusion entre unité et uniformité ;
- la substitution de la loi au lien ;
- la capture du vivant par une fonction sacrée ;
- la réduction de la relation à un ordre descendant.

Une théologie trinitaire devrait donc produire une Église plus relationnelle, plus synodale, plus attentive aux voix plurielles, plus consciente des circulations de parole, de désir, de blessure et de grâce.

## Formule trinitaire forte

> **Une Église cléricale confesse parfois la Trinité avec les lèvres, mais fonctionne comme un monothéisme institutionnel dur : un centre, une parole, une autorité, une descente verticale du sens.**

Ce point est décisif.

Le cléricalisme n’est pas seulement une dérive sociologique.

Il est une déformation pratique de la théologie de Dieu.

Si Dieu est relation, alors l’Église ne peut pas fonctionner comme une machine de surplomb.

---

# VII. Féminin divin : non pas ajout décoratif, mais correctif structurel

Le féminin divin ne doit pas être traité comme un supplément poétique.

Il joue ici comme révélateur d’un déséquilibre.

Dans les traditions bibliques, juives, chrétiennes et para-bibliques, plusieurs figures féminines portent des dimensions que le cléricalisme a souvent refoulées.

---

## A. Hokhmah / Sophia — sagesse créatrice

La Sagesse, dans la tradition biblique et sapientielle, n’est pas un simple attribut abstrait.

Elle est présence, parole, intelligence créatrice, médiation, jeu auprès de Dieu, architecture vivante du monde.

Sophia permet de penser une intelligence qui n’est pas domination, mais médiation et relation.

Elle ouvre une théologie où le savoir ne surplombe pas le vivant, mais accompagne sa formation.

## B. Shekhinah — présence habitante

La Shekhinah, dans la tradition juive, désigne la présence divine habitante : proximité, demeure, gloire, exil, retour.

Elle n’est pas un Dieu extérieur qui surveille.

Elle est présence qui habite, accompagne, demeure avec.

Dans une lecture critique du cléricalisme, la Shekhinah devient une figure majeure : elle oppose à l’autorité descendante une présence immanente, proche, fidèle, habitante.

## C. Ruah — souffle

Ruah désigne le souffle, l’esprit, le vent, la respiration, le mouvement.

Le souffle ne s’administre pas.

Il circule.

Il anime.

Il traverse.

Il déplace.

Une théologie du souffle ne devrait pas produire des systèmes de contrôle fermés. Elle devrait laisser respirer les consciences.

## D. Marie — corps consentant et figure souvent domestiquée

Marie est une figure centrale du christianisme.

Elle peut être lue comme corps consentant, écoute, incarnation, accueil de la Parole, maternité, présence au pied de la croix.

Mais elle a aussi souvent été domestiquée par l’institution : modèle de silence, d’obéissance, de pureté, de maternité contrôlée.

Une lecture vivante de Marie devrait rouvrir sa puissance : non pas femme effacée, mais figure de consentement actif, de corps théologique, de parole qui accepte sans être possédée.

## E. L’Épouse du Cantique — femme désirante et parlante

L’Épouse du Cantique est l’un des plus puissants contre-modèles au féminin domestiqué.

Elle parle.

Elle cherche.

Elle désire.

Elle nomme le corps de l’aimé.

Elle circule dans la ville.

Elle appelle.

Elle manque.

Elle se réjouit.

Elle ne se réduit pas à une figure passive.

Elle donne au désir féminin une voix biblique.

## F. Hawwah / Ève — vivante, source, relationnelle

Ève a souvent été lue à travers la faute, la séduction, la chute, la tentation.

Mais son nom même l’oriente vers la vie.

Hawwah est la vivante, la mère des vivants.

Une lecture morphogénétique peut déplacer le regard : avant d’être enfermée dans la culpabilité, Ève est figure de relation, de naissance, d’ouverture de l’humain à l’autre, de seuil entre solitude et rencontre.

---

# VIII. Le féminin divin en lecture T^ × Q^ × MCPP^ × MNL^

Le féminin divin, dans cette exploration, n’est pas simplement “une déesse cachée”.

Il ne s’agit pas de substituer une divinité féminine à un Dieu masculin.

Il s’agit de repérer un ensemble de portances que le cléricalisme masculin a souvent refoulées :

- corps ;
- présence ;
- sagesse ;
- souffle ;
- désir ;
- médiation ;
- habitation ;
- fécondité ;
- parole amoureuse ;
- nuit féconde ;
- lumière non capturante ;
- portance sans domination.

La question critique devient :

> **Qu’a dû refouler une Église cléricale masculine pour transformer le désir féminin, la sensualité et la parole des corps en menace ?**

Cette question ne vise pas à opposer mécaniquement masculin et féminin.

Elle vise à montrer que le cléricalisme a souvent masculinisé la parole, verticalisé l’autorité, neutralisé le désir, spiritualisé le corps et domestiqué le féminin.

Le féminin divin devient alors un correctif structurel : il rouvre la demeure, la présence, la fécondité, la relation, la voix, la peau, la sagesse et la nuit.

---

# IX. Le nœud : Trinité sans féminin, clergé sans corps, morale sans relation

On peut formuler le diagnostic ainsi :

Une Trinité pensée trop abstraitement devient doctrine froide.

Un clergé séparé du monde conjugal devient expert sans incarnation.

Une morale sexuelle coupée de la parole des couples devient surveillance.

Une Église privée du féminin divin devient architecture de contrôle.

Une théologie sans Materia devient idéalisme.

Une théologie sans Nox devient inspection.

Une théologie sans Lux douce devient projecteur disciplinaire.

Une théologie sans Phono pluriel devient monologue clérical.

Une théologie sans Q^ réduit les branches du vivant à une seule ligne normative.

Une théologie sans T^ laisse la parole religieuse se prendre pour totalité.

Le résultat est un discours religieux qui peut être cohérent en apparence, mais pauvre en champ.

Il dispose de catégories.

Il dispose de normes.

Il dispose d’exemples.

Il dispose d’un vocabulaire moral.

Mais il perd la relation vivante.

Il perd le corps comme lieu.

Il perd la parole des personnes concernées.

Il perd la nuit de la maturation.

Il perd la lumière douce de la reconnaissance.

Il perd la pluralité des branches.

Il perd la co-présence.

Il perd la Trinité comme structure vive.

---

# X. Application directe à l’article polémique

L’article **“Les délires des religieux”** peut donc être enrichi par cette lecture :

Le délire n’est pas seulement moral.

Il est trinitairement déficient.

Il surgit lorsque la relation est pensée depuis un centre au lieu d’être pensée comme circulation.

Il surgit lorsque le corps est gouverné depuis une parole extérieure au lieu d’être écouté comme lieu de présence.

Il surgit lorsque le féminin est neutralisé, domestiqué ou diabolisé.

Il surgit lorsque l’Église oublie que son Dieu n’est pas solitude souveraine mais relation vivante.

La critique devient alors beaucoup plus forte : certains discours religieux sur le baiser, la sexualité ou la pureté ne sont pas seulement maladroits ; ils sont structurellement pauvres.

Ils réduisent Dieu, l’amour et l’humain à une administration des seuils.

## Formule polémique intégrée

> **Le délire clérical commence quand une parole séparée prétend administrer le vivant, quand un religieux sans vie conjugale parle comme propriétaire du sens des corps, et quand une Église trinitaire fonctionne comme une machine verticale de contrôle.**

---

# XI. Développement possible à insérer dans l’article

## Les religieux et l’oubli de la Trinité vivante

Le problème n’est pas que des religieux parlent de l’amour. Le problème est qu’ils en parlent parfois depuis une théologie appauvrie de la relation.

Une Église qui confesse la Trinité devrait être incapable de réduire la vie affective à une police des gestes. Si Dieu est relation, circulation, souffle, don et altérité interne, alors la vie amoureuse ne peut pas être pensée seulement depuis l’interdit, le seuil, la prudence, la faute ou la peur.

La Trinité devrait ouvrir une grammaire du lien : parole, écoute, réciprocité, consentement, différence, co-présence, circulation. Or certains discours religieux fonctionnent exactement à l’inverse. Ils descendent d’en haut. Ils nomment avant d’écouter. Ils classent avant de comprendre. Ils soupçonnent avant de discerner.

Ils parlent du baiser comme d’un risque, du désir comme d’une pente, du corps comme d’une zone à surveiller, du mariage comme d’un horizon écrasant, de la pureté comme d’une architecture de contrôle. Ils croient défendre l’amour, mais ils l’enferment dans une logique de gestion morale.

C’est là que la critique doit être radicale : ces discours ne sont pas seulement maladroits ou excessifs. Ils trahissent une pauvreté trinitaire. Ils confessent un Dieu relationnel, mais fonctionnent comme si le sens descendait d’un centre unique vers des consciences mineures.

Une théologie plus profonde devrait pourtant tenir ensemble le corps, la nuit et la lumière. Materia : le corps, la peau, le souffle, la présence. Nox : l’attente, le secret, la pudeur, la maturation. Lux : la reconnaissance, la parole, l’apparition non capturante de l’autre.

L’amour ne se laisse pas réduire à un tableau des gestes permis. Il est un champ. Un baiser n’est pas seulement un risque moral ; il est une actualisation locale d’un champ relationnel : sensation, affection, symbole, mémoire, pression sociale, promesse possible, consentement, rythme, histoire.

La tâche spirituelle n’est donc pas de posséder immédiatement son sens. Elle est d’aider à le discerner sans le capturer.

C’est précisément ce que le cléricalisme ne sait pas faire. Il veut protéger en contrôlant. Il veut éclairer en inspectant. Il veut purifier en suspectant. Il veut accompagner en administrant.

Face à cela, le féminin divin ouvre une autre mémoire théologique. Sophia rappelle que la sagesse n’est pas domination mais médiation. La Shekhinah rappelle que Dieu habite avant de juger. Ruah rappelle que l’Esprit est souffle, non clôture. L’Épouse du Cantique rappelle que le désir féminin a une voix biblique. Marie rappelle que le corps peut être lieu de parole et de consentement, non simple objet de surveillance.

Le délire des religieux n’est donc pas seulement de trop parler du sexe. Il est de parler du sexe en oubliant le corps, de parler du corps en oubliant la relation, de parler de la relation en oubliant la Trinité, de parler de Dieu en oubliant le féminin vivant de la tradition.

---

# XII. Conclusion théologique

Une théologie vraiment trinitaire ne devrait pas produire une police des baisers.

Elle devrait apprendre à penser la relation comme co-présence, circulation, parole, souffle, corps, nuit, lumière et fécondité.

Là où le cléricalisme moral voit des seuils à surveiller, une théologie vivante devrait voir des champs à discerner.

Là où le religieux inquiet découpe les gestes en zones de risque, le Cantique des cantiques, la Shekhinah, Sophia, Ruah, Marie, l’Épouse et la Trinité ouvrent un autre espace : celui d’un amour incarné, parlant, désirant, libre, réciproque et non capturable.

Le problème n’est donc pas que la religion parle d’amour.

Le problème est qu’elle oublie parfois que Dieu lui-même, s’il est Trinité, n’est pas d’abord surveillance du désir, mais relation vivante.

---

# XIII. Formules courtes réutilisables

Ces formules peuvent être utilisées comme encadrés, citations internes, intertitres ou blocs visuels dans la page.

> **T^ désactive la prétention d’un discours religieux à posséder le sens total du corps d’autrui.**

> **Q^ lit le baiser non comme faute ou permission, mais comme actualisation locale d’un champ relationnel à branches multiples.**

> **Materia rappelle que l’amour ne peut pas être sauvé contre le corps ; il doit être discerné dans le corps.**

> **Nox protège la relation contre la violence d’une lumière trop rapide.**

> **Lux n’est pas le contrôle du visible ; elle est la possibilité donnée à l’autre d’apparaître sans être capturé.**

> **Une théologie du corps qui n’écoute pas les corps devient un monologue sur les corps.**

> **Le regard n’est pas impur parce qu’il voit ; il devient impur lorsqu’il capture.**

> **Il ne suffit pas d’analyser le geste ; il faut analyser les masses symboliques qui courbent le champ du geste.**

> **Une Église cléricale confesse parfois la Trinité avec les lèvres, mais fonctionne comme un monothéisme institutionnel dur.**

> **Le délire clérical commence quand une parole séparée prétend administrer le vivant.**

> **Une théologie vraiment trinitaire ne devrait pas produire une police des baisers.**

---

# XIV. Consignes Codex pour intégration

## 1. Placement

Insérer ce complément après les deux sections déjà prévues :

1. **Article polémique assumé**
2. **Recherches contradictoires complètes**
3. **Lecture trinitaire, féminin divin et morphogénétique du désir — T^ × Q^ × MCPP^ × MNL^**

## 2. Mise en page recommandée

Créer une section visuellement distincte, plus contemplative et plus théologique que les deux premières.

Style recommandé :

- fond sombre ou légèrement différencié ;
- titre large ;
- sous-titre visible : \`T^ × Q^ × MCPP^ × MNL^\` ;
- blocs de citations internes en cartes ;
- navigation interne par ancres ;
- alternance de paragraphes analytiques et d’encadrés ;
- éviter les colonnes trop étroites sur mobile ;
- préserver une lisibilité forte.

## 3. Ancres HTML suggérées

\`\`\`html
<section id="lecture-trinitaire-feminin-divin">
  ...
</section>
\`\`\`

Sous-ancres :

\`\`\`html
#these-generale
#lecture-t
#lecture-q
#mnl
#mcpp
#trinite
#feminin-divin
#synthese-theologique
#formules-reutilisables
\`\`\`

## 4. Bloc d’introduction court pour la page

Utiliser ce texte comme amorce visible :

> Après la polémique et les recherches contradictoires, cette troisième partie propose une exploration théologique plus profonde. La question n’est plus seulement de savoir si tel discours religieux est excessif, mais de comprendre ce qu’il révèle : une réduction de la relation, du corps, du féminin et même de la Trinité. En lecture T^ × Q^ × MCPP^ × MNL^, le baiser, le désir et la sensualité ne sont plus des objets à administrer, mais des champs à discerner.

## 5. Bloc de conclusion court pour la page

Utiliser ce texte comme conclusion finale :

> La critique des délires religieux ne vise pas la foi, ni la vie religieuse en elle-même. Elle vise la capture cléricale du vivant. Une tradition qui possède le Cantique des cantiques, la Shekhinah, Sophia, Ruah, Marie, l’Épouse et la Trinité ne devrait pas réduire l’amour à une police des seuils. Elle devrait rouvrir une théologie de la relation incarnée : corps, voix, souffle, nuit, lumière, désir, consentement et co-présence.

---

# XV. Note finale

Ce complément doit rester clairement situé : il ne s’agit pas d’un texte académique neutre, ni d’un traité dogmatique classique.

Il s’agit d’une **exploration critique et morphogénétique**, articulant polémique, théologie, herméneutique, féminin divin et lecture des champs relationnels.

Il doit donc garder une tension :

- assez polémique pour ne pas neutraliser la critique ;
- assez théologique pour ne pas devenir simple réaction ;
- assez poétique pour porter le féminin divin ;
- assez structuré pour rester lisible ;
- assez non capturant pour ne pas remplacer un cléricalisme par un autre système fermé.

---
`,et=`---
title: "Encart spécial — Contre-folie"
subtitle: "Contre la mise à mort du vivant par le nom, la clôture et l’exclusion"
status: "Complément Codex — version augmentée v2"
placement: "À insérer après les compléments sur le féminin divin, avant la conclusion générale de la page"
intention: "Encart critique, biblique, théologique, philosophique et morphogénétique"
---

# Encart spécial — Contre-folie

## Contre la mise à mort du vivant par le nom, la clôture et l’exclusion

> **Version courte visible directement sur la page**  
> Toute tentative de fermer la vie — la nommer sans reste, l’exclure, la condamner, la fixer, la classer définitivement — commence déjà à la mettre à mort.  
> La contre-folie ne combat pas le nom. Elle combat le **nom devenu clôture**.  
> Elle ne combat pas la loi. Elle combat la **loi devenue pétrification**.  
> Elle ne combat pas la doctrine. Elle combat la **doctrine devenue cage**.  
> Le Nom de Dieu lui-même, dans la Bible, se donne en échappant : il appelle sans se laisser posséder.  
> Une parole religieuse devient folle lorsqu’elle transforme le nom, la loi, la pureté ou la doctrine en instruments de capture du vivant.  
> La vie demande des noms, mais des noms ouverts.  
> Elle demande des limites, mais des limites qui protègent sans enfermer.  
> Elle demande du discernement, mais jamais une administration totale des corps, des femmes, du désir, des couples et des consciences.

---

## Note d’intégration pour Codex

Ce bloc peut être intégré sous forme d’encart repliable dans la page principale. Recommandation de structure HTML :

\`\`\`html
<section class="counter-madness-card">
  <h2>Contre-folie</h2>
  <blockquote>...</blockquote>
  <details>
    <summary>Lire l’analyse complète</summary>
    <!-- développement long -->
  </details>
  <details>
    <summary>Références et liens</summary>
    <!-- bibliographie classée -->
  </details>
</section>
\`\`\`

Style suggéré : fond sombre, bordure fine, typographie sobre, exergue courte en haut, développement long en accordéon, bibliographie en accordéon séparé.

---

# Développement long

<details open>
<summary><strong>Lire l’analyse complète</strong></summary>

## 1. La contre-folie ne refuse pas le nom : elle refuse le nom-cage

Il ne s’agit pas de dire qu’il ne faudrait plus nommer, plus discerner, plus distinguer, plus qualifier. Une parole humaine sans noms devient indistincte. Une tradition religieuse sans langage devient muette. Une loi sans forme ne protège plus. Une doctrine sans contenu ne transmet plus rien.

Mais le nom devient violent lorsqu’il prétend **épuiser** ce qu’il nomme.

Il y a une différence radicale entre :

- nommer pour appeler ;
- nommer pour reconnaître ;
- nommer pour protéger ;
- nommer pour discerner ;

et :

- nommer pour capturer ;
- nommer pour exclure ;
- nommer pour condamner ;
- nommer pour classer définitivement ;
- nommer pour parler à la place du vivant.

La contre-folie ne combat donc pas le nom. Elle combat le **nom sans reste**, le nom qui ferme la respiration, le nom qui remplace la personne par une catégorie, le nom qui fait du corps un dossier, de la femme une fonction, du désir une faute, du couple un objet pastoral, de Dieu une propriété doctrinale.

Le nom juste ouvre une relation.

Le nom faux ferme une vie.

## 2. YHWH : un Nom qui se donne en échappant

La Bible elle-même sait que le Nom de Dieu est un lieu dangereux.

Dans Exode 3, Moïse demande à Dieu son nom. La réponse n’est pas un nom simple, disponible, manipulable. Elle passe par l’énigme : **Ehyeh asher ehyeh**, souvent rendu par « Je suis qui je suis », « Je serai qui je serai », ou « Je suis / serai ce que je suis / serai ».

Ce Nom donne assez pour appeler.

Il ne donne pas assez pour posséder.

Il ouvre la relation sans livrer Dieu comme objet disponible. Le Nom n’est pas une prise. Il est seuil, appel, promesse, échappée.

C’est pourquoi l’interdit de prendre le Nom de YHWH « en vain » est si profond. Il ne s’agit pas seulement d’éviter un blasphème verbal. Il s’agit de ne pas transformer le Nom en instrument : instrument de mensonge, d’autorité abusive, de domination, de sacralisation de sa propre parole.

Dans les traditions juives, la retenue autour du Tétragramme, l’usage de **Adonaï** ou **HaShem**, gardent cette mémoire : le Nom n’est pas une chose que l’on tient. Il est ce devant quoi la parole apprend à ne pas prendre.

La contre-folie commence ici : **ne jamais laisser le Nom de Dieu devenir une arme contre la vie.**

## 3. Nommer Dieu, centraliser Dieu, exclure ce qui déborde

Les travaux de Thomas Römer sur l’histoire de YHWH permettent de complexifier cette question. YHWH n’apparaît pas simplement comme « Dieu » abstrait, immobile, hors histoire. Son nom, son culte, son statut et sa relation aux autres figures divines se transforment à travers des processus historiques, politiques, cultuels et scripturaires.

Le monothéisme biblique, dans cette perspective, n’est pas seulement une évidence tombée du ciel : il se constitue aussi par centralisation, différenciation, effacement, réécriture et exclusion de certaines figures ou pratiques. La question d’Ashérah, de sa disparition progressive ou de sa disqualification dans certains cadres, appartient à cette zone sensible.

Cela ne signifie pas que le monothéisme serait faux ou uniquement violent. Mais cela oblige à garder la mémoire de son risque interne : l’unification du Nom peut devenir effacement du vivant si elle se transforme en mécanisme de purification totale.

Formule critique :

> Si le Nom unique devient le nom d’un pouvoir qui ne tolère plus aucune altérité, alors le monothéisme se déforme en dispositif de fermeture.

La contre-folie ne rejette pas le Dieu unique. Elle refuse que l’unicité divine soit transformée en machine d’uniformisation, de réduction ou de mise au silence.

## 4. La Bible contre les identités figées

Le texte biblique ne cesse de faire trembler les noms fixes.

Abram devient Abraham.

Saraï devient Sarah.

Jacob devient Israël après une lutte nocturne. Dans cette scène, Jacob reçoit un nom nouveau, mais l’adversaire nocturne refuse de livrer son propre nom. Il bénit sans se rendre possédable.

Le vivant biblique est nommé, mais aussi renommé, déplacé, appelé, traversé, ouvert.

Le nom n’est juste que s’il reste passage.

Il devient violent lorsqu’il devient prison.

Dire « pécheur », « impur », « déviant », « hérétique », « femme tentatrice », « corps dangereux », « désir désordonné », « laïc immature », « couple suspect », ce n’est jamais neutre. Ces mots peuvent aider à discerner dans certains contextes précis ; mais dès qu’ils deviennent étiquettes totales, ils ne décrivent plus. Ils enferment.

Et lorsqu’ils enferment, ils tuent.

## 5. Jésus : la vie avant la clôture religieuse

Dans les Évangiles, Jésus traverse sans cesse les frontières religieuses de pureté, de statut, d’appartenance et d’exclusion.

Il touche les malades.

Il parle avec la Samaritaine.

Il laisse une femme pécheresse l’approcher.

Il mange avec les publicains.

Il refuse que le sabbat devienne plus important que l’humain.

Il déplace le centre : la loi n’est pas abolie, mais elle cesse d’être une machine qui écrase la vie.

**Marc 2,27** est une formule décisive : le sabbat est fait pour l’être humain, et non l’être humain pour le sabbat.

Cette phrase peut devenir l’une des clés de tout l’encart :

> La loi est pour la vie. Lorsque la vie est sacrifiée à la loi, la loi a changé de régime.

**Jean 10,10** ajoute une autre ligne forte : la venue du Christ est liée à la vie en abondance. Une parole religieuse qui diminue, assèche, écrase, humilie ou pétrifie la vie doit donc être mesurée à cette contradiction.

Note critique : la scène dite de la femme adultère en Jean 8,1-11 est une tradition reçue dans le christianisme, mais son appartenance au texte johannique primitif est discutée par la critique textuelle. Elle peut être mobilisée comme tradition évangélique forte, avec cette précaution.

## 6. Foucault : la folie de l’ordre, de l’aveu et de la normalisation

Foucault est utile non comme autorité finale sur le religieux, mais comme cartographe des opérations de classement, d’aveu, de discipline et de gouvernement des conduites.

Dans *Histoire de la folie*, il montre comment une société ne se contente pas de constater la folie : elle construit aussi un dehors, un espace où déposer ce qu’elle ne veut pas reconnaître d’elle-même.

Dans *Surveiller et punir*, il analyse la logique disciplinaire : surveiller, classer, corriger, normaliser, produire des corps lisibles.

Dans ses cours sur le pouvoir pastoral, il montre que le christianisme a développé une forme particulière de gouvernement des âmes : direction, examen, confession, obéissance, transparence de soi devant une autorité.

Ce schéma permet de relire certaines morales religieuses du corps :

- faire avouer ;
- faire nommer ;
- faire classer ;
- faire intérioriser la norme ;
- faire dépendre la conscience de l’autorité ;
- produire le sujet comme coupable, pur, impur, conforme ou déviant.

La folie religieuse n’est donc pas seulement l’excès mystique ou le désordre. Elle peut être l’excès d’ordre.

Elle peut prendre la forme d’une volonté de rendre tout lisible, tout confessable, tout administrable.

## 7. Théologie apophatique : Dieu excède tout nom

La grande tradition apophatique chrétienne savait déjà ce que les morales de contrôle oublient : Dieu n’est jamais aussi trahi que lorsqu’on prétend le posséder clairement.

Pseudo-Denys l’Aréopagite articule les noms divins et la théologie mystique : Dieu reçoit des noms, mais excède tout nom. La parole affirmative doit être traversée par une parole négative. On peut dire, mais ce que l’on dit ne contient pas Dieu.

Grégoire de Nysse lit la montée de Moïse comme entrée dans la nuée. Plus Moïse approche, plus il entre dans l’inconnu. La proximité de Dieu ne supprime pas l’obscurité ; elle l’approfondit.

Maître Eckhart radicalise la déprise des images de Dieu. La parole sur Dieu doit être purifiée de ses propres idoles.

Nicolas de Cues parle de **docte ignorance** : savoir que Dieu excède le savoir.

Formule centrale :

> Une doctrine religieuse devient folle lorsqu’elle oublie que Dieu excède la doctrine même qui parle de lui.

## 8. Judaïsme : retenue du Nom, Maïmonide, Scholem, Levinas

La tradition juive garde une prudence particulière autour du Nom.

Le Nom est écrit, médité, entouré, mais non manipulé comme une chose. L’usage de **HaShem** — « le Nom » — maintient une distance. Cette distance n’est pas absence : elle est protection contre l’appropriation.

Maïmonide, dans le *Guide des égarés*, développe une théologie négative : on ne peut pas attribuer à Dieu des qualités positives simples comme à un objet. Dire Dieu, c’est déjà risquer de le réduire.

Gershom Scholem, dans l’étude de la mystique juive, montre que le Nom n’est pas une simple étiquette : il devient puissance de langage, structure symbolique, mystère, mais jamais propriété plate.

Levinas ajoute une dimension éthique décisive : le visage d’autrui interrompt ma prise. L’autre n’est pas un objet devant moi. Il me commande avant que je le possède.

Application directe :

> Si le Nom de Dieu échappe à la capture, le corps d’autrui, la conscience d’autrui, le désir d’autrui et la douleur d’autrui doivent aussi échapper à toute capture religieuse.

## 9. Buber : du Je-Tu au Je-Cela

Martin Buber est une référence essentielle pour cet encart. Sa distinction entre **Je-Tu** et **Je-Cela** permet de comprendre la capture comme transformation de la relation en objet.

Dans le **Je-Tu**, l’autre n’est pas utilisé, classé, possédé. Il est rencontré.

Dans le **Je-Cela**, l’autre devient objet d’expérience, de savoir, d’administration ou d’usage.

La dérive cléricale du corps fonctionne souvent comme passage du Je-Tu au Je-Cela : le couple devient cas moral, la femme devient fonction, le désir devient symptôme, le jeune devient sujet à encadrer, la victime devient problème institutionnel.

Formule forte :

> La capture commence lorsque le Tu devient Cela.

Une Église relationnelle devrait maintenir les personnes dans le registre du Tu. Une Église cléricale tend à les convertir en dossiers, catégories, risques ou objets pastoraux.

## 10. Ricœur : le symbole ouvre, il ne ferme pas

Paul Ricœur permet de penser le symbole comme ce qui donne à penser, non comme ce qui ferme le sens.

Dans une herméneutique vivante, un texte, un symbole, une faute, un récit, un geste ou une tradition ne sont pas des blocs immédiats. Ils demandent interprétation, conflit des interprétations, reprise narrative, médiation.

La fermeture religieuse apparaît quand l’interprétation se bloque : le symbole ne donne plus à penser ; il devient consigne. La doctrine ne médie plus ; elle tranche sans reste. Le récit ne travaille plus ; il impose.

Formule :

> Là où le symbole vivant ouvre plusieurs couches de sens, la capture réduit le sens à une seule étiquette.

Ricœur est donc précieux pour maintenir une éthique de l’interprétation : ni relativisme mou, ni clôture violente.

## 11. Pureté, danger, abjection : Douglas et Kristeva

Mary Douglas, dans *Purity and Danger*, montre que la pureté et l’impureté ne relèvent pas seulement d’une morale individuelle. Elles structurent des systèmes symboliques de classification. L’impur est souvent ce qui dérange les frontières, ce qui ne rentre pas dans les cases, ce qui brouille les catégories.

Dans cette perspective, un corps devient « impur » non seulement parce qu’il serait mauvais, mais parce qu’il met en crise un ordre de classement.

Julia Kristeva, avec la notion d’abjection, permet de comprendre une autre couche : certains éléments du vivant — sang, sexualité, maternité, fluides, corps féminin, désir — troublent les frontières du sujet et du système. L’abject n’est pas seulement ce qui est sale ; c’est ce qui rappelle que la vie déborde les limites propres.

Application :

> La peur religieuse du désir féminin, du corps sexué ou du sang peut être lue comme peur de ce qui déborde l’ordre symbolique.

La contre-folie refuse de transformer ce débordement en condamnation.

## 12. Girard : bouc émissaire et exclusions sacrées

René Girard permet d’interroger les exclusions qui produisent de l’unité.

Une communauté peut se pacifier en désignant un être, un groupe, un corps ou une figure comme porteur du désordre. La victime devient ce qui permet au groupe de se croire purifié.

Il faut manier Girard avec précision : toutes les exclusions religieuses ne sont pas automatiquement sacrificielles au sens strict. Mais certaines peuvent fonctionner comme des mécanismes sacrificiels : faire porter à un corps, une femme, une victime, un désir, un groupe jugé impur, la tension que le système refuse de reconnaître en lui-même.

Formule :

> Quand une institution se purifie en désignant des corps impurs, elle peut fonctionner comme une machine sacrificielle.

## 13. Canguilhem : le vivant n’est pas une norme fixe

Georges Canguilhem aide à critiquer la normalisation du vivant.

Dans *Le Normal et le pathologique*, il montre que la vie n’est pas simple conformité à une norme extérieure. Le vivant est aussi capacité de produire des normes, de varier, de s’adapter, de créer de nouvelles relations au milieu.

Cela permet de déplacer la question religieuse :

- la vie n’est pas pure répétition d’un modèle ;
- la santé n’est pas simple conformité ;
- le vivant existe par variation, reprises, seuils, recompositions.

Formule :

> Fixer le vivant dans une norme unique, c’est méconnaître que le vivant existe par variation.

## 14. Illich : la corruption du meilleur

Ivan Illich est précieux pour comprendre comment le meilleur peut devenir le pire lorsqu’il s’institutionnalise sans reste.

Le christianisme annonce la liberté, le soin, la charité, la proximité, le visage du prochain. Mais ces réalités peuvent se transformer en dispositifs : administration du bien, gestion de la charité, bureaucratie pastorale, contrôle des consciences.

Formule :

> Le pire ne vient pas toujours de l’ennemi extérieur ; il vient du meilleur lorsqu’il se transforme en système de gestion.

Dans l’encart, Illich sert à dire : la parole religieuse devient dangereuse non lorsqu’elle manque d’idéal, mais lorsqu’elle transforme l’idéal en appareil.

## 15. Simone Weil : attention contre force

Simone Weil oppose profondément attention et force.

La force transforme l’humain en chose. L’attention, au contraire, laisse apparaître. Elle ne saisit pas immédiatement. Elle attend, écoute, reçoit.

Appliqué à la religion : une parole qui classe trop vite exerce une forme de force. Une parole qui écoute vraiment devient attention.

Formule :

> La vraie attention laisse apparaître ; la force réduit en chose.

La contre-folie est donc aussi une éthique de l’attention : ne pas faire du vivant une chose religieuse.

## 16. Arendt : natalité, pluralité, recommencement

Hannah Arendt apporte deux notions décisives : **pluralité** et **natalité**.

La pluralité signifie que le monde humain existe par la coexistence de personnes irréductibles les unes aux autres. La natalité signifie que chaque naissance introduit du nouveau, un commencement imprévisible.

La fermeture religieuse totale manifeste une peur de la pluralité et de la natalité. Elle veut un monde entièrement lisible, administrable, conforme.

Formule :

> Toute fermeture totale du vivant commence par la haine de la pluralité.

## 17. Derrida : le nom n’épuise jamais la présence

Derrida, notamment dans ses travaux autour du nom, de la théologie négative et de la différance, aide à penser l’écart interne du langage.

Le nom ne coïncide jamais totalement avec ce qu’il nomme. Il ouvre, il diffère, il marque une absence autant qu’une présence.

Cette pensée peut paraître abstraite, mais elle sert une intuition simple : aucun nom ne doit prétendre totaliser ce qu’il désigne.

Formule :

> Le nom n’épuise pas la présence ; il marque aussi l’écart par lequel ce qu’il nomme échappe.

## 18. Agamben : exclusion et vie exposée

Giorgio Agamben peut être mobilisé par analogie critique, sans identifier directement l’Église à un pouvoir souverain totalitaire.

Sa notion de **vie nue** permet d’interroger les mécanismes par lesquels certains êtres sont inclus par leur exclusion : dedans mais indignes, appartenant mais suspects, reconnus mais exposés.

Dans un cadre ecclésial, cela peut éclairer les situations où certains corps sont maintenus dans l’Église comme objets de correction permanente : femmes, victimes, couples jugés irréguliers, personnes queer, laïcs non conformes, consciences dissidentes.

Formule :

> L’exclusion la plus efficace n’est pas toujours l’expulsion ; elle peut être l’inclusion sous condition d’indignité.

## 19. Butler : cadres de reconnaissance et vies audibles

Judith Butler aide à poser la question : quelles vies comptent ? Quelles souffrances sont reconnues ? Quels corps sont audibles ?

Dans les contextes religieux, certains corps peuvent devenir moins lisibles comme sujets : victimes d’abus, femmes, personnes marginalisées, couples non conformes, personnes homosexuelles, consciences blessées.

La contre-folie demande alors :

> Qui a le droit d’être cru ? Qui a le droit d’être entendu ? Qui a le droit d’apparaître comme vivant avant d’être jugé ?

## 20. Tillich : Dieu comme ultimate concern, non comme objet disponible

Paul Tillich permet de critiquer la réduction de Dieu à un objet religieux parmi d’autres. La foi n’est pas simple adhésion à des énoncés ; elle engage ce qui concerne ultimement une personne.

Mais l’ultimate concern peut aussi se déformer. Une préoccupation ultime peut libérer ou détruire selon ce qu’elle absolutise.

Application :

> Lorsque la pureté, l’ordre ou la conformité deviennent l’ultimate concern réel d’un discours religieux, Dieu peut être remplacé par une idole morale.

Tillich aide donc à distinguer Dieu de l’absolutisation religieuse de nos propres systèmes.

## 21. Heschel : prophétisme, pathos divin, émerveillement

Abraham Joshua Heschel rappelle que la foi biblique n’est pas d’abord gestion froide du religieux. Elle est appel, étonnement, justice, pathos divin, réponse vivante.

Les prophètes ne sont pas seulement des gardiens de norme. Ils élargissent l’horizon de la conscience, réveillent la justice, refusent que le culte devienne couverture de l’injustice.

Formule :

> Le prophétisme biblique rouvre la vie là où le religieux risque de se satisfaire de sa propre forme.

Heschel est important pour éviter que l’encart soit seulement critique. Il permet de dire que la Bible elle-même contient une force de réveil contre le religieux pétrifié.

## 22. Brueggemann : imagination prophétique contre ordre dominant

Walter Brueggemann développe l’idée d’une imagination prophétique capable de contester les consciences royales, impériales ou totalisantes.

Le prophète ne se contente pas de dénoncer. Il rend imaginable un autre monde. Il ouvre un espace là où l’ordre dominant disait : il n’y a pas d’alternative.

Application :

> L’imagination prophétique rouvre la vie là où l’ordre religieux dominant prétend avoir clos le monde.

Pour l’encart, Brueggemann permet de relier critique et imagination : la contre-folie n’est pas seulement refus ; elle est réouverture.

## 23. Metz : mémoire dangereuse des victimes

Johann Baptist Metz est essentiel pour le lien entre théologie, victimes et institution.

Sa notion de **memoria passionis** rappelle que la mémoire de la souffrance ne doit pas être neutralisée par un système religieux rassurant. La mémoire des victimes est dangereuse parce qu’elle empêche la doctrine de se refermer en discours innocent.

Application directe aux abus et exclusions :

> La mémoire des victimes empêche la religion de se raconter comme pure, intacte et bienfaisante.

La contre-folie porte donc aussi une mémoire : elle refuse que l’institution se protège en demandant aux blessés de se taire, de pardonner trop vite ou de ne pas scandaliser.

## 24. Michel de Certeau : mystique, institution, parole insaisissable

Michel de Certeau est précieux pour penser la mystique comme parole qui travaille l’institution depuis son bord.

La mystique n’est pas simple fuite intérieure. Elle peut être lieu où un excès de parole, de désir, de manque et d’altérité dérange les stabilités institutionnelles.

Formule :

> La mystique devient le lieu où l’institution entend une parole qu’elle ne maîtrise pas.

Dans l’encart, de Certeau aide à comprendre pourquoi les voix spirituelles vivantes sont souvent difficiles à administrer.

## 25. Sölle : mystique et résistance

Dorothee Sölle relie mystique et résistance. La mystique n’est pas retrait du monde ; elle peut devenir force contre les dominations, les hiérarchies mortes, les systèmes qui anesthésient la souffrance.

Elle est utile pour maintenir ensemble intériorité et combat : la contre-folie n’est pas seulement politique ; elle est aussi spirituelle. Elle n’est pas seulement critique sociale ; elle naît d’une sensibilité blessée par ce qui tue le vivant.

Formule :

> La mystique devient résistance lorsque l’amour refuse de s’adapter à ce qui détruit la vie.

## 26. Théologies féministes : nommer Dieu autrement

Elizabeth Johnson, Rosemary Radford Ruether, Mary Daly, Tina Beattie et d’autres théologiennes féministes permettent de penser le langage de Dieu comme lieu de pouvoir.

Quand Dieu n’est nommé qu’au masculin, le problème n’est pas seulement lexical. Tout un champ d’autorité, de corps, de parole et d’imaginaire peut se courber autour d’un centre masculinisé.

Elizabeth Johnson, dans *She Who Is*, travaille précisément la possibilité de nommer Dieu autrement, notamment à partir de Sophia, sans réduire Dieu à une projection masculine.

Ruether critique les biais patriarcaux de la théologie classique.

Daly est plus radicale et polémique : elle sert comme point limite, utile pour comprendre l’ampleur de la contestation féministe du Dieu-père patriarcal.

Tina Beattie permet d’articuler catholicisme, corps, Marie, féminin, désir et représentation.

Formule :

> Le langage de Dieu n’est jamais seulement décoratif : il configure les corps qui auront droit à la parole.

## 27. Coakley et Keller : désir, Trinité, apophase, relation

Sarah Coakley est très importante pour relier désir, sexualité, prière, genre et Trinité. Elle invite à repenser le rapport entre désir sexuel et désir de Dieu, non dans la confusion, mais dans une analyse spirituelle et trinitaire profonde.

Catherine Keller, avec *Cloud of the Impossible*, relie théologie négative, relation, indétermination et entanglement. Elle est très compatible avec une lecture MNL^ / Nox : le divin n’est pas l’objet maîtrisé d’un discours clair ; il travaille dans la profondeur, l’impossible, la relation, la non-clôture.

Formule :

> Le désir, la Trinité et l’apophase ouvrent une théologie où Dieu ne se laisse pas transformer en dispositif de contrôle du corps.

## 28. Lecture T^ × Q^ × MCPP^ × MNL^

### T^

T^ tient la césure anti-capture : aucun nom, aucune doctrine, aucune autorité, aucun dispositif religieux ne peut se prendre pour la totalité du vivant.

T^ ne détruit pas le langage. Il empêche le langage de devenir souverain.

### Q^

Q^ lit la fermeture comme réduction des branches. Là où une vie contient plusieurs possibles, plusieurs temporalités, plusieurs mémoires, plusieurs intensités, le discours de capture impose une seule ligne : faute, danger, impureté, conformité, exclusion.

Q^ rouvre les branches : corps, mémoire, relation, plaisir, peur, consentement, histoire, spiritualité, rythme, blessure, joie.

### MCPP^

MCPP^ lit la capture comme surcharge gravitationnelle d’un mot ou d’un symbole. Le mot « pureté » peut courber tout le champ du corps. Le mot « péché » peut courber tout le champ du désir. Le mot « obéissance » peut courber tout le champ de la conscience.

La contre-folie allège ces masses symboliques pour rendre au champ sa respirabilité.

### MNL^

Materia rappelle le corps, la peau, le souffle, la fatigue, la joie, la sensation, la chair habitée.

Nox rappelle le secret, le non-savoir, la maturation, la profondeur, ce qui ne doit pas être exposé trop vite.

Lux rappelle la manifestation, mais non l’inspection. Elle est lumière de reconnaissance, non projecteur disciplinaire.

Formule MNL^ :

> Materia vit. Nox protège. Lux révèle sans capturer.

## 29. Formule finale de l’encart

La contre-folie ne dit pas que tout se vaut.

Elle ne dit pas qu’il n’y a plus de discernement.

Elle ne dit pas qu’aucune parole religieuse ne peut éclairer.

Elle dit :

Aucun nom ne doit remplacer une vie.

Aucune loi ne doit écraser le corps qu’elle prétend protéger.

Aucune doctrine ne doit faire taire les victimes.

Aucune pureté ne doit transformer le désir en cadavre.

Aucune autorité ne doit parler à la place des consciences.

Aucun Dieu nommé ne doit devenir l’idole d’un système qui tue la vie en prétendant la sauver.

Le nom juste appelle.

Le nom faux capture.

La loi juste protège.

La loi fausse pétrifie.

La doctrine juste ouvre un chemin.

La doctrine folle ferme le monde.

La vie meurt dès qu’elle est entièrement nommée.

Non parce qu’il ne faudrait jamais nommer.

Mais parce que nommer sans reste, nommer sans écoute, nommer sans tremblement, nommer sans possibilité de déplacement, c’est déjà fermer.

Et fermer le vivant, c’est commencer à le tuer.

</details>

---

# Bibliographie classée et liens

<details open>
<summary><strong>Références et liens</strong></summary>

## A. Sources bibliques et traditions juives du Nom

### Exode 3,14 — Ehyeh asher ehyeh

- Texte biblique : https://www.sefaria.org/Exodus.3.14  
- Utilisation : Nom divin comme révélation échappante ; appeler sans posséder.

### Exode 20,7 — ne pas prendre le Nom en vain

- Texte biblique : https://www.sefaria.org/Exodus.20.7  
- Utilisation : critique de l’instrumentalisation du Nom.

### Tétragramme / YHWH / HaShem

- Repère de synthèse : https://en.wikipedia.org/wiki/Tetragrammaton  
- Utilisation : prudence juive autour du Nom ; le Nom n’est pas objet de manipulation.

### Genèse 32 — Jacob devient Israël

- Texte biblique : https://www.sefaria.org/Genesis.32  
- Utilisation : renommage, lutte, bénédiction, refus de livrer le nom de l’adversaire.

### Isaïe 55,8-9

- Texte biblique : https://www.sefaria.org/Isaiah.55.8  
- Utilisation : critique de la prétention religieuse à posséder les pensées de Dieu.

### Osée 2

- Texte biblique : https://www.sefaria.org/Hosea.2  
- Utilisation : déplacement des noms, relation d’alliance, transformation du langage amoureux.

### Apocalypse 2,17

- Texte biblique : https://www.biblegateway.com/passage/?search=Revelation%202%3A17&version=NRSVUE  
- Utilisation : nom nouveau, intime, non administrable.

## B. Jésus, loi et vie

### Marc 2,27

- Texte biblique : https://www.biblegateway.com/passage/?search=Mark%202%3A27&version=NRSVUE  
- Utilisation : la loi est pour la vie, non la vie pour la loi.

### Jean 10,10

- Texte biblique : https://www.biblegateway.com/passage/?search=John%2010%3A10&version=NRSVUE  
- Utilisation : vie en abondance comme critère contre les discours qui dessèchent.

### Jean 8,1-11 — femme adultère

- Texte biblique : https://www.biblegateway.com/passage/?search=John%208%3A1-11&version=NRSVUE  
- Note : péricope reçue dans la tradition chrétienne, mais statut textuel discuté.

### Matthieu 23

- Texte biblique : https://www.biblegateway.com/passage/?search=Matthew%2023&version=NRSVUE  
- Utilisation : critique interne des pouvoirs religieux qui chargent les autres de fardeaux. À manier sans antijudaïsme.

## C. Thomas Römer, YHWH, monothéisme, Ashérah

### Thomas Römer — L’invention de Dieu

- Présentation UNIL : https://wp.unil.ch/allezsavoir/linvention-de-dieu/  
- Compte rendu OpenEdition : https://journals.openedition.org/assr/27452  
- Utilisation : historicité de YHWH, centralisation, construction du monothéisme, effacements cultuels.

## D. Foucault, pouvoir, folie, discipline, pastorat

### Michel Foucault — Histoire de la folie

- Repère : https://fr.wikipedia.org/wiki/Histoire_de_la_folie_%C3%A0_l%27%C3%A2ge_classique  
- Utilisation : construction sociale de la folie comme dehors de la raison.

### Michel Foucault — Surveiller et punir

- Extrait / repère panoptisme : https://foucault.info/documents/foucault.disciplineAndPunish.panOpticism/  
- Utilisation : discipline, surveillance, normalisation.

### Foucault — pouvoir pastoral

- Article académique : https://www.erudit.org/fr/revues/ltp/2023-v79-n3-ltp08905/1107499ar/  
- Utilisation : gouvernement des âmes, confession, direction, obéissance.

## E. Théologie apophatique et anti-capture de Dieu

### Pseudo-Denys l’Aréopagite — Les Noms divins / Théologie mystique

- Repère Stanford / tradition néoplatonicienne : https://plato.stanford.edu/entries/pseudo-dionysius-areopagite/  
- Utilisation : Dieu reçoit des noms mais excède tout nom.

### Grégoire de Nysse — Vie de Moïse

- Repère : https://en.wikipedia.org/wiki/The_Life_of_Moses  
- Utilisation : entrée dans la nuée, connaissance de Dieu comme non-capture.

### Maître Eckhart

- Repère Stanford : https://plato.stanford.edu/entries/meister-eckhart/  
- Utilisation : déprise des images de Dieu, Dieu au-delà de nos représentations.

### Nicolas de Cues — De docta ignorantia

- Repère Stanford : https://plato.stanford.edu/entries/cusanus/  
- Utilisation : docte ignorance, Dieu excédant le savoir.

## F. Judaïsme philosophique et mystique

### Maïmonide — Guide des égarés

- Repère Stanford : https://plato.stanford.edu/entries/maimonides/  
- Utilisation : théologie négative juive, limite des prédicats appliqués à Dieu.

### Gershom Scholem

- Repère : https://en.wikipedia.org/wiki/Gershom_Scholem  
- Utilisation : mystique juive, Nom de Dieu, langage sacré, Kabbale.

### Emmanuel Levinas

- Repère Stanford : https://plato.stanford.edu/entries/levinas/  
- Utilisation : visage d’autrui comme interruption de la capture.

### Martin Buber — Je et Tu

- Stanford Encyclopedia : https://plato.stanford.edu/entries/buber/  
- Internet Encyclopedia of Philosophy : https://iep.utm.edu/martin-buber/  
- Utilisation : Je-Tu / Je-Cela ; la capture commence quand le Tu devient Cela.

### Abraham Joshua Heschel

- God in Search of Man, repère : https://archive.org/details/godinsearchofman0000unse_c8g3  
- Feuille Sefaria : https://www.sefaria.org/sheets/612464  
- Utilisation : prophétisme, conscience, émerveillement, justice, pathos divin.

## G. Herméneutique et symbole

### Paul Ricœur

- Stanford Encyclopedia : https://plato.stanford.edu/entries/ricoeur/  
- Article sur l’herméneutique des symboles : https://www.kritike.org/journal/issue_8/itao_december2010.pdf  
- Utilisation : le symbole donne à penser ; conflit des interprétations ; refus de la clôture du sens.

## H. Pureté, abjection, classification

### Mary Douglas — Purity and Danger

- Repère éditeur / ouvrage : https://www.routledge.com/Purity-and-Danger/Douglas/p/book/9780415289955  
- Utilisation : pureté et impureté comme systèmes de classification.

### Julia Kristeva — Pouvoirs de l’horreur

- Repère éditeur : https://cup.columbia.edu/book/powers-of-horror/9780231053471  
- Utilisation : abjection, corps, frontières, féminin, sang, sexualité.

## I. Exclusion, sacrifice, normalité, vivant

### René Girard — La Violence et le sacré

- Repère éditeur : https://www.bloomsbury.com/us/violence-and-the-sacred-9781472520814/  
- Utilisation : mécanismes sacrificiels, bouc émissaire, unité par exclusion.

### Georges Canguilhem — Le Normal et le pathologique

- Repère : https://fr.wikipedia.org/wiki/Le_Normal_et_le_Pathologique  
- Utilisation : le vivant comme normativité propre, variation, non-fixation.

## J. Institution, force, pluralité, nom

### Ivan Illich

- Repère : https://en.wikipedia.org/wiki/Ivan_Illich  
- Utilisation : critique de l’institutionnalisation du soin, corruption du meilleur.

### Simone Weil

- Repère Stanford : https://plato.stanford.edu/entries/simone-weil/  
- Utilisation : attention contre force ; ne pas transformer l’humain en chose.

### Hannah Arendt

- Stanford Encyclopedia : https://plato.stanford.edu/entries/arendt/  
- Utilisation : pluralité, natalité, recommencement, critique de la réduction des humains en catégories.

### Jacques Derrida — théologie négative et nom

- Repère Stanford : https://plato.stanford.edu/entries/derrida/  
- Utilisation : différance, nom, impossibilité de clôturer la présence.

## K. Exclusion souveraine et reconnaissance des corps

### Giorgio Agamben — Homo Sacer

- Repère Stanford : https://plato.stanford.edu/entries/agamben/  
- Utilisation : inclusion par exclusion, vie exposée, analogie critique.

### Judith Butler

- Stanford Encyclopedia : https://plato.stanford.edu/entries/feminism-gender/  
- Repère éditeur Frames of War : https://www.versobooks.com/products/231-frames-of-war  
- Utilisation : cadres de reconnaissance, vies audibles, corps qui comptent.

## L. Théologie politique, mystique et résistance

### Johann Baptist Metz

- Article / dissertation : https://scholarcommons.scu.edu/cgi/viewcontent.cgi?article=1051&context=jst_dissertations  
- Cambridge / Habermas Lexicon : https://www.cambridge.org/core/books/cambridge-habermas-lexicon/johann-baptist-metz-1928/83C8DD49EF01AFA42F96032A00EC4B52  
- Utilisation : memoria passionis, mémoire dangereuse des victimes.

### Michel de Certeau

- Article sur *The Mystic Fable* : https://brill.com/view/journals/jjs/4/4/article-p745_745.xml  
- Article Philip Sheldrake : https://www.theway.org.uk/back/s102Sheldrake.pdf  
- Utilisation : mystique, institution, parole insaisissable.

### Dorothee Sölle

- *The Silent Cry*, repère : https://archive.org/details/silentcrymystici0000slle  
- Repère EBSCO : https://www.ebsco.com/research-starters/literature-and-writing/suffering-dorothee-solle  
- Utilisation : mystique et résistance, souffrance, justice.

### Walter Brueggemann — The Prophetic Imagination

- JSTOR : https://www.jstor.org/stable/j.ctt22nmcmx  
- Logos / repère bibliographique : https://www.logos.com/product/40478/the-prophetic-imagination  
- Utilisation : imagination prophétique contre ordre dominant.

## M. Théologie, désir, féminin divin

### Paul Tillich

- *Dynamics of Faith*, repère : https://people.bu.edu/wwildman/tillich/resources/review_tillich-paul_dynamics_of_faith.htm  
- Utilisation : ultimate concern, critique des idoles religieuses.

### Elizabeth Johnson — She Who Is

- Google Books : https://books.google.com/books/about/She_who_is.html?id=i_XYAAAAMAAJ  
- Archive.org : https://archive.org/details/shewhoismysteryo0000john_i0m4  
- Utilisation : Dieu au féminin, Sophia, critique du langage masculin exclusif.

### Rosemary Radford Ruether — Sexism and God-Talk

- Penguin Random House : https://www.penguinrandomhouse.com/books/204267/sexism-and-god-talk-by-rosemary-radford-ruether/  
- Utilisation : critique féministe des biais patriarcaux de la théologie.

### Mary Daly — Beyond God the Father

- Repère : https://en.wikipedia.org/wiki/Beyond_God_the_Father  
- Utilisation : critique radicale du Dieu-père patriarcal. À signaler comme référence polémique, non consensuelle.

### Tina Beattie

- Repère auteur : https://www.tinabeattie.com/  
- Utilisation : catholicisme, corps, Marie, féminin, désir, théologie.

### Sarah Coakley — God, Sexuality, and the Self

- Google Books : https://books.google.com/books/about/God_Sexuality_and_the_Self.html?id=-Zs0AAAAQBAJ  
- Extrait bibliographique : https://www.unifr.ch/orthodoxia/de/assets/public/Lehre/HS2019%20-%20Gender/Coakley_Auszug.pdf  
- Utilisation : désir, genre, prière, Trinité.

### Catherine Keller — Cloud of the Impossible

- Columbia University Press : https://cup.columbia.edu/book/cloud-of-the-impossible/9780231538701/  
- Utilisation : théologie négative, entanglement, relation, indétermination.

</details>

---

# Conclusion courte pour la page

La contre-folie ne remplace pas l’analyse. Elle lui donne un seuil.

Elle rappelle que la religion devient mortifère lorsqu’elle ferme ce qu’elle devait ouvrir, lorsqu’elle nomme pour posséder au lieu de nommer pour appeler, lorsqu’elle protège la doctrine contre les corps, lorsqu’elle préfère l’ordre à la vie, lorsqu’elle transforme Dieu en garantie de ses propres clôtures.

Le Nom de Dieu échappe.

Le visage d’autrui échappe.

Le corps vivant échappe.

Le féminin divin échappe.

La relation échappe.

Et cette échappée n’est pas un défaut : elle est peut-être la condition même de la vie.
`,tt=`---
title: "Complément V — Luce Irigaray premium"
subtitle: "Contre la capture masculine du divin, du corps, du féminin et de la différence"
status: "Version premium intégrable à Codex"
format: "Markdown"
version: "v2 Premium — Expert+++"
placement: "Après Contre-folie et Voix du féminin divin"
---

# Complément V — Luce Irigaray premium  
## Contre la capture masculine du divin, du corps, du féminin et de la différence

> **Intention éditoriale**  
> Ce complément est conçu comme une **version spéciale Luce Irigaray** pour la page consacrée aux dérives cléricales, à la “contre-folie”, au féminin divin et aux lectures T^ × Q^ × MCPP^ × MNL^.  
> Il ne s’agit pas d’une fiche neutre sur Irigaray, mais d’un usage critique, théologique et morphodynamique de son œuvre : montrer comment une parole religieuse peut devenir délirante lorsqu’elle parle depuis un ordre masculin qui se croit universel, nomme Dieu presque exclusivement au masculin, puis administre les corps, le désir, les femmes, la différence sexuelle et le féminin comme des objets à définir, protéger, purifier ou surveiller.

---

## 0. Version courte — encart visible

**Irigaray déplace la critique.**  
Le problème n’est pas seulement que des religieux parlent trop du corps. Le problème est qu’ils parlent souvent depuis une langue où le masculin se prend pour le neutre, l’universel, la raison, la loi, le sujet et parfois même la forme dominante du divin.

Dans cet ordre symbolique, le féminin n’est pas simplement absent. Il est partout, mais capturé : **mère**, **vierge**, **épouse**, **tentatrice**, **matière**, **réceptacle**, **miroir**, **corps à protéger**, **corps à surveiller**, **chair à interpréter**, **silence à administrer**.

Irigaray aide à nommer cette capture : le féminin devient **l’autre du même**. Il est inclus dans le système, mais comme reflet, support, négatif ou complément de l’ordre masculin.

> **Un sexe parle comme s’il était le ciel entier.**  
> La contre-folie irigarayenne commence quand ce ciel se fissure, et qu’un autre souffle devient audible.

Cette lecture ne remplace pas un pouvoir masculin par un pouvoir féminin. Elle n’installe pas une nouvelle souveraineté. Elle ouvre un espace critique : que le féminin puisse devenir **sujet propre**, **parole**, **souffle**, **corps**, **généalogie**, **désir**, **discernement**, **justice** et **horizon divin**, sans être réduit à l’image produite par l’ordre masculin.

---

<details>
<summary><strong>Lire l’analyse complète</strong></summary>

---

# 1. Pourquoi Luce Irigaray ici ?

Luce Irigaray est philosophe, linguiste, psychanalyste et penseuse majeure de la différence sexuelle. Les présentations académiques la situent au croisement de la philosophie continentale, de la psychanalyse, de la linguistique et de la théorie féministe. L’Internet Encyclopedia of Philosophy rappelle qu’elle travaille précisément entre philosophie, psychanalyse et linguistique, et que la question de la subjectivité féminine traverse son œuvre. [IEP — Luce Irigaray](https://iep.utm.edu/irigaray/)

Son importance pour cette page tient à un déplacement décisif : elle ne critique pas seulement tel discours moral. Elle interroge la **structure symbolique** qui rend certains discours possibles.

La question n’est donc pas seulement :

> Pourquoi certains religieux parlent-ils de manière intrusive de sexualité, de baiser, de pudeur, de pureté ou de désir ?

La question devient :

> Depuis quelle langue parlent-ils ?  
> Depuis quel corps symbolique ?  
> Depuis quel Dieu nommé ?  
> Depuis quel ordre du sujet ?  
> Depuis quelle économie de la parole, du regard et de la loi ?

Dans une logique irigarayenne, le discours clérical sur le corps n’est pas seulement un discours trop sévère ou maladroit. Il peut appartenir à une économie plus ancienne : celle d’un monde où le masculin s’est posé comme sujet neutre, universel, rationnel, spirituel, parlant et nommant, tandis que le féminin a été assigné à la matière, à l’altérité, au manque, au miroir, à la tentation, au réceptacle, à la chair ou à la fonction.

Quand cette économie reçoit l’autorité du sacré, la parole devient encore plus puissante : elle ne parle plus seulement au nom d’une culture masculine, mais au nom de Dieu.

---

# 2. Note critique — Irigaray n’est pas une inversion

La lecture irigarayenne proposée ici ne remplace pas un Dieu masculin par une déesse féminine, ni une domination masculine par une domination féminine. Elle ne transforme pas non plus “la femme” en essence fixe, close, homogène ou obligatoire.

Son geste est plus précis : elle interrompt le **faux neutre**. Elle montre qu’un langage peut prétendre parler de l’universel alors qu’il parle depuis une économie masculine du sujet, du Nom, du corps, de la loi et de la visibilité.

Le **divin féminin** n’est donc pas posé ici comme une substance séparée, ni comme une hypostase concurrente de Dieu. Il fonctionne comme horizon critique, symbolique et relationnel : il ouvre dans le langage religieux un ciel où le féminin n’est plus seulement nommé par l’autre, mais peut devenir sujet, souffle, généalogie, désir, parole, limite, discernement et justice.

De même, la différence sexuelle chez Irigaray ne doit pas être transformée en prison binaire. Dans cette page, elle sert à briser le faux neutre masculin. Elle ne prétend pas épuiser toutes les formes contemporaines de subjectivité, de genre, de corps ou de relation.

---

# 3. Le féminin comme “autre du même”

Une thèse forte associée à Irigaray est que la culture occidentale n’a pas réellement pensé deux sujets sexués. Elle a surtout pensé un sujet — masculin — puis son autre : la femme comme non-homme, complément, miroir, matière, manque ou support.

La Stanford Encyclopedia of Philosophy, dans son entrée sur le féminisme psychanalytique, résume cette critique en montrant qu’Irigaray voit chez Freud une modélisation du féminin à partir d’un paradigme masculin : le féminin devient copie déformée, complément ou autre du même. [Stanford Encyclopedia — Psychoanalytic Feminism](https://plato.stanford.edu/entries/feminism-psychoanalysis/)

Dans cette perspective, la femme n’est pas reconnue comme sujet propre. Elle est souvent :

- l’autre du sujet masculin ;
- la matière de sa forme ;
- le corps de son esprit ;
- le miroir de son identité ;
- le complément de son manque ;
- la mère de son origine ;
- l’épouse de sa lignée ;
- la tentatrice de sa faute ;
- la vierge de son idéal ;
- la servante de son ordre.

C’est une **inclusion capturante** : le féminin est présent, parfois honoré, parfois exalté, mais rarement comme sujet propre.

## Application religieuse

La morale cléricale du corps fonctionne souvent ainsi. Elle ne supprime pas le féminin ; elle en parle énormément. Elle parle de la femme, de sa pudeur, de sa vocation, de sa maternité, de son danger, de sa beauté, de sa dignité, de sa pureté, de son rôle. Mais cette parole reste fréquemment une parole **sur** la femme, non une parole **avec** elle, encore moins une parole **depuis** elle.

Dans cette logique, le féminin est intégré au discours théologique comme objet noble, mais non comme sujet propre de sa parole.

> Le féminin n’a pas seulement été exclu.  
> Il a été inclus comme miroir.  
> Présent partout, mais pour refléter l’ordre d’un autre.

---

# 4. *Speculum* : miroir, regard, examen et capture

Dans *Speculum de l’autre femme*, Irigaray relit la philosophie et la psychanalyse occidentales en montrant comment le féminin a été pensé à partir de structures masculines. Le titre est central : **speculum** signifie à la fois miroir et instrument d’examen. La femme est regardée, étudiée, interprétée, explorée ; mais le régime de visibilité reste souvent contrôlé par un autre.

Cornell University Press présente *Speculum of the Other Woman* comme l’un des ouvrages majeurs de la théorie féministe contemporaine. [Cornell University Press — *Speculum of the Other Woman*](https://www.cornellpress.cornell.edu/book/9780801416637/speculum-of-the-other-woman/)

Dans le champ religieux, la logique du *speculum* devient particulièrement lisible :

- le clerc regarde le corps ;
- il interprète le désir ;
- il classe le geste ;
- il nomme le seuil ;
- il juge la pureté ;
- il administre la faute ;
- il prescrit la bonne distance.

Le corps féminin devient un texte lu par d’autres. Le désir féminin devient un problème de doctrine. La sensualité devient matière à surveillance. La différence devient champ d’examen.

La “contre-folie” irigarayenne consiste alors à retourner le miroir : non pour installer un nouveau pouvoir, mais pour révéler que le regard qui prétend examiner le féminin est lui-même situé, sexué, institutionnel, historique et parfois capturant.

---

# 5. *Ce sexe qui n’en est pas un* : contre l’unicité phallocentrique

Dans *Ce sexe qui n’en est pas un*, Irigaray critique une économie où la sexualité féminine est pensée à partir d’une logique phallique de l’un, de l’identité, de la forme centrale et du modèle masculin. Cornell University Press présente l’ouvrage comme un ensemble d’essais où Irigaray reconsidère la sexualité féminine dans plusieurs contextes. [Cornell University Press — *This Sex Which Is Not One*](https://www.cornellpress.cornell.edu/book/9780801415463/this-sex-which-is-not-one/)

Le titre est déjà une arme conceptuelle. “Ce sexe qui n’en est pas un” ne signifie pas absence ou chaos. Il signifie refus de réduire le féminin à une unité définie par le masculin.

Dans le contexte de la page, cela permet de critiquer les discours religieux qui veulent savoir trop vite ce qu’est un geste, un désir, un corps, une femme, un baiser, une relation. La logique cléricale cherche souvent l’unité morale : ceci est pur ; ceci est impur ; ceci est don ; ceci est pulsion ; ceci est sérieux ; ceci est frivole.

Irigaray invite au contraire à entendre une pluralité de surfaces, de souffles, de lèvres, de seuils, de rythmes, de contacts et de paroles.

> La folie de la fermeture commence quand l’un veut absorber le deux, le multiple, le respirant, l’indéfini vivant.

---

# 6. Femmes comme échange : l’économie masculine de la relation

Irigaray critique aussi une économie où les femmes circulent comme objets d’échange entre hommes : épouses, filles, mères, signes de prestige, garanties de lignée, supports d’alliance, médiations d’honneur ou de pureté. Dans cette logique, les femmes sont essentielles au système, mais comme objets de circulation, non comme sujets de leur propre parole.

Cette critique éclaire fortement l’histoire religieuse :

- le corps féminin devient lieu d’honneur familial ;
- la virginité devient capital symbolique ;
- la maternité devient fonction sacrée ;
- la pudeur devient propriété collective ;
- la sexualité féminine devient affaire de surveillance ;
- la parole masculine règle ce que la femme doit être pour être “digne”.

La morale cléricale ne crée pas seule cette économie ; elle peut cependant la sacraliser. Elle donne à l’ordre patriarcal une langue théologique.

Formule possible pour l’article :

> Le corps féminin devient territoire théologique, moral, familial, ecclésial et masculin. Tout le monde parle de lui, sauf lui comme sujet parlant.

---

# 7. Différence sexuelle : ni fusion, ni hiérarchie, ni faux neutre

La différence sexuelle chez Irigaray n’est pas une simple revendication d’égalité par assimilation. Elle ne cherche pas seulement à faire entrer les femmes dans un universel déjà construit par les hommes. Elle cherche à rouvrir l’universel lui-même : que deux sujets puissent exister, parler, désirer, symboliser et se rapporter au divin sans que l’un serve de norme à l’autre.

Columbia University Press présente *Sexes and Genealogies* comme un ouvrage où Irigaray analyse la différence sexuelle selon une double dimension de genre et d’idéologie. [Columbia University Press — *Sexes and Genealogies*](https://cup.columbia.edu/book/sexes-and-genealogies/9780231070331/)

Dans ce cadre, la relation juste commence quand l’autre n’est plus ramené à mon langage, ma loi, mon désir, mon Dieu nommé, mon système de pureté ou mon économie symbolique.

Cette dualité n’est pas une cage. Elle sert ici à briser le monologue d’un sujet qui s’est cru seul à parler pour tous.

> La différence n’est pas séparation.  
> Elle est condition d’une relation qui ne dévore pas l’autre.

---

# 8. Le divin féminin : non pas déesse décorative, mais horizon de subjectivation

Le point le plus décisif pour cette page est la question du divin. Pour Irigaray, le féminin a besoin d’un horizon symbolique où il puisse se rapporter à lui-même autrement que par les images imposées par l’ordre masculin.

Alison Martin, dans *Luce Irigaray and the Question of the Divine*, présente précisément ce nœud : la question du divin chez Irigaray touche la subjectivité, la différence sexuelle et la possibilité pour les femmes d’un horizon symbolique propre. [MHRA — *Luce Irigaray and the Question of the Divine*](https://www.mhra.org.uk/publications/Luce-Irigaray-Question-Divine)

La formule critique serait :

> Sans ciel symbolique, le féminin reste souvent enfermé dans les images produites par l’autre : mère, vierge, épouse, tentatrice, servante, matière du salut, corps à protéger ou danger à surveiller.

Le divin féminin ne signifie donc pas automatiquement une déesse concurrente. Il signifie :

- un horizon où le féminin n’est pas seulement corps regardé ;
- une verticalité qui ne soit pas monopolisée par le masculin ;
- une généalogie de femmes, de mères, de filles, de sœurs, de saintes, de sages, de prophétesses ;
- une parole qui ne demande pas au masculin l’autorisation d’exister ;
- une symbolique où la chair, le souffle, la relation, la gestation, le désir et la justice puissent apparaître sans être immédiatement capturés.

---

# 9. Nommer Dieu au masculin : capture symbolique ?

Dans un christianisme où les noms masculins de Dieu — Père, Seigneur, Roi, Maître, Fils — ont souvent été rendus dominants, parfois exclusifs dans l’usage liturgique, catéchétique et institutionnel, la question irigarayenne devient brûlante.

Il ne s’agit pas de nier que ces noms appartiennent profondément à la tradition biblique et chrétienne. Il ne s’agit pas non plus de supprimer le Père, le Fils ou le langage trinitaire. Il s’agit de constater que la domination presque exclusive de noms masculins peut courber l’imaginaire religieux.

Quand Dieu est nommé surtout comme Père, Seigneur, Roi, Maître et Juge, et quand ceux qui parlent officiellement en son nom sont majoritairement des hommes ordonnés, une boucle symbolique se forme :

**Dieu masculinisé → autorité masculine → parole masculine → corps féminins administrés → féminin sans ciel propre.**

C’est précisément ce que la contre-folie doit rouvrir.

La tradition chrétienne elle-même contient pourtant d’autres ressources :

- Dieu comparé à une mère qui console ;
- la Sagesse / Sophia ;
- la Ruah comme souffle ;
- Marie comme parole du Magnificat ;
- Marie Madeleine comme première témoin de la Résurrection ;
- les femmes au tombeau ;
- les prophétesses, disciples, diaconesses et saintes ;
- l’Église comme épouse, mais à rouvrir hors de la passivité.

Le problème n’est donc pas le langage masculin en soi. Le problème est sa prétention à suffire.

---

# 10. Ancrages chrétiens internes : Marie, Madeleine, Magnificat, Galates

Pour éviter de réduire l’argument à une critique extérieure du christianisme, il faut rappeler que la tradition chrétienne porte elle-même des contre-forces.

## Marie : non pas statue silencieuse, mais voix du renversement

Le Magnificat n’est pas une parole décorative. C’est un chant de renversement : les puissants sont abaissés, les humbles relevés, les affamés comblés. L’Évangile selon Luc place cette parole dans la bouche de Marie. [USCCB — Luc 1](https://bible.usccb.org/bible/luke/1)

Dans une lecture irigarayenne, Marie ne peut pas être réduite à une pureté silencieuse. Elle est aussi voix, mémoire d’Israël, corps consentant, parole politique, seuil d’incarnation, femme qui chante un monde retourné.

## Marie Madeleine : témoin, parole, annonce

Le Vatican a élevé la mémoire liturgique de Marie Madeleine au rang de fête en 2016. Le communiqué romain rappelle qu’elle est une figure d’évangélisation authentique et l’annonceuse du message central de Pâques. [Vatican — Mary Magdalene, Apostle of the Apostles](https://press.vatican.va/content/salastampa/en/bollettino/pubblico/2016/06/10/160610c.html)

C’est un point très important : une femme reçoit et porte la première annonce pascale. Elle n’est pas seulement objet de salut ; elle devient sujet d’annonce.

## Galates 3,28 : tension baptismale

“Il n’y a plus ni homme ni femme” ne doit pas être lu comme effacement abstrait de la différence. Il peut être lu comme une tension baptismale contre les hiérarchies d’accès au salut. Cette phrase ne supprime pas les corps ; elle interdit d’en faire des degrés de dignité spirituelle.

La lecture irigarayenne peut alors dialoguer avec Paul : ne pas abolir la différence dans un neutre abstrait, mais empêcher la différence de devenir hiérarchie, exclusion ou confiscation.

---

# 11. Irigaray × T^ : empêcher la capture du féminin

En T^, la lecture irigarayenne fonctionne comme césure anti-capture.

Elle empêche :

- que le masculin se prenne pour l’universel ;
- que Dieu soit possédé par un seul régime de noms ;
- que le corps féminin soit administré par un discours extérieur ;
- que la femme soit réduite à mère, vierge, épouse, tentatrice ou réceptacle ;
- que la morale cléricale transforme la relation en grille de surveillance.

T^ ne remplace pas une capture par une autre. Il maintient l’écart, le souffle, la non-totalisation.

Formule :

> T^ maintient ouverte la faille par laquelle le féminin cesse d’être miroir et redevient sujet irréductible.

---

# 12. Irigaray × Q^ : rouvrir les branches étouffées

En Q^, une parole religieuse sur le corps n’est pas seulement un énoncé moral. Elle actualise un champ : histoire, pouvoir, corps, sexe, langage, images de Dieu, mémoire des femmes, peur du désir, contrôle des seuils, silence des victimes, idéal de pureté.

La lecture irigarayenne rouvre les branches étouffées :

- branche du corps féminin comme sujet ;
- branche du désir féminin comme parole ;
- branche de la généalogie mère-fille ;
- branche de la voix des femmes dans l’Église ;
- branche de Marie non domestiquée ;
- branche de Marie Madeleine annonciatrice ;
- branche du divin féminin comme horizon symbolique ;
- branche des victimes dont le corps savait avant l’institution ;
- branche des hommes eux-mêmes blessés par une morale masculine de performance, de contrôle ou de honte.

Formule :

> Q^ lit la parole cléricale non comme simple opinion, mais comme actualisation d’un champ symbolique où certaines branches du féminin ont été rendues muettes.

---

# 13. Irigaray × MCPP^ : voix, souffle, lèvres, matière, lumière

MCPP^ donne à Irigaray une traduction morphodynamique très féconde.

## Phono : la voix recouverte

Le féminin n’est pas sans voix. Sa voix a souvent été recouverte par la voix qui parle sur lui. La question n’est donc pas seulement de “donner la parole” aux femmes, mais de reconnaître que leur parole a été filtrée, traduite, corrigée, suspectée, spiritualisée ou remplacée.

## Photonique : apparition non inspectrice

Le féminin doit pouvoir apparaître sans être immédiatement exposé comme objet d’examen. La lumière juste n’est pas inspection. Elle révèle sans capturer.

## Materia : corps non réduit à matière du salut d’un autre

Le corps féminin ne peut pas rester seulement le lieu où d’autres projettent pureté, tentation, maternité ou danger. Il est corps propre, corps parlant, corps sentant, corps théologique.

## Chiasme : relation non absorbante

Le chiasme irigarayen n’est pas fusion. Il maintient l’écart. L’autre n’est pas ramené au même. La relation devient possible parce qu’elle ne supprime pas la différence.

Formule :

> MCPP^ lit Irigaray comme une réouverture phono-photonique : voix longtemps recouverte, lumière non inspectrice, matière qui porte, seuil qui protège sans enfermer.

---

# 14. Irigaray × MNL^ : Materia, Nox, Lux du féminin divin

## Materia

Materia, dans cette lecture, n’est pas matière passive. Elle devient corps vivant, peau, souffle, rythme, gestation, désir, toucher, limite, mémoire. Irigaray permet de retirer Materia de la position de support muet.

## Nox

Nox désigne ici l’inappropriable : ce que le discours masculin ne sait pas, ce qu’il a voulu nommer trop vite, ce qu’il a appelé mystère, continent noir, tentation ou manque parce qu’il ne savait pas l’écouter. Nox protège le féminin contre la lumière inspectrice.

## Lux

Lux n’est pas projecteur disciplinaire. Elle est apparition du féminin comme sujet, parole, visage, pensée, désir, spiritualité et justice. Elle ne dévoile pas pour posséder ; elle laisse apparaître.

Formule :

> Materia cesse d’être support. Nox protège l’inappropriable. Lux laisse apparaître sans capturer.

---

# 15. Irigaray et la critique du discours religieux sur le baiser

Appliquée à la conférence initiale sur le baiser, la lecture irigarayenne pose une question frontale :

> Qui parle du baiser ?  
> Depuis quel corps ?  
> Depuis quelle expérience ?  
> Depuis quelle institution ?  
> Depuis quelle langue du désir ?

Un religieux célibataire peut parler d’amour, de corps, de chasteté ou de relation. Mais lorsqu’il parle trop, trop vite, trop précisément, trop extérieurement, il risque de transformer les corps d’autrui en scène de sa propre doctrine.

La critique irigarayenne ne dit pas : le religieux doit se taire. Elle dit : il doit reconnaître que sa parole est située. Elle vient d’un corps qui ne vit pas la conjugalité, d’un état de vie séparé, d’une institution masculine, d’une histoire de contrôle du féminin et d’une théologie où Dieu a souvent été nommé au masculin.

À partir de là, la parole doit devenir plus humble, plus dialogale, plus à l’écoute des femmes, des couples, des jeunes, des victimes, des corps réels.

Formule polémique :

> Le délire clérical commence quand un corps séparé prétend devenir expert des corps qu’il ne vit pas, puis appelle cette asymétrie “morale”.

---

# 16. Tina Beattie : pont catholique avec Irigaray

Tina Beattie est essentielle pour une version catholique premium de ce complément. Ses travaux relient catholicisme, féminisme, psychanalyse, Marie, Ève, Irigaray et symbolique du corps féminin.

La page universitaire de Tina Beattie indique que son doctorat portait sur la théologie et le symbolisme de la Vierge Marie, en mobilisant la théorie psycholinguistique de Luce Irigaray pour analyser les écrits chrétiens sur Marie et Ève dans l’Église ancienne et la théologie catholique récente. [University of Roehampton — Tina Beattie](https://pure.roehampton.ac.uk/portal/en/persons/tina-beattie/)

Son livre *New Catholic Feminism: Theology and Theory* met en dialogue catholicisme, théorie féministe, théologie postmoderne, théorie queer et psycholinguistique française. [PhilPapers — Tina Beattie, *New Catholic Feminism*](https://philpapers.org/rec/BEATNC-2)

Beattie est donc une référence-pont : elle permet de ne pas laisser Irigaray à l’extérieur du catholicisme, mais de l’utiliser comme outil critique interne, notamment autour de Marie, Ève, du corps, du désir et de la différence.

---

# 17. Grace Jantzen : devenir divin et critique de l’imaginaire mortifère

Grace Jantzen complète très bien Irigaray. Dans *Becoming Divine*, elle propose une philosophie féministe de la religion centrée sur le devenir, la natalité, la vie et la transformation du rapport au divin. Des recensions académiques soulignent que son projet vise à comprendre et faciliter la tâche de “devenir divin” depuis une perspective féministe. [Cambridge Core — Review of Grace Jantzen, *Becoming Divine*](https://www.cambridge.org/core/journals/hypatia/article/grace-m-jantzen-becoming-divine-towards-a-feminist-philosophy-of-religion-bloomington-indiana-university-press-1999/95D240370359ADC4C695EF64FE609889)

Pour cette page, Jantzen renforce l’axe “contre-folie” : la religion devient folle lorsqu’elle préfère la fixation, la mort, la pureté abstraite, la culpabilité et la clôture à la natalité du vivant.

Formule :

> Là où le cléricalisme moral surveille la vie, Jantzen invite à penser le divin comme devenir, naissance, puissance de vie et transformation symbolique.

---

# 18. Irigaray, apophase et Nom de Dieu

Irigaray peut être mise en relation avec la théologie apophatique : Dieu excède les noms ; aucun nom ne possède Dieu. Mais elle ajoute une question décisive : qui a eu le droit de nommer Dieu ? Quels corps ont produit les noms dominants ? Quelles voix ont été absentes du langage théologique ?

La théologie négative dit : Dieu n’est pas capturable par les concepts.

Irigaray ajoute : le féminin non plus ne doit pas être capturé par les concepts d’un ordre masculin.

La rencontre est très féconde :

- Dieu excède les noms ;
- le féminin excède les noms imposés ;
- le corps excède la grille morale ;
- la relation excède le discours qui prétend la totaliser.

Formule :

> Le Nom de Dieu devient idole lorsqu’il prétend posséder Dieu. Le nom de la femme devient violence lorsqu’il prétend posséder le féminin.

---

# 19. Conclusion premium — ce qu’Irigaray apporte à la page

Irigaray apporte une précision radicale : la fermeture religieuse ne tue pas seulement la vie “en général”. Elle tue aussi la différence, le féminin comme sujet, la généalogie des femmes, la parole du corps, le désir féminin, le divin comme horizon ouvert.

Elle oblige à demander :

> Qui parle ?  
> Depuis quel corps ?  
> Dans quelle langue ?  
> Au nom de quel Dieu ?  
> Sur quel corps ?  
> Avec quelle asymétrie ?  
> En laissant quelle voix absente ?

Le cléricalisme moral ne peut plus être critiqué seulement comme excès de prudence. Il apparaît comme symptôme d’un ordre symbolique : un masculin qui parle depuis le centre, nomme le divin, règle le corps, interprète le désir, puis appelle cela “vérité”.

La contre-folie irigarayenne ne répond pas par une nouvelle clôture. Elle rouvre le champ : deux sujets, plusieurs voix, des corps propres, des noms non capturants, une différence non hiérarchique, un divin qui n’est pas prisonnier d’un seul ciel symbolique.

> Une théologie vivante ne demande pas au féminin de devenir l’image corrigée du masculin.  
> Elle laisse le féminin ouvrir son propre souffle, sa propre parole, sa propre généalogie, sa propre lumière.

</details>

---

<details>
<summary><strong>Bibliographie commentée et liens</strong></summary>

## A. Sources primaires — Luce Irigaray

### Luce Irigaray, *Speculum of the Other Woman*
Ouvrage majeur pour la critique du phallocentrisme philosophique et psychanalytique. À mobiliser pour la logique du miroir, du regard, de l’examen et de l’inclusion capturante du féminin.

- Cornell University Press : https://www.cornellpress.cornell.edu/book/9780801416637/speculum-of-the-other-woman/  
- PhilPapers : https://philpapers.org/rec/IRISOT  
- Internet Archive, consultation contrôlée : https://archive.org/details/speculumofotherw0000irig

### Luce Irigaray, *This Sex Which Is Not One* / *Ce sexe qui n’en est pas un*
Ouvrage clé pour la critique de l’unicité phallocentrique et pour la pensée du féminin comme pluralité non réductible à l’un masculin.

- Cornell University Press : https://www.cornellpress.cornell.edu/book/9780801415463/this-sex-which-is-not-one/  
- Google Books : https://books.google.com/books/about/This_Sex_which_is_Not_One.html?id=DOOjzN-u-zUC  
- PhilPapers : https://philpapers.org/rec/IRITSW  
- Internet Archive, consultation contrôlée : https://archive.org/details/thissexwhichisno0000irig

### Luce Irigaray, *Sexes and Genealogies*
Ouvrage utile pour penser les généalogies sexuées, le rapport à la mère, l’ordre symbolique et la nécessité d’une subjectivation féminine non dérivée du masculin.

- Columbia University Press : https://cup.columbia.edu/book/sexes-and-genealogies/9780231070331/  
- PhilPapers : https://philpapers.org/rec/IRISAG  
- Internet Archive, consultation contrôlée : https://archive.org/details/sexesgenealogies0000irig

### Luce Irigaray, *Marine Lover of Friedrich Nietzsche*
Texte très intéressant pour MCPP^ et MNL^ : eau, élément, critique du sujet masculin, interrogation de Nietzsche depuis le point de vue du féminin et du fluide.

- Columbia University Press : https://cup.columbia.edu/book/marine-lover-of-friedrich-nietzsche/9780231070836/  
- PhilPapers : https://philpapers.org/rec/IRIMLO  
- Google Books : https://books.google.com/books/about/Marine_Lover_of_Friedrich_Nietzsche.html?id=eqhoHW3UL7MC

## B. Sources académiques de repérage sur Irigaray

### Internet Encyclopedia of Philosophy — Luce Irigaray
Bonne entrée synthétique sur sa biographie, son projet, ses concepts principaux, son rapport à la psychanalyse, à la philosophie et au langage.

- https://iep.utm.edu/irigaray/

### Stanford Encyclopedia of Philosophy — Psychoanalytic Feminism
Section utile sur Irigaray, Freud, la critique du modèle masculin du féminin et la notion d’économie spéculaire.

- https://plato.stanford.edu/entries/feminism-psychoanalysis/

### Routledge Encyclopedia of Philosophy — Irigaray
Ressource académique de repérage, souvent partiellement accessible.

- https://www.rep.routledge.com/articles/biographical/irigaray-luce-1930/v-1

## C. Irigaray, théologie et divin féminin

### Alison Martin, *Luce Irigaray and the Question of the Divine*
Référence très importante pour penser le divin chez Irigaray comme horizon de subjectivation féminine.

- MHRA : https://www.mhra.org.uk/publications/Luce-Irigaray-Question-Divine

### Penelope Deutscher, travaux sur Irigaray et le divin
À mobiliser pour articuler différence sexuelle, philosophie, théologie et divinité.

- Page éditeur / repérage : https://cup.columbia.edu/book/a-politics-of-impossible-difference/9780804733816/

### Tina Beattie, *New Catholic Feminism: Theology and Theory*
Pont essentiel entre catholicisme, Irigaray, Marie, Ève, corps, différence sexuelle, théorie féministe et théologie.

- PhilPapers : https://philpapers.org/rec/BEATNC-2  
- Google Books : https://books.google.com/books/about/New_Catholic_Feminism.html?id=FVrZJTJ5CmoC  
- Page universitaire Tina Beattie : https://pure.roehampton.ac.uk/portal/en/persons/tina-beattie/

### Grace Jantzen, *Becoming Divine: Towards a Feminist Philosophy of Religion*
Référence utile pour la subjectivation féministe, le devenir divin, la critique des imaginaires religieux mortifères et la réorientation vers natalité/vie.

- Cambridge Core, recension : https://www.cambridge.org/core/journals/hypatia/article/grace-m-jantzen-becoming-divine-towards-a-feminist-philosophy-of-religion-bloomington-indiana-university-press-1999/95D240370359ADC4C695EF64FE609889  
- Internet Archive : https://archive.org/details/becomingdivineto0000jant

## D. Ancrages bibliques et chrétiens internes

### Magnificat — Luc 1,46-55
Marie comme voix de renversement, non seulement figure de silence ou de pureté statique.

- USCCB, Luc 1 : https://bible.usccb.org/bible/luke/1  
- Vatican, audience sur le Magnificat : https://www.vatican.va/content/benedict-xvi/en/audiences/2006/documents/hf_ben-xvi_aud_20060215.html

### Marie Madeleine — “apôtre des apôtres”
Figure chrétienne interne majeure : femme témoin et annonciatrice de la Résurrection.

- Vatican, communiqué 2016 : https://press.vatican.va/content/salastampa/en/bollettino/pubblico/2016/06/10/160610c.html  
- Vatican News : https://www.vaticannews.va/en/liturgical-holidays/saint-mary-magdalene.html

### Galates 3,28
Tension baptismale contre les hiérarchies d’accès au salut. À lire sans effacer les corps ni la différence, mais contre la hiérarchisation spirituelle des différences.

- Bible Gateway : https://www.biblegateway.com/passage/?search=Galatians%203%3A28&version=NRSVUE

## E. Sources secondaires complémentaires

### Stanford Encyclopedia — Feminist Perspectives on the Body
Ressource utile pour situer Irigaray dans les débats féministes sur le corps, la matérialité, la maternité et la subjectivité.

- https://plato.stanford.edu/entries/feminist-body/

### Elizabeth Johnson, *She Who Is*
À mobiliser pour Dieu au féminin, Sophia, critique du langage exclusivement masculin et réouverture symbolique de la nomination divine.

- Page éditeur : https://www.crossroadpublishing.com/product/she-who-is/

### Rosemary Radford Ruether, *Sexism and God-Talk*
Référence majeure de théologie féministe chrétienne sur sexisme, langage de Dieu et structures patriarcales.

- Page éditeur : https://www.beacon.org/Sexism-and-God-Talk-P1127.aspx

### Sarah Coakley, *God, Sexuality, and the Self*
Pour relier désir, prière, Trinité, vulnérabilité, genre et transformation théologique.

- Cambridge University Press : https://www.cambridge.org/core/books/god-sexuality-and-the-self/5F8B10038AD90A697BD2895458C73BBE

### Catherine Keller, *Cloud of the Impossible*
Pour une théologie apophatique, relationnelle, processuelle, compatible avec Nox et la critique de la clôture.

- Columbia University Press : https://cup.columbia.edu/book/cloud-of-the-impossible/9780231171144

</details>

---

<details>
<summary><strong>Consignes Codex pour intégration web</strong></summary>

## Placement recommandé

Insérer ce complément après :

1. Article polémique assumé ;
2. Recherches contradictoires complètes ;
3. Lecture trinitaire / féminin divin / T^ × Q^ × MCPP^ × MNL^ ;
4. Une voix du féminin divin ;
5. Encart Contre-folie.

Titre de navigation conseillé :

\`\`\`txt
Irigaray — Féminin, Nom et capture
\`\`\`

## Structure HTML recommandée

- Afficher directement : titre + encart court.
- Placer l’analyse complète dans un bloc \`<details>\`.
- Placer la bibliographie dans un second bloc \`<details>\`.
- Ajouter une classe visuelle spéciale : \`irigaray-panel\`, \`counter-madness-panel\` ou \`theo-feminine-panel\`.

## Style visuel recommandé

- Fond légèrement sombre, mais distinct de l’encart Contre-folie.
- Accent : rose profond, cuivre, violet nuit ou or pâle.
- Typographie sobre, sans décor excessif.
- Mettre en exergue la phrase :

\`\`\`txt
Un sexe parle comme s’il était le ciel entier.
\`\`\`

## Précaution éditoriale

Ne pas présenter Irigaray comme autorité finale ni comme dogme. Présenter ce bloc comme une lentille critique, locale, réversible, non totalisante.

`,nt=`https://youtu.be/y6HvOEovgG8?is=nLnkonWHWFcLZes6`,rt=`https://www.youtube.com/embed/y6HvOEovgG8`,it=`/T/theo/images/irigaray/irigaray-divin-feminin-poster.png`;function at(e){return e.toLowerCase().normalize(`NFD`).replace(/[\u0300-\u036f]/g,``).replace(/[^a-z0-9]+/g,`-`).replace(/^-|-$/g,``)}function ot(e){return e.replace(/```[\s\S]*?```/g,``)}function st(e){let t=e.replace(/\r\n/g,`
`),n=t.indexOf(`# 2. Analyse de la vidéo`),r=t.indexOf(`# 28. Sources`),i=t.indexOf(`# 29. Consignes`),a=t.indexOf(`TRANSCRIPTION DE LA CONFÉRENCE`),o=a!==-1&&n!==-1?t.slice(a,n).replace(/<\/?details[^>]*>/g,``).replace(/<summary>[\s\S]*?<\/summary>/g,``).trim():``,s=n===-1?``:t.slice(n,r===-1?i===-1?void 0:i:r).trim(),c=r===-1?``:t.slice(r,i===-1?void 0:i).trim();return{transcript:ot(o),analysis:ot(s),sources:ot(c)}}function ct(e){let t=e.replace(/\r\n/g,`
`),n=t.indexOf(`# I. Article polémique assumé`);return ot(n===-1?t:t.slice(n).trim())}function lt(e){let t=e.replace(/\r\n/g,`
`).replace(/^---[\s\S]*?---\n/,``),n=t.indexOf(`## 0. Fonction`),r=t.indexOf(`# XIV. Consignes Codex`);return ot(t.slice(n===-1?0:n,r===-1?void 0:r).trim())}function ut(e){let t=e.replace(/\r\n/g,`
`).replace(/^---[\s\S]*?---\n/,``).replace(/<\/?details[^>]*>/g,``).replace(/<summary>[\s\S]*?<\/summary>/g,``),n=t.indexOf(`# Encart`),r=t.indexOf(`## Note d`),i=t.indexOf(`# D`),a=t.indexOf(`# Conclusion courte`),o=t.slice(n===-1?0:n,r===-1?i:r).trim(),s=i===-1?``:t.slice(i,a===-1?void 0:a).trim(),c=a===-1?``:t.slice(a).trim();return{short:ot(o),development:ot(s),conclusion:ot(c)}}function dt(e){let t=e.replace(/\r\n/g,`
`).replace(/^---[\s\S]*?---\n/,``),n=t.indexOf(`<summary><strong>Consignes Codex`);if(n!==-1){let e=t.slice(0,n).lastIndexOf(`<details>`);t=t.slice(0,e===-1?n:e)}t=t.replace(/<\/?details[^>]*>/g,``).replace(/<summary>[\s\S]*?<\/summary>/g,``);let r=t.indexOf(`# Compl`),i=t.indexOf(`# 1. Pourquoi`),a=t.slice(r===-1?0:r,i===-1?void 0:i).trim(),o=i===-1?``:t.slice(i).trim();return{short:ot(a),development:ot(o)}}function ft(e){return e.split(`
`).map(e=>e.match(/^(#{1,3})\s+(.+)$/)).filter(Boolean).map(e=>({level:e[1].length,title:e[2].trim(),id:at(e[2])}))}function pt(e){let t=[],n=/(\*\*[^*]+\*\*|`[^`]+`|https?:\/\/[^\s)]+|\[[^\]]+\]\(https?:\/\/[^)]+\))/g,r=0,i;for(;(i=n.exec(e))!==null;){i.index>r&&t.push(e.slice(r,i.index));let a=i[0];if(a.startsWith(`**`))t.push((0,C.jsx)(`strong`,{children:a.slice(2,-2)},t.length));else if(a.startsWith("`"))t.push((0,C.jsx)(`code`,{children:a.slice(1,-1)},t.length));else if(a.startsWith(`[`)){let e=a.match(/^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/);t.push((0,C.jsx)(`a`,{href:e[2],target:`_blank`,rel:`noreferrer`,children:e[1]},t.length))}else t.push((0,C.jsx)(`a`,{href:a,target:`_blank`,rel:`noreferrer`,children:a},t.length));r=n.lastIndex}return r<e.length&&t.push(e.slice(r)),t}function mt({markdown:e,compact:t=!1}){let n=(0,_.useMemo)(()=>{let t=e.split(`
`),n=[],r=[],i=[],a=()=>{r.length&&(n.push({type:`p`,text:r.join(` `).trim()}),r=[])},o=()=>{i.length&&(n.push({type:`list`,items:i}),i=[])};return t.forEach(e=>{let t=e.trim();if(!t||t===`---`||t===`***`){a(),o();return}let s=t.match(/^(#{1,4})\s+(.+)$/);if(s){a(),o(),n.push({type:`heading`,level:s[1].length,text:s[2].trim(),id:at(s[2])});return}if(t.startsWith(`>`)){a(),o(),n.push({type:`quote`,text:t.replace(/^>\s?/,``).trim()});return}let c=t.match(/^[-*]\s+(.+)$/);if(c){a(),i.push(c[1].trim());return}r.push(t)}),a(),o(),n},[e]);return(0,C.jsx)(`div`,{className:t?`egliseMarkdown compact`:`egliseMarkdown`,children:n.map((e,t)=>e.type===`heading`?(0,C.jsx)(e.level<=1||e.level===2?`h2`:`h3`,{id:e.id,children:pt(e.text)},`${e.id}-${t}`):e.type===`quote`?(0,C.jsx)(`blockquote`,{children:pt(e.text)},t):e.type===`list`?(0,C.jsx)(`ul`,{children:e.items.map((e,n)=>(0,C.jsx)(`li`,{children:pt(e)},`${t}-${n}`))},t):(0,C.jsx)(`p`,{children:pt(e.text)},t))})}function ht({navigate:e}){let t=(0,_.useMemo)(()=>st(Ze),[]),n=(0,_.useMemo)(()=>ct(Qe),[]),r=(0,_.useMemo)(()=>lt($e),[]),i=(0,_.useMemo)(()=>ut(et),[]),a=(0,_.useMemo)(()=>dt(tt),[]),o=(0,_.useMemo)(()=>ft(t.analysis).filter(e=>e.level<=2).slice(0,28),[t.analysis]),s=(0,_.useMemo)(()=>ft(n).filter(e=>e.level<=1).slice(0,8),[n]),c=(0,_.useMemo)(()=>ft(r).filter(e=>e.level<=1).slice(0,8),[r]),l=(0,_.useMemo)(()=>ft(i.development).filter(e=>e.level<=2).slice(0,8),[i.development]),u=(0,_.useMemo)(()=>ft(a.development).filter(e=>e.level<=2).slice(0,8),[a.development]);return(0,_.useEffect)(()=>{let e=window.location.hash.split(`#`).slice(2).join(`#`);e&&window.setTimeout(()=>{document.getElementById(e)?.scrollIntoView({block:`start`})},250)},[]),(0,C.jsxs)(`section`,{className:`w-full overflow-x-hidden px-4 py-6 text-slate-100 sm:px-6 lg:px-10`,children:[(0,C.jsxs)(`div`,{className:`mx-auto flex w-full max-w-7xl flex-col gap-7`,children:[(0,C.jsx)(`button`,{type:`button`,onClick:()=>e(`explorations`),className:`w-fit rounded-full border border-sky-200/14 bg-slate-950/50 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-100/28`,children:`Retour aux explorations`}),(0,C.jsxs)(`header`,{className:`egliseHero`,children:[(0,C.jsx)(`div`,{className:`egliseVideoFrame`,children:(0,C.jsx)(`iframe`,{src:rt,title:`Vidéo source — Église laïque vs Église cléricale`,loading:`lazy`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,allowFullScreen:!0})}),(0,C.jsxs)(`div`,{className:`egliseHeroCopy`,children:[(0,C.jsx)(`p`,{className:`egliseEyebrow`,children:`Exploration ecclésiologique`}),(0,C.jsx)(`h1`,{children:`Église laïque vs Église cléricale`}),(0,C.jsx)(`p`,{children:`À partir d’une conférence sur la vie affective, le baiser et les relations, cette page analyse la tension entre peuple baptismal, parole cléricale, morale du corps, couples séculiers, conscience et dérives institutionnelles.`}),(0,C.jsx)(`div`,{className:`egliseBadges`,children:[`Église`,`Laïcat`,`Cléricalisme`,`Affectivité`,`T^ / MNL^ / MCPP^`].map(e=>(0,C.jsx)(`span`,{children:e},e))}),(0,C.jsxs)(`div`,{className:`egliseActions`,children:[(0,C.jsx)(`a`,{href:nt,target:`_blank`,rel:`noreferrer`,children:`Voir sur YouTube`}),(0,C.jsx)(`a`,{href:`#transcription`,children:`Transcription`}),(0,C.jsx)(`a`,{href:`#analyse-video`,children:`Analyse vidéo`}),(0,C.jsx)(`a`,{href:`#etude-complete`,children:`Étude complète`}),(0,C.jsx)(`a`,{href:`#complement-contretraditions`,children:`Complément`}),(0,C.jsx)(`a`,{href:`#complement-trinitaire-feminin`,children:`Complément trinitaire`}),(0,C.jsx)(`a`,{href:`#contre-folie`,children:`Contre-folie`}),(0,C.jsx)(`a`,{href:`#luce-irigaray`,children:`Irigaray`})]})]})]}),(0,C.jsxs)(`aside`,{className:`egliseStatus`,children:[(0,C.jsx)(`b`,{children:`Statut de la page`}),(0,C.jsx)(`p`,{children:`Cette exploration distingue la vidéo source, la transcription accessible, l’analyse thématique de la conférence et l’étude ecclésiologique élargie. Le propos n’est pas traité comme attaque personnelle contre le conférencier, mais comme symptôme local d’un champ historique et institutionnel plus vaste.`})]}),(0,C.jsxs)(`nav`,{className:`egliseToc`,"aria-label":`Sommaire de l'exploration`,children:[(0,C.jsx)(`a`,{href:`#transcription`,children:`Transcription`}),(0,C.jsx)(`a`,{href:`#analyse-video`,children:`Analyse de la vidéo`}),(0,C.jsx)(`a`,{href:`#etude-complete`,children:`Étude complète`}),(0,C.jsx)(`a`,{href:`#complement-contretraditions`,children:`Complément polémique et recherches contradictoires`}),(0,C.jsx)(`a`,{href:`#complement-trinitaire-feminin`,children:`Complément trinitaire / féminin divin`}),(0,C.jsx)(`a`,{href:`#contre-folie`,children:`Contre-folie`}),(0,C.jsx)(`a`,{href:`#luce-irigaray`,children:`Irigaray — Féminin, Nom et capture`}),(0,C.jsx)(`a`,{href:`#sources-et-references-a-integrer-sur-la-page`,children:`Sources`}),o.slice(0,16).map(e=>(0,C.jsx)(`a`,{href:`#${e.id}`,children:e.title.replace(/^\d+\.\s*/,``)},e.id)),s.map(e=>(0,C.jsx)(`a`,{href:`#${e.id}`,children:e.title.replace(/^I+V?X?\.\s*/,``)},e.id)),c.map(e=>(0,C.jsx)(`a`,{href:`#${e.id}`,children:e.title.replace(/^I+V?X?\.\s*/,``)},e.id)),l.map(e=>(0,C.jsx)(`a`,{href:`#${e.id}`,children:e.title.replace(/^\d+\.\s*/,``)},e.id)),u.map(e=>(0,C.jsx)(`a`,{href:`#${e.id}`,children:e.title.replace(/^\d+\.\s*/,``)},e.id))]}),(0,C.jsxs)(`section`,{id:`transcription`,className:`eglisePanel`,children:[(0,C.jsx)(`p`,{className:`egliseEyebrow`,children:`Texte accessible`}),(0,C.jsx)(`h2`,{children:`Transcription texte accessible`}),(0,C.jsx)(`p`,{className:`egliseIntro`,children:`Cette transcription permet de rendre le contenu de la vidéo consultable sans lecteur vidéo, accessible aux lecteurs d’écran et exploitable pour la lecture, la recherche et l’étude.`}),(0,C.jsxs)(`details`,{children:[(0,C.jsx)(`summary`,{children:`Afficher / masquer la transcription complète`}),(0,C.jsx)(mt,{markdown:t.transcript,compact:!0})]})]}),(0,C.jsxs)(`article`,{id:`analyse-video`,className:`eglisePanel`,children:[(0,C.jsx)(`span`,{id:`etude-complete`,className:`scrollAnchor`,"aria-hidden":`true`}),(0,C.jsx)(mt,{markdown:t.analysis})]}),(0,C.jsxs)(`article`,{id:`complement-contretraditions`,className:`eglisePanel egliseComplement`,children:[(0,C.jsx)(`p`,{className:`egliseEyebrow`,children:`Complément polémique et recherches contradictoires`}),(0,C.jsx)(`h2`,{children:`Les délires des religieux / Contre-traditions théologiques du corps`}),(0,C.jsx)(`aside`,{className:`egliseEditorialNote`,children:`Ce texte critique des formes de discours religieux et clérical. Il ne vise pas les personnes consacrées en tant que telles, ni la vie religieuse comme vocation. Il analyse des dérives de langage, de pouvoir, de compétence et d’emprise symbolique.`}),(0,C.jsx)(mt,{markdown:n})]}),(0,C.jsxs)(`article`,{id:`complement-trinitaire-feminin`,className:`eglisePanel egliseComplement egliseTrinitarian`,children:[(0,C.jsx)(`p`,{className:`egliseEyebrow`,children:`Complément III · T^ × Q^ × MCPP^ × MNL^`}),(0,C.jsx)(`h2`,{children:`Lecture trinitaire, féminin divin et morphogénétique du désir`}),(0,C.jsx)(`aside`,{className:`egliseEditorialNote`,children:`Cette troisième partie déplace la critique vers une exploration théologique plus profonde : Trinité, relation, féminin divin, corps, désir, parole, lumière, nuit, matière et champ morphogénétique.`}),(0,C.jsx)(mt,{markdown:r})]}),(0,C.jsxs)(`article`,{id:`contre-folie`,className:`eglisePanel egliseComplement egliseCounterMadness`,children:[(0,C.jsx)(`p`,{className:`egliseEyebrow`,children:`Encart spécial`}),(0,C.jsx)(mt,{markdown:i.short}),(0,C.jsxs)(`details`,{children:[(0,C.jsx)(`summary`,{children:`Lire l'analyse complète et les références`}),(0,C.jsx)(mt,{markdown:i.development}),(0,C.jsx)(mt,{markdown:i.conclusion})]})]}),(0,C.jsxs)(`article`,{id:`luce-irigaray`,className:`eglisePanel egliseComplement egliseIrigaray`,children:[(0,C.jsx)(`span`,{id:`irigaray-feminin-nom-capture`,className:`scrollAnchor`,"aria-hidden":`true`}),(0,C.jsx)(`p`,{className:`egliseEyebrow`,children:`Complément V · Luce Irigaray`}),(0,C.jsx)(mt,{markdown:a.short}),(0,C.jsxs)(`figure`,{className:`articleHeroFigure irigarayFigure`,children:[(0,C.jsx)(`a`,{href:it,target:`_blank`,rel:`noreferrer`,"aria-label":`Ouvrir l'affiche Luce Irigaray en haute définition`,children:(0,C.jsx)(`img`,{src:it,alt:`Affiche conceptuelle Luce Irigaray, féminin divin et contre-capture`,loading:`lazy`})}),(0,C.jsx)(`figcaption`,{children:`Luce Irigaray — féminin divin, corps, parole, différence et critique de la capture masculine du divin.`})]}),(0,C.jsxs)(`details`,{children:[(0,C.jsx)(`summary`,{children:`Lire l'analyse complète et les sources`}),(0,C.jsx)(mt,{markdown:a.development})]})]}),(0,C.jsx)(`article`,{id:`sources-et-references-a-integrer-sur-la-page`,className:`eglisePanel`,children:(0,C.jsx)(mt,{markdown:t.sources})})]}),(0,C.jsx)(`style`,{children:`
        .egliseHero {
          display: grid;
          gap: clamp(1.2rem, 2.4vw, 2rem);
          align-items: center;
          border: 1px solid rgba(216, 182, 106, 0.24);
          border-radius: 30px;
          background:
            radial-gradient(circle at top left, rgba(216, 182, 106, 0.12), transparent 34%),
            radial-gradient(circle at 90% 12%, rgba(77, 111, 145, 0.16), transparent 34%),
            rgba(5, 8, 18, 0.86);
          padding: clamp(1rem, 2vw, 1.5rem);
          box-shadow: 0 28px 110px rgba(0, 0, 0, 0.38);
        }
        @media (min-width: 980px) {
          .egliseHero { grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr); }
        }
        .egliseVideoFrame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.12);
          background: #05070b;
        }
        .egliseVideoFrame iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
        .egliseHeroCopy { max-width: 640px; }
        .egliseEyebrow {
          margin: 0 0 0.8rem;
          color: #d8b66a;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-size: 0.76rem;
          font-weight: 800;
        }
        .egliseHero h1 {
          margin: 0;
          font-size: clamp(2.3rem, 5vw, 4.6rem);
          line-height: 0.96;
          color: #f4efe4;
        }
        .egliseHero p,
        .egliseIntro,
        .egliseStatus p {
          color: rgba(244, 239, 228, 0.78);
          line-height: 1.75;
        }
        .egliseBadges,
        .egliseActions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 1.2rem;
        }
        .egliseBadges span,
        .egliseActions a,
        .egliseToc a {
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 999px;
          background: rgba(255,255,255,0.045);
          color: rgba(244, 239, 228, 0.88);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 700;
        }
        .egliseBadges span { padding: 0.42rem 0.72rem; }
        .egliseActions a,
        .egliseToc a { padding: 0.62rem 0.9rem; }
        .egliseActions a:hover,
        .egliseToc a:hover { border-color: rgba(216, 182, 106, 0.42); color: #fff3c4; }
        .egliseStatus,
        .eglisePanel {
          border: 1px solid rgba(255,255,255,0.11);
          border-radius: 28px;
          background: rgba(5, 8, 18, 0.68);
          padding: clamp(1.2rem, 3vw, 2.2rem);
        }
        .egliseComplement {
          border-color: rgba(216, 182, 106, 0.22);
          background:
            radial-gradient(circle at 14% 0%, rgba(216, 182, 106, 0.09), transparent 34%),
            radial-gradient(circle at 88% 18%, rgba(200, 107, 90, 0.11), transparent 34%),
            rgba(5, 8, 18, 0.72);
        }
        .egliseEditorialNote {
          max-width: 76ch;
          margin: 1rem auto 2rem;
          border: 1px solid rgba(216, 182, 106, 0.22);
          border-left: 3px solid rgba(216, 182, 106, 0.68);
          border-radius: 20px;
          background: rgba(216, 182, 106, 0.055);
          padding: 1rem 1.2rem;
          color: rgba(255, 243, 196, 0.86);
          line-height: 1.7;
        }
        .egliseStatus b { color: #f4efe4; font-size: 1.08rem; }
        .egliseTrinitarian {
          border-color: rgba(142, 177, 255, 0.24);
          background:
            radial-gradient(circle at 12% 0%, rgba(142, 177, 255, 0.12), transparent 34%),
            radial-gradient(circle at 88% 16%, rgba(216, 182, 106, 0.11), transparent 34%),
            radial-gradient(circle at 48% 100%, rgba(200, 107, 90, 0.08), transparent 36%),
            rgba(5, 8, 18, 0.74);
        }
        .egliseCounterMadness {
          border-color: rgba(216, 182, 106, 0.32);
          background:
            radial-gradient(circle at 18% 0%, rgba(216, 182, 106, 0.14), transparent 32%),
            radial-gradient(circle at 92% 12%, rgba(77, 111, 145, 0.14), transparent 34%),
            linear-gradient(145deg, rgba(7, 10, 18, 0.9), rgba(12, 13, 21, 0.78));
        }
        .egliseCounterMadness > .egliseMarkdown:first-of-type {
          max-width: 82ch;
        }
        .egliseCounterMadness > .egliseMarkdown:first-of-type blockquote {
          border-left-color: rgba(216, 182, 106, 0.72);
          background: rgba(216, 182, 106, 0.08);
          font-size: clamp(1.02rem, 1.4vw, 1.18rem);
        }
        .egliseIrigaray {
          border-color: rgba(200, 107, 145, 0.28);
          background:
            radial-gradient(circle at 12% 0%, rgba(200, 107, 145, 0.14), transparent 34%),
            radial-gradient(circle at 86% 10%, rgba(216, 182, 106, 0.10), transparent 34%),
            radial-gradient(circle at 55% 100%, rgba(142, 177, 255, 0.08), transparent 36%),
            rgba(7, 8, 18, 0.78);
        }
        .egliseIrigaray > .egliseMarkdown:first-of-type {
          max-width: 82ch;
        }
        .egliseIrigaray > .egliseMarkdown:first-of-type blockquote {
          border-left-color: rgba(200, 107, 145, 0.76);
          background: rgba(200, 107, 145, 0.08);
          color: rgba(255, 234, 242, 0.9);
          font-size: clamp(1.02rem, 1.4vw, 1.18rem);
        }
        .articleHeroFigure.irigarayFigure {
          max-width: 1180px;
          margin: 1.2rem auto 1.8rem;
          border-radius: 26px;
        }
        .articleHeroFigure.irigarayFigure a {
          display: block;
          overflow: hidden;
          border: 1px solid rgba(216, 182, 106, 0.32);
          border-radius: 26px;
          background: rgba(2, 5, 13, 0.72);
          box-shadow: 0 28px 80px rgba(0, 0, 0, 0.34);
        }
        .articleHeroFigure.irigarayFigure img {
          display: block;
          width: 100%;
          height: auto;
          max-height: 760px;
          object-fit: contain;
          object-position: center;
          background: #05070b;
        }
        .articleHeroFigure.irigarayFigure figcaption {
          margin-top: 0.85rem;
          text-align: center;
          font-size: 0.92rem;
          line-height: 1.5;
          color: rgba(245, 232, 197, 0.82);
          letter-spacing: 0.02em;
        }
        .egliseToc {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          border: 1px solid rgba(216, 182, 106, 0.18);
          border-radius: 24px;
          background: rgba(2, 5, 13, 0.62);
          padding: 1rem;
        }
        .eglisePanel details {
          margin-top: 1rem;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(2, 5, 13, 0.42);
          padding: 1rem;
        }
        .eglisePanel summary {
          cursor: pointer;
          color: #fff3c4;
          font-weight: 800;
        }
        .egliseMarkdown {
          max-width: 76ch;
          margin-inline: auto;
          color: rgba(244, 239, 228, 0.82);
        }
        .scrollAnchor { display: block; position: relative; top: -90px; }
        .egliseMarkdown.compact { max-width: 82ch; }
        .egliseMarkdown h2 {
          margin: 2.4rem 0 1rem;
          color: #f4efe4;
          font-size: clamp(1.7rem, 3vw, 2.5rem);
          line-height: 1.08;
        }
        .egliseMarkdown h3 {
          margin: 1.8rem 0 0.75rem;
          color: #d8b66a;
          font-size: clamp(1.2rem, 2vw, 1.55rem);
          line-height: 1.18;
        }
        .egliseMarkdown p,
        .egliseMarkdown li,
        .egliseMarkdown blockquote {
          font-size: 1rem;
          line-height: 1.82;
        }
        .egliseMarkdown p { margin: 0 0 1rem; }
        .egliseMarkdown strong { color: #f4efe4; font-weight: 800; }
        .egliseMarkdown code {
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 0.4rem;
          background: rgba(255,255,255,0.06);
          padding: 0.08rem 0.32rem;
          color: #fff3c4;
        }
        .egliseMarkdown a { color: #9bdcff; overflow-wrap: anywhere; }
        .egliseMarkdown ul { display: grid; gap: 0.5rem; padding-left: 1.2rem; }
        .egliseMarkdown blockquote {
          margin: 1.2rem 0;
          border-left: 3px solid rgba(216, 182, 106, 0.46);
          border-radius: 18px;
          background: rgba(216, 182, 106, 0.06);
          padding: 1rem 1.2rem;
          color: rgba(255, 243, 196, 0.86);
        }
        @media (max-width: 720px) {
          .egliseHero,
          .eglisePanel,
          .egliseStatus { border-radius: 22px; }
          .egliseToc { max-height: 260px; overflow: auto; }
          .egliseMarkdown { max-width: 100%; }
        }
      `})]})}function gt(e){return e?new Intl.DateTimeFormat(`fr-FR`,{day:`2-digit`,month:`short`,year:`numeric`}).format(new Date(e)):``}function _t(e){let t=`/T/theo/`.replace(/\/$/,``),n=String(e||``).replace(/^\/+/,``),r=n===`gallery`?`images`:n;return r?`${t}/#/${r}`:`${t}/`}function vt(e){return e?/^(https?:|data:|\/)/.test(e)?e:`/T/theo/${e.replace(/^\//,``)}`:``}function yt({title:e}){return(0,C.jsxs)(`svg`,{viewBox:`0 0 520 292`,role:`img`,"aria-label":`Image abstraite pour ${e}`,className:`card-media h-full`,children:[(0,C.jsx)(`rect`,{width:`520`,height:`292`,fill:`#05070d`}),(0,C.jsx)(`circle`,{cx:`390`,cy:`76`,r:`136`,fill:`#8ab4f8`,opacity:`0.11`}),(0,C.jsx)(`circle`,{cx:`116`,cy:`230`,r:`108`,fill:`#d6b36a`,opacity:`0.09`}),(0,C.jsx)(`path`,{d:`M70 206C132 148 190 172 246 112C302 52 378 68 452 38`,fill:`none`,stroke:`#d6b36a`,strokeOpacity:`0.58`,strokeWidth:`3`}),(0,C.jsx)(`path`,{d:`M84 92H432M84 132H360M84 172H404M84 212H318`,stroke:`#f4efe4`,strokeOpacity:`0.18`,strokeWidth:`8`,strokeLinecap:`round`}),(0,C.jsx)(`rect`,{x:`56`,y:`58`,width:`408`,height:`178`,rx:`28`,fill:`none`,stroke:`#f4efe4`,strokeOpacity:`0.16`})]})}function bt({exploration:e,onRead:t}){let n=`explorations/${e.slug}`;return(0,C.jsxs)(`article`,{className:`group flex min-h-[260px] flex-col justify-between rounded-[28px] border border-sky-200/10 bg-slate-950/[0.52] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 hover:border-cyan-100/24 hover:bg-slate-950/[0.66] hover:shadow-[0_0_26px_rgba(86,162,205,0.1)]`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`a`,{href:_t(n),onClick:n=>{n.preventDefault(),t(e.slug)},className:`card-media-link mb-5 aspect-video`,"aria-label":`Lire l’exploration ${e.title}`,children:e.image?(0,C.jsx)(`img`,{src:vt(e.image),alt:e.imageAlt||e.title,loading:`lazy`,className:`card-media h-full`}):(0,C.jsx)(yt,{title:e.title})}),(0,C.jsxs)(`div`,{className:`mb-4 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em]`,children:[(0,C.jsx)(`span`,{className:`rounded-full border border-cyan-100/16 bg-cyan-100/8 px-2.5 py-1 text-cyan-100/76`,children:e.status}),e.category&&(0,C.jsx)(`span`,{className:`rounded-full border border-amber-100/14 bg-amber-100/[0.06] px-2.5 py-1 text-amber-100/72`,children:e.category}),(0,C.jsx)(`span`,{className:`text-slate-400/80`,children:gt(e.date)})]}),(0,C.jsx)(`h3`,{className:`m-0 text-xl font-semibold leading-7 text-slate-50`,children:e.title}),(0,C.jsx)(`p`,{className:`mt-4 text-sm leading-7 text-slate-300/76`,children:e.summary}),(0,C.jsx)(`div`,{className:`mt-5 flex flex-wrap gap-2`,children:e.tags.map(e=>(0,C.jsx)(`span`,{className:`rounded-full border border-sky-200/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-300/72`,children:e},e))})]}),(0,C.jsx)(`button`,{type:`button`,onClick:()=>t(e.slug),className:`mt-7 w-fit rounded-full border border-cyan-100/20 bg-cyan-100/8 px-4 py-2 text-sm font-bold text-cyan-50 transition hover:border-cyan-100/38 hover:bg-cyan-100/12`,children:`Lire l'exploration`})]})}function xt({exploration:e,navigate:t}){return e.slug===`kogi-choix-du-vivant`||e.slug===`kogi-le-choix-du-vivant`?(0,C.jsx)(Ft,{exploration:e,navigate:t}):e.slug===`langlois-bible-technologies`?(0,C.jsx)(E,{navigate:t}):e.slug===`romer-origine-bible`?(0,C.jsx)(Xe,{navigate:t}):e.slug===`romer-bible-obscure`?(0,C.jsx)(Ie,{navigate:t}):e.slug===`eglise-laique-vs-eglise-clericale`?(0,C.jsx)(ht,{navigate:t}):(0,C.jsx)(`section`,{className:`w-full overflow-x-hidden px-4 py-6 text-slate-100 sm:px-6 lg:px-10`,children:(0,C.jsxs)(`div`,{className:`mx-auto w-full max-w-5xl`,children:[(0,C.jsx)(`button`,{type:`button`,onClick:()=>t(`explorations`),className:`mb-6 rounded-full border border-sky-200/14 bg-slate-950/50 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-100/28`,children:`Retour aux explorations`}),(0,C.jsxs)(`article`,{className:`rounded-[34px] border border-sky-200/10 bg-[radial-gradient(circle_at_70%_20%,rgba(91,134,164,0.14),transparent_34%),linear-gradient(135deg,rgba(7,13,27,0.86),rgba(2,5,13,0.96))] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.36)] sm:p-9 lg:p-12`,children:[(0,C.jsx)(`p`,{className:`mb-4 text-xs font-bold uppercase tracking-[0.34em] text-cyan-100/64`,children:`Exploration`}),(0,C.jsx)(`h1`,{className:`m-0 text-4xl font-semibold tracking-[0.08em] text-amber-100 sm:text-5xl`,children:e.title}),(0,C.jsxs)(`div`,{className:`mt-5 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]`,children:[(0,C.jsx)(`span`,{className:`rounded-full border border-cyan-100/16 bg-cyan-100/8 px-3 py-1 text-cyan-100/76`,children:e.status}),(0,C.jsx)(`span`,{className:`text-slate-400/80`,children:gt(e.date)})]}),(0,C.jsx)(`p`,{className:`mt-8 max-w-3xl text-lg leading-9 text-slate-300/82`,children:e.summary}),(0,C.jsx)(`div`,{className:`mt-8 flex flex-wrap gap-2`,children:e.tags.map(e=>(0,C.jsx)(`span`,{className:`rounded-full border border-sky-200/10 bg-slate-950/42 px-3 py-1.5 text-sm text-slate-300/76`,children:e},e))}),(0,C.jsx)(`div`,{className:`mt-10 rounded-[24px] border border-sky-200/10 bg-slate-950/44 p-5 text-sm leading-7 text-slate-300/74`,children:`Cette page detail est preparee pour accueillir un essai long, ses sections, ses images, ses sources et ses fragments. Le contenu complet sera ajoute dans une prochaine etape.`})]})]})})}var St=[{title:`Introduction`,body:`Les Kogi, ou Kággaba, sont un peuple autochtone de la Sierra Nevada de Santa Marta, en Colombie. Leur monde ne sépare pas territoire, spiritualité, écologie, mémoire, soin et obligations : ces dimensions forment un même tissu relationnel, tenu par des pratiques, des récits, des sites et des responsabilités.`},{title:`Le territoire vivant`,body:`La Sierra Nevada se comprend comme organisme-monde : montagnes, rivières, forêts, sites sacrés, lignes invisibles, chemins, lieux de mémoire et obligations y composent une matrice relationnelle. Le territoire n’est pas une ressource extérieure ; il est portance, dette, mémoire et condition de relation.`},{title:`Aluna`,body:`Aluna peut être approché comme champ-mémoire génératif : pensée, reliance, mémoire et monde subtil antérieur à la manifestation visible. Aluna désigne le champ antérieur où la relation précède la forme.`},{title:`Sé / Loi d’Origine`,body:`Sé renvoie à un registre invisible et originaire, non-créé, lié à la Loi d’Origine. Sé n’est pas seulement une croyance : c’est une structure d’obligation entre humains, non-humains, territoire et monde spirituel.`},{title:`Mamos et Sagas`,body:`Les Mamos sont des hommes de connaissance ; les Sagas sont des femmes de connaissance. Ils et elles assurent la médiation rituelle, territoriale et spirituelle, sans que les Sagas soient réduites à un arrière-plan : elles participent pleinement à la tenue du monde relationnel.`},{title:`Reliance avant identité`,body:`La reliance précède l’identité. L’identité n’est pas première ; elle est stabilisation locale d’un tissu relationnel antérieur. Une configuration existe comme nœud provisoire d’obligations, non comme substance isolée.`},{title:`Altérité radicale`,body:`L’altérité est multi-régime : humaine, non humaine, territoriale, spirituelle, sonore, matérielle, visionnaire. L’autre ne se réduit jamais à mon régime d’accès : montagne, rivière, forêt, site sacré, silence, parole, vision et territoire gardent une part non appropriable.`}],Ct=[{title:`Régime féminin — stratégie silencieuse`,formula:`SE → NE → NU → LANG`,items:[[`SE`,`invisible / non-créé / obscurité`],[`NE`,`diversité des formes et des disciplines`],[`NU`,`essence de tout ce qui existe`],[`LANG`,`sons / bruit / réserve sonore`]]},{title:`Régime masculin — communication vibratoire`,formula:`MUL → DI → GABA → SHI → ZHA`,items:[[`MUL`,`principe du mouvement`],[`DI`,`vibration`],[`GABA`,`connexions invisibles`],[`SHI`,`connaissance des connexions`],[`ZHA`,`analyse des visions`]]}],wt=[[`Altérité`,`attraction / rétroaction`],[`Interdépendance`,`apoptose`],[`Sens`,`homéostasie`],[`Communication`,`signalisation cellulaire`],[`Valeurs`,`endosymbiose`],[`Cadre`,`régulation trophique`],[`Créativité`,`biomimétisme`],[`Temps`,`plasticité neuronale`],[`Transmission`,`mémoire cellulaire`]],Tt=[[`Nox`,`altérité, profondeur relationnelle, mémoire, temps, non-capture, réserve sonore.`],[`Materia`,`diversité des formes, cadre relationnel, mouvement, régulation, portance vivante.`],[`Lux`,`sens communicable, connaissance des connexions, vision analysée, créativité, manifestation, transmission.`]],Et=[[`LANG`,`Phono latent : son-source, bruit originaire, silence chargé, vibration non encore émise.`],[`DI`,`Phono actualisé : vibration, mouvement communicable, passage vers matière et vision.`]];function Dt({src:e,alt:t,eyebrow:n,title:r,caption:i,mode:a=`cover`}){return(0,C.jsxs)(`figure`,{className:`overflow-hidden rounded-[30px] border border-sky-200/10 bg-[radial-gradient(circle_at_70%_18%,rgba(83,154,184,0.12),transparent_38%),rgba(2,6,18,0.58)] p-3 shadow-[0_24px_90px_rgba(0,0,0,0.3)] sm:p-4`,children:[(0,C.jsx)(`div`,{className:`overflow-hidden rounded-[24px] border border-sky-200/10 bg-slate-950/72`,children:(0,C.jsx)(`img`,{src:e,alt:t,className:`w-full ${a===`contain`?`max-h-[720px] object-contain`:`aspect-[16/7] object-cover`} opacity-90 saturate-[0.88]`})}),(0,C.jsxs)(`figcaption`,{className:`px-2 py-4 sm:px-3`,children:[(0,C.jsx)(`p`,{className:`text-[11px] font-bold uppercase tracking-[0.22em] text-cyan-100/54`,children:n}),(0,C.jsx)(`h2`,{className:`mt-2 text-xl font-semibold text-slate-50`,children:r}),(0,C.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-300/72`,children:i})]})]})}function Ot({eyebrow:e,title:t,intro:n,paragraphs:r,accent:i=`cyan`}){return(0,C.jsxs)(`section`,{className:`rounded-[32px] border border-sky-200/10 bg-[radial-gradient(circle_at_20%_0%,rgba(66,131,162,0.1),transparent_38%),linear-gradient(135deg,rgba(3,8,20,0.78),rgba(2,5,13,0.92))] p-5 shadow-[0_26px_90px_rgba(0,0,0,0.28)] sm:p-7 lg:p-9`,children:[(0,C.jsxs)(`div`,{className:`mb-7 max-w-3xl`,children:[(0,C.jsx)(`p`,{className:`text-xs font-bold uppercase tracking-[0.26em] ${i===`amber`?`text-amber-100/66`:`text-cyan-100/58`}`,children:e}),(0,C.jsx)(`h2`,{className:`mt-3 text-2xl font-semibold tracking-[0.02em] text-slate-50 sm:text-3xl`,children:t}),(0,C.jsx)(`p`,{className:`mt-3 text-sm leading-7 text-slate-300/70`,children:n})]}),(0,C.jsx)(`div`,{className:`lg:columns-2 lg:gap-12`,children:r.map((e,t)=>(0,C.jsx)(`p`,{className:`mb-5 break-inside-avoid text-[15px] leading-8 text-slate-200/78 [text-wrap:pretty]`,children:e},`${e.slice(0,32)}-${t}`))})]})}var kt=[[`17 mars 2026`,`Argentine hors OMS`,`L’Argentine officialise sa sortie de l’OMS, dans une logique de souveraineté sanitaire et de coopération hors cadre OMS.`],[`1er mai 2026`,`PABS prolongé`,`L’OMS annonce que les négociations sur l’annexe Pathogen Access and Benefit Sharing du traité pandémie doivent être prolongées.`],[`2 mai 2026`,`Notification du cluster MV Hondius`,`L’OMS reçoit notification d’un cluster de maladies respiratoires sévères à bord du MV Hondius, navire d’expédition parti d’Argentine.`],[`7 mai 2026`,`Conversion politique IHR`,`Tedros Adhanom Ghebreyesus présente l’affaire comme une démonstration de l’utilité des International Health Regulations : l’événement montre pourquoi ils existent et comment ils fonctionnent.`],[`13 mai 2026`,`Risque faible, dispositif lourd`,`L’OMS rapporte 11 cas, dont 8 confirmés Andes virus, 2 probables, 1 inconclusif et 3 décès, tout en évaluant le risque global comme faible.`]],O=[[`Incident réel`,`Un cluster Andes virus lié à un navire parti d’Argentine. Les cas, les décès et la gravité clinique constituent le noyau factuel.`],[`Amplification spatiale`,`Le navire devient une miniature du monde globalisé : passagers de nombreux pays, circulation transfrontalière, incubation longue, rapatriements internationaux.`],[`Dispositif anxiogène`,`Quarantaines, experts, procédures, vols spéciaux, isolements, tests et notifications internationales produisent une scène de haute intensité.`],[`Discours rassurant`,`Le risque global est présenté comme faible, la situation comme maîtrisée, sans menace comparable au Covid.`],[`Conversion institutionnelle`,`L’OMS transforme l’affaire en preuve de la nécessité des règlements sanitaires internationaux.`],[`Arrière-plan politique`,`L’Argentine vient de quitter l’OMS ; le traité pandémie reste bloqué sur PABS. Le cas devient politiquement très lisible.`]],At=[[`OMS — Disease Outbreak News, 13 mai 2026`,`https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON601`],[`OMS — Disease Outbreak News, 8 mai 2026`,`https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON600`],[`OMS — Rapid Risk Assessment, 17 mai 2026`,`https://www.who.int/publications/m/item/who-rapid-risk-assessment---hantavirus-outbreak-caused-by-andes-virus--global-v.2`],[`OMS — Discours de Tedros, 7 mai 2026`,`https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-media-briefing---7-may-2026`],[`OMS — Discours de Tedros, 12 mai 2026`,`https://www.who.int/news-room/speeches/item/who-director-general-s-opening-remarks-at-the-media-briefing-on-hantavirus---12-may-2026`],[`OMS — Prolongation des négociations PABS, 1er mai 2026`,`https://www.who.int/news/item/01-05-2026-who-member-states-agree-to-extend-negotiations-on-pathogen-access-and-benefit-sharing-annex`],[`Commission européenne — Hantavirus outbreak`,`https://health.ec.europa.eu/health-security-and-infectious-diseases/crisis-management/hantavirus-outbreak_en`],[`CDC — Update on hantavirus outbreak linked to MV Hondius`,`https://www.cdc.gov/media/releases/2026/2026-cdc-provides-update-on-hantavirus-outbreak-linked-to-m-v-hondius-cruise-ship.html`],[`CDC — Andes Virus Public Health Investigation`,`https://www.cdc.gov/hantavirus/media/pdfs/2026/05/Andes-Virus-Guidancet_May14.pdf`],[`HUG Genève — Identification de l’Andes virus`,`https://www.hug.ch/en/medias/press-release/hantavirus-outbreak-cruise-ship-geneva-university-hospital-have-identified`],[`Virological — Preliminary analysis of Andes virus sequences`,`https://virological.org/t/preliminary-analysis-of-orthohantavirus-andesense-virus-sequences-from-a-cruise-ship-related-cluster-may-2026/1029`],[`Pathoplexus — Andes virus sequences`,`https://pathoplexus.org/news/2026-05-11-andes-virus`],[`Al Jazeera — Argentina officially withdraws from WHO`,`https://www.aljazeera.com/news/2026/3/17/argentina-officially-withdraws-from-world-health-organization-following-us`],[`Reuters — Hantavirus-hit cruise ship due to arrive at Rotterdam`,`https://www.reuters.com/business/healthcare-pharmaceuticals/hantavirus-hit-cruise-ship-due-arrive-rotterdam-port-final-destination-2026-05-18/`],[`Vidéo source — Professeur Christian Perronne`,`https://youtu.be/T1mOYLM01-Y?is=0AGNF51xVgJCMAyM`]],jt=[[`OMS - How WHO is funded`,`https://www.who.int/about/funding`],[`OMS - Assessed contributions`,`https://www.who.int/about/funding/assessed-contributions`],[`OMS - Investment Round FAQ`,`https://www.who.int/about/funding/invest-in-who/investment-round/frequently-asked-questions`],[`Gavi - The Gates Foundation`,`https://www.gavi.org/investing-gavi/funding/donor-profiles/gates-foundation`],[`Reuters - Gates Foundation commits $1.6 billion to Gavi`,`https://www.reuters.com/business/healthcare-pharmaceuticals/gates-foundation-commit-16-billion-gavi-vaccine-alliance-2025-06-24/`]];function Mt({section:e,index:t}){return(0,C.jsxs)(`section`,{id:e.id,className:`scroll-mt-8 rounded-[30px] border border-sky-200/10 bg-slate-950/[0.44] p-5 sm:p-7`,children:[(0,C.jsx)(`p`,{className:`text-xs font-bold uppercase tracking-[0.24em] text-cyan-100/58`,children:`Ce que dit Perronne`}),(0,C.jsxs)(`h2`,{className:`mt-3 text-2xl font-semibold leading-tight text-slate-50`,children:[(0,C.jsx)(`span`,{className:`mr-3 text-cyan-100/48`,children:String(t+1).padStart(2,`0`)}),e.title]}),(0,C.jsx)(`div`,{className:`mt-5 grid gap-4`,children:e.body.map(e=>(0,C.jsx)(`p`,{className:`text-sm leading-7 text-slate-300/80`,children:e},e.slice(0,56)))}),e.bullets&&(0,C.jsx)(`div`,{className:`mt-5 grid gap-2 md:grid-cols-2`,children:e.bullets.map(e=>(0,C.jsx)(`div`,{className:`rounded-[18px] border border-sky-200/10 bg-slate-950/42 px-4 py-3 text-sm leading-6 text-slate-300/78`,children:e},e))}),e.grid&&(0,C.jsx)(`div`,{className:`mt-5 grid gap-3 md:grid-cols-2`,children:e.grid.map(([e,t])=>(0,C.jsxs)(`div`,{className:`rounded-[20px] border border-cyan-100/12 bg-cyan-100/[0.045] p-4 text-sm leading-6 text-slate-200/86`,children:[(0,C.jsx)(`span`,{className:`font-semibold text-cyan-100`,children:e}),(0,C.jsx)(`span`,{className:`mx-2 text-cyan-100/46`,children:`->`}),(0,C.jsx)(`span`,{children:t})]},`${e}-${t}`))}),e.subsections&&(0,C.jsx)(`div`,{className:`mt-5 grid gap-4`,children:e.subsections.map(e=>(0,C.jsxs)(`div`,{className:`rounded-[24px] border border-amber-100/14 bg-[radial-gradient(circle_at_14%_0%,rgba(189,155,87,0.12),transparent_40%),rgba(4,8,20,0.58)] p-5`,children:[(0,C.jsx)(`h3`,{className:`m-0 text-lg font-semibold text-amber-100`,children:e.title}),(0,C.jsx)(`div`,{className:`mt-4 grid gap-3`,children:e.body.map(e=>(0,C.jsx)(`p`,{className:`text-sm leading-7 text-slate-300/80`,children:e},e.slice(0,56)))})]},e.title))}),e.quote&&(0,C.jsxs)(`blockquote`,{className:`mt-5 rounded-[22px] border border-amber-100/16 bg-amber-100/[0.055] p-4 text-lg font-semibold leading-8 text-amber-50/90`,children:[`“`,e.quote,`”`]})]})}var Nt={slug:`hantavirus-hondius-oms`,title:`MV Hondius / Hantavirus / OMS`,summary:`Un cluster reel, rare et grave devient une scene de legitimation institutionnelle : risque officiellement faible, dispositif maximal, communication rassurante et conversion politique immediate.`,tags:[`OMS`,`Hantavirus`,`Andes virus`,`MV Hondius`,`Argentine`,`Traite pandemie`,`PABS`],status:`Actu critique`,category:`Geopolitique sanitaire`,date:`2026-05-18`};function Pt({exploration:e=Nt,navigate:t,backRoute:n=`actus`,backLabel:r=`Retour aux actus`}){return(0,C.jsx)(`section`,{className:`w-full overflow-x-hidden px-4 py-6 text-slate-100 sm:px-6 lg:px-10`,children:(0,C.jsxs)(`div`,{className:`mx-auto flex w-full max-w-6xl flex-col gap-6`,children:[(0,C.jsx)(`button`,{type:`button`,onClick:()=>t(n),className:`w-fit rounded-full border border-sky-200/14 bg-slate-950/50 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-100/28`,children:r}),(0,C.jsxs)(`article`,{className:`overflow-hidden rounded-[34px] border border-sky-200/10 bg-[radial-gradient(circle_at_76%_12%,rgba(91,134,164,0.16),transparent_34%),radial-gradient(circle_at_16%_76%,rgba(189,155,87,0.08),transparent_34%),linear-gradient(135deg,rgba(7,13,27,0.92),rgba(2,5,13,0.98))] shadow-[0_30px_120px_rgba(0,0,0,0.4)]`,children:[(0,C.jsxs)(`header`,{className:`relative p-6 sm:p-9 lg:p-12`,children:[(0,C.jsx)(`div`,{className:`pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(130,180,230,0.036)_1px,transparent_1px),linear-gradient(90deg,rgba(130,180,230,0.036)_1px,transparent_1px)] bg-[size:46px_46px] opacity-55`}),(0,C.jsxs)(`div`,{className:`relative max-w-5xl`,children:[(0,C.jsx)(`p`,{className:`mb-4 text-xs font-bold uppercase tracking-[0.34em] text-cyan-100/64`,children:`Enquête critique`}),(0,C.jsx)(`h1`,{className:`m-0 text-4xl font-semibold leading-tight tracking-[0.02em] text-amber-100 sm:text-5xl`,children:`MV Hondius / Hantavirus / OMS — Enquête sur une panique rassurante`}),(0,C.jsx)(`p`,{className:`mt-6 max-w-4xl text-lg leading-8 text-slate-300/82`,children:`Un cluster réel, rare et grave devient une scène de légitimation institutionnelle : risque officiellement faible, dispositif maximal, communication rassurante et conversion politique immédiate.`}),(0,C.jsxs)(`div`,{className:`mt-6 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]`,children:[(0,C.jsx)(`span`,{className:`rounded-full border border-cyan-100/16 bg-cyan-100/8 px-3 py-1 text-cyan-100/76`,children:e.status}),(0,C.jsx)(`span`,{className:`rounded-full border border-amber-100/14 bg-amber-100/[0.06] px-3 py-1 text-amber-100/72`,children:e.category}),(0,C.jsx)(`span`,{className:`text-slate-400/80`,children:gt(e.date)})]}),(0,C.jsx)(`div`,{className:`mt-6 flex flex-wrap gap-2`,children:e.tags.map(e=>(0,C.jsx)(`span`,{className:`rounded-full border border-sky-200/10 bg-slate-950/42 px-3 py-1.5 text-sm text-slate-300/76`,children:e},e))})]})]}),(0,C.jsxs)(`div`,{className:`flex flex-col gap-6 border-t border-sky-200/10 p-5 sm:p-7 lg:p-9`,children:[(0,C.jsxs)(`section`,{className:`grid gap-5 lg:grid-cols-[1.2fr_0.8fr]`,children:[(0,C.jsxs)(`div`,{className:`rounded-[30px] border border-sky-200/10 bg-slate-950/[0.5] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.32)] sm:p-5`,children:[(0,C.jsx)(`div`,{className:`overflow-hidden rounded-[24px] border border-sky-200/12 bg-slate-950 shadow-[0_0_34px_rgba(78,150,190,0.1)]`,children:(0,C.jsx)(`div`,{className:`aspect-video`,children:(0,C.jsx)(`iframe`,{className:`h-full w-full`,src:`https://www.youtube.com/embed/T1mOYLM01-Y`,title:`Professeur Perronne — MV Hondius, hantavirus et OMS`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,allowFullScreen:!0})})}),(0,C.jsxs)(`div`,{className:`mt-4 flex flex-wrap items-center justify-between gap-3`,children:[(0,C.jsx)(`p`,{className:`m-0 text-sm leading-6 text-slate-300/72`,children:`Vidéo source intégrée comme pièce du dossier : elle est traitée ici comme parole critique, non comme preuve suffisante.`}),(0,C.jsx)(`a`,{href:`https://youtu.be/T1mOYLM01-Y?is=0AGNF51xVgJCMAyM`,target:`_blank`,rel:`noreferrer`,className:`rounded-full border border-cyan-100/22 bg-cyan-100/[0.08] px-4 py-2 text-sm font-bold text-cyan-50 transition hover:border-cyan-100/38 hover:bg-cyan-100/[0.12]`,children:`Voir la vidéo source`})]})]}),(0,C.jsxs)(`aside`,{className:`rounded-[30px] border border-amber-100/14 bg-[radial-gradient(circle_at_84%_0%,rgba(189,155,87,0.11),transparent_40%),rgba(2,6,18,0.58)] p-5 sm:p-6`,children:[(0,C.jsx)(`p`,{className:`text-xs font-bold uppercase tracking-[0.24em] text-amber-100/68`,children:`Formule centrale`}),(0,C.jsx)(`blockquote`,{className:`mt-5 border-l border-amber-100/26 pl-5 text-3xl font-semibold leading-tight text-amber-50 sm:text-4xl`,children:`paniquer en rassurant`}),(0,C.jsx)(`p`,{className:`mt-5 text-sm leading-7 text-slate-300/78`,children:`Le cas Hondius est lu comme un théâtre de double contrainte : dire que le risque général est faible, tout en activant un imaginaire de coordination maximale. La panique n’est pas forcément dans le ton ; elle peut être dans l’architecture du dispositif.`}),(0,C.jsx)(`p`,{className:`mt-4 rounded-[20px] border border-sky-200/10 bg-slate-950/42 p-4 text-sm leading-7 text-slate-300/74`,children:`Point de prudence : la piste d’une modification virale ou d’une instrumentalisation intentionnelle ne doit pas être posée comme fait. Elle reste une hypothèse à examiner par séquençage, documents, chronologie et preuves matérielles.`})]})]}),(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-cyan-200/12 bg-[radial-gradient(circle_at_80%_0%,rgba(86,162,205,0.12),transparent_40%),rgba(2,6,18,0.52)] p-5 sm:p-7`,children:[(0,C.jsxs)(`div`,{className:`flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`p`,{className:`text-xs font-bold uppercase tracking-[0.28em] text-cyan-100/62`,children:`Sommaire de la lecture Perronne`}),(0,C.jsx)(`h2`,{className:`mt-3 text-2xl font-semibold text-slate-50`,children:`Thèses, séquence politique et scènes sanitaires`})]}),(0,C.jsx)(`a`,{href:`https://youtu.be/T1mOYLM01-Y?is=0AGNF51xVgJCMAyM`,target:`_blank`,rel:`noreferrer`,className:`w-fit rounded-full border border-cyan-100/22 bg-cyan-100/[0.08] px-4 py-2 text-sm font-bold text-cyan-50 transition hover:border-cyan-100/38 hover:bg-cyan-100/[0.12]`,children:`Voir la vidéo source`})]}),(0,C.jsx)(`div`,{className:`mt-5 flex flex-wrap gap-2`,children:x.map((e,t)=>(0,C.jsxs)(`a`,{href:`#${e.id}`,className:`rounded-full border border-sky-200/10 bg-slate-950/44 px-3 py-2 text-xs font-semibold text-slate-300/74 transition hover:border-cyan-100/26 hover:text-cyan-100`,children:[String(t+1).padStart(2,`0`),` · `,e.title]},e.id))}),(0,C.jsx)(`div`,{className:`mt-6 grid gap-3 md:grid-cols-2`,children:b.map(e=>(0,C.jsxs)(`div`,{className:`rounded-[20px] border border-amber-100/14 bg-amber-100/[0.045] p-4 text-sm font-semibold leading-7 text-amber-50/88`,children:[`“`,e,`”`]},e))})]}),(0,C.jsx)(`div`,{className:`grid gap-5`,children:x.map((e,t)=>(0,C.jsx)(Mt,{section:e,index:t},e.id))}),(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-sky-200/10 bg-[radial-gradient(circle_at_16%_0%,rgba(90,150,190,0.1),transparent_40%),rgba(2,6,18,0.48)] p-5 sm:p-7`,children:[(0,C.jsx)(`p`,{className:`text-xs font-bold uppercase tracking-[0.24em] text-cyan-100/60`,children:`Noyau factuel verifie`}),(0,C.jsx)(`h2`,{className:`mt-3 text-2xl font-semibold text-slate-50`,children:`Un cluster reel, rare et grave`}),(0,C.jsxs)(`div`,{className:`mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]`,children:[(0,C.jsx)(`div`,{className:`rounded-[24px] border border-cyan-100/12 bg-slate-950/48 p-5`,children:(0,C.jsxs)(`p`,{className:`text-sm leading-7 text-slate-300/78`,children:[`L'OMS a ete notifiee le `,(0,C.jsx)(`strong`,{className:`text-cyan-50`,children:`2 mai 2026`}),` d'un cluster de maladies respiratoires severes a bord du MV Hondius. Au `,(0,C.jsx)(`strong`,{className:`text-cyan-50`,children:`13 mai 2026`}),`, elle rapportait `,(0,C.jsx)(`strong`,{className:`text-cyan-50`,children:`11 cas`}),`, dont `,(0,C.jsx)(`strong`,{className:`text-cyan-50`,children:`8 confirmes Andes virus`}),`, 2 probables, 1 inconclusif et `,(0,C.jsx)(`strong`,{className:`text-cyan-50`,children:`3 deces`}),`, tout en evaluant le risque global comme faible.`]})}),(0,C.jsx)(`div`,{className:`rounded-[24px] border border-amber-100/12 bg-slate-950/48 p-5`,children:(0,C.jsx)(`p`,{className:`text-sm leading-7 text-slate-300/78`,children:`Le virus concerne n'est pas un hantavirus generique : l'Andes virus est une forme sud-americaine particuliere, connue comme l'un des rares hantavirus pour lesquels une transmission interhumaine limitee a ete documentee, surtout dans des conditions de contact proche, prolonge ou confine.`})})]}),(0,C.jsx)(`p`,{className:`mt-5 rounded-[22px] border border-sky-200/10 bg-slate-950/36 p-4 text-sm leading-7 text-slate-300/76`,children:`La question de cette exploration n'est donc pas de nier le danger. Elle est de comprendre comment un danger reel est mis en scene, interprete, proceduralise et converti en argument institutionnel.`})]}),(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-sky-200/10 bg-slate-950/[0.44] p-5 sm:p-7`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-slate-50`,children:`Hypothèse d’enquête`}),(0,C.jsxs)(`div`,{className:`mt-5 grid gap-4 lg:grid-cols-3`,children:[(0,C.jsx)(`p`,{className:`text-sm leading-7 text-slate-300/78`,children:`L’événement ne se réduit ni à un simple fait divers sanitaire, ni à une preuve de complot. Il peut être analysé comme une scène de conversion : un cluster réel, rare et grave se transforme en justification immédiate de procédures globales.`}),(0,C.jsx)(`p`,{className:`text-sm leading-7 text-slate-300/78`,children:`L’Andes virus est particulier parce qu’il est le hantavirus classiquement associé à une transmission interhumaine limitée, généralement liée à des contacts étroits et prolongés. Ce caractère suffit à produire un récit d’exception.`}),(0,C.jsx)(`p`,{className:`text-sm leading-7 text-slate-300/78`,children:`L’enquête porte donc sur l’écart entre le discours rassurant et la puissance du dispositif : tests, quarantaines, surveillance, communication internationale, séquences génomiques, PABS et gouvernance pandémique.`})]})]}),(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-cyan-200/12 bg-[radial-gradient(circle_at_18%_0%,rgba(74,150,190,0.11),transparent_42%),rgba(2,6,18,0.5)] p-5 sm:p-7`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-cyan-100`,children:`Chronologie critique`}),(0,C.jsx)(`div`,{className:`mt-5 grid gap-4 md:grid-cols-2`,children:kt.map(([e,t,n])=>(0,C.jsxs)(`article`,{className:`rounded-[24px] border border-sky-200/10 bg-slate-950/[0.46] p-5`,children:[(0,C.jsx)(`span`,{className:`rounded-full border border-cyan-100/18 bg-cyan-100/[0.08] px-3 py-1 text-xs font-bold text-cyan-100/72`,children:e}),(0,C.jsx)(`h3`,{className:`mt-4 text-lg font-semibold text-slate-50`,children:t}),(0,C.jsx)(`p`,{className:`mt-3 text-sm leading-7 text-slate-300/76`,children:n})]},e))})]}),(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-amber-100/12 bg-[radial-gradient(circle_at_72%_12%,rgba(189,155,87,0.12),transparent_38%),rgba(2,6,18,0.5)] p-5 sm:p-7`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-amber-100`,children:`Indice de montage narratif`}),(0,C.jsx)(`p`,{className:`mt-4 max-w-4xl text-sm leading-7 text-slate-300/78`,children:`Le “montage narratif” ne désigne pas ici une preuve de fabrication. Il désigne la manière dont un événement devient immédiatement racontable, mobilisable et orienté vers une conclusion institutionnelle.`}),(0,C.jsx)(`div`,{className:`mt-5 grid gap-4 md:grid-cols-2`,children:O.map(([e,t])=>(0,C.jsxs)(`article`,{className:`rounded-[24px] border border-sky-200/10 bg-slate-950/[0.46] p-5`,children:[(0,C.jsx)(`h3`,{className:`m-0 text-lg font-semibold text-slate-50`,children:e}),(0,C.jsx)(`p`,{className:`mt-3 text-sm leading-7 text-slate-300/76`,children:t})]},e))})]}),(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-amber-100/12 bg-slate-950/[0.46] p-5 sm:p-7`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-amber-100`,children:`Le role de l'Argentine`}),(0,C.jsxs)(`div`,{className:`mt-5 grid gap-4 lg:grid-cols-2`,children:[(0,C.jsx)(`p`,{className:`text-sm leading-7 text-slate-300/78`,children:`L'Argentine occupe une place symbolique centrale : le pays vient d'officialiser sa sortie de l'OMS, le navire est parti d'Argentine, l'Andes virus est associe a des zones sud-americaines, et la gestion du dossier reintegre fonctionnellement l'expertise argentine au dispositif international.`}),(0,C.jsx)(`p`,{className:`rounded-[22px] border border-amber-100/12 bg-amber-100/[0.045] p-4 text-sm font-semibold leading-7 text-amber-50/88`,children:`Un Etat peut quitter l'OMS juridiquement ; il reste reabsorbe fonctionnellement des qu'un evenement sanitaire transfrontalier surgit.`})]})]}),(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-emerald-200/12 bg-[radial-gradient(circle_at_84%_12%,rgba(86,150,116,0.12),transparent_38%),rgba(2,6,18,0.48)] p-5 sm:p-7`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-emerald-100`,children:`Le traite pandemie : le vrai scandale`}),(0,C.jsx)(`p`,{className:`mt-5 text-sm leading-7 text-slate-300/78`,children:`La question n'est pas seulement celle d'un pouvoir direct qui imposerait demain une mesure nationale. Elle est celle du pouvoir de cadrage : surveillance, acces aux pathogenes, partage de sequences genetiques, diagnostics, vaccins, traitements, chaines logistiques, financement, communication publique, coordination des Etats, normes internationales et mecanismes de suivi.`}),(0,C.jsx)(`p`,{className:`mt-4 text-sm leading-7 text-slate-300/78`,children:`Dans ce contexte, le MV Hondius devient une scene presque ideale : un navire, plusieurs nationalites, un virus rare, une incubation longue, une gestion transfrontaliere, et la demonstration immediate que personne ne peut gerer seul.`})]}),(0,C.jsxs)(`div`,{className:`grid gap-5 lg:grid-cols-2`,children:[(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-emerald-200/12 bg-slate-950/[0.46] p-5 sm:p-7`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-emerald-100`,children:`Lecture géopolitique sanitaire`}),(0,C.jsx)(`p`,{className:`mt-5 text-sm leading-7 text-slate-300/78`,children:`Le cluster Hondius articule trois registres : un virus rare et grave ; une scène maritime transnationale ; une réponse institutionnelle qui montre sa propre nécessité. Cette articulation intéresse Theo^ non parce qu’elle prouverait une intention cachée, mais parce qu’elle rend visible une grammaire de pouvoir : alerte, coordination, séquençage, partage, narration, légitimation.`}),(0,C.jsx)(`p`,{className:`mt-4 text-sm leading-7 text-slate-300/78`,children:`Le traité pandémie et les mécanismes PABS peuvent alors apparaître comme horizon de lecture : non pas cause démontrée de l’événement, mais cadre politique dans lequel l’événement devient utile, lisible et mobilisable.`})]}),(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-rose-200/12 bg-slate-950/[0.46] p-5 sm:p-7`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-rose-100`,children:`Modification virale : piste, pas conclusion`}),(0,C.jsx)(`p`,{className:`mt-5 text-sm leading-7 text-slate-300/78`,children:`La question d’une modification virale ne doit pas être évacuée par réflexe, mais elle ne peut pas non plus être affirmée sans preuves. Les premiers éléments publics cités par plusieurs sources évoquent un virus Andes rapproché de lignées connues en Amérique du Sud, sans signal établi de caractéristiques nouvelles.`}),(0,C.jsx)(`p`,{className:`mt-4 text-sm leading-7 text-slate-300/78`,children:`L’attitude critique consiste donc à maintenir la piste ouverte tout en exigeant ce qui pourrait la soutenir : séquences complètes, analyses indépendantes, chronologie transparente, données de transmission et documents de laboratoire.`})]})]}),(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-sky-200/10 bg-slate-950/[0.44] p-5 sm:p-7`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-slate-50`,children:`Les trois couches du dossier`}),(0,C.jsx)(`div`,{className:`mt-5 grid gap-4 lg:grid-cols-3`,children:[[`Couche biologique`,`Un Andes virus reel, potentiellement grave, avec transmission interhumaine possible mais rare. Les donnees preliminaires soutiennent une introduction initiale suivie d'une transmission a bord, mais la reconstruction complete n'est pas close.`],[`Couche institutionnelle`,`L'OMS utilise explicitement l'affaire comme demonstration des International Health Regulations. Le risque verbalement faible est encadre par une reponse internationale lourde.`],[`Couche politique`,`L'evenement survient juste apres la sortie de l'Argentine de l'OMS et pendant le blocage PABS. La scene sert objectivement le recit d'une architecture sanitaire mondiale.`]].map(([e,t])=>(0,C.jsxs)(`article`,{className:`rounded-[24px] border border-sky-200/10 bg-slate-950/[0.46] p-5`,children:[(0,C.jsx)(`h3`,{className:`m-0 text-lg font-semibold text-cyan-50`,children:e}),(0,C.jsx)(`p`,{className:`mt-3 text-sm leading-7 text-slate-300/76`,children:t})]},e))})]}),(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-amber-100/12 bg-[radial-gradient(circle_at_50%_0%,rgba(189,155,87,0.12),transparent_42%),rgba(2,6,18,0.54)] p-5 sm:p-7`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-amber-100`,children:`Conclusion provisoire`}),(0,C.jsx)(`p`,{className:`mt-5 text-lg font-semibold leading-8 text-amber-50/88`,children:`Le vrai est monte de maniere a produire autre chose que sa verite sanitaire.`}),(0,C.jsx)(`p`,{className:`mt-4 text-sm leading-7 text-slate-300/78`,children:`L'hantavirus existe. Les deces existent. Le risque cible existe. Mais l'agencement du dossier transforme un cluster limite en preuve vivante de la necessite d'une gouvernance sanitaire mondiale.`}),(0,C.jsx)(`p`,{className:`mt-4 text-sm leading-7 text-slate-300/78`,children:`C'est la que l'affaire devient trouble : non parce que tout serait faux, mais parce que tout semble fonctionner trop parfaitement comme demonstration politique.`})]}),(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-cyan-200/12 bg-[radial-gradient(circle_at_20%_0%,rgba(80,150,190,0.12),transparent_40%),rgba(2,6,18,0.58)] p-5 sm:p-7`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-cyan-100`,children:`Sources primaires et secondaires`}),(0,C.jsx)(`p`,{className:`mt-4 text-sm leading-7 text-slate-300/74`,children:`Les sources ci-dessous ne servent pas à neutraliser la lecture de Perronne, mais à documenter les points d’appui, les données institutionnelles, les éléments scientifiques publiés et les zones encore ouvertes.`}),(0,C.jsx)(`p`,{className:`mt-4 text-sm leading-7 text-slate-300/74`,children:`Cette page pose une lecture critique. Elle doit être relue à partir des documents primaires et des mises à jour sanitaires, car les données d’un cluster évoluent rapidement.`}),(0,C.jsx)(`div`,{className:`mt-5 grid gap-3`,children:[...At,...jt].map(([e,t])=>(0,C.jsx)(`a`,{href:t,target:`_blank`,rel:`noreferrer`,className:`rounded-[20px] border border-sky-200/10 bg-slate-950/42 p-4 text-sm font-semibold text-slate-200 transition hover:border-cyan-100/26 hover:text-cyan-100`,children:e},t))})]})]})]})]})})}function Ft({exploration:e,navigate:t}){return(0,C.jsx)(`section`,{className:`w-full overflow-x-hidden px-4 py-6 text-slate-100 sm:px-6 lg:px-10`,children:(0,C.jsxs)(`div`,{className:`mx-auto flex w-full max-w-6xl flex-col gap-6`,children:[(0,C.jsx)(`button`,{type:`button`,onClick:()=>t(`explorations`),className:`w-fit rounded-full border border-sky-200/14 bg-slate-950/50 px-4 py-2 text-sm font-bold text-slate-200 transition hover:border-cyan-100/28`,children:`Retour aux explorations`}),(0,C.jsxs)(`article`,{className:`overflow-hidden rounded-[34px] border border-sky-200/10 bg-[radial-gradient(circle_at_75%_14%,rgba(91,134,164,0.14),transparent_34%),linear-gradient(135deg,rgba(7,13,27,0.9),rgba(2,5,13,0.97))] shadow-[0_30px_120px_rgba(0,0,0,0.38)]`,children:[(0,C.jsxs)(`header`,{className:`relative p-6 sm:p-9 lg:p-12`,children:[(0,C.jsx)(`div`,{className:`pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(130,180,230,0.038)_1px,transparent_1px),linear-gradient(90deg,rgba(130,180,230,0.038)_1px,transparent_1px)] bg-[size:46px_46px] opacity-50`}),(0,C.jsxs)(`div`,{className:`relative`,children:[(0,C.jsx)(`p`,{className:`mb-4 text-xs font-bold uppercase tracking-[0.34em] text-cyan-100/64`,children:`Exploration`}),(0,C.jsx)(`h1`,{className:`m-0 max-w-5xl text-4xl font-semibold leading-tight tracking-[0.04em] text-amber-100 sm:text-5xl`,children:`Kogi / Kággaba — Aluna, Sé et le choix du vivant`}),(0,C.jsx)(`p`,{className:`mt-5 max-w-4xl text-lg leading-8 text-slate-300/82`,children:`Territoire vivant, Loi d’Origine, Mamos, Sagas, reliance avant identité et altérité radicale.`}),(0,C.jsxs)(`div`,{className:`mt-6 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-[0.14em]`,children:[(0,C.jsx)(`span`,{className:`rounded-full border border-cyan-100/16 bg-cyan-100/8 px-3 py-1 text-cyan-100/76`,children:e.status}),(0,C.jsx)(`span`,{className:`text-slate-400/80`,children:gt(e.date)})]}),(0,C.jsx)(`div`,{className:`mt-6 flex flex-wrap gap-2`,children:e.tags.map(e=>(0,C.jsx)(`span`,{className:`rounded-full border border-sky-200/10 bg-slate-950/42 px-3 py-1.5 text-sm text-slate-300/76`,children:e},e))})]})]}),(0,C.jsxs)(`div`,{className:`flex flex-col gap-6 border-t border-sky-200/10 p-5 sm:p-7 lg:p-9`,children:[(0,C.jsxs)(`section`,{className:`grid gap-5 lg:grid-cols-[1.35fr_0.85fr] lg:items-stretch`,children:[(0,C.jsxs)(`div`,{className:`rounded-[30px] border border-sky-200/10 bg-slate-950/[0.48] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.32)] sm:p-5`,children:[(0,C.jsx)(`div`,{className:`overflow-hidden rounded-[24px] border border-sky-200/12 bg-slate-950 shadow-[0_0_34px_rgba(78,150,190,0.1)]`,children:(0,C.jsx)(`div`,{className:`aspect-video`,children:(0,C.jsx)(`iframe`,{className:`h-full w-full`,src:`https://www.youtube.com/embed/mA8P8DpSJIE`,title:`Kogi / Kággaba — Le choix du vivant`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,allowFullScreen:!0})})}),(0,C.jsx)(`p`,{className:`mt-3 text-sm leading-6 text-slate-300/72`,children:`Vidéo de présentation — Le choix du vivant, rencontre avec le monde Kogi / Kággaba.`})]}),(0,C.jsxs)(`aside`,{className:`rounded-[30px] border border-emerald-200/12 bg-[radial-gradient(circle_at_80%_0%,rgba(90,150,116,0.12),transparent_42%),rgba(2,6,18,0.58)] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-6`,children:[(0,C.jsx)(`p`,{className:`mb-3 text-xs font-bold uppercase tracking-[0.22em] text-emerald-100/68`,children:`Le livre`}),(0,C.jsxs)(`div`,{className:`grid gap-5 sm:grid-cols-[150px_1fr] lg:grid-cols-1 xl:grid-cols-[150px_1fr]`,children:[(0,C.jsx)(`figure`,{className:`overflow-hidden rounded-[20px] border border-emerald-200/14 bg-slate-950/58 shadow-[0_18px_46px_rgba(0,0,0,0.28)]`,children:(0,C.jsx)(`img`,{src:`/T/theo/images/explorations/lois-du-vivant.jpg`,alt:`Couverture du livre Les lois du vivant`,className:`aspect-[2/3] h-full w-full object-cover`})}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-emerald-100`,children:`Le choix du vivant`}),(0,C.jsx)(`p`,{className:`mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100/62`,children:`Illustration du livre`})]})]}),(0,C.jsx)(`p`,{className:`mt-5 text-sm leading-7 text-slate-300/80`,children:`Le choix du vivant propose une rencontre avec la pensée Kogi / Kággaba et une lecture du vivant fondée sur l’altérité, l’interdépendance, le sens, la communication, les valeurs, le cadre, la créativité, le temps et la transmission. Dans cette exploration, le livre sert de porte d’entrée vers Aluna, Sé, la Loi d’Origine, les Mamos, les Sagas et une grammaire relationnelle du monde.`}),(0,C.jsx)(`div`,{className:`mt-5 flex flex-wrap gap-2 text-xs font-semibold text-slate-200/82`,children:[`Altérité`,`Interdépendance`,`Sens`,`Communication`,`Valeurs`,`Cadre`,`Créativité`,`Temps`,`Transmission`].map(e=>(0,C.jsx)(`span`,{className:`rounded-full border border-emerald-200/12 bg-slate-950/42 px-3 py-1`,children:e},e))})]})]}),(0,C.jsx)(`div`,{className:`grid gap-4 md:grid-cols-2`,children:St.map(e=>(0,C.jsxs)(`section`,{className:`rounded-[26px] border border-sky-200/10 bg-slate-950/[0.46] p-5`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-xl font-semibold text-slate-50`,children:e.title}),(0,C.jsx)(`p`,{className:`mt-4 text-sm leading-7 text-slate-300/78`,children:e.body})]},e.title))}),(0,C.jsx)(Dt,{src:`/T/theo/images/explorations/Kogi%20image.png`,alt:`Paysage nocturne Kogi avec montagnes, figures et trames geometriques`,eyebrow:`Territoire vivant`,title:`Sierra relationnelle`,caption:`Une respiration visuelle pour situer la Sierra comme organisme-monde : profondeur nocturne, lignes invisibles, memoire territoriale et obligations.`}),(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-amber-100/12 bg-[radial-gradient(circle_at_50%_10%,rgba(165,135,75,0.1),transparent_42%),rgba(2,6,18,0.58)] p-5 sm:p-7`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-amber-100`,children:`Chaîne Kogi`}),(0,C.jsxs)(`div`,{className:`mt-5 grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center`,children:[Ct.map((e,t)=>(0,C.jsxs)(`div`,{className:`rounded-[26px] border border-sky-200/10 bg-slate-950/[0.5] p-5`,children:[(0,C.jsx)(`p`,{className:`text-xs font-bold uppercase tracking-[0.18em] text-cyan-100/66`,children:e.title}),(0,C.jsx)(`p`,{className:`mt-3 text-lg font-semibold tracking-[0.08em] text-slate-50`,children:e.formula}),(0,C.jsx)(`div`,{className:`mt-4 grid gap-2`,children:e.items.map(([e,n])=>(0,C.jsxs)(`div`,{className:`grid grid-cols-[56px_1fr] gap-3 rounded-[18px] border border-sky-200/8 bg-slate-950/38 px-3 py-2 text-sm`,children:[(0,C.jsx)(`b`,{className:t===0?`text-amber-100`:`text-cyan-100`,children:e}),(0,C.jsx)(`span`,{className:`text-slate-300/76`,children:n})]},e))})]},e.title)),(0,C.jsx)(`div`,{className:`order-first rounded-full border border-emerald-200/16 bg-emerald-200/8 px-5 py-4 text-center lg:order-none`,children:(0,C.jsx)(`p`,{className:`text-xs font-bold uppercase tracking-[0.22em] text-emerald-100/74`,children:`Équilibre`})})]}),(0,C.jsx)(`p`,{className:`mt-5 rounded-[22px] border border-sky-200/10 bg-slate-950/38 p-4 text-sm leading-7 text-slate-300/78`,children:`Équilibre = tenue dissymétrique sans fusion ni hiérarchie entre silence stratégique et communication vibratoire.`}),(0,C.jsx)(`div`,{className:`mt-5`,children:(0,C.jsx)(Dt,{src:`/T/theo/images/explorations/Kogi%20synthese.png`,alt:`Schema de synthese des resonances Kogi et Kaggaba`,eyebrow:`Figure de synthese`,title:`Resonance Kogi / Kaggaba`,caption:`Schema recapitulatif des passages entre Aluna, Se, regimes silencieux et vibratoires, puis resonances MNL^ et MCPP^.`,mode:`contain`})})]}),(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-sky-200/10 bg-slate-950/[0.42] p-5 sm:p-7`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-slate-50`,children:`Le choix du vivant — 9 principes`}),(0,C.jsx)(`div`,{className:`mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3`,children:wt.map(([e,t],n)=>(0,C.jsxs)(`article`,{className:`rounded-[22px] border border-sky-200/10 bg-slate-950/[0.5] p-4`,children:[(0,C.jsx)(`span`,{className:`text-xs font-bold text-cyan-100/56`,children:String(n+1).padStart(2,`0`)}),(0,C.jsx)(`h3`,{className:`mt-2 text-lg font-semibold text-slate-50`,children:e}),(0,C.jsx)(`p`,{className:`mt-2 text-sm text-slate-300/76`,children:t})]},e))}),(0,C.jsx)(`p`,{className:`mt-5 rounded-[22px] border border-amber-100/12 bg-amber-100/[0.045] p-4 text-sm leading-7 text-amber-50/76`,children:`Ces correspondances biologiques sont analogiques et pédagogiques ; elles ne constituent pas une démonstration scientifique ni une doctrine naturaliste.`})]}),(0,C.jsxs)(`div`,{className:`grid gap-4 lg:grid-cols-2`,children:[(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-emerald-200/12 bg-slate-950/[0.46] p-5 sm:p-7`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-emerald-100`,children:`Résonance avec MNL^`}),(0,C.jsx)(`div`,{className:`mt-5 grid gap-3`,children:Tt.map(([e,t])=>(0,C.jsxs)(`div`,{className:`rounded-[20px] border border-sky-200/10 bg-slate-950/40 p-4`,children:[(0,C.jsx)(`h3`,{className:`m-0 text-base font-semibold text-slate-50`,children:e}),(0,C.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-300/76`,children:t})]},e))}),(0,C.jsx)(`p`,{className:`mt-5 text-sm leading-7 text-slate-300/78`,children:`Nox garde l’altérité et la mémoire ; Materia organise les cadres et les échanges ; Lux rend lisibles le sens, la communication et la créativité.`})]}),(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-cyan-200/12 bg-slate-950/[0.46] p-5 sm:p-7`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-cyan-100`,children:`Résonance avec MCPP^`}),(0,C.jsx)(`div`,{className:`mt-5 grid gap-3`,children:Et.map(([e,t])=>(0,C.jsxs)(`div`,{className:`rounded-[20px] border border-sky-200/10 bg-slate-950/40 p-4`,children:[(0,C.jsx)(`h3`,{className:`m-0 text-base font-semibold text-slate-50`,children:e}),(0,C.jsx)(`p`,{className:`mt-2 text-sm leading-6 text-slate-300/76`,children:t})]},e))}),(0,C.jsx)(`p`,{className:`mt-5 rounded-[22px] border border-sky-200/10 bg-slate-950/38 p-4 text-sm leading-7 text-slate-300/78`,children:`invisible → formes → essence → son latent → mouvement → vibration → connexion invisible → connaissance → vision analysée`})]})]}),(0,C.jsx)(Ot,{eyebrow:`Texte de recherche complet`,title:`Kogi / Kaggaba — Aluna, Se et le choix du vivant`,intro:`Version suivie, structurée comme un article de recherche : lecture relationnelle, prudence analogique et resonances MNL^ / MCPP^.`,paragraphs:ee}),(0,C.jsx)(Ot,{eyebrow:`Étude complémentaire`,title:te,intro:`Prolongement théologique et scientifique prudent : Trinité immanente, missions, structures du vivant et analogies relationnelles sans identification directe.`,paragraphs:S,accent:`amber`}),(0,C.jsxs)(`section`,{className:`rounded-[30px] border border-amber-100/12 bg-[radial-gradient(circle_at_30%_0%,rgba(165,135,75,0.12),transparent_40%),rgba(2,6,18,0.58)] p-5 sm:p-7`,children:[(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold text-amber-100`,children:`Conclusion`}),(0,C.jsx)(`p`,{className:`mt-5 whitespace-pre-line text-base leading-8 text-slate-300/82`,children:`La base Kogi donne le champ relationnel : Aluna, Sé, Loi d’Origine, Mamos, Sagas. La chaîne SE-NE-NU-LANG / MUL-DI-GABA-SHI-ZHA donne le passage entre silence, son, vibration, connexion et vision. La grille du vivant donne une traduction bio-systémique prudente : altérité, interdépendance, sens, communication, valeurs, cadre, créativité, temps, transmission.

Le vivant n’est pas une substance : c’est une altérité reliée, régulée, communicante, créatrice, temporelle et transmissible.`})]})]})]})]})})}function It({navigate:e,slug:t}){let n={"kogi-le-choix-du-vivant":`kogi-choix-du-vivant`,"thomas-romer-bible-obscure":`romer-bible-obscure`,"explorations-langlois-bible-technologies":`langlois-bible-technologies`}[t]||t,r=n?y.find(e=>e.slug===n):null;return r?(0,C.jsx)(xt,{exploration:r,navigate:e}):(0,C.jsx)(`section`,{className:`w-full overflow-x-hidden px-4 py-6 text-slate-100 sm:px-6 lg:px-10`,children:(0,C.jsxs)(`div`,{className:`mx-auto flex w-full max-w-7xl flex-col gap-7`,children:[(0,C.jsxs)(`header`,{className:`relative overflow-hidden rounded-[34px] border border-sky-200/10 bg-[radial-gradient(circle_at_80%_22%,rgba(93,150,187,0.16),transparent_36%),linear-gradient(135deg,rgba(7,13,27,0.88),rgba(2,5,13,0.96))] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.36)] sm:p-9 lg:p-12`,children:[(0,C.jsx)(`div`,{className:`pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(130,180,230,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(130,180,230,0.04)_1px,transparent_1px)] bg-[size:46px_46px] opacity-55`}),(0,C.jsxs)(`div`,{className:`relative max-w-4xl`,children:[(0,C.jsx)(`p`,{className:`mb-4 text-xs font-bold uppercase tracking-[0.34em] text-cyan-100/64`,children:`Section editoriale`}),(0,C.jsx)(`h1`,{className:`m-0 text-4xl font-semibold tracking-[0.12em] text-amber-100 sm:text-5xl`,children:`Explorations`}),(0,C.jsx)(`p`,{className:`mt-5 max-w-3xl text-base leading-8 text-slate-300/78`,children:`Articles longs, essais, recherches et dossiers thematiques pour prolonger les lignes de la mappemonde Theo^.`})]})]}),(0,C.jsx)(`div`,{className:`index-grid w-full`,children:y.map(t=>(0,C.jsx)(bt,{exploration:t,onRead:t=>e(`explorations/${t}`)},t.slug))})]})})}var Lt=[`Toulon, quartier Pontcarral, mercredi 20 mai 2026, à l'aube.`,`Une mère de 38 ans et trois de ses enfants sont morts après une chute du 13e étage.`,`Les enfants étaient de très jeunes enfants ; les âges publiés varient selon les reprises entre 3, 4 ou 5, et 6 ans.`,`Une enquête a été ouverte pour meurtres par ascendant.`,`Aucun élément public ne permet pour le moment d'impliquer l'intervention d'un tiers.`,`Quatre enfants survivants ont été pris en charge et accompagnés psychologiquement.`],Rt=[`Résultats des autopsies et expertises toxicologiques.`,`État exact de la mère au moment des faits.`,`Chronologie précise des dernières 24 à 48 heures.`,`Présence ou absence de messages, appels, lettres ou traces numériques.`,`Existence éventuelle de lésions antérieures à la chute.`,`Contexte familial, médical et social réel, au-delà des premières déclarations publiques.`],zt=[[`Infanticide intrafamilial`,`Homicide d'un enfant dans le cadre familial ou par une figure parentale.`],[`Mort parent-enfants`,`Configuration où la mort d'un ou plusieurs enfants survient dans une scène impliquant aussi la mort ou la tentative de mort du parent.`],[`Familicide`,`Meurtre de plusieurs membres de la famille, souvent conjoint ou ex-conjoint et enfants, parfois suivi du suicide de l'auteur.`],[`Néonaticide`,`Meurtre d'un nouveau-né, souvent dans les premières 24 heures après la naissance.`],[`Infanticide`,`Terme variable selon les droits nationaux, souvent utilisé médiatiquement pour désigner le meurtre d'un très jeune enfant.`],[`Suicide élargi`,`Expression décrivant une scène suicidaire incluant d'autres personnes ; elle signale une condensation mortelle entre effondrement du parent et destin imposé aux enfants.`]],Bt=[[`France, enfants tués en milieu intrafamilial 2012-2016`,`363`],[`France, fréquence estimée`,`environ 1 enfant tous les 5 jours`],[`France, veille mort parent-enfants 2017-2019`,`30 cas`],[`France Sud-Est, auteurs dans le corpus 2010-2022`,`58 % hommes / 42 % femmes`],[`France Sud-Est, enfants tués par père / mère`,`52 % père / 48 % mère`],[`France Sud-Est, contexte de séparation`,`84 %`],[`Australie 2000-2012`,`238 incidents / 284 victimes`],[`Angleterre-Galles 1997-2006`,`342 auteurs`],[`États-Unis, étude homicide intrafamilial avec mort parent-enfants`,`30 familles / 51 enfants tués`],[`Monde, mères parmi homicides parentaux`,`médiane 54,7 %, très variable`]],Vt=[[`Auteurs hommes`,58],[`Auteurs femmes`,42],[`Enfants tués par père`,52],[`Enfants tués par mère`,48],[`Contexte de séparation`,84],[`Conflits familiaux élevés`,74],[`Signalement aux autorités`,42]],Ht=[[`Néonaticide`,`Nouveau-né tué à la naissance ; grossesse cachée, panique, isolement ou déni peuvent apparaître dans certains dossiers.`],[`Maltraitance fatale`,`Enfant très jeune tué par violences répétées, secouement ou négligences graves.`],[`Mort parent-enfants maternelle`,`Mère tuant ses enfants puis se suicidant ou tentant de le faire, souvent dans une crise suicidaire ou une désorganisation aiguë.`],[`Homicide intrafamilial paternel en séparation`,`Cas souvent liés à séparation, contrôle, conflit de garde, violence conjugale ou vengeance contre la conjointe.`],[`Familicide`,`Conjoint ou ex-conjoint et enfants tués, souvent par des hommes, avec risque de suicide de l'auteur.`],[`Homicide intrafamilial en crise psychotique`,`Acte associé à hallucinations, délire, confusion ou désorganisation psychiatrique sévère.`],[`Homicide intrafamilial dit altruiste subjectif`,`Parent convaincu, de manière pathologique ou désespérée, de protéger l'enfant d'une souffrance.`],[`Mort parent-enfants de fratrie`,`Plusieurs enfants d'une même famille sont tués, souvent dans une scène de crise familiale totale.`]],Ut=[[`Judiciaire`,`qualification, enquête, autopsies, toxicologie`,`réduire le drame à un dossier`],[`Médico-psychique`,`crise, dépression possible, désorganisation, traitement éventuel`,`réduire l'acte à un diagnostic`],[`Social`,`isolement, charge familiale, précarité, relais absents`,`réduire l'acte au contexte`],[`Familial`,`enfants, pères, fratrie, survivants, histoire relationnelle`,`réduire l'acte au huis clos`],[`Corporel`,`fatigue, sommeil, gestes, chute, gravité`,`réduire l'acte à une scène physique`],[`Médiatique`,`image, choc, récit public, sidération`,`réduire l'acte à une émotion collective`],[`Symbolique`,`seuil, fenêtre, hauteur, portance rompue`,`esthétiser ou mythologiser le drame`],[`Survivant`,`enfants restants, trauma, avenir, accompagnement`,`réduire les survivants à la catastrophe`]],Wt=[[`Materia surcharge`,`Corps, fatigue, enfants, logement, charge, béton, étage, gravité. Materia porte tant qu'elle reste distribuée ; elle écrase quand elle se concentre sans relais.`],[`Nox compacte`,`Le futur ne disparaît pas objectivement, mais il cesse d'apparaître. Le relais devient impensable, le soin n'est plus une branche visible.`],[`Lux ne perce plus`,`Lux désigne l'apparition locale d'une autre branche possible : tiers, soin, parole, alerte, hospitalisation, relais temporaire.`]],Gt=[`Signaux faibles / silence`,`Non-détection`,`Actualisation terminale`,`Visibilité publique trop tardive`,`Reste : survivants, enquête, quartier, mémoire`],Kt=[[`T^ × Materia`,`le champ familial ne tient plus corporellement ; la portance matérielle sature`],[`T^ × Nox`,`la co-présence demeure peut-être objectivement, mais devient subjectivement indétectable`],[`T^ × Lux`,`le relais existe peut-être, mais n'apparaît plus comme branche praticable`],[`MNL^ × MCPP^`,`la surcharge matérielle devient obscurcissement, puis actualisation irréversible`],[`Phono × Nox`,`les signaux faibles ne percent pas la nuit du champ fermé`],[`Photonique × Lux tardif`,`tout devient visible quand le secours ne peut plus sauver les morts`],[`Libellule × chute`,`la portance distribuée se rompt en gravité pure`],[`Coin de papillon × prévention`,`une micro-césure aurait pu maintenir la séparation parent/enfant`],[`Chiasme × homicide intrafamilial`,`ce qui devait protéger devient ce qui détruit`],[`Survivants × T^`,`la catastrophe laisse des survivances, des seuils de reprise et des branches à rouvrir`]],qt=[[`Désespoir suicidaire`,`Je ne peux plus vivre, ils ne pourront pas vivre sans moi.`,`fusion mortelle`],[`Peur du placement / abandon`,`On va me les prendre / ils seront perdus sans moi.`,`enfant inclus dans la panique`],[`Conflit de garde`,`Si je les perds, personne ne les aura.`,`possession terminale`],[`Effondrement dépressif`,`futur compact, sans issue détectable`,`disparition du possible`],[`Délire / psychose`,`menace imaginaire, mission, salut morbide`,`pseudo-protection meurtrière`],[`Honte / ruine / isolement`,`impossibilité perçue de continuer`,`monde social devenu irrespirable`],[`Épuisement extrême`,`saturation corporelle et psychique`,`effondrement de la portance`]],Jt=[[`Féminin capturé`,`Le féminin n'est pas traité comme essence, mais comme fonction historiquement chargée : porter la vie, le soin, la maison, le deuil, la présence, parfois le divin.`],[`Matrice / anti-naissance`,`La matrice désigne l'origine et la séparation. L'anti-naissance apparaît lorsque la portance, privée de relais, se retourne en chute.`],[`Antiquité`,`Inanna, Ishtar, Astarté, Athirat, Ashéra ou la Reine du ciel rappellent que le féminin ancien fut puissance cosmique, cultuelle et politique, pas simple douceur domestique.`],[`Déplacement monothéiste`,`Le féminin divin ne disparaît pas simplement : il se déplace vers Sagesse, Sion, Shekhina, Église-épouse, Marie, âme, compassion et médiation.`],[`Modernité`,`La mère moderne peut devenir figure sacrée sans liturgie : présence totale, charge quotidienne, responsabilité maximale, mais relais faibles ou invisibles.`],[`Theo`,`T^ refuse la totalisation ; MNL^ lit Materia, Nox, Lux ; MCPP^ suit matrice, chiasme, phono, photonique, actualisation.`]],Yt=[{title:`Point de réel non dissoluble`,content:[`Cette hypothèse commence au point dense du réel : enfants morts, mère morte, enfants survivants, corps, étage, quartier, enquête, images publiques. Le champ symbolique s'ouvre depuis cette densité première.`,`Le noyau factuel demeure : une mère de 38 ans, seule avec sept enfants, dans le quartier Pontcarral à Toulon, est morte avec trois de ses plus jeunes enfants après une chute du 13e étage. L'enquête est ouverte pour meurtres par ascendant ; les autopsies et analyses toxicologiques poursuivent la reconstruction judiciaire.`,`Les éléments rapportés par la presse sur une hospitalisation récente, une rupture de traitement ou l'enfant resté accroché au lit appartiennent à une zone de seuil : plan factuel, plan judiciaire, plan médiatique et plan de survivance y restent distincts.`]},{title:`Le féminin comme fonction capturée, non essence`,content:[`L'hypothèse lit une fonction de portance historiquement assignée aux femmes : porter l'enfant, porter la maison, porter le soin, porter les affects, porter les ruptures, porter parfois la continuité symbolique du monde.`,`Cette portance peut être exaltée sans être soutenue, sacralisée sans relais, requise sans souveraineté, puis pathologisée lorsqu'elle se brise. Le féminin n'est donc pas une essence : c'est ici une fonction de champ, une place de portance capturée par des régimes sociaux, religieux, familiaux et psychiques.`,`Formule centrale : une fonction de portance historiquement assignée au féminin peut être poussée jusqu'à sa rupture, puis relue après coup, quand elle est devenue chute.`]},{title:`Matrice, seuil et anti-naissance`,content:[`La matrice déborde le ventre biologique. Elle désigne une opération : origine, enveloppe, seuil, passage, séparation. Une matrice porte pour permettre la sortie ; sa portance ouvre l'enfant vers une branche séparée.`,`Dans une scène de mort parent-enfants, la matrice se renverse : l'enfant n'est plus confié au monde comme avenir séparé, il est repris dans l'effondrement du parent. C'est pourquoi l'analyse parle d'anti-naissance : non comme symbole esthétique, mais comme nom structurel d'une séparation empêchée.`,`Point de portance : l'enfant porte une branche propre. Il reste confiable au monde, séparé, vivant dans une actualisation qui excède l'effondrement du parent.`]},{title:`Antiquité, Ashéra, Reine du ciel`,content:[`Le détour par l'Antiquité ne cherche pas une cause lointaine du drame. Il ouvre une mémoire longue : dans plusieurs mondes anciens, le féminin divin est lié à la fécondité, à la guerre, au seuil, à la royauté, au ciel, à la maison, aux arbres, aux eaux, aux naissances et aux morts.`,`Athirat / Ashéra et la Reine du ciel figurent un féminin disputé : puissance cultuelle, présence populaire, objet de polémique biblique, trace archéologique, mémoire déplacée. L'enjeu n'est pas de reconstruire une nostalgie simpliste d'un âge des déesses, mais de comprendre comment certaines fonctions du féminin ont été déplacées, combattues, recodées ou transférées.`,`Dans cette perspective, le féminin divin n'est pas aboli sans reste. Sa charge peut être déplacée dans des figures, des rites, des corps sociaux et des attentes adressées aux femmes.`]},{title:`Monothéismes, Sophia, Shekhina, Marie`,content:[`La concentration monothéiste du divin déplace le féminin plutôt qu'elle ne le supprime entièrement. Sophia, Sion, Jérusalem personnifiée, Shekhina, Église-épouse, âme épouse, mystique nuptiale et Marie maintiennent des régimes féminisés de présence, de compassion, de médiation et de portance.`,`Marie concentre une grandeur et un piège. Grandeur : dignité extrême du féminin, proximité avec l'Incarnation, consentement, maternité reçue comme mystère. Piège : possibilité historique de transformer cette dignité en modèle de maternité silencieuse, souffrante, disponible, sacrificielle.`,`Formule : le féminin divin a été déthéologisé, mais sa charge n'a pas disparu ; elle a été reversée dans les corps sociaux des femmes.`]},{title:`Sorcière, hystérique, mère moderne`,content:[`Quand le féminin déborde les cadres acceptés, les sociétés le recodent souvent : sorcière, possédée, hystérique, mauvaise mère, mère dangereuse, mère défaillante. L'hypothèse place la psychiatrie dans un champ plus large : corps, histoire, portance, seuils sociaux, signes faibles et restes symboliques.`,`La modernité retire souvent le temple mais conserve le sacrifice. La mère est supposée autonome, responsable, psychologiquement lisible, socialement performante, affectivement disponible. Mais la portance réelle reste faite de sommeil, repas, argent, école, corps, logement, cris, fatigue, solitude et administration.`,`Formule : la mère moderne est parfois une figure sacrée sans liturgie, une présence totale sans communauté, une portance exigée sans porteurs.`]},{title:`MNL^, MCPP^, enfant accroché au lit`,content:[`MNL^ lit la bascule : Materia surcharge le corps féminin requis comme portance ; Nox compacte l'horizon jusqu'à rendre l'avenir indétectable ; Lux n'est pas absent en soi, mais il n'apparaît plus à temps comme branche vivable.`,`MCPP^ suit la matrice relationnelle qui aurait dû porter la portance, le chiasme protection / destruction, le phono des signaux faibles, la photonique de la visibilité trop tardive, puis l'actualisation irréversible.`,`Sous réserve de confirmation exacte du récit policier rapporté, l'enfant accroché au lit devient un coin de papillon incarné : lit contre fenêtre, horizontal contre vertical, accroche contre chute, séparation contre fusion, portance minimale contre portance rompue. Formule : ton destin n'est pas mon destin.`]},{title:`Libellule, anti-icône, T^Total`,content:[`La libellule désigne une portance distribuée : micro-corrections, relais, appuis, tiers, voisinage, institution, école, soin. La rupture survient lorsque cette portance distribuée n'opère plus ou n'apparaît plus comme accessible.`,`La scène de Toulon fonctionne comme anti-icône : elle rend visible l'invisible trop tard. L'immeuble, la fenêtre, le sol, la police, les voisins, l'eau, la photographie et l'article ne demandent pas contemplation. L'anti-icône ne demande pas admiration ; elle demande interruption.`,`T^Total tient sans totaliser. Les régimes psychiatrique, social, moral, mythologique, médiatique et symbolique demeurent en co-présence. L'image renvoie au champ de portance rompu et aux restes vivants qu'il laisse.`]}],Xt=[[`Fait pénal`,`Que s'est-il passé ?`,`mort de trois enfants et de leur mère ; enquête pour meurtres par ascendant`],[`Psychique`,`Quel état du sujet ?`,`symptômes évoqués, possible rupture de traitement, à confirmer`],[`Social`,`Quelle charge ?`,`mère seule, sept enfants, relais inconnus ou invisibles`],[`Féminin`,`Quelle fonction assignée ?`,`portance, soin, maison, continuité`],[`Antique`,`Quelle mémoire longue ?`,`déesses, matrices, Reine du ciel, Ashéra, féminin divin disputé`],[`Monothéiste`,`Quel déplacement ?`,`féminin divin déplacé vers Sagesse, Shekhina, Marie, Église, âme`],[`Moderne`,`Quelle reconfiguration ?`,`mère responsable, mère autonome, mère psychologisée`],[`MNL^`,`Quelle bascule ?`,`Materia surcharge → Nox compacte → Lux non détecté`],[`MCPP^`,`Quelle structure ?`,`matrice relationnelle, chiasme, phono, photonique, actualisation`],[`T^`,`Quelle tenue ?`,`ne pas totaliser, tenir les régimes dissymétriques`],[`Libellule`,`Quelle portance ?`,`portance distribuée rompue`],[`Coin de papillon`,`Quelle césure ?`,`enfant accroché au lit comme refus de fusion, sous réserve de confirmation`],[`Survivants`,`Quel reste vivant ?`,`quatre enfants, avenir non totalisable par la catastrophe`]],Zt=[`Comment les grandes figures féminines du Levant ancien, Athirat, Ashéra, Astarté, Reine du ciel, passent-elles du statut de puissances cultuelles à celui de traces polémiques, archéologiques ou démonisées ?`,`Comment les rédactions bibliques déplacent-elles, combattent-elles ou reconfigurent-elles le féminin divin dans Sion, Jérusalem, Sagesse, maternité, adultère symbolique, idolâtrie et compassion ?`,`Comment Marie concentre-t-elle à la fois une dignité extrême du féminin et une injonction historique à la maternité silencieuse, souffrante, disponible ?`,`Comment la Shekhina, Sophia, l'âme épouse, l'Église féminisée et la mystique nuptiale maintiennent-elles un féminin divin déplacé plutôt qu'aboli ?`,`Pourquoi les sociétés déposent-elles dans le féminin les fonctions de seuil : naissance, mort, soin, deuil, fécondité, impureté, continuité ?`,`Comment distinguer trouble mental, crise suicidaire, effondrement de portance, isolement social et rupture institutionnelle sans rabattre l'un sur l'autre ?`,`Comment la mort parent-enfants maternelle se distingue-t-elle des autres formes d'infanticide, familicide, néonaticide, homicide-suicide paternel ou meurtre en contexte de séparation ?`,`À quel moment Materia cesse-t-elle d'être portance et devient-elle surcharge ? À quel moment Nox compacte-t-elle le futur ? À quelles conditions Lux devient-il détectable ?`,`Quels signaux faibles n'ont pas été entendus ? À quel moment le phono bascule-t-il en photonique ? Comment le silence domestique devient-il image publique ?`,`Comment tenir ensemble fait pénal, crise psychique, histoire du féminin, non-séparation, survivants et refus de totalisation ?`,`Comment empêcher que l'analyse symbolique ne confisque la réalité des enfants morts et l'avenir des enfants survivants ?`,`Comment penser un féminin non capturé : portance sans sacrifice, matrice sans fusion, soin sans effacement, maternité sans totalisation, sacré sans assignation ?`],Qt=[[`Ashéra, Athirat, ancien Israël, féminin divin`,[`Judith M. Hadley, The Cult of Asherah in Ancient Israel and Judah: Evidence for a Hebrew Goddess, Cambridge University Press, 2000.`,`Mark S. Smith, The Early History of God: Yahweh and the Other Deities in Ancient Israel, Eerdmans, 2e éd., 2002.`,`Othmar Keel & Christoph Uehlinger, Gods, Goddesses, and Images of God in Ancient Israel, Fortress Press / T&T Clark, 1998.`,`William G. Dever, Did God Have a Wife? Archaeology and Folk Religion in Ancient Israel, Eerdmans, 2005.`,`Saul M. Olyan, Asherah and the Cult of Yahweh in Israel, Scholars Press, 1988.`]],[`Reine du ciel, déesses proche-orientales, cultes féminins`,[`Tikva Frymer-Kensky, In the Wake of the Goddesses: Women, Culture and the Biblical Transformation of Pagan Myth, Free Press, 1992.`,`Susan Ackerman, Under Every Green Tree: Popular Religion in Sixth-Century Judah, Scholars Press, 1992.`,`Karel van der Toorn, Family Religion in Babylonia, Syria and Israel, Brill, 1996.`,`Stephanie Dalley, Myths from Mesopotamia, Oxford University Press.`]],[`Féminin, Bible, théologie féministe`,[`Phyllis Trible, Texts of Terror: Literary-Feminist Readings of Biblical Narratives, Fortress Press, 1984.`,`Judith Plaskow, Standing Again at Sinai: Judaism from a Feminist Perspective, HarperOne, 1990.`,`Elizabeth A. Johnson, She Who Is: The Mystery of God in Feminist Theological Discourse, Crossroad, 1992.`,`Elisabeth Schüssler Fiorenza, In Memory of Her, Crossroad, 1983.`,`Rosemary Radford Ruether, Sexism and God-Talk, Beacon Press, 1983.`]],[`Marie, maternité, féminin chrétien`,[`Marina Warner, Alone of All Her Sex: The Myth and the Cult of the Virgin Mary, Oxford University Press, 1976.`,`Jaroslav Pelikan, Mary Through the Centuries: Her Place in the History of Culture, Yale University Press, 1996.`,`Elizabeth A. Johnson, Truly Our Sister: A Theology of Mary in the Communion of Saints, Continuum, 2003.`]],[`Shekhina, féminin juif, mystique`,[`Raphael Patai, The Hebrew Goddess, Wayne State University Press.`,`Gershom Scholem, On the Mystical Shape of the Godhead, Schocken.`,`Moshe Idel, Kabbalah: New Perspectives, Yale University Press.`]],[`Maternité, infanticide intrafamilial, santé mentale`,[`Friedman, S. H., & Resnick, P. J., travaux sur les homicides d'enfants par parent et typologies psychiatriques.`,`Bourget, D., Grace, J., & Whitehurst, L., travaux de synthèse sur les homicides intrafamiliaux d'enfants.`,`Études criminologiques sur la mort parent-enfants, l'homicide-suicide intrafamilial, le néonaticide et le familicide.`,`Données nationales ou régionales : France, Australie, Angleterre / Pays de Galles, États-Unis.`]]],$t=[`sommeil`,`charge nerveuse`,`portage`,`enfants petits`,`bruit`,`rythmes alimentaires`,`cris`,`fatigue`,`traitement possible`,`rupture possible`,`respiration`,`tension musculaire`,`chute`,`accroche au lit`,`gravité`],en=[{title:`Mépris de la dépendance`,text:`Le féminin rappelle que l'humain naît dépendant, porté, lavé, nourri, consolé, soigné. Les puissances d'autonomie méprisent souvent ce rappel : dépendance, chair, naissance, vulnérabilité, soin.`},{title:`Déni du soin`,text:`Le soin fonctionne en disparaissant. Repas prêt, enfant habillé, rendez-vous anticipé, linge propre, peur calmée, crise évitée : tout cela devient invisible lorsqu'il réussit.`},{title:`Déni du corps`,text:`Corps célébré lorsqu'il donne la vie, corps suspect lorsqu'il désire, saigne, parle, vieillit, refuse ou s'épuise. Le corps féminin peut être célébré comme matrice puis méprisé comme matière.`},{title:`Déni de parole`,text:`La femme est souvent parlée par d'autres : parquet, voisins, journalistes, médecins, juristes, commentateurs. La femme parlée remplace alors la femme entendue.`},{title:`Déni économique`,text:`Élever, laver, nourrir, écouter, organiser, anticiper, consoler, rappeler, soigner : tout cela produit le monde sans apparaître toujours comme production.`},{title:`Hypervisibilité de la rupture`,text:`Portance invisible, rupture visible, récit public : ce qui tenait sans apparaître devient soudain scandaleux lorsque cela tombe.`}],tn=[`appel`,`soin`,`hospitalisation`,`voisin`,`enfant confié`,`nuit traversée`,`refus d'un enfant`,`accroche au lit`,`intervention`,`branche terminale`],nn=[[`Local`,`Toulon, Pontcarral, 20 mai 2026`,`événement de condensation`],[`Familial`,`mère, sept enfants, trois morts, quatre survivants`,`charge parentale, fratrie, séparation`],[`Pénal`,`meurtres par ascendant`,`infanticide, homicide intrafamilial`],[`Psychique`,`symptômes évoqués, rupture de traitement rapportée`,`Nox, crise, futur compacté`],[`Social`,`mère seule, relais non visibles`,`portance privée, isolement`],[`Médiatique`,`vidéo, fait divers, articles`,`photonique de surface`],[`Corporel`,`lit, fenêtre, chute, sol`,`biodynamique, gravité, fatigue`],[`Féminin`,`soin, mère, matrice`,`portance méprisée / niée`],[`Antique`,`Ashéra, Reine du ciel, déesses`,`féminin divin comme présence disputée`],[`Monothéiste`,`Sophia, Shekhina, Marie`,`féminin déplacé vers médiation`],[`Moderne`,`mère responsable sans temple`,`sacrifice psychologisé`],[`T^`,`co-présence`,`non-clôture`],[`MNL^`,`Materia / Nox / Lux`,`bascule`],[`MCPP^`,`matrice / chiasme / phono / photonique`,`actualisation`],[`Theoquantique`,`branches possibles`,`branche terminale, reste vivant`]],rn=[`Toulon / Pontcarral devient un point local de condensation : mort parent-enfants, infanticide maternel, fait divers, mère isolée, portance féminine, déni du soin, mépris du corps, féminin divin déplacé, matrice retournée, parole non entendue, image publique tardive, survivants.`,`Le féminin apparaît au-delà d'une capture comme portance ; il est méprisé comme portance. Ce qu'il porte devient invisible tant que cela tient, puis scandaleux lorsque cela tombe.`,`Le mépris du féminin est le mépris de ce qui rend la vie possible sans apparaître comme pouvoir.`,`Materia surcharge. Nox compacte. Lux s'actualise ou reste indétectable. MCPP^ transforme le silence en visibilité. T^ maintient les régimes en co-présence.`,`L'événement rend localement visible une architecture.`],an=[[`France`,`363 enfants tués en milieu intrafamilial entre 2012 et 2016 ; environ un enfant tous les cinq jours selon les travaux institutionnels cités.`],[`Angleterre-Galles`,`342 auteurs d'homicide d'enfant par parent recensés sur 1997-2006 ; 66 % de pères parmi les auteurs condamnés dans l'étude PLOS One.`],[`États-Unis`,`Dans une étude de 30 familles impliquant une mort parent-enfants, 51 enfants sont tués ; l'arme à feu domine fortement les méthodes documentées.`],[`Australie`,`238 incidents d'homicide d'enfant par parent et 284 enfants tués entre 2000-01 et 2011-12 dans les travaux de l'Australian Institute of Criminology.`],[`Japon`,`La catégorie oyako shinju ou muri shinju désigne des configurations parent-enfant de murder-suicide ; les données sont souvent issues d'études de cas ou de presse.`],[`Monde`,`Les parents sont très souvent auteurs dans les homicides de très jeunes enfants, mais les bases nationales restent hétérogènes.`]],on=[[`Le Parisien — premiers éléments et reportage à Pontcarral`,`https://www.leparisien.fr/faits-divers/ce-que-jai-vu-je-ne-peux-pas-le-decrire-a-toulon-un-quartier-sous-le-choc-apres-le-saut-dans-le-vide-dune-mere-et-trois-enfants-20-05-2026-E4TZ6TOC4RH63GH2CMKMCU7XUI.php`],[`Le JDD — enquête ouverte pour meurtres par ascendant`,`https://www.lejdd.fr/Societe/toulon-une-mere-et-trois-jeunes-enfants-meurent-apres-une-chute-du-13e-etage-174429`],[`Reuters Connect — contexte visuel Pontcarral`,`https://www.reutersconnect.com/item/a-mother-commits-suicide-with-three-of-her-children-toulon/dGFnOnJldXRlcnMuY29tLDIwMjY6bmV3c21sX01UMUFCQ1BSMTAwMTMxNzAxNA`],[`Code pénal français — Légifrance`,`https://www.legifrance.gouv.fr/`],[`CNCDH — Avis sur les morts violentes d'enfants dans le cadre familial`,`https://www.cncdh.fr/publications/avis-sur-les-morts-violentes-denfants-dans-le-cadre-familial-2023-6`],[`BMJ Paediatrics Open — child homicide perpetrators worldwide`,`https://bmjpaedsopen.bmj.com/content/1/1/e000112`],[`PLOS One — mental illness in those who kill their children`,`https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0058981`],[`Journal of the American Academy of Psychiatry and the Law — homicide-suicide parent-enfants`,`https://jaapl.org/content/33/4/496`],[`Australian Institute of Criminology — homicide d'enfant par parent, tandi568`,`https://www.aic.gov.au/publications/tandi/tandi568`],[`Australian Institute of Criminology — homicide d'enfant par parent, tandi255`,`https://www.aic.gov.au/publications/tandi/tandi255`],[`Santé publique France`,`https://www.santepubliquefrance.fr/`]],sn=[{title:`Une mère se jette du treizième étage avec trois de ses enfants`,publisher:`Le Matin / reprise AFP, selon document fourni`,author:`Agence France-Presse`,date:`20 mai 2026, 10:45`,image:`images/actus/pontcarral-le-matin-lucien-fortunati.jpeg`,imageAlt:`Immeuble du quartier de Pontcarral où la tragédie est survenue`,credit:`Lucien FORTUNATI`,caption:`Un immeuble du quartier de Pontcarral, où la tragédie est survenue. Crédit : Lucien FORTUNATI. Source : article AFP repris par Le Matin.`,href:`https://www.lematin.ch/story/france-une-mere-et-trois-de-ses-enfants-tombent-du-13e-etage-103566924`,fullText:[{type:`p`,text:`Une femme de 38 ans, qui vivait seule avec ses sept enfants, a mis fin à ses jours en emportant avec elle les trois plus jeunes, mercredi à Toulon.`},{type:`caption`,text:`Un immeuble du quartier de Pontcarral, où la tragédie est survenue. Crédit : Lucien FORTUNATI.`},{type:`p`,text:`Un épouvantable drame est survenu dans un quartier de Toulon (sud), mercredi. Une mère de 38 ans s’est jetée par la fenêtre du 13e étage de son immeuble avec trois de ses enfants en bas âge, a rapporté mercredi le parquet. Personne n'a survécu. Cette femme qui vivait seule avec ses sept enfants « aurait récemment présenté des symptômes psychiatriques et dépressifs, ce qui reste à confirmer », a indiqué le procureur de Toulon, Raphaël Balland, excluant à ce stade « l’intervention d’un tiers ».`},{type:`p`,text:`Mercredi à l’aube, le corps de la femme a été retrouvé au pied de son immeuble du quartier populaire de Pontcarral. Elle était entourée des corps de ses trois derniers enfants, deux garçons et une fille âgés de 3, 4 et 6 ans. Selon les premiers éléments de l’enquête, « la mère se serait jetée d’elle-même du 13e étage avec les trois enfants décédés », a expliqué le procureur, ajoutant que les corps seraient autopsiés. Il a assuré que la famille était inconnue du parquet « en l’absence de tout signalement concernant d’éventuelles difficultés sociales ou familiales. »`},{type:`p`,text:`Une enquête a été ouverte pour « meurtres par ascendant ». Des expertises toxicologiques sont attendues. Quant aux quatre enfants aînés, ils ont été pris en charge par les services compétents et bénéficient d’un soutien psychologique », a encore précisé le parquet. Le drame a choqué les riverains de la cité Pontcarral, où les secours ont dit s’être mobilisés avec un « dispositif conséquent ». Les forces de l’ordre ont également lavé le site avec des jets d’eau.`},{type:`h`,text:`« Tu veux te suicider, suicide-toi toute seule ! »`},{type:`p`,text:`Tandis que des voisins aux fenêtres observaient les derniers policiers quitter les lieux, des petits groupes du quartier discutaient du drame. « Tu veux te suicider, suicide-toi toute seule ! », a déploré une voisine, travailleuse en Ehpad âgée de 36 ans, qui n’a pas souhaité donner son nom. « Ça va être terrible pour les enfants ici, c’est traumatisant », ajoute-t-elle. Safiri Ahmed, 67 ans, était chez lui quand il a entendu un grand bruit sourd. « Une dame a crié “Au secours, au secours !”, et j’ai demandé à ce qu’on appelle une ambulance », a-t-il raconté.`},{type:`p`,text:`Le préfet du Var Simon Babre a déploré sur X un « terrible drame », s’associant « à la douleur de la famille et de tous les habitants du quartier. » Il a dit s’être rendu sur place avec le procureur et la maire de la ville, précisant que « les services de l’État contribuent à l’enquête menée par le procureur de la République de Toulon. » Selon « Var-Matin », une cellule d’écoute pour les habitants est mise en place dans le quartier. Les trois enfants aînés de la fratrie sont nés d’un premier père, les quatre derniers d’un second.`}]},{title:`Troubles psychiatriques, mère de sept enfants... ce que l'on sait de la chute mortelle du 13e étage`,publisher:`La Dépêche du Midi`,author:`Vanessa Abadie`,date:`21 mai 2026, 08:21 ; mise à jour 08:30`,image:`images/actus/pontcarral-depeche-afp-miguel-medina.jpeg`,imageAlt:`Cité du quartier de Pontcarral à Toulon`,credit:`AFP / Miguel MEDINA`,caption:`Cité du quartier de Pontcarral à Toulon. Crédit : AFP / Miguel MEDINA. Source : La Dépêche du Midi.`,href:`https://www.ladepeche.fr/2026/05/21/troubles-psychiatriques-mere-de-sept-enfants-ce-que-lon-sait-de-la-chute-mortelle-du-13e-etage-dune-femme-et-de-trois-de-ses-enfants-a-toulon-13381482.php`,fullText:[{type:`caption`,text:`Une femme de 38 ans s’est jetée du 13e étage de cette cité du quartier de Pontcarral, à Toulon, avec trois de ses enfants, mercredi matin. Crédit : AFP / Miguel MEDINA.`},{type:`p`,text:`L’essentiel. Une mère de famille se serait jetée d’elle-même du 13e étage avec trois de ses enfants en bas âge. Le parquet a ouvert une enquête et des expertises toxicologiques sont attendues.`},{type:`p`,text:`C'est un drame absolu. Une mère de 38 ans s’est jetée avec trois de ses enfants par la fenêtre du 13e étage de son immeuble, tuant deux garçons et une fillette en bas âge, dans un quartier populaire de Toulon, a annoncé mercredi 20 mai le parquet. On fait le point.`},{type:`p`,text:`À lire aussi : Une femme et ses trois enfants meurent après une chute du 13e étage dans une cité de Toulon.`},{type:`h`,text:`Que s'est-il passé ?`},{type:`p`,text:`Le corps de la femme a été retrouvé très tôt mercredi matin, au pied de son immeuble du quartier populaire de Pontcarral à Toulon (Var). Elle était entourée des corps de ses trois derniers enfants, âgés de trois ans, quatre et six ans. Deux garçons et une fille, selon les informations du parquet.`},{type:`p`,text:`D'après les premiers éléments de l'enquête, la mère de famille se serait jetée du 13e étage avec ses trois enfants. Elle aurait réveillé ses plus jeunes enfants, leur expliquant qu'ils devaient sauter avec elle. L'un d'eux, âgé de sept ans, aurait refusé et serait resté accroché à son lit, raconte une source policière. « Aucun élément ne permet pour le moment d'impliquer l'intervention d'un tiers », a souligné le procureur Raphaël Balland.`},{type:`p`,text:`Voir aussi : Laissés seuls dans un appartement, trois enfants sont surpris par un incendie : la fillette de 10 ans saute du 4e étage.`},{type:`h`,text:`Qui est la mère de famille ?`},{type:`p`,text:`Selon les informations de Var-Matin, cette femme âgée de 38 ans et mère de sept enfants sortait d'un hôpital psychiatrique de Marseille et était en rupture de traitement. Originaire des Comores, elle est décrite par ses voisins comme une femme « discrète » et « sans problèmes ».`},{type:`p`,text:`Les trois aînés de la fratrie sont nés d'un premier père. Les quatre derniers d'un second père. La famille était inconnue du parquet et aucun signalement n'était connu de la justice concernant « d'éventuelles difficultés sociales ou familiales », a expliqué le procureur.`},{type:`h`,text:`Que vont devenir les quatre enfants ?`},{type:`p`,text:`Pour comprendre les circonstances de ce drame, une enquête a été ouverte pour « meurtre par ascendant ». Le préfet du Var, Simon Babre, a déploré ce « terrible drame ». Il s'est rendu sur place avec le procureur et la mairie de la ville. Quant aux quatre enfants aînés présents au moment du drame, ils ont été pris en charge par les services compétents et bénéficient pour l'heure d’un soutien psychologique.`},{type:`p`,text:`Dans cette cité, les habitants sont sous le choc. Un voisin qui réside au premier étage du bâtiment raconte à RMC avoir vu d'abord le corps de la mère de famille. « Petit à petit, on a pris conscience qu'il y avait trois autres corps et que c'était des jeunes enfants », explique-t-il. Une cellule de soutien psychologique a été mise en place dans le quartier pour soutenir les habitants.`}]}];function cn(e){typeof e==`function`&&e(`actus`)}function ln({id:e,eyebrow:t,title:n,children:r,wide:i=!1}){return(0,C.jsxs)(`section`,{id:e,className:i?`toulon-section toulon-section-wide`:`toulon-section`,children:[t&&(0,C.jsx)(`p`,{className:`toulon-eyebrow`,children:t}),(0,C.jsx)(`h2`,{children:n}),r]})}function un({title:e,children:t,tone:n=`cyan`}){return(0,C.jsxs)(`article`,{className:`toulon-card toulon-card-${n}`,children:[(0,C.jsx)(`h3`,{children:e}),t]})}function dn({label:e,value:t}){return(0,C.jsxs)(`div`,{className:`toulon-bar`,children:[(0,C.jsxs)(`div`,{className:`toulon-bar-label`,children:[(0,C.jsx)(`span`,{children:e}),(0,C.jsxs)(`strong`,{children:[t,` %`]})]}),(0,C.jsx)(`div`,{className:`toulon-bar-track`,children:(0,C.jsx)(`span`,{style:{width:`${Math.min(Math.max(t,0),100)}%`}})})]})}function k({children:e,small:t}){return(0,C.jsx)(`div`,{className:t?`theo-formula theo-formula-small`:`theo-formula`,children:e})}function fn(){return(0,C.jsxs)(`section`,{id:`video`,className:`toulon-video-hero`,"aria-labelledby":`toulon-video-title`,children:[(0,C.jsx)(`div`,{className:`toulon-video-frame`,children:(0,C.jsx)(`iframe`,{src:`https://www.youtube-nocookie.com/embed/ug3pGNri4g8`,title:`Toulon : le choc après le décès d'une mère de famille et ses trois enfants`,loading:`lazy`,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share`,allowFullScreen:!0})}),(0,C.jsxs)(`div`,{className:`toulon-video-copy`,children:[(0,C.jsx)(`p`,{className:`toulon-eyebrow`,children:`Vidéo de référence · seuil médiatique`}),(0,C.jsx)(`h2`,{id:`toulon-video-title`,children:`Toulon : le choc après le décès d'une mère de famille et ses trois enfants`}),(0,C.jsx)(`p`,{className:`toulon-video-source`,children:`Mayotte la 1ère · reportage court · régime du fait divers`}),(0,C.jsx)(`p`,{children:`Cette vidéo ouvre la page comme premier seuil public d'apparition du drame : image brève, quartier, secours, sidération, format télévisuel court. Elle sert de point d'entrée, puis l'étude déplie les couches que ce format contracte.`}),(0,C.jsx)(`a`,{className:`toulon-video-link`,href:`https://youtu.be/ug3pGNri4g8?si=x6orHPeUN301ycA4`,target:`_blank`,rel:`noreferrer`,children:`Ouvrir la vidéo sur YouTube`})]})]})}function pn(){return(0,C.jsx)(ln,{id:`compression-mediatique`,eyebrow:`Seuil médiatique`,title:`Le fait divers comme compression médiatique`,wide:!0,children:(0,C.jsxs)(`div`,{className:`media-compression`,children:[(0,C.jsx)(`p`,{children:`La vidéo traite le drame dans le format médiatique court du fait divers : une scène localisée, un quartier sous le choc, des secours, une image forte, une durée brève.`}),(0,C.jsx)(`p`,{children:`Ce régime d'information ne se confond pas avec le faux. Il appartient plutôt à la compression : il rend visible l'événement au moment où il est déjà irréversible.`}),(0,C.jsx)(`p`,{children:`Dans la logique de cette page, la vidéo fonctionne comme seuil : première apparition publique, puis ouverture vers ce que le format court contracte — qualification judiciaire, enfants survivants, éléments psychiatriques rapportés, articles sources, statistiques de la mort parent-enfants, hypothèse Theo sur la portance féminine et la matrice.`}),(0,C.jsxs)(k,{small:!0,children:[(0,C.jsx)(`strong`,{children:`Le fait divers ne ment pas nécessairement ; il contracte.`}),(0,C.jsx)(`em`,{children:`Il transforme une matrice longue en séquence brève, une portance effondrée en choc local, une histoire de femmes, d'enfants, de soin, de psychiatrie, de voisinage et de survivants en format d'actualité consommable.`})]}),(0,C.jsxs)(`div`,{className:`media-compression-grid`,children:[(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`span`,{children:`Photonique`}),(0,C.jsx)(`p`,{children:`Façade, secours, quartier, sidération, titre, vignette, image regardable.`})]}),(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`span`,{children:`Phono antérieur`}),(0,C.jsx)(`p`,{children:`Signaux faibles, fatigue, rupture de traitement possible, paroles non reçues, relais non détectés.`})]})]}),(0,C.jsxs)(k,{small:!0,children:[(0,C.jsx)(`strong`,{children:`Ce qui n'a pas été entendu devient image courte.`}),(0,C.jsx)(`em`,{children:`Quand le féminin-portance s'effondre, la société commence souvent par voir la chute avant de voir ce qui ne portait plus.`})]})]})})}function mn(){return(0,C.jsxs)(ln,{id:`documents-sources`,eyebrow:`Annexe documentaire`,title:`Documents sources — articles de presse fournis`,wide:!0,children:[(0,C.jsx)(`p`,{children:`Les deux textes ci-dessous sont reproduits comme documents sources de travail, à partir du document fourni. Ils ne constituent pas l'analyse Theo elle-même. Ils servent à conserver la trace documentaire : formulation AFP / Le Matin, formulation La Dépêche du Midi, crédits images, liens sources et éléments factuels repris dans l'étude.`}),(0,C.jsx)(`div`,{className:`source-docs-grid`,children:sn.map(e=>(0,C.jsxs)(`article`,{className:`source-doc-card`,children:[(0,C.jsxs)(`figure`,{children:[(0,C.jsx)(`img`,{src:`/T/theo/${e.image}`,alt:e.imageAlt,loading:`lazy`}),(0,C.jsx)(`figcaption`,{children:e.caption})]}),(0,C.jsxs)(`div`,{className:`source-doc-body`,children:[(0,C.jsx)(`h3`,{children:e.title}),(0,C.jsxs)(`dl`,{children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`dt`,{children:`Support`}),(0,C.jsx)(`dd`,{children:e.publisher})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`dt`,{children:`Auteur / agence`}),(0,C.jsx)(`dd`,{children:e.author})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`dt`,{children:`Date`}),(0,C.jsx)(`dd`,{children:e.date})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`dt`,{children:`Crédit image`}),(0,C.jsx)(`dd`,{children:e.credit})]}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`dt`,{children:`Lien source`}),(0,C.jsx)(`dd`,{children:(0,C.jsx)(`a`,{href:e.href,target:`_blank`,rel:`noreferrer`,children:`Ouvrir l'article source`})})]})]}),(0,C.jsxs)(`details`,{className:`source-doc-details`,children:[(0,C.jsx)(`summary`,{children:`Lire l'article complet fourni`}),(0,C.jsx)(`div`,{className:`source-doc-fulltext`,children:e.fullText.map((e,t)=>e.type===`h`?(0,C.jsx)(`h4`,{children:e.text},`${e.type}-${t}`):e.type===`caption`?(0,C.jsx)(`p`,{className:`source-doc-inline-caption`,children:e.text},`${e.type}-${t}`):(0,C.jsx)(`p`,{children:e.text},`${e.type}-${t}`))})]})]})]},e.title))})]})}function hn(){return(0,C.jsx)(ln,{id:`analyse-theo`,eyebrow:`Lecture complémentaire`,title:`Analyse complémentaire — T^ × MNL^ × MCPP^ quantique`,wide:!0,children:(0,C.jsxs)(`div`,{className:`theo-analysis`,children:[(0,C.jsx)(`p`,{className:`theo-analysis-subtitle`,children:`Fermeture du champ familial, effondrement du possible, rupture de portance`}),(0,C.jsxs)(`div`,{className:`theo-ethical`,children:[(0,C.jsx)(`strong`,{children:`Point de réel`}),(0,C.jsx)(`p`,{children:`Le réel central demeure dense : trois enfants sont morts, quatre enfants survivent, une mère est morte, un quartier reçoit l'onde de choc. L'analyse structurale s'ouvre depuis ce noyau de réel : une fermeture locale du champ où l'effondrement d'un parent absorbe l'avenir séparé des enfants.`})]}),(0,C.jsx)(`p`,{children:`Cette lecture se tient dans le champ : là où le fait pénal, la crise psychique possible, la charge sociale, la fracture familiale, la visibilité médiatique et la survivance des enfants se croisent, se courbent et laissent des restes vivants.`}),(0,C.jsx)(`p`,{children:`Elle travaille depuis les seuils : plusieurs régimes se contractent, plusieurs branches coexistent, puis une branche terminale s'actualise dans une densification irréversible.`}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`span`,{children:`La mort parent-enfants surgit au point où`}),(0,C.jsx)(`strong`,{children:`l'effondrement du parent absorbe l'avenir séparé de l'enfant.`}),(0,C.jsx)(`em`,{children:`"Je meurs" ne devait pas devenir "nous mourons".`})]}),(0,C.jsxs)(`div`,{className:`theo-pillars`,children:[(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`span`,{children:`T^`}),(0,C.jsx)(`p`,{children:`Tenir ensemble les régimes sans les totaliser : judiciaire, psychique, social, corporel, médiatique, familial, symbolique, survivant.`})]}),(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`span`,{children:`MNL^`}),(0,C.jsx)(`p`,{children:`Lire la bascule : Materia surcharge, Nox compacte, Lux ne devient plus détectable à temps.`})]}),(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`span`,{children:`MCPP^`}),(0,C.jsx)(`p`,{children:`Suivre le passage du signal faible au visible trop tard, de la multiplicité des possibles à l'actualisation irréversible.`})]})]}),(0,C.jsxs)(`details`,{open:!0,className:`theo-detail`,children:[(0,C.jsx)(`summary`,{children:`T^ : portance du champ et seuil de condensation`}),(0,C.jsxs)(`div`,{className:`theo-detail-content`,children:[(0,C.jsx)(`p`,{children:`T^ maintient un holochamp dissymétrique : plusieurs régimes locaux coexistent, se touchent, se contaminent parfois et entrent en condensation. Le drame apparaît comme configuration locale extrême : plans pénal, psychique, social, corporel, familial, médiatique et survivant se nouent dans une même courbure.`}),(0,C.jsxs)(`div`,{className:`theo-table`,children:[(0,C.jsxs)(`div`,{className:`theo-table-head`,children:[(0,C.jsx)(`span`,{children:`Régime local`}),(0,C.jsx)(`span`,{children:`Ce qu'il rend visible`}),(0,C.jsx)(`span`,{children:`Risque s'il devient souverain`})]}),Ut.map(([e,t,n])=>(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`strong`,{children:e}),(0,C.jsx)(`span`,{children:t}),(0,C.jsx)(`span`,{children:n})]},e))]})]})]}),(0,C.jsxs)(`details`,{className:`theo-detail`,children:[(0,C.jsx)(`summary`,{children:`Libellule et coin de papillon : portance, césure, non-fusion`}),(0,C.jsxs)(`div`,{className:`theo-detail-content`,children:[(0,C.jsx)(`p`,{children:`La figure libellule désigne une portance par micro-ajustements : plusieurs ailes, plusieurs axes, plusieurs corrections instantanées. Un champ familial tient souvent ainsi, non par stabilité parfaite, mais par ajustements distribués : un enfant pleure, un autre dort ; un parent fatigue, un voisin aide ; l'école signale, un proche appelle ; le corps s'épuise, le sommeil restaure.`}),(0,C.jsxs)(k,{small:!0,children:[(0,C.jsx)(`strong`,{children:`Libellule : tenir sans fixation.`}),(0,C.jsx)(`strong`,{children:`Chute : fixation terminale dans la gravité.`})]}),(0,C.jsx)(`p`,{children:`Le coin de papillon désigne la césure minimale : le petit écart qui empêche la fusion mortelle. Une porte qui s'ouvre, un appel décroché, une voisine qui insiste, une nuit ailleurs, un enfant confié, un médecin qui entend, une institution qui voit le signal faible.`}),(0,C.jsxs)(k,{small:!0,children:[(0,C.jsx)(`strong`,{children:`ma mort possible ≠ leur mort nécessaire`}),(0,C.jsx)(`em`,{children:`Le coin de papillon maintient l'enfant hors de la chute du parent.`})]})]})]}),(0,C.jsxs)(`div`,{className:`theo-mnl`,children:[(0,C.jsx)(`h3`,{children:`MNL^ : non pas trois cases, mais une dynamique de bascule`}),(0,C.jsx)(`div`,{className:`theo-mnl-grid`,children:Wt.map(([e,t],n)=>(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`span`,{children:n+1}),(0,C.jsx)(`h4`,{children:e}),(0,C.jsx)(`p`,{children:t})]},e))}),(0,C.jsx)(k,{small:!0,children:(0,C.jsx)(`strong`,{children:`Materia se surcharge → Nox compacte l'horizon → Lux ne devient plus détectable à temps.`})})]}),(0,C.jsxs)(`details`,{className:`theo-detail`,children:[(0,C.jsx)(`summary`,{children:`MCPP^ quantique : matrice, chiasme, phono, photonique, actualisation`}),(0,C.jsxs)(`div`,{className:`theo-detail-content`,children:[(0,C.jsx)(`p`,{children:`"Quantique" ne signifie pas physique du drame. Il signifie ici : champ de possibles, seuil d'actualisation, branche irréversible. Plusieurs possibles peuvent coexister pratiquement, affectivement, institutionnellement, avant qu'une seule branche ne s'actualise de manière irréversible.`}),(0,C.jsx)(`div`,{className:`theo-flow`,children:Gt.map(e=>(0,C.jsx)(`span`,{children:e},e))}),(0,C.jsxs)(k,{small:!0,children:[(0,C.jsx)(`strong`,{children:`Ce qui n'a pas été entendu devient visible trop tard.`}),(0,C.jsx)(`em`,{children:`phono faible avant → photonique violent après`})]}),(0,C.jsx)(`p`,{children:`Le chiasme est brutal : ce qui devait protéger devient ce qui détruit. Le parent qui devait garantir la survie séparée de l'enfant devient celui par qui cette séparation est abolie.`})]})]}),(0,C.jsxs)(`div`,{className:`theo-axis-block`,children:[(0,C.jsx)(`h3`,{children:`Tableau multi-axes : croisements opératoires`}),(0,C.jsx)(`div`,{className:`theo-axis-grid`,children:Kt.map(([e,t])=>(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`strong`,{children:e}),(0,C.jsx)(`p`,{children:t})]},e))})]}),(0,C.jsxs)(`details`,{className:`theo-detail`,children:[(0,C.jsx)(`summary`,{children:`Seuil, enfants, trajectoires, survivants`}),(0,C.jsxs)(`div`,{className:`theo-detail-content`,children:[(0,C.jsx)(`h3`,{children:`Le seuil : fenêtre, étage, gravité`}),(0,C.jsx)(`p`,{children:`Il ne faut pas surinterpréter symboliquement le nombre 13. Mais la verticalité, elle, est structurante : intérieur familial / espace public, appartement / sol, dedans / dehors, portance / gravité, seuil / irréversible, secret domestique / scène collective.`}),(0,C.jsx)(`h3`,{children:`Les enfants : altérité irréductible`}),(0,C.jsxs)(k,{small:!0,children:[(0,C.jsx)(`strong`,{children:`L'enfant n'est pas le prolongement existentiel du parent.`}),(0,C.jsx)(`em`,{children:`Le meurtre d'enfant, dans la mort parent-enfants, est la destruction de l'avenir séparé de l'enfant.`})]}),(0,C.jsx)(`h3`,{children:`Trajectoires différentes, fermeture commune`}),(0,C.jsxs)(`div`,{className:`theo-table theo-table-three`,children:[(0,C.jsxs)(`div`,{className:`theo-table-head`,children:[(0,C.jsx)(`span`,{children:`Trajectoire`}),(0,C.jsx)(`span`,{children:`Logique possible`}),(0,C.jsx)(`span`,{children:`Risque terminal`})]}),qt.map(([e,t,n])=>(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`strong`,{children:e}),(0,C.jsx)(`span`,{children:t}),(0,C.jsx)(`span`,{children:n})]},e))]}),(0,C.jsx)(`h3`,{children:`Les survivants : champ fracturé mais non clos`}),(0,C.jsx)(`p`,{children:`Dans le cas de Toulon, quatre enfants ont survécu. Le drame n'est pas une scène totalement close. Il reste un champ vivant, fracturé, exposé, vulnérable. T^ devient vital : ne pas totaliser les survivants par la catastrophe.`}),(0,C.jsxs)(k,{small:!0,children:[(0,C.jsx)(`strong`,{children:`Ils ne sont pas "les enfants du drame".`}),(0,C.jsx)(`em`,{children:`Ils sont des vies continuées dans un champ blessé.`})]})]})]}),(0,C.jsxs)(`details`,{className:`theo-detail`,children:[(0,C.jsx)(`summary`,{children:`Prévention : rendre Lux détectable avant l'irréversible`}),(0,C.jsxs)(`div`,{className:`theo-detail-content`,children:[(0,C.jsx)(`p`,{children:`Prévenir, ce n'est pas prédire. C'est rouvrir une branche avant que le champ ne se contracte. Repérer quand Materia sature, quand Nox compacte, quand Lux n'est plus détectable, puis réintroduire une césure avant l'actualisation terminale.`}),(0,C.jsxs)(`ul`,{className:`theo-signal-list`,children:[(0,C.jsx)(`li`,{children:`propos suicidaires incluant les enfants ;`}),(0,C.jsx)(`li`,{children:`phrases du type "ils ne pourront pas vivre sans moi" ;`}),(0,C.jsx)(`li`,{children:`peur obsessionnelle de perdre les enfants ;`}),(0,C.jsx)(`li`,{children:`isolement brutal, rupture du sommeil, disparition des relais ;`}),(0,C.jsx)(`li`,{children:`conflit de garde aigu, honte ou ruine totale ;`}),(0,C.jsx)(`li`,{children:`impossibilité d'imaginer un futur séparé.`})]})]})]}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`span`,{children:`À quel moment un champ encore multiple s'est-il fermé`}),(0,C.jsx)(`strong`,{children:`au point qu'une seule branche — la pire — soit devenue actualisable ?`}),(0,C.jsx)(`em`,{children:`Comment maintenir, même au bord de l'effondrement, la différence minimale entre la mort du parent et l'avenir possible de l'enfant ?`})]}),(0,C.jsxs)(`div`,{className:`theo-ethical theo-final`,children:[(0,C.jsx)(`strong`,{children:`Point de survivance`}),(0,C.jsx)(`p`,{children:`Cette analyse T^ × MNL^ × MCPP^ tient la densité du champ : acte pénal, crise possible, charge du réel, nuit subjective, relais absents ou invisibles, visibilité trop tardive, survivants et avenir encore ouvert. Le symbole n'absorbe pas le réel ; il devient une ligne de lecture parmi les restes vivants.`})]})]})})}function gn(){return(0,C.jsx)(ln,{id:`hypothese-feminin`,eyebrow:`Hypothèse de recherche`,title:`Hypothèse de recherche — Drame des femmes, féminin divin et portance retournée`,wide:!0,children:(0,C.jsxs)(`div`,{className:`feminine-hypothesis`,children:[(0,C.jsx)(`p`,{className:`feminine-subtitle`,children:`De la matrice sacrée à la mère isolée : quand la portance cesse d'être portée`}),(0,C.jsxs)(`div`,{className:`feminine-ethical`,children:[(0,C.jsx)(`strong`,{children:`Clause de réel`}),(0,C.jsx)(`p`,{children:`Le drame réel demeure le noyau de densité depuis lequel le symbole devient lisible.`}),(0,C.jsx)(`p`,{children:`Les enfants morts ne sont pas des figures. La mère morte n'est pas une métaphore. Les enfants survivants ne sont pas un motif narratif.`})]}),(0,C.jsxs)(`div`,{className:`feminine-status`,children:[(0,C.jsx)(`strong`,{children:`Statut de cette hypothèse`}),(0,C.jsx)(`p`,{children:`Cette analyse ne remplace pas le niveau factuel, judiciaire, criminologique ou psychiatrique. Elle propose une hypothèse Theo secondaire, située après les faits, les documents sources, les données comparées et l'analyse T^ × MNL^ × MCPP^ : une lecture de la portance féminine, du féminin divin antique, de la matrice, d'Ashéra / Athirat, de la Reine du ciel, des déplacements monothéistes, de Marie, de la modernité et de la mort parent-enfants comme anti-naissance.`}),(0,C.jsx)(`p`,{children:`Elle ne dit pas que le drame "symbolise la femme". Elle lit une scène-limite où une fonction historiquement assignée au féminin — porter la vie, l'enfant, le soin, la maison, le deuil, la présence, parfois le divin — semble se retourner en chute lorsque plus rien ne porte celle qui porte.`})]}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`span`,{children:`Le féminin n'est pas ici une essence.`}),(0,C.jsx)(`strong`,{children:`Il est une fonction de portance capturée, exaltée, requise, puis parfois abandonnée au moment même où elle sature.`}),(0,C.jsx)(`em`,{children:`On a retiré le temple, mais gardé le sacrifice.`})]}),(0,C.jsx)(`div`,{className:`feminine-card-grid`,children:Jt.map(([e,t])=>(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`h3`,{children:e}),(0,C.jsx)(`p`,{children:t})]},e))}),(0,C.jsxs)(`div`,{className:`feminine-short-toc`,"aria-label":`Sommaire de l'hypothèse`,children:[Yt.map((e,t)=>(0,C.jsxs)(`a`,{href:`#feminin-part-${t+1}`,children:[t+1,`. `,e.title]},e.title)),(0,C.jsx)(`a`,{href:`#feminin-axes`,children:`Tableau multi-axes`}),(0,C.jsx)(`a`,{href:`#feminin-recherche`,children:`Programme de recherche`}),(0,C.jsx)(`a`,{href:`#feminin-bibliographie`,children:`Bibliographie indicative`})]}),(0,C.jsx)(`div`,{className:`feminine-details`,children:Yt.map((e,t)=>(0,C.jsxs)(`details`,{id:`feminin-part-${t+1}`,className:`feminine-detail`,open:t<2,children:[(0,C.jsx)(`summary`,{children:e.title}),(0,C.jsx)(`div`,{className:`feminine-detail-content`,children:e.content.map(e=>(0,C.jsx)(`p`,{children:e},e))})]},e.title))}),(0,C.jsxs)(`div`,{id:`feminin-axes`,className:`feminine-axis-block`,children:[(0,C.jsx)(`h3`,{children:`Tableau multi-axes total`}),(0,C.jsxs)(`div`,{className:`feminine-axis-table`,role:`table`,"aria-label":`Tableau multi-axes de l'hypothèse féminin divin et portance retournée`,children:[(0,C.jsxs)(`div`,{className:`feminine-axis-head`,role:`row`,children:[(0,C.jsx)(`span`,{role:`columnheader`,children:`Axe`}),(0,C.jsx)(`span`,{role:`columnheader`,children:`Question`}),(0,C.jsx)(`span`,{role:`columnheader`,children:`Lecture`})]}),Xt.map(([e,t,n])=>(0,C.jsxs)(`div`,{role:`row`,children:[(0,C.jsx)(`strong`,{role:`cell`,children:e}),(0,C.jsx)(`span`,{role:`cell`,children:t}),(0,C.jsx)(`span`,{role:`cell`,children:n})]},e))]})]}),(0,C.jsxs)(`div`,{className:`feminine-thesis`,children:[(0,C.jsx)(`h3`,{children:`Thèse forte en forme longue`}),(0,C.jsx)(`p`,{children:`Le drame de Toulon manifeste, sous forme terminale, une crise de la portance : une femme concrète, mère de sept enfants, possiblement située dans une rupture psychiatrique et sociale, devient le point où la fonction maternelle se retourne contre elle-même.`}),(0,C.jsx)(`p`,{children:`De l'Antiquité aux monothéismes, puis à la modernité, le féminin a souvent été pensé comme puissance de vie, matrice, médiation, compassion, soin, maison, présence, seuil, corps de passage, lieu d'incarnation. Mais cette puissance a été simultanément capturée, surveillée, subordonnée, médicalisée, rendue responsable d'elle-même.`}),(0,C.jsx)(`p`,{children:`La mort parent-enfants apparaît alors comme une anti-naissance : non pas l'expression du féminin, mais son effondrement sous une charge devenue sans dehors. Materia surcharge ; Nox compacte ; Lux ne perce plus ; MCPP^ transforme le silence en visibilité trop tardive ; T^ refuse que cette scène devienne une explication totale.`})]}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`strong`,{children:`Depuis l'Antiquité, le féminin est souvent pensé comme ce qui porte : la terre, l'arbre, la mer, le ventre, la maison, le deuil, la grâce, l'enfant, la présence divine.`}),(0,C.jsx)(`em`,{children:`Mais lorsque cette portance est capturée sans relais, sacralisée sans souveraineté, exigée sans reconnaissance, elle peut devenir un lieu de rupture.`})]}),(0,C.jsxs)(`div`,{id:`feminin-recherche`,className:`feminine-research`,children:[(0,C.jsx)(`h3`,{children:`Programme de recherche possible`}),(0,C.jsx)(`div`,{className:`feminine-question-grid`,children:Zt.map((e,t)=>(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`span`,{children:String(t+1).padStart(2,`0`)}),(0,C.jsx)(`p`,{children:e})]},e))})]}),(0,C.jsxs)(`div`,{id:`feminin-bibliographie`,className:`feminine-bibliography`,children:[(0,C.jsx)(`h3`,{children:`Bibliographie indicative`}),(0,C.jsx)(`p`,{children:`Cette bibliographie soutient les axes historiques et théologiques sans transformer la page Actus en thèse universitaire complète.`}),(0,C.jsx)(`div`,{className:`feminine-biblio-grid`,children:Qt.map(([e,t])=>(0,C.jsxs)(`details`,{className:`feminine-detail`,children:[(0,C.jsx)(`summary`,{children:e}),(0,C.jsx)(`div`,{className:`feminine-detail-content`,children:(0,C.jsx)(`ul`,{children:t.map(e=>(0,C.jsx)(`li`,{children:e},e))})})]},e))})]}),(0,C.jsxs)(`div`,{className:`feminine-final`,children:[(0,C.jsx)(`strong`,{children:`Point de tenue`}),(0,C.jsx)(`p`,{children:`L'hypothèse ne justifie pas l'acte, ne l'esthétise pas, ne le réduit pas à la psychiatrie, ne transforme pas le féminin divin en nostalgie, et ne confond pas résonance structurale et causalité historique. Elle demande seulement comment penser une portance non capturée : portance sans sacrifice, matrice sans fusion, soin sans effacement, maternité sans totalisation, sacré sans assignation.`})]})]})})}function _n(){return(0,C.jsx)(ln,{id:`architecture-condensation`,eyebrow:`Architecture de condensation`,title:`Toulon / Pontcarral — événement de condensation locale`,wide:!0,children:(0,C.jsxs)(`div`,{className:`condensation-section`,children:[(0,C.jsx)(`p`,{className:`condensation-subtitle`,children:`Architecture transhistorique, morphogénétique, biodynamique et quantique — T^ × MNL^ × MCPP^ comme grammaires de lecture, non comme explications souveraines.`}),(0,C.jsxs)(`div`,{className:`feminine-status`,children:[(0,C.jsx)(`strong`,{children:`Régime de lecture`}),(0,C.jsx)(`p`,{children:`Cette section ne cherche pas un discours vrai contre un discours faux. Elle maintient un champ de formulations possibles : lignes locales, résonances transhistoriques, seuils corporels, branches non actualisées, formes qui tiennent un instant puis se retirent si elles absorbent trop.`}),(0,C.jsx)(`p`,{children:`L'événement local se lit comme condensation, puis comme résonances, branches coexistantes, dynamiques morphogénétiques, actualisations partielles et restes non clos.`}),(0,C.jsx)(k,{small:!0,children:(0,C.jsx)(`strong`,{children:`événement local → condensation → résonances → branches coexistantes → dynamiques morphogénétiques → actualisations partielles → restes non clos`})})]}),(0,C.jsxs)(`div`,{className:`condensation-tenue`,children:[(0,C.jsx)(`h3`,{children:`Point de tenue biodynamique`}),(0,C.jsx)(`p`,{children:`La lecture part du vivant : souffle, rythme, sommeil, charge nerveuse, portage, faim, cris, peau, fatigue, traitement, rupture, lit, fenêtre, gravité.`}),(0,C.jsx)(`p`,{children:`Le champ familial respire tant que les portances circulent. Lorsque ces circulations se raréfient, la charge se concentre, le corps devient nœud, Materia se densifie, Nox compacte le futur, Lux reste parfois abstrait, parfois proche, parfois indétectable.`}),(0,C.jsx)(`p`,{children:`Toulon / Pontcarral s'actualise comme point local de condensation : mort parent-enfants, infanticide maternel, fait divers, charge de soin, féminin-portance, mépris du corps, déni du soin, matrice retournée, enfant accroché au lit, survivants, quartier, image, mémoire.`}),(0,C.jsx)(`p`,{children:`La pensée suit les courbures du vivant : branches coexistantes, seuils, bascules, résonances, actualisations partielles, restes non clos.`})]}),(0,C.jsxs)(`div`,{className:`condensation-grid`,children:[(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`h3`,{children:`Biodynamique — corps, rythme, charge`}),(0,C.jsx)(`p`,{children:`Le corps ne sert pas de métaphore. Il encaisse.`}),(0,C.jsx)(`div`,{className:`condensation-chip-grid`,children:$t.map(e=>(0,C.jsx)(`span`,{children:e},e))})]}),(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`h3`,{children:`Theoquantique — branches, seuil, actualisation`}),(0,C.jsx)(`p`,{children:`Le champ ne se présente pas comme ligne unique. Il se présente comme ensemble de branches, dont certaines restent non actualisées.`}),(0,C.jsx)(`div`,{className:`condensation-chip-grid`,children:tn.map(e=>(0,C.jsx)(`span`,{children:e},e))})]})]}),(0,C.jsxs)(k,{children:[(0,C.jsx)(`strong`,{children:`Le corps féminin ne symbolise pas la charge ; il l'encaisse.`}),(0,C.jsx)(`em`,{children:`L'événement n'épuise pas le champ. Il l'entaille.`})]}),(0,C.jsxs)(`details`,{className:`feminine-detail`,open:!0,children:[(0,C.jsx)(`summary`,{children:`Mépris, déni, disqualification — portance niée`}),(0,C.jsxs)(`div`,{className:`feminine-detail-content`,children:[(0,C.jsx)(`p`,{children:`Le féminin n'est pas seulement capturé comme portance. Il est souvent méprisé comme portance. Ce qu'il porte reste invisible tant que cela tient, puis devient scandaleux lorsque cela tombe.`}),(0,C.jsx)(k,{small:!0,children:(0,C.jsx)(`strong`,{children:`tant que ça tient : naturel ; quand ça casse : monstrueux.`})}),(0,C.jsx)(`div`,{className:`condensation-denial-grid`,children:en.map(e=>(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`h4`,{children:e.title}),(0,C.jsx)(`p`,{children:e.text})]},e.title))})]})]}),(0,C.jsxs)(`details`,{className:`feminine-detail`,children:[(0,C.jsx)(`summary`,{children:`Matrice retournée — infanticide comme anti-naissance`}),(0,C.jsxs)(`div`,{className:`feminine-detail-content`,children:[(0,C.jsx)(`p`,{children:`La matrice vivante ouvre la séparation. Elle porte vers un dehors. La naissance n'est pas fusion ; elle est passage.`}),(0,C.jsx)(`p`,{children:`Dans l'infanticide maternel avec mort parent-enfants, la scène peut s'actualiser comme anti-naissance : l'enfant est repris dans la nuit du parent au lieu d'être maintenu dans son avenir séparé.`}),(0,C.jsx)(`p`,{children:`L'enfant accroché au lit, selon le récit de La Dépêche et sous réserve de confirmation, cristallise l'inverse : un refus corporel d'être repris dans la branche terminale.`}),(0,C.jsx)(k,{small:!0,children:(0,C.jsx)(`strong`,{children:`Lit contre fenêtre. Horizontal contre vertical. Accroche contre chute. Séparation contre fusion.`})})]})]}),(0,C.jsxs)(`div`,{className:`condensation-table-block`,children:[(0,C.jsx)(`h3`,{children:`Tableau d'architecture transhistorique`}),(0,C.jsxs)(`div`,{className:`feminine-axis-table`,role:`table`,"aria-label":`Tableau d'architecture transhistorique`,children:[(0,C.jsxs)(`div`,{className:`feminine-axis-head`,role:`row`,children:[(0,C.jsx)(`span`,{role:`columnheader`,children:`Niveau`}),(0,C.jsx)(`span`,{role:`columnheader`,children:`Actualisation locale`}),(0,C.jsx)(`span`,{role:`columnheader`,children:`Résonance large`})]}),nn.map(([e,t,n])=>(0,C.jsxs)(`div`,{role:`row`,children:[(0,C.jsx)(`strong`,{role:`cell`,children:e}),(0,C.jsx)(`span`,{role:`cell`,children:t}),(0,C.jsx)(`span`,{role:`cell`,children:n})]},e))]})]}),(0,C.jsxs)(`div`,{className:`condensation-formulas`,children:[(0,C.jsx)(`h3`,{children:`Formules de synthèse`}),rn.map(e=>(0,C.jsx)(k,{small:!0,children:(0,C.jsx)(`strong`,{children:e})},e))]})]})})}function vn({navigate:e}){return(0,C.jsxs)(`article`,{className:`toulon-page`,children:[(0,C.jsxs)(`div`,{className:`wide-shell`,children:[(0,C.jsx)(`button`,{type:`button`,onClick:()=>cn(e),className:`toulon-back`,children:`Retour aux actus`}),(0,C.jsx)(fn,{}),(0,C.jsxs)(`header`,{className:`toulon-hero`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`p`,{className:`toulon-eyebrow`,children:`Actus / Étude criminologique`}),(0,C.jsx)(`h1`,{children:`Toulon, Pontcarral — drame familial du 20 mai 2026`}),(0,C.jsx)(`p`,{className:`toulon-lead`,children:`Mort parent-enfants probable, données comparées et lecture mondiale des morts d'enfants par parent.`})]}),(0,C.jsxs)(`aside`,{className:`toulon-hero-card`,children:[(0,C.jsx)(`span`,{children:`20 mai 2026`}),(0,C.jsx)(`strong`,{children:`Faits établis, zones inconnues, données comparées.`}),(0,C.jsx)(`p`,{children:`Cette page distingue le niveau pénal, le niveau clinique, le niveau social et le niveau systémique.`})]})]}),(0,C.jsx)(`nav`,{className:`toulon-toc`,"aria-label":`Sommaire de l'étude`,children:[[`video`,`Vidéo`],[`compression-mediatique`,`Compression`],[`faits`,`Faits`],[`point-reel`,`Réel`],[`definitions`,`Définitions`],[`statistiques`,`Données`],[`typologie`,`Typologie`],[`documents-sources`,`Documents`],[`analyse-theo`,`Analyse T^`],[`hypothese-feminin`,`Féminin`],[`architecture-condensation`,`Architecture`],[`monde`,`Comparaison`],[`prevention`,`Prévention`],[`sources`,`Sources`]].map(([e,t])=>(0,C.jsx)(`a`,{href:`#${e}`,children:t},e))})]}),(0,C.jsx)(pn,{}),(0,C.jsxs)(ln,{id:`faits`,eyebrow:`Niveau factuel`,title:`Ce qui est connu à ce stade`,wide:!0,children:[(0,C.jsxs)(`div`,{className:`toulon-two`,children:[(0,C.jsx)(un,{title:`Faits établis`,children:(0,C.jsx)(`ul`,{children:Lt.map(e=>(0,C.jsx)(`li`,{children:e},e))})}),(0,C.jsx)(un,{title:`À confirmer`,tone:`amber`,children:(0,C.jsx)(`ul`,{children:Rt.map(e=>(0,C.jsx)(`li`,{children:e},e))})})]}),(0,C.jsx)(`p`,{children:`Selon les premiers éléments communiqués par le parquet de Toulon et repris par la presse, la mère se serait jetée d'elle-même avec les enfants. Une enquête est ouverte pour meurtres par ascendant. Cette qualification indique le cadre d'investigation ; elle ne remplace ni les autopsies, ni les expertises toxicologiques, ni la reconstruction judiciaire de la chronologie.`}),(0,C.jsx)(`p`,{children:`La famille était indiquée comme inconnue du parquet en l'absence de signalement public concernant d'éventuelles difficultés sociales ou familiales. Cette absence de trace judiciaire laisse ouverte la zone des souffrances invisibles, de l'isolement possible et des signaux faibles.`})]}),(0,C.jsxs)(ln,{id:`point-reel`,eyebrow:`Seuil de lecture`,title:`Point de réel biodynamique`,children:[(0,C.jsx)(`div`,{className:`toulon-warning`,children:`Le champ reste ouvert : faits communiqués, enquête judiciaire, corps, autopsies, analyses toxicologiques, temporalités familiales, traces sociales et survivance des enfants forment des régimes distincts. Chacun actualise une part du réel ; l'ensemble dessine une courbure encore en cours de stabilisation.`}),(0,C.jsx)(`p`,{children:`Le noyau actuel se condense ainsi : une mère de 38 ans et trois de ses enfants sont morts après une chute du 13e étage à Toulon ; les premiers éléments du parquet décrivent une chute initiée par la mère avec les enfants ; l'enquête médico-légale et judiciaire poursuit la reconstruction des seuils, des gestes, des corps et des dernières bifurcations.`})]}),(0,C.jsx)(ln,{id:`definitions`,eyebrow:`Criminologie`,title:`Définitions utiles`,wide:!0,children:(0,C.jsx)(`div`,{className:`toulon-grid`,children:zt.map(([e,t])=>(0,C.jsx)(un,{title:e,children:(0,C.jsx)(`p`,{children:t})},e))})}),(0,C.jsxs)(ln,{id:`statistiques`,eyebrow:`Données comparées`,title:`Ordres de grandeur documentés`,wide:!0,children:[(0,C.jsx)(`p`,{children:`Les chiffres ci-dessous ne sont pas directement comparables entre pays en raison des différences de droit, de bases de données, de qualité de signalement et de méthode d'enquête. Ils servent à situer des ordres de grandeur, non à fabriquer un classement.`}),(0,C.jsx)(`div`,{className:`toulon-ratio-table`,role:`table`,"aria-label":`Tableau des grands ratios`,children:Bt.map(([e,t])=>(0,C.jsxs)(`div`,{role:`row`,children:[(0,C.jsx)(`span`,{role:`cell`,children:e}),(0,C.jsx)(`strong`,{role:`cell`,children:t})]},e))}),(0,C.jsx)(`div`,{className:`toulon-bars`,"aria-label":`Barres statistiques France Sud-Est`,children:Vt.map(([e,t])=>(0,C.jsx)(dn,{label:e,value:t},e))})]}),(0,C.jsx)(ln,{id:`typologie`,eyebrow:`Scénarios`,title:`Typologie des configurations`,wide:!0,children:(0,C.jsx)(`div`,{className:`toulon-grid`,children:Ht.map(([e,t])=>(0,C.jsx)(un,{title:e,children:(0,C.jsx)(`p`,{children:t})},e))})}),(0,C.jsx)(mn,{}),(0,C.jsx)(hn,{}),(0,C.jsx)(gn,{}),(0,C.jsx)(_n,{}),(0,C.jsx)(ln,{id:`monde`,eyebrow:`Lecture mondiale`,title:`Comparaison par zones géographiques`,wide:!0,children:(0,C.jsx)(`div`,{className:`toulon-world`,children:an.map(([e,t])=>(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`span`,{children:e}),(0,C.jsx)(`p`,{children:t})]},e))})}),(0,C.jsxs)(ln,{id:`prevention`,eyebrow:`Prévention`,title:`Ce que les études suggèrent`,children:[(0,C.jsx)(`p`,{children:`Les travaux convergent vers une prévention par détection des cumuls, pas par recherche d'un profil unique. Les signaux de seuil se concentrent autour des propos suicidaires incluant les enfants, de la peur obsessionnelle de perdre les enfants, de l'isolement extrême, de l'épuisement parental sévère, de la rupture récente, du conflit de garde, des violences conjugales, de l'accès à un moyen létal ou de l'effondrement brutal de la cohérence mentale.`}),(0,C.jsx)(`p`,{children:`La prévention devient portance distribuée : santé mentale, protection de l'enfance, entourage, école, services sociaux, police et justice composent une chaîne de seuils. Chaque relais peut rouvrir une branche avant que le champ ne se densifie jusqu'à l'irréversible.`}),(0,C.jsx)(`div`,{className:`toulon-matrix`,children:[`Individuel / clinique`,`Familial / conjugal`,`Social / institutionnel`].map(e=>(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`strong`,{children:e}),(0,C.jsx)(`span`,{children:`Signaux faibles → crise aiguë → passage à l'acte`})]},e))})]}),(0,C.jsxs)(ln,{id:`conclusion`,eyebrow:`Synthèse`,title:`Lecture globale`,children:[(0,C.jsx)(`p`,{children:`Le drame de Toulon apparaît comme condensation de plusieurs scènes : pénale, clinique encore inconnue, familiale avec sept enfants et quatre survivants, sociale, médiatique, corporelle et mémorielle. Les signaux visibles et invisibles y forment une courbure locale.`}),(0,C.jsx)(`p`,{children:`La lecture tient ensemble enquête judiciaire, champ clinique, lecture sociale, protection des survivants et restes vivants. Trois enfants sont morts ; quatre autres entrent dans une survivance longue, avec ses branches, ses seuils, ses mémoires et ses portances à recomposer.`})]}),(0,C.jsx)(ln,{id:`sources`,eyebrow:`Bibliographie`,title:`Sources utilisées`,wide:!0,children:(0,C.jsx)(`div`,{className:`toulon-sources`,children:on.map(([e,t])=>(0,C.jsx)(`a`,{href:t,target:`_blank`,rel:`noreferrer`,children:e},t))})}),(0,C.jsx)(`style`,{children:`
        .toulon-page {
          width: 100%;
          overflow-x: hidden;
          padding: clamp(24px, 4vw, 48px) 16px 80px;
          color: #f4efe4;
          background:
            radial-gradient(circle at 72% 0%, rgba(200, 107, 90, 0.12), transparent 34%),
            radial-gradient(circle at 18% 18%, rgba(77, 111, 145, 0.16), transparent 32%),
            #05070d;
        }
        .toulon-page > .wide-shell {
          width: min(100%, 1180px);
          padding-inline: 0;
        }
        .toulon-back {
          margin-bottom: 18px;
          border: 1px solid rgba(216, 182, 106, 0.28);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          color: #f4efe4;
          padding: 10px 16px;
          font-weight: 700;
        }
        .toulon-hero {
          display: grid;
          gap: clamp(20px, 4vw, 42px);
          align-items: end;
          border: 1px solid rgba(216, 182, 106, 0.2);
          border-radius: 34px;
          background: linear-gradient(135deg, rgba(7, 12, 25, 0.92), rgba(13, 18, 31, 0.72));
          padding: clamp(26px, 5vw, 56px);
          box-shadow: 0 28px 100px rgba(0, 0, 0, 0.34);
        }
        @media (min-width: 920px) {
          .toulon-hero { grid-template-columns: minmax(0, 1.2fr) minmax(300px, 0.8fr); }
        }
        .toulon-eyebrow {
          margin: 0 0 12px;
          color: rgba(216, 182, 106, 0.78);
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.28em;
          text-transform: uppercase;
        }
        .toulon-hero h1 {
          max-width: 960px;
          margin: 0;
          font-size: clamp(2.2rem, 7vw, 5rem);
          line-height: 0.98;
          letter-spacing: 0;
        }
        .toulon-lead {
          max-width: 760px;
          margin: 24px 0 0;
          color: rgba(244, 239, 228, 0.78);
          font-size: clamp(1.05rem, 2vw, 1.3rem);
          line-height: 1.8;
        }
        .toulon-hero-card,
        .toulon-card,
        .toulon-warning {
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.045);
          padding: clamp(18px, 3vw, 26px);
        }
        .toulon-hero-card span {
          display: inline-flex;
          margin-bottom: 14px;
          border-radius: 999px;
          border: 1px solid rgba(216, 182, 106, 0.28);
          padding: 6px 10px;
          color: rgba(216, 182, 106, 0.86);
          font-size: 0.78rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.16em;
        }
        .toulon-hero-card strong { display: block; font-size: 1.25rem; line-height: 1.35; }
        .toulon-hero-card p { color: rgba(244, 239, 228, 0.72); line-height: 1.7; }
        .toulon-video-hero {
          display: grid;
          width: min(100%, 1100px);
          gap: clamp(16px, 2.2vw, 28px);
          align-items: center;
          margin: clamp(18px, 3vw, 28px) auto clamp(24px, 4vw, 42px);
          border: 1px solid rgba(216, 182, 106, 0.28);
          border-radius: 28px;
          background:
            radial-gradient(circle at top left, rgba(216, 182, 106, 0.1), transparent 36%),
            rgba(8, 12, 22, 0.94);
          padding: clamp(14px, 2vw, 22px);
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.38);
          overflow: hidden;
        }
        @media (min-width: 900px) {
          .toulon-video-hero {
            grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
          }
        }
        .toulon-video-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: #05070b;
        }
        .toulon-video-frame iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }
        .toulon-video-copy {
          padding: 4px 4px 2px;
          min-width: 0;
        }
        .toulon-video-copy h2 {
          margin: 0 0 12px;
          color: #fff8df;
          font-size: clamp(1.25rem, 2.6vw, 2rem);
          line-height: 1.15;
          letter-spacing: 0;
        }
        .toulon-video-copy p {
          max-width: 72ch;
          color: rgba(244, 239, 228, 0.78);
          line-height: 1.65;
        }
        .toulon-video-source {
          margin: 0 0 14px;
          color: rgba(216, 182, 106, 0.82) !important;
          font-weight: 800;
        }
        .toulon-video-link {
          display: inline-flex;
          align-items: center;
          min-height: 44px;
          margin-top: 8px;
          border: 1px solid rgba(216, 182, 106, 0.42);
          border-radius: 999px;
          color: #070a11;
          background: #d8b66a;
          padding: 10px 16px;
          text-decoration: none;
          font-weight: 850;
        }
        .toulon-video-link:hover {
          border-color: rgba(255, 248, 223, 0.64);
          color: #070a11;
          filter: brightness(1.06);
        }
        @media (max-width: 720px) {
          .toulon-video-hero {
            border-radius: 22px;
            margin-bottom: 2rem;
          }
          .toulon-video-frame {
            border-radius: 16px;
          }
          .toulon-video-copy {
            padding-top: 2px;
          }
        }
        .toulon-toc {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 18px 0 0;
        }
        .toulon-toc a {
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          color: rgba(244, 239, 228, 0.82);
          padding: 9px 12px;
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 700;
        }
        .toulon-section {
          width: min(100% - 2rem, 920px);
          margin: clamp(28px, 5vw, 54px) auto 0;
        }
        .toulon-section-wide { width: min(100% - 2rem, 1180px); }
        .toulon-section h2 {
          margin: 0 0 18px;
          font-size: clamp(1.7rem, 4vw, 2.7rem);
          line-height: 1.08;
          letter-spacing: 0;
        }
        .toulon-section p,
        .toulon-section li {
          color: rgba(244, 239, 228, 0.8);
          font-size: 1rem;
          line-height: 1.85;
        }
        .toulon-section p { max-width: 74ch; }
        .toulon-two {
          display: grid;
          gap: 18px;
          margin-bottom: 22px;
        }
        @media (min-width: 860px) {
          .toulon-two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        .toulon-grid {
          display: grid;
          gap: 16px;
        }
        @media (min-width: 720px) {
          .toulon-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1120px) {
          .toulon-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        .toulon-card h3 {
          margin: 0 0 10px;
          color: #fff8df;
          font-size: 1.08rem;
        }
        .toulon-card ul { margin: 0; padding-left: 1.1rem; }
        .toulon-card-cyan { border-color: rgba(138, 180, 248, 0.2); }
        .toulon-card-amber { border-color: rgba(216, 182, 106, 0.24); }
        .toulon-warning {
          border-color: rgba(216, 182, 106, 0.34);
          background: linear-gradient(135deg, rgba(216, 182, 106, 0.12), rgba(200, 107, 90, 0.08));
          color: #fff8df;
          line-height: 1.85;
          font-weight: 650;
        }
        .toulon-ratio-table {
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 24px;
          margin: 20px 0;
        }
        .toulon-ratio-table div {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 8px;
          padding: 14px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.035);
        }
        .toulon-ratio-table div:last-child { border-bottom: 0; }
        .toulon-ratio-table strong { color: #d8b66a; }
        @media (min-width: 760px) {
          .toulon-ratio-table div { grid-template-columns: minmax(0, 1fr) minmax(180px, 0.34fr); align-items: center; }
        }
        .toulon-bars {
          display: grid;
          gap: 14px;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.11);
          background: rgba(255, 255, 255, 0.035);
          padding: clamp(18px, 3vw, 24px);
        }
        .toulon-bar-label {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 8px;
          color: rgba(244, 239, 228, 0.82);
          font-size: 0.94rem;
        }
        .toulon-bar-track {
          height: 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }
        .toulon-bar-track span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(90deg, #4d6f91, #d8b66a);
        }
        .toulon-world {
          display: grid;
          gap: 16px;
        }
        @media (min-width: 760px) {
          .toulon-world { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1120px) {
          .toulon-world { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        .toulon-world article,
        .toulon-matrix div {
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.04);
          padding: 18px;
        }
        .toulon-world span {
          display: block;
          color: #d8b66a;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 0.78rem;
          margin-bottom: 8px;
        }
        .toulon-matrix {
          display: grid;
          gap: 14px;
          margin-top: 18px;
        }
        @media (min-width: 800px) {
          .toulon-matrix { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        .toulon-matrix strong { display: block; color: #fff8df; margin-bottom: 10px; }
        .toulon-matrix span { color: rgba(244, 239, 228, 0.72); line-height: 1.6; }
        .toulon-sources {
          display: grid;
          gap: 12px;
        }
        @media (min-width: 760px) {
          .toulon-sources { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        .toulon-sources a {
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.04);
          color: #f4efe4;
          padding: 14px 16px;
          text-decoration: none;
          line-height: 1.45;
        }
        .toulon-sources a:hover { border-color: rgba(216, 182, 106, 0.36); color: #fff8df; }
        .media-compression {
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 28px;
          background:
            radial-gradient(circle at 82% 4%, rgba(77, 111, 145, 0.12), transparent 30%),
            rgba(255, 255, 255, 0.04);
          padding: clamp(18px, 3vw, 28px);
        }
        .media-compression-grid {
          display: grid;
          gap: 16px;
          margin: 18px 0;
        }
        @media (min-width: 760px) {
          .media-compression-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        .media-compression-grid article {
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 22px;
          background: rgba(0, 0, 0, 0.16);
          padding: 18px;
        }
        .media-compression-grid span {
          display: block;
          margin-bottom: 8px;
          color: #d8b66a;
          font-weight: 900;
        }
        .media-compression-grid p {
          margin: 0;
          color: rgba(244, 239, 228, 0.76);
          line-height: 1.7;
        }
        .source-docs-grid {
          display: grid;
          gap: clamp(18px, 3vw, 24px);
          margin-top: 22px;
        }
        @media (min-width: 980px) {
          .source-docs-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        .source-doc-card {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.045);
          box-shadow: 0 20px 70px rgba(0, 0, 0, 0.22);
        }
        .source-doc-card figure {
          margin: 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.2);
        }
        .source-doc-card img {
          display: block;
          width: 100%;
          height: auto;
          max-height: 420px;
          object-fit: contain;
          object-position: center;
          background: #05070b;
        }
        .source-doc-card figcaption {
          padding: 12px 16px;
          color: rgba(244, 239, 228, 0.62);
          font-size: 0.86rem;
          line-height: 1.55;
        }
        .source-doc-body {
          padding: clamp(18px, 3vw, 24px);
        }
        .source-doc-body h3 {
          margin: 0 0 16px;
          color: #fff8df;
          font-size: clamp(1.15rem, 2vw, 1.45rem);
          line-height: 1.25;
        }
        .source-doc-body dl {
          display: grid;
          gap: 10px;
          margin: 0 0 18px;
        }
        .source-doc-body dl div {
          display: grid;
          gap: 4px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 10px;
        }
        .source-doc-body dt {
          color: rgba(216, 182, 106, 0.78);
          font-size: 0.76rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .source-doc-body dd {
          margin: 0;
          color: rgba(244, 239, 228, 0.82);
          line-height: 1.55;
        }
        .source-doc-body dd a {
          color: #d8b66a;
          text-decoration: none;
          font-weight: 800;
        }
        .source-doc-body dd a:hover { text-decoration: underline; }
        .source-doc-details {
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          background: rgba(0, 0, 0, 0.12);
          overflow: hidden;
        }
        .source-doc-details summary {
          cursor: pointer;
          padding: 13px 15px;
          color: #fff8df;
          font-weight: 800;
        }
        .source-doc-fulltext {
          padding: 0 16px 18px;
        }
        .source-doc-fulltext p {
          max-width: 72ch;
          margin: 14px 0 0;
          color: rgba(244, 239, 228, 0.76);
          line-height: 1.78;
        }
        .source-doc-fulltext h4 {
          margin: 22px 0 6px;
          color: #fff8df;
          font-size: 1.05rem;
          line-height: 1.35;
        }
        .source-doc-inline-caption {
          color: rgba(216, 182, 106, 0.78) !important;
          font-style: italic;
        }
        .theo-analysis {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(216, 182, 106, 0.18);
          border-radius: 34px;
          background:
            radial-gradient(circle at 82% 4%, rgba(216, 182, 106, 0.12), transparent 30%),
            radial-gradient(circle at 14% 18%, rgba(77, 111, 145, 0.16), transparent 30%),
            linear-gradient(135deg, rgba(3, 7, 18, 0.92), rgba(8, 12, 24, 0.82));
          padding: clamp(20px, 4vw, 42px);
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
        }
        .theo-analysis > p {
          max-width: 74ch;
        }
        .theo-analysis-subtitle {
          margin: -4px 0 20px;
          color: rgba(244, 239, 228, 0.78);
          font-size: clamp(1.05rem, 2vw, 1.28rem);
          font-weight: 700;
        }
        .theo-ethical {
          border: 1px solid rgba(216, 182, 106, 0.28);
          border-radius: 24px;
          background: rgba(216, 182, 106, 0.08);
          padding: clamp(16px, 3vw, 24px);
          margin-bottom: 22px;
        }
        .theo-ethical strong {
          display: block;
          color: #fff8df;
          font-size: 1.08rem;
          margin-bottom: 8px;
        }
        .theo-final { margin-top: 24px; margin-bottom: 0; }
        .theo-formula {
          min-width: 0;
          display: grid;
          gap: 10px;
          margin: 24px 0;
          border-left: 3px solid rgba(216, 182, 106, 0.74);
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(77, 111, 145, 0.08));
          padding: clamp(18px, 3vw, 26px);
          color: #fff8df;
        }
        .theo-formula span,
        .theo-formula em {
          color: rgba(244, 239, 228, 0.78);
          line-height: 1.7;
        }
        .theo-formula strong {
          font-size: clamp(1.2rem, 3vw, 2rem);
          line-height: 1.22;
          overflow-wrap: anywhere;
        }
        .theo-formula-small {
          margin: 18px 0;
          border-radius: 18px;
          padding: 16px 18px;
        }
        .theo-formula-small strong {
          font-size: 1.05rem;
        }
        .theo-pillars,
        .theo-mnl-grid,
        .theo-axis-grid {
          display: grid;
          gap: 16px;
          margin: 22px 0;
        }
        @media (min-width: 820px) {
          .theo-pillars,
          .theo-mnl-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .theo-pillars article,
        .theo-mnl-grid article,
        .theo-axis-grid article {
          min-width: 0;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.045);
          padding: 18px;
        }
        .theo-pillars span,
        .theo-mnl-grid span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 34px;
          height: 34px;
          border-radius: 999px;
          border: 1px solid rgba(216, 182, 106, 0.3);
          color: #d8b66a;
          font-weight: 900;
          margin-bottom: 10px;
        }
        .theo-pillars p,
        .theo-mnl-grid p,
        .theo-axis-grid p {
          margin: 0;
          color: rgba(244, 239, 228, 0.76);
          line-height: 1.72;
        }
        .theo-mnl h3,
        .theo-axis-block h3,
        .theo-detail-content h3 {
          margin: 22px 0 12px;
          color: #fff8df;
          font-size: clamp(1.2rem, 2.6vw, 1.65rem);
        }
        .theo-mnl-grid h4 {
          margin: 0 0 10px;
          color: #fff8df;
          font-size: 1.08rem;
        }
        .theo-detail {
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.035);
          margin: 16px 0;
          overflow: hidden;
        }
        .theo-detail summary {
          cursor: pointer;
          list-style: none;
          padding: 18px 20px;
          color: #fff8df;
          font-weight: 850;
          line-height: 1.4;
        }
        .theo-detail summary::-webkit-details-marker { display: none; }
        .theo-detail summary::after {
          content: "+";
          float: right;
          color: #d8b66a;
          font-size: 1.2rem;
        }
        .theo-detail[open] summary::after { content: "−"; }
        .theo-detail-content {
          border-top: 1px solid rgba(255, 255, 255, 0.09);
          padding: 0 20px 20px;
        }
        .theo-table {
          display: grid;
          gap: 0;
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 18px;
          margin-top: 18px;
        }
        .theo-table > div {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 8px;
          padding: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
        }
        .theo-table > div:last-child { border-bottom: 0; }
        .theo-table .theo-table-head {
          display: none;
          color: #d8b66a;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 0.72rem;
        }
        .theo-table strong { color: #fff8df; }
        .theo-table span {
          min-width: 0;
          overflow-wrap: anywhere;
          color: rgba(244, 239, 228, 0.74);
          line-height: 1.55;
        }
        @media (min-width: 860px) {
          .theo-table > div { grid-template-columns: 0.72fr 1fr 1fr; align-items: start; }
          .theo-table .theo-table-head { display: grid; }
        }
        .theo-flow {
          display: grid;
          gap: 10px;
          margin: 18px 0;
        }
        .theo-flow span {
          position: relative;
          border: 1px solid rgba(138, 180, 248, 0.16);
          border-radius: 18px;
          background: rgba(77, 111, 145, 0.09);
          padding: 12px 16px;
          color: rgba(244, 239, 228, 0.88);
          font-weight: 750;
        }
        .theo-flow span:not(:last-child)::after {
          content: "↓";
          display: block;
          color: #d8b66a;
          margin-top: 8px;
          line-height: 1;
        }
        @media (min-width: 840px) {
          .theo-axis-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        .theo-axis-grid strong {
          display: block;
          color: #d8b66a;
          margin-bottom: 8px;
        }
        .theo-signal-list {
          display: grid;
          gap: 8px;
          padding-left: 1.1rem;
        }
        .theo-signal-list li {
          color: rgba(244, 239, 228, 0.78);
          line-height: 1.65;
        }
        .feminine-hypothesis {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(200, 107, 90, 0.2);
          border-radius: 34px;
          background:
            radial-gradient(circle at 86% 8%, rgba(200, 107, 90, 0.14), transparent 32%),
            radial-gradient(circle at 12% 18%, rgba(216, 182, 106, 0.1), transparent 30%),
            linear-gradient(135deg, rgba(7, 9, 18, 0.94), rgba(13, 18, 31, 0.82));
          padding: clamp(20px, 4vw, 42px);
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
        }
        .feminine-hypothesis p,
        .feminine-hypothesis li {
          max-width: 74ch;
        }
        .feminine-subtitle {
          margin: -4px 0 22px;
          color: rgba(244, 239, 228, 0.78);
          font-size: clamp(1.06rem, 2vw, 1.3rem);
          font-weight: 750;
        }
        .feminine-ethical,
        .feminine-status,
        .feminine-final,
        .feminine-thesis {
          border: 1px solid rgba(216, 182, 106, 0.24);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.045);
          padding: clamp(16px, 3vw, 24px);
          margin: 18px 0;
        }
        .feminine-ethical {
          border-color: rgba(200, 107, 90, 0.42);
          background: linear-gradient(135deg, rgba(200, 107, 90, 0.13), rgba(216, 182, 106, 0.07));
        }
        .feminine-status {
          border-color: rgba(138, 180, 248, 0.22);
          background: rgba(77, 111, 145, 0.08);
        }
        .feminine-final {
          border-color: rgba(216, 182, 106, 0.34);
          background: rgba(216, 182, 106, 0.08);
        }
        .feminine-ethical strong,
        .feminine-status strong,
        .feminine-final strong,
        .feminine-thesis h3,
        .feminine-research h3,
        .feminine-bibliography h3,
        .feminine-axis-block h3 {
          display: block;
          margin: 0 0 10px;
          color: #fff8df;
        }
        .feminine-card-grid,
        .feminine-question-grid,
        .feminine-biblio-grid {
          display: grid;
          gap: 16px;
          margin: 22px 0;
        }
        @media (min-width: 760px) {
          .feminine-card-grid,
          .feminine-question-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1120px) {
          .feminine-card-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .feminine-card-grid article,
        .feminine-question-grid article {
          min-width: 0;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.042);
          padding: 18px;
        }
        .feminine-card-grid h3 {
          margin: 0 0 10px;
          color: #d8b66a;
          font-size: 1.08rem;
        }
        .feminine-card-grid p,
        .feminine-question-grid p {
          margin: 0;
          color: rgba(244, 239, 228, 0.76);
          line-height: 1.72;
        }
        .feminine-question-grid span {
          display: inline-flex;
          margin-bottom: 10px;
          border: 1px solid rgba(216, 182, 106, 0.3);
          border-radius: 999px;
          color: #d8b66a;
          padding: 5px 9px;
          font-weight: 900;
          font-size: 0.78rem;
        }
        .feminine-short-toc {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin: 24px 0;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 22px;
          background: rgba(0, 0, 0, 0.14);
          padding: 14px;
        }
        .feminine-short-toc a {
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          color: rgba(244, 239, 228, 0.84);
          padding: 8px 11px;
          text-decoration: none;
          font-size: 0.85rem;
          font-weight: 750;
        }
        .feminine-short-toc a:hover {
          border-color: rgba(216, 182, 106, 0.38);
          color: #fff8df;
        }
        .feminine-detail {
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.035);
          margin: 16px 0;
          overflow: hidden;
          scroll-margin-top: 90px;
        }
        .feminine-detail summary {
          cursor: pointer;
          list-style: none;
          padding: 18px 20px;
          color: #fff8df;
          font-weight: 850;
          line-height: 1.4;
        }
        .feminine-detail summary::-webkit-details-marker { display: none; }
        .feminine-detail summary::after {
          content: "+";
          float: right;
          color: #d8b66a;
          font-size: 1.2rem;
        }
        .feminine-detail[open] summary::after { content: "−"; }
        .feminine-detail-content {
          border-top: 1px solid rgba(255, 255, 255, 0.09);
          padding: 0 20px 20px;
        }
        .feminine-detail-content ul {
          display: grid;
          gap: 8px;
          padding-left: 1.1rem;
        }
        .feminine-axis-block {
          margin: 26px 0;
          scroll-margin-top: 90px;
        }
        .feminine-axis-table {
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.035);
        }
        .feminine-axis-table > div {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          gap: 8px;
          padding: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .feminine-axis-table > div:last-child { border-bottom: 0; }
        .feminine-axis-head {
          display: none !important;
          color: #d8b66a;
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .feminine-axis-table strong {
          color: #fff8df;
        }
        .feminine-axis-table span {
          min-width: 0;
          overflow-wrap: anywhere;
          color: rgba(244, 239, 228, 0.76);
          line-height: 1.55;
        }
        @media (min-width: 880px) {
          .feminine-axis-table > div {
            grid-template-columns: 0.62fr 1fr 1.25fr;
            align-items: start;
          }
          .feminine-axis-head { display: grid !important; }
        }
        .feminine-thesis p {
          max-width: 76ch;
        }
        .feminine-research,
        .feminine-bibliography {
          margin-top: 28px;
          scroll-margin-top: 90px;
        }
        .condensation-section {
          overflow: hidden;
          border: 1px solid rgba(138, 180, 248, 0.16);
          border-radius: 34px;
          background:
            radial-gradient(circle at 82% 8%, rgba(138, 180, 248, 0.12), transparent 32%),
            radial-gradient(circle at 16% 14%, rgba(216, 182, 106, 0.09), transparent 30%),
            linear-gradient(135deg, rgba(4, 8, 18, 0.94), rgba(10, 15, 27, 0.82));
          padding: clamp(20px, 4vw, 42px);
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.28);
        }
        .condensation-section p,
        .condensation-section li {
          max-width: 74ch;
        }
        .condensation-subtitle {
          margin: -4px 0 22px;
          color: rgba(244, 239, 228, 0.78);
          font-size: clamp(1.05rem, 2vw, 1.28rem);
          font-weight: 750;
        }
        .condensation-grid,
        .condensation-denial-grid {
          display: grid;
          gap: 16px;
          margin: 22px 0;
        }
        .condensation-tenue {
          border: 1px solid rgba(216, 182, 106, 0.22);
          border-radius: 24px;
          background:
            radial-gradient(circle at 16% 10%, rgba(216, 182, 106, 0.1), transparent 34%),
            rgba(255, 255, 255, 0.04);
          padding: clamp(16px, 3vw, 24px);
          margin: 22px 0;
        }
        .condensation-tenue h3 {
          margin: 0 0 12px;
          color: #fff8df;
        }
        .condensation-tenue p {
          color: rgba(244, 239, 228, 0.78);
          line-height: 1.78;
        }
        @media (min-width: 820px) {
          .condensation-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .condensation-denial-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        .condensation-grid article,
        .condensation-denial-grid article {
          min-width: 0;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.042);
          padding: 18px;
        }
        .condensation-grid h3,
        .condensation-denial-grid h4,
        .condensation-table-block h3,
        .condensation-formulas h3 {
          margin: 0 0 12px;
          color: #fff8df;
        }
        .condensation-grid p,
        .condensation-denial-grid p {
          margin: 0 0 14px;
          color: rgba(244, 239, 228, 0.76);
          line-height: 1.7;
        }
        .condensation-chip-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .condensation-chip-grid span {
          border: 1px solid rgba(216, 182, 106, 0.2);
          border-radius: 999px;
          background: rgba(216, 182, 106, 0.06);
          color: rgba(244, 239, 228, 0.84);
          padding: 6px 10px;
          font-size: 0.82rem;
          font-weight: 760;
        }
        .condensation-table-block,
        .condensation-formulas {
          margin-top: 28px;
        }
        .condensation-formulas article,
        .condensation-table-block {
          overflow-wrap: anywhere;
        }
      `})]})}function yn(e){return e?new Intl.DateTimeFormat(`fr-FR`,{day:`2-digit`,month:`short`,year:`numeric`}).format(new Date(e)):``}function bn(e){let t=`/T/theo/`.replace(/\/$/,``),n=String(e||``).replace(/^\/+/,``),r=n===`gallery`?`images`:n;return r?`${t}/#/${r}`:`${t}/`}function xn(e){return e?/^(https?:|data:|\/)/.test(e)?e:`/T/theo/${e.replace(/^\//,``)}`:``}function Sn(e=``){return/youtube|youtu\.?be|hqdefault|mqdefault|maxresdefault|youtube-mayotte/i.test(e)}function Cn({title:e}){return(0,C.jsxs)(`svg`,{viewBox:`0 0 520 292`,role:`img`,"aria-label":`Image abstraite pour ${e}`,className:`card-media h-full`,children:[(0,C.jsx)(`rect`,{width:`520`,height:`292`,fill:`#030817`}),(0,C.jsx)(`circle`,{cx:`388`,cy:`88`,r:`136`,fill:`#6fb6d5`,opacity:`0.13`}),(0,C.jsx)(`circle`,{cx:`136`,cy:`224`,r:`104`,fill:`#d6b36a`,opacity:`0.10`}),(0,C.jsx)(`path`,{d:`M76 210C134 174 188 184 238 142C298 92 364 94 444 62`,fill:`none`,stroke:`#7cd7ff`,strokeOpacity:`0.55`,strokeWidth:`3`}),(0,C.jsx)(`path`,{d:`M90 98H420M90 138H360M90 178H390`,stroke:`#f4efe4`,strokeOpacity:`0.18`,strokeWidth:`8`,strokeLinecap:`round`}),(0,C.jsx)(`circle`,{cx:`304`,cy:`106`,r:`42`,fill:`none`,stroke:`#d6b36a`,strokeOpacity:`0.22`}),(0,C.jsx)(`circle`,{cx:`304`,cy:`106`,r:`74`,fill:`none`,stroke:`#7cd7ff`,strokeOpacity:`0.12`})]})}function wn({compact:e=!1,navigate:t=()=>{},slug:n=``}){let[r,i]=(0,_.useState)([]),[a,o]=(0,_.useState)(`loading`);return(0,_.useEffect)(()=>{let e=!0;return fetch(`/T/theo/data/actus.json`).then(e=>{if(!e.ok)throw Error(`Actus data unavailable`);return e.json()}).then(t=>{e&&(i(Array.isArray(t)?t:[]),o(`ready`))}).catch(()=>{e&&(i([]),o(`error`))}),()=>{e=!1}},[]),n===`hantavirus-hondius-oms`?(0,C.jsx)(Pt,{exploration:Nt,navigate:t,backRoute:`actus`,backLabel:`Retour aux actus`}):n===`toulon-filicide-suicide-maternel-etude`||n===`toulon-pontcarral-mort-parent-enfants`?(0,C.jsx)(vn,{navigate:t}):(0,C.jsx)(`section`,{id:`actus`,className:`w-full overflow-x-hidden ${e?`mt-5 pt-0`:`bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-10`}`,children:(0,C.jsxs)(`div`,{className:`mx-auto w-full max-w-7xl`,children:[(0,C.jsxs)(`header`,{className:`mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`p`,{className:`mb-2 text-xs font-bold uppercase tracking-[0.34em] text-cyan-200/65`,children:`Actualités`}),(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold tracking-[0.16em] text-slate-50 sm:text-3xl`,children:`Actus Theo^`})]}),(0,C.jsx)(`p`,{className:`max-w-md text-sm leading-6 text-slate-300/70`,children:`Veille compacte pour les articles, sources et signaux associés au corpus.`})]}),a===`loading`&&(0,C.jsx)(`div`,{className:`rounded-[18px] border border-sky-200/10 bg-slate-950/50 px-4 py-6 text-sm text-slate-300/65`,children:`Chargement discret des actus...`}),a===`error`&&(0,C.jsx)(`div`,{className:`rounded-[18px] border border-sky-200/10 bg-slate-950/50 px-4 py-6 text-sm text-slate-300/65`,children:`Actus momentanément indisponibles.`}),a===`ready`&&(0,C.jsxs)(`div`,{className:`grid gap-7`,children:[(0,C.jsxs)(`section`,{children:[(0,C.jsx)(`h3`,{className:`mb-3 text-sm font-bold uppercase tracking-[0.26em] text-amber-100/70`,children:`À la une`}),(0,C.jsx)(`div`,{className:`feature-grid`,children:r.filter(e=>e.featured).slice(0,2).map((e,n)=>(0,C.jsx)(Tn,{article:e,navigate:t,featured:!0},`${e.date}-${e.title}-${n}`))})]}),(0,C.jsxs)(`section`,{children:[(0,C.jsx)(`h3`,{className:`mb-3 text-sm font-bold uppercase tracking-[0.26em] text-cyan-100/65`,children:`Dernières actus`}),(0,C.jsx)(`div`,{className:`index-grid`,children:r.map((e,n)=>(0,C.jsx)(Tn,{article:e,navigate:t},`${e.date}-${e.title}-${n}`))})]})]})]})})}function Tn({article:e,navigate:t,featured:n=!1}){let r=e.route||e.url||``,i=!!e.route,a=e.mediaKind===`video`||Sn(e.image);return(0,C.jsxs)(`article`,{className:`overflow-hidden rounded-[22px] border border-sky-200/10 bg-slate-950/60 shadow-[0_18px_54px_rgba(0,0,0,0.24)] ${n?`min-h-[260px]`:``}`,children:[r&&(0,C.jsx)(`a`,{href:i?bn(r):r,onClick:n=>{e.route&&(n.preventDefault(),t(e.route))},target:i?void 0:`_blank`,rel:i?void 0:`noreferrer`,className:`card-media-link actu-card-media aspect-video rounded-none border-x-0 border-t-0 bg-[radial-gradient(circle_at_50%_42%,rgba(75,115,150,0.1),rgba(5,10,22,0.94)_58%,rgba(2,5,12,1))] ${a?`video-thumb`:``}`,"aria-label":e.slug===`toulon-filicide-suicide-maternel-etude`?`Ouvrir l’étude Toulon / Pontcarral`:`Lire l’actu ${e.title}`,children:e.image?(0,C.jsx)(`img`,{src:xn(e.image),alt:e.imageAlt||e.title,loading:`lazy`,className:`card-media h-full opacity-90 saturate-[0.88]`}):(0,C.jsx)(Cn,{title:e.title})}),(0,C.jsxs)(`div`,{className:n?`p-5 sm:p-6`:`p-4`,children:[(0,C.jsxs)(`div`,{className:`mb-3 flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em]`,children:[(0,C.jsx)(`span`,{className:`rounded-full border border-cyan-100/16 bg-cyan-100/8 px-2.5 py-1 text-cyan-100/78`,children:e.category}),e.badge&&(0,C.jsx)(`span`,{className:`rounded-full border border-amber-100/16 bg-amber-100/8 px-2.5 py-1 text-amber-100/78`,children:e.badge}),(0,C.jsx)(`span`,{className:`text-slate-400/80`,children:yn(e.date)})]}),(0,C.jsx)(`h3`,{className:`m-0 font-semibold leading-7 text-slate-50 ${n?`text-2xl`:`line-clamp-2 text-base`}`,children:e.title}),(0,C.jsx)(`p`,{className:`mt-2 text-xs font-bold uppercase tracking-[0.14em] text-amber-100/62`,children:e.source}),(0,C.jsx)(`p`,{className:`${n?``:`line-clamp-3`} mt-3 text-sm leading-6 text-slate-300/75`,children:e.excerpt}),Array.isArray(e.tags)&&e.tags.length>0&&(0,C.jsx)(`div`,{className:`mt-4 flex flex-wrap gap-1.5`,children:e.tags.map(e=>(0,C.jsx)(`span`,{className:`rounded-full border border-sky-200/10 px-2.5 py-1 text-[11px] text-slate-300/72`,children:e},e))}),e.route&&(0,C.jsx)(`button`,{type:`button`,onClick:()=>t(e.route),className:`mt-4 inline-flex items-center rounded-full border border-cyan-100/20 bg-cyan-100/8 px-4 py-2 text-sm font-bold text-cyan-50 transition hover:border-cyan-100/40 hover:bg-cyan-100/12 hover:shadow-[0_0_22px_rgba(86,162,205,0.12)]`,children:`Lire l’actu`}),e.url&&!e.route&&(0,C.jsx)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer`,className:`mt-4 inline-flex items-center rounded-full border border-cyan-100/20 bg-cyan-100/8 px-4 py-2 text-sm font-bold text-cyan-50 transition hover:border-cyan-100/40 hover:bg-cyan-100/12 hover:shadow-[0_0_22px_rgba(86,162,205,0.12)]`,children:`Ouvrir`})]})]})}function En(e){if(typeof e==`string`){let t=decodeURIComponent(e.split(`/`).pop()||e);return{src:e,title:t,alt:t,type:t.includes(`.`)?t.split(`.`).pop().toLowerCase():``,usedIn:[]}}return{src:e.src,title:e.title||decodeURIComponent(String(e.src||``).split(`/`).pop()||`image`),alt:e.alt||e.title||`Image du corpus Theo`,type:e.type||``,usedIn:Array.isArray(e.usedIn)?e.usedIn:[]}}function Dn(e){if(e){if(/^https?:/i.test(e)){window.location.href=e;return}window.location.href=On(e)}}function On(e){if(!e||/^https?:/i.test(e))return e;let t=`/T/theo/`.replace(/\/$/,``),n=e;return n.startsWith(t)&&(n=n.slice(t.length)||`/`),n=n.startsWith(`/`)?n:`/${n}`,n===`/`||n===``?`${t}/`:n.startsWith(`/#/`)?`${t}${n}`:`${t}/#${n}`}function kn(e=``){return/youtube|youtu\.?be|hqdefault|mqdefault|maxresdefault|youtube-mayotte/i.test(e)}function An({compact:e=!1}){let[t,n]=(0,_.useState)([]),[r,i]=(0,_.useState)(null),[a,o]=(0,_.useState)(`loading`);(0,_.useEffect)(()=>{let e=!0;return fetch(`/T/theo/data/gallery.json`).then(e=>{if(!e.ok)throw Error(`Gallery data unavailable`);return e.json()}).then(t=>{e&&(n(Array.isArray(t)?t.map(En):[]),o(`ready`))}).catch(()=>{e&&(n([]),o(`error`))}),()=>{e=!1}},[]),(0,_.useEffect)(()=>{if(!r)return;let e=e=>{e.key===`Escape`&&i(null)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[r]);let s=(0,_.useMemo)(()=>{let e=t.filter(e=>e.usedIn.length>0).length,n=t.filter(e=>e.usedIn.length>1).length;return{total:t.length,linked:e,multi:n,unlinked:t.length-e}},[t]),c=e=>{if(e.usedIn.length===1){Dn(e.usedIn[0].href);return}i(e)};return(0,C.jsxs)(`section`,{id:`gallery`,className:`w-full overflow-x-hidden ${e?`mt-5 pt-0`:`bg-slate-950 px-4 py-8 text-slate-100 sm:px-6 lg:px-10`}`,children:[(0,C.jsxs)(`div`,{className:`mx-auto w-full max-w-7xl`,children:[(0,C.jsxs)(`header`,{className:`mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`p`,{className:`mb-2 text-xs font-bold uppercase tracking-[0.34em] text-cyan-200/65`,children:`Corpus visuel`}),(0,C.jsx)(`h2`,{className:`m-0 text-2xl font-semibold tracking-[0.16em] text-slate-50 sm:text-3xl`,children:`Galerie Theo^`})]}),a===`ready`&&(0,C.jsxs)(`div`,{className:`flex flex-wrap gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-300/72`,children:[(0,C.jsxs)(`span`,{className:`rounded-full border border-sky-200/12 bg-slate-950/50 px-3 py-1`,children:[s.total,` images`]}),(0,C.jsxs)(`span`,{className:`rounded-full border border-sky-200/12 bg-slate-950/50 px-3 py-1`,children:[s.linked,` reliées`]}),(0,C.jsxs)(`span`,{className:`rounded-full border border-sky-200/12 bg-slate-950/50 px-3 py-1`,children:[s.unlinked,` disponibles`]})]})]}),a===`loading`&&(0,C.jsx)(`div`,{className:`rounded-[18px] border border-sky-200/10 bg-slate-950/50 px-4 py-6 text-sm text-slate-300/65`,children:`Chargement discret de la galerie...`}),a===`error`&&(0,C.jsx)(`div`,{className:`rounded-[18px] border border-sky-200/10 bg-slate-950/50 px-4 py-6 text-sm text-slate-300/65`,children:`Galerie momentanément indisponible.`}),a===`ready`&&(0,C.jsx)(`div`,{className:`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4`,children:t.map(e=>(0,C.jsxs)(`article`,{className:`overflow-hidden rounded-[24px] border border-sky-300/10 bg-slate-950/54 shadow-[0_18px_54px_rgba(0,0,0,0.24)]`,children:[(0,C.jsx)(`button`,{type:`button`,onClick:()=>c(e),className:`group block w-full overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_50%_42%,rgba(75,115,150,0.1),rgba(5,10,22,0.94)_58%,rgba(2,5,12,1))] text-left outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d6b36a]`,"aria-label":e.usedIn.length===1?`Voir dans ${e.usedIn[0].label}`:`Ouvrir ${e.title}`,children:(0,C.jsx)(`img`,{src:e.src,alt:e.alt||e.title,loading:`lazy`,className:`w-full aspect-video bg-[#05070b] opacity-90 saturate-[0.86] transition duration-300 group-hover:brightness-110 ${kn(e.src)?`object-contain`:`object-cover group-hover:scale-[1.025]`}`})}),(0,C.jsxs)(`div`,{className:`p-4`,children:[(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2`,children:[(0,C.jsx)(`span`,{className:`rounded-full border border-cyan-100/14 bg-cyan-100/8 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-cyan-100/72`,children:e.type||`image`}),(0,C.jsx)(`span`,{className:`text-xs text-slate-400/76`,children:e.usedIn.length?`${e.usedIn.length} usage${e.usedIn.length>1?`s`:``}`:`Image disponible`})]}),(0,C.jsx)(`h3`,{className:`mt-3 break-words text-base font-semibold leading-6 text-slate-50`,children:e.title}),e.usedIn.length>0?(0,C.jsxs)(`div`,{className:`mt-4 grid gap-2`,children:[(0,C.jsx)(`p`,{className:`text-[11px] font-bold uppercase tracking-[0.18em] text-amber-100/62`,children:`Voir dans`}),e.usedIn.map(t=>(0,C.jsxs)(`a`,{href:On(t.href),className:`rounded-[14px] border border-sky-200/10 bg-slate-950/42 px-3 py-2 text-sm font-semibold leading-5 text-slate-200 transition hover:border-cyan-100/28 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6b36a]`,children:[t.label,(0,C.jsx)(`span`,{className:`mt-1 block text-xs font-normal text-slate-400/78`,children:t.context})]},`${e.src}-${t.href}-${t.context}`))]}):(0,C.jsx)(`p`,{className:`mt-4 rounded-[14px] border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-400/82`,children:`Image non reliée`})]})]},e.src))})]}),r&&(0,C.jsx)(`div`,{className:`fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/92 p-4 backdrop-blur-xl`,role:`dialog`,"aria-modal":`true`,"aria-label":`Image agrandie`,onClick:()=>i(null),children:(0,C.jsxs)(`div`,{className:`relative grid max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[22px] border border-sky-200/14 bg-slate-950 shadow-[0_30px_120px_rgba(0,0,0,0.58)] lg:grid-cols-[minmax(0,1fr)_320px]`,onClick:e=>e.stopPropagation(),children:[(0,C.jsx)(`button`,{type:`button`,onClick:()=>i(null),className:`absolute right-4 top-4 z-10 rounded-full border border-sky-100/18 bg-slate-950/78 px-4 py-2 text-sm font-bold text-slate-100/86 transition hover:border-cyan-100/34 hover:bg-cyan-100/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6b36a]`,children:`Fermer`}),(0,C.jsx)(`div`,{className:`flex max-h-[92vh] min-h-[280px] items-center justify-center bg-[radial-gradient(circle_at_center,rgba(105,150,180,0.1),rgba(2,5,12,1)_68%)] p-3`,children:(0,C.jsx)(`img`,{src:r.src,alt:r.alt||r.title,className:`max-h-[86vh] w-full object-contain`})}),(0,C.jsxs)(`aside`,{className:`max-h-[92vh] overflow-y-auto border-t border-white/10 p-5 lg:border-l lg:border-t-0`,children:[(0,C.jsx)(`p`,{className:`text-xs font-bold uppercase tracking-[0.2em] text-cyan-100/60`,children:r.type||`image`}),(0,C.jsx)(`h3`,{className:`mt-3 break-words text-xl font-semibold text-slate-50`,children:r.title}),r.usedIn.length>0?(0,C.jsxs)(`div`,{className:`mt-5 grid gap-2`,children:[(0,C.jsx)(`p`,{className:`text-[11px] font-bold uppercase tracking-[0.18em] text-amber-100/62`,children:`Voir dans`}),r.usedIn.map(e=>(0,C.jsxs)(`a`,{href:On(e.href),className:`rounded-[14px] border border-sky-200/10 bg-slate-950/56 px-3 py-2 text-sm font-semibold leading-5 text-slate-200 transition hover:border-cyan-100/28 hover:text-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d6b36a]`,children:[e.label,(0,C.jsx)(`span`,{className:`mt-1 block text-xs font-normal text-slate-400/78`,children:e.context})]},`${r.src}-${e.href}-${e.context}`))]}):(0,C.jsx)(`p`,{className:`mt-5 rounded-[14px] border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-400/82`,children:`Image non reliée`})]})]})})]})}var jn=[{type:`Exploration`,title:`Église laïque vs Église cléricale`,description:`Vidéo source, transcription accessible, étude ecclésiologique, contre-traditions, Contre-folie et complément Luce Irigaray sur le féminin, le Nom et la capture.`,href:`explorations/eglise-laique-vs-eglise-clericale`,image:`https://img.youtube.com/vi/y6HvOEovgG8/hqdefault.jpg`,imageAlt:`Miniature de la vidéo Église laïque vs Église cléricale`,publishedAt:`2026-05-22`,badge:`Mis à jour`,badges:[`Église`,`Contre-folie`,`Irigaray`],pinned:!0},{type:`Actu`,title:`Toulon, Pontcarral — mort parent-enfants et lecture mondiale`,description:`Étude factuelle et criminologique sur le drame de Toulon du 20 mai 2026, avec données françaises et internationales sur les morts parent-enfants.`,href:`actus/toulon-filicide-suicide-maternel-etude`,image:`/T/theo/images/actus/youtube-mayotte-la-1ere-toulon-capture.png`,imageAlt:`Miniature du reportage Mayotte la 1ère sur le drame de Toulon`,mediaKind:`video`,publishedAt:`2026-05-21`,badge:`Nouveau`,badges:[`Toulon`,`Criminologie`,`Protection de l’enfance`],pinned:!0},{type:`Exploration`,title:`Thomas Römer — Bible, violence, sexualité`,description:`Lecture factuelle de l’entretien avec Thomas Römer, complétée par une analyse T^ × MNL^ × MCPP^ sur Écriture, Trinité, Église, Incarnation, Logos Spermatikos et Traditions.`,href:`explorations/romer-bible-obscure`,image:`https://img.youtube.com/vi/bstGOxKcUGM/hqdefault.jpg`,imageAlt:`Miniature de l’entretien avec Thomas Römer`,publishedAt:`2026-05-20`,updatedAt:`2026-05-20`,badge:`Mis à jour`,badges:[`Bible`,`Thomas Römer`,`T^ × MNL^ × MCPP^`]},{type:`Exploration`,title:`D’où vient la Bible ? — Thomas Römer`,description:`Restitution horodatée de l’entretien et exploration spécialisée des origines bibliques, de Yhwh, d’Ashera, de Moïse, de l’Exode et du monothéisme ancien.`,href:`explorations/romer-origine-bible`,image:`https://img.youtube.com/vi/Rc6obrXJEbY/hqdefault.jpg`,imageAlt:`Miniature de l’entretien D’où vient la Bible avec Thomas Römer`,publishedAt:`2026-05-20`,badge:`Nouveau`,badges:[`Theobiblos`,`Yhwh`,`Exode`]},{type:`Exploration`,title:`Michael Langlois — Bible, manuscrits et nouvelles technologies`,description:`Alphabet, stèle de Mésha, Qumrân, RTI, imagerie multispectrale et scribes éditeurs.`,href:`explorations/langlois-bible-technologies`,image:`https://img.youtube.com/vi/nDOXud3QqTI/hqdefault.jpg`,imageAlt:`Miniature de la conférence de Michael Langlois à la BnF`,publishedAt:`2026-05-20`,badge:`Nouveau`,badges:[`Épigraphie`,`Qumrân`,`RTI`]},{type:`Actu`,title:`MV Hondius / Hantavirus / OMS`,description:`Un cluster réel, rare et grave devient une scène de légitimation institutionnelle : risque officiellement faible, dispositif maximal, communication rassurante et conversion politique immédiate.`,href:`actus/hantavirus-hondius-oms`,image:`https://img.youtube.com/vi/T1mOYLM01-Y/hqdefault.jpg`,imageAlt:`Miniature de la vidéo source sur MV Hondius, hantavirus et OMS`,publishedAt:`2026-05-18`,badge:`Analyse`,badges:[`OMS`,`Hantavirus`,`PABS`],pinned:!0},{type:`Exploration`,title:`Kogi / Le choix du vivant`,description:`Aluna, Sé, Loi d’Origine, Mamos, Sagas, reliance, altérité radicale et grammaire du vivant.`,href:`explorations/kogi-choix-du-vivant`,image:`https://img.youtube.com/vi/mA8P8DpSJIE/hqdefault.jpg`,imageAlt:`Miniature de la vidéo Kogi / Kággaba — Le choix du vivant`,publishedAt:`2026-05-18`,badge:`Exploration`,badges:[`Kogi`,`Aluna`,`Vivant`],pinned:!0}];function Mn(e=new Date){let t=e instanceof Date?e:new Date(e);return jn.filter(e=>{if(e.pinned)return!0;let n=e.updatedAt||e.publishedAt;if(!n)return!0;let r=t.getTime()-new Date(n).getTime();return r>=0&&r<=2592e6}).sort((e,t)=>new Date(t.updatedAt||t.publishedAt||0)-new Date(e.updatedAt||e.publishedAt||0))}var Nn=Mn(new Date(`2026-05-22`)),Pn=[[`Mappemonde`,`Explorer les projets Theo^ comme constellation.`,`map`],[`Galerie`,`Voir les images, figures et expérimentations visuelles.`,`gallery`],[`Actus`,`Lire la veille et les enquêtes d’actualité.`,`actus`],[`Explorations`,`Lire les dossiers longs du corpus.`,`explorations`]];function Fn(e){let t=`/T/theo/`.replace(/\/$/,``),n=String(e||``).replace(/^\/+/,``),r=n===`gallery`?`images`:n;return r?`${t}/#/${r}`:`${t}/`}function In(e){return e?new Intl.DateTimeFormat(`fr-FR`,{day:`2-digit`,month:`long`,year:`numeric`}).format(new Date(e)):``}function Ln(e){return e?/^(https?:|data:|\/)/.test(e)?e:`/T/theo/${e.replace(/^\//,``)}`:``}function Rn(e=``){return/youtube|youtu\.?be|hqdefault|mqdefault|maxresdefault|youtube-mayotte/i.test(e)}function zn({children:e,route:t,navigate:n,variant:r=`quiet`}){return(0,C.jsx)(`button`,{type:`button`,onClick:()=>n(t),className:`rounded-full border px-5 py-3 text-sm font-bold transition ${r===`primary`?`border-cyan-100/28 bg-cyan-100/[0.11] text-cyan-50 hover:border-cyan-100/44 hover:bg-cyan-100/[0.16]`:r===`gold`?`border-amber-100/24 bg-amber-100/[0.085] text-amber-50 hover:border-amber-100/40 hover:bg-amber-100/[0.13]`:`border-sky-200/14 bg-slate-950/48 text-slate-200 hover:border-sky-200/30 hover:bg-sky-100/[0.06]`}`,children:e})}function Bn({item:e}){return e.image?(0,C.jsx)(`img`,{src:Ln(e.image),alt:e.imageAlt||e.title,loading:`lazy`,className:`card-media h-full`}):(0,C.jsxs)(`svg`,{viewBox:`0 0 520 360`,role:`img`,"aria-label":`Image abstraite pour ${e.title}`,className:`card-media h-full`,children:[(0,C.jsx)(`rect`,{width:`520`,height:`360`,fill:`#05070d`}),(0,C.jsx)(`circle`,{cx:`390`,cy:`90`,r:`150`,fill:`#8ab4f8`,opacity:`0.10`}),(0,C.jsx)(`circle`,{cx:`145`,cy:`255`,r:`120`,fill:`#d6b36a`,opacity:`0.09`}),(0,C.jsx)(`path`,{d:`M82 248C142 188 198 212 250 150C310 78 386 96 452 58`,fill:`none`,stroke:`#d6b36a`,strokeOpacity:`0.58`,strokeWidth:`3`}),(0,C.jsx)(`path`,{d:`M84 110H438M84 150H372M84 190H414M84 230H332`,stroke:`#f4efe4`,strokeOpacity:`0.18`,strokeWidth:`8`,strokeLinecap:`round`}),(0,C.jsx)(`rect`,{x:`64`,y:`76`,width:`392`,height:`210`,rx:`28`,fill:`none`,stroke:`#f4efe4`,strokeOpacity:`0.16`})]})}function Vn({item:e,navigate:t}){let n=e.href,r=In(e.updatedAt||e.publishedAt),i=e.type===`Actu`?`Lire l’actu`:`Lire l’exploration`,a=e.mediaKind===`video`||Rn(e.image);return(0,C.jsxs)(`article`,{className:`featureCard update-card`,children:[(0,C.jsx)(`a`,{href:Fn(n),onClick:e=>{e.preventDefault(),t(n)},className:`featureImageLink card-media-link ${a?`video-thumb`:``}`,"aria-label":`Lire ${e.title}`,children:(0,C.jsx)(Bn,{item:e})}),(0,C.jsxs)(`div`,{className:`flex min-w-0 flex-col`,children:[(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em]`,children:[(0,C.jsx)(`span`,{className:`rounded-full border border-cyan-100/16 bg-cyan-100/[0.08] px-3 py-1 text-cyan-100/78`,children:e.type}),e.badge&&(0,C.jsx)(`span`,{className:`rounded-full border border-amber-100/16 bg-amber-100/[0.08] px-3 py-1 text-amber-100/78`,children:e.badge}),(0,C.jsx)(`span`,{className:`text-slate-400/82`,children:r})]}),(0,C.jsx)(`h3`,{className:`mt-4 text-2xl font-semibold leading-tight text-slate-50`,children:e.title}),(0,C.jsx)(`p`,{className:`mt-3 text-sm leading-7 text-slate-300/78`,children:e.description}),(0,C.jsx)(`div`,{className:`mt-4 flex flex-wrap gap-2`,children:e.badges.map(e=>(0,C.jsx)(`span`,{className:`rounded-full border border-sky-200/10 bg-slate-950/42 px-2.5 py-1 text-xs text-slate-300/72`,children:e},e))}),(0,C.jsx)(`button`,{type:`button`,onClick:()=>t(n),className:`mt-auto w-fit rounded-full border border-cyan-100/22 bg-cyan-100/[0.08] px-4 py-2 text-sm font-bold text-cyan-50 transition hover:border-cyan-100/38 hover:bg-cyan-100/[0.12]`,children:i})]})]})}function Hn({navigate:e}){return(0,C.jsxs)(`section`,{className:`w-full overflow-x-hidden px-4 py-6 text-slate-100 sm:px-6 lg:px-10`,children:[(0,C.jsxs)(`div`,{className:`wide-shell flex flex-col`,children:[(0,C.jsxs)(`header`,{className:`homeHero`,children:[(0,C.jsx)(`div`,{className:`pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(130,180,230,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(130,180,230,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-55`}),(0,C.jsx)(`div`,{className:`heroArc heroArcOne`}),(0,C.jsx)(`div`,{className:`heroArc heroArcTwo`}),(0,C.jsx)(`div`,{className:`heroDot heroDotOne`}),(0,C.jsx)(`div`,{className:`heroDot heroDotTwo`}),(0,C.jsxs)(`div`,{className:`relative max-w-5xl`,children:[(0,C.jsx)(`p`,{className:`heroLabel`,children:`PORTAIL DE RECHERCHE`}),(0,C.jsx)(`h1`,{className:`heroTitle`,children:`THEO^`}),(0,C.jsx)(`h2`,{className:`heroSubtitle`,children:`Corpus morphogénétique, théologique et conceptuel`}),(0,C.jsx)(`p`,{className:`heroText`,children:`Une architecture ouverte autour des formes, des seuils, des images, des textes, des actualités et des champs symboliques.`}),(0,C.jsxs)(`div`,{className:`heroActions`,children:[(0,C.jsx)(zn,{route:`map`,navigate:e,variant:`primary`,children:`Entrer dans la mappemonde`}),(0,C.jsx)(zn,{route:`explorations`,navigate:e,variant:`gold`,children:`Voir les explorations`}),(0,C.jsx)(zn,{route:`actus`,navigate:e,children:`Lire les actus`})]})]})]}),(0,C.jsxs)(`section`,{className:`latestPanel updates-section`,children:[(0,C.jsxs)(`div`,{className:`latestHeader`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`p`,{className:`text-xs font-bold uppercase tracking-[0.32em] text-cyan-100/62`,children:`Corpus vivant`}),(0,C.jsx)(`h2`,{className:`mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl`,children:`Dernières nouveautés`})]}),(0,C.jsx)(`p`,{className:`max-w-md text-sm leading-7 text-slate-300/72`,children:`Explorations, actus et mises à jour récentes du site.`})]}),(0,C.jsx)(`div`,{className:`updates-grid latestGrid`,children:Nn.map(t=>(0,C.jsx)(Vn,{item:t,navigate:e},t.title))})]}),(0,C.jsx)(`section`,{className:`quickAccessGrid`,children:Pn.map(([t,n,r])=>(0,C.jsxs)(`button`,{type:`button`,onClick:()=>e(r),className:`quickAccessCard`,children:[(0,C.jsx)(`span`,{className:`text-base font-semibold text-slate-50`,children:t}),(0,C.jsx)(`span`,{className:`mt-2 text-sm leading-6 text-slate-300/70`,children:n})]},t))})]}),(0,C.jsx)(`style`,{children:`
        .homeHero {
          position: relative;
          overflow: hidden;
          border-radius: 34px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background:
            radial-gradient(circle at 78% 20%, rgba(120, 180, 255, 0.14), transparent 34%),
            radial-gradient(circle at 18% 92%, rgba(189, 155, 87, 0.08), transparent 36%),
            linear-gradient(135deg, rgba(10, 18, 34, 0.96), rgba(5, 8, 18, 0.94));
          padding: clamp(42px, 6vw, 82px);
          min-height: 380px;
          box-shadow: 0 30px 120px rgba(0, 0, 0, 0.38);
        }

        .homeHero::before,
        .homeHero::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(255, 245, 210, 0.28);
          border-radius: 999px;
          pointer-events: none;
        }

        .homeHero::before { width: 110px; height: 110px; top: 42px; right: 13%; }
        .homeHero::after { width: 74px; height: 74px; top: 86px; right: 19%; opacity: 0.65; }
        .heroArc { position: absolute; border: 1px solid rgba(130, 210, 245, 0.12); border-radius: 999px; pointer-events: none; }
        .heroArcOne { width: 360px; height: 180px; right: -80px; bottom: 42px; transform: rotate(-18deg); }
        .heroArcTwo { width: 240px; height: 240px; right: 15%; bottom: -110px; border-color: rgba(214, 180, 104, 0.1); }
        .heroDot { position: absolute; width: 6px; height: 6px; border-radius: 999px; background: rgba(180, 230, 255, 0.5); box-shadow: 0 0 18px rgba(120, 200, 245, 0.18); }
        .heroDotOne { right: 25%; top: 35%; }
        .heroDotTwo { right: 10%; top: 58%; background: rgba(230, 198, 128, 0.45); }
        .heroLabel { letter-spacing: 0.45em; text-transform: uppercase; font-weight: 800; font-size: 0.78rem; color: rgba(235, 245, 255, 0.82); }
        .heroTitle { margin: 28px 0 18px; font-size: clamp(4.8rem, 12vw, 10rem); line-height: 0.82; letter-spacing: 0.14em; color: #fff8df; text-shadow: 0 0 24px rgba(214, 180, 104, 0.08); }
        .heroSubtitle { max-width: 760px; font-size: clamp(1.6rem, 3vw, 2.8rem); line-height: 1.08; color: rgba(255, 255, 255, 0.94); }
        .heroText { max-width: 720px; margin-top: 24px; font-size: 1.1rem; line-height: 1.85; color: rgba(220, 230, 245, 0.78); }
        .heroActions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }
        .latestPanel { margin-top: 34px; border-radius: 32px; border: 1px solid rgba(255, 255, 255, 0.12); background: radial-gradient(circle at 92% 0%, rgba(82, 137, 172, 0.12), transparent 34%), rgba(5, 9, 21, 0.68); padding: clamp(24px, 4vw, 42px); box-shadow: 0 24px 90px rgba(0, 0, 0, 0.26); }
        .latestHeader { display: flex; justify-content: space-between; gap: 24px; align-items: end; margin-bottom: 24px; }
        .latestGrid { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        .featureCard { display: grid; gap: 20px; min-height: 260px; border-radius: 28px; background: radial-gradient(circle at 20% 0%, rgba(255, 230, 160, 0.08), transparent 36%), rgba(3, 7, 18, 0.78); }
        .featureImageLink { background: rgba(3, 8, 20, 0.88); aspect-ratio: 16 / 9; width: 100%; }
        .featureImageLink img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform 0.22s ease, filter 0.22s ease, opacity 0.22s ease; }
        .featureImageLink:hover img, .featureImageLink:hover svg { transform: scale(1.025); filter: brightness(1.08); opacity: 0.94; }
        .featureImageLink svg { display: block; width: 100%; height: 100%; transition: transform 0.22s ease, filter 0.22s ease, opacity 0.22s ease; }
        .quickAccessGrid { margin-top: 28px; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
        .quickAccessCard { display: flex; min-height: 140px; flex-direction: column; justify-content: space-between; text-align: left; border-radius: 24px; border: 1px solid rgba(220, 240, 255, 0.1); background: rgba(4, 9, 21, 0.5); padding: 18px; transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease; }
        .quickAccessCard:hover { transform: translateY(-2px); border-color: rgba(170, 220, 255, 0.24); background: rgba(8, 16, 32, 0.64); }

        @media (min-width: 720px) {
          .latestGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (min-width: 1120px) {
          .latestGrid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }

        @media (max-width: 980px) {
          .latestHeader { align-items: start; flex-direction: column; }
          .quickAccessGrid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 640px) {
          .homeHero { padding: 34px 22px; min-height: auto; }
          .homeHero::before, .homeHero::after { opacity: 0.32; }
          .heroTitle { font-size: clamp(3.8rem, 22vw, 6rem); letter-spacing: 0.08em; }
          .heroLabel { letter-spacing: 0.28em; }
          .featureImageLink { min-height: 0; }
          .quickAccessGrid { grid-template-columns: 1fr; }
        }
      `})]})}var Un=[{slug:`theosanctus`,title:`Theosanctus`,subtitle:`Sainteté, grâce, corps, séparation, désir`,category:`Corpus & Sainteté`,color:`#63a8ff`,x:500,y:126,coordinates:{materia:82,phonon:56,photon:68,nox:61,limen:90},attractors:[`sainteté`,`grâce`,`corps`,`désir`,`séparation`],trajectory:`De la sainteté morale vers la sainteté comme régime de présence corporelle.`,status:`Chantier ouvert`},{slug:`theo-matrice-chiasmic`,title:`Theo^Matrice^Chiasmic`,subtitle:`MCPP^, chiasme, phonon, photon, seuils`,category:`Phonon & Logos`,color:`#a672ff`,x:328,y:176,coordinates:{materia:74,phonon:88,photon:62,nox:76,limen:84},attractors:[`MCPP^`,`chiasme`,`phonon`,`photon`,`limen`],trajectory:`Du cube conceptuel vers une carte morphologique des régimes de lecture.`,status:`Matrice active`},{slug:`theophonon`,title:`Theophonon`,subtitle:`Voix, vibration, rythme, propagation`,category:`Phonon & Logos`,color:`#b263ff`,x:225,y:360,coordinates:{materia:50,phonon:95,photon:42,nox:68,limen:58},attractors:[`voix`,`souffle`,`rythme`,`vibration`],trajectory:`De la parole comme message vers la voix comme régime vibratoire.`,status:`Chantier ouvert`},{slug:`theoquantique`,title:`Theoquantique`,subtitle:`Hilbert, projection, états, limites`,category:`Cosmos & Matière`,color:`#39d6ff`,x:238,y:260,coordinates:{materia:60,phonon:72,photon:86,nox:70,limen:65},attractors:[`Hilbert`,`état`,`projection`,`mesure`],trajectory:`Des analogies quantiques vers une grammaire prudente des passages.`,status:`Exploration`},{slug:`theocosmos2`,title:`Theocosmos2`,subtitle:`Cosmos, matière, champ, origine`,category:`Cosmos & Matière`,color:`#2bd9ff`,x:160,y:410,coordinates:{materia:88,phonon:46,photon:58,nox:64,limen:62},attractors:[`cosmos`,`matière`,`champ`,`origine`],trajectory:`Du cosmos comme décor vers le cosmos comme champ de courbures.`,status:`Ouvert`},{slug:`theoalchimia`,title:`Theoalchimia`,subtitle:`Transformation, matière, feu, transmutation`,category:`Cosmos & Matière`,color:`#2ceaff`,x:184,y:486,coordinates:{materia:92,phonon:54,photon:64,nox:58,limen:72},attractors:[`matière`,`feu`,`transmutation`],trajectory:`De la matière close vers une traversée des formes.`,status:`Fragmentaire`},{slug:`theostoria`,title:`Theostoria`,subtitle:`Histoire, mémoire, traces, transmission`,category:`Histoire & Mémoire`,color:`#37cfff`,x:235,y:570,coordinates:{materia:66,phonon:60,photon:52,nox:75,limen:70},attractors:[`mémoire`,`trace`,`récit`],trajectory:`De l’histoire comme ligne vers la mémoire comme champ de traces.`,status:`Ouvert`},{slug:`theopsycho`,title:`Theopsycho`,subtitle:`Psyché, corps, seuils, régulation`,category:`Mystères & Nuit`,color:`#5faaff`,x:335,y:645,coordinates:{materia:70,phonon:58,photon:48,nox:85,limen:78},attractors:[`psyché`,`corps`,`seuil`,`régulation`],trajectory:`Du symptôme isolé vers une lecture des régimes de présence.`,status:`Ouvert`},{slug:`theochaos`,title:`Theochaos`,subtitle:`Nuit, chaos, réserve, indétermination`,category:`Mystères & Nuit`,color:`#ff554a`,x:500,y:670,coordinates:{materia:54,phonon:48,photon:38,nox:94,limen:82},attractors:[`chaos`,`nuit`,`réserve`],trajectory:`Du désordre pensé comme déficit vers le chaos comme réserve non close.`,status:`Nocturne`},{slug:`theonaos`,title:`Theonaos`,subtitle:`Corps sanctuaire, temple intérieur, présence`,category:`Corpus & Sainteté`,color:`#ffd14d`,x:610,y:690,coordinates:{materia:95,phonon:45,photon:55,nox:50,limen:70},attractors:[`corps`,`naos`,`sanctuaire`],trajectory:`Du temple comme bâtiment vers le corps comme sanctuaire de présence.`,status:`Chantier ouvert`},{slug:`theobiblos`,title:`Theobiblos`,subtitle:`Texte, livre, canon, archive vivante`,category:`Corpus & Sainteté`,color:`#ff5f85`,x:745,y:660,coordinates:{materia:58,phonon:70,photon:74,nox:62,limen:79},attractors:[`texte`,`livre`,`canon`,`archive`],trajectory:`Du livre comme dépôt vers le texte comme trajectoire réactualisée.`,status:`Ouvert`},{slug:`theoliturgia`,title:`Theoliturgia`,subtitle:`Rite, corps, rythme, présence commune`,category:`Corpus & Sainteté`,color:`#ff6b4a`,x:796,y:575,coordinates:{materia:76,phonon:88,photon:67,nox:50,limen:82},attractors:[`rite`,`corps`,`rythme`,`présence`],trajectory:`Du rite comme forme vers la liturgie comme champ de co-présence.`,status:`Ouvert`},{slug:`theocarnation`,title:`Theocarnation`,subtitle:`Chair, incarnation, densité, apparition`,category:`Corpus & Sainteté`,color:`#ff7b45`,x:835,y:468,coordinates:{materia:92,phonon:52,photon:72,nox:46,limen:77},attractors:[`chair`,`incarnation`,`densité`],trajectory:`De l’idée vers la chair comme portance d’apparition.`,status:`Actif`},{slug:`theologos`,title:`Theologos`,subtitle:`Verbe, sens, lumière, articulation`,category:`Phonon & Logos`,color:`#ffa646`,x:872,y:360,coordinates:{materia:54,phonon:80,photon:90,nox:42,limen:68},attractors:[`logos`,`verbe`,`sens`,`lumière`],trajectory:`Du logos comme concept vers le verbe comme traversée phono-photonique.`,status:`Ouvert`},{slug:`theoparadoxa`,title:`Theoparadoxa`,subtitle:`Paradoxe, limite, tension, non-coïncidence`,category:`Limites & Seuils`,color:`#ffe16b`,x:842,y:250,coordinates:{materia:48,phonon:62,photon:76,nox:80,limen:92},attractors:[`paradoxe`,`limite`,`tension`],trajectory:`De la contradiction apparente vers la tenue des non-coïncidences.`,status:`Ouvert`},{slug:`theolimits`,title:`Theolimits`,subtitle:`Limite, seuil, bord, membrane`,category:`Limites & Seuils`,color:`#ffd34d`,x:785,y:165,coordinates:{materia:50,phonon:46,photon:60,nox:78,limen:96},attractors:[`limite`,`bord`,`membrane`],trajectory:`De la limite comme interdiction vers le seuil comme condition de passage.`,status:`Ouvert`},{slug:`theogynestoria`,title:`Theogynestoria`,subtitle:`Féminin, mémoire, récit, portance`,category:`Corpus & Sainteté`,color:`#ffc35c`,x:660,y:116,coordinates:{materia:78,phonon:64,photon:76,nox:58,limen:84},attractors:[`féminin`,`mémoire`,`portance`],trajectory:`Du féminin comme thème vers une structure de portance historique et symbolique.`,status:`Ouvert`}].map(e=>({...e,id:e.slug,shortDescription:e.subtitle,position:{x:e.x,y:e.y}})),Wn=[`Tout`,`Corpus & Sainteté`,`Phonon & Logos`,`Cosmos & Matière`,`Limites & Seuils`,`Mystères & Nuit`,`Histoire & Mémoire`,`Matrice`],Gn=[[`Espace de Hilbert`,`Champ formel des états possibles`,`#36cfff`],[`Espace projectif`,`Rayons d’états physiquement distinguables`,`#a66cff`],[`Géodésique cubique`,`Trajectoire lisse sous contraintes de transition`,`#ffd54a`],[`Projection MCPP^`,`Coordonnées morphologiques : Materia, Phonon, Photon, Nox, Limen`,`#ff8a2a`],[`Mappemonde Theo^`,`Interface navigable des chantiers en cours`,`#21e6ff`]];function Kn({name:e}){let t={width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`};return e===`home`?(0,C.jsxs)(`svg`,{...t,children:[(0,C.jsx)(`path`,{d:`M3 11.5 12 4l9 7.5`}),(0,C.jsx)(`path`,{d:`M5.5 10.5V20h13v-9.5`}),(0,C.jsx)(`path`,{d:`M9.5 20v-6h5v6`})]}):e===`globe`?(0,C.jsxs)(`svg`,{...t,children:[(0,C.jsx)(`circle`,{cx:`12`,cy:`12`,r:`8`}),(0,C.jsx)(`path`,{d:`M4 12h16`}),(0,C.jsx)(`path`,{d:`M12 4c2.2 2.2 3.3 4.8 3.3 8S14.2 17.8 12 20c-2.2-2.2-3.3-4.8-3.3-8S9.8 6.2 12 4Z`})]}):e===`nodes`?(0,C.jsxs)(`svg`,{...t,children:[(0,C.jsx)(`circle`,{cx:`6`,cy:`6`,r:`2`}),(0,C.jsx)(`circle`,{cx:`18`,cy:`6`,r:`2`}),(0,C.jsx)(`circle`,{cx:`12`,cy:`18`,r:`2`}),(0,C.jsx)(`path`,{d:`M8 7.2 11 16`}),(0,C.jsx)(`path`,{d:`M16 7.2 13 16`}),(0,C.jsx)(`path`,{d:`M8 6h8`})]}):e===`text`?(0,C.jsxs)(`svg`,{...t,children:[(0,C.jsx)(`path`,{d:`M7 4h8l2 2v14H7z`}),(0,C.jsx)(`path`,{d:`M15 4v3h3`}),(0,C.jsx)(`path`,{d:`M9.5 11h5`}),(0,C.jsx)(`path`,{d:`M9.5 15h5`})]}):e===`image`?(0,C.jsxs)(`svg`,{...t,children:[(0,C.jsx)(`rect`,{x:`4`,y:`5`,width:`16`,height:`14`,rx:`2`}),(0,C.jsx)(`circle`,{cx:`9`,cy:`10`,r:`1.5`}),(0,C.jsx)(`path`,{d:`m6.5 17 4.2-4.2 2.8 2.8 2-2L18 16`})]}):e===`actus`?(0,C.jsxs)(`svg`,{...t,children:[(0,C.jsx)(`path`,{d:`M5 5h14v14H5z`}),(0,C.jsx)(`path`,{d:`M8 9h8`}),(0,C.jsx)(`path`,{d:`M8 13h8`}),(0,C.jsx)(`path`,{d:`M8 17h5`})]}):e===`explore`?(0,C.jsxs)(`svg`,{...t,children:[(0,C.jsx)(`path`,{d:`M4 18c4-7 8-11 16-12`}),(0,C.jsx)(`path`,{d:`M8 18c2.5-3.5 5.5-5.5 10-6`}),(0,C.jsx)(`circle`,{cx:`17`,cy:`7`,r:`2`}),(0,C.jsx)(`path`,{d:`M5 20h14`})]}):e===`method`?(0,C.jsxs)(`svg`,{...t,children:[(0,C.jsx)(`circle`,{cx:`12`,cy:`12`,r:`8`}),(0,C.jsx)(`path`,{d:`m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8z`})]}):(0,C.jsxs)(`svg`,{...t,children:[(0,C.jsx)(`path`,{d:`M5 7h14`}),(0,C.jsx)(`path`,{d:`M7 7l1 13h8l1-13`}),(0,C.jsx)(`path`,{d:`M9 7V5h6v2`})]})}function qn(){return(0,C.jsx)(`div`,{className:`logoMark`,"aria-hidden":`true`,children:(0,C.jsxs)(`svg`,{viewBox:`0 0 100 100`,children:[(0,C.jsx)(`circle`,{cx:`50`,cy:`50`,r:`34`}),(0,C.jsx)(`circle`,{cx:`50`,cy:`26`,r:`20`}),(0,C.jsx)(`circle`,{cx:`50`,cy:`74`,r:`20`}),(0,C.jsx)(`circle`,{cx:`26`,cy:`50`,r:`20`}),(0,C.jsx)(`circle`,{cx:`74`,cy:`50`,r:`20`}),(0,C.jsx)(`circle`,{cx:`33`,cy:`33`,r:`18`}),(0,C.jsx)(`circle`,{cx:`67`,cy:`67`,r:`18`}),(0,C.jsx)(`circle`,{cx:`67`,cy:`33`,r:`18`}),(0,C.jsx)(`circle`,{cx:`33`,cy:`67`,r:`18`})]})})}var Jn=[[`ACCUEIL`,`home`,`home`],[`MAPPEMONDE`,`globe`,`map`],[`PROJETS`,`nodes`,`projets`],[`TEXTES`,`text`,`textes`],[`IMAGES`,`image`,`gallery`],[`ACTUS`,`actus`,`actus`],[`EXPLORATIONS`,`explore`,`explorations`],[`METHODE`,`method`,`methode`],[`ARCHIVES`,`archive`,`archives`]];function Yn(e){return e===`explorationArticle`?`explorations`:e===`actusArticle`?`actus`:e}function Xn(e,t,n){let r=Yn(e);return r===`home`&&t===`ACCUEIL`||r===`map`&&t===`MAPPEMONDE`||r===`projets`&&t===`PROJETS`||r===`textes`&&t===`TEXTES`||r===`methode`&&t===`METHODE`||r===`archives`&&t===`ARCHIVES`||r===`gallery`&&t===`IMAGES`||r===`actus`&&n===`actus`||r===`explorations`&&n===`explorations`}function Zn(e){let t=Yn(e);return t===`home`?`Accueil`:t===`gallery`?`Images`:t===`actus`?`Actus`:t===`explorations`?`Explorations`:t===`projets`?`Projets`:t===`textes`?`Textes`:t===`methode`?`Méthode`:t===`archives`?`Archives`:`Mappemonde`}function Qn({currentRoute:e=`home`,navigate:t=()=>{}}){let n=Jn.length?Jn:[[`ACCUEIL`,`home`,`home`],[`MAPPEMONDE`,`globe`,`map`],[`PROJETS`,`nodes`,`map`],[`TEXTES`,`text`,`map`],[`IMAGES`,`image`,`gallery`],[`ACTUS`,`actus`,`actus`],[`EXPLORATIONS`,`explore`,`explorations`],[`MÉTHODE`,`method`],[`ARCHIVES`,`archive`,`map`]];return(0,C.jsxs)(`aside`,{className:`sidebar`,children:[(0,C.jsx)(qn,{}),(0,C.jsx)(`nav`,{className:`sidebarNav`,children:n.map(([n,r,i])=>(0,C.jsxs)(`button`,{className:`navItem ${Xn(e,n,i)?`active`:``}`,onClick:()=>t(i||`map`),children:[(0,C.jsx)(Kn,{name:r}),(0,C.jsx)(`span`,{children:n})]},n))}),(0,C.jsxs)(`div`,{className:`sidebarMotto`,children:[(0,C.jsxs)(`em`,{children:[`“Non nova,`,(0,C.jsx)(`br`,{}),`sed nove.”`]}),(0,C.jsxs)(`span`,{children:[`Toujours à réformer,`,(0,C.jsx)(`br`,{}),`jamais à clore.`]})]})]})}function $n({currentRoute:e,onOpen:t,navigate:n}){return(0,C.jsxs)(`header`,{className:`mobileTopbar`,children:[(0,C.jsxs)(`button`,{type:`button`,className:`mobileBrand`,onClick:()=>n(`home`),"aria-label":`Retour a l'accueil Theo`,children:[(0,C.jsx)(`span`,{className:`mobileBrandMark`,"aria-hidden":`true`,children:`✦`}),(0,C.jsx)(`span`,{className:`mobileBrandText`,children:`Theo^`})]}),(0,C.jsx)(`span`,{className:`mobileSection`,children:Zn(e)}),(0,C.jsx)(`button`,{type:`button`,className:`mobileMenuButton`,onClick:t,"aria-label":`Ouvrir le menu`,children:(0,C.jsx)(`span`,{"aria-hidden":`true`,children:`☰`})})]})}function er({currentRoute:e,isOpen:t,onClose:n,navigate:r}){let i=e=>{r(e||`map`),n()};return(0,C.jsxs)(`div`,{className:`mobileDrawer ${t?`is-open`:``}`,role:`dialog`,"aria-modal":`true`,"aria-label":`Navigation Theo`,children:[(0,C.jsxs)(`div`,{className:`mobileDrawerHeader`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`p`,{children:`THEO^`}),(0,C.jsx)(`span`,{children:`Navigation`})]}),(0,C.jsx)(`button`,{type:`button`,className:`mobileCloseButton`,onClick:n,"aria-label":`Fermer le menu`,children:`×`})]}),(0,C.jsx)(`nav`,{className:`mobileNavList`,children:Jn.map(([t,n,r])=>(0,C.jsxs)(`button`,{type:`button`,className:`mobileNavItem ${Xn(e,t,r)?`is-active`:``}`,onClick:()=>i(r),children:[(0,C.jsx)(Kn,{name:n}),(0,C.jsx)(`span`,{children:t})]},t))})]})}function tr({currentRoute:e,onOpen:t,navigate:n}){return(0,C.jsxs)(`nav`,{className:`mobileBottomNav`,"aria-label":`Navigation mobile principale`,children:[[[`Accueil`,`home`,`home`],[`Projets`,`nodes`,`projets`],[`Textes`,`text`,`textes`],[`Explorations`,`explore`,`explorations`]].map(([t,r,i])=>(0,C.jsxs)(`button`,{type:`button`,className:Xn(e,t.toUpperCase(),i)?`is-active`:``,onClick:()=>n(i),children:[(0,C.jsx)(Kn,{name:r}),(0,C.jsx)(`span`,{children:t})]},t)),(0,C.jsxs)(`button`,{type:`button`,onClick:t,children:[(0,C.jsx)(`span`,{className:`bottomMenuGlyph`,"aria-hidden":`true`,children:`☰`}),(0,C.jsx)(`span`,{children:`Menu`})]})]})}function nr({currentRoute:e,navigate:t,mainClassName:n=`homeShell`,children:r}){let[i,a]=(0,_.useState)(!1);return(0,C.jsxs)(`div`,{className:`theoPage`,children:[(0,C.jsx)(`div`,{className:`backgroundGrid`}),(0,C.jsx)(Qn,{currentRoute:e,navigate:t}),(0,C.jsx)($n,{currentRoute:e,onOpen:()=>a(!0),navigate:t}),(0,C.jsx)(er,{currentRoute:e,isOpen:i,onClose:()=>a(!1),navigate:t}),(0,C.jsx)(`main`,{className:n,children:r}),(0,C.jsx)(tr,{currentRoute:e,onOpen:()=>a(!0),navigate:t}),(0,C.jsx)(`style`,{children:yr})]})}function rr({compact:e=!1}){return(0,C.jsxs)(`section`,{className:e?`methodRail compact`:`methodRail`,children:[!e&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(`div`,{className:`brandBlock`,children:[(0,C.jsx)(`h2`,{children:`Mappemonde géodésique`}),(0,C.jsx)(`em`,{children:`semper reformanda`})]}),(0,C.jsx)(`p`,{className:`introText`,children:`Carte projective des chantiers Theo^ dans MCPP^.`})]}),(0,C.jsx)(`div`,{className:`stepList`,children:Gn.map(([e,t,n],r)=>(0,C.jsxs)(`article`,{className:`step`,style:{"--step-color":n},children:[(0,C.jsx)(`div`,{className:`stepIndex`,children:r+1}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h3`,{children:e}),(0,C.jsx)(`p`,{children:t})]})]},e))}),!e&&(0,C.jsx)(ar,{})]})}function ir(){return(0,C.jsxs)(`details`,{className:`mobileAccordion`,children:[(0,C.jsx)(`summary`,{children:`Méthode de projection`}),(0,C.jsx)(rr,{compact:!0})]})}function ar(){return(0,C.jsx)(`div`,{className:`categoryLegend`,children:[[`Corpus & Sainteté`,`#4e96ff`],[`Phonon & Logos`,`#a86cff`],[`Cosmos & Matière`,`#30d7ff`],[`Limites & Seuils`,`#ffc64c`],[`Mystères & Nuit`,`#ff5b40`]].map(([e,t])=>(0,C.jsxs)(`div`,{className:`legendRow`,children:[(0,C.jsx)(`span`,{style:{background:t}}),e]},e))})}function or(){return(0,C.jsx)(`header`,{className:`mobileHeader`,children:(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h1`,{children:`THEO^`}),(0,C.jsxs)(`p`,{children:[`Mappemonde géodésique · `,(0,C.jsx)(`em`,{children:`semper reformanda`})]})]})})}function sr({activeCategory:e,setActiveCategory:t,query:n,setQuery:r}){return(0,C.jsxs)(`section`,{className:`filterZone`,children:[(0,C.jsx)(`div`,{className:`filters`,children:Wn.map(n=>(0,C.jsx)(`button`,{className:e===n?`selected`:``,onClick:()=>t(n),children:n},n))}),(0,C.jsxs)(`label`,{className:`searchBox`,children:[(0,C.jsx)(`span`,{children:`⌕`}),(0,C.jsx)(`input`,{value:n,onChange:e=>r(e.target.value),placeholder:`Rechercher un projet...`})]})]})}function cr({coordinates:e}){let t=[`materia`,`photon`,`limen`,`nox`,`phonon`],n={materia:`MATERIA`,photon:`PHOTON`,limen:`LIMEN`,nox:`NOX`,phonon:`PHONON`},r=t.map((n,r)=>{let i=-Math.PI/2+r*2*Math.PI/t.length,a=70*(e[n]/100);return[100+Math.cos(i)*a,100+Math.sin(i)*a]}),i=t.map((e,n)=>{let r=-Math.PI/2+n*2*Math.PI/t.length;return[100+Math.cos(r)*70,100+Math.sin(r)*70]});return(0,C.jsxs)(`div`,{className:`radarWrap`,children:[(0,C.jsxs)(`svg`,{viewBox:`0 0 200 200`,className:`radarChart`,children:[[.25,.5,.75,1].map(e=>(0,C.jsx)(`polygon`,{points:i.map(([t,n])=>`${100+(t-100)*e},${100+(n-100)*e}`).join(` `),className:`radarGrid`},e)),i.map(([e,t],n)=>(0,C.jsx)(`line`,{x1:100,y1:100,x2:e,y2:t,className:`radarAxis`},n)),(0,C.jsx)(`polygon`,{points:r.map(([e,t])=>`${e},${t}`).join(` `),className:`radarFill`}),(0,C.jsx)(`polygon`,{points:r.map(([e,t])=>`${e},${t}`).join(` `),className:`radarStroke`}),i.map(([e,t],n)=>(0,C.jsx)(`circle`,{cx:e,cy:t,r:`3.5`,className:`radarDot`},n))]}),t.map((r,i)=>{let a=-Math.PI/2+i*2*Math.PI/t.length,o=100+Math.cos(a)*92,s=100+Math.sin(a)*92;return(0,C.jsxs)(`div`,{className:`radarLabel`,style:{left:`${o/2}%`,top:`${s/2}%`},children:[(0,C.jsx)(`strong`,{children:n[r]}),(0,C.jsx)(`span`,{children:e[r]})]},r)})]})}function lr({project:e}){return(0,C.jsxs)(`aside`,{className:`projectPanel`,children:[(0,C.jsxs)(`div`,{className:`panelHeader`,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h2`,{children:e.title}),(0,C.jsx)(`p`,{children:e.subtitle})]}),(0,C.jsx)(`span`,{children:e.status})]}),(0,C.jsxs)(`div`,{className:`panelSection radarSection`,children:[(0,C.jsx)(`h3`,{children:`Coordonnées MCPP^`}),(0,C.jsx)(cr,{coordinates:e.coordinates})]}),(0,C.jsxs)(`div`,{className:`panelSection`,children:[(0,C.jsx)(`h3`,{children:`Attracteurs principaux`}),(0,C.jsx)(`div`,{className:`tags`,children:e.attractors.map(e=>(0,C.jsx)(`span`,{children:e},e))})]}),(0,C.jsxs)(`div`,{className:`panelSection`,children:[(0,C.jsx)(`h3`,{children:`Trajectoire actuelle`}),(0,C.jsx)(`p`,{className:`trajectoryText`,children:e.trajectory}),(0,C.jsxs)(`svg`,{className:`sparkline`,viewBox:`0 0 260 60`,children:[(0,C.jsx)(`path`,{d:`M4 38 C 34 20, 56 28, 84 34 S 136 25, 162 18 S 218 54, 256 26`}),(0,C.jsx)(`circle`,{cx:`256`,cy:`26`,r:`3`})]})]}),(0,C.jsxs)(`div`,{className:`panelFoot`,children:[(0,C.jsxs)(`p`,{children:[`État actuel : `,(0,C.jsx)(`strong`,{children:`v0.3`}),(0,C.jsx)(`br`,{}),`Dernière reformulation : 17 mai 2026`]}),(0,C.jsxs)(`button`,{children:[`Voir la fiche complète `,(0,C.jsx)(`span`,{children:`→`})]})]})]})}function ur({filteredProjects:e,selectedProject:t,setSelectedProject:n}){let r=(0,_.useMemo)(()=>{let e=Object.fromEntries(Un.map(e=>[e.slug,e]));return[[`theosanctus`,`theo-matrice-chiasmic`],[`theo-matrice-chiasmic`,`theophonon`],[`theophonon`,`theoquantique`],[`theoquantique`,`theocosmos2`],[`theocosmos2`,`theoalchimia`],[`theoalchimia`,`theostoria`],[`theostoria`,`theopsycho`],[`theopsycho`,`theochaos`],[`theochaos`,`theonaos`],[`theonaos`,`theobiblos`],[`theobiblos`,`theoliturgia`],[`theoliturgia`,`theocarnation`],[`theocarnation`,`theologos`],[`theologos`,`theoparadoxa`],[`theoparadoxa`,`theolimits`],[`theolimits`,`theogynestoria`],[`theogynestoria`,`theosanctus`],[`theoquantique`,`theologos`],[`theophonon`,`theocarnation`],[`theochaos`,`theo-matrice-chiasmic`]].map(([t,n])=>[e[t],e[n]]).filter(([e,t])=>e&&t)},[]),i=new Set(e.map(e=>e.slug)),a={theochaos:{dx:0,dy:-34},theonaos:{dx:0,dy:-48},theobiblos:{dx:-10,dy:-40},theoliturgia:{dx:-16,dy:-18}};return(0,C.jsx)(`section`,{className:`mapCard`,"aria-label":`Mappemonde géodésique Theo^`,children:(0,C.jsxs)(`svg`,{className:`geoMap`,viewBox:`0 0 1000 805`,role:`img`,children:[(0,C.jsxs)(`defs`,{children:[(0,C.jsxs)(`radialGradient`,{id:`sphereGlow`,cx:`50%`,cy:`45%`,r:`58%`,children:[(0,C.jsx)(`stop`,{offset:`0%`,stopColor:`#1d95ff`,stopOpacity:`0.42`}),(0,C.jsx)(`stop`,{offset:`42%`,stopColor:`#244a89`,stopOpacity:`0.24`}),(0,C.jsx)(`stop`,{offset:`74%`,stopColor:`#8a5a33`,stopOpacity:`0.13`}),(0,C.jsx)(`stop`,{offset:`100%`,stopColor:`#020711`,stopOpacity:`0.02`})]}),(0,C.jsxs)(`linearGradient`,{id:`cubeEdge`,x1:`0`,x2:`1`,children:[(0,C.jsx)(`stop`,{offset:`0`,stopColor:`#b8ddf2`}),(0,C.jsx)(`stop`,{offset:`1`,stopColor:`#8fb8d5`})]}),(0,C.jsxs)(`filter`,{id:`softGlow`,x:`-80%`,y:`-80%`,width:`260%`,height:`260%`,children:[(0,C.jsx)(`feGaussianBlur`,{stdDeviation:`5`,result:`blur`}),(0,C.jsxs)(`feMerge`,{children:[(0,C.jsx)(`feMergeNode`,{in:`blur`}),(0,C.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]}),(0,C.jsxs)(`filter`,{id:`bigGlow`,x:`-100%`,y:`-100%`,width:`300%`,height:`300%`,children:[(0,C.jsx)(`feGaussianBlur`,{stdDeviation:`12`,result:`blur`}),(0,C.jsxs)(`feMerge`,{children:[(0,C.jsx)(`feMergeNode`,{in:`blur`}),(0,C.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]}),(0,C.jsxs)(`filter`,{id:`cubeSoftGlow`,x:`-70%`,y:`-70%`,width:`240%`,height:`240%`,children:[(0,C.jsx)(`feGaussianBlur`,{stdDeviation:`1.35`,result:`blur`}),(0,C.jsxs)(`feMerge`,{children:[(0,C.jsx)(`feMergeNode`,{in:`blur`}),(0,C.jsx)(`feMergeNode`,{in:`SourceGraphic`})]})]})]}),(0,C.jsx)(`rect`,{x:`0`,y:`0`,width:`1000`,height:`760`,rx:`36`,className:`svgGlass`}),(0,C.jsxs)(`g`,{className:`topPath`,children:[(0,C.jsx)(`rect`,{x:`324`,y:`30`,width:`352`,height:`46`,rx:`23`}),(0,C.jsx)(`text`,{x:`500`,y:`60`,textAnchor:`middle`,children:`H  →  P(H)  →  ΓC(T)  →  ΠMCPP  →  THEO^`})]}),(0,C.jsxs)(`g`,{className:`sphereLayer`,children:[(0,C.jsx)(`circle`,{cx:`500`,cy:`390`,r:`315`,className:`sphereOuter`}),(0,C.jsx)(`circle`,{cx:`500`,cy:`390`,r:`270`,fill:`url(#sphereGlow)`,className:`sphereBody`}),(0,C.jsx)(`ellipse`,{cx:`500`,cy:`390`,rx:`345`,ry:`255`,className:`sphereOrbit faint`}),(0,C.jsx)(`ellipse`,{cx:`500`,cy:`390`,rx:`280`,ry:`130`,className:`sphereOrbit`}),(0,C.jsx)(`ellipse`,{cx:`500`,cy:`390`,rx:`150`,ry:`270`,className:`sphereOrbit faint`}),(0,C.jsx)(`ellipse`,{cx:`500`,cy:`390`,rx:`270`,ry:`66`,className:`sphereOrbit muted`,transform:`rotate(-20 500 390)`}),(0,C.jsx)(`ellipse`,{cx:`500`,cy:`390`,rx:`270`,ry:`66`,className:`sphereOrbit muted`,transform:`rotate(24 500 390)`}),(0,C.jsx)(`path`,{className:`softCurve`,d:`M170 465 C270 340 360 495 450 385 C560 247 680 220 825 283`}),(0,C.jsx)(`g`,{className:`starDust`,children:Array.from({length:90}).map((e,t)=>(0,C.jsx)(`circle`,{cx:500+Math.cos(t*12.989)*(40+t*37%250),cy:390+Math.sin(t*7.23)*(30+t*29%210),r:t%3*.45+.55},t))})]}),(0,C.jsx)(`g`,{className:`connections`,children:r.map(([e,t],n)=>(0,C.jsx)(`line`,{x1:e.x,y1:e.y,x2:t.x,y2:t.y,className:i.has(e.slug)&&i.has(t.slug)?`visible`:`hidden`},`${e.slug}-${t.slug}-${n}`))}),(0,C.jsx)(dr,{}),(0,C.jsx)(`g`,{className:`projectsLayer`,children:Un.map(e=>{let r=i.has(e.slug),o=t.slug===e.slug,s=e.x<330?`start`:e.x>700?`end`:`middle`,c=a[e.slug]||{dx:0,dy:0},l=e.x+(s===`start`?18:s===`end`?-18:0)+c.dx,u=e.y+(e.y<190?-20:e.y>625?28:8)+c.dy,d=Math.max(86,e.title.length*(o?9.4:8.4)+20),f=o?24:21,p=s===`middle`?l-d/2:s===`end`?l-d-8:l-8,m=u-f+6;return(0,C.jsxs)(`g`,{className:`projectNode ${r?``:`dimmed`} ${o?`selected`:``}`,onClick:()=>n(e),tabIndex:`0`,role:`button`,"aria-label":e.title,children:[(0,C.jsx)(`circle`,{cx:e.x,cy:e.y,r:o?15:10,fill:e.color,filter:`url(#softGlow)`}),(0,C.jsx)(`circle`,{cx:e.x,cy:e.y,r:o?15:10,className:`nodeRing`}),(0,C.jsx)(`rect`,{x:p,y:m,width:d,height:f,rx:`8`,className:`projectLabelBox`}),(0,C.jsx)(`text`,{x:l,y:u,textAnchor:s,className:`projectLabelBg`,children:e.title}),(0,C.jsx)(`text`,{x:l,y:u,textAnchor:s,className:`projectLabel`,children:e.title})]},e.slug)})}),(0,C.jsxs)(`g`,{className:`limenBase`,children:[(0,C.jsx)(`ellipse`,{cx:`500`,cy:`738`,rx:`250`,ry:`34`}),(0,C.jsx)(`rect`,{x:`394`,y:`712`,width:`212`,height:`50`,rx:`25`}),(0,C.jsx)(`circle`,{cx:`500`,cy:`709`,r:`8`}),(0,C.jsx)(`text`,{x:`500`,y:`735`,textAnchor:`middle`,className:`limenTitle`,children:`L I M E N`}),(0,C.jsx)(`text`,{x:`500`,y:`753`,textAnchor:`middle`,className:`limenText`,children:`seuils, passages, membranes`})]})]})})}function dr(){let e=[[442,342],[558,342],[558,448],[442,448]],t=e.map(([e,t])=>[e+48,t-32]),n=e=>e.map(([e,t])=>`${e},${t}`).join(` `);return(0,C.jsxs)(`g`,{className:`cubeLayer`,filter:`url(#cubeSoftGlow)`,children:[(0,C.jsx)(`circle`,{cx:500,cy:390,r:`118`,className:`cubeHalo`}),(0,C.jsx)(`line`,{x1:500,y1:230,x2:500,y2:320,className:`axisLine`}),(0,C.jsx)(`line`,{x1:322,y1:390,x2:422,y2:390,className:`axisLine`}),(0,C.jsx)(`line`,{x1:578,y1:390,x2:678,y2:390,className:`axisLine`}),(0,C.jsx)(`line`,{x1:398,y1:506,x2:452,y2:458,className:`axisLine`}),(0,C.jsx)(`line`,{x1:554,y1:460,x2:618,y2:508,className:`axisLine`}),(0,C.jsx)(`text`,{x:500,y:218,textAnchor:`middle`,className:`axisLabel materia`,children:`MATERIA`}),(0,C.jsx)(`text`,{x:310,y:395,textAnchor:`end`,className:`axisLabel phonon`,children:`PHONON`}),(0,C.jsx)(`text`,{x:690,y:395,textAnchor:`start`,className:`axisLabel photon`,children:`PHOTON`}),(0,C.jsx)(`text`,{x:388,y:522,textAnchor:`middle`,className:`axisLabel nox`,children:`NOX`}),(0,C.jsx)(`text`,{x:632,y:522,textAnchor:`middle`,className:`axisLabel limen`,children:`LIMEN`}),(0,C.jsx)(`polygon`,{points:n(e),className:`cubeFace front`}),(0,C.jsx)(`polygon`,{points:n(t),className:`cubeFace back`}),(0,C.jsx)(`polygon`,{points:n([e[1],t[1],t[2],e[2]]),className:`cubeFace side`}),(0,C.jsx)(`polygon`,{points:n([e[0],t[0],t[1],e[1]]),className:`cubeFace top`}),e.map(([e,n],r)=>(0,C.jsx)(`line`,{x1:e,y1:n,x2:t[r][0],y2:t[r][1],className:`cubeEdge`},r)),(0,C.jsx)(`polyline`,{points:`${n(e)} ${e[0][0]},${e[0][1]}`,className:`cubeEdge`}),(0,C.jsx)(`polyline`,{points:`${n(t)} ${t[0][0]},${t[0][1]}`,className:`cubeEdge`}),(0,C.jsx)(`circle`,{cx:500,cy:390,r:`7`,className:`cubeCore`}),(0,C.jsx)(`text`,{x:500,y:380,textAnchor:`middle`,className:`cubeTitle`,children:`MCPP^`})]})}function fr(){return(0,C.jsxs)(`section`,{className:`bottomCards`,children:[(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`h3`,{children:`La géodésique cubique`}),(0,C.jsxs)(`svg`,{viewBox:`0 0 300 90`,className:`miniCurve`,children:[(0,C.jsx)(`path`,{d:`M20 55 C70 10 104 34 142 55 S222 92 280 24`}),(0,C.jsx)(`circle`,{cx:`20`,cy:`55`,r:`9`}),(0,C.jsx)(`circle`,{cx:`142`,cy:`55`,r:`7`}),(0,C.jsx)(`circle`,{cx:`280`,cy:`24`,r:`9`})]}),(0,C.jsx)(`p`,{children:`Trajectoire lisse minimisant l’accélération sous contraintes. Ce n’est pas le chemin le plus court, c’est le chemin le plus juste.`})]}),(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`h3`,{children:`MCPP^ — Matrice des régimes`}),(0,C.jsxs)(`ul`,{children:[(0,C.jsxs)(`li`,{children:[(0,C.jsx)(`b`,{className:`blue`,children:`MATERIA`}),` Portance, corps, densité`]}),(0,C.jsxs)(`li`,{children:[(0,C.jsx)(`b`,{className:`violet`,children:`PHONON`}),` Vibration, voix, rythme`]}),(0,C.jsxs)(`li`,{children:[(0,C.jsx)(`b`,{className:`gold`,children:`PHOTON`}),` Lumière, apparition, visibilité`]}),(0,C.jsxs)(`li`,{children:[(0,C.jsx)(`b`,{className:`nox`,children:`NOX`}),` Retrait, latence, indétectabilité`]}),(0,C.jsxs)(`li`,{children:[(0,C.jsx)(`b`,{className:`red`,children:`LIMEN`}),` Seuil, limite, membrane`]})]})]}),(0,C.jsxs)(`article`,{children:[(0,C.jsx)(`h3`,{children:`Principes éditoriaux`}),(0,C.jsxs)(`ul`,{className:`principles`,children:[(0,C.jsx)(`li`,{children:`Projet = nœud`}),(0,C.jsx)(`li`,{children:`Concept = attracteur`}),(0,C.jsx)(`li`,{children:`Texte = trajectoire`}),(0,C.jsx)(`li`,{children:`Image = manifestation`}),(0,C.jsx)(`li`,{children:`Reformulation = déplacement`})]})]})]})}function pr(e=window.location.pathname,t=window.location.hash){let n=t.replace(/^#/,``);return n.startsWith(`/`)?`/theo${n}`:e}function mr(e,t=``){let n=pr(e,t).toLowerCase().replace(/\/$/,``);return n.includes(`/theo/actus/`)?`actusArticle`:n.endsWith(`/theo/actus`)?`actus`:n.endsWith(`/theo/explorations/kogi-choix-du-vivant`)||n.endsWith(`/theo/explorations/kogi-le-choix-du-vivant`)||n.includes(`/theo/explorations/`)?`explorationArticle`:n.endsWith(`/theo/explorations`)?`explorations`:n.endsWith(`/theo/mappemonde`)?`map`:n.endsWith(`/theo/projets`)?`projets`:n.endsWith(`/theo/textes`)?`textes`:n.endsWith(`/theo/methode`)?`methode`:n.endsWith(`/theo/archives`)?`archives`:n.endsWith(`/theo/images`)||n.endsWith(`/theo/gallery`)?`gallery`:(n.endsWith(`/theo/home`),`home`)}function hr(e,t=``){let n=pr(e,t).toLowerCase().replace(/\/$/,``),r=e.toLowerCase().replace(/\/$/,``);if(r.endsWith(`/theo/images`))return A(`gallery`);if(r.endsWith(`/theo/actus`))return A(`actus`);if(r.endsWith(`/theo/explorations`))return A(`explorations`);if(r.endsWith(`/theo/mappemonde`))return A(`map`);if(r.endsWith(`/theo/projets`))return A(`projets`);if(r.endsWith(`/theo/textes`))return A(`textes`);if(r.endsWith(`/theo/methode`))return A(`methode`);if(r.endsWith(`/theo/archives`))return A(`archives`);let i=r.indexOf(`/theo/actus/`);if(i!==-1){let t=e.slice(i+12).split(`/`).filter(Boolean)[0]||``;if(t===`toulon-pontcarral-mort-parent-enfants`)return A(`actus/toulon-filicide-suicide-maternel-etude`);if(t)return A(`actus/${t}`)}let a=r.indexOf(`/theo/explorations/`);if(a!==-1){let t=e.slice(a+19).split(`/`).filter(Boolean)[0]||``;if(t===`thomas-romer-bible-obscure`)return A(`explorations/romer-bible-obscure`);if(t===`explorations-langlois-bible-technologies`)return A(`explorations/langlois-bible-technologies`);if(t)return A(`explorations/${t}`)}return n.endsWith(`/theo/gallery`)?A(`gallery`):n.endsWith(`/theo/actus/toulon-pontcarral-mort-parent-enfants`)?A(`actus/toulon-filicide-suicide-maternel-etude`):n.endsWith(`/theo/explorations/thomas-romer-bible-obscure`)?A(`explorations/romer-bible-obscure`):n.endsWith(`/theo/explorations/explorations-langlois-bible-technologies`)?A(`explorations/langlois-bible-technologies`):``}function gr(e){let t=window.location.hash.replace(/^#/,``);if(t.startsWith(`/explorations/`))return t.slice(14).split(`#`)[0].split(`/`).filter(Boolean)[0]||``;let n=e.toLowerCase().indexOf(`/theo/explorations/`);return n===-1?``:e.slice(n+19).split(`/`).filter(Boolean)[0]||``}function _r(e){let t=window.location.hash.replace(/^#/,``);if(t.startsWith(`/actus/`))return t.slice(7).split(`#`)[0].split(`/`).filter(Boolean)[0]||``;let n=e.toLowerCase().indexOf(`/theo/actus/`);return n===-1?``:e.slice(n+12).split(`/`).filter(Boolean)[0]||``}function A(e){let t=`/T/theo/`.replace(/\/$/,``);if(e.startsWith(`explorations/`))return`${t}/#/explorations/${e.split(`/`).slice(1).join(`/`)}`;if(e.startsWith(`actus/`))return`${t}/#/actus/${e.split(`/`).slice(1).join(`/`)}`;let n={home:``,map:`/mappemonde`,projets:`/projets`,textes:`/textes`,gallery:`/images`,actus:`/actus`,explorations:`/explorations`,methode:`/methode`,archives:`/archives`},r=n[e]??n.home;return r?`${t}/#${r}`:`${t}/`}function vr(){let[e,t]=(0,_.useState)(()=>mr(window.location.pathname,window.location.hash)),[n,r]=(0,_.useState)(`Tout`),[i,a]=(0,_.useState)(``),[o,s]=(0,_.useState)(Un[0]);(0,_.useEffect)(()=>{let e=()=>{let e=hr(window.location.pathname,window.location.hash);e&&e!==`${window.location.pathname}${window.location.hash}`&&window.history.replaceState({},``,e),t(mr(window.location.pathname,window.location.hash))};return e(),window.addEventListener(`popstate`,e),window.addEventListener(`hashchange`,e),()=>{window.removeEventListener(`popstate`,e),window.removeEventListener(`hashchange`,e)}},[]);let c=e=>{let n=A(e);window.history.pushState({},``,n),t(e.startsWith(`explorations/`)?`explorationArticle`:e.startsWith(`actus/`)?`actusArticle`:e),window.scrollTo({top:0,behavior:`smooth`})},l=(0,_.useMemo)(()=>{let e=i.trim().toLowerCase();return Un.filter(t=>{let r=n===`Tout`||n===t.category||n===`Matrice`&&t.slug.includes(`matrice`),i=`${t.title} ${t.subtitle} ${t.attractors.join(` `)}`.toLowerCase(),a=!e||i.includes(e);return r&&a})},[n,i]);return e===`home`?(0,C.jsx)(nr,{currentRoute:e,navigate:c,mainClassName:`homeShell`,children:(0,C.jsx)(Hn,{navigate:c})}):e===`gallery`?(0,C.jsx)(nr,{currentRoute:e,navigate:c,mainClassName:`homeShell`,children:(0,C.jsx)(An,{})}):e===`actus`||e===`actusArticle`?(0,C.jsx)(nr,{currentRoute:e,navigate:c,mainClassName:`homeShell`,children:(0,C.jsx)(wn,{navigate:c,slug:_r(window.location.pathname)})}):e===`explorations`||e===`explorationArticle`?(0,C.jsx)(nr,{currentRoute:e,navigate:c,mainClassName:`homeShell`,children:(0,C.jsx)(It,{navigate:c,slug:gr(window.location.pathname)})}):(0,C.jsxs)(nr,{currentRoute:e,navigate:c,mainClassName:`pageShell`,children:[(0,C.jsx)(or,{}),(0,C.jsx)(rr,{}),(0,C.jsxs)(`section`,{className:`centerStage`,children:[(0,C.jsxs)(`header`,{className:`desktopTitle`,children:[(0,C.jsx)(`h1`,{children:`THEO^`}),(0,C.jsxs)(`p`,{children:[`Mappemonde géodésique — `,(0,C.jsx)(`em`,{children:`semper reformanda`})]})]}),(0,C.jsx)(sr,{activeCategory:n,setActiveCategory:r,query:i,setQuery:a}),(0,C.jsx)(ur,{filteredProjects:l,selectedProject:o,setSelectedProject:s}),(0,C.jsx)(fr,{}),(0,C.jsx)(An,{compact:!0}),(0,C.jsx)(wn,{compact:!0,navigate:c}),(0,C.jsx)(`p`,{className:`footerQuote`,children:`La carte n’est pas le territoire. La projection n’est pas la réalité. La reformulation est le mouvement même de la recherche.`})]}),(0,C.jsx)(lr,{project:o}),(0,C.jsx)(ir,{})]})}var yr=`
:root {
  --bg: #040811;
  --panel: rgba(7, 13, 25, 0.78);
  --panel-strong: rgba(5, 9, 18, 0.92);
  --line: rgba(137, 178, 230, 0.16);
  --line-strong: rgba(166, 207, 255, 0.28);
  --text: #eef6ff;
  --muted: #9facbf;
  --gold: #ffd76b;
  --cyan: #32d7ff;
  --blue: #62a7ff;
  --violet: #a66cff;
  --orange: #ff8b38;
  --red: #ff5d45;
}
* { box-sizing: border-box; }
html, body, #root { width: 100%; min-height: 100%; margin: 0; overflow-x: hidden; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: Calibri, "Segoe UI", Arial, Helvetica, sans-serif;
  overflow-x: hidden;
}
button, input { font: inherit; }
.theoPage { min-height: 100svh; position: relative; background:
  radial-gradient(circle at 48% 25%, rgba(30, 114, 210, 0.18), transparent 34%),
  radial-gradient(circle at 78% 60%, rgba(255, 142, 55, 0.08), transparent 28%),
  linear-gradient(180deg, #050a13 0%, #02050b 100%); }
.backgroundGrid { position: fixed; inset: 0; pointer-events: none; opacity: .52; background-image:
  linear-gradient(rgba(123, 170, 227, 0.075) 1px, transparent 1px),
  linear-gradient(90deg, rgba(123, 170, 227, 0.075) 1px, transparent 1px),
  radial-gradient(circle at center, transparent 0, rgba(2, 5, 11, .55) 72%);
  background-size: 64px 64px, 64px 64px, 100% 100%; }
.sidebar { position: fixed; inset: 0 auto 0 0; width: 120px; height: 100vh; border-right: 1px solid rgba(255, 255, 255, 0.08); background: rgba(3, 7, 15, 0.96); backdrop-filter: blur(18px); z-index: 80; display: flex; flex-direction: column; align-items: center; overflow-y: auto; overflow-x: hidden; }
.logoMark { width: 68px; height: 68px; margin: 26px 0 30px; color: var(--gold); }
.logoMark svg { width: 100%; height: 100%; }
.logoMark circle { fill: none; stroke: currentColor; stroke-width: 2; opacity: .86; }
.sidebarNav { width: 100%; display: grid; gap: 6px; }
.navItem { width: 100%; min-height: 68px; color: #aeb9ca; background: transparent; border: 0; display: grid; place-items: center; gap: 3px; cursor: pointer; }
.navItem span { max-width: 94px; overflow-wrap: anywhere; font-size: 10.5px; font-weight: 700; letter-spacing: 0; }
.navItem svg { width: 21px; height: 21px; }
.navItem.active { color: var(--gold); background: rgba(255, 215, 107, .12); box-shadow: inset 3px 0 0 rgba(255, 215, 107, .34); }
.sidebarMotto { margin-top: auto; padding: 0 9px 22px; text-align: center; color: #aeb9ca; font-size: 11px; line-height: 1.45; }
.sidebarMotto em { display: block; color: #c8d4e7; margin-bottom: 16px; }
.sidebarMotto span { display: block; font-style: italic; }
.pageShell { position: relative; z-index: 2; min-height: 100svh; margin-left: 120px; width: calc(100% - 120px); display: grid; grid-template-columns: minmax(250px, 300px) minmax(520px, 1fr) minmax(310px, 350px); gap: 22px; padding: 16px 24px 20px; overflow-x: clip; }
.homeShell { position: relative; z-index: 2; min-height: 100svh; margin-left: 120px; width: calc(100% - 120px); padding: 16px 24px 36px; overflow-x: clip; }
.methodRail { min-width: 0; }
.brandBlock { border: 1px solid var(--line); border-radius: 22px; padding: 24px 22px; background: rgba(9, 15, 28, 0.62); box-shadow: 0 18px 60px rgba(0,0,0,.24); }
.brandBlock h2 { font-size: 21px; line-height: 1.12; letter-spacing: .08em; margin: 0 0 8px; font-weight: 800; color: #e9f5ff; text-transform: uppercase; }
.brandBlock p { margin: 0; color: #d7deeb; }
.brandBlock em { color: var(--gold); font-family: inherit; font-style: italic; }
.introText { margin: 14px 0 26px; padding: 18px 18px; border-radius: 16px; color: #d5deec; background: rgba(10, 17, 31, .72); border: 1px solid var(--line); line-height: 1.55; }
.stepList { position: relative; display: grid; gap: 26px; }
.stepList::before { content: ""; position: absolute; left: 27px; top: 30px; bottom: 40px; width: 1px; background: linear-gradient(180deg, transparent, rgba(174, 196, 232, .35), transparent); }
.step { display: grid; grid-template-columns: 56px 1fr; gap: 16px; align-items: start; position: relative; }
.stepIndex { width: 48px; height: 48px; display: grid; place-items: center; border: 1.5px solid var(--step-color); border-radius: 999px; color: var(--step-color); background: rgba(3, 8, 17, .82); font-weight: 800; font-size: 17px; box-shadow: 0 0 24px color-mix(in srgb, var(--step-color) 20%, transparent); }
.step h3 { margin: 4px 0 4px; color: var(--step-color); text-transform: uppercase; font-size: 15px; letter-spacing: .04em; }
.step p { margin: 0; color: #d9e1ee; line-height: 1.34; font-size: 14px; }
.categoryLegend { margin-top: 30px; padding: 20px; border-top: 1px solid var(--line); display: grid; gap: 12px; }
.legendRow { display: flex; align-items: center; gap: 10px; color: #dbe3ef; font-size: 14px; }
.legendRow span { width: 11px; height: 11px; border-radius: 999px; box-shadow: 0 0 14px currentColor; }
.centerStage { min-width: 0; display: flex; flex-direction: column; }
.desktopTitle { text-align: center; padding: 0 0 6px; }
.desktopTitle h1 { margin: 0; color: #ffd58b; letter-spacing: .24em; font-size: clamp(42px, 4.2vw, 68px); font-weight: 600; line-height: .9; text-shadow: 0 0 32px rgba(255, 183, 81, .2); }
.desktopTitle p { margin: 6px 0 0; color: #f1c77b; font-size: 16px; }
.filterZone { display: grid; gap: 10px; margin-bottom: 0; }
.filters { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }
.filters button { border: 1px solid var(--line); color: #c4cfdf; background: rgba(5, 11, 22, .62); border-radius: 999px; padding: 8px 14px; cursor: pointer; }
.filters button.selected { border-color: rgba(255, 215, 107, .8); color: var(--gold); background: rgba(255, 215, 107, .1); }
.searchBox { width: min(480px, 100%); margin: 0 auto; border: 1px solid var(--line); border-radius: 999px; background: rgba(3, 8, 17, .72); display: flex; align-items: center; gap: 10px; padding: 12px 16px; color: #8ea0b7; }
.searchBox input { width: 100%; border: 0; outline: 0; background: transparent; color: var(--text); }
.mapCard { position: relative; min-height: clamp(605px, calc(100vh - 178px), 820px); border-radius: 32px; }
.geoMap { width: 100%; height: clamp(605px, calc(100vh - 178px), 820px); display: block; }
.svgGlass { fill: rgba(7, 13, 25, .36); stroke: rgba(132, 178, 236, .17); }
.topPath rect { fill: rgba(5, 10, 20, .82); stroke: rgba(153, 185, 230, .22); }
.topPath text { fill: #dce7f5; font-size: 16px; font-weight: 800; letter-spacing: .18em; }
.sphereOuter { fill: none; stroke: rgba(86, 214, 255, .28); stroke-width: 1.35; filter: url(#softGlow); }
.sphereBody { stroke: rgba(150, 190, 255, .22); stroke-width: 1; }
.sphereOrbit { fill: none; stroke: rgba(168, 198, 235, .28); stroke-width: 2; }
.sphereOrbit.faint { stroke: rgba(89, 217, 255, .16); stroke-width: 1.2; }
.sphereOrbit.muted { stroke: rgba(194, 185, 148, .16); stroke-width: 1.1; }
.softCurve { fill: none; stroke: rgba(70, 194, 255, .62); stroke-width: 3; filter: url(#softGlow); opacity: .72; }
.starDust circle { fill: rgba(216, 236, 255, .64); }
.connections line { stroke: rgba(177, 197, 230, .24); stroke-width: 1.4; }
.connections line.hidden { opacity: .09; }
.projectsLayer { isolation: isolate; }
.projectNode { cursor: pointer; transition: opacity .2s; }
.projectNode.dimmed { opacity: .24; }
.nodeRing { fill: none; stroke: rgba(255,255,255,.78); stroke-width: 1.5; }
.projectLabelBox { fill: rgba(3, 8, 18, .78); stroke: rgba(129, 211, 255, .16); stroke-width: 1; filter: drop-shadow(0 8px 18px rgba(0,0,0,.22)); }
.projectLabelBg { paint-order: stroke; stroke: rgba(2, 5, 12, .72); stroke-width: 4px; stroke-linejoin: round; fill: rgba(255,255,255,0); font-size: 14px; font-weight: 800; }
.projectLabel { fill: #edf5ff; font-size: 14px; font-weight: 800; paint-order: stroke; stroke: rgba(0,0,0,.16); stroke-width: 1px; }
.projectNode.selected .projectLabel { fill: #ffffff; font-size: 16px; }
.cubeHalo { fill: rgba(128, 176, 214, .026); stroke: rgba(178, 216, 239, .025); }
.axisLine { stroke: rgba(178, 210, 232, .24); stroke-width: 1.15; marker-end: none; }
.axisLabel { font-size: 12px; font-weight: 900; letter-spacing: .07em; opacity: .72; }
.axisLabel.materia, .axisLabel.phonon, .axisLabel.nox { fill: #9ccce8; }
.axisLabel.photon, .axisLabel.limen { fill: #d5c98a; }
.cubeFace { stroke: url(#cubeEdge); stroke-width: .95; stroke-opacity: .58; }
.cubeFace.front { fill: rgba(147, 194, 224, .105); }
.cubeFace.back { fill: rgba(119, 161, 196, .065); }
.cubeFace.side { fill: rgba(157, 187, 207, .09); }
.cubeFace.top { fill: rgba(187, 221, 238, .075); }
.cubeEdge { fill: none; stroke: url(#cubeEdge); stroke-width: 1.05; stroke-opacity: .62; }
.cubeCore { fill: rgba(178, 218, 238, .42); filter: drop-shadow(0 0 4px rgba(139, 190, 220, .16)); }
.cubeTitle { fill: rgba(226, 240, 247, .72); font-size: 20px; font-weight: 900; letter-spacing: .04em; }
.limenBase ellipse { fill: none; stroke: rgba(255, 215, 107, .18); }
.limenBase rect { fill: rgba(6, 11, 20, .84); stroke: rgba(255, 215, 107, .32); }
.limenBase circle { fill: var(--gold); filter: url(#softGlow); }
.limenTitle { fill: var(--gold); font-size: 16px; font-weight: 900; letter-spacing: .34em; }
.limenText { fill: #d5c37c; font-size: 11px; }
.bottomCards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 14px; }
.bottomCards article { border: 1px solid var(--line); border-radius: 16px; padding: 16px 18px; background: rgba(5, 10, 19, .72); min-height: 150px; }
.bottomCards h3 { margin: 0 0 10px; color: #ffd17b; text-transform: uppercase; letter-spacing: .05em; font-size: 14px; }
.bottomCards p, .bottomCards li { color: #c5d1e2; font-size: 12px; line-height: 1.45; }
.bottomCards ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 6px; }
.bottomCards b { display: inline-block; width: 78px; font-size: 11px; }
.blue { color: #35d4ff; } .violet { color: #a970ff; } .gold { color: #ffd65b; } .nox { color: #8896ff; } .red { color: #ff674e; }
.miniCurve { width: 100%; height: 56px; }
.miniCurve path { fill: none; stroke: #ffc861; stroke-width: 3; filter: url(#softGlow); }
.miniCurve circle { fill: #173247; stroke: #7deaff; stroke-width: 3; }
.principles li::before { content: "✧"; color: #f2d184; margin-right: 8px; }
.footerQuote { margin: 20px 0 10px; text-align: center; color: rgba(245, 199, 120, .88); font-style: italic; line-height: 1.55; }
.projectPanel { border: 1px solid var(--line-strong); border-radius: 22px; background: rgba(3, 7, 17, .82); backdrop-filter: blur(20px); padding: 22px; align-self: start; position: sticky; top: 16px; max-height: calc(100vh - 32px); overflow-y: auto; scrollbar-width: thin; box-shadow: 0 24px 80px rgba(0,0,0,.38); }
.panelHeader { display: flex; gap: 16px; justify-content: space-between; align-items: flex-start; padding-bottom: 18px; border-bottom: 1px solid var(--line); }
.panelHeader h2 { margin: 0 0 8px; color: #70d7ff; font-size: 28px; letter-spacing: .02em; }
.panelHeader p { margin: 0; color: #dfe7f4; line-height: 1.45; }
.panelHeader span { border: 1px solid rgba(106, 181, 255, .5); color: #b7dcff; border-radius: 999px; padding: 6px 11px; font-size: 12px; white-space: nowrap; }
.panelSection { padding: 18px 0; border-bottom: 1px solid var(--line); }
.panelSection h3 { margin: 0 0 14px; color: #b0bfd4; text-transform: uppercase; letter-spacing: .24em; font-size: 12px; font-weight: 700; }
.radarWrap { position: relative; height: 250px; }
.radarChart { width: 100%; height: 100%; overflow: visible; }
.radarGrid { fill: none; stroke: rgba(132, 165, 218, .24); }
.radarAxis { stroke: rgba(132, 165, 218, .28); }
.radarFill { fill: rgba(32, 151, 255, .36); }
.radarStroke { fill: none; stroke: #42baff; stroke-width: 3; filter: url(#softGlow); }
.radarDot { fill: #ffd26b; }
.radarLabel { position: absolute; transform: translate(-50%, -50%); text-align: center; color: #dbe8f8; font-size: 11px; }
.radarLabel strong { display: block; font-size: 10px; }
.radarLabel span { color: #65d6ff; font-weight: 900; font-size: 14px; }
.tags { display: flex; gap: 8px; flex-wrap: wrap; }
.tags span { color: #dcecff; background: rgba(38, 139, 194, .2); border: 1px solid rgba(91, 193, 255, .24); border-radius: 999px; padding: 7px 12px; font-size: 13px; }
.trajectoryText { margin: 0; color: #dde6f2; line-height: 1.5; }
.sparkline { width: 100%; height: 70px; margin-top: 8px; }
.sparkline path { fill: none; stroke: #62a8ff; stroke-width: 3; }
.sparkline circle { fill: #8ac5ff; }
.panelFoot { padding-top: 18px; }
.panelFoot p { color: #b7c4d6; line-height: 1.5; margin: 0 0 18px; }
.panelFoot button { width: 100%; border: 1px solid rgba(69, 202, 255, .46); border-radius: 13px; padding: 14px 18px; color: #eff7ff; background: linear-gradient(90deg, rgba(22, 110, 167, .5), rgba(16, 68, 137, .55)); font-weight: 800; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 10px; box-shadow: 0 0 0 rgba(50, 215, 255, 0); transition: border-color .2s, box-shadow .2s, transform .2s, background .2s; }
.panelFoot button:hover { border-color: rgba(103, 221, 255, .75); background: linear-gradient(90deg, rgba(30, 128, 190, .58), rgba(24, 82, 155, .62)); box-shadow: 0 0 24px rgba(50, 215, 255, .16); transform: translateY(-1px); }
.panelFoot button span { margin-left: 0; line-height: 1; }
.mobileTopbar, .mobileDrawer, .mobileBottomNav { display: none; }
.mobileBrand, .mobileMenuButton, .mobileCloseButton, .mobileNavItem, .mobileBottomNav button { font: inherit; cursor: pointer; }
.mobileHeader, .mobileAccordion { display: none; }
@media (max-width: 1270px) {
  .pageShell { grid-template-columns: minmax(230px, 260px) minmax(480px, 1fr) minmax(285px, 310px); gap: 16px; padding-left: 16px; padding-right: 16px; }
  .bottomCards { grid-template-columns: 1fr; }
  .mapCard { min-height: clamp(560px, calc(100vh - 175px), 720px); }
  .geoMap { height: clamp(560px, calc(100vh - 175px), 720px); }
  .projectPanel { padding: 18px; }
  .radarWrap { height: 235px; }
}
@media (max-width: 1023px) {
  .sidebar { display: none; }
  .mobileTopbar { position: sticky; top: 0; z-index: 120; height: 68px; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 0 16px; background: rgba(4, 8, 18, 0.92); backdrop-filter: blur(18px); border-bottom: 1px solid rgba(255, 255, 255, 0.08); }
  .mobileBrand { min-width: 44px; min-height: 44px; display: inline-flex; align-items: center; gap: 9px; border: 0; background: transparent; color: #fff5cf; padding: 0; }
  .mobileBrandMark { width: 30px; height: 30px; display: grid; place-items: center; border-radius: 999px; border: 1px solid rgba(255, 230, 140, 0.28); background: rgba(255, 220, 100, 0.08); color: var(--gold); }
  .mobileBrandText { font-weight: 900; letter-spacing: .08em; text-transform: uppercase; }
  .mobileSection { min-width: 0; flex: 1; text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: rgba(238,246,255,.82); font-size: 12px; font-weight: 800; letter-spacing: .18em; text-transform: uppercase; }
  .mobileMenuButton, .mobileCloseButton { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 16px; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.045); color: #f5f7ff; font-size: 22px; }
  .mobileDrawer { position: fixed; inset: 0; z-index: 200; background: rgba(3, 6, 14, 0.97); backdrop-filter: blur(20px); overflow-y: auto; padding: 22px; }
  .mobileDrawer.is-open { display: block; }
  .mobileDrawerHeader { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 24px; }
  .mobileDrawerHeader p { margin: 0; color: #fff5cf; font-size: 26px; font-weight: 800; letter-spacing: .12em; }
  .mobileDrawerHeader span { display: block; margin-top: 4px; color: rgba(238,246,255,.62); font-size: 12px; font-weight: 800; letter-spacing: .24em; text-transform: uppercase; }
  .mobileNavList { display: grid; grid-template-columns: 1fr; gap: 12px; }
  .mobileNavItem { min-height: 58px; display: flex; align-items: center; gap: 14px; padding: 14px 16px; border-radius: 18px; color: rgba(245, 247, 255, 0.92); background: rgba(255, 255, 255, 0.045); border: 1px solid rgba(255, 255, 255, 0.08); text-align: left; }
  .mobileNavItem svg { width: 22px; height: 22px; flex: 0 0 auto; }
  .mobileNavItem span { font-size: 14px; font-weight: 850; letter-spacing: .08em; }
  .mobileNavItem.is-active { color: #ffe66d; background: rgba(255, 220, 100, 0.10); border-color: rgba(255, 220, 100, 0.35); }
  .pageShell { margin-left: 0; width: 100%; display: flex; flex-direction: column; padding: 20px; overflow-x: hidden; }
  .homeShell { margin-left: 0; width: 100%; padding: 18px 12px 28px; overflow-x: hidden; }
  .desktopTitle, .methodRail:not(.compact) { display: none; }
  .mobileHeader { display: block; order: 1; }
  .mobileHeader h1 { margin: 0; letter-spacing: .14em; font-size: clamp(42px, 14vw, 78px); line-height: .9; }
  .mobileHeader p { margin: 8px 0 0; color: #dbe6f6; font-size: 16px; }
  .centerStage { display: contents; }
  .filterZone { order: 2; margin-top: 18px; }
  .filters { justify-content: flex-start; overflow-x: auto; flex-wrap: nowrap; padding-bottom: 6px; scrollbar-width: none; }
  .filters button { white-space: nowrap; padding: 7px 12px; font-size: 12px; }
  .searchBox { margin: 0; width: min(420px, 100%); padding: 10px 14px; }
  .mapCard { order: 3; min-height: auto; margin-top: 8px; }
  .geoMap { height: 560px; min-height: 560px; }
  .projectPanel { order: 4; position: static; width: 100%; max-height: none; overflow: visible; }
  .mobileAccordion { display: block; order: 5; border: 1px solid var(--line); border-radius: 18px; background: rgba(6, 12, 24, .72); padding: 0; overflow: hidden; }
  .mobileAccordion summary { cursor: pointer; padding: 18px; font-weight: 800; color: var(--gold); }
  .methodRail.compact { display: block; padding: 0 18px 20px; }
  .methodRail.compact .stepList { gap: 16px; }
  .methodRail.compact .step { grid-template-columns: 40px 1fr; gap: 12px; }
  .methodRail.compact .stepIndex { width: 34px; height: 34px; font-size: 13px; }
  .methodRail.compact .step h3 { font-size: 13px; }
  .methodRail.compact .step p { font-size: 12px; }
  .bottomCards { order: 6; grid-template-columns: 1fr; }
  .footerQuote { order: 7; font-size: 13px; }
}
@media (max-width: 640px) {
  .pageShell { padding: 18px 12px 28px; gap: 14px; }
  .mobileHeader h1 { font-size: 44px; }
  .mobileHeader p { font-size: 13px; }
  .filterZone { gap: 10px; }
  .searchBox { font-size: 13px; }
  .mapCard { margin-left: 0; margin-right: 0; border-radius: 24px; }
  .geoMap { height: 520px; min-height: 520px; }
  .panelHeader { flex-direction: column; }
  .panelHeader h2 { font-size: 24px; }
  .radarWrap { height: 210px; }
  .bottomCards article { padding: 14px; }
}
@media (max-width: 767px) {
  .mobileBottomNav { position: fixed; left: 0; right: 0; bottom: 0; z-index: 110; height: 68px; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); background: rgba(4, 8, 18, 0.94); backdrop-filter: blur(18px); border-top: 1px solid rgba(255, 255, 255, 0.08); }
  .mobileBottomNav button { min-width: 0; min-height: 68px; display: grid; place-items: center; align-content: center; gap: 3px; border: 0; border-left: 1px solid rgba(255,255,255,.045); background: transparent; color: rgba(238,246,255,.68); padding: 4px 2px; }
  .mobileBottomNav button:first-child { border-left: 0; }
  .mobileBottomNav svg { width: 20px; height: 20px; }
  .mobileBottomNav span { max-width: 100%; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 10px; font-weight: 800; }
  .mobileBottomNav button.is-active { color: #ffe66d; background: rgba(255, 220, 100, 0.08); }
  .bottomMenuGlyph { font-size: 20px; line-height: 1; }
  .pageShell, .homeShell { padding-bottom: 84px; }
}
@media (max-width: 420px) {
  .geoMap { height: 500px; min-height: 500px; }
  .projectLabel, .projectLabelBg { font-size: 12px; }
}
`;(0,v.createRoot)(document.getElementById(`root`)).render((0,C.jsx)(_.StrictMode,{children:(0,C.jsx)(vr,{})}));