import{l as kt,b as wt,h as Ke,n as Vt,o as Ct,c as Me}from"./VTextField-C6H0qYR7.js";import{E as j,Q as ne,I as W,T as ae,c as S,L as Q,O as ve,j as m,N as $,b5 as fe,bJ as N,ab as me,bP as R,cp as Pe,r as D,a9 as Ae,cS as Ge,bQ as E,S as qe,cT as It,G as ie,H as ge,cU as ce,f as ze,s as Pt,cV as re,cW as We,cE as Xe,cX as xe,cM as Qe,cL as Ye,cY as At,cy as Je,cZ as Ze,R as xt,c_ as Tt,w as ee,cz as et,c$ as tt,d0 as Lt,cF as nt,d1 as Te,cP as at,cR as lt,d2 as Ot,B as Bt,d3 as Et,F as le,d4 as be,cx as Dt,d5 as Mt,d6 as Z,cG as Rt,cH as Ft,d7 as he,cA as _t,d8 as jt,bk as Nt,a0 as Le,d9 as Re,da as Ht,db as it,dc as Ut,ca as Fe,bo as ot,cu as pe,dd as $t,de as we,df as Kt,ct as ye,o as Gt,cq as qt,dg as zt,y as Wt,dh as _e,di as je}from"./index-OIxe0F57.js";import{M as Xt,V as Ve,m as Qt}from"./VAvatar-D1mSqf4G.js";import{m as Yt,V as Ne,j as Jt,k as ut,h as Zt,l as He,e as Ue,n as en,d as tn}from"./VChip-D9Tq23p0.js";import{u as nn,c as an}from"./ssrBoot-CWRQRu8F.js";const ln=j({indeterminate:Boolean,indeterminateIcon:{type:ne,default:"$checkboxIndeterminate"},...Yt({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),on=W()({name:"VCheckboxBtn",props:ln(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,i){let{slots:t}=i;const n=ae(e,"indeterminate"),l=ae(e,"modelValue");function a(d){n.value&&(n.value=!1)}const o=S(()=>n.value?e.indeterminateIcon:e.falseIcon),u=S(()=>n.value?e.indeterminateIcon:e.trueIcon);return Q(()=>{const d=ve(Ne.filterProps(e),["modelValue"]);return m(Ne,$(d,{modelValue:l.value,"onUpdate:modelValue":[v=>l.value=v,a],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:o.value,trueIcon:u.value,"aria-checked":n.value?"mixed":void 0}),t)}),{}}}),Ce=Symbol.for("vuetify:list");function st(){const e=fe(Ce,{hasPrepend:N(!1),updateHasPrepend:()=>null}),i={hasPrepend:N(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return me(Ce,i),e}function rt(){return fe(Ce,null)}const Oe=e=>{const i={activate:t=>{let{id:n,value:l,activated:a}=t;return n=R(n),e&&!l&&a.size===1&&a.has(n)||(l?a.add(n):a.delete(n)),a},in:(t,n,l)=>{let a=new Set;if(t!=null)for(const o of Pe(t))a=i.activate({id:o,value:!0,activated:new Set(a),children:n,parents:l});return a},out:t=>Array.from(t)};return i},ct=e=>{const i=Oe(e);return{activate:n=>{let{activated:l,id:a,...o}=n;a=R(a);const u=l.has(a)?new Set([a]):new Set;return i.activate({...o,id:a,activated:u})},in:(n,l,a)=>{let o=new Set;if(n!=null){const u=Pe(n);u.length&&(o=i.in(u.slice(0,1),l,a))}return o},out:(n,l,a)=>i.out(n,l,a)}},un=e=>{const i=Oe(e);return{activate:n=>{let{id:l,activated:a,children:o,...u}=n;return l=R(l),o.has(l)?a:i.activate({id:l,activated:a,children:o,...u})},in:i.in,out:i.out}},sn=e=>{const i=ct(e);return{activate:n=>{let{id:l,activated:a,children:o,...u}=n;return l=R(l),o.has(l)?a:i.activate({id:l,activated:a,children:o,...u})},in:i.in,out:i.out}},rn={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(i);let o=l.get(i);for(;o!=null;)a.add(o),o=l.get(o);return a}else return n.delete(i),n},select:()=>null},dt={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){let a=l.get(i);for(n.add(i);a!=null&&a!==i;)n.add(a),a=l.get(a);return n}else n.delete(i);return n},select:()=>null},cn={open:dt.open,select:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let o=l.get(i);for(;o!=null;)a.push(o),o=l.get(o);return new Set(a)}},Be=e=>{const i={select:t=>{let{id:n,value:l,selected:a}=t;if(n=R(n),e&&!l){const o=Array.from(a.entries()).reduce((u,d)=>{let[v,w]=d;return w==="on"&&u.push(v),u},[]);if(o.length===1&&o[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const o of t||[])a=i.select({id:o,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return i},vt=e=>{const i=Be(e);return{select:n=>{let{selected:l,id:a,...o}=n;a=R(a);const u=l.has(a)?new Map([[a,l.get(a)]]):new Map;return i.select({...o,id:a,selected:u})},in:(n,l,a)=>{let o=new Map;return n!=null&&n.length&&(o=i.in(n.slice(0,1),l,a)),o},out:(n,l,a)=>i.out(n,l,a)}},dn=e=>{const i=Be(e);return{select:n=>{let{id:l,selected:a,children:o,...u}=n;return l=R(l),o.has(l)?a:i.select({id:l,selected:a,children:o,...u})},in:i.in,out:i.out}},vn=e=>{const i=vt(e);return{select:n=>{let{id:l,selected:a,children:o,...u}=n;return l=R(l),o.has(l)?a:i.select({id:l,selected:a,children:o,...u})},in:i.in,out:i.out}},fn=e=>{const i={select:t=>{let{id:n,value:l,selected:a,children:o,parents:u}=t;n=R(n);const d=new Map(a),v=[n];for(;v.length;){const V=v.shift();a.set(R(V),l?"on":"off"),o.has(V)&&v.push(...o.get(V))}let w=R(u.get(n));for(;w;){const V=o.get(w),h=V.every(r=>a.get(R(r))==="on"),p=V.every(r=>!a.has(R(r))||a.get(R(r))==="off");a.set(w,h?"on":p?"off":"indeterminate"),w=R(u.get(w))}return e&&!l&&Array.from(a.entries()).reduce((h,p)=>{let[r,f]=p;return f==="on"&&h.push(r),h},[]).length===0?d:a},in:(t,n,l)=>{let a=new Map;for(const o of t||[])a=i.select({id:o,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,o]of t.entries())o==="on"&&!n.has(a)&&l.push(a);return l}};return i},de=Symbol.for("vuetify:nested"),ft={id:N(),root:{register:()=>null,unregister:()=>null,parents:D(new Map),children:D(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:D(!1),selectable:D(!1),opened:D(new Set),activated:D(new Set),selected:D(new Map),selectedValues:D([]),getPath:()=>[]}},mn=j({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function,Object],selectStrategy:[String,Function,Object],openStrategy:[String,Object],opened:null,activated:null,selected:null,mandatory:Boolean},"nested"),gn=e=>{let i=!1;const t=D(new Map),n=D(new Map),l=ae(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),a=S(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;if(typeof e.activeStrategy=="function")return e.activeStrategy(e.mandatory);switch(e.activeStrategy){case"leaf":return un(e.mandatory);case"single-leaf":return sn(e.mandatory);case"independent":return Oe(e.mandatory);case"single-independent":default:return ct(e.mandatory)}}),o=S(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;if(typeof e.selectStrategy=="function")return e.selectStrategy(e.mandatory);switch(e.selectStrategy){case"single-leaf":return vn(e.mandatory);case"leaf":return dn(e.mandatory);case"independent":return Be(e.mandatory);case"single-independent":return vt(e.mandatory);case"classic":default:return fn(e.mandatory)}}),u=S(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return cn;case"single":return rn;case"multiple":default:return dt}}),d=ae(e,"activated",e.activated,r=>a.value.in(r,t.value,n.value),r=>a.value.out(r,t.value,n.value)),v=ae(e,"selected",e.selected,r=>o.value.in(r,t.value,n.value),r=>o.value.out(r,t.value,n.value));Ae(()=>{i=!0});function w(r){const f=[];let c=r;for(;c!=null;)f.unshift(c),c=n.value.get(c);return f}const V=Ge("nested"),h=new Set,p={id:N(),root:{opened:l,activatable:E(e,"activatable"),selectable:E(e,"selectable"),activated:d,selected:v,selectedValues:S(()=>{const r=[];for(const[f,c]of v.value.entries())c==="on"&&r.push(f);return r}),register:(r,f,c)=>{if(h.has(r)){w(r).map(String).join(" -> "),w(f).concat(r).map(String).join(" -> ");return}else h.add(r);f&&r!==f&&n.value.set(r,f),c&&t.value.set(r,[]),f!=null&&t.value.set(f,[...t.value.get(f)||[],r])},unregister:r=>{if(i)return;h.delete(r),t.value.delete(r);const f=n.value.get(r);if(f){const c=t.value.get(f)??[];t.value.set(f,c.filter(g=>g!==r))}n.value.delete(r)},open:(r,f,c)=>{V.emit("click:open",{id:r,value:f,path:w(r),event:c});const g=u.value.open({id:r,value:f,opened:new Set(l.value),children:t.value,parents:n.value,event:c});g&&(l.value=g)},openOnSelect:(r,f,c)=>{const g=u.value.select({id:r,value:f,selected:new Map(v.value),opened:new Set(l.value),children:t.value,parents:n.value,event:c});g&&(l.value=g)},select:(r,f,c)=>{V.emit("click:select",{id:r,value:f,path:w(r),event:c});const g=o.value.select({id:r,value:f,selected:new Map(v.value),children:t.value,parents:n.value,event:c});g&&(v.value=g),p.root.openOnSelect(r,f,c)},activate:(r,f,c)=>{if(!e.activatable)return p.root.select(r,!0,c);V.emit("click:activate",{id:r,value:f,path:w(r),event:c});const g=a.value.activate({id:r,value:f,activated:new Set(d.value),children:t.value,parents:n.value,event:c});g&&(d.value=g)},children:t,parents:n,getPath:w}};return me(de,p),p.root},mt=(e,i)=>{const t=fe(de,ft),n=Symbol(qe()),l=S(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(o,u)=>t.root.open(l.value,o,u),openOnSelect:(o,u)=>t.root.openOnSelect(l.value,o,u),isOpen:S(()=>t.root.opened.value.has(l.value)),parent:S(()=>t.root.parents.value.get(l.value)),activate:(o,u)=>t.root.activate(l.value,o,u),isActivated:S(()=>t.root.activated.value.has(R(l.value))),select:(o,u)=>t.root.select(l.value,o,u),isSelected:S(()=>t.root.selected.value.get(R(l.value))==="on"),isIndeterminate:S(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:S(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,i),Ae(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&me(de,a),a},yn=()=>{const e=fe(de,ft);me(de,{...e,isGroupActivator:!0})},hn=It({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return yn(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),bn=j({activeColor:String,baseColor:String,color:String,collapseIcon:{type:ne,default:"$collapse"},expandIcon:{type:ne,default:"$expand"},prependIcon:ne,appendIcon:ne,fluid:Boolean,subgroup:Boolean,title:String,value:null,...ie(),...ge()},"VListGroup"),$e=W()({name:"VListGroup",props:bn(),setup(e,i){let{slots:t}=i;const{isOpen:n,open:l,id:a}=mt(E(e,"value"),!0),o=S(()=>`v-list-group--id-${String(a.value)}`),u=rt(),{isBooted:d}=nn();function v(p){p.stopPropagation(),l(!n.value,p)}const w=S(()=>({onClick:v,class:"v-list-group__header",id:o.value})),V=S(()=>n.value?e.collapseIcon:e.expandIcon),h=S(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&V.value,appendIcon:e.appendIcon||!e.subgroup&&V.value,title:e.title,value:e.value}}));return Q(()=>m(e.tag,{class:["v-list-group",{"v-list-group--prepend":u==null?void 0:u.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&m(ce,{defaults:h.value},{default:()=>[m(hn,null,{default:()=>[t.activator({props:w.value,isOpen:n.value})]})]}),m(Xt,{transition:{component:kt},disabled:!d.value},{default:()=>{var p;return[ze(m("div",{class:"v-list-group__items",role:"group","aria-labelledby":o.value},[(p=t.default)==null?void 0:p.call(t)]),[[Pt,n.value]])]}})]})),{isOpen:n}}}),Sn=j({opacity:[Number,String],...ie(),...ge()},"VListItemSubtitle"),pn=W()({name:"VListItemSubtitle",props:Sn(),setup(e,i){let{slots:t}=i;return Q(()=>m(e.tag,{class:["v-list-item-subtitle",e.class],style:[{"--v-list-item-subtitle-opacity":e.opacity},e.style]},t)),{}}}),kn=an("v-list-item-title"),wn=j({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:ne,baseColor:String,disabled:Boolean,lines:[Boolean,String],link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:ne,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:re(),onClickOnce:re(),...We(),...ie(),...Xe(),...xe(),...Qe(),...Ye(),...At(),...ge(),...Je(),...Ze({variant:"text"})},"VListItem"),Se=W()({name:"VListItem",directives:{Ripple:xt},props:wn(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:n,emit:l}=i;const a=Tt(e,t),o=S(()=>e.value===void 0?a.href.value:e.value),{activate:u,isActivated:d,select:v,isOpen:w,isSelected:V,isIndeterminate:h,isGroupActivator:p,root:r,parent:f,openOnSelect:c,id:g}=mt(o,!1),k=rt(),P=S(()=>{var b;return e.active!==!1&&(e.active||((b=a.isActive)==null?void 0:b.value)||(r.activatable.value?d.value:V.value))}),A=S(()=>e.link!==!1&&a.isLink.value),T=S(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||!!k&&(r.selectable.value||r.activatable.value||e.value!=null))),H=S(()=>e.rounded||e.nav),O=S(()=>e.color??e.activeColor),te=S(()=>({color:P.value?O.value??e.baseColor:e.baseColor,variant:e.variant}));ee(()=>{var b;return(b=a.isActive)==null?void 0:b.value},b=>{b&&f.value!=null&&r.open(f.value,!0),b&&c(b)},{immediate:!0});const{themeClasses:X}=et(e),{borderClasses:K}=tt(e),{colorClasses:Y,colorStyles:U,variantClasses:L}=Lt(te),{densityClasses:G}=nt(e),{dimensionStyles:q}=Te(e),{elevationClasses:ue}=at(e),{roundedClasses:oe}=lt(H),se=S(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),s=S(()=>({isActive:P.value,select:v,isOpen:w.value,isSelected:V.value,isIndeterminate:h.value}));function y(b){var F;l("click",b),T.value&&((F=a.navigate)==null||F.call(a,b),!p&&(r.activatable.value?u(!d.value,b):(r.selectable.value||e.value!=null)&&v(!V.value,b)))}function I(b){(b.key==="Enter"||b.key===" ")&&(b.preventDefault(),b.target.dispatchEvent(new MouseEvent("click",b)))}return Q(()=>{const b=A.value?"a":e.tag,F=n.title||e.title!=null,C=n.subtitle||e.subtitle!=null,B=!!(e.appendAvatar||e.appendIcon),M=!!(B||n.append),z=!!(e.prependAvatar||e.prependIcon),_=!!(z||n.prepend);return k==null||k.updateHasPrepend(_),e.activeColor&&Ot("active-color",["color","base-color"]),ze(m(b,$({class:["v-list-item",{"v-list-item--active":P.value,"v-list-item--disabled":e.disabled,"v-list-item--link":T.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!_&&(k==null?void 0:k.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&P.value},X.value,K.value,Y.value,G.value,ue.value,se.value,oe.value,L.value,e.class],style:[U.value,q.value,e.style],tabindex:T.value?k?-2:0:void 0,"aria-selected":r.activatable.value?d.value:V.value,onClick:y,onKeydown:T.value&&!A.value&&I},a.linkProps),{default:()=>{var J;return[Et(T.value||P.value,"v-list-item"),_&&m("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?m(ce,{key:"prepend-defaults",disabled:!z,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var x;return[(x=n.prepend)==null?void 0:x.call(n,s.value)]}}):m(le,null,[e.prependAvatar&&m(Ve,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&m(be,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),m("div",{class:"v-list-item__spacer"},null)]),m("div",{class:"v-list-item__content","data-no-activator":""},[F&&m(kn,{key:"title"},{default:()=>{var x;return[((x=n.title)==null?void 0:x.call(n,{title:e.title}))??e.title]}}),C&&m(pn,{key:"subtitle"},{default:()=>{var x;return[((x=n.subtitle)==null?void 0:x.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(J=n.default)==null?void 0:J.call(n,s.value)]),M&&m("div",{key:"append",class:"v-list-item__append"},[n.append?m(ce,{key:"append-defaults",disabled:!B,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var x;return[(x=n.append)==null?void 0:x.call(n,s.value)]}}):m(le,null,[e.appendIcon&&m(be,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&m(Ve,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),m("div",{class:"v-list-item__spacer"},null)])]}}),[[Bt("ripple"),T.value&&e.ripple]])}),{activate:u,isActivated:d,isGroupActivator:p,isSelected:V,list:k,select:v,root:r,id:g}}}),Vn=j({color:String,inset:Boolean,sticky:Boolean,title:String,...ie(),...ge()},"VListSubheader"),Cn=W()({name:"VListSubheader",props:Vn(),setup(e,i){let{slots:t}=i;const{textColorClasses:n,textColorStyles:l}=Dt(E(e,"color"));return Q(()=>{const a=!!(t.default||e.title);return m(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var o;return[a&&m("div",{class:"v-list-subheader__text"},[((o=t.default)==null?void 0:o.call(t))??e.title])]}})}),{}}}),In=j({items:Array,returnObject:Boolean},"VListChildren"),gt=W()({name:"VListChildren",props:In(),setup(e,i){let{slots:t}=i;return st(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var h,p;let{children:o,props:u,type:d,raw:v}=a;if(d==="divider")return((h=t.divider)==null?void 0:h.call(t,{props:u}))??m(wt,u,null);if(d==="subheader")return((p=t.subheader)==null?void 0:p.call(t,{props:u}))??m(Cn,u,null);const w={subtitle:t.subtitle?r=>{var f;return(f=t.subtitle)==null?void 0:f.call(t,{...r,item:v})}:void 0,prepend:t.prepend?r=>{var f;return(f=t.prepend)==null?void 0:f.call(t,{...r,item:v})}:void 0,append:t.append?r=>{var f;return(f=t.append)==null?void 0:f.call(t,{...r,item:v})}:void 0,title:t.title?r=>{var f;return(f=t.title)==null?void 0:f.call(t,{...r,item:v})}:void 0},V=$e.filterProps(u);return o?m($e,$({value:u==null?void 0:u.value},V),{activator:r=>{let{props:f}=r;const c={...u,...f,value:e.returnObject?v:u.value};return t.header?t.header({props:c}):m(Se,c,w)},default:()=>m(gt,{items:o,returnObject:e.returnObject},t)}):t.item?t.item({props:u}):m(Se,$(u,{value:e.returnObject?v:u.value}),w)}))}}}),yt=j({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Mt}},"list-items");function Ie(e,i){const t=Z(i,e.itemTitle,i),n=Z(i,e.itemValue,t),l=Z(i,e.itemChildren),a=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?ve(i,["children"]):i:void 0:Z(i,e.itemProps),o={title:t,value:n,...a};return{title:String(o.title??""),value:o.value,props:o,children:Array.isArray(l)?ht(e,l):void 0,raw:i}}function ht(e,i){const t=[];for(const n of i)t.push(Ie(e,n));return t}function Pn(e){const i=S(()=>ht(e,e.items)),t=S(()=>i.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(o=>o!==null)),a.map(o=>e.returnObject&&typeof o=="string"?Ie(e,o):i.value.find(u=>e.valueComparator(o,u.value))||Ie(e,o))}function l(a){return e.returnObject?a.map(o=>{let{raw:u}=o;return u}):a.map(o=>{let{value:u}=o;return u})}return{items:i,transformIn:n,transformOut:l}}function An(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function xn(e,i){const t=Z(i,e.itemType,"item"),n=An(i)?i:Z(i,e.itemTitle),l=Z(i,e.itemValue,void 0),a=Z(i,e.itemChildren),o=e.itemProps===!0?ve(i,["children"]):Z(i,e.itemProps),u={title:n,value:l,...o};return{type:t,title:u.title,value:u.value,props:u,children:t==="item"&&a?bt(e,a):void 0,raw:i}}function bt(e,i){const t=[];for(const n of i)t.push(xn(e,n));return t}function Tn(e){return{items:S(()=>bt(e,e.items))}}const Ln=j({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,"onClick:open":re(),"onClick:select":re(),"onUpdate:opened":re(),...mn({selectStrategy:"single-leaf",openStrategy:"list"}),...We(),...ie(),...Xe(),...xe(),...Qe(),itemType:{type:String,default:"type"},...yt(),...Ye(),...ge(),...Je(),...Ze({variant:"text"})},"VList"),On=W()({name:"VList",props:Ln(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:n}=Tn(e),{themeClasses:l}=et(e),{backgroundColorClasses:a,backgroundColorStyles:o}=Rt(E(e,"bgColor")),{borderClasses:u}=tt(e),{densityClasses:d}=nt(e),{dimensionStyles:v}=Te(e),{elevationClasses:w}=at(e),{roundedClasses:V}=lt(e),{children:h,open:p,parents:r,select:f,getPath:c}=gn(e),g=S(()=>e.lines?`v-list--${e.lines}-line`:void 0),k=E(e,"activeColor"),P=E(e,"baseColor"),A=E(e,"color");st(),Ft({VListGroup:{activeColor:k,baseColor:P,color:A,expandIcon:E(e,"expandIcon"),collapseIcon:E(e,"collapseIcon")},VListItem:{activeClass:E(e,"activeClass"),activeColor:k,baseColor:P,color:A,density:E(e,"density"),disabled:E(e,"disabled"),lines:E(e,"lines"),nav:E(e,"nav"),slim:E(e,"slim"),variant:E(e,"variant")}});const T=N(!1),H=D();function O(L){T.value=!0}function te(L){T.value=!1}function X(L){var G;!T.value&&!(L.relatedTarget&&((G=H.value)!=null&&G.contains(L.relatedTarget)))&&U()}function K(L){const G=L.target;if(!(!H.value||["INPUT","TEXTAREA"].includes(G.tagName))){if(L.key==="ArrowDown")U("next");else if(L.key==="ArrowUp")U("prev");else if(L.key==="Home")U("first");else if(L.key==="End")U("last");else return;L.preventDefault()}}function Y(L){T.value=!0}function U(L){if(H.value)return he(H.value,L)}return Q(()=>m(e.tag,{ref:H,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,a.value,u.value,d.value,w.value,g.value,V.value,e.class],style:[o.value,v.value,e.style],tabindex:e.disabled||T.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:O,onFocusout:te,onFocus:X,onKeydown:K,onMousedown:Y},{default:()=>[m(gt,{items:n.value,returnObject:e.returnObject},t)]})),{open:p,select:f,focus:U,children:h,parents:r,getPath:c}}}),Bn=j({id:String,submenu:Boolean,...ve(Jt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",location:void 0,openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:ut}}),["absolute"])},"VMenu"),En=W()({name:"VMenu",props:Bn(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const n=ae(e,"modelValue"),{scopeId:l}=Zt(),{isRtl:a}=_t(),o=qe(),u=S(()=>e.id||`v-menu-${o}`),d=D(),v=fe(He,null),w=N(new Set);me(He,{register(){w.value.add(o)},unregister(){w.value.delete(o)},closeParents(c){setTimeout(()=>{var g;!w.value.size&&!e.persistent&&(c==null||(g=d.value)!=null&&g.contentEl&&!jt(c,d.value.contentEl))&&(n.value=!1,v==null||v.closeParents())},40)}}),Ae(()=>v==null?void 0:v.unregister()),Nt(()=>n.value=!1);async function V(c){var P,A,T;const g=c.relatedTarget,k=c.target;await Le(),n.value&&g!==k&&((P=d.value)!=null&&P.contentEl)&&((A=d.value)!=null&&A.globalTop)&&![document,d.value.contentEl].includes(k)&&!d.value.contentEl.contains(k)&&((T=Re(d.value.contentEl)[0])==null||T.focus())}ee(n,c=>{c?(v==null||v.register(),document.addEventListener("focusin",V,{once:!0})):(v==null||v.unregister(),document.removeEventListener("focusin",V))});function h(c){v==null||v.closeParents(c)}function p(c){var g,k,P,A,T;if(!e.disabled)if(c.key==="Tab"||c.key==="Enter"&&!e.closeOnContentClick){if(c.key==="Enter"&&(c.target instanceof HTMLTextAreaElement||c.target instanceof HTMLInputElement&&c.target.closest("form")))return;c.key==="Enter"&&c.preventDefault(),Ht(Re((g=d.value)==null?void 0:g.contentEl,!1),c.shiftKey?"prev":"next",O=>O.tabIndex>=0)||(n.value=!1,(P=(k=d.value)==null?void 0:k.activatorEl)==null||P.focus())}else e.submenu&&c.key===(a.value?"ArrowRight":"ArrowLeft")&&(n.value=!1,(T=(A=d.value)==null?void 0:A.activatorEl)==null||T.focus())}function r(c){var k;if(e.disabled)return;const g=(k=d.value)==null?void 0:k.contentEl;g&&n.value?c.key==="ArrowDown"?(c.preventDefault(),c.stopImmediatePropagation(),he(g,"next")):c.key==="ArrowUp"?(c.preventDefault(),c.stopImmediatePropagation(),he(g,"prev")):e.submenu&&(c.key===(a.value?"ArrowRight":"ArrowLeft")?n.value=!1:c.key===(a.value?"ArrowLeft":"ArrowRight")&&(c.preventDefault(),he(g,"first"))):(e.submenu?c.key===(a.value?"ArrowLeft":"ArrowRight"):["ArrowDown","ArrowUp"].includes(c.key))&&(n.value=!0,c.preventDefault(),setTimeout(()=>setTimeout(()=>r(c))))}const f=S(()=>$({"aria-haspopup":"menu","aria-expanded":String(n.value),"aria-owns":u.value,onKeydown:r},e.activatorProps));return Q(()=>{const c=Ue.filterProps(e);return m(Ue,$({ref:d,id:u.value,class:["v-menu",e.class],style:e.style},c,{modelValue:n.value,"onUpdate:modelValue":g=>n.value=g,absolute:!0,activatorProps:f.value,location:e.location??(e.submenu?"end":"bottom"),"onClick:outside":h,onKeydown:p},l),{activator:t.activator,default:function(){for(var g=arguments.length,k=new Array(g),P=0;P<g;P++)k[P]=arguments[P];return m(ce,{root:"VMenu"},{default:()=>{var A;return[(A=t.default)==null?void 0:A.call(t,...k)]}})}})}),Ke({id:u,ΨopenChildren:w},d)}}),Dn=j({renderless:Boolean,...ie()},"VVirtualScrollItem"),Mn=W()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Dn(),emits:{"update:height":e=>!0},setup(e,i){let{attrs:t,emit:n,slots:l}=i;const{resizeRef:a,contentRect:o}=it(void 0,"border");ee(()=>{var u;return(u=o.value)==null?void 0:u.height},u=>{u!=null&&n("update:height",u)}),Q(()=>{var u,d;return e.renderless?m(le,null,[(u=l.default)==null?void 0:u.call(l,{itemRef:a})]):m("div",$({ref:a,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(d=l.default)==null?void 0:d.call(l)])})}}),Rn=-1,Fn=1,ke=100,_n=j({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function jn(e,i){const t=Ut(),n=N(0);Fe(()=>{n.value=parseFloat(e.itemHeight||0)});const l=N(0),a=N(Math.ceil((parseInt(e.height)||t.height.value)/(n.value||16))||1),o=N(0),u=N(0),d=D(),v=D();let w=0;const{resizeRef:V,contentRect:h}=it();Fe(()=>{V.value=d.value});const p=S(()=>{var s;return d.value===document.documentElement?t.height.value:((s=h.value)==null?void 0:s.height)||parseInt(e.height)||0}),r=S(()=>!!(d.value&&v.value&&p.value&&n.value));let f=Array.from({length:i.value.length}),c=Array.from({length:i.value.length});const g=N(0);let k=-1;function P(s){return f[s]||n.value}const A=$t(()=>{const s=performance.now();c[0]=0;const y=i.value.length;for(let I=1;I<=y-1;I++)c[I]=(c[I-1]||0)+P(I-1);g.value=Math.max(g.value,performance.now()-s)},g),T=ee(r,s=>{s&&(T(),w=v.value.offsetTop,A.immediate(),q(),~k&&Le(()=>{we&&window.requestAnimationFrame(()=>{oe(k),k=-1})}))});ot(()=>{A.clear()});function H(s,y){const I=f[s],b=n.value;n.value=b?Math.min(n.value,y):y,(I!==y||b!==n.value)&&(f[s]=y,A())}function O(s){return s=pe(s,0,i.value.length-1),c[s]||0}function te(s){return Nn(c,s)}let X=0,K=0,Y=0;ee(p,(s,y)=>{y&&(q(),s<y&&requestAnimationFrame(()=>{K=0,q()}))});function U(){if(!d.value||!v.value)return;const s=d.value.scrollTop,y=performance.now();y-Y>500?(K=Math.sign(s-X),w=v.value.offsetTop):K=s-X,X=s,Y=y,q()}function L(){!d.value||!v.value||(K=0,Y=0,q())}let G=-1;function q(){cancelAnimationFrame(G),G=requestAnimationFrame(ue)}function ue(){if(!d.value||!p.value)return;const s=X-w,y=Math.sign(K),I=Math.max(0,s-ke),b=pe(te(I),0,i.value.length),F=s+p.value+ke,C=pe(te(F)+1,b+1,i.value.length);if((y!==Rn||b<l.value)&&(y!==Fn||C>a.value)){const B=O(l.value)-O(b),M=O(C)-O(a.value);Math.max(B,M)>ke?(l.value=b,a.value=C):(b<=0&&(l.value=b),C>=i.value.length&&(a.value=C))}o.value=O(l.value),u.value=O(i.value.length)-O(a.value)}function oe(s){const y=O(s);!d.value||s&&!y?k=s:d.value.scrollTop=y}const se=S(()=>i.value.slice(l.value,a.value).map((s,y)=>({raw:s,index:y+l.value})));return ee(i,()=>{f=Array.from({length:i.value.length}),c=Array.from({length:i.value.length}),A.immediate(),q()},{deep:!0}),{calculateVisibleItems:q,containerRef:d,markerRef:v,computedItems:se,paddingTop:o,paddingBottom:u,scrollToIndex:oe,handleScroll:U,handleScrollend:L,handleItemResize:H}}function Nn(e,i){let t=e.length-1,n=0,l=0,a=null,o=-1;if(e[t]<i)return t;for(;n<=t;)if(l=n+t>>1,a=e[l],a>i)t=l-1;else if(a<i)o=l,n=l+1;else return a===i?l:n;return o}const Hn=j({items:{type:Array,default:()=>[]},renderless:Boolean,..._n(),...ie(),...xe()},"VVirtualScroll"),Un=W()({name:"VVirtualScroll",props:Hn(),setup(e,i){let{slots:t}=i;const n=Ge("VVirtualScroll"),{dimensionStyles:l}=Te(e),{calculateVisibleItems:a,containerRef:o,markerRef:u,handleScroll:d,handleScrollend:v,handleItemResize:w,scrollToIndex:V,paddingTop:h,paddingBottom:p,computedItems:r}=jn(e,E(e,"items"));return Kt(()=>e.renderless,()=>{function f(){var k,P;const g=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";o.value===document.documentElement?(document[g]("scroll",d,{passive:!0}),document[g]("scrollend",v)):((k=o.value)==null||k[g]("scroll",d,{passive:!0}),(P=o.value)==null||P[g]("scrollend",v))}Gt(()=>{o.value=en(n.vnode.el,!0),f(!0)}),ot(f)}),Q(()=>{const f=r.value.map(c=>m(Mn,{key:c.index,renderless:e.renderless,"onUpdate:height":g=>w(c.index,g)},{default:g=>{var k;return(k=t.default)==null?void 0:k.call(t,{item:c.raw,index:c.index,...g})}}));return e.renderless?m(le,null,[m("div",{ref:u,class:"v-virtual-scroll__spacer",style:{paddingTop:ye(h.value)}},null),f,m("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ye(p.value)}},null)]):m("div",{ref:o,class:["v-virtual-scroll",e.class],onScrollPassive:d,onScrollend:v,style:[l.value,e.style]},[m("div",{ref:u,class:"v-virtual-scroll__container",style:{paddingTop:ye(h.value),paddingBottom:ye(p.value)}},[f])])}),{calculateVisibleItems:a,scrollToIndex:V}}});function $n(e,i){const t=N(!1);let n;function l(u){cancelAnimationFrame(n),t.value=!0,n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{t.value=!1})})}async function a(){await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>requestAnimationFrame(u)),await new Promise(u=>{if(t.value){const d=ee(t,()=>{d(),u()})}else u()})}async function o(u){var w,V;if(u.key==="Tab"&&((w=i.value)==null||w.focus()),!["PageDown","PageUp","Home","End"].includes(u.key))return;const d=(V=e.value)==null?void 0:V.$el;if(!d)return;(u.key==="Home"||u.key==="End")&&d.scrollTo({top:u.key==="Home"?0:d.scrollHeight,behavior:"smooth"}),await a();const v=d.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(u.key==="PageDown"||u.key==="Home"){const h=d.getBoundingClientRect().top;for(const p of v)if(p.getBoundingClientRect().top>=h){p.focus();break}}else{const h=d.getBoundingClientRect().bottom;for(const p of[...v].reverse())if(p.getBoundingClientRect().bottom<=h){p.focus();break}}}return{onScrollPassive:l,onKeydown:o}}const Kn=j({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:ne,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...yt({itemChildren:!1})},"Select"),Gn=j({...Kn(),...ve(Vt({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Qt({transition:{component:ut}})},"VSelect"),Yn=W()({name:"VSelect",props:Gn(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,i){let{slots:t}=i;const{t:n}=qt(),l=D(),a=D(),o=D(),u=ae(e,"menu"),d=S({get:()=>u.value,set:s=>{var y;u.value&&!s&&((y=a.value)!=null&&y.ΨopenChildren.size)||(u.value=s)}}),{items:v,transformIn:w,transformOut:V}=Pn(e),h=ae(e,"modelValue",[],s=>w(s===null?[null]:Pe(s)),s=>{const y=V(s);return e.multiple?y:y[0]??null}),p=S(()=>typeof e.counterValue=="function"?e.counterValue(h.value):typeof e.counterValue=="number"?e.counterValue:h.value.length),r=Ct(),f=S(()=>h.value.map(s=>s.value)),c=N(!1),g=S(()=>d.value?e.closeText:e.openText);let k="",P;const A=S(()=>e.hideSelected?v.value.filter(s=>!h.value.some(y=>e.valueComparator(y,s))):v.value),T=S(()=>e.hideNoData&&!A.value.length||e.readonly||(r==null?void 0:r.isReadonly.value)),H=S(()=>{var s;return{...e.menuProps,activatorProps:{...((s=e.menuProps)==null?void 0:s.activatorProps)||{},"aria-haspopup":"listbox"}}}),O=D(),te=$n(O,l);function X(s){e.openOnClear&&(d.value=!0)}function K(){T.value||(d.value=!d.value)}function Y(s){_e(s)&&U(s)}function U(s){var F,C;if(!s.key||e.readonly||r!=null&&r.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(s.key)&&s.preventDefault(),["Enter","ArrowDown"," "].includes(s.key)&&(d.value=!0),["Escape","Tab"].includes(s.key)&&(d.value=!1),s.key==="Home"?(F=O.value)==null||F.focus("first"):s.key==="End"&&((C=O.value)==null||C.focus("last"));const y=1e3;if(e.multiple||!_e(s))return;const I=performance.now();I-P>y&&(k=""),k+=s.key.toLowerCase(),P=I;const b=v.value.find(B=>B.title.toLowerCase().startsWith(k));if(b!==void 0){h.value=[b];const B=A.value.indexOf(b);we&&window.requestAnimationFrame(()=>{var M;B>=0&&((M=o.value)==null||M.scrollToIndex(B))})}}function L(s){let y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!s.props.disabled)if(e.multiple){const I=h.value.findIndex(F=>e.valueComparator(F.value,s.value)),b=y??!~I;if(~I){const F=b?[...h.value,s]:[...h.value];F.splice(I,1),h.value=F}else b&&(h.value=[...h.value,s])}else{const I=y!==!1;h.value=I?[s]:[],Le(()=>{d.value=!1})}}function G(s){var y;(y=O.value)!=null&&y.$el.contains(s.relatedTarget)||(d.value=!1)}function q(){var s;e.eager&&((s=o.value)==null||s.calculateVisibleItems())}function ue(){var s;c.value&&((s=l.value)==null||s.focus())}function oe(s){c.value=!0}function se(s){if(s==null)h.value=[];else if(je(l.value,":autofill")||je(l.value,":-webkit-autofill")){const y=v.value.find(I=>I.title===s);y&&L(y)}else l.value&&(l.value.value="")}return ee(d,()=>{if(!e.hideSelected&&d.value&&h.value.length){const s=A.value.findIndex(y=>h.value.some(I=>e.valueComparator(I.value,y.value)));we&&window.requestAnimationFrame(()=>{var y;s>=0&&((y=o.value)==null||y.scrollToIndex(s))})}}),ee(()=>e.items,(s,y)=>{d.value||c.value&&!y.length&&s.length&&(d.value=!0)}),Q(()=>{const s=!!(e.chips||t.chip),y=!!(!e.hideNoData||A.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),I=h.value.length>0,b=Me.filterProps(e),F=I||!c.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return m(Me,$({ref:l},b,{modelValue:h.value.map(C=>C.props.value).join(", "),"onUpdate:modelValue":se,focused:c.value,"onUpdate:focused":C=>c.value=C,validationValue:h.externalValue,counterValue:p.value,dirty:I,class:["v-select",{"v-select--active-menu":d.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":h.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:F,"onClick:clear":X,"onMousedown:control":K,onBlur:G,onKeydown:U,"aria-label":n(g.value),title:n(g.value)}),{...t,default:()=>m(le,null,[m(En,$({ref:a,modelValue:d.value,"onUpdate:modelValue":C=>d.value=C,activator:"parent",contentClass:"v-select__content",disabled:T.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:q,onAfterLeave:ue},H.value),{default:()=>[y&&m(On,$({ref:O,selected:f.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:C=>C.preventDefault(),onKeydown:Y,onFocusin:oe,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},te,e.listProps),{default:()=>{var C,B,M;return[(C=t["prepend-item"])==null?void 0:C.call(t),!A.value.length&&!e.hideNoData&&(((B=t["no-data"])==null?void 0:B.call(t))??m(Se,{title:n(e.noDataText)},null)),m(Un,{ref:o,renderless:!0,items:A.value},{default:z=>{var De;let{item:_,index:J,itemRef:x}=z;const Ee=$(_.props,{ref:x,key:J,onClick:()=>L(_,null)});return((De=t.item)==null?void 0:De.call(t,{item:_,index:J,props:Ee}))??m(Se,$(Ee,{role:"option"}),{prepend:St=>{let{isSelected:pt}=St;return m(le,null,[e.multiple&&!e.hideSelected?m(on,{key:_.value,modelValue:pt,ripple:!1,tabindex:"-1"},null):void 0,_.props.prependAvatar&&m(Ve,{image:_.props.prependAvatar},null),_.props.prependIcon&&m(be,{icon:_.props.prependIcon},null)])}})}}),(M=t["append-item"])==null?void 0:M.call(t)]}})]}),h.value.map((C,B)=>{function M(x){x.stopPropagation(),x.preventDefault(),L(C,!1)}const z={"onClick:close":M,onKeydown(x){x.key!=="Enter"&&x.key!==" "||(x.preventDefault(),x.stopPropagation(),M(x))},onMousedown(x){x.preventDefault(),x.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},_=s?!!t.chip:!!t.selection,J=_?zt(s?t.chip({item:C,index:B,props:z}):t.selection({item:C,index:B})):void 0;if(!(_&&!J))return m("div",{key:C.value,class:"v-select__selection"},[s?t.chip?m(ce,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:C.title}}},{default:()=>[J]}):m(tn,$({key:"chip",closable:e.closableChips,size:"small",text:C.title,disabled:C.props.disabled},z),null):J??m("span",{class:"v-select__selection-text"},[C.title,e.multiple&&B<h.value.length-1&&m("span",{class:"v-select__selection-comma"},[Wt(",")])])])})]),"append-inner":function(){var z;for(var C=arguments.length,B=new Array(C),M=0;M<C;M++)B[M]=arguments[M];return m(le,null,[(z=t["append-inner"])==null?void 0:z.call(t,...B),e.menuIcon?m(be,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Ke({isFocused:c,menu:d,select:L},l)}});export{On as V,Se as a,kn as b,Yn as c};
