"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[995],{2466:function(e,a,t){t.r(a),t.d(a,{default:function(){return V}});t(7658);var l=t(3396),n=t(4870),u=t(9242),i=t(2268),o=t(7139),s=t(2483),d=t(6056),r=t(4287),c=t(6144),m=t(4895),p=t(870),v=t(3324),f=t(1888),h=t(9221),w=t(3369),_=t(7325);const g=e=>((0,l.dD)("data-v-66a94ee6"),e=e(),(0,l.Cn)(),e),U={class:"d-flex justify-center align-center"},k={class:"elevation-10 rounded-lg py-3 px-4"},b=g((()=>(0,l._)("h1",{class:"text-white text-center mb-5"},"Login",-1))),S={class:"mb-4"},W={class:"mb-6"},x={class:"w-100 text-center"};var y={__name:"LoginView",setup(e){let a=(0,n.iH)([]);(0,l.bv)((async()=>{(0,r.cf)((0,r.hJ)(d.db,"usuarios"),(e=>{e.forEach((e=>{const t={id:e.id,nome:e.data().nome,gmail:e.data().gmail,senha:e.data().senha};a.value.push(t)}))}))}));let t=(0,n.iH)(""),g=(0,n.iH)(""),y=(0,o.oR)(),H=(0,s.tv)();const P=()=>{let e=t.value.trim(),l=g.value.trim();if(""!=e&&""!=l){let t=a.value.find((a=>a.gmail===e&&a.senha===l)),n=a.value.find((a=>a.gmail==e)),u=a.value.find((e=>e.senha==l)),i=a.value.find((a=>{if(a.gmail==e)return a.nome}));if(t){V.value=!0,setTimeout((()=>{V.value=!1,H.push("/painel")}),900);const e={id:n.id,nome:i.nome,gmail:n.gmail,senha:u.senha,tokenOn:!0};y.commit("addToken",e)}else j("Conta não encontrada!")}else Z(t.value,g.value)};let V=(0,n.iH)(!1),q=(0,n.iH)(!1),C=(0,n.iH)(!1);const Z=(e,a)=>{""===e&&(q.value=!0),""===a&&(C.value=!0)};let T=(0,n.iH)(!1),E=(0,n.iH)("");const j=e=>{T.value=!0,E.value=e,setTimeout((()=>{T.value=!1}),2e3)};return(e,a)=>{const o=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("header",U,[(0,l.Wm)(w.K,{class:"d-flex justify-center align-center"},{default:(0,l.w5)((()=>[(0,l._)("form",k,[b,(0,l._)("div",S,[(0,l.wy)((0,l._)("input",{required:"","onUpdate:modelValue":a[0]||(a[0]=e=>(0,n.dq)(t)?t.value=e:t=e),class:"text-white w-100 border-0 pa-2 rounded",type:"email",placeholder:"Seu email"},null,512),[[u.nr,(0,n.SU)(t)]]),(0,l.Wm)(c.Z,{statePopup:(0,n.SU)(q)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Gmail incorreto! ")])),_:1},8,["statePopup"])]),(0,l._)("div",W,[(0,l.wy)((0,l._)("input",{required:"","onUpdate:modelValue":a[1]||(a[1]=e=>(0,n.dq)(g)?g.value=e:g=e),class:"text-white w-100 border-0 pa-2 rounded",type:"password",placeholder:"Sua senha"},null,512),[[u.nr,(0,n.SU)(g)]]),(0,l.Wm)(c.Z,{statePopup:(0,n.SU)(C)},{default:(0,l.w5)((()=>[(0,l.Uk)(" Senha incorreta! ")])),_:1},8,["statePopup"])]),(0,l.Wm)(p.T,{disabled:(0,n.SU)(V),loading:(0,n.SU)(V),onClick:a[2]||(a[2]=e=>P()),class:"w-100 my-3 button-entrar"},{default:(0,l.w5)((()=>[(0,l.Uk)("Entrar")])),_:1},8,["disabled","loading"]),(0,l._)("div",x,[(0,l.Wm)(o,{class:"link-registrar text-decoration-none font-weight-light",to:"/auth/registrar"},{default:(0,l.w5)((()=>[(0,l.Uk)("Não tem uma conta?")])),_:1})])])])),_:1})]),(0,l.Wm)(h.B,{modelValue:(0,n.SU)(V),"onUpdate:modelValue":a[3]||(a[3]=e=>(0,n.dq)(V)?V.value=e:V=e),scrim:!1,persistent:"",width:"auto"},{default:(0,l.w5)((()=>[(0,l.Wm)(v._,{color:"blue-darken-1"},{default:(0,l.w5)((()=>[(0,l.Wm)(f.Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Entrando "),(0,l.Wm)(_.K,{indeterminate:"",color:"white",class:"mb-0"})])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(m.Z,{statePopupPanel:(0,n.SU)(T)},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)((0,n.SU)(E)),1)])),_:1},8,["statePopupPanel"])],64)}}},H=t(89);const P=(0,H.Z)(y,[["__scopeId","data-v-66a94ee6"]]);var V=P}}]);
//# sourceMappingURL=995.e61390ee.js.map