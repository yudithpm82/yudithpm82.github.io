"use strict";(self.webpackChunkstephanie_solution=self.webpackChunkstephanie_solution||[]).push([[6586,7567],{7567:(e,t,i)=>{i.r(t),i.d(t,{default:()=>r,loadEvidence:()=>c,loadImage:()=>h});var a=i(2791),o=i(2647),l=i(2350),n=i(5232),s=i(184);(0,o.PU)();const d=(0,o.tW)(),r=e=>{var t,i,o,r,h;let{ImgS3Url:u,imgId:g,urlBasic:x,clickHandle:y,width:p}=e;const[,v]=(0,a.useState)(1),[m,w]=(0,a.useState)(""),f=()=>{v((0,l.M5)())};(0,a.useEffect)((()=>{x?w(x):u?_(u):g&&b(g)}),[u,g,x]);const b=async e=>{var t;let i={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.id_img_loc};i.params={imgLocId:e};const a=(0,l.I7)(i),o=await a;console.log(o)},_=async e=>{var t;let i={...null===(t=(0,l.bh)((0,l.hQ)()))||void 0===t?void 0:t.id_img_loc};i.params={imgLocId:e};const a=(0,l.I7)(i);await a};(0,a.useEffect)((()=>{var e;!m||null!==(e=(0,l.bh)("loadedImages"))&&void 0!==e&&e[m]||(setTimeout((()=>{var e,t;null!==(e=(0,l.bh)("loadedImagesMetadata"))&&void 0!==e&&null!==(t=e[m])&&void 0!==t&&t.w2hRel&&f()}),1800),setTimeout((()=>{var e,t;null!==(e=(0,l.bh)("loadedImagesMetadata"))&&void 0!==e&&null!==(t=e[m])&&void 0!==t&&t.w2hRel&&f()}),1200),c([m]))}),[m]);let j=p||250,k=j/1.6;var I,B;null!==(t=(0,l.bh)("loadedImagesMetadata"))&&void 0!==t&&null!==(i=t[m])&&void 0!==i&&i.w2hRel&&(k=j/(null===(I=(0,l.bh)("loadedImagesMetadata"))||void 0===I||null===(B=I[m])||void 0===B?void 0:B.w2hRel));const N=async(e,t)=>{var i=await(0,l.Em)(e,t);window.open(i)};return(0,s.jsx)("div",{className:" ",children:m?null!==(o=(0,l.bh)("loadedImagesMetadata"))&&void 0!==o&&null!==(r=o[m])&&void 0!==r&&r.w2hRel?(0,s.jsx)("div",{className:"_dsplFlx ",children:(0,s.jsx)("div",{className:"prev_document ",onClick:async()=>{if(y)y();else{let t=(0,l.LH)(m);var e=await(0,n.v8)(m);N(e.url,t)}},children:(0,s.jsx)("img",{src:null===(h=(0,l.bh)("loadedImages"))||void 0===h?void 0:h[m],alt:m,style:{width:j,height:k}})})}):(0,s.jsxs)("div",{className:"icon_compr _dsplFlx",style:{marginTop:10},children:[(0,s.jsx)("div",{className:"lbl_saving prev_document ",children:"getting Image ..."}),(0,s.jsx)(d,{stroke:"var(--partial-success)",size:24,strokeW:8})]}):null})},c=async e=>{let t=(0,l.bh)("loadedImages")||{};const i=e.map((async e=>{e&&(t[e]=await h(e),(0,l.lK)(e,t[e]))}));await Promise.all(i);return(0,l.Rz)("loadedImages",t),!0},h=async e=>{let t=(0,l.LH)(e);var i=await(0,n.v8)(e);return(null===i||void 0===i?void 0:i.url)&&await(0,l.Em)(null===i||void 0===i?void 0:i.url,t)}},6586:(e,t,i)=>{i.r(t),i.d(t,{default:()=>x,loadEvidence:()=>j,printDriverLicenseFrame:()=>_,printGreenCardFrame:()=>b});var a=i(2791),o=i(2647),l=i(2350),n=i(5232),s=i(4529),d=i(1439),r=i(7567),c=i(4327),h=i(184);const u=(0,o.PU)(),g=(0,o.tW)(),x=((0,o.A5)(),e=>{var t,i;let{}=e;const[,o]=(0,a.useState)(1),[s,r]=(0,a.useState)(!1),u=()=>{o((0,l.M5)())};(0,a.useEffect)((()=>{var e;s||null!==(e=(0,l.bh)((0,l.nc)()))&&void 0!==e&&e.imageSSG&&(x(),r(1))}));let g=(0,l.bh)((0,l.Ks)());if(null===(t=(0,l.bh)((0,l.nc)()))||void 0===t||!t.imageSSG)return(0,h.jsx)(c.ho,{});const x=async()=>{let e=(0,l.bh)("loadKeysEv_last")||0;var t;if(Date.now()>e&&((0,l.Rz)("loadKeysEv_last",Date.now()+990),null!==(t=(0,l.bh)((0,l.Ks)()))&&void 0!==t&&t.imagesList)){await j((0,l.bh)((0,l.Ks)()).imagesList);u()}},y=async(e,t)=>{var i,a;let o=null===(i=(0,l.bh)((0,l.Ks)()))||void 0===i?void 0:i.clientNotaryId,n={...null===(a=(0,l.bh)((0,l.hQ)()))||void 0===a?void 0:a.upd_notary};n.params={clientNotaryId:o},n.data2update=e;const s=(0,l.I7)(n),d=await s;d&&!d.error&&u()},p=async e=>{let t={...(0,l.bh)((0,l.Ks)())},i=(null===t||void 0===t?void 0:t.imagesList)||[];i.push(e),y({imagesList:i})},v=async()=>{var e;let t=g.paroleImage,i=(0,l.LH)(t);var a=await(0,n.Id)(t,null===(e=(0,l.bh)((0,l.nc)()))||void 0===e?void 0:e.businessId);w(a,i)},w=async(e,t)=>{var i=await(0,l.Em)(e,t);window.open(i)};return(0,h.jsxs)("div",{className:" ",children:[(0,h.jsxs)("div",{className:"_dsplFlx ",children:[(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)("div",{className:"iMTYiw card",style:{marginTop:"8px"},children:"Images"}),(0,h.jsx)("div",{className:"flexSpace"}),(0,h.jsx)(d.Z,{label:"Upload file",onChange:(e,t)=>{const i=e.target.files[0],a=new FileReader;let o=i.name.split(".").pop();(async(e,t,i)=>{(0,n.Rh)(e,t,(i=>{(0,n.F2)(i,e,(()=>p(t)))}))})(i,(0,l.M5)()+"_"+(0,l.M5)()+"."+o),a.addEventListener("load",(()=>{(0,l.Rz)("preview_src",a.result)}),!1),i&&a.readAsDataURL(i)},color:"#007bfc",accept:"image/*"}),(0,h.jsx)("div",{className:"flexSpace"})]}),(0,h.jsx)("div",{className:"",children:(0,h.jsx)("div",{className:"_dsplFlx  spaceAround flxWrp",children:null===g||void 0===g||null===(i=g.imagesList)||void 0===i?void 0:i.map((e=>(0,h.jsx)(m,{docType:!0,openImage:v,imgUrl:e,updClient:y})))})})]})});let y={mouthUp:1,mouthDown:1,nose:1},p={upperJawlineLeft:1,upperJawlineRight:1,chinBottom:1},v={mouthUp:1,mouthDown:1,mouthRight:1,mouthLeft:1};const m=e=>{var t,i,o,s,d,r,c;let{imgUrl:u,updClient:x}=e;const[,y]=(0,a.useState)(1),p=((0,a.useRef)(null),(0,a.useRef)(null)),v=()=>{y((0,l.M5)())};let m=450,w=281.25;var b,_;null!==(t=(0,l.bh)("loadedImagesMetadata"))&&void 0!==t&&null!==(i=t[u])&&void 0!==i&&i.w2hRel&&(w=m/(null===(b=(0,l.bh)("loadedImagesMetadata"))||void 0===b||null===(_=b[u])||void 0===_?void 0:_.w2hRel));(0,a.useEffect)((()=>{var e;null!==(e=(0,l.bh)("loadedImages"))&&void 0!==e&&e[u]||(setTimeout((()=>{var e,t;null!==(e=(0,l.bh)("loadedImagesMetadata"))&&void 0!==e&&null!==(t=e[u])&&void 0!==t&&t.w2hRel&&v()}),1800),setTimeout((()=>{var e,t;null!==(e=(0,l.bh)("loadedImagesMetadata"))&&void 0!==e&&null!==(t=e[u])&&void 0!==t&&t.w2hRel&&v()}),1200),j([u]))}),[u]);const I=(0,a.useRef)(!1),B=(0,a.useRef)(null),z=e=>{var t;null!==B&&void 0!==B&&B.current&&(null===B||void 0===B||null===(t=B.current)||void 0===t||t.showw(e))},R=()=>{var e,t;let i=null===(e=(0,l.bh)("_faceRek"))||void 0===e||null===(t=e.FaceDetails)||void 0===t?void 0:t[0];N(i,m,w,u),v()};let M=(0,l.CO)(u);null===(o=(0,l.bh)("loadedImagesMetadata"))||void 0===o||null===(s=o[u])||void 0===s||s.w2hRel;return(0,h.jsx)("div",{className:" ",style:{margin:30},children:(0,h.jsxs)("div",{className:"client_item_box  ",style:{width:m,height:w,position:"relative"},onMouseMove:e=>{null!==I&&void 0!==I&&I.current||(I.current=!0,z(!0))},onMouseLeave:e=>{null!==I&&void 0!==I&&I.current&&(I.current=!1,z(!1))},children:[u?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{style:{position:"absolute",width:m,height:w,top:0,left:0,zIndex:30},children:null===(d=(0,l.bh)("drayColor"))||void 0===d?void 0:d.map(((e,t)=>"point"===e.type?(0,h.jsx)("div",{style:e.style},t):null))}),(0,h.jsx)("div",{style:{position:"absolute",width:m,height:w,top:0,left:0,zIndex:40},children:(0,l.bh)("drawReklinesSVG")&&(null===(r=(0,l._2)((0,l.bh)("drawReklinesSVG")))||void 0===r?void 0:r.map(((e,t)=>{var i;let a=null===(i=(0,l.bh)("drawReklinesSVG"))||void 0===i?void 0:i[e];return null!==a&&void 0!==a&&a.d?(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 ".concat(m," ").concat(w),preserveAspectRatio:"xMidYMid meet",style:{position:"absolute",top:0,left:0},children:(0,h.jsx)("path",{d:null===a||void 0===a?void 0:a.d,stroke:null===a||void 0===a?void 0:a.color,"stroke-linecap":"round",fill:"transparent","stroke-dasharray":null===a||void 0===a?void 0:a.strokeDasharray,"stroke-width":"1"})},t):(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 ".concat(m," ").concat(w),preserveAspectRatio:"xMidYMid meet",style:{position:"absolute",top:0,left:0},children:(0,h.jsx)("line",{x1:null===a||void 0===a?void 0:a.x1,y1:null===a||void 0===a?void 0:a.y1,x2:null===a||void 0===a?void 0:a.x2,y2:null===a||void 0===a?void 0:a.y2,stroke:null===a||void 0===a?void 0:a.color,"stroke-dasharray":"1 2"})},t)})))}),(0,h.jsx)("div",{style:{position:"absolute",width:m,height:w,top:0,left:0},children:(0,h.jsx)("img",{ref:p,src:null===(c=(0,l.bh)("loadedImages"))||void 0===c?void 0:c[u],alt:u,style:{width:m,height:w}})})]}):(0,h.jsxs)("div",{className:"icon_compr _dsplFlx",style:{marginTop:10},children:[(0,h.jsx)("div",{className:"lbl_saving prev_document ",children:"getting Image ..."}),(0,h.jsx)(g,{stroke:"var(--partial-success)",size:24,strokeW:8})]}),(0,h.jsx)(k,{ref:B,isHorizontal:!0,click1:async()=>{var e=await(0,n.Id)(u+"_faceRek.json",(0,l.bh)((0,l.Ks)()).clientNotaryId);if(e){var t=await fetch(e);if(200===t.status){var i=await t.json();if(i.FaceDetails)(0,l.Rz)("_faceRek",i),R();else{let e=await(0,n.vf)(null,u);(0,l.Rz)("_faceRek",e),R()}}else{let e=await(0,n.vf)(null,u);(0,l.Rz)("_faceRek",e),R()}}else{let e=await(0,n.vf)(null,u);(0,l.Rz)("_faceRek",e),R()}},click2:R,click7:e=>{var t;console.log("downloadName_".concat((0,l.M5)()),u),f("downloadName_".concat((0,l.M5)()),null===(t=(0,l.bh)("loadedImages"))||void 0===t?void 0:t[u])},click5:async e=>{let t={...(0,l.bh)((0,l.Ks)())},i=((null===t||void 0===t?void 0:t.imagesList)||[]).filter((e=>e!==u));x({imagesList:i})}})]})})};function w(e,t,i,a,o,l){const n=new Image;n.src=e;const s=document.createElement("canvas"),d=s.getContext("2d");n.addEventListener("load",(function(){const e=n.naturalWidth,r=n.naturalHeight;void 0===l&&(l=o/(e/r)),s.width=o*e,s.height=l*r,d.drawImage(n,i*e,a*r,o*e,l*r,0,0,o*e,l*r);let c=s.toDataURL("image/png");f(t,c)}))}function f(e,t){let i=document.createElement("a");i.download=e,i.href=t,i.click()}const b=async()=>{var e,t,i,a;let o=(0,l.LH)(null===(e=(0,l.bh)((0,l.Ks)()))||void 0===e?void 0:e.greenCardFrontImage),n=null===(t=(0,l.bh)("loadedImages"))||void 0===t?void 0:t.greenCardFrontImage,d=(0,l.LH)(null===(i=(0,l.bh)((0,l.Ks)()))||void 0===i?void 0:i.greenCardBackImage),r=null===(a=(0,l.bh)("loadedImages"))||void 0===a?void 0:a.greenCardBackImage;if(n&&n){return await(0,s.sR)(n,o,r,d)}return null},_=async()=>{var e,t,i,a;let o=(0,l.LH)(null===(e=(0,l.bh)((0,l.Ks)()))||void 0===e?void 0:e.dlFrontImage),n=null===(t=(0,l.bh)("loadedImages"))||void 0===t?void 0:t.dlFrontImage,d=(0,l.LH)(null===(i=(0,l.bh)((0,l.Ks)()))||void 0===i?void 0:i.dlBackImage),r=null===(a=(0,l.bh)("loadedImages"))||void 0===a?void 0:a.dlBackImage;if(n&&n){return await(0,s.sR)(n,o,r,d)}return null},j=async e=>{let t=(0,l.bh)("loadedImages")||{};const i=e.map((async e=>{e&&(t[e]=await(0,r.loadImage)(e),(0,l.lK)(e,t[e]))}));await Promise.all(i);return(0,l.Rz)("loadedImages",t),!0},k=(0,a.forwardRef)(((e,t)=>{let{click1:i,click2:o,click3:l,click4:n,click5:s,click6:d,click7:r,click8:c,isHorizontal:g}=e;const[x,y]=(0,a.useState)(0);(0,a.useImperativeHandle)(t,(()=>({showw(e){y(e)}})));return(0,h.jsx)("div",{className:"c5dXqd ".concat(g?"isHorizontal":""),style:{display:x?"block":"none",height:g?50:168,width:g?196:50,zIndex:90},children:x?(0,h.jsxs)("div",{className:"rR9aKd ",role:"list",children:[(0,h.jsx)("div",{className:"ef3QKd",children:(0,h.jsxs)("div",{role:"listitem",tabIndex:"0","aria-label":"Share",onClick:i,children:[(0,h.jsx)("span",{children:(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"M5n4Ud",children:(0,h.jsx)("span",{className:"HQcgX z1asCe Fp7My",style:{height:16,lineHeight:16,width:16},children:(0,h.jsx)(u,{name:"eyes_outline",size:16})})})})}),(0,h.jsx)("div",{id:"_6Wu4ZMz5NpepptQPlL2l4Aw_4"})]})}),(0,h.jsx)("div",{className:"ef3QKd",role:"listitem",children:(0,h.jsx)("div",{"aria-label":"Save",role:"button",tabIndex:"0",onClick:o,children:(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"M5n4Ud",children:(0,h.jsx)("span",{className:"HQcgX z1asCe Fp7My",style:{height:16,lineHeight:16,width:16},children:(0,h.jsx)(u,{name:"signature-freehand",size:16})})})})})}),(0,h.jsx)("div",{className:"ef3QKd",children:(0,h.jsxs)("div",{role:"listitem",tabIndex:"0","aria-label":"Share",onClick:r,children:[(0,h.jsx)("span",{children:(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"M5n4Ud",children:(0,h.jsx)("span",{className:"HQcgX z1asCe Fp7My",style:{height:16,lineHeight:16,width:16},children:(0,h.jsx)(u,{name:"arrow_down_large",size:16})})})})}),(0,h.jsx)("div",{id:"_6Wu4ZMz5NpepptQPlL2l4Aw_4"})]})}),(0,h.jsx)("div",{className:"ef3QKd",children:(0,h.jsxs)("div",{role:"listitem",tabIndex:"0","aria-label":"Share",onClick:s,children:[(0,h.jsx)("span",{children:(0,h.jsx)("div",{children:(0,h.jsx)("div",{className:"M5n4Ud",children:(0,h.jsx)("span",{className:"HQcgX z1asCe Fp7My",style:{height:16,lineHeight:16,width:16},children:(0,h.jsx)(u,{name:"outline_delete",size:16})})})})}),(0,h.jsx)("div",{id:"_6Wu44fZMz5NpepptQPlL2l4Aw_4"})]})})]}):null})})),I=(e,t,i,a)=>{let o=e-i,n=t-a;return(0,l.c7)(o,n)},B=(e,t,i,a,o,l)=>{var n=.5*(i+e),s=.5*(a+t),d=Math.atan2(a-t,i-e)-Math.PI/2;l&&(d=Math.atan2(t-a,e-i)-Math.PI/2);var r=o||18;return"M"+e+" "+t+" Q "+(n+r*Math.cos(d))+" "+(s+r*Math.sin(d))+" "+i+" "+a},N=(e,t,i,a)=>{let o=[],n={},s={};if(null!==e&&void 0!==e&&e.BoundingBox){let a={style:{left:(null===e||void 0===e?void 0:e.BoundingBox.Left)*t,top:(null===e||void 0===e?void 0:e.BoundingBox.Top)*i,position:"absolute",height:2,width:2,background:"#be6b07"},type:"point"};o.push(a);let l={style:{left:((null===e||void 0===e?void 0:e.BoundingBox.Left)+(null===e||void 0===e?void 0:e.BoundingBox.Width))*t,top:(null===e||void 0===e?void 0:e.BoundingBox.Top)*i,position:"absolute",height:2,width:2,background:"#be6b07"},type:"point"};o.push(l);let n={style:{left:(null===e||void 0===e?void 0:e.BoundingBox.Left)*t,top:((null===e||void 0===e?void 0:e.BoundingBox.Top)+(null===e||void 0===e?void 0:e.BoundingBox.Height))*i,position:"absolute",height:2,width:2,background:"#be6b07"},type:"point"};o.push(n);let d={style:{left:((null===e||void 0===e?void 0:e.BoundingBox.Left)+(null===e||void 0===e?void 0:e.BoundingBox.Width))*t,top:((null===e||void 0===e?void 0:e.BoundingBox.Top)+(null===e||void 0===e?void 0:e.BoundingBox.Height))*i,position:"absolute",height:2,width:2,background:"#be6b07"},type:"point"};o.push(d);let r={color:"#20c997",position:"absolute"};r.x1=(null===e||void 0===e?void 0:e.BoundingBox.Left)*t,r.x2=((null===e||void 0===e?void 0:e.BoundingBox.Left)+(null===e||void 0===e?void 0:e.BoundingBox.Width))*t,r.y1=(null===e||void 0===e?void 0:e.BoundingBox.Top)*i,r.y2=(null===e||void 0===e?void 0:e.BoundingBox.Top)*i,r.strokeDasharray="0 12 0",s[43]=r;let c={color:"#20c997",position:"absolute"};c.x1=(null===e||void 0===e?void 0:e.BoundingBox.Left)*t,c.x2=((null===e||void 0===e?void 0:e.BoundingBox.Left)+(null===e||void 0===e?void 0:e.BoundingBox.Width))*t,c.y1=((null===e||void 0===e?void 0:e.BoundingBox.Top)+(null===e||void 0===e?void 0:e.BoundingBox.Height))*i,c.y2=((null===e||void 0===e?void 0:e.BoundingBox.Top)+(null===e||void 0===e?void 0:e.BoundingBox.Height))*i,c.strokeDasharray="0 12 0",s[44]=c}null===e||void 0===e||e.Landmarks.map((e=>{let a="#065fd4",l="#d5d5d5",s=e.Type.indexOf("nose")>=0?l:e.Type.indexOf("mouth")>=0?"rgb(187, 2, 30)":e.Type.indexOf("EyeBrow")>=0?l:e.Type.indexOf("upil")>=0||e.Type.indexOf("Eye")>=0||e.Type.indexOf("eye")>=0?a:"#fff";if(s=y[e.Type]?"#fff766":s,s=p[e.Type]?"#20c997":s,p[e.Type]&&(n.color="#20c997",n.position="absolute","upperJawlineLeft"===e.Type&&(n.xx1=e.X*t,n.yy1=e.Y*i),"upperJawlineRight"===e.Type&&(n.xx2=e.X*t,n.yy2=e.Y*i),"chinBottom"===e.Type&&(n.xx3=e.X*t,n.yy3=e.Y*i)),v[e.Type]){"mouthUp"===e.Type&&(n.xx4=e.X*t,n.yy4=e.Y*i),"mouthRight"===e.Type&&(n.xx5=e.X*t,n.yy5=e.Y*i),"mouthDown"===e.Type&&(n.xx6=e.X*t,n.yy6=e.Y*i),"mouthLeft"===e.Type&&(n.xx7=e.X*t,n.yy7=e.Y*i);let a={style:{left:e.X*t,top:e.Y*i,position:"absolute",height:2,width:2,background:s},type:"point"};o.push(a)}else{let a={style:{left:e.X*t,top:e.Y*i,position:"absolute",height:2,width:2,background:s},type:"point"};o.push(a)}}));let d={color:"rgb(187, 2, 30)",position:"absolute",stroke:"16",strokeDasharray:"3"};d.d=B(n.xx4,n.yy4,n.xx7,n.yy7,3,1),s.styMouthTR=d;let r={color:"rgb(187, 2, 30)",position:"absolute",stroke:"16",strokeDasharray:"3"};r.d=B(n.xx4,n.yy4,n.xx5,n.yy5,3),s.styMouthTL=r;let c={color:"rgb(187, 2, 30)",position:"absolute",stroke:"16",strokeDasharray:"3"};c.d=B(n.xx7,n.yy7,n.xx6,n.yy6,3,1),s.styMouthBR=c;let h={color:"rgb(187, 2, 30)",position:"absolute",stroke:"16",strokeDasharray:"3"};h.d=B(n.xx5,n.yy5,n.xx6,n.yy6,3),s.styMouthBL=h;let u={color:"#20c997",position:"absolute"};u.x1=n.xx1,u.x2=n.xx2,u.y1=n.yy1,u.y2=n.yy2,s[1]=u;let g={color:"#20c997",position:"absolute"};g.x1=n.xx2,g.x2=n.xx3,g.y1=n.yy2,g.y2=n.yy3,s[2]=g;let x={color:"#20c997",position:"absolute"};x.x1=n.xx1,x.x2=n.xx3,x.y1=n.yy1,x.y2=n.yy3,s[3]=x;let m=((null===e||void 0===e?void 0:e.BoundingBox.Top)+(null===e||void 0===e?void 0:e.BoundingBox.Height))*i,f=m-n.yy3,b=(null===e||void 0===e?void 0:e.BoundingBox.Top)*i-f,_={style:{left:n.xx3,top:m,position:"absolute",height:2,width:2,background:"#be6b07"},type:"point"};o.push(_);let j={style:{left:n.xx3,top:b,position:"absolute",height:2,width:2,background:"#be6b07"},type:"point"};o.push(j);let k=I(n.xx1,n.yy1,n.xx2,n.yy2),N=I(n.xx2,n.yy2,n.xx3,n.yy3)/2.55,z=k/2,R={x:z+n.xx1,y:(n.yy1-n.yy2)/2+n.yy2},M=I(R.x,R.y,n.xx3,n.yy3),D=(z+n.xx1-n.xx3)/M,T=(n.yy1-n.yy2)/2/z,H={x:n.xx3+2*M*D,y:n.yy3-2*M},S={style:{left:R.x,top:R.y,position:"absolute",height:2,width:2,background:"#AD00FF"},type:"point"};o.push(S);let L={style:{left:H.x,top:H.y,position:"absolute",height:2,width:2,background:"#AD00FF"},type:"point"};o.push(L);let F={x:H.x,y:H.y-(H.y-b)/2},C={x:n.xx3+2.4*M*D,y:n.yy3-2.4*M},P={x:n.xx3-.95*M*D,y:n.yy3+.95*M},E=I(C.x,C.y,P.x,P.y),K={style:{left:P.x,top:P.y,position:"absolute",height:2,width:2,background:"#ac1912"},type:"point"};o.push(K);let U={style:{left:C.x,top:C.y,position:"absolute",height:2,width:2,background:"#ac1912"},type:"point"};o.push(U);let A={x:R.x+.5*E,y:R.y-.5*E*T},W={style:{left:A.x,top:A.y,position:"absolute",height:2,width:2,background:"#ac1912"},type:"point"};o.push(W);let G={x:R.x-.5*E,y:R.y+.5*E*T},Q={style:{left:G.x,top:G.y,position:"absolute",height:2,width:2,background:"#ac1912"},type:"point"};o.push(Q);let X={color:"#20c997",position:"absolute"};X.x1=n.xx1,X.x2=F.x,X.y1=n.yy1,X.y2=F.y,X.strokeDasharray="1 3",X.d=B(n.xx3,n.yy3,n.xx2,n.yy2,N,1),s[4]=X;let Y={color:"#20c997",position:"absolute"};Y.x1=n.xx2,Y.x2=F.x,Y.y1=n.yy2,Y.y2=F.y,Y.strokeDasharray="1 3",Y.d=B(n.xx2,n.yy2,F.x,F.y,N,1),s[5]=Y;let J={color:"#20c997",position:"absolute"};J.x1=n.xx3,J.x2=F.x,J.y1=n.yy3,J.y2=F.y,J.strokeDasharray="1 3",J.d=B(n.xx1,n.yy1,F.x,F.y,N),s[6]=J;let Z={color:"#20c997",position:"absolute"};Z.x1=n.xx3,Z.x2=F.x,Z.y1=n.yy3,Z.y2=F.y,Z.strokeDasharray="1 3",Z.d=B(n.xx3,n.yy3,n.xx1,n.yy1,N),s[7]=Z;let O={left:G.x/t,top:C.y/i,width:E/t,height:E/i,WW:t,HH:i},V=n.xx3-(z+n.xx1),q=.5;q=V/E*.5;let $=V>0?V>q:-1*V>q;V=V/t*100,$=1;{var ee;const e=async e=>{w(await(0,l.Em)(e,"image/png"),"downloadName",O.left,O.top,O.width,O.height)};!function(e,t,i){const a=new Image;a.src=e;const o=document.createElement("canvas"),l=o.getContext("2d");a.addEventListener("load",(function(){o.width=a.naturalWidth,o.height=a.naturalHeight,l.clearRect(0,0,o.width,o.height),l.save(),l.translate(o.width/2,o.height/2),l.rotate(t*Math.PI/180);var e=t-90,n=o.height/o.width,s=a.height/a.width;let d=-(a.width-o.width)/2,r=-(a.height-o.height)/2;s<1&&(e+=90),e%180===0&&l.scale(n,n),l.translate(-o.width/2,-o.height/2),l.drawImage(a,d,r,a.width,a.height),l.restore();let c=o.toDataURL("image/png");i(c)}))}(null===(ee=(0,l.bh)("loadedImages"))||void 0===ee?void 0:ee[a],V,e)}(0,l.Rz)("drawReklinesSVG",s),(0,l.Rz)("drayColor",o)}},4529:(e,t,i)=>{i.d(t,{Is:()=>s,QU:()=>d,Tq:()=>g,sR:()=>r,vF:()=>c});var a=i(6963),o=i(2350),l=i(4e3),n=i(1479);async function s(e,t,i){const o=[612,792];var s=null;(s=await a.PDFDocument.create()).registerFontkit(l.Z);await(0,n.h2)(s);const d=await fetch(e).then((e=>e.arrayBuffer()));let r=null;console.log(t),"image/jpg"===t||"image/jpeg"===t?r=await s.embedJpg(d):(console.log(d,t),r=await s.embedPng(d));var c=null;c=s.addPage(o);const{width:h,height:u}=c.getSize();r&&c.drawImage(r,{x:146,y:u-641,width:320,height:490});let g=i?i.split(" ").join("_")+"_passportFrame_EN":"_passportFrame";s.setTitle(g),s.setAuthor("Stephanie Solution Group"),s.setCreator("Stephanie Solution Group"),s.setCreationDate(new Date),s.setModificationDate(new Date);{const e=await s.save();return(0,n.ou)(e)}}async function d(e,t,i){const o=await a.PDFDocument.create(),l=o.addPage([612,792]),{width:s,height:d}=l.getSize(),r=await fetch(e).then((e=>e.arrayBuffer()));let c=null;"image/jpg"===t||"image/jpeg"===t?c=await o.embedJpg(r):"image/png"===t&&(c=await o.embedPng(r));let h=c.size();(h.width>s||h.height>d)&&(h=c.scaleToFit(s,d)),l.drawImage(c,{x:s/2-h.width/2,y:d/2-h.height/2,width:h.width,height:h.height});const u=await o.save();return(0,n.ou)(u)}async function r(e,t,i,o,s){const d=[612,792];var r=null;(r=await a.PDFDocument.create()).registerFontkit(l.Z);await(0,n.h2)(r);const c=await fetch(e).then((e=>e.arrayBuffer()));let h=null;h="image/jpg"===t||"image/jpeg"===t?await r.embedJpg(c):await r.embedPng(c);const u=await fetch(i).then((e=>e.arrayBuffer()));let g=null;g="image/jpg"===o||"image/jpeg"===o?await r.embedJpg(u):await r.embedPng(u);var x=null;x=r.addPage(d);const{width:y,height:p}=x.getSize();h&&x.drawImage(h,{x:175,y:p-300,width:260,height:170}),g&&x.drawImage(g,{x:175,y:p-600,width:260,height:170});let v=s?s.split(" ").join("_")+"_idsFrame_EN":"_idsFrame";r.setTitle(v),r.setAuthor("Stephanie Solution Group"),r.setCreator("Stephanie Solution Group"),r.setCreationDate(new Date),r.setModificationDate(new Date);{const e=await r.save();return(0,n.ou)(e)}}async function c(e,t,i,o,s,d,r){const c=[612,792];var h=null;(h=await a.PDFDocument.create()).registerFontkit(l.Z);await(0,n.h2)(h);const u=await fetch(e).then((e=>e.arrayBuffer()));let g=null;g="image/jpg"===t||"image/jpeg"===t?await h.embedJpg(u):await h.embedPng(u);const x=await fetch(i).then((e=>e.arrayBuffer()));let y=null;y="image/jpg"===o||"image/jpeg"===o?await h.embedJpg(x):await h.embedPng(x);const p=await fetch(s).then((e=>e.arrayBuffer()));let v=null;v="image/jpg"===d||"image/jpeg"===d?await h.embedJpg(p):await h.embedPng(p);var m=null;m=h.addPage(c);const{width:w,height:f}=m.getSize();g&&m.drawImage(v,{x:175,y:f-220,width:260,height:170}),g&&m.drawImage(g,{x:175,y:f-490,width:260,height:170}),y&&m.drawImage(y,{x:175,y:f-730,width:260,height:170});let b=r?r.split(" ").join("_")+"_idsFrame_EN":"_idsFrame";h.setTitle(b),h.setAuthor("Stephanie Solution Group"),h.setCreator("Stephanie Solution Group"),h.setCreationDate(new Date),h.setModificationDate(new Date);{const e=await h.save();return(0,n.ou)(e)}}let h=8.5,u={cid:{type:"text",text:"",x:190,y:68,size:9.5,color:[104,104,104],font:"Harting_plain",pageNo:0},class:{type:"text",text:"",x:203,y:58,size:9.5,color:[104,104,104],font:"Harting_plain",pageNo:0},fisrtnameU:{type:"text",text:"",x:95,y:105,size:11,color:[104,104,104],font:"Harting_plain",pageNo:0},lastNameU:{type:"text",text:"",x:95,y:117,size:11,color:[104,104,104],font:"Harting_plain",pageNo:0},backCode:{type:"text",text:"57292",x:446,y:183,size:14,color:[41,41,41],font:"roboto_regular",pageNo:0},f_code:{type:"text",text:"57292",x:94,y:178,size:h,color:[104,104,104],font:"Harting_plain",pageNo:0},iss_yy:{type:"text",text:"",x:138,y:178,size:h,color:[104,104,104],font:"Harting_plain",pageNo:0},exp_yy:{type:"text",text:"",x:191,y:178,size:h,color:[104,104,104],font:"Harting_plain",pageNo:0},exp_mm:{type:"text",text:"",x:168,y:178,size:h,color:[104,104,104],font:"Harting_plain",pageNo:0},dob_yy:{type:"text",text:"",x:21,y:178,size:h,color:[104,104,104],font:"Harting_plain",pageNo:0},dob_mm:{type:"text",text:"",x:44,y:178,size:h,color:[104,104,104],font:"Harting_plain",pageNo:0},dob_dd:{type:"text",text:"",x:63,y:178,size:h,color:[104,104,104],font:"Harting_plain",pageNo:0},limitante:{type:"text",text:"NINGUNA",x:33,y:140,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CB_mm:{type:"text",text:"",x:383,y:100,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CB_yy:{type:"text",text:"",x:382,y:108,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA1_mm:{type:"text",text:"",x:383,y:45,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA1_yy:{type:"text",text:"",x:382,y:53,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA_mm:{type:"",text:"",x:383,y:72,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0},CA_yy:{type:"text",text:"",x:382,y:80,size:7,color:[104,104,104],font:"Harting_plain",pageNo:0}};async function g(e,t){const i=[560,205];let s=182.5,d=266.5;var r=null;(r=await a.PDFDocument.create()).registerFontkit(l.Z);const c=await(0,n.h2)(r);let h=(0,o.bh)("DL_cuba_f.png");const g=await fetch(h).then((e=>e.arrayBuffer()));let x=null;x=await r.embedPng(g);let y=(0,o.bh)("DL_cuba_b.png");const p=await fetch(y).then((e=>e.arrayBuffer()));let v=null;v=await r.embedPng(p);var m=null;m=r.addPage(i);const{width:w,height:f}=m.getSize();x&&m.drawImage(x,{x:10,y:f-s-10,width:d,height:s}),v&&m.drawImage(v,{x:276.5,y:f-s-10,width:d,height:s});let b=(0,o._I)(u);const _=r.getPages();(0,o._2)(e).map((t=>{b[t]&&e[t]?b[t].text=e[t]:delete b[t]})),b&&(0,o._2)(b).map((async e=>{let t=b[e];if(t){var i;let e=t.pageNo,n=null===_||void 0===_||null===(i=_[e])||void 0===i?void 0:i.getSize();if("text"===t.type){var l;let i=t.text?t.text.toString():"";null===(l=_[e])||void 0===l||l.drawText(i,{x:t.x,y:n.height-t.y,size:t.size||10,font:(0,o.Pn)(t.font)||c.TimesRomanItalic,color:t.color?(0,a.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,a.rgb)(0,0,0)})}else if("multi_line"===t.type){let i=t.text?t.text.toString():"",l=t.lineHeight||10;const s=(0,a.layoutMultilineText)(i,{alignment:"left",font:(0,o.Pn)(t.font)||c.TimesRomanItalic,fontSize:t.size||9,lineHeight:l,bounds:{width:w-100,height:500}});let d=n.height-t.y;for(let n=0;n<s.lines.length;n++)_[e].drawText("".concat(s.lines[n].text),{x:t.x,y:d,size:t.size||9,maxWidth:w-100,font:(0,o.Pn)(t.font)||c.TimesRomanItalic,color:t.color?(0,a.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,a.rgb)(0,0,0)}),d-=l;return d}}}));let j=t?t.split(" ").join("_")+"_idsFrame_EN":"_idsFrame";r.setTitle(j),r.setAuthor("Stephanie Solution Group"),r.setCreator("Stephanie Solution Group"),r.setCreationDate(new Date),r.setModificationDate(new Date);{const e=await r.save();return(0,n.ou)(e)}}}}]);
//# sourceMappingURL=6586.1a09410d.chunk.js.map