const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-Cs0_zJbd.js","assets/index-Cy80XFDb.js","assets/index-BTZGS13b.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-Df1YX7aL.js","assets/debounces-D_mnU7TG.js","assets/SVG-DqUQoqiz.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/InputHr-DHKq4h5V.js","assets/InputHr-M3rJ9grQ.css","assets/ItemOnManifestList-DB0ifk3J.js","assets/Util-DK6KNnW6.js","assets/DialogHRM-b_eORSnC.js","assets/DialogHRM-V9_lZntj.css","assets/globalSignal-D_sQRpcj.js","assets/PDFButton-B_0lS8EG.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-B5eygcZz.js"])))=>i.map(i=>d[i]);
import{l as D,_ as E,c as z,a as _e,u as be,C as me,o as pe,h as he,k as ve,b as ye,i as o,d as g,f as de,e as xe,t as O,z as ee,S as Y,D as ke,p as we,F as Se,E as $e,s as Ce}from"./index-Cy80XFDb.js";import{f as T,O as C,c as Me,a as w,g as ge,l as Oe,q as F}from"./Util-DK6KNnW6.js";import{u as Ae}from"./debounces-D_mnU7TG.js";import{i as te}from"./globalSignal-D_sQRpcj.js";import{P as Le,r as $}from"./PDFButton-B_0lS8EG.js";import{f as Be}from"./fontkit.es-BKe7DAJ7.js";import{i as Pe,t as v,b as ze}from"./InitPrintServices-B5eygcZz.js";import"./index-Ci0zXM0r.js";const De=(a,l,e)=>{const i=l.widthOfTextAtSize(a,40),n=l.widthOfTextAtSize(a,10);return Math.floor(e/((i-n)/30))},Ee=async(a,l,e)=>{const i=await Le.create();i.registerFontkit(Be);const n=await Pe(i);let b=265,m=30,p=Math.ceil(a.length/m);Array.from(Array(p).keys()).map(y=>{let G=a.slice(y*m,(y+1)*m);const h=i.addPage(),{height:A}=h.getSize();let I=A-74;G.map((_,q)=>{let c=I;q%2&&h?.drawRectangle({x:10,y:c-15,width:580,height:24,color:$(.7,.7,.7)});let H=De(v(_?.state),n.roboto_bold,b),K=0;H>42&&(H=42,c=c-6);let R=_?.bagnumber;const U=n.Lexend_700.widthOfTextAtSize(v(R),5);h.drawText(v(R),{x:575-U,y:c-3,size:5,font:n.Lexend_700,color:$(0,0,0)});let j=_?.consigneeInfo?.ybcity+" | "+_?.consigneeInfo?.ybestate;const J=n.Lexend_700.widthOfTextAtSize(v(j),7);_?.cidentity&&h.drawText(v(_?.cidentity),{x:25,y:c+3,size:7,font:n.Lexend_700,color:$(0,0,0)}),_?.consigneeInfo?.ybestate&&h.drawText(v(j),{x:575-J,y:c+3,size:7,font:n.Lexend_700,color:$(0,0,0)});let t="";_?.hbls.map((s,u)=>{t+=(u>0?"  |  ":"")+s?.hbl}),h.drawText(v(t),{x:45,y:c-3,size:5,font:n.Lexend_700,color:$(0,0,0)}),K+=_?.pricePP*_?.totalWeight,I=c-18}),h.drawText("Guia: "+v(e?.guia),{x:17,y:A-22,size:12,font:n.Lexend_700,color:$(0,0,0)}),h.drawText("Fecha: "+v(e?.date),{x:19,y:A-35,size:10,font:n.Lexend_700,color:$(0,0,0)})});{const y=await i.save();return ze(y)}};var Te=O("<h5>"),Fe=O("<div style=padding:4px>"),Ie=O('<div class="_dsplFlx hdr_bar purple"><div class="tr_bar tr_bar_5 align_itm centerBx"><div class="icon align_itm"></div></div><div class="tr_bar tr_bar_20 align_itm left_alg bottombx"><h5> / <!> Seleccionado(s)</h5></div><div class="tr_bar tr_bar_70"></div><div><div class="icon align_itm"></div></div><div><div class="icon align_itm">'),qe=O('<div><div class=bottombx><div class="_dsplFlx flxWrp spaceAround centerBx"><h5></h5><h4></h4><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px></div><div style=padding:4px></div></div><div>'),Re=O("<div> <!>."),je=O("<div> ");const We=D(()=>E(()=>import("./LoadingColorSpinner-Cs0_zJbd.js"),__vite__mapDeps([0,1,2,3]))),ue=D(()=>E(()=>import("./DropDwnSearch-Df1YX7aL.js"),__vite__mapDeps([4,1,2,5,6,7,8]))),Ve=D(()=>E(()=>import("./InputHr-DHKq4h5V.js"),__vite__mapDeps([9,1,2,10]))),re=D(()=>E(()=>import("./SVG-DqUQoqiz.js"),__vite__mapDeps([6,1,2,7]))),Qe=D(()=>E(()=>import("./ItemOnManifestList-DB0ifk3J.js"),__vite__mapDeps([11,1,2,12,7,5,13,14,15,16,17,18]))),[P,N]=z({list:{}}),[st,at]=_e("");function nt(){const[a,l]=be(),[e,i]=z({search:""}),[n,b]=z(),[m,p]=z(),y=me(),[G,h]=z(),[A,I]=_e(""),_=Ae(I,400),q=(t,s)=>{i({[t]:s}),_(ge())};pe(()=>{N("list",void 0)}),he(()=>{}),ve(async()=>{let t=[];[33,46,40,41,42,50,52,54,56].map(d=>{let f=d,x=w("M023009")?.whStList?.[f];ee?.roles?.[x?.id]?.isActive&&t.push(x)}),h("list",t);let u=[];if(w("M023009")?.provincias.map(d=>{let f=d.label;ee?.roles?.[f]?.isActive&&u.push(d)}),h("prov",u),a?.mId){let d={id:a?.mId},f=await He(d);i("province",f?.province),i("city",f?.city),i("manifestObj",f),p("linked",f?.linkedBags)}});const[c,{refetch:H}]=ye(A,async t=>{let s=e?.manifest?.id,u=e?.province,d=u&&e?.city,f=e?.warehouse?.id,x=[];if(s){const S=await Ye(e.search,s,u,d,f);b("bags",S),C(S).map(W=>{let V=S[W],M=V.currentStatus;ee?.roles?.[M]?.isActive&&M.split("_")?.[1]>=33&&x.push(V)})}return x}),K=(t,s)=>{i({[t]:s}),_(ge()),N("list",void 0),setTimeout(()=>{N("list",{})},670)},R=()=>{let t={},s=0;C(P?.list)?.length!==c()?.length?(s=1,c().map(u=>{let d=u.ssg_track_key;t[d]=s})):c().map(u=>{let d=u.ssg_track_key;t[d]=void 0}),N("list",t)},U=async()=>{let t={...m?.linked};C(P?.list).map(s=>{t?.[s]||(t[s]={idairguide:n?.bags?.[s]?.idairguide})}),p("linked",t),await Ne({ssg_manifest_key:a?.mId},{linkedBags:t}),y("/manifest",{replace:!0})},j=()=>{let t=[];C(P?.list).map(s=>{n?.bags?.[s]&&t.push(n?.bags?.[s])}),J(t)},J=async t=>{let s=await Ee(t,!0,{guia:t[0]?.idairnumber,date:Oe()});window.open(s)};return(()=>{var t=qe(),s=t.firstChild,u=s.firstChild,d=u.firstChild,f=d.nextSibling,x=f.nextSibling,S=s.nextSibling,W=S.firstChild,V=W.nextSibling,M=S.nextSibling;return o(d,()=>e?.manifestObj?.ssg_manifest_key),o(f,()=>e?.manifestObj?.name),o(u,g(Y,{get when(){return e?.manifestObj?.city},get children(){return["|",(()=>{var r=Te();return o(r,()=>e?.manifestObj?.city),r})()]}}),x),o(x,()=>e?.manifestObj?.province),o(W,g(ue,{get list(){return w("M023009")?.manifestList},lbl_empty:"Guia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.manifest?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:r=>K("manifest",r),width:"260px"})),o(V,g(ue,{get list(){return G?.list},lbl_empty:"Almacen",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return e?.warehouse?.id},borderColor:"#b2b2b2",hasDebounce:!0,borderActiveColor:"var(--background-red-ssg)",onSelect:r=>q("warehouse",r),width:"260px"})),o(S,g(Y,{get when(){return e?.manifest?.id},get children(){var r=Fe();return o(r,g(Ve,{width:"260px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e?.search},placeholder:"search...",colors:"#2b2b2b",handleClick:k=>q("search",k)})),r}}),null),o(M,g(Y,{get when(){return ke(()=>!!e?.manifest?.id)()&&c().length>0},get children(){var r=Ie(),k=r.firstChild,Q=k.firstChild,L=k.nextSibling,X=L.firstChild,ie=X.firstChild,se=ie.nextSibling;se.nextSibling;var fe=L.nextSibling,Z=fe.nextSibling,ae=Z.firstChild,ne=Z.nextSibling,le=ne.firstChild;return r.style.setProperty("margin","18px 0"),Q.$$click=R,o(Q,g(re,{get name(){return C(P?.list)?.length<c()?.length?"minus-circle-outline":"check_circle_outline"},color:"var(--background-red-ssg)"})),o(X,()=>C(P?.list)?.length,ie),o(X,()=>c()?.length,se),ae.$$click=U,o(ae,g(re,{name:"link",color:"var(--background-red-ssg)"})),le.$$click=j,o(le,g(re,{name:"printer",color:"var(--background-red-ssg)"})),de(B=>{var oe=` ${te()?"tr_bar_15":"tr_bar_05"} tr_bar  align_itm centerBx"`,ce=` ${te()?"tr_bar_10":"tr_bar_05"} tr_bar  align_itm centerBx"`;return oe!==B.e&&(Z.className=B.e=oe),ce!==B.t&&(ne.className=B.t=ce),B},{e:void 0,t:void 0}),r}}),null),o(M,g($e,{fallback:r=>(()=>{var k=Re(),Q=k.firstChild,L=Q.nextSibling;return L.nextSibling,o(k,()=>r.toString(),L),k})(),get children(){return g(we,{get fallback(){return(()=>{var r=je();return r.firstChild,o(r,g(We,{stroke:"rgb(200 25 60 / 1)",size:62}),null),r})()},get children(){return g(Y,{get when(){return c()},get children(){return g(Se,{get each(){return c()},children:r=>g(Qe,{item:r,get isAlready(){return m?.linked?.[r.ssg_track_key]}})})}})}})}}),null),de(r=>Ce(M,` ${te(),"width:86vw;"} margin: 0 auto;`,r)),t})()}const Ye=async(a,l,e,i,n)=>{let b={params:{idairguide:l,":store":n}};a&&a.split(" ").map((p,y)=>{p&&(b.params[":search"+y]=p.trim())}),e&&(b.params[":estate"]=e),i&&(b.params[":city"]=i);let m={...w(F())}[802001];if(b={...b,...m},l&&n){const p=await T(b);return p?.error?{}:p}else return{}},Ne=async(a,l)=>{let e={params:a,data2update:l},i={...w(F())}[709002];e={...e,...i};const n=await T(e),b=C(l?.linkedBags).map(async(m,p)=>{await Ge({ssg_track_key:m,idairguide:l?.linkedBags?.[m]?.idairguide},{currentManifestKey:a?.ssg_manifest_key})});return await Promise.all(b),n},Ge=async(a,l)=>{let e={params:a,data2update:l},i={...w(F())}[809004];return e={...e,...i},await T(e)},He=async a=>{let l={params:a},e={...w(F())}[703003];return l={...l,...e},await T(l)},lt=async a=>{let l=[];a.map(e=>{let i={params:{id:e?.ssg_track_key,idairguide:e?.idairguide}},n={...w(F())}[802002];i={...i,...n},l.push(i)}),Me(l,Ke)},Ke=async a=>{const e=await T(a);if(e)return e};xe(["click"]);export{nt as default,Ke as fetchCSVInve,lt as loadManifest,st as manifestObs,P as selectedManifest,at as setManifestObs,N as setSelectedManifest,Ne as updLinkedBags};