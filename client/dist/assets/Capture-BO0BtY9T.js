import{d as C,U as B,m,l as A,_ as F,b as a,e as o,h as p,i as E,j as u,g as _,f as r,k as n,z as t,A as g,V as v,y as f,R as c}from"./index-D59UPlH_.js";import{C as b}from"./CaptureManager-oOErcIY9.js";import{S as y}from"./Base-BS7hX2MT.js";import{c as D}from"./VSelect-UNgHZOon.js";import{c as S}from"./VTextField-CN5peWdG.js";import{c as Y}from"./VChip-CTbcXmcN.js";import"./ChannelsStore-DTEnbOnk.js";import"./Navigation-BC3lN-Yd.js";import"./ssrBoot-5VSid4r3.js";import"./VAvatar--oJobR23.js";const V=C({name:"Settings-Capture",components:{SettingsBase:y},data(){return{is_form_dense:B.isSmartphoneHorizontal(),capture_save_mode:[{title:"ブラウザでダウンロード",value:"Browser"},{title:"KonomiTV サーバーにアップロード",value:"UploadServer"},{title:"ブラウザでのダウンロードと、KonomiTV サーバーへのアップロードを両方行う",value:"Both"}],capture_caption_mode:[{title:"映像のみのキャプチャを保存する",value:"VideoOnly"},{title:"字幕を合成したキャプチャを保存する",value:"CompositingCaption"},{title:"映像のみのキャプチャと、字幕を合成したキャプチャを両方保存する",value:"Both"}],capture_filename_pattern_preview:"",is_macro_list_visible:!1}},computed:{...m(A)},watch:{"settingsStore.settings.capture_filename_pattern":{handler(){this.capture_filename_pattern_preview=`プレビュー: ${b.generateCaptureFilename()}.jpg`},immediate:!0}}}),w={class:"settings__heading"},h={class:"settings__content"},M={class:"settings__item"},k={class:"settings__item"},$={class:"settings__item"},H={class:"settings__item-label"},T={key:0,class:"ml-4 mt-3"},U={class:"settings__item settings__item--switch settings__item--sync-disabled"};function I(e,l,N,z,K,O){const s=a("Icon"),d=a("SettingsBase");return o(),p(d,null,{default:E(()=>[u("h2",w,[_((o(),r("a",{class:"settings__back-button",onClick:l[0]||(l[0]=i=>e.$router.back())},[n(s,{icon:"fluent:arrow-left-12-filled",width:"25px"})])),[[c]]),n(s,{icon:"fluent:image-multiple-16-filled",width:"26px"}),l[6]||(l[6]=u("span",{class:"ml-2"},"キャプチャ",-1))]),u("div",h,[u("div",M,[l[7]||(l[7]=u("div",{class:"settings__item-heading"},"キャプチャの保存先",-1)),l[8]||(l[8]=u("div",{class:"settings__item-label"},[u("p",null,[t(" [ブラウザでダウンロード] に設定すると、視聴中のデバイスのダウンロードフォルダに保存されます。"),u("br"),t(" 視聴中のデバイスにそのまま保存されるためシンプルですが、保存先のフォルダを変更できないこと、iOS Safari (PWA モード) ではダウンロードするとファイル概要画面が表示されて視聴に支障することがデメリットです (将来的には、iOS / Android アプリ版や拡張機能などで解消される予定) 。"),u("br")]),u("p",null,[t(" [KonomiTV サーバーにアップロード] に設定すると、サーバー設定で指定されたキャプチャ保存フォルダに保存されます。視聴したデバイスにかかわらず、今までに撮ったキャプチャをひとつのフォルダにまとめて保存できます。"),u("br"),t(" 他のデバイスでキャプチャを見るにはキャプチャ保存フォルダをネットワークに共有する必要があること、スマホ・タブレットではネットワーク上のフォルダへのアクセスがやや面倒なことがデメリットです。(将来的には、保存フォルダ内のキャプチャを Google フォトのように表示する機能を追加予定)"),u("br")])],-1)),n(D,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:e.is_form_dense?"compact":"default",items:e.capture_save_mode,modelValue:e.settingsStore.settings.capture_save_mode,"onUpdate:modelValue":l[1]||(l[1]=i=>e.settingsStore.settings.capture_save_mode=i)},null,8,["density","items","modelValue"])]),u("div",k,[l[9]||(l[9]=u("div",{class:"settings__item-heading"},"字幕表示時のキャプチャの保存モード",-1)),l[10]||(l[10]=u("div",{class:"settings__item-label"},[t(" 字幕表示時、キャプチャした画像に字幕を合成するかを設定します。"),u("br"),t(" 映像のみのキャプチャと、字幕を合成したキャプチャを両方同時に保存することもできます。"),u("br"),t(" なお、字幕非表示時は、常に映像のみ (+コメント付きキャプチャではコメントを合成して) 保存されます。"),u("br")],-1)),n(D,{class:"settings__item-form",color:"primary",variant:"outlined","hide-details":"",density:e.is_form_dense?"compact":"default",items:e.capture_caption_mode,modelValue:e.settingsStore.settings.capture_caption_mode,"onUpdate:modelValue":l[2]||(l[2]=i=>e.settingsStore.settings.capture_caption_mode=i)},null,8,["density","items","modelValue"])]),u("div",$,[l[18]||(l[18]=u("div",{class:"settings__item-heading"},"キャプチャの保存ファイル名パターン",-1)),u("div",H,[l[12]||(l[12]=t(" キャプチャの保存ファイル名（拡張子なし）を設定します。デフォルトは Capture_%date%-%time% です。")),l[13]||(l[13]=u("br",null,null,-1)),l[14]||(l[14]=t(" 字幕を合成したキャプチャのファイル名には、自動的に _caption のサフィックスが追加されます。")),l[15]||(l[15]=u("br",null,null,-1)),l[16]||(l[16]=t(" ファイル名には、下記の TVTest 互換マクロを使用できます。")),l[17]||(l[17]=u("br",null,null,-1)),n(v,{class:"settings__save-button mt-3 px-3 py-0",style:{height:"36px","font-size":"14px"},variant:"flat",onClick:l[3]||(l[3]=i=>e.is_macro_list_visible=!e.is_macro_list_visible)},{default:E(()=>[n(s,{icon:e.is_macro_list_visible?"fluent:chevron-up-20-filled":"fluent:chevron-down-20-filled",class:"mr-1",height:"19px"},null,8,["icon"]),t(" "+g(e.is_macro_list_visible?"マクロ一覧を非表示":"マクロ一覧を表示"),1)]),_:1}),e.is_macro_list_visible?(o(),r("ul",T,l[11]||(l[11]=[u("li",null,[t("現在日時 "),u("ul",{class:"ml-4"},[u("li",null,"%date%: 年月日 (YYYYMMDD)"),u("li",null,"%year%: 年 (YYYY)"),u("li",null,"%year2%: 年 (YY)"),u("li",null,"%month%: 月"),u("li",null,"%month2%: 月 (2桁)"),u("li",null,"%day%: 日"),u("li",null,"%day2%: 日 (2桁)"),u("li",null,"%time%: 時分秒 (時分秒 / HHMMSS)"),u("li",null,"%hour%: 時"),u("li",null,"%hour2%: 時 (2桁)"),u("li",null,"%minute%: 分"),u("li",null,"%minute2%: 分 (2桁)"),u("li",null,"%second%: 秒"),u("li",null,"%second2%: 秒 (2桁)"),u("li",null,"%day-of-week%: 曜日 (漢字)")])],-1),u("li",null,[t("番組開始日時 "),u("ul",{class:"ml-4"},[u("li",null,"%start-date%: 年月日 (YYYYMMDD)"),u("li",null,"%start-year%: 年 (YYYY)"),u("li",null,"%start-year2%: 年 (YY)"),u("li",null,"%start-month%: 月"),u("li",null,"%start-month2%: 月 (2桁)"),u("li",null,"%start-day%: 日"),u("li",null,"%start-day2%: 日 (2桁)"),u("li",null,"%start-time%: 時刻 (時分秒 / HHMMSS)"),u("li",null,"%start-hour%: 時"),u("li",null,"%start-hour2%: 時 (2桁)"),u("li",null,"%start-minute%: 分"),u("li",null,"%start-minute2%: 分 (2桁)"),u("li",null,"%start-second%: 秒"),u("li",null,"%start-second2%: 秒 (2桁)"),u("li",null,"%start-day-of-week%: 曜日 (漢字)")])],-1),u("li",null,[t("番組終了日時 "),u("ul",{class:"ml-4"},[u("li",null,"%end-date%: 年月日 (YYYYMMDD)"),u("li",null,"%end-year%: 年 (YYYY)"),u("li",null,"%end-year2%: 年 (YY)"),u("li",null,"%end-month%: 月"),u("li",null,"%end-month2%: 月 (2桁)"),u("li",null,"%end-day%: 日"),u("li",null,"%end-day2%: 日 (2桁)"),u("li",null,"%end-time%: 時分秒 (時分秒 / HHMMSS)"),u("li",null,"%end-hour%: 時"),u("li",null,"%end-hour2%: 時 (2桁)"),u("li",null,"%end-minute%: 分"),u("li",null,"%end-minute2%: 分 (2桁)"),u("li",null,"%end-second%: 秒"),u("li",null,"%end-second2%: 秒 (2桁)"),u("li",null,"%end-day-of-week%: 曜日 (漢字)")])],-1),u("li",null,[t("番組長 "),u("ul",{class:"ml-4"},[u("li",null,"%event-duration-hour%: 時間"),u("li",null,"%event-duration-hour2%: 時間 (2桁)"),u("li",null,"%event-duration-min%: 分"),u("li",null,"%event-duration-min2%: 分 (2桁)"),u("li",null,"%event-duration-sec%: 秒"),u("li",null,"%event-duration-sec2%: 秒 (2桁)")])],-1),u("li",null,"%channel-name%: チャンネル名",-1),u("li",null,"%channel-no%: リモコン番号",-1),u("li",null,"%channel-no2%: リモコン番号 (2桁)",-1),u("li",null,"%channel-no3%: リモコン番号 (3桁)",-1),u("li",null,"%event-name%: 番組名",-1),u("li",null,"%event-id%: イベント ID",-1),u("li",null,"%service-name%: サービス名",-1),u("li",null,"%service-id%: サービス ID",-1)]))):f("",!0)]),n(S,{class:"settings__item-form mt-6",color:"primary",variant:"outlined","hide-details":"",density:e.is_form_dense?"compact":"default",label:e.capture_filename_pattern_preview,modelValue:e.settingsStore.settings.capture_filename_pattern,"onUpdate:modelValue":l[4]||(l[4]=i=>e.settingsStore.settings.capture_filename_pattern=i)},null,8,["density","label","modelValue"])]),u("div",U,[l[19]||(l[19]=u("label",{class:"settings__item-heading",for:"capture_copy_to_clipboard"},"キャプチャをクリップボードにコピーする",-1)),l[20]||(l[20]=u("label",{class:"settings__item-label",for:"capture_copy_to_clipboard"},[t(" この設定をオンにすると、撮ったキャプチャ画像がクリップボードにもコピーされます。"),u("br"),t(" クリップボードの履歴をサポートしていない環境では、この設定をオンにしてキャプチャを撮ると、以前のクリップボードが上書きされます。注意してください。"),u("br")],-1)),n(Y,{class:"settings__item-switch",color:"primary",id:"capture_copy_to_clipboard","hide-details":"",modelValue:e.settingsStore.settings.capture_copy_to_clipboard,"onUpdate:modelValue":l[5]||(l[5]=i=>e.settingsStore.settings.capture_copy_to_clipboard=i)},null,8,["modelValue"])])])]),_:1})}const Z=F(V,[["render",I]]);export{Z as default};
