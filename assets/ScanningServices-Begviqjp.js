import{OpenToast as o}from"./Toast-CdLFHZaV.js";import{j as q,z as H}from"./index-Cy80XFDb.js";import{g as b}from"./globalSignal-D_sQRpcj.js";import{g as l,f as u,a as d,q as p}from"./Util-DK6KNnW6.js";let m="No se encontro ningun registro o el codigo es incorrecto",R=[400,300,400,300,400],c=[300,80,300,80,300,80,300];const A=e=>{e=e.split("'").join("-");let r=e.split("/");e.split("-").length>3&&(r=e.split("-").join);let t=r?.[0];t.indexOf("2300")===0&&(t="2300"+(t.split("2300")?.[1]).slice(0,5));let a="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const s=new RegExp(a);let i=t.length===13&&s.test(t),g="^[0-9]{4}-[1-9]{4}";const v=new RegExp(g);let y=t.length===9&&v.test(t),I=r.length>4&&t.length===12,f="^Y24[0-9]{6}";const w=new RegExp(f);let k=t.length===9&&w.test(t),x="^[0-9]";const S=new RegExp(x);let C=t.length>6&&t.length<11&&S.test(t);if(i||I||y){let n={idairguide:r?.[0],":search0":r?.[1],":search1":r?.[3]};return i&&(n={idairguide:"175-2383"+t.slice(3,7),":search0":t}),y&&(n={idairguide:"175-2383"+t.slice(0,4),":search0":t}),{params:n,code:1}}else if(C||k)return{txt:t,code:1}},B=async(e,r)=>{let t=A(e),a={timeStamp:new Date().getTime(),latitude:b?.latitude,longitude:b?.longitude,statusId:r,userId:q?.profile?.userId};return t?.params?await L(t.params,a):t?.txt?await N(t.txt,a):(navigator.vibrate(c),{error:{alert:"error",scanData:{consigneeInfo:{ybestate:"Codigo Incorrecto"}}}})},L=async(e,r)=>{let t=await _(e),a=Object.keys(t)?.[0];if(t[a]?.cidentity){let s=h(t[a],r);return navigator.vibrate(500),s}o({text:m,timeout:2500,theme:"red",id:l()}),navigator.vibrate(c)},N=async(e,r)=>{let t=await D(e);if(t?.cidentity){let a=await h(t,r);return navigator.vibrate(500),a}o({text:m,timeout:2500,theme:"red",id:l()}),navigator.vibrate(c)},h=async(e,r)=>{let t=e?.statusHistory||[];if(t.push(r),H?.roles?.[e?.consigneeInfo?.ybestate]?.isActive)if(e?.currentStatus!==r.statusId){let a={statusHistory:t,currentStatus:r.statusId},s={ssg_track_key:e.ssg_track_key,idairguide:e.idairguide},i=await O(s,a),g={tracking:e?.tracking,idairguide:e.idairguide,city:e?.consigneeInfo?.ybcity,estate:e.estate};return{data:{...i,...g}}}else{let a={consigneeInfo:{ybcity:"Fue escaneado",ybestate:e?.consigneeInfo?.ybestate}};return o({text:"FUE ESCANEADO EN "+e?.consigneeInfo?.ybestate,timeout:3500,theme:"orange",id:l()}),navigator.vibrate(R),{error:{alert:"warning",scanData:a}}}else{let a={consigneeInfo:{ybestate:"Zona incorrecta"}};return o({text:"ZONA INCORRECTA",timeout:3500,theme:"orange",id:l()}),navigator.vibrate(c),{error:{alert:"warning",scanData:a}}}},O=async(e,r)=>{let t={params:e,data2update:r},a={...d(p())}[809004];return t={...t,...a},await u(t)},_=async e=>{let r={params:e,fldsQry:["idairguide","currentStatus","ssg_track_key","statusHistory","tracking","estate","city","cidentity","consigneeInfo:ybestate","consigneeInfo:ybcity"]},t={...d(p())}[802001];return r={...r,...t},await u(r)},D=async e=>{let r={params:{id:e}},t={...d(p())}[803001];return r={...r,...t},await u(r)};export{B as h};
