"use strict";(self.webpackChunkstephanie_solution=self.webpackChunkstephanie_solution||[]).push([[8285],{8285:(e,s,i)=>{i.r(s),i.d(s,{default:()=>m});var a=i(2791),t=(i(9283),i(9760),i(2647)),l=i(7689),o=i(1087),n=i(2350),d=i(387),r=i(1176),c=i(184);const v=(0,t.PU)(),h=(0,r.i7)(),u=(0,r.mP)(),m=e=>{var s,i,t;let{title:r,description:m}=e;const[_,w]=(0,a.useState)(1);let x=(0,l.TH)();(0,l.s0)();const I=null===(s=x.search)||void 0===s||null===(i=s.split("?"))||void 0===i?void 0:i[1],y=(0,n.mB)(I);let f=null===y||void 0===y?void 0:y.mId,j=1*(null===y||void 0===y?void 0:y.view);const g=e=>{(0,n.Rz)((0,n.xW)(),e),(0,n.Rz)((0,n.xW)()+"_bck",JSON.parse(JSON.stringify(e))),z()};(0,a.useEffect)((()=>{setTimeout((()=>{N()}),200)}),[f]);const N=()=>{(0,d.bg)(f,g)},z=()=>{w((0,n.M5)())};let V=(0,n.bh)((0,n.xW)()),k=(null===V||void 0===V||V.customerLogisticId,null===V||void 0===V||null===(t=V.currentLocation)||void 0===t||t.countryId,[{index:1,label:"Informacion",icon:"note",navTo:{pathname:"/movies/detail",search:"?mId="+f+"&view=1"}}]);return{serie:1,show:1}[null===V||void 0===V?void 0:V.type]&&k.push({index:3,label:"Episodes",icon:"link",navTo:{pathname:"/movies/detail",search:"?mId="+f+"&view=3"}}),(0,c.jsxs)("div",{className:"customer_bx blue30",children:[(0,c.jsxs)("div",{className:"ebEwoI",children:[(0,c.jsx)("div",{className:"jKZvHt ",children:(0,c.jsxs)(o.OL,{className:"bXnHIV ",to:{pathname:"/movies",search:"?tab=titles"},children:[(0,c.jsx)(v,{name:"arrowBack",size:22}),(0,c.jsx)("div",{className:"eULkqP",children:"Volver a Dashboard"})]})}),(0,c.jsx)("div",{className:"jKZvHt ",onClick:()=>{},children:(0,c.jsx)(v,{name:"reload",size:22})})]}),(0,c.jsx)("div",{style:{paddingTop:40}}),(0,c.jsxs)("div",{className:"_dsplFlx dashboard formContainer",style:{width:"100%","--menu-slide-wd":"242px",opacity:1},children:[(0,c.jsx)(p,{tabs:k,active:j}),(0,c.jsx)("div",{className:"dashboard_body",style:{opacity:1,width:"calc(98vw - var(--menu-slide-wd))",minHeight:"96vh",marginLeft:"3vw"},children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(b,{viewId:1,activeView:j,children:(0,c.jsx)(h,{updObPrnt:z})}),(0,c.jsx)(b,{viewId:3,activeView:j,children:(0,c.jsx)(u,{updObPrnt:z})})]})})]})]})},p=e=>{let{tabs:s,active:i,updTab:t}=e;const[l,n]=(0,a.useState)(1),d=()=>{window.scrollTo(0,0)};return(0,c.jsx)("div",{className:"dashboard_menu",children:(0,c.jsx)("div",{className:"dashboard_fixed",style:{margin:5,borderRight:"1px solid var(--ytcp-text-secondary);)"},children:(0,c.jsx)("div",{className:"option_list",children:null===s||void 0===s?void 0:s.map((e=>(0,c.jsxs)(o.OL,{className:"bXnHlS ".concat(i===e.index?"activeTab":""),to:e.navTo,onClick:d,children:[(0,c.jsx)(v,{name:e.icon,size:22}),(0,c.jsx)("div",{className:"eULkqP",children:e.label})]},e.index)))})})})},b=e=>{let{viewId:s,activeView:i,children:a}=e;return(0,c.jsx)("div",{className:"opacityView",style:{opacity:s===i?1:0,marginTop:29},children:s===i?a:null})}},387:(e,s,i)=>{i.d(s,{AF:()=>l,Eb:()=>d,_h:()=>v,bg:()=>o,md:()=>r,pw:()=>c,w5:()=>n,yz:()=>t});var a=i(2350);const t=async e=>{let s=(0,a.bh)("init_customer_logistic_last")||0;if(Date.now()>s){var i,t,l,o;(0,a.Rz)("init_customer_logistic_last",Date.now()+140);let s={...null===(i=(0,a.bh)((0,a.hQ)()))||void 0===i?void 0:i.init_customer_logistic};s.params={businessId:null===(t=(0,a.bh)("profileUser"))||void 0===t?void 0:t.businessId};const n=(0,a.I7)(s);await n&&e&&e();let d={...null===(l=(0,a.bh)((0,a.hQ)()))||void 0===l?void 0:l.init_logistic_order};d.params={businessId:null===(o=(0,a.bh)("profileUser"))||void 0===o?void 0:o.businessId};const r=(0,a.I7)(d);await r}},l=async e=>{if((0,a.bh)("searchQryMovies").length>2){var s;let i={...null===(s=(0,a.bh)((0,a.hQ)()))||void 0===s?void 0:s.scan_video};i.params={},(0,a.bh)("searchQryMovies").split(" ").map(((e,s)=>{e&&(i.params[":search"+s]=e.trim())}));const t=(0,a.I7)(i),l=await t;l&&e&&e(l)}else e&&e(null)},o=async(e,s)=>{var i;let t={...null===(i=(0,a.bh)((0,a.hQ)()))||void 0===i?void 0:i.fndone_video};t.params={videoId:e};const l=(0,a.I7)(t),o=await l;o&&s&&s(o)},n=async(e,s)=>{let i=(0,a.bh)("episodesByIdlast")||0;if(Date.now()>i){var t;(0,a.Rz)("episodesByIdlast",Date.now()+600);let i={...null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.scan_epsd};i.params={":parentVideo":e};const l=(0,a.I7)(i),o=await l;let n={10:1,11:0,12:0},d=[];(0,a._2)(o).map((e=>{let s=o[e];if(n[s.season]){var i;let e={};e.videoId=s.episodeId,e.delivery="m3u8";let l=s.season+"x"+((t=s.episodeNo)>10?t:"0"+t);e.url="https://cdn.lqsa.es/".concat(l,"/master.m3u8");let o={...null===(i=(0,a.bh)((0,a.hQ)()))||void 0===i?void 0:i.add_streamV};o.form=e,d.push(o)}var t})),(0,a.Rz)("add_streamV",d),o&&s&&s(o)}},d=async(e,s)=>{let i=(0,a.bh)("fndone_streamV_last")||0;if(Date.now()>i){var t;(0,a.Rz)("fndone_streamV_last",Date.now()+140);let i={...null===(t=(0,a.bh)((0,a.hQ)()))||void 0===t?void 0:t.fndone_streamV};i.params={videoId:e};const l=(0,a.I7)(i),o=await l;o&&s&&s(o)}},r=async e=>{var s;if(null!==(s=(0,a.bh)((0,a.xW)()))&&void 0!==s&&s.customerLogisticId){var i,t,l;let s={...null===(i=(0,a.bh)((0,a.hQ)()))||void 0===i?void 0:i.search_logistic_orders};s.params={":senderId":null===(t=(0,a.bh)((0,a.xW)()))||void 0===t?void 0:t.customerLogisticId,businessId:null===(l=(0,a.bh)("profileUser"))||void 0===l?void 0:l.businessId},(0,a.bh)("searchLogOrders").split(" ").map(((e,i)=>{e&&(s.params[":search"+i]=e.trim())}));const o=(0,a.I7)(s),n=await o;n&&((0,a.Rz)("logistic_orders_list",n),e&&e(n))}else(0,a.Rz)("logistic_orders_list",null),e&&e()},c=async e=>{let s=(0,a.bh)("get_print_structure_last")||0;if(Date.now()>s){var i;(0,a.Rz)("get_print_structure_last",Date.now()+1490);let s={...null===(i=(0,a.bh)((0,a.hQ)()))||void 0===i?void 0:i.print_structure};const t=(0,a.I7)(s),l=await t;l&&((0,a.Rz)("print_structure",l),e&&e())}e&&e()};function v(){return(0,a.bh)("add_streamV").map((e=>{console.log(e)})),null}},9283:()=>{}}]);
//# sourceMappingURL=8285.4a145861.chunk.js.map