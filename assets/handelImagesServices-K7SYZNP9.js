import{c as p,n as r,j as c}from"./index-BmRuL43P.js";import{f as s,b as m}from"./Util-DK6KNnW6.js";const[b,d]=p({});let g={webp:"image/webp",jpg:"image/jpg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",ts:"video/MP2T",m3u8:"application/x-mpegURL",mp4:"video/MP4",m4a:"audio/MP4",webm:"video/webm",weba:"audio/webm",m4s:"text/plain",txt:"text/plain",srt:"text/plain",vtt:"text/plain",js:"application/javascript; charset=UTF-8",css:"text/css; charset=utf-8",mpd:"video/vnd.mpeg.dash.mpd",aac:"audio/aac",mp3:"audio/mpeg",wav:"audio/wav",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",pdf:"application/pdf","7z":"application/x-7z-compressed",zip:"application/zip",xml:"application/xml",json:"application/json",html:"text/html; charset=UTF-8"};const u=e=>e&&e.split(".").pop().toLowerCase(),n=e=>{let a=u(e);return g[a]},l=async(e,a)=>{let t=await(await fetch(e)).blob();return a&&(t=t.slice(0,t.size,a)),URL.createObjectURL(t)},h=async(e,a)=>{let i={query:"getSignedUrl",params:{fileName:e}};var t;return r()?t=await s(i):t=(await m(i))?.data,t?.url?t:null},v=async e=>{let a=n(e);var i=await h(e);console.log(i);var t=await l(i?.url,a);return t},y=async(e,a)=>{let i=n(e);var t=await x(e,a),o=t?.url&&await l(t?.url,i);return o},I=async(e,a)=>{if(a){const i=new Image;i.onload=function(t){let o={width:this.width*1,height:this.height*1,w2hRel:this.width*1/this.height*1,blob:a};d(e,o)},i.src=a}},x=async(e,a)=>{let i={query:"getS3UrlByFileName",params:{origin:c?.profile?.businessId,linked:a,fileName:e}};const o=await s(i);return o?.url?o:null};export{I,y as a,v as l,b as m};
