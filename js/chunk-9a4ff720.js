import{d as p,u as l,h as _,r as s,o as r,c as a,w as m,i as c}from"./bdab2055.js";const f=p({__name:"chats",setup(y){const t=l(),o=_(()=>{const e=Object.keys(t.query)[0];return e?`?${e}=${t.query[e]}`:""});return(e,d)=>{const n=s("AppLocal"),u=s("Layout");return r(),a(u,null,{default:m(()=>[(r(),a(n,{key:`${c(o)}`,"mode-socket":!0,resource:`/pr/admin/chats${c(o)}`,title:"Chats"},null,8,["resource"]))]),_:1})}}});export{f as default};
