<<<<<<<< HEAD:client/dist/assets/Login-Go-8qT8N.js
import{d as p,m,M as f,U as c,a4 as g,_ as w,c as h,a as o,b as t,r,h as n,p as V,V as _,l as y,o as v}from"./index-BBRUpL4S.js";import{N as B,H as C}from"./Navigation-_XQLPAZ2.js";import{_ as F}from"./ssrBoot-yw1ENSsS.js";import{V as $,a as b}from"./VCard-B4crTlbc.js";import{b as N,c as i}from"./VTextField-lnErsss5.js";import{V as S}from"./VForm-CI_IcMRg.js";import"./VAvatar-3-h1Tn3R.js";const U=p({name:"Login",components:{HeaderBar:C,Navigation:B},data(){return{is_form_dense:c.isSmartphoneHorizontal(),username:"",password:"",password_showing:!1}},computed:{...m(g)},async created(){await this.userStore.fetchUser(),this.userStore.is_logged_in&&await this.$router.replace({path:"/settings/account"})},methods:{async login(){if(this.username===""||this.password===""){f.error("ユーザー名またはパスワードが空です。");return}await this.userStore.login(this.username,this.password)!==!1&&await this.$router.replace({path:"/settings/account"})}}}),k={class:"route-container"},D={class:"login-container-wrapper d-flex align-center w-100 mb-13"};function E(s,e,H,x,I,M){const l=r("HeaderBar"),d=r("Navigation"),u=r("Icon");return v(),h("div",k,[o(l),t("main",null,[o(d),t("div",D,[o(b,{class:"login-container px-10 pt-8 pb-11 mx-auto",elevation:"10",width:"100%","max-width":"450"},{default:n(()=>[o($,{class:"login__logo py-4 d-flex flex-column justify-center align-center"},{default:n(()=>e[5]||(e[5]=[t("img",{class:"d-block",src:F,style:{"max-width":"250px"}},null,-1),t("h4",{class:"mt-10"},"ログイン",-1)])),_:1}),o(N),o(S,{ref:"login",onSubmit:e[4]||(e[4]=V(()=>{},["prevent"]))},{default:n(()=>[o(i,{class:"mt-12",color:"primary",variant:"outlined",placeholder:"ユーザー名","hide-details":"",autofocus:"",density:s.is_form_dense?"compact":"default",modelValue:s.username,"onUpdate:modelValue":e[0]||(e[0]=a=>s.username=a)},null,8,["density","modelValue"]),o(i,{class:"mt-8",color:"primary",variant:"outlined",placeholder:"パスワード","hide-details":"",density:s.is_form_dense?"compact":"default",modelValue:s.password,"onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a),type:s.password_showing?"text":"password","append-inner-icon":s.password_showing?"mdi-eye":"mdi-eye-off","onClick:appendInner":e[2]||(e[2]=a=>s.password_showing=!s.password_showing)},null,8,["density","modelValue","type","append-inner-icon"]),o(_,{class:"login-button mt-5",color:"secondary",variant:"flat",width:"100%",height:"56",onClick:e[3]||(e[3]=a=>s.login())},{default:n(()=>[o(u,{icon:"fa:sign-in",class:"mr-2"}),e[6]||(e[6]=y("ログイン "))]),_:1})]),_:1},512)]),_:1})])])])}const J=w(U,[["render",E],["__scopeId","data-v-8f4110cf"]]);export{J as default};
========
import{d as p,m,M as f,U as c,a4 as g,_ as w,c as h,a as o,b as t,r,h as n,p as V,V as _,l as y,o as v}from"./index-CYWMZUuQ.js";import{N as B,H as C}from"./Navigation-_lN4rKee.js";import{_ as b}from"./ssrBoot-KQceIYXz.js";import{V as F,a as $}from"./VCard-DDKqZHSy.js";import{b as N,c as i}from"./VTextField-BtpigOdW.js";import{V as S}from"./VForm-CgGW6Tk1.js";import"./VAvatar-O5Mngihm.js";const U=p({name:"Login",components:{HeaderBar:C,Navigation:B},data(){return{is_form_dense:c.isSmartphoneHorizontal(),username:"",password:"",password_showing:!1}},computed:{...m(g)},async created(){await this.userStore.fetchUser(),this.userStore.is_logged_in&&await this.$router.replace({path:"/settings/account"})},methods:{async login(){if(this.username===""||this.password===""){f.error("ユーザー名またはパスワードが空です。");return}await this.userStore.login(this.username,this.password)!==!1&&await this.$router.replace({path:"/settings/account"})}}}),k={class:"route-container"},D={class:"login-container-wrapper d-flex align-center w-100 mb-13"};function E(s,e,H,x,I,M){const l=r("HeaderBar"),d=r("Navigation"),u=r("Icon");return v(),h("div",k,[o(l),t("main",null,[o(d),t("div",D,[o($,{class:"login-container px-10 pt-8 pb-11 mx-auto",elevation:"10",width:"100%","max-width":"450"},{default:n(()=>[o(F,{class:"login__logo py-4 d-flex flex-column justify-center align-center"},{default:n(()=>e[5]||(e[5]=[t("img",{class:"d-block",src:b,style:{"max-width":"250px"}},null,-1),t("h4",{class:"mt-10"},"ログイン",-1)])),_:1}),o(N),o(S,{ref:"login",onSubmit:e[4]||(e[4]=V(()=>{},["prevent"]))},{default:n(()=>[o(i,{class:"mt-12",color:"primary",variant:"outlined",placeholder:"ユーザー名","hide-details":"",autofocus:"",density:s.is_form_dense?"compact":"default",modelValue:s.username,"onUpdate:modelValue":e[0]||(e[0]=a=>s.username=a)},null,8,["density","modelValue"]),o(i,{class:"mt-8",color:"primary",variant:"outlined",placeholder:"パスワード","hide-details":"",density:s.is_form_dense?"compact":"default",modelValue:s.password,"onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a),type:s.password_showing?"text":"password","append-inner-icon":s.password_showing?"mdi-eye":"mdi-eye-off","onClick:appendInner":e[2]||(e[2]=a=>s.password_showing=!s.password_showing)},null,8,["density","modelValue","type","append-inner-icon"]),o(_,{class:"login-button mt-5",color:"secondary",variant:"flat",width:"100%",height:"56",onClick:e[3]||(e[3]=a=>s.login())},{default:n(()=>[o(u,{icon:"fa:sign-in",class:"mr-2"}),e[6]||(e[6]=y("ログイン "))]),_:1})]),_:1},512)]),_:1})])])])}const J=w(U,[["render",E],["__scopeId","data-v-06de593b"]]);export{J as default};
>>>>>>>> master:client/dist/assets/Login-lQZkTJGl.js
