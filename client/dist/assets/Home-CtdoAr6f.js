<<<<<<<< HEAD:client/dist/assets/Home-CkjV5xhX.js
import{d as U,m as $,M as f,U as B,P as T,u as z,_ as L,c as o,a as l,b as t,w as p,r as u,n as h,e as E,f as D,F as v,g as w,v as V,h as g,i as j,j as N,o as a,k as C,l as r,t as d,V as I,p as F,R as b}from"./index-BBRUpL4S.js";import{S as O,a as R}from"./swiper-D3pov0tN.js";import{N as Z,H as X}from"./Navigation-_XQLPAZ2.js";import{S as q}from"./SPHeaderBar-CHVjb1Hw.js";import{C as G,u as J}from"./ChannelsStore-BLv5rBcJ.js";import{V as K}from"./ssrBoot-yw1ENSsS.js";const Q=U({name:"TV-Home",components:{SPHeaderBar:q,HeaderBar:X,Navigation:Z,Swiper:R,SwiperSlide:O},data(){return{Utils:Object.freeze(B),ChannelUtils:Object.freeze(G),ProgramUtils:Object.freeze(T),Message:Object.freeze(f),active_tab_index:0,swiper_instance:null,scroll_abort_controller:new AbortController,is_loading:!0,interval_ids:[]}},computed:{...$(J,z)},watch:{active_tab_index(){var n,e;(n=this.swiper_instance)==null||n.updateAutoHeight(),(e=this.swiper_instance)==null||e.slideTo(this.active_tab_index,this.is_loading===!0?0:void 0)}},async mounted(){var e,c;this.settingsStore.settings.pinned_channel_ids.length===0&&(this.active_tab_index=1);const n=60-new Date().getSeconds();this.interval_ids.push(window.setTimeout(()=>{this.channelsStore.update(!0),this.interval_ids.push(window.setInterval(()=>this.channelsStore.update(!0),30*1e3))},n*1e3)),await this.channelsStore.update(),((e=this.channelsStore.channels_list_with_pinned.get("ピン留め"))==null?void 0:e.length)===0&&(this.active_tab_index=1),(c=this.swiper_instance)==null||c.updateAutoHeight(),window.addEventListener("scroll",()=>{var m;(m=this.swiper_instance)==null||m.updateAutoHeight()},{passive:!0,signal:this.scroll_abort_controller.signal}),await B.sleep(.01),this.is_loading=!1},beforeUnmount(){for(const n of this.interval_ids)window.clearInterval(n);this.scroll_abort_controller.abort(),this.scroll_abort_controller=new AbortController},methods:{addPinnedChannel(n){this.settingsStore.settings.pinned_channel_ids=[...this.settingsStore.settings.pinned_channel_ids,n.id],f.show(`${n.name}をピン留めしました。`)},removePinnedChannel(n){var e;this.settingsStore.settings.pinned_channel_ids=this.settingsStore.settings.pinned_channel_ids.filter(c=>c!==n.id),((e=this.channelsStore.channels_list_with_pinned.get("ピン留め"))==null?void 0:e.length)===0&&(this.active_tab_index=1),f.show(`${n.name}のピン留めを外しました。`)},isPinnedChannel(n){return this.settingsStore.settings.pinned_channel_ids.includes(n.id)}}}),W={class:"route-container"},Y={class:"channels-tab"},ee={class:"channel__broadcaster"},te=["src"],ne={class:"channel__broadcaster-content"},se={class:"channel__broadcaster-name"},ie={class:"channel__broadcaster-status"},ae={class:"ml-1"},oe={class:"channel__broadcaster-status-viewers ml-4"},re={class:"ml-1"},le=["onClick"],ue={class:"channel__program-present"},de={class:"channel__program-present-title-wrapper"},ce=["innerHTML"],_e={class:"channel__program-present-time"},pe=["innerHTML"],he={class:"channel__program-following"},ge={class:"channel__program-following-title"},me=["innerHTML"],fe={class:"channel__program-following-time"},ve={class:"channel__progressbar"},we={key:0,class:"pinned-container d-flex justify-center align-center w-100"},Ce={class:"d-flex justify-center align-center flex-column"},be={class:"mt-4 text-text-darken-1"},Se={key:0,class:"channels-list pinned-container d-flex justify-center align-center w-100",style:{"flex-grow":"1"}},Be={class:"floating-button__content"};function Ee(n,e,c,m,De,Fe){const y=u("HeaderBar"),P=u("Navigation"),x=u("SPHeaderBar"),A=u("router-link"),S=u("Icon"),k=u("SwiperSlide"),H=u("Swiper"),M=N("ftooltip");return a(),o("div",W,[l(y),t("main",null,[l(P),t("div",{class:h(["channels-container channels-container--home",{"channels-container--loading":n.is_loading}])},[l(x),t("div",Y,[t("div",{class:"channels-tab__buttons",style:D({"--tab-length":Array.from(n.channelsStore.channels_list_with_pinned).length,"--active-tab-index":n.active_tab_index})},[(a(!0),o(v,null,w(Array.from(n.channelsStore.channels_list_with_pinned),([i],_)=>(a(),C(I,{variant:"flat",class:"channels-tab__button",key:i,onClick:s=>n.active_tab_index=_},{default:g(()=>[r(d(i),1)]),_:2},1032,["onClick"]))),128)),e[4]||(e[4]=t("div",{class:"channels-tab__highlight"},null,-1))],4)]),p(l(H,{class:"channels-list","space-between":32,"auto-height":!0,"touch-start-prevent-default":!1,observer:!0,"observe-parents":!0,onSwiper:e[1]||(e[1]=i=>n.swiper_instance=i),onSlideChange:e[2]||(e[2]=i=>n.active_tab_index=i.activeIndex)},{default:g(()=>[(a(!0),o(v,null,w(Array.from(n.channelsStore.channels_list_with_pinned),([i,_])=>(a(),C(k,{key:i},{default:g(()=>[t("div",{class:h(["channels",`channels--tab-${i} channels--length-${_.length}`])},[(a(!0),o(v,null,w(_,s=>p((a(),C(A,{class:"channel",draggable:"false",key:s.id,to:`/tv/watch/${s.display_channel_id}`},{default:g(()=>[t("div",ee,[t("img",{class:"channel__broadcaster-icon",loading:"lazy",decoding:"async",src:`${n.Utils.api_base_url}/channels/${s.id}/logo`},null,8,te),t("div",ne,[t("span",se,"Ch: "+d(s.channel_number)+" "+d(s.name),1),t("div",ie,[t("div",{class:h(["channel__broadcaster-status-force",`channel__broadcaster-status-force--${n.ChannelUtils.getChannelForceType(s.jikkyo_force)}`])},[e[5]||(e[5]=t("svg",{class:"iconify iconify--fa-solid",width:"10.5px",height:"12px",viewBox:"0 0 448 512"},[t("path",{fill:"currentColor",d:"M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0C69.74 91.17 0 209.96 0 281.6C0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416C154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75c6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97c27.35 52.19 15.81 118.97-33.43 153.42z"})],-1)),e[6]||(e[6]=t("span",{class:"ml-1"},"勢い:",-1)),t("span",ae,d(s.jikkyo_force??"--"),1),e[7]||(e[7]=t("span",{style:{"margin-left":"3px"}}," コメ/分",-1))],2),t("div",oe,[e[8]||(e[8]=t("svg",{class:"iconify iconify--fa-solid",width:"15.75px",height:"14px",viewBox:"0 0 576 512"},[t("path",{fill:"currentColor",d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144a143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79a47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"})],-1)),e[9]||(e[9]=t("span",{class:"ml-1"},"視聴数:",-1)),t("span",re,d(s.viewer_count),1)])])]),p((a(),o("div",{class:h(["channel__broadcaster-pin",{"channel__broadcaster-pin--pinned":n.isPinnedChannel(s)}]),onClick:F(ye=>n.isPinnedChannel(s)?n.removePinnedChannel(s):n.addPinnedChannel(s),["prevent","stop"]),onMousedown:e[0]||(e[0]=F(()=>{},["prevent","stop"]))},e[10]||(e[10]=[t("svg",{class:"iconify iconify--fluent",width:"24px",height:"24px",viewBox:"0 0 20 20"},[t("path",{fill:"currentColor",d:"M13.325 2.617a2 2 0 0 0-3.203.52l-1.73 3.459a1.5 1.5 0 0 1-.784.721l-3.59 1.436a1 1 0 0 0-.335 1.636L6.293 13L3 16.292V17h.707L7 13.706l2.61 2.61a1 1 0 0 0 1.636-.335l1.436-3.59a1.5 1.5 0 0 1 .722-.784l3.458-1.73a2 2 0 0 0 .52-3.203l-4.057-4.057Z"})],-1)]),42,le)),[[b],[M,n.isPinnedChannel(s)?"ピン留めを外す":"ピン留めする"]])]),t("div",ue,[t("div",de,[t("span",{class:"channel__program-present-title",innerHTML:n.ProgramUtils.decorateProgramInfo(s.program_present,"title")},null,8,ce),t("span",_e,d(n.ProgramUtils.getProgramTime(s.program_present)),1)]),t("span",{class:"channel__program-present-description",innerHTML:n.ProgramUtils.decorateProgramInfo(s.program_present,"description")},null,8,pe)]),l(K),t("div",he,[t("div",ge,[e[11]||(e[11]=t("span",{class:"channel__program-following-title-decorate"},"NEXT",-1)),e[12]||(e[12]=t("svg",{class:"channel__program-following-title-icon iconify iconify--fluent",width:"16px",height:"16px",viewBox:"0 0 20 20"},[t("path",{fill:"currentColor",d:"M10.018 5.486a1 1 0 0 1 1.592-.806l5.88 4.311a1.25 1.25 0 0 1 0 2.017l-5.88 4.311a1 1 0 0 1-1.592-.806v-3.16L4.61 15.319a1 1 0 0 1-1.592-.806V5.486A1 1 0 0 1 4.61 4.68l5.408 3.966v-3.16Z"})],-1)),t("span",{class:"channel__program-following-title-text",innerHTML:n.ProgramUtils.decorateProgramInfo(s.program_following,"title")},null,8,me)]),t("span",fe,d(n.ProgramUtils.getProgramTime(s.program_following)),1)]),t("div",ve,[t("div",{class:"channel__progressbar-progress",style:D(`width:${n.ProgramUtils.getProgramProgress(s.program_present)}%;`)},null,4)])]),_:2},1032,["to"])),[[b]])),128)),i==="ピン留め"&&_.length===0?(a(),o("div",we,[t("div",Ce,[e[17]||(e[17]=t("h2",null,[r("ピン留めされているチャンネルが"),t("br"),r("ありません。")],-1)),t("div",be,[e[13]||(e[13]=r("各チャンネルの ")),l(S,{style:{position:"relative",bottom:"-5px"},icon:"fluent:pin-20-filled",width:"22px"}),e[14]||(e[14]=r(" アイコンから、よくみる")),e[15]||(e[15]=t("br",null,null,-1)),e[16]||(e[16]=r("チャンネルをこのタブにピン留めできます。"))]),e[18]||(e[18]=t("div",{class:"mt-2 text-text-darken-1"},[r("チャンネルをピン留めすると、"),t("br"),r("このタブが最初に表示されます。")],-1))])])):E("",!0)],2)]),_:2},1024))),128))]),_:1},512),[[V,Array.from(n.channelsStore.channels_list_with_pinned).length>0]]),Array.from(n.channelsStore.channels_list_with_pinned).length===0?(a(),o("div",Se,e[19]||(e[19]=[j('<div class="d-flex justify-center align-center flex-column" data-v-d4fd792d><h2 data-v-d4fd792d>視聴可能なチャンネルが<br class="d-sm-none" data-v-d4fd792d>ありません。</h2><div class="mt-4 text-text-darken-1" data-v-d4fd792d>前回チャンネルスキャンしたときに<br class="d-sm-none" data-v-d4fd792d>受信可能なチャンネルを見つけられませんでした。</div><div class="mt-1 text-text-darken-1" data-v-d4fd792d>再度チャンネルスキャンを行ってください。</div></div>',1)]))):E("",!0)],2)]),p((a(),o("div",{class:"floating-button",onClick:e[3]||(e[3]=i=>n.Message.warning("番組表は現在開発中です。"))},[t("div",Be,[l(S,{class:"floating-button__icon",icon:"fluent:calendar-20-regular",width:"26px"}),e[20]||(e[20]=t("div",{class:"floating-button__text"},"番組表",-1))])])),[[b]])])}const Ue=L(Q,[["render",Ee],["__scopeId","data-v-d4fd792d"]]);export{Ue as default};
========
import{d as U,m as $,M as f,U as B,P as T,u as z,_ as L,c as o,a as l,b as t,w as p,r as u,n as h,e as E,f as D,F as v,g as w,v as V,h as g,i as j,j as N,o as a,k as b,l as r,t as d,V as I,p as F,R as C}from"./index-CYWMZUuQ.js";import{S as O,a as R}from"./swiper-K7FxAGWS.js";import{N as Z,H as X}from"./Navigation-_lN4rKee.js";import{S as q}from"./SPHeaderBar-DvQkDGxj.js";import{C as G,u as J}from"./ChannelsStore-vPFdc9el.js";import{V as K}from"./ssrBoot-KQceIYXz.js";const Q=U({name:"TV-Home",components:{SPHeaderBar:q,HeaderBar:X,Navigation:Z,Swiper:R,SwiperSlide:O},data(){return{Utils:Object.freeze(B),ChannelUtils:Object.freeze(G),ProgramUtils:Object.freeze(T),Message:Object.freeze(f),active_tab_index:0,swiper_instance:null,scroll_abort_controller:new AbortController,is_loading:!0,interval_ids:[]}},computed:{...$(J,z)},watch:{active_tab_index(){var n,e;(n=this.swiper_instance)==null||n.updateAutoHeight(),(e=this.swiper_instance)==null||e.slideTo(this.active_tab_index,this.is_loading===!0?0:void 0)}},async mounted(){var e,c;this.settingsStore.settings.pinned_channel_ids.length===0&&(this.active_tab_index=1);const n=60-new Date().getSeconds();this.interval_ids.push(window.setTimeout(()=>{this.channelsStore.update(!0),this.interval_ids.push(window.setInterval(()=>this.channelsStore.update(!0),30*1e3))},n*1e3)),await this.channelsStore.update(),((e=this.channelsStore.channels_list_with_pinned.get("ピン留め"))==null?void 0:e.length)===0&&(this.active_tab_index=1),(c=this.swiper_instance)==null||c.updateAutoHeight(),window.addEventListener("scroll",()=>{var m;(m=this.swiper_instance)==null||m.updateAutoHeight()},{passive:!0,signal:this.scroll_abort_controller.signal}),await B.sleep(.01),this.is_loading=!1},beforeUnmount(){for(const n of this.interval_ids)window.clearInterval(n);this.scroll_abort_controller.abort(),this.scroll_abort_controller=new AbortController},methods:{addPinnedChannel(n){this.settingsStore.settings.pinned_channel_ids=[...this.settingsStore.settings.pinned_channel_ids,n.id],f.show(`${n.name}をピン留めしました。`)},removePinnedChannel(n){var e;this.settingsStore.settings.pinned_channel_ids=this.settingsStore.settings.pinned_channel_ids.filter(c=>c!==n.id),((e=this.channelsStore.channels_list_with_pinned.get("ピン留め"))==null?void 0:e.length)===0&&(this.active_tab_index=1),f.show(`${n.name}のピン留めを外しました。`)},isPinnedChannel(n){return this.settingsStore.settings.pinned_channel_ids.includes(n.id)}}}),W={class:"route-container"},Y={class:"channels-tab"},ee={class:"channel__broadcaster"},te=["src"],ne={class:"channel__broadcaster-content"},se={class:"channel__broadcaster-name"},ie={class:"channel__broadcaster-status"},ae={class:"ml-1"},oe={class:"channel__broadcaster-status-viewers ml-4"},re={class:"ml-1"},le=["onClick"],ue={class:"channel__program-present"},de={class:"channel__program-present-title-wrapper"},ce=["innerHTML"],_e={class:"channel__program-present-time"},pe=["innerHTML"],he={class:"channel__program-following"},ge={class:"channel__program-following-title"},me=["innerHTML"],fe={class:"channel__program-following-time"},ve={class:"channel__progressbar"},we={key:0,class:"pinned-container d-flex justify-center align-center w-100"},be={class:"d-flex justify-center align-center flex-column"},Ce={class:"mt-4 text-text-darken-1"},Se={key:0,class:"channels-list pinned-container d-flex justify-center align-center w-100",style:{"flex-grow":"1"}},Be={class:"floating-button__content"};function Ee(n,e,c,m,De,Fe){const y=u("HeaderBar"),P=u("Navigation"),x=u("SPHeaderBar"),A=u("router-link"),S=u("Icon"),k=u("SwiperSlide"),H=u("Swiper"),M=N("ftooltip");return a(),o("div",W,[l(y),t("main",null,[l(P),t("div",{class:h(["channels-container channels-container--home",{"channels-container--loading":n.is_loading}])},[l(x),t("div",Y,[t("div",{class:"channels-tab__buttons",style:D({"--tab-length":Array.from(n.channelsStore.channels_list_with_pinned).length,"--active-tab-index":n.active_tab_index})},[(a(!0),o(v,null,w(Array.from(n.channelsStore.channels_list_with_pinned),([i],_)=>(a(),b(I,{variant:"flat",class:"channels-tab__button",key:i,onClick:s=>n.active_tab_index=_},{default:g(()=>[r(d(i),1)]),_:2},1032,["onClick"]))),128)),e[4]||(e[4]=t("div",{class:"channels-tab__highlight"},null,-1))],4)]),p(l(H,{class:"channels-list","space-between":32,"auto-height":!0,"touch-start-prevent-default":!1,observer:!0,"observe-parents":!0,onSwiper:e[1]||(e[1]=i=>n.swiper_instance=i),onSlideChange:e[2]||(e[2]=i=>n.active_tab_index=i.activeIndex)},{default:g(()=>[(a(!0),o(v,null,w(Array.from(n.channelsStore.channels_list_with_pinned),([i,_])=>(a(),b(k,{key:i},{default:g(()=>[t("div",{class:h(["channels",`channels--tab-${i} channels--length-${_.length}`])},[(a(!0),o(v,null,w(_,s=>p((a(),b(A,{class:"channel",draggable:"false",key:s.id,to:`/tv/watch/${s.display_channel_id}`},{default:g(()=>[t("div",ee,[t("img",{class:"channel__broadcaster-icon",loading:"lazy",decoding:"async",src:`${n.Utils.api_base_url}/channels/${s.id}/logo`},null,8,te),t("div",ne,[t("span",se,"Ch: "+d(s.channel_number)+" "+d(s.name),1),t("div",ie,[t("div",{class:h(["channel__broadcaster-status-force",`channel__broadcaster-status-force--${n.ChannelUtils.getChannelForceType(s.jikkyo_force)}`])},[e[5]||(e[5]=t("svg",{class:"iconify iconify--fa-solid",width:"10.5px",height:"12px",viewBox:"0 0 448 512"},[t("path",{fill:"currentColor",d:"M323.56 51.2c-20.8 19.3-39.58 39.59-56.22 59.97C240.08 73.62 206.28 35.53 168 0C69.74 91.17 0 209.96 0 281.6C0 408.85 100.29 512 224 512s224-103.15 224-230.4c0-53.27-51.98-163.14-124.44-230.4zm-19.47 340.65C282.43 407.01 255.72 416 226.86 416C154.71 416 96 368.26 96 290.75c0-38.61 24.31-72.63 72.79-130.75c6.93 7.98 98.83 125.34 98.83 125.34l58.63-66.88c4.14 6.85 7.91 13.55 11.27 19.97c27.35 52.19 15.81 118.97-33.43 153.42z"})],-1)),e[6]||(e[6]=t("span",{class:"ml-1"},"勢い:",-1)),t("span",ae,d(s.jikkyo_force??"--"),1),e[7]||(e[7]=t("span",{style:{"margin-left":"3px"}}," コメ/分",-1))],2),t("div",oe,[e[8]||(e[8]=t("svg",{class:"iconify iconify--fa-solid",width:"15.75px",height:"14px",viewBox:"0 0 576 512"},[t("path",{fill:"currentColor",d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144a143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79a47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"})],-1)),e[9]||(e[9]=t("span",{class:"ml-1"},"視聴数:",-1)),t("span",re,d(s.viewer_count),1)])])]),p((a(),o("div",{class:h(["channel__broadcaster-pin",{"channel__broadcaster-pin--pinned":n.isPinnedChannel(s)}]),onClick:F(ye=>n.isPinnedChannel(s)?n.removePinnedChannel(s):n.addPinnedChannel(s),["prevent","stop"]),onMousedown:e[0]||(e[0]=F(()=>{},["prevent","stop"]))},e[10]||(e[10]=[t("svg",{class:"iconify iconify--fluent",width:"24px",height:"24px",viewBox:"0 0 20 20"},[t("path",{fill:"currentColor",d:"M13.325 2.617a2 2 0 0 0-3.203.52l-1.73 3.459a1.5 1.5 0 0 1-.784.721l-3.59 1.436a1 1 0 0 0-.335 1.636L6.293 13L3 16.292V17h.707L7 13.706l2.61 2.61a1 1 0 0 0 1.636-.335l1.436-3.59a1.5 1.5 0 0 1 .722-.784l3.458-1.73a2 2 0 0 0 .52-3.203l-4.057-4.057Z"})],-1)]),42,le)),[[C],[M,n.isPinnedChannel(s)?"ピン留めを外す":"ピン留めする"]])]),t("div",ue,[t("div",de,[t("span",{class:"channel__program-present-title",innerHTML:n.ProgramUtils.decorateProgramInfo(s.program_present,"title")},null,8,ce),t("span",_e,d(n.ProgramUtils.getProgramTime(s.program_present)),1)]),t("span",{class:"channel__program-present-description",innerHTML:n.ProgramUtils.decorateProgramInfo(s.program_present,"description")},null,8,pe)]),l(K),t("div",he,[t("div",ge,[e[11]||(e[11]=t("span",{class:"channel__program-following-title-decorate"},"NEXT",-1)),e[12]||(e[12]=t("svg",{class:"channel__program-following-title-icon iconify iconify--fluent",width:"16px",height:"16px",viewBox:"0 0 20 20"},[t("path",{fill:"currentColor",d:"M10.018 5.486a1 1 0 0 1 1.592-.806l5.88 4.311a1.25 1.25 0 0 1 0 2.017l-5.88 4.311a1 1 0 0 1-1.592-.806v-3.16L4.61 15.319a1 1 0 0 1-1.592-.806V5.486A1 1 0 0 1 4.61 4.68l5.408 3.966v-3.16Z"})],-1)),t("span",{class:"channel__program-following-title-text",innerHTML:n.ProgramUtils.decorateProgramInfo(s.program_following,"title")},null,8,me)]),t("span",fe,d(n.ProgramUtils.getProgramTime(s.program_following)),1)]),t("div",ve,[t("div",{class:"channel__progressbar-progress",style:D(`width:${n.ProgramUtils.getProgramProgress(s.program_present)}%;`)},null,4)])]),_:2},1032,["to"])),[[C]])),128)),i==="ピン留め"&&_.length===0?(a(),o("div",we,[t("div",be,[e[17]||(e[17]=t("h2",null,[r("ピン留めされているチャンネルが"),t("br"),r("ありません。")],-1)),t("div",Ce,[e[13]||(e[13]=r("各チャンネルの ")),l(S,{style:{position:"relative",bottom:"-5px"},icon:"fluent:pin-20-filled",width:"22px"}),e[14]||(e[14]=r(" アイコンから、よくみる")),e[15]||(e[15]=t("br",null,null,-1)),e[16]||(e[16]=r("チャンネルをこのタブにピン留めできます。"))]),e[18]||(e[18]=t("div",{class:"mt-2 text-text-darken-1"},[r("チャンネルをピン留めすると、"),t("br"),r("このタブが最初に表示されます。")],-1))])])):E("",!0)],2)]),_:2},1024))),128))]),_:1},512),[[V,Array.from(n.channelsStore.channels_list_with_pinned).length>0]]),Array.from(n.channelsStore.channels_list_with_pinned).length===0?(a(),o("div",Se,e[19]||(e[19]=[j('<div class="d-flex justify-center align-center flex-column" data-v-2bca97df><h2 data-v-2bca97df>視聴可能なチャンネルが<br class="d-sm-none" data-v-2bca97df>ありません。</h2><div class="mt-4 text-text-darken-1" data-v-2bca97df>前回チャンネルスキャンしたときに<br class="d-sm-none" data-v-2bca97df>受信可能なチャンネルを見つけられませんでした。</div><div class="mt-1 text-text-darken-1" data-v-2bca97df>再度チャンネルスキャンを行ってください。</div></div>',1)]))):E("",!0)],2)]),p((a(),o("div",{class:"floating-button",onClick:e[3]||(e[3]=i=>n.Message.warning("番組表は現在開発中です。"))},[t("div",Be,[l(S,{class:"floating-button__icon",icon:"fluent:calendar-20-regular",width:"26px"}),e[20]||(e[20]=t("div",{class:"floating-button__text"},"番組表",-1))])])),[[C]])])}const Ue=L(Q,[["render",Ee],["__scopeId","data-v-2bca97df"]]);export{Ue as default};
>>>>>>>> master:client/dist/assets/Home-CtdoAr6f.js
