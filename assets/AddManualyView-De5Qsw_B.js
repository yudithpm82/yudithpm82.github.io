const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PassportAnalizingView-c-6eRvgU.js","assets/index-ZiXU7VfC.js","assets/index-DUq9wHKT.css","assets/handelImagesServices-DqbDvNyL.js","assets/Util-BpydYJG8.js","assets/index-Ci0zXM0r.js","assets/globalSignal-BYlE7jq7.js","assets/debounces-DtD41Ggw.js","assets/ShowQRPrintLabel-fgCzkiZ8.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-DUJ976iE.js","assets/Toast-Dzm23jLY.js","assets/Toast-DLpFKn-Q.css","assets/DialogHRM-DF2-6Pxa.js","assets/DialogHRM-V9_lZntj.css","assets/ButonHrm-BYHKsorv.js","assets/SVG-CNr5lwjI.js","assets/ButonHrm-BSeWNUGQ.css","assets/LoadingColorSpinner-Cd4UB6Pq.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/LabelsViews-Dvq8zdcw.js"])))=>i.map(i=>d[i]);
import{l as o,_ as s,k as _,c as v,a as g,i,d as n,f as b,t as h,j as x}from"./index-ZiXU7VfC.js";import"./ButonUploadHrm-DRf-KTge.js";import"./Toast-Dzm23jLY.js";import{g as P,a as A,q as C,f as E}from"./Util-BpydYJG8.js";import{CloseModal as w}from"./DialogHRM-DF2-6Pxa.js";import{i as I}from"./globalSignal-BYlE7jq7.js";/* empty css                 */import"./SVG-CNr5lwjI.js";import"./index-Ci0zXM0r.js";var N=h('<div><div class="centerBx spaceAround flxWrp"style=margin-top:26px><div class="centerBx bottombx lowbordr spaceAround"><h5>Agregar Cliente</h5></div></div><div class=" spaceAround flxWrp"style=margin:26px></div><div class=" spaceAround flxWrp"style=margin:26px>');o(()=>s(()=>import("./PassportAnalizingView-c-6eRvgU.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])));const S=o(()=>s(()=>import("./ButonHrm-BYHKsorv.js"),__vite__mapDeps([17,1,2,18,5,4,19])));o(()=>s(()=>import("./LoadingColorSpinner-Cd4UB6Pq.js"),__vite__mapDeps([20,1,2,21])));const p=o(()=>s(()=>import("./LabelsViews-Dvq8zdcw.js"),__vite__mapDeps([22,1,2,8,9,5,10,11,12,4,13,14]))),k=m=>{_(async()=>{});const[l,c]=v({firstName:"",lastName:""});g("");const d=(e,t)=>{c([e],t)},f=async()=>{let e={...l};e.clientNotaryId=P(),e.businessId=x?.profile?.businessId;let t={...A(C())?.add_notary};t.form=e,u(t)},u=async e=>{const a=await E(e);a&&!a.error&&w(m?.modalId)};return(()=>{var e=N(),t=e.firstChild;t.firstChild;var a=t.nextSibling,y=a.nextSibling;return e.style.setProperty("height","clamp(45vh, 59vh,66vh)"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),i(t,n(S,{icon:"plus",color:"#c8193c",label:"Salvar",handleClick:f}),null),i(a,n(p,{label:"Nombre: ",get value(){return l?.firstName},allowChanges:!0,confirm:r=>d("firstName",r)})),i(y,n(p,{label:"Apellidos: ",get value(){return l?.lastName},allowChanges:!0,confirm:r=>d("lastName",r)})),b(r=>(r=I()?"96vw":"66vw")!=null?e.style.setProperty("width",r):e.style.removeProperty("width")),e})()};export{k as default};