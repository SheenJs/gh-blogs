import{m as t}from"./chunks/mock.93bc3284.js";import{d as b,h as C,C as d,o as p,c as e,H as n,w as o,a as l,F as i,D as h,N as A,t as m,_ as g,l as D,k as s,Q as v}from"./chunks/framework.7096fd12.js";import"./chunks/commonjsHelpers.725317a4.js";const k=b({__name:"Array.md.demo.72a5778c",props:{method:{},value:{}},setup(B){const a=C(Array.from({length:5},()=>({color:t.mock("@color"),value:t.Random.integer(0,50)}))),c=()=>{a.value.push({color:t.mock("@color"),value:t.Random.integer(0,50)})};return(r,u)=>{const E=d("AButton");return p(),e(i,null,[n(E,{onClick:c},{default:o(()=>[l("执行")]),_:1}),(p(!0),e(i,null,h(a.value,({color:y,value:F})=>(p(),e("div",{class:"item",style:A({background:`${y}`})},m(F),5))),256))],64)}}});const x=g(k,[["__scopeId","data-v-19a9ba8e"]]),_=b({__name:"Array.md.demo.72a5778a",props:{method:{},value:{}},setup(B){const a=C(Array.from({length:5},()=>({color:t.mock("@color"),value:t.Random.integer(0,50)}))),c=()=>{a.value.pop()};return(r,u)=>{const E=d("AButton");return p(),e(i,null,[n(E,{onClick:c},{default:o(()=>[l("执行")]),_:1}),(p(!0),e(i,null,h(a.value,({color:y,value:F})=>(p(),e("div",{class:"item",style:A({background:`${y}`})},m(F),5))),256))],64)}}});const j=g(_,[["__scopeId","data-v-7fff69cb"]]),q=b({__name:"Array.md.demo.72a57788",props:{method:{},value:{}},setup(B){const a=C(Array.from({length:5},()=>({color:t.mock("@color"),value:t.Random.integer(0,50)}))),c=()=>{a.value.unshift({color:t.mock("@color"),value:t.Random.integer(0,50)})};return(r,u)=>{const E=d("AButton");return p(),e(i,null,[n(E,{onClick:c},{default:o(()=>[l("执行")]),_:1}),(p(!0),e(i,null,h(a.value,({color:y,value:F})=>(p(),e("div",{class:"item",style:A({background:`${y}`})},m(F),5))),256))],64)}}});const w=g(q,[["__scopeId","data-v-31e2931e"]]),P=b({__name:"Array.md.demo.72a57786",props:{method:{},value:{}},setup(B){const a=C(Array.from({length:5},()=>({color:t.mock("@color"),value:t.Random.integer(0,50)}))),c=()=>{a.value.shift()};return(r,u)=>{const E=d("AButton");return p(),e(i,null,[n(E,{onClick:c},{default:o(()=>[l("执行")]),_:1}),(p(!0),e(i,null,h(a.value,({color:y,value:F})=>(p(),e("div",{class:"item",style:A({background:`${y}`})},m(F),5))),256))],64)}}});const R=g(P,[["__scopeId","data-v-f3fc5210"]]),N=b({__name:"Array.md.demo.72a57784",props:{method:{},value:{}},setup(B){const a=C(Array.from({length:5},()=>({color:t.mock("@color"),value:t.Random.integer(0,50)}))),c=()=>{a.value.reverse()};return(r,u)=>{const E=d("AButton");return p(),e(i,null,[n(E,{onClick:c},{default:o(()=>[l("执行")]),_:1}),(p(!0),e(i,null,h(a.value,({color:y,value:F})=>(p(),e("div",{class:"item",style:A({background:`${y}`})},m(F),5))),256))],64)}}});const $=g(N,[["__scopeId","data-v-bc12989d"]]),S=b({__name:"Array.md.demo.72a57782",props:{method:{},value:{}},setup(B){const a=C(Array.from({length:5},()=>({color:t.mock("@color"),value:t.Random.integer(0,50)}))),c=C(!0),r=()=>{a.value.sort((u,E)=>D(c)?u.value-E.value:E.value-u.value),c.value=!c.value};return(u,E)=>{const y=d("AButton");return p(),e(i,null,[n(y,{onClick:r},{default:o(()=>[l(m(c.value?"降序":"升序"),1)]),_:1}),(p(!0),e(i,null,h(a.value,({color:F,value:f})=>(p(),e("div",{class:"item",style:A({background:`${F}`})},m(f),5))),256))],64)}}});const I=g(S,[["__scopeId","data-v-0d3d36f9"]]),z=b({__name:"Array.md.demo.72a57780",props:{method:{},value:{}},setup(B){const a=C(Array.from({length:5},()=>({color:t.mock("@color"),value:t.Random.integer(0,50)})));C(!1);const c=()=>{a.value.splice(1,1)},r=()=>{a.value.splice(1,1,{value:t.Random.integer(0,50),color:t.mock("@color")})};return(u,E)=>{const y=d("AButton");return p(),e(i,null,[s("div",null,[n(y,{onClick:r},{default:o(()=>[l("替换1号下标元素")]),_:1}),n(y,{onClick:c},{default:o(()=>[l("移除1号下标元素")]),_:1})]),(p(!0),e(i,null,h(a.value,({color:F,value:f})=>(p(),e("div",{class:"item",style:A({background:`${F}`})},m(f),5))),256))],64)}}});const O=g(z,[["__scopeId","data-v-90d793cc"]]),T=v("",37),J=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"fn"'),s("span",{style:{color:"#E1E4E8"}},">执行</"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ color, value } in list"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ background: `${color}` }"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {{ value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," mock "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'mockjs'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"props"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"defineProps"),s("span",{style:{color:"#E1E4E8"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#FFAB70"}},"method"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"string"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#FFAB70"}},"value"),s("span",{style:{color:"#F97583"}},"?:"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }>();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"list"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      color: mock."),s("span",{style:{color:"#B392F0"}},"mock"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'@color'"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      value: mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"fn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    list.value."),s("span",{style:{color:"#B392F0"}},"push"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      color: mock."),s("span",{style:{color:"#B392F0"}},"mock"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'@color'"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      value: mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".opt"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"margin-bottom"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".item"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"border"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"solid"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"#666"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"60"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"display"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"inline-block"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"line-height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"60"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"justify-content"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"margin"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"font-size"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"12"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"text-align"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"fn"'),s("span",{style:{color:"#24292E"}},">执行</"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"item"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-for"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ color, value } in list"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ background: `${color}` }"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {{ value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," mock "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'mockjs'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"props"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"defineProps"),s("span",{style:{color:"#24292E"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#E36209"}},"method"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"string"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#E36209"}},"value"),s("span",{style:{color:"#D73A49"}},"?:"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }>();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"list"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      color: mock."),s("span",{style:{color:"#6F42C1"}},"mock"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'@color'"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      value: mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"fn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    list.value."),s("span",{style:{color:"#6F42C1"}},"push"),s("span",{style:{color:"#24292E"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      color: mock."),s("span",{style:{color:"#6F42C1"}},"mock"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'@color'"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      value: mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".opt"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"margin-bottom"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".item"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"border"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"solid"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"#666"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"60"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"display"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"inline-block"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"line-height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"60"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"justify-content"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"margin"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"font-size"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"12"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"text-align"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),V=s("ul",null,[s("li",null,"pop 尾部删除元素")],-1),W=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"fn"'),s("span",{style:{color:"#E1E4E8"}},">执行</"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ color, value } in list"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ background: `${color}` }"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {{ value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," mock "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'mockjs'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"props"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"defineProps"),s("span",{style:{color:"#E1E4E8"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#FFAB70"}},"method"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"string"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#FFAB70"}},"value"),s("span",{style:{color:"#F97583"}},"?:"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }>();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"list"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      color: mock."),s("span",{style:{color:"#B392F0"}},"mock"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'@color'"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      value: mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"fn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    list.value."),s("span",{style:{color:"#B392F0"}},"pop"),s("span",{style:{color:"#E1E4E8"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".opt"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"margin-bottom"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".item"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"border"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"solid"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"#666"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"60"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"display"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"inline-block"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"line-height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"60"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"justify-content"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"margin"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"font-size"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"12"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"text-align"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"fn"'),s("span",{style:{color:"#24292E"}},">执行</"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"item"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-for"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ color, value } in list"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ background: `${color}` }"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {{ value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," mock "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'mockjs'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"props"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"defineProps"),s("span",{style:{color:"#24292E"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#E36209"}},"method"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"string"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#E36209"}},"value"),s("span",{style:{color:"#D73A49"}},"?:"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }>();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"list"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      color: mock."),s("span",{style:{color:"#6F42C1"}},"mock"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'@color'"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      value: mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"fn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    list.value."),s("span",{style:{color:"#6F42C1"}},"pop"),s("span",{style:{color:"#24292E"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".opt"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"margin-bottom"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".item"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"border"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"solid"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"#666"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"60"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"display"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"inline-block"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"line-height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"60"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"justify-content"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"margin"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"font-size"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"12"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"text-align"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),H=s("ul",null,[s("li",null,"unshift 头部添加元素")],-1),L=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"fn"'),s("span",{style:{color:"#E1E4E8"}},">执行</"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ color, value } in list"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ background: `${color}` }"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {{ value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," mock "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'mockjs'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"props"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"defineProps"),s("span",{style:{color:"#E1E4E8"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#FFAB70"}},"method"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"string"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#FFAB70"}},"value"),s("span",{style:{color:"#F97583"}},"?:"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }>();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"list"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      color: mock."),s("span",{style:{color:"#B392F0"}},"mock"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'@color'"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      value: mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"fn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    list.value."),s("span",{style:{color:"#B392F0"}},"unshift"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      color: mock."),s("span",{style:{color:"#B392F0"}},"mock"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'@color'"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      value: mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".opt"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"margin-bottom"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".item"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"border"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"solid"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"#666"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"60"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"display"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"inline-block"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"line-height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"60"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"justify-content"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"margin"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"font-size"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"12"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"text-align"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"fn"'),s("span",{style:{color:"#24292E"}},">执行</"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"item"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-for"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ color, value } in list"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ background: `${color}` }"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {{ value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," mock "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'mockjs'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"props"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"defineProps"),s("span",{style:{color:"#24292E"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#E36209"}},"method"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"string"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#E36209"}},"value"),s("span",{style:{color:"#D73A49"}},"?:"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }>();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"list"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      color: mock."),s("span",{style:{color:"#6F42C1"}},"mock"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'@color'"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      value: mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"fn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    list.value."),s("span",{style:{color:"#6F42C1"}},"unshift"),s("span",{style:{color:"#24292E"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      color: mock."),s("span",{style:{color:"#6F42C1"}},"mock"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'@color'"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      value: mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".opt"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"margin-bottom"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".item"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"border"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"solid"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"#666"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"60"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"display"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"inline-block"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"line-height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"60"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"justify-content"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"margin"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"font-size"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"12"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"text-align"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),Q=s("ul",null,[s("li",null,"shift 头部删除元素")],-1),G=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"fn"'),s("span",{style:{color:"#E1E4E8"}},">执行</"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ color, value } in list"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ background: `${color}` }"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {{ value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," mock "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'mockjs'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"props"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"defineProps"),s("span",{style:{color:"#E1E4E8"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#FFAB70"}},"method"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"string"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#FFAB70"}},"value"),s("span",{style:{color:"#F97583"}},"?:"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }>();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"list"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      color: mock."),s("span",{style:{color:"#B392F0"}},"mock"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'@color'"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      value: mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"fn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    list.value."),s("span",{style:{color:"#B392F0"}},"shift"),s("span",{style:{color:"#E1E4E8"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".opt"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"margin-bottom"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".item"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"border"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"solid"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"#666"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"60"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"display"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"inline-block"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"line-height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"60"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"justify-content"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"margin"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"font-size"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"12"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"text-align"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"fn"'),s("span",{style:{color:"#24292E"}},">执行</"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"item"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-for"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ color, value } in list"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ background: `${color}` }"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {{ value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," mock "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'mockjs'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"props"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"defineProps"),s("span",{style:{color:"#24292E"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#E36209"}},"method"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"string"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#E36209"}},"value"),s("span",{style:{color:"#D73A49"}},"?:"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }>();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"list"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      color: mock."),s("span",{style:{color:"#6F42C1"}},"mock"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'@color'"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      value: mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"fn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    list.value."),s("span",{style:{color:"#6F42C1"}},"shift"),s("span",{style:{color:"#24292E"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".opt"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"margin-bottom"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".item"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"border"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"solid"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"#666"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"60"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"display"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"inline-block"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"line-height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"60"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"justify-content"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"margin"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"font-size"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"12"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"text-align"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),K=s("ul",null,[s("li",null,"reverse 翻转数组")],-1),M=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"fn"'),s("span",{style:{color:"#E1E4E8"}},">执行</"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ color, value } in list"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ background: `${color}` }"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {{ value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," mock "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'mockjs'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"props"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"defineProps"),s("span",{style:{color:"#E1E4E8"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#FFAB70"}},"method"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"string"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#FFAB70"}},"value"),s("span",{style:{color:"#F97583"}},"?:"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }>();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"list"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      color: mock."),s("span",{style:{color:"#B392F0"}},"mock"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'@color'"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      value: mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"fn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    list.value."),s("span",{style:{color:"#B392F0"}},"reverse"),s("span",{style:{color:"#E1E4E8"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".opt"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"margin-bottom"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".item"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"border"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"solid"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"#666"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"60"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"display"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"inline-block"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"line-height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"60"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"justify-content"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"margin"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"font-size"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"12"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"text-align"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"fn"'),s("span",{style:{color:"#24292E"}},">执行</"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"item"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-for"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ color, value } in list"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ background: `${color}` }"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {{ value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," mock "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'mockjs'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"props"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"defineProps"),s("span",{style:{color:"#24292E"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#E36209"}},"method"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"string"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#E36209"}},"value"),s("span",{style:{color:"#D73A49"}},"?:"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }>();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"list"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      color: mock."),s("span",{style:{color:"#6F42C1"}},"mock"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'@color'"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      value: mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"fn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    list.value."),s("span",{style:{color:"#6F42C1"}},"reverse"),s("span",{style:{color:"#24292E"}},"()")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".opt"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"margin-bottom"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".item"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"border"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"solid"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"#666"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"60"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"display"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"inline-block"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"line-height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"60"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"justify-content"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"margin"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"font-size"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"12"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"text-align"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),U=s("ul",null,[s("li",null,"sort 数组的元素进行排序")],-1),X=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"fn"'),s("span",{style:{color:"#E1E4E8"}},">{{flag ? '降序' : '升序'}}</"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ color, value } in list"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ background: `${color}` }"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {{ value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref, unref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," mock "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'mockjs'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"props"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"defineProps"),s("span",{style:{color:"#E1E4E8"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#FFAB70"}},"method"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"string"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#FFAB70"}},"value"),s("span",{style:{color:"#F97583"}},"?:"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }>();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"list"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      color: mock."),s("span",{style:{color:"#B392F0"}},"mock"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'@color'"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      value: mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"flag"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"fn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    list.value."),s("span",{style:{color:"#B392F0"}},"sort"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"a"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"b"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"unref"),s("span",{style:{color:"#E1E4E8"}},"(flag) "),s("span",{style:{color:"#F97583"}},"?"),s("span",{style:{color:"#E1E4E8"}}," a.value "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#E1E4E8"}}," b.value "),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," b.value "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#E1E4E8"}}," a.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    flag.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"!"),s("span",{style:{color:"#E1E4E8"}},"flag.value;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".opt"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"margin-bottom"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".item"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"border"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"solid"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"#666"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"60"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"display"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"inline-block"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"line-height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"60"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"justify-content"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"margin"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"font-size"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"12"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"text-align"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"fn"'),s("span",{style:{color:"#24292E"}},">{{flag ? '降序' : '升序'}}</"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"item"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-for"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ color, value } in list"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ background: `${color}` }"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {{ value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref, unref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," mock "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'mockjs'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"props"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"defineProps"),s("span",{style:{color:"#24292E"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#E36209"}},"method"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"string"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#E36209"}},"value"),s("span",{style:{color:"#D73A49"}},"?:"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }>();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"list"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      color: mock."),s("span",{style:{color:"#6F42C1"}},"mock"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'@color'"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      value: mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"flag"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"fn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    list.value."),s("span",{style:{color:"#6F42C1"}},"sort"),s("span",{style:{color:"#24292E"}},"(("),s("span",{style:{color:"#E36209"}},"a"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"b"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"unref"),s("span",{style:{color:"#24292E"}},"(flag) "),s("span",{style:{color:"#D73A49"}},"?"),s("span",{style:{color:"#24292E"}}," a.value "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#24292E"}}," b.value "),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," b.value "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#24292E"}}," a.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    flag.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"!"),s("span",{style:{color:"#24292E"}},"flag.value;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".opt"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"margin-bottom"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".item"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"border"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"solid"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"#666"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"60"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"display"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"inline-block"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"line-height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"60"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"justify-content"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"margin"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"font-size"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"12"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"text-align"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),Y=s("ul",null,[s("li",null,"splice 移除或替换已存在的指定下标元素")],-1),Z=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'fn2'"),s("span",{style:{color:"#E1E4E8"}},">替换1号下标元素</"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'fn'"),s("span",{style:{color:"#E1E4E8"}},">移除1号下标元素</"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'item'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'{ color, value } in list'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'{ background: `${color}` }'"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {{ value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'ts'"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," mock "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'mockjs'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"props"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"defineProps"),s("span",{style:{color:"#E1E4E8"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#FFAB70"}},"method"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"string"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#FFAB70"}},"value"),s("span",{style:{color:"#F97583"}},"?:"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }>();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"list"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      color: mock."),s("span",{style:{color:"#B392F0"}},"mock"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'@color'"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      value: mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"flag"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"fn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      list.value."),s("span",{style:{color:"#B392F0"}},"splice"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"fn2"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    list.value."),s("span",{style:{color:"#B392F0"}},"splice"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", { value: mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},"), color: mock."),s("span",{style:{color:"#B392F0"}},"mock"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'@color'"),s("span",{style:{color:"#E1E4E8"}},") });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'less'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".opt"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"margin-bottom"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".item"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"border"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"solid"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"#666"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"60"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"display"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"inline-block"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"line-height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"60"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"justify-content"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"margin"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"font-size"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"12"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"text-align"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'fn2'"),s("span",{style:{color:"#24292E"}},">替换1号下标元素</"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'fn'"),s("span",{style:{color:"#24292E"}},">移除1号下标元素</"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'item'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-for"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'{ color, value } in list'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'{ background: `${color}` }'"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {{ value }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'ts'"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," mock "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'mockjs'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"props"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"defineProps"),s("span",{style:{color:"#24292E"}},"<{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#E36209"}},"method"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"string"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#E36209"}},"value"),s("span",{style:{color:"#D73A49"}},"?:"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }>();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"list"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      color: mock."),s("span",{style:{color:"#6F42C1"}},"mock"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'@color'"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      value: mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"flag"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"fn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      list.value."),s("span",{style:{color:"#6F42C1"}},"splice"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"fn2"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    list.value."),s("span",{style:{color:"#6F42C1"}},"splice"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},", { value: mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},"), color: mock."),s("span",{style:{color:"#6F42C1"}},"mock"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'@color'"),s("span",{style:{color:"#24292E"}},") });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'less'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".opt"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"margin-bottom"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".item"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"border"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"solid"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"#666"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"60"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"display"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"inline-block"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"line-height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"60"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"justify-content"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"margin"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"font-size"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"12"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"text-align"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),ss=v("",34),ps=JSON.parse('{"title":"数组","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js/Array.md","filePath":"blogs/js/Array.md"}'),ls={name:"blogs/js/Array.md"},es=Object.assign(ls,{setup(B){return(a,c)=>{const r=d("demo"),u=d("git-talk");return p(),e("div",null,[T,n(r,{customClass:"",sourceCode:`<template>
    <AButton @click="fn">执行</AButton>
    <div class="item" v-for="{ color, value } in list" :style="{ background: \`\${color}\` }">
      {{ value }}
    </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import mock from 'mockjs';
  const props = defineProps<{
    method: string;
    value?: any;
  }>();

  const list = ref(
    Array.from({ length: 5 }, () => ({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    }))
  );
  
  const fn = () => {
    list.value.push({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    })
  }
