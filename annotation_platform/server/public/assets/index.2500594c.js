var Ce=Object.defineProperty;var re=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var ee=(e,n,s)=>n in e?Ce(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,j=(e,n)=>{for(var s in n||(n={}))Se.call(n,s)&&ee(e,s,n[s]);if(re)for(var s of re(n))ye.call(n,s)&&ee(e,s,n[s]);return e};var G=(e,n,s)=>(ee(e,typeof n!="symbol"?n+"":n,s),s);import{d as te,r as g,o as A,c as T,a as u,w as r,u as X,b as B,t as b,e as c,$ as _,m as C,f as ne,S as ke,L as Ae,V as Te,g as we,h as Fe,D as Re,i as w,l as Oe,M as De,j as U,F as ce,k as de,n as $e,p as Le,q as Ne,s as Pe,A as Be}from"./vendor.4fbf3870.js";const xe=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const S of d.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&a(S)}).observe(document,{childList:!0,subtree:!0});function s(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerpolicy&&(d.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?d.credentials="include":o.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(o){if(o.ep)return;o.ep=!0;const d=s(o);fetch(o.href,d)}};xe();var H;(function(e){e[e.SEARCH_RESULT=0]="SEARCH_RESULT",e[e.RESULT_TARGET_PAGE=1]="RESULT_TARGET_PAGE"})(H||(H={}));var $;(function(e){e[e.OPEN=0]="OPEN",e[e.CLOSE=1]="CLOSE"})($||($={}));const Ie={style:{display:"flex","align-items":"center"}},be=B(" \xA0\xA0 "),Me=B(" \xA0\xA0 "),Ge=te({props:["maxStep","restStep","appStatus"],emits:["toggleAppStatus"],setup(e,{emit:n}){const s=()=>{if(!_(".topic-input").val())return C.warn("\u8BF7\u8F93\u5165\u95EE\u9898\u7F16\u53F7"),!1;n("toggleAppStatus")};return(a,o)=>{const d=g("a-tag"),S=g("a-input"),O=g("a-switch"),y=g("a-statistic"),m=g("a-row"),h=g("a-divider"),R=g("a-page-header");return A(),T("div",null,[u(R,{title:"\u8BB0\u5F55\u5DE5\u5177","sub-title":"\u8F85\u52A9\u8BB0\u5F55\u641C\u7D22\u884C\u4E3A"},{tags:r(()=>[u(d,{color:e.appStatus===X($).OPEN?"green":"grey"},{default:r(()=>[B(b(e.appStatus===X($).OPEN?"\u8BB0\u5F55\u4E2D":"\u672A\u5F00\u542F"),1)]),_:1},8,["color"])]),extra:r(()=>[c("div",Ie,[u(S,{class:"topic-input",placeholder:"\u8F93\u5165\u95EE\u9898\u7F16\u53F7",style:{width:"180px"}}),be,u(O,{checked:e.appStatus===X($).OPEN,onClick:s},null,8,["checked"]),Me,c("span",null,b(e.appStatus===X($).OPEN?"\u8BB0\u5F55\u4E2D":"\u672A\u5F00\u542F\u8BB0\u5F55"),1)])]),default:r(()=>[u(m,{type:"flex"},{default:r(()=>[u(y,{title:"\u5269\u4F59\u64CD\u4F5C\u6B65\u9AA4",value:`${e.restStep} / ${e.maxStep}`},null,8,["value"])]),_:1}),u(h)]),_:1})])}}}),Ue="",se=e=>`${Ue}${e}`,He=async e=>(await ne.get(`${se("/search")}?keyword=${e}&engine=bing`)).data,Ve=async e=>(await ne.get(`${se("/extract/web")}?url=${e}`)).data,Je=async e=>(await ne.post(`${se("/record/action")}`,e)).data,Ke=()=>window.getSelection?window.getSelection().toString():document.selection?document.selection.createRange().text:"",ze=(e=Date.now())=>{const n=new Date(e),s=n.getFullYear().toString().padStart(2,"0"),a=(n.getMonth()+1).toString().padStart(2,"0"),o=n.getDate().toString().padStart(2,"0"),d=n.getHours().toString().padStart(2,"0"),S=n.getMinutes().toString().padStart(2,"0"),O=n.getSeconds().toString().padStart(2,"0");return`${s}-${a}-${o} ${d}:${S}:${O}`},pe=()=>Math.random().toString(16).substring(2),f=class{constructor(n,s){G(this,"resultLength",0);G(this,"currentFocusResultIndex",0);if(this.resultLength=_(`.${f.findElementClassName}`).length,this.currentFocusResultIndex=-1,n){const[,a]=f.replaceSearchText(_(n).text(),s);_(`${n}`).html(a)}_.each(_(`.${f.findElementClassName}`),(a,o)=>{_(o).addClass(`${f.findElementClassName}-${a}`),_(o).data("top",_(o)[0].offsetTop),a===_(`.${f.findElementClassName}`).length-1&&_(o).addClass(`${f.findElementClassName}-end`)})}next({elementClassName:n}){this.currentFocusResultIndex=this.currentFocusResultIndex+1,_(`.${f.findElementClassName}`).removeClass(`${f.findElementClassName}-active`);const s=_(`.${f.findElementClassName}-${this.currentFocusResultIndex}`),a=s.data("top");s.addClass(`${f.findElementClassName}-active`),_(`.${n}`)[0].scrollTo(0,a-91),s.hasClass(`${f.findElementClassName}-end`)&&C.info("\u5DF2\u7ECF\u662F\u6700\u540E\u4E00\u4E2A\u4E86")}};let F=f;G(F,"findElementClassName","__find-item"),G(F,"lastFindKeyword",""),G(F,"clearSearchText",n=>{_(`.${f.findElementClassName}`).attr("class",f.findElementClassName);const s=new RegExp(`<span class="${f.findElementClassName}">(.*?)</span>`,"igm");return n.replace(s,"$1")}),G(F,"replaceSearchText",(n,s)=>{f.lastFindKeyword&&(n=f.clearSearchText(n));const a=new RegExp(`${s}`,"igm");if(!a.test(n))return[!1,n];const d=n.replace(a,`<span class="${f.findElementClassName}">${s}</span>`);return f.lastFindKeyword=s,[!0,d]});const je=["bilibili.com"],Xe=e=>(e=JSON.parse(JSON.stringify(e)),e.filter(n=>!je.some(s=>n.href.includes(s)))),Y=100,ge="result-content",q=3,Ye=500;var qe=te({components:{HeaderAction:Ge,SearchOutlined:ke,LeftOutlined:Ae,VerticalAlignBottomOutlined:Te,VerticalAlignTopOutlined:we,VerticalAlignMiddleOutlined:Fe,DownOutlined:Re},setup(){const e=w($.CLOSE),n=w(""),s=w([]),a=w([]),o=w(Y),d=w(!1),S=w(""),O=w(new F),y=w(""),m=w(0),h=w(0),R=w([]),V=w([]),D=()=>s.value[s.value.length-1]||{},x=()=>D().type===H.RESULT_TARGET_PAGE,I=()=>D().type===H.SEARCH_RESULT,M=()=>JSON.parse(JSON.stringify(a.value.map(t=>t.datas))),k=t=>{var l;t=t||{},t.state=j(j({},JSON.parse(JSON.stringify((l=t==null?void 0:t.state)!=null?l:{}))),JSON.parse(JSON.stringify({digests:a.value,content:s.value,keyword:n.value,loading:d.value,findKeyword:S.value,recordStack:R.value,stepCount:o.value,curResultChunk:m.value,curTargetPageResultChunk:h.value}))),t.undo=t.undo||(({op:i})=>{const{state:p}=i;a.value=p.digests,s.value=p.content,n.value=p.keyword,d.value=p.loading,S.value=p.findKeyword,R.value=p.recordStack,o.value=p.stepCount,m.value=p.curResultChunk,h.value=p.curTargetPageResultChunk}),V.value.push(t)},W=()=>{if(!V.value.length){C.info("\u6CA1\u6709\u53EF\u4EE5\u64A4\u9500\u7684\u6B65\u9AA4");return}if(V.value.length===1){C.info("\u5DF2\u7ECF\u662F\u6700\u524D\u4E00\u6B65\u4E86");return}const t=V.value.pop();t==null||t.undo({op:t})},L=(t=-1)=>{o.value=o.value+t,o.value<=0&&(ie(),C.info("\u64CD\u4F5C\u6B65\u9AA4\u8FBE\u5230\u4E0A\u9650\uFF0C\u81EA\u52A8\u7ED3\u675F\u672C\u6B21\u6570\u636E\u6536\u96C6"))},Z=()=>{d.value=!0},Q=()=>{d.value=!1},v=()=>{s.value.pop()},z=()=>{var l,i,p,E,P;const t=D();return{keyword:n.value,triggerAt:Date.now(),stackLength:s.value.length,step:Y-o.value,traceId:y.value,currentPageInfo:{title:(i=(l=t==null?void 0:t.data)==null?void 0:l.title)!=null?i:"",type:(p=t==null?void 0:t.type)!=null?p:"",href:(P=(E=t==null?void 0:t.data)==null?void 0:E.href)!=null?P:"",scrollTop:_(`.${ge}`).scrollTop()||0}}},J=()=>I()?ue():oe(),N=(t,l={})=>{R.value.push(j({action:t,details:l,pageContentInViewport:J(),digests:M()},z()))},fe=async()=>{k(),Z();try{const t=await He(n.value);Q(),s.value=[],t.data=Xe(t.data),s.value.push({type:H.SEARCH_RESULT,data:t.data}),m.value=0,L(),N("PRESS_SEARCH",{keyword:n.value,result:t.data})}catch{}},ae=t=>{const l=m.value*q,i=l+q;for(let p=l;p<i;p++)t(p)},ue=()=>{const t=[],l=D();return ae(i=>{l.data[i]&&t.push(l.data[i])}),t},ve=async t=>{k(),d.value=!0;const l=await Ve(t);if(d.value=!1,l.code===0){const i=Oe.exports.chunk(_(`<div>${l.data.html}</div>`.replace(/<\/(div|p)>/gim,"</div>!!--break-line--!!")).text().replace(/\s+/gim," ").replace(/<\/?.+?>/gim," ").replace(/[\r\n]/gim,`
`).replace(/!!--break-line--!!/gim,"<br />"),Ye).map(p=>[...new Set(p.join("").split("<br />"))].join("<br />"));s.value.push({type:H.RESULT_TARGET_PAGE,data:{html:i,href:l.data.href}}),h.value=0,L(),N("LOAD_PAGE_DETAIL",{href:t,pageMainContent:i})}else C.error(l.message)},oe=t=>{const l=D();if(!l.data)return;const i=l.data.html[t||h.value];return _.trim(i)},_e=()=>{k();const t=Ke();if(!t){C.info("\u65E0\u9009\u4E2D\u5185\u5BB9");return}if(!x()){C.info("\u8BF7\u5728\u5185\u5BB9\u8BE6\u60C5\u9875\u6807\u6CE8");return}a.value.push({datas:[{title:`${ze()}`,desc:t,chunkIndex:h.value}],checked:!1}),L(),N("ADD_DIGEST",{text:t})},le=()=>{s.value=[],n.value="",a.value=[],d.value=!1,S.value="",R.value=[],O.value=new F,y.value="",o.value=Y},me=()=>{De.confirm({okText:"\u786E\u8BA4\u91CD\u7F6E",cancelText:"\u53D6\u6D88",title:"\u786E\u5B9A\u91CD\u7F6E\u5417\uFF1F",onOk(){le()}})},ie=()=>{k(),e.value===$.OPEN?(e.value=$.CLOSE,N("RECORD_CLOSE",{digests:M()}),C.success("\u6570\u636E\u5DF2\u8BB0\u5F55\u6210\u529F"),Je({topic:_(".topic-input").val(),userAgent:navigator.userAgent,actions:R.value,digests:a.value,tractId:y.value,createdAt:Date.now()}),le()):(e.value=$.OPEN,y.value=`${pe()}${pe()}`,N("RECORD_START",{}))};return{CONTENT_TYPE:H,findKeyword:S,keyword:n,search:fe,find:()=>{const t=JSON.parse(JSON.stringify(D()));if(I())ae(l=>{const i=t.data[l],[p,E]=F.replaceSearchText(i.title,S.value),[P,Ee]=F.replaceSearchText(i.summary,S.value);i.title=E,i.summary=Ee});else if(x()){console.log(JSON.parse(JSON.stringify(t)));const l=t.data.html[h.value],[i,p]=F.replaceSearchText(l,S.value);t.data.html[h.value]=p}v(),s.value.push(t),setTimeout(()=>{O.value=new F})},content:s,getContentStackTop:D,popContentStack:v,getCurrentResultChunkList:ue,getCurTargetPageResultChunkText:oe,getPageContent:ve,addDigest:_e,digests:a,digestDescGetter:t=>t.map(l=>l.desc).join(""),mergeDigest:()=>{if(a.value.reduce((E,P)=>P.checked?E+1:E,0)<=1){C.info("\u8BF7\u9009\u62E9\u4E24\u4E2A\u4EE5\u4E0A\u7684\u6458\u8981\u8FDB\u884C\u5408\u5E76");return}k();let l;const i=[],p=M();for(let E=0;E<a.value.length;E++){const P=a.value[E];P.checked&&(i.push(E),l?l.datas=[...l.datas,...P.datas]:l=P),P.checked=!1}for(let E=i.length-1;E>=1;E--)a.value.splice(i[E],1);L(),N("MERGE_DIGEST",{merges:i,before:p,after:M()})},rmDigest:t=>{const l=a.value.findIndex(i=>i===t);a.value.splice(l,1)},changeDigestIndex:(t,l)=>{const i=a.value.findIndex(E=>E===t),p=a.value[i];if(i===0){C.info("\u5DF2\u7ECF\u5728\u6700\u524D\u4E86");return}if(i===a.value.length-1){C.info("\u5DF2\u7ECF\u5728\u6700\u540E\u4E86");return}a.value.splice(i,1),a.value.splice(i+l,0,p)},stepCount:o,MAX_STEP_COUNT:Y,APP_STATUS:$,appStatus:e,toggleAppStatus:ie,scrollUp:()=>{if(I()){if(m.value<=0){C.info("\u5DF2\u7ECF\u5728\u9876\u7AEF\u4E86");return}k(),m.value=m.value-1}else if(x()){if(h.value<=0){C.info("\u5DF2\u7ECF\u5728\u9876\u7AEF\u4E86");return}k(),h.value=h.value-1}L(),N("TRIGGER_SCROLL_UP"),setTimeout(()=>{O.value=new F})},scrollDown:()=>{const t=D();if(I()){if(m.value>=Math.ceil(t.data.length/q)-1){C.info("\u6700\u540E\u4E00\u9875\u4E86");return}k(),m.value=m.value+1}else if(x()){if(h.value>=t.data.html.length-1){C.info("\u6700\u540E\u4E00\u9875\u4E86");return}k(),h.value=h.value+1}L(),N("TRIGGER_SCROLL_DOWN"),setTimeout(()=>{O.value=new F})},scrollToTop:()=>{if(I()){if(m.value===0){C.info("\u5DF2\u7ECF\u5728\u9876\u7AEF\u4E86");return}k(),m.value=0}else if(x()){if(h.value===0){C.info("\u5DF2\u7ECF\u5728\u9876\u7AEF\u4E86");return}k(),h.value=0}L(),N("TRIGGER_SCROLL_TO_TOP")},doBack:()=>{k(),v(),L(),N("PAGE_GO_BACK")},loading:d,findNext:()=>{O.value.next({elementClassName:ge})},curResultChunk:m,curTargetPageResultChunk:h,getCurPageChunkSize:()=>{const t=D();return I()?Math.ceil(t.data.length/q)-1:x()?t.data.html.length:0},isResultContentPage:x,isSearchResultPage:I,reset:me,undo:W}}});var We=(e,n)=>{const s=e.__vccOpts||e;for(const[a,o]of n)s[a]=o;return s};const K=e=>(Le("data-v-1e482850"),e=e(),Ne(),e),Ze={class:"main-wrap"},Qe={key:0,class:"overlay"},et={style:{"margin-top":"-8px",display:"flex","justify-content":"space-between"}},tt=B(" \xA0 "),nt={style:{"margin-right":"12px"}},st=B("\u64A4\u9500"),at=B(" \xA0 "),ut=B("\u91CD\u7F6E"),ot={class:"content-container"},lt={class:"left"},it={style:{"white-space":"nowrap",display:"flex","align-items":"center"}},rt=K(()=>c("span",null,"\u4E0B\u4E00\u4E2A",-1)),ct=K(()=>c("span",null,"\u5411\u4E0A\u7FFB\u9875",-1)),dt=K(()=>c("span",null,"\u5411\u4E0B\u7FFB\u9875",-1)),pt={style:{"margin-right":"8px"}},gt={key:0},ht={key:1},ft=K(()=>c("span",null,"\u56DE\u5230\u9876\u7AEF",-1)),vt={class:"result-content"},_t={key:0},mt={class:"result-item"},Et={class:"result-item-title"},Ct=["onClick","innerHTML"],St=["innerHTML"],yt={key:0},kt={key:1,style:{width:"717px"}},At=["innerHTML"],Tt={key:2},wt=K(()=>c("div",{class:"center content-tip"}," \u6682\u65E0\u5185\u5BB9 ",-1)),Ft=[wt],Rt={class:"right"},Ot=B("\u5C06\u9009\u4E2D\u5185\u5BB9\u6DFB\u52A0\u5230\u6458\u8981"),Dt=B("\u5408\u5E76\u6458\u8981"),$t={style:{position:"relative"}},Lt={style:{position:"absolute",left:"-24px"}};function Nt(e,n,s,a,o,d){const S=g("header-action"),O=g("LeftOutlined"),y=g("a-button"),m=g("a-input-search"),h=g("DownOutlined"),R=g("a-tooltip"),V=g("a-divider"),D=g("VerticalAlignTopOutlined"),x=g("VerticalAlignBottomOutlined"),I=g("VerticalAlignMiddleOutlined"),M=g("a-card"),k=g("a-checkbox"),W=g("a-list-item-meta"),L=g("a-list-item"),Z=g("a-list"),Q=g("a-spin");return A(),T("div",Ze,[u(S,{"max-step":e.MAX_STEP_COUNT,"rest-step":e.stepCount,"app-status":e.appStatus,onToggleAppStatus:e.toggleAppStatus},null,8,["max-step","rest-step","app-status","onToggleAppStatus"]),c("div",{class:"op-wrap",style:$e(e.appStatus===e.APP_STATUS.CLOSE?"opacity: .3;":"")},[e.appStatus===e.APP_STATUS.CLOSE?(A(),T("div",Qe)):U("",!0),c("div",et,[c("div",null,[u(y,{type:"link",disabled:!e.content.length,size:"large",onClick:e.doBack},{icon:r(()=>[u(O)]),default:r(()=>[B(" \u8FD4\u56DE("+b(e.content.length)+") ",1)]),_:1},8,["disabled","onClick"]),tt,u(m,{class:"keyword-input",placeholder:"\u641C\u7D22\u5173\u952E\u8BCD",size:"large","enter-button":"",value:e.keyword,"onUpdate:value":n[0]||(n[0]=v=>e.keyword=v),onSearch:e.search},null,8,["value","onSearch"])]),c("div",nt,[u(y,{onClick:e.undo},{default:r(()=>[st]),_:1},8,["onClick"]),at,u(y,{onClick:e.reset,type:"dashed",danger:"",ghost:""},{default:r(()=>[ut]),_:1},8,["onClick"])])]),u(Q,{spinning:e.loading},{default:r(()=>[c("div",ot,[c("div",lt,[c("div",null,[u(M,{title:"\u6D4F\u89C8\u5185\u5BB9",class:"contents"},{extra:r(()=>[c("div",it,[u(m,{placeholder:"\u5185\u5BB9\u67E5\u627E",value:e.findKeyword,"onUpdate:value":n[1]||(n[1]=v=>e.findKeyword=v),style:{width:"150px","margin-right":"12px"},onSearch:e.find},null,8,["value","onSearch"]),u(R,{placement:"top"},{title:r(()=>[rt]),default:r(()=>[u(y,{onClick:n[2]||(n[2]=v=>e.findNext())},{icon:r(()=>[u(h)]),_:1})]),_:1}),u(V,{type:"vertical"}),u(R,{placement:"top"},{title:r(()=>[ct]),default:r(()=>[u(y,{style:{"margin-right":"8px"},onClick:e.scrollUp},{icon:r(()=>[u(D)]),_:1},8,["onClick"])]),_:1}),u(R,{placement:"top"},{title:r(()=>[dt]),default:r(()=>[u(y,{style:{"margin-right":"8px"},onClick:e.scrollDown},{icon:r(()=>[u(x)]),_:1},8,["onClick"])]),_:1}),c("div",pt,[e.isSearchResultPage()?(A(),T("span",gt,b(e.curResultChunk+1)+"/"+b(e.getCurPageChunkSize()+1),1)):U("",!0),e.isResultContentPage()?(A(),T("span",ht,b(e.curTargetPageResultChunk+1)+"/"+b(e.getCurPageChunkSize()),1)):U("",!0)]),u(R,{placement:"top"},{title:r(()=>[ft]),default:r(()=>[u(y,{onClick:e.scrollToTop},{icon:r(()=>[u(I)]),_:1},8,["onClick"])]),_:1})])]),default:r(()=>[c("div",vt,[e.isSearchResultPage()?(A(),T("div",_t,[(A(!0),T(ce,null,de(e.getCurrentResultChunkList(),v=>(A(),T("div",null,[c("div",mt,[c("span",Et,[c("strong",{onClick:z=>e.getPageContent(v.mdurl||v.href),innerHTML:v.title},null,8,Ct)]),c("div",{class:"result-item-summary",innerHTML:v.summary||v.rich},null,8,St)])]))),256)),e.getContentStackTop().data.length?U("",!0):(A(),T("div",yt," \u65E0\u641C\u7D22\u7ED3\u679C "))])):U("",!0),e.isResultContentPage()?(A(),T("div",kt,[c("div",{class:"content-container-element",style:{width:"717px","word-break":"break-all","white-space":"pre-wrap"},innerHTML:e.getCurTargetPageResultChunkText()},null,8,At)])):U("",!0),e.content.length?U("",!0):(A(),T("div",Tt,Ft))])]),_:1})])]),c("div",Rt,[u(M,{title:"\u6458\u8981",class:"summaries"},{extra:r(()=>[u(y,{onClick:e.addDigest,type:"primary",style:{"margin-right":"4px"}},{default:r(()=>[Ot]),_:1},8,["onClick"]),u(y,{onClick:e.mergeDigest},{default:r(()=>[Dt]),_:1},8,["onClick"])]),default:r(()=>[c("div",null,[u(Z,{"item-layout":"horizontal","data-source":e.digests},{renderItem:r(({item:v,index:z})=>[u(L,null,{actions:r(()=>[u(k,{checked:v.checked,"onUpdate:checked":J=>v.checked=J},null,8,["checked","onUpdate:checked"])]),default:r(()=>[u(W,{description:e.digestDescGetter(v.datas)},{title:r(()=>[c("div",$t,[c("span",Lt,b(z+1),1),c("span",null,[(A(!0),T(ce,null,de(v.datas,J=>(A(),T("div",null,b(J.title),1))),256))])])]),_:2},1032,["description"])]),_:2},1024)]),_:1},8,["data-source"])])]),_:1})])])]),_:1},8,["spinning"])],4)])}var Pt=We(qe,[["render",Nt],["__scopeId","data-v-1e482850"]]);const Bt=c("div",{class:"bg"},null,-1),xt=te({setup(e){return(n,s)=>(A(),T("div",null,[Bt,u(Pt)]))}});const he=Pe(xt);he.use(Be);he.mount("#app");