import{_ as r}from"./lock-Be6elCLs.js";import{u,l as V}from"./other-W7N2QaEC.js";import{f as m,B as p,_ as v}from"./common-CmvQPKQf.js";import"./vendor-2NBzBT5M.js";const g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACXElEQVRYR+2Xu48PURTHP9/SI17REfwBQmU1JDbxLsTSCKFEsp14rMqqrF3RSVASovGIAovEJjRWRfwBCJ14xaM8cuRMco2Z3+/O+NlEsreamXvOPZ/5nnvPmRGlYWZWftbLe0lK1/vtxiemAUKFt8Aivy5L1jQdiaLvJC0u+/+RggB4CvSF8UpJL5oGjnVWAM/Dd1LS6lyAG8BAGO+TdLklwF7gUvjelLQjF+A0cDSMz0g60hJgDDgcvqOSjuUCbAHuhPF9SZtaAowDG8N3q6S7uQBzgM+JcZ+kZ00gzGwVMJn4zJX0JQsgNtA9oHjzMUlFSrI4zGwUKFI3LmlzlWPlKQiAE8BwOL0Clkv6lhPdzGYBL4FlYT8s6WQjgIB4BKwLxxFJxzMBTgFDYTshqb/Or1aBAPDgDlGMa8CgpA9VC5rZAuAcsCuZ75c00QqgIhX+yIuUB/Fz/TVsZkfdGATSYlMrfQHUUYHCyMzS/VA8/gH4RvXhG2xG6S27Bnf7LIAaJTpth6zg/w9ATQq+A7dDhm3AzH+SgorgXhHPenBJDuEfMR7cIQ4BXgGL0TUVTY/hdeCgpPc1x3AhcB7Y2ZNjaGZpIarsZjUgaTdtV4hK0k99KS69/d82o1oV6j7J5gEfE3l70Y7nS/pUTlkdwHYvtWH8UNKGTlWnbs7MHgDrY35A0q1cgLSbXZR0oCXABWB/+FZ20zoFrgC7w3FIku/qxsPM/BtwJByvStqTq8BjYE0Yd2ynnajMLG3nTyStzQV4DSz51SxK/3JNZUh+TN5IWtoVYPrfcKoV+AnThhIwJw9nGAAAAABJRU5ErkJggg==",_="/douyin/assets/qingshaonian-AWWzZKdJ.png",A="/douyin/assets/img-type3-CTW0va1u.png",t=s=>(Vue.pushScopeId("data-v-efb6238c"),s=s(),Vue.popScopeId(),s),f={class:"DetailSetting"},E={key:0,class:"content type1"},B=Vue.createStaticVNode('<div class="notice" data-v-efb6238c><img src="'+r+'" alt="" data-v-efb6238c><span data-v-efb6238c>时间锁已关闭</span></div><div class="row mt1r no-active" data-v-efb6238c><div class="left" data-v-efb6238c><img src="'+g+'" alt="" data-v-efb6238c><span data-v-efb6238c>可为时间锁设置一个触发时间</span></div></div><div class="row mt1r no-active" data-v-efb6238c><div class="left" data-v-efb6238c><img src="'+V+'" alt="" data-v-efb6238c><span data-v-efb6238c>开启时间锁后，单日使用时长超过触发时间，需输入密码才能继续使用</span></div></div><div class="row mt1r mb1r no-active" data-v-efb6238c><div class="left" data-v-efb6238c><img src="'+r+'" alt="" data-v-efb6238c><span data-v-efb6238c>开启时间锁，需先设置独立密码；忘记密码后可通过申诉重置密码</span></div></div>',4),y=t(()=>Vue.createElementVNode("div",{class:"left"},[Vue.createElementVNode("span",null,"触发时间")],-1)),N={class:"right"},h=t(()=>Vue.createElementVNode("div",{class:"footer"},[Vue.createElementVNode("div",{class:"button primary"},"开启时间锁")],-1)),S={key:1,class:"content type2"},T=t(()=>Vue.createElementVNode("img",{class:"desc",src:_,alt:""},null,-1)),b={class:"footer"},C={class:"notice"},k=t(()=>Vue.createElementVNode("span",null,"更多信息可阅读",-1)),w=t(()=>Vue.createElementVNode("div",{class:"button primary"},"开启青少年模式",-1)),G={key:2,class:"content type2"},I=t(()=>Vue.createElementVNode("img",{class:"desc",src:A,alt:""},null,-1)),J={class:"footer"},M={class:"notice"},R=t(()=>Vue.createElementVNode("span",null,"我已阅读并接受",-1)),U=Vue.defineComponent({name:"DetailSetting"}),z=Vue.defineComponent({...U,setup(s){const l=VueRouter.useRoute(),a=u(),e=Vue.reactive({type:0,triggerTime:m.TRIGGER_TIME.TIME60});return Vue.onMounted(()=>{e.type=~~l.query.type;let c=localStorage.getItem("changeTriggerTime");c!==null&&(e.triggerTime=Number(c))}),(c,o)=>{const d=Vue.resolveComponent("BaseHeader"),i=Vue.resolveComponent("dy-back");return Vue.openBlock(),Vue.createElementBlock("div",f,[Vue.createVNode(d),e.type===0?(Vue.openBlock(),Vue.createElementBlock("div",E,[B,Vue.createElementVNode("div",{class:"row mt1r mb1r",onClick:o[0]||(o[0]=n=>Vue.unref(a)("trigger-time",{triggerTime:e.triggerTime}))},[y,Vue.createElementVNode("div",N,[Vue.createElementVNode("span",null,Vue.toDisplayString(e.triggerTime)+"分钟",1),Vue.createVNode(i,{direction:"right"})])]),h])):Vue.createCommentVNode("",!0),e.type===1?(Vue.openBlock(),Vue.createElementBlock("div",S,[T,Vue.createElementVNode("div",b,[Vue.createElementVNode("div",C,[k,Vue.createElementVNode("span",{style:{color:"yellow"},onClick:o[1]||(o[1]=n=>Vue.unref(a)("/service-protocol",{type:"儿童/青少年使用须知"}))},"《儿童/青少年使用须知》")]),w])])):Vue.createCommentVNode("",!0),e.type===2?(Vue.openBlock(),Vue.createElementBlock("div",G,[I,Vue.createElementVNode("div",J,[Vue.createElementVNode("div",M,[R,Vue.createElementVNode("span",{style:{color:"yellow"},onClick:o[2]||(o[2]=n=>Vue.unref(a)("/service-protocol",{type:"抖音亲子平台服务协议"}))}," 《抖音亲子平台服务协议》 ")]),Vue.createVNode(p,{type:"primary"},{default:Vue.withCtx(()=>[Vue.createTextVNode("立即绑定")]),_:1})])])):Vue.createCommentVNode("",!0)])}}}),Z=v(z,[["__scopeId","data-v-efb6238c"]]);export{Z as default};
