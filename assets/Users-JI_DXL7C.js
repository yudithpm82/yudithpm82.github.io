const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ButonHrm-C2GoMcl0.js","assets/index-B1LD44Gq.js","assets/index-DUq9wHKT.css","assets/SVG-DrotoeO1.js","assets/index-Ci0zXM0r.js","assets/Util-BinxSAAi.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-A_VjzAHa.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-DVgwJZVp.js","assets/InputHr-M3rJ9grQ.css","assets/DropDwnSearch-CjBLNx5K.js","assets/debounces-ChHRdpkc.js","assets/DropDwnSearch-DMkLkRPc.css"])))=>i.map(i=>d[i]);
import{l as f,_ as C,c as B,a as $,b as k,i as c,d as a,e as x,t as b,S as u,F as L,f as D,g as Y,h as w,j as U}from"./index-B1LD44Gq.js";import{u as H}from"./debounces-ChHRdpkc.js";import{g as V,a as g,O as N,q as S,f as T}from"./Util-BinxSAAi.js";import{OpenModal as P,CloseModal as F}from"./DialogHRM-calq9pud.js";import{i as O}from"./globalSignal-uPuOvp31.js";import{c as q}from"./ShowQRPrintLabel-D9cSbSen.js";import"./index-Ci0zXM0r.js";import"./PDFButton-B_0lS8EG.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-g8RN6FFb.js";import"./Toast-DnMPh_hg.js";var z=b('<div><div><div class="_dsplFlx bottombx lowbordr spaceAround"><h5>Buscar usuarios</h5></div></div><div style="width:94vw;margin:0 auto;">'),j=b('<div class="_dsplFlx bottombx "><div><h5></h5><h4>'),K=b('<div class="client_item_box gWXAaj jlytmu">'),Q=b('<div><div class=" spaceAround centerBx"><div class=" bottombx lowbordr spaceAround centerBx"><h5>Actualizar Usuario</h5><h4></h4></div></div><div class="_dsplFlx flxWrp spaceAround centerBx"><div style=padding:4px>'),M=b('<div class="_dsplFlx itmAc"><span class=checklabel>');const J=f(()=>C(()=>import("./ButonHrm-C2GoMcl0.js"),__vite__mapDeps([0,1,2,3,4,5,6]))),G=f(()=>C(()=>import("./CheckBoxSlide-A_VjzAHa.js"),__vite__mapDeps([7,1,2,8]))),Z=f(()=>C(()=>import("./InputHr-DVgwJZVp.js"),__vite__mapDeps([9,1,2,10]))),W=f(()=>C(()=>import("./DropDwnSearch-CjBLNx5K.js"),__vite__mapDeps([11,1,2,12,3,4,13]))),[A,n]=B({accessLogistic:{}}),[E,p]=B({priv:{}});function Ce(){const[e,r]=$(""),t=H(r,400),[l,{refetch:i}]=k(e,async s=>await le(s));return(()=>{var s=z(),d=s.firstChild,m=d.firstChild,v=d.nextSibling;return c(d,a(Z,{width:"250px",backColor:"#ffffff",borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",get value(){return e()},placeholder:"usuarios ...",colors:"#2b2b2b",handleClick:t}),m),c(v,a(u,{get when(){return l()},get children(){return a(u,{get when(){return l()},get children(){return a(L,{get each(){return l()},children:(_,y)=>a(X,{item:_})})}})}})),s})()}const X=e=>{const r=()=>{n("accessLogistic",void 0),p("priv",void 0),setTimeout(()=>{n("accessLogistic",e?.item?.accessLogistic);let i={ISADMIN:e?.item?.ISADMIN,HIDDE2O:e?.item?.HIDDE2O,IsSSGLogistic:e?.item?.IsSSGLogistic};p("priv",i)},300);let t=V(),l={};l.id=t,l.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},l.content=a(ee,{get id(){return e?.item?.userId},modalId:t}),P(l)};return(()=>{var t=K();return c(t,a(u,{get when(){return e?.item?.email},get children(){var l=j(),i=l.firstChild,s=i.firstChild,d=s.nextSibling;return i.$$click=r,c(s,()=>e?.item?.name),c(d,()=>e?.item?.email),D(()=>Y(i,` bottombx lowbordr spaceAround ${O()?"":"centerBx"}`)),l}})),t})()},ee=e=>{const r=i=>{q(i)},t=async()=>{let s={...{accessLogistic:{...A?.accessLogistic}},...E?.priv};await se(e?.id,s),F(e?.modalId)},l=i=>{A?.accessLogistic&&n("accessLogistic","agency",i.id)};return w(()=>{}),(()=>{var i=Q(),s=i.firstChild,d=s.firstChild,m=d.firstChild,v=m.nextSibling,_=s.nextSibling,y=_.firstChild;return i.style.setProperty("max-height","80vh"),i.style.setProperty("overflow","auto"),i.style.setProperty("background","#ffffff"),i.style.setProperty("border-radius","13"),i.style.setProperty("padding","10px 19px"),v.$$click=()=>r(e?.id),c(v,()=>e?.id),c(s,a(J,{color:"rgb(200 25 60 / 1)",label:"Actualizar",handleClick:t}),null),c(y,a(W,{get list(){return g("M023009")?.agencies},lbl_empty:"Agencia",backColor:"var(--hrm-palette-primary100)",color:"var(--background-red-ssg)",get value(){return A?.accessLogistic?.agency},borderColor:"#b2b2b2",borderActiveColor:"var(--background-red-ssg)",onSelect:o=>l(o),width:"260px"})),c(i,a(u,{get when(){return U?.profile?.isAdmin&&h},get children(){return a(L,{get each(){return N(h)},children:(o,R)=>a(ie,{key:o,get val(){return E?.[o]},get item(){return h?.[o]},adm:!0})})}}),null),c(i,a(u,{when:I,get children(){return a(L,{get each(){return N(I)},children:(o,R)=>a(te,{key:o,get val(){return A?.accessLogistic?.[o]},get item(){return I?.[o]}})})}}),null),D(o=>(o=O()?"90vw":"720px")!=null?i.style.setProperty("width",o):i.style.removeProperty("width")),i})()},ie=e=>{const r=t=>{p("priv",e?.key,t)};return(()=>{var t=M(),l=t.firstChild;return c(l,()=>e?.item?.label),c(t,a(G,{get initValue(){return!!E?.priv?.[e?.key]},updChange:i=>r(i),color:"var(--background-red-ssg)"}),null),t})()},te=e=>{const r=t=>{if(A?.accessLogistic||n("accessLogistic",{}),A?.accessLogistic?.[e?.key])n("accessLogistic",e?.key,"isActive",t);else{let l={...e?.item};l.isActive=t,A?.accessLogistic?n("accessLogistic",e?.key,l):e?.key+""}};return(()=>{var t=M(),l=t.firstChild;return c(l,()=>e?.item?.label),c(t,a(G,{get initValue(){return!!A?.accessLogistic?.[e?.key]?.isActive},updChange:i=>r(i),color:"var(--background-red-ssg)"}),null),t})()},le=async e=>{if(e.length>0){let r={params:{limit:250,":search":e}},t=U?.profile?.isAdmin?{...g(S())}[992004]:{...g(S())}[992006];r={...r,...t};const i=await T(r);if(i&&!i.error)return i}return null},se=async(e,r)=>{let t={params:{userId:e},data2update:r},l={...g(S())}[999009];t={...t,...l};const s=await T(t);return s&&!s.error?s:null},h={ISADMIN:{label:"ISADMIN",idCode:"99",isActive:!1},IsSSGLogistic:{label:"IsSSGLogistic",idCode:"98",isActive:!1},HIDDE2O:{label:"HIDDE2O",idCode:"93",isActive:!1}},I={SCANING:{label:"Scaning",idCode:"50",isActive:!1},MANIFEST:{label:"Manifest",idCode:"51",isActive:!1},SEARCH:{label:"Dashboard",idCode:"52",isActive:!1},DELIVERY:{label:"Delivery",idCode:"53",isActive:!1},HBL:{label:"Hbls",idCode:"73",isActive:!1},HBLUPD:{label:"Hbl update",idCode:"75",isActive:!1},YABA_09:{label:"Recogida en Tienda",idCode:"63",isActive:!1},YABA_11:{label:"En transito para FL",idCode:"54",isActive:!1},YABA_22:{label:"Entrega a la aerolinea",idCode:"55",isActive:!1},AERO_28:{label:"En AeroVaradero",idCode:"56",isActive:!1},AERO_33:{label:"Recogidos de AeroVaradero",idCode:"57",isActive:!1},YABA_46:{id:"YABA_46",label:"Transporte HAV",icon:"car-hatchback"},YABA_40:{id:"YABA_40",label:"Transporte CAV",icon:"car-hatchback"},YABA_41:{id:"YABA_41",label:"Transporte CMG",icon:"car-hatchback"},YABA_42:{id:"YABA_42",label:"Transporte HLG",icon:"car-hatchback"},YABA_50:{id:"YABA_50",label:"Almacen HAV",icon:"store"},YABA_52:{id:"YABA_52",label:"Almacen CAV",icon:"store"},YABA_54:{id:"YABA_54",label:"Almacen CMG",icon:"store"},YABA_56:{id:"YABA_56",label:"Almacen HLG",icon:"store"},YABA_70:{label:"Organizados por Locaciones",idCode:"59",isActive:!1},YABA_78:{label:"Saliendo para entregar",idCode:"60",isActive:!1},"ISLA DE LA JUVENTUD":{label:"ISLA DE LA JUVENTUD",idCode:"ISLA DE LA JUVENTUD",isActive:!1},"PINAR DEL RIO":{label:"PINAR DEL RIO",idCode:"PINAR DEL RIO",isActive:!1},ARTEMISA:{label:"ARTEMISA",idCode:"ARTEMISA",isActive:!1},"LA HABANA":{label:"LA HABANA",idCode:"LA HABANA",isActive:!1},MAYABEQUE:{label:"MAYABEQUE",idCode:"MAYABEQUE",isActive:!1},MATANZAS:{label:"MATANZAS",idCode:"MATANZAS",isActive:!1},"VILLA CLARA":{label:"VILLA CLARA",idCode:"VILLA CLARA",isActive:!1},CIENFUEGOS:{label:"CIENFUEGOS",idCode:"CIENFUEGOS",isActive:!1},"SANCTI SPIRITUS":{label:"SANCTI SPIRITUS",idCode:"SANCTI SPIRITUS",isActive:!1},"CIEGO DE AVILA":{label:"CIEGO DE AVILA",idCode:"CIEGO DE AVILA",isActive:!1},CAMAGUEY:{label:"CAMAGUEY",idCode:"CAMAGUEY",isActive:!1},"LAS TUNAS":{label:"LAS TUNAS",idCode:"LAS TUNAS",isActive:!1},HOLGUIN:{label:"HOLGUIN",idCode:"HOLGUIN",isActive:!1},GRANMA:{label:"GRANMA",idCode:"GRANMA",isActive:!1},"SANTIAGO DE CUBA":{label:"SANTIAGO DE CUBA",idCode:"SANTIAGO DE CUBA",isActive:!1},GUANTANAMO:{label:"GUANTANAMO",idCode:"GUANTANAMO",isActive:!1}};x(["click"]);export{Ce as default};
