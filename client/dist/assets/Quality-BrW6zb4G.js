import{d as V,U as C,m as S,l as h,_ as U,g as d,h as D,k as F,b as l,i as t,f as g,e as n,j as _,y as i,q as p,z as q,F as v,s as G,x as o,n as y,R as H}from"./index-C_K5Lxok.js";import{S as M}from"./Base-BSB8vNMb.js";import{P}from"./PlayerUtils-DvsnJsyj.js";import{V as k,a as w}from"./VTabs-Bbmbta1L.js";import{c as B}from"./VSelect-sZXAPJ1Z.js";import{c as m}from"./VChip-4dD_K6Xv.js";import"./Navigation-Dmz_fXg1.js";import"./ssrBoot-5uzTF8uw.js";import"./VTextField-BzatNvwg.js";import"./VAvatar-gdfTCHEm.js";const r=[{title:"1080p (60fps) (約4.50GB/h / 平均10.0Mbps)",value:"1080p-60fps"},{title:"1080p (約4.50GB/h / 平均10.0Mbps)",value:"1080p"},{title:"810p (約2.62GB/h / 平均5.8Mbps)",value:"810p"},{title:"720p (約2.18GB/h / 平均4.9Mbps)",value:"720p"},{title:"540p (約1.52GB/h / 平均3.4Mbps)",value:"540p"},{title:"480p (約1.06GB/h / 平均2.3Mbps)",value:"480p"},{title:"360p (約0.60GB/h / 平均1.3Mbps)",value:"360p"},{title:"240p (約0.35GB/h / 平均0.8Mbps)",value:"240p"}],E=[{title:"1080p (60fps) (約1.80GB/h / 平均4.0Mbps)",value:"1080p-60fps"},{title:"1080p (約1.37GB/h / 平均3.0Mbps)",value:"1080p"},{title:"810p (約1.05GB/h / 平均2.3Mbps)",value:"810p"},{title:"720p (約0.82GB/h / 平均1.8Mbps)",value:"720p"},{title:"540p (約0.53GB/h / 平均1.2Mbps)",value:"540p"},{title:"480p (約0.46GB/h / 平均1.0Mbps)",value:"480p"},{title:"360p (約0.30GB/h / 平均0.7Mbps)",value:"360p"},{title:"240p (約0.20GB/h / 平均0.4Mbps)",value:"240p"}],$=V({name:"Settings-Quality",components:{SettingsBase:M},data(){return{Utils:Object.freeze(C),PlayerUtils:Object.freeze(P),is_form_dense:C.isSmartphoneHorizontal(),tab:null,network_circuits:["Wi-Fi 回線時","モバイル回線時"],tv_streaming_quality:r,tv_streaming_quality_cellular:r,video_streaming_quality:r,video_streaming_quality_cellular:r}},computed:{...S(h)},watch:{"settingsStore.settings.tv_data_saver_mode":{immediate:!0,handler(e){e===!0?this.tv_streaming_quality=E:this.tv_streaming_quality=r}},"settingsStore.settings.tv_data_saver_mode_cellular":{immediate:!0,handler(e){e===!0?this.tv_streaming_quality_cellular=E:this.tv_streaming_quality_cellular=r}},"settingsStore.settings.video_data_saver_mode":{immediate:!0,handler(e){e===!0?this.video_streaming_quality=E:this.video_streaming_quality=r}},"settingsStore.settings.video_data_saver_mode_cellular":{immediate:!0,handler(e){e===!0?this.video_streaming_quality_cellular=E:this.video_streaming_quality_cellular=r}}},created(){this.settingsStore.settings.tv_data_saver_mode===!0&&(this.tv_streaming_quality=E),this.settingsStore.settings.tv_data_saver_mode_cellular===!0&&(this.tv_streaming_quality_cellular=E),this.settingsStore.settings.video_data_saver_mode===!0&&(this.video_streaming_quality=E),this.settingsStore.settings.video_data_saver_mode_cellular===!0&&(this.video_streaming_quality_cellular=E)}}),T={class:"settings__heading"},z={class:"settings__content-heading mt-6"},I={class:"settings__item settings__item--sync-disabled"},N={key:0,class:"settings__item-label mt-1"},Q=["for"],W=["for"],j={class:"settings__item-label mt-1"},L={key:0,class:"mt-1 mb-0 text-error-lighten-1"},O={key:1,class:"mt-1 mb-0 text-error-lighten-1"},R={class:"settings__item settings__item--switch settings__item--sync-disabled"},Y=["for"],J=["for"],K={class:"settings__content-heading mt-6"},X={class:"settings__item settings__item--sync-disabled"},Z={key:0,class:"settings__item-label mt-1"},c=["for"],x=["for"],uu={class:"settings__item-label mt-1"},eu={key:0,class:"mt-1 mb-0 text-error-lighten-1"},tu={key:1,class:"mt-1 mb-0 text-error-lighten-1"};function su(e,u,lu,iu,au,ou){const A=F("Icon"),b=F("SettingsBase");return l(),d(b,null,{default:D(()=>[t("h2",T,[g((l(),n("a",{class:"settings__back-button",onClick:u[0]||(u[0]=s=>e.$router.back())},[_(A,{icon:"fluent:arrow-left-12-filled",width:"25px"})])),[[H]]),_(A,{icon:"fluent:video-clip-multiple-16-filled",width:"26px"}),u[12]||(u[12]=t("span",{class:"ml-3"},"画質",-1))]),u[31]||(u[31]=t("div",{class:"settings__quote mt-5 pb-2"},[i(" 視聴開始時の画質プロファイルは、デバイスの回線状況に応じて自動的に選択されます (Android のみ) 。"),t("br"),i(" 画質プロファイルは、プレイヤー下にある設定アイコン ⚙️ から変更できます。"),t("br")],-1)),_(w,{class:"settings__tab",color:"primary","bg-color":"transparent","align-tabs":"center",modelValue:e.tab,"onUpdate:modelValue":u[1]||(u[1]=s=>e.tab=s)},{default:D(()=>[(l(!0),n(v,null,p(e.network_circuits,s=>(l(),d(k,{style:{"text-transform":"none !important"},key:s},{default:D(()=>[i(q(s),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]),(l(!0),n(v,null,p(e.network_circuits,(s,f)=>g((l(),n("div",{class:"settings__content mt-0",key:s},[t("div",z,[_(A,{icon:"fluent:tv-20-filled",width:"22px"}),u[13]||(u[13]=t("span",{class:"ml-2"},"テレビのライブストリーミング",-1))]),t("div",I,[u[15]||(u[15]=t("div",{class:"settings__item-heading"},"テレビのデフォルトのストリーミング画質",-1)),u[16]||(u[16]=t("div",{class:"settings__item-label"},[i(" テレビをライブストリーミングするときのデフォルトの画質を設定します。"),t("br"),i(" ストリーミング画質はプレイヤーの設定からいつでも切り替えられます。"),t("br")],-1)),u[17]||(u[17]=t("div",{class:"settings__item-label mt-1"},[i(" 画質を [1080p (60fps)] に設定すると、"),t("b",null,"通常 30fps (60i) の映像を補間し、より滑らか（ぬるぬる）な映像で視聴できます！"),i("ドラマやバラエティなどを視聴するときに特におすすめです。"),t("br")],-1)),e.Utils.isAndroid()?(l(),n("div",N,u[14]||(u[14]=[i(" Fire HD 10 (2021) などの一部のローエンド Android (特に MediaTek SoC 搭載) デバイスでは、1080p 以上の映像描画が不安定なことが確認されています。その場合は 720p 以下の画質を選択することをおすすめします。"),t("br",null,null,-1)]))):o("",!0),s!=="モバイル回線時"?(l(),d(B,{key:1,class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:e.is_form_dense?"compact":"default",items:e.tv_streaming_quality,modelValue:e.settingsStore.settings.tv_streaming_quality,"onUpdate:modelValue":u[2]||(u[2]=a=>e.settingsStore.settings.tv_streaming_quality=a)},null,8,["density","items","modelValue"])):o("",!0),s==="モバイル回線時"?(l(),d(B,{key:2,class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:e.is_form_dense?"compact":"default",items:e.tv_streaming_quality_cellular,modelValue:e.settingsStore.settings.tv_streaming_quality_cellular,"onUpdate:modelValue":u[3]||(u[3]=a=>e.settingsStore.settings.tv_streaming_quality_cellular=a)},null,8,["density","items","modelValue"])):o("",!0)]),t("div",{class:y(["settings__item settings__item--switch settings__item--sync-disabled",{"settings__item--disabled":e.PlayerUtils.isHEVCVideoSupported()===!1}])},[t("label",{class:"settings__item-heading",for:`tv_data_saver_mode${s==="モバイル回線時"?"_cellular":""}`}," テレビを通信節約モードで視聴する ",8,Q),t("label",{class:"settings__item-label",for:`tv_data_saver_mode${s==="モバイル回線時"?"_cellular":""}`},u[18]||(u[18]=[i(" 通信節約モードでは、圧縮率の高い H.265 / HEVC を使い、"),t("b",null,"画質はほぼそのまま、通信量を通常より 50% 〜 70% 削減して視聴できます！",-1),i(" サーバー PC によっては高負荷になることがあります。"),t("br",null,null,-1)]),8,W),t("div",j,[u[19]||(u[19]=i(" 通信が不安定になりがちなモバイル回線 (4G/5G)・通信速度の遅いフリー Wi-Fi から視聴するときに特におすすめです。")),u[20]||(u[20]=t("br",null,null,-1)),e.PlayerUtils.isHEVCVideoSupported()===!1&&e.Utils.isFirefox()===!1?(l(),n("p",L," このデバイスでは通信節約モードがサポートされていません。 ")):o("",!0),e.PlayerUtils.isHEVCVideoSupported()===!1&&e.Utils.isFirefox()===!0?(l(),n("p",O," お使いの Firefox ブラウザでは通信節約モードがサポートされていません。 ")):o("",!0)]),s!=="モバイル回線時"?(l(),d(m,{key:0,class:"settings__item-switch",color:"primary",id:"tv_data_saver_mode","hide-details":"",modelValue:e.settingsStore.settings.tv_data_saver_mode,"onUpdate:modelValue":u[4]||(u[4]=a=>e.settingsStore.settings.tv_data_saver_mode=a),disabled:e.PlayerUtils.isHEVCVideoSupported()===!1},null,8,["modelValue","disabled"])):o("",!0),s==="モバイル回線時"?(l(),d(m,{key:1,class:"settings__item-switch",color:"primary",id:"tv_data_saver_mode_cellular","hide-details":"",modelValue:e.settingsStore.settings.tv_data_saver_mode_cellular,"onUpdate:modelValue":u[5]||(u[5]=a=>e.settingsStore.settings.tv_data_saver_mode_cellular=a),disabled:e.PlayerUtils.isHEVCVideoSupported()===!1},null,8,["modelValue","disabled"])):o("",!0)],2),t("div",R,[t("label",{class:"settings__item-heading",for:`tv_low_latency_mode${s==="モバイル回線時"?"_cellular":""}`}," テレビを低遅延で視聴する ",8,Y),t("label",{class:"settings__item-label",for:`tv_low_latency_mode${s==="モバイル回線時"?"_cellular":""}`},u[21]||(u[21]=[i(" 低遅延ストリーミングをオンにすると、"),t("b",null,"放送波との遅延を最短 0.9 秒に抑えて視聴できます！",-1),t("br",null,null,-1),i(" また、約 3 秒以上遅延したときに少しだけ再生速度を早める (1.1x) ことで、滑らかにストリーミングの遅延を取り戻します。"),t("br",null,null,-1)]),8,J),u[22]||(u[22]=t("div",{class:"settings__item-label mt-1"},[i(" 映像がカクつきやすくなるため、通信が不安定になりがちなモバイル回線やフリー Wi-Fi から視聴するときは、低遅延ストリーミングをオフにすることをおすすめします。"),t("br")],-1)),s!=="モバイル回線時"?(l(),d(m,{key:0,class:"settings__item-switch",color:"primary",id:"tv_low_latency_mode","hide-details":"",modelValue:e.settingsStore.settings.tv_low_latency_mode,"onUpdate:modelValue":u[6]||(u[6]=a=>e.settingsStore.settings.tv_low_latency_mode=a)},null,8,["modelValue"])):o("",!0),s==="モバイル回線時"?(l(),d(m,{key:1,class:"settings__item-switch",color:"primary",id:"tv_low_latency_mode_cellular","hide-details":"",modelValue:e.settingsStore.settings.tv_low_latency_mode_cellular,"onUpdate:modelValue":u[7]||(u[7]=a=>e.settingsStore.settings.tv_low_latency_mode_cellular=a)},null,8,["modelValue"])):o("",!0)]),t("div",K,[_(A,{icon:"fluent:movies-and-tv-20-filled",width:"22px"}),u[23]||(u[23]=t("span",{class:"ml-2"},"ビデオのオンデマンドストリーミング",-1))]),t("div",X,[u[25]||(u[25]=t("div",{class:"settings__item-heading"},"ビデオのデフォルトのストリーミング画質",-1)),u[26]||(u[26]=t("div",{class:"settings__item-label"},[i(" ビデオをストリーミング再生するときのデフォルトの画質を設定します。"),t("br"),i(" ストリーミング画質はプレイヤーの設定からいつでも切り替えられます。"),t("br")],-1)),u[27]||(u[27]=t("div",{class:"settings__item-label mt-1"},[i(" 画質を [1080p (60fps)] に設定すると、"),t("b",null,"通常 30fps (60i) の映像を補間し、より滑らか（ぬるぬる）な映像で視聴できます！"),i("ドラマやバラエティなどを視聴するときに特におすすめです。"),t("br")],-1)),e.Utils.isAndroid()?(l(),n("div",Z,u[24]||(u[24]=[i(" Fire HD 10 (2021) などの一部のローエンド Android (特に MediaTek SoC 搭載) デバイスでは、1080p 以上の映像描画が不安定なことが確認されています。その場合は 720p 以下の画質を選択することをおすすめします。"),t("br",null,null,-1)]))):o("",!0),s!=="モバイル回線時"?(l(),d(B,{key:1,class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:e.is_form_dense?"compact":"default",items:e.video_streaming_quality,modelValue:e.settingsStore.settings.video_streaming_quality,"onUpdate:modelValue":u[8]||(u[8]=a=>e.settingsStore.settings.video_streaming_quality=a)},null,8,["density","items","modelValue"])):o("",!0),s==="モバイル回線時"?(l(),d(B,{key:2,class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:e.is_form_dense?"compact":"default",items:e.video_streaming_quality_cellular,modelValue:e.settingsStore.settings.video_streaming_quality_cellular,"onUpdate:modelValue":u[9]||(u[9]=a=>e.settingsStore.settings.video_streaming_quality_cellular=a)},null,8,["density","items","modelValue"])):o("",!0)]),t("div",{class:y(["settings__item settings__item--switch settings__item--sync-disabled",{"settings__item--disabled":e.PlayerUtils.isHEVCVideoSupported()===!1}])},[t("label",{class:"settings__item-heading",for:`video_data_saver_mode${s==="モバイル回線時"?"_cellular":""}`}," ビデオを通信節約モードで視聴する ",8,c),t("label",{class:"settings__item-label",for:`video_data_saver_mode${s==="モバイル回線時"?"_cellular":""}`},u[28]||(u[28]=[i(" 通信節約モードでは、圧縮率の高い H.265 / HEVC を使い、"),t("b",null,"画質はほぼそのまま、通信量を通常より 50% 〜 70% 削減して視聴できます！",-1),i(" サーバー PC によっては高負荷になることがあります。"),t("br",null,null,-1)]),8,x),t("div",uu,[u[29]||(u[29]=i(" 通信が不安定になりがちなモバイル回線 (4G/5G)・通信速度の遅いフリー Wi-Fi から視聴するときに特におすすめです。")),u[30]||(u[30]=t("br",null,null,-1)),e.PlayerUtils.isHEVCVideoSupported()===!1&&e.Utils.isFirefox()===!1?(l(),n("p",eu," このデバイスでは通信節約モードがサポートされていません。 ")):o("",!0),e.PlayerUtils.isHEVCVideoSupported()===!1&&e.Utils.isFirefox()===!0?(l(),n("p",tu," お使いの Firefox ブラウザでは通信節約モードがサポートされていません。 ")):o("",!0)]),s!=="モバイル回線時"?(l(),d(m,{key:0,class:"settings__item-switch",color:"primary",id:"video_data_saver_mode","hide-details":"",modelValue:e.settingsStore.settings.video_data_saver_mode,"onUpdate:modelValue":u[10]||(u[10]=a=>e.settingsStore.settings.video_data_saver_mode=a),disabled:e.PlayerUtils.isHEVCVideoSupported()===!1},null,8,["modelValue","disabled"])):o("",!0),s==="モバイル回線時"?(l(),d(m,{key:1,class:"settings__item-switch",color:"primary",id:"video_data_saver_mode_cellular","hide-details":"",modelValue:e.settingsStore.settings.video_data_saver_mode_cellular,"onUpdate:modelValue":u[11]||(u[11]=a=>e.settingsStore.settings.video_data_saver_mode_cellular=a),disabled:e.PlayerUtils.isHEVCVideoSupported()===!1},null,8,["modelValue","disabled"])):o("",!0)],2)])),[[G,e.tab===f]])),128))]),_:1})}const Fu=U($,[["render",su],["__scopeId","data-v-52952c2a"]]);export{Fu as default};