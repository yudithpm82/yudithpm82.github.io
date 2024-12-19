"use strict";(self.webpackChunkstephanie_solution=self.webpackChunkstephanie_solution||[]).push([[3782],{3782:(e,l,s)=>{s.r(l),s.d(l,{default:()=>p});var i=s(2791),a=(s(9283),s(9760)),d=s(2647),n=s(2350),t=s(387),o=s(3566),c=s(8965),r=s(184);const v=(0,d.PU)(),u=(0,d.Vg)(),m=(0,d.pz)(),x=(0,d.tW)(),p=((0,d.A5)(),e=>{var l;let{title:s,description:a}=e;const[,d]=(0,i.useState)(1),o=(0,i.useRef)(null),v=(0,c.g)(!0,(e=>{var l;null===o||void 0===o||null===(l=o.current)||void 0===l||l.setAttribute("loading",e)}));(0,i.useEffect)((()=>{(0,t.yz)(m)}),[]);const m=()=>{v.current=!1,d((0,n.M5)())},p=async(e,l)=>{(0,t.md)(m)};return(0,r.jsxs)("div",{className:" customer_bx_dash\t ",children:[(0,r.jsxs)("div",{className:"_dsplFlx ",children:[(0,r.jsx)("div",{className:"iMTYiw",style:{marginTop:"8px",marginBottom:"28px"},children:"Ordenes"}),(0,r.jsx)("div",{style:{marginTop:"8px"},children:(0,r.jsx)(u,{loadingColor:"var(--primary)",label:"Buscar un cliente",width:360,obs:d,fetchData:p,change:e=>{v.current=!0},callempty:async(e,l)=>{(0,n.Rz)("logistic_orders_list",null),m()},keyFlds:"searchLogOrders"})}),(0,r.jsx)("div",{className:"flexSpace"})]}),(0,r.jsxs)("div",{className:"loading_bx",style:{marginTop:32},ref:o,children:[(0,r.jsxs)("div",{className:"loading_animation_container",style:{marginTop:2},children:[(0,r.jsx)("div",{className:"load_animation",style:{backgroundColor:"var(--primary-blue--backg-30)"}}),(0,r.jsxs)("div",{className:"_dsplFlx ",style:{marginTop:32},children:[(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsxs)("div",{className:"icon_compr _dsplFlx",children:[(0,r.jsx)("div",{className:"lbl_saving",children:"searching ..."}),(0,r.jsx)(x,{stroke:"var(--primary-blue--backg-30)",size:24,strokeW:8})]}),(0,r.jsx)("div",{className:"flexSpace"})]})]}),(0,r.jsx)("div",{className:"clients_container",children:(0,n.bh)("logistic_orders_list")&&(null===(l=(0,n._2)((0,n.bh)("logistic_orders_list")))||void 0===l?void 0:l.map((e=>(0,r.jsx)(_,{data:(0,n.bh)("logistic_orders_list")[e],elmId:e,updFetch:p},e))))})]})]})}),_=e=>{var l,s;let{data:d,updFetch:t}=e;const[c,u]=(0,i.useState)(!1),x=async()=>{var e,l;let s={...null===(e=(0,n.bh)((0,n.hQ)()))||void 0===e?void 0:e.delete_logistic_order};s.params={businessId:null===(l=(0,n.bh)((0,n.nc)()))||void 0===l?void 0:l.businessId,order_lgs_Id:null===d||void 0===d?void 0:d.order_lgs_Id};const i=(0,n.I7)(s),a=await i;a&&!a.error&&t((0,n.M5)())};let p=null===d||void 0===d?void 0:d.beneficiaryId,_=null===(l=(0,n.bh)("beneficiaries_ids"))||void 0===l?void 0:l[p];let g="CUB"===(null===_||void 0===_?void 0:_.countryId)?(0,n.bh)("cuba_flag.png"):(0,n.bh)("usa_flag.png");return(0,r.jsxs)("div",{className:"client_item_box gWXAaj jlytmu",style:{marginBottom:9},children:[(0,r.jsxs)("div",{className:"_dsplFlx",children:[(0,r.jsx)("div",{className:"lbl_tx",children:d.date&&(0,n.sJ)(d.date)}),(0,r.jsx)("div",{className:"lbl_tx tr_bar_35 tex_aleft",style:{marginLeft:9},children:(0,n.fY)(null===_||void 0===_?void 0:_.firstName)+(0,n.fY)(null===_||void 0===_?void 0:_.middleName)+(0,n.fY)(null===_||void 0===_?void 0:_.lastName)}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsxs)("div",{className:"_dsplFlx tr_bar_25",children:[(0,r.jsx)("div",{className:"icon blue30 flag",children:(0,r.jsx)("img",{src:g,alt:"f;ag"})}),(0,r.jsx)("div",{className:"lbl_tx tex_alg_rght",children:null===_||void 0===_||null===(s=_.currentLocation)||void 0===s?void 0:s.state})]}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsxs)("div",{className:"_dsplFlx tr_bar_15",onClick:()=>u(!c),children:[(0,r.jsx)("div",{className:"total_pck",style:{marginLeft:9},children:(0,n._2)(null===d||void 0===d?void 0:d.packages).length}),(0,r.jsx)("div",{className:"icon blue30",children:(0,r.jsx)(v,{name:"open_package_file_outline"})}),(0,r.jsx)("div",{className:"lbl_tx",style:{marginLeft:2},children:"bultos"})]}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"icon blue30",onClick:async e=>{let l=(0,n.bh)((0,n.xW)()),s=[];(0,n._2)(null===d||void 0===d?void 0:d.packages).map((e=>{var i;let a=null===d||void 0===d?void 0:d.packages[e],t=(0,n.fY)(null===_||void 0===_?void 0:_.firstName)+(0,n.fY)(null===_||void 0===_?void 0:_.middleName)+(0,n.fY)(null===_||void 0===_?void 0:_.lastName);t.length>24&&(t=(0,n.fY)(null===_||void 0===_?void 0:_.firstName)+(0,n.fY)(null===_||void 0===_?void 0:_.lastName)),s.push({name:t,orderId:null===d||void 0===d?void 0:d.order_lgs_Id,packageId:e,weight:a.weight,serviceType:a.serviceType.id,state:null===_||void 0===_||null===(i=_.currentLocation)||void 0===i?void 0:i.state,phoneNumber:null===_||void 0===_?void 0:_.phoneNumber,senderphoneNumber:null===l||void 0===l?void 0:l.phoneNumber})}));let i=await(0,o.xb)(s,!0,!0);window.open(i)},children:(0,r.jsx)(v,{name:"printer"})}),(0,r.jsx)("div",{style:{marginLeft:12},className:"icon_delete",onClick:()=>{let e=(0,n.bh)("lastTimeCallModal")||0;if(Date.now()>e){(0,n.Rz)("lastTimeCallModal",Date.now()+320);let e={zIndex:450,height:"40vh",props:{minHeight:"1vh",overlay:!0,closeEvent:()=>{}}};e.content=(0,r.jsx)(m,{confirm:x,lbl_p:"Eliminar Orden",lbl_span:"Una vez eliminado no podra ser recuperado"}),(0,a.OpenModal)(e)}},children:(0,r.jsx)(v,{name:"outline_delete"})})]}),(0,r.jsx)(h,{item:d,show:c,hidde:u})]})},h=e=>{let{item:l,show:s,hidde:i}=e,a=s?60*(0,n._2)(null===l||void 0===l?void 0:l.packages).length+90:0;return(0,r.jsxs)("div",{className:" content_show ".concat(s?"show":""," "),style:{height:a},children:[(0,r.jsx)("div",{style:{paddingTop:30}}),(null===l||void 0===l?void 0:l.packages)&&(0,n._2)(null===l||void 0===l?void 0:l.packages).map(((e,s)=>{var i,a,d,n,t,o,c,u;let m=(1*(null===l||void 0===l||null===(i=l.packages)||void 0===i||null===(a=i[e])||void 0===a?void 0:a.weight)).toFixed(2),x=null===l||void 0===l||null===(d=l.packages)||void 0===d||null===(n=d[e])||void 0===n||null===(t=n.serviceType)||void 0===t?void 0:t.id,p="MLOH"===x?"rocket-launch-outline":"AV1X"===x?"airplane":"EX2MA"===x?"ferry":"";return(0,r.jsxs)("div",{className:"_dsplFlx package_detail_box",children:[(0,r.jsx)("div",{className:"total_pck",style:{marginLeft:9},children:s+1}),(0,r.jsx)("div",{className:"icon blue30",children:(0,r.jsx)(v,{name:"open_package_file_outline"})}),(0,r.jsx)("div",{className:"lbl_tx tr_bar_20 tex_aleft",children:e}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"icon blue30",style:{marginLeft:32},children:(0,r.jsx)(v,{name:"weight-pound"})}),(0,r.jsxs)("div",{className:"lbl_tx",children:[m," Lbs"]}),(0,r.jsx)("div",{className:"flexSpace"}),(0,r.jsx)("div",{className:"icon blue30",style:{marginLeft:32},children:(0,r.jsx)(v,{name:p})}),(0,r.jsx)("div",{className:"lbl_tx tr_bar_20 tex_aleft",style:{marginLeft:2},children:null===l||void 0===l||null===(o=l.packages)||void 0===o||null===(c=o[e])||void 0===c||null===(u=c.serviceType)||void 0===u?void 0:u.label})]},"package_"+e)})),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{paddingTop:30}}),(0,r.jsxs)("div",{className:"_dsplFlx package_detail_box",children:[(0,r.jsx)("div",{className:"flexSpace"}),s?(0,r.jsx)("div",{className:"",onClick:()=>i(!s),children:(0,r.jsx)(v,{name:"key_arrow_up",color:"var(--primary-blue--backg-30)",size:24})}):null,(0,r.jsx)("div",{className:"flexSpace"})]})]})]})}},8965:(e,l,s)=>{s.d(l,{g:()=>a});var i=s(2791);s(184);const a=(e,l,s)=>{const[,a]=(0,i.useState)(e);return(0,i.useRef)(new Proxy({value:e},{get:function(e,l){if(e[l])return e[l]},set:function(e,i,d){return e[i]!==d&&(e[i]=d,l&&l(e[i]),null!==s&&void 0!==s&&s.deep&&a({...e})),!0}})).current}},9283:()=>{}}]);
//# sourceMappingURL=3782.3cfc3446.chunk.js.map