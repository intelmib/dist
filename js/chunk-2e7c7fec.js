import{d as $,k as g,h as B,j as C,l as _,x as E,r as p,o as u,n as w,a as t,e as s,w as y,p as x,y as R,D as S,i as l,v as T,m as I,z as M,c as V,A as U,B as D,t as N}from"./19c60e5a.js";const O={key:0},F=t("h6",{class:"text-center mt-6 mb-3 cursor-default"},"ou entre com rede social",-1),q={class:"my-6 space-y-4 space-x-4"},z=t("span",{class:"ml-1"},"Google",-1),j=t("span",{class:"ml-1"},"Microsoft",-1),G=t("span",{class:"ml-3"},"Apple",-1),W=t("span",{class:"ml-3"},"Facebook",-1),X=t("span",{class:"ml-1"},"X (Twitter)",-1),H=!1,L=$({__name:"SocialLan",setup(b){return g(),B(()=>g().profile),C(),_(""),_(""),E(),(c,e)=>{const a=p("ico"),i=p("Button");return H?(u(),w("div",O,[F,t("div",q,[s(i,{rounded:"",outlined:""},{default:y(()=>[s(a,{icon:"ri:google-fill",width:"22",height:"22",color:"white"}),z]),_:1}),s(i,{rounded:"",outlined:""},{default:y(()=>[s(a,{icon:"mdi:microsoft",width:"22",height:"22",color:"white"}),j]),_:1}),s(i,{rounded:"",outlined:""},{default:y(()=>[s(a,{icon:"ic:baseline-apple",width:"22",height:"22",color:"white"}),G]),_:1}),s(i,{rounded:"",outlined:""},{default:y(()=>[s(a,{icon:"ic:baseline-facebook",width:"22",height:"22",color:"white"}),W]),_:1}),s(i,{rounded:"",outlined:""},{default:y(()=>[s(a,{icon:"mdi:twitter",width:"22",height:"22",color:"white"}),X]),_:1})])])):x("",!0)}}}),J={class:"mt-6"},K=t("h6",{class:"text-center mb-3 cursor-default"},"Faça login na sua conta",-1),Q={action:"#",class:"space-y-8 ng-untouched ng-pristine ng-valid font-medium"},Y={class:"space-y-4"},Z={class:"space-y-2"},ee={class:"space-y-2 mt-6"},te={class:"space-y-2 mt-6"},se={class:"p-float-label"},oe={class:"text-end"},ae=$({__name:"Login",setup(b){const c=R(),e=g(),a=_(S),i=B(()=>g().profile),r=C(),o=_(""),d=_(""),v=E(),n=async h=>{e.loading=!0,a.value=await e.login(h,o.value,d.value),a.value.success===!1?(v.params.icon="alert",v.params.title=a.value.message?a.value.message:"Erro ao efetuar login",v.params.buttons=[{text:"Tentar novamente",value:1,keyConfirm:!0,icon:"pi pi-check",keyExit:!1,type:"primary"}],await v.confirmation()):i.value.type==="admin"?window.location.href="/admin/myaccount/table-integrations":r.push({name:"safe-myaccount"}),e.loading=!1};return(h,m)=>{const A=p("AppText"),f=p("Password"),P=p("Button");return u(),w("div",J,[K,t("div",Q,[t("div",Y,[t("div",Z,[t("div",ee,[s(A,{modelValue:o.value,"onUpdate:modelValue":m[0]||(m[0]=k=>o.value=k),title:"Email",type:"email",position:"left",icon:"pi pi-user",pclass:"w-full","id-component":"user",autofocus:!0},null,8,["modelValue"])]),t("div",te,[t("span",se,[s(f,{id:"idpassword",modelValue:d.value,"onUpdate:modelValue":m[1]||(m[1]=k=>d.value=k),feedback:!1,"toggle-mask":"",class:"w-full",pt:{input:{class:`${l(c).tailCss.inputBg} w-full`}}},null,8,["modelValue","pt"]),t("label",{class:T([d.value!==""?"":"text-gray-500","text-start"])},"Senha",2)])])]),t("div",oe,[t("a",{class:"text-xs hover:underline cursor-pointer",onClick:m[2]||(m[2]=(...k)=>l(e).addItemRecoverPasswordIfNotExists&&l(e).addItemRecoverPasswordIfNotExists(...k))},"Esqueceu sua Senha?")])]),s(P,{id:"btn-login",label:"Entrar",type:"button",icon:"pi pi-check",class:"mt-4 w-full",rounded:"",onClick:m[3]||(m[3]=k=>n(""))}),s(L)])])}}}),ie={class:"mt-6"},ne=t("h6",{class:"text-center mb-3 cursor-default"},"Crie sua Conta",-1),le={action:"#",class:"space-y-8 ng-untouched ng-pristine ng-valid font-medium"},ce={class:"space-y-4"},re={class:"space-y-2"},ue={class:"space-y-2 mt-6"},pe={class:"space-y-2 mt-6"},de={class:"space-y-2 mt-6"},me=$({__name:"Register",setup(b){const c=g(),e=_(S),a=_(""),i=_(""),r=_(""),o=E(),d=async()=>{c.loading=!0,e.value=await c.register(a.value,i.value,r.value),e.value.success===!1?(o.params.icon="alert",o.params.title=e.value.message?e.value.message:"Erro ao efetuar login",o.params.buttons=[{text:"Tentar novamente",value:1,keyConfirm:!0,icon:"pi pi-check",keyExit:!1,type:"primary"}],await o.confirmation()):(o.params.icon="success",o.params.title=e.value.message?e.value.message:"success, check email to confirm your account",o.params.buttons=[{text:"Ok",value:1,keyConfirm:!0,icon:"pi pi-check",keyExit:!1,type:"primary"}],await o.confirmation()),c.loading=!1};return(v,n)=>{const h=p("AppText"),m=p("AppMask"),A=p("Button");return u(),w("div",ie,[ne,t("div",le,[t("div",ce,[t("div",re,[t("div",ue,[s(h,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=f=>a.value=f),title:"Email",type:"email",position:"left",pclass:"w-full","id-component":"user",autofocus:!0},null,8,["modelValue"])]),t("div",pe,[s(m,{modelValue:i.value,"onUpdate:modelValue":n[1]||(n[1]=f=>i.value=f),title:"Whatsapp",position:"left",pclass:"w-full","id-component":"cel",mask:"99-999999999"},null,8,["modelValue"])]),t("div",de,[s(h,{modelValue:r.value,"onUpdate:modelValue":n[2]||(n[2]=f=>r.value=f),title:"Senha",type:"password",position:"left",icon:"pi pi-user",pclass:"w-full","id-component":"password"},null,8,["modelValue"])])])]),s(A,{id:"btnRegister",label:"Registrar",type:"button",icon:"pi pi-check",class:"mt-4 w-full",onClick:n[3]||(n[3]=f=>d())}),s(L)])])}}}),_e={class:"mt-6"},ve=t("h6",{class:"text-center mb-3 cursor-default"},"Faça login na sua conta através do email",-1),fe={action:"#",class:"space-y-8 ng-untouched ng-pristine ng-valid font-medium"},he={class:"space-y-4"},ye={class:"space-y-2"},ge={class:"space-y-2 mt-6"},we=$({__name:"RecoverPassword",setup(b){const c=g(),e=E(),a=async()=>{if(c.loading=!0,!i.value||i.value==="")e.params.icon="alert",e.params.title="Informe o email",e.params.buttons=[{text:"Ok",value:1,keyConfirm:!0,icon:"pi pi-check",keyExit:!1,type:"primary"}],await e.confirmation();else{const r=await c.recoverPassword(i.value);r.success===!1?(e.params.icon="alert",e.params.title=r.message?r.message:"Erro ao recuperar senha",e.params.buttons=[{text:"Ok",value:1,keyConfirm:!0,icon:"pi pi-check",keyExit:!1,type:"primary"}],await e.confirmation()):(e.params.icon="success",e.params.title=r.message?r.message:"success, verifique seu email",e.params.buttons=[{text:"Ok",value:1,keyConfirm:!0,icon:"pi pi-check",keyExit:!1,type:"primary"}],await e.confirmation(),c.removeItemRecoverPasswordIfExists(!0))}c.loading=!1},i=_("");return(r,o)=>{const d=p("AppText"),v=p("Button");return u(),w("div",_e,[ve,t("div",fe,[t("div",he,[t("div",ye,[t("div",ge,[s(d,{modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=n=>i.value=n),title:"Email",type:"email",position:"left",icon:"pi pi-user",pclass:"w-full","id-component":"user",autofocus:!0},null,8,["modelValue"])])])]),s(v,{id:"btn-login",label:l(c).loading?"Enviando email...":"Enviar acesso por email",type:"button",icon:"pi pi-check",class:"mt-4 w-full",onClick:o[1]||(o[1]=n=>a())},null,8,["label"])])])}}}),ke={class:"mt-6"},xe=t("h6",{class:"text-center mb-3 cursor-default"},"Acesso por email solicitado!",-1),$e=t("h6",{class:"text-center mb-3 cursor-default"}," Em alguns minutos você receberá o link no email ",-1),be=[xe,$e],Ve=$({__name:"RecoverPasswordSuccess",setup(b){return(c,e)=>(u(),w("div",ke,be))}}),Ee={class:"card p-4 rounded-md shadow-lg sm:p-8 sm:w-[600px] mx-auto"},Ae={key:0},Ce={class:"font-bold"},Re=$({__name:"authLogin",setup(b){const c=R(),e=g(),a=C();return I(()=>{e.profile.type!=="visit"&&e.profile.token&&(c.estado.profileSidebarVisible=!1,a.push({path:`/${e.getSection}/myaccount`}))}),(i,r)=>{const o=p("TabMenu"),d=p("Layout"),v=M("ripple");return u(),V(d,{title:"Login"},{default:y(()=>[t("div",Ee,[l(e).profile.type==="visit"&&l(e)?(u(),w("div",Ae,[s(o,{activeIndex:l(e).itemActive,"onUpdate:activeIndex":r[0]||(r[0]=n=>l(e).itemActive=n),model:l(e).items},{item:y(({item:n,props:h})=>[U((u(),w("a",D(h.action,{class:"flex align-items-center gap-2"}),[t("span",Ce,N(n.title),1)],16)),[[v]])]),_:1},8,["activeIndex","model"]),l(e).items[l(e).itemActive].slug==="login"?(u(),V(ae,{key:0})):x("",!0),l(e).items[l(e).itemActive].slug==="register"?(u(),V(me,{key:1})):x("",!0),l(e).items[l(e).itemActive].slug==="recover-password"?(u(),V(we,{key:2})):x("",!0),l(e).items[l(e).itemActive].slug==="recover-password-success"?(u(),V(Ve,{key:3})):x("",!0)])):x("",!0)])]),_:1})}}});export{Re as default};
