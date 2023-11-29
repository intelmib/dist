import{d as y,j as M,k as B,l as h,h as q,m as S,r as _,o as t,n as r,a as e,i as d,p as o,c as a,q as $,t as x,F as L,s as F,w as k,v as g,e as N}from"./af45522d.js";import{_ as V,a as j}from"./chunk-7c828e46.js";const z={class:"grid"},A={class:"col-12"},D={class:"flex flex-column sm:flex-row align-items-center gap-4"},E={class:"flex flex-column sm:flex-row align-items-center gap-3"},I=["src"],G={class:"flex flex-column align-items-center sm:align-items-start"},H={class:"text-900 font-bold text-4xl"},J={class:"col-12 xl:col-2"},K={class:"card h-full"},O=e("div",{class:"flex align-items-center justify-content-between mb-3"},[e("div",{class:"text-900 text-xl font-semibold"},"Minha Conta")],-1),Q={class:"flex flex-column row-gap-3"},R={class:"flex flex-column lg:flex-column gap-3"},T={class:"text-900 text-lg font-medium"},U={class:"col-12 xl:col-10"},W={class:"card h-full"},X=y({__name:"AdminMyAccount",setup(b){const s=M();B();const m={sequence:0,id:"fatura",visible:!0,icon:"iconamoon:invoice",title:"Minha Fatura"},c={sequence:1,id:"System",visible:!0,icon:"logos:google-tag-manager",title:"Meu Sistema"},f={sequence:2,id:"myProfile",visible:!0,icon:"iconamoon:profile-circle-duotone",title:"Meu Perfil"},v={sequence:3,id:"Plans",visible:!1,icon:"fluent:star-20-regular",title:"Plano de Assinatura"},l=h([m,c,f,v]),u=h(l.value[0]),p=n=>{u.value=n};return q(()=>s.profile.type==="client"&&c.visible),S(()=>{s.profile.type==="client"||s.profile.type==="admin"&&(l.value=l.value.filter(n=>n.id!==c.id),l.value=l.value.filter(n=>n.id!==m.id),p(f))}),(n,Y)=>{const w=_("iconify-icon"),P=_("Button");return t(),r("div",z,[e("div",A,[e("div",D,[e("div",E,[d(s).profile.avatar?(t(),r("img",{key:0,src:d(s).profile.avatar,class:"w-4rem h-4rem flex-shrink-0"},null,8,I)):o("",!0),d(s).profile.avatar?o("",!0):(t(),a(d($),{key:1,class:"h-9 w-9 text-zinc-400 hover:text-primary"})),e("div",G,[e("span",H,x(d(s).profile.name),1)])])])]),e("div",J,[e("div",K,[O,e("div",Q,[e("div",R,[(t(!0),r(L,null,F(l.value,(i,C)=>(t(),r("div",{key:`myAccount-${C}`},[i.visible?(t(),a(P,{key:0,class:g(["w-full p-3 border-1 border-round surface-border flex align-items-center hover:surface-100 border-radius"]),outlined:"",disabled:u.value.id===i.id,onClick:Z=>p(i)},{default:k(()=>[i.iconPrime?(t(),r("i",{key:0,class:g([i.iconPrime,"w-2rem flex-shrink-0 mr-3"]),height:"36"},null,2)):o("",!0),i.icon?(t(),a(w,{key:1,icon:i.icon,height:"36",class:"w-2rem flex-shrink-0 mr-3"},null,8,["icon"])):o("",!0),e("span",T,x(i.title),1)]),_:2},1032,["disabled","onClick"])):o("",!0)]))),128))])])])]),e("div",U,[e("div",W,[u.value.id===v.id?(t(),a(V,{key:0})):o("",!0),u.value.id===f.id?(t(),a(j,{key:1})):o("",!0)])])])}}}),se=y({__name:"myaccount",setup(b){return(s,m)=>{const c=_("Layout");return t(),a(c,{title:"Perfil"},{default:k(()=>[N(X)]),_:1})}}});export{se as default};
