const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-DS11TR-I.js","assets/index-BQDq9BVx.js","assets/index-DUq9wHKT.css","assets/LoadingColorSpinner-DPNLfwBi.css","assets/DropDwnSearch-CpHYP1-L.js","assets/debounces-D-57AQO1.js","assets/SVG-CYbWHDJe.js","assets/index-Ci0zXM0r.js","assets/DropDwnSearch-DMkLkRPc.css","assets/ButonHrm-dY04wnkc.js","assets/Util-CG-K4aC-.js","assets/ButonHrm-BSeWNUGQ.css","assets/CheckBoxSlide-Dfsc0QvJ.js","assets/CheckBoxSlide-uVD3DHDO.css","assets/InputHr-DR4150Hf.js","assets/InputHr-M3rJ9grQ.css","assets/LabelsDateViews-Ci3oPh9L.js","assets/ShowQRPrintLabel-BXmSCIKF.js","assets/PDFButton-B_0lS8EG.js","assets/qrcode-C5vWJp7P.js","assets/fontkit.es-BKe7DAJ7.js","assets/InitPrintServices-CpTp0E3r.js","assets/Toast-DBYC_dpW.js","assets/Toast-DLpFKn-Q.css","assets/DialogHRM-DrXAbmTT.js","assets/DialogHRM-V9_lZntj.css","assets/LabelsViews-JAxfh0R1.js","assets/LabelsDropDownViews-TzhnPQez.js","assets/FlexSpace-Ds1B62AB.js","assets/BirthLocation-CtLoMe7J.js","assets/globalSignal-C0bDyEQ1.js"])))=>i.map(i=>d[i]);
import{l as n,_ as s,e as me,c as N,a as $,u as Q,o as J,h as Z,k as M,i as a,d as e,D as Y,f as X,m as Ie,S as K,t as E,j as T,q as L,p as we,r as $e,M as O,v as De}from"./index-BQDq9BVx.js";import{a as R,q as ee,f as te,u as oe,O as ye,l as de}from"./Util-CG-K4aC-.js";import{u as ae}from"./debounces-D-57AQO1.js";import"./globalSignal-C0bDyEQ1.js";import{t as q}from"./InitPrintServices-CpTp0E3r.js";import"./index-Ci0zXM0r.js";import{m as j,a as Le,I as Oe}from"./handelImagesServices-BWVEavQN.js";import"./PDFButton-B_0lS8EG.js";var Be=E('<div><div class="client_item_box gWXAaj jlytmu"><div class="centerBx bottombx lowbordr spaceAround"><h5>Pasaporte</h5></div><div class="centerBx spaceAround flxWrp"><div class=imageP></div></div><div class="centerBx spaceAround flxWrp"style=margin-top:26px><div class=flexSpace></div><div></div><div class=flexSpace></div><div></div><div class=flexSpace>'),Te=E('<div class="prev_document "><img alt="">'),Re=E("<div> ");const Ne=n(()=>s(()=>import("./LoadingColorSpinner-DS11TR-I.js"),__vite__mapDeps([0,1,2,3])));n(()=>s(()=>import("./DropDwnSearch-CpHYP1-L.js"),__vite__mapDeps([4,1,2,5,6,7,8])));n(()=>s(()=>import("./ButonHrm-dY04wnkc.js"),__vite__mapDeps([9,1,2,6,7,10,11])));n(()=>s(()=>import("./CheckBoxSlide-Dfsc0QvJ.js"),__vite__mapDeps([12,1,2,13])));n(()=>s(()=>import("./InputHr-DR4150Hf.js"),__vite__mapDeps([14,1,2,15])));n(()=>s(()=>import("./SVG-CYbWHDJe.js"),__vite__mapDeps([6,1,2,7])));const ue=n(()=>s(()=>import("./LabelsDateViews-Ci3oPh9L.js"),__vite__mapDeps([16,1,2,17,18,7,19,20,21,10,22,23,24,25]))),ce=n(()=>s(()=>import("./LabelsViews-JAxfh0R1.js"),__vite__mapDeps([26,1,2,17,18,7,19,20,21,10,22,23])));n(()=>s(()=>import("./LabelsDropDownViews-TzhnPQez.js"),__vite__mapDeps([27,1,2,17,18,7,19,20,21,10,22,23])));function Ve(t){N(),$(0);const[m,u]=$("");return ae(u,400),Q(),J(()=>{}),Z(()=>{}),M(async()=>{}),(()=>{var _=Be(),o=_.firstChild,f=o.firstChild,c=f.nextSibling,P=c.firstChild,x=c.nextSibling,v=x.firstChild,S=v.nextSibling,i=S.nextSibling,b=i.nextSibling;return o.style.setProperty("margin","15px 30px"),a(P,e(ke,{get src(){return t?.currentPassport?.passportImage},get cid(){return t?.item?.clientNotaryId},width:260})),a(S,e(ce,{label:"No Pasaporte: ",get value(){return t?.currentPassport?.passportNumber},allowChanges:!0,confirm:g=>t.saveUpd(`passportRecord:${t?.currentPassportId}:passportNumber`,g)}),null),a(S,e(ce,{label:"Pais de Emision: ",get value(){return t?.currentPassport?.countryOfIssuance}}),null),a(b,e(ue,{label:"Fecha de Emision: ",get value(){return t?.currentPassport?.issueDate},allowChanges:!0,confirm:g=>t.saveUpd(`passportRecord:${t?.currentPassportId}:issueDate`,g)}),null),a(b,e(ue,{label:"Fecha de Expiracion: ",get value(){return t?.currentPassport?.expirationDate},allowChanges:!0,confirm:g=>t.saveUpd(`passportRecord:${t?.currentPassportId}:expirationDate`,g)}),null),_})()}function ke(t){N({search:""});const[m,u]=$(null);M(async()=>{if(j?.[t?.cid]?.blob)u(j?.[t?.cid]?.blob);else{let o=await Le(t.src,t?.cid);Oe(t?.cid,o),u(o)}});const _=()=>{};return e(K,{get when(){return Y(()=>!!j?.[t?.cid])()&&m()},get fallback(){return(()=>{var o=Re();return o.firstChild,a(o,e(Ne,{stroke:"rgb(200 25 60 / 1)",size:62}),null),o})()},get children(){var o=Te(),f=o.firstChild;return o.$$click=_,X(c=>{var P=m(),x=t.width+"px",v=t.width/j?.[t?.cid]?.w2hRel+"px";return P!==c.e&&Ie(f,"src",c.e=P),x!==c.t&&((c.t=x)!=null?f.style.setProperty("width",x):f.style.removeProperty("width")),v!==c.a&&((c.a=v)!=null?f.style.setProperty("height",v):f.style.removeProperty("height")),c},{e:void 0,t:void 0,a:void 0}),o}})}me(["click"]);var Ue=E('<div><div class="client_item_box gWXAaj jlytmu"><div class="centerBx bottombx lowbordr spaceAround"><h5>I94</h5></div><div class="centerBx spaceAround flxWrp"><div class=flexSpace></div><div></div><div class=flexSpace></div><div></div><div class=flexSpace>');n(()=>s(()=>import("./LoadingColorSpinner-DS11TR-I.js"),__vite__mapDeps([0,1,2,3])));n(()=>s(()=>import("./DropDwnSearch-CpHYP1-L.js"),__vite__mapDeps([4,1,2,5,6,7,8])));const We=n(()=>s(()=>import("./LabelsViews-JAxfh0R1.js"),__vite__mapDeps([26,1,2,17,18,7,19,20,21,10,22,23]))),_e=n(()=>s(()=>import("./LabelsDropDownViews-TzhnPQez.js"),__vite__mapDeps([27,1,2,17,18,7,19,20,21,10,22,23]))),je=n(()=>s(()=>import("./LabelsDateViews-Ci3oPh9L.js"),__vite__mapDeps([16,1,2,17,18,7,19,20,21,10,22,23,24,25])));n(()=>s(()=>import("./ButonHrm-dY04wnkc.js"),__vite__mapDeps([9,1,2,6,7,10,11])));n(()=>s(()=>import("./CheckBoxSlide-Dfsc0QvJ.js"),__vite__mapDeps([12,1,2,13])));n(()=>s(()=>import("./InputHr-DR4150Hf.js"),__vite__mapDeps([14,1,2,15])));n(()=>s(()=>import("./SVG-CYbWHDJe.js"),__vite__mapDeps([6,1,2,7])));n(()=>s(()=>import("./FlexSpace-Ds1B62AB.js"),__vite__mapDeps([28,1,2])));function Me(t){N({search:""}),$(0);const[m,u]=$("");return ae(u,400),Q(),J(()=>{}),Z(()=>{}),M(async()=>{console.log(t?.item),ze()}),(()=>{var _=Ue(),o=_.firstChild,f=o.firstChild,c=f.nextSibling,P=c.firstChild,x=P.nextSibling,v=x.nextSibling,S=v.nextSibling;return o.style.setProperty("margin","15px 30px"),a(x,e(We,{label:"Numero I94: ",get value(){return t?.item?.i94Number},allowChanges:!0,confirm:i=>t.saveUpd("i94Number",i)}),null),a(x,e(je,{label:"Fecha de Expiracion de I94: ",get value(){return t?.item?.i94ExpirationDate},allowChanges:!0,confirm:i=>t.saveUpd("i94ExpirationDate",i)}),null),a(S,e(_e,{label:"I94 Admision: ",get value(){return t?.item?.i94ClassAdmission},get list(){return R("drpDwnInmigrationStatus")},allowChanges:!0,confirm:i=>t.saveUpd("i94ClassAdmission",i)}),null),a(S,e(_e,{label:"i94 Status: ",get value(){return t?.item?.i94Status},get list(){return R("drpDwnInmigrationStatus")},allowChanges:!0,confirm:i=>t.saveUpd("i94Status",i)}),null),_})()}const ze=async()=>{let t={...R(ee())?.list_inmig_status};t.params={businessId:T?.profile?.businessId};const u=await te(t);if(u){oe("objInmigrationStatus",u);let _=[];ye(u).map(o=>{_.push({id:o,label:u[o]})}),oe("drpDwnInmigrationStatus",_)}};var Fe=E('<ul class=inline><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div></li><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div></li><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div></li><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx"></div></div></li><li><div class="_dsplFlx flxWrp spaceAround centerBx"><div class="icon_status centerBx">'),He=E("<div>LPR"),qe=E("<div>DL"),Ge=E('<div class="centerBx100 ">'),Ye=E('<div><div class="centerBx spaceAround"style="margin:25px 30px"></div><div class="client_item_box gWXAaj jlytmu"><div class="centerBx bottombx lowbordr spaceAround"><h5>Personal</h5></div><div class="centerBx spaceAround flxWrp"><div class=flexSpace></div><div></div><div class=flexSpace></div><div></div><div class=flexSpace></div><div></div><div class=flexSpace></div></div></div><div class=centerBx100 style=margin-top:20px></div><div style=margin:30px>'),Xe=E("<div class=loader>Loading...");n(()=>s(()=>import("./LoadingColorSpinner-DS11TR-I.js"),__vite__mapDeps([0,1,2,3])));n(()=>s(()=>import("./DropDwnSearch-CpHYP1-L.js"),__vite__mapDeps([4,1,2,5,6,7,8])));const Ke=n(()=>s(()=>import("./ButonHrm-dY04wnkc.js"),__vite__mapDeps([9,1,2,6,7,10,11])));n(()=>s(()=>import("./CheckBoxSlide-Dfsc0QvJ.js"),__vite__mapDeps([12,1,2,13])));n(()=>s(()=>import("./InputHr-DR4150Hf.js"),__vite__mapDeps([14,1,2,15])));const B=n(()=>s(()=>import("./SVG-CYbWHDJe.js"),__vite__mapDeps([6,1,2,7]))),Qe=n(()=>s(()=>import("./FlexSpace-Ds1B62AB.js"),__vite__mapDeps([28,1,2]))),Je=n(()=>s(()=>import("./BirthLocation-CtLoMe7J.js"),__vite__mapDeps([29,1,2,10,7,5,30,21,18]))),D=n(()=>s(()=>import("./LabelsDropDownViews-TzhnPQez.js"),__vite__mapDeps([27,1,2,17,18,7,19,20,21,10,22,23]))),d=n(()=>s(()=>import("./LabelsViews-JAxfh0R1.js"),__vite__mapDeps([26,1,2,17,18,7,19,20,21,10,22,23]))),Ze=n(()=>s(()=>import("./LabelsDateViews-Ci3oPh9L.js"),__vite__mapDeps([16,1,2,17,18,7,19,20,21,10,22,23,24,25]))),[r,G]=N({data:""});function dt(){N({search:""});const[t,m]=$(0),[u,_]=De(),o=b=>()=>_(()=>m(b)),[f,c]=$("");ae(c,400);const[P,x]=Q();J(()=>{}),Z(()=>{}),M(async()=>{G("data",void 0);let b=await et(P?.dId);G("data",b)});let v={};const S=()=>{},i=async(b,g)=>{let A={...r?.data},z={[b]:g},I={params:{}};I.params={clientNotaryId:A?.clientNotaryId},I.data2update=z,T?.profile?.isAdmin||(I.params.businessId=T?.profile?.businessId);let F={...R(ee())}.upd_notary;I={...I,...F};const y=await te(I);y&&!y.error&&(A=Object.assign({},A,y),G("data",A))};return(()=>{var b=Ye(),g=b.firstChild,A=g.nextSibling,z=A.firstChild,I=z.nextSibling,F=I.firstChild,C=F.nextSibling,y=C.nextSibling,w=y.nextSibling,ve=w.nextSibling,p=ve.nextSibling,be=A.nextSibling;return a(g,e(Qe,{}),null),a(g,e(K,{get when(){return!1},get children(){return e(Ke,{color:"#c8193c",label:"Actualizar",handleClick:S})}}),null),A.style.setProperty("margin","15px 30px"),a(C,e(d,{label:"Primer Nombre: ",get value(){return r?.data?.firstName},allowChanges:!0,confirm:l=>i("firstName",l)}),null),a(C,e(d,{label:"Segundo Nombre: ",get value(){return r?.data?.middleName},allowChanges:!0,confirm:l=>i("middleName",l)}),null),a(C,e(d,{label:"Apellidos: ",get value(){return r?.data?.lastName},allowChanges:!0,confirm:l=>i("lastName",l)}),null),a(C,e(d,{label:"Nombre Completo: ",get value(){return q(r?.data?.firstName)+q(r?.data?.middleName)+q(r?.data?.lastName)}}),null),a(C,e(Ze,{label:"Fecha nacimiento: ",get value(){return r?.data?.dateOfBirth},allowChanges:!0,confirm:l=>i("dateOfBirth",l)}),null),a(C,e(d,{label:"Telefono: ",get value(){return r?.data?.phoneNumber},allowChanges:!0,confirm:l=>i("phoneNumber",l)}),null),a(C,e(d,{label:"Alt telefono: ",get value(){return r?.data?.altPhoneNumber},allowChanges:!0,confirm:l=>i("altPhoneNumber",l)}),null),a(w,e(D,{label:"Estado Civil: ",get value(){return r?.data?.maritalStatus},allowChanges:!0,confirm:l=>i("maritalStatus",l),list:[{label:"Soltero",id:"Single"},{label:"Casado",id:"Married"},{label:"Divorciado",id:"Divorced"},{label:"Viudo",id:"Widowed"}]}),null),a(w,e(D,{label:"Genero: ",get value(){return r?.data?.genre},list:[{label:"Mujer",id:"Female"},{label:"Hombre",id:"Male"}],allowChanges:!0,confirm:l=>i("genre",l)}),null),a(w,e(D,{label:"Ethnia: ",get value(){return r?.data?.ethnicity},list:[{label:"Hispanic or Latino",id:"Hispanic or Latino"},{label:"Not Hispanic or Latino",id:"Not Hispanic or Latino"}],allowChanges:!0,confirm:l=>i("ethnicity",l)}),null),a(w,e(D,{label:"Raza: ",get value(){return r?.data?.race},list:[{label:"White",id:"White"},{label:"Asian",id:"Asian"},{label:"Black or African American",id:"Black or African American"},{label:"American Indian or Alaska Native",id:"American Indian or Alaska Native"},{label:"Native Hawaiian or Other Pacific Islander",id:"Native Hawaiian or Other Pacific Islander"}],allowChanges:!0,confirm:l=>i("race",l)}),null),a(w,e(D,{label:"Pelo Color: ",get value(){return r?.data?.hairColor},list:[{label:"Bald",id:"Bald"},{label:"Black",id:"Black"},{label:"Blond",id:"Blond"},{label:"Brown",id:"Brown"},{label:"Gray",id:"Gray"},{label:"Red",id:"Red"},{label:"Sandy",id:"Sandy"},{label:"White",id:"White"},{label:"Unknown/ Other",id:"Unknown/ Other"}],allowChanges:!0,confirm:l=>i("hairColor",l)}),null),a(w,e(D,{label:"Ojos Color: ",get value(){return r?.data?.eyesColor},list:[{label:"Black",id:"Black"},{label:"Blue",id:"Blue"},{label:"Brown",id:"Brown"},{label:"Gray",id:"Gray"},{label:"Green",id:"Green"},{label:"Hazel",id:"Hazel"},{label:"Maroon",id:"Maroon"},{label:"Pink",id:"Pink"},{label:"Unknown/ Other",id:"Unknown/ Other"}],allowChanges:!0,confirm:l=>i("eyesColor",l)}),null),a(p,e(d,{label:"Subject Id: ",get value(){return r?.data?.subjectId},confirm:l=>i("subjectId",l)}),null),a(p,e(d,{label:"Social S: ",get value(){return r?.data?.ss},hidde:!0,allowChanges:!0,confirm:l=>i("ss",l)}),null),a(p,e(d,{label:"Correo: ",get value(){return r?.data?.email},allowChanges:!0,confirm:l=>i("email",l)}),null),a(p,e(d,{label:"Alien: ",get value(){return r?.data?.alienNumber},allowChanges:!0,confirm:l=>i("alienNumber",l)}),null),a(p,e(d,{label:"Pasaporte: ",get value(){return v?.passportNumber},allowChanges:!0,confirm:l=>i("passportNumber",l)}),null),a(p,e(d,{label:"Expiracion Pasaporte: ",get value(){return Y(()=>!!v?.expirationDate)()?de(v?.expirationDate):null}}),null),a(p,e(d,{label:"Ciudadania Or Residencia: ",get value(){return r?.data?.citizenshipOrResidency}}),null),a(p,e(d,{label:"Date Become USC: ",get value(){return Y(()=>!!r?.data?.dateBecomeUSC)()?de(r?.data?.dateBecomeUSC):null}}),null),a(p,e(d,{label:"Certificate No: ",get value(){return r?.data?.certificateUSCNo}}),null),a(p,e(d,{label:"uscis Acc: ",get value(){return r?.data?.uscisAcc}}),null),a(p,e(d,{label:"Carnet Cuba: ",get value(){return r?.data?.carnetCuba}}),null),a(be,e(K,{get when(){return r?.data},get children(){return[(()=>{var l=Fe(),V=l.firstChild,ge=V.firstChild,pe=ge.firstChild,k=V.nextSibling,he=k.firstChild,fe=he.firstChild,U=k.nextSibling,xe=U.firstChild,Ee=xe.firstChild,W=U.nextSibling,Ce=W.firstChild,Pe=Ce.firstChild,H=W.nextSibling,Se=H.firstChild,Ae=Se.firstChild;return L(V,"click",o(0),!0),a(pe,e(B,{name:"home",size:32,color:"#2b2b2b"})),L(k,"click",o(1),!0),a(fe,e(B,{name:"passport",size:32,color:"#2b2b2b"})),L(U,"click",o(2),!0),a(Ee,e(B,{name:"police-badge-outline",size:32,color:"#2b2b2b"})),L(W,"click",o(3),!0),a(Pe,e(B,{name:"creditcard_outline",size:32,color:"#2b2b2b"})),L(H,"click",o(4),!0),a(Ae,e(B,{name:"car-shift-pattern",size:32,color:"#2b2b2b"})),X(h=>{var le=t()===0,re=t()===1,ie=t()===2,ne=t()===3,se=t()===4;return le!==h.e&&V.classList.toggle("selected",h.e=le),re!==h.t&&k.classList.toggle("selected",h.t=re),ie!==h.a&&U.classList.toggle("selected",h.a=ie),ne!==h.o&&W.classList.toggle("selected",h.o=ne),se!==h.i&&H.classList.toggle("selected",h.i=se),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),l})(),(()=>{var l=Ge();return a(l,e(we,{get fallback(){return Xe()},get children(){return e($e,{get children(){return[e(O,{get when(){return t()===0},get children(){return e(Je,{get item(){return r?.data},saveUpd:i})}}),e(O,{get when(){return t()===1},get children(){return e(Ve,{get item(){return r?.data},get currentPassport(){return r?.data?.passportRecord?.[r?.data.currentPassport]},get currentPassportId(){return r?.data.currentPassport},saveUpd:i})}}),e(O,{get when(){return t()===2},get children(){return e(Me,{get item(){return r?.data},saveUpd:i})}}),e(O,{get when(){return t()===3},get children(){return He()}}),e(O,{get when(){return t()===4},get children(){return qe()}})]}})}})),X(()=>l.classList.toggle("pending",!!u())),l})()]}})),b})()}const et=async t=>{let m={params:{id:t}};T?.profile?.isAdmin||(m.params.businessId=T?.profile?.businessId);let u={...R(ee())}.fndone_notary;return m={...m,...u},await te(m)};me(["click"]);export{dt as default};
