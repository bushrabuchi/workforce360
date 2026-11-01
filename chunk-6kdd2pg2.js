import{Cn as ie,Ct as Up,Dn as jo,Dr as yF,Er as xc,F as Iv,G as Mp,H as Le,I as JI,Jt as _p,Nn as kp,Nt as Wp,Qt as cI,Rt as YI,Wt as _e,Z as Np,b as EE,c as Bl,ct as R,dr as tD,et as Oa,gt as Sp,ht as Sc,i as Ac,ir as qc,jn as kc,lr as sI,on as fD,ot as PE,pn as gi,q as N,x as EF,xn as hr,yr as vE,yt as Te$1,zt as Yp}from"./chunk-BZjIrA2r.js";import{A as ni,C as de,E as hi,N as wc,O as js,P as yc,S as bn,T as et,a as Cc,d as Ls,o as Dc,t as $s,x as bc,y as _s}from"./chunk-ChBujf22.js";import{B as Qi,G as kn,Q as t,U as Xi,W as gt,a as At,d as _e$1,m as gt$1,o as Ji,p as er,s as Ne$1,v as ye$1}from"./main-3OA27SYA.js";import{i as ne,n as In,t as En}from"./chunk-DJfH6_1y.js";import{t as w}from"./chunk-BF2Ys77f.js";var E=class e{http=N(ni);generateJobDescription(i){return this.http.post(`${t}/ai/job-description`,i)}static ɵfac=function(n){return new(n||e)};static ɵprov=ie({token:e,factory:e.ɵfac,providedIn:`root`})};var ke=new R(`MAT_PROGRESS_BAR_DEFAULT_OPTIONS`);var xe=(()=>{class e{_elementRef=N(hr);_ngZone=N(_e);_changeDetectorRef=N(yF);_renderer=N(Oa);_cleanupTransitionEnd;constructor(){let n=kn(),r=N(ke,{optional:!0});this._isNoopAnimation=n===`di-disabled`,n===`reduced-motion`&&this._elementRef.nativeElement.classList.add(`mat-progress-bar-reduced-motion`),r&&(r.color&&(this.color=this._defaultColor=r.color),this.mode=r.mode||this.mode)}_isNoopAnimation;get color(){return this._color||this._defaultColor}set color(n){this._color=n}_color;_defaultColor=`primary`;get value(){return this._value}set value(n){this._value=ye(n||0),this._changeDetectorRef.markForCheck()}_value=0;get bufferValue(){return this._bufferValue||0}set bufferValue(n){this._bufferValue=ye(n||0),this._changeDetectorRef.markForCheck()}_bufferValue=0;animationEnd=new Le;get mode(){return this._mode}set mode(n){this._mode=n,this._changeDetectorRef.markForCheck()}_mode=`determinate`;ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{this._cleanupTransitionEnd=this._renderer.listen(this._elementRef.nativeElement,`transitionend`,this._transitionendHandler)})}ngOnDestroy(){this._cleanupTransitionEnd?.()}_getPrimaryBarTransform(){return`scaleX(${this._isIndeterminate()?1:this.value/100})`}_getBufferBarFlexBasis(){return`${this.mode===`buffer`?this.bufferValue:100}%`}_isIndeterminate(){return this.mode===`indeterminate`||this.mode===`query`}_transitionendHandler=n=>{this.animationEnd.observers.length===0||!n.target||!n.target.classList.contains(`mdc-linear-progress__primary-bar`)||(this.mode===`determinate`||this.mode===`buffer`)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))};static ɵfac=function(r){return new(r||e)};static ɵcmp=(function(){function n(r,f){r&1&&Sp(0,`div`,2)}return YI({type:e,selectors:[[`mat-progress-bar`]],hostAttrs:[`role`,`progressbar`,`aria-valuemin`,`0`,`aria-valuemax`,`100`,`tabindex`,`-1`,1,`mat-mdc-progress-bar`,`mdc-linear-progress`],hostVars:10,hostBindings:function(f,l){f&2&&(_p(`aria-valuenow`,l._isIndeterminate()?null:l.value)(`mode`,l.mode),tD(`mat-`+l.color),Wp(`_mat-animation-noopable`,l._isNoopAnimation)(`mdc-linear-progress--animation-ready`,!l._isNoopAnimation)(`mdc-linear-progress--indeterminate`,l._isIndeterminate()))},inputs:{color:`color`,value:[2,`value`,`value`,EF],bufferValue:[2,`bufferValue`,`bufferValue`,EF],mode:`mode`},outputs:{animationEnd:`animationEnd`},exportAs:[`matProgressBar`],decls:7,vars:5,consts:[[`aria-hidden`,`true`,1,`mdc-linear-progress__buffer`],[1,`mdc-linear-progress__buffer-bar`],[1,`mdc-linear-progress__buffer-dots`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__primary-bar`],[1,`mdc-linear-progress__bar-inner`],[`aria-hidden`,`true`,1,`mdc-linear-progress__bar`,`mdc-linear-progress__secondary-bar`]],template:function(f,l){f&1&&(xc(0,`div`,0),Sp(1,`div`,1),vE(2,n,1,0,`div`,2),Ac(),xc(3,`div`,3),Sp(4,`span`,4),Ac(),xc(5,`div`,5),Sp(6,`span`,4),Ac()),f&2&&(Iv(),Up(`flex-basis`,l._getBufferBarFlexBasis()),Iv(),EE(l.mode===`buffer`?2:-1),Iv(),Up(`transform`,l._getPrimaryBarTransform()))},styles:[`.mat-mdc-progress-bar {
  --%NS%mat-progress-bar-animation-multiplier: 1;
  display: block;
  text-align: start;
}
.mat-mdc-progress-bar[mode=query] {
  transform: scaleX(-1);
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner {
  animation: none;
}
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,
.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar {
  transition: transform 1ms;
}

.mat-progress-bar-reduced-motion {
  --%NS%mat-progress-bar-animation-multiplier: 2;
}

.mdc-linear-progress {
  position: relative;
  width: 100%;
  transform: translateZ(0);
  outline: 1px solid transparent;
  overflow-x: hidden;
  transition: opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: max(var(--%NS%mat-progress-bar-track-height, 4px), var(--%NS%mat-progress-bar-active-indicator-height, 4px));
}
@media (forced-colors: active) {
  .mdc-linear-progress {
    outline-color: CanvasText;
  }
}

.mdc-linear-progress__bar {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  animation: none;
  transform-origin: top left;
  transition: transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  height: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__bar {
  transition: none;
}
[dir=rtl] .mdc-linear-progress__bar {
  right: 0;
  transform-origin: center right;
}

.mdc-linear-progress__bar-inner {
  display: inline-block;
  position: absolute;
  width: 100%;
  animation: none;
  border-top-style: solid;
  border-color: var(--%NS%mat-progress-bar-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-progress-bar-active-indicator-height, 4px);
}

.mdc-linear-progress__buffer {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 100%;
  overflow: hidden;
  height: var(--%NS%mat-progress-bar-track-height, 4px);
  border-radius: var(--%NS%mat-progress-bar-track-shape, var(--%NS%mat-sys-corner-none));
}

.mdc-linear-progress__buffer-dots {
  background-image: radial-gradient(circle, var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant)) calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2), transparent 0);
  background-repeat: repeat-x;
  background-size: calc(calc(var(--%NS%mat-progress-bar-track-height, 4px) / 2) * 5);
  background-position: left;
  flex: auto;
  transform: rotate(180deg);
  animation: mdc-linear-progress-buffering calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
@media (forced-colors: active) {
  .mdc-linear-progress__buffer-dots {
    background-color: ButtonBorder;
  }
}
[dir=rtl] .mdc-linear-progress__buffer-dots {
  animation: mdc-linear-progress-buffering-reverse calc(250ms * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
  transform: rotate(0);
}

.mdc-linear-progress__buffer-bar {
  flex: 0 1 100%;
  transition: flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  background-color: var(--%NS%mat-progress-bar-track-color, var(--%NS%mat-sys-surface-variant));
}

.mdc-linear-progress__primary-bar {
  transform: scaleX(0);
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  left: -145.166611%;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation: mdc-linear-progress-primary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-primary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar {
  animation-name: mdc-linear-progress-primary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar {
  right: -145.166611%;
  left: auto;
}

.mdc-linear-progress__secondary-bar {
  display: none;
}
.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  left: -54.888891%;
  display: block;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation: mdc-linear-progress-secondary-indeterminate-translate calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar > .mdc-linear-progress__bar-inner {
  animation: mdc-linear-progress-secondary-indeterminate-scale calc(2s * var(--%NS%mat-progress-bar-animation-multiplier)) infinite linear;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar {
  animation-name: mdc-linear-progress-secondary-indeterminate-translate-reverse;
}
[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar {
  right: -54.888891%;
  left: auto;
}

@keyframes mdc-linear-progress-buffering {
  from {
    transform: rotate(180deg) translateX(calc(var(--%NS%mat-progress-bar-track-height, 4px) * -2.5));
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(83.67142%);
  }
  100% {
    transform: translateX(200.611057%);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-scale {
  0% {
    transform: scaleX(0.08);
  }
  36.65% {
    animation-timing-function: cubic-bezier(0.334731, 0.12482, 0.785844, 1);
    transform: scaleX(0.08);
  }
  69.15% {
    animation-timing-function: cubic-bezier(0.06, 0.11, 0.6, 1);
    transform: scaleX(0.661479);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(84.386165%);
  }
  100% {
    transform: translateX(160.277782%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-scale {
  0% {
    animation-timing-function: cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);
    transform: scaleX(0.08);
  }
  19.15% {
    animation-timing-function: cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);
    transform: scaleX(0.457104);
  }
  44.15% {
    animation-timing-function: cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);
    transform: scaleX(0.72796);
  }
  100% {
    transform: scaleX(0.08);
  }
}
@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse {
  0% {
    transform: translateX(0);
  }
  20% {
    animation-timing-function: cubic-bezier(0.5, 0, 0.701732, 0.495819);
    transform: translateX(0);
  }
  59.15% {
    animation-timing-function: cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);
    transform: translateX(-83.67142%);
  }
  100% {
    transform: translateX(-200.611057%);
  }
}
@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse {
  0% {
    animation-timing-function: cubic-bezier(0.15, 0, 0.515058, 0.409685);
    transform: translateX(0);
  }
  25% {
    animation-timing-function: cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);
    transform: translateX(-37.651913%);
  }
  48.35% {
    animation-timing-function: cubic-bezier(0.4, 0.627035, 0.6, 0.902026);
    transform: translateX(-84.386165%);
  }
  100% {
    transform: translateX(-160.277782%);
  }
}
@keyframes mdc-linear-progress-buffering-reverse {
  from {
    transform: translateX(-10px);
  }
}
`],encapsulation:2})})()}return e})();function ye(e,i=0,n=100){return Math.max(i,Math.min(n,e))}var Ce=(()=>{class e{static ɵfac=function(r){return new(r||e)};static ɵmod=JI({type:e});static ɵinj=Bl({imports:[gt]})}return e})();function Ne(e,i){e&1&&(gi(0,`mat-error`),fD(1,`Enter a job title with 3–100 characters.`),Sc())}function Xe(e,i){e&1&&(gi(0,`mat-error`),fD(1,`Enter a department with 2–100 characters.`),Sc())}function Ae(e,i){e&1&&(gi(0,`mat-error`),fD(1,` Enter 1–15 skills, each no longer than 80 characters. `),Sc())}function we(e,i){if(e&1&&(gi(0,`p`,17),fD(1),Sc()),e&2){let n=PE();Iv(),Yp(n.errorMessage())}}function Pe(e,i){e&1&&(gi(0,`p`),fD(1,`Generating your draft. This may take up to a minute.`),Sc())}function Be(e,i){e&1&&(gi(0,`p`),fD(1,`Your draft is ready to review and edit.`),Sc())}function Te(e,i){e&1&&Mp(0,`mat-progress-bar`,20)}function ze(e,i){if(e&1&&(gi(0,`section`,21)(1,`h2`,22),fD(2,`Review your draft`),Sc(),gi(3,`p`),fD(4,`Check the wording and requirements. This draft is not saved to the database.`),Sc(),gi(5,`mat-form-field`,15)(6,`mat-label`),fD(7,`Job description draft`),Sc(),gi(8,`textarea`,23),sI(),Sc()()()),e&2){let n=PE();Iv(8),Np(`formControl`,n.draftControl)(`readonly`,n.isLoading()),_p(`dir`,n.draftLanguage()===`Arabic`?`rtl`:`ltr`),cI()}}function Ee(e,i){return n=>{let r=String(n.value??``).trim();return r.length>=e&&r.length<=i?null:{trimmedLength:!0}}}function Me(e){return e.split(`,`).map(i=>i.trim()).filter(Boolean)}var Re=e=>{let i=Me(String(e.value??``));return i.length>=1&&i.length<=15&&i.every(r=>r.length<=80)?null:{invalidSkills:!0}};var Se=class e{fb=N(bc);aiService=N(E);destroyRef=N(Te$1);isLoading=jo(!1);errorMessage=jo(``);hasDraft=jo(!1);draftLanguage=jo(`English`);form=this.fb.nonNullable.group({jobTitle:[``,[bn.required,Ee(3,100)]],department:[``,[bn.required,Ee(2,100)]],experienceLevel:this.fb.nonNullable.control(`Mid-level`),skills:[``,[bn.required,Re]],language:this.fb.nonNullable.control(`English`)});draftControl=new et(``,{nonNullable:!0});generate(){if(this.isLoading())return;if(this.errorMessage.set(``),this.form.invalid){this.form.markAllAsTouched();return}if(this.hasDraft()&&!window.confirm(`Generate a new draft? A successful result will replace the current text.`))return;let i=this.form.getRawValue(),n={job_title:i.jobTitle.trim(),department:i.department.trim(),experience_level:i.experienceLevel,skills:Me(i.skills),language:i.language};this.isLoading.set(!0),this.form.disable({emitEvent:!1}),this.aiService.generateJobDescription(n).pipe(w(this.destroyRef),qc(()=>{this.isLoading.set(!1),this.form.enable({emitEvent:!1})})).subscribe({next:r=>{this.draftControl.setValue(r.draft),this.draftControl.markAsPristine(),this.draftLanguage.set(n.language),this.hasDraft.set(!0)},error:r=>{this.errorMessage.set(this.getErrorMessage(r))}})}getErrorMessage(i){if(!(i instanceof de))return`Something went wrong. Please try again.`;switch(i.status){case 0:return`Cannot reach the backend. Check your connection.`;case 401:return`Your session has expired. Please sign in again.`;case 403:return`AI drafting is not enabled for this account.`;case 422:return`Please check the job requirements and try again.`;case 429:return`The AI usage limit has been reached. Try again later.`;case 502:return`The AI service could not generate a complete draft.`;case 503:return`AI drafting is not configured or is unavailable.`;case 504:return`Generation timed out. Your input is still here. Try again.`;default:return`Unable to generate a draft. Please try again.`}}static ɵfac=function(n){return new(n||e)};static ɵcmp=YI({type:e,selectors:[[`app-ai-job-description`]],decls:52,vars:11,consts:[[1,`ai-page`],[1,`page-title`],[1,`hint`],[`novalidate`,``,3,`ngSubmit`,`formGroup`],[1,`form-grid`],[`appearance`,`outline`],[`matInput`,``,`formControlName`,`jobTitle`,`maxlength`,`100`],[`matInput`,``,`formControlName`,`department`,`maxlength`,`100`],[`formControlName`,`experienceLevel`],[`value`,`Junior`],[`value`,`Mid-level`],[`value`,`Senior`],[`formControlName`,`language`],[`value`,`English`],[`value`,`Arabic`],[`appearance`,`outline`,1,`full-width`],[`matInput`,``,`formControlName`,`skills`,`rows`,`3`],[`role`,`alert`,1,`error`],[`mat-flat-button`,``,`type`,`submit`,3,`disabled`],[`role`,`status`,`aria-live`,`polite`,1,`status`],[`mode`,`indeterminate`,`aria-label`,`Generating job description`],[`aria-labelledby`,`draft-heading`,1,`draft-section`],[`id`,`draft-heading`],[`matInput`,``,`rows`,`18`,3,`formControl`,`readonly`]],template:function(n,r){n&1&&(gi(0,`section`,0)(1,`h1`,1),fD(2,`AI Job Description`),Sc(),gi(3,`p`),fD(4,` Enter the role requirements to generate a draft. Review and edit the result before using it. `),Sc(),gi(5,`p`,2),fD(6,`Use generic job requirements. Do not enter private employee information.`),Sc(),gi(7,`form`,3),kp(`ngSubmit`,function(){return r.generate()}),gi(8,`div`,4)(9,`mat-form-field`,5)(10,`mat-label`),fD(11,`Job title`),Sc(),gi(12,`input`,6),sI(),Sc(),vE(13,Ne,2,0,`mat-error`),Sc(),gi(14,`mat-form-field`,5)(15,`mat-label`),fD(16,`Department`),Sc(),gi(17,`input`,7),sI(),Sc(),vE(18,Xe,2,0,`mat-error`),Sc(),gi(19,`mat-form-field`,5)(20,`mat-label`),fD(21,`Experience level`),Sc(),gi(22,`mat-select`,8),sI(),gi(23,`mat-option`,9),fD(24,`Junior`),Sc(),gi(25,`mat-option`,10),fD(26,`Mid-level`),Sc(),gi(27,`mat-option`,11),fD(28,`Senior`),Sc()()(),gi(29,`mat-form-field`,5)(30,`mat-label`),fD(31,`Draft language`),Sc(),gi(32,`mat-select`,12),sI(),gi(33,`mat-option`,13),fD(34,`English`),Sc(),gi(35,`mat-option`,14),fD(36,`Arabic`),Sc()()(),gi(37,`mat-form-field`,15)(38,`mat-label`),fD(39,`Required skills`),Sc(),gi(40,`textarea`,16),sI(),Sc(),gi(41,`mat-hint`),fD(42,`Separate skills with commas.`),Sc(),vE(43,Ae,2,0,`mat-error`),Sc()(),vE(44,we,2,1,`p`,17),gi(45,`button`,18),fD(46),Sc(),gi(47,`div`,19),vE(48,Pe,2,0,`p`)(49,Be,2,0,`p`),Sc(),vE(50,Te,1,0,`mat-progress-bar`,20),Sc(),vE(51,ze,9,3,`section`,21),Sc()),n&2&&(Iv(7),Np(`formGroup`,r.form),_p(`aria-busy`,r.isLoading()),Iv(5),cI(),Iv(),EE(r.form.controls.jobTitle.invalid?13:-1),Iv(4),cI(),Iv(),EE(r.form.controls.department.invalid?18:-1),Iv(4),cI(),Iv(10),cI(),Iv(8),cI(),Iv(3),EE(r.form.controls.skills.invalid?43:-1),Iv(),EE(r.errorMessage()?44:-1),Iv(),Np(`disabled`,r.isLoading()),Iv(),kc(` `,r.isLoading()?`Generating…`:`Generate draft`,` `),Iv(2),EE(r.isLoading()?48:r.hasDraft()?49:-1),Iv(2),EE(r.isLoading()?50:-1),Iv(),EE(r.hasDraft()?51:-1))},dependencies:[wc,Cc,hi,yc,Dc,_s,js,Ls,$s,Xi,Qi,Ne$1,gt$1,_e$1,ye$1,At,er,Ji,In,En,ne,Ce,xe],styles:[`[_nghost-%COMP%]{display:block}.ai-page[_ngcontent-%COMP%]{max-width:960px;padding:1px}h1[_ngcontent-%COMP%]{margin-top:0}p[_ngcontent-%COMP%]{line-height:1.6}.hint[_ngcontent-%COMP%]{font-size:.9rem}form[_ngcontent-%COMP%]{margin-top:24px}.form-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}mat-form-field[_ngcontent-%COMP%]{width:100%;min-width:0}.full-width[_ngcontent-%COMP%]{grid-column:1/-1;width:100%}.error[_ngcontent-%COMP%]{padding:12px 16px;border:1px solid currentColor;border-radius:8px}.status[_ngcontent-%COMP%]{margin-top:16px}.draft-section[_ngcontent-%COMP%]{margin-top:32px}textarea[_ngcontent-%COMP%]{line-height:1.6}@media(max-width:640px){.ai-page[_ngcontent-%COMP%]{padding:16px}.form-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}}`]})};export{Se as AiJobDescriptionComponent};