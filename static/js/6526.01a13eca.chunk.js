"use strict";(self.webpackChunkstephanie_solution=self.webpackChunkstephanie_solution||[]).push([[6526,6349,2959,6874],{6349:(e,t,a)=>{a.d(t,{Z:()=>d});var i=a(9760),l=a(2647),o=a(2350),s=a(184);const n=(0,l.LA)(),d=e=>{let{init:t,label:a,updDate:l}=e;const d=e=>{l(e.initDate+800)};return(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"label",children:a||"Fecha"}),(0,s.jsx)("div",{className:"date2Upd",onClick:()=>{let e={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,s.jsx)(n,{onConfirm:d,init:t}),(0,i.OpenModal)(e)},children:t?(0,o.sG)(t):(0,o.sG)((new Date).getTime())})]})}},6526:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var i=a(2791),l=a(9760),o=a(2647),s=a(2350),n=a(6349),d=a(3007),p=a(4424),r=a(1439),c=a(184);const x=(0,o.Np)(),h=(0,o.YZ)(),g=((0,o.PU)(),e=>{var t,a,o,g,y,v,m,N,f,u,_,w,b,j,C,L,S,z,D,H,F,W,A,I,M,T,k,E,P,U,B,Q,O,V,Z,K,R;let{data:Y,confirm:G}=e;const q="medicaid_frm",$="snap_letter_w2.pdf";let J=["caseNo","code","coName","docDate","fullName","address","apto","city_state","firstName","firstLastName","secondLastName","3LastName","_aptc","from","to","matrix","firstName2","firstLastName2","secondLastName2","3LastName2","_aptc2","from2","to2","firstName3","firstLastName3","secondLastName3","3LastName3","_aptc3","from3","to3","firstName4","firstLastName4","secondLastName4","3LastName4","_aptc4","from4","to4"];const[X,ee]=(0,i.useState)(!1),[,te]=(0,i.useState)(0),ae=e=>{te((0,s.M5)())};(0,i.useEffect)((()=>{if(!X)return ee(!0),te((0,s.M5)()),setTimeout((()=>{ie("documentType","MEDICAID"),te((0,s.M5)()),(0,s.bh)($)||(e=>{let t=(0,s.bh)("MEDICAID_last")||0;Date.now()>t&&((0,s.Rz)("MEDICAID_last",Date.now()+490),(0,s.KI)(e,ae),(0,s.KI)("fqa_snap.png",ae))})($)}),50),()=>{}}));const ie=(e,t)=>{let a=(0,s.bh)(q)||{};a[e]=t,(0,s.Rz)(q,a),te((0,s.M5)())},le=e=>{let{ffm:t,hh:a}=e,i={},l={};return["","2","3","4"].map(((e,o)=>{if(console.log(e),console.log(t["firstName"+e]&&t["from"+e]&&t["to"+e]),t["firstName"+e]&&t["from"+e]&&t["to"+e]){let n=1;t["firstName"+e]&&(i["Wwa_"+(o+1)+"_name"]=t["firstName"+e]),t["firstLastName"+e]&&(n=2,i["Wwa_"+(o+1)+"_name2"]=t["firstLastName"+e]),t["secondLastName"+e]&&(n=3,i["Wwa_"+(o+1)+"_name3"]=t["secondLastName"+e]),t["3LastName"+e]&&(n=4,i["Wwa_"+(o+1)+"_name4"]=t["3LastName"+e]);let p=t["_aptc"+e];i["Wwa_"+(o+1)+"_program"]="Medicaid",p&&(i["Wwa_"+(o+1)+"_program"]="Qualified Health Plan",i["Wwa_"+(o+1)+"_program2"]="Payment Assistance",i["Wwa_"+(o+1)+"_program3"]="(APTC)",n=3),i["Wwa_"+(o+1)+"_start"]=t["from"+e]?(0,s.oE)(t["from"+e]):"",i["Wwa_"+(o+1)+"_end"]=t["to"+e]?(0,s.oE)(t["to"+e]):"";let r=(0,d.D9)(a,o+1,n,p);p&&(r["Wwa_"+(o+1)+"_program"].size=10.5),l=Object.assign({},l,r),a=a+25+15*(n-1)}})),{frmWWA:i,structWWA:l,heightWWA:a}},oe=()=>{(null===Y||void 0===Y?void 0:Y.modalID)&&(0,l.CloseModal)({id:null===Y||void 0===Y?void 0:Y.modalID})};let se=(0,s.vy)(J,(0,s.bh)(q),(0,s.bh)(q+"_bck"));return(0,c.jsxs)("div",{style:{maxHeight:"90vh",width:"820px",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("p",{className:"form_title",children:"MEDICAID Letter"}),(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"",style:{padding:"5px 20px 0 0"}}),(0,c.jsx)("div",{className:"card",children:(0,s.bh)($)?(0,c.jsx)(r.N,{color:"#007bfc",label:"Imprimir",clickHandler:async()=>{let e=(0,s.bh)(q),t=p.$,a=e.caseNo,i=e.docDate?(0,s.sJ)(e.docDate):"";t.date="Date:"+i,t.caseNo="Case Number: "+a,t.codeMM=e.code;let l=p.l;t.h_name=e.fullName,t.h_address=e.address,e.coName&&(t.coName="C/O "+e.coName,l.h_address.y=176,l.h_city.y=186,l.h_city2.y=196),e.apto?(t.h_city="APT "+e.apto,t.h_city2=e.city_state):(t.h_city=e.city_state,t.h_city2="");let o=(0,d.Y2)(385),n=430,{frmWWA:r,structWWA:c,heightWWA:x}=le({ffm:e,hh:n});t=Object.assign({},t,r),n=x+60;let h=(0,d.Oz)(n),g=(0,d.Zn)(n+160),y=Object.assign({},l,h,g,o,c);if(e.matrix){let a=(0,s.cK)(e.matrix),i=(0,s.rV)(a);(0,s.ki)(i,(async e=>{t.dataMatrix=e;let a=await(0,d.cc)(t,y,1,1);window.open(a)}))}else{let e=await(0,d.cc)(t,y,1,1);window.open(e)}}}):null})]}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround",style:{marginTop:20},children:[(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(t=(0,s.bh)(q))||void 0===t?void 0:t.caseNo,label:"caso",width:170,type:"number",updChanges:e=>ie("caseNo",e)})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(a=(0,s.bh)(q))||void 0===a?void 0:a.code,label:"codigo",width:210,updChanges:e=>ie("code",e)})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(o=(0,s.bh)(q))||void 0===o?void 0:o.matrix,label:"Matrix Code",width:180,updChanges:e=>ie("matrix",e)})}),(0,c.jsx)(n.Z,{init:null===(g=(0,s.bh)(q))||void 0===g?void 0:g.docDate,label:"Fecha",updDate:e=>ie("docDate",e)})]}),(0,c.jsx)("div",{className:"separator"}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(y=(0,s.bh)(q))||void 0===y?void 0:y.fullName,label:"Full Name",width:520,updChanges:e=>ie("fullName",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(v=(0,s.bh)(q))||void 0===v?void 0:v.address,label:"Address",width:480,updChanges:e=>ie("address",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(m=(0,s.bh)(q))||void 0===m?void 0:m.apto,label:"Apto",width:70,updChanges:e=>ie("apto",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(N=(0,s.bh)(q))||void 0===N?void 0:N.city_state,label:"City, State, ZipCode",width:320,updChanges:e=>ie("city_state",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(f=(0,s.bh)(q))||void 0===f?void 0:f.coName,label:"C/O",width:520,updChanges:e=>ie("coName",e.toString().toUpperCase())})})]}),(0,c.jsx)("div",{className:"separator"}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround incExp flxWrp",children:[(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(u=(0,s.bh)(q))||void 0===u?void 0:u.firstName,width:180,label:"First Name",updChanges:e=>ie("firstName",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(_=(0,s.bh)(q))||void 0===_?void 0:_.firstLastName,width:180,label:"First Last Name",updChanges:e=>ie("firstLastName",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(w=(0,s.bh)(q))||void 0===w?void 0:w.secondLastName,width:180,label:"Second Last Name",updChanges:e=>ie("secondLastName",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(b=(0,s.bh)(q))||void 0===b?void 0:b["3LastName"],width:180,label:"4 level",updChanges:e=>ie("3LastName",e.toString().toUpperCase())})})]}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround incExp flxWrp",children:[(0,c.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,c.jsx)(h,{initvalue:null===(j=(0,s.bh)(q))||void 0===j?void 0:j._aptc,keyCode:65,updChange:e=>ie("_aptc",e)}),(0,c.jsx)("span",{className:"checklabel",children:"APTC"})]}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(n.Z,{init:null===(C=(0,s.bh)(q))||void 0===C?void 0:C.from,label:"Fecha desde",updDate:e=>ie("from",e)})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(n.Z,{init:null===(L=(0,s.bh)(q))||void 0===L?void 0:L.to,label:"Fecha hasta",updDate:e=>ie("to",e)})})]}),(0,c.jsx)("div",{className:"separator"}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround incExp flxWrp",children:[(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(S=(0,s.bh)(q))||void 0===S?void 0:S.firstName2,width:180,label:"First Name",updChanges:e=>ie("firstName2",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(z=(0,s.bh)(q))||void 0===z?void 0:z.firstLastName2,width:180,label:"First Last Name",updChanges:e=>ie("firstLastName2",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(D=(0,s.bh)(q))||void 0===D?void 0:D.secondLastName2,width:180,label:"Second Last Name",updChanges:e=>ie("secondLastName2",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(H=(0,s.bh)(q))||void 0===H?void 0:H["3LastName2"],width:180,label:"4 level",updChanges:e=>ie("3LastName2",e.toString().toUpperCase())})})]}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround incExp flxWrp",children:[(0,c.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,c.jsx)(h,{initvalue:null===(F=(0,s.bh)(q))||void 0===F?void 0:F._aptc2,keyCode:31,updChange:e=>ie("_aptc2",e)}),(0,c.jsx)("span",{className:"checklabel",children:"APTC"})]}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(n.Z,{init:null===(W=(0,s.bh)(q))||void 0===W?void 0:W.from2,label:"Fecha desde",updDate:e=>ie("from2",e)})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(n.Z,{init:null===(A=(0,s.bh)(q))||void 0===A?void 0:A.to2,label:"Fecha hasta",updDate:e=>ie("to2",e)})})]}),(0,c.jsx)("div",{className:"separator"}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround incExp flxWrp",children:[(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(I=(0,s.bh)(q))||void 0===I?void 0:I.firstName3,width:180,label:"First Name",updChanges:e=>ie("firstName3",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(M=(0,s.bh)(q))||void 0===M?void 0:M.firstLastName3,width:180,label:"First Last Name",updChanges:e=>ie("firstLastName3",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(T=(0,s.bh)(q))||void 0===T?void 0:T.secondLastName3,width:180,label:"Second Last Name",updChanges:e=>ie("secondLastName3",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(k=(0,s.bh)(q))||void 0===k?void 0:k["3LastName3"],width:180,label:"4 level",updChanges:e=>ie("3LastName3",e.toString().toUpperCase())})})]}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround incExp flxWrp",children:[(0,c.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,c.jsx)(h,{initvalue:null===(E=(0,s.bh)(q))||void 0===E?void 0:E._aptc3,keyCode:35,updChange:e=>ie("_aptc3",e)}),(0,c.jsx)("span",{className:"checklabel",children:"APTC"})]}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(n.Z,{init:null===(P=(0,s.bh)(q))||void 0===P?void 0:P.from3,label:"Fecha desde",updDate:e=>ie("from3",e)})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(n.Z,{init:null===(U=(0,s.bh)(q))||void 0===U?void 0:U.to3,label:"Fecha hasta",updDate:e=>ie("to3",e)})})]}),(0,c.jsx)("div",{className:"separator"}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround incExp flxWrp",children:[(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(B=(0,s.bh)(q))||void 0===B?void 0:B.firstName4,width:180,label:"First Name",updChanges:e=>ie("firstName4",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(Q=(0,s.bh)(q))||void 0===Q?void 0:Q.firstLastName4,width:180,label:"First Last Name",updChanges:e=>ie("firstLastName4",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(O=(0,s.bh)(q))||void 0===O?void 0:O.secondLastName4,width:180,label:"Second Last Name",updChanges:e=>ie("secondLastName4",e.toString().toUpperCase())})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(x,{init:null===(V=(0,s.bh)(q))||void 0===V?void 0:V["3LastName4"],width:180,label:"4 level",updChanges:e=>ie("3LastName4",e.toString().toUpperCase())})})]}),(0,c.jsxs)("div",{className:"_dsplFlx spaceAround incExp flxWrp",children:[(0,c.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:20},children:[(0,c.jsx)(h,{initvalue:null===(Z=(0,s.bh)(q))||void 0===Z?void 0:Z._aptc4,keyCode:35,updChange:e=>ie("_aptc4",e)}),(0,c.jsx)("span",{className:"checklabel",children:"APTC"})]}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(n.Z,{init:null===(K=(0,s.bh)(q))||void 0===K?void 0:K.from4,label:"Fecha desde",updDate:e=>ie("from4",e)})}),(0,c.jsx)("div",{style:{padding:"8px 1px"},children:(0,c.jsx)(n.Z,{init:null===(R=(0,s.bh)(q))||void 0===R?void 0:R.to4,label:"Fecha hasta",updDate:e=>ie("to4",e)})})]}),"3LastName",null!==se&&void 0!==se&&se.hasChange?(0,c.jsxs)("div",{className:"_dsplFlx ",children:[(0,c.jsx)("div",{className:"flexSpace"}),(0,c.jsx)("div",{className:"card",children:(0,c.jsx)(r.N,{color:"#007bfc",label:"Actualizar",clickHandler:async()=>{let e=(0,s.bh)(q),t={};if(e.caseId){var a,i;let l=(0,s.vy)(J,e,(0,s.bh)(q+"_bck"));t={...null===(a=(0,s.bh)((0,s.hQ)()))||void 0===a?void 0:a.upd_notry_case},t.params={customerId:null===(i=(0,s.bh)((0,s.Ks)()))||void 0===i?void 0:i.clientNotaryId,caseId:e.caseId},t.data2update=l.data}else{var l,o;e.customerId=(0,s.bh)((0,s.Ks)()).clientNotaryId,e.documentType="MEDICAID",e.caseId=(0,s.M5)(),e.date?e.date=new Date(e.date).getTime()+4800:e.date=(new Date).getTime()+4800,t={...null===(l=(0,s.bh)((0,s.hQ)()))||void 0===l?void 0:l.add_notry_case},t.params={customerId:null===(o=(0,s.bh)((0,s.Ks)()))||void 0===o?void 0:o.clientNotaryId},t.form=e}const n=(0,s.I7)(t),d=await n;d&&!d.error&&oe()}})})]}):(0,c.jsx)("div",{className:"card"})]})})},4424:(e,t,a)=>{a.d(t,{$:()=>i,l:()=>l});let i={date:"Date:08/10/2023",caseNo:"Case Number: 110799956",codeMM:"228860348",KIP:"KIP-105.1",KIPexp:"10/22",h_name:"HECTOR F RICARDO MIRANDA",h_address:"4307 ESTATE DR",h_city:"LOUISVILLE, KY 40216-3952",h_CHFS1:"Cabinet for Health and",h_CHFS2:"Family Services",h_CHFS3:"Department for Community",h_CHFS4:"Based Services",DAYC:"Decision About Your Coverage",hdr11:"Please see below for your household coverage. Coverage is based on the information","hdr11-2":"you gave us.",Wwafc:"Who was approved for coverage",wwa_title_name:"Name",wwa_title_program:"Program",wwa_title_start:"Coverage Start",wwa_title_start2:"Date",wwa_title_end:"Coverage End",wwa_title_end2:"Date",HaveQ:"Have questions? Changes to report?",HaveQ_1:"If you have questions or your household circumstance have changed, you can:",HaveQ_2:"\u2022   Call us at 1-855-459-6328 or 1-855-306-8959; OR",HaveQ_3:"\u2022   Report changes by logging in to Self-Service Portal at",HaveQ_4:"https://kynect.ky.gov/benefits; OR",HaveQ_5:"\u2022   Visit a Department fro Comunity Based Services (DCBS) Office. To find a DCBS",HaveQ_6:"office near you go to https://prd.webapps.chfs.ky.gov/Office_Phone/index.aspx.",NeedHelp:"Need legal help?",NeedHelp_1:"If you want legal help, you may get free legal help from your local office",NeedHelp_2:"1-502-584-1254",webSiteT:"Website: ",webSite:"https://chfs.ky.gov",pageNo:"1 of 2",aEoE:"An Equal Opportunity Employer M/F/D"},l={date:{type:"text",text:"",x:418,y:64,size:12,color:[120,120,120],font:"helvetica",pageNo:0},caseNo:{type:"text",text:"",x:418,y:78,size:12,color:[120,120,120],font:"helvetica",pageNo:0},lineLogo:{type:"line",x:283,y:106,width:1,height:60,pageNo:0,color:[120,120,120]},KIP:{type:"text",text:"",x:74,y:64,size:12,color:[120,120,120],font:"helvetica",pageNo:0},KIPexp:{type:"text",text:"",x:76,y:77,size:12,color:[120,120,120],font:"helvetica",pageNo:0},h_name:{type:"text",text:"",x:78,y:154,size:10,color:[120,120,120],font:"helvetica",pageNo:0},coName:{type:"text",text:"",x:78,y:166,size:10,color:[20,20,20],font:"helvetica",pageNo:0},h_address:{type:"text",text:"",x:78,y:166,size:10,font:"helvetica",pageNo:0},h_city:{type:"text",text:"",x:78,y:176,size:10,font:"helvetica",pageNo:0},h_city2:{type:"text",text:"",x:78,y:186,size:10,font:"helvetica",pageNo:0},h_CHFS1:{type:"text",text:"",x:406,y:156,size:12,font:"helvetica",pageNo:0},h_CHFS2:{type:"text",text:"",x:406,y:170,size:12,font:"helvetica",pageNo:0},h_CHFS3:{type:"text",text:"",x:406,y:184,size:12,font:"helvetica",pageNo:0},h_CHFS4:{type:"text",text:"",x:406,y:198,size:12,font:"helvetica",pageNo:0},codeMM:{type:"text",text:"",x:105,y:141,size:8,font:"helvetica",pageNo:0},codeMM2:{type:"text",text:"MailId: ",x:78,y:141,size:8,font:"helveticaBold",pageNo:0},lineGreen:{type:"line",x:70,y:288,width:460,height:41,pageNo:0,color:[146,208,80]},DAYC:{type:"text",text:"",x:170,y:273,size:17,color:[250,250,250],font:"helveticaBold",pageNo:0},hdr11:{type:"text",text:"",x:70,y:320,size:12,font:"helvetica",pageNo:0},"hdr11-2":{type:"text",text:"",x:70,y:332,size:12,font:"helvetica",pageNo:0},webSiteT:{type:"text",text:"",x:70,y:948,size:10,font:"helvetica",pageNo:0},webSite:{type:"text",text:"",x:110,y:948,size:10,font:"helvetica",color:[60,60,60],pageNo:0},lineWebsite:{type:"line",x:110,y:950,width:80,height:.6,color:[60,60,60]},aEoE:{type:"text",text:"",x:335,y:948,size:10,font:"helvetica",pageNo:0},pageNo:{type:"text",text:"",x:255,y:948,size:11,font:"helvetica",pageNo:0}}},3007:(e,t,a)=>{a.d(t,{D9:()=>c,Oz:()=>d,Y2:()=>r,Zn:()=>p,cc:()=>n});var i=a(6963),l=a(2350),o=a(4e3),s=a(1479);async function n(e,t,a,n){let d=[612,1008],p=(0,l._I)(t);(0,l._2)(e).map((t=>{p[t]&&e[t]?p[t].text=e[t]:delete p[t]}));var r=null;(r=await i.PDFDocument.create(d)).registerFontkit(o.Z);const c=await(0,s.h2)(r);let x=c;const h=await fetch((0,l.bh)("COK.png")).then((e=>e.arrayBuffer())),g=await r.embedPng(h),y=await fetch((0,l.bh)("kynect_logo.png")).then((e=>e.arrayBuffer())),v=await r.embedPng(y);var m=null;m=r.addPage(d);const{width:N,height:f}=m.getSize();if(e.dataMatrix){const t=await fetch(e.dataMatrix).then((e=>e.arrayBuffer())),a=await r.embedPng(t);a&&m.drawImage(a,{x:15,y:f-152,width:30,height:30})}if(g&&m.drawImage(g,{x:202,y:f-112,width:70,height:70}),v&&m.drawImage(v,{x:299,y:f-110,width:100,height:66}),n&&p&&(0,l._2)(p).map((e=>{let t=p[e];if(t){var a;t.pageNo;let e=null===(a=m)||void 0===a?void 0:a.getSize(),o=m;if("textArray"===t.type){let a=0;t.component.map(((s,n)=>{let d=(0,l.fY)(t.text[n]).trim(),p=s.color||[2,2,2],r=s.font&&x[s.font]||c.gSans,h=s.size||10;const g=r.widthOfTextAtSize(d+"",h);let y=a;0===n&&(y=s.x,a=s.x),a=a+g+2,null===o||void 0===o||o.drawText(d,{x:y,y:e.height-s.y,size:h,font:r,color:p?(0,i.rgb)(p[0]/255,p[1]/255,p[2]/255):(0,i.rgb)(0,0,0)})}))}if("text"===t.type){let a=t.color||[2,2,2],l=t.text?t.text.toString():"",s=t.x;if("center"===t.align){const e=(t.font&&x[t.font]||c.gSans).widthOfTextAtSize(l+"",t.size||10);s=t.x+(t.x2-t.x)/2-e/2}null===o||void 0===o||o.drawText(l,{x:s,y:e.height-t.y,size:t.size||10,font:t.font&&x[t.font]||c.gSans,color:a?(0,i.rgb)(a[0]/255,a[1]/255,a[2]/255):(0,i.rgb)(0,0,0)})}else if("checkBox"===t.type){let a=(null===e||void 0===e?void 0:e.height)-t.y,l="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z";null===o||void 0===o||o.moveTo(t.x+2,a),null===o||void 0===o||o.drawSvgPath(l,{borderColor:t.color?(0,i.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,i.rgb)(0,0,0),borderWidth:1,scale:.5})}else if("line"===t.type){let a=t.color||[25,25,25];null===o||void 0===o||o.drawRectangle({x:t.x,y:e.height-t.y,width:t.width,height:t.height,color:a?(0,i.rgb)(a[0]/255,a[1]/255,a[2]/255):(0,i.rgb)(0,0,0)})}else if("multi_line"===t.type){let a=t.text?t.text.toString():"",l=t.lineHeight||10;const s=(0,i.layoutMultilineText)(a,{alignment:"left",font:t.font&&x[t.font]||c.gSans,fontSize:t.size||9,lineHeight:l,bounds:{width:N-20,height:500}});let n=e.height-t.y;for(let e=0;e<s.lines.length;e++)o.drawText("".concat(s.lines[e].text),{x:t.x,y:n,size:t.size||9,maxWidth:N-20,font:t.font&&x[t.font]||c.gSans,color:t.color?(0,i.rgb)(t.color[0]/255,t.color[1]/255,t.color[2]/255):(0,i.rgb)(0,0,0)}),n-=l;return n}}})),e.todayDate){const e=(0,l.bh)("b64_signature");if(e){const t=await fetch(e).then((e=>e.arrayBuffer())),a=await r.embedPng(t);a&&m.drawImage(a,{x:60,y:f-780,width:60,height:30})}}if(r.setTitle("Decision about your coverage"),r.setAuthor("Stephanie Solution Group"),r.setCreator("Stephanie Solution Group"),r.setCreationDate(new Date),r.setModificationDate(new Date),a){const e=await r.save();return(0,s.ou)(e)}return r.saveAsBase64({dataUri:!0})}const d=e=>{let t=105;return{HaveQLineBG:{type:"line",x:70,y:e,width:255,height:30,pageNo:0,color:[1,1,1]},HaveQ:{type:"text",text:"",x:77,y:e-11,size:14,font:"helveticaBold",color:[250,250,250],pageNo:0},HaveQLineV1:{type:"line",x:70,y:e+t,width:1,height:t,pageNo:0,color:[1,1,1]},HaveQLineV4:{type:"line",x:540,y:e+t,width:1,height:t,pageNo:0,color:[1,1,1]},HaveQLineH1:{type:"line",x:70,y:e,width:471,height:1,pageNo:0,color:[1,1,1]},HaveQLineH2:{type:"line",x:70,y:e+t,width:470,height:1,pageNo:0,color:[1,1,1]},HaveQ_1:{type:"text",text:"",x:77,y:e+15,size:12,font:"helvetica",pageNo:0},HaveQ_2:{type:"text",text:"",x:85,y:e+35,size:12,font:"helvetica",pageNo:0},HaveQ_3:{type:"text",text:"",x:85,y:e+50,size:12,font:"helvetica",pageNo:0},HaveQ_4:{type:"text",text:"",x:98,y:e+65,size:12,font:"helvetica",pageNo:0},lineHaveQ_4:{type:"line",x:97,y:e+67,width:159,height:1,pageNo:0},HaveQ_5:{type:"text",text:"",x:85,y:e+80,size:12,font:"helvetica",pageNo:0},HaveQ_6:{type:"text",text:"",x:98,y:e+95,size:12,font:"helvetica",pageNo:0}}},p=e=>({NeedHelpLineBG:{type:"line",x:70,y:e,width:255,height:30,pageNo:0,color:[1,1,1]},NeedHelp:{type:"text",text:"",x:77,y:e-11,size:14,font:"helveticaBold",color:[250,250,250],pageNo:0},NeedHelpLineV1:{type:"line",x:70,y:e+40,width:1,height:40,pageNo:0,color:[1,1,1]},NeedHelpLineV4:{type:"line",x:540,y:e+40,width:1,height:40,pageNo:0,color:[1,1,1]},NeedHelpLineH1:{type:"line",x:70,y:e,width:471,height:1,pageNo:0,color:[1,1,1]},NeedHelpLineH2:{type:"line",x:70,y:e+40,width:470,height:1,pageNo:0,color:[1,1,1]},NeedHelp_1:{type:"text",text:"",x:77,y:e+15,size:12,font:"helvetica",pageNo:0},NeedHelp_2:{type:"text",text:"",x:77,y:e+30,size:12,font:"helvetica",pageNo:0}}),r=(e,t)=>({WwafcLine:{type:"line",x:70,y:e,width:227,height:30,pageNo:0,color:[1,1,1]},Wwafc:{type:"text",text:"",x:77,y:e-11,size:14,font:"helveticaBold",color:[250,250,250],pageNo:0},WwafcLineV1:{type:"line",x:70,y:e+45,width:1,height:45,pageNo:0,color:[1,1,1]},WwafcLineV2:{type:"line",x:190,y:e+45,width:1,height:45,pageNo:0,color:[1,1,1]},WwafcLineV3:{type:"line",x:300,y:e+45,width:1,height:45,pageNo:0,color:[1,1,1]},WwafcLineV4:{type:"line",x:420,y:e+45,width:1,height:45,pageNo:0,color:[1,1,1]},WwafcLineV5:{type:"line",x:540,y:e+45,width:1,height:45,pageNo:0,color:[1,1,1]},WwafcLineH1:{type:"line",x:70,y:e,width:471,height:1,pageNo:0,color:[1,1,1]},WwafcLineH2:{type:"line",x:70,y:e+45,width:470,height:1,pageNo:0,color:[1,1,1]},wwa_title_name:{type:"text",text:"",align:"center",x:72,x2:190,y:e+15,size:12.5,font:"helveticaBold",pageNo:0},wwa_title_program:{type:"text",text:"",align:"center",x:191,x2:299,y:e+15,size:12.5,font:"helveticaBold",pageNo:0},wwa_title_start:{type:"text",text:"",align:"center",x:301,x2:419,y:e+15,size:12.5,font:"helveticaBold",pageNo:0},wwa_title_start2:{type:"text",text:"",align:"center",x:301,x2:419,y:e+32,size:12.5,font:"helveticaBold",pageNo:0},wwa_title_end:{type:"text",text:"",align:"center",x:419,x2:540,y:e+15,size:12.5,font:"helveticaBold",pageNo:0},wwa_title_end2:{type:"text",text:"",align:"center",x:419,x2:540,y:e+32,size:12.5,font:"helveticaBold",pageNo:0}}),c=(e,t,a,i)=>{let l="Wwa_"+t,o={},s=25+15*(a-1);return console.log(a),console.log(s),o[l+"_LineV1"]={type:"line",x:70,y:e+s,width:1,height:s,pageNo:0,color:[1,1,1]},o[l+"_LineV2"]={type:"line",x:190,y:e+s,width:1,height:s,pageNo:0,color:[1,1,1]},o[l+"_LineV3"]={type:"line",x:300,y:e+s,width:1,height:s,pageNo:0,color:[1,1,1]},o[l+"_LineV4"]={type:"line",x:420,y:e+s,width:1,height:s,pageNo:0,color:[1,1,1]},o[l+"_LineV5"]={type:"line",x:540,y:e+s,width:1,height:s,pageNo:0,color:[1,1,1]},o[l+"_LineH1"]={type:"line",x:70,y:e,width:471,height:1,pageNo:0,color:[1,1,1]},o[l+"_LineH2"]={type:"line",x:70,y:e+s,width:470,height:1,pageNo:0,color:[1,1,1]},o[l+"_name"]={type:"text",text:"",x:72,x2:190,y:e+15,size:12.5,align:"center",font:"helvetica",pageNo:0},a>1&&(o[l+"_name2"]={type:"text",text:"",align:"center",x:72,x2:190,y:e+30,size:12.5,font:"helvetica",pageNo:0}),a>2&&(o[l+"_name3"]={type:"text",text:"",x:72,x2:190,y:e+45,size:12.5,align:"center",font:"helvetica",pageNo:0}),a>3&&(o[l+"_name4"]={type:"text",text:"",x:72,x2:190,y:e+60,size:12.5,align:"center",font:"helvetica",pageNo:0}),o[l+"_program"]={type:"text",text:"",x:190,x2:300,y:e+15,size:12.5,align:"center",font:"helvetica",pageNo:0},i&&(o[l+"_program2"]={type:"text",text:"",x:190,x2:300,y:e+30,size:11.5,align:"center",font:"helvetica",pageNo:0},o[l+"_program3"]={type:"text",text:"",x:190,x2:300,y:e+45,size:12.5,align:"center",font:"helvetica",pageNo:0}),o[l+"_start"]={type:"text",text:"",x:300,x2:420,y:e+15,size:12.5,align:"center",font:"helvetica",pageNo:0},o[l+"_end"]={type:"text",text:"",x:420,x2:540,y:e+15,size:12.5,align:"center",font:"helvetica",pageNo:0},o}}}]);
//# sourceMappingURL=6526.01a13eca.chunk.js.map