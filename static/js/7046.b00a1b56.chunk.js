"use strict";(self.webpackChunkstephanie_solution=self.webpackChunkstephanie_solution||[]).push([[7046],{7046:(l,e,s)=>{s.r(e),s.d(e,{default:()=>C});var d=s(2791),i=s(9760),a=s(2647),n=s(2350),o=s(5232),t=s(184);const r=(0,a.YZ)(),c=(0,a.Vg)(),v=((0,a.Np)(),async l=>{let e=(0,n.bh)("maps_api_last")||0;if(Date.now()>e){var s;(0,n.Rz)("maps_api_last",Date.now()+1490);let e={...null===(s=(0,n.bh)((0,n.hQ)()))||void 0===s?void 0:s.key_address_places};const d=(0,n.I7)(e),i=await d;if(i){let e=i.apiKey;(0,n.Rz)("YOUR_API_KEY",e),l&&l()}}});const h=function(l){let{data:e,itemClickHandler:s}=l;const[i,a]=(0,d.useState)(0),[,o]=(0,d.useState)(0),[h,p]=(0,d.useState)(!0),u=async l=>{let e={textQuery:l},s={method:"post",headers:{"Content-Type":"application/json","X-Goog-Api-Key":"".concat((0,n.bh)("YOUR_API_KEY")),"X-Goog-FieldMask":"places.id,places.shortFormattedAddress,places.formattedAddress,places.googleMapsUri,places.location,places.addressComponents,places.primaryType,places.types"},body:JSON.stringify(e)};if(l){return(await fetch("https://places.googleapis.com/v1/places:searchText",s)).json()}return{}},x=()=>{(0,n.Rz)("placesList",[]),o((0,n.M5)())};return(0,d.useEffect)((()=>(!i&&v(u),!i&&a(1),()=>{})),[]),(0,t.jsxs)("div",{type:"Free",className:"idfmDQ34",style:{},children:[(0,t.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:4},children:[(0,t.jsx)("span",{className:"checklabel",style:{marginRight:6},children:"Local"}),(0,t.jsx)(r,{initvalue:h,keyCode:37,updChange:p,color:"var(--primary)"}),(0,t.jsx)("span",{className:"checklabel",children:"Google place"})]}),(0,t.jsx)("div",{className:"_dsplFlx spaceAround",children:(0,t.jsx)(c,{loadingColor:"var(--primary)",label:"search",width:620,obs:o,fetchData:async l=>{let e=null;var s;(h&&(e=await u(l)),e)?((null===(s=e)||void 0===s?void 0:s.places)&&(0,n.Rz)("placesList",e.places),o((0,n.M5)())):x()},change:()=>{},callempty:x,keyFlds:"searchQryNotary"})}),(0,t.jsx)("div",{className:"address_list",children:(0,n.bh)("placesList")&&(0,n.bh)("placesList").map((l=>(0,t.jsx)("div",{className:"addressCard",onClick:()=>(async l=>{(0,n.vQ)(l.formattedAddress)})(l),children:l.formattedAddress},l.id)))})]})};var p=s(4327),u=s(1439);const x=(0,a.PU)(),m=(0,a.pz)(),b=(0,a.YZ)(),j=((0,a.n3)(),(0,p.QO)()),y=(0,a.Np)(),g=(0,a.A5)(),_="upd_residences",N="add_residences",C=l=>{var e;let{tabs:s,active:a,updTab:r}=l;const[c,v]=(0,d.useState)(1);(0,d.useEffect)((()=>{var l;let e={...(0,n.bh)((0,n.Ks)())},s=(null===e||void 0===e?void 0:e.residences)||{};Array.isArray(null===(l=(0,n.bh)((0,n.Ks)()))||void 0===l?void 0:l.residences)&&(s=(0,o.p6)(s)),e.residences=s,(0,n.Rz)((0,n.Ks)(),e)}));const p=async l=>{let e={...(0,n.bh)((0,n.Ks)())},s=(null===e||void 0===e?void 0:e.residences)||{};delete s[l],m(s)},u=l=>{let e={...(0,n.bh)((0,n.Ks)())},s=(null===e||void 0===e?void 0:e.residences)||{};s[(0,n.M5)()]=l,m(s)},x=(l,e)=>{let s={...(0,n.bh)((0,n.Ks)())},d=(null===s||void 0===s?void 0:s.residences)||{};d[e]=l,m(d)},m=async(l,e)=>{var s;let d={...(0,n.bh)((0,n.Ks)())},i={...null===(s=(0,n.bh)((0,n.hQ)()))||void 0===s?void 0:s.upd_notary};i.params={clientNotaryId:e||d.clientNotaryId},i.data2update={residences:l};const a=(0,n.I7)(i),o=await a;o&&!o.error&&(d.residences=l,(0,n.Rz)((0,n.Ks)(),d),(0,n.Rz)(N,null),(0,n.Rz)(_,null),v((0,n.M5)()))},b=async l=>{var e,s;let d=null===(e=(0,n.bh)((0,n.Ks)()))||void 0===e?void 0:e.clientNotaryId,i={...null===(s=(0,n.bh)((0,n.hQ)()))||void 0===s?void 0:s.upd_notary};i.params={clientNotaryId:d},i.data2update=l;const a=(0,n.I7)(i),t=await a;if(t&&!t.error){await(0,o.uB)(d);v((0,n.M5)())}};let j=(null===(e=(0,n.bh)((0,n.Ks)()))||void 0===e?void 0:e.residences)||{};return(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{style:{paddingTop:30}}),(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("div",{className:"iMTYiw",style:{marginTop:"8px"},children:"Direcciones"}),(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("div",{className:"iSTOvb kvXcCL",style:{padding:"0 9px",width:"160px"},onClick:()=>{let l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,t.jsx)(A,{confirm:u}),(0,i.OpenModal)(l)},children:"Agregar"})]}),(0,n.bh)("isMobile")?null:(0,t.jsx)(h,{itemClickHandler:l=>{let e={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};e.content=(0,t.jsx)(D,{item:l}),(0,i.OpenModal)(e)}}),(0,t.jsx)("div",{className:"_dsplFlx spaceAround flxWrp ",style:{padding:9},children:j&&(0,n._2)(j).map(((l,e)=>{var s;return(0,t.jsx)(f,{index:e,idKey:l,itm:j[l],updObs:v,update:x,rmv:p,updClient:b,currentAddress:null===(s=(0,n.bh)((0,n.Ks)()))||void 0===s?void 0:s.currentAddress},e+"_address")}))})]})},f=l=>{var e,s,a,o,r;let{itm:c,updObs:v,idKey:h,update:p,rmv:u,updClient:b,currentAddress:y}=l;const[g,N]=(0,d.useState)(!1),C=l=>{(0,n.vQ)(l.toUpperCase())},f=l=>{let e=h;e.lenght<6&&(e=(0,n.M5)()),p(l,e)},A=l=>{u(h)};let D=(0,n.bh)("addressItemActive")===h,k=y===h;return(0,t.jsxs)("div",{className:"client_item_box gWXAaj jlytmu ".concat(D?"active":""," ").concat((0,n.bh)("isMobile")?"mrgVrBx":""),onClick:l=>{(0,n.bh)("addressItemActive")!==h&&(l.stopPropagation(),l.preventDefault(),(0,n.Rz)("addressItemActive",h),v((0,n.M5)()))},children:[(0,t.jsxs)("div",{className:"menu_icon_acc _dsplFlx",children:[(0,t.jsx)("div",{className:"icon_action center_align",children:(0,t.jsx)(x,{name:null!==c&&void 0!==c&&c.isMailAddress?"email":"",color:null!==c&&void 0!==c&&c.isMailAddress?"var(--primary)":""})}),(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsxs)("div",{className:"menu_icon_acc _dsplFlx",children:[(0,t.jsx)("div",{className:"icon_action ",onClick:l=>{b({currentAddress:h})},children:(0,t.jsx)(x,{name:k?"star":"star_outline",color:k?"var(--partial-success)":"var(--text_color_32)"})}),(0,t.jsx)("div",{className:"icon_action",onClick:()=>N(!g),children:(0,t.jsx)(x,{name:"link",color:"var(--light-300)"})}),(0,t.jsx)("div",{className:"icon_action",onClick:()=>{(0,n.Rz)(_,c),(0,n.Rz)(_+"_bck",JSON.parse(JSON.stringify(c)));let l={zIndex:450,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,t.jsx)(w,{confirm:f}),(0,i.OpenModal)(l)},children:(0,t.jsx)(x,{name:"outline_edit",color:"var(--light-300)"})}),(0,t.jsx)("div",{className:"icon_action",onClick:()=>{let l=(0,n.bh)("lastTimeCallModal")||0;if(Date.now()>l){(0,n.Rz)("lastTimeCallModal",Date.now()+320);let l={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};l.content=(0,t.jsx)(m,{confirm:A,lbl_p:"Eliminar Direccion",lbl_span:"Una vez eliminado no podra ser recuperado"}),(0,i.OpenModal)(l)}},children:(0,t.jsx)(x,{name:"outline_delete",color:"var(--light-300)"})})]})]}),g?(0,t.jsx)(j,{onSelect:l=>{if(l.data){let e=l.data,s=(null===e||void 0===e?void 0:e.residences)||{};s[h]=c,(async(l,e)=>{var s;let d={...(0,n.bh)((0,n.Ks)())},i={...null===(s=(0,n.bh)((0,n.hQ)()))||void 0===s?void 0:s.upd_notary};i.params={clientNotaryId:e||d.clientNotaryId},i.data2update={residences:l};const a=(0,n.I7)(i),o=await a;o&&!o.error&&N(!1)})(s,l.id)}},exFlds:["residences"]}):null,(0,t.jsxs)("div",{className:"_dsplFlx ".concat((0,n.bh)("isMobile")?"spaceAround flxWrp":""),children:[(0,t.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,t.jsx)("div",{className:"lbl_h_dtls",children:"Address:"}),(0,t.jsx)("div",{className:"lbl_dtls",onClick:()=>C(null===c||void 0===c?void 0:c.addressLineOne),children:null===c||void 0===c?void 0:c.addressLineOne})]}),null!==c&&void 0!==c&&c.addressLineTwo?(0,t.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,t.jsx)("div",{className:"lbl_h_dtls",children:"Apt:"}),(0,t.jsx)("div",{className:"lbl_dtls",onClick:()=>C(null===c||void 0===c?void 0:c.addressLineTwo),children:null===c||void 0===c?void 0:c.addressLineTwo})]}):null]}),(0,t.jsxs)("div",{className:"_dsplFlx ".concat((0,n.bh)("isMobile")?"spaceAround flxWrp":""),children:[(0,t.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,t.jsx)("div",{className:"lbl_h_dtls",children:"City:"}),(0,t.jsx)("div",{className:"lbl_dtls",onClick:()=>C(null===c||void 0===c?void 0:c.city),children:null===c||void 0===c?void 0:c.city})]}),(0,t.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,t.jsx)("div",{className:"lbl_h_dtls",children:"State:"}),(0,t.jsx)("div",{className:"lbl_dtls",onClick:()=>C(null===c||void 0===c?void 0:c.state),children:null===c||void 0===c?void 0:c.state})]}),(0,t.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,t.jsx)("div",{className:"lbl_h_dtls",children:"ZipCode:"}),(0,t.jsx)("div",{className:"lbl_dtls",onClick:()=>C(null===c||void 0===c?void 0:c.zipcode),children:null===c||void 0===c?void 0:c.zipcode})]})]}),(0,t.jsxs)("div",{className:"_dsplFlx ".concat((0,n.bh)("isMobile")?"spaceAround flxWrp":""),children:[(0,t.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,t.jsx)("div",{className:"lbl_h_dtls",children:"from Date:"}),(0,t.jsx)("div",{className:"lbl_dtls",onClick:()=>{var l;return C(null===c||void 0===c||null===(l=c.fromDate)||void 0===l?void 0:l.month)},children:null===c||void 0===c||null===(e=c.fromDate)||void 0===e?void 0:e.month}),(0,t.jsx)("div",{className:"lbl_dtls",children:"/"}),(0,t.jsx)("div",{className:"lbl_dtls",onClick:()=>{var l;return C(null===c||void 0===c||null===(l=c.fromDate)||void 0===l?void 0:l.year)},children:null===c||void 0===c||null===(s=c.fromDate)||void 0===s?void 0:s.year})]}),(0,t.jsxs)("div",{className:"_dsplFlx dtls",children:[(0,t.jsx)("div",{className:"lbl_h_dtls",children:"to Date:"}),(0,t.jsx)("div",{className:"lbl_dtls",onClick:()=>{var l;return C(null===c||void 0===c||null===(l=c.toDate)||void 0===l?void 0:l.month)},children:null===c||void 0===c||null===(a=c.toDate)||void 0===a?void 0:a.month}),null!==c&&void 0!==c&&null!==(o=c.toDate)&&void 0!==o&&o.month?(0,t.jsx)("div",{className:"lbl_dtls",children:"/"}):null,(0,t.jsx)("div",{className:"lbl_dtls",onClick:()=>{var l;return C(null===c||void 0===c||null===(l=c.toDate)||void 0===l?void 0:l.year)},children:null===c||void 0===c||null===(r=c.toDate)||void 0===r?void 0:r.year})]})]})]})},w=l=>{var e,s,a,o,r,c,v,h,p,x,m,j,N,C,f,w,A,D,k,M,F,T,z;let{data:I,itm:S,active:L,confirm:O}=l;const[R,H]=(0,d.useState)(1),K=(l,e,s)=>{let d=(0,n.bh)(_)||{};s?(d[s]||(d[s]={}),d[s][l]=e):d[l]=e,(0,n.Rz)(_,d),H((0,n.M5)())},W=()=>{(null===I||void 0===I?void 0:I.modalID)&&(0,i.CloseModal)({id:null===I||void 0===I?void 0:I.modalID})};let P=(0,n.vy)(["addressNo","addressStreet","betwen1","betwen2","rpto","isMailAddress","addressLineOne","addressLineTwo","city","state","county","country","zipcode","fromDate","toDate"],(0,n.bh)(_),(0,n.bh)(_+"_bck"));return(0,t.jsxs)("div",{style:{maxHeight:"80vh",width:"960px",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px 32px"},children:[(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("p",{className:"form_title",children:"Actualizar Direccion"}),(0,t.jsx)("div",{className:"flexSpace"})]}),(0,t.jsxs)("div",{className:"_dsplFlx spaceAround",children:[(0,t.jsx)("div",{style:{marginTop:19},children:(0,t.jsx)(g,{init:null===(e=(0,n.bh)(_))||void 0===e?void 0:e.country,lbl_empty:"Pais",list:(0,n.bh)("country_list"),onSelect:l=>K("country",l.id),background:"var(--dark-900)",color:"var(--light-200)",width:"200px"})}),(0,t.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:4},children:[(0,t.jsx)(b,{initvalue:null===(s=(0,n.bh)(_))||void 0===s?void 0:s.isMailAddress,keyCode:37,updChange:l=>K("isMailAddress",l),color:"var(--primary)"}),(0,t.jsx)("span",{className:"checklabel",children:"Is Mail Address"})]})]}),(0,t.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{marginTop:20},children:[(0,t.jsx)("div",{style:{padding:9},children:(0,t.jsx)(y,{init:null===(a=(0,n.bh)(_))||void 0===a?void 0:a.addressLineOne,label:"Calle ",width:520,updChanges:l=>K("addressLineOne",l)})}),(0,t.jsx)("div",{style:{padding:9},children:(0,t.jsx)(y,{init:null===(o=(0,n.bh)(_))||void 0===o?void 0:o.addressLineTwo,label:"Apt (optional)",width:180,updChanges:l=>K("addressLineTwo",l)})})]}),(0,t.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{marginTop:20},children:[(0,t.jsx)(y,{init:null===(r=(0,n.bh)(_))||void 0===r?void 0:r.city,label:"Ciudad o Municipio",width:200,updChanges:l=>K("city",l)}),(0,t.jsx)(y,{init:null===(c=(0,n.bh)(_))||void 0===c?void 0:c.county,label:"County",width:200,updChanges:l=>K("county",l)}),(0,t.jsx)(y,{init:null===(v=(0,n.bh)(_))||void 0===v?void 0:v.state,label:"Estado o Provincia",width:200,updChanges:l=>K("state",l)}),(0,t.jsx)(y,{init:null===(h=(0,n.bh)(_))||void 0===h?void 0:h.zipcode,label:"Codigo Postal",width:90,updChanges:l=>K("zipcode",l)})]}),(0,t.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{marginTop:24},children:[(0,t.jsx)(y,{init:null===(p=(0,n.bh)(_))||void 0===p||null===(x=p.fromDate)||void 0===x?void 0:x.month,label:"Desde (Month)",width:90,updChanges:l=>K("month",l,"fromDate")}),(0,t.jsx)(y,{init:null===(m=(0,n.bh)(_))||void 0===m||null===(j=m.fromDate)||void 0===j?void 0:j.year,label:"Desde (Year)",width:120,updChanges:l=>K("year",l,"fromDate")}),(0,t.jsx)(y,{init:null===(N=(0,n.bh)(_))||void 0===N||null===(C=N.toDate)||void 0===C?void 0:C.month,label:"Hasta (Month)",width:90,updChanges:l=>K("month",l,"toDate")}),(0,t.jsx)(y,{init:null===(f=(0,n.bh)(_))||void 0===f||null===(w=f.toDate)||void 0===w?void 0:w.year,label:"Hasta (Year)",width:120,updChanges:l=>K("year",l,"toDate")})]}),(0,t.jsx)("div",{className:"separator",style:{marginTop:20}}),"CUB"===(null===(A=(0,n.bh)(_))||void 0===A?void 0:A.country)?(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",children:[(0,t.jsx)("div",{style:{padding:9},children:(0,t.jsx)(y,{init:null===(D=(0,n.bh)(_))||void 0===D?void 0:D.addressNo,label:"No",width:120,updChanges:l=>K("addressNo",l)})}),(0,t.jsx)("div",{style:{padding:9},children:(0,t.jsx)(y,{init:null===(k=(0,n.bh)(_))||void 0===k?void 0:k.addressStreet,label:"Calle",width:380,updChanges:l=>K("addressStreet",l)})}),(0,t.jsx)("div",{style:{padding:9},children:(0,t.jsx)(y,{init:null===(M=(0,n.bh)(_))||void 0===M?void 0:M.addressLineTwo,label:"Apt (optional)",width:180,updChanges:l=>K("addressLineTwo",l)})}),(0,t.jsx)("div",{style:{padding:9},children:(0,t.jsx)(y,{init:null===(F=(0,n.bh)(_))||void 0===F?void 0:F.betwen1,label:"entre 1",width:240,updChanges:l=>K("betwen1",l)})}),(0,t.jsx)("div",{style:{padding:9},children:(0,t.jsx)(y,{init:null===(T=(0,n.bh)(_))||void 0===T?void 0:T.betwen2,label:"entre 2",width:240,updChanges:l=>K("betwen2",l)})}),(0,t.jsx)("div",{style:{padding:9},children:(0,t.jsx)(y,{init:null===(z=(0,n.bh)(_))||void 0===z?void 0:z.rpto,label:"Reparto",width:240,updChanges:l=>K("rpto",l)})})]})}):null,null!==P&&void 0!==P&&P.hasChange?(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(u.N,{color:"#007bfc",label:"Actualizar",clickHandler:async()=>{let l=(0,n.bh)(_);O&&O(l),W()}})})]}):(0,t.jsx)("div",{className:"card"})]})},A=l=>{var e,s,a,o,r,c,v,h,p,x,m,j,_,C,f;let{data:w,confirm:A}=l;const[D,k]=(0,d.useState)(1),M=(l,e,s)=>{let d=(0,n.bh)(N)||{};s?(d[s]||(d[s]={}),d[s][l]=e):d[l]=e,(0,n.Rz)(N,d),k((0,n.M5)())},F=()=>{(null===w||void 0===w?void 0:w.modalID)&&(0,i.CloseModal)({id:null===w||void 0===w?void 0:w.modalID})};return(0,t.jsxs)("div",{style:{maxHeight:"80vh",width:"820px",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("p",{className:"form_title",children:"Agregar Direccion"}),(0,t.jsx)("div",{className:"flexSpace"})]}),(0,t.jsxs)("div",{className:"_dsplFlx spaceAround",children:[(0,t.jsx)(g,{init:null===(e=(0,n.bh)(N))||void 0===e?void 0:e.country,lbl_empty:"Pais",list:(0,n.bh)("country_list"),width:"250px",onSelect:l=>M("country",l.id),background:"var(--dark-900)",color:"var(--light-200)"}),(0,t.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:4},children:[(0,t.jsx)(b,{initvalue:null===(s=(0,n.bh)(N))||void 0===s?void 0:s.isMailAddress,keyCode:37,updChange:l=>M("isMailAddress",l),color:"var(--primary)"}),(0,t.jsx)("span",{className:"checklabel",children:"Is Mail Address"})]})]}),(0,t.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{marginTop:20},children:[(0,t.jsx)(y,{init:null===(a=(0,n.bh)(N))||void 0===a?void 0:a.addressLineOne,label:"Calle ",width:520,updChanges:l=>M("addressLineOne",l)}),(0,t.jsx)(y,{init:null===(o=(0,n.bh)(N))||void 0===o?void 0:o.addressLineTwo,label:"Apt (optional)",width:180,updChanges:l=>M("addressLineTwo",l)})]}),(0,t.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{marginTop:20},children:[(0,t.jsx)(y,{init:null===(r=(0,n.bh)(N))||void 0===r?void 0:r.city,label:"Ciudad o Municipio",width:200,updChanges:l=>M("city",l)}),(0,t.jsx)(y,{init:null===(c=(0,n.bh)(N))||void 0===c?void 0:c.state,label:"Estado o Provincia",width:200,updChanges:l=>M("state",l)}),(0,t.jsx)(y,{init:null===(v=(0,n.bh)(N))||void 0===v?void 0:v.zipcode,label:"Codigo Postal",width:90,updChanges:l=>M("zipcode",l)})]}),(0,t.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{marginTop:24},children:[(0,t.jsx)(y,{init:null===(h=(0,n.bh)(N))||void 0===h||null===(p=h.fromDate)||void 0===p?void 0:p.month,label:"Desde (Month)",width:90,updChanges:l=>M("month",l,"fromDate")}),(0,t.jsx)(y,{init:null===(x=(0,n.bh)(N))||void 0===x||null===(m=x.fromDate)||void 0===m?void 0:m.year,label:"Desde (Year)",width:120,updChanges:l=>M("year",l,"fromDate")}),(0,t.jsx)(y,{init:null===(j=(0,n.bh)(N))||void 0===j||null===(_=j.toDate)||void 0===_?void 0:_.month,label:"Hasta (Month)",width:90,updChanges:l=>M("month",l,"toDate")}),(0,t.jsx)(y,{init:null===(C=(0,n.bh)(N))||void 0===C||null===(f=C.toDate)||void 0===f?void 0:f.year,label:"Hasta (Year)",width:120,updChanges:l=>M("year",l,"toDate")})]}),(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(u.N,{color:"#007bfc",label:"Agregar",clickHandler:async()=>{let l=(0,n.bh)(N);A&&A(l),F()}})})]})]})},D=l=>{var e,s,a,o,r,c,v,h,p,x,m,j,_,C,f;let{data:w,item:A,confirm:D}=l;const[k,M]=(0,d.useState)(1),F=(l,e,s)=>{let d=(0,n.bh)(N)||{};s?(d[s]||(d[s]={}),d[s][l]=e):d[l]=e,(0,n.Rz)(N,d),M((0,n.M5)())},T=()=>{(null===w||void 0===w?void 0:w.modalID)&&(0,i.CloseModal)({id:null===w||void 0===w?void 0:w.modalID})};return(0,t.jsxs)("div",{style:{maxHeight:"80vh",width:"820px",overflow:"auto",background:"var(--dark-800)",borderRadius:13,padding:"10px 19px"},children:[(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("p",{className:"form_title",children:"Agregar Direccion"}),(0,t.jsx)("div",{className:"flexSpace"})]}),(0,t.jsx)("div",{className:"_dsplFlx spaceAround",children:(0,t.jsx)(g,{init:null===(e=(0,n.bh)(N))||void 0===e?void 0:e.country,lbl_empty:"Pais",list:(0,n.bh)("country_list"),width:"250px",onSelect:l=>F("country",l.id),background:"var(--dark-900)",color:"var(--light-200)"})}),(0,t.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:4},children:[(0,t.jsx)(b,{initvalue:null===(s=(0,n.bh)(N))||void 0===s?void 0:s.isMailAddress,keyCode:37,updChange:l=>F("isMailAddress",l),color:"var(--primary)"}),(0,t.jsx)("span",{className:"checklabel",children:"Is Mail Address"})]}),(0,t.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{marginTop:20},children:[(0,t.jsx)(y,{init:null===(a=(0,n.bh)(N))||void 0===a?void 0:a.addressLineOne,label:"Calle ",width:520,updChanges:l=>F("addressLineOne",l)}),(0,t.jsx)(y,{init:null===(o=(0,n.bh)(N))||void 0===o?void 0:o.addressLineTwo,label:"Apt (optional)",width:180,updChanges:l=>F("addressLineTwo",l)})]}),(0,t.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{marginTop:20},children:[(0,t.jsx)(y,{init:null===(r=(0,n.bh)(N))||void 0===r?void 0:r.city,label:"Ciudad o Municipio",width:200,updChanges:l=>F("city",l)}),(0,t.jsx)(y,{init:null===(c=(0,n.bh)(N))||void 0===c?void 0:c.state,label:"Estado o Provincia",width:200,updChanges:l=>F("state",l)}),(0,t.jsx)(y,{init:null===(v=(0,n.bh)(N))||void 0===v?void 0:v.zipcode,label:"Codigo Postal",width:90,updChanges:l=>F("zipcode",l)})]}),(0,t.jsxs)("div",{className:"_dsplFlx spaceAround flxWrp",style:{marginTop:24},children:[(0,t.jsx)(y,{init:null===(h=(0,n.bh)(N))||void 0===h||null===(p=h.fromDate)||void 0===p?void 0:p.month,label:"Desde (Month)",width:90,updChanges:l=>F("month",l,"fromDate")}),(0,t.jsx)(y,{init:null===(x=(0,n.bh)(N))||void 0===x||null===(m=x.fromDate)||void 0===m?void 0:m.year,label:"Desde (Year)",width:120,updChanges:l=>F("year",l,"fromDate")}),(0,t.jsx)(y,{init:null===(j=(0,n.bh)(N))||void 0===j||null===(_=j.toDate)||void 0===_?void 0:_.month,label:"Hasta (Month)",width:90,updChanges:l=>F("month",l,"toDate")}),(0,t.jsx)(y,{init:null===(C=(0,n.bh)(N))||void 0===C||null===(f=C.toDate)||void 0===f?void 0:f.year,label:"Hasta (Year)",width:120,updChanges:l=>F("year",l,"toDate")})]}),(0,t.jsxs)("div",{className:"_dsplFlx ",children:[(0,t.jsx)("div",{className:"flexSpace"}),(0,t.jsx)("div",{className:"card",children:(0,t.jsx)(u.N,{color:"#007bfc",label:"Agregar",clickHandler:async()=>{let l=(0,n.bh)(N);D&&D(l),T()}})})]})]})}}}]);
//# sourceMappingURL=7046.b00a1b56.chunk.js.map