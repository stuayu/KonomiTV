import{d as O,r as b,w as B,a1 as X,b as v,g as Y,h as u,j as l,i as t,f as U,e as g,y as i,x as R,F as H,q as Z,z as G,X as f,V as c,cJ as K,M as V,U as $,k as N,R as S,_ as ee,a5 as x,cK as te,co as j,n as se}from"./index-C_K5Lxok.js";import{V as z,a as Q,b as le,c as ie}from"./VCard-Dx0WNLWC.js";import{V as W}from"./ssrBoot-5uzTF8uw.js";import{c as F}from"./VSelect-sZXAPJ1Z.js";import{V as q}from"./VDialog-CAWMbxT-.js";import{V as ne}from"./Navigation-Dmz_fXg1.js";import{S as ae}from"./Base-BSB8vNMb.js";import{c as w}from"./VTextField-BzatNvwg.js";import{V as J}from"./VSlider-DdFGMkc5.js";import{c as A}from"./VChip-4dD_K6Xv.js";import"./VAvatar-gdfTCHEm.js";const oe={class:"px-5 pb-6"},re={key:0,class:"user-manage-settings__label"},de={key:1,class:"user-accounts"},ue=["src"],me={class:"user-account__info"},ve={class:"user-account__name"},pe={class:"user-account__id"},_e=["disabled","onClick"],ge=O({__name:"AccountManageSettings",props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(P,{emit:r}){const M=P,L=r,n=b(!1);B(()=>M.modelValue,s=>{n.value=s}),B(n,s=>{L("update:modelValue",s)});const C=X(),_=b([]),h=b({}),y=b({});B(y,s=>{for(const[a,d]of Object.entries(s)){const o=_.value.find(k=>k.id===Number(a));if(o){const k=d==="管理者";o.is_admin!==k&&K.updateSpecifiedUser(o.name,k).then(E=>{E?(V.success(`ユーザー ${o.name} の権限を ${d} に変更しました。`),T()):y.value[o.id]=o.is_admin?"管理者":"一般"}).catch(()=>{y.value[o.id]=o.is_admin?"管理者":"一般"})}}},{deep:!0});function T(){K.fetchAllUsers().then(async s=>{var a;if(s!==null){_.value=s;for(const d of _.value)K.fetchSpecifiedUserIcon(d.name).then(o=>{h.value[d.id]=o??""}),y.value[d.id]=d.is_admin?"管理者":"一般"}else{const d=await C.fetchUser(!0);d!==null&&d.name===((a=C.user)==null?void 0:a.name)&&!d.is_admin&&(V.warning("ログイン中ユーザーの管理者権限が剥奪されました。3秒後にリロードします。"),await $.sleep(3),location.reload())}})}C.fetchUser().then(s=>{s!=null&&s.is_admin&&T()});const p=b(!1),e=b(null);function m(s){e.value=s,p.value=!0}function D(){e.value&&K.deleteSpecifiedUser(e.value).then(s=>{s&&(_.value=_.value.filter(a=>a.name!==e.value),V.success(`ユーザー ${e.value} を削除しました。`),T()),p.value=!1})}return(s,a)=>{const d=N("Icon");return v(),Y(q,{"max-width":"570",transition:"slide-y-transition",modelValue:n.value,"onUpdate:modelValue":a[4]||(a[4]=o=>n.value=o)},{default:u(()=>[l(Q,{class:"user-manage-settings"},{default:u(()=>[l(z,{class:"px-5 pt-6 pb-3 d-flex align-center font-weight-bold",style:{height:"60px"}},{default:u(()=>[l(d,{icon:"fluent:person-board-20-filled",height:"26px"}),a[5]||(a[5]=t("span",{class:"ml-3"},"アカウントの管理",-1)),l(W),U((v(),g("div",{class:"d-flex align-center rounded-circle cursor-pointer px-2 py-2",onClick:a[0]||(a[0]=o=>n.value=!1)},[l(d,{icon:"fluent:dismiss-12-filled",width:"23px",height:"23px"})])),[[S]])]),_:1}),t("div",oe,[a[8]||(a[8]=t("div",{class:"user-manage-settings__label"},[i(" 管理者ユーザーには、サーバー設定やアカウントの管理権限が与えられます。"),t("br"),i(" 変更内容はすぐに反映されます。"),t("br")],-1)),a[9]||(a[9]=t("div",{class:"user-manage-settings__label text-error-lighten-1"},[t("strong",null,"アカウントを削除すると、そのアカウントに紐づくすべてのユーザーデータが削除されます。元に戻すことはできません。")],-1)),_.value.length===0?(v(),g("div",re,a[6]||(a[6]=[t("div",null,[t("b",null,"まだ KonomiTV アカウントが一つも作成されていません。")],-1),t("div",{class:"mt-1"},"KonomiTV アカウントを作成すると、より便利な機能が使えます！ぜひログインしての利用をおすすめします。",-1)]))):R("",!0),_.value.length>0?(v(),g("div",de,[(v(!0),g(H,null,Z(_.value,o=>{var k;return v(),g("div",{key:o.id,class:"user-account"},[t("img",{class:"user-account__icon",src:h.value[o.id]},null,8,ue),t("div",me,[t("span",ve,G(o.name),1),t("span",pe,"User ID: "+G(o.id),1)]),l(F,{class:"user-account__role",color:"primary",density:"compact",variant:"outlined","hide-details":"",items:["一般","管理者"],modelValue:y.value[o.id],"onUpdate:modelValue":E=>y.value[o.id]=E},null,8,["modelValue","onUpdate:modelValue"]),U((v(),g("button",{class:"user-account__delete-button",disabled:o.name===((k=f(C).user)==null?void 0:k.name),onClick:E=>m(o.name)},a[7]||(a[7]=[t("svg",{class:"iconify iconify--fluent",width:"20px",height:"20px",viewBox:"0 0 16 16"},[t("path",{fill:"currentColor",d:"M7 3h2a1 1 0 0 0-2 0ZM6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1h4Zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5ZM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Z"})],-1)]),8,_e)),[[S]])])}),128))])):R("",!0)])]),_:1}),l(q,{"max-width":"385",modelValue:p.value,"onUpdate:modelValue":a[3]||(a[3]=o=>p.value=o)},{default:u(()=>[l(Q,null,{default:u(()=>[l(z,{class:"d-flex justify-center pt-6 font-weight-bold"},{default:u(()=>a[10]||(a[10]=[i("本当にアカウントを削除しますか？")])),_:1}),l(le,{class:"pt-2 pb-0"},{default:u(()=>a[11]||(a[11]=[i(" アカウントに紐づくすべてのユーザーデータが削除されます。元に戻すことはできません。"),t("br",null,null,-1),i(" 本当にアカウントを削除しますか？ ")])),_:1}),l(ie,{class:"pt-4 px-6 pb-6"},{default:u(()=>[l(W),l(c,{color:"text",variant:"text",onClick:a[1]||(a[1]=o=>p.value=!1)},{default:u(()=>a[12]||(a[12]=[i("キャンセル")])),_:1}),l(c,{color:"error",variant:"flat",onClick:a[2]||(a[2]=o=>D())},{default:u(()=>a[13]||(a[13]=[i("削除")])),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])}}}),fe=ee(ge,[["__scopeId","data-v-6599ce25"]]);class I{static async updateDatabase(){const r=await x.post("/maintenance/update-database");if(r.type==="error")switch(r.data.detail){default:x.showGenericError(r,"データベースを更新できませんでした。");break}}static async restartServer(){const r=await x.post("/maintenance/restart");if(r.type==="error")switch(r.data.detail){default:x.showGenericError(r,"サーバーを再起動できませんでした。");break}}static async shutdownServer(){const r=await x.post("/maintenance/shutdown");if(r.type==="error")switch(r.data.detail){default:x.showGenericError(r,"サーバーをシャットダウンできませんでした。");break}}}const ce={class:"settings__heading"},be={class:"settings__content-heading"},Ve={class:"settings__item"},ye={class:"settings__item"},ke={class:"settings__item"},we={class:"settings__item"},Ce={class:"settings__item"},xe={class:"settings__item settings__item--switch"},Te={class:"settings__item settings__item--switch"},Ue={class:"settings__content-heading mt-6"},Se={class:"settings__item"},Me={class:"settings__item"},he={class:"settings__content-heading mt-6"},Ee={class:"settings__item settings__item--switch"},Ke={class:"settings__item"},$e={class:"settings__content-heading mt-6"},Pe={class:"settings__item"},De={class:"d-flex align-center mt-3"},Be=["onClick"],Ae={class:"settings__content-heading mt-6"},Ie={class:"settings__item"},He={class:"d-flex align-center mt-3"},Ze=["onClick"],Ne={class:"settings__content-heading mt-8"},Fe={class:"settings__item"},Le={class:"settings__item-label mt-1"},Re={class:"settings__content-heading mt-8"},tt=O({__name:"Server",setup(P){const r=$.isSmartphoneHorizontal(),M=b(!0);X().fetchUser().then(p=>{p&&p.is_admin&&(M.value=!1)});const n=b(structuredClone(te));j.fetchServerSettings().then(p=>{p&&(n.value=p)});async function C(){n.value.server.custom_https_certificate===""&&(n.value.server.custom_https_certificate=null),n.value.server.custom_https_private_key===""&&(n.value.server.custom_https_private_key=null),await j.updateServerSettings(n.value)===!0&&V.success(`サーバー設定を更新しました。
変更を反映するためには、KonomiTV サーバーを再起動してください。`)}const _=b(!1);async function h(){V.show("データベースを更新しています..."),await I.updateDatabase(),V.success("データベースを更新しました。")}async function y(){for(await I.restartServer(),V.show("KonomiTV サーバーを再起動しています..."),await $.sleep(1);await ne.fetchServerVersion(!0)===null;)await $.sleep(1);V.success("KonomiTV サーバーを再起動しました。")}async function T(){await I.shutdownServer(),V.success("KonomiTV サーバーをシャットダウンしました。")}return(p,e)=>{const m=N("Icon"),D=N("router-link");return v(),Y(ae,null,{default:u(()=>[t("h2",ce,[U((v(),g("a",{class:"settings__back-button",onClick:e[0]||(e[0]=s=>p.$router.back())},[l(m,{icon:"fluent:arrow-left-12-filled",width:"25px"})])),[[S]]),l(m,{icon:"fluent:server-surface-16-filled",width:"22px"}),e[21]||(e[21]=t("span",{class:"ml-2"},"サーバー設定",-1))]),e[78]||(e[78]=t("div",{class:"settings__description"},[i(" サーバー設定を変更するには、管理者アカウントでログインしている必要があります。"),t("br")],-1)),e[79]||(e[79]=t("div",{class:"settings__description mt-1"},[i(" [サーバー設定を更新] ボタンを押さずにこのページから離れると、変更内容は破棄されます。"),t("br"),i(" 変更を反映するには KonomiTV サーバーの再起動が必要です。"),t("br")],-1)),t("div",{class:se(["settings__content",{"settings__content--disabled":M.value}])},[t("div",be,[l(m,{icon:"fa-solid:sliders-h",width:"22px",style:{padding:"0 3px"}}),e[22]||(e[22]=t("span",{class:"ml-2"},"全般",-1))]),t("div",Ve,[e[23]||(e[23]=t("div",{class:"settings__item-heading"},"利用するバックエンド",-1)),e[24]||(e[24]=t("div",{class:"settings__item-label"},[i(" EDCB・Mirakurun のいずれかを選択してください。"),t("br"),i(" バックエンドに Mirakurun が選択されているときは、録画予約機能は利用できません。"),t("br")],-1)),l(F,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:f(r)?"compact":"default",items:["EDCB","Mirakurun"],modelValue:n.value.general.backend,"onUpdate:modelValue":e[1]||(e[1]=s=>n.value.general.backend=s)},null,8,["density","modelValue"])]),t("div",ye,[e[25]||(e[25]=t("div",{class:"settings__item-heading"},"EDCB (EpgTimerNW) の TCP API の URL",-1)),e[26]||(e[26]=t("div",{class:"settings__item-label"},[i(" バックエンドに EDCB が選択されているときに利用されます。"),t("br"),i(" tcp://edcb-namedpipe/ と指定すると、TCP API の代わりに名前付きパイプを使って通信します (ローカルのみ)。"),t("br")],-1)),e[27]||(e[27]=t("div",{class:"settings__item-label mt-1"},[i(" 一部 Windows 環境では localhost の名前解決が遅いため、ストリーミング開始までの待機時間が長くなる場合があります。 EDCB と同じ PC に KonomiTV をインストールしている場合、localhost ではなく 127.0.0.1 の利用を推奨します。"),t("br")],-1)),l(w,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:f(r)?"compact":"default",modelValue:n.value.general.edcb_url,"onUpdate:modelValue":e[2]||(e[2]=s=>n.value.general.edcb_url=s)},null,8,["density","modelValue"])]),t("div",ke,[e[28]||(e[28]=t("div",{class:"settings__item-heading"},"Mirakurun / mirakc の HTTP API の URL",-1)),e[29]||(e[29]=t("div",{class:"settings__item-label"},[i(" バックエンドに Mirakurun が選択されているときに利用されます。"),t("br")],-1)),e[30]||(e[30]=t("div",{class:"settings__item-label mt-1"},[i(" 一部 Windows 環境では localhost の名前解決が遅いため、ストリーミング開始までの待機時間が長くなる場合があります。 Mirakurun / mirakc と同じ PC に KonomiTV をインストールしている場合、localhost ではなく 127.0.0.1 の利用を推奨します。"),t("br")],-1)),l(w,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:f(r)?"compact":"default",modelValue:n.value.general.mirakurun_url,"onUpdate:modelValue":e[3]||(e[3]=s=>n.value.general.mirakurun_url=s)},null,8,["density","modelValue"])]),t("div",we,[e[31]||(e[31]=t("div",{class:"settings__item-heading"},"利用するエンコーダー",-1)),e[32]||(e[32]=t("div",{class:"settings__item-label"},[i(" FFmpeg はソフトウェアエンコーダーです。"),t("br"),i(" すべての PC で利用できますが、CPU に多大な負荷がかかり、パフォーマンスが悪いです。"),t("br")],-1)),e[33]||(e[33]=t("div",{class:"settings__item-label mt-1"},[i(" QSVEncC・NVEncC・VCEEncC・rkmppenc はハードウェアエンコーダーです。"),t("br"),i(" CPU 負荷が低く、パフォーマンスがとても高いです（おすすめ）。"),t("br")],-1)),l(F,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:f(r)?"compact":"default",items:[{title:"FFmpeg : ソフトウェアエンコーダー",value:"FFmpeg"},{title:"QSVEncC : Intel Graphics 搭載 CPU / Intel Arc GPU で利用可能",value:"QSVEncC"},{title:"NVEncC : NVIDIA GPU で利用可能",value:"NVEncC"},{title:"VCEEncC : AMD GPU で利用可能",value:"VCEEncC"},{title:"rkmppenc : Rockchip RK3588 系 SoC 搭載 SBC で利用可能",value:"rkmppenc"}],modelValue:n.value.general.encoder,"onUpdate:modelValue":e[4]||(e[4]=s=>n.value.general.encoder=s)},null,8,["density","modelValue"])]),t("div",Ce,[e[34]||(e[34]=t("div",{class:"settings__item-heading"},"番組情報の更新間隔 (分)",-1)),e[35]||(e[35]=t("div",{class:"settings__item-label"},[i(" 番組情報を EDCB または Mirakurun / mirakc から取得する間隔を設定します。デフォルトは 5 (分) です。"),t("br")],-1)),l(J,{class:"settings__item-form",color:"primary","show-ticks":"always","thumb-label":"","hide-details":"",min:.5,max:60,step:.5,density:f(r)?"compact":"default",modelValue:n.value.general.program_update_interval,"onUpdate:modelValue":e[5]||(e[5]=s=>n.value.general.program_update_interval=s)},null,8,["density","modelValue"])]),t("div",xe,[e[36]||(e[36]=t("label",{class:"settings__item-heading",for:"debug"},"デバッグモードを有効にする",-1)),e[37]||(e[37]=t("label",{class:"settings__item-label",for:"debug"},[i(" 有効にすると、デバッグログも出力されるようになります。"),t("br")],-1)),l(A,{class:"settings__item-switch",color:"primary",id:"debug","hide-details":"",modelValue:n.value.general.debug,"onUpdate:modelValue":e[6]||(e[6]=s=>n.value.general.debug=s)},null,8,["modelValue"])]),t("div",Te,[e[38]||(e[38]=t("label",{class:"settings__item-heading",for:"debug_encoder"},"エンコーダーのログを有効にする",-1)),e[39]||(e[39]=t("label",{class:"settings__item-label",for:"debug_encoder"},[i(" 有効にすると、エンコーダーのログが server/logs/ 以下に保存されます。 さらにデバッグモードが有効のときは、デバッグログとしてリアルタイムにエンコーダーのログが出力されます。"),t("br")],-1)),l(A,{class:"settings__item-switch",color:"primary",id:"debug_encoder","hide-details":"",modelValue:n.value.general.debug_encoder,"onUpdate:modelValue":e[7]||(e[7]=s=>n.value.general.debug_encoder=s)},null,8,["modelValue"])]),t("div",Ue,[l(m,{icon:"fluent:server-surface-16-filled",width:"22px"}),e[40]||(e[40]=t("span",{class:"ml-2"},"サーバー",-1))]),t("div",Se,[e[41]||(e[41]=t("div",{class:"settings__item-heading"},"KonomiTV サーバーのリッスンポート",-1)),e[42]||(e[42]=t("div",{class:"settings__item-label"},[i(" デフォルトのリッスンポートは 7000 です。"),t("br")],-1)),l(w,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:f(r)?"compact":"default",modelValue:n.value.server.port,"onUpdate:modelValue":e[8]||(e[8]=s=>n.value.server.port=s)},null,8,["density","modelValue"])]),t("div",Me,[e[43]||(e[43]=t("div",{class:"settings__item-heading"},"HTTPS リバースプロキシのカスタム HTTPS 証明書/秘密鍵ファイルへの絶対パス",-1)),e[44]||(e[44]=t("div",{class:"settings__item-label"},[i(" 設定すると、カスタム HTTPS 証明書を使って HTTPS リバースプロキシを開始します。"),t("br"),i(" カスタム HTTPS 証明書を有効化すると、https://192-168-x-xx.local.konomi.tv:7000/ の URL では KonomiTV にアクセスできなくなります。"),t("br"),i(" 基本空欄のままで問題ありません。HTTPS 証明書について詳細に理解している方のみ設定してください。"),t("br")],-1)),l(w,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",label:"例: C:\\path\\to\\cert.pem",density:f(r)?"compact":"default",modelValue:n.value.server.custom_https_certificate,"onUpdate:modelValue":e[9]||(e[9]=s=>n.value.server.custom_https_certificate=s)},null,8,["density","modelValue"]),l(w,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",label:"例: C:\\path\\to\\key.pem",density:f(r)?"compact":"default",modelValue:n.value.server.custom_https_private_key,"onUpdate:modelValue":e[10]||(e[10]=s=>n.value.server.custom_https_private_key=s)},null,8,["density","modelValue"])]),t("div",he,[l(m,{icon:"fluent:tv-20-filled",width:"22px"}),e[45]||(e[45]=t("span",{class:"ml-2"},"テレビのライブストリーミング",-1))]),t("div",Ee,[e[46]||(e[46]=t("label",{class:"settings__item-heading",for:"always_receive_tv_from_mirakurun"},"常に Mirakurun / mirakc から放送波を受信する",-1)),e[47]||(e[47]=t("label",{class:"settings__item-label",for:"always_receive_tv_from_mirakurun"},[i(" 利用するバックエンドが EDCB のとき、常に Mirakurun / mirakc から放送波を受信するかを設定します。 バックエンドに Mirakurun が選択されているときは効果がありません。"),t("br")],-1)),e[48]||(e[48]=t("label",{class:"settings__item-label mt-1",for:"always_receive_tv_from_mirakurun"},[i(" KonomiTV から EDCB と Mirakurun / mirakc 両方にアクセスできる必要があります。"),t("br"),i(" EDCB はチューナー起動やチャンネル切り替えに時間がかかるため、Mirakurun / mirakc が利用できる環境であれば、この設定を有効にするとより快適に使えます。"),t("br")],-1)),l(A,{class:"settings__item-switch",color:"primary",id:"always_receive_tv_from_mirakurun","hide-details":"",modelValue:n.value.general.always_receive_tv_from_mirakurun,"onUpdate:modelValue":e[11]||(e[11]=s=>n.value.general.always_receive_tv_from_mirakurun=s)},null,8,["modelValue"])]),t("div",Ke,[e[49]||(e[49]=t("div",{class:"settings__item-heading"},"誰も見ていないチャンネルのエンコードタスクを維持する秒数",-1)),e[50]||(e[50]=t("div",{class:"settings__item-label"},[i(" 10 秒に設定したなら、10 秒間誰も見ていない状態が継続したらエンコードタスク（エンコーダー）を終了します。"),t("br"),i(" 0 秒に設定すると、ネット回線が瞬断したりリロードしただけでチューナーとエンコーダーの再起動が必要になり、再生復帰までに時間がかかります。余裕をもたせておく事をおすすめします。"),t("br")],-1)),l(J,{class:"settings__item-form",color:"primary","show-ticks":"always","thumb-label":"","hide-details":"",min:0,max:60,step:1,density:f(r)?"compact":"default",modelValue:n.value.tv.max_alive_time,"onUpdate:modelValue":e[12]||(e[12]=s=>n.value.tv.max_alive_time=s)},null,8,["density","modelValue"])]),t("div",$e,[l(m,{icon:"fluent:movies-and-tv-20-filled",width:"22px"}),e[51]||(e[51]=t("span",{class:"ml-2"},"ビデオのオンデマンドストリーミング",-1))]),t("div",Pe,[e[54]||(e[54]=t("div",{class:"settings__item-heading"},"録画済み番組の保存先フォルダの絶対パス",-1)),e[55]||(e[55]=t("div",{class:"settings__item-label",style:{"padding-bottom":"2px"}},[i(" 複数の保存先フォルダを指定できます。"),t("br")],-1)),(v(!0),g(H,null,Z(n.value.video.recorded_folders,(s,a)=>(v(),g("div",{key:"recorded-folder-"+a},[t("div",De,[l(w,{class:"settings__item-form mt-0",color:"primary",variant:"outlined","hide-details":"",placeholder:"例: E:\\TV-Record",density:f(r)?"compact":"default",modelValue:n.value.video.recorded_folders[a],"onUpdate:modelValue":d=>n.value.video.recorded_folders[a]=d},null,8,["density","modelValue","onUpdate:modelValue"]),U((v(),g("button",{class:"settings__item-delete-button",onClick:d=>n.value.video.recorded_folders.splice(a,1)},e[52]||(e[52]=[t("svg",{class:"iconify iconify--fluent",width:"20px",height:"20px",viewBox:"0 0 16 16"},[t("path",{fill:"currentColor",d:"M7 3h2a1 1 0 0 0-2 0ZM6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1h4Zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5ZM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Z"})],-1)]),8,Be)),[[S]])])]))),128)),l(c,{class:"mt-3",color:"background-lighten-2",variant:"flat",height:"40px",onClick:e[13]||(e[13]=s=>n.value.video.recorded_folders.push(""))},{default:u(()=>[l(m,{icon:"fluent:add-12-filled",height:"17px"}),e[53]||(e[53]=t("span",{class:"ml-1"},"保存先フォルダを追加",-1))]),_:1})]),t("div",Ae,[l(m,{icon:"fluent:image-multiple-16-filled",width:"22px"}),e[56]||(e[56]=t("span",{class:"ml-2"},"キャプチャ",-1))]),t("div",Ie,[e[59]||(e[59]=t("div",{class:"settings__item-heading"},"アップロードしたキャプチャ画像の保存先フォルダの絶対パス",-1)),e[60]||(e[60]=t("div",{class:"settings__item-label"},[i(" クライアントの [キャプチャの保存先] 設定で [KonomiTV サーバーにアップロード] または [ブラウザでのダウンロードと、KonomiTV サーバーへのアップロードを両方行う] が選択されているときに利用されます。"),t("br")],-1)),e[61]||(e[61]=t("div",{class:"settings__item-label mt-1",style:{"padding-bottom":"2px"}},[i(" 複数の保存先フォルダを指定できます。先頭から順に利用され、保存先フォルダがいっぱいになったら次の保存先フォルダに保存されます。"),t("br")],-1)),(v(!0),g(H,null,Z(n.value.capture.upload_folders,(s,a)=>(v(),g("div",{key:"upload-folder-"+a},[t("div",He,[l(w,{class:"settings__item-form mt-0",color:"primary",variant:"outlined","hide-details":"",placeholder:"例: E:\\TV-Capture",density:f(r)?"compact":"default",modelValue:n.value.capture.upload_folders[a],"onUpdate:modelValue":d=>n.value.capture.upload_folders[a]=d},null,8,["density","modelValue","onUpdate:modelValue"]),U((v(),g("button",{class:"settings__item-delete-button",onClick:d=>n.value.capture.upload_folders.splice(a,1)},e[57]||(e[57]=[t("svg",{class:"iconify iconify--fluent",width:"20px",height:"20px",viewBox:"0 0 16 16"},[t("path",{fill:"currentColor",d:"M7 3h2a1 1 0 0 0-2 0ZM6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1h4Zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5ZM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Z"})],-1)]),8,Ze)),[[S]])])]))),128)),l(c,{class:"mt-3",color:"background-lighten-2",variant:"flat",height:"40px",onClick:e[14]||(e[14]=s=>n.value.capture.upload_folders.push(""))},{default:u(()=>[l(m,{icon:"fluent:add-12-filled",height:"17px"}),e[58]||(e[58]=t("span",{class:"ml-1"},"保存先フォルダを追加",-1))]),_:1})]),l(c,{class:"settings__save-button bg-secondary mt-6",variant:"flat",onClick:e[15]||(e[15]=s=>C())},{default:u(()=>[l(m,{icon:"fluent:save-16-filled",class:"mr-2",height:"23px"}),e[62]||(e[62]=i("サーバー設定を更新 "))]),_:1}),t("div",Ne,[l(m,{icon:"fluent:person-board-20-filled",width:"22px"}),e[63]||(e[63]=t("span",{class:"ml-2"},"アカウント",-1))]),t("div",Fe,[e[68]||(e[68]=t("div",{class:"settings__item-heading"},"アカウントの管理",-1)),e[69]||(e[69]=t("div",{class:"settings__item-label"},[i(" 現在 KonomiTV に登録されているすべてのアカウントの一覧の確認、管理者権限の付与/剥奪、アカウントの削除ができます。"),t("br")],-1)),t("div",Le,[e[65]||(e[65]=i(" ログイン中ユーザーの設定変更は、別途 ")),l(D,{class:"link",to:"/settings/account"},{default:u(()=>e[64]||(e[64]=[i("アカウント設定画面")])),_:1}),e[66]||(e[66]=i(" から行ってください。")),e[67]||(e[67]=t("br",null,null,-1))])]),l(c,{class:"settings__save-button mt-4",variant:"flat",onClick:e[16]||(e[16]=s=>_.value=!_.value)},{default:u(()=>[l(m,{icon:"fluent:person-board-20-filled",height:"20px"}),e[70]||(e[70]=t("span",{class:"ml-1"},"アカウントの管理設定を開く",-1))]),_:1}),t("div",Re,[l(m,{icon:"fluent:wrench-settings-20-filled",width:"22px"}),e[71]||(e[71]=t("span",{class:"ml-2"},"メンテナンス",-1))]),e[75]||(e[75]=t("div",{class:"settings__item"},[t("div",{class:"settings__item-heading"},"KonomiTV のデータベースを更新"),t("div",{class:"settings__item-label"},[i(" KonomiTV のデータベースに保存されている、チャンネル情報・番組情報・Twitter アカウント情報などの外部 API に依存するデータをすべて更新します。"),t("br"),i(" 即座に外部 API からのデータ更新を反映させたいときに利用してください。"),t("br")])],-1)),l(c,{class:"settings__save-button mt-5",color:"background-lighten-2",variant:"flat",onClick:e[17]||(e[17]=s=>h())},{default:u(()=>[l(m,{icon:"iconoir:database-backup",height:"20px"}),e[72]||(e[72]=t("span",{class:"ml-2"},"データベースを更新",-1))]),_:1}),e[76]||(e[76]=t("div",{class:"settings__item"},[t("div",{class:"settings__item-heading text-error-lighten-1"},"KonomiTV サーバーを再起動"),t("div",{class:"settings__item-label"},[i(" KonomiTV サーバーを再起動します。サーバー設定の変更を反映するには再起動が必要です。"),t("br"),t("strong",null,"再起動を実行すると、すべての視聴中セッションが切断されます。"),i("十分注意してください。"),t("br")])],-1)),l(c,{class:"settings__save-button bg-error mt-5",variant:"flat",onClick:e[18]||(e[18]=s=>y())},{default:u(()=>[l(m,{icon:"fluent:arrow-counterclockwise-20-filled",height:"20px"}),e[73]||(e[73]=t("span",{class:"ml-2"},"KonomiTV サーバーを再起動",-1))]),_:1}),e[77]||(e[77]=t("div",{class:"settings__item"},[t("div",{class:"settings__item-heading text-error-lighten-1"},"KonomiTV サーバーをシャットダウン"),t("div",{class:"settings__item-label"},[i(" KonomiTV サーバーをシャットダウンします。"),t("br"),t("strong",null,"シャットダウンを実行すると、再度手動で KonomiTV サーバーを起動するまで KonomiTV にアクセスできなくなります。"),i("十分注意してください。"),t("br")]),t("div",{class:"settings__item-label mt-1"},[i(" なお、Linux 版 KonomiTV サーバーはプロセス管理を PM2 / Docker に委譲しているため、シャットダウン後は自動で再起動されます。完全にシャットダウンするには、PM2 / Docker 側でサービスを停止してください。"),t("br")])],-1)),l(c,{class:"settings__save-button bg-error mt-5",variant:"flat",onClick:e[19]||(e[19]=s=>T())},{default:u(()=>[l(m,{icon:"fluent:power-20-filled",height:"20px"}),e[74]||(e[74]=t("span",{class:"ml-2"},"KonomiTV サーバーをシャットダウン",-1))]),_:1})],2),l(fe,{modelValue:_.value,"onUpdate:modelValue":e[20]||(e[20]=s=>_.value=s)},null,8,["modelValue"])]),_:1})}}});export{tt as default};