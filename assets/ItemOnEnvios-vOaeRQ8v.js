const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-Ds1B62AB.js","assets/index-BQDq9BVx.js","assets/index-DUq9wHKT.css","assets/SVG-CYbWHDJe.js","assets/index-Ci0zXM0r.js","assets/ShowQR-bsWE7lBQ.js","assets/globalSignal-C0bDyEQ1.js","assets/ShowQRPrintLabel-BXmSCIKF.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-CpTp0E3r.js","assets/Util-CG-K4aC-.js","assets/Toast-DBYC_dpW.js","assets/Toast-DLpFKn-Q.css"])))=>i.map(i=>d[i]);
import{l as o,_,h as f,d as i,e as p,i as l,S as m,j as $,f as b,g as N,t as s}from"./index-BQDq9BVx.js";import"./index-Ci0zXM0r.js";import"./DialogHRM-DrXAbmTT.js";import"./ContainerElasticView-DqeFgcU1.js";import{i as x}from"./globalSignal-C0bDyEQ1.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./Toast-DBYC_dpW.js";import{A as E}from"./components-AgcWFYzJ.js";import"./Util-CG-K4aC-.js";import"./SVG-CYbWHDJe.js";/* empty css                             */var y=s("<div class=bottombx><h5>"),k=s('<div class=" tr_bar_70 _dsplFlx">'),A=s('<h4 class="tr_bar_20 textleft">'),I=s('<div class="icon_status centerBx">'),w=s('<div><div class="_dsplFlx topbx centerBx bottombx">');const C=o(()=>_(()=>import("./FlexSpace-Ds1B62AB.js"),__vite__mapDeps([0,1,2]))),P=o(()=>_(()=>import("./SVG-CYbWHDJe.js"),__vite__mapDeps([3,1,2,4])));o(()=>_(()=>import("./ShowQR-bsWE7lBQ.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));function W(r){const n=e=>e?" "+e:"",u=()=>{let e=r?.item;return n(e?.firstName)+n(e?.middleName)+n(e?.lastName)+n(e?.lastName2)},c=()=>{let e=r?.item,a=n(e?.altPhoneNumber);return n(e?.phoneNumber)+(a?" |"+a:"")},g=async()=>{r?.item?.ssg_track_key,r?.item?.idairguide},h=async()=>{};return f(()=>{}),i(m,{get when(){return r?.item?.firstName},get children(){var e=w(),a=e.firstChild;return l(a,i(m,{get when(){return r?.item?.firstName},get children(){return[(()=>{var t=k();return l(t,i(m,{get when(){return r?.item?.firstName},get children(){return i(E,{get href(){return`/detail?dId=${r?.item?.clientNotaryId}`},onClick:h,get children(){var d=y(),v=d.firstChild;return l(v,u),d}})}})),t})(),i(m,{get when(){return c()},get children(){var t=A();return l(t,c),t}})]}}),null),l(a,i(C,{}),null),l(a,i(m,{get when(){return $?.profile?.isAdmin},get children(){var t=I();return t.$$click=g,l(t,i(P,{name:"outline_delete",size:24})),t}}),null),b(()=>N(e,`client_item_box gWXAaj jlytmu ${x()?"isMobile":""}`)),e}})}p(["click"]);export{W as default};