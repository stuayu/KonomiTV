import{d as p,U as m,m as f,a1 as c,_ as w,b as n,e as g,f as h,k as t,j as a,i as o,B as _,V,z as v}from"./index-D59UPlH_.js";import{H as y,N as C}from"./Navigation-BC3lN-Yd.js";import{_ as B}from"./ssrBoot-5VSid4r3.js";import{a as $,V as F}from"./VCard-CXgvKvRo.js";import{b,c as i}from"./VTextField-CN5peWdG.js";import{V as A}from"./VForm-zYlmQZeo.js";import"./VAvatar--oJobR23.js";const N=p({name:"Register",components:{HeaderBar:y,Navigation:C},data(){return{is_form_dense:m.isSmartphoneHorizontal(),username:null,username_validation:e=>e===""||e===null?"ユーザー名を入力してください。":/^.{2,}$/.test(e)===!1?"ユーザー名は2文字以上で入力してください。":!0,password:null,password_showing:!0,password_validation:e=>e===""||e===null?"パスワードを入力してください。":/^[a-zA-Z0-9!-/:-@¥[-`{-~]{4,}$/.test(e)===!1?"パスワードは4文字以上の半角英数記号を入力してください。":!0}},computed:{...f(c)},async created(){await this.userStore.fetchUser(),this.userStore.is_logged_in&&await this.$router.replace({path:"/settings/account"})},methods:{async register(){(await this.$refs.register.validate()).valid===!1||this.username===null||this.password===null||await this.userStore.register(this.username,this.password)===!1||await this.$router.replace({path:"/settings/account"})}}}),S={class:"route-container"},k={class:"register-container-wrapper d-flex align-center w-100 mb-13"};function U(e,s,H,I,x,z){const l=n("HeaderBar"),u=n("Navigation"),d=n("Icon");return g(),h("div",S,[t(l),a("main",null,[t(u),a("div",k,[t($,{class:"register-container px-10 pt-8 pb-11 mx-auto",elevation:"10",width:"100%","max-width":"450"},{default:o(()=>[t(F,{class:"register__logo py-4 d-flex flex-column justify-center align-center"},{default:o(()=>s[5]||(s[5]=[a("img",{class:"d-block",src:B,style:{"max-width":"250px"}},null,-1),a("h4",{class:"mt-10"},"アカウントを作成",-1)])),_:1}),t(b),t(A,{ref:"register",onSubmit:s[4]||(s[4]=_(()=>{},["prevent"]))},{default:o(()=>[t(i,{class:"mt-12",color:"primary",variant:"outlined",placeholder:"ユーザー名",autofocus:"",density:e.is_form_dense?"compact":"default",modelValue:e.username,"onUpdate:modelValue":s[0]||(s[0]=r=>e.username=r),rules:[e.username_validation]},null,8,["density","modelValue","rules"]),t(i,{style:{"margin-top":"10px"},color:"primary",variant:"outlined",placeholder:"パスワード",density:e.is_form_dense?"compact":"default",modelValue:e.password,"onUpdate:modelValue":s[1]||(s[1]=r=>e.password=r),type:e.password_showing?"text":"password",rules:[e.password_validation],"append-inner-icon":e.password_showing?"mdi-eye":"mdi-eye-off","onClick:appendInner":s[2]||(s[2]=r=>e.password_showing=!e.password_showing)},null,8,["density","modelValue","type","rules","append-inner-icon"]),t(V,{class:"register-button mt-5",color:"secondary",variant:"flat",width:"100%",height:"56",onClick:s[3]||(s[3]=r=>e.register())},{default:o(()=>[t(d,{icon:"fluent:person-add-20-filled",class:"mr-2",height:"24"}),s[6]||(s[6]=v("アカウントを作成 "))]),_:1})]),_:1},512)]),_:1})])])])}const q=w(N,[["render",U],["__scopeId","data-v-c13a2b53"]]);export{q as default};
