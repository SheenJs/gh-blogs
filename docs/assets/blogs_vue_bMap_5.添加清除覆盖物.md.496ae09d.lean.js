import{d as A,h as B,a6 as f,j as _,x as k,l as p,C as i,o as E,c as y,k as s,t as v,H as c,w as F,F as w,D as b,a as l,_ as L}from"./chunks/framework.bec6ef87.js";import{l as h}from"./chunks/map.965815c3.js";const P={class:"box"},G={class:"result"},O={key:0},x={key:1},W=A({__name:"5.添加清除覆盖物.md.demo.2acbe63e",setup(D){const C=B(),a=B("Marker");B();const t=B("102.85076697175514, 24.89248383034783"),{copy:d,copied:g}=f({source:t});_(async()=>{await m(C.value)}),k(a,async u=>{await m(C.value)});async function m(u){const o=await h(),n=new o.Map(u);if(n.centerAndZoom(new o.Point(102.66176448738847,25.095927154191205),18),n.enableScrollWheelZoom(!0),n.addEventListener("click",e=>{t.value=`${e.latlng.lng},${e.latlng.lat}`}),p(a)==="Marker"){n.clearOverlays();const e=new o.Marker(new o.Point(102.66190821626998,25.095869901942454),{enableDragging:!0});e.addEventListener("click",()=>{n.openInfoWindow(new o.InfoWindow("地址：昆明五华区大河埂地铁站",{width:200,height:100,title:"地铁站"}),new o.Point(102.66190821626998,25.095869901942454))}),n.addOverlay(e),n.addOverlay(new o.Marker(new o.Point(102.66232143680443,25.094904597341667),{enableDragging:!0,icon:new o.Icon("https://img1.baidu.com/it/u=2399966577,1808536528&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=492",new o.Size(50,50))}))}else p(a)==="Polyline"?(n.clearOverlays(),n.addOverlay(new o.Polyline([new o.Point(102.65981516443243,25.09663886789298),new o.Point(102.66192618238017,25.095943526553533),new o.Point(102.6613063515785,25.09422560728852)],{strokeColor:"red",strokeWeight:2,strokeOpacity:.5}))):p(a)==="Circle"?(n.clearOverlays(),n.addOverlay(new o.Circle(new o.Point(102.66190821626998,25.095869901942454),100,{strokeColor:"blue",strokeWeight:2,strokeOpacity:.5}))):p(a)==="Polygon"&&(n.clearOverlays(),n.addOverlay(new o.Polygon([new o.Point(102.66078533438288,25.09687610108273),new o.Point(102.66358804757309,25.09598442909589),new o.Point(102.66308499648767,25.094708263260046),new o.Point(102.66003075775475,25.095616305716906)],{strokeColor:"blue",strokeWeight:2,strokeOpacity:.5,backgroundColor:"black"})))}return(u,o)=>{const n=i("AButton"),e=i("a-select-option"),M=i("a-select");return E(),y(w,null,[s("div",P,[s("div",G,v(t.value),1),c(n,{onClick:o[0]||(o[0]=r=>p(d)())},{default:F(()=>[p(g)?(E(),y("span",x,"已复制")):(E(),y("span",O,"复制"))]),_:1})]),s("div",{id:"container",class:"container",ref_key:"container",ref:C},null,512),c(M,{value:a.value,"onUpdate:value":o[1]||(o[1]=r=>a.value=r),style:{"margin-top":"20px"}},{default:F(()=>[(E(),y(w,null,b(["Marker","Polyline","Circle","Polygon","Label","Marker3D"],r=>c(e,{value:r},{default:F(()=>[l(v(r),1)]),_:2},1032,["value"])),64))]),_:1},8,["value"])],64)}}});const I=L(W,[["__scopeId","data-v-3e8b7dd7"]]),$=s("h1",{id:"添加清除覆盖物",tabindex:"-1"},[l("添加清除覆盖物 "),s("a",{class:"header-anchor",href:"#添加清除覆盖物","aria-label":'Permalink to "添加清除覆盖物"'},"​")],-1),S=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"box"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"result"'),s("span",{style:{color:"#E1E4E8"}},">{{ source }}</"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"@click"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"copy()"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"<!-- by default, `copied` will be reset in 1.5s -->")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-if"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"!copied"'),s("span",{style:{color:"#E1E4E8"}},">复制</"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      <"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-else"),s("span",{style:{color:"#E1E4E8"}},">已复制</"),s("span",{style:{color:"#85E89D"}},"span"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#FDAEB7","font-style":"italic"}},"AButton"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"id"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"container"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"container"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"container"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"a-select"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"v-model:value"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"overlay"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"style"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"margin-top: 20px"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    <"),s("span",{style:{color:"#85E89D"}},"a-select-option")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},":value"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#B392F0"}},"v-for"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"item in [')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"        'Marker',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"        'Polyline',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"        'Circle',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"        'Polygon',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"        'Label',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},"        'Marker3D',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#9ECBFF"}},'      ]"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {{ item }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    </"),s("span",{style:{color:"#85E89D"}},"a-select-option"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  </"),s("span",{style:{color:"#85E89D"}},"a-select"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref, unref, watch } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { useClipboard } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'@vueuse/core'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { loadBMapGL } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'./map.js'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"container"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"overlay"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'Marker'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"map"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"source"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'102.85076697175514, 24.89248383034783'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," { "),s("span",{style:{color:"#79B8FF"}},"copy"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"copied"),s("span",{style:{color:"#E1E4E8"}}," } "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useClipboard"),s("span",{style:{color:"#E1E4E8"}},"({ source });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"async"),s("span",{style:{color:"#E1E4E8"}}," () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"await"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"initMap"),s("span",{style:{color:"#E1E4E8"}},"(container.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"watch"),s("span",{style:{color:"#E1E4E8"}},"(overlay, "),s("span",{style:{color:"#F97583"}},"async"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"value"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"await"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"initMap"),s("span",{style:{color:"#E1E4E8"}},"(container.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#6A737D"}},"//初始化地图")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"async"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"initMap"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#FFAB70"}},"dom"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"BMapGL"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"await"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"loadBMapGL"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#6A737D"}},"// 创建地图实例")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"_map"),s("span",{style:{color:"#F97583"}},":"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"any"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Map"),s("span",{style:{color:"#E1E4E8"}},"(dom);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"centerAndZoom"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"102.66176448738847"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25.095927154191205"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#79B8FF"}},"18")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"enableScrollWheelZoom"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    _map."),s("span",{style:{color:"#B392F0"}},"addEventListener"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'click'"),s("span",{style:{color:"#E1E4E8"}},", ("),s("span",{style:{color:"#FFAB70"}},"e"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      source.value "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"`${"),s("span",{style:{color:"#E1E4E8"}},"e"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#E1E4E8"}},"latlng"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#E1E4E8"}},"lng"),s("span",{style:{color:"#9ECBFF"}},"},${"),s("span",{style:{color:"#E1E4E8"}},"e"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#E1E4E8"}},"latlng"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#E1E4E8"}},"lat"),s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#B392F0"}},"unref"),s("span",{style:{color:"#E1E4E8"}},"(overlay) "),s("span",{style:{color:"#F97583"}},"==="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'Marker'"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      _map."),s("span",{style:{color:"#B392F0"}},"clearOverlays"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"marker"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Marker"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"102.66190821626998"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25.095869901942454"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          enableDragging: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      marker."),s("span",{style:{color:"#B392F0"}},"addEventListener"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'click'"),s("span",{style:{color:"#E1E4E8"}},", () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        _map."),s("span",{style:{color:"#B392F0"}},"openInfoWindow"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"InfoWindow"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'地址：昆明五华区大河埂地铁站'"),s("span",{style:{color:"#E1E4E8"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            width: "),s("span",{style:{color:"#79B8FF"}},"200"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            height: "),s("span",{style:{color:"#79B8FF"}},"100"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            title: "),s("span",{style:{color:"#9ECBFF"}},"'地铁站'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          }),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"102.66190821626998"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25.095869901942454"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        ); "),s("span",{style:{color:"#6A737D"}},"// 开启信息窗口")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      _map."),s("span",{style:{color:"#B392F0"}},"addOverlay"),s("span",{style:{color:"#E1E4E8"}},"(marker);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      _map."),s("span",{style:{color:"#B392F0"}},"addOverlay"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Marker"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"102.66232143680443"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25.094904597341667"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            enableDragging: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            icon: "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Icon"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              "),s("span",{style:{color:"#9ECBFF"}},"'https://img1.baidu.com/it/u=2399966577,1808536528&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=492'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Size"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            ),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    } "),s("span",{style:{color:"#F97583"}},"else"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#B392F0"}},"unref"),s("span",{style:{color:"#E1E4E8"}},"(overlay) "),s("span",{style:{color:"#F97583"}},"==="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'Polyline'"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      _map."),s("span",{style:{color:"#B392F0"}},"clearOverlays"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      _map."),s("span",{style:{color:"#B392F0"}},"addOverlay"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Polyline"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"102.65981516443243"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25.09663886789298"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"102.66192618238017"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25.095943526553533"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"102.6613063515785"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25.09422560728852"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            strokeColor: "),s("span",{style:{color:"#9ECBFF"}},"'red'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            strokeWeight: "),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            strokeOpacity: "),s("span",{style:{color:"#79B8FF"}},"0.5"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    } "),s("span",{style:{color:"#F97583"}},"else"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#B392F0"}},"unref"),s("span",{style:{color:"#E1E4E8"}},"(overlay) "),s("span",{style:{color:"#F97583"}},"==="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'Circle'"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      _map."),s("span",{style:{color:"#B392F0"}},"clearOverlays"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      _map."),s("span",{style:{color:"#B392F0"}},"addOverlay"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Circle"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"102.66190821626998"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25.095869901942454"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#79B8FF"}},"100"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            strokeColor: "),s("span",{style:{color:"#9ECBFF"}},"'blue'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            strokeWeight: "),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            strokeOpacity: "),s("span",{style:{color:"#79B8FF"}},"0.5"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    } "),s("span",{style:{color:"#F97583"}},"else"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"if"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#B392F0"}},"unref"),s("span",{style:{color:"#E1E4E8"}},"(overlay) "),s("span",{style:{color:"#F97583"}},"==="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'Polygon'"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      _map."),s("span",{style:{color:"#B392F0"}},"clearOverlays"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      _map."),s("span",{style:{color:"#B392F0"}},"addOverlay"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Polygon"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"102.66078533438288"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25.09687610108273"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"102.66358804757309"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25.09598442909589"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"102.66308499648767"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25.094708263260046"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," BMapGL."),s("span",{style:{color:"#B392F0"}},"Point"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"102.66003075775475"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25.095616305716906"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            strokeColor: "),s("span",{style:{color:"#9ECBFF"}},"'blue'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            strokeWeight: "),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            strokeOpacity: "),s("span",{style:{color:"#79B8FF"}},"0.5"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            backgroundColor: "),s("span",{style:{color:"#9ECBFF"}},"'black'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    }")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"result"'),s("span",{style:{color:"#24292E"}},">{{ source }}</"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"@click"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"copy()"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"<!-- by default, `copied` will be reset in 1.5s -->")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-if"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"!copied"'),s("span",{style:{color:"#24292E"}},">复制</"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      <"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-else"),s("span",{style:{color:"#24292E"}},">已复制</"),s("span",{style:{color:"#22863A"}},"span"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#B31D28","font-style":"italic"}},"AButton"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"id"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"container"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"container"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"container"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"a-select"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"v-model:value"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"overlay"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"style"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"margin-top: 20px"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    <"),s("span",{style:{color:"#22863A"}},"a-select-option")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},":value"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"item"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6F42C1"}},"v-for"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"item in [')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"        'Marker',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"        'Polyline',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"        'Circle',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"        'Polygon',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"        'Label',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},"        'Marker3D',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#032F62"}},'      ]"')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    >")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {{ item }}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    </"),s("span",{style:{color:"#22863A"}},"a-select-option"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  </"),s("span",{style:{color:"#22863A"}},"a-select"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { onMounted, ref, unref, watch } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { useClipboard } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'@vueuse/core'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { loadBMapGL } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'./map.js'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"container"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"overlay"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'Marker'"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"map"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"source"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'102.85076697175514, 24.89248383034783'"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," { "),s("span",{style:{color:"#005CC5"}},"copy"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"copied"),s("span",{style:{color:"#24292E"}}," } "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useClipboard"),s("span",{style:{color:"#24292E"}},"({ source });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"async"),s("span",{style:{color:"#24292E"}}," () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"await"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"initMap"),s("span",{style:{color:"#24292E"}},"(container.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"watch"),s("span",{style:{color:"#24292E"}},"(overlay, "),s("span",{style:{color:"#D73A49"}},"async"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"value"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"await"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"initMap"),s("span",{style:{color:"#24292E"}},"(container.value);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6A737D"}},"//初始化地图")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"async"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"initMap"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#E36209"}},"dom"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"BMapGL"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"await"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"loadBMapGL"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#6A737D"}},"// 创建地图实例")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"_map"),s("span",{style:{color:"#D73A49"}},":"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"any"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Map"),s("span",{style:{color:"#24292E"}},"(dom);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"centerAndZoom"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"102.66176448738847"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25.095927154191205"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#005CC5"}},"18")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"enableScrollWheelZoom"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    _map."),s("span",{style:{color:"#6F42C1"}},"addEventListener"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'click'"),s("span",{style:{color:"#24292E"}},", ("),s("span",{style:{color:"#E36209"}},"e"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      source.value "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"`${"),s("span",{style:{color:"#24292E"}},"e"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#24292E"}},"latlng"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#24292E"}},"lng"),s("span",{style:{color:"#032F62"}},"},${"),s("span",{style:{color:"#24292E"}},"e"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#24292E"}},"latlng"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#24292E"}},"lat"),s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    });")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#6F42C1"}},"unref"),s("span",{style:{color:"#24292E"}},"(overlay) "),s("span",{style:{color:"#D73A49"}},"==="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'Marker'"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      _map."),s("span",{style:{color:"#6F42C1"}},"clearOverlays"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"marker"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Marker"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"102.66190821626998"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25.095869901942454"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          enableDragging: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      );")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      marker."),s("span",{style:{color:"#6F42C1"}},"addEventListener"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'click'"),s("span",{style:{color:"#24292E"}},", () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        _map."),s("span",{style:{color:"#6F42C1"}},"openInfoWindow"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"InfoWindow"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'地址：昆明五华区大河埂地铁站'"),s("span",{style:{color:"#24292E"}},", {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            width: "),s("span",{style:{color:"#005CC5"}},"200"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            height: "),s("span",{style:{color:"#005CC5"}},"100"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            title: "),s("span",{style:{color:"#032F62"}},"'地铁站'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          }),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"102.66190821626998"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25.095869901942454"),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        ); "),s("span",{style:{color:"#6A737D"}},"// 开启信息窗口")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      _map."),s("span",{style:{color:"#6F42C1"}},"addOverlay"),s("span",{style:{color:"#24292E"}},"(marker);")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      _map."),s("span",{style:{color:"#6F42C1"}},"addOverlay"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Marker"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"102.66232143680443"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25.094904597341667"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            enableDragging: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            icon: "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Icon"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              "),s("span",{style:{color:"#032F62"}},"'https://img1.baidu.com/it/u=2399966577,1808536528&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=492'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Size"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            ),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    } "),s("span",{style:{color:"#D73A49"}},"else"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#6F42C1"}},"unref"),s("span",{style:{color:"#24292E"}},"(overlay) "),s("span",{style:{color:"#D73A49"}},"==="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'Polyline'"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      _map."),s("span",{style:{color:"#6F42C1"}},"clearOverlays"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      _map."),s("span",{style:{color:"#6F42C1"}},"addOverlay"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Polyline"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"102.65981516443243"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25.09663886789298"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"102.66192618238017"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25.095943526553533"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"102.6613063515785"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25.09422560728852"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            strokeColor: "),s("span",{style:{color:"#032F62"}},"'red'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            strokeWeight: "),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            strokeOpacity: "),s("span",{style:{color:"#005CC5"}},"0.5"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    } "),s("span",{style:{color:"#D73A49"}},"else"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#6F42C1"}},"unref"),s("span",{style:{color:"#24292E"}},"(overlay) "),s("span",{style:{color:"#D73A49"}},"==="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'Circle'"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      _map."),s("span",{style:{color:"#6F42C1"}},"clearOverlays"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      _map."),s("span",{style:{color:"#6F42C1"}},"addOverlay"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Circle"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"102.66190821626998"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25.095869901942454"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#005CC5"}},"100"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            strokeColor: "),s("span",{style:{color:"#032F62"}},"'blue'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            strokeWeight: "),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            strokeOpacity: "),s("span",{style:{color:"#005CC5"}},"0.5"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    } "),s("span",{style:{color:"#D73A49"}},"else"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"if"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#6F42C1"}},"unref"),s("span",{style:{color:"#24292E"}},"(overlay) "),s("span",{style:{color:"#D73A49"}},"==="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'Polygon'"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      _map."),s("span",{style:{color:"#6F42C1"}},"clearOverlays"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      _map."),s("span",{style:{color:"#6F42C1"}},"addOverlay"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Polygon"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"102.66078533438288"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25.09687610108273"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"102.66358804757309"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25.09598442909589"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"102.66308499648767"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25.094708263260046"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," BMapGL."),s("span",{style:{color:"#6F42C1"}},"Point"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"102.66003075775475"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25.095616305716906"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            strokeColor: "),s("span",{style:{color:"#032F62"}},"'blue'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            strokeWeight: "),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            strokeOpacity: "),s("span",{style:{color:"#005CC5"}},"0.5"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            backgroundColor: "),s("span",{style:{color:"#032F62"}},"'black'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        )")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      );")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    }")]),l(`
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
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),J=JSON.parse('{"title":"添加清除覆盖物","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/vue/bMap/5.添加清除覆盖物.md","filePath":"blogs/vue/bMap/5.添加清除覆盖物.md"}'),Z={name:"blogs/vue/bMap/5.添加清除覆盖物.md"},N=Object.assign(Z,{setup(D){return(C,a)=>{const t=i("demo"),d=i("git-talk");return E(),y("div",null,[$,c(t,{customClass:"",sourceCode:`<template>
  <div class="box">
    <div class="result">{{ source }}</div>
    <AButton @click="copy()">
      <!-- by default, \`copied\` will be reset in 1.5s -->
      <span v-if="!copied">复制</span>
      <span v-else>已复制</span>
    </AButton>
  </div>
  <div id="container" class="container" ref="container"></div>
  <a-select v-model:value="overlay" style="margin-top: 20px">
    <a-select-option
      :value="item"
      v-for="item in [
        'Marker',
        'Polyline',
        'Circle',
        'Polygon',
        'Label',
        'Marker3D',
      ]"
    >
      {{ item }}
    </a-select-option>
  </a-select>
</template>

<script setup lang="ts">
  import { onMounted, ref, unref, watch } from 'vue';
  import { useClipboard } from '@vueuse/core';
  import { loadBMapGL } from './map.js';

  const container = ref();
  const overlay = ref('Marker');
  const map = ref();

  const source = ref('102.85076697175514, 24.89248383034783');
  const { copy, copied } = useClipboard({ source });

  onMounted(async () => {
    await initMap(container.value);
  });

  watch(overlay, async (value) => {
    await initMap(container.value);
  });

  //初始化地图
  async function initMap(dom) {
    const BMapGL: any = await loadBMapGL();
    // 创建地图实例
    const _map: any = new BMapGL.Map(dom);
    _map.centerAndZoom(
      new BMapGL.Point(102.66176448738847, 25.095927154191205),
      18
    );
    _map.enableScrollWheelZoom(true);
    _map.addEventListener('click', (e) => {
      source.value = \`\${e.latlng.lng},\${e.latlng.lat}\`;
    });

    if (unref(overlay) === 'Marker') {
      _map.clearOverlays();

      const marker = new BMapGL.Marker(
        new BMapGL.Point(102.66190821626998, 25.095869901942454),
        {
          enableDragging: true,
        }
      );

      marker.addEventListener('click', () => {
        _map.openInfoWindow(
          new BMapGL.InfoWindow('地址：昆明五华区大河埂地铁站', {
            width: 200,
            height: 100,
            title: '地铁站',
          }),
          new BMapGL.Point(102.66190821626998, 25.095869901942454)
        ); // 开启信息窗口
      });
      _map.addOverlay(marker);

      _map.addOverlay(
        new BMapGL.Marker(
          new BMapGL.Point(102.66232143680443, 25.094904597341667),
          {
            enableDragging: true,
            icon: new BMapGL.Icon(
              'https://img1.baidu.com/it/u=2399966577,1808536528&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=492',
              new BMapGL.Size(50, 50)
            ),
          }
        )
      );
    } else if (unref(overlay) === 'Polyline') {
      _map.clearOverlays();
      _map.addOverlay(
        new BMapGL.Polyline(
          [
            new BMapGL.Point(102.65981516443243, 25.09663886789298),
            new BMapGL.Point(102.66192618238017, 25.095943526553533),
            new BMapGL.Point(102.6613063515785, 25.09422560728852),
          ],
          {
            strokeColor: 'red',
            strokeWeight: 2,
            strokeOpacity: 0.5,
          }
        )
      );
    } else if (unref(overlay) === 'Circle') {
      _map.clearOverlays();
      _map.addOverlay(
        new BMapGL.Circle(
          new BMapGL.Point(102.66190821626998, 25.095869901942454),
          100,
          {
            strokeColor: 'blue',
            strokeWeight: 2,
            strokeOpacity: 0.5,
          }
        )
      );
    } else if (unref(overlay) === 'Polygon') {
      _map.clearOverlays();
      _map.addOverlay(
        new BMapGL.Polygon(
          [
            new BMapGL.Point(102.66078533438288, 25.09687610108273),
            new BMapGL.Point(102.66358804757309, 25.09598442909589),
            new BMapGL.Point(102.66308499648767, 25.094708263260046),
            new BMapGL.Point(102.66003075775475, 25.095616305716906),
          ],
          {
            strokeColor: 'blue',
            strokeWeight: 2,
            strokeOpacity: 0.5,
            backgroundColor: 'black',
          }
        )
      );
    }
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
`},{highlight:F(()=>[S]),default:F(()=>[c(I)]),_:1}),c(d)])}}});export{J as __pageData,N as default};
