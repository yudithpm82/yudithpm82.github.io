const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-CKZ0XasZ.js","assets/index-B1LD44Gq.js","assets/index-DUq9wHKT.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-CjBLNx5K.js","assets/debounces-ChHRdpkc.js","assets/SVG-DrotoeO1.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ButonHrm-C2GoMcl0.js","assets/Util-BinxSAAi.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-A_VjzAHa.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-DVgwJZVp.js","assets/InputHr-M3rJ9grQ.css","assets/LabelsDateViews-B89Ee9FQ.js","assets/ShowQRPrintLabel-D9cSbSen.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-g8RN6FFb.js","assets/Toast-DnMPh_hg.js","assets/Toast-DLpFKn-Q.css","assets/DialogHRM-calq9pud.js","assets/DialogHRM-V9_lZntj.css","assets/LabelsViews-CuKDmPIH.js","assets/LabelsDropDownViews-Big_b6_M.js"])))=>i.map(i=>d[i]);
import{l as s,_ as o,a as I,o as h,h as x,k as A,i as d,d as n,e as R,t as b,F as p,j as y}from"./index-B1LD44Gq.js";import{O,a as g,g as v,q as $,f as C}from"./Util-BinxSAAi.js";import{A as P}from"./AlertDelete-HGk_gYQf.js";import{OpenModal as L}from"./DialogHRM-calq9pud.js";import"./index-Ci0zXM0r.js";import"./globalSignal-uPuOvp31.js";var D=b('<div class=""><div class="centerBx spaceAround"><div class="centerBx bottombx lowbordr spaceAround"><h5>Entradas al Pais'),T=b('<div class="client_item_box gWXAaj jlytmu bottombx"><div class="centerBx bottombx spaceAround"><div class=""><div class=separator></div><div class="centerBx bottombx spaceAround"><div class="icon_status centerBx"></div>|<div class="icon_status centerBx">');s(()=>o(()=>import("./LoadingColorSpinner-CKZ0XasZ.js"),__vite__mapDeps([0,1,2,3])));s(()=>o(()=>import("./DropDwnSearch-CjBLNx5K.js"),__vite__mapDeps([4,1,2,5,6,7,8])));const V=s(()=>o(()=>import("./ButonHrm-C2GoMcl0.js"),__vite__mapDeps([9,1,2,6,7,10,11])));s(()=>o(()=>import("./CheckBoxSlide-A_VjzAHa.js"),__vite__mapDeps([12,1,2,13])));s(()=>o(()=>import("./InputHr-DVgwJZVp.js"),__vite__mapDeps([14,1,2,15])));const E=s(()=>o(()=>import("./SVG-DrotoeO1.js"),__vite__mapDeps([6,1,2,7]))),k=s(()=>o(()=>import("./LabelsDateViews-B89Ee9FQ.js"),__vite__mapDeps([16,1,2,17,18,7,19,20,21,10,22,23,24,25]))),f=s(()=>o(()=>import("./LabelsViews-CuKDmPIH.js"),__vite__mapDeps([26,1,2,17,18,7,19,20,21,10,22,23]))),w=s(()=>o(()=>import("./LabelsDropDownViews-Big_b6_M.js"),__vite__mapDeps([27,1,2,17,18,7,19,20,21,10,22,23])));function q(e){I(0),h(()=>{}),x(()=>{}),A(async()=>{});const _=async()=>{let r={...e?.item?.entryRecord},t=v();r[t]={placeOfEntry:"",state:"",status:"",dateOfEntry:""},i(e?.item?.clientNotaryId,{entryRecord:r})},u=async r=>{let t={...e?.item?.entryRecord};delete t[r],i(e?.item?.clientNotaryId,{entryRecord:t})},i=async(r,t)=>{let l={...g($())?.upd_notary};l.params={clientNotaryId:r||e?.item?.clientNotaryId},y?.profile?.isAdmin||(l.params.businessId=y?.profile?.businessId),l.data2update=t;const a=await C(l);a&&!a.error&&e?.updCL(t)},c=r=>{let t={};t.id=v(),t.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},t.content=n(P,{confirm:()=>u(r)}),L(t)};return(()=>{var r=D(),t=r.firstChild;return t.firstChild,r.style.setProperty("margin","15px 30px"),d(t,n(V,{icon:"plus",color:"#c8193c",label:"Agregar",handleClick:_}),null),d(r,n(p,{get each(){return O(e?.item?.entryRecord)},children:(l,m)=>n(S,{get item(){return e?.item?.entryRecord[l]},keyId:l,get saveUpd(){return e?.saveUpd},rmv:c})}),null),r})()}const S=e=>(()=>{var _=T(),u=_.firstChild,i=u.firstChild,c=i.firstChild,r=c.nextSibling,t=r.firstChild,l=t.nextSibling,m=l.nextSibling;return _.style.setProperty("margin","9px"),_.style.setProperty("padding","15px"),i.style.setProperty("width","340px"),d(i,n(f,{label:"Lugar de Entrada: ",get value(){return e?.item?.placeOfEntry},allowChanges:!0,confirm:a=>e?.saveUpd(`entryRecord:${e?.keyId}:placeOfEntry`,a)}),c),d(i,n(k,{label:"Fecha de entrada: ",get value(){return e?.item?.dateOfEntry},allowChanges:!0,confirm:a=>e?.saveUpd(`entryRecord:${e?.keyId}:dateOfEntry`,a)}),c),d(i,n(f,{label:"Estado: ",get value(){return e?.item?.state},allowChanges:!0,confirm:a=>e?.saveUpd(`entryRecord:${e?.keyId}:state`,a)}),c),d(i,n(w,{label:"Estatus: ",get value(){return e?.item?.status},get list(){return g("drpDwnInmigrationStatus")},allowChanges:!0,confirm:a=>e.saveUpd(`entryRecord:${e?.keyId}:status`,a)}),c),d(t,n(E,{name:"link",size:26,color:"#2b2b2b"})),m.$$click=()=>e?.rmv(e?.keyId),d(m,n(E,{name:"outline_delete",size:26,color:"#2b2b2b"})),_})();R(["click"]);export{q as default};