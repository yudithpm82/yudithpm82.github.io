const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-6qEmE_-j.js","assets/index-BFj7Mech.js","assets/index-DUq9wHKT.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-BesNfV-G.js","assets/PDFButton-sihv0FkA.js","assets/Util-D_-lrQft.js","assets/SVG-yAnzRLw8.js","assets/DropDwnSearch-BQ1Fmfah.css","assets/ButonHrm-BzI1yRO8.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-Eqd2LxRr.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-DX4_qEay.js","assets/InputHr-M3rJ9grQ.css","assets/LabelsDateViews-CG4YjVLX.js","assets/ShowQRPrintLabel-BAeHp0JT.js","assets/fontkit.es-BbirE0hJ.js","assets/InitPrintServices-BwoYxtR9.js","assets/Toast-CSKOVewI.js","assets/Toast-DLpFKn-Q.css","assets/DialogHRM-CiwNGCzI.js","assets/DialogHRM-V9_lZntj.css","assets/LabelsViews-BUP0L2QY.js","assets/LabelsDropDownViews-B2n_x6Nm.js"])))=>i.map(i=>d[i]);
import{l as o,_ as m,a as C,o as D,b as L,k as O,i as r,e as n,g as w,t as $,F as P,j as h}from"./index-BFj7Mech.js";import{O as S,m as T,g as I,b as U,q as V,a as R}from"./Util-D_-lrQft.js";import{A as B}from"./AlertDelete-CcPEUmzJ.js";import{OpenModal as N}from"./DialogHRM-CiwNGCzI.js";import"./globalSignal-CRSMG6SG.js";var k=$('<div class=""><div class="centerBx spaceAround"><div class="centerBx bottombx lowbordr spaceAround"><h5>Empleos'),j=$('<div class="client_item_box gWXAaj jlytmu bottombx"><div class="centerBx bottombx spaceAround"><div class=""><div class=separator></div>/<!> - <!>/<div></div><div class="centerBx bottombx spaceAround"><div class="icon_status centerBx"></div>|<div class="icon_status centerBx">');o(()=>m(()=>import("./LoadingColorSpinner-6qEmE_-j.js"),__vite__mapDeps([0,1,2,3])));o(()=>m(()=>import("./DropDwnSearch-BesNfV-G.js"),__vite__mapDeps([4,1,2,5,6,7,8])));const p=o(()=>m(()=>import("./ButonHrm-BzI1yRO8.js"),__vite__mapDeps([9,1,2,7,6,10])));o(()=>m(()=>import("./CheckBoxSlide-Eqd2LxRr.js"),__vite__mapDeps([11,1,2,12])));o(()=>m(()=>import("./InputHr-DX4_qEay.js"),__vite__mapDeps([13,1,2,14])));const x=o(()=>m(()=>import("./SVG-yAnzRLw8.js"),__vite__mapDeps([7,1,2,6])));o(()=>m(()=>import("./LabelsDateViews-CG4YjVLX.js"),__vite__mapDeps([15,1,2,16,5,6,17,18,19,20,21,22])));const c=o(()=>m(()=>import("./LabelsViews-BUP0L2QY.js"),__vite__mapDeps([23,1,2,16,5,6,17,18,19,20]))),z=o(()=>m(()=>import("./LabelsDropDownViews-B2n_x6Nm.js"),__vite__mapDeps([24,1,2,16,5,6,17,18,19,20])));function W(e){C(0),D(()=>{}),L(()=>{}),O(async()=>{});const u=async()=>{let i={...e?.item?.employers},a=I();i[a]={placeOfEntry:"",state:"",status:"",dateOfEntry:""},t(e?.item?.clientNotaryId,{employers:i})},y=async i=>{let a={...e?.item?.employers};delete a[i],t(e?.item?.clientNotaryId,{employers:a})},t=async(i,a)=>{let d={...U(V())?.upd_notary};d.params={clientNotaryId:i||e?.item?.clientNotaryId},h?.profile?.isAdmin||(d.params.businessId=h?.profile?.businessId),d.data2update=a;const v=await R(d);v&&!v.error&&e?.updCL(a)},s=i=>{let a={};a.id=I(),a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=n(B,{confirm:()=>y(i)}),N(a)};return(()=>{var i=k(),a=i.firstChild;return a.firstChild,i.style.setProperty("margin","15px 30px"),r(a,n(p,{icon:"plus",color:"#c8193c",label:"Agregar",handleClick:u}),null),r(i,n(P,{get each(){return S(e?.item?.employers)},children:(d,_)=>n(M,{get item(){return e?.item?.employers[d]},addressId:d,get saveUpd(){return e?.saveUpd},rmv:s})}),null),i})()}const M=e=>(()=>{var u=j(),y=u.firstChild,t=y.firstChild,s=t.firstChild,i=s.nextSibling,a=i.nextSibling,d=a.nextSibling,_=d.nextSibling,v=_.nextSibling,g=v.nextSibling,E=g.nextSibling,b=E.firstChild,A=b.nextSibling,f=A.nextSibling;return u.style.setProperty("margin","9px"),u.style.setProperty("padding","15px"),t.style.setProperty("width","340px"),r(t,n(z,{label:"Pais: ",get value(){return e?.item?.country},list:T,allowChanges:!0,confirm:l=>e?.saveUpd(`employers:${e?.addressId}:country`,l)}),s),r(t,n(c,{label:"Empleador: ",get value(){return e?.item?.employerName},allowChanges:!0,confirm:l=>e?.saveUpd(`employers:${e?.addressId}:employerName`,l)}),s),r(t,n(c,{label:"Ocupacion: ",get value(){return e?.item?.occupation},allowChanges:!0,confirm:l=>e?.saveUpd(`employers:${e?.addressId}:occupation`,l)}),s),r(t,n(c,{label:"Direccion: ",get value(){return e?.item?.addressLineOne},allowChanges:!0,confirm:l=>e?.saveUpd(`employers:${e?.addressId}:addressLineOne`,l)}),s),r(t,n(c,{label:"Apt, Ste, Unit: ",get value(){return e?.item?.addressLineTwo},allowChanges:!0,confirm:l=>e?.saveUpd(`employers:${e?.addressId}:addressLineTwo`,l)}),s),r(t,n(c,{label:"Ciudad: ",get value(){return e?.item?.city},allowChanges:!0,confirm:l=>e?.saveUpd(`employers:${e?.addressId}:city`,l)}),s),r(t,n(c,{label:"Estado: ",get value(){return e?.item?.state},allowChanges:!0,confirm:l=>e?.saveUpd(`employers:${e?.addressId}:state`,l)}),s),r(t,n(c,{label:"Desde: ",get value(){return e?.item?.from},allowChanges:!0,confirm:l=>e?.saveUpd(`employers:${e?.addressId}:from`,l)}),s),r(t,n(c,{label:"Hasta: ",get value(){return e?.item?.to},allowChanges:!0,confirm:l=>e?.saveUpd(`employers:${e?.addressId}:to`,l)}),s),r(t,()=>e?.item?.fromDate?.month,i),r(t,()=>e?.item?.fromDate?.year,a),r(t,()=>e?.item?.toDate?.month,_),r(t,()=>e?.item?.toDate?.year,g),r(b,n(x,{name:"link",size:26,color:"#2b2b2b"})),f.$$click=()=>e?.rmv(e?.addressId),r(f,n(x,{name:"outline_delete",size:26,color:"#2b2b2b"})),u})();w(["click"]);export{W as default};