<\/script>

<style lang="less" scoped>
  .opt {
    margin-bottom: 10px;
  }
  .item {
    border: 1px solid #666;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    justify-content: center;
    margin: 0 10px 10px 0;
    font-size: 12px;
    text-align: center;
  }
</style>
`},{highlight:o(()=>[J]),default:o(()=>[n(x)]),_:1}),V,n(r,{customClass:"",sourceCode:`<template>
    <AButton @click="fn">执行</AButton>
    <div class="item" v-for="{ color, value } in list" :style="{ background: \`\${color}\` }">
      {{ value }}
    </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import mock from 'mockjs';
  const props = defineProps<{
    method: string;
    value?: any;
  }>();

  const list = ref(
    Array.from({ length: 5 }, () => ({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    }))
  );
  
  const fn = () => {
    list.value.pop()
  }
<\/script>

<style lang="less" scoped>
  .opt {
    margin-bottom: 10px;
  }
  .item {
    border: 1px solid #666;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    justify-content: center;
    margin: 0 10px 10px 0;
    font-size: 12px;
    text-align: center;
  }
</style>
`},{highlight:o(()=>[W]),default:o(()=>[n(j)]),_:1}),H,n(r,{customClass:"",sourceCode:`<template>
    <AButton @click="fn">执行</AButton>
    <div class="item" v-for="{ color, value } in list" :style="{ background: \`\${color}\` }">
      {{ value }}
    </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import mock from 'mockjs';
  const props = defineProps<{
    method: string;
    value?: any;
  }>();

  const list = ref(
    Array.from({ length: 5 }, () => ({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    }))
  );
  
  const fn = () => {
    list.value.unshift({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    })
  }
