const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Item2Delivery-BP893t29.js","assets/index-BQDq9BVx.js","assets/index-DUq9wHKT.css","assets/Util-CG-K4aC-.js","assets/index-Ci0zXM0r.js","assets/ContainerElasticView-LzOd6fDI.css","assets/CheckBoxSlide-Dfsc0QvJ.js","assets/CheckBoxSlide-uVD3DHDO.css"])))=>i.map(i=>d[i]);
import{l as L,_ as P,a as n,c as H,h as N,o as X,k as J,i as t,d as r,f as I,e as K,t as c,S as m,p as U,F as Y,g as Z,E as ee,s as te}from"./index-BQDq9BVx.js";import re from"./InputHr-DR4150Hf.js";import{s as se,a as D,g as ne,f as le,q as ae}from"./Util-CG-K4aC-.js";import ie from"./SVG-CYbWHDJe.js";import{i as F}from"./globalSignal-C0bDyEQ1.js";import oe from"./FlexSpace-Ds1B62AB.js";import"./index-Ci0zXM0r.js";var ce=c('<div style="padding:15px ">'),de=c('<div><div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div></div></div><div></div><div class=scrollH>'),pe=c('<div class="_dsplFlx bottombx spaceAround"><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>'),ue=c("<div> <!>."),ge=c("<div> "),he=c('<div class=itm0hist><div><div class="centerBx bottombx"><div class="icon_status centerBx"></div><h5 class=" centerBx "></h5><p class=" title_scan centerBx "></p></div><div class="centerBx bottombx"><h5></h5><div class=vertseparator></div><h4>');const _e=L(()=>P(()=>import("./Item2Delivery-BP893t29.js"),__vite__mapDeps([0,1,2,3,4,5])));L(()=>P(()=>import("./CheckBoxSlide-Dfsc0QvJ.js"),__vite__mapDeps([6,1,2,7])));const[R,Ae]=n([]);function Be(){const[p,d]=H(),[v,x]=H({}),[T,g]=n("");n("23008");const[M,fe]=n(!1),[h,_]=n(!1),[me,j]=n(""),[ve,$]=n(""),[xe,S]=n(""),[q,y]=n("");N(()=>{}),X(()=>{}),J(()=>{});const O=(l,a)=>{j(a),$(l),setTimeout(()=>{$("")},300)},Q=l=>{S(l),setTimeout(()=>{S("")},3e3)},z=async l=>{let a=l,b="^[0-9]";if(new RegExp(b)?.test(a)){let e=a,s=await be(e);s&&(y(e),d("tracking",s),_(!0),g(""))}else O("","error"),y(""),x({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),Q(ne())},V=()=>{_(!1),g("")};return Array.from(Array(8).keys()),(()=>{var l=de(),a=l.firstChild,b=a.firstChild,u=a.nextSibling,C=u.nextSibling;return t(b,r(m,{get when(){return!h()},get fallback(){return(()=>{var e=pe(),s=e.firstChild,i=s.firstChild;return s.$$click=()=>_(!1),t(i,()=>h()?"Buscar Hbl":"Escriba el HBL"),e})()},get children(){var e=ce();return t(e,r(re,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return T()},placeholder:"HBL",colors:"#2b2b2b",handleClick:g,onEnter:z})),e}})),t(u,r(m,{get when(){return h()&&p?.tracking},get children(){return r(_e,{get item(){return p?.tracking},newSear:V,get showQR(){return M()},get currentHbl(){return q()}})}})),t(C,r(ee,{fallback:e=>(()=>{var s=ue(),i=s.firstChild,o=i.nextSibling;return o.nextSibling,t(s,()=>e.toString(),o),s})(),get children(){return r(U,{get fallback(){return(()=>{var e=ge();return e.firstChild,t(e,r(LoadingColorSpinner,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return r(m,{get when(){return R()},get children(){return r(Y,{get each(){return se(R(),"timeStamp",0)},children:(e,s)=>(()=>{var i=he(),o=i.firstChild,k=o.firstChild,w=k.firstChild,f=w.nextSibling,E=f.nextSibling,A=k.nextSibling,B=A.firstChild,W=B.nextSibling,G=W.nextSibling;return t(w,r(ie,{get name(){return D("M023009")?.statusListIcons?.[e?.currentStatus]},size:32})),f.style.setProperty("padding","8px"),t(f,()=>e?.idairnumber),E.style.setProperty("padding","8px"),t(E,()=>e?.tracking),t(o,r(oe,{}),A),t(B,()=>e?.city),t(G,()=>e?.estate),I(()=>Z(o,`client_item_box gWXAaj jlytmu manifest  ${F()?"isMobile":"centerBx"}`)),i})()})}})}})}})),I(e=>te(u,` ${F()?"":"width:94vw;"} margin: 0 auto;`,e)),l})()}const be=async p=>{let d={params:{id:p}},v={...D(ae())}[803001];return d={...d,...v},await le(d)};K(["click"]);export{Be as default,Ae as setTasks,R as tasks};