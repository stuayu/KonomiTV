<<<<<<<< HEAD:client/dist/assets/VAvatar--oJobR23.js
import{dL as W,E as V,J as Z,N as $,ar as K,aq as Y,G as R,cX as p,I as B,d1 as ee,L as T,k as n,c as P,cL as x,cG as te,bQ as ae,cR as L,cS as ne,bJ as h,r as re,w as C,bj as se,a0 as ie,aa as le,g as E,p as oe,F as ue,ct as ce,t as ve,Q as de,cW as ge,cE as me,dB as fe,H as ye,cy as Se,cZ as be,cz as _e,c$ as he,d0 as ke,cF as Pe,dC as Ve,d4 as ze,cU as Ie,d3 as Ce}from"./index-D59UPlH_.js";function Re(e,l){if(!W)return;const s=l.modifiers||{},t=l.value,{handler:v,options:d}=typeof t=="object"?t:{handler:t,options:{}},m=new IntersectionObserver(function(){var u;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const r=(u=e._observe)==null?void 0:u[l.instance.$.uid];if(!r)return;const i=g.some(S=>S.isIntersecting);v&&(!s.quiet||r.init)&&(!s.once||i||r.init)&&v(i,g,f),i&&s.once?q(e,l):r.init=!0},d);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:m},m.observe(e)}function q(e,l){var t;const s=(t=e._observe)==null?void 0:t[l.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const Be={mounted:Re,unmounted:q},Te=V({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),k=(e,l)=>{let{slots:s}=l;const{transition:t,disabled:v,group:d,...m}=e,{component:g=d?K:Y,...f}=typeof t=="object"?t:{};return Z(g,$(typeof t=="string"?{name:v?"":t}:f,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:v,group:d}).filter(r=>{let[i,u]=r;return u!==void 0})),m),s)};function je(e){return{aspectStyles:P(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const H=V({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...R(),...p()},"VResponsive"),F=B()({name:"VResponsive",props:H(),setup(e,l){let{slots:s}=l;const{aspectStyles:t}=je(e),{dimensionStyles:v}=ee(e);return T(()=>{var d;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[v.value,e.style]},[n("div",{class:"v-responsive__sizer",style:t.value},null),(d=s.additional)==null?void 0:d.call(s),s.default&&n("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}}),we=V({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...H(),...R(),...x(),...Te()},"VImg"),Oe=B()({name:"VImg",directives:{intersect:Be},props:we(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:s,slots:t}=l;const{backgroundColorClasses:v,backgroundColorStyles:d}=te(ae(e,"color")),{roundedClasses:m}=L(e),g=ne("VImg"),f=h(""),r=re(),i=h(e.eager?"loading":"idle"),u=h(),S=h(),c=P(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),b=P(()=>c.value.aspect||u.value/S.value||0);C(()=>e.src,()=>{z(i.value!=="idle")}),C(b,(a,o)=>{!a&&o&&r.value&&_(r.value)}),se(()=>z());function z(a){if(!(e.eager&&a)&&!(W&&!a&&!e.eager)){if(i.value="loading",c.value.lazySrc){const o=new Image;o.src=c.value.lazySrc,_(o,null)}c.value.src&&ie(()=>{var o;s("loadstart",((o=r.value)==null?void 0:o.currentSrc)||c.value.src),setTimeout(()=>{var y;if(!g.isUnmounted)if((y=r.value)!=null&&y.complete){if(r.value.naturalWidth||w(),i.value==="error")return;b.value||_(r.value,null),i.value==="loading"&&j()}else b.value||_(r.value),O()})})}}function j(){var a;g.isUnmounted||(O(),_(r.value),i.value="loaded",s("load",((a=r.value)==null?void 0:a.currentSrc)||c.value.src))}function w(){var a;g.isUnmounted||(i.value="error",s("error",((a=r.value)==null?void 0:a.currentSrc)||c.value.src))}function O(){const a=r.value;a&&(f.value=a.currentSrc||a.src)}let I=-1;le(()=>{clearTimeout(I)});function _(a){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const y=()=>{if(clearTimeout(I),g.isUnmounted)return;const{naturalHeight:A,naturalWidth:D}=a;A||D?(u.value=D,S.value=A):!a.complete&&i.value==="loading"&&o!=null?I=window.setTimeout(y,o):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(u.value=1,S.value=1)};y()}const N=P(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),M=()=>{var y;if(!c.value.src||i.value==="idle")return null;const a=n("img",{class:["v-img__img",N.value],style:{objectPosition:e.position},src:c.value.src,srcset:c.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:r,onLoad:j,onError:w},null),o=(y=t.sources)==null?void 0:y.call(t);return n(k,{transition:e.transition,appear:!0},{default:()=>[E(o?n("picture",{class:"v-img__picture"},[o,a]):a,[[ve,i.value==="loaded"]])]})},G=()=>n(k,{transition:e.transition},{default:()=>[c.value.lazySrc&&i.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",N.value],style:{objectPosition:e.position},src:c.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),J=()=>t.placeholder?n(k,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!t.error)&&n("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,Q=()=>t.error?n(k,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&n("div",{class:"v-img__error"},[t.error()])]}):null,X=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,U=h(!1);{const a=C(b,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{U.value=!0})}),a())})}return T(()=>{const a=F.filterProps(e);return E(n(F,$({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!U.value},v.value,m.value,e.class],style:[{width:ce(e.width==="auto"?u.value:e.width)},d.value,e.style]},a,{aspectRatio:b.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(ue,null,[n(M,null,null),n(G,null,null),n(X,null,null),n(J,null,null),n(Q,null,null)]),default:t.default}),[[oe("intersect"),{handler:z,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:r,state:i,naturalWidth:u,naturalHeight:S}}}),Ne=V({start:Boolean,end:Boolean,icon:de,image:String,text:String,...ge(),...R(),...me(),...x(),...fe(),...ye(),...Se(),...be({variant:"flat"})},"VAvatar"),Ae=B()({name:"VAvatar",props:Ne(),setup(e,l){let{slots:s}=l;const{themeClasses:t}=_e(e),{borderClasses:v}=he(e),{colorClasses:d,colorStyles:m,variantClasses:g}=ke(e),{densityClasses:f}=Pe(e),{roundedClasses:r}=L(e),{sizeClasses:i,sizeStyles:u}=Ve(e);return T(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,v.value,d.value,f.value,r.value,i.value,g.value,e.class],style:[m.value,u.value,e.style]},{default:()=>[s.default?n(Ie,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[s.default()]}):e.image?n(Oe,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(ze,{key:"icon",icon:e.icon},null):e.text,Ce(!1,"v-avatar")]})),{}}});export{Be as I,k as M,Ae as V,Oe as a,Te as m};
========
import{dB as x,H as I,L as X,Q as E,at as Y,as as Z,I as R,cN as p,K as T,cT as ee,O as B,j as n,c as V,cB as H,cw as te,bK as ae,cH as M,cI as ne,bD as h,r as re,w as C,bg as se,a2 as ie,ac as le,g as W,s as oe,F as ue,cj as ce,y as ve,T as de,cM as ge,cu as me,dr as fe,J as ye,co as Se,cP as be,cp as _e,cR as he,cS as Pe,cv as Ve,ds as Ie,cW as ke,cK as ze,cV as Ce}from"./index-DqDi3b-j.js";function Re(e,l){if(!x)return;const s=l.modifiers||{},t=l.value,{handler:v,options:d}=typeof t=="object"?t:{handler:t,options:{}},m=new IntersectionObserver(function(){var u;let g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const r=(u=e._observe)==null?void 0:u[l.instance.$.uid];if(!r)return;const i=g.some(S=>S.isIntersecting);v&&(!s.quiet||r.init)&&(!s.once||i||r.init)&&v(i,g,f),i&&s.once?$(e,l):r.init=!0},d);e._observe=Object(e._observe),e._observe[l.instance.$.uid]={init:!1,observer:m},m.observe(e)}function $(e,l){var t;const s=(t=e._observe)==null?void 0:t[l.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[l.instance.$.uid])}const Te={mounted:Re,unmounted:$},Be=I({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),P=(e,l)=>{let{slots:s}=l;const{transition:t,disabled:v,group:d,...m}=e,{component:g=d?Y:Z,...f}=typeof t=="object"?t:{};return X(g,E(typeof t=="string"?{name:v?"":t}:f,typeof t=="string"?{}:Object.fromEntries(Object.entries({disabled:v,group:d}).filter(r=>{let[i,u]=r;return u!==void 0})),m),s)};function je(e){return{aspectStyles:V(()=>{const l=Number(e.aspectRatio);return l?{paddingBottom:String(1/l*100)+"%"}:void 0})}}const q=I({aspectRatio:[String,Number],contentClass:null,inline:Boolean,...R(),...p()},"VResponsive"),F=T()({name:"VResponsive",props:q(),setup(e,l){let{slots:s}=l;const{aspectStyles:t}=je(e),{dimensionStyles:v}=ee(e);return B(()=>{var d;return n("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[v.value,e.style]},[n("div",{class:"v-responsive__sizer",style:t.value},null),(d=s.additional)==null?void 0:d.call(s),s.default&&n("div",{class:["v-responsive__content",e.contentClass]},[s.default()])])}),{}}}),we=I({absolute:Boolean,alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...q(),...R(),...H(),...Be()},"VImg"),Oe=T()({name:"VImg",directives:{intersect:Te},props:we(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,l){let{emit:s,slots:t}=l;const{backgroundColorClasses:v,backgroundColorStyles:d}=te(ae(e,"color")),{roundedClasses:m}=M(e),g=ne("VImg"),f=h(""),r=re(),i=h(e.eager?"loading":"idle"),u=h(),S=h(),c=V(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),b=V(()=>c.value.aspect||u.value/S.value||0);C(()=>e.src,()=>{k(i.value!=="idle")}),C(b,(a,o)=>{!a&&o&&r.value&&_(r.value)}),se(()=>k());function k(a){if(!(e.eager&&a)&&!(x&&!a&&!e.eager)){if(i.value="loading",c.value.lazySrc){const o=new Image;o.src=c.value.lazySrc,_(o,null)}c.value.src&&ie(()=>{var o;s("loadstart",((o=r.value)==null?void 0:o.currentSrc)||c.value.src),setTimeout(()=>{var y;if(!g.isUnmounted)if((y=r.value)!=null&&y.complete){if(r.value.naturalWidth||w(),i.value==="error")return;b.value||_(r.value,null),i.value==="loading"&&j()}else b.value||_(r.value),O()})})}}function j(){var a;g.isUnmounted||(O(),_(r.value),i.value="loaded",s("load",((a=r.value)==null?void 0:a.currentSrc)||c.value.src))}function w(){var a;g.isUnmounted||(i.value="error",s("error",((a=r.value)==null?void 0:a.currentSrc)||c.value.src))}function O(){const a=r.value;a&&(f.value=a.currentSrc||a.src)}let z=-1;le(()=>{clearTimeout(z)});function _(a){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const y=()=>{if(clearTimeout(z),g.isUnmounted)return;const{naturalHeight:A,naturalWidth:U}=a;A||U?(u.value=U,S.value=A):!a.complete&&i.value==="loading"&&o!=null?z=window.setTimeout(y,o):(a.currentSrc.endsWith(".svg")||a.currentSrc.startsWith("data:image/svg+xml"))&&(u.value=1,S.value=1)};y()}const D=V(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),K=()=>{var y;if(!c.value.src||i.value==="idle")return null;const a=n("img",{class:["v-img__img",D.value],style:{objectPosition:e.position},src:c.value.src,srcset:c.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:r,onLoad:j,onError:w},null),o=(y=t.sources)==null?void 0:y.call(t);return n(P,{transition:e.transition,appear:!0},{default:()=>[W(o?n("picture",{class:"v-img__picture"},[o,a]):a,[[ve,i.value==="loaded"]])]})},L=()=>n(P,{transition:e.transition},{default:()=>[c.value.lazySrc&&i.value!=="loaded"&&n("img",{class:["v-img__img","v-img__img--preload",D.value],style:{objectPosition:e.position},src:c.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),G=()=>t.placeholder?n(P,{transition:e.transition,appear:!0},{default:()=>[(i.value==="loading"||i.value==="error"&&!t.error)&&n("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,J=()=>t.error?n(P,{transition:e.transition,appear:!0},{default:()=>[i.value==="error"&&n("div",{class:"v-img__error"},[t.error()])]}):null,Q=()=>e.gradient?n("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,N=h(!1);{const a=C(b,o=>{o&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{N.value=!0})}),a())})}return B(()=>{const a=F.filterProps(e);return W(n(F,E({class:["v-img",{"v-img--absolute":e.absolute,"v-img--booting":!N.value},v.value,m.value,e.class],style:[{width:ce(e.width==="auto"?u.value:e.width)},d.value,e.style]},a,{aspectRatio:b.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>n(ue,null,[n(K,null,null),n(L,null,null),n(Q,null,null),n(G,null,null),n(J,null,null)]),default:t.default}),[[oe("intersect"),{handler:k,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:r,state:i,naturalWidth:u,naturalHeight:S}}}),De=I({start:Boolean,end:Boolean,icon:de,image:String,text:String,...ge(),...R(),...me(),...H(),...fe(),...ye(),...Se(),...be({variant:"flat"})},"VAvatar"),Ae=T()({name:"VAvatar",props:De(),setup(e,l){let{slots:s}=l;const{themeClasses:t}=_e(e),{borderClasses:v}=he(e),{colorClasses:d,colorStyles:m,variantClasses:g}=Pe(e),{densityClasses:f}=Ve(e),{roundedClasses:r}=M(e),{sizeClasses:i,sizeStyles:u}=Ie(e);return B(()=>n(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},t.value,v.value,d.value,f.value,r.value,i.value,g.value,e.class],style:[m.value,u.value,e.style]},{default:()=>[s.default?n(ze,{key:"content-defaults",defaults:{VImg:{cover:!0,src:e.image},VIcon:{icon:e.icon}}},{default:()=>[s.default()]}):e.image?n(Oe,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?n(ke,{key:"icon",icon:e.icon},null):e.text,Ce(!1,"v-avatar")]})),{}}});export{Te as I,P as M,Ae as V,Oe as a,Be as m};
>>>>>>>> origin/master:client/dist/assets/VAvatar-3pGcOSj5.js
