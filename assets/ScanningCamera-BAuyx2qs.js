import{a as n,c as K,h as U,o as V,k as X,d as a,S as C,G as ee,i as r,f as te,g as q,t as _}from"./index-BQDq9BVx.js";import{a as se,u as re,g as P}from"./Util-CG-K4aC-.js";import{H as ae,a as ne}from"./html5-qrcode-scanner-Cl8XE5pu.js";import{u as oe}from"./debounces-D-57AQO1.js";import o from"./FlexSpace-Ds1B62AB.js";import{h as le}from"./ScanningServices-CGLHczPm.js";import{OpenToast as ie}from"./Toast-DBYC_dpW.js";import"./index-Ci0zXM0r.js";import"./globalSignal-C0bDyEQ1.js";var ce=_('<div class=scanWrp><div><div class=" _dsplFlx"><h3 class="errTxt err centerBx "></h3></div><div class=" _dsplFlx"><h3 class="errTxt ybcity centerBx"></h3></div><div class=" _dsplFlx"><h3 class="errTxt centerBx"></h3></div></div><div></div><div id=qr-reader style=width:300px>'),de=_("<slot name=plans style=margin-top:35px><div>"),ue=_("<div>esta funcion es solo para dispositivos mobiles");function we(H){const[M,N]=n([]),[i,$]=K({}),[Q,j]=n(""),[I,T]=n(),[G,k]=n(),[R,W]=n(""),[z,A]=n(""),[v,D]=n("");U(()=>{}),V(()=>{T(!1),se("cameraScanLoc")?.clear()}),X(()=>{setTimeout(()=>{J()},90)});const E=(e,t)=>{W(t),A(e),setTimeout(()=>{A("")},1300)},F=e=>{D(e),setTimeout(()=>{D("")},2e3)},B=(e,t)=>{e!==G()&&(k(e),setTimeout(()=>{k("")},3e3),Y(e))},Y=e=>{e||(e=Q()),e=e.split("'").join("-"),j(""),!v()&&Z(e)},Z=async e=>{let t=await le(e,H?.status);if(t?.data){E("","success"),ie({text:`Pertenece a ${t?.data?.city?t?.data?.city:""}${t?.data?.estate?" :: "+t?.data?.estate:""}`,timeout:3500,theme:"green",id:P()});let c={consigneeInfo:{ybcity:t?.data?.city,ybestate:t?.data?.estate}};$(c),F(P()),N([...M(),t.data])}else t?.error&&(E("",t?.error?.alert),$(t?.error?.scanData),F(P()))},J=()=>{T(!0);let e={fps:10,qrbox:{width:350,height:200},supportedScanTypes:[ae.SCAN_TYPE_CAMERA],showTorchButtonIfSupported:!0,showZoomSliderIfSupported:!0,verbose:!0},t=new ne("qr-reader",e);t.render(B),re("cameraScanLoc",t)};return oe(B,400),a(C,{when:!0,get fallback(){return ue()},get children(){return a(C,{get when(){return I()},get children(){var e=de(),t=e.firstChild;return e._$owner=ee(),r(e,a(C,{get when(){return I()},style:"margin-top: 35px",get children(){var c=ce(),l=c.firstChild,d=l.firstChild,u=d.firstChild,y=d.nextSibling,m=y.firstChild,f=y.nextSibling,p=f.firstChild,h=l.nextSibling;return r(d,a(o,{}),u),r(u,z),r(d,a(o,{}),null),r(y,a(o,{}),m),r(m,()=>i?.consigneeInfo?.ybcity),r(y,a(o,{}),null),r(f,a(o,{}),p),r(p,()=>i?.consigneeInfo?.ybestate),r(f,a(o,{}),null),te(s=>{var L=`scanOverlayFront ${R()}`,S=v()?"block":"none",g=300/z()?.length*1.73+"px",b=300/i?.consigneeInfo?.ybcity?.length*1.13+"px",w=300/i?.consigneeInfo?.ybestate?.length*1.23+"px",O=`scanOverlay  ${R()} `,x=v()?"block":"none";return L!==s.e&&q(l,s.e=L),S!==s.t&&((s.t=S)!=null?l.style.setProperty("display",S):l.style.removeProperty("display")),g!==s.a&&((s.a=g)!=null?u.style.setProperty("font-size",g):u.style.removeProperty("font-size")),b!==s.o&&((s.o=b)!=null?m.style.setProperty("font-size",b):m.style.removeProperty("font-size")),w!==s.i&&((s.i=w)!=null?p.style.setProperty("font-size",w):p.style.removeProperty("font-size")),O!==s.n&&q(h,s.n=O),x!==s.s&&((s.s=x)!=null?h.style.setProperty("display",x):h.style.removeProperty("display")),s},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0}),c}}),t),e}})}})}export{we as default};
