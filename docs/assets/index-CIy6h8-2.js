import{r as hi,a as D,R as O,b as S1,c as Fl,g as P1}from"./react-CTc1arii.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var og,Fd=hi;og=Fd.createRoot,Fd.hydrateRoot;const ag=D.createContext(),C1=({children:t})=>{const[e,n]=D.useState(!1),r=()=>n(i=>!i);return O.createElement(ag.Provider,{value:{menuOpen:e,setMenuOpen:n,toggleMenu:r}},t)},mc=()=>D.useContext(ag);/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rs(){return Rs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Rs.apply(this,arguments)}var er;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(er||(er={}));const Ud="popstate";function R1(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=$r(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),gc("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,c=l.indexOf("#");a=c===-1?l:l.slice(0,c)}return a+"#"+(typeof s=="string"?s:aa(s))}function r(i,s){mu(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return A1(e,n,r,t)}function ot(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function mu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function I1(){return Math.random().toString(36).substr(2,8)}function jd(t,e){return{usr:t.state,key:t.key,idx:e}}function gc(t,e,n,r){return n===void 0&&(n=null),Rs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?$r(e):e,{state:n,key:e&&e.key||r||I1()})}function aa(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function $r(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function A1(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=er.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Rs({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function f(){a=er.Pop;let v=u(),_=v==null?null:v-c;c=v,l&&l({action:a,location:m.location,delta:_})}function p(v,_){a=er.Push;let C=gc(m.location,v,_);n&&n(C,v),c=u()+1;let R=jd(C,c),N=m.createHref(C);try{o.pushState(R,"",N)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(N)}s&&l&&l({action:a,location:m.location,delta:1})}function d(v,_){a=er.Replace;let C=gc(m.location,v,_);n&&n(C,v),c=u();let R=jd(C,c),N=m.createHref(C);o.replaceState(R,"",N),s&&l&&l({action:a,location:m.location,delta:0})}function g(v){let _=i.location.origin!=="null"?i.location.origin:i.location.href,C=typeof v=="string"?v:aa(v);return C=C.replace(/ $/,"%20"),ot(_,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,_)}let m={get action(){return a},get location(){return t(i,o)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ud,f),l=v,()=>{i.removeEventListener(Ud,f),l=null}},createHref(v){return e(i,v)},createURL:g,encodeLocation(v){let _=g(v);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:p,replace:d,go(v){return o.go(v)}};return m}var $d;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($d||($d={}));function k1(t,e,n){return n===void 0&&(n="/"),D1(t,e,n)}function D1(t,e,n,r){let i=typeof e=="string"?$r(e):e,s=gu(i.pathname||"/",n);if(s==null)return null;let o=lg(t);N1(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=H1(s);a=$1(o[l],c)}return a}function lg(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ot(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=nr([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(ot(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),lg(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:U1(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of cg(s.path))i(s,o,l)}),e}function cg(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=cg(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function N1(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:j1(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const M1=/^:[\w-]+$/,O1=3,V1=2,L1=1,B1=10,F1=-2,zd=t=>t==="*";function U1(t,e){let n=t.split("/"),r=n.length;return n.some(zd)&&(r+=F1),e&&(r+=V1),n.filter(i=>!zd(i)).reduce((i,s)=>i+(M1.test(s)?O1:s===""?L1:B1),r)}function j1(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function $1(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=s==="/"?e:e.slice(s.length)||"/",f=z1({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),p=l.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:nr([s,f.pathname]),pathnameBase:X1(nr([s,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(s=nr([s,f.pathnameBase]))}return o}function z1(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=W1(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,f)=>{let{paramName:p,isOptional:d}=u;if(p==="*"){let m=a[f]||"";o=s.slice(0,s.length-m.length).replace(/(.)\/+$/,"$1")}const g=a[f];return d&&!g?c[p]=void 0:c[p]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function W1(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),mu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function H1(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return mu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function gu(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function q1(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?$r(t):t;return{pathname:n?n.startsWith("/")?n:G1(n,e):e,search:Y1(r),hash:Q1(i)}}function G1(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ul(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function K1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function ug(t,e){let n=K1(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hg(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=$r(t):(i=Rs({},t),ot(!i.pathname||!i.pathname.includes("?"),Ul("?","pathname","search",i)),ot(!i.pathname||!i.pathname.includes("#"),Ul("#","pathname","hash",i)),ot(!i.search||!i.search.includes("#"),Ul("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}a=f>=0?e[f]:"/"}let l=q1(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const nr=t=>t.join("/").replace(/\/\/+/g,"/"),X1=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Y1=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Q1=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function J1(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const dg=["post","put","patch","delete"];new Set(dg);const Z1=["get",...dg];new Set(Z1);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Is(){return Is=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Is.apply(this,arguments)}const vu=D.createContext(null),ex=D.createContext(null),zr=D.createContext(null),$a=D.createContext(null),Wr=D.createContext({outlet:null,matches:[],isDataRoute:!1}),fg=D.createContext(null);function tx(t,e){let{relative:n}=e===void 0?{}:e;qs()||ot(!1);let{basename:r,navigator:i}=D.useContext(zr),{hash:s,pathname:o,search:a}=mg(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:nr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function qs(){return D.useContext($a)!=null}function Mi(){return qs()||ot(!1),D.useContext($a).location}function pg(t){D.useContext(zr).static||D.useLayoutEffect(t)}function Hr(){let{isDataRoute:t}=D.useContext(Wr);return t?px():nx()}function nx(){qs()||ot(!1);let t=D.useContext(vu),{basename:e,future:n,navigator:r}=D.useContext(zr),{matches:i}=D.useContext(Wr),{pathname:s}=Mi(),o=JSON.stringify(ug(i,n.v7_relativeSplatPath)),a=D.useRef(!1);return pg(()=>{a.current=!0}),D.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=hg(c,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:nr([e,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[e,r,o,s,t])}function mg(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=D.useContext(zr),{matches:i}=D.useContext(Wr),{pathname:s}=Mi(),o=JSON.stringify(ug(i,r.v7_relativeSplatPath));return D.useMemo(()=>hg(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function rx(t,e){return ix(t,e)}function ix(t,e,n,r){qs()||ot(!1);let{navigator:i}=D.useContext(zr),{matches:s}=D.useContext(Wr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Mi(),u;if(e){var f;let v=typeof e=="string"?$r(e):e;l==="/"||(f=v.pathname)!=null&&f.startsWith(l)||ot(!1),u=v}else u=c;let p=u.pathname||"/",d=p;if(l!=="/"){let v=l.replace(/^\//,"").split("/");d="/"+p.replace(/^\//,"").split("/").slice(v.length).join("/")}let g=k1(t,{pathname:d}),m=cx(g&&g.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:nr([l,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:nr([l,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r);return e&&m?D.createElement($a.Provider,{value:{location:Is({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:er.Pop}},m):m}function sx(){let t=fx(),e=J1(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return D.createElement(D.Fragment,null,D.createElement("h2",null,"Unexpected Application Error!"),D.createElement("h3",{style:{fontStyle:"italic"}},e),n?D.createElement("pre",{style:i},n):null,null)}const ox=D.createElement(sx,null);class ax extends D.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?D.createElement(Wr.Provider,{value:this.props.routeContext},D.createElement(fg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lx(t){let{routeContext:e,match:n,children:r}=t,i=D.useContext(vu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),D.createElement(Wr.Provider,{value:e},r)}function cx(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);u>=0||ot(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let f=o[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=u),f.route.id){let{loaderData:p,errors:d}=n,g=f.route.loader&&p[f.route.id]===void 0&&(!d||d[f.route.id]===void 0);if(f.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,f,p)=>{let d,g=!1,m=null,v=null;n&&(d=a&&f.route.id?a[f.route.id]:void 0,m=f.route.errorElement||ox,l&&(c<0&&p===0?(mx("route-fallback"),g=!0,v=null):c===p&&(g=!0,v=f.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,p+1)),C=()=>{let R;return d?R=m:g?R=v:f.route.Component?R=D.createElement(f.route.Component,null):f.route.element?R=f.route.element:R=u,D.createElement(lx,{match:f,routeContext:{outlet:u,matches:_,isDataRoute:n!=null},children:R})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?D.createElement(ax,{location:n.location,revalidation:n.revalidation,component:m,error:d,children:C(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):C()},null)}var gg=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(gg||{}),vg=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(vg||{});function ux(t){let e=D.useContext(vu);return e||ot(!1),e}function hx(t){let e=D.useContext(ex);return e||ot(!1),e}function dx(t){let e=D.useContext(Wr);return e||ot(!1),e}function yg(t){let e=dx(),n=e.matches[e.matches.length-1];return n.route.id||ot(!1),n.route.id}function fx(){var t;let e=D.useContext(fg),n=hx(),r=yg();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function px(){let{router:t}=ux(gg.UseNavigateStable),e=yg(vg.UseNavigateStable),n=D.useRef(!1);return pg(()=>{n.current=!0}),D.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Is({fromRouteId:e},s)))},[t,e])}const Wd={};function mx(t,e,n){Wd[t]||(Wd[t]=!0)}function gx(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function oi(t){ot(!1)}function vx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=er.Pop,navigator:s,static:o=!1,future:a}=t;qs()&&ot(!1);let l=e.replace(/^\/*/,"/"),c=D.useMemo(()=>({basename:l,navigator:s,static:o,future:Is({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=$r(r));let{pathname:u="/",search:f="",hash:p="",state:d=null,key:g="default"}=r,m=D.useMemo(()=>{let v=gu(u,l);return v==null?null:{location:{pathname:v,search:f,hash:p,state:d,key:g},navigationType:i}},[l,u,f,p,d,g,i]);return m==null?null:D.createElement(zr.Provider,{value:c},D.createElement($a.Provider,{children:n,value:m}))}function yx(t){let{children:e,location:n}=t;return rx(vc(e),n)}new Promise(()=>{});function vc(t,e){e===void 0&&(e=[]);let n=[];return D.Children.forEach(t,(r,i)=>{if(!D.isValidElement(r))return;let s=[...e,i];if(r.type===D.Fragment){n.push.apply(n,vc(r.props.children,s));return}r.type!==oi&&ot(!1),!r.props.index||!r.props.children||ot(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=vc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function yc(){return yc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yc.apply(this,arguments)}function bx(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function xx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function wx(t,e){return t.button===0&&(!e||e==="_self")&&!xx(t)}const Ex=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],_x="6";try{window.__reactRouterVersion=_x}catch{}const Tx="startTransition",Hd=S1[Tx];function Sx(t){let{basename:e,children:n,future:r,window:i}=t,s=D.useRef();s.current==null&&(s.current=R1({window:i,v5Compat:!0}));let o=s.current,[a,l]=D.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=D.useCallback(f=>{c&&Hd?Hd(()=>l(f)):l(f)},[l,c]);return D.useLayoutEffect(()=>o.listen(u),[o,u]),D.useEffect(()=>gx(r),[r]),D.createElement(vx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Px=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Cx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bc=D.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:u,viewTransition:f}=e,p=bx(e,Ex),{basename:d}=D.useContext(zr),g,m=!1;if(typeof c=="string"&&Cx.test(c)&&(g=c,Px))try{let R=new URL(window.location.href),N=c.startsWith("//")?new URL(R.protocol+c):new URL(c),x=gu(N.pathname,d);N.origin===R.origin&&x!=null?c=x+N.search+N.hash:m=!0}catch{}let v=tx(c,{relative:i}),_=Rx(c,{replace:o,state:a,target:l,preventScrollReset:u,relative:i,viewTransition:f});function C(R){r&&r(R),R.defaultPrevented||_(R)}return D.createElement("a",yc({},p,{href:g||v,onClick:m||s?r:C,ref:n,target:l}))});var qd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(qd||(qd={}));var Gd;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Gd||(Gd={}));function Rx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Hr(),c=Mi(),u=mg(t,{relative:o});return D.useCallback(f=>{if(wx(f,n)){f.preventDefault();let p=r!==void 0?r:aa(c)===aa(u);l(t,{replace:p,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[c,l,u,r,i,n,t,s,o,a])}const Ix=()=>{};var Kd={};/**
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
 */const bg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ax=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},xg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(p=64)),r.push(n[u],n[f],n[p],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ax(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new kx;const p=s<<2|a>>4;if(r.push(p),c!==64){const d=a<<4&240|c>>2;if(r.push(d),f!==64){const g=c<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Dx=function(t){const e=bg(t);return xg.encodeByteArray(e,!0)},la=function(t){return Dx(t).replace(/\./g,"")},wg=function(t){try{return xg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Nx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Mx=()=>Nx().__FIREBASE_DEFAULTS__,Ox=()=>{if(typeof process>"u"||typeof Kd>"u")return;const t=Kd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Vx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&wg(t[1]);return e&&JSON.parse(e)},za=()=>{try{return Ix()||Mx()||Ox()||Vx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Eg=t=>{var e,n;return(n=(e=za())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Lx=t=>{const e=Eg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_g=()=>{var t;return(t=za())===null||t===void 0?void 0:t.config},Tg=t=>{var e;return(e=za())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Bx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Gs(t){return t.endsWith(".cloudworkstations.dev")}async function Sg(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Fx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[la(JSON.stringify(n)),la(JSON.stringify(o)),""].join(".")}const ms={};function Ux(){const t={prod:[],emulator:[]};for(const e of Object.keys(ms))ms[e]?t.emulator.push(e):t.prod.push(e);return t}function jx(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Xd=!1;function Wa(t,e){if(typeof window>"u"||typeof document>"u"||!Gs(window.location.host)||ms[t]===e||ms[t]||Xd)return;ms[t]=e;function n(p){return`__firebase__banner__${p}`}const r="__firebase__banner",s=Ux().prod.length>0;function o(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function l(p,d){p.setAttribute("width","24"),p.setAttribute("id",d),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function c(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{Xd=!0,o()},p}function u(p,d){p.setAttribute("id",d),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=jx(r),d=n("text"),g=document.getElementById(d)||document.createElement("span"),m=n("learnmore"),v=document.getElementById(m)||document.createElement("a"),_=n("preprendIcon"),C=document.getElementById(_)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const R=p.element;a(R),u(v,m);const N=c();l(C,_),R.append(C,g,v,N),document.body.appendChild(R)}s?(g.innerText="Preview backend disconnected.",C.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(C.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,g.innerText="Preview backend running in this workspace."),g.setAttribute("id",d)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function Ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $x(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ot())}function zx(){var t;const e=(t=za())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Wx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gx(){const t=Ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Kx(){return!zx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Xx(){try{return typeof indexedDB=="object"}catch{return!1}}function Yx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Qx="FirebaseError";class jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Qx,Object.setPrototypeOf(this,jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ks.prototype.create)}}class Ks{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Jx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new jn(i,a,r)}}function Jx(t,e){return t.replace(Zx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Zx=/\{\$([^}]+)}/g;function ew(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yd(s)&&Yd(o)){if(!Vr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yd(t){return t!==null&&typeof t=="object"}/**
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
 */function Xs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function is(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ss(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function tw(t,e){const n=new nw(t,e);return n.subscribe.bind(n)}class nw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");rw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jl),i.error===void 0&&(i.error=jl),i.complete===void 0&&(i.complete=jl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jl(){}/**
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
 */function Et(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ar="[DEFAULT]";/**
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
 */class iw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Bx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ow(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sw(t){return t===Ar?void 0:t}function ow(t){return t.instantiationMode==="EAGER"}/**
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
 */class aw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Se||(Se={}));const lw={debug:Se.DEBUG,verbose:Se.VERBOSE,info:Se.INFO,warn:Se.WARN,error:Se.ERROR,silent:Se.SILENT},cw=Se.INFO,uw={[Se.DEBUG]:"log",[Se.VERBOSE]:"log",[Se.INFO]:"info",[Se.WARN]:"warn",[Se.ERROR]:"error"},hw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=uw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yu{constructor(e){this.name=e,this._logLevel=cw,this._logHandler=hw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Se.DEBUG,...e),this._logHandler(this,Se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Se.VERBOSE,...e),this._logHandler(this,Se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Se.INFO,...e),this._logHandler(this,Se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Se.WARN,...e),this._logHandler(this,Se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Se.ERROR,...e),this._logHandler(this,Se.ERROR,...e)}}const dw=(t,e)=>e.some(n=>t instanceof n);let Qd,Jd;function fw(){return Qd||(Qd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pw(){return Jd||(Jd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pg=new WeakMap,xc=new WeakMap,Cg=new WeakMap,$l=new WeakMap,bu=new WeakMap;function mw(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(rr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pg.set(n,t)}).catch(()=>{}),bu.set(e,t),e}function gw(t){if(xc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});xc.set(t,e)}let wc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return xc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vw(t){wc=t(wc)}function yw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zl(this),e,...n);return Cg.set(r,e.sort?e.sort():[e]),rr(r)}:pw().includes(t)?function(...e){return t.apply(zl(this),e),rr(Pg.get(this))}:function(...e){return rr(t.apply(zl(this),e))}}function bw(t){return typeof t=="function"?yw(t):(t instanceof IDBTransaction&&gw(t),dw(t,fw())?new Proxy(t,wc):t)}function rr(t){if(t instanceof IDBRequest)return mw(t);if($l.has(t))return $l.get(t);const e=bw(t);return e!==t&&($l.set(t,e),bu.set(e,t)),e}const zl=t=>bu.get(t);function xw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=rr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(rr(o.result),l.oldVersion,l.newVersion,rr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ww=["get","getKey","getAll","getAllKeys","count"],Ew=["put","add","delete","clear"],Wl=new Map;function Zd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wl.get(e))return Wl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ew.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ww.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Wl.set(e,s),s}vw(t=>({...t,get:(e,n,r)=>Zd(e,n)||t.get(e,n,r),has:(e,n)=>!!Zd(e,n)||t.has(e,n)}));/**
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
 */class _w{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ec="@firebase/app",ef="0.13.0";/**
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
 */const Vn=new yu("@firebase/app"),Sw="@firebase/app-compat",Pw="@firebase/analytics-compat",Cw="@firebase/analytics",Rw="@firebase/app-check-compat",Iw="@firebase/app-check",Aw="@firebase/auth",kw="@firebase/auth-compat",Dw="@firebase/database",Nw="@firebase/data-connect",Mw="@firebase/database-compat",Ow="@firebase/functions",Vw="@firebase/functions-compat",Lw="@firebase/installations",Bw="@firebase/installations-compat",Fw="@firebase/messaging",Uw="@firebase/messaging-compat",jw="@firebase/performance",$w="@firebase/performance-compat",zw="@firebase/remote-config",Ww="@firebase/remote-config-compat",Hw="@firebase/storage",qw="@firebase/storage-compat",Gw="@firebase/firestore",Kw="@firebase/ai",Xw="@firebase/firestore-compat",Yw="firebase",Qw="11.8.0";/**
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
 */const _c="[DEFAULT]",Jw={[Ec]:"fire-core",[Sw]:"fire-core-compat",[Cw]:"fire-analytics",[Pw]:"fire-analytics-compat",[Iw]:"fire-app-check",[Rw]:"fire-app-check-compat",[Aw]:"fire-auth",[kw]:"fire-auth-compat",[Dw]:"fire-rtdb",[Nw]:"fire-data-connect",[Mw]:"fire-rtdb-compat",[Ow]:"fire-fn",[Vw]:"fire-fn-compat",[Lw]:"fire-iid",[Bw]:"fire-iid-compat",[Fw]:"fire-fcm",[Uw]:"fire-fcm-compat",[jw]:"fire-perf",[$w]:"fire-perf-compat",[zw]:"fire-rc",[Ww]:"fire-rc-compat",[Hw]:"fire-gcs",[qw]:"fire-gcs-compat",[Gw]:"fire-fst",[Xw]:"fire-fst-compat",[Kw]:"fire-vertex","fire-js":"fire-js",[Yw]:"fire-js-all"};/**
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
 */const ca=new Map,Zw=new Map,Tc=new Map;function tf(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _i(t){const e=t.name;if(Tc.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;Tc.set(e,t);for(const n of ca.values())tf(n,t);for(const n of Zw.values())tf(n,t);return!0}function xu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const eE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new Ks("app","Firebase",eE);/**
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
 */class tE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Oi=Qw;function Rg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_c,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw ir.create("bad-app-name",{appName:String(i)});if(n||(n=_g()),!n)throw ir.create("no-options");const s=ca.get(i);if(s){if(Vr(n,s.options)&&Vr(r,s.config))return s;throw ir.create("duplicate-app",{appName:i})}const o=new aw(i);for(const l of Tc.values())o.addComponent(l);const a=new tE(n,r,o);return ca.set(i,a),a}function Ig(t=_c){const e=ca.get(t);if(!e&&t===_c&&_g())return Rg();if(!e)throw ir.create("no-app",{appName:t});return e}function sr(t,e,n){var r;let i=(r=Jw[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(a.join(" "));return}_i(new Lr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const nE="firebase-heartbeat-database",rE=1,As="firebase-heartbeat-store";let Hl=null;function Ag(){return Hl||(Hl=xw(nE,rE,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(As)}catch(n){console.warn(n)}}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),Hl}async function iE(t){try{const n=(await Ag()).transaction(As),r=await n.objectStore(As).get(kg(t));return await n.done,r}catch(e){if(e instanceof jn)Vn.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function nf(t,e){try{const r=(await Ag()).transaction(As,"readwrite");await r.objectStore(As).put(e,kg(t)),await r.done}catch(n){if(n instanceof jn)Vn.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function kg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const sE=1024,oE=30;class aE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=rf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>oE){const o=uE(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rf(),{heartbeatsToSend:r,unsentEntries:i}=lE(this._heartbeatsCache.heartbeats),s=la(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vn.warn(n),""}}}function rf(){return new Date().toISOString().substring(0,10)}function lE(t,e=sE){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xx()?Yx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return nf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sf(t){return la(JSON.stringify({version:2,heartbeats:t})).length}function uE(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function hE(t){_i(new Lr("platform-logger",e=>new _w(e),"PRIVATE")),_i(new Lr("heartbeat",e=>new aE(e),"PRIVATE")),sr(Ec,ef,t),sr(Ec,ef,"esm2017"),sr("fire-js","")}hE("");var of=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var or,Dg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function w(){}w.prototype=y.prototype,E.D=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(T,P,A){for(var k=Array(arguments.length-2),B=2;B<arguments.length;B++)k[B-2]=arguments[B];return y.prototype[P].apply(T,k)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,w){w||(w=0);var T=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)T[P]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(P=0;16>P;++P)T[P]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],P=E.g[2];var A=E.g[3],k=y+(A^w&(P^A))+T[0]+3614090360&4294967295;y=w+(k<<7&4294967295|k>>>25),k=A+(P^y&(w^P))+T[1]+3905402710&4294967295,A=y+(k<<12&4294967295|k>>>20),k=P+(w^A&(y^w))+T[2]+606105819&4294967295,P=A+(k<<17&4294967295|k>>>15),k=w+(y^P&(A^y))+T[3]+3250441966&4294967295,w=P+(k<<22&4294967295|k>>>10),k=y+(A^w&(P^A))+T[4]+4118548399&4294967295,y=w+(k<<7&4294967295|k>>>25),k=A+(P^y&(w^P))+T[5]+1200080426&4294967295,A=y+(k<<12&4294967295|k>>>20),k=P+(w^A&(y^w))+T[6]+2821735955&4294967295,P=A+(k<<17&4294967295|k>>>15),k=w+(y^P&(A^y))+T[7]+4249261313&4294967295,w=P+(k<<22&4294967295|k>>>10),k=y+(A^w&(P^A))+T[8]+1770035416&4294967295,y=w+(k<<7&4294967295|k>>>25),k=A+(P^y&(w^P))+T[9]+2336552879&4294967295,A=y+(k<<12&4294967295|k>>>20),k=P+(w^A&(y^w))+T[10]+4294925233&4294967295,P=A+(k<<17&4294967295|k>>>15),k=w+(y^P&(A^y))+T[11]+2304563134&4294967295,w=P+(k<<22&4294967295|k>>>10),k=y+(A^w&(P^A))+T[12]+1804603682&4294967295,y=w+(k<<7&4294967295|k>>>25),k=A+(P^y&(w^P))+T[13]+4254626195&4294967295,A=y+(k<<12&4294967295|k>>>20),k=P+(w^A&(y^w))+T[14]+2792965006&4294967295,P=A+(k<<17&4294967295|k>>>15),k=w+(y^P&(A^y))+T[15]+1236535329&4294967295,w=P+(k<<22&4294967295|k>>>10),k=y+(P^A&(w^P))+T[1]+4129170786&4294967295,y=w+(k<<5&4294967295|k>>>27),k=A+(w^P&(y^w))+T[6]+3225465664&4294967295,A=y+(k<<9&4294967295|k>>>23),k=P+(y^w&(A^y))+T[11]+643717713&4294967295,P=A+(k<<14&4294967295|k>>>18),k=w+(A^y&(P^A))+T[0]+3921069994&4294967295,w=P+(k<<20&4294967295|k>>>12),k=y+(P^A&(w^P))+T[5]+3593408605&4294967295,y=w+(k<<5&4294967295|k>>>27),k=A+(w^P&(y^w))+T[10]+38016083&4294967295,A=y+(k<<9&4294967295|k>>>23),k=P+(y^w&(A^y))+T[15]+3634488961&4294967295,P=A+(k<<14&4294967295|k>>>18),k=w+(A^y&(P^A))+T[4]+3889429448&4294967295,w=P+(k<<20&4294967295|k>>>12),k=y+(P^A&(w^P))+T[9]+568446438&4294967295,y=w+(k<<5&4294967295|k>>>27),k=A+(w^P&(y^w))+T[14]+3275163606&4294967295,A=y+(k<<9&4294967295|k>>>23),k=P+(y^w&(A^y))+T[3]+4107603335&4294967295,P=A+(k<<14&4294967295|k>>>18),k=w+(A^y&(P^A))+T[8]+1163531501&4294967295,w=P+(k<<20&4294967295|k>>>12),k=y+(P^A&(w^P))+T[13]+2850285829&4294967295,y=w+(k<<5&4294967295|k>>>27),k=A+(w^P&(y^w))+T[2]+4243563512&4294967295,A=y+(k<<9&4294967295|k>>>23),k=P+(y^w&(A^y))+T[7]+1735328473&4294967295,P=A+(k<<14&4294967295|k>>>18),k=w+(A^y&(P^A))+T[12]+2368359562&4294967295,w=P+(k<<20&4294967295|k>>>12),k=y+(w^P^A)+T[5]+4294588738&4294967295,y=w+(k<<4&4294967295|k>>>28),k=A+(y^w^P)+T[8]+2272392833&4294967295,A=y+(k<<11&4294967295|k>>>21),k=P+(A^y^w)+T[11]+1839030562&4294967295,P=A+(k<<16&4294967295|k>>>16),k=w+(P^A^y)+T[14]+4259657740&4294967295,w=P+(k<<23&4294967295|k>>>9),k=y+(w^P^A)+T[1]+2763975236&4294967295,y=w+(k<<4&4294967295|k>>>28),k=A+(y^w^P)+T[4]+1272893353&4294967295,A=y+(k<<11&4294967295|k>>>21),k=P+(A^y^w)+T[7]+4139469664&4294967295,P=A+(k<<16&4294967295|k>>>16),k=w+(P^A^y)+T[10]+3200236656&4294967295,w=P+(k<<23&4294967295|k>>>9),k=y+(w^P^A)+T[13]+681279174&4294967295,y=w+(k<<4&4294967295|k>>>28),k=A+(y^w^P)+T[0]+3936430074&4294967295,A=y+(k<<11&4294967295|k>>>21),k=P+(A^y^w)+T[3]+3572445317&4294967295,P=A+(k<<16&4294967295|k>>>16),k=w+(P^A^y)+T[6]+76029189&4294967295,w=P+(k<<23&4294967295|k>>>9),k=y+(w^P^A)+T[9]+3654602809&4294967295,y=w+(k<<4&4294967295|k>>>28),k=A+(y^w^P)+T[12]+3873151461&4294967295,A=y+(k<<11&4294967295|k>>>21),k=P+(A^y^w)+T[15]+530742520&4294967295,P=A+(k<<16&4294967295|k>>>16),k=w+(P^A^y)+T[2]+3299628645&4294967295,w=P+(k<<23&4294967295|k>>>9),k=y+(P^(w|~A))+T[0]+4096336452&4294967295,y=w+(k<<6&4294967295|k>>>26),k=A+(w^(y|~P))+T[7]+1126891415&4294967295,A=y+(k<<10&4294967295|k>>>22),k=P+(y^(A|~w))+T[14]+2878612391&4294967295,P=A+(k<<15&4294967295|k>>>17),k=w+(A^(P|~y))+T[5]+4237533241&4294967295,w=P+(k<<21&4294967295|k>>>11),k=y+(P^(w|~A))+T[12]+1700485571&4294967295,y=w+(k<<6&4294967295|k>>>26),k=A+(w^(y|~P))+T[3]+2399980690&4294967295,A=y+(k<<10&4294967295|k>>>22),k=P+(y^(A|~w))+T[10]+4293915773&4294967295,P=A+(k<<15&4294967295|k>>>17),k=w+(A^(P|~y))+T[1]+2240044497&4294967295,w=P+(k<<21&4294967295|k>>>11),k=y+(P^(w|~A))+T[8]+1873313359&4294967295,y=w+(k<<6&4294967295|k>>>26),k=A+(w^(y|~P))+T[15]+4264355552&4294967295,A=y+(k<<10&4294967295|k>>>22),k=P+(y^(A|~w))+T[6]+2734768916&4294967295,P=A+(k<<15&4294967295|k>>>17),k=w+(A^(P|~y))+T[13]+1309151649&4294967295,w=P+(k<<21&4294967295|k>>>11),k=y+(P^(w|~A))+T[4]+4149444226&4294967295,y=w+(k<<6&4294967295|k>>>26),k=A+(w^(y|~P))+T[11]+3174756917&4294967295,A=y+(k<<10&4294967295|k>>>22),k=P+(y^(A|~w))+T[2]+718787259&4294967295,P=A+(k<<15&4294967295|k>>>17),k=w+(A^(P|~y))+T[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(P+(k<<21&4294967295|k>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var w=y-this.blockSize,T=this.B,P=this.h,A=0;A<y;){if(P==0)for(;A<=w;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<y;)if(T[P++]=E.charCodeAt(A++),P==this.blockSize){i(this,T),P=0;break}}else for(;A<y;)if(T[P++]=E[A++],P==this.blockSize){i(this,T),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var w=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=w&255,w/=256;for(this.u(E),E=Array(16),y=w=0;4>y;++y)for(var T=0;32>T;T+=8)E[w++]=this.g[y]>>>T&255;return E};function s(E,y){var w=a;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function o(E,y){this.h=y;for(var w=[],T=!0,P=E.length-1;0<=P;P--){var A=E[P]|0;T&&A==y||(w[P]=A,T=!1)}this.g=w}var a={};function l(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return v(c(-E));for(var y=[],w=1,T=0;E>=w;T++)y[T]=E/w|0,w*=4294967296;return new o(y,0)}function u(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return v(u(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(y,8)),T=f,P=0;P<E.length;P+=8){var A=Math.min(8,E.length-P),k=parseInt(E.substring(P,P+A),y);8>A?(A=c(Math.pow(y,A)),T=T.j(A).add(c(k))):(T=T.j(w),T=T.add(c(k)))}return T}var f=l(0),p=l(1),d=l(16777216);t=o.prototype,t.m=function(){if(m(this))return-v(this).m();for(var E=0,y=1,w=0;w<this.g.length;w++){var T=this.i(w);E+=(0<=T?T:4294967296+T)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(g(this))return"0";if(m(this))return"-"+v(this).toString(E);for(var y=c(Math.pow(E,6)),w=this,T="";;){var P=N(w,y).g;w=_(w,P.j(y));var A=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=P,g(w))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function g(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function m(E){return E.h==-1}t.l=function(E){return E=_(this,E),m(E)?-1:g(E)?0:1};function v(E){for(var y=E.g.length,w=[],T=0;T<y;T++)w[T]=~E.g[T];return new o(w,~E.h).add(p)}t.abs=function(){return m(this)?v(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0,P=0;P<=y;P++){var A=T+(this.i(P)&65535)+(E.i(P)&65535),k=(A>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);T=k>>>16,A&=65535,k&=65535,w[P]=k<<16|A}return new o(w,w[w.length-1]&-2147483648?-1:0)};function _(E,y){return E.add(v(y))}t.j=function(E){if(g(this)||g(E))return f;if(m(this))return m(E)?v(this).j(v(E)):v(v(this).j(E));if(m(E))return v(this.j(v(E)));if(0>this.l(d)&&0>E.l(d))return c(this.m()*E.m());for(var y=this.g.length+E.g.length,w=[],T=0;T<2*y;T++)w[T]=0;for(T=0;T<this.g.length;T++)for(var P=0;P<E.g.length;P++){var A=this.i(T)>>>16,k=this.i(T)&65535,B=E.i(P)>>>16,$=E.i(P)&65535;w[2*T+2*P]+=k*$,C(w,2*T+2*P),w[2*T+2*P+1]+=A*$,C(w,2*T+2*P+1),w[2*T+2*P+1]+=k*B,C(w,2*T+2*P+1),w[2*T+2*P+2]+=A*B,C(w,2*T+2*P+2)}for(T=0;T<y;T++)w[T]=w[2*T+1]<<16|w[2*T];for(T=y;T<2*y;T++)w[T]=0;return new o(w,0)};function C(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function R(E,y){this.g=E,this.h=y}function N(E,y){if(g(y))throw Error("division by zero");if(g(E))return new R(f,f);if(m(E))return y=N(v(E),y),new R(v(y.g),v(y.h));if(m(y))return y=N(E,v(y)),new R(v(y.g),y.h);if(30<E.g.length){if(m(E)||m(y))throw Error("slowDivide_ only works with positive integers.");for(var w=p,T=y;0>=T.l(E);)w=x(w),T=x(T);var P=I(w,1),A=I(T,1);for(T=I(T,2),w=I(w,2);!g(T);){var k=A.add(T);0>=k.l(E)&&(P=P.add(w),A=k),T=I(T,1),w=I(w,1)}return y=_(E,P.j(y)),new R(P,y)}for(P=f;0<=E.l(y);){for(w=Math.max(1,Math.floor(E.m()/y.m())),T=Math.ceil(Math.log(w)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=c(w),k=A.j(y);m(k)||0<k.l(E);)w-=T,A=c(w),k=A.j(y);g(A)&&(A=p),P=P.add(A),E=_(E,k)}return new R(P,E)}t.A=function(E){return N(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)&E.i(T);return new o(w,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)|E.i(T);return new o(w,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],T=0;T<y;T++)w[T]=this.i(T)^E.i(T);return new o(w,this.h^E.h)};function x(E){for(var y=E.g.length+1,w=[],T=0;T<y;T++)w[T]=E.i(T)<<1|E.i(T-1)>>>31;return new o(w,E.h)}function I(E,y){var w=y>>5;y%=32;for(var T=E.g.length-w,P=[],A=0;A<T;A++)P[A]=0<y?E.i(A+w)>>>y|E.i(A+w+1)<<32-y:E.i(A+w);return new o(P,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Dg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=u,or=o}).apply(typeof of<"u"?of:typeof self<"u"?self:typeof window<"u"?window:{});var Ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ng,os,Mg,Ho,Sc,Og,Vg,Lg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,b,S){return h==Array.prototype||h==Object.prototype||(h[b]=S.value),h};function n(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ao=="object"&&Ao];for(var b=0;b<h.length;++b){var S=h[b];if(S&&S.Math==Math)return S}throw Error("Cannot find global object")}var r=n(this);function i(h,b){if(b)e:{var S=r;h=h.split(".");for(var M=0;M<h.length-1;M++){var V=h[M];if(!(V in S))break e;S=S[V]}h=h[h.length-1],M=S[h],b=b(M),b!=M&&b!=null&&e(S,h,{configurable:!0,writable:!0,value:b})}}function s(h,b){h instanceof String&&(h+="");var S=0,M=!1,V={next:function(){if(!M&&S<h.length){var L=S++;return{value:b(L,h[L]),done:!1}}return M=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}i("Array.prototype.values",function(h){return h||function(){return s(this,function(b,S){return S})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(h){var b=typeof h;return b=b!="object"?b:h?Array.isArray(h)?"array":b:"null",b=="array"||b=="object"&&typeof h.length=="number"}function c(h){var b=typeof h;return b=="object"&&h!=null||b=="function"}function u(h,b,S){return h.call.apply(h.bind,arguments)}function f(h,b,S){if(!h)throw Error();if(2<arguments.length){var M=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,M),h.apply(b,V)}}return function(){return h.apply(b,arguments)}}function p(h,b,S){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?u:f,p.apply(null,arguments)}function d(h,b){var S=Array.prototype.slice.call(arguments,1);return function(){var M=S.slice();return M.push.apply(M,arguments),h.apply(this,M)}}function g(h,b){function S(){}S.prototype=b.prototype,h.aa=b.prototype,h.prototype=new S,h.prototype.constructor=h,h.Qb=function(M,V,L){for(var G=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)G[Ue-2]=arguments[Ue];return b.prototype[V].apply(M,G)}}function m(h){const b=h.length;if(0<b){const S=Array(b);for(let M=0;M<b;M++)S[M]=h[M];return S}return[]}function v(h,b){for(let S=1;S<arguments.length;S++){const M=arguments[S];if(l(M)){const V=h.length||0,L=M.length||0;h.length=V+L;for(let G=0;G<L;G++)h[V+G]=M[G]}else h.push(M)}}class _{constructor(b,S){this.i=b,this.j=S,this.h=0,this.g=null}get(){let b;return 0<this.h?(this.h--,b=this.g,this.g=b.next,b.next=null):b=this.i(),b}}function C(h){return/^[\s\xa0]*$/.test(h)}function R(){var h=a.navigator;return h&&(h=h.userAgent)?h:""}function N(h){return N[" "](h),h}N[" "]=function(){};var x=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function I(h,b,S){for(const M in h)b.call(S,h[M],M,h)}function E(h,b){for(const S in h)b.call(void 0,h[S],S,h)}function y(h){const b={};for(const S in h)b[S]=h[S];return b}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(h,b){let S,M;for(let V=1;V<arguments.length;V++){M=arguments[V];for(S in M)h[S]=M[S];for(let L=0;L<w.length;L++)S=w[L],Object.prototype.hasOwnProperty.call(M,S)&&(h[S]=M[S])}}function P(h){var b=1;h=h.split(":");const S=[];for(;0<b&&h.length;)S.push(h.shift()),b--;return h.length&&S.push(h.join(":")),S}function A(h){a.setTimeout(()=>{throw h},0)}function k(){var h=ee;let b=null;return h.g&&(b=h.g,h.g=h.g.next,h.g||(h.h=null),b.next=null),b}class B{constructor(){this.h=this.g=null}add(b,S){const M=$.get();M.set(b,S),this.h?this.h.next=M:this.g=M,this.h=M}}var $=new _(()=>new X,h=>h.reset());class X{constructor(){this.next=this.g=this.h=null}set(b,S){this.h=b,this.g=S,this.next=null}reset(){this.next=this.g=this.h=null}}let U,K=!1,ee=new B,ue=()=>{const h=a.Promise.resolve(void 0);U=()=>{h.then(Ee)}};var Ee=()=>{for(var h;h=k();){try{h.h.call(h.g)}catch(S){A(S)}var b=$;b.j(h),100>b.h&&(b.h++,h.next=b.g,b.g=h)}K=!1};function ge(){this.s=this.s,this.C=this.C}ge.prototype.s=!1,ge.prototype.ma=function(){this.s||(this.s=!0,this.N())},ge.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(h,b){this.type=h,this.g=this.target=b,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var $e=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var h=!1,b=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const S=()=>{};a.addEventListener("test",S,b),a.removeEventListener("test",S,b)}catch{}return h}();function Me(h,b){if(ae.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var S=this.type=h.type,M=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=b,b=h.relatedTarget){if(x){e:{try{N(b.nodeName);var V=!0;break e}catch{}V=!1}V||(b=null)}}else S=="mouseover"?b=h.fromElement:S=="mouseout"&&(b=h.toElement);this.relatedTarget=b,M?(this.clientX=M.clientX!==void 0?M.clientX:M.pageX,this.clientY=M.clientY!==void 0?M.clientY:M.pageY,this.screenX=M.screenX||0,this.screenY=M.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:ie[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Me.aa.h.call(this)}}g(Me,ae);var ie={2:"touch",3:"pen",4:"mouse"};Me.prototype.h=function(){Me.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Ve="closure_listenable_"+(1e6*Math.random()|0),be=0;function ze(h,b,S,M,V){this.listener=h,this.proxy=null,this.src=b,this.type=S,this.capture=!!M,this.ha=V,this.key=++be,this.da=this.fa=!1}function oe(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Fe(h){this.src=h,this.g={},this.h=0}Fe.prototype.add=function(h,b,S,M,V){var L=h.toString();h=this.g[L],h||(h=this.g[L]=[],this.h++);var G=dt(h,b,M,V);return-1<G?(b=h[G],S||(b.fa=!1)):(b=new ze(b,this.src,L,!!M,V),b.fa=S,h.push(b)),b};function Ce(h,b){var S=b.type;if(S in h.g){var M=h.g[S],V=Array.prototype.indexOf.call(M,b,void 0),L;(L=0<=V)&&Array.prototype.splice.call(M,V,1),L&&(oe(b),h.g[S].length==0&&(delete h.g[S],h.h--))}}function dt(h,b,S,M){for(var V=0;V<h.length;++V){var L=h[V];if(!L.da&&L.listener==b&&L.capture==!!S&&L.ha==M)return V}return-1}var Ke="closure_lm_"+(1e6*Math.random()|0),ft={};function Ze(h,b,S,M,V){if(Array.isArray(b)){for(var L=0;L<b.length;L++)Ze(h,b[L],S,M,V);return null}return S=H(S),h&&h[Ve]?h.K(b,S,c(M)?!!M.capture:!1,V):Vt(h,b,S,!1,M,V)}function Vt(h,b,S,M,V,L){if(!b)throw Error("Invalid event type");var G=c(V)?!!V.capture:!!V,Ue=Te(h);if(Ue||(h[Ke]=Ue=new Fe(h)),S=Ue.add(b,S,M,G,L),S.proxy)return S;if(M=Y(),S.proxy=M,M.src=h,M.listener=S,h.addEventListener)$e||(V=G),V===void 0&&(V=!1),h.addEventListener(b.toString(),M,V);else if(h.attachEvent)h.attachEvent(xe(b.toString()),M);else if(h.addListener&&h.removeListener)h.addListener(M);else throw Error("addEventListener and attachEvent are unavailable.");return S}function Y(){function h(S){return b.call(h.src,h.listener,S)}const b=Re;return h}function J(h,b,S,M,V){if(Array.isArray(b))for(var L=0;L<b.length;L++)J(h,b[L],S,M,V);else M=c(M)?!!M.capture:!!M,S=H(S),h&&h[Ve]?(h=h.i,b=String(b).toString(),b in h.g&&(L=h.g[b],S=dt(L,S,M,V),-1<S&&(oe(L[S]),Array.prototype.splice.call(L,S,1),L.length==0&&(delete h.g[b],h.h--)))):h&&(h=Te(h))&&(b=h.g[b.toString()],h=-1,b&&(h=dt(b,S,M,V)),(S=-1<h?b[h]:null)&&he(S))}function he(h){if(typeof h!="number"&&h&&!h.da){var b=h.src;if(b&&b[Ve])Ce(b.i,h);else{var S=h.type,M=h.proxy;b.removeEventListener?b.removeEventListener(S,M,h.capture):b.detachEvent?b.detachEvent(xe(S),M):b.addListener&&b.removeListener&&b.removeListener(M),(S=Te(b))?(Ce(S,h),S.h==0&&(S.src=null,b[Ke]=null)):oe(h)}}}function xe(h){return h in ft?ft[h]:ft[h]="on"+h}function Re(h,b){if(h.da)h=!0;else{b=new Me(b,this);var S=h.listener,M=h.ha||h.src;h.fa&&he(h),h=S.call(M,b)}return h}function Te(h){return h=h[Ke],h instanceof Fe?h:null}var _e="__closure_events_fn_"+(1e9*Math.random()>>>0);function H(h){return typeof h=="function"?h:(h[_e]||(h[_e]=function(b){return h.handleEvent(b)}),h[_e])}function W(){ge.call(this),this.i=new Fe(this),this.M=this,this.F=null}g(W,ge),W.prototype[Ve]=!0,W.prototype.removeEventListener=function(h,b,S,M){J(this,h,b,S,M)};function Q(h,b){var S,M=h.F;if(M)for(S=[];M;M=M.F)S.push(M);if(h=h.M,M=b.type||b,typeof b=="string")b=new ae(b,h);else if(b instanceof ae)b.target=b.target||h;else{var V=b;b=new ae(M,h),T(b,V)}if(V=!0,S)for(var L=S.length-1;0<=L;L--){var G=b.g=S[L];V=se(G,M,!0,b)&&V}if(G=b.g=h,V=se(G,M,!0,b)&&V,V=se(G,M,!1,b)&&V,S)for(L=0;L<S.length;L++)G=b.g=S[L],V=se(G,M,!1,b)&&V}W.prototype.N=function(){if(W.aa.N.call(this),this.i){var h=this.i,b;for(b in h.g){for(var S=h.g[b],M=0;M<S.length;M++)oe(S[M]);delete h.g[b],h.h--}}this.F=null},W.prototype.K=function(h,b,S,M){return this.i.add(String(h),b,!1,S,M)},W.prototype.L=function(h,b,S,M){return this.i.add(String(h),b,!0,S,M)};function se(h,b,S,M){if(b=h.i.g[String(b)],!b)return!0;b=b.concat();for(var V=!0,L=0;L<b.length;++L){var G=b[L];if(G&&!G.da&&G.capture==S){var Ue=G.listener,yt=G.ha||G.src;G.fa&&Ce(h.i,G),V=Ue.call(yt,M)!==!1&&V}}return V&&!M.defaultPrevented}function F(h,b,S){if(typeof h=="function")S&&(h=p(h,S));else if(h&&typeof h.handleEvent=="function")h=p(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:a.setTimeout(h,b||0)}function q(h){h.g=F(()=>{h.g=null,h.i&&(h.i=!1,q(h))},h.l);const b=h.h;h.h=null,h.m.apply(null,b)}class de extends ge{constructor(b,S){super(),this.m=b,this.l=S,this.h=null,this.i=!1,this.g=null}j(b){this.h=arguments,this.g?this.i=!0:q(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Be(h){ge.call(this),this.h=h,this.g={}}g(Be,ge);var rt=[];function Lt(h){I(h.g,function(b,S){this.g.hasOwnProperty(S)&&he(b)},h),h.g={}}Be.prototype.N=function(){Be.aa.N.call(this),Lt(this)},Be.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Tt=a.JSON.stringify,$n=a.JSON.parse,Gi=class{stringify(h){return a.JSON.stringify(h,void 0)}parse(h){return a.JSON.parse(h,void 0)}};function Jr(){}Jr.prototype.h=null;function po(h){return h.h||(h.h=h.i())}function mo(){}var Er={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function it(){ae.call(this,"d")}g(it,ae);function gt(){ae.call(this,"c")}g(gt,ae);var et={},Zt=null;function vt(){return Zt=Zt||new W}et.La="serverreachability";function St(h){ae.call(this,et.La,h)}g(St,ae);function Pt(h){const b=vt();Q(b,new St(b))}et.STAT_EVENT="statevent";function Pn(h,b){ae.call(this,et.STAT_EVENT,h),this.stat=b}g(Pn,ae);function Ae(h){const b=vt();Q(b,new Pn(b,h))}et.Ma="timingevent";function en(h,b){ae.call(this,et.Ma,h),this.size=b}g(en,ae);function Ct(h,b){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){h()},b)}function Bt(){this.g=!0}Bt.prototype.xa=function(){this.g=!1};function _r(h,b,S,M,V,L){h.info(function(){if(h.g)if(L)for(var G="",Ue=L.split("&"),yt=0;yt<Ue.length;yt++){var De=Ue[yt].split("=");if(1<De.length){var Rt=De[0];De=De[1];var It=Rt.split("_");G=2<=It.length&&It[1]=="type"?G+(Rt+"="+De+"&"):G+(Rt+"=redacted&")}}else G=null;else G=L;return"XMLHTTP REQ ("+M+") [attempt "+V+"]: "+b+`
`+S+`
`+G})}function Tr(h,b,S,M,V,L,G){h.info(function(){return"XMLHTTP RESP ("+M+") [ attempt "+V+"]: "+b+`
`+S+`
`+L+" "+G})}function Ft(h,b,S,M){h.info(function(){return"XMLHTTP TEXT ("+b+"): "+Ki(h,S)+(M?" "+M:"")})}function Sr(h,b){h.info(function(){return"TIMEOUT: "+b})}Bt.prototype.info=function(){};function Ki(h,b){if(!h.g)return b;if(!b)return null;try{var S=JSON.parse(b);if(S){for(h=0;h<S.length;h++)if(Array.isArray(S[h])){var M=S[h];if(!(2>M.length)){var V=M[1];if(Array.isArray(V)&&!(1>V.length)){var L=V[0];if(L!="noop"&&L!="stop"&&L!="close")for(var G=1;G<V.length;G++)V[G]=""}}}}return Tt(S)}catch{return b}}var go={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ed={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Cl;function vo(){}g(vo,Jr),vo.prototype.g=function(){return new XMLHttpRequest},vo.prototype.i=function(){return{}},Cl=new vo;function zn(h,b,S,M){this.j=h,this.i=b,this.l=S,this.R=M||1,this.U=new Be(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new td}function td(){this.i=null,this.g="",this.h=!1}var nd={},Rl={};function Il(h,b,S){h.L=1,h.v=wo(Cn(b)),h.m=S,h.P=!0,rd(h,null)}function rd(h,b){h.F=Date.now(),yo(h),h.A=Cn(h.v);var S=h.A,M=h.R;Array.isArray(M)||(M=[String(M)]),vd(S.i,"t",M),h.C=0,S=h.j.J,h.h=new td,h.g=Od(h.j,S?b:null,!h.m),0<h.O&&(h.M=new de(p(h.Y,h,h.g),h.O)),b=h.U,S=h.g,M=h.ca;var V="readystatechange";Array.isArray(V)||(V&&(rt[0]=V.toString()),V=rt);for(var L=0;L<V.length;L++){var G=Ze(S,V[L],M||b.handleEvent,!1,b.h||b);if(!G)break;b.g[G.key]=G}b=h.H?y(h.H):{},h.m?(h.u||(h.u="POST"),b["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,b)):(h.u="GET",h.g.ea(h.A,h.u,null,b)),Pt(),_r(h.i,h.u,h.A,h.l,h.R,h.m)}zn.prototype.ca=function(h){h=h.target;const b=this.M;b&&Rn(h)==3?b.j():this.Y(h)},zn.prototype.Y=function(h){try{if(h==this.g)e:{const It=Rn(this.g);var b=this.g.Ba();const ti=this.g.Z();if(!(3>It)&&(It!=3||this.g&&(this.h.h||this.g.oa()||Td(this.g)))){this.J||It!=4||b==7||(b==8||0>=ti?Pt(3):Pt(2)),Al(this);var S=this.g.Z();this.X=S;t:if(id(this)){var M=Td(this.g);h="";var V=M.length,L=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Pr(this),Xi(this);var G="";break t}this.h.i=new a.TextDecoder}for(b=0;b<V;b++)this.h.h=!0,h+=this.h.i.decode(M[b],{stream:!(L&&b==V-1)});M.length=0,this.h.g+=h,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=S==200,Tr(this.i,this.u,this.A,this.l,this.R,It,S),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,yt=this.g;if((Ue=yt.g?yt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!C(Ue)){var De=Ue;break t}}De=null}if(S=De)Ft(this.i,this.l,S,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kl(this,S);else{this.o=!1,this.s=3,Ae(12),Pr(this),Xi(this);break e}}if(this.P){S=!0;let tn;for(;!this.J&&this.C<G.length;)if(tn=o1(this,G),tn==Rl){It==4&&(this.s=4,Ae(14),S=!1),Ft(this.i,this.l,null,"[Incomplete Response]");break}else if(tn==nd){this.s=4,Ae(15),Ft(this.i,this.l,G,"[Invalid Chunk]"),S=!1;break}else Ft(this.i,this.l,tn,null),kl(this,tn);if(id(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),It!=4||G.length!=0||this.h.h||(this.s=1,Ae(16),S=!1),this.o=this.o&&S,!S)Ft(this.i,this.l,G,"[Invalid Chunked Response]"),Pr(this),Xi(this);else if(0<G.length&&!this.W){this.W=!0;var Rt=this.j;Rt.g==this&&Rt.ba&&!Rt.M&&(Rt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Ll(Rt),Rt.M=!0,Ae(11))}}else Ft(this.i,this.l,G,null),kl(this,G);It==4&&Pr(this),this.o&&!this.J&&(It==4?kd(this.j,this):(this.o=!1,yo(this)))}else _1(this.g),S==400&&0<G.indexOf("Unknown SID")?(this.s=3,Ae(12)):(this.s=0,Ae(13)),Pr(this),Xi(this)}}}catch{}finally{}};function id(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function o1(h,b){var S=h.C,M=b.indexOf(`
`,S);return M==-1?Rl:(S=Number(b.substring(S,M)),isNaN(S)?nd:(M+=1,M+S>b.length?Rl:(b=b.slice(M,M+S),h.C=M+S,b)))}zn.prototype.cancel=function(){this.J=!0,Pr(this)};function yo(h){h.S=Date.now()+h.I,sd(h,h.I)}function sd(h,b){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Ct(p(h.ba,h),b)}function Al(h){h.B&&(a.clearTimeout(h.B),h.B=null)}zn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Sr(this.i,this.A),this.L!=2&&(Pt(),Ae(17)),Pr(this),this.s=2,Xi(this)):sd(this,this.S-h)};function Xi(h){h.j.G==0||h.J||kd(h.j,h)}function Pr(h){Al(h);var b=h.M;b&&typeof b.ma=="function"&&b.ma(),h.M=null,Lt(h.U),h.g&&(b=h.g,h.g=null,b.abort(),b.ma())}function kl(h,b){try{var S=h.j;if(S.G!=0&&(S.g==h||Dl(S.h,h))){if(!h.K&&Dl(S.h,h)&&S.G==3){try{var M=S.Da.g.parse(b)}catch{M=null}if(Array.isArray(M)&&M.length==3){var V=M;if(V[0]==0){e:if(!S.u){if(S.g)if(S.g.F+3e3<h.F)Co(S),So(S);else break e;Vl(S),Ae(18)}}else S.za=V[1],0<S.za-S.T&&37500>V[2]&&S.F&&S.v==0&&!S.C&&(S.C=Ct(p(S.Za,S),6e3));if(1>=ld(S.h)&&S.ca){try{S.ca()}catch{}S.ca=void 0}}else Rr(S,11)}else if((h.K||S.g==h)&&Co(S),!C(b))for(V=S.Da.g.parse(b),b=0;b<V.length;b++){let De=V[b];if(S.T=De[0],De=De[1],S.G==2)if(De[0]=="c"){S.K=De[1],S.ia=De[2];const Rt=De[3];Rt!=null&&(S.la=Rt,S.j.info("VER="+S.la));const It=De[4];It!=null&&(S.Aa=It,S.j.info("SVER="+S.Aa));const ti=De[5];ti!=null&&typeof ti=="number"&&0<ti&&(M=1.5*ti,S.L=M,S.j.info("backChannelRequestTimeoutMs_="+M)),M=S;const tn=h.g;if(tn){const Io=tn.g?tn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Io){var L=M.h;L.g||Io.indexOf("spdy")==-1&&Io.indexOf("quic")==-1&&Io.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(Nl(L,L.h),L.h=null))}if(M.D){const Bl=tn.g?tn.g.getResponseHeader("X-HTTP-Session-Id"):null;Bl&&(M.ya=Bl,We(M.I,M.D,Bl))}}S.G=3,S.l&&S.l.ua(),S.ba&&(S.R=Date.now()-h.F,S.j.info("Handshake RTT: "+S.R+"ms")),M=S;var G=h;if(M.qa=Md(M,M.J?M.ia:null,M.W),G.K){cd(M.h,G);var Ue=G,yt=M.L;yt&&(Ue.I=yt),Ue.B&&(Al(Ue),yo(Ue)),M.g=G}else Id(M);0<S.i.length&&Po(S)}else De[0]!="stop"&&De[0]!="close"||Rr(S,7);else S.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?Rr(S,7):Ol(S):De[0]!="noop"&&S.l&&S.l.ta(De),S.v=0)}}Pt(4)}catch{}}var a1=class{constructor(h,b){this.g=h,this.map=b}};function od(h){this.l=h||10,a.PerformanceNavigationTiming?(h=a.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ad(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function ld(h){return h.h?1:h.g?h.g.size:0}function Dl(h,b){return h.h?h.h==b:h.g?h.g.has(b):!1}function Nl(h,b){h.g?h.g.add(b):h.h=b}function cd(h,b){h.h&&h.h==b?h.h=null:h.g&&h.g.has(b)&&h.g.delete(b)}od.prototype.cancel=function(){if(this.i=ud(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function ud(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let b=h.i;for(const S of h.g.values())b=b.concat(S.D);return b}return m(h.i)}function l1(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(l(h)){for(var b=[],S=h.length,M=0;M<S;M++)b.push(h[M]);return b}b=[],S=0;for(M in h)b[S++]=h[M];return b}function c1(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(l(h)||typeof h=="string"){var b=[];h=h.length;for(var S=0;S<h;S++)b.push(S);return b}b=[],S=0;for(const M in h)b[S++]=M;return b}}}function hd(h,b){if(h.forEach&&typeof h.forEach=="function")h.forEach(b,void 0);else if(l(h)||typeof h=="string")Array.prototype.forEach.call(h,b,void 0);else for(var S=c1(h),M=l1(h),V=M.length,L=0;L<V;L++)b.call(void 0,M[L],S&&S[L],h)}var dd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function u1(h,b){if(h){h=h.split("&");for(var S=0;S<h.length;S++){var M=h[S].indexOf("="),V=null;if(0<=M){var L=h[S].substring(0,M);V=h[S].substring(M+1)}else L=h[S];b(L,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Cr(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Cr){this.h=h.h,bo(this,h.j),this.o=h.o,this.g=h.g,xo(this,h.s),this.l=h.l;var b=h.i,S=new Ji;S.i=b.i,b.g&&(S.g=new Map(b.g),S.h=b.h),fd(this,S),this.m=h.m}else h&&(b=String(h).match(dd))?(this.h=!1,bo(this,b[1]||"",!0),this.o=Yi(b[2]||""),this.g=Yi(b[3]||"",!0),xo(this,b[4]),this.l=Yi(b[5]||"",!0),fd(this,b[6]||"",!0),this.m=Yi(b[7]||"")):(this.h=!1,this.i=new Ji(null,this.h))}Cr.prototype.toString=function(){var h=[],b=this.j;b&&h.push(Qi(b,pd,!0),":");var S=this.g;return(S||b=="file")&&(h.push("//"),(b=this.o)&&h.push(Qi(b,pd,!0),"@"),h.push(encodeURIComponent(String(S)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),S=this.s,S!=null&&h.push(":",String(S))),(S=this.l)&&(this.g&&S.charAt(0)!="/"&&h.push("/"),h.push(Qi(S,S.charAt(0)=="/"?f1:d1,!0))),(S=this.i.toString())&&h.push("?",S),(S=this.m)&&h.push("#",Qi(S,m1)),h.join("")};function Cn(h){return new Cr(h)}function bo(h,b,S){h.j=S?Yi(b,!0):b,h.j&&(h.j=h.j.replace(/:$/,""))}function xo(h,b){if(b){if(b=Number(b),isNaN(b)||0>b)throw Error("Bad port number "+b);h.s=b}else h.s=null}function fd(h,b,S){b instanceof Ji?(h.i=b,g1(h.i,h.h)):(S||(b=Qi(b,p1)),h.i=new Ji(b,h.h))}function We(h,b,S){h.i.set(b,S)}function wo(h){return We(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Yi(h,b){return h?b?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function Qi(h,b,S){return typeof h=="string"?(h=encodeURI(h).replace(b,h1),S&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function h1(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var pd=/[#\/\?@]/g,d1=/[#\?:]/g,f1=/[#\?]/g,p1=/[#\?@]/g,m1=/#/g;function Ji(h,b){this.h=this.g=null,this.i=h||null,this.j=!!b}function Wn(h){h.g||(h.g=new Map,h.h=0,h.i&&u1(h.i,function(b,S){h.add(decodeURIComponent(b.replace(/\+/g," ")),S)}))}t=Ji.prototype,t.add=function(h,b){Wn(this),this.i=null,h=Zr(this,h);var S=this.g.get(h);return S||this.g.set(h,S=[]),S.push(b),this.h+=1,this};function md(h,b){Wn(h),b=Zr(h,b),h.g.has(b)&&(h.i=null,h.h-=h.g.get(b).length,h.g.delete(b))}function gd(h,b){return Wn(h),b=Zr(h,b),h.g.has(b)}t.forEach=function(h,b){Wn(this),this.g.forEach(function(S,M){S.forEach(function(V){h.call(b,V,M,this)},this)},this)},t.na=function(){Wn(this);const h=Array.from(this.g.values()),b=Array.from(this.g.keys()),S=[];for(let M=0;M<b.length;M++){const V=h[M];for(let L=0;L<V.length;L++)S.push(b[M])}return S},t.V=function(h){Wn(this);let b=[];if(typeof h=="string")gd(this,h)&&(b=b.concat(this.g.get(Zr(this,h))));else{h=Array.from(this.g.values());for(let S=0;S<h.length;S++)b=b.concat(h[S])}return b},t.set=function(h,b){return Wn(this),this.i=null,h=Zr(this,h),gd(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[b]),this.h+=1,this},t.get=function(h,b){return h?(h=this.V(h),0<h.length?String(h[0]):b):b};function vd(h,b,S){md(h,b),0<S.length&&(h.i=null,h.g.set(Zr(h,b),m(S)),h.h+=S.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],b=Array.from(this.g.keys());for(var S=0;S<b.length;S++){var M=b[S];const L=encodeURIComponent(String(M)),G=this.V(M);for(M=0;M<G.length;M++){var V=L;G[M]!==""&&(V+="="+encodeURIComponent(String(G[M]))),h.push(V)}}return this.i=h.join("&")};function Zr(h,b){return b=String(b),h.j&&(b=b.toLowerCase()),b}function g1(h,b){b&&!h.j&&(Wn(h),h.i=null,h.g.forEach(function(S,M){var V=M.toLowerCase();M!=V&&(md(this,M),vd(this,V,S))},h)),h.j=b}function v1(h,b){const S=new Bt;if(a.Image){const M=new Image;M.onload=d(Hn,S,"TestLoadImage: loaded",!0,b,M),M.onerror=d(Hn,S,"TestLoadImage: error",!1,b,M),M.onabort=d(Hn,S,"TestLoadImage: abort",!1,b,M),M.ontimeout=d(Hn,S,"TestLoadImage: timeout",!1,b,M),a.setTimeout(function(){M.ontimeout&&M.ontimeout()},1e4),M.src=h}else b(!1)}function y1(h,b){const S=new Bt,M=new AbortController,V=setTimeout(()=>{M.abort(),Hn(S,"TestPingServer: timeout",!1,b)},1e4);fetch(h,{signal:M.signal}).then(L=>{clearTimeout(V),L.ok?Hn(S,"TestPingServer: ok",!0,b):Hn(S,"TestPingServer: server error",!1,b)}).catch(()=>{clearTimeout(V),Hn(S,"TestPingServer: error",!1,b)})}function Hn(h,b,S,M,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),M(S)}catch{}}function b1(){this.g=new Gi}function x1(h,b,S){const M=S||"";try{hd(h,function(V,L){let G=V;c(V)&&(G=Tt(V)),b.push(M+L+"="+encodeURIComponent(G))})}catch(V){throw b.push(M+"type="+encodeURIComponent("_badmap")),V}}function Eo(h){this.l=h.Ub||null,this.j=h.eb||!1}g(Eo,Jr),Eo.prototype.g=function(){return new _o(this.l,this.j)},Eo.prototype.i=function(h){return function(){return h}}({});function _o(h,b){W.call(this),this.D=h,this.o=b,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}g(_o,W),t=_o.prototype,t.open=function(h,b){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=b,this.readyState=1,es(this)},t.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const b={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(b.body=h),(this.D||a).fetch(new Request(this.A,b)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zi(this)),this.readyState=0},t.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,es(this)),this.g&&(this.readyState=3,es(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yd(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function yd(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}t.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var b=h.value?h.value:new Uint8Array(0);(b=this.v.decode(b,{stream:!h.done}))&&(this.response=this.responseText+=b)}h.done?Zi(this):es(this),this.readyState==3&&yd(this)}},t.Ra=function(h){this.g&&(this.response=this.responseText=h,Zi(this))},t.Qa=function(h){this.g&&(this.response=h,Zi(this))},t.ga=function(){this.g&&Zi(this)};function Zi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,es(h)}t.setRequestHeader=function(h,b){this.u.append(h,b)},t.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],b=this.h.entries();for(var S=b.next();!S.done;)S=S.value,h.push(S[0]+": "+S[1]),S=b.next();return h.join(`\r
`)};function es(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(_o.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function bd(h){let b="";return I(h,function(S,M){b+=M,b+=":",b+=S,b+=`\r
`}),b}function Ml(h,b,S){e:{for(M in S){var M=!1;break e}M=!0}M||(S=bd(S),typeof h=="string"?S!=null&&encodeURIComponent(String(S)):We(h,b,S))}function Qe(h){W.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}g(Qe,W);var w1=/^https?$/i,E1=["POST","PUT"];t=Qe.prototype,t.Ha=function(h){this.J=h},t.ea=function(h,b,S,M){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);b=b?b.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Cl.g(),this.v=this.o?po(this.o):po(Cl),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(b,String(h),!0),this.B=!1}catch(L){xd(this,L);return}if(h=S||"",S=new Map(this.headers),M)if(Object.getPrototypeOf(M)===Object.prototype)for(var V in M)S.set(V,M[V]);else if(typeof M.keys=="function"&&typeof M.get=="function")for(const L of M.keys())S.set(L,M.get(L));else throw Error("Unknown input type for opt_headers: "+String(M));M=Array.from(S.keys()).find(L=>L.toLowerCase()=="content-type"),V=a.FormData&&h instanceof a.FormData,!(0<=Array.prototype.indexOf.call(E1,b,void 0))||M||V||S.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,G]of S)this.g.setRequestHeader(L,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{_d(this),this.u=!0,this.g.send(h),this.u=!1}catch(L){xd(this,L)}};function xd(h,b){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=b,h.m=5,wd(h),To(h)}function wd(h){h.A||(h.A=!0,Q(h,"complete"),Q(h,"error"))}t.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Q(this,"complete"),Q(this,"abort"),To(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),To(this,!0)),Qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ed(this):this.bb())},t.bb=function(){Ed(this)};function Ed(h){if(h.h&&typeof o<"u"&&(!h.v[1]||Rn(h)!=4||h.Z()!=2)){if(h.u&&Rn(h)==4)F(h.Ea,0,h);else if(Q(h,"readystatechange"),Rn(h)==4){h.h=!1;try{const G=h.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var b=!0;break e;default:b=!1}var S;if(!(S=b)){var M;if(M=G===0){var V=String(h.D).match(dd)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),M=!w1.test(V?V.toLowerCase():"")}S=M}if(S)Q(h,"complete"),Q(h,"success");else{h.m=6;try{var L=2<Rn(h)?h.g.statusText:""}catch{L=""}h.l=L+" ["+h.Z()+"]",wd(h)}}finally{To(h)}}}}function To(h,b){if(h.g){_d(h);const S=h.g,M=h.v[0]?()=>{}:null;h.g=null,h.v=null,b||Q(h,"ready");try{S.onreadystatechange=M}catch{}}}function _d(h){h.I&&(a.clearTimeout(h.I),h.I=null)}t.isActive=function(){return!!this.g};function Rn(h){return h.g?h.g.readyState:0}t.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(h){if(this.g){var b=this.g.responseText;return h&&b.indexOf(h)==0&&(b=b.substring(h.length)),$n(b)}};function Td(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function _1(h){const b={};h=(h.g&&2<=Rn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let M=0;M<h.length;M++){if(C(h[M]))continue;var S=P(h[M]);const V=S[0];if(S=S[1],typeof S!="string")continue;S=S.trim();const L=b[V]||[];b[V]=L,L.push(S)}E(b,function(M){return M.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ts(h,b,S){return S&&S.internalChannelParams&&S.internalChannelParams[h]||b}function Sd(h){this.Aa=0,this.i=[],this.j=new Bt,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ts("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ts("baseRetryDelayMs",5e3,h),this.cb=ts("retryDelaySeedMs",1e4,h),this.Wa=ts("forwardChannelMaxRetries",2,h),this.wa=ts("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new od(h&&h.concurrentRequestLimit),this.Da=new b1,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Sd.prototype,t.la=8,t.G=1,t.connect=function(h,b,S,M){Ae(0),this.W=h,this.H=b||{},S&&M!==void 0&&(this.H.OSID=S,this.H.OAID=M),this.F=this.X,this.I=Md(this,null,this.W),Po(this)};function Ol(h){if(Pd(h),h.G==3){var b=h.U++,S=Cn(h.I);if(We(S,"SID",h.K),We(S,"RID",b),We(S,"TYPE","terminate"),ns(h,S),b=new zn(h,h.j,b),b.L=2,b.v=wo(Cn(S)),S=!1,a.navigator&&a.navigator.sendBeacon)try{S=a.navigator.sendBeacon(b.v.toString(),"")}catch{}!S&&a.Image&&(new Image().src=b.v,S=!0),S||(b.g=Od(b.j,null),b.g.ea(b.v)),b.F=Date.now(),yo(b)}Nd(h)}function So(h){h.g&&(Ll(h),h.g.cancel(),h.g=null)}function Pd(h){So(h),h.u&&(a.clearTimeout(h.u),h.u=null),Co(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&a.clearTimeout(h.s),h.s=null)}function Po(h){if(!ad(h.h)&&!h.s){h.s=!0;var b=h.Ga;U||ue(),K||(U(),K=!0),ee.add(b,h),h.B=0}}function T1(h,b){return ld(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=b.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Ct(p(h.Ga,h,b),Dd(h,h.B)),h.B++,!0)}t.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const V=new zn(this,this.j,h);let L=this.o;if(this.S&&(L?(L=y(L),T(L,this.S)):L=this.S),this.m!==null||this.O||(V.H=L,L=null),this.P)e:{for(var b=0,S=0;S<this.i.length;S++){t:{var M=this.i[S];if("__data__"in M.map&&(M=M.map.__data__,typeof M=="string")){M=M.length;break t}M=void 0}if(M===void 0)break;if(b+=M,4096<b){b=S;break e}if(b===4096||S===this.i.length-1){b=S+1;break e}}b=1e3}else b=1e3;b=Rd(this,V,b),S=Cn(this.I),We(S,"RID",h),We(S,"CVER",22),this.D&&We(S,"X-HTTP-Session-Id",this.D),ns(this,S),L&&(this.O?b="headers="+encodeURIComponent(String(bd(L)))+"&"+b:this.m&&Ml(S,this.m,L)),Nl(this.h,V),this.Ua&&We(S,"TYPE","init"),this.P?(We(S,"$req",b),We(S,"SID","null"),V.T=!0,Il(V,S,null)):Il(V,S,b),this.G=2}}else this.G==3&&(h?Cd(this,h):this.i.length==0||ad(this.h)||Cd(this))};function Cd(h,b){var S;b?S=b.l:S=h.U++;const M=Cn(h.I);We(M,"SID",h.K),We(M,"RID",S),We(M,"AID",h.T),ns(h,M),h.m&&h.o&&Ml(M,h.m,h.o),S=new zn(h,h.j,S,h.B+1),h.m===null&&(S.H=h.o),b&&(h.i=b.D.concat(h.i)),b=Rd(h,S,1e3),S.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Nl(h.h,S),Il(S,M,b)}function ns(h,b){h.H&&I(h.H,function(S,M){We(b,M,S)}),h.l&&hd({},function(S,M){We(b,M,S)})}function Rd(h,b,S){S=Math.min(h.i.length,S);var M=h.l?p(h.l.Na,h.l,h):null;e:{var V=h.i;let L=-1;for(;;){const G=["count="+S];L==-1?0<S?(L=V[0].g,G.push("ofs="+L)):L=0:G.push("ofs="+L);let Ue=!0;for(let yt=0;yt<S;yt++){let De=V[yt].g;const Rt=V[yt].map;if(De-=L,0>De)L=Math.max(0,V[yt].g-100),Ue=!1;else try{x1(Rt,G,"req"+De+"_")}catch{M&&M(Rt)}}if(Ue){M=G.join("&");break e}}}return h=h.i.splice(0,S),b.D=h,M}function Id(h){if(!h.g&&!h.u){h.Y=1;var b=h.Fa;U||ue(),K||(U(),K=!0),ee.add(b,h),h.v=0}}function Vl(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Ct(p(h.Fa,h),Dd(h,h.v)),h.v++,!0)}t.Fa=function(){if(this.u=null,Ad(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Ct(p(this.ab,this),h)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ae(10),So(this),Ad(this))};function Ll(h){h.A!=null&&(a.clearTimeout(h.A),h.A=null)}function Ad(h){h.g=new zn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var b=Cn(h.qa);We(b,"RID","rpc"),We(b,"SID",h.K),We(b,"AID",h.T),We(b,"CI",h.F?"0":"1"),!h.F&&h.ja&&We(b,"TO",h.ja),We(b,"TYPE","xmlhttp"),ns(h,b),h.m&&h.o&&Ml(b,h.m,h.o),h.L&&(h.g.I=h.L);var S=h.g;h=h.ia,S.L=1,S.v=wo(Cn(b)),S.m=null,S.P=!0,rd(S,h)}t.Za=function(){this.C!=null&&(this.C=null,So(this),Vl(this),Ae(19))};function Co(h){h.C!=null&&(a.clearTimeout(h.C),h.C=null)}function kd(h,b){var S=null;if(h.g==b){Co(h),Ll(h),h.g=null;var M=2}else if(Dl(h.h,b))S=b.D,cd(h.h,b),M=1;else return;if(h.G!=0){if(b.o)if(M==1){S=b.m?b.m.length:0,b=Date.now()-b.F;var V=h.B;M=vt(),Q(M,new en(M,S)),Po(h)}else Id(h);else if(V=b.s,V==3||V==0&&0<b.X||!(M==1&&T1(h,b)||M==2&&Vl(h)))switch(S&&0<S.length&&(b=h.h,b.i=b.i.concat(S)),V){case 1:Rr(h,5);break;case 4:Rr(h,10);break;case 3:Rr(h,6);break;default:Rr(h,2)}}}function Dd(h,b){let S=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(S*=2),S*b}function Rr(h,b){if(h.j.info("Error code "+b),b==2){var S=p(h.fb,h),M=h.Xa;const V=!M;M=new Cr(M||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||bo(M,"https"),wo(M),V?v1(M.toString(),S):y1(M.toString(),S)}else Ae(2);h.G=0,h.l&&h.l.sa(b),Nd(h),Pd(h)}t.fb=function(h){h?(this.j.info("Successfully pinged google.com"),Ae(2)):(this.j.info("Failed to ping google.com"),Ae(1))};function Nd(h){if(h.G=0,h.ka=[],h.l){const b=ud(h.h);(b.length!=0||h.i.length!=0)&&(v(h.ka,b),v(h.ka,h.i),h.h.i.length=0,m(h.i),h.i.length=0),h.l.ra()}}function Md(h,b,S){var M=S instanceof Cr?Cn(S):new Cr(S);if(M.g!="")b&&(M.g=b+"."+M.g),xo(M,M.s);else{var V=a.location;M=V.protocol,b=b?b+"."+V.hostname:V.hostname,V=+V.port;var L=new Cr(null);M&&bo(L,M),b&&(L.g=b),V&&xo(L,V),S&&(L.l=S),M=L}return S=h.D,b=h.ya,S&&b&&We(M,S,b),We(M,"VER",h.la),ns(h,M),M}function Od(h,b,S){if(b&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return b=h.Ca&&!h.pa?new Qe(new Eo({eb:S})):new Qe(h.pa),b.Ha(h.J),b}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Vd(){}t=Vd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ro(){}Ro.prototype.g=function(h,b){return new Wt(h,b)};function Wt(h,b){W.call(this),this.g=new Sd(b),this.l=h,this.h=b&&b.messageUrlParams||null,h=b&&b.messageHeaders||null,b&&b.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=b&&b.initMessageHeaders||null,b&&b.messageContentType&&(h?h["X-WebChannel-Content-Type"]=b.messageContentType:h={"X-WebChannel-Content-Type":b.messageContentType}),b&&b.va&&(h?h["X-WebChannel-Client-Profile"]=b.va:h={"X-WebChannel-Client-Profile":b.va}),this.g.S=h,(h=b&&b.Sb)&&!C(h)&&(this.g.m=h),this.v=b&&b.supportsCrossDomainXhr||!1,this.u=b&&b.sendRawJson||!1,(b=b&&b.httpSessionIdParam)&&!C(b)&&(this.g.D=b,h=this.h,h!==null&&b in h&&(h=this.h,b in h&&delete h[b])),this.j=new ei(this)}g(Wt,W),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){Ol(this.g)},Wt.prototype.o=function(h){var b=this.g;if(typeof h=="string"){var S={};S.__data__=h,h=S}else this.u&&(S={},S.__data__=Tt(h),h=S);b.i.push(new a1(b.Ya++,h)),b.G==3&&Po(b)},Wt.prototype.N=function(){this.g.l=null,delete this.j,Ol(this.g),delete this.g,Wt.aa.N.call(this)};function Ld(h){it.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var b=h.__sm__;if(b){e:{for(const S in b){h=S;break e}h=void 0}(this.i=h)&&(h=this.i,b=b!==null&&h in b?b[h]:void 0),this.data=b}else this.data=h}g(Ld,it);function Bd(){gt.call(this),this.status=1}g(Bd,gt);function ei(h){this.g=h}g(ei,Vd),ei.prototype.ua=function(){Q(this.g,"a")},ei.prototype.ta=function(h){Q(this.g,new Ld(h))},ei.prototype.sa=function(h){Q(this.g,new Bd)},ei.prototype.ra=function(){Q(this.g,"b")},Ro.prototype.createWebChannel=Ro.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,Lg=function(){return new Ro},Vg=function(){return vt()},Og=et,Sc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},go.NO_ERROR=0,go.TIMEOUT=8,go.HTTP_ERROR=6,Ho=go,ed.COMPLETE="complete",Mg=ed,mo.EventType=Er,Er.OPEN="a",Er.CLOSE="b",Er.ERROR="c",Er.MESSAGE="d",W.prototype.listen=W.prototype.K,os=mo,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Ng=Qe}).apply(typeof Ao<"u"?Ao:typeof self<"u"?self:typeof window<"u"?window:{});const af="@firebase/firestore",lf="4.7.15";/**
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
 */class Dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Dt.UNAUTHENTICATED=new Dt(null),Dt.GOOGLE_CREDENTIALS=new Dt("google-credentials-uid"),Dt.FIRST_PARTY=new Dt("first-party-uid"),Dt.MOCK_USER=new Dt("mock-user");/**
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
 */let Vi="11.8.0";/**
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
 */const Br=new yu("@firebase/firestore");function ai(){return Br.logLevel}function Z(t,...e){if(Br.logLevel<=Se.DEBUG){const n=e.map(wu);Br.debug(`Firestore (${Vi}): ${t}`,...n)}}function Ln(t,...e){if(Br.logLevel<=Se.ERROR){const n=e.map(wu);Br.error(`Firestore (${Vi}): ${t}`,...n)}}function Ti(t,...e){if(Br.logLevel<=Se.WARN){const n=e.map(wu);Br.warn(`Firestore (${Vi}): ${t}`,...n)}}function wu(t){if(typeof t=="string")return t;try{/**
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
 */function me(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Bg(t,r,n)}function Bg(t,e,n){let r=`FIRESTORE (${Vi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ln(r),new Error(r)}function Oe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Bg(e,i,r)}function ye(t,e){return t}/**
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
 */const z={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class re extends jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Dn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Fg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Dt.UNAUTHENTICATED))}shutdown(){}}class fE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pE{constructor(e){this.t=e,this.currentUser=Dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Oe(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Dn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Dn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Dn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string",31837,{l:r}),new Fg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string",2055,{h:e}),new Dt(e)}}class mE{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gE{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new mE(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vE{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Oe(this.o===void 0,3512);const r=s=>{s.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new cf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new cf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yE(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Ug(){return new TextEncoder}/**
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
 */class jg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=yE(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Pc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return we(r,i);{const s=Ug(),o=bE(s.encode(uf(t,n)),s.encode(uf(e,n)));return o!==0?o:we(r,i)}}n+=r>65535?2:1}return we(t.length,e.length)}function uf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function bE(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return we(t[n],e[n]);return we(t.length,e.length)}function Si(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const hf=-62135596800,df=1e6;class ct{static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*df);return new ct(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new re(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new re(z.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<hf)throw new re(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new re(z.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/df}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-hf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ve{static fromTimestamp(e){return new ve(e)}static min(){return new ve(new ct(0,0))}static max(){return new ve(new ct(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ff="__name__";class fn{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&me(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return fn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=fn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return we(e.length,n.length)}static compareSegments(e,n){const r=fn.isNumericId(e),i=fn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?fn.extractNumericId(e).compare(fn.extractNumericId(n)):Pc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return or.fromString(e.substring(4,e.length-2))}}class Ge extends fn{construct(e,n,r){return new Ge(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new re(z.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ge(n)}static emptyPath(){return new Ge([])}}const xE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends fn{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return xE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ff}static keyField(){return new wt([ff])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new re(z.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new re(z.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new re(z.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new re(z.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Ge.fromString(e))}static fromName(e){return new ce(Ge.fromString(e).popFirst(5))}static empty(){return new ce(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ge.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Ge(e.slice()))}}/**
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
 */const ks=-1;function wE(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ve.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new lr(i,ce.empty(),e)}function EE(t){return new lr(t.readTime,t.key,ks)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(ve.min(),ce.empty(),ks)}static max(){return new lr(ve.max(),ce.empty(),ks)}}function _E(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
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
 */const TE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Li(t){if(t.code!==z.FAILED_PRECONDITION||t.message!==TE)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,r)=>{n(e)})}static reject(e){return new j((n,r)=>{r(e)})}static waitFor(e){return new j((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=j.resolve(!1);for(const r of e)n=n.next(i=>i?j.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new j((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===s&&r(o)},u=>i(u))}})}static doWhile(e,n){return new j((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function PE(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Bi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ha{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Ha.le=-1;/**
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
 */const Eu=-1;function qa(t){return t==null}function ua(t){return t===0&&1/t==-1/0}function CE(t){return typeof t=="number"&&Number.isInteger(t)&&!ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const $g="";function RE(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=pf(e)),e=IE(t.get(n),e);return pf(e)}function IE(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case $g:n+="";break;default:n+=s}}return n}function pf(t){return t+$g+""}/**
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
 */function mf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function zg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||xt.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ko(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ko(this.root,e,this.comparator,!1)}getReverseIterator(){return new ko(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ko(this.root,e,this.comparator,!0)}}class ko{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xt.RED,this.left=i??xt.EMPTY,this.right=s??xt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new xt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return xt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1;xt.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new xt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ut{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gf(this.data.getIterator())}getIteratorFrom(e){return new gf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ut)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ut(this.comparator);return n.data=e,n}}class gf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class qt{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new qt([])}unionWith(e){let n=new ut(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Si(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Wg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Wg("Invalid base64 string: "+s):s}}(e);return new _t(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const AE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function cr(t){if(Oe(!!t,39018),typeof t=="string"){let e=0;const n=AE.exec(t);if(Oe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:nt(t.seconds),nanos:nt(t.nanos)}}function nt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ur(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
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
 */const Hg="server_timestamp",qg="__type__",Gg="__previous_value__",Kg="__local_write_time__";function _u(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[qg])===null||n===void 0?void 0:n.stringValue)===Hg}function Ga(t){const e=t.mapValue.fields[Gg];return _u(e)?Ga(e):e}function Ds(t){const e=cr(t.mapValue.fields[Kg].timestampValue);return new ct(e.seconds,e.nanos)}/**
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
 */class kE{constructor(e,n,r,i,s,o,a,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c,this.isUsingEmulator=u}}const ha="(default)";class Ns{constructor(e,n){this.projectId=e,this.database=n||ha}static empty(){return new Ns("","")}get isDefaultDatabase(){return this.database===ha}isEqual(e){return e instanceof Ns&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Xg="__type__",DE="__max__",Do={mapValue:{}},Yg="__vector__",da="value";function hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_u(t)?4:ME(t)?9007199254740991:NE(t)?10:11:me(28295,{value:t})}function En(t,e){if(t===e)return!0;const n=hr(t);if(n!==hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ds(t).isEqual(Ds(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=cr(i.timestampValue),a=cr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ur(i.bytesValue).isEqual(ur(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return nt(i.geoPointValue.latitude)===nt(s.geoPointValue.latitude)&&nt(i.geoPointValue.longitude)===nt(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return nt(i.integerValue)===nt(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=nt(i.doubleValue),a=nt(s.doubleValue);return o===a?ua(o)===ua(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Si(t.arrayValue.values||[],e.arrayValue.values||[],En);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(mf(o)!==mf(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!En(o[l],a[l])))return!1;return!0}(t,e);default:return me(52216,{left:t})}}function Ms(t,e){return(t.values||[]).find(n=>En(n,e))!==void 0}function Pi(t,e){if(t===e)return 0;const n=hr(t),r=hr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=nt(s.integerValue||s.doubleValue),l=nt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return vf(t.timestampValue,e.timestampValue);case 4:return vf(Ds(t),Ds(e));case 5:return Pc(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ur(s),l=ur(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=we(a[c],l[c]);if(u!==0)return u}return we(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=we(nt(s.latitude),nt(o.latitude));return a!==0?a:we(nt(s.longitude),nt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yf(t.arrayValue,e.arrayValue);case 10:return function(s,o){var a,l,c,u;const f=s.fields||{},p=o.fields||{},d=(a=f[da])===null||a===void 0?void 0:a.arrayValue,g=(l=p[da])===null||l===void 0?void 0:l.arrayValue,m=we(((c=d==null?void 0:d.values)===null||c===void 0?void 0:c.length)||0,((u=g==null?void 0:g.values)===null||u===void 0?void 0:u.length)||0);return m!==0?m:yf(d,g)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Do.mapValue&&o===Do.mapValue)return 0;if(s===Do.mapValue)return 1;if(o===Do.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let f=0;f<l.length&&f<u.length;++f){const p=Pc(l[f],u[f]);if(p!==0)return p;const d=Pi(a[l[f]],c[u[f]]);if(d!==0)return d}return we(l.length,u.length)}(t.mapValue,e.mapValue);default:throw me(23264,{Pe:n})}}function vf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=cr(t),r=cr(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function yf(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Pi(n[i],r[i]);if(s)return s}return we(n.length,r.length)}function Ci(t){return Cc(t)}function Cc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=cr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ur(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Cc(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Cc(n.fields[o])}`;return i+"}"}(t.mapValue):me(61005,{value:t})}function qo(t){switch(hr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ga(t);return e?16+qo(e):16;case 5:return 2*t.stringValue.length;case 6:return ur(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+qo(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return vr(r.fields,(s,o)=>{i+=s.length+qo(o)}),i}(t.mapValue);default:throw me(13486,{value:t})}}function Rc(t){return!!t&&"integerValue"in t}function Tu(t){return!!t&&"arrayValue"in t}function bf(t){return!!t&&"nullValue"in t}function xf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Go(t){return!!t&&"mapValue"in t}function NE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Xg])===null||n===void 0?void 0:n.stringValue)===Yg}function gs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=gs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ME(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===DE}/**
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
 */class jt{constructor(e){this.value=e}static empty(){return new jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Go(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gs(n)}setAll(e){let n=wt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=gs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Go(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return En(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Go(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){vr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new jt(gs(this.value))}}function Qg(t){const e=[];return vr(t.fields,(n,r)=>{const i=new wt([n]);if(Go(r)){const s=Qg(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qt(e)}/**
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
 */class Nt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Nt(e,0,ve.min(),ve.min(),ve.min(),jt.empty(),0)}static newFoundDocument(e,n,r,i){return new Nt(e,1,n,ve.min(),r,i,0)}static newNoDocument(e,n){return new Nt(e,2,n,ve.min(),ve.min(),jt.empty(),0)}static newUnknownDocument(e,n){return new Nt(e,3,n,ve.min(),ve.min(),jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fa{constructor(e,n){this.position=e,this.inclusive=n}}function wf(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=Pi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ef(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!En(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class pa{constructor(e,n="asc"){this.field=e,this.dir=n}}function OE(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Jg{}class lt extends Jg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LE(e,n,r):n==="array-contains"?new UE(e,r):n==="in"?new jE(e,r):n==="not-in"?new $E(e,r):n==="array-contains-any"?new zE(e,r):new lt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new BE(e,r):new FE(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Pi(n,this.value)):n!==null&&hr(this.value)===hr(n)&&this.matchesComparison(Pi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class _n extends Jg{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new _n(e,n)}matches(e){return Zg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Zg(t){return t.op==="and"}function e0(t){return VE(t)&&Zg(t)}function VE(t){for(const e of t.filters)if(e instanceof _n)return!1;return!0}function Ic(t){if(t instanceof lt)return t.field.canonicalString()+t.op.toString()+Ci(t.value);if(e0(t))return t.filters.map(e=>Ic(e)).join(",");{const e=t.filters.map(n=>Ic(n)).join(",");return`${t.op}(${e})`}}function t0(t,e){return t instanceof lt?function(r,i){return i instanceof lt&&r.op===i.op&&r.field.isEqual(i.field)&&En(r.value,i.value)}(t,e):t instanceof _n?function(r,i){return i instanceof _n&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&t0(o,i.filters[a]),!0):!1}(t,e):void me(19439)}function n0(t){return t instanceof lt?function(n){return`${n.field.canonicalString()} ${n.op} ${Ci(n.value)}`}(t):t instanceof _n?function(n){return n.op.toString()+" {"+n.getFilters().map(n0).join(" ,")+"}"}(t):"Filter"}class LE extends lt{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class BE extends lt{constructor(e,n){super(e,"in",n),this.keys=r0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FE extends lt{constructor(e,n){super(e,"not-in",n),this.keys=r0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function r0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class UE extends lt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tu(n)&&Ms(n.arrayValue,this.value)}}class jE extends lt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ms(this.value.arrayValue,n)}}class $E extends lt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ms(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ms(this.value.arrayValue,n)}}class zE extends lt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ms(this.value.arrayValue,r))}}/**
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
 */class WE{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Ie=null}}function _f(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WE(t,e,n,r,i,s,o)}function Su(t){const e=ye(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ic(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),qa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ci(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ci(r)).join(",")),e.Ie=n}return e.Ie}function Pu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OE(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!t0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ef(t.startAt,e.startAt)&&Ef(t.endAt,e.endAt)}function Ac(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ka{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function HE(t,e,n,r,i,s,o,a){return new Ka(t,e,n,r,i,s,o,a)}function Cu(t){return new Ka(t)}function Tf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qE(t){return t.collectionGroup!==null}function vs(t){const e=ye(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ut(wt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new pa(s,r))}),n.has(wt.keyField().canonicalString())||e.Ee.push(new pa(wt.keyField(),r))}return e.Ee}function mn(t){const e=ye(t);return e.de||(e.de=GE(e,vs(t))),e.de}function GE(t,e){if(t.limitType==="F")return _f(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new pa(i.field,s)});const n=t.endAt?new fa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new fa(t.startAt.position,t.startAt.inclusive):null;return _f(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function kc(t,e,n){return new Ka(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xa(t,e){return Pu(mn(t),mn(e))&&t.limitType===e.limitType}function i0(t){return`${Su(mn(t))}|lt:${t.limitType}`}function li(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>n0(i)).join(", ")}]`),qa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ci(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ci(i)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function Ya(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):ce.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of vs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=wf(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,vs(r),i)||r.endAt&&!function(o,a,l){const c=wf(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,vs(r),i))}(t,e)}function KE(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function s0(t){return(e,n)=>{let r=!1;for(const i of vs(t)){const s=XE(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function XE(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Pi(l,c):me(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me(19790,{direction:t.dir})}}/**
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
 */class qr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){vr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return zg(this.inner)}size(){return this.innerSize}}/**
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
 */const YE=new Ye(ce.comparator);function Bn(){return YE}const o0=new Ye(ce.comparator);function as(...t){let e=o0;for(const n of t)e=e.insert(n.key,n);return e}function a0(t){let e=o0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Nr(){return ys()}function l0(){return ys()}function ys(){return new qr(t=>t.toString(),(t,e)=>t.isEqual(e))}const QE=new Ye(ce.comparator),JE=new ut(ce.comparator);function Pe(...t){let e=JE;for(const n of t)e=e.add(n);return e}const ZE=new ut(we);function e_(){return ZE}/**
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
 */function Ru(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ua(e)?"-0":e}}function c0(t){return{integerValue:""+t}}function t_(t,e){return CE(e)?c0(e):Ru(t,e)}/**
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
 */class Qa{constructor(){this._=void 0}}function n_(t,e,n){return t instanceof ma?function(i,s){const o={fields:{[qg]:{stringValue:Hg},[Kg]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&_u(s)&&(s=Ga(s)),s&&(o.fields[Gg]=s),{mapValue:o}}(n,e):t instanceof Os?h0(t,e):t instanceof Vs?d0(t,e):function(i,s){const o=u0(i,s),a=Sf(o)+Sf(i.Re);return Rc(o)&&Rc(i.Re)?c0(a):Ru(i.serializer,a)}(t,e)}function r_(t,e,n){return t instanceof Os?h0(t,e):t instanceof Vs?d0(t,e):n}function u0(t,e){return t instanceof ga?function(r){return Rc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ma extends Qa{}class Os extends Qa{constructor(e){super(),this.elements=e}}function h0(t,e){const n=f0(e);for(const r of t.elements)n.some(i=>En(i,r))||n.push(r);return{arrayValue:{values:n}}}class Vs extends Qa{constructor(e){super(),this.elements=e}}function d0(t,e){let n=f0(e);for(const r of t.elements)n=n.filter(i=>!En(i,r));return{arrayValue:{values:n}}}class ga extends Qa{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Sf(t){return nt(t.integerValue||t.doubleValue)}function f0(t){return Tu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function i_(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Os&&i instanceof Os||r instanceof Vs&&i instanceof Vs?Si(r.elements,i.elements,En):r instanceof ga&&i instanceof ga?En(r.Re,i.Re):r instanceof ma&&i instanceof ma}(t.transform,e.transform)}class s_{constructor(e,n){this.version=e,this.transformResults=n}}class cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new cn}static exists(e){return new cn(void 0,e)}static updateTime(e){return new cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ko(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ja{}function p0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Iu(t.key,cn.none()):new Ys(t.key,t.data,cn.none());{const n=t.data,r=jt.empty();let i=new ut(wt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new yr(t.key,r,new qt(i.toArray()),cn.none())}}function o_(t,e,n){t instanceof Ys?function(i,s,o){const a=i.value.clone(),l=Cf(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof yr?function(i,s,o){if(!Ko(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Cf(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(m0(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function bs(t,e,n,r){return t instanceof Ys?function(s,o,a,l){if(!Ko(s.precondition,o))return a;const c=s.value.clone(),u=Rf(s.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof yr?function(s,o,a,l){if(!Ko(s.precondition,o))return a;const c=Rf(s.fieldTransforms,l,o),u=o.data;return u.setAll(m0(s)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Ko(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function a_(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=u0(r.transform,i||null);s!=null&&(n===null&&(n=jt.empty()),n.set(r.field,s))}return n||null}function Pf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Si(r,i,(s,o)=>i_(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ys extends Ja{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yr extends Ja{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function m0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Cf(t,e,n){const r=new Map;Oe(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,r_(o,a,n[i]))}return r}function Rf(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,n_(s,o,e))}return r}class Iu extends Ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class l_ extends Ja{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class c_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&o_(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=l0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=p0(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ve.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Pe())}isEqual(e){return this.batchId===e.batchId&&Si(this.mutations,e.mutations,(n,r)=>Pf(n,r))&&Si(this.baseMutations,e.baseMutations,(n,r)=>Pf(n,r))}}class Au{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Oe(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return QE}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Au(e,n,r,i)}}/**
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
 */class u_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class h_{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var st,Ie;function d_(t){switch(t){case z.OK:return me(64938);case z.CANCELLED:case z.UNKNOWN:case z.DEADLINE_EXCEEDED:case z.RESOURCE_EXHAUSTED:case z.INTERNAL:case z.UNAVAILABLE:case z.UNAUTHENTICATED:return!1;case z.INVALID_ARGUMENT:case z.NOT_FOUND:case z.ALREADY_EXISTS:case z.PERMISSION_DENIED:case z.FAILED_PRECONDITION:case z.ABORTED:case z.OUT_OF_RANGE:case z.UNIMPLEMENTED:case z.DATA_LOSS:return!0;default:return me(15467,{code:t})}}function g0(t){if(t===void 0)return Ln("GRPC error has no .code"),z.UNKNOWN;switch(t){case st.OK:return z.OK;case st.CANCELLED:return z.CANCELLED;case st.UNKNOWN:return z.UNKNOWN;case st.DEADLINE_EXCEEDED:return z.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return z.RESOURCE_EXHAUSTED;case st.INTERNAL:return z.INTERNAL;case st.UNAVAILABLE:return z.UNAVAILABLE;case st.UNAUTHENTICATED:return z.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return z.INVALID_ARGUMENT;case st.NOT_FOUND:return z.NOT_FOUND;case st.ALREADY_EXISTS:return z.ALREADY_EXISTS;case st.PERMISSION_DENIED:return z.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return z.FAILED_PRECONDITION;case st.ABORTED:return z.ABORTED;case st.OUT_OF_RANGE:return z.OUT_OF_RANGE;case st.UNIMPLEMENTED:return z.UNIMPLEMENTED;case st.DATA_LOSS:return z.DATA_LOSS;default:return me(39323,{code:t})}}(Ie=st||(st={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const f_=new or([4294967295,4294967295],0);function If(t){const e=Ug().encode(t),n=new Dg;return n.update(e),new Uint8Array(n.digest())}function Af(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new or([n,r],0),new or([i,s],0)]}class ku{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ls(`Invalid padding: ${n}`);if(r<0)throw new ls(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ls(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ls(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=or.fromNumber(this.pe)}we(e,n,r){let i=e.add(n.multiply(or.fromNumber(r)));return i.compare(f_)===1&&(i=new or([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=If(e),[r,i]=Af(n);for(let s=0;s<this.hashCount;s++){const o=this.we(r,i,s);if(!this.Se(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ku(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.pe===0)return;const n=If(e),[r,i]=Af(n);for(let s=0;s<this.hashCount;s++){const o=this.we(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ls extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Za{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Qs.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Za(ve.min(),i,new Ye(we),Bn(),Pe())}}class Qs{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Qs(r,n,Pe(),Pe(),Pe())}}/**
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
 */class Xo{constructor(e,n,r,i){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=i}}class v0{constructor(e,n){this.targetId=e,this.Ce=n}}class y0{constructor(e,n,r=_t.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class kf{constructor(){this.Fe=0,this.Me=Df(),this.xe=_t.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Pe(),n=Pe(),r=Pe();return this.Me.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:me(38017,{changeType:s})}}),new Qs(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=Df()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,Oe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class p_{constructor(e){this.ze=e,this.je=new Map,this.He=Bn(),this.Je=No(),this.Ye=No(),this.Ze=new Ye(we)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:me(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,i)=>{this.it(i)&&n(i)})}ot(e){const n=e.targetId,r=e.Ce.count,i=this._t(n);if(i){const s=i.target;if(Ac(s))if(r===0){const o=new ce(s.path);this.tt(n,o,Nt.newNoDocument(o,ve.min()))}else Oe(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const a=this.ct(e),l=a?this.lt(a,e,o):1;if(l!==0){this.st(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,c)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ur(r).toUint8Array()}catch(l){if(l instanceof Wg)return Ti("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new ku(o,i,s)}catch(l){return Ti(l instanceof ls?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.pe===0?null:a}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ze.Pt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.tt(n,s,null),i++)}),i}It(e){const n=new Map;this.je.forEach((s,o)=>{const a=this._t(o);if(a){if(s.current&&Ac(a.target)){const l=new ce(a.target.path);this.Et(l).has(o)||this.dt(o,l)||this.tt(o,l,Nt.newNoDocument(l,e))}s.Le&&(n.set(o,s.qe()),s.Qe())}});let r=Pe();this.Ye.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this._t(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.He.forEach((s,o)=>o.setReadTime(e));const i=new Za(e,n,this.Ze,this.He,r);return this.He=Bn(),this.Je=No(),this.Ye=No(),this.Ze=new Ye(we),i}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,n)?i.$e(n,1):i.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new kf,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new ut(we),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new ut(we),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new kf),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function No(){return new Ye(ce.comparator)}function Df(){return new Ye(ce.comparator)}const m_={asc:"ASCENDING",desc:"DESCENDING"},g_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},v_={and:"AND",or:"OR"};class y_{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Dc(t,e){return t.useProto3Json||qa(e)?e:{value:e}}function va(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function b0(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function b_(t,e){return va(t,e.toTimestamp())}function gn(t){return Oe(!!t,49232),ve.fromTimestamp(function(n){const r=cr(n);return new ct(r.seconds,r.nanos)}(t))}function Du(t,e){return Nc(t,e).canonicalString()}function Nc(t,e){const n=function(i){return new Ge(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function x0(t){const e=Ge.fromString(t);return Oe(S0(e),10190,{key:e.toString()}),e}function Mc(t,e){return Du(t.databaseId,e.path)}function ql(t,e){const n=x0(e);if(n.get(1)!==t.databaseId.projectId)throw new re(z.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new re(z.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(E0(n))}function w0(t,e){return Du(t.databaseId,e)}function x_(t){const e=x0(t);return e.length===4?Ge.emptyPath():E0(e)}function Oc(t){return new Ge(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function E0(t){return Oe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Nf(t,e,n){return{name:Mc(t,e),fields:n.value.mapValue.fields}}function w_(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:me(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,u){return c.useProto3Json?(Oe(u===void 0||typeof u=="string",58123),_t.fromBase64String(u||"")):(Oe(u===void 0||u instanceof Buffer||u instanceof Uint8Array,16193),_t.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?z.UNKNOWN:g0(c.code);return new re(u,c.message||"")}(o);n=new y0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ql(t,r.document.name),s=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):ve.min(),a=new jt({mapValue:{fields:r.document.fields}}),l=Nt.newFoundDocument(i,s,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Xo(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ql(t,r.document),s=r.readTime?gn(r.readTime):ve.min(),o=Nt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Xo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ql(t,r.document),s=r.removedTargetIds||[];n=new Xo([],s,i,null)}else{if(!("filter"in e))return me(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new h_(i,s),a=r.targetId;n=new v0(a,o)}}return n}function E_(t,e){let n;if(e instanceof Ys)n={update:Nf(t,e.key,e.value)};else if(e instanceof Iu)n={delete:Mc(t,e.key)};else if(e instanceof yr)n={update:Nf(t,e.key,e.data),updateMask:k_(e.fieldMask)};else{if(!(e instanceof l_))return me(16599,{ft:e.type});n={verify:Mc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Os)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Vs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ga)return{fieldPath:o.field.canonicalString(),increment:a.Re};throw me(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:b_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:me(27497)}(t,e.precondition)),n}function __(t,e){return t&&t.length>0?(Oe(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?gn(i.updateTime):gn(s);return o.isEqual(ve.min())&&(o=gn(s)),new s_(o,i.transformResults||[])}(n,e))):[]}function T_(t,e){return{documents:[w0(t,e.path)]}}function S_(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=w0(t,i);const s=function(c){if(c.length!==0)return T0(_n.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(u=>function(p){return{field:ci(p.field),direction:R_(p.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Dc(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{gt:n,parent:i}}function P_(t){let e=x_(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Oe(r===1,65062);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let s=[];n.where&&(s=function(f){const p=_0(f);return p instanceof _n&&e0(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(g){return new pa(ui(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,qa(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,d=f.values||[];return new fa(d,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,d=f.values||[];return new fa(d,p)}(n.endAt)),HE(e,i,o,s,a,"F",l,c)}function C_(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function _0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ui(n.unaryFilter.field);return lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ui(n.unaryFilter.field);return lt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ui(n.unaryFilter.field);return lt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ui(n.unaryFilter.field);return lt.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}}(t):t.fieldFilter!==void 0?function(n){return lt.create(ui(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return _n.create(n.compositeFilter.filters.map(r=>_0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return me(1026)}}(n.compositeFilter.op))}(t):me(30097,{filter:t})}function R_(t){return m_[t]}function I_(t){return g_[t]}function A_(t){return v_[t]}function ci(t){return{fieldPath:t.canonicalString()}}function ui(t){return wt.fromServerFormat(t.fieldPath)}function T0(t){return t instanceof lt?function(n){if(n.op==="=="){if(xf(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NAN"}};if(bf(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xf(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NAN"}};if(bf(n.value))return{unaryFilter:{field:ci(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ci(n.field),op:I_(n.op),value:n.value}}}(t):t instanceof _n?function(n){const r=n.getFilters().map(i=>T0(i));return r.length===1?r[0]:{compositeFilter:{op:A_(n.op),filters:r}}}(t):me(54877,{filter:t})}function k_(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function S0(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class tr{constructor(e,n,r,i,s=ve.min(),o=ve.min(),a=_t.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new tr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class D_{constructor(e){this.wt=e}}function N_(t){const e=P_({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kc(e,e.limit,"L"):e}/**
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
 */class M_{constructor(){this.Cn=new O_}addToCollectionParentIndex(e,n){return this.Cn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(lr.min())}updateCollectionGroup(e,n,r){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class O_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ut(Ge.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ut(Ge.comparator)).toArray()}}/**
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
 */const Mf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},P0=41943040;class Ut{static withCacheSize(e){return new Ut(e,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ut.DEFAULT_COLLECTION_PERCENTILE=10,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ut.DEFAULT=new Ut(P0,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ut.DISABLED=new Ut(-1,0,0);/**
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
 */class Ri{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Ri(0)}static lr(){return new Ri(-1)}}/**
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
 */const Of="LruGarbageCollector",V_=1048576;function Vf([t,e],[n,r]){const i=we(t,n);return i===0?we(e,r):i}class L_{constructor(e){this.Er=e,this.buffer=new ut(Vf),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Vf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class B_{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){Z(Of,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Bi(n)?Z(Of,"Ignoring IndexedDB error during garbage collection: ",n):await Li(n)}await this.mr(3e5)})}}class F_{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return j.resolve(Ha.le);const r=new L_(n);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(Mf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Mf):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,i,s,o,a,l,c;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),ai()<=Se.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-u}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-u}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function U_(t,e){return new F_(t,e)}/**
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
 */class j_{constructor(){this.changes=new qr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?j.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $_{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class z_{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&bs(r.mutation,i,qt.empty(),ct.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Pe()){const i=Nr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=as();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Nr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Pe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Bn();const o=ys(),a=function(){return ys()}();return n.forEach((l,c)=>{const u=r.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof yr)?s=s.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),bs(u.mutation,c,u.mutation.getFieldMask(),ct.now())):o.set(c.key,qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var f;return a.set(c,new $_(u,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ys();let i=new Ye((o,a)=>o-a),s=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||qt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const f=(i.get(a.batchId)||Pe()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,f=l0();u.forEach(p=>{if(!s.has(p)){const d=p0(n.get(p),r.get(p));d!==null&&f.set(p,d),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return j.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qE(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):j.resolve(Nr());let a=ks,l=s;return o.next(c=>j.forEach(c,(u,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(u)?j.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{l=l.insert(u,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,Pe())).next(u=>({batchId:a,changes:a0(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let i=as();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=as();return this.indexManager.getCollectionParents(e,s).next(a=>j.forEach(a,l=>{const c=function(f,p){return new Ka(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(u=>{u.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,Nt.newInvalidDocument(u)))});let a=as();return o.forEach((l,c)=>{const u=s.get(l);u!==void 0&&bs(u.mutation,c,qt.empty(),ct.now()),Ya(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class W_{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return j.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:gn(i.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(i){return{name:i.name,query:N_(i.bundledQuery),readTime:gn(i.readTime)}}(n)),j.resolve()}}/**
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
 */class H_{constructor(){this.overlays=new Ye(ce.comparator),this.Qr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Nr();return j.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),j.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Qr.delete(r)),j.resolve()}getOverlaysForCollection(e,n,r){const i=Nr(),s=n.length+1,o=new ce(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return j.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ye((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=s.get(c.largestBatchId);u===null&&(u=Nr(),s=s.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Nr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return j.resolve(a)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new u_(n,r));let s=this.Qr.get(n);s===void 0&&(s=Pe(),this.Qr.set(n,s)),this.Qr.set(n,s.add(r.key))}}/**
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
 */class q_{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class Nu{constructor(){this.$r=new ut(pt.Ur),this.Kr=new ut(pt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new pt(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new pt(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new ce(new Ge([])),r=new pt(n,e),i=new pt(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.zr(o),s.push(o.key)}),s}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new ce(new Ge([])),r=new pt(n,e),i=new pt(n,e+1);let s=Pe();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new pt(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class pt{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return ce.comparator(e.key,n.key)||we(e.Zr,n.Zr)}static Wr(e,n){return we(e.Zr,n.Zr)||ce.comparator(e.key,n.key)}}/**
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
 */class G_{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new ut(pt.Ur)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new c_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Xr=this.Xr.add(new pt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ti(r),s=i<0?0:i;return j.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Eu:this.nr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new pt(n,0),i=new pt(n,Number.POSITIVE_INFINITY),s=[];return this.Xr.forEachInRange([r,i],o=>{const a=this.ei(o.Zr);s.push(a)}),j.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ut(we);return n.forEach(i=>{const s=new pt(i,0),o=new pt(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([s,o],a=>{r=r.add(a.Zr)})}),j.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;ce.isDocumentKey(s)||(s=s.child(""));const o=new pt(new ce(s),0);let a=new ut(we);return this.Xr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.Zr)),!0)},o),j.resolve(this.ni(a))}ni(e){const n=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Oe(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return j.forEach(n.mutations,i=>{const s=new pt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new pt(n,0),i=this.Xr.firstAfterOrEqual(r);return j.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class K_{constructor(e){this.ii=e,this.docs=function(){return new Ye(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return j.resolve(r?r.document.mutableCopy():Nt.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Nt.newInvalidDocument(i))}),j.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Bn();const o=n.path,a=new ce(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||_E(EE(u),r)<=0||(i.has(u.key)||Ya(n,u))&&(s=s.insert(u.key,u.mutableCopy()))}return j.resolve(s)}getAllFromCollectionGroup(e,n,r,i){me(9500)}si(e,n){return j.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new X_(this)}getSize(e){return j.resolve(this.size)}}class X_ extends j_{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),j.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class Y_{constructor(e){this.persistence=e,this.oi=new qr(n=>Su(n),Pu),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this._i=0,this.ai=new Nu,this.targetCount=0,this.ui=Ri.cr()}forEachTarget(e,n){return this.oi.forEach((r,i)=>n(i)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),j.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new Ri(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.Tr(n),j.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.oi.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.oi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),j.waitFor(s).next(()=>i)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return j.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),j.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),j.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),j.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return j.resolve(r)}containsKey(e,n){return j.resolve(this.ai.containsKey(n))}}/**
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
 */class C0{constructor(e,n){this.ci={},this.overlays={},this.li=new Ha(0),this.hi=!1,this.hi=!0,this.Pi=new q_,this.referenceDelegate=e(this),this.Ti=new Y_(this),this.indexManager=new M_,this.remoteDocumentCache=function(i){return new K_(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new D_(n),this.Ei=new W_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new H_,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new G_(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const i=new Q_(this.li.next());return this.referenceDelegate.di(),r(i).next(s=>this.referenceDelegate.Ai(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ri(e,n){return j.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class Q_ extends SE{constructor(e){super(),this.currentSequenceNumber=e}}class Mu{constructor(e){this.persistence=e,this.Vi=new Nu,this.mi=null}static fi(e){return new Mu(e)}get gi(){if(this.mi)return this.mi;throw me(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),j.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),j.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.gi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.gi,r=>{const i=ce.fromPath(r);return this.pi(e,i).next(s=>{s||n.removeEntry(i,ve.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return j.or([()=>j.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class ya{constructor(e,n){this.persistence=e,this.yi=new qr(r=>RE(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=U_(this,n)}static fi(e,n){return new ya(e,n)}di(){}Ai(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Sr(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return j.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(s=>s?j.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.si(e,o=>this.Dr(e,o,n).next(a=>{a||(r++,s.removeEntry(o,ve.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),j.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),j.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=qo(e.data.value)),n}Dr(e,n,r){return j.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.yi.get(n);return j.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ou{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ds=r,this.As=i}static Rs(e,n){let r=Pe(),i=Pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ou(e,n.fromCache,r,i)}}/**
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
 */class J_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Z_{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Kx()?8:PE(Ot())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ws(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ss(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new J_;return this.bs(e,n,o).next(a=>{if(s.result=a,this.fs)return this.Ds(e,n,o,a.size)})}).next(()=>s.result)}Ds(e,n,r,i){return r.documentReadCount<this.gs?(ai()<=Se.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",li(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),j.resolve()):(ai()<=Se.DEBUG&&Z("QueryEngine","Query:",li(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(ai()<=Se.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",li(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):j.resolve())}ws(e,n){if(Tf(n))return j.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kc(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Pe(...s);return this.ys.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.vs(n,a);return this.Cs(n,c,o,l.readTime)?this.ws(e,kc(n,null,"F")):this.Fs(e,c,n,l)}))})))}Ss(e,n,r,i){return Tf(n)||i.isEqual(ve.min())?j.resolve(null):this.ys.getDocuments(e,r).next(s=>{const o=this.vs(n,s);return this.Cs(n,o,r,i)?j.resolve(null):(ai()<=Se.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),li(n)),this.Fs(e,o,n,wE(i,ks)).next(a=>a))})}vs(e,n){let r=new ut(s0(e));return n.forEach((i,s)=>{Ya(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}bs(e,n,r){return ai()<=Se.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",li(n)),this.ys.getDocumentsMatchingQuery(e,n,lr.min(),r)}Fs(e,n,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const Vu="LocalStore",eT=3e8;class tT{constructor(e,n,r,i){this.persistence=e,this.Ms=n,this.serializer=i,this.xs=new Ye(we),this.Os=new qr(s=>Su(s),Pu),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new z_(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function nT(t,e,n,r){return new tT(t,e,n,r)}async function R0(t,e){const n=ye(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Pe();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of s){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({ks:c,removedBatchIds:o,addedBatchIds:a}))})})}function rT(t,e){const n=ye(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Bs.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const f=c.batch,p=f.keys();let d=j.resolve();return p.forEach(g=>{d=d.next(()=>u.getEntry(l,g)).next(m=>{const v=c.docVersions.get(g);Oe(v!==null,48541),m.version.compareTo(v)<0&&(f.applyToRemoteDocument(m,c),m.isValidDocument()&&(m.setReadTime(c.commitVersion),u.addEntry(m)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Pe();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function I0(t){const e=ye(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function iT(t,e){const n=ye(t),r=e.snapshotVersion;let i=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.xs;const a=[];e.targetChanges.forEach((u,f)=>{const p=i.get(f);if(!p)return;a.push(n.Ti.removeMatchingKeys(s,u.removedDocuments,f).next(()=>n.Ti.addMatchingKeys(s,u.addedDocuments,f)));let d=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?d=d.withResumeToken(_t.EMPTY_BYTE_STRING,ve.min()).withLastLimboFreeSnapshotVersion(ve.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),i=i.insert(f,d),function(m,v,_){return m.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=eT?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(p,d,u)&&a.push(n.Ti.updateTargetData(s,d))});let l=Bn(),c=Pe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,u))}),a.push(sT(s,o,e.documentUpdates).next(u=>{l=u.qs,c=u.Qs})),!r.isEqual(ve.min())){const u=n.Ti.getLastRemoteSnapshotVersion(s).next(f=>n.Ti.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(u)}return j.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.xs=i,s))}function sT(t,e,n){let r=Pe(),i=Pe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bn();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ve.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):Z(Vu,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{qs:o,Qs:i}})}function oT(t,e){const n=ye(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Eu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aT(t,e){const n=ye(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ti.getTargetData(r,e).next(s=>s?(i=s,j.resolve(i)):n.Ti.allocateTargetId(r).next(o=>(i=new tr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function Vc(t,e,n){const r=ye(t),i=r.xs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Bi(o))throw o;Z(Vu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(i.target)}function Lf(t,e,n){const r=ye(t);let i=ve.min(),s=Pe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const f=ye(l),p=f.Os.get(u);return p!==void 0?j.resolve(f.xs.get(p)):f.Ti.getTargetData(c,u)}(r,o,mn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?i:ve.min(),n?s:Pe())).next(a=>(lT(r,KE(e),a),{documents:a,$s:s})))}function lT(t,e,n){let r=t.Ns.get(e)||ve.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ns.set(e,r)}class Bf{constructor(){this.activeTargetIds=e_()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cT{constructor(){this.xo=new Bf,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Bf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uT{No(e){}shutdown(){}}/**
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
 */const Ff="ConnectivityMonitor";class Uf{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){Z(Ff,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){Z(Ff,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Mo=null;function Lc(){return Mo===null?Mo=function(){return 268435456+Math.round(2147483648*Math.random())}():Mo++,"0x"+Mo.toString(16)}/**
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
 */const Gl="RestConnection",hT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dT{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===ha?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,n,r,i,s){const o=Lc(),a=this.jo(e,n.toUriEncodedString());Z(Gl,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(l,i,s);const{host:c}=new URL(a),u=Gs(c);return this.Jo(e,a,l,r,u).then(f=>(Z(Gl,`Received RPC '${e}' ${o}: `,f),f),f=>{throw Ti(Gl,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",r),f})}Yo(e,n,r,i,s,o){return this.zo(e,n,r,i,s)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}jo(e,n){const r=hT[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class fT{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const At="WebChannelConnection";class pT extends dT{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Lc();return new Promise((a,l)=>{const c=new Ng;c.setWithCredentials(!0),c.listenOnce(Mg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Ho.NO_ERROR:const f=c.getResponseJson();Z(At,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Ho.TIMEOUT:Z(At,`RPC '${e}' ${o} timed out`),l(new re(z.DEADLINE_EXCEEDED,"Request time out"));break;case Ho.HTTP_ERROR:const p=c.getStatus();if(Z(At,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const m=function(_){const C=_.toLowerCase().replace(/_/g,"-");return Object.values(z).indexOf(C)>=0?C:z.UNKNOWN}(g.status);l(new re(m,g.message))}else l(new re(z.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new re(z.UNAVAILABLE,"Connection failed."));break;default:me(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{Z(At,`RPC '${e}' ${o} completed.`)}});const u=JSON.stringify(i);Z(At,`RPC '${e}' ${o} sending request:`,i),c.send(n,"POST",u,r,15)})}T_(e,n,r){const i=Lc(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Lg(),a=Vg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");Z(At,`Creating RPC '${e}' stream ${i}: ${u}`,l);const f=o.createWebChannel(u,l);let p=!1,d=!1;const g=new fT({Zo:v=>{d?Z(At,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(p||(Z(At,`Opening RPC '${e}' stream ${i} transport.`),f.open(),p=!0),Z(At,`RPC '${e}' stream ${i} sending:`,v),f.send(v))},Xo:()=>f.close()}),m=(v,_,C)=>{v.listen(_,R=>{try{C(R)}catch(N){setTimeout(()=>{throw N},0)}})};return m(f,os.EventType.OPEN,()=>{d||(Z(At,`RPC '${e}' stream ${i} transport opened.`),g.__())}),m(f,os.EventType.CLOSE,()=>{d||(d=!0,Z(At,`RPC '${e}' stream ${i} transport closed`),g.u_())}),m(f,os.EventType.ERROR,v=>{d||(d=!0,Ti(At,`RPC '${e}' stream ${i} transport errored. Name:`,v.name,"Message:",v.message),g.u_(new re(z.UNAVAILABLE,"The operation could not be completed")))}),m(f,os.EventType.MESSAGE,v=>{var _;if(!d){const C=v.data[0];Oe(!!C,16349);const R=C,N=(R==null?void 0:R.error)||((_=R[0])===null||_===void 0?void 0:_.error);if(N){Z(At,`RPC '${e}' stream ${i} received error:`,N);const x=N.status;let I=function(w){const T=st[w];if(T!==void 0)return g0(T)}(x),E=N.message;I===void 0&&(I=z.INTERNAL,E="Unknown error status: "+x+" with message "+N.message),d=!0,g.u_(new re(I,E)),f.close()}else Z(At,`RPC '${e}' stream ${i} received:`,C),g.c_(C)}}),m(a,Og.STAT_EVENT,v=>{v.stat===Sc.PROXY?Z(At,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Sc.NOPROXY&&Z(At,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.a_()},0),g}}function Kl(){return typeof document<"u"?document:null}/**
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
 */function el(t){return new y_(t,!0)}/**
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
 */class A0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.xi=e,this.timerId=n,this.I_=r,this.E_=i,this.d_=s,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),i=Math.max(0,n-r);i>0&&Z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const jf="PersistentStream";class k0{constructor(e,n,r,i,s,o,a,l){this.xi=e,this.y_=r,this.w_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new A0(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===z.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===z.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.S_===n&&this.K_(r,i)},r=>{e(()=>{const i=new re(z.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(i)})})}K_(e,n){const r=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.W_(i))}),this.stream.onMessage(i=>{r(()=>++this.v_==1?this.z_(i):this.onNext(i))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return Z(jf,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(Z(jf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mT extends k0{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}G_(e,n){return this.connection.T_("Listen",e,n)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const n=w_(this.serializer,e),r=function(s){if(!("targetChange"in s))return ve.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ve.min():o.readTime?gn(o.readTime):ve.min()}(e);return this.listener.j_(n,r)}H_(e){const n={};n.database=Oc(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Ac(l)?{documents:T_(s,l)}:{query:S_(s,l).gt},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=b0(s,o.resumeToken);const c=Dc(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ve.min())>0){a.readTime=va(s,o.snapshotVersion.toTimestamp());const c=Dc(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=C_(this.serializer,e);r&&(n.labels=r),this.L_(n)}J_(e){const n={};n.database=Oc(this.serializer),n.removeTarget=e,this.L_(n)}}class gT extends k0{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return Oe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Oe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=__(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.ea(r,n)}ta(){const e={};e.database=Oc(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>E_(this.serializer,r))};this.L_(n)}}/**
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
 */class vT{}class yT extends vT{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.na=!1}ra(){if(this.na)throw new re(z.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.zo(e,Nc(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new re(z.UNKNOWN,s.toString())})}Yo(e,n,r,i,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Yo(e,Nc(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===z.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new re(z.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class bT{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Ln(n),this.oa=!1):Z("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const Fr="RemoteStore";class xT{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=s,this.Ea.No(o=>{r.enqueueAndForget(async()=>{Gr(this)&&(Z(Fr,"Restarting streams for network reachability change."),await async function(l){const c=ye(l);c.Ta.add(4),await Js(c),c.da.set("Unknown"),c.Ta.delete(4),await tl(c)}(this))})}),this.da=new bT(r,i)}}async function tl(t){if(Gr(t))for(const e of t.Ia)await e(!0)}async function Js(t){for(const e of t.Ia)await e(!1)}function D0(t,e){const n=ye(t);n.Pa.has(e.targetId)||(n.Pa.set(e.targetId,e),Uu(n)?Fu(n):Fi(n).M_()&&Bu(n,e))}function Lu(t,e){const n=ye(t),r=Fi(n);n.Pa.delete(e),r.M_()&&N0(n,e),n.Pa.size===0&&(r.M_()?r.N_():Gr(n)&&n.da.set("Unknown"))}function Bu(t,e){if(t.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ve.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fi(t).H_(e)}function N0(t,e){t.Aa.Ke(e),Fi(t).J_(e)}function Fu(t){t.Aa=new p_({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Pa.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Fi(t).start(),t.da._a()}function Uu(t){return Gr(t)&&!Fi(t).F_()&&t.Pa.size>0}function Gr(t){return ye(t).Ta.size===0}function M0(t){t.Aa=void 0}async function wT(t){t.da.set("Online")}async function ET(t){t.Pa.forEach((e,n)=>{Bu(t,e)})}async function _T(t,e){M0(t),Uu(t)?(t.da.ca(e),Fu(t)):t.da.set("Unknown")}async function TT(t,e,n){if(t.da.set("Online"),e instanceof y0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Pa.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Pa.delete(a),i.Aa.removeTarget(a))}(t,e)}catch(r){Z(Fr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ba(t,r)}else if(e instanceof Xo?t.Aa.Xe(e):e instanceof v0?t.Aa.ot(e):t.Aa.nt(e),!n.isEqual(ve.min()))try{const r=await I0(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.Aa.It(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=s.Pa.get(c);u&&s.Pa.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=s.Pa.get(l);if(!u)return;s.Pa.set(l,u.withResumeToken(_t.EMPTY_BYTE_STRING,u.snapshotVersion)),N0(s,l);const f=new tr(u.target,l,c,u.sequenceNumber);Bu(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){Z(Fr,"Failed to raise snapshot:",r),await ba(t,r)}}async function ba(t,e,n){if(!Bi(e))throw e;t.Ta.add(1),await Js(t),t.da.set("Offline"),n||(n=()=>I0(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(Fr,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await tl(t)})}function O0(t,e){return e().catch(n=>ba(t,n,e))}async function nl(t){const e=ye(t),n=dr(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:Eu;for(;ST(e);)try{const i=await oT(e.localStore,r);if(i===null){e.ha.length===0&&n.N_();break}r=i.batchId,PT(e,i)}catch(i){await ba(e,i)}V0(e)&&L0(e)}function ST(t){return Gr(t)&&t.ha.length<10}function PT(t,e){t.ha.push(e);const n=dr(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function V0(t){return Gr(t)&&!dr(t).F_()&&t.ha.length>0}function L0(t){dr(t).start()}async function CT(t){dr(t).ta()}async function RT(t){const e=dr(t);for(const n of t.ha)e.Z_(n.mutations)}async function IT(t,e,n){const r=t.ha.shift(),i=Au.from(r,e,n);await O0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await nl(t)}async function AT(t,e){e&&dr(t).Y_&&await async function(r,i){if(function(o){return d_(o)&&o!==z.ABORTED}(i.code)){const s=r.ha.shift();dr(r).O_(),await O0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await nl(r)}}(t,e),V0(t)&&L0(t)}async function $f(t,e){const n=ye(t);n.asyncQueue.verifyOperationInProgress(),Z(Fr,"RemoteStore received new credentials");const r=Gr(n);n.Ta.add(3),await Js(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await tl(n)}async function kT(t,e){const n=ye(t);e?(n.Ta.delete(2),await tl(n)):e||(n.Ta.add(2),await Js(n),n.da.set("Unknown"))}function Fi(t){return t.Ra||(t.Ra=function(n,r,i){const s=ye(n);return s.ra(),new mT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{e_:wT.bind(null,t),n_:ET.bind(null,t),i_:_T.bind(null,t),j_:TT.bind(null,t)}),t.Ia.push(async e=>{e?(t.Ra.O_(),Uu(t)?Fu(t):t.da.set("Unknown")):(await t.Ra.stop(),M0(t))})),t.Ra}function dr(t){return t.Va||(t.Va=function(n,r,i){const s=ye(n);return s.ra(),new gT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:CT.bind(null,t),i_:AT.bind(null,t),X_:RT.bind(null,t),ea:IT.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await nl(t)):(await t.Va.stop(),t.ha.length>0&&(Z(Fr,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
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
 */class ju{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Dn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ju(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new re(z.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $u(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),Bi(t))return new re(z.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class yi{static emptySet(e){return new yi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=as(),this.sortedSet=new Ye(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new yi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class zf{constructor(){this.ma=new Ye(ce.comparator)}track(e){const n=e.doc.key,r=this.ma.get(n);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(n,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(n):e.type===1&&r.type===2?this.ma=this.ma.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):me(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(n,e)}ga(){const e=[];return this.ma.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ii{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ii(e,n,yi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class DT{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class NT{constructor(){this.queries=Wf(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,r){const i=ye(n),s=i.queries;i.queries=Wf(),s.forEach((o,a)=>{for(const l of a.ya)l.onError(r)})})(this,new re(z.ABORTED,"Firestore shutting down"))}}function Wf(){return new qr(t=>i0(t),Xa)}async function B0(t,e){const n=ye(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.wa()&&e.Sa()&&(r=2):(s=new DT,r=e.Sa()?0:1);try{switch(r){case 0:s.pa=await n.onListen(i,!0);break;case 1:s.pa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=$u(o,`Initialization of query '${li(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.ya.push(e),e.Da(n.onlineState),s.pa&&e.va(s.pa)&&zu(n)}async function F0(t,e){const n=ye(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ya.indexOf(e);o>=0&&(s.ya.splice(o,1),s.ya.length===0?i=e.Sa()?0:1:!s.wa()&&e.Sa()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MT(t,e){const n=ye(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.ya)a.va(i)&&(r=!0);o.pa=i}}r&&zu(n)}function OT(t,e,n){const r=ye(t),i=r.queries.get(e);if(i)for(const s of i.ya)s.onError(n);r.queries.delete(e)}function zu(t){t.ba.forEach(e=>{e.next()})}var Bc,Hf;(Hf=Bc||(Bc={})).Ca="default",Hf.Cache="cache";class U0{constructor(e,n,r){this.query=e,this.Fa=n,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ii(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),n=!0):this.Na(e,this.onlineState)&&(this.Ba(e),n=!0),this.xa=e,n}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let n=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),n=!0),n}Na(e,n){if(!e.fromCache||!this.Sa())return!0;const r=n!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const n=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ba(e){e=Ii.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==Bc.Cache}}/**
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
 */class j0{constructor(e){this.key=e}}class $0{constructor(e){this.key=e}}class VT{constructor(e,n){this.query=e,this.Ga=n,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Pe(),this.mutatedKeys=Pe(),this.Ha=s0(e),this.Ja=new yi(this.Ha)}get Ya(){return this.Ga}Za(e,n){const r=n?n.Xa:new zf,i=n?n.Ja:this.Ja;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,f)=>{const p=i.get(u),d=Ya(this.query,f)?f:null,g=!!p&&this.mutatedKeys.has(p.key),m=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let v=!1;p&&d?p.data.isEqual(d.data)?g!==m&&(r.track({type:3,doc:d}),v=!0):this.eu(p,d)||(r.track({type:2,doc:d}),v=!0,(l&&this.Ha(d,l)>0||c&&this.Ha(d,c)<0)&&(a=!0)):!p&&d?(r.track({type:0,doc:d}),v=!0):p&&!d&&(r.track({type:1,doc:p}),v=!0,(l||c)&&(a=!0)),v&&(d?(o=o.add(d),s=m?s.add(u):s.delete(u)):(o=o.delete(u),s=s.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),s=s.delete(u.key),r.track({type:1,doc:u})}return{Ja:o,Xa:r,Cs:a,mutatedKeys:s}}eu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((u,f)=>function(d,g){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Vt:v})}};return m(d)-m(g)}(u.type,f.type)||this.Ha(u.doc,f.doc)),this.tu(r),i=i!=null&&i;const a=n&&!i?this.nu():[],l=this.ja.size===0&&this.current&&!i?1:0,c=l!==this.za;return this.za=l,o.length!==0||c?{snapshot:new Ii(this.query,e.Ja,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:a}:{ru:a}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new zf,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(n=>this.Ga=this.Ga.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ga=this.Ga.delete(n)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Pe(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const n=[];return e.forEach(r=>{this.ja.has(r)||n.push(new $0(r))}),this.ja.forEach(r=>{e.has(r)||n.push(new j0(r))}),n}su(e){this.Ga=e.$s,this.ja=Pe();const n=this.Za(e.documents);return this.applyChanges(n,!0)}ou(){return Ii.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Wu="SyncEngine";class LT{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BT{constructor(e){this.key=e,this._u=!1}}class FT{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new qr(a=>i0(a),Xa),this.cu=new Map,this.lu=new Set,this.hu=new Ye(ce.comparator),this.Pu=new Map,this.Tu=new Nu,this.Iu={},this.Eu=new Map,this.du=Ri.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function UT(t,e,n=!0){const r=K0(t);let i;const s=r.uu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ou()):i=await z0(r,e,n,!0),i}async function jT(t,e){const n=K0(t);await z0(n,e,!0,!1)}async function z0(t,e,n,r){const i=await aT(t.localStore,mn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await $T(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&D0(t.remoteStore,i),a}async function $T(t,e,n,r,i){t.Ru=(f,p,d)=>async function(m,v,_,C){let R=v.view.Za(_);R.Cs&&(R=await Lf(m.localStore,v.query,!1).then(({documents:E})=>v.view.Za(E,R)));const N=C&&C.targetChanges.get(v.targetId),x=C&&C.targetMismatches.get(v.targetId)!=null,I=v.view.applyChanges(R,m.isPrimaryClient,N,x);return Gf(m,v.targetId,I.ru),I.snapshot}(t,f,p,d);const s=await Lf(t.localStore,e,!0),o=new VT(e,s.$s),a=o.Za(s.documents),l=Qs.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Gf(t,n,c.ru);const u=new LT(e,n,o);return t.uu.set(e,u),t.cu.has(n)?t.cu.get(n).push(e):t.cu.set(n,[e]),c.snapshot}async function zT(t,e,n){const r=ye(t),i=r.uu.get(e),s=r.cu.get(i.targetId);if(s.length>1)return r.cu.set(i.targetId,s.filter(o=>!Xa(o,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Vc(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Lu(r.remoteStore,i.targetId),Fc(r,i.targetId)}).catch(Li)):(Fc(r,i.targetId),await Vc(r.localStore,i.targetId,!0))}async function WT(t,e){const n=ye(t),r=n.uu.get(e),i=n.cu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Lu(n.remoteStore,r.targetId))}async function HT(t,e,n){const r=JT(t);try{const i=await function(o,a){const l=ye(o),c=ct.now(),u=a.reduce((d,g)=>d.add(g.key),Pe());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Bn(),m=Pe();return l.Bs.getEntries(d,u).next(v=>{g=v,g.forEach((_,C)=>{C.isValidDocument()||(m=m.add(_))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,g)).next(v=>{f=v;const _=[];for(const C of a){const R=a_(C,f.get(C.key).overlayedDocument);R!=null&&_.push(new yr(C.key,R,Qg(R.value.mapValue),cn.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,_,a)}).next(v=>{p=v;const _=v.applyToLocalDocumentSet(f,m);return l.documentOverlayCache.saveOverlays(d,v.batchId,_)})}).then(()=>({batchId:p.batchId,changes:a0(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Iu[o.currentUser.toKey()];c||(c=new Ye(we)),c=c.insert(a,l),o.Iu[o.currentUser.toKey()]=c}(r,i.batchId,n),await Zs(r,i.changes),await nl(r.remoteStore)}catch(i){const s=$u(i,"Failed to persist write");n.reject(s)}}async function W0(t,e){const n=ye(t);try{const r=await iT(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Pu.get(s);o&&(Oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o._u=!0:i.modifiedDocuments.size>0?Oe(o._u,14607):i.removedDocuments.size>0&&(Oe(o._u,42227),o._u=!1))}),await Zs(n,r,e)}catch(r){await Li(r)}}function qf(t,e,n){const r=ye(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.uu.forEach((s,o)=>{const a=o.view.Da(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ye(o);l.onlineState=a;let c=!1;l.queries.forEach((u,f)=>{for(const p of f.ya)p.Da(a)&&(c=!0)}),c&&zu(l)}(r.eventManager,e),i.length&&r.au.j_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qT(t,e,n){const r=ye(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Pu.get(e),s=i&&i.key;if(s){let o=new Ye(ce.comparator);o=o.insert(s,Nt.newNoDocument(s,ve.min()));const a=Pe().add(s),l=new Za(ve.min(),new Map,new Ye(we),o,a);await W0(r,l),r.hu=r.hu.remove(s),r.Pu.delete(e),Hu(r)}else await Vc(r.localStore,e,!1).then(()=>Fc(r,e,n)).catch(Li)}async function GT(t,e){const n=ye(t),r=e.batch.batchId;try{const i=await rT(n.localStore,e);q0(n,r,null),H0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zs(n,i)}catch(i){await Li(i)}}async function KT(t,e,n){const r=ye(t);try{const i=await function(o,a){const l=ye(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(Oe(f!==null,37113),u=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);q0(r,e,n),H0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zs(r,i)}catch(i){await Li(i)}}function H0(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function q0(t,e,n){const r=ye(t);let i=r.Iu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Iu[r.currentUser.toKey()]=i}}function Fc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.cu.get(e))t.uu.delete(r),n&&t.au.Vu(r,n);t.cu.delete(e),t.isPrimaryClient&&t.Tu.Hr(e).forEach(r=>{t.Tu.containsKey(r)||G0(t,r)})}function G0(t,e){t.lu.delete(e.path.canonicalString());const n=t.hu.get(e);n!==null&&(Lu(t.remoteStore,n),t.hu=t.hu.remove(e),t.Pu.delete(n),Hu(t))}function Gf(t,e,n){for(const r of n)r instanceof j0?(t.Tu.addReference(r.key,e),XT(t,r)):r instanceof $0?(Z(Wu,"Document no longer in limbo: "+r.key),t.Tu.removeReference(r.key,e),t.Tu.containsKey(r.key)||G0(t,r.key)):me(19791,{mu:r})}function XT(t,e){const n=e.key,r=n.path.canonicalString();t.hu.get(n)||t.lu.has(r)||(Z(Wu,"New document in limbo: "+n),t.lu.add(r),Hu(t))}function Hu(t){for(;t.lu.size>0&&t.hu.size<t.maxConcurrentLimboResolutions;){const e=t.lu.values().next().value;t.lu.delete(e);const n=new ce(Ge.fromString(e)),r=t.du.next();t.Pu.set(r,new BT(n)),t.hu=t.hu.insert(n,r),D0(t.remoteStore,new tr(mn(Cu(n.path)),r,"TargetPurposeLimboResolution",Ha.le))}}async function Zs(t,e,n){const r=ye(t),i=[],s=[],o=[];r.uu.isEmpty()||(r.uu.forEach((a,l)=>{o.push(r.Ru(l,e,n).then(c=>{var u;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(u=n==null?void 0:n.targetChanges.get(l.targetId))===null||u===void 0?void 0:u.current;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(c){i.push(c);const f=Ou.Rs(l.targetId,c);s.push(f)}}))}),await Promise.all(o),r.au.j_(i),await async function(l,c){const u=ye(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(c,p=>j.forEach(p.ds,d=>u.persistence.referenceDelegate.addReference(f,p.targetId,d)).next(()=>j.forEach(p.As,d=>u.persistence.referenceDelegate.removeReference(f,p.targetId,d)))))}catch(f){if(!Bi(f))throw f;Z(Vu,"Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const d=u.xs.get(p),g=d.snapshotVersion,m=d.withLastLimboFreeSnapshotVersion(g);u.xs=u.xs.insert(p,m)}}}(r.localStore,s))}async function YT(t,e){const n=ye(t);if(!n.currentUser.isEqual(e)){Z(Wu,"User change. New user:",e.toKey());const r=await R0(n.localStore,e);n.currentUser=e,function(s,o){s.Eu.forEach(a=>{a.forEach(l=>{l.reject(new re(z.CANCELLED,o))})}),s.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zs(n,r.ks)}}function QT(t,e){const n=ye(t),r=n.Pu.get(e);if(r&&r._u)return Pe().add(r.key);{let i=Pe();const s=n.cu.get(e);if(!s)return i;for(const o of s){const a=n.uu.get(o);i=i.unionWith(a.view.Ya)}return i}}function K0(t){const e=ye(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=W0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=QT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qT.bind(null,e),e.au.j_=MT.bind(null,e.eventManager),e.au.Vu=OT.bind(null,e.eventManager),e}function JT(t){const e=ye(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=GT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KT.bind(null,e),e}class xa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=el(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return nT(this.persistence,new Z_,e.initialUser,this.serializer)}yu(e){return new C0(Mu.fi,this.serializer)}pu(e){return new cT}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}xa.provider={build:()=>new xa};class ZT extends xa{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){Oe(this.persistence.referenceDelegate instanceof ya,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new B_(r,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?Ut.withCacheSize(this.cacheSizeBytes):Ut.DEFAULT;return new C0(r=>ya.fi(r,n),this.serializer)}}class Uc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=YT.bind(null,this.syncEngine),await kT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new NT}()}createDatastore(e){const n=el(e.databaseInfo.databaseId),r=function(s){return new pT(s)}(e.databaseInfo);return function(s,o,a,l){return new yT(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new xT(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>qf(this.syncEngine,n,0),function(){return Uf.C()?new Uf:new uT}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,u){const f=new FT(i,s,o,a,l,c);return u&&(f.Au=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ye(i);Z(Fr,"RemoteStore shutting down."),s.Ta.add(5),await Js(s),s.Ea.shutdown(),s.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Uc.provider={build:()=>new Uc};/**
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
 */class X0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const fr="FirestoreClient";class eS{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Dt.UNAUTHENTICATED,this.clientId=jg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{Z(fr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Z(fr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Dn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$u(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Xl(t,e){t.asyncQueue.verifyOperationInProgress(),Z(fr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await R0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Kf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tS(t);Z(fr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>$f(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>$f(e.remoteStore,i)),t._onlineComponents=e}async function tS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(fr,"Using user provided OfflineComponentProvider");try{await Xl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===z.FAILED_PRECONDITION||i.code===z.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ti("Error using user provided cache. Falling back to memory cache: "+n),await Xl(t,new xa)}}else Z(fr,"Using default OfflineComponentProvider"),await Xl(t,new ZT(void 0));return t._offlineComponents}async function Y0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(fr,"Using user provided OnlineComponentProvider"),await Kf(t,t._uninitializedComponentsProvider._online)):(Z(fr,"Using default OnlineComponentProvider"),await Kf(t,new Uc))),t._onlineComponents}function nS(t){return Y0(t).then(e=>e.syncEngine)}async function Q0(t){const e=await Y0(t),n=e.eventManager;return n.onListen=UT.bind(null,e.syncEngine),n.onUnlisten=zT.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=jT.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WT.bind(null,e.syncEngine),n}function rS(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new X0({next:p=>{u.Cu(),o.enqueueAndForget(()=>F0(s,f));const d=p.docs.has(a);!d&&p.fromCache?c.reject(new re(z.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&p.fromCache&&l&&l.source==="server"?c.reject(new re(z.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new U0(Cu(a.path),u,{includeMetadataChanges:!0,La:!0});return B0(s,f)}(await Q0(t),t.asyncQueue,e,n,r)),r.promise}function iS(t,e,n={}){const r=new Dn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const u=new X0({next:p=>{u.Cu(),o.enqueueAndForget(()=>F0(s,f)),p.fromCache&&l.source==="server"?c.reject(new re(z.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new U0(a,u,{includeMetadataChanges:!0,La:!0});return B0(s,f)}(await Q0(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function J0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Xf=new Map;/**
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
 */function Z0(t,e,n){if(!n)throw new re(z.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sS(t,e,n,r){if(e===!0&&r===!0)throw new re(z.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yf(t){if(!ce.isDocumentKey(t))throw new re(z.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qf(t){if(ce.isDocumentKey(t))throw new re(z.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function qu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me(12329,{type:typeof t})}function Tn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new re(z.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qu(t);throw new re(z.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const ev="firestore.googleapis.com",Jf=!0;class Zf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new re(z.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ev,this.ssl=Jf}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Jf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=P0;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<V_)throw new re(z.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=J0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new re(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new re(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new re(z.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class rl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new re(z.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new re(z.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dE;switch(r.type){case"firstParty":return new gE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new re(z.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,Wa("Firestore",this._settings.isUsingEmulator),this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xf.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Xf.delete(n),r.terminate())}(this),Promise.resolve()}}function oS(t,e,n,r={}){var i;t=Tn(t,rl);const s=Gs(e),o=t._getSettings(),a=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;o.host!==ev&&o.host!==l&&Ti("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c=Object.assign(Object.assign({},o),{host:l,ssl:s,emulatorOptions:r});if(!Vr(c,a)&&(t._setSettings(c),s&&(Sg(`https://${l}`),Wa("Firestore",!0)),r.mockUserToken)){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=Dt.MOCK_USER;else{u=Fx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new re(z.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Dt(p)}t._authCredentials=new fE(new Fg(u,f))}}/**
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
 */class il{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new il(this.firestore,e,this._query)}}class $t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $t(this.firestore,e,this._key)}}class ar extends il{constructor(e,n,r){super(e,n,Cu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $t(this.firestore,null,new ce(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function Kr(t,e,...n){if(t=Et(t),Z0("collection","path",e),t instanceof rl){const r=Ge.fromString(e,...n);return Qf(r),new ar(t,null,r)}{if(!(t instanceof $t||t instanceof ar))throw new re(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return Qf(r),new ar(t.firestore,null,r)}}function le(t,e,...n){if(t=Et(t),arguments.length===1&&(e=jg.newId()),Z0("doc","path",e),t instanceof rl){const r=Ge.fromString(e,...n);return Yf(r),new $t(t,null,new ce(r))}{if(!(t instanceof $t||t instanceof ar))throw new re(z.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ge.fromString(e,...n));return Yf(r),new $t(t.firestore,t instanceof ar?t.converter:null,new ce(r))}}/**
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
 */const ep="AsyncQueue";class tp{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new A0(this,"async_queue_retry"),this.ec=()=>{const r=Kl();r&&Z(ep,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const n=Kl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=Kl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new Dn;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!Bi(e))throw e;Z(ep,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Ln("INTERNAL UNHANDLED ERROR: ",np(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=n,n}enqueueAfterDelay(e,n,r){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const i=ju.createAndSchedule(this,e,n,r,s=>this.oc(s));return this.Hu.push(i),i}nc(){this.Ju&&me(47125,{_c:np(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function np(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ui extends rl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new tp,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new tp(e),this._firestoreClient=void 0,await e}}}function tv(t,e){const n=typeof t=="object"?t:Ig(),r=typeof t=="string"?t:ha,i=xu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Lx("firestore");s&&oS(i,...s)}return i}function Gu(t){if(t._terminated)throw new re(z.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||aS(t),t._firestoreClient}function aS(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,u){return new kE(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,J0(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new eS(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Ai{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ai(_t.fromBase64String(e))}catch(n){throw new re(z.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ai(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class sl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new re(z.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ku{constructor(e){this._methodName=e}}/**
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
 */class Xu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new re(z.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new re(z.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */class Yu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const lS=/^__.*__$/;class cS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ys(e,this.data,n,this.fieldTransforms)}}class nv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function rv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{hc:t})}}class Qu{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Qu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tc({path:r,Ec:!1});return i.dc(e),i}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tc({path:r,Ec:!1});return i.Pc(),i}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return wa(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(rv(this.hc)&&lS.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class uS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||el(e)}gc(e,n,r,i=!1){return new Qu({hc:e,methodName:n,fc:r,path:wt.emptyPath(),Ec:!1,mc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iv(t){const e=t._freezeSettings(),n=el(t._databaseId);return new uS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hS(t,e,n,r,i,s={}){const o=t.gc(s.merge||s.mergeFields?2:0,e,n,i);Ju("Data must be an object, but it was:",o,r);const a=sv(r,o);let l,c;if(s.merge)l=new qt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const u=[];for(const f of s.mergeFields){const p=jc(e,f,n);if(!o.contains(p))throw new re(z.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);av(u,p)||u.push(p)}l=new qt(u),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new cS(new jt(a),l,c)}class ol extends Ku{_toFieldTransform(e){if(e.hc!==2)throw e.hc===1?e.Vc(`${this._methodName}() can only appear at the top level of your update data`):e.Vc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ol}}function dS(t,e,n,r){const i=t.gc(1,e,n);Ju("Data must be an object, but it was:",i,r);const s=[],o=jt.empty();vr(r,(l,c)=>{const u=Zu(e,l,n);c=Et(c);const f=i.Ac(u);if(c instanceof ol)s.push(u);else{const p=al(c,f);p!=null&&(s.push(u),o.set(u,p))}});const a=new qt(s);return new nv(o,a,i.fieldTransforms)}function fS(t,e,n,r,i,s){const o=t.gc(1,e,n),a=[jc(e,r,n)],l=[i];if(s.length%2!=0)throw new re(z.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)a.push(jc(e,s[p])),l.push(s[p+1]);const c=[],u=jt.empty();for(let p=a.length-1;p>=0;--p)if(!av(c,a[p])){const d=a[p];let g=l[p];g=Et(g);const m=o.Ac(d);if(g instanceof ol)c.push(d);else{const v=al(g,m);v!=null&&(c.push(d),u.set(d,v))}}const f=new qt(c);return new nv(u,f,o.fieldTransforms)}function al(t,e){if(ov(t=Et(t)))return Ju("Unsupported field value:",e,t),sv(t,e);if(t instanceof Ku)return function(r,i){if(!rv(i.hc))throw i.Vc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Vc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=al(a,i.Rc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return t_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ct.fromDate(r);return{timestampValue:va(i.serializer,s)}}if(r instanceof ct){const s=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:va(i.serializer,s)}}if(r instanceof Xu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ai)return{bytesValue:b0(i.serializer,r._byteString)};if(r instanceof $t){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Du(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Yu)return function(o,a){return{mapValue:{fields:{[Xg]:{stringValue:Yg},[da]:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.Vc("VectorValues must only contain numeric values.");return Ru(a.serializer,c)})}}}}}}(r,i);throw i.Vc(`Unsupported field value: ${qu(r)}`)}(t,e)}function sv(t,e){const n={};return zg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(t,(r,i)=>{const s=al(i,e.Ic(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function ov(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof Xu||t instanceof Ai||t instanceof $t||t instanceof Ku||t instanceof Yu)}function Ju(t,e,n){if(!ov(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=qu(n);throw r==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+r)}}function jc(t,e,n){if((e=Et(e))instanceof sl)return e._internalPath;if(typeof e=="string")return Zu(t,e);throw wa("Field path arguments must be of type string or ",t,!1,void 0,n)}const pS=new RegExp("[~\\*/\\[\\]]");function Zu(t,e,n){if(e.search(pS)>=0)throw wa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sl(...e.split("."))._internalPath}catch{throw wa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wa(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new re(z.INVALID_ARGUMENT,a+t+l)}function av(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class lv{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new mS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(cv("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class mS extends lv{data(){return super.data()}}function cv(t,e){return typeof e=="string"?Zu(t,e):e instanceof sl?e._internalPath:e._delegate._internalPath}/**
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
 */function gS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new re(z.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class vS{convertValue(e,n="none"){switch(hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return nt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[da].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>nt(o.doubleValue));return new Yu(s)}convertGeoPoint(e){return new Xu(nt(e.latitude),nt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Ga(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ds(e));default:return null}}convertTimestamp(e){const n=cr(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ge.fromString(e);Oe(S0(r),9688,{name:e});const i=new Ns(r.get(1),r.get(3)),s=new ce(r.popFirst(5));return i.isEqual(n)||Ln(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function yS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class cs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uv extends lv{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Yo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(cv("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Yo extends uv{data(e={}){return super.data(e)}}class bS{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new cs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Yo(this._firestore,this._userDataWriter,r.key,r,new cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new re(z.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new Yo(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new Yo(i._firestore,i._userDataWriter,a.doc.key,a.doc,new cs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:xS(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function xS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:t})}}/**
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
 */function eo(t){t=Tn(t,$t);const e=Tn(t.firestore,Ui);return rS(Gu(e),t._key).then(n=>wS(e,t,n))}class hv extends vS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ai(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new $t(this.firestore,null,n)}}function Xr(t){t=Tn(t,il);const e=Tn(t.firestore,Ui),n=Gu(e),r=new hv(e);return gS(t._query),iS(n,t._query).then(i=>new bS(e,r,t,i))}function on(t,e,n){t=Tn(t,$t);const r=Tn(t.firestore,Ui),i=yS(t.converter,e,n);return eh(r,[hS(iv(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,cn.none())])}function je(t,e,n,...r){t=Tn(t,$t);const i=Tn(t.firestore,Ui),s=iv(i);let o;return o=typeof(e=Et(e))=="string"||e instanceof sl?fS(s,"updateDoc",t._key,e,n,r):dS(s,"updateDoc",t._key,e),eh(i,[o.toMutation(t._key,cn.exists(!0))])}function pn(t){return eh(Tn(t.firestore,Ui),[new Iu(t._key,cn.none())])}function eh(t,e){return function(r,i){const s=new Dn;return r.asyncQueue.enqueueAndForget(async()=>HT(await nS(r),i,s)),s.promise}(Gu(t),e)}function wS(t,e,n){const r=n.docs.get(e._key),i=new hv(t);return new uv(t,i,e._key,r,new cs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Vi=i})(Oi),_i(new Lr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ui(new pE(r.getProvider("auth-internal")),new vE(o,r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new re(z.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ns(c.options.projectId,u)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),sr(af,lf,e),sr(af,lf,"esm2017")})();var ES="firebase",_S="11.8.0";/**
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
 */sr(ES,_S,"app");function th(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function dv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TS=dv,fv=new Ks("auth","Firebase",dv());/**
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
 */const Ea=new yu("@firebase/auth");function SS(t,...e){Ea.logLevel<=Se.WARN&&Ea.warn(`Auth (${Oi}): ${t}`,...e)}function Qo(t,...e){Ea.logLevel<=Se.ERROR&&Ea.error(`Auth (${Oi}): ${t}`,...e)}/**
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
 */function un(t,...e){throw nh(t,...e)}function vn(t,...e){return nh(t,...e)}function pv(t,e,n){const r=Object.assign(Object.assign({},TS()),{[e]:n});return new Ks("auth","Firebase",r).create(e,{appName:t.name})}function Nn(t){return pv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fv.create(t,...e)}function pe(t,e,...n){if(!t)throw nh(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qo(e),new Error(e)}function Fn(t,e){t||An(e)}/**
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
 */function $c(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function PS(){return rp()==="http:"||rp()==="https:"}function rp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function CS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(PS()||Hx()||"connection"in navigator)?navigator.onLine:!0}function RS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class to{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=$x()||qx()}get(){return CS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rh(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class mv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const IS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const AS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kS=new to(3e4,6e4);function br(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xr(t,e,n,r,i={}){return gv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Xs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return Wx()||(c.referrerPolicy="no-referrer"),t.emulatorConfig&&Gs(t.emulatorConfig.host)&&(c.credentials="include"),mv.fetch()(await vv(t,t.config.apiHost,n,a),c)})}async function gv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},IS),e);try{const i=new NS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Oo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Oo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Oo(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw pv(t,u,c);un(t,u)}}catch(i){if(i instanceof jn)throw i;un(t,"network-request-failed",{message:String(i)})}}async function no(t,e,n,r,i={}){const s=await xr(t,e,n,r,i);return"mfaPendingCredential"in s&&un(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function vv(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?rh(t.config,i):`${t.config.apiScheme}://${i}`;return AS.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function DS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class NS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(vn(this.auth,"network-request-failed")),kS.get())})}}function Oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=vn(t,e,r);return i.customData._tokenResponse=n,i}function ip(t){return t!==void 0&&t.enterprise!==void 0}class MS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return DS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function OS(t,e){return xr(t,"GET","/v2/recaptchaConfig",br(t,e))}/**
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
 */async function VS(t,e){return xr(t,"POST","/v1/accounts:delete",e)}async function _a(t,e){return xr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LS(t,e=!1){const n=Et(t),r=await n.getIdToken(e),i=ih(r);pe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xs(Yl(i.auth_time)),issuedAtTime:xs(Yl(i.iat)),expirationTime:xs(Yl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Yl(t){return Number(t)*1e3}function ih(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qo("JWT malformed, contained fewer than 3 sections"),null;try{const i=wg(n);return i?JSON.parse(i):(Qo("Failed to decode base64 JWT payload"),null)}catch(i){return Qo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function sp(t){const e=ih(t);return pe(e,"internal-error"),pe(typeof e.exp<"u","internal-error"),pe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ls(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof jn&&BS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class FS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ta(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ls(t,_a(n,{idToken:r}));pe(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?yv(s.providerUserInfo):[],a=jS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new zc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function US(t){const e=Et(t);await Ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yv(t){return t.map(e=>{var{providerId:n}=e,r=th(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function $S(t,e){const n=await gv(t,{},async()=>{const r=Xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await vv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zS(t,e){return xr(t,"POST","/v2/accounts:revokeToken",br(t,e))}/**
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
 */class bi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){pe(e.idToken,"internal-error"),pe(typeof e.idToken<"u","internal-error"),pe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){pe(e.length!==0,"internal-error");const n=sp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $S(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new bi;return r&&(pe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(pe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(pe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bi,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function qn(t,e){pe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class an{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=th(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new zc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return pe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LS(this,e)}reload(){return US(this)}_assign(e){this!==e&&(pe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new an(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){pe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(Nn(this.auth));const e=await this.getIdToken();return await Ls(this,VS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,d=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,m=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,C=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:R,emailVerified:N,isAnonymous:x,providerData:I,stsTokenManager:E}=n;pe(R&&E,e,"internal-error");const y=bi.fromJSON(this.name,E);pe(typeof R=="string",e,"internal-error"),qn(f,e.name),qn(p,e.name),pe(typeof N=="boolean",e,"internal-error"),pe(typeof x=="boolean",e,"internal-error"),qn(d,e.name),qn(g,e.name),qn(m,e.name),qn(v,e.name),qn(_,e.name),qn(C,e.name);const w=new an({uid:R,auth:e,email:p,emailVerified:N,displayName:f,isAnonymous:x,photoURL:g,phoneNumber:d,tenantId:m,stsTokenManager:y,createdAt:_,lastLoginAt:C});return I&&Array.isArray(I)&&(w.providerData=I.map(T=>Object.assign({},T))),v&&(w._redirectEventId=v),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new bi;i.updateFromServerResponse(n);const s=new an({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ta(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];pe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?yv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new bi;a.updateFromIdToken(r);const l=new an({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new zc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const op=new Map;function kn(t){Fn(t instanceof Function,"Expected a class definition");let e=op.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,op.set(t,e),e)}/**
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
 */class bv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bv.type="NONE";const ap=bv;/**
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
 */function Jo(t,e,n){return`firebase:${t}:${e}:${n}`}class xi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Jo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Jo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _a(this.auth,{idToken:e}).catch(()=>{});return n?an._fromGetAccountInfoResponse(this.auth,n,e):null}return an._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xi(kn(ap),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||kn(ap);const o=Jo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let f;if(typeof u=="string"){const p=await _a(e,{idToken:u}).catch(()=>{});if(!p)break;f=await an._fromGetAccountInfoResponse(e,p,u)}else f=an._fromJSON(e,u);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new xi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new xi(s,e,r))}}/**
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
 */function lp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_v(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Sv(e))return"Blackberry";if(Pv(e))return"Webos";if(wv(e))return"Safari";if((e.includes("chrome/")||Ev(e))&&!e.includes("edge/"))return"Chrome";if(Tv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xv(t=Ot()){return/firefox\//i.test(t)}function wv(t=Ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ev(t=Ot()){return/crios\//i.test(t)}function _v(t=Ot()){return/iemobile/i.test(t)}function Tv(t=Ot()){return/android/i.test(t)}function Sv(t=Ot()){return/blackberry/i.test(t)}function Pv(t=Ot()){return/webos/i.test(t)}function sh(t=Ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WS(t=Ot()){var e;return sh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HS(){return Gx()&&document.documentMode===10}function Cv(t=Ot()){return sh(t)||Tv(t)||Pv(t)||Sv(t)||/windows phone/i.test(t)||_v(t)}/**
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
 */function Rv(t,e=[]){let n;switch(t){case"Browser":n=lp(Ot());break;case"Worker":n=`${lp(Ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Oi}/${r}`}/**
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
 */class qS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function GS(t,e={}){return xr(t,"GET","/v2/passwordPolicy",br(t,e))}/**
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
 */const KS=6;class XS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:KS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class YS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cp(this),this.idTokenSubscription=new cp(this),this.beforeStateQueue=new qS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await xi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _a(this,{idToken:e}),r=await an._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return pe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ta(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=RS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(Nn(this));const n=e?Et(e):null;return n&&pe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&pe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GS(this),n=new XS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ks("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;pe(n,this,"argument-error"),this.redirectPersistenceManager=await xi.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(pe(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return pe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&SS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yr(t){return Et(t)}class cp{constructor(e){this.auth=e,this.observer=null,this.addObserver=tw(n=>this.observer=n)}get next(){return pe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ll={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function QS(t){ll=t}function Iv(t){return ll.loadJS(t)}function JS(){return ll.recaptchaEnterpriseScript}function ZS(){return ll.gapiScript}function e5(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class t5{constructor(){this.enterprise=new n5}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class n5{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const r5="recaptcha-enterprise",Av="NO_RECAPTCHA";class i5{constructor(e){this.type=r5,this.auth=Yr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{OS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new MS(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ip(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(Av)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new t5().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ip(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=JS();l.length!==0&&(l+=a),Iv(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function up(t,e,n,r=!1,i=!1){const s=new i5(t);let o;if(i)o=Av;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Wc(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await up(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await up(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
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
 */function s5(t,e){const n=xu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Vr(s,e??{}))return i;un(i,"already-initialized")}return n.initialize({options:e})}function o5(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function a5(t,e,n){const r=Yr(t);pe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=kv(e),{host:o,port:a}=l5(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){pe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),pe(Vr(c,r.config.emulator)&&Vr(u,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,Gs(o)?(Wa("Auth",!0),Sg(`${s}//${o}${l}`)):c5()}function kv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function l5(t){const e=kv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:hp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:hp(o)}}}function hp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function c5(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class oh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}async function u5(t,e){return xr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function h5(t,e){return no(t,"POST","/v1/accounts:signInWithPassword",br(t,e))}/**
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
 */async function d5(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}async function f5(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",br(t,e))}/**
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
 */class Bs extends oh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Bs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Bs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wc(e,n,"signInWithPassword",h5);case"emailLink":return d5(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Wc(e,r,"signUpPassword",u5);case"emailLink":return f5(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function wi(t,e){return no(t,"POST","/v1/accounts:signInWithIdp",br(t,e))}/**
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
 */const p5="http://localhost";class Ur extends oh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=th(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ur(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return wi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,wi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,wi(e,n)}buildRequest(){const e={requestUri:p5,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xs(n)}return e}}/**
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
 */function m5(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function g5(t){const e=is(ss(t)).link,n=e?is(ss(e)).deep_link_id:null,r=is(ss(t)).deep_link_id;return(r?is(ss(r)).link:null)||r||n||e||t}class ah{constructor(e){var n,r,i,s,o,a;const l=is(ss(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,f=m5((i=l.mode)!==null&&i!==void 0?i:null);pe(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=g5(e);try{return new ah(n)}catch{return null}}}/**
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
 */class ji{constructor(){this.providerId=ji.PROVIDER_ID}static credential(e,n){return Bs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ah.parseLink(n);return pe(r,"argument-error"),Bs._fromEmailAndCode(e,r.code,r.tenantId)}}ji.PROVIDER_ID="password";ji.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ji.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Dv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ro extends Dv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends ro{constructor(){super("facebook.com")}static credential(e){return Ur._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class Qn extends ro{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ur._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
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
 */class Jn extends ro{constructor(){super("github.com")}static credential(e){return Ur._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class Zn extends ro{constructor(){super("twitter.com")}static credential(e,n){return Ur._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */async function v5(t,e){return no(t,"POST","/v1/accounts:signUp",br(t,e))}/**
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
 */class jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await an._fromIdTokenResponse(e,r,i),o=dp(r);return new jr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=dp(r);return new jr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function dp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Sa extends jn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Sa(e,n,r,i)}}function Nv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Sa._fromErrorAndOperation(t,s,e,r):s})}async function y5(t,e,n=!1){const r=await Ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jr._forOperation(t,"link",r)}/**
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
 */async function b5(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(Nn(r));const i="reauthenticate";try{const s=await Ls(t,Nv(r,i,e,t),n);pe(s.idToken,r,"internal-error");const o=ih(s.idToken);pe(o,r,"internal-error");const{sub:a}=o;return pe(t.uid===a,r,"user-mismatch"),jr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&un(r,"user-mismatch"),s}}/**
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
 */async function Mv(t,e,n=!1){if(Jt(t.app))return Promise.reject(Nn(t));const r="signIn",i=await Nv(t,r,e),s=await jr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function x5(t,e){return Mv(Yr(t),e)}/**
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
 */async function Ov(t){const e=Yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function w5(t,e,n){if(Jt(t.app))return Promise.reject(Nn(t));const r=Yr(t),o=await Wc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",v5).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Ov(t),l}),a=await jr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function E5(t,e,n){return Jt(t.app)?Promise.reject(Nn(t)):x5(Et(t),ji.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ov(t),r})}function _5(t,e,n,r){return Et(t).onIdTokenChanged(e,n,r)}function T5(t,e,n){return Et(t).beforeAuthStateChanged(e,n)}function pr(t,e,n,r){return Et(t).onAuthStateChanged(e,n,r)}function S5(t){return Et(t).signOut()}const Pa="__sak";/**
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
 */class Vv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pa,"1"),this.storage.removeItem(Pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const P5=1e3,C5=10;class Lv extends Vv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);HS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,C5):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},P5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Lv.type="LOCAL";const R5=Lv;/**
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
 */class Bv extends Vv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bv.type="SESSION";const Fv=Bv;/**
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
 */function I5(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class cl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new cl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await I5(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}cl.receivers=[];/**
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
 */function lh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class A5{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=lh("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function yn(){return window}function k5(t){yn().location.href=t}/**
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
 */function Uv(){return typeof yn().WorkerGlobalScope<"u"&&typeof yn().importScripts=="function"}async function D5(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function N5(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function M5(){return Uv()?self:null}/**
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
 */const jv="firebaseLocalStorageDb",O5=1,Ca="firebaseLocalStorage",$v="fbase_key";class io{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ul(t,e){return t.transaction([Ca],e?"readwrite":"readonly").objectStore(Ca)}function V5(){const t=indexedDB.deleteDatabase(jv);return new io(t).toPromise()}function Hc(){const t=indexedDB.open(jv,O5);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ca,{keyPath:$v})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ca)?e(r):(r.close(),await V5(),e(await Hc()))})})}async function fp(t,e,n){const r=ul(t,!0).put({[$v]:e,value:n});return new io(r).toPromise()}async function L5(t,e){const n=ul(t,!1).get(e),r=await new io(n).toPromise();return r===void 0?null:r.value}function pp(t,e){const n=ul(t,!0).delete(e);return new io(n).toPromise()}const B5=800,F5=3;class zv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>F5)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cl._getInstance(M5()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await D5(),!this.activeServiceWorker)return;this.sender=new A5(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||N5()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hc();return await fp(e,Pa,"1"),await pp(e,Pa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>L5(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>pp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ul(i,!1).getAll();return new io(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),B5)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zv.type="LOCAL";const U5=zv;new to(3e4,6e4);/**
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
 */function j5(t,e){return e?kn(e):(pe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ch extends oh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return wi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return wi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return wi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $5(t){return Mv(t.auth,new ch(t),t.bypassAuthState)}function z5(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),b5(n,new ch(t),t.bypassAuthState)}async function W5(t){const{auth:e,user:n}=t;return pe(n,e,"internal-error"),y5(n,new ch(t),t.bypassAuthState)}/**
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
 */class Wv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $5;case"linkViaPopup":case"linkViaRedirect":return W5;case"reauthViaPopup":case"reauthViaRedirect":return z5;default:un(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const H5=new to(2e3,1e4);class di extends Wv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,di.currentPopupAction&&di.currentPopupAction.cancel(),di.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return pe(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=lh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,di.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,H5.get())};e()}}di.currentPopupAction=null;/**
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
 */const q5="pendingRedirect",Zo=new Map;class G5 extends Wv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Zo.get(this.auth._key());if(!e){try{const r=await K5(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Zo.set(this.auth._key(),e)}return this.bypassAuthState||Zo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function K5(t,e){const n=Q5(e),r=Y5(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function X5(t,e){Zo.set(t._key(),e)}function Y5(t){return kn(t._redirectPersistence)}function Q5(t){return Jo(q5,t.config.apiKey,t.name)}async function J5(t,e,n=!1){if(Jt(t.app))return Promise.reject(Nn(t));const r=Yr(t),i=j5(r,e),o=await new G5(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Z5=10*60*1e3;class eP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Hv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Z5&&this.cachedEventUids.clear(),this.cachedEventUids.has(mp(e))}saveEventToCache(e){this.cachedEventUids.add(mp(e)),this.lastProcessedEventTime=Date.now()}}function mp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Hv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hv(t);default:return!1}}/**
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
 */async function nP(t,e={}){return xr(t,"GET","/v1/projects",e)}/**
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
 */const rP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iP=/^https?/;async function sP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nP(t);for(const n of e)try{if(oP(n))return}catch{}un(t,"unauthorized-domain")}function oP(t){const e=$c(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iP.test(n))return!1;if(rP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const aP=new to(3e4,6e4);function gp(){const t=yn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lP(t){return new Promise((e,n)=>{var r,i,s;function o(){gp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gp(),n(vn(t,"network-request-failed"))},timeout:aP.get()})}if(!((i=(r=yn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=yn().gapi)===null||s===void 0)&&s.load)o();else{const a=e5("iframefcb");return yn()[a]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},Iv(`${ZS()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ea=null,e})}let ea=null;function cP(t){return ea=ea||lP(t),ea}/**
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
 */const uP=new to(5e3,15e3),hP="__/auth/iframe",dP="emulator/auth/iframe",fP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mP(t){const e=t.config;pe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?rh(e,dP):`https://${t.config.authDomain}/${hP}`,r={apiKey:e.apiKey,appName:t.name,v:Oi},i=pP.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xs(r).slice(1)}`}async function gP(t){const e=await cP(t),n=yn().gapi;return pe(n,t,"internal-error"),e.open({where:document.body,url:mP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fP,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),a=yn().setTimeout(()=>{s(o)},uP.get());function l(){yn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const vP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yP=500,bP=600,xP="_blank",wP="http://localhost";class vp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function EP(t,e,n,r=yP,i=bP){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},vP),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ot().toLowerCase();n&&(a=Ev(c)?xP:n),xv(c)&&(e=e||wP,l.scrollbars="yes");const u=Object.entries(l).reduce((p,[d,g])=>`${p}${d}=${g},`,"");if(WS(c)&&a!=="_self")return _P(e||"",a),new vp(null);const f=window.open(e||"",a,u);pe(f,t,"popup-blocked");try{f.focus()}catch{}return new vp(f)}function _P(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const TP="__/auth/handler",SP="emulator/auth/handler",PP=encodeURIComponent("fac");async function yp(t,e,n,r,i,s){pe(t.config.authDomain,t,"auth-domain-config-required"),pe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Oi,eventId:i};if(e instanceof Dv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ew(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,f]of Object.entries({}))o[u]=f}if(e instanceof ro){const u=e.getScopes().filter(f=>f!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${PP}=${encodeURIComponent(l)}`:"";return`${CP(t)}?${Xs(a).slice(1)}${c}`}function CP({config:t}){return t.emulator?rh(t,SP):`https://${t.authDomain}/${TP}`}/**
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
 */const Ql="webStorageSupport";class RP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fv,this._completeRedirectFn=J5,this._overrideRedirectResult=X5}async _openPopup(e,n,r,i){var s;Fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yp(e,n,r,$c(),i);return EP(e,o,lh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await yp(e,n,r,$c(),i);return k5(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gP(e),r=new eP(e);return n.register("authEvent",i=>(pe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ql,{type:Ql},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ql];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Cv()||wv()||sh()}}const IP=RP;var bp="@firebase/auth",xp="1.10.5";/**
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
 */class AP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function kP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DP(t){_i(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;pe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rv(t)},c=new YS(r,i,s,l);return o5(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_i(new Lr("auth-internal",e=>{const n=Yr(e.getProvider("auth").getImmediate());return(r=>new AP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(bp,xp,kP(t)),sr(bp,xp,"esm2017")}/**
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
 */const NP=5*60,MP=Tg("authIdTokenMaxAge")||NP;let wp=null;const OP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MP)return;const i=n==null?void 0:n.token;wp!==i&&(wp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qv(t=Ig()){const e=xu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=s5(t,{popupRedirectResolver:IP,persistence:[U5,R5,Fv]}),r=Tg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=OP(s.toString());T5(n,o,()=>o(n.currentUser)),_5(n,a=>o(a))}}const i=Eg("auth");return i?a5(n,`http://${i}`):Wa("Auth",!1),n}function VP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}QS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=vn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",VP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DP("Browser");const LP={apiKey:"AIzaSyDpibbohgF-9aoUymLOQIJSKrDnYqr7ThU",authDomain:"kittytask.firebaseapp.com",projectId:"kittytask",storageBucket:"kittytask.firebasestorage.app",messagingSenderId:"731649481968",appId:"1:731649481968:web:373ca9c61500eb2c5df635",measurementId:"G-19NGHN1W0S"},Gv=Rg(LP),ke=qv(Gv),te=tv(Gv);function BP(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return D.useMemo(()=>r=>{e.forEach(i=>i(r))},e)}const hl=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function $i(t){const e=Object.prototype.toString.call(t);return e==="[object Window]"||e==="[object global]"}function uh(t){return"nodeType"in t}function zt(t){var e,n;return t?$i(t)?t:uh(t)&&(e=(n=t.ownerDocument)==null?void 0:n.defaultView)!=null?e:window:window}function hh(t){const{Document:e}=zt(t);return t instanceof e}function so(t){return $i(t)?!1:t instanceof zt(t).HTMLElement}function Kv(t){return t instanceof zt(t).SVGElement}function zi(t){return t?$i(t)?t.document:uh(t)?hh(t)?t:so(t)||Kv(t)?t.ownerDocument:document:document:document}const Sn=hl?D.useLayoutEffect:D.useEffect;function dh(t){const e=D.useRef(t);return Sn(()=>{e.current=t}),D.useCallback(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.current==null?void 0:e.current(...r)},[])}function FP(){const t=D.useRef(null),e=D.useCallback((r,i)=>{t.current=setInterval(r,i)},[]),n=D.useCallback(()=>{t.current!==null&&(clearInterval(t.current),t.current=null)},[]);return[e,n]}function Fs(t,e){e===void 0&&(e=[t]);const n=D.useRef(t);return Sn(()=>{n.current!==t&&(n.current=t)},e),n}function oo(t,e){const n=D.useRef();return D.useMemo(()=>{const r=t(n.current);return n.current=r,r},[...e])}function Ra(t){const e=dh(t),n=D.useRef(null),r=D.useCallback(i=>{i!==n.current&&(e==null||e(i,n.current)),n.current=i},[]);return[n,r]}function qc(t){const e=D.useRef();return D.useEffect(()=>{e.current=t},[t]),e.current}let Jl={};function ao(t,e){return D.useMemo(()=>{if(e)return e;const n=Jl[t]==null?0:Jl[t]+1;return Jl[t]=n,t+"-"+n},[t,e])}function Xv(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return r.reduce((s,o)=>{const a=Object.entries(o);for(const[l,c]of a){const u=s[l];u!=null&&(s[l]=u+t*c)}return s},{...e})}}const Ei=Xv(1),Ia=Xv(-1);function UP(t){return"clientX"in t&&"clientY"in t}function fh(t){if(!t)return!1;const{KeyboardEvent:e}=zt(t.target);return e&&t instanceof e}function jP(t){if(!t)return!1;const{TouchEvent:e}=zt(t.target);return e&&t instanceof e}function Gc(t){if(jP(t)){if(t.touches&&t.touches.length){const{clientX:e,clientY:n}=t.touches[0];return{x:e,y:n}}else if(t.changedTouches&&t.changedTouches.length){const{clientX:e,clientY:n}=t.changedTouches[0];return{x:e,y:n}}}return UP(t)?{x:t.clientX,y:t.clientY}:null}const Aa=Object.freeze({Translate:{toString(t){if(!t)return;const{x:e,y:n}=t;return"translate3d("+(e?Math.round(e):0)+"px, "+(n?Math.round(n):0)+"px, 0)"}},Scale:{toString(t){if(!t)return;const{scaleX:e,scaleY:n}=t;return"scaleX("+e+") scaleY("+n+")"}},Transform:{toString(t){if(t)return[Aa.Translate.toString(t),Aa.Scale.toString(t)].join(" ")}},Transition:{toString(t){let{property:e,duration:n,easing:r}=t;return e+" "+n+"ms "+r}}}),Ep="a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";function $P(t){return t.matches(Ep)?t:t.querySelector(Ep)}const zP={display:"none"};function WP(t){let{id:e,value:n}=t;return O.createElement("div",{id:e,style:zP},n)}function HP(t){let{id:e,announcement:n,ariaLiveType:r="assertive"}=t;const i={position:"fixed",top:0,left:0,width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0 0 0 0)",clipPath:"inset(100%)",whiteSpace:"nowrap"};return O.createElement("div",{id:e,style:i,role:"status","aria-live":r,"aria-atomic":!0},n)}function qP(){const[t,e]=D.useState("");return{announce:D.useCallback(r=>{r!=null&&e(r)},[]),announcement:t}}const Yv=D.createContext(null);function GP(t){const e=D.useContext(Yv);D.useEffect(()=>{if(!e)throw new Error("useDndMonitor must be used within a children of <DndContext>");return e(t)},[t,e])}function KP(){const[t]=D.useState(()=>new Set),e=D.useCallback(r=>(t.add(r),()=>t.delete(r)),[t]);return[D.useCallback(r=>{let{type:i,event:s}=r;t.forEach(o=>{var a;return(a=o[i])==null?void 0:a.call(o,s)})},[t]),e]}const XP={draggable:`
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `},YP={onDragStart(t){let{active:e}=t;return"Picked up draggable item "+e.id+"."},onDragOver(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was moved over droppable area "+n.id+".":"Draggable item "+e.id+" is no longer over a droppable area."},onDragEnd(t){let{active:e,over:n}=t;return n?"Draggable item "+e.id+" was dropped over droppable area "+n.id:"Draggable item "+e.id+" was dropped."},onDragCancel(t){let{active:e}=t;return"Dragging was cancelled. Draggable item "+e.id+" was dropped."}};function QP(t){let{announcements:e=YP,container:n,hiddenTextDescribedById:r,screenReaderInstructions:i=XP}=t;const{announce:s,announcement:o}=qP(),a=ao("DndLiveRegion"),[l,c]=D.useState(!1);if(D.useEffect(()=>{c(!0)},[]),GP(D.useMemo(()=>({onDragStart(f){let{active:p}=f;s(e.onDragStart({active:p}))},onDragMove(f){let{active:p,over:d}=f;e.onDragMove&&s(e.onDragMove({active:p,over:d}))},onDragOver(f){let{active:p,over:d}=f;s(e.onDragOver({active:p,over:d}))},onDragEnd(f){let{active:p,over:d}=f;s(e.onDragEnd({active:p,over:d}))},onDragCancel(f){let{active:p,over:d}=f;s(e.onDragCancel({active:p,over:d}))}}),[s,e])),!l)return null;const u=O.createElement(O.Fragment,null,O.createElement(WP,{id:r,value:i.draggable}),O.createElement(HP,{id:a,announcement:o}));return n?hi.createPortal(u,n):u}var at;(function(t){t.DragStart="dragStart",t.DragMove="dragMove",t.DragEnd="dragEnd",t.DragCancel="dragCancel",t.DragOver="dragOver",t.RegisterDroppable="registerDroppable",t.SetDroppableDisabled="setDroppableDisabled",t.UnregisterDroppable="unregisterDroppable"})(at||(at={}));function ka(){}function Da(t,e){return D.useMemo(()=>({sensor:t,options:e??{}}),[t,e])}function Qv(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return D.useMemo(()=>[...e].filter(r=>r!=null),[...e])}const hn=Object.freeze({x:0,y:0});function JP(t,e){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function ZP(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return n-r}function eC(t,e){let{data:{value:n}}=t,{data:{value:r}}=e;return r-n}function tC(t,e){if(!t||t.length===0)return null;const[n]=t;return n[e]}function _p(t,e,n){return e===void 0&&(e=t.left),n===void 0&&(n=t.top),{x:e+t.width*.5,y:n+t.height*.5}}const Jv=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const i=_p(e,e.left,e.top),s=[];for(const o of r){const{id:a}=o,l=n.get(a);if(l){const c=JP(_p(l),i);s.push({id:a,data:{droppableContainer:o,value:c}})}}return s.sort(ZP)};function nC(t,e){const n=Math.max(e.top,t.top),r=Math.max(e.left,t.left),i=Math.min(e.left+e.width,t.left+t.width),s=Math.min(e.top+e.height,t.top+t.height),o=i-r,a=s-n;if(r<i&&n<s){const l=e.width*e.height,c=t.width*t.height,u=o*a,f=u/(l+c-u);return Number(f.toFixed(4))}return 0}const rC=t=>{let{collisionRect:e,droppableRects:n,droppableContainers:r}=t;const i=[];for(const s of r){const{id:o}=s,a=n.get(o);if(a){const l=nC(a,e);l>0&&i.push({id:o,data:{droppableContainer:s,value:l}})}}return i.sort(eC)};function iC(t,e,n){return{...t,scaleX:e&&n?e.width/n.width:1,scaleY:e&&n?e.height/n.height:1}}function Zv(t,e){return t&&e?{x:t.left-e.left,y:t.top-e.top}:hn}function sC(t){return function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),s=1;s<r;s++)i[s-1]=arguments[s];return i.reduce((o,a)=>({...o,top:o.top+t*a.y,bottom:o.bottom+t*a.y,left:o.left+t*a.x,right:o.right+t*a.x}),{...n})}}const oC=sC(1);function aC(t){if(t.startsWith("matrix3d(")){const e=t.slice(9,-1).split(/, /);return{x:+e[12],y:+e[13],scaleX:+e[0],scaleY:+e[5]}}else if(t.startsWith("matrix(")){const e=t.slice(7,-1).split(/, /);return{x:+e[4],y:+e[5],scaleX:+e[0],scaleY:+e[3]}}return null}function lC(t,e,n){const r=aC(e);if(!r)return t;const{scaleX:i,scaleY:s,x:o,y:a}=r,l=t.left-o-(1-i)*parseFloat(n),c=t.top-a-(1-s)*parseFloat(n.slice(n.indexOf(" ")+1)),u=i?t.width/i:t.width,f=s?t.height/s:t.height;return{width:u,height:f,top:c,right:l+u,bottom:c+f,left:l}}const cC={ignoreTransform:!1};function Wi(t,e){e===void 0&&(e=cC);let n=t.getBoundingClientRect();if(e.ignoreTransform){const{transform:c,transformOrigin:u}=zt(t).getComputedStyle(t);c&&(n=lC(n,c,u))}const{top:r,left:i,width:s,height:o,bottom:a,right:l}=n;return{top:r,left:i,width:s,height:o,bottom:a,right:l}}function Tp(t){return Wi(t,{ignoreTransform:!0})}function uC(t){const e=t.innerWidth,n=t.innerHeight;return{top:0,left:0,right:e,bottom:n,width:e,height:n}}function hC(t,e){return e===void 0&&(e=zt(t).getComputedStyle(t)),e.position==="fixed"}function dC(t,e){e===void 0&&(e=zt(t).getComputedStyle(t));const n=/(auto|scroll|overlay)/;return["overflow","overflowX","overflowY"].some(i=>{const s=e[i];return typeof s=="string"?n.test(s):!1})}function ph(t,e){const n=[];function r(i){if(e!=null&&n.length>=e||!i)return n;if(hh(i)&&i.scrollingElement!=null&&!n.includes(i.scrollingElement))return n.push(i.scrollingElement),n;if(!so(i)||Kv(i)||n.includes(i))return n;const s=zt(t).getComputedStyle(i);return i!==t&&dC(i,s)&&n.push(i),hC(i,s)?n:r(i.parentNode)}return t?r(t):n}function ey(t){const[e]=ph(t,1);return e??null}function Zl(t){return!hl||!t?null:$i(t)?t:uh(t)?hh(t)||t===zi(t).scrollingElement?window:so(t)?t:null:null}function ty(t){return $i(t)?t.scrollX:t.scrollLeft}function ny(t){return $i(t)?t.scrollY:t.scrollTop}function Kc(t){return{x:ty(t),y:ny(t)}}var mt;(function(t){t[t.Forward=1]="Forward",t[t.Backward=-1]="Backward"})(mt||(mt={}));function ry(t){return!hl||!t?!1:t===document.scrollingElement}function iy(t){const e={x:0,y:0},n=ry(t)?{height:window.innerHeight,width:window.innerWidth}:{height:t.clientHeight,width:t.clientWidth},r={x:t.scrollWidth-n.width,y:t.scrollHeight-n.height},i=t.scrollTop<=e.y,s=t.scrollLeft<=e.x,o=t.scrollTop>=r.y,a=t.scrollLeft>=r.x;return{isTop:i,isLeft:s,isBottom:o,isRight:a,maxScroll:r,minScroll:e}}const fC={x:.2,y:.2};function pC(t,e,n,r,i){let{top:s,left:o,right:a,bottom:l}=n;r===void 0&&(r=10),i===void 0&&(i=fC);const{isTop:c,isBottom:u,isLeft:f,isRight:p}=iy(t),d={x:0,y:0},g={x:0,y:0},m={height:e.height*i.y,width:e.width*i.x};return!c&&s<=e.top+m.height?(d.y=mt.Backward,g.y=r*Math.abs((e.top+m.height-s)/m.height)):!u&&l>=e.bottom-m.height&&(d.y=mt.Forward,g.y=r*Math.abs((e.bottom-m.height-l)/m.height)),!p&&a>=e.right-m.width?(d.x=mt.Forward,g.x=r*Math.abs((e.right-m.width-a)/m.width)):!f&&o<=e.left+m.width&&(d.x=mt.Backward,g.x=r*Math.abs((e.left+m.width-o)/m.width)),{direction:d,speed:g}}function mC(t){if(t===document.scrollingElement){const{innerWidth:s,innerHeight:o}=window;return{top:0,left:0,right:s,bottom:o,width:s,height:o}}const{top:e,left:n,right:r,bottom:i}=t.getBoundingClientRect();return{top:e,left:n,right:r,bottom:i,width:t.clientWidth,height:t.clientHeight}}function sy(t){return t.reduce((e,n)=>Ei(e,Kc(n)),hn)}function gC(t){return t.reduce((e,n)=>e+ty(n),0)}function vC(t){return t.reduce((e,n)=>e+ny(n),0)}function yC(t,e){if(e===void 0&&(e=Wi),!t)return;const{top:n,left:r,bottom:i,right:s}=e(t);ey(t)&&(i<=0||s<=0||n>=window.innerHeight||r>=window.innerWidth)&&t.scrollIntoView({block:"center",inline:"center"})}const bC=[["x",["left","right"],gC],["y",["top","bottom"],vC]];class mh{constructor(e,n){this.rect=void 0,this.width=void 0,this.height=void 0,this.top=void 0,this.bottom=void 0,this.right=void 0,this.left=void 0;const r=ph(n),i=sy(r);this.rect={...e},this.width=e.width,this.height=e.height;for(const[s,o,a]of bC)for(const l of o)Object.defineProperty(this,l,{get:()=>{const c=a(r),u=i[s]-c;return this.rect[l]+u},enumerable:!0});Object.defineProperty(this,"rect",{enumerable:!1})}}class ws{constructor(e){this.target=void 0,this.listeners=[],this.removeAll=()=>{this.listeners.forEach(n=>{var r;return(r=this.target)==null?void 0:r.removeEventListener(...n)})},this.target=e}add(e,n,r){var i;(i=this.target)==null||i.addEventListener(e,n,r),this.listeners.push([e,n,r])}}function xC(t){const{EventTarget:e}=zt(t);return t instanceof e?t:zi(t)}function ec(t,e){const n=Math.abs(t.x),r=Math.abs(t.y);return typeof e=="number"?Math.sqrt(n**2+r**2)>e:"x"in e&&"y"in e?n>e.x&&r>e.y:"x"in e?n>e.x:"y"in e?r>e.y:!1}var Qt;(function(t){t.Click="click",t.DragStart="dragstart",t.Keydown="keydown",t.ContextMenu="contextmenu",t.Resize="resize",t.SelectionChange="selectionchange",t.VisibilityChange="visibilitychange"})(Qt||(Qt={}));function Sp(t){t.preventDefault()}function wC(t){t.stopPropagation()}var Ne;(function(t){t.Space="Space",t.Down="ArrowDown",t.Right="ArrowRight",t.Left="ArrowLeft",t.Up="ArrowUp",t.Esc="Escape",t.Enter="Enter",t.Tab="Tab"})(Ne||(Ne={}));const oy={start:[Ne.Space,Ne.Enter],cancel:[Ne.Esc],end:[Ne.Space,Ne.Enter,Ne.Tab]},EC=(t,e)=>{let{currentCoordinates:n}=e;switch(t.code){case Ne.Right:return{...n,x:n.x+25};case Ne.Left:return{...n,x:n.x-25};case Ne.Down:return{...n,y:n.y+25};case Ne.Up:return{...n,y:n.y-25}}};class ay{constructor(e){this.props=void 0,this.autoScrollEnabled=!1,this.referenceCoordinates=void 0,this.listeners=void 0,this.windowListeners=void 0,this.props=e;const{event:{target:n}}=e;this.props=e,this.listeners=new ws(zi(n)),this.windowListeners=new ws(zt(n)),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleCancel=this.handleCancel.bind(this),this.attach()}attach(){this.handleStart(),this.windowListeners.add(Qt.Resize,this.handleCancel),this.windowListeners.add(Qt.VisibilityChange,this.handleCancel),setTimeout(()=>this.listeners.add(Qt.Keydown,this.handleKeyDown))}handleStart(){const{activeNode:e,onStart:n}=this.props,r=e.node.current;r&&yC(r),n(hn)}handleKeyDown(e){if(fh(e)){const{active:n,context:r,options:i}=this.props,{keyboardCodes:s=oy,coordinateGetter:o=EC,scrollBehavior:a="smooth"}=i,{code:l}=e;if(s.end.includes(l)){this.handleEnd(e);return}if(s.cancel.includes(l)){this.handleCancel(e);return}const{collisionRect:c}=r.current,u=c?{x:c.left,y:c.top}:hn;this.referenceCoordinates||(this.referenceCoordinates=u);const f=o(e,{active:n,context:r.current,currentCoordinates:u});if(f){const p=Ia(f,u),d={x:0,y:0},{scrollableAncestors:g}=r.current;for(const m of g){const v=e.code,{isTop:_,isRight:C,isLeft:R,isBottom:N,maxScroll:x,minScroll:I}=iy(m),E=mC(m),y={x:Math.min(v===Ne.Right?E.right-E.width/2:E.right,Math.max(v===Ne.Right?E.left:E.left+E.width/2,f.x)),y:Math.min(v===Ne.Down?E.bottom-E.height/2:E.bottom,Math.max(v===Ne.Down?E.top:E.top+E.height/2,f.y))},w=v===Ne.Right&&!C||v===Ne.Left&&!R,T=v===Ne.Down&&!N||v===Ne.Up&&!_;if(w&&y.x!==f.x){const P=m.scrollLeft+p.x,A=v===Ne.Right&&P<=x.x||v===Ne.Left&&P>=I.x;if(A&&!p.y){m.scrollTo({left:P,behavior:a});return}A?d.x=m.scrollLeft-P:d.x=v===Ne.Right?m.scrollLeft-x.x:m.scrollLeft-I.x,d.x&&m.scrollBy({left:-d.x,behavior:a});break}else if(T&&y.y!==f.y){const P=m.scrollTop+p.y,A=v===Ne.Down&&P<=x.y||v===Ne.Up&&P>=I.y;if(A&&!p.x){m.scrollTo({top:P,behavior:a});return}A?d.y=m.scrollTop-P:d.y=v===Ne.Down?m.scrollTop-x.y:m.scrollTop-I.y,d.y&&m.scrollBy({top:-d.y,behavior:a});break}}this.handleMove(e,Ei(Ia(f,this.referenceCoordinates),d))}}}handleMove(e,n){const{onMove:r}=this.props;e.preventDefault(),r(n)}handleEnd(e){const{onEnd:n}=this.props;e.preventDefault(),this.detach(),n()}handleCancel(e){const{onCancel:n}=this.props;e.preventDefault(),this.detach(),n()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll()}}ay.activators=[{eventName:"onKeyDown",handler:(t,e,n)=>{let{keyboardCodes:r=oy,onActivation:i}=e,{active:s}=n;const{code:o}=t.nativeEvent;if(r.start.includes(o)){const a=s.activatorNode.current;return a&&t.target!==a?!1:(t.preventDefault(),i==null||i({event:t.nativeEvent}),!0)}return!1}}];function Pp(t){return!!(t&&"distance"in t)}function Cp(t){return!!(t&&"delay"in t)}class gh{constructor(e,n,r){var i;r===void 0&&(r=xC(e.event.target)),this.props=void 0,this.events=void 0,this.autoScrollEnabled=!0,this.document=void 0,this.activated=!1,this.initialCoordinates=void 0,this.timeoutId=null,this.listeners=void 0,this.documentListeners=void 0,this.windowListeners=void 0,this.props=e,this.events=n;const{event:s}=e,{target:o}=s;this.props=e,this.events=n,this.document=zi(o),this.documentListeners=new ws(this.document),this.listeners=new ws(r),this.windowListeners=new ws(zt(o)),this.initialCoordinates=(i=Gc(s))!=null?i:hn,this.handleStart=this.handleStart.bind(this),this.handleMove=this.handleMove.bind(this),this.handleEnd=this.handleEnd.bind(this),this.handleCancel=this.handleCancel.bind(this),this.handleKeydown=this.handleKeydown.bind(this),this.removeTextSelection=this.removeTextSelection.bind(this),this.attach()}attach(){const{events:e,props:{options:{activationConstraint:n,bypassActivationConstraint:r}}}=this;if(this.listeners.add(e.move.name,this.handleMove,{passive:!1}),this.listeners.add(e.end.name,this.handleEnd),e.cancel&&this.listeners.add(e.cancel.name,this.handleCancel),this.windowListeners.add(Qt.Resize,this.handleCancel),this.windowListeners.add(Qt.DragStart,Sp),this.windowListeners.add(Qt.VisibilityChange,this.handleCancel),this.windowListeners.add(Qt.ContextMenu,Sp),this.documentListeners.add(Qt.Keydown,this.handleKeydown),n){if(r!=null&&r({event:this.props.event,activeNode:this.props.activeNode,options:this.props.options}))return this.handleStart();if(Cp(n)){this.timeoutId=setTimeout(this.handleStart,n.delay),this.handlePending(n);return}if(Pp(n)){this.handlePending(n);return}}this.handleStart()}detach(){this.listeners.removeAll(),this.windowListeners.removeAll(),setTimeout(this.documentListeners.removeAll,50),this.timeoutId!==null&&(clearTimeout(this.timeoutId),this.timeoutId=null)}handlePending(e,n){const{active:r,onPending:i}=this.props;i(r,e,this.initialCoordinates,n)}handleStart(){const{initialCoordinates:e}=this,{onStart:n}=this.props;e&&(this.activated=!0,this.documentListeners.add(Qt.Click,wC,{capture:!0}),this.removeTextSelection(),this.documentListeners.add(Qt.SelectionChange,this.removeTextSelection),n(e))}handleMove(e){var n;const{activated:r,initialCoordinates:i,props:s}=this,{onMove:o,options:{activationConstraint:a}}=s;if(!i)return;const l=(n=Gc(e))!=null?n:hn,c=Ia(i,l);if(!r&&a){if(Pp(a)){if(a.tolerance!=null&&ec(c,a.tolerance))return this.handleCancel();if(ec(c,a.distance))return this.handleStart()}if(Cp(a)&&ec(c,a.tolerance))return this.handleCancel();this.handlePending(a,c);return}e.cancelable&&e.preventDefault(),o(l)}handleEnd(){const{onAbort:e,onEnd:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleCancel(){const{onAbort:e,onCancel:n}=this.props;this.detach(),this.activated||e(this.props.active),n()}handleKeydown(e){e.code===Ne.Esc&&this.handleCancel()}removeTextSelection(){var e;(e=this.document.getSelection())==null||e.removeAllRanges()}}const _C={cancel:{name:"pointercancel"},move:{name:"pointermove"},end:{name:"pointerup"}};class ly extends gh{constructor(e){const{event:n}=e,r=zi(n.target);super(e,_C,r)}}ly.activators=[{eventName:"onPointerDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return!n.isPrimary||n.button!==0?!1:(r==null||r({event:n}),!0)}}];const TC={move:{name:"mousemove"},end:{name:"mouseup"}};var Xc;(function(t){t[t.RightClick=2]="RightClick"})(Xc||(Xc={}));class vh extends gh{constructor(e){super(e,TC,zi(e.event.target))}}vh.activators=[{eventName:"onMouseDown",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;return n.button===Xc.RightClick?!1:(r==null||r({event:n}),!0)}}];const tc={cancel:{name:"touchcancel"},move:{name:"touchmove"},end:{name:"touchend"}};class yh extends gh{constructor(e){super(e,tc)}static setup(){return window.addEventListener(tc.move.name,e,{capture:!1,passive:!1}),function(){window.removeEventListener(tc.move.name,e)};function e(){}}}yh.activators=[{eventName:"onTouchStart",handler:(t,e)=>{let{nativeEvent:n}=t,{onActivation:r}=e;const{touches:i}=n;return i.length>1?!1:(r==null||r({event:n}),!0)}}];var Es;(function(t){t[t.Pointer=0]="Pointer",t[t.DraggableRect=1]="DraggableRect"})(Es||(Es={}));var Na;(function(t){t[t.TreeOrder=0]="TreeOrder",t[t.ReversedTreeOrder=1]="ReversedTreeOrder"})(Na||(Na={}));function SC(t){let{acceleration:e,activator:n=Es.Pointer,canScroll:r,draggingRect:i,enabled:s,interval:o=5,order:a=Na.TreeOrder,pointerCoordinates:l,scrollableAncestors:c,scrollableAncestorRects:u,delta:f,threshold:p}=t;const d=CC({delta:f,disabled:!s}),[g,m]=FP(),v=D.useRef({x:0,y:0}),_=D.useRef({x:0,y:0}),C=D.useMemo(()=>{switch(n){case Es.Pointer:return l?{top:l.y,bottom:l.y,left:l.x,right:l.x}:null;case Es.DraggableRect:return i}},[n,i,l]),R=D.useRef(null),N=D.useCallback(()=>{const I=R.current;if(!I)return;const E=v.current.x*_.current.x,y=v.current.y*_.current.y;I.scrollBy(E,y)},[]),x=D.useMemo(()=>a===Na.TreeOrder?[...c].reverse():c,[a,c]);D.useEffect(()=>{if(!s||!c.length||!C){m();return}for(const I of x){if((r==null?void 0:r(I))===!1)continue;const E=c.indexOf(I),y=u[E];if(!y)continue;const{direction:w,speed:T}=pC(I,y,C,e,p);for(const P of["x","y"])d[P][w[P]]||(T[P]=0,w[P]=0);if(T.x>0||T.y>0){m(),R.current=I,g(N,o),v.current=T,_.current=w;return}}v.current={x:0,y:0},_.current={x:0,y:0},m()},[e,N,r,m,s,o,JSON.stringify(C),JSON.stringify(d),g,c,x,u,JSON.stringify(p)])}const PC={x:{[mt.Backward]:!1,[mt.Forward]:!1},y:{[mt.Backward]:!1,[mt.Forward]:!1}};function CC(t){let{delta:e,disabled:n}=t;const r=qc(e);return oo(i=>{if(n||!r||!i)return PC;const s={x:Math.sign(e.x-r.x),y:Math.sign(e.y-r.y)};return{x:{[mt.Backward]:i.x[mt.Backward]||s.x===-1,[mt.Forward]:i.x[mt.Forward]||s.x===1},y:{[mt.Backward]:i.y[mt.Backward]||s.y===-1,[mt.Forward]:i.y[mt.Forward]||s.y===1}}},[n,e,r])}function RC(t,e){const n=e!=null?t.get(e):void 0,r=n?n.node.current:null;return oo(i=>{var s;return e==null?null:(s=r??i)!=null?s:null},[r,e])}function IC(t,e){return D.useMemo(()=>t.reduce((n,r)=>{const{sensor:i}=r,s=i.activators.map(o=>({eventName:o.eventName,handler:e(o.handler,r)}));return[...n,...s]},[]),[t,e])}var Us;(function(t){t[t.Always=0]="Always",t[t.BeforeDragging=1]="BeforeDragging",t[t.WhileDragging=2]="WhileDragging"})(Us||(Us={}));var Yc;(function(t){t.Optimized="optimized"})(Yc||(Yc={}));const Rp=new Map;function AC(t,e){let{dragging:n,dependencies:r,config:i}=e;const[s,o]=D.useState(null),{frequency:a,measure:l,strategy:c}=i,u=D.useRef(t),f=v(),p=Fs(f),d=D.useCallback(function(_){_===void 0&&(_=[]),!p.current&&o(C=>C===null?_:C.concat(_.filter(R=>!C.includes(R))))},[p]),g=D.useRef(null),m=oo(_=>{if(f&&!n)return Rp;if(!_||_===Rp||u.current!==t||s!=null){const C=new Map;for(let R of t){if(!R)continue;if(s&&s.length>0&&!s.includes(R.id)&&R.rect.current){C.set(R.id,R.rect.current);continue}const N=R.node.current,x=N?new mh(l(N),N):null;R.rect.current=x,x&&C.set(R.id,x)}return C}return _},[t,s,n,f,l]);return D.useEffect(()=>{u.current=t},[t]),D.useEffect(()=>{f||d()},[n,f]),D.useEffect(()=>{s&&s.length>0&&o(null)},[JSON.stringify(s)]),D.useEffect(()=>{f||typeof a!="number"||g.current!==null||(g.current=setTimeout(()=>{d(),g.current=null},a))},[a,f,d,...r]),{droppableRects:m,measureDroppableContainers:d,measuringScheduled:s!=null};function v(){switch(c){case Us.Always:return!1;case Us.BeforeDragging:return n;default:return!n}}}function cy(t,e){return oo(n=>t?n||(typeof e=="function"?e(t):t):null,[e,t])}function kC(t,e){return cy(t,e)}function DC(t){let{callback:e,disabled:n}=t;const r=dh(e),i=D.useMemo(()=>{if(n||typeof window>"u"||typeof window.MutationObserver>"u")return;const{MutationObserver:s}=window;return new s(r)},[r,n]);return D.useEffect(()=>()=>i==null?void 0:i.disconnect(),[i]),i}function dl(t){let{callback:e,disabled:n}=t;const r=dh(e),i=D.useMemo(()=>{if(n||typeof window>"u"||typeof window.ResizeObserver>"u")return;const{ResizeObserver:s}=window;return new s(r)},[n]);return D.useEffect(()=>()=>i==null?void 0:i.disconnect(),[i]),i}function NC(t){return new mh(Wi(t),t)}function Ip(t,e,n){e===void 0&&(e=NC);const[r,i]=D.useState(null);function s(){i(l=>{if(!t)return null;if(t.isConnected===!1){var c;return(c=l??n)!=null?c:null}const u=e(t);return JSON.stringify(l)===JSON.stringify(u)?l:u})}const o=DC({callback(l){if(t)for(const c of l){const{type:u,target:f}=c;if(u==="childList"&&f instanceof HTMLElement&&f.contains(t)){s();break}}}}),a=dl({callback:s});return Sn(()=>{s(),t?(a==null||a.observe(t),o==null||o.observe(document.body,{childList:!0,subtree:!0})):(a==null||a.disconnect(),o==null||o.disconnect())},[t]),r}function MC(t){const e=cy(t);return Zv(t,e)}const Ap=[];function OC(t){const e=D.useRef(t),n=oo(r=>t?r&&r!==Ap&&t&&e.current&&t.parentNode===e.current.parentNode?r:ph(t):Ap,[t]);return D.useEffect(()=>{e.current=t},[t]),n}function VC(t){const[e,n]=D.useState(null),r=D.useRef(t),i=D.useCallback(s=>{const o=Zl(s.target);o&&n(a=>a?(a.set(o,Kc(o)),new Map(a)):null)},[]);return D.useEffect(()=>{const s=r.current;if(t!==s){o(s);const a=t.map(l=>{const c=Zl(l);return c?(c.addEventListener("scroll",i,{passive:!0}),[c,Kc(c)]):null}).filter(l=>l!=null);n(a.length?new Map(a):null),r.current=t}return()=>{o(t),o(s)};function o(a){a.forEach(l=>{const c=Zl(l);c==null||c.removeEventListener("scroll",i)})}},[i,t]),D.useMemo(()=>t.length?e?Array.from(e.values()).reduce((s,o)=>Ei(s,o),hn):sy(t):hn,[t,e])}function kp(t,e){e===void 0&&(e=[]);const n=D.useRef(null);return D.useEffect(()=>{n.current=null},e),D.useEffect(()=>{const r=t!==hn;r&&!n.current&&(n.current=t),!r&&n.current&&(n.current=null)},[t]),n.current?Ia(t,n.current):hn}function LC(t){D.useEffect(()=>{if(!hl)return;const e=t.map(n=>{let{sensor:r}=n;return r.setup==null?void 0:r.setup()});return()=>{for(const n of e)n==null||n()}},t.map(e=>{let{sensor:n}=e;return n}))}function BC(t,e){return D.useMemo(()=>t.reduce((n,r)=>{let{eventName:i,handler:s}=r;return n[i]=o=>{s(o,e)},n},{}),[t,e])}function uy(t){return D.useMemo(()=>t?uC(t):null,[t])}const Dp=[];function FC(t,e){e===void 0&&(e=Wi);const[n]=t,r=uy(n?zt(n):null),[i,s]=D.useState(Dp);function o(){s(()=>t.length?t.map(l=>ry(l)?r:new mh(e(l),l)):Dp)}const a=dl({callback:o});return Sn(()=>{a==null||a.disconnect(),o(),t.forEach(l=>a==null?void 0:a.observe(l))},[t]),i}function UC(t){if(!t)return null;if(t.children.length>1)return t;const e=t.children[0];return so(e)?e:t}function jC(t){let{measure:e}=t;const[n,r]=D.useState(null),i=D.useCallback(c=>{for(const{target:u}of c)if(so(u)){r(f=>{const p=e(u);return f?{...f,width:p.width,height:p.height}:p});break}},[e]),s=dl({callback:i}),o=D.useCallback(c=>{const u=UC(c);s==null||s.disconnect(),u&&(s==null||s.observe(u)),r(u?e(u):null)},[e,s]),[a,l]=Ra(o);return D.useMemo(()=>({nodeRef:a,rect:n,setRef:l}),[n,a,l])}const $C=[{sensor:ly,options:{}},{sensor:ay,options:{}}],zC={current:{}},ta={draggable:{measure:Tp},droppable:{measure:Tp,strategy:Us.WhileDragging,frequency:Yc.Optimized},dragOverlay:{measure:Wi}};class _s extends Map{get(e){var n;return e!=null&&(n=super.get(e))!=null?n:void 0}toArray(){return Array.from(this.values())}getEnabled(){return this.toArray().filter(e=>{let{disabled:n}=e;return!n})}getNodeFor(e){var n,r;return(n=(r=this.get(e))==null?void 0:r.node.current)!=null?n:void 0}}const WC={activatorEvent:null,active:null,activeNode:null,activeNodeRect:null,collisions:null,containerNodeRect:null,draggableNodes:new Map,droppableRects:new Map,droppableContainers:new _s,over:null,dragOverlay:{nodeRef:{current:null},rect:null,setRef:ka},scrollableAncestors:[],scrollableAncestorRects:[],measuringConfiguration:ta,measureDroppableContainers:ka,windowRect:null,measuringScheduled:!1},HC={activatorEvent:null,activators:[],active:null,activeNodeRect:null,ariaDescribedById:{draggable:""},dispatch:ka,draggableNodes:new Map,over:null,measureDroppableContainers:ka},fl=D.createContext(HC),hy=D.createContext(WC);function qC(){return{draggable:{active:null,initialCoordinates:{x:0,y:0},nodes:new Map,translate:{x:0,y:0}},droppable:{containers:new _s}}}function GC(t,e){switch(e.type){case at.DragStart:return{...t,draggable:{...t.draggable,initialCoordinates:e.initialCoordinates,active:e.active}};case at.DragMove:return t.draggable.active==null?t:{...t,draggable:{...t.draggable,translate:{x:e.coordinates.x-t.draggable.initialCoordinates.x,y:e.coordinates.y-t.draggable.initialCoordinates.y}}};case at.DragEnd:case at.DragCancel:return{...t,draggable:{...t.draggable,active:null,initialCoordinates:{x:0,y:0},translate:{x:0,y:0}}};case at.RegisterDroppable:{const{element:n}=e,{id:r}=n,i=new _s(t.droppable.containers);return i.set(r,n),{...t,droppable:{...t.droppable,containers:i}}}case at.SetDroppableDisabled:{const{id:n,key:r,disabled:i}=e,s=t.droppable.containers.get(n);if(!s||r!==s.key)return t;const o=new _s(t.droppable.containers);return o.set(n,{...s,disabled:i}),{...t,droppable:{...t.droppable,containers:o}}}case at.UnregisterDroppable:{const{id:n,key:r}=e,i=t.droppable.containers.get(n);if(!i||r!==i.key)return t;const s=new _s(t.droppable.containers);return s.delete(n),{...t,droppable:{...t.droppable,containers:s}}}default:return t}}function KC(t){let{disabled:e}=t;const{active:n,activatorEvent:r,draggableNodes:i}=D.useContext(fl),s=qc(r),o=qc(n==null?void 0:n.id);return D.useEffect(()=>{if(!e&&!r&&s&&o!=null){if(!fh(s)||document.activeElement===s.target)return;const a=i.get(o);if(!a)return;const{activatorNode:l,node:c}=a;if(!l.current&&!c.current)return;requestAnimationFrame(()=>{for(const u of[l.current,c.current]){if(!u)continue;const f=$P(u);if(f){f.focus();break}}})}},[r,e,i,o,s]),null}function XC(t,e){let{transform:n,...r}=e;return t!=null&&t.length?t.reduce((i,s)=>s({transform:i,...r}),n):n}function YC(t){return D.useMemo(()=>({draggable:{...ta.draggable,...t==null?void 0:t.draggable},droppable:{...ta.droppable,...t==null?void 0:t.droppable},dragOverlay:{...ta.dragOverlay,...t==null?void 0:t.dragOverlay}}),[t==null?void 0:t.draggable,t==null?void 0:t.droppable,t==null?void 0:t.dragOverlay])}function QC(t){let{activeNode:e,measure:n,initialRect:r,config:i=!0}=t;const s=D.useRef(!1),{x:o,y:a}=typeof i=="boolean"?{x:i,y:i}:i;Sn(()=>{if(!o&&!a||!e){s.current=!1;return}if(s.current||!r)return;const c=e==null?void 0:e.node.current;if(!c||c.isConnected===!1)return;const u=n(c),f=Zv(u,r);if(o||(f.x=0),a||(f.y=0),s.current=!0,Math.abs(f.x)>0||Math.abs(f.y)>0){const p=ey(c);p&&p.scrollBy({top:f.y,left:f.x})}},[e,o,a,r,n])}const dy=D.createContext({...hn,scaleX:1,scaleY:1});var Xn;(function(t){t[t.Uninitialized=0]="Uninitialized",t[t.Initializing=1]="Initializing",t[t.Initialized=2]="Initialized"})(Xn||(Xn={}));const fy=D.memo(function(e){var n,r,i,s;let{id:o,accessibility:a,autoScroll:l=!0,children:c,sensors:u=$C,collisionDetection:f=rC,measuring:p,modifiers:d,...g}=e;const m=D.useReducer(GC,void 0,qC),[v,_]=m,[C,R]=KP(),[N,x]=D.useState(Xn.Uninitialized),I=N===Xn.Initialized,{draggable:{active:E,nodes:y,translate:w},droppable:{containers:T}}=v,P=E!=null?y.get(E):null,A=D.useRef({initial:null,translated:null}),k=D.useMemo(()=>{var it;return E!=null?{id:E,data:(it=P==null?void 0:P.data)!=null?it:zC,rect:A}:null},[E,P]),B=D.useRef(null),[$,X]=D.useState(null),[U,K]=D.useState(null),ee=Fs(g,Object.values(g)),ue=ao("DndDescribedBy",o),Ee=D.useMemo(()=>T.getEnabled(),[T]),ge=YC(p),{droppableRects:ae,measureDroppableContainers:$e,measuringScheduled:Me}=AC(Ee,{dragging:I,dependencies:[w.x,w.y],config:ge.droppable}),ie=RC(y,E),Ve=D.useMemo(()=>U?Gc(U):null,[U]),be=Er(),ze=kC(ie,ge.draggable.measure);QC({activeNode:E!=null?y.get(E):null,config:be.layoutShiftCompensation,initialRect:ze,measure:ge.draggable.measure});const oe=Ip(ie,ge.draggable.measure,ze),Fe=Ip(ie?ie.parentElement:null),Ce=D.useRef({activatorEvent:null,active:null,activeNode:ie,collisionRect:null,collisions:null,droppableRects:ae,draggableNodes:y,draggingNode:null,draggingNodeRect:null,droppableContainers:T,over:null,scrollableAncestors:[],scrollAdjustedTranslate:null}),dt=T.getNodeFor((n=Ce.current.over)==null?void 0:n.id),Ke=jC({measure:ge.dragOverlay.measure}),ft=(r=Ke.nodeRef.current)!=null?r:ie,Ze=I?(i=Ke.rect)!=null?i:oe:null,Vt=!!(Ke.nodeRef.current&&Ke.rect),Y=MC(Vt?null:oe),J=uy(ft?zt(ft):null),he=OC(I?dt??ie:null),xe=FC(he),Re=XC(d,{transform:{x:w.x-Y.x,y:w.y-Y.y,scaleX:1,scaleY:1},activatorEvent:U,active:k,activeNodeRect:oe,containerNodeRect:Fe,draggingNodeRect:Ze,over:Ce.current.over,overlayNodeRect:Ke.rect,scrollableAncestors:he,scrollableAncestorRects:xe,windowRect:J}),Te=Ve?Ei(Ve,w):null,_e=VC(he),H=kp(_e),W=kp(_e,[oe]),Q=Ei(Re,H),se=Ze?oC(Ze,Re):null,F=k&&se?f({active:k,collisionRect:se,droppableRects:ae,droppableContainers:Ee,pointerCoordinates:Te}):null,q=tC(F,"id"),[de,Be]=D.useState(null),rt=Vt?Re:Ei(Re,W),Lt=iC(rt,(s=de==null?void 0:de.rect)!=null?s:null,oe),Tt=D.useRef(null),$n=D.useCallback((it,gt)=>{let{sensor:et,options:Zt}=gt;if(B.current==null)return;const vt=y.get(B.current);if(!vt)return;const St=it.nativeEvent,Pt=new et({active:B.current,activeNode:vt,event:St,options:Zt,context:Ce,onAbort(Ae){if(!y.get(Ae))return;const{onDragAbort:Ct}=ee.current,Bt={id:Ae};Ct==null||Ct(Bt),C({type:"onDragAbort",event:Bt})},onPending(Ae,en,Ct,Bt){if(!y.get(Ae))return;const{onDragPending:Tr}=ee.current,Ft={id:Ae,constraint:en,initialCoordinates:Ct,offset:Bt};Tr==null||Tr(Ft),C({type:"onDragPending",event:Ft})},onStart(Ae){const en=B.current;if(en==null)return;const Ct=y.get(en);if(!Ct)return;const{onDragStart:Bt}=ee.current,_r={activatorEvent:St,active:{id:en,data:Ct.data,rect:A}};hi.unstable_batchedUpdates(()=>{Bt==null||Bt(_r),x(Xn.Initializing),_({type:at.DragStart,initialCoordinates:Ae,active:en}),C({type:"onDragStart",event:_r}),X(Tt.current),K(St)})},onMove(Ae){_({type:at.DragMove,coordinates:Ae})},onEnd:Pn(at.DragEnd),onCancel:Pn(at.DragCancel)});Tt.current=Pt;function Pn(Ae){return async function(){const{active:Ct,collisions:Bt,over:_r,scrollAdjustedTranslate:Tr}=Ce.current;let Ft=null;if(Ct&&Tr){const{cancelDrop:Sr}=ee.current;Ft={activatorEvent:St,active:Ct,collisions:Bt,delta:Tr,over:_r},Ae===at.DragEnd&&typeof Sr=="function"&&await Promise.resolve(Sr(Ft))&&(Ae=at.DragCancel)}B.current=null,hi.unstable_batchedUpdates(()=>{_({type:Ae}),x(Xn.Uninitialized),Be(null),X(null),K(null),Tt.current=null;const Sr=Ae===at.DragEnd?"onDragEnd":"onDragCancel";if(Ft){const Ki=ee.current[Sr];Ki==null||Ki(Ft),C({type:Sr,event:Ft})}})}}},[y]),Gi=D.useCallback((it,gt)=>(et,Zt)=>{const vt=et.nativeEvent,St=y.get(Zt);if(B.current!==null||!St||vt.dndKit||vt.defaultPrevented)return;const Pt={active:St};it(et,gt.options,Pt)===!0&&(vt.dndKit={capturedBy:gt.sensor},B.current=Zt,$n(et,gt))},[y,$n]),Jr=IC(u,Gi);LC(u),Sn(()=>{oe&&N===Xn.Initializing&&x(Xn.Initialized)},[oe,N]),D.useEffect(()=>{const{onDragMove:it}=ee.current,{active:gt,activatorEvent:et,collisions:Zt,over:vt}=Ce.current;if(!gt||!et)return;const St={active:gt,activatorEvent:et,collisions:Zt,delta:{x:Q.x,y:Q.y},over:vt};hi.unstable_batchedUpdates(()=>{it==null||it(St),C({type:"onDragMove",event:St})})},[Q.x,Q.y]),D.useEffect(()=>{const{active:it,activatorEvent:gt,collisions:et,droppableContainers:Zt,scrollAdjustedTranslate:vt}=Ce.current;if(!it||B.current==null||!gt||!vt)return;const{onDragOver:St}=ee.current,Pt=Zt.get(q),Pn=Pt&&Pt.rect.current?{id:Pt.id,rect:Pt.rect.current,data:Pt.data,disabled:Pt.disabled}:null,Ae={active:it,activatorEvent:gt,collisions:et,delta:{x:vt.x,y:vt.y},over:Pn};hi.unstable_batchedUpdates(()=>{Be(Pn),St==null||St(Ae),C({type:"onDragOver",event:Ae})})},[q]),Sn(()=>{Ce.current={activatorEvent:U,active:k,activeNode:ie,collisionRect:se,collisions:F,droppableRects:ae,draggableNodes:y,draggingNode:ft,draggingNodeRect:Ze,droppableContainers:T,over:de,scrollableAncestors:he,scrollAdjustedTranslate:Q},A.current={initial:Ze,translated:se}},[k,ie,F,se,y,ft,Ze,ae,T,de,he,Q]),SC({...be,delta:w,draggingRect:se,pointerCoordinates:Te,scrollableAncestors:he,scrollableAncestorRects:xe});const po=D.useMemo(()=>({active:k,activeNode:ie,activeNodeRect:oe,activatorEvent:U,collisions:F,containerNodeRect:Fe,dragOverlay:Ke,draggableNodes:y,droppableContainers:T,droppableRects:ae,over:de,measureDroppableContainers:$e,scrollableAncestors:he,scrollableAncestorRects:xe,measuringConfiguration:ge,measuringScheduled:Me,windowRect:J}),[k,ie,oe,U,F,Fe,Ke,y,T,ae,de,$e,he,xe,ge,Me,J]),mo=D.useMemo(()=>({activatorEvent:U,activators:Jr,active:k,activeNodeRect:oe,ariaDescribedById:{draggable:ue},dispatch:_,draggableNodes:y,over:de,measureDroppableContainers:$e}),[U,Jr,k,oe,_,ue,y,de,$e]);return O.createElement(Yv.Provider,{value:R},O.createElement(fl.Provider,{value:mo},O.createElement(hy.Provider,{value:po},O.createElement(dy.Provider,{value:Lt},c)),O.createElement(KC,{disabled:(a==null?void 0:a.restoreFocus)===!1})),O.createElement(QP,{...a,hiddenTextDescribedById:ue}));function Er(){const it=($==null?void 0:$.autoScrollEnabled)===!1,gt=typeof l=="object"?l.enabled===!1:l===!1,et=I&&!it&&!gt;return typeof l=="object"?{...l,enabled:et}:{enabled:et}}}),JC=D.createContext(null),Np="button",ZC="Draggable";function eR(t){let{id:e,data:n,disabled:r=!1,attributes:i}=t;const s=ao(ZC),{activators:o,activatorEvent:a,active:l,activeNodeRect:c,ariaDescribedById:u,draggableNodes:f,over:p}=D.useContext(fl),{role:d=Np,roleDescription:g="draggable",tabIndex:m=0}=i??{},v=(l==null?void 0:l.id)===e,_=D.useContext(v?dy:JC),[C,R]=Ra(),[N,x]=Ra(),I=BC(o,e),E=Fs(n);Sn(()=>(f.set(e,{id:e,key:s,node:C,activatorNode:N,data:E}),()=>{const w=f.get(e);w&&w.key===s&&f.delete(e)}),[f,e]);const y=D.useMemo(()=>({role:d,tabIndex:m,"aria-disabled":r,"aria-pressed":v&&d===Np?!0:void 0,"aria-roledescription":g,"aria-describedby":u.draggable}),[r,d,m,v,g,u.draggable]);return{active:l,activatorEvent:a,activeNodeRect:c,attributes:y,isDragging:v,listeners:r?void 0:I,node:C,over:p,setNodeRef:R,setActivatorNodeRef:x,transform:_}}function tR(){return D.useContext(hy)}const nR="Droppable",rR={timeout:25};function iR(t){let{data:e,disabled:n=!1,id:r,resizeObserverConfig:i}=t;const s=ao(nR),{active:o,dispatch:a,over:l,measureDroppableContainers:c}=D.useContext(fl),u=D.useRef({disabled:n}),f=D.useRef(!1),p=D.useRef(null),d=D.useRef(null),{disabled:g,updateMeasurementsFor:m,timeout:v}={...rR,...i},_=Fs(m??r),C=D.useCallback(()=>{if(!f.current){f.current=!0;return}d.current!=null&&clearTimeout(d.current),d.current=setTimeout(()=>{c(Array.isArray(_.current)?_.current:[_.current]),d.current=null},v)},[v]),R=dl({callback:C,disabled:g||!o}),N=D.useCallback((y,w)=>{R&&(w&&(R.unobserve(w),f.current=!1),y&&R.observe(y))},[R]),[x,I]=Ra(N),E=Fs(e);return D.useEffect(()=>{!R||!x.current||(R.disconnect(),f.current=!1,R.observe(x.current))},[x,R]),D.useEffect(()=>(a({type:at.RegisterDroppable,element:{id:r,key:s,disabled:n,node:x,rect:p,data:E}}),()=>a({type:at.UnregisterDroppable,key:s,id:r})),[r]),D.useEffect(()=>{n!==u.current.disabled&&(a({type:at.SetDroppableDisabled,id:r,key:s,disabled:n}),u.current.disabled=n)},[r,s,n,a]),{active:o,rect:p,isOver:(l==null?void 0:l.id)===r,node:x,over:l,setNodeRef:I}}function pl(t,e,n){const r=t.slice();return r.splice(n<0?r.length+n:n,0,r.splice(e,1)[0]),r}function sR(t,e){return t.reduce((n,r,i)=>{const s=e.get(r);return s&&(n[i]=s),n},Array(t.length))}function Vo(t){return t!==null&&t>=0}function oR(t,e){if(t===e)return!0;if(t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return!1;return!0}function aR(t){return typeof t=="boolean"?{draggable:t,droppable:t}:t}const py=t=>{let{rects:e,activeIndex:n,overIndex:r,index:i}=t;const s=pl(e,r,n),o=e[i],a=s[i];return!a||!o?null:{x:a.left-o.left,y:a.top-o.top,scaleX:a.width/o.width,scaleY:a.height/o.height}},Lo={scaleX:1,scaleY:1},my=t=>{var e;let{activeIndex:n,activeNodeRect:r,index:i,rects:s,overIndex:o}=t;const a=(e=s[n])!=null?e:r;if(!a)return null;if(i===n){const c=s[o];return c?{x:0,y:n<o?c.top+c.height-(a.top+a.height):c.top-a.top,...Lo}:null}const l=lR(s,i,n);return i>n&&i<=o?{x:0,y:-a.height-l,...Lo}:i<n&&i>=o?{x:0,y:a.height+l,...Lo}:{x:0,y:0,...Lo}};function lR(t,e,n){const r=t[e],i=t[e-1],s=t[e+1];return r?n<e?i?r.top-(i.top+i.height):s?s.top-(r.top+r.height):0:s?s.top-(r.top+r.height):i?r.top-(i.top+i.height):0:0}const gy="Sortable",vy=O.createContext({activeIndex:-1,containerId:gy,disableTransforms:!1,items:[],overIndex:-1,useDragOverlay:!1,sortedRects:[],strategy:py,disabled:{draggable:!1,droppable:!1}});function yy(t){let{children:e,id:n,items:r,strategy:i=py,disabled:s=!1}=t;const{active:o,dragOverlay:a,droppableRects:l,over:c,measureDroppableContainers:u}=tR(),f=ao(gy,n),p=a.rect!==null,d=D.useMemo(()=>r.map(I=>typeof I=="object"&&"id"in I?I.id:I),[r]),g=o!=null,m=o?d.indexOf(o.id):-1,v=c?d.indexOf(c.id):-1,_=D.useRef(d),C=!oR(d,_.current),R=v!==-1&&m===-1||C,N=aR(s);Sn(()=>{C&&g&&u(d)},[C,d,g,u]),D.useEffect(()=>{_.current=d},[d]);const x=D.useMemo(()=>({activeIndex:m,containerId:f,disabled:N,disableTransforms:R,items:d,overIndex:v,useDragOverlay:p,sortedRects:sR(d,l),strategy:i}),[m,f,N.draggable,N.droppable,R,d,v,l,p,i]);return O.createElement(vy.Provider,{value:x},e)}const cR=t=>{let{id:e,items:n,activeIndex:r,overIndex:i}=t;return pl(n,r,i).indexOf(e)},uR=t=>{let{containerId:e,isSorting:n,wasDragging:r,index:i,items:s,newIndex:o,previousItems:a,previousContainerId:l,transition:c}=t;return!c||!r||a!==s&&i===o?!1:n?!0:o!==i&&e===l},hR={duration:200,easing:"ease"},by="transform",dR=Aa.Transition.toString({property:by,duration:0,easing:"linear"}),fR={roleDescription:"sortable"};function pR(t){let{disabled:e,index:n,node:r,rect:i}=t;const[s,o]=D.useState(null),a=D.useRef(n);return Sn(()=>{if(!e&&n!==a.current&&r.current){const l=i.current;if(l){const c=Wi(r.current,{ignoreTransform:!0}),u={x:l.left-c.left,y:l.top-c.top,scaleX:l.width/c.width,scaleY:l.height/c.height};(u.x||u.y)&&o(u)}}n!==a.current&&(a.current=n)},[e,n,r,i]),D.useEffect(()=>{s&&o(null)},[s]),s}function xy(t){let{animateLayoutChanges:e=uR,attributes:n,disabled:r,data:i,getNewIndex:s=cR,id:o,strategy:a,resizeObserverConfig:l,transition:c=hR}=t;const{items:u,containerId:f,activeIndex:p,disabled:d,disableTransforms:g,sortedRects:m,overIndex:v,useDragOverlay:_,strategy:C}=D.useContext(vy),R=mR(r,d),N=u.indexOf(o),x=D.useMemo(()=>({sortable:{containerId:f,index:N,items:u},...i}),[f,i,N,u]),I=D.useMemo(()=>u.slice(u.indexOf(o)),[u,o]),{rect:E,node:y,isOver:w,setNodeRef:T}=iR({id:o,data:x,disabled:R.droppable,resizeObserverConfig:{updateMeasurementsFor:I,...l}}),{active:P,activatorEvent:A,activeNodeRect:k,attributes:B,setNodeRef:$,listeners:X,isDragging:U,over:K,setActivatorNodeRef:ee,transform:ue}=eR({id:o,data:x,attributes:{...fR,...n},disabled:R.draggable}),Ee=BP(T,$),ge=!!P,ae=ge&&!g&&Vo(p)&&Vo(v),$e=!_&&U,Me=$e&&ae?ue:null,Ve=ae?Me??(a??C)({rects:m,activeNodeRect:k,activeIndex:p,overIndex:v,index:N}):null,be=Vo(p)&&Vo(v)?s({id:o,items:u,activeIndex:p,overIndex:v}):N,ze=P==null?void 0:P.id,oe=D.useRef({activeId:ze,items:u,newIndex:be,containerId:f}),Fe=u!==oe.current.items,Ce=e({active:P,containerId:f,isDragging:U,isSorting:ge,id:o,index:N,items:u,newIndex:oe.current.newIndex,previousItems:oe.current.items,previousContainerId:oe.current.containerId,transition:c,wasDragging:oe.current.activeId!=null}),dt=pR({disabled:!Ce,index:N,node:y,rect:E});return D.useEffect(()=>{ge&&oe.current.newIndex!==be&&(oe.current.newIndex=be),f!==oe.current.containerId&&(oe.current.containerId=f),u!==oe.current.items&&(oe.current.items=u)},[ge,be,f,u]),D.useEffect(()=>{if(ze===oe.current.activeId)return;if(ze&&!oe.current.activeId){oe.current.activeId=ze;return}const ft=setTimeout(()=>{oe.current.activeId=ze},50);return()=>clearTimeout(ft)},[ze]),{active:P,activeIndex:p,attributes:B,data:x,rect:E,index:N,newIndex:be,items:u,isOver:w,isSorting:ge,isDragging:U,listeners:X,node:y,overIndex:v,over:K,setNodeRef:Ee,setActivatorNodeRef:ee,setDroppableNodeRef:T,setDraggableNodeRef:$,transform:dt??Ve,transition:Ke()};function Ke(){if(dt||Fe&&oe.current.newIndex===N)return dR;if(!($e&&!fh(A)||!c)&&(ge||Ce))return Aa.Transition.toString({...c,property:by})}}function mR(t,e){var n,r;return typeof t=="boolean"?{draggable:t,droppable:!1}:{draggable:(n=t==null?void 0:t.draggable)!=null?n:e.draggable,droppable:(r=t==null?void 0:t.droppable)!=null?r:e.droppable}}Ne.Down,Ne.Right,Ne.Up,Ne.Left;function gR({title:t,id:e,listid:n,labels:r,item:i,BoardId:s,onDeleteCard:o,BG:a,sharedWith:l,lists:c}){const[u,f]=D.useState({x:0,y:0}),{menuOpen:p,setMenuOpen:d,toggleMenu:g}=mc(),[m,v]=D.useState({x:0,y:0}),[_,C]=D.useState(!1),[R,N]=D.useState(!1),[x,I]=D.useState(r),E=D.useRef(null),y=D.useRef(null),w=D.useRef(null),T=D.useRef(null),P=D.useRef(null),A=D.useRef(null),k=D.useRef(null),[B,$]=D.useState(!1),[X,U]=D.useState(!1),K=D.useRef(null),[ee,ue]=D.useState(!1),[Ee,ge]=D.useState(!1),[ae,$e]=D.useState(t),Me=D.useRef(null),[ie,Ve]=D.useState(!1),[be,ze]=D.useState(a),oe=F=>{switch(F){case"background1":return"bg-green-700";case"background2":return"bg-yellow-800";case"background3":return"bg-amber-700";case"background4":return"bg-red-800";case"background5":return"bg-indigo-800";case"background6":return"bg-blue-800";case"background7":return"bg-pink-900";case"background8":return"bg-gray-800"}},{attributes:Fe,listeners:Ce,setNodeRef:dt,transform:Ke,transition:ft,isDragging:Ze}=xy({id:i.id}),Vt={transform:Ke?`translate3d(${Ke.x}px, ${Ke.y}px,0) rotate(${Ze?-2:0}deg)`:void 0,transition:ft,opacity:Ze?.8:1,cursor:Ze?"grabbing":"pointer",zIndex:Ze?10:"auto"},Y=F=>{dt(F),T.current=F},J=F=>{F.preventDefault(),d(!0);const q=T.current.getBoundingClientRect(),de=q.left+window.scrollX+270,Be=q.top+window.scrollY-6,rt=window.innerWidth;de+200>rt?ue(!0):ue(!1),rt<650?ge(!0):ge(!1);const Lt=de+200>rt?de-535:de,Tt=Be<0?0:Be;f({x:Lt,y:Tt}),document.body.classList.add("MenuisOpen"),C(!0)};D.useEffect(()=>{xe()},[x]),D.useEffect(()=>{he()},[be]);const he=async()=>{const F=ke.currentUser;if(F)try{await je(le(te,`users/${F.uid}/Boards/${s}/Lists/${n}/cards`,e),{background:be});const q=l.map(de=>je(le(te,`users/${de.id}/Boards/${s}/Lists/${n}/cards`,e),{background:be}));await Promise.all(q)}catch(q){console.error("Error updating background: ",q)}else console.error("User is not authenticated.")},xe=async()=>{const F=ke.currentUser;if(F)try{await je(le(te,`users/${F.uid}/Boards/${s}/Lists/${n}/cards`,e),{labels:x});const q=l.map(de=>je(le(te,`users/${de.id}/Boards/${s}/Lists/${n}/cards`,e),{labels:x}));await Promise.all(q)}catch(q){console.error("Error updating labels: ",q)}else console.error("User is not authenticated.")},Re=async()=>{const F=ke.currentUser;if(F)try{o(e);const q=le(te,`users/${F.uid}/Boards/${s}/Lists/${n}/cards`,e);await pn(q);const de=l.map(Be=>{const rt=le(te,`users/${Be.id}/Boards/${s}/Lists/${n}/cards`,e);return pn(rt)});await Promise.all(de)}catch(q){console.error("Error deleting card: ",q)}else console.error("User is not authenticated")},Te=()=>{const F=ke.currentUser,q=document.createElement("textarea");q.value=`users/${F.uid}/Boards/${s}/Lists/${n}/cards/${e}`,document.body.appendChild(q),q.select(),document.execCommand("copy"),document.body.removeChild(q),Ve(!0),setTimeout(()=>{Ve(!1)},1500)},_e=async F=>{const q=ke.currentUser;if(q)try{const de=Kr(te,`users/${q.uid}/Boards/${s}/Lists/${F.id}/cards`),rt=(await Xr(de)).size,Lt=le(te,`users/${q.uid}/Boards/${s}/Lists/${F.id}/cards`,e);await on(Lt,{id:e,title:ae,labels:x,background:be,order:rt});const Tt=l.map($n=>{const Gi=le(te,`users/${$n.id}/Boards/${s}/Lists/${F.id}/cards`,e);return on(Gi,{id:e,title:ae,labels:x,background:be,order:rt})});await Promise.all(Tt),await Re(),window.location.reload()}catch(de){console.error("Error moving card to list: ",de)}else console.error("User is not authenticated")},H=async F=>{const q=F.target.value;$e(q);const de=ke.currentUser;if(de)try{await je(le(te,`users/${de.uid}/Boards/${s}/Lists/${n}/cards`,e),{title:q});const Be=l.map(rt=>je(le(te,`users/${rt.id}/Boards/${s}/Lists/${n}/cards`,e),{title:q}));await Promise.all(Be)}catch(Be){console.error("Error updating card title: ",Be)}else console.error("User is not authenticated.")},W=()=>{N(!0);const F=k.current.getBoundingClientRect();v({x:F.left,y:F.top})},Q=()=>{$(!0);const F=w.current.getBoundingClientRect();v({x:F.left,y:F.top})},se=()=>{U(!0);const F=A.current.getBoundingClientRect();v({x:F.left,y:F.top})};return D.useEffect(()=>{const F=q=>{y.current&&!y.current.contains(q.target)&&!Me.current.contains(q.target)&&(!E.current||!E.current.contains(q.target))&&(!K.current||!K.current.contains(q.target))&&(!P.current||!P.current.contains(q.target))&&(C(!1),d(!1),document.body.classList.remove("MenuisOpen")),E.current&&!E.current.contains(q.target)&&!k.current.contains(q.target)&&N(!1),K.current&&!K.current.contains(q.target)&&!w.current.contains(q.target)&&$(!1),P.current&&!P.current.contains(q.target)&&!A.current.contains(q.target)&&U(!1)};return document.addEventListener("click",F),()=>{document.removeEventListener("click",F)}},[_,R,d]),React.createElement("div",{className:"w-full"},B&&React.createElement("div",{style:{top:window.innerHeight>m.y+350?`${m.y}px`:`${m.y-170}px`,left:Ee?"52%":`${m.x-70}px`,maxWidth:Ee?"170px":" "},ref:K,className:"flex absolute flex-col z-[10001] p-1.5 rounded-md text-gray-300 pt-2 bg-gray-800 gap-1.5"},React.createElement("div",{className:"flex justify-end align-top"},React.createElement("button",{onClick:F=>{F.stopPropagation(),$(!1)},className:"m-1 text-slate-300 px-1 rounded-md text-sm hover:bg-gray-600"},"✕")),React.createElement("div",{className:"flex justify-center gap-6"},React.createElement("h3",{className:"mb-3 -mt-[1.9rem] text-center"},"Background Cover")),React.createElement("div",{className:"flex flex-col gap-1.5"},["background1","background2","background3","background4","background5","background6","background7","background8"].map((F,q)=>React.createElement("div",{className:"flex gap-1.5",key:F},React.createElement("input",{checked:be===oe(F),onChange:()=>{ze(oe(F))},id:`radio-group-${q+1}`,type:"radio",className:"w-5 h-4 cursor-pointer border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),React.createElement("label",{htmlFor:`radio-group-${q+1}`,className:`w-44 rounded-sm mr-4 cursor-pointer border-2 border-opacity-40 border-gray-500 hover:bg-opacity-80 ${oe(F)}`}))))),X&&React.createElement("div",{style:{top:window.innerHeight>m.y+350?`${m.y}px`:`${m.y-170}px`,left:Ee?"52%":`${m.x-70}px`,maxWidth:Ee?"170px":" "},ref:P,className:"flex absolute flex-col z-[10001] w-[200px]  rounded-md text-gray-300 pt-2 bg-gray-800 gap-1.5"},React.createElement("div",{className:"flex justify-end align-top"},React.createElement("button",{onClick:F=>{F.stopPropagation(),U(!1)},className:"m-1 text-slate-300 px-1 rounded-md text-sm hover:bg-gray-600"},"✕")),React.createElement("div",{className:"flex justify-center gap-6"},React.createElement("h3",{className:"mb-3 -mt-[1.9rem] text-center"},"To List")),React.createElement("div",{className:"flex flex-col gap-1"},c.map((F,q)=>React.createElement("div",{key:q,onClick:()=>_e(F),className:"flex py-1 justify-start ga-1 text-gray-300 hover:bg-gray-700  px-4"},React.createElement("p",{className:"text-lg"},q+1),React.createElement("p",{className:"text-lg"},". ",F.title))))),R&&React.createElement("div",{style:{top:window.innerHeight>m.y+350?`${m.y}px`:`${m.y-170}px`,left:Ee?"52%":`${m.x-70}px`,maxWidth:Ee?"170px":" "},ref:E,className:"flex absolute flex-col z-[10001] p-1.5 rounded-md text-gray-300 pt-2 bg-gray-800  gap-1.5"},React.createElement("div",{className:"flex justify-end align-top"},React.createElement("button",{onClick:F=>{F.stopPropagation(),N(!1)},className:" m-1 text-slate-300  px-1  rounded-md  text-sm hover:bg-gray-600"},"✕")),React.createElement("div",{className:"flex justify-center gap-6"},React.createElement("h3",{className:"mb-3 -mt-[1.9rem] text-center"},"Labels")),React.createElement("div",{className:"flex gap-1.5"},React.createElement("input",{checked:x.label1,onChange:()=>{I(F=>({...F,label1:!F.label1}))},id:"checkbox-group-1",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),React.createElement("label",{htmlFor:"checkbox-group-1",className:"w-44 bg-green-600 rounded-sm mr-4 cursor-pointer hover:bg-green-500"})),React.createElement("div",{className:"flex gap-1.5"},React.createElement("input",{checked:x.label2,onChange:()=>{I(F=>({...F,label2:!F.label2}))},id:"checkbox-group-2",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),React.createElement("label",{htmlFor:"checkbox-group-2",className:"w-44 bg-yellow-800 rounded-sm mr-4 cursor-pointer hover:bg-yellow-700"})),React.createElement("div",{className:"flex gap-1.5"},React.createElement("input",{checked:x.label3,onChange:()=>{I(F=>({...F,label3:!F.label3}))},id:"checkbox-group-3",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),React.createElement("label",{htmlFor:"checkbox-group-3",className:"w-44 bg-amber-600  rounded-sm mr-4 cursor-pointer hover:bg-amber-500"})),React.createElement("div",{className:"flex gap-1.5"},React.createElement("input",{checked:x.label4,onChange:()=>{I(F=>({...F,label4:!F.label4}))},id:"checkbox-group-4",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),React.createElement("label",{htmlFor:"checkbox-group-4",className:"w-44 bg-red-700 rounded-sm mr-4 cursor-pointer hover:bg-red-600"})),React.createElement("div",{className:"flex gap-1.5"},React.createElement("input",{checked:x.label5,onChange:()=>{I(F=>({...F,label5:!F.label5}))},id:"checkbox-group-5",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),React.createElement("label",{htmlFor:"checkbox-group-5",className:"w-44 bg-indigo-800 rounded-sm mr-4 cursor-pointer hover:bg-indigo-800"})),React.createElement("div",{className:"flex gap-1.5"},React.createElement("input",{checked:x.label6,onChange:()=>{I(F=>({...F,label6:!F.label6}))},id:"checkbox-group-6",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),React.createElement("label",{htmlFor:"checkbox-group-6",className:"w-44 bg-blue-700 rounded-sm mr-4 cursor-pointer hover:bg-blue-600"})),React.createElement("div",{className:"flex gap-1.5"},React.createElement("input",{checked:x.label7,onChange:()=>{I(F=>({...F,label7:!F.label7}))},id:"checkbox-group-7",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),React.createElement("label",{htmlFor:"checkbox-group-7",className:"w-44 bg-pink-800 rounded-sm mr-4 cursor-pointer hover:bg-pink-700"})),React.createElement("div",{className:"flex gap-1.5 mb-6"},React.createElement("input",{checked:x.label8,onChange:()=>{I(F=>({...F,label8:!F.label8}))},id:"checkbox-group-8",type:"checkbox",className:"w-5 h-4 cursor-pointer  border border-gray-300 rounded-md m-2  checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"}),React.createElement("label",{htmlFor:"checkbox-group-8",className:"w-44 bg-neutral-400 rounded-sm mr-4 cursor-pointer hover:bg-neutral-300"}))),React.createElement("div",{className:`overlay ${_?"visible":""}`}),_&&React.createElement("div",{ref:y,className:"card flex item  z-[1001]  absolute  flex-col gap-[2.5px] ",style:{top:window.innerHeight>u.y+350?`${u.y+7}px`:`${u.y-180}px`,left:Ee?"52.5%":`${u.x+10}px`,alignItems:`${ee?"end":"start"}`}},React.createElement("button",{ref:k,onClick:W,className:"flex text-gray-300 shadow-xl bg-gray-800 hover:bg-gray-700 rounded-sm font-bold p-3 pr-3.5 py-2.5 w-fit  text-sm"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-2"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"}),React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 6h.008v.008H6V6Z"})),"Edit labels "),React.createElement("button",{ref:w,onClick:Q,className:"flex text-gray-300 shadow-xl bg-gray-800  hover:bg-gray-700  font-bold rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-2"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m15 11.25 1.5 1.5.75-.75V8.758l2.276-.61a3 3 0 1 0-3.675-3.675l-.61 2.277H12l-.75.75 1.5 1.5M15 11.25l-8.47 8.47c-.34.34-.8.53-1.28.53s-.94.19-1.28.53l-.97.97-.75-.75.97-.97c.34-.34.53-.8.53-1.28s.19-.94.53-1.28L12.75 9M15 11.25 12.75 9"})),"Change cover"),React.createElement("button",{ref:A,onClick:se,className:"flex text-gray-300 shadow-xl  bg-gray-800  hover:bg-gray-700  font-bold rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-2"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})),"Move"),React.createElement("button",{onClick:Te,className:`flex text-gray-300 shadow-xl ${ie?"bg-green-600":"bg-gray-800"}  ${ie?"hover:bg-green-700":"hover:bg-gray-700"}  font-bold  rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm`},ie?React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-5 mr-2"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"})):React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-2"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"})),ie?"Copied!":"Copy"),React.createElement("button",{onClick:Re,className:"flex text-gray-300  bg-gray-800  hover:bg-gray-700 font-bold  rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-2"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})),"Delete")),React.createElement("div",{ref:Y,style:Vt,...Fe,...Ce,onContextMenu:J,className:`CARD relative justify-center flex flex-col cursor-pointer focus:border-solid focus:border-blue-500 select-none focus:outline-none  text-gray-300 text-md p-1 px-2.5 rounded-md w-full mx-0 my-1.5 ${be||"bg-gray-800"}`},_&&React.createElement("div",null,React.createElement("textarea",{ref:Me,className:`z-[1000]  absolute sm:w-full w-[70%] left-0  sm:right-0 top-0 pb-2 pt-3 ri text-start px-2.5 rounded-md  border-solid border-slate-400 border-0 focus:outline-none  text-slate-300 resize-none overflow-hidden ${be||"bg-gray-800"}`,onChange:H,rows:"1",value:ae,onInput:F=>{F.target.style.height="auto",F.target.style.height=`${F.target.scrollHeight+15}px`}})),React.createElement("div",{className:" absolute right-0 pointer-events-auto text-md p-2 pt-1.5 text-[1.2rem] text-gray-300 hover:opacity-65",onClick:F=>{F.stopPropagation(),J(F)}},"   ",React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.3",stroke:"currentColor",className:"size-6"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"}))),React.createElement("div",{className:"flex flex-wrap gap-2"},x.label1&&React.createElement("span",{className:"z-[1001]  bg-green-600 w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"}),x.label2&&React.createElement("span",{className:"z-[1001] bg-yellow-800 w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"}),x.label3&&React.createElement("span",{className:"z-[1001] bg-amber-600  w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"}),x.label4&&React.createElement("span",{className:"z-[1001] bg-red-700  w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"}),x.label5&&React.createElement("span",{className:"z-[1001]  bg-indigo-700 w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"}),x.label6&&React.createElement("span",{className:"z-[1001]  bg-blue-800 w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"}),x.label7&&React.createElement("span",{className:"z-[1001]  bg-pink-800 w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"}),x.label8&&React.createElement("span",{className:"z-[1001]  bg-neutral-400  w-11 rounded-2xl h-[.45rem] -ml-0.5 mb-0.5 -mt-1.5"})),ae||"Empty Card"))}const vR=D.forwardRef(({item:t,Dragging:e,onDeleteList:n,title:r,lists:i,id:s,BoardId:o,sharedWith:a},l)=>{const[c,u]=D.useState(!1),[f,p]=D.useState(!1),[d,g]=D.useState({x:0,y:0}),m=D.useRef(null),[v,_]=D.useState(""),[C,R]=D.useState(""),[N,x]=D.useState([]),[I,E]=D.useState(r),y=D.useRef(null),w=D.useRef(null),T=D.useRef(null),[P,A]=D.useState(!1),{setMenuOpen:k}=mc(),{menuOpen:B}=mc(),{attributes:$,listeners:X,setNodeRef:U,transform:K,transition:ee,isDragging:ue}=xy({id:t.id,disabled:B}),Ee=Y=>{Y.preventDefault(),console.log("asd"),k(!0);const J=T.current.getBoundingClientRect(),he=J.left+window.scrollX+270,xe=J.top+window.scrollY-6;g({x:he,y:xe}),document.body.classList.add("MenuisOpen"),p(!0)};D.useEffect(()=>{const Y=J=>{w.current&&!w.current.contains(J.target)&&!T.current.contains(J.target)&&!y.current.contains(J.target)&&(p(!1),k(!1),document.body.classList.remove("MenuisOpen"))};return document.addEventListener("click",Y),()=>{document.removeEventListener("click",Y)}},[f]);const ge=()=>{const Y=ke.currentUser,J=document.createElement("textarea");J.value=`users/${Y.uid}/Boards/${o}/Lists/${s}`,document.body.appendChild(J),J.select(),document.execCommand("copy"),document.body.removeChild(J),A(!0),setTimeout(()=>{A(!1)},1500)},ae=Y=>{const J=Y.touches[0],he=Y.target;he.offsetWidth>0&&J.clientX>=he.clientWidth&&Y.stopPropagation()},$e=Y=>{const J=Y.target;J.offsetWidth>0&&Y.clientX>=J.clientWidth&&Y.stopPropagation()},Me=Y=>{Y.preventDefault()},ie=async()=>{const Y=ke.currentUser;if(Y)try{R("");const J=le(te,v);_("");const he=await eo(J);if(he.exists()){const xe=he.data(),Re=new Date().getTime().toString(),Te={...xe,id:Re,order:N.length};x(W=>[...W,Te]);const _e=le(te,`users/${Y.uid}/Boards/${o}/Lists/${s}/cards`,Re);await on(_e,Te),console.log("Card added successfully for current user");const H=a.map(W=>{const Q=le(te,`users/${W.id}/Boards/${o}/Lists/${s}/cards`,Re);return on(Q,Te)});await Promise.all(H),console.log("Card added successfully for all shared users")}else R("Please check the link and try again."),setTimeout(()=>R(""),3e3),console.error("The source card does not exist at the specified link")}catch{R("Please check the link and try again."),setTimeout(()=>R(""),3e3)}else R("User is not authenticated"),console.error("User is not authenticated")},Ve=async()=>{const Y=ke.currentUser;if(Y)try{_("");const J=new Date().getTime().toString(),he={label1:!1,label2:!1,label3:!1,label4:!1,label5:!1,label6:!1,label7:!1,label8:!1},xe="bg-gray-800",Re={id:J,title:v,labels:he,background:xe};x(H=>[...H,Re]);const Te=le(te,`users/${Y.uid}/Boards/${o}/Lists/${s}/cards`,J);await on(Te,{id:J,title:v,labels:he,order:N.length,background:xe}),console.log("Card added successfully for current user");const _e=a.map(H=>{const W=le(te,`users/${H.id}/Boards/${o}/Lists/${s}/cards`,J);return on(W,{id:J,title:v,labels:he,order:N.length,background:xe})});await Promise.all(_e),console.log("Card added successfully for all shared users")}catch(J){console.error("Error adding card to Firestore: ",J)}else console.error("User is not authenticated")};D.useEffect(()=>{const Y=pr(ke,J=>{J?(async()=>{const xe=Kr(te,`users/${J.uid}/Boards/${o}/Lists/${s}/cards`),Te=(await Xr(xe)).docs.map(_e=>({id:_e.id,title:_e.data().title,labels:_e.data().labels,order:_e.data().order,background:_e.data().background})).sort((_e,H)=>_e.order-H.order);x(Te)})().catch(xe=>console.error("Error fetching cards:",xe)):x([])});return()=>Y()},[s]),D.useEffect(()=>{if(!c)return;const Y=J=>{m.current&&!m.current.contains(J.target)&&ze()};return document.addEventListener("click",Y),()=>{document.removeEventListener("click",Y)}},[c]);const be=Y=>{Y.stopPropagation(),u(!0)},ze=()=>{u(!1)},oe=async Y=>{const J=Y.target.value;E(J);const he=ke.currentUser;if(he)try{await je(le(te,`users/${he.uid}/Boards/${o}/Lists`,s),{title:J});const xe=a.map(Re=>je(le(te,`users/${Re.id}/Boards/${o}/Lists`,s),{title:J}));console.log("asdf"),await Promise.all(xe)}catch(xe){console.error("Error updating list title: ",xe)}else console.error("User is not authenticated.")},Fe=async Y=>{const{active:J,over:he}=Y;if(J.id&&(he!=null&&he.id)){const xe=ke.currentUser;if(xe){const Re=N.findIndex(_e=>_e.id===J.id),Te=N.findIndex(_e=>_e.id===he.id);if(Re!==-1&&Te!==-1){const _e=pl(N,Re,Te);try{x(_e);const H=_e.map((Q,se)=>je(le(te,`users/${xe.uid}/Boards/${o}/Lists/${s}/cards`,Q.id),{order:se,title:Q.title,labels:Q.labels,background:Q.background})),W=a.map(Q=>_e.map((se,F)=>je(le(te,`users/${Q.id}/Boards/${o}/Lists/${s}/cards`,se.id),{order:F,title:se.title,labels:se.labels,background:se.background})));await Promise.all([...H,...W.flat()])}catch(H){console.error("Error updating cards:",H)}}}else console.error("User is not authenticated")}},[Ce,dt]=D.useState(window.innerWidth<=650);D.useEffect(()=>{const Y=()=>{dt(window.innerWidth<=650)};return window.addEventListener("resize",Y),()=>{window.removeEventListener("resize",Y)}},[]);const Ke={transform:K?`translate3d(${K.x}px, 0, 20px) rotate(${ue?-2:0}deg)`:void 0,transition:ee,backgroundColor:ue?"rgba(0, 0, 0, 0.8)":"",cursor:ue?"grabbing":"pointer",zIndex:ue?10:"auto"},ft=Qv(Da(vh,{activationConstraint:{delay:100,tolerance:5}}),Da(yh,{activationConstraint:{delay:100,tolerance:5}})),Ze=async Y=>{const J=ke.currentUser;if(x(he=>he.filter(Re=>Re.id!==Y).map((Re,Te)=>({...Re,order:Te}))),J)try{const he=N.filter(Te=>Te.id!==Y);await pn(le(te,`users/${J.uid}/Boards/${o}/Lists/${s}/cards`,Y));const xe=he.map((Te,_e)=>je(le(te,`users/${J.uid}/Boards/${o}/Lists/${s}/cards`,Te.id),{order:_e,title:Te.title,labels:Te.labels,background:Te.background})),Re=a.map(Te=>{const _e=pn(le(te,`users/${Te.id}/Boards/${o}/Lists/${s}/cards`,Y)),H=he.map((W,Q)=>je(le(te,`users/${Te.id}/Boards/${o}/Lists/${s}/cards`,W.id),{order:Q,title:W.title,labels:W.labels,background:W.background}));return[_e,...H]}).flat();await Promise.all([...xe,...Re]),console.log("Card deleted and orders updated for all shared users")}catch(he){console.error("Error updating card title: ",he)}else console.error("User is not authenticated")},Vt=async()=>{const Y=ke.currentUser;if(Y)try{n(s);const J=le(te,`users/${Y.uid}/Boards/${o}/Lists`,s);await pn(J);const he=a.map(xe=>{const Re=le(te,`users/${xe.id}/Boards/${o}/Lists`,s);return pn(Re)});await Promise.all(he)}catch(J){console.error("Error deleting card: ",J)}else console.error("User is not authenticated")};return O.createElement("div",{style:Ke,className:`bg-black  ListCssCustom  px-2.5 py-2.5 shadow-xl  rounded-xl h-fit ${e&&!ue?"swing":""} ${!e||!ue?"snap-start":""}  ${ue?"dragList":""}`},O.createElement("div",{className:`overlay ${f?"visible":""}`}),f&&O.createElement("div",{ref:w,className:"card flex item  z-[10000]  absolute  flex-col gap-1",style:{top:`${d.y+5}px`,left:window.innerWidth>700?`${d.x-225}px`:`${d.x-335}px`,alignItems:`${window.innerWidth>700?"start":"end"}`}},O.createElement("button",{onClick:ge,className:`flex text-gray-300 shadow-xl ${P?"bg-green-600":"bg-gray-800"}  ${P?"hover:bg-green-700":"hover:bg-gray-700"}  font-bold  rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm`},P?O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-5 mr-2"},O.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"})):O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-2"},O.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"})),P?"Copied!":"Copy"),O.createElement("button",{onClick:Vt,className:"flex text-gray-300 shadow-xl bg-gray-800  hover:bg-gray-700  font-bold rounded-sm p-3 pr-3.5  w-fit py-2.5  text-sm"},O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-2"},O.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})),"Delete")),O.createElement("div",{ref:U,...$,...X,onContextMenu:Me},O.createElement("div",{className:"flex relative overflow-x-hidden w-full h-10 justify-between items-start"},O.createElement("div",{className:"focus:border-solid select-none focus:border-blue-500 focus:box-shadow focus:outline-none text-slate-300 px-1 text-lg mt-1.5 w-full mr-2"},I.length>22?`${I.substring(0,22)}...`:I,f&&O.createElement("div",null,O.createElement("textarea",{ref:y,className:"z-[1000] absolute sm:w-full w-[68%] h-10 left-0 sm:right-0 top-0 pb-2 pt-3 ri text-start px-2.5 rounded-md bg-gray-800 border-solid border-slate-400 border-0 focus:outline-none text-slate-300 resize-none overflow-hidden focus:text-slate-300",value:I,rows:"1",onChange:oe}))),O.createElement("button",{ref:T,onClick:Ee,className:"text-slate-300 p-1 hover:opacity-80 select-none text-xl"}," ",O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6"},O.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"})))),O.createElement("div",{onTouchStart:ae,onMouseDown:$e,className:" flex  pr-1.5 flex-col justify-start kkkk my-3 items-center"},O.createElement(fy,{sensors:ft,collisionDetection:Jv,onDragEnd:Fe},O.createElement(yy,{items:N,strategy:my},N.map(Y=>O.createElement(gR,{BoardId:o,key:Y.id,listid:s,title:Y.title,BG:Y.background,id:Y.id,labels:Y.labels,item:Y,onDeleteCard:Ze,sharedWith:a,lists:i})))))),O.createElement("div",null,!c&&O.createElement("button",{onClick:be,className:"text-slate-300 select-none text-opacity-95 hover:opacity-100 hover:bg-zinc-800 hover:bg-opacity-90 hover:shadow-xl w-full text-start px-1.5 py-1  rounded-md"},"+ Add a card"),c&&O.createElement("div",{className:"mt-1",ref:m},O.createElement("textarea",{placeholder:"Enter card title...",className:"pb-5 pt-1 h-16   text-start px-2.5 rounded-md w-full border-solid border-slate-400 border-0 focus:outline-none bg-gray-800 text-slate-300 resize-none overflow-hidden",onChange:Y=>_(Y.target.value),value:v,rows:"1",onInput:Y=>{Y.target.style.height="auto",Y.target.style.height=`${Y.target.scrollHeight+15}px`},onClick:Y=>Y.stopPropagation()}),O.createElement("div",{className:"mt-3  flex justify-start gap-1.5"},O.createElement("button",{onClick:Ve,className:"bg-blue-600 hover:bg-blue-700 mr-1.5 text-gray-950 py-1 px-2 rounded-md text-m"},"Add Card"),O.createElement("button",{onClick:ie,className:"text-slate-300 py-1 px-1 rounded-md text-md hover:bg-gray-800"},O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6"},O.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"}))),O.createElement("button",{onClick:()=>u(!1),className:"text-slate-300 py-1 px-1  rounded-md text-md hover:bg-gray-800"},O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6"},O.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})))),O.createElement("p",{className:"text-red-500 text-sm text-center mt-1"},C))))});function yR({BoardMember:t,visibility:e,id:n,Board:r}){const[i,s]=D.useState(t),[o,a]=D.useState(""),l=async()=>{try{if(!o){console.error("Email is required.");return}const c=Kr(te,"users"),u=await Xr(c);let f=null;if(u.forEach(p=>{const d=p.data();d.email===o&&(f={id:p.id,...d},console.log("User found: ",f))}),f){s(d=>[...d,f]);const p=[...i,f];try{const d=le(te,`users/${i[0].id}/Boards/${n}`);await je(d,{sharedWith:p});const g=le(te,`users/${f.id}/Boards/${n}`);await on(g,{...r.data,sharedWith:p},{merge:!0});const m=p.map(v=>{const _=le(te,`users/${v.id}/Boards/${n}`);return je(_,{sharedWith:p})});await Promise.all(m),console.log("Member added successfully and sharedWith updated for all members.")}catch(d){console.error("Error updating sharedWith: ",d)}}else{console.log("No user found with that email.");return}}catch(c){console.error("Error fetching users: ",c)}};return React.createElement("div",{className:"bg-zinc-800 flex flex-col absolute  sm:top-24 top-[5.55em] z-[10000]   right-3  h-fit w-fit py-3 rounded-lg px-3.5 justify-start"},e==="private"&&React.createElement("div",{className:"w-[100%]  top-[-.2%]  p-1 right-[.1px]  h-[100%] absolute rounded-lg bg-zinc-950 bg-opacity-85 flex justify-center items-center"},React.createElement("div",{className:"flex flex-col"},React.createElement("h1",{className:"text-gray-300 text-center text-lg"},"This Board is private."),React.createElement("p",{className:"text-gray-300 text-center text-sm"},"To share it with others,switch it to shareable mode."))),React.createElement("h1",{className:"text-gray-300 text-lg"},"Share Board"),React.createElement("div",null,React.createElement("div",{className:"flex gap-2.5 mt-4"},React.createElement("input",{onChange:c=>{a(c.target.value)},value:o,type:"email",required:!0,placeholder:"Enter Email address",className:"text:xl p-1.5 px-2.5 pr-12 h-fit rounded-md  border-solid border-slate-400 focus:border-solid focus:border-blue-500 focus:box-shadow border-2  focus:outline-none bg-gray-800 text-sm text-slate-300"}),React.createElement("button",{onClick:l,type:"submit",className:" text-zinc-800 bg-blue-500 hover:bg-blue-600 h-fit p-1.5 px-2 rounded-md"},"Share"))),React.createElement("div",{className:"mt-7"},React.createElement("h3",{className:"text-gray-300 text-[.9rem]"},"Board members ",React.createElement("span",{className:" rounded-[50%] w-fit h-fit  p-.5 px-1 bg-slate-600 text-gray-300"},i.length)),React.createElement("hr",{className:"w-full h-px mt-1  bg-gray-200 border-0 dark:bg-gray-500 opacity-90"})),React.createElement("div",null,i.map((c,u)=>React.createElement("div",{key:c.id,className:"mt-1 flex items-center gap-2"},React.createElement("div",null,React.createElement("div",{className:" pointer-events-none select-none",style:{backgroundColor:c.avatar.color,color:"#fff",width:"36px",height:"36px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:"18px",border:"1.5px solid #555"}},c.avatar.initials.toUpperCase())),React.createElement("div",null,React.createElement("h1",{className:"text-gray-300 text-opacity-95"},c.name," ",u===0?"(you)":""," "),React.createElement("p",{className:"text-gray-300 text-sm -mt-1 text-opacity-85"},"@",c.email," "))))))}var wy={exports:{}},ml={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bR=D,xR=Symbol.for("react.element"),wR=Symbol.for("react.fragment"),ER=Object.prototype.hasOwnProperty,_R=bR.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,TR={key:!0,ref:!0,__self:!0,__source:!0};function Ey(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ER.call(e,r)&&!TR.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xR,type:t,key:s,ref:o,props:i,_owner:_R.current}}ml.Fragment=wR;ml.jsx=Ey;ml.jsxs=Ey;wy.exports=ml;var bn=wy.exports;const bh=D.createContext({});function xh(t){const e=D.useRef(null);return e.current===null&&(e.current=t()),e.current}const gl=D.createContext(null),wh=D.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class SR extends D.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function PR({children:t,isPresent:e}){const n=D.useId(),r=D.useRef(null),i=D.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=D.useContext(wh);return D.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:c}=i.current;if(e||!r.current||!o||!a)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return s&&(u.nonce=s),document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[e]),bn.jsx(SR,{isPresent:e,childRef:r,sizeRef:i,children:D.cloneElement(t,{ref:r})})}const CR=({children:t,initial:e,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:o})=>{const a=xh(RR),l=D.useId(),c=D.useCallback(f=>{a.set(f,!0);for(const p of a.values())if(!p)return;r&&r()},[a,r]),u=D.useMemo(()=>({id:l,initial:e,isPresent:n,custom:i,onExitComplete:c,register:f=>(a.set(f,!1),()=>a.delete(f))}),s?[Math.random(),c]:[n,c]);return D.useMemo(()=>{a.forEach((f,p)=>a.set(p,!1))},[n]),D.useEffect(()=>{!n&&!a.size&&r&&r()},[n]),o==="popLayout"&&(t=bn.jsx(PR,{isPresent:n,children:t})),bn.jsx(gl.Provider,{value:u,children:t})};function RR(){return new Map}function _y(t=!0){const e=D.useContext(gl);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=e,s=D.useId();D.useEffect(()=>{t&&i(s)},[t]);const o=D.useCallback(()=>t&&r&&r(s),[s,r,t]);return!n&&r?[!1,o]:[!0]}const Bo=t=>t.key||"";function Mp(t){const e=[];return D.Children.forEach(t,n=>{D.isValidElement(n)&&e.push(n)}),e}const Eh=typeof window<"u",Ty=Eh?D.useLayoutEffect:D.useEffect,Sy=({children:t,custom:e,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=_y(o),c=D.useMemo(()=>Mp(t),[t]),u=o&&!a?[]:c.map(Bo),f=D.useRef(!0),p=D.useRef(c),d=xh(()=>new Map),[g,m]=D.useState(c),[v,_]=D.useState(c);Ty(()=>{f.current=!1,p.current=c;for(let N=0;N<v.length;N++){const x=Bo(v[N]);u.includes(x)?d.delete(x):d.get(x)!==!0&&d.set(x,!1)}},[v,u.length,u.join("-")]);const C=[];if(c!==g){let N=[...c];for(let x=0;x<v.length;x++){const I=v[x],E=Bo(I);u.includes(E)||(N.splice(x,0,I),C.push(I))}s==="wait"&&C.length&&(N=C),_(Mp(N)),m(c);return}const{forceRender:R}=D.useContext(bh);return bn.jsx(bn.Fragment,{children:v.map(N=>{const x=Bo(N),I=o&&!a?!1:c===v||u.includes(x),E=()=>{if(d.has(x))d.set(x,!0);else return;let y=!0;d.forEach(w=>{w||(y=!1)}),y&&(R==null||R(),_(p.current),o&&(l==null||l()),r&&r())};return bn.jsx(CR,{isPresent:I,initial:!f.current||n?void 0:!1,custom:I?void 0:e,presenceAffectsLayout:i,mode:s,onExitComplete:I?void 0:E,children:N},x)})})},Gt=t=>t;let Py=Gt;function _h(t){let e;return()=>(e===void 0&&(e=t()),e)}const ki=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},Mn=t=>t*1e3,On=t=>t/1e3,IR={useManualTiming:!1};function AR(t){let e=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,f=!1)=>{const d=f&&r?e:n;return u&&s.add(c),d.has(c)||d.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,r){i=!0;return}r=!0,[e,n]=[n,e],e.forEach(a),e.clear(),r=!1,i&&(i=!1,l.process(c))}};return l}const Fo=["read","resolveKeyframes","update","preRender","render","postRender"],kR=40;function Cy(t,e){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Fo.reduce((_,C)=>(_[C]=AR(s),_),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:f,postRender:p}=o,d=()=>{const _=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(_-i.timestamp,kR),1),i.timestamp=_,i.isProcessing=!0,a.process(i),l.process(i),c.process(i),u.process(i),f.process(i),p.process(i),i.isProcessing=!1,n&&e&&(r=!1,t(d))},g=()=>{n=!0,r=!0,i.isProcessing||t(d)};return{schedule:Fo.reduce((_,C)=>{const R=o[C];return _[C]=(N,x=!1,I=!1)=>(n||g(),R.schedule(N,x,I)),_},{}),cancel:_=>{for(let C=0;C<Fo.length;C++)o[Fo[C]].cancel(_)},state:i,steps:o}}const{schedule:He,cancel:mr,state:bt,steps:nc}=Cy(typeof requestAnimationFrame<"u"?requestAnimationFrame:Gt,!0),Ry=D.createContext({strict:!1}),Op={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Di={};for(const t in Op)Di[t]={isEnabled:e=>Op[t].some(n=>!!e[n])};function DR(t){for(const e in t)Di[e]={...Di[e],...t[e]}}const NR=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Ma(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||NR.has(t)}let Iy=t=>!Ma(t);function MR(t){t&&(Iy=e=>e.startsWith("on")?!Ma(e):t(e))}try{MR(require("@emotion/is-prop-valid").default)}catch{}function OR(t,e,n){const r={};for(const i in t)i==="values"&&typeof t.values=="object"||(Iy(i)||n===!0&&Ma(i)||!e&&!Ma(i)||t.draggable&&i.startsWith("onDrag"))&&(r[i]=t[i]);return r}function VR(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...r)=>t(...r);return new Proxy(n,{get:(r,i)=>i==="create"?t:(e.has(i)||e.set(i,t(i)),e.get(i))})}const vl=D.createContext({});function js(t){return typeof t=="string"||Array.isArray(t)}function yl(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Th=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Sh=["initial",...Th];function bl(t){return yl(t.animate)||Sh.some(e=>js(t[e]))}function Ay(t){return!!(bl(t)||t.variants)}function LR(t,e){if(bl(t)){const{initial:n,animate:r}=t;return{initial:n===!1||js(n)?n:void 0,animate:js(r)?r:void 0}}return t.inherit!==!1?e:{}}function BR(t){const{initial:e,animate:n}=LR(t,D.useContext(vl));return D.useMemo(()=>({initial:e,animate:n}),[Vp(e),Vp(n)])}function Vp(t){return Array.isArray(t)?t.join(" "):t}const FR=Symbol.for("motionComponentSymbol");function fi(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function UR(t,e,n){return D.useCallback(r=>{r&&t.onMount&&t.onMount(r),e&&(r?e.mount(r):e.unmount()),n&&(typeof n=="function"?n(r):fi(n)&&(n.current=r))},[e])}const Ph=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),jR="framerAppearId",ky="data-"+Ph(jR),{schedule:Ch}=Cy(queueMicrotask,!1),Dy=D.createContext({});function $R(t,e,n,r,i){var s,o;const{visualElement:a}=D.useContext(vl),l=D.useContext(Ry),c=D.useContext(gl),u=D.useContext(wh).reducedMotion,f=D.useRef(null);r=r||l.renderer,!f.current&&r&&(f.current=r(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const p=f.current,d=D.useContext(Dy);p&&!p.projection&&i&&(p.type==="html"||p.type==="svg")&&zR(f.current,n,i,d);const g=D.useRef(!1);D.useInsertionEffect(()=>{p&&g.current&&p.update(n,c)});const m=n[ky],v=D.useRef(!!m&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,m))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,m)));return Ty(()=>{p&&(g.current=!0,window.MotionIsMounted=!0,p.updateFeatures(),Ch.render(p.render),v.current&&p.animationState&&p.animationState.animateChanges())}),D.useEffect(()=>{p&&(!v.current&&p.animationState&&p.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var _;(_=window.MotionHandoffMarkAsComplete)===null||_===void 0||_.call(window,m)}),v.current=!1))}),p}function zR(t,e,n,r){const{layoutId:i,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Ny(t.parent)),t.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!o||a&&fi(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:c})}function Ny(t){if(t)return t.options.allowProjection!==!1?t.projection:Ny(t.parent)}function WR({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:r,Component:i}){var s,o;t&&DR(t);function a(c,u){let f;const p={...D.useContext(wh),...c,layoutId:HR(c)},{isStatic:d}=p,g=BR(c),m=r(c,d);if(!d&&Eh){qR();const v=GR(p);f=v.MeasureLayout,g.visualElement=$R(i,m,p,e,v.ProjectionNode)}return bn.jsxs(vl.Provider,{value:g,children:[f&&g.visualElement?bn.jsx(f,{visualElement:g.visualElement,...p}):null,n(i,c,UR(m,g.visualElement,u),m,d,g.visualElement)]})}a.displayName=`motion.${typeof i=="string"?i:`create(${(o=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&o!==void 0?o:""})`}`;const l=D.forwardRef(a);return l[FR]=i,l}function HR({layoutId:t}){const e=D.useContext(bh).id;return e&&t!==void 0?e+"-"+t:t}function qR(t,e){D.useContext(Ry).strict}function GR(t){const{drag:e,layout:n}=Di;if(!e&&!n)return{};const r={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const KR=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Rh(t){return typeof t!="string"||t.includes("-")?!1:!!(KR.indexOf(t)>-1||/[A-Z]/u.test(t))}function Lp(t){const e=[{},{}];return t==null||t.values.forEach((n,r)=>{e[0][r]=n.get(),e[1][r]=n.getVelocity()}),e}function Ih(t,e,n,r){if(typeof e=="function"){const[i,s]=Lp(r);e=e(n!==void 0?n:t.custom,i,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[i,s]=Lp(r);e=e(n!==void 0?n:t.custom,i,s)}return e}const Qc=t=>Array.isArray(t),XR=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),YR=t=>Qc(t)?t[t.length-1]||0:t,Mt=t=>!!(t&&t.getVelocity);function na(t){const e=Mt(t)?t.get():t;return XR(e)?e.toValue():e}function QR({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},r,i,s){const o={latestValues:JR(r,i,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:r,current:a,...o}),o.onUpdate=a=>n(a)),o}const My=t=>(e,n)=>{const r=D.useContext(vl),i=D.useContext(gl),s=()=>QR(t,e,r,i);return n?s():xh(s)};function JR(t,e,n,r){const i={},s=r(t,{});for(const p in s)i[p]=na(s[p]);let{initial:o,animate:a}=t;const l=bl(t),c=Ay(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const f=u?a:o;if(f&&typeof f!="boolean"&&!yl(f)){const p=Array.isArray(f)?f:[f];for(let d=0;d<p.length;d++){const g=Ih(t,p[d]);if(g){const{transitionEnd:m,transition:v,..._}=g;for(const C in _){let R=_[C];if(Array.isArray(R)){const N=u?R.length-1:0;R=R[N]}R!==null&&(i[C]=R)}for(const C in m)i[C]=m[C]}}}return i}const Hi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Qr=new Set(Hi),Oy=t=>e=>typeof e=="string"&&e.startsWith(t),Vy=Oy("--"),ZR=Oy("var(--"),Ah=t=>ZR(t)?eI.test(t.split("/*")[0].trim()):!1,eI=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ly=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Un=(t,e,n)=>n>e?e:n<t?t:n,qi={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},$s={...qi,transform:t=>Un(0,1,t)},Uo={...qi,default:1},lo=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Kn=lo("deg"),xn=lo("%"),fe=lo("px"),tI=lo("vh"),nI=lo("vw"),Bp={...xn,parse:t=>xn.parse(t)/100,transform:t=>xn.transform(t*100)},rI={borderWidth:fe,borderTopWidth:fe,borderRightWidth:fe,borderBottomWidth:fe,borderLeftWidth:fe,borderRadius:fe,radius:fe,borderTopLeftRadius:fe,borderTopRightRadius:fe,borderBottomRightRadius:fe,borderBottomLeftRadius:fe,width:fe,maxWidth:fe,height:fe,maxHeight:fe,top:fe,right:fe,bottom:fe,left:fe,padding:fe,paddingTop:fe,paddingRight:fe,paddingBottom:fe,paddingLeft:fe,margin:fe,marginTop:fe,marginRight:fe,marginBottom:fe,marginLeft:fe,backgroundPositionX:fe,backgroundPositionY:fe},iI={rotate:Kn,rotateX:Kn,rotateY:Kn,rotateZ:Kn,scale:Uo,scaleX:Uo,scaleY:Uo,scaleZ:Uo,skew:Kn,skewX:Kn,skewY:Kn,distance:fe,translateX:fe,translateY:fe,translateZ:fe,x:fe,y:fe,z:fe,perspective:fe,transformPerspective:fe,opacity:$s,originX:Bp,originY:Bp,originZ:fe},Fp={...qi,transform:Math.round},kh={...rI,...iI,zIndex:Fp,size:fe,fillOpacity:$s,strokeOpacity:$s,numOctaves:Fp},sI={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},oI=Hi.length;function aI(t,e,n){let r="",i=!0;for(let s=0;s<oI;s++){const o=Hi[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=Ly(a,kh[o]);if(!l){i=!1;const u=sI[o]||o;r+=`${u}(${c}) `}n&&(e[o]=c)}}return r=r.trim(),n?r=n(e,i?"":r):i&&(r="none"),r}function Dh(t,e,n){const{style:r,vars:i,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Qr.has(l)){o=!0;continue}else if(Vy(l)){i[l]=c;continue}else{const u=Ly(c,kh[l]);l.startsWith("origin")?(a=!0,s[l]=u):r[l]=u}}if(e.transform||(o||n?r.transform=aI(e,t.transform,n):r.transform&&(r.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;r.transformOrigin=`${l} ${c} ${u}`}}const lI={offset:"stroke-dashoffset",array:"stroke-dasharray"},cI={offset:"strokeDashoffset",array:"strokeDasharray"};function uI(t,e,n=1,r=0,i=!0){t.pathLength=1;const s=i?lI:cI;t[s.offset]=fe.transform(-r);const o=fe.transform(e),a=fe.transform(n);t[s.array]=`${o} ${a}`}function Up(t,e,n){return typeof t=="string"?t:fe.transform(e+n*t)}function hI(t,e,n){const r=Up(e,t.x,t.width),i=Up(n,t.y,t.height);return`${r} ${i}`}function Nh(t,{attrX:e,attrY:n,attrScale:r,originX:i,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,f){if(Dh(t,c,f),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:p,style:d,dimensions:g}=t;p.transform&&(g&&(d.transform=p.transform),delete p.transform),g&&(i!==void 0||s!==void 0||d.transform)&&(d.transformOrigin=hI(g,i!==void 0?i:.5,s!==void 0?s:.5)),e!==void 0&&(p.x=e),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),o!==void 0&&uI(p,o,a,l,!1)}const Mh=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),By=()=>({...Mh(),attrs:{}}),Oh=t=>typeof t=="string"&&t.toLowerCase()==="svg";function Fy(t,{style:e,vars:n},r,i){Object.assign(t.style,e,i&&i.getProjectionStyles(r));for(const s in n)t.style.setProperty(s,n[s])}const Uy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function jy(t,e,n,r){Fy(t,e,void 0,r);for(const i in e.attrs)t.setAttribute(Uy.has(i)?i:Ph(i),e.attrs[i])}const Oa={};function dI(t){Object.assign(Oa,t)}function $y(t,{layout:e,layoutId:n}){return Qr.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!Oa[t]||t==="opacity")}function Vh(t,e,n){var r;const{style:i}=t,s={};for(const o in i)(Mt(i[o])||e.style&&Mt(e.style[o])||$y(o,t)||((r=n==null?void 0:n.getValue(o))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[o]=i[o]);return s}function zy(t,e,n){const r=Vh(t,e,n);for(const i in t)if(Mt(t[i])||Mt(e[i])){const s=Hi.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=t[i]}return r}function fI(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const jp=["x","y","width","height","cx","cy","r"],pI={useVisualState:My({scrapeMotionValuesFromProps:zy,createRenderState:By,onUpdate:({props:t,prevProps:e,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in i)if(Qr.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<jp.length;a++){const l=jp[a];t[l]!==e[l]&&(o=!0)}o&&He.read(()=>{fI(n,r),He.render(()=>{Nh(r,i,Oh(n.tagName),t.transformTemplate),jy(n,r)})})}})},mI={useVisualState:My({scrapeMotionValuesFromProps:Vh,createRenderState:Mh})};function Wy(t,e,n){for(const r in e)!Mt(e[r])&&!$y(r,n)&&(t[r]=e[r])}function gI({transformTemplate:t},e){return D.useMemo(()=>{const n=Mh();return Dh(n,e,t),Object.assign({},n.vars,n.style)},[e])}function vI(t,e){const n=t.style||{},r={};return Wy(r,n,t),Object.assign(r,gI(t,e)),r}function yI(t,e){const n={},r=vI(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=r,n}function bI(t,e,n,r){const i=D.useMemo(()=>{const s=By();return Nh(s,e,Oh(r),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};Wy(s,t.style,t),i.style={...s,...i.style}}return i}function xI(t=!1){return(n,r,i,{latestValues:s},o)=>{const l=(Rh(n)?bI:yI)(r,s,o,n),c=OR(r,typeof n=="string",t),u=n!==D.Fragment?{...c,...l,ref:i}:{},{children:f}=r,p=D.useMemo(()=>Mt(f)?f.get():f,[f]);return D.createElement(n,{...u,children:p})}}function wI(t,e){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const o={...Rh(r)?pI:mI,preloadedFeatures:t,useRender:xI(i),createVisualElement:e,Component:r};return WR(o)}}function Hy(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let r=0;r<n;r++)if(e[r]!==t[r])return!1;return!0}function xl(t,e,n){const r=t.getProps();return Ih(r,e,n!==void 0?n:r.custom,t)}const EI=_h(()=>window.ScrollTimeline!==void 0);class _I{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=n}attachTimeline(e,n){const r=this.animations.map(i=>{if(EI()&&i.attachTimeline)return i.attachTimeline(e);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class TI extends _I{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Lh(t,e){return t?t[e]||t.default||t:void 0}const Jc=2e4;function qy(t){let e=0;const n=50;let r=t.next(e);for(;!r.done&&e<Jc;)e+=n,r=t.next(e);return e>=Jc?1/0:e}function Bh(t){return typeof t=="function"}function $p(t,e){t.timeline=e,t.onfinish=null}const Fh=t=>Array.isArray(t)&&typeof t[0]=="number",SI={linearEasing:void 0};function PI(t,e){const n=_h(t);return()=>{var r;return(r=SI[e])!==null&&r!==void 0?r:n()}}const Va=PI(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Gy=(t,e,n=10)=>{let r="";const i=Math.max(Math.round(e/n),2);for(let s=0;s<i;s++)r+=t(ki(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function Ky(t){return!!(typeof t=="function"&&Va()||!t||typeof t=="string"&&(t in Zc||Va())||Fh(t)||Array.isArray(t)&&t.every(Ky))}const us=([t,e,n,r])=>`cubic-bezier(${t}, ${e}, ${n}, ${r})`,Zc={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:us([0,.65,.55,1]),circOut:us([.55,0,1,.45]),backIn:us([.31,.01,.66,-.59]),backOut:us([.33,1.53,.69,.99])};function Xy(t,e){if(t)return typeof t=="function"&&Va()?Gy(t,e):Fh(t)?us(t):Array.isArray(t)?t.map(n=>Xy(n,e)||Zc.easeOut):Zc[t]}const rn={x:!1,y:!1};function Yy(){return rn.x||rn.y}function CI(t,e,n){var r;if(t instanceof Element)return[t];if(typeof t=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function Qy(t,e){const n=CI(t),r=new AbortController,i={passive:!0,...e,signal:r.signal};return[n,i,()=>r.abort()]}function zp(t){return e=>{e.pointerType==="touch"||Yy()||t(e)}}function RI(t,e,n={}){const[r,i,s]=Qy(t,n),o=zp(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=zp(f=>{c(f),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,i)});return r.forEach(a=>{a.addEventListener("pointerenter",o,i)}),s}const Jy=(t,e)=>e?t===e?!0:Jy(t,e.parentElement):!1,Uh=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,II=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function AI(t){return II.has(t.tagName)||t.tabIndex!==-1}const hs=new WeakSet;function Wp(t){return e=>{e.key==="Enter"&&t(e)}}function rc(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const kI=(t,e)=>{const n=t.currentTarget;if(!n)return;const r=Wp(()=>{if(hs.has(n))return;rc(n,"down");const i=Wp(()=>{rc(n,"up")}),s=()=>rc(n,"cancel");n.addEventListener("keyup",i,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",r,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),e)};function Hp(t){return Uh(t)&&!Yy()}function DI(t,e,n={}){const[r,i,s]=Qy(t,n),o=a=>{const l=a.currentTarget;if(!Hp(a)||hs.has(l))return;hs.add(l);const c=e(a),u=(d,g)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",p),!(!Hp(d)||!hs.has(l))&&(hs.delete(l),typeof c=="function"&&c(d,{success:g}))},f=d=>{u(d,n.useGlobalTarget||Jy(l,d.target))},p=d=>{u(d,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",p,i)};return r.forEach(a=>{!AI(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,i),a.addEventListener("focus",c=>kI(c,i),i)}),s}function NI(t){return t==="x"||t==="y"?rn[t]?null:(rn[t]=!0,()=>{rn[t]=!1}):rn.x||rn.y?null:(rn.x=rn.y=!0,()=>{rn.x=rn.y=!1})}const Zy=new Set(["width","height","top","left","right","bottom",...Hi]);let ra;function MI(){ra=void 0}const wn={now:()=>(ra===void 0&&wn.set(bt.isProcessing||IR.useManualTiming?bt.timestamp:performance.now()),ra),set:t=>{ra=t,queueMicrotask(MI)}};function jh(t,e){t.indexOf(e)===-1&&t.push(e)}function $h(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class zh{constructor(){this.subscriptions=[]}add(e){return jh(this.subscriptions,e),()=>$h(this.subscriptions,e)}notify(e,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](e,n,r);else for(let s=0;s<i;s++){const o=this.subscriptions[s];o&&o(e,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function eb(t,e){return e?t*(1e3/e):0}const qp=30,OI=t=>!isNaN(parseFloat(t));class VI{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=wn.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=wn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=OI(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new zh);const r=this.events[e].add(n);return e==="change"?()=>{r(),He.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=wn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>qp)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,qp);return eb(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function zs(t,e){return new VI(t,e)}function LI(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,zs(n))}function BI(t,e){const n=xl(t,e);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const o in s){const a=YR(s[o]);LI(t,o,a)}}function FI(t){return!!(Mt(t)&&t.add)}function eu(t,e){const n=t.getValue("willChange");if(FI(n))return n.add(e)}function tb(t){return t.props[ky]}const nb=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,UI=1e-7,jI=12;function $I(t,e,n,r,i){let s,o,a=0;do o=e+(n-e)/2,s=nb(o,r,i)-t,s>0?n=o:e=o;while(Math.abs(s)>UI&&++a<jI);return o}function co(t,e,n,r){if(t===e&&n===r)return Gt;const i=s=>$I(s,0,1,t,n);return s=>s===0||s===1?s:nb(i(s),e,r)}const rb=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,ib=t=>e=>1-t(1-e),sb=co(.33,1.53,.69,.99),Wh=ib(sb),ob=rb(Wh),ab=t=>(t*=2)<1?.5*Wh(t):.5*(2-Math.pow(2,-10*(t-1))),Hh=t=>1-Math.sin(Math.acos(t)),lb=ib(Hh),cb=rb(Hh),ub=t=>/^0[^.\s]+$/u.test(t);function zI(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||ub(t):!0}const Ts=t=>Math.round(t*1e5)/1e5,qh=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function WI(t){return t==null}const HI=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Gh=(t,e)=>n=>!!(typeof n=="string"&&HI.test(n)&&n.startsWith(t)||e&&!WI(n)&&Object.prototype.hasOwnProperty.call(n,e)),hb=(t,e,n)=>r=>{if(typeof r!="string")return r;const[i,s,o,a]=r.match(qh);return{[t]:parseFloat(i),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},qI=t=>Un(0,255,t),ic={...qi,transform:t=>Math.round(qI(t))},Mr={test:Gh("rgb","red"),parse:hb("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+ic.transform(t)+", "+ic.transform(e)+", "+ic.transform(n)+", "+Ts($s.transform(r))+")"};function GI(t){let e="",n="",r="",i="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),r=t.substring(5,7),i=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),r=t.substring(3,4),i=t.substring(4,5),e+=e,n+=n,r+=r,i+=i),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const tu={test:Gh("#"),parse:GI,transform:Mr.transform},pi={test:Gh("hsl","hue"),parse:hb("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+xn.transform(Ts(e))+", "+xn.transform(Ts(n))+", "+Ts($s.transform(r))+")"},kt={test:t=>Mr.test(t)||tu.test(t)||pi.test(t),parse:t=>Mr.test(t)?Mr.parse(t):pi.test(t)?pi.parse(t):tu.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Mr.transform(t):pi.transform(t)},KI=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function XI(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(qh))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(KI))===null||n===void 0?void 0:n.length)||0)>0}const db="number",fb="color",YI="var",QI="var(",Gp="${}",JI=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ws(t){const e=t.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const a=e.replace(JI,l=>(kt.test(l)?(r.color.push(s),i.push(fb),n.push(kt.parse(l))):l.startsWith(QI)?(r.var.push(s),i.push(YI),n.push(l)):(r.number.push(s),i.push(db),n.push(parseFloat(l))),++s,Gp)).split(Gp);return{values:n,split:a,indexes:r,types:i}}function pb(t){return Ws(t).values}function mb(t){const{split:e,types:n}=Ws(t),r=e.length;return i=>{let s="";for(let o=0;o<r;o++)if(s+=e[o],i[o]!==void 0){const a=n[o];a===db?s+=Ts(i[o]):a===fb?s+=kt.transform(i[o]):s+=i[o]}return s}}const ZI=t=>typeof t=="number"?0:t;function e2(t){const e=pb(t);return mb(t)(e.map(ZI))}const gr={test:XI,parse:pb,createTransformer:mb,getAnimatableNone:e2},t2=new Set(["brightness","contrast","saturate","opacity"]);function n2(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(qh)||[];if(!r)return t;const i=n.replace(r,"");let s=t2.has(e)?1:0;return r!==n&&(s*=100),e+"("+s+i+")"}const r2=/\b([a-z-]*)\(.*?\)/gu,nu={...gr,getAnimatableNone:t=>{const e=t.match(r2);return e?e.map(n2).join(" "):t}},i2={...kh,color:kt,backgroundColor:kt,outlineColor:kt,fill:kt,stroke:kt,borderColor:kt,borderTopColor:kt,borderRightColor:kt,borderBottomColor:kt,borderLeftColor:kt,filter:nu,WebkitFilter:nu},Kh=t=>i2[t];function gb(t,e){let n=Kh(t);return n!==nu&&(n=gr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const s2=new Set(["auto","none","0"]);function o2(t,e,n){let r=0,i;for(;r<t.length&&!i;){const s=t[r];typeof s=="string"&&!s2.has(s)&&Ws(s).values.length&&(i=t[r]),r++}if(i&&n)for(const s of e)t[s]=gb(n,i)}const Kp=t=>t===qi||t===fe,Xp=(t,e)=>parseFloat(t.split(", ")[e]),Yp=(t,e)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return Xp(i[1],e);{const s=r.match(/^matrix\((.+)\)$/u);return s?Xp(s[1],t):0}},a2=new Set(["x","y","z"]),l2=Hi.filter(t=>!a2.has(t));function c2(t){const e=[];return l2.forEach(n=>{const r=t.getValue(n);r!==void 0&&(e.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),e}const Ni={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Yp(4,13),y:Yp(5,14)};Ni.translateX=Ni.x;Ni.translateY=Ni.y;const Or=new Set;let ru=!1,iu=!1;function vb(){if(iu){const t=Array.from(Or).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),n=new Map;e.forEach(r=>{const i=c2(r);i.length&&(n.set(r,i),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,o])=>{var a;(a=r.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}iu=!1,ru=!1,Or.forEach(t=>t.complete()),Or.clear()}function yb(){Or.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(iu=!0)})}function u2(){yb(),vb()}class Xh{constructor(e,n,r,i,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Or.add(this),ru||(ru=!0,He.read(yb),He.resolveKeyframes(vb))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:r,motionValue:i}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=i==null?void 0:i.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(r&&n){const l=r.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),i&&o===void 0&&i.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Or.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Or.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const bb=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),h2=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function d2(t){const e=h2.exec(t);if(!e)return[,];const[,n,r,i]=e;return[`--${n??r}`,i]}function xb(t,e,n=1){const[r,i]=d2(t);if(!r)return;const s=window.getComputedStyle(e).getPropertyValue(r);if(s){const o=s.trim();return bb(o)?parseFloat(o):o}return Ah(i)?xb(i,e,n+1):i}const wb=t=>e=>e.test(t),f2={test:t=>t==="auto",parse:t=>t},Eb=[qi,fe,xn,Kn,nI,tI,f2],Qp=t=>Eb.find(wb(t));class _b extends Xh{constructor(e,n,r,i,s){super(e,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),Ah(c))){const u=xb(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!Zy.has(r)||e.length!==2)return;const[i,s]=e,o=Qp(i),a=Qp(s);if(o!==a)if(Kp(o)&&Kp(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,r=[];for(let i=0;i<e.length;i++)zI(e[i])&&r.push(i);r.length&&o2(e,r,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ni[r](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&e.getValue(r,i).jump(i,!1)}measureEndState(){var e;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const o=i.length-1,a=i[o];i[o]=Ni[r](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Jp=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(gr.test(t)||t==="0")&&!t.startsWith("url("));function p2(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function m2(t,e,n,r){const i=t[0];if(i===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Jp(i,e),a=Jp(s,e);return!o||!a?!1:p2(t)||(n==="spring"||Bh(n))&&r}const g2=t=>t!==null;function wl(t,{repeat:e,repeatType:n="loop"},r){const i=t.filter(g2),s=e&&n!=="loop"&&e%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const v2=40;class Tb{constructor({autoplay:e=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=wn.now(),this.options={autoplay:e,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>v2?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&u2(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=wn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!m2(e,r,i,s))if(o)this.options.duration=0;else{l&&l(wl(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Xe=(t,e,n)=>t+(e-t)*n;function sc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function y2({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let i=0,s=0,o=0;if(!e)i=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;i=sc(l,a,t+1/3),s=sc(l,a,t),o=sc(l,a,t-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:r}}function La(t,e){return n=>n>0?e:t}const oc=(t,e,n)=>{const r=t*t,i=n*(e*e-r)+r;return i<0?0:Math.sqrt(i)},b2=[tu,Mr,pi],x2=t=>b2.find(e=>e.test(t));function Zp(t){const e=x2(t);if(!e)return!1;let n=e.parse(t);return e===pi&&(n=y2(n)),n}const em=(t,e)=>{const n=Zp(t),r=Zp(e);if(!n||!r)return La(t,e);const i={...n};return s=>(i.red=oc(n.red,r.red,s),i.green=oc(n.green,r.green,s),i.blue=oc(n.blue,r.blue,s),i.alpha=Xe(n.alpha,r.alpha,s),Mr.transform(i))},w2=(t,e)=>n=>e(t(n)),uo=(...t)=>t.reduce(w2),su=new Set(["none","hidden"]);function E2(t,e){return su.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function _2(t,e){return n=>Xe(t,e,n)}function Yh(t){return typeof t=="number"?_2:typeof t=="string"?Ah(t)?La:kt.test(t)?em:P2:Array.isArray(t)?Sb:typeof t=="object"?kt.test(t)?em:T2:La}function Sb(t,e){const n=[...t],r=n.length,i=t.map((s,o)=>Yh(s)(s,e[o]));return s=>{for(let o=0;o<r;o++)n[o]=i[o](s);return n}}function T2(t,e){const n={...t,...e},r={};for(const i in n)t[i]!==void 0&&e[i]!==void 0&&(r[i]=Yh(t[i])(t[i],e[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function S2(t,e){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][i[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;r[s]=l,i[o]++}return r}const P2=(t,e)=>{const n=gr.createTransformer(e),r=Ws(t),i=Ws(e);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?su.has(t)&&!i.values.length||su.has(e)&&!r.values.length?E2(t,e):uo(Sb(S2(r,i),i.values),n):La(t,e)};function Pb(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Xe(t,e,n):Yh(t)(t,e)}const C2=5;function Cb(t,e,n){const r=Math.max(e-C2,0);return eb(n-t(r),e-r)}const Je={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},tm=.001;function R2({duration:t=Je.duration,bounce:e=Je.bounce,velocity:n=Je.velocity,mass:r=Je.mass}){let i,s,o=1-e;o=Un(Je.minDamping,Je.maxDamping,o),t=Un(Je.minDuration,Je.maxDuration,On(t)),o<1?(i=c=>{const u=c*o,f=u*t,p=u-n,d=ou(c,o),g=Math.exp(-f);return tm-p/d*g},s=c=>{const f=c*o*t,p=f*n+n,d=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-f),m=ou(Math.pow(c,2),o);return(-i(c)+tm>0?-1:1)*((p-d)*g)/m}):(i=c=>{const u=Math.exp(-c*t),f=(c-n)*t+1;return-.001+u*f},s=c=>{const u=Math.exp(-c*t),f=(n-c)*(t*t);return u*f});const a=5/t,l=A2(i,s,a);if(t=Mn(t),isNaN(l))return{stiffness:Je.stiffness,damping:Je.damping,duration:t};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:t}}}const I2=12;function A2(t,e,n){let r=n;for(let i=1;i<I2;i++)r=r-t(r)/e(r);return r}function ou(t,e){return t*Math.sqrt(1-e*e)}const k2=["duration","bounce"],D2=["stiffness","damping","mass"];function nm(t,e){return e.some(n=>t[n]!==void 0)}function N2(t){let e={velocity:Je.velocity,stiffness:Je.stiffness,damping:Je.damping,mass:Je.mass,isResolvedFromDuration:!1,...t};if(!nm(t,D2)&&nm(t,k2))if(t.visualDuration){const n=t.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Un(.05,1,1-(t.bounce||0))*Math.sqrt(i);e={...e,mass:Je.mass,stiffness:i,damping:s}}else{const n=R2(t);e={...e,...n,mass:Je.mass},e.isResolvedFromDuration=!0}return e}function Rb(t=Je.visualDuration,e=Je.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:f,velocity:p,isResolvedFromDuration:d}=N2({...n,velocity:-On(n.velocity||0)}),g=p||0,m=c/(2*Math.sqrt(l*u)),v=o-s,_=On(Math.sqrt(l/u)),C=Math.abs(v)<5;r||(r=C?Je.restSpeed.granular:Je.restSpeed.default),i||(i=C?Je.restDelta.granular:Je.restDelta.default);let R;if(m<1){const x=ou(_,m);R=I=>{const E=Math.exp(-m*_*I);return o-E*((g+m*_*v)/x*Math.sin(x*I)+v*Math.cos(x*I))}}else if(m===1)R=x=>o-Math.exp(-_*x)*(v+(g+_*v)*x);else{const x=_*Math.sqrt(m*m-1);R=I=>{const E=Math.exp(-m*_*I),y=Math.min(x*I,300);return o-E*((g+m*_*v)*Math.sinh(y)+x*v*Math.cosh(y))/x}}const N={calculatedDuration:d&&f||null,next:x=>{const I=R(x);if(d)a.done=x>=f;else{let E=0;m<1&&(E=x===0?Mn(g):Cb(R,x,I));const y=Math.abs(E)<=r,w=Math.abs(o-I)<=i;a.done=y&&w}return a.value=a.done?o:I,a},toString:()=>{const x=Math.min(qy(N),Jc),I=Gy(E=>N.next(x*E).value,x,30);return x+"ms "+I}};return N}function rm({keyframes:t,velocity:e=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const f=t[0],p={done:!1,value:f},d=y=>a!==void 0&&y<a||l!==void 0&&y>l,g=y=>a===void 0?l:l===void 0||Math.abs(a-y)<Math.abs(l-y)?a:l;let m=n*e;const v=f+m,_=o===void 0?v:o(v);_!==v&&(m=_-f);const C=y=>-m*Math.exp(-y/r),R=y=>_+C(y),N=y=>{const w=C(y),T=R(y);p.done=Math.abs(w)<=c,p.value=p.done?_:T};let x,I;const E=y=>{d(p.value)&&(x=y,I=Rb({keyframes:[p.value,g(p.value)],velocity:Cb(R,y,p.value),damping:i,stiffness:s,restDelta:c,restSpeed:u}))};return E(0),{calculatedDuration:null,next:y=>{let w=!1;return!I&&x===void 0&&(w=!0,N(y),E(y)),x!==void 0&&y>=x?I.next(y-x):(!w&&N(y),p)}}}const M2=co(.42,0,1,1),O2=co(0,0,.58,1),Ib=co(.42,0,.58,1),V2=t=>Array.isArray(t)&&typeof t[0]!="number",L2={linear:Gt,easeIn:M2,easeInOut:Ib,easeOut:O2,circIn:Hh,circInOut:cb,circOut:lb,backIn:Wh,backInOut:ob,backOut:sb,anticipate:ab},im=t=>{if(Fh(t)){Py(t.length===4);const[e,n,r,i]=t;return co(e,n,r,i)}else if(typeof t=="string")return L2[t];return t};function B2(t,e,n){const r=[],i=n||Pb,s=t.length-1;for(let o=0;o<s;o++){let a=i(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Gt:e;a=uo(l,a)}r.push(a)}return r}function F2(t,e,{clamp:n=!0,ease:r,mixer:i}={}){const s=t.length;if(Py(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=B2(e,r,i),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let f=0;if(l>1)for(;f<t.length-2&&!(u<t[f+1]);f++);const p=ki(t[f],t[f+1],u);return a[f](p)};return n?u=>c(Un(t[0],t[s-1],u)):c}function U2(t,e){const n=t[t.length-1];for(let r=1;r<=e;r++){const i=ki(0,e,r);t.push(Xe(n,1,i))}}function j2(t){const e=[0];return U2(e,t.length-1),e}function $2(t,e){return t.map(n=>n*e)}function z2(t,e){return t.map(()=>e||Ib).splice(0,t.length-1)}function Ba({duration:t=300,keyframes:e,times:n,ease:r="easeInOut"}){const i=V2(r)?r.map(im):im(r),s={done:!1,value:e[0]},o=$2(n&&n.length===e.length?n:j2(e),t),a=F2(o,e,{ease:Array.isArray(i)?i:z2(e,i)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const W2=t=>{const e=({timestamp:n})=>t(n);return{start:()=>He.update(e,!0),stop:()=>mr(e),now:()=>bt.isProcessing?bt.timestamp:wn.now()}},H2={decay:rm,inertia:rm,tween:Ba,keyframes:Ba,spring:Rb},q2=t=>t/100;class Qh extends Tb{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,o=(i==null?void 0:i.KeyframeResolver)||Xh,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:o=0}=this.options,a=Bh(n)?n:H2[n]||Ba;let l,c;a!==Ba&&typeof e[0]!="number"&&(l=uo(q2,Pb(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=qy(u));const{calculatedDuration:f}=u,p=f+i,d=p*(r+1)-i;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:p,totalDuration:d}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:r}=this;if(!r){const{keyframes:y}=this.options;return{done:!0,value:y[y.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:p,repeat:d,repeatType:g,repeatDelay:m,onUpdate:v}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const _=this.currentTime-p*(this.speed>=0?1:-1),C=this.speed>=0?_<0:_>u;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let R=this.currentTime,N=s;if(d){const y=Math.min(this.currentTime,u)/f;let w=Math.floor(y),T=y%1;!T&&y>=1&&(T=1),T===1&&w--,w=Math.min(w,d+1),!!(w%2)&&(g==="reverse"?(T=1-T,m&&(T-=m/f)):g==="mirror"&&(N=o)),R=Un(0,1,T)*f}const x=C?{done:!1,value:l[0]}:N.next(R);a&&(x.value=a(x.value));let{done:I}=x;!C&&c!==null&&(I=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const E=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&I);return E&&i!==void 0&&(x.value=wl(l,this.options,i)),v&&v(x.value),E&&this.finish(),x}get duration(){const{resolved:e}=this;return e?On(e.calculatedDuration):0}get time(){return On(this.currentTime)}set time(e){e=Mn(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=On(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=W2,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const G2=new Set(["opacity","clipPath","filter","transform"]);function K2(t,e,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=Xy(a,i);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:r,duration:i,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const X2=_h(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Fa=10,Y2=2e4;function Q2(t){return Bh(t.type)||t.type==="spring"||!Ky(t.ease)}function J2(t,e){const n=new Qh({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:t[0]};const i=[];let s=0;for(;!r.done&&s<Y2;)r=n.sample(s),i.push(r.value),s+=Fa;return{times:void 0,keyframes:i,duration:s-Fa,ease:"linear"}}const Ab={anticipate:ab,backInOut:ob,circInOut:cb};function Z2(t){return t in Ab}class sm extends Tb{constructor(e){super(e);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new _b(s,(o,a)=>this.onKeyframesResolved(o,a),n,r,i),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:r=300,times:i,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&Va()&&Z2(s)&&(s=Ab[s]),Q2(this.options)){const{onComplete:f,onUpdate:p,motionValue:d,element:g,...m}=this.options,v=J2(e,m);e=v.keyframes,e.length===1&&(e[1]=e[0]),r=v.duration,i=v.times,s=v.ease,o="keyframes"}const u=K2(a.owner.current,l,e,{...this.options,duration:r,times:i,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?($p(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:f}=this.options;a.set(wl(e,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:r,times:i,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return On(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return On(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=Mn(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return Gt;const{animation:r}=n;$p(r,e)}return Gt}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:r,duration:i,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:f,element:p,...d}=this.options,g=new Qh({...d,keyframes:r,duration:i,type:s,ease:o,times:a,isGenerator:!0}),m=Mn(this.time);c.setWithVelocity(g.sample(m-Fa).value,g.sample(m).value,Fa)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return X2()&&r&&G2.has(r)&&!l&&!c&&!i&&s!=="mirror"&&o!==0&&a!=="inertia"}}const eA={type:"spring",stiffness:500,damping:25,restSpeed:10},tA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),nA={type:"keyframes",duration:.8},rA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},iA=(t,{keyframes:e})=>e.length>2?nA:Qr.has(t)?t.startsWith("scale")?tA(e[1]):eA:rA;function sA({when:t,delay:e,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Jh=(t,e,n,r={},i,s)=>o=>{const a=Lh(r,t)||{},l=a.delay||r.delay||0;let{elapsed:c=0}=r;c=c-Mn(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:p=>{e.set(p),a.onUpdate&&a.onUpdate(p)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:i};sA(a)||(u={...u,...iA(t,u)}),u.duration&&(u.duration=Mn(u.duration)),u.repeatDelay&&(u.repeatDelay=Mn(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let f=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(f=!0)),f&&!s&&e.get()!==void 0){const p=wl(u.keyframes,a);if(p!==void 0)return He.update(()=>{u.onUpdate(p),u.onComplete()}),new TI([])}return!s&&sm.supports(u)?new sm(u):new Qh(u)};function oA({protectedKeys:t,needsAnimating:e},n){const r=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,r}function kb(t,e,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;r&&(o=r);const c=[],u=i&&t.animationState&&t.animationState.getState()[i];for(const f in l){const p=t.getValue(f,(s=t.latestValues[f])!==null&&s!==void 0?s:null),d=l[f];if(d===void 0||u&&oA(u,f))continue;const g={delay:n,...Lh(o||{},f)};let m=!1;if(window.MotionHandoffAnimation){const _=tb(t);if(_){const C=window.MotionHandoffAnimation(_,f,He);C!==null&&(g.startTime=C,m=!0)}}eu(t,f),p.start(Jh(f,p,d,t.shouldReduceMotion&&Zy.has(f)?{type:!1}:g,t,m));const v=p.animation;v&&c.push(v)}return a&&Promise.all(c).then(()=>{He.update(()=>{a&&BI(t,a)})}),c}function au(t,e,n={}){var r;const i=xl(t,e,n.type==="exit"?(r=t.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const o=i?()=>Promise.all(kb(t,i,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:f,staggerDirection:p}=s;return aA(t,e,u+c,f,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function aA(t,e,n=0,r=0,i=1,s){const o=[],a=(t.variantChildren.size-1)*r,l=i===1?(c=0)=>c*r:(c=0)=>a-c*r;return Array.from(t.variantChildren).sort(lA).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(au(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function lA(t,e){return t.sortNodePosition(e)}function cA(t,e,n={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const i=e.map(s=>au(t,s,n));r=Promise.all(i)}else if(typeof e=="string")r=au(t,e,n);else{const i=typeof e=="function"?xl(t,e,n.custom):e;r=Promise.all(kb(t,i,n))}return r.then(()=>{t.notify("AnimationComplete",e)})}const uA=Sh.length;function Db(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?Db(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<uA;n++){const r=Sh[n],i=t.props[r];(js(i)||i===!1)&&(e[r]=i)}return e}const hA=[...Th].reverse(),dA=Th.length;function fA(t){return e=>Promise.all(e.map(({animation:n,options:r})=>cA(t,n,r)))}function pA(t){let e=fA(t),n=om(),r=!0;const i=l=>(c,u)=>{var f;const p=xl(t,u,l==="exit"?(f=t.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(p){const{transition:d,transitionEnd:g,...m}=p;c={...c,...m,...g}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=Db(t.parent)||{},f=[],p=new Set;let d={},g=1/0;for(let v=0;v<dA;v++){const _=hA[v],C=n[_],R=c[_]!==void 0?c[_]:u[_],N=js(R),x=_===l?C.isActive:null;x===!1&&(g=v);let I=R===u[_]&&R!==c[_]&&N;if(I&&r&&t.manuallyAnimateOnMount&&(I=!1),C.protectedKeys={...d},!C.isActive&&x===null||!R&&!C.prevProp||yl(R)||typeof R=="boolean")continue;const E=mA(C.prevProp,R);let y=E||_===l&&C.isActive&&!I&&N||v>g&&N,w=!1;const T=Array.isArray(R)?R:[R];let P=T.reduce(i(_),{});x===!1&&(P={});const{prevResolvedValues:A={}}=C,k={...A,...P},B=U=>{y=!0,p.has(U)&&(w=!0,p.delete(U)),C.needsAnimating[U]=!0;const K=t.getValue(U);K&&(K.liveStyle=!1)};for(const U in k){const K=P[U],ee=A[U];if(d.hasOwnProperty(U))continue;let ue=!1;Qc(K)&&Qc(ee)?ue=!Hy(K,ee):ue=K!==ee,ue?K!=null?B(U):p.add(U):K!==void 0&&p.has(U)?B(U):C.protectedKeys[U]=!0}C.prevProp=R,C.prevResolvedValues=P,C.isActive&&(d={...d,...P}),r&&t.blockInitialAnimation&&(y=!1),y&&(!(I&&E)||w)&&f.push(...T.map(U=>({animation:U,options:{type:_}})))}if(p.size){const v={};p.forEach(_=>{const C=t.getBaseTarget(_),R=t.getValue(_);R&&(R.liveStyle=!0),v[_]=C??null}),f.push({animation:v})}let m=!!f.length;return r&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(m=!1),r=!1,m?e(f):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(p=>{var d;return(d=p.animationState)===null||d===void 0?void 0:d.setActive(l,c)}),n[l].isActive=c;const f=o(l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=om(),r=!0}}}function mA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!Hy(e,t):!1}function Ir(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function om(){return{animate:Ir(!0),whileInView:Ir(),whileHover:Ir(),whileTap:Ir(),whileDrag:Ir(),whileFocus:Ir(),exit:Ir()}}class wr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class gA extends wr{constructor(e){super(e),e.animationState||(e.animationState=pA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();yl(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let vA=0;class yA extends wr{constructor(){super(...arguments),this.id=vA++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const i=this.node.animationState.setActive("exit",!e);n&&!e&&i.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const bA={animation:{Feature:gA},exit:{Feature:yA}};function Hs(t,e,n,r={passive:!0}){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n)}function ho(t){return{point:{x:t.pageX,y:t.pageY}}}const xA=t=>e=>Uh(e)&&t(e,ho(e));function Ss(t,e,n,r){return Hs(t,e,xA(n),r)}const am=(t,e)=>Math.abs(t-e);function wA(t,e){const n=am(t.x,e.x),r=am(t.y,e.y);return Math.sqrt(n**2+r**2)}class Nb{constructor(e,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=lc(this.lastMoveEventInfo,this.history),p=this.startEvent!==null,d=wA(f.offset,{x:0,y:0})>=3;if(!p&&!d)return;const{point:g}=f,{timestamp:m}=bt;this.history.push({...g,timestamp:m});const{onStart:v,onMove:_}=this.handlers;p||(v&&v(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,f)},this.handlePointerMove=(f,p)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=ac(p,this.transformPagePoint),He.update(this.updatePoint,!0)},this.handlePointerUp=(f,p)=>{this.end();const{onEnd:d,onSessionEnd:g,resumeAnimation:m}=this.handlers;if(this.dragSnapToOrigin&&m&&m(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=lc(f.type==="pointercancel"?this.lastMoveEventInfo:ac(p,this.transformPagePoint),this.history);this.startEvent&&d&&d(f,v),g&&g(f,v)},!Uh(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const o=ho(e),a=ac(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=bt;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,lc(a,this.history)),this.removeListeners=uo(Ss(this.contextWindow,"pointermove",this.handlePointerMove),Ss(this.contextWindow,"pointerup",this.handlePointerUp),Ss(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),mr(this.updatePoint)}}function ac(t,e){return e?{point:e(t.point)}:t}function lm(t,e){return{x:t.x-e.x,y:t.y-e.y}}function lc({point:t},e){return{point:t,delta:lm(t,Mb(e)),offset:lm(t,EA(e)),velocity:_A(e,.1)}}function EA(t){return t[0]}function Mb(t){return t[t.length-1]}function _A(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,r=null;const i=Mb(t);for(;n>=0&&(r=t[n],!(i.timestamp-r.timestamp>Mn(e)));)n--;if(!r)return{x:0,y:0};const s=On(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const o={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const Ob=1e-4,TA=1-Ob,SA=1+Ob,Vb=.01,PA=0-Vb,CA=0+Vb;function Kt(t){return t.max-t.min}function RA(t,e,n){return Math.abs(t-e)<=n}function cm(t,e,n,r=.5){t.origin=r,t.originPoint=Xe(e.min,e.max,t.origin),t.scale=Kt(n)/Kt(e),t.translate=Xe(n.min,n.max,t.origin)-t.originPoint,(t.scale>=TA&&t.scale<=SA||isNaN(t.scale))&&(t.scale=1),(t.translate>=PA&&t.translate<=CA||isNaN(t.translate))&&(t.translate=0)}function Ps(t,e,n,r){cm(t.x,e.x,n.x,r?r.originX:void 0),cm(t.y,e.y,n.y,r?r.originY:void 0)}function um(t,e,n){t.min=n.min+e.min,t.max=t.min+Kt(e)}function IA(t,e,n){um(t.x,e.x,n.x),um(t.y,e.y,n.y)}function hm(t,e,n){t.min=e.min-n.min,t.max=t.min+Kt(e)}function Cs(t,e,n){hm(t.x,e.x,n.x),hm(t.y,e.y,n.y)}function AA(t,{min:e,max:n},r){return e!==void 0&&t<e?t=r?Xe(e,t,r.min):Math.max(t,e):n!==void 0&&t>n&&(t=r?Xe(n,t,r.max):Math.min(t,n)),t}function dm(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function kA(t,{top:e,left:n,bottom:r,right:i}){return{x:dm(t.x,n,i),y:dm(t.y,e,r)}}function fm(t,e){let n=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,r]=[r,n]),{min:n,max:r}}function DA(t,e){return{x:fm(t.x,e.x),y:fm(t.y,e.y)}}function NA(t,e){let n=.5;const r=Kt(t),i=Kt(e);return i>r?n=ki(e.min,e.max-r,t.min):r>i&&(n=ki(t.min,t.max-i,e.min)),Un(0,1,n)}function MA(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const lu=.35;function OA(t=lu){return t===!1?t=0:t===!0&&(t=lu),{x:pm(t,"left","right"),y:pm(t,"top","bottom")}}function pm(t,e,n){return{min:mm(t,e),max:mm(t,n)}}function mm(t,e){return typeof t=="number"?t:t[e]||0}const gm=()=>({translate:0,scale:1,origin:0,originPoint:0}),mi=()=>({x:gm(),y:gm()}),vm=()=>({min:0,max:0}),tt=()=>({x:vm(),y:vm()});function Yt(t){return[t("x"),t("y")]}function Lb({top:t,left:e,right:n,bottom:r}){return{x:{min:e,max:n},y:{min:t,max:r}}}function VA({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function LA(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function cc(t){return t===void 0||t===1}function cu({scale:t,scaleX:e,scaleY:n}){return!cc(t)||!cc(e)||!cc(n)}function kr(t){return cu(t)||Bb(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function Bb(t){return ym(t.x)||ym(t.y)}function ym(t){return t&&t!=="0%"}function Ua(t,e,n){const r=t-n,i=e*r;return n+i}function bm(t,e,n,r,i){return i!==void 0&&(t=Ua(t,i,r)),Ua(t,n,r)+e}function uu(t,e=0,n=1,r,i){t.min=bm(t.min,e,n,r,i),t.max=bm(t.max,e,n,r,i)}function Fb(t,{x:e,y:n}){uu(t.x,e.translate,e.scale,e.originPoint),uu(t.y,n.translate,n.scale,n.originPoint)}const xm=.999999999999,wm=1.0000000000001;function BA(t,e,n,r=!1){const i=n.length;if(!i)return;e.x=e.y=1;let s,o;for(let a=0;a<i;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&vi(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,Fb(t,o)),r&&kr(s.latestValues)&&vi(t,s.latestValues))}e.x<wm&&e.x>xm&&(e.x=1),e.y<wm&&e.y>xm&&(e.y=1)}function gi(t,e){t.min=t.min+e,t.max=t.max+e}function Em(t,e,n,r,i=.5){const s=Xe(t.min,t.max,i);uu(t,e,n,s,r)}function vi(t,e){Em(t.x,e.x,e.scaleX,e.scale,e.originX),Em(t.y,e.y,e.scaleY,e.scale,e.originY)}function Ub(t,e){return Lb(LA(t.getBoundingClientRect(),e))}function FA(t,e,n){const r=Ub(t,n),{scroll:i}=e;return i&&(gi(r.x,i.offset.x),gi(r.y,i.offset.y)),r}const jb=({current:t})=>t?t.ownerDocument.defaultView:null,UA=new WeakMap;class jA{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=tt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=u=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ho(u).point)},s=(u,f)=>{const{drag:p,dragPropagation:d,onDragStart:g}=this.getProps();if(p&&!d&&(this.openDragLock&&this.openDragLock(),this.openDragLock=NI(p),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Yt(v=>{let _=this.getAxisMotionValue(v).get()||0;if(xn.test(_)){const{projection:C}=this.visualElement;if(C&&C.layout){const R=C.layout.layoutBox[v];R&&(_=Kt(R)*(parseFloat(_)/100))}}this.originPoint[v]=_}),g&&He.postRender(()=>g(u,f)),eu(this.visualElement,"transform");const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},o=(u,f)=>{const{dragPropagation:p,dragDirectionLock:d,onDirectionLock:g,onDrag:m}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:v}=f;if(d&&this.currentDirection===null){this.currentDirection=$A(v),this.currentDirection!==null&&g&&g(this.currentDirection);return}this.updateAxis("x",f.point,v),this.updateAxis("y",f.point,v),this.visualElement.render(),m&&m(u,f)},a=(u,f)=>this.stop(u,f),l=()=>Yt(u=>{var f;return this.getAnimationState(u)==="paused"&&((f=this.getAxisMotionValue(u).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Nb(e,{onSessionStart:i,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:jb(this.visualElement)})}stop(e,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&He.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,r){const{drag:i}=this.getProps();if(!r||!jo(e,i,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(o=AA(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&fi(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=kA(i.layoutBox,n):this.constraints=!1,this.elastic=OA(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Yt(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=MA(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!fi(e))return!1;const r=e.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=FA(r,i.root,this.visualElement.getTransformPagePoint());let o=DA(i.layout.layoutBox,s);if(n){const a=n(VA(o));this.hasMutatedConstraints=!!a,a&&(o=Lb(a))}return o}startAnimation(e){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Yt(u=>{if(!jo(u,n,this.currentDirection))return;let f=l&&l[u]||{};o&&(f={min:0,max:0});const p=i?200:1e6,d=i?40:1e7,g={type:"inertia",velocity:r?e[u]:0,bounceStiffness:p,bounceDamping:d,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(u,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const r=this.getAxisMotionValue(e);return eu(this.visualElement,e),r.start(Jh(e,r,0,n,this.visualElement,!1))}stopAnimation(){Yt(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Yt(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Yt(n=>{const{drag:r}=this.getProps();if(!jo(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:o,max:a}=i.layout.layoutBox[n];s.set(e[n]-Xe(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!fi(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Yt(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();i[o]=NA({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Yt(o=>{if(!jo(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Xe(l,c,i[o]))})}addListeners(){if(!this.visualElement.current)return;UA.set(this.visualElement,this);const e=this.visualElement.current,n=Ss(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();fi(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),He.read(r);const o=Hs(window,"resize",()=>this.scalePositionWithinConstraints()),a=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(Yt(u=>{const f=this.getAxisMotionValue(u);f&&(this.originPoint[u]+=l[u].translate,f.set(f.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:o=lu,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function jo(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function $A(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class zA extends wr{constructor(e){super(e),this.removeGroupControls=Gt,this.removeListeners=Gt,this.controls=new jA(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Gt}unmount(){this.removeGroupControls(),this.removeListeners()}}const _m=t=>(e,n)=>{t&&He.postRender(()=>t(e,n))};class WA extends wr{constructor(){super(...arguments),this.removePointerDownListener=Gt}onPointerDown(e){this.session=new Nb(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:jb(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:_m(e),onStart:_m(n),onMove:r,onEnd:(s,o)=>{delete this.session,i&&He.postRender(()=>i(s,o))}}}mount(){this.removePointerDownListener=Ss(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ia={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Tm(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const rs={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(fe.test(t))t=parseFloat(t);else return t;const n=Tm(t,e.target.x),r=Tm(t,e.target.y);return`${n}% ${r}%`}},HA={correct:(t,{treeScale:e,projectionDelta:n})=>{const r=t,i=gr.parse(t);if(i.length>5)return r;const s=gr.createTransformer(t),o=typeof i[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;i[0+o]/=a,i[1+o]/=l;const c=Xe(a,l,.5);return typeof i[2+o]=="number"&&(i[2+o]/=c),typeof i[3+o]=="number"&&(i[3+o]/=c),s(i)}};class qA extends D.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=e;dI(GA),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),ia.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,o=r.projection;return o&&(o.isPresent=s,i||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||He.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),Ch.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=e;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function $b(t){const[e,n]=_y(),r=D.useContext(bh);return bn.jsx(qA,{...t,layoutGroup:r,switchLayoutGroup:D.useContext(Dy),isPresent:e,safeToRemove:n})}const GA={borderRadius:{...rs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:rs,borderTopRightRadius:rs,borderBottomLeftRadius:rs,borderBottomRightRadius:rs,boxShadow:HA};function KA(t,e,n){const r=Mt(t)?t:zs(t);return r.start(Jh("",r,e,n)),r.animation}function XA(t){return t instanceof SVGElement&&t.tagName!=="svg"}const YA=(t,e)=>t.depth-e.depth;class QA{constructor(){this.children=[],this.isDirty=!1}add(e){jh(this.children,e),this.isDirty=!0}remove(e){$h(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(YA),this.isDirty=!1,this.children.forEach(e)}}function JA(t,e){const n=wn.now(),r=({timestamp:i})=>{const s=i-n;s>=e&&(mr(r),t(s-e))};return He.read(r,!0),()=>mr(r)}const zb=["TopLeft","TopRight","BottomLeft","BottomRight"],ZA=zb.length,Sm=t=>typeof t=="string"?parseFloat(t):t,Pm=t=>typeof t=="number"||fe.test(t);function ek(t,e,n,r,i,s){i?(t.opacity=Xe(0,n.opacity!==void 0?n.opacity:1,tk(r)),t.opacityExit=Xe(e.opacity!==void 0?e.opacity:1,0,nk(r))):s&&(t.opacity=Xe(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let o=0;o<ZA;o++){const a=`border${zb[o]}Radius`;let l=Cm(e,a),c=Cm(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||Pm(l)===Pm(c)?(t[a]=Math.max(Xe(Sm(l),Sm(c),r),0),(xn.test(c)||xn.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Xe(e.rotate||0,n.rotate||0,r))}function Cm(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const tk=Wb(0,.5,lb),nk=Wb(.5,.95,Gt);function Wb(t,e,n){return r=>r<t?0:r>e?1:n(ki(t,e,r))}function Rm(t,e){t.min=e.min,t.max=e.max}function Xt(t,e){Rm(t.x,e.x),Rm(t.y,e.y)}function Im(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Am(t,e,n,r,i){return t-=e,t=Ua(t,1/n,r),i!==void 0&&(t=Ua(t,1/i,r)),t}function rk(t,e=0,n=1,r=.5,i,s=t,o=t){if(xn.test(e)&&(e=parseFloat(e),e=Xe(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Xe(s.min,s.max,r);t===s&&(a-=e),t.min=Am(t.min,e,n,a,i),t.max=Am(t.max,e,n,a,i)}function km(t,e,[n,r,i],s,o){rk(t,e[n],e[r],e[i],e.scale,s,o)}const ik=["x","scaleX","originX"],sk=["y","scaleY","originY"];function Dm(t,e,n,r){km(t.x,e,ik,n?n.x:void 0,r?r.x:void 0),km(t.y,e,sk,n?n.y:void 0,r?r.y:void 0)}function Nm(t){return t.translate===0&&t.scale===1}function Hb(t){return Nm(t.x)&&Nm(t.y)}function Mm(t,e){return t.min===e.min&&t.max===e.max}function ok(t,e){return Mm(t.x,e.x)&&Mm(t.y,e.y)}function Om(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function qb(t,e){return Om(t.x,e.x)&&Om(t.y,e.y)}function Vm(t){return Kt(t.x)/Kt(t.y)}function Lm(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class ak{constructor(){this.members=[]}add(e){jh(this.members,e),e.scheduleRender()}remove(e){if($h(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(i=>e===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(e,n){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,n&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:i}=e.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:r}=e;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function lk(t,e,n){let r="";const i=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((i||s||o)&&(r=`translate3d(${i}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:f,rotateY:p,skewX:d,skewY:g}=n;c&&(r=`perspective(${c}px) ${r}`),u&&(r+=`rotate(${u}deg) `),f&&(r+=`rotateX(${f}deg) `),p&&(r+=`rotateY(${p}deg) `),d&&(r+=`skewX(${d}deg) `),g&&(r+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(r+=`scale(${a}, ${l})`),r||"none"}const Dr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},ds=typeof window<"u"&&window.MotionDebug!==void 0,uc=["","X","Y","Z"],ck={visibility:"hidden"},Bm=1e3;let uk=0;function hc(t,e,n,r){const{latestValues:i}=e;i[t]&&(n[t]=i[t],e.setStaticValue(t,0),r&&(r[t]=0))}function Gb(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=tb(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",He,!(i||s))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&Gb(r)}function Kb({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(o={},a=e==null?void 0:e()){this.id=uk++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ds&&(Dr.totalNodes=Dr.resolvedTargetDeltas=Dr.recalculatedProjection=0),this.nodes.forEach(fk),this.nodes.forEach(yk),this.nodes.forEach(bk),this.nodes.forEach(pk),ds&&window.MotionDebug.record(Dr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new QA)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new zh),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=XA(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let f;const p=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=JA(p,250),ia.hasAnimatedSinceResize&&(ia.hasAnimatedSinceResize=!1,this.nodes.forEach(Um))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:d,layout:g})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const m=this.options.transition||u.getDefaultTransition()||Tk,{onLayoutAnimationStart:v,onLayoutAnimationComplete:_}=u.getProps(),C=!this.targetLayout||!qb(this.targetLayout,g)||d,R=!p&&d;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||R||p&&(C||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,R);const N={...Lh(m,"layout"),onPlay:v,onComplete:_};(u.shouldReduceMotion||this.options.layoutRoot)&&(N.delay=0,N.type=!1),this.startAnimation(N)}else p||Um(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=g})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,mr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(xk),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Gb(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const f=this.path[u];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Fm);return}this.isUpdating||this.nodes.forEach(gk),this.isUpdating=!1,this.nodes.forEach(vk),this.nodes.forEach(hk),this.nodes.forEach(dk),this.clearAllSnapshots();const a=wn.now();bt.delta=Un(0,1e3/60,a-bt.timestamp),bt.timestamp=a,bt.isProcessing=!0,nc.update.process(bt),nc.preRender.process(bt),nc.render.process(bt),bt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Ch.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(mk),this.sharedNodes.forEach(wk)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,He.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){He.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=tt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!Hb(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||kr(this.latestValues)||u)&&(i(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Sk(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return tt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(Pk))){const{scroll:u}=this.root;u&&(gi(l.x,u.offset.x),gi(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=tt();if(Xt(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:f,options:p}=u;u!==this.root&&f&&p.layoutScroll&&(f.wasRoot&&Xt(l,o),gi(l.x,f.offset.x),gi(l.y,f.offset.y))}return l}applyTransform(o,a=!1){const l=tt();Xt(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&vi(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),kr(u.latestValues)&&vi(l,u.latestValues)}return kr(this.latestValues)&&vi(l,this.latestValues),l}removeTransform(o){const a=tt();Xt(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!kr(c.latestValues))continue;cu(c.latestValues)&&c.updateSnapshot();const u=tt(),f=c.measurePageBox();Xt(u,f),Dm(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return kr(this.latestValues)&&Dm(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==bt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:p}=this.options;if(!(!this.layout||!(f||p))){if(this.resolvedRelativeTargetAt=bt.timestamp,!this.targetDelta&&!this.relativeTarget){const d=this.getClosestProjectingParent();d&&d.layout&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tt(),this.relativeTargetOrigin=tt(),Cs(this.relativeTargetOrigin,this.layout.layoutBox,d.layout.layoutBox),Xt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=tt(),this.targetWithTransforms=tt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),IA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Xt(this.target,this.layout.layoutBox),Fb(this.target,this.targetDelta)):Xt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const d=this.getClosestProjectingParent();d&&!!d.resumingFrom==!!this.resumingFrom&&!d.options.layoutScroll&&d.target&&this.animationProgress!==1?(this.relativeParent=d,this.forceRelativeParentToResolveTarget(),this.relativeTarget=tt(),this.relativeTargetOrigin=tt(),Cs(this.relativeTargetOrigin,this.target,d.target),Xt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ds&&Dr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||cu(this.parent.latestValues)||Bb(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===bt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;Xt(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,d=this.treeScale.y;BA(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=tt());const{target:g}=a;if(!g){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Im(this.prevProjectionDelta.x,this.projectionDelta.x),Im(this.prevProjectionDelta.y,this.projectionDelta.y)),Ps(this.projectionDelta,this.layoutCorrected,g,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==d||!Lm(this.projectionDelta.x,this.prevProjectionDelta.x)||!Lm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",g)),ds&&Dr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=mi(),this.projectionDelta=mi(),this.projectionDeltaWithTransform=mi()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},f=mi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const p=tt(),d=l?l.source:void 0,g=this.layout?this.layout.source:void 0,m=d!==g,v=this.getStack(),_=!v||v.members.length<=1,C=!!(m&&!_&&this.options.crossfade===!0&&!this.path.some(_k));this.animationProgress=0;let R;this.mixTargetDelta=N=>{const x=N/1e3;jm(f.x,o.x,x),jm(f.y,o.y,x),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Cs(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Ek(this.relativeTarget,this.relativeTargetOrigin,p,x),R&&ok(this.relativeTarget,R)&&(this.isProjectionDirty=!1),R||(R=tt()),Xt(R,this.relativeTarget)),m&&(this.animationValues=u,ek(u,c,this.latestValues,x,C,_)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=x},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(mr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=He.update(()=>{ia.hasAnimatedSinceResize=!0,this.currentAnimation=KA(0,Bm,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Bm),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&Xb(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||tt();const f=Kt(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+f;const p=Kt(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+p}Xt(a,l),vi(a,u),Ps(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new ak),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&hc("z",o,c,this.animationValues);for(let u=0;u<uc.length;u++)hc(`rotate${uc[u]}`,o,c,this.animationValues),hc(`skew${uc[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return ck;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=na(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const m={};return this.options.layoutId&&(m.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,m.pointerEvents=na(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!kr(this.latestValues)&&(m.transform=u?u({},""):"none",this.hasProjected=!1),m}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=lk(this.projectionDeltaWithTransform,this.treeScale,p),u&&(c.transform=u(p,c.transform));const{x:d,y:g}=this.projectionDelta;c.transformOrigin=`${d.origin*100}% ${g.origin*100}% 0`,f.animationValues?c.opacity=f===this?(l=(a=p.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const m in Oa){if(p[m]===void 0)continue;const{correct:v,applyTo:_}=Oa[m],C=c.transform==="none"?p[m]:v(p[m],f);if(_){const R=_.length;for(let N=0;N<R;N++)c[_[N]]=C}else c[m]=C}return this.options.layoutId&&(c.pointerEvents=f===this?na(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Fm),this.root.sharedNodes.clear()}}}function hk(t){t.updateLayout()}function dk(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?Yt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],d=Kt(p);p.min=r[f].min,p.max=p.min+d}):Xb(s,n.layoutBox,r)&&Yt(f=>{const p=o?n.measuredBox[f]:n.layoutBox[f],d=Kt(r[f]);p.max=p.min+d,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[f].max=t.relativeTarget[f].min+d)});const a=mi();Ps(a,r,n.layoutBox);const l=mi();o?Ps(l,t.applyTransform(i,!0),n.measuredBox):Ps(l,r,n.layoutBox);const c=!Hb(a);let u=!1;if(!t.resumeFrom){const f=t.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:p,layout:d}=f;if(p&&d){const g=tt();Cs(g,n.layoutBox,p.layoutBox);const m=tt();Cs(m,r,d.layoutBox),qb(g,m)||(u=!0),f.options.layoutRoot&&(t.relativeTarget=m,t.relativeTargetOrigin=g,t.relativeParent=f)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function fk(t){ds&&Dr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function pk(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function mk(t){t.clearSnapshot()}function Fm(t){t.clearMeasurements()}function gk(t){t.isLayoutDirty=!1}function vk(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Um(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function yk(t){t.resolveTargetDelta()}function bk(t){t.calcProjection()}function xk(t){t.resetSkewAndRotation()}function wk(t){t.removeLeadSnapshot()}function jm(t,e,n){t.translate=Xe(e.translate,0,n),t.scale=Xe(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function $m(t,e,n,r){t.min=Xe(e.min,n.min,r),t.max=Xe(e.max,n.max,r)}function Ek(t,e,n,r){$m(t.x,e.x,n.x,r),$m(t.y,e.y,n.y,r)}function _k(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Tk={duration:.45,ease:[.4,0,.1,1]},zm=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Wm=zm("applewebkit/")&&!zm("chrome/")?Math.round:Gt;function Hm(t){t.min=Wm(t.min),t.max=Wm(t.max)}function Sk(t){Hm(t.x),Hm(t.y)}function Xb(t,e,n){return t==="position"||t==="preserve-aspect"&&!RA(Vm(e),Vm(n),.2)}function Pk(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const Ck=Kb({attachResizeListener:(t,e)=>Hs(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),dc={current:void 0},Yb=Kb({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!dc.current){const t=new Ck({});t.mount(window),t.setOptions({layoutScroll:!0}),dc.current=t}return dc.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Rk={pan:{Feature:WA},drag:{Feature:zA,ProjectionNode:Yb,MeasureLayout:$b}};function qm(t,e,n){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&He.postRender(()=>s(e,ho(e)))}class Ik extends wr{mount(){const{current:e}=this.node;e&&(this.unmount=RI(e,n=>(qm(this.node,n,"Start"),r=>qm(this.node,r,"End"))))}unmount(){}}class Ak extends wr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=uo(Hs(this.node.current,"focus",()=>this.onFocus()),Hs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Gm(t,e,n){const{props:r}=t;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&He.postRender(()=>s(e,ho(e)))}class kk extends wr{mount(){const{current:e}=this.node;e&&(this.unmount=DI(e,n=>(Gm(this.node,n,"Start"),(r,{success:i})=>Gm(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const hu=new WeakMap,fc=new WeakMap,Dk=t=>{const e=hu.get(t.target);e&&e(t)},Nk=t=>{t.forEach(Dk)};function Mk({root:t,...e}){const n=t||document;fc.has(n)||fc.set(n,{});const r=fc.get(n),i=JSON.stringify(e);return r[i]||(r[i]=new IntersectionObserver(Nk,{root:t,...e})),r[i]}function Ok(t,e,n){const r=Mk(e);return hu.set(t,n),r.observe(t),()=>{hu.delete(t),r.unobserve(t)}}const Vk={some:0,all:1};class Lk extends wr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:Vk[i]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:f}=this.node.getProps(),p=c?u:f;p&&p(l)};return Ok(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Bk(e,n))&&this.startObserver()}unmount(){}}function Bk({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const Fk={inView:{Feature:Lk},tap:{Feature:kk},focus:{Feature:Ak},hover:{Feature:Ik}},Uk={layout:{ProjectionNode:Yb,MeasureLayout:$b}},du={current:null},Qb={current:!1};function jk(){if(Qb.current=!0,!!Eh)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>du.current=t.matches;t.addListener(e),e()}else du.current=!1}const $k=[...Eb,kt,gr],zk=t=>$k.find(wb(t)),Km=new WeakMap;function Wk(t,e,n){for(const r in e){const i=e[r],s=n[r];if(Mt(i))t.addValue(r,i);else if(Mt(s))t.addValue(r,zs(i,{owner:t}));else if(s!==i)if(t.hasValue(r)){const o=t.getValue(r);o.liveStyle===!0?o.jump(i):o.hasAnimated||o.set(i)}else{const o=t.getStaticValue(r);t.addValue(r,zs(o!==void 0?o:i,{owner:t}))}}for(const r in n)e[r]===void 0&&t.removeValue(r);return e}const Xm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Hk{scrapeMotionValuesFromProps(e,n,r){return{}}constructor({parent:e,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Xh,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const d=wn.now();this.renderScheduledAt<d&&(this.renderScheduledAt=d,He.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=i,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=bl(n),this.isVariantNode=Ay(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:f,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const d in p){const g=p[d];l[d]!==void 0&&Mt(g)&&g.set(l[d],!1)}}mount(e){this.current=e,Km.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Qb.current||jk(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:du.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Km.delete(this.current),this.projection&&this.projection.unmount(),mr(this.notifyUpdate),mr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Qr.has(e),i=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&He.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{i(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Di){const n=Di[e];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[e]&&i&&r(this.props)&&(this.features[e]=new i(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):tt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Xm.length;r++){const i=Xm[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,o=e[s];o&&(this.propEventSubscriptions[i]=this.on(i,o))}this.prevMotionValues=Wk(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const r=this.values.get(e);n!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&n!==void 0&&(r=zs(n===null?void 0:n,{owner:this}),this.addValue(e,r)),r}readValue(e,n){var r;let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(bb(i)||ub(i))?i=parseFloat(i):!zk(i)&&gr.test(n)&&(i=gb(e,n)),this.setBaseTarget(e,Mt(i)?i.get():i)),Mt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const o=Ih(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(i=o[e])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Mt(s)?s:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new zh),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class Jb extends Hk{constructor(){super(...arguments),this.KeyframeResolver=_b}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:r}){delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Mt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function qk(t){return window.getComputedStyle(t)}class Gk extends Jb{constructor(){super(...arguments),this.type="html",this.renderInstance=Fy}readValueFromInstance(e,n){if(Qr.has(n)){const r=Kh(n);return r&&r.default||0}else{const r=qk(e),i=(Vy(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(e,{transformPagePoint:n}){return Ub(e,n)}build(e,n,r){Dh(e,n,r.transformTemplate)}scrapeMotionValuesFromProps(e,n,r){return Vh(e,n,r)}}class Kk extends Jb{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=tt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Qr.has(n)){const r=Kh(n);return r&&r.default||0}return n=Uy.has(n)?n:Ph(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,r){return zy(e,n,r)}build(e,n,r){Nh(e,n,this.isSVGTag,r.transformTemplate)}renderInstance(e,n,r,i){jy(e,n,r,i)}mount(e){this.isSVGTag=Oh(e.tagName),super.mount(e)}}const Xk=(t,e)=>Rh(t)?new Kk(e):new Gk(e,{allowProjection:t!==D.Fragment}),Yk=wI({...bA,...Fk,...Rk,...Uk},Xk),sa=VR(Yk);function ht(t,e){e===void 0&&(e={});var n=e.insertAt;if(t&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}ht(`.react-loading-indicator-normalize,
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
}`);var Le=function(){return Le=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},Le.apply(this,arguments)};function ja(t){return ja=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ja(t)}var Qk=/^\s+/,Jk=/\s+$/;function ne(t,e){if(e=e||{},(t=t||"")instanceof ne)return t;if(!(this instanceof ne))return new ne(t,e);var n=function(r){var i={r:0,g:0,b:0},s=1,o=null,a=null,l=null,c=!1,u=!1;typeof r=="string"&&(r=function(g){g=g.replace(Qk,"").replace(Jk,"").toLowerCase();var m,v=!1;if(fu[g])g=fu[g],v=!0;else if(g=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(m=nn.rgb.exec(g))?{r:m[1],g:m[2],b:m[3]}:(m=nn.rgba.exec(g))?{r:m[1],g:m[2],b:m[3],a:m[4]}:(m=nn.hsl.exec(g))?{h:m[1],s:m[2],l:m[3]}:(m=nn.hsla.exec(g))?{h:m[1],s:m[2],l:m[3],a:m[4]}:(m=nn.hsv.exec(g))?{h:m[1],s:m[2],v:m[3]}:(m=nn.hsva.exec(g))?{h:m[1],s:m[2],v:m[3],a:m[4]}:(m=nn.hex8.exec(g))?{r:Ht(m[1]),g:Ht(m[2]),b:Ht(m[3]),a:tg(m[4]),format:v?"name":"hex8"}:(m=nn.hex6.exec(g))?{r:Ht(m[1]),g:Ht(m[2]),b:Ht(m[3]),format:v?"name":"hex"}:(m=nn.hex4.exec(g))?{r:Ht(m[1]+""+m[1]),g:Ht(m[2]+""+m[2]),b:Ht(m[3]+""+m[3]),a:tg(m[4]+""+m[4]),format:v?"name":"hex8"}:(m=nn.hex3.exec(g))?{r:Ht(m[1]+""+m[1]),g:Ht(m[2]+""+m[2]),b:Ht(m[3]+""+m[3]),format:v?"name":"hex"}:!1}(r)),ja(r)=="object"&&(In(r.r)&&In(r.g)&&In(r.b)?(f=r.r,p=r.g,d=r.b,i={r:255*qe(f,255),g:255*qe(p,255),b:255*qe(d,255)},c=!0,u=String(r.r).substr(-1)==="%"?"prgb":"rgb"):In(r.h)&&In(r.s)&&In(r.v)?(o=fs(r.s),a=fs(r.v),i=function(g,m,v){g=6*qe(g,360),m=qe(m,100),v=qe(v,100);var _=Math.floor(g),C=g-_,R=v*(1-m),N=v*(1-C*m),x=v*(1-(1-C)*m),I=_%6,E=[v,N,R,R,x,v][I],y=[x,v,v,N,R,R][I],w=[R,R,x,v,v,N][I];return{r:255*E,g:255*y,b:255*w}}(r.h,o,a),c=!0,u="hsv"):In(r.h)&&In(r.s)&&In(r.l)&&(o=fs(r.s),l=fs(r.l),i=function(g,m,v){var _,C,R;function N(E,y,w){return w<0&&(w+=1),w>1&&(w-=1),w<1/6?E+6*(y-E)*w:w<.5?y:w<2/3?E+(y-E)*(2/3-w)*6:E}if(g=qe(g,360),m=qe(m,100),v=qe(v,100),m===0)_=C=R=v;else{var x=v<.5?v*(1+m):v+m-v*m,I=2*v-x;_=N(I,x,g+1/3),C=N(I,x,g),R=N(I,x,g-1/3)}return{r:255*_,g:255*C,b:255*R}}(r.h,o,l),c=!0,u="hsl"),r.hasOwnProperty("a")&&(s=r.a));var f,p,d;return s=Zb(s),{ok:c,format:r.format||u,r:Math.min(255,Math.max(i.r,0)),g:Math.min(255,Math.max(i.g,0)),b:Math.min(255,Math.max(i.b,0)),a:s}}(t);this._originalInput=t,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||n.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function Ym(t,e,n){t=qe(t,255),e=qe(e,255),n=qe(n,255);var r,i,s=Math.max(t,e,n),o=Math.min(t,e,n),a=(s+o)/2;if(s==o)r=i=0;else{var l=s-o;switch(i=a>.5?l/(2-s-o):l/(s+o),s){case t:r=(e-n)/l+(e<n?6:0);break;case e:r=(n-t)/l+2;break;case n:r=(t-e)/l+4}r/=6}return{h:r,s:i,l:a}}function Qm(t,e,n){t=qe(t,255),e=qe(e,255),n=qe(n,255);var r,i,s=Math.max(t,e,n),o=Math.min(t,e,n),a=s,l=s-o;if(i=s===0?0:l/s,s==o)r=0;else{switch(s){case t:r=(e-n)/l+(e<n?6:0);break;case e:r=(n-t)/l+2;break;case n:r=(t-e)/l+4}r/=6}return{h:r,s:i,v:a}}function Jm(t,e,n,r){var i=[ln(Math.round(t).toString(16)),ln(Math.round(e).toString(16)),ln(Math.round(n).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function Zm(t,e,n,r){return[ln(e1(r)),ln(Math.round(t).toString(16)),ln(Math.round(e).toString(16)),ln(Math.round(n).toString(16))].join("")}function Zk(t,e){e=e===0?0:e||10;var n=ne(t).toHsl();return n.s-=e/100,n.s=El(n.s),ne(n)}function eD(t,e){e=e===0?0:e||10;var n=ne(t).toHsl();return n.s+=e/100,n.s=El(n.s),ne(n)}function tD(t){return ne(t).desaturate(100)}function nD(t,e){e=e===0?0:e||10;var n=ne(t).toHsl();return n.l+=e/100,n.l=El(n.l),ne(n)}function rD(t,e){e=e===0?0:e||10;var n=ne(t).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-e/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-e/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-e/100*255))),ne(n)}function iD(t,e){e=e===0?0:e||10;var n=ne(t).toHsl();return n.l-=e/100,n.l=El(n.l),ne(n)}function sD(t,e){var n=ne(t).toHsl(),r=(n.h+e)%360;return n.h=r<0?360+r:r,ne(n)}function oD(t){var e=ne(t).toHsl();return e.h=(e.h+180)%360,ne(e)}function eg(t,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var n=ne(t).toHsl(),r=[ne(t)],i=360/e,s=1;s<e;s++)r.push(ne({h:(n.h+s*i)%360,s:n.s,l:n.l}));return r}function aD(t){var e=ne(t).toHsl(),n=e.h;return[ne(t),ne({h:(n+72)%360,s:e.s,l:e.l}),ne({h:(n+216)%360,s:e.s,l:e.l})]}function lD(t,e,n){e=e||6,n=n||30;var r=ne(t).toHsl(),i=360/n,s=[ne(t)];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,s.push(ne(r));return s}function cD(t,e){e=e||6;for(var n=ne(t).toHsv(),r=n.h,i=n.s,s=n.v,o=[],a=1/e;e--;)o.push(ne({h:r,s:i,v:s})),s=(s+a)%1;return o}ne.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,n,r=this.toRgb();return t=r.r/255,e=r.g/255,n=r.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(t){return this._a=Zb(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=Qm(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=Qm(this._r,this._g,this._b),e=Math.round(360*t.h),n=Math.round(100*t.s),r=Math.round(100*t.v);return this._a==1?"hsv("+e+", "+n+"%, "+r+"%)":"hsva("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var t=Ym(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=Ym(this._r,this._g,this._b),e=Math.round(360*t.h),n=Math.round(100*t.s),r=Math.round(100*t.l);return this._a==1?"hsl("+e+", "+n+"%, "+r+"%)":"hsla("+e+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(t){return Jm(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(e,n,r,i,s){var o=[ln(Math.round(e).toString(16)),ln(Math.round(n).toString(16)),ln(Math.round(r).toString(16)),ln(e1(i))];return s&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*qe(this._r,255))+"%",g:Math.round(100*qe(this._g,255))+"%",b:Math.round(100*qe(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*qe(this._r,255))+"%, "+Math.round(100*qe(this._g,255))+"%, "+Math.round(100*qe(this._b,255))+"%)":"rgba("+Math.round(100*qe(this._r,255))+"%, "+Math.round(100*qe(this._g,255))+"%, "+Math.round(100*qe(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(uD[Jm(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+Zm(this._r,this._g,this._b,this._a),n=e,r=this._gradientType?"GradientType = 1, ":"";if(t){var i=ne(t);n="#"+Zm(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+e+",endColorstr="+n+")"},toString:function(t){var e=!!t;t=t||this._format;var n=!1,r=this._a<1&&this._a>=0;return e||!r||t!=="hex"&&t!=="hex6"&&t!=="hex3"&&t!=="hex4"&&t!=="hex8"&&t!=="name"?(t==="rgb"&&(n=this.toRgbString()),t==="prgb"&&(n=this.toPercentageRgbString()),t!=="hex"&&t!=="hex6"||(n=this.toHexString()),t==="hex3"&&(n=this.toHexString(!0)),t==="hex4"&&(n=this.toHex8String(!0)),t==="hex8"&&(n=this.toHex8String()),t==="name"&&(n=this.toName()),t==="hsl"&&(n=this.toHslString()),t==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):t==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return ne(this.toString())},_applyModification:function(t,e){var n=t.apply(null,[this].concat([].slice.call(e)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(nD,arguments)},brighten:function(){return this._applyModification(rD,arguments)},darken:function(){return this._applyModification(iD,arguments)},desaturate:function(){return this._applyModification(Zk,arguments)},saturate:function(){return this._applyModification(eD,arguments)},greyscale:function(){return this._applyModification(tD,arguments)},spin:function(){return this._applyModification(sD,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(lD,arguments)},complement:function(){return this._applyCombination(oD,arguments)},monochromatic:function(){return this._applyCombination(cD,arguments)},splitcomplement:function(){return this._applyCombination(aD,arguments)},triad:function(){return this._applyCombination(eg,[3])},tetrad:function(){return this._applyCombination(eg,[4])}},ne.fromRatio=function(t,e){if(ja(t)=="object"){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]=r==="a"?t[r]:fs(t[r]));t=n}return ne(t,e)},ne.equals=function(t,e){return!(!t||!e)&&ne(t).toRgbString()==ne(e).toRgbString()},ne.random=function(){return ne.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},ne.mix=function(t,e,n){n=n===0?0:n||50;var r=ne(t).toRgb(),i=ne(e).toRgb(),s=n/100;return ne({r:(i.r-r.r)*s+r.r,g:(i.g-r.g)*s+r.g,b:(i.b-r.b)*s+r.b,a:(i.a-r.a)*s+r.a})},ne.readability=function(t,e){var n=ne(t),r=ne(e);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},ne.isReadable=function(t,e,n){var r,i,s=ne.readability(t,e);switch(i=!1,(r=function(o){var a,l;return a=((o=o||{level:"AA",size:"small"}).level||"AA").toUpperCase(),l=(o.size||"small").toLowerCase(),a!=="AA"&&a!=="AAA"&&(a="AA"),l!=="small"&&l!=="large"&&(l="small"),{level:a,size:l}}(n)).level+r.size){case"AAsmall":case"AAAlarge":i=s>=4.5;break;case"AAlarge":i=s>=3;break;case"AAAsmall":i=s>=7}return i},ne.mostReadable=function(t,e,n){var r,i,s,o,a=null,l=0;i=(n=n||{}).includeFallbackColors,s=n.level,o=n.size;for(var c=0;c<e.length;c++)(r=ne.readability(t,e[c]))>l&&(l=r,a=ne(e[c]));return ne.isReadable(t,a,{level:s,size:o})||!i?a:(n.includeFallbackColors=!1,ne.mostReadable(t,["#fff","#000"],n))};var fu=ne.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},uD=ne.hexNames=function(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}(fu);function Zb(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function qe(t,e){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(t)&&(t="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(t);return t=Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function El(t){return Math.min(1,Math.max(0,t))}function Ht(t){return parseInt(t,16)}function ln(t){return t.length==1?"0"+t:""+t}function fs(t){return t<=1&&(t=100*t+"%"),t}function e1(t){return Math.round(255*parseFloat(t)).toString(16)}function tg(t){return Ht(t)/255}var Gn,$o,zo,nn=($o="[\\s|\\(]+("+(Gn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Gn+")[,|\\s]+("+Gn+")\\s*\\)?",zo="[\\s|\\(]+("+Gn+")[,|\\s]+("+Gn+")[,|\\s]+("+Gn+")[,|\\s]+("+Gn+")\\s*\\)?",{CSS_UNIT:new RegExp(Gn),rgb:new RegExp("rgb"+$o),rgba:new RegExp("rgba"+zo),hsl:new RegExp("hsl"+$o),hsla:new RegExp("hsla"+zo),hsv:new RegExp("hsv"+$o),hsva:new RegExp("hsva"+zo),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function In(t){return!!nn.CSS_UNIT.exec(t)}var _l=function(t,e){var n=(typeof t=="string"?parseInt(t):t)||0;if(n>=-5&&n<=5){var r=n,i=parseFloat(e),s=i+r*(i/5)*-1;return(s==0||s<=Number.EPSILON)&&(s=.1),{animationPeriod:s+"s"}}return{animationPeriod:e}},Tl=function(t,e){var n=t||{},r="";switch(e){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var i={};if(n.fontSize){var s=n.fontSize;i=function(o,a){var l={};for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&a.indexOf(c)<0&&(l[c]=o[c]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function"){var u=0;for(c=Object.getOwnPropertySymbols(o);u<c.length;u++)a.indexOf(c[u])<0&&Object.prototype.propertyIsEnumerable.call(o,c[u])&&(l[c[u]]=o[c[u]])}return l}(n,["fontSize"]),r=s}return{fontSize:r,styles:i}},hD={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Sl=function(t){var e=t.className,n=t.text,r=t.textColor,i=t.staticText,s=t.style;return n?O.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(e||"").trim(),style:Le(Le(Le({},i&&hD),r&&{color:r,mixBlendMode:"unset"}),s&&s)},typeof n=="string"&&n.length?n:"loading"):null},fo="rgb(50, 205, 50)";function Pl(t,e){if(e===void 0&&(e=0),t.length===0)throw new Error("Input array cannot be empty!");var n=[];return function r(i,s){return s===void 0&&(s=0),n.push.apply(n,i),n.length<s&&r(n,s),n.slice(0,s)}(t,e)}ht(`.atom-rli-bounding-box {
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
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
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
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
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
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
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
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
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
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
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
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
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
@keyframes uxlv7gg {
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
@keyframes uxlv7gy {
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
@keyframes uxlv7hv {
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
}`);ne(fo).toRgb();Array.from({length:4},function(t,e){return"--atom-phase".concat(e+1,"-rgb")});ht(`.commet-rli-bounding-box {
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
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
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
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
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
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
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
}`);Array.from({length:4},function(t,e){return"--commet-phase".concat(e+1,"-color")});ht(`.OP-annulus-rli-bounding-box {
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
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
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
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
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
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
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
@keyframes uxlv7p5 {
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
}`);Array.from({length:4},function(t,e){return"--OP-annulus-phase".concat(e+1,"-color")});function pc(t){return t&&t.Math===Math&&t}ht(`.OP-dotted-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
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
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
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
}`);pc(typeof window=="object"&&window)||pc(typeof self=="object"&&self)||pc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(t,e){return"--OP-dotted-phase".concat(e+1,"-color")});ht(`.OP-spokes-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
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
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
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
}`);Array.from({length:4},function(t,e){return"--OP-spokes-phase".concat(e+1,"-color")});ht(`.OP-annulus-dual-sectors-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
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
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
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
}`);Array.from({length:4},function(t,e){return"--OP-annulus-dual-sectors-phase".concat(e+1,"-color")});ht(`.OP-annulus-sector-track-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
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
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
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
}`);Array.from({length:4},function(t,e){return["--OP-annulus-track-phase".concat(e+1,"-color"),"--OP-annulus-sector-phase".concat(e+1,"-color")]});ht(`.foursquare-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
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
@keyframes uxlv7dk {
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
@keyframes uxlv7dd {
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
@keyframes uxlv7es {
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
}`);Array.from({length:4},function(t,e){return"--four-square-phase".concat(e+1,"-color")});ht(`.mosaic-rli-bounding-box {
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
  animation-name: uxlv7i4, uxlv7is;
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
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
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
}`);Array.from({length:4},function(t,e){return"--mosaic-phase".concat(e+1,"-color")});ht(`.riple-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
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
@keyframes uxlv7i1 {
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
@keyframes uxlv7io {
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
}`);Array.from({length:4},function(t,e){return"--riple-phase".concat(e+1,"-color")});ht(`.pulsate-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
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
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
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
}`);var ni=Array.from({length:4},function(t,e){return"--TD-pulsate-phase".concat(e+1,"-color")}),dD=function(t){var e,n=Tl(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,s=t==null?void 0:t.easing,o=_l(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,a=function(l){var c={};if(l instanceof Array){for(var u=Pl(l,ni.length),f=0;f<u.length&&!(f>=4);f++)c[ni[f]]=u[f];return c}try{if(typeof l!="string")throw new Error("Color String expected");for(var p=0;p<ni.length;p++)c[ni[p]]=l}catch(d){for(d instanceof Error?console.warn("[".concat(d.message,']: Received "').concat(typeof l,'" instead with value, ').concat(JSON.stringify(l))):console.warn("".concat(JSON.stringify(l),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),p=0;p<ni.length;p++)c[ni[p]]=fo}return c}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:"");return O.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:Le(Le(Le(Le(Le({},i&&{fontSize:i}),o&&{"--rli-animation-duration":o}),s&&{"--rli-animation-function":s}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},O.createElement("span",{className:"rli-d-i-b pulsate-indicator"},O.createElement("span",{className:"rli-d-i-b pulsate-dot"}),O.createElement("span",{className:"rli-d-i-b pulsate-dot"}),O.createElement("span",{className:"rli-d-i-b pulsate-dot"})),O.createElement(Sl,{staticText:!0,text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor}))};ht(`.brick-stack-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
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
@keyframes uxlv7tu {
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
@keyframes uxlv7us {
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
}`);var ri=Array.from({length:4},function(t,e){return"--TD-brick-stack-phase".concat(e+1,"-color")}),fD=function(t){var e,n=Tl(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,s=t==null?void 0:t.easing,o=_l(t==null?void 0:t.speedPlus,"1s").animationPeriod,a=function(l){var c={};if(l instanceof Array){for(var u=Pl(l,ri.length),f=0;f<u.length&&!(f>=4);f++)c[ri[f]]=u[f];return c}try{if(typeof l!="string")throw new Error("Color String expected");for(var p=0;p<ri.length;p++)c[ri[p]]=l}catch(d){for(d instanceof Error?console.warn("[".concat(d.message,']: Received "').concat(typeof l,'" instead with value, ').concat(JSON.stringify(l))):console.warn("".concat(JSON.stringify(l),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),p=0;p<ri.length;p++)c[ri[p]]=fo}return c}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:"");return O.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:Le(Le(Le(Le(Le({},i&&{fontSize:i}),o&&{"--rli-animation-duration":o}),s&&{"--rli-animation-function":s}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},O.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},O.createElement("span",{className:"rli-d-i-b brick-stack"})),O.createElement(Sl,{staticText:!0,text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor}))};ht(`.bob-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
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
@keyframes uxlv7u0 {
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
@keyframes uxlv7vq {
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
}`);var ii=Array.from({length:4},function(t,e){return"--TD-bob-phase".concat(e+1,"-color")}),pD=function(t){var e,n=Tl(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,s=t==null?void 0:t.easing,o=_l(t==null?void 0:t.speedPlus,"1.2s").animationPeriod,a=function(l){var c={};if(l instanceof Array){for(var u=Pl(l,ii.length),f=0;f<u.length&&!(f>=4);f++)c[ii[f]]=u[f];return c}try{if(typeof l!="string")throw new Error("Color String expected");for(var p=0;p<ii.length;p++)c[ii[p]]=l}catch(d){for(d instanceof Error?console.warn("[".concat(d.message,']: Received "').concat(typeof l,'" instead with value, ').concat(JSON.stringify(l))):console.warn("".concat(JSON.stringify(l),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),p=0;p<ii.length;p++)c[ii[p]]=fo}return c}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:"");return O.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:Le(Le(Le(Le(Le({},i&&{fontSize:i}),o&&{"--rli-animation-duration":o}),s&&{"--rli-animation-function":s}),a),r),role:"status","aria-live":"polite","aria-label":"Loading"},O.createElement("span",{className:"bob-indicator"},O.createElement("span",{className:"bobbing"})),O.createElement(Sl,{staticText:!0,text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor}))};ht(`.bounce-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
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
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
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
@keyframes uxlv7wc {
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
@keyframes uxlv7ww {
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
@keyframes uxlv7x6 {
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
}`);var si=Array.from({length:4},function(t,e){return"--TD-bounce-phase".concat(e+1,"-color")}),mD=function(t){var e,n=Tl(t==null?void 0:t.style,t==null?void 0:t.size),r=n.styles,i=n.fontSize,s=t==null?void 0:t.easing,o=_l(t==null?void 0:t.speedPlus,"0.5s").animationPeriod,a=function(l){var c={};if(l instanceof Array){for(var u=Pl(l,si.length),f=0;f<u.length&&!(f>=4);f++)c[si[f]]=u[f];return c}try{if(typeof l!="string")throw new Error("Color String expected");for(var p=0;p<si.length;p++)c[si[p]]=l}catch{for(p=0;p<si.length;p++)c[si[p]]=fo}return c}((e=t==null?void 0:t.color)!==null&&e!==void 0?e:"");return O.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:Le(Le(Le(Le(Le({},i&&{fontSize:i}),o&&{"--rli-animation-duration":o}),s&&{"--rli-animation-function":s}),a),r)},O.createElement("span",{className:"wrapper"},O.createElement("span",{className:"group"},O.createElement("span",{className:"rli-d-i-b dot"}),O.createElement("span",{className:"rli-d-i-b dot"}),O.createElement("span",{className:"rli-d-i-b dot"})),O.createElement("span",{className:"group"},O.createElement("span",{className:"rli-d-i-b shadow"}),O.createElement("span",{className:"rli-d-i-b shadow"}),O.createElement("span",{className:"rli-d-i-b shadow"}))),O.createElement(Sl,{staticText:!0,text:t==null?void 0:t.text,textColor:t==null?void 0:t.textColor,style:{marginTop:"2px"}}))},t1=function(t){var e=Object(t).variant,n=e===void 0?"pulsate":e;return n==="pulsate"?O.createElement(dD,Le({},t)):n==="brick-stack"?O.createElement(fD,Le({},t)):n==="bob"?O.createElement(pD,Le({},t)):n==="bounce"?O.createElement(mD,Le({},t)):null};ht(`.blink-blur-rli-bounding-box {
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
  animation-name: uxlv7id, uxlv7jl;
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
@keyframes uxlv7id {
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
@keyframes uxlv7jl {
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
}`);Array.from({length:4},function(t,e){return"--shape-phase".concat(e+1,"-color")});ht(`.trophy-spin-rli-bounding-box {
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
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
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
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
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
@keyframes uxlv7ly {
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
}`);Array.from({length:4},function(t,e){return"--trophySpin-phase".concat(e+1,"-color")});ht(`.slab-rli-bounding-box {
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
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
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
@keyframes uxlv7md {
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
@keyframes uxlv7n0 {
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
}`);Array.from({length:4},function(t,e){return"--slab-phase".concat(e+1,"-color")});ht(`.lifeline-rli-bounding-box {
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
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
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
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
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
}`);Array.from({length:4},function(t,e){return"--life-line-phase".concat(e+1,"-color")});var pu=new Map,Wo=new WeakMap,ng=0,gD=void 0;function vD(t){return t?(Wo.has(t)||(ng+=1,Wo.set(t,ng.toString())),Wo.get(t)):"0"}function yD(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?vD(t.root):t[e]}`).toString()}function bD(t){const e=yD(t);let n=pu.get(e);if(!n){const r=new Map;let i;const s=new IntersectionObserver(o=>{o.forEach(a=>{var l;const c=a.isIntersecting&&i.some(u=>a.intersectionRatio>=u);t.trackVisibility&&typeof a.isVisible>"u"&&(a.isVisible=c),(l=r.get(a.target))==null||l.forEach(u=>{u(c,a)})})},t);i=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),n={id:e,observer:s,elements:r},pu.set(e,n)}return n}function xD(t,e,n={},r=gD){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const l=t.getBoundingClientRect();return e(r,{isIntersecting:r,target:t,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:i,observer:s,elements:o}=bD(n),a=o.get(t)||[];return o.has(t)||o.set(t,a),a.push(e),s.observe(t),function(){a.splice(a.indexOf(e),1),a.length===0&&(o.delete(t),s.unobserve(t)),o.size===0&&(s.disconnect(),pu.delete(i))}}function wD({threshold:t,delay:e,trackVisibility:n,rootMargin:r,root:i,triggerOnce:s,skip:o,initialInView:a,fallbackInView:l,onChange:c}={}){var u;const[f,p]=D.useState(null),d=D.useRef(c),[g,m]=D.useState({inView:!!a,entry:void 0});d.current=c,D.useEffect(()=>{if(o||!f)return;let R;return R=xD(f,(N,x)=>{m({inView:N,entry:x}),d.current&&d.current(N,x),x.isIntersecting&&s&&R&&(R(),R=void 0)},{root:i,rootMargin:r,threshold:t,trackVisibility:n,delay:e},l),()=>{R&&R()}},[Array.isArray(t)?t.toString():t,f,i,r,s,o,n,l,e]);const v=(u=g.entry)==null?void 0:u.target,_=D.useRef(void 0);!f&&v&&!s&&!o&&_.current!==v&&(_.current=v,m({inView:!!a,entry:void 0}));const C=[p,g.inView,g.entry];return C.ref=C[0],C.inView=C[1],C.entry=C[2],C}function ED(){const[t,e]=D.useState(!1),n=D.useRef(null),r=D.useRef(null),[i,s]=D.useState(!1),o=D.useRef(null),[a,l]=D.useState(!1),c=D.useRef([]),[u,f]=D.useState(!1),[p,d]=D.useState(""),[g,m]=D.useState([]),_=Mi().state,C=Hr(),[R,N]=D.useState(""),[x,I]=D.useState(!0),[E,y]=D.useState(_),[w,T]=D.useState(_.boardVisibility),[P,A]=D.useState(_.sharedWith),[k,B]=D.useState(""),[$,X]=D.useState(""),[U,K]=D.useState(!1),ee=D.useRef(null),ue=H=>{ee.current&&!ee.current.contains(H.target)&&K(!1)};D.useEffect(()=>(document.addEventListener("mousedown",ue),()=>{document.removeEventListener("mousedown",ue)}),[]);const Ee={hidden:{opacity:0,x:"100%"},visible:{opacity:1,x:"0%"},exit:{opacity:0,x:"100%"}},ge=["./BoardBackground/1.jpg","./BoardBackground/2.jpg","./BoardBackground/3.jpg","./BoardBackground/4.jpg","./BoardBackground/5.jpg","./BoardBackground/6.jpg","./BoardBackground/7.jpg","./BoardBackground/8.jpg","./BoardBackground/9.jpg","./BoardBackground/10.jpg","./BoardBackground/11.jpg","./BoardBackground/12.jpg","./BoardBackground/13.jpg","./BoardBackground/14.jpg","./BoardBackground/15.jpg","./BoardBackground/16.jpg","./BoardBackground/17.jpg","./BoardBackground/18.png","./BoardBackground/19.jpg"],ae=[{className:"bg-gradient-to-r from-teal-400 to-blue-500"},{className:"bg-gradient-to-r from-blue-800 to-blue-400"},{className:"bg-gradient-to-r from-purple-500 to-pink-500"},{className:"bg-gradient-to-r from-purple-400 to-blue-300"},{className:"bg-gradient-to-r from-orange-400 to-yellow-300"},{className:"bg-gradient-to-r from-pink-400 to-pink-200"},{className:"bg-gradient-to-r from-teal-400 to-green-500"},{className:"bg-gradient-to-r from-blue-800 to-blue-400"},{className:"bg-gradient-to-r from-red-800 to-brown-500"},{className:"bg-blue-500"},{className:"bg-orange-500"},{className:"bg-green-500"},{className:"bg-red-500"},{className:"bg-purple-500"},{className:"bg-pink-500"},{className:"bg-green-300"},{className:"bg-cyan-500"},{className:"bg-gray-500"}],$e=H=>{r.current&&!r.current.contains(H.target)&&e(!1)};D.useEffect(()=>(document.addEventListener("mousedown",$e),()=>{document.removeEventListener("mousedown",$e)}),[]);const Me=async H=>{B(H);const W=ke.currentUser;if(W)try{await je(le(te,`users/${W.uid}/Boards/${_.id}`),{background:H,backgroundImage:""});const Q=P.map(se=>je(le(te,`users/${se.id}/Boards/${_.id}`),{background:H,backgroundImage:""}));await Promise.all(Q)}catch(Q){console.error("Error updating list title: ",Q)}else console.error("User is not authenticated.")},ie=async H=>{B(""),X(H);const W=ke.currentUser;if(W)try{await je(le(te,`users/${W.uid}/Boards/${_.id}`),{backgroundImage:H,background:""});const Q=P.map(se=>je(le(te,`users/${se.id}/Boards/${_.id}`),{backgroundImage:H,background:""}));await Promise.all(Q)}catch(Q){console.error("Error updating list title: ",Q)}else console.error("User is not authenticated.")};D.useEffect(()=>{const H=setTimeout(()=>{I(!1)},1240);return()=>{clearTimeout(H)}});const[Ve,be]=D.useState(!1),ze=D.useRef(null),oe=H=>{ze.current&&!ze.current.contains(H.target)&&be(!1)};D.useEffect(()=>(document.addEventListener("mousedown",oe),()=>{document.removeEventListener("mousedown",oe)}),[]),D.useEffect(()=>(document.addEventListener("mousedown",Ce),()=>{document.removeEventListener("mousedown",Ce)}),[]);const Fe=async H=>{const W=ke.currentUser;if(m(Q=>Q.filter(se=>se.id!==H).map((se,F)=>({...se,order:F}))),W)try{const Q=g.filter(q=>q.id!==H);await pn(le(te,`users/${W.uid}/Boards/${_.id}/Lists`,H));const se=Q.map((q,de)=>je(le(te,`users/${W.uid}/Boards/${_.id}/Lists/`,q.id),{order:de,title:q.title})),F=P.flatMap(q=>{const de=pn(le(te,`users/${q.id}/Boards/${_.id}/Lists/`,H)),Be=Q.map((rt,Lt)=>je(le(te,`users/${q.id}/Boards/${_.id}/Lists`,rt.id),{order:Lt,title:rt.title}));return[de,...Be]});await Promise.all([...se,...F])}catch(Q){console.error("Error deleting list : ",Q)}else console.error("User is not authenticated")};D.useEffect(()=>{const H=pr(ke,W=>{W?(async()=>{try{const se=le(te,`users/${W.uid}/Boards/${_.id}`),F=await eo(se);if(F.exists()){const q={id:F.id,data:F.data()};y(q),T(q.data.boardVisibility),A(q.data.sharedWith),N(q.data.title),B(q.data.background),X(q.data.backgroundImage)}else console.log("No such board!"),y({})}catch(se){console.error("Error fetching board:",se)}})():y({})});return()=>H()},[]);const Ce=H=>{r.current&&!r.current.contains(H.target)&&l(!1)},dt=async()=>{if(w==="shareable"){const H=ke.currentUser;if(H){if(P.length>=2){console.error("Cannot change visibility to private: the board is shared with multiple users.");return}try{T("private"),await je(le(te,`users/${H.uid}/Boards/${_.id}`),{boardVisibility:"private"})}catch(W){console.error("Error updating document: ",W)}}else console.error("User is not authenticated.")}},Ke=async()=>{if(w==="private"){T("shareable");const H=ke.currentUser;if(H)try{await je(le(te,`users/${H.uid}/Boards/${_.id}`),{boardVisibility:"shareable"})}catch(W){console.log("Error updating document: ",W)}}else console.error("User is not authenticated.")},ft=k===""?{backgroundImage:`url('${$}')`,backgroundSize:"cover",backgroundPosition:"center",height:"auto",width:"100%",color:"rgba(255,255,255,0)"}:{},Ze=H=>{f(!1),H.stopPropagation(),s(!0)},Vt=()=>{s(!1)};D.useEffect(()=>{const H=pr(ke,W=>{W?(async()=>{const se=Kr(te,`users/${W.uid}/Boards/${_.id}/Lists`),q=(await Xr(se)).docs.map(de=>({id:de.id,title:de.data().title,order:de.data().order})).sort((de,Be)=>de.order-Be.order);m(q)})().catch(se=>console.error("Error fetching lists:",se)):m([])});return()=>H()},[]),D.useEffect(()=>{if(i)return document.addEventListener("click",he),()=>{document.removeEventListener("click",he)}},[i]);const Y=async()=>{const H=ke.currentUser;if(H){Vt();try{const W=new Date().getTime().toString(),Q={id:W,title:p};m(q=>{const de=[...q,Q],Be=le(te,`users/${H.uid}/Boards/${_.id}/Lists`,W);return on(Be,{title:p,id:W,order:de.length-1}),de}),console.log(P);const se=P.map(q=>{const de=le(te,`users/${q.id}/Boards/${_.id}/Lists`,W);return on(de,{title:p,id:W,order:g.length})});if(await Promise.all(se),window.innerWidth<=650&&c.current.length>0){const q=c.current[c.current.length-1];q&&q.scrollIntoView({behavior:"smooth",block:"start"})}}catch(W){console.error("Error adding to Firestore: ",W)}}else console.error("User is not authenticated")},J=async()=>{const H=ke.currentUser;if(H)try{const W=le(te,`users/${H.uid}/Boards/${_.id}`);await pn(W);const Q=P.map(se=>{const F=le(te,`users/${se.id}/Boards/${_.id}`);return pn(F)});await Promise.all(Q),C("/Home")}catch(W){console.error("Error deleting card: ",W)}else console.error("User is not authenticated")},he=H=>{o.current&&!o.current.contains(H.target)&&(console.log("Click was outside, closing input"),Vt())},xe=()=>{f(!0)},Re=async H=>{const W=H.target.value;N(W);const Q=ke.currentUser;if(Q)try{await je(le(te,`users/${Q.uid}/Boards/${_.id}`),{title:W});const se=P.map(F=>je(le(te,`users/${F.id}/Boards/${_.id}`),{title:W}));await Promise.all(se)}catch(se){console.error("Error updating list title: ",se)}else console.error("User is not authenticated.")},Te=async H=>{const{active:W,over:Q}=H;if(f(!1),W.id&&(Q!=null&&Q.id)){const se=ke.currentUser;if(se){const F=g.findIndex(de=>de.id===W.id),q=g.findIndex(de=>de.id===Q.id);if(F!==-1&&q!==-1){const de=pl(g,F,q);try{m(de);const Be=de.map((Lt,Tt)=>je(le(te,`users/${se.uid}/Boards/${_.id}/Lists`,Lt.id),{order:Tt,title:Lt.title})),rt=P.map(Lt=>de.map((Tt,$n)=>je(le(te,`users/${Lt.id}/Boards/${_.id}/Lists`,Tt.id),{order:$n,title:Tt.title}))).flat();await Promise.all([...Be,...rt])}catch(Be){console.error("Error updating cards:",Be)}}}else console.error("User is not authenticated")}},_e=Qv(Da(vh,{activationConstraint:{delay:100,tolerance:5}}),Da(yh,{activationConstraint:{delay:100,tolerance:5}}));return React.createElement("div",null,x&&React.createElement("div",{className:"flex h-screen w-screen overflow-hidden flex-col justify-center items-center gap-6 p-4 "},React.createElement(t1,{variant:"bounce",color:"#d33dad",size:"large",text:"",textColor:"#f8f8f8"}),React.createElement("p",{className:"text-[1.3rem] font-bold text-center text-gray-900",style:{maxWidth:"350px"}},"Hang tight! We're preparing everything for you...")),!x&&React.createElement("div",{style:ft,className:`h-screen max-h-screen overflow-hidden flex flex-col box-border ${k} `},a&&React.createElement("div",{ref:r,className:" absolute top-[5.3em] left-[2.3%]  mt-1.5 shareMenu z-[1000000] w-72 rounded-2xl  bg-zinc-800   ring-black ring-opacity-5 focus:outline-none"},React.createElement("div",{className:"py-1"},React.createElement("button",{onClick:dt,style:{borderColor:w==="private"?"lightblue":""},className:"block  w-full border-2 border-zinc-800 rounded-2xl text-left px-4 py-2 text-sm bg-zinc-800 text-gray-300 hover:bg-zinc-700"},React.createElement("span",{className:"text-[1.1rem] text-gray-200"},"Private Board")," - A personal board where all tasks and data are private and only visible to you."),React.createElement("button",{onClick:Ke,style:{borderColor:w==="shareable"?"lightblue":""},className:"block border-2 border-zinc-800 w-full text-left px-4 rounded-2xl py-2 text-sm bg-zinc-800 text-gray-300 hover:bg-zinc-700"},React.createElement("span",{className:"text-[1.1rem] text-gray-200"},"Shareable Board")," - A collaborative board that allows you to share tasks with others for group work."))),React.createElement("nav",{className:"bg-gray-400 bg-opacity-55 sm:bg-opacity-50 py-2 pl-3.5 pr-2 sm:pr-5 text-md  absolute w-screen items-center top-11"},React.createElement("div",{className:"flex justify-between"},React.createElement("div",{className:"flex gap-5"},React.createElement("p",{className:"text-white font-bold text-2xl cursor-pointer"},R),React.createElement("div",{className:"relative inline-block text-left",ref:r},React.createElement("button",{onClick:()=>l(!a),className:"sm:text-lg text-slate-100 text-md px-1.5 mt-1 sm:mt-0.5 flex gap-1  hover:text-gray-900 rounded-md hover:bg-slate-100 items-center"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-5 h-5"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"})),React.createElement("p",{className:""}," ",window.innerWidth>650?"Workspace visible":"Visibility")))),React.createElement("div",{className:"flex items-center gap-2"},React.createElement("div",{onClick:()=>be(!Ve),className:"bg-slate-100 text-zinc-950 flex items-center gap-1 px-1.5 rounded-md hover:bg-slate-200 cursor-pointer"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.4",stroke:"currentColor",className:"w-5 h-5"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"})),"Share"),React.createElement("button",{onClick:()=>{e(!t)},className:" text-zinc-100 flex items-center ml-2  rounded-md hover:text-zinc-300 cursor-pointer"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-7"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"})))))),U&&React.createElement("div",{className:"flex justify-center items-center w-screen h-screen fixed bg-gray-700 bg-opacity-35 z-[1000000]"},React.createElement("div",{ref:ee,className:" relative flex flex-col z-[10000] justify-center items-center  border-t-2 border-red-600 p-2 pb-5 px-4 sm:px-5 rounded-lg bg-gray-900 w-fit max-w-[90%] h-fit"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-16 z-50 text-gray-200 bg-red-600 rounded-full p-1.5 absolute top-[-33px] "},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})),React.createElement("h1",{className:"text-xl text-center mb-2 font-bold mt-10 text-gray-300"},"Delete Board?"),React.createElement("p",{"mb-5":!0,className:"text-sm text-center text-gray-300"},"Are you sure? This action will delete the board for all shared users and cannot be undone."),React.createElement("div",{className:"flex justify-center mt-7 gap-10"},React.createElement("button",{onClick:()=>{K(!1)},className:"px-8 rounded-lg p-1.5 hover:bg-zinc-600 text-gray-100 bg-zinc-500 "},"Cancel"),React.createElement("button",{onClick:J,className:"px-8 rounded-lg p-1.5 text-gray-100 bg-red-600 hover:bg-red-800"},"Delete")))),React.createElement(Sy,null,t&&React.createElement(sa.div,{ref:r,className:"h-full p-4 px-3 top-11 flex flex-col w-60 sm:w-72 fixed z-[10000] right-0 bg-gray-800",initial:"hidden",animate:"visible",exit:"hidden",variants:Ee,transition:{duration:.3}},React.createElement("div",{className:"w-full relative flex items-start justify-between "},React.createElement("h1",{className:"text-center text-xl flex-grow text-gray-300 "},"Menu"),React.createElement("button",{onClick:()=>{e(!1)},className:"absolute right-0 top-0 text-slate-300 py-1 px-1 rounded-md text-md hover:bg-gray-800"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})))),React.createElement("hr",{className:"border-0 border-b bg-gray-300 w-full opacity-35 my-2"}),React.createElement("input",{onChange:Re,value:R,className:"text-xl my-2 p-1.5 px-2 rounded-md text-center w-full border-solid border-slate-400 focus:border-solid focus:border-blue-500 focus:box-shadow border-2 focus:outline-none bg-gray-900 text-slate-300"}),React.createElement("h3",{className:"text-center my-3 text-lg text-gray-300 "},"Change Background"),React.createElement("div",{className:"color max-h-[20vh] sm:max-h-[17vh] mb-4 rounded-md px-3 pt-1 overflow-y-auto bg-gray-900"},React.createElement("div",{className:"grid grid-cols-2 mt-1 p-1 gap-5"},ae.map((H,W)=>React.createElement("div",{key:W,onClick:()=>Me(H.className),className:`py-6 sm:py-7 cursor-pointer rounded-sm ${H.className}`})))),React.createElement("div",{className:"color max-h-[20vh] mt-1 sm:max-h-[17vh] pt-1 rounded-md sm:px-3 px-2 overflow-y-scroll bg-gray-900"},React.createElement("div",{className:"grid grid-cols-2 mt-1 p-1 gap-5"},ge.map(H=>React.createElement("div",{key:H,onClick:()=>{ie(H)},className:"cursor-pointer"},React.createElement("img",{src:H,loading:"lazy",alt:"Background",style:{width:"100%",height:"100%",objectFit:"cover",display:"block",visibility:"hidden"},onLoad:W=>{const Q=W.target.src.replace("-lowres.jpg",".jpg"),se=new Image;se.src=Q,se.onload=()=>{W.target.src=Q,W.target.style.visibility="visible"}}}))))),React.createElement("div",{className:"flex mt-8 justify-center"},React.createElement("button",{onClick:()=>{K(!U),e(!1)},className:"text-gray-300 text-md flex gap-1 p-1.5 px-4 rounded-xl shadow-lg  bg-gray-900 border-2 border-slate-400 hover:border-red-600 hover:bg-slate-800"}," ",React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"size-5 mr-0.5 text-red-600"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"})),"Delete")))),Ve&&React.createElement("div",{ref:ze},React.createElement(yR,{visibility:w,id:_.id,Board:E,BoardMember:P})),React.createElement("div",{ref:n,className:`ml-6 sm:pl-6 md:ml-0 overflow-x-auto BOARDS  overflow-y-hidden   h-screen max-h-screen over px-3    sm:gap-10  flex gap-12 pt-28  ${u?" ":"BordContainer"}`},React.createElement(fy,{onDragStart:xe,sensors:_e,collisionDetection:Jv,onDragEnd:Te},React.createElement(yy,{items:g,strategy:my},g.map((H,W)=>React.createElement(vR,{BoardId:_.id,item:H,sharedWith:P,key:H.id,lists:g,onDeleteList:Fe,id:H.id,Dragging:u,ref:Q=>c.current[W]=Q,title:H.title})))),!i&&React.createElement("button",{onClick:Ze,className:"btn p-4 text-md   py-2.5 rounded-lg bg-zinc-800 bg-opacity-50 text-left text-zinc-50 self-start mt-1"},"+ Add another list"),i&&React.createElement("div",{className:"bg-black mr-10  btn p-5 px-3 pt-3 rounded-xl h-fit"},React.createElement("div",{className:"mt-1"},React.createElement("input",{onChange:H=>{d(H.target.value)},type:"text",placeholder:"Enter List name...",className:"text:xl p-1 px-2.5 rounded-md w-full border-solid border-slate-400 focus:border-solid focus:border-blue-500 focus:box-shadow border-2  focus:outline-none bg-gray-800 text-md text-slate-300"}),React.createElement("div",{className:"mt-3 flex justify-start gap-1.5"},React.createElement("button",{onClick:Y,className:"bg-blue-600 hover:bg-blue-700 mr-1.5 text-gray-950 py-1 px-2 rounded-md text-m"},"Add List"),React.createElement("button",{onClick:Vt,className:" justify-self-end  text-slate-300  py-1 px-1  rounded-md  text-md hover:bg-gray-800"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"size-6"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})))))))))}var oa={},n1,r1;Object.defineProperty(oa,"__esModule",{value:!0});var ps=bn,dn=D,sn=function(){return sn=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},sn.apply(this,arguments)};function _D(t,e){var n,r;switch(e.type){case"TYPE":return sn(sn({},t),{speed:e.speed,text:(n=e.payload)===null||n===void 0?void 0:n.substring(0,t.text.length+1)});case"DELAY":return sn(sn({},t),{speed:e.payload});case"DELETE":return sn(sn({},t),{speed:e.speed,text:(r=e.payload)===null||r===void 0?void 0:r.substring(0,t.text.length-1)});case"COUNT":return sn(sn({},t),{count:t.count+1});default:return t}}var rg=function(t){var e=t.words,n=e===void 0?["Hello World!","This is","a simple Typewriter"]:e,r=t.loop,i=r===void 0?1:r,s=t.typeSpeed,o=s===void 0?80:s,a=t.deleteSpeed,l=a===void 0?50:a,c=t.delaySpeed,u=c===void 0?1500:c,f=t.onLoopDone,p=t.onType,d=t.onDelete,g=t.onDelay,m=dn.useReducer(_D,{speed:o,text:"",count:0}),v=m[0],_=v.speed,C=v.text,R=v.count,N=m[1],x=dn.useRef(0),I=dn.useRef(!1),E=dn.useRef(!1),y=dn.useRef(!1),w=dn.useRef(!1),T=dn.useCallback(function(){var P=R%n.length,A=n[P];E.current?(N({type:"DELETE",payload:A,speed:l}),C===""&&(E.current=!1,N({type:"COUNT"}))):(N({type:"TYPE",payload:A,speed:o}),y.current=!0,C===A&&(N({type:"DELAY",payload:u}),y.current=!1,w.current=!0,setTimeout(function(){w.current=!1,E.current=!0},u),i>0&&(x.current+=1,x.current/n.length===i&&(w.current=!1,I.current=!0)))),y.current&&p&&p(x.current),E.current&&d&&d(),w.current&&g&&g()},[R,u,l,i,o,n,C,p,d,g]);return dn.useEffect(function(){var P=setTimeout(T,_);return I.current&&clearTimeout(P),function(){return clearTimeout(P)}},[T,_]),dn.useEffect(function(){f&&I.current&&f()},[f]),[C,{isType:y.current,isDelay:w.current,isDelete:E.current,isDone:I.current}]},TD="styles-module_blinkingCursor__yugAC",SD="styles-module_blinking__9VXRT";(function(t,e){e===void 0&&(e={});var n=e.insertAt;if(typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}})(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");var ig=dn.memo(function(t){var e=t.cursorBlinking,n=e===void 0||e,r=t.cursorStyle,i=r===void 0?"|":r,s=t.cursorColor,o=s===void 0?"inherit":s;return ps.jsx("span",sn({style:{color:o},className:"".concat(TD," ").concat(n?SD:"")},{children:i}))});r1=oa.Cursor=ig,oa.Typewriter=function(t){var e=t.words,n=e===void 0?["Hello World!","This is","a simple Typewriter"]:e,r=t.loop,i=r===void 0?1:r,s=t.typeSpeed,o=s===void 0?80:s,a=t.deleteSpeed,l=a===void 0?50:a,c=t.delaySpeed,u=c===void 0?1500:c,f=t.cursor,p=f!==void 0&&f,d=t.cursorStyle,g=d===void 0?"|":d,m=t.cursorColor,v=m===void 0?"inherit":m,_=t.cursorBlinking,C=_===void 0||_,R=t.onLoopDone,N=t.onType,x=t.onDelay,I=t.onDelete,E=rg({words:n,loop:i,typeSpeed:o,deleteSpeed:l,delaySpeed:u,onLoopDone:R,onType:N,onDelay:x,onDelete:I})[0];return ps.jsxs(ps.Fragment,{children:[ps.jsx("span",{children:E}),p&&ps.jsx(ig,{cursorStyle:g,cursorColor:v,cursorBlinking:C})]})},n1=oa.useTypewriter=rg;function Zh(){const t=["./BoardBackground/1.jpg","./BoardBackground/2.jpg","./BoardBackground/3.jpg","./BoardBackground/4.jpg","./BoardBackground/5.jpg","./BoardBackground/6.jpg","./BoardBackground/7.jpg","./BoardBackground/8.jpg","./BoardBackground/9.jpg","./BoardBackground/10.jpg","./BoardBackground/11.jpg","./BoardBackground/12.jpg","./BoardBackground/13.jpg","./BoardBackground/14.jpg","./BoardBackground/15.jpg","./BoardBackground/16.jpg","./BoardBackground/17.jpg","./BoardBackground/18.png","./BoardBackground/19.jpg"],e=Hr(),[n,r]=D.useState(!1),[i,s]=D.useState(""),[o,a]=D.useState(""),[l,c]=D.useState(""),u=D.useRef(null),[f,p]=D.useState("Board Visibility"),d=()=>{r(!n)},g=x=>{u.current&&!u.current.contains(x.target)&&r(!1)};D.useEffect(()=>(document.addEventListener("mousedown",g),()=>{document.removeEventListener("mousedown",g)}),[]);const m=n?{borderColor:"lightblue"}:{},v=x=>{C==="Make sure you fill the board title"&&R(""),c(x.target.value)},_=i===""?{backgroundImage:`url('${o}')`,backgroundSize:"cover",backgroundPosition:"center",color:"rgba(255,255,255,0)"}:{},[C,R]=D.useState(""),N=async()=>{if(l==="")R("Make sure you fill the board title");else if(i===""&&o==="")R("Make sure you choose a background or images");else if(f==="Board Visibility")R("Make sure you choose a visibility option");else{const x=ke.currentUser;if(x)try{const I=le(te,`users/${x.uid}`),E=await eo(I);let y="",w={};if(E.exists()){const B=E.data();y=B.name,w=B.avatar}const T=new Date().getTime().toString(),P=le(te,`users/${x.uid}/Boards`,T),k={id:T,title:l,background:i,backgroundImage:o,boardVisibility:f==="Shareable Board"?"shareable":"private",sharedWith:[{id:x.uid,email:x.email,name:y,avatar:w}]};await on(P,k),e(`/Board/${T}`,{state:k})}catch(I){console.log(I)}else alert("Please Sign In First")}};return O.createElement("div",{className:"flex  items-center z-10 sm:mt-10  w-screen h-screen px-7  flex-col justify-start "},O.createElement("img",{draggable:!1,style:_,src:"https://trello.com/assets/14cda5dc635d1f13bc48.svg",className:`w-[50%] p-1 px-2 max-w-[210px] mb-5 mt-[-27%]  select-none sm:mt-[-50px] ${i}`}),O.createElement("div",{className:"flex w-[80%] max-w-[470px] justify-center gap-4 md:gap-10 items-center "},O.createElement("div",{className:"main"},O.createElement("input",{onChange:x=>{v(x)},required:!0,type:"text",className:"input"}),O.createElement("label",null,O.createElement("span",{style:{transitionDelay:"0ms",left:"10px"}},"B"),O.createElement("span",{style:{transitionDelay:"75ms",left:"27px"}},"o"),O.createElement("span",{style:{transitionDelay:"150ms",left:"42px"}},"a"),O.createElement("span",{style:{transitionDelay:"225ms",left:"57px"}},"r"),O.createElement("span",{style:{transitionDelay:"300ms",left:"66px"}},"d"),O.createElement("span",{style:{transitionDelay:"375ms",left:"88px"}},"T"),O.createElement("span",{style:{transitionDelay:"450ms",left:"104px"}},"i"),O.createElement("span",{style:{transitionDelay:"525ms",left:"111px"}},"t"),O.createElement("span",{style:{transitionDelay:"600ms",left:"120px"}},"l"),O.createElement("span",{style:{transitionDelay:"675ms",left:"127px"}},"e"),O.createElement("p",{className:" absolute left-[18px]  top-[4px] text-2xl m-2 text-gray-300 transition duration-500 cursor-pointer pointer-events-none"},"Board Title"))),O.createElement("div",null,O.createElement("div",{className:"relative inline-block text-left text-slate-300",ref:u},O.createElement("button",{onClick:d,className:"button2  ${boardVisibility==='Board Visibility",style:m},f),n&&O.createElement("div",{className:"origin-top-right absolute right-[-10%] sm:right-[-15%]  mt-2 z-[1000] w-72 rounded-2xl shadow-lg bg-zinc-800  ring-1 ring-black ring-opacity-5 focus:outline-none"},O.createElement("div",{className:"py-1"},O.createElement("button",{style:{borderColor:f==="Private Board"?"lightblue":""},onClick:()=>{p("Private Board")},className:"block w-full border-2 border-zinc-800 text-left px-4 py-2 text-sm bg-zinc-800 text-gray-300 hover:bg-zinc-700"},O.createElement("span",{className:"text-[1.1rem] text-gray-200"},"Private Board")," - A personal board where all tasks and data are private and only visible to you."),O.createElement("button",{style:{borderColor:f==="Shareable Board"?"lightblue":""},onClick:()=>{p("Shareable Board")},className:"block border-2 border-zinc-800 w-full text-left px-4 py-2 text-sm bg-zinc-800 text-gray-300 hover:bg-zinc-700"},O.createElement("span",{className:"text-[1.1rem] text-gray-200"},"Shareable Board")," - A collaborative board that allows you to share tasks with others for group work.")))))),O.createElement("div",{className:" self-center "},O.createElement("h1",{className:"text-xl mt-4 mb-1 opacity-90 text-gray-300  text-center"},"Background"),O.createElement("div",{className:"color max-h-[20vh] sm:max-h-[17vh] mb-4 rounded-md px-3 overflow-y-auto  bg-neutral-800"},O.createElement("div",{className:"grid grid-cols-3 sm:grid-cols-2  mt-1 md:grid-cols-3 p-1  lg:grid-cols-4 gap-5"},O.createElement("div",{onClick:()=>{s("bg-gradient-to-r from-teal-400 to-blue-500"),C==="Make sure you choose a background and images"&&R("")},className:"cursor-pointer bg-gradient-to-r from-teal-400 to-blue-500 py-6 sm:py-7  rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-gradient-to-r from-blue-800 to-blue-400"),C==="Make sure you choose a background and images"&&R("")},className:"bg-gradient-to-r cursor-pointer from-blue-800 to-blue-400 py-6 sm:py-7rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-gradient-to-r from-purple-500 to-pink-500"),C==="Make sure you choose a background and images"&&R("")},className:"bg-gradient-to-r from-purple-500 to-pink-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-gradient-to-r from-purple-400 to-blue-300"),C==="Make sure you choose a background and images"&&R("")},className:"bg-gradient-to-r from-purple-400 to-blue-300 py-6 sm:py-7 cursor-pointer rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-gradient-to-r from-orange-400 to-yellow-300"),C==="Make sure you choose a background and images"&&R("")},className:"bg-gradient-to-r from-orange-400 to-yellow-300 py-6 sm:py-7 cursor-pointer rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-gradient-to-r from-pink-400 to-pink-200"),C==="Make sure you choose a background and images"&&R("")},className:"bg-gradient-to-r from-pink-400 to-pink-200 py-6 sm:py-7 cursor-pointer rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-gradient-to-r from-teal-400 to-green-500"),C==="Make sure you choose a background and images"&&R("")},className:"bg-gradient-to-r from-teal-400 to-green-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-gradient-to-r from-blue-800 to-blue-400"),C==="Make sure you choose a background and images"&&R("")},className:"bg-gradient-to-r from-blue-800 to-blue-400 py-6 sm:py-7 cursor-pointer rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-gradient-to-r from-red-800 to-brown-500"),C==="Make sure you choose a background and images"&&R("")},className:"bg-gradient-to-r from-red-800 to-brown-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-blue-500"),C==="Make sure you choose a background and images"&&R("")},className:"bg-blue-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-orange-500"),C==="Make sure you choose a background and images"&&R("")},className:"bg-orange-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-green-50"),C==="Make sure you choose a background and images"&&R("")},className:"bg-green-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-red-500"),C==="Make sure you choose a background and images"&&R("")},className:"bg-red-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-purple-500"),C==="Make sure you choose a background and images"&&R("")},className:"bg-purple-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-pink-500"),C==="Make sure you choose a background and images"&&R("")},className:"bg-pink-500 py-6 sm:py-7 cursor-pointer rounded-sm"},"   "),O.createElement("div",{onClick:()=>{s("bg-green-300"),C==="Make sure you choose a background and images"&&R("")},className:"bg-green-300 py-6 sm:py-7 cursor-pointer rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-cyan-500"),C==="Make sure you choose a background and images"&&R("")},className:"bg-cyan-500 py-6 sm:py-7 cursor-pointer rounded-sm"}),O.createElement("div",{onClick:()=>{s("bg-gray-500"),C==="Make sure you choose a background and images"&&R("")},className:"bg-gray-500 py-6 sm:py-7 cursor-pointer rounded-sm"}))),O.createElement("div",{className:"color max-h-[20vh]  sm:max-h-[17vh]  rounded-md sm:px-3 px-2 overflow-y-scroll  bg-neutral-800"},O.createElement("div",{className:"grid grid-cols-3 sm:grid-cols-2  mt-1 md:grid-cols-3 p-1  lg:grid-cols-4 gap-5"},t.map(x=>{const{ref:I,inView:E}=wD({threshold:.1});return O.createElement("div",{ref:I,style:{backgroundImage:E?`url('${x}')`:"none",backgroundSize:"cover",backgroundPosition:"center",color:"rgba(255,255,255,0)"},key:x,onClick:()=>{s(""),a(x),C==="Make sure you choose a background and images"&&R("")},className:"border-gray-100 cursor-pointer text-opacity-0 bg-black p-4 py-3 sm:py-4 px-5 sm:px-6 select-none rounded-sm"},"Board")}))),O.createElement("div",{className:"flex items-center   justify-center"},O.createElement("button",{onClick:N,type:"submit",className:"bg-blue-600 hover:bg-blue-500 text-gray-100  mb-1 py-1.5 px-20 mt-[6%] sm:mt-8 rounded-lg  text-md"},"Create")),O.createElement("div",{className:"text-red-600 text-sm text-center"},C)))}function i1(t){const e=Hr(),[n,r]=D.useState(!1),i=D.useRef();D.useEffect(()=>{const a=new IntersectionObserver(([l])=>{l.isIntersecting&&(r(!0),a.disconnect())},{threshold:.1});return i.current&&a.observe(i.current),()=>{i.current&&a.unobserve(i.current)}},[i]);const s=n&&t.backgroundImage?{backgroundImage:`url('${t.backgroundImage}')`,backgroundSize:"cover",backgroundPosition:"center",color:"rgba(255,255,255,0)"}:{},o=()=>{e(`/Board/${t.id}`,{state:t})};return O.createElement("div",{ref:i,style:s,onClick:o,className:`p-5 h-[70px]  w-[130px] hover:opacity-85 cursor-pointer rounded-sm ${t.background}`},O.createElement("h2",{className:"text-zinc-300 font-bold text-lg truncate  whitespace-nowrap overflow-hidden"},t.title))}function PD(){const[t,e]=D.useState([]);D.useEffect(()=>{const i=pr(ke,s=>{s?(async()=>{const a=Kr(te,`users/${s.uid}/Boards`),c=(await Xr(a)).docs.map(u=>({id:u.id,data:u.data()})).filter(u=>u.data.boardVisibility==="private");e(c)})().catch(a=>console.error("Error fetching lists:",a)):e([])});return()=>i()},[]);const[n,r]=D.useState(!1);return O.createElement("div",null,n&&O.createElement("button",{onClick:()=>{r(!1)},className:"  absolute  text-slate-300  py-1 px-2 left-[90%] sm:left-[70%] sm:top-[-5%] top-[-10%] rounded-xl    text-2xl hover:bg-zinc-900"},"✕"),!n&&O.createElement("div",null,O.createElement("h1",{className:"text-gray-300 mt-2 mb-2  p-1 rounded-md text-xl flex justify-center items-center gap-4"},"Your Boards"),O.createElement("div",{className:"grid grid-cols-2 sm:grid-cols-2 px-0 sm:px-7  md:grid-cols-3 mt-7 mx-4 lg:grid-cols-4 gap-6 overflow-y-auto max-h-[65vh] shadow-sm"},t.map(i=>O.createElement(i1,{key:i.id,id:i.id,title:i.data.title,background:i.data.background,backgroundImage:i.data.backgroundImage,boardVisibility:i.data.boardVisibility})),O.createElement("div",{onClick:()=>{r(!0)},className:" h-[70px] flex justify-center items-center w-[130px] bg-neutral-700 opacity-90 cursor-pointer hover:opacity-70 border-gray-200 p-5  rounded-sm"},O.createElement("h2",{className:"text-zinc-300  text-center text-sm "},"Create new board")))),n&&O.createElement(Zh,null))}function CD(){const[t,e]=D.useState(!1),[n,r]=D.useState([]);D.useEffect(()=>{const o=pr(ke,a=>{a?(async()=>{e(!0);const c=Kr(te,`users/${a.uid}/Boards`),f=(await Xr(c)).docs.map(p=>({id:p.id,data:p.data()})).filter(p=>p.data.boardVisibility==="shareable");r(f)})().catch(c=>console.error("Error fetching lists:",c)):r([])});return()=>o()},[]);const[i,s]=D.useState(!1);return O.createElement("div",null,i&&O.createElement("button",{onClick:()=>{s(!1)},className:"  absolute  text-slate-300  py-1 px-2 left-[90%] sm:left-[70%] sm:top-[-5%] top-[-10%] rounded-xl    text-2xl hover:bg-zinc-900"},"✕"),!i&&O.createElement("div",null,O.createElement("h1",{className:"text-gray-300 mt-2 mb-2  p-1 rounded-md text-xl flex justify-center items-center gap-4"},"Shared Boards"),O.createElement("div",{className:"grid grid-cols-2 sm:grid-cols-2 px-0 sm:px-7  md:grid-cols-3 mt-7 mx-4 lg:grid-cols-4 gap-6 max-h-[62vh] shadow-sm"},n.map(o=>O.createElement(i1,{key:o.id,id:o.id,title:o.data.title,background:o.data.background,backgroundImage:o.data.backgroundImage,boardVisibility:o.data.boardVisibility})),O.createElement("div",{onClick:()=>{s(!0)},className:" h-[70px] flex justify-center items-center w-[130px] bg-neutral-700 opacity-90 cursor-pointer hover:opacity-70 border-gray-200 p-5  rounded-sm"},O.createElement("h2",{className:"text-zinc-300  text-center text-sm "},"Create new board")))),i&&O.createElement(Zh,null))}var s1={exports:{}};/*!
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
 */(function(t,e){(function(r,i){t.exports=i()})(Fl,function(){return function(n){var r={};function i(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return n[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=n,i.c=r,i.d=function(s,o,a){i.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:a})},i.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i.t=function(s,o){if(o&1&&(s=i(s)),o&8||o&4&&typeof s=="object"&&s&&s.__esModule)return s;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:s}),o&2&&typeof s!="string")for(var l in s)i.d(a,l,(function(c){return s[c]}).bind(null,l));return a},i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,"a",o),o},i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},i.p="",i(i.s=20)}([function(n,r){var i={};n.exports=i,function(){i._baseDelta=1e3/60,i._nextId=0,i._seed=0,i._nowStartTime=+new Date,i._warnedOnce={},i._decomp=null,i.extend=function(o,a){var l,c;typeof a=="boolean"?(l=2,c=a):(l=1,c=!0);for(var u=l;u<arguments.length;u++){var f=arguments[u];if(f)for(var p in f)c&&f[p]&&f[p].constructor===Object&&(!o[p]||o[p].constructor===Object)?(o[p]=o[p]||{},i.extend(o[p],c,f[p])):o[p]=f[p]}return o},i.clone=function(o,a){return i.extend({},a,o)},i.keys=function(o){if(Object.keys)return Object.keys(o);var a=[];for(var l in o)a.push(l);return a},i.values=function(o){var a=[];if(Object.keys){for(var l=Object.keys(o),c=0;c<l.length;c++)a.push(o[l[c]]);return a}for(var u in o)a.push(o[u]);return a},i.get=function(o,a,l,c){a=a.split(".").slice(l,c);for(var u=0;u<a.length;u+=1)o=o[a[u]];return o},i.set=function(o,a,l,c,u){var f=a.split(".").slice(c,u);return i.get(o,a,0,-1)[f[f.length-1]]=l,l},i.shuffle=function(o){for(var a=o.length-1;a>0;a--){var l=Math.floor(i.random()*(a+1)),c=o[a];o[a]=o[l],o[l]=c}return o},i.choose=function(o){return o[Math.floor(i.random()*o.length)]},i.isElement=function(o){return typeof HTMLElement<"u"?o instanceof HTMLElement:!!(o&&o.nodeType&&o.nodeName)},i.isArray=function(o){return Object.prototype.toString.call(o)==="[object Array]"},i.isFunction=function(o){return typeof o=="function"},i.isPlainObject=function(o){return typeof o=="object"&&o.constructor===Object},i.isString=function(o){return toString.call(o)==="[object String]"},i.clamp=function(o,a,l){return o<a?a:o>l?l:o},i.sign=function(o){return o<0?-1:1},i.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-i._nowStartTime},i.random=function(o,a){return o=typeof o<"u"?o:0,a=typeof a<"u"?a:1,o+s()*(a-o)};var s=function(){return i._seed=(i._seed*9301+49297)%233280,i._seed/233280};i.colorToNumber=function(o){return o=o.replace("#",""),o.length==3&&(o=o.charAt(0)+o.charAt(0)+o.charAt(1)+o.charAt(1)+o.charAt(2)+o.charAt(2)),parseInt(o,16)},i.logLevel=1,i.log=function(){console&&i.logLevel>0&&i.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},i.info=function(){console&&i.logLevel>0&&i.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},i.warn=function(){console&&i.logLevel>0&&i.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},i.warnOnce=function(){var o=Array.prototype.slice.call(arguments).join(" ");i._warnedOnce[o]||(i.warn(o),i._warnedOnce[o]=!0)},i.deprecated=function(o,a,l){o[a]=i.chain(function(){i.warnOnce("🔅 deprecated 🔅",l)},o[a])},i.nextId=function(){return i._nextId++},i.indexOf=function(o,a){if(o.indexOf)return o.indexOf(a);for(var l=0;l<o.length;l++)if(o[l]===a)return l;return-1},i.map=function(o,a){if(o.map)return o.map(a);for(var l=[],c=0;c<o.length;c+=1)l.push(a(o[c]));return l},i.topologicalSort=function(o){var a=[],l=[],c=[];for(var u in o)!l[u]&&!c[u]&&i._topologicalSort(u,l,c,o,a);return a},i._topologicalSort=function(o,a,l,c,u){var f=c[o]||[];l[o]=!0;for(var p=0;p<f.length;p+=1){var d=f[p];l[d]||a[d]||i._topologicalSort(d,a,l,c,u)}l[o]=!1,a[o]=!0,u.push(o)},i.chain=function(){for(var o=[],a=0;a<arguments.length;a+=1){var l=arguments[a];l._chained?o.push.apply(o,l._chained):o.push(l)}var c=function(){for(var u,f=new Array(arguments.length),p=0,d=arguments.length;p<d;p++)f[p]=arguments[p];for(p=0;p<o.length;p+=1){var g=o[p].apply(u,f);typeof g<"u"&&(u=g)}return u};return c._chained=o,c},i.chainPathBefore=function(o,a,l){return i.set(o,a,i.chain(l,i.get(o,a)))},i.chainPathAfter=function(o,a,l){return i.set(o,a,i.chain(i.get(o,a),l))},i.setDecomp=function(o){i._decomp=o},i.getDecomp=function(){var o=i._decomp;try{!o&&typeof window<"u"&&(o=window.decomp),!o&&typeof Fl<"u"&&(o=Fl.decomp)}catch{o=null}return o}}()},function(n,r){var i={};n.exports=i,function(){i.create=function(s){var o={min:{x:0,y:0},max:{x:0,y:0}};return s&&i.update(o,s),o},i.update=function(s,o,a){s.min.x=1/0,s.max.x=-1/0,s.min.y=1/0,s.max.y=-1/0;for(var l=0;l<o.length;l++){var c=o[l];c.x>s.max.x&&(s.max.x=c.x),c.x<s.min.x&&(s.min.x=c.x),c.y>s.max.y&&(s.max.y=c.y),c.y<s.min.y&&(s.min.y=c.y)}a&&(a.x>0?s.max.x+=a.x:s.min.x+=a.x,a.y>0?s.max.y+=a.y:s.min.y+=a.y)},i.contains=function(s,o){return o.x>=s.min.x&&o.x<=s.max.x&&o.y>=s.min.y&&o.y<=s.max.y},i.overlaps=function(s,o){return s.min.x<=o.max.x&&s.max.x>=o.min.x&&s.max.y>=o.min.y&&s.min.y<=o.max.y},i.translate=function(s,o){s.min.x+=o.x,s.max.x+=o.x,s.min.y+=o.y,s.max.y+=o.y},i.shift=function(s,o){var a=s.max.x-s.min.x,l=s.max.y-s.min.y;s.min.x=o.x,s.max.x=o.x+a,s.min.y=o.y,s.max.y=o.y+l}}()},function(n,r){var i={};n.exports=i,function(){i.create=function(s,o){return{x:s||0,y:o||0}},i.clone=function(s){return{x:s.x,y:s.y}},i.magnitude=function(s){return Math.sqrt(s.x*s.x+s.y*s.y)},i.magnitudeSquared=function(s){return s.x*s.x+s.y*s.y},i.rotate=function(s,o,a){var l=Math.cos(o),c=Math.sin(o);a||(a={});var u=s.x*l-s.y*c;return a.y=s.x*c+s.y*l,a.x=u,a},i.rotateAbout=function(s,o,a,l){var c=Math.cos(o),u=Math.sin(o);l||(l={});var f=a.x+((s.x-a.x)*c-(s.y-a.y)*u);return l.y=a.y+((s.x-a.x)*u+(s.y-a.y)*c),l.x=f,l},i.normalise=function(s){var o=i.magnitude(s);return o===0?{x:0,y:0}:{x:s.x/o,y:s.y/o}},i.dot=function(s,o){return s.x*o.x+s.y*o.y},i.cross=function(s,o){return s.x*o.y-s.y*o.x},i.cross3=function(s,o,a){return(o.x-s.x)*(a.y-s.y)-(o.y-s.y)*(a.x-s.x)},i.add=function(s,o,a){return a||(a={}),a.x=s.x+o.x,a.y=s.y+o.y,a},i.sub=function(s,o,a){return a||(a={}),a.x=s.x-o.x,a.y=s.y-o.y,a},i.mult=function(s,o){return{x:s.x*o,y:s.y*o}},i.div=function(s,o){return{x:s.x/o,y:s.y/o}},i.perp=function(s,o){return o=o===!0?-1:1,{x:o*-s.y,y:o*s.x}},i.neg=function(s){return{x:-s.x,y:-s.y}},i.angle=function(s,o){return Math.atan2(o.y-s.y,o.x-s.x)},i._temp=[i.create(),i.create(),i.create(),i.create(),i.create(),i.create()]}()},function(n,r,i){var s={};n.exports=s;var o=i(2),a=i(0);(function(){s.create=function(l,c){for(var u=[],f=0;f<l.length;f++){var p=l[f],d={x:p.x,y:p.y,index:f,body:c,isInternal:!1};u.push(d)}return u},s.fromPath=function(l,c){var u=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,f=[];return l.replace(u,function(p,d,g){f.push({x:parseFloat(d),y:parseFloat(g)})}),s.create(f,c)},s.centre=function(l){for(var c=s.area(l,!0),u={x:0,y:0},f,p,d,g=0;g<l.length;g++)d=(g+1)%l.length,f=o.cross(l[g],l[d]),p=o.mult(o.add(l[g],l[d]),f),u=o.add(u,p);return o.div(u,6*c)},s.mean=function(l){for(var c={x:0,y:0},u=0;u<l.length;u++)c.x+=l[u].x,c.y+=l[u].y;return o.div(c,l.length)},s.area=function(l,c){for(var u=0,f=l.length-1,p=0;p<l.length;p++)u+=(l[f].x-l[p].x)*(l[f].y+l[p].y),f=p;return c?u/2:Math.abs(u)/2},s.inertia=function(l,c){for(var u=0,f=0,p=l,d,g,m=0;m<p.length;m++)g=(m+1)%p.length,d=Math.abs(o.cross(p[g],p[m])),u+=d*(o.dot(p[g],p[g])+o.dot(p[g],p[m])+o.dot(p[m],p[m])),f+=d;return c/6*(u/f)},s.translate=function(l,c,u){u=typeof u<"u"?u:1;var f=l.length,p=c.x*u,d=c.y*u,g;for(g=0;g<f;g++)l[g].x+=p,l[g].y+=d;return l},s.rotate=function(l,c,u){if(c!==0){var f=Math.cos(c),p=Math.sin(c),d=u.x,g=u.y,m=l.length,v,_,C,R;for(R=0;R<m;R++)v=l[R],_=v.x-d,C=v.y-g,v.x=d+(_*f-C*p),v.y=g+(_*p+C*f);return l}},s.contains=function(l,c){for(var u=c.x,f=c.y,p=l.length,d=l[p-1],g,m=0;m<p;m++){if(g=l[m],(u-d.x)*(g.y-d.y)+(f-d.y)*(d.x-g.x)>0)return!1;d=g}return!0},s.scale=function(l,c,u,f){if(c===1&&u===1)return l;f=f||s.centre(l);for(var p,d,g=0;g<l.length;g++)p=l[g],d=o.sub(p,f),l[g].x=f.x+d.x*c,l[g].y=f.y+d.y*u;return l},s.chamfer=function(l,c,u,f,p){typeof c=="number"?c=[c]:c=c||[8],u=typeof u<"u"?u:-1,f=f||2,p=p||14;for(var d=[],g=0;g<l.length;g++){var m=l[g-1>=0?g-1:l.length-1],v=l[g],_=l[(g+1)%l.length],C=c[g<c.length?g:c.length-1];if(C===0){d.push(v);continue}var R=o.normalise({x:v.y-m.y,y:m.x-v.x}),N=o.normalise({x:_.y-v.y,y:v.x-_.x}),x=Math.sqrt(2*Math.pow(C,2)),I=o.mult(a.clone(R),C),E=o.normalise(o.mult(o.add(R,N),.5)),y=o.sub(v,o.mult(E,x)),w=u;u===-1&&(w=Math.pow(C,.32)*1.75),w=a.clamp(w,f,p),w%2===1&&(w+=1);for(var T=Math.acos(o.dot(R,N)),P=T/w,A=0;A<w;A++)d.push(o.add(o.rotate(I,P*A),y))}return d},s.clockwiseSort=function(l){var c=s.mean(l);return l.sort(function(u,f){return o.angle(c,u)-o.angle(c,f)}),l},s.isConvex=function(l){var c=0,u=l.length,f,p,d,g;if(u<3)return null;for(f=0;f<u;f++)if(p=(f+1)%u,d=(f+2)%u,g=(l[p].x-l[f].x)*(l[d].y-l[p].y),g-=(l[p].y-l[f].y)*(l[d].x-l[p].x),g<0?c|=1:g>0&&(c|=2),c===3)return!1;return c!==0?!0:null},s.hull=function(l){var c=[],u=[],f,p;for(l=l.slice(0),l.sort(function(d,g){var m=d.x-g.x;return m!==0?m:d.y-g.y}),p=0;p<l.length;p+=1){for(f=l[p];u.length>=2&&o.cross3(u[u.length-2],u[u.length-1],f)<=0;)u.pop();u.push(f)}for(p=l.length-1;p>=0;p-=1){for(f=l[p];c.length>=2&&o.cross3(c[c.length-2],c[c.length-1],f)<=0;)c.pop();c.push(f)}return c.pop(),u.pop(),c.concat(u)}})()},function(n,r,i){var s={};n.exports=s;var o=i(3),a=i(2),l=i(7),c=i(0),u=i(1),f=i(11);(function(){s._timeCorrection=!0,s._inertiaScale=4,s._nextCollidingGroupId=1,s._nextNonCollidingGroupId=-1,s._nextCategory=1,s._baseDelta=1e3/60,s.create=function(d){var g={id:c.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:o.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},m=c.extend(g,d);return p(m,d),m},s.nextGroup=function(d){return d?s._nextNonCollidingGroupId--:s._nextCollidingGroupId++},s.nextCategory=function(){return s._nextCategory=s._nextCategory<<1,s._nextCategory};var p=function(d,g){g=g||{},s.set(d,{bounds:d.bounds||u.create(d.vertices),positionPrev:d.positionPrev||a.clone(d.position),anglePrev:d.anglePrev||d.angle,vertices:d.vertices,parts:d.parts||[d],isStatic:d.isStatic,isSleeping:d.isSleeping,parent:d.parent||d}),o.rotate(d.vertices,d.angle,d.position),f.rotate(d.axes,d.angle),u.update(d.bounds,d.vertices,d.velocity),s.set(d,{axes:g.axes||d.axes,area:g.area||d.area,mass:g.mass||d.mass,inertia:g.inertia||d.inertia});var m=d.isStatic?"#14151f":c.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),v=d.isStatic?"#555":"#ccc",_=d.isStatic&&d.render.fillStyle===null?1:0;d.render.fillStyle=d.render.fillStyle||m,d.render.strokeStyle=d.render.strokeStyle||v,d.render.lineWidth=d.render.lineWidth||_,d.render.sprite.xOffset+=-(d.bounds.min.x-d.position.x)/(d.bounds.max.x-d.bounds.min.x),d.render.sprite.yOffset+=-(d.bounds.min.y-d.position.y)/(d.bounds.max.y-d.bounds.min.y)};s.set=function(d,g,m){var v;typeof g=="string"&&(v=g,g={},g[v]=m);for(v in g)if(Object.prototype.hasOwnProperty.call(g,v))switch(m=g[v],v){case"isStatic":s.setStatic(d,m);break;case"isSleeping":l.set(d,m);break;case"mass":s.setMass(d,m);break;case"density":s.setDensity(d,m);break;case"inertia":s.setInertia(d,m);break;case"vertices":s.setVertices(d,m);break;case"position":s.setPosition(d,m);break;case"angle":s.setAngle(d,m);break;case"velocity":s.setVelocity(d,m);break;case"angularVelocity":s.setAngularVelocity(d,m);break;case"speed":s.setSpeed(d,m);break;case"angularSpeed":s.setAngularSpeed(d,m);break;case"parts":s.setParts(d,m);break;case"centre":s.setCentre(d,m);break;default:d[v]=m}},s.setStatic=function(d,g){for(var m=0;m<d.parts.length;m++){var v=d.parts[m];g?(v.isStatic||(v._original={restitution:v.restitution,friction:v.friction,mass:v.mass,inertia:v.inertia,density:v.density,inverseMass:v.inverseMass,inverseInertia:v.inverseInertia}),v.restitution=0,v.friction=1,v.mass=v.inertia=v.density=1/0,v.inverseMass=v.inverseInertia=0,v.positionPrev.x=v.position.x,v.positionPrev.y=v.position.y,v.anglePrev=v.angle,v.angularVelocity=0,v.speed=0,v.angularSpeed=0,v.motion=0):v._original&&(v.restitution=v._original.restitution,v.friction=v._original.friction,v.mass=v._original.mass,v.inertia=v._original.inertia,v.density=v._original.density,v.inverseMass=v._original.inverseMass,v.inverseInertia=v._original.inverseInertia,v._original=null),v.isStatic=g}},s.setMass=function(d,g){var m=d.inertia/(d.mass/6);d.inertia=m*(g/6),d.inverseInertia=1/d.inertia,d.mass=g,d.inverseMass=1/d.mass,d.density=d.mass/d.area},s.setDensity=function(d,g){s.setMass(d,g*d.area),d.density=g},s.setInertia=function(d,g){d.inertia=g,d.inverseInertia=1/d.inertia},s.setVertices=function(d,g){g[0].body===d?d.vertices=g:d.vertices=o.create(g,d),d.axes=f.fromVertices(d.vertices),d.area=o.area(d.vertices),s.setMass(d,d.density*d.area);var m=o.centre(d.vertices);o.translate(d.vertices,m,-1),s.setInertia(d,s._inertiaScale*o.inertia(d.vertices,d.mass)),o.translate(d.vertices,d.position),u.update(d.bounds,d.vertices,d.velocity)},s.setParts=function(d,g,m){var v;for(g=g.slice(0),d.parts.length=0,d.parts.push(d),d.parent=d,v=0;v<g.length;v++){var _=g[v];_!==d&&(_.parent=d,d.parts.push(_))}if(d.parts.length!==1){if(m=typeof m<"u"?m:!0,m){var C=[];for(v=0;v<g.length;v++)C=C.concat(g[v].vertices);o.clockwiseSort(C);var R=o.hull(C),N=o.centre(R);s.setVertices(d,R),o.translate(d.vertices,N)}var x=s._totalProperties(d);d.area=x.area,d.parent=d,d.position.x=x.centre.x,d.position.y=x.centre.y,d.positionPrev.x=x.centre.x,d.positionPrev.y=x.centre.y,s.setMass(d,x.mass),s.setInertia(d,x.inertia),s.setPosition(d,x.centre)}},s.setCentre=function(d,g,m){m?(d.positionPrev.x+=g.x,d.positionPrev.y+=g.y,d.position.x+=g.x,d.position.y+=g.y):(d.positionPrev.x=g.x-(d.position.x-d.positionPrev.x),d.positionPrev.y=g.y-(d.position.y-d.positionPrev.y),d.position.x=g.x,d.position.y=g.y)},s.setPosition=function(d,g,m){var v=a.sub(g,d.position);m?(d.positionPrev.x=d.position.x,d.positionPrev.y=d.position.y,d.velocity.x=v.x,d.velocity.y=v.y,d.speed=a.magnitude(v)):(d.positionPrev.x+=v.x,d.positionPrev.y+=v.y);for(var _=0;_<d.parts.length;_++){var C=d.parts[_];C.position.x+=v.x,C.position.y+=v.y,o.translate(C.vertices,v),u.update(C.bounds,C.vertices,d.velocity)}},s.setAngle=function(d,g,m){var v=g-d.angle;m?(d.anglePrev=d.angle,d.angularVelocity=v,d.angularSpeed=Math.abs(v)):d.anglePrev+=v;for(var _=0;_<d.parts.length;_++){var C=d.parts[_];C.angle+=v,o.rotate(C.vertices,v,d.position),f.rotate(C.axes,v),u.update(C.bounds,C.vertices,d.velocity),_>0&&a.rotateAbout(C.position,v,d.position,C.position)}},s.setVelocity=function(d,g){var m=d.deltaTime/s._baseDelta;d.positionPrev.x=d.position.x-g.x*m,d.positionPrev.y=d.position.y-g.y*m,d.velocity.x=(d.position.x-d.positionPrev.x)/m,d.velocity.y=(d.position.y-d.positionPrev.y)/m,d.speed=a.magnitude(d.velocity)},s.getVelocity=function(d){var g=s._baseDelta/d.deltaTime;return{x:(d.position.x-d.positionPrev.x)*g,y:(d.position.y-d.positionPrev.y)*g}},s.getSpeed=function(d){return a.magnitude(s.getVelocity(d))},s.setSpeed=function(d,g){s.setVelocity(d,a.mult(a.normalise(s.getVelocity(d)),g))},s.setAngularVelocity=function(d,g){var m=d.deltaTime/s._baseDelta;d.anglePrev=d.angle-g*m,d.angularVelocity=(d.angle-d.anglePrev)/m,d.angularSpeed=Math.abs(d.angularVelocity)},s.getAngularVelocity=function(d){return(d.angle-d.anglePrev)*s._baseDelta/d.deltaTime},s.getAngularSpeed=function(d){return Math.abs(s.getAngularVelocity(d))},s.setAngularSpeed=function(d,g){s.setAngularVelocity(d,c.sign(s.getAngularVelocity(d))*g)},s.translate=function(d,g,m){s.setPosition(d,a.add(d.position,g),m)},s.rotate=function(d,g,m,v){if(!m)s.setAngle(d,d.angle+g,v);else{var _=Math.cos(g),C=Math.sin(g),R=d.position.x-m.x,N=d.position.y-m.y;s.setPosition(d,{x:m.x+(R*_-N*C),y:m.y+(R*C+N*_)},v),s.setAngle(d,d.angle+g,v)}},s.scale=function(d,g,m,v){var _=0,C=0;v=v||d.position;for(var R=0;R<d.parts.length;R++){var N=d.parts[R];o.scale(N.vertices,g,m,v),N.axes=f.fromVertices(N.vertices),N.area=o.area(N.vertices),s.setMass(N,d.density*N.area),o.translate(N.vertices,{x:-N.position.x,y:-N.position.y}),s.setInertia(N,s._inertiaScale*o.inertia(N.vertices,N.mass)),o.translate(N.vertices,{x:N.position.x,y:N.position.y}),R>0&&(_+=N.area,C+=N.inertia),N.position.x=v.x+(N.position.x-v.x)*g,N.position.y=v.y+(N.position.y-v.y)*m,u.update(N.bounds,N.vertices,d.velocity)}d.parts.length>1&&(d.area=_,d.isStatic||(s.setMass(d,d.density*_),s.setInertia(d,C))),d.circleRadius&&(g===m?d.circleRadius*=g:d.circleRadius=null)},s.update=function(d,g){g=(typeof g<"u"?g:1e3/60)*d.timeScale;var m=g*g,v=s._timeCorrection?g/(d.deltaTime||g):1,_=1-d.frictionAir*(g/c._baseDelta),C=(d.position.x-d.positionPrev.x)*v,R=(d.position.y-d.positionPrev.y)*v;d.velocity.x=C*_+d.force.x/d.mass*m,d.velocity.y=R*_+d.force.y/d.mass*m,d.positionPrev.x=d.position.x,d.positionPrev.y=d.position.y,d.position.x+=d.velocity.x,d.position.y+=d.velocity.y,d.deltaTime=g,d.angularVelocity=(d.angle-d.anglePrev)*_*v+d.torque/d.inertia*m,d.anglePrev=d.angle,d.angle+=d.angularVelocity;for(var N=0;N<d.parts.length;N++){var x=d.parts[N];o.translate(x.vertices,d.velocity),N>0&&(x.position.x+=d.velocity.x,x.position.y+=d.velocity.y),d.angularVelocity!==0&&(o.rotate(x.vertices,d.angularVelocity,d.position),f.rotate(x.axes,d.angularVelocity),N>0&&a.rotateAbout(x.position,d.angularVelocity,d.position,x.position)),u.update(x.bounds,x.vertices,d.velocity)}},s.updateVelocities=function(d){var g=s._baseDelta/d.deltaTime,m=d.velocity;m.x=(d.position.x-d.positionPrev.x)*g,m.y=(d.position.y-d.positionPrev.y)*g,d.speed=Math.sqrt(m.x*m.x+m.y*m.y),d.angularVelocity=(d.angle-d.anglePrev)*g,d.angularSpeed=Math.abs(d.angularVelocity)},s.applyForce=function(d,g,m){var v={x:g.x-d.position.x,y:g.y-d.position.y};d.force.x+=m.x,d.force.y+=m.y,d.torque+=v.x*m.y-v.y*m.x},s._totalProperties=function(d){for(var g={mass:0,area:0,inertia:0,centre:{x:0,y:0}},m=d.parts.length===1?0:1;m<d.parts.length;m++){var v=d.parts[m],_=v.mass!==1/0?v.mass:1;g.mass+=_,g.area+=v.area,g.inertia+=v.inertia,g.centre=a.add(g.centre,a.mult(v.position,_))}return g.centre=a.div(g.centre,g.mass),g}})()},function(n,r,i){var s={};n.exports=s;var o=i(0);(function(){s.on=function(a,l,c){for(var u=l.split(" "),f,p=0;p<u.length;p++)f=u[p],a.events=a.events||{},a.events[f]=a.events[f]||[],a.events[f].push(c);return c},s.off=function(a,l,c){if(!l){a.events={};return}typeof l=="function"&&(c=l,l=o.keys(a.events).join(" "));for(var u=l.split(" "),f=0;f<u.length;f++){var p=a.events[u[f]],d=[];if(c&&p)for(var g=0;g<p.length;g++)p[g]!==c&&d.push(p[g]);a.events[u[f]]=d}},s.trigger=function(a,l,c){var u,f,p,d,g=a.events;if(g&&o.keys(g).length>0){c||(c={}),u=l.split(" ");for(var m=0;m<u.length;m++)if(f=u[m],p=g[f],p){d=o.clone(c,!1),d.name=f,d.source=a;for(var v=0;v<p.length;v++)p[v].apply(a,[d])}}}})()},function(n,r,i){var s={};n.exports=s;var o=i(5),a=i(0),l=i(1),c=i(4);(function(){s.create=function(u){return a.extend({id:a.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},u)},s.setModified=function(u,f,p,d){if(u.isModified=f,f&&u.cache&&(u.cache.allBodies=null,u.cache.allConstraints=null,u.cache.allComposites=null),p&&u.parent&&s.setModified(u.parent,f,p,d),d)for(var g=0;g<u.composites.length;g++){var m=u.composites[g];s.setModified(m,f,p,d)}},s.add=function(u,f){var p=[].concat(f);o.trigger(u,"beforeAdd",{object:f});for(var d=0;d<p.length;d++){var g=p[d];switch(g.type){case"body":if(g.parent!==g){a.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}s.addBody(u,g);break;case"constraint":s.addConstraint(u,g);break;case"composite":s.addComposite(u,g);break;case"mouseConstraint":s.addConstraint(u,g.constraint);break}}return o.trigger(u,"afterAdd",{object:f}),u},s.remove=function(u,f,p){var d=[].concat(f);o.trigger(u,"beforeRemove",{object:f});for(var g=0;g<d.length;g++){var m=d[g];switch(m.type){case"body":s.removeBody(u,m,p);break;case"constraint":s.removeConstraint(u,m,p);break;case"composite":s.removeComposite(u,m,p);break;case"mouseConstraint":s.removeConstraint(u,m.constraint);break}}return o.trigger(u,"afterRemove",{object:f}),u},s.addComposite=function(u,f){return u.composites.push(f),f.parent=u,s.setModified(u,!0,!0,!1),u},s.removeComposite=function(u,f,p){var d=a.indexOf(u.composites,f);if(d!==-1){var g=s.allBodies(f);s.removeCompositeAt(u,d);for(var m=0;m<g.length;m++)g[m].sleepCounter=0}if(p)for(var m=0;m<u.composites.length;m++)s.removeComposite(u.composites[m],f,!0);return u},s.removeCompositeAt=function(u,f){return u.composites.splice(f,1),s.setModified(u,!0,!0,!1),u},s.addBody=function(u,f){return u.bodies.push(f),s.setModified(u,!0,!0,!1),u},s.removeBody=function(u,f,p){var d=a.indexOf(u.bodies,f);if(d!==-1&&(s.removeBodyAt(u,d),f.sleepCounter=0),p)for(var g=0;g<u.composites.length;g++)s.removeBody(u.composites[g],f,!0);return u},s.removeBodyAt=function(u,f){return u.bodies.splice(f,1),s.setModified(u,!0,!0,!1),u},s.addConstraint=function(u,f){return u.constraints.push(f),s.setModified(u,!0,!0,!1),u},s.removeConstraint=function(u,f,p){var d=a.indexOf(u.constraints,f);if(d!==-1&&s.removeConstraintAt(u,d),p)for(var g=0;g<u.composites.length;g++)s.removeConstraint(u.composites[g],f,!0);return u},s.removeConstraintAt=function(u,f){return u.constraints.splice(f,1),s.setModified(u,!0,!0,!1),u},s.clear=function(u,f,p){if(p)for(var d=0;d<u.composites.length;d++)s.clear(u.composites[d],f,!0);return f?u.bodies=u.bodies.filter(function(g){return g.isStatic}):u.bodies.length=0,u.constraints.length=0,u.composites.length=0,s.setModified(u,!0,!0,!1),u},s.allBodies=function(u){if(u.cache&&u.cache.allBodies)return u.cache.allBodies;for(var f=[].concat(u.bodies),p=0;p<u.composites.length;p++)f=f.concat(s.allBodies(u.composites[p]));return u.cache&&(u.cache.allBodies=f),f},s.allConstraints=function(u){if(u.cache&&u.cache.allConstraints)return u.cache.allConstraints;for(var f=[].concat(u.constraints),p=0;p<u.composites.length;p++)f=f.concat(s.allConstraints(u.composites[p]));return u.cache&&(u.cache.allConstraints=f),f},s.allComposites=function(u){if(u.cache&&u.cache.allComposites)return u.cache.allComposites;for(var f=[].concat(u.composites),p=0;p<u.composites.length;p++)f=f.concat(s.allComposites(u.composites[p]));return u.cache&&(u.cache.allComposites=f),f},s.get=function(u,f,p){var d,g;switch(p){case"body":d=s.allBodies(u);break;case"constraint":d=s.allConstraints(u);break;case"composite":d=s.allComposites(u).concat(u);break}return d?(g=d.filter(function(m){return m.id.toString()===f.toString()}),g.length===0?null:g[0]):null},s.move=function(u,f,p){return s.remove(u,f),s.add(p,f),u},s.rebase=function(u){for(var f=s.allBodies(u).concat(s.allConstraints(u)).concat(s.allComposites(u)),p=0;p<f.length;p++)f[p].id=a.nextId();return u},s.translate=function(u,f,p){for(var d=p?s.allBodies(u):u.bodies,g=0;g<d.length;g++)c.translate(d[g],f);return u},s.rotate=function(u,f,p,d){for(var g=Math.cos(f),m=Math.sin(f),v=d?s.allBodies(u):u.bodies,_=0;_<v.length;_++){var C=v[_],R=C.position.x-p.x,N=C.position.y-p.y;c.setPosition(C,{x:p.x+(R*g-N*m),y:p.y+(R*m+N*g)}),c.rotate(C,f)}return u},s.scale=function(u,f,p,d,g){for(var m=g?s.allBodies(u):u.bodies,v=0;v<m.length;v++){var _=m[v],C=_.position.x-d.x,R=_.position.y-d.y;c.setPosition(_,{x:d.x+C*f,y:d.y+R*p}),c.scale(_,f,p)}return u},s.bounds=function(u){for(var f=s.allBodies(u),p=[],d=0;d<f.length;d+=1){var g=f[d];p.push(g.bounds.min,g.bounds.max)}return l.create(p)}})()},function(n,r,i){var s={};n.exports=s;var o=i(4),a=i(5),l=i(0);(function(){s._motionWakeThreshold=.18,s._motionSleepThreshold=.08,s._minBias=.9,s.update=function(c,u){for(var f=u/l._baseDelta,p=s._motionSleepThreshold,d=0;d<c.length;d++){var g=c[d],m=o.getSpeed(g),v=o.getAngularSpeed(g),_=m*m+v*v;if(g.force.x!==0||g.force.y!==0){s.set(g,!1);continue}var C=Math.min(g.motion,_),R=Math.max(g.motion,_);g.motion=s._minBias*C+(1-s._minBias)*R,g.sleepThreshold>0&&g.motion<p?(g.sleepCounter+=1,g.sleepCounter>=g.sleepThreshold/f&&s.set(g,!0)):g.sleepCounter>0&&(g.sleepCounter-=1)}},s.afterCollisions=function(c){for(var u=s._motionSleepThreshold,f=0;f<c.length;f++){var p=c[f];if(p.isActive){var d=p.collision,g=d.bodyA.parent,m=d.bodyB.parent;if(!(g.isSleeping&&m.isSleeping||g.isStatic||m.isStatic)&&(g.isSleeping||m.isSleeping)){var v=g.isSleeping&&!g.isStatic?g:m,_=v===g?m:g;!v.isStatic&&_.motion>u&&s.set(v,!1)}}}},s.set=function(c,u){var f=c.isSleeping;u?(c.isSleeping=!0,c.sleepCounter=c.sleepThreshold,c.positionImpulse.x=0,c.positionImpulse.y=0,c.positionPrev.x=c.position.x,c.positionPrev.y=c.position.y,c.anglePrev=c.angle,c.speed=0,c.angularSpeed=0,c.motion=0,f||a.trigger(c,"sleepStart")):(c.isSleeping=!1,c.sleepCounter=0,f&&a.trigger(c,"sleepEnd"))}})()},function(n,r,i){var s={};n.exports=s;var o=i(3),a=i(9);(function(){var l=[],c={overlap:0,axis:null},u={overlap:0,axis:null};s.create=function(f,p){return{pair:null,collided:!1,bodyA:f,bodyB:p,parentA:f.parent,parentB:p.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[null,null],supportCount:0}},s.collides=function(f,p,d){if(s._overlapAxes(c,f.vertices,p.vertices,f.axes),c.overlap<=0||(s._overlapAxes(u,p.vertices,f.vertices,p.axes),u.overlap<=0))return null;var g=d&&d.table[a.id(f,p)],m;g?m=g.collision:(m=s.create(f,p),m.collided=!0,m.bodyA=f.id<p.id?f:p,m.bodyB=f.id<p.id?p:f,m.parentA=m.bodyA.parent,m.parentB=m.bodyB.parent),f=m.bodyA,p=m.bodyB;var v;c.overlap<u.overlap?v=c:v=u;var _=m.normal,C=m.tangent,R=m.penetration,N=m.supports,x=v.overlap,I=v.axis,E=I.x,y=I.y,w=p.position.x-f.position.x,T=p.position.y-f.position.y;E*w+y*T>=0&&(E=-E,y=-y),_.x=E,_.y=y,C.x=-y,C.y=E,R.x=E*x,R.y=y*x,m.depth=x;var P=s._findSupports(f,p,_,1),A=0;if(o.contains(f.vertices,P[0])&&(N[A++]=P[0]),o.contains(f.vertices,P[1])&&(N[A++]=P[1]),A<2){var k=s._findSupports(p,f,_,-1);o.contains(p.vertices,k[0])&&(N[A++]=k[0]),A<2&&o.contains(p.vertices,k[1])&&(N[A++]=k[1])}return A===0&&(N[A++]=P[0]),m.supportCount=A,m},s._overlapAxes=function(f,p,d,g){var m=p.length,v=d.length,_=p[0].x,C=p[0].y,R=d[0].x,N=d[0].y,x=g.length,I=Number.MAX_VALUE,E=0,y,w,T,P,A,k;for(A=0;A<x;A++){var B=g[A],$=B.x,X=B.y,U=_*$+C*X,K=R*$+N*X,ee=U,ue=K;for(k=1;k<m;k+=1)P=p[k].x*$+p[k].y*X,P>ee?ee=P:P<U&&(U=P);for(k=1;k<v;k+=1)P=d[k].x*$+d[k].y*X,P>ue?ue=P:P<K&&(K=P);if(w=ee-K,T=ue-U,y=w<T?w:T,y<I&&(I=y,E=A,y<=0))break}f.axis=g[E],f.overlap=I},s._findSupports=function(f,p,d,g){var m=p.vertices,v=m.length,_=f.position.x,C=f.position.y,R=d.x*g,N=d.y*g,x=m[0],I=x,E=R*(_-I.x)+N*(C-I.y),y,w,T;for(T=1;T<v;T+=1)I=m[T],w=R*(_-I.x)+N*(C-I.y),w<E&&(E=w,x=I);return y=m[(v+x.index-1)%v],E=R*(_-y.x)+N*(C-y.y),I=m[(x.index+1)%v],R*(_-I.x)+N*(C-I.y)<E?(l[0]=x,l[1]=I,l):(l[0]=x,l[1]=y,l)}})()},function(n,r,i){var s={};n.exports=s;var o=i(16);(function(){s.create=function(a,l){var c=a.bodyA,u=a.bodyB,f={id:s.id(c,u),bodyA:c,bodyB:u,collision:a,contacts:[o.create(),o.create()],contactCount:0,separation:0,isActive:!0,isSensor:c.isSensor||u.isSensor,timeCreated:l,timeUpdated:l,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return s.update(f,a,l),f},s.update=function(a,l,c){var u=l.supports,f=l.supportCount,p=a.contacts,d=l.parentA,g=l.parentB;a.isActive=!0,a.timeUpdated=c,a.collision=l,a.separation=l.depth,a.inverseMass=d.inverseMass+g.inverseMass,a.friction=d.friction<g.friction?d.friction:g.friction,a.frictionStatic=d.frictionStatic>g.frictionStatic?d.frictionStatic:g.frictionStatic,a.restitution=d.restitution>g.restitution?d.restitution:g.restitution,a.slop=d.slop>g.slop?d.slop:g.slop,a.contactCount=f,l.pair=a;var m=u[0],v=p[0],_=u[1],C=p[1];(C.vertex===m||v.vertex===_)&&(p[1]=v,p[0]=v=C,C=p[1]),v.vertex=m,C.vertex=_},s.setActive=function(a,l,c){l?(a.isActive=!0,a.timeUpdated=c):(a.isActive=!1,a.contactCount=0)},s.id=function(a,l){return a.id<l.id?a.id.toString(36)+":"+l.id.toString(36):l.id.toString(36)+":"+a.id.toString(36)}})()},function(n,r,i){var s={};n.exports=s;var o=i(3),a=i(2),l=i(7),c=i(1),u=i(11),f=i(0);(function(){s._warming=.4,s._torqueDampen=1,s._minLength=1e-6,s.create=function(p){var d=p;d.bodyA&&!d.pointA&&(d.pointA={x:0,y:0}),d.bodyB&&!d.pointB&&(d.pointB={x:0,y:0});var g=d.bodyA?a.add(d.bodyA.position,d.pointA):d.pointA,m=d.bodyB?a.add(d.bodyB.position,d.pointB):d.pointB,v=a.magnitude(a.sub(g,m));d.length=typeof d.length<"u"?d.length:v,d.id=d.id||f.nextId(),d.label=d.label||"Constraint",d.type="constraint",d.stiffness=d.stiffness||(d.length>0?1:.7),d.damping=d.damping||0,d.angularStiffness=d.angularStiffness||0,d.angleA=d.bodyA?d.bodyA.angle:d.angleA,d.angleB=d.bodyB?d.bodyB.angle:d.angleB,d.plugin={};var _={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return d.length===0&&d.stiffness>.1?(_.type="pin",_.anchors=!1):d.stiffness<.9&&(_.type="spring"),d.render=f.extend(_,d.render),d},s.preSolveAll=function(p){for(var d=0;d<p.length;d+=1){var g=p[d],m=g.constraintImpulse;g.isStatic||m.x===0&&m.y===0&&m.angle===0||(g.position.x+=m.x,g.position.y+=m.y,g.angle+=m.angle)}},s.solveAll=function(p,d){for(var g=f.clamp(d/f._baseDelta,0,1),m=0;m<p.length;m+=1){var v=p[m],_=!v.bodyA||v.bodyA&&v.bodyA.isStatic,C=!v.bodyB||v.bodyB&&v.bodyB.isStatic;(_||C)&&s.solve(p[m],g)}for(m=0;m<p.length;m+=1)v=p[m],_=!v.bodyA||v.bodyA&&v.bodyA.isStatic,C=!v.bodyB||v.bodyB&&v.bodyB.isStatic,!_&&!C&&s.solve(p[m],g)},s.solve=function(p,d){var g=p.bodyA,m=p.bodyB,v=p.pointA,_=p.pointB;if(!(!g&&!m)){g&&!g.isStatic&&(a.rotate(v,g.angle-p.angleA,v),p.angleA=g.angle),m&&!m.isStatic&&(a.rotate(_,m.angle-p.angleB,_),p.angleB=m.angle);var C=v,R=_;if(g&&(C=a.add(g.position,v)),m&&(R=a.add(m.position,_)),!(!C||!R)){var N=a.sub(C,R),x=a.magnitude(N);x<s._minLength&&(x=s._minLength);var I=(x-p.length)/x,E=p.stiffness>=1||p.length===0,y=E?p.stiffness*d:p.stiffness*d*d,w=p.damping*d,T=a.mult(N,I*y),P=(g?g.inverseMass:0)+(m?m.inverseMass:0),A=(g?g.inverseInertia:0)+(m?m.inverseInertia:0),k=P+A,B,$,X,U,K;if(w>0){var ee=a.create();X=a.div(N,x),K=a.sub(m&&a.sub(m.position,m.positionPrev)||ee,g&&a.sub(g.position,g.positionPrev)||ee),U=a.dot(X,K)}g&&!g.isStatic&&($=g.inverseMass/P,g.constraintImpulse.x-=T.x*$,g.constraintImpulse.y-=T.y*$,g.position.x-=T.x*$,g.position.y-=T.y*$,w>0&&(g.positionPrev.x-=w*X.x*U*$,g.positionPrev.y-=w*X.y*U*$),B=a.cross(v,T)/k*s._torqueDampen*g.inverseInertia*(1-p.angularStiffness),g.constraintImpulse.angle-=B,g.angle-=B),m&&!m.isStatic&&($=m.inverseMass/P,m.constraintImpulse.x+=T.x*$,m.constraintImpulse.y+=T.y*$,m.position.x+=T.x*$,m.position.y+=T.y*$,w>0&&(m.positionPrev.x+=w*X.x*U*$,m.positionPrev.y+=w*X.y*U*$),B=a.cross(_,T)/k*s._torqueDampen*m.inverseInertia*(1-p.angularStiffness),m.constraintImpulse.angle+=B,m.angle+=B)}}},s.postSolveAll=function(p){for(var d=0;d<p.length;d++){var g=p[d],m=g.constraintImpulse;if(!(g.isStatic||m.x===0&&m.y===0&&m.angle===0)){l.set(g,!1);for(var v=0;v<g.parts.length;v++){var _=g.parts[v];o.translate(_.vertices,m),v>0&&(_.position.x+=m.x,_.position.y+=m.y),m.angle!==0&&(o.rotate(_.vertices,m.angle,g.position),u.rotate(_.axes,m.angle),v>0&&a.rotateAbout(_.position,m.angle,g.position,_.position)),c.update(_.bounds,_.vertices,g.velocity)}m.angle*=s._warming,m.x*=s._warming,m.y*=s._warming}}},s.pointAWorld=function(p){return{x:(p.bodyA?p.bodyA.position.x:0)+(p.pointA?p.pointA.x:0),y:(p.bodyA?p.bodyA.position.y:0)+(p.pointA?p.pointA.y:0)}},s.pointBWorld=function(p){return{x:(p.bodyB?p.bodyB.position.x:0)+(p.pointB?p.pointB.x:0),y:(p.bodyB?p.bodyB.position.y:0)+(p.pointB?p.pointB.y:0)}},s.currentLength=function(p){var d=(p.bodyA?p.bodyA.position.x:0)+(p.pointA?p.pointA.x:0),g=(p.bodyA?p.bodyA.position.y:0)+(p.pointA?p.pointA.y:0),m=(p.bodyB?p.bodyB.position.x:0)+(p.pointB?p.pointB.x:0),v=(p.bodyB?p.bodyB.position.y:0)+(p.pointB?p.pointB.y:0),_=d-m,C=g-v;return Math.sqrt(_*_+C*C)}})()},function(n,r,i){var s={};n.exports=s;var o=i(2),a=i(0);(function(){s.fromVertices=function(l){for(var c={},u=0;u<l.length;u++){var f=(u+1)%l.length,p=o.normalise({x:l[f].y-l[u].y,y:l[u].x-l[f].x}),d=p.y===0?1/0:p.x/p.y;d=d.toFixed(3).toString(),c[d]=p}return a.values(c)},s.rotate=function(l,c){if(c!==0)for(var u=Math.cos(c),f=Math.sin(c),p=0;p<l.length;p++){var d=l[p],g;g=d.x*u-d.y*f,d.y=d.x*f+d.y*u,d.x=g}}})()},function(n,r,i){var s={};n.exports=s;var o=i(3),a=i(0),l=i(4),c=i(1),u=i(2);(function(){s.rectangle=function(f,p,d,g,m){m=m||{};var v={label:"Rectangle Body",position:{x:f,y:p},vertices:o.fromPath("L 0 0 L "+d+" 0 L "+d+" "+g+" L 0 "+g)};if(m.chamfer){var _=m.chamfer;v.vertices=o.chamfer(v.vertices,_.radius,_.quality,_.qualityMin,_.qualityMax),delete m.chamfer}return l.create(a.extend({},v,m))},s.trapezoid=function(f,p,d,g,m,v){v=v||{},m>=1&&a.warn("Bodies.trapezoid: slope parameter must be < 1."),m*=.5;var _=(1-m*2)*d,C=d*m,R=C+_,N=R+C,x;m<.5?x="L 0 0 L "+C+" "+-g+" L "+R+" "+-g+" L "+N+" 0":x="L 0 0 L "+R+" "+-g+" L "+N+" 0";var I={label:"Trapezoid Body",position:{x:f,y:p},vertices:o.fromPath(x)};if(v.chamfer){var E=v.chamfer;I.vertices=o.chamfer(I.vertices,E.radius,E.quality,E.qualityMin,E.qualityMax),delete v.chamfer}return l.create(a.extend({},I,v))},s.circle=function(f,p,d,g,m){g=g||{};var v={label:"Circle Body",circleRadius:d};m=m||25;var _=Math.ceil(Math.max(10,Math.min(m,d)));return _%2===1&&(_+=1),s.polygon(f,p,_,d,a.extend({},v,g))},s.polygon=function(f,p,d,g,m){if(m=m||{},d<3)return s.circle(f,p,g,m);for(var v=2*Math.PI/d,_="",C=v*.5,R=0;R<d;R+=1){var N=C+R*v,x=Math.cos(N)*g,I=Math.sin(N)*g;_+="L "+x.toFixed(3)+" "+I.toFixed(3)+" "}var E={label:"Polygon Body",position:{x:f,y:p},vertices:o.fromPath(_)};if(m.chamfer){var y=m.chamfer;E.vertices=o.chamfer(E.vertices,y.radius,y.quality,y.qualityMin,y.qualityMax),delete m.chamfer}return l.create(a.extend({},E,m))},s.fromVertices=function(f,p,d,g,m,v,_,C){var R=a.getDecomp(),N,x,I,E,y,w,T,P,A,k,B;for(N=!!(R&&R.quickDecomp),g=g||{},I=[],m=typeof m<"u"?m:!1,v=typeof v<"u"?v:.01,_=typeof _<"u"?_:10,C=typeof C<"u"?C:.01,a.isArray(d[0])||(d=[d]),k=0;k<d.length;k+=1)if(w=d[k],E=o.isConvex(w),y=!E,y&&!N&&a.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),E||!N)E?w=o.clockwiseSort(w):w=o.hull(w),I.push({position:{x:f,y:p},vertices:w});else{var $=w.map(function(ie){return[ie.x,ie.y]});R.makeCCW($),v!==!1&&R.removeCollinearPoints($,v),C!==!1&&R.removeDuplicatePoints&&R.removeDuplicatePoints($,C);var X=R.quickDecomp($);for(T=0;T<X.length;T++){var U=X[T],K=U.map(function(ie){return{x:ie[0],y:ie[1]}});_>0&&o.area(K)<_||I.push({position:o.centre(K),vertices:K})}}for(T=0;T<I.length;T++)I[T]=l.create(a.extend(I[T],g));if(m){var ee=5;for(T=0;T<I.length;T++){var ue=I[T];for(P=T+1;P<I.length;P++){var Ee=I[P];if(c.overlaps(ue.bounds,Ee.bounds)){var ge=ue.vertices,ae=Ee.vertices;for(A=0;A<ue.vertices.length;A++)for(B=0;B<Ee.vertices.length;B++){var $e=u.magnitudeSquared(u.sub(ge[(A+1)%ge.length],ae[B])),Me=u.magnitudeSquared(u.sub(ge[A],ae[(B+1)%ae.length]));$e<ee&&Me<ee&&(ge[A].isInternal=!0,ae[B].isInternal=!0)}}}}}return I.length>1?(x=l.create(a.extend({parts:I.slice(0)},g)),l.setPosition(x,{x:f,y:p}),x):I[0]}})()},function(n,r,i){var s={};n.exports=s;var o=i(0),a=i(8);(function(){s.create=function(l){var c={bodies:[],collisions:[],pairs:null};return o.extend(c,l)},s.setBodies=function(l,c){l.bodies=c.slice(0)},s.clear=function(l){l.bodies=[],l.collisions=[]},s.collisions=function(l){var c=l.pairs,u=l.bodies,f=u.length,p=s.canCollide,d=a.collides,g=l.collisions,m=0,v,_;for(u.sort(s._compareBoundsX),v=0;v<f;v++){var C=u[v],R=C.bounds,N=C.bounds.max.x,x=C.bounds.max.y,I=C.bounds.min.y,E=C.isStatic||C.isSleeping,y=C.parts.length,w=y===1;for(_=v+1;_<f;_++){var T=u[_],P=T.bounds;if(P.min.x>N)break;if(!(x<P.min.y||I>P.max.y)&&!(E&&(T.isStatic||T.isSleeping))&&p(C.collisionFilter,T.collisionFilter)){var A=T.parts.length;if(w&&A===1){var k=d(C,T,c);k&&(g[m++]=k)}else for(var B=y>1?1:0,$=A>1?1:0,X=B;X<y;X++)for(var U=C.parts[X],R=U.bounds,K=$;K<A;K++){var ee=T.parts[K],P=ee.bounds;if(!(R.min.x>P.max.x||R.max.x<P.min.x||R.max.y<P.min.y||R.min.y>P.max.y)){var k=d(U,ee,c);k&&(g[m++]=k)}}}}}return g.length!==m&&(g.length=m),g},s.canCollide=function(l,c){return l.group===c.group&&l.group!==0?l.group>0:(l.mask&c.category)!==0&&(c.mask&l.category)!==0},s._compareBoundsX=function(l,c){return l.bounds.min.x-c.bounds.min.x}})()},function(n,r,i){var s={};n.exports=s;var o=i(0);(function(){s.create=function(a){var l={};return a||o.log("Mouse.create: element was undefined, defaulting to document.body","warn"),l.element=a||document.body,l.absolute={x:0,y:0},l.position={x:0,y:0},l.mousedownPosition={x:0,y:0},l.mouseupPosition={x:0,y:0},l.offset={x:0,y:0},l.scale={x:1,y:1},l.wheelDelta=0,l.button=-1,l.pixelRatio=parseInt(l.element.getAttribute("data-pixel-ratio"),10)||1,l.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},l.mousemove=function(c){var u=s._getRelativeMousePosition(c,l.element,l.pixelRatio),f=c.changedTouches;f&&(l.button=0,c.preventDefault()),l.absolute.x=u.x,l.absolute.y=u.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.sourceEvents.mousemove=c},l.mousedown=function(c){var u=s._getRelativeMousePosition(c,l.element,l.pixelRatio),f=c.changedTouches;f?(l.button=0,c.preventDefault()):l.button=c.button,l.absolute.x=u.x,l.absolute.y=u.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mousedownPosition.x=l.position.x,l.mousedownPosition.y=l.position.y,l.sourceEvents.mousedown=c},l.mouseup=function(c){var u=s._getRelativeMousePosition(c,l.element,l.pixelRatio),f=c.changedTouches;f&&c.preventDefault(),l.button=-1,l.absolute.x=u.x,l.absolute.y=u.y,l.position.x=l.absolute.x*l.scale.x+l.offset.x,l.position.y=l.absolute.y*l.scale.y+l.offset.y,l.mouseupPosition.x=l.position.x,l.mouseupPosition.y=l.position.y,l.sourceEvents.mouseup=c},l.mousewheel=function(c){l.wheelDelta=Math.max(-1,Math.min(1,c.wheelDelta||-c.detail)),c.preventDefault(),l.sourceEvents.mousewheel=c},s.setElement(l,l.element),l},s.setElement=function(a,l){a.element=l,l.addEventListener("mousemove",a.mousemove,{passive:!0}),l.addEventListener("mousedown",a.mousedown,{passive:!0}),l.addEventListener("mouseup",a.mouseup,{passive:!0}),l.addEventListener("wheel",a.mousewheel,{passive:!1}),l.addEventListener("touchmove",a.mousemove,{passive:!1}),l.addEventListener("touchstart",a.mousedown,{passive:!1}),l.addEventListener("touchend",a.mouseup,{passive:!1})},s.clearSourceEvents=function(a){a.sourceEvents.mousemove=null,a.sourceEvents.mousedown=null,a.sourceEvents.mouseup=null,a.sourceEvents.mousewheel=null,a.wheelDelta=0},s.setOffset=function(a,l){a.offset.x=l.x,a.offset.y=l.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},s.setScale=function(a,l){a.scale.x=l.x,a.scale.y=l.y,a.position.x=a.absolute.x*a.scale.x+a.offset.x,a.position.y=a.absolute.y*a.scale.y+a.offset.y},s._getRelativeMousePosition=function(a,l,c){var u=l.getBoundingClientRect(),f=document.documentElement||document.body.parentNode||document.body,p=window.pageXOffset!==void 0?window.pageXOffset:f.scrollLeft,d=window.pageYOffset!==void 0?window.pageYOffset:f.scrollTop,g=a.changedTouches,m,v;return g?(m=g[0].pageX-u.left-p,v=g[0].pageY-u.top-d):(m=a.pageX-u.left-p,v=a.pageY-u.top-d),{x:m/(l.clientWidth/(l.width||l.clientWidth)*c),y:v/(l.clientHeight/(l.height||l.clientHeight)*c)}}})()},function(n,r,i){var s={};n.exports=s;var o=i(0);(function(){s._registry={},s.register=function(a){if(s.isPlugin(a)||o.warn("Plugin.register:",s.toString(a),"does not implement all required fields."),a.name in s._registry){var l=s._registry[a.name],c=s.versionParse(a.version).number,u=s.versionParse(l.version).number;c>u?(o.warn("Plugin.register:",s.toString(l),"was upgraded to",s.toString(a)),s._registry[a.name]=a):c<u?o.warn("Plugin.register:",s.toString(l),"can not be downgraded to",s.toString(a)):a!==l&&o.warn("Plugin.register:",s.toString(a),"is already registered to different plugin object")}else s._registry[a.name]=a;return a},s.resolve=function(a){return s._registry[s.dependencyParse(a).name]},s.toString=function(a){return typeof a=="string"?a:(a.name||"anonymous")+"@"+(a.version||a.range||"0.0.0")},s.isPlugin=function(a){return a&&a.name&&a.version&&a.install},s.isUsed=function(a,l){return a.used.indexOf(l)>-1},s.isFor=function(a,l){var c=a.for&&s.dependencyParse(a.for);return!a.for||l.name===c.name&&s.versionSatisfies(l.version,c.range)},s.use=function(a,l){if(a.uses=(a.uses||[]).concat(l||[]),a.uses.length===0){o.warn("Plugin.use:",s.toString(a),"does not specify any dependencies to install.");return}for(var c=s.dependencies(a),u=o.topologicalSort(c),f=[],p=0;p<u.length;p+=1)if(u[p]!==a.name){var d=s.resolve(u[p]);if(!d){f.push("❌ "+u[p]);continue}s.isUsed(a,d.name)||(s.isFor(d,a)||(o.warn("Plugin.use:",s.toString(d),"is for",d.for,"but installed on",s.toString(a)+"."),d._warned=!0),d.install?d.install(a):(o.warn("Plugin.use:",s.toString(d),"does not specify an install function."),d._warned=!0),d._warned?(f.push("🔶 "+s.toString(d)),delete d._warned):f.push("✅ "+s.toString(d)),a.used.push(d.name))}f.length>0&&o.info(f.join("  "))},s.dependencies=function(a,l){var c=s.dependencyParse(a),u=c.name;if(l=l||{},!(u in l)){a=s.resolve(a)||a,l[u]=o.map(a.uses||[],function(p){s.isPlugin(p)&&s.register(p);var d=s.dependencyParse(p),g=s.resolve(p);return g&&!s.versionSatisfies(g.version,d.range)?(o.warn("Plugin.dependencies:",s.toString(g),"does not satisfy",s.toString(d),"used by",s.toString(c)+"."),g._warned=!0,a._warned=!0):g||(o.warn("Plugin.dependencies:",s.toString(p),"used by",s.toString(c),"could not be resolved."),a._warned=!0),d.name});for(var f=0;f<l[u].length;f+=1)s.dependencies(l[u][f],l);return l}},s.dependencyParse=function(a){if(o.isString(a)){var l=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return l.test(a)||o.warn("Plugin.dependencyParse:",a,"is not a valid dependency string."),{name:a.split("@")[0],range:a.split("@")[1]||"*"}}return{name:a.name,range:a.range||a.version}},s.versionParse=function(a){var l=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;l.test(a)||o.warn("Plugin.versionParse:",a,"is not a valid version or range.");var c=l.exec(a),u=Number(c[4]),f=Number(c[5]),p=Number(c[6]);return{isRange:!!(c[1]||c[2]),version:c[3],range:a,operator:c[1]||c[2]||"",major:u,minor:f,patch:p,parts:[u,f,p],prerelease:c[7],number:u*1e8+f*1e4+p}},s.versionSatisfies=function(a,l){l=l||"*";var c=s.versionParse(l),u=s.versionParse(a);if(c.isRange){if(c.operator==="*"||a==="*")return!0;if(c.operator===">")return u.number>c.number;if(c.operator===">=")return u.number>=c.number;if(c.operator==="~")return u.major===c.major&&u.minor===c.minor&&u.patch>=c.patch;if(c.operator==="^")return c.major>0?u.major===c.major&&u.number>=c.number:c.minor>0?u.minor===c.minor&&u.patch>=c.patch:u.patch===c.patch}return a===l||a==="*"}})()},function(n,r){var i={};n.exports=i,function(){i.create=function(s){return{vertex:s,normalImpulse:0,tangentImpulse:0}}}()},function(n,r,i){var s={};n.exports=s;var o=i(7),a=i(18),l=i(13),c=i(19),u=i(5),f=i(6),p=i(10),d=i(0),g=i(4);(function(){s._deltaMax=1e3/60,s.create=function(m){m=m||{};var v={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0,lastUpdatesPerFrame:0}},_=d.extend(v,m);return _.world=m.world||f.create({label:"World"}),_.pairs=m.pairs||c.create(),_.detector=m.detector||l.create(),_.detector.pairs=_.pairs,_.grid={buckets:[]},_.world.gravity=_.gravity,_.broadphase=_.grid,_.metrics={},_},s.update=function(m,v){var _=d.now(),C=m.world,R=m.detector,N=m.pairs,x=m.timing,I=x.timestamp,E;v>s._deltaMax&&d.warnOnce("Matter.Engine.update: delta argument is recommended to be less than or equal to",s._deltaMax.toFixed(3),"ms."),v=typeof v<"u"?v:d._baseDelta,v*=x.timeScale,x.timestamp+=v,x.lastDelta=v;var y={timestamp:x.timestamp,delta:v};u.trigger(m,"beforeUpdate",y);var w=f.allBodies(C),T=f.allConstraints(C);for(C.isModified&&(l.setBodies(R,w),f.setModified(C,!1,!1,!0)),m.enableSleeping&&o.update(w,v),s._bodiesApplyGravity(w,m.gravity),v>0&&s._bodiesUpdate(w,v),u.trigger(m,"beforeSolve",y),p.preSolveAll(w),E=0;E<m.constraintIterations;E++)p.solveAll(T,v);p.postSolveAll(w);var P=l.collisions(R);c.update(N,P,I),m.enableSleeping&&o.afterCollisions(N.list),N.collisionStart.length>0&&u.trigger(m,"collisionStart",{pairs:N.collisionStart,timestamp:x.timestamp,delta:v});var A=d.clamp(20/m.positionIterations,0,1);for(a.preSolvePosition(N.list),E=0;E<m.positionIterations;E++)a.solvePosition(N.list,v,A);for(a.postSolvePosition(w),p.preSolveAll(w),E=0;E<m.constraintIterations;E++)p.solveAll(T,v);for(p.postSolveAll(w),a.preSolveVelocity(N.list),E=0;E<m.velocityIterations;E++)a.solveVelocity(N.list,v);return s._bodiesUpdateVelocities(w),N.collisionActive.length>0&&u.trigger(m,"collisionActive",{pairs:N.collisionActive,timestamp:x.timestamp,delta:v}),N.collisionEnd.length>0&&u.trigger(m,"collisionEnd",{pairs:N.collisionEnd,timestamp:x.timestamp,delta:v}),s._bodiesClearForces(w),u.trigger(m,"afterUpdate",y),m.timing.lastElapsed=d.now()-_,m},s.merge=function(m,v){if(d.extend(m,v),v.world){m.world=v.world,s.clear(m);for(var _=f.allBodies(m.world),C=0;C<_.length;C++){var R=_[C];o.set(R,!1),R.id=d.nextId()}}},s.clear=function(m){c.clear(m.pairs),l.clear(m.detector)},s._bodiesClearForces=function(m){for(var v=m.length,_=0;_<v;_++){var C=m[_];C.force.x=0,C.force.y=0,C.torque=0}},s._bodiesApplyGravity=function(m,v){var _=typeof v.scale<"u"?v.scale:.001,C=m.length;if(!(v.x===0&&v.y===0||_===0))for(var R=0;R<C;R++){var N=m[R];N.isStatic||N.isSleeping||(N.force.y+=N.mass*v.y*_,N.force.x+=N.mass*v.x*_)}},s._bodiesUpdate=function(m,v){for(var _=m.length,C=0;C<_;C++){var R=m[C];R.isStatic||R.isSleeping||g.update(R,v)}},s._bodiesUpdateVelocities=function(m){for(var v=m.length,_=0;_<v;_++)g.updateVelocities(m[_])}})()},function(n,r,i){var s={};n.exports=s;var o=i(3),a=i(0),l=i(1);(function(){s._restingThresh=2,s._restingThreshTangent=Math.sqrt(6),s._positionDampen=.9,s._positionWarming=.8,s._frictionNormalMultiplier=5,s._frictionMaxStatic=Number.MAX_VALUE,s.preSolvePosition=function(c){var u,f,p,d=c.length;for(u=0;u<d;u++)f=c[u],f.isActive&&(p=f.contactCount,f.collision.parentA.totalContacts+=p,f.collision.parentB.totalContacts+=p)},s.solvePosition=function(c,u,f){var p,d,g,m,v,_,C,R,N=s._positionDampen*(f||1),x=a.clamp(u/a._baseDelta,0,1),I=c.length;for(p=0;p<I;p++)d=c[p],!(!d.isActive||d.isSensor)&&(g=d.collision,m=g.parentA,v=g.parentB,_=g.normal,d.separation=g.depth+_.x*(v.positionImpulse.x-m.positionImpulse.x)+_.y*(v.positionImpulse.y-m.positionImpulse.y));for(p=0;p<I;p++)d=c[p],!(!d.isActive||d.isSensor)&&(g=d.collision,m=g.parentA,v=g.parentB,_=g.normal,R=d.separation-d.slop*x,(m.isStatic||v.isStatic)&&(R*=2),m.isStatic||m.isSleeping||(C=N/m.totalContacts,m.positionImpulse.x+=_.x*R*C,m.positionImpulse.y+=_.y*R*C),v.isStatic||v.isSleeping||(C=N/v.totalContacts,v.positionImpulse.x-=_.x*R*C,v.positionImpulse.y-=_.y*R*C))},s.postSolvePosition=function(c){for(var u=s._positionWarming,f=c.length,p=o.translate,d=l.update,g=0;g<f;g++){var m=c[g],v=m.positionImpulse,_=v.x,C=v.y,R=m.velocity;if(m.totalContacts=0,_!==0||C!==0){for(var N=0;N<m.parts.length;N++){var x=m.parts[N];p(x.vertices,v),d(x.bounds,x.vertices,R),x.position.x+=_,x.position.y+=C}m.positionPrev.x+=_,m.positionPrev.y+=C,_*R.x+C*R.y<0?(v.x=0,v.y=0):(v.x*=u,v.y*=u)}}},s.preSolveVelocity=function(c){var u=c.length,f,p;for(f=0;f<u;f++){var d=c[f];if(!(!d.isActive||d.isSensor)){var g=d.contacts,m=d.contactCount,v=d.collision,_=v.parentA,C=v.parentB,R=v.normal,N=v.tangent;for(p=0;p<m;p++){var x=g[p],I=x.vertex,E=x.normalImpulse,y=x.tangentImpulse;if(E!==0||y!==0){var w=R.x*E+N.x*y,T=R.y*E+N.y*y;_.isStatic||_.isSleeping||(_.positionPrev.x+=w*_.inverseMass,_.positionPrev.y+=T*_.inverseMass,_.anglePrev+=_.inverseInertia*((I.x-_.position.x)*T-(I.y-_.position.y)*w)),C.isStatic||C.isSleeping||(C.positionPrev.x-=w*C.inverseMass,C.positionPrev.y-=T*C.inverseMass,C.anglePrev-=C.inverseInertia*((I.x-C.position.x)*T-(I.y-C.position.y)*w))}}}}},s.solveVelocity=function(c,u){var f=u/a._baseDelta,p=f*f,d=p*f,g=-s._restingThresh*f,m=s._restingThreshTangent,v=s._frictionNormalMultiplier*f,_=s._frictionMaxStatic,C=c.length,R,N,x,I;for(x=0;x<C;x++){var E=c[x];if(!(!E.isActive||E.isSensor)){var y=E.collision,w=y.parentA,T=y.parentB,P=y.normal.x,A=y.normal.y,k=y.tangent.x,B=y.tangent.y,$=E.inverseMass,X=E.friction*E.frictionStatic*v,U=E.contacts,K=E.contactCount,ee=1/K,ue=w.position.x-w.positionPrev.x,Ee=w.position.y-w.positionPrev.y,ge=w.angle-w.anglePrev,ae=T.position.x-T.positionPrev.x,$e=T.position.y-T.positionPrev.y,Me=T.angle-T.anglePrev;for(I=0;I<K;I++){var ie=U[I],Ve=ie.vertex,be=Ve.x-w.position.x,ze=Ve.y-w.position.y,oe=Ve.x-T.position.x,Fe=Ve.y-T.position.y,Ce=ue-ze*ge,dt=Ee+be*ge,Ke=ae-Fe*Me,ft=$e+oe*Me,Ze=Ce-Ke,Vt=dt-ft,Y=P*Ze+A*Vt,J=k*Ze+B*Vt,he=E.separation+Y,xe=Math.min(he,1);xe=he<0?0:xe;var Re=xe*X;J<-Re||J>Re?(N=J>0?J:-J,R=E.friction*(J>0?1:-1)*d,R<-N?R=-N:R>N&&(R=N)):(R=J,N=_);var Te=be*A-ze*P,_e=oe*A-Fe*P,H=ee/($+w.inverseInertia*Te*Te+T.inverseInertia*_e*_e),W=(1+E.restitution)*Y*H;if(R*=H,Y<g)ie.normalImpulse=0;else{var Q=ie.normalImpulse;ie.normalImpulse+=W,ie.normalImpulse>0&&(ie.normalImpulse=0),W=ie.normalImpulse-Q}if(J<-m||J>m)ie.tangentImpulse=0;else{var se=ie.tangentImpulse;ie.tangentImpulse+=R,ie.tangentImpulse<-N&&(ie.tangentImpulse=-N),ie.tangentImpulse>N&&(ie.tangentImpulse=N),R=ie.tangentImpulse-se}var F=P*W+k*R,q=A*W+B*R;w.isStatic||w.isSleeping||(w.positionPrev.x+=F*w.inverseMass,w.positionPrev.y+=q*w.inverseMass,w.anglePrev+=(be*q-ze*F)*w.inverseInertia),T.isStatic||T.isSleeping||(T.positionPrev.x-=F*T.inverseMass,T.positionPrev.y-=q*T.inverseMass,T.anglePrev-=(oe*q-Fe*F)*T.inverseInertia)}}}}})()},function(n,r,i){var s={};n.exports=s;var o=i(9),a=i(0);(function(){s.create=function(l){return a.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},l)},s.update=function(l,c,u){var f=o.update,p=o.create,d=o.setActive,g=l.table,m=l.list,v=m.length,_=v,C=l.collisionStart,R=l.collisionEnd,N=l.collisionActive,x=c.length,I=0,E=0,y=0,w,T,P;for(P=0;P<x;P++)w=c[P],T=w.pair,T?(T.isActive&&(N[y++]=T),f(T,w,u)):(T=p(w,u),g[T.id]=T,C[I++]=T,m[_++]=T);for(_=0,v=m.length,P=0;P<v;P++)T=m[P],T.timeUpdated>=u?m[_++]=T:(d(T,!1,u),T.collision.bodyA.sleepCounter>0&&T.collision.bodyB.sleepCounter>0?m[_++]=T:(R[E++]=T,delete g[T.id]));m.length!==_&&(m.length=_),C.length!==I&&(C.length=I),R.length!==E&&(R.length=E),N.length!==y&&(N.length=y)},s.clear=function(l){return l.table={},l.list.length=0,l.collisionStart.length=0,l.collisionActive.length=0,l.collisionEnd.length=0,l}})()},function(n,r,i){var s=n.exports=i(21);s.Axes=i(11),s.Bodies=i(12),s.Body=i(4),s.Bounds=i(1),s.Collision=i(8),s.Common=i(0),s.Composite=i(6),s.Composites=i(22),s.Constraint=i(10),s.Contact=i(16),s.Detector=i(13),s.Engine=i(17),s.Events=i(5),s.Grid=i(23),s.Mouse=i(14),s.MouseConstraint=i(24),s.Pair=i(9),s.Pairs=i(19),s.Plugin=i(15),s.Query=i(25),s.Render=i(26),s.Resolver=i(18),s.Runner=i(27),s.SAT=i(28),s.Sleeping=i(7),s.Svg=i(29),s.Vector=i(2),s.Vertices=i(3),s.World=i(30),s.Engine.run=s.Runner.run,s.Common.deprecated(s.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(n,r,i){var s={};n.exports=s;var o=i(15),a=i(0);(function(){s.name="matter-js",s.version="0.20.0",s.uses=[],s.used=[],s.use=function(){o.use(s,Array.prototype.slice.call(arguments))},s.before=function(l,c){return l=l.replace(/^Matter./,""),a.chainPathBefore(s,l,c)},s.after=function(l,c){return l=l.replace(/^Matter./,""),a.chainPathAfter(s,l,c)}})()},function(n,r,i){var s={};n.exports=s;var o=i(6),a=i(10),l=i(0),c=i(4),u=i(12),f=l.deprecated;(function(){s.stack=function(p,d,g,m,v,_,C){for(var R=o.create({label:"Stack"}),N=p,x=d,I,E=0,y=0;y<m;y++){for(var w=0,T=0;T<g;T++){var P=C(N,x,T,y,I,E);if(P){var A=P.bounds.max.y-P.bounds.min.y,k=P.bounds.max.x-P.bounds.min.x;A>w&&(w=A),c.translate(P,{x:k*.5,y:A*.5}),N=P.bounds.max.x+v,o.addBody(R,P),I=P,E+=1}else N+=v}x+=w+_,N=p}return R},s.chain=function(p,d,g,m,v,_){for(var C=p.bodies,R=1;R<C.length;R++){var N=C[R-1],x=C[R],I=N.bounds.max.y-N.bounds.min.y,E=N.bounds.max.x-N.bounds.min.x,y=x.bounds.max.y-x.bounds.min.y,w=x.bounds.max.x-x.bounds.min.x,T={bodyA:N,pointA:{x:E*d,y:I*g},bodyB:x,pointB:{x:w*m,y:y*v}},P=l.extend(T,_);o.addConstraint(p,a.create(P))}return p.label+=" Chain",p},s.mesh=function(p,d,g,m,v){var _=p.bodies,C,R,N,x,I;for(C=0;C<g;C++){for(R=1;R<d;R++)N=_[R-1+C*d],x=_[R+C*d],o.addConstraint(p,a.create(l.extend({bodyA:N,bodyB:x},v)));if(C>0)for(R=0;R<d;R++)N=_[R+(C-1)*d],x=_[R+C*d],o.addConstraint(p,a.create(l.extend({bodyA:N,bodyB:x},v))),m&&R>0&&(I=_[R-1+(C-1)*d],o.addConstraint(p,a.create(l.extend({bodyA:I,bodyB:x},v)))),m&&R<d-1&&(I=_[R+1+(C-1)*d],o.addConstraint(p,a.create(l.extend({bodyA:I,bodyB:x},v))))}return p.label+=" Mesh",p},s.pyramid=function(p,d,g,m,v,_,C){return s.stack(p,d,g,m,v,_,function(R,N,x,I,E,y){var w=Math.min(m,Math.ceil(g/2)),T=E?E.bounds.max.x-E.bounds.min.x:0;if(!(I>w)){I=w-I;var P=I,A=g-1-I;if(!(x<P||x>A)){y===1&&c.translate(E,{x:(x+(g%2===1?1:-1))*T,y:0});var k=E?x*T:0;return C(p+k+x*v,N,x,I,E,y)}}})},s.newtonsCradle=function(p,d,g,m,v){for(var _=o.create({label:"Newtons Cradle"}),C=0;C<g;C++){var R=1.9,N=u.circle(p+C*(m*R),d+v,m,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),x=a.create({pointA:{x:p+C*(m*R),y:d},bodyB:N});o.addBody(_,N),o.addConstraint(_,x)}return _},f(s,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),s.car=function(p,d,g,m,v){var _=c.nextGroup(!0),C=20,R=-g*.5+C,N=g*.5-C,x=0,I=o.create({label:"Car"}),E=u.rectangle(p,d,g,m,{collisionFilter:{group:_},chamfer:{radius:m*.5},density:2e-4}),y=u.circle(p+R,d+x,v,{collisionFilter:{group:_},friction:.8}),w=u.circle(p+N,d+x,v,{collisionFilter:{group:_},friction:.8}),T=a.create({bodyB:E,pointB:{x:R,y:x},bodyA:y,stiffness:1,length:0}),P=a.create({bodyB:E,pointB:{x:N,y:x},bodyA:w,stiffness:1,length:0});return o.addBody(I,E),o.addBody(I,y),o.addBody(I,w),o.addConstraint(I,T),o.addConstraint(I,P),I},f(s,"car","Composites.car ➤ moved to car example"),s.softBody=function(p,d,g,m,v,_,C,R,N,x){N=l.extend({inertia:1/0},N),x=l.extend({stiffness:.2,render:{type:"line",anchors:!1}},x);var I=s.stack(p,d,g,m,v,_,function(E,y){return u.circle(E,y,R,N)});return s.mesh(I,g,m,C,x),I.label="Soft Body",I},f(s,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(n,r,i){var s={};n.exports=s;var o=i(9),a=i(0),l=a.deprecated;(function(){s.create=function(c){var u={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return a.extend(u,c)},s.update=function(c,u,f,p){var d,g,m,v=f.world,_=c.buckets,C,R,N=!1;for(d=0;d<u.length;d++){var x=u[d];if(!(x.isSleeping&&!p)&&!(v.bounds&&(x.bounds.max.x<v.bounds.min.x||x.bounds.min.x>v.bounds.max.x||x.bounds.max.y<v.bounds.min.y||x.bounds.min.y>v.bounds.max.y))){var I=s._getRegion(c,x);if(!x.region||I.id!==x.region.id||p){(!x.region||p)&&(x.region=I);var E=s._regionUnion(I,x.region);for(g=E.startCol;g<=E.endCol;g++)for(m=E.startRow;m<=E.endRow;m++){R=s._getBucketId(g,m),C=_[R];var y=g>=I.startCol&&g<=I.endCol&&m>=I.startRow&&m<=I.endRow,w=g>=x.region.startCol&&g<=x.region.endCol&&m>=x.region.startRow&&m<=x.region.endRow;!y&&w&&w&&C&&s._bucketRemoveBody(c,C,x),(x.region===I||y&&!w||p)&&(C||(C=s._createBucket(_,R)),s._bucketAddBody(c,C,x))}x.region=I,N=!0}}}N&&(c.pairsList=s._createActivePairsList(c))},l(s,"update","Grid.update ➤ replaced by Matter.Detector"),s.clear=function(c){c.buckets={},c.pairs={},c.pairsList=[]},l(s,"clear","Grid.clear ➤ replaced by Matter.Detector"),s._regionUnion=function(c,u){var f=Math.min(c.startCol,u.startCol),p=Math.max(c.endCol,u.endCol),d=Math.min(c.startRow,u.startRow),g=Math.max(c.endRow,u.endRow);return s._createRegion(f,p,d,g)},s._getRegion=function(c,u){var f=u.bounds,p=Math.floor(f.min.x/c.bucketWidth),d=Math.floor(f.max.x/c.bucketWidth),g=Math.floor(f.min.y/c.bucketHeight),m=Math.floor(f.max.y/c.bucketHeight);return s._createRegion(p,d,g,m)},s._createRegion=function(c,u,f,p){return{id:c+","+u+","+f+","+p,startCol:c,endCol:u,startRow:f,endRow:p}},s._getBucketId=function(c,u){return"C"+c+"R"+u},s._createBucket=function(c,u){var f=c[u]=[];return f},s._bucketAddBody=function(c,u,f){var p=c.pairs,d=o.id,g=u.length,m;for(m=0;m<g;m++){var v=u[m];if(!(f.id===v.id||f.isStatic&&v.isStatic)){var _=d(f,v),C=p[_];C?C[2]+=1:p[_]=[f,v,1]}}u.push(f)},s._bucketRemoveBody=function(c,u,f){var p=c.pairs,d=o.id,g;u.splice(a.indexOf(u,f),1);var m=u.length;for(g=0;g<m;g++){var v=p[d(f,u[g])];v&&(v[2]-=1)}},s._createActivePairsList=function(c){var u,f=c.pairs,p=a.keys(f),d=p.length,g=[],m;for(m=0;m<d;m++)u=f[p[m]],u[2]>0?g.push(u):delete f[p[m]];return g}})()},function(n,r,i){var s={};n.exports=s;var o=i(3),a=i(7),l=i(14),c=i(5),u=i(13),f=i(10),p=i(6),d=i(0),g=i(1);(function(){s.create=function(m,v){var _=(m?m.mouse:null)||(v?v.mouse:null);_||(m&&m.render&&m.render.canvas?_=l.create(m.render.canvas):v&&v.element?_=l.create(v.element):(_=l.create(),d.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var C=f.create({label:"Mouse Constraint",pointA:_.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),R={type:"mouseConstraint",mouse:_,element:null,body:null,constraint:C,collisionFilter:{category:1,mask:4294967295,group:0}},N=d.extend(R,v);return c.on(m,"beforeUpdate",function(){var x=p.allBodies(m.world);s.update(N,x),s._triggerEvents(N)}),N},s.update=function(m,v){var _=m.mouse,C=m.constraint,R=m.body;if(_.button===0){if(C.bodyB)a.set(C.bodyB,!1),C.pointA=_.position;else for(var N=0;N<v.length;N++)if(R=v[N],g.contains(R.bounds,_.position)&&u.canCollide(R.collisionFilter,m.collisionFilter))for(var x=R.parts.length>1?1:0;x<R.parts.length;x++){var I=R.parts[x];if(o.contains(I.vertices,_.position)){C.pointA=_.position,C.bodyB=m.body=R,C.pointB={x:_.position.x-R.position.x,y:_.position.y-R.position.y},C.angleB=R.angle,a.set(R,!1),c.trigger(m,"startdrag",{mouse:_,body:R});break}}}else C.bodyB=m.body=null,C.pointB=null,R&&c.trigger(m,"enddrag",{mouse:_,body:R})},s._triggerEvents=function(m){var v=m.mouse,_=v.sourceEvents;_.mousemove&&c.trigger(m,"mousemove",{mouse:v}),_.mousedown&&c.trigger(m,"mousedown",{mouse:v}),_.mouseup&&c.trigger(m,"mouseup",{mouse:v}),l.clearSourceEvents(v)}})()},function(n,r,i){var s={};n.exports=s;var o=i(2),a=i(8),l=i(1),c=i(12),u=i(3);(function(){s.collides=function(f,p){for(var d=[],g=p.length,m=f.bounds,v=a.collides,_=l.overlaps,C=0;C<g;C++){var R=p[C],N=R.parts.length,x=N===1?0:1;if(_(R.bounds,m))for(var I=x;I<N;I++){var E=R.parts[I];if(_(E.bounds,m)){var y=v(E,f);if(y){d.push(y);break}}}}return d},s.ray=function(f,p,d,g){g=g||1e-100;for(var m=o.angle(p,d),v=o.magnitude(o.sub(p,d)),_=(d.x+p.x)*.5,C=(d.y+p.y)*.5,R=c.rectangle(_,C,v,g,{angle:m}),N=s.collides(R,f),x=0;x<N.length;x+=1){var I=N[x];I.body=I.bodyB=I.bodyA}return N},s.region=function(f,p,d){for(var g=[],m=0;m<f.length;m++){var v=f[m],_=l.overlaps(v.bounds,p);(_&&!d||!_&&d)&&g.push(v)}return g},s.point=function(f,p){for(var d=[],g=0;g<f.length;g++){var m=f[g];if(l.contains(m.bounds,p))for(var v=m.parts.length===1?0:1;v<m.parts.length;v++){var _=m.parts[v];if(l.contains(_.bounds,p)&&u.contains(_.vertices,p)){d.push(m);break}}}return d}})()},function(n,r,i){var s={};n.exports=s;var o=i(4),a=i(0),l=i(6),c=i(1),u=i(5),f=i(2),p=i(14);(function(){var d,g;typeof window<"u"&&(d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(x){window.setTimeout(function(){x(a.now())},1e3/60)},g=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),s._goodFps=30,s._goodDelta=1e3/60,s.create=function(x){var I={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],engineUpdatesHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",wireframeStrokeStyle:"#bbb",hasBounds:!!x.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},E=a.extend(I,x);return E.canvas&&(E.canvas.width=E.options.width||E.canvas.width,E.canvas.height=E.options.height||E.canvas.height),E.mouse=x.mouse,E.engine=x.engine,E.canvas=E.canvas||_(E.options.width,E.options.height),E.context=E.canvas.getContext("2d"),E.textures={},E.bounds=E.bounds||{min:{x:0,y:0},max:{x:E.canvas.width,y:E.canvas.height}},E.controller=s,E.options.showBroadphase=!1,E.options.pixelRatio!==1&&s.setPixelRatio(E,E.options.pixelRatio),a.isElement(E.element)&&E.element.appendChild(E.canvas),E},s.run=function(x){(function I(E){x.frameRequestId=d(I),m(x,E),s.world(x,E),x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0),(x.options.showStats||x.options.showDebug)&&s.stats(x,x.context,E),(x.options.showPerformance||x.options.showDebug)&&s.performance(x,x.context,E),x.context.setTransform(1,0,0,1,0,0)})()},s.stop=function(x){g(x.frameRequestId)},s.setPixelRatio=function(x,I){var E=x.options,y=x.canvas;I==="auto"&&(I=C(y)),E.pixelRatio=I,y.setAttribute("data-pixel-ratio",I),y.width=E.width*I,y.height=E.height*I,y.style.width=E.width+"px",y.style.height=E.height+"px"},s.setSize=function(x,I,E){x.options.width=I,x.options.height=E,x.bounds.max.x=x.bounds.min.x+I,x.bounds.max.y=x.bounds.min.y+E,x.options.pixelRatio!==1?s.setPixelRatio(x,x.options.pixelRatio):(x.canvas.width=I,x.canvas.height=E)},s.lookAt=function(x,I,E,y){y=typeof y<"u"?y:!0,I=a.isArray(I)?I:[I],E=E||{x:0,y:0};for(var w={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},T=0;T<I.length;T+=1){var P=I[T],A=P.bounds?P.bounds.min:P.min||P.position||P,k=P.bounds?P.bounds.max:P.max||P.position||P;A&&k&&(A.x<w.min.x&&(w.min.x=A.x),k.x>w.max.x&&(w.max.x=k.x),A.y<w.min.y&&(w.min.y=A.y),k.y>w.max.y&&(w.max.y=k.y))}var B=w.max.x-w.min.x+2*E.x,$=w.max.y-w.min.y+2*E.y,X=x.canvas.height,U=x.canvas.width,K=U/X,ee=B/$,ue=1,Ee=1;ee>K?Ee=ee/K:ue=K/ee,x.options.hasBounds=!0,x.bounds.min.x=w.min.x,x.bounds.max.x=w.min.x+B*ue,x.bounds.min.y=w.min.y,x.bounds.max.y=w.min.y+$*Ee,y&&(x.bounds.min.x+=B*.5-B*ue*.5,x.bounds.max.x+=B*.5-B*ue*.5,x.bounds.min.y+=$*.5-$*Ee*.5,x.bounds.max.y+=$*.5-$*Ee*.5),x.bounds.min.x-=E.x,x.bounds.max.x-=E.x,x.bounds.min.y-=E.y,x.bounds.max.y-=E.y,x.mouse&&(p.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.canvas.width,y:(x.bounds.max.y-x.bounds.min.y)/x.canvas.height}),p.setOffset(x.mouse,x.bounds.min))},s.startViewTransform=function(x){var I=x.bounds.max.x-x.bounds.min.x,E=x.bounds.max.y-x.bounds.min.y,y=I/x.options.width,w=E/x.options.height;x.context.setTransform(x.options.pixelRatio/y,0,0,x.options.pixelRatio/w,0,0),x.context.translate(-x.bounds.min.x,-x.bounds.min.y)},s.endViewTransform=function(x){x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0)},s.world=function(x,I){var E=a.now(),y=x.engine,w=y.world,T=x.canvas,P=x.context,A=x.options,k=x.timing,B=l.allBodies(w),$=l.allConstraints(w),X=A.wireframes?A.wireframeBackground:A.background,U=[],K=[],ee,ue={timestamp:y.timing.timestamp};if(u.trigger(x,"beforeRender",ue),x.currentBackground!==X&&N(x,X),P.globalCompositeOperation="source-in",P.fillStyle="transparent",P.fillRect(0,0,T.width,T.height),P.globalCompositeOperation="source-over",A.hasBounds){for(ee=0;ee<B.length;ee++){var Ee=B[ee];c.overlaps(Ee.bounds,x.bounds)&&U.push(Ee)}for(ee=0;ee<$.length;ee++){var ge=$[ee],ae=ge.bodyA,$e=ge.bodyB,Me=ge.pointA,ie=ge.pointB;ae&&(Me=f.add(ae.position,ge.pointA)),$e&&(ie=f.add($e.position,ge.pointB)),!(!Me||!ie)&&(c.contains(x.bounds,Me)||c.contains(x.bounds,ie))&&K.push(ge)}s.startViewTransform(x),x.mouse&&(p.setScale(x.mouse,{x:(x.bounds.max.x-x.bounds.min.x)/x.options.width,y:(x.bounds.max.y-x.bounds.min.y)/x.options.height}),p.setOffset(x.mouse,x.bounds.min))}else K=$,U=B,x.options.pixelRatio!==1&&x.context.setTransform(x.options.pixelRatio,0,0,x.options.pixelRatio,0,0);!A.wireframes||y.enableSleeping&&A.showSleeping?s.bodies(x,U,P):(A.showConvexHulls&&s.bodyConvexHulls(x,U,P),s.bodyWireframes(x,U,P)),A.showBounds&&s.bodyBounds(x,U,P),(A.showAxes||A.showAngleIndicator)&&s.bodyAxes(x,U,P),A.showPositions&&s.bodyPositions(x,U,P),A.showVelocity&&s.bodyVelocity(x,U,P),A.showIds&&s.bodyIds(x,U,P),A.showSeparations&&s.separations(x,y.pairs.list,P),A.showCollisions&&s.collisions(x,y.pairs.list,P),A.showVertexNumbers&&s.vertexNumbers(x,U,P),A.showMousePosition&&s.mousePosition(x,x.mouse,P),s.constraints(K,P),A.hasBounds&&s.endViewTransform(x),u.trigger(x,"afterRender",ue),k.lastElapsed=a.now()-E},s.stats=function(x,I,E){for(var y=x.engine,w=y.world,T=l.allBodies(w),P=0,A=55,k=44,B=0,$=0,X=0;X<T.length;X+=1)P+=T[X].parts.length;var U={Part:P,Body:T.length,Cons:l.allConstraints(w).length,Comp:l.allComposites(w).length,Pair:y.pairs.list.length};I.fillStyle="#0e0f19",I.fillRect(B,$,A*5.5,k),I.font="12px Arial",I.textBaseline="top",I.textAlign="right";for(var K in U){var ee=U[K];I.fillStyle="#aaa",I.fillText(K,B+A,$+8),I.fillStyle="#eee",I.fillText(ee,B+A,$+26),B+=A}},s.performance=function(x,I){var E=x.engine,y=x.timing,w=y.deltaHistory,T=y.elapsedHistory,P=y.timestampElapsedHistory,A=y.engineDeltaHistory,k=y.engineUpdatesHistory,B=y.engineElapsedHistory,$=E.timing.lastUpdatesPerFrame,X=E.timing.lastDelta,U=v(w),K=v(T),ee=v(A),ue=v(k),Ee=v(B),ge=v(P),ae=ge/U||0,$e=Math.round(U/X),Me=1e3/U||0,ie=4,Ve=12,be=60,ze=34,oe=10,Fe=69;I.fillStyle="#0e0f19",I.fillRect(0,50,Ve*5+be*6+22,ze),s.status(I,oe,Fe,be,ie,w.length,Math.round(Me)+" fps",Me/s._goodFps,function(Ce){return w[Ce]/U-1}),s.status(I,oe+Ve+be,Fe,be,ie,A.length,X.toFixed(2)+" dt",s._goodDelta/X,function(Ce){return A[Ce]/ee-1}),s.status(I,oe+(Ve+be)*2,Fe,be,ie,k.length,$+" upf",Math.pow(a.clamp(ue/$e||1,0,1),4),function(Ce){return k[Ce]/ue-1}),s.status(I,oe+(Ve+be)*3,Fe,be,ie,B.length,Ee.toFixed(2)+" ut",1-$*Ee/s._goodFps,function(Ce){return B[Ce]/Ee-1}),s.status(I,oe+(Ve+be)*4,Fe,be,ie,T.length,K.toFixed(2)+" rt",1-K/s._goodFps,function(Ce){return T[Ce]/K-1}),s.status(I,oe+(Ve+be)*5,Fe,be,ie,P.length,ae.toFixed(2)+" x",ae*ae*ae,function(Ce){return(P[Ce]/w[Ce]/ae||0)-1})},s.status=function(x,I,E,y,w,T,P,A,k){x.strokeStyle="#888",x.fillStyle="#444",x.lineWidth=1,x.fillRect(I,E+7,y,1),x.beginPath(),x.moveTo(I,E+7-w*a.clamp(.4*k(0),-2,2));for(var B=0;B<y;B+=1)x.lineTo(I+B,E+7-(B<T?w*a.clamp(.4*k(B),-2,2):0));x.stroke(),x.fillStyle="hsl("+a.clamp(25+95*A,0,120)+",100%,60%)",x.fillRect(I,E-7,4,4),x.font="12px Arial",x.textBaseline="middle",x.textAlign="right",x.fillStyle="#eee",x.fillText(P,I+y,E-5)},s.constraints=function(x,I){for(var E=I,y=0;y<x.length;y++){var w=x[y];if(!(!w.render.visible||!w.pointA||!w.pointB)){var T=w.bodyA,P=w.bodyB,A,k;if(T?A=f.add(T.position,w.pointA):A=w.pointA,w.render.type==="pin")E.beginPath(),E.arc(A.x,A.y,3,0,2*Math.PI),E.closePath();else{if(P?k=f.add(P.position,w.pointB):k=w.pointB,E.beginPath(),E.moveTo(A.x,A.y),w.render.type==="spring")for(var B=f.sub(k,A),$=f.perp(f.normalise(B)),X=Math.ceil(a.clamp(w.length/5,12,20)),U,K=1;K<X;K+=1)U=K%2===0?1:-1,E.lineTo(A.x+B.x*(K/X)+$.x*U*4,A.y+B.y*(K/X)+$.y*U*4);E.lineTo(k.x,k.y)}w.render.lineWidth&&(E.lineWidth=w.render.lineWidth,E.strokeStyle=w.render.strokeStyle,E.stroke()),w.render.anchors&&(E.fillStyle=w.render.strokeStyle,E.beginPath(),E.arc(A.x,A.y,3,0,2*Math.PI),E.arc(k.x,k.y,3,0,2*Math.PI),E.closePath(),E.fill())}}},s.bodies=function(x,I,E){var y=E;x.engine;var w=x.options,T=w.showInternalEdges||!w.wireframes,P,A,k,B;for(k=0;k<I.length;k++)if(P=I[k],!!P.render.visible){for(B=P.parts.length>1?1:0;B<P.parts.length;B++)if(A=P.parts[B],!!A.render.visible){if(w.showSleeping&&P.isSleeping?y.globalAlpha=.5*A.render.opacity:A.render.opacity!==1&&(y.globalAlpha=A.render.opacity),A.render.sprite&&A.render.sprite.texture&&!w.wireframes){var $=A.render.sprite,X=R(x,$.texture);y.translate(A.position.x,A.position.y),y.rotate(A.angle),y.drawImage(X,X.width*-$.xOffset*$.xScale,X.height*-$.yOffset*$.yScale,X.width*$.xScale,X.height*$.yScale),y.rotate(-A.angle),y.translate(-A.position.x,-A.position.y)}else{if(A.circleRadius)y.beginPath(),y.arc(A.position.x,A.position.y,A.circleRadius,0,2*Math.PI);else{y.beginPath(),y.moveTo(A.vertices[0].x,A.vertices[0].y);for(var U=1;U<A.vertices.length;U++)!A.vertices[U-1].isInternal||T?y.lineTo(A.vertices[U].x,A.vertices[U].y):y.moveTo(A.vertices[U].x,A.vertices[U].y),A.vertices[U].isInternal&&!T&&y.moveTo(A.vertices[(U+1)%A.vertices.length].x,A.vertices[(U+1)%A.vertices.length].y);y.lineTo(A.vertices[0].x,A.vertices[0].y),y.closePath()}w.wireframes?(y.lineWidth=1,y.strokeStyle=x.options.wireframeStrokeStyle,y.stroke()):(y.fillStyle=A.render.fillStyle,A.render.lineWidth&&(y.lineWidth=A.render.lineWidth,y.strokeStyle=A.render.strokeStyle,y.stroke()),y.fill())}y.globalAlpha=1}}},s.bodyWireframes=function(x,I,E){var y=E,w=x.options.showInternalEdges,T,P,A,k,B;for(y.beginPath(),A=0;A<I.length;A++)if(T=I[A],!!T.render.visible)for(B=T.parts.length>1?1:0;B<T.parts.length;B++){for(P=T.parts[B],y.moveTo(P.vertices[0].x,P.vertices[0].y),k=1;k<P.vertices.length;k++)!P.vertices[k-1].isInternal||w?y.lineTo(P.vertices[k].x,P.vertices[k].y):y.moveTo(P.vertices[k].x,P.vertices[k].y),P.vertices[k].isInternal&&!w&&y.moveTo(P.vertices[(k+1)%P.vertices.length].x,P.vertices[(k+1)%P.vertices.length].y);y.lineTo(P.vertices[0].x,P.vertices[0].y)}y.lineWidth=1,y.strokeStyle=x.options.wireframeStrokeStyle,y.stroke()},s.bodyConvexHulls=function(x,I,E){var y=E,w,T,P;for(y.beginPath(),T=0;T<I.length;T++)if(w=I[T],!(!w.render.visible||w.parts.length===1)){for(y.moveTo(w.vertices[0].x,w.vertices[0].y),P=1;P<w.vertices.length;P++)y.lineTo(w.vertices[P].x,w.vertices[P].y);y.lineTo(w.vertices[0].x,w.vertices[0].y)}y.lineWidth=1,y.strokeStyle="rgba(255,255,255,0.2)",y.stroke()},s.vertexNumbers=function(x,I,E){var y=E,w,T,P;for(w=0;w<I.length;w++){var A=I[w].parts;for(P=A.length>1?1:0;P<A.length;P++){var k=A[P];for(T=0;T<k.vertices.length;T++)y.fillStyle="rgba(255,255,255,0.2)",y.fillText(w+"_"+T,k.position.x+(k.vertices[T].x-k.position.x)*.8,k.position.y+(k.vertices[T].y-k.position.y)*.8)}}},s.mousePosition=function(x,I,E){var y=E;y.fillStyle="rgba(255,255,255,0.8)",y.fillText(I.position.x+"  "+I.position.y,I.position.x+5,I.position.y-5)},s.bodyBounds=function(x,I,E){var y=E;x.engine;var w=x.options;y.beginPath();for(var T=0;T<I.length;T++){var P=I[T];if(P.render.visible)for(var A=I[T].parts,k=A.length>1?1:0;k<A.length;k++){var B=A[k];y.rect(B.bounds.min.x,B.bounds.min.y,B.bounds.max.x-B.bounds.min.x,B.bounds.max.y-B.bounds.min.y)}}w.wireframes?y.strokeStyle="rgba(255,255,255,0.08)":y.strokeStyle="rgba(0,0,0,0.1)",y.lineWidth=1,y.stroke()},s.bodyAxes=function(x,I,E){var y=E;x.engine;var w=x.options,T,P,A,k;for(y.beginPath(),P=0;P<I.length;P++){var B=I[P],$=B.parts;if(B.render.visible)if(w.showAxes)for(A=$.length>1?1:0;A<$.length;A++)for(T=$[A],k=0;k<T.axes.length;k++){var X=T.axes[k];y.moveTo(T.position.x,T.position.y),y.lineTo(T.position.x+X.x*20,T.position.y+X.y*20)}else for(A=$.length>1?1:0;A<$.length;A++)for(T=$[A],k=0;k<T.axes.length;k++)y.moveTo(T.position.x,T.position.y),y.lineTo((T.vertices[0].x+T.vertices[T.vertices.length-1].x)/2,(T.vertices[0].y+T.vertices[T.vertices.length-1].y)/2)}w.wireframes?(y.strokeStyle="indianred",y.lineWidth=1):(y.strokeStyle="rgba(255, 255, 255, 0.4)",y.globalCompositeOperation="overlay",y.lineWidth=2),y.stroke(),y.globalCompositeOperation="source-over"},s.bodyPositions=function(x,I,E){var y=E;x.engine;var w=x.options,T,P,A,k;for(y.beginPath(),A=0;A<I.length;A++)if(T=I[A],!!T.render.visible)for(k=0;k<T.parts.length;k++)P=T.parts[k],y.arc(P.position.x,P.position.y,3,0,2*Math.PI,!1),y.closePath();for(w.wireframes?y.fillStyle="indianred":y.fillStyle="rgba(0,0,0,0.5)",y.fill(),y.beginPath(),A=0;A<I.length;A++)T=I[A],T.render.visible&&(y.arc(T.positionPrev.x,T.positionPrev.y,2,0,2*Math.PI,!1),y.closePath());y.fillStyle="rgba(255,165,0,0.8)",y.fill()},s.bodyVelocity=function(x,I,E){var y=E;y.beginPath();for(var w=0;w<I.length;w++){var T=I[w];if(T.render.visible){var P=o.getVelocity(T);y.moveTo(T.position.x,T.position.y),y.lineTo(T.position.x+P.x,T.position.y+P.y)}}y.lineWidth=3,y.strokeStyle="cornflowerblue",y.stroke()},s.bodyIds=function(x,I,E){var y=E,w,T;for(w=0;w<I.length;w++)if(I[w].render.visible){var P=I[w].parts;for(T=P.length>1?1:0;T<P.length;T++){var A=P[T];y.font="12px Arial",y.fillStyle="rgba(255,255,255,0.5)",y.fillText(A.id,A.position.x+10,A.position.y-10)}}},s.collisions=function(x,I,E){var y=E,w=x.options,T,P,A,k;for(y.beginPath(),A=0;A<I.length;A++)if(T=I[A],!!T.isActive)for(P=T.collision,k=0;k<T.contactCount;k++){var B=T.contacts[k],$=B.vertex;y.rect($.x-1.5,$.y-1.5,3.5,3.5)}for(w.wireframes?y.fillStyle="rgba(255,255,255,0.7)":y.fillStyle="orange",y.fill(),y.beginPath(),A=0;A<I.length;A++)if(T=I[A],!!T.isActive&&(P=T.collision,T.contactCount>0)){var X=T.contacts[0].vertex.x,U=T.contacts[0].vertex.y;T.contactCount===2&&(X=(T.contacts[0].vertex.x+T.contacts[1].vertex.x)/2,U=(T.contacts[0].vertex.y+T.contacts[1].vertex.y)/2),P.bodyB===P.supports[0].body||P.bodyA.isStatic===!0?y.moveTo(X-P.normal.x*8,U-P.normal.y*8):y.moveTo(X+P.normal.x*8,U+P.normal.y*8),y.lineTo(X,U)}w.wireframes?y.strokeStyle="rgba(255,165,0,0.7)":y.strokeStyle="orange",y.lineWidth=1,y.stroke()},s.separations=function(x,I,E){var y=E,w=x.options,T,P,A,k,B;for(y.beginPath(),B=0;B<I.length;B++)if(T=I[B],!!T.isActive){P=T.collision,A=P.bodyA,k=P.bodyB;var $=1;!k.isStatic&&!A.isStatic&&($=.5),k.isStatic&&($=0),y.moveTo(k.position.x,k.position.y),y.lineTo(k.position.x-P.penetration.x*$,k.position.y-P.penetration.y*$),$=1,!k.isStatic&&!A.isStatic&&($=.5),A.isStatic&&($=0),y.moveTo(A.position.x,A.position.y),y.lineTo(A.position.x+P.penetration.x*$,A.position.y+P.penetration.y*$)}w.wireframes?y.strokeStyle="rgba(255,165,0,0.5)":y.strokeStyle="orange",y.stroke()},s.inspector=function(x,I){x.engine;var E=x.selected,y=x.render,w=y.options,T;if(w.hasBounds){var P=y.bounds.max.x-y.bounds.min.x,A=y.bounds.max.y-y.bounds.min.y,k=P/y.options.width,B=A/y.options.height;I.scale(1/k,1/B),I.translate(-y.bounds.min.x,-y.bounds.min.y)}for(var $=0;$<E.length;$++){var X=E[$].data;switch(I.translate(.5,.5),I.lineWidth=1,I.strokeStyle="rgba(255,165,0,0.9)",I.setLineDash([1,2]),X.type){case"body":T=X.bounds,I.beginPath(),I.rect(Math.floor(T.min.x-3),Math.floor(T.min.y-3),Math.floor(T.max.x-T.min.x+6),Math.floor(T.max.y-T.min.y+6)),I.closePath(),I.stroke();break;case"constraint":var U=X.pointA;X.bodyA&&(U=X.pointB),I.beginPath(),I.arc(U.x,U.y,10,0,2*Math.PI),I.closePath(),I.stroke();break}I.setLineDash([]),I.translate(-.5,-.5)}x.selectStart!==null&&(I.translate(.5,.5),I.lineWidth=1,I.strokeStyle="rgba(255,165,0,0.6)",I.fillStyle="rgba(255,165,0,0.1)",T=x.selectBounds,I.beginPath(),I.rect(Math.floor(T.min.x),Math.floor(T.min.y),Math.floor(T.max.x-T.min.x),Math.floor(T.max.y-T.min.y)),I.closePath(),I.stroke(),I.fill(),I.translate(-.5,-.5)),w.hasBounds&&I.setTransform(1,0,0,1,0,0)};var m=function(x,I){var E=x.engine,y=x.timing,w=y.historySize,T=E.timing.timestamp;y.delta=I-y.lastTime||s._goodDelta,y.lastTime=I,y.timestampElapsed=T-y.lastTimestamp||0,y.lastTimestamp=T,y.deltaHistory.unshift(y.delta),y.deltaHistory.length=Math.min(y.deltaHistory.length,w),y.engineDeltaHistory.unshift(E.timing.lastDelta),y.engineDeltaHistory.length=Math.min(y.engineDeltaHistory.length,w),y.timestampElapsedHistory.unshift(y.timestampElapsed),y.timestampElapsedHistory.length=Math.min(y.timestampElapsedHistory.length,w),y.engineUpdatesHistory.unshift(E.timing.lastUpdatesPerFrame),y.engineUpdatesHistory.length=Math.min(y.engineUpdatesHistory.length,w),y.engineElapsedHistory.unshift(E.timing.lastElapsed),y.engineElapsedHistory.length=Math.min(y.engineElapsedHistory.length,w),y.elapsedHistory.unshift(y.lastElapsed),y.elapsedHistory.length=Math.min(y.elapsedHistory.length,w)},v=function(x){for(var I=0,E=0;E<x.length;E+=1)I+=x[E];return I/x.length||0},_=function(x,I){var E=document.createElement("canvas");return E.width=x,E.height=I,E.oncontextmenu=function(){return!1},E.onselectstart=function(){return!1},E},C=function(x){var I=x.getContext("2d"),E=window.devicePixelRatio||1,y=I.webkitBackingStorePixelRatio||I.mozBackingStorePixelRatio||I.msBackingStorePixelRatio||I.oBackingStorePixelRatio||I.backingStorePixelRatio||1;return E/y},R=function(x,I){var E=x.textures[I];return E||(E=x.textures[I]=new Image,E.src=I,E)},N=function(x,I){var E=I;/(jpg|gif|png)$/.test(I)&&(E="url("+I+")"),x.canvas.style.background=E,x.canvas.style.backgroundSize="contain",x.currentBackground=I}})()},function(n,r,i){var s={};n.exports=s;var o=i(5),a=i(17),l=i(0);(function(){s._maxFrameDelta=1e3/15,s._frameDeltaFallback=1e3/60,s._timeBufferMargin=1.5,s._elapsedNextEstimate=1,s._smoothingLowerBound=.1,s._smoothingUpperBound=.9,s.create=function(u){var f={delta:16.666666666666668,frameDelta:null,frameDeltaSmoothing:!0,frameDeltaSnapping:!0,frameDeltaHistory:[],frameDeltaHistorySize:100,frameRequestId:null,timeBuffer:0,timeLastTick:null,maxUpdates:null,maxFrameTime:33.333333333333336,lastUpdatesDeferred:0,enabled:!0},p=l.extend(f,u);return p.fps=0,p},s.run=function(u,f){return u.timeBuffer=s._frameDeltaFallback,function p(d){u.frameRequestId=s._onNextFrame(u,p),d&&u.enabled&&s.tick(u,f,d)}(),u},s.tick=function(u,f,p){var d=l.now(),g=u.delta,m=0,v=p-u.timeLastTick;if((!v||!u.timeLastTick||v>Math.max(s._maxFrameDelta,u.maxFrameTime))&&(v=u.frameDelta||s._frameDeltaFallback),u.frameDeltaSmoothing){u.frameDeltaHistory.push(v),u.frameDeltaHistory=u.frameDeltaHistory.slice(-u.frameDeltaHistorySize);var _=u.frameDeltaHistory.slice(0).sort(),C=u.frameDeltaHistory.slice(_.length*s._smoothingLowerBound,_.length*s._smoothingUpperBound),R=c(C);v=R||v}u.frameDeltaSnapping&&(v=1e3/Math.round(1e3/v)),u.frameDelta=v,u.timeLastTick=p,u.timeBuffer+=u.frameDelta,u.timeBuffer=l.clamp(u.timeBuffer,0,u.frameDelta+g*s._timeBufferMargin),u.lastUpdatesDeferred=0;var N=u.maxUpdates||Math.ceil(u.maxFrameTime/g),x={timestamp:f.timing.timestamp};o.trigger(u,"beforeTick",x),o.trigger(u,"tick",x);for(var I=l.now();g>0&&u.timeBuffer>=g*s._timeBufferMargin;){o.trigger(u,"beforeUpdate",x),a.update(f,g),o.trigger(u,"afterUpdate",x),u.timeBuffer-=g,m+=1;var E=l.now()-d,y=l.now()-I,w=E+s._elapsedNextEstimate*y/m;if(m>=N||w>u.maxFrameTime){u.lastUpdatesDeferred=Math.round(Math.max(0,u.timeBuffer/g-s._timeBufferMargin));break}}f.timing.lastUpdatesPerFrame=m,o.trigger(u,"afterTick",x),u.frameDeltaHistory.length>=100&&(u.lastUpdatesDeferred&&Math.round(u.frameDelta/g)>N?l.warnOnce("Matter.Runner: runner reached runner.maxUpdates, see docs."):u.lastUpdatesDeferred&&l.warnOnce("Matter.Runner: runner reached runner.maxFrameTime, see docs."),typeof u.isFixed<"u"&&l.warnOnce("Matter.Runner: runner.isFixed is now redundant, see docs."),(u.deltaMin||u.deltaMax)&&l.warnOnce("Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs."),u.fps!==0&&l.warnOnce("Matter.Runner: runner.fps was replaced by runner.delta, see docs."))},s.stop=function(u){s._cancelNextFrame(u)},s._onNextFrame=function(u,f){if(typeof window<"u"&&window.requestAnimationFrame)u.frameRequestId=window.requestAnimationFrame(f);else throw new Error("Matter.Runner: missing required global window.requestAnimationFrame.");return u.frameRequestId},s._cancelNextFrame=function(u){if(typeof window<"u"&&window.cancelAnimationFrame)window.cancelAnimationFrame(u.frameRequestId);else throw new Error("Matter.Runner: missing required global window.cancelAnimationFrame.")};var c=function(u){for(var f=0,p=u.length,d=0;d<p;d+=1)f+=u[d];return f/p||0}})()},function(n,r,i){var s={};n.exports=s;var o=i(8),a=i(0),l=a.deprecated;(function(){s.collides=function(c,u){return o.collides(c,u)},l(s,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(n,r,i){var s={};n.exports=s,i(1);var o=i(0);(function(){s.pathToVertices=function(a,l){typeof window<"u"&&!("SVGPathSeg"in window)&&o.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var c,u,f,p,d,g,m,v,_,C,R=[],N,x,I=0,E=0,y=0;l=l||15;var w=function(P,A,k){var B=k%2===1&&k>1;if(!_||P!=_.x||A!=_.y){_&&B?(N=_.x,x=_.y):(N=0,x=0);var $={x:N+P,y:x+A};(B||!_)&&(_=$),R.push($),E=N+P,y=x+A}},T=function(P){var A=P.pathSegTypeAsLetter.toUpperCase();if(A!=="Z"){switch(A){case"M":case"L":case"T":case"C":case"S":case"Q":E=P.x,y=P.y;break;case"H":E=P.x;break;case"V":y=P.y;break}w(E,y,P.pathSegType)}};for(s._svgPathToAbsolute(a),f=a.getTotalLength(),g=[],c=0;c<a.pathSegList.numberOfItems;c+=1)g.push(a.pathSegList.getItem(c));for(m=g.concat();I<f;){if(C=a.getPathSegAtLength(I),d=g[C],d!=v){for(;m.length&&m[0]!=d;)T(m.shift());v=d}switch(d.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":p=a.getPointAtLength(I),w(p.x,p.y,0);break}I+=l}for(c=0,u=m.length;c<u;++c)T(m[c]);return R},s._svgPathToAbsolute=function(a){for(var l,c,u,f,p,d,g=a.pathSegList,m=0,v=0,_=g.numberOfItems,C=0;C<_;++C){var R=g.getItem(C),N=R.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test(N))"x"in R&&(m=R.x),"y"in R&&(v=R.y);else switch("x1"in R&&(u=m+R.x1),"x2"in R&&(p=m+R.x2),"y1"in R&&(f=v+R.y1),"y2"in R&&(d=v+R.y2),"x"in R&&(m+=R.x),"y"in R&&(v+=R.y),N){case"m":g.replaceItem(a.createSVGPathSegMovetoAbs(m,v),C);break;case"l":g.replaceItem(a.createSVGPathSegLinetoAbs(m,v),C);break;case"h":g.replaceItem(a.createSVGPathSegLinetoHorizontalAbs(m),C);break;case"v":g.replaceItem(a.createSVGPathSegLinetoVerticalAbs(v),C);break;case"c":g.replaceItem(a.createSVGPathSegCurvetoCubicAbs(m,v,u,f,p,d),C);break;case"s":g.replaceItem(a.createSVGPathSegCurvetoCubicSmoothAbs(m,v,p,d),C);break;case"q":g.replaceItem(a.createSVGPathSegCurvetoQuadraticAbs(m,v,u,f),C);break;case"t":g.replaceItem(a.createSVGPathSegCurvetoQuadraticSmoothAbs(m,v),C);break;case"a":g.replaceItem(a.createSVGPathSegArcAbs(m,v,R.r1,R.r2,R.angle,R.largeArcFlag,R.sweepFlag),C);break;case"z":case"Z":m=l,v=c;break}(N=="M"||N=="m")&&(l=m,c=v)}}})()},function(n,r,i){var s={};n.exports=s;var o=i(6);i(0),function(){s.create=o.create,s.add=o.add,s.remove=o.remove,s.clear=o.clear,s.addComposite=o.addComposite,s.addBody=o.addBody,s.addConstraint=o.addConstraint}()}])})})(s1);var RD=s1.exports;const sg=P1(RD),ID=()=>{const t=D.useRef(null);return D.useEffect(()=>{const{Engine:e,Render:n,Runner:r,Body:i,Composite:s,Mouse:o,MouseConstraint:a,World:l,Bodies:c,Constraint:u}=sg,f=e.create(),p=f.world,d=window.innerWidth<700?window.innerWidth:600,g=sg.Render.create({element:t.current,engine:f,options:{width:d+150,height:900,wireframes:!1,background:"transparent"}});n.run(g);const m=r.create();r.run(m,f);const v=[];let _=0;const C=(A,k,B)=>c.circle(A,k,B,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,render:{fillStyle:"hsl(340, 100%, 70%)",strokeStyle:"rgb(220, 220, 220)",lineWidth:2}}),R=(A,k,B,$,X)=>{const U=s.create({label:"NewtonsCradle"}),K=$*2;for(let ee=0;ee<B;ee++){const ue=C(A+ee*K,k+X,$),Ee=u.create({pointA:{x:A+ee*K,y:k},bodyB:ue,pointB:{x:0,y:0},length:X,stiffness:.9,render:{strokeStyle:"rgb(220, 220, 220,1)",lineWidth:1.5}});s.addBody(U,ue),s.addConstraint(U,Ee),v.push(ue)}return U},N=5,x=21,I=x*2*N,E=d/2-I/2,y=R(E,135,N,x,175);l.add(p,y),i.translate(y.bodies[0],{x:-140,y:-60});const w=o.create(g.canvas),T=a.create(f,{mouse:w,constraint:{stiffness:.2,render:{visible:!1}}});l.add(p,T),g.mouse=w,n.lookAt(g,{min:{x:0,y:0},max:{x:d-50,y:700}});const P=()=>{_=(_+1)%360;const A=`hsl(340, 100%, ${70+Math.sin(_*.1)*7}%)`,k=`hsl(320, 100%, ${40+Math.sin(_*.1)*7}%)`;v.forEach(B=>{B.render.fillStyle=A,B.render.strokeStyle=k}),setTimeout(()=>{requestAnimationFrame(P)},200)};return P(),()=>{n.stop(g),r.stop(m),e.clear(f),g.canvas.remove(),g.canvas=null,g.context=null,g.textures={}}},[]),O.createElement("div",{ref:t,style:{backgroundColor:"rgba(0, 0, 0, 0)"}})},AD=()=>O.createElement("div",{className:"graph__wrapper"},O.createElement("svg",{width:"80%",viewBox:"0 0 315 107",version:"1.1",style:{overflow:"visible"}},O.createElement("defs",null,O.createElement("path",{id:"textPath",d:"M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81",fill:"none"})),O.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},O.createElement("path",{id:"Path-1",className:"path",fill:"none",stroke:"#ea2088",strokeWidth:"3",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"}),O.createElement("path",{className:"dashed",fill:"none",stroke:"#E0E0E0",strokeWidth:"4",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"}),O.createElement("polyline",{id:"arrow",points:"0,-9 18,0 0,9 5,0",fill:"#db5862"},O.createElement("animateMotion",{rotate:"auto",begin:"1s",dur:"1.6s",repeatCount:"1",fill:"freeze"},O.createElement("mpath",{href:"#Path-1"}))),O.createElement("text",{className:"pointer-events-none arrowText",fill:"#E0E0E0",fontSize:"33",fontFamily:"Arial",transform:"translate(0,-10)"},O.createElement("textPath",{href:"#textPath",startOffset:"24%",textAnchor:"middle"},"My Board"),O.createElement("animate",{attributeName:"opacity",values:"1;0;1",dur:"4s",repeatCount:"indefinite"}))))),kD=()=>O.createElement("div",{className:"graph__wrapper2"},O.createElement("svg",{width:"80%",viewBox:"0 0 315 107",version:"1.1",style:{overflow:"visible"}},O.createElement("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},O.createElement("path",{id:"Path-1",className:"path",fill:"none",stroke:"#ea2088",strokeWidth:"3",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"}),O.createElement("path",{className:"dashed",fill:"none",stroke:"#E0E0E0",strokeWidth:"4",strokeLinejoin:"round",strokeMiterlimit:"10",d:"M1.4,2.1c0,0,86,57,211.5,41.5s172.5-24.5,289,81"}),O.createElement("polyline",{id:"arrow",points:"0,-9 18,0 0,9 5,0",fill:"#db5862"},O.createElement("animateMotion",{rotate:"auto",begin:"1s",dur:"1.6s",repeatCount:"1",fill:"freeze"},O.createElement("mpath",{href:"#Path-1"}))),O.createElement("text",{className:"pointer-events-none",fill:"#E0E0E0",fontSize:"33",fontFamily:"Arial",transform:"rotate(180, 227.5, 43.5) translate(0,-7)"},O.createElement("textPath",{href:"#Path-1",startOffset:"64%",textAnchor:"middle"},"Shared Boards",O.createElement("animate",{attributeName:"opacity",values:"1;0;1",dur:"4s",repeatCount:"indefinite"}))))));function DD(){const[t]=n1({words:["Manage Your Tasks","Organize Your Projects","Boost Your Productivity","Plan,Execute,Succeed","Track Your Progress","Collaborate Effortlessly","Get Things Done","Your Work Simplified"],loop:!0,typeSpeed:120,deleteSpeed:90,delaySpeed:3e3}),[e,n]=D.useState(!1),[r,i]=D.useState(1),s=()=>{n(!0),i(a=>(a+1)%3)},o=()=>{n(!1),i(a=>(a-1+3)%3)};return React.createElement("div",{className:"bg-zinc-800 overflow-x-hidden box-border   h-screen flex  overflow-y-hidden p-5 justify-center homecontiner"},React.createElement("div",{className:"flex sm:w-[100%] mb-2  items-center  mt-[40%] sm:shadow-xl  max-w-[900px] flex-col sm:mt-[10%]"},React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"white",onClick:o,className:"size-9 fixed top-[55%] leftarrow  flex self-start ml-.5 cursor-pointer hover:stroke-gray-300 z-10 "},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 19.5 8.25 12l7.5-7.5"})),React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"white",onClick:s,className:"size-9 fixed top-[55%] rightarrow  flex self-end mr-.5 cursor-pointer hover:stroke-gray-300 z-10 "},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m8.25 4.5 7.5 7.5-7.5 7.5"})),React.createElement("div",{className:"workSpaceContainer "},React.createElement(Sy,{mode:"wait"},r===0&&React.createElement(sa.div,{key:"workSpace0",className:"Your-Board",initial:{x:e?window.innerWidth<800?"100%":"70%":window.innerWidth<800?"-100%":"-70%",opacity:0},animate:{x:0,opacity:1},exit:{x:e?window.innerWidth<800?"-100%":"-70%":window.innerWidth<800?"100%":"70%",opacity:0},transition:{duration:.4}},React.createElement(CD,null)),r===1&&React.createElement(sa.div,{key:"yourBoards",className:"Your-Board",initial:{x:e?window.innerWidth<800?"100%":"70%":window.innerWidth<800?"-100%":"-70%",opacity:0},animate:{x:"0",opacity:1},exit:{x:e?window.innerWidth<800?"-100%":"-70%":window.innerWidth<800?"100%":"70%",opacity:0},transition:{duration:.4}},React.createElement("div",{className:"flex justify-center relative"},React.createElement("h1",{className:" absolute ml-1.5 text-center text-gray-300 top-[13.8%] sm:top-[13.1%] pointer-events-none  text-2xl sm:text-3xl  "},t,React.createElement(r1,null)),React.createElement("hr",{className:"NewtonsCradleHr "}),React.createElement(AD,{className:!0}),React.createElement(kD,null),React.createElement(ID,{className:" absolute"}))),r===2&&React.createElement(sa.div,{key:"workSpace2",className:"Your-Board",initial:{x:e?window.innerWidth<800?"100%":"70%":window.innerWidth<800?"-100%":"-70%",opacity:0},animate:{x:0,opacity:1},exit:{x:e?window.innerWidth<800?"-100%":"-70%":window.innerWidth<800?"100%":"70%",opacity:0},transition:{duration:.4}},React.createElement(PD,null))))))}const ND=()=>O.createElement("div",{id:"box"},O.createElement("div",{className:"cat"},O.createElement("div",{className:"head"},O.createElement("div",{className:"ears"},O.createElement("div",{className:"ear left"}),O.createElement("div",{className:"ear right"})),O.createElement("div",{className:"eyes"},O.createElement("div",{className:"eye left"}),O.createElement("div",{className:"eye right"})),O.createElement("div",{className:"muzzle"},O.createElement("div",{className:"nose"}))),O.createElement("div",{className:"body"},O.createElement("div",{className:"paw"})),O.createElement("div",{className:"tail absolute"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"},O.createElement("div",{className:"tail-segment"}))))))))))))))))))))));function MD({avatarColor:t,avatarIn:e,userEmail:n,userName:r}){const i=Hr(),s=async()=>{try{await S5(ke),i("/")}catch(a){console.error("Error logging out:",a)}},o=()=>{i("/")};return O.createElement("div",{style:{backgroundColor:"#37393C"},className:"h-fit  gap-2 flex flex-col w-64 text-gray-300   py-4  shadow-xl  fixed z-[10000] rounded-md top-12 right-1"},O.createElement("p",{className:"text-sm mb-2 px-5"},"ACCOUNT"),O.createElement("div",{className:"flex px-4"},O.createElement("div",{className:"flex   justify-center items-center  hover:opacity-85 cursor-pointer "},O.createElement("div",{className:" pointer-events-none mr-2 select-none  mb-1 ",style:{backgroundColor:`${t}`,color:"rgb(39, 39, 42)",width:"40px",height:"40px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:"20px",border:"1px solid #555"}},e.toUpperCase())),O.createElement("div",null,O.createElement("p",{className:"text-md mb-[-4px]"},r),O.createElement("p",{className:"text-sm opacity-90"},n))),O.createElement("div",{className:"flex justify-center"},O.createElement("hr",{className:"border-0 border-b w-[95%]  opacity-25 "})),O.createElement(bc,{to:"CardsArchive"},O.createElement("div",{className:"flex items-center cursor-pointer px-5 py-1.5 hover:bg-zinc-800  w-full justify-between"},O.createElement("p",{className:"text-[.9rem]"},"Cards Archive"))),O.createElement("div",{className:"flex justify-center"},O.createElement("hr",{className:"border-0 border-b w-[95%]  opacity-25 "})),r!=="Guest"&&O.createElement("div",{className:"flex items-center cursor-pointer px-5 py-1.5 hover:bg-zinc-800  w-full justify-between"},O.createElement("p",{onClick:s,className:"text-[.9rem]"},"Log out")),r==="Guest"&&O.createElement("div",{className:"flex items-center cursor-pointer px-5 py-1.5 hover:bg-zinc-800  w-full justify-between"},O.createElement("p",{onClick:o,className:"text-[.9rem]"},"Sign in")))}function OD(t){const e=Hr(),[n,r]=D.useState(!1),i=D.useRef();D.useEffect(()=>{const a=new IntersectionObserver(([l])=>{l.isIntersecting&&(r(!0),a.disconnect())},{threshold:.1});return i.current&&a.observe(i.current),()=>{i.current&&a.unobserve(i.current)}},[i]);const s=n&&t.backgroundImage?{backgroundImage:`url('${t.backgroundImage}')`,backgroundSize:"cover",backgroundPosition:"center",color:"rgba(255,255,255,0)"}:{},o=()=>{e(`/Board/${t.id}`,{state:t})};return O.createElement("div",{onClick:o,className:"flex items-center mb-0.5 gap-2   cursor-pointer"},O.createElement("div",{ref:i,style:s,className:`p-5 h-[40px]  w-[60px] hover:opacity-85 cursor-pointer rounded-sm ${t.background}`}),O.createElement("h2",{className:"text-zinc-300  text-lg truncate whitespace-nowrap overflow-hidden"},t.title))}function VD(){const t=D.useRef(null),[e,n]=D.useState([]),[r,i]=D.useState(!1),s=D.useRef(null),[o,a]=D.useState({}),[l,c]=D.useState(!1);D.useEffect(()=>{const v=pr(ke,_=>{_?(async()=>{const R=Kr(te,`users/${_.uid}/Boards`),x=(await Xr(R)).docs.map(I=>({id:I.id,data:I.data()}));n(x)})().catch(R=>console.error("Error fetching lists:",R)):n([])});return()=>v()},[]);const u=v=>{s.current&&!s.current.contains(v.target)&&i(!1)};D.useEffect(()=>(document.addEventListener("mousedown",u),()=>{document.removeEventListener("mousedown",u)}),[]);const f=v=>{t.current&&!t.current.contains(v.target)&&c(!1)};D.useEffect(()=>(document.addEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}),[]),D.useEffect(()=>{const v=pr(ke,_=>{_&&(async()=>{try{const R=le(te,"users",_.uid),N=await eo(R);if(N.exists()){const x={id:N.id,data:N.data()};a(x.data)}else console.log("No such board!")}catch(R){console.error("Error fetching board:",R)}})()});return()=>v()},[]);const p=o.avatar?o.avatar.color:"#111827",d=o.avatar?o.avatar.initials:"A",g=o.name||"Guest",m=o.email||"example@example.com";return React.createElement("div",null,l&&React.createElement("div",{ref:t}," ",React.createElement(MD,{avatarColor:p,avatarIn:d,userName:g,userEmail:m})),React.createElement("nav",{className:"border-b-2 border-gray-500 h-[46px] sm:h-[47.5px] bg-zinc-800 text-lg absolute w-screen z-10"},React.createElement("div",{className:"flex justify-between items-center"},React.createElement("div",{className:"flex items-center gap-5"},React.createElement(bc,{to:"/Home"},React.createElement("div",{className:"text-zinc-50 cursor-pointer flex gap-5 cat catlogo items-center font-bold"},React.createElement(ND,null),"KittyTask")),React.createElement("div",{className:"text-gray-200 relative text-md flex items-center "},r&&React.createElement("div",{ref:s,className:"w-[200px] h-fit left-[-55px]   absolute p-2 px-3 rounded-md shadow-xl  bg-zinc-700 top-10"},React.createElement("div",{className:"flex flex-col "},React.createElement("h1",{className:"text-center"}," All Boards"),React.createElement("hr",{className:"w-full border-0 border-b border-gray-300 border-opacity-85 my-2"}),React.createElement("div",{className:"max-h-[200px] overflow-y-auto "},e.map(v=>React.createElement("div",{key:v.id,className:"hover:bg-neutral-600 rounded-md p-1"},React.createElement(OD,{key:v.id,id:v.id,title:v.data.title,background:v.data.background,backgroundImage:v.data.backgroundImage,boardVisibility:v.data.boardVisibility})))))),React.createElement("div",{className:" px-3 flex items-center cursor-pointer rounded-md py-.5 hover:bg-zinc-700",onClick:()=>{i(!r)}},"Boards",React.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.4",stroke:"currentColor",className:"size-5 ml-0.5"},React.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})))," "),React.createElement(bc,{to:"/CreateBoard"},React.createElement("button",{className:"ml-[-.5em] px-3 py-.5 bg-pink-500 hover:bg-pink-700 text-gray-50 rounded-md"},"Create"))),React.createElement("div",{onClick:()=>{c(!l)},className:"flex mr-2 justify-center items-center hover:opacity-85 cursor-pointer"},React.createElement("div",{className:"select-none mb-1 border-2",style:{backgroundColor:p,color:"rgb(39, 39, 42)",width:"30px",height:"30px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:"20px",border:"0 solid #555"}},d.toUpperCase())))))}function LD(){const[t,e]=D.useState(!1),[n,r]=D.useState(""),[i,s]=D.useState(""),[o,a]=D.useState(""),l=Hr(),[c,u]=D.useState(""),[f,p]=D.useState(""),[d,g]=D.useState(""),[m,v]=D.useState(""),[_,C]=D.useState(!1),R=tv(),N=async w=>{if(w.preventDefault(),a(""),C(!0),!n||!i){a("Please fill in both email and password."),C(!1);return}try{const T=await E5(ke,n,i);l("/Home")}catch(T){console.error("Login error:",T),a("Error logging in: "+T.message)}finally{C(!1)}},x=w=>{let T=0;for(let A=0;A<w.length;A++)T=w.charCodeAt(A)+((T<<5)-T);return`hsl(${T%360}, 70%, 80%)`},I=w=>w.split(" ").map(T=>T[0]).join(""),E=async w=>{if(w.preventDefault(),v(""),!c||!f||!d){v("Please fill in all fields (name, email, and password).");return}C(!0);const T=qv();try{const A=(await w5(T,f,d)).user,k=x(c),B=I(c);await on(le(R,"users",A.uid),{name:c,email:f,createdAt:new Date,avatar:{color:k,initials:B}}),l("/Home")}catch(P){console.error("Error creating account:",P),v("Error creating account: "+P.message)}finally{C(!1)}},y=()=>{e(!t)};return O.createElement("div",{className:"h-screen w-screen  flex justify-center items-center overflow-y-hidden  "},_&&O.createElement("div",{className:"flex flex-col justify-center items-center gap-6 p-4 "},O.createElement(t1,{variant:"bounce",color:"#d33dad",size:"large",text:"",textColor:"#f8f8f8"}),O.createElement("p",{className:"text-[1.3rem] font-bold text-center text-gray-900",style:{maxWidth:"350px"}},"Hang tight! We're preparing everything for you...")),!_&&O.createElement("div",{className:`flex mx-52 my-auto  p-20 py-52 shadow-2xl justify-center rounded-xl  items-center gap-[17%] sm:gap-40 logincontainer ${t?"animate-right":""}`},O.createElement("div",{className:" flex flex-col justify-center items-center  "},O.createElement("div",{className:"signinmode flex flex-col justify-start items-center"},O.createElement("h1",{className:" text-center text-2xl sm:text-2xl text-gray-100 mb-1 "},"Already have an account?"),O.createElement("p",{className:" text-center text-lg text-gray-100 "},"Welcome back! Sign in to continue organizing and making progress."),O.createElement("button",{onClick:y,className:"bg-blue-500 hover:bg-blue-600 text-gray-100 m-4  py-1.5 px-20 rounded-2xl  text-m"},"Sign in"),O.createElement("img",{src:"./cat.svg",className:" hover:scale-110 w-[80%] max-w-[440px] hover:transform-cpu",alt:"cat"})),O.createElement("form",{className:"singinfrom flex flex-col justify-center items-center",onSubmit:N},O.createElement("h1",{className:" text-2xl text-black font-bold opacity-85 "},"Sign in"),O.createElement("div",{className:"flex relative"},O.createElement("svg",{className:"size-6 absolute top-4 left-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor"},O.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"})),O.createElement("input",{type:"email",placeholder:"Email",className:"bg-neutral-300 bg-opacity-70 p-2 px-9 m-2 text-black  rounded-2xl w-72",onChange:w=>r(w.target.value)})),O.createElement("div",{className:"flex relative"},O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",className:"size-6 absolute top-4 left-4"},O.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"})),O.createElement("input",{type:"password",placeholder:"Password",className:"bg-neutral-300 bg-opacity-70 p-2 px-9 m-2 text-black  rounded-2xl w-72",onChange:w=>s(w.target.value)})),O.createElement("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-600 text-gray-100 m-4 sm:mt-5   py-1.5 px-9 rounded-2xl  text-m"},"Sign in"),o&&O.createElement("p",{className:"text-center text-xs  text-red-600"},"Oops! It looks like your email or password is incorrect. Please try again."))),O.createElement("div",{className:"flex flex-col justify-center items-center  justify-self-end"},O.createElement("div",{className:"signupmode flex flex-col justify-center items-center"},O.createElement("h1",{className:" text-center text-2xl sm:text-2xl text-gray-100 mb-1 "},"New to KittyTask??"),O.createElement("p",{className:" text-center text-lg text-gray-100 "},"Start organizing your life today! Sign up to manage your tasks, projects, and ideas all in one place."),O.createElement("button",{onClick:y,className:"bg-blue-500 hover:bg-blue-600 text-gray-100 m-4  py-1.5 px-20 rounded-2xl  text-m"},"Sign up"),O.createElement("img",{src:"./cat2.svg",className:" hover:scale-110 hover:transform-cpu w-[80%] max-w-[440px]",alt:"cat"})),O.createElement("form",{className:"signupfrom flex flex-col  items-center",onSubmit:E},O.createElement("h1",{className:" text-2xl text-black font-bold opacity-85 "},"Sign up"),O.createElement("div",{className:"flex relative"},O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",className:"size-6 absolute top-4 left-4"},O.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"})),O.createElement("input",{type:"text",placeholder:"Username",className:"bg-neutral-300 bg-opacity-70 p-2 px-9 m-2 text-black  rounded-2xl w-72",onChange:w=>u(w.target.value)})),O.createElement("div",{className:"flex relative"},O.createElement("svg",{className:"size-6 absolute top-4 left-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor"},O.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"})),O.createElement("input",{type:"email",placeholder:"Email",className:"bg-neutral-300 bg-opacity-70 p-2 px-9 m-2 text-black  rounded-2xl w-72",onChange:w=>p(w.target.value)})),O.createElement("div",{className:"flex relative"},O.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1,stroke:"currentColor",className:"size-6 absolute top-4 left-4"},O.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"})),O.createElement("input",{type:"password",placeholder:"Password",className:"bg-neutral-300 bg-opacity-70 p-2 px-9 m-2 mb-2 text-black  rounded-2xl w-72",onChange:w=>g(w.target.value)})),O.createElement("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-600 text-gray-100 fm-4  sm:mt-5  py-1.5 px-9 rounded-2xl  text-m"},"Sign up"),m&&O.createElement("p",{className:"text-center text-xs  text-red-600"},m)))))}function BD(){const[t,e]=D.useState({});D.useEffect(()=>{const o=pr(ke,a=>{a&&(async()=>{try{const c=le(te,"users",a.uid),u=await eo(c);if(u.exists()){const f={id:u.id,data:u.data()};e(f.data)}else console.log("No such board!")}catch(c){console.error("Error fetching board:",c)}})()});return()=>o()},[]);const n=t.avatar?t.avatar.color:"#111827",r=t.avatar?t.avatar.initials:"A",i=t.name||"Guest",s=t.email||"example@example.com";return React.createElement("div",{className:"flex bg-zinc-800 w-screen h-screen pt-20 pb-10 justify-center text-gray-300 "},React.createElement("div",{className:"w-screen relative max-w-[1000px] rounded-lg pt-2 px-2 sm:p-7  bg-zinc-800 shadow-xl  "},React.createElement("span",{className:"CardsArchive"},"Cards Archive"),React.createElement("div",{className:"flex mr-2 mt-[7em]  hover:opacity-85 cursor-pointer w-fit"},React.createElement("div",{className:"flex hover:opacity-85 cursor-pointer justify-center items-center "},React.createElement("div",{className:" pointer-events-none mr-2 select-none  mb-1 ",style:{backgroundColor:`${n}`,color:"rgb(39, 39, 42)",width:"43px",height:"43px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:"20px",border:"1px solid #555"}},r.toUpperCase())),React.createElement("div",null,React.createElement("p",{className:"text-xl mb-[-4px]"},i),React.createElement("p",{className:"text-md opacity-90"},s))),React.createElement("hr",{className:" w-full mt-2 border-0 border-b border-gray-400 border-opacity-75"}),React.createElement("div",{className:"flex w-full h-[30vh] text-3xl justify-center items-center"},"Come in the future! :)")))}function FD(){return O.createElement("div",{className:"bg-zinc-800 overflow-x-hidden box-border   h-screen flex  overflow-y-hidden p-5 justify-center homecontiner"},O.createElement("div",{className:"flex sm:w-[100%] mb-2  items-center  mt-[40%] sm:shadow-xl  max-w-[900px] flex-col sm:mt-[10%]"},O.createElement(Zh,null)))}function UD(){return React.createElement(Sx,null,React.createElement(jD,null))}function jD(){const t=Mi();return React.createElement("div",{className:"app"},t.pathname!=="/"&&React.createElement(VD,null),React.createElement(yx,null,React.createElement(oi,{path:"/CardsArchive",element:React.createElement(BD,null)}),React.createElement(oi,{path:"/Home",element:React.createElement(DD,null)}),React.createElement(oi,{path:"/",element:React.createElement(LD,null)}),React.createElement(oi,{path:"/Board/:id",element:React.createElement(ED,null)}),React.createElement(oi,{path:"/CreateBoard",element:React.createElement(FD,null)})))}og(document.getElementById("root")).render(React.createElement(D.StrictMode,null,React.createElement(C1,null,React.createElement(UD,null))));
