"use strict";(self.webpackChunkstephanie_solution=self.webpackChunkstephanie_solution||[]).push([[5271,7567],{7567:(a,e,l)=>{l.r(e),l.d(e,{default:()=>r,loadEvidence:()=>v,loadImage:()=>c});var d=l(2791),i=l(2647),s=l(2350),t=l(5232),n=l(184);(0,i.PU)();const o=(0,i.tW)(),r=a=>{var e,l,i,r,c;let{ImgS3Url:u,imgId:m,urlBasic:h,clickHandle:p,width:g}=a;const[,x]=(0,d.useState)(1),[I,b]=(0,d.useState)(""),f=()=>{x((0,s.M5)())};(0,d.useEffect)((()=>{h?b(h):u?y(u):m&&w(m)}),[u,m,h]);const w=async a=>{var e;let l={...null===(e=(0,s.bh)((0,s.hQ)()))||void 0===e?void 0:e.id_img_loc};l.params={imgLocId:a};const d=(0,s.I7)(l),i=await d;console.log(i)},y=async a=>{var e;let l={...null===(e=(0,s.bh)((0,s.hQ)()))||void 0===e?void 0:e.id_img_loc};l.params={imgLocId:a};const d=(0,s.I7)(l);await d};(0,d.useEffect)((()=>{var a;!I||null!==(a=(0,s.bh)("loadedImages"))&&void 0!==a&&a[I]||(setTimeout((()=>{var a,e;null!==(a=(0,s.bh)("loadedImagesMetadata"))&&void 0!==a&&null!==(e=a[I])&&void 0!==e&&e.w2hRel&&f()}),1800),setTimeout((()=>{var a,e;null!==(a=(0,s.bh)("loadedImagesMetadata"))&&void 0!==a&&null!==(e=a[I])&&void 0!==e&&e.w2hRel&&f()}),1200),v([I]))}),[I]);let N=g||250,j=N/1.6;var _,S;null!==(e=(0,s.bh)("loadedImagesMetadata"))&&void 0!==e&&null!==(l=e[I])&&void 0!==l&&l.w2hRel&&(j=N/(null===(_=(0,s.bh)("loadedImagesMetadata"))||void 0===_||null===(S=_[I])||void 0===S?void 0:S.w2hRel));const k=async(a,e)=>{var l=await(0,s.Em)(a,e);window.open(l)};return(0,n.jsx)("div",{className:" ",children:I?null!==(i=(0,s.bh)("loadedImagesMetadata"))&&void 0!==i&&null!==(r=i[I])&&void 0!==r&&r.w2hRel?(0,n.jsx)("div",{className:"_dsplFlx ",children:(0,n.jsx)("div",{className:"prev_document ",onClick:async()=>{if(p)p();else{let e=(0,s.LH)(I);var a=await(0,t.v8)(I);k(a.url,e)}},children:(0,n.jsx)("img",{src:null===(c=(0,s.bh)("loadedImages"))||void 0===c?void 0:c[I],alt:I,style:{width:N,height:j}})})}):(0,n.jsxs)("div",{className:"icon_compr _dsplFlx",style:{marginTop:10},children:[(0,n.jsx)("div",{className:"lbl_saving prev_document ",children:"getting Image ..."}),(0,n.jsx)(o,{stroke:"var(--partial-success)",size:24,strokeW:8})]}):null})},v=async a=>{let e=(0,s.bh)("loadedImages")||{};const l=a.map((async a=>{a&&(e[a]=await c(a),(0,s.lK)(a,e[a]))}));await Promise.all(l);return(0,s.Rz)("loadedImages",e),!0},c=async a=>{let e=(0,s.LH)(a);var l=await(0,t.v8)(a);return(null===l||void 0===l?void 0:l.url)&&await(0,s.Em)(null===l||void 0===l?void 0:l.url,e)}},5271:(a,e,l)=>{l.r(e),l.d(e,{SignatureImage:()=>I,default:()=>x,loadEvidence:()=>y,print3DriverLicenseFrame:()=>f,printDriverLicenseFrame:()=>w});var d=l(2791),i=(l(9760),l(2647)),s=l(2350),t=l(5232),n=l(4529),o=l(1439),r=(l(2539),l(184));(0,i.Np)(),(0,i.n3)(),(0,i.A5)(),(0,i.PU)(),(0,i.tW)();var v=l(2010),c=(l(3054),l(1112)),u=l(4327),m=l(7567);const h=(0,i.PU)(),p=((0,i.tW)(),(0,i.A5)()),g="DriverLicense_form",x=a=>{let{clientItm:e}=a;const[,l]=(0,d.useState)(1),[i,n]=(0,d.useState)(!1),[u,m]=(0,d.useState)(!1),x=()=>{l((0,s.M5)())};(0,d.useEffect)((()=>{i||(I(),(0,s.Rz)(g,{dlvState:null===e||void 0===e?void 0:e.dlvState,countryOfIssuance:null===e||void 0===e?void 0:e.countryOfIssuance,dlvExpirationDate:null===e||void 0===e?void 0:e.dlvExpirationDate,dlvIssueDate:null===e||void 0===e?void 0:e.dlvIssueDate}),n(1))}));const I=async()=>{let a=(0,s.bh)("loadKeysEv_last")||0;if(Date.now()>a){(0,s.Rz)("loadKeysEv_last",Date.now()+990);await y();x()}},f=async(a,e,l)=>{(0,t.Rh)(a,e,(d=>{(0,t.F2)(d,a,(()=>(async(a,e)=>{var l,d;let i=null===(l=(0,s.bh)((0,s.Ks)()))||void 0===l?void 0:l.clientNotaryId,n={...null===(d=(0,s.bh)((0,s.hQ)()))||void 0===d?void 0:d.upd_notary};n.params={clientNotaryId:i},n.data2update=a;const o=(0,s.I7)(n),r=await o;if(r&&!r.error){let a=(0,s.bh)("loadedImages")||{};a[e]=null,(0,s.Rz)("loadedImages",a),await(0,t.uB)(i),x()}})({[l]:e},l)))}))},N=(a,e)=>{const l=a.target.files[0],d=new FileReader;let i=(0,s.M5)()+"_"+l.name;f(l,i,e),d.addEventListener("load",(()=>{(0,s.Rz)("preview_src",d.result)}),!1),l&&d.readAsDataURL(l)},j=async()=>{let a=(0,s.bh)((0,s.Ks)()).paroleImage,e=(0,s.LH)(a);var l=await(0,t.Id)(a,(0,s.bh)((0,s.Ks)()).clientNotaryId);_(l,e)},_=async(a,e)=>{var l=await(0,s.Em)(a,e);window.open(l)};return null!==e&&void 0!==e&&e.hasDL?(0,r.jsxs)("div",{className:" ",children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"iMTYiw card",style:{marginTop:"8px"},children:"Driver License"}),(0,r.jsx)("div",{className:"icon_image ",onClick:()=>m(!u),style:{padding:25},children:(0,r.jsx)(h,{name:"outline_edit",color:"var(--partial-success)"})}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsxs)("div",{className:"_dsplFlx card",children:[(0,r.jsxs)("div",{className:" ",children:[(0,r.jsx)("div",{className:"_dsplFlx spaceAround flxWrp",style:{padding:"10px 0"},children:(0,r.jsx)(p,{init:null===e||void 0===e?void 0:e.dlvState,lbl_empty:"State",list:v.Vg,onSelect:a=>((a,e)=>{let d=(0,s.bh)(g)||{};d[a]=e,(0,s.Rz)(g,d),l((0,s.M5)())})("dlvState",a.id),background:"var(--dark-900)",color:"var(--light-200)",direction:"left",width:"320px"})}),(0,r.jsx)(c.LabelEditInput,{title:"No:",frmNm:g,keyfld:"dlNumber",updObs:x,edit:u}),(0,r.jsx)(c.LabelEditInput,{title:"Class:",frmNm:g,keyfld:"dlvClass",updObs:x,edit:u}),(0,r.jsx)(c.LabelEditDateInput,{title:"Issue Date:",frmNm:g,keyfld:"dlvIssueDate",updObs:x,edit:u}),(0,r.jsx)(c.LabelEditDateInput,{title:"Expiration Date:",frmNm:g,keyfld:"dlvExpirationDate",updObs:x,edit:u}),(0,r.jsx)("div",{className:"_dsplFlx   spaceAround flxWrp",children:(0,r.jsx)(o.N,{color:"#007bfc",label:"Save",clickHandler:async()=>{var a,e;let d=(0,s.bh)(g),i=null===(a=(0,s.bh)((0,s.Ks)()))||void 0===a?void 0:a.clientNotaryId,t={...null===(e=(0,s.bh)((0,s.hQ)()))||void 0===e?void 0:e.upd_notary};t.params={clientNotaryId:i},t.data2update=d;const n=(0,s.I7)(t),o=await n;o&&!o.error&&l((0,s.M5)())}})})]}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsxs)("div",{className:"_dsplFlx   spaceAround flxWrp",style:{width:560},children:[(0,r.jsx)(b,{fld:"dlFrontImage",importCSV:N,openImage:j,label:"Upload Driver License front"}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)(b,{fld:"dlBackImage",importCSV:N,openImage:j,label:"Upload Driver License back"})]}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"icon_image ",onClick:()=>(async()=>{let a=await w();window.open(a)})(),children:(0,r.jsx)(h,{name:"printer",color:"var(--danger-hover)"})})]})]}):(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"iMTYiw card",style:{marginTop:"8px"},children:"No Data Found"}),(0,r.jsx)("div",{className:"flexSpace"})]})},I=a=>{var e,l;let{flnNm:i,imgSign:n,onHandle:o}=a;const[,v]=(0,d.useState)(1),c=async(a,e)=>{if(a){const e=await fetch(a),l=await e.text();let d=(0,s.bh)("imageSignatures")||{};d[i]=l,(0,s.Rz)("imageSignatures",d),v((0,s.M5)())}};return(0,d.useEffect)((()=>{(async a=>{(0,s.LH)(a);var e=await(0,t.Id)(a,(0,s.bh)((0,s.Ks)()).clientNotaryId);c(e)})(i)}),[i]),null!==(e=(0,s.bh)("imageSignatures"))&&void 0!==e&&e[i]?(0,r.jsx)("div",{className:"_dsplFlx ",onClick:()=>o(i),children:(0,r.jsx)("div",{className:"prev_signature ",children:(0,r.jsx)("img",{src:null===(l=(0,s.bh)("imageSignatures"))||void 0===l?void 0:l[i],alt:i})})},i):null},b=a=>{var e,l,d,i;let{fld:t,importCSV:n,openImage:v,label:c,docType:m}=a,h=156.25;var p,g;null!==(e=(0,s.bh)("loadedImagesMetadata"))&&void 0!==e&&null!==(l=e[t])&&void 0!==l&&l.w2hRel&&(h=250/(null===(p=(0,s.bh)("loadedImagesMetadata"))||void 0===p||null===(g=p[t])||void 0===g?void 0:g.w2hRel));return(0,r.jsxs)("div",{className:" ",children:[(0,r.jsx)(o.Z,{label:c,onChange:a=>n(a,t),width:250,color:"#f4f4f4"}),null!==(d=(0,s.bh)((0,s.Ks)()))&&void 0!==d&&d[t]?(0,r.jsx)(u.xu,{openImage:v,urlBasic:null===(i=(0,s.bh)((0,s.Ks)()))||void 0===i?void 0:i[t]}):null]})},f=async()=>{var a,e,l,d,i,t,o,r,v;let c=(0,s.LH)(null===(a=(0,s.bh)((0,s.Ks)()))||void 0===a?void 0:a.dlFrontImage),u=null===(e=(0,s.bh)("loadedImages"))||void 0===e?void 0:e[null===(l=(0,s.bh)((0,s.Ks)()))||void 0===l?void 0:l.dlFrontImage],m=(0,s.LH)(null===(d=(0,s.bh)((0,s.Ks)()))||void 0===d?void 0:d.dlBackImage),h=null===(i=(0,s.bh)("loadedImages"))||void 0===i?void 0:i[null===(t=(0,s.bh)((0,s.Ks)()))||void 0===t?void 0:t.dlBackImage],p=(0,s.LH)(null===(o=(0,s.bh)((0,s.Ks)()))||void 0===o?void 0:o.greenCardFrontImage),g=null===(r=(0,s.bh)("loadedImages"))||void 0===r?void 0:r[null===(v=(0,s.bh)((0,s.Ks)()))||void 0===v?void 0:v.greenCardFrontImage];if(u&&h){return await(0,n.vF)(u,c,h,m,g,p)}return null},w=async()=>{var a,e,l,d,i,t;let o=(0,s.LH)(null===(a=(0,s.bh)((0,s.Ks)()))||void 0===a?void 0:a.dlFrontImage),r=null===(e=(0,s.bh)("loadedImages"))||void 0===e?void 0:e[null===(l=(0,s.bh)((0,s.Ks)()))||void 0===l?void 0:l.dlFrontImage],v=(0,s.LH)(null===(d=(0,s.bh)((0,s.Ks)()))||void 0===d?void 0:d.dlBackImage),c=null===(i=(0,s.bh)("loadedImages"))||void 0===i?void 0:i[null===(t=(0,s.bh)((0,s.Ks)()))||void 0===t?void 0:t.dlBackImage];if(r&&c){return await(0,n.sR)(r,o,c,v)}return null},y=async a=>{let e=(0,s.bh)("loadedImages")||{};const l=a.map((async a=>{a&&(e[a]=await(0,m.loadImage)(a),(0,s.lK)(a,e[a]))}));await Promise.all(l);return(0,s.Rz)("loadedImages",e),!0}}}]);
//# sourceMappingURL=5271.63cd20b7.chunk.js.map