"use strict";(self.webpackChunkstephanie_solution=self.webpackChunkstephanie_solution||[]).push([[3759,6349,2959,6874],{6349:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(9760),s=a(2647),l=a(2350),o=a(184);const n=(0,s.LA)(),r=e=>{let{init:t,label:a,updDate:s}=e;const r=e=>{s(e.initDate+800)};return(0,o.jsxs)("div",{children:[(0,o.jsx)("p",{className:"label",children:a||"Fecha"}),(0,o.jsx)("div",{className:"date2Upd",onClick:()=>{let e={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,o.jsx)(n,{onConfirm:r,init:t}),(0,i.OpenModal)(e)},children:t?(0,l.sG)(t):(0,l.sG)((new Date).getTime())})]})}},3759:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var i=a(2791),s=a(9760),l=a(2647),o=a(2350),n=a(6349),r=a(5232),d=a(1439),c=a(7719),p=a(2539),h=a(184);(0,l.Np)(),(0,l.tW)(),(0,l.PU)();const x="generated_form_passport",u=e=>{var t;let{data:a,s3Path:l,image:n,item:r,confirm:d}=e;const[,u]=(0,i.useState)(1);(0,i.useEffect)((()=>{var e;null!==(e=(0,o.bh)("preview_dmz"))&&void 0!==e&&e.w||v(n)}),[n]);const m=e=>{u((0,o.M5)())},v=e=>{var t=new Image;t.onload=function(){let e={oh:t.height,ow:t.width,h:t.height,w:t.width};(0,o.Rz)("preview_dmz",e),m()},e&&(t.src=e)},g=()=>{(null===a||void 0===a?void 0:a.modalID)&&(0,s.CloseModal)({id:null===a||void 0===a?void 0:a.modalID})};return(0,h.jsx)("div",{style:{maxHeight:"88vh",width:"88vw",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px 25px"},children:(0,h.jsxs)("div",{className:"_dsplFlx ",style:{padding:9,width:"100%"},children:[(0,h.jsx)("div",{style:{width:"50%",height:"90vmin",padding:"5px!important"},children:(0,h.jsx)(c.Z,{action:"update",frmNm3:x,updObs:m,updFrm:(e,t)=>{let a=(0,o.bh)(x)||{};a[e]=t,(0,o.Rz)(x,a),u((0,o.M5)())},item:r,confirm:e=>{d(e),g()},s3Path:l,image:n})}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{style:{height:"86vmin",padding:"5px!important"},children:null!==(t=(0,o.bh)("preview_dmz"))&&void 0!==t&&t.w?(0,h.jsx)(p.pl,{image:n,dmz:(0,o.bh)("preview_dmz")}):null})]})})};var m=a(4529);const v=(0,l.PU)(),g=(0,l.pz)(),b=(0,l.Np)(),_="upd_passportRecord",f="add_passportRecord",y=e=>{var t,a,l,n;let{tabs:c,active:p,updTab:x}=e;const[,g]=(0,i.useState)(1),[b,y]=(0,i.useState)(!1);(0,i.useEffect)((()=>{var e;let t={...(0,o.bh)((0,o.Ks)())},a=(null===t||void 0===t?void 0:t.passportRecord)||{};Array.isArray(null===(e=(0,o.bh)((0,o.Ks)()))||void 0===e?void 0:e.passportRecord)&&(a=(0,r.p6)(a)),t.passportRecord=a,(0,o.Rz)((0,o.Ks)(),t)}));const j=async e=>{let t={...(0,o.bh)((0,o.Ks)())},a=(null===t||void 0===t?void 0:t.passportRecord)||{};delete a[e],D(a)},I=e=>{let t={...(0,o.bh)((0,o.Ks)())},a=(null===t||void 0===t?void 0:t.passportRecord)||{};a[(0,o.M5)()]=e,D(a)},z=(e,t)=>{let a={...(0,o.bh)((0,o.Ks)())},i=(null===a||void 0===a?void 0:a.passportRecord)||{};i[t]=e,D(i)},D=async e=>{var t;let a={...(0,o.bh)((0,o.Ks)())},i={...null===(t=(0,o.bh)((0,o.hQ)()))||void 0===t?void 0:t.upd_notary};i.params={clientNotaryId:a.clientNotaryId},i.data2update={passportRecord:e};const s=(0,o.I7)(i),l=await s;l&&!l.error&&(a.passportRecord=e,(0,o.Rz)((0,o.Ks)(),a),(0,o.Rz)(f,null),(0,o.Rz)(_,null),g((0,o.M5)()))};let P=null===(t=(0,o.bh)((0,o.Ks)()))||void 0===t?void 0:t.passportRecord;const C=async e=>{var t,a;let i=null===(t=(0,o.bh)((0,o.Ks)()))||void 0===t?void 0:t.clientNotaryId,s={...null===(a=(0,o.bh)((0,o.hQ)()))||void 0===a?void 0:a.upd_notary};s.params={clientNotaryId:i},s.data2update=e;const l=(0,o.I7)(s),n=await l;if(n&&!n.error){let e=await(0,r.uB)(i);console.log(e),g((0,o.M5)())}},F=async e=>{let t=(0,o.LH)(e);var a=await(0,r.Id)(e,(0,o.bh)((0,o.Ks)()).clientNotaryId);R(a,t)},S=async e=>{let t=(0,o.LH)(e);var a=await(0,r.Id)(e,(0,o.bh)((0,o.Ks)()).clientNotaryId);H(a,t)},R=async(e,t)=>{var a=await(0,o.Em)(e,t);window.open(a)},H=async(e,t)=>{var a=await(0,o.Em)(e,t);let i=await(0,m.Is)(a,t);window.open(i)};let k="pdf"===(0,o.Z0)(null===(a=(0,o.bh)((0,o.Ks)()))||void 0===a?void 0:a.passportImage)?"pdf_box":"image_outline";return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{style:{paddingTop:30}}),(0,h.jsxs)("div",{className:"_dsplFlx ".concat((0,o.bh)("isMobile")?"spaceAround flxWrp":""),children:[(0,o.bh)("isMobile")?null:(0,h.jsx)("div",{className:"iMTYiw",style:{marginTop:"8px"},children:"Passports"}),(0,h.jsxs)("div",{className:"_dsplFlx ",style:{margin:"20px 0"},children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"card",children:(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)(d.Z,{label:"Upload file",onChange:e=>{const t=e.target.files[0],a=new FileReader;(async(e,t)=>{(0,r.Rh)(e,t,(a=>{(0,r.F2)(a,e,(()=>C({passportImage:t})))}))})(t,(0,o.M5)()+"_"+t.name),a.addEventListener("load",(()=>{(0,o.Rz)("preview_src",a.result)}),!1),t&&a.readAsDataURL(t)},color:"#005DBB"}),null!==(l=(0,o.bh)((0,o.Ks)()))&&void 0!==l&&l.passportImage?(0,h.jsx)("div",{className:"icon_image ",onClick:async()=>{let e=(0,o.bh)((0,o.Ks)()).passportImage,t=(0,o.LH)(e);var a=await(0,r.Id)(e,(0,o.bh)((0,o.Ks)()).clientNotaryId);R(a,t)},children:(0,h.jsx)(v,{name:k,color:"var(--partial-success)"})}):null,(0,o.CO)(null===(n=(0,o.bh)((0,o.Ks)()))||void 0===n?void 0:n.passportImage)?(0,h.jsx)("div",{style:{marginLeft:12},children:(0,h.jsx)(d.N,{label:"Fill from Image",clickHandler:async()=>{let e=(0,o.bh)((0,o.Ks)()).passportImage,t=(0,o.LH)(e);var a=await(0,r.v8)(e),i=await(0,o.Em)(a.url,t);let l=e.split(".").pop(),n=e.split("."+l)[0]+"_mrz."+l,d=(0,o.LH)(n);var c=await(0,r.v8)(n),p=null;null!==c&&void 0!==c&&c.url&&(p=await(0,o.Em)(c.url,d));let x={fileName:n,blob:p,s3Path:null===c||void 0===c?void 0:c.s3Path};(0,o.Rz)("mrzObj",x);let m="passport_"+(0,o.M5)();(0,o.Rz)("generated_form_passport",null),(0,o.Rz)("loading_image_text",!0),(0,o.Rz)("image_text",null);let v={zIndex:450};v.id=m,v.height="80vh",v.props={minHeight:"1vh",overlay:!0},v.content=(0,h.jsx)(u,{confirm:I,image:i,s3Path:null===a||void 0===a?void 0:a.s3Path,mrz_blob:p,mrz_s3Path:null===c||void 0===c?void 0:c.s3Path,item:{modalId:m,image:i,s3Path:null===a||void 0===a?void 0:a.s3Path,mrz:x,fileName:(0,o.bh)((0,o.Ks)()).passportImage}}),(0,s.OpenModal)(v)},color:"#007bfc"})}):null]})}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"iSTOvb kvXcCL",style:{padding:"0 9px",width:"160px"},onClick:()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,h.jsx)(N,{confirm:I}),(0,s.OpenModal)(e)},children:"Agregar"})]}),(0,h.jsx)("div",{className:"_dsplFlx spaceAround flxWrp ",style:{padding:9},children:P&&(0,o._2)(P).map(((e,t)=>{var a;return(0,h.jsx)(w,{index:t,currentPassport:null===(a=(0,o.bh)((0,o.Ks)()))||void 0===a?void 0:a.currentPassport,idKey:e,itm:P[e],updObs:g,update:z,rmv:j,openImage:F,openPaspportPdf:S,updClient:C},e+"_employer")}))})]})},w=e=>{let{itm:t,updObs:a,idKey:i,update:l,rmv:n,openImage:r,openPaspportPdf:d,currentPassport:c,updClient:p}=e;const x=e=>{(0,o.vQ)(e)},u=e=>{l(e,i)},m=e=>{n(i)};let b=(0,o.bh)("currentPassport")===i,f=c===i;return(0,h.jsxs)("div",{className:"client_item_box gWXAaj jlytmu ".concat(b?"active":""),onClick:e=>{(0,o.bh)("currentPassport")!==i&&(e.stopPropagation(),e.preventDefault(),(0,o.Rz)("currentPassport",i),a((0,o.M5)()))},children:[(0,h.jsxs)("div",{className:"_dsplFlx ".concat((0,o.bh)("isMobile")?"spaceAround flxWrp":""),children:[null!==t&&void 0!==t&&t.passportImage?(0,h.jsxs)("div",{className:" _dsplFlx",children:[(0,h.jsx)("div",{className:"icon_image ",onClick:()=>r(null===t||void 0===t?void 0:t.passportImage),children:(0,h.jsx)(v,{name:"image_outline",color:"var(--partial-success)"})}),(0,h.jsx)("div",{className:"icon_image ",onClick:()=>d(null===t||void 0===t?void 0:t.passportImage),children:(0,h.jsx)(v,{name:"printer",color:"var(--danger-hover)"})})]}):null,(0,h.jsx)("div",{className:" _dsplFlx",children:(0,h.jsx)("div",{className:"icon_image ",onClick:e=>{p({currentPassport:i})},children:(0,h.jsx)(v,{name:f?"star":"star_outline",color:f?"var(--partial-success)":"var(--text_color_32)"})})}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:"menu_icon_acc _dsplFlx",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"icon_action",onClick:()=>{(0,o.Rz)(_,t),(0,o.Rz)(_+"_bck",JSON.parse(JSON.stringify(t)));let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,h.jsx)(j,{confirm:u}),(0,s.OpenModal)(e)},children:(0,h.jsx)(v,{name:"outline_edit",color:"var(--text_color_32)"})}),(0,h.jsx)("div",{className:"icon_action",onClick:()=>{let e=(0,o.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,o.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,h.jsx)(g,{confirm:m,lbl_p:"Delete Passport",lbl_span:"Una vez eliminado no podra ser recuperado"}),(0,s.OpenModal)(e)}},children:(0,h.jsx)(v,{name:"outline_delete",color:"var(--text_color_32)"})})]})]}),(0,h.jsx)("div",{className:"_dsplFlx ".concat((0,o.bh)("isMobile")?"spaceAround flxWrp":""),children:(0,h.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,h.jsx)("div",{className:"lbl_h_dtls",children:"Passport Number:"}),(0,h.jsx)("div",{className:"lbl_dtls",onClick:()=>x(null===t||void 0===t?void 0:t.passportNumber),children:null===t||void 0===t?void 0:t.passportNumber})]})}),(0,h.jsx)("div",{className:"_dsplFlx ".concat((0,o.bh)("isMobile")?"spaceAround flxWrp":""),children:(0,h.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,h.jsx)("div",{className:"lbl_h_dtls",children:"Country of Issuance:"}),(0,h.jsx)("div",{className:"lbl_dtls",onClick:()=>x(null===t||void 0===t?void 0:t.countryOfIssuance),children:null===t||void 0===t?void 0:t.countryOfIssuance})]})}),(0,h.jsxs)("div",{className:"_dsplFlx ".concat((0,o.bh)("isMobile")?"spaceAround flxWrp":""),children:[(0,h.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,h.jsx)("div",{className:"lbl_h_dtls",children:"Expiration:"}),(0,h.jsx)("div",{className:"lbl_dtls",onClick:()=>x((0,o.sJ)(null===t||void 0===t?void 0:t.expirationDate)),children:(0,o.sG)(null===t||void 0===t?void 0:t.expirationDate)})]}),(0,h.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,h.jsx)("div",{className:"lbl_h_dtls",children:"Issue:"}),(0,h.jsx)("div",{className:"lbl_dtls",onClick:()=>x((0,o.sJ)(null===t||void 0===t?void 0:t.issueDate)),children:(0,o.sG)(null===t||void 0===t?void 0:t.issueDate)})]})]})]})},j=e=>{var t,a,l,r,c;let{data:p,confirm:x}=e;const[u,m]=(0,i.useState)(1),v=(e,t,a)=>{let i=(0,o.bh)(_)||{};a?(i[a]||(i[a]={}),i[a][e]=t):i[e]=t,(0,o.Rz)(_,i),m((0,o.M5)())},g=()=>{(null===p||void 0===p?void 0:p.modalID)&&(0,s.CloseModal)({id:null===p||void 0===p?void 0:p.modalID})};let f=(0,o.vy)(["issueDate","expirationDate","countryOfIssuance","passportNumber","passportImage"],(0,o.bh)(_),(0,o.bh)(_+"_bck"));return(0,h.jsxs)("div",{style:{maxHeight:"80vh",width:"820px",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("p",{className:"form_title",children:"Update Passport"}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsx)(b,{init:null===(t=(0,o.bh)(_))||void 0===t?void 0:t.passportImage,label:"Passport Image Url",width:260,updChanges:e=>v("passportImage",e)}),(0,h.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"30px 0px 0 0"},children:[(0,h.jsx)(b,{init:null===(a=(0,o.bh)(_))||void 0===a?void 0:a.passportNumber,label:"Passport Number",width:260,updChanges:e=>v("passportNumber",e)}),(0,h.jsx)(b,{init:null===(l=(0,o.bh)(_))||void 0===l?void 0:l.countryOfIssuance,label:"Country of Issuance",width:400,updChanges:e=>v("countryOfIssuance",e)})]}),(0,h.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,h.jsx)("div",{style:{margin:"30px 10px 0 0"},children:(0,h.jsx)(n.Z,{init:null===(r=(0,o.bh)(_))||void 0===r?void 0:r.expirationDate,label:"Expiration",updDate:e=>v("expirationDate",e)})}),(0,h.jsx)("div",{style:{margin:"30px 10px 0 0"},children:(0,h.jsx)(n.Z,{init:null===(c=(0,o.bh)(_))||void 0===c?void 0:c.issueDate,label:"Issue",updDate:e=>v("issueDate",e)})})]}),null!==f&&void 0!==f&&f.hasChange?(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"card",children:(0,h.jsx)(d.N,{color:"#007bfc",label:"Actualizar",clickHandler:async()=>{let e=(0,o.bh)(_);x&&x(e),g()}})})]}):(0,h.jsx)("div",{className:"card"})]})},N=e=>{var t,a,l,r;let{data:c,confirm:p}=e;const[x,u]=(0,i.useState)(1),m=(e,t,a)=>{let i=(0,o.bh)(f)||{};a?(i[a]||(i[a]={}),i[a][e]=t):i[e]=t,(0,o.Rz)(f,i),u((0,o.M5)())},v=()=>{(null===c||void 0===c?void 0:c.modalID)&&(0,s.CloseModal)({id:null===c||void 0===c?void 0:c.modalID})};return(0,h.jsxs)("div",{style:{maxHeight:"80vh",width:"820px",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("p",{className:"form_title",children:"Agregar Passport"}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"30px 0px 0 0"},children:[(0,h.jsx)(b,{init:null===(t=(0,o.bh)(f))||void 0===t?void 0:t.passportNumber,label:"Passport Number",width:260,updChanges:e=>m("passportNumber",e)}),(0,h.jsx)(b,{init:null===(a=(0,o.bh)(f))||void 0===a?void 0:a.countryOfIssuance,label:"Country of Issuance",width:400,updChanges:e=>m("countryOfIssuance",e)})]}),(0,h.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,h.jsx)("div",{style:{margin:"30px 10px 0 0"},children:(0,h.jsx)(n.Z,{init:null===(l=(0,o.bh)(f))||void 0===l?void 0:l.expirationDate,label:"Expiration",updDate:e=>m("expirationDate",e)})}),(0,h.jsx)("div",{style:{margin:"30px 10px 0 0"},children:(0,h.jsx)(n.Z,{init:null===(r=(0,o.bh)(f))||void 0===r?void 0:r.issueDate,label:"Issue",updDate:e=>m("issueDate",e)})})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"card",children:(0,h.jsx)(d.N,{color:"#007bfc",label:"Agregar",clickHandler:async()=>{let e=(0,o.bh)(f);p&&p(e),v()}})})]})]})}},4529:(e,t,a)=>{a.d(t,{Is:()=>n,QU:()=>r,Tq:()=>x,sR:()=>d,vF:()=>c});var i=a(6963),s=a(2350),l=a(4e3),o=a(1479);async function n(e,t,a){const s=[612,792];var n=null;(n=await i.PDFDocument.create()).registerFontkit(l.Z);await(0,o.h2)(n);const r=await fetch(e).then((e=>e.arrayBuffer()));let d=null;console.log(t),d="image/jpg"===t||"image/jpeg"===t?await n.embedJpg(r):await n.embedPng(r);var c=null;c=n.addPage(s);const{width:p,height:h}=c.getSize();d&&c.drawImage(d,{x:146,y:h-641,width:320,height:490});let x=a?a.split(" ").join("_")+"_passportFrame_EN":"_passportFrame";n.setTitle(x),n.setAuthor("Stephanie Solution Group"),n.setCreator("Stephanie Solution Group"),n.setCreationDate(new Date),n.setModificationDate(new Date);{const e=await n.save();return(0,o.ou)(e)}}async function r(e,t,a){const s=await i.PDFDocument.create(),l=s.addPage([612,792]),{width:n,height:r}=l.getSize(),d=await fetch(e).then((e=>e.arrayBuffer()));let c=null;"image/jpg"===t||"image/jpeg"===t?c=await s.embedJpg(d):"image/png"===t&&(c=await s.embedPng(d));let p=c.size();(p.width>n||p.height>r)&&(p=c.scaleToFit(n,r)),l.drawImage(c,{x:n/2-p.width/2,y:r/2-p.height/2,width:p.width,height:p.height});const h=await s.save();return(0,o.ou)(h)}async function d(e,t,a,s,n){const r=[612,792];var d=null;(d=await i.PDFDocument.create()).registerFontkit(l.Z);await(0,o.h2)(d);const c=await fetch(e).then((e=>e.arrayBuffer()));let p=null;p="image/jpg"===t||"image/jpeg"===t?await d.embedJpg(c):await d.embedPng(c);const h=await fetch(a).then((e=>e.arrayBuffer()));let x=null;x="image/jpg"===s||"image/jpeg"===s?await d.embedJpg(h):await d.embedPng(h);var u=null;u=d.addPage(r);const{width:m,height:v}=u.getSize();p&&u.drawImage(p,{x:175,y:v-300,width:260,height:170}),x&&u.drawImage(x,{x:175,y:v-600,width:260,height:170});let g=n?n.split(" ").join("_")+"_idsFrame_EN":"_idsFrame";d.setTitle(g),d.setAuthor("Stephanie Solution Group"),d.setCreator("Stephanie Solution Group"),d.setCreationDate(new Date),d.setModificationDate(new Date);{const e=await d.save();return(0,o.ou)(e)}}async function c(e,t,a,s,n,r,d){const c=[612,792];var p=null;(p=await i.PDFDocument.create()).registerFontkit(l.Z);await(0,o.h2)(p);const h=await fetch(e).then((e=>e.arrayBuffer()));let x=null;x="image/jpg"===t||"image/jpeg"===t?await p.embedJpg(h):await p.embedPng(h);const u=await fetch(a).then((e=>e.arrayBuffer()));let m=null;m="image/jpg"===s||"image/jpeg"===s?await p.embedJpg(u):await p.embedPng(u);const v=await fetch(n).then((e=>e.arrayBuffer()));let g=null;g="image/jpg"===r||"image/jpeg"===r?await p.embedJpg(v):await p.embedPng(v);var b=null;b=p.addPage(c);const{width:_,height:f}=b.getSize();x&&b.drawImage(g,{x:175,y:f-220,width:260,height:170}),x&&b.drawImage(x,{x:175,y:f-490,width:260,height:170}),m&&b.drawImage(m,{x:175,y:f-730,width:260,height:170});let y=d?d.split(" ").join("_")+"_idsFrame_EN":"_idsFrame";p.setTitle(y),p.setAuthor("Stephanie Solution Group"),p.setCreator("Stephanie Solution Group"),p.setCreationDate(new Date),p.setModificationDate(new Date);{const e=await p.save();return(0,o.ou)(e)}}let p=8.5,h={cid:{type:"text",text:"",x:190,y:68,size:9.5,color:[104,104,104],font:"Harting_plain",pageNo:0},class:{type:"text",text:"",x:203,y:58,size:9.5,color:[104,104,104],font:"Harting_plain",pageNo:0},fisrtnameU:{type:"text",text:"",x:95,y:105,size:11,color:[104,104,104],font:"Harting_plain",pageNo:0},lastNameU:{type:"text",text:"",x:95,y:117,size:11,color:[104,104,104],font:"Harting_plain",pageNo:0},backCode:{type:"text",text:"57292",x:446,y:183,size:14,color:[41,41,41],font:"roboto_regular",pageNo:0},f_code:{type:"text",text:"57292",x:94,y:178,size:p,color:[104,104,104],font:"Harting_plain",pageNo:0},iss_yy:{type:"text",text:"",x:138,y:178,size:p,color:[104,104,104],font:"Harting_plain",pageNo:0},exp_yy:{type:"text",text:"",x:191,y:178,size:p,color:[104,104,104],font:"Harting_plain",pageNo:0},exp_mm:{type:"text",text:"",x:168,y:178,size:p,color:[104,104,104],font:"Harting_plain",pageNo:0},dob_yy:{type:"text",text:"",x:21,y:178,size:p,color:[104,104,104],font:"Harting_plain",pageNo:0},dob_mm:{type:"text",text:"",x:44,y:178,size:p,color:[104,104,104],font:"Harting_plain",pageNo:0},dob_dd:{type:"text",text:"",x:63,y:178,size:p,color:[104,104,104],font:"Harting_plain",pageNo:0},limitante:{type:"text",text:"NINGUNA",x:33,y:140,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CB_mm:{type:"text",text:"",x:383,y:100,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CB_yy:{type:"text",text:"",x:382,y:108,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA1_mm:{type:"text",text:"",x:383,y:45,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA1_yy:{type:"text",text:"",x:382,y:53,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA_mm:{type:"",text:"",x:383,y:72,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA_yy:{type:"text",text:"",x:382,y:80,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0}};async function x(e,t){const a=[560,205];let n=182.5,r=266.5;var d=null;(d=await i.PDFDocument.create()).registerFontkit(l.Z);const c=await(0,o.h2)(d);let p=(0,s.bh)("DL_cuba_f.png");const x=await fetch(p).then((e=>e.arrayBuffer()));let u=null;u=await d.embedPng(x);let m=(0,s.bh)("DL_cuba_b.png");const v=await fetch(m).then((e=>e.arrayBuffer()));let g=null;g=await d.embedPng(v);var b=null;b=d.addPage(a);const{width:_,height:f}=b.getSize();u&&b.drawImage(u,{x:10,y:f-n-10,width:r,height:n}),g&&b.drawImage(g,{x:276.5,y:f-n-10,width:r,height:n});let y=(0,s._I)(h);const w=d.getPages();(0,s._2)(e).map((t=>{y[t]&&e[t]?y[t].text=e[t]:delete y[t]})),y&&(0,s._2)(y).map((async e=>{let t=y[e];if(t){var a;let e=t.pageNo,o=null===w||void 0===w||null===(a=w[e])||void 0===a?void 0:a.getSize();if("text"===t.type){var l;let a=t.text?t.text.toString():"";null===(l=w[e])||void 0===l||l.drawText(a,{x:t.x,y:o.height-t.y,size:t.size||10,font:(0,s.Pn)(t.font)||c.TimesRomanItalic,color:t.color?(0,i.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,i.rgb)(0,0,0)})}else if("multi_line"===t.type){let a=t.text?t.text.toString():"",l=t.lineHeight||10;const n=(0,i.layoutMultilineText)(a,{alignment:"left",font:(0,s.Pn)(t.font)||c.TimesRomanItalic,fontSize:t.size||9,lineHeight:l,bounds:{width:_-100,height:500}});let r=o.height-t.y;for(let o=0;o<n.lines.length;o++)w[e].drawText("".concat(n.lines[o].text),{x:t.x,y:r,size:t.size||9,maxWidth:_-100,font:(0,s.Pn)(t.font)||c.TimesRomanItalic,color:t.color?(0,i.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,i.rgb)(0,0,0)}),r-=l;return r}}}));let j=t?t.split(" ").join("_")+"_idsFrame_EN":"_idsFrame";d.setTitle(j),d.setAuthor("Stephanie Solution Group"),d.setCreator("Stephanie Solution Group"),d.setCreationDate(new Date),d.setModificationDate(new Date);{const e=await d.save();return(0,o.ou)(e)}}}}]);
//# sourceMappingURL=3759.45460125.chunk.js.map