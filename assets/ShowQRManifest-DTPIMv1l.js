const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SVG-CYbWHDJe.js","assets/index-BQDq9BVx.js","assets/index-DUq9wHKT.css","assets/index-Ci0zXM0r.js"])))=>i.map(i=>d[i]);
import{l as P,_ as $,b as w,i as f,d as C,f as S,e as R,t as A,m as E}from"./index-BQDq9BVx.js";import{i as F}from"./globalSignal-C0bDyEQ1.js";import{c as z,g as x,S as W}from"./ShowQRPrintLabel-BXmSCIKF.js";import"./PDFButton-B_0lS8EG.js";import"./index-Ci0zXM0r.js";import"./qrcode-C5vWJp7P.js";import"./fontkit.es-BKe7DAJ7.js";import"./InitPrintServices-CpTp0E3r.js";import"./Util-CG-K4aC-.js";import"./Toast-DBYC_dpW.js";var L=A('<div><div><div class="_dsplFlx flxWrp spaceAround "><div class="_dsplFlx bottombx lowbordr"><h5>Codigo QR</h5></div><div class="_dsplFlx bottombx "><h4></h4><div class="icon_status centerBx"></div></div></div><div class="_dsplFlx flxWrp spaceAround "><img ref alt=qr></div><div class="_dsplFlx bottombx flxWrp spaceAround txtWrap"><h4>');const M=P(()=>$(()=>import("./SVG-CYbWHDJe.js"),__vite__mapDeps([0,1,2,3])));function Z(t){const r=e=>{z(t?.item?.ssg_manifest_key)},o=async()=>{let e=g(t?.item?.ssg_manifest_key),s={qr:await x(e)},d=await W([s]);window.open(d)},[n,{refetch:h}]=w(t?.item?.ssg_manifest_key,async e=>{let l=g(t?.item?.ssg_manifest_key);return await x(l)});return(()=>{var e=L(),l=e.firstChild,s=l.firstChild,d=s.firstChild,b=d.nextSibling,_=b.firstChild,y=_.nextSibling,c=s.nextSibling,k=c.firstChild,v=c.nextSibling,a=v.firstChild;return e.style.setProperty("max-height","80vh"),e.style.setProperty("overflow","auto"),e.style.setProperty("background","#ffffff"),e.style.setProperty("border-radius","13"),e.style.setProperty("padding","10px 19px"),f(_,()=>t?.item?.name),y.$$click=o,f(y,C(M,{name:"printer",size:32})),c.style.setProperty("padding","16px"),v.style.setProperty("padding","16px"),a.$$click=r,f(a,()=>t?.item?.name),S(i=>{var m=F()?"96vw":"420px",u=n(),p=300/t?.item?.ssg_manifest_key?.length*1.82+"px";return m!==i.e&&((i.e=m)!=null?e.style.setProperty("width",m):e.style.removeProperty("width")),u!==i.t&&E(k,"src",i.t=u),p!==i.a&&((i.a=p)!=null?a.style.setProperty("font-size",p):a.style.removeProperty("font-size")),i},{e:void 0,t:void 0,a:void 0}),e})()}const g=t=>{let r=t,o="^[A-Z]{3}[0-9]{4}-[1-9]{5}";const n=new RegExp(o);return r.length===13&&n.test(r)&&(r=r.slice(3,12)),r};R(["click"]);export{Z as default,g as parseTrcking};