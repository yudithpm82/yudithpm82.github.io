import{c as n,j as s}from"./index-CvYaQ-s6.js";import{a as l}from"./Util-D_-lrQft.js";const[w,c]=n({});let m={webp:"image/webp",jpg:"image/jpg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",ts:"video/MP2T",m3u8:"application/x-mpegURL",mp4:"video/MP4",m4a:"audio/MP4",webm:"video/webm",weba:"audio/webm",m4s:"text/plain",txt:"text/plain",srt:"text/plain",vtt:"text/plain",js:"application/javascript; charset=UTF-8",css:"text/css; charset=utf-8",mpd:"video/vnd.mpeg.dash.mpd",aac:"audio/aac",mp3:"audio/mpeg",wav:"audio/wav",xls:"application/vnd.ms-excel",xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",ppt:"application/vnd.ms-powerpoint",pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation",doc:"application/msword",docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",pdf:"application/pdf","7z":"application/x-7z-compressed",zip:"application/zip",xml:"application/xml",json:"application/json",html:"text/html; charset=UTF-8"},r={png:"application/png",jpg:"application/jpeg",jpeg:"application/jpeg",webp:"application/webp",gif:"application/gif"};const o=t=>t&&t.split(".").pop().toLowerCase(),f=t=>{let e=o(t);return r[e]},g=t=>{let e=o(t);return m[e]},d=async(t,e)=>{let a=await(await fetch(t)).blob();return e&&(a=a.slice(0,a.size,e)),URL.createObjectURL(a)},b=async(t,e)=>{let i=g(t);var a=await h(t,e),p=a?.url&&await d(a?.url,i);return p},v=async(t,e)=>{if(e){const i=new Image;i.onload=function(a){let p={width:this.width*1,height:this.height*1,w:this.width*1,h:this.height*1,w2hRel:this.width*1/this.height*1,blob:e};c(t,p)},i.src=e}},h=async(t,e)=>{let i={query:"getS3UrlByFileName",params:{origin:s?.profile?.businessId,linked:e,fileName:t}};const p=await l(i);return p?.url?p:null};export{v as I,f as i,b as l,w as m};
