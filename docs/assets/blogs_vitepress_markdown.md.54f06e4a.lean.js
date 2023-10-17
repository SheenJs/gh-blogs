import{u as h}from"./chunks/useECharts.04a7b82f.js";import{d,h as b,j as F,o,c as t,_ as u,a1 as v,g,k as s,C as i,H as p,w as E,Q as c,a as n}from"./chunks/framework.f805e0a2.js";const C="/gh-blogs/logo.webp",k=d({__name:"markdown.md.demo.e5e3f566",setup(r){const e=b();return F(()=>{h(e.value,{title:{text:"柱形图"},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:{name:"销量",type:"bar",data:[5,20,36,10,10,20]}})}),(a,l)=>(o(),t("div",{class:"container",ref_key:"charRef",ref:e},null,512))}});const _=u(k,[["__scopeId","data-v-29e5f51b"]]),B={class:"svg-loader"},f=["height","width"],D=["cx","cy","r"],A=["cx","cy","r"],x=d({__name:"SvgLoading",props:{size:{default:20}},setup(r){const e=r;v(l=>({"2674653d":a.value/10}));const a=g(()=>e.size/2);return(l,y)=>(o(),t("div",B,[(o(),t("svg",{height:l.size,width:l.size,class:"svg-container"},[s("circle",{cx:a.value,cy:a.value,r:a.value-a.value/10,class:"loader-svg bg"},null,8,D),s("circle",{cx:a.value,cy:a.value,r:a.value-a.value/10,class:"loader-svg animate"},null,8,A)],8,f))]))}});const q=u(x,[["__scopeId","data-v-8456ed6c"]]),T=c("",35),w=c("",6),P=c("",6),S=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"container"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"charRef"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { useECharts } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/utils/useECharts'"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"charRef"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},"useECharts"),s("span",{style:{color:"#E1E4E8"}},"(charRef.value, {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      title: {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        text: "),s("span",{style:{color:"#9ECBFF"}},"'柱形图'"),s("span",{style:{color:"#E1E4E8"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      xAxis: {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"// x轴")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: ["),s("span",{style:{color:"#9ECBFF"}},"'衬衫'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'羊毛衫'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'雪纺衫'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'裤子'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'高跟鞋'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'袜子'"),s("span",{style:{color:"#E1E4E8"}},"],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      yAxis: {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"// y轴")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      series: {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"// 图表类型")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},"'销量'"),s("span",{style:{color:"#E1E4E8"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'bar'"),s("span",{style:{color:"#E1E4E8"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: ["),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"36"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},"],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    });")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  });")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".container"),s("span",{style:{color:"#E1E4E8"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"400"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"container"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"charRef"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { onMounted, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { useECharts } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/utils/useECharts'"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"charRef"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},"useECharts"),s("span",{style:{color:"#24292E"}},"(charRef.value, {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      title: {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        text: "),s("span",{style:{color:"#032F62"}},"'柱形图'"),s("span",{style:{color:"#24292E"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      xAxis: {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"// x轴")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: ["),s("span",{style:{color:"#032F62"}},"'衬衫'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'羊毛衫'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'雪纺衫'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'裤子'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'高跟鞋'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'袜子'"),s("span",{style:{color:"#24292E"}},"],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      yAxis: {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"// y轴")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      series: {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"// 图表类型")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},"'销量'"),s("span",{style:{color:"#24292E"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'bar'"),s("span",{style:{color:"#24292E"}},",")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: ["),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"36"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},"],")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    });")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  });")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"}),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".container"),s("span",{style:{color:"#24292E"}}," {")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"400"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),j=c("",2),N=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/vitepress/markdown.md","filePath":"blogs/vitepress/markdown.md"}'),$={name:"blogs/vitepress/markdown.md"},V=Object.assign($,{setup(r){return(e,a)=>{const l=i("a-button"),y=i("demo"),m=i("git-talk");return o(),t("div",null,[T,p(q),w,p(l,null,{default:E(()=>[n("这是一个按钮")]),_:1}),P,p(y,{customClass:"",sourceCode:`<template>
  <div class="container" ref="charRef"></div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useECharts } from '/utils/useECharts';
  const charRef = ref();
  onMounted(() => {
    useECharts(charRef.value, {
      title: {
        text: '柱形图',
      },
      xAxis: {
        // x轴
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {
        // y轴
      },
      series: {
        // 图表类型
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    });
  });
<\/script>

<style lang="less" scoped>
  .container {
    height: 400px;
  }
</style>
`},{highlight:E(()=>[S]),default:E(()=>[p(_)]),_:1}),j,p(m)])}}});export{N as __pageData,V as default};
