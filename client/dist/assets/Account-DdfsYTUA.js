import{d as S,m as V,M as F,cB as k,cC as _,cD as h,u as m,U as $,am as T,_ as U,k as I,h as i,b as s,w as K,a as e,c as d,r as c,e as g,l as n,V as a,t as p,p as f,n as N,o as r,R as j}from"./index-B0k6gdhc.js";import{S as z}from"./Base-D8cEZLpl.js";import{V as M}from"./VSwitch-zNgBRYUt.js";import{V as E,a as D,b as v,c as R}from"./VCard-CV9rB4qq.js";import{V as y}from"./VDialog-kNjrjNUH.js";import{c as b,b as H}from"./VTextField-BmhlGUcC.js";import{V as C}from"./VForm-BnJqsF9g.js";import{V as Z}from"./VFileInput-BkVg60RW.js";import{V as q}from"./ssrBoot-BOSN3Ea4.js";import"./Navigation-CdqQ4h9R.js";import"./VChip-BieH_rdX.js";import"./VAvatar-BpbVf3LE.js";const G=S({name:"Settings-Account",components:{SettingsBase:z},data(){return{is_form_dense:$.isSmartphoneHorizontal(),is_loading:!0,settings_username:null,settings_username_validation:t=>t===""||t===null?"ユーザー名を入力してください。":/^.{2,}$/.test(t)===!1?"ユーザー名は2文字以上で入力してください。":!0,settings_password:null,settings_password_showing:!1,settings_password_validation:t=>t===""||t===null?"パスワードを入力してください。":/^[a-zA-Z0-9!-/:-@¥[-`{-~]{4,}$/.test(t)===!1?"パスワードは4文字以上の半角英数記号を入力してください。":!0,settings_icon_file:null,account_delete_confirm_dialog:!1,sync_settings:m().settings.sync_settings,sync_settings_dialog:!1}},computed:{...V(m,T)},watch:{async sync_settings(){if(this.sync_settings===!0&&this.sync_settings_dialog===!1){const t=k(this.settingsStore.settings),u=_(t),B=await h.fetchClientSettings();if(B===null){F.error("サーバーから設定データを取得できませんでした。");return}const A=_(B);console.log("[Settings-Account] sync_settings_hash:",u),console.log("[Settings-Account] server_sync_settings_hash:",A),u!==A?(this.sync_settings_dialog=!0,this.sync_settings=!1):this.settingsStore.settings.sync_settings=!0}else this.sync_settings===!1&&this.sync_settings_dialog===!1&&(this.settingsStore.settings.sync_settings=!1)}},async created(){await this.userStore.fetchUser(),this.is_loading=!1},methods:{async overrideServerSettingsFromClient(){await this.settingsStore.syncClientSettingsToServer(!0),this.settingsStore.settings.sync_settings=!0,this.sync_settings=!0,this.sync_settings_dialog=!1},async overrideClientSettingsFromServer(){await this.settingsStore.syncClientSettingsFromServer(!0),this.settingsStore.settings.sync_settings=!0,this.sync_settings=!0,this.sync_settings_dialog=!1},async updateAccountInfo(t){if(t==="username"){if((await this.$refs.settings_username.validate()).valid===!1)return}else if((await this.$refs.settings_password.validate()).valid===!1)return;if(t==="username"){if(this.settings_username===null)return;await this.userStore.updateUser({username:this.settings_username})}else{if(this.settings_password===null)return;await this.userStore.updateUser({password:this.settings_password})}},async updateAccountIcon(){if(this.settings_icon_file===null){F.error("アップロードする画像を選択してください！");return}await this.userStore.updateUserIcon(this.settings_icon_file)},async deleteAccount(){this.account_delete_confirm_dialog=!1,await this.userStore.deleteUser()}}}),J="/assets/images/account-icon-default.png",L={class:"settings__heading"},O={key:0,class:"account"},P={key:1,class:"account"},Q={class:"account-wrapper"},W=["src"],X={class:"account__info"},Y={class:"account__info-name"},x={class:"account__info-name-text"},uu={key:0,class:"account__info-admin"},su={class:"account__info-id"},tu={key:2,class:"account-register"},eu={class:"account-register__feature"},nu={class:"account-feature"},iu={class:"account-feature"},ou={class:"account-feature"},lu={class:"account-feature"},au={key:3},ru={class:"settings__item settings__item--switch"},du={class:"d-flex flex-column px-4 pb-6 settings__conflict-dialog"};function gu(t,u,B,A,Bu,Au){const l=c("Icon"),w=c("SettingsBase");return r(),I(w,null,{default:i(()=>[s("h2",L,[K((r(),d("a",{class:"settings__back-button",onClick:u[0]||(u[0]=o=>t.$router.back())},[e(l,{icon:"fluent:chevron-left-12-filled",width:"27px"})])),[[j]]),e(l,{icon:"fluent:person-20-filled",width:"25px"}),u[21]||(u[21]=s("span",{class:"ml-2"},"アカウント",-1))]),s("div",{class:N(["settings__content",{"settings__content--loading":t.is_loading}])},[t.userStore.user===null?(r(),d("div",O,[u[23]||(u[23]=s("div",{class:"account-wrapper"},[s("img",{class:"account__icon",src:J}),s("div",{class:"account__info"},[s("div",{class:"account__info-name"},[s("span",{class:"account__info-name-text"},"ログインしていません")]),s("span",{class:"account__info-id"},"Not logged in")])],-1)),e(a,{class:"account__login ml-auto",color:"secondary",width:"140",height:"56",variant:"flat",to:"/login/"},{default:i(()=>[e(l,{icon:"fa:sign-in",class:"mr-2"}),u[22]||(u[22]=n("ログイン "))]),_:1})])):g("",!0),t.userStore.user!==null?(r(),d("div",P,[s("div",Q,[s("img",{class:"account__icon",src:t.userStore.user_icon_url??""},null,8,W),s("div",X,[s("div",Y,[s("span",x,p(t.userStore.user.name),1),t.userStore.user.is_admin?(r(),d("span",uu,"管理者")):g("",!0)]),s("span",su,"User ID: "+p(t.userStore.user.id),1)])]),e(a,{class:"account__login ml-auto",color:"secondary",width:"140",height:"56",variant:"flat",onClick:u[1]||(u[1]=o=>t.userStore.logout())},{default:i(()=>[e(l,{icon:"fa:sign-out",class:"mr-2"}),u[24]||(u[24]=n("ログアウト "))]),_:1})])):g("",!0),t.userStore.is_logged_in===!1?(r(),d("div",tu,[u[30]||(u[30]=s("div",{class:"account-register__heading"},[n(" KonomiTV アカウントにログインすると、"),s("br"),n("より便利な機能が使えます！ ")],-1)),s("div",eu,[s("div",nu,[e(l,{class:"account-feature__icon",icon:"bi:chat-left-text-fill"}),u[25]||(u[25]=s("div",{class:"account-feature__info"},[s("span",{class:"account-feature__info-heading"},"ニコニコ実況にコメントする"),s("span",{class:"account-feature__info-text"},"テレビを見ながらニコニコ実況にコメントできます。別途、ニコニコアカウントとの連携が必要です。")],-1))]),s("div",iu,[e(l,{class:"account-feature__icon",icon:"fa-brands:twitter"}),u[26]||(u[26]=s("div",{class:"account-feature__info"},[s("span",{class:"account-feature__info-heading"},"Twitter 連携機能"),s("span",{class:"account-feature__info-text"},"テレビを見ながら Twitter にツイートしたり、検索したツイートをリアルタイムで表示できます。別途、Twitter アカウントとの連携が必要です。")],-1))]),s("div",ou,[e(l,{class:"account-feature__icon",icon:"fluent:arrow-sync-20-filled"}),u[27]||(u[27]=s("div",{class:"account-feature__info"},[s("span",{class:"account-feature__info-heading"},"設定をデバイス間で同期"),s("span",{class:"account-feature__info-text"},"ピン留めしたチャンネルなど、ブラウザに保存されている各種設定をブラウザやデバイスをまたいで同期できます。")],-1))]),s("div",lu,[e(l,{class:"account-feature__icon",icon:"fa-solid:sliders-h"}),u[28]||(u[28]=s("div",{class:"account-feature__info"},[s("span",{class:"account-feature__info-heading"},"サーバー設定をブラウザから変更"),s("span",{class:"account-feature__info-text"},"管理者権限があれば、サーバー設定をブラウザから変更できます。一番最初に作成されたアカウントには、自動で管理者権限が付与されます。")],-1))])]),u[31]||(u[31]=s("div",{class:"account-register__description"},[n(" KonomiTV アカウントの作成に必要なものは"),s("br",{class:"smartphone-vertical-only"}),n("ユーザー名とパスワードだけです。"),s("br"),n(" アカウントはローカルに導入した"),s("br",{class:"smartphone-vertical-only"}),n(" KonomiTV サーバーにのみ保存されます。"),s("br"),n(" 外部のサービスには保存されませんので、ご安心ください。"),s("br")],-1)),e(a,{class:"account-register__button",color:"secondary",width:"100%","max-width":"250",height:"50",variant:"flat",to:"/register/"},{default:i(()=>[e(l,{icon:"fluent:person-add-20-filled",class:"mr-2",height:"24"}),u[29]||(u[29]=n("アカウントを作成 "))]),_:1})])):g("",!0),t.userStore.is_logged_in===!0?(r(),d("div",au,[s("div",ru,[u[32]||(u[32]=s("label",{class:"settings__item-heading",for:"sync_settings"},"設定をデバイス間で同期する",-1)),u[33]||(u[33]=s("label",{class:"settings__item-label",for:"sync_settings"},[n(" KonomiTV では、設定を同じアカウントでログインしているデバイス間で同期できます！"),s("br"),n(" 同期をオンにすると、同期をオンにしているすべてのデバイスで共通の設定が使えます。ピン留めチャンネルやハッシュタグリストなども同期されます。"),s("br"),n(" なお、デバイス固有の設定（画質設定など）は、同期後も各デバイスで個別に反映されます。"),s("br")],-1)),e(M,{class:"settings__item-switch",color:"primary",id:"sync_settings","hide-details":"",modelValue:t.sync_settings,"onUpdate:modelValue":u[2]||(u[2]=o=>t.sync_settings=o)},null,8,["modelValue"])]),e(y,{"max-width":"530",modelValue:t.sync_settings_dialog,"onUpdate:modelValue":u[6]||(u[6]=o=>t.sync_settings_dialog=o)},{default:i(()=>[e(E,null,{default:i(()=>[e(D,{class:"d-flex justify-center font-weight-bold pt-6"},{default:i(()=>u[34]||(u[34]=[n("設定データの競合")])),_:1}),e(v,{class:"pt-2 pb-5"},{default:i(()=>u[35]||(u[35]=[n(" このデバイスの設定と、サーバーに保存されている設定が競合しています。"),s("br",null,null,-1),n(" 一度上書きすると、元に戻すことはできません。慎重に選択してください。"),s("br",null,null,-1)])),_:1}),s("div",du,[e(a,{class:"settings__save-button text-error-lighten-1",color:"background-lighten-1",variant:"flat",onClick:u[3]||(u[3]=o=>t.overrideServerSettingsFromClient())},{default:i(()=>[e(l,{icon:"fluent:document-arrow-up-16-filled",class:"mr-2",height:"22px"}),u[36]||(u[36]=n(" サーバーに保存されている設定を、")),u[37]||(u[37]=s("br",{class:"smartphone-vertical-only"},null,-1)),u[38]||(u[38]=n("このデバイスの設定で上書きする "))]),_:1}),e(a,{class:"settings__save-button text-error-lighten-1 mt-3",color:"background-lighten-1",variant:"flat",onClick:u[4]||(u[4]=o=>t.overrideClientSettingsFromServer())},{default:i(()=>[e(l,{icon:"fluent:document-arrow-down-16-filled",class:"mr-2",height:"22px"}),u[39]||(u[39]=n(" このデバイスの設定を、")),u[40]||(u[40]=s("br",{class:"smartphone-vertical-only"},null,-1)),u[41]||(u[41]=n("サーバーに保存されている設定で上書きする "))]),_:1}),e(a,{class:"settings__save-button mt-3",variant:"flat",color:"background-lighten-1",onClick:u[5]||(u[5]=o=>t.sync_settings_dialog=!1)},{default:i(()=>[e(l,{icon:"fluent:dismiss-16-filled",class:"mr-2",height:"22px"}),u[42]||(u[42]=n(" キャンセル "))]),_:1})])]),_:1})]),_:1},8,["modelValue"]),e(C,{class:"settings__item",ref:"settings_username",onSubmit:u[8]||(u[8]=f(()=>{},["prevent"]))},{default:i(()=>[u[43]||(u[43]=s("div",{class:"settings__item-heading"},"ユーザー名",-1)),u[44]||(u[44]=s("div",{class:"settings__item-label"},[n(" KonomiTV アカウントのユーザー名を設定します。アルファベットだけでなく日本語や記号も使えます。"),s("br"),n(" 同じ KonomiTV サーバー上の他のアカウントと同じユーザー名には変更できません。"),s("br")],-1)),e(b,{class:"settings__item-form",color:"primary",variant:"outlined",placeholder:"ユーザー名",density:t.is_form_dense?"compact":"default",modelValue:t.settings_username,"onUpdate:modelValue":u[7]||(u[7]=o=>t.settings_username=o),rules:[t.settings_username_validation]},null,8,["density","modelValue","rules"])]),_:1},512),e(a,{class:"settings__save-button mt-2",variant:"flat",onClick:u[9]||(u[9]=o=>t.updateAccountInfo("username"))},{default:i(()=>[e(l,{icon:"fluent:save-16-filled",class:"mr-2",height:"24px"}),u[45]||(u[45]=n("ユーザー名を更新 "))]),_:1}),e(C,{class:"settings__item",onSubmit:u[11]||(u[11]=f(()=>{},["prevent"]))},{default:i(()=>[u[46]||(u[46]=s("div",{class:"settings__item-heading"},"アイコン画像",-1)),u[47]||(u[47]=s("div",{class:"settings__item-label"},[n(" KonomiTV アカウントのアイコン画像を設定します。"),s("br"),n(" アップロードされた画像は自動で 400×400 の正方形にリサイズされます。"),s("br")],-1)),e(Z,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",label:"アイコン画像を選択",density:t.is_form_dense?"compact":"default",accept:"image/jpeg, image/png","prepend-icon":"","prepend-inner-icon":"mdi-paperclip",modelValue:t.settings_icon_file,"onUpdate:modelValue":u[10]||(u[10]=o=>t.settings_icon_file=o)},null,8,["density","modelValue"])]),_:1}),e(a,{class:"settings__save-button mt-5",variant:"flat",onClick:u[12]||(u[12]=o=>t.updateAccountIcon())},{default:i(()=>[e(l,{icon:"fluent:save-16-filled",class:"mr-2",height:"24px"}),u[48]||(u[48]=n("アイコン画像を更新 "))]),_:1}),e(C,{class:"settings__item",ref:"settings_password",onSubmit:u[15]||(u[15]=f(()=>{},["prevent"]))},{default:i(()=>[u[49]||(u[49]=s("div",{class:"settings__item-heading"},"新しいパスワード",-1)),u[50]||(u[50]=s("div",{class:"settings__item-label"},[n(" KonomiTV アカウントの新しいパスワードを設定します。"),s("br")],-1)),e(b,{class:"settings__item-form",color:"primary",variant:"outlined",placeholder:"新しいパスワード",density:t.is_form_dense?"compact":"default",modelValue:t.settings_password,"onUpdate:modelValue":u[13]||(u[13]=o=>t.settings_password=o),type:t.settings_password_showing?"text":"password",rules:[t.settings_password_validation],"append-inner-icon":t.settings_password_showing?"mdi-eye":"mdi-eye-off","onClick:appendInner":u[14]||(u[14]=o=>t.settings_password_showing=!t.settings_password_showing)},null,8,["density","modelValue","type","rules","append-inner-icon"])]),_:1},512),e(a,{class:"settings__save-button mt-2",variant:"flat",onClick:u[16]||(u[16]=o=>t.updateAccountInfo("password"))},{default:i(()=>[e(l,{icon:"fluent:save-16-filled",class:"mr-2",height:"24px"}),u[51]||(u[51]=n("パスワードを更新 "))]),_:1}),e(H,{class:"mt-6"}),u[57]||(u[57]=s("div",{class:"settings__item mt-6"},[s("div",{class:"settings__item-heading text-error-lighten-1"},"アカウントを削除"),s("div",{class:"settings__item-label"},[n(" 現在ログインしている KonomiTV アカウントを削除します。"),s("br"),s("strong",{class:"text-error-lighten-1"},"アカウントに紐づくすべてのデータが削除されます。元に戻すことはできません。"),s("br")])],-1)),e(a,{class:"settings__save-button bg-error mt-5",variant:"flat",onClick:u[17]||(u[17]=o=>t.account_delete_confirm_dialog=!0)},{default:i(()=>[e(l,{icon:"fluent:delete-16-filled",class:"mr-2",height:"24px"}),u[52]||(u[52]=n("アカウントを削除 "))]),_:1}),e(y,{"max-width":"385",modelValue:t.account_delete_confirm_dialog,"onUpdate:modelValue":u[20]||(u[20]=o=>t.account_delete_confirm_dialog=o)},{default:i(()=>[e(E,null,{default:i(()=>[e(D,{class:"d-flex justify-center pt-6 font-weight-bold"},{default:i(()=>u[53]||(u[53]=[n("本当にアカウントを削除しますか？")])),_:1}),e(v,{class:"pt-2 pb-0"},{default:i(()=>u[54]||(u[54]=[n(" アカウントに紐づくすべてのユーザーデータが削除されます。元に戻すことはできません。"),s("br",null,null,-1),n(" 本当にアカウントを削除しますか？ ")])),_:1}),e(R,{class:"pt-4 px-6 pb-6"},{default:i(()=>[e(q),e(a,{color:"text",variant:"text",onClick:u[18]||(u[18]=o=>t.account_delete_confirm_dialog=!1)},{default:i(()=>u[55]||(u[55]=[n("キャンセル")])),_:1}),e(a,{color:"error",variant:"flat",onClick:u[19]||(u[19]=o=>t.deleteAccount())},{default:i(()=>u[56]||(u[56]=[n("削除")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])])):g("",!0)],2)]),_:1})}const wu=U(G,[["render",gu],["__scopeId","data-v-52bea2ef"]]);export{wu as default};
