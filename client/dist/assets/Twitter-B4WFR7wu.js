import{d as gu,U as J,m as hu,M as p,X as Eu,u as Au,z as pu,C as Du,c7 as vu,D as P,O as D,bx as Vu,bW as bu,S as ku,Q as v,a5 as yu,c9 as Su,ca as Tu,b as s,b7 as z,F as V,w as G,a as Pu,W as xu,T as M,cb as Iu,cc as Uu,cd as Ru,_ as $u,r as Z,o as C,j as Nu,h as l,e as t,c as A,k as o,i as uu,g as tu,t as W,V as x,l as eu,n as zu,K as Mu,R as Wu,p as Hu,q as Lu}from"./index-DSk2iuP-.js";import{T as su}from"./Twitter-CgrAMAch.js";import{S as Gu}from"./Base-hT6LaL4A.js";import{a as ju,V as Ou,b as Ku,c as qu}from"./VCard-B6D3O1BC.js";import{a as Qu,V as Xu,c as Yu,b as au}from"./VWindowItem-CbOSSoiE.js";import{V as iu}from"./VForm-BSoK7qPN.js";import{m as Ju,b as Zu,u as ut,c as ou,f as tt,d as et,e as st,g as at,a as nu}from"./VTextField-hUY0FbPz.js";import{I as it}from"./VAvatar-D8_Ah4cA.js";import{V as ot}from"./ssrBoot-DJFlLNSd.js";import{V as nt}from"./VDialog-CwG58zwj.js";import{V as H,b as lt}from"./VSwitch-MXTcKyiH.js";import{c as L}from"./VSelect-NgOD9OVp.js";import"./Navigation-BXOs-bnd.js";const rt=gu({name:"Settings-Twitter",components:{SettingsBase:Gu},data(){return{is_form_dense:J.isSmartphoneHorizontal(),twitter_active_tab:[{title:"ツイート検索タブ",value:"Search"},{title:"タイムラインタブ",value:"Timeline"},{title:"キャプチャタブ",value:"Capture"}],tweet_hashtag_position:[{title:"ツイート本文の前に追加する",value:"Prepend"},{title:"ツイート本文の後に追加する",value:"Append"},{title:"ツイート本文の前に追加してから改行する",value:"PrependWithLineBreak"},{title:"ツイート本文の後に改行してから追加する",value:"AppendWithLineBreak"}],tweet_capture_watermark_position:[{title:"透かしを描画しない",value:"None"},{title:"透かしをキャプチャの左上に描画する",value:"TopLeft"},{title:"透かしをキャプチャの右上に描画する",value:"TopRight"},{title:"透かしをキャプチャの左下に描画する",value:"BottomLeft"},{title:"透かしをキャプチャの右下に描画する",value:"BottomRight"}],is_loading:!0,is_twitter_password_auth_sending:!1,twitter_password_auth_dialog:!1,twitter_auth_tab:0,twitter_screen_name:"",twitter_cookie:"",twitter_password:"",twitter_password_showing:!1}},computed:{...hu(Au,Eu)},async created(){await this.userStore.fetchUser(),this.is_loading=!1},methods:{async loginTwitterAccountWithPasswordForm(){if(this.userStore.is_logged_in===!1){p.warning("連携をはじめるには、KonomiTV アカウントにログインしてください。"),await J.sleep(.01),this.twitter_password_auth_dialog=!1;return}this.twitter_password_auth_dialog=!0},async loginTwitterAccountWithPassword(){if((await this.$refs.twitter_form.validate()).valid===!1)return;let u;if(this.twitter_auth_tab===1)u={screen_name:this.twitter_screen_name,password:this.twitter_password};else{if(this.twitter_cookie===null||this.twitter_cookie.trim()===""){p.warning("Cookie を入力してください！");return}u={cookies_txt:this.twitter_cookie}}this.is_twitter_password_auth_sending=!0;const a=await su.auth(u);if(this.is_twitter_password_auth_sending=!1,a===!1)return;if(await this.userStore.fetchUser(!0),this.userStore.user===null){p.error("アカウント情報を取得できませんでした。");return}const w=[...this.userStore.user.twitter_accounts].sort((g,d)=>g.updated_at<d.updated_at?1:g.updated_at>d.updated_at?-1:0)[0];p.success(`Twitter @${w.screen_name} と連携しました。`),this.$refs.twitter_form.reset(),this.twitter_password_auth_dialog=!1},async logoutTwitterAccount(u){await su.logoutAccount(u)!==!1&&(await this.userStore.fetchUser(!0),p.success(`Twitter @${u} との連携を解除しました。`))}}}),dt=pu({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:u=>!isNaN(parseFloat(u))},maxRows:{type:[Number,String],validator:u=>!isNaN(parseFloat(u))},suffix:String,modelModifiers:Object,...Ju(),...Zu()},"VTextarea"),ct=Du()({name:"VTextarea",directives:{Intersect:it},inheritAttrs:!1,props:dt(),emits:{"click:control":u=>!0,"mousedown:control":u=>!0,"update:focused":u=>!0,"update:modelValue":u=>!0},setup(u,a){let{attrs:w,emit:g,slots:d}=a;const _=vu(u,"modelValue"),{isFocused:c,focus:I,blur:e}=ut(u),j=P(()=>typeof u.counterValue=="function"?u.counterValue(_.value):(_.value||"").toString().length),lu=P(()=>{if(w.maxlength)return w.maxlength;if(!(!u.counter||typeof u.counter!="number"&&typeof u.counter!="string"))return u.counter});function ru(i,m){var r,F;!u.autofocus||!i||(F=(r=m[0].target)==null?void 0:r.focus)==null||F.call(r)}const O=D(),b=D(),K=Vu(""),k=D(),du=P(()=>u.persistentPlaceholder||c.value||u.active);function U(){var i;k.value!==document.activeElement&&((i=k.value)==null||i.focus()),c.value||I()}function cu(i){U(),g("click:control",i)}function _u(i){g("mousedown:control",i)}function mu(i){i.stopPropagation(),U(),M(()=>{_.value="",Iu(u["onClick:clear"],i)})}function Fu(i){var r;const m=i.target;if(_.value=m.value,(r=u.modelModifiers)!=null&&r.trim){const F=[m.selectionStart,m.selectionEnd];M(()=>{m.selectionStart=F[0],m.selectionEnd=F[1]})}}const h=D(),y=D(+u.rows),R=P(()=>["plain","underlined"].includes(u.variant));bu(()=>{u.autoGrow||(y.value=+u.rows)});function E(){u.autoGrow&&M(()=>{if(!h.value||!b.value)return;const i=getComputedStyle(h.value),m=getComputedStyle(b.value.$el),r=parseFloat(i.getPropertyValue("--v-field-padding-top"))+parseFloat(i.getPropertyValue("--v-input-padding-top"))+parseFloat(i.getPropertyValue("--v-field-padding-bottom")),F=h.value.scrollHeight,S=parseFloat(i.lineHeight),$=Math.max(parseFloat(u.rows)*S+r,parseFloat(m.getPropertyValue("--v-input-control-height"))),N=parseFloat(u.maxRows)*S+r||1/0,B=Ru(F??0,$,N);y.value=Math.floor((B-r)/S),K.value=Uu(B)})}ku(E),v(_,E),v(()=>u.rows,E),v(()=>u.maxRows,E),v(()=>u.density,E);let f;return v(h,i=>{i?(f=new ResizeObserver(E),f.observe(h.value)):f==null||f.disconnect()}),yu(()=>{f==null||f.disconnect()}),Su(()=>{const i=!!(d.counter||u.counter||u.counterValue),m=!!(i||d.details),[r,F]=Tu(w),{modelValue:S,...$}=ou.filterProps(u),N=tt(u);return s(ou,z({ref:O,modelValue:_.value,"onUpdate:modelValue":B=>_.value=B,class:["v-textarea v-text-field",{"v-textarea--prefixed":u.prefix,"v-textarea--suffixed":u.suffix,"v-text-field--prefixed":u.prefix,"v-text-field--suffixed":u.suffix,"v-textarea--auto-grow":u.autoGrow,"v-textarea--no-resize":u.noResize||u.autoGrow,"v-input--plain-underlined":R.value},u.class],style:u.style},r,$,{centerAffix:y.value===1&&!R.value,focused:c.value}),{...d,default:B=>{let{id:T,isDisabled:q,isDirty:Q,isReadonly:fu,isValid:Bu}=B;return s(et,z({ref:b,style:{"--v-textarea-control-height":K.value},onClick:cu,onMousedown:_u,"onClick:clear":mu,"onClick:prependInner":u["onClick:prependInner"],"onClick:appendInner":u["onClick:appendInner"]},N,{id:T.value,active:du.value||Q.value,centerAffix:y.value===1&&!R.value,dirty:Q.value||u.dirty,disabled:q.value,focused:c.value,error:Bu.value===!1}),{...d,default:Cu=>{let{props:{class:X,...Y}}=Cu;return s(V,null,[u.prefix&&s("span",{class:"v-text-field__prefix"},[u.prefix]),G(s("textarea",z({ref:k,class:X,value:_.value,onInput:Fu,autofocus:u.autofocus,readonly:fu.value,disabled:q.value,placeholder:u.placeholder,rows:u.rows,name:u.name,onFocus:U,onBlur:e},Y,F),null),[[Pu("intersect"),{handler:ru},null,{once:!0}]]),u.autoGrow&&G(s("textarea",{class:[X,"v-textarea__sizer"],id:`${Y.id}-sizer`,"onUpdate:modelValue":wu=>_.value=wu,ref:h,readonly:!0,"aria-hidden":"true"},null),[[xu,_.value]]),u.suffix&&s("span",{class:"v-text-field__suffix"},[u.suffix])])}})},details:m?B=>{var T;return s(V,null,[(T=d.details)==null?void 0:T.call(d,B),i&&s(V,null,[s("span",null,null),s(st,{active:u.persistentCounter||c.value,value:j.value,max:lu.value},d.counter)])])}:void 0})}),at({},O,b,k)}}),n=u=>(Hu("data-v-365be10e"),u=u(),Lu(),u),_t={class:"settings__heading"},mt=n(()=>t("span",{class:"ml-3"},"Twitter",-1)),Ft={class:"twitter-accounts"},ft={key:0,class:"twitter-accounts__heading"},Bt={key:1,class:"twitter-accounts__guide"},Ct=n(()=>t("div",{class:"ml-4"},[t("div",{class:"font-weight-bold text-h6"},"Twitter アカウントと連携していません"),t("div",{class:"text-text-darken-1 text-subtitle-2 mt-1"}," Twitter アカウントと連携すると、テレビを見ながら Twitter にツイートしたり、ほかの実況ツイートをリアルタイムで表示できるようになります。 ")],-1)),wt=["src"],gt={class:"twitter-account__info"},ht={class:"twitter-account__info-name"},Et={class:"twitter-account__info-name-text"},At={class:"twitter-account__info-screen-name"},pt=n(()=>t("p",null,"2023/07 以降、Twitter のサードパーティー API の事実上の廃止により、従来のアプリ連携では Twitter にアクセスできなくなりました。",-1)),Dt=n(()=>t("p",{class:"mt-1"},[o("そこで KonomiTV では、代わりに "),t("a",{class:"link",href:"https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc",target:"_blank"},"Chrome 拡張機能"),o(" を使い "),t("a",{class:"link",href:"https://x.com/TVRemotePlus/status/1821283471727493413",target:"_blank"},"ブラウザからエクスポートした Cookie でログイン"),o(" または "),t("a",{class:"link",href:"https://github.com/tsukumijima/tweepy-authlib",target:"_blank"},"パスワードログイン"),o(" での Twitter 連携に対応しています。")],-1)),vt=n(()=>t("p",{class:"mt-2"},"ここで入力されたパスワードは一切保存されず、入力/取得した Cookie はローカルの KonomiTV サーバーにのみ保存されます。Cookie が Twitter API 以外の外部サービスに送信されることはありません。",-1)),Vt=n(()=>t("p",{class:"mt-1"},"万全は期していますが、非公式な方法のため、使い方次第ではアカウントにペナルティが適用される可能性もあります。自己の責任のもとでご利用ください。",-1)),bt=n(()=>t("blockquote",{class:"mt-3"},[t("p",null,"基本的には Cookie でのログインを推奨します。その方がスパム判定されづらいためです。"),t("p",{class:"mt-1"},"また、2要素認証 (2FA)が設定されているアカウントではパスワードログインを利用できません。")],-1)),kt={class:"settings__item settings__item--switch"},yt=n(()=>t("label",{class:"settings__item-heading",for:"fold_panel_after_sending_tweet"},"ツイート送信後にパネルを折りたたむ",-1)),St=n(()=>t("label",{class:"settings__item-label",for:"fold_panel_after_sending_tweet"},[o(" この設定をオンにすると、ツイートを送信した後に、パネルが自動で折りたたまれます。"),t("br"),o(" ツイートするとき以外はできるだけ映像を大きくして見たい方におすすめです。"),t("br")],-1)),Tt={class:"settings__item settings__item--switch"},Pt=n(()=>t("label",{class:"settings__item-heading",for:"reset_hashtag_when_program_switches"},"番組が切り替わったときにハッシュタグフォームをリセットする",-1)),xt=n(()=>t("label",{class:"settings__item-label",for:"reset_hashtag_when_program_switches"},[o(" チャンネルを切り替えたときや、視聴中の番組が終了し次の番組の放送が開始されたときに、ハッシュタグフォームをリセットするかを設定します。"),t("br"),o(" この設定をオンにしておけば、「誤って前番組のハッシュタグをつけたまま次番組の実況ツイートをしてしまう」といったミスを回避できます。"),t("br")],-1)),It={class:"settings__item settings__item--switch"},Ut=n(()=>t("label",{class:"settings__item-heading",for:"auto_add_watching_channel_hashtag"},"視聴中のチャンネルに対応する局タグを自動で追加する",-1)),Rt=n(()=>t("label",{class:"settings__item-label",for:"auto_add_watching_channel_hashtag"},[o(" この設定をオンにすると、視聴中のチャンネルに対応する局タグ (#nhk, #tokyomx など) がハッシュタグフォームに自動で追加されます。"),t("br"),o(" なお、ビデオをみるときは視聴中のチャンネルに対応する局タグは追加されません。"),t("br")],-1)),$t={class:"settings__item"},Nt=n(()=>t("div",{class:"settings__item-heading"},"デフォルトで表示される Twitter タブ内のタブ",-1)),zt=n(()=>t("div",{class:"settings__item-label"},[o(" 視聴画面を開いたときに、パネルの Twitter タブの中で最初に表示されるタブを設定します。"),t("br")],-1)),Mt={class:"settings__item"},Wt=n(()=>t("div",{class:"settings__item-heading"},"ツイートにつけるハッシュタグの位置",-1)),Ht=n(()=>t("div",{class:"settings__item-label"},[o(" ツイート本文から見て、ハッシュタグをどの位置につけてツイートするかを設定します。"),t("br")],-1)),Lt={class:"settings__item"},Gt=n(()=>t("div",{class:"settings__item-heading"},"ツイートするキャプチャに番組タイトルの透かしを描画する",-1)),jt=n(()=>t("div",{class:"settings__item-label"},[o(" ツイートするキャプチャに、透かしとして視聴中の番組タイトルを描画するかを設定します。"),t("br"),o(" 透かしの描画位置は 左上・右上・左下・右下 から選択できます。"),t("br")],-1));function Ot(u,a,w,g,d,_){const c=Z("Icon"),I=Z("SettingsBase");return C(),Nu(I,null,{default:l(()=>[t("h2",_t,[G((C(),A("a",{class:"settings__back-button",onClick:a[0]||(a[0]=e=>u.$router.back())},[s(c,{icon:"fluent:arrow-left-12-filled",width:"25px"})])),[[Wu]]),s(c,{icon:"fa-brands:twitter",width:"22px"}),mt]),t("div",{class:zu(["settings__content",{"settings__content--loading":u.is_loading}])},[t("div",Ft,[u.userStore.user!==null&&u.userStore.user.twitter_accounts.length>0?(C(),A("div",ft,[s(c,{icon:"fluent:person-board-20-filled",class:"mr-2",height:"30"}),o("連携中のアカウント ")])):uu("",!0),u.userStore.user===null||u.userStore.user.twitter_accounts.length===0?(C(),A("div",Bt,[s(c,{class:"flex-shrink-0",icon:"fa-brands:twitter",width:"45px"}),Ct])):uu("",!0),(C(!0),A(V,null,tu(u.userStore.user!==null?u.userStore.user.twitter_accounts:[],e=>(C(),A("div",{class:"twitter-account",key:e.id},[t("img",{class:"twitter-account__icon",src:e.icon_url},null,8,wt),t("div",gt,[t("div",ht,[t("span",Et,W(e.name),1)]),t("span",At," @"+W(e.screen_name),1)]),s(x,{class:"twitter-account__logout ml-auto",width:"124",height:"52",variant:"flat",onClick:j=>u.logoutTwitterAccount(e.screen_name)},{default:l(()=>[s(c,{icon:"fluent:plug-disconnected-20-filled",class:"mr-2",height:"24"}),o("連携解除 ")]),_:2},1032,["onClick"])]))),128)),s(x,{class:"twitter-account__login",color:"secondary","max-width":"250",height:"50",variant:"flat",onClick:a[1]||(a[1]=e=>u.loginTwitterAccountWithPasswordForm())},{default:l(()=>[s(c,{icon:"fluent:plug-connected-20-filled",class:"mr-2",height:"24"}),o("連携するアカウントを追加 ")]),_:1}),s(nt,{"max-width":"700",modelValue:u.twitter_password_auth_dialog,"onUpdate:modelValue":a[12]||(a[12]=e=>u.twitter_password_auth_dialog=e)},{default:l(()=>[s(ju,null,{default:l(()=>[s(Ou,{class:"d-flex justify-center pt-6 font-weight-bold"},{default:l(()=>[o("Twitter にログイン")]),_:1}),s(Ku,{class:"pt-2 pb-0"},{default:l(()=>[pt,Dt,vt,Vt,bt,s(Qu,{class:"settings__tab mt-1",color:"primary","bg-color":"transparent","align-tabs":"center",modelValue:u.twitter_auth_tab,"onUpdate:modelValue":a[2]||(a[2]=e=>u.twitter_auth_tab=e)},{default:l(()=>[(C(),A(V,null,tu(["Cookie でログイン","パスワードでログイン"],e=>s(Xu,{style:{"text-transform":"none !important"},key:e},{default:l(()=>[o(W(e),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),s(Yu,{modelValue:u.twitter_auth_tab,"onUpdate:modelValue":a[9]||(a[9]=e=>u.twitter_auth_tab=e)},{default:l(()=>[s(au,{class:"settings__content mt-0"},{default:l(()=>[s(iu,{class:"settings__item",ref:"twitter_form",onSubmit:a[4]||(a[4]=eu(()=>{},["prevent"]))},{default:l(()=>[s(ct,{class:"settings__item-form mt-4",color:"primary",variant:"outlined",label:"Cookie (Netscape cookies.txt 形式)",placeholder:"まず PC ブラウザ版 Twitter で連携したいアカウントに切り替えます。その後 PC ブラウザ版 Twitter の表示中に「Get cookies.txt LOCALLY」拡張機能を起動し、[Copy] ボタンを押してクリップボードにコピーした Cookie をここに貼り付けてください。",modelValue:u.twitter_cookie,"onUpdate:modelValue":a[3]||(a[3]=e=>u.twitter_cookie=e),density:u.is_form_dense?"compact":"default",rules:[e=>!e&&u.twitter_auth_tab===0?"Cookie を入力してください。":!0]},null,8,["modelValue","density","rules"])]),_:1},512)]),_:1}),s(au,{class:"settings__content mt-0"},{default:l(()=>[s(iu,{class:"settings__item",ref:"twitter_form",onSubmit:a[8]||(a[8]=eu(()=>{},["prevent"]))},{default:l(()=>[s(nu,{class:"settings__item-form mt-4",color:"primary",variant:"outlined",label:"ユーザー名 (@ から始まる ID)",placeholder:"screen_name",ref:"twitter_screen_name",modelValue:u.twitter_screen_name,"onUpdate:modelValue":a[5]||(a[5]=e=>u.twitter_screen_name=e),density:u.is_form_dense?"compact":"default",rules:[e=>!e&&u.twitter_auth_tab===1?"ユーザー名を入力してください。":!0]},null,8,["modelValue","density","rules"]),s(nu,{class:"settings__item-form mt-2",color:"primary",variant:"outlined",label:"パスワード",modelValue:u.twitter_password,"onUpdate:modelValue":a[6]||(a[6]=e=>u.twitter_password=e),density:u.is_form_dense?"compact":"default",type:u.twitter_password_showing?"text":"password",rules:[e=>!e&&u.twitter_auth_tab===1?"パスワードを入力してください。":!0],"append-inner-icon":u.twitter_password_showing?"mdi-eye":"mdi-eye-off","onClick:appendInner":a[7]||(a[7]=e=>u.twitter_password_showing=!u.twitter_password_showing)},null,8,["modelValue","density","type","rules","append-inner-icon"])]),_:1},512)]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(qu,{class:"pt-0 px-6 pb-6"},{default:l(()=>[s(ot),s(x,{color:"text",variant:"text",height:"40",onClick:a[10]||(a[10]=e=>u.twitter_password_auth_dialog=!1)},{default:l(()=>[o("キャンセル")]),_:1}),s(x,{color:"secondary",variant:"flat",height:"40",class:"px-4",onClick:a[11]||(a[11]=e=>u.loginTwitterAccountWithPassword())},{default:l(()=>[o("ログイン")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),t("div",kt,[yt,St,s(H,{class:"settings__item-switch",color:"primary",id:"fold_panel_after_sending_tweet","hide-details":"",modelValue:u.settingsStore.settings.fold_panel_after_sending_tweet,"onUpdate:modelValue":a[13]||(a[13]=e=>u.settingsStore.settings.fold_panel_after_sending_tweet=e)},null,8,["modelValue"])]),t("div",Tt,[Pt,xt,s(H,{class:"settings__item-switch",color:"primary",id:"reset_hashtag_when_program_switches","hide-details":"",modelValue:u.settingsStore.settings.reset_hashtag_when_program_switches,"onUpdate:modelValue":a[14]||(a[14]=e=>u.settingsStore.settings.reset_hashtag_when_program_switches=e)},null,8,["modelValue"])]),t("div",It,[Ut,Rt,s(H,{class:"settings__item-switch",color:"primary",id:"auto_add_watching_channel_hashtag","hide-details":"",modelValue:u.settingsStore.settings.auto_add_watching_channel_hashtag,"onUpdate:modelValue":a[15]||(a[15]=e=>u.settingsStore.settings.auto_add_watching_channel_hashtag=e)},null,8,["modelValue"])]),t("div",$t,[Nt,zt,s(L,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:u.is_form_dense?"compact":"default",items:u.twitter_active_tab,modelValue:u.settingsStore.settings.twitter_active_tab,"onUpdate:modelValue":a[16]||(a[16]=e=>u.settingsStore.settings.twitter_active_tab=e)},null,8,["density","items","modelValue"])]),t("div",Mt,[Wt,Ht,s(L,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:u.is_form_dense?"compact":"default",items:u.tweet_hashtag_position,modelValue:u.settingsStore.settings.tweet_hashtag_position,"onUpdate:modelValue":a[17]||(a[17]=e=>u.settingsStore.settings.tweet_hashtag_position=e)},null,8,["density","items","modelValue"])]),t("div",Lt,[Gt,jt,s(L,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:u.is_form_dense?"compact":"default",items:u.tweet_capture_watermark_position,modelValue:u.settingsStore.settings.tweet_capture_watermark_position,"onUpdate:modelValue":a[18]||(a[18]=e=>u.settingsStore.settings.tweet_capture_watermark_position=e)},null,8,["density","items","modelValue"])])],2),s(lt,{class:"align-center justify-center",persistent:!0,"model-value":u.is_twitter_password_auth_sending,"z-index":"300"},{default:l(()=>[s(Mu,{color:"secondary",indeterminate:"",size:"64"})]),_:1},8,["model-value"])]),_:1})}const oe=$u(rt,[["render",Ot],["__scopeId","data-v-365be10e"]]);export{oe as default};
