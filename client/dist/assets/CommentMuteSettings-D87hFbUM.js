import{d as F,m as A,q as f,_ as v,b,e as l,h as D,i as r,j as t,g,f as _,k as u,V as C,x as h,F as E,R as B,p as w,l as V,A as n}from"./index-D1pPoUQX.js";import{V as y}from"./VDialog--f3q-_Tw.js";import{V as S,a as k}from"./VCard-DMxq5Edi.js";import{V as U}from"./ssrBoot-DILBilM8.js";import{c}from"./VChip-Be4Pujmy.js";import{c as p}from"./VTextField-BhuSVEpd.js";import{c as $}from"./VSelect-BE06p-ey.js";const x=F({name:"CommentMuteSettings",props:{modelValue:{type:Boolean,required:!0}},emits:{"update:modelValue":e=>!0},data(){return{comment_mute_settings_modal:!1,muted_comment_keyword_match_type:[{title:"部分一致",value:"partial"},{title:"前方一致",value:"forward"},{title:"後方一致",value:"backward"},{title:"完全一致",value:"exact"},{title:"正規表現",value:"regex"}]}},computed:{...A(f)},watch:{modelValue(){this.comment_mute_settings_modal=this.modelValue},comment_mute_settings_modal(){this.$emit("update:modelValue",this.comment_mute_settings_modal)}}}),o=e=>(w("data-v-0638398d"),e=e(),V(),e),I=o(()=>u("span",{class:"ml-3"},"コメントのミュート設定",-1)),M={class:"px-5 pb-6"},Z={class:"text-subtitle-1 d-flex align-center font-weight-bold mt-4"},j=o(()=>u("span",{class:"ml-2"},"クイック設定",-1)),z={class:"settings__item settings__item--switch"},H=o(()=>u("label",{class:"settings__item-heading",for:"mute_vulgar_comments"}," 露骨な表現を含むコメントをミュートする ",-1)),L=o(()=>u("label",{class:"settings__item-label",for:"mute_vulgar_comments"},[n(" 性的な単語などの露骨・下品な表現を含むコメントを、一括でミュートするかを設定します。"),u("br")],-1)),N={class:"settings__item settings__item--switch"},T=o(()=>u("label",{class:"settings__item-heading",for:"mute_abusive_discriminatory_prejudiced_comments"}," ネガティブな表現、差別的な表現、政治的に偏った表現を含むコメントをミュートする ",-1)),q=o(()=>u("label",{class:"settings__item-label",for:"mute_abusive_discriminatory_prejudiced_comments"},[n(" 『死ね』『殺す』などのネガティブな表現、特定の国や人々への差別的な表現、政治的に偏った表現を含むコメントを、一括でミュートするかを設定します。"),u("br")],-1)),O={class:"settings__item settings__item--switch"},R=o(()=>u("label",{class:"settings__item-heading",for:"mute_big_size_comments"}," 文字サイズが大きいコメントをミュートする ",-1)),G=o(()=>u("label",{class:"settings__item-label",for:"mute_big_size_comments"},[n(" 通常より大きい文字サイズで表示されるコメントを、一括でミュートするかを設定します。"),u("br"),n(" 文字サイズが大きいコメントには迷惑なコメントが多いです。基本的にはオンにしておくのがおすすめです。"),u("br")],-1)),J={class:"settings__item settings__item--switch"},K=o(()=>u("label",{class:"settings__item-heading",for:"mute_fixed_comments"}," 映像の上下に固定表示されるコメントをミュートする ",-1)),P=o(()=>u("label",{class:"settings__item-label",for:"mute_fixed_comments"},[n(" 映像の上下に固定された状態で表示されるコメントを、一括でミュートするかを設定します。"),u("br"),n(" 固定表示されるコメントが煩わしい方におすすめです。"),u("br")],-1)),Q={class:"settings__item settings__item--switch"},W=o(()=>u("label",{class:"settings__item-heading",for:"mute_colored_comments"}," 色付きのコメントをミュートする ",-1)),X=o(()=>u("label",{class:"settings__item-label",for:"mute_colored_comments"},[n(" 白以外の色で表示される色付きのコメントを、一括でミュートするかを設定します。"),u("br"),n(" この設定をオンにしておくと、目立つ色のコメントを一掃できます。"),u("br")],-1)),Y={class:"settings__item settings__item--switch"},uu=o(()=>u("label",{class:"settings__item-heading",for:"mute_consecutive_same_characters_comments"}," 8文字以上同じ文字が連続しているコメントをミュートする ",-1)),eu=o(()=>u("label",{class:"settings__item-label",for:"mute_consecutive_same_characters_comments"},[n(" 『wwwwwwwwwww』『あばばばばばばばばば』など、8文字以上同じ文字が連続しているコメントを、一括でミュートするかを設定します。"),u("br"),n(" しばしばあるテンプレコメントが煩わしい方におすすめです。"),u("br")],-1)),tu={class:"text-subtitle-1 d-flex align-center font-weight-bold mt-4"},su=o(()=>u("span",{class:"ml-2 mr-2"},"ミュート済みのキーワード",-1)),iu=o(()=>u("span",{class:"ml-1"},"追加",-1)),ou={class:"muted-comment-items"},nu=["onClick"],mu=o(()=>u("svg",{class:"iconify iconify--fluent",width:"20px",height:"20px",viewBox:"0 0 16 16"},[u("path",{fill:"currentColor",d:"M7 3h2a1 1 0 0 0-2 0ZM6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1h4Zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5ZM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Z"})],-1)),lu=[mu],au={class:"text-subtitle-1 d-flex align-center font-weight-bold mt-4"},du=o(()=>u("span",{class:"ml-2 mr-2"},"ミュート済みのニコニコユーザー ID",-1)),_u=o(()=>u("span",{class:"ml-1"},"追加",-1)),cu={class:"muted-comment-items"},ru=["onClick"],gu=o(()=>u("svg",{class:"iconify iconify--fluent",width:"20px",height:"20px",viewBox:"0 0 16 16"},[u("path",{fill:"currentColor",d:"M7 3h2a1 1 0 0 0-2 0ZM6 3a2 2 0 1 1 4 0h4a.5.5 0 0 1 0 1h-.564l-1.205 8.838A2.5 2.5 0 0 1 9.754 15H6.246a2.5 2.5 0 0 1-2.477-2.162L2.564 4H2a.5.5 0 0 1 0-1h4Zm1 3.5a.5.5 0 0 0-1 0v5a.5.5 0 0 0 1 0v-5ZM9.5 6a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.5-.5Z"})],-1)),Bu=[gu];function Cu(e,s,hu,Eu,pu,Fu){const a=b("Icon");return l(),D(y,{"max-width":"770",transition:"slide-y-transition",modelValue:e.comment_mute_settings_modal,"onUpdate:modelValue":s[9]||(s[9]=i=>e.comment_mute_settings_modal=i)},{default:r(()=>[t(k,{class:"comment-mute-settings"},{default:r(()=>[t(S,{class:"px-5 pt-6 pb-3 d-flex align-center font-weight-bold",style:{height:"60px"}},{default:r(()=>[t(a,{icon:"heroicons-solid:filter",height:"26px"}),I,t(U),g((l(),_("div",{class:"d-flex align-center rounded-circle cursor-pointer px-2 py-2",onClick:s[0]||(s[0]=i=>e.comment_mute_settings_modal=!1)},[t(a,{icon:"fluent:dismiss-12-filled",width:"23px",height:"23px"})])),[[B]])]),_:1}),u("div",M,[u("div",Z,[t(a,{icon:"fa-solid:sliders-h",width:"24px",height:"20px"}),j]),u("div",z,[H,L,t(c,{class:"settings__item-switch",color:"primary",id:"mute_vulgar_comments","hide-details":"",modelValue:e.settingsStore.settings.mute_vulgar_comments,"onUpdate:modelValue":s[1]||(s[1]=i=>e.settingsStore.settings.mute_vulgar_comments=i)},null,8,["modelValue"])]),u("div",N,[T,q,t(c,{class:"settings__item-switch",color:"primary",id:"mute_abusive_discriminatory_prejudiced_comments","hide-details":"",modelValue:e.settingsStore.settings.mute_abusive_discriminatory_prejudiced_comments,"onUpdate:modelValue":s[2]||(s[2]=i=>e.settingsStore.settings.mute_abusive_discriminatory_prejudiced_comments=i)},null,8,["modelValue"])]),u("div",O,[R,G,t(c,{class:"settings__item-switch",color:"primary",id:"mute_big_size_comments","hide-details":"",modelValue:e.settingsStore.settings.mute_big_size_comments,"onUpdate:modelValue":s[3]||(s[3]=i=>e.settingsStore.settings.mute_big_size_comments=i)},null,8,["modelValue"])]),u("div",J,[K,P,t(c,{class:"settings__item-switch",color:"primary",id:"mute_fixed_comments","hide-details":"",modelValue:e.settingsStore.settings.mute_fixed_comments,"onUpdate:modelValue":s[4]||(s[4]=i=>e.settingsStore.settings.mute_fixed_comments=i)},null,8,["modelValue"])]),u("div",Q,[W,X,t(c,{class:"settings__item-switch",color:"primary",id:"mute_colored_comments","hide-details":"",modelValue:e.settingsStore.settings.mute_colored_comments,"onUpdate:modelValue":s[5]||(s[5]=i=>e.settingsStore.settings.mute_colored_comments=i)},null,8,["modelValue"])]),u("div",Y,[uu,eu,t(c,{class:"settings__item-switch",color:"primary",id:"mute_consecutive_same_characters_comments","hide-details":"",modelValue:e.settingsStore.settings.mute_consecutive_same_characters_comments,"onUpdate:modelValue":s[6]||(s[6]=i=>e.settingsStore.settings.mute_consecutive_same_characters_comments=i)},null,8,["modelValue"])]),u("div",tu,[t(a,{icon:"fluent:comment-dismiss-20-filled",width:"24px"}),su,t(C,{class:"ml-auto",color:"background-lighten-1",variant:"flat",onClick:s[7]||(s[7]=i=>e.settingsStore.settings.muted_comment_keywords.unshift({match:"partial",pattern:""}))},{default:r(()=>[t(a,{icon:"fluent:add-12-filled",height:"17px"}),iu]),_:1})]),u("div",ou,[(l(!0),_(E,null,h(e.settingsStore.settings.muted_comment_keywords,(i,m)=>(l(),_("div",{class:"muted-comment-item",key:m},[t(p,{type:"search",class:"muted-comment-item__input",color:"primary",density:"compact",variant:"outlined","hide-details":"",placeholder:"ミュートするキーワードを入力",modelValue:e.settingsStore.settings.muted_comment_keywords[m].pattern,"onUpdate:modelValue":d=>e.settingsStore.settings.muted_comment_keywords[m].pattern=d},null,8,["modelValue","onUpdate:modelValue"]),t($,{class:"muted-comment-item__match-type",color:"primary",density:"compact",variant:"outlined","hide-details":"",items:e.muted_comment_keyword_match_type,modelValue:e.settingsStore.settings.muted_comment_keywords[m].match,"onUpdate:modelValue":d=>e.settingsStore.settings.muted_comment_keywords[m].match=d},null,8,["items","modelValue","onUpdate:modelValue"]),g((l(),_("button",{class:"muted-comment-item__delete-button",onClick:d=>e.settingsStore.settings.muted_comment_keywords.splice(e.settingsStore.settings.muted_comment_keywords.indexOf(i),1)},lu,8,nu)),[[B]])]))),128))]),u("div",au,[t(a,{icon:"fluent:person-prohibited-20-filled",width:"24px"}),du,t(C,{class:"ml-auto",color:"background-lighten-1",variant:"flat",onClick:s[8]||(s[8]=i=>e.settingsStore.settings.muted_niconico_user_ids.unshift(""))},{default:r(()=>[t(a,{icon:"fluent:add-12-filled",height:"17px"}),_u]),_:1})]),u("div",cu,[(l(!0),_(E,null,h(e.settingsStore.settings.muted_niconico_user_ids,(i,m)=>(l(),_("div",{class:"muted-comment-item",key:m},[t(p,{type:"search",class:"muted-comment-item__input",color:"primary",density:"compact",variant:"outlined","hide-details":"",placeholder:"ミュートするニコニコユーザー ID を入力",modelValue:e.settingsStore.settings.muted_niconico_user_ids[m],"onUpdate:modelValue":d=>e.settingsStore.settings.muted_niconico_user_ids[m]=d},null,8,["modelValue","onUpdate:modelValue"]),g((l(),_("button",{class:"muted-comment-item__delete-button",onClick:d=>e.settingsStore.settings.muted_niconico_user_ids.splice(e.settingsStore.settings.muted_niconico_user_ids.indexOf(i),1)},Bu,8,ru)),[[B]])]))),128))])])]),_:1})]),_:1},8,["modelValue"])}const yu=v(x,[["render",Cu],["__scopeId","data-v-0638398d"]]);export{yu as C};
