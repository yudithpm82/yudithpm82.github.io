const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-BIifIYsO.js","assets/index-Cy80XFDb.js","assets/index-BTZGS13b.css","assets/SVG-DqUQoqiz.js","assets/index-Ci0zXM0r.js","assets/ShowQR-4x6lNQW0.js","assets/globalSignal-D_sQRpcj.js","assets/ShowQRPrintLabel-B_4GvRlD.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-B5eygcZz.js","assets/Util-DK6KNnW6.js","assets/Toast-CdLFHZaV.js","assets/Toast-DLpFKn-Q.css","assets/ContainerElasticView-BfVk8PPv.js","assets/ContainerElasticView-LzOd6fDI.css"])))=>i.map(i=>d[i]);
import{l as S,_ as C,c as O,a as D,u as P,h as z,d as r,e as L,i as e,S as h,f as x,g as f,E as B,p as E,F as I,s as M,t as s}from"./index-Cy80XFDb.js";import{O as p}from"./Util-DK6KNnW6.js";import{u as R}from"./debounces-D_mnU7TG.js";import{i as $}from"./globalSignal-D_sQRpcj.js";import{setStop2Deliver as V}from"./DeliveryView-DzK93SqH.js";import{SepOnMobile as y}from"./DeliveryScanView-DpfgH3Rz.js";import{A as F}from"./components-DBNaP_Kb.js";import"./index-Ci0zXM0r.js";import"./DialogHRM-b_eORSnC.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./Toast-CdLFHZaV.js";var N=s('<div class=" flxWrp centerBx "style=" margin:0 auto;;padding:8px 9px;"><div class="icon_status centerBx"></div><div class=bagsNo>'),T=s('<p class=" textleft ">;'),W=s("<h5 class=rpto>"),j=s("<h5>"),G=s("<div><div class=vertseparator></div><div class=vertseparator></div><h4>"),K=s("<div>"),X=s("<div><div style=padding:16px>"),A=s("<div> <!>."),k=s("<div> "),q=s('<div class="_dsplFlx flxWrp spaceAround "style=" margin:0 auto;;padding:8px 9px;">'),H=s("<div class=bag_number style=max-width:120px;margin:8px;><h5>"),J=s('<div><div class=separator></div><div><div class=" centerBx"><div class="icon_status centerBx"></div><h5></h5></div><div class=" centerBx"><div class="icon_status centerBx"></div><h4></h4></div><div class=" centerBx"><div class="icon_status centerBx"></div><h5></h5></div></div><div class="_dsplFlx bottombx flxWrp spaceAround ">');const Q=S(()=>C(()=>import("./FlexSpace-BIifIYsO.js"),__vite__mapDeps([0,1,2]))),b=S(()=>C(()=>import("./SVG-DqUQoqiz.js"),__vite__mapDeps([3,1,2,4])));S(()=>C(()=>import("./ShowQR-4x6lNQW0.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));const U=S(()=>C(()=>import("./ContainerElasticView-BfVk8PPv.js"),__vite__mapDeps([15,1,2,3,4,16])));function ue(i){O({search:"",status:"AERO_33"});const[g,d]=D("");R(d,400);const[a,_]=P();z(()=>{console.log(i?.item)});const c=()=>{let m={...i?.item};m.addressId=i?.addressId,V("stopD",m)};return r(h,{get when(){return i?.item?.estate},get children(){var m=X(),u=m.firstChild;return u.$$click=c,e(u,r(F,{get href(){return`/delivery-scan?dId=${a?.dId}`},onClick:c,get children(){return[(()=>{var t=N(),n=t.firstChild,l=n.nextSibling;return e(n,r(b,{name:"open_package_file_outline",size:32})),e(l,()=>i?.item?.bagsNo),t})(),(()=>{var t=T(),n=t.firstChild;return e(t,()=>i?.addressId,n),t})(),r(Q,{}),(()=>{var t=G(),n=t.firstChild,l=n.nextSibling,v=l.nextSibling;return e(t,r(h,{get when(){return i?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var o=W();return e(o,()=>i?.item?.consigneeInfo?.ybreparto),o})(),"|"]}}),n),e(t,r(h,{get when(){return i?.item?.city},get children(){return[(()=>{var o=j();return e(o,()=>i?.item?.city),o})(),"|"]}}),l),e(v,()=>i?.item?.estate),x(()=>f(t,` ${$(),"centerBx"} bottombx`)),t})()]}})),e(m,r(U,{get children(){var t=K();return e(t,r(B,{fallback:n=>(()=>{var l=A(),v=l.firstChild,o=v.nextSibling;return o.nextSibling,e(l,()=>n.toString(),o),l})(),get children(){return r(E,{get fallback(){return(()=>{var n=k();return n.firstChild,e(n,r(LoadingColorSpinner,{stroke:"rgb(200 25 60 / 1)",size:62}),null),n})()},get children(){return r(h,{get when(){return p(i?.item?.customers)?.length>0},get children(){return r(I,{get each(){return p(i?.item?.customers)},children:(n,l)=>r(Z,{get item(){return i?.item?.customers?.[n]}})})}})}})}})),x(n=>M(t,` ${$()?"":"width:94vw;"} margin: 0 auto; ; padding: 18px 29px;`,n)),t}}),null),x(t=>{var n=`client_item_box gWXAaj jlytmu manifest ${$()?"isMobile":"--dsd"}`,l=` ${$()?"":"centerBx"}  topbx `;return n!==t.e&&f(m,t.e=n),l!==t.t&&f(u,t.t=l),t},{e:void 0,t:void 0}),m}})}const Y=i=>(()=>{var g=q();return e(g,r(B,{fallback:d=>(()=>{var a=A(),_=a.firstChild,c=_.nextSibling;return c.nextSibling,e(a,()=>d.toString(),c),a})(),get children(){return r(E,{get fallback(){return(()=>{var d=k();return d.firstChild,e(d,r(LoadingColorSpinner,{stroke:"rgb(200 25 60 / 1)",size:62}),null),d})()},get children(){return r(h,{get when(){return p(i?.list)?.length>0},get children(){return r(I,{get each(){return p(i?.list)},children:(d,a)=>(()=>{var _=H(),c=_.firstChild;return e(c,()=>i?.list?.[d]?.bagnumber),_})()})}})}})}})),g})(),Z=i=>(()=>{var g=J(),d=g.firstChild,a=d.nextSibling,_=a.firstChild,c=_.firstChild,m=c.nextSibling,u=_.nextSibling,t=u.firstChild,n=t.nextSibling,l=u.nextSibling,v=l.firstChild,o=v.nextSibling,w=a.nextSibling;return e(c,r(b,{name:"account",size:24})),e(m,()=>i?.item?.name),e(a,r(y,{}),u),e(t,r(b,{name:"cellphone",size:24})),e(n,()=>i?.item?.phoneNumber),e(a,r(y,{}),l),e(v,r(b,{name:"credit_card",size:24})),e(o,()=>i?.item?.cidentity),e(w,r(Y,{get list(){return i?.item?.bagsNumb}})),x(()=>f(a,` ${$()?"":"centerBx"} bottombx`)),g})();L(["click"]);export{ue as default};
