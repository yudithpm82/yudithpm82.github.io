"use strict";(self.webpackChunkstephanie_solution=self.webpackChunkstephanie_solution||[]).push([[2137],{2137:(e,a,l)=>{l.r(a),l.d(a,{default:()=>x});var s=l(2791),i=l(2350),n=l(2647),t=(l(2004),l(9760)),d=l(7070),r=l(5408),c=l(15),o=l(184);const h=(0,n.PU)(),v=(0,n.YZ)(),m=e=>{let{onConfirm:a,onCancel:l,init:n,last:t,isRange:d,appoitmentType:r}=e;const[c,h]=(0,s.useState)(n),[v,m]=(0,s.useState)(t),[x,p]=(0,s.useState)(!1),[_,j]=(0,s.useState)(!1),[y,f]=(0,s.useState)(null),N=()=>{_?j(!1):l()};return(0,o.jsxs)("div",{className:"dateBox darkmode",children:[(0,o.jsx)("div",{className:"date_header_box",children:(0,o.jsx)("div",{className:"date_header_title",children:d?"Select Ranges":"Escojer Dia"})}),(0,o.jsxs)("div",{className:"_dsplFlx date_calendar_header",children:[(0,o.jsx)("div",{className:"date_range_title",children:c?(0,i.kj)(c):"Start Date"}),d?(0,o.jsx)("div",{className:"date_range_space_title",children:" - "}):null,d?(0,o.jsx)("div",{className:"date_range_title",children:v?(0,i.kj)(v):"End Date"}):null,(0,o.jsx)("div",{className:"flexSpace"})]}),_?(0,o.jsx)(g,{onChange:f,date:c,selected:y,close:N}):(0,o.jsx)(u,{onChangeDate:e=>{r?(m(null),p(!0),h(e),j(!0)):d&&x&&e>c?(m(e),p(!1)):(h(e),m(null),p(!0))},init:c,last:v,isRange:d,appoitmentType:r}),(0,o.jsxs)("div",{className:"_dsplFlx calendar_action_group",children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("div",{onClick:N,size:40,className:"_dsplFlx",children:(0,o.jsx)("div",{className:"btn_cal_cancel",children:"Cancel"})}),(0,o.jsx)("div",{onClick:()=>{r?(j(!1),a({initDate:c,appTimeSelected:y})):(d&&c&&v||c)&&a({initDate:c,lastDate:v})},children:(0,o.jsx)("div",{className:"_dsplFlx",style:{marginLeft:16,marginRight:8},children:(0,o.jsx)("div",{className:"btn_cal_confirm",children:"OK"})})})]})]})},x=e=>{let{data:a,onConfirm:l,initValue:s,init:i,last:n,isRange:d,appoitmentType:c}=e;(0,r.Z)("fb_upd_changes");return(0,o.jsx)(m,{onConfirm:e=>{null===l||void 0===l||l(e),a.modalID&&(0,t.CloseModal)({id:a.modalID})},onCancel:()=>{a.modalID&&(0,t.CloseModal)({id:a.modalID})},initValue:s,init:i,last:n,isRange:d,appoitmentType:c})},u=e=>{let{init:a,last:l,onChangeDate:n,isRange:t,appoitmentType:r}=e;const[c,v]=(0,s.useState)((new Date).getFullYear()),[m,x]=(0,s.useState)((new Date).getMonth()),[u,_]=(0,s.useState)([]),[g,y]=(0,s.useState)(!1),[f,N]=(0,s.useState)(1);(0,s.useEffect)((()=>{let e=c+"_"+m;return(0,d.hW)(e),_((0,i.ul)(m,c)),setTimeout((()=>{N((0,i.M5)())}),350),()=>{}}),[m,c]);let D=i.f2.es[m+1];const C=e=>{if(m+e>11||m+e<0){let a=m+e>11?0:m+e<0?11:m+e,l=m+e>11?c+1:m+e<0?c-1:c;x(a),v(l)}else x(m+e)};let w=r&&c===(new Date).getFullYear()&&m<=(new Date).getMonth();return(0,o.jsxs)("div",{style:{marginLeft:4},children:[(0,o.jsxs)("div",{className:"_dsplFlx date_calendar_header",children:[(0,o.jsx)("div",{onClick:()=>y(!g),size:40,children:(0,o.jsxs)("div",{className:"_dsplFlx",style:{padding:8},children:[(0,o.jsx)("div",{className:"date_calendar_header_yearmonth",children:D}),(0,o.jsx)("div",{className:"date_calendar_header_yearmonth",children:c}),(0,o.jsx)("div",{style:{paddingHorizontal:2},children:(0,o.jsx)(h,{name:"arrow_drop_down",size:24,color:"var(--light-300)"})})]})}),(0,o.jsx)("div",{className:"flexSpace"}),!g&&(0,o.jsx)("div",{className:"_dsplFlx ".concat(w?"disabled":""),children:(0,o.jsx)("div",{style:{borderRadius:50},children:(0,o.jsx)("div",{style:{padding:"0 2px",marginRight:12},onClick:e=>{w||C(-1)},children:(0,o.jsx)(h,{name:"arrow_left",size:24,color:"var(--light-200)"})})})}),g?null:(0,o.jsx)("div",{className:"_dsplFlx",children:(0,o.jsx)("div",{style:{borderRadius:50},children:(0,o.jsx)("div",{style:{padding:"0 2px"},onClick:()=>C(1),children:(0,o.jsx)(h,{name:"arrow_right",size:24,color:"var(--light-200)"})})})})]}),g?(0,o.jsx)(j,{year:c,onChange:e=>{v(e),y(!1)}}):(0,o.jsx)(p,{year:c,month:m,calendarData:u,onChange:e=>{const a=e&&new Date(c,m,e).getTime();a&&n(a)},init:a,last:l,range:t,appoitmentType:r})]})},p=e=>{let{year:a,month:l,calendarData:s,onChange:n,init:t,last:d,range:r,appoitmentType:c}=e,h=864e5,v=Math.floor(t/h),m=Math.floor(d/h),x=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()),u=(0,i.bh)("AppointmentsDates");return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"_dsplFlx date_calendar_week_title",children:i.$l.en.map(((e,a)=>(0,o.jsx)("div",{className:"date_calendar_week_title_day",children:e},e+"_"+a)))}),(0,o.jsx)("div",{style:{minHeight:282},children:s.map(((e,s)=>(0,o.jsx)("div",{className:"_dsplFlx",children:e.map(((e,t)=>{var d;let p=e.day,j=new Date(a,l,p),g=c&&x>j,y=Math.floor(j/h),f=p&&y>v&&y<m,N=p&&y===v,D=p&&y===m,C=e.isToday;const w=e=>{var a;((null===(a=(0,i.bh)((0,i.nc)()))||void 0===a?void 0:a.isAdmin)||b>0||k&&(0,i._2)(k).filter((e=>{var a,l;return(null===(a=k[e])||void 0===a?void 0:a.userId)===(null===(l=(0,i.bh)((0,i.nc)()))||void 0===l?void 0:l.userId)}))[0])&&!g&&((0,i.Rz)("isTodayPickApp",C),n(e))};let k=null===u||void 0===u?void 0:u[a+"_"+l+"_"+p],b=(k&&(null===(d=(0,i._2)(k))||void 0===d||d.length),p&&!g&&_(k,C));return(0,o.jsx)("div",{className:"day_wrp ".concat(p?"":" empty_day"," ").concat(g?" disable_day":"").concat(r?" range":"").concat(C?" isToday":"").concat(p&&D?" lastActiveDay":"").concat(p&&N?" firstActiveDay":"").concat(f?" isSelected":""),children:(0,o.jsxs)("div",{className:"day_cal ",onClick:()=>w(p),children:[(0,o.jsx)("div",{className:"day_num ",children:p}),(0,o.jsx)("div",{className:"apps_left",children:b||""})]})},t+"_day_"+s)}))},"week_"+s)))})]})},_=(e,a)=>{let l=[11,13,15,17];if(null!==e&&void 0!==e&&e.isDayOff)return 0;if(a){let a=(new Date).getHours();if(a>17)return null;if(a>11&&a<17){let l=0;return e&&(0,i._2)(e).map((e=>{1*e.split("_")[1]>a&&(l+=1)})),Math.ceil((17-a)/2)-l}return l.length-(e?(0,i._2)(e).length:0)}return l.length-(e?(0,i._2)(e).length:0)},j=e=>{let{year:a,onChange:l}=e,i=Array.from({length:9},((e,a)=>a+((new Date).getFullYear()-0))),n=(0,s.useRef)();return(0,s.useEffect)((()=>(setTimeout((()=>{let e=41.6*(16+(a-(new Date).getFullYear())/3);n.current.scrollTo({x:e,y:0,animated:!0})}),20),()=>{})),[a]),(0,o.jsx)("div",{children:(0,o.jsx)("div",{ref:n,style:{maxHeight:"70vh"},className:"scrollV",children:(0,o.jsx)("div",{className:"_dsplFlx year_wrp",children:i.map((e=>(0,o.jsx)("div",{className:"year_tag",onClick:()=>l(e),children:(0,o.jsx)("div",{className:"year-itm".concat(e===a?" activeYear":""," "),children:(0,o.jsx)("div",{className:"y_num",children:e})})},e)))})})})},g=e=>{let{date:a,selected:l,onChange:n,close:r}=e,h=new Date(a),m=h.getFullYear(),x=h.getMonth(),u=h.getDate(),p=(new Date).getHours(),j=(0,i.bh)("isTodayPickApp"),g={11:"11:00AM-12:59PM",13:"1:00-2:59 PM",15:"3:00-4:59 PM",17:"5:00-6:59 PM"},f=((0,s.useRef)(),(0,i.bh)("AppointmentsDates")),N=m+"_"+x+"_"+u,D=null===f||void 0===f?void 0:f[N];_(D,j);const C=()=>D&&(0,i._2)(D).filter((e=>{var a,l;return(null===(a=D[e])||void 0===a?void 0:a.userId)===(null===(l=(0,i.bh)((0,i.nc)()))||void 0===l?void 0:l.userId)}))[0];let w=C();const k=()=>{let e=1*(null===w||void 0===w?void 0:w.split("_")[1]),a=null===g||void 0===g?void 0:g[e];return(j?p<e&&a:a)&&(0,o.jsxs)("div",{children:["Tiene una cita programada ",(0,o.jsxs)("span",{children:["(",a,")"]})," "]})},b=e=>{let a=g[w.split("_")[1]],l={zIndex:950,height:"80vh",props:{minHeight:"1vh",overlay:!0}};l.content=(0,o.jsx)(y,{date:h,hour:a,confirm:()=>{return a=e,void(0,d.Fv)(m+"_"+x,N,"app_"+a);var a}}),(0,t.OpenModal)(l)};return(0,o.jsxs)("div",{className:"hourlyPicker",children:[(0,i.bh)("isAdmin")?(0,o.jsxs)("div",{className:"_dsplFlx ",style:{margin:"4px 7px 15px"},children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)(v,{initvalue:null===D||void 0===D?void 0:D.isDayOff,keyCode:77,updChange:e=>{return a=e,(0,d.K1)(m+"_"+x,N,{isDayOff:a}),void r();var a},color:"var(--primary-hover)"}),(0,o.jsx)("span",{className:"checklabel",style:{marginLeft:6},children:"Dia Off "})]}):null,!(0,i.bh)("isAdmin")&&k()&&(0,o.jsx)("div",{className:"title_appts_confirmed",children:k()}),(0,o.jsx)("div",{className:"_dsplFlx year_wrp",children:!(null!==D&&void 0!==D&&D.isDayOff)&&[11,13,15,17].map(((e,a)=>{var s;let t=null===D||void 0===D?void 0:D["app_"+e],d=(null===t||void 0===t?void 0:t.userId)===(null===(s=(0,i.bh)((0,i.nc)()))||void 0===s?void 0:s.userId);return j&&p>e?null:t&&!d?(0,o.jsx)("div",{className:"year_tag ".concat(t?"hasTaken":"")},e):(0,o.jsx)("div",{className:"year_tag ".concat(t?"hasTaken":"").concat(d?" youAlreadyHave":""),onClick:()=>(e=>{var a,l;let s=C(),t=(null===D||void 0===D||null===(a=D[s])||void 0===a?void 0:a.userId)===(null===(l=(0,i.bh)((0,i.nc)()))||void 0===l?void 0:l.userId);var d;t&&1*s.split("_")[1]===1*e?b(e):null!==(d=(0,i.bh)((0,i.nc)()))&&void 0!==d&&d.isAdmin?n(e):t?(0,c.OpenToast)({text:"No puede hacer dos reservas el mismo dia",timeout:1500}):n(e)})(e),children:(0,o.jsx)("div",{className:"year-itm".concat(e===l?" activeYear":""),children:(0,o.jsx)("div",{className:"y_num",children:t?d?"reservado ":"-":g[e]})})},e)}))})]})},y=e=>{let{data:a,date:l,hour:s,confirm:n}=e;const d=()=>{a.modalID&&(0,t.CloseModal)({id:a.modalID})};return(0,o.jsxs)("div",{type:"Free",className:"idfmDQ",children:[(0,o.jsx)("div",{className:" gPHWco",children:(0,o.jsx)("div",{className:"dcXXTq ",children:(0,o.jsx)("div",{className:"eKdSaJ",children:(0,o.jsxs)("div",{className:" jVaMjA dBwXbT",children:[(0,o.jsx)("div",{className:" date_calendar_header_yearmonth title_cancel_app",children:"Desea cancelar su cita  "}),(0,o.jsxs)("div",{className:"_dsplFlx date_calendar_header",children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("span",{children:(0,i.sG)(l)}),(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("span",{style:{marginLeft:16},children:s}),(0,o.jsx)("div",{className:"flexSpace"})]})]})})})}),(0,o.jsxs)("div",{className:"_dsplFlx calendar_action_group",children:[(0,o.jsx)("div",{className:"flexSpace"}),(0,o.jsx)("div",{onClick:d,className:"_dsplFlx",children:(0,o.jsx)("div",{className:"btn_cal_cancel",children:"Cancel"})}),(0,o.jsx)("div",{onClick:()=>{d(),n()},children:(0,o.jsx)("div",{className:"_dsplFlx",style:{marginLeft:16,marginRight:8},children:(0,o.jsx)("div",{className:"btn_cal_confirm",children:"Confirmar"})})})]})]})}},5408:(e,a,l)=>{l.d(a,{Z:()=>n});var s=l(2791),i=l(2350);const n=e=>{const[a,l]=(0,s.useState)("");return(0,s.useEffect)((()=>{const a=a=>l((a=>{let l=(0,i.bh)("lastTimeCall_"+e)||0;return Date.now()>l&&((0,i.Rz)("lastTimeCall_"+e,Date.now()+90),a.detail.id===e)?a.detail.hash:""})(a));return document.addEventListener(e,a),()=>{document.removeEventListener(e,a)}}),[e]),a}},2004:()=>{}}]);
//# sourceMappingURL=2137.ea8cdee8.chunk.js.map