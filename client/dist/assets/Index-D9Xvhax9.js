import{d as _,m as d,_ as p,r as l,o as g,c as f,b as t,e as s,h as a,V as e,n as v,t as c,p as h,q as m}from"./index-DSk2iuP-.js";import{H as C,N as x,u as b}from"./Navigation-BXOs-bnd.js";import{a as B}from"./VCard-B6D3O1BC.js";import"./ssrBoot-DJFlLNSd.js";import"./VAvatar-D8_Ah4cA.js";const w=_({name:"Settings-Index",components:{HeaderBar:C,Navigation:x},computed:{...d(b)},async created(){await this.versionStore.fetchServerVersion()}}),n=o=>(h("data-v-e23c9c02"),o=o(),m(),o),S={class:"route-container"},A={class:"settings-navigation"},y=n(()=>s("h1",{class:"mt-2",style:{"font-size":"24px"}},"設定",-1)),I=n(()=>s("span",{class:"ml-4"},"全般",-1)),V=n(()=>s("span",{class:"ml-4"},"画質",-1)),H=n(()=>s("span",{class:"ml-4"},"字幕",-1)),k=n(()=>s("svg",{width:"26px",height:"26px",viewBox:"0 0 512 512"},[s("path",{fill:"currentColor",d:"M248.039 381.326L355.039 67.8258C367.539 28.3257 395.039 34.3258 406.539 34.3258C431.039 34.3258 453.376 61.3258 441.039 96.8258C362.639 322.426 343.539 375.326 340.539 384.826C338.486 391.326 342.039 391.326 345.539 391.326C377.039 391.326 386.539 418.326 386.539 435.326C386.539 458.826 371.539 477.326 350.039 477.326H214.539C179.039 477.326 85.8269 431.3 88.0387 335.826C91.0387 206.326 192.039 183.326 243.539 183.326H296.539L265.539 272.326H243.539C185.539 272.326 174.113 314.826 176.039 334.326C180.039 374.826 215.039 389.814 237.039 390.326C244.539 390.5 246.039 386.826 248.039 381.326Z"})],-1)),D=n(()=>s("span",{class:"ml-4"},"データ放送",-1)),E=n(()=>s("span",{class:"ml-4"},"キャプチャ",-1)),F=n(()=>s("span",{class:"ml-4"},"アカウント",-1)),N=n(()=>s("span",{class:"ml-4"},"ニコニコ実況",-1)),$=n(()=>s("span",{class:"ml-4"},"Twitter",-1)),j=n(()=>s("span",{class:"ml-4"},"サーバー設定",-1)),q={class:"ml-4"};function z(o,L,T,K,M,U){const u=l("HeaderBar"),r=l("Navigation"),i=l("Icon");return g(),f("div",S,[t(u),s("main",null,[t(r),t(B,{class:"settings-container d-flex px-5 py-5 mx-auto",elevation:"0",width:"100%","max-width":"1000"},{default:a(()=>[s("nav",A,[y,t(e,{variant:"flat",class:"settings-navigation__button mt-6",to:"/settings/general"},{default:a(()=>[t(i,{icon:"fa-solid:sliders-h",width:"26px",style:{padding:"0 3px"}}),I]),_:1}),t(e,{variant:"flat",class:"settings-navigation__button",to:"/settings/quality"},{default:a(()=>[t(i,{icon:"fluent:video-clip-multiple-16-filled",width:"26px"}),V]),_:1}),t(e,{variant:"flat",class:"settings-navigation__button",to:"/settings/caption"},{default:a(()=>[t(i,{icon:"fluent:subtitles-16-filled",width:"26px"}),H]),_:1}),t(e,{variant:"flat",class:"settings-navigation__button",to:"/settings/data-broadcasting"},{default:a(()=>[k,D]),_:1}),t(e,{variant:"flat",class:"settings-navigation__button",to:"/settings/capture"},{default:a(()=>[t(i,{icon:"fluent:image-multiple-16-filled",width:"26px"}),E]),_:1}),t(e,{variant:"flat",class:"settings-navigation__button",to:"/settings/account"},{default:a(()=>[t(i,{icon:"fluent:person-20-filled",width:"26px"}),F]),_:1}),t(e,{variant:"flat",class:"settings-navigation__button",to:"/settings/jikkyo"},{default:a(()=>[t(i,{icon:"bi:chat-left-text-fill",width:"26px",style:{padding:"0 2px"}}),N]),_:1}),t(e,{variant:"flat",class:"settings-navigation__button",to:"/settings/twitter"},{default:a(()=>[t(i,{icon:"fa-brands:twitter",width:"26px",style:{padding:"0 1px"}}),$]),_:1}),t(e,{variant:"flat",class:"settings-navigation__button",to:"/settings/server"},{default:a(()=>[t(i,{icon:"fluent:server-surface-16-filled",width:"26px"}),j]),_:1}),t(e,{variant:"flat",class:v(["settings-navigation__button settings-navigation__button--version",{"settings-navigation__button--version-highlight":o.versionStore.is_update_available}]),href:"https://github.com/tsukumijima/KonomiTV",target:"_blank"},{default:a(()=>[t(i,{icon:"fluent:info-16-regular",width:"26px"}),s("span",q," version "+c(o.versionStore.client_version)+c(o.versionStore.is_update_available?" (Update Available)":""),1)]),_:1},8,["class"])])]),_:1})])])}const Q=p(w,[["render",z],["__scopeId","data-v-e23c9c02"]]);export{Q as default};
