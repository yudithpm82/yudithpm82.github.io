const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-DS11TR-I.js","assets/index-BQDq9BVx.js","assets/index-DUq9wHKT.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DeliveryCamera-xk8nEsJP.js","assets/ButonHrm-dY04wnkc.js","assets/SVG-CYbWHDJe.js","assets/index-Ci0zXM0r.js","assets/Util-CG-K4aC-.js","assets/ButonHrm-BSeWNUGQ.css","assets/html5-qrcode-scanner-Cl8XE5pu.js","assets/debounces-D-57AQO1.js","assets/FlexSpace-Ds1B62AB.js","assets/globalSignal-C0bDyEQ1.js","assets/ItemOnDeliveryList-BvXPv1tO.js","assets/DeliveryView-Dh4Xfamy.js","assets/DialogHRM-DrXAbmTT.js","assets/DialogHRM-V9_lZntj.css","assets/DeliveryScanView-DSPMZlPZ.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/Toast-DBYC_dpW.js","assets/Toast-DLpFKn-Q.css","assets/components-AgcWFYzJ.js"])))=>i.map(i=>d[i]);
import{c as E,l as h,_ as f,a as S,J as A,u as L,h as O,o as R,k as D,i as s,d as o,f as M,t as m,S as v,p as T,F as V,E as q,s as F}from"./index-BQDq9BVx.js";import{f as z,g as G,O as y,a as Q,q as j}from"./Util-CG-K4aC-.js";import{i as W,s as J}from"./globalSignal-C0bDyEQ1.js";import"./DialogHRM-DrXAbmTT.js";import"./ShowScanDeliveryManifest-BGizLaqc.js";import"./PDFButton-B_0lS8EG.js";import"./index-Ci0zXM0r.js";import"./html5-qrcode-scanner-Cl8XE5pu.js";import"./DeliveryView-Dh4Xfamy.js";import"./ManifestDetails-Bj8EkDtI.js";import"./debounces-D-57AQO1.js";import"./ButonHrm-dY04wnkc.js";/* empty css                 */import"./SVG-CYbWHDJe.js";import"./DeliveryScanView-DSPMZlPZ.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./Toast-DBYC_dpW.js";var K=m("<h4>"),Y=m("<h5>"),H=m('<div class=" flxWrp spaceAround centerBx bottombx"><div class=bag_number><h4>'),U=m('<div><div class=" flxWrp spaceAround centerBx"><h2> Manifesto de Entrega </h2><div class=bottombx><h4></h4></div></div><div style=padding:16px></div><div>'),I=m("<div> "),X=m("<div> <!>.");const[ye,Ie]=E(),k=h(()=>f(()=>import("./LoadingColorSpinner-DS11TR-I.js"),__vite__mapDeps([0,1,2,3])));h(()=>f(()=>import("./DeliveryCamera-xk8nEsJP.js"),__vite__mapDeps([4,1,2,5,6,7,8,9,10,11,12,13])));const Z=h(()=>f(()=>import("./ItemOnDeliveryList-BvXPv1tO.js"),__vite__mapDeps([14,1,2,8,7,11,13,15,16,17,18,19,20,21,22,23,24])));h(()=>f(()=>import("./SVG-CYbWHDJe.js"),__vite__mapDeps([6,1,2,7])));h(()=>f(()=>import("./FlexSpace-Ds1B62AB.js"),__vite__mapDeps([12,1,2])));const[ke,Ee]=S("");function Ce(){S([]);const[t,n]=E({});A();const[u,C]=L(),[ne,P]=S("");S(0),O(()=>{B()}),R(()=>{}),D(async()=>{let a=await ee({id:u?.dId,checkAuth:!0});n("detail",a);let i={};a?.linkedBagsInfo?.map(r=>{if(r?.currentStatus!="YABA_99"){let l=N(r),p=r.cidentity;if(i[l]||(i[l]={city:r?.city,estate:r?.estate,currentStatus:r?.currentStatus,customers:{},bagsNo:0}),!i[l].customers[p]){let _={name:te(r),phoneNumber:re(r),cid:r.cidentity},e={...r,..._};e.bagsNumb={},i[l].customers[p]=e}let $={bagnumber:r?.bagnumber,idairguide:r?.idairguide,tracking:r?.tracking};i[l].customers[p].bagsNumb[r?.ssg_track_key]=$,i[l].bagsNo+=1}}),n("linkedBagsInfo",i),P(G())});function w(){return"geolocation"in navigator}function x(a){J({latitude:a?.coords?.latitude,longitude:a?.coords?.longitude})}function B(){w()?navigator.geolocation.getCurrentPosition(x):showMessage("Geolocation isn't supported by your browser")}const N=a=>{let i=a?.street.split(",");return i.slice(0,i.length-2).join(",")};return(()=>{var a=U(),i=a.firstChild,r=i.firstChild,l=r.nextSibling,p=l.firstChild,$=i.nextSibling,_=$.nextSibling;return s(p,()=>t?.detail?.name),s(a,o(v,{get when(){return t?.detail?.name},get fallback(){return(()=>{var e=I();return e.firstChild,s(e,o(k,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){var e=H(),d=e.firstChild,b=d.firstChild;return s(e,o(v,{get when(){return t?.detail?.city},get children(){return[(()=>{var c=K();return s(c,()=>t?.detail?.city),c})(),"|"]}}),d),s(e,o(v,{get when(){return t?.detail?.province},get children(){return[(()=>{var c=Y();return s(c,()=>t?.detail?.province),c})(),"|"]}}),d),s(b,()=>y(t?.linkedBagsInfo)?.length),e}}),_),s(_,o(q,{fallback:e=>(()=>{var d=X(),b=d.firstChild,c=b.nextSibling;return c.nextSibling,s(d,()=>e.toString(),c),d})(),get children(){return o(T,{get fallback(){return(()=>{var e=I();return e.firstChild,s(e,o(k,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return o(v,{get when(){return y(t?.linkedBagsInfo)?.length>0},get children(){return o(V,{get each(){return y(t?.linkedBagsInfo)},children:(e,d)=>o(Z,{addressId:e,get item(){return t?.linkedBagsInfo?.[e]},get list(){return t?.linkedBagsInfo}})})}})}})}})),M(e=>F(_,` ${W()?"":"width:94vw;"} margin: 0 auto`,e)),a})()}const ee=async t=>{let n={params:t},u={...Q(j())}[703003];return n={...n,...u},await z(n)},g=t=>t?" "+t:"",te=t=>{let n=t?.consigneeInfo;return g(n?.firstName)+g(n?.middleName)+g(n?.lastName)+g(n?.lastName2)},re=t=>{let n=t?.consigneeInfo,u=g(n?.altPhoneNumber);return g(n?.phoneNumber)+(u?" |"+u:"")};export{ee as LookupBagId,Ce as default,ye as scannedQRs,Ie as setScannedQRs,Ee as setStatus,ke as status};