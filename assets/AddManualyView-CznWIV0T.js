const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PassportAnalizingView-CB7102ex.js","assets/index-C63u1bNq.js","assets/index-DUq9wHKT.css","assets/handelImagesServices-BLW01XO_.js","assets/Util-D_-lrQft.js","assets/globalSignal-bxF3o2j2.js","assets/PDFButton-BgfH37Tc.js","assets/ShowQRPrintLabel-CiGHAFlO.js","assets/fontkit.es-CuNhqzmX.js","assets/InitPrintServices-BihJu0L8.js","assets/Toast-DznGGDcj.js","assets/Toast-DLpFKn-Q.css","assets/DialogHRM-CbF94P_6.js","assets/DialogHRM-V9_lZntj.css","assets/ButonHrm-D3_HfMDY.js","assets/SVG-oF5sF5hC.js","assets/ButonHrm-BSeWNUGQ.css","assets/LoadingColorSpinner-CXLgcWI6.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/LabelsViews-B4Nwl354.js"])))=>i.map(i=>d[i]);
import{l,_ as i,k as _,c as v,a as g,i as n,e as o,f as h,t as b,h as x,j as P}from"./index-C63u1bNq.js";import"./wrappAddView-CGmcLKPt.js";import"./Toast-DznGGDcj.js";import{g as A,b as w,q as C,a as E}from"./Util-D_-lrQft.js";import{CloseModal as N}from"./DialogHRM-CbF94P_6.js";import{i as I}from"./globalSignal-bxF3o2j2.js";/* empty css                 */import"./SVG-oF5sF5hC.js";var S=b('<div><div class="centerBx spaceAround flxWrp"style=margin-top:26px><div class="centerBx bottombx lowbordr spaceAround"><h5>Agregar Cliente</h5></div></div><div class=" spaceAround flxWrp"style=margin:26px></div><div class=" spaceAround flxWrp"style=margin:26px>');l(()=>i(()=>import("./PassportAnalizingView-CB7102ex.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])));const D=l(()=>i(()=>import("./ButonHrm-D3_HfMDY.js"),__vite__mapDeps([14,1,2,15,4,16])));l(()=>i(()=>import("./LoadingColorSpinner-CXLgcWI6.js"),__vite__mapDeps([17,1,2,18])));const m=l(()=>i(()=>import("./LabelsViews-B4Nwl354.js"),__vite__mapDeps([19,1,2,7,6,4,8,9,10,11]))),k=p=>{_(async()=>{});const[a,c]=v({firstName:"",lastName:""});g("");const d=(e,t)=>{c([e],t)},u=async()=>{let e={...a};e.clientNotaryId=A(),e.businessId=P?.profile?.businessId;let t={...w(C())?.add_notary};t.form=e,f(t)},f=async e=>{const s=await E(e);s&&!s.error&&N(p?.modalId)};return(()=>{var e=S(),t=e.firstChild;t.firstChild;var s=t.nextSibling,y=s.nextSibling;return e.style.setProperty("height","clamp(45vh, 59vh,66vh)"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),n(t,o(x,{get when(){return a?.firstName&&a?.lastName},get children(){return o(D,{icon:"plus",color:"#c8193c",label:"Salvar",handleClick:u})}}),null),n(s,o(m,{label:"Nombre: ",get value(){return a?.firstName},allowChanges:!0,confirm:r=>d("firstName",r)})),n(y,o(m,{label:"Apellidos: ",get value(){return a?.lastName},allowChanges:!0,confirm:r=>d("lastName",r)})),h(r=>(r=I()?"96vw":"66vw")!=null?e.style.setProperty("width",r):e.style.removeProperty("width")),e})()};export{k as default};