import{d as C,h as i,j as f,C as u,o as y,c as F,k as s,N as m,e as g,a as l,t as h,H as p,w as c,F as A,_ as D,b,D as k,l as v,Q as _}from"./chunks/framework.7096fd12.js";const w={__name:"topic.md.demo.c6ac58a0",setup(d){function a(){const o=new Map;function n(...e){const r=e.map(B=>typeof B).join(","),E=o.get(r);if(E)return E.apply(this,e)}return n.addImpl=function(...e){const r=e.pop();if(typeof r!="function")return;const E=e;o.set(E.join(","),r)},n}const t=a();return t.addImpl("number","number",(o,n)=>{console.log("按照页码和数量查询",o,n)}),t.addImpl("string",o=>{console.log("根据姓名查询",o)}),t(1,2),t("吴光辉"),(o,n)=>null}},R=C({__name:"topic.md.demo.c6ac589e",setup(d){const a=i(0),t=i(),o=i("clientWidth"),n=e=>{a.value=t.value[e]};return f(()=>{a.value=t.value.clientWidth}),(e,r)=>{const E=u("a-select-option"),B=u("a-select");return y(),F(A,null,[s("div",{class:"container",ref_key:"targetRef",ref:t},[o.value==="scrollHeight"?(y(),F("div",{key:0,class:"scrollHeight",style:m({height:`${a.value}px`})},null,4)):g("",!0),l(" 从前，有个小男孩叫蒂姆，他喜欢读书。有一天，他找到了一本神奇的书，把他带到了他最喜欢的角色的世界里。 蒂姆进入书本，发现自己身处一片神秘的森林。他探索了施了魔法的树木，遇到了会说话的动物和仙女。他沿着一条小路穿过森林，来到了一座城堡，在那里他遇到了一位勇敢的骑士和一位美丽的公主。 骑士告诉蒂姆，一个邪恶的女巫对城堡施了魔法，他需要蒂姆的帮助来解除诅咒。他们一起寻找线索找到女巫，并发现她藏在一个附近的洞穴里。 蒂姆和骑士勇敢地进入洞穴，面对女巫。她威胁要把他们变成蟾蜍，但蒂姆并不害怕。他用自己的智慧和敏捷的思维来智胜女巫。 经过一场惊心动魄的战斗，蒂姆和骑士获得了胜利。他们打破了女巫的诅咒，把城堡恢复到以前的辉煌，并拯救了公主。感激的城堡居民为蒂姆举行了盛大的庆祝活动。 当蒂姆告别他的新朋友时，他答应有一天会回来再次拜访他们。然后他走出书本，带着对阅读的新的热爱和难忘的冒险经历回到了现实世界。 ")],512),o.value!=="scrollHeight"?(y(),F("div",{key:0,class:"rule",style:m({width:`${a.value}px`})},h(o.value),5)):g("",!0),s("div",null,[p(B,{value:o.value,"onUpdate:value":r[0]||(r[0]=x=>o.value=x),onChange:n},{default:c(()=>[p(E,{value:"clientWidth"},{default:c(()=>[l("clientWidth")]),_:1}),p(E,{value:"offsetWidth"},{default:c(()=>[l("offsetWidth")]),_:1}),p(E,{value:"scrollHeight"},{default:c(()=>[l("scrollHeight")]),_:1})]),_:1},8,["value"])])],64)}}});const T=D(R,[["__scopeId","data-v-561bc354"]]),M=C({__name:"topic.md.demo.c6ac589c",setup(d){const a=i(),t=o=>{clearTimeout(a.value),a.value=setTimeout(()=>{console.log(o.target.value)},2e3)};return(o,n)=>{const e=u("a-input");return y(),b(e,{placeholder:"请输入",onInput:t})}}}),j=C({__name:"topic.md.demo.c6ac589a",setup(d){let a=new Date().getTime();const t=o=>{const n=new Date().getTime();n-a>2e3&&(console.log("节流"),a=n)};return(o,n)=>{const e=u("a-input");return y(),b(e,{placeholder:"请输入",onInput:t})}}}),O={class:"box"},L={class:"list"},P=s("div",{class:"car"},null,-1),H=C({__name:"topic.md.demo.c6ac5898",setup(d){const a=t=>{const o=document.querySelector(".box"),n=document.createElement("div"),e=document.querySelector(".car");n.classList.add("plus"),n.innerHTML='<div class="inner"></div>';const r=t.target.getBoundingClientRect(),E=e.getBoundingClientRect();n.style.setProperty("--left",`${r.left+5}px`),n.style.setProperty("--top",`${r.top-20}px`),n.style.setProperty("--x",`${E.left-r.left}px`),n.style.setProperty("--y",`${E.top-r.top+25}px`),o.appendChild(n),n.addEventListener("animationend",()=>{n.remove()})};return(t,o)=>(y(),F("div",O,[s("div",L,[(y(),F(A,null,k(10,n=>s("div",{class:"goods-item",key:n},[s("div",null,"商品"+h(n),1),s("div",{class:"add",onClick:a},"+")])),64))]),P]))}});const $=C({__name:"topic.md.demo.c6ac5896",setup(d){const a=i(),t=i(),o=i([0,0]);return f(()=>{a.value.addEventListener("mousedown",n=>{o.value=[n.clientX-n.target.offsetLeft,n.clientY-n.target.offsetTop],document.addEventListener("mousemove",e=>{const r=e.clientX-v(o)[0],E=e.clientY-v(o)[1];e.target.style.left=r+"px",e.target.style.top=E+"px"})}),document.addEventListener("mouseup",()=>{a.value.onmousemove=null})}),(n,e)=>(y(),F("div",{ref_key:"contentRef",ref:t,class:"js-mouse-content"},[s("div",{ref_key:"jsMouseTargetRef",ref:a,class:"js-mouse-target"},null,512)],512))}});const I=D($,[["__scopeId","data-v-fe491e3c"]]),U=_("",4),W=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"createOverload"),s("span",{style:{color:"#E1E4E8"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"callMap"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Map"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"// 调用")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"overload"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"..."),s("span",{style:{color:"#FFAB70"}},"args"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"key"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," args."),s("span",{style:{color:"#B392F0"}},"map"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"arg"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"typeof"),s("span",{style:{color:"#E1E4E8"}}," arg)."),s("span",{style:{color:"#B392F0"}},"join"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"','"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"fn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," callMap."),s("span",{style:{color:"#B392F0"}},"get"),s("span",{style:{color:"#E1E4E8"}},"(key);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," (fn) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," fn."),s("span",{style:{color:"#B392F0"}},"apply"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},", args);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    } "),s("span",{style:{color:"#F97583"}},"else"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Error"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'no matching function'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"// 添加实现")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  overload."),s("span",{style:{color:"#B392F0"}},"addImpl"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#F97583"}},"..."),s("span",{style:{color:"#FFAB70"}},"args"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"fn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," args."),s("span",{style:{color:"#B392F0"}},"pop"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#F97583"}},"typeof"),s("span",{style:{color:"#E1E4E8"}}," fn "),s("span",{style:{color:"#F97583"}},"!=="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'function'"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"types"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," args;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    callMap."),s("span",{style:{color:"#B392F0"}},"set"),s("span",{style:{color:"#E1E4E8"}},"(types."),s("span",{style:{color:"#B392F0"}},"join"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"','"),s("span",{style:{color:"#E1E4E8"}},"), fn);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," overload;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"getUsers"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"createOverload"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"getUsers."),s("span",{style:{color:"#B392F0"}},"addImpl"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'number'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'number'"),s("span",{style:{color:"#E1E4E8"}},", ("),s("span",{style:{color:"#FFAB70"}},"a"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"b"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'按照页码和数量查询'"),s("span",{style:{color:"#E1E4E8"}},", a, b);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"getUsers."),s("span",{style:{color:"#B392F0"}},"addImpl"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'string'"),s("span",{style:{color:"#E1E4E8"}},", ("),s("span",{style:{color:"#FFAB70"}},"name"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'根据姓名查询'"),s("span",{style:{color:"#E1E4E8"}},", name);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"getUsers"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"getUsers"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'吴光辉'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"createOverload"),s("span",{style:{color:"#24292E"}},"() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"callMap"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Map"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"// 调用")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"overload"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"..."),s("span",{style:{color:"#E36209"}},"args"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"key"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," args."),s("span",{style:{color:"#6F42C1"}},"map"),s("span",{style:{color:"#24292E"}},"(("),s("span",{style:{color:"#E36209"}},"arg"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"typeof"),s("span",{style:{color:"#24292E"}}," arg)."),s("span",{style:{color:"#6F42C1"}},"join"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"','"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"fn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," callMap."),s("span",{style:{color:"#6F42C1"}},"get"),s("span",{style:{color:"#24292E"}},"(key);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," (fn) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," fn."),s("span",{style:{color:"#6F42C1"}},"apply"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},", args);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    } "),s("span",{style:{color:"#D73A49"}},"else"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Error"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'no matching function'"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"// 添加实现")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  overload."),s("span",{style:{color:"#6F42C1"}},"addImpl"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"..."),s("span",{style:{color:"#E36209"}},"args"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"fn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," args."),s("span",{style:{color:"#6F42C1"}},"pop"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"typeof"),s("span",{style:{color:"#24292E"}}," fn "),s("span",{style:{color:"#D73A49"}},"!=="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'function'"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"types"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," args;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    callMap."),s("span",{style:{color:"#6F42C1"}},"set"),s("span",{style:{color:"#24292E"}},"(types."),s("span",{style:{color:"#6F42C1"}},"join"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"','"),s("span",{style:{color:"#24292E"}},"), fn);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," overload;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"getUsers"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"createOverload"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"getUsers."),s("span",{style:{color:"#6F42C1"}},"addImpl"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'number'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'number'"),s("span",{style:{color:"#24292E"}},", ("),s("span",{style:{color:"#E36209"}},"a"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"b"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'按照页码和数量查询'"),s("span",{style:{color:"#24292E"}},", a, b);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"getUsers."),s("span",{style:{color:"#6F42C1"}},"addImpl"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'string'"),s("span",{style:{color:"#24292E"}},", ("),s("span",{style:{color:"#E36209"}},"name"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'根据姓名查询'"),s("span",{style:{color:"#24292E"}},", name);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"getUsers"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"getUsers"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'吴光辉'"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")])])])],-1),S=s("h2",{id:"clientwidth-offsetwidth",tabindex:"-1"},[l("clientWidth & offsetWidth "),s("a",{class:"header-anchor",href:"#clientwidth-offsetwidth","aria-label":'Permalink to "clientWidth & offsetWidth"'},"​")],-1),q=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"container"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"targetRef"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-if"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},`"current === 'scrollHeight'"`),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"scrollHeight"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{ height: `${width}px` }"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    从前，有个小男孩叫蒂姆，他喜欢读书。有一天，他找到了一本神奇的书，把他带到了他最喜欢的角色的世界里。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    蒂姆进入书本，发现自己身处一片神秘的森林。他探索了施了魔法的树木，遇到了会说话的动物和仙女。他沿着一条小路穿过森林，来到了一座城堡，在那里他遇到了一位勇敢的骑士和一位美丽的公主。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    骑士告诉蒂姆，一个邪恶的女巫对城堡施了魔法，他需要蒂姆的帮助来解除诅咒。他们一起寻找线索找到女巫，并发现她藏在一个附近的洞穴里。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    蒂姆和骑士勇敢地进入洞穴，面对女巫。她威胁要把他们变成蟾蜍，但蒂姆并不害怕。他用自己的智慧和敏捷的思维来智胜女巫。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    经过一场惊心动魄的战斗，蒂姆和骑士获得了胜利。他们打破了女巫的诅咒，把城堡恢复到以前的辉煌，并拯救了公主。感激的城堡居民为蒂姆举行了盛大的庆祝活动。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    当蒂姆告别他的新朋友时，他答应有一天会回来再次拜访他们。然后他走出书本，带着对阅读的新的热爱和难忘的冒险经历回到了现实世界。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"v-if"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},`"current !== 'scrollHeight'"`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"rule"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},":style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"{')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"      width: `${width}px`,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},'    }"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    {{ current }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"a-select"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model:value"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"current"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@change"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"fn"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"a-select-option"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"value"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"clientWidth"'),s("span",{style:{color:"#E1E4E8"}},">clientWidth</"),s("span",{style:{color:"#85E89D"}},"a-select-option"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"a-select-option"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"value"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"offsetWidth"'),s("span",{style:{color:"#E1E4E8"}},">offsetWidth</"),s("span",{style:{color:"#85E89D"}},"a-select-option"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"a-select-option"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"value"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"scrollHeight"'),s("span",{style:{color:"#E1E4E8"}},">scrollHeight</"),s("span",{style:{color:"#85E89D"}},"a-select-option"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"a-select"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"targetRef"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"current"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'clientWidth'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"fn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"value"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"string"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    width.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," targetRef.value[value];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    width.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," targetRef.value.clientWidth;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".container"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"box-sizing"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"border-box"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"position"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"relative"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"100"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"overflow-y"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"scroll"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},".scrollHeight"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"auto"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"background"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"pink"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"position"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"absolute"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"left"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"top"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".rule"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"display"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"inline-block"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"text-align"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"background"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"pink"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"margin"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"container"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"targetRef"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-if"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},`"current === 'scrollHeight'"`),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"scrollHeight"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{ height: `${width}px` }"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    从前，有个小男孩叫蒂姆，他喜欢读书。有一天，他找到了一本神奇的书，把他带到了他最喜欢的角色的世界里。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    蒂姆进入书本，发现自己身处一片神秘的森林。他探索了施了魔法的树木，遇到了会说话的动物和仙女。他沿着一条小路穿过森林，来到了一座城堡，在那里他遇到了一位勇敢的骑士和一位美丽的公主。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    骑士告诉蒂姆，一个邪恶的女巫对城堡施了魔法，他需要蒂姆的帮助来解除诅咒。他们一起寻找线索找到女巫，并发现她藏在一个附近的洞穴里。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    蒂姆和骑士勇敢地进入洞穴，面对女巫。她威胁要把他们变成蟾蜍，但蒂姆并不害怕。他用自己的智慧和敏捷的思维来智胜女巫。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    经过一场惊心动魄的战斗，蒂姆和骑士获得了胜利。他们打破了女巫的诅咒，把城堡恢复到以前的辉煌，并拯救了公主。感激的城堡居民为蒂姆举行了盛大的庆祝活动。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    当蒂姆告别他的新朋友时，他答应有一天会回来再次拜访他们。然后他走出书本，带着对阅读的新的热爱和难忘的冒险经历回到了现实世界。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"v-if"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},`"current !== 'scrollHeight'"`)]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"rule"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},":style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"{')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"      width: `${width}px`,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},'    }"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    {{ current }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"a-select"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model:value"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"current"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@change"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"fn"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"a-select-option"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"value"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"clientWidth"'),s("span",{style:{color:"#24292E"}},">clientWidth</"),s("span",{style:{color:"#22863A"}},"a-select-option"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"a-select-option"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"value"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"offsetWidth"'),s("span",{style:{color:"#24292E"}},">offsetWidth</"),s("span",{style:{color:"#22863A"}},"a-select-option"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"a-select-option"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"value"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"scrollHeight"'),s("span",{style:{color:"#24292E"}},">scrollHeight</"),s("span",{style:{color:"#22863A"}},"a-select-option"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"a-select"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { onMounted, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"targetRef"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"current"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'clientWidth'"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"fn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"value"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"string"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    width.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," targetRef.value[value];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  };")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    width.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," targetRef.value.clientWidth;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".container"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"box-sizing"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"border-box"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"position"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"relative"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"100"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"overflow-y"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"scroll"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},".scrollHeight"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"auto"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"background"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"pink"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"position"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"absolute"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"left"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"top"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".rule"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"display"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"inline-block"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"text-align"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"background"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"pink"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"margin"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),X=s("h2",{id:"防抖",tabindex:"-1"},[l("防抖 "),s("a",{class:"header-anchor",href:"#防抖","aria-label":'Permalink to "防抖"'},"​")],-1),Y=s("blockquote",null,[s("p",null,"事件触发n秒后再去执行回调函数，若在n秒内事件再次触发，则时间重新计时，实质是闭包。结果就是将频繁触发的事件合并为一次，且在最后执行。")],-1),N=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"a-input"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"placeholder"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'请输入'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@input"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'fn'"),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'ts'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," {ref} "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"timeOut"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}},">();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"fn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"e"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#B392F0"}},"InputEvent"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"clearTimeout"),s("span",{style:{color:"#E1E4E8"}},"(timeOut.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    timeOut.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setTimeout"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(e.target.value)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }, "),s("span",{style:{color:"#79B8FF"}},"2000"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"a-input"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"placeholder"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'请输入'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@input"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'fn'"),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'ts'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," {ref} "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"timeOut"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}},">();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"fn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"e"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#6F42C1"}},"InputEvent"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"clearTimeout"),s("span",{style:{color:"#24292E"}},"(timeOut.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    timeOut.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setTimeout"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(e.target.value)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }, "),s("span",{style:{color:"#005CC5"}},"2000"),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")])])])],-1),V=s("h2",{id:"节流",tabindex:"-1"},[l("节流 "),s("a",{class:"header-anchor",href:"#节流","aria-label":'Permalink to "节流"'},"​")],-1),z=s("blockquote",null,[s("p",null,"在频繁触发事件中，间隔n秒执行一次回调函数。")],-1),K=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"a-input"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"placeholder"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'请输入'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@input"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'fn'"),s("span",{style:{color:"#E1E4E8"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'ts'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," time "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Date"),s("span",{style:{color:"#E1E4E8"}},"()."),s("span",{style:{color:"#B392F0"}},"getTime"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"fn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"e"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#B392F0"}},"InputEvent"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"now"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Date"),s("span",{style:{color:"#E1E4E8"}},"()."),s("span",{style:{color:"#B392F0"}},"getTime"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}},"(now "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#E1E4E8"}}," time "),s("span",{style:{color:"#F97583"}},">"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"2000"),s("span",{style:{color:"#E1E4E8"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'节流'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      time "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," now; ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"// function throttleTimeOut(callback, wait) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//   let timeOut;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//   return function() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//     if(!timeOut){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//       timeOut = setTimeout(() => {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//         timeOut = null;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//         callback.apply(this,arguments);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//       },wait)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//     }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//   }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"// }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"a-input"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"placeholder"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'请输入'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@input"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'fn'"),s("span",{style:{color:"#24292E"}}," />")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'ts'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," time "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Date"),s("span",{style:{color:"#24292E"}},"()."),s("span",{style:{color:"#6F42C1"}},"getTime"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"fn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"e"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#6F42C1"}},"InputEvent"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"now"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Date"),s("span",{style:{color:"#24292E"}},"()."),s("span",{style:{color:"#6F42C1"}},"getTime"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}},"(now "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#24292E"}}," time "),s("span",{style:{color:"#D73A49"}},">"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"2000"),s("span",{style:{color:"#24292E"}},"){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'节流'"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      time "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," now; ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"// function throttleTimeOut(callback, wait) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//   let timeOut;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//   return function() {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//     if(!timeOut){")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//       timeOut = setTimeout(() => {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//         timeOut = null;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//         callback.apply(this,arguments);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//       },wait)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//     }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//   }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"// }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")])])])],-1),J=s("h2",{id:"商品飞入购物车特效-todo",tabindex:"-1"},[l("商品飞入购物车特效 TODO "),s("a",{class:"header-anchor",href:"#商品飞入购物车特效-todo","aria-label":'Permalink to "商品飞入购物车特效 TODO"'},"​")],-1),Q=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'box'"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'list'"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'goods-item'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'i of 10'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},":key"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'i'"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">商品{{i}}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'add'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'addCar'"),s("span",{style:{color:"#E1E4E8"}},">+</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'car'"),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'ts'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"addCar"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"e"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#B392F0"}},"PointerEvent"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// content 动画元素添加到这个元素")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"box"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," document."),s("span",{style:{color:"#B392F0"}},"querySelector"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'.box'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 动画元素")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"plus"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," document."),s("span",{style:{color:"#B392F0"}},"createElement"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'div'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 购物车")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"car"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," document."),s("span",{style:{color:"#B392F0"}},"querySelector"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'.car'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    plus.classList."),s("span",{style:{color:"#B392F0"}},"add"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'plus'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    plus.innerHTML "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},'`<div class="inner"></div>`'),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 点击按钮信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"targetReact"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," (e.target "),s("span",{style:{color:"#F97583"}},"as"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"HTMLBRElement"),s("span",{style:{color:"#E1E4E8"}},")."),s("span",{style:{color:"#B392F0"}},"getBoundingClientRect"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 购物车位置信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"carReact"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," car."),s("span",{style:{color:"#B392F0"}},"getBoundingClientRect"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    plus.style."),s("span",{style:{color:"#B392F0"}},"setProperty"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'--left'"),s("span",{style:{color:"#E1E4E8"}},","),s("span",{style:{color:"#9ECBFF"}},"`${"),s("span",{style:{color:"#E1E4E8"}},"targetReact"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#E1E4E8"}},"left"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#9ECBFF"}},"}px`"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    plus.style."),s("span",{style:{color:"#B392F0"}},"setProperty"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'--top'"),s("span",{style:{color:"#E1E4E8"}},","),s("span",{style:{color:"#9ECBFF"}},"`${"),s("span",{style:{color:"#E1E4E8"}},"targetReact"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#E1E4E8"}},"top"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#9ECBFF"}},"}px`"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    plus.style."),s("span",{style:{color:"#B392F0"}},"setProperty"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'--x'"),s("span",{style:{color:"#E1E4E8"}},","),s("span",{style:{color:"#9ECBFF"}},"`${"),s("span",{style:{color:"#E1E4E8"}},"carReact"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#E1E4E8"}},"left"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#E1E4E8"}},"targetReact"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#E1E4E8"}},"left"),s("span",{style:{color:"#9ECBFF"}},"}px`"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    plus.style."),s("span",{style:{color:"#B392F0"}},"setProperty"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'--y'"),s("span",{style:{color:"#E1E4E8"}},","),s("span",{style:{color:"#9ECBFF"}},"`${"),s("span",{style:{color:"#E1E4E8"}},"carReact"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#E1E4E8"}},"top"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#E1E4E8"}},"targetReact"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#E1E4E8"}},"top"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#79B8FF"}},"25"),s("span",{style:{color:"#9ECBFF"}},"}px`"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    box."),s("span",{style:{color:"#B392F0"}},"appendChild"),s("span",{style:{color:"#E1E4E8"}},"(plus);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 动画结束后移除元素")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    plus."),s("span",{style:{color:"#B392F0"}},"addEventListener"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'animationend'"),s("span",{style:{color:"#E1E4E8"}},",() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      plus."),s("span",{style:{color:"#B392F0"}},"remove"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'less'"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".box"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"500"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"position"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"relative"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"overflow-y"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"scroll"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"&::-webkit-scrollbar"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"display"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"none")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},".car"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"position"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"absolute"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"background"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"blue"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"left"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"bottom"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},".goods-item"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"100"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"display"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"flex"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"align-items"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"justify-content"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"space-between"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"border-bottom"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"solid"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"#eee"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"user-select"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"none"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},".add"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#79B8FF"}},"line-height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#79B8FF"}},"text-align"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"center"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#79B8FF"}},"border"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"solid"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"pink"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#79B8FF"}},"user-select"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"none"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},".plus"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"position"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"fixed"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"left"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"var"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"--left"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"top"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"var"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"--top"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"animation"),s("span",{style:{color:"#E1E4E8"}},": moveY "),s("span",{style:{color:"#79B8FF"}},"0.8"),s("span",{style:{color:"#F97583"}},"s"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"cubic-bezier"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0.5"),s("span",{style:{color:"#E1E4E8"}},","),s("span",{style:{color:"#79B8FF"}},"-0.5"),s("span",{style:{color:"#E1E4E8"}},","),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},","),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#79B8FF"}},"forwards"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},".inner"),s("span",{style:{color:"#E1E4E8"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"40"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"40"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#79B8FF"}},"background"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"pink"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#79B8FF"}},"animation"),s("span",{style:{color:"#E1E4E8"}},": moveX "),s("span",{style:{color:"#79B8FF"}},"0.8"),s("span",{style:{color:"#F97583"}},"s"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"linear"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"forwards"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  @keyframes moveY {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    to {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"transform"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"translateY"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"var"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"--y"),s("span",{style:{color:"#E1E4E8"}},")) ;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  @keyframes moveX {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    to {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"transform"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"translateX"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"var"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"--x"),s("span",{style:{color:"#E1E4E8"}},")) ;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'box'"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'list'"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'goods-item'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-for"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'i of 10'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},":key"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'i'"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">商品{{i}}</"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'add'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'addCar'"),s("span",{style:{color:"#24292E"}},">+</"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'car'"),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'ts'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"addCar"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"e"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#6F42C1"}},"PointerEvent"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// content 动画元素添加到这个元素")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"box"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," document."),s("span",{style:{color:"#6F42C1"}},"querySelector"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'.box'"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 动画元素")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"plus"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," document."),s("span",{style:{color:"#6F42C1"}},"createElement"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'div'"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 购物车")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"car"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," document."),s("span",{style:{color:"#6F42C1"}},"querySelector"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'.car'"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    plus.classList."),s("span",{style:{color:"#6F42C1"}},"add"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'plus'"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    plus.innerHTML "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'`<div class="inner"></div>`'),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 点击按钮信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"targetReact"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," (e.target "),s("span",{style:{color:"#D73A49"}},"as"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"HTMLBRElement"),s("span",{style:{color:"#24292E"}},")."),s("span",{style:{color:"#6F42C1"}},"getBoundingClientRect"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 购物车位置信息")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"carReact"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," car."),s("span",{style:{color:"#6F42C1"}},"getBoundingClientRect"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    plus.style."),s("span",{style:{color:"#6F42C1"}},"setProperty"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'--left'"),s("span",{style:{color:"#24292E"}},","),s("span",{style:{color:"#032F62"}},"`${"),s("span",{style:{color:"#24292E"}},"targetReact"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#24292E"}},"left"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#032F62"}},"}px`"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    plus.style."),s("span",{style:{color:"#6F42C1"}},"setProperty"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'--top'"),s("span",{style:{color:"#24292E"}},","),s("span",{style:{color:"#032F62"}},"`${"),s("span",{style:{color:"#24292E"}},"targetReact"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#24292E"}},"top"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#032F62"}},"}px`"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    plus.style."),s("span",{style:{color:"#6F42C1"}},"setProperty"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'--x'"),s("span",{style:{color:"#24292E"}},","),s("span",{style:{color:"#032F62"}},"`${"),s("span",{style:{color:"#24292E"}},"carReact"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#24292E"}},"left"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#24292E"}},"targetReact"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#24292E"}},"left"),s("span",{style:{color:"#032F62"}},"}px`"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    plus.style."),s("span",{style:{color:"#6F42C1"}},"setProperty"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'--y'"),s("span",{style:{color:"#24292E"}},","),s("span",{style:{color:"#032F62"}},"`${"),s("span",{style:{color:"#24292E"}},"carReact"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#24292E"}},"top"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#24292E"}},"targetReact"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#24292E"}},"top"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#005CC5"}},"25"),s("span",{style:{color:"#032F62"}},"}px`"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    box."),s("span",{style:{color:"#6F42C1"}},"appendChild"),s("span",{style:{color:"#24292E"}},"(plus);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 动画结束后移除元素")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    plus."),s("span",{style:{color:"#6F42C1"}},"addEventListener"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'animationend'"),s("span",{style:{color:"#24292E"}},",() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      plus."),s("span",{style:{color:"#6F42C1"}},"remove"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'less'"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".box"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"500"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"position"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"relative"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"overflow-y"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"scroll"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"&::-webkit-scrollbar"),s("span",{style:{color:"#24292E"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"display"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"none")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},".car"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"position"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"absolute"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"background"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"blue"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"left"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"bottom"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},".goods-item"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"100"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"display"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"flex"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"align-items"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"justify-content"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"space-between"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"border-bottom"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"solid"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"#eee"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"user-select"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"none"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},".add"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#005CC5"}},"line-height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#005CC5"}},"text-align"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"center"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#005CC5"}},"border"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"solid"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"pink"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#005CC5"}},"user-select"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"none"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},".plus"),s("span",{style:{color:"#24292E"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"position"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"fixed"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"left"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"var"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"--left"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"top"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"var"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"--top"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"animation"),s("span",{style:{color:"#24292E"}},": moveY "),s("span",{style:{color:"#005CC5"}},"0.8"),s("span",{style:{color:"#D73A49"}},"s"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"cubic-bezier"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0.5"),s("span",{style:{color:"#24292E"}},","),s("span",{style:{color:"#005CC5"}},"-0.5"),s("span",{style:{color:"#24292E"}},","),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},","),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#005CC5"}},"forwards"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},".inner"),s("span",{style:{color:"#24292E"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"40"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"40"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#005CC5"}},"background"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"pink"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#005CC5"}},"animation"),s("span",{style:{color:"#24292E"}},": moveX "),s("span",{style:{color:"#005CC5"}},"0.8"),s("span",{style:{color:"#D73A49"}},"s"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"linear"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"forwards"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  @keyframes moveY {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    to {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"transform"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"translateY"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"var"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"--y"),s("span",{style:{color:"#24292E"}},")) ;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  @keyframes moveX {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    to {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"transform"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"translateX"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"var"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"--x"),s("span",{style:{color:"#24292E"}},")) ;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),G=_("",3),Z=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"contentRef"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'js-mouse-content'"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"jsMouseTargetRef"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"js-mouse-target"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'ts'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," {onMounted, ref, unref} "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},'"vue"'),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"jsMouseTargetRef"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#B392F0"}},"HTMLElement"),s("span",{style:{color:"#E1E4E8"}},">();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"contentRef"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#B392F0"}},"HTMLElement"),s("span",{style:{color:"#E1E4E8"}},">();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"star"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"(["),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},"]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    jsMouseTargetRef.value."),s("span",{style:{color:"#B392F0"}},"addEventListener"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'mousedown'"),s("span",{style:{color:"#E1E4E8"}},", ("),s("span",{style:{color:"#FFAB70"}},"downEv"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"MouseEvent"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      star.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," [downEv.clientX "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#E1E4E8"}}," downEv.target.offsetLeft, downEv.clientY "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#E1E4E8"}}," downEv.target.offsetTop];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      document."),s("span",{style:{color:"#B392F0"}},"addEventListener"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'mousemove'"),s("span",{style:{color:"#E1E4E8"}},", ("),s("span",{style:{color:"#FFAB70"}},"downMove"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"MouseEvent"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"left"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," downMove.clientX "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"unref"),s("span",{style:{color:"#E1E4E8"}},"(star)["),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"top"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," downMove.clientY "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"unref"),s("span",{style:{color:"#E1E4E8"}},"(star)["),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        downMove.target.style.left "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," left "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'px'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        downMove.target.style.top "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," top "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'px'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    document."),s("span",{style:{color:"#B392F0"}},"addEventListener"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'mouseup'"),s("span",{style:{color:"#E1E4E8"}},", () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      jsMouseTargetRef.value.onmousemove "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"null"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},"'less'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".js-mouse-content"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"500"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"position"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"relative"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},".js-mouse-target"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"position"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"absolute"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"background"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"red"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"contentRef"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'js-mouse-content'"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"jsMouseTargetRef"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"js-mouse-target"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'ts'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," {onMounted, ref, unref} "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},'"vue"'),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"jsMouseTargetRef"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#6F42C1"}},"HTMLElement"),s("span",{style:{color:"#24292E"}},">();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"contentRef"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#6F42C1"}},"HTMLElement"),s("span",{style:{color:"#24292E"}},">();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"star"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"(["),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},"]);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    jsMouseTargetRef.value."),s("span",{style:{color:"#6F42C1"}},"addEventListener"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'mousedown'"),s("span",{style:{color:"#24292E"}},", ("),s("span",{style:{color:"#E36209"}},"downEv"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"MouseEvent"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      star.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," [downEv.clientX "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#24292E"}}," downEv.target.offsetLeft, downEv.clientY "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#24292E"}}," downEv.target.offsetTop];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      document."),s("span",{style:{color:"#6F42C1"}},"addEventListener"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'mousemove'"),s("span",{style:{color:"#24292E"}},", ("),s("span",{style:{color:"#E36209"}},"downMove"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"MouseEvent"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"left"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," downMove.clientX "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"unref"),s("span",{style:{color:"#24292E"}},"(star)["),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"top"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," downMove.clientY "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"unref"),s("span",{style:{color:"#24292E"}},"(star)["),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        downMove.target.style.left "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," left "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'px'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        downMove.target.style.top "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," top "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'px'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    document."),s("span",{style:{color:"#6F42C1"}},"addEventListener"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'mouseup'"),s("span",{style:{color:"#24292E"}},", () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      jsMouseTargetRef.value.onmousemove "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"null"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},"'less'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".js-mouse-content"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"500"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"position"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"relative"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},".js-mouse-target"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"position"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"absolute"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"background"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"red"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),os=JSON.parse('{"title":"刷刷面试题","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js/topic.md","filePath":"blogs/js/topic.md"}'),ss={name:"blogs/js/topic.md"},ns=Object.assign(ss,{setup(d){return(a,t)=>{const o=u("demo");return y(),F("div",null,[U,p(o,{customClass:"",sourceCode:`<template></template>
<script setup>
function createOverload() {
  const callMap = new Map();
  // 调用
  function overload(...args) {
    const key = args.map((arg) => typeof arg).join(',');
    const fn = callMap.get(key);
    if (fn) {
      return fn.apply(this, args);
    } else {
      new Error('no matching function');
    }
  }
  // 添加实现
  overload.addImpl = function (...args) {
    const fn = args.pop();
    if (typeof fn !== 'function') {
      return;
    }
    const types = args;
    callMap.set(types.join(','), fn);
  };
  return overload;
}
const getUsers = createOverload();
getUsers.addImpl('number', 'number', (a, b) => {
    console.log('按照页码和数量查询', a, b);
});
getUsers.addImpl('string', (name) => {
    console.log('根据姓名查询', name);
});
getUsers(1, 2);
getUsers('吴光辉');
<\/script>
`},{highlight:c(()=>[W]),default:c(()=>[p(w)]),_:1}),S,p(o,{customClass:"",sourceCode:`<template>
  <div class="container" ref="targetRef">
    <div v-if="current === 'scrollHeight'" class="scrollHeight" :style="{ height: \`\${width}px\` }"></div>
    从前，有个小男孩叫蒂姆，他喜欢读书。有一天，他找到了一本神奇的书，把他带到了他最喜欢的角色的世界里。
    蒂姆进入书本，发现自己身处一片神秘的森林。他探索了施了魔法的树木，遇到了会说话的动物和仙女。他沿着一条小路穿过森林，来到了一座城堡，在那里他遇到了一位勇敢的骑士和一位美丽的公主。
    骑士告诉蒂姆，一个邪恶的女巫对城堡施了魔法，他需要蒂姆的帮助来解除诅咒。他们一起寻找线索找到女巫，并发现她藏在一个附近的洞穴里。
    蒂姆和骑士勇敢地进入洞穴，面对女巫。她威胁要把他们变成蟾蜍，但蒂姆并不害怕。他用自己的智慧和敏捷的思维来智胜女巫。
    经过一场惊心动魄的战斗，蒂姆和骑士获得了胜利。他们打破了女巫的诅咒，把城堡恢复到以前的辉煌，并拯救了公主。感激的城堡居民为蒂姆举行了盛大的庆祝活动。
    当蒂姆告别他的新朋友时，他答应有一天会回来再次拜访他们。然后他走出书本，带着对阅读的新的热爱和难忘的冒险经历回到了现实世界。
  </div>
  <div
    v-if="current !== 'scrollHeight'"
    class="rule"
    :style="{
      width: \`\${width}px\`,
    }"
  >
    {{ current }}
  </div>
  <div>
    <a-select v-model:value="current" @change="fn">
      <a-select-option value="clientWidth">clientWidth</a-select-option>
      <a-select-option value="offsetWidth">offsetWidth</a-select-option>
      <a-select-option value="scrollHeight">scrollHeight</a-select-option>
    </a-select>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  const width = ref(0);
  const targetRef = ref();
  const current = ref('clientWidth');

  const fn = (value: string) => {
    width.value = targetRef.value[value];
  };

  onMounted(() => {
    width.value = targetRef.value.clientWidth;
  });
<\/script>

<style lang="less" scoped>
  .container {
    box-sizing: border-box;
    position: relative;
    height: 100px;
    overflow-y: scroll;
    .scrollHeight {
      width: 10px;
      height: auto;
      background: pink;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
  .rule {
    display: inline-block;
    text-align: center;
    background: pink;
    margin: 10px 0;
  }
</style>
`},{highlight:c(()=>[q]),default:c(()=>[p(T)]),_:1}),X,Y,p(o,{customClass:"",sourceCode:`<template>
  <a-input placeholder='请输入' @input='fn' />
</template>
<script lang='ts' setup>
  import {ref} from 'vue';
  const timeOut = ref<any>();
  const fn = (e:InputEvent) => {
    clearTimeout(timeOut.value);
    timeOut.value = setTimeout(() => {
      console.log(e.target.value)
    }, 2000)
  }
<\/script>
`},{highlight:c(()=>[N]),default:c(()=>[p(M)]),_:1}),V,z,p(o,{customClass:"",sourceCode:`<template>
  <a-input placeholder='请输入' @input='fn' />
</template>
<script lang='ts' setup>
  let time = new Date().getTime();
  const fn = (e:InputEvent) => {
    const now = new Date().getTime();
    if(now - time > 2000){
      console.log('节流');
      time = now; 
    }
  }

  // function throttleTimeOut(callback, wait) {
  //   let timeOut;
  //   return function() {
  //     if(!timeOut){
  //       timeOut = setTimeout(() => {
  //         timeOut = null;
  //         callback.apply(this,arguments);
  //       },wait)
  //     }
  //   }
  // }
<\/script>
`},{highlight:c(()=>[K]),default:c(()=>[p(j)]),_:1}),J,p(o,{customClass:"",sourceCode:`
<template>
  <div class='box'>
    <div class='list'>
      <div class='goods-item' v-for='i of 10' :key='i'>
        <div>商品{{i}}</div>
        <div class='add' @click='addCar'>+</div>
      </div>
    </div>
    <div class='car'></div>
  </div>
</template>
<script lang='ts' setup>
  const addCar = (e:PointerEvent) => {
    // content 动画元素添加到这个元素
    const box = document.querySelector('.box');
    // 动画元素
    const plus = document.createElement('div');
    // 购物车
    const car = document.querySelector('.car');
    plus.classList.add('plus');
    plus.innerHTML = \`<div class="inner"></div>\`;
    // 点击按钮信息
    const targetReact = (e.target as HTMLBRElement).getBoundingClientRect();
    // 购物车位置信息
    const carReact = car.getBoundingClientRect();
    plus.style.setProperty('--left',\`\${targetReact.left + 5}px\`);
    plus.style.setProperty('--top',\`\${targetReact.top - 20}px\`);
    plus.style.setProperty('--x',\`\${carReact.left - targetReact.left}px\`);
    plus.style.setProperty('--y',\`\${carReact.top - targetReact.top + 25}px\`);
    box.appendChild(plus);
    // 动画结束后移除元素
    plus.addEventListener('animationend',() => {
      plus.remove();
    })
  }
<\/script>
<style lang='less'>
  .box {
    height: 500px;
    position: relative;
    overflow-y: scroll;
    &::-webkit-scrollbar{
      display: none
    }

    .car {
      width: 50px;
      height: 50px;
      position: absolute;
      background: blue;
      left: 0;
      bottom: 0;
    }
    
    .goods-item {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #eee;
      user-select: none;

      .add {
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border: 1px solid pink;
        user-select: none;
      }
    }
    
    .plus{
      position: fixed;
      left: var(--left);
      top: var(--top);
      animation: moveY 0.8s cubic-bezier(0.5,-0.5,1,1) forwards;
      .inner{
        width: 40px;
        height: 40px;
        background: pink;
        animation: moveX 0.8s linear forwards;
      }
    }
  }
  
  @keyframes moveY {
    to {
      transform: translateY(var(--y)) ;
    }
  }

  @keyframes moveX {
    to {
      transform: translateX(var(--x)) ;
    }
  }
</style>
`},{highlight:c(()=>[Q]),default:c(()=>[p(H)]),_:1}),G,p(o,{customClass:"",sourceCode:`
<template>
  <div ref="contentRef" class='js-mouse-content'>
    <div ref="jsMouseTargetRef" class="js-mouse-target"></div>
  </div>
</template>
<script lang='ts' setup>
  import {onMounted, ref, unref} from "vue";

  const jsMouseTargetRef = ref<HTMLElement>();
  const contentRef = ref<HTMLElement>();
  const star = ref([0, 0]);

  onMounted(() => {
    jsMouseTargetRef.value.addEventListener('mousedown', (downEv: MouseEvent) => {
      star.value = [downEv.clientX - downEv.target.offsetLeft, downEv.clientY - downEv.target.offsetTop];
      document.addEventListener('mousemove', (downMove: MouseEvent) => {
        const left = downMove.clientX - unref(star)[0];
        const top = downMove.clientY - unref(star)[1];
        downMove.target.style.left = left + 'px';
        downMove.target.style.top = top + 'px';
      })
    })
    
    document.addEventListener('mouseup', () => {
      jsMouseTargetRef.value.onmousemove = null;
    })
  })
<\/script>
<style lang='less' scoped>
  .js-mouse-content {
    height: 500px;
    position: relative;

    .js-mouse-target {
      position: absolute;
      width: 50px;
      height: 50px;
      background: red;
    }
  }
</style>
`},{highlight:c(()=>[Z]),default:c(()=>[p(I)]),_:1})])}}});export{os as __pageData,ns as default};
