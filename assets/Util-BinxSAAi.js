import{C as i}from"./index-Ci0zXM0r.js";const b=()=>"https://qvamarkets.com/";function w(){for(var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyxz",t=16,r="",a=0;a<t;a++)r+=e.charAt(Math.floor(Math.random()*e.length));return r}const y={},F=(e,t)=>{y[e]=t},O=e=>e?y[e]:y;function C(e){try{return JSON.parse(e),!0}catch{return!1}}function T(e){var t=[];return e&&Object.keys(e).map(r=>{t.push(e[r])}),t}const $=async(e,t,r)=>{for(let a of e.map((n,s)=>()=>t(n,s,e,r)))await a()},B=async e=>{let t="",r=b()+"gql_api",a={method:"post",headers:{"Content-Type":"application/json",Authorization:`${t}`},body:JSON.stringify(e)};try{return(await fetch(r,a)).json()}catch(n){return console.log(n),null}};function m(e,t){try{var r=i.enc.Base64.parse(t),a=null;return a=i.AES.encrypt(e,r,{mode:i.mode.ECB,padding:i.pad.Pkcs7}),a.ciphertext.toString(i.enc.Base64)}catch{return null}}function D(e,t){var r=i.enc.Base64.parse(t),a=i.AES.decrypt(e,r,{mode:i.mode.ECB,padding:i.pad.Pkcs7});return a.toString(i.enc.Utf8)}function x(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));return t?t[2]:null}const L=e=>b()+"gql_api/getStatic?fileName="+e,P=async e=>{const t=JSON.stringify(e);var r={};let a=O("sectionKey");var n=w();let s=m(n,a),u=m(t,n);const c={};c.d=u,c.k=s;var o=JSON.stringify(c),p=x(N());const d=b()+"gql_v9";if(u){var f=await(await fetch(d,{method:"post",headers:{"Accept-Encoding":"gzip, deflate, br","Content-Type":"application/json",Authorization:`${p}`},body:o})).json();const{data:h}=f;if(h&&h.d){let M=D(h.k,a),g=D(h.d,M);C(g)&&(r=JSON.parse(g))}return r}};function S(e){var t=[];if(e)try{t=Object.keys(e)}catch{for(var r in e)t.push(r)}return t}const U=()=>"querys_callback",N=()=>"ssg_logistic_tkn",j={en:["","January","February","March","April","May","June","July","August","September","October","November","December"],es:["","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]};function z(e,t){let r="en";var a=new Date(e);return`${j[r][a.getMonth()+1]} ${a.getDate()}, ${a.getFullYear()}`}function q(e){var t=e?new Date(e):new Date;let r=t.getMonth()+1,a=t.getDate();return`${r>9?r:"0"+r}/${a>9?a:"0"+a}/${t.getFullYear()}`}function V(e){var t=e?new Date(e):new Date;let r=t.getMonth()+1,a=t.getDate();return`${a>9?a:"0"+a}/${r>9?r:"0"+r}/${t.getFullYear()}`}function K(){return new Date().getTime()}const k=(e,t)=>Object.prototype.toString.call(e)===Object.prototype.toString.call(t)?Object.prototype.toString.call(e)==="[object Object]"||Object.prototype.toString.call(e)==="[object Array]"?Object.keys(e).length!==Object.keys(t).length?!1:Object.keys(e).every(function(r){return k(e[r],t[r])}):e===t:!1,G=e=>{if(/([^\u0000-\u00ff])/.test(e))throw Error("String must be ASCII");var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r,a,n,s,u,c,o,p,d=[],f="",l;if(l=e.length%3,l>0)for(;l++<3;)f+="=",e+="\0";for(l=0;l<e.length;l+=3)r=e.charCodeAt(l),a=e.charCodeAt(l+1),n=e.charCodeAt(l+2),s=r<<16|a<<8|n,u=s>>18&63,c=s>>12&63,o=s>>6&63,p=s&63,d[l/3]=t.charAt(u)+t.charAt(c)+t.charAt(o)+t.charAt(p);return e=d.join(""),e=e.slice(0,e.length-f.length)+f,e},H=(e,t,r=!0)=>e&&e.sort((n,s)=>{let u=n[t],c=s[t];return u<c?r?-1:1:u>c?r?1:-1:0}),R={error:{"--err-bx-color":"var(--background-red-ssg)","--err-bx-bgcolor":"var(--background-red35-ssg)",svg:"var(--err-bx-color)",icon:"alert"},success:{"--err-bx-color":"var(--hrm-palette-tertiary60)","--err-bx-bgcolor":"var(--hrm-palette-tertiary90)",svg:"var(--err-bx-color)",icon:"success"},warning:{"--err-bx-color":"#FF6F1D","--err-bx-bgcolor":"#ffdb99",svg:"var(--err-bx-color)",icon:"info"}};function v(e){return e!=null}function A(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}const Q=e=>{let t=[];return e&&S(e).map(r=>{t.push({id:r,label:A(e[r]?.name)})}),t},W=(e,t)=>{let r={};return e&&S(e).map(a=>{let n=e[a]?.[t];r[n]||(r[n]=[]),r[n].push({id:a,label:A(e[a]?.name)})}),r},X=[{label:"United States",id:"USA"},{label:"Cuba",id:"CUB"},{label:"Nicaragua",id:"NIC"},{label:"Mexico",id:"MEX"},{label:"Germany",id:"GRM"},{label:"Panama",id:"PAN"},{label:"Colombia",id:"COL"},{label:"Italy",id:"ITA"},{label:"Venezuela",id:"VEN"},{label:"Suriname",id:"SUR"},{label:"Vietnam",id:"VNM"}];function Z(e){e=Number(e);var t=new Date(e);return`${E[t.getMonth()+1]} ${t.getDate()}, ${t.getFullYear()}`}const ee=(e,t)=>{let r=[],a=[];const n=I(t,e+1),s=new Date(t,e,1).getDay(),c=7-new Date(t,e,n).getDay()-1;for(let o=s;o>0;o--)a.push({day:"",isActive:!1,prevLastDay:!0});for(let o=1;o<=n;o++)o===new Date().getDate()&&e===new Date().getMonth()&&t===new Date().getFullYear()?a.push({day:o,isToday:!0,isActive:!1}):a.push({day:o,isActive:!1}),new Date(t,e,o).getDay()===6&&(r.push(a),a=[]);for(let o=1;o<=c;o++)a.push({day:"",nextDay:!0,isActive:!1}),o===c&&(r.push(a),a=[]);return r};function J(e){return e%100!==0&&(e%4===0||e%400===0)?29:28}function I(e,t){if(!v(e)||!v(t))return null;var r=parseInt(e.toString()),a=parseInt(t.toString());return[0,31,J(r),31,30,31,30,31,31,30,31,30,31][a]}const te={en:["S","M","T","W","T","F","S"],es:["D","L","M","M","J","V","S"]},E=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function re(e){return e=e&&e?.toLowerCase(),e?e.charAt(0).toUpperCase()+e.slice(1):""}export{G as B,S as O,j as _,O as a,B as b,$ as c,T as d,W as e,P as f,w as g,D as h,N as i,L as j,x as k,q as l,k as m,K as n,X as o,Q as p,U as q,V as r,H as s,R as t,F as u,z as v,re as w,Z as x,ee as y,te as z};
