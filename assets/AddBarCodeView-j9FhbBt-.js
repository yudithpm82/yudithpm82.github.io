const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PassportAnalizingView-DIECtGAe.js","assets/index-CvYaQ-s6.js","assets/index-DUq9wHKT.css","assets/handelImagesServices-DUVPx-oo.js","assets/Util-D_-lrQft.js","assets/globalSignal-BQY5JgUu.js","assets/PDFButton-CSS0jQgP.js","assets/ShowQRPrintLabel-1R_Ti2XR.js","assets/fontkit.es-Dm0cGHgD.js","assets/InitPrintServices-C0pVP2ci.js","assets/Toast-Cr22bH7f.js","assets/Toast-DLpFKn-Q.css","assets/DialogHRM-oeegtrC_.js","assets/DialogHRM-V9_lZntj.css","assets/ButonHrm-PmxI45J5.js","assets/SVG-DJK66ZUv.js","assets/ButonHrm-BSeWNUGQ.css","assets/LoadingColorSpinner-D4w8qvcq.js","assets/LoadingColorSpinner-DPNLfwBi.css","assets/LabelsViews-KFGSt-lh.js","assets/InputHr-C9oU7r1J.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l,_ as i,k as A,c as C,a as p,i as n,e as s,f as P,t as w,h as E,j as I}from"./index-CvYaQ-s6.js";import"./wrappAddView-zf1Bj6Z9.js";import"./Toast-Cr22bH7f.js";import{g as N,b as S,q as V,a as k}from"./Util-D_-lrQft.js";import{CloseModal as D}from"./DialogHRM-oeegtrC_.js";import{i as m}from"./globalSignal-BQY5JgUu.js";/* empty css                 */import"./SVG-DJK66ZUv.js";var L=w('<div><div class="centerBx spaceAround flxWrp"style=margin-top:26px><div class="centerBx bottombx lowbordr spaceAround"><h5>Agregar Cliente</h5></div></div><div class=" spaceAround flxWrp"style=margin:26px></div><div class=" spaceAround flxWrp"style=margin:26px></div><div class=" spaceAround flxWrp"style=margin:26px>');l(()=>i(()=>import("./PassportAnalizingView-DIECtGAe.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])));const R=l(()=>i(()=>import("./ButonHrm-PmxI45J5.js"),__vite__mapDeps([14,1,2,15,4,16])));l(()=>i(()=>import("./LoadingColorSpinner-D4w8qvcq.js"),__vite__mapDeps([17,1,2,18])));const u=l(()=>i(()=>import("./LabelsViews-KFGSt-lh.js"),__vite__mapDeps([19,1,2,7,6,4,8,9,10,11]))),T=l(()=>i(()=>import("./InputHr-C9oU7r1J.js"),__vite__mapDeps([20,1,2,21]))),j=f=>{A(async()=>{});const[o,v]=C({firstName:"",lastName:""});p("");const[_,b]=p(""),d=(e,r)=>{v([e],r)},g=async()=>{let e={...o};e.clientNotaryId=N(),e.businessId=I?.profile?.businessId;let r={...S(V())?.add_notary};r.form=e,y(r)},y=async e=>{const a=await k(e);a&&!a.error&&D(f?.modalId)},h=()=>{};return(()=>{var e=L(),r=e.firstChild;r.firstChild;var a=r.nextSibling,c=a.nextSibling,x=c.nextSibling;return e.style.setProperty("height","clamp(45vh, 59vh,66vh)"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),n(r,s(E,{get when(){return o?.firstName&&o?.lastName},get children(){return s(R,{icon:"plus",color:"#c8193c",label:"Salvar",handleClick:g})}}),null),n(a,s(T,{get width(){return m()?"360px":"720px"},backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return _()},placeholder:"escanear codigo del Id",colors:"#2b2b2b",handleClick:t=>b(t),onEnter:t=>h()})),n(c,s(u,{label:"Nombre: ",get value(){return o?.firstName},allowChanges:!0,confirm:t=>d("firstName",t)})),n(x,s(u,{label:"Apellidos: ",get value(){return o?.lastName},allowChanges:!0,confirm:t=>d("lastName",t)})),P(t=>(t=m()?"96vw":"66vw")!=null?e.style.setProperty("width",t):e.style.removeProperty("width")),e})()};export{j as default};