<\/script>

<style lang="less" scoped>
  .opt {
    margin-bottom: 10px;
  }
  .item {
    border: 1px solid #666;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    justify-content: center;
    margin: 0 10px 10px 0;
    font-size: 12px;
    text-align: center;
  }
</style>
`},{highlight:o(()=>[L]),default:o(()=>[n(w)]),_:1}),Q,n(r,{customClass:"",sourceCode:`<template>
    <AButton @click="fn">执行</AButton>
    <div class="item" v-for="{ color, value } in list" :style="{ background: \`\${color}\` }">
      {{ value }}
    </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import mock from 'mockjs';
  const props = defineProps<{
    method: string;
    value?: any;
  }>();

  const list = ref(
    Array.from({ length: 5 }, () => ({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    }))
  );
  
  const fn = () => {
    list.value.shift()
  }
<\/script>

<style lang="less" scoped>
  .opt {
    margin-bottom: 10px;
  }
  .item {
    border: 1px solid #666;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    justify-content: center;
    margin: 0 10px 10px 0;
    font-size: 12px;
    text-align: center;
  }
</style>
`},{highlight:o(()=>[G]),default:o(()=>[n(R)]),_:1}),K,n(r,{customClass:"",sourceCode:`<template>
    <AButton @click="fn">执行</AButton>
    <div class="item" v-for="{ color, value } in list" :style="{ background: \`\${color}\` }">
      {{ value }}
    </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import mock from 'mockjs';
  const props = defineProps<{
    method: string;
    value?: any;
  }>();

  const list = ref(
    Array.from({ length: 5 }, () => ({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    }))
  );
  
  const fn = () => {
    list.value.reverse()
  }
