const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-Cs0_zJbd.js","assets/index-Cy80XFDb.js","assets/index-BTZGS13b.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-Df1YX7aL.js","assets/debounces-D_mnU7TG.js","assets/SVG-DqUQoqiz.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ButonHrm-CA4Lk24D.js","assets/Util-DK6KNnW6.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-BW1BpKCj.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-DHKq4h5V.js","assets/InputHr-M3rJ9grQ.css","assets/FlexSpace-BIifIYsO.js","assets/LabelsViews-Cm7sSX6I.js","assets/ShowQRPrintLabel-B_4GvRlD.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-B5eygcZz.js","assets/Toast-CdLFHZaV.js","assets/Toast-DLpFKn-Q.css","assets/LabelsDropDownViews-BMUjL2Ha.js"])))=>i.map(i=>d[i]);
import{l as i,_ as a,c as E,a as v,u as x,o as L,h as b,k as y,i as r,d as l,t as C}from"./index-Cy80XFDb.js";import{o as u}from"./Util-DK6KNnW6.js";import{u as P}from"./debounces-D_mnU7TG.js";import"./globalSignal-D_sQRpcj.js";import{t as s}from"./InitPrintServices-B5eygcZz.js";import"./index-Ci0zXM0r.js";import"./PDFButton-B_0lS8EG.js";var A=C('<div><div class="client_item_box gWXAaj jlytmu"><div class="centerBx bottombx lowbordr spaceAround"><h5>Lugar de Nacimiento</h5></div><div class="centerBx spaceAround flxWrp"><div class=flexSpace></div><div></div><div class=flexSpace></div><div></div><div class=flexSpace>');i(()=>a(()=>import("./LoadingColorSpinner-Cs0_zJbd.js"),__vite__mapDeps([0,1,2,3])));i(()=>a(()=>import("./DropDwnSearch-Df1YX7aL.js"),__vite__mapDeps([4,1,2,5,6,7,8])));i(()=>a(()=>import("./ButonHrm-CA4Lk24D.js"),__vite__mapDeps([9,1,2,6,7,10,11])));i(()=>a(()=>import("./CheckBoxSlide-BW1BpKCj.js"),__vite__mapDeps([12,1,2,13])));i(()=>a(()=>import("./InputHr-DHKq4h5V.js"),__vite__mapDeps([14,1,2,15])));i(()=>a(()=>import("./SVG-DqUQoqiz.js"),__vite__mapDeps([6,1,2,7])));i(()=>a(()=>import("./FlexSpace-BIifIYsO.js"),__vite__mapDeps([16,1,2])));const c=i(()=>a(()=>import("./LabelsViews-Cm7sSX6I.js"),__vite__mapDeps([17,1,2,18,19,7,20,21,22,10,23,24]))),_=i(()=>a(()=>import("./LabelsDropDownViews-BMUjL2Ha.js"),__vite__mapDeps([25,1,2,18,19,7,20,21,22,10,23,24])));function w(e){E({search:""}),v(0);const[B,f]=v("");return P(f,400),x(),L(()=>{}),b(()=>{}),y(async()=>{}),(()=>{var d=A(),m=d.firstChild,h=m.firstChild,g=h.nextSibling,p=g.firstChild,n=p.nextSibling,O=n.nextSibling,o=O.nextSibling;return m.style.setProperty("margin","15px 30px"),r(n,l(c,{label:"Lugar: ",get value(){return s(e?.item?.placeOfBirth?.city)+s(e?.item?.placeOfBirth?.state)+s(e?.item?.placeOfBirth?.country)}}),null),r(n,l(c,{label:"Ciudad: ",get value(){return e?.item?.placeOfBirth?.city},allowChanges:!0,confirm:t=>e.saveUpd("placeOfBirth:city",t)}),null),r(n,l(c,{label:"Provincia: ",get value(){return e?.item?.placeOfBirth?.state},allowChanges:!0,confirm:t=>e.saveUpd("placeOfBirth:state",t)}),null),r(o,l(_,{label:"Pais de nacimiento: ",get value(){return e?.item?.placeOfBirth?.country},list:u,allowChanges:!0,confirm:t=>e.saveUpd("placeOfBirth:country",t)}),null),r(o,l(_,{label:"Ciudadania: ",get value(){return e?.item?.countryOfCitizenship},list:u,allowChanges:!0,confirm:t=>e.saveUpd("countryOfCitizenship",t)}),null),r(o,l(_,{label:"Pais de Residencia: ",get value(){return e?.item?.currentLocation?.country},list:u,allowChanges:!0,confirm:t=>e.saveUpd("currentLocation:country",t)}),null),r(o,l(c,{label:"Estado de Residencia: ",get value(){return e?.item?.currentLocation?.state},allowChanges:!0,confirm:t=>e.saveUpd("currentLocation:state",t)}),null),d})()}export{w as default};