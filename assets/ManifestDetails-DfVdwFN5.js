const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-Cd4UB6Pq.js","assets/index-ZiXU7VfC.js","assets/index-DUq9wHKT.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-CeGfy-4p.js","assets/debounces-DtD41Ggw.js","assets/SVG-CNr5lwjI.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/FlexSpace-BMkunCoW.js","assets/InputHr-9-iZpbYO.js","assets/InputHr-M3rJ9grQ.css"])))=>i.map(i=>d[i]);
import{l as B,_ as O,u as z,c as j,a as V,o as Q,h as T,k as H,b as G,i,d as n,f as F,e as J,t as h,z as A,S as g,p as K,F as X,E as U,s as Y,g as P}from"./index-ZiXU7VfC.js";import{f as C,c as Z,a as $,n as ee,q as I,O as te}from"./Util-BpydYJG8.js";import{u as re}from"./debounces-DtD41Ggw.js";import{i as b}from"./globalSignal-BYlE7jq7.js";import ie from"./ButonHrm-BYHKsorv.js";import"./index-Ci0zXM0r.js";/* empty css                 */import"./SVG-CNr5lwjI.js";var R=h("<h5>"),ne=h('<div class=bottombx style=padding:16px><div class="_dsplFlx flxWrp spaceAround centerBx"><h4></h4>|<h4>'),se=h("<div><div>"),q=h("<div> "),ae=h("<div> <!>."),le=h('<div class="bottombx flxWrp spaceAround centerBx"><h4></h4><div class="icon_status centerBx">'),ce=h('<div class="bottombx flxWrp spaceAround centerBx"><h4>'),oe=h('<div class="icon_status centerBx">'),de=h("<h5 class=rpto>"),me=h('<div><div class=" flxWrp centerBx "style=" margin:0 auto;;padding:8px 9px;"><div class="bag_number centerBx"><div class="icon_status centerBx"></div><h5></h5></div><div class=bottombx><div class="_dsplFlx flxWrp spaceAround centerBx"><h5></h5></div></div></div><div><p class=" textleft "></p><div class=vertseparator>');const D=B(()=>O(()=>import("./LoadingColorSpinner-Cd4UB6Pq.js"),__vite__mapDeps([0,1,2,3])));B(()=>O(()=>import("./DropDwnSearch-CeGfy-4p.js"),__vite__mapDeps([4,1,2,5,6,7,8])));const L=B(()=>O(()=>import("./FlexSpace-BMkunCoW.js"),__vite__mapDeps([9,1,2])));B(()=>O(()=>import("./InputHr-9-iZpbYO.js"),__vite__mapDeps([10,1,2,11])));const W=B(()=>O(()=>import("./SVG-CNr5lwjI.js"),__vite__mapDeps([6,1,2,7])));function Se(){const[r,d]=z(),[t,l]=j({search:""}),[m,a]=j(),[_,v]=j(),[y,S]=j(),[x,E]=V("");re(E,400),Q(()=>{}),T(()=>{});const w=async()=>{if(r?.mId){let u={id:r?.mId},o=await ge(u);l("province",o?.province),l("city",o?.city),l("manifestObj",void 0),v("linked",void 0),l("manifestObj",o),v("linked",{...o?.linkedBags})}};H(async()=>{let u=[];[33,46,40,41,42,50,52,54,56].map(s=>{let c=s,f=$("M023009")?.whStList?.[c];A?.roles?.[f?.id]?.isActive&&u.push(f)}),S("list",u);let e=[];$("M023009")?.provincias.map(s=>{let c=s.label;A?.roles?.[c]?.isActive&&e.push(s)}),S("prov",e),w()}),G(x,async u=>{let o=t?.manifest?.id,e=t?.province,s=e&&t?.city,c=[];if(o){const f=await fe(t.search,o,e,s);a("bags",f),te(f).map(M=>{let k=f[M],N=k.currentStatus;A?.roles?.[N]?.isActive&&N.split("_")?.[1]>=33&&c.push(k)})}return c});const p=async()=>{await _e({ssg_manifest_key:r?.mId},{linkedBags:t?.manifestObj?.linkedBags}),w()};return(()=>{var u=se(),o=u.firstChild;return i(u,n(g,{get when(){return t?.manifestObj?.province},get fallback(){return(()=>{var e=q();return e.firstChild,i(e,n(D,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){var e=ne(),s=e.firstChild,c=s.firstChild,f=c.nextSibling,M=f.nextSibling;return i(c,()=>t?.manifestObj?.name),i(s,n(g,{get when(){return t?.manifestObj?.city},get children(){return["|",(()=>{var k=R();return i(k,()=>t?.manifestObj?.city),k})()]}}),f),i(M,()=>t?.manifestObj?.province),i(s,n(g,{get when(){return!ee(t?.manifestObj?.linkedBags,_?.linked)},get children(){return n(ie,{color:"#c8193c",label:"updManifest",handleClick:p})}}),null),e}}),o),i(o,n(U,{fallback:e=>(()=>{var s=ae(),c=s.firstChild,f=c.nextSibling;return f.nextSibling,i(s,()=>e.toString(),f),s})(),get children(){return n(K,{get fallback(){return(()=>{var e=q();return e.firstChild,i(e,n(D,{stroke:"rgb(200 25 60 / 1)",size:62}),null),e})()},get children(){return n(g,{get when(){return t?.manifestObj?.linkedBagsInfo?.length>0},get children(){return n(X,{get each(){return t?.manifestObj?.linkedBagsInfo},children:e=>n(ue,{item:e,get city(){return t?.manifestObj?.city},get manifestObj(){return t?.manifestObj},get isAlready(){return t?.manifestObj?.linkedBags?.[e.ssg_track_key]},setFormsM:l})})}})}})}})),F(e=>Y(o,` ${b(),"width:86vw;"} margin: 0 auto;`,e)),u})()}const ue=r=>{const d=()=>{let a=r?.item?.street.split(",");return a.slice(0,a.length-2).join(",")},t=a=>a?" "+a:"",l=()=>{let a=r?.item?.consigneeInfo;return t(a?.firstName)+t(a?.middleName)+t(a?.lastName)+t(a?.lastName2)},m=a=>{r?.setFormsM("manifestObj","linkedBags",r?.item?.ssg_track_key,void 0)};return n(g,{get when(){return r?.manifestObj?.linkedBags[r?.item?.ssg_track_key]},get children(){var a=me(),_=a.firstChild,v=_.firstChild,y=v.firstChild,S=y.nextSibling,x=v.nextSibling,E=x.firstChild,w=E.firstChild,p=_.nextSibling,u=p.firstChild,o=u.nextSibling;return i(a,n(g,{get when(){return b()},get children(){var e=le(),s=e.firstChild,c=s.nextSibling;return i(s,l),i(e,n(L,{}),c),c.$$click=m,i(c,n(W,{name:"outline_delete",size:28,color:"var(--background-red-ssg)"})),e}}),_),i(y,n(W,{name:"open_package_file_outline",size:20})),i(S,()=>r?.item?.bagnumber),i(_,n(g,{get when(){return!b()},get children(){var e=ce(),s=e.firstChild;return i(s,l),e}}),x),i(_,n(L,{}),x),i(w,()=>r?.item?.idairguide),i(_,n(g,{get when(){return!b()},get children(){var e=oe();return e.$$click=m,i(e,n(W,{name:"outline_delete",size:24,color:"var(--background-red-ssg)"})),e}}),null),i(u,d),i(p,n(L,{}),o),i(p,n(g,{get when(){return r?.item?.consigneeInfo?.ybreparto},get children(){return[(()=>{var e=de();return i(e,()=>r?.item?.consigneeInfo?.ybreparto),e})(),"|"]}}),o),i(p,n(g,{get when(){return!r?.city&&r?.item?.city},get children(){var e=R();return i(e,()=>r?.item?.city),e}}),null),F(e=>{var s=`client_item_box gWXAaj jlytmu manifest ${b()?"isMobile":""}`,c=` ${b(),"centerBx"} bottombx flxWrp  centerBx`;return s!==e.e&&P(a,e.e=s),c!==e.t&&P(p,e.t=c),e},{e:void 0,t:void 0}),a}})},fe=async(r,d,t,l)=>{let m={params:{idairguide:d}};r&&r.split(" ").map((v,y)=>{v&&(m.params[":search"+y]=v.trim())}),t&&(m.params[":estate"]=t),l&&(m.params[":city"]=l);let a={...$(I())}[802001];m={...m,...a};const _=await C(m);return _?.error?{}:_},_e=async(r,d)=>{let t={params:r,data2update:d},l={...$(I())}[709002];return t={...t,...l},await C(t)},ge=async r=>{let d={params:r},t={...$(I())}[703003];return d={...d,...t},await C(d)},we=async r=>{let d=[];r.map(t=>{let l={params:{id:t?.ssg_track_key,idairguide:t?.idairguide}},m={...$(I())}[802002];l={...l,...m},d.push(l)}),Z(d,he)},he=async r=>{const t=await C(r);if(t)return t};J(["click"]);export{Se as default,he as fetchCSVInve,we as loadManifest,_e as updLinkedBags};
