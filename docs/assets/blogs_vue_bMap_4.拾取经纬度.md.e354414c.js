import{d as M,h as F,a6 as b,j as h,C as d,o as p,c as r,k as s,t as u,H as E,w as C,l as m,F as w,_ as L,a as l}from"./chunks/framework.bec6ef87.js";import{l as x}from"./chunks/map.965815c3.js";const G={class:"box"},k={class:"result"},P={key:0},O={key:1},N=M({__name:"4.拾取经纬度.md.demo.60b07899",setup(_){const y=F(),c=F("102.85076697175514, 24.89248383034783"),t=F([]),{copy:i,copied:v}=b({source:c});h(async()=>{await g(y.value)});async function g(B){const o=await x(),n=new o.Map(B);n.centerAndZoom(new o.Point(102.85076697175514,24.89248383034783),18),n.enableScrollWheelZoom(!0),n.addControl(new o.CityListControl({anchor:BMAP_ANCHOR_TOP_LEFT}));var A=new o.Geocoder;n.addEventListener("click",a=>{c.value=`${a.latlng.lng},${a.latlng.lat}`,n.clearOverlays(),n.addOverlay(new o.Marker(new o.Point(a.latlng.lng,a.latlng.lat))),A.getLocation(a.latlng,D=>{const e=D.addressComponents;t.value=[e.province,e.city,e.district,e.street,e.streetNumber].filter(f=>f)})})}return(B,o)=>{const n=d("AButton");return p(),r(w,null,[s("div",G,[s("div",k,u(c.value)+" "+u(t.value.join(" ")),1),E(n,{onClick:o[0]||(o[0]=A=>m(i)())},{default:C(()=>[m(v)?(p(),r("span",O,"已复制")):(p(),r("span",P,"复制当前经纬度"))]),_:1})]),s("div",{id:"container",class:"container",ref_key:"container",ref:y},null,512)],64)}}});const $=L(N,[["__scopeId","data-v-7f5304c6"]]),j=s("h1",{id:"拾取经纬度",tabindex:"-1"},[l("拾取经纬度 "),s("a",{class:"header-anchor",href:"#拾取经纬度","aria-label":'Permalink to "拾取经纬度"'},"​")],-1),T=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"box"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"result"'),s("span",{style:{color:"#E1E4E8"}},">{{ source }} {{ address.join(' ') }}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"copy()"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"<!-- by default, `copied` will be reset in 1.5s -->")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-if"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"!copied"'),s("span",{style:{color:"#E1E4E8"}},">复制当前经纬度</"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-else"),s("span",{style:{color:"#E1E4E8"}},">已复制</"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"id"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"container"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"container"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"container"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { useClipboard } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@vueuse/core'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { loadBMapGL } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'./map.js'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"container"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"source"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'102.85076697175514, 24.89248383034783'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"address"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"([]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," { "),s("span",{style:{color:"#79B8FF"}},"copy"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"copied"),s("span",{style:{color:"#E1E4E8"}}," } "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useClipboard"),s("span",{style:{color:"#E1E4E8"}},"({ source });")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"centerAndZoom"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"102.85076697175514"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"24.89248383034783"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"18")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"enableScrollWheelZoom"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"addControl"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"CityListControl"),s("span",{style:{color:"#E1E4E8"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"// 控件的停靠位置（可选，默认左上角）")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        anchor: "),s("span",{style:{color:"#79B8FF"}},"BMAP_ANCHOR_TOP_LEFT"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"var"),s("span",{style:{color:"#E1E4E8"}}," geoc "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Geocoder"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"addEventListener"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'click'"),s("span",{style:{color:"#E1E4E8"}},", ("),s("span",{style:{color:"#FFAB70"}},"e"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      source.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"`${"),s("span",{style:{color:"#E1E4E8"}},"e"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#E1E4E8"}},"latlng"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#E1E4E8"}},"lng"),s("span",{style:{color:"#9ECBFF"}},"},${"),s("span",{style:{color:"#E1E4E8"}},"e"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#E1E4E8"}},"latlng"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#E1E4E8"}},"lat"),s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      _map."),s("span",{style:{color:"#B392F0"}},"clearOverlays"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      _map."),s("span",{style:{color:"#B392F0"}},"addOverlay"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Marker"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"(e.latlng.lng, e.latlng.lat))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      geoc."),s("span",{style:{color:"#B392F0"}},"getLocation"),s("span",{style:{color:"#E1E4E8"}},"(e.latlng, ("),s("span",{style:{color:"#FFAB70"}},"res"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"addressArr"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," res.addressComponents;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        address.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          addressArr["),s("span",{style:{color:"#9ECBFF"}},"'province'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          addressArr["),s("span",{style:{color:"#9ECBFF"}},"'city'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          addressArr["),s("span",{style:{color:"#9ECBFF"}},"'district'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          addressArr["),s("span",{style:{color:"#9ECBFF"}},"'street'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          addressArr["),s("span",{style:{color:"#9ECBFF"}},"'streetNumber'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        ]."),s("span",{style:{color:"#B392F0"}},"filter"),s("span",{style:{color:"#E1E4E8"}},"(("),s("span",{style:{color:"#FFAB70"}},"item"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," item);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".container"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"width"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"100"),s("span",{style:{color:"#F97583"}},"%"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"500"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".box"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"padding"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#B392F0"}},".result"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"display"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"inline-block"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"font-size"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"14"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"font-weight"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"bold"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"padding"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"border-radius"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"box-shadow"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"rgba"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"0.2"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"margin-right"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"box"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"result"'),s("span",{style:{color:"#24292E"}},">{{ source }} {{ address.join(' ') }}</"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"copy()"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"<!-- by default, `copied` will be reset in 1.5s -->")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-if"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"!copied"'),s("span",{style:{color:"#24292E"}},">复制当前经纬度</"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-else"),s("span",{style:{color:"#24292E"}},">已复制</"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"id"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"container"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"container"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"container"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { onMounted, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { useClipboard } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@vueuse/core'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { loadBMapGL } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'./map.js'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"container"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"source"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'102.85076697175514, 24.89248383034783'"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"address"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"([]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," { "),s("span",{style:{color:"#005CC5"}},"copy"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"copied"),s("span",{style:{color:"#24292E"}}," } "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useClipboard"),s("span",{style:{color:"#24292E"}},"({ source });")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"centerAndZoom"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"102.85076697175514"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"24.89248383034783"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"18")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"enableScrollWheelZoom"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"addControl"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"CityListControl"),s("span",{style:{color:"#24292E"}},"({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"// 控件的停靠位置（可选，默认左上角）")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        anchor: "),s("span",{style:{color:"#005CC5"}},"BMAP_ANCHOR_TOP_LEFT"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"var"),s("span",{style:{color:"#24292E"}}," geoc "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Geocoder"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"addEventListener"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'click'"),s("span",{style:{color:"#24292E"}},", ("),s("span",{style:{color:"#E36209"}},"e"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      source.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"`${"),s("span",{style:{color:"#24292E"}},"e"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#24292E"}},"latlng"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#24292E"}},"lng"),s("span",{style:{color:"#032F62"}},"},${"),s("span",{style:{color:"#24292E"}},"e"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#24292E"}},"latlng"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#24292E"}},"lat"),s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      _map."),s("span",{style:{color:"#6F42C1"}},"clearOverlays"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      _map."),s("span",{style:{color:"#6F42C1"}},"addOverlay"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Marker"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"(e.latlng.lng, e.latlng.lat))")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      geoc."),s("span",{style:{color:"#6F42C1"}},"getLocation"),s("span",{style:{color:"#24292E"}},"(e.latlng, ("),s("span",{style:{color:"#E36209"}},"res"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"addressArr"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," res.addressComponents;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        address.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          addressArr["),s("span",{style:{color:"#032F62"}},"'province'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          addressArr["),s("span",{style:{color:"#032F62"}},"'city'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          addressArr["),s("span",{style:{color:"#032F62"}},"'district'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          addressArr["),s("span",{style:{color:"#032F62"}},"'street'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          addressArr["),s("span",{style:{color:"#032F62"}},"'streetNumber'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        ]."),s("span",{style:{color:"#6F42C1"}},"filter"),s("span",{style:{color:"#24292E"}},"(("),s("span",{style:{color:"#E36209"}},"item"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," item);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".container"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"width"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"100"),s("span",{style:{color:"#D73A49"}},"%"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"500"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".box"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"padding"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6F42C1"}},".result"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"display"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"inline-block"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"font-size"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"14"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"font-weight"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"bold"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"padding"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"border-radius"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"box-shadow"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"rgba"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"0.2"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"margin-right"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),R=JSON.parse('{"title":"拾取经纬度","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/vue/bMap/4.拾取经纬度.md","filePath":"blogs/vue/bMap/4.拾取经纬度.md"}'),Z={name:"blogs/vue/bMap/4.拾取经纬度.md"},W=Object.assign(Z,{setup(_){return(y,c)=>{const t=d("demo"),i=d("git-talk");return p(),r("div",null,[j,E(t,{customClass:"",sourceCode:`<template>
  <div class="box">
    <div class="result">{{ source }} {{ address.join(' ') }}</div>
    <AButton @click="copy()">
      <!-- by default, \`copied\` will be reset in 1.5s -->
      <span v-if="!copied">复制当前经纬度</span>
      <span v-else>已复制</span>
    </AButton>
  </div>
  <div id="container" class="container" ref="container"></div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  import { useClipboard } from '@vueuse/core';
  import { loadBMapGL } from './map.js';

  const container = ref();

  const source = ref('102.85076697175514, 24.89248383034783');
  const address = ref([]);
  const { copy, copied } = useClipboard({ source });

  onMounted(async () => {
    await initMap(container.value);
  });

  //初始化地图
  async function initMap(dom) {
    const BMapGL: any = await loadBMapGL();
    // 创建地图实例
    const _map: any = new BMapGL.Map(dom);
    _map.centerAndZoom(
      new BMapGL.Point(102.85076697175514, 24.89248383034783),
      18
    );
    _map.enableScrollWheelZoom(true);
    _map.addControl(
      new BMapGL.CityListControl({
        // 控件的停靠位置（可选，默认左上角）
        anchor: BMAP_ANCHOR_TOP_LEFT,
      })
    );
    var geoc = new BMapGL.Geocoder();
    _map.addEventListener('click', (e) => {
      source.value = \`\${e.latlng.lng},\${e.latlng.lat}\`;
      _map.clearOverlays();
      _map.addOverlay(
        new BMapGL.Marker(new BMapGL.Point(e.latlng.lng, e.latlng.lat))
      );
      geoc.getLocation(e.latlng, (res) => {
        const addressArr = res.addressComponents;
        address.value = [
          addressArr['province'],
          addressArr['city'],
          addressArr['district'],
          addressArr['street'],
          addressArr['streetNumber'],
        ].filter((item) => item);
      });
    });
  }
<\/script>

<style lang="less" scoped>
  .container {
    width: 100%;
    height: 500px;
  }
  .box {
    padding: 10px 0;
    .result {
      display: inline-block;
      font-size: 14px;
      font-weight: bold;
      padding: 5px;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      margin-right: 10px;
    }
  }
</style>
`},{highlight:C(()=>[T]),default:C(()=>[E($)]),_:1}),E(i)])}}});export{R as __pageData,W as default};
