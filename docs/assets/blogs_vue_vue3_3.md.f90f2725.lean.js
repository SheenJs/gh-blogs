import{d as i,C as d,o as r,c as E,H as o,w as t,a as n,F as u,b,y as v,k as s,t as m,h as g,aa as C,ab as D,ac as h,a2 as A,a3 as f,_ as B,Q as F}from"./chunks/framework.8c899d34.js";const _=i({__name:"DefineEmits",emits:["change","update"],setup(e,{emit:a}){return(c,l)=>{const p=d("a-button");return r(),E(u,null,[o(p,{onClick:l[0]||(l[0]=y=>a("change",666))},{default:t(()=>[n("按钮")]),_:1}),o(p,{onClick:l[1]||(l[1]=y=>a("update",666,7777,"哈哈哈"))},{default:t(()=>[n("按钮")]),_:1})],64)}}}),k=i({__name:"vue3_3.md.demo.7a10cf10",setup(e){const a=l=>{console.log(l)},c=(l,p,y)=>{console.log(l,p,y)};return(l,p)=>(r(),b(_,{onChange:a,onUpdate:c}))}}),q=i({__name:"ReactiveProps",props:{name:{},age:{}},setup(e){return v(()=>{console.log(e.name,e.age)}),(a,c)=>(r(),E(u,null,[s("div",null,m(a.name),1),s("div",null,m(a.age),1)],64))}}),P=i({__name:"vue3_3.md.demo.7a10cf0e",setup(e){const a=g({name:1,age:18}),c=()=>{a.value={name:Math.random(),age:Math.random()}};return(l,p)=>{const y=d("a-button");return r(),E(u,null,[o(y,{onClick:c},{default:t(()=>[n("change")]),_:1}),o(q,C(D(a.value)),null,16)],64)}}}),x={__name:"DefineModel",props:{modelValue:{}},emits:["update:modelValue"],setup(e){const a=h(e,"modelValue");return(c,l)=>A((r(),E("input",{"onUpdate:modelValue":l[0]||(l[0]=p=>a.value=p)},null,512)),[[f,a.value]])}},T=i({__name:"vue3_3.md.demo.7a10cf0c",setup(e){const a=g("");return(c,l)=>(r(),E(u,null,[s("div",null,m(a.value),1),o(x,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=p=>a.value=p)},null,8,["modelValue"])],64))}});const M=B(T,[["__scopeId","data-v-e51330e2"]]),V=F("",10),R=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"DefineEmits"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@change"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'change'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@update"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'update'"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"DefineEmits"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'ts'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," DefineEmits "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'./components/DefineEmits.vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"change"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"e"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(e)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"update"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"a"),s("span",{style:{color:"#E1E4E8"}},","),s("span",{style:{color:"#FFAB70"}},"b"),s("span",{style:{color:"#E1E4E8"}},","),s("span",{style:{color:"#FFAB70"}},"c"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(a,b,c)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"DefineEmits"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@change"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'change'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@update"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'update'"),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"DefineEmits"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'ts'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," DefineEmits "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'./components/DefineEmits.vue'"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"change"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"e"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(e)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"update"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"a"),s("span",{style:{color:"#24292E"}},","),s("span",{style:{color:"#E36209"}},"b"),s("span",{style:{color:"#24292E"}},","),s("span",{style:{color:"#E36209"}},"c"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(a,b,c)")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")])])])],-1),S=F("",6),I=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'change'"),s("span",{style:{color:"#E1E4E8"}},">change</"),s("span",{style:{color:"#85E89D"}},"a-button"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ReactiveProps"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-bind"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'user'"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"ReactiveProps"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'ts'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," ReactiveProps "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'./components/ReactiveProps.vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"user"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    name: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    age: "),s("span",{style:{color:"#79B8FF"}},"18")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  })")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"change"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    user.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      name: Math."),s("span",{style:{color:"#B392F0"}},"random"),s("span",{style:{color:"#E1E4E8"}},"(),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      age: Math."),s("span",{style:{color:"#B392F0"}},"random"),s("span",{style:{color:"#E1E4E8"}},"()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'change'"),s("span",{style:{color:"#24292E"}},">change</"),s("span",{style:{color:"#22863A"}},"a-button"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ReactiveProps"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-bind"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'user'"),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"ReactiveProps"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'ts'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," ReactiveProps "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'./components/ReactiveProps.vue'"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"user"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"({")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    name: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    age: "),s("span",{style:{color:"#005CC5"}},"18")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  })")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"change"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    user.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      name: Math."),s("span",{style:{color:"#6F42C1"}},"random"),s("span",{style:{color:"#24292E"}},"(),")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      age: Math."),s("span",{style:{color:"#6F42C1"}},"random"),s("span",{style:{color:"#24292E"}},"()")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")])])])],-1),w=F("",4),N=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'ts'"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," DefineModel "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'./components/DefineModel.vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"msg"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"''"),s("span",{style:{color:"#E1E4E8"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">{{msg}}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"DefineModel"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'msg'"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"DefineModel"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'less'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"border"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"solid"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"red"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"padding"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#85E89D"}},"input"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"border"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"pink"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"solid"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'ts'"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," DefineModel "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'./components/DefineModel.vue'"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"msg"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"''"),s("span",{style:{color:"#24292E"}},");")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">{{msg}}</"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"DefineModel"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'msg'"),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"DefineModel"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'less'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"border"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"solid"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"red"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"padding"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#22863A"}},"input"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"border"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"pink"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"solid"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),U=JSON.parse('{"title":"vue 3.3","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/vue/vue3_3.md","filePath":"blogs/vue/vue3_3.md"}'),$={name:"blogs/vue/vue3_3.md"},O=Object.assign($,{setup(e){return(a,c)=>{const l=d("demo");return r(),E("div",null,[V,o(l,{customClass:"",sourceCode:`<template>
  <DefineEmits @change='change' @update='update'></DefineEmits>
</template>
<script lang='ts' setup>
  import DefineEmits from './components/DefineEmits.vue';
  const change = (e) => {
    console.log(e)
  }
  const update = (a,b,c) => {
    console.log(a,b,c)
  }
<\/script>
`},{highlight:t(()=>[R]),default:t(()=>[o(k)]),_:1}),S,o(l,{customClass:"",sourceCode:`
<template>
  <a-button @click='change'>change</a-button>
  <ReactiveProps v-bind='user'></ReactiveProps>
</template>
<script lang='ts' setup>
  import ReactiveProps from './components/ReactiveProps.vue';
  import { ref } from 'vue';

  const user = ref({
    name: 1,
    age: 18
  })

  const change = () => {
    user.value = {
      name: Math.random(),
      age: Math.random()
    }
  }
<\/script>
`},{highlight:t(()=>[I]),default:t(()=>[o(P)]),_:1}),w,o(l,{customClass:"",sourceCode:`
<script setup lang='ts'>
  import { ref } from 'vue';
  import DefineModel from './components/DefineModel.vue';
  const msg = ref('');
<\/script>

<template>
  <div>{{msg}}</div>
  <DefineModel v-model='msg'></DefineModel>
</template>
<style lang='less' scoped>
  div {
    border: 1px solid red;
    padding: 10px 0;
  }

  input {
    border: pink 1px solid;
  }
</style>
`},{highlight:t(()=>[N]),default:t(()=>[o(M)]),_:1})])}}});export{U as __pageData,O as default};