<\/script>

<style lang="less" scoped>
  .opt {
    margin-bottom: 10px;
  }
  .item {
    border: 1px solid #666;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    justify-content: center;
    margin: 0 10px 10px 0;
    font-size: 12px;
    text-align: center;
  }
</style>
`},{highlight:o(()=>[M]),default:o(()=>[n($)]),_:1}),U,n(r,{customClass:"",sourceCode:`<template>
  <AButton @click="fn">{{flag ? '降序' : '升序'}}</AButton>
  <div class="item" v-for="{ color, value } in list" :style="{ background: \`\${color}\` }">
    {{ value }}
  </div>
</template>
<script setup lang="ts">
  import { ref, unref } from 'vue';
  import mock from 'mockjs';

  const props = defineProps<{
    method: string;
    value?: any;
  }>();

  const list = ref(
    Array.from({ length: 5 }, () => ({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    }))
  );

  const flag = ref(true);

  const fn = () => {
    list.value.sort((a, b) => unref(flag) ? a.value - b.value : b.value - a.value);
    flag.value = !flag.value;
  }
<\/script>

<style lang="less" scoped>
  .opt {
    margin-bottom: 10px;
  }

  .item {
    border: 1px solid #666;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    justify-content: center;
    margin: 0 10px 10px 0;
    font-size: 12px;
    text-align: center;
  }
