import{d as v,o as n,n as m,a as s,t as g,p as l,r as h,e as A,w,f as P,C as j,E as B,G as U,H as p,k as O,y as q,l as x,m as I,i as f,c as r,q as L,F as N,s as V,v as k}from"./f6c51b9b.js";import{_ as z,a as D}from"./chunk-6a4df09e.js";const E={key:0,class:"card p-4 rounded-md shadow-lg sm:p-8 sm:w-[600px] mx-auto flex align-items-center gap-2"},R=s("h1",null,"My Invoice",-1),T={class:"font-bold"},G=v({__name:"MyInvoice",props:{myAccountClient:{default:null}},setup(c){const e=c;return(o,t)=>e.myAccountClient?(n(),m("div",E,[R,s("span",T,g(e.myAccountClient.mySystemUrl),1)])):l("",!0)}}),H={key:0,class:"card p-4 rounded-md shadow-lg sm:p-8 sm:w-[600px] mx-auto flex flex-col align-items-center gap-2"},J=s("h4",null,"Clique para acessar seu sistema",-1),K=v({__name:"MySystem",props:{myAccountClient:{default:null}},setup(c){const e=c,o=()=>{var t;window.open((t=e.myAccountClient)==null?void 0:t.mySystemUrl,"_blank")};return(t,d)=>{const y=h("Button");return e.myAccountClient?(n(),m("div",H,[J,A(y,{class:"font-bold",onClick:o},{default:w(()=>[P(g(e.myAccountClient.mySystemUrl),1)]),_:1})])):l("",!0)}}}),Q={mySystemUrl:"",myInvoiceUrl:""},W=j("myAccountStore",{state:()=>Q,actions:{async getMyAccountClient(c){const e=Object.assign({},B);e.endPoint=`/${c.type}/myaccount`,e.method="get",e.headers={};try{const o=await U.get(e.endPoint,{headers:e.headers});if(o.status!==200)return{success:!1,message:"Algo deu errado, tente em alguns minutos, "+o.status,profile:Object.assign({},p)};if(o.data.success===!1)return{success:!1,message:o.data.message,profile:Object.assign({},p)};{const t=o.data;if(t.rowsFull&&t.rowsFull.length>0){const d=t.rowsFull[0];return this.mySystemUrl=d.mySystemUrl,{success:!0,message:`${c.type==="admin"?"Usuário":"Cliente"} encontrado.`,profile:Object.assign({},t.profile),rowsFull:t.rowsFull?Object.assign([],t.rowsFull):[]}}else return{success:!1,message:"Algo deu errado, tente novamente em alguns minutos, "+o.status,profile:Object.assign({},p)}}}catch(o){return{success:!1,message:"Algo deu errado, tente novamente em alguns minutos, "+o.message,profile:Object.assign({},p)}}}},getters:{}}),X={class:"grid"},Y={class:"col-12"},Z={class:"flex flex-column sm:flex-row align-items-center gap-4"},ee={class:"flex flex-column sm:flex-row align-items-center gap-3"},se=["src"],te={class:"flex flex-column align-items-center sm:align-items-start"},ne={class:"text-900 font-bold text-4xl"},oe={class:"col-12 xl:col-2"},le={class:"card h-full"},ae=s("div",{class:"flex align-items-center justify-content-between mb-3"},[s("div",{class:"text-900 text-xl font-semibold"},"Minha Conta")],-1),ce={class:"flex flex-column row-gap-3"},ie={class:"flex flex-column lg:flex-column gap-3"},re={class:"text-900 text-lg font-medium"},ue={class:"col-12 xl:col-10"},me={class:"card h-full"},de=v({__name:"SafeMyAccount",setup(c){const e=O();q();const o=W(),t={sequence:0,id:"System",visible:!0,icon:"logos:google-tag-manager",title:"Meu Sistema"},d={sequence:1,id:"fatura",visible:!1,icon:"iconamoon:invoice",title:"Minha Fatura"},y={sequence:2,id:"myProfile",visible:!0,icon:"iconamoon:profile-circle-duotone",title:"Meu Perfil"},b={sequence:3,id:"Plans",visible:!1,icon:"fluent:star-20-regular",title:"Plano de Assinatura"},C=x([t,d,y,b]),u=x(C.value[0]),S=i=>{u.value=i},_=x(null);return I(async()=>{const i=await o.getMyAccountClient(e.profile);console.log("myAccountResponse",i),i&&i.rowsFull&&i.rowsFull.length>0&&(_.value=i.rowsFull[0])}),(i,_e)=>{const M=h("ico"),$=h("Button");return n(),m("div",X,[s("div",Y,[s("div",Z,[s("div",ee,[f(e).profile.avatar?(n(),m("img",{key:0,src:f(e).profile.avatar,class:"w-4rem h-4rem flex-shrink-0"},null,8,se)):l("",!0),f(e).profile.avatar?l("",!0):(n(),r(f(L),{key:1,class:"h-9 w-9 text-zinc-400 hover:text-primary"})),s("div",te,[s("span",ne,g(f(e).profile.name),1)])])])]),s("div",oe,[s("div",le,[ae,s("div",ce,[s("div",ie,[(n(!0),m(N,null,V(C.value,(a,F)=>(n(),m("div",{key:`myAccount-${F}`},[a.visible?(n(),r($,{key:0,class:k(["w-full p-3 border-1 border-round surface-border flex align-items-center hover:surface-100 border-radius",u.value.id===a.id?"bg-primary":""]),outlined:"",disabled:u.value.id===a.id,onClick:fe=>S(a)},{default:w(()=>[a.iconPrime?(n(),m("i",{key:0,class:k([a.iconPrime,"w-2rem flex-shrink-0 mr-3"]),height:"36"},null,2)):l("",!0),a.icon?(n(),r(M,{key:1,icon:a.icon,height:"36",class:"w-2rem flex-shrink-0 mr-3"},null,8,["icon"])):l("",!0),s("span",re,g(a.title),1)]),_:2},1032,["class","disabled","onClick"])):l("",!0)]))),128))])])])]),s("div",ue,[s("div",me,[u.value.id===b.id?(n(),r(z,{key:0})):l("",!0),u.value.id===y.id?(n(),r(D,{key:1})):l("",!0),u.value.id===d.id&&_.value?(n(),r(G,{key:2,"my-account-client":_.value},null,8,["my-account-client"])):l("",!0),u.value.id===t.id&&_.value?(n(),r(K,{key:3,"my-account-client":_.value},null,8,["my-account-client"])):l("",!0)])])])}}}),ge=v({__name:"myaccount",setup(c){return(e,o)=>{const t=h("Layout");return n(),r(t,{title:"Perfil"},{default:w(()=>[A(de)]),_:1})}}});export{ge as default};
