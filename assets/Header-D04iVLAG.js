const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LoadingColorSpinner-By6xkkWX.js","assets/index-Dc6i2H8V.js","assets/index-DUq9wHKT.css","assets/LoadingColorSpinner-DPNLfwBi.css"])))=>i.map(i=>d[i]);
import{l as B,_ as H,a as x,k as P,i as c,e as a,h as g,t as o,m as q,n as D,p as N,g as R,f as b,q as A,b as z,r as $,u as K,v as j,w as E,x as Q,j as U}from"./index-Dc6i2H8V.js";import F from"./SVG-CrNT27Bj.js";import{a as C,b as y,q as k,u as _,p as X,d as W,O as Y,e as J,h as V,t as I,i as G,j as L,g as Z}from"./Util-D_-lrQft.js";import{s as ee,i as M}from"./globalSignal-DmyvaVzg.js";import{CloseModal as te,OpenModal as ie}from"./DialogHRM-B6BlsYs1.js";var ne=o("<div> "),le=o("<div class=loading_wapp><div id=buttonDiv></div>");const se=B(()=>H(()=>import("./LoadingColorSpinner-By6xkkWX.js"),__vite__mapDeps([0,1,2,3]))),O=async i=>{const t=await C({query:"53hvscu362"});if(t&&!t.error){let p=y(k())||{},h=Object.assign({},p,t);_(k(),h)}let d=await ae();return re(d),1},re=i=>{let l=X(i.province),t=W(i.municipalities,"provinceId");_("cuba_province_list",l),_("cuba_municipalities_list",t),_("cubaprovmun_list",i)},ae=async()=>{let i=y("all_cub_province_last")||0;if(Date.now()>i){_("all_cub_province_last",Date.now()+240);let l={...y(k())?.all_cub_province};const d=await C(l);if(d)return d}return null},T=async i=>{let l={...y(k())}.validateTkn;if(l){l.params={tkn:i};const t=await C(l);if(t&&t.userId){let d=[];Y(t.accessActivities).map(h=>{let n=t.accessActivities[h];n.isActive&&d.push({id:n.idCode,label:n.label})}),q("profile",t),D(t?.picture),N("roles",t?.accessLogistic);let p=[];y("M023009")?.statusAllList.map(h=>{t?.accessLogistic?.[h.id]?.isActive&&p.push(h)}),ee("list",p)}}};function ce({did:i}){const[l,t]=x(!1),[d,p]=x(!1),h=async e=>{let u=e.credential?.slice(e.credential.toString().length-32,e.credential.toString().length-16);u=e.credential?.slice(0,16);let v={params:{id_token:e.credential},query:"getGoogleUserbyToken"};const f=await J(v);if(f&&f.data){let w=new Date().getTime(),s=new Date(w+6e4*60*24*365),m=I(),S=V(f.data.split(":")[1],u);_("sectionKey",S),document.cookie=`${m}=${f.data}; expires=${s}; path=/;g_state = {"i_l":1,"i_p":${s}}; ssgl_access_tkn = ${e.credential}`,document.cookie=`ssgl_access_tkn = ${e.credential}; expires=${s};`,await O(),T(f.data)}},n=()=>{let e=window.google;e&&!l()&&(e?.accounts.id.initialize({client_id:"195275085181-8ccjpgp8v1g80qhnlk6v4lpgid7n81gr.apps.googleusercontent.com",callback:h}),e?.accounts.id.renderButton(document.getElementById("buttonDiv"),{theme:"outline",size:"large"}),t(!0),d()&&clearInterval(d()))};return P(()=>{let e=setInterval(()=>{n()},120);n(),p(e)}),(()=>{var e=le(),u=e.firstChild;return c(e,a(g,{get when(){return!l()},get children(){var v=ne();return v.firstChild,c(v,a(se,{stroke:"rgb(200 25 60 / 1)",size:62}),null),v}}),u),e})()}var oe=o('<div><div class="_dsplFlx flxWrp spaceAround profileModal"><div><img width=63 height=63 class=picture-profile alt=profile decoding=async></div><div><p></p><h4>');function me(i){const l=()=>{let t=I();document.cookie=`${t}=; ; path=/;`,document.cookie="hrm_access_tkn = ; ",q("profile",void 0),D(void 0),N("roles",void 0),te(i?.modalId)};return(()=>{var t=oe(),d=t.firstChild,p=d.firstChild,h=p.firstChild,n=p.nextSibling,e=n.firstChild,u=e.nextSibling;return t.style.setProperty("max-height","80vh"),t.style.setProperty("width","350px"),t.style.setProperty("overflow","auto"),t.style.setProperty("background","#ffffff"),t.style.setProperty("border-radius","13"),t.style.setProperty("padding","10px 19px"),p.$$click=l,c(e,()=>i?.val?.email),c(u,()=>i?.val?.name),b(()=>A(h,"src",i?.val?.picture)),t})()}R(["click"]);var ue=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/search><span>Buscar'),de=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children mb-0"><a href=/scan><span>Images'),pe=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/findhbl><span>HBL'),he=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/manifest><span>Manifiestos'),ge=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/delivery><span>Entregas'),ve=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/users><span>Users'),_e=o('<nav id=site-navigation><ul id=primary-menu class="no-list nav-menu lg:flex items-center"><li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/tracking><span>Rastrear</span></a></li></ul>'),fe=o('<span class="js-menu-trigger text-red font-bold text-3xl cursor-pointer"><div>'),$e=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/search><span>Buscar'),be=o('<li id=menu-item-6151 class="nav-menu-products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children mb-0"><a href=/images><span>Images'),ye=o('<ul id=primary-menu class="no-list nav-menu lg:flex items-center">'),ke=o("<div><img width=48 height=24 class=picture-profile alt=profile decoding=async>"),we=o('<header class=site-header><div class="containerNav w-full"><div class="flex items-center gap-3"><div class="flex site-branding shrink-0 mr-auto"><a href=/ rel=home class="flex nodecor"><img width=48 height=24 class=nav-home alt="Scanbot SDK"decoding=async><p class="title-header centerBx">Stephanie Solution');function je(){const[i,l]=x(!1),t=()=>{p();let n=L("ssgl_access_tkn"),e=L(I());if(n&&e&&e.length>10&&n.length>10){let u=n?.slice(n.toString().length-32,n.toString().length-16);u=n?.slice(0,16);let v=V(e.split(":")[1],u);_("sectionKey",v),d(e)}},d=async n=>{await O(),await T(n)},p=async()=>{let e=await(await fetch(`${G("svgs.json")}`)).json();return _("svgSymbols",e),Q(e),e};P(t),z(()=>{});const h=()=>{let n=Z(),e={};e.id=n,e.props={minHeight:"1vh",overlay:!0,height:"93vh",zIndex:450},e.content=a(me,{get val(){return U?.profile},modalId:n}),ie(e)};return(()=>{var n=we(),e=n.firstChild,u=e.firstChild,v=u.firstChild,f=v.firstChild,w=f.firstChild;return c(u,a(g,{get when(){return M()},get children(){return[(()=>{var s=_e(),m=s.firstChild,S=m.firstChild;return S.$$click=()=>l(!i()),c(m,a(g,{get when(){return $?.roles?.SEARCH?.isActive},get children(){var r=ue();return r.$$click=()=>l(!i()),r}}),null),c(m,a(g,{get when(){return $?.roles?.SCANING?.isActive},get children(){var r=de();return r.$$click=()=>l(!i()),r}}),null),c(m,a(g,{get when(){return $?.roles?.HBL?.isActive},get children(){var r=pe();return r.$$click=()=>l(!i()),r}}),null),c(m,a(g,{get when(){return $?.roles?.MANIFEST?.isActive},get children(){var r=he();return r.$$click=()=>l(!i()),r}}),null),c(m,a(g,{get when(){return $?.roles?.DELIVERY?.isActive},get children(){var r=ge();return r.$$click=()=>l(!i()),r}}),null),c(m,a(g,{get when(){return K()},get children(){var r=ve();return r.$$click=()=>l(!i()),r}}),null),b(()=>j(s,`main-navigation max-lg:h-[calc(100dvh-64px)] max-lg:overflow-y-auto ${i()?"is-open":""}`)),s})(),(()=>{var s=fe(),m=s.firstChild;return m.$$click=()=>l(!i()),c(m,a(F,{get name(){return i()?"Xclose":"menu"},size:24,get color(){return i()?"var(--background-red-ssg)":"var(--hrm-palette-neutral30)"}})),b(()=>j(m,`icon_status centerBx ${i()?"menu":"Xclose"}`)),s})()]}}),null),c(u,a(g,{get when(){return!M()},get children(){var s=ye();return c(s,a(g,{get when(){return $?.roles?.SEARCH?.isActive},get children(){return $e()}}),null),c(s,a(g,{get when(){return $?.roles?.SCANING?.isActive},get children(){return be()}}),null),s}}),null),c(u,a(g,{get when(){return E()},get fallback(){return a(ce,{})},get children(){var s=ke(),m=s.firstChild;return s.$$click=h,b(()=>A(m,"src",E())),s}}),null),b(()=>A(w,"src",`${G("SSG.webp")}`)),n})()}R(["click"]);export{je as default};
