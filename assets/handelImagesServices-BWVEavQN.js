import{c as r,j as c,n as m}from"./index-BQDq9BVx.js";import{f as p,b as g}from"./Util-CG-K4aC-.js";const[v,d]=r({});let h={webp:"image/webp",jpg:"image/jpg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",ts:"video/MP2T",m3u8:"application/x-mpegURL",mp4:"video/MP4",m4a:"audio/MP4",webm:"video/webm",weba:"audio/webm",m4s:"text/plain",txt:"text/plain",srt:"text/plain",vtt:"text/plain",js:"application/javascript; charset=UTF-8",css:"text/css; charset=utf-8",mpd:"video/vnd.mpeg.dash.mpd",aac:"audio/aac",mp3:"audio/mpeg",wav:"audio/wav",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",pdf:"application/pdf","7z":"application/x-7z-compressed",zip:"application/zip",xml:"application/xml",json:"application/json",html:"text/html; charset=UTF-8"},u={png:"application/png",jpg:"application/jpeg",jpeg:"application/jpeg",webp:"application/webp",gif:"application/gif"};const o=t=>t&&t.split(".").pop().toLowerCase(),y=t=>{let e=o(t);return u[e]},n=t=>{let e=o(t);return h[e]},l=async(t,e)=>{let a=await(await fetch(t)).blob();return e&&(a=a.slice(0,a.size,e)),URL.createObjectURL(a)},w=async(t,e)=>{let i={query:"getSignedUrl",params:{fileName:t}};var a;return m()?a=await p(i):a=(await g(i))?.data,a?.url?a:null},j=async t=>{let e=n(t);var i=await w(t),a=await l(i?.url,e);return a},I=async(t,e)=>{let i=n(t);var a=await x(t,e),s=a?.url&&await l(a?.url,i);return s},F=async(t,e)=>{if(e){const i=new Image;i.onload=function(a){let s={width:this.width*1,height:this.height*1,w:this.width*1,h:this.height*1,w2hRel:this.width*1/this.height*1,blob:e};d(t,s)},i.src=e}},x=async(t,e)=>{let i={query:"getS3UrlByFileName",params:{origin:c?.profile?.businessId,linked:e,fileName:t}};const s=await p(i);return s?.url?s:null};export{F as I,I as a,y as i,j as l,v as m};
