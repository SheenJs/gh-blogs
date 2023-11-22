import{d as v,h as B,j as M,a4 as A,a5 as m,o as f,c as _,_ as w,C as h,H as F,w as D,k as s,a as l}from"./chunks/framework.bec6ef87.js";import{l as S}from"./chunks/map.965815c3.js";import{B as L,A as b}from"./chunks/index.0e0dc69a.js";const Z=v({__name:"3.控件.md.demo.2accefb4",setup(u){const p=B(),r=B(!1);M(async()=>{await E(p.value)});async function E(c){const o=await S(),a=new o.Map(c);a.centerAndZoom(new o.Point(116.404,39.915),18),a.addControl(new o.ScaleControl),a.addControl(new o.ZoomControl),a.addControl(new o.NavigationControl3D);const C=new o.LocationControl({anchor:BMAP_ANCHOR_TOP_RIGHT,offset:new o.Size(20,20)});a.addControl(C),C.addEventListener("locationSuccess",function(n){console.log(n)}),a.addControl(new o.CityListControl({anchor:BMAP_ANCHOR_TOP_LEFT}));function y({anchor:n=BMAP_ANCHOR_TOP_LEFT,offset:e=new o.Size(20,60)}={}){this.defaultAnchor=n,this.defaultOffset=e}y.prototype=new o.Control,y.prototype.initialize=function(n){const e=A(L,{innerText:"放大1级",onclick:()=>{n.setZoom(n.getZoom()+1)}}),t=document.createElement("div");return n.getContainer().appendChild(t),m(e,t),t},a.addControl(new y);function i({anchor:n=BMAP_ANCHOR_TOP_LEFT,offset:e=new o.Size(20,120)}={}){this.defaultAnchor=n,this.defaultOffset=e}i.prototype=new o.Control,i.prototype.initialize=function(n){const e=A(b,{checked:r,"onUpdate:checked":async d=>{r.value=d,d?n.enableScrollWheelZoom():n.disableScrollWheelZoom()}}),t=document.createElement("div");return n.getContainer().appendChild(t),m(e,t),t},a.addControl(new i)}return(c,o)=>(f(),_("div",{id:"container",class:"container",ref_key:"container",ref:p},null,512))}});const G=w(Z,[["__scopeId","data-v-570cb391"]]),g=s("h1",{id:"控件",tabindex:"-1"},[l("控件 "),s("a",{class:"header-anchor",href:"#控件","aria-label":'Permalink to "控件"'},"​")],-1),O=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"id"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"container"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"container"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"container"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { loadBMapGL } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'./map.js'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { Button "),s("span",{style:{color:"#F97583"}},"as"),s("span",{style:{color:"#E1E4E8"}}," AButton, Switch "),s("span",{style:{color:"#F97583"}},"as"),s("span",{style:{color:"#E1E4E8"}}," ASwitch } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'ant-design-vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { h, render } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"container"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"enableScrollWheelZoomSwitch"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"async"),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"await"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"initMap"),s("span",{style:{color:"#E1E4E8"}},"(container.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//初始化地图")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"async"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"initMap"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"dom"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"BMapGL"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"await"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"loadBMapGL"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 创建地图实例")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"_map"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Map"),s("span",{style:{color:"#E1E4E8"}},"(dom);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 初始化地图，设置中心点坐标和地图级别")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"centerAndZoom"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"116.404"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"39.915"),s("span",{style:{color:"#E1E4E8"}},"), "),s("span",{style:{color:"#79B8FF"}},"18"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 添加比例尺控件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"addControl"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"ScaleControl"),s("span",{style:{color:"#E1E4E8"}},"());")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 添加缩放控件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"addControl"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"ZoomControl"),s("span",{style:{color:"#E1E4E8"}},"());")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 3d控件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"addControl"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"NavigationControl3D"),s("span",{style:{color:"#E1E4E8"}},"());")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"locationControl"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"LocationControl"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// 控件的停靠位置（可选，默认左上角）")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      anchor: "),s("span",{style:{color:"#79B8FF"}},"BMAP_ANCHOR_TOP_RIGHT"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// 控件基于停靠位置的偏移量（可选）")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      offset: "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Size"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"addControl"),s("span",{style:{color:"#E1E4E8"}},"(locationControl);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    locationControl."),s("span",{style:{color:"#B392F0"}},"addEventListener"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'locationSuccess'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"e"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      console."),s("span",{style:{color:"#B392F0"}},"log"),s("span",{style:{color:"#E1E4E8"}},"(e);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"addControl"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"CityListControl"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"// 控件的停靠位置（可选，默认左上角）")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        anchor: "),s("span",{style:{color:"#79B8FF"}},"BMAP_ANCHOR_TOP_LEFT"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"/** 自定义放大地图层级控件 **/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ZoomControl"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                           "),s("span",{style:{color:"#FFAB70"}},"anchor"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"BMAP_ANCHOR_TOP_LEFT"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                           "),s("span",{style:{color:"#FFAB70"}},"offset"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Size"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"60"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                         } "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," {}) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".defaultAnchor "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," anchor;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".defaultOffset "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," offset;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"//通过JavaScript的prototype属性继承于BMap.Control")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"ZoomControl"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#79B8FF"}},"prototype"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Control"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"//自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"//在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"ZoomControl"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#79B8FF"}},"prototype"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#B392F0"}},"initialize"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"map"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"btn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"h"),s("span",{style:{color:"#E1E4E8"}},"(AButton, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        innerText: "),s("span",{style:{color:"#9ECBFF"}},"'放大1级'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#B392F0"}},"onclick"),s("span",{style:{color:"#E1E4E8"}},": () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          map."),s("span",{style:{color:"#B392F0"}},"setZoom"),s("span",{style:{color:"#E1E4E8"}},"(map."),s("span",{style:{color:"#B392F0"}},"getZoom"),s("span",{style:{color:"#E1E4E8"}},"() "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," document."),s("span",{style:{color:"#B392F0"}},"createElement"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'div'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      map."),s("span",{style:{color:"#B392F0"}},"getContainer"),s("span",{style:{color:"#E1E4E8"}},"()."),s("span",{style:{color:"#B392F0"}},"appendChild"),s("span",{style:{color:"#E1E4E8"}},"(div);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// 这里使用render函数把ant组件渲染到控件中")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},"render"),s("span",{style:{color:"#E1E4E8"}},"(btn, div);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," div;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"addControl"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ZoomControl"),s("span",{style:{color:"#E1E4E8"}},"());")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"/** 自定义放大地图层级控件 **/")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"/** 自定义鼠标滚轮控制地图层级开关控件 **/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"enableScrollWheelZoomControl"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                                            "),s("span",{style:{color:"#FFAB70"}},"anchor"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"BMAP_ANCHOR_TOP_LEFT"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                                            "),s("span",{style:{color:"#FFAB70"}},"offset"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Size"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"120"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                                          } "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," {}) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".defaultAnchor "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," anchor;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"this"),s("span",{style:{color:"#E1E4E8"}},".defaultOffset "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," offset;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"//通过JavaScript的prototype属性继承于BMap.Control")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"enableScrollWheelZoomControl"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#79B8FF"}},"prototype"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Control"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"//自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"//在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"enableScrollWheelZoomControl"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#79B8FF"}},"prototype"),s("span",{style:{color:"#E1E4E8"}},"."),s("span",{style:{color:"#B392F0"}},"initialize"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"map"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"btn"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"h"),s("span",{style:{color:"#E1E4E8"}},"(ASwitch, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        checked: enableScrollWheelZoomSwitch,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        ["),s("span",{style:{color:"#9ECBFF"}},"'onUpdate:checked'"),s("span",{style:{color:"#E1E4E8"}},"]: "),s("span",{style:{color:"#F97583"}},"async"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"checked"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          enableScrollWheelZoomSwitch.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," checked;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," (checked) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#6A737D"}},"//开启鼠标滚轮缩放")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            map."),s("span",{style:{color:"#B392F0"}},"enableScrollWheelZoom"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          } "),s("span",{style:{color:"#F97583"}},"else"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#6A737D"}},"//关闭鼠标滚轮缩放")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            map."),s("span",{style:{color:"#B392F0"}},"disableScrollWheelZoom"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," document."),s("span",{style:{color:"#B392F0"}},"createElement"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'div'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      map."),s("span",{style:{color:"#B392F0"}},"getContainer"),s("span",{style:{color:"#E1E4E8"}},"()."),s("span",{style:{color:"#B392F0"}},"appendChild"),s("span",{style:{color:"#E1E4E8"}},"(div);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// 这里使用render函数把ant组件渲染到控件中")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},"render"),s("span",{style:{color:"#E1E4E8"}},"(btn, div);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," div;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"addControl"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"enableScrollWheelZoomControl"),s("span",{style:{color:"#E1E4E8"}},"());")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"/** 自定义鼠标滚轮控制地图层级开关控件 **/")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { Button "),s("span",{style:{color:"#D73A49"}},"as"),s("span",{style:{color:"#24292E"}}," AButton, Switch "),s("span",{style:{color:"#D73A49"}},"as"),s("span",{style:{color:"#24292E"}}," ASwitch } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'ant-design-vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { h, render } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"container"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"enableScrollWheelZoomSwitch"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"async"),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"await"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"initMap"),s("span",{style:{color:"#24292E"}},"(container.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//初始化地图")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"async"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"initMap"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"dom"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"BMapGL"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"await"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"loadBMapGL"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 创建地图实例")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"_map"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Map"),s("span",{style:{color:"#24292E"}},"(dom);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 初始化地图，设置中心点坐标和地图级别")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"centerAndZoom"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"116.404"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"39.915"),s("span",{style:{color:"#24292E"}},"), "),s("span",{style:{color:"#005CC5"}},"18"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 添加比例尺控件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"addControl"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"ScaleControl"),s("span",{style:{color:"#24292E"}},"());")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 添加缩放控件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"addControl"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"ZoomControl"),s("span",{style:{color:"#24292E"}},"());")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 3d控件")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"addControl"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"NavigationControl3D"),s("span",{style:{color:"#24292E"}},"());")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"locationControl"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"LocationControl"),s("span",{style:{color:"#24292E"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// 控件的停靠位置（可选，默认左上角）")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      anchor: "),s("span",{style:{color:"#005CC5"}},"BMAP_ANCHOR_TOP_RIGHT"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// 控件基于停靠位置的偏移量（可选）")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      offset: "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Size"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"addControl"),s("span",{style:{color:"#24292E"}},"(locationControl);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    locationControl."),s("span",{style:{color:"#6F42C1"}},"addEventListener"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'locationSuccess'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"e"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      console."),s("span",{style:{color:"#6F42C1"}},"log"),s("span",{style:{color:"#24292E"}},"(e);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"addControl"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"CityListControl"),s("span",{style:{color:"#24292E"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"// 控件的停靠位置（可选，默认左上角）")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        anchor: "),s("span",{style:{color:"#005CC5"}},"BMAP_ANCHOR_TOP_LEFT"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"/** 自定义放大地图层级控件 **/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ZoomControl"),s("span",{style:{color:"#24292E"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                           "),s("span",{style:{color:"#E36209"}},"anchor"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"BMAP_ANCHOR_TOP_LEFT"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                           "),s("span",{style:{color:"#E36209"}},"offset"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Size"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"60"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                         } "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," {}) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".defaultAnchor "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," anchor;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".defaultOffset "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," offset;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"//通过JavaScript的prototype属性继承于BMap.Control")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"ZoomControl"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#005CC5"}},"prototype"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Control"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"//自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"//在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"ZoomControl"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#005CC5"}},"prototype"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#6F42C1"}},"initialize"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"map"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"btn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"h"),s("span",{style:{color:"#24292E"}},"(AButton, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        innerText: "),s("span",{style:{color:"#032F62"}},"'放大1级'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6F42C1"}},"onclick"),s("span",{style:{color:"#24292E"}},": () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          map."),s("span",{style:{color:"#6F42C1"}},"setZoom"),s("span",{style:{color:"#24292E"}},"(map."),s("span",{style:{color:"#6F42C1"}},"getZoom"),s("span",{style:{color:"#24292E"}},"() "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," document."),s("span",{style:{color:"#6F42C1"}},"createElement"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'div'"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      map."),s("span",{style:{color:"#6F42C1"}},"getContainer"),s("span",{style:{color:"#24292E"}},"()."),s("span",{style:{color:"#6F42C1"}},"appendChild"),s("span",{style:{color:"#24292E"}},"(div);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// 这里使用render函数把ant组件渲染到控件中")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},"render"),s("span",{style:{color:"#24292E"}},"(btn, div);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," div;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"addControl"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ZoomControl"),s("span",{style:{color:"#24292E"}},"());")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"/** 自定义放大地图层级控件 **/")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"/** 自定义鼠标滚轮控制地图层级开关控件 **/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"enableScrollWheelZoomControl"),s("span",{style:{color:"#24292E"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                                            "),s("span",{style:{color:"#E36209"}},"anchor"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"BMAP_ANCHOR_TOP_LEFT"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                                            "),s("span",{style:{color:"#E36209"}},"offset"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Size"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"120"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                                          } "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," {}) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".defaultAnchor "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," anchor;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"this"),s("span",{style:{color:"#24292E"}},".defaultOffset "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," offset;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"//通过JavaScript的prototype属性继承于BMap.Control")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"enableScrollWheelZoomControl"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#005CC5"}},"prototype"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Control"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"//自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"//在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"enableScrollWheelZoomControl"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#005CC5"}},"prototype"),s("span",{style:{color:"#24292E"}},"."),s("span",{style:{color:"#6F42C1"}},"initialize"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"map"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"btn"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"h"),s("span",{style:{color:"#24292E"}},"(ASwitch, {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        checked: enableScrollWheelZoomSwitch,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        ["),s("span",{style:{color:"#032F62"}},"'onUpdate:checked'"),s("span",{style:{color:"#24292E"}},"]: "),s("span",{style:{color:"#D73A49"}},"async"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"checked"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          enableScrollWheelZoomSwitch.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," checked;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," (checked) {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#6A737D"}},"//开启鼠标滚轮缩放")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            map."),s("span",{style:{color:"#6F42C1"}},"enableScrollWheelZoom"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          } "),s("span",{style:{color:"#D73A49"}},"else"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#6A737D"}},"//关闭鼠标滚轮缩放")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            map."),s("span",{style:{color:"#6F42C1"}},"disableScrollWheelZoom"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," document."),s("span",{style:{color:"#6F42C1"}},"createElement"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'div'"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      map."),s("span",{style:{color:"#6F42C1"}},"getContainer"),s("span",{style:{color:"#24292E"}},"()."),s("span",{style:{color:"#6F42C1"}},"appendChild"),s("span",{style:{color:"#24292E"}},"(div);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// 这里使用render函数把ant组件渲染到控件中")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},"render"),s("span",{style:{color:"#24292E"}},"(btn, div);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," div;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    };")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"addControl"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"enableScrollWheelZoomControl"),s("span",{style:{color:"#24292E"}},"());")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"/** 自定义鼠标滚轮控制地图层级开关控件 **/")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".container"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"100"),s("span",{style:{color:"#D73A49"}},"%"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"500"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),z=JSON.parse('{"title":"控件","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/vue/bMap/3.控件.md","filePath":"blogs/vue/bMap/3.控件.md"}'),P={name:"blogs/vue/bMap/3.控件.md"},N=Object.assign(P,{setup(u){return(p,r)=>{const E=h("demo"),c=h("git-talk");return f(),_("div",null,[g,F(E,{customClass:"",sourceCode:`<template>
  <div id="container" class="container" ref="container"></div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { loadBMapGL } from './map.js';
  import { Button as AButton, Switch as ASwitch } from 'ant-design-vue';
  import { h, render } from 'vue';

  const container = ref();

  const enableScrollWheelZoomSwitch = ref(false);

  onMounted(async () => {
    await initMap(container.value);
  });

  //初始化地图
  async function initMap(dom) {
    const BMapGL: any = await loadBMapGL();
    // 创建地图实例
    const _map: any = new BMapGL.Map(dom);
    // 初始化地图，设置中心点坐标和地图级别
    _map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 18);

    // 添加比例尺控件
    _map.addControl(new BMapGL.ScaleControl());
    // 添加缩放控件
    _map.addControl(new BMapGL.ZoomControl());
    // 3d控件
    _map.addControl(new BMapGL.NavigationControl3D());

    const locationControl = new BMapGL.LocationControl({
      // 控件的停靠位置（可选，默认左上角）
      anchor: BMAP_ANCHOR_TOP_RIGHT,
      // 控件基于停靠位置的偏移量（可选）
      offset: new BMapGL.Size(20, 20),
    });
    _map.addControl(locationControl);
    locationControl.addEventListener('locationSuccess', function (e) {
      console.log(e);
    });

    _map.addControl(
      new BMapGL.CityListControl({
        // 控件的停靠位置（可选，默认左上角）
        anchor: BMAP_ANCHOR_TOP_LEFT,
      })
    );

    /** 自定义放大地图层级控件 **/
    function ZoomControl({
                           anchor = BMAP_ANCHOR_TOP_LEFT,
                           offset = new BMapGL.Size(20, 60),
                         } = {}) {
      this.defaultAnchor = anchor;
      this.defaultOffset = offset;
    }

    //通过JavaScript的prototype属性继承于BMap.Control
    ZoomControl.prototype = new BMapGL.Control();

    //自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回
    //在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中
    ZoomControl.prototype.initialize = function (map) {
      const btn = h(AButton, {
        innerText: '放大1级',
        onclick: () => {
          map.setZoom(map.getZoom() + 1);
        },
      });
      const div = document.createElement('div');
      map.getContainer().appendChild(div);
      // 这里使用render函数把ant组件渲染到控件中
      render(btn, div);
      return div;
    };
    _map.addControl(new ZoomControl());
    /** 自定义放大地图层级控件 **/

    /** 自定义鼠标滚轮控制地图层级开关控件 **/
    function enableScrollWheelZoomControl({
                                            anchor = BMAP_ANCHOR_TOP_LEFT,
                                            offset = new BMapGL.Size(20, 120),
                                          } = {}) {
      this.defaultAnchor = anchor;
      this.defaultOffset = offset;
    }

    //通过JavaScript的prototype属性继承于BMap.Control
    enableScrollWheelZoomControl.prototype = new BMapGL.Control();

    //自定义控件必须实现自己的initialize方法，并且将控件的DOM元素返回
    //在本方法中创建个div元素作为控件的容器，并将其添加到地图容器中
    enableScrollWheelZoomControl.prototype.initialize = function (map) {
      const btn = h(ASwitch, {
        checked: enableScrollWheelZoomSwitch,
        ['onUpdate:checked']: async (checked) => {
          enableScrollWheelZoomSwitch.value = checked;
          if (checked) {
            //开启鼠标滚轮缩放
            map.enableScrollWheelZoom();
          } else {
            //关闭鼠标滚轮缩放
            map.disableScrollWheelZoom();
          }
        },
      });
      const div = document.createElement('div');
      map.getContainer().appendChild(div);
      // 这里使用render函数把ant组件渲染到控件中
      render(btn, div);
      return div;
    };
    _map.addControl(new enableScrollWheelZoomControl());
    /** 自定义鼠标滚轮控制地图层级开关控件 **/
  }
<\/script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 500px;
  }
</style>
`},{highlight:D(()=>[O]),default:D(()=>[F(G)]),_:1}),F(c)])}}});export{z as __pageData,N as default};
