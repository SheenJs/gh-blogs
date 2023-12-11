import{l as h}from"./chunks/map.965815c3.js";import{d as k,h as w,j as b,o as B,c as m,_ as g,C,H as r,w as d,k as s,a as l}from"./chunks/framework.7096fd12.js";const G=k({__name:"6.区域模式.md.demo.2991764e",setup(A){const e=w();b(async()=>{await E(e.value)});async function E(a){const o=await h(),n=new o.Map(a,{enableDblclickZoom:!0,enableMapClick:!1,displayOptions:{building:!1},enableRotate:!1,enableTilt:!1}),M=new o.Point(104.10663034748738,24.714727851308414);n.centerAndZoom(M,11),n.enableScrollWheelZoom(!0),new o.Boundary().get("师宗",function(y){for(let p=0;p<y.boundaries.length;p++){const i=y.boundaries[p].split(";"),t=[];for(let c=0;c<i.length;c++){const F=i[c].split(","),f=new o.Point(F[0],F[1]);t.push(f)}const D=new o.MapMask(t,{isBuildingMask:!0,isPoiMask:!0,isMapMask:!0,showRegion:"inside",topFillColor:"#5679ea",topFillOpacity:.5,sideFillColor:"#5679ea",sideFillOpacity:.9});n.addOverlay(D);const _=new o.Polyline(t,{strokeColor:"#4ca7a2",strokeWeight:3,strokeOpacity:1});n.addOverlay(_)}const u=new o.Marker3D(new o.Point(104.10663034748738,24.714727851308414),1e3,{size:50,shape:"BMAP_SHAPE_CIRCLE",fillColor:"#454399",fillOpacity:.6});n.addOverlay(u),n.addOverlay(new o.Marker3D(new o.Point(104.00021214529644,24.836091208203417),Math.round(Math.random())*6e3,{size:50,icon:new o.Icon("https://img1.baidu.com/it/u=2399966577,1808536528&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=492",new o.Size(30,50))}))})}return(a,o)=>(B(),m("div",{id:"container",class:"container",ref_key:"container",ref:e},null,512))}});const L=g(G,[["__scopeId","data-v-72b5291c"]]),v=s("h1",{id:"区域模式",tabindex:"-1"},[l("区域模式 "),s("a",{class:"header-anchor",href:"#区域模式","aria-label":'Permalink to "区域模式"'},"​")],-1),P=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"id"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"container"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"container"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"container"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { loadBMapGL } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'./map.js'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"container"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"async"),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"await"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"initMap"),s("span",{style:{color:"#E1E4E8"}},"(container.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//初始化地图")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"async"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"initMap"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"dom"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"BMapGL"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"await"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"loadBMapGL"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 创建地图实例")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"_map"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Map"),s("span",{style:{color:"#E1E4E8"}},"(dom, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      enableDblclickZoom: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      enableMapClick: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      displayOptions: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        building: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      enableRotate: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      enableTilt: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 创建点坐标")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"point"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"104.10663034748738"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"24.714727851308414"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 初始化地图，设置中心点坐标和地图级别")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"centerAndZoom"),s("span",{style:{color:"#E1E4E8"}},"(point, "),s("span",{style:{color:"#79B8FF"}},"11"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"//开启鼠标滚轮缩放")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"enableScrollWheelZoom"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"bdary"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Boundary"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    bdary."),s("span",{style:{color:"#B392F0"}},"get"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'师宗'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"rs"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// 绘制行政区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"for"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," i "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},"; i "),s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#E1E4E8"}}," rs.boundaries."),s("span",{style:{color:"#79B8FF"}},"length"),s("span",{style:{color:"#E1E4E8"}},"; i"),s("span",{style:{color:"#F97583"}},"++"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"path"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," [];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"xyArr"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," rs.boundaries[i]."),s("span",{style:{color:"#B392F0"}},"split"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"';'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"ptArr"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," [];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"for"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," j "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},"; j "),s("span",{style:{color:"#F97583"}},"<"),s("span",{style:{color:"#E1E4E8"}}," xyArr."),s("span",{style:{color:"#79B8FF"}},"length"),s("span",{style:{color:"#E1E4E8"}},"; j"),s("span",{style:{color:"#F97583"}},"++"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"tmp"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," xyArr[j]."),s("span",{style:{color:"#B392F0"}},"split"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"','"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"pt"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"(tmp["),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},"], tmp["),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},"]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          ptArr."),s("span",{style:{color:"#B392F0"}},"push"),s("span",{style:{color:"#E1E4E8"}},"(pt);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"mapmask"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"MapMask"),s("span",{style:{color:"#E1E4E8"}},"(ptArr, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          isBuildingMask: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          isPoiMask: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          isMapMask: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          showRegion: "),s("span",{style:{color:"#9ECBFF"}},"'inside'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          topFillColor: "),s("span",{style:{color:"#9ECBFF"}},"'#5679ea'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          topFillOpacity: "),s("span",{style:{color:"#79B8FF"}},"0.5"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          sideFillColor: "),s("span",{style:{color:"#9ECBFF"}},"'#5679ea'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          sideFillOpacity: "),s("span",{style:{color:"#79B8FF"}},"0.9"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        _map."),s("span",{style:{color:"#B392F0"}},"addOverlay"),s("span",{style:{color:"#E1E4E8"}},"(mapmask);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"border"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Polyline"),s("span",{style:{color:"#E1E4E8"}},"(ptArr, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          strokeColor: "),s("span",{style:{color:"#9ECBFF"}},"'#4ca7a2'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          strokeWeight: "),s("span",{style:{color:"#79B8FF"}},"3"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          strokeOpacity: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        _map."),s("span",{style:{color:"#B392F0"}},"addOverlay"),s("span",{style:{color:"#E1E4E8"}},"(border);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"marker"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Marker3D"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"104.10663034748738"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"24.714727851308414"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#79B8FF"}},"1000"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          size: "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          shape: "),s("span",{style:{color:"#9ECBFF"}},"'BMAP_SHAPE_CIRCLE'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          fillColor: "),s("span",{style:{color:"#9ECBFF"}},"'#454399'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          fillOpacity: "),s("span",{style:{color:"#79B8FF"}},"0.6"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      _map."),s("span",{style:{color:"#B392F0"}},"addOverlay"),s("span",{style:{color:"#E1E4E8"}},"(marker);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      _map."),s("span",{style:{color:"#B392F0"}},"addOverlay"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Marker3D"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"104.00021214529644"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"24.836091208203417"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          Math."),s("span",{style:{color:"#B392F0"}},"round"),s("span",{style:{color:"#E1E4E8"}},"(Math."),s("span",{style:{color:"#B392F0"}},"random"),s("span",{style:{color:"#E1E4E8"}},"()) "),s("span",{style:{color:"#F97583"}},"*"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"6000"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            size: "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            icon: "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Icon"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              "),s("span",{style:{color:"#9ECBFF"}},"'https://img1.baidu.com/it/u=2399966577,1808536528&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=492'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Size"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"30"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            ),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".container"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"100"),s("span",{style:{color:"#F97583"}},"%"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"500"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"id"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"container"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"container"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"container"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { onMounted, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { loadBMapGL } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'./map.js'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"container"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"async"),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"await"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"initMap"),s("span",{style:{color:"#24292E"}},"(container.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//初始化地图")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"async"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"initMap"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"dom"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"BMapGL"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"await"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"loadBMapGL"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 创建地图实例")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"_map"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Map"),s("span",{style:{color:"#24292E"}},"(dom, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      enableDblclickZoom: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      enableMapClick: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      displayOptions: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        building: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      enableRotate: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      enableTilt: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 创建点坐标")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"point"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"104.10663034748738"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"24.714727851308414"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 初始化地图，设置中心点坐标和地图级别")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"centerAndZoom"),s("span",{style:{color:"#24292E"}},"(point, "),s("span",{style:{color:"#005CC5"}},"11"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"//开启鼠标滚轮缩放")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"enableScrollWheelZoom"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"bdary"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Boundary"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    bdary."),s("span",{style:{color:"#6F42C1"}},"get"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'师宗'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"rs"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// 绘制行政区")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"for"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," i "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},"; i "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#24292E"}}," rs.boundaries."),s("span",{style:{color:"#005CC5"}},"length"),s("span",{style:{color:"#24292E"}},"; i"),s("span",{style:{color:"#D73A49"}},"++"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"path"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," [];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"xyArr"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," rs.boundaries[i]."),s("span",{style:{color:"#6F42C1"}},"split"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"';'"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"ptArr"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," [];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"for"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," j "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},"; j "),s("span",{style:{color:"#D73A49"}},"<"),s("span",{style:{color:"#24292E"}}," xyArr."),s("span",{style:{color:"#005CC5"}},"length"),s("span",{style:{color:"#24292E"}},"; j"),s("span",{style:{color:"#D73A49"}},"++"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"tmp"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," xyArr[j]."),s("span",{style:{color:"#6F42C1"}},"split"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"','"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"pt"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"(tmp["),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},"], tmp["),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},"]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          ptArr."),s("span",{style:{color:"#6F42C1"}},"push"),s("span",{style:{color:"#24292E"}},"(pt);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"mapmask"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"MapMask"),s("span",{style:{color:"#24292E"}},"(ptArr, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          isBuildingMask: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          isPoiMask: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          isMapMask: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          showRegion: "),s("span",{style:{color:"#032F62"}},"'inside'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          topFillColor: "),s("span",{style:{color:"#032F62"}},"'#5679ea'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          topFillOpacity: "),s("span",{style:{color:"#005CC5"}},"0.5"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          sideFillColor: "),s("span",{style:{color:"#032F62"}},"'#5679ea'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          sideFillOpacity: "),s("span",{style:{color:"#005CC5"}},"0.9"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        _map."),s("span",{style:{color:"#6F42C1"}},"addOverlay"),s("span",{style:{color:"#24292E"}},"(mapmask);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"border"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Polyline"),s("span",{style:{color:"#24292E"}},"(ptArr, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          strokeColor: "),s("span",{style:{color:"#032F62"}},"'#4ca7a2'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          strokeWeight: "),s("span",{style:{color:"#005CC5"}},"3"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          strokeOpacity: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        _map."),s("span",{style:{color:"#6F42C1"}},"addOverlay"),s("span",{style:{color:"#24292E"}},"(border);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"marker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Marker3D"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"104.10663034748738"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"24.714727851308414"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#005CC5"}},"1000"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          size: "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          shape: "),s("span",{style:{color:"#032F62"}},"'BMAP_SHAPE_CIRCLE'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          fillColor: "),s("span",{style:{color:"#032F62"}},"'#454399'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          fillOpacity: "),s("span",{style:{color:"#005CC5"}},"0.6"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      _map."),s("span",{style:{color:"#6F42C1"}},"addOverlay"),s("span",{style:{color:"#24292E"}},"(marker);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      _map."),s("span",{style:{color:"#6F42C1"}},"addOverlay"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Marker3D"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"104.00021214529644"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"24.836091208203417"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          Math."),s("span",{style:{color:"#6F42C1"}},"round"),s("span",{style:{color:"#24292E"}},"(Math."),s("span",{style:{color:"#6F42C1"}},"random"),s("span",{style:{color:"#24292E"}},"()) "),s("span",{style:{color:"#D73A49"}},"*"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"6000"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            size: "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            icon: "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Icon"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              "),s("span",{style:{color:"#032F62"}},"'https://img1.baidu.com/it/u=2399966577,1808536528&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=492'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Size"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"30"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            ),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".container"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"100"),s("span",{style:{color:"#D73A49"}},"%"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"500"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),S=JSON.parse('{"title":"区域模式","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/vue/bMap/6.区域模式.md","filePath":"blogs/vue/bMap/6.区域模式.md"}'),O={name:"blogs/vue/bMap/6.区域模式.md"},z=Object.assign(O,{setup(A){return(e,E)=>{const a=C("demo"),o=C("git-talk");return B(),m("div",null,[v,r(a,{customClass:"",sourceCode:`<template>
  <div id="container" class="container" ref="container"></div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { loadBMapGL } from './map.js';
  const container = ref();
  onMounted(async () => {
    await initMap(container.value);
  });
  //初始化地图
  async function initMap(dom) {
    const BMapGL: any = await loadBMapGL();
    // 创建地图实例
    const _map: any = new BMapGL.Map(dom, {
      enableDblclickZoom: true,
      enableMapClick: false,
      displayOptions: {
        building: false,
      },
      enableRotate: false,
      enableTilt: false,
    });
    // 创建点坐标
    const point = new BMapGL.Point(104.10663034748738, 24.714727851308414);
    // 初始化地图，设置中心点坐标和地图级别
    _map.centerAndZoom(point, 11);
    //开启鼠标滚轮缩放
    _map.enableScrollWheelZoom(true);

    const bdary = new BMapGL.Boundary();
    bdary.get('师宗', function (rs) {
      // 绘制行政区
      for (let i = 0; i < rs.boundaries.length; i++) {
        const path = [];
        const xyArr = rs.boundaries[i].split(';');
        const ptArr = [];
        for (let j = 0; j < xyArr.length; j++) {
          const tmp = xyArr[j].split(',');
          const pt = new BMapGL.Point(tmp[0], tmp[1]);
          ptArr.push(pt);
        }
        const mapmask = new BMapGL.MapMask(ptArr, {
          isBuildingMask: true,
          isPoiMask: true,
          isMapMask: true,
          showRegion: 'inside',
          topFillColor: '#5679ea',
          topFillOpacity: 0.5,
          sideFillColor: '#5679ea',
          sideFillOpacity: 0.9,
        });
        _map.addOverlay(mapmask);
        const border = new BMapGL.Polyline(ptArr, {
          strokeColor: '#4ca7a2',
          strokeWeight: 3,
          strokeOpacity: 1,
        });
        _map.addOverlay(border);
      }

      const marker = new BMapGL.Marker3D(
        new BMapGL.Point(104.10663034748738, 24.714727851308414),
        1000,
        {
          size: 50,
          shape: 'BMAP_SHAPE_CIRCLE',
          fillColor: '#454399',
          fillOpacity: 0.6,
        }
      );
      _map.addOverlay(marker);

      _map.addOverlay(
        new BMapGL.Marker3D(
          new BMapGL.Point(104.00021214529644, 24.836091208203417),
          Math.round(Math.random()) * 6000,
          {
            size: 50,
            icon: new BMapGL.Icon(
              'https://img1.baidu.com/it/u=2399966577,1808536528&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=492',
              new BMapGL.Size(30, 50)
            ),
          }
        )
      );
    });
  }
<\/script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 500px;
  }
</style>
`},{highlight:d(()=>[P]),default:d(()=>[r(L)]),_:1}),r(o)])}}});export{S as __pageData,z as default};
