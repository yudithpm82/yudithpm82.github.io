"use strict";(self.webpackChunkstephanie_solution=self.webpackChunkstephanie_solution||[]).push([[292,2539,7567],{7567:(l,e,a)=>{a.r(e),a.d(e,{default:()=>r,loadEvidence:()=>c,loadImage:()=>v});var s=a(2791),d=a(2647),i=a(2350),t=a(5232),n=a(184);(0,d.PU)();const o=(0,d.tW)(),r=l=>{var e,a,d,r,v;let{ImgS3Url:u,imgId:m,urlBasic:h,clickHandle:p,width:x}=l;const[,g]=(0,s.useState)(1),[b,f]=(0,s.useState)(""),j=()=>{g((0,i.M5)())};(0,s.useEffect)((()=>{h?f(h):u?_(u):m&&w(m)}),[u,m,h]);const w=async l=>{var e;let a={...null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.id_img_loc};a.params={imgLocId:l};const s=(0,i.I7)(a),d=await s;console.log(d)},_=async l=>{var e;let a={...null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.id_img_loc};a.params={imgLocId:l};const s=(0,i.I7)(a);await s};(0,s.useEffect)((()=>{var l;!b||null!==(l=(0,i.bh)("loadedImages"))&&void 0!==l&&l[b]||(setTimeout((()=>{var l,e;null!==(l=(0,i.bh)("loadedImagesMetadata"))&&void 0!==l&&null!==(e=l[b])&&void 0!==e&&e.w2hRel&&j()}),1800),setTimeout((()=>{var l,e;null!==(l=(0,i.bh)("loadedImagesMetadata"))&&void 0!==l&&null!==(e=l[b])&&void 0!==e&&e.w2hRel&&j()}),1200),c([b]))}),[b]);let I=x||250,y=I/1.6;var N,E;null!==(e=(0,i.bh)("loadedImagesMetadata"))&&void 0!==e&&null!==(a=e[b])&&void 0!==a&&a.w2hRel&&(y=I/(null===(N=(0,i.bh)("loadedImagesMetadata"))||void 0===N||null===(E=N[b])||void 0===E?void 0:E.w2hRel));const k=async(l,e)=>{var a=await(0,i.Em)(l,e);window.open(a)};return(0,n.jsx)("div",{className:" ",children:b?null!==(d=(0,i.bh)("loadedImagesMetadata"))&&void 0!==d&&null!==(r=d[b])&&void 0!==r&&r.w2hRel?(0,n.jsx)("div",{className:"_dsplFlx ",children:(0,n.jsx)("div",{className:"prev_document ",onClick:async()=>{if(p)p();else{let e=(0,i.LH)(b);var l=await(0,t.v8)(b);k(l.url,e)}},children:(0,n.jsx)("img",{src:null===(v=(0,i.bh)("loadedImages"))||void 0===v?void 0:v[b],alt:b,style:{width:I,height:y}})})}):(0,n.jsxs)("div",{className:"icon_compr _dsplFlx",style:{marginTop:10},children:[(0,n.jsx)("div",{className:"lbl_saving prev_document ",children:"getting Image ..."}),(0,n.jsx)(o,{stroke:"var(--partial-success)",size:24,strokeW:8})]}):null})},c=async l=>{let e=(0,i.bh)("loadedImages")||{};const a=l.map((async l=>{l&&(e[l]=await v(l),(0,i.lK)(l,e[l]))}));await Promise.all(a);return(0,i.Rz)("loadedImages",e),!0},v=async l=>{let e=(0,i.LH)(l);var a=await(0,t.v8)(l);return(null===a||void 0===a?void 0:a.url)&&await(0,i.Em)(null===a||void 0===a?void 0:a.url,e)}},9594:(l,e,a)=>{a.r(e),a.d(e,{default:()=>p,loadEvidence:()=>b,printGreenCardFrame:()=>g});var s=a(2791),d=a(2647),i=a(2350),t=a(5232),n=a(4529),o=a(1439),r=a(1112),c=a(7567),v=a(4327),u=a(184);const m=(0,d.PU)(),h=((0,d.tW)(),"LPR_form"),p=l=>{var e,a;let{clientItm:d}=l;const[,n]=(0,s.useState)(1),[c,v]=(0,s.useState)(!1),[p,f]=(0,s.useState)(!1),j=()=>{n((0,i.M5)())};(0,s.useEffect)((()=>{c||(w(),v(1),(0,i.Rz)(h,{lprClass:null===d||void 0===d?void 0:d.lprClass,lprExpirationDate:null===d||void 0===d?void 0:d.lprExpirationDate,residentSince:null===d||void 0===d?void 0:d.residentSince,lprIssuePlace:null===d||void 0===d?void 0:d.lprIssuePlace}))}));const w=async()=>{let l=(0,i.bh)("loadKeysEv_last")||0;if(Date.now()>l){(0,i.Rz)("loadKeysEv_last",Date.now()+990);await b();j()}},_=async(l,e,a)=>{(0,t.Rh)(l,e,(s=>{(0,t.F2)(s,l,(()=>(async(l,e)=>{var a,s;let d=null===(a=(0,i.bh)((0,i.Ks)()))||void 0===a?void 0:a.clientNotaryId,n={...null===(s=(0,i.bh)((0,i.hQ)()))||void 0===s?void 0:s.upd_notary};n.params={clientNotaryId:d},n.data2update=l;const o=(0,i.I7)(n),r=await o;if(r&&!r.error){let l=(0,i.bh)("loadedImages")||{};l[e]=null,(0,i.Rz)("loadedImages",l),await(0,t.uB)(d),j()}})({[a]:e},a)))}))},I=(l,e)=>{const a=l.target.files[0],s=new FileReader;let d=(0,i.M5)()+"_"+a.name;_(a,d,e),s.addEventListener("load",(()=>{(0,i.Rz)("preview_src",s.result)}),!1),a&&s.readAsDataURL(a)},y=async()=>{var l;let e=d.paroleImage,a=(0,i.LH)(e);var s=await(0,t.Id)(e,null===(l=(0,i.bh)((0,i.nc)()))||void 0===l?void 0:l.businessId);N(s,a)},N=async(l,e)=>{var a=await(0,i.Em)(l,e);window.open(a)};return null!==d&&void 0!==d&&d.hasLPR?(0,u.jsxs)("div",{className:" ",children:[(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"iMTYiw card",style:{marginTop:"8px"},children:"Permanent Resident"}),(0,u.jsx)("div",{className:"icon_image ",onClick:()=>f(!p),style:{padding:25},children:(0,u.jsx)(m,{name:"outline_edit",color:"var(--partial-success)"})}),(0,u.jsx)("div",{className:"flexSpace"})]}),(0,u.jsxs)("div",{className:"_dsplFlx card",style:{padding:30},children:[(0,u.jsxs)("div",{className:" ",children:[(0,u.jsx)(r.LabelEditInput,{title:"Class:",frmNm:h,keyfld:"lprClass",updObs:j,edit:p}),(0,u.jsx)(r.LabelEditDateInput,{title:"Resident Since:",frmNm:h,keyfld:"residentSince",updObs:j,edit:p}),(0,u.jsx)(r.LabelEditDateInput,{title:"Expiration Date:",frmNm:h,keyfld:"lprExpirationDate",updObs:j,edit:p}),(0,u.jsx)(r.LabelEditInput,{title:"Issue Place:",frmNm:h,keyfld:"lprIssuePlace",updObs:j,edit:p}),(0,u.jsx)("div",{className:"_dsplFlx   spaceAround flxWrp",style:{padding:30},children:(0,u.jsx)(o.N,{color:"#007bfc",label:"Save",clickHandler:async()=>{var l,e;let a=(0,i.bh)(h),s=null===(l=(0,i.bh)((0,i.Ks)()))||void 0===l?void 0:l.clientNotaryId,d={...null===(e=(0,i.bh)((0,i.hQ)()))||void 0===e?void 0:e.upd_notary};d.params={clientNotaryId:s},d.data2update=a;const t=(0,i.I7)(d),o=await t;o&&!o.error&&n((0,i.M5)())}})})]}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsxs)("div",{className:"_dsplFlx   spaceAround flxWrp",style:{width:560},children:[(0,u.jsx)(x,{imgUrl:null===(e=(0,i.bh)((0,i.Ks)()))||void 0===e?void 0:e.greenCardFrontImage,fld:"greenCardFrontImage",importCSV:I,openImage:y,label:"Upload Green Card front"}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)(x,{imgUrl:null===(a=(0,i.bh)((0,i.Ks)()))||void 0===a?void 0:a.greenCardBackImage,fld:"greenCardBackImage",label:"Upload Green Card back",importCSV:I,openImage:y})]}),(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"icon_image ",onClick:()=>(async()=>{let l=await g();l&&window.open(l)})(),style:{padding:10},children:(0,u.jsx)(m,{name:"printer",color:"var(--danger-hover)"})})]}),(0,u.jsx)("div",{style:{padding:90}})]}):(0,u.jsxs)("div",{className:"_dsplFlx ",children:[(0,u.jsx)("div",{className:"flexSpace"}),(0,u.jsx)("div",{className:"iMTYiw card",style:{marginTop:"8px"},children:"No Data Found"}),(0,u.jsx)("div",{className:"flexSpace"})]})},x=l=>{var e,a;let{imgUrl:d,openImage:t,label:n,importCSV:r,fld:c}=l;const[,m]=(0,s.useState)(1),h=()=>{m((0,i.M5)())};(0,s.useEffect)((()=>{var l;null!==(l=(0,i.bh)("loadedImages"))&&void 0!==l&&l[d]||(setTimeout((()=>{var l,e;null!==(l=(0,i.bh)("loadedImagesMetadata"))&&void 0!==l&&null!==(e=l[d])&&void 0!==e&&e.w2hRel&&h()}),1800),setTimeout((()=>{var l,e;null!==(l=(0,i.bh)("loadedImagesMetadata"))&&void 0!==l&&null!==(e=l[d])&&void 0!==e&&e.w2hRel&&h()}),1200),b([d]))}),[d]);let p=156.25;var x,g;null!==(e=(0,i.bh)("loadedImagesMetadata"))&&void 0!==e&&null!==(a=e[d])&&void 0!==a&&a.w2hRel&&(p=250/(null===(x=(0,i.bh)("loadedImagesMetadata"))||void 0===x||null===(g=x[d])||void 0===g?void 0:g.w2hRel));return(0,u.jsxs)("div",{className:" ",children:[(0,u.jsx)(o.Z,{label:n,onChange:l=>r(l,c),width:250,color:"#f4f4f4"}),d?(0,u.jsx)(v.xu,{openImage:t,urlBasic:d}):null]})},g=async()=>{var l,e,a,s,d,t;let o=(0,i.LH)(null===(l=(0,i.bh)((0,i.Ks)()))||void 0===l?void 0:l.greenCardFrontImage),r=null===(e=(0,i.bh)("loadedImages"))||void 0===e?void 0:e[null===(a=(0,i.bh)((0,i.Ks)()))||void 0===a?void 0:a.greenCardFrontImage],c=(0,i.LH)(null===(s=(0,i.bh)((0,i.Ks)()))||void 0===s?void 0:s.greenCardBackImage),v=null===(d=(0,i.bh)("loadedImages"))||void 0===d?void 0:d[null===(t=(0,i.bh)((0,i.Ks)()))||void 0===t?void 0:t.greenCardBackImage];if(r&&v){return await(0,n.sR)(r,o,v,c)}return null},b=async l=>{let e=(0,i.bh)("loadedImages")||{};const a=l.map((async l=>{l&&(e[l]=await(0,c.loadImage)(l),(0,i.lK)(l,e[l]))}));await Promise.all(a);return(0,i.Rz)("loadedImages",e),!0}},2539:(l,e,a)=>{a.d(e,{Fm:()=>u,NV:()=>m,SO:()=>v,he:()=>h,pl:()=>r});var s=a(2791),d=a(2647),i=a(2350),t=a(184);const n=(0,d.Np)(),o=((0,d.tW)(),(0,d.PU)()),r=l=>{let{image:e,dmz:a}=l,s=a||(0,i.bh)("preview_dmz"),{KEY_VALUE_SET:d,WORD:n,LINE:o}=p((0,i.bh)("image_text"));return(0,t.jsxs)("svg",{id:"ssg_business_card_front",xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 ".concat(null===s||void 0===s?void 0:s.w," ").concat(null===s||void 0===s?void 0:s.h),preserveAspectRatio:"xMidYMid meet",children:[(0,t.jsx)("style",{type:"text/css",children:'@font-face {\n\t\t\t\tfont-family: "Google Sans";\n\t\t\t\tsrc: url(http://fonts.gstatic.com/s/googlesans/v14/4UabrENHsxJlGDuGo1OIlLU94YtzCwY.woff2)\n\n\t\t\t}'}),(0,t.jsx)("rect",{width:null===s||void 0===s?void 0:s.w,height:null===s||void 0===s?void 0:s.h,fill:"#ffffff"}),(0,t.jsx)("image",{width:null===s||void 0===s?void 0:s.w,height:null===s||void 0===s?void 0:s.h,x:0,y:0,xmlnsXlink:"http://www.w3.org/1999/xlink",xlinkHref:e}),null===d||void 0===d?void 0:d.map(((l,e)=>(0,t.jsx)(c,{idKey:e+"_tann",item:l,index:e},e+"_tann"))),null===o||void 0===o?void 0:o.map(((l,e)=>(0,t.jsx)(c,{idKey:e+"_tann",item:l,index:e},e+"_tann")))]})},c=l=>{let{item:e,index:a,idKey:s}=l;const{Text:d,Geometry:n,boundingPoly:o,BlockType:r,Id:c}=e;let v="transparent";if("PAGE"===r)return null;var u;("LINE"===r&&(v="rgba(168, 199, 250,1)"),"KEY_VALUE_SET"===r)&&(v="KEY"===(null===e||void 0===e||null===(u=e.EntityTypes)||void 0===u?void 0:u[0])?"#BB021E":"#8110F1");if("WORD"===r)return null;"WORD"===r&&(v="#646cff",v="#8b949e");let m=null===o||void 0===o?void 0:o.vertices,h=d,p=n.BoundingBox,x=(0,i.bh)("preview_dmz"),g=(null===p||void 0===p?void 0:p.Height)*x.h,b=(null===p||void 0===p?void 0:p.Width)*x.w,f=(null===p||void 0===p?void 0:p.Left)*x.w,j=(null===p||void 0===p?void 0:p.Top)*x.h;return 0===a||null===m||void 0===m||m[1],(0,t.jsxs)(t.Fragment,{children:[null,(0,t.jsx)("rect",{onClick:l=>{l.stopPropagation(),l.preventDefault(),(0,i.vQ)(h)},onContextMenu:l=>{l.stopPropagation(),l.preventDefault()},width:b,height:g,fill:v,fillOpacity:"50%",x:f,y:j})]})},v=l=>{var e;let{title:a,keyfld:d,updObs:r,frmNm:c}=l;const[v,u]=(0,s.useState)(!1),[m,h]=(0,s.useState)(1),p=()=>{r&&r(),u(!1)};let x=null===(e=(0,i.bh)(c))||void 0===e?void 0:e[d];return(0,t.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,t.jsx)("div",{className:"lbl_h_dtls",style:{marginTop:v?8:1},children:a}),v?(0,t.jsxs)("div",{className:"_dsplFlx",children:[(0,t.jsx)("div",{className:"lbl_dtls",children:(0,t.jsx)(n,{init:x,width:240,updChanges:l=>((l,e)=>{let a=(0,i.bh)(c)||{};a[l]=e,(0,i.Rz)(c,a),h((0,i.M5)())})(d,l),onEnter:p})}),(0,t.jsx)("div",{className:"icon_image ",onClick:p,children:(0,t.jsx)(o,{name:"success",color:"var(--success)"})})]}):(0,t.jsx)("div",{className:"lbl_dtls",onClick:()=>u(!0),children:x||"click to type"})]})},u=l=>{var e,a;let{title:d,keyfld:r,updObs:c,frmNm:v}=l;const[u,m]=(0,s.useState)(!1),[h,p]=(0,s.useState)(1),[x,g]=(0,s.useState)(""),b=()=>{((l,e)=>{let a=(0,i.bh)(v)||{},s=new Date(e).getTime();a[l]=s,(0,i.Rz)(v,a),p((0,i.M5)())})(r,x),c&&c(),m(!1)};let f=null===(e=(0,i.bh)(v))||void 0===e?void 0:e[r],j=x||(0,i.sJ)(null===(a=(0,i.bh)(v))||void 0===a?void 0:a[r])||"";return(0,t.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,t.jsx)("div",{className:"lbl_h_dtls",style:{marginTop:u?8:1},children:d}),u?(0,t.jsxs)("div",{className:"_dsplFlx",children:[(0,t.jsx)("div",{className:"lbl_dtls",children:(0,t.jsx)(n,{init:j,width:240,updChanges:g,onEnter:b})}),(0,t.jsx)("div",{className:"icon_image ",onClick:b,children:(0,t.jsx)(o,{name:"success",color:"var(--success)"})})]}):(0,t.jsx)("div",{className:"lbl_dtls",onClick:()=>m(!0),children:(0,i.sG)(f)||"click to type"})]})},m=l=>{let{label:e,value:a}=l;return a?"object"===typeof a?null:(0,t.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,t.jsx)("div",{className:"lbl_h_dtls",children:e}),(0,t.jsx)("div",{className:"lbl_dtls",onClick:()=>{return l=a,void(0,i.vQ)(null===l||void 0===l?void 0:l.trim());var l},children:a})]}):null},h=l=>{let{label:e,value:a}=l;return a?"object"===typeof a?null:(0,t.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,t.jsx)("div",{className:"lbl_h_dtls",children:e}),(0,t.jsx)("div",{className:"lbl_dtls",onClick:()=>{return l=a,void(0,i.vQ)(null===l||void 0===l?void 0:l.trim());var l},children:"*******"})]}):null},p=l=>{let e=[],a=[],s=[];return null===l||void 0===l||l.map((l=>{let{BlockType:d}=l;"WORD"===d&&a.push(l),"LINE"===d&&s.push(l),"KEY_VALUE_SET"===d&&e.push(l)})),{KEY_VALUE_SET:e,WORD:a,LINE:s}}}}]);
//# sourceMappingURL=292.a74a44c5.chunk.js.map