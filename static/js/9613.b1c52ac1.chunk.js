(self.webpackChunkstephanie_solution=self.webpackChunkstephanie_solution||[]).push([[9613,2539],{1112:(e,t,i)=>{"use strict";i.r(t),i.d(t,{DropDwnEditInput:()=>D,DropDwnSearchEditInput:()=>S,LabelEditDateInput:()=>I,LabelEditInput:()=>j,SignatureImage:()=>y,default:()=>f,loadEvidence:()=>_,printDriverLicenseFrame:()=>w,printGreenCardFrame:()=>b});var a=i(2791),l=i(2647),n=i(2350),s=i(5232),o=i(4529),r=i(1439),d=i(2539),c=i(4327),u=i(3661);async function m(e){let t=await fetch(e).then((e=>e.arrayBuffer()));return await async function(e){console.log(u.version);let t=await(0,u.getDocument)({data:e}).promise,i=Array.from({length:t.numPages},(async(e,i)=>(await(await t.getPage(i+1)).getTextContent()).items.map((e=>e.str)).join("")));return(await Promise.all(i)).join("")}(t)}u.GlobalWorkerOptions.workerSrc="https://cdn.jsdelivr.net/npm/pdfjs-dist@3.6.172/build/pdf.worker.min.js";var v=i(184);const h=(0,l.PU)(),g=((0,l.tW)(),(0,c.QO)()),p=(0,l.n3)(),x="I94_form",f=e=>{var t,i,l,o,d;let{clientItm:c}=e;const[,u]=(0,a.useState)(1),[p,f]=(0,a.useState)(!1),[y,b]=(0,a.useState)(!1),[w,N]=(0,a.useState)(!1),D=()=>{u((0,n.M5)())};(0,a.useEffect)((()=>{p||(C(),(0,n.Rz)(x,{i94Number:null===c||void 0===c?void 0:c.i94Number,i94ClassAdmission:null===c||void 0===c?void 0:c.i94ClassAdmission,i94ExpirationDate:null===c||void 0===c?void 0:c.i94ExpirationDate,i94Status:null===c||void 0===c?void 0:c.i94Status,i94Doc:null===c||void 0===c?void 0:c.i94Doc,i94EntryDate:null===c||void 0===c?void 0:c.i94EntryDate}),f(1))}));const C=async()=>{let e=(0,n.bh)("loadKeysEv_last")||0;if(Date.now()>e){(0,n.Rz)("loadKeysEv_last",Date.now()+990);await _();D()}},k=async(e,t,i)=>{(0,s.Rh)(e,t,(a=>{(0,s.F2)(a,e,(()=>(async(e,t)=>{var i;let a=null===c||void 0===c?void 0:c.clientNotaryId,l={...null===(i=(0,n.bh)((0,n.hQ)()))||void 0===i?void 0:i.upd_notary};l.params={clientNotaryId:a},l.data2update=e;const o=(0,n.I7)(l),r=await o;r&&!r.error&&(await(0,s.uB)(a),D())})({[i]:t})))}))},F=async(e,t)=>{var i=await(0,n.Em)(e,t);window.open(i)},E=async e=>{var t;let i=e||(0,n.bh)(x),a=null===c||void 0===c?void 0:c.clientNotaryId,l={...null===(t=(0,n.bh)((0,n.hQ)()))||void 0===t?void 0:t.upd_notary};l.params={clientNotaryId:a},l.data2update=i;const o=(0,n.I7)(l),r=await o;if(r&&!r.error){var d;let e=null===(d=(0,n.bh)((0,n.Ks)()))||void 0===d?void 0:d.clientNotaryId;await(0,s.uB)(e);u((0,n.M5)())}},z=e=>(0,n.bh)("drpDwnInmigrationStatus").filter((t=>((e,t)=>e.label.toLowerCase().indexOf(t.toLowerCase())>=0?e:null)(t,e)))||[],A=e=>{let t={},i=e;["Record Number","Last/Surname","First (Given) Name","Birth Date","Document Number","Country of Citizenship","Effective","DHS began","Arrival/Issued","Class of Admission","Admit Until","Details provided","Expiration Date","Privacy"].map((e=>{i=i.split(e).join("&&"+e)})),console.log(i.split("&&")),i.split("&&").map((e=>{console.log(e);let i=e.split(":");if(2===i.length){let e=null===i||void 0===i?void 0:i[1].trim();if(console.log(i),console.log(e),i[0].indexOf("Arrival/Issued")>=0){let i=e;t.i94EntryDate=new Date(i).getTime()}if(i[0].indexOf("Record Number")>=0&&(t.i94Number=e),i[0].indexOf("Admit Until Date")>=0){let i=e;t.i94ExpirationDate=new Date(i).getTime()}i[0].indexOf("Class of Admission")>=0&&(t.i94Status=e,t.i94ClassAdmission=e),i[0].indexOf("Document Number")>=0&&(t.i94Doc=e)}})),console.log(t),t.i94EntryDate&&E(t)};return null!==c&&void 0!==c&&c.hasI94?(0,v.jsxs)("div",{className:" ",children:[(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"iMTYiw card",style:{marginTop:"8px"},children:"I-94"}),w?(0,v.jsx)("div",{style:{padding:25},children:(0,v.jsx)(g,{onSelect:e=>{(async(e,t)=>{var i;let a={...(0,n.bh)((0,n.Ks)())},l={...null===(i=(0,n.bh)((0,n.hQ)()))||void 0===i?void 0:i.upd_notary};l.params={clientNotaryId:t||a.clientNotaryId},l.data2update=e;const s=(0,n.I7)(l),o=await s;o&&!o.error&&N(!1)})({...(0,n.bh)(x)},e.id)}})}):null,(0,v.jsx)("div",{className:"icon_image",style:{padding:25},onClick:e=>{N(!w)},children:(0,v.jsx)(h,{name:w?"cancel":"content-copy",color:w?"var(--danger-hover)":"var(--partial-success)"})}),(0,v.jsx)("div",{className:"flexSpace"})]}),(0,v.jsx)("div",{className:"card",children:(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)(r.Z,{label:"Upload file",onChange:e=>{const t=e.target.files[0],i=new FileReader;let a=(0,n.M5)()+"_"+t.name;k(t,a,"I94_docform"),t&&i.readAsDataURL(t)},color:"#007bfc"}),null!==(t=(0,n.bh)((0,n.Ks)()))&&void 0!==t&&t.I94_docform?(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"icon_image ",onClick:async()=>{let e=c.I94_docform,t=(0,n.LH)(e);var i=await(0,s.Id)(e,(0,n.bh)((0,n.Ks)()).clientNotaryId);F(i,t)},children:(0,v.jsx)(h,{name:"pdf_box",color:"var(--partial-success)"})}),(0,v.jsx)("div",{className:"icon_image ",onClick:()=>{var e;return(async()=>{let e=c.I94_docform,t=(0,n.LH)(e);var i=await(0,s.Id)(e,(0,n.bh)((0,n.Ks)()).clientNotaryId),a=await(0,n.Em)(i,t);let l=await m(a);A(l)})(null===(e=(0,n.bh)((0,n.Ks)()))||void 0===e||e.I94_docform)},children:(0,v.jsx)(h,{name:"printer",color:"var(--hrm_blue300_text_color)"})})]}):null]})}),(0,v.jsxs)("div",{className:"_dsplFlx   spaceAround flxWrp",children:[(0,v.jsx)(j,{title:"i94 Number:",frmNm:x,keyfld:"i94Number",updObs:D,edit:y}),(0,v.jsx)(I,{title:"Expiration Date:",frmNm:x,keyfld:"i94ExpirationDate",updObs:D,edit:y}),(0,v.jsxs)("div",{className:"_dsplFlx   spaceAround flxWrp",style:{margin:"25px"},children:[(0,v.jsx)(S,{title:"Class Admission:",frmNm:x,keyfld:"i94ClassAdmission",value:null===(i=(0,n.bh)("objInmigrationStatus"))||void 0===i?void 0:i[null===(l=(0,n.bh)(x))||void 0===l?void 0:l.i94ClassAdmission],updObs:D,edit:y,filterStatus:z}),(0,v.jsx)(S,{title:"Current Status:",frmNm:x,keyfld:"i94Status",value:null===(o=(0,n.bh)("objInmigrationStatus"))||void 0===o?void 0:o[null===(d=(0,n.bh)(x))||void 0===d?void 0:d.i94Status],updObs:D,edit:y,filterStatus:z})]})]}),(0,v.jsx)("div",{className:"_dsplFlx   spaceAround flxWrp",style:{margin:"25px"},children:(0,v.jsx)(r.N,{color:"#007bfc",label:"Save",clickHandler:()=>E(null)})})]}):(0,v.jsxs)("div",{className:"_dsplFlx ",children:[(0,v.jsx)("div",{className:"flexSpace"}),(0,v.jsx)("div",{className:"iMTYiw card",style:{marginTop:"8px"},children:"No Data Found"}),(0,v.jsx)("div",{className:"flexSpace"})]})},y=e=>{var t,i;let{flnNm:l,imgSign:o,onHandle:r}=e;const[,d]=(0,a.useState)(1),c=async(e,t)=>{if(e){const t=await fetch(e),i=await t.text();let a=(0,n.bh)("imageSignatures")||{};a[l]=i,(0,n.Rz)("imageSignatures",a),d((0,n.M5)())}};return(0,a.useEffect)((()=>{(async e=>{(0,n.LH)(e);var t=await(0,s.Id)(e,(0,n.bh)((0,n.Ks)()).clientNotaryId);c(t)})(l)}),[l]),null!==(t=(0,n.bh)("imageSignatures"))&&void 0!==t&&t[l]?(0,v.jsx)("div",{className:"_dsplFlx ",onClick:()=>r(l),children:(0,v.jsx)("div",{className:"prev_signature ",children:(0,v.jsx)("img",{src:null===(i=(0,n.bh)("imageSignatures"))||void 0===i?void 0:i[l],alt:l})})},l):null},b=async()=>{var e,t,i,a;let l=(0,n.LH)(null===(e=(0,n.bh)((0,n.Ks)()))||void 0===e?void 0:e.greenCardFrontImage),s=null===(t=(0,n.bh)("loadedImages"))||void 0===t?void 0:t.greenCardFrontImage,r=(0,n.LH)(null===(i=(0,n.bh)((0,n.Ks)()))||void 0===i?void 0:i.greenCardBackImage),d=null===(a=(0,n.bh)("loadedImages"))||void 0===a?void 0:a.greenCardBackImage;if(s&&s){return await(0,o.sR)(s,l,d,r)}return null},w=async()=>{var e,t,i,a;let l=(0,n.LH)(null===(e=(0,n.bh)((0,n.Ks)()))||void 0===e?void 0:e.dlFrontImage),s=null===(t=(0,n.bh)("loadedImages"))||void 0===t?void 0:t.dlFrontImage,r=(0,n.LH)(null===(i=(0,n.bh)((0,n.Ks)()))||void 0===i?void 0:i.dlBackImage),d=null===(a=(0,n.bh)("loadedImages"))||void 0===a?void 0:a.dlBackImage;if(s&&s){return await(0,o.sR)(s,l,d,r)}return null},_=async()=>{let e=(0,n.bh)("loadedImages")||{};const t=["greenCardFrontImage","greenCardBackImage","dlFrontImage","dlBackImage","I589_receiptNotice_proof","I589_ASC_proof","I94_docform"].map((async t=>{var i,a;null!==(i=(0,n.bh)((0,n.Ks)()))&&void 0!==i&&i[t]&&(e[t]=await N(null===(a=(0,n.bh)((0,n.Ks)()))||void 0===a?void 0:a[t]),(0,n.lK)(t,e[t]))}));await Promise.all(t);return(0,n.Rz)("loadedImages",e),!0},N=async e=>{let t=(0,n.LH)(e);var i=await(0,s.Id)(e,(0,n.bh)((0,n.Ks)()).clientNotaryId);return await(0,n.Em)(i,t)},j=e=>{var t;let{title:i,frmNm:a,keyfld:l,updObs:s,edit:o}=e;return(0,v.jsx)(v.Fragment,{children:o?(0,v.jsx)(d.SO,{title:i,frmNm:a,keyfld:l,updObs:s}):(0,v.jsx)(d.NV,{label:i,value:null===(t=(0,n.bh)(a))||void 0===t?void 0:t[l]})})},I=e=>{var t,i;let{title:a,frmNm:l,keyfld:s,updObs:o,edit:r}=e;return(0,v.jsx)(v.Fragment,{children:r?(0,v.jsx)(d.Fm,{title:a,frmNm:l,keyfld:s,updObs:o}):(0,v.jsx)(d.NV,{label:a,value:null!==(t=(0,n.bh)(l))&&void 0!==t&&t[s]?(0,n.sJ)(null===(i=(0,n.bh)(l))||void 0===i?void 0:i[s]):null})})},S=e=>{var t,i,a,l,s;let{title:o,frmNm:r,keyfld:c,updObs:u,edit:m,filterStatus:h,value:g}=e;return(0,v.jsx)(v.Fragment,{children:m?(0,v.jsxs)("div",{style:{margin:"9px 1px 0 25px"},children:[(0,v.jsx)("div",{className:"statusInm_title",children:o}),(0,v.jsxs)("div",{className:"statusInm_title",children:[g,null===(t=(0,n.bh)("objInmigrationStatus"))||void 0===t?void 0:t[null===(i=(0,n.bh)(r))||void 0===i?void 0:i[c]]]}),(0,v.jsx)(p,{init:null===(a=(0,n.bh)(r))||void 0===a?void 0:a[c],lbl_empty:o,func:h,onSelect:e=>((e,t)=>{let i=(0,n.bh)(r)||{};i[e]=t,(0,n.Rz)(r,i),u((0,n.M5)())})(c,e.id),background:"var(--dark-900)",color:"var(--light-200)",direction:"left",width:"280px"})]}):(0,v.jsx)(d.NV,{label:"Class Admission: ",value:null===(l=(0,n.bh)("objInmigrationStatus"))||void 0===l?void 0:l[null===(s=(0,n.bh)(x))||void 0===s?void 0:s.i94ClassAdmission]})})},D=e=>{var t,i,a,l,s;let{title:o,frmNm:r,keyfld:c,updObs:u,edit:m,filterStatus:h,value:g}=e;return(0,v.jsx)(v.Fragment,{children:m?(0,v.jsxs)("div",{style:{margin:"9px 1px 0 25px"},children:[(0,v.jsx)("div",{className:"statusInm_title",children:o}),(0,v.jsxs)("div",{className:"statusInm_title",children:[g,null===(t=(0,n.bh)("objInmigrationStatus"))||void 0===t?void 0:t[null===(i=(0,n.bh)(r))||void 0===i?void 0:i[c]]]}),(0,v.jsx)(p,{init:null===(a=(0,n.bh)(r))||void 0===a?void 0:a[c],lbl_empty:o,func:h,onSelect:e=>((e,t)=>{let i=(0,n.bh)(r)||{};i[e]=t,(0,n.Rz)(r,i),u((0,n.M5)())})(c,e.id),background:"var(--dark-900)",color:"var(--light-200)",direction:"left",width:"280px"})]}):(0,v.jsx)(d.NV,{label:"Class Admission: ",value:null===(l=(0,n.bh)("objInmigrationStatus"))||void 0===l?void 0:l[null===(s=(0,n.bh)(x))||void 0===s?void 0:s.i94ClassAdmission]})})}},2539:(e,t,i)=>{"use strict";i.d(t,{Fm:()=>m,NV:()=>v,SO:()=>u,he:()=>h,pl:()=>d});var a=i(2791),l=i(2647),n=i(2350),s=i(184);const o=(0,l.Np)(),r=((0,l.tW)(),(0,l.PU)()),d=e=>{let{image:t,dmz:i}=e,a=i||(0,n.bh)("preview_dmz"),{KEY_VALUE_SET:l,WORD:o,LINE:r}=g((0,n.bh)("image_text"));return(0,s.jsxs)("svg",{id:"ssg_business_card_front",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 ".concat(null===a||void 0===a?void 0:a.w," ").concat(null===a||void 0===a?void 0:a.h),preserveAspectRatio:"xMidYMid meet",children:[(0,s.jsx)("style",{type:"text/css",children:'@font-face {\n\t\t\t\tfont-family: "Google Sans";\n\t\t\t\tsrc: url(http://fonts.gstatic.com/s/googlesans/v14/4UabrENHsxJlGDuGo1OIlLU94YtzCwY.woff2)\n\n\t\t\t}'}),(0,s.jsx)("rect",{width:null===a||void 0===a?void 0:a.w,height:null===a||void 0===a?void 0:a.h,fill:"#ffffff"}),(0,s.jsx)("image",{width:null===a||void 0===a?void 0:a.w,height:null===a||void 0===a?void 0:a.h,x:0,y:0,xmlnsXlink:"http://www.w3.org/1999/xlink",xlinkHref:t}),null===l||void 0===l?void 0:l.map(((e,t)=>(0,s.jsx)(c,{idKey:t+"_tann",item:e,index:t},t+"_tann"))),null===r||void 0===r?void 0:r.map(((e,t)=>(0,s.jsx)(c,{idKey:t+"_tann",item:e,index:t},t+"_tann")))]})},c=e=>{let{item:t,index:i,idKey:a}=e;const{Text:l,Geometry:o,boundingPoly:r,BlockType:d,Id:c}=t;let u="transparent";if("PAGE"===d)return null;var m;("LINE"===d&&(u="rgba(168, 199, 250,1)"),"KEY_VALUE_SET"===d)&&(u="KEY"===(null===t||void 0===t||null===(m=t.EntityTypes)||void 0===m?void 0:m[0])?"#BB021E":"#8110F1");if("WORD"===d)return null;"WORD"===d&&(u="#646cff",u="#8b949e");let v=null===r||void 0===r?void 0:r.vertices,h=l,g=o.BoundingBox,p=(0,n.bh)("preview_dmz"),x=(null===g||void 0===g?void 0:g.Height)*p.h,f=(null===g||void 0===g?void 0:g.Width)*p.w,y=(null===g||void 0===g?void 0:g.Left)*p.w,b=(null===g||void 0===g?void 0:g.Top)*p.h;return 0===i||null===v||void 0===v||v[1],(0,s.jsxs)(s.Fragment,{children:[null,(0,s.jsx)("rect",{onClick:e=>{e.stopPropagation(),e.preventDefault(),(0,n.vQ)(h)},onContextMenu:e=>{e.stopPropagation(),e.preventDefault()},width:f,height:x,fill:u,fillOpacity:"50%",x:y,y:b})]})},u=e=>{var t;let{title:i,keyfld:l,updObs:d,frmNm:c}=e;const[u,m]=(0,a.useState)(!1),[v,h]=(0,a.useState)(1),g=()=>{d&&d(),m(!1)};let p=null===(t=(0,n.bh)(c))||void 0===t?void 0:t[l];return(0,s.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,s.jsx)("div",{className:"lbl_h_dtls",style:{marginTop:u?8:1},children:i}),u?(0,s.jsxs)("div",{className:"_dsplFlx",children:[(0,s.jsx)("div",{className:"lbl_dtls",children:(0,s.jsx)(o,{init:p,width:240,updChanges:e=>((e,t)=>{let i=(0,n.bh)(c)||{};i[e]=t,(0,n.Rz)(c,i),h((0,n.M5)())})(l,e),onEnter:g})}),(0,s.jsx)("div",{className:"icon_image ",onClick:g,children:(0,s.jsx)(r,{name:"success",color:"var(--success)"})})]}):(0,s.jsx)("div",{className:"lbl_dtls",onClick:()=>m(!0),children:p||"click to type"})]})},m=e=>{var t,i;let{title:l,keyfld:d,updObs:c,frmNm:u}=e;const[m,v]=(0,a.useState)(!1),[h,g]=(0,a.useState)(1),[p,x]=(0,a.useState)(""),f=()=>{((e,t)=>{let i=(0,n.bh)(u)||{},a=new Date(t).getTime();i[e]=a,(0,n.Rz)(u,i),g((0,n.M5)())})(d,p),c&&c(),v(!1)};let y=null===(t=(0,n.bh)(u))||void 0===t?void 0:t[d],b=p||(0,n.sJ)(null===(i=(0,n.bh)(u))||void 0===i?void 0:i[d])||"";return(0,s.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,s.jsx)("div",{className:"lbl_h_dtls",style:{marginTop:m?8:1},children:l}),m?(0,s.jsxs)("div",{className:"_dsplFlx",children:[(0,s.jsx)("div",{className:"lbl_dtls",children:(0,s.jsx)(o,{init:b,width:240,updChanges:x,onEnter:f})}),(0,s.jsx)("div",{className:"icon_image ",onClick:f,children:(0,s.jsx)(r,{name:"success",color:"var(--success)"})})]}):(0,s.jsx)("div",{className:"lbl_dtls",onClick:()=>v(!0),children:(0,n.sG)(y)||"click to type"})]})},v=e=>{let{label:t,value:i}=e;return i?"object"===typeof i?null:(0,s.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,s.jsx)("div",{className:"lbl_h_dtls",children:t}),(0,s.jsx)("div",{className:"lbl_dtls",onClick:()=>{return e=i,void(0,n.vQ)(null===e||void 0===e?void 0:e.trim());var e},children:i})]}):null},h=e=>{let{label:t,value:i}=e;return i?"object"===typeof i?null:(0,s.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,s.jsx)("div",{className:"lbl_h_dtls",children:t}),(0,s.jsx)("div",{className:"lbl_dtls",onClick:()=>{return e=i,void(0,n.vQ)(null===e||void 0===e?void 0:e.trim());var e},children:"*******"})]}):null},g=e=>{let t=[],i=[],a=[];return null===e||void 0===e||e.map((e=>{let{BlockType:l}=e;"WORD"===l&&i.push(e),"LINE"===l&&a.push(e),"KEY_VALUE_SET"===l&&t.push(e)})),{KEY_VALUE_SET:t,WORD:i,LINE:a}}},4529:(e,t,i)=>{"use strict";i.d(t,{Is:()=>o,QU:()=>r,Tq:()=>v,sR:()=>d,vF:()=>c});var a=i(6963),l=i(2350),n=i(4e3),s=i(1479);async function o(e,t,i){const l=[612,792];var o=null;(o=await a.PDFDocument.create()).registerFontkit(n.Z);await(0,s.h2)(o);const r=await fetch(e).then((e=>e.arrayBuffer()));let d=null;console.log(t),d="image/jpg"===t||"image/jpeg"===t?await o.embedJpg(r):await o.embedPng(r);var c=null;c=o.addPage(l);const{width:u,height:m}=c.getSize();d&&c.drawImage(d,{x:146,y:m-641,width:320,height:490});let v=i?i.split(" ").join("_")+"_passportFrame_EN":"_passportFrame";o.setTitle(v),o.setAuthor("Stephanie Solution Group"),o.setCreator("Stephanie Solution Group"),o.setCreationDate(new Date),o.setModificationDate(new Date);{const e=await o.save();return(0,s.ou)(e)}}async function r(e,t,i){const l=await a.PDFDocument.create(),n=l.addPage([612,792]),{width:o,height:r}=n.getSize(),d=await fetch(e).then((e=>e.arrayBuffer()));let c=null;"image/jpg"===t||"image/jpeg"===t?c=await l.embedJpg(d):"image/png"===t&&(c=await l.embedPng(d));let u=c.size();(u.width>o||u.height>r)&&(u=c.scaleToFit(o,r)),n.drawImage(c,{x:o/2-u.width/2,y:r/2-u.height/2,width:u.width,height:u.height});const m=await l.save();return(0,s.ou)(m)}async function d(e,t,i,l,o){const r=[612,792];var d=null;(d=await a.PDFDocument.create()).registerFontkit(n.Z);await(0,s.h2)(d);const c=await fetch(e).then((e=>e.arrayBuffer()));let u=null;u="image/jpg"===t||"image/jpeg"===t?await d.embedJpg(c):await d.embedPng(c);const m=await fetch(i).then((e=>e.arrayBuffer()));let v=null;v="image/jpg"===l||"image/jpeg"===l?await d.embedJpg(m):await d.embedPng(m);var h=null;h=d.addPage(r);const{width:g,height:p}=h.getSize();u&&h.drawImage(u,{x:175,y:p-300,width:260,height:170}),v&&h.drawImage(v,{x:175,y:p-600,width:260,height:170});let x=o?o.split(" ").join("_")+"_idsFrame_EN":"_idsFrame";d.setTitle(x),d.setAuthor("Stephanie Solution Group"),d.setCreator("Stephanie Solution Group"),d.setCreationDate(new Date),d.setModificationDate(new Date);{const e=await d.save();return(0,s.ou)(e)}}async function c(e,t,i,l,o,r,d){const c=[612,792];var u=null;(u=await a.PDFDocument.create()).registerFontkit(n.Z);await(0,s.h2)(u);const m=await fetch(e).then((e=>e.arrayBuffer()));let v=null;v="image/jpg"===t||"image/jpeg"===t?await u.embedJpg(m):await u.embedPng(m);const h=await fetch(i).then((e=>e.arrayBuffer()));let g=null;g="image/jpg"===l||"image/jpeg"===l?await u.embedJpg(h):await u.embedPng(h);const p=await fetch(o).then((e=>e.arrayBuffer()));let x=null;x="image/jpg"===r||"image/jpeg"===r?await u.embedJpg(p):await u.embedPng(p);var f=null;f=u.addPage(c);const{width:y,height:b}=f.getSize();v&&f.drawImage(x,{x:175,y:b-220,width:260,height:170}),v&&f.drawImage(v,{x:175,y:b-490,width:260,height:170}),g&&f.drawImage(g,{x:175,y:b-730,width:260,height:170});let w=d?d.split(" ").join("_")+"_idsFrame_EN":"_idsFrame";u.setTitle(w),u.setAuthor("Stephanie Solution Group"),u.setCreator("Stephanie Solution Group"),u.setCreationDate(new Date),u.setModificationDate(new Date);{const e=await u.save();return(0,s.ou)(e)}}let u=8.5,m={cid:{type:"text",text:"",x:190,y:68,size:9.5,color:[104,104,104],font:"Harting_plain",pageNo:0},class:{type:"text",text:"",x:203,y:58,size:9.5,color:[104,104,104],font:"Harting_plain",pageNo:0},fisrtnameU:{type:"text",text:"",x:95,y:105,size:11,color:[104,104,104],font:"Harting_plain",pageNo:0},lastNameU:{type:"text",text:"",x:95,y:117,size:11,color:[104,104,104],font:"Harting_plain",pageNo:0},backCode:{type:"text",text:"57292",x:446,y:183,size:14,color:[41,41,41],font:"roboto_regular",pageNo:0},f_code:{type:"text",text:"57292",x:94,y:178,size:u,color:[104,104,104],font:"Harting_plain",pageNo:0},iss_yy:{type:"text",text:"",x:138,y:178,size:u,color:[104,104,104],font:"Harting_plain",pageNo:0},exp_yy:{type:"text",text:"",x:191,y:178,size:u,color:[104,104,104],font:"Harting_plain",pageNo:0},exp_mm:{type:"text",text:"",x:168,y:178,size:u,color:[104,104,104],font:"Harting_plain",pageNo:0},dob_yy:{type:"text",text:"",x:21,y:178,size:u,color:[104,104,104],font:"Harting_plain",pageNo:0},dob_mm:{type:"text",text:"",x:44,y:178,size:u,color:[104,104,104],font:"Harting_plain",pageNo:0},dob_dd:{type:"text",text:"",x:63,y:178,size:u,color:[104,104,104],font:"Harting_plain",pageNo:0},limitante:{type:"text",text:"NINGUNA",x:33,y:140,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CB_mm:{type:"text",text:"",x:383,y:100,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CB_yy:{type:"text",text:"",x:382,y:108,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA1_mm:{type:"text",text:"",x:383,y:45,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA1_yy:{type:"text",text:"",x:382,y:53,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA_mm:{type:"",text:"",x:383,y:72,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA_yy:{type:"text",text:"",x:382,y:80,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0}};async function v(e,t){const i=[560,205];let o=182.5,r=266.5;var d=null;(d=await a.PDFDocument.create()).registerFontkit(n.Z);const c=await(0,s.h2)(d);let u=(0,l.bh)("DL_cuba_f.png");const v=await fetch(u).then((e=>e.arrayBuffer()));let h=null;h=await d.embedPng(v);let g=(0,l.bh)("DL_cuba_b.png");const p=await fetch(g).then((e=>e.arrayBuffer()));let x=null;x=await d.embedPng(p);var f=null;f=d.addPage(i);const{width:y,height:b}=f.getSize();h&&f.drawImage(h,{x:10,y:b-o-10,width:r,height:o}),x&&f.drawImage(x,{x:276.5,y:b-o-10,width:r,height:o});let w=(0,l._I)(m);const _=d.getPages();(0,l._2)(e).map((t=>{w[t]&&e[t]?w[t].text=e[t]:delete w[t]})),w&&(0,l._2)(w).map((async e=>{let t=w[e];if(t){var i;let e=t.pageNo,s=null===_||void 0===_||null===(i=_[e])||void 0===i?void 0:i.getSize();if("text"===t.type){var n;let i=t.text?t.text.toString():"";null===(n=_[e])||void 0===n||n.drawText(i,{x:t.x,y:s.height-t.y,size:t.size||10,font:(0,l.Pn)(t.font)||c.TimesRomanItalic,color:t.color?(0,a.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,a.rgb)(0,0,0)})}else if("multi_line"===t.type){let i=t.text?t.text.toString():"",n=t.lineHeight||10;const o=(0,a.layoutMultilineText)(i,{alignment:"left",font:(0,l.Pn)(t.font)||c.TimesRomanItalic,fontSize:t.size||9,lineHeight:n,bounds:{width:y-100,height:500}});let r=s.height-t.y;for(let s=0;s<o.lines.length;s++)_[e].drawText("".concat(o.lines[s].text),{x:t.x,y:r,size:t.size||9,maxWidth:y-100,font:(0,l.Pn)(t.font)||c.TimesRomanItalic,color:t.color?(0,a.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,a.rgb)(0,0,0)}),r-=n;return r}}}));let N=t?t.split(" ").join("_")+"_idsFrame_EN":"_idsFrame";d.setTitle(N),d.setAuthor("Stephanie Solution Group"),d.setCreator("Stephanie Solution Group"),d.setCreationDate(new Date),d.setModificationDate(new Date);{const e=await d.save();return(0,s.ou)(e)}}},3414:()=>{},172:()=>{},2001:()=>{},3779:()=>{},6558:()=>{},2258:()=>{}}]);
//# sourceMappingURL=9613.b1c52ac1.chunk.js.map