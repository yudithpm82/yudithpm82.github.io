"use strict";(self.webpackChunkstephanie_solution=self.webpackChunkstephanie_solution||[]).push([[4787,6349,2959,6874],{6349:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(9760),i=a(2647),s=a(2350),n=a(184);const o=(0,i.LA)(),d=e=>{let{init:t,label:a,updDate:i}=e;const d=e=>{i(e.initDate+800)};return(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:"label",children:a||"Fecha"}),(0,n.jsx)("div",{className:"date2Upd",onClick:()=>{let e={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,n.jsx)(o,{onConfirm:d,init:t}),(0,l.OpenModal)(e)},children:t?(0,s.sG)(t):(0,s.sG)((new Date).getTime())})]})}},4787:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var l=a(2791),i=a(9760),s=a(2647),n=a(2350),o=a(6349),d=a(5232),r=a(4327),c=a(4529),p=a(1439),h=a(184);const x=(0,s.PU)(),v=(0,s.pz)(),g=(0,r.QO)(),m=(0,s.Np)(),u=(0,s.YZ)(),y="upd_entryRecord",f="add_entryRecord",_=e=>{var t,a,s,o,r;let{tabs:v,active:g,updTab:m}=e;const[_,j]=(0,l.useState)(1),N=()=>{j((0,n.M5)())},z=()=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,h.jsx)(w,{confirm:D}),(0,i.OpenModal)(e)};(0,l.useEffect)((()=>{var e;let t={...(0,n.bh)((0,n.Ks)())},a=(null===t||void 0===t?void 0:t.entryRecord)||{};Array.isArray(null===(e=(0,n.bh)((0,n.Ks)()))||void 0===e?void 0:e.entryRecord)&&(a=(0,d.p6)(a)),t.entryRecord=a,(0,n.Rz)((0,n.Ks)(),t)}));const C=async e=>{let t={...(0,n.bh)((0,n.Ks)())},a=(null===t||void 0===t?void 0:t.entryRecord)||{};delete a[e],I(a)},D=e=>{let t={...(0,n.bh)((0,n.Ks)())},a=(null===t||void 0===t?void 0:t.entryRecord)||{};a[(0,n.M5)()]=e,I(a)},F=(e,t)=>{let a={...(0,n.bh)((0,n.Ks)())},l=(null===a||void 0===a?void 0:a.entryRecord)||{};l[t]=e,I(l)},I=async e=>{var t;let a={...(0,n.bh)((0,n.Ks)())},l={...null===(t=(0,n.bh)((0,n.hQ)()))||void 0===t?void 0:t.upd_notary};l.params={clientNotaryId:a.clientNotaryId},l.data2update={entryRecord:e};const i=(0,n.I7)(l),s=await i;s&&!s.error&&(a.entryRecord=e,(0,n.Rz)((0,n.Ks)(),a),(0,n.Rz)(f,null),(0,n.Rz)(y,null),j((0,n.M5)()))};let S=null===(t=(0,n.bh)((0,n.Ks)()))||void 0===t?void 0:t.entryRecord;const k=async e=>{var t,a;let l=null===(t=(0,n.bh)((0,n.Ks)()))||void 0===t?void 0:t.clientNotaryId,i={...null===(a=(0,n.bh)((0,n.hQ)()))||void 0===a?void 0:a.upd_notary};i.params={clientNotaryId:l},i.data2update=e;const s=(0,n.I7)(i),o=await s;if(o&&!o.error){await(0,d.uB)(l);N()}},O=e=>{const t=e.target.files[0],a=new FileReader;(async(e,t)=>{(0,d.Rh)(e,t,(a=>{(0,d.F2)(a,e,(()=>k({paroleImage:t})))}))})(t,(0,n.M5)()+"_"+t.name),a.addEventListener("load",(()=>{(0,n.Rz)("preview_src",a.result)}),!1),t&&a.readAsDataURL(t)},P=async()=>{let e=(0,n.bh)((0,n.Ks)()).paroleImage,t=(0,n.LH)(e);var a=await(0,d.Id)(e,(0,n.bh)((0,n.Ks)()).clientNotaryId);E(a,t)},E=async(e,t)=>{var a=await(0,n.Em)(e,t);window.open(a)},R=async e=>{let t=(0,n.LH)(e);var a=await(0,d.Id)(e,(0,n.bh)((0,n.Ks)()).clientNotaryId);A(a,t)},A=async(e,t)=>{var a=await(0,n.Em)(e,t);let l=a;(0,n.bh)((0,n.Ks)()).paroleOnPassport&&(l=await(0,c.Is)(a,t)),"pdf"!==(0,n.Z0)((0,n.bh)((0,n.Ks)()).paroleImage)&&(l=await(0,c.QU)(a,t)),window.open(l)};let H="pdf"===(0,n.Z0)(null===(a=(0,n.bh)((0,n.Ks)()))||void 0===a?void 0:a.paroleImage)?"pdf_box":"image_outline";return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{style:{paddingTop:30}}),(0,n.bh)("isMobile")?(0,h.jsxs)("div",{className:"_dsplFlx  spaceAround flxWrp",children:[(0,h.jsx)("div",{className:"card",children:(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)(p.Z,{label:"Upload file",onChange:O}),null!==(s=(0,n.bh)((0,n.Ks)()))&&void 0!==s&&s.paroleImage?(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"icon_image ",onClick:P,children:(0,h.jsx)(x,{name:H,color:"var(--partial-success)"})}),(0,h.jsx)("div",{className:"icon_image ",onClick:()=>{var e;return R(null===(e=(0,n.bh)((0,n.Ks)()))||void 0===e?void 0:e.paroleImage)},children:(0,h.jsx)(x,{name:"printer",color:"var(--danger-hover)"})})]}):null]})}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"iSTOvb kvXcCL",style:{padding:"0 9px",width:"160px"},onClick:z,children:"Agregar"})]}):(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"iMTYiw",style:{marginTop:"8px"},children:"Entradas al Pais"}),(0,h.jsx)("div",{className:"card",children:(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)(p.Z,{label:"Upload file",onChange:O,color:"#007bfc"}),null!==(o=(0,n.bh)((0,n.Ks)()))&&void 0!==o&&o.paroleImage?(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"icon_image ",onClick:P,children:(0,h.jsx)(x,{name:H,color:"var(--partial-success)"})}),(0,h.jsx)("div",{className:"icon_image ",onClick:()=>{var e;return R(null===(e=(0,n.bh)((0,n.Ks)()))||void 0===e?void 0:e.paroleImage)},children:(0,h.jsx)(x,{name:"printer",color:"var(--danger-hover)"})}),(0,h.jsxs)("div",{className:"_dsplFlx icon_image",children:[(0,h.jsx)(u,{initvalue:null===(r=(0,n.bh)((0,n.Ks)()))||void 0===r?void 0:r.paroleOnPassport,keyCode:27,updChange:e=>((e,t)=>{console.log({[e]:t}),k({[e]:t});let a={...(0,n.bh)((0,n.Ks)())};a[e]=t,console.log(a),(0,n.Rz)((0,n.Ks)(),a),N()})("paroleOnPassport",e),color:"var(--primary)"}),(0,h.jsx)("span",{className:"checklabel",children:"Parole On Passport"})]})]}):null]})}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"iSTOvb kvXcCL",style:{padding:"0 9px",width:"160px"},onClick:z,children:"Agregar"})]}),(0,h.jsx)("div",{className:"_dsplFlx spaceAround flxWrp ",style:{padding:9},children:S&&(0,n._2)(S).map(((e,t)=>(0,h.jsx)(b,{index:t,idKey:e,itm:S[e],updObs:j,update:F,rmv:C},e+"_school")))})]})},b=e=>{let{itm:t,updObs:a,idKey:s,update:o,rmv:d,index:r}=e;const[c,p]=(0,l.useState)(!1),m=e=>{(0,n.vQ)(e)},u=e=>{o(e,s)},f=e=>{d(s)};let _=(0,n.bh)("addressItemActive")===s;return(0,h.jsxs)("div",{className:"client_item_box gWXAaj jlytmu ".concat(_?"active":""),onClick:e=>{(0,n.bh)("addressItemActive")!==s&&(e.stopPropagation(),e.preventDefault(),(0,n.Rz)("addressItemActive",s),a((0,n.M5)()))},children:[(0,h.jsxs)("div",{className:"menu_icon_acc _dsplFlx",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsxs)("div",{className:"menu_icon_acc _dsplFlx",children:[(0,h.jsx)("div",{className:"icon_action",onClick:()=>p(!c),children:(0,h.jsx)(x,{name:"link",color:"var(--light-300)"})}),(0,h.jsx)("div",{className:"icon_action",onClick:()=>{(0,n.Rz)(y,t),(0,n.Rz)(y+"_bck",JSON.parse(JSON.stringify(t)));let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,h.jsx)(j,{confirm:u}),(0,i.OpenModal)(e)},children:(0,h.jsx)(x,{name:"outline_edit",color:"var(--light-300)"})}),(0,h.jsx)("div",{className:"icon_action",onClick:()=>{let e=(0,n.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,n.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,h.jsx)(v,{confirm:f,lbl_p:"Eliminar Direccion",lbl_span:"Una vez eliminado no podra ser recuperado"}),(0,i.OpenModal)(e)}},children:(0,h.jsx)(x,{name:"outline_delete",color:"var(--light-300)"})})]})]}),c?(0,h.jsx)(g,{onSelect:e=>{if(e.data){let a=e.data,l=(null===a||void 0===a?void 0:a.entryRecord)||{};l[s]=t,(async(e,t)=>{var a;let l={...(0,n.bh)((0,n.Ks)())},i={...null===(a=(0,n.bh)((0,n.hQ)()))||void 0===a?void 0:a.upd_notary};i.params={clientNotaryId:t||l.clientNotaryId},i.data2update={entryRecord:e};const s=(0,n.I7)(i),o=await s;o&&!o.error&&p(!1)})(l,e.id)}},exFlds:["entryRecord"]}):null,(0,h.jsx)("div",{className:"_dsplFlx ",children:(0,h.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,h.jsx)("div",{className:"lbl_h_dtls",children:"Place of Entry:"}),(0,h.jsx)("div",{className:"lbl_dtls",onClick:()=>m(null===t||void 0===t?void 0:t.placeOfEntry),children:null===t||void 0===t?void 0:t.placeOfEntry})]})}),(0,h.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,h.jsx)("div",{className:"lbl_h_dtls",children:"Date of Entry:"}),(0,h.jsx)("div",{className:"lbl_dtls",onClick:()=>m((0,n.sJ)(null===t||void 0===t?void 0:t.dateOfEntry)),children:(0,n.sG)(null===t||void 0===t?void 0:t.dateOfEntry)})]}),(0,h.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,h.jsx)("div",{className:"lbl_h_dtls",children:"Date Left:"}),(0,h.jsx)("div",{className:"lbl_dtls",onClick:()=>m((0,n.sJ)(null===t||void 0===t?void 0:t.dateOfLeft)),children:(0,n.sG)(null===t||void 0===t?void 0:t.dateOfLeft)})]}),(0,h.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,h.jsx)("div",{className:"lbl_h_dtls",children:"Status:"}),(0,h.jsx)("div",{className:"lbl_dtls",onClick:()=>m(null===t||void 0===t?void 0:t.status),children:null===t||void 0===t?void 0:t.status})]})]})},j=e=>{var t,a,s,d,r;let{data:c,itm:x,active:v,confirm:g}=e;const[u,f]=(0,l.useState)(1),_=(e,t,a)=>{let l=(0,n.bh)(y)||{};a?(l[a]||(l[a]={}),l[a][e]=t):l[e]=t,(0,n.Rz)(y,l),f((0,n.M5)())},b=()=>{(null===c||void 0===c?void 0:c.modalID)&&(0,i.CloseModal)({id:null===c||void 0===c?void 0:c.modalID})};let j=(0,n.vy)(["dateOfEntry","status","dateOfLeft","placeOfEntry","state"],(0,n.bh)(y),(0,n.bh)(y+"_bck"));return(0,h.jsxs)("div",{style:{maxHeight:"80vh",width:"820px",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("p",{className:"form_title",children:"Actualizar Entrada al Pais"}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"30px 0px 0 0"},children:(0,h.jsx)(m,{init:null===(t=(0,n.bh)(y))||void 0===t?void 0:t.placeOfEntry,label:"Place of Entry",width:460,updChanges:e=>_("placeOfEntry",e)})}),(0,h.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"30px 0px 0 0"},children:(0,h.jsx)(m,{init:null===(a=(0,n.bh)(y))||void 0===a?void 0:a.state,label:"State of Entry",width:160,updChanges:e=>_("state",e)})}),(0,h.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",children:(0,h.jsx)(m,{init:null===(s=(0,n.bh)(y))||void 0===s?void 0:s.status,label:"Status",width:500,updChanges:e=>_("status",e)})}),(0,h.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,h.jsx)("div",{style:{margin:"30px 10px 0 0"},children:(0,h.jsx)(o.Z,{init:null===(d=(0,n.bh)(y))||void 0===d?void 0:d.dateOfEntry,label:"Date of Entry",updDate:e=>_("dateOfEntry",e)})}),(0,h.jsx)("div",{style:{margin:"30px 10px 0 0"},children:(0,h.jsx)(o.Z,{init:null===(r=(0,n.bh)(y))||void 0===r?void 0:r.dateOfLeft,label:"Date of Left",updDate:e=>_("dateOfLeft",e)})})]}),null!==j&&void 0!==j&&j.hasChange?(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"card",children:(0,h.jsx)(p.N,{color:"#007bfc",label:"Actualizar",clickHandler:async()=>{let e=(0,n.bh)(y);g&&g(e),b()}})})]}):(0,h.jsx)("div",{className:"card"})]})},w=e=>{var t,a,s,d,r;let{data:c,confirm:x}=e;const[v,g]=(0,l.useState)(1),u=(e,t,a)=>{let l=(0,n.bh)(f)||{};a?(l[a]||(l[a]={}),l[a][e]=t):l[e]=t,(0,n.Rz)(f,l),g((0,n.M5)())},_=()=>{(null===c||void 0===c?void 0:c.modalID)&&(0,i.CloseModal)({id:null===c||void 0===c?void 0:c.modalID})};return(0,h.jsxs)("div",{style:{maxHeight:"80vh",width:"820px",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("p",{className:"form_title",children:"Agregar Entrada al Pais"}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"30px 0px 0 0"},children:(0,h.jsx)(m,{init:null===(t=(0,n.bh)(f))||void 0===t?void 0:t.placeOfEntry,label:"Place of Entry",width:460,updChanges:e=>u("placeOfEntry",e)})}),(0,h.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",style:{margin:"30px 0px 0 0"},children:(0,h.jsx)(m,{init:null===(a=(0,n.bh)(y))||void 0===a?void 0:a.state,label:"State of Entry",width:160,updChanges:e=>u("state",e)})}),(0,h.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",children:(0,h.jsx)(m,{init:null===(s=(0,n.bh)(f))||void 0===s?void 0:s.status,label:"Status",width:500,updChanges:e=>u("status",e)})}),(0,h.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,h.jsx)("div",{style:{margin:"30px 10px 0 0"},children:(0,h.jsx)(o.Z,{init:null===(d=(0,n.bh)(f))||void 0===d?void 0:d.dateOfEntry,label:"Date of Entry",updDate:e=>u("dateOfEntry",e)})}),(0,h.jsx)("div",{style:{margin:"30px 10px 0 0"},children:(0,h.jsx)(o.Z,{init:null===(r=(0,n.bh)(f))||void 0===r?void 0:r.dateOfLeft,label:"Date of Left",updDate:e=>u("dateOfLeft",e)})})]}),(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"card",children:(0,h.jsx)(p.N,{color:"#007bfc",label:"Agregar",clickHandler:async()=>{let e=(0,n.bh)(f);x&&x(e),_()}})})]})]})}},4529:(e,t,a)=>{a.d(t,{Is:()=>o,QU:()=>d,Tq:()=>x,sR:()=>r,vF:()=>c});var l=a(6963),i=a(2350),s=a(4e3),n=a(1479);async function o(e,t,a){const i=[612,792];var o=null;(o=await l.PDFDocument.create()).registerFontkit(s.Z);await(0,n.h2)(o);const d=await fetch(e).then((e=>e.arrayBuffer()));let r=null;console.log(t),r="image/jpg"===t||"image/jpeg"===t?await o.embedJpg(d):await o.embedPng(d);var c=null;c=o.addPage(i);const{width:p,height:h}=c.getSize();r&&c.drawImage(r,{x:146,y:h-641,width:320,height:490});let x=a?a.split(" ").join("_")+"_passportFrame_EN":"_passportFrame";o.setTitle(x),o.setAuthor("Stephanie Solution Group"),o.setCreator("Stephanie Solution Group"),o.setCreationDate(new Date),o.setModificationDate(new Date);{const e=await o.save();return(0,n.ou)(e)}}async function d(e,t,a){const i=await l.PDFDocument.create(),s=i.addPage([612,792]),{width:o,height:d}=s.getSize(),r=await fetch(e).then((e=>e.arrayBuffer()));let c=null;"image/jpg"===t||"image/jpeg"===t?c=await i.embedJpg(r):"image/png"===t&&(c=await i.embedPng(r));let p=c.size();(p.width>o||p.height>d)&&(p=c.scaleToFit(o,d)),s.drawImage(c,{x:o/2-p.width/2,y:d/2-p.height/2,width:p.width,height:p.height});const h=await i.save();return(0,n.ou)(h)}async function r(e,t,a,i,o){const d=[612,792];var r=null;(r=await l.PDFDocument.create()).registerFontkit(s.Z);await(0,n.h2)(r);const c=await fetch(e).then((e=>e.arrayBuffer()));let p=null;p="image/jpg"===t||"image/jpeg"===t?await r.embedJpg(c):await r.embedPng(c);const h=await fetch(a).then((e=>e.arrayBuffer()));let x=null;x="image/jpg"===i||"image/jpeg"===i?await r.embedJpg(h):await r.embedPng(h);var v=null;v=r.addPage(d);const{width:g,height:m}=v.getSize();p&&v.drawImage(p,{x:175,y:m-300,width:260,height:170}),x&&v.drawImage(x,{x:175,y:m-600,width:260,height:170});let u=o?o.split(" ").join("_")+"_idsFrame_EN":"_idsFrame";r.setTitle(u),r.setAuthor("Stephanie Solution Group"),r.setCreator("Stephanie Solution Group"),r.setCreationDate(new Date),r.setModificationDate(new Date);{const e=await r.save();return(0,n.ou)(e)}}async function c(e,t,a,i,o,d,r){const c=[612,792];var p=null;(p=await l.PDFDocument.create()).registerFontkit(s.Z);await(0,n.h2)(p);const h=await fetch(e).then((e=>e.arrayBuffer()));let x=null;x="image/jpg"===t||"image/jpeg"===t?await p.embedJpg(h):await p.embedPng(h);const v=await fetch(a).then((e=>e.arrayBuffer()));let g=null;g="image/jpg"===i||"image/jpeg"===i?await p.embedJpg(v):await p.embedPng(v);const m=await fetch(o).then((e=>e.arrayBuffer()));let u=null;u="image/jpg"===d||"image/jpeg"===d?await p.embedJpg(m):await p.embedPng(m);var y=null;y=p.addPage(c);const{width:f,height:_}=y.getSize();x&&y.drawImage(u,{x:175,y:_-220,width:260,height:170}),x&&y.drawImage(x,{x:175,y:_-490,width:260,height:170}),g&&y.drawImage(g,{x:175,y:_-730,width:260,height:170});let b=r?r.split(" ").join("_")+"_idsFrame_EN":"_idsFrame";p.setTitle(b),p.setAuthor("Stephanie Solution Group"),p.setCreator("Stephanie Solution Group"),p.setCreationDate(new Date),p.setModificationDate(new Date);{const e=await p.save();return(0,n.ou)(e)}}let p=8.5,h={cid:{type:"text",text:"",x:190,y:68,size:9.5,color:[104,104,104],font:"Harting_plain",pageNo:0},class:{type:"text",text:"",x:203,y:58,size:9.5,color:[104,104,104],font:"Harting_plain",pageNo:0},fisrtnameU:{type:"text",text:"",x:95,y:105,size:11,color:[104,104,104],font:"Harting_plain",pageNo:0},lastNameU:{type:"text",text:"",x:95,y:117,size:11,color:[104,104,104],font:"Harting_plain",pageNo:0},backCode:{type:"text",text:"57292",x:446,y:183,size:14,color:[41,41,41],font:"roboto_regular",pageNo:0},f_code:{type:"text",text:"57292",x:94,y:178,size:p,color:[104,104,104],font:"Harting_plain",pageNo:0},iss_yy:{type:"text",text:"",x:138,y:178,size:p,color:[104,104,104],font:"Harting_plain",pageNo:0},exp_yy:{type:"text",text:"",x:191,y:178,size:p,color:[104,104,104],font:"Harting_plain",pageNo:0},exp_mm:{type:"text",text:"",x:168,y:178,size:p,color:[104,104,104],font:"Harting_plain",pageNo:0},dob_yy:{type:"text",text:"",x:21,y:178,size:p,color:[104,104,104],font:"Harting_plain",pageNo:0},dob_mm:{type:"text",text:"",x:44,y:178,size:p,color:[104,104,104],font:"Harting_plain",pageNo:0},dob_dd:{type:"text",text:"",x:63,y:178,size:p,color:[104,104,104],font:"Harting_plain",pageNo:0},limitante:{type:"text",text:"NINGUNA",x:33,y:140,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CB_mm:{type:"text",text:"",x:383,y:100,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CB_yy:{type:"text",text:"",x:382,y:108,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA1_mm:{type:"text",text:"",x:383,y:45,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA1_yy:{type:"text",text:"",x:382,y:53,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA_mm:{type:"",text:"",x:383,y:72,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA_yy:{type:"text",text:"",x:382,y:80,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0}};async function x(e,t){const a=[560,205];let o=182.5,d=266.5;var r=null;(r=await l.PDFDocument.create()).registerFontkit(s.Z);const c=await(0,n.h2)(r);let p=(0,i.bh)("DL_cuba_f.png");const x=await fetch(p).then((e=>e.arrayBuffer()));let v=null;v=await r.embedPng(x);let g=(0,i.bh)("DL_cuba_b.png");const m=await fetch(g).then((e=>e.arrayBuffer()));let u=null;u=await r.embedPng(m);var y=null;y=r.addPage(a);const{width:f,height:_}=y.getSize();v&&y.drawImage(v,{x:10,y:_-o-10,width:d,height:o}),u&&y.drawImage(u,{x:276.5,y:_-o-10,width:d,height:o});let b=(0,i._I)(h);const j=r.getPages();(0,i._2)(e).map((t=>{b[t]&&e[t]?b[t].text=e[t]:delete b[t]})),b&&(0,i._2)(b).map((async e=>{let t=b[e];if(t){var a;let e=t.pageNo,n=null===j||void 0===j||null===(a=j[e])||void 0===a?void 0:a.getSize();if("text"===t.type){var s;let a=t.text?t.text.toString():"";null===(s=j[e])||void 0===s||s.drawText(a,{x:t.x,y:n.height-t.y,size:t.size||10,font:(0,i.Pn)(t.font)||c.TimesRomanItalic,color:t.color?(0,l.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,l.rgb)(0,0,0)})}else if("multi_line"===t.type){let a=t.text?t.text.toString():"",s=t.lineHeight||10;const o=(0,l.layoutMultilineText)(a,{alignment:"left",font:(0,i.Pn)(t.font)||c.TimesRomanItalic,fontSize:t.size||9,lineHeight:s,bounds:{width:f-100,height:500}});let d=n.height-t.y;for(let n=0;n<o.lines.length;n++)j[e].drawText("".concat(o.lines[n].text),{x:t.x,y:d,size:t.size||9,maxWidth:f-100,font:(0,i.Pn)(t.font)||c.TimesRomanItalic,color:t.color?(0,l.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,l.rgb)(0,0,0)}),d-=s;return d}}}));let w=t?t.split(" ").join("_")+"_idsFrame_EN":"_idsFrame";r.setTitle(w),r.setAuthor("Stephanie Solution Group"),r.setCreator("Stephanie Solution Group"),r.setCreationDate(new Date),r.setModificationDate(new Date);{const e=await r.save();return(0,n.ou)(e)}}}}]);
//# sourceMappingURL=4787.a4e51c52.chunk.js.map