const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-Cs0_zJbd.js","assets/index-Cy80XFDb.js","assets/index-BTZGS13b.css","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as N,_ as V,u as G,c as A,a as g,h as J,o as K,k as Q,d as l,e as U,i as r,S as m,f as _,s as E,F as X,g as Z,m as ee,n as te,t as u}from"./index-Cy80XFDb.js";import re from"./InputHr-DHKq4h5V.js";import{g as se,t as C,a as $,f as ae,b as ne}from"./Util-DK6KNnW6.js";import x from"./SVG-DqUQoqiz.js";import{l as le}from"./handelImagesServices-DjM_92DM.js";import"./index-Ci0zXM0r.js";var ie=u('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),oe=u('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div><div></div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>'),ce=u('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding-top:50px><div class="_dsplFlx flxWrp spaceAround centerBx"><div></div><div class="_dsplFlx bottombx"><h4> </h4><div class=vertseparator></div><h5>'),de=u('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><div class=" bottombx"><div class="_dsplFlx bottombx spaceAround centerBx"><h5>Estado del envio: </h5><h4></h4></div><h4> '),ue=u('<div class="_dsplFlx flxWrp spaceAround centerBx"style=padding:50px><img alt=sf style=width:320px>'),pe=u("<div> "),ge=u('<div class="icon_status centerBx">'),he=u('<div class="icon_status centerBx trackFade">'),fe=u('<div class="icon_status centerBx ">');const ve=N(()=>V(()=>import("./LoadingColorSpinner-Cs0_zJbd.js"),__vite__mapDeps([0,1,2,3])));function Ce(){const[p,b]=G(),[a,Y]=A();A({lbs:"",price:0});const[z,R]=A({}),[H,T]=g(""),[k,w]=g(!1);g();const[y,M]=g(""),[xe,B]=g(""),[P,F]=g(""),[W,S]=g("");J(()=>{}),K(()=>{}),Q(()=>{p?.id?(S(!1),I(p?.id)):S(!0)});const D=(t,e)=>{M(e),B(t),setTimeout(()=>{B("")},300)},L=t=>{F(t),setTimeout(()=>{F("")},3e3)},I=async t=>{let e=t,n="^[0-9]{4}-[1-9]{4}";const c=new RegExp(n);let i=e.length===9&&c.test(e),s="^Y24[0-9]{6}";const d=new RegExp(s);let v=e.length===9&&d.test(e),h="^[0-9]";const o=new RegExp(h);let j=e.length>6&&e.length<11&&o.test(e);if(i&&e.slice(0,4),i||v||j){let f=await me(e);if(f){if(f?.currentStatus==="YABA_99"&&f?.deliveryProof){let q=await le(f?.deliveryProof);f.deliveryProofBlob=q}Y("tracking",f),w(!0),b({id:e})}}else D("","error"),R({consigneeInfo:{ybestate:"Codigo Incorrecto"}}),L(se());S(!0)};let O=Array.from(Array(8).keys());return l(m,{get when(){return W()},get fallback(){return(()=>{var t=pe();return t.firstChild,r(t,l(ve,{stroke:"rgb(200 25 60 / 1)",size:62}),null),t})()},get children(){return[(()=>{var t=oe(),e=t.firstChild,n=e.firstChild,c=n.nextSibling,i=c.firstChild;return r(n,l(m,{get when(){return P()},get children(){var s=ie(),d=s.firstChild,v=d.nextSibling;return r(d,l(x,{get name(){return C?.[y()]?.icon},size:32,get color(){return C?.[y()]?.svg}})),r(v,()=>z?.consigneeInfo?.ybestate),_(h=>E(s,C?.[y()],h)),s}})),r(e,l(m,{get when(){return!k()},get children(){return l(re,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return H()},placeholder:"Numero de envio ...",colors:"#2b2b2b",handleClick:T,onEnter:I})}}),c),c.$$click=()=>w(!1),r(i,()=>k()?"Rastrear otro numero de envio":"Escriba su numero de envio"),_(s=>E(n,`padding: 15px 0px; margin: 0 auto; display: ${P()?"block":"none"};`,s)),t})(),l(m,{get when(){return k()&&a?.tracking},get children(){return[(()=>{var t=ce(),e=t.firstChild,n=e.firstChild,c=n.nextSibling,i=c.firstChild,s=i.firstChild,d=i.nextSibling,v=d.nextSibling;return r(e,l(X,{each:O,children:h=>$("M023009")?.statusIndex[a?.tracking?.currentStatus]!==0&&h===0?(()=>{var o=ge();return r(o,l(x,{name:"market",size:32,color:"var(--hrm-palette-neutral-variant30)"})),o})():h===$("M023009")?.statusIndex[a?.tracking?.currentStatus]?(()=>{var o=he();return r(o,l(x,{get name(){return $("M023009")?.statusListIcons?.[a?.tracking?.currentStatus]},size:32,color:"var(--background-red-ssg)"})),o})():(()=>{var o=fe();return r(o,l(x,{name:"radio_unchecked",size:16,color:"var(--hrm-palette-neutral-variant30)"})),o})()}),n),r(n,l(x,{name:"map-marker-radius-outline",size:32,get color(){return a?.tracking?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--hrm-palette-neutral-variant30)"}})),r(i,()=>a?.tracking?.consigneeInfo?.ybestate,s),r(v,()=>a?.tracking?.consigneeInfo?.ybcity),_(()=>Z(n,`icon_status centerBx ${a?.tracking?.currentStatus==="YABA_99"?"trackFade":""} `)),t})(),(()=>{var t=de(),e=t.firstChild,n=e.firstChild,c=n.firstChild,i=c.nextSibling,s=n.nextSibling;return s.firstChild,r(i,()=>p?.id),r(s,()=>$("M023009")?.statusObjDesc?.[a?.tracking?.currentStatus],null),_(d=>(d=a?.tracking?.currentStatus==="YABA_99"?"var(--hrm-palette-tertiary60)":"var(--background-red-ssg)")!=null?s.style.setProperty("color",d):s.style.removeProperty("color")),t})(),l(m,{get when(){return a?.tracking?.deliveryProofBlob},get children(){var t=ue(),e=t.firstChild;return _(()=>ee(e,"src",a?.tracking?.deliveryProofBlob)),t}})]}})]}})}const me=async p=>await _e({query:"tr504009",params:{id:p}}),_e=async p=>te()?await ae(p):(await ne(p))?.data;U(["click"]);export{Ce as default};
