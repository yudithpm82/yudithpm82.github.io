const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/FlexSpace-Ds1B62AB.js","assets/index-BQDq9BVx.js","assets/index-DUq9wHKT.css","assets/SVG-CYbWHDJe.js","assets/index-Ci0zXM0r.js","assets/ShowQR-bsWE7lBQ.js","assets/globalSignal-C0bDyEQ1.js","assets/ShowQRPrintLabel-BXmSCIKF.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-CpTp0E3r.js","assets/Util-CG-K4aC-.js","assets/Toast-DBYC_dpW.js","assets/Toast-DLpFKn-Q.css","assets/DropDwnSearch-CpHYP1-L.js","assets/debounces-D-57AQO1.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as T,_ as N,a as M,c as ce,k as de,b as ue,i as t,d as n,f,e as oe,t as _,s as G,S as o,z,F as J,m as K,g as Y,j as me}from"./index-BQDq9BVx.js";import{t as k,a as Q,g as I,f as ge,q as _e}from"./Util-CG-K4aC-.js";import{OpenModal as he}from"./DialogHRM-DrXAbmTT.js";import{i as x,g as H}from"./globalSignal-C0bDyEQ1.js";import{g as ve}from"./ShowQRPrintLabel-BXmSCIKF.js";import{setTasks as be,tasks as $e}from"./FindHBL-DLNxAfxQ.js";import"./index-Ci0zXM0r.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-CpTp0E3r.js";import"./Toast-DBYC_dpW.js";import"./InputHr-DR4150Hf.js";import"./SVG-CYbWHDJe.js";import"./FlexSpace-Ds1B62AB.js";var ee=_('<div class="errorBx _dsplFlx"><div class="icon_status centerBx"></div><p class=" centerBx">'),te=_('<div class="centerBx bottombx"><h5>'),ie=_("<div class=bag_number><h5>"),re=_("<div class=bottombx><h5>"),ne=_("<div>"),le=_('<div class="centerBx flxWrp spaceAround "><img ref width=200 alt=qr>'),fe=_('<div class="client_item_box WXAaj2 jlytmu isMobile"><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class=" centerBx"><div class="icon_status centerBx"></div></div><div class=" centerBx"><div></div></div><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4></h4></div><div class=bottombx bottombx><p class=" textleft fullName_consigne"></p></div><div class=separator>'),se=_('<div class=" resumeStatus icon_status centerBx"><div class=bottombx bottombx><h4>'),xe=_('<div class=" tr_bar_20 _dsplFlx"><div class="icon_status centerBx">'),ye=_('<p class="tr_bar_30 textleft fullName_consigne">'),Se=_("<div style=margin-right:4vw>"),we=_("<div><div>"),ke=_('<div><div class="_dsplFlx flxWrp spaceAround centerBx"></div><div class="_dsplFlx topbx centerBx"><div class="_dsplFlx bottombx"><h5></h5><div class=vertseparator></div><h4>');const P=T(()=>N(()=>import("./FlexSpace-Ds1B62AB.js"),__vite__mapDeps([0,1,2]))),C=T(()=>N(()=>import("./SVG-CYbWHDJe.js"),__vite__mapDeps([3,1,2,4]))),Ce=T(()=>N(()=>import("./ShowQR-bsWE7lBQ.js"),__vite__mapDeps([5,1,2,6,7,8,4,9,10,11,12,13,14])));T(()=>N(()=>import("./DropDwnSearch-CpHYP1-L.js"),__vite__mapDeps([15,1,2,16,3,4,17])));function Oe(e){M("");const[A,v]=ce({}),[b,q]=M(""),[Pe,V]=M(""),[B,W]=M(""),E=i=>i?" "+i:"",j=()=>{let i=e?.item?.consigneeInfo;return E(i?.firstName)+E(i?.middleName)+E(i?.lastName)+E(i?.lastName2)},R=i=>{let l="";if(i)l=i;else if(e?.item?.hblS){let h=e?.item?.hblS;l=`${e?.item?.idairguide}/${e?.item?.cidentity}/${h}`}let a={};a.id=I(),a.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},a.content=n(Ce,{val:l,get item(){return e?.item}}),he(a)},y=i=>{let l=i,a="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const h=new RegExp(a);return l.length===13&&h.test(l)&&(l=l.slice(3,12)),l},F=(i,l)=>{q(l),V(i),setTimeout(()=>{V("")},300)},D=i=>{W(i),setTimeout(()=>{W("")},3e3)},O=async i=>{let l={timeStamp:new Date().getTime(),latitude:H?.latitude,longitude:H?.longitude,statusId:i,userId:me?.profile?.userId};if(e?.item?.idairguide){let a=e?.item?.statusHistory||[];a.push(l);let h={idairguide:e?.item?.idairguide,ssg_track_key:e?.item?.ssg_track_key},g=e?.item?.estate||e?.item?.consigneeInfo?.ybestate,S=e?.item?.city||e?.item?.consigneeInfo?.ybcity,w={idairnumber:e?.item?.idairnumber,estate:g,city:S,tracking:e?.currentHbl,currentStatus:i,timeStamp:new Date().getTime()};if(v(""),v(e?.item),D(I()),F("","success"),!z?.roles?.[g])F("","warning"),v({consigneeInfo:{ybestate:"Zona incorrecta"}}),D(I());else if(e?.item?.currentStatus!==l.statusId){let r={statusHistory:a,currentStatus:l.statusId};await Ie(h,r),be([...$e(),w]),e?.newSear()}else F("","warning"),v({consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.item?.consigneeInfo?.ybestate}}),D(I())}else F("","error"),v({consigneeInfo:{ybestate:"Error con manifiesto"}}),D(I())};de(()=>{});const p=()=>H?.list?.filter(i=>i.id),[U,{refetch:Ae}]=ue(e?.item?.tracking,async()=>{let i=y(e?.item?.tracking);return await ve(i)});return x()?(()=>{var i=fe(),l=i.firstChild,a=l.nextSibling,h=a.firstChild,g=a.nextSibling,S=g.firstChild,w=g.nextSibling,r=w.firstChild,d=r.nextSibling,c=d.nextSibling,u=w.nextSibling,L=u.firstChild;return u.nextSibling,l.style.setProperty("padding","16px"),t(l,n(o,{get when(){return B()},get children(){var s=ee(),m=s.firstChild,X=m.nextSibling;return t(m,n(C,{get name(){return k?.[b()]?.icon},size:32,get color(){return k?.[b()]?.svg}})),t(X,()=>A?.consigneeInfo?.ybestate),f($=>G(s,k?.[b()],$)),s}})),t(h,n(C,{get name(){return Q("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),t(a,n(o,{get when(){return e?.item?.idairnumber},get children(){var s=te(),m=s.firstChild;return t(m,()=>e?.item?.idairnumber),s}}),null),t(g,n(P,{}),S),t(S,n(o,{get when(){return e?.item?.bagnumber},get children(){var s=ie(),m=s.firstChild;return s.$$click=()=>R(null),t(m,()=>e?.item?.bagnumber),s}})),t(g,n(P,{}),null),t(g,n(o,{get when(){return e?.item?.tracking},get children(){var s=re(),m=s.firstChild;return s.$$click=()=>R(y(e?.item?.tracking)),t(m,()=>y(e?.item?.tracking)),s}}),null),t(g,n(P,{}),null),t(r,()=>e?.item?.consigneeInfo?.ybcity),t(c,()=>e?.item?.consigneeInfo?.ybestate),t(L,j),t(i,n(o,{get when(){return!e?.showQR&&z?.roles?.HBLUPD?.isActive},get children(){var s=ne();return t(s,n(J,{get each(){return p()},children:(m,X)=>(()=>{var $=se(),Z=$.firstChild,ae=Z.firstChild;return $.$$click=Be=>O(m.id),$.style.setProperty("padding","9px"),t($,n(C,{get name(){return m.icon},size:24}),Z),t(ae,()=>m.label),$})()})),s}}),null),t(i,n(o,{get when(){return e?.showQR},get children(){var s=le(),m=s.firstChild;return s.style.setProperty("padding","16px"),f(()=>K(m,"src",U())),s}}),null),f(s=>(s=B()?"block":"none")!=null?l.style.setProperty("display",s):l.style.removeProperty("display")),i})():n(o,{get when(){return e?.item?.tracking},get children(){var i=ke(),l=i.firstChild,a=l.nextSibling,h=a.firstChild,g=h.firstChild,S=g.nextSibling,w=S.nextSibling;return l.style.setProperty("padding","16px"),t(l,n(o,{get when(){return B()},get children(){var r=ee(),d=r.firstChild,c=d.nextSibling;return t(d,n(C,{get name(){return k?.[b()]?.icon},size:32,get color(){return k?.[b()]?.svg}})),t(c,()=>A?.consigneeInfo?.ybestate),f(u=>G(r,k?.[b()],u)),r}})),t(a,n(o,{get when(){return e?.item?.tracking},get children(){return[(()=>{var r=xe(),d=r.firstChild;return t(d,n(C,{get name(){return Q("M023009")?.statusListIcons?.[e?.item?.currentStatus]},size:32})),t(r,n(o,{get when(){return!x()&&e?.item?.idairnumber},get children(){var c=te(),u=c.firstChild;return t(u,()=>e?.item?.idairnumber),c}}),null),r})(),n(o,{get when(){return!x()},get children(){return[(()=>{var r=ye();return t(r,j),r})(),Se()]}})]}}),h),t(a,n(P,{}),h),t(g,()=>e?.item?.consigneeInfo?.ybcity),t(w,()=>e?.item?.consigneeInfo?.ybestate),t(a,n(P,{}),null),t(a,n(o,{get when(){return!x()&&e?.item?.tracking},get children(){var r=we(),d=r.firstChild;return t(d,n(o,{get when(){return e?.item?.bagnumber},get children(){var c=ie(),u=c.firstChild;return c.$$click=()=>R(null),t(u,()=>y(e?.item?.bagnumber)),c}})),t(r,n(o,{get when(){return e?.item?.tracking},get children(){var c=re(),u=c.firstChild;return c.$$click=()=>R(y(e?.item?.tracking)),t(u,()=>y(e?.item?.tracking)),c}}),null),r}}),null),t(i,n(o,{get when(){return!e?.showQR&&z?.roles?.HBLUPD?.isActive},get children(){var r=ne();return t(r,n(J,{get each(){return p()},children:(d,c)=>(()=>{var u=se(),L=u.firstChild,s=L.firstChild;return u.$$click=m=>O(d.id),u.style.setProperty("padding","9px"),t(u,n(C,{get name(){return d.icon},size:24}),L),t(s,()=>x()?d.label:d.tag),u})()})),f(()=>Y(r,x()?"":" bottombx flxWrp spaceAround centerBx")),r}}),null),t(i,n(o,{get when(){return e?.showQR},get children(){var r=le(),d=r.firstChild;return r.style.setProperty("padding","16px"),f(()=>K(d,"src",U())),r}}),null),f(r=>{var d=`client_item_box gWXAaj jlytmu ${x()?"isMobile":""}`,c=B()?"block":"none";return d!==r.e&&Y(i,r.e=d),c!==r.t&&((r.t=c)!=null?l.style.setProperty("display",c):l.style.removeProperty("display")),r},{e:void 0,t:void 0}),i}})}const Ie=async(e,A)=>{let v={params:e,data2update:A},b={...Q(_e())}[809004];return v={...v,...b},await ge(v)};oe(["click"]);export{Oe as default};