var Le=Object.defineProperty,Fe=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var de=Object.getOwnPropertySymbols;var be=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable;var te=(e,n,a)=>n in e?Le(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,ne=(e,n)=>{for(var a in n||(n={}))be.call(n,a)&&te(e,a,n[a]);if(de)for(var a of de(n))Be.call(n,a)&&te(e,a,n[a]);return e},pe=(e,n)=>Fe(e,Ie(n));var V=(e,n,a)=>(te(e,typeof n!="symbol"?n+"":n,a),a);import{d as ae,r as k,m as y,c as w,a as l,w as c,b as g,o as O,e as b,t as M,f as p,g as se,$ as C,S as Ue,L as Me,V as Ge,h as Je,i as He,D as Ve,l as Ke,M as xe,j as K,F as ge,k as ve,n as ze,p as je,q as Xe,s as Ye,u as qe,A as We}from"./vendor.d0afe1c7.js";const Ze=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const v of d.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&s(v)}).observe(document,{childList:!0,subtree:!0});function a(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerpolicy&&(d.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?d.credentials="include":o.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(o){if(o.ep)return;o.ep=!0;const d=a(o);fetch(o.href,d)}};Ze();var x;(function(e){e[e.SEARCH_RESULT=0]="SEARCH_RESULT",e[e.RESULT_TARGET_PAGE=1]="RESULT_TARGET_PAGE"})(x||(x={}));var B;(function(e){e[e.OPEN=0]="OPEN",e[e.CLOSE=1]="CLOSE"})(B||(B={}));var Qe=ae({props:["maxStep","restStep","appStatus"],setup(e,n){const{emit:a}=n,s=k(""),o=()=>{if(!s.value)return y.warn("\u8BF7\u8F93\u5165\u95EE\u9898\u7F16\u53F7"),!1;a("toggleAppStatus")},d=v=>{s.value=v.target.value};return window.__setTopic=v=>{s.value=v},window.__getTopic=()=>s.value,{toggleAppStatus:o,APP_STATUS:B,topicInput:s,onTopicInputChange:d}}}),he=(e,n)=>{const a=e.__vccOpts||e;for(const[s,o]of n)a[s]=o;return a};const et={style:{display:"flex","align-items":"center"}},tt=b(" \xA0\xA0 "),nt=b(" \xA0\xA0 ");function at(e,n,a,s,o,d){const v=g("a-tag"),D=g("a-input"),T=g("a-switch"),m=g("a-statistic"),f=g("a-row"),N=g("a-divider"),P=g("a-page-header");return O(),w("div",null,[l(P,{title:"\u8BB0\u5F55\u5DE5\u5177","sub-title":"\u8F85\u52A9\u8BB0\u5F55\u641C\u7D22\u884C\u4E3A"},{tags:c(()=>[l(v,{color:e.appStatus===e.APP_STATUS.OPEN?"green":"grey"},{default:c(()=>[b(M(e.appStatus===e.APP_STATUS.OPEN?"\u8BB0\u5F55\u4E2D":"\u672A\u5F00\u542F"),1)]),_:1},8,["color"])]),extra:c(()=>[p("div",et,[l(D,{onChange:e.onTopicInputChange,disabled:e.appStatus===e.APP_STATUS.OPEN,value:e.topicInput,class:"topic-input",placeholder:"\u8F93\u5165\u95EE\u9898\u7F16\u53F7",style:{width:"180px"}},null,8,["onChange","disabled","value"]),tt,l(T,{checked:e.appStatus===e.APP_STATUS.OPEN,onClick:e.toggleAppStatus},null,8,["checked","onClick"]),nt,p("span",null,M(e.appStatus===e.APP_STATUS.OPEN?"\u8BB0\u5F55\u4E2D":"\u672A\u5F00\u542F\u8BB0\u5F55"),1)])]),default:c(()=>[l(f,{type:"flex"},{default:c(()=>[l(m,{title:"\u5269\u4F59\u64CD\u4F5C\u6B65\u9AA4",value:`${e.restStep} / ${e.maxStep}`},null,8,["value"])]),_:1}),l(N)]),_:1})])}var st=he(Qe,[["render",at]]);const ot="http://eroo.club:3001",oe=e=>`${ot}${e}`,ut=async e=>(await se.get(`${oe("/search")}?keyword=${e}&engine=bing`)).data,lt=async e=>(await se.get(`${oe("/extract/web")}?url=${e}`)).data,rt=async e=>(await se.post(`${oe("/record/action")}`,e)).data,it=()=>window.getSelection?window.getSelection().toString():document.selection?document.selection.createRange().text:"",ct=(e=Date.now())=>{const n=new Date(e),a=n.getFullYear().toString().padStart(2,"0"),s=(n.getMonth()+1).toString().padStart(2,"0"),o=n.getDate().toString().padStart(2,"0"),d=n.getHours().toString().padStart(2,"0"),v=n.getMinutes().toString().padStart(2,"0"),D=n.getSeconds().toString().padStart(2,"0");return`${a}-${s}-${o} ${d}:${v}:${D}`},fe=()=>Math.random().toString(16).substring(2),_=class{constructor(n,a){V(this,"resultLength",0);V(this,"currentFocusResultIndex",0);if(this.resultLength=C(`.${_.findElementClassName}`).length,this.currentFocusResultIndex=-1,n){const[,s]=_.replaceSearchText(C(n).text(),a);C(`${n}`).html(s)}C.each(C(`.${_.findElementClassName}`),(s,o)=>{C(o).addClass(`${_.findElementClassName}-${s}`),C(o).data("top",C(o)[0].offsetTop),s===C(`.${_.findElementClassName}`).length-1&&C(o).addClass(`${_.findElementClassName}-end`)})}next({elementClassName:n}){this.currentFocusResultIndex=this.currentFocusResultIndex+1,C(`.${_.findElementClassName}`).removeClass(`${_.findElementClassName}-active`);const a=C(`.${_.findElementClassName}-${this.currentFocusResultIndex}`),s=a.data("top");a.addClass(`${_.findElementClassName}-active`),C(`.${n}`)[0].scrollTo(0,s-91),a.hasClass(`${_.findElementClassName}-end`)&&y.info("\u5DF2\u7ECF\u662F\u6700\u540E\u4E00\u4E2A\u4E86")}};let R=_;V(R,"findElementClassName","__find-item"),V(R,"lastFindKeyword",""),V(R,"clearSearchText",n=>{C(`.${_.findElementClassName}`).attr("class",_.findElementClassName);const a=new RegExp(`<span class="${_.findElementClassName}">(.*?)</span>`,"igm");return n.replace(a,"$1")}),V(R,"replaceSearchText",(n,a)=>{_.lastFindKeyword&&(n=_.clearSearchText(n));const s=new RegExp(`${a}`,"igm");if(!s.test(n))return[!1,n];const d=n.replace(s,`<span class="${_.findElementClassName}">${a}</span>`);return _.lastFindKeyword=a,[!0,d]});const dt=["bilibili.com"],pt=e=>(e=JSON.parse(JSON.stringify(e)),e.filter(n=>!dt.some(a=>n.href.includes(a)))),W=100,_e="result-content",Z=3,gt=500;var vt=ae({components:{HeaderAction:st,SearchOutlined:Ue,LeftOutlined:Me,VerticalAlignBottomOutlined:Ge,VerticalAlignTopOutlined:Je,VerticalAlignMiddleOutlined:He,DownOutlined:Ve},setup(){const e=k(B.CLOSE),n=k(""),a=k([]),s=k([]),o=k(W),d=k(!1),v=k(""),D=k(new R),T=k(""),m=k(0),f=k(0),N=k([]),P=k([]),J=k(""),$=()=>a.value[a.value.length-1]||{},U=()=>$().type===x.RESULT_TARGET_PAGE,L=()=>$().type===x.SEARCH_RESULT,z=()=>JSON.parse(JSON.stringify(s.value.map(t=>t.datas))),A=t=>{var i;t=t||{},t.state=pe(ne({},JSON.parse(JSON.stringify((i=t==null?void 0:t.state)!=null?i:{}))),{digests:s.value,content:a.value,keyword:n.value,loading:d.value,findKeyword:v.value,stepCount:o.value,curResultChunk:m.value,curTargetPageResultChunk:f.value,topic:window.__getTopic(),appStatus:e.value}),t.undo=t.undo||(({op:u})=>{const{state:r}=u;s.value=r.digests,a.value=r.content,n.value=r.keyword,d.value=r.loading,v.value=r.findKeyword,o.value=r.stepCount,m.value=r.curResultChunk,f.value=r.curTargetPageResultChunk,J.value=r.topic,window.__setTopic(r.topic),e.value=r.appStatus}),P.value.push(t)},Y=()=>{if(!P.value.length){y.info("\u6CA1\u6709\u53EF\u4EE5\u64A4\u9500\u7684\u6B65\u9AA4");return}if(P.value.length===1){y.info("\u5DF2\u7ECF\u662F\u6700\u524D\u4E00\u6B65\u4E86");return}const t=P.value.pop();t==null||t.undo({op:t})},F=(t=-1)=>{o.value=o.value+t,o.value<=0&&(q(),y.info("\u64CD\u4F5C\u6B65\u9AA4\u8FBE\u5230\u4E0A\u9650\uFF0C\u81EA\u52A8\u7ED3\u675F\u672C\u6B21\u6570\u636E\u6536\u96C6"))},Q=()=>{d.value=!0},S=()=>{d.value=!1},H=()=>{a.value.pop()},j=()=>{var i,u,r,h,E;const t=$();return{keyword:n.value,triggerAt:Date.now(),stackLength:a.value.length,step:W-o.value,traceId:T.value,currentPageInfo:{title:(u=(i=t==null?void 0:t.data)==null?void 0:i.title)!=null?u:"",type:(r=t==null?void 0:t.type)!=null?r:"",href:(E=(h=t==null?void 0:t.data)==null?void 0:h.href)!=null?E:"",scrollTop:C(`.${_e}`).scrollTop()||0}}},Se=()=>L()?ee():le(),I=(t,i={})=>{N.value.push(ne({action:t,details:i,pageContentInViewport:Se(),digests:z(),operateStack:[...P.value]},j()))},Ce=async()=>{A(),Q();try{const t=await ut(n.value);S(),a.value=[],t.data=pt(t.data),a.value.push({type:x.SEARCH_RESULT,data:t.data}),m.value=0,F(),I("PRESS_SEARCH",{keyword:n.value,result:t.data})}catch{}},ue=t=>{const i=m.value*Z,u=i+Z;for(let r=i;r<u;r++)t(r)},Ee=()=>JSON.parse(JSON.stringify($())),ee=()=>{const t=[],i=$();return ue(u=>{i.data[u]&&t.push(i.data[u])}),t},ye=()=>JSON.parse(JSON.stringify(ee())),Te=async t=>{A(),d.value=!0;const i=await lt(t);if(d.value=!1,i.code===0){const u=Ke.exports.chunk(C(`<div>${i.data.html}</div>`.replace(/<\/(div|p)>/gim,"</div>!!--break-line--!!")).text().replace(/\s+/gim," ").replace(/<\/?.+?>/gim," ").replace(/[\r\n]/gim,`
`).replace(/!!--break-line--!!/gim,"<br />"),gt).map(r=>[...new Set(r.join("").split("<br />"))].join("<br />"));a.value.push({type:x.RESULT_TARGET_PAGE,data:{html:u,href:i.data.href}}),f.value=0,F(),I("LOAD_PAGE_DETAIL",{href:t,pageMainContent:u})}else y.error(i.message)},le=(t,i=!0)=>{const u=$();if(!u.data)return;const r=u.data.html[t||f.value];try{if(!i)return C.trim(C(`<div>${r}</div>`).text())}catch(h){console.error(h)}return C.trim(r)},ke=t=>(A(),t=t||it(),t?U()?(s.value.push({datas:[{title:`${ct()}`,desc:t,chunkIndex:f.value}],checked:!1}),F(),I("ADD_DIGEST",{text:t}),!0):(y.info("\u8BF7\u5728\u5185\u5BB9\u8BE6\u60C5\u9875\u6807\u6CE8"),!1):(y.info("\u65E0\u9009\u4E2D\u5185\u5BB9"),!1)),re=()=>{a.value=[],n.value="",s.value=[],d.value=!1,v.value="",N.value=[],D.value=new R,T.value="",o.value=W,J.value=""},Ae=()=>{xe.confirm({okText:"\u786E\u8BA4\u91CD\u7F6E",cancelText:"\u53D6\u6D88",title:"\u786E\u5B9A\u91CD\u7F6E\u5417\uFF1F",onOk(){re()}})},q=()=>{if(A(),e.value===B.OPEN){e.value=B.CLOSE,I("RECORD_CLOSE",{digests:z()}),y.success("\u6570\u636E\u5DF2\u8BB0\u5F55\u6210\u529F");const t={topic:J.value,userAgent:navigator.userAgent,actions:N.value,digests:s.value,tractId:T.value,createdAt:Date.now()};return console.log(t),rt(t),re(),t}else e.value=B.OPEN,T.value=`${fe()}${fe()}`,J.value=window.__getTopic(),I("RECORD_START",{})},we=()=>{if(L()){if(m.value<=0){y.info("\u5DF2\u7ECF\u5728\u9876\u7AEF\u4E86");return}A(),m.value=m.value-1}else if(U()){if(f.value<=0){y.info("\u5DF2\u7ECF\u5728\u9876\u7AEF\u4E86");return}A(),f.value=f.value-1}F(),I("TRIGGER_SCROLL_UP"),setTimeout(()=>{D.value=new R})},Oe=()=>{const t=$();return L()?Math.ceil(t.data.length/Z)-1:U()?t.data.html.length:0},Re=()=>{const t=$();if(L()){if(m.value>=Math.ceil(t.data.length/Z)-1){y.info("\u6700\u540E\u4E00\u9875\u4E86");return}A(),m.value=m.value+1}else if(U()){if(f.value>=t.data.html.length-1){y.info("\u6700\u540E\u4E00\u9875\u4E86");return}A(),f.value=f.value+1}F(),I("TRIGGER_SCROLL_DOWN"),setTimeout(()=>{D.value=new R})},$e=()=>{if(L()){if(m.value===0){y.info("\u5DF2\u7ECF\u5728\u9876\u7AEF\u4E86");return}A(),m.value=0}else if(U()){if(f.value===0){y.info("\u5DF2\u7ECF\u5728\u9876\u7AEF\u4E86");return}A(),f.value=0}F(),I("TRIGGER_SCROLL_TO_TOP")},De=()=>{A(),H(),F(),I("PAGE_GO_BACK")},Ne=()=>{const t=JSON.parse(JSON.stringify($()));if(L())ue(i=>{const u=t.data[i],[r,h]=R.replaceSearchText(u.title,v.value),[E,G]=R.replaceSearchText(u.summary,v.value);u.title=h,u.summary=G});else if(U()){const i=t.data.html[f.value],[u,r]=R.replaceSearchText(i,v.value);t.data.html[f.value]=r}H(),a.value.push(t),setTimeout(()=>{D.value=new R})},Pe=t=>{n.value=t},ie=t=>{window.__setTopic(t)},ce={CONTENT_TYPE:x,open:()=>e.value===B.OPEN?!1:(q(),!0),over:()=>{if(e.value===B.CLOSE)return!1;const t=q();return JSON.parse(JSON.stringify(t))},setTopic:ie,findKeyword:v,keyword:n,setKeyword:Pe,search:Ce,find:Ne,content:a,getContentStackTop:$,popContentStack:H,getCurrentResultChunkList:ee,getCurrentResultChunkListDeep:ye,getCurTargetPageResultChunkText:le,getPageContent:Te,addDigest:ke,digests:s,digestDescGetter:t=>t.map(i=>i.desc).join(""),mergeDigest:(...t)=>{if(t.forEach(E=>{s.value[E]&&(s.value[E].checked=!0)}),s.value.reduce((E,G)=>G.checked?E+1:E,0)<=1)return y.info("\u8BF7\u9009\u62E9\u4E24\u4E2A\u4EE5\u4E0A\u7684\u6458\u8981\u8FDB\u884C\u5408\u5E76"),!1;A();let u;const r=[],h=z();for(let E=0;E<s.value.length;E++){const G=s.value[E];G.checked&&(r.push(E),u?u.datas=[...u.datas,...G.datas]:u=G),G.checked=!1}for(let E=r.length-1;E>=1;E--)s.value.splice(r[E],1);return F(),I("MERGE_DIGEST",{merges:r,before:h,after:z()}),!0},rmDigest:t=>{const i=s.value.findIndex(u=>u===t);s.value.splice(i,1)},changeDigestIndex:(t,i)=>{const u=s.value.findIndex(h=>h===t),r=s.value[u];if(u===0){y.info("\u5DF2\u7ECF\u5728\u6700\u524D\u4E86");return}if(u===s.value.length-1){y.info("\u5DF2\u7ECF\u5728\u6700\u540E\u4E86");return}s.value.splice(u,1),s.value.splice(u+i,0,r)},getDigestsValue:()=>JSON.parse(JSON.stringify(s.value)),stepCount:o,MAX_STEP_COUNT:W,APP_STATUS:B,appStatus:e,toggleAppStatus:q,scrollUp:we,scrollDown:Re,scrollToTop:$e,doBack:De,loading:d,findNext:()=>{D.value.next({elementClassName:_e})},curResultChunk:m,getCurrentResultDeepClone:Ee,curTargetPageResultChunk:f,getCurPageChunkSize:Oe,isResultContentPage:U,isSearchResultPage:L,reset:Ae,undo:Y,coverActions:t=>{const u=JSON.parse(JSON.stringify(t)).pop().operateStack;console.log(u),u.forEach(r=>{r.undo=()=>{const h=r.state;ie(h.topic),s.value=h.digests,a.value=h.content,n.value=h.keyword,d.value=h.loading,v.value=h.findKeyword,o.value=h.stepCount,m.value=h.curResultChunk,f.value=h.curTargetPageResultChunk,J.value=h.topic,N.value.pop(),setTimeout(()=>{e.value=h.appStatus})}}),P.value=u,Y()},ops:P};return window.__operation=ce,ce}});const X=e=>(je("data-v-388c5faa"),e=e(),Xe(),e),ht={class:"main-wrap"},ft={key:0,class:"overlay"},_t={style:{"margin-top":"-8px",display:"flex","justify-content":"space-between"}},mt=b(" \xA0 "),St={style:{"margin-right":"12px"}},Ct=b("\u64A4\u9500"),Et=b(" \xA0 "),yt=b("\u91CD\u7F6E"),Tt={class:"content-container"},kt={class:"left"},At={style:{"white-space":"nowrap",display:"flex","align-items":"center"}},wt=X(()=>p("span",null,"\u4E0B\u4E00\u4E2A",-1)),Ot=X(()=>p("span",null,"\u5411\u4E0A\u7FFB\u9875",-1)),Rt=X(()=>p("span",null,"\u5411\u4E0B\u7FFB\u9875",-1)),$t={style:{"margin-right":"8px"}},Dt={key:0},Nt={key:1},Pt=X(()=>p("span",null,"\u56DE\u5230\u9876\u7AEF",-1)),Lt={class:"result-content"},Ft={key:0},It={class:"result-item"},bt={class:"result-item-title"},Bt=["onClick","innerHTML","data-url"],Ut=["innerHTML"],Mt={key:0},Gt={key:1,style:{width:"717px"}},Jt=["innerHTML"],Ht={key:2},Vt=X(()=>p("div",{class:"center content-tip"}," \u6682\u65E0\u5185\u5BB9 ",-1)),Kt=[Vt],xt={class:"right"},zt=b("\u5C06\u9009\u4E2D\u5185\u5BB9\u6DFB\u52A0\u5230\u6458\u8981"),jt=b("\u5408\u5E76\u6458\u8981"),Xt={style:{position:"relative"}},Yt={style:{position:"absolute",left:"-24px"}};function qt(e,n,a,s,o,d){const v=g("header-action"),D=g("LeftOutlined"),T=g("a-button"),m=g("a-input-search"),f=g("DownOutlined"),N=g("a-tooltip"),P=g("a-divider"),J=g("VerticalAlignTopOutlined"),$=g("VerticalAlignBottomOutlined"),U=g("VerticalAlignMiddleOutlined"),L=g("a-card"),z=g("a-checkbox"),A=g("a-list-item-meta"),Y=g("a-list-item"),F=g("a-list"),Q=g("a-spin");return O(),w("div",ht,[l(v,{"max-step":e.MAX_STEP_COUNT,"rest-step":e.stepCount,"app-status":e.appStatus,onToggleAppStatus:e.toggleAppStatus},null,8,["max-step","rest-step","app-status","onToggleAppStatus"]),p("div",{class:"op-wrap",style:ze(e.appStatus===e.APP_STATUS.CLOSE?"opacity: .3;":"")},[e.appStatus===e.APP_STATUS.CLOSE?(O(),w("div",ft)):K("",!0),p("div",_t,[p("div",null,[l(T,{type:"link",disabled:!e.content.length,size:"large",onClick:e.doBack},{icon:c(()=>[l(D)]),default:c(()=>[b(" \u8FD4\u56DE("+M(e.content.length)+") ",1)]),_:1},8,["disabled","onClick"]),mt,l(m,{class:"keyword-input",placeholder:"\u641C\u7D22\u5173\u952E\u8BCD",size:"large","enter-button":"",value:e.keyword,"onUpdate:value":n[0]||(n[0]=S=>e.keyword=S),onSearch:e.search},null,8,["value","onSearch"])]),p("div",St,[l(T,{onClick:e.undo},{default:c(()=>[Ct]),_:1},8,["onClick"]),Et,l(T,{onClick:e.reset,type:"dashed",danger:"",ghost:""},{default:c(()=>[yt]),_:1},8,["onClick"])])]),l(Q,{spinning:e.loading},{default:c(()=>[p("div",Tt,[p("div",kt,[p("div",null,[l(L,{title:"\u6D4F\u89C8\u5185\u5BB9",class:"contents"},{extra:c(()=>[p("div",At,[l(m,{placeholder:"\u5185\u5BB9\u67E5\u627E",value:e.findKeyword,"onUpdate:value":n[1]||(n[1]=S=>e.findKeyword=S),style:{width:"150px","margin-right":"12px"},onSearch:e.find},null,8,["value","onSearch"]),l(N,{placement:"top"},{title:c(()=>[wt]),default:c(()=>[l(T,{onClick:n[2]||(n[2]=S=>e.findNext())},{icon:c(()=>[l(f)]),_:1})]),_:1}),l(P,{type:"vertical"}),l(N,{placement:"top"},{title:c(()=>[Ot]),default:c(()=>[l(T,{style:{"margin-right":"8px"},onClick:e.scrollUp},{icon:c(()=>[l(J)]),_:1},8,["onClick"])]),_:1}),l(N,{placement:"top"},{title:c(()=>[Rt]),default:c(()=>[l(T,{style:{"margin-right":"8px"},onClick:e.scrollDown},{icon:c(()=>[l($)]),_:1},8,["onClick"])]),_:1}),p("div",$t,[e.isSearchResultPage()?(O(),w("span",Dt,M(e.curResultChunk+1)+"/"+M(e.getCurPageChunkSize()+1),1)):K("",!0),e.isResultContentPage()?(O(),w("span",Nt,M(e.curTargetPageResultChunk+1)+"/"+M(e.getCurPageChunkSize()),1)):K("",!0)]),l(N,{placement:"top"},{title:c(()=>[Pt]),default:c(()=>[l(T,{onClick:e.scrollToTop},{icon:c(()=>[l(U)]),_:1},8,["onClick"])]),_:1})])]),default:c(()=>[p("div",Lt,[e.isSearchResultPage()?(O(),w("div",Ft,[(O(!0),w(ge,null,ve(e.getCurrentResultChunkList(),(S,H)=>(O(),w("div",null,[p("div",It,[p("span",bt,[p("strong",{class:Ye(`result-item-index-${H}`),onClick:j=>e.getPageContent(S.mdurl||S.href),innerHTML:S.title,"data-url":S.mdurl||S.href},null,10,Bt)]),p("div",{class:"result-item-summary",innerHTML:S.summary||S.rich},null,8,Ut)])]))),256)),e.getContentStackTop().data.length?K("",!0):(O(),w("div",Mt," \u65E0\u641C\u7D22\u7ED3\u679C "))])):K("",!0),e.isResultContentPage()?(O(),w("div",Gt,[p("div",{class:"content-container-element",style:{width:"717px","word-break":"break-all","white-space":"pre-wrap"},innerHTML:e.getCurTargetPageResultChunkText()},null,8,Jt)])):K("",!0),e.content.length?K("",!0):(O(),w("div",Ht,Kt))])]),_:1})])]),p("div",xt,[l(L,{title:"\u6458\u8981",class:"summaries"},{extra:c(()=>[l(T,{onClick:e.addDigest,type:"primary",style:{"margin-right":"4px"}},{default:c(()=>[zt]),_:1},8,["onClick"]),l(T,{onClick:e.mergeDigest},{default:c(()=>[jt]),_:1},8,["onClick"])]),default:c(()=>[p("div",null,[l(F,{"item-layout":"horizontal","data-source":e.digests},{renderItem:c(({item:S,index:H})=>[l(Y,null,{actions:c(()=>[l(z,{checked:S.checked,"onUpdate:checked":j=>S.checked=j},null,8,["checked","onUpdate:checked"])]),default:c(()=>[l(A,{description:e.digestDescGetter(S.datas)},{title:c(()=>[p("div",Xt,[p("span",Yt,M(H+1),1),p("span",null,[(O(!0),w(ge,null,ve(S.datas,j=>(O(),w("div",null,M(j.title),1))),256))])])]),_:2},1032,["description"])]),_:2},1024)]),_:1},8,["data-source"])])]),_:1})])])]),_:1},8,["spinning"])],4)])}var Wt=he(vt,[["render",qt],["__scopeId","data-v-388c5faa"]]);const Zt=p("div",{class:"bg"},null,-1),Qt=ae({setup(e){return(n,a)=>(O(),w("div",null,[Zt,l(Wt)]))}});const me=qe(Qt);me.use(We);me.mount("#app");
