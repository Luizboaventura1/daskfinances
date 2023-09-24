"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[352],{322:function(e,a,t){t.d(a,{Z:function(){return y}});var l=t(3396),n=t(2268),s=t(4870),o=t(6056),i=t(4287),d=t(7139),c=t(6824),r=t(8521);const u=e=>((0,l.dD)("data-v-3b86cf36"),e=e(),(0,l.Cn)(),e),v={class:"saldo elevation-6 rounded-lg pa-2 d-flex ma-3"},p=u((()=>(0,l._)("span",{class:"text-white font-weight-bold"},"Saldo",-1))),w={class:"font-weight-regular text-green-accent-3 text-h6 w-100 align-self-end text-right"},g={class:"receitas elevation-6 rounded-lg pa-2 d-flex ma-3"},x=u((()=>(0,l._)("span",{class:"text-white font-weight-bold"},"Receitas",-1))),h={class:"font-weight-regular text-blue text-h6 w-100 align-self-end text-right"},m={class:"gastos elevation-6 rounded-lg pa-2 d-flex ma-3"},f=u((()=>(0,l._)("span",{class:"text-white font-weight-bold"},"Gastos",-1))),_={class:"font-weight-regular text-red-accent-3 text-h6 w-100 align-self-end text-right"};var b={__name:"BalancePanel",setup(e){const a=(0,d.oR)();let t=(0,s.iH)(0),u=(0,s.iH)(0),b=(0,s.iH)(0),k=(0,s.iH)();(0,l.bv)((async()=>{(0,i.cf)((0,i.hJ)(o.db,"saldo"),(e=>{e.forEach((e=>{a.state.token.id===e.data().idUser&&(t.value=e.data().saldo,u.value=e.data().receita,b.value=e.data().gasto,k.value=e.id)}))}))}));const H=e=>`R$ ${parseFloat(e).toFixed(2).replace(".",",")}`;return(e,a)=>((0,l.wg)(),(0,l.j4)(c.o,{class:"container-saldo-conta w-100"},{default:(0,l.w5)((()=>[(0,l.Wm)(r.D,{cols:"12",sm:"4"},{default:(0,l.w5)((()=>[(0,l._)("div",v,[p,(0,l._)("div",w,(0,n.zw)(H((0,s.SU)(t))),1)])])),_:1}),(0,l.Wm)(r.D,{cols:"12",sm:"4"},{default:(0,l.w5)((()=>[(0,l._)("div",g,[x,(0,l._)("div",h,(0,n.zw)(H((0,s.SU)(u))),1)])])),_:1}),(0,l.Wm)(r.D,{cols:"12",sm:"4"},{default:(0,l.w5)((()=>[(0,l._)("div",m,[f,(0,l._)("div",_,(0,n.zw)(H((0,s.SU)(b))),1)])])),_:1})])),_:1}))}},k=t(89);const H=(0,k.Z)(b,[["__scopeId","data-v-3b86cf36"]]);var y=H},7921:function(e,a,t){t.d(a,{Z:function(){return r}});var l=t(3396);const n=e=>((0,l.dD)("data-v-28bf1660"),e=e(),(0,l.Cn)(),e),s={key:0,class:"popup elevation-6 rounded-lg text-white overflow-hidden pa-2 d-flex justify-center align-center"},o=n((()=>(0,l._)("div",{class:"container-bar"},[(0,l._)("div",{class:"bar"})],-1)));var i={__name:"AlertPopupPanel",props:{statePopupPanel:Boolean},setup(e){return(a,t)=>e.statePopupPanel?((0,l.wg)(),(0,l.iD)("div",s,[(0,l._)("span",null,[(0,l.WI)(a.$slots,"default")]),o])):(0,l.kq)("",!0)}},d=t(89);const c=(0,d.Z)(i,[["__scopeId","data-v-28bf1660"]]);var r=c},6214:function(e,a,t){t.r(a),t.d(a,{default:function(){return M}});var l=t(3396),n=t(4055),s=t(322),o=t(4870),i=t(9242),d=t(2268),c=t(3383),r=t(7139),u=t(6056),v=t(4287),p=t(7921),w=t(5809),g=t(702);const x=e=>((0,l.dD)("data-v-3e4818fb"),e=e(),(0,l.Cn)(),e),h={key:0,class:"background-modal d-flex align-center justify-center px-3"},m={class:"add-new-transaction-modal pa-4 rounded-lg"},f={class:"d-flex pb-6 justify-space-between"},_=x((()=>(0,l._)("h1",{class:"text-white"},"Nova transação",-1))),b={class:"inputs-container"},k=["max"],H={class:"transaction-type d-flex justify-space-between py-2 mb-4"},y={xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 512.171 512.171",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve",class:""},U=x((()=>(0,l._)("g",null,[(0,l._)("path",{d:"M479.046 283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305 4.779 347.526 0 341.638 0H170.971c-5.888 0-10.667 4.779-10.667 10.667v266.667H42.971a10.702 10.702 0 0 0-9.856 6.571c-1.643 3.989-.747 8.576 2.304 11.627l212.8 213.504c2.005 2.005 4.715 3.136 7.552 3.136s5.547-1.131 7.552-3.115l213.419-213.504a10.645 10.645 0 0 0 2.304-11.628z","data-original":"#000000"})],-1))),P=[U],D={xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 512.171 512.171",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve",class:""},j=x((()=>(0,l._)("g",null,[(0,l._)("path",{d:"M479.046 283.925c-1.664-3.989-5.547-6.592-9.856-6.592H352.305V10.667C352.305 4.779 347.526 0 341.638 0H170.971c-5.888 0-10.667 4.779-10.667 10.667v266.667H42.971a10.702 10.702 0 0 0-9.856 6.571c-1.643 3.989-.747 8.576 2.304 11.627l212.8 213.504c2.005 2.005 4.715 3.136 7.552 3.136s5.547-1.131 7.552-3.115l213.419-213.504a10.645 10.645 0 0 0 2.304-11.628z","data-original":"#000000"})],-1))),C=[j],S={class:"buttons-container"},W={class:"container-icon d-flex justify-center align-center"},Z={xmlns:"http://www.w3.org/2000/svg",version:"1.1","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve",class:""},I=x((()=>(0,l._)("g",null,[(0,l._)("path",{d:"M467 211H301V45c0-24.853-20.147-45-45-45s-45 20.147-45 45v166H45c-24.853 0-45 20.147-45 45s20.147 45 45 45h166v166c0 24.853 20.147 45 45 45s45-20.147 45-45V301h166c24.853 0 45-20.147 45-45s-20.147-45-45-45z","data-original":"#000000",class:""})],-1))),V=[I],z=x((()=>(0,l._)("div",{class:"container-text text-white font-weight-bold"}," Nova transação ",-1)));var T={__name:"AddTransactionRoot",setup(e){const a=(0,r.oR)();let t=(0,o.iH)(""),n=(0,o.iH)(""),s=(0,o.iH)(""),x=(0,o.iH)("");const U=()=>{if(B()){(0,v.ET)((0,v.hJ)(u.db,"transacoes"),{idUser:a.state.token.id,nome:t.value,valor:n.value,data:s.value.replace(/-/g,"/"),tipo:x.value});const e=(0,o.iH)("");"string"===typeof $.value&&(e.value=(0,v.JU)(u.db,"saldo",$.value),"receita"===x.value?(0,v.r7)(e.value,{saldo:j.value+=parseInt(n.value),receita:I.value+=parseInt(n.value)}):(0,v.r7)(e.value,{saldo:j.value-=parseInt(n.value),gasto:T.value+=parseInt(n.value)})),A("Transação conluída!"),R(),Q(),N.value=!1}else M("Preencha os campos!")};(0,l.bv)((async()=>{(0,v.cf)((0,v.hJ)(u.db,"saldo"),(e=>{e.forEach((e=>{a.state.token.id===e.data().idUser&&(j.value=e.data().saldo,I.value=e.data().receita,T.value=e.data().gasto,$.value=e.id)}))}))}));let j=(0,o.iH)(0),I=(0,o.iH)(0),T=(0,o.iH)(0),$=(0,o.iH)();const q=()=>{n.value=n.value.replace(/[^0-9.]/g,"")},B=()=>""!=t.value.trim()&&""!=n.value.trim()&&""!=s.value.trim()&&""!=x.value.trim(),R=()=>{t.value="",n.value="",s.value="",x.value=""};let E=(0,o.iH)(!1),J=(0,o.iH)("");const M=e=>{E.value=!0,J.value=e,setTimeout((()=>{E.value=!1}),2e3)};let F=(0,o.iH)(!1),Y=(0,o.iH)("");const A=e=>{F.value=!0,Y.value=e,setTimeout((()=>{F.value=!1}),2e3)};let N=(0,o.iH)(!1),G=(0,o.iH)(""),K=(0,o.iH)("");const L=()=>{x.value="receita",K.value="bg-green-darken-2",G.value=""},O=()=>{x.value="gasto",G.value="bg-red-accent-3",K.value=""},Q=()=>{x.value="",G.value="bg-transparent",K.value=""},X=()=>{const e=new Date,a=e.getFullYear(),t=e.getMonth()+1,l=e.getDate(),n=`${a}-${t<10?"0":""}${t}-${l<10?"0":""}${l}`;return n};return(e,a)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,o.SU)(N)?((0,l.wg)(),(0,l.iD)("div",h,[(0,l._)("div",m,[(0,l._)("nav",f,[_,(0,l.Wm)(c.Z,{onClick:a[0]||(a[0]=e=>(0,o.dq)(N)?N.value=!1:N=!1)})]),(0,l._)("div",b,[(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>(0,o.dq)(t)?t.value=e:t=e),class:"input-transaction text-white w-100 border-0 px-2 py-3 rounded mb-4",placeholder:"Descrição",type:"text",maxlength:"30"},null,512),[[i.nr,(0,o.SU)(t)]]),(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>(0,o.dq)(n)?n.value=e:n=e),class:"input-transaction text-white w-100 border-0 px-2 py-3 rounded mb-4",placeholder:"Valor da transação",onInput:q,maxlength:"14"},null,544),[[i.nr,(0,o.SU)(n)]]),(0,l.wy)((0,l._)("input",{"onUpdate:modelValue":a[3]||(a[3]=e=>(0,o.dq)(s)?s.value=e:s=e),type:"date",class:"input-transaction w-100 px-2 py-3 text-white rounded mb-4",min:"2000-01-01",max:X()},null,8,k),[[i.nr,(0,o.SU)(s)]])]),(0,l._)("div",H,[(0,l.Wm)(g.T,{onClick:L,class:(0,d.C_)(["prohibited-button elevation-0 text-white",(0,o.SU)(K)])},{default:(0,l.w5)((()=>[(0,l.Uk)(" Entrada "),((0,l.wg)(),(0,l.iD)("svg",y,P))])),_:1},8,["class"]),(0,l.Wm)(g.T,{onClick:O,class:(0,d.C_)(["exit-button elevation-0",(0,o.SU)(G)])},{default:(0,l.w5)((()=>[(0,l.Uk)(" Saida "),((0,l.wg)(),(0,l.iD)("svg",D,C))])),_:1},8,["class"])]),(0,l._)("div",S,[(0,l.Wm)(g.T,{onClick:U,class:"w-100 elevation-0 bg-blue-accent-3"},{default:(0,l.w5)((()=>[(0,l.Uk)(" Confirmar ")])),_:1})])])])):(0,l.kq)("",!0),(0,l.Wm)(p.Z,{statePopupPanel:(0,o.SU)(E)},{default:(0,l.w5)((()=>[(0,l.Uk)((0,d.zw)((0,o.SU)(J)),1)])),_:1},8,["statePopupPanel"]),(0,l.Wm)(w.Z,{statePopupPanel:(0,o.SU)(F)},{default:(0,l.w5)((()=>[(0,l.Uk)((0,d.zw)((0,o.SU)(Y)),1)])),_:1},8,["statePopupPanel"]),(0,l._)("div",{onClick:a[4]||(a[4]=e=>(0,o.dq)(N)?N.value=!0:N=!0),class:"button-add-transaction rounded-pill d-flex align-center"},[(0,l._)("div",W,[((0,l.wg)(),(0,l.iD)("svg",Z,V))]),z])],64))}},$=t(89);const q=(0,$.Z)(T,[["__scopeId","data-v-3e4818fb"]]);var B=q;const R={class:"container-add-finance pa-3 rounded-lg ma-3 elevation-6"};var E={__name:"PainelView",setup(e){return(e,a)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(s.Z),(0,l._)("div",R,[(0,l.Wm)(B)]),(0,l.Wm)(n.Z)],64))}};const J=(0,$.Z)(E,[["__scopeId","data-v-d5517b5a"]]);var M=J}}]);
//# sourceMappingURL=352.14726aa5.js.map