</style>
`},{highlight:o(()=>[X]),default:o(()=>[n(I)]),_:1}),Y,n(r,{customClass:"",sourceCode:`
<template>
  <div>
    <AButton @click='fn2'>替换1号下标元素</AButton>
    <AButton @click='fn'>移除1号下标元素</AButton>
  </div>
  <div class='item' v-for='{ color, value } in list' :style='{ background: \`\${color}\` }'>
    {{ value }}
  </div>
</template>
<script setup lang='ts'>
  import { ref } from 'vue';
  import mock from 'mockjs';

  const props = defineProps<{
    method: string;
    value?: any;
  }>();

  const list = ref(
    Array.from({ length: 5 }, () => ({
      color: mock.mock('@color'),
      value: mock.Random.integer(0, 50),
    }))
  );

  const flag = ref(false);

  const fn = () => {
      list.value.splice(1, 1);
  }

  const fn2 = () => {
    list.value.splice(1, 1, { value: mock.Random.integer(0, 50), color: mock.mock('@color') });
  }
<\/script>

<style lang='less' scoped>
  .opt {
    margin-bottom: 10px;
  }

  .item {
    border: 1px solid #666;
    width: 60px;
    display: inline-block;
    line-height: 60px;
    justify-content: center;
    margin: 0 10px 10px 0;
    font-size: 12px;
    text-align: center;
  }
</style>
`},{highlight:o(()=>[Z]),default:o(()=>[n(O)]),_:1}),ss,n(u)])}}});export{ps as __pageData,es as default};
