function V2(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Zh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ww(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _w={exports:{}},Ud={},Ew={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hl=Symbol.for("react.element"),j2=Symbol.for("react.portal"),B2=Symbol.for("react.fragment"),F2=Symbol.for("react.strict_mode"),U2=Symbol.for("react.profiler"),z2=Symbol.for("react.provider"),$2=Symbol.for("react.context"),W2=Symbol.for("react.forward_ref"),H2=Symbol.for("react.suspense"),q2=Symbol.for("react.memo"),K2=Symbol.for("react.lazy"),ly=Symbol.iterator;function G2(t){return t===null||typeof t!="object"?null:(t=ly&&t[ly]||t["@@iterator"],typeof t=="function"?t:null)}var Tw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sw=Object.assign,kw={};function Yo(t,e,n){this.props=t,this.context=e,this.refs=kw,this.updater=n||Tw}Yo.prototype.isReactComponent={};Yo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Yo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Cw(){}Cw.prototype=Yo.prototype;function Gm(t,e,n){this.props=t,this.context=e,this.refs=kw,this.updater=n||Tw}var Qm=Gm.prototype=new Cw;Qm.constructor=Gm;Sw(Qm,Yo.prototype);Qm.isPureReactComponent=!0;var cy=Array.isArray,Pw=Object.prototype.hasOwnProperty,Xm={current:null},Iw={key:!0,ref:!0,__self:!0,__source:!0};function Aw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Pw.call(e,r)&&!Iw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Hl,type:t,key:s,ref:o,props:i,_owner:Xm.current}}function Q2(t,e){return{$$typeof:Hl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ym(t){return typeof t=="object"&&t!==null&&t.$$typeof===Hl}function X2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var uy=/\/+/g;function ef(t,e){return typeof t=="object"&&t!==null&&t.key!=null?X2(""+t.key):e.toString(36)}function cu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Hl:case j2:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ef(o,0):r,cy(i)?(n="",t!=null&&(n=t.replace(uy,"$&/")+"/"),cu(i,e,n,"",function(c){return c})):i!=null&&(Ym(i)&&(i=Q2(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(uy,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",cy(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+ef(s,a);o+=cu(s,e,n,l,i)}else if(l=G2(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+ef(s,a++),o+=cu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Dc(t,e,n){if(t==null)return t;var r=[],i=0;return cu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Y2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},uu={transition:null},J2={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:uu,ReactCurrentOwner:Xm};function Rw(){throw Error("act(...) is not supported in production builds of React.")}ke.Children={map:Dc,forEach:function(t,e,n){Dc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Dc(t,function(){e++}),e},toArray:function(t){return Dc(t,function(e){return e})||[]},only:function(t){if(!Ym(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ke.Component=Yo;ke.Fragment=B2;ke.Profiler=U2;ke.PureComponent=Gm;ke.StrictMode=F2;ke.Suspense=H2;ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J2;ke.act=Rw;ke.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Sw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Pw.call(e,l)&&!Iw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Hl,type:t.type,key:i,ref:s,props:r,_owner:o}};ke.createContext=function(t){return t={$$typeof:$2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:z2,_context:t},t.Consumer=t};ke.createElement=Aw;ke.createFactory=function(t){var e=Aw.bind(null,t);return e.type=t,e};ke.createRef=function(){return{current:null}};ke.forwardRef=function(t){return{$$typeof:W2,render:t}};ke.isValidElement=Ym;ke.lazy=function(t){return{$$typeof:K2,_payload:{_status:-1,_result:t},_init:Y2}};ke.memo=function(t,e){return{$$typeof:q2,type:t,compare:e===void 0?null:e}};ke.startTransition=function(t){var e=uu.transition;uu.transition={};try{t()}finally{uu.transition=e}};ke.unstable_act=Rw;ke.useCallback=function(t,e){return fn.current.useCallback(t,e)};ke.useContext=function(t){return fn.current.useContext(t)};ke.useDebugValue=function(){};ke.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};ke.useEffect=function(t,e){return fn.current.useEffect(t,e)};ke.useId=function(){return fn.current.useId()};ke.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};ke.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};ke.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};ke.useMemo=function(t,e){return fn.current.useMemo(t,e)};ke.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};ke.useRef=function(t){return fn.current.useRef(t)};ke.useState=function(t){return fn.current.useState(t)};ke.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};ke.useTransition=function(){return fn.current.useTransition()};ke.version="18.3.1";Ew.exports=ke;var M=Ew.exports;const be=ww(M),Z2=V2({__proto__:null,default:be},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eP=M,tP=Symbol.for("react.element"),nP=Symbol.for("react.fragment"),rP=Object.prototype.hasOwnProperty,iP=eP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sP={key:!0,ref:!0,__self:!0,__source:!0};function Dw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rP.call(e,r)&&!sP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tP,type:t,key:s,ref:o,props:i,_owner:iP.current}}Ud.Fragment=nP;Ud.jsx=Dw;Ud.jsxs=Dw;_w.exports=Ud;var C=_w.exports,Nw={exports:{}},Mn={},Mw={exports:{}},Ow={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,W){var K=V.length;V.push(W);e:for(;0<K;){var oe=K-1>>>1,re=V[oe];if(0<i(re,W))V[oe]=W,V[K]=re,K=oe;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var W=V[0],K=V.pop();if(K!==W){V[0]=K;e:for(var oe=0,re=V.length,le=re>>>1;oe<le;){var Le=2*(oe+1)-1,Re=V[Le],se=Le+1,De=V[se];if(0>i(Re,K))se<re&&0>i(De,Re)?(V[oe]=De,V[se]=K,oe=se):(V[oe]=Re,V[Le]=K,oe=Le);else if(se<re&&0>i(De,K))V[oe]=De,V[se]=K,oe=se;else break e}}return W}function i(V,W){var K=V.sortIndex-W.sortIndex;return K!==0?K:V.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,p=3,h=!1,g=!1,m=!1,v=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(V){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=V)r(c),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(c)}}function R(V){if(m=!1,_(V),!g)if(n(l)!==null)g=!0,J(E);else{var W=n(c);W!==null&&F(R,W.startTime-V)}}function E(V,W){g=!1,m&&(m=!1,x(y),y=-1),h=!0;var K=p;try{for(_(W),f=n(l);f!==null&&(!(f.expirationTime>W)||V&&!I());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,p=f.priorityLevel;var re=oe(f.expirationTime<=W);W=t.unstable_now(),typeof re=="function"?f.callback=re:f===n(l)&&r(l),_(W)}else r(l);f=n(l)}if(f!==null)var le=!0;else{var Le=n(c);Le!==null&&F(R,Le.startTime-W),le=!1}return le}finally{f=null,p=K,h=!1}}var A=!1,T=null,y=-1,S=5,k=-1;function I(){return!(t.unstable_now()-k<S)}function D(){if(T!==null){var V=t.unstable_now();k=V;var W=!0;try{W=T(!0,V)}finally{W?N():(A=!1,T=null)}}else A=!1}var N;if(typeof b=="function")N=function(){b(D)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,z=B.port2;B.port1.onmessage=D,N=function(){z.postMessage(null)}}else N=function(){v(D,0)};function J(V){T=V,A||(A=!0,N())}function F(V,W){y=v(function(){V(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,J(E))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(p){case 1:case 2:case 3:var W=3;break;default:W=p}var K=p;p=W;try{return V()}finally{p=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,W){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var K=p;p=V;try{return W()}finally{p=K}},t.unstable_scheduleCallback=function(V,W,K){var oe=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?oe+K:oe):K=oe,V){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=K+re,V={id:u++,callback:W,priorityLevel:V,startTime:K,expirationTime:re,sortIndex:-1},K>oe?(V.sortIndex=K,e(c,V),n(l)===null&&V===n(c)&&(m?(x(y),y=-1):m=!0,F(R,K-oe))):(V.sortIndex=re,e(l,V),g||h||(g=!0,J(E))),V},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(V){var W=p;return function(){var K=p;p=W;try{return V.apply(this,arguments)}finally{p=K}}}})(Ow);Mw.exports=Ow;var oP=Mw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aP=M,Dn=oP;function q(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lw=new Set,dl={};function Rs(t,e){No(t,e),No(t+"Capture",e)}function No(t,e){for(dl[t]=e,t=0;t<e.length;t++)Lw.add(e[t])}var qr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ip=Object.prototype.hasOwnProperty,lP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dy={},hy={};function cP(t){return ip.call(hy,t)?!0:ip.call(dy,t)?!1:lP.test(t)?hy[t]=!0:(dy[t]=!0,!1)}function uP(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function dP(t,e,n,r){if(e===null||typeof e>"u"||uP(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function pn(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new pn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new pn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new pn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new pn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new pn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new pn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new pn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new pn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new pn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Jm=/[\-:]([a-z])/g;function Zm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Jm,Zm);zt[e]=new pn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Jm,Zm);zt[e]=new pn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Jm,Zm);zt[e]=new pn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new pn(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new pn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new pn(t,1,!1,t.toLowerCase(),null,!0,!0)});function eg(t,e,n,r){var i=zt.hasOwnProperty(e)?zt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dP(e,n,i,r)&&(n=null),r||i===null?cP(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ei=aP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nc=Symbol.for("react.element"),ro=Symbol.for("react.portal"),io=Symbol.for("react.fragment"),tg=Symbol.for("react.strict_mode"),sp=Symbol.for("react.profiler"),Vw=Symbol.for("react.provider"),jw=Symbol.for("react.context"),ng=Symbol.for("react.forward_ref"),op=Symbol.for("react.suspense"),ap=Symbol.for("react.suspense_list"),rg=Symbol.for("react.memo"),ui=Symbol.for("react.lazy"),Bw=Symbol.for("react.offscreen"),fy=Symbol.iterator;function _a(t){return t===null||typeof t!="object"?null:(t=fy&&t[fy]||t["@@iterator"],typeof t=="function"?t:null)}var lt=Object.assign,tf;function Ra(t){if(tf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tf=e&&e[1]||""}return`
`+tf+t}var nf=!1;function rf(t,e){if(!t||nf)return"";nf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{nf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ra(t):""}function hP(t){switch(t.tag){case 5:return Ra(t.type);case 16:return Ra("Lazy");case 13:return Ra("Suspense");case 19:return Ra("SuspenseList");case 0:case 2:case 15:return t=rf(t.type,!1),t;case 11:return t=rf(t.type.render,!1),t;case 1:return t=rf(t.type,!0),t;default:return""}}function lp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case io:return"Fragment";case ro:return"Portal";case sp:return"Profiler";case tg:return"StrictMode";case op:return"Suspense";case ap:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jw:return(t.displayName||"Context")+".Consumer";case Vw:return(t._context.displayName||"Context")+".Provider";case ng:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rg:return e=t.displayName||null,e!==null?e:lp(t.type)||"Memo";case ui:e=t._payload,t=t._init;try{return lp(t(e))}catch{}}return null}function fP(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lp(e);case 8:return e===tg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Li(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function pP(t){var e=Fw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Mc(t){t._valueTracker||(t._valueTracker=pP(t))}function Uw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Fw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cp(t,e){var n=e.checked;return lt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function py(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Li(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zw(t,e){e=e.checked,e!=null&&eg(t,"checked",e,!1)}function up(t,e){zw(t,e);var n=Li(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?dp(t,e.type,n):e.hasOwnProperty("defaultValue")&&dp(t,e.type,Li(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function my(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function dp(t,e,n){(e!=="number"||Vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Da=Array.isArray;function _o(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Li(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function hp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(q(91));return lt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gy(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(q(92));if(Da(n)){if(1<n.length)throw Error(q(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Li(n)}}function $w(t,e){var n=Li(e.value),r=Li(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function vy(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ww(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ww(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Oc,Hw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Oc=Oc||document.createElement("div"),Oc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Oc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function hl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mP=["Webkit","ms","Moz","O"];Object.keys(Ha).forEach(function(t){mP.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ha[e]=Ha[t]})});function qw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ha.hasOwnProperty(t)&&Ha[t]?(""+e).trim():e+"px"}function Kw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var gP=lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pp(t,e){if(e){if(gP[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(q(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(q(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(q(61))}if(e.style!=null&&typeof e.style!="object")throw Error(q(62))}}function mp(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var gp=null;function ig(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var vp=null,Eo=null,To=null;function yy(t){if(t=Gl(t)){if(typeof vp!="function")throw Error(q(280));var e=t.stateNode;e&&(e=qd(e),vp(t.stateNode,t.type,e))}}function Gw(t){Eo?To?To.push(t):To=[t]:Eo=t}function Qw(){if(Eo){var t=Eo,e=To;if(To=Eo=null,yy(t),e)for(t=0;t<e.length;t++)yy(e[t])}}function Xw(t,e){return t(e)}function Yw(){}var sf=!1;function Jw(t,e,n){if(sf)return t(e,n);sf=!0;try{return Xw(t,e,n)}finally{sf=!1,(Eo!==null||To!==null)&&(Yw(),Qw())}}function fl(t,e){var n=t.stateNode;if(n===null)return null;var r=qd(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(q(231,e,typeof n));return n}var yp=!1;if(qr)try{var Ea={};Object.defineProperty(Ea,"passive",{get:function(){yp=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{yp=!1}function vP(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var qa=!1,ju=null,Bu=!1,xp=null,yP={onError:function(t){qa=!0,ju=t}};function xP(t,e,n,r,i,s,o,a,l){qa=!1,ju=null,vP.apply(yP,arguments)}function bP(t,e,n,r,i,s,o,a,l){if(xP.apply(this,arguments),qa){if(qa){var c=ju;qa=!1,ju=null}else throw Error(q(198));Bu||(Bu=!0,xp=c)}}function Ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xy(t){if(Ds(t)!==t)throw Error(q(188))}function wP(t){var e=t.alternate;if(!e){if(e=Ds(t),e===null)throw Error(q(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return xy(i),t;if(s===r)return xy(i),e;s=s.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?t:e}function e_(t){return t=wP(t),t!==null?t_(t):null}function t_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=t_(t);if(e!==null)return e;t=t.sibling}return null}var n_=Dn.unstable_scheduleCallback,by=Dn.unstable_cancelCallback,_P=Dn.unstable_shouldYield,EP=Dn.unstable_requestPaint,gt=Dn.unstable_now,TP=Dn.unstable_getCurrentPriorityLevel,sg=Dn.unstable_ImmediatePriority,r_=Dn.unstable_UserBlockingPriority,Fu=Dn.unstable_NormalPriority,SP=Dn.unstable_LowPriority,i_=Dn.unstable_IdlePriority,zd=null,vr=null;function kP(t){if(vr&&typeof vr.onCommitFiberRoot=="function")try{vr.onCommitFiberRoot(zd,t,void 0,(t.current.flags&128)===128)}catch{}}var nr=Math.clz32?Math.clz32:IP,CP=Math.log,PP=Math.LN2;function IP(t){return t>>>=0,t===0?32:31-(CP(t)/PP|0)|0}var Lc=64,Vc=4194304;function Na(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Uu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Na(a):(s&=o,s!==0&&(r=Na(s)))}else o=n&~i,o!==0?r=Na(o):s!==0&&(r=Na(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nr(e),i=1<<n,r|=t[n],e&=~i;return r}function AP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function RP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-nr(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=AP(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function bp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function s_(){var t=Lc;return Lc<<=1,!(Lc&4194240)&&(Lc=64),t}function of(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ql(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nr(e),t[e]=n}function DP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-nr(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function og(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nr(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var $e=0;function o_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var a_,ag,l_,c_,u_,wp=!1,jc=[],Ei=null,Ti=null,Si=null,pl=new Map,ml=new Map,fi=[],NP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function wy(t,e){switch(t){case"focusin":case"focusout":Ei=null;break;case"dragenter":case"dragleave":Ti=null;break;case"mouseover":case"mouseout":Si=null;break;case"pointerover":case"pointerout":pl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(e.pointerId)}}function Ta(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Gl(e),e!==null&&ag(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function MP(t,e,n,r,i){switch(e){case"focusin":return Ei=Ta(Ei,t,e,n,r,i),!0;case"dragenter":return Ti=Ta(Ti,t,e,n,r,i),!0;case"mouseover":return Si=Ta(Si,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return pl.set(s,Ta(pl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ml.set(s,Ta(ml.get(s)||null,t,e,n,r,i)),!0}return!1}function d_(t){var e=fs(t.target);if(e!==null){var n=Ds(e);if(n!==null){if(e=n.tag,e===13){if(e=Zw(n),e!==null){t.blockedOn=e,u_(t.priority,function(){l_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function du(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=_p(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);gp=r,n.target.dispatchEvent(r),gp=null}else return e=Gl(n),e!==null&&ag(e),t.blockedOn=n,!1;e.shift()}return!0}function _y(t,e,n){du(t)&&n.delete(e)}function OP(){wp=!1,Ei!==null&&du(Ei)&&(Ei=null),Ti!==null&&du(Ti)&&(Ti=null),Si!==null&&du(Si)&&(Si=null),pl.forEach(_y),ml.forEach(_y)}function Sa(t,e){t.blockedOn===e&&(t.blockedOn=null,wp||(wp=!0,Dn.unstable_scheduleCallback(Dn.unstable_NormalPriority,OP)))}function gl(t){function e(i){return Sa(i,t)}if(0<jc.length){Sa(jc[0],t);for(var n=1;n<jc.length;n++){var r=jc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Ei!==null&&Sa(Ei,t),Ti!==null&&Sa(Ti,t),Si!==null&&Sa(Si,t),pl.forEach(e),ml.forEach(e),n=0;n<fi.length;n++)r=fi[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fi.length&&(n=fi[0],n.blockedOn===null);)d_(n),n.blockedOn===null&&fi.shift()}var So=ei.ReactCurrentBatchConfig,zu=!0;function LP(t,e,n,r){var i=$e,s=So.transition;So.transition=null;try{$e=1,lg(t,e,n,r)}finally{$e=i,So.transition=s}}function VP(t,e,n,r){var i=$e,s=So.transition;So.transition=null;try{$e=4,lg(t,e,n,r)}finally{$e=i,So.transition=s}}function lg(t,e,n,r){if(zu){var i=_p(t,e,n,r);if(i===null)gf(t,e,r,$u,n),wy(t,r);else if(MP(i,t,e,n,r))r.stopPropagation();else if(wy(t,r),e&4&&-1<NP.indexOf(t)){for(;i!==null;){var s=Gl(i);if(s!==null&&a_(s),s=_p(t,e,n,r),s===null&&gf(t,e,r,$u,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else gf(t,e,r,null,n)}}var $u=null;function _p(t,e,n,r){if($u=null,t=ig(r),t=fs(t),t!==null)if(e=Ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $u=t,null}function h_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TP()){case sg:return 1;case r_:return 4;case Fu:case SP:return 16;case i_:return 536870912;default:return 16}default:return 16}}var xi=null,cg=null,hu=null;function f_(){if(hu)return hu;var t,e=cg,n=e.length,r,i="value"in xi?xi.value:xi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return hu=i.slice(t,1<r?1-r:void 0)}function fu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bc(){return!0}function Ey(){return!1}function On(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Bc:Ey,this.isPropagationStopped=Ey,this}return lt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bc)},persist:function(){},isPersistent:Bc}),e}var Jo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ug=On(Jo),Kl=lt({},Jo,{view:0,detail:0}),jP=On(Kl),af,lf,ka,$d=lt({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ka&&(ka&&t.type==="mousemove"?(af=t.screenX-ka.screenX,lf=t.screenY-ka.screenY):lf=af=0,ka=t),af)},movementY:function(t){return"movementY"in t?t.movementY:lf}}),Ty=On($d),BP=lt({},$d,{dataTransfer:0}),FP=On(BP),UP=lt({},Kl,{relatedTarget:0}),cf=On(UP),zP=lt({},Jo,{animationName:0,elapsedTime:0,pseudoElement:0}),$P=On(zP),WP=lt({},Jo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HP=On(WP),qP=lt({},Jo,{data:0}),Sy=On(qP),KP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QP[t])?!!e[t]:!1}function dg(){return XP}var YP=lt({},Kl,{key:function(t){if(t.key){var e=KP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dg,charCode:function(t){return t.type==="keypress"?fu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),JP=On(YP),ZP=lt({},$d,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ky=On(ZP),eI=lt({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dg}),tI=On(eI),nI=lt({},Jo,{propertyName:0,elapsedTime:0,pseudoElement:0}),rI=On(nI),iI=lt({},$d,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),sI=On(iI),oI=[9,13,27,32],hg=qr&&"CompositionEvent"in window,Ka=null;qr&&"documentMode"in document&&(Ka=document.documentMode);var aI=qr&&"TextEvent"in window&&!Ka,p_=qr&&(!hg||Ka&&8<Ka&&11>=Ka),Cy=" ",Py=!1;function m_(t,e){switch(t){case"keyup":return oI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function g_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var so=!1;function lI(t,e){switch(t){case"compositionend":return g_(e);case"keypress":return e.which!==32?null:(Py=!0,Cy);case"textInput":return t=e.data,t===Cy&&Py?null:t;default:return null}}function cI(t,e){if(so)return t==="compositionend"||!hg&&m_(t,e)?(t=f_(),hu=cg=xi=null,so=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return p_&&e.locale!=="ko"?null:e.data;default:return null}}var uI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Iy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!uI[t.type]:e==="textarea"}function v_(t,e,n,r){Gw(r),e=Wu(e,"onChange"),0<e.length&&(n=new ug("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ga=null,vl=null;function dI(t){P_(t,0)}function Wd(t){var e=lo(t);if(Uw(e))return t}function hI(t,e){if(t==="change")return e}var y_=!1;if(qr){var uf;if(qr){var df="oninput"in document;if(!df){var Ay=document.createElement("div");Ay.setAttribute("oninput","return;"),df=typeof Ay.oninput=="function"}uf=df}else uf=!1;y_=uf&&(!document.documentMode||9<document.documentMode)}function Ry(){Ga&&(Ga.detachEvent("onpropertychange",x_),vl=Ga=null)}function x_(t){if(t.propertyName==="value"&&Wd(vl)){var e=[];v_(e,vl,t,ig(t)),Jw(dI,e)}}function fI(t,e,n){t==="focusin"?(Ry(),Ga=e,vl=n,Ga.attachEvent("onpropertychange",x_)):t==="focusout"&&Ry()}function pI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wd(vl)}function mI(t,e){if(t==="click")return Wd(e)}function gI(t,e){if(t==="input"||t==="change")return Wd(e)}function vI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sr=typeof Object.is=="function"?Object.is:vI;function yl(t,e){if(sr(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ip.call(e,i)||!sr(t[i],e[i]))return!1}return!0}function Dy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ny(t,e){var n=Dy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dy(n)}}function b_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function w_(){for(var t=window,e=Vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vu(t.document)}return e}function fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function yI(t){var e=w_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b_(n.ownerDocument.documentElement,n)){if(r!==null&&fg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ny(n,s);var o=Ny(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xI=qr&&"documentMode"in document&&11>=document.documentMode,oo=null,Ep=null,Qa=null,Tp=!1;function My(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tp||oo==null||oo!==Vu(r)||(r=oo,"selectionStart"in r&&fg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qa&&yl(Qa,r)||(Qa=r,r=Wu(Ep,"onSelect"),0<r.length&&(e=new ug("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=oo)))}function Fc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ao={animationend:Fc("Animation","AnimationEnd"),animationiteration:Fc("Animation","AnimationIteration"),animationstart:Fc("Animation","AnimationStart"),transitionend:Fc("Transition","TransitionEnd")},hf={},__={};qr&&(__=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function Hd(t){if(hf[t])return hf[t];if(!ao[t])return t;var e=ao[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in __)return hf[t]=e[n];return t}var E_=Hd("animationend"),T_=Hd("animationiteration"),S_=Hd("animationstart"),k_=Hd("transitionend"),C_=new Map,Oy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){C_.set(t,e),Rs(e,[t])}for(var ff=0;ff<Oy.length;ff++){var pf=Oy[ff],bI=pf.toLowerCase(),wI=pf[0].toUpperCase()+pf.slice(1);Ki(bI,"on"+wI)}Ki(E_,"onAnimationEnd");Ki(T_,"onAnimationIteration");Ki(S_,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(k_,"onTransitionEnd");No("onMouseEnter",["mouseout","mouseover"]);No("onMouseLeave",["mouseout","mouseover"]);No("onPointerEnter",["pointerout","pointerover"]);No("onPointerLeave",["pointerout","pointerover"]);Rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_I=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function Ly(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bP(r,e,void 0,t),t.currentTarget=null}function P_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Ly(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Ly(i,a,c),s=l}}}if(Bu)throw t=xp,Bu=!1,xp=null,t}function Je(t,e){var n=e[Ip];n===void 0&&(n=e[Ip]=new Set);var r=t+"__bubble";n.has(r)||(I_(e,t,2,!1),n.add(r))}function mf(t,e,n){var r=0;e&&(r|=4),I_(n,t,r,e)}var Uc="_reactListening"+Math.random().toString(36).slice(2);function xl(t){if(!t[Uc]){t[Uc]=!0,Lw.forEach(function(n){n!=="selectionchange"&&(_I.has(n)||mf(n,!1,t),mf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Uc]||(e[Uc]=!0,mf("selectionchange",!1,e))}}function I_(t,e,n,r){switch(h_(e)){case 1:var i=LP;break;case 4:i=VP;break;default:i=lg}n=i.bind(null,e,n,t),i=void 0,!yp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function gf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=fs(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Jw(function(){var c=s,u=ig(n),f=[];e:{var p=C_.get(t);if(p!==void 0){var h=ug,g=t;switch(t){case"keypress":if(fu(n)===0)break e;case"keydown":case"keyup":h=JP;break;case"focusin":g="focus",h=cf;break;case"focusout":g="blur",h=cf;break;case"beforeblur":case"afterblur":h=cf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Ty;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=FP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=tI;break;case E_:case T_:case S_:h=$P;break;case k_:h=rI;break;case"scroll":h=jP;break;case"wheel":h=sI;break;case"copy":case"cut":case"paste":h=HP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=ky}var m=(e&4)!==0,v=!m&&t==="scroll",x=m?p!==null?p+"Capture":null:p;m=[];for(var b=c,_;b!==null;){_=b;var R=_.stateNode;if(_.tag===5&&R!==null&&(_=R,x!==null&&(R=fl(b,x),R!=null&&m.push(bl(b,R,_)))),v)break;b=b.return}0<m.length&&(p=new h(p,g,null,n,u),f.push({event:p,listeners:m}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",h=t==="mouseout"||t==="pointerout",p&&n!==gp&&(g=n.relatedTarget||n.fromElement)&&(fs(g)||g[Kr]))break e;if((h||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,h?(g=n.relatedTarget||n.toElement,h=c,g=g?fs(g):null,g!==null&&(v=Ds(g),g!==v||g.tag!==5&&g.tag!==6)&&(g=null)):(h=null,g=c),h!==g)){if(m=Ty,R="onMouseLeave",x="onMouseEnter",b="mouse",(t==="pointerout"||t==="pointerover")&&(m=ky,R="onPointerLeave",x="onPointerEnter",b="pointer"),v=h==null?p:lo(h),_=g==null?p:lo(g),p=new m(R,b+"leave",h,n,u),p.target=v,p.relatedTarget=_,R=null,fs(u)===c&&(m=new m(x,b+"enter",g,n,u),m.target=_,m.relatedTarget=v,R=m),v=R,h&&g)t:{for(m=h,x=g,b=0,_=m;_;_=Ks(_))b++;for(_=0,R=x;R;R=Ks(R))_++;for(;0<b-_;)m=Ks(m),b--;for(;0<_-b;)x=Ks(x),_--;for(;b--;){if(m===x||x!==null&&m===x.alternate)break t;m=Ks(m),x=Ks(x)}m=null}else m=null;h!==null&&Vy(f,p,h,m,!1),g!==null&&v!==null&&Vy(f,v,g,m,!0)}}e:{if(p=c?lo(c):window,h=p.nodeName&&p.nodeName.toLowerCase(),h==="select"||h==="input"&&p.type==="file")var E=hI;else if(Iy(p))if(y_)E=gI;else{E=pI;var A=fI}else(h=p.nodeName)&&h.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=mI);if(E&&(E=E(t,c))){v_(f,E,n,u);break e}A&&A(t,p,c),t==="focusout"&&(A=p._wrapperState)&&A.controlled&&p.type==="number"&&dp(p,"number",p.value)}switch(A=c?lo(c):window,t){case"focusin":(Iy(A)||A.contentEditable==="true")&&(oo=A,Ep=c,Qa=null);break;case"focusout":Qa=Ep=oo=null;break;case"mousedown":Tp=!0;break;case"contextmenu":case"mouseup":case"dragend":Tp=!1,My(f,n,u);break;case"selectionchange":if(xI)break;case"keydown":case"keyup":My(f,n,u)}var T;if(hg)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else so?m_(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(p_&&n.locale!=="ko"&&(so||y!=="onCompositionStart"?y==="onCompositionEnd"&&so&&(T=f_()):(xi=u,cg="value"in xi?xi.value:xi.textContent,so=!0)),A=Wu(c,y),0<A.length&&(y=new Sy(y,t,null,n,u),f.push({event:y,listeners:A}),T?y.data=T:(T=g_(n),T!==null&&(y.data=T)))),(T=aI?lI(t,n):cI(t,n))&&(c=Wu(c,"onBeforeInput"),0<c.length&&(u=new Sy("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=T))}P_(f,e)})}function bl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fl(t,n),s!=null&&r.unshift(bl(t,s,i)),s=fl(t,e),s!=null&&r.push(bl(t,s,i))),t=t.return}return r}function Ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vy(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=fl(n,s),l!=null&&o.unshift(bl(n,l,a))):i||(l=fl(n,s),l!=null&&o.push(bl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var EI=/\r\n?/g,TI=/\u0000|\uFFFD/g;function jy(t){return(typeof t=="string"?t:""+t).replace(EI,`
`).replace(TI,"")}function zc(t,e,n){if(e=jy(e),jy(t)!==e&&n)throw Error(q(425))}function Hu(){}var Sp=null,kp=null;function Cp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pp=typeof setTimeout=="function"?setTimeout:void 0,SI=typeof clearTimeout=="function"?clearTimeout:void 0,By=typeof Promise=="function"?Promise:void 0,kI=typeof queueMicrotask=="function"?queueMicrotask:typeof By<"u"?function(t){return By.resolve(null).then(t).catch(CI)}:Pp;function CI(t){setTimeout(function(){throw t})}function vf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),gl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);gl(e)}function ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zo=Math.random().toString(36).slice(2),pr="__reactFiber$"+Zo,wl="__reactProps$"+Zo,Kr="__reactContainer$"+Zo,Ip="__reactEvents$"+Zo,PI="__reactListeners$"+Zo,II="__reactHandles$"+Zo;function fs(t){var e=t[pr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Kr]||n[pr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fy(t);t!==null;){if(n=t[pr])return n;t=Fy(t)}return e}t=n,n=t.parentNode}return null}function Gl(t){return t=t[pr]||t[Kr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function lo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(q(33))}function qd(t){return t[wl]||null}var Ap=[],co=-1;function Gi(t){return{current:t}}function Ze(t){0>co||(t.current=Ap[co],Ap[co]=null,co--)}function Qe(t,e){co++,Ap[co]=t.current,t.current=e}var Vi={},sn=Gi(Vi),bn=Gi(!1),_s=Vi;function Mo(t,e){var n=t.type.contextTypes;if(!n)return Vi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function wn(t){return t=t.childContextTypes,t!=null}function qu(){Ze(bn),Ze(sn)}function Uy(t,e,n){if(sn.current!==Vi)throw Error(q(168));Qe(sn,e),Qe(bn,n)}function A_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(q(108,fP(t)||"Unknown",i));return lt({},n,r)}function Ku(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vi,_s=sn.current,Qe(sn,t),Qe(bn,bn.current),!0}function zy(t,e,n){var r=t.stateNode;if(!r)throw Error(q(169));n?(t=A_(t,e,_s),r.__reactInternalMemoizedMergedChildContext=t,Ze(bn),Ze(sn),Qe(sn,t)):Ze(bn),Qe(bn,n)}var Dr=null,Kd=!1,yf=!1;function R_(t){Dr===null?Dr=[t]:Dr.push(t)}function AI(t){Kd=!0,R_(t)}function Qi(){if(!yf&&Dr!==null){yf=!0;var t=0,e=$e;try{var n=Dr;for($e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Dr=null,Kd=!1}catch(i){throw Dr!==null&&(Dr=Dr.slice(t+1)),n_(sg,Qi),i}finally{$e=e,yf=!1}}return null}var uo=[],ho=0,Gu=null,Qu=0,Un=[],zn=0,Es=null,Nr=1,Mr="";function as(t,e){uo[ho++]=Qu,uo[ho++]=Gu,Gu=t,Qu=e}function D_(t,e,n){Un[zn++]=Nr,Un[zn++]=Mr,Un[zn++]=Es,Es=t;var r=Nr;t=Mr;var i=32-nr(r)-1;r&=~(1<<i),n+=1;var s=32-nr(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Nr=1<<32-nr(e)+i|n<<i|r,Mr=s+t}else Nr=1<<s|n<<i|r,Mr=t}function pg(t){t.return!==null&&(as(t,1),D_(t,1,0))}function mg(t){for(;t===Gu;)Gu=uo[--ho],uo[ho]=null,Qu=uo[--ho],uo[ho]=null;for(;t===Es;)Es=Un[--zn],Un[zn]=null,Mr=Un[--zn],Un[zn]=null,Nr=Un[--zn],Un[zn]=null}var Rn=null,In=null,tt=!1,Zn=null;function N_(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $y(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,In=ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Es!==null?{id:Nr,overflow:Mr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,In=null,!0):!1;default:return!1}}function Rp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dp(t){if(tt){var e=In;if(e){var n=e;if(!$y(t,e)){if(Rp(t))throw Error(q(418));e=ki(n.nextSibling);var r=Rn;e&&$y(t,e)?N_(r,n):(t.flags=t.flags&-4097|2,tt=!1,Rn=t)}}else{if(Rp(t))throw Error(q(418));t.flags=t.flags&-4097|2,tt=!1,Rn=t}}}function Wy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function $c(t){if(t!==Rn)return!1;if(!tt)return Wy(t),tt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Cp(t.type,t.memoizedProps)),e&&(e=In)){if(Rp(t))throw M_(),Error(q(418));for(;e;)N_(t,e),e=ki(e.nextSibling)}if(Wy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(q(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){In=ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}In=null}}else In=Rn?ki(t.stateNode.nextSibling):null;return!0}function M_(){for(var t=In;t;)t=ki(t.nextSibling)}function Oo(){In=Rn=null,tt=!1}function gg(t){Zn===null?Zn=[t]:Zn.push(t)}var RI=ei.ReactCurrentBatchConfig;function Ca(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,t))}return t}function Wc(t,e){throw t=Object.prototype.toString.call(e),Error(q(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hy(t){var e=t._init;return e(t._payload)}function O_(t){function e(x,b){if(t){var _=x.deletions;_===null?(x.deletions=[b],x.flags|=16):_.push(b)}}function n(x,b){if(!t)return null;for(;b!==null;)e(x,b),b=b.sibling;return null}function r(x,b){for(x=new Map;b!==null;)b.key!==null?x.set(b.key,b):x.set(b.index,b),b=b.sibling;return x}function i(x,b){return x=Ai(x,b),x.index=0,x.sibling=null,x}function s(x,b,_){return x.index=_,t?(_=x.alternate,_!==null?(_=_.index,_<b?(x.flags|=2,b):_):(x.flags|=2,b)):(x.flags|=1048576,b)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function a(x,b,_,R){return b===null||b.tag!==6?(b=Sf(_,x.mode,R),b.return=x,b):(b=i(b,_),b.return=x,b)}function l(x,b,_,R){var E=_.type;return E===io?u(x,b,_.props.children,R,_.key):b!==null&&(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ui&&Hy(E)===b.type)?(R=i(b,_.props),R.ref=Ca(x,b,_),R.return=x,R):(R=bu(_.type,_.key,_.props,null,x.mode,R),R.ref=Ca(x,b,_),R.return=x,R)}function c(x,b,_,R){return b===null||b.tag!==4||b.stateNode.containerInfo!==_.containerInfo||b.stateNode.implementation!==_.implementation?(b=kf(_,x.mode,R),b.return=x,b):(b=i(b,_.children||[]),b.return=x,b)}function u(x,b,_,R,E){return b===null||b.tag!==7?(b=xs(_,x.mode,R,E),b.return=x,b):(b=i(b,_),b.return=x,b)}function f(x,b,_){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Sf(""+b,x.mode,_),b.return=x,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Nc:return _=bu(b.type,b.key,b.props,null,x.mode,_),_.ref=Ca(x,null,b),_.return=x,_;case ro:return b=kf(b,x.mode,_),b.return=x,b;case ui:var R=b._init;return f(x,R(b._payload),_)}if(Da(b)||_a(b))return b=xs(b,x.mode,_,null),b.return=x,b;Wc(x,b)}return null}function p(x,b,_,R){var E=b!==null?b.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return E!==null?null:a(x,b,""+_,R);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Nc:return _.key===E?l(x,b,_,R):null;case ro:return _.key===E?c(x,b,_,R):null;case ui:return E=_._init,p(x,b,E(_._payload),R)}if(Da(_)||_a(_))return E!==null?null:u(x,b,_,R,null);Wc(x,_)}return null}function h(x,b,_,R,E){if(typeof R=="string"&&R!==""||typeof R=="number")return x=x.get(_)||null,a(b,x,""+R,E);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Nc:return x=x.get(R.key===null?_:R.key)||null,l(b,x,R,E);case ro:return x=x.get(R.key===null?_:R.key)||null,c(b,x,R,E);case ui:var A=R._init;return h(x,b,_,A(R._payload),E)}if(Da(R)||_a(R))return x=x.get(_)||null,u(b,x,R,E,null);Wc(b,R)}return null}function g(x,b,_,R){for(var E=null,A=null,T=b,y=b=0,S=null;T!==null&&y<_.length;y++){T.index>y?(S=T,T=null):S=T.sibling;var k=p(x,T,_[y],R);if(k===null){T===null&&(T=S);break}t&&T&&k.alternate===null&&e(x,T),b=s(k,b,y),A===null?E=k:A.sibling=k,A=k,T=S}if(y===_.length)return n(x,T),tt&&as(x,y),E;if(T===null){for(;y<_.length;y++)T=f(x,_[y],R),T!==null&&(b=s(T,b,y),A===null?E=T:A.sibling=T,A=T);return tt&&as(x,y),E}for(T=r(x,T);y<_.length;y++)S=h(T,x,y,_[y],R),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?y:S.key),b=s(S,b,y),A===null?E=S:A.sibling=S,A=S);return t&&T.forEach(function(I){return e(x,I)}),tt&&as(x,y),E}function m(x,b,_,R){var E=_a(_);if(typeof E!="function")throw Error(q(150));if(_=E.call(_),_==null)throw Error(q(151));for(var A=E=null,T=b,y=b=0,S=null,k=_.next();T!==null&&!k.done;y++,k=_.next()){T.index>y?(S=T,T=null):S=T.sibling;var I=p(x,T,k.value,R);if(I===null){T===null&&(T=S);break}t&&T&&I.alternate===null&&e(x,T),b=s(I,b,y),A===null?E=I:A.sibling=I,A=I,T=S}if(k.done)return n(x,T),tt&&as(x,y),E;if(T===null){for(;!k.done;y++,k=_.next())k=f(x,k.value,R),k!==null&&(b=s(k,b,y),A===null?E=k:A.sibling=k,A=k);return tt&&as(x,y),E}for(T=r(x,T);!k.done;y++,k=_.next())k=h(T,x,y,k.value,R),k!==null&&(t&&k.alternate!==null&&T.delete(k.key===null?y:k.key),b=s(k,b,y),A===null?E=k:A.sibling=k,A=k);return t&&T.forEach(function(D){return e(x,D)}),tt&&as(x,y),E}function v(x,b,_,R){if(typeof _=="object"&&_!==null&&_.type===io&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Nc:e:{for(var E=_.key,A=b;A!==null;){if(A.key===E){if(E=_.type,E===io){if(A.tag===7){n(x,A.sibling),b=i(A,_.props.children),b.return=x,x=b;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===ui&&Hy(E)===A.type){n(x,A.sibling),b=i(A,_.props),b.ref=Ca(x,A,_),b.return=x,x=b;break e}n(x,A);break}else e(x,A);A=A.sibling}_.type===io?(b=xs(_.props.children,x.mode,R,_.key),b.return=x,x=b):(R=bu(_.type,_.key,_.props,null,x.mode,R),R.ref=Ca(x,b,_),R.return=x,x=R)}return o(x);case ro:e:{for(A=_.key;b!==null;){if(b.key===A)if(b.tag===4&&b.stateNode.containerInfo===_.containerInfo&&b.stateNode.implementation===_.implementation){n(x,b.sibling),b=i(b,_.children||[]),b.return=x,x=b;break e}else{n(x,b);break}else e(x,b);b=b.sibling}b=kf(_,x.mode,R),b.return=x,x=b}return o(x);case ui:return A=_._init,v(x,b,A(_._payload),R)}if(Da(_))return g(x,b,_,R);if(_a(_))return m(x,b,_,R);Wc(x,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,b!==null&&b.tag===6?(n(x,b.sibling),b=i(b,_),b.return=x,x=b):(n(x,b),b=Sf(_,x.mode,R),b.return=x,x=b),o(x)):n(x,b)}return v}var Lo=O_(!0),L_=O_(!1),Xu=Gi(null),Yu=null,fo=null,vg=null;function yg(){vg=fo=Yu=null}function xg(t){var e=Xu.current;Ze(Xu),t._currentValue=e}function Np(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ko(t,e){Yu=t,vg=fo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xn=!0),t.firstContext=null)}function Hn(t){var e=t._currentValue;if(vg!==t)if(t={context:t,memoizedValue:e,next:null},fo===null){if(Yu===null)throw Error(q(308));fo=t,Yu.dependencies={lanes:0,firstContext:t}}else fo=fo.next=t;return e}var ps=null;function bg(t){ps===null?ps=[t]:ps.push(t)}function V_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,bg(e)):(n.next=i.next,i.next=n),e.interleaved=n,Gr(t,r)}function Gr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var di=!1;function wg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Br(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ci(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,je&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Gr(t,n)}return i=r.interleaved,i===null?(e.next=e,bg(r)):(e.next=i.next,i.next=e),r.interleaved=e,Gr(t,n)}function pu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,og(t,n)}}function qy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ju(t,e,n,r){var i=t.updateQueue;di=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,u=c=l=null,a=s;do{var p=a.lane,h=a.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:h,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,m=a;switch(p=e,h=n,m.tag){case 1:if(g=m.payload,typeof g=="function"){f=g.call(h,f,p);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=m.payload,p=typeof g=="function"?g.call(h,f,p):g,p==null)break e;f=lt({},f,p);break e;case 2:di=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=i.effects,p===null?i.effects=[a]:p.push(a))}else h={eventTime:h,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=h,l=f):u=u.next=h,o|=p;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;p=a,a=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ss|=o,t.lanes=o,t.memoizedState=f}}function Ky(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var Ql={},yr=Gi(Ql),_l=Gi(Ql),El=Gi(Ql);function ms(t){if(t===Ql)throw Error(q(174));return t}function _g(t,e){switch(Qe(El,e),Qe(_l,t),Qe(yr,Ql),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fp(e,t)}Ze(yr),Qe(yr,e)}function Vo(){Ze(yr),Ze(_l),Ze(El)}function B_(t){ms(El.current);var e=ms(yr.current),n=fp(e,t.type);e!==n&&(Qe(_l,t),Qe(yr,n))}function Eg(t){_l.current===t&&(Ze(yr),Ze(_l))}var st=Gi(0);function Zu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xf=[];function Tg(){for(var t=0;t<xf.length;t++)xf[t]._workInProgressVersionPrimary=null;xf.length=0}var mu=ei.ReactCurrentDispatcher,bf=ei.ReactCurrentBatchConfig,Ts=0,at=null,wt=null,At=null,ed=!1,Xa=!1,Tl=0,DI=0;function Qt(){throw Error(q(321))}function Sg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sr(t[n],e[n]))return!1;return!0}function kg(t,e,n,r,i,s){if(Ts=s,at=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,mu.current=t===null||t.memoizedState===null?LI:VI,t=n(r,i),Xa){s=0;do{if(Xa=!1,Tl=0,25<=s)throw Error(q(301));s+=1,At=wt=null,e.updateQueue=null,mu.current=jI,t=n(r,i)}while(Xa)}if(mu.current=td,e=wt!==null&&wt.next!==null,Ts=0,At=wt=at=null,ed=!1,e)throw Error(q(300));return t}function Cg(){var t=Tl!==0;return Tl=0,t}function fr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?at.memoizedState=At=t:At=At.next=t,At}function qn(){if(wt===null){var t=at.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=At===null?at.memoizedState:At.next;if(e!==null)At=e,wt=t;else{if(t===null)throw Error(q(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},At===null?at.memoizedState=At=t:At=At.next=t}return At}function Sl(t,e){return typeof e=="function"?e(t):e}function wf(t){var e=qn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=wt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Ts&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,at.lanes|=u,Ss|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,sr(r,e.memoizedState)||(xn=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,at.lanes|=s,Ss|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _f(t){var e=qn(),n=e.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);sr(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function F_(){}function U_(t,e){var n=at,r=qn(),i=e(),s=!sr(r.memoizedState,i);if(s&&(r.memoizedState=i,xn=!0),r=r.queue,Pg(W_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||At!==null&&At.memoizedState.tag&1){if(n.flags|=2048,kl(9,$_.bind(null,n,r,i,e),void 0,null),Dt===null)throw Error(q(349));Ts&30||z_(n,e,i)}return i}function z_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $_(t,e,n,r){e.value=n,e.getSnapshot=r,H_(e)&&q_(t)}function W_(t,e,n){return n(function(){H_(e)&&q_(t)})}function H_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sr(t,n)}catch{return!0}}function q_(t){var e=Gr(t,1);e!==null&&rr(e,t,1,-1)}function Gy(t){var e=fr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Sl,lastRenderedState:t},e.queue=t,t=t.dispatch=OI.bind(null,at,t),[e.memoizedState,t]}function kl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=at.updateQueue,e===null?(e={lastEffect:null,stores:null},at.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function K_(){return qn().memoizedState}function gu(t,e,n,r){var i=fr();at.flags|=t,i.memoizedState=kl(1|e,n,void 0,r===void 0?null:r)}function Gd(t,e,n,r){var i=qn();r=r===void 0?null:r;var s=void 0;if(wt!==null){var o=wt.memoizedState;if(s=o.destroy,r!==null&&Sg(r,o.deps)){i.memoizedState=kl(e,n,s,r);return}}at.flags|=t,i.memoizedState=kl(1|e,n,s,r)}function Qy(t,e){return gu(8390656,8,t,e)}function Pg(t,e){return Gd(2048,8,t,e)}function G_(t,e){return Gd(4,2,t,e)}function Q_(t,e){return Gd(4,4,t,e)}function X_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Y_(t,e,n){return n=n!=null?n.concat([t]):null,Gd(4,4,X_.bind(null,e,t),n)}function Ig(){}function J_(t,e){var n=qn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Z_(t,e){var n=qn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Sg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function eE(t,e,n){return Ts&21?(sr(n,e)||(n=s_(),at.lanes|=n,Ss|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=n)}function NI(t,e){var n=$e;$e=n!==0&&4>n?n:4,t(!0);var r=bf.transition;bf.transition={};try{t(!1),e()}finally{$e=n,bf.transition=r}}function tE(){return qn().memoizedState}function MI(t,e,n){var r=Ii(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nE(t))rE(e,n);else if(n=V_(t,e,n,r),n!==null){var i=hn();rr(n,t,r,i),iE(n,e,r)}}function OI(t,e,n){var r=Ii(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nE(t))rE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,sr(a,o)){var l=e.interleaved;l===null?(i.next=i,bg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=V_(t,e,i,r),n!==null&&(i=hn(),rr(n,t,r,i),iE(n,e,r))}}function nE(t){var e=t.alternate;return t===at||e!==null&&e===at}function rE(t,e){Xa=ed=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function iE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,og(t,n)}}var td={readContext:Hn,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useInsertionEffect:Qt,useLayoutEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useMutableSource:Qt,useSyncExternalStore:Qt,useId:Qt,unstable_isNewReconciler:!1},LI={readContext:Hn,useCallback:function(t,e){return fr().memoizedState=[t,e===void 0?null:e],t},useContext:Hn,useEffect:Qy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gu(4194308,4,X_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gu(4194308,4,t,e)},useInsertionEffect:function(t,e){return gu(4,2,t,e)},useMemo:function(t,e){var n=fr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=MI.bind(null,at,t),[r.memoizedState,t]},useRef:function(t){var e=fr();return t={current:t},e.memoizedState=t},useState:Gy,useDebugValue:Ig,useDeferredValue:function(t){return fr().memoizedState=t},useTransition:function(){var t=Gy(!1),e=t[0];return t=NI.bind(null,t[1]),fr().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=at,i=fr();if(tt){if(n===void 0)throw Error(q(407));n=n()}else{if(n=e(),Dt===null)throw Error(q(349));Ts&30||z_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Qy(W_.bind(null,r,s,t),[t]),r.flags|=2048,kl(9,$_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=fr(),e=Dt.identifierPrefix;if(tt){var n=Mr,r=Nr;n=(r&~(1<<32-nr(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Tl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VI={readContext:Hn,useCallback:J_,useContext:Hn,useEffect:Pg,useImperativeHandle:Y_,useInsertionEffect:G_,useLayoutEffect:Q_,useMemo:Z_,useReducer:wf,useRef:K_,useState:function(){return wf(Sl)},useDebugValue:Ig,useDeferredValue:function(t){var e=qn();return eE(e,wt.memoizedState,t)},useTransition:function(){var t=wf(Sl)[0],e=qn().memoizedState;return[t,e]},useMutableSource:F_,useSyncExternalStore:U_,useId:tE,unstable_isNewReconciler:!1},jI={readContext:Hn,useCallback:J_,useContext:Hn,useEffect:Pg,useImperativeHandle:Y_,useInsertionEffect:G_,useLayoutEffect:Q_,useMemo:Z_,useReducer:_f,useRef:K_,useState:function(){return _f(Sl)},useDebugValue:Ig,useDeferredValue:function(t){var e=qn();return wt===null?e.memoizedState=t:eE(e,wt.memoizedState,t)},useTransition:function(){var t=_f(Sl)[0],e=qn().memoizedState;return[t,e]},useMutableSource:F_,useSyncExternalStore:U_,useId:tE,unstable_isNewReconciler:!1};function Xn(t,e){if(t&&t.defaultProps){e=lt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:lt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Qd={isMounted:function(t){return(t=t._reactInternals)?Ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=hn(),i=Ii(t),s=Br(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ci(t,s,i),e!==null&&(rr(e,t,i,r),pu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=hn(),i=Ii(t),s=Br(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ci(t,s,i),e!==null&&(rr(e,t,i,r),pu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),r=Ii(t),i=Br(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ci(t,i,r),e!==null&&(rr(e,t,r,n),pu(e,t,r))}};function Xy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!yl(n,r)||!yl(i,s):!0}function sE(t,e,n){var r=!1,i=Vi,s=e.contextType;return typeof s=="object"&&s!==null?s=Hn(s):(i=wn(e)?_s:sn.current,r=e.contextTypes,s=(r=r!=null)?Mo(t,i):Vi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Qd,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Qd.enqueueReplaceState(e,e.state,null)}function Op(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},wg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Hn(s):(s=wn(e)?_s:sn.current,i.context=Mo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Qd.enqueueReplaceState(i,i.state,null),Ju(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function jo(t,e){try{var n="",r=e;do n+=hP(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ef(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var BI=typeof WeakMap=="function"?WeakMap:Map;function oE(t,e,n){n=Br(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){rd||(rd=!0,qp=r),Lp(t,e)},n}function aE(t,e,n){n=Br(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Lp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lp(t,e),typeof r!="function"&&(Pi===null?Pi=new Set([this]):Pi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new BI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ZI.bind(null,t,e,n),e.then(t,t))}function Zy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function e1(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Br(-1,1),e.tag=2,Ci(n,e,1))),n.lanes|=1),t)}var FI=ei.ReactCurrentOwner,xn=!1;function dn(t,e,n,r){e.child=t===null?L_(e,null,n,r):Lo(e,t.child,n,r)}function t1(t,e,n,r,i){n=n.render;var s=e.ref;return ko(e,i),r=kg(t,e,n,r,s,i),n=Cg(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qr(t,e,i)):(tt&&n&&pg(e),e.flags|=1,dn(t,e,r,i),e.child)}function n1(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,lE(t,e,s,r,i)):(t=bu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:yl,n(o,r)&&t.ref===e.ref)return Qr(t,e,i)}return e.flags|=1,t=Ai(s,r),t.ref=e.ref,t.return=e,e.child=t}function lE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(yl(s,r)&&t.ref===e.ref)if(xn=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(xn=!0);else return e.lanes=t.lanes,Qr(t,e,i)}return Vp(t,e,n,r,i)}function cE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(mo,Pn),Pn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Qe(mo,Pn),Pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Qe(mo,Pn),Pn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Qe(mo,Pn),Pn|=r;return dn(t,e,i,n),e.child}function uE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vp(t,e,n,r,i){var s=wn(n)?_s:sn.current;return s=Mo(e,s),ko(e,i),n=kg(t,e,n,r,s,i),r=Cg(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qr(t,e,i)):(tt&&r&&pg(e),e.flags|=1,dn(t,e,n,i),e.child)}function r1(t,e,n,r,i){if(wn(n)){var s=!0;Ku(e)}else s=!1;if(ko(e,i),e.stateNode===null)vu(t,e),sE(e,n,r),Op(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Hn(c):(c=wn(n)?_s:sn.current,c=Mo(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Yy(e,o,r,c),di=!1;var p=e.memoizedState;o.state=p,Ju(e,r,o,i),l=e.memoizedState,a!==r||p!==l||bn.current||di?(typeof u=="function"&&(Mp(e,n,u,r),l=e.memoizedState),(a=di||Xy(e,n,a,r,p,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,j_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Xn(e.type,a),o.props=c,f=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=wn(n)?_s:sn.current,l=Mo(e,l));var h=n.getDerivedStateFromProps;(u=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||p!==l)&&Yy(e,o,r,l),di=!1,p=e.memoizedState,o.state=p,Ju(e,r,o,i);var g=e.memoizedState;a!==f||p!==g||bn.current||di?(typeof h=="function"&&(Mp(e,n,h,r),g=e.memoizedState),(c=di||Xy(e,n,c,r,p,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),r=!1)}return jp(t,e,n,r,s,i)}function jp(t,e,n,r,i,s){uE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&zy(e,n,!1),Qr(t,e,s);r=e.stateNode,FI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Lo(e,t.child,null,s),e.child=Lo(e,null,a,s)):dn(t,e,a,s),e.memoizedState=r.state,i&&zy(e,n,!0),e.child}function dE(t){var e=t.stateNode;e.pendingContext?Uy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Uy(t,e.context,!1),_g(t,e.containerInfo)}function i1(t,e,n,r,i){return Oo(),gg(i),e.flags|=256,dn(t,e,n,r),e.child}var Bp={dehydrated:null,treeContext:null,retryLane:0};function Fp(t){return{baseLanes:t,cachePool:null,transitions:null}}function hE(t,e,n){var r=e.pendingProps,i=st.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Qe(st,i&1),t===null)return Dp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Jd(o,r,0,null),t=xs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fp(n),e.memoizedState=Bp,t):Ag(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return UI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ai(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ai(a,s):(s=xs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bp,r}return s=t.child,t=s.sibling,r=Ai(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ag(t,e){return e=Jd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hc(t,e,n,r){return r!==null&&gg(r),Lo(e,t.child,null,n),t=Ag(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function UI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ef(Error(q(422))),Hc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Jd({mode:"visible",children:r.children},i,0,null),s=xs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Lo(e,t.child,null,o),e.child.memoizedState=Fp(o),e.memoizedState=Bp,s);if(!(e.mode&1))return Hc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(q(419)),r=Ef(s,r,void 0),Hc(t,e,o,r)}if(a=(o&t.childLanes)!==0,xn||a){if(r=Dt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gr(t,i),rr(r,t,i,-1))}return Lg(),r=Ef(Error(q(421))),Hc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=e5.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,In=ki(i.nextSibling),Rn=e,tt=!0,Zn=null,t!==null&&(Un[zn++]=Nr,Un[zn++]=Mr,Un[zn++]=Es,Nr=t.id,Mr=t.overflow,Es=e),e=Ag(e,r.children),e.flags|=4096,e)}function s1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Np(t.return,e,n)}function Tf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function fE(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(dn(t,e,r.children,n),r=st.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&s1(t,n,e);else if(t.tag===19)s1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Qe(st,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Zu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Tf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Zu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Tf(e,!0,n,null,s);break;case"together":Tf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ss|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(q(153));if(e.child!==null){for(t=e.child,n=Ai(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ai(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function zI(t,e,n){switch(e.tag){case 3:dE(e),Oo();break;case 5:B_(e);break;case 1:wn(e.type)&&Ku(e);break;case 4:_g(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Qe(Xu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Qe(st,st.current&1),e.flags|=128,null):n&e.child.childLanes?hE(t,e,n):(Qe(st,st.current&1),t=Qr(t,e,n),t!==null?t.sibling:null);Qe(st,st.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return fE(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Qe(st,st.current),r)break;return null;case 22:case 23:return e.lanes=0,cE(t,e,n)}return Qr(t,e,n)}var pE,Up,mE,gE;pE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Up=function(){};mE=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ms(yr.current);var s=null;switch(n){case"input":i=cp(t,i),r=cp(t,r),s=[];break;case"select":i=lt({},i,{value:void 0}),r=lt({},r,{value:void 0}),s=[];break;case"textarea":i=hp(t,i),r=hp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Hu)}pp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(dl.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(dl.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Je("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};gE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Pa(t,e){if(!tt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $I(t,e,n){var r=e.pendingProps;switch(mg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return wn(e.type)&&qu(),Xt(e),null;case 3:return r=e.stateNode,Vo(),Ze(bn),Ze(sn),Tg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($c(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(Qp(Zn),Zn=null))),Up(t,e),Xt(e),null;case 5:Eg(e);var i=ms(El.current);if(n=e.type,t!==null&&e.stateNode!=null)mE(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(q(166));return Xt(e),null}if(t=ms(yr.current),$c(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[pr]=e,r[wl]=s,t=(e.mode&1)!==0,n){case"dialog":Je("cancel",r),Je("close",r);break;case"iframe":case"object":case"embed":Je("load",r);break;case"video":case"audio":for(i=0;i<Ma.length;i++)Je(Ma[i],r);break;case"source":Je("error",r);break;case"img":case"image":case"link":Je("error",r),Je("load",r);break;case"details":Je("toggle",r);break;case"input":py(r,s),Je("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Je("invalid",r);break;case"textarea":gy(r,s),Je("invalid",r)}pp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&zc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&zc(r.textContent,a,t),i=["children",""+a]):dl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Je("scroll",r)}switch(n){case"input":Mc(r),my(r,s,!0);break;case"textarea":Mc(r),vy(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Hu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ww(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pr]=e,t[wl]=r,pE(t,e,!1,!1),e.stateNode=t;e:{switch(o=mp(n,r),n){case"dialog":Je("cancel",t),Je("close",t),i=r;break;case"iframe":case"object":case"embed":Je("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ma.length;i++)Je(Ma[i],t);i=r;break;case"source":Je("error",t),i=r;break;case"img":case"image":case"link":Je("error",t),Je("load",t),i=r;break;case"details":Je("toggle",t),i=r;break;case"input":py(t,r),i=cp(t,r),Je("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=lt({},r,{value:void 0}),Je("invalid",t);break;case"textarea":gy(t,r),i=hp(t,r),Je("invalid",t);break;default:i=r}pp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Kw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Hw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&hl(t,l):typeof l=="number"&&hl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(dl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Je("scroll",t):l!=null&&eg(t,s,l,o))}switch(n){case"input":Mc(t),my(t,r,!1);break;case"textarea":Mc(t),vy(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Li(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?_o(t,!!r.multiple,s,!1):r.defaultValue!=null&&_o(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)gE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(q(166));if(n=ms(El.current),ms(yr.current),$c(e)){if(r=e.stateNode,n=e.memoizedProps,r[pr]=e,(s=r.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:zc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pr]=e,e.stateNode=r}return Xt(e),null;case 13:if(Ze(st),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(tt&&In!==null&&e.mode&1&&!(e.flags&128))M_(),Oo(),e.flags|=98560,s=!1;else if(s=$c(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(q(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(q(317));s[pr]=e}else Oo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else Zn!==null&&(Qp(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||st.current&1?Tt===0&&(Tt=3):Lg())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Vo(),Up(t,e),t===null&&xl(e.stateNode.containerInfo),Xt(e),null;case 10:return xg(e.type._context),Xt(e),null;case 17:return wn(e.type)&&qu(),Xt(e),null;case 19:if(Ze(st),s=e.memoizedState,s===null)return Xt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Pa(s,!1);else{if(Tt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Zu(t),o!==null){for(e.flags|=128,Pa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Qe(st,st.current&1|2),e.child}t=t.sibling}s.tail!==null&&gt()>Bo&&(e.flags|=128,r=!0,Pa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Zu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!tt)return Xt(e),null}else 2*gt()-s.renderingStartTime>Bo&&n!==1073741824&&(e.flags|=128,r=!0,Pa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=gt(),e.sibling=null,n=st.current,Qe(st,r?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return Og(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Pn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(q(156,e.tag))}function WI(t,e){switch(mg(e),e.tag){case 1:return wn(e.type)&&qu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vo(),Ze(bn),Ze(sn),Tg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Eg(e),null;case 13:if(Ze(st),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(q(340));Oo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ze(st),null;case 4:return Vo(),null;case 10:return xg(e.type._context),null;case 22:case 23:return Og(),null;case 24:return null;default:return null}}var qc=!1,en=!1,HI=typeof WeakSet=="function"?WeakSet:Set,ie=null;function po(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){dt(t,e,r)}else n.current=null}function zp(t,e,n){try{n()}catch(r){dt(t,e,r)}}var o1=!1;function qI(t,e){if(Sp=zu,t=w_(),fg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,p=null;t:for(;;){for(var h;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(h=f.firstChild)!==null;)p=f,f=h;for(;;){if(f===t)break t;if(p===n&&++c===i&&(a=o),p===s&&++u===r&&(l=o),(h=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=h}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kp={focusedElem:t,selectionRange:n},zu=!1,ie=e;ie!==null;)if(e=ie,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ie=t;else for(;ie!==null;){e=ie;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var m=g.memoizedProps,v=g.memoizedState,x=e.stateNode,b=x.getSnapshotBeforeUpdate(e.elementType===e.type?m:Xn(e.type,m),v);x.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(R){dt(e,e.return,R)}if(t=e.sibling,t!==null){t.return=e.return,ie=t;break}ie=e.return}return g=o1,o1=!1,g}function Ya(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&zp(e,n,s)}i=i.next}while(i!==r)}}function Xd(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function $p(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vE(t){var e=t.alternate;e!==null&&(t.alternate=null,vE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pr],delete e[wl],delete e[Ip],delete e[PI],delete e[II])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yE(t){return t.tag===5||t.tag===3||t.tag===4}function a1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hu));else if(r!==4&&(t=t.child,t!==null))for(Wp(t,e,n),t=t.sibling;t!==null;)Wp(t,e,n),t=t.sibling}function Hp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hp(t,e,n),t=t.sibling;t!==null;)Hp(t,e,n),t=t.sibling}var Vt=null,Jn=!1;function oi(t,e,n){for(n=n.child;n!==null;)xE(t,e,n),n=n.sibling}function xE(t,e,n){if(vr&&typeof vr.onCommitFiberUnmount=="function")try{vr.onCommitFiberUnmount(zd,n)}catch{}switch(n.tag){case 5:en||po(n,e);case 6:var r=Vt,i=Jn;Vt=null,oi(t,e,n),Vt=r,Jn=i,Vt!==null&&(Jn?(t=Vt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Vt.removeChild(n.stateNode));break;case 18:Vt!==null&&(Jn?(t=Vt,n=n.stateNode,t.nodeType===8?vf(t.parentNode,n):t.nodeType===1&&vf(t,n),gl(t)):vf(Vt,n.stateNode));break;case 4:r=Vt,i=Jn,Vt=n.stateNode.containerInfo,Jn=!0,oi(t,e,n),Vt=r,Jn=i;break;case 0:case 11:case 14:case 15:if(!en&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&zp(n,e,o),i=i.next}while(i!==r)}oi(t,e,n);break;case 1:if(!en&&(po(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){dt(n,e,a)}oi(t,e,n);break;case 21:oi(t,e,n);break;case 22:n.mode&1?(en=(r=en)||n.memoizedState!==null,oi(t,e,n),en=r):oi(t,e,n);break;default:oi(t,e,n)}}function l1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HI),e.forEach(function(r){var i=t5.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Vt=a.stateNode,Jn=!1;break e;case 3:Vt=a.stateNode.containerInfo,Jn=!0;break e;case 4:Vt=a.stateNode.containerInfo,Jn=!0;break e}a=a.return}if(Vt===null)throw Error(q(160));xE(s,o,i),Vt=null,Jn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){dt(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)bE(e,t),e=e.sibling}function bE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),dr(t),r&4){try{Ya(3,t,t.return),Xd(3,t)}catch(m){dt(t,t.return,m)}try{Ya(5,t,t.return)}catch(m){dt(t,t.return,m)}}break;case 1:Gn(e,t),dr(t),r&512&&n!==null&&po(n,n.return);break;case 5:if(Gn(e,t),dr(t),r&512&&n!==null&&po(n,n.return),t.flags&32){var i=t.stateNode;try{hl(i,"")}catch(m){dt(t,t.return,m)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&zw(i,s),mp(a,o);var c=mp(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Kw(i,f):u==="dangerouslySetInnerHTML"?Hw(i,f):u==="children"?hl(i,f):eg(i,u,f,c)}switch(a){case"input":up(i,s);break;case"textarea":$w(i,s);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?_o(i,!!s.multiple,h,!1):p!==!!s.multiple&&(s.defaultValue!=null?_o(i,!!s.multiple,s.defaultValue,!0):_o(i,!!s.multiple,s.multiple?[]:"",!1))}i[wl]=s}catch(m){dt(t,t.return,m)}}break;case 6:if(Gn(e,t),dr(t),r&4){if(t.stateNode===null)throw Error(q(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(m){dt(t,t.return,m)}}break;case 3:if(Gn(e,t),dr(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gl(e.containerInfo)}catch(m){dt(t,t.return,m)}break;case 4:Gn(e,t),dr(t);break;case 13:Gn(e,t),dr(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ng=gt())),r&4&&l1(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(en=(c=en)||u,Gn(e,t),en=c):Gn(e,t),dr(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(ie=t,u=t.child;u!==null;){for(f=ie=u;ie!==null;){switch(p=ie,h=p.child,p.tag){case 0:case 11:case 14:case 15:Ya(4,p,p.return);break;case 1:po(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(m){dt(r,n,m)}}break;case 5:po(p,p.return);break;case 22:if(p.memoizedState!==null){u1(f);continue}}h!==null?(h.return=p,ie=h):u1(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=qw("display",o))}catch(m){dt(t,t.return,m)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(m){dt(t,t.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Gn(e,t),dr(t),r&4&&l1(t);break;case 21:break;default:Gn(e,t),dr(t)}}function dr(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yE(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(hl(i,""),r.flags&=-33);var s=a1(t);Hp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=a1(t);Wp(t,a,o);break;default:throw Error(q(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function KI(t,e,n){ie=t,wE(t)}function wE(t,e,n){for(var r=(t.mode&1)!==0;ie!==null;){var i=ie,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||qc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||en;a=qc;var c=en;if(qc=o,(en=l)&&!c)for(ie=i;ie!==null;)o=ie,l=o.child,o.tag===22&&o.memoizedState!==null?d1(i):l!==null?(l.return=o,ie=l):d1(i);for(;s!==null;)ie=s,wE(s),s=s.sibling;ie=i,qc=a,en=c}c1(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,ie=s):c1(t)}}function c1(t){for(;ie!==null;){var e=ie;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||Xd(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!en)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Ky(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ky(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&gl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}en||e.flags&512&&$p(e)}catch(p){dt(e,e.return,p)}}if(e===t){ie=null;break}if(n=e.sibling,n!==null){n.return=e.return,ie=n;break}ie=e.return}}function u1(t){for(;ie!==null;){var e=ie;if(e===t){ie=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ie=n;break}ie=e.return}}function d1(t){for(;ie!==null;){var e=ie;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xd(4,e)}catch(l){dt(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){dt(e,i,l)}}var s=e.return;try{$p(e)}catch(l){dt(e,s,l)}break;case 5:var o=e.return;try{$p(e)}catch(l){dt(e,o,l)}}}catch(l){dt(e,e.return,l)}if(e===t){ie=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ie=a;break}ie=e.return}}var GI=Math.ceil,nd=ei.ReactCurrentDispatcher,Rg=ei.ReactCurrentOwner,Wn=ei.ReactCurrentBatchConfig,je=0,Dt=null,xt=null,Ut=0,Pn=0,mo=Gi(0),Tt=0,Cl=null,Ss=0,Yd=0,Dg=0,Ja=null,vn=null,Ng=0,Bo=1/0,Rr=null,rd=!1,qp=null,Pi=null,Kc=!1,bi=null,id=0,Za=0,Kp=null,yu=-1,xu=0;function hn(){return je&6?gt():yu!==-1?yu:yu=gt()}function Ii(t){return t.mode&1?je&2&&Ut!==0?Ut&-Ut:RI.transition!==null?(xu===0&&(xu=s_()),xu):(t=$e,t!==0||(t=window.event,t=t===void 0?16:h_(t.type)),t):1}function rr(t,e,n,r){if(50<Za)throw Za=0,Kp=null,Error(q(185));ql(t,n,r),(!(je&2)||t!==Dt)&&(t===Dt&&(!(je&2)&&(Yd|=n),Tt===4&&pi(t,Ut)),_n(t,r),n===1&&je===0&&!(e.mode&1)&&(Bo=gt()+500,Kd&&Qi()))}function _n(t,e){var n=t.callbackNode;RP(t,e);var r=Uu(t,t===Dt?Ut:0);if(r===0)n!==null&&by(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&by(n),e===1)t.tag===0?AI(h1.bind(null,t)):R_(h1.bind(null,t)),kI(function(){!(je&6)&&Qi()}),n=null;else{switch(o_(r)){case 1:n=sg;break;case 4:n=r_;break;case 16:n=Fu;break;case 536870912:n=i_;break;default:n=Fu}n=IE(n,_E.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _E(t,e){if(yu=-1,xu=0,je&6)throw Error(q(327));var n=t.callbackNode;if(Co()&&t.callbackNode!==n)return null;var r=Uu(t,t===Dt?Ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=sd(t,r);else{e=r;var i=je;je|=2;var s=TE();(Dt!==t||Ut!==e)&&(Rr=null,Bo=gt()+500,ys(t,e));do try{YI();break}catch(a){EE(t,a)}while(!0);yg(),nd.current=s,je=i,xt!==null?e=0:(Dt=null,Ut=0,e=Tt)}if(e!==0){if(e===2&&(i=bp(t),i!==0&&(r=i,e=Gp(t,i))),e===1)throw n=Cl,ys(t,0),pi(t,r),_n(t,gt()),n;if(e===6)pi(t,r);else{if(i=t.current.alternate,!(r&30)&&!QI(i)&&(e=sd(t,r),e===2&&(s=bp(t),s!==0&&(r=s,e=Gp(t,s))),e===1))throw n=Cl,ys(t,0),pi(t,r),_n(t,gt()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(q(345));case 2:ls(t,vn,Rr);break;case 3:if(pi(t,r),(r&130023424)===r&&(e=Ng+500-gt(),10<e)){if(Uu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){hn(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Pp(ls.bind(null,t,vn,Rr),e);break}ls(t,vn,Rr);break;case 4:if(pi(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-nr(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=gt()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*GI(r/1960))-r,10<r){t.timeoutHandle=Pp(ls.bind(null,t,vn,Rr),r);break}ls(t,vn,Rr);break;case 5:ls(t,vn,Rr);break;default:throw Error(q(329))}}}return _n(t,gt()),t.callbackNode===n?_E.bind(null,t):null}function Gp(t,e){var n=Ja;return t.current.memoizedState.isDehydrated&&(ys(t,e).flags|=256),t=sd(t,e),t!==2&&(e=vn,vn=n,e!==null&&Qp(e)),t}function Qp(t){vn===null?vn=t:vn.push.apply(vn,t)}function QI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!sr(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pi(t,e){for(e&=~Dg,e&=~Yd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nr(e),r=1<<n;t[n]=-1,e&=~r}}function h1(t){if(je&6)throw Error(q(327));Co();var e=Uu(t,0);if(!(e&1))return _n(t,gt()),null;var n=sd(t,e);if(t.tag!==0&&n===2){var r=bp(t);r!==0&&(e=r,n=Gp(t,r))}if(n===1)throw n=Cl,ys(t,0),pi(t,e),_n(t,gt()),n;if(n===6)throw Error(q(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ls(t,vn,Rr),_n(t,gt()),null}function Mg(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(Bo=gt()+500,Kd&&Qi())}}function ks(t){bi!==null&&bi.tag===0&&!(je&6)&&Co();var e=je;je|=1;var n=Wn.transition,r=$e;try{if(Wn.transition=null,$e=1,t)return t()}finally{$e=r,Wn.transition=n,je=e,!(je&6)&&Qi()}}function Og(){Pn=mo.current,Ze(mo)}function ys(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SI(n)),xt!==null)for(n=xt.return;n!==null;){var r=n;switch(mg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&qu();break;case 3:Vo(),Ze(bn),Ze(sn),Tg();break;case 5:Eg(r);break;case 4:Vo();break;case 13:Ze(st);break;case 19:Ze(st);break;case 10:xg(r.type._context);break;case 22:case 23:Og()}n=n.return}if(Dt=t,xt=t=Ai(t.current,null),Ut=Pn=e,Tt=0,Cl=null,Dg=Yd=Ss=0,vn=Ja=null,ps!==null){for(e=0;e<ps.length;e++)if(n=ps[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ps=null}return t}function EE(t,e){do{var n=xt;try{if(yg(),mu.current=td,ed){for(var r=at.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ed=!1}if(Ts=0,At=wt=at=null,Xa=!1,Tl=0,Rg.current=null,n===null||n.return===null){Tt=1,Cl=e,xt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var h=Zy(o);if(h!==null){h.flags&=-257,e1(h,o,a,s,e),h.mode&1&&Jy(s,c,e),e=h,l=c;var g=e.updateQueue;if(g===null){var m=new Set;m.add(l),e.updateQueue=m}else g.add(l);break e}else{if(!(e&1)){Jy(s,c,e),Lg();break e}l=Error(q(426))}}else if(tt&&a.mode&1){var v=Zy(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),e1(v,o,a,s,e),gg(jo(l,a));break e}}s=l=jo(l,a),Tt!==4&&(Tt=2),Ja===null?Ja=[s]:Ja.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var x=oE(s,l,e);qy(s,x);break e;case 1:a=l;var b=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof b.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Pi===null||!Pi.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var R=aE(s,a,e);qy(s,R);break e}}s=s.return}while(s!==null)}kE(n)}catch(E){e=E,xt===n&&n!==null&&(xt=n=n.return);continue}break}while(!0)}function TE(){var t=nd.current;return nd.current=td,t===null?td:t}function Lg(){(Tt===0||Tt===3||Tt===2)&&(Tt=4),Dt===null||!(Ss&268435455)&&!(Yd&268435455)||pi(Dt,Ut)}function sd(t,e){var n=je;je|=2;var r=TE();(Dt!==t||Ut!==e)&&(Rr=null,ys(t,e));do try{XI();break}catch(i){EE(t,i)}while(!0);if(yg(),je=n,nd.current=r,xt!==null)throw Error(q(261));return Dt=null,Ut=0,Tt}function XI(){for(;xt!==null;)SE(xt)}function YI(){for(;xt!==null&&!_P();)SE(xt)}function SE(t){var e=PE(t.alternate,t,Pn);t.memoizedProps=t.pendingProps,e===null?kE(t):xt=e,Rg.current=null}function kE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=WI(n,e),n!==null){n.flags&=32767,xt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Tt=6,xt=null;return}}else if(n=$I(n,e,Pn),n!==null){xt=n;return}if(e=e.sibling,e!==null){xt=e;return}xt=e=t}while(e!==null);Tt===0&&(Tt=5)}function ls(t,e,n){var r=$e,i=Wn.transition;try{Wn.transition=null,$e=1,JI(t,e,n,r)}finally{Wn.transition=i,$e=r}return null}function JI(t,e,n,r){do Co();while(bi!==null);if(je&6)throw Error(q(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(q(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(DP(t,s),t===Dt&&(xt=Dt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Kc||(Kc=!0,IE(Fu,function(){return Co(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var o=$e;$e=1;var a=je;je|=4,Rg.current=null,qI(t,n),bE(n,t),yI(kp),zu=!!Sp,kp=Sp=null,t.current=n,KI(n),EP(),je=a,$e=o,Wn.transition=s}else t.current=n;if(Kc&&(Kc=!1,bi=t,id=i),s=t.pendingLanes,s===0&&(Pi=null),kP(n.stateNode),_n(t,gt()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rd)throw rd=!1,t=qp,qp=null,t;return id&1&&t.tag!==0&&Co(),s=t.pendingLanes,s&1?t===Kp?Za++:(Za=0,Kp=t):Za=0,Qi(),null}function Co(){if(bi!==null){var t=o_(id),e=Wn.transition,n=$e;try{if(Wn.transition=null,$e=16>t?16:t,bi===null)var r=!1;else{if(t=bi,bi=null,id=0,je&6)throw Error(q(331));var i=je;for(je|=4,ie=t.current;ie!==null;){var s=ie,o=s.child;if(ie.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ie=c;ie!==null;){var u=ie;switch(u.tag){case 0:case 11:case 15:Ya(8,u,s)}var f=u.child;if(f!==null)f.return=u,ie=f;else for(;ie!==null;){u=ie;var p=u.sibling,h=u.return;if(vE(u),u===c){ie=null;break}if(p!==null){p.return=h,ie=p;break}ie=h}}}var g=s.alternate;if(g!==null){var m=g.child;if(m!==null){g.child=null;do{var v=m.sibling;m.sibling=null,m=v}while(m!==null)}}ie=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ie=o;else e:for(;ie!==null;){if(s=ie,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ya(9,s,s.return)}var x=s.sibling;if(x!==null){x.return=s.return,ie=x;break e}ie=s.return}}var b=t.current;for(ie=b;ie!==null;){o=ie;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ie=_;else e:for(o=b;ie!==null;){if(a=ie,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xd(9,a)}}catch(E){dt(a,a.return,E)}if(a===o){ie=null;break e}var R=a.sibling;if(R!==null){R.return=a.return,ie=R;break e}ie=a.return}}if(je=i,Qi(),vr&&typeof vr.onPostCommitFiberRoot=="function")try{vr.onPostCommitFiberRoot(zd,t)}catch{}r=!0}return r}finally{$e=n,Wn.transition=e}}return!1}function f1(t,e,n){e=jo(n,e),e=oE(t,e,1),t=Ci(t,e,1),e=hn(),t!==null&&(ql(t,1,e),_n(t,e))}function dt(t,e,n){if(t.tag===3)f1(t,t,n);else for(;e!==null;){if(e.tag===3){f1(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pi===null||!Pi.has(r))){t=jo(n,t),t=aE(e,t,1),e=Ci(e,t,1),t=hn(),e!==null&&(ql(e,1,t),_n(e,t));break}}e=e.return}}function ZI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(Ut&n)===n&&(Tt===4||Tt===3&&(Ut&130023424)===Ut&&500>gt()-Ng?ys(t,0):Dg|=n),_n(t,e)}function CE(t,e){e===0&&(t.mode&1?(e=Vc,Vc<<=1,!(Vc&130023424)&&(Vc=4194304)):e=1);var n=hn();t=Gr(t,e),t!==null&&(ql(t,e,n),_n(t,n))}function e5(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),CE(t,n)}function t5(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(e),CE(t,n)}var PE;PE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bn.current)xn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xn=!1,zI(t,e,n);xn=!!(t.flags&131072)}else xn=!1,tt&&e.flags&1048576&&D_(e,Qu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vu(t,e),t=e.pendingProps;var i=Mo(e,sn.current);ko(e,n),i=kg(null,e,r,t,i,n);var s=Cg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,wn(r)?(s=!0,Ku(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,wg(e),i.updater=Qd,e.stateNode=i,i._reactInternals=e,Op(e,r,t,n),e=jp(null,e,r,!0,s,n)):(e.tag=0,tt&&s&&pg(e),dn(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=r5(r),t=Xn(r,t),i){case 0:e=Vp(null,e,r,t,n);break e;case 1:e=r1(null,e,r,t,n);break e;case 11:e=t1(null,e,r,t,n);break e;case 14:e=n1(null,e,r,Xn(r.type,t),n);break e}throw Error(q(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xn(r,i),Vp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xn(r,i),r1(t,e,r,i,n);case 3:e:{if(dE(e),t===null)throw Error(q(387));r=e.pendingProps,s=e.memoizedState,i=s.element,j_(t,e),Ju(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=jo(Error(q(423)),e),e=i1(t,e,r,n,i);break e}else if(r!==i){i=jo(Error(q(424)),e),e=i1(t,e,r,n,i);break e}else for(In=ki(e.stateNode.containerInfo.firstChild),Rn=e,tt=!0,Zn=null,n=L_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oo(),r===i){e=Qr(t,e,n);break e}dn(t,e,r,n)}e=e.child}return e;case 5:return B_(e),t===null&&Dp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Cp(r,i)?o=null:s!==null&&Cp(r,s)&&(e.flags|=32),uE(t,e),dn(t,e,o,n),e.child;case 6:return t===null&&Dp(e),null;case 13:return hE(t,e,n);case 4:return _g(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Lo(e,null,r,n):dn(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xn(r,i),t1(t,e,r,i,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Qe(Xu,r._currentValue),r._currentValue=o,s!==null)if(sr(s.value,o)){if(s.children===i.children&&!bn.current){e=Qr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Br(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Np(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(q(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Np(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dn(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ko(e,n),i=Hn(i),r=r(i),e.flags|=1,dn(t,e,r,n),e.child;case 14:return r=e.type,i=Xn(r,e.pendingProps),i=Xn(r.type,i),n1(t,e,r,i,n);case 15:return lE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xn(r,i),vu(t,e),e.tag=1,wn(r)?(t=!0,Ku(e)):t=!1,ko(e,n),sE(e,r,i),Op(e,r,i,n),jp(null,e,r,!0,t,n);case 19:return fE(t,e,n);case 22:return cE(t,e,n)}throw Error(q(156,e.tag))};function IE(t,e){return n_(t,e)}function n5(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,r){return new n5(t,e,n,r)}function Vg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function r5(t){if(typeof t=="function")return Vg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ng)return 11;if(t===rg)return 14}return 2}function Ai(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function bu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case io:return xs(n.children,i,s,e);case tg:o=8,i|=8;break;case sp:return t=$n(12,n,e,i|2),t.elementType=sp,t.lanes=s,t;case op:return t=$n(13,n,e,i),t.elementType=op,t.lanes=s,t;case ap:return t=$n(19,n,e,i),t.elementType=ap,t.lanes=s,t;case Bw:return Jd(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vw:o=10;break e;case jw:o=9;break e;case ng:o=11;break e;case rg:o=14;break e;case ui:o=16,r=null;break e}throw Error(q(130,t==null?t:typeof t,""))}return e=$n(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function xs(t,e,n,r){return t=$n(7,t,r,e),t.lanes=n,t}function Jd(t,e,n,r){return t=$n(22,t,r,e),t.elementType=Bw,t.lanes=n,t.stateNode={isHidden:!1},t}function Sf(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function kf(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function i5(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=of(0),this.expirationTimes=of(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=of(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function jg(t,e,n,r,i,s,o,a,l){return t=new i5(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$n(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},wg(s),t}function s5(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ro,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function AE(t){if(!t)return Vi;t=t._reactInternals;e:{if(Ds(t)!==t||t.tag!==1)throw Error(q(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(wn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(q(171))}if(t.tag===1){var n=t.type;if(wn(n))return A_(t,n,e)}return e}function RE(t,e,n,r,i,s,o,a,l){return t=jg(n,r,!0,t,i,s,o,a,l),t.context=AE(null),n=t.current,r=hn(),i=Ii(n),s=Br(r,i),s.callback=e??null,Ci(n,s,i),t.current.lanes=i,ql(t,i,r),_n(t,r),t}function Zd(t,e,n,r){var i=e.current,s=hn(),o=Ii(i);return n=AE(n),e.context===null?e.context=n:e.pendingContext=n,e=Br(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ci(i,e,o),t!==null&&(rr(t,i,o,s),pu(t,i,o)),o}function od(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function p1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bg(t,e){p1(t,e),(t=t.alternate)&&p1(t,e)}function o5(){return null}var DE=typeof reportError=="function"?reportError:function(t){console.error(t)};function Fg(t){this._internalRoot=t}eh.prototype.render=Fg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(q(409));Zd(t,e,null,null)};eh.prototype.unmount=Fg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ks(function(){Zd(null,t,null,null)}),e[Kr]=null}};function eh(t){this._internalRoot=t}eh.prototype.unstable_scheduleHydration=function(t){if(t){var e=c_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fi.length&&e!==0&&e<fi[n].priority;n++);fi.splice(n,0,t),n===0&&d_(t)}};function Ug(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function m1(){}function a5(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=od(o);s.call(c)}}var o=RE(e,r,t,0,null,!1,!1,"",m1);return t._reactRootContainer=o,t[Kr]=o.current,xl(t.nodeType===8?t.parentNode:t),ks(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=od(l);a.call(c)}}var l=jg(t,0,!1,null,null,!1,!1,"",m1);return t._reactRootContainer=l,t[Kr]=l.current,xl(t.nodeType===8?t.parentNode:t),ks(function(){Zd(e,l,n,r)}),l}function nh(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=od(o);a.call(l)}}Zd(e,o,t,i)}else o=a5(n,e,t,i,r);return od(o)}a_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Na(e.pendingLanes);n!==0&&(og(e,n|1),_n(e,gt()),!(je&6)&&(Bo=gt()+500,Qi()))}break;case 13:ks(function(){var r=Gr(t,1);if(r!==null){var i=hn();rr(r,t,1,i)}}),Bg(t,1)}};ag=function(t){if(t.tag===13){var e=Gr(t,134217728);if(e!==null){var n=hn();rr(e,t,134217728,n)}Bg(t,134217728)}};l_=function(t){if(t.tag===13){var e=Ii(t),n=Gr(t,e);if(n!==null){var r=hn();rr(n,t,e,r)}Bg(t,e)}};c_=function(){return $e};u_=function(t,e){var n=$e;try{return $e=t,e()}finally{$e=n}};vp=function(t,e,n){switch(e){case"input":if(up(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=qd(r);if(!i)throw Error(q(90));Uw(r),up(r,i)}}}break;case"textarea":$w(t,n);break;case"select":e=n.value,e!=null&&_o(t,!!n.multiple,e,!1)}};Xw=Mg;Yw=ks;var l5={usingClientEntryPoint:!1,Events:[Gl,lo,qd,Gw,Qw,Mg]},Ia={findFiberByHostInstance:fs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},c5={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ei.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=e_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||o5,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gc.isDisabled&&Gc.supportsFiber)try{zd=Gc.inject(c5),vr=Gc}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=l5;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ug(e))throw Error(q(200));return s5(t,e,null,n)};Mn.createRoot=function(t,e){if(!Ug(t))throw Error(q(299));var n=!1,r="",i=DE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=jg(t,1,!1,null,null,n,!1,r,i),t[Kr]=e.current,xl(t.nodeType===8?t.parentNode:t),new Fg(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(q(188)):(t=Object.keys(t).join(","),Error(q(268,t)));return t=e_(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return ks(t)};Mn.hydrate=function(t,e,n){if(!th(e))throw Error(q(200));return nh(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!Ug(t))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=DE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=RE(e,null,t,1,n??null,i,!1,s,o),t[Kr]=e.current,xl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new eh(e)};Mn.render=function(t,e,n){if(!th(e))throw Error(q(200));return nh(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!th(t))throw Error(q(40));return t._reactRootContainer?(ks(function(){nh(null,null,t,!1,function(){t._reactRootContainer=null,t[Kr]=null})}),!0):!1};Mn.unstable_batchedUpdates=Mg;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!th(n))throw Error(q(200));if(t==null||t._reactInternals===void 0)throw Error(q(38));return nh(t,e,n,!1,r)};Mn.version="18.3.1-next-f1338f8080-20240426";function NE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(NE)}catch(t){console.error(t)}}NE(),Nw.exports=Mn;var hs=Nw.exports,ME,g1=hs;ME=g1.createRoot,g1.hydrateRoot;const OE=M.createContext(),u5=({children:t})=>{const[e,n]=M.useState(!1),r=()=>n(i=>!i);return C.jsx(OE.Provider,{value:{menuOpen:e,setMenuOpen:n,toggleMenu:r},children:t})},Xp=()=>M.useContext(OE);/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pl(){return Pl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Pl.apply(this,arguments)}var wi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(wi||(wi={}));const v1="popstate";function d5(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Ns(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Yp("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:ad(s))}function r(i,s){zg(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return f5(e,n,r,t)}function bt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function h5(){return Math.random().toString(36).substr(2,8)}function y1(t,e){return{usr:t.state,key:t.key,idx:e}}function Yp(t,e,n,r){return n===void 0&&(n=null),Pl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ns(e):e,{state:n,key:e&&e.key||r||h5()})}function ad(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ns(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function f5(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=wi.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Pl({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function f(){a=wi.Pop;let v=u(),x=v==null?null:v-c;c=v,l&&l({action:a,location:m.location,delta:x})}function p(v,x){a=wi.Push;let b=Yp(m.location,v,x);n&&n(b,v),c=u()+1;let _=y1(b,c),R=m.createHref(b);try{o.pushState(_,"",R)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(R)}s&&l&&l({action:a,location:m.location,delta:1})}function h(v,x){a=wi.Replace;let b=Yp(m.location,v,x);n&&n(b,v),c=u();let _=y1(b,c),R=m.createHref(b);o.replaceState(_,"",R),s&&l&&l({action:a,location:m.location,delta:0})}function g(v){let x=i.location.origin!=="null"?i.location.origin:i.location.href,b=typeof v=="string"?v:ad(v);return b=b.replace(/ $/,"%20"),bt(x,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,x)}let m={get action(){return a},get location(){return t(i,o)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(v1,f),l=v,()=>{i.removeEventListener(v1,f),l=null}},createHref(v){return e(i,v)},createURL:g,encodeLocation(v){let x=g(v);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:h,go(v){return o.go(v)}};return m}var x1;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(x1||(x1={}));function p5(t,e,n){return n===void 0&&(n="/"),m5(t,e,n,!1)}function m5(t,e,n,r){let i=typeof e=="string"?Ns(e):e,s=$g(i.pathname||"/",n);if(s==null)return null;let o=LE(t);g5(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=C5(s);a=S5(o[l],c,r)}return a}function LE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(bt(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Ri([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(bt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),LE(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:E5(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of VE(s.path))i(s,o,l)}),e}function VE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=VE(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function g5(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:T5(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const v5=/^:[\w-]+$/,y5=3,x5=2,b5=1,w5=10,_5=-2,b1=t=>t==="*";function E5(t,e){let n=t.split("/"),r=n.length;return n.some(b1)&&(r+=_5),e&&(r+=x5),n.filter(i=>!b1(i)).reduce((i,s)=>i+(v5.test(s)?y5:s===""?b5:w5),r)}function T5(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function S5(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=s==="/"?e:e.slice(s.length)||"/",f=w1({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),p=l.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=w1({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:Ri([s,f.pathname]),pathnameBase:R5(Ri([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=Ri([s,f.pathnameBase]))}return o}function w1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=k5(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,f)=>{let{paramName:p,isOptional:h}=u;if(p==="*"){let m=a[f]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}const g=a[f];return h&&!g?c[p]=void 0:c[p]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function k5(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function C5(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return zg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function $g(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function P5(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ns(t):t;return{pathname:n?n.startsWith("/")?n:I5(n,e):e,search:D5(r),hash:N5(i)}}function I5(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Cf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function A5(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function jE(t,e){let n=A5(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function BE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ns(t):(i=Pl({},t),bt(!i.pathname||!i.pathname.includes("?"),Cf("?","pathname","search",i)),bt(!i.pathname||!i.pathname.includes("#"),Cf("#","pathname","hash",i)),bt(!i.search||!i.search.includes("#"),Cf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let l=P5(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const Ri=t=>t.join("/").replace(/\/\/+/g,"/"),R5=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),D5=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,N5=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function M5(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const FE=["post","put","patch","delete"];new Set(FE);const O5=["get",...FE];new Set(O5);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Il(){return Il=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Il.apply(this,arguments)}const Wg=M.createContext(null),L5=M.createContext(null),Ms=M.createContext(null),rh=M.createContext(null),Os=M.createContext({outlet:null,matches:[],isDataRoute:!1}),UE=M.createContext(null);function V5(t,e){let{relative:n}=e===void 0?{}:e;Xl()||bt(!1);let{basename:r,navigator:i}=M.useContext(Ms),{hash:s,pathname:o,search:a}=$E(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Ri([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Xl(){return M.useContext(rh)!=null}function ea(){return Xl()||bt(!1),M.useContext(rh).location}function zE(t){M.useContext(Ms).static||M.useLayoutEffect(t)}function Ls(){let{isDataRoute:t}=M.useContext(Os);return t?X5():j5()}function j5(){Xl()||bt(!1);let t=M.useContext(Wg),{basename:e,future:n,navigator:r}=M.useContext(Ms),{matches:i}=M.useContext(Os),{pathname:s}=ea(),o=JSON.stringify(jE(i,n.v7_relativeSplatPath)),a=M.useRef(!1);return zE(()=>{a.current=!0}),M.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=BE(c,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Ri([e,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[e,r,o,s,t])}function $E(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(Ms),{matches:i}=M.useContext(Os),{pathname:s}=ea(),o=JSON.stringify(jE(i,r.v7_relativeSplatPath));return M.useMemo(()=>BE(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function B5(t,e){return F5(t,e)}function F5(t,e,n,r){Xl()||bt(!1);let{navigator:i}=M.useContext(Ms),{matches:s}=M.useContext(Os),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=ea(),u;if(e){var f;let v=typeof e=="string"?Ns(e):e;l==="/"||(f=v.pathname)!=null&&f.startsWith(l)||bt(!1),u=v}else u=c;let p=u.pathname||"/",h=p;if(l!=="/"){let v=l.replace(/^\//,"").split("/");h="/"+p.replace(/^\//,"").split("/").slice(v.length).join("/")}let g=p5(t,{pathname:h}),m=H5(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:Ri([l,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:Ri([l,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r);return e&&m?M.createElement(rh.Provider,{value:{location:Il({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:wi.Pop}},m):m}function U5(){let t=Q5(),e=M5(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const z5=M.createElement(U5,null);class $5 extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(Os.Provider,{value:this.props.routeContext},M.createElement(UE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function W5(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(Wg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Os.Provider,{value:e},r)}function H5(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);u>=0||bt(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let f=o[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:p,errors:h}=n,g=f.route.loader&&p[f.route.id]===void 0&&(!h||h[f.route.id]===void 0);if(f.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,f,p)=>{let h,g=!1,m=null,v=null;n&&(h=a&&f.route.id?a[f.route.id]:void 0,m=f.route.errorElement||z5,l&&(c<0&&p===0?(g=!0,v=null):c===p&&(g=!0,v=f.route.hydrateFallbackElement||null)));let x=e.concat(o.slice(0,p+1)),b=()=>{let _;return h?_=m:g?_=v:f.route.Component?_=M.createElement(f.route.Component,null):f.route.element?_=f.route.element:_=u,M.createElement(W5,{match:f,routeContext:{outlet:u,matches:x,isDataRoute:n!=null},children:_})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?M.createElement($5,{location:n.location,revalidation:n.revalidation,component:m,error:h,children:b(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):b()},null)}var WE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(WE||{}),ld=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(ld||{});function q5(t){let e=M.useContext(Wg);return e||bt(!1),e}function K5(t){let e=M.useContext(L5);return e||bt(!1),e}function G5(t){let e=M.useContext(Os);return e||bt(!1),e}function HE(t){let e=G5(),n=e.matches[e.matches.length-1];return n.route.id||bt(!1),n.route.id}function Q5(){var t;let e=M.useContext(UE),n=K5(ld.UseRouteError),r=HE(ld.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function X5(){let{router:t}=q5(WE.UseNavigateStable),e=HE(ld.UseNavigateStable),n=M.useRef(!1);return zE(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Il({fromRouteId:e},s)))},[t,e])}function Js(t){bt(!1)}function Y5(t){let{basename:e="/",children:n=null,location:r,navigationType:i=wi.Pop,navigator:s,static:o=!1,future:a}=t;Xl()&&bt(!1);let l=e.replace(/^\/*/,"/"),c=M.useMemo(()=>({basename:l,navigator:s,static:o,future:Il({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ns(r));let{pathname:u="/",search:f="",hash:p="",state:h=null,key:g="default"}=r,m=M.useMemo(()=>{let v=$g(u,l);return v==null?null:{location:{pathname:v,search:f,hash:p,state:h,key:g},navigationType:i}},[l,u,f,p,h,g,i]);return m==null?null:M.createElement(Ms.Provider,{value:c},M.createElement(rh.Provider,{children:n,value:m}))}function J5(t){let{children:e,location:n}=t;return B5(Jp(e),n)}new Promise(()=>{});function Jp(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,Jp(r.props.children,s));return}r.type!==Js&&bt(!1),!r.props.index||!r.props.children||bt(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Jp(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zp(){return Zp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Zp.apply(this,arguments)}function Z5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function eA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function tA(t,e){return t.button===0&&(!e||e==="_self")&&!eA(t)}const nA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],rA="6";try{window.__reactRouterVersion=rA}catch{}const iA="startTransition",_1=Z2[iA];function sA(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=d5({window:i,v5Compat:!0}));let o=s.current,[a,l]=M.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=M.useCallback(f=>{c&&_1?_1(()=>l(f)):l(f)},[l,c]);return M.useLayoutEffect(()=>o.listen(u),[o,u]),M.createElement(Y5,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const oA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,em=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:f}=e,p=Z5(e,nA),{basename:h}=M.useContext(Ms),g,m=!1;if(typeof c=="string"&&aA.test(c)&&(g=c,oA))try{let _=new URL(window.location.href),R=c.startsWith("//")?new URL(_.protocol+c):new URL(c),E=$g(R.pathname,h);R.origin===_.origin&&E!=null?c=E+R.search+R.hash:m=!0}catch{}let v=V5(c,{relative:i}),x=lA(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:i,viewTransition:f});function b(_){r&&r(_),_.defaultPrevented||x(_)}return M.createElement("a",Zp({},p,{href:g||v,onClick:m||s?r:b,ref:n,target:l}))});var E1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(E1||(E1={}));var T1;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(T1||(T1={}));function lA(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Ls(),c=ea(),u=$E(t,{relative:o});return M.useCallback(f=>{if(tA(f,n)){f.preventDefault();let p=r!==void 0?r:ad(c)===ad(u);l(t,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,u,r,i,n,t,s,o,a])}var S1={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},cA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},KE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,h=c&63;l||(h=64,o||(p=64)),r.push(n[u],n[f],n[p],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new uA;const p=s<<2|a>>4;if(r.push(p),c!==64){const h=a<<4&240|c>>2;if(r.push(h),f!==64){const g=c<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class uA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const dA=function(t){const e=qE(t);return KE.encodeByteArray(e,!0)},cd=function(t){return dA(t).replace(/\./g,"")},GE=function(t){try{return KE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=()=>hA().__FIREBASE_DEFAULTS__,pA=()=>{if(typeof process>"u"||typeof S1>"u")return;const t=S1.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},mA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&GE(t[1]);return e&&JSON.parse(e)},ih=()=>{try{return fA()||pA()||mA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},QE=t=>{var e,n;return(n=(e=ih())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gA=t=>{const e=QE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},XE=()=>{var t;return(t=ih())===null||t===void 0?void 0:t.config},YE=t=>{var e;return(e=ih())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[cd(JSON.stringify(n)),cd(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xA(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(on())}function bA(){var t;const e=(t=ih())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function wA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _A(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function EA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TA(){const t=on();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function SA(){return!bA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function kA(){try{return typeof indexedDB=="object"}catch{return!1}}function CA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="FirebaseError";class ti extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=PA,Object.setPrototypeOf(this,ti.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yl.prototype.create)}}class Yl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?IA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ti(i,a,r)}}function IA(t,e){return t.replace(AA,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const AA=/\{\$([^}]+)}/g;function RA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ud(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(k1(s)&&k1(o)){if(!ud(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function k1(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oa(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function La(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function DA(t,e){const n=new NA(t,e);return n.subscribe.bind(n)}class NA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Pf),i.error===void 0&&(i.error=Pf),i.complete===void 0&&(i.complete=Pf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Pf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(t){return t&&t._delegate?t._delegate:t}class Cs{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VA(e))try{this.getOrInitializeService({instanceIdentifier:cs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=cs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cs){return this.instances.has(e)}getOptions(e=cs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:LA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cs){return this.component?this.component.multipleInstances?e:cs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LA(t){return t===cs?void 0:t}function VA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new OA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Pe||(Pe={}));const BA={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},FA=Pe.INFO,UA={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},zA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=UA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hg{constructor(e){this.name=e,this._logLevel=FA,this._logHandler=zA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const $A=(t,e)=>e.some(n=>t instanceof n);let C1,P1;function WA(){return C1||(C1=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HA(){return P1||(P1=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const JE=new WeakMap,tm=new WeakMap,ZE=new WeakMap,If=new WeakMap,qg=new WeakMap;function qA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Di(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&JE.set(n,t)}).catch(()=>{}),qg.set(e,t),e}function KA(t){if(tm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});tm.set(t,e)}let nm={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ZE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Di(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function GA(t){nm=t(nm)}function QA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Af(this),e,...n);return ZE.set(r,e.sort?e.sort():[e]),Di(r)}:HA().includes(t)?function(...e){return t.apply(Af(this),e),Di(JE.get(this))}:function(...e){return Di(t.apply(Af(this),e))}}function XA(t){return typeof t=="function"?QA(t):(t instanceof IDBTransaction&&KA(t),$A(t,WA())?new Proxy(t,nm):t)}function Di(t){if(t instanceof IDBRequest)return qA(t);if(If.has(t))return If.get(t);const e=XA(t);return e!==t&&(If.set(t,e),qg.set(e,t)),e}const Af=t=>qg.get(t);function YA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Di(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Di(o.result),l.oldVersion,l.newVersion,Di(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const JA=["get","getKey","getAll","getAllKeys","count"],ZA=["put","add","delete","clear"],Rf=new Map;function I1(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Rf.get(e))return Rf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=ZA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||JA.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Rf.set(e,s),s}GA(t=>({...t,get:(e,n,r)=>I1(e,n)||t.get(e,n,r),has:(e,n)=>!!I1(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rm="@firebase/app",A1="0.10.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Hg("@firebase/app"),nR="@firebase/app-compat",rR="@firebase/analytics-compat",iR="@firebase/analytics",sR="@firebase/app-check-compat",oR="@firebase/app-check",aR="@firebase/auth",lR="@firebase/auth-compat",cR="@firebase/database",uR="@firebase/data-connect",dR="@firebase/database-compat",hR="@firebase/functions",fR="@firebase/functions-compat",pR="@firebase/installations",mR="@firebase/installations-compat",gR="@firebase/messaging",vR="@firebase/messaging-compat",yR="@firebase/performance",xR="@firebase/performance-compat",bR="@firebase/remote-config",wR="@firebase/remote-config-compat",_R="@firebase/storage",ER="@firebase/storage-compat",TR="@firebase/firestore",SR="@firebase/vertexai",kR="@firebase/firestore-compat",CR="firebase",PR="11.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const im="[DEFAULT]",IR={[rm]:"fire-core",[nR]:"fire-core-compat",[iR]:"fire-analytics",[rR]:"fire-analytics-compat",[oR]:"fire-app-check",[sR]:"fire-app-check-compat",[aR]:"fire-auth",[lR]:"fire-auth-compat",[cR]:"fire-rtdb",[uR]:"fire-data-connect",[dR]:"fire-rtdb-compat",[hR]:"fire-fn",[fR]:"fire-fn-compat",[pR]:"fire-iid",[mR]:"fire-iid-compat",[gR]:"fire-fcm",[vR]:"fire-fcm-compat",[yR]:"fire-perf",[xR]:"fire-perf-compat",[bR]:"fire-rc",[wR]:"fire-rc-compat",[_R]:"fire-gcs",[ER]:"fire-gcs-compat",[TR]:"fire-fst",[kR]:"fire-fst-compat",[SR]:"fire-vertex","fire-js":"fire-js",[CR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd=new Map,AR=new Map,sm=new Map;function R1(t,e){try{t.container.addComponent(e)}catch(n){Xr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fo(t){const e=t.name;if(sm.has(e))return Xr.debug(`There were multiple attempts to register component ${e}.`),!1;sm.set(e,t);for(const n of dd.values())R1(n,t);for(const n of AR.values())R1(n,t);return!0}function Kg(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mr(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ni=new Yl("app","Firebase",RR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ni.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ta=PR;function eT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:im,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ni.create("bad-app-name",{appName:String(i)});if(n||(n=XE()),!n)throw Ni.create("no-options");const s=dd.get(i);if(s){if(ud(n,s.options)&&ud(r,s.config))return s;throw Ni.create("duplicate-app",{appName:i})}const o=new jA(i);for(const l of sm.values())o.addComponent(l);const a=new DR(n,r,o);return dd.set(i,a),a}function tT(t=im){const e=dd.get(t);if(!e&&t===im&&XE())return eT();if(!e)throw Ni.create("no-app",{appName:t});return e}function Mi(t,e,n){var r;let i=(r=IR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xr.warn(a.join(" "));return}Fo(new Cs(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="firebase-heartbeat-database",MR=1,Al="firebase-heartbeat-store";let Df=null;function nT(){return Df||(Df=YA(NR,MR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Al)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ni.create("idb-open",{originalErrorMessage:t.message})})),Df}async function OR(t){try{const n=(await nT()).transaction(Al),r=await n.objectStore(Al).get(rT(t));return await n.done,r}catch(e){if(e instanceof ti)Xr.warn(e.message);else{const n=Ni.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xr.warn(n.message)}}}async function D1(t,e){try{const r=(await nT()).transaction(Al,"readwrite");await r.objectStore(Al).put(e,rT(t)),await r.done}catch(n){if(n instanceof ti)Xr.warn(n.message);else{const r=Ni.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xr.warn(r.message)}}}function rT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=1024,VR=30*24*60*60*1e3;class jR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=N1();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=VR}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Xr.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=N1(),{heartbeatsToSend:r,unsentEntries:i}=BR(this._heartbeatsCache.heartbeats),s=cd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Xr.warn(n),""}}}function N1(){return new Date().toISOString().substring(0,10)}function BR(t,e=LR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),M1(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),M1(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kA()?CA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return D1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return D1(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function M1(t){return cd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UR(t){Fo(new Cs("platform-logger",e=>new eR(e),"PRIVATE")),Fo(new Cs("heartbeat",e=>new jR(e),"PRIVATE")),Mi(rm,A1,t),Mi(rm,A1,"esm2017"),Mi("fire-js","")}UR("");var O1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bs,iT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function S(){}S.prototype=y.prototype,T.D=y.prototype,T.prototype=new S,T.prototype.constructor=T,T.C=function(k,I,D){for(var N=Array(arguments.length-2),B=2;B<arguments.length;B++)N[B-2]=arguments[B];return y.prototype[I].apply(k,N)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,S){S||(S=0);var k=Array(16);if(typeof y=="string")for(var I=0;16>I;++I)k[I]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(I=0;16>I;++I)k[I]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=T.g[0],S=T.g[1],I=T.g[2];var D=T.g[3],N=y+(D^S&(I^D))+k[0]+3614090360&4294967295;y=S+(N<<7&4294967295|N>>>25),N=D+(I^y&(S^I))+k[1]+3905402710&4294967295,D=y+(N<<12&4294967295|N>>>20),N=I+(S^D&(y^S))+k[2]+606105819&4294967295,I=D+(N<<17&4294967295|N>>>15),N=S+(y^I&(D^y))+k[3]+3250441966&4294967295,S=I+(N<<22&4294967295|N>>>10),N=y+(D^S&(I^D))+k[4]+4118548399&4294967295,y=S+(N<<7&4294967295|N>>>25),N=D+(I^y&(S^I))+k[5]+1200080426&4294967295,D=y+(N<<12&4294967295|N>>>20),N=I+(S^D&(y^S))+k[6]+2821735955&4294967295,I=D+(N<<17&4294967295|N>>>15),N=S+(y^I&(D^y))+k[7]+4249261313&4294967295,S=I+(N<<22&4294967295|N>>>10),N=y+(D^S&(I^D))+k[8]+1770035416&4294967295,y=S+(N<<7&4294967295|N>>>25),N=D+(I^y&(S^I))+k[9]+2336552879&4294967295,D=y+(N<<12&4294967295|N>>>20),N=I+(S^D&(y^S))+k[10]+4294925233&4294967295,I=D+(N<<17&4294967295|N>>>15),N=S+(y^I&(D^y))+k[11]+2304563134&4294967295,S=I+(N<<22&4294967295|N>>>10),N=y+(D^S&(I^D))+k[12]+1804603682&4294967295,y=S+(N<<7&4294967295|N>>>25),N=D+(I^y&(S^I))+k[13]+4254626195&4294967295,D=y+(N<<12&4294967295|N>>>20),N=I+(S^D&(y^S))+k[14]+2792965006&4294967295,I=D+(N<<17&4294967295|N>>>15),N=S+(y^I&(D^y))+k[15]+1236535329&4294967295,S=I+(N<<22&4294967295|N>>>10),N=y+(I^D&(S^I))+k[1]+4129170786&4294967295,y=S+(N<<5&4294967295|N>>>27),N=D+(S^I&(y^S))+k[6]+3225465664&4294967295,D=y+(N<<9&4294967295|N>>>23),N=I+(y^S&(D^y))+k[11]+643717713&4294967295,I=D+(N<<14&4294967295|N>>>18),N=S+(D^y&(I^D))+k[0]+3921069994&4294967295,S=I+(N<<20&4294967295|N>>>12),N=y+(I^D&(S^I))+k[5]+3593408605&4294967295,y=S+(N<<5&4294967295|N>>>27),N=D+(S^I&(y^S))+k[10]+38016083&4294967295,D=y+(N<<9&4294967295|N>>>23),N=I+(y^S&(D^y))+k[15]+3634488961&4294967295,I=D+(N<<14&4294967295|N>>>18),N=S+(D^y&(I^D))+k[4]+3889429448&4294967295,S=I+(N<<20&4294967295|N>>>12),N=y+(I^D&(S^I))+k[9]+568446438&4294967295,y=S+(N<<5&4294967295|N>>>27),N=D+(S^I&(y^S))+k[14]+3275163606&4294967295,D=y+(N<<9&4294967295|N>>>23),N=I+(y^S&(D^y))+k[3]+4107603335&4294967295,I=D+(N<<14&4294967295|N>>>18),N=S+(D^y&(I^D))+k[8]+1163531501&4294967295,S=I+(N<<20&4294967295|N>>>12),N=y+(I^D&(S^I))+k[13]+2850285829&4294967295,y=S+(N<<5&4294967295|N>>>27),N=D+(S^I&(y^S))+k[2]+4243563512&4294967295,D=y+(N<<9&4294967295|N>>>23),N=I+(y^S&(D^y))+k[7]+1735328473&4294967295,I=D+(N<<14&4294967295|N>>>18),N=S+(D^y&(I^D))+k[12]+2368359562&4294967295,S=I+(N<<20&4294967295|N>>>12),N=y+(S^I^D)+k[5]+4294588738&4294967295,y=S+(N<<4&4294967295|N>>>28),N=D+(y^S^I)+k[8]+2272392833&4294967295,D=y+(N<<11&4294967295|N>>>21),N=I+(D^y^S)+k[11]+1839030562&4294967295,I=D+(N<<16&4294967295|N>>>16),N=S+(I^D^y)+k[14]+4259657740&4294967295,S=I+(N<<23&4294967295|N>>>9),N=y+(S^I^D)+k[1]+2763975236&4294967295,y=S+(N<<4&4294967295|N>>>28),N=D+(y^S^I)+k[4]+1272893353&4294967295,D=y+(N<<11&4294967295|N>>>21),N=I+(D^y^S)+k[7]+4139469664&4294967295,I=D+(N<<16&4294967295|N>>>16),N=S+(I^D^y)+k[10]+3200236656&4294967295,S=I+(N<<23&4294967295|N>>>9),N=y+(S^I^D)+k[13]+681279174&4294967295,y=S+(N<<4&4294967295|N>>>28),N=D+(y^S^I)+k[0]+3936430074&4294967295,D=y+(N<<11&4294967295|N>>>21),N=I+(D^y^S)+k[3]+3572445317&4294967295,I=D+(N<<16&4294967295|N>>>16),N=S+(I^D^y)+k[6]+76029189&4294967295,S=I+(N<<23&4294967295|N>>>9),N=y+(S^I^D)+k[9]+3654602809&4294967295,y=S+(N<<4&4294967295|N>>>28),N=D+(y^S^I)+k[12]+3873151461&4294967295,D=y+(N<<11&4294967295|N>>>21),N=I+(D^y^S)+k[15]+530742520&4294967295,I=D+(N<<16&4294967295|N>>>16),N=S+(I^D^y)+k[2]+3299628645&4294967295,S=I+(N<<23&4294967295|N>>>9),N=y+(I^(S|~D))+k[0]+4096336452&4294967295,y=S+(N<<6&4294967295|N>>>26),N=D+(S^(y|~I))+k[7]+1126891415&4294967295,D=y+(N<<10&4294967295|N>>>22),N=I+(y^(D|~S))+k[14]+2878612391&4294967295,I=D+(N<<15&4294967295|N>>>17),N=S+(D^(I|~y))+k[5]+4237533241&4294967295,S=I+(N<<21&4294967295|N>>>11),N=y+(I^(S|~D))+k[12]+1700485571&4294967295,y=S+(N<<6&4294967295|N>>>26),N=D+(S^(y|~I))+k[3]+2399980690&4294967295,D=y+(N<<10&4294967295|N>>>22),N=I+(y^(D|~S))+k[10]+4293915773&4294967295,I=D+(N<<15&4294967295|N>>>17),N=S+(D^(I|~y))+k[1]+2240044497&4294967295,S=I+(N<<21&4294967295|N>>>11),N=y+(I^(S|~D))+k[8]+1873313359&4294967295,y=S+(N<<6&4294967295|N>>>26),N=D+(S^(y|~I))+k[15]+4264355552&4294967295,D=y+(N<<10&4294967295|N>>>22),N=I+(y^(D|~S))+k[6]+2734768916&4294967295,I=D+(N<<15&4294967295|N>>>17),N=S+(D^(I|~y))+k[13]+1309151649&4294967295,S=I+(N<<21&4294967295|N>>>11),N=y+(I^(S|~D))+k[4]+4149444226&4294967295,y=S+(N<<6&4294967295|N>>>26),N=D+(S^(y|~I))+k[11]+3174756917&4294967295,D=y+(N<<10&4294967295|N>>>22),N=I+(y^(D|~S))+k[2]+718787259&4294967295,I=D+(N<<15&4294967295|N>>>17),N=S+(D^(I|~y))+k[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(I+(N<<21&4294967295|N>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+D&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var S=y-this.blockSize,k=this.B,I=this.h,D=0;D<y;){if(I==0)for(;D<=S;)i(this,T,D),D+=this.blockSize;if(typeof T=="string"){for(;D<y;)if(k[I++]=T.charCodeAt(D++),I==this.blockSize){i(this,k),I=0;break}}else for(;D<y;)if(k[I++]=T[D++],I==this.blockSize){i(this,k),I=0;break}}this.h=I,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var S=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=S&255,S/=256;for(this.u(T),T=Array(16),y=S=0;4>y;++y)for(var k=0;32>k;k+=8)T[S++]=this.g[y]>>>k&255;return T};function s(T,y){var S=a;return Object.prototype.hasOwnProperty.call(S,T)?S[T]:S[T]=y(T)}function o(T,y){this.h=y;for(var S=[],k=!0,I=T.length-1;0<=I;I--){var D=T[I]|0;k&&D==y||(S[I]=D,k=!1)}this.g=S}var a={};function l(T){return-128<=T&&128>T?s(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return v(c(-T));for(var y=[],S=1,k=0;T>=S;k++)y[k]=T/S|0,S*=4294967296;return new o(y,0)}function u(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return v(u(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(y,8)),k=f,I=0;I<T.length;I+=8){var D=Math.min(8,T.length-I),N=parseInt(T.substring(I,I+D),y);8>D?(D=c(Math.pow(y,D)),k=k.j(D).add(c(N))):(k=k.j(S),k=k.add(c(N)))}return k}var f=l(0),p=l(1),h=l(16777216);t=o.prototype,t.m=function(){if(m(this))return-v(this).m();for(var T=0,y=1,S=0;S<this.g.length;S++){var k=this.i(S);T+=(0<=k?k:4294967296+k)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(g(this))return"0";if(m(this))return"-"+v(this).toString(T);for(var y=c(Math.pow(T,6)),S=this,k="";;){var I=R(S,y).g;S=x(S,I.j(y));var D=((0<S.g.length?S.g[0]:S.h)>>>0).toString(T);if(S=I,g(S))return D+k;for(;6>D.length;)D="0"+D;k=D+k}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function g(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function m(T){return T.h==-1}t.l=function(T){return T=x(this,T),m(T)?-1:g(T)?0:1};function v(T){for(var y=T.g.length,S=[],k=0;k<y;k++)S[k]=~T.g[k];return new o(S,~T.h).add(p)}t.abs=function(){return m(this)?v(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],k=0,I=0;I<=y;I++){var D=k+(this.i(I)&65535)+(T.i(I)&65535),N=(D>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);k=N>>>16,D&=65535,N&=65535,S[I]=N<<16|D}return new o(S,S[S.length-1]&-2147483648?-1:0)};function x(T,y){return T.add(v(y))}t.j=function(T){if(g(this)||g(T))return f;if(m(this))return m(T)?v(this).j(v(T)):v(v(this).j(T));if(m(T))return v(this.j(v(T)));if(0>this.l(h)&&0>T.l(h))return c(this.m()*T.m());for(var y=this.g.length+T.g.length,S=[],k=0;k<2*y;k++)S[k]=0;for(k=0;k<this.g.length;k++)for(var I=0;I<T.g.length;I++){var D=this.i(k)>>>16,N=this.i(k)&65535,B=T.i(I)>>>16,z=T.i(I)&65535;S[2*k+2*I]+=N*z,b(S,2*k+2*I),S[2*k+2*I+1]+=D*z,b(S,2*k+2*I+1),S[2*k+2*I+1]+=N*B,b(S,2*k+2*I+1),S[2*k+2*I+2]+=D*B,b(S,2*k+2*I+2)}for(k=0;k<y;k++)S[k]=S[2*k+1]<<16|S[2*k];for(k=y;k<2*y;k++)S[k]=0;return new o(S,0)};function b(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function _(T,y){this.g=T,this.h=y}function R(T,y){if(g(y))throw Error("division by zero");if(g(T))return new _(f,f);if(m(T))return y=R(v(T),y),new _(v(y.g),v(y.h));if(m(y))return y=R(T,v(y)),new _(v(y.g),y.h);if(30<T.g.length){if(m(T)||m(y))throw Error("slowDivide_ only works with positive integers.");for(var S=p,k=y;0>=k.l(T);)S=E(S),k=E(k);var I=A(S,1),D=A(k,1);for(k=A(k,2),S=A(S,2);!g(k);){var N=D.add(k);0>=N.l(T)&&(I=I.add(S),D=N),k=A(k,1),S=A(S,1)}return y=x(T,I.j(y)),new _(I,y)}for(I=f;0<=T.l(y);){for(S=Math.max(1,Math.floor(T.m()/y.m())),k=Math.ceil(Math.log(S)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),D=c(S),N=D.j(y);m(N)||0<N.l(T);)S-=k,D=c(S),N=D.j(y);g(D)&&(D=p),I=I.add(D),T=x(T,N)}return new _(I,T)}t.A=function(T){return R(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],k=0;k<y;k++)S[k]=this.i(k)&T.i(k);return new o(S,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],k=0;k<y;k++)S[k]=this.i(k)|T.i(k);return new o(S,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),S=[],k=0;k<y;k++)S[k]=this.i(k)^T.i(k);return new o(S,this.h^T.h)};function E(T){for(var y=T.g.length+1,S=[],k=0;k<y;k++)S[k]=T.i(k)<<1|T.i(k-1)>>>31;return new o(S,T.h)}function A(T,y){var S=y>>5;y%=32;for(var k=T.g.length-S,I=[],D=0;D<k;D++)I[D]=0<y?T.i(D+S)>>>y|T.i(D+S+1)<<32-y:T.i(D+S);return new o(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,iT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=u,bs=o}).apply(typeof O1<"u"?O1:typeof self<"u"?self:typeof window<"u"?window:{});var Qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sT,Va,oT,wu,om,aT,lT,cT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(d,w,P){return d==Array.prototype||d==Object.prototype||(d[w]=P.value),d};function n(d){d=[typeof globalThis=="object"&&globalThis,d,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qc=="object"&&Qc];for(var w=0;w<d.length;++w){var P=d[w];if(P&&P.Math==Math)return P}throw Error("Cannot find global object")}var r=n(this);function i(d,w){if(w)e:{var P=r;d=d.split(".");for(var O=0;O<d.length-1;O++){var L=d[O];if(!(L in P))break e;P=P[L]}d=d[d.length-1],O=P[d],w=w(O),w!=O&&w!=null&&e(P,d,{configurable:!0,writable:!0,value:w})}}function s(d,w){d instanceof String&&(d+="");var P=0,O=!1,L={next:function(){if(!O&&P<d.length){var j=P++;return{value:w(j,d[j]),done:!1}}return O=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}i("Array.prototype.values",function(d){return d||function(){return s(this,function(w,P){return P})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(d){var w=typeof d;return w=w!="object"?w:d?Array.isArray(d)?"array":w:"null",w=="array"||w=="object"&&typeof d.length=="number"}function c(d){var w=typeof d;return w=="object"&&d!=null||w=="function"}function u(d,w,P){return d.call.apply(d.bind,arguments)}function f(d,w,P){if(!d)throw Error();if(2<arguments.length){var O=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,O),d.apply(w,L)}}return function(){return d.apply(w,arguments)}}function p(d,w,P){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?u:f,p.apply(null,arguments)}function h(d,w){var P=Array.prototype.slice.call(arguments,1);return function(){var O=P.slice();return O.push.apply(O,arguments),d.apply(this,O)}}function g(d,w){function P(){}P.prototype=w.prototype,d.aa=w.prototype,d.prototype=new P,d.prototype.constructor=d,d.Qb=function(O,L,j){for(var Y=Array(arguments.length-2),Ke=2;Ke<arguments.length;Ke++)Y[Ke-2]=arguments[Ke];return w.prototype[L].apply(O,Y)}}function m(d){const w=d.length;if(0<w){const P=Array(w);for(let O=0;O<w;O++)P[O]=d[O];return P}return[]}function v(d,w){for(let P=1;P<arguments.length;P++){const O=arguments[P];if(l(O)){const L=d.length||0,j=O.length||0;d.length=L+j;for(let Y=0;Y<j;Y++)d[L+Y]=O[Y]}else d.push(O)}}class x{constructor(w,P){this.i=w,this.j=P,this.h=0,this.g=null}get(){let w;return 0<this.h?(this.h--,w=this.g,this.g=w.next,w.next=null):w=this.i(),w}}function b(d){return/^[\s\xa0]*$/.test(d)}function _(){var d=a.navigator;return d&&(d=d.userAgent)?d:""}function R(d){return R[" "](d),d}R[" "]=function(){};var E=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function A(d,w,P){for(const O in d)w.call(P,d[O],O,d)}function T(d,w){for(const P in d)w.call(void 0,d[P],P,d)}function y(d){const w={};for(const P in d)w[P]=d[P];return w}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(d,w){let P,O;for(let L=1;L<arguments.length;L++){O=arguments[L];for(P in O)d[P]=O[P];for(let j=0;j<S.length;j++)P=S[j],Object.prototype.hasOwnProperty.call(O,P)&&(d[P]=O[P])}}function I(d){var w=1;d=d.split(":");const P=[];for(;0<w&&d.length;)P.push(d.shift()),w--;return d.length&&P.push(d.join(":")),P}function D(d){a.setTimeout(()=>{throw d},0)}function N(){var d=W;let w=null;return d.g&&(w=d.g,d.g=d.g.next,d.g||(d.h=null),w.next=null),w}class B{constructor(){this.h=this.g=null}add(w,P){const O=z.get();O.set(w,P),this.h?this.h.next=O:this.g=O,this.h=O}}var z=new x(()=>new J,d=>d.reset());class J{constructor(){this.next=this.g=this.h=null}set(w,P){this.h=w,this.g=P,this.next=null}reset(){this.next=this.g=this.h=null}}let F,V=!1,W=new B,K=()=>{const d=a.Promise.resolve(void 0);F=()=>{d.then(oe)}};var oe=()=>{for(var d;d=N();){try{d.h.call(d.g)}catch(P){D(P)}var w=z;w.j(d),100>w.h&&(w.h++,d.next=w.g,w.g=d)}V=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(d,w){this.type=d,this.g=this.target=w,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var Le=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var d=!1,w=Object.defineProperty({},"passive",{get:function(){d=!0}});try{const P=()=>{};a.addEventListener("test",P,w),a.removeEventListener("test",P,w)}catch{}return d}();function Re(d,w){if(le.call(this,d?d.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,d){var P=this.type=d.type,O=d.changedTouches&&d.changedTouches.length?d.changedTouches[0]:null;if(this.target=d.target||d.srcElement,this.g=w,w=d.relatedTarget){if(E){e:{try{R(w.nodeName);var L=!0;break e}catch{}L=!1}L||(w=null)}}else P=="mouseover"?w=d.fromElement:P=="mouseout"&&(w=d.toElement);this.relatedTarget=w,O?(this.clientX=O.clientX!==void 0?O.clientX:O.pageX,this.clientY=O.clientY!==void 0?O.clientY:O.pageY,this.screenX=O.screenX||0,this.screenY=O.screenY||0):(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0),this.button=d.button,this.key=d.key||"",this.ctrlKey=d.ctrlKey,this.altKey=d.altKey,this.shiftKey=d.shiftKey,this.metaKey=d.metaKey,this.pointerId=d.pointerId||0,this.pointerType=typeof d.pointerType=="string"?d.pointerType:se[d.pointerType]||"",this.state=d.state,this.i=d,d.defaultPrevented&&Re.aa.h.call(this)}}g(Re,le);var se={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var d=this.i;d.preventDefault?d.preventDefault():d.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Ee=0;function Xe(d,w,P,O,L){this.listener=d,this.proxy=null,this.src=w,this.type=P,this.capture=!!O,this.ha=L,this.key=++Ee,this.da=this.fa=!1}function he(d){d.da=!0,d.listener=null,d.proxy=null,d.src=null,d.ha=null}function qe(d){this.src=d,this.g={},this.h=0}qe.prototype.add=function(d,w,P,O,L){var j=d.toString();d=this.g[j],d||(d=this.g[j]=[],this.h++);var Y=Ct(d,w,O,L);return-1<Y?(w=d[Y],P||(w.fa=!1)):(w=new Xe(w,this.src,j,!!O,L),w.fa=P,d.push(w)),w};function Ae(d,w){var P=w.type;if(P in d.g){var O=d.g[P],L=Array.prototype.indexOf.call(O,w,void 0),j;(j=0<=L)&&Array.prototype.splice.call(O,L,1),j&&(he(w),d.g[P].length==0&&(delete d.g[P],d.h--))}}function Ct(d,w,P,O){for(var L=0;L<d.length;++L){var j=d[L];if(!j.da&&j.listener==w&&j.capture==!!P&&j.ha==O)return L}return-1}var rt="closure_lm_"+(1e6*Math.random()|0),Pt={};function ht(d,w,P,O,L){if(Array.isArray(w)){for(var j=0;j<w.length;j++)ht(d,w[j],P,O,L);return null}return P=Q(P),d&&d[De]?d.K(w,P,c(O)?!!O.capture:!!O,L):an(d,w,P,!1,O,L)}function an(d,w,P,O,L,j){if(!w)throw Error("Invalid event type");var Y=c(L)?!!L.capture:!!L,Ke=Ce(d);if(Ke||(d[rt]=Ke=new qe(d)),P=Ke.add(w,P,O,Y,j),P.proxy)return P;if(O=Z(),P.proxy=O,O.src=d,O.listener=P,d.addEventListener)Le||(L=Y),L===void 0&&(L=!1),d.addEventListener(w.toString(),O,L);else if(d.attachEvent)d.attachEvent(Te(w.toString()),O);else if(d.addListener&&d.removeListener)d.addListener(O);else throw Error("addEventListener and attachEvent are unavailable.");return P}function Z(){function d(P){return w.call(d.src,d.listener,P)}const w=Ne;return d}function te(d,w,P,O,L){if(Array.isArray(w))for(var j=0;j<w.length;j++)te(d,w[j],P,O,L);else O=c(O)?!!O.capture:!!O,P=Q(P),d&&d[De]?(d=d.i,w=String(w).toString(),w in d.g&&(j=d.g[w],P=Ct(j,P,O,L),-1<P&&(he(j[P]),Array.prototype.splice.call(j,P,1),j.length==0&&(delete d.g[w],d.h--)))):d&&(d=Ce(d))&&(w=d.g[w.toString()],d=-1,w&&(d=Ct(w,P,O,L)),(P=-1<d?w[d]:null)&&me(P))}function me(d){if(typeof d!="number"&&d&&!d.da){var w=d.src;if(w&&w[De])Ae(w.i,d);else{var P=d.type,O=d.proxy;w.removeEventListener?w.removeEventListener(P,O,d.capture):w.detachEvent?w.detachEvent(Te(P),O):w.addListener&&w.removeListener&&w.removeListener(O),(P=Ce(w))?(Ae(P,d),P.h==0&&(P.src=null,w[rt]=null)):he(d)}}}function Te(d){return d in Pt?Pt[d]:Pt[d]="on"+d}function Ne(d,w){if(d.da)d=!0;else{w=new Re(w,this);var P=d.listener,O=d.ha||d.src;d.fa&&me(d),d=P.call(O,w)}return d}function Ce(d){return d=d[rt],d instanceof qe?d:null}var Se="__closure_events_fn_"+(1e9*Math.random()>>>0);function Q(d){return typeof d=="function"?d:(d[Se]||(d[Se]=function(w){return d.handleEvent(w)}),d[Se])}function G(){re.call(this),this.i=new qe(this),this.M=this,this.F=null}g(G,re),G.prototype[De]=!0,G.prototype.removeEventListener=function(d,w,P,O){te(this,d,w,P,O)};function ee(d,w){var P,O=d.F;if(O)for(P=[];O;O=O.F)P.push(O);if(d=d.M,O=w.type||w,typeof w=="string")w=new le(w,d);else if(w instanceof le)w.target=w.target||d;else{var L=w;w=new le(O,d),k(w,L)}if(L=!0,P)for(var j=P.length-1;0<=j;j--){var Y=w.g=P[j];L=de(Y,O,!0,w)&&L}if(Y=w.g=d,L=de(Y,O,!0,w)&&L,L=de(Y,O,!1,w)&&L,P)for(j=0;j<P.length;j++)Y=w.g=P[j],L=de(Y,O,!1,w)&&L}G.prototype.N=function(){if(G.aa.N.call(this),this.i){var d=this.i,w;for(w in d.g){for(var P=d.g[w],O=0;O<P.length;O++)he(P[O]);delete d.g[w],d.h--}}this.F=null},G.prototype.K=function(d,w,P,O){return this.i.add(String(d),w,!1,P,O)},G.prototype.L=function(d,w,P,O){return this.i.add(String(d),w,!0,P,O)};function de(d,w,P,O){if(w=d.i.g[String(w)],!w)return!0;w=w.concat();for(var L=!0,j=0;j<w.length;++j){var Y=w[j];if(Y&&!Y.da&&Y.capture==P){var Ke=Y.listener,Lt=Y.ha||Y.src;Y.fa&&Ae(d.i,Y),L=Ke.call(Lt,O)!==!1&&L}}return L&&!O.defaultPrevented}function U(d,w,P){if(typeof d=="function")P&&(d=p(d,P));else if(d&&typeof d.handleEvent=="function")d=p(d.handleEvent,d);else throw Error("Invalid listener argument");return 2147483647<Number(w)?-1:a.setTimeout(d,w||0)}function X(d){d.g=U(()=>{d.g=null,d.i&&(d.i=!1,X(d))},d.l);const w=d.h;d.h=null,d.m.apply(null,w)}class ge extends re{constructor(w,P){super(),this.m=w,this.l=P,this.h=null,this.i=!1,this.g=null}j(w){this.h=arguments,this.g?this.i=!0:X(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function We(d){re.call(this),this.h=d,this.g={}}g(We,re);var vt=[];function ln(d){A(d.g,function(w,P){this.g.hasOwnProperty(P)&&me(w)},d),d.g={}}We.prototype.N=function(){We.aa.N.call(this),ln(this)},We.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cn=a.JSON.stringify,ts=a.JSON.parse,$s=class{stringify(d){return a.JSON.stringify(d,void 0)}parse(d){return a.JSON.parse(d,void 0)}};function ha(){}ha.prototype.h=null;function mc(d){return d.h||(d.h=d.i())}function gc(){}var it={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mt(){le.call(this,"d")}g(Mt,le);function Ot(){le.call(this,"c")}g(Ot,le);var Ht={},un=null;function qt(){return un=un||new G}Ht.La="serverreachability";function Sn(d){le.call(this,Ht.La,d)}g(Sn,le);function Ln(d){const w=qt();ee(w,new Sn(w))}Ht.STAT_EVENT="statevent";function mn(d,w){le.call(this,Ht.STAT_EVENT,d),this.stat=w}g(mn,le);function ft(d){const w=qt();ee(w,new mn(w,d))}Ht.Ma="timingevent";function ni(d,w){le.call(this,Ht.Ma,d),this.size=w}g(ni,le);function cr(d,w){if(typeof d!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){d()},w)}function ur(){this.g=!0}ur.prototype.xa=function(){this.g=!1};function vc(d,w,P,O,L,j){d.info(function(){if(d.g)if(j)for(var Y="",Ke=j.split("&"),Lt=0;Lt<Ke.length;Lt++){var Be=Ke[Lt].split("=");if(1<Be.length){var Kt=Be[0];Be=Be[1];var Gt=Kt.split("_");Y=2<=Gt.length&&Gt[1]=="type"?Y+(Kt+"="+Be+"&"):Y+(Kt+"=redacted&")}}else Y=null;else Y=j;return"XMLHTTP REQ ("+O+") [attempt "+L+"]: "+w+`
`+P+`
`+Y})}function ns(d,w,P,O,L,j,Y){d.info(function(){return"XMLHTTP RESP ("+O+") [ attempt "+L+"]: "+w+`
`+P+`
`+j+" "+Y})}function Vn(d,w,P,O){d.info(function(){return"XMLHTTP TEXT ("+w+"): "+v2(d,P)+(O?" "+O:"")})}function fa(d,w){d.info(function(){return"TIMEOUT: "+w})}ur.prototype.info=function(){};function v2(d,w){if(!d.g)return w;if(!w)return null;try{var P=JSON.parse(w);if(P){for(d=0;d<P.length;d++)if(Array.isArray(P[d])){var O=P[d];if(!(2>O.length)){var L=O[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var Y=1;Y<L.length;Y++)L[Y]=""}}}}return cn(P)}catch{return w}}var yc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ev={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Uh;function xc(){}g(xc,ha),xc.prototype.g=function(){return new XMLHttpRequest},xc.prototype.i=function(){return{}},Uh=new xc;function ri(d,w,P,O){this.j=d,this.i=w,this.l=P,this.R=O||1,this.U=new We(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tv}function Tv(){this.i=null,this.g="",this.h=!1}var Sv={},zh={};function $h(d,w,P){d.L=1,d.v=Ec(Pr(w)),d.m=P,d.P=!0,kv(d,null)}function kv(d,w){d.F=Date.now(),bc(d),d.A=Pr(d.v);var P=d.A,O=d.R;Array.isArray(O)||(O=[String(O)]),Fv(P.i,"t",O),d.C=0,P=d.j.J,d.h=new Tv,d.g=iy(d.j,P?w:null,!d.m),0<d.O&&(d.M=new ge(p(d.Y,d,d.g),d.O)),w=d.U,P=d.g,O=d.ca;var L="readystatechange";Array.isArray(L)||(L&&(vt[0]=L.toString()),L=vt);for(var j=0;j<L.length;j++){var Y=ht(P,L[j],O||w.handleEvent,!1,w.h||w);if(!Y)break;w.g[Y.key]=Y}w=d.H?y(d.H):{},d.m?(d.u||(d.u="POST"),w["Content-Type"]="application/x-www-form-urlencoded",d.g.ea(d.A,d.u,d.m,w)):(d.u="GET",d.g.ea(d.A,d.u,null,w)),Ln(),vc(d.i,d.u,d.A,d.l,d.R,d.m)}ri.prototype.ca=function(d){d=d.target;const w=this.M;w&&Ir(d)==3?w.j():this.Y(d)},ri.prototype.Y=function(d){try{if(d==this.g)e:{const Gt=Ir(this.g);var w=this.g.Ba();const qs=this.g.Z();if(!(3>Gt)&&(Gt!=3||this.g&&(this.h.h||this.g.oa()||Kv(this.g)))){this.J||Gt!=4||w==7||(w==8||0>=qs?Ln(3):Ln(2)),Wh(this);var P=this.g.Z();this.X=P;t:if(Cv(this)){var O=Kv(this.g);d="";var L=O.length,j=Ir(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rs(this),pa(this);var Y="";break t}this.h.i=new a.TextDecoder}for(w=0;w<L;w++)this.h.h=!0,d+=this.h.i.decode(O[w],{stream:!(j&&w==L-1)});O.length=0,this.h.g+=d,this.C=0,Y=this.h.g}else Y=this.g.oa();if(this.o=P==200,ns(this.i,this.u,this.A,this.l,this.R,Gt,P),this.o){if(this.T&&!this.K){t:{if(this.g){var Ke,Lt=this.g;if((Ke=Lt.g?Lt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(Ke)){var Be=Ke;break t}}Be=null}if(P=Be)Vn(this.i,this.l,P,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hh(this,P);else{this.o=!1,this.s=3,ft(12),rs(this),pa(this);break e}}if(this.P){P=!0;let Kn;for(;!this.J&&this.C<Y.length;)if(Kn=y2(this,Y),Kn==zh){Gt==4&&(this.s=4,ft(14),P=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(Kn==Sv){this.s=4,ft(15),Vn(this.i,this.l,Y,"[Invalid Chunk]"),P=!1;break}else Vn(this.i,this.l,Kn,null),Hh(this,Kn);if(Cv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Gt!=4||Y.length!=0||this.h.h||(this.s=1,ft(16),P=!1),this.o=this.o&&P,!P)Vn(this.i,this.l,Y,"[Invalid Chunked Response]"),rs(this),pa(this);else if(0<Y.length&&!this.W){this.W=!0;var Kt=this.j;Kt.g==this&&Kt.ba&&!Kt.M&&(Kt.j.info("Great, no buffering proxy detected. Bytes received: "+Y.length),Yh(Kt),Kt.M=!0,ft(11))}}else Vn(this.i,this.l,Y,null),Hh(this,Y);Gt==4&&rs(this),this.o&&!this.J&&(Gt==4?ey(this.j,this):(this.o=!1,bc(this)))}else O2(this.g),P==400&&0<Y.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),rs(this),pa(this)}}}catch{}finally{}};function Cv(d){return d.g?d.u=="GET"&&d.L!=2&&d.j.Ca:!1}function y2(d,w){var P=d.C,O=w.indexOf(`
`,P);return O==-1?zh:(P=Number(w.substring(P,O)),isNaN(P)?Sv:(O+=1,O+P>w.length?zh:(w=w.slice(O,O+P),d.C=O+P,w)))}ri.prototype.cancel=function(){this.J=!0,rs(this)};function bc(d){d.S=Date.now()+d.I,Pv(d,d.I)}function Pv(d,w){if(d.B!=null)throw Error("WatchDog timer not null");d.B=cr(p(d.ba,d),w)}function Wh(d){d.B&&(a.clearTimeout(d.B),d.B=null)}ri.prototype.ba=function(){this.B=null;const d=Date.now();0<=d-this.S?(fa(this.i,this.A),this.L!=2&&(Ln(),ft(17)),rs(this),this.s=2,pa(this)):Pv(this,this.S-d)};function pa(d){d.j.G==0||d.J||ey(d.j,d)}function rs(d){Wh(d);var w=d.M;w&&typeof w.ma=="function"&&w.ma(),d.M=null,ln(d.U),d.g&&(w=d.g,d.g=null,w.abort(),w.ma())}function Hh(d,w){try{var P=d.j;if(P.G!=0&&(P.g==d||qh(P.h,d))){if(!d.K&&qh(P.h,d)&&P.G==3){try{var O=P.Da.g.parse(w)}catch{O=null}if(Array.isArray(O)&&O.length==3){var L=O;if(L[0]==0){e:if(!P.u){if(P.g)if(P.g.F+3e3<d.F)Ic(P),Cc(P);else break e;Xh(P),ft(18)}}else P.za=L[1],0<P.za-P.T&&37500>L[2]&&P.F&&P.v==0&&!P.C&&(P.C=cr(p(P.Za,P),6e3));if(1>=Rv(P.h)&&P.ca){try{P.ca()}catch{}P.ca=void 0}}else ss(P,11)}else if((d.K||P.g==d)&&Ic(P),!b(w))for(L=P.Da.g.parse(w),w=0;w<L.length;w++){let Be=L[w];if(P.T=Be[0],Be=Be[1],P.G==2)if(Be[0]=="c"){P.K=Be[1],P.ia=Be[2];const Kt=Be[3];Kt!=null&&(P.la=Kt,P.j.info("VER="+P.la));const Gt=Be[4];Gt!=null&&(P.Aa=Gt,P.j.info("SVER="+P.Aa));const qs=Be[5];qs!=null&&typeof qs=="number"&&0<qs&&(O=1.5*qs,P.L=O,P.j.info("backChannelRequestTimeoutMs_="+O)),O=P;const Kn=d.g;if(Kn){const Rc=Kn.g?Kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Rc){var j=O.h;j.g||Rc.indexOf("spdy")==-1&&Rc.indexOf("quic")==-1&&Rc.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Kh(j,j.h),j.h=null))}if(O.D){const Jh=Kn.g?Kn.g.getResponseHeader("X-HTTP-Session-Id"):null;Jh&&(O.ya=Jh,Ye(O.I,O.D,Jh))}}P.G=3,P.l&&P.l.ua(),P.ba&&(P.R=Date.now()-d.F,P.j.info("Handshake RTT: "+P.R+"ms")),O=P;var Y=d;if(O.qa=ry(O,O.J?O.ia:null,O.W),Y.K){Dv(O.h,Y);var Ke=Y,Lt=O.L;Lt&&(Ke.I=Lt),Ke.B&&(Wh(Ke),bc(Ke)),O.g=Y}else Jv(O);0<P.i.length&&Pc(P)}else Be[0]!="stop"&&Be[0]!="close"||ss(P,7);else P.G==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?ss(P,7):Qh(P):Be[0]!="noop"&&P.l&&P.l.ta(Be),P.v=0)}}Ln(4)}catch{}}var x2=class{constructor(d,w){this.g=d,this.map=w}};function Iv(d){this.l=d||10,a.PerformanceNavigationTiming?(d=a.performance.getEntriesByType("navigation"),d=0<d.length&&(d[0].nextHopProtocol=="hq"||d[0].nextHopProtocol=="h2")):d=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=d?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Av(d){return d.h?!0:d.g?d.g.size>=d.j:!1}function Rv(d){return d.h?1:d.g?d.g.size:0}function qh(d,w){return d.h?d.h==w:d.g?d.g.has(w):!1}function Kh(d,w){d.g?d.g.add(w):d.h=w}function Dv(d,w){d.h&&d.h==w?d.h=null:d.g&&d.g.has(w)&&d.g.delete(w)}Iv.prototype.cancel=function(){if(this.i=Nv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const d of this.g.values())d.cancel();this.g.clear()}};function Nv(d){if(d.h!=null)return d.i.concat(d.h.D);if(d.g!=null&&d.g.size!==0){let w=d.i;for(const P of d.g.values())w=w.concat(P.D);return w}return m(d.i)}function b2(d){if(d.V&&typeof d.V=="function")return d.V();if(typeof Map<"u"&&d instanceof Map||typeof Set<"u"&&d instanceof Set)return Array.from(d.values());if(typeof d=="string")return d.split("");if(l(d)){for(var w=[],P=d.length,O=0;O<P;O++)w.push(d[O]);return w}w=[],P=0;for(O in d)w[P++]=d[O];return w}function w2(d){if(d.na&&typeof d.na=="function")return d.na();if(!d.V||typeof d.V!="function"){if(typeof Map<"u"&&d instanceof Map)return Array.from(d.keys());if(!(typeof Set<"u"&&d instanceof Set)){if(l(d)||typeof d=="string"){var w=[];d=d.length;for(var P=0;P<d;P++)w.push(P);return w}w=[],P=0;for(const O in d)w[P++]=O;return w}}}function Mv(d,w){if(d.forEach&&typeof d.forEach=="function")d.forEach(w,void 0);else if(l(d)||typeof d=="string")Array.prototype.forEach.call(d,w,void 0);else for(var P=w2(d),O=b2(d),L=O.length,j=0;j<L;j++)w.call(void 0,O[j],P&&P[j],d)}var Ov=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _2(d,w){if(d){d=d.split("&");for(var P=0;P<d.length;P++){var O=d[P].indexOf("="),L=null;if(0<=O){var j=d[P].substring(0,O);L=d[P].substring(O+1)}else j=d[P];w(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function is(d){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,d instanceof is){this.h=d.h,wc(this,d.j),this.o=d.o,this.g=d.g,_c(this,d.s),this.l=d.l;var w=d.i,P=new va;P.i=w.i,w.g&&(P.g=new Map(w.g),P.h=w.h),Lv(this,P),this.m=d.m}else d&&(w=String(d).match(Ov))?(this.h=!1,wc(this,w[1]||"",!0),this.o=ma(w[2]||""),this.g=ma(w[3]||"",!0),_c(this,w[4]),this.l=ma(w[5]||"",!0),Lv(this,w[6]||"",!0),this.m=ma(w[7]||"")):(this.h=!1,this.i=new va(null,this.h))}is.prototype.toString=function(){var d=[],w=this.j;w&&d.push(ga(w,Vv,!0),":");var P=this.g;return(P||w=="file")&&(d.push("//"),(w=this.o)&&d.push(ga(w,Vv,!0),"@"),d.push(encodeURIComponent(String(P)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),P=this.s,P!=null&&d.push(":",String(P))),(P=this.l)&&(this.g&&P.charAt(0)!="/"&&d.push("/"),d.push(ga(P,P.charAt(0)=="/"?S2:T2,!0))),(P=this.i.toString())&&d.push("?",P),(P=this.m)&&d.push("#",ga(P,C2)),d.join("")};function Pr(d){return new is(d)}function wc(d,w,P){d.j=P?ma(w,!0):w,d.j&&(d.j=d.j.replace(/:$/,""))}function _c(d,w){if(w){if(w=Number(w),isNaN(w)||0>w)throw Error("Bad port number "+w);d.s=w}else d.s=null}function Lv(d,w,P){w instanceof va?(d.i=w,P2(d.i,d.h)):(P||(w=ga(w,k2)),d.i=new va(w,d.h))}function Ye(d,w,P){d.i.set(w,P)}function Ec(d){return Ye(d,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),d}function ma(d,w){return d?w?decodeURI(d.replace(/%25/g,"%2525")):decodeURIComponent(d):""}function ga(d,w,P){return typeof d=="string"?(d=encodeURI(d).replace(w,E2),P&&(d=d.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d):null}function E2(d){return d=d.charCodeAt(0),"%"+(d>>4&15).toString(16)+(d&15).toString(16)}var Vv=/[#\/\?@]/g,T2=/[#\?:]/g,S2=/[#\?]/g,k2=/[#\?@]/g,C2=/#/g;function va(d,w){this.h=this.g=null,this.i=d||null,this.j=!!w}function ii(d){d.g||(d.g=new Map,d.h=0,d.i&&_2(d.i,function(w,P){d.add(decodeURIComponent(w.replace(/\+/g," ")),P)}))}t=va.prototype,t.add=function(d,w){ii(this),this.i=null,d=Ws(this,d);var P=this.g.get(d);return P||this.g.set(d,P=[]),P.push(w),this.h+=1,this};function jv(d,w){ii(d),w=Ws(d,w),d.g.has(w)&&(d.i=null,d.h-=d.g.get(w).length,d.g.delete(w))}function Bv(d,w){return ii(d),w=Ws(d,w),d.g.has(w)}t.forEach=function(d,w){ii(this),this.g.forEach(function(P,O){P.forEach(function(L){d.call(w,L,O,this)},this)},this)},t.na=function(){ii(this);const d=Array.from(this.g.values()),w=Array.from(this.g.keys()),P=[];for(let O=0;O<w.length;O++){const L=d[O];for(let j=0;j<L.length;j++)P.push(w[O])}return P},t.V=function(d){ii(this);let w=[];if(typeof d=="string")Bv(this,d)&&(w=w.concat(this.g.get(Ws(this,d))));else{d=Array.from(this.g.values());for(let P=0;P<d.length;P++)w=w.concat(d[P])}return w},t.set=function(d,w){return ii(this),this.i=null,d=Ws(this,d),Bv(this,d)&&(this.h-=this.g.get(d).length),this.g.set(d,[w]),this.h+=1,this},t.get=function(d,w){return d?(d=this.V(d),0<d.length?String(d[0]):w):w};function Fv(d,w,P){jv(d,w),0<P.length&&(d.i=null,d.g.set(Ws(d,w),m(P)),d.h+=P.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const d=[],w=Array.from(this.g.keys());for(var P=0;P<w.length;P++){var O=w[P];const j=encodeURIComponent(String(O)),Y=this.V(O);for(O=0;O<Y.length;O++){var L=j;Y[O]!==""&&(L+="="+encodeURIComponent(String(Y[O]))),d.push(L)}}return this.i=d.join("&")};function Ws(d,w){return w=String(w),d.j&&(w=w.toLowerCase()),w}function P2(d,w){w&&!d.j&&(ii(d),d.i=null,d.g.forEach(function(P,O){var L=O.toLowerCase();O!=L&&(jv(this,O),Fv(this,L,P))},d)),d.j=w}function I2(d,w){const P=new ur;if(a.Image){const O=new Image;O.onload=h(si,P,"TestLoadImage: loaded",!0,w,O),O.onerror=h(si,P,"TestLoadImage: error",!1,w,O),O.onabort=h(si,P,"TestLoadImage: abort",!1,w,O),O.ontimeout=h(si,P,"TestLoadImage: timeout",!1,w,O),a.setTimeout(function(){O.ontimeout&&O.ontimeout()},1e4),O.src=d}else w(!1)}function A2(d,w){const P=new ur,O=new AbortController,L=setTimeout(()=>{O.abort(),si(P,"TestPingServer: timeout",!1,w)},1e4);fetch(d,{signal:O.signal}).then(j=>{clearTimeout(L),j.ok?si(P,"TestPingServer: ok",!0,w):si(P,"TestPingServer: server error",!1,w)}).catch(()=>{clearTimeout(L),si(P,"TestPingServer: error",!1,w)})}function si(d,w,P,O,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),O(P)}catch{}}function R2(){this.g=new $s}function D2(d,w,P){const O=P||"";try{Mv(d,function(L,j){let Y=L;c(L)&&(Y=cn(L)),w.push(O+j+"="+encodeURIComponent(Y))})}catch(L){throw w.push(O+"type="+encodeURIComponent("_badmap")),L}}function Tc(d){this.l=d.Ub||null,this.j=d.eb||!1}g(Tc,ha),Tc.prototype.g=function(){return new Sc(this.l,this.j)},Tc.prototype.i=function(d){return function(){return d}}({});function Sc(d,w){G.call(this),this.D=d,this.o=w,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}g(Sc,G),t=Sc.prototype,t.open=function(d,w){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=d,this.A=w,this.readyState=1,xa(this)},t.send=function(d){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const w={headers:this.u,method:this.B,credentials:this.m,cache:void 0};d&&(w.body=d),(this.D||a).fetch(new Request(this.A,w)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ya(this)),this.readyState=0},t.Sa=function(d){if(this.g&&(this.l=d,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=d.headers,this.readyState=2,xa(this)),this.g&&(this.readyState=3,xa(this),this.g)))if(this.responseType==="arraybuffer")d.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in d){if(this.j=d.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Uv(this)}else d.text().then(this.Ra.bind(this),this.ga.bind(this))};function Uv(d){d.j.read().then(d.Pa.bind(d)).catch(d.ga.bind(d))}t.Pa=function(d){if(this.g){if(this.o&&d.value)this.response.push(d.value);else if(!this.o){var w=d.value?d.value:new Uint8Array(0);(w=this.v.decode(w,{stream:!d.done}))&&(this.response=this.responseText+=w)}d.done?ya(this):xa(this),this.readyState==3&&Uv(this)}},t.Ra=function(d){this.g&&(this.response=this.responseText=d,ya(this))},t.Qa=function(d){this.g&&(this.response=d,ya(this))},t.ga=function(){this.g&&ya(this)};function ya(d){d.readyState=4,d.l=null,d.j=null,d.v=null,xa(d)}t.setRequestHeader=function(d,w){this.u.append(d,w)},t.getResponseHeader=function(d){return this.h&&this.h.get(d.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const d=[],w=this.h.entries();for(var P=w.next();!P.done;)P=P.value,d.push(P[0]+": "+P[1]),P=w.next();return d.join(`\r
`)};function xa(d){d.onreadystatechange&&d.onreadystatechange.call(d)}Object.defineProperty(Sc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(d){this.m=d?"include":"same-origin"}});function zv(d){let w="";return A(d,function(P,O){w+=O,w+=":",w+=P,w+=`\r
`}),w}function Gh(d,w,P){e:{for(O in P){var O=!1;break e}O=!0}O||(P=zv(P),typeof d=="string"?P!=null&&encodeURIComponent(String(P)):Ye(d,w,P))}function ut(d){G.call(this),this.headers=new Map,this.o=d||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}g(ut,G);var N2=/^https?$/i,M2=["POST","PUT"];t=ut.prototype,t.Ha=function(d){this.J=d},t.ea=function(d,w,P,O){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+d);w=w?w.toUpperCase():"GET",this.D=d,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Uh.g(),this.v=this.o?mc(this.o):mc(Uh),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(w,String(d),!0),this.B=!1}catch(j){$v(this,j);return}if(d=P||"",P=new Map(this.headers),O)if(Object.getPrototypeOf(O)===Object.prototype)for(var L in O)P.set(L,O[L]);else if(typeof O.keys=="function"&&typeof O.get=="function")for(const j of O.keys())P.set(j,O.get(j));else throw Error("Unknown input type for opt_headers: "+String(O));O=Array.from(P.keys()).find(j=>j.toLowerCase()=="content-type"),L=a.FormData&&d instanceof a.FormData,!(0<=Array.prototype.indexOf.call(M2,w,void 0))||O||L||P.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,Y]of P)this.g.setRequestHeader(j,Y);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qv(this),this.u=!0,this.g.send(d),this.u=!1}catch(j){$v(this,j)}};function $v(d,w){d.h=!1,d.g&&(d.j=!0,d.g.abort(),d.j=!1),d.l=w,d.m=5,Wv(d),kc(d)}function Wv(d){d.A||(d.A=!0,ee(d,"complete"),ee(d,"error"))}t.abort=function(d){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=d||7,ee(this,"complete"),ee(this,"abort"),kc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),kc(this,!0)),ut.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hv(this):this.bb())},t.bb=function(){Hv(this)};function Hv(d){if(d.h&&typeof o<"u"&&(!d.v[1]||Ir(d)!=4||d.Z()!=2)){if(d.u&&Ir(d)==4)U(d.Ea,0,d);else if(ee(d,"readystatechange"),Ir(d)==4){d.h=!1;try{const Y=d.Z();e:switch(Y){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var w=!0;break e;default:w=!1}var P;if(!(P=w)){var O;if(O=Y===0){var L=String(d.D).match(Ov)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),O=!N2.test(L?L.toLowerCase():"")}P=O}if(P)ee(d,"complete"),ee(d,"success");else{d.m=6;try{var j=2<Ir(d)?d.g.statusText:""}catch{j=""}d.l=j+" ["+d.Z()+"]",Wv(d)}}finally{kc(d)}}}}function kc(d,w){if(d.g){qv(d);const P=d.g,O=d.v[0]?()=>{}:null;d.g=null,d.v=null,w||ee(d,"ready");try{P.onreadystatechange=O}catch{}}}function qv(d){d.I&&(a.clearTimeout(d.I),d.I=null)}t.isActive=function(){return!!this.g};function Ir(d){return d.g?d.g.readyState:0}t.Z=function(){try{return 2<Ir(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(d){if(this.g){var w=this.g.responseText;return d&&w.indexOf(d)==0&&(w=w.substring(d.length)),ts(w)}};function Kv(d){try{if(!d.g)return null;if("response"in d.g)return d.g.response;switch(d.H){case"":case"text":return d.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in d.g)return d.g.mozResponseArrayBuffer}return null}catch{return null}}function O2(d){const w={};d=(d.g&&2<=Ir(d)&&d.g.getAllResponseHeaders()||"").split(`\r
`);for(let O=0;O<d.length;O++){if(b(d[O]))continue;var P=I(d[O]);const L=P[0];if(P=P[1],typeof P!="string")continue;P=P.trim();const j=w[L]||[];w[L]=j,j.push(P)}T(w,function(O){return O.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ba(d,w,P){return P&&P.internalChannelParams&&P.internalChannelParams[d]||w}function Gv(d){this.Aa=0,this.i=[],this.j=new ur,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ba("failFast",!1,d),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ba("baseRetryDelayMs",5e3,d),this.cb=ba("retryDelaySeedMs",1e4,d),this.Wa=ba("forwardChannelMaxRetries",2,d),this.wa=ba("forwardChannelRequestTimeoutMs",2e4,d),this.pa=d&&d.xmlHttpFactory||void 0,this.Xa=d&&d.Tb||void 0,this.Ca=d&&d.useFetchStreams||!1,this.L=void 0,this.J=d&&d.supportsCrossDomainXhr||!1,this.K="",this.h=new Iv(d&&d.concurrentRequestLimit),this.Da=new R2,this.P=d&&d.fastHandshake||!1,this.O=d&&d.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=d&&d.Rb||!1,d&&d.xa&&this.j.xa(),d&&d.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&d&&d.detectBufferingProxy||!1,this.ja=void 0,d&&d.longPollingTimeout&&0<d.longPollingTimeout&&(this.ja=d.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Gv.prototype,t.la=8,t.G=1,t.connect=function(d,w,P,O){ft(0),this.W=d,this.H=w||{},P&&O!==void 0&&(this.H.OSID=P,this.H.OAID=O),this.F=this.X,this.I=ry(this,null,this.W),Pc(this)};function Qh(d){if(Qv(d),d.G==3){var w=d.U++,P=Pr(d.I);if(Ye(P,"SID",d.K),Ye(P,"RID",w),Ye(P,"TYPE","terminate"),wa(d,P),w=new ri(d,d.j,w),w.L=2,w.v=Ec(Pr(P)),P=!1,a.navigator&&a.navigator.sendBeacon)try{P=a.navigator.sendBeacon(w.v.toString(),"")}catch{}!P&&a.Image&&(new Image().src=w.v,P=!0),P||(w.g=iy(w.j,null),w.g.ea(w.v)),w.F=Date.now(),bc(w)}ny(d)}function Cc(d){d.g&&(Yh(d),d.g.cancel(),d.g=null)}function Qv(d){Cc(d),d.u&&(a.clearTimeout(d.u),d.u=null),Ic(d),d.h.cancel(),d.s&&(typeof d.s=="number"&&a.clearTimeout(d.s),d.s=null)}function Pc(d){if(!Av(d.h)&&!d.s){d.s=!0;var w=d.Ga;F||K(),V||(F(),V=!0),W.add(w,d),d.B=0}}function L2(d,w){return Rv(d.h)>=d.h.j-(d.s?1:0)?!1:d.s?(d.i=w.D.concat(d.i),!0):d.G==1||d.G==2||d.B>=(d.Va?0:d.Wa)?!1:(d.s=cr(p(d.Ga,d,w),ty(d,d.B)),d.B++,!0)}t.Ga=function(d){if(this.s)if(this.s=null,this.G==1){if(!d){this.U=Math.floor(1e5*Math.random()),d=this.U++;const L=new ri(this,this.j,d);let j=this.o;if(this.S&&(j?(j=y(j),k(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var w=0,P=0;P<this.i.length;P++){t:{var O=this.i[P];if("__data__"in O.map&&(O=O.map.__data__,typeof O=="string")){O=O.length;break t}O=void 0}if(O===void 0)break;if(w+=O,4096<w){w=P;break e}if(w===4096||P===this.i.length-1){w=P+1;break e}}w=1e3}else w=1e3;w=Yv(this,L,w),P=Pr(this.I),Ye(P,"RID",d),Ye(P,"CVER",22),this.D&&Ye(P,"X-HTTP-Session-Id",this.D),wa(this,P),j&&(this.O?w="headers="+encodeURIComponent(String(zv(j)))+"&"+w:this.m&&Gh(P,this.m,j)),Kh(this.h,L),this.Ua&&Ye(P,"TYPE","init"),this.P?(Ye(P,"$req",w),Ye(P,"SID","null"),L.T=!0,$h(L,P,null)):$h(L,P,w),this.G=2}}else this.G==3&&(d?Xv(this,d):this.i.length==0||Av(this.h)||Xv(this))};function Xv(d,w){var P;w?P=w.l:P=d.U++;const O=Pr(d.I);Ye(O,"SID",d.K),Ye(O,"RID",P),Ye(O,"AID",d.T),wa(d,O),d.m&&d.o&&Gh(O,d.m,d.o),P=new ri(d,d.j,P,d.B+1),d.m===null&&(P.H=d.o),w&&(d.i=w.D.concat(d.i)),w=Yv(d,P,1e3),P.I=Math.round(.5*d.wa)+Math.round(.5*d.wa*Math.random()),Kh(d.h,P),$h(P,O,w)}function wa(d,w){d.H&&A(d.H,function(P,O){Ye(w,O,P)}),d.l&&Mv({},function(P,O){Ye(w,O,P)})}function Yv(d,w,P){P=Math.min(d.i.length,P);var O=d.l?p(d.l.Na,d.l,d):null;e:{var L=d.i;let j=-1;for(;;){const Y=["count="+P];j==-1?0<P?(j=L[0].g,Y.push("ofs="+j)):j=0:Y.push("ofs="+j);let Ke=!0;for(let Lt=0;Lt<P;Lt++){let Be=L[Lt].g;const Kt=L[Lt].map;if(Be-=j,0>Be)j=Math.max(0,L[Lt].g-100),Ke=!1;else try{D2(Kt,Y,"req"+Be+"_")}catch{O&&O(Kt)}}if(Ke){O=Y.join("&");break e}}}return d=d.i.splice(0,P),w.D=d,O}function Jv(d){if(!d.g&&!d.u){d.Y=1;var w=d.Fa;F||K(),V||(F(),V=!0),W.add(w,d),d.v=0}}function Xh(d){return d.g||d.u||3<=d.v?!1:(d.Y++,d.u=cr(p(d.Fa,d),ty(d,d.v)),d.v++,!0)}t.Fa=function(){if(this.u=null,Zv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var d=2*this.R;this.j.info("BP detection timer enabled: "+d),this.A=cr(p(this.ab,this),d)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Cc(this),Zv(this))};function Yh(d){d.A!=null&&(a.clearTimeout(d.A),d.A=null)}function Zv(d){d.g=new ri(d,d.j,"rpc",d.Y),d.m===null&&(d.g.H=d.o),d.g.O=0;var w=Pr(d.qa);Ye(w,"RID","rpc"),Ye(w,"SID",d.K),Ye(w,"AID",d.T),Ye(w,"CI",d.F?"0":"1"),!d.F&&d.ja&&Ye(w,"TO",d.ja),Ye(w,"TYPE","xmlhttp"),wa(d,w),d.m&&d.o&&Gh(w,d.m,d.o),d.L&&(d.g.I=d.L);var P=d.g;d=d.ia,P.L=1,P.v=Ec(Pr(w)),P.m=null,P.P=!0,kv(P,d)}t.Za=function(){this.C!=null&&(this.C=null,Cc(this),Xh(this),ft(19))};function Ic(d){d.C!=null&&(a.clearTimeout(d.C),d.C=null)}function ey(d,w){var P=null;if(d.g==w){Ic(d),Yh(d),d.g=null;var O=2}else if(qh(d.h,w))P=w.D,Dv(d.h,w),O=1;else return;if(d.G!=0){if(w.o)if(O==1){P=w.m?w.m.length:0,w=Date.now()-w.F;var L=d.B;O=qt(),ee(O,new ni(O,P)),Pc(d)}else Jv(d);else if(L=w.s,L==3||L==0&&0<w.X||!(O==1&&L2(d,w)||O==2&&Xh(d)))switch(P&&0<P.length&&(w=d.h,w.i=w.i.concat(P)),L){case 1:ss(d,5);break;case 4:ss(d,10);break;case 3:ss(d,6);break;default:ss(d,2)}}}function ty(d,w){let P=d.Ta+Math.floor(Math.random()*d.cb);return d.isActive()||(P*=2),P*w}function ss(d,w){if(d.j.info("Error code "+w),w==2){var P=p(d.fb,d),O=d.Xa;const L=!O;O=new is(O||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||wc(O,"https"),Ec(O),L?I2(O.toString(),P):A2(O.toString(),P)}else ft(2);d.G=0,d.l&&d.l.sa(w),ny(d),Qv(d)}t.fb=function(d){d?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function ny(d){if(d.G=0,d.ka=[],d.l){const w=Nv(d.h);(w.length!=0||d.i.length!=0)&&(v(d.ka,w),v(d.ka,d.i),d.h.i.length=0,m(d.i),d.i.length=0),d.l.ra()}}function ry(d,w,P){var O=P instanceof is?Pr(P):new is(P);if(O.g!="")w&&(O.g=w+"."+O.g),_c(O,O.s);else{var L=a.location;O=L.protocol,w=w?w+"."+L.hostname:L.hostname,L=+L.port;var j=new is(null);O&&wc(j,O),w&&(j.g=w),L&&_c(j,L),P&&(j.l=P),O=j}return P=d.D,w=d.ya,P&&w&&Ye(O,P,w),Ye(O,"VER",d.la),wa(d,O),O}function iy(d,w,P){if(w&&!d.J)throw Error("Can't create secondary domain capable XhrIo object.");return w=d.Ca&&!d.pa?new ut(new Tc({eb:P})):new ut(d.pa),w.Ha(d.J),w}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sy(){}t=sy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ac(){}Ac.prototype.g=function(d,w){return new kn(d,w)};function kn(d,w){G.call(this),this.g=new Gv(w),this.l=d,this.h=w&&w.messageUrlParams||null,d=w&&w.messageHeaders||null,w&&w.clientProtocolHeaderRequired&&(d?d["X-Client-Protocol"]="webchannel":d={"X-Client-Protocol":"webchannel"}),this.g.o=d,d=w&&w.initMessageHeaders||null,w&&w.messageContentType&&(d?d["X-WebChannel-Content-Type"]=w.messageContentType:d={"X-WebChannel-Content-Type":w.messageContentType}),w&&w.va&&(d?d["X-WebChannel-Client-Profile"]=w.va:d={"X-WebChannel-Client-Profile":w.va}),this.g.S=d,(d=w&&w.Sb)&&!b(d)&&(this.g.m=d),this.v=w&&w.supportsCrossDomainXhr||!1,this.u=w&&w.sendRawJson||!1,(w=w&&w.httpSessionIdParam)&&!b(w)&&(this.g.D=w,d=this.h,d!==null&&w in d&&(d=this.h,w in d&&delete d[w])),this.j=new Hs(this)}g(kn,G),kn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kn.prototype.close=function(){Qh(this.g)},kn.prototype.o=function(d){var w=this.g;if(typeof d=="string"){var P={};P.__data__=d,d=P}else this.u&&(P={},P.__data__=cn(d),d=P);w.i.push(new x2(w.Ya++,d)),w.G==3&&Pc(w)},kn.prototype.N=function(){this.g.l=null,delete this.j,Qh(this.g),delete this.g,kn.aa.N.call(this)};function oy(d){Mt.call(this),d.__headers__&&(this.headers=d.__headers__,this.statusCode=d.__status__,delete d.__headers__,delete d.__status__);var w=d.__sm__;if(w){e:{for(const P in w){d=P;break e}d=void 0}(this.i=d)&&(d=this.i,w=w!==null&&d in w?w[d]:void 0),this.data=w}else this.data=d}g(oy,Mt);function ay(){Ot.call(this),this.status=1}g(ay,Ot);function Hs(d){this.g=d}g(Hs,sy),Hs.prototype.ua=function(){ee(this.g,"a")},Hs.prototype.ta=function(d){ee(this.g,new oy(d))},Hs.prototype.sa=function(d){ee(this.g,new ay)},Hs.prototype.ra=function(){ee(this.g,"b")},Ac.prototype.createWebChannel=Ac.prototype.g,kn.prototype.send=kn.prototype.o,kn.prototype.open=kn.prototype.m,kn.prototype.close=kn.prototype.close,cT=function(){return new Ac},lT=function(){return qt()},aT=Ht,om={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yc.NO_ERROR=0,yc.TIMEOUT=8,yc.HTTP_ERROR=6,wu=yc,Ev.COMPLETE="complete",oT=Ev,gc.EventType=it,it.OPEN="a",it.CLOSE="b",it.ERROR="c",it.MESSAGE="d",G.prototype.listen=G.prototype.K,Va=gc,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,sT=ut}).apply(typeof Qc<"u"?Qc:typeof self<"u"?self:typeof window<"u"?window:{});const L1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Zt.UNAUTHENTICATED=new Zt(null),Zt.GOOGLE_CREDENTIALS=new Zt("google-credentials-uid"),Zt.FIRST_PARTY=new Zt("first-party-uid"),Zt.MOCK_USER=new Zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let na="11.0.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Hg("@firebase/firestore");function Zs(){return Ps.logLevel}function ne(t,...e){if(Ps.logLevel<=Pe.DEBUG){const n=e.map(Gg);Ps.debug(`Firestore (${na}): ${t}`,...n)}}function Yr(t,...e){if(Ps.logLevel<=Pe.ERROR){const n=e.map(Gg);Ps.error(`Firestore (${na}): ${t}`,...n)}}function Uo(t,...e){if(Ps.logLevel<=Pe.WARN){const n=e.map(Gg);Ps.warn(`Firestore (${na}): ${t}`,...n)}}function Gg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t="Unexpected state"){const e=`FIRESTORE (${na}) INTERNAL ASSERTION FAILED: `+t;throw Yr(e),new Error(e)}function Ue(t,e){t||xe()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends ti{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Zt.UNAUTHENTICATED))}shutdown(){}}class $R{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class WR{constructor(e){this.t=e,this.currentUser=Zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ue(this.o===void 0);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Fr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Fr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Fr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string"),new uT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string"),new Zt(e)}}class HR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Zt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class qR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new HR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class KR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ue(this.o===void 0);const r=s=>{s.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ne("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string"),this.R=n.token,new KR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=QR(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Oe(t,e){return t<e?-1:t>e?1:0}function zo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ue(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ue(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ue(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return St.fromMillis(Date.now())}static fromDate(e){return St.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new St(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e){this.timestamp=e}static fromTimestamp(e){return new we(e)}static min(){return new we(new St(0,0))}static max(){return new we(new St(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n,r){n===void 0?n=0:n>e.length&&xe(),r===void 0?r=e.length-n:r>e.length-n&&xe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Rl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Rl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class nt extends Rl{construct(e,n,r){return new nt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ue(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new nt(n)}static emptyPath(){return new nt([])}}const XR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends Rl{construct(e,n,r){return new Ft(e,n,r)}static isValidIdentifier(e){return XR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ue(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new ue(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new ue(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new ue(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ft(n)}static emptyPath(){return new Ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(nt.fromString(e))}static fromName(e){return new pe(nt.fromString(e).popFirst(5))}static empty(){return new pe(nt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&nt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return nt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new nt(e.slice()))}}function YR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=we.fromTimestamp(r===1e9?new St(n+1,0):new St(n,r));return new ji(i,pe.empty(),e)}function JR(t){return new ji(t.readTime,t.key,-1)}class ji{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ji(we.min(),pe.empty(),-1)}static max(){return new ji(we.max(),pe.empty(),-1)}}function ZR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=pe.comparator(t.documentKey,e.documentKey),n!==0?n:Oe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ra(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==eD)throw t;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&xe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):$.reject(n)}static resolve(e){return new $((n,r)=>{n(e)})}static reject(e){return new $((n,r)=>{r(e)})}static waitFor(e){return new $((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=$.resolve(!1);for(const r of e)n=n.next(i=>i?$.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new $((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new $((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function nD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ia(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}sh.oe=-1;function oh(t){return t==null}function hd(t){return t===0&&1/t==-1/0}function rD(t){return typeof t=="number"&&Number.isInteger(t)&&!hd(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=V1(e)),e=sD(t.get(n),e);return V1(e)}function sD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function V1(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){this.comparator=e,this.root=n||Bt.EMPTY}insert(e,n){return new ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Bt.BLACK,null,null))}remove(e){return new ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Bt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xc(this.root,e,this.comparator,!0)}}class Xc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Bt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Bt.RED,this.left=i??Bt.EMPTY,this.right=s??Bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Bt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Bt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Bt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw xe();const e=this.left.check();if(e!==this.right.check())throw xe();return e+(this.isRed()?0:1)}}Bt.EMPTY=null,Bt.RED=!0,Bt.BLACK=!1;Bt.EMPTY=new class{constructor(){this.size=0}get key(){throw xe()}get value(){throw xe()}get color(){throw xe()}get left(){throw xe()}get right(){throw xe()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Bt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.comparator=e,this.data=new ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new B1(this.data.getIterator())}getIteratorFrom(e){return new B1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Nt(this.comparator);return n.data=e,n}}class B1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e){this.fields=e,e.sort(Ft.comparator)}static empty(){return new An([])}unionWith(e){let n=new Nt(Ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new An(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return zo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new fT("Invalid base64 string: "+s):s}}(e);return new Wt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wt.EMPTY_BYTE_STRING=new Wt("");const oD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bi(t){if(Ue(!!t),typeof t=="string"){let e=0;const n=oD.exec(t);if(Ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:mt(t.seconds),nanos:mt(t.nanos)}}function mt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Fi(t){return typeof t=="string"?Wt.fromBase64String(t):Wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ah(t){const e=t.mapValue.fields.__previous_value__;return Qg(e)?ah(e):e}function Dl(t){const e=Bi(t.mapValue.fields.__local_write_time__.timestampValue);return new St(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Nl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Nl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Nl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ui(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qg(t)?4:cD(t)?9007199254740991:lD(t)?10:11:xe()}function Sr(t,e){if(t===e)return!0;const n=Ui(t);if(n!==Ui(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Dl(t).isEqual(Dl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Bi(i.timestampValue),a=Bi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Fi(i.bytesValue).isEqual(Fi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return mt(i.geoPointValue.latitude)===mt(s.geoPointValue.latitude)&&mt(i.geoPointValue.longitude)===mt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return mt(i.integerValue)===mt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=mt(i.doubleValue),a=mt(s.doubleValue);return o===a?hd(o)===hd(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return zo(t.arrayValue.values||[],e.arrayValue.values||[],Sr);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(j1(o)!==j1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Sr(o[l],a[l])))return!1;return!0}(t,e);default:return xe()}}function Ml(t,e){return(t.values||[]).find(n=>Sr(n,e))!==void 0}function $o(t,e){if(t===e)return 0;const n=Ui(t),r=Ui(e);if(n!==r)return Oe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Oe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=mt(s.integerValue||s.doubleValue),l=mt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return F1(t.timestampValue,e.timestampValue);case 4:return F1(Dl(t),Dl(e));case 5:return Oe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Fi(s),l=Fi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Oe(a[c],l[c]);if(u!==0)return u}return Oe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Oe(mt(s.latitude),mt(o.latitude));return a!==0?a:Oe(mt(s.longitude),mt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return U1(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,u;const f=s.fields||{},p=o.fields||{},h=(a=f.value)===null||a===void 0?void 0:a.arrayValue,g=(l=p.value)===null||l===void 0?void 0:l.arrayValue,m=Oe(((c=h==null?void 0:h.values)===null||c===void 0?void 0:c.length)||0,((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0);return m!==0?m:U1(h,g)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Yc.mapValue&&o===Yc.mapValue)return 0;if(s===Yc.mapValue)return 1;if(o===Yc.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let f=0;f<l.length&&f<u.length;++f){const p=Oe(l[f],u[f]);if(p!==0)return p;const h=$o(a[l[f]],c[u[f]]);if(h!==0)return h}return Oe(l.length,u.length)}(t.mapValue,e.mapValue);default:throw xe()}}function F1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Oe(t,e);const n=Bi(t),r=Bi(e),i=Oe(n.seconds,r.seconds);return i!==0?i:Oe(n.nanos,r.nanos)}function U1(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=$o(n[i],r[i]);if(s)return s}return Oe(n.length,r.length)}function Wo(t){return am(t)}function am(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Bi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Fi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return pe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=am(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${am(n.fields[o])}`;return i+"}"}(t.mapValue):xe()}function _u(t){switch(Ui(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ah(t);return e?16+_u(e):16;case 5:return 2*t.stringValue.length;case 6:return Fi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+_u(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Xi(r.fields,(s,o)=>{i+=s.length+_u(o)}),i}(t.mapValue);default:throw xe()}}function lm(t){return!!t&&"integerValue"in t}function Xg(t){return!!t&&"arrayValue"in t}function z1(t){return!!t&&"nullValue"in t}function $1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Eu(t){return!!t&&"mapValue"in t}function lD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function el(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=el(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=el(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.value=e}static empty(){return new yn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Eu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=el(n)}setAll(e){let n=Ft.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=el(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Eu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Sr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Eu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new yn(el(this.value))}}function pT(t){const e=[];return Xi(t.fields,(n,r)=>{const i=new Ft([n]);if(Eu(r)){const s=pT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new An(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tn(e,0,we.min(),we.min(),we.min(),yn.empty(),0)}static newFoundDocument(e,n,r,i){return new tn(e,1,n,we.min(),r,i,0)}static newNoDocument(e,n){return new tn(e,2,n,we.min(),we.min(),yn.empty(),0)}static newUnknownDocument(e,n){return new tn(e,3,n,we.min(),we.min(),yn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,n){this.position=e,this.inclusive=n}}function W1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=pe.comparator(pe.fromName(o.referenceValue),n.key):r=$o(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function H1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Sr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e,n="asc"){this.field=e,this.dir=n}}function uD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{}class Et extends mT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hD(e,n,r):n==="array-contains"?new mD(e,r):n==="in"?new gD(e,r):n==="not-in"?new vD(e,r):n==="array-contains-any"?new yD(e,r):new Et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new fD(e,r):new pD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison($o(n,this.value)):n!==null&&Ui(this.value)===Ui(n)&&this.matchesComparison($o(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return xe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class kr extends mT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new kr(e,n)}matches(e){return gT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function gT(t){return t.op==="and"}function vT(t){return dD(t)&&gT(t)}function dD(t){for(const e of t.filters)if(e instanceof kr)return!1;return!0}function cm(t){if(t instanceof Et)return t.field.canonicalString()+t.op.toString()+Wo(t.value);if(vT(t))return t.filters.map(e=>cm(e)).join(",");{const e=t.filters.map(n=>cm(n)).join(",");return`${t.op}(${e})`}}function yT(t,e){return t instanceof Et?function(r,i){return i instanceof Et&&r.op===i.op&&r.field.isEqual(i.field)&&Sr(r.value,i.value)}(t,e):t instanceof kr?function(r,i){return i instanceof kr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&yT(o,i.filters[a]),!0):!1}(t,e):void xe()}function xT(t){return t instanceof Et?function(n){return`${n.field.canonicalString()} ${n.op} ${Wo(n.value)}`}(t):t instanceof kr?function(n){return n.op.toString()+" {"+n.getFilters().map(xT).join(" ,")+"}"}(t):"Filter"}class hD extends Et{constructor(e,n,r){super(e,n,r),this.key=pe.fromName(r.referenceValue)}matches(e){const n=pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class fD extends Et{constructor(e,n){super(e,"in",n),this.keys=bT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class pD extends Et{constructor(e,n){super(e,"not-in",n),this.keys=bT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>pe.fromName(r.referenceValue))}class mD extends Et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Xg(n)&&Ml(n.arrayValue,this.value)}}class gD extends Et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ml(this.value.arrayValue,n)}}class vD extends Et{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ml(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ml(this.value.arrayValue,n)}}class yD extends Et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Xg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ml(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function q1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new xD(t,e,n,r,i,s,o)}function Yg(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>cm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),oh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wo(r)).join(",")),e.ue=n}return e.ue}function Jg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!H1(t.startAt,e.startAt)&&H1(t.endAt,e.endAt)}function um(t){return pe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bD(t,e,n,r,i,s,o,a){return new lh(t,e,n,r,i,s,o,a)}function Zg(t){return new lh(t)}function K1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wD(t){return t.collectionGroup!==null}function tl(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Nt(Ft.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new pd(s,r))}),n.has(Ft.keyField().canonicalString())||e.ce.push(new pd(Ft.keyField(),r))}return e.ce}function xr(t){const e=_e(t);return e.le||(e.le=_D(e,tl(t))),e.le}function _D(t,e){if(t.limitType==="F")return q1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new pd(i.field,s)});const n=t.endAt?new fd(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fd(t.startAt.position,t.startAt.inclusive):null;return q1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function dm(t,e,n){return new lh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ch(t,e){return Jg(xr(t),xr(e))&&t.limitType===e.limitType}function wT(t){return`${Yg(xr(t))}|lt:${t.limitType}`}function eo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>xT(i)).join(", ")}]`),oh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Wo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Wo(i)).join(",")),`Target(${r})`}(xr(t))}; limitType=${t.limitType})`}function uh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):pe.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of tl(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=W1(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,tl(r),i)||r.endAt&&!function(o,a,l){const c=W1(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,tl(r),i))}(t,e)}function ED(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _T(t){return(e,n)=>{let r=!1;for(const i of tl(t)){const s=TD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function TD(t,e,n){const r=t.field.isKeyField()?pe.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?$o(l,c):xe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return xe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return hT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=new ct(pe.comparator);function Jr(){return SD}const ET=new ct(pe.comparator);function ja(...t){let e=ET;for(const n of t)e=e.insert(n.key,n);return e}function TT(t){let e=ET;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gs(){return nl()}function ST(){return nl()}function nl(){return new Vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const kD=new ct(pe.comparator),CD=new Nt(pe.comparator);function Ie(...t){let e=CD;for(const n of t)e=e.add(n);return e}const PD=new Nt(Oe);function ID(){return PD}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e0(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hd(e)?"-0":e}}function kT(t){return{integerValue:""+t}}function AD(t,e){return rD(e)?kT(e):e0(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(){this._=void 0}}function RD(t,e,n){return t instanceof md?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qg(s)&&(s=ah(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ol?PT(t,e):t instanceof Ll?IT(t,e):function(i,s){const o=CT(i,s),a=G1(o)+G1(i.Pe);return lm(o)&&lm(i.Pe)?kT(a):e0(i.serializer,a)}(t,e)}function DD(t,e,n){return t instanceof Ol?PT(t,e):t instanceof Ll?IT(t,e):n}function CT(t,e){return t instanceof gd?function(r){return lm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class md extends dh{}class Ol extends dh{constructor(e){super(),this.elements=e}}function PT(t,e){const n=AT(e);for(const r of t.elements)n.some(i=>Sr(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ll extends dh{constructor(e){super(),this.elements=e}}function IT(t,e){let n=AT(e);for(const r of t.elements)n=n.filter(i=>!Sr(i,r));return{arrayValue:{values:n}}}class gd extends dh{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function G1(t){return mt(t.integerValue||t.doubleValue)}function AT(t){return Xg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ND(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ol&&i instanceof Ol||r instanceof Ll&&i instanceof Ll?zo(r.elements,i.elements,Sr):r instanceof gd&&i instanceof gd?Sr(r.Pe,i.Pe):r instanceof md&&i instanceof md}(t.transform,e.transform)}class MD{constructor(e,n){this.version=e,this.transformResults=n}}class ir{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ir}static exists(e){return new ir(void 0,e)}static updateTime(e){return new ir(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Tu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hh{}function RT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new t0(t.key,ir.none()):new Zl(t.key,t.data,ir.none());{const n=t.data,r=yn.empty();let i=new Nt(Ft.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Yi(t.key,r,new An(i.toArray()),ir.none())}}function OD(t,e,n){t instanceof Zl?function(i,s,o){const a=i.value.clone(),l=X1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Yi?function(i,s,o){if(!Tu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=X1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(DT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function rl(t,e,n,r){return t instanceof Zl?function(s,o,a,l){if(!Tu(s.precondition,o))return a;const c=s.value.clone(),u=Y1(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Yi?function(s,o,a,l){if(!Tu(s.precondition,o))return a;const c=Y1(s.fieldTransforms,l,o),u=o.data;return u.setAll(DT(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Tu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function LD(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=CT(r.transform,i||null);s!=null&&(n===null&&(n=yn.empty()),n.set(r.field,s))}return n||null}function Q1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&zo(r,i,(s,o)=>ND(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zl extends hh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Yi extends hh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function DT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function X1(t,e,n){const r=new Map;Ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,DD(o,a,n[i]))}return r}function Y1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,RD(s,o,e))}return r}class t0 extends hh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class VD extends hh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&OD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=rl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=rl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=ST();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=RT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(we.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ie())}isEqual(e){return this.batchId===e.batchId&&zo(this.mutations,e.mutations,(n,r)=>Q1(n,r))&&zo(this.baseMutations,e.baseMutations,(n,r)=>Q1(n,r))}}class n0{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Ue(e.mutations.length===r.length);let i=function(){return kD}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new n0(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt,Me;function UD(t){switch(t){default:return xe();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function NT(t){if(t===void 0)return Yr("GRPC error has no .code"),H.UNKNOWN;switch(t){case yt.OK:return H.OK;case yt.CANCELLED:return H.CANCELLED;case yt.UNKNOWN:return H.UNKNOWN;case yt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case yt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case yt.INTERNAL:return H.INTERNAL;case yt.UNAVAILABLE:return H.UNAVAILABLE;case yt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case yt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case yt.NOT_FOUND:return H.NOT_FOUND;case yt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case yt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case yt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case yt.ABORTED:return H.ABORTED;case yt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case yt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case yt.DATA_LOSS:return H.DATA_LOSS;default:return xe()}}(Me=yt||(yt={}))[Me.OK=0]="OK",Me[Me.CANCELLED=1]="CANCELLED",Me[Me.UNKNOWN=2]="UNKNOWN",Me[Me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Me[Me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Me[Me.NOT_FOUND=5]="NOT_FOUND",Me[Me.ALREADY_EXISTS=6]="ALREADY_EXISTS",Me[Me.PERMISSION_DENIED=7]="PERMISSION_DENIED",Me[Me.UNAUTHENTICATED=16]="UNAUTHENTICATED",Me[Me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Me[Me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Me[Me.ABORTED=10]="ABORTED",Me[Me.OUT_OF_RANGE=11]="OUT_OF_RANGE",Me[Me.UNIMPLEMENTED=12]="UNIMPLEMENTED",Me[Me.INTERNAL=13]="INTERNAL",Me[Me.UNAVAILABLE=14]="UNAVAILABLE",Me[Me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $D=new bs([4294967295,4294967295],0);function J1(t){const e=zD().encode(t),n=new iT;return n.update(e),new Uint8Array(n.digest())}function Z1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new bs([n,r],0),new bs([i,s],0)]}class r0{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ba(`Invalid padding: ${n}`);if(r<0)throw new Ba(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ba(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ba(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=bs.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(bs.fromNumber(r)));return i.compare($D)===1&&(i=new bs([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=J1(e),[r,i]=Z1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new r0(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=J1(e),[r,i]=Z1(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ba extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ec.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new fh(we.min(),i,new ct(Oe),Jr(),Ie())}}class ec{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ec(r,n,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class MT{constructor(e,n){this.targetId=e,this.me=n}}class OT{constructor(e,n,r=Wt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ex{constructor(){this.fe=0,this.ge=nx(),this.pe=Wt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ie(),n=Ie(),r=Ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:xe()}}),new ec(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=nx()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ue(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class WD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Jr(),this.qe=tx(),this.Qe=new ct(Oe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:xe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(um(s))if(r===0){const o=new pe(s.path);this.Ue(n,o,tn.newNoDocument(o,we.min()))}else Ue(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Fi(r).toUint8Array()}catch(l){if(l instanceof fT)return Uo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new r0(o,i,s)}catch(l){return Uo(l instanceof Ba?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&um(a.target)){const l=new pe(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,tn.newNoDocument(l,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=Ie();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new fh(e,n,this.Qe,this.ke,r);return this.ke=Jr(),this.qe=tx(),this.Qe=new ct(Oe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ex,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Nt(Oe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ex),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function tx(){return new ct(pe.comparator)}function nx(){return new ct(pe.comparator)}const HD={asc:"ASCENDING",desc:"DESCENDING"},qD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KD={and:"AND",or:"OR"};class GD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hm(t,e){return t.useProto3Json||oh(e)?e:{value:e}}function vd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function LT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function QD(t,e){return vd(t,e.toTimestamp())}function br(t){return Ue(!!t),we.fromTimestamp(function(n){const r=Bi(n);return new St(r.seconds,r.nanos)}(t))}function i0(t,e){return fm(t,e).canonicalString()}function fm(t,e){const n=function(i){return new nt(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function VT(t){const e=nt.fromString(t);return Ue(zT(e)),e}function pm(t,e){return i0(t.databaseId,e.path)}function Nf(t,e){const n=VT(e);if(n.get(1)!==t.databaseId.projectId)throw new ue(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ue(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new pe(BT(n))}function jT(t,e){return i0(t.databaseId,e)}function XD(t){const e=VT(t);return e.length===4?nt.emptyPath():BT(e)}function mm(t){return new nt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function BT(t){return Ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function rx(t,e,n){return{name:pm(t,e),fields:n.value.mapValue.fields}}function YD(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:xe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(Ue(u===void 0||typeof u=="string"),Wt.fromBase64String(u||"")):(Ue(u===void 0||u instanceof Buffer||u instanceof Uint8Array),Wt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?H.UNKNOWN:NT(c.code);return new ue(u,c.message||"")}(o);n=new OT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Nf(t,r.document.name),s=br(r.document.updateTime),o=r.document.createTime?br(r.document.createTime):we.min(),a=new yn({mapValue:{fields:r.document.fields}}),l=tn.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Su(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Nf(t,r.document),s=r.readTime?br(r.readTime):we.min(),o=tn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Su([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Nf(t,r.document),s=r.removedTargetIds||[];n=new Su([],s,i,null)}else{if(!("filter"in e))return xe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new FD(i,s),a=r.targetId;n=new MT(a,o)}}return n}function JD(t,e){let n;if(e instanceof Zl)n={update:rx(t,e.key,e.value)};else if(e instanceof t0)n={delete:pm(t,e.key)};else if(e instanceof Yi)n={update:rx(t,e.key,e.data),updateMask:aN(e.fieldMask)};else{if(!(e instanceof VD))return xe();n={verify:pm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof md)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ol)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ll)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof gd)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw xe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:QD(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:xe()}(t,e.precondition)),n}function ZD(t,e){return t&&t.length>0?(Ue(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?br(i.updateTime):br(s);return o.isEqual(we.min())&&(o=br(s)),new MD(o,i.transformResults||[])}(n,e))):[]}function eN(t,e){return{documents:[jT(t,e.path)]}}function tN(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=jT(t,i);const s=function(c){if(c.length!==0)return UT(kr.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(u=>function(p){return{field:to(p.field),direction:iN(p.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=hm(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function nN(t){let e=XD(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Ue(r===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(f){const p=FT(f);return p instanceof kr&&vT(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(g){return new pd(no(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,oh(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,h=f.values||[];return new fd(h,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,h=f.values||[];return new fd(h,p)}(n.endAt)),bD(e,i,o,s,a,"F",l,c)}function rN(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return xe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function FT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=no(n.unaryFilter.field);return Et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=no(n.unaryFilter.field);return Et.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=no(n.unaryFilter.field);return Et.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=no(n.unaryFilter.field);return Et.create(o,"!=",{nullValue:"NULL_VALUE"});default:return xe()}}(t):t.fieldFilter!==void 0?function(n){return Et.create(no(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return xe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return kr.create(n.compositeFilter.filters.map(r=>FT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return xe()}}(n.compositeFilter.op))}(t):xe()}function iN(t){return HD[t]}function sN(t){return qD[t]}function oN(t){return KD[t]}function to(t){return{fieldPath:t.canonicalString()}}function no(t){return Ft.fromServerFormat(t.fieldPath)}function UT(t){return t instanceof Et?function(n){if(n.op==="=="){if($1(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NAN"}};if(z1(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($1(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NAN"}};if(z1(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(n.field),op:sN(n.op),value:n.value}}}(t):t instanceof kr?function(n){const r=n.getFilters().map(i=>UT(i));return r.length===1?r[0]:{compositeFilter:{op:oN(n.op),filters:r}}}(t):xe()}function aN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,n,r,i,s=we.min(),o=we.min(),a=Wt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new _i(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _i(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.ct=e}}function cN(t){const e=nN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?dm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(){this.un=new dN}addToCollectionParentIndex(e,n){return this.un.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(ji.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(ji.min())}updateCollectionGroup(e,n,r){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class dN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Nt(nt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Nt(nt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class gn{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new gn(e,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gn.DEFAULT_COLLECTION_PERCENTILE=10,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gn.DEFAULT=new gn(41943040,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gn.DISABLED=new gn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ho(0)}static kn(){return new Ho(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx([t,e],[n,r]){const i=Oe(t,n);return i===0?Oe(e,r):i}class hN{constructor(e){this.Un=e,this.buffer=new Nt(sx),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sx(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class fN{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){ne("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ia(n)?ne("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ra(n)}await this.Hn(3e5)})}}class pN{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return $.resolve(sh.oe);const r=new hN(n);return this.Jn.forEachTarget(e,i=>r.zn(i.sequenceNumber)).next(()=>this.Jn.Zn(e,i=>r.zn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(ix)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ix):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,i,s,o,a,l,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),Zs()<=Pe.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-u}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function mN(t,e){return new pN(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(){this.changes=new Vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&rl(r.mutation,i,An.empty(),St.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ie()){const i=gs();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ja();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gs();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Jr();const o=nl(),a=function(){return nl()}();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof Yi)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),rl(u.mutation,c,u.mutation.getFieldMask(),St.now())):o.set(c.key,An.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var f;return a.set(c,new vN(u,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=nl();let i=new ct((o,a)=>o-a),s=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||An.empty();u=a.applyToLocalView(c,u),r.set(l,u);const f=(i.get(a.batchId)||Ie()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,f=ST();u.forEach(p=>{if(!s.has(p)){const h=RT(n.get(p),r.get(p));h!==null&&f.set(p,h),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return $.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return pe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):$.resolve(gs());let a=-1,l=s;return o.next(c=>$.forEach(c,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(u)?$.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{l=l.insert(u,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,Ie())).next(u=>({batchId:a,changes:TT(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new pe(n)).next(r=>{let i=ja();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ja();return this.indexManager.getCollectionParents(e,s).next(a=>$.forEach(a,l=>{const c=function(f,p){return new lh(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(u=>{u.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,tn.newInvalidDocument(u)))});let a=ja();return o.forEach((l,c)=>{const u=s.get(l);u!==void 0&&rl(u.mutation,c,An.empty(),St.now()),uh(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return $.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:br(i.createTime)}}(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:cN(i.bundledQuery),readTime:br(i.readTime)}}(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bN{constructor(){this.overlays=new ct(pe.comparator),this.Ir=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gs();return $.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),$.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),$.resolve()}getOverlaysForCollection(e,n,r){const i=gs(),s=n.length+1,o=new pe(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return $.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ct((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=gs(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=gs(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return $.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new BD(n,r));let s=this.Ir.get(n);s===void 0&&(s=Ie(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wN{constructor(){this.sessionToken=Wt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(){this.Tr=new Nt(It.Er),this.dr=new Nt(It.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new It(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new It(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new pe(new nt([])),r=new It(n,e),i=new It(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new pe(new nt([])),r=new It(n,e),i=new It(n,e+1);let s=Ie();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new It(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class It{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return pe.comparator(e.key,n.key)||Oe(e.wr,n.wr)}static Ar(e,n){return Oe(e.wr,n.wr)||pe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Nt(It.Er)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jD(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.br=this.br.add(new It(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return $.resolve(o)}lookupMutationBatch(e,n){return $.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return $.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new It(n,0),i=new It(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const a=this.Dr(o.wr);s.push(a)}),$.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Nt(Oe);return n.forEach(i=>{const s=new It(i,0),o=new It(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],a=>{r=r.add(a.wr)})}),$.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;pe.isDocumentKey(s)||(s=s.child(""));const o=new It(new pe(s),0);let a=new Nt(Oe);return this.br.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.wr)),!0)},o),$.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Ue(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return $.forEach(n.mutations,i=>{const s=new It(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new It(n,0),i=this.br.firstAfterOrEqual(r);return $.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN{constructor(e){this.Mr=e,this.docs=function(){return new ct(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():tn.newInvalidDocument(n))}getEntries(e,n){let r=Jr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tn.newInvalidDocument(i))}),$.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Jr();const o=n.path,a=new pe(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||ZR(JR(u),r)<=0||(i.has(u.key)||uh(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return $.resolve(s)}getAllFromCollectionGroup(e,n,r,i){xe()}Or(e,n){return $.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new TN(this)}getSize(e){return $.resolve(this.size)}}class TN extends gN{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),$.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e){this.persistence=e,this.Nr=new Vs(n=>Yg(n),Jg),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.Lr=0,this.Br=new s0,this.targetCount=0,this.kr=Ho.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),$.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ho(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.Kn(n),$.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),$.waitFor(s).next(()=>i)}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return $.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),$.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),$.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return $.resolve(r)}containsKey(e,n){return $.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n){this.qr={},this.overlays={},this.Qr=new sh(0),this.Kr=!1,this.Kr=!0,this.$r=new wN,this.referenceDelegate=e(this),this.Ur=new SN(this),this.indexManager=new uN,this.remoteDocumentCache=function(i){return new EN(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new lN(n),this.Gr=new xN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new _N(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ne("MemoryPersistence","Starting transaction:",e);const i=new kN(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return $.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class kN extends tD{constructor(e){super(),this.currentSequenceNumber=e}}class o0{constructor(e){this.persistence=e,this.Jr=new s0,this.Yr=null}static Zr(e){return new o0(e)}get Xr(){if(this.Yr)return this.Yr;throw xe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),$.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),$.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.Xr,r=>{const i=pe.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,we.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return $.or([()=>$.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class yd{constructor(e,n){this.persistence=e,this.ti=new Vs(r=>iD(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=mN(this,n)}static Zr(e,n){return new yd(e,n)}zr(){}jr(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return $.forEach(this.ti,(r,i)=>this.nr(e,r,i).next(s=>s?$.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Or(e,o=>this.nr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,we.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),$.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),$.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=_u(e.data.value)),n}nr(e,n,r){return $.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ti.get(n);return $.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Ie(),i=Ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new a0(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return SA()?8:nD(on())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new CN;return this.Xi(e,n,o).next(a=>{if(s.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Zs()<=Pe.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",eo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),$.resolve()):(Zs()<=Pe.DEBUG&&ne("QueryEngine","Query:",eo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Zs()<=Pe.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",eo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xr(n))):$.resolve())}Yi(e,n){if(K1(n))return $.resolve(null);let r=xr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=dm(n,null,"F"),r=xr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ie(...s);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.ts(n,a);return this.ns(n,c,o,l.readTime)?this.Yi(e,dm(n,null,"F")):this.rs(e,c,n,l)}))})))}Zi(e,n,r,i){return K1(n)||i.isEqual(we.min())?$.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?$.resolve(null):(Zs()<=Pe.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),eo(n)),this.rs(e,o,n,YR(i,-1)).next(a=>a))})}ts(e,n){let r=new Nt(_T(e));return n.forEach((i,s)=>{uh(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Zs()<=Pe.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",eo(n)),this.Ji.getDocumentsMatchingQuery(e,n,ji.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new ct(Oe),this._s=new Vs(s=>Yg(s),Jg),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yN(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function AN(t,e,n,r){return new IN(t,e,n,r)}async function WT(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Ie();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function RN(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const f=c.batch,p=f.keys();let h=$.resolve();return p.forEach(g=>{h=h.next(()=>u.getEntry(l,g)).next(m=>{const v=c.docVersions.get(g);Ue(v!==null),m.version.compareTo(v)<0&&(f.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),h.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Ie();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function HT(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function DN(t,e){const n=_e(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const a=[];e.targetChanges.forEach((u,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ur.removeMatchingKeys(s,u.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(s,u.addedDocuments,f)));let h=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?h=h.withResumeToken(Wt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):u.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(u.resumeToken,r)),i=i.insert(f,h),function(m,v,x){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,h,u)&&a.push(n.Ur.updateTargetData(s,h))});let l=Jr(),c=Ie();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(NN(s,o,e.documentUpdates).next(u=>{l=u.Ps,c=u.Is})),!r.isEqual(we.min())){const u=n.Ur.getLastRemoteSnapshotVersion(s).next(f=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return $.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.os=i,s))}function NN(t,e,n){let r=Ie(),i=Ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Jr();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(we.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ne("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{Ps:o,Is:i}})}function MN(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ON(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,$.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new _i(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function gm(t,e,n){const r=_e(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ia(o))throw o;ne("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function ox(t,e,n){const r=_e(t);let i=we.min(),s=Ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const f=_e(l),p=f._s.get(u);return p!==void 0?$.resolve(f.os.get(p)):f.Ur.getTargetData(c,u)}(r,o,xr(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:we.min(),n?s:Ie())).next(a=>(LN(r,ED(e),a),{documents:a,Ts:s})))}function LN(t,e,n){let r=t.us.get(e)||we.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class ax{constructor(){this.activeTargetIds=ID()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VN{constructor(){this.so=new ax,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ax,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lx{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ne("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ne("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jc=null;function Mf(){return Jc===null?Jc=function(){return 268435456+Math.round(2147483648*Math.random())}():Jc++,"0x"+Jc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="WebChannelConnection";class UN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const a=Mf(),l=this.xo(n,r.toUriEncodedString());ne("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,s,o),this.No(n,l,c,i).then(u=>(ne("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Uo("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}Lo(n,r,i,s,o,a){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+na}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=BN[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Mf();return new Promise((o,a)=>{const l=new sT;l.setWithCredentials(!0),l.listenOnce(oT.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case wu.NO_ERROR:const u=l.getResponseJson();ne(Yt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(u)),o(u);break;case wu.TIMEOUT:ne(Yt,`RPC '${e}' ${s} timed out`),a(new ue(H.DEADLINE_EXCEEDED,"Request time out"));break;case wu.HTTP_ERROR:const f=l.getStatus();if(ne(Yt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const h=p==null?void 0:p.error;if(h&&h.status&&h.message){const g=function(v){const x=v.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(x)>=0?x:H.UNKNOWN}(h.status);a(new ue(g,h.message))}else a(new ue(H.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new ue(H.UNAVAILABLE,"Connection failed."));break;default:xe()}}finally{ne(Yt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);ne(Yt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Bo(e,n,r){const i=Mf(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cT(),a=lT(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");ne(Yt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const f=o.createWebChannel(u,l);let p=!1,h=!1;const g=new FN({Io:v=>{h?ne(Yt,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(p||(ne(Yt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),ne(Yt,`RPC '${e}' stream ${i} sending:`,v),f.send(v))},To:()=>f.close()}),m=(v,x,b)=>{v.listen(x,_=>{try{b(_)}catch(R){setTimeout(()=>{throw R},0)}})};return m(f,Va.EventType.OPEN,()=>{h||(ne(Yt,`RPC '${e}' stream ${i} transport opened.`),g.yo())}),m(f,Va.EventType.CLOSE,()=>{h||(h=!0,ne(Yt,`RPC '${e}' stream ${i} transport closed`),g.So())}),m(f,Va.EventType.ERROR,v=>{h||(h=!0,Uo(Yt,`RPC '${e}' stream ${i} transport errored:`,v),g.So(new ue(H.UNAVAILABLE,"The operation could not be completed")))}),m(f,Va.EventType.MESSAGE,v=>{var x;if(!h){const b=v.data[0];Ue(!!b);const _=b,R=_.error||((x=_[0])===null||x===void 0?void 0:x.error);if(R){ne(Yt,`RPC '${e}' stream ${i} received error:`,R);const E=R.status;let A=function(S){const k=yt[S];if(k!==void 0)return NT(k)}(E),T=R.message;A===void 0&&(A=H.INTERNAL,T="Unknown error status: "+E+" with message "+R.message),h=!0,g.So(new ue(A,T)),f.close()}else ne(Yt,`RPC '${e}' stream ${i} received:`,b),g.bo(b)}}),m(a,aT.STAT_EVENT,v=>{v.stat===om.PROXY?ne(Yt,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===om.NOPROXY&&ne(Yt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.wo()},0),g}}function Of(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t){return new GD(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&ne("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,n,r,i,s,o,a,l){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new qT(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(Yr(n.toString()),Yr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new ue(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ne("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ne("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zN extends KT{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=YD(this.serializer,e),r=function(s){if(!("targetChange"in s))return we.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?we.min():o.readTime?br(o.readTime):we.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=mm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=um(l)?{documents:eN(s,l)}:{query:tN(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=LT(s,o.resumeToken);const c=hm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(we.min())>0){a.readTime=vd(s,o.snapshotVersion.toTimestamp());const c=hm(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=rN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=mm(this.serializer),n.removeTarget=e,this.a_(n)}}class $N extends KT{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,Ue(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=ZD(e.writeResults,e.commitTime),r=br(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=mm(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>JD(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new ue(H.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,fm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ue(H.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,fm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ue(H.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class HN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Yr(n),this.D_=!1):ne("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{js(this)&&(ne("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=_e(l);c.L_.add(4),await tc(c),c.q_.set("Unknown"),c.L_.delete(4),await mh(c)}(this))})}),this.q_=new HN(r,i)}}async function mh(t){if(js(t))for(const e of t.B_)await e(!0)}async function tc(t){for(const e of t.B_)await e(!1)}function GT(t,e){const n=_e(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),d0(n)?u0(n):sa(n).r_()&&c0(n,e))}function l0(t,e){const n=_e(t),r=sa(n);n.N_.delete(e),r.r_()&&QT(n,e),n.N_.size===0&&(r.r_()?r.o_():js(n)&&n.q_.set("Unknown"))}function c0(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}sa(t).A_(e)}function QT(t,e){t.Q_.xe(e),sa(t).R_(e)}function u0(t){t.Q_=new WD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),sa(t).start(),t.q_.v_()}function d0(t){return js(t)&&!sa(t).n_()&&t.N_.size>0}function js(t){return _e(t).L_.size===0}function XT(t){t.Q_=void 0}async function KN(t){t.q_.set("Online")}async function GN(t){t.N_.forEach((e,n)=>{c0(t,e)})}async function QN(t,e){XT(t),d0(t)?(t.q_.M_(e),u0(t)):t.q_.set("Unknown")}async function XN(t,e,n){if(t.q_.set("Online"),e instanceof OT&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.N_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.N_.delete(a),i.Q_.removeTarget(a))}(t,e)}catch(r){ne("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xd(t,r)}else if(e instanceof Su?t.Q_.Ke(e):e instanceof MT?t.Q_.He(e):t.Q_.We(e),!n.isEqual(we.min()))try{const r=await HT(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.N_.get(c);u&&s.N_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=s.N_.get(l);if(!u)return;s.N_.set(l,u.withResumeToken(Wt.EMPTY_BYTE_STRING,u.snapshotVersion)),QT(s,l);const f=new _i(u.target,l,c,u.sequenceNumber);c0(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){ne("RemoteStore","Failed to raise snapshot:",r),await xd(t,r)}}async function xd(t,e,n){if(!ia(e))throw e;t.L_.add(1),await tc(t),t.q_.set("Offline"),n||(n=()=>HT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ne("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await mh(t)})}function YT(t,e){return e().catch(n=>xd(t,n,e))}async function gh(t){const e=_e(t),n=zi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;YN(e);)try{const i=await MN(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,JN(e,i)}catch(i){await xd(e,i)}JT(e)&&ZT(e)}function YN(t){return js(t)&&t.O_.length<10}function JN(t,e){t.O_.push(e);const n=zi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function JT(t){return js(t)&&!zi(t).n_()&&t.O_.length>0}function ZT(t){zi(t).start()}async function ZN(t){zi(t).p_()}async function eM(t){const e=zi(t);for(const n of t.O_)e.m_(n.mutations)}async function tM(t,e,n){const r=t.O_.shift(),i=n0.from(r,e,n);await YT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await gh(t)}async function nM(t,e){e&&zi(t).V_&&await async function(r,i){if(function(o){return UD(o)&&o!==H.ABORTED}(i.code)){const s=r.O_.shift();zi(r).s_(),await YT(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await gh(r)}}(t,e),JT(t)&&ZT(t)}async function cx(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ne("RemoteStore","RemoteStore received new credentials");const r=js(n);n.L_.add(3),await tc(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await mh(n)}async function rM(t,e){const n=_e(t);e?(n.L_.delete(2),await mh(n)):e||(n.L_.add(2),await tc(n),n.q_.set("Unknown"))}function sa(t){return t.K_||(t.K_=function(n,r,i){const s=_e(n);return s.w_(),new zN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:KN.bind(null,t),Ro:GN.bind(null,t),mo:QN.bind(null,t),d_:XN.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),d0(t)?u0(t):t.q_.set("Unknown")):(await t.K_.stop(),XT(t))})),t.K_}function zi(t){return t.U_||(t.U_=function(n,r,i){const s=_e(n);return s.w_(),new $N(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:ZN.bind(null,t),mo:nM.bind(null,t),f_:eM.bind(null,t),g_:tM.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await gh(t)):(await t.U_.stop(),t.O_.length>0&&(ne("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Fr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new h0(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function f0(t,e){if(Yr("AsyncQueue",`${e}: ${t}`),ia(t))return new ue(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.comparator=e?(n,r)=>e(n,r)||pe.comparator(n.key,r.key):(n,r)=>pe.comparator(n.key,r.key),this.keyedMap=ja(),this.sortedSet=new ct(this.comparator)}static emptySet(e){return new Po(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Po)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this.W_=new ct(pe.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):xe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class qo{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new qo(e,n,Po.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ch(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class sM{constructor(){this.queries=dx(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=_e(n),s=i.queries;i.queries=dx(),s.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new ue(H.ABORTED,"Firestore shutting down"))}}function dx(){return new Vs(t=>wT(t),ch)}async function eS(t,e){const n=_e(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new iM,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=f0(o,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&p0(n)}async function tS(t,e){const n=_e(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function oM(t,e){const n=_e(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.j_)a.X_(i)&&(r=!0);o.z_=i}}r&&p0(n)}function aM(t,e,n){const r=_e(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function p0(t){t.Y_.forEach(e=>{e.next()})}var vm,hx;(hx=vm||(vm={})).ea="default",hx.Cache="cache";class nS{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=qo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==vm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.key=e}}class iS{constructor(e){this.key=e}}class lM{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ie(),this.mutatedKeys=Ie(),this.Aa=_T(e),this.Ra=new Po(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new ux,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,f)=>{const p=i.get(u),h=uh(this.query,f)?f:null,g=!!p&&this.mutatedKeys.has(p.key),m=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let v=!1;p&&h?p.data.isEqual(h.data)?g!==m&&(r.track({type:3,doc:h}),v=!0):this.ga(p,h)||(r.track({type:2,doc:h}),v=!0,(l&&this.Aa(h,l)>0||c&&this.Aa(h,c)<0)&&(a=!0)):!p&&h?(r.track({type:0,doc:h}),v=!0):p&&!h&&(r.track({type:1,doc:p}),v=!0,(l||c)&&(a=!0)),v&&(h?(o=o.add(h),s=m?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Ra:o,fa:r,ns:a,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((u,f)=>function(h,g){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return xe()}};return m(h)-m(g)}(u.type,f.type)||this.Aa(u.doc,f.doc)),this.pa(r),i=i!=null&&i;const a=n&&!i?this.ya():[],l=this.da.size===0&&this.current&&!i?1:0,c=l!==this.Ea;return this.Ea=l,o.length!==0||c?{snapshot:new qo(this.query,e.Ra,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new ux,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new iS(r))}),this.da.forEach(r=>{e.has(r)||n.push(new rS(r))}),n}ba(e){this.Ta=e.Ts,this.da=Ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return qo.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class cM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uM{constructor(e){this.key=e,this.va=!1}}class dM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Vs(a=>wT(a),ch),this.Ma=new Map,this.xa=new Set,this.Oa=new ct(pe.comparator),this.Na=new Map,this.La=new s0,this.Ba={},this.ka=new Map,this.qa=Ho.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function hM(t,e,n=!0){const r=uS(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await sS(r,e,n,!0),i}async function fM(t,e){const n=uS(t);await sS(n,e,!0,!1)}async function sS(t,e,n,r){const i=await ON(t.localStore,xr(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await pM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&GT(t.remoteStore,i),a}async function pM(t,e,n,r,i){t.Ka=(f,p,h)=>async function(m,v,x,b){let _=v.view.ma(x);_.ns&&(_=await ox(m.localStore,v.query,!1).then(({documents:T})=>v.view.ma(T,_)));const R=b&&b.targetChanges.get(v.targetId),E=b&&b.targetMismatches.get(v.targetId)!=null,A=v.view.applyChanges(_,m.isPrimaryClient,R,E);return px(m,v.targetId,A.wa),A.snapshot}(t,f,p,h);const s=await ox(t.localStore,e,!0),o=new lM(e,s.Ts),a=o.ma(s.documents),l=ec.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);px(t,n,c.wa);const u=new cM(e,n,o);return t.Fa.set(e,u),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function mM(t,e,n){const r=_e(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!ch(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await gm(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&l0(r.remoteStore,i.targetId),ym(r,i.targetId)}).catch(ra)):(ym(r,i.targetId),await gm(r.localStore,i.targetId,!0))}async function gM(t,e){const n=_e(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),l0(n.remoteStore,r.targetId))}async function vM(t,e,n){const r=TM(t);try{const i=await function(o,a){const l=_e(o),c=St.now(),u=a.reduce((h,g)=>h.add(g.key),Ie());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",h=>{let g=Jr(),m=Ie();return l.cs.getEntries(h,u).next(v=>{g=v,g.forEach((x,b)=>{b.isValidDocument()||(m=m.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(h,g)).next(v=>{f=v;const x=[];for(const b of a){const _=LD(b,f.get(b.key).overlayedDocument);_!=null&&x.push(new Yi(b.key,_,pT(_.value.mapValue),ir.exists(!0)))}return l.mutationQueue.addMutationBatch(h,c,x,a)}).next(v=>{p=v;const x=v.applyToLocalDocumentSet(f,m);return l.documentOverlayCache.saveOverlays(h,v.batchId,x)})}).then(()=>({batchId:p.batchId,changes:TT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Ba[o.currentUser.toKey()];c||(c=new ct(Oe)),c=c.insert(a,l),o.Ba[o.currentUser.toKey()]=c}(r,i.batchId,n),await nc(r,i.changes),await gh(r.remoteStore)}catch(i){const s=f0(i,"Failed to persist write");n.reject(s)}}async function oS(t,e){const n=_e(t);try{const r=await DN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Ue(o.va):i.removedDocuments.size>0&&(Ue(o.va),o.va=!1))}),await nc(n,r,e)}catch(r){await ra(r)}}function fx(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const a=o.view.Z_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=_e(o);l.onlineState=a;let c=!1;l.queries.forEach((u,f)=>{for(const p of f.j_)p.Z_(a)&&(c=!0)}),c&&p0(l)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yM(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new ct(pe.comparator);o=o.insert(s,tn.newNoDocument(s,we.min()));const a=Ie().add(s),l=new fh(we.min(),new Map,new ct(Oe),o,a);await oS(r,l),r.Oa=r.Oa.remove(s),r.Na.delete(e),m0(r)}else await gm(r.localStore,e,!1).then(()=>ym(r,e,n)).catch(ra)}async function xM(t,e){const n=_e(t),r=e.batch.batchId;try{const i=await RN(n.localStore,e);lS(n,r,null),aS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await nc(n,i)}catch(i){await ra(i)}}async function bM(t,e,n){const r=_e(t);try{const i=await function(o,a){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Ue(f!==null),u=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);lS(r,e,n),aS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await nc(r,i)}catch(i){await ra(i)}}function aS(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function lS(t,e,n){const r=_e(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function ym(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||cS(t,r)})}function cS(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(l0(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),m0(t))}function px(t,e,n){for(const r of n)r instanceof rS?(t.La.addReference(r.key,e),wM(t,r)):r instanceof iS?(ne("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||cS(t,r.key)):xe()}function wM(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ne("SyncEngine","New document in limbo: "+n),t.xa.add(r),m0(t))}function m0(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new pe(nt.fromString(e)),r=t.qa.next();t.Na.set(r,new uM(n)),t.Oa=t.Oa.insert(n,r),GT(t.remoteStore,new _i(xr(Zg(n.path)),r,"TargetPurposeLimboResolution",sh.oe))}}async function nc(t,e,n){const r=_e(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(c=>{var u;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(u=n==null?void 0:n.targetChanges.get(l.targetId))===null||u===void 0?void 0:u.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=a0.Wi(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(l,c){const u=_e(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>$.forEach(c,p=>$.forEach(p.$i,h=>u.persistence.referenceDelegate.addReference(f,p.targetId,h)).next(()=>$.forEach(p.Ui,h=>u.persistence.referenceDelegate.removeReference(f,p.targetId,h)))))}catch(f){if(!ia(f))throw f;ne("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const h=u.os.get(p),g=h.snapshotVersion,m=h.withLastLimboFreeSnapshotVersion(g);u.os=u.os.insert(p,m)}}}(r.localStore,s))}async function _M(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ne("SyncEngine","User change. New user:",e.toKey());const r=await WT(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(a=>{a.forEach(l=>{l.reject(new ue(H.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await nc(n,r.hs)}}function EM(t,e){const n=_e(t),r=n.Na.get(e);if(r&&r.va)return Ie().add(r.key);{let i=Ie();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const a=n.Fa.get(o);i=i.unionWith(a.view.Va)}return i}}function uS(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=oS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yM.bind(null,e),e.Ca.d_=oM.bind(null,e.eventManager),e.Ca.$a=aM.bind(null,e.eventManager),e}function TM(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bM.bind(null,e),e}class bd{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ph(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return AN(this.persistence,new PN,e.initialUser,this.serializer)}Ga(e){return new $T(o0.Zr,this.serializer)}Wa(e){return new VN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bd.provider={build:()=>new bd};class SM extends bd{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){Ue(this.persistence.referenceDelegate instanceof yd);const r=this.persistence.referenceDelegate.garbageCollector;return new fN(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?gn.withCacheSize(this.cacheSizeBytes):gn.DEFAULT;return new $T(r=>yd.Zr(r,n),this.serializer)}}class xm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fx(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_M.bind(null,this.syncEngine),await rM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sM}()}createDatastore(e){const n=ph(e.databaseInfo.databaseId),r=function(s){return new UN(s)}(e.databaseInfo);return function(s,o,a,l){return new WN(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new qN(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>fx(this.syncEngine,n,0),function(){return lx.D()?new lx:new jN}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,u){const f=new dM(i,s,o,a,l,c);return u&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=_e(i);ne("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await tc(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}xm.provider={build:()=>new xm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Yr("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Zt.UNAUTHENTICATED,this.clientId=dT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{ne("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ne("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=f0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Lf(t,e){t.asyncQueue.verifyOperationInProgress(),ne("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await WT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mx(t,e){t.asyncQueue.verifyOperationInProgress();const n=await CM(t);ne("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>cx(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>cx(e.remoteStore,i)),t._onlineComponents=e}async function CM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ne("FirestoreClient","Using user provided OfflineComponentProvider");try{await Lf(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===H.FAILED_PRECONDITION||i.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Uo("Error using user provided cache. Falling back to memory cache: "+n),await Lf(t,new bd)}}else ne("FirestoreClient","Using default OfflineComponentProvider"),await Lf(t,new SM(void 0));return t._offlineComponents}async function hS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ne("FirestoreClient","Using user provided OnlineComponentProvider"),await mx(t,t._uninitializedComponentsProvider._online)):(ne("FirestoreClient","Using default OnlineComponentProvider"),await mx(t,new xm))),t._onlineComponents}function PM(t){return hS(t).then(e=>e.syncEngine)}async function fS(t){const e=await hS(t),n=e.eventManager;return n.onListen=hM.bind(null,e.syncEngine),n.onUnlisten=mM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=gM.bind(null,e.syncEngine),n}function IM(t,e,n={}){const r=new Fr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new dS({next:p=>{u.Za(),o.enqueueAndForget(()=>tS(s,f));const h=p.docs.has(a);!h&&p.fromCache?c.reject(new ue(H.UNAVAILABLE,"Failed to get document because the client is offline.")):h&&p.fromCache&&l&&l.source==="server"?c.reject(new ue(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new nS(Zg(a.path),u,{includeMetadataChanges:!0,_a:!0});return eS(s,f)}(await fS(t),t.asyncQueue,e,n,r)),r.promise}function AM(t,e,n={}){const r=new Fr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new dS({next:p=>{u.Za(),o.enqueueAndForget(()=>tS(s,f)),p.fromCache&&l.source==="server"?c.reject(new ue(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new nS(a,u,{includeMetadataChanges:!0,_a:!0});return eS(s,f)}(await fS(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(t,e,n){if(!n)throw new ue(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function RM(t,e,n,r){if(e===!0&&r===!0)throw new ue(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vx(t){if(!pe.isDocumentKey(t))throw new ue(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yx(t){if(pe.isDocumentKey(t))throw new ue(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function g0(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":xe()}function Cr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ue(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=g0(t);throw new ue(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xx{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ue(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}RM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ue(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ue(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ue(H.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class vh{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xx({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xx(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new zR;switch(r.type){case"firstParty":return new qR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ue(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=gx.get(n);r&&(ne("ComponentProvider","Removing Datastore"),gx.delete(n),r.terminate())}(this),Promise.resolve()}}function DM(t,e,n,r={}){var i;const s=(t=Cr(t,vh))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Uo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Zt.MOCK_USER;else{a=yA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new ue(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Zt(c)}t._authCredentials=new $R(new uT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yh(this.firestore,e,this._query)}}class En{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Oi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new En(this.firestore,e,this._key)}}class Oi extends yh{constructor(e,n,r){super(e,n,Zg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new En(this.firestore,null,new pe(e))}withConverter(e){return new Oi(this.firestore,e,this._path)}}function Bs(t,e,...n){if(t=$t(t),mS("collection","path",e),t instanceof vh){const r=nt.fromString(e,...n);return yx(r),new Oi(t,null,r)}{if(!(t instanceof En||t instanceof Oi))throw new ue(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(nt.fromString(e,...n));return yx(r),new Oi(t.firestore,null,r)}}function fe(t,e,...n){if(t=$t(t),arguments.length===1&&(e=dT.newId()),mS("doc","path",e),t instanceof vh){const r=nt.fromString(e,...n);return vx(r),new En(t,null,new pe(r))}{if(!(t instanceof En||t instanceof Oi))throw new ue(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(nt.fromString(e,...n));return vx(r),new En(t.firestore,t instanceof Oi?t.converter:null,new pe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new qT(this,"async_queue_retry"),this.Vu=()=>{const r=Of();r&&ne("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Of();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Of();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Fr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ia(e))throw e;ne("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Yr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=h0.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&xe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class oa extends vh{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new bx,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new bx(e),this._firestoreClient=void 0,await e}}}function gS(t,e){const n=typeof t=="object"?t:tT(),r=typeof t=="string"?t:"(default)",i=Kg(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=gA("firestore");s&&DM(i,...s)}return i}function v0(t){if(t._terminated)throw new ue(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||NM(t),t._firestoreClient}function NM(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,u){return new aD(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,pS(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new kM(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ko(Wt.fromBase64String(e))}catch(n){throw new ue(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ko(Wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ue(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ue(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ue(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MM=/^__.*__$/;class OM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Yi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zl(e,this.data,n,this.fieldTransforms)}}class vS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Yi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function yS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw xe()}}class w0{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new w0(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return wd(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(yS(this.Cu)&&MM.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class LM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ph(e)}Qu(e,n,r,i=!1){return new w0({Cu:e,methodName:n,qu:r,path:Ft.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xS(t){const e=t._freezeSettings(),n=ph(t._databaseId);return new LM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function VM(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);_0("Data must be an object, but it was:",o,r);const a=bS(r,o);let l,c;if(s.merge)l=new An(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const f of s.mergeFields){const p=bm(e,f,n);if(!o.contains(p))throw new ue(H.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);_S(u,p)||u.push(p)}l=new An(u),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new OM(new yn(a),l,c)}class bh extends y0{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bh}}function jM(t,e,n,r){const i=t.Qu(1,e,n);_0("Data must be an object, but it was:",i,r);const s=[],o=yn.empty();Xi(r,(l,c)=>{const u=E0(e,l,n);c=$t(c);const f=i.Nu(u);if(c instanceof bh)s.push(u);else{const p=wh(c,f);p!=null&&(s.push(u),o.set(u,p))}});const a=new An(s);return new vS(o,a,i.fieldTransforms)}function BM(t,e,n,r,i,s){const o=t.Qu(1,e,n),a=[bm(e,r,n)],l=[i];if(s.length%2!=0)throw new ue(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(bm(e,s[p])),l.push(s[p+1]);const c=[],u=yn.empty();for(let p=a.length-1;p>=0;--p)if(!_S(c,a[p])){const h=a[p];let g=l[p];g=$t(g);const m=o.Nu(h);if(g instanceof bh)c.push(h);else{const v=wh(g,m);v!=null&&(c.push(h),u.set(h,v))}}const f=new An(c);return new vS(u,f,o.fieldTransforms)}function wh(t,e){if(wS(t=$t(t)))return _0("Unsupported field value:",e,t),bS(t,e);if(t instanceof y0)return function(r,i){if(!yS(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=wh(a,i.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=$t(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return AD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=St.fromDate(r);return{timestampValue:vd(i.serializer,s)}}if(r instanceof St){const s=new St(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:vd(i.serializer,s)}}if(r instanceof x0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ko)return{bytesValue:LT(i.serializer,r._byteString)};if(r instanceof En){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:i0(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof b0)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return e0(a.serializer,l)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${g0(r)}`)}(t,e)}function bS(t,e){const n={};return hT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xi(t,(r,i)=>{const s=wh(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function wS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof St||t instanceof x0||t instanceof Ko||t instanceof En||t instanceof y0||t instanceof b0)}function _0(t,e,n){if(!wS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=g0(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function bm(t,e,n){if((e=$t(e))instanceof xh)return e._internalPath;if(typeof e=="string")return E0(t,e);throw wd("Field path arguments must be of type string or ",t,!1,void 0,n)}const FM=new RegExp("[~\\*/\\[\\]]");function E0(t,e,n){if(e.search(FM)>=0)throw wd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xh(...e.split("."))._internalPath}catch{throw wd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new ue(H.INVALID_ARGUMENT,a+t+l)}function _S(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new En(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(TS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UM extends ES{data(){return super.data()}}function TS(t,e){return typeof e=="string"?E0(t,e):e instanceof xh?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zM(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ue(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $M{convertValue(e,n="none"){switch(Ui(e)){case 0:return null;case 1:return e.booleanValue;case 2:return mt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Fi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw xe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Xi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>mt(o.doubleValue));return new b0(s)}convertGeoPoint(e){return new x0(mt(e.latitude),mt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ah(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Dl(e));default:return null}}convertTimestamp(e){const n=Bi(e);return new St(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=nt.fromString(e);Ue(zT(r));const i=new Nl(r.get(1),r.get(3)),s=new pe(r.popFirst(5));return i.isEqual(n)||Yr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WM(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class SS extends ES{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ku(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(TS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ku extends SS{data(e={}){return super.data(e)}}class HM{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Fa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ku(this._firestore,this._userDataWriter,r.key,r,new Fa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ue(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new ku(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Fa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new ku(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Fa(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:qM(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function qM(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return xe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rc(t){t=Cr(t,En);const e=Cr(t.firestore,oa);return IM(v0(e),t._key).then(n=>KM(e,t,n))}class kS extends $M{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ko(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new En(this.firestore,null,n)}}function Fs(t){t=Cr(t,yh);const e=Cr(t.firestore,oa),n=v0(e),r=new kS(e);return zM(t._query),AM(n,t._query).then(i=>new HM(e,r,t,i))}function er(t,e,n){t=Cr(t,En);const r=Cr(t.firestore,oa),i=WM(t.converter,e,n);return T0(r,[VM(xS(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ir.none())])}function Ge(t,e,n,...r){t=Cr(t,En);const i=Cr(t.firestore,oa),s=xS(i);let o;return o=typeof(e=$t(e))=="string"||e instanceof xh?BM(s,"updateDoc",t._key,e,n,r):jM(s,"updateDoc",t._key,e),T0(i,[o.toMutation(t._key,ir.exists(!0))])}function gr(t){return T0(Cr(t.firestore,oa),[new t0(t._key,ir.none())])}function T0(t,e){return function(r,i){const s=new Fr;return r.asyncQueue.enqueueAndForget(async()=>vM(await PM(r),i,s)),s.promise}(v0(t),e)}function KM(t,e,n){const r=n.docs.get(e._key),i=new kS(t);return new SS(t,i,e._key,r,new Fa(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){na=i})(ta),Fo(new Cs("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new oa(new WR(r.getProvider("auth-internal")),new GR(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new ue(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Nl(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Mi(L1,"4.7.4",e),Mi(L1,"4.7.4","esm2017")})();var GM="firebase",QM="11.0.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Mi(GM,QM,"app");function S0(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function CS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XM=CS,PS=new Yl("auth","Firebase",CS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=new Hg("@firebase/auth");function YM(t,...e){_d.logLevel<=Pe.WARN&&_d.warn(`Auth (${ta}): ${t}`,...e)}function Cu(t,...e){_d.logLevel<=Pe.ERROR&&_d.error(`Auth (${ta}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(t,...e){throw k0(t,...e)}function wr(t,...e){return k0(t,...e)}function IS(t,e,n){const r=Object.assign(Object.assign({},XM()),{[e]:n});return new Yl("auth","Firebase",r).create(e,{appName:t.name})}function Ur(t){return IS(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function k0(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return PS.create(t,...e)}function ye(t,e,...n){if(!t)throw k0(e,...n)}function Or(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cu(e),new Error(e)}function Zr(t,e){t||Or(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JM(){return wx()==="http:"||wx()==="https:"}function wx(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JM()||_A()||"connection"in navigator)?navigator.onLine:!0}function eO(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zr(n>e,"Short delay should be less than long delay!"),this.isMobile=xA()||EA()}get(){return ZM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t,e){Zr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Or("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Or("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Or("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=new ic(3e4,6e4);function Ji(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zi(t,e,n,r,i={}){return RS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Jl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return wA()||(c.referrerPolicy="no-referrer"),AS.fetch()(DS(t,t.config.apiHost,n,a),c)})}async function RS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},tO),e);try{const i=new iO(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Zc(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zc(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zc(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zc(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw IS(t,u,c);or(t,u)}}catch(i){if(i instanceof ti)throw i;or(t,"network-request-failed",{message:String(i)})}}async function sc(t,e,n,r,i={}){const s=await Zi(t,e,n,r,i);return"mfaPendingCredential"in s&&or(t,"multi-factor-auth-required",{_serverResponse:s}),s}function DS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?C0(t.config,i):`${t.config.apiScheme}://${i}`}function rO(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class iO{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wr(this.auth,"network-request-failed")),nO.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zc(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wr(t,e,r);return i.customData._tokenResponse=n,i}function _x(t){return t!==void 0&&t.enterprise!==void 0}class sO{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return rO(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function oO(t,e){return Zi(t,"GET","/v2/recaptchaConfig",Ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aO(t,e){return Zi(t,"POST","/v1/accounts:delete",e)}async function NS(t,e){return Zi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lO(t,e=!1){const n=$t(t),r=await n.getIdToken(e),i=P0(r);ye(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:il(Vf(i.auth_time)),issuedAtTime:il(Vf(i.iat)),expirationTime:il(Vf(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vf(t){return Number(t)*1e3}function P0(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Cu("JWT malformed, contained fewer than 3 sections"),null;try{const i=GE(n);return i?JSON.parse(i):(Cu("Failed to decode base64 JWT payload"),null)}catch(i){return Cu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ex(t){const e=P0(t);return ye(e,"internal-error"),ye(typeof e.exp<"u","internal-error"),ye(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ti&&cO(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cO({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=il(this.lastLoginAt),this.creationTime=il(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ed(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Vl(t,NS(n,{idToken:r}));ye(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?MS(s.providerUserInfo):[],a=hO(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _m(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function dO(t){const e=$t(t);await Ed(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function hO(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function MS(t){return t.map(e=>{var{providerId:n}=e,r=S0(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fO(t,e){const n=await RS(t,{},async()=>{const r=Jl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=DS(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",AS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function pO(t,e){return Zi(t,"POST","/v2/accounts:revokeToken",Ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ye(e.idToken,"internal-error"),ye(typeof e.idToken<"u","internal-error"),ye(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ex(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ye(e.length!==0,"internal-error");const n=Ex(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ye(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await fO(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Io;return r&&(ye(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(ye(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(ye(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Io,this.toJSON())}_performRefresh(){return Or("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t,e){ye(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=S0(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uO(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _m(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Vl(this,this.stsTokenManager.getToken(this.auth,e));return ye(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lO(this,e)}reload(){return dO(this)}_assign(e){this!==e&&(ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ed(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mr(this.auth.app))return Promise.reject(Ur(this.auth));const e=await this.getIdToken();return await Vl(this,aO(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(c=n.createdAt)!==null&&c!==void 0?c:void 0,b=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:_,emailVerified:R,isAnonymous:E,providerData:A,stsTokenManager:T}=n;ye(_&&T,e,"internal-error");const y=Io.fromJSON(this.name,T);ye(typeof _=="string",e,"internal-error"),ai(f,e.name),ai(p,e.name),ye(typeof R=="boolean",e,"internal-error"),ye(typeof E=="boolean",e,"internal-error"),ai(h,e.name),ai(g,e.name),ai(m,e.name),ai(v,e.name),ai(x,e.name),ai(b,e.name);const S=new Lr({uid:_,auth:e,email:p,emailVerified:R,displayName:f,isAnonymous:E,photoURL:g,phoneNumber:h,tenantId:m,stsTokenManager:y,createdAt:x,lastLoginAt:b});return A&&Array.isArray(A)&&(S.providerData=A.map(k=>Object.assign({},k))),v&&(S._redirectEventId=v),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new Io;i.updateFromServerResponse(n);const s=new Lr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ed(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];ye(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?MS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Io;a.updateFromIdToken(r);const l=new Lr({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new _m(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx=new Map;function Vr(t){Zr(t instanceof Function,"Expected a class definition");let e=Tx.get(t);return e?(Zr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tx.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}OS.type="NONE";const Sx=OS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pu(t,e,n){return`firebase:${t}:${e}:${n}`}class Ao{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Pu(this.userKey,i.apiKey,s),this.fullPersistenceKey=Pu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ao(Vr(Sx),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Vr(Sx);const o=Pu(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const f=Lr._fromJSON(e,u);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ao(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Ao(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kx(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(BS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(LS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(US(e))return"Blackberry";if(zS(e))return"Webos";if(VS(e))return"Safari";if((e.includes("chrome/")||jS(e))&&!e.includes("edge/"))return"Chrome";if(FS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function LS(t=on()){return/firefox\//i.test(t)}function VS(t=on()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jS(t=on()){return/crios\//i.test(t)}function BS(t=on()){return/iemobile/i.test(t)}function FS(t=on()){return/android/i.test(t)}function US(t=on()){return/blackberry/i.test(t)}function zS(t=on()){return/webos/i.test(t)}function I0(t=on()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mO(t=on()){var e;return I0(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function gO(){return TA()&&document.documentMode===10}function $S(t=on()){return I0(t)||FS(t)||zS(t)||US(t)||/windows phone/i.test(t)||BS(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(t,e=[]){let n;switch(t){case"Browser":n=kx(on());break;case"Worker":n=`${kx(on())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ta}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yO(t,e={}){return Zi(t,"GET","/v2/passwordPolicy",Ji(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO=6;class bO{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:xO,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cx(this),this.idTokenSubscription=new Cx(this),this.beforeStateQueue=new vO(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=PS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Vr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ao.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await NS(this,{idToken:e}),r=await Lr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ed(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=eO()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mr(this.app))return Promise.reject(Ur(this));const n=e?$t(e):null;return n&&ye(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mr(this.app)?Promise.reject(Ur(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mr(this.app)?Promise.reject(Ur(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Vr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yO(this),n=new bO(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Yl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await pO(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Vr(e)||this._popupRedirectResolver;ye(n,this,"argument-error"),this.redirectPersistenceManager=await Ao.create(this,[Vr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ye(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=WS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&YM(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Us(t){return $t(t)}class Cx{constructor(e){this.auth=e,this.observer=null,this.addObserver=DA(n=>this.observer=n)}get next(){return ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _h={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _O(t){_h=t}function HS(t){return _h.loadJS(t)}function EO(){return _h.recaptchaEnterpriseScript}function TO(){return _h.gapiScript}function SO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class kO{constructor(){this.enterprise=new CO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class CO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const PO="recaptcha-enterprise",qS="NO_RECAPTCHA";class IO{constructor(e){this.type=PO,this.auth=Us(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{oO(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new sO(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;_x(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(qS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new kO().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&_x(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=EO();l.length!==0&&(l+=a),HS(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Px(t,e,n,r=!1,i=!1){const s=new IO(t);let o;if(i)o=qS;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Em(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Px(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Px(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AO(t,e){const n=Kg(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ud(s,e??{}))return i;or(i,"already-initialized")}return n.initialize({options:e})}function RO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Vr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DO(t,e,n){const r=Us(t);ye(r._canInitEmulator,r,"emulator-config-failed"),ye(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=KS(e),{host:o,port:a}=NO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),MO()}function KS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NO(t){const e=KS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ix(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Ix(o)}}}function Ix(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Or("not implemented")}_getIdTokenResponse(e){return Or("not implemented")}_linkToIdToken(e,n){return Or("not implemented")}_getReauthenticationResolver(e){return Or("not implemented")}}async function OO(t,e){return Zi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LO(t,e){return sc(t,"POST","/v1/accounts:signInWithPassword",Ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VO(t,e){return sc(t,"POST","/v1/accounts:signInWithEmailLink",Ji(t,e))}async function jO(t,e){return sc(t,"POST","/v1/accounts:signInWithEmailLink",Ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends A0{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new jl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new jl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Em(e,n,"signInWithPassword",LO);case"emailLink":return VO(e,{email:this._email,oobCode:this._password});default:or(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Em(e,r,"signUpPassword",OO);case"emailLink":return jO(e,{idToken:n,email:this._email,oobCode:this._password});default:or(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ro(t,e){return sc(t,"POST","/v1/accounts:signInWithIdp",Ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO="http://localhost";class Is extends A0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):or("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=S0(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Is(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ro(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ro(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ro(e,n)}buildRequest(){const e={requestUri:BO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Jl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UO(t){const e=Oa(La(t)).link,n=e?Oa(La(e)).deep_link_id:null,r=Oa(La(t)).deep_link_id;return(r?Oa(La(r)).link:null)||r||n||e||t}class R0{constructor(e){var n,r,i,s,o,a;const l=Oa(La(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,f=FO((i=l.mode)!==null&&i!==void 0?i:null);ye(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UO(e);try{return new R0(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(){this.providerId=aa.PROVIDER_ID}static credential(e,n){return jl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=R0.parseLink(n);return ye(r,"argument-error"),jl._fromEmailAndCode(e,r.code,r.tenantId)}}aa.PROVIDER_ID="password";aa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";aa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends GS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends oc{constructor(){super("facebook.com")}static credential(e){return Is._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mi.credential(e.oauthAccessToken)}catch{return null}}}mi.FACEBOOK_SIGN_IN_METHOD="facebook.com";mi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends oc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Is._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gi.credential(n,r)}catch{return null}}}gi.GOOGLE_SIGN_IN_METHOD="google.com";gi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends oc{constructor(){super("github.com")}static credential(e){return Is._fromParams({providerId:vi.PROVIDER_ID,signInMethod:vi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vi.credentialFromTaggedObject(e)}static credentialFromError(e){return vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vi.credential(e.oauthAccessToken)}catch{return null}}}vi.GITHUB_SIGN_IN_METHOD="github.com";vi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends oc{constructor(){super("twitter.com")}static credential(e,n){return Is._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yi.credential(n,r)}catch{return null}}}yi.TWITTER_SIGN_IN_METHOD="twitter.com";yi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zO(t,e){return sc(t,"POST","/v1/accounts:signUp",Ji(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Lr._fromIdTokenResponse(e,r,i),o=Ax(r);return new As({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ax(r);return new As({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ax(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td extends ti{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Td.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Td(e,n,r,i)}}function QS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Td._fromErrorAndOperation(t,s,e,r):s})}async function $O(t,e,n=!1){const r=await Vl(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return As._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WO(t,e,n=!1){const{auth:r}=t;if(mr(r.app))return Promise.reject(Ur(r));const i="reauthenticate";try{const s=await Vl(t,QS(r,i,e,t),n);ye(s.idToken,r,"internal-error");const o=P0(s.idToken);ye(o,r,"internal-error");const{sub:a}=o;return ye(t.uid===a,r,"user-mismatch"),As._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&or(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(t,e,n=!1){if(mr(t.app))return Promise.reject(Ur(t));const r="signIn",i=await QS(t,r,e),s=await As._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function HO(t,e){return XS(Us(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t){const e=Us(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function qO(t,e,n){if(mr(t.app))return Promise.reject(Ur(t));const r=Us(t),o=await Em(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",zO).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&YS(t),l}),a=await As._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function KO(t,e,n){return mr(t.app)?Promise.reject(Ur(t)):HO($t(t),aa.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&YS(t),r})}function GO(t,e,n,r){return $t(t).onIdTokenChanged(e,n,r)}function QO(t,e,n){return $t(t).beforeAuthStateChanged(e,n)}function $i(t,e,n,r){return $t(t).onAuthStateChanged(e,n,r)}function XO(t){return $t(t).signOut()}const Sd="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Sd,"1"),this.storage.removeItem(Sd),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO=1e3,JO=10;class ZS extends JS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$S(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);gO()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ZS.type="LOCAL";const ZO=ZS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek extends JS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ek.type="SESSION";const tk=ek;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Eh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await eL(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Eh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D0(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=D0("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(){return window}function nL(t){_r().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nk(){return typeof _r().WorkerGlobalScope<"u"&&typeof _r().importScripts=="function"}async function rL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sL(){return nk()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk="firebaseLocalStorageDb",oL=1,kd="firebaseLocalStorage",ik="fbase_key";class ac{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Th(t,e){return t.transaction([kd],e?"readwrite":"readonly").objectStore(kd)}function aL(){const t=indexedDB.deleteDatabase(rk);return new ac(t).toPromise()}function Tm(){const t=indexedDB.open(rk,oL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kd,{keyPath:ik})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kd)?e(r):(r.close(),await aL(),e(await Tm()))})})}async function Rx(t,e,n){const r=Th(t,!0).put({[ik]:e,value:n});return new ac(r).toPromise()}async function lL(t,e){const n=Th(t,!1).get(e),r=await new ac(n).toPromise();return r===void 0?null:r.value}function Dx(t,e){const n=Th(t,!0).delete(e);return new ac(n).toPromise()}const cL=800,uL=3;class sk{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nk()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Eh._getInstance(sL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rL(),!this.activeServiceWorker)return;this.sender=new tL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tm();return await Rx(e,Sd,"1"),await Dx(e,Sd),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Rx(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lL(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dx(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Th(i,!1).getAll();return new ac(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sk.type="LOCAL";const dL=sk;new ic(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hL(t,e){return e?Vr(e):(ye(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0 extends A0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ro(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ro(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ro(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fL(t){return XS(t.auth,new N0(t),t.bypassAuthState)}function pL(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),WO(n,new N0(t),t.bypassAuthState)}async function mL(t){const{auth:e,user:n}=t;return ye(n,e,"internal-error"),$O(n,new N0(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fL;case"linkViaPopup":case"linkViaRedirect":return mL;case"reauthViaPopup":case"reauthViaRedirect":return pL;default:or(this.auth,"internal-error")}}resolve(e){Zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gL=new ic(2e3,1e4);class go extends ok{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,go.currentPopupAction&&go.currentPopupAction.cancel(),go.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ye(e,this.auth,"internal-error"),e}async onExecution(){Zr(this.filter.length===1,"Popup operations only handle one event");const e=D0();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,go.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gL.get())};e()}}go.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vL="pendingRedirect",Iu=new Map;class yL extends ok{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Iu.get(this.auth._key());if(!e){try{const r=await xL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Iu.set(this.auth._key(),e)}return this.bypassAuthState||Iu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xL(t,e){const n=_L(e),r=wL(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function bL(t,e){Iu.set(t._key(),e)}function wL(t){return Vr(t._redirectPersistence)}function _L(t){return Pu(vL,t.config.apiKey,t.name)}async function EL(t,e,n=!1){if(mr(t.app))return Promise.reject(Ur(t));const r=Us(t),i=hL(r,e),o=await new yL(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL=10*60*1e3;class SL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ak(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wr(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=TL&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nx(e))}saveEventToCache(e){this.cachedEventUids.add(Nx(e)),this.lastProcessedEventTime=Date.now()}}function Nx(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ak({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ak(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CL(t,e={}){return Zi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IL=/^https?/;async function AL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CL(t);for(const n of e)try{if(RL(n))return}catch{}or(t,"unauthorized-domain")}function RL(t){const e=wm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!IL.test(n))return!1;if(PL.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DL=new ic(3e4,6e4);function Mx(){const t=_r().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NL(t){return new Promise((e,n)=>{var r,i,s;function o(){Mx(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mx(),n(wr(t,"network-request-failed"))},timeout:DL.get()})}if(!((i=(r=_r().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=_r().gapi)===null||s===void 0)&&s.load)o();else{const a=SO("iframefcb");return _r()[a]=()=>{gapi.load?o():n(wr(t,"network-request-failed"))},HS(`${TO()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Au=null,e})}let Au=null;function ML(t){return Au=Au||NL(t),Au}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL=new ic(5e3,15e3),LL="__/auth/iframe",VL="emulator/auth/iframe",jL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},BL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FL(t){const e=t.config;ye(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?C0(e,VL):`https://${t.config.authDomain}/${LL}`,r={apiKey:e.apiKey,appName:t.name,v:ta},i=BL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Jl(r).slice(1)}`}async function UL(t){const e=await ML(t),n=_r().gapi;return ye(n,t,"internal-error"),e.open({where:document.body,url:FL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=wr(t,"network-request-failed"),a=_r().setTimeout(()=>{s(o)},OL.get());function l(){_r().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$L=500,WL=600,HL="_blank",qL="http://localhost";class Ox{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KL(t,e,n,r=$L,i=WL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zL),{width:r.toString(),height:i.toString(),top:s,left:o}),c=on().toLowerCase();n&&(a=jS(c)?HL:n),LS(c)&&(e=e||qL,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[h,g])=>`${p}${h}=${g},`,"");if(mO(c)&&a!=="_self")return GL(e||"",a),new Ox(null);const f=window.open(e||"",a,u);ye(f,t,"popup-blocked");try{f.focus()}catch{}return new Ox(f)}function GL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QL="__/auth/handler",XL="emulator/auth/handler",YL=encodeURIComponent("fac");async function Lx(t,e,n,r,i,s){ye(t.config.authDomain,t,"auth-domain-config-required"),ye(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ta,eventId:i};if(e instanceof GS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",RA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof oc){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${YL}=${encodeURIComponent(l)}`:"";return`${JL(t)}?${Jl(a).slice(1)}${c}`}function JL({config:t}){return t.emulator?C0(t,XL):`https://${t.authDomain}/${QL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf="webStorageSupport";class ZL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tk,this._completeRedirectFn=EL,this._overrideRedirectResult=bL}async _openPopup(e,n,r,i){var s;Zr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Lx(e,n,r,wm(),i);return KL(e,o,D0())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Lx(e,n,r,wm(),i);return nL(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UL(e),r=new SL(e);return n.register("authEvent",i=>(ye(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jf,{type:jf},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[jf];o!==void 0&&n(!!o),or(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=AL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return $S()||VS()||I0()}}const eV=ZL;var Vx="@firebase/auth",jx="1.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rV(t){Fo(new Cs("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;ye(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:WS(t)},c=new wO(r,i,s,l);return RO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fo(new Cs("auth-internal",e=>{const n=Us(e.getProvider("auth").getImmediate());return(r=>new tV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Mi(Vx,jx,nV(t)),Mi(Vx,jx,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iV=5*60,sV=YE("authIdTokenMaxAge")||iV;let Bx=null;const oV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sV)return;const i=n==null?void 0:n.token;Bx!==i&&(Bx=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lk(t=tT()){const e=Kg(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AO(t,{popupRedirectResolver:eV,persistence:[dL,ZO,tk]}),r=YE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=oV(s.toString());QO(n,o,()=>o(n.currentUser)),GO(n,a=>o(a))}}const i=QE("auth");return i&&DO(n,`http://${i}`),n}function aV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_O({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wr("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",aV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rV("Browser");const lV={apiKey:"AIzaSyDpibbohgF-9aoUymLOQIJSKrDnYqr7ThU",authDomain:"kittytask.firebaseapp.com",projectId:"kittytask",storageBucket:"kittytask.firebasestorage.app",messagingSenderId:"731649481968",appId:"1:731649481968:web:373ca9c61500eb2c5df635",measurementId:"G-19NGHN1W0S"},ck=eT(lV),Ve=lk(ck),ae=gS(ck);function cV(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return M.useMemo(()=>r=>{e.forEach(i=>i(r))},e)}const Sh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function la(t){const e=Object.prototype.toString.call(t);return e==="[object Window]"||e==="[object global]"}function M0(t){return"nodeType"in t}function Tn(t){var e,n;return t?la(t)?t:M0(t)&&(e=(n=t.ownerDocument)==null?void 0:n.defaultView)!=null?e:window:window}function O0(t){const{Document:e}=Tn(t);return t instanceof e}function lc(t){return la(t)?!1:t instanceof Tn(t).HTMLElement}function uk(t){return t instanceof Tn(t).SVGElement}function ca(t){return t?la(t)?t.document:M0(t)?O0(t)?t:lc(t)||uk(t)?t.ownerDocument:document:document:document}const ar=Sh?M.useLayoutEffect:M.useEffect;function L0(t){const e=M.useRef(t);return ar(()=>{e.current=t}),M.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current==null?void 0:e.current(...r)},[])}function uV(){const t=M.useRef(null),e=M.useCallback((r,i)=>{t.current=setInterval(r,i)},[]),n=M.useCallback(()=>{t.current!==null&&(clearInterval(t.current),t.current=null)},[]);return[e,n]}function Bl(t,e){e===void 0&&(e=[t]);const n=M.useRef(t);return ar(()=>{n.current!==t&&(n.current=t)},e),n}function cc(t,e){const n=M.useRef();return M.useMemo(()=>{const r=t(n.current);return n.current=r,r},[...e])}function Cd(t){const e=L0(t),n=M.useRef(null),r=M.useCallback(i=>{i!==n.current&&(e==null||e(i,n.current)),n.current=i},[]);return[n,r]}function Sm(t){const e=M.useRef();return M.useEffect(()=>{e.current=t},[t]),e.current}let Bf={};function uc(t,e){return M.useMemo(()=>{if(e)return e;const n=Bf[t]==null?0:Bf[t]+1;return Bf[t]=n,t+"-"+n},[t,e])}function dk(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce((s,o)=>{const a=Object.entries(o);for(const[l,c]of a){const u=s[l];u!=null&&(s[l]=u+t*c)}return s},{...e})}}const Do=dk(1),Pd=dk(-1);function dV(t){return"clientX"in t&&"clientY"in t}function V0(t){if(!t)return!1;const{KeyboardEvent:e}=Tn(t.target);return e&&t instanceof e}function hV(t){if(!t)return!1;const{TouchEvent:e}=Tn(t.target);return e&&t instanceof e}function km(t){if(hV(t)){if(t.touches&&t.touches.length){const{clientX:e,clientY:n}=t.touches[0];return{x:e,y:n}}else if(t.changedTouches&&t.changedTouches.length){const{clientX:e,clientY:n}=t.changedTouches[0];return{x:e,y:n}}}return dV(t)?{x:t.clientX,y:t.clientY}:null}const Id=Object.freeze({Translate:{toString(t){if(!t)return;const{x:e,y:n}=t;return"translate3d("+(e?Math.round(e):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(t){if(!t)return;const{scaleX:e,scaleY:n}=t;return"scaleX("+e+") scaleY("+n+")"}},Transform:{toString(t){if(t)return[Id.Translate.toString(t),Id.Scale.toString(t)].join(" ")}},Transition:{toString(t){let{property:e,duration:n,easing:r}=t;return e+" "+n+"ms "+r}}}),Fx="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function fV(t){return t.matches(Fx)?t:t.querySelector(Fx)}const pV={display:"none"};function mV(t){let{id:e,value:n}=t;return be.createElement("div",{id:e,style:pV},n)}function gV(t){let{id:e,announcement:n,ariaLiveType:r="assertive"}=t;const i={position:"fixed",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return be.createElement("div",{id:e,style:i,role:"status","aria-live":r,"aria-atomic":!0},n)}function vV(){const[t,e]=M.useState("");return{announce:M.useCallback(r=>{r!=null&&e(r)},[]),announcement:t}}const hk=M.createContext(null);function yV(t){const e=M.useContext(hk);M.useEffect(()=>{if(!e)throw new Error("useDndMonitor must be used within a children of <DndContext>");return e(t)},[t,e])}function xV(){const[t]=M.useState(()=>new Set),e=M.useCallback(r=>(t.add(r),()=>t.delete(r)),[t]);return[M.useCallback(r=>{let{type:i,event:s}=r;t.forEach(o=>{var a;return(a=o[i])==null?void 0:a.call(o,s)})},[t]),e]}const bV={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},wV={onDragStart(t){let{active:e}=t;return"Picked up draggable item "+e.id+"."},onDragOver(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was moved over droppable area "+n.id+".":"Draggable item "+e.id+" is no longer over a droppable area."},onDragEnd(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was dropped over droppable area "+n.id:"Draggable item "+e.id+" was dropped."},onDragCancel(t){let{active:e}=t;return"Dragging was cancelled. Draggable item "+e.id+" was dropped."}};function _V(t){let{announcements:e=wV,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=bV}=t;const{announce:s,announcement:o}=vV(),a=uc("DndLiveRegion"),[l,c]=M.useState(!1);if(M.useEffect(()=>{c(!0)},[]),yV(M.useMemo(()=>({onDragStart(f){let{active:p}=f;s(e.onDragStart({active:p}))},onDragMove(f){let{active:p,over:h}=f;e.onDragMove&&s(e.onDragMove({active:p,over:h}))},onDragOver(f){let{active:p,over:h}=f;s(e.onDragOver({active:p,over:h}))},onDragEnd(f){let{active:p,over:h}=f;s(e.onDragEnd({active:p,over:h}))},onDragCancel(f){let{active:p,over:h}=f;s(e.onDragCancel({active:p,over:h}))}}),[s,e])),!l)return null;const u=be.createElement(be.Fragment,null,be.createElement(mV,{id:r,value:i.draggable}),be.createElement(gV,{id:a,announcement:o}));return n?hs.createPortal(u,n):u}var _t;(function(t){t.DragStart="dragStart",t.DragMove="dragMove",t.DragEnd="dragEnd",t.DragCancel="dragCancel",t.DragOver="dragOver",t.RegisterDroppable="registerDroppable",t.SetDroppableDisabled="setDroppableDisabled",t.UnregisterDroppable="unregisterDroppable"})(_t||(_t={}));function Ad(){}function Rd(t,e){return M.useMemo(()=>({sensor:t,options:e??{}}),[t,e])}function fk(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return M.useMemo(()=>[...e].filter(r=>r!=null),[...e])}const lr=Object.freeze({x:0,y:0});function EV(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function TV(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return n-r}function SV(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return r-n}function kV(t,e){if(!t||t.length===0)return null;const[n]=t;return n[e]}function Ux(t,e,n){return e===void 0&&(e=t.left),n===void 0&&(n=t.top),{x:e+t.width*.5,y:n+t.height*.5}}const pk=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const i=Ux(e,e.left,e.top),s=[];for(const o of r){const{id:a}=o,l=n.get(a);if(l){const c=EV(Ux(l),i);s.push({id:a,data:{droppableContainer:o,value:c}})}}return s.sort(TV)};function CV(t,e){const n=Math.max(e.top,t.top),r=Math.max(e.left,t.left),i=Math.min(e.left+e.width,t.left+t.width),s=Math.min(e.top+e.height,t.top+t.height),o=i-r,a=s-n;if(r<i&&n<s){const l=e.width*e.height,c=t.width*t.height,u=o*a,f=u/(l+c-u);return Number(f.toFixed(4))}return 0}const PV=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const i=[];for(const s of r){const{id:o}=s,a=n.get(o);if(a){const l=CV(a,e);l>0&&i.push({id:o,data:{droppableContainer:s,value:l}})}}return i.sort(SV)};function IV(t,e,n){return{...t,scaleX:e&&n?e.width/n.width:1,scaleY:e&&n?e.height/n.height:1}}function mk(t,e){return t&&e?{x:t.left-e.left,y:t.top-e.top}:lr}function AV(t){return function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return i.reduce((o,a)=>({...o,top:o.top+t*a.y,bottom:o.bottom+t*a.y,left:o.left+t*a.x,right:o.right+t*a.x}),{...n})}}const RV=AV(1);function DV(t){if(t.startsWith("matrix3d(")){const e=t.slice(9,-1).split(/, /);return{x:+e[12],y:+e[13],scaleX:+e[0],scaleY:+e[5]}}else if(t.startsWith("matrix(")){const e=t.slice(7,-1).split(/, /);return{x:+e[4],y:+e[5],scaleX:+e[0],scaleY:+e[3]}}return null}function NV(t,e,n){const r=DV(e);if(!r)return t;const{scaleX:i,scaleY:s,x:o,y:a}=r,l=t.left-o-(1-i)*parseFloat(n),c=t.top-a-(1-s)*parseFloat(n.slice(n.indexOf(" ")+1)),u=i?t.width/i:t.width,f=s?t.height/s:t.height;return{width:u,height:f,top:c,right:l+u,bottom:c+f,left:l}}const MV={ignoreTransform:!1};function ua(t,e){e===void 0&&(e=MV);let n=t.getBoundingClientRect();if(e.ignoreTransform){const{transform:c,transformOrigin:u}=Tn(t).getComputedStyle(t);c&&(n=NV(n,c,u))}const{top:r,left:i,width:s,height:o,bottom:a,right:l}=n;return{top:r,left:i,width:s,height:o,bottom:a,right:l}}function zx(t){return ua(t,{ignoreTransform:!0})}function OV(t){const e=t.innerWidth,n=t.innerHeight;return{top:0,left:0,right:e,bottom:n,width:e,height:n}}function LV(t,e){return e===void 0&&(e=Tn(t).getComputedStyle(t)),e.position==="fixed"}function VV(t,e){e===void 0&&(e=Tn(t).getComputedStyle(t));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(i=>{const s=e[i];return typeof s=="string"?n.test(s):!1})}function j0(t,e){const n=[];function r(i){if(e!=null&&n.length>=e||!i)return n;if(O0(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!lc(i)||uk(i)||n.includes(i))return n;const s=Tn(t).getComputedStyle(i);return i!==t&&VV(i,s)&&n.push(i),LV(i,s)?n:r(i.parentNode)}return t?r(t):n}function gk(t){const[e]=j0(t,1);return e??null}function Ff(t){return!Sh||!t?null:la(t)?t:M0(t)?O0(t)||t===ca(t).scrollingElement?window:lc(t)?t:null:null}function vk(t){return la(t)?t.scrollX:t.scrollLeft}function yk(t){return la(t)?t.scrollY:t.scrollTop}function Cm(t){return{x:vk(t),y:yk(t)}}var Rt;(function(t){t[t.Forward=1]="Forward",t[t.Backward=-1]="Backward"})(Rt||(Rt={}));function xk(t){return!Sh||!t?!1:t===document.scrollingElement}function bk(t){const e={x:0,y:0},n=xk(t)?{height:window.innerHeight,width:window.innerWidth}:{height:t.clientHeight,width:t.clientWidth},r={x:t.scrollWidth-n.width,y:t.scrollHeight-n.height},i=t.scrollTop<=e.y,s=t.scrollLeft<=e.x,o=t.scrollTop>=r.y,a=t.scrollLeft>=r.x;return{isTop:i,isLeft:s,isBottom:o,isRight:a,maxScroll:r,minScroll:e}}const jV={x:.2,y:.2};function BV(t,e,n,r,i){let{top:s,left:o,right:a,bottom:l}=n;r===void 0&&(r=10),i===void 0&&(i=jV);const{isTop:c,isBottom:u,isLeft:f,isRight:p}=bk(t),h={x:0,y:0},g={x:0,y:0},m={height:e.height*i.y,width:e.width*i.x};return!c&&s<=e.top+m.height?(h.y=Rt.Backward,g.y=r*Math.abs((e.top+m.height-s)/m.height)):!u&&l>=e.bottom-m.height&&(h.y=Rt.Forward,g.y=r*Math.abs((e.bottom-m.height-l)/m.height)),!p&&a>=e.right-m.width?(h.x=Rt.Forward,g.x=r*Math.abs((e.right-m.width-a)/m.width)):!f&&o<=e.left+m.width&&(h.x=Rt.Backward,g.x=r*Math.abs((e.left+m.width-o)/m.width)),{direction:h,speed:g}}function FV(t){if(t===document.scrollingElement){const{innerWidth:s,innerHeight:o}=window;return{top:0,left:0,right:s,bottom:o,width:s,height:o}}const{top:e,left:n,right:r,bottom:i}=t.getBoundingClientRect();return{top:e,left:n,right:r,bottom:i,width:t.clientWidth,height:t.clientHeight}}function wk(t){return t.reduce((e,n)=>Do(e,Cm(n)),lr)}function UV(t){return t.reduce((e,n)=>e+vk(n),0)}function zV(t){return t.reduce((e,n)=>e+yk(n),0)}function $V(t,e){if(e===void 0&&(e=ua),!t)return;const{top:n,left:r,bottom:i,right:s}=e(t);gk(t)&&(i<=0||s<=0||n>=window.innerHeight||r>=window.innerWidth)&&t.scrollIntoView({block:"center",inline:"center"})}const WV=[["x",["left","right"],UV],["y",["top","bottom"],zV]];class B0{constructor(e,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=j0(n),i=wk(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[s,o,a]of WV)for(const l of o)Object.defineProperty(this,l,{get:()=>{const c=a(r),u=i[s]-c;return this.rect[l]+u},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class sl{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=e}add(e,n,r){var i;(i=this.target)==null||i.addEventListener(e,n,r),this.listeners.push([e,n,r])}}function HV(t){const{EventTarget:e}=Tn(t);return t instanceof e?t:ca(t)}function Uf(t,e){const n=Math.abs(t.x),r=Math.abs(t.y);return typeof e=="number"?Math.sqrt(n**2+r**2)>e:"x"in e&&"y"in e?n>e.x&&r>e.y:"x"in e?n>e.x:"y"in e?r>e.y:!1}var Fn;(function(t){t.Click="click",t.DragStart="dragstart",t.Keydown="keydown",t.ContextMenu="contextmenu",t.Resize="resize",t.SelectionChange="selectionchange",t.VisibilityChange="visibilitychange"})(Fn||(Fn={}));function $x(t){t.preventDefault()}function qV(t){t.stopPropagation()}var Fe;(function(t){t.Space="Space",t.Down="ArrowDown",t.Right="ArrowRight",t.Left="ArrowLeft",t.Up="ArrowUp",t.Esc="Escape",t.Enter="Enter"})(Fe||(Fe={}));const _k={start:[Fe.Space,Fe.Enter],cancel:[Fe.Esc],end:[Fe.Space,Fe.Enter]},KV=(t,e)=>{let{currentCoordinates:n}=e;switch(t.code){case Fe.Right:return{...n,x:n.x+25};case Fe.Left:return{...n,x:n.x-25};case Fe.Down:return{...n,y:n.y+25};case Fe.Up:return{...n,y:n.y-25}}};class Ek{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:n}}=e;this.props=e,this.listeners=new sl(ca(n)),this.windowListeners=new sl(Tn(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Fn.Resize,this.handleCancel),this.windowListeners.add(Fn.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Fn.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:n}=this.props,r=e.node.current;r&&$V(r),n(lr)}handleKeyDown(e){if(V0(e)){const{active:n,context:r,options:i}=this.props,{keyboardCodes:s=_k,coordinateGetter:o=KV,scrollBehavior:a="smooth"}=i,{code:l}=e;if(s.end.includes(l)){this.handleEnd(e);return}if(s.cancel.includes(l)){this.handleCancel(e);return}const{collisionRect:c}=r.current,u=c?{x:c.left,y:c.top}:lr;this.referenceCoordinates||(this.referenceCoordinates=u);const f=o(e,{active:n,context:r.current,currentCoordinates:u});if(f){const p=Pd(f,u),h={x:0,y:0},{scrollableAncestors:g}=r.current;for(const m of g){const v=e.code,{isTop:x,isRight:b,isLeft:_,isBottom:R,maxScroll:E,minScroll:A}=bk(m),T=FV(m),y={x:Math.min(v===Fe.Right?T.right-T.width/2:T.right,Math.max(v===Fe.Right?T.left:T.left+T.width/2,f.x)),y:Math.min(v===Fe.Down?T.bottom-T.height/2:T.bottom,Math.max(v===Fe.Down?T.top:T.top+T.height/2,f.y))},S=v===Fe.Right&&!b||v===Fe.Left&&!_,k=v===Fe.Down&&!R||v===Fe.Up&&!x;if(S&&y.x!==f.x){const I=m.scrollLeft+p.x,D=v===Fe.Right&&I<=E.x||v===Fe.Left&&I>=A.x;if(D&&!p.y){m.scrollTo({left:I,behavior:a});return}D?h.x=m.scrollLeft-I:h.x=v===Fe.Right?m.scrollLeft-E.x:m.scrollLeft-A.x,h.x&&m.scrollBy({left:-h.x,behavior:a});break}else if(k&&y.y!==f.y){const I=m.scrollTop+p.y,D=v===Fe.Down&&I<=E.y||v===Fe.Up&&I>=A.y;if(D&&!p.x){m.scrollTo({top:I,behavior:a});return}D?h.y=m.scrollTop-I:h.y=v===Fe.Down?m.scrollTop-E.y:m.scrollTop-A.y,h.y&&m.scrollBy({top:-h.y,behavior:a});break}}this.handleMove(e,Do(Pd(f,this.referenceCoordinates),h))}}}handleMove(e,n){const{onMove:r}=this.props;e.preventDefault(),r(n)}handleEnd(e){const{onEnd:n}=this.props;e.preventDefault(),this.detach(),n()}handleCancel(e){const{onCancel:n}=this.props;e.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}Ek.activators=[{eventName:"onKeyDown",handler:(t,e,n)=>{let{keyboardCodes:r=_k,onActivation:i}=e,{active:s}=n;const{code:o}=t.nativeEvent;if(r.start.includes(o)){const a=s.activatorNode.current;return a&&t.target!==a?!1:(t.preventDefault(),i==null||i({event:t.nativeEvent}),!0)}return!1}}];function Wx(t){return!!(t&&"distance"in t)}function Hx(t){return!!(t&&"delay"in t)}class F0{constructor(e,n,r){var i;r===void 0&&(r=HV(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=n;const{event:s}=e,{target:o}=s;this.props=e,this.events=n,this.document=ca(o),this.documentListeners=new sl(this.document),this.listeners=new sl(r),this.windowListeners=new sl(Tn(o)),this.initialCoordinates=(i=km(s))!=null?i:lr,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),this.windowListeners.add(Fn.Resize,this.handleCancel),this.windowListeners.add(Fn.DragStart,$x),this.windowListeners.add(Fn.VisibilityChange,this.handleCancel),this.windowListeners.add(Fn.ContextMenu,$x),this.documentListeners.add(Fn.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Hx(n)){this.timeoutId=setTimeout(this.handleStart,n.delay);return}if(Wx(n))return}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handleStart(){const{initialCoordinates:e}=this,{onStart:n}=this.props;e&&(this.activated=!0,this.documentListeners.add(Fn.Click,qV,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Fn.SelectionChange,this.removeTextSelection),n(e))}handleMove(e){var n;const{activated:r,initialCoordinates:i,props:s}=this,{onMove:o,options:{activationConstraint:a}}=s;if(!i)return;const l=(n=km(e))!=null?n:lr,c=Pd(i,l);if(!r&&a){if(Wx(a)){if(a.tolerance!=null&&Uf(c,a.tolerance))return this.handleCancel();if(Uf(c,a.distance))return this.handleStart()}return Hx(a)&&Uf(c,a.tolerance)?this.handleCancel():void 0}e.cancelable&&e.preventDefault(),o(l)}handleEnd(){const{onEnd:e}=this.props;this.detach(),e()}handleCancel(){const{onCancel:e}=this.props;this.detach(),e()}handleKeydown(e){e.code===Fe.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}}const GV={move:{name:"pointermove"},end:{name:"pointerup"}};class Tk extends F0{constructor(e){const{event:n}=e,r=ca(n.target);super(e,GV,r)}}Tk.activators=[{eventName:"onPointerDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const QV={move:{name:"mousemove"},end:{name:"mouseup"}};var Pm;(function(t){t[t.RightClick=2]="RightClick"})(Pm||(Pm={}));class U0 extends F0{constructor(e){super(e,QV,ca(e.event.target))}}U0.activators=[{eventName:"onMouseDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return n.button===Pm.RightClick?!1:(r==null||r({event:n}),!0)}}];const zf={move:{name:"touchmove"},end:{name:"touchend"}};class z0 extends F0{constructor(e){super(e,zf)}static setup(){return window.addEventListener(zf.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(zf.move.name,e)};function e(){}}}z0.activators=[{eventName:"onTouchStart",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;const{touches:i}=n;return i.length>1?!1:(r==null||r({event:n}),!0)}}];var ol;(function(t){t[t.Pointer=0]="Pointer",t[t.DraggableRect=1]="DraggableRect"})(ol||(ol={}));var Dd;(function(t){t[t.TreeOrder=0]="TreeOrder",t[t.ReversedTreeOrder=1]="ReversedTreeOrder"})(Dd||(Dd={}));function XV(t){let{acceleration:e,activator:n=ol.Pointer,canScroll:r,draggingRect:i,enabled:s,interval:o=5,order:a=Dd.TreeOrder,pointerCoordinates:l,scrollableAncestors:c,scrollableAncestorRects:u,delta:f,threshold:p}=t;const h=JV({delta:f,disabled:!s}),[g,m]=uV(),v=M.useRef({x:0,y:0}),x=M.useRef({x:0,y:0}),b=M.useMemo(()=>{switch(n){case ol.Pointer:return l?{top:l.y,bottom:l.y,left:l.x,right:l.x}:null;case ol.DraggableRect:return i}},[n,i,l]),_=M.useRef(null),R=M.useCallback(()=>{const A=_.current;if(!A)return;const T=v.current.x*x.current.x,y=v.current.y*x.current.y;A.scrollBy(T,y)},[]),E=M.useMemo(()=>a===Dd.TreeOrder?[...c].reverse():c,[a,c]);M.useEffect(()=>{if(!s||!c.length||!b){m();return}for(const A of E){if((r==null?void 0:r(A))===!1)continue;const T=c.indexOf(A),y=u[T];if(!y)continue;const{direction:S,speed:k}=BV(A,y,b,e,p);for(const I of["x","y"])h[I][S[I]]||(k[I]=0,S[I]=0);if(k.x>0||k.y>0){m(),_.current=A,g(R,o),v.current=k,x.current=S;return}}v.current={x:0,y:0},x.current={x:0,y:0},m()},[e,R,r,m,s,o,JSON.stringify(b),JSON.stringify(h),g,c,E,u,JSON.stringify(p)])}const YV={x:{[Rt.Backward]:!1,[Rt.Forward]:!1},y:{[Rt.Backward]:!1,[Rt.Forward]:!1}};function JV(t){let{delta:e,disabled:n}=t;const r=Sm(e);return cc(i=>{if(n||!r||!i)return YV;const s={x:Math.sign(e.x-r.x),y:Math.sign(e.y-r.y)};return{x:{[Rt.Backward]:i.x[Rt.Backward]||s.x===-1,[Rt.Forward]:i.x[Rt.Forward]||s.x===1},y:{[Rt.Backward]:i.y[Rt.Backward]||s.y===-1,[Rt.Forward]:i.y[Rt.Forward]||s.y===1}}},[n,e,r])}function ZV(t,e){const n=e!==null?t.get(e):void 0,r=n?n.node.current:null;return cc(i=>{var s;return e===null?null:(s=r??i)!=null?s:null},[r,e])}function e4(t,e){return M.useMemo(()=>t.reduce((n,r)=>{const{sensor:i}=r,s=i.activators.map(o=>({eventName:o.eventName,handler:e(o.handler,r)}));return[...n,...s]},[]),[t,e])}var Fl;(function(t){t[t.Always=0]="Always",t[t.BeforeDragging=1]="BeforeDragging",t[t.WhileDragging=2]="WhileDragging"})(Fl||(Fl={}));var Im;(function(t){t.Optimized="optimized"})(Im||(Im={}));const qx=new Map;function t4(t,e){let{dragging:n,dependencies:r,config:i}=e;const[s,o]=M.useState(null),{frequency:a,measure:l,strategy:c}=i,u=M.useRef(t),f=v(),p=Bl(f),h=M.useCallback(function(x){x===void 0&&(x=[]),!p.current&&o(b=>b===null?x:b.concat(x.filter(_=>!b.includes(_))))},[p]),g=M.useRef(null),m=cc(x=>{if(f&&!n)return qx;if(!x||x===qx||u.current!==t||s!=null){const b=new Map;for(let _ of t){if(!_)continue;if(s&&s.length>0&&!s.includes(_.id)&&_.rect.current){b.set(_.id,_.rect.current);continue}const R=_.node.current,E=R?new B0(l(R),R):null;_.rect.current=E,E&&b.set(_.id,E)}return b}return x},[t,s,n,f,l]);return M.useEffect(()=>{u.current=t},[t]),M.useEffect(()=>{f||h()},[n,f]),M.useEffect(()=>{s&&s.length>0&&o(null)},[JSON.stringify(s)]),M.useEffect(()=>{f||typeof a!="number"||g.current!==null||(g.current=setTimeout(()=>{h(),g.current=null},a))},[a,f,h,...r]),{droppableRects:m,measureDroppableContainers:h,measuringScheduled:s!=null};function v(){switch(c){case Fl.Always:return!1;case Fl.BeforeDragging:return n;default:return!n}}}function Sk(t,e){return cc(n=>t?n||(typeof e=="function"?e(t):t):null,[e,t])}function n4(t,e){return Sk(t,e)}function r4(t){let{callback:e,disabled:n}=t;const r=L0(e),i=M.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:s}=window;return new s(r)},[r,n]);return M.useEffect(()=>()=>i==null?void 0:i.disconnect(),[i]),i}function kh(t){let{callback:e,disabled:n}=t;const r=L0(e),i=M.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:s}=window;return new s(r)},[n]);return M.useEffect(()=>()=>i==null?void 0:i.disconnect(),[i]),i}function i4(t){return new B0(ua(t),t)}function Kx(t,e,n){e===void 0&&(e=i4);const[r,i]=M.useReducer(a,null),s=r4({callback(l){if(t)for(const c of l){const{type:u,target:f}=c;if(u==="childList"&&f instanceof HTMLElement&&f.contains(t)){i();break}}}}),o=kh({callback:i});return ar(()=>{i(),t?(o==null||o.observe(t),s==null||s.observe(document.body,{childList:!0,subtree:!0})):(o==null||o.disconnect(),s==null||s.disconnect())},[t]),r;function a(l){if(!t)return null;if(t.isConnected===!1){var c;return(c=l??n)!=null?c:null}const u=e(t);return JSON.stringify(l)===JSON.stringify(u)?l:u}}function s4(t){const e=Sk(t);return mk(t,e)}const Gx=[];function o4(t){const e=M.useRef(t),n=cc(r=>t?r&&r!==Gx&&t&&e.current&&t.parentNode===e.current.parentNode?r:j0(t):Gx,[t]);return M.useEffect(()=>{e.current=t},[t]),n}function a4(t){const[e,n]=M.useState(null),r=M.useRef(t),i=M.useCallback(s=>{const o=Ff(s.target);o&&n(a=>a?(a.set(o,Cm(o)),new Map(a)):null)},[]);return M.useEffect(()=>{const s=r.current;if(t!==s){o(s);const a=t.map(l=>{const c=Ff(l);return c?(c.addEventListener("scroll",i,{passive:!0}),[c,Cm(c)]):null}).filter(l=>l!=null);n(a.length?new Map(a):null),r.current=t}return()=>{o(t),o(s)};function o(a){a.forEach(l=>{const c=Ff(l);c==null||c.removeEventListener("scroll",i)})}},[i,t]),M.useMemo(()=>t.length?e?Array.from(e.values()).reduce((s,o)=>Do(s,o),lr):wk(t):lr,[t,e])}function Qx(t,e){e===void 0&&(e=[]);const n=M.useRef(null);return M.useEffect(()=>{n.current=null},e),M.useEffect(()=>{const r=t!==lr;r&&!n.current&&(n.current=t),!r&&n.current&&(n.current=null)},[t]),n.current?Pd(t,n.current):lr}function l4(t){M.useEffect(()=>{if(!Sh)return;const e=t.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of e)n==null||n()}},t.map(e=>{let{sensor:n}=e;return n}))}function c4(t,e){return M.useMemo(()=>t.reduce((n,r)=>{let{eventName:i,handler:s}=r;return n[i]=o=>{s(o,e)},n},{}),[t,e])}function kk(t){return M.useMemo(()=>t?OV(t):null,[t])}const $f=[];function u4(t,e){e===void 0&&(e=ua);const[n]=t,r=kk(n?Tn(n):null),[i,s]=M.useReducer(a,$f),o=kh({callback:s});return t.length>0&&i===$f&&s(),ar(()=>{t.length?t.forEach(l=>o==null?void 0:o.observe(l)):(o==null||o.disconnect(),s())},[t]),i;function a(){return t.length?t.map(l=>xk(l)?r:new B0(e(l),l)):$f}}function d4(t){if(!t)return null;if(t.children.length>1)return t;const e=t.children[0];return lc(e)?e:t}function h4(t){let{measure:e}=t;const[n,r]=M.useState(null),i=M.useCallback(c=>{for(const{target:u}of c)if(lc(u)){r(f=>{const p=e(u);return f?{...f,width:p.width,height:p.height}:p});break}},[e]),s=kh({callback:i}),o=M.useCallback(c=>{const u=d4(c);s==null||s.disconnect(),u&&(s==null||s.observe(u)),r(u?e(u):null)},[e,s]),[a,l]=Cd(o);return M.useMemo(()=>({nodeRef:a,rect:n,setRef:l}),[n,a,l])}const f4=[{sensor:Tk,options:{}},{sensor:Ek,options:{}}],p4={current:{}},Ru={draggable:{measure:zx},droppable:{measure:zx,strategy:Fl.WhileDragging,frequency:Im.Optimized},dragOverlay:{measure:ua}};class al extends Map{get(e){var n;return e!=null&&(n=super.get(e))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:n}=e;return!n})}getNodeFor(e){var n,r;return(n=(r=this.get(e))==null?void 0:r.node.current)!=null?n:void 0}}const m4={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new al,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:Ad},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:Ru,measureDroppableContainers:Ad,windowRect:null,measuringScheduled:!1},g4={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:Ad,draggableNodes:new Map,over:null,measureDroppableContainers:Ad},Ch=M.createContext(g4),Ck=M.createContext(m4);function v4(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new al}}}function y4(t,e){switch(e.type){case _t.DragStart:return{...t,draggable:{...t.draggable,initialCoordinates:e.initialCoordinates,active:e.active}};case _t.DragMove:return t.draggable.active?{...t,draggable:{...t.draggable,translate:{x:e.coordinates.x-t.draggable.initialCoordinates.x,y:e.coordinates.y-t.draggable.initialCoordinates.y}}}:t;case _t.DragEnd:case _t.DragCancel:return{...t,draggable:{...t.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case _t.RegisterDroppable:{const{element:n}=e,{id:r}=n,i=new al(t.droppable.containers);return i.set(r,n),{...t,droppable:{...t.droppable,containers:i}}}case _t.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=e,s=t.droppable.containers.get(n);if(!s||r!==s.key)return t;const o=new al(t.droppable.containers);return o.set(n,{...s,disabled:i}),{...t,droppable:{...t.droppable,containers:o}}}case _t.UnregisterDroppable:{const{id:n,key:r}=e,i=t.droppable.containers.get(n);if(!i||r!==i.key)return t;const s=new al(t.droppable.containers);return s.delete(n),{...t,droppable:{...t.droppable,containers:s}}}default:return t}}function x4(t){let{disabled:e}=t;const{active:n,activatorEvent:r,draggableNodes:i}=M.useContext(Ch),s=Sm(r),o=Sm(n==null?void 0:n.id);return M.useEffect(()=>{if(!e&&!r&&s&&o!=null){if(!V0(s)||document.activeElement===s.target)return;const a=i.get(o);if(!a)return;const{activatorNode:l,node:c}=a;if(!l.current&&!c.current)return;requestAnimationFrame(()=>{for(const u of[l.current,c.current]){if(!u)continue;const f=fV(u);if(f){f.focus();break}}})}},[r,e,i,o,s]),null}function b4(t,e){let{transform:n,...r}=e;return t!=null&&t.length?t.reduce((i,s)=>s({transform:i,...r}),n):n}function w4(t){return M.useMemo(()=>({draggable:{...Ru.draggable,...t==null?void 0:t.draggable},droppable:{...Ru.droppable,...t==null?void 0:t.droppable},dragOverlay:{...Ru.dragOverlay,...t==null?void 0:t.dragOverlay}}),[t==null?void 0:t.draggable,t==null?void 0:t.droppable,t==null?void 0:t.dragOverlay])}function _4(t){let{activeNode:e,measure:n,initialRect:r,config:i=!0}=t;const s=M.useRef(!1),{x:o,y:a}=typeof i=="boolean"?{x:i,y:i}:i;ar(()=>{if(!o&&!a||!e){s.current=!1;return}if(s.current||!r)return;const c=e==null?void 0:e.node.current;if(!c||c.isConnected===!1)return;const u=n(c),f=mk(u,r);if(o||(f.x=0),a||(f.y=0),s.current=!0,Math.abs(f.x)>0||Math.abs(f.y)>0){const p=gk(c);p&&p.scrollBy({top:f.y,left:f.x})}},[e,o,a,r,n])}const Pk=M.createContext({...lr,scaleX:1,scaleY:1});var hi;(function(t){t[t.Uninitialized=0]="Uninitialized",t[t.Initializing=1]="Initializing",t[t.Initialized=2]="Initialized"})(hi||(hi={}));const Ik=M.memo(function(e){var n,r,i,s;let{id:o,accessibility:a,autoScroll:l=!0,children:c,sensors:u=f4,collisionDetection:f=PV,measuring:p,modifiers:h,...g}=e;const m=M.useReducer(y4,void 0,v4),[v,x]=m,[b,_]=xV(),[R,E]=M.useState(hi.Uninitialized),A=R===hi.Initialized,{draggable:{active:T,nodes:y,translate:S},droppable:{containers:k}}=v,I=T?y.get(T):null,D=M.useRef({initial:null,translated:null}),N=M.useMemo(()=>{var it;return T!=null?{id:T,data:(it=I==null?void 0:I.data)!=null?it:p4,rect:D}:null},[T,I]),B=M.useRef(null),[z,J]=M.useState(null),[F,V]=M.useState(null),W=Bl(g,Object.values(g)),K=uc("DndDescribedBy",o),oe=M.useMemo(()=>k.getEnabled(),[k]),re=w4(p),{droppableRects:le,measureDroppableContainers:Le,measuringScheduled:Re}=t4(oe,{dragging:A,dependencies:[S.x,S.y],config:re.droppable}),se=ZV(y,T),De=M.useMemo(()=>F?km(F):null,[F]),Ee=gc(),Xe=n4(se,re.draggable.measure);_4({activeNode:T?y.get(T):null,config:Ee.layoutShiftCompensation,initialRect:Xe,measure:re.draggable.measure});const he=Kx(se,re.draggable.measure,Xe),qe=Kx(se?se.parentElement:null),Ae=M.useRef({activatorEvent:null,active:null,activeNode:se,collisionRect:null,collisions:null,droppableRects:le,draggableNodes:y,draggingNode:null,draggingNodeRect:null,droppableContainers:k,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),Ct=k.getNodeFor((n=Ae.current.over)==null?void 0:n.id),rt=h4({measure:re.dragOverlay.measure}),Pt=(r=rt.nodeRef.current)!=null?r:se,ht=A?(i=rt.rect)!=null?i:he:null,an=!!(rt.nodeRef.current&&rt.rect),Z=s4(an?null:he),te=kk(Pt?Tn(Pt):null),me=o4(A?Ct??se:null),Te=u4(me),Ne=b4(h,{transform:{x:S.x-Z.x,y:S.y-Z.y,scaleX:1,scaleY:1},activatorEvent:F,active:N,activeNodeRect:he,containerNodeRect:qe,draggingNodeRect:ht,over:Ae.current.over,overlayNodeRect:rt.rect,scrollableAncestors:me,scrollableAncestorRects:Te,windowRect:te}),Ce=De?Do(De,S):null,Se=a4(me),Q=Qx(Se),G=Qx(Se,[he]),ee=Do(Ne,Q),de=ht?RV(ht,Ne):null,U=N&&de?f({active:N,collisionRect:de,droppableRects:le,droppableContainers:oe,pointerCoordinates:Ce}):null,X=kV(U,"id"),[ge,We]=M.useState(null),vt=an?Ne:Do(Ne,G),ln=IV(vt,(s=ge==null?void 0:ge.rect)!=null?s:null,he),cn=M.useCallback((it,Mt)=>{let{sensor:Ot,options:Ht}=Mt;if(B.current==null)return;const un=y.get(B.current);if(!un)return;const qt=it.nativeEvent,Sn=new Ot({active:B.current,activeNode:un,event:qt,options:Ht,context:Ae,onStart(mn){const ft=B.current;if(ft==null)return;const ni=y.get(ft);if(!ni)return;const{onDragStart:cr}=W.current,ur={active:{id:ft,data:ni.data,rect:D}};hs.unstable_batchedUpdates(()=>{cr==null||cr(ur),E(hi.Initializing),x({type:_t.DragStart,initialCoordinates:mn,active:ft}),b({type:"onDragStart",event:ur})})},onMove(mn){x({type:_t.DragMove,coordinates:mn})},onEnd:Ln(_t.DragEnd),onCancel:Ln(_t.DragCancel)});hs.unstable_batchedUpdates(()=>{J(Sn),V(it.nativeEvent)});function Ln(mn){return async function(){const{active:ni,collisions:cr,over:ur,scrollAdjustedTranslate:vc}=Ae.current;let ns=null;if(ni&&vc){const{cancelDrop:Vn}=W.current;ns={activatorEvent:qt,active:ni,collisions:cr,delta:vc,over:ur},mn===_t.DragEnd&&typeof Vn=="function"&&await Promise.resolve(Vn(ns))&&(mn=_t.DragCancel)}B.current=null,hs.unstable_batchedUpdates(()=>{x({type:mn}),E(hi.Uninitialized),We(null),J(null),V(null);const Vn=mn===_t.DragEnd?"onDragEnd":"onDragCancel";if(ns){const fa=W.current[Vn];fa==null||fa(ns),b({type:Vn,event:ns})}})}}},[y]),ts=M.useCallback((it,Mt)=>(Ot,Ht)=>{const un=Ot.nativeEvent,qt=y.get(Ht);if(B.current!==null||!qt||un.dndKit||un.defaultPrevented)return;const Sn={active:qt};it(Ot,Mt.options,Sn)===!0&&(un.dndKit={capturedBy:Mt.sensor},B.current=Ht,cn(Ot,Mt))},[y,cn]),$s=e4(u,ts);l4(u),ar(()=>{he&&R===hi.Initializing&&E(hi.Initialized)},[he,R]),M.useEffect(()=>{const{onDragMove:it}=W.current,{active:Mt,activatorEvent:Ot,collisions:Ht,over:un}=Ae.current;if(!Mt||!Ot)return;const qt={active:Mt,activatorEvent:Ot,collisions:Ht,delta:{x:ee.x,y:ee.y},over:un};hs.unstable_batchedUpdates(()=>{it==null||it(qt),b({type:"onDragMove",event:qt})})},[ee.x,ee.y]),M.useEffect(()=>{const{active:it,activatorEvent:Mt,collisions:Ot,droppableContainers:Ht,scrollAdjustedTranslate:un}=Ae.current;if(!it||B.current==null||!Mt||!un)return;const{onDragOver:qt}=W.current,Sn=Ht.get(X),Ln=Sn&&Sn.rect.current?{id:Sn.id,rect:Sn.rect.current,data:Sn.data,disabled:Sn.disabled}:null,mn={active:it,activatorEvent:Mt,collisions:Ot,delta:{x:un.x,y:un.y},over:Ln};hs.unstable_batchedUpdates(()=>{We(Ln),qt==null||qt(mn),b({type:"onDragOver",event:mn})})},[X]),ar(()=>{Ae.current={activatorEvent:F,active:N,activeNode:se,collisionRect:de,collisions:U,droppableRects:le,draggableNodes:y,draggingNode:Pt,draggingNodeRect:ht,droppableContainers:k,over:ge,scrollableAncestors:me,scrollAdjustedTranslate:ee},D.current={initial:ht,translated:de}},[N,se,U,de,y,Pt,ht,le,k,ge,me,ee]),XV({...Ee,delta:S,draggingRect:de,pointerCoordinates:Ce,scrollableAncestors:me,scrollableAncestorRects:Te});const ha=M.useMemo(()=>({active:N,activeNode:se,activeNodeRect:he,activatorEvent:F,collisions:U,containerNodeRect:qe,dragOverlay:rt,draggableNodes:y,droppableContainers:k,droppableRects:le,over:ge,measureDroppableContainers:Le,scrollableAncestors:me,scrollableAncestorRects:Te,measuringConfiguration:re,measuringScheduled:Re,windowRect:te}),[N,se,he,F,U,qe,rt,y,k,le,ge,Le,me,Te,re,Re,te]),mc=M.useMemo(()=>({activatorEvent:F,activators:$s,active:N,activeNodeRect:he,ariaDescribedById:{draggable:K},dispatch:x,draggableNodes:y,over:ge,measureDroppableContainers:Le}),[F,$s,N,he,x,K,y,ge,Le]);return be.createElement(hk.Provider,{value:_},be.createElement(Ch.Provider,{value:mc},be.createElement(Ck.Provider,{value:ha},be.createElement(Pk.Provider,{value:ln},c)),be.createElement(x4,{disabled:(a==null?void 0:a.restoreFocus)===!1})),be.createElement(_V,{...a,hiddenTextDescribedById:K}));function gc(){const it=(z==null?void 0:z.autoScrollEnabled)===!1,Mt=typeof l=="object"?l.enabled===!1:l===!1,Ot=A&&!it&&!Mt;return typeof l=="object"?{...l,enabled:Ot}:{enabled:Ot}}}),E4=M.createContext(null),Xx="button",T4="Droppable";function S4(t){let{id:e,data:n,disabled:r=!1,attributes:i}=t;const s=uc(T4),{activators:o,activatorEvent:a,active:l,activeNodeRect:c,ariaDescribedById:u,draggableNodes:f,over:p}=M.useContext(Ch),{role:h=Xx,roleDescription:g="draggable",tabIndex:m=0}=i??{},v=(l==null?void 0:l.id)===e,x=M.useContext(v?Pk:E4),[b,_]=Cd(),[R,E]=Cd(),A=c4(o,e),T=Bl(n);ar(()=>(f.set(e,{id:e,key:s,node:b,activatorNode:R,data:T}),()=>{const S=f.get(e);S&&S.key===s&&f.delete(e)}),[f,e]);const y=M.useMemo(()=>({role:h,tabIndex:m,"aria-disabled":r,"aria-pressed":v&&h===Xx?!0:void 0,"aria-roledescription":g,"aria-describedby":u.draggable}),[r,h,m,v,g,u.draggable]);return{active:l,activatorEvent:a,activeNodeRect:c,attributes:y,isDragging:v,listeners:r?void 0:A,node:b,over:p,setNodeRef:_,setActivatorNodeRef:E,transform:x}}function k4(){return M.useContext(Ck)}const C4="Droppable",P4={timeout:25};function I4(t){let{data:e,disabled:n=!1,id:r,resizeObserverConfig:i}=t;const s=uc(C4),{active:o,dispatch:a,over:l,measureDroppableContainers:c}=M.useContext(Ch),u=M.useRef({disabled:n}),f=M.useRef(!1),p=M.useRef(null),h=M.useRef(null),{disabled:g,updateMeasurementsFor:m,timeout:v}={...P4,...i},x=Bl(m??r),b=M.useCallback(()=>{if(!f.current){f.current=!0;return}h.current!=null&&clearTimeout(h.current),h.current=setTimeout(()=>{c(Array.isArray(x.current)?x.current:[x.current]),h.current=null},v)},[v]),_=kh({callback:b,disabled:g||!o}),R=M.useCallback((y,S)=>{_&&(S&&(_.unobserve(S),f.current=!1),y&&_.observe(y))},[_]),[E,A]=Cd(R),T=Bl(e);return M.useEffect(()=>{!_||!E.current||(_.disconnect(),f.current=!1,_.observe(E.current))},[E,_]),ar(()=>(a({type:_t.RegisterDroppable,element:{id:r,key:s,disabled:n,node:E,rect:p,data:T}}),()=>a({type:_t.UnregisterDroppable,key:s,id:r})),[r]),M.useEffect(()=>{n!==u.current.disabled&&(a({type:_t.SetDroppableDisabled,id:r,key:s,disabled:n}),u.current.disabled=n)},[r,s,n,a]),{active:o,rect:p,isOver:(l==null?void 0:l.id)===r,node:E,over:l,setNodeRef:A}}function Ph(t,e,n){const r=t.slice();return r.splice(n<0?r.length+n:n,0,r.splice(e,1)[0]),r}function A4(t,e){return t.reduce((n,r,i)=>{const s=e.get(r);return s&&(n[i]=s),n},Array(t.length))}function eu(t){return t!==null&&t>=0}function R4(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function D4(t){return typeof t=="boolean"?{draggable:t,droppable:t}:t}const Ak=t=>{let{rects:e,activeIndex:n,overIndex:r,index:i}=t;const s=Ph(e,r,n),o=e[i],a=s[i];return!a||!o?null:{x:a.left-o.left,y:a.top-o.top,scaleX:a.width/o.width,scaleY:a.height/o.height}},tu={scaleX:1,scaleY:1},Rk=t=>{var e;let{activeIndex:n,activeNodeRect:r,index:i,rects:s,overIndex:o}=t;const a=(e=s[n])!=null?e:r;if(!a)return null;if(i===n){const c=s[o];return c?{x:0,y:n<o?c.top+c.height-(a.top+a.height):c.top-a.top,...tu}:null}const l=N4(s,i,n);return i>n&&i<=o?{x:0,y:-a.height-l,...tu}:i<n&&i>=o?{x:0,y:a.height+l,...tu}:{x:0,y:0,...tu}};function N4(t,e,n){const r=t[e],i=t[e-1],s=t[e+1];return r?n<e?i?r.top-(i.top+i.height):s?s.top-(r.top+r.height):0:s?s.top-(r.top+r.height):i?r.top-(i.top+i.height):0:0}const Dk="Sortable",Nk=be.createContext({activeIndex:-1,containerId:Dk,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:Ak,disabled:{draggable:!1,droppable:!1}});function Mk(t){let{children:e,id:n,items:r,strategy:i=Ak,disabled:s=!1}=t;const{active:o,dragOverlay:a,droppableRects:l,over:c,measureDroppableContainers:u}=k4(),f=uc(Dk,n),p=a.rect!==null,h=M.useMemo(()=>r.map(A=>typeof A=="object"&&"id"in A?A.id:A),[r]),g=o!=null,m=o?h.indexOf(o.id):-1,v=c?h.indexOf(c.id):-1,x=M.useRef(h),b=!R4(h,x.current),_=v!==-1&&m===-1||b,R=D4(s);ar(()=>{b&&g&&u(h)},[b,h,g,u]),M.useEffect(()=>{x.current=h},[h]);const E=M.useMemo(()=>({activeIndex:m,containerId:f,disabled:R,disableTransforms:_,items:h,overIndex:v,useDragOverlay:p,sortedRects:A4(h,l),strategy:i}),[m,f,R.draggable,R.droppable,_,h,v,l,p,i]);return be.createElement(Nk.Provider,{value:E},e)}const M4=t=>{let{id:e,items:n,activeIndex:r,overIndex:i}=t;return Ph(n,r,i).indexOf(e)},O4=t=>{let{containerId:e,isSorting:n,wasDragging:r,index:i,items:s,newIndex:o,previousItems:a,previousContainerId:l,transition:c}=t;return!c||!r||a!==s&&i===o?!1:n?!0:o!==i&&e===l},L4={duration:200,easing:"ease"},Ok="transform",V4=Id.Transition.toString({property:Ok,duration:0,easing:"linear"}),j4={roleDescription:"sortable"};function B4(t){let{disabled:e,index:n,node:r,rect:i}=t;const[s,o]=M.useState(null),a=M.useRef(n);return ar(()=>{if(!e&&n!==a.current&&r.current){const l=i.current;if(l){const c=ua(r.current,{ignoreTransform:!0}),u={x:l.left-c.left,y:l.top-c.top,scaleX:l.width/c.width,scaleY:l.height/c.height};(u.x||u.y)&&o(u)}}n!==a.current&&(a.current=n)},[e,n,r,i]),M.useEffect(()=>{s&&o(null)},[s]),s}function Lk(t){let{animateLayoutChanges:e=O4,attributes:n,disabled:r,data:i,getNewIndex:s=M4,id:o,strategy:a,resizeObserverConfig:l,transition:c=L4}=t;const{items:u,containerId:f,activeIndex:p,disabled:h,disableTransforms:g,sortedRects:m,overIndex:v,useDragOverlay:x,strategy:b}=M.useContext(Nk),_=F4(r,h),R=u.indexOf(o),E=M.useMemo(()=>({sortable:{containerId:f,index:R,items:u},...i}),[f,i,R,u]),A=M.useMemo(()=>u.slice(u.indexOf(o)),[u,o]),{rect:T,node:y,isOver:S,setNodeRef:k}=I4({id:o,data:E,disabled:_.droppable,resizeObserverConfig:{updateMeasurementsFor:A,...l}}),{active:I,activatorEvent:D,activeNodeRect:N,attributes:B,setNodeRef:z,listeners:J,isDragging:F,over:V,setActivatorNodeRef:W,transform:K}=S4({id:o,data:E,attributes:{...j4,...n},disabled:_.draggable}),oe=cV(k,z),re=!!I,le=re&&!g&&eu(p)&&eu(v),Le=!x&&F,Re=Le&&le?K:null,De=le?Re??(a??b)({rects:m,activeNodeRect:N,activeIndex:p,overIndex:v,index:R}):null,Ee=eu(p)&&eu(v)?s({id:o,items:u,activeIndex:p,overIndex:v}):R,Xe=I==null?void 0:I.id,he=M.useRef({activeId:Xe,items:u,newIndex:Ee,containerId:f}),qe=u!==he.current.items,Ae=e({active:I,containerId:f,isDragging:F,isSorting:re,id:o,index:R,items:u,newIndex:he.current.newIndex,previousItems:he.current.items,previousContainerId:he.current.containerId,transition:c,wasDragging:he.current.activeId!=null}),Ct=B4({disabled:!Ae,index:R,node:y,rect:T});return M.useEffect(()=>{re&&he.current.newIndex!==Ee&&(he.current.newIndex=Ee),f!==he.current.containerId&&(he.current.containerId=f),u!==he.current.items&&(he.current.items=u)},[re,Ee,f,u]),M.useEffect(()=>{if(Xe===he.current.activeId)return;if(Xe&&!he.current.activeId){he.current.activeId=Xe;return}const Pt=setTimeout(()=>{he.current.activeId=Xe},50);return()=>clearTimeout(Pt)},[Xe]),{active:I,activeIndex:p,attributes:B,data:E,rect:T,index:R,newIndex:Ee,items:u,isOver:S,isSorting:re,isDragging:F,listeners:J,node:y,overIndex:v,over:V,setNodeRef:oe,setActivatorNodeRef:W,setDroppableNodeRef:k,setDraggableNodeRef:z,transform:Ct??De,transition:rt()};function rt(){if(Ct||qe&&he.current.newIndex===R)return V4;if(!(Le&&!V0(D)||!c)&&(re||Ae))return Id.Transition.toString({...c,property:Ok})}}function F4(t,e){var n,r;return typeof t=="boolean"?{draggable:t,droppable:!1}:{draggable:(n=t==null?void 0:t.draggable)!=null?n:e.draggable,droppable:(r=t==null?void 0:t.droppable)!=null?r:e.droppable}}Fe.Down,Fe.Right,Fe.Up,Fe.Left;function U4({title:t,id:e,listid:n,labels:r,item:i,BoardId:s,onDeleteCard:o,BG:a,sharedWith:l,lists:c}){const[u,f]=M.useState({x:0,y:0}),{menuOpen:p,setMenuOpen:h,toggleMenu:g}=Xp(),[m,v]=M.useState({x:0,y:0}),[x,b]=M.useState(!1),[_,R]=M.useState(!1),[E,A]=M.useState(r),T=M.useRef(null),y=M.useRef(null),S=M.useRef(null),k=M.useRef(null),I=M.useRef(null),D=M.useRef(null),N=M.useRef(null),[B,z]=M.useState(!1),[J,F]=M.useState(!1),V=M.useRef(null),[W,K]=M.useState(!1),[oe,re]=M.useState(!1),[le,Le]=M.useState(t),Re=M.useRef(null),[se,De]=M.useState(!1),[Ee,Xe]=M.useState(a),he=U=>{switch(U){case"background1":return"bg-green-700";case"background2":return"bg-yellow-800";case"background3":return"bg-amber-700";case"background4":return"bg-red-800";case"background5":return"bg-indigo-800";case"background6":return"bg-blue-800";case"background7":return"bg-pink-900";case"background8":return"bg-gray-800"}},{attributes:qe,listeners:Ae,setNodeRef:Ct,transform:rt,transition:Pt,isDragging:ht}=Lk({id:i.id}),an={transform:rt?`translate3d(${rt.x}px, ${rt.y}px,0) rotate(${ht?-2:0}deg)`:void 0,transition:Pt,opacity:ht?.8:1,cursor:ht?"grabbing":"pointer",zIndex:ht?10:"auto"},Z=U=>{Ct(U),k.current=U},te=U=>{U.preventDefault(),h(!0);const X=k.current.getBoundingClientRect(),ge=X.left+window.scrollX+270,We=X.top+window.scrollY-6,vt=window.innerWidth;ge+200>vt?K(!0):K(!1),vt<650?re(!0):re(!1);const ln=ge+200>vt?ge-535:ge,cn=We<0?0:We;f({x:ln,y:cn}),document.body.classList.add("MenuisOpen"),b(!0)};M.useEffect(()=>{Te()},[E]),M.useEffect(()=>{me()},[Ee]);const me=async()=>{const U=Ve.currentUser;if(U)try{await Ge(fe(ae,`users/${U.uid}/Boards/${s}/Lists/${n}/cards`,e),{background:Ee});const X=l.map(ge=>Ge(fe(ae,`users/${ge.id}/Boards/${s}/Lists/${n}/cards`,e),{background:Ee}));await Promise.all(X)}catch(X){console.error("Error updating background: ",X)}else console.error("User is not authenticated.")},Te=async()=>{const U=Ve.currentUser;if(U)try{await Ge(fe(ae,`users/${U.uid}/Boards/${s}/Lists/${n}/cards`,e),{labels:E});const X=l.map(ge=>Ge(fe(ae,`users/${ge.id}/Boards/${s}/Lists/${n}/cards`,e),{labels:E}));await Promise.all(X)}catch(X){console.error("Error updating labels: ",X)}else console.error("User is not authenticated.")},Ne=async()=>{const U=Ve.currentUser;if(U)try{o(e);const X=fe(ae,`users/${U.uid}/Boards/${s}/Lists/${n}/cards`,e);await gr(X);const ge=l.map(We=>{const vt=fe(ae,`users/${We.id}/Boards/${s}/Lists/${n}/cards`,e);return gr(vt)});await Promise.all(ge)}catch(X){console.error("Error deleting card: ",X)}else console.error("User is not authenticated")},Ce=()=>{const U=Ve.currentUser,X=document.createElement("textarea");X.value=`users/${U.uid}/Boards/${s}/Lists/${n}/cards/${e}`,document.body.appendChild(X),X.select(),document.execCommand("copy"),document.body.removeChild(X),De(!0),setTimeout(()=>{De(!1)},1500)},Se=async U=>{const X=Ve.currentUser;if(X)try{const ge=Bs(ae,`users/${X.uid}/Boards/${s}/Lists/${U.id}/cards`),vt=(await Fs(ge)).size,ln=fe(ae,`users/${X.uid}/Boards/${s}/Lists/${U.id}/cards`,e);await er(ln,{id:e,title:le,labels:E,background:Ee,order:vt});const cn=l.map(ts=>{const $s=fe(ae,`users/${ts.id}/Boards/${s}/Lists/${U.id}/cards`,e);return er($s,{id:e,title:le,labels:E,background:Ee,order:vt})});await Promise.all(cn),await Ne(),window.location.reload()}catch(ge){console.error("Error moving card to list: ",ge)}else console.error("User is not authenticated")},Q=async U=>{const X=U.target.value;Le(X);const ge=Ve.currentUser;if(ge)try{await Ge(fe(ae,`users/${ge.uid}/Boards/${s}/Lists/${n}/cards`,e),{title:X});const We=l.map(vt=>Ge(fe(ae,`users/${vt.id}/Boards/${s}/Lists/${n}/cards`,e),{title:X}));await Promise.all(We)}catch(We){console.error("Error updating card title: ",We)}else console.error("User is not authenticated.")},G=()=>{R(!0);const U=N.current.getBoundingClientRect();v({x:U.left,y:U.top})},ee=()=>{z(!0);const U=S.current.getBoundingClientRect();v({x:U.left,y:U.top})},de=()=>{F(!0);const U=D.current.getBoundingClientRect();v({x:U.left,y:U.top})};return M.useEffect(()=>{const U=X=>{y.current&&!y.current.contains(X.target)&&!Re.current.contains(X.target)&&(!T.current||!T.current.contains(X.target))&&(!V.current||!V.current.contains(X.target))&&(!I.current||!I.current.contains(X.target))&&(b(!1),h(!1),document.body.classList.remove("MenuisOpen")),T.current&&!T.current.contains(X.target)&&!N.current.contains(X.target)&&R(!1),V.current&&!V.current.contains(X.target)&&!S.current.contains(X.target)&&z(!1),I.current&&!I.current.contains(X.target)&&!D.current.contains(X.target)&&F(!1)};return document.addEventListener("click",U),()=>{document.removeEventListener("click",U)}},[x,_,h]),C.jsxs("div",{className:"w-full",children:[B&&C.jsxs("div",{style:{top:window.innerHeight>m.y+350?`${m.y}px`:`${m.y-170}px`,left:oe?"52%":`${m.x-70}px`,maxWidth:oe?"170px":" "},ref:V,className:"flex absolute flex-col z-[10001] p-1.5 rounded-md text-gray-300 pt-2 bg-gray-800 gap-1.5",children:[C.jsx("div",{className:"flex justify-end align-top",children:C.jsx("button",{onClick:U=>{U.stopPropagation(),z(!1)},className:"m-1 text-slate-300 px-1 rounded-md text-sm hover:bg-gray-600",children:"✕"})}),C.jsx("div",{className:"flex justify-center gap-6",children:C.jsx("h3",{className:"mb-3 -mt-[1.9rem] text-center",children:"Background Cover"})}),C.jsx("div",{className:"flex flex-col gap-1.5",children:["background1","background2","background3","background4","background5","background6","background7","background8"].map((U,X)=>C.jsxs("div",{className:"flex gap-1.5",children:[C.jsx("input",{checked:Ee===he(U),onChange:()=>{Xe(he(U))},id:`radio-group-${X+1}`,type:"radio",className:"w-5 h-4 cursor-pointer border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),C.jsx("label",{htmlFor:`radio-group-${X+1}`,className:`w-44 rounded-sm mr-4 cursor-pointer border-2 border-opacity-40 border-gray-500 hover:bg-opacity-80 ${he(U)}`})]},U))})]}),J&&C.jsxs("div",{style:{top:window.innerHeight>m.y+350?`${m.y}px`:`${m.y-170}px`,left:oe?"52%":`${m.x-70}px`,maxWidth:oe?"170px":" "},ref:I,className:"flex absolute flex-col z-[10001] w-[200px]  rounded-md text-gray-300 pt-2 bg-gray-800 gap-1.5",children:[C.jsx("div",{className:"flex justify-end align-top",children:C.jsx("button",{onClick:U=>{U.stopPropagation(),F(!1)},className:"m-1 text-slate-300 px-1 rounded-md text-sm hover:bg-gray-600",children:"✕"})}),C.jsx("div",{className:"flex justify-center gap-6",children:C.jsx("h3",{className:"mb-3 -mt-[1.9rem] text-center",children:"To List"})}),C.jsx("div",{className:"flex flex-col gap-1",children:c.map((U,X)=>C.jsxs("div",{onClick:()=>Se(U),className:"flex py-1 justify-start ga-1 text-gray-300 hover:bg-gray-700  px-4",children:[C.jsx("p",{className:"text-lg",children:X+1}),C.jsxs("p",{className:"text-lg",children:[". ",U.title]})]},X))})]}),_&&C.jsxs("div",{style:{top:window.innerHeight>m.y+350?`${m.y}px`:`${m.y-170}px`,left:oe?"52%":`${m.x-70}px`,maxWidth:oe?"170px":" "},ref:T,className:"flex absolute flex-col z-[10001] p-1.5 rounded-md text-gray-300 pt-2 bg-gray-800  gap-1.5",children:[C.jsx("div",{className:"flex justify-end align-top",children:C.jsx("button",{onClick:U=>{U.stopPropagation(),R(!1)},className:" m-1 text-slate-300  px-1  rounded-md  text-sm hover:bg-gray-600",children:"✕"})}),C.jsx("div",{className:"flex justify-center gap-6",children:C.jsx("h3",{className:"mb-3 -mt-[1.9rem] text-center",children:"Labels"})}),C.jsxs("div",{className:"flex gap-1.5",children:[C.jsx("input",{checked:E.label1,onChange:()=>{A(U=>({...U,label1:!U.label1}))},id:"checkbox-group-1",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),C.jsx("label",{htmlFor:"checkbox-group-1",className:"w-44 bg-green-600 rounded-sm mr-4 cursor-pointer hover:bg-green-500"})]}),C.jsxs("div",{className:"flex gap-1.5",children:[C.jsx("input",{checked:E.label2,onChange:()=>{A(U=>({...U,label2:!U.label2}))},id:"checkbox-group-2",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),C.jsx("label",{htmlFor:"checkbox-group-2",className:"w-44 bg-yellow-800 rounded-sm mr-4 cursor-pointer hover:bg-yellow-700"})]}),C.jsxs("div",{className:"flex gap-1.5",children:[C.jsx("input",{checked:E.label3,onChange:()=>{A(U=>({...U,label3:!U.label3}))},id:"checkbox-group-3",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),C.jsx("label",{htmlFor:"checkbox-group-3",className:"w-44 bg-amber-600  rounded-sm mr-4 cursor-pointer hover:bg-amber-500"})]}),C.jsxs("div",{className:"flex gap-1.5",children:[C.jsx("input",{checked:E.label4,onChange:()=>{A(U=>({...U,label4:!U.label4}))},id:"checkbox-group-4",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),C.jsx("label",{htmlFor:"checkbox-group-4",className:"w-44 bg-red-700 rounded-sm mr-4 cursor-pointer hover:bg-red-600"})]}),C.jsxs("div",{className:"flex gap-1.5",children:[C.jsx("input",{checked:E.label5,onChange:()=>{A(U=>({...U,label5:!U.label5}))},id:"checkbox-group-5",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),C.jsx("label",{htmlFor:"checkbox-group-5",className:"w-44 bg-indigo-800 rounded-sm mr-4 cursor-pointer hover:bg-indigo-800"})]}),C.jsxs("div",{className:"flex gap-1.5",children:[C.jsx("input",{checked:E.label6,onChange:()=>{A(U=>({...U,label6:!U.label6}))},id:"checkbox-group-6",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),C.jsx("label",{htmlFor:"checkbox-group-6",className:"w-44 bg-blue-700 rounded-sm mr-4 cursor-pointer hover:bg-blue-600"})]}),C.jsxs("div",{className:"flex gap-1.5",children:[C.jsx("input",{checked:E.label7,onChange:()=>{A(U=>({...U,label7:!U.label7}))},id:"checkbox-group-7",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),C.jsx("label",{htmlFor:"checkbox-group-7",className:"w-44 bg-pink-800 rounded-sm mr-4 cursor-pointer hover:bg-pink-700"})]}),C.jsxs("div",{className:"flex gap-1.5 mb-6",children:[C.jsx("input",{checked:E.label8,onChange:()=>{A(U=>({...U,label8:!U.label8}))},id:"checkbox-group-8",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),C.jsx("label",{htmlFor:"checkbox-group-8",className:"w-44 bg-neutral-400 rounded-sm mr-4 cursor-pointer hover:bg-neutral-300"})]})]}),C.jsx("div",{className:`overlay ${x?"visible":""}`}),x&&C.jsxs("div",{ref:y,className:"card flex item  z-[1001]  absolute  flex-col gap-[2.5px] ",style:{top:window.innerHeight>u.y+350?`${u.y+7}px`:`${u.y-180}px`,left:oe?"52.5%":`${u.x+10}px`,alignItems:`${W?"end":"start"}`},children:[C.jsxs("button",{ref:N,onClick:G,className:"flex text-gray-300 shadow-xl bg-gray-800 hover:bg-gray-700 rounded-sm font-bold p-3 pr-3.5 py-2.5 w-fit  text-sm",children:[C.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-2",children:[C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"}),C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 6h.008v.008H6V6Z"})]}),"Edit labels "]}),C.jsxs("button",{ref:S,onClick:ee,className:"flex text-gray-300 shadow-xl bg-gray-800  hover:bg-gray-700  font-bold rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm",children:[C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-2",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9"})}),"Change cover"]}),C.jsxs("button",{ref:D,onClick:de,className:"flex text-gray-300 shadow-xl  bg-gray-800  hover:bg-gray-700  font-bold rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm",children:[C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-2",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})}),"Move"]}),C.jsxs("button",{onClick:Ce,className:`flex text-gray-300 shadow-xl ${se?"bg-green-600":"bg-gray-800"}  ${se?"hover:bg-green-700":"hover:bg-gray-700"}  font-bold  rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm`,children:[se?C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-5 mr-2",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"})}):C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-2",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"})}),se?"Copied!":"Copy"]}),C.jsxs("button",{onClick:Ne,className:"flex text-gray-300  bg-gray-800  hover:bg-gray-700 font-bold  rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm",children:[C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-2",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})}),"Delete"]})]}),C.jsxs("div",{ref:Z,style:an,...qe,...Ae,onContextMenu:te,className:`CARD relative justify-center flex flex-col cursor-pointer focus:border-solid focus:border-blue-500 select-none focus:outline-none  text-gray-300 text-md p-1 px-2.5 rounded-md w-full mx-0 my-1.5 ${Ee||"bg-gray-800"}`,children:[x&&C.jsx("div",{children:C.jsx("textarea",{ref:Re,className:`z-[1000]  absolute sm:w-full w-[70%] left-0  sm:right-0 top-0 pb-2 pt-3 ri text-start px-2.5 rounded-md  border-solid border-slate-400 border-0 focus:outline-none  text-slate-300 resize-none overflow-hidden ${Ee||"bg-gray-800"}`,onChange:Q,rows:"1",value:le,onInput:U=>{U.target.style.height="auto",U.target.style.height=`${U.target.scrollHeight+15}px`}})}),C.jsxs("div",{className:" absolute right-0 pointer-events-auto text-md p-2 pt-1.5 text-[1.2rem] text-gray-300 hover:opacity-65",onClick:U=>{U.stopPropagation(),te(U)},children:["   ",C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.3",stroke:"currentColor",className:"size-6",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"})})]}),C.jsxs("div",{className:"flex flex-wrap gap-2",children:[E.label1&&C.jsx("span",{className:"z-[1001]  bg-green-600 w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"}),E.label2&&C.jsx("span",{className:"z-[1001] bg-yellow-800 w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"}),E.label3&&C.jsx("span",{className:"z-[1001] bg-amber-600  w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"}),E.label4&&C.jsx("span",{className:"z-[1001] bg-red-700  w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"}),E.label5&&C.jsx("span",{className:"z-[1001]  bg-indigo-700 w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"}),E.label6&&C.jsx("span",{className:"z-[1001]  bg-blue-800 w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"}),E.label7&&C.jsx("span",{className:"z-[1001]  bg-pink-800 w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"}),E.label8&&C.jsx("span",{className:"z-[1001]  bg-neutral-400  w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"})]}),le||"Empty Card"]})]})}const z4=M.forwardRef(({item:t,Dragging:e,onDeleteList:n,title:r,lists:i,id:s,BoardId:o,sharedWith:a},l)=>{const[c,u]=M.useState(!1),[f,p]=M.useState(!1),[h,g]=M.useState({x:0,y:0}),m=M.useRef(null),[v,x]=M.useState(""),[b,_]=M.useState(""),[R,E]=M.useState([]),[A,T]=M.useState(r),y=M.useRef(null),S=M.useRef(null),k=M.useRef(null),[I,D]=M.useState(!1),{setMenuOpen:N}=Xp(),{menuOpen:B}=Xp(),{attributes:z,listeners:J,setNodeRef:F,transform:V,transition:W,isDragging:K}=Lk({id:t.id,disabled:B}),oe=Z=>{Z.preventDefault(),console.log("asd"),N(!0);const te=k.current.getBoundingClientRect(),me=te.left+window.scrollX+270,Te=te.top+window.scrollY-6;g({x:me,y:Te}),document.body.classList.add("MenuisOpen"),p(!0)};M.useEffect(()=>{const Z=te=>{S.current&&!S.current.contains(te.target)&&!k.current.contains(te.target)&&!y.current.contains(te.target)&&(p(!1),N(!1),document.body.classList.remove("MenuisOpen"))};return document.addEventListener("click",Z),()=>{document.removeEventListener("click",Z)}},[f]);const re=()=>{const Z=Ve.currentUser,te=document.createElement("textarea");te.value=`users/${Z.uid}/Boards/${o}/Lists/${s}`,document.body.appendChild(te),te.select(),document.execCommand("copy"),document.body.removeChild(te),D(!0),setTimeout(()=>{D(!1)},1500)},le=Z=>{const te=Z.touches[0],me=Z.target;me.offsetWidth>0&&te.clientX>=me.clientWidth&&Z.stopPropagation()},Le=Z=>{const te=Z.target;te.offsetWidth>0&&Z.clientX>=te.clientWidth&&Z.stopPropagation()},Re=Z=>{Z.preventDefault()},se=async()=>{const Z=Ve.currentUser;if(Z)try{_("");const te=fe(ae,v);x("");const me=await rc(te);if(me.exists()){const Te=me.data(),Ne=new Date().getTime().toString(),Ce={...Te,id:Ne,order:R.length};E(G=>[...G,Ce]);const Se=fe(ae,`users/${Z.uid}/Boards/${o}/Lists/${s}/cards`,Ne);await er(Se,Ce),console.log("Card added successfully for current user");const Q=a.map(G=>{const ee=fe(ae,`users/${G.id}/Boards/${o}/Lists/${s}/cards`,Ne);return er(ee,Ce)});await Promise.all(Q),console.log("Card added successfully for all shared users")}else _("Please check the link and try again."),setTimeout(()=>_(""),3e3),console.error("The source card does not exist at the specified link")}catch{_("Please check the link and try again."),setTimeout(()=>_(""),3e3)}else _("User is not authenticated"),console.error("User is not authenticated")},De=async()=>{const Z=Ve.currentUser;if(Z)try{x("");const te=new Date().getTime().toString(),me={label1:!1,label2:!1,label3:!1,label4:!1,label5:!1,label6:!1,label7:!1,label8:!1},Te="bg-gray-800",Ne={id:te,title:v,labels:me,background:Te};E(Q=>[...Q,Ne]);const Ce=fe(ae,`users/${Z.uid}/Boards/${o}/Lists/${s}/cards`,te);await er(Ce,{id:te,title:v,labels:me,order:R.length,background:Te}),console.log("Card added successfully for current user");const Se=a.map(Q=>{const G=fe(ae,`users/${Q.id}/Boards/${o}/Lists/${s}/cards`,te);return er(G,{id:te,title:v,labels:me,order:R.length,background:Te})});await Promise.all(Se),console.log("Card added successfully for all shared users")}catch(te){console.error("Error adding card to Firestore: ",te)}else console.error("User is not authenticated")};M.useEffect(()=>{const Z=$i(Ve,te=>{te?(async()=>{const Te=Bs(ae,`users/${te.uid}/Boards/${o}/Lists/${s}/cards`),Ce=(await Fs(Te)).docs.map(Se=>({id:Se.id,title:Se.data().title,labels:Se.data().labels,order:Se.data().order,background:Se.data().background})).sort((Se,Q)=>Se.order-Q.order);E(Ce)})().catch(Te=>console.error("Error fetching cards:",Te)):E([])});return()=>Z()},[s]),M.useEffect(()=>{if(!c)return;const Z=te=>{m.current&&!m.current.contains(te.target)&&Xe()};return document.addEventListener("click",Z),()=>{document.removeEventListener("click",Z)}},[c]);const Ee=Z=>{Z.stopPropagation(),u(!0)},Xe=()=>{u(!1)},he=async Z=>{const te=Z.target.value;T(te);const me=Ve.currentUser;if(me)try{await Ge(fe(ae,`users/${me.uid}/Boards/${o}/Lists`,s),{title:te});const Te=a.map(Ne=>Ge(fe(ae,`users/${Ne.id}/Boards/${o}/Lists`,s),{title:te}));console.log("asdf"),await Promise.all(Te)}catch(Te){console.error("Error updating list title: ",Te)}else console.error("User is not authenticated.")},qe=async Z=>{const{active:te,over:me}=Z;if(te.id&&(me!=null&&me.id)){const Te=Ve.currentUser;if(Te){const Ne=R.findIndex(Se=>Se.id===te.id),Ce=R.findIndex(Se=>Se.id===me.id);if(Ne!==-1&&Ce!==-1){const Se=Ph(R,Ne,Ce);try{E(Se);const Q=Se.map((ee,de)=>Ge(fe(ae,`users/${Te.uid}/Boards/${o}/Lists/${s}/cards`,ee.id),{order:de,title:ee.title,labels:ee.labels,background:ee.background})),G=a.map(ee=>Se.map((de,U)=>Ge(fe(ae,`users/${ee.id}/Boards/${o}/Lists/${s}/cards`,de.id),{order:U,title:de.title,labels:de.labels,background:de.background})));await Promise.all([...Q,...G.flat()])}catch(Q){console.error("Error updating cards:",Q)}}}else console.error("User is not authenticated")}},[Ae,Ct]=M.useState(window.innerWidth<=650);M.useEffect(()=>{const Z=()=>{Ct(window.innerWidth<=650)};return window.addEventListener("resize",Z),()=>{window.removeEventListener("resize",Z)}},[]);const rt={transform:V?`translate3d(${V.x}px, 0, 20px) rotate(${K?-2:0}deg)`:void 0,transition:W,backgroundColor:K?"rgba(0, 0, 0, 0.8)":"",cursor:K?"grabbing":"pointer",zIndex:K?10:"auto"},Pt=fk(Rd(U0,{activationConstraint:{delay:100,tolerance:5}}),Rd(z0,{activationConstraint:{delay:100,tolerance:5}})),ht=async Z=>{const te=Ve.currentUser;if(E(me=>me.filter(Ne=>Ne.id!==Z).map((Ne,Ce)=>({...Ne,order:Ce}))),te)try{const me=R.filter(Ce=>Ce.id!==Z);await gr(fe(ae,`users/${te.uid}/Boards/${o}/Lists/${s}/cards`,Z));const Te=me.map((Ce,Se)=>Ge(fe(ae,`users/${te.uid}/Boards/${o}/Lists/${s}/cards`,Ce.id),{order:Se,title:Ce.title,labels:Ce.labels,background:Ce.background})),Ne=a.map(Ce=>{const Se=gr(fe(ae,`users/${Ce.id}/Boards/${o}/Lists/${s}/cards`,Z)),Q=me.map((G,ee)=>Ge(fe(ae,`users/${Ce.id}/Boards/${o}/Lists/${s}/cards`,G.id),{order:ee,title:G.title,labels:G.labels,background:G.background}));return[Se,...Q]}).flat();await Promise.all([...Te,...Ne]),console.log("Card deleted and orders updated for all shared users")}catch(me){console.error("Error updating card title: ",me)}else console.error("User is not authenticated")},an=async()=>{const Z=Ve.currentUser;if(Z)try{n(s);const te=fe(ae,`users/${Z.uid}/Boards/${o}/Lists`,s);await gr(te);const me=a.map(Te=>{const Ne=fe(ae,`users/${Te.id}/Boards/${o}/Lists`,s);return gr(Ne)});await Promise.all(me)}catch(te){console.error("Error deleting card: ",te)}else console.error("User is not authenticated")};return C.jsxs("div",{style:rt,className:`bg-black  ListCssCustom  px-2.5 py-2.5 shadow-xl  rounded-xl h-fit ${e&&!K?"swing":""} ${!e||!K?"snap-start":""}  ${K?"dragList":""}`,children:[C.jsx("div",{className:`overlay ${f?"visible":""}`}),f&&C.jsxs("div",{ref:S,className:"card flex item  z-[10000]  absolute  flex-col gap-1",style:{top:`${h.y+5}px`,left:window.innerWidth>700?`${h.x-225}px`:`${h.x-335}px`,alignItems:`${window.innerWidth>700?"start":"end"}`},children:[C.jsxs("button",{onClick:re,className:`flex text-gray-300 shadow-xl ${I?"bg-green-600":"bg-gray-800"}  ${I?"hover:bg-green-700":"hover:bg-gray-700"}  font-bold  rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm`,children:[I?C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-5 mr-2",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"})}):C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-2",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"})}),I?"Copied!":"Copy"]}),C.jsxs("button",{onClick:an,className:"flex text-gray-300 shadow-xl bg-gray-800  hover:bg-gray-700  font-bold rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm",children:[C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-2",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})}),"Delete"]})]}),C.jsxs("div",{ref:F,...z,...J,onContextMenu:Re,children:[C.jsxs("div",{className:"flex relative overflow-x-hidden w-full h-10 justify-between items-start",children:[C.jsxs("div",{className:"focus:border-solid select-none focus:border-blue-500 focus:box-shadow focus:outline-none text-slate-300 px-1 text-lg mt-1.5 w-full mr-2",children:[A.length>22?`${A.substring(0,22)}...`:A,f&&C.jsx("div",{children:C.jsx("textarea",{ref:y,className:"z-[1000] absolute sm:w-full w-[68%] h-10 left-0 sm:right-0 top-0 pb-2 pt-3 ri text-start px-2.5 rounded-md bg-gray-800 border-solid border-slate-400 border-0 focus:outline-none text-slate-300 resize-none overflow-hidden focus:text-slate-300",value:A,rows:"1",onChange:he})})]}),C.jsxs("button",{ref:k,onClick:oe,className:"text-slate-300 p-1 hover:opacity-80 select-none text-xl",children:[" ",C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"})})]})]}),C.jsx("div",{onTouchStart:le,onMouseDown:Le,className:" flex  pr-1.5 flex-col justify-start kkkk my-3 items-center",children:C.jsx(Ik,{sensors:Pt,collisionDetection:pk,onDragEnd:qe,children:C.jsx(Mk,{items:R,strategy:Rk,children:R.map(Z=>C.jsx(U4,{BoardId:o,listid:s,title:Z.title,BG:Z.background,id:Z.id,labels:Z.labels,item:Z,onDeleteCard:ht,sharedWith:a,lists:i},Z.id))})})})]}),C.jsxs("div",{children:[!c&&C.jsx("button",{onClick:Ee,className:"text-slate-300 select-none text-opacity-95 hover:opacity-100 hover:bg-zinc-800 hover:bg-opacity-90 hover:shadow-xl w-full text-start px-1.5 py-1  rounded-md",children:"+ Add a card"}),c&&C.jsxs("div",{className:"mt-1",ref:m,children:[C.jsx("textarea",{placeholder:"Enter card title...",className:"pb-5 pt-1 h-16   text-start px-2.5 rounded-md w-full border-solid border-slate-400 border-0 focus:outline-none bg-gray-800 text-slate-300 resize-none overflow-hidden",onChange:Z=>x(Z.target.value),value:v,rows:"1",onInput:Z=>{Z.target.style.height="auto",Z.target.style.height=`${Z.target.scrollHeight+15}px`},onClick:Z=>Z.stopPropagation()}),C.jsxs("div",{className:"mt-3  flex justify-start gap-1.5",children:[C.jsx("button",{onClick:De,className:"bg-blue-600 hover:bg-blue-700 mr-1.5 text-gray-950 py-1 px-2 rounded-md text-m",children:"Add Card"}),C.jsx("button",{onClick:se,className:"text-slate-300 py-1 px-1 rounded-md text-md hover:bg-gray-800",children:C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"})})}),C.jsx("button",{onClick:()=>u(!1),className:"text-slate-300 py-1 px-1  rounded-md text-md hover:bg-gray-800",children:C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),C.jsx("p",{className:"text-red-500 text-sm text-center mt-1",children:b})]})]})]})});function $4({BoardMember:t,visibility:e,id:n,Board:r}){const[i,s]=M.useState(t),[o,a]=M.useState(""),l=async()=>{try{if(!o){console.error("Email is required.");return}const c=Bs(ae,"users"),u=await Fs(c);let f=null;if(u.forEach(p=>{const h=p.data();h.email===o&&(f={id:p.id,...h},console.log("User found: ",f))}),f){s(h=>[...h,f]);const p=[...i,f];try{const h=fe(ae,`users/${i[0].id}/Boards/${n}`);await Ge(h,{sharedWith:p});const g=fe(ae,`users/${f.id}/Boards/${n}`);await er(g,{...r.data,sharedWith:p},{merge:!0});const m=p.map(v=>{const x=fe(ae,`users/${v.id}/Boards/${n}`);return Ge(x,{sharedWith:p})});await Promise.all(m),console.log("Member added successfully and sharedWith updated for all members.")}catch(h){console.error("Error updating sharedWith: ",h)}}else{console.log("No user found with that email.");return}}catch(c){console.error("Error fetching users: ",c)}};return C.jsxs("div",{className:"bg-zinc-800 flex flex-col absolute  sm:top-24 top-[5.55em] z-[10000]   right-3  h-fit w-fit py-3 rounded-lg px-3.5 justify-start",children:[e==="private"&&C.jsx("div",{className:"w-[100%]  top-[-.2%]  p-1 right-[.1px]  h-[100%] absolute rounded-lg bg-zinc-950 bg-opacity-85 flex justify-center items-center",children:C.jsxs("div",{className:"flex flex-col",children:[C.jsx("h1",{className:"text-gray-300 text-center text-lg",children:"This Board is private."}),C.jsx("p",{className:"text-gray-300 text-center text-sm",children:"To share it with others,switch it to shareable mode."})]})}),C.jsx("h1",{className:"text-gray-300 text-lg",children:"Share Board"}),C.jsx("div",{children:C.jsxs("div",{className:"flex gap-2.5 mt-4",children:[C.jsx("input",{onChange:c=>{a(c.target.value)},value:o,type:"email",required:!0,placeholder:"Enter Email address",className:"text:xl p-1.5 px-2.5 pr-12 h-fit rounded-md  border-solid border-slate-400 focus:border-solid focus:border-blue-500 focus:box-shadow border-2  focus:outline-none bg-gray-800 text-sm text-slate-300"}),C.jsx("button",{onClick:l,type:"submit",className:" text-zinc-800 bg-blue-500 hover:bg-blue-600 h-fit p-1.5 px-2 rounded-md",children:"Share"})]})}),C.jsxs("div",{className:"mt-7",children:[C.jsxs("h3",{className:"text-gray-300 text-[.9rem]",children:["Board members ",C.jsx("span",{className:" rounded-[50%] w-fit h-fit  p-.5 px-1 bg-slate-600 text-gray-300",children:i.length})]}),C.jsx("hr",{className:"w-full h-px mt-1  bg-gray-200 border-0 dark:bg-gray-500 opacity-90"})]}),C.jsx("div",{children:i.map((c,u)=>C.jsxs("div",{className:"mt-1 flex items-center gap-2",children:[C.jsx("div",{children:C.jsx("div",{className:" pointer-events-none select-none",style:{backgroundColor:c.avatar.color,color:"#fff",width:"36px",height:"36px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:"18px",border:"1.5px solid #555"},children:c.avatar.initials.toUpperCase()})}),C.jsxs("div",{children:[C.jsxs("h1",{className:"text-gray-300 text-opacity-95",children:[c.name," ",u===0?"(you)":""," "]}),C.jsxs("p",{className:"text-gray-300 text-sm -mt-1 text-opacity-85",children:["@",c.email," "]})]})]},c.id))})]})}function W4(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...r)=>t(...r);return new Proxy(n,{get:(r,i)=>i==="create"?t:(e.has(i)||e.set(i,t(i)),e.get(i))})}function Ih(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Am=t=>Array.isArray(t);function Vk(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function Ul(t){return typeof t=="string"||Array.isArray(t)}function Yx(t){const e=[{},{}];return t==null||t.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function $0(t,e,n,r){if(typeof e=="function"){const[i,s]=Yx(r);e=e(n!==void 0?n:t.custom,i,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,s]=Yx(r);e=e(n!==void 0?n:t.custom,i,s)}return e}function Ah(t,e,n){const r=t.getProps();return $0(r,e,n!==void 0?n:r.custom,t)}const W0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],H0=["initial",...W0],dc=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],zs=new Set(dc),zr=t=>t*1e3,$r=t=>t/1e3,H4={type:"spring",stiffness:500,damping:25,restSpeed:10},q4=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),K4={type:"keyframes",duration:.8},G4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Q4=(t,{keyframes:e})=>e.length>2?K4:zs.has(t)?t.startsWith("scale")?q4(e[1]):H4:G4;function q0(t,e){return t?t[e]||t.default||t:void 0}const X4={skipAnimations:!1,useManualTiming:!1},Y4=t=>t!==null;function Rh(t,{repeat:e,repeatType:n="loop"},r){const i=t.filter(Y4),s=e&&n!=="loop"&&e%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const rn=t=>t;function J4(t){let e=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,f=!1)=>{const h=f&&r?e:n;return u&&s.add(c),h.has(c)||h.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,r){i=!0;return}r=!0,[e,n]=[n,e],n.clear(),e.forEach(a),r=!1,i&&(i=!1,l.process(c))}};return l}const nu=["read","resolveKeyframes","update","preRender","render","postRender"],Z4=40;function jk(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=nu.reduce((x,b)=>(x[b]=J4(s),x),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:f,postRender:p}=o,h=()=>{const x=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(x-i.timestamp,Z4),1),i.timestamp=x,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),u.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(h))},g=()=>{n=!0,r=!0,i.isProcessing||t(h)};return{schedule:nu.reduce((x,b)=>{const _=o[b];return x[b]=(R,E=!1,A=!1)=>(n||g(),_.schedule(R,E,A)),x},{}),cancel:x=>{for(let b=0;b<nu.length;b++)o[nu[b]].cancel(x)},state:i,steps:o}}const{schedule:He,cancel:Wi,state:jt,steps:Wf}=jk(typeof requestAnimationFrame<"u"?requestAnimationFrame:rn,!0),Bk=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,e3=1e-7,t3=12;function n3(t,e,n,r,i){let s,o,a=0;do o=e+(n-e)/2,s=Bk(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>e3&&++a<t3);return o}function hc(t,e,n,r){if(t===e&&n===r)return rn;const i=s=>n3(s,0,1,t,n);return s=>s===0||s===1?s:Bk(i(s),e,r)}const Fk=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Uk=t=>e=>1-t(1-e),zk=hc(.33,1.53,.69,.99),K0=Uk(zk),$k=Fk(K0),Wk=t=>(t*=2)<1?.5*K0(t):.5*(2-Math.pow(2,-10*(t-1))),G0=t=>1-Math.sin(Math.acos(t)),Hk=Uk(G0),qk=Fk(G0),Kk=t=>/^0[^.\s]+$/u.test(t);function r3(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Kk(t):!0}let Rm=rn;const Gk=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Qk=t=>e=>typeof e=="string"&&e.startsWith(t),Xk=Qk("--"),i3=Qk("var(--"),Q0=t=>i3(t)?s3.test(t.split("/*")[0].trim()):!1,s3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,o3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function a3(t){const e=o3.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function Yk(t,e,n=1){const[r,i]=a3(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return Gk(o)?parseFloat(o):o}return Q0(i)?Yk(i,e,n+1):i}const Hi=(t,e,n)=>n>e?e:n<t?t:n,da={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},zl={...da,transform:t=>Hi(0,1,t)},ru={...da,default:1},fc=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ci=fc("deg"),Er=fc("%"),ve=fc("px"),l3=fc("vh"),c3=fc("vw"),Jx={...Er,parse:t=>Er.parse(t)/100,transform:t=>Er.transform(t*100)},u3=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Zx=t=>t===da||t===ve,eb=(t,e)=>parseFloat(t.split(", ")[e]),tb=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return eb(i[1],e);{const s=r.match(/^matrix\((.+)\)$/u);return s?eb(s[1],t):0}},d3=new Set(["x","y","z"]),h3=dc.filter(t=>!d3.has(t));function f3(t){const e=[];return h3.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const Go={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:tb(4,13),y:tb(5,14)};Go.translateX=Go.x;Go.translateY=Go.y;const Jk=t=>e=>e.test(t),p3={test:t=>t==="auto",parse:t=>t},Zk=[da,ve,Er,ci,c3,l3,p3],nb=t=>Zk.find(Jk(t)),ws=new Set;let Dm=!1,Nm=!1;function eC(){if(Nm){const t=Array.from(ws).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=f3(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Nm=!1,Dm=!1,ws.forEach(t=>t.complete()),ws.clear()}function tC(){ws.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Nm=!0)})}function m3(){tC(),eC()}class X0{constructor(e,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ws.add(this),Dm||(Dm=!0,He.read(tC),He.resolveKeyframes(eC))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=i==null?void 0:i.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(r&&n){const l=r.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),i&&o===void 0&&i.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ws.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ws.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ll=t=>Math.round(t*1e5)/1e5,Y0=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function g3(t){return t==null}const v3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,J0=(t,e)=>n=>!!(typeof n=="string"&&v3.test(n)&&n.startsWith(t)||e&&!g3(n)&&Object.prototype.hasOwnProperty.call(n,e)),nC=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(Y0);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},y3=t=>Hi(0,255,t),Hf={...da,transform:t=>Math.round(y3(t))},vs={test:J0("rgb","red"),parse:nC("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+Hf.transform(t)+", "+Hf.transform(e)+", "+Hf.transform(n)+", "+ll(zl.transform(r))+")"};function x3(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Mm={test:J0("#"),parse:x3,transform:vs.transform},vo={test:J0("hsl","hue"),parse:nC("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+Er.transform(ll(e))+", "+Er.transform(ll(n))+", "+ll(zl.transform(r))+")"},Jt={test:t=>vs.test(t)||Mm.test(t)||vo.test(t),parse:t=>vs.test(t)?vs.parse(t):vo.test(t)?vo.parse(t):Mm.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?vs.transform(t):vo.transform(t)},b3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function w3(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Y0))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(b3))===null||n===void 0?void 0:n.length)||0)>0}const rC="number",iC="color",_3="var",E3="var(",rb="${}",T3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function $l(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=e.replace(T3,l=>(Jt.test(l)?(r.color.push(s),i.push(iC),n.push(Jt.parse(l))):l.startsWith(E3)?(r.var.push(s),i.push(_3),n.push(l)):(r.number.push(s),i.push(rC),n.push(parseFloat(l))),++s,rb)).split(rb);return{values:n,split:a,indexes:r,types:i}}function sC(t){return $l(t).values}function oC(t){const{split:e,types:n}=$l(t),r=e.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=e[o],i[o]!==void 0){const a=n[o];a===rC?s+=ll(i[o]):a===iC?s+=Jt.transform(i[o]):s+=i[o]}return s}}const S3=t=>typeof t=="number"?0:t;function k3(t){const e=sC(t);return oC(t)(e.map(S3))}const qi={test:w3,parse:sC,createTransformer:oC,getAnimatableNone:k3},C3=new Set(["brightness","contrast","saturate","opacity"]);function P3(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(Y0)||[];if(!r)return t;const i=n.replace(r,"");let s=C3.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const I3=/\b([a-z-]*)\(.*?\)/gu,Om={...qi,getAnimatableNone:t=>{const e=t.match(I3);return e?e.map(P3).join(" "):t}},A3={borderWidth:ve,borderTopWidth:ve,borderRightWidth:ve,borderBottomWidth:ve,borderLeftWidth:ve,borderRadius:ve,radius:ve,borderTopLeftRadius:ve,borderTopRightRadius:ve,borderBottomRightRadius:ve,borderBottomLeftRadius:ve,width:ve,maxWidth:ve,height:ve,maxHeight:ve,top:ve,right:ve,bottom:ve,left:ve,padding:ve,paddingTop:ve,paddingRight:ve,paddingBottom:ve,paddingLeft:ve,margin:ve,marginTop:ve,marginRight:ve,marginBottom:ve,marginLeft:ve,backgroundPositionX:ve,backgroundPositionY:ve},R3={rotate:ci,rotateX:ci,rotateY:ci,rotateZ:ci,scale:ru,scaleX:ru,scaleY:ru,scaleZ:ru,skew:ci,skewX:ci,skewY:ci,distance:ve,translateX:ve,translateY:ve,translateZ:ve,x:ve,y:ve,z:ve,perspective:ve,transformPerspective:ve,opacity:zl,originX:Jx,originY:Jx,originZ:ve},ib={...da,transform:Math.round},Z0={...A3,...R3,zIndex:ib,size:ve,fillOpacity:zl,strokeOpacity:zl,numOctaves:ib},D3={...Z0,color:Jt,backgroundColor:Jt,outlineColor:Jt,fill:Jt,stroke:Jt,borderColor:Jt,borderTopColor:Jt,borderRightColor:Jt,borderBottomColor:Jt,borderLeftColor:Jt,filter:Om,WebkitFilter:Om},ev=t=>D3[t];function aC(t,e){let n=ev(t);return n!==Om&&(n=qi),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const N3=new Set(["auto","none","0"]);function M3(t,e,n){let r=0,i;for(;r<t.length&&!i;){const s=t[r];typeof s=="string"&&!N3.has(s)&&$l(s).values.length&&(i=t[r]),r++}if(i&&n)for(const s of e)t[s]=aC(n,i)}class lC extends X0{constructor(e,n,r,i,s){super(e,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Q0(c))){const u=Yk(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!u3.has(r)||e.length!==2)return;const[i,s]=e,o=nb(i),a=nb(s);if(o!==a)if(Zx(o)&&Zx(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)r3(e[i])&&r.push(i);r.length&&M3(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Go[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var e;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,a=i[o];i[o]=Go[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}function tv(t){return typeof t=="function"}let Du;function O3(){Du=void 0}const Tr={now:()=>(Du===void 0&&Tr.set(jt.isProcessing||X4.useManualTiming?jt.timestamp:performance.now()),Du),set:t=>{Du=t,queueMicrotask(O3)}},sb=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(qi.test(t)||t==="0")&&!t.startsWith("url("));function L3(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function V3(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=sb(i,e),a=sb(s,e);return!o||!a?!1:L3(t)||(n==="spring"||tv(n))&&r}const j3=40;class cC{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Tr.now(),this.options={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>j3?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&m3(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=Tr.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!V3(e,r,i,s))if(o)this.options.duration=0;else{l==null||l(Rh(e,this.options,n)),a==null||a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}function uC(t,e){return e?t*(1e3/e):0}const B3=5;function dC(t,e,n){const r=Math.max(e-B3,0);return uC(n-t(r),e-r)}const qf=.001,F3=.01,U3=10,z3=.05,$3=1;function W3({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let i,s,o=1-e;o=Hi(z3,$3,o),t=Hi(F3,U3,$r(t)),o<1?(i=c=>{const u=c*o,f=u*t,p=u-n,h=Lm(c,o),g=Math.exp(-f);return qf-p/h*g},s=c=>{const f=c*o*t,p=f*n+n,h=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-f),m=Lm(Math.pow(c,2),o);return(-i(c)+qf>0?-1:1)*((p-h)*g)/m}):(i=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-qf+u*f},s=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const a=5/t,l=q3(i,s,a);if(t=zr(t),isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:t}}}const H3=12;function q3(t,e,n){let r=n;for(let i=1;i<H3;i++)r=r-t(r)/e(r);return r}function Lm(t,e){return t*Math.sqrt(1-e*e)}const K3=["duration","bounce"],G3=["stiffness","damping","mass"];function ob(t,e){return e.some(n=>t[n]!==void 0)}function Q3(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!ob(t,G3)&&ob(t,K3)){const n=W3(t);e={...e,...n,mass:1},e.isResolvedFromDuration=!0}return e}function hC({keyframes:t,restDelta:e,restSpeed:n,...r}){const i=t[0],s=t[t.length-1],o={done:!1,value:i},{stiffness:a,damping:l,mass:c,duration:u,velocity:f,isResolvedFromDuration:p}=Q3({...r,velocity:-$r(r.velocity||0)}),h=f||0,g=l/(2*Math.sqrt(a*c)),m=s-i,v=$r(Math.sqrt(a/c)),x=Math.abs(m)<5;n||(n=x?.01:2),e||(e=x?.005:.5);let b;if(g<1){const _=Lm(v,g);b=R=>{const E=Math.exp(-g*v*R);return s-E*((h+g*v*m)/_*Math.sin(_*R)+m*Math.cos(_*R))}}else if(g===1)b=_=>s-Math.exp(-v*_)*(m+(h+v*m)*_);else{const _=v*Math.sqrt(g*g-1);b=R=>{const E=Math.exp(-g*v*R),A=Math.min(_*R,300);return s-E*((h+g*v*m)*Math.sinh(A)+_*m*Math.cosh(A))/_}}return{calculatedDuration:p&&u||null,next:_=>{const R=b(_);if(p)o.done=_>=u;else{let E=0;g<1&&(E=_===0?zr(h):dC(b,_,R));const A=Math.abs(E)<=n,T=Math.abs(s-R)<=e;o.done=A&&T}return o.value=o.done?s:R,o}}}function ab({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=t[0],p={done:!1,value:f},h=y=>a!==void 0&&y<a||l!==void 0&&y>l,g=y=>a===void 0?l:l===void 0||Math.abs(a-y)<Math.abs(l-y)?a:l;let m=n*e;const v=f+m,x=o===void 0?v:o(v);x!==v&&(m=x-f);const b=y=>-m*Math.exp(-y/r),_=y=>x+b(y),R=y=>{const S=b(y),k=_(y);p.done=Math.abs(S)<=c,p.value=p.done?x:k};let E,A;const T=y=>{h(p.value)&&(E=y,A=hC({keyframes:[p.value,g(p.value)],velocity:dC(_,y,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:u}))};return T(0),{calculatedDuration:null,next:y=>{let S=!1;return!A&&E===void 0&&(S=!0,R(y),T(y)),E!==void 0&&y>=E?A.next(y-E):(!S&&R(y),p)}}}const X3=hc(.42,0,1,1),Y3=hc(0,0,.58,1),fC=hc(.42,0,.58,1),J3=t=>Array.isArray(t)&&typeof t[0]!="number",nv=t=>Array.isArray(t)&&typeof t[0]=="number",lb={linear:rn,easeIn:X3,easeInOut:fC,easeOut:Y3,circIn:G0,circInOut:qk,circOut:Hk,backIn:K0,backInOut:$k,backOut:zk,anticipate:Wk},cb=t=>{if(nv(t)){Rm(t.length===4);const[e,n,r,i]=t;return hc(e,n,r,i)}else if(typeof t=="string")return Rm(lb[t]!==void 0),lb[t];return t},Z3=(t,e)=>n=>e(t(n)),Wr=(...t)=>t.reduce(Z3),Qo=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},ot=(t,e,n)=>t+(e-t)*n;function Kf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function ej({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=Kf(l,a,t+1/3),s=Kf(l,a,t),o=Kf(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function Nd(t,e){return n=>n>0?e:t}const Gf=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},tj=[Mm,vs,vo],nj=t=>tj.find(e=>e.test(t));function ub(t){const e=nj(t);if(!e)return!1;let n=e.parse(t);return e===vo&&(n=ej(n)),n}const db=(t,e)=>{const n=ub(t),r=ub(e);if(!n||!r)return Nd(t,e);const i={...n};return s=>(i.red=Gf(n.red,r.red,s),i.green=Gf(n.green,r.green,s),i.blue=Gf(n.blue,r.blue,s),i.alpha=ot(n.alpha,r.alpha,s),vs.transform(i))},Vm=new Set(["none","hidden"]);function rj(t,e){return Vm.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function ij(t,e){return n=>ot(t,e,n)}function rv(t){return typeof t=="number"?ij:typeof t=="string"?Q0(t)?Nd:Jt.test(t)?db:aj:Array.isArray(t)?pC:typeof t=="object"?Jt.test(t)?db:sj:Nd}function pC(t,e){const n=[...t],r=n.length,i=t.map((s,o)=>rv(s)(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function sj(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=rv(t[i])(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function oj(t,e){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][i[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;r[s]=l,i[o]++}return r}const aj=(t,e)=>{const n=qi.createTransformer(e),r=$l(t),i=$l(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Vm.has(t)&&!i.values.length||Vm.has(e)&&!r.values.length?rj(t,e):Wr(pC(oj(r,i),i.values),n):Nd(t,e)};function mC(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ot(t,e,n):rv(t)(t,e)}function lj(t,e,n){const r=[],i=n||mC,s=t.length-1;for(let o=0;o<s;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||rn:e;a=Wr(l,a)}r.push(a)}return r}function cj(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if(Rm(s===e.length),s===1)return()=>e[0];if(s===2&&t[0]===t[1])return()=>e[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const o=lj(e,r,i),a=o.length,l=c=>{let u=0;if(a>1)for(;u<t.length-2&&!(c<t[u+1]);u++);const f=Qo(t[u],t[u+1],c);return o[u](f)};return n?c=>l(Hi(t[0],t[s-1],c)):l}function uj(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=Qo(0,e,r);t.push(ot(n,1,i))}}function dj(t){const e=[0];return uj(e,t.length-1),e}function hj(t,e){return t.map(n=>n*e)}function fj(t,e){return t.map(()=>e||fC).splice(0,t.length-1)}function Md({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=J3(r)?r.map(cb):cb(r),s={done:!1,value:e[0]},o=hj(n&&n.length===e.length?n:dj(e),t),a=cj(o,e,{ease:Array.isArray(i)?i:fj(e,i)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const hb=2e4;function pj(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<hb;)e+=n,r=t.next(e);return e>=hb?1/0:e}const mj=t=>{const e=({timestamp:n})=>t(n);return{start:()=>He.update(e,!0),stop:()=>Wi(e),now:()=>jt.isProcessing?jt.timestamp:Tr.now()}},gj={decay:ab,inertia:ab,tween:Md,keyframes:Md,spring:hC},vj=t=>t/100;class iv extends cC{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||X0,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,r,i),this.resolver.scheduleResolve()}initPlayback(e){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,a=tv(n)?n:gj[n]||Md;let l,c;a!==Md&&typeof e[0]!="number"&&(l=Wr(vj,mC(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=pj(u));const{calculatedDuration:f}=u,p=f+i,h=p*(r+1)-i;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:h}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:r}=this;if(!r){const{keyframes:y}=this.options;return{done:!0,value:y[y.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:h,repeatType:g,repeatDelay:m,onUpdate:v}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const x=this.currentTime-p*(this.speed>=0?1:-1),b=this.speed>=0?x<0:x>u;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let _=this.currentTime,R=s;if(h){const y=Math.min(this.currentTime,u)/f;let S=Math.floor(y),k=y%1;!k&&y>=1&&(k=1),k===1&&S--,S=Math.min(S,h+1),!!(S%2)&&(g==="reverse"?(k=1-k,m&&(k-=m/f)):g==="mirror"&&(R=o)),_=Hi(0,1,k)*f}const E=b?{done:!1,value:l[0]}:R.next(_);a&&(E.value=a(E.value));let{done:A}=E;!b&&c!==null&&(A=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const T=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return T&&i!==void 0&&(E.value=Rh(l,this.options,i)),v&&v(E.value),T&&this.finish(),E}get duration(){const{resolved:e}=this;return e?$r(e.calculatedDuration):0}get time(){return $r(this.currentTime)}set time(e){e=zr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=$r(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=mj,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const yj=new Set(["opacity","clipPath","filter","transform"]),xj=10,bj=(t,e)=>{let n="";const r=Math.max(Math.round(e/xj),2);for(let i=0;i<r;i++)n+=t(Qo(0,r-1,i))+", ";return`linear(${n.substring(0,n.length-2)})`};function sv(t){let e;return()=>(e===void 0&&(e=t()),e)}const wj={linearEasing:void 0};function _j(t,e){const n=sv(t);return()=>{var r;return(r=wj[e])!==null&&r!==void 0?r:n()}}const Od=_j(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing");function gC(t){return!!(typeof t=="function"&&Od()||!t||typeof t=="string"&&(t in jm||Od())||nv(t)||Array.isArray(t)&&t.every(gC))}const Ua=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,jm={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ua([0,.65,.55,1]),circOut:Ua([.55,0,1,.45]),backIn:Ua([.31,.01,.66,-.59]),backOut:Ua([.33,1.53,.69,.99])};function vC(t,e){if(t)return typeof t=="function"&&Od()?bj(t,e):nv(t)?Ua(t):Array.isArray(t)?t.map(n=>vC(n,e)||jm.easeOut):jm[t]}function Ej(t,e,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=vC(a,i);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}function fb(t,e){t.timeline=e,t.onfinish=null}const Tj=sv(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ld=10,Sj=2e4;function kj(t){return tv(t.type)||t.type==="spring"||!gC(t.ease)}function Cj(t,e){const n=new iv({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:t[0]};const i=[];let s=0;for(;!r.done&&s<Sj;)r=n.sample(s),i.push(r.value),s+=Ld;return{times:void 0,keyframes:i,duration:s-Ld,ease:"linear"}}const yC={anticipate:Wk,backInOut:$k,circInOut:qk};function Pj(t){return t in yC}class pb extends cC{constructor(e){super(e);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new lC(s,(o,a)=>this.onKeyframesResolved(o,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(e,n){var r;let{duration:i=300,times:s,ease:o,type:a,motionValue:l,name:c,startTime:u}=this.options;if(!(!((r=l.owner)===null||r===void 0)&&r.current))return!1;if(typeof o=="string"&&Od()&&Pj(o)&&(o=yC[o]),kj(this.options)){const{onComplete:p,onUpdate:h,motionValue:g,element:m,...v}=this.options,x=Cj(e,v);e=x.keyframes,e.length===1&&(e[1]=e[0]),i=x.duration,s=x.times,o=x.ease,a="keyframes"}const f=Ej(l.owner.current,c,e,{...this.options,duration:i,times:s,ease:o});return f.startTime=u??this.calcStartTime(),this.pendingTimeline?(fb(f,this.pendingTimeline),this.pendingTimeline=void 0):f.onfinish=()=>{const{onComplete:p}=this.options;l.set(Rh(e,this.options,n)),p&&p(),this.cancel(),this.resolveFinishedPromise()},{animation:f,duration:i,times:s,type:a,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return $r(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return $r(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=zr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return rn;const{animation:r}=n;fb(r,e)}return rn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:f,element:p,...h}=this.options,g=new iv({...h,keyframes:r,duration:i,type:s,ease:o,times:a,isGenerator:!0}),m=zr(this.time);c.setWithVelocity(g.sample(m-Ld).value,g.sample(m).value,Ld)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:a}=e;return Tj()&&r&&yj.has(r)&&n&&n.owner&&n.owner.current instanceof HTMLElement&&!n.owner.getProps().onUpdate&&!i&&s!=="mirror"&&o!==0&&a!=="inertia"}}const Ij=sv(()=>window.ScrollTimeline!==void 0);class Aj{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}then(e,n){return Promise.all(this.animations).then(e).catch(n)}getAll(e){return this.animations[0][e]}setAll(e,n){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=n}attachTimeline(e,n){const r=this.animations.map(i=>Ij()&&i.attachTimeline?i.attachTimeline(e):n(i));return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}function Rj({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const ov=(t,e,n,r={},i,s)=>o=>{const a=q0(r,t)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-zr(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:p=>{e.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:i};Rj(a)||(u={...u,...Q4(t,u)}),u.duration&&(u.duration=zr(u.duration)),u.repeatDelay&&(u.repeatDelay=zr(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const p=Rh(u.keyframes,a);if(p!==void 0)return He.update(()=>{u.onUpdate(p),u.onComplete()}),new Aj([])}return!s&&pb.supports(u)?new pb(u):new iv(u)},Dj=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Nj=t=>Am(t)?t[t.length-1]||0:t;function av(t,e){t.indexOf(e)===-1&&t.push(e)}function lv(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class cv{constructor(){this.subscriptions=[]}add(e){return av(this.subscriptions,e),()=>lv(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const mb=30,Mj=t=>!isNaN(parseFloat(t));class Oj{constructor(e,n={}){this.version="11.11.10",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=Tr.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Tr.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=Mj(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new cv);const r=this.events[e].add(n);return e==="change"?()=>{r(),He.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Tr.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>mb)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,mb);return uC(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Wl(t,e){return new Oj(t,e)}function Lj(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Wl(n))}function Vj(t,e){const n=Ah(t,e);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=Nj(s[o]);Lj(t,o,a)}}const uv=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),jj="framerAppearId",xC="data-"+uv(jj);function bC(t){return t.props[xC]}const nn=t=>!!(t&&t.getVelocity);function Bj(t){return!!(nn(t)&&t.add)}function Bm(t,e){const n=t.getValue("willChange");if(Bj(n))return n.add(e)}function Fj({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function wC(t,e,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;r&&(o=r);const c=[],u=i&&t.animationState&&t.animationState.getState()[i];for(const f in l){const p=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),h=l[f];if(h===void 0||u&&Fj(u,f))continue;const g={delay:n,...q0(o||{},f)};let m=!1;if(window.MotionHandoffAnimation){const x=bC(t);if(x){const b=window.MotionHandoffAnimation(x,f,He);b!==null&&(g.startTime=b,m=!0)}}Bm(t,f),p.start(ov(f,p,h,t.shouldReduceMotion&&zs.has(f)?{type:!1}:g,t,m));const v=p.animation;v&&c.push(v)}return a&&Promise.all(c).then(()=>{He.update(()=>{a&&Vj(t,a)})}),c}function Fm(t,e,n={}){var r;const i=Ah(t,e,n.type==="exit"?(r=t.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(wC(t,i,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:p}=s;return Uj(t,e,u+c,f,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function Uj(t,e,n=0,r=0,i=1,s){const o=[],a=(t.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(t.variantChildren).sort(zj).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Fm(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function zj(t,e){return t.sortNodePosition(e)}function $j(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>Fm(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=Fm(t,e,n);else{const i=typeof e=="function"?Ah(t,e,n.custom):e;r=Promise.all(wC(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}const Wj=H0.length;function _C(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?_C(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<Wj;n++){const r=H0[n],i=t.props[r];(Ul(i)||i===!1)&&(e[r]=i)}return e}const Hj=[...W0].reverse(),qj=W0.length;function Kj(t){return e=>Promise.all(e.map(({animation:n,options:r})=>$j(t,n,r)))}function Gj(t){let e=Kj(t),n=gb(),r=!0;const i=l=>(c,u)=>{var f;const p=Ah(t,u,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:h,transitionEnd:g,...m}=p;c={...c,...m,...g}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=_C(t.parent)||{},f=[],p=new Set;let h={},g=1/0;for(let v=0;v<qj;v++){const x=Hj[v],b=n[x],_=c[x]!==void 0?c[x]:u[x],R=Ul(_),E=x===l?b.isActive:null;E===!1&&(g=v);let A=_===u[x]&&_!==c[x]&&R;if(A&&r&&t.manuallyAnimateOnMount&&(A=!1),b.protectedKeys={...h},!b.isActive&&E===null||!_&&!b.prevProp||Ih(_)||typeof _=="boolean")continue;const T=Qj(b.prevProp,_);let y=T||x===l&&b.isActive&&!A&&R||v>g&&R,S=!1;const k=Array.isArray(_)?_:[_];let I=k.reduce(i(x),{});E===!1&&(I={});const{prevResolvedValues:D={}}=b,N={...D,...I},B=F=>{y=!0,p.has(F)&&(S=!0,p.delete(F)),b.needsAnimating[F]=!0;const V=t.getValue(F);V&&(V.liveStyle=!1)};for(const F in N){const V=I[F],W=D[F];if(h.hasOwnProperty(F))continue;let K=!1;Am(V)&&Am(W)?K=!Vk(V,W):K=V!==W,K?V!=null?B(F):p.add(F):V!==void 0&&p.has(F)?B(F):b.protectedKeys[F]=!0}b.prevProp=_,b.prevResolvedValues=I,b.isActive&&(h={...h,...I}),r&&t.blockInitialAnimation&&(y=!1),y&&(!(A&&T)||S)&&f.push(...k.map(F=>({animation:F,options:{type:x}})))}if(p.size){const v={};p.forEach(x=>{const b=t.getBaseTarget(x),_=t.getValue(x);_&&(_.liveStyle=!0),v[x]=b??null}),f.push({animation:v})}let m=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(m=!1),r=!1,m?e(f):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(p=>{var h;return(h=p.animationState)===null||h===void 0?void 0:h.setActive(l,c)}),n[l].isActive=c;const f=o(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=gb(),r=!0}}}function Qj(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Vk(e,t):!1}function os(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function gb(){return{animate:os(!0),whileInView:os(),whileHover:os(),whileTap:os(),whileDrag:os(),whileFocus:os(),exit:os()}}class es{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Xj extends es{constructor(e){super(e),e.animationState||(e.animationState=Gj(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ih(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let Yj=0;class Jj extends es{constructor(){super(...arguments),this.id=Yj++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Zj={animation:{Feature:Xj},exit:{Feature:Jj}},EC=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1;function Dh(t,e="page"){return{point:{x:t[`${e}X`],y:t[`${e}Y`]}}}const e6=t=>e=>EC(e)&&t(e,Dh(e));function jr(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}function Hr(t,e,n,r){return jr(t,e,e6(n),r)}const vb=(t,e)=>Math.abs(t-e);function t6(t,e){const n=vb(t.x,e.x),r=vb(t.y,e.y);return Math.sqrt(n**2+r**2)}class TC{constructor(e,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=Xf(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,h=t6(f.offset,{x:0,y:0})>=3;if(!p&&!h)return;const{point:g}=f,{timestamp:m}=jt;this.history.push({...g,timestamp:m});const{onStart:v,onMove:x}=this.handlers;p||(v&&v(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),x&&x(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=Qf(p,this.transformPagePoint),He.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:h,onSessionEnd:g,resumeAnimation:m}=this.handlers;if(this.dragSnapToOrigin&&m&&m(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Xf(f.type==="pointercancel"?this.lastMoveEventInfo:Qf(p,this.transformPagePoint),this.history);this.startEvent&&h&&h(f,v),g&&g(f,v)},!EC(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=Dh(e),a=Qf(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=jt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,Xf(a,this.history)),this.removeListeners=Wr(Hr(this.contextWindow,"pointermove",this.handlePointerMove),Hr(this.contextWindow,"pointerup",this.handlePointerUp),Hr(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Wi(this.updatePoint)}}function Qf(t,e){return e?{point:e(t.point)}:t}function yb(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Xf({point:t},e){return{point:t,delta:yb(t,SC(e)),offset:yb(t,n6(e)),velocity:r6(e,.1)}}function n6(t){return t[0]}function SC(t){return t[t.length-1]}function r6(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=SC(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>zr(e)));)n--;if(!r)return{x:0,y:0};const s=$r(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function kC(t){let e=null;return()=>{const n=()=>{e=null};return e===null?(e=t,n):!1}}const xb=kC("dragHorizontal"),bb=kC("dragVertical");function CC(t){let e=!1;if(t==="y")e=bb();else if(t==="x")e=xb();else{const n=xb(),r=bb();n&&r?e=()=>{n(),r()}:(n&&n(),r&&r())}return e}function PC(){const t=CC(!0);return t?(t(),!1):!0}function yo(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}const IC=1e-4,i6=1-IC,s6=1+IC,AC=.01,o6=0-AC,a6=0+AC;function Nn(t){return t.max-t.min}function l6(t,e,n){return Math.abs(t-e)<=n}function wb(t,e,n,r=.5){t.origin=r,t.originPoint=ot(e.min,e.max,t.origin),t.scale=Nn(n)/Nn(e),t.translate=ot(n.min,n.max,t.origin)-t.originPoint,(t.scale>=i6&&t.scale<=s6||isNaN(t.scale))&&(t.scale=1),(t.translate>=o6&&t.translate<=a6||isNaN(t.translate))&&(t.translate=0)}function cl(t,e,n,r){wb(t.x,e.x,n.x,r?r.originX:void 0),wb(t.y,e.y,n.y,r?r.originY:void 0)}function _b(t,e,n){t.min=n.min+e.min,t.max=t.min+Nn(e)}function c6(t,e,n){_b(t.x,e.x,n.x),_b(t.y,e.y,n.y)}function Eb(t,e,n){t.min=e.min-n.min,t.max=t.min+Nn(e)}function ul(t,e,n){Eb(t.x,e.x,n.x),Eb(t.y,e.y,n.y)}function u6(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?ot(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?ot(n,t,r.max):Math.min(t,n)),t}function Tb(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function d6(t,{top:e,left:n,bottom:r,right:i}){return{x:Tb(t.x,n,i),y:Tb(t.y,e,r)}}function Sb(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function h6(t,e){return{x:Sb(t.x,e.x),y:Sb(t.y,e.y)}}function f6(t,e){let n=.5;const r=Nn(t),i=Nn(e);return i>r?n=Qo(e.min,e.max-r,t.min):r>i&&(n=Qo(t.min,t.max-i,e.min)),Hi(0,1,n)}function p6(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Um=.35;function m6(t=Um){return t===!1?t=0:t===!0&&(t=Um),{x:kb(t,"left","right"),y:kb(t,"top","bottom")}}function kb(t,e,n){return{min:Cb(t,e),max:Cb(t,n)}}function Cb(t,e){return typeof t=="number"?t:t[e]||0}const Pb=()=>({translate:0,scale:1,origin:0,originPoint:0}),xo=()=>({x:Pb(),y:Pb()}),Ib=()=>({min:0,max:0}),pt=()=>({x:Ib(),y:Ib()});function Bn(t){return[t("x"),t("y")]}function RC({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function g6({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function v6(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function Yf(t){return t===void 0||t===1}function zm({scale:t,scaleX:e,scaleY:n}){return!Yf(t)||!Yf(e)||!Yf(n)}function us(t){return zm(t)||DC(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function DC(t){return Ab(t.x)||Ab(t.y)}function Ab(t){return t&&t!=="0%"}function Vd(t,e,n){const r=t-n,i=e*r;return n+i}function Rb(t,e,n,r,i){return i!==void 0&&(t=Vd(t,i,r)),Vd(t,n,r)+e}function $m(t,e=0,n=1,r,i){t.min=Rb(t.min,e,n,r,i),t.max=Rb(t.max,e,n,r,i)}function NC(t,{x:e,y:n}){$m(t.x,e.translate,e.scale,e.originPoint),$m(t.y,n.translate,n.scale,n.originPoint)}const Db=.999999999999,Nb=1.0000000000001;function y6(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&wo(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,NC(t,o)),r&&us(s.latestValues)&&wo(t,s.latestValues))}e.x<Nb&&e.x>Db&&(e.x=1),e.y<Nb&&e.y>Db&&(e.y=1)}function bo(t,e){t.min=t.min+e,t.max=t.max+e}function Mb(t,e,n,r,i=.5){const s=ot(t.min,t.max,i);$m(t,e,n,s,r)}function wo(t,e){Mb(t.x,e.x,e.scaleX,e.scale,e.originX),Mb(t.y,e.y,e.scaleY,e.scale,e.originY)}function MC(t,e){return RC(v6(t.getBoundingClientRect(),e))}function x6(t,e,n){const r=MC(t,n),{scroll:i}=e;return i&&(bo(r.x,i.offset.x),bo(r.y,i.offset.y)),r}const OC=({current:t})=>t?t.ownerDocument.defaultView:null,b6=new WeakMap;class w6{constructor(e){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=pt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Dh(u,"page").point)},s=(u,f)=>{const{drag:p,dragPropagation:h,onDragStart:g}=this.getProps();if(p&&!h&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=CC(p),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Bn(v=>{let x=this.getAxisMotionValue(v).get()||0;if(Er.test(x)){const{projection:b}=this.visualElement;if(b&&b.layout){const _=b.layout.layoutBox[v];_&&(x=Nn(_)*(parseFloat(x)/100))}}this.originPoint[v]=x}),g&&He.postRender(()=>g(u,f)),Bm(this.visualElement,"transform");const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:p,dragDirectionLock:h,onDirectionLock:g,onDrag:m}=this.getProps();if(!p&&!this.openGlobalLock)return;const{offset:v}=f;if(h&&this.currentDirection===null){this.currentDirection=_6(v),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",f.point,v),this.updateAxis("y",f.point,v),this.visualElement.render(),m&&m(u,f)},a=(u,f)=>this.stop(u,f),l=()=>Bn(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new TC(e,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:OC(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&He.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!iu(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=u6(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&yo(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=d6(i.layoutBox,n):this.constraints=!1,this.elastic=m6(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Bn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=p6(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!yo(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=x6(r,i.root,this.visualElement.getTransformPagePoint());let o=h6(i.layout.layoutBox,s);if(n){const a=n(g6(o));this.hasMutatedConstraints=!!a,a&&(o=RC(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Bn(u=>{if(!iu(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const p=i?200:1e6,h=i?40:1e7,g={type:"inertia",velocity:r?e[u]:0,bounceStiffness:p,bounceDamping:h,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return Bm(this.visualElement,e),r.start(ov(e,r,0,n,this.visualElement,!1))}stopAnimation(){Bn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Bn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Bn(n=>{const{drag:r}=this.getProps();if(!iu(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(e[n]-ot(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!yo(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Bn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=f6({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Bn(o=>{if(!iu(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(ot(l,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;b6.set(this.visualElement,this);const e=this.visualElement.current,n=Hr(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();yo(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),He.read(r);const o=jr(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Bn(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=Um,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function iu(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function _6(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class E6 extends es{constructor(e){super(e),this.removeGroupControls=rn,this.removeListeners=rn,this.controls=new w6(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||rn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ob=t=>(e,n)=>{t&&He.postRender(()=>t(e,n))};class T6 extends es{constructor(){super(...arguments),this.removePointerDownListener=rn}onPointerDown(e){this.session=new TC(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:OC(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Ob(e),onStart:Ob(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&He.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Hr(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Nh=M.createContext(null);function S6(){const t=M.useContext(Nh);if(t===null)return[!0,null];const{isPresent:e,onExitComplete:n,register:r}=t,i=M.useId();M.useEffect(()=>r(i),[]);const s=M.useCallback(()=>n&&n(i),[i,n]);return!e&&n?[!1,s]:[!0]}const dv=M.createContext({}),LC=M.createContext({}),Nu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Lb(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Aa={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(ve.test(t))t=parseFloat(t);else return t;const n=Lb(t,e.target.x),r=Lb(t,e.target.y);return`${n}% ${r}%`}},k6={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=qi.parse(t);if(i.length>5)return r;const s=qi.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=l;const c=ot(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}},jd={};function C6(t){Object.assign(jd,t)}const{schedule:hv,cancel:c9}=jk(queueMicrotask,!1);class P6 extends M.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;C6(I6),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),Nu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||He.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),hv.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function VC(t){const[e,n]=S6(),r=M.useContext(dv);return C.jsx(P6,{...t,layoutGroup:r,switchLayoutGroup:M.useContext(LC),isPresent:e,safeToRemove:n})}const I6={borderRadius:{...Aa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Aa,borderTopRightRadius:Aa,borderBottomLeftRadius:Aa,borderBottomRightRadius:Aa,boxShadow:k6},jC=["TopLeft","TopRight","BottomLeft","BottomRight"],A6=jC.length,Vb=t=>typeof t=="string"?parseFloat(t):t,jb=t=>typeof t=="number"||ve.test(t);function R6(t,e,n,r,i,s){i?(t.opacity=ot(0,n.opacity!==void 0?n.opacity:1,D6(r)),t.opacityExit=ot(e.opacity!==void 0?e.opacity:1,0,N6(r))):s&&(t.opacity=ot(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<A6;o++){const a=`border${jC[o]}Radius`;let l=Bb(e,a),c=Bb(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||jb(l)===jb(c)?(t[a]=Math.max(ot(Vb(l),Vb(c),r),0),(Er.test(c)||Er.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=ot(e.rotate||0,n.rotate||0,r))}function Bb(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const D6=BC(0,.5,Hk),N6=BC(.5,.95,rn);function BC(t,e,n){return r=>r<t?0:r>e?1:n(Qo(t,e,r))}function Fb(t,e){t.min=e.min,t.max=e.max}function jn(t,e){Fb(t.x,e.x),Fb(t.y,e.y)}function Ub(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function zb(t,e,n,r,i){return t-=e,t=Vd(t,1/n,r),i!==void 0&&(t=Vd(t,1/i,r)),t}function M6(t,e=0,n=1,r=.5,i,s=t,o=t){if(Er.test(e)&&(e=parseFloat(e),e=ot(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ot(s.min,s.max,r);t===s&&(a-=e),t.min=zb(t.min,e,n,a,i),t.max=zb(t.max,e,n,a,i)}function $b(t,e,[n,r,i],s,o){M6(t,e[n],e[r],e[i],e.scale,s,o)}const O6=["x","scaleX","originX"],L6=["y","scaleY","originY"];function Wb(t,e,n,r){$b(t.x,e,O6,n?n.x:void 0,r?r.x:void 0),$b(t.y,e,L6,n?n.y:void 0,r?r.y:void 0)}function Hb(t){return t.translate===0&&t.scale===1}function FC(t){return Hb(t.x)&&Hb(t.y)}function qb(t,e){return t.min===e.min&&t.max===e.max}function V6(t,e){return qb(t.x,e.x)&&qb(t.y,e.y)}function Kb(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function UC(t,e){return Kb(t.x,e.x)&&Kb(t.y,e.y)}function Gb(t){return Nn(t.x)/Nn(t.y)}function Qb(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class j6{constructor(){this.members=[]}add(e){av(this.members,e),e.scheduleRender()}remove(e){if(lv(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function B6(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:p,skewX:h,skewY:g}=n;c&&(r=`perspective(${c}px) ${r}`),u&&(r+=`rotate(${u}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),h&&(r+=`skewX(${h}deg) `),g&&(r+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const F6=(t,e)=>t.depth-e.depth;class U6{constructor(){this.children=[],this.isDirty=!1}add(e){av(this.children,e),this.isDirty=!0}remove(e){lv(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(F6),this.isDirty=!1,this.children.forEach(e)}}function Mu(t){const e=nn(t)?t.get():t;return Dj(e)?e.toValue():e}function z6(t,e){const n=Tr.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(Wi(r),t(s-e))};return He.read(r,!0),()=>Wi(r)}function $6(t){return t instanceof SVGElement&&t.tagName!=="svg"}function W6(t,e,n){const r=nn(t)?t:Wl(t);return r.start(ov("",r,e,n)),r.animation}const ds={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},za=typeof window<"u"&&window.MotionDebug!==void 0,Jf=["","X","Y","Z"],H6={visibility:"hidden"},Xb=1e3;let q6=0;function Zf(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function zC(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=bC(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",He,!(i||s))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&zC(r)}function $C({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=q6++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,za&&(ds.totalNodes=ds.resolvedTargetDeltas=ds.recalculatedProjection=0),this.nodes.forEach(Q6),this.nodes.forEach(eB),this.nodes.forEach(tB),this.nodes.forEach(X6),za&&window.MotionDebug.record(ds)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new U6)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new cv),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=$6(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let f;const p=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=z6(p,250),Nu.hasAnimatedSinceResize&&(Nu.hasAnimatedSinceResize=!1,this.nodes.forEach(Jb))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:h,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||u.getDefaultTransition()||oB,{onLayoutAnimationStart:v,onLayoutAnimationComplete:x}=u.getProps(),b=!this.targetLayout||!UC(this.targetLayout,g)||h,_=!p&&h;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||_||p&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,_);const R={...q0(m,"layout"),onPlay:v,onComplete:x};(u.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R)}else p||Jb(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Wi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(nB),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&zC(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Yb);return}this.isUpdating||this.nodes.forEach(J6),this.isUpdating=!1,this.nodes.forEach(Z6),this.nodes.forEach(K6),this.nodes.forEach(G6),this.clearAllSnapshots();const a=Tr.now();jt.delta=Hi(0,1e3/60,a-jt.timestamp),jt.timestamp=a,jt.isProcessing=!0,Wf.update.process(jt),Wf.preRender.process(jt),Wf.render.process(jt),jt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,hv.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Y6),this.sharedNodes.forEach(rB)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,He.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){He.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=pt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!FC(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||us(this.latestValues)||u)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),aB(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return pt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(lB))){const{scroll:u}=this.root;u&&(bo(l.x,u.offset.x),bo(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=pt();if(jn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:p}=u;u!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&jn(l,o),bo(l.x,f.offset.x),bo(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=pt();jn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&wo(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),us(u.latestValues)&&wo(l,u.latestValues)}return us(this.latestValues)&&wo(l,this.latestValues),l}removeTransform(o){const a=pt();jn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!us(c.latestValues))continue;zm(c.latestValues)&&c.updateSnapshot();const u=pt(),f=c.measurePageBox();jn(u,f),Wb(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return us(this.latestValues)&&Wb(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==jt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=jt.timestamp,!this.targetDelta&&!this.relativeTarget){const h=this.getClosestProjectingParent();h&&h.layout&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pt(),this.relativeTargetOrigin=pt(),ul(this.relativeTargetOrigin,this.layout.layoutBox,h.layout.layoutBox),jn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=pt(),this.targetWithTransforms=pt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),c6(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):jn(this.target,this.layout.layoutBox),NC(this.target,this.targetDelta)):jn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const h=this.getClosestProjectingParent();h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?(this.relativeParent=h,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pt(),this.relativeTargetOrigin=pt(),ul(this.relativeTargetOrigin,this.target,h.target),jn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}za&&ds.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||zm(this.parent.latestValues)||DC(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===jt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;jn(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,h=this.treeScale.y;y6(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=pt());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ub(this.prevProjectionDelta.x,this.projectionDelta.x),Ub(this.prevProjectionDelta.y,this.projectionDelta.y)),cl(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==h||!Qb(this.projectionDelta.x,this.prevProjectionDelta.x)||!Qb(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),za&&ds.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=xo(),this.projectionDelta=xo(),this.projectionDeltaWithTransform=xo()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=xo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=pt(),h=l?l.source:void 0,g=this.layout?this.layout.source:void 0,m=h!==g,v=this.getStack(),x=!v||v.members.length<=1,b=!!(m&&!x&&this.options.crossfade===!0&&!this.path.some(sB));this.animationProgress=0;let _;this.mixTargetDelta=R=>{const E=R/1e3;Zb(f.x,o.x,E),Zb(f.y,o.y,E),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ul(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),iB(this.relativeTarget,this.relativeTargetOrigin,p,E),_&&V6(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=pt()),jn(_,this.relativeTarget)),m&&(this.animationValues=u,R6(u,c,this.latestValues,E,b,x)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Wi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=He.update(()=>{Nu.hasAnimatedSinceResize=!0,this.currentAnimation=W6(0,Xb,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Xb),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&WC(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||pt();const f=Nn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const p=Nn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}jn(a,l),wo(a,u),cl(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new j6),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Zf("z",o,c,this.animationValues);for(let u=0;u<Jf.length;u++)Zf(`rotate${Jf[u]}`,o,c,this.animationValues),Zf(`skew${Jf[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return H6;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Mu(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const m={};return this.options.layoutId&&(m.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,m.pointerEvents=Mu(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!us(this.latestValues)&&(m.transform=u?u({},""):"none",this.hasProjected=!1),m}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=B6(this.projectionDeltaWithTransform,this.treeScale,p),u&&(c.transform=u(p,c.transform));const{x:h,y:g}=this.projectionDelta;c.transformOrigin=`${h.origin*100}% ${g.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const m in jd){if(p[m]===void 0)continue;const{correct:v,applyTo:x}=jd[m],b=c.transform==="none"?p[m]:v(p[m],f);if(x){const _=x.length;for(let R=0;R<_;R++)c[x[R]]=b}else c[m]=b}return this.options.layoutId&&(c.pointerEvents=f===this?Mu(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Yb),this.root.sharedNodes.clear()}}}function K6(t){t.updateLayout()}function G6(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Bn(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],h=Nn(p);p.min=r[f].min,p.max=p.min+h}):WC(s,n.layoutBox,r)&&Bn(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],h=Nn(r[f]);p.max=p.min+h,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+h)});const a=xo();cl(a,r,n.layoutBox);const l=xo();o?cl(l,t.applyTransform(i,!0),n.measuredBox):cl(l,r,n.layoutBox);const c=!FC(a);let u=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:h}=f;if(p&&h){const g=pt();ul(g,n.layoutBox,p.layoutBox);const m=pt();ul(m,r,h.layoutBox),UC(g,m)||(u=!0),f.options.layoutRoot&&(t.relativeTarget=m,t.relativeTargetOrigin=g,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function Q6(t){za&&ds.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function X6(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Y6(t){t.clearSnapshot()}function Yb(t){t.clearMeasurements()}function J6(t){t.isLayoutDirty=!1}function Z6(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Jb(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function eB(t){t.resolveTargetDelta()}function tB(t){t.calcProjection()}function nB(t){t.resetSkewAndRotation()}function rB(t){t.removeLeadSnapshot()}function Zb(t,e,n){t.translate=ot(e.translate,0,n),t.scale=ot(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function ew(t,e,n,r){t.min=ot(e.min,n.min,r),t.max=ot(e.max,n.max,r)}function iB(t,e,n,r){ew(t.x,e.x,n.x,r),ew(t.y,e.y,n.y,r)}function sB(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const oB={duration:.45,ease:[.4,0,.1,1]},tw=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),nw=tw("applewebkit/")&&!tw("chrome/")?Math.round:rn;function rw(t){t.min=nw(t.min),t.max=nw(t.max)}function aB(t){rw(t.x),rw(t.y)}function WC(t,e,n){return t==="position"||t==="preserve-aspect"&&!l6(Gb(e),Gb(n),.2)}function lB(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const cB=$C({attachResizeListener:(t,e)=>jr(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ep={current:void 0},HC=$C({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ep.current){const t=new cB({});t.mount(window),t.setOptions({layoutScroll:!0}),ep.current=t}return ep.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),uB={pan:{Feature:T6},drag:{Feature:E6,ProjectionNode:HC,MeasureLayout:VC}};function iw(t,e){const n=e?"pointerenter":"pointerleave",r=e?"onHoverStart":"onHoverEnd",i=(s,o)=>{if(s.pointerType==="touch"||PC())return;const a=t.getProps();t.animationState&&a.whileHover&&t.animationState.setActive("whileHover",e);const l=a[r];l&&He.postRender(()=>l(s,o))};return Hr(t.current,n,i,{passive:!t.getProps()[r]})}class dB extends es{mount(){this.unmount=Wr(iw(this.node,!0),iw(this.node,!1))}unmount(){}}class hB extends es{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Wr(jr(this.node.current,"focus",()=>this.onFocus()),jr(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const qC=(t,e)=>e?t===e?!0:qC(t,e.parentElement):!1;function tp(t,e){if(!e)return;const n=new PointerEvent("pointer"+t);e(n,Dh(n))}class fB extends es{constructor(){super(...arguments),this.removeStartListeners=rn,this.removeEndListeners=rn,this.removeAccessibleListeners=rn,this.startPointerPress=(e,n)=>{if(this.isPressing)return;this.removeEndListeners();const r=this.node.getProps(),s=Hr(window,"pointerup",(a,l)=>{if(!this.checkPressEnd())return;const{onTap:c,onTapCancel:u,globalTapTarget:f}=this.node.getProps(),p=!f&&!qC(this.node.current,a.target)?u:c;p&&He.update(()=>p(a,l))},{passive:!(r.onTap||r.onPointerUp)}),o=Hr(window,"pointercancel",(a,l)=>this.cancelPress(a,l),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=Wr(s,o),this.startPress(e,n)},this.startAccessiblePress=()=>{const e=s=>{if(s.key!=="Enter"||this.isPressing)return;const o=a=>{a.key!=="Enter"||!this.checkPressEnd()||tp("up",(l,c)=>{const{onTap:u}=this.node.getProps();u&&He.postRender(()=>u(l,c))})};this.removeEndListeners(),this.removeEndListeners=jr(this.node.current,"keyup",o),tp("down",(a,l)=>{this.startPress(a,l)})},n=jr(this.node.current,"keydown",e),r=()=>{this.isPressing&&tp("cancel",(s,o)=>this.cancelPress(s,o))},i=jr(this.node.current,"blur",r);this.removeAccessibleListeners=Wr(n,i)}}startPress(e,n){this.isPressing=!0;const{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&He.postRender(()=>r(e,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!PC()}cancelPress(e,n){if(!this.checkPressEnd())return;const{onTapCancel:r}=this.node.getProps();r&&He.postRender(()=>r(e,n))}mount(){const e=this.node.getProps(),n=Hr(e.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(e.onTapStart||e.onPointerStart)}),r=jr(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=Wr(n,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Wm=new WeakMap,np=new WeakMap,pB=t=>{const e=Wm.get(t.target);e&&e(t)},mB=t=>{t.forEach(pB)};function gB({root:t,...e}){const n=t||document;np.has(n)||np.set(n,{});const r=np.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(mB,{root:t,...e})),r[i]}function vB(t,e,n){const r=gB(e);return Wm.set(t,n),r.observe(t),()=>{Wm.delete(t),r.unobserve(t)}}const yB={some:0,all:1};class xB extends es{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:yB[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),p=c?u:f;p&&p(l)};return vB(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(bB(e,n))&&this.startObserver()}unmount(){}}function bB({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const wB={inView:{Feature:xB},tap:{Feature:fB},focus:{Feature:hB},hover:{Feature:dB}},_B={layout:{ProjectionNode:HC,MeasureLayout:VC}},fv=M.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),Mh=M.createContext({}),pv=typeof window<"u",KC=pv?M.useLayoutEffect:M.useEffect,GC=M.createContext({strict:!1});function EB(t,e,n,r,i){var s,o;const{visualElement:a}=M.useContext(Mh),l=M.useContext(GC),c=M.useContext(Nh),u=M.useContext(fv).reducedMotion,f=M.useRef();r=r||l.renderer,!f.current&&r&&(f.current=r(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const p=f.current,h=M.useContext(LC);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&TB(f.current,n,i,h),M.useInsertionEffect(()=>{p&&p.update(n,c)});const g=n[xC],m=M.useRef(!!g&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,g))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,g)));return KC(()=>{p&&(window.MotionIsMounted=!0,p.updateFeatures(),hv.render(p.render),m.current&&p.animationState&&p.animationState.animateChanges())}),M.useEffect(()=>{p&&(!m.current&&p.animationState&&p.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var v;(v=window.MotionHandoffMarkAsComplete)===null||v===void 0||v.call(window,g)}),m.current=!1))}),p}function TB(t,e,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:QC(t.parent)),t.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&yo(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}function QC(t){if(t)return t.options.allowProjection!==!1?t.projection:QC(t.parent)}function SB(t,e,n){return M.useCallback(r=>{r&&t.mount&&t.mount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):yo(n)&&(n.current=r))},[e])}function Oh(t){return Ih(t.animate)||H0.some(e=>Ul(t[e]))}function XC(t){return!!(Oh(t)||t.variants)}function kB(t,e){if(Oh(t)){const{initial:n,animate:r}=t;return{initial:n===!1||Ul(n)?n:void 0,animate:Ul(r)?r:void 0}}return t.inherit!==!1?e:{}}function CB(t){const{initial:e,animate:n}=kB(t,M.useContext(Mh));return M.useMemo(()=>({initial:e,animate:n}),[sw(e),sw(n)])}function sw(t){return Array.isArray(t)?t.join(" "):t}const ow={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Xo={};for(const t in ow)Xo[t]={isEnabled:e=>ow[t].some(n=>!!e[n])};function PB(t){for(const e in t)Xo[e]={...Xo[e],...t[e]}}const IB=Symbol.for("motionComponentSymbol");function AB({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){t&&PB(t);function s(a,l){let c;const u={...M.useContext(fv),...a,layoutId:RB(a)},{isStatic:f}=u,p=CB(a),h=r(a,f);if(!f&&pv){DB();const g=NB(u);c=g.MeasureLayout,p.visualElement=EB(i,h,u,e,g.ProjectionNode)}return C.jsxs(Mh.Provider,{value:p,children:[c&&p.visualElement?C.jsx(c,{visualElement:p.visualElement,...u}):null,n(i,a,SB(h,p.visualElement,l),h,f,p.visualElement)]})}const o=M.forwardRef(s);return o[IB]=i,o}function RB({layoutId:t}){const e=M.useContext(dv).id;return e&&t!==void 0?e+"-"+t:t}function DB(t,e){M.useContext(GC).strict}function NB(t){const{drag:e,layout:n}=Xo;if(!e&&!n)return{};const r={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const MB=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function mv(t){return typeof t!="string"||t.includes("-")?!1:!!(MB.indexOf(t)>-1||/[A-Z]/u.test(t))}function YC(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const s in n)t.style.setProperty(s,n[s])}const JC=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function ZC(t,e,n,r){YC(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(JC.has(i)?i:uv(i),e.attrs[i])}function e2(t,{layout:e,layoutId:n}){return zs.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!jd[t]||t==="opacity")}function gv(t,e,n){var r;const{style:i}=t,s={};for(const o in i)(nn(i[o])||e.style&&nn(e.style[o])||e2(o,t)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function t2(t,e,n){const r=gv(t,e,n);for(const i in t)if(nn(t[i])||nn(e[i])){const s=dc.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=t[i]}return r}function vv(t){const e=M.useRef(null);return e.current===null&&(e.current=t()),e.current}function OB({scrapeMotionValuesFromProps:t,createRenderState:e,onMount:n},r,i,s){const o={latestValues:LB(r,i,s,t),renderState:e()};return n&&(o.mount=a=>n(r,a,o)),o}const n2=t=>(e,n)=>{const r=M.useContext(Mh),i=M.useContext(Nh),s=()=>OB(t,e,r,i);return n?s():vv(s)};function LB(t,e,n,r){const i={},s=r(t,{});for(const p in s)i[p]=Mu(s[p]);let{initial:o,animate:a}=t;const l=Oh(t),c=XC(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?a:o;if(f&&typeof f!="boolean"&&!Ih(f)){const p=Array.isArray(f)?f:[f];for(let h=0;h<p.length;h++){const g=$0(t,p[h]);if(g){const{transitionEnd:m,transition:v,...x}=g;for(const b in x){let _=x[b];if(Array.isArray(_)){const R=u?_.length-1:0;_=_[R]}_!==null&&(i[b]=_)}for(const b in m)i[b]=m[b]}}}return i}const yv=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),r2=()=>({...yv(),attrs:{}}),i2=(t,e)=>e&&typeof t=="number"?e.transform(t):t,VB={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},jB=dc.length;function BB(t,e,n){let r="",i=!0;for(let s=0;s<jB;s++){const o=dc[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=i2(a,Z0[o]);if(!l){i=!1;const u=VB[o]||o;r+=`${u}(${c}) `}n&&(e[o]=c)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function xv(t,e,n){const{style:r,vars:i,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(zs.has(l)){o=!0;continue}else if(Xk(l)){i[l]=c;continue}else{const u=i2(c,Z0[l]);l.startsWith("origin")?(a=!0,s[l]=u):r[l]=u}}if(e.transform||(o||n?r.transform=BB(e,t.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;r.transformOrigin=`${l} ${c} ${u}`}}function aw(t,e,n){return typeof t=="string"?t:ve.transform(e+n*t)}function FB(t,e,n){const r=aw(e,t.x,t.width),i=aw(n,t.y,t.height);return`${r} ${i}`}const UB={offset:"stroke-dashoffset",array:"stroke-dasharray"},zB={offset:"strokeDashoffset",array:"strokeDasharray"};function $B(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?UB:zB;t[s.offset]=ve.transform(-r);const o=ve.transform(e),a=ve.transform(n);t[s.array]=`${o} ${a}`}function bv(t,{attrX:e,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,f){if(xv(t,c,f),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:h,dimensions:g}=t;p.transform&&(g&&(h.transform=p.transform),delete p.transform),g&&(i!==void 0||s!==void 0||h.transform)&&(h.transformOrigin=FB(g,i!==void 0?i:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&$B(p,o,a,l,!1)}const wv=t=>typeof t=="string"&&t.toLowerCase()==="svg",WB={useVisualState:n2({scrapeMotionValuesFromProps:t2,createRenderState:r2,onMount:(t,e,{renderState:n,latestValues:r})=>{He.read(()=>{try{n.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),He.render(()=>{bv(n,r,wv(e.tagName),t.transformTemplate),ZC(e,n)})}})},HB={useVisualState:n2({scrapeMotionValuesFromProps:gv,createRenderState:yv})};function s2(t,e,n){for(const r in e)!nn(e[r])&&!e2(r,n)&&(t[r]=e[r])}function qB({transformTemplate:t},e){return M.useMemo(()=>{const n=yv();return xv(n,e,t),Object.assign({},n.vars,n.style)},[e])}function KB(t,e){const n=t.style||{},r={};return s2(r,n,t),Object.assign(r,qB(t,e)),r}function GB(t,e){const n={},r=KB(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}const QB=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Bd(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||QB.has(t)}let o2=t=>!Bd(t);function XB(t){t&&(o2=e=>e.startsWith("on")?!Bd(e):t(e))}try{XB(require("@emotion/is-prop-valid").default)}catch{}function YB(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(o2(i)||n===!0&&Bd(i)||!e&&!Bd(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function JB(t,e,n,r){const i=M.useMemo(()=>{const s=r2();return bv(s,e,wv(r),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};s2(s,t.style,t),i.style={...s,...i.style}}return i}function ZB(t=!1){return(n,r,i,{latestValues:s},o)=>{const l=(mv(n)?JB:GB)(r,s,o,n),c=YB(r,typeof n=="string",t),u=n!==M.Fragment?{...c,...l,ref:i}:{},{children:f}=r,p=M.useMemo(()=>nn(f)?f.get():f,[f]);return M.createElement(n,{...u,children:p})}}function eF(t,e){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...mv(r)?WB:HB,preloadedFeatures:t,useRender:ZB(i),createVisualElement:e,Component:r};return AB(o)}}const Hm={current:null},a2={current:!1};function tF(){if(a2.current=!0,!!pv)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Hm.current=t.matches;t.addListener(e),e()}else Hm.current=!1}function nF(t,e,n){for(const r in e){const i=e[r],s=n[r];if(nn(i))t.addValue(r,i);else if(nn(s))t.addValue(r,Wl(i,{owner:t}));else if(s!==i)if(t.hasValue(r)){const o=t.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(r);t.addValue(r,Wl(o!==void 0?o:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const lw=new WeakMap,rF=[...Zk,Jt,qi],iF=t=>rF.find(Jk(t)),cw=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class sF{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=X0,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=Tr.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,He.render(this.render,!1,!0))};const{latestValues:l,renderState:c}=o;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Oh(n),this.isVariantNode=XC(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const h=f[p];l[p]!==void 0&&nn(h)&&h.set(l[p],!1)}}mount(e){this.current=e,lw.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),a2.current||tF(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Hm.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){lw.delete(this.current),this.projection&&this.projection.unmount(),Wi(this.notifyUpdate),Wi(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=zs.has(e),i=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&He.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Xo){const n=Xo[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):pt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<cw.length;r++){const i=cw[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=e[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=nF(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=Wl(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){var r;let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(Gk(i)||Kk(i))?i=parseFloat(i):!iF(i)&&qi.test(n)&&(i=aC(e,n)),this.setBaseTarget(e,nn(i)?i.get():i)),nn(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=$0(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[e])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!nn(s)?s:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new cv),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class l2 extends sF{constructor(){super(...arguments),this.KeyframeResolver=lC}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}}function oF(t){return window.getComputedStyle(t)}class aF extends l2{constructor(){super(...arguments),this.type="html",this.renderInstance=YC}readValueFromInstance(e,n){if(zs.has(n)){const r=ev(n);return r&&r.default||0}else{const r=oF(e),i=(Xk(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return MC(e,n)}build(e,n,r){xv(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return gv(e,n,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;nn(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class lF extends l2{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=pt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(zs.has(n)){const r=ev(n);return r&&r.default||0}return n=JC.has(n)?n:uv(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return t2(e,n,r)}build(e,n,r){bv(e,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,r,i){ZC(e,n,r,i)}mount(e){this.isSVGTag=wv(e.tagName),super.mount(e)}}const cF=(t,e)=>mv(t)?new lF(e):new aF(e,{allowProjection:t!==M.Fragment}),uF=eF({...Zj,...wB,...uB,..._B},cF),Ou=W4(uF);class dF extends M.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function hF({children:t,isPresent:e}){const n=M.useId(),r=M.useRef(null),i=M.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=M.useContext(fv);return M.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=i.current;if(e||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),C.jsx(dF,{isPresent:e,childRef:r,sizeRef:i,children:M.cloneElement(t,{ref:r})})}const fF=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=vv(pF),l=M.useId(),c=M.useCallback(f=>{a.set(f,!0);for(const p of a.values())if(!p)return;r&&r()},[a,r]),u=M.useMemo(()=>({id:l,initial:e,isPresent:n,custom:i,onExitComplete:c,register:f=>(a.set(f,!1),()=>a.delete(f))}),s?[Math.random(),c]:[n,c]);return M.useMemo(()=>{a.forEach((f,p)=>a.set(p,!1))},[n]),M.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(t=C.jsx(hF,{isPresent:n,children:t})),C.jsx(Nh.Provider,{value:u,children:t})};function pF(){return new Map}const su=t=>t.key||"";function uw(t){const e=[];return M.Children.forEach(t,n=>{M.isValidElement(n)&&e.push(n)}),e}const c2=({children:t,exitBeforeEnter:e,custom:n,initial:r=!0,onExitComplete:i,presenceAffectsLayout:s=!0,mode:o="sync"})=>{const a=M.useMemo(()=>uw(t),[t]),l=a.map(su),c=M.useRef(!0),u=M.useRef(a),f=vv(()=>new Map),[p,h]=M.useState(a),[g,m]=M.useState(a);KC(()=>{c.current=!1,u.current=a;for(let b=0;b<g.length;b++){const _=su(g[b]);l.includes(_)?f.delete(_):f.get(_)!==!0&&f.set(_,!1)}},[g,l.length,l.join("-")]);const v=[];if(a!==p){let b=[...a];for(let _=0;_<g.length;_++){const R=g[_],E=su(R);l.includes(E)||(b.splice(_,0,R),v.push(R))}o==="wait"&&v.length&&(b=v),m(uw(b)),h(a);return}const{forceRender:x}=M.useContext(dv);return C.jsx(C.Fragment,{children:g.map(b=>{const _=su(b),R=a===g||l.includes(_),E=()=>{if(f.has(_))f.set(_,!0);else return;let A=!0;f.forEach(T=>{T||(A=!1)}),A&&(x==null||x(),m(u.current),i&&i())};return C.jsx(fF,{isPresent:R,initial:!c.current||r?void 0:!1,custom:R?void 0:n,presenceAffectsLayout:s,mode:o,onExitComplete:R?void 0:E,children:b},_)})})};function kt(t,e){e===void 0&&(e={});var n=e.insertAt;if(t&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}kt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ze=function(){return ze=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},ze.apply(this,arguments)};function Fd(t){return Fd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fd(t)}var mF=/^\s+/,gF=/\s+$/;function ce(t,e){if(e=e||{},(t=t||"")instanceof ce)return t;if(!(this instanceof ce))return new ce(t,e);var n=function(r){var i={r:0,g:0,b:0},s=1,o=null,a=null,l=null,c=!1,u=!1;typeof r=="string"&&(r=function(g){g=g.replace(mF,"").replace(gF,"").toLowerCase();var m,v=!1;if(qm[g])g=qm[g],v=!0;else if(g=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(m=Qn.rgb.exec(g))?{r:m[1],g:m[2],b:m[3]}:(m=Qn.rgba.exec(g))?{r:m[1],g:m[2],b:m[3],a:m[4]}:(m=Qn.hsl.exec(g))?{h:m[1],s:m[2],l:m[3]}:(m=Qn.hsla.exec(g))?{h:m[1],s:m[2],l:m[3],a:m[4]}:(m=Qn.hsv.exec(g))?{h:m[1],s:m[2],v:m[3]}:(m=Qn.hsva.exec(g))?{h:m[1],s:m[2],v:m[3],a:m[4]}:(m=Qn.hex8.exec(g))?{r:Cn(m[1]),g:Cn(m[2]),b:Cn(m[3]),a:gw(m[4]),format:v?"name":"hex8"}:(m=Qn.hex6.exec(g))?{r:Cn(m[1]),g:Cn(m[2]),b:Cn(m[3]),format:v?"name":"hex"}:(m=Qn.hex4.exec(g))?{r:Cn(m[1]+""+m[1]),g:Cn(m[2]+""+m[2]),b:Cn(m[3]+""+m[3]),a:gw(m[4]+""+m[4]),format:v?"name":"hex8"}:(m=Qn.hex3.exec(g))?{r:Cn(m[1]+""+m[1]),g:Cn(m[2]+""+m[2]),b:Cn(m[3]+""+m[3]),format:v?"name":"hex"}:!1}(r)),Fd(r)=="object"&&(Ar(r.r)&&Ar(r.g)&&Ar(r.b)?(f=r.r,p=r.g,h=r.b,i={r:255*et(f,255),g:255*et(p,255),b:255*et(h,255)},c=!0,u=String(r.r).substr(-1)==="%"?"prgb":"rgb"):Ar(r.h)&&Ar(r.s)&&Ar(r.v)?(o=$a(r.s),a=$a(r.v),i=function(g,m,v){g=6*et(g,360),m=et(m,100),v=et(v,100);var x=Math.floor(g),b=g-x,_=v*(1-m),R=v*(1-b*m),E=v*(1-(1-b)*m),A=x%6,T=[v,R,_,_,E,v][A],y=[E,v,v,R,_,_][A],S=[_,_,E,v,v,R][A];return{r:255*T,g:255*y,b:255*S}}(r.h,o,a),c=!0,u="hsv"):Ar(r.h)&&Ar(r.s)&&Ar(r.l)&&(o=$a(r.s),l=$a(r.l),i=function(g,m,v){var x,b,_;function R(T,y,S){return S<0&&(S+=1),S>1&&(S-=1),S<1/6?T+6*(y-T)*S:S<.5?y:S<2/3?T+(y-T)*(2/3-S)*6:T}if(g=et(g,360),m=et(m,100),v=et(v,100),m===0)x=b=_=v;else{var E=v<.5?v*(1+m):v+m-v*m,A=2*v-E;x=R(A,E,g+1/3),b=R(A,E,g),_=R(A,E,g-1/3)}return{r:255*x,g:255*b,b:255*_}}(r.h,o,l),c=!0,u="hsl"),r.hasOwnProperty("a")&&(s=r.a));var f,p,h;return s=u2(s),{ok:c,format:r.format||u,r:Math.min(255,Math.max(i.r,0)),g:Math.min(255,Math.max(i.g,0)),b:Math.min(255,Math.max(i.b,0)),a:s}}(t);this._originalInput=t,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||n.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function dw(t,e,n){t=et(t,255),e=et(e,255),n=et(n,255);var r,i,s=Math.max(t,e,n),o=Math.min(t,e,n),a=(s+o)/2;if(s==o)r=i=0;else{var l=s-o;switch(i=a>.5?l/(2-s-o):l/(s+o),s){case t:r=(e-n)/l+(e<n?6:0);break;case e:r=(n-t)/l+2;break;case n:r=(t-e)/l+4}r/=6}return{h:r,s:i,l:a}}function hw(t,e,n){t=et(t,255),e=et(e,255),n=et(n,255);var r,i,s=Math.max(t,e,n),o=Math.min(t,e,n),a=s,l=s-o;if(i=s===0?0:l/s,s==o)r=0;else{switch(s){case t:r=(e-n)/l+(e<n?6:0);break;case e:r=(n-t)/l+2;break;case n:r=(t-e)/l+4}r/=6}return{h:r,s:i,v:a}}function fw(t,e,n,r){var i=[tr(Math.round(t).toString(16)),tr(Math.round(e).toString(16)),tr(Math.round(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function pw(t,e,n,r){return[tr(d2(r)),tr(Math.round(t).toString(16)),tr(Math.round(e).toString(16)),tr(Math.round(n).toString(16))].join("")}function vF(t,e){e=e===0?0:e||10;var n=ce(t).toHsl();return n.s-=e/100,n.s=Lh(n.s),ce(n)}function yF(t,e){e=e===0?0:e||10;var n=ce(t).toHsl();return n.s+=e/100,n.s=Lh(n.s),ce(n)}function xF(t){return ce(t).desaturate(100)}function bF(t,e){e=e===0?0:e||10;var n=ce(t).toHsl();return n.l+=e/100,n.l=Lh(n.l),ce(n)}function wF(t,e){e=e===0?0:e||10;var n=ce(t).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-e/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-e/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-e/100*255))),ce(n)}function _F(t,e){e=e===0?0:e||10;var n=ce(t).toHsl();return n.l-=e/100,n.l=Lh(n.l),ce(n)}function EF(t,e){var n=ce(t).toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,ce(n)}function TF(t){var e=ce(t).toHsl();return e.h=(e.h+180)%360,ce(e)}function mw(t,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var n=ce(t).toHsl(),r=[ce(t)],i=360/e,s=1;s<e;s++)r.push(ce({h:(n.h+s*i)%360,s:n.s,l:n.l}));return r}function SF(t){var e=ce(t).toHsl(),n=e.h;return[ce(t),ce({h:(n+72)%360,s:e.s,l:e.l}),ce({h:(n+216)%360,s:e.s,l:e.l})]}function kF(t,e,n){e=e||6,n=n||30;var r=ce(t).toHsl(),i=360/n,s=[ce(t)];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,s.push(ce(r));return s}function CF(t,e){e=e||6;for(var n=ce(t).toHsv(),r=n.h,i=n.s,s=n.v,o=[],a=1/e;e--;)o.push(ce({h:r,s:i,v:s})),s=(s+a)%1;return o}ce.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,n,r=this.toRgb();return t=r.r/255,e=r.g/255,n=r.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(t){return this._a=u2(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=hw(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=hw(this._r,this._g,this._b),e=Math.round(360*t.h),n=Math.round(100*t.s),r=Math.round(100*t.v);return this._a==1?"hsv("+e+", "+n+"%, "+r+"%)":"hsva("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var t=dw(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=dw(this._r,this._g,this._b),e=Math.round(360*t.h),n=Math.round(100*t.s),r=Math.round(100*t.l);return this._a==1?"hsl("+e+", "+n+"%, "+r+"%)":"hsla("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(t){return fw(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(e,n,r,i,s){var o=[tr(Math.round(e).toString(16)),tr(Math.round(n).toString(16)),tr(Math.round(r).toString(16)),tr(d2(i))];return s&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*et(this._r,255))+"%",g:Math.round(100*et(this._g,255))+"%",b:Math.round(100*et(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*et(this._r,255))+"%, "+Math.round(100*et(this._g,255))+"%, "+Math.round(100*et(this._b,255))+"%)":"rgba("+Math.round(100*et(this._r,255))+"%, "+Math.round(100*et(this._g,255))+"%, "+Math.round(100*et(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(PF[fw(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+pw(this._r,this._g,this._b,this._a),n=e,r=this._gradientType?"GradientType = 1, ":"";if(t){var i=ce(t);n="#"+pw(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+e+",endColorstr="+n+")"},toString:function(t){var e=!!t;t=t||this._format;var n=!1,r=this._a<1&&this._a>=0;return e||!r||t!=="hex"&&t!=="hex6"&&t!=="hex3"&&t!=="hex4"&&t!=="hex8"&&t!=="name"?(t==="rgb"&&(n=this.toRgbString()),t==="prgb"&&(n=this.toPercentageRgbString()),t!=="hex"&&t!=="hex6"||(n=this.toHexString()),t==="hex3"&&(n=this.toHexString(!0)),t==="hex4"&&(n=this.toHex8String(!0)),t==="hex8"&&(n=this.toHex8String()),t==="name"&&(n=this.toName()),t==="hsl"&&(n=this.toHslString()),t==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):t==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ce(this.toString())},_applyModification:function(t,e){var n=t.apply(null,[this].concat([].slice.call(e)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(bF,arguments)},brighten:function(){return this._applyModification(wF,arguments)},darken:function(){return this._applyModification(_F,arguments)},desaturate:function(){return this._applyModification(vF,arguments)},saturate:function(){return this._applyModification(yF,arguments)},greyscale:function(){return this._applyModification(xF,arguments)},spin:function(){return this._applyModification(EF,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(kF,arguments)},complement:function(){return this._applyCombination(TF,arguments)},monochromatic:function(){return this._applyCombination(CF,arguments)},splitcomplement:function(){return this._applyCombination(SF,arguments)},triad:function(){return this._applyCombination(mw,[3])},tetrad:function(){return this._applyCombination(mw,[4])}},ce.fromRatio=function(t,e){if(Fd(t)=="object"){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]=r==="a"?t[r]:$a(t[r]));t=n}return ce(t,e)},ce.equals=function(t,e){return!(!t||!e)&&ce(t).toRgbString()==ce(e).toRgbString()},ce.random=function(){return ce.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ce.mix=function(t,e,n){n=n===0?0:n||50;var r=ce(t).toRgb(),i=ce(e).toRgb(),s=n/100;return ce({r:(i.r-r.r)*s+r.r,g:(i.g-r.g)*s+r.g,b:(i.b-r.b)*s+r.b,a:(i.a-r.a)*s+r.a})},ce.readability=function(t,e){var n=ce(t),r=ce(e);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},ce.isReadable=function(t,e,n){var r,i,s=ce.readability(t,e);switch(i=!1,(r=function(o){var a,l;return a=((o=o||{level:"AA",size:"small"}).level||"AA").toUpperCase(),l=(o.size||"small").toLowerCase(),a!=="AA"&&a!=="AAA"&&(a="AA"),l!=="small"&&l!=="large"&&(l="small"),{level:a,size:l}}(n)).level+r.size){case"AAsmall":case"AAAlarge":i=s>=4.5;break;case"AAlarge":i=s>=3;break;case"AAAsmall":i=s>=7}return i},ce.mostReadable=function(t,e,n){var r,i,s,o,a=null,l=0;i=(n=n||{}).includeFallbackColors,s=n.level,o=n.size;for(var c=0;c<e.length;c++)(r=ce.readability(t,e[c]))>l&&(l=r,a=ce(e[c]));return ce.isReadable(t,a,{level:s,size:o})||!i?a:(n.includeFallbackColors=!1,ce.mostReadable(t,["#fff","#000"],n))};var qm=ce.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},PF=ce.hexNames=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}(qm);function u2(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function et(t,e){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(t)&&(t="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(t);return t=Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function Lh(t){return Math.min(1,Math.max(0,t))}function Cn(t){return parseInt(t,16)}function tr(t){return t.length==1?"0"+t:""+t}function $a(t){return t<=1&&(t=100*t+"%"),t}function d2(t){return Math.round(255*parseFloat(t)).toString(16)}function gw(t){return Cn(t)/255}var li,ou,au,Qn=(ou="[\\s|\\(]+("+(li="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+li+")[,|\\s]+("+li+")\\s*\\)?",au="[\\s|\\(]+("+li+")[,|\\s]+("+li+")[,|\\s]+("+li+")[,|\\s]+("+li+")\\s*\\)?",{CSS_UNIT:new RegExp(li),rgb:new RegExp("rgb"+ou),rgba:new RegExp("rgba"+au),hsl:new RegExp("hsl"+ou),hsla:new RegExp("hsla"+au),hsv:new RegExp("hsv"+ou),hsva:new RegExp("hsva"+au),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function Ar(t){return!!Qn.CSS_UNIT.exec(t)}var Vh=function(t,e){var n=(typeof t=="string"?parseInt(t):t)||0;if(n>=-5&&n<=5){var r=n,i=parseFloat(e),s=i+r*(i/5)*-1;return(s==0||s<=Number.EPSILON)&&(s=.1),{animationPeriod:s+"s"}}return{animationPeriod:e}},jh=function(t,e){var n=t||{},r="";switch(e){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var i={};if(n.fontSize){var s=n.fontSize;i=function(o,a){var l={};for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&a.indexOf(c)<0&&(l[c]=o[c]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function"){var u=0;for(c=Object.getOwnPropertySymbols(o);u<c.length;u++)a.indexOf(c[u])<0&&Object.prototype.propertyIsEnumerable.call(o,c[u])&&(l[c[u]]=o[c[u]])}return l}(n,["fontSize"]),r=s}return{fontSize:r,styles:i}},IF={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Bh=function(t){var e=t.className,n=t.text,r=t.textColor,i=t.staticText,s=t.style;return n?be.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(e||"").trim(),style:ze(ze(ze({},i&&IF),r&&{color:r,mixBlendMode:"unset"}),s&&s)},typeof n=="string"&&n.length?n:"loading"):null},pc="rgb(50, 205, 50)";function Fh(t,e){e===void 0&&(e=0);var n=[];return function r(i,s){return s===void 0&&(s=0),n.push.apply(n,i),n.length<s&&r(n,s),n.slice(0,s)}(t,e)}kt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);ce(pc).toRgb();Array.from({length:4},function(t,e){return"--atom-phase".concat(e+1,"-rgb")});kt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--commet-phase".concat(e+1,"-color")});kt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--OP-annulus-phase".concat(e+1,"-color")});function rp(t){return t&&t.Math===Math&&t}kt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);rp(typeof window=="object"&&window)||rp(typeof self=="object"&&self)||rp(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(t,e){return"--OP-dotted-phase".concat(e+1,"-color")});kt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--OP-spokes-phase".concat(e+1,"-color")});kt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(t,e){return"--OP-annulus-dual-sectors-phase".concat(e+1,"-color")});kt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return["--OP-annulus-track-phase".concat(e+1,"-color"),"--OP-annulus-sector-phase".concat(e+1,"-color")]});kt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--four-square-phase".concat(e+1,"-color")});kt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--mosaic-phase".concat(e+1,"-color")});kt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--riple-phase".concat(e+1,"-color")});kt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);var Gs=Array.from({length:4},function(t,e){return"--TD-pulsate-phase".concat(e+1,"-color")}),AF=function(t){var e,n=jh(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,s=t==null?void 0:t.easing,o=Vh(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,a=function(l){var c={};if(l instanceof Array){for(var u=Fh(l,Gs.length),f=0;f<u.length&&!(f>=4);f++)c[Gs[f]]=u[f];return c}try{if(typeof l!="string")throw new Error("Color String expected");for(var p=0;p<Gs.length;p++)c[Gs[p]]=l}catch(h){for(h instanceof Error?console.warn("[".concat(h.message,']: Received "').concat(typeof l,'" instead with value, ').concat(JSON.stringify(l))):console.warn("".concat(JSON.stringify(l),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),p=0;p<Gs.length;p++)c[Gs[p]]=pc}return c}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:"");return be.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:ze(ze(ze(ze(ze({},i&&{fontSize:i}),o&&{"--rli-animation-duration":o}),s&&{"--rli-animation-function":s}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},be.createElement("span",{className:"rli-d-i-b pulsate-indicator"},be.createElement("span",{className:"rli-d-i-b pulsate-dot"}),be.createElement("span",{className:"rli-d-i-b pulsate-dot"}),be.createElement("span",{className:"rli-d-i-b pulsate-dot"})),be.createElement(Bh,{staticText:!0,text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor}))};kt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);var Qs=Array.from({length:4},function(t,e){return"--TD-brick-stack-phase".concat(e+1,"-color")}),RF=function(t){var e,n=jh(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,s=t==null?void 0:t.easing,o=Vh(t==null?void 0:t.speedPlus,"1s").animationPeriod,a=function(l){var c={};if(l instanceof Array){for(var u=Fh(l,Qs.length),f=0;f<u.length&&!(f>=4);f++)c[Qs[f]]=u[f];return c}try{if(typeof l!="string")throw new Error("Color String expected");for(var p=0;p<Qs.length;p++)c[Qs[p]]=l}catch(h){for(h instanceof Error?console.warn("[".concat(h.message,']: Received "').concat(typeof l,'" instead with value, ').concat(JSON.stringify(l))):console.warn("".concat(JSON.stringify(l),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),p=0;p<Qs.length;p++)c[Qs[p]]=pc}return c}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:"");return be.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:ze(ze(ze(ze(ze({},i&&{fontSize:i}),o&&{"--rli-animation-duration":o}),s&&{"--rli-animation-function":s}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},be.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},be.createElement("span",{className:"rli-d-i-b brick-stack"})),be.createElement(Bh,{staticText:!0,text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor}))};kt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);var Xs=Array.from({length:4},function(t,e){return"--TD-bob-phase".concat(e+1,"-color")}),DF=function(t){var e,n=jh(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,s=t==null?void 0:t.easing,o=Vh(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,a=function(l){var c={};if(l instanceof Array){for(var u=Fh(l,Xs.length),f=0;f<u.length&&!(f>=4);f++)c[Xs[f]]=u[f];return c}try{if(typeof l!="string")throw new Error("Color String expected");for(var p=0;p<Xs.length;p++)c[Xs[p]]=l}catch(h){for(h instanceof Error?console.warn("[".concat(h.message,']: Received "').concat(typeof l,'" instead with value, ').concat(JSON.stringify(l))):console.warn("".concat(JSON.stringify(l),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),p=0;p<Xs.length;p++)c[Xs[p]]=pc}return c}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:"");return be.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:ze(ze(ze(ze(ze({},i&&{fontSize:i}),o&&{"--rli-animation-duration":o}),s&&{"--rli-animation-function":s}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},be.createElement("span",{className:"bob-indicator"},be.createElement("span",{className:"bobbing"})),be.createElement(Bh,{staticText:!0,text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor}))};kt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);var Ys=Array.from({length:4},function(t,e){return"--TD-bounce-phase".concat(e+1,"-color")}),NF=function(t){var e,n=jh(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,s=t==null?void 0:t.easing,o=Vh(t==null?void 0:t.speedPlus,"0.5s").animationPeriod,a=function(l){var c={};if(l instanceof Array){for(var u=Fh(l,Ys.length),f=0;f<u.length&&!(f>=4);f++)c[Ys[f]]=u[f];return c}try{if(typeof l!="string")throw new Error("Color String expected");for(var p=0;p<Ys.length;p++)c[Ys[p]]=l}catch{for(p=0;p<Ys.length;p++)c[Ys[p]]=pc}return c}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:"");return be.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:ze(ze(ze(ze(ze({},i&&{fontSize:i}),o&&{"--rli-animation-duration":o}),s&&{"--rli-animation-function":s}),a),r)},be.createElement("span",{className:"wrapper"},be.createElement("span",{className:"group"},be.createElement("span",{className:"rli-d-i-b dot"}),be.createElement("span",{className:"rli-d-i-b dot"}),be.createElement("span",{className:"rli-d-i-b dot"})),be.createElement("span",{className:"group"},be.createElement("span",{className:"rli-d-i-b shadow"}),be.createElement("span",{className:"rli-d-i-b shadow"}),be.createElement("span",{className:"rli-d-i-b shadow"}))),be.createElement(Bh,{staticText:!0,text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor,style:{marginTop:"2px"}}))},h2=function(t){var e=Object(t).variant,n=e===void 0?"pulsate":e;return n==="pulsate"?be.createElement(AF,ze({},t)):n==="brick-stack"?be.createElement(RF,ze({},t)):n==="bob"?be.createElement(DF,ze({},t)):n==="bounce"?be.createElement(NF,ze({},t)):null};kt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--shape-phase".concat(e+1,"-color")});kt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--trophySpin-phase".concat(e+1,"-color")});kt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--slab-phase".concat(e+1,"-color")});kt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(t,e){return"--life-line-phase".concat(e+1,"-color")});var Km=new Map,lu=new WeakMap,vw=0,MF=void 0;function OF(t){return t?(lu.has(t)||(vw+=1,lu.set(t,vw.toString())),lu.get(t)):"0"}function LF(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?OF(t.root):t[e]}`).toString()}function VF(t){const e=LF(t);let n=Km.get(e);if(!n){const r=new Map;let i;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const c=a.isIntersecting&&i.some(u=>a.intersectionRatio>=u);t.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=r.get(a.target))==null||l.forEach(u=>{u(c,a)})})},t);i=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:s,elements:r},Km.set(e,n)}return n}function jF(t,e,n={},r=MF){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:i,observer:s,elements:o}=VF(n),a=o.get(t)||[];return o.has(t)||o.set(t,a),a.push(e),s.observe(t),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(t),s.unobserve(t)),o.size===0&&(s.disconnect(),Km.delete(i))}}function BF({threshold:t,delay:e,trackVisibility:n,rootMargin:r,root:i,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:c}={}){var u;const[f,p]=M.useState(null),h=M.useRef(),[g,m]=M.useState({inView:!!a,entry:void 0});h.current=c,M.useEffect(()=>{if(o||!f)return;let _;return _=jF(f,(R,E)=>{m({inView:R,entry:E}),h.current&&h.current(R,E),E.isIntersecting&&s&&_&&(_(),_=void 0)},{root:i,rootMargin:r,threshold:t,trackVisibility:n,delay:e},l),()=>{_&&_()}},[Array.isArray(t)?t.toString():t,f,i,r,s,o,n,l,e]);const v=(u=g.entry)==null?void 0:u.target,x=M.useRef();!f&&v&&!s&&!o&&x.current!==v&&(x.current=v,m({inView:!!a,entry:void 0}));const b=[p,g.inView,g.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}function FF(){const[t,e]=M.useState(!1),n=M.useRef(null),r=M.useRef(null),[i,s]=M.useState(!1),o=M.useRef(null),[a,l]=M.useState(!1),c=M.useRef([]),[u,f]=M.useState(!1),[p,h]=M.useState(""),[g,m]=M.useState([]),x=ea().state,b=Ls(),[_,R]=M.useState(""),[E,A]=M.useState(!0),[T,y]=M.useState(x),[S,k]=M.useState(x.boardVisibility),[I,D]=M.useState(x.sharedWith),[N,B]=M.useState(""),[z,J]=M.useState(""),[F,V]=M.useState(!1),W=M.useRef(null),K=Q=>{W.current&&!W.current.contains(Q.target)&&V(!1)};M.useEffect(()=>(document.addEventListener("mousedown",K),()=>{document.removeEventListener("mousedown",K)}),[]);const oe={hidden:{opacity:0,x:"100%"},visible:{opacity:1,x:"0%"},exit:{opacity:0,x:"100%"}},re=["./BoardBackground/1.jpg","./BoardBackground/2.jpg","./BoardBackground/3.jpg","./BoardBackground/4.jpg","./BoardBackground/5.jpg","./BoardBackground/6.jpg","./BoardBackground/7.jpg","./BoardBackground/8.jpg","./BoardBackground/9.jpg","./BoardBackground/10.jpg","./BoardBackground/11.jpg","./BoardBackground/12.jpg","./BoardBackground/13.jpg","./BoardBackground/14.jpg","./BoardBackground/15.jpg","./BoardBackground/16.jpg","./BoardBackground/17.jpg","./BoardBackground/18.png","./BoardBackground/19.jpg"],le=[{className:"bg-gradient-to-r from-teal-400 to-blue-500"},{className:"bg-gradient-to-r from-blue-800 to-blue-400"},{className:"bg-gradient-to-r from-purple-500 to-pink-500"},{className:"bg-gradient-to-r from-purple-400 to-blue-300"},{className:"bg-gradient-to-r from-orange-400 to-yellow-300"},{className:"bg-gradient-to-r from-pink-400 to-pink-200"},{className:"bg-gradient-to-r from-teal-400 to-green-500"},{className:"bg-gradient-to-r from-blue-800 to-blue-400"},{className:"bg-gradient-to-r from-red-800 to-brown-500"},{className:"bg-blue-500"},{className:"bg-orange-500"},{className:"bg-green-500"},{className:"bg-red-500"},{className:"bg-purple-500"},{className:"bg-pink-500"},{className:"bg-green-300"},{className:"bg-cyan-500"},{className:"bg-gray-500"}],Le=Q=>{r.current&&!r.current.contains(Q.target)&&e(!1)};M.useEffect(()=>(document.addEventListener("mousedown",Le),()=>{document.removeEventListener("mousedown",Le)}),[]);const Re=async Q=>{B(Q);const G=Ve.currentUser;if(G)try{await Ge(fe(ae,`users/${G.uid}/Boards/${x.id}`),{background:Q,backgroundImage:""});const ee=I.map(de=>Ge(fe(ae,`users/${de.id}/Boards/${x.id}`),{background:Q,backgroundImage:""}));await Promise.all(ee)}catch(ee){console.error("Error updating list title: ",ee)}else console.error("User is not authenticated.")},se=async Q=>{B(""),J(Q);const G=Ve.currentUser;if(G)try{await Ge(fe(ae,`users/${G.uid}/Boards/${x.id}`),{backgroundImage:Q,background:""});const ee=I.map(de=>Ge(fe(ae,`users/${de.id}/Boards/${x.id}`),{backgroundImage:Q,background:""}));await Promise.all(ee)}catch(ee){console.error("Error updating list title: ",ee)}else console.error("User is not authenticated.")};M.useEffect(()=>{const Q=setTimeout(()=>{A(!1)},1240);return()=>{clearTimeout(Q)}});const[De,Ee]=M.useState(!1),Xe=M.useRef(null),he=Q=>{Xe.current&&!Xe.current.contains(Q.target)&&Ee(!1)};M.useEffect(()=>(document.addEventListener("mousedown",he),()=>{document.removeEventListener("mousedown",he)}),[]),M.useEffect(()=>(document.addEventListener("mousedown",Ae),()=>{document.removeEventListener("mousedown",Ae)}),[]);const qe=async Q=>{const G=Ve.currentUser;if(m(ee=>ee.filter(de=>de.id!==Q).map((de,U)=>({...de,order:U}))),G)try{const ee=g.filter(X=>X.id!==Q);await gr(fe(ae,`users/${G.uid}/Boards/${x.id}/Lists`,Q));const de=ee.map((X,ge)=>Ge(fe(ae,`users/${G.uid}/Boards/${x.id}/Lists/`,X.id),{order:ge,title:X.title})),U=I.flatMap(X=>{const ge=gr(fe(ae,`users/${X.id}/Boards/${x.id}/Lists/`,Q)),We=ee.map((vt,ln)=>Ge(fe(ae,`users/${X.id}/Boards/${x.id}/Lists`,vt.id),{order:ln,title:vt.title}));return[ge,...We]});await Promise.all([...de,...U])}catch(ee){console.error("Error deleting list : ",ee)}else console.error("User is not authenticated")};M.useEffect(()=>{const Q=$i(Ve,G=>{G?(async()=>{try{const de=fe(ae,`users/${G.uid}/Boards/${x.id}`),U=await rc(de);if(U.exists()){const X={id:U.id,data:U.data()};y(X),k(X.data.boardVisibility),D(X.data.sharedWith),R(X.data.title),B(X.data.background),J(X.data.backgroundImage)}else console.log("No such board!"),y({})}catch(de){console.error("Error fetching board:",de)}})():y({})});return()=>Q()},[]);const Ae=Q=>{r.current&&!r.current.contains(Q.target)&&l(!1)},Ct=async()=>{if(S==="shareable"){const Q=Ve.currentUser;if(Q){if(I.length>=2){console.error("Cannot change visibility to private: the board is shared with multiple users.");return}try{k("private"),await Ge(fe(ae,`users/${Q.uid}/Boards/${x.id}`),{boardVisibility:"private"})}catch(G){console.error("Error updating document: ",G)}}else console.error("User is not authenticated.")}},rt=async()=>{if(S==="private"){k("shareable");const Q=Ve.currentUser;if(Q)try{await Ge(fe(ae,`users/${Q.uid}/Boards/${x.id}`),{boardVisibility:"shareable"})}catch(G){console.log("Error updating document: ",G)}}else console.error("User is not authenticated.")},Pt=N===""?{backgroundImage:`url('${z}')`,backgroundSize:"cover",backgroundPosition:"center",height:"auto",width:"100%",color:"rgba(255,255,255,0)"}:{},ht=Q=>{f(!1),Q.stopPropagation(),s(!0)},an=()=>{s(!1)};M.useEffect(()=>{const Q=$i(Ve,G=>{G?(async()=>{const de=Bs(ae,`users/${G.uid}/Boards/${x.id}/Lists`),X=(await Fs(de)).docs.map(ge=>({id:ge.id,title:ge.data().title,order:ge.data().order})).sort((ge,We)=>ge.order-We.order);m(X)})().catch(de=>console.error("Error fetching lists:",de)):m([])});return()=>Q()},[]),M.useEffect(()=>{if(i)return document.addEventListener("click",me),()=>{document.removeEventListener("click",me)}},[i]);const Z=async()=>{const Q=Ve.currentUser;if(Q){an();try{const G=new Date().getTime().toString(),ee={id:G,title:p};m(X=>{const ge=[...X,ee],We=fe(ae,`users/${Q.uid}/Boards/${x.id}/Lists`,G);return er(We,{title:p,id:G,order:ge.length-1}),ge}),console.log(I);const de=I.map(X=>{const ge=fe(ae,`users/${X.id}/Boards/${x.id}/Lists`,G);return er(ge,{title:p,id:G,order:g.length})});if(await Promise.all(de),window.innerWidth<=650&&c.current.length>0){const X=c.current[c.current.length-1];X&&X.scrollIntoView({behavior:"smooth",block:"start"})}}catch(G){console.error("Error adding to Firestore: ",G)}}else console.error("User is not authenticated")},te=async()=>{const Q=Ve.currentUser;if(Q)try{const G=fe(ae,`users/${Q.uid}/Boards/${x.id}`);await gr(G);const ee=I.map(de=>{const U=fe(ae,`users/${de.id}/Boards/${x.id}`);return gr(U)});await Promise.all(ee),b("/Home")}catch(G){console.error("Error deleting card: ",G)}else console.error("User is not authenticated")},me=Q=>{o.current&&!o.current.contains(Q.target)&&(console.log("Click was outside, closing input"),an())},Te=()=>{f(!0)},Ne=async Q=>{const G=Q.target.value;R(G);const ee=Ve.currentUser;if(ee)try{await Ge(fe(ae,`users/${ee.uid}/Boards/${x.id}`),{title:G});const de=I.map(U=>Ge(fe(ae,`users/${U.id}/Boards/${x.id}`),{title:G}));await Promise.all(de)}catch(de){console.error("Error updating list title: ",de)}else console.error("User is not authenticated.")},Ce=async Q=>{const{active:G,over:ee}=Q;if(f(!1),G.id&&(ee!=null&&ee.id)){const de=Ve.currentUser;if(de){const U=g.findIndex(ge=>ge.id===G.id),X=g.findIndex(ge=>ge.id===ee.id);if(U!==-1&&X!==-1){const ge=Ph(g,U,X);try{m(ge);const We=ge.map((ln,cn)=>Ge(fe(ae,`users/${de.uid}/Boards/${x.id}/Lists`,ln.id),{order:cn,title:ln.title})),vt=I.map(ln=>ge.map((cn,ts)=>Ge(fe(ae,`users/${ln.id}/Boards/${x.id}/Lists`,cn.id),{order:ts,title:cn.title}))).flat();await Promise.all([...We,...vt])}catch(We){console.error("Error updating cards:",We)}}}else console.error("User is not authenticated")}},Se=fk(Rd(U0,{activationConstraint:{delay:100,tolerance:5}}),Rd(z0,{activationConstraint:{delay:100,tolerance:5}}));return C.jsxs("div",{children:[E&&C.jsxs("div",{className:"flex h-screen w-screen overflow-hidden flex-col justify-center items-center gap-6 p-4 ",children:[C.jsx(h2,{variant:"bounce",color:"#d33dad",size:"large",text:"",textColor:"#f8f8f8"}),C.jsx("p",{className:"text-[1.3rem] font-bold text-center text-gray-900",style:{maxWidth:"350px"},children:"Hang tight! We're preparing everything for you..."})]}),!E&&C.jsxs("div",{style:Pt,className:`h-screen max-h-screen overflow-hidden flex flex-col box-border ${N} `,children:[a&&C.jsx("div",{ref:r,className:" absolute top-[5.3em] left-[2.3%]  mt-1.5 shareMenu z-[1000000] w-72 rounded-2xl  bg-zinc-800   ring-black ring-opacity-5 focus:outline-none",children:C.jsxs("div",{className:"py-1",children:[C.jsxs("button",{onClick:Ct,style:{borderColor:S==="private"?"lightblue":""},className:"block  w-full border-2 border-zinc-800 rounded-2xl text-left px-4 py-2 text-sm bg-zinc-800 text-gray-300 hover:bg-zinc-700",children:[C.jsx("span",{className:"text-[1.1rem] text-gray-200",children:"Private Board"})," - A personal board where all tasks and data are private and only visible to you."]}),C.jsxs("button",{onClick:rt,style:{borderColor:S==="shareable"?"lightblue":""},className:"block border-2 border-zinc-800 w-full text-left px-4 rounded-2xl py-2 text-sm bg-zinc-800 text-gray-300 hover:bg-zinc-700",children:[C.jsx("span",{className:"text-[1.1rem] text-gray-200",children:"Shareable Board"})," - A collaborative board that allows you to share tasks with others for group work."]})]})}),C.jsx("nav",{className:"bg-gray-400 bg-opacity-55 sm:bg-opacity-50 py-2 pl-3.5 pr-2 sm:pr-5 text-md  absolute w-screen items-center top-11",children:C.jsxs("div",{className:"flex justify-between",children:[C.jsxs("div",{className:"flex gap-5",children:[C.jsx("p",{className:"text-white font-bold text-2xl cursor-pointer",children:_}),C.jsx("div",{className:"relative inline-block text-left",ref:r,children:C.jsxs("button",{onClick:()=>l(!a),className:"sm:text-lg text-slate-100 text-md px-1.5 mt-1 sm:mt-0.5 flex gap-1  hover:text-gray-900 rounded-md hover:bg-slate-100 items-center",children:[C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"})}),C.jsxs("p",{className:"",children:[" ",window.innerWidth>650?"Workspace visible":"Visibility"]})]})})]}),C.jsxs("div",{className:"flex items-center gap-2",children:[C.jsxs("div",{onClick:()=>Ee(!De),className:"bg-slate-100 text-zinc-950 flex items-center gap-1 px-1.5 rounded-md hover:bg-slate-200 cursor-pointer",children:[C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.4",stroke:"currentColor",className:"w-5 h-5",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"})}),"Share"]}),C.jsx("button",{onClick:()=>{e(!t)},className:" text-zinc-100 flex items-center ml-2  rounded-md hover:text-zinc-300 cursor-pointer",children:C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-7",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"})})})]})]})}),F&&C.jsx("div",{className:"flex justify-center items-center w-screen h-screen fixed bg-gray-700 bg-opacity-35 z-[1000000]",children:C.jsxs("div",{ref:W,className:" relative flex flex-col z-[10000] justify-center items-center  border-t-2 border-red-600 p-2 pb-5 px-4 sm:px-5 rounded-lg bg-gray-900 w-fit max-w-[90%] h-fit",children:[C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-16 z-50 text-gray-200 bg-red-600 rounded-full p-1.5 absolute top-[-33px] ",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})}),C.jsx("h1",{className:"text-xl text-center mb-2 font-bold mt-10 text-gray-300",children:"Delete Board?"}),C.jsx("p",{"mb-5":!0,className:"text-sm text-center text-gray-300",children:"Are you sure? This action will delete the board for all shared users and cannot be undone."}),C.jsxs("div",{className:"flex justify-center mt-7 gap-10",children:[C.jsx("button",{onClick:()=>{V(!1)},className:"px-8 rounded-lg p-1.5 hover:bg-zinc-600 text-gray-100 bg-zinc-500 ",children:"Cancel"}),C.jsx("button",{onClick:te,className:"px-8 rounded-lg p-1.5 text-gray-100 bg-red-600 hover:bg-red-800",children:"Delete"})]})]})}),C.jsx(c2,{children:t&&C.jsxs(Ou.div,{ref:r,className:"h-full p-4 px-3 top-11 flex flex-col w-60 sm:w-72 fixed z-[10000] right-0 bg-gray-800",initial:"hidden",animate:"visible",exit:"hidden",variants:oe,transition:{duration:.3},children:[C.jsxs("div",{className:"w-full relative flex items-start justify-between ",children:[C.jsx("h1",{className:"text-center text-xl flex-grow text-gray-300 ",children:"Menu"}),C.jsx("button",{onClick:()=>{e(!1)},className:"absolute right-0 top-0 text-slate-300 py-1 px-1 rounded-md text-md hover:bg-gray-800",children:C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),C.jsx("hr",{className:"border-0 border-b bg-gray-300 w-full opacity-35 my-2"}),C.jsx("input",{onChange:Ne,value:_,className:"text-xl my-2 p-1.5 px-2 rounded-md text-center w-full border-solid border-slate-400 focus:border-solid focus:border-blue-500 focus:box-shadow border-2 focus:outline-none bg-gray-900 text-slate-300"}),C.jsx("h3",{className:"text-center my-3 text-lg text-gray-300 ",children:"Change Background"}),C.jsx("div",{className:"color max-h-[20vh] sm:max-h-[17vh] mb-4 rounded-md px-3 pt-1 overflow-y-auto bg-gray-900",children:C.jsx("div",{className:"grid grid-cols-2 mt-1 p-1 gap-5",children:le.map((Q,G)=>C.jsx("div",{onClick:()=>Re(Q.className),className:`py-6 sm:py-7 cursor-pointer rounded-sm ${Q.className}`},G))})}),C.jsx("div",{className:"color max-h-[20vh] mt-1 sm:max-h-[17vh] pt-1 rounded-md sm:px-3 px-2 overflow-y-scroll bg-gray-900",children:C.jsx("div",{className:"grid grid-cols-2 mt-1 p-1 gap-5",children:re.map(Q=>C.jsx("div",{onClick:()=>{se(Q)},className:"cursor-pointer",children:C.jsx("img",{src:Q,loading:"lazy",alt:"Background",style:{width:"100%",height:"100%",objectFit:"cover",display:"block",visibility:"hidden"},onLoad:G=>{const ee=G.target.src.replace("-lowres.jpg",".jpg"),de=new Image;de.src=ee,de.onload=()=>{G.target.src=ee,G.target.style.visibility="visible"}}})},Q))})}),C.jsx("div",{className:"flex mt-8 justify-center",children:C.jsxs("button",{onClick:()=>{V(!F),e(!1)},className:"text-gray-300 text-md flex gap-1 p-1.5 px-4 rounded-xl shadow-lg  bg-gray-900 border-2 border-slate-400 hover:border-red-600 hover:bg-slate-800",children:[" ",C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-0.5 text-red-600",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})}),"Delete"]})})]})}),De&&C.jsx("div",{ref:Xe,children:C.jsx($4,{visibility:S,id:x.id,Board:T,BoardMember:I})}),C.jsxs("div",{ref:n,className:`ml-6 sm:pl-6 md:ml-0 overflow-x-auto BOARDS  overflow-y-hidden   h-screen max-h-screen over px-3    sm:gap-10  flex gap-12 pt-28  ${u?" ":"BordContainer"}`,children:[C.jsx(Ik,{onDragStart:Te,sensors:Se,collisionDetection:pk,onDragEnd:Ce,children:C.jsx(Mk,{items:g,strategy:Rk,children:g.map((Q,G)=>C.jsx(z4,{BoardId:x.id,item:Q,sharedWith:I,lists:g,onDeleteList:qe,id:Q.id,Dragging:u,ref:ee=>c.current[G]=ee,title:Q.title},Q.id))})}),!i&&C.jsx("button",{onClick:ht,className:"btn p-4 text-md   py-2.5 rounded-lg bg-zinc-800 bg-opacity-50 text-left text-zinc-50 self-start mt-1",children:"+ Add another list"}),i&&C.jsx("div",{className:"bg-black mr-10  btn p-5 px-3 pt-3 rounded-xl h-fit",children:C.jsxs("div",{className:"mt-1",children:[C.jsx("input",{onChange:Q=>{h(Q.target.value)},type:"text",placeholder:"Enter List name...",className:"text:xl p-1 px-2.5 rounded-md w-full border-solid border-slate-400 focus:border-solid focus:border-blue-500 focus:box-shadow border-2  focus:outline-none bg-gray-800 text-md text-slate-300"}),C.jsxs("div",{className:"mt-3 flex justify-start gap-1.5",children:[C.jsx("button",{onClick:Z,className:"bg-blue-600 hover:bg-blue-700 mr-1.5 text-gray-950 py-1 px-2 rounded-md text-m",children:"Add List"}),C.jsx("button",{onClick:an,className:" justify-self-end  text-slate-300  py-1 px-1  rounded-md  text-md hover:bg-gray-800",children:C.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6",children:C.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]})]})})]})]})]})}var Lu={},f2,p2;Object.defineProperty(Lu,"__esModule",{value:!0});var Wa=C,hr=M,Yn=function(){return Yn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},Yn.apply(this,arguments)};function UF(t,e){var n,r;switch(e.type){case"TYPE":return Yn(Yn({},t),{speed:e.speed,text:(n=e.payload)===null||n===void 0?void 0:n.substring(0,t.text.length+1)});case"DELAY":return Yn(Yn({},t),{speed:e.payload});case"DELETE":return Yn(Yn({},t),{speed:e.speed,text:(r=e.payload)===null||r===void 0?void 0:r.substring(0,t.text.length-1)});case"COUNT":return Yn(Yn({},t),{count:t.count+1});default:return t}}var yw=function(t){var e=t.words,n=e===void 0?["Hello World!","This is","a simple Typewriter"]:e,r=t.loop,i=r===void 0?1:r,s=t.typeSpeed,o=s===void 0?80:s,a=t.deleteSpeed,l=a===void 0?50:a,c=t.delaySpeed,u=c===void 0?1500:c,f=t.onLoopDone,p=t.onType,h=t.onDelete,g=t.onDelay,m=hr.useReducer(UF,{speed:o,text:"",count:0}),v=m[0],x=v.speed,b=v.text,_=v.count,R=m[1],E=hr.useRef(0),A=hr.useRef(!1),T=hr.useRef(!1),y=hr.useRef(!1),S=hr.useRef(!1),k=hr.useCallback(function(){var I=_%n.length,D=n[I];T.current?(R({type:"DELETE",payload:D,speed:l}),b===""&&(T.current=!1,R({type:"COUNT"}))):(R({type:"TYPE",payload:D,speed:o}),y.current=!0,b===D&&(R({type:"DELAY",payload:u}),y.current=!1,S.current=!0,setTimeout(function(){S.current=!1,T.current=!0},u),i>0&&(E.current+=1,E.current/n.length===i&&(S.current=!1,A.current=!0)))),y.current&&p&&p(E.current),T.current&&h&&h(),S.current&&g&&g()},[_,u,l,i,o,n,b,p,h,g]);return hr.useEffect(function(){var I=setTimeout(k,x);return A.current&&clearTimeout(I),function(){return clearTimeout(I)}},[k,x]),hr.useEffect(function(){f&&A.current&&f()},[f]),[b,{isType:y.current,isDelay:S.current,isDelete:T.current,isDone:A.current}]},zF="styles-module_blinkingCursor__yugAC",$F="styles-module_blinking__9VXRT";(function(t,e){e===void 0&&(e={});var n=e.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var xw=hr.memo(function(t){var e=t.cursorBlinking,n=e===void 0||e,r=t.cursorStyle,i=r===void 0?"|":r,s=t.cursorColor,o=s===void 0?"inherit":s;return Wa.jsx("span",Yn({style:{color:o},className:"".concat(zF," ").concat(n?$F:"")},{children:i}))});p2=Lu.Cursor=xw,Lu.Typewriter=function(t){var e=t.words,n=e===void 0?["Hello World!","This is","a simple Typewriter"]:e,r=t.loop,i=r===void 0?1:r,s=t.typeSpeed,o=s===void 0?80:s,a=t.deleteSpeed,l=a===void 0?50:a,c=t.delaySpeed,u=c===void 0?1500:c,f=t.cursor,p=f!==void 0&&f,h=t.cursorStyle,g=h===void 0?"|":h,m=t.cursorColor,v=m===void 0?"inherit":m,x=t.cursorBlinking,b=x===void 0||x,_=t.onLoopDone,R=t.onType,E=t.onDelay,A=t.onDelete,T=yw({words:n,loop:i,typeSpeed:o,deleteSpeed:l,delaySpeed:u,onLoopDone:_,onType:R,onDelay:E,onDelete:A})[0];return Wa.jsxs(Wa.Fragment,{children:[Wa.jsx("span",{children:T}),p&&Wa.jsx(xw,{cursorStyle:g,cursorColor:v,cursorBlinking:b})]})},f2=Lu.useTypewriter=yw;function _v(){const t=["./BoardBackground/1.jpg","./BoardBackground/2.jpg","./BoardBackground/3.jpg","./BoardBackground/4.jpg","./BoardBackground/5.jpg","./BoardBackground/6.jpg","./BoardBackground/7.jpg","./BoardBackground/8.jpg","./BoardBackground/9.jpg","./BoardBackground/10.jpg","./BoardBackground/11.jpg","./BoardBackground/12.jpg","./BoardBackground/13.jpg","./BoardBackground/14.jpg","./BoardBackground/15.jpg","./BoardBackground/16.jpg","./BoardBackground/17.jpg","./BoardBackground/18.png","./BoardBackground/19.jpg"],e=Ls(),[n,r]=M.useState(!1),[i,s]=M.useState(""),[o,a]=M.useState(""),[l,c]=M.useState(""),u=M.useRef(null),[f,p]=M.useState("Board Visibility"),h=()=>{r(!n)},g=E=>{u.current&&!u.current.contains(E.target)&&r(!1)};M.useEffect(()=>(document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}),[]);const m=n?{borderColor:"lightblue"}:{},v=E=>{b==="Make sure you fill the board title"&&_(""),c(E.target.value)},x=i===""?{backgroundImage:`url('${o}')`,backgroundSize:"cover",backgroundPosition:"center",color:"rgba(255,255,255,0)"}:{},[b,_]=M.useState(""),R=async()=>{if(l==="")_("Make sure you fill the board title");else if(i===""&&o==="")_("Make sure you choose a background or images");else if(f==="Board Visibility")_("Make sure you choose a visibility option");else{const E=Ve.currentUser;if(E)try{const A=fe(ae,`users/${E.uid}`),T=await rc(A);let y="",S={};if(T.exists()){const B=T.data();y=B.name,S=B.avatar}const k=new Date().getTime().toString(),I=fe(ae,`users/${E.uid}/Boards`,k),N={id:k,title:l,background:i,backgroundImage:o,boardVisibility:f==="Shareable Board"?"shareable":"private",sharedWith:[{id:E.uid,email:E.email,name:y,avatar:S}]};await er(I,N),e(`/Board/${k}`,{state:N})}catch(A){console.log(A)}else alert("Please Sign In First")}};return C.jsxs("div",{className:"flex  items-center z-10 sm:mt-10  w-screen h-screen px-7  flex-col justify-start ",children:[C.jsx("img",{draggable:!1,style:x,src:"https://trello.com/assets/14cda5dc635d1f13bc48.svg",className:`w-[50%] p-1 px-2 max-w-[210px] mb-5 mt-[-27%]  select-none sm:mt-[-50px] ${i}`}),C.jsxs("div",{className:"flex w-[80%] max-w-[470px] justify-center gap-4 md:gap-10 items-center ",children:[C.jsxs("div",{className:"main",children:[C.jsx("input",{onChange:E=>{v(E)},required:!0,type:"text",className:"input"}),C.jsxs("label",{children:[C.jsx("span",{style:{transitionDelay:"0ms",left:"10px"},children:"B"}),C.jsx("span",{style:{transitionDelay:"75ms",left:"27px"},children:"o"}),C.jsx("span",{style:{transitionDelay:"150ms",left:"42px"},children:"a"}),C.jsx("span",{style:{transitionDelay:"225ms",left:"57px"},children:"r"}),C.jsx("span",{style:{transitionDelay:"300ms",left:"66px"},children:"d"}),C.jsx("span",{style:{transitionDelay:"375ms",left:"88px"},children:"T"}),C.jsx("span",{style:{transitionDelay:"450ms",left:"104px"},children:"i"}),C.jsx("span",{style:{transitionDelay:"525ms",left:"111px"},children:"t"}),C.jsx("span",{style:{transitionDelay:"600ms",left:"120px"},children:"l"}),C.jsx("span",{style:{transitionDelay:"675ms",left:"127px"},children:"e"}),C.jsx("p",{className:" absolute left-[18px]  top-[4px] text-2xl m-2 text-gray-300 transition duration-500 cursor-pointer pointer-events-none",children:"Board Title"})]})]}),C.jsx("div",{children:C.jsxs("div",{className:"relative inline-block text-left text-slate-300",ref:u,children:[C.jsx("button",{onClick:h,className:"button2  ${boardVisibility==='Board Visibility",style:m,children:f}),n&&C.jsx("div",{className:"origin-top-right absolute right-[-10%] sm:right-[-15%]  mt-2 z-[1000] w-72 rounded-2xl shadow-lg bg-zinc-800  ring-1 ring-black ring-opacity-5 focus:outline-none",children:C.jsxs("div",{className:"py-1",children:[C.jsxs("button",{style:{borderColor:f==="Private Board"?"lightblue":""},onClick:()=>{p("Private Board")},className:"block w-full border-2 border-zinc-800 text-left px-4 py-2 text-sm bg-zinc-800 text-gray-300 hover:bg-zinc-700",children:[C.jsx("span",{className:"text-[1.1rem] text-gray-200",children:"Private Board"})," - A personal board where all tasks and data are private and only visible to you."]}),C.jsxs("button",{style:{borderColor:f==="Shareable Board"?"lightblue":""},onClick:()=>{p("Shareable Board")},className:"block border-2 border-zinc-800 w-full text-left px-4 py-2 text-sm bg-zinc-800 text-gray-300 hover:bg-zinc-700",children:[C.jsx("span",{className:"text-[1.1rem] text-gray-200",children:"Shareable Board"})," - A collaborative board that allows you to share tasks with others for group work."]})]})})]})})]}),C.jsxs("div",{className:" self-center ",children:[C.jsx("h1",{className:"text-xl mt-4 mb-1 opacity-90 text-gray-300  text-center",children:"Background"}),C.jsx("div",{className:"color max-h-[20vh] sm:max-h-[17vh] mb-4 rounded-md px-3 overflow-y-auto  bg-neutral-800",children:C.jsxs("div",{className:"grid grid-cols-3 sm:grid-cols-2  mt-1 md:grid-cols-3 p-1  lg:grid-cols-4 gap-5",children:[C.jsx("div",{onClick:()=>{s("bg-gradient-to-r from-teal-400 to-blue-500"),b==="Make sure you choose a background and images"&&_("")},className:"cursor-pointer bg-gradient-to-r from-teal-400 to-blue-500 py-6 sm:py-7  rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-gradient-to-r from-blue-800 to-blue-400"),b==="Make sure you choose a background and images"&&_("")},className:"bg-gradient-to-r cursor-pointer from-blue-800 to-blue-400 py-6 sm:py-7rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-gradient-to-r from-purple-500 to-pink-500"),b==="Make sure you choose a background and images"&&_("")},className:"bg-gradient-to-r from-purple-500 to-pink-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-gradient-to-r from-purple-400 to-blue-300"),b==="Make sure you choose a background and images"&&_("")},className:"bg-gradient-to-r from-purple-400 to-blue-300 py-6 sm:py-7 cursor-pointer rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-gradient-to-r from-orange-400 to-yellow-300"),b==="Make sure you choose a background and images"&&_("")},className:"bg-gradient-to-r from-orange-400 to-yellow-300 py-6 sm:py-7 cursor-pointer rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-gradient-to-r from-pink-400 to-pink-200"),b==="Make sure you choose a background and images"&&_("")},className:"bg-gradient-to-r from-pink-400 to-pink-200 py-6 sm:py-7 cursor-pointer rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-gradient-to-r from-teal-400 to-green-500"),b==="Make sure you choose a background and images"&&_("")},className:"bg-gradient-to-r from-teal-400 to-green-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-gradient-to-r from-blue-800 to-blue-400"),b==="Make sure you choose a background and images"&&_("")},className:"bg-gradient-to-r from-blue-800 to-blue-400 py-6 sm:py-7 cursor-pointer rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-gradient-to-r from-red-800 to-brown-500"),b==="Make sure you choose a background and images"&&_("")},className:"bg-gradient-to-r from-red-800 to-brown-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-blue-500"),b==="Make sure you choose a background and images"&&_("")},className:"bg-blue-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-orange-500"),b==="Make sure you choose a background and images"&&_("")},className:"bg-orange-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-green-50"),b==="Make sure you choose a background and images"&&_("")},className:"bg-green-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-red-500"),b==="Make sure you choose a background and images"&&_("")},className:"bg-red-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-purple-500"),b==="Make sure you choose a background and images"&&_("")},className:"bg-purple-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-pink-500"),b==="Make sure you choose a background and images"&&_("")},className:"bg-pink-500 py-6 sm:py-7 cursor-pointer rounded-sm",children:"   "}),C.jsx("div",{onClick:()=>{s("bg-green-300"),b==="Make sure you choose a background and images"&&_("")},className:"bg-green-300 py-6 sm:py-7 cursor-pointer rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-cyan-500"),b==="Make sure you choose a background and images"&&_("")},className:"bg-cyan-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),C.jsx("div",{onClick:()=>{s("bg-gray-500"),b==="Make sure you choose a background and images"&&_("")},className:"bg-gray-500 py-6 sm:py-7 cursor-pointer rounded-sm"})]})}),C.jsx("div",{className:"color max-h-[20vh]  sm:max-h-[17vh]  rounded-md sm:px-3 px-2 overflow-y-scroll  bg-neutral-800",children:C.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-2  mt-1 md:grid-cols-3 p-1  lg:grid-cols-4 gap-5",children:t.map(E=>{const{ref:A,inView:T}=BF({threshold:.1});return C.jsx("div",{ref:A,style:{backgroundImage:T?`url('${E}')`:"none",backgroundSize:"cover",backgroundPosition:"center",color:"rgba(255,255,255,0)"},onClick:()=>{s(""),a(E),b==="Make sure you choose a background and images"&&_("")},className:"border-gray-100 cursor-pointer text-opacity-0 bg-black p-4 py-3 sm:py-4 px-5 sm:px-6 select-none rounded-sm",children:"Board"},E)})})}),C.jsx("div",{className:"flex items-center   justify-center",children:C.jsx("button",{onClick:R,type:"submit",className:"bg-blue-600 hover:bg-blue-500 text-gray-100  mb-1 py-1.5 px-20 mt-[6%] sm:mt-8 rounded-lg  text-md",children:"Create"})}),C.jsx("div",{className:"text-red-600 text-sm text-center",children:b})]})]})}function m2(t){const e=Ls(),[n,r]=M.useState(!1),i=M.useRef();M.useEffect(()=>{const a=new IntersectionObserver(([l])=>{l.isIntersecting&&(r(!0),a.disconnect())},{threshold:.1});return i.current&&a.observe(i.current),()=>{i.current&&a.unobserve(i.current)}},[i]);const s=n&&t.backgroundImage?{backgroundImage:`url('${t.backgroundImage}')`,backgroundSize:"cover",backgroundPosition:"center",color:"rgba(255,255,255,0)"}:{},o=()=>{e(`/Board/${t.id}`,{state:t})};return C.jsx("div",{ref:i,style:s,onClick:o,className:`p-5 h-[70px]  w-[130px] hover:opacity-85 cursor-pointer rounded-sm ${t.background}`,children:C.jsx("h2",{className:"text-zinc-300 font-bold text-lg truncate  whitespace-nowrap overflow-hidden",children:t.title})})}function WF(){const[t,e]=M.useState([]);M.useEffect(()=>{const i=$i(Ve,s=>{s?(async()=>{const a=Bs(ae,`users/${s.uid}/Boards`),c=(await Fs(a)).docs.map(u=>({id:u.id,data:u.data()})).filter(u=>u.data.boardVisibility==="private");e(c)})().catch(a=>console.error("Error fetching lists:",a)):e([])});return()=>i()},[]);const[n,r]=M.useState(!1);return C.jsxs("div",{children:[n&&C.jsx("button",{onClick:()=>{r(!1)},className:"  absolute  text-slate-300  py-1 px-2 left-[90%] sm:left-[70%] sm:top-[-5%] top-[-10%] rounded-xl    text-2xl hover:bg-zinc-900",children:"✕"}),!n&&C.jsxs("div",{children:[C.jsx("h1",{className:"text-gray-300 mt-2 mb-2  p-1 rounded-md text-xl flex justify-center items-center gap-4",children:"Your Boards"}),C.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-2 px-0 sm:px-7  md:grid-cols-3 mt-7 mx-4 lg:grid-cols-4 gap-6 overflow-y-auto max-h-[65vh] shadow-sm",children:[t.map(i=>C.jsx(m2,{id:i.id,title:i.data.title,background:i.data.background,backgroundImage:i.data.backgroundImage,boardVisibility:i.data.boardVisibility},i.id)),C.jsx("div",{onClick:()=>{r(!0)},className:" h-[70px] flex justify-center items-center w-[130px] bg-neutral-700 opacity-90 cursor-pointer hover:opacity-70 border-gray-200 p-5  rounded-sm",children:C.jsx("h2",{className:"text-zinc-300  text-center text-sm ",children:"Create new board"})})]})]}),n&&C.jsx(_v,{})]})}function HF(){const[t,e]=M.useState(!1),[n,r]=M.useState([]);M.useEffect(()=>{const o=$i(Ve,a=>{a?(async()=>{e(!0);const c=Bs(ae,`users/${a.uid}/Boards`),f=(await Fs(c)).docs.map(p=>({id:p.id,data:p.data()})).filter(p=>p.data.boardVisibility==="shareable");r(f)})().catch(c=>console.error("Error fetching lists:",c)):r([])});return()=>o()},[]);const[i,s]=M.useState(!1);return C.jsxs("div",{children:[i&&C.jsx("button",{onClick:()=>{s(!1)},className:"  absolute  text-slate-300  py-1 px-2 left-[90%] sm:left-[70%] sm:top-[-5%] top-[-10%] rounded-xl    text-2xl hover:bg-zinc-900",children:"✕"}),!i&&C.jsxs("div",{children:[C.jsx("h1",{className:"text-gray-300 mt-2 mb-2  p-1 rounded-md text-xl flex justify-center items-center gap-4",children:"Shared Boards"}),C.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-2 px-0 sm:px-7  md:grid-cols-3 mt-7 mx-4 lg:grid-cols-4 gap-6 max-h-[62vh] shadow-sm",children:[n.map(o=>C.jsx(m2,{id:o.id,title:o.data.title,background:o.data.background,backgroundImage:o.data.backgroundImage,boardVisibility:o.data.boardVisibility},o.id)),C.jsx("div",{onClick:()=>{s(!0)},className:" h-[70px] flex justify-center items-center w-[130px] bg-neutral-700 opacity-90 cursor-pointer hover:opacity-70 border-gray-200 p-5  rounded-sm",children:C.jsx("h2",{className:"text-zinc-300  text-center text-sm ",children:"Create new board"})})]})]}),i&&C.jsx(_v,{})]})}var g2={exports:{}};/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.