import{P as v,r as b}from"./PDFButton-CSS0jQgP.js";import{f as A}from"./fontkit.es-Dm0cGHgD.js";import{i as O,t as r}from"./InitPrintServices-C0pVP2ci.js";import{OpenToast as U}from"./Toast-Cr22bH7f.js";import{g as P}from"./Util-D_-lrQft.js";const R=a=>{let i=window.DATAMatrix;return i({msg:a,dim:256,rct:0,pad:2,pal:["#000000","#ffffff"],vrb:1})},C=a=>{let n=a.cloneNode(!0).outerHTML,t=new Blob([n],{type:"image/svg+xml;charset=utf-8"});return(window.URL||window.webkitURL||window).createObjectURL(t)},D=async(a,i)=>{const n=document.createElement("img");document.body.appendChild(n),n.onload=function(){const t=document.createElement("canvas");t.width=n.clientWidth,t.height=n.clientHeight,t.getContext("2d").drawImage(n,0,0);const d=t.toDataURL("image/png");document.body.removeChild(n),i(d)},n.src=a},E=a=>new Promise(async(i,n)=>{let t=R(a),e=C(t);D(e,async d=>{var g=await N(d,"image/png");let o=URL.createObjectURL(g);i(o)})}),N=async(a,i)=>{let t=await(await fetch(a)).blob();return t=t.slice(0,t.size,i),t},j=a=>{window.navigator.clipboard.writeText(a),U({text:a+"  copiado",timeout:1500,id:P()})};function _(a){let i=new Blob([a],{type:"application/pdf"});return(window.URL||window.webkitURL).createObjectURL(i)}const y=(a,i,n)=>{const t=i.widthOfTextAtSize(a,40),e=i.widthOfTextAtSize(a,10);return Math.floor(n/((t-e)/30))},H=async(a,i,n)=>{const t=await v.create();t.registerFontkit(A);const e=await O(t);let d=265;const g=a.map(async(o,I)=>{const l=t.addPage([426,284]),{height:x}=l.getSize();let s=x-34;const T=await fetch(o?.qr).then(h=>h.arrayBuffer()),p=await t.embedPng(T);l&&p&&l.drawImage(p,{x:10,y:x-220,width:150,height:150}),o?.tracking?.length<14&&l.drawText(r(o?.tracking),{x:172,y:s-175,size:36,font:e.roboto_bold,color:b(0,0,0)});let w=y(r(o?.state),e.roboto_bold,d);w>42&&(w=42,s=s-6);let c=y(r(o?.name),e.GSansItalic,d);var m=e.GSansItalic?.widthOfTextAtSize(r(o?.name),c);if(m>d&&(c=c-1,m=e.GSansItalic?.widthOfTextAtSize(r(o?.name),c)),c=300/m*21,c=c>25?25:c,l.drawText(r(o?.name),{x:10,y:s-0,size:c,font:e.GSansItalic,color:b(0,0,0)}),o?.state){const h=e.roboto_bold?.widthOfTextAtSize(r(o?.state),w);l.drawText(r(o?.state),{x:420-h,y:s-46,size:w,font:e.roboto_bold,color:b(0,0,0)}),s=s-c}let f=29;const z=e.Lexend_700?.widthOfTextAtSize(r(o?.phoneNumber),f);l.drawText(r(o?.phoneNumber),{x:400-z,y:s-70,size:f,font:e.Lexend_700,color:b(0,0,0)});const L=e.Lexend_700?.widthOfTextAtSize(r(o?.altPhoneNumber),f);l.drawText(r(o?.altPhoneNumber),{x:400-L,y:s-105,size:f,font:e.Lexend_700,color:b(0,0,0)});let u=r(o?.bulto).trim();const S=e.Lexend_700?.widthOfTextAtSize(r(u),40);l.drawText(r(u),{x:418-S,y:s-205,size:40,font:e.GSansBold,color:b(0,0,0)})});await Promise.all(g);{const o=await t.save();return _(o)}};export{H as S,j as c,E as g};
