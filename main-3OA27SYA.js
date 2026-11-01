import{$n as pg,$t as cr$1,A as Gi$1,An as ju,At as WE,B as Kr$1,Bn as nE,C as En$2,Cn as ie$3,Cr as we$4,D as Fp,Dn as jo$2,Dr as yF,E as Fo,En as jE,Er as xc,Et as Vi$1,F as Iv,Fn as lg,G as Mp,Gt as _g,H as Le$2,Hn as ng,I as JI,In as lo$1,It as Xy,J as ND,Jn as og,Jt as _p,Kt as _i$1,L as Jh,Ln as lr$1,Lt as Y$4,M as Hp,Mt as Wi$1,N as IF,Nn as kp,Nt as Wp,On as jp,Ot as Vp,P as Ip,Pn as kt$2,Q as Nu,R as Kl,Rt as YI,S as Em,Sn as hu,Sr as wF,St as Ui$1,Tn as j$1,Tr as xD,Tt as VE,U as Lp,Un as ni$1,Ut as _c,Vt as _,W as MD,Wn as nm,Wt as _e$5,X as Ni$1,Xt as bE,Y as Nh,Yn as om,Yt as bD,Z as Np,Zn as pF,Zt as bl,_ as Do$2,_n as hF,_r as ug,_t as T$2,a as An$2,ar as rg,at as Oy,b as EE,bn as hp,bt as UE,c as Bl,cn as fg,ct as R$1,d as Ce$4,dn as ge$2,dr as tD,en as dg,er as pr$1,et as Oa,f as Cl,fn as gg,fr as tE,ft as Rn$2,g as DF,gn as hE,gt as Sp,hn as gt$4,hr as tt$2,ht as Sc,i as Ac,ir as qc,it as Ot$3,jn as kc,jt as Wh,k as G$4,kr as ze$2,kt as W$1,l as Bo,lt as RD,m as DD,mn as gp,mr as tg,mt as SE,n as $d,nr as pu,on as fD,ot as PE,p as Cp,pn as gi$1,pt as Rp,q as N$1,qn as oe$2,qt as _n$3,r as $h,rn as eg,rr as q$3,rt as On$2,s as BE,sn as fF,sr as rm,st as Pu,t as $E,tn as dh,tr as pt$4,un as gF,ur as sg,v as Dp,vn as hI,vr as uh,vt as TD,w as Er,wn as ig,wr as wp,x as EF,xn as hr$1,xr as wE,xt as Uh,y as ED,yn as hg,yr as vE,yt as Te$2,z as Kp,zn as mg,zt as Yp}from"./chunk-BZjIrA2r.js";import{A as ni$2,C as de,D as io$1,F as yu,S as bn$3,_ as Zo,d as Ls,f as Ns,g as Qo,h as Ql,i as B,m as Pr,r as Ao$1,s as Dr,u as Ko$1,w as dt$2}from"./chunk-ChBujf22.js";var i=class a{isDarkMode=jo$2(this.getInitialTheme());constructor(){this.applyTheme(this.isDarkMode())}toggleTheme(){this.applyTheme(!this.isDarkMode())}setTheme(e){this.applyTheme(e)}applyTheme(e){this.isDarkMode.set(e),document.body.classList.toggle(`dark-theme`,e),localStorage.setItem(`workforce360_theme`,e?`dark`:`light`)}getInitialTheme(){let e=localStorage.getItem(`workforce360_theme`);if(e===`dark`||e===`light`)return e===`dark`;let o=localStorage.getItem(`workforce360_settings`);if(o)try{let t=JSON.parse(o);if(typeof t==`object`&&t!==null&&`darkMode`in t&&typeof t.darkMode==`boolean`)return t.darkMode}catch{console.warn(`Could not load saved theme preference.`)}return document.body.classList.contains(`dark-theme`)}static ɵfac=function(o){return new(o||a)};static ɵprov=ie$3({token:a,factory:a.ɵfac,providedIn:`root`})};var t$1=`http://127.0.0.1:8000/api`;var d=class r{http=N$1(ni$2);tokenKey=`workforce360_access_token`;userState=jo$2(null);user=this.userState.asReadonly();isAuthenticated=xD(()=>this.userState()!==null);getAccessToken(){return sessionStorage.getItem(this.tokenKey)}login(t){return this.clearSession(),this.http.post(`${t$1}/auth/login`,t).pipe(Cl(e=>{sessionStorage.setItem(this.tokenKey,e.access_token)}),bl(()=>this.fetchCurrentUser()),Ui$1(e=>(this.clearSession(),Uh(()=>e))))}restoreSession(){return this.getAccessToken()?this.fetchCurrentUser():(this.clearSession(),$h(null))}clearSession(){sessionStorage.removeItem(this.tokenKey),this.userState.set(null)}fetchCurrentUser(){return this.http.get(`${t$1}/auth/me`).pipe(Cl(t=>this.userState.set(t)))}static ɵfac=function(e){return new(e||r)};static ɵprov=ie$3({token:r,factory:r.ɵfac,providedIn:`root`})};function G$3(n){return n.buttons===0||n.detail===0}function $$2(n){let a=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!a&&a.identifier===-1&&(a.radiusX==null||a.radiusX===1)&&(a.radiusY==null||a.radiusY===1)}var Et$1;function _e$4(){if(Et$1==null){let n=typeof document<`u`?document.head:null;Et$1=!!(n&&(n.createShadowRoot||n.attachShadow))}return Et$1}function It$1(n){if(_e$4()){let a=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&a instanceof ShadowRoot)return a}return null}function x(n){if(n.composedPath)try{return n.composedPath()[0]}catch{}return n.target}var kt$1;try{kt$1=typeof Intl<`u`&&Intl.v8BreakIterator}catch{kt$1=!1}var p=(()=>{class n{_platformId=N$1(nm);isBrowser=this._platformId?yu(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||kt$1)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(e){return new(e||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var Y$3;function xe$2(){if(Y$3==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>Y$3=!0}))}finally{Y$3=Y$3||!1}return Y$3}function z$2(n){return xe$2()?n:!!n.capture}function T$1(n){return n instanceof hr$1?n.nativeElement:n}var Ne$2=new R$1(`cdk-input-modality-detector-options`);var Se$2={ignoreKeys:[18,17,224,91,16]};var we$3=650;var At$2={passive:!0,capture:!0};var Ee$1=(()=>{class n{_platform=N$1(p);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new _n$3(null);_options;_lastTouchMs=0;_onKeydown=t=>{this._options?.ignoreKeys?.some(e=>e===t.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=x(t))};_onMousedown=t=>{Date.now()-this._lastTouchMs<we$3||(this._modality.next(G$3(t)?`keyboard`:`mouse`),this._mostRecentTarget=x(t))};_onTouchstart=t=>{if($$2(t)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=x(t)};constructor(){let t=N$1(_e$5),e=N$1(Fo),o=N$1(Ne$2,{optional:!0});if(this._options=W$1(W$1({},Se$2),o),this.modalityDetected=this._modality.pipe(pg(1)),this.modalityChanged=this.modalityDetected.pipe(sg()),this._platform.isBrowser){let i=N$1(lr$1).createRenderer(null,null);this._listenerCleanups=t.runOutsideAngular(()=>[i.listen(e,`keydown`,this._onKeydown,At$2),i.listen(e,`mousedown`,this._onMousedown,At$2),i.listen(e,`touchstart`,this._onTouchstart,At$2)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(t=>t())}static ɵfac=function(e){return new(e||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var Q$1=(function(n){return n[n.IMMEDIATE=0]=`IMMEDIATE`,n[n.EVENTUAL=1]=`EVENTUAL`,n})(Q$1||{});var Ie=new R$1(`cdk-focus-monitor-default-options`);var mt$3=z$2({passive:!0,capture:!0});var Mt$2=(()=>{class n{_ngZone=N$1(_e$5);_platform=N$1(p);_inputModalityDetector=N$1(Ee$1);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=N$1(Fo);_stopInputModalityDetector=new Y$4;constructor(){let t=N$1(Ie,{optional:!0});this._detectionMode=t?.detectionMode||Q$1.IMMEDIATE}_rootNodeFocusAndBlurListener=t=>{let e=x(t);for(let o=e;o;o=o.parentElement)t.type===`focus`?this._onFocus(t,o):this._onBlur(t,o)};monitor(t,e=!1){let o=T$1(t);if(!this._platform.isBrowser||o.nodeType!==1)return $h();let i=It$1(o)||this._document,s=this._elementInfo.get(o);if(s)return e&&(s.checkChildren=!0),s.subject;let c={checkChildren:e,subject:new Y$4,rootNode:i};return this._elementInfo.set(o,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(t){let e=T$1(t),o=this._elementInfo.get(e);o&&(o.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(o))}focusVia(t,e,o){let i=T$1(t);i===this._document.activeElement?this._getClosestElementsInfo(i).forEach(([c,y])=>this._originChanged(c,e,y)):(this._setOrigin(e),typeof i.focus==`function`&&i.focus(o))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?`mouse`:`program`}_shouldBeAttributedToTouch(t){return this._detectionMode===Q$1.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,e){t.classList.toggle(`cdk-focused`,!!e),t.classList.toggle(`cdk-touch-focused`,e===`touch`),t.classList.toggle(`cdk-keyboard-focused`,e===`keyboard`),t.classList.toggle(`cdk-mouse-focused`,e===`mouse`),t.classList.toggle(`cdk-program-focused`,e===`program`)}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t===`touch`&&e,this._detectionMode===Q$1.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?we$3:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o)}})}_onFocus(t,e){let o=this._elementInfo.get(e),i=x(t);!o||!o.checkChildren&&e!==i||this._originChanged(e,this._getFocusOrigin(i),o)}_onBlur(t,e){let o=this._elementInfo.get(e);!o||o.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(o,null))}_emitOrigin(t,e){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let e=t.rootNode,o=this._rootNodeFocusListenerCount.get(e)||0;o||this._ngZone.runOutsideAngular(()=>{e.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,mt$3),e.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,mt$3)}),this._rootNodeFocusListenerCount.set(e,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(gg(this._stopInputModalityDetector)).subscribe(i=>{this._setOrigin(i,!0)}))}_removeGlobalListeners(t){let e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){let o=this._rootNodeFocusListenerCount.get(e);o>1?this._rootNodeFocusListenerCount.set(e,o-1):(e.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,mt$3),e.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,mt$3),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,o){this._setClasses(t,e),this._emitOrigin(o,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){let e=[];return this._elementInfo.forEach((o,i)=>{(i===t||o.checkChildren&&i.contains(t))&&e.push([i,o])}),e}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:e,mostRecentModality:o}=this._inputModalityDetector;if(o!==`mouse`||!e||e===t||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`||t.disabled)return!1;let i=t.labels;if(i){for(let s=0;s<i.length;s++)if(i[s].contains(e))return!0}return!1}static ɵfac=function(e){return new(e||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var lt$2=new WeakMap;var O$1=(()=>{class n{_appRef;_injector=N$1(oe$2);_environmentInjector=N$1(ge$2);load(t){let e=this._appRef=this._appRef||this._injector.get(Ni$1),o=lt$2.get(e);o||(o={loaders:new Set,refs:[]},lt$2.set(e,o),e.onDestroy(()=>{lt$2.get(e)?.refs.forEach(i=>i.destroy()),lt$2.delete(e)})),o.loaders.has(t)||(o.loaders.add(t),o.refs.push(wF(t,{environmentInjector:this._environmentInjector})))}static ɵfac=function(e){return new(e||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var Tt$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=YI({type:n,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(e,o){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return n})();var ut$2;function an$1(){if(ut$2===void 0&&(ut$2=null,typeof window<`u`)){let n=window;if(n.trustedTypes!==void 0)try{ut$2=n.trustedTypes.createPolicy(`angular#components`,{createHTML:a=>a})}catch(a){console.error(a)}}return ut$2}function on$2(n){return an$1()?.createHTML(n)||n}function ke$1(n,a,t){n.innerHTML=on$2(t.sanitize(G$4.HTML,a)||``)}function Dt$1(n){return Array.isArray(n)?n:[n]}var Ae$1=new Set;var R;var bt$3=(()=>{class n{_platform=N$1(p);_nonce=N$1(om,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):sn$2}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&rn$2(t,this._nonce),this._matchMedia(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();function rn$2(n,a){if(!Ae$1.has(n))try{R||(R=document.createElement(`style`),a&&R.setAttribute(`nonce`,a),R.setAttribute(`type`,`text/css`),document.head.appendChild(R)),R.sheet&&(R.sheet.insertRule(`@media ${n.replace(/[{}]/g,``)} {body{ }}`,0),Ae$1.add(n))}catch(t){console.error(t)}}function sn$2(n){return{matches:n===`all`||n===``,media:n,addListener:()=>{},removeListener:()=>{}}}var Ct$2=(()=>{class n{_mediaMatcher=N$1(bt$3);_zone=N$1(_e$5);_queries=new Map;_destroySubject=new Y$4;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Me$1(Dt$1(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=Me$1(Dt$1(t)).map(s=>this._registerQuery(s).observable),i=Jh(o);return i=Kr$1(i.pipe(Wi$1(1)),i.pipe(pg(1),ig(0))),i.pipe(ze$2(s=>{let c={matches:!1,breakpoints:{}};return s.forEach(({matches:y,query:E})=>{c.matches=c.matches||y,c.breakpoints[E]=y}),c}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),i={observable:new T$2(s=>{let c=y=>this._zone.run(()=>s.next(y));return e.addListener(c),()=>{e.removeListener(c)}}).pipe(hg(e),ze$2(({matches:s})=>({query:t,matches:s})),gg(this._destroySubject)),mql:e};return this._queries.set(t,i),i}static ɵfac=function(e){return new(e||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();function Me$1(n){return n.map(a=>a.split(`,`)).reduce((a,t)=>a.concat(t)).map(a=>a.trim())}var cn$2=(()=>{class n{create(t){return typeof MutationObserver>`u`?null:new MutationObserver(t)}static ɵfac=function(e){return new(e||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var Te$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=JI({type:n});static ɵinj=Bl({providers:[cn$2]})}return n})();var dn$2=(()=>{class n{_platform=N$1(p);isDisabled(t){return t.hasAttribute(`disabled`)}isVisible(t){return ln$2(t)&&getComputedStyle(t).visibility===`visible`}isTabbable(t){if(!this._platform.isBrowser)return!1;let e=mn$1(yn$2(t));if(e&&(De$1(e)===-1||!this.isVisible(e)))return!1;let o=t.nodeName.toLowerCase(),i=De$1(t);return t.hasAttribute(`contenteditable`)?i!==-1:o===`iframe`||o===`object`||this._platform.WEBKIT&&this._platform.IOS&&!vn$2(t)?!1:o===`audio`?t.hasAttribute(`controls`)?i!==-1:!1:o===`video`?i===-1?!1:i!==null?!0:this._platform.FIREFOX||t.hasAttribute(`controls`):t.tabIndex>=0}isFocusable(t,e){return gn$1(t)&&!this.isDisabled(t)&&(e?.ignoreVisibility||this.isVisible(t))}static ɵfac=function(e){return new(e||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();function mn$1(n){try{return n.frameElement}catch{return null}}function ln$2(n){return!!(n.offsetWidth||n.offsetHeight||typeof n.getClientRects==`function`&&n.getClientRects().length)}function un$1(n){let a=n.nodeName.toLowerCase();return a===`input`||a===`select`||a===`button`||a===`textarea`}function bn$2(n){return fn$2(n)&&n.type==`hidden`}function pn$1(n){return hn$2(n)&&n.hasAttribute(`href`)}function fn$2(n){return n.nodeName.toLowerCase()==`input`}function hn$2(n){return n.nodeName.toLowerCase()==`a`}function Oe$1(n){if(!n.hasAttribute(`tabindex`)||n.tabIndex===void 0)return!1;let a=n.getAttribute(`tabindex`);return!!(a&&!isNaN(parseInt(a,10)))}function De$1(n){if(!Oe$1(n))return null;let a=parseInt(n.getAttribute(`tabindex`)||``,10);return isNaN(a)?-1:a}function vn$2(n){let a=n.nodeName.toLowerCase(),t=a===`input`&&n.type;return t===`text`||t===`password`||a===`select`||a===`textarea`}function gn$1(n){return bn$2(n)?!1:un$1(n)||pn$1(n)||n.hasAttribute(`contenteditable`)||Oe$1(n)}function yn$2(n){return n.ownerDocument&&n.ownerDocument.defaultView||window}var Re$1=new R$1(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var Pe$1=new R$1(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var _n$2=0;var xn$1=(()=>{class n{_ngZone=N$1(_e$5);_defaultOptions=N$1(Pe$1,{optional:!0});_liveElement;_document=N$1(Fo);_sanitizer=N$1(Qo);_previousTimeout;_currentPromise;_currentResolve;constructor(){let t=N$1(Re$1,{optional:!0});this._liveElement=t||this._createLiveElement()}announce(t,...e){let o=this._defaultOptions,i,s;return e.length===1&&typeof e[0]==`number`?s=e[0]:[i,s]=e,this.clear(),clearTimeout(this._previousTimeout),i||(i=o&&o.politeness?o.politeness:`polite`),s==null&&o&&(s=o.duration),this._liveElement.setAttribute(`aria-live`,i),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(c=>this._currentResolve=c)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!t||typeof t==`string`?this._liveElement.textContent=t:ke$1(this._liveElement,t,this._sanitizer),typeof s==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),s)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let t=`cdk-live-announcer-element`,e=this._document.getElementsByClassName(t),o=this._document.createElement(`div`);for(let i=0;i<e.length;i++)e[i].remove();return o.classList.add(t),o.classList.add(`cdk-visually-hidden`),o.setAttribute(`aria-atomic`,`true`),o.setAttribute(`aria-live`,`polite`),o.id=`cdk-live-announcer-${_n$2++}`,this._document.body.appendChild(o),o}_exposeAnnouncerToModals(t){let e=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let o=0;o<e.length;o++){let i=e[o],s=i.getAttribute(`aria-owns`);s?s.indexOf(t)===-1&&i.setAttribute(`aria-owns`,s+` `+t):i.setAttribute(`aria-owns`,t)}}static ɵfac=function(e){return new(e||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var D=(function(n){return n[n.NONE=0]=`NONE`,n[n.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,n[n.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,n})(D||{});var Ce$3=`cdk-high-contrast-black-on-white`;var Fe$1=`cdk-high-contrast-white-on-black`;var Ft$1=`cdk-high-contrast-active`;var Le$1=(()=>{class n{_platform=N$1(p);_hasCheckedHighContrastMode=!1;_document=N$1(Fo);_breakpointSubscription;constructor(){this._breakpointSubscription=N$1(Ct$2).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return D.NONE;let t=this._document.createElement(`div`);t.style.backgroundColor=`rgb(1,2,3)`,t.style.position=`absolute`,this._document.body.appendChild(t);let e=this._document.defaultView||window,o=e&&e.getComputedStyle?e.getComputedStyle(t):null,i=(o&&o.backgroundColor||``).replace(/ /g,``);switch(t.remove(),i){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return D.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return D.BLACK_ON_WHITE}return D.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Ft$1,Ce$3,Fe$1),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===D.BLACK_ON_WHITE?t.add(Ft$1,Ce$3):e===D.WHITE_ON_BLACK&&t.add(Ft$1,Fe$1)}}static ɵfac=function(e){return new(e||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var Nn$1=(()=>{class n{constructor(){N$1(Le$1)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(e){return new(e||n)};static ɵmod=JI({type:n});static ɵinj=Bl({imports:[Te$1]})}return n})();var Sn$1=200;var pt$3=class{_letterKeyStream=new Y$4;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new Y$4;selectedItem=this._selectedItem;constructor(a,t){let e=typeof t?.debounceInterval==`number`?t.debounceInterval:Sn$1;t?.skipPredicate&&(this._skipPredicateFn=t.skipPredicate),this.setItems(a),this._setupKeyHandler(e)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(a){this._selectedItemIndex=a}setItems(a){this._items=a}handleKey(a){let t=a.keyCode;a.key&&a.key.length===1?this._letterKeyStream.next(a.key.toLocaleUpperCase()):(t>=65&&t<=90||t>=48&&t<=57)&&this._letterKeyStream.next(String.fromCharCode(t))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(a){this._letterKeyStream.pipe(Cl(t=>this._pressedLetters.push(t)),ig(a),On$2(()=>this._pressedLetters.length>0),ze$2(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(t=>{for(let e=1;e<this._items.length+1;e++){let o=(this._selectedItemIndex+e)%this._items.length,i=this._items[o];if(!this._skipPredicateFn?.(i)&&i.getLabel?.().toLocaleUpperCase().trim().indexOf(t)===0){this._selectedItem.next(i);break}}this._pressedLetters=[]})}};function Be$1(n,...a){return a.length?a.some(t=>n[t]):n.altKey||n.shiftKey||n.ctrlKey||n.metaKey}var U=class{_items;_activeItemIndex=jo$2(-1);_activeItem=jo$2(null);_wrap=!1;_typeaheadSubscription=j$1.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=a=>a.disabled;constructor(a,t){this._items=a,a instanceof ni$1?this._itemChangesSubscription=a.changes.subscribe(e=>this._itemsChanged(e.toArray())):Bo(a)&&(this._effectRef=ju(()=>this._itemsChanged(a()),{injector:t}))}tabOut=new Y$4;change=new Y$4;skipPredicate(a){return this._skipPredicateFn=a,this}withWrap(a=!0){return this._wrap=a,this}withVerticalOrientation(a=!0){return this._vertical=a,this}withHorizontalOrientation(a){return this._horizontal=a,this}withAllowedModifierKeys(a){return this._allowedModifierKeys=a,this}withTypeAhead(a=200){this._typeaheadSubscription.unsubscribe();let t=this._getItemsArray();return this._typeahead=new pt$3(t,{debounceInterval:typeof a==`number`?a:void 0,skipPredicate:e=>this._skipPredicateFn(e)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(e=>{this.setActiveItem(e)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(a=!0){return this._homeAndEnd=a,this}withPageUpDown(a=!0,t=10){return this._pageUpAndDown={enabled:a,delta:t},this}setActiveItem(a){let t=this._activeItem();this.updateActiveItem(a),this._activeItem()!==t&&this.change.next(this._activeItemIndex())}onKeydown(a){let t=a.keyCode,o=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(i=>!a[i]||this._allowedModifierKeys.indexOf(i)>-1);switch(t){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&o){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&o){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(i>0?i:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&o){let i=this._activeItemIndex()+this._pageUpAndDown.delta,s=this._getItemsArray().length;this._setActiveItemByIndex(i<s?i:s-1,-1);break}else return;default:(o||Be$1(a,`shiftKey`))&&this._typeahead?.handleKey(a);return}this._typeahead?.reset(),a.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(a){let t=this._getItemsArray(),e=typeof a==`number`?a:t.indexOf(a),o=t[e];this._activeItem.set(o??null),this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(a){this._wrap?this._setActiveInWrapMode(a):this._setActiveInDefaultMode(a)}_setActiveInWrapMode(a){let t=this._getItemsArray();for(let e=1;e<=t.length;e++){let o=(this._activeItemIndex()+a*e+t.length)%t.length,i=t[o];if(!this._skipPredicateFn(i)){this.setActiveItem(o);return}}}_setActiveInDefaultMode(a){this._setActiveItemByIndex(this._activeItemIndex()+a,a)}_setActiveItemByIndex(a,t){let e=this._getItemsArray();if(e[a]){for(;this._skipPredicateFn(e[a]);)if(a+=t,!e[a])return;this.setActiveItem(a)}}_getItemsArray(){return Bo(this._items)?this._items():this._items instanceof ni$1?this._items.toArray():this._items}_itemsChanged(a){this._typeahead?.setItems(a);let t=this._activeItem();if(t){let e=a.indexOf(t);e>-1&&e!==this._activeItemIndex()&&(this._activeItemIndex.set(e),this._typeahead?.setCurrentSelectedItemIndex(e))}}};var Ot$2=class extends U{setActiveItem(a){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(a),this.activeItem&&this.activeItem.setActiveStyles()}};var Rt$2=class extends U{_origin=`program`;setFocusOrigin(a){return this._origin=a,this}setActiveItem(a){super.setActiveItem(a),this.activeItem&&this.activeItem.focus(this._origin)}};var ze$1=new Map;var Pt$1=class n{_appId=N$1(Pu);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(a,t=!1){this._appId!==`ng`&&(a+=this._appId);let e=ze$1.get(a);return e===void 0?e=0:e++,ze$1.set(a,e),`${a}${t?n._infix+`-`:``}${e}`}static ɵfac=function(t){return new(t||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})};var je$1=` `;function wn$1(n,a,t){let e=ht$2(n,a);t=t.trim(),!e.some(o=>o.trim()===t)&&(e.push(t),n.setAttribute(a,e.join(je$1)))}function En$1(n,a,t){let e=ht$2(n,a);t=t.trim();let o=e.filter(i=>i!==t);o.length?n.setAttribute(a,o.join(je$1)):n.removeAttribute(a)}function ht$2(n,a){return n.getAttribute(a)?.match(/\S+/g)??[]}var He$1=`cdk-describedby-message`;var ft$3=`cdk-describedby-host`;var Bt$2=0;var Do$1=(()=>{class n{_platform=N$1(p);_document=N$1(Fo);_messageRegistry=new Map;_messagesContainer=null;_id=`${Bt$2++}`;constructor(){N$1(O$1).load(Tt$1),this._id=N$1(Pu)+`-`+Bt$2++}describe(t,e,o){if(!this._canBeDescribed(t,e))return;let i=Lt$1(e,o);typeof e!=`string`?(Ue$1(e,this._id),this._messageRegistry.set(i,{messageElement:e,referenceCount:0})):this._messageRegistry.has(i)||this._createMessageElement(e,o),this._isElementDescribedByMessage(t,i)||this._addMessageReference(t,i)}removeDescription(t,e,o){if(!e||!this._isElementNode(t))return;let i=Lt$1(e,o);if(this._isElementDescribedByMessage(t,i)&&this._removeMessageReference(t,i),typeof e==`string`){let s=this._messageRegistry.get(i);s&&s.referenceCount===0&&this._deleteMessageElement(i)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let t=this._document.querySelectorAll(`[${ft$3}="${this._id}"]`);for(let e=0;e<t.length;e++)this._removeCdkDescribedByReferenceIds(t[e]),t[e].removeAttribute(ft$3);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(t,e){let o=this._document.createElement(`div`);Ue$1(o,this._id),o.textContent=t,e&&o.setAttribute(`role`,e),this._createMessagesContainer(),this._messagesContainer.appendChild(o),this._messageRegistry.set(Lt$1(t,e),{messageElement:o,referenceCount:0})}_deleteMessageElement(t){this._messageRegistry.get(t)?.messageElement?.remove(),this._messageRegistry.delete(t)}_createMessagesContainer(){if(this._messagesContainer)return;let t=`cdk-describedby-message-container`,e=this._document.querySelectorAll(`.${t}[platform="server"]`);for(let i=0;i<e.length;i++)e[i].remove();let o=this._document.createElement(`div`);o.style.visibility=`hidden`,o.classList.add(t),o.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||o.setAttribute(`platform`,`server`),this._document.body.appendChild(o),this._messagesContainer=o}_removeCdkDescribedByReferenceIds(t){let e=ht$2(t,`aria-describedby`).filter(o=>o.indexOf(He$1)!=0);t.setAttribute(`aria-describedby`,e.join(` `))}_addMessageReference(t,e){let o=this._messageRegistry.get(e);wn$1(t,`aria-describedby`,o.messageElement.id),t.setAttribute(ft$3,this._id),o.referenceCount++}_removeMessageReference(t,e){let o=this._messageRegistry.get(e);o.referenceCount--,En$1(t,`aria-describedby`,o.messageElement.id),t.removeAttribute(ft$3)}_isElementDescribedByMessage(t,e){let o=ht$2(t,`aria-describedby`),i=this._messageRegistry.get(e),s=i&&i.messageElement.id;return!!s&&o.indexOf(s)!=-1}_canBeDescribed(t,e){if(!this._isElementNode(t))return!1;if(e&&typeof e==`object`)return!0;let o=e==null?``:`${e}`.trim(),i=t.getAttribute(`aria-label`);return o?!i||i.trim()!==o:!1}_isElementNode(t){return t.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(e){return new(e||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();function Lt$1(n,a){return typeof n==`string`?`${a||``}/${n}`:n}function Ue$1(n,a){n.id||(n.id=`${He$1}-${a}-${Bt$2++}`)}var P;function zo(){if(P==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return P=!1,P;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)P=!0;else{let n=Element.prototype.scrollTo;n?P=!/\{\s*\[native code\]\s*\}/.test(n.toString()):P=!1}}return P}function jo$1(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}var j;var Ve=[`color`,`button`,`checkbox`,`date`,`datetime-local`,`email`,`file`,`hidden`,`image`,`month`,`number`,`password`,`radio`,`range`,`reset`,`search`,`submit`,`tel`,`text`,`time`,`url`,`week`];function Ko(){if(j)return j;if(typeof document!=`object`||!document)return j=new Set(Ve),j;let n=document.createElement(`input`);return j=new Set(Ve.filter(a=>(n.setAttribute(`type`,a),n.type===a))),j}var In$1=new R$1(`MATERIAL_ANIMATIONS`);var Ke=null;function kn$1(){return N$1(In$1,{optional:!0})?.animationsDisabled||N$1(rm,{optional:!0})===`NoopAnimations`?`di-disabled`:(Ke??=N$1(bt$3).matchMedia(`(prefers-reduced-motion)`).matches,Ke?`reduced-motion`:`enabled`)}function H$1(){return kn$1()!==`enabled`}function ti$1(n){return n==null?``:typeof n==`string`?n:`${n}px`}function oi$1(n){return n!=null&&`${n}`!=`false`}var g=(function(n){return n[n.FADING_IN=0]=`FADING_IN`,n[n.VISIBLE=1]=`VISIBLE`,n[n.FADING_OUT=2]=`FADING_OUT`,n[n.HIDDEN=3]=`HIDDEN`,n})(g||{});var zt$1=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=g.HIDDEN;constructor(a,t,e,o=!1){this._renderer=a,this.element=t,this.config=e,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var We=z$2({passive:!0,capture:!0});var Ut$2=class{_events=new Map;addHandler(a,t,e,o){let i=this._events.get(t);if(i){let s=i.get(e);s?s.add(o):i.set(e,new Set([o]))}else this._events.set(t,new Map([[e,new Set([o])]])),a.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,We)})}removeHandler(a,t,e){let o=this._events.get(a);if(!o)return;let i=o.get(t);i&&(i.delete(e),i.size===0&&o.delete(t),o.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,We)))}_delegateEventHandler=a=>{let t=x(a);t&&this._events.get(a.type)?.forEach((e,o)=>{(o===t||o.contains(t))&&e.forEach(i=>i.handleEvent(a))})}};var X={enterDuration:225,exitDuration:150};var An$1=800;var Ze=z$2({passive:!0,capture:!0});var Ge=[`mousedown`,`touchstart`];var $e$1=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Mn$2=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=YI({type:n,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(e,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return n})();var q$2=class n{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ut$2;constructor(a,t,e,o,i){this._target=a,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=T$1(e)),i&&i.get(O$1).load(Mn$2)}fadeInRipple(a,t,e={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),i=W$1(W$1({},X),e.animation);e.centered&&(a=o.left+o.width/2,t=o.top+o.height/2);let s=e.radius||Tn$1(a,t,o),c=a-o.left,y=t-o.top,E=i.enterDuration,h=document.createElement(`div`);h.classList.add(`mat-ripple-element`),h.style.left=`${c-s}px`,h.style.top=`${y-s}px`,h.style.height=`${s*2}px`,h.style.width=`${s*2}px`,e.color!=null&&(h.style.backgroundColor=e.color),h.style.transitionDuration=`${E}ms`,this._containerElement.appendChild(h);let Wt=window.getComputedStyle(h),nn=Wt.transitionProperty,Zt=Wt.transitionDuration,yt=nn===`none`||Zt===`0s`||Zt===`0s, 0s`||o.width===0&&o.height===0,C=new zt$1(this,h,e,yt);h.style.transform=`scale3d(1, 1, 1)`,C.state=g.FADING_IN,e.persistent||(this._mostRecentTransientRipple=C);let J=null;return!yt&&(E||i.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Gt=()=>{J&&(J.fallbackTimer=null),clearTimeout($t),this._finishRippleTransition(C)},_t=()=>this._destroyRipple(C),$t=setTimeout(_t,E+100);h.addEventListener(`transitionend`,Gt),h.addEventListener(`transitioncancel`,_t),J={onTransitionEnd:Gt,onTransitionCancel:_t,fallbackTimer:$t}}),this._activeRipples.set(C,J),(yt||!E)&&this._finishRippleTransition(C),C}fadeOutRipple(a){if(a.state===g.FADING_OUT||a.state===g.HIDDEN)return;let t=a.element,e=W$1(W$1({},X),a.config.animation);t.style.transitionDuration=`${e.exitDuration}ms`,t.style.opacity=`0`,a.state=g.FADING_OUT,(a._animationForciblyDisabledThroughCss||!e.exitDuration)&&this._finishRippleTransition(a)}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut()})}setupTriggerEvents(a){let t=T$1(a);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,Ge.forEach(e=>{n._eventManager.addHandler(this._ngZone,e,t,this)}))}handleEvent(a){a.type===`mousedown`?this._onMousedown(a):a.type===`touchstart`?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{$e$1.forEach(t=>{this._triggerElement.addEventListener(t,this,Ze)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(a){a.state===g.FADING_IN?this._startFadeOutTransition(a):a.state===g.FADING_OUT&&this._destroyRipple(a)}_startFadeOutTransition(a){let t=a===this._mostRecentTransientRipple,{persistent:e}=a.config;a.state=g.VISIBLE,!e&&(!t||!this._isPointerDown)&&a.fadeOut()}_destroyRipple(a){let t=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=g.HIDDEN,t!==null&&(a.element.removeEventListener(`transitionend`,t.onTransitionEnd),a.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),a.element.remove()}_onMousedown(a){let t=G$3(a),e=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+An$1;!this._target.rippleDisabled&&!t&&!e&&(this._isPointerDown=!0,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig))}_onTouchStart(a){if(!this._target.rippleDisabled&&!$$2(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=a.changedTouches;if(t)for(let e=0;e<t.length;e++)this.fadeInRipple(t[e].clientX,t[e].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(a=>{let t=a.state===g.VISIBLE||a.config.terminateOnPointerUp&&a.state===g.FADING_IN;!a.config.persistent&&t&&a.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(Ge.forEach(t=>n._eventManager.removeHandler(t,a,this)),this._pointerUpEventsRegistered&&($e$1.forEach(t=>a.removeEventListener(t,this,Ze)),this._pointerUpEventsRegistered=!1))}};function Tn$1(n,a,t){let e=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),o=Math.max(Math.abs(a-t.top),Math.abs(a-t.bottom));return Math.sqrt(e*e+o*o)}var jt$2=new R$1(`mat-ripple-global-options`);var vi$1=(()=>{class n{_elementRef=N$1(hr$1);_animationsDisabled=H$1();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=N$1(_e$5),e=N$1(p),o=N$1(jt$2,{optional:!0}),i=N$1(oe$2);this._globalOptions=o||{},this._rippleRenderer=new q$2(this,t,this._elementRef,e,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:W$1(W$1(W$1({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,o){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,e,W$1(W$1({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,W$1(W$1({},this.rippleConfig),t))}static ɵfac=function(e){return new(e||n)};static ɵdir=tE({type:n,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(e,o){e&2&&Wp(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return n})();var Dn$1={capture:!0};var Cn$1=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Ht$2=`mat-ripple-loader-uninitialized`;var Vt$3=`mat-ripple-loader-class-name`;var Ye=`mat-ripple-loader-centered`;var vt$3=`mat-ripple-loader-disabled`;var Qe=(()=>{class n{_document=N$1(Fo);_animationsDisabled=H$1();_globalRippleOptions=N$1(jt$2,{optional:!0});_platform=N$1(p);_ngZone=N$1(_e$5);_injector=N$1(oe$2);_eventCleanups;_hosts=new Map;constructor(){let t=N$1(lr$1).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Cn$1.map(e=>t.listen(this._document,e,this._onInteraction,Dn$1)))}ngOnDestroy(){let t=this._hosts.keys();for(let e of t)this.destroyRipple(e);this._eventCleanups.forEach(e=>e())}configureRipple(t,e){t.setAttribute(Ht$2,this._globalRippleOptions?.namespace??``),(e.className||!t.hasAttribute(Vt$3))&&t.setAttribute(Vt$3,e.className||``),e.centered&&t.setAttribute(Ye,``),e.disabled&&t.setAttribute(vt$3,``)}setDisabled(t,e){let o=this._hosts.get(t);o?(o.target.rippleDisabled=e,!e&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):e?t.setAttribute(vt$3,``):t.removeAttribute(vt$3)}_onInteraction=t=>{let e=x(t);if(e instanceof HTMLElement){let o=e.closest(`[${Ht$2}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let e=this._document.createElement(`span`);e.classList.add(`mat-ripple`,t.getAttribute(Vt$3)),t.append(e);let o=this._globalRippleOptions,i=this._animationsDisabled?0:o?.animation?.enterDuration??X.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??X.exitDuration,c={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(vt$3),rippleConfig:{centered:t.hasAttribute(Ye),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:i,exitDuration:s}}},y=new q$2(c,this._ngZone,e,this._platform,this._injector),E=!c.rippleDisabled;E&&y.setupTriggerEvents(t),this._hosts.set(t,{target:c,renderer:y,hasSetUpEvents:E}),t.removeAttribute(Ht$2)}destroyRipple(t){let e=this._hosts.get(t);e&&(e.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(e){return new(e||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var Xe=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=YI({type:n,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(e,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return n})();var Fn$1=new R$1(`MAT_BUTTON_CONFIG`);function qe$1(n){return n==null?void 0:EF(n)}var Kt$4=(()=>{class n{_elementRef=N$1(hr$1);_ngZone=N$1(_e$5);_animationsDisabled=H$1();_config=N$1(Fn$1,{optional:!0});_focusMonitor=N$1(Mt$2);_cleanupClick;_renderer=N$1(Oa);_rippleLoader=N$1(Qe);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=pF(!1,{transform:IF});constructor(){N$1(O$1).load(Xe);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,e){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,e):this._elementRef.nativeElement.focus(e)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(e){return new(e||n)};static ɵdir=tE({type:n,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(e,o){e&2&&(_p(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),tD(o.color?`mat-`+o.color:``),Wp(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,IF],disabled:[2,`disabled`,`disabled`,IF],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,IF],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,IF],tabIndex:[2,`tabIndex`,`tabIndex`,qe$1],_tabindex:[2,`tabindex`,`_tabindex`,qe$1],showProgress:[1,`showProgress`]}})}return n})();var On$1=(()=>{class n extends Kt$4{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],e=[`*`,`[progressIndicator]`];function o(i,s){i&1&&(xc(0,`div`,1),VE(1,1),Ac())}return YI({type:n,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[Ip],ngContentSelectors:e,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(s,c){s&1&&(jE(t),Sp(0,`span`,0),VE(1),vE(2,o,2,0,`div`,1),Sp(3,`span`,2)(4,`span`,3)),s&2&&(Iv(2),EE(c.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return n})();var Rn$1=new R$1(`cdk-dir-doc`,{providedIn:`root`,factory:()=>N$1(Fo)});var Pn$1=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Je(n){let a=n?.toLowerCase()||``;return a===`auto`&&typeof navigator<`u`&&navigator?.language?Pn$1.test(navigator.language)?`rtl`:`ltr`:a===`rtl`?`rtl`:`ltr`}var Ln$1=(()=>{class n{get value(){return this.valueSignal()}valueSignal=jo$2(`ltr`);change=new Le$2;constructor(){let t=N$1(Rn$1,{optional:!0});if(t){let e=t.body?t.body.dir:null,o=t.documentElement?t.documentElement.dir:null;this.valueSignal.set(Je(e||o||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(e){return new(e||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var gt$3=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=JI({type:n});static ɵinj=Bl({})}return n})();var tn$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=JI({type:n});static ɵinj=Bl({imports:[gt$3]})}return n})();var en$1=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var Qi$1=(()=>{class n extends Kt$4{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=Bn$1(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let e=this._elementRef.nativeElement.classList,o=this._appearance?en$1.get(this._appearance):null,i=en$1.get(t);o&&e.remove(...o),e.add(...i),this._appearance=t}static ɵfac=function(e){return new(e||n)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],e=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function o(i,s){i&1&&(xc(0,`div`,2),VE(1,3),Ac())}return YI({type:n,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[Ip],ngContentSelectors:e,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(s,c){s&1&&(jE(t),Sp(0,`span`,0),VE(1),xc(2,`span`,1),VE(3,1),Ac(),VE(4,2),vE(5,o,2,0,`div`,2),Sp(6,`span`,3)(7,`span`,4)),s&2&&(Wp(`mdc-button__ripple`,!c._isFab)(`mdc-fab__ripple`,c._isFab),Iv(5),EE(c.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return n})();function Bn$1(n){return n.hasAttribute(`mat-raised-button`)?`elevated`:n.hasAttribute(`mat-stroked-button`)?`outlined`:n.hasAttribute(`mat-flat-button`)?`filled`:n.hasAttribute(`mat-button`)?`text`:null}var Xi$1=(()=>{class n{static ɵfac=function(e){return new(e||n)};static ɵmod=JI({type:n});static ɵinj=Bl({imports:[tn$1,gt$3]})}return n})();function Ce$2(n){return n&&typeof n.connect==`function`&&!(n instanceof Vi$1)}var T=(function(n){return n[n.REPLACED=0]=`REPLACED`,n[n.INSERTED=1]=`INSERTED`,n[n.MOVED=2]=`MOVED`,n[n.REMOVED=3]=`REMOVED`,n})(T||{});var Wt$2=class{viewCacheSize=20;_viewCache=[];applyChanges(t,e,i,o,r){t.forEachOperation((s,a,c)=>{let d,l;if(s.previousIndex==null){let u=()=>i(s,a,c);d=this._insertView(u,c,e,o(s)),l=d?T.INSERTED:T.REPLACED}else c==null?(this._detachAndCacheView(a,e),l=T.REMOVED):(d=this._moveView(a,c,e,o(s)),l=T.MOVED);r&&r({context:d?.context,operation:l,record:s})})}detach(){for(let t of this._viewCache)t.destroy();this._viewCache=[]}_insertView(t,e,i,o){let r=this._insertViewFromCache(e,i);if(r){r.context.$implicit=o;return}let s=t();return i.createEmbeddedView(s.templateRef,s.context,s.index)}_detachAndCacheView(t,e){let i=e.detach(t);this._maybeCacheView(i,e)}_moveView(t,e,i,o){let r=i.get(t);return i.move(r,e),r.context.$implicit=o,r}_maybeCacheView(t,e){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(t);else{let i=e.indexOf(t);i===-1?t.destroy():e.remove(i)}}_insertViewFromCache(t,e){let i=this._viewCache.pop();return i&&e.insert(i,t),i||null}};var pe$1=20;var pt$2=(()=>{class n{_ngZone=N$1(_e$5);_platform=N$1(p);_renderer=N$1(lr$1).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new Y$4;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=pe$1){return this._platform.isBrowser?new T$2(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(rg(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):$h()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let o=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(On$2(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((o,r)=>{this._targetContainsElement(r,e)&&i.push(r)}),i}_targetContainsElement(e,i){let o=T$1(i),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static ɵfac=function(i){return new(i||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var fe$1=20;var I=(()=>{class n{_platform=N$1(p);_listeners;_viewportSize=null;_change=new Y$4;_document=N$1(Fo);constructor(){let e=N$1(_e$5),i=N$1(lr$1).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[i.listen(`window`,`resize`,o),i.listen(`window`,`orientationchange`,o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+i,height:o,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect();return{top:-r.top||e.body?.scrollTop||i.scrollY||o.scrollTop||0,left:-r.left||e.body?.scrollLeft||i.scrollX||o.scrollLeft||0}}change(e=fe$1){return e>0?this._change.pipe(rg(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(i){return new(i||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var ui$1=new R$1(`CDK_VIRTUAL_SCROLL_VIEWPORT`);var Yt$2=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=JI({type:n});static ɵinj=Bl({})}return n})();var ft$2=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=JI({type:n});static ɵinj=Bl({imports:[gt$3,Yt$2,gt$3,Yt$2]})}return n})();var z$1=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}};var gt$2=class extends z$1{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(t,e,i,o,r,s){super(),this.component=t,this.viewContainerRef=e,this.injector=i,this.projectableNodes=o,this.bindings=r||null,this.directives=s||null}};var L$2=class extends z$1{templateRef;viewContainerRef;context;injector;constructor(t,e,i,o){super(),this.templateRef=t,this.viewContainerRef=e,this.context=i,this.injector=o}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}};var _t$1=class extends z$1{element;constructor(t){super(),this.element=t instanceof hr$1?t.nativeElement:t}};var vt$2=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof gt$2)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof L$2)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof _t$1)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var $$1=class extends vt$2{outletElement;_appRef;_defaultInjector;constructor(t,e,i){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=i}attachComponentPortal(t){let e;if(t.viewContainerRef){let i=t.injector||t.viewContainerRef.injector,o=i.get(En$2,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:i,ngModuleRef:o,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,o=t.injector||this._defaultInjector||oe$2.NULL,r=o.get(ge$2,i.injector);e=wF(t.component,{elementInjector:o,environmentInjector:r,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,i=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return i.rootNodes.forEach(o=>this.outletElement.appendChild(o)),i.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(i);o!==-1&&e.remove(o)}),this._attachedPortal=t,i}attachDomPortal=t=>{let e=t.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var jt$1=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=JI({type:n});static ɵinj=Bl({})}return n})();var Zt$1=zo();function Jt$2(n){return new K$2(n.get(I),n.get(Fo))}var K$2=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(t,e){this._viewportRuler=t,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||``,this._previousHTMLStyles.top=t.style.top||``,t.style.left=ti$1(-this._previousScrollPosition.left),t.style.top=ti$1(-this._previousScrollPosition.top),t.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,i=t.style,o=e.style,r=i.scrollBehavior||``,s=o.scrollBehavior||``;this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,t.classList.remove(`cdk-global-scrollblock`),Zt$1&&(i.scrollBehavior=o.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Zt$1&&(i.scrollBehavior=r,o.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function te(n,t){return new q$1(n.get(pt$2),n.get(_e$5),n.get(I),t)}var q$1=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(t,e,i,o){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=i,this._config=o}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(On$2(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var N=class{enable(){}disable(){}attach(){}};function mt$2(n,t){return t.some(e=>{let i=n.bottom<e.top,o=n.top>e.bottom,r=n.right<e.left,s=n.left>e.right;return i||o||r||s})}function Ut$1(n,t){return t.some(e=>{let i=n.top<e.top,o=n.bottom>e.bottom,r=n.left<e.left,s=n.right>e.right;return i||o||r||s})}function Ct$1(n,t){return new Q(n.get(pt$2),n.get(I),n.get(_e$5),t)}var Q=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,i,o){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=o}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:o}=this._viewportRuler.getViewportSize();mt$2(e,[{width:i,height:o,bottom:o,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var ee=(()=>{class n{_injector=N$1(oe$2);noop=()=>new N;close=e=>te(this._injector,e);block=()=>Jt$2(this._injector);reposition=e=>Ct$1(this._injector,e);static ɵfac=function(i){return new(i||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var W=class{positionStrategy;scrollStrategy=new N;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let i of e)t[i]!==void 0&&(this[i]=t[i])}}};var J$1=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var ie$2=(()=>{class n{_attachedOverlays=[];_document=N$1(Fo);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static ɵfac=function(i){return new(i||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var ne$2=(()=>{class n extends ie$2{_ngZone=N$1(_e$5);_renderer=N$1(lr$1).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let o=i.length-1;o>-1;o--){let r=i[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static ɵfac=function(i){return new(i||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var oe$1=(()=>{class n extends ie$2{_platform=N$1(p);_ngZone=N$1(_e$5);_renderer=N$1(lr$1).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(i,`pointerdown`,this._pointerDownListener,o),r.listen(i,`click`,this._clickListener,o),r.listen(i,`auxclick`,this._clickListener,o),r.listen(i,`contextmenu`,this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=x(e)};_clickListener=e=>{let i=x(e),o=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let a=r[s],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,c))){if(Gt$2(a.overlayElement,i)||Gt$2(a.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static ɵfac=function(i){return new(i||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();function Gt$2(n,t){let e=typeof ShadowRoot<`u`&&ShadowRoot,i=t;for(;i;){if(i===n)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var re=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=YI({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(i,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})();var se$1=(()=>{class n{_platform=N$1(p);_containerElement;_document=N$1(Fo);_styleLoader=N$1(O$1);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||jo$1()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let i=this._document.createElement(`div`);i.classList.add(e),jo$1()?i.setAttribute(`platform`,`test`):this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(re)}static ɵfac=function(i){return new(i||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var wt$2=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,i,o){this._renderer=e,this._ngZone=i,this.element=t.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,o)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents=`none`,t.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function kt(n){return n&&n.nodeType===1}var yt$1=jo$2([]);var tt$1=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new Y$4;_attachments=new Y$4;_detachments=new Y$4;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new Y$4;_outsidePointerEvents=new Y$4;_afterNextRenderRef;constructor(t,e,i,o,r,s,a,c,d,l=!1,u,f){this._portalOutlet=t,this._host=e,this._pane=i,this._config=o,this._ngZone=r,this._keyboardDispatcher=s,this._document=a,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=l,this._injector=u,this._renderer=f,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),uh(()=>{yt$1.update(i=>i.includes(this)?i:[...i,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Xy(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let i=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>i.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),uh(()=>{yt$1.update(e=>e.filter(i=>i!==this))}),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,uh(()=>{yt$1.update(e=>e.filter(i=>i!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=W$1(W$1({},this._config),t),this._updateElementSize()}setDirection(t){this._config=q$3(W$1({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t==`string`?t:t.value:`ltr`}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=ti$1(this._config.width),t.height=ti$1(this._config.height),t.minWidth=ti$1(this._config.minWidth),t.minHeight=ti$1(this._config.minHeight),t.maxWidth=ti$1(this._config.maxWidth),t.maxHeight=ti$1(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?``:`none`}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;kt(t)?t.after(this._host):t?.type===`parent`?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let t=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new wt$2(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,i){let o=Dt$1(e||[]).filter(r=>!!r);o.length&&(i?t.classList.add(...o):t.classList.remove(...o))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=Xy(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}};var $t$1=`cdk-overlay-connected-position-bounding-box`;var ge$1=/([A-Za-z%]+)$/;function St$1(n,t){return new et$1(t,n.get(I),n.get(Fo),n.get(p),n.get(se$1))}var et$1=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new Y$4;_resizeSubscription=j$1.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,i,o,r){this._viewportRuler=e,this._document=i,this._platform=o,this._overlayContainer=r,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add($t$1),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,i=this._viewportRect,o=this._containerRect,r=[],s;for(let a of this._preferredPositions){let c=this._getOriginPoint(t,o,a),d=this._getOverlayPoint(c,e,a),l=this._getOverlayFit(d,e,i,a);if(l.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(l,d,i)){r.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!s||s.overlayFit.visibleArea<l.visibleArea)&&(s={overlayFit:l,overlayPoint:d,originPoint:c,position:a,overlayRect:e})}if(r.length){let a=null,c=-1;for(let d of r){let l=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);l>c&&(c=l,a=d)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&M$1(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove($t$1),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof hr$1?this._origin.nativeElement:kt(this._origin)?this._origin:null}_getOriginPoint(t,e,i){let o;if(i.originX==`center`)o=t.left+t.width/2;else{let s=this._isRtl()?t.right:t.left,a=this._isRtl()?t.left:t.right;o=i.originX==`start`?s:a}e.left<0&&(o-=e.left);let r;return i.originY==`center`?r=t.top+t.height/2:r=i.originY==`top`?t.top:t.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(t,e,i){let o;i.overlayX==`center`?o=-e.width/2:i.overlayX===`start`?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return i.overlayY==`center`?r=-e.height/2:r=i.overlayY==`top`?0:-e.height,{x:t.x+o,y:t.y+r}}_getOverlayFit(t,e,i,o){let r=qt$3(e),{x:s,y:a}=t,c=this._getOffset(o,`x`),d=this._getOffset(o,`y`);c&&(s+=c),d&&(a+=d);let l=0-s,u=s+r.width-i.width,f=0-a,_=a+r.height-i.height,g=this._subtractOverflows(r.width,l,u),y=this._subtractOverflows(r.height,f,_),xt=g*y;return{visibleArea:xt,isCompletelyWithinViewport:r.width*r.height===xt,fitsInViewportVertically:y===r.height,fitsInViewportHorizontally:g==r.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){let o=i.bottom-e.y,r=i.right-e.x,s=Kt$3(this._overlayRef.getConfig().minHeight),a=Kt$3(this._overlayRef.getConfig().minWidth),c=t.fitsInViewportVertically||s!=null&&s<=o,d=t.fitsInViewportHorizontally||a!=null&&a<=r;return c&&d}return!1}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let o=qt$3(e),r=this._viewportRect,s=Math.max(t.x+o.width-r.width,0),a=Math.max(t.y+o.height-r.height,0),c=Math.max(r.top-i.top-t.y,0),d=Math.max(r.left-i.left-t.x,0),l=0,u=0;return o.width<=r.width?l=d||-s:l=t.x<this._getViewportMarginStart()?r.left-i.left-t.x:0,o.height<=r.height?u=c||-a:u=t.y<this._getViewportMarginTop()?r.top-i.top-t.y:0,this._previousPushAmount={x:l,y:u},{x:t.x+l,y:t.y+u}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!_e$3(this._lastScrollVisibility,i)){let o=new J$1(t,i);this._positionChanges.next(o)}this._lastScrollVisibility=i}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,o=t.overlayY;t.overlayX===`center`?i=`center`:this._isRtl()?i=t.overlayX===`start`?`right`:`left`:i=t.overlayX===`start`?`left`:`right`;for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${i} ${o}`}_calculateBoundingBoxRect(t,e){let i=this._viewportRect,o=this._isRtl(),r,s,a;if(e.overlayY===`top`)s=t.y,r=i.height-s+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)a=i.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=i.height-a+this._getViewportMarginTop();else{let _=Math.min(i.bottom-t.y+i.top,t.y),g=this._lastBoundingBoxSize.height;r=_*2,s=t.y-_,r>g&&!this._isInitialRender&&!this._growAfterOpen&&(s=t.y-g/2)}let c=e.overlayX===`start`&&!o||e.overlayX===`end`&&o,d=e.overlayX===`end`&&!o||e.overlayX===`start`&&o,l,u,f;if(d)f=i.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),l=t.x-this._getViewportMarginStart();else if(c)u=t.x,l=i.right-t.x-this._getViewportMarginEnd();else{let _=Math.min(i.right-t.x+i.left,t.x),g=this._lastBoundingBoxSize.width;l=_*2,u=t.x-_,l>g&&!this._isInitialRender&&!this._growAfterOpen&&(u=t.x-g/2)}return{top:s,left:u,bottom:a,right:f,width:l,height:r}}_setBoundingBoxStyles(t,e){let i=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left=`0`,o.bottom=o.right=`auto`,o.maxHeight=o.maxWidth=``,o.width=o.height=`100%`;else{let r=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;o.width=ti$1(i.width),o.height=ti$1(i.height),o.top=ti$1(i.top)||`auto`,o.bottom=ti$1(i.bottom)||`auto`,o.left=ti$1(i.left)||`auto`,o.right=ti$1(i.right)||`auto`,e.overlayX===`center`?o.alignItems=`center`:o.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?o.justifyContent=`center`:o.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,r&&(o.maxHeight=ti$1(r)),s&&(o.maxWidth=ti$1(s))}this._lastBoundingBoxSize=i,M$1(this._boundingBox.style,o)}_resetBoundingBoxStyles(){M$1(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){M$1(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(t,e){let i={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(o){let l=this._viewportRuler.getViewportScrollPosition();M$1(i,this._getExactOverlayY(e,t,l)),M$1(i,this._getExactOverlayX(e,t,l))}else i.position=`static`;let a=``,c=this._getOffset(e,`x`),d=this._getOffset(e,`y`);c&&(a+=`translateX(${c}px) `),d&&(a+=`translateY(${d}px)`),i.transform=a.trim(),s.maxHeight&&(o?i.maxHeight=ti$1(s.maxHeight):r&&(i.maxHeight=``)),s.maxWidth&&(o?i.maxWidth=ti$1(s.maxWidth):r&&(i.maxWidth=``)),M$1(this._pane.style,i)}_getExactOverlayY(t,e,i){let o={top:``,bottom:``},r=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i)),t.overlayY===`bottom`)o.bottom=`${this._document.documentElement.clientHeight-(r.y+this._overlayRect.height)}px`;else o.top=ti$1(r.y);return o}_getExactOverlayX(t,e,i){let o={left:``,right:``},r=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i));let s;if(this._isRtl()?s=t.overlayX===`end`?`left`:`right`:s=t.overlayX===`end`?`right`:`left`,s===`right`)o.right=`${this._document.documentElement.clientWidth-(r.x+this._overlayRect.width)}px`;else o.left=ti$1(r.x);return o}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Ut$1(t,i),isOriginOutsideView:mt$2(t,i),isOverlayClipped:Ut$1(e,i),isOverlayOutsideView:mt$2(e,i)}}_subtractOverflows(t,...e){return e.reduce((i,o)=>i-Math.max(o,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+t-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e===`x`?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&Dt$1(t).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof hr$1)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();t&&(e.style.display=`block`);let i=e.getBoundingClientRect();return t&&(e.style.display=``),i}};function M$1(n,t){for(let e in t)Object.hasOwn(t,e)&&(n[e]=t[e]);return n}function Kt$3(n){if(typeof n!=`number`&&n!=null){let[t,e]=n.split(ge$1);return!e||e===`px`?parseFloat(t):null}return n||null}function qt$3(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function _e$3(n,t){return n===t?!0:n.isOriginClipped===t.isOriginClipped&&n.isOriginOutsideView===t.isOriginOutsideView&&n.isOverlayClipped===t.isOverlayClipped&&n.isOverlayOutsideView===t.isOverlayOutsideView}var Qt$2=`cdk-global-overlay-wrapper`;function ae$1(n){return new it$2}var it$2=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(Qt$2),this._isDisposed=!1}top(t=``){return this._bottomOffset=``,this._topOffset=t,this._alignItems=`flex-start`,this}left(t=``){return this._xOffset=t,this._xPosition=`left`,this}bottom(t=``){return this._topOffset=``,this._bottomOffset=t,this._alignItems=`flex-end`,this}right(t=``){return this._xOffset=t,this._xPosition=`right`,this}start(t=``){return this._xOffset=t,this._xPosition=`start`,this}end(t=``){return this._xOffset=t,this._xPosition=`end`,this}width(t=``){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=``){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=``){return this.left(t),this._xPosition=`center`,this}centerVertically(t=``){return this.top(t),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:o,height:r,maxWidth:s,maxHeight:a}=this._overlayRef.getConfig(),c=(o===`100%`||o===`100vw`)&&(!s||s===`100%`||s===`100vw`),d=(r===`100%`||r===`100vh`)&&(!a||a===`100%`||a===`100vh`),l=this._xPosition,u=this._xOffset,f=this._overlayRef.getConfig().direction===`rtl`,_=``,g=``,y=``;c?y=`flex-start`:l===`center`?(y=`center`,f?g=u:_=u):f?l===`left`||l===`end`?(y=`flex-end`,_=u):(l===`right`||l===`start`)&&(y=`flex-start`,g=u):l===`left`||l===`start`?(y=`flex-start`,_=u):(l===`right`||l===`end`)&&(y=`flex-end`,g=u),t.position=this._cssPosition,t.marginLeft=c?`0`:_,t.marginTop=d?`0`:this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=c?`0`:g,e.justifyContent=y,e.alignItems=d?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(Qt$2),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position=``,this._overlayRef=null,this._isDisposed=!0}};var le$1=(()=>{class n{_injector=N$1(oe$2);global(){return ae$1()}flexibleConnectedTo(e){return St$1(this._injector,e)}static ɵfac=function(i){return new(i||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var Ot$1=new R$1(`OVERLAY_DEFAULT_CONFIG`);function Rt$1(n,t){n.get(O$1).load(re);let e=n.get(se$1),i=n.get(Fo),o=n.get(Pt$1),r=n.get(Ni$1),s=n.get(Ln$1),a=n.get(Oa,null,{optional:!0})||n.get(lr$1).createRenderer(null,null),c=new W(t),d=n.get(Ot$1,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,!i.body||!(`showPopover`in i.body)?c.usePopover=!1:c.usePopover=t?.usePopover??d;let l=i.createElement(`div`),u=i.createElement(`div`);l.id=o.getId(`cdk-overlay-`),l.classList.add(`cdk-overlay-pane`),u.appendChild(l),c.usePopover&&(u.setAttribute(`popover`,`manual`),u.classList.add(`cdk-overlay-popover`));let f=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return kt(f)?f.after(u):f?.type===`parent`?f.element.appendChild(u):e.getContainerElement().appendChild(u),new tt$1(new $$1(l,r,n),u,l,c,n.get(_e$5),n.get(ne$2),i,n.get(Dr),n.get(oe$1),t?.disableAnimations??n.get(rm,null,{optional:!0})===`NoopAnimations`,n.get(ge$2),a)}var ce$1=(()=>{class n{scrollStrategies=N$1(ee);_positionBuilder=N$1(le$1);_injector=N$1(oe$2);create(e){return Rt$1(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(i){return new(i||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var ve$2=[{originX:`start`,originY:`bottom`,overlayX:`start`,overlayY:`top`},{originX:`start`,originY:`top`,overlayX:`start`,overlayY:`bottom`},{originX:`end`,originY:`top`,overlayX:`end`,overlayY:`bottom`},{originX:`end`,originY:`bottom`,overlayX:`end`,overlayY:`top`}];var ye$3=new R$1(`cdk-connected-overlay-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=N$1(oe$2);return()=>Ct$1(n)}});var bt$2=(()=>{class n{elementRef=N$1(hr$1);static ɵfac=function(i){return new(i||n)};static ɵdir=tE({type:n,selectors:[[``,`cdk-overlay-origin`,``],[``,`overlay-origin`,``],[``,`cdkOverlayOrigin`,``]],exportAs:[`cdkOverlayOrigin`]})}return n})();var he=new R$1(`cdk-connected-overlay-default-config`);var me$1=(()=>{class n{_dir=N$1(Ln$1,{optional:!0});_injector=N$1(oe$2);_overlayRef;_templatePortal;_backdropSubscription=j$1.EMPTY;_attachSubscription=j$1.EMPTY;_detachSubscription=j$1.EMPTY;_positionSubscription=j$1.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=N$1(ye$3);_ngZone=N$1(_e$5);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!=`string`&&this._assignConfig(e)}backdropClick=new Le$2;positionChange=new Le$2;attach=new Le$2;detach=new Le$2;overlayKeydown=new Le$2;overlayOutsideClick=new Le$2;constructor(){let e=N$1(cr$1),i=N$1(_i$1),o=N$1(he,{optional:!0}),r=N$1(Ot$1,{optional:!0});this.usePopover=r?.usePopover===!1?null:`global`,this._templatePortal=new L$2(e,i),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:`ltr`}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=ve$2);let e=this._overlayRef=Rt$1(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(i=>{this.overlayKeydown.next(i),i.keyCode===27&&!this.disableClose&&!Be$1(i)&&(i.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(i=>{let o=this._getOriginElement(),r=x(i);(!o||o!==r&&!o.contains(r))&&this.overlayOutsideClick.next(i)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),i=new W({direction:this._dir||`ltr`,positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(i.height=this.height),(this.minWidth||this.minWidth===0)&&(i.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(i.minHeight=this.minHeight),this.backdropClass&&(i.backdropClass=this.backdropClass),this.panelClass&&(i.panelClass=this.panelClass),i}_updatePositionStrategy(e){let i=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(i).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?`global`:this.usePopover)}_createPositionStrategy(){let e=St$1(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof bt$2?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof bt$2?this.origin.elementRef.nativeElement:this.origin instanceof hr$1?this.origin.nativeElement:typeof Element<`u`&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(i=>this.backdropClick.emit(i)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(mg(()=>this.positionChange.observers.length>0)).subscribe(i=>{this._ngZone.run(()=>this.positionChange.emit(i)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static ɵfac=function(i){return new(i||n)};static ɵdir=tE({type:n,selectors:[[``,`cdk-connected-overlay`,``],[``,`connected-overlay`,``],[``,`cdkConnectedOverlay`,``]],inputs:{origin:[0,`cdkConnectedOverlayOrigin`,`origin`],positions:[0,`cdkConnectedOverlayPositions`,`positions`],positionStrategy:[0,`cdkConnectedOverlayPositionStrategy`,`positionStrategy`],offsetX:[0,`cdkConnectedOverlayOffsetX`,`offsetX`],offsetY:[0,`cdkConnectedOverlayOffsetY`,`offsetY`],width:[0,`cdkConnectedOverlayWidth`,`width`],height:[0,`cdkConnectedOverlayHeight`,`height`],minWidth:[0,`cdkConnectedOverlayMinWidth`,`minWidth`],minHeight:[0,`cdkConnectedOverlayMinHeight`,`minHeight`],backdropClass:[0,`cdkConnectedOverlayBackdropClass`,`backdropClass`],panelClass:[0,`cdkConnectedOverlayPanelClass`,`panelClass`],viewportMargin:[0,`cdkConnectedOverlayViewportMargin`,`viewportMargin`],scrollStrategy:[0,`cdkConnectedOverlayScrollStrategy`,`scrollStrategy`],open:[0,`cdkConnectedOverlayOpen`,`open`],disableClose:[0,`cdkConnectedOverlayDisableClose`,`disableClose`],transformOriginSelector:[0,`cdkConnectedOverlayTransformOriginOn`,`transformOriginSelector`],hasBackdrop:[2,`cdkConnectedOverlayHasBackdrop`,`hasBackdrop`,IF],lockPosition:[2,`cdkConnectedOverlayLockPosition`,`lockPosition`,IF],flexibleDimensions:[2,`cdkConnectedOverlayFlexibleDimensions`,`flexibleDimensions`,IF],growAfterOpen:[2,`cdkConnectedOverlayGrowAfterOpen`,`growAfterOpen`,IF],push:[2,`cdkConnectedOverlayPush`,`push`,IF],disposeOnNavigation:[2,`cdkConnectedOverlayDisposeOnNavigation`,`disposeOnNavigation`,e=>e===`url-change`||e===`pop-state`?e:IF(e)],usePopover:[0,`cdkConnectedOverlayUsePopover`,`usePopover`],matchWidth:[2,`cdkConnectedOverlayMatchWidth`,`matchWidth`,IF],_config:[0,`cdkConnectedOverlay`,`_config`]},outputs:{backdropClick:`backdropClick`,positionChange:`positionChange`,attach:`attach`,detach:`detach`,overlayKeydown:`overlayKeydown`,overlayOutsideClick:`overlayOutsideClick`},exportAs:[`cdkConnectedOverlay`],features:[Em]})}return n})();var we$2=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=JI({type:n});static ɵinj=Bl({providers:[ce$1],imports:[gt$3,jt$1,ft$2,ft$2]})}return n})();function V$1(i){return Error(`Unable to find icon with the name "${i}"`)}function Z$1(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function q(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Y$2(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var c$1=class{url;svgText;options;svgElement=null;constructor(a,t,e){this.url=a,this.svgText=t,this.options=e}};var K$1=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass;constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace(``,t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace(``,t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new c$1(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){let r=this._sanitizer.sanitize(G$4.HTML,n);if(!r)throw Y$2(n);let s=on$2(r);return this._addSvgIconConfig(t,e,new c$1(``,s,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace(``,t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace(``,t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new c$1(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let o=this._sanitizer.sanitize(G$4.HTML,e);if(!o)throw Y$2(e);let r=on$2(o);return this._addSvgIconSetConfig(t,new c$1(``,r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=et(this._document),this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(G$4.RESOURCE_URL,t);if(!e)throw q(t);let n=this._cachedIconsByUrl.get(e);return n?$h(C$1(n)):this._loadSvgIconFromConfig(new c$1(t,null)).pipe(Cl(o=>this._cachedIconsByUrl.set(e,o)),ze$2(o=>C$1(o)))}getNamedSvgIcon(t,e=``){let n=J(e,t),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):Uh(V$1(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?$h(C$1(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(ze$2(e=>C$1(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return $h(n);let o=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(Ui$1(s=>{let m=`Loading icon set URL: ${this._sanitizer.sanitize(G$4.RESOURCE_URL,r.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(m)),$h(null)})));return tg(o).pipe(ze$2(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw V$1(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(r,t,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Cl(e=>t.svgText=e),ze$2(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?$h(null):this._fetchIcon(t).pipe(Cl(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let r=o.cloneNode(!0);if(r.removeAttribute(`id`),r.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(r,n);if(r.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(r),n);let s=this._svgElementFromString(on$2(`<svg></svg>`));return s.appendChild(r),this._setSvgAttributes(s,n)}_svgElementFromString(t){let e=this._document.createElement(`DIV`);e.innerHTML=t;let n=e.querySelector(`svg`);if(!n)throw Error(`<svg> tag not found`);return n}_toSvgElement(t){let e=this._svgElementFromString(on$2(`<svg></svg>`)),n=t.attributes;for(let o=0;o<n.length;o++){let{name:r,value:s}=n[o];r!==`id`&&e.setAttribute(r,s)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),e&&e.viewBox&&t.setAttribute(`viewBox`,e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw Z$1();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(G$4.RESOURCE_URL,e);if(!r)throw q(e);let s=this._inProgressUrlFetches.get(r);if(s)return s;let f=this._httpClient.get(r,{responseType:`text`,withCredentials:o}).pipe(ze$2(m=>on$2(m)),qc(()=>this._inProgressUrlFetches.delete(r)),Gi$1());return this._inProgressUrlFetches.set(r,f),f}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(J(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](e,t);if(o)return tt(o)?new c$1(o.url,null,o.options):new c$1(o,null)}}static ɵfac=function(e){return new(e||i)(Ce$4(ni$2,8),Ce$4(Qo),Ce$4(Fo,8),Ce$4(tt$2))};static ɵprov=ie$3({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();function C$1(i){return i.cloneNode(!0)}function J(i,a){return i+`:`+a}function tt(i){return!!(i.url&&i.options)}function et(i){let a=null,t=!1;return i.fonts&&typeof i.fonts.forEach==`function`&&i.fonts.forEach(e=>{let n=e.family.replace(/['"]/g,``).trim().toLowerCase();(n===`material icons`||n.startsWith(`material icons `))&&(t=!0),n.startsWith(`material symbols rounded`)?a=`rounded`:n.startsWith(`material symbols sharp`)?a=`sharp`:n.startsWith(`material symbols`)&&(a=`outlined`)}),[a&&!t?`material-symbols-${a}`:`material-icons`,`mat-ligature-font`]}var nt$2=new R$1(`MAT_ICON_DEFAULT_OPTIONS`);var ot$2=new R$1(`mat-icon-location`,{providedIn:`root`,factory:()=>{let i=N$1(Fo),a=i?i.location:null;return{getPathname:()=>a?a.pathname+a.search:``}}});var G$2=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var rt$2=G$2.map(i=>`[${i}]`).join(`, `);var it$1=/^url\(['"]?#(.*?)['"]?\)$/;var wt$1=(()=>{class i{_elementRef=N$1(hr$1);_iconRegistry=N$1(K$1);_location=N$1(ot$2);_errorHandler=N$1(tt$2);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=j$1.EMPTY;constructor(){let t=N$1(new dh(`aria-hidden`),{optional:!0}),e=N$1(nt$2,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let e=t.split(`:`);switch(e.length){case 1:return[``,e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()===`svg`)&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences,n=t.startsWith(`//`)?`/.${t}`:t;e&&e.forEach((o,r)=>{o.forEach(s=>{r.setAttribute(s.name,`url('${n}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(rt$2),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)G$2.forEach(r=>{let s=e[o],f=s.getAttribute(r),m=f?f.match(it$1):null;if(m){let _=n.get(s);_||(_=[],n.set(s,_)),_.push({name:r,value:m[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(Wi$1(1)).subscribe(o=>this._setSvgElement(o),o=>{let r=`Error retrieving icon ${e}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=(function(){return YI({type:i,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(n,o){n&2&&(_p(`data-mat-icon-type`,o._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,o._svgName||o.fontIcon)(`data-mat-icon-namespace`,o._svgNamespace||o.fontSet)(`fontIcon`,o._usingFontIcon()?o.fontIcon:null),tD(o.color?`mat-`+o.color:``),Wp(`mat-icon-inline`,o.inline)(`mat-icon-no-color`,o.color!==`primary`&&o.color!==`accent`&&o.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,IF],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(n,o){n&1&&(jE(),VE(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})})()}return i})();var Mt$1=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=JI({type:i});static ɵinj=Bl({imports:[gt$3]})}return i})();var nt$1=Symbol(`FIELD_TREE`);function Y$1(n){return typeof n==`function`&&n[nt$1]===!0}var rt$1=new R$1(``);var ve$1=class{_box;_destroyed=new Y$4;_resizeSubject=new Y$4;_resizeObserver;_elementObservables=new Map;constructor(f){this._box=f,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(f){return this._elementObservables.has(f)||this._elementObservables.set(f,new T$2(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(f,{box:this._box}),()=>{this._resizeObserver?.unobserve(f),t.unsubscribe(),this._elementObservables.delete(f)}}).pipe(On$2(e=>e.some(t=>t.target===f)),fg({bufferSize:1,refCount:!0}),gg(this._destroyed))),this._elementObservables.get(f)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var ot$1=(()=>{class n{_cleanupErrorListener;_observers=new Map;_ngZone=N$1(_e$5);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let i=t?.box||`content-box`;return this._observers.has(i)||this._observers.set(i,new ve$1(i)),this._observers.get(i).observe(e)}static ɵfac=function(t){return new(t||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var _e$2=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵdir=tE({type:n,selectors:[[`mat-label`]]})}return n})();var mt$1=new R$1(`MatError`);var At$1=(()=>{class n{id=N$1(Pt$1).getId(`mat-mdc-error-`);static ɵfac=function(t){return new(t||n)};static ɵdir=tE({type:n,selectors:[[`mat-error`],[``,`matError`,``]],hostAttrs:[1,`mat-mdc-form-field-error`,`mat-mdc-form-field-bottom-align`],hostVars:1,hostBindings:function(t,i){t&2&&Rp(`id`,i.id)},inputs:{id:`id`},features:[ED([{provide:mt$1,useExisting:n}])]})}return n})();var ye$2=(()=>{class n{align=`start`;id=N$1(Pt$1).getId(`mat-mdc-hint-`);static ɵfac=function(t){return new(t||n)};static ɵdir=tE({type:n,selectors:[[`mat-hint`]],hostAttrs:[1,`mat-mdc-form-field-hint`,`mat-mdc-form-field-bottom-align`],hostVars:4,hostBindings:function(t,i){t&2&&(Rp(`id`,i.id),_p(`align`,null),Wp(`mat-mdc-form-field-hint-end`,i.align===`end`))},inputs:{align:`align`,id:`id`}})}return n})();var ut$1=new R$1(`MatPrefix`);var Ot=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(t){return new(t||n)};static ɵdir=tE({type:n,selectors:[[``,`matPrefix`,``],[``,`matIconPrefix`,``],[``,`matTextPrefix`,``]],inputs:{_isTextSelector:[0,`matTextPrefix`,`_isTextSelector`]},features:[ED([{provide:ut$1,useExisting:n}])]})}return n})();var ht$1=new R$1(`MatSuffix`);var Pt=(()=>{class n{set _isTextSelector(e){this._isText=!0}_isText=!1;static ɵfac=function(t){return new(t||n)};static ɵdir=tE({type:n,selectors:[[``,`matSuffix`,``],[``,`matIconSuffix`,``],[``,`matTextSuffix`,``]],inputs:{_isTextSelector:[0,`matTextSuffix`,`_isTextSelector`]},features:[ED([{provide:ht$1,useExisting:n}])]})}return n})();var pt$1=new R$1(`FloatingLabelParent`);var at$1=(()=>{class n{_elementRef=N$1(hr$1);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=N$1(ot$1);_ngZone=N$1(_e$5);_parent=N$1(pt$1);_resizeSubscription=new j$1;ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Lt(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:`border-box`}).subscribe(()=>this._handleResize())})}static ɵfac=function(t){return new(t||n)};static ɵdir=tE({type:n,selectors:[[`label`,`matFormFieldFloatingLabel`,``]],hostAttrs:[1,`mdc-floating-label`,`mat-mdc-floating-label`],hostVars:2,hostBindings:function(t,i){t&2&&Wp(`mdc-floating-label--float-above`,i.floating)},inputs:{floating:`floating`,monitorResize:`monitorResize`}})}return n})();function Lt(n){let f=n;if(f.offsetParent!==null)return f.scrollWidth;let e=f.cloneNode(!0);e.style.setProperty(`position`,`absolute`),e.style.setProperty(`transform`,`translate(-9999px, -9999px)`),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var lt$1=`mdc-line-ripple--active`;var ne$1=`mdc-line-ripple--deactivating`;var dt$1=(()=>{class n{_elementRef=N$1(hr$1);_cleanupTransitionEnd;constructor(){let e=N$1(_e$5),t=N$1(Oa);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,`transitionend`,this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ne$1),e.add(lt$1)}deactivate(){this._elementRef.nativeElement.classList.add(ne$1)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,i=t.contains(ne$1);e.propertyName===`opacity`&&i&&t.remove(lt$1,ne$1)};ngOnDestroy(){this._cleanupTransitionEnd()}static ɵfac=function(t){return new(t||n)};static ɵdir=tE({type:n,selectors:[[`div`,`matFormFieldLineRipple`,``]],hostAttrs:[1,`mdc-line-ripple`]})}return n})();var st$1=(()=>{class n{_elementRef=N$1(hr$1);_ngZone=N$1(_e$5);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(`.mdc-floating-label`);t?(e.classList.add(`mdc-notched-outline--upgraded`),typeof requestAnimationFrame==`function`&&(t.style.transitionDuration=`0s`,this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration=``)}))):e.classList.add(`mdc-notched-outline--no-label`)}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width=``:t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty(`--mat-form-field-notch-max-width`,`calc(100% - ${e}px)`)}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`notch`];return YI({type:n,selectors:[[`div`,`matFormFieldNotchedOutline`,``]],viewQuery:function(l,c){if(l&1&&jp(e,5),l&2){let m;BE(m=$E())&&(c._notch=m.first)}},hostAttrs:[1,`mdc-notched-outline`],hostVars:2,hostBindings:function(l,c){l&2&&Wp(`mdc-notched-outline--notched`,c.open)},inputs:{open:[0,`matFormFieldNotchedOutlineOpen`,`open`]},ngContentSelectors:[`*`],decls:5,vars:0,consts:[[`notch`,``],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__leading`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__notch`],[1,`mat-mdc-notch-piece`,`mdc-notched-outline__trailing`]],template:function(l,c){l&1&&(jE(),Sp(0,`div`,1),xc(1,`div`,2,0),VE(3),Ac(),Sp(4,`div`,3))},encapsulation:2})})()}return n})();var Se$1=(()=>{class n{id;ngField=null;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;stateChanges=null;value;static ɵfac=function(t){return new(t||n)};static ɵdir=tE({type:n})}return n})();var we$1=new R$1(`MatFormField`);var zt=new R$1(`MAT_FORM_FIELD_DEFAULT_OPTIONS`);var ct$1=`fill`;var Vt$2=`auto`;var ft$1=`fixed`;var Bt$1=`translateY(-50%)`;var gt$1=(()=>{class n{_elementRef=N$1(hr$1);_changeDetectorRef=N$1(yF);_platform=N$1(p);_idGenerator=N$1(Pt$1);_ngZone=N$1(_e$5);_defaults=N$1(zt,{optional:!0});_currentDirection;_unwrapMaybeSignal(e){return Bo(e)?e():e}_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=hF(`iconPrefixContainer`);_textPrefixContainerSignal=hF(`textPrefixContainer`);_iconSuffixContainerSignal=hF(`iconSuffixContainer`);_textSuffixContainerSignal=hF(`textSuffixContainer`);_prefixSuffixContainers=xD(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=gF(_e$2);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=oi$1(e)}_hideRequiredMarker=!1;color=`primary`;get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Vt$2}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||ct$1;this._appearanceSignal.set(t)}_appearanceSignal=jo$2(ct$1);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ft$1}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ft$1}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel=``;_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId(`mat-mdc-form-field-label-`);_hintLabelId=this._idGenerator.getId(`mat-mdc-hint-`);_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new Y$4;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=H$1();constructor(){let e=this._defaults,t=N$1(Ln$1);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ju(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-form-field-animations-enabled`)},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=Y$1(this._control.ngField)?null:this._control.ngControl.control.validator),this._previousControl=this._control,this._changeDetectorRef.markForCheck()),this._control.ngControl&&this._control.ngControl.control&&!Y$1(this._control.ngField)&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=xD(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel=`always`)}_initializeControl(e){let t=this._control,i=`mat-mdc-form-field-type-`;e&&this._elementRef.nativeElement.classList.remove(i+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(i+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges?.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges?.pipe(hg([void 0,void 0]),ze$2(()=>[this._unwrapMaybeSignal(t.errorState),t.userAriaDescribedBy]),dg(),On$2(([[l,c],[m,M]])=>l!==m||c!==M)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&!Y$1(t.ngField)&&(this._valueChanges=t.ngControl.valueChanges.pipe(gg(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),ng(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._unwrapMaybeSignal(this._control.focused);e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle(`mat-focused`,e),this._textField?.nativeElement.classList.toggle(`mdc-text-field--focused`,e)}_syncOutlineLabelOffset(){DF({earlyRead:()=>{if(this._appearanceSignal()!==`outline`)return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:`border-box`})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel===`always`}_hasOutline(){return this.appearance===`outline`}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=xD(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._shouldAlwaysFloat()||this._unwrapMaybeSignal(this._control.shouldLabelFloat):!1}_shouldForward(e){let t=this._control?.ngField||this._control?.ngControl;if(!t)return!1;if(Y$1(t)){let i=t();return e===`valid`?i.valid():e===`dirty`?i.dirty():e===`touched`?i.touched():e===`pending`?i.pending():e===`untouched`?!i.touched():e===`pristine`?!i.dirty():e===`invalid`?!i.valid():!1}else{let i=t;return e===`valid`?i.valid:e===`dirty`?i.dirty:e===`touched`?i.touched:e===`pending`?i.pending:e===`untouched`?i.untouched:e===`pristine`?i.pristine:e===`invalid`?i.invalid:!1}}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._unwrapMaybeSignal(this._control.errorState)?`error`:`hint`}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy==`string`&&e.push(...this._control.userAriaDescribedBy.split(` `)),this._getSubscriptMessageType()===`hint`){let l=this._hintChildren?this._hintChildren.find(m=>m.align===`start`):null,c=this._hintChildren?this._hintChildren.find(m=>m.align===`end`):null;l?e.push(l.id):this._hintLabel&&e.push(this._hintLabelId),c&&e.push(c.id)}else this._errorChildren&&e.push(...this._errorChildren.map(l=>l.id));let t=this._control.describedByIds,i;if(t){let l=this._describedByIds||e;i=e.concat(t.filter(c=>c&&!l.includes(c)))}else i=e;this._control.setDescribedByIds(i),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return[``,null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,i=this._iconSuffixContainer?.nativeElement,l=this._textSuffixContainer?.nativeElement,c=e?.getBoundingClientRect().width??0,m=t?.getBoundingClientRect().width??0,M=i?.getBoundingClientRect().width??0,R=l?.getBoundingClientRect().width??0;return[`var(--mat-mdc-form-field-label-transform, ${Bt$1} translateX(${`calc(${this._currentDirection===`rtl`?`-1`:`1`} * (${`${c+m}px`} + var(--mat-mdc-form-field-label-offset-x, 0px)))`}))`,c+m+M+R]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,i]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),i!==null&&this._notchedOutline?._setMaxWidth(i)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`iconPrefixContainer`],t=[`textPrefixContainer`],i=[`iconSuffixContainer`],l=[`textSuffixContainer`],c=[`textField`],m=[`*`,[[`mat-label`]],[[``,`matPrefix`,``],[``,`matIconPrefix`,``]],[[``,`matTextPrefix`,``]],[[``,`matTextSuffix`,``]],[[``,`matSuffix`,``],[``,`matIconSuffix`,``]],[[`mat-error`],[``,`matError`,``]],[[`mat-hint`,3,`align`,`end`]],[[`mat-hint`,`align`,`end`]]],M=[`*`,`mat-label`,`[matPrefix], [matIconPrefix]`,`[matTextPrefix]`,`[matTextSuffix]`,`[matSuffix], [matIconSuffix]`,`mat-error, [matError]`,`mat-hint:not([align='end'])`,`mat-hint[align='end']`];function R(o,d){o&1&&Mp(0,`span`,21)}function re(o,d){if(o&1&&(gi$1(0,`label`,20),VE(1,1),vE(2,R,1,0,`span`,21),Sc()),o&2){let r=PE(2);Np(`floating`,r._shouldLabelFloat())(`monitorResize`,r._hasOutline())(`id`,r._labelId),_p(`for`,r._control.disableAutomaticLabeling?null:r._control.id),Iv(2),EE(!r.hideRequiredMarker&&r._unwrapMaybeSignal(r._control.required)?2:-1)}}function oe(o,d){if(o&1&&vE(0,re,3,5,`label`,20),o&2){let r=PE();EE(r._hasFloatingLabel()?0:-1)}}function Me(o,d){o&1&&Mp(0,`div`,7)}function ae(o,d){}function le(o,d){if(o&1&&Dp(0,ae,0,0,`ng-template`,13),o&2){PE(2);let r=WE(1);Np(`ngTemplateOutlet`,r)}}function de(o,d){if(o&1&&(gi$1(0,`div`,9),vE(1,le,1,1,null,13),Sc()),o&2){let r=PE();Np(`matFormFieldNotchedOutlineOpen`,r._shouldLabelFloat()),Iv(),EE(r._forceDisplayInfixLabel()?-1:1)}}function yt(o,d){o&1&&(gi$1(0,`div`,10,2),VE(2,2),Sc())}function St(o,d){o&1&&(gi$1(0,`div`,11,3),VE(2,3),Sc())}function wt(o,d){}function Nt(o,d){if(o&1&&Dp(0,wt,0,0,`ng-template`,13),o&2){PE();let r=WE(1);Np(`ngTemplateOutlet`,r)}}function Mt(o,d){o&1&&(gi$1(0,`div`,14,4),VE(2,4),Sc())}function Ct(o,d){o&1&&(gi$1(0,`div`,15,5),VE(2,5),Sc())}function Ft(o,d){o&1&&Mp(0,`div`,16)}function Et(o,d){o&1&&(gi$1(0,`div`,18),VE(1,6),Sc())}function Rt(o,d){if(o&1&&(gi$1(0,`mat-hint`,22),fD(1),Sc()),o&2){let r=PE(2);Np(`id`,r._hintLabelId),Iv(),Yp(r.hintLabel)}}function Tt(o,d){if(o&1&&(gi$1(0,`div`,19),vE(1,Rt,2,2,`mat-hint`,22),VE(2,7),Mp(3,`div`,23),VE(4,8),Sc()),o&2){let r=PE();Iv(),EE(r.hintLabel?1:-1)}}return YI({type:n,selectors:[[`mat-form-field`]],contentQueries:function(d,r,s){if(d&1&&(Vp(s,r._labelChild,_e$2,5),Fp(s,Se$1,5)(s,ut$1,5)(s,ht$1,5)(s,mt$1,5)(s,ye$2,5)),d&2){UE();let h;BE(h=$E())&&(r._formFieldControl=h.first),BE(h=$E())&&(r._prefixChildren=h),BE(h=$E())&&(r._suffixChildren=h),BE(h=$E())&&(r._errorChildren=h),BE(h=$E())&&(r._hintChildren=h)}},viewQuery:function(d,r){if(d&1&&(Hp(r._iconPrefixContainerSignal,e,5)(r._textPrefixContainerSignal,t,5)(r._iconSuffixContainerSignal,i,5)(r._textSuffixContainerSignal,l,5),jp(c,5)(e,5)(t,5)(i,5)(l,5)(at$1,5)(st$1,5)(dt$1,5)),d&2){UE(4);let s;BE(s=$E())&&(r._textField=s.first),BE(s=$E())&&(r._iconPrefixContainer=s.first),BE(s=$E())&&(r._textPrefixContainer=s.first),BE(s=$E())&&(r._iconSuffixContainer=s.first),BE(s=$E())&&(r._textSuffixContainer=s.first),BE(s=$E())&&(r._floatingLabel=s.first),BE(s=$E())&&(r._notchedOutline=s.first),BE(s=$E())&&(r._lineRipple=s.first)}},hostAttrs:[1,`mat-mdc-form-field`],hostVars:38,hostBindings:function(d,r){d&2&&Wp(`mat-mdc-form-field-label-always-float`,r._shouldAlwaysFloat())(`mat-mdc-form-field-has-icon-prefix`,r._hasIconPrefix)(`mat-mdc-form-field-has-icon-suffix`,r._hasIconSuffix)(`mat-form-field-invalid`,r._unwrapMaybeSignal(r._control.errorState))(`mat-form-field-disabled`,r._unwrapMaybeSignal(r._control.disabled))(`mat-form-field-autofilled`,r._unwrapMaybeSignal(r._control.autofilled))(`mat-form-field-appearance-fill`,r.appearance==`fill`)(`mat-form-field-appearance-outline`,r.appearance==`outline`)(`mat-form-field-hide-placeholder`,r._hasFloatingLabel()&&!r._shouldLabelFloat())(`mat-primary`,r.color!==`accent`&&r.color!==`warn`)(`mat-accent`,r.color===`accent`)(`mat-warn`,r.color===`warn`)(`ng-untouched`,r._shouldForward(`untouched`))(`ng-touched`,r._shouldForward(`touched`))(`ng-pristine`,r._shouldForward(`pristine`))(`ng-dirty`,r._shouldForward(`dirty`))(`ng-valid`,r._shouldForward(`valid`))(`ng-invalid`,r._shouldForward(`invalid`))(`ng-pending`,r._shouldForward(`pending`))},inputs:{hideRequiredMarker:`hideRequiredMarker`,color:`color`,floatLabel:`floatLabel`,appearance:`appearance`,subscriptSizing:`subscriptSizing`,hintLabel:`hintLabel`},exportAs:[`matFormField`],features:[ED([{provide:we$1,useExisting:n},{provide:pt$1,useExisting:n}])],ngContentSelectors:M,decls:18,vars:21,consts:[[`labelTemplate`,``],[`textField`,``],[`iconPrefixContainer`,``],[`textPrefixContainer`,``],[`textSuffixContainer`,``],[`iconSuffixContainer`,``],[1,`mat-mdc-text-field-wrapper`,`mdc-text-field`,3,`click`],[1,`mat-mdc-form-field-focus-overlay`],[1,`mat-mdc-form-field-flex`],[`matFormFieldNotchedOutline`,``,3,`matFormFieldNotchedOutlineOpen`],[1,`mat-mdc-form-field-icon-prefix`],[1,`mat-mdc-form-field-text-prefix`],[1,`mat-mdc-form-field-infix`],[3,`ngTemplateOutlet`],[1,`mat-mdc-form-field-text-suffix`],[1,`mat-mdc-form-field-icon-suffix`],[`matFormFieldLineRipple`,``],[`aria-atomic`,`true`,`aria-live`,`polite`,1,`mat-mdc-form-field-subscript-wrapper`,`mat-mdc-form-field-bottom-align`],[1,`mat-mdc-form-field-error-wrapper`],[1,`mat-mdc-form-field-hint-wrapper`],[`matFormFieldFloatingLabel`,``,3,`floating`,`monitorResize`,`id`],[`aria-hidden`,`true`,1,`mat-mdc-form-field-required-marker`,`mdc-floating-label--required`],[3,`id`],[1,`mat-mdc-form-field-hint-spacer`]],template:function(d,r){if(d&1&&(jE(m),Dp(0,oe,1,1,`ng-template`,null,0,ND),gi$1(2,`div`,6,1),kp(`click`,function(h){return r._control.onContainerClick(h)}),vE(4,Me,1,0,`div`,7),gi$1(5,`div`,8),vE(6,de,2,2,`div`,9),vE(7,yt,3,0,`div`,10),vE(8,St,3,0,`div`,11),gi$1(9,`div`,12),vE(10,Nt,1,1,null,13),VE(11),Sc(),vE(12,Mt,3,0,`div`,14),vE(13,Ct,3,0,`div`,15),Sc(),vE(14,Ft,1,0,`div`,16),Sc(),gi$1(15,`div`,17),vE(16,Et,2,0,`div`,18)(17,Tt,5,1,`div`,19),Sc()),d&2){let s,h=r._unwrapMaybeSignal(r._control.disabled);Iv(2),Wp(`mdc-text-field--filled`,!r._hasOutline())(`mdc-text-field--outlined`,r._hasOutline())(`mdc-text-field--no-label`,!r._hasFloatingLabel())(`mdc-text-field--disabled`,h)(`mdc-text-field--invalid`,r._unwrapMaybeSignal(r._control.errorState)),Iv(2),EE(!r._hasOutline()&&!h?4:-1),Iv(2),EE(r._hasOutline()?6:-1),Iv(),EE(r._hasIconPrefix?7:-1),Iv(),EE(r._hasTextPrefix?8:-1),Iv(2),EE(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),Iv(2),EE(r._hasTextSuffix?12:-1),Iv(),EE(r._hasIconSuffix?13:-1),Iv(),EE(r._hasOutline()?-1:14),Iv(),Wp(`mat-mdc-form-field-subscript-dynamic-size`,r.subscriptSizing===`dynamic`);let It=r._getSubscriptMessageType();Iv(),EE((s=It)===`error`?16:s===`hint`?17:-1)}},dependencies:[at$1,st$1,io$1,dt$1,ye$2],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--%NS%disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-filled-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-filled-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-input-text-color, var(--%NS%mat-sys-on-surface));
  caret-color: var(--%NS%mat-form-field-outlined-caret-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-outlined-input-text-placeholder-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-filled-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--%NS%mat-form-field-outlined-error-caret-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--%NS%mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-top-right-radius: var(--%NS%mat-form-field-filled-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) {
  background-color: var(--%NS%mat-form-field-filled-container-color, var(--%NS%mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--%NS%mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-hover-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-filled-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-filled-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-filled-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-filled-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-filled-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-focus-label-text-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-focus-label-text-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--%NS%mat-form-field-outlined-error-hover-label-text-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--%NS%mat-form-field-outlined-label-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-form-field-outlined-label-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-form-field-outlined-label-text-weight, var(--%NS%mat-sys-body-large-weight));
  letter-spacing: var(--%NS%mat-form-field-outlined-label-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--%NS%required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-outline-color, var(--%NS%mat-sys-outline));
  border-width: var(--%NS%mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-hover-outline-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-focus-outline-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-hover-outline-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--%NS%mat-form-field-outlined-error-focus-outline-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--%NS%mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--%NS%mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--%NS%mat-form-field-outlined-container-shape, var(--%NS%mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--%NS%mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-active-indicator-color, var(--%NS%mat-sys-on-surface-variant));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-hover-active-indicator-color, var(--%NS%mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-active-indicator-color, var(--%NS%mat-sys-error));
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled).mdc-text-field--%NS%invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-hover-active-indicator-color, var(--%NS%mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--%NS%mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--%NS%filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-focus-active-indicator-color, var(--%NS%mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--%NS%invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--%NS%mat-form-field-filled-error-focus-active-indicator-color, var(--%NS%mat-sys-error));
}

.mdc-line-ripple--%NS%active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--%NS%deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--%NS%no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --%NS%mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--%NS%mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--%NS%mat-form-field-container-height, 56px);
  padding-top: var(--%NS%mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--%NS%mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--%NS%mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--%NS%mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--%NS%mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--%NS%mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --%NS%mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--%NS%mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--%NS%mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--%NS%mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--%NS%mat-form-field-error-text-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-subscript-text-font, var(--%NS%mat-sys-body-small-font));
  line-height: var(--%NS%mat-form-field-subscript-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  font-size: var(--%NS%mat-form-field-subscript-text-size, var(--%NS%mat-sys-body-small-size));
  letter-spacing: var(--%NS%mat-form-field-subscript-text-tracking, var(--%NS%mat-sys-body-small-tracking));
  font-weight: var(--%NS%mat-form-field-subscript-text-weight, var(--%NS%mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-form-field-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--%NS%mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--%NS%mat-form-field-select-option-text-color, var(--%NS%mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--%NS%mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--%NS%mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--%NS%mat-form-field-enabled-select-arrow-color, var(--%NS%mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-focus-select-arrow-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--%NS%mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --%NS%mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--%NS%mat-form-field-container-text-font, var(--%NS%mat-sys-body-large-font));
  line-height: var(--%NS%mat-form-field-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  font-size: var(--%NS%mat-form-field-container-text-size, var(--%NS%mat-sys-body-large-size));
  letter-spacing: var(--%NS%mat-form-field-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
  font-weight: var(--%NS%mat-form-field-container-text-weight, var(--%NS%mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--%NS%mat-form-field-outlined-label-text-populated-size) * var(--%NS%mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--%NS%mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-leading-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--%NS%mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-trailing-icon-color, var(--%NS%mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-hover-trailing-icon-color, var(--%NS%mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--%NS%mat-form-field-error-focus-trailing-icon-color, var(--%NS%mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--%NS%filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2})})()}return n})();var Ne$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=JI({type:n});static ɵinj=Bl({imports:[Te$1,gt$1,gt$3]})}return n})();var Ht$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=YI({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-text-field-style-loader`,``],decls:0,vars:0,template:function(t,i){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2})}return n})();var jt={passive:!0};var bt$1=(()=>{class n{_platform=N$1(p);_ngZone=N$1(_e$5);_renderer=N$1(lr$1).createRenderer(null,null);_styleLoader=N$1(O$1);_monitoredElements=new Map;monitor(e){if(!this._platform.isBrowser)return pt$4;this._styleLoader.load(Ht$1);let t=T$1(e),i=this._monitoredElements.get(t);if(i)return i.subject;let l=new Y$4,c=`cdk-text-field-autofilled`,m=R=>{R.animationName===`cdk-text-field-autofill-start`&&!t.classList.contains(c)?(t.classList.add(c),this._ngZone.run(()=>l.next({target:R.target,isAutofilled:!0}))):R.animationName===`cdk-text-field-autofill-end`&&t.classList.contains(c)&&(t.classList.remove(c),this._ngZone.run(()=>l.next({target:R.target,isAutofilled:!1})))},M=this._ngZone.runOutsideAngular(()=>(t.classList.add(`cdk-text-field-autofill-monitored`),this._renderer.listen(t,`animationstart`,m,jt)));return this._monitoredElements.set(t,{subject:l,unlisten:M}),l}stopMonitoring(e){let t=T$1(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove(`cdk-text-field-autofill-monitored`),t.classList.remove(`cdk-text-field-autofilled`),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static ɵfac=function(t){return new(t||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var xt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=JI({type:n});static ɵinj=Bl({})}return n})();var vt$1=new R$1(`MAT_INPUT_VALUE_ACCESSOR`);var _t=(()=>{class n{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),i=e().touched();return t&&i}static ɵfac=function(t){return new(t||n)};static ɵprov=pr$1({token:n,factory:n.ɵfac})}return n})();var ie$1=class{_defaultMatcher;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;ngControl;formField;constructor(f,e,t,i,l){this._defaultMatcher=f,this._parentFormGroup=t,this._parentForm=i,this._stateChanges=l,e?Bo(e.field)&&!e.updateValueAndValidity?(this.formField=e,this.ngControl=null):(this.formField=null,this.ngControl=e):this.ngControl=this.formField=null}updateErrorState(){let f=this.errorState,e=this._getCurrentErrorState(this.matcher||this._defaultMatcher);e!==f&&(this.errorState=e,this._stateChanges.next())}_getCurrentErrorState(f){if(this.formField&&f?.isSignalErrorState)return f.isSignalErrorState(this.formField.field())??!1;let e=this._parentFormGroup||this._parentForm,t=this.ngControl?this.ngControl.control:null;return f?.isErrorState(t,e)??!1}};var qt$2=[`button`,`checkbox`,`file`,`hidden`,`image`,`radio`,`range`,`reset`,`submit`];var Kt$2=new R$1(`MAT_INPUT_CONFIG`);var Ji$1=(()=>{class n{_elementRef=N$1(hr$1);_platform=N$1(p);ngControl=N$1(B,{optional:!0,self:!0});_autofillMonitor=N$1(bt$1);_ngZone=N$1(_e$5);_formField=N$1(we$1,{optional:!0});_renderer=N$1(Oa);_uid=N$1(Pt$1).getId(`mat-input-`);_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=N$1(Kt$2,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new Y$4;controlType=`mat-input`;autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=oi$1(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(bn$3.required)??!1}set required(e){this._required=oi$1(e)}_required;get type(){return this._type}set type(e){this._type=e||`text`,this._validateType(),!this._isTextarea&&Ko().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type=`text`;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=oi$1(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=[`date`,`datetime`,`datetime-local`,`month`,`time`,`week`].filter(e=>Ko().has(e));constructor(){let e=N$1(Ns,{optional:!0}),t=N$1(Ls,{optional:!0}),i=N$1(_t),l=N$1(vt$1,{optional:!0,self:!0}),c=N$1(rt$1,{optional:!0,self:!0}),m=this._elementRef.nativeElement,M=m.nodeName.toLowerCase();l?Bo(l.value)?this._signalBasedValueAccessor=l:this._inputValueAccessor=l:this._inputValueAccessor=m,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(m,`keyup`,this._iOSKeyupListener)}),this._errorStateTracker=new ie$1(i,c||this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=M===`select`,this._isTextarea=M===`textarea`,this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=m.multiple?`mat-native-select-multiple`:`mat-native-select`),this._signalBasedValueAccessor&&ju(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type===`number`?(t.type=`text`,t.setSelectionRange(0,0),t.type=`number`):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute(`placeholder`,e):t.removeAttribute(`placeholder`)}}_getPlaceholder(){return this.placeholder||null}_validateType(){qt$2.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute(`aria-describedby`)?.split(` `)||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute(`aria-describedby`,e.join(` `)):t.removeAttribute(`aria-describedby`)}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?`true`:null}static ɵfac=function(t){return new(t||n)};static ɵdir=tE({type:n,selectors:[[`input`,`matInput`,``],[`textarea`,`matInput`,``],[`select`,`matNativeControl`,``],[`input`,`matNativeControl`,``],[`textarea`,`matNativeControl`,``]],hostAttrs:[1,`mat-mdc-input-element`],hostVars:21,hostBindings:function(t,i){t&1&&kp(`focus`,function(){return i._focusChanged(!0)})(`blur`,function(){return i._focusChanged(!1)})(`input`,function(){return i._onInput()}),t&2&&(Rp(`id`,i.id)(`disabled`,i.disabled&&!i.disabledInteractive)(`required`,i.required),_p(`name`,i.name||null)(`readonly`,i._getReadonlyAttribute())(`aria-disabled`,i.disabled&&i.disabledInteractive?`true`:null)(`aria-invalid`,i.empty&&i.required?null:i.errorState)(`aria-required`,i.required)(`id`,i.id),Wp(`mat-input-server`,i._isServer)(`mat-mdc-form-field-textarea-control`,i._isInFormField&&i._isTextarea)(`mat-mdc-form-field-input-control`,i._isInFormField)(`mat-mdc-input-disabled-interactive`,i.disabledInteractive)(`mdc-text-field__input`,i._isInFormField)(`mat-mdc-native-select-inline`,i._isInlineSelect()))},inputs:{disabled:`disabled`,id:`id`,placeholder:`placeholder`,name:`name`,required:`required`,type:`type`,errorStateMatcher:`errorStateMatcher`,userAriaDescribedBy:[0,`aria-describedby`,`userAriaDescribedBy`],value:`value`,readonly:`readonly`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,IF]},exportAs:[`matInput`],features:[ED([{provide:Se$1,useExisting:n}]),Em]})}return n})();var er$1=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=JI({type:n});static ɵinj=Bl({imports:[Ne$1,Ne$1,xt,gt$3]})}return n})();var f=`primary`;var He=Symbol(`RouteTitle`);var Gt$1=class{params;constructor(n){this.params=n||{}}has(n){return Object.hasOwn(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ie(t){return new Gt$1(t)}function qt$1(t,n,e){for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(i[0]===`:`)e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function tn(t,n,e){let r=e.path.split(`/`),i=r.indexOf(`**`);if(i===-1){if(r.length>t.length||e.pathMatch===`full`&&(n.hasChildren()||r.length<t.length))return null;let s={},u=t.slice(0,r.length);return qt$1(r,u,s)?{consumed:u,posParams:s}:null}if(i!==r.lastIndexOf(`**`))return null;let o=r.slice(0,i),a=r.slice(i+1);if(o.length+a.length>t.length||e.pathMatch===`full`&&n.hasChildren()&&e.path!==`**`)return null;let c={};return!qt$1(o,t.slice(0,o.length),c)||!qt$1(a,t.slice(t.length-a.length),c)?null:{consumed:t,posParams:c}}function st(t){return new Promise((n,e)=>{t.pipe(lg()).subscribe({next:r=>n(r),error:r=>e(r)})})}function Zn(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!F$1(t[e],n[e]))return!1;return!0}function F$1(t,n){let e=t?Wt$1(t):void 0,r=n?Wt$1(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!rn$1(t[i],n[i]))return!1;return!0}function Wt$1(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function rn$1(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,o)=>r[o]===i)}else return t===n}function Jn(t){return t.length>0?t[t.length-1]:null}function ue(t){return Wh(t)?t:_c(t)?we$4(Promise.resolve(t)):$h(t)}function nn(t){return Wh(t)?st(t):Promise.resolve(t)}var Xn={exact:an,subset:sn$1};var on$1={exact:ei,subset:ti,ignored:()=>!0};var sr={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var ve={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function cr(t,n,e){let r=t instanceof M?t:n.parseUrl(t);return xD(()=>ct(n.lastSuccessfulNavigation()?.finalUrl??new M,r,e))}function ct(t,n,e){let r=W$1(W$1({},ve),e||{});return Xn[r.paths](t.root,n.root,r.matrixParams)&&on$1[r.queryParams](t.queryParams,n.queryParams)&&!(r.fragment===`exact`&&t.fragment!==n.fragment)}function ei(t,n){return F$1(t,n)}function an(t,n,e){if(!ne(t.segments,n.segments)||!it(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!an(t.children[r],n.children[r],e))return!1;return!0}function ti(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>rn$1(t[e],n[e]))}function sn$1(t,n,e){return cn$1(t,n,n.segments,e)}function cn$1(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!ne(i,e)||n.hasChildren()||!it(i,e,r))}else if(t.segments.length===e.length){if(!ne(t.segments,e)||!it(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!sn$1(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!ne(t.segments,i)||!it(t.segments,i,r)||!t.children[f]?!1:cn$1(t.children[f],n,o,r)}}function it(t,n,e){return n.every((r,i)=>on$1[e](t[i].parameters,r.parameters))}var M=class{root;queryParams;fragment;_queryParamMap;constructor(n=new m([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=ie(this.queryParams),this._queryParamMap}toString(){return ii.serialize(this)}};var m=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ot(this)}};var K=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=ie(this.parameters),this._parameterMap}toString(){return ln$1(this)}};function ri(t,n){return ne(t,n)&&t.every((e,r)=>F$1(e.parameters,n[r].parameters))}function ne(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function ni(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===f&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==f&&(e=e.concat(n(i,r)))}),e}var Ce$1=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=pr$1({token:t,factory:()=>new Y})}return t})();var Y=class{parse(n){let e=new Kt$1(n);return new M(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){return`${`/${Te(n.root,!0)}`}${si(n.queryParams)}${typeof n.fragment==`string`?`#${oi(n.fragment)}`:``}`}};var ii=new Y;function ot(t){return t.segments.map(n=>ln$1(n)).join(`/`)}function Te(t,n){if(!t.hasChildren())return ot(t);if(n){let e=t.children[f]?Te(t.children[f],!1):``,r=[];return Object.entries(t.children).forEach(([i,o])=>{i!==f&&r.push(`${i}:${Te(o,!1)}`)}),r.length>0?`${e}(${r.join(`//`)})`:e}else{let e=ni(t,(r,i)=>i===f?[Te(t.children[f],!1)]:[`${i}:${Te(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[f]!=null?`${ot(t)}/${e[0]}`:`${ot(t)}/(${e.join(`//`)})`}}function un(t){return encodeURIComponent(t).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function rt(t){return un(t).replace(/%3B/gi,`;`)}function oi(t){return encodeURI(t)}function Qt$1(t){return un(t).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function at(t){return decodeURIComponent(t)}function Kr(t){return at(t.replace(/\+/g,`%20`))}function ln$1(t){return`${Qt$1(t.path)}${ai(t.parameters)}`}function ai(t){return Object.entries(t).map(([n,e])=>`;${Qt$1(n)}=${Qt$1(e)}`).join(``)}function si(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${rt(e)}=${rt(i)}`).join(`&`):`${rt(e)}=${rt(r)}`).filter(e=>e);return n.length?`?${n.join(`&`)}`:``}var Ht=1073741824;function ut(t,n,e){Number(n)>=32&&!Object.hasOwn(t,Ht)&&(t[Ht]=e,delete t[Ht]),t[n]=e}var ci=/^[^\/()?;#]+/;function Ft(t){let n=t.match(ci);return n?n[0]:``}var ui=/^[^\/()?;=#]+/;function li(t){let n=t.match(ui);return n?n[0]:``}var di=/^[^=?&#]+/;function hi(t){let n=t.match(di);return n?n[0]:``}var fi=/^[^&#]+/;function pi(t){let n=t.match(fi);return n?n[0]:``}var Kt$1=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new m([],{}):new m([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional(`?`))do this.parseQueryParam(n);while(this.consumeOptional(`&`));return n}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new _(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let r={};this.peekStartsWith(`/(`)&&(this.capture(`/`),r=this.parseParens(!0,n));let i={};return this.peekStartsWith(`(`)&&(i=this.parseParens(!1,n)),(e.length>0||Object.keys(r).length>0)&&(i[f]=new m(e,r)),i}parseSegment(){let n=Ft(this.remaining);if(n===``&&this.peekStartsWith(`;`))throw new _(4009,!1);return this.capture(n),new K(at(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(`;`);)this.parseParam(n);return n}parseParam(n){let e=li(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let i=Ft(this.remaining);i&&(r=i,this.capture(r))}ut(n,at(e),at(r))}parseQueryParam(n){let e=hi(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let a=pi(this.remaining);a&&(r=a,this.capture(r))}let i=Kr(e),o=Kr(r);if(Object.hasOwn(n,i)){let a=n[i];Array.isArray(a)||(a=[a],n[i]=a),a.push(o)}else n[i]=o}parseParens(n,e){let r=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let i=Ft(this.remaining),o=this.remaining[i.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new _(4010,!1);let a;i.indexOf(`:`)>-1?(a=i.slice(0,i.indexOf(`:`)),this.capture(a),this.capture(`:`)):n&&(a=f);let c=this.parseChildren(e+1),s=Object.keys(c).length===1&&c[f]?c[f]:new m([],c);ut(r,a??f,s),this.consumeOptional(`//`)}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new _(4011,!1)}};function dn$1(t){return t.segments.length>0?new m([],{[f]:t}):t}function hn$1(t){let n=Object.create(null);for(let[r,i]of Object.entries(t.children)){let o=hn$1(i);if(r===f&&o.segments.length===0&&o.hasChildren())for(let[a,c]of Object.entries(o.children))ut(n,a,c);else(o.segments.length>0||o.hasChildren())&&ut(n,r,o)}return gi(new m(t.segments,n))}function gi(t){if(t.numberOfChildren===1&&t.children[f]){let n=t.children[f];return new m(t.segments.concat(n.segments),n.children)}return t}function Z(t){return t instanceof M}function fn$1(t,n,e=null,r=null,i=new Y){return gn(pn(t),n,e,r,i)}function pn(t){let n;function e(o){let a={};for(let s of o.children){let u=e(s);a[s.outlet]=u}let c=new m(o.url,a);return o===t&&(n=c),c}let i=dn$1(e(t.root));return n??i}function gn(t,n,e,r,i){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Bt(o,o,o,e,r,i);let a=vi(n);if(a.toRoot())return Bt(o,o,new m([],{}),e,r,i);let c=mi(a,o,t),s=c.processChildren?Ne(c.segmentGroup,c.index,a.commands):mn(c.segmentGroup,c.index,a.commands);return Bt(o,c.segmentGroup,s,e,r,i)}function lt(t){return typeof t==`object`&&t!=null&&!t.outlets&&!t.segmentPath}function Pe(t){return typeof t==`object`&&t!=null&&t.outlets}function Yr(t,n,e){t||=`ɵ`;let r=new M;return r.queryParams={[t]:n},e.parse(e.serialize(r)).queryParams[t]}function Bt(t,n,e,r,i,o){let a={};for(let[u,l]of Object.entries(r??{}))a[u]=Array.isArray(l)?l.map(v=>Yr(u,v,o)):Yr(u,l,o);let c;t===n?c=e:c=vn$1(t,n,e);return new M(dn$1(hn$1(c)),a,i)}function vn$1(t,n,e){let r=Object.create(null);return Object.entries(t.children).forEach(([i,o])=>{o===n?r[i]=e:r[i]=vn$1(o,n,e)}),new m(t.segments,r)}var dt=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&lt(r[0]))throw new _(4003,!1);let i=r.find(Pe);if(i&&i!==Jn(r))throw new _(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function vi(t){if(typeof t[0]==`string`&&t.length===1&&t[0]===`/`)return new dt(!0,0,t);let n=0,e=!1,r=t.reduce((i,o,a)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([s,u])=>{c[s]=typeof u==`string`?u.split(`/`):u}),[...i,{outlets:c}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!=`string`?[...i,o]:a===0?(o.split(`/`).forEach((c,s)=>{s==0&&c===`.`||(s==0&&c===``?e=!0:c===`..`?n++:c!=``&&i.push(c))}),i):[...i,o]},[]);return new dt(e,n,r)}var pe=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function mi(t,n,e){if(t.isAbsolute)return new pe(n,!0,0);if(!e)return new pe(n,!1,NaN);if(e.parent===null)return new pe(e,!0,0);let r=lt(t.commands[0])?0:1;return yi(e,e.segments.length-1+r,t.numberOfDoubleDots)}function yi(t,n,e){let r=t,i=n,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new _(4005,!1);i=r.segments.length}return new pe(r,!1,i-o)}function Ri(t){return Pe(t[0])?t[0].outlets:{[f]:t}}function mn(t,n,e){if(t??=new m([],{}),t.segments.length===0&&t.hasChildren())return Ne(t,n,e);let r=Si(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let o=new m(t.segments.slice(0,r.pathIndex),{});return o.children[f]=new m(t.segments.slice(r.pathIndex),t.children),Ne(o,0,i)}else return r.match&&i.length===0?new m(t.segments,{}):r.match&&!t.hasChildren()?Yt$1(t,n,e):r.match?Ne(t,0,i):Yt$1(t,n,e)}function Ne(t,n,e){if(e.length===0)return new m(t.segments,{});{let r=Ri(e),i=Object.create(null);if(Object.keys(r).some(o=>o!==f)&&t.children[f]&&t.numberOfChildren===1&&t.children[f].segments.length===0){let o=Ne(t.children[f],n,e);return new m(t.segments,o.children)}return Object.entries(r).forEach(([o,a])=>{typeof a==`string`&&(a=[a]),a!==null&&(i[o]=mn(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{r[o]===void 0&&(i[o]=a)}),new m(t.segments,i)}}function Si(t,n,e){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return o;let a=t.segments[i],c=e[r];if(Pe(c))break;let s=`${c}`,u=r<e.length-1?e[r+1]:null;if(i>0&&s===void 0)break;if(s&&u&&typeof u==`object`&&u.outlets===void 0){if(!Jr(s,u,a))return o;r+=2}else{if(!Jr(s,{},a))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function Yt$1(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let o=e[i];if(Pe(o))return new m(r,Ci(o.outlets));if(i===0&&lt(e[0])){let s=t.segments[n];r.push(new K(s.path,Zr(e[0]))),i++;continue}let a=Pe(o)?o.outlets[f]:`${o}`,c=i<e.length-1?e[i+1]:null;a&&c&&lt(c)?(r.push(new K(a,Zr(c))),i+=2):(r.push(new K(a,{})),i++)}return new m(r,{})}function Ci(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r==`string`&&(r=[r]),r!==null&&(n[e]=Yt$1(new m([],{}),0,r))}),n}function Zr(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function Jr(t,n,e){return t==e.path&&F$1(n,e.parameters)}var ht=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new oe(this.rootInjector)}resetChildren(){this.children=new oe(this.rootInjector)}};var oe=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new ht(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(r){return new(r||t)(Ce$4(ge$2))};static ɵprov=ie$3({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var ft=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Zt(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=Zt(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=Jt$1(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return Jt$1(n,this._root).map(e=>e.value)}};function Zt(t,n){if(t===n.value)return n;for(let e of n.children){let r=Zt(t,e);if(r)return r}return null}function Jt$1(t,n){if(t===n.value)return[n];for(let e of n.children){let r=Jt$1(t,e);if(r.length)return r.unshift(n),r}return[]}var E=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function fe(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Le=class extends ft{snapshot;constructor(n,e){super(n),this.snapshot=e,lr(this,n)}toString(){return this.snapshot.toString()}};function yn$1(t,n){let e=wi(t,n),r=new _n$3([new K(``,{})]),i=new _n$3({}),o=new _n$3({}),s=new V(r,i,new _n$3({}),new _n$3(``),o,f,t,e.root);return s.snapshot=e.root,new Le(new E(s,[]),e)}function wi(t,n){return new je(``,new E(new me([],{},{},``,{},f,t,null,{},n),[]))}var V=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(n,e,r,i,o,a,c,s){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=a,this.component=c,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(ze$2(u=>u[He]))??$h(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(ze$2(n=>ie(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(ze$2(n=>ie(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(n){this._futureSnapshot=n,this.pending?.set(!0)}};var bi=`always`;function ur(t,n,e){let r,{routeConfig:i}=t;return n!==null&&(e===`always`||i?.path===``||!n.component&&!n.routeConfig?.loadComponent)?r={params:Object.keys(t.params).length===0?n.params:Object.freeze(W$1(W$1({},n.params),t.params)),data:Object.freeze(W$1(W$1({},n.data),t.data)),resolve:W$1(W$1(W$1(W$1({},t.data),n.data),i?.data),t._resolvedData)}:r={params:Object.freeze(W$1({},t.params)),data:Object.freeze(W$1({},t.data)),resolve:W$1(W$1({},t.data),t._resolvedData??{})},i&&Sn(i)&&(r.resolve[He]=i.title),r}var me=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[He]}constructor(n,e,r,i,o,a,c,s,u,l){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=a,this.component=c,this.routeConfig=s,this._resolve=u,this._environmentInjector=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ie(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ie(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var je=class extends ft{url;constructor(n,e){super(e),this.url=n,lr(this,e)}toString(){return Rn(this._root)}};function lr(t,n){n.value._routerState=t,n.children.forEach(e=>lr(t,e))}function Rn(t){let n=t.children.length>0?` { ${t.children.map(Rn).join(`, `)} } `:``;return`${t.value}${n}`}function Vt$1(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,F$1(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),F$1(n.params,e.params)||t.paramsSubject.next(e.params),Zn(n.url,e.url)||t.urlSubject.next(e.url),F$1(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Xt$1(t,n){let e=F$1(t.params,n.params)&&ri(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||Xt$1(t.parent,n.parent))}function Sn(t){return typeof t.title==`string`||t.title===null}var Cn=new R$1(``);var dr=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=f;activateEvents=new Le$2;deactivateEvents=new Le$2;attachEvents=new Le$2;detachEvents=new Le$2;routerOutletData=pF();parentContexts=N$1(oe);location=N$1(_i$1);changeDetector=N$1(yF);inputBinder=N$1(Mt,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new _(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new _(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new _(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new _(4013,!1);this._activatedRoute=e;let i=this.location,a=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,s=new er(e,c,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:s,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(r){return new(r||t)};static ɵdir=tE({type:t,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[Em]})}return t})();var er=class{route;childContexts;parent;outletData;constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===V?this.route:n===oe?this.childContexts:n===Cn?this.outletData:this.parent.get(n,e)}};var Mt=new R$1(``);var hr=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=YI({type:t,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(r,i){r&1&&Mp(0,`router-outlet`)},dependencies:[dr],encapsulation:2,changeDetection:1})}return t})();function fr(t){let n=t.children&&t.children.map(fr),e=n?q$3(W$1({},t),{children:n}):W$1({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==f&&(e.component=hr),e}var _e$1=`imperative`;var C=(function(t){return t[t.NavigationStart=0]=`NavigationStart`,t[t.NavigationEnd=1]=`NavigationEnd`,t[t.NavigationCancel=2]=`NavigationCancel`,t[t.NavigationError=3]=`NavigationError`,t[t.RoutesRecognized=4]=`RoutesRecognized`,t[t.ResolveStart=5]=`ResolveStart`,t[t.ResolveEnd=6]=`ResolveEnd`,t[t.GuardsCheckStart=7]=`GuardsCheckStart`,t[t.GuardsCheckEnd=8]=`GuardsCheckEnd`,t[t.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,t[t.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,t[t.ChildActivationStart=11]=`ChildActivationStart`,t[t.ChildActivationEnd=12]=`ChildActivationEnd`,t[t.ActivationStart=13]=`ActivationStart`,t[t.ActivationEnd=14]=`ActivationEnd`,t[t.Scroll=15]=`Scroll`,t[t.NavigationSkipped=16]=`NavigationSkipped`,t})(C||{});var O=class{id;url;constructor(n,e){this.id=n,this.url=e}};var ae=class extends O{type=C.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r=`imperative`,i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var z=class extends O{urlAfterRedirects;type=C.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var b=(function(t){return t[t.Redirect=0]=`Redirect`,t[t.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,t[t.NoDataFromResolver=2]=`NoDataFromResolver`,t[t.GuardRejected=3]=`GuardRejected`,t[t.Aborted=4]=`Aborted`,t})(b||{});var xe$1=(function(t){return t[t.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,t[t.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,t})(xe$1||{});var L$1=class extends O{reason;code;type=C.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function wn(t){return t instanceof L$1&&(t.code===b.Redirect||t.code===b.SupersededByNewNavigation)}var G$1=class extends O{reason;code;type=C.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}};var se=class extends O{error;target;type=C.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var ke=class extends O{urlAfterRedirects;state;type=C.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var pt=class extends O{urlAfterRedirects;state;type=C.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var gt=class extends O{urlAfterRedirects;state;shouldActivate;type=C.GuardsCheckEnd;constructor(n,e,r,i,o){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var vt=class extends O{urlAfterRedirects;state;type=C.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var mt=class extends O{urlAfterRedirects;state;type=C.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var yt=class{route;type=C.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var Rt=class{route;type=C.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var St=class{snapshot;type=C.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var Ct=class{snapshot;type=C.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var wt=class{snapshot;type=C.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var bt=class{snapshot;type=C.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var ye$1=class{};var $e=class{};var Re=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function Ii(t){return!(t instanceof ye$1)&&!(t instanceof Re)&&!(t instanceof $e)}function Ei(t,n,e){let r=new Set;return{newlyCreatedRoutes:r,state:new Le(ze(t,n._root,e?e._root:void 0,r),n)}}function ze(t,n,e,r){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._setPending(n.value);return new E(i,Mi(t,n,e,r))}else{if(t.shouldAttach(n.value)){let a=t.retrieve(n.value);if(a!==null){let c=a.route;return c.value._setPending(n.value),c.children=n.children.map(s=>ze(t,s,void 0,r)),c}}let i=Ai(n.value);i._setPending(n.value),r.add(i);return new E(i,n.children.map(a=>ze(t,a,void 0,r)))}}function Mi(t,n,e,r){return n.children.map(i=>{for(let o of e.children)if(t.shouldReuseRoute(i.value,o.value.snapshot))return ze(t,i,o,r);return ze(t,i,void 0,r)})}function Ai(t){return new V(new _n$3(t.url),new _n$3(t.params),new _n$3(t.queryParams),new _n$3(t.fragment),new _n$3(t.data),t.outlet,t.component,t)}var ce=class t extends Error{redirectTo;navigationBehaviorOptions;constructor(n,e){super(),this.redirectTo=n,this.navigationBehaviorOptions=e,Object.setPrototypeOf(this,t.prototype)}};var bn$1=`ngNavigationCancelingError`;function Oe(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=Z(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=In(!1,b.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function In(t,n){let e=new Error(`NavigationCancelingError: ${t||``}`);return e[bn$1]=!0,e.cancellationCode=n,e}function Ti(t){return En(t)&&Z(t.url)}function En(t){return!!t&&t[bn$1]}var tr=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),Vt$1(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=fe(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,i[a],r),delete i[a]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(i===o)if(i.component){let a=r.getContext(i.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=fe(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);if(r&&r.outlet){let a=r.outlet.detach(),c=r.children.contexts;r.resetChildren(),this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:c})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=fe(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,r){let i=fe(e);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new bt(o.value.snapshot))}),n.children.length&&this.forwardEvent(new Ct(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(Vt$1(i),i===o)if(i.component){let a=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let a=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let c=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(c.contexts),a.attachRef=c.componentRef,a.route=c.route.value,a.outlet&&a.outlet.attach(c.componentRef,c.route.value),Vt$1(c.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,r)}};var It=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}};var ge=class{component;route;constructor(n,e){this.component=n,this.route=e}};function Di(t,n,e){let r=t._root;return De(r,n?n._root:null,e,[r.value])}function Ni(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function we(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t==`function`&&!_g(t)?t:n.get(t):r}function De(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=fe(n);return t.children.forEach(a=>{_i(a,o[a.value.outlet],e,r.concat([a.value]),i),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,c])=>Ue(c,e.getContext(a),e,i)),i}function _i(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,c=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=Oi(a,o,o.routeConfig.runGuardsAndResolvers);s?i.canActivateChecks.push(new It(r)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?De(t,n,c?c.children:null,r,i):De(t,n,e,r,i),s&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new ge(c.outlet.component,a))}else a&&Ue(n,c,e,i),i.canActivateChecks.push(new It(r)),o.component?De(t,null,c?c.children:null,r,i):De(t,null,e,r,i);return i}function Oi(t,n,e){if(typeof e==`function`)return Do$2(n._environmentInjector,()=>e(t,n));switch(e){case`pathParamsChange`:return!ne(t.url,n.url);case`pathParamsOrQueryParamsChange`:return!ne(t.url,n.url)||!F$1(t.queryParams,n.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!Xt$1(t,n)||!F$1(t.queryParams,n.queryParams);default:return!Xt$1(t,n)}}function Ue(t,n,e,r){let i=fe(t),o=t.value;Object.entries(i).forEach(([a,c])=>{o.component?n?Ue(c,n.children.getContext(a),n.children,r):Ue(c,null,null,r):Ue(c,e?e.getContext(a):null,e,r)}),o.component?n&&n.outlet&&n.outlet.isActivated?r.canDeactivateChecks.push(new ge(n.outlet.component,o)):r.canDeactivateChecks.push(new ge(null,o)):r.canDeactivateChecks.push(new ge(null,o))}function Fe(t){return typeof t==`function`}function Ui(t){return typeof t==`boolean`}function Pi(t){return t&&Fe(t.canLoad)}function Li(t){return t&&Fe(t.canActivate)}function ji(t){return t&&Fe(t.canActivateChild)}function xi(t){return t&&Fe(t.canDeactivate)}function ki(t){return t&&Fe(t.canMatch)}function Mn$1(t){return t instanceof An$2||t?.name===`EmptyError`}var nt=Symbol(`INITIAL_VALUE`);function Se(){return bl(t=>Jh(t.map(n=>n.pipe(Wi$1(1),hg(nt)))).pipe(ze$2(n=>{for(let e of n)if(e!==!0){if(e===nt)return nt;if(e===!1||$i(e))return e}return!0}),On$2(n=>n!==nt),Wi$1(1)))}function $i(t){return Z(t)||t instanceof ce}function An(t){return t.aborted?$h(void 0).pipe(Wi$1(1)):new T$2(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener(`abort`,e),()=>t.removeEventListener(`abort`,e)})}function Tn(t){return gg(An(t))}function zi(t){return gt$4(n=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?$h(q$3(W$1({},n),{guardsResult:!0})):qi(o,e,r).pipe(gt$4(a=>a&&Ui(a)?Hi(e,i,t):$h(a)),ze$2(a=>q$3(W$1({},n),{guardsResult:a})))})}function qi(t,n,e){return we$4(t).pipe(gt$4(r=>Wi(r.component,r.route,e,n)),lg(r=>r!==!0,!0))}function Hi(t,n,e){return we$4(n).pipe(og(r=>Kr$1(Bi(r.route.parent,e),Fi(r.route,e),Gi(t,r.path),Vi(t,r.route))),lg(r=>r!==!0,!0))}function Fi(t,n){return t!==null&&n&&n(new wt(t)),$h(!0)}function Bi(t,n){return t!==null&&n&&n(new St(t)),$h(!0)}function Vi(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return $h(!0);let r=e.map(i=>eg(()=>{let o=n._environmentInjector,a=we(i,o);return ue(Li(a)?a.canActivate(n,t):Do$2(o,()=>a(n,t))).pipe(lg())}));return $h(r).pipe(Se())}function Gi(t,n){let e=n[n.length-1],i=n.slice(0,n.length-1).reverse().map(o=>Ni(o)).filter(o=>o!==null).map(o=>eg(()=>{let a=o.guards.map(c=>{let s=o.node._environmentInjector,u=we(c,s);return ue(ji(u)?u.canActivateChild(e,t):Do$2(s,()=>u(e,t))).pipe(lg())});return $h(a).pipe(Se())}));return $h(i).pipe(Se())}function Wi(t,n,e,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return $h(!0);let o=i.map(a=>{let c=n._environmentInjector,s=we(a,c);return ue(xi(s)?s.canDeactivate(t,n,e,r):Do$2(c,()=>s(t,n,e,r))).pipe(lg())});return $h(o).pipe(Se())}function Qi(t,n,e,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return $h(!0);let a=o.map(c=>{let s=we(c,t),l=ue(Pi(s)?s.canLoad(n,e):Do$2(t,()=>s(n,e)));return i?l.pipe(Tn(i)):l});return $h(a).pipe(Se(),Dn(r))}function Dn(t){return Nh(Cl(n=>{if(typeof n!=`boolean`)throw Oe(t,n)}),ze$2(n=>n===!0))}function Ki(t,n,e,r,i,o){let a=n.canMatch;if(!a||a.length===0)return $h(!0);let c=a.map(s=>{let u=we(s,t);return ue(ki(u)?u.canMatch(n,e,i):Do$2(t,()=>u(n,e,i))).pipe(Tn(o))});return $h(c).pipe(Se(),Dn(r))}var H=class t extends Error{name=`NoMatch`;segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}};var qe=class t extends Error{urlTree;name=`AbsoluteRedirect`;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function Yi(t){throw new _(4e3,!1)}function Zi(t){throw In(!1,b.GuardRejected)}var rr=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[f])throw Yi(`${n.redirectTo}`);i=i.children[f]}}async applyRedirectCommands(n,e,r,i,o){let a=await Ji(e,i,o);if(a instanceof M)throw new qe(a);let c=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,r);if(a[0]===`/`)throw new qe(c);return c}applyRedirectCreateUrlTree(n,e,r,i){return new M(this.createSegmentGroup(n,e.root,r,i),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o==`string`&&o[0]===`:`){let c=o.substring(1);r[i]=e[c]}else r[i]=o}),r}createSegmentGroup(n,e,r,i){let o=this.createSegments(n,e.segments,r,i),a=Object.create(null);return Object.entries(e.children).forEach(([c,s])=>{a[c]=this.createSegmentGroup(n,s,r,i)}),new m(o,a)}createSegments(n,e,r,i){return e.map(o=>o.path[0]===`:`?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new _(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}};function Ji(t,n,e){if(typeof t==`string`)return Promise.resolve(t);let r=t;return st(ue(Do$2(e,()=>r(n))))}function Xi(t,n){return t.providers&&!t._injector&&(t._injector=gp(t.providers,n,`Route: ${t.path}`)),t._injector??n}function $(t){return t.outlet||f}function eo(t,n){let e=t.filter(r=>$(r)===n);return e.push(...t.filter(r=>$(r)!==n)),e}var nr={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Nn(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function to(t,n,e,r,i,o,a){let c=_n$1(t,n,e);if(!c.matched)return $h(c);let s=Nn(o(c));return r=Xi(n,r),Ki(r,n,e,i,s,a).pipe(ze$2(u=>u===!0?c:W$1({},nr)))}function _n$1(t,n,e){if(n.path===``)return n.pathMatch===`full`&&(t.hasChildren()||e.length>0)?W$1({},nr):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||tn)(e,t,n);if(!i)return W$1({},nr);let o={};Object.entries(i.posParams??{}).forEach(([c,s])=>{o[c]=s.path});let a=i.consumed.length>0?W$1(W$1({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function Xr(t,n,e,r,i){return e.length>0&&io(t,e,r,i)?{segmentGroup:new m(n,no(r,new m(e,t.children))),slicedSegments:[]}:e.length===0&&oo(t,e,r)?{segmentGroup:new m(t.segments,ro(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new m(t.segments,t.children),slicedSegments:e}}function ro(t,n,e,r){let i={};for(let o of e)if(At(t,n,o)&&!r[$(o)]){let a=new m([],{});i[$(o)]=a}return W$1(W$1({},r),i)}function no(t,n){let e={};e[f]=n;for(let r of t)if(r.path===``&&$(r)!==f){let i=new m([],{});e[$(r)]=i}return e}function io(t,n,e,r){return e.some(i=>!At(t,n,i)||!($(i)!==f)?!1:!(r!==void 0&&$(i)===r))}function oo(t,n,e){return e.some(r=>At(t,n,r))}function At(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch===`full`?!1:e.path===``}function ao(t,n,e){return n.length===0&&!t.hasChildren()}var ir=class{};async function so(t,n,e,r,i,o,a,c){return new or(t,n,e,r,i,a,o,c).recognize()}var co=31;var or=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;queryParams;constructor(n,e,r,i,o,a,c,s){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=c,this.abortSignal=s,this.applyRedirects=new rr(this.urlSerializer,this.urlTree),this.queryParams=Object.freeze(W$1({},this.urlTree.queryParams))}noMatchError(n){return new _(4002,`'${n.segmentGroup}'`)}async recognize(){let n=Xr(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:r}=await this.match(n),o=new je(``,new E(r,e)),a=fn$1(r,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new me([],Object.freeze({}),this.queryParams,this.urlTree.fragment,Object.freeze({}),f,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,f,e),rootSnapshot:e}}catch(r){if(r instanceof qe)return this.absoluteRedirectCount++,this.absoluteRedirectCount>co&&(this.allowRedirects=!1),this.urlTree=r.urlTree,this.queryParams=Object.freeze(W$1({},this.urlTree.queryParams)),this.match(r.urlTree.root);throw r instanceof H?this.noMatchError(r):r}}async processSegmentGroup(n,e,r,i,o){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,e,r,o);let a=await this.processSegment(n,e,r,r.segments,i,!0,o);return a instanceof E?[a]:[]}async processChildren(n,e,r,i){let o=[];for(let s of Object.keys(r.children))s===`primary`?o.unshift(s):o.push(s);let a=[];for(let s of o){let u=r.children[s],l=eo(e,s),v=await this.processSegment(n,l,u,u.segments,s,!0,i);v instanceof E&&a.push(v)}let c=On(a);return uo(c),c}async processSegment(n,e,r,i,o,a,c){for(let s of e)try{return await this.processSegmentAgainstRoute(s._injector??n,e,s,r,i,o,a,c)}catch(u){if(u instanceof H||Mn$1(u))continue;throw u}if(ao(r,i))return new ir;throw new H(r)}async processSegmentAgainstRoute(n,e,r,i,o,a,c,s){if($(r)!==a&&(a===f||!At(i,o,r)||!r.children?.length&&!r.loadChildren||o.length===0&&!i.hasChildren()))throw new H(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,a,s);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,a,s);throw new H(i)}async expandSegmentAgainstRouteUsingRedirect(n,e,r,i,o,a,c){let{matched:s,parameters:u,consumedSegments:l,positionalParamSegments:v,remainingSegments:g}=_n$1(e,i,o);if(!s)throw new H(e);let w=this.createSnapshot(n,i,o,u,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let j=await this.applyRedirects.applyRedirectCommands(l,i.redirectTo,v,Nn(w),n),J=await this.applyRedirects.lineralizeSegments(i,j);return this.processSegment(n,r,e,J.concat(g),a,!1,c)}createSnapshot(n,e,r,i,o){let a=new me(r,i,this.queryParams,this.urlTree.fragment,fo(e),$(e),e.component??e._loadedComponent??null,e,po(e),n),c=ur(a,o,this.paramsInheritanceStrategy);return a.params=c.params,a.data=c.data,a}async matchSegmentAgainstRoute(n,e,r,i,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=X=>this.createSnapshot(n,r,X.consumedSegments,X.parameters,a),s=await st(to(e,r,i,n,this.urlSerializer,c,this.abortSignal));if(r.path===`**`&&(e.children={}),!s?.matched)throw new H(e);n=r._injector??n;let{routes:u}=await this.getChildConfig(n,r,i),l=r._loadedInjector??n,{parameters:v,consumedSegments:g,remainingSegments:w}=s,j=this.createSnapshot(n,r,g,v,a),{segmentGroup:J,slicedSegments:Ie}=Xr(e,g,w,u,o),de=$(r)===o;if(de&&Ie.length===0&&J.hasChildren())return new E(j,await this.processChildren(l,u,J,j));if(de&&u.length===0&&Ie.length===0)return new E(j,[]);let Ee=await this.processSegment(l,u,J,Ie,de?f:o,!0,j);if(!de&&!(Ee instanceof E))throw new H(e);return new E(j,Ee instanceof E?[Ee]:[])}async getChildConfig(n,e,r){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await st(Qi(n,e,r,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Zi(e)}return{routes:[],injector:n}}};function uo(t){t.sort((n,e)=>n.value.outlet===f?-1:e.value.outlet===f?1:n.value.outlet.localeCompare(e.value.outlet))}function lo(t){let n=t.value.routeConfig;return n&&n.path===``}function On(t){let n=[],e=new Set;for(let i of t){if(!lo(i)){n.push(i);continue}let o=n.find(a=>i.value.routeConfig===a.value.routeConfig);o!==void 0?(o.children.push(...i.children),e.add(o)):n.push(i)}for(let i of e){let o=On(i.children);n.push(new E(i.value,o))}let r=n.filter(i=>!e.has(i));return ho(r),r}function ho(t){let n=Object.create(null);t.forEach(e=>{let r=n[e.value.outlet];if(r){r.url.map(a=>a.toString()).join(`/`);e.value.url.map(a=>a.toString()).join(`/`);throw new _(4006,!1)}n[e.value.outlet]=e.value})}function fo(t){return t.data||{}}function po(t){return t.resolve||{}}function go(t,n,e,r,i,o,a){return gt$4(async c=>{let{state:s,tree:u}=await so(t,n,e,r,c.extractedUrl,i,o,a);return q$3(W$1({},c),{targetSnapshot:s,urlAfterRedirects:u})})}function vo(t){return gt$4(n=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=n;if(!r.length)return $h(n);let i=new Set(r.map(c=>c.route)),o=new Set;for(let c of i)if(!o.has(c))for(let s of Un(c))o.add(s);let a=0;return we$4(o).pipe(og(c=>i.has(c)?mo(c,e,t):(c.data=ur(c,c.parent,t).resolve,$h(void 0))),Cl(()=>a++),ug(1),gt$4(c=>a===o.size?$h(n):pt$4))})}function Un(t){return[t,...t.children.map(e=>Un(e)).flat()]}function mo(t,n,e){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!Sn(r)&&(i[He]=r.title),eg(()=>(t.data=ur(t,t.parent,e).resolve,yo(i,t,n).pipe(ze$2(o=>(t._resolvedData=o,t.data=W$1(W$1({},t.data),o),null)))))}function yo(t,n,e){let r=Wt$1(t);if(r.length===0)return $h({});let i={};return we$4(r).pipe(gt$4(o=>Ro(t[o],n,e).pipe(lg(),Cl(a=>{if(a instanceof ce)throw Oe(new Y,a);i[o]=a}))),ug(1),ze$2(()=>i),Ui$1(o=>Mn$1(o)?pt$4:Uh(o)))}function Ro(t,n,e){let r=n._environmentInjector,i=we(t,r);return ue(i.resolve?i.resolve(n,e):Do$2(r,()=>i(n,e)))}var Pn=new R$1(``);function ar(t){return bl(n=>{let e=t(n);return e?we$4(e).pipe(ze$2(()=>n)):$h(n)})}var pr=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===f);return r}getResolvedTitleForRoute(e){return e.data[He]}static ɵfac=function(r){return new(r||t)};static ɵprov=pr$1({token:t,factory:()=>N$1(Ln)})}return t})();var Ln=(()=>{class t extends pr{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static ɵfac=function(r){return new(r||t)(Ce$4(Ql))};static ɵprov=ie$3({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var be=new R$1(``,{factory:()=>({})});var Be=new R$1(``);var jn=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=N$1(MD);async loadComponent(e,r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await nn(Do$2(e,()=>r.loadComponent())),a=await kn(fF(o));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=a,a}finally{this.componentLoaders.delete(r)}})();return this.componentLoaders.set(r,i),i}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await xn(r,this.compiler,e,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}})();return this.childrenLoaders.set(r,i),i}static ɵfac=function(r){return new(r||t)};static ɵprov=pr$1({token:t,factory:t.ɵfac})}return t})();async function xn(t,n,e,r){let i=await nn(Do$2(e,()=>t.loadChildren())),o=await kn(fF(i)),a;o instanceof hp||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),r&&r(t);let c,s,l;return Array.isArray(a)?s=a:(c=a.create(e).injector,l=a,s=c.get(Be,[],{optional:!0,self:!0}).flat()),{routes:s.map(fr),injector:c,factory:l}}async function kn(t){return t}var Tt=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=pr$1({token:t,factory:()=>N$1(So)})}return t})();var So=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static ɵfac=function(r){return new(r||t)};static ɵprov=pr$1({token:t,factory:t.ɵfac})}return t})();var $n=new R$1(``);var Co=()=>{};var zn=new R$1(``);var qn=(()=>{class t{currentNavigation=jo$2(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=jo$2(null);events=new Y$4;transitionAbortWithErrorSubject=new Y$4;configLoader=N$1(jn);environmentInjector=N$1(ge$2);destroyRef=N$1(Te$2);urlSerializer=N$1(Ce$1);rootContexts=N$1(oe);location=N$1(Dr);inputBindingEnabled=N$1(Mt,{optional:!0})!==null;titleStrategy=N$1(pr);options=N$1(be,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||bi;urlHandlingStrategy=N$1(Tt);createViewTransition=N$1($n,{optional:!0});navigationErrorHandler=N$1(zn,{optional:!0});routerResourcesFeature=N$1(Pn,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>$h(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new yt(i)),r=i=>this.events.next(new Rt(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;uh(()=>{this.transitions?.next(q$3(W$1({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new _n$3(null),this.transitions.pipe(On$2(r=>r!==null),bl(r=>{let i=!0,o=!1,a=new AbortController,c=()=>!o&&this.currentTransition?.id===r.id;return $h(r).pipe(bl(s=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,``,b.SupersededByNewNavigation),pt$4;this.currentTransition=r;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl==`string`?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:u?q$3(W$1({},u),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&v!==`reload`)return this.events.next(new G$1(s.id,this.urlSerializer.serialize(s.rawUrl),``,xe$1.IgnoredSameUrlNavigation)),s.resolve(!1),pt$4;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return $h(s).pipe(bl(g=>(this.events.next(new ae(g.id,this.urlSerializer.serialize(g.extractedUrl),g.source,g.restoredState)),g.id!==this.navigationId?pt$4:Promise.resolve(g))),go(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),Cl(g=>{r.targetSnapshot=g.targetSnapshot,r.urlAfterRedirects=g.urlAfterRedirects,this.currentNavigation.update(w=>(w.finalUrl=g.urlAfterRedirects,w)),this.events.next(new $e)}),bl(g=>we$4(r.routesRecognizeHandler.deferredHandle??$h(void 0)).pipe(ze$2(()=>g))),Cl(()=>{let g=new ke(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:g,extractedUrl:w,source:j,restoredState:J,extras:Ie}=s,de=new ae(g,this.urlSerializer.serialize(w),j,J);this.events.next(de);let Ee=yn$1(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=q$3(W$1({},s),{targetSnapshot:Ee,urlAfterRedirects:w,extras:q$3(W$1({},Ie),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(X=>(X.finalUrl=w,X)),$h(r)}else return this.events.next(new G$1(s.id,this.urlSerializer.serialize(s.extractedUrl),``,xe$1.IgnoredByUrlHandlingStrategy)),s.resolve(!1),pt$4}),ze$2(s=>{let u=new pt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(u),this.currentTransition=r=q$3(W$1({},s),{guards:Di(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),r}),zi(s=>this.events.next(s)),bl(s=>{if(r.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!=`boolean`)throw Oe(this.urlSerializer,s.guardsResult);let u=new gt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(u),!c())return pt$4;if(!s.guardsResult)return this.cancelNavigationTransition(s,``,b.GuardRejected),pt$4;if(s.guards.canActivateChecks.length===0)return $h(s);let l=new vt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!c())return pt$4;let v=!1;return $h(s).pipe(vo(this.paramsInheritanceStrategy),Cl({next:()=>{v=!0;let g=new mt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(g)},complete:()=>{v||this.cancelNavigationTransition(s,``,b.NoDataFromResolver)}}))}),ar(s=>{let u=v=>{let g=[];if(v.routeConfig?._loadedComponent)v.component=v.routeConfig?._loadedComponent;else if(v.routeConfig?.loadComponent){let w=v._environmentInjector;g.push(this.configLoader.loadComponent(w,v.routeConfig).then(j=>{v.component=j}))}for(let w of v.children)g.push(...u(w));return g},l=u(s.targetSnapshot.root);return l.length===0?$h(s):we$4(Promise.all(l).then(()=>s))}),bl(s=>{let{newlyCreatedRoutes:u,state:l}=Ei(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=r=s=q$3(W$1({},s),{targetRouterState:l,newlyCreatedRoutes:u}),this.currentNavigation.update(v=>(v.targetRouterState=l,v)),$h(s)}),this.routerResourcesFeature?.setupAndRunResources(a.signal)??(s=>s),ar(()=>this.afterPreactivation()),bl(()=>{let{currentSnapshot:s,targetSnapshot:u}=r,l=this.createViewTransition?.(this.environmentInjector,s.root,u.root,r.hasUAVisualTransition);return l?we$4(l).pipe(ze$2(()=>r)):$h(r)}),Wi$1(1),bl(s=>{i=!1,this.events.next(new ye$1);let u=r.beforeActivateHandler.deferredHandle;return u?we$4(u.then(()=>s)):$h(s)}),Cl(s=>{new tr(e.routeReuseStrategy,r.targetRouterState,r.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),c()&&(Hn(s.targetRouterState),o=!0,this.currentNavigation.update(u=>(u.abort=Co,u)),this.lastSuccessfulNavigation.set(uh(this.currentNavigation)),this.events.next(new z(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),gg(An(a.signal).pipe(On$2(()=>!o&&i),Cl(()=>{this.cancelNavigationTransition(r,a.signal.reason+``,b.Aborted)}))),Cl({complete:()=>{o=!0}}),gg(this.transitionAbortWithErrorSubject.pipe(Cl(s=>{throw s}))),qc(()=>{a.abort(),o||this.cancelNavigationTransition(r,``,b.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ui$1(s=>{if(o=!0,en(r),this.destroyed)return r.resolve(!1),pt$4;if(s instanceof ce&&(s=Oe(this.urlSerializer,s)),En(s))this.events.next(new L$1(r.id,this.urlSerializer.serialize(r.extractedUrl),s.message,s.cancellationCode)),Ti(s)?this.events.next(new Re(s.url,s.navigationBehaviorOptions)):r.resolve(!1);else{let u=new se(r.id,this.urlSerializer.serialize(r.extractedUrl),s,r.targetSnapshot??void 0);try{let l=Do$2(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(l instanceof ce){let{message:v,cancellationCode:g}=Oe(this.urlSerializer,l);this.events.next(new L$1(r.id,this.urlSerializer.serialize(r.extractedUrl),v,g)),this.events.next(new Re(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(u),s}catch(l){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(l)}}return pt$4}))}))}cancelNavigationTransition(e,r,i){en(e);let o=new L$1(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=uh(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static ɵfac=function(r){return new(r||t)};static ɵprov=pr$1({token:t,factory:t.ɵfac})}return t})();function wo(t){return t!==_e$1}function en(t){for(let n of t.newlyCreatedRoutes??[])n._localInjector?.destroy(),n._localInjector=void 0;Hn(t.targetRouterState)}function Hn(t){if(!t)return;let n=e=>{e.value.pending?.set(!1),e.children.forEach(n)};n(t._root)}var Fn=new R$1(``);var Bn=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=pr$1({token:t,factory:()=>N$1(bo)})}return t})();var Et=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}};var bo=(()=>{class t extends Et{static ɵfac=function(r){return new(r||t)};static ɵprov=pr$1({token:t,factory:t.ɵfac})}return t})();var Dt=(()=>{class t{urlSerializer=N$1(Ce$1);options=N$1(be,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=N$1(Dr);urlHandlingStrategy=N$1(Tt);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new M;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,a=i??o;return a instanceof M?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:i}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=e):this.rawUrlTree=i}routerState=yn$1(null,N$1(ge$2));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(r){return new(r||t)};static ɵprov=pr$1({token:t,factory:()=>N$1(Io)})}return t})();var Io=(()=>{class t extends Dt{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type===`popstate`&&setTimeout(()=>{e(r.url,r.state,`popstate`,{replaceUrl:!0},r.hasUAVisualTransition)})})}handleRouterEvent(e,r){e instanceof ae?this.updateStateMemento():e instanceof G$1?this.commitTransition(r):e instanceof ke?this.urlUpdateStrategy===`eager`&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof ye$1?(this.commitTransition(r),this.urlUpdateStrategy===`deferred`&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof L$1&&!wn(e)?this.restoreHistory(r):e instanceof se?this.restoreHistory(r,!0):e instanceof z&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let{extras:i,id:o}=r,{replaceUrl:a,state:c}=i;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,u=W$1(W$1({},c),this.generateNgRouterState(o,s,r));this.location.replaceState(e,``,u)}else{let s=W$1(W$1({},c),this.generateNgRouterState(o,this.browserPageId+1,r));this.location.go(e,``,s)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution===`computed`){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r,i){return this.canceledNavigationResolution===`computed`?W$1({navigationId:e,ɵrouterPageId:r},this.routerUrlState(i)):W$1({navigationId:e},this.routerUrlState(i))}static ɵfac=function(r){return new(r||t)};static ɵprov=pr$1({token:t,factory:t.ɵfac})}return t})();function gr(t,n){t.events.pipe(On$2(e=>e instanceof z||e instanceof L$1||e instanceof se||e instanceof G$1),ze$2(e=>e instanceof z||e instanceof G$1?0:(e instanceof L$1?e.code===b.Redirect||e.code===b.SupersededByNewNavigation:!1)?2:1),On$2(e=>e!==2),Wi$1(1)).subscribe(()=>{n()})}var le=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=N$1(hE);stateManager=N$1(Dt);options=N$1(be,{optional:!0})||{};pendingTasks=N$1(Ot$3);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=N$1(qn);urlSerializer=N$1(Ce$1);location=N$1(Dr);urlHandlingStrategy=N$1(Tt);injector=N$1(ge$2);_events=new Y$4;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=N$1(Bn);injectorCleanup=N$1(Fn,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=N$1(Be,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!N$1(Mt,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new j$1;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=uh(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof L$1&&r.code!==b.Redirect&&r.code!==b.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof z)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof Re){let a=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),s=W$1({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy===`eager`||wo(i.source)},a);this.scheduleNavigation(c,_e$1,null,s,i.hasUAVisualTransition,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Ii(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),_e$1,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,i,o,a)=>{this.navigateToSyncWithBrowser(e,i,r,o,a)})}navigateToSyncWithBrowser(e,r,i,o,a){let c=i?.navigationId?i:null,s=i?.ɵrouterUrl??e;if(i?.ɵrouterUrl&&(o=q$3(W$1({},o),{browserUrl:e})),i){let l=W$1({},i);delete l.navigationId,delete l.ɵrouterPageId,delete l.ɵrouterUrl,Object.keys(l).length!==0&&(o.state=l)}let u=this.parseUrl(s);this.scheduleNavigation(u,r,c,o,a).catch(l=>{this.disposed||this.injector.get(kt$2)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return uh(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(fr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:s}=r,u=s?this.currentUrlTree.fragment:a,l=null;switch(c??this.options.defaultQueryParamsHandling){case`merge`:l=W$1(W$1({},this.currentUrlTree.queryParams),o);break;case`preserve`:l=this.currentUrlTree.queryParams;break;default:l=o||null}l!==null&&(l=this.removeEmptyProps(l));let v;try{v=pn(i?i.snapshot:this.routerState.snapshot.root)}catch{(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),v=this.currentUrlTree.root}return gn(v,e,l,u??null,this.urlSerializer)}navigateByUrl(e,r={skipLocationChange:!1}){let i=Z(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,_e$1,null,r)}navigate(e,r={skipLocationChange:!1}){return Eo(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(lo$1(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,r){let i;if(r===!0?i=W$1({},sr):r===!1?i=W$1({},ve):i=W$1(W$1({},ve),r),Z(e))return ct(this.currentUrlTree,e,i);let o=this.parseUrl(e);return ct(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(e,r,i,o,a,c){if(this.disposed)return Promise.resolve(!1);let s,u,l;c?(s=c.resolve,u=c.reject,l=c.promise):l=new Promise((g,w)=>{s=g,u=w});let v=this.pendingTasks.add();return gr(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(v))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,hasUAVisualTransition:a,resolve:s,reject:u,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static ɵfac=function(r){return new(r||t)};static ɵprov=pr$1({token:t,factory:t.ɵfac})}return t})();function Eo(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new _(4008,!1)}var Ao=(()=>{class t{router=N$1(le);stateManager=N$1(Dt);fragment=jo$2(``);queryParams=jo$2({});path=jo$2(``);serializer=N$1(Ce$1);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof z&&this.updateState()})}updateState(){let{fragment:e,root:r,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new M(r)))}static ɵfac=function(r){return new(r||t)};static ɵprov=pr$1({token:t,factory:t.ɵfac})}return t})();var Nt=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=N$1(new dh(`href`),{optional:!0});reactiveHref=RD(()=>{if(!this.isAnchorElement)return this.hrefAttributeValue;this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r===`preserve`||r===`merge`;return(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams(),this.computeHref(this.createUrlTree())});get href(){return uh(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return uh(this._target)}_target=jo$2(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return uh(this._queryParams)}_queryParams=jo$2(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return uh(this._fragment)}_fragment=jo$2(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return uh(this._queryParamsHandling)}_queryParamsHandling=jo$2(void 0);set state(e){this._state.set(e)}get state(){return uh(this._state)}_state=jo$2(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return uh(this._info)}_info=jo$2(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return uh(this._relativeTo)}_relativeTo=jo$2(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return uh(this._preserveFragment)}_preserveFragment=jo$2(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return uh(this._skipLocationChange)}_skipLocationChange=jo$2(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return uh(this._replaceUrl)}_replaceUrl=jo$2(!1);browserUrl=pF(void 0);isAnchorElement;onChanges=new Y$4;applicationErrorHandler=N$1(kt$2);options=N$1(be,{optional:!0});reactiveRouterState=N$1(Ao);constructor(e,r,i,o,a,c){this.router=e,this.route=r,this.tabIndexAttribute=i,this.renderer=o,this.el=a,this.locationStrategy=c;let s=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s===`a`||s===`area`||!!(typeof customElements==`object`&&customElements.get(s)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=jo$2(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Z(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,r,i,o,a){let c=this.urlTree;if(c===null||this.isAnchorElement&&(e!==0||r||i||o||a||typeof this.target==`string`&&this.target!=`_self`))return!0;let s=this.browserUrl(),u=W$1({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(c,u)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,r){let i=this.renderer,o=this.el.nativeElement;r!==null?i.setAttribute(o,e,r):i.removeAttribute(o,e)}createUrlTree(){let e=this.routerLinkInput();return e===null||!this.router.createUrlTree?null:Z(e)?e:this.router.createUrlTree(e,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})}get urlTree(){return uh(()=>this.createUrlTree())}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(r){return new(r||t)(Er(le),Er(V),$d(`tabindex`),Er(Oa),Er(hr$1),Er(dt$2))};static ɵdir=tE({type:t,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(r,i){r&1&&kp(`click`,function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),r&2&&_p(`href`,i.reactiveHref(),Oy)(`target`,i._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,IF],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,IF],replaceUrl:[2,`replaceUrl`,`replaceUrl`,IF],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[Em]})}return t})();var To=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new Le$2;link=N$1(Nt,{optional:!0});constructor(e,r,i,o){this.router=e,this.element=r,this.renderer=i,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof z&&this.update()})}ngAfterContentInit(){$h(this.links.changes,$h(null)).pipe(Rn$2()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(r=>!!r).map(r=>r.onChanges);this.linkInputChangesSubscription=we$4(e).pipe(Rn$2()).subscribe(r=>{this._isActive!==this.isLinkActive(this.router)(r)&&this.update()})}set routerLinkActive(e){if(e==null){this.classes=[];return}let r=Array.isArray(e)?e:e.split(` `);this.classes=r.filter(i=>!!i)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||this.routerLinkActiveOptions===null&&!this._isActive||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(r=>{e?this.renderer.addClass(this.element.nativeElement,r):this.renderer.removeClass(this.element.nativeElement,r)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,`aria-current`,this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,`aria-current`),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let r=this.routerLinkActiveOptions;if(r===null)return()=>!1;let i;return r===void 0?i=W$1({},ve):Do(r)?i=r:r.exact??!1?i=W$1({},sr):i=W$1({},ve),o=>{let a=o.urlTree;return a?uh(cr(a,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static ɵfac=function(r){return new(r||t)(Er(le),Er(hr$1),Er(Oa),Er(yF))};static ɵdir=tE({type:t,selectors:[[``,`routerLinkActive`,``]],contentQueries:function(r,i,o){if(r&1&&Fp(o,Nt,5),r&2){let a;BE(a=$E())&&(i.links=a)}},inputs:{routerLinkActiveOptions:`routerLinkActiveOptions`,ariaCurrentWhenActive:`ariaCurrentWhenActive`,routerLinkActive:`routerLinkActive`},outputs:{isActiveChange:`isActiveChange`},exportAs:[`routerLinkActive`],features:[Em]})}return t})();function Do(t){let n=t;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var No=new R$1(``);function _o(t,...n){return Kl([{provide:Be,multi:!0,useValue:t},{provide:V,useFactory:Oo},{provide:Cp,multi:!0,useFactory:Uo},n.map(e=>e.ɵproviders)])}function Oo(){return N$1(le).routerState.root}function Uo(){let t=N$1(oe$2);return n=>{let e=t.get(Ni$1);if(n!==e.components[0])return;let r=t.get(le),i=t.get(Po);t.get(Lo)===1&&r.initialNavigation(),t.get(jo,null,{optional:!0})?.setUpPreloading(),t.get(No,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var Po=new R$1(``,{factory:()=>new Y$4});var Lo=new R$1(``,{factory:()=>1});var jo=new R$1(``);var l={Workforce360:`القوى العاملة 360`,"HR Workspace":`مساحة الموارد البشرية`,"Main navigation":`التنقل الرئيسي`,Dashboard:`لوحة التحكم`,Employees:`الموظفون`,Attendance:`الحضور`,Reports:`التقارير`,Settings:`الإعدادات`,English:`الإنجليزية`,Arabic:`العربية`,"Switch to English":`التبديل إلى الإنجليزية`,"Switch to Arabic":`التبديل إلى العربية`,"Search employees...":`البحث عن الموظفين...`,"Manage your organization's employees":`إدارة موظفي مؤسستك`,"Add Employee":`إضافة موظف`,"Search employees":`البحث عن الموظفين`,Department:`القسم`,"All Departments":`جميع الأقسام`,"Human Resources":`الموارد البشرية`,Engineering:`الهندسة`,Finance:`المالية`,Marketing:`التسويق`,Status:`الحالة`,"All Status":`جميع الحالات`,Active:`نشط`,Employee:`الموظف`,Position:`المسمى الوظيفي`,"Join Date":`تاريخ الانضمام`,Actions:`الإجراءات`,"No employees found":`لم يتم العثور على موظفين`,"Try changing your search or filters.":`جرّب تغيير البحث أو عوامل التصفية.`,Departments:`الأقسام`,"Manage your organization's departments and teams.":`إدارة أقسام وفرق مؤسستك.`,"Add Department":`إضافة قسم`,"Total Departments":`إجمالي الأقسام`,"Active Departments":`الأقسام النشطة`,"Search departments...":`البحث عن الأقسام...`,"Describe the department...":`صف القسم...`,"Enter manager name":`أدخل اسم المدير`,"e.g. Information Technology":`مثال: تقنية المعلومات`,Inactive:`غير نشط`,Manager:`المدير`,"No departments found":`لم يتم العثور على أقسام`,"Try changing your search or filter.":`جرّب تغيير البحث أو عامل التصفية.`,"Edit Department":`تعديل القسم`,"Update department information.":`تحديث معلومات القسم.`,"Create a new department.":`إنشاء قسم جديد.`,"Department Name":`اسم القسم`,Description:`الوصف`,"Department Manager":`مدير القسم`,Cancel:`إلغاء`,"Save Changes":`حفظ التغييرات`,"Add Attendance":`إضافة سجل حضور`,"Total Records":`إجمالي السجلات`,"Present Today":`الحاضرون اليوم`,"Absent Today":`الغائبون اليوم`,"On Leave":`في إجازة`,"Search attendance records...":`البحث في سجلات الحضور...`,"Track employee attendance and daily working hours.":`متابعة حضور الموظفين وساعات العمل اليومية.`,Present:`حاضر`,Absent:`غائب`,Date:`التاريخ`,"Check In":`تسجيل الحضور`,"Check Out":`تسجيل الانصراف`,"Clear Filters":`مسح عوامل التصفية`,"Edit Attendance":`تعديل سجل الحضور`,"Update attendance information.":`تحديث معلومات الحضور.`,"Add a daily attendance record.":`إضافة سجل حضور يومي.`,"Employee Name":`اسم الموظف`,"Employee ID":`الرقم الوظيفي`,"Save Profile":`حفظ الملف الشخصي`,"Save Preferences":`حفظ التفضيلات`,"Save Notifications":`حفظ الإشعارات`,"Manage your account, preferences and application settings.":`إدارة حسابك وتفضيلاتك وإعدادات التطبيق.`,Profile:`الملف الشخصي`,General:`عام`,Notifications:`الإشعارات`,Appearance:`المظهر`,Security:`الأمان`,Account:`الحساب`,"Profile Information":`معلومات الملف الشخصي`,"Manage your personal and professional information.":`إدارة معلوماتك الشخصية والمهنية.`,"Full Name":`الاسم الكامل`,"Job Title":`المسمى الوظيفي`,"Email Address":`البريد الإلكتروني`,"Phone Number":`رقم الهاتف`,"General Settings":`الإعدادات العامة`,"Configure your language, timezone and date preferences.":`تكوين اللغة والمنطقة الزمنية وتفضيلات التاريخ.`,Language:`اللغة`,Timezone:`المنطقة الزمنية`,"Date Format":`تنسيق التاريخ`,"Choose which notifications you want to receive.":`اختر الإشعارات التي ترغب في تلقيها.`,"Email Notifications":`إشعارات البريد الإلكتروني`,"Receive important system updates by email.":`تلقي تحديثات النظام المهمة عبر البريد الإلكتروني.`,"Attendance Notifications":`إشعارات الحضور`,"Get notified about attendance changes.":`تلقي إشعارات حول تغييرات الحضور.`,"Employee Notifications":`إشعارات الموظفين`,"Receive updates about employee activity.":`تلقي تحديثات حول أنشطة الموظفين.`,"Weekly Reports":`التقارير الأسبوعية`,"Receive a weekly HR summary report.":`تلقي تقرير أسبوعي موجز للموارد البشرية.`,"Customize how Workforce360 looks.":`تخصيص مظهر Workforce360.`,"Dark Mode":`الوضع الداكن`,"Light Mode":`الوضع الفاتح`,"Use a darker interface.":`استخدام واجهة داكنة.`,"Use the standard light interface.":`استخدام الواجهة الفاتحة القياسية.`,"Manage your account security.":`إدارة أمان حسابك.`,Password:`كلمة المرور`,"Keep your password secure and up to date.":`حافظ على أمان كلمة المرور وحدّثها باستمرار.`,"Change Password":`تغيير كلمة المرور`,"Two-Factor Authentication":`المصادقة الثنائية`,"Add an additional layer of security.":`إضافة طبقة أمان إضافية.`,Enabled:`مفعّل`,Disabled:`معطّل`,Enable:`تفعيل`,Disable:`تعطيل`,"View your account and login information.":`عرض معلومات الحساب وتسجيل الدخول.`,"Account Name":`اسم الحساب`,Role:`الدور`,"Last Login":`آخر تسجيل دخول`,"Sign Out":`تسجيل الخروج`,"Good Morning, Bushra 👋":`صباح الخير، بشرى 👋`,"Here's what's happening with your team today.":`إليك آخر مستجدات فريقك اليوم.`,"Total Employees":`إجمالي الموظفين`,"↑ 12% from last month":`↑ ١٢٪ مقارنة بالشهر الماضي`,"87% attendance":`حضور بنسبة ٨٧٪`,"7% of total":`٧٪ من الإجمالي`,"New Joiners":`الموظفون الجدد`,"This month":`هذا الشهر`,Jan:`يناير`,Feb:`فبراير`,Mar:`مارس`,Apr:`أبريل`,May:`مايو`,Jun:`يونيو`,Jul:`يوليو`,Aug:`أغسطس`,Sep:`سبتمبر`,Oct:`أكتوبر`,Nov:`نوفمبر`,Dec:`ديسمبر`,"Employee Growth":`نمو الموظفين`,"Monthly overview":`نظرة عامة شهرية`,"Department Overview":`نظرة عامة على الأقسام`,"Employees by department":`الموظفون حسب القسم`,Total:`الإجمالي`,"Information Technology":`تقنية المعلومات`,"Technology, software and infrastructure":`التقنية والبرمجيات والبنية التحتية`,"Employee relations and recruitment":`علاقات الموظفين والتوظيف`,"Financial planning and accounting":`التخطيط المالي والمحاسبة`,"Marketing and communications":`التسويق والاتصالات`,"Business operations and administration":`عمليات الأعمال والإدارة`,Edit:`تعديل`,Delete:`حذف`,Save:`حفظ`,"Loading employee...":`جارٍ تحميل بيانات الموظف...`,"Employee Details":`تفاصيل الموظف`,"View employee information":`عرض معلومات الموظف`,"Update employee information":`تحديث معلومات الموظف`,"Add a new employee to your organization":`إضافة موظف جديد إلى مؤسستك`,"No attendance records found":`لم يتم العثور على سجلات حضور`,"Attendance Overview":`نظرة عامة على الحضور`,"Attendance distribution for selected period.":`توزيع الحضور للفترة المحددة.`,"Attendance Statistics":`إحصائيات الحضور`,"Department Statistics":`إحصائيات الأقسام`,"Employees by department.":`الموظفون حسب القسم.`,"Attendance Performance":`أداء الحضور`,"Current attendance breakdown.":`تفاصيل الحضور الحالية.`,"Employee Attendance Report":`تقرير حضور الموظفين`,"Individual employee attendance statistics.":`إحصائيات حضور كل موظف.`,"No employee records found.":`لم يتم العثور على سجلات موظفين.`,"Analyze employee, department and attendance performance.":`تحليل أداء الموظفين والأقسام والحضور.`,Print:`طباعة`,"Export CSV":`تصدير CSV`,"Start Date":`تاريخ البداية`,"End Date":`تاريخ النهاية`,"Apply Filters":`تطبيق عوامل التصفية`,"Active employees":`الموظفون النشطون`,"Attendance records":`سجلات الحضور`,"Leave records":`سجلات الإجازات`,"Attendance Rate":`معدل الحضور`,"Overall performance":`الأداء العام`,Leave:`إجازة`,Sales:`المبيعات`,Operations:`العمليات`,IT:`تقنية المعلومات`,HR:`الموارد البشرية`,"Change language":`تغيير اللغة`,"Are you sure you want to delete":`هل أنت متأكد أنك تريد حذف`,"Are you sure you want to sign out?":`هل أنت متأكد أنك تريد تسجيل الخروج؟`,"You have been signed out.":`تم تسجيل خروجك.`,"Unable to load employees. Please try again.":`تعذر تحميل الموظفين. يرجى المحاولة مرة أخرى.`,"Unable to delete employee.":`تعذر حذف الموظف.`,"Not assigned":`غير محدد`,"Edit Employee":`تعديل الموظف`,"Personal Information":`المعلومات الشخصية`,"Work Information":`معلومات العمل`,"First Name":`الاسم الأول`,"Last Name":`اسم العائلة`,Phone:`الهاتف`,"Save Employee":`حفظ الموظف`,"Update Employee":`تحديث الموظف`,Joined:`تاريخ الانضمام`,"Employee Overview":`نظرة عامة على الموظف`,"Frontend Developer":`مطور واجهات أمامية`,Administrator:`مدير النظام`,"HR Administrator":`مسؤول الموارد البشرية`,"Today, 09:42 AM":`اليوم، 09:42 صباحًا`,Email:`البريد الإلكتروني`,"Account settings":`إعدادات الحساب`};var t=class a{language=jo$2(this.readSavedLanguage());isArabic=jo$2(this.language()===`ar`);constructor(){this.applyDocumentLanguage()}toggleLanguage(){this.setLanguage(this.isArabic()?`en`:`ar`)}setLanguage(e){this.language.set(e),this.isArabic.set(e===`ar`),localStorage.setItem(`workforce360_language`,e),this.applyDocumentLanguage()}translate(e){return this.isArabic()?l[e]??e:e}readSavedLanguage(){return localStorage.getItem(`workforce360_language`)===`ar`?`ar`:`en`}applyDocumentLanguage(){let e=this.language();document.documentElement.lang=e,document.documentElement.dir=e===`ar`?`rtl`:`ltr`}static ɵfac=function(n){return new(n||a)};static ɵprov=ie$3({token:a,factory:a.ɵfac,providedIn:`root`})};var c=class a{constructor(e){this.languageService=e}languageService;transform(e){return this.languageService.translate(e)}static ɵfac=function(n){return new(n||a)(Er(t,16))};static ɵpipe=nE({name:`translate`,type:a,pure:!1})};var Ee=new R$1(`MAT_MENU_PANEL`);var G=(()=>{class n{_isAnchor;_elementRef=N$1(hr$1);_document=N$1(Fo);_focusMonitor=N$1(Mt$2);_parentMenu=N$1(Ee,{optional:!0});_changeDetectorRef=N$1(yF);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new Y$4;_focused=new Y$4;_highlighted=!1;_triggersSubmenu=!1;constructor(){N$1(O$1).load(Xe),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let i=0;i<t.length;i++)t[i].remove();return e.textContent?.trim()||``}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],t=[`mat-icon, [matMenuItemIcon]`,`*`];function i(o,r){o&1&&(Nu(),gi$1(0,`svg`,2),Mp(1,`polygon`,3),Sc())}return YI({type:n,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(r,c){r&1&&kp(`click`,function(M){return c._checkDisabled(M)})(`mouseenter`,function(){return c._handleMouseEnter()}),r&2&&(_p(`role`,c.role)(`tabindex`,c._getTabIndex())(`aria-disabled`,c._getAriaDisabled())(`disabled`,c._getDisabled()),Wp(`mat-mdc-menu-item-highlighted`,c._highlighted)(`mat-mdc-menu-item-submenu-trigger`,c._triggersSubmenu)(`mat-mdc-menu-item-disabled`,c.disabled)(`mat-mdc-menu-item-disabled-interactive`,c.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,IF],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,IF],disableRipple:[2,`disableRipple`,`disableRipple`,IF]},exportAs:[`matMenuItem`],ngContentSelectors:t,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(r,c){r&1&&(jE(e),VE(0),gi$1(1,`span`,0),VE(2,1),Sc(),Mp(3,`div`,1),vE(4,i,2,0,`:svg:svg`,2)),r&2&&(Iv(3),Np(`matRippleDisabled`,c.disableRipple||c.disabled)(`matRippleTrigger`,c._getHostElement()),Iv(),EE(c._triggersSubmenu?4:-1))},dependencies:[vi$1],encapsulation:2})})()}return n})();var rn=new R$1(`MatMenuContent`);var on=new R$1(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var Ae=`_mat-menu-enter`;var _e=`_mat-menu-exit`;var L=(()=>{class n{_elementRef=N$1(hr$1);_changeDetectorRef=N$1(yF);_injector=N$1(oe$2);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=H$1();_allItems;_directDescendantItems=new ni$1;_classList={};_panelAnimationState=`void`;_animationDone=new Y$4;_isAnimating=jo$2(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(e){this._xPosition=e,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(e){this._yPosition=e,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(e){let t=this._previousPanelClass,i=W$1({},this._classList);t&&t.length&&t.split(` `).forEach(o=>{i[o]=!1}),this._previousPanelClass=e,e&&e.length&&(e.split(` `).forEach(o=>{i[o]=!0}),this._elementRef.nativeElement.className=``),this._classList=i}_previousPanelClass=``;get classList(){return this.panelClass}set classList(e){this.panelClass=e}closed=new Le$2;close=this.closed;panelId=N$1(Pt$1).getId(`mat-menu-panel-`);constructor(){let e=N$1(on);this.overlayPanelClass=e.overlayPanelClass||``,this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Rt$2(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(e=>e.disabled&&!e.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(hg(this._directDescendantItems),bl(e=>ng(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState===`enter`&&t.activeItem?._hasFocus()){let i=e.toArray(),o=Math.max(0,Math.min(i.length-1,t.activeItemIndex||0));i[o]&&!i[o].disabled?t.setActiveItem(o):t.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(hg(this._directDescendantItems),bl(t=>ng(...t.map(i=>i._hovered))))}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,i=this._keyManager;switch(t){case 27:Be$1(e)||(e.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(t===38||t===40)&&i.setFocusOrigin(`keyboard`),i.onKeydown(e);return}}focusFirstItem(e=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Xy(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let i=this._keyManager;i.setFocusOrigin(e).setFirstItemActive(),!i.activeItem&&t&&t.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=q$3(W$1({},this._classList),{"mat-menu-before":e===`before`,"mat-menu-after":e===`after`,"mat-menu-above":t===`above`,"mat-menu-below":t===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(e){let t=e===_e;(t||e===Ae)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(e){(e===Ae||e===_e)&&this._isAnimating.set(!0)}_setIsOpen(e){if(this._panelAnimationState=e?`enter`:`void`,e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(_e),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?Ae:_e)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(hg(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),e}static ɵfac=function(t){return new(t||n)};static ɵcmp=(function(){let e=[`*`];function t(i,o){if(i&1){let r=SE();xc(0,`div`,0),Lp(`click`,function(){pu(r);let u=PE();return hu(u.closed.emit(`click`))})(`animationstart`,function(u){pu(r);let M=PE();return hu(M._onAnimationStart(u.animationName))})(`animationend`,function(u){pu(r);let M=PE();return hu(M._onAnimationDone(u.animationName))})(`animationcancel`,function(u){pu(r);let M=PE();return hu(M._onAnimationDone(u.animationName))}),xc(1,`div`,1),VE(2),Ac()()}if(i&2){let r=PE();tD(r._classList),Wp(`mat-menu-panel-animations-disabled`,r._animationsDisabled)(`mat-menu-panel-exit-animation`,r._panelAnimationState===`void`)(`mat-menu-panel-animating`,r._isAnimating()),Rp(`id`,r.panelId),_p(`aria-label`,r.ariaLabel||null)(`aria-labelledby`,r.ariaLabelledby||null)(`aria-describedby`,r.ariaDescribedby||null)}}return YI({type:n,selectors:[[`mat-menu`]],contentQueries:function(o,r,c){if(o&1&&Fp(c,rn,5)(c,G,5)(c,G,4),o&2){let u;BE(u=$E())&&(r.lazyContent=u.first),BE(u=$E())&&(r._allItems=u),BE(u=$E())&&(r.items=u)}},viewQuery:function(o,r){if(o&1&&jp(cr$1,5),o&2){let c;BE(c=$E())&&(r.templateRef=c.first)}},hostVars:3,hostBindings:function(o,r){o&2&&_p(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,IF],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,i=>i==null?null:IF(i)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[ED([{provide:Ee,useExisting:n}])],ngContentSelectors:e,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(o,r){o&1&&(jE(),wp(0,t,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled], .mat-mdc-menu-item.mat-mdc-menu-item-disabled {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after, .mat-mdc-menu-item.mat-mdc-menu-item-disabled::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})})()}return n})();var sn=new R$1(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let n=N$1(oe$2);return()=>Ct$1(n)}});var F=new WeakMap;var ln=(()=>{class n{_canHaveBackdrop;_element=N$1(hr$1);_viewContainerRef=N$1(_i$1);_menuItemInstance=N$1(G,{optional:!0,self:!0});_dir=N$1(Ln$1,{optional:!0});_focusMonitor=N$1(Mt$2);_ngZone=N$1(_e$5);_injector=N$1(oe$2);_scrollStrategy=N$1(sn);_changeDetectorRef=N$1(yF);_animationsDisabled=H$1();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=j$1.EMPTY;_menuCloseSubscription=j$1.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e?(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t===`click`||t===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=N$1(Ee,{optional:!0});this._parentMaterialMenu=t instanceof L?t:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&F.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let i=F.get(t);F.set(t,this),i&&i!==this&&i._closeMenu();let o=this._createOverlay(t),r=o.getConfig(),c=r.positionStrategy;this._setPosition(t,c),this._canHaveBackdrop?r.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:r.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),t instanceof L&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(gg(t.close)).subscribe(()=>{c.withLockedPosition(!1).reapplyLastPosition(),c.withLockedPosition(!0)}))}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}_destroyMenu(e){let t=this._overlayRef,i=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),i instanceof L&&this._ownsMenu(i)?(this._pendingRemoval=i._animationDone.pipe(Wi$1(1)).subscribe(()=>{t.detach(),F.has(i)||i.lazyContent?.detach()}),i._setIsOpen(!1)):(t.detach(),i?.lazyContent?.detach()),i&&this._ownsMenu(i)&&F.delete(i),this.restoreFocus&&(e===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck())}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=Rt$1(this._injector,t),this._overlayRef.keydownEvents().subscribe(i=>{this._menu instanceof L&&this._menu._handleKeydown(i)})}return this._overlayRef}_getOverlayConfig(e){return new W({positionStrategy:St$1(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:e.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(i=>{this._ngZone.run(()=>{let o=i.connectionPair.overlayX===`start`?`after`:`before`,r=i.connectionPair.overlayY===`top`?`below`:`above`;e.setPositionClasses(o,r)})})}_setPosition(e,t){let[i,o]=e.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[r,c]=e.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[u,M]=[r,c],[Se,we]=[i,o],j=0;if(this._triggersSubmenu()){if(we=i=e.xPosition===`before`?`start`:`end`,o=Se=i===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let Re=this._parentMaterialMenu.items.first;this._parentInnerPadding=Re?Re._getHostElement().offsetTop:0}j=r===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else e.overlapTrigger||(u=r===`top`?`bottom`:`top`,M=c===`top`?`bottom`:`top`);t.withPositions([{originX:i,originY:u,overlayX:Se,overlayY:r,offsetY:j},{originX:o,originY:u,overlayX:we,overlayY:r,offsetY:j},{originX:i,originY:M,overlayX:Se,overlayY:c,offsetY:-j},{originX:o,originY:M,overlayX:we,overlayY:c,offsetY:-j}])}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),i=this._parentMaterialMenu?this._parentMaterialMenu.closed:$h(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(On$2(r=>this._menuOpen&&r!==this._menuItemInstance)):$h();return ng(e,i,o,t)}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new L$2(e.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(e){return F.get(e)===this}_triggerIsAriaDisabled(){return IF(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(t){hI()};static ɵdir=tE({type:n})}return n})();var Vt=(()=>{class n extends ln{_cleanupTouchstart;_hoverSubscription=j$1.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(e){this.menu=e}get menu(){return this._menu}set menu(e){this._menu=e}menuData;restoreFocus=!0;menuOpened=new Le$2;onMenuOpen=this.menuOpened;menuClosed=new Le$2;onMenuClose=this.menuClosed;constructor(){super(!0);let e=N$1(Oa);this._cleanupTouchstart=e.listen(this._element.nativeElement,`touchstart`,t=>{$$2(t)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(e){return e.backdropClick()}_handleMousedown(e){G$3(e)||(this._openedBy=e.button===0?`mouse`:void 0,this.triggersSubmenu()&&e.preventDefault())}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(t===39&&this.dir===`ltr`||t===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(t){return new(t||n)};static ɵdir=tE({type:n,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(t,i){t&1&&kp(`click`,function(r){return i._handleClick(r)})(`mousedown`,function(r){return i._handleMousedown(r)})(`keydown`,function(r){return i._handleKeydown(r)}),t&2&&_p(`aria-haspopup`,i.menu?`menu`:null)(`aria-expanded`,i.menuOpen)(`aria-controls`,i.menuOpen?i.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[Ip]})}return n})();var Yt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=JI({type:n});static ɵinj=Bl({imports:[tn$1,we$2,gt$3,Yt$2]})}return n})();var dn=new R$1(`MAT_BADGE_CONFIG`);var Ut=`mat-badge-content`;var cn=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵcmp=YI({type:n,selectors:[[`ng-component`]],decls:0,vars:0,template:function(t,i){},styles:[`.mat-badge {
  position: relative;
}
.mat-badge.mat-badge {
  overflow: visible;
}

.mat-badge-content {
  position: absolute;
  text-align: center;
  display: inline-block;
  transition: transform 200ms ease-in-out;
  transform: scale(0.6);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  box-sizing: border-box;
  pointer-events: none;
  background-color: var(--%NS%mat-badge-background-color, var(--%NS%mat-sys-error));
  color: var(--%NS%mat-badge-text-color, var(--%NS%mat-sys-on-error));
  font-family: var(--%NS%mat-badge-text-font, var(--%NS%mat-sys-label-small-font));
  font-weight: var(--%NS%mat-badge-text-weight, var(--%NS%mat-sys-label-small-weight));
  border-radius: var(--%NS%mat-badge-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-badge-above .mat-badge-content {
  bottom: 100%;
}
.mat-badge-below .mat-badge-content {
  top: 100%;
}
.mat-badge-before .mat-badge-content {
  right: 100%;
}
[dir=rtl] .mat-badge-before .mat-badge-content {
  right: auto;
  left: 100%;
}
.mat-badge-after .mat-badge-content {
  left: 100%;
}
[dir=rtl] .mat-badge-after .mat-badge-content {
  left: auto;
  right: 100%;
}
@media (forced-colors: active) {
  .mat-badge-content {
    outline: solid 1px;
    border-radius: 0;
  }
}

.mat-badge-disabled .mat-badge-content {
  background-color: var(--%NS%mat-badge-disabled-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-error) 38%, transparent));
  color: var(--%NS%mat-badge-disabled-state-text-color, var(--%NS%mat-sys-on-error));
}

.mat-badge-hidden .mat-badge-content {
  display: none;
}

.ng-animate-disabled .mat-badge-content,
.mat-badge-content._mat-animation-noopable {
  transition: none;
}

.mat-badge-content.mat-badge-active {
  transform: none;
}

.mat-badge-small .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-small-size-container-size, unset);
  height: var(--%NS%mat-badge-legacy-small-size-container-size, unset);
  min-width: var(--%NS%mat-badge-small-size-container-size, 6px);
  min-height: var(--%NS%mat-badge-small-size-container-size, 6px);
  line-height: var(--%NS%mat-badge-small-size-line-height, 6px);
  padding: var(--%NS%mat-badge-small-size-container-padding, 0);
  font-size: var(--%NS%mat-badge-small-size-text-size, 0);
  margin: var(--%NS%mat-badge-small-size-container-offset, -6px 0);
}
.mat-badge-small.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-small-size-container-overlap-offset, -6px);
}

.mat-badge-medium .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-container-size, unset);
  height: var(--%NS%mat-badge-legacy-container-size, unset);
  min-width: var(--%NS%mat-badge-container-size, 16px);
  min-height: var(--%NS%mat-badge-container-size, 16px);
  line-height: var(--%NS%mat-badge-line-height, 16px);
  padding: var(--%NS%mat-badge-container-padding, 0 4px);
  font-size: var(--%NS%mat-badge-text-size, var(--%NS%mat-sys-label-small-size));
  margin: var(--%NS%mat-badge-container-offset, -12px 0);
}
.mat-badge-medium.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-container-overlap-offset, -12px);
}

.mat-badge-large .mat-badge-content {
  width: var(--%NS%mat-badge-legacy-large-size-container-size, unset);
  height: var(--%NS%mat-badge-legacy-large-size-container-size, unset);
  min-width: var(--%NS%mat-badge-large-size-container-size, 16px);
  min-height: var(--%NS%mat-badge-large-size-container-size, 16px);
  line-height: var(--%NS%mat-badge-large-size-line-height, 16px);
  padding: var(--%NS%mat-badge-large-size-container-padding, 0 4px);
  font-size: var(--%NS%mat-badge-large-size-text-size, var(--%NS%mat-sys-label-small-size));
  margin: var(--%NS%mat-badge-large-size-container-offset, -12px 0);
}
.mat-badge-large.mat-badge-overlap .mat-badge-content {
  margin: var(--%NS%mat-badge-large-size-container-overlap-offset, -12px);
}
`],encapsulation:2})}return n})();var Wt=(()=>{class n{_ngZone=N$1(_e$5);_elementRef=N$1(hr$1);_ariaDescriber=N$1(Do$1);_renderer=N$1(Oa);_animationsDisabled=H$1();_idGenerator=N$1(Pt$1);get color(){return this._color}set color(e){this._setColor(e),this._color=e}_color;overlap;disabled=!1;position;get content(){return this._content}set content(e){this._updateRenderedContent(e)}_content;get description(){return this._description}set description(e){this._updateDescription(e)}_description;size;hidden=!1;_badgeElement;_inlineBadgeDescription;_isInitialized=!1;_interactivityChecker=N$1(dn$2);_document=N$1(Fo);constructor(){let e=N$1(dn,{optional:!0}),t=N$1(O$1);t.load(cn),t.load(Tt$1),this._color=e?.color||`primary`,this.overlap=e?.overlap??!0,this.position=e?.position||`above after`,this.size=e?.size||`medium`}isAbove(){return this.position.indexOf(`below`)===-1}isAfter(){return this.position.indexOf(`before`)===-1}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngAfterViewInit(){}ngOnDestroy(){this._renderer.destroyNode&&(this._renderer.destroyNode(this._badgeElement),this._inlineBadgeDescription?.remove()),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_isHostInteractive(){return this._interactivityChecker.isFocusable(this._elementRef.nativeElement,{ignoreVisibility:!0})}_createBadgeElement(){let e=this._renderer.createElement(`span`),t=`mat-badge-active`;return e.setAttribute(`id`,this._idGenerator.getId(`mat-badge-content-`)),e.setAttribute(`aria-hidden`,`true`),e.classList.add(Ut),this._animationsDisabled&&e.classList.add(`_mat-animation-noopable`),this._elementRef.nativeElement.appendChild(e),typeof requestAnimationFrame==`function`&&!this._animationsDisabled?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{e.classList.add(t)})}):e.classList.add(t),e}_updateRenderedContent(e){let t=`${e??``}`.trim();this._isInitialized&&t&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=t),this._content=t}_updateDescription(e){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),(!e||this._isHostInteractive())&&this._removeInlineDescription(),this._description=e,this._isHostInteractive()?this._ariaDescriber.describe(this._elementRef.nativeElement,e):this._updateInlineDescription()}_updateInlineDescription(){this._inlineBadgeDescription||(this._inlineBadgeDescription=this._document.createElement(`span`),this._inlineBadgeDescription.classList.add(`cdk-visually-hidden`)),this._inlineBadgeDescription.textContent=this.description,this._badgeElement?.appendChild(this._inlineBadgeDescription)}_removeInlineDescription(){this._inlineBadgeDescription?.remove(),this._inlineBadgeDescription=void 0}_setColor(e){let t=this._elementRef.nativeElement.classList;t.remove(`mat-badge-${this._color}`),e&&t.add(`mat-badge-${e}`)}_clearExistingBadges(){let e=this._elementRef.nativeElement.querySelectorAll(`:scope > .${Ut}`);for(let t of Array.from(e))t!==this._badgeElement&&t.remove()}static ɵfac=function(t){return new(t||n)};static ɵdir=tE({type:n,selectors:[[``,`matBadge`,``]],hostAttrs:[1,`mat-badge`],hostVars:20,hostBindings:function(t,i){t&2&&Wp(`mat-badge-overlap`,i.overlap)(`mat-badge-above`,i.isAbove())(`mat-badge-below`,!i.isAbove())(`mat-badge-before`,!i.isAfter())(`mat-badge-after`,i.isAfter())(`mat-badge-small`,i.size===`small`)(`mat-badge-medium`,i.size===`medium`)(`mat-badge-large`,i.size===`large`)(`mat-badge-hidden`,i.hidden||!i.content)(`mat-badge-disabled`,i.disabled)},inputs:{color:[0,`matBadgeColor`,`color`],overlap:[2,`matBadgeOverlap`,`overlap`,IF],disabled:[2,`matBadgeDisabled`,`disabled`,IF],position:[0,`matBadgePosition`,`position`],content:[0,`matBadge`,`content`],description:[0,`matBadgeDescription`,`description`],size:[0,`matBadgeSize`,`size`],hidden:[2,`matBadgeHidden`,`hidden`,IF]}})}return n})();var Xt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=JI({type:n});static ɵinj=Bl({imports:[Nn$1,gt$3]})}return n})();var $t=(()=>{class n{get vertical(){return this._vertical}set vertical(e){this._vertical=oi$1(e)}_vertical=!1;get inset(){return this._inset}set inset(e){this._inset=oi$1(e)}_inset=!1;static ɵfac=function(t){return new(t||n)};static ɵcmp=YI({type:n,selectors:[[`mat-divider`]],hostAttrs:[`role`,`separator`,1,`mat-divider`],hostVars:7,hostBindings:function(t,i){t&2&&(_p(`aria-orientation`,i.vertical?`vertical`:`horizontal`),Wp(`mat-divider-vertical`,i.vertical)(`mat-divider-horizontal`,!i.vertical)(`mat-divider-inset`,i.inset))},inputs:{vertical:`vertical`,inset:`inset`},decls:0,vars:0,template:function(t,i){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-top-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--%NS%mat-divider-color, var(--%NS%mat-sys-outline-variant));
  border-right-width: var(--%NS%mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2})}return n})();var Gt=(()=>{class n{static ɵfac=function(t){return new(t||n)};static ɵmod=JI({type:n});static ɵinj=Bl({imports:[gt$3]})}return n})();var hn=(n,d)=>d.id;function fn(n,d){if(n&1){let e=SE();gi$1(0,`button`,28),kp(`click`,function(){let i=pu(e).$implicit,o=PE();return hu(o.markAsRead(i.id))}),gi$1(1,`mat-icon`,8),fD(2),Sc(),gi$1(3,`span`,29)(4,`strong`),fD(5),Sc(),gi$1(6,`span`),fD(7),Sc(),gi$1(8,`small`),fD(9),Sc()()()}if(n&2){let e=d.$implicit;Iv(2),kc(` `,e.read?`drafts`:`mark_email_unread`,` `),Iv(3),Yp(e.title),Iv(2),Yp(e.message),Iv(2),Yp(e.time)}}function bn(n,d){if(n&1&&(gi$1(0,`p`,16),fD(1),Sc()),n&2){let e=PE();Iv(),kc(` `,e.isArabic()?`لا توجد إشعارات`:`No notifications`,` `)}}var ye=class n{constructor(d,e,t){this.languageService=d;this.themeService=e;this.router=t;this.isArabic=d.isArabic}languageService;themeService;router;auth=N$1(d);isArabic;notifications=jo$2([{id:1,title:`New employee`,message:`A new employee has been added.`,time:`10 minutes ago`,read:!1},{id:2,title:`Attendance update`,message:`Attendance records are ready to review.`,time:`30 minutes ago`,read:!1},{id:3,title:`Weekly report`,message:`Your weekly report is available.`,time:`Yesterday`,read:!0}]);get user(){let d=this.auth.user();return{name:d?.name??``,email:d?.email??``,role:`Signed-in user`}}isDarkMode(){return this.themeService.isDarkMode()}toggleDarkMode(){this.themeService.toggleTheme()}unreadCount(){return this.notifications().filter(d=>!d.read).length}markAsRead(d){this.notifications.update(e=>e.map(t=>t.id===d?q$3(W$1({},t),{read:!0}):t)),localStorage.setItem(`workforce360_notifications`,JSON.stringify(this.notifications()))}markAllAsRead(){this.notifications.update(d=>d.map(e=>q$3(W$1({},e),{read:!0}))),localStorage.setItem(`workforce360_notifications`,JSON.stringify(this.notifications()))}toggleLanguage(){this.languageService.toggleLanguage()}signOut(){window.confirm(`Are you sure you want to sign out?`)&&(this.auth.clearSession(),this.router.navigate([`/login`],{replaceUrl:!0}))}static ɵfac=function(e){return new(e||n)(Er(t),Er(i),Er(le))};static ɵcmp=YI({type:n,selectors:[[`app-header`]],decls:72,vars:45,consts:[[`notificationsMenu`,`matMenu`],[`profileMenu`,`matMenu`],[1,`header`],[1,`search-box`],[`aria-hidden`,`true`,1,`material-symbols-outlined`],[`type`,`text`,3,`placeholder`],[1,`header-actions`],[`mat-icon-button`,``,`type`,`button`,3,`click`],[`aria-hidden`,`true`],[1,`notification-menu`],[`mat-icon-button`,``,`type`,`button`,3,`matMenuTriggerFor`],[`aria-hidden`,`true`,`matBadgeSize`,`small`,3,`matBadge`,`matBadgeHidden`],[`xPosition`,`before`,1,`wf-notifications-menu`,3,`overlapTrigger`,`hasBackdrop`],[1,`wf-menu-heading`],[`mat-menu-item`,``,`type`,`button`,3,`click`,`disabled`],[`mat-menu-item`,``,`type`,`button`,1,`wf-notification-item`],[1,`wf-menu-empty`],[`mat-button`,``,`type`,`button`,1,`language-button`,3,`click`],[1,`language-label`],[`mat-button`,``,`type`,`button`,1,`profile-trigger`,3,`matMenuTriggerFor`],[1,`profile-trigger-content`],[`aria-hidden`,`true`,1,`profile-avatar`],[1,`profile-info`],[`aria-hidden`,`true`,1,`profile-chevron`],[`xPosition`,`before`,1,`wf-profile-menu`,3,`overlapTrigger`,`hasBackdrop`],[1,`wf-menu-heading`,`wf-profile-identity`],[`mat-menu-item`,``,`routerLink`,`/settings`],[`mat-menu-item`,``,`type`,`button`,1,`wf-sign-out`,3,`click`],[`mat-menu-item`,``,`type`,`button`,1,`wf-notification-item`,3,`click`],[1,`wf-notification-copy`]],template:function(e,t){if(e&1&&(gi$1(0,`header`,2)(1,`div`,3)(2,`span`,4),fD(3,`search`),Sc(),Mp(4,`input`,5),bD(5,`translate`),Sc(),gi$1(6,`div`,6)(7,`button`,7),bD(8,`translate`),kp(`click`,function(){return t.toggleDarkMode()}),gi$1(9,`mat-icon`,8),fD(10),Sc()(),gi$1(11,`div`,9)(12,`button`,10),bD(13,`translate`),gi$1(14,`mat-icon`,11),fD(15,` notifications `),Sc()(),gi$1(16,`mat-menu`,12,0)(18,`div`,13)(19,`strong`),fD(20),Sc(),gi$1(21,`small`),fD(22),Sc()(),Mp(23,`mat-divider`),gi$1(24,`button`,14),kp(`click`,function(){return t.markAllAsRead()}),gi$1(25,`mat-icon`,8),fD(26,`done_all`),Sc(),gi$1(27,`span`),fD(28),Sc()(),Mp(29,`mat-divider`),wE(30,fn,10,4,`button`,15,hn,!1,bn,2,1,`p`,16),Sc()(),gi$1(33,`button`,17),bD(34,`translate`),kp(`click`,function(){return t.toggleLanguage()}),gi$1(35,`mat-icon`,8),fD(36,`translate`),Sc(),gi$1(37,`span`,18),fD(38),Sc()(),gi$1(39,`button`,19),bD(40,`translate`),gi$1(41,`span`,20)(42,`span`,21),fD(43),Sc(),gi$1(44,`span`,22)(45,`strong`),fD(46),Sc(),gi$1(47,`small`),fD(48),bD(49,`translate`),Sc()(),gi$1(50,`mat-icon`,23),fD(51,` expand_more `),Sc()()(),gi$1(52,`mat-menu`,24,1)(54,`div`,25)(55,`strong`),fD(56),Sc(),gi$1(57,`small`),fD(58),Sc()(),Mp(59,`mat-divider`),gi$1(60,`a`,26)(61,`mat-icon`,8),fD(62,`manage_accounts`),Sc(),gi$1(63,`span`),fD(64),bD(65,`translate`),Sc()(),gi$1(66,`button`,27),kp(`click`,function(){return t.signOut()}),gi$1(67,`mat-icon`,8),fD(68,`logout`),Sc(),gi$1(69,`span`),fD(70),bD(71,`translate`),Sc()()()()()),e&2){let i=WE(17),o=WE(53);Iv(4),Np(`placeholder`,TD(5,29,`Search employees...`)),Iv(3),_p(`aria-label`,TD(8,31,t.isDarkMode()?`Switch to light mode`:`Switch to dark mode`))(`aria-pressed`,t.isDarkMode()),Iv(3),kc(` `,t.isDarkMode()?`light_mode`:`dark_mode`,` `),Iv(2),Np(`matMenuTriggerFor`,i),_p(`aria-label`,TD(13,33,`Notifications`)),Iv(2),Np(`matBadge`,t.unreadCount())(`matBadgeHidden`,t.unreadCount()===0),Iv(2),Np(`overlapTrigger`,!1)(`hasBackdrop`,!0),Iv(4),kc(` `,t.isArabic()?`الإشعارات`:`Notifications`,` `),Iv(2),Kp(` `,t.unreadCount(),` `,t.isArabic()?`غير مقروءة`:`unread`,` `),Iv(2),Np(`disabled`,t.unreadCount()===0),Iv(4),kc(` `,t.isArabic()?`قراءة الكل`:`Mark all read`,` `),Iv(2),bE(t.notifications()),Iv(3),_p(`aria-label`,TD(34,35,t.isArabic()?`Switch to English`:`Switch to Arabic`)),Iv(5),kc(` `,t.isArabic()?`English`:`العربية`,` `),Iv(),Np(`matMenuTriggerFor`,o),_p(`aria-label`,TD(40,37,`Profile`)),Iv(4),kc(` `,t.user.name.charAt(0).toUpperCase(),` `),Iv(3),Yp(t.user.name),Iv(2),Yp(TD(49,39,t.user.role)),Iv(4),Np(`overlapTrigger`,!1)(`hasBackdrop`,!0),Iv(4),Yp(t.user.name),Iv(2),Yp(t.user.email),Iv(6),Yp(TD(65,41,`Account settings`)),Iv(6),Yp(TD(71,43,`Sign Out`))}},dependencies:[Pr,Nt,Xi$1,Qi$1,On$1,Yt,L,G,Vt,Mt$1,wt$1,Xt,Wt,Gt,$t,Ne$1,er$1,gt$3,c],styles:[`[_nghost-%COMP%]{display:block}.header[_ngcontent-%COMP%]{min-height:80px;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px clamp(16px,3vw,34px);box-sizing:border-box;color:var(--%NS%wf-ink);background:var(--%NS%wf-surface);border-bottom:1px solid var(--%NS%wf-line)}.header[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{flex:1 1 340px;width:min(380px,100%);min-width:0}.header-actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;gap:6px;flex-shrink:0}.header-actions[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]{width:40px;height:40px;border-radius:10px;color:var(--%NS%wf-muted);transition:background-color .16s ease,color .16s ease}.header-actions[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover{background:var(--%NS%wf-surface-muted);color:var(--%NS%wf-accent)}.language-button[_ngcontent-%COMP%]{min-height:40px;padding:0 10px;border-radius:10px;color:var(--%NS%wf-muted);font-size:13px;font-weight:600;transition:background-color .16s ease,color .16s ease}.language-button[_ngcontent-%COMP%]:hover, .profile-trigger[_ngcontent-%COMP%]:hover{background:var(--%NS%wf-surface-muted);color:var(--%NS%wf-ink)}.profile-trigger[_ngcontent-%COMP%]{height:48px;min-height:48px;padding:6px 10px;border-radius:12px;color:var(--%NS%wf-ink);text-align:left}.profile-trigger-content[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:10px}.profile-avatar[_ngcontent-%COMP%]{display:inline-grid;place-items:center;width:34px;height:34px;border-radius:50%;background:color-mix(in srgb,var(--%NS%wf-accent) 14%,var(--%NS%wf-surface));color:var(--%NS%wf-accent);font-weight:700}.profile-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-start;line-height:1.4}.profile-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:13px}.profile-info[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:11px;color:var(--%NS%wf-muted)}.profile-chevron[_ngcontent-%COMP%]{transition:transform .16s ease}.profile-trigger[aria-expanded=true][_ngcontent-%COMP%]   .profile-chevron[_ngcontent-%COMP%]{transform:rotate(180deg)}@media(max-width:700px){.header[_ngcontent-%COMP%]{flex-wrap:wrap}.header[_ngcontent-%COMP%]   .search-box[_ngcontent-%COMP%]{flex-basis:100%;width:100%}.header-actions[_ngcontent-%COMP%]{width:100%;justify-content:flex-end}.profile-info[_ngcontent-%COMP%], .profile-chevron[_ngcontent-%COMP%]{display:none}}@media(prefers-reduced-motion:reduce){.profile-chevron[_ngcontent-%COMP%], .header-actions[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%], .language-button[_ngcontent-%COMP%]{transition:none}}`]})};var vn=n=>({exact:n});var _n=(n,d)=>d.link;function yn(n,d){if(n&1&&(gi$1(0,`li`,9)(1,`a`,17)(2,`span`,18),fD(3),Sc(),gi$1(4,`span`,19),fD(5),bD(6,`translate`),Sc()()()),n&2){let e=d.$implicit;Iv(),Np(`routerLink`,e.link)(`routerLinkActiveOptions`,DD(6,vn,e.link===`/`)),Iv(2),kc(` `,e.icon,` `),Iv(2),Yp(TD(6,4,e.label))}}var Me=class n{constructor(d){this.languageService=d}languageService;navItems=[{label:`Dashboard`,icon:`dashboard`,link:`/dashboard`},{label:`Employees`,icon:`groups`,link:`/employees`},{label:`Departments`,icon:`apartment`,link:`/departments`},{label:`Attendance`,icon:`event_available`,link:`/attendance`},{label:`Reports`,icon:`assessment`,link:`/reports`},{label:`AI Job Description`,icon:`auto_awesome`,link:`/ai-job-description`},{label:`Settings`,icon:`settings`,link:`/settings`}];static ɵfac=function(e){return new(e||n)(Er(t))};static ɵcmp=YI({type:n,selectors:[[`app-sidebar`]],decls:35,vars:19,consts:[[1,`sidebar`],[1,`brand`],[`routerLink`,`/`,1,`brand-link`],[`src`,`assets/images/logo.png`,1,`brand-image`,3,`alt`],[1,`brand-text`],[1,`brand-name`],[1,`brand-subtitle`],[1,`sidebar-nav`],[1,`nav`],[1,`nav-item`],[1,`sidebar-bottom`],[`type`,`button`,1,`language-button`,3,`click`],[1,`material-symbols-outlined`],[1,`material-symbols-outlined`,`arrow`],[1,`user-profile`],[1,`avatar`],[1,`user-details`],[`routerLinkActive`,`active`,1,`nav-link`,3,`routerLink`,`routerLinkActiveOptions`],[1,`nav-icon`,`material-icons`],[1,`nav-label`]],template:function(e,t){e&1&&(gi$1(0,`aside`,0)(1,`div`,1)(2,`a`,2),Mp(3,`img`,3),bD(4,`translate`),gi$1(5,`span`,4)(6,`span`,5),fD(7),bD(8,`translate`),Sc(),gi$1(9,`span`,6),fD(10),bD(11,`translate`),Sc()()()(),gi$1(12,`nav`,7),bD(13,`translate`),gi$1(14,`ul`,8),wE(15,yn,7,8,`li`,9,_n),Sc()(),gi$1(17,`div`,10)(18,`button`,11),bD(19,`translate`),kp(`click`,function(){return t.languageService.toggleLanguage()}),gi$1(20,`span`,12),fD(21,`language`),Sc(),gi$1(22,`span`),fD(23),Sc(),gi$1(24,`span`,13),fD(25,`chevron_right`),Sc()(),gi$1(26,`div`,14)(27,`div`,15),fD(28,`B`),Sc(),gi$1(29,`div`,16)(30,`strong`),fD(31,`Bushra`),Sc(),gi$1(32,`span`),fD(33),bD(34,`translate`),Sc()()()()()),e&2&&(Iv(3),Np(`alt`,TD(4,7,`Workforce360`)),Iv(4),Yp(TD(8,9,`Workforce360`)),Iv(3),Yp(TD(11,11,`HR Workspace`)),Iv(2),_p(`aria-label`,TD(13,13,`Main navigation`)),Iv(3),bE(t.navItems),Iv(3),_p(`aria-label`,TD(19,15,t.languageService.isArabic()?`Switch to English`:`Switch to Arabic`)),Iv(5),Yp(t.languageService.isArabic()?`English`:`العربية`),Iv(10),Yp(TD(34,17,`Frontend Developer`)))},dependencies:[Nt,To,c],styles:[`.sidebar[_ngcontent-%COMP%]{width:260px;height:100vh;display:flex;flex-direction:column;padding:22px 16px 18px;background:linear-gradient(180deg,#101a2d,#0b1324);color:#edf2ff;box-shadow:inset -1px 0 #ffffff0f}.sidebar-nav[_ngcontent-%COMP%]{flex:1;margin-top:18px}.nav[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px}.brand[_ngcontent-%COMP%]{padding:4px 8px 24px}.brand-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;text-decoration:none;color:inherit}.brand-image[_ngcontent-%COMP%]{width:42px;height:42px;object-fit:contain;border-radius:12px;background:#ffffff0a;padding:6px;box-shadow:0 12px 28px #6f60ff33}.brand-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2px}.brand-name[_ngcontent-%COMP%]{font-size:17px;font-weight:700;letter-spacing:-.02em;color:#f8faff}.brand-subtitle[_ngcontent-%COMP%]{color:#8ea0c4;font-size:10px;letter-spacing:.12em;text-transform:uppercase}.nav-item[_ngcontent-%COMP%]{margin:0}.nav-link[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;width:94%;padding:12px 14px;border-radius:12px;color:#b4bfd8;text-decoration:none;cursor:pointer;transition:background .2s ease,color .2s ease,transform .2s ease,box-shadow .2s ease}.nav-link[_ngcontent-%COMP%]:hover{background:#ffffff0f;color:#fff;transform:translate(2px);box-shadow:inset 0 0 0 1px #ffffff0a}.nav-link.active[_ngcontent-%COMP%]{background:linear-gradient(135deg,#7667ff38,#5cacff1f);color:#fff;box-shadow:inset 0 0 0 1px #8c7bff59,0 10px 24px #6055e12e}.nav-link.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%], .nav-link[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%]{color:#fff}.nav-icon[_ngcontent-%COMP%]{width:22px;min-width:22px;display:inline-flex;align-items:center;justify-content:center;font-size:21px;line-height:1;color:#b4bfd8;transition:color .2s ease}.nav-label[_ngcontent-%COMP%]{flex:1;white-space:nowrap;font-size:14px;font-weight:500}.material-symbols-outlined[_ngcontent-%COMP%]{font-size:20px}.sidebar-bottom[_ngcontent-%COMP%]{margin-top:auto;padding-top:12px}.language-button[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;gap:10px;padding:12px;border:1px solid rgba(255,255,255,.06);border-radius:12px;background:#ffffff05;color:#c7d0ea;cursor:pointer;transition:background .2s ease,border-color .2s ease}.language-button[_ngcontent-%COMP%]:hover{background:#ffffff0a;border-color:#ffffff1a}.language-button[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{margin-left:auto}.user-profile[_ngcontent-%COMP%]{display:flex;align-items:center;gap:12px;padding:16px 8px 6px;margin-top:14px;border-top:1px solid rgba(255,255,255,.08)}.avatar[_ngcontent-%COMP%]{width:38px;height:38px;display:grid;place-items:center;border-radius:50%;background:linear-gradient(135deg,#7b5cf5,#5cc8ff);color:#fff;font-weight:700;box-shadow:0 10px 20px #7b5cf559}.user-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}.user-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:13px;color:#f5f7ff}.user-details[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#8fa2c3;font-size:11px}`]})};var xe=class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=YI({type:n,selectors:[[`app-layout`]],decls:6,vars:0,consts:[[1,`app-shell`],[1,`main-area`],[1,`page-content`]],template:function(e,t){e&1&&(gi$1(0,`div`,0),Mp(1,`app-sidebar`),gi$1(2,`div`,1),Mp(3,`app-header`),gi$1(4,`main`,2),Mp(5,`router-outlet`),Sc()()())},dependencies:[dr,ye,Me],styles:[`[_nghost-%COMP%]{display:block;min-height:100dvh}.app-shell[_ngcontent-%COMP%]{min-height:100vh;display:flex;background:radial-gradient(ellipse at 78% 0,rgba(111,93,231,.045),transparent 32%),var(--%NS%wf-canvas)}.main-area[_ngcontent-%COMP%]{flex:1;min-width:0;min-height:100vh;display:flex;flex-direction:column}.page-content[_ngcontent-%COMP%]{flex:1;box-sizing:border-box;width:100%;max-width:1800px;margin:0 auto;padding:clamp(20px,3vw,34px);overflow-x:hidden}@media(max-width:700px){.page-content[_ngcontent-%COMP%]{padding:20px 16px}}`]})};var Qt=(n,d$1)=>{let e=N$1(d),t=N$1(le),i=o=>t.createUrlTree([`/login`],{queryParams:W$1({returnUrl:d$1.url},o?{reason:o}:{})});return e.restoreSession().pipe(ze$2(o=>o?!0:i()),Ui$1(o=>{let r=o instanceof de&&o.status===401?`expired`:`unavailable`;return $h(i(r))}))};var Kt=[{path:``,pathMatch:`full`,redirectTo:`dashboard`},{path:`login`,title:`Sign in | Workforce360`,loadComponent:()=>import(`./chunk-DMRS3fO7.js`).then(n=>n.LoginComponent)},{path:``,component:xe,canActivateChild:[Qt],children:[{path:`dashboard`,pathMatch:`full`,title:`Dashboard | Workforce360`,loadComponent:()=>import(`./chunk-Cbmt235H.js`).then(n=>n.DashboardComponent)},{path:`employees`,title:`Employees | Workforce360`,loadComponent:()=>import(`./chunk-DS-MZqU0.js`).then(n=>n.EmployeesComponent)},{path:`employees/add`,title:`Add employee | Workforce360`,loadComponent:()=>import(`./chunk-BI1drBCg.js`).then(n=>n.EmployeeFormComponent)},{path:`employees/:id/edit`,title:`Edit employee | Workforce360`,loadComponent:()=>import(`./chunk-BI1drBCg.js`).then(n=>n.EmployeeFormComponent)},{path:`employees/:id`,title:`Employee details | Workforce360`,loadComponent:()=>import(`./chunk-YdeLsVQw.js`).then(n=>n.EmployeeDetailsComponent)},{path:`departments`,title:`Departments | Workforce360`,loadComponent:()=>import(`./chunk-CoGRkYEF.js`).then(n=>n.DepartmentsComponent)},{path:`attendance`,title:`Attendance | Workforce360`,loadComponent:()=>import(`./chunk-CMbBPK51.js`).then(n=>n.AttendanceComponent)},{path:`reports`,title:`Reports | Workforce360`,loadComponent:()=>import(`./chunk-BiK4JEe-.js`).then(n=>n.ReportsComponent)},{path:`ai-job-description`,title:`AI Job Description | Workforce360`,loadComponent:()=>import(`./chunk-6kdd2pg2.js`).then(n=>n.AiJobDescriptionComponent)},{path:`settings`,title:`Settings | Workforce360`,loadComponent:()=>import(`./chunk-D7SUGABP.js`).then(n=>n.SettingsComponent)}]},{path:`**`,redirectTo:`dashboard`}];var qt=(n,d$2)=>{if(!n.url.startsWith(`${`http://127.0.0.1:8000/api`}/`))return d$2(n);let e=N$1(d),t=N$1(le),i=n.url===`${t$1}/auth/login`,o=n.url===`${t$1}/auth/me`,r=e.getAccessToken();return d$2(r&&!i?n.clone({setHeaders:{Authorization:`Bearer ${r}`}}):n).pipe(Ui$1(u=>(u instanceof de&&u.status===401&&!i&&(e.clearSession(),o||t.navigate([`/login`],{queryParams:{reason:`expired`},replaceUrl:!0})),Uh(()=>u))))};var Jt={providers:[_o(Kt),Zo(Ko$1([qt]))]};var Ce=class n{static ɵfac=function(e){return new(e||n)};static ɵcmp=YI({type:n,selectors:[[`app-root`]],decls:1,vars:0,template:function(e,t){e&1&&Mp(0,`router-outlet`)},dependencies:[dr],styles:[`.app-shell[_ngcontent-%COMP%]{min-height:100vh;display:flex;background:radial-gradient(ellipse at 78% 0,rgba(111,93,231,.045),transparent 32%),var(--%NS%wf-canvas)}.main-area[_ngcontent-%COMP%]{flex:1;min-width:0;min-height:100vh;display:flex;flex-direction:column}.page-content[_ngcontent-%COMP%]{flex:1;width:100%;max-width:1800px;margin:0 auto;padding:clamp(20px,3vw,34px);overflow-x:hidden}@media(max-width:700px){.page-content[_ngcontent-%COMP%]{padding:20px 16px}}[_nghost-%COMP%]{--%NS%bright-blue: oklch(51.01% .274 263.83);--%NS%electric-violet: oklch(53.18% .28 296.97);--%NS%french-violet: oklch(47.66% .246 305.88);--%NS%vivid-pink: oklch(69.02% .277 332.77);--%NS%hot-red: oklch(61.42% .238 15.34);--%NS%orange-red: oklch(63.32% .24 31.68);--%NS%gray-900: oklch(19.37% .006 300.98);--%NS%gray-700: oklch(36.98% .014 302.71);--%NS%gray-400: oklch(70.9% .015 304.04);--%NS%red-to-pink-to-purple-vertical-gradient: linear-gradient( 180deg, var(--%NS%orange-red) 0%, var(--%NS%vivid-pink) 50%, var(--%NS%electric-violet) 100% );--%NS%red-to-pink-to-purple-horizontal-gradient: linear-gradient( 90deg, var(--%NS%orange-red) 0%, var(--%NS%vivid-pink) 50%, var(--%NS%electric-violet) 100% );--%NS%pill-accent: var(--%NS%bright-blue);font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:block;height:100dvh}h1[_ngcontent-%COMP%]{font-size:3.125rem;color:var(--%NS%gray-900);font-weight:500;line-height:100%;letter-spacing:-.125rem;margin:0;font-family:Inter Tight,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol}p[_ngcontent-%COMP%]{margin:0;color:var(--%NS%gray-700)}main[_ngcontent-%COMP%]{width:95%;min-height:100%;justify-content:left;align-items:flex-start;padding:1rem;box-sizing:inherit;position:relative}.angular-logo[_ngcontent-%COMP%]{max-width:9.2rem}.content[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:100%;max-width:700px;margin-bottom:3rem}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:1.75rem}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:1.5rem}.divider[_ngcontent-%COMP%]{width:1px;background:var(--%NS%red-to-pink-to-purple-vertical-gradient);margin-inline:.5rem}.pill-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;flex-wrap:wrap;gap:1.25rem}.pill[_ngcontent-%COMP%]{display:flex;align-items:center;--%NS%pill-accent: var(--%NS%bright-blue);background:color-mix(in srgb,var(--%NS%pill-accent) 5%,transparent);color:var(--%NS%pill-accent);padding-inline:.75rem;padding-block:.375rem;border-radius:2.75rem;border:0;transition:background .3s ease;font-family:var(--%NS%inter-font);font-size:.875rem;font-style:normal;font-weight:500;line-height:1.4rem;letter-spacing:-.00875rem;text-decoration:none;white-space:nowrap}.pill[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--%NS%pill-accent) 15%,transparent)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+1){--%NS%pill-accent: var(--%NS%bright-blue)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+2){--%NS%pill-accent: var(--%NS%electric-violet)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+3){--%NS%pill-accent: var(--%NS%french-violet)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+4), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+5), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+6){--%NS%pill-accent: var(--%NS%hot-red)}.pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-inline-start:.25rem}.social-links[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.73rem;margin-top:1.5rem}.social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{transition:fill .3s ease;fill:var(--%NS%gray-400)}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--%NS%gray-900)}@media screen and (max-width:650px){.content[_ngcontent-%COMP%]{flex-direction:column;width:max-content}.divider[_ngcontent-%COMP%]{height:1px;width:100%;background:var(--%NS%red-to-pink-to-purple-horizontal-gradient);margin-block:1.5rem}}`]})};function Mn(){let n=!0,d=!1;try{let e=localStorage.getItem(`workforce360_settings`);if(e){let t=JSON.parse(e);typeof t==`object`&&t!==null&&`darkMode`in t&&typeof t.darkMode==`boolean`&&(n=t.darkMode,d=!0)}if(!d){let t=localStorage.getItem(`workforce360_theme`);(t===`light`||t===`dark`)&&(n=t===`dark`,d=!0)}}catch(e){console.error(`Unable to load saved theme preference`,e)}document.body.classList.toggle(`dark-theme`,n)}Mn();Ao$1(Ce,Jt).catch(n=>console.error(n));export{i as $,me$1 as A,Qi$1 as B,I as C,Yt$2 as D,Wt$2 as E,Ln$1 as F,kn$1 as G,Xe as H,O$1 as I,vi$1 as J,p as K,On$1 as L,we$2 as M,Be$1 as N,bt$2 as O,H$1 as P,t$1 as Q,Ot$2 as R,Ct$1 as S,T,Xi$1 as U,Tt$1 as V,gt$3 as W,xn$1 as X,x as Y,d as Z,we$1 as _,At$1 as a,wt$1 as b,Ot as c,_e$2 as d,_t as f,rt$1 as g,ie$1 as h,le as i,ui$1 as j,ft$2 as k,Pt as l,gt$1 as m,t as n,Ji$1 as o,er$1 as p,tn$1 as q,V as r,Ne$1 as s,c as t,Se$1 as u,ye$2 as v,Ot$1 as w,Ce$2 as x,Mt$1 as y,Pt$1 as z};