import{C as i}from"./index-Ci0zXM0r.js";const h=()=>"https://qvamarkets.com/";function M(){for(var e="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyxz",t=16,r="",a=0;a<t;a++)r+=e.charAt(Math.floor(Math.random()*e.length));return r}const d={},B=(e,t)=>{d[e]=t},w=e=>e?d[e]:d;function C(e){try{return JSON.parse(e),!0}catch{return!1}}function F(e){var t=[];return e&&Object.keys(e).map(r=>{t.push(e[r])}),t}const L=async(e,t,r)=>{for(let a of e.map((n,s)=>()=>t(n,s,e,r)))await a()},P=async e=>{let t="",r=h()+"gql_api",a={method:"post",headers:{"Content-Type":"application/json",Authorization:`${t}`},body:JSON.stringify(e)};try{return(await fetch(r,a)).json()}catch(n){return console.log(n),null}};function m(e,t){try{var r=i.enc.Base64.parse(t),a=null;return a=i.AES.encrypt(e,r,{mode:i.mode.ECB,padding:i.pad.Pkcs7}),a.ciphertext.toString(i.enc.Base64)}catch{return null}}function v(e,t){var r=i.enc.Base64.parse(t),a=i.AES.decrypt(e,r,{mode:i.mode.ECB,padding:i.pad.Pkcs7});return a.toString(i.enc.Utf8)}function x(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]+)"));return t?t[2]:null}const U=e=>h()+"gql_api/getStatic?fileName="+e,$=async e=>{const t=JSON.stringify(e);var r={};let a=w("sectionKey");var n=M();let s=m(n,a),u=m(t,n);const c={};c.d=u,c.k=s;var o=JSON.stringify(c),p=x(N());const y=h()+"gql_v9";if(u){var f=await(await fetch(y,{method:"post",headers:{"Accept-Encoding":"gzip, deflate, br","Content-Type":"application/json",Authorization:`${p}`},body:o})).json();const{data:b}=f;if(b&&b.d){let O=v(b.k,a),g=v(b.d,O);C(g)&&(r=JSON.parse(g))}return r}};function S(e){var t=[];if(e)try{t=Object.keys(e)}catch{for(var r in e)t.push(r)}return t}const z=()=>"querys_callback",N=()=>"ssg_logistic_tkn",j={en:["","January","February","March","April","May","June","July","August","September","October","November","December"],es:["","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]};function Y(e,t){let r="en";var a=new Date(e);return`${j[r][a.getMonth()+1]} ${a.getDate()}, ${a.getFullYear()}`}function q(e){var t=e?new Date(e):new Date;let r=t.getMonth()+1,a=t.getDate();return`${r>9?r:"0"+r}/${a>9?a:"0"+a}/${t.getFullYear()}`}function V(){return new Date().getTime()}const k=(e,t)=>Object.prototype.toString.call(e)===Object.prototype.toString.call(t)?Object.prototype.toString.call(e)==="[object Object]"||Object.prototype.toString.call(e)==="[object Array]"?Object.keys(e).length!==Object.keys(t).length?!1:Object.keys(e).every(function(r){return k(e[r],t[r])}):e===t:!1,K=e=>{if(/([^\u0000-\u00ff])/.test(e))throw Error("String must be ASCII");var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",r,a,n,s,u,c,o,p,y=[],f="",l;if(l=e.length%3,l>0)for(;l++<3;)f+="=",e+="\0";for(l=0;l<e.length;l+=3)r=e.charCodeAt(l),a=e.charCodeAt(l+1),n=e.charCodeAt(l+2),s=r<<16|a<<8|n,u=s>>18&63,c=s>>12&63,o=s>>6&63,p=s&63,y[l/3]=t.charAt(u)+t.charAt(c)+t.charAt(o)+t.charAt(p);return e=y.join(""),e=e.slice(0,e.length-f.length)+f,e},G=(e,t,r=!0)=>e&&e.sort((n,s)=>{let u=n[t],c=s[t];return u<c?r?-1:1:u>c?r?1:-1:0}),H={error:{"--err-bx-color":"var(--background-red-ssg)","--err-bx-bgcolor":"var(--background-red35-ssg)",svg:"var(--err-bx-color)",icon:"alert"},success:{"--err-bx-color":"var(--hrm-palette-tertiary60)","--err-bx-bgcolor":"var(--hrm-palette-tertiary90)",svg:"var(--err-bx-color)",icon:"success"},warning:{"--err-bx-color":"#FF6F1D","--err-bx-bgcolor":"#ffdb99",svg:"var(--err-bx-color)",icon:"info"}};function D(e){return e!=null}function A(e){return e.charAt(0).toUpperCase()+e.slice(1).toLowerCase()}const R=e=>{let t=[];return e&&S(e).map(r=>{t.push({id:r,label:A(e[r]?.name)})}),t},Q=(e,t)=>{let r={};return e&&S(e).map(a=>{let n=e[a]?.[t];r[n]||(r[n]=[]),r[n].push({id:a,label:A(e[a]?.name)})}),r},W=[{label:"United States",id:"USA"},{label:"Cuba",id:"CUB"},{label:"Nicaragua",id:"NIC"},{label:"Mexico",id:"MEX"},{label:"Germany",id:"GRM"},{label:"Panama",id:"PAN"},{label:"Colombia",id:"COL"},{label:"Italy",id:"ITA"},{label:"Venezuela",id:"VEN"},{label:"Suriname",id:"SUR"},{label:"Vietnam",id:"VNM"}];function X(e){e=Number(e);var t=new Date(e);return`${E[t.getMonth()+1]} ${t.getDate()}, ${t.getFullYear()}`}const Z=(e,t)=>{let r=[],a=[];const n=I(t,e+1),s=new Date(t,e,1).getDay(),c=7-new Date(t,e,n).getDay()-1;for(let o=s;o>0;o--)a.push({day:"",isActive:!1,prevLastDay:!0});for(let o=1;o<=n;o++)o===new Date().getDate()&&e===new Date().getMonth()&&t===new Date().getFullYear()?a.push({day:o,isToday:!0,isActive:!1}):a.push({day:o,isActive:!1}),new Date(t,e,o).getDay()===6&&(r.push(a),a=[]);for(let o=1;o<=c;o++)a.push({day:"",nextDay:!0,isActive:!1}),o===c&&(r.push(a),a=[]);return r};function J(e){return e%100!==0&&(e%4===0||e%400===0)?29:28}function I(e,t){if(!D(e)||!D(t))return null;var r=parseInt(e.toString()),a=parseInt(t.toString());return[0,31,J(r),31,30,31,30,31,31,30,31,30,31][a]}const ee={en:["S","M","T","W","T","F","S"],es:["D","L","M","M","J","V","S"]},E=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function te(e){return e=e&&e?.toLowerCase(),e?e.charAt(0).toUpperCase()+e.slice(1):""}export{K as B,S as O,j as _,w as a,P as b,L as c,F as d,Q as e,$ as f,M as g,v as h,N as i,U as j,x as k,q as l,k as m,V as n,W as o,R as p,z as q,Y as r,G as s,H as t,B as u,te as v,X as w,Z as x,ee as y};