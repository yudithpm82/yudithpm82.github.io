const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AddManualyView-De5Qsw_B.js","assets/index-ZiXU7VfC.js","assets/index-DUq9wHKT.css","assets/ButonUploadHrm-DRf-KTge.js","assets/SVG-CNr5lwjI.js","assets/index-Ci0zXM0r.js","assets/Util-BpydYJG8.js","assets/ButonHrm-BSeWNUGQ.css","assets/Toast-Dzm23jLY.js","assets/Toast-DLpFKn-Q.css","assets/DialogHRM-DF2-6Pxa.js","assets/DialogHRM-V9_lZntj.css","assets/globalSignal-BYlE7jq7.js","assets/PassportAnalizingView-c-6eRvgU.js","assets/handelImagesServices-DqbDvNyL.js","assets/debounces-DtD41Ggw.js","assets/ShowQRPrintLabel-fgCzkiZ8.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-DUJ976iE.js","assets/ButonHrm-BYHKsorv.js","assets/LoadingColorSpinner-Cd4UB6Pq.js","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as _,_ as f,i as m,d as l,a as q,u as P,C as U,j as L,t as O,S as x}from"./index-ZiXU7VfC.js";import k from"./ButonUploadHrm-DRf-KTge.js";import{OpenToast as T}from"./Toast-Dzm23jLY.js";import{f as g,g as w,B,a as v,q as I,O as V}from"./Util-BpydYJG8.js";import{OpenModal as E}from"./DialogHRM-DF2-6Pxa.js";/* empty css                 */import"./SVG-CNr5lwjI.js";import"./index-Ci0zXM0r.js";var M=O('<div class="centerBx spaceAround flxWrp">'),$=O("<div> ");const z=_(()=>f(()=>import("./AddManualyView-De5Qsw_B.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))),R=_(()=>f(()=>import("./PassportAnalizingView-c-6eRvgU.js"),__vite__mapDeps([13,1,2,14,6,5,12,15,16,17,18,19,20,8,9,10,11]))),D=_(()=>f(()=>import("./ButonHrm-BYHKsorv.js"),__vite__mapDeps([21,1,2,4,5,6,7]))),H=_(()=>f(()=>import("./LoadingColorSpinner-Cd4UB6Pq.js"),__vite__mapDeps([22,1,2,23]))),te=a=>{const o=()=>{},s=(e,h,y)=>{let c={};c.id=w(),c.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},c.content=l(R,{item:y,fl:e,b64:h}),E(c)},d=()=>{let e={};e.id=w(),e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=l(z,{}),E(e)};return(()=>{var e=M();return m(e,l(D,{icon:"keyboard",color:"rgb(200 25 60 / 1)",label:"Manual",handleClick:d}),null),m(e,l(F,{action:s}),null),m(e,l(D,{icon:"qr_code",color:"rgb(200 25 60 / 1)",label:"Desde BarCode",handleClick:o}),null),e})()},F=a=>{const[o,s]=q(null),[d,e]=q(!1);P(),U();const h=async(t,r)=>{let u=await N(t.type,r);if(await j(u,t)){let C=t.name.split(".").pop(),n=B(t.name),i=n+"."+C,p={...v(I())?.add_img_loc};p.form={imgLocId:n,fileName:r,fileN:i,originSource:L?.profile?.businessId,linked:"$$"};let b=await Q(p);b&&a.action&&a.action(r,n,b),e(!1)}},y=async()=>{let t=o().file.name.split(".").pop(),r=B(o().file.name),u={params:{imgLocId:r.trim()}},S={...v(I())?.id_img_loc};u={...u,...S};const n=await g(u);if(n&&n?.imgLocId===r){let i={params:{":search0":r.trim()}},p={...v(I())?.search_notary};i={...i,...p};const A=await g(i);A&&V(A).length>1?T({text:"Cliente encontrado con esa imagen",timeout:4500}):a.action&&a.action(n.fileName,r,n),e(!1)}else{let i=w()+"_"+r+"."+t;h(o().file,i)}},c=t=>{s(t),e(!0),y()};return l(x,{get when(){return!d()},get fallback(){return(()=>{var t=$();return t.firstChild,m(t,l(H,{stroke:"rgb(200 25 60 / 1)",size:32}),null),t})()},get children(){return l(k,{accept:"image/*",color:"rgb(200 25 60 / 1)",icon:"image_outline",label:"Desde Imagen",handleClick:c})}})},N=async(a,o)=>{let s={query:"SignedUrlUpload",params:{userId:L?.profile?.businessId,fileName:o,mimeType:a}};const e=await g(s);return e&&!e.error?e.uploadURL:null},j=async(a,o)=>(await fetch(a,{method:"PUT",headers:{"Content-Type":o.type},body:o}))?.status===200?!0:null,Q=async(a,o,s)=>{const e=await g(a);if(e&&!e.error)return e};export{te as default,N as getSignedUploadUrlAsync,j as uploadSignedUrlBlob};