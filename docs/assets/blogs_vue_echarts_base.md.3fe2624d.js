import{u as F,L as u}from"./chunks/useECharts.547d55fb.js";import{d as C,h as r,j as h,o as E,c as y,_ as d,C as B,H as a,w as e,k as s,a as l}from"./chunks/framework.7096fd12.js";import{m as p}from"./chunks/mock.93bc3284.js";import"./chunks/commonjsHelpers.725317a4.js";const v=C({__name:"base.md.demo.d5ee7014",setup(i){const n=r();return r("dark"),h(()=>{F(n.value,{xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},toolbox:{feature:{restore:{},dataZoom:{yAxisIndex:!1},saveAsImage:{}}},series:{name:"销量",type:"bar",data:[5,20,36,10,10,20]}})}),(t,o)=>(E(),y("div",{ref_key:"helloChartRef",ref:n,class:"chart"},null,512))}});const _=d(v,[["__scopeId","data-v-dff95d09"]]),w=C({__name:"base.md.demo.d5ee7012",setup(i){const n=r();return h(()=>{F(n.value,{xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},toolbox:{feature:{restore:{},dataZoom:{yAxisIndex:!1},saveAsImage:{}}},series:{name:"销量",type:"bar",data:[5,20,36,10,10,20]}})}),(t,o)=>(E(),y("div",{ref_key:"pluginChartRef",ref:n,class:"chart"},null,512))}});const k=d(w,[["__scopeId","data-v-61d2970e"]]),R=C({__name:"base.md.demo.d5ee7010",setup(i){const n=r();return h(()=>{F(n.value,{title:{text:"echarts标题",link:"https://www.baidu.com",target:"self",show:!0,subtext:"副标题",sublink:"https://www.baidu.com",itemGap:40,textStyle:{color:"red",backgroundColor:"#00ff00"}},grid:{top:100,right:200,bottom:100,left:"10%"},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:{name:"销量",type:"bar",data:[5,20,36,10,10,20]}})}),(t,o)=>(E(),y("div",{ref_key:"titlePositionRef",ref:n,class:"chart"},null,512))}});const S=d(R,[["__scopeId","data-v-38a36226"]]),A="/gh-blogs/echarts/weather/clear.png",g="/gh-blogs/echarts/weather/cloudy.png",x="/gh-blogs/echarts/weather/rainy.png",D="/gh-blogs/echarts/weather/thundershower.png",T=C({__name:"base.md.demo.d5ee700e",setup(i){const n=[A,g,x,D],t=r();return h(()=>{F(t.value,{grid:{left:10,right:10,bottom:50,top:50},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun1"],position:"bottom",name:"x轴基本配置练习",nameLocation:"center",nameTextStyle:{color:"red"},nameGap:-5,nameRotate:45},{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun66"],position:"bottom",offset:-100,name:"轴线配置练习",nameLocation:"center",axisLine:{symbol:"arrow",lineStyle:{color:"pink"}},axisTick:{lineStyle:{color:"blue"}}},{type:"category",data:Array.from({length:15},()=>["小雨","阴","多云","小雨","晴","雨夹雪"][p.Random.integer(0,5)]),name:"标签相关设置",nameLocation:"center",position:"top",nameGap:-20,offset:-200,axisLabel:{interval:0,formatter:function(o,c){return"{"+c+"| }"},rich:{...Array.from({length:15},()=>({backgroundColor:{image:n[p.Random.integer(0,3)]},height:16})),b:{fontSize:11,lineHeight:30,height:20}}}},{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun3"],position:"bottom",offset:-300},{type:"category",data:Array.from({length:15},()=>p.mock("@ctitle")),position:"bottom",offset:-400,axisLabel:{rotate:80}}],yAxis:{type:"value",show:!1},series:[]})}),(o,c)=>(E(),y("div",{ref_key:"xAxisChartRef",ref:t,class:"chart"},null,512))}});const L=d(T,[["__scopeId","data-v-0b1b43f8"]]),M=C({__name:"base.md.demo.d5ee700c",setup(i){const n=r();return h(()=>{F(n.value,{grid:{top:100},title:{text:"业务受理趋势"},tooltip:{trigger:"axis"},legend:{data:["收件总数","办结总数","办结率"]},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",data:["01","02","03","04","05","06","07","08","09","10","11","12"]}],yAxis:[{type:"value",name:"你好"},{type:"value",name:"增长率(%)",nameTextStyle:{color:"#999999"},splitLine:{show:!1},axisLine:{show:!1},axisTick:{show:!1},axisLabel:{margin:2,interval:10,color:"#999999"}}],series:[{name:"办结总数",type:"bar",data:[2,5,9,26,28,70,175,182,48,18,6,2],markPoint:{data:[{name:"Max",value:182,xAxis:7,yAxis:183}]},markLine:{},label:{show:!1}},{name:"办结率",type:"line",color:["red","pink"],smooth:!0,yAxisIndex:1,itemStyle:{hadowBlur:2},data:[31,62,89,40,20,30,40,25,26,25,25,25]}]})}),(t,o)=>(E(),y("div",{ref_key:"xAxisChartRef",ref:n,class:"chart"},null,512))}});const z=d(M,[["__scopeId","data-v-05386908"]]),G=C({__name:"base.md.demo.d5ee700a",setup(i){const n=r();return h(()=>{F(n.value,{tooltip:{},yAxis:{type:"value",scale:!0},xAxis:{type:"category",data:Array.from({length:12},(t,o)=>`${o+1}月`)},series:[{type:"line",name:"小白语文月考成绩",data:Array.from({length:12},()=>p.Random.integer(80,150))},{type:"bar",name:"小黄语文月考成绩",data:Array.from({length:12},()=>p.Random.integer(80,150)),barWidth:12,itemStyle:{borderRadius:[10,10,10,10]},color:new u(0,0,1,1,[{offset:0,color:"pink"},{offset:1,color:"transparent"}])},{type:"pie",name:"小蓝语文月考成绩",data:Array.from({length:12},()=>({value:p.Random.integer(80,150)})),itemStyle:{normal:{color:function(){return new u(1,0,0,0,[{offset:0,color:p.mock("@color")},{offset:1,color:p.mock("@color")}])}}}}]})}),(t,o)=>(E(),y("div",{ref_key:"xAxisChartRef",ref:n,class:"chart"},null,512))}});const I=d(G,[["__scopeId","data-v-2e36731e"]]),$=C({__name:"base.md.demo.d5ee7008",setup(i){const n=r();return h(()=>{F(n.value,{tooltip:{},xAxis:{type:"value"},yAxis:{type:"category",data:Array.from({length:7},(t,o)=>`周${o}`)},series:{type:"bar",data:Array.from({length:7},(t,o)=>p.Random.integer(5,10)),itemStyle:{color:"red"}}})}),(t,o)=>(E(),y("div",{ref_key:"xAxisChartRef",ref:n,class:"chart"},null,512))}});const W=d($,[["__scopeId","data-v-35c26d43"]]),P=C({__name:"base.md.demo.d5ee7006",setup(i){const n=[A,g,x,D],t=r();return h(()=>{F(t.value,{tooltip:{trigger:"none",axisPointer:{type:"cross"}},grid:{top:80,left:30,bottom:50,right:30},xAxis:[{type:"category",boundaryGap:!1,position:"top",offset:50,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,formatter:["{a|{value}}"].join(`
`),rich:{a:{fontSize:13}}},nameTextStyle:{},data:Array.from({length:15},(o,c)=>{const m=new Date().getDate(),f=new Date(new Date().setDate(m+c));return`${f.getMonth()+1}/${f.getDate()}`})},{type:"category",boundaryGap:!1,position:"top",offset:32,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,formatter:["{a|{value}}"].join(`
`),rich:{a:{fontSize:12}}},nameTextStyle:{fontWeight:"bold",fontSize:19},data:Array.from({length:15},(o,c)=>{const m=new Date().getDate(),f=new Date(new Date().setDate(m+c));return`周${["日","一","二","三","四","五","六"][f.getDay()]}`})},{type:"category",boundaryGap:!1,position:"top",offset:32,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,formatter:["{a|{value}}"].join(`
`),rich:{a:{fontSize:12}}},nameTextStyle:{fontWeight:"bold",fontSize:19},data:Array.from({length:15},(o,c)=>{const m=new Date().getDate(),f=new Date(new Date().setDate(m+c));return`周${["日","一","二","三","四","五","六"][f.getDay()]}`})},{type:"category",boundaryGap:!1,position:"top",offset:-24,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,formatter:function(o,c){return"{"+c+`| }
{b|`+o+"}"},rich:{...Array.from({length:15},()=>({backgroundColor:{image:n[p.Random.integer(0,3)]},height:16})),b:{fontSize:11,lineHeight:30,height:20}}},nameTextStyle:{fontWeight:"bold",fontSize:19},data:Array.from({length:15},()=>["小雨","阴","多云","小雨","晴","雨夹雪"][p.Random.integer(0,5)])},{type:"category",boundaryGap:!1,position:"bottom",offset:-5,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{interval:0,formatter:function(o,c){return"{"+c+`| }
{b|`+o+"}"},rich:{...Array.from({length:15},()=>({backgroundColor:{image:n[p.Random.integer(0,3)]},height:16})),b:{fontSize:11,lineHeight:30,height:20}}},nameTextStyle:{fontWeight:"bold",fontSize:19},data:Array.from({length:15},()=>["小雨","阴","多云","小雨","晴","雨夹雪"][p.Random.integer(0,5)])}],yAxis:[{type:"value",boundaryGap:!0,show:!1,scale:!0}],series:[{name:"最高气温",type:"line",emphasis:{focus:"series"},lineStyle:{color:"#FF8A15"},itemStyle:{color:"#FF8A15"},data:Array.from({length:24},()=>`${p.Random.integer(18,29)}`)},{name:"最低气温",type:"line",emphasis:{focus:"series"},lineStyle:{color:"#0091FF"},itemStyle:{color:"#0091FF"},data:Array.from({length:24},()=>p.Random.float(9,17))}]})}),(o,c)=>(E(),y("div",{ref_key:"xAxisChartRef",ref:t,class:"chart"},null,512))}});const j=d(P,[["__scopeId","data-v-fd2de40f"]]),H=C({__name:"base.md.demo.d5ee7004",setup(i){const n=r();return h(()=>{F(n.value,{geo:{map:"china",roam:!0,zoom:1.2,layoutCenter:["50%","50%"],layoutSize:"100%",label:{show:!0,color:"#fff"},itemStyle:{areaColor:"#12235c",borderColor:"#2ab8ff",borderWidth:.5,shadowColor:"rgba(0,54,255, 0.4)",shadowBlur:100},emphasis:{itemStyle:{areaColor:"#02102b"},label:{color:"#fff"}}},series:[{type:"effectScatter",coordinateSystem:"geo",showEffectOn:"render",zlevel:1,rippleEffect:{number:3,period:5,scale:17,brushType:"fill"},symbolSize:2}]})}),(t,o)=>(E(),y("div",{ref_key:"xAxisChartRef",ref:n,class:"chart"},null,512))}});const O=d(H,[["__scopeId","data-v-2fe49b99"]]),Z=s("h1",{id:"echarts",tabindex:"-1"},[l("echarts "),s("a",{class:"header-anchor",href:"#echarts","aria-label":'Permalink to "echarts"'},"​")],-1),V=s("h2",{id:"基本使用",tabindex:"-1"},[l("基本使用 "),s("a",{class:"header-anchor",href:"#基本使用","aria-label":'Permalink to "基本使用"'},"​")],-1),N=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"helloChartRef"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"chart"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { useECharts } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/utils/useECharts'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"helloChartRef"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"theme"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'dark'"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    chart "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useECharts"),s("span",{style:{color:"#E1E4E8"}},"(helloChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      xAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"// x轴")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: ["),s("span",{style:{color:"#9ECBFF"}},"'衬衫'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'羊毛衫'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'雪纺衫'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'裤子'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'高跟鞋'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'袜子'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      yAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"// y轴")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      toolbox: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"// 工具箱 官方文档：http://echarts.apache.org/zh/option.html#toolbox")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        feature: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#6A737D"}},"// 按钮的位置和配置参数的排序有关")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          restore: {}, "),s("span",{style:{color:"#6A737D"}},"// 刷新按钮")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          dataZoom: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#6A737D"}},"// 缩放按钮")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            yAxisIndex: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 不选取y轴的坐标（就是全选y轴）")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          saveAsImage: {}, "),s("span",{style:{color:"#6A737D"}},"// 保存为图片的按钮")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      series: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"// 图表类型")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},"'销量'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'bar'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: ["),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"36"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#B392F0"}},".chart"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"300"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"helloChartRef"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"chart"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { onMounted, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { useECharts } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/utils/useECharts'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  ")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"helloChartRef"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"theme"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'dark'"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    chart "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useECharts"),s("span",{style:{color:"#24292E"}},"(helloChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      xAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"// x轴")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: ["),s("span",{style:{color:"#032F62"}},"'衬衫'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'羊毛衫'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'雪纺衫'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'裤子'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'高跟鞋'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'袜子'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      yAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"// y轴")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      toolbox: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"// 工具箱 官方文档：http://echarts.apache.org/zh/option.html#toolbox")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        feature: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#6A737D"}},"// 按钮的位置和配置参数的排序有关")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          restore: {}, "),s("span",{style:{color:"#6A737D"}},"// 刷新按钮")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          dataZoom: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#6A737D"}},"// 缩放按钮")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            yAxisIndex: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"// 不选取y轴的坐标（就是全选y轴）")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          saveAsImage: {}, "),s("span",{style:{color:"#6A737D"}},"// 保存为图片的按钮")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      series: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"// 图表类型")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},"'销量'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'bar'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: ["),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"36"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  });")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#6F42C1"}},".chart"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"300"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),J=s("h2",{id:"使用插件",tabindex:"-1"},[l("使用插件 "),s("a",{class:"header-anchor",href:"#使用插件","aria-label":'Permalink to "使用插件"'},"​")],-1),q=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"pluginChartRef"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"chart"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { useECharts } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/utils/useECharts'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"pluginChartRef"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  chart "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useECharts"),s("span",{style:{color:"#E1E4E8"}},"(pluginChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    xAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// x轴")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      data: ["),s("span",{style:{color:"#9ECBFF"}},"'衬衫'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'羊毛衫'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'雪纺衫'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'裤子'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'高跟鞋'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'袜子'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    yAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// y轴")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    toolbox: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// 工具箱 官方文档：http://echarts.apache.org/zh/option.html#toolbox")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      feature: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"// 按钮的位置和配置参数的排序有关")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        restore: {}, "),s("span",{style:{color:"#6A737D"}},"// 刷新按钮")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        dataZoom: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#6A737D"}},"// 缩放按钮")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          yAxisIndex: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 不选取y轴的坐标（就是全选y轴）")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        saveAsImage: {}, "),s("span",{style:{color:"#6A737D"}},"// 保存为图片的按钮")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    series: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// 图表类型")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      name: "),s("span",{style:{color:"#9ECBFF"}},"'销量'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      type: "),s("span",{style:{color:"#9ECBFF"}},"'bar'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      data: ["),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"36"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},".chart"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"300"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"pluginChartRef"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"chart"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { onMounted, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { useECharts } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/utils/useECharts'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"pluginChartRef"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  chart "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useECharts"),s("span",{style:{color:"#24292E"}},"(pluginChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    xAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// x轴")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      data: ["),s("span",{style:{color:"#032F62"}},"'衬衫'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'羊毛衫'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'雪纺衫'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'裤子'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'高跟鞋'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'袜子'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    yAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// y轴")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    toolbox: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// 工具箱 官方文档：http://echarts.apache.org/zh/option.html#toolbox")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      feature: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"// 按钮的位置和配置参数的排序有关")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        restore: {}, "),s("span",{style:{color:"#6A737D"}},"// 刷新按钮")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        dataZoom: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#6A737D"}},"// 缩放按钮")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          yAxisIndex: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"// 不选取y轴的坐标（就是全选y轴）")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        saveAsImage: {}, "),s("span",{style:{color:"#6A737D"}},"// 保存为图片的按钮")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    series: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// 图表类型")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      name: "),s("span",{style:{color:"#032F62"}},"'销量'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      type: "),s("span",{style:{color:"#032F62"}},"'bar'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      data: ["),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"36"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},".chart"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"300"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),K=s("h2",{id:"标题-定位",tabindex:"-1"},[l("标题&定位 "),s("a",{class:"header-anchor",href:"#标题-定位","aria-label":'Permalink to "标题&定位"'},"​")],-1),Q=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"titlePositionRef"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"chart"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { useECharts } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/utils/useECharts'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"titlePositionRef"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  chart "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useECharts"),s("span",{style:{color:"#E1E4E8"}},"(titlePositionRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    title: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      text: "),s("span",{style:{color:"#9ECBFF"}},"'echarts标题'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"//标题文字")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      link: "),s("span",{style:{color:"#9ECBFF"}},"'https://www.baidu.com'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"//标题链接")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      target: "),s("span",{style:{color:"#9ECBFF"}},"'self'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 链接跳转方式,默认blank(打开新tab页)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      show: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"//标题是否显示")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      subtext: "),s("span",{style:{color:"#9ECBFF"}},"'副标题'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      sublink: "),s("span",{style:{color:"#9ECBFF"}},"'https://www.baidu.com'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 副标题链接")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// subtarget")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      itemGap: "),s("span",{style:{color:"#79B8FF"}},"40"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"//正副标题的间距")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      textStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"// 标题字体样式")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        color: "),s("span",{style:{color:"#9ECBFF"}},"'red'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        backgroundColor: "),s("span",{style:{color:"#9ECBFF"}},"'#00ff00'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    grid: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// 定位的代码")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      top: "),s("span",{style:{color:"#79B8FF"}},"100"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      right: "),s("span",{style:{color:"#79B8FF"}},"200"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      bottom: "),s("span",{style:{color:"#79B8FF"}},"100"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      left: "),s("span",{style:{color:"#9ECBFF"}},"'10%'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    xAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// x轴")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      data: ["),s("span",{style:{color:"#9ECBFF"}},"'衬衫'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'羊毛衫'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'雪纺衫'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'裤子'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'高跟鞋'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'袜子'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    yAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// y轴")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    series: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// 图表类型")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      name: "),s("span",{style:{color:"#9ECBFF"}},"'销量'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      type: "),s("span",{style:{color:"#9ECBFF"}},"'bar'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      data: ["),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"36"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},".chart"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"300"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"titlePositionRef"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"chart"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { onMounted, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { useECharts } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/utils/useECharts'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"titlePositionRef"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  chart "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useECharts"),s("span",{style:{color:"#24292E"}},"(titlePositionRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    title: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      text: "),s("span",{style:{color:"#032F62"}},"'echarts标题'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"//标题文字")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      link: "),s("span",{style:{color:"#032F62"}},"'https://www.baidu.com'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"//标题链接")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      target: "),s("span",{style:{color:"#032F62"}},"'self'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"// 链接跳转方式,默认blank(打开新tab页)")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      show: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"//标题是否显示")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      subtext: "),s("span",{style:{color:"#032F62"}},"'副标题'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      sublink: "),s("span",{style:{color:"#032F62"}},"'https://www.baidu.com'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"// 副标题链接")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// subtarget")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      itemGap: "),s("span",{style:{color:"#005CC5"}},"40"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"//正副标题的间距")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      textStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"// 标题字体样式")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        color: "),s("span",{style:{color:"#032F62"}},"'red'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        backgroundColor: "),s("span",{style:{color:"#032F62"}},"'#00ff00'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    grid: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// 定位的代码")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      top: "),s("span",{style:{color:"#005CC5"}},"100"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      right: "),s("span",{style:{color:"#005CC5"}},"200"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      bottom: "),s("span",{style:{color:"#005CC5"}},"100"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      left: "),s("span",{style:{color:"#032F62"}},"'10%'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    xAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// x轴")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      data: ["),s("span",{style:{color:"#032F62"}},"'衬衫'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'羊毛衫'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'雪纺衫'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'裤子'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'高跟鞋'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'袜子'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    yAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// y轴")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    series: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// 图表类型")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      name: "),s("span",{style:{color:"#032F62"}},"'销量'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      type: "),s("span",{style:{color:"#032F62"}},"'bar'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      data: ["),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"36"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},".chart"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"300"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),U=s("h2",{id:"横坐标",tabindex:"-1"},[l("横坐标 "),s("a",{class:"header-anchor",href:"#横坐标","aria-label":'Permalink to "横坐标"'},"​")],-1),X=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"xAxisChartRef"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"chart"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { useECharts } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/utils/useECharts'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," mock "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'mockjs'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," clear "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/echarts/weather/clear.png'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," cloudy "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/echarts/weather/cloudy.png'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," rainy "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/echarts/weather/rainy.png'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," thundershower "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/echarts/weather/thundershower.png'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"weather"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," [clear, cloudy, rainy, thundershower];")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"xAxisChartRef"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  chart "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useECharts"),s("span",{style:{color:"#E1E4E8"}},"(xAxisChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    grid: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      left: "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      right: "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      bottom: "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      top: "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    xAxis: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'category'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"//轴线类型")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: ["),s("span",{style:{color:"#9ECBFF"}},"'Mon'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Tue'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Wed'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Thu'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Fri'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Sat'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Sun1'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        position: "),s("span",{style:{color:"#9ECBFF"}},"'bottom'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"//data相等轴线的位置,bottom在轴线下方")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},"'x轴基本配置练习'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        nameLocation: "),s("span",{style:{color:"#9ECBFF"}},"'center'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        nameTextStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          color: "),s("span",{style:{color:"#9ECBFF"}},"'red'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        nameGap: "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"//坐标轴名称与轴线之间的距离")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        nameRotate: "),s("span",{style:{color:"#79B8FF"}},"45"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'category'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: ["),s("span",{style:{color:"#9ECBFF"}},"'Mon'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Tue'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Wed'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Thu'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Fri'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Sat'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Sun66'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        position: "),s("span",{style:{color:"#9ECBFF"}},"'bottom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        offset: "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#79B8FF"}},"100"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},"'轴线配置练习'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        nameLocation: "),s("span",{style:{color:"#9ECBFF"}},"'center'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisLine: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#6A737D"}},"// show: false,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          symbol: "),s("span",{style:{color:"#9ECBFF"}},"'arrow'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"//坐标轴箭头")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          lineStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#6A737D"}},"//轴线样式")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            color: "),s("span",{style:{color:"#9ECBFF"}},"'pink'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisTick: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#6A737D"}},"// 刻度相关")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          lineStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            color: "),s("span",{style:{color:"#9ECBFF"}},"'blue'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'category'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          { length: "),s("span",{style:{color:"#79B8FF"}},"15"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," ["),s("span",{style:{color:"#9ECBFF"}},"'小雨'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'阴'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'多云'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'小雨'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'晴'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'雨夹雪'"),s("span",{style:{color:"#E1E4E8"}},"][mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}},")]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        ),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},"'标签相关设置'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        nameLocation: "),s("span",{style:{color:"#9ECBFF"}},"'center'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        position: "),s("span",{style:{color:"#9ECBFF"}},"'top'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        nameGap: "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        offset: "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#79B8FF"}},"200"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          interval: "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#B392F0"}},"formatter"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"value"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"index"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'{'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," index "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'| }'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          rich: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#F97583"}},"..."),s("span",{style:{color:"#E1E4E8"}},"Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"15"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              backgroundColor: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                image: weather[mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"3"),s("span",{style:{color:"#E1E4E8"}},")],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              height: "),s("span",{style:{color:"#79B8FF"}},"16"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            })),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            b: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              fontSize: "),s("span",{style:{color:"#79B8FF"}},"11"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              lineHeight: "),s("span",{style:{color:"#79B8FF"}},"30"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              height: "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'category'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: ["),s("span",{style:{color:"#9ECBFF"}},"'Mon'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Tue'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Wed'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Thu'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Fri'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Sat'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'Sun3'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        position: "),s("span",{style:{color:"#9ECBFF"}},"'bottom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        offset: "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#79B8FF"}},"300"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'category'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"15"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," mock."),s("span",{style:{color:"#B392F0"}},"mock"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'@ctitle'"),s("span",{style:{color:"#E1E4E8"}},")),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        position: "),s("span",{style:{color:"#9ECBFF"}},"'bottom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        offset: "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#79B8FF"}},"400"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          rotate: "),s("span",{style:{color:"#79B8FF"}},"80"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    yAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      type: "),s("span",{style:{color:"#9ECBFF"}},"'value'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    series: [],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},".chart"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"500"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"background"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"linear-gradient"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"90"),s("span",{style:{color:"#F97583"}},"deg"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#dde4ff"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#fff"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#fff"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#dde4ff"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"xAxisChartRef"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"chart"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { onMounted, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { useECharts } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/utils/useECharts'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," mock "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'mockjs'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," clear "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/echarts/weather/clear.png'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," cloudy "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/echarts/weather/cloudy.png'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," rainy "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/echarts/weather/rainy.png'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," thundershower "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/echarts/weather/thundershower.png'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"weather"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," [clear, cloudy, rainy, thundershower];")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"xAxisChartRef"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  chart "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useECharts"),s("span",{style:{color:"#24292E"}},"(xAxisChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    grid: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      left: "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      right: "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      bottom: "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      top: "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    xAxis: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'category'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"//轴线类型")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: ["),s("span",{style:{color:"#032F62"}},"'Mon'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Tue'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Wed'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Thu'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Fri'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Sat'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Sun1'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        position: "),s("span",{style:{color:"#032F62"}},"'bottom'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"//data相等轴线的位置,bottom在轴线下方")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},"'x轴基本配置练习'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        nameLocation: "),s("span",{style:{color:"#032F62"}},"'center'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        nameTextStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          color: "),s("span",{style:{color:"#032F62"}},"'red'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        nameGap: "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"//坐标轴名称与轴线之间的距离")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        nameRotate: "),s("span",{style:{color:"#005CC5"}},"45"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'category'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: ["),s("span",{style:{color:"#032F62"}},"'Mon'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Tue'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Wed'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Thu'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Fri'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Sat'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Sun66'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        position: "),s("span",{style:{color:"#032F62"}},"'bottom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        offset: "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#005CC5"}},"100"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},"'轴线配置练习'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        nameLocation: "),s("span",{style:{color:"#032F62"}},"'center'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisLine: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#6A737D"}},"// show: false,")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          symbol: "),s("span",{style:{color:"#032F62"}},"'arrow'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"//坐标轴箭头")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          lineStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#6A737D"}},"//轴线样式")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            color: "),s("span",{style:{color:"#032F62"}},"'pink'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisTick: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#6A737D"}},"// 刻度相关")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          lineStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            color: "),s("span",{style:{color:"#032F62"}},"'blue'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'category'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          { length: "),s("span",{style:{color:"#005CC5"}},"15"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," ["),s("span",{style:{color:"#032F62"}},"'小雨'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'阴'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'多云'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'小雨'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'晴'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'雨夹雪'"),s("span",{style:{color:"#24292E"}},"][mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}},")]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        ),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},"'标签相关设置'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        nameLocation: "),s("span",{style:{color:"#032F62"}},"'center'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        position: "),s("span",{style:{color:"#032F62"}},"'top'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        nameGap: "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        offset: "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#005CC5"}},"200"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          interval: "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#6F42C1"}},"formatter"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"value"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"index"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'{'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," index "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'| }'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          rich: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#D73A49"}},"..."),s("span",{style:{color:"#24292E"}},"Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"15"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              backgroundColor: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                image: weather[mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"3"),s("span",{style:{color:"#24292E"}},")],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              height: "),s("span",{style:{color:"#005CC5"}},"16"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            })),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            b: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              fontSize: "),s("span",{style:{color:"#005CC5"}},"11"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              lineHeight: "),s("span",{style:{color:"#005CC5"}},"30"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              height: "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'category'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: ["),s("span",{style:{color:"#032F62"}},"'Mon'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Tue'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Wed'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Thu'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Fri'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Sat'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'Sun3'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        position: "),s("span",{style:{color:"#032F62"}},"'bottom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        offset: "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#005CC5"}},"300"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'category'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"15"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," mock."),s("span",{style:{color:"#6F42C1"}},"mock"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'@ctitle'"),s("span",{style:{color:"#24292E"}},")),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        position: "),s("span",{style:{color:"#032F62"}},"'bottom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        offset: "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#005CC5"}},"400"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          rotate: "),s("span",{style:{color:"#005CC5"}},"80"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    yAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      type: "),s("span",{style:{color:"#032F62"}},"'value'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    series: [],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},".chart"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"500"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"background"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"linear-gradient"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"90"),s("span",{style:{color:"#D73A49"}},"deg"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#dde4ff"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#fff"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#fff"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#dde4ff"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),Y=s("h2",{id:"纵坐标",tabindex:"-1"},[l("纵坐标 "),s("a",{class:"header-anchor",href:"#纵坐标","aria-label":'Permalink to "纵坐标"'},"​")],-1),ss=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"xAxisChartRef"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"chart"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { useECharts } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/utils/useECharts'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"xAxisChartRef"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  chart "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useECharts"),s("span",{style:{color:"#E1E4E8"}},"(xAxisChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    grid: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      top: "),s("span",{style:{color:"#79B8FF"}},"100"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    title: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      text: "),s("span",{style:{color:"#9ECBFF"}},"'业务受理趋势'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      "),s("span",{style:{color:"#6A737D"}},"// subtext: 'Fake Data'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    tooltip: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      trigger: "),s("span",{style:{color:"#9ECBFF"}},"'axis'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    legend: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      data: ["),s("span",{style:{color:"#9ECBFF"}},"'收件总数'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'办结总数'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'办结率'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    toolbox: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      show: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      feature: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        dataView: { show: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},", readOnly: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        magicType: { show: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},", type: ["),s("span",{style:{color:"#9ECBFF"}},"'line'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'bar'"),s("span",{style:{color:"#E1E4E8"}},"] },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        restore: { show: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        saveAsImage: { show: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    calculable: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    xAxis: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'category'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"// prettier-ignore")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: ["),s("span",{style:{color:"#9ECBFF"}},"'01'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'02'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'03'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'04'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'05'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'06'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'07'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'08'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'09'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'10'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'11'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'12'"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    yAxis: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'value'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},"'你好'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'value'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},"'增长率(%)'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        nameTextStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          color: "),s("span",{style:{color:"#9ECBFF"}},"'#999999'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        splitLine: { show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}}," }, "),s("span",{style:{color:"#6A737D"}},"//去除网格线")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisLine: { show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}}," }, "),s("span",{style:{color:"#6A737D"}},"//轴线")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisTick: { show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}}," }, "),s("span",{style:{color:"#6A737D"}},"//刻度")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          margin: "),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          interval: "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          color: "),s("span",{style:{color:"#9ECBFF"}},"'#999999'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    series: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},"'办结总数'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'bar'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: ["),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"9"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"26"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"28"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"70"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"175"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"182"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"48"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"18"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"6"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        markPoint: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          data: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#6A737D"}},"// 图钉")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            { name: "),s("span",{style:{color:"#9ECBFF"}},"'Max'"),s("span",{style:{color:"#E1E4E8"}},", value: "),s("span",{style:{color:"#79B8FF"}},"182"),s("span",{style:{color:"#E1E4E8"}},", xAxis: "),s("span",{style:{color:"#79B8FF"}},"7"),s("span",{style:{color:"#E1E4E8"}},", yAxis: "),s("span",{style:{color:"#79B8FF"}},"183"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        markLine: {},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        label: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},"'办结率'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'line'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        color: ["),s("span",{style:{color:"#9ECBFF"}},"'red'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'pink'"),s("span",{style:{color:"#E1E4E8"}},"], "),s("span",{style:{color:"#6A737D"}},"//折线条的颜色")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        smooth: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        yAxisIndex: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"//使用的y轴下标")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          hadowBlur: "),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: ["),s("span",{style:{color:"#79B8FF"}},"31"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"62"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"89"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"40"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"30"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"40"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"26"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"25"),s("span",{style:{color:"#E1E4E8"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},".chart"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"500"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"background"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"linear-gradient"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"90"),s("span",{style:{color:"#F97583"}},"deg"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#dde4ff"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#fff"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#fff"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#dde4ff"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"xAxisChartRef"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"chart"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { onMounted, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { useECharts } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/utils/useECharts'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"xAxisChartRef"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  chart "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useECharts"),s("span",{style:{color:"#24292E"}},"(xAxisChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    grid: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      top: "),s("span",{style:{color:"#005CC5"}},"100"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    title: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      text: "),s("span",{style:{color:"#032F62"}},"'业务受理趋势'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      "),s("span",{style:{color:"#6A737D"}},"// subtext: 'Fake Data'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    tooltip: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      trigger: "),s("span",{style:{color:"#032F62"}},"'axis'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    legend: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      data: ["),s("span",{style:{color:"#032F62"}},"'收件总数'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'办结总数'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'办结率'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    toolbox: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      show: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      feature: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        dataView: { show: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},", readOnly: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        magicType: { show: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},", type: ["),s("span",{style:{color:"#032F62"}},"'line'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'bar'"),s("span",{style:{color:"#24292E"}},"] },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        restore: { show: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        saveAsImage: { show: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    calculable: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    xAxis: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'category'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"// prettier-ignore")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: ["),s("span",{style:{color:"#032F62"}},"'01'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'02'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'03'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'04'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'05'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'06'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'07'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'08'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'09'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'10'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'11'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'12'"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    yAxis: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'value'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},"'你好'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'value'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},"'增长率(%)'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        nameTextStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          color: "),s("span",{style:{color:"#032F62"}},"'#999999'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        splitLine: { show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}}," }, "),s("span",{style:{color:"#6A737D"}},"//去除网格线")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisLine: { show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}}," }, "),s("span",{style:{color:"#6A737D"}},"//轴线")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisTick: { show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}}," }, "),s("span",{style:{color:"#6A737D"}},"//刻度")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          margin: "),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          interval: "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          color: "),s("span",{style:{color:"#032F62"}},"'#999999'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    series: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},"'办结总数'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'bar'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: ["),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"9"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"26"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"28"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"70"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"175"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"182"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"48"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"18"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"6"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        markPoint: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          data: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#6A737D"}},"// 图钉")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            { name: "),s("span",{style:{color:"#032F62"}},"'Max'"),s("span",{style:{color:"#24292E"}},", value: "),s("span",{style:{color:"#005CC5"}},"182"),s("span",{style:{color:"#24292E"}},", xAxis: "),s("span",{style:{color:"#005CC5"}},"7"),s("span",{style:{color:"#24292E"}},", yAxis: "),s("span",{style:{color:"#005CC5"}},"183"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        markLine: {},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        label: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},"'办结率'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'line'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        color: ["),s("span",{style:{color:"#032F62"}},"'red'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'pink'"),s("span",{style:{color:"#24292E"}},"], "),s("span",{style:{color:"#6A737D"}},"//折线条的颜色")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        smooth: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        yAxisIndex: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"//使用的y轴下标")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          hadowBlur: "),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: ["),s("span",{style:{color:"#005CC5"}},"31"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"62"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"89"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"40"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"30"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"40"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"26"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"25"),s("span",{style:{color:"#24292E"}},"],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},".chart"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"500"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"background"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"linear-gradient"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"90"),s("span",{style:{color:"#D73A49"}},"deg"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#dde4ff"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#fff"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#fff"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#dde4ff"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),ls=s("h2",{id:"series",tabindex:"-1"},[l("Series "),s("a",{class:"header-anchor",href:"#series","aria-label":'Permalink to "Series"'},"​")],-1),os=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"xAxisChartRef"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"chart"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"*"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"as"),s("span",{style:{color:"#E1E4E8"}}," echarts "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'echarts'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { useECharts } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/utils/useECharts'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," mock "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'mockjs'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"xAxisChartRef"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  chart "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useECharts"),s("span",{style:{color:"#E1E4E8"}},"(xAxisChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    tooltip: {},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    yAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      type: "),s("span",{style:{color:"#9ECBFF"}},"'value'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      scale: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    xAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      type: "),s("span",{style:{color:"#9ECBFF"}},"'category'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      data: Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"12"),s("span",{style:{color:"#E1E4E8"}}," }, ("),s("span",{style:{color:"#FFAB70"}},"_"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"i"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"`${"),s("span",{style:{color:"#E1E4E8"}},"i"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#9ECBFF"}},"}月`"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    series: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'line'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},"'小白语文月考成绩'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"12"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"80"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"150"),s("span",{style:{color:"#E1E4E8"}},")),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'bar'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},"'小黄语文月考成绩'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"12"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"80"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"150"),s("span",{style:{color:"#E1E4E8"}},")),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        barWidth: "),s("span",{style:{color:"#79B8FF"}},"12"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"//柱宽度")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          borderRadius: ["),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},"], "),s("span",{style:{color:"#6A737D"}},"//柱圆角")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        color: "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," echarts.graphic."),s("span",{style:{color:"#B392F0"}},"LinearGradient"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          { offset: "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", color: "),s("span",{style:{color:"#9ECBFF"}},"'pink'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          { offset: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", color: "),s("span",{style:{color:"#9ECBFF"}},"'transparent'"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        ]), "),s("span",{style:{color:"#6A737D"}},"//柱渐变")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'pie'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},"'小蓝语文月考成绩'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"12"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          value: mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"80"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"150"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        })),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          normal: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#B392F0"}},"color"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," echarts.graphic."),s("span",{style:{color:"#B392F0"}},"LinearGradient"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                  offset: "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                  color: mock."),s("span",{style:{color:"#B392F0"}},"mock"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'@color'"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                  offset: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                  color: mock."),s("span",{style:{color:"#B392F0"}},"mock"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'@color'"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              ]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},".chart"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"500"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"background"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"linear-gradient"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"90"),s("span",{style:{color:"#F97583"}},"deg"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#dde4ff"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#fff"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#fff"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#dde4ff"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"xAxisChartRef"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"chart"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { onMounted, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"*"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"as"),s("span",{style:{color:"#24292E"}}," echarts "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'echarts'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { useECharts } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/utils/useECharts'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," mock "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'mockjs'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"xAxisChartRef"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  chart "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useECharts"),s("span",{style:{color:"#24292E"}},"(xAxisChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    tooltip: {},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    yAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      type: "),s("span",{style:{color:"#032F62"}},"'value'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      scale: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    xAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      type: "),s("span",{style:{color:"#032F62"}},"'category'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      data: Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"12"),s("span",{style:{color:"#24292E"}}," }, ("),s("span",{style:{color:"#E36209"}},"_"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"i"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"`${"),s("span",{style:{color:"#24292E"}},"i"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#032F62"}},"}月`"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    series: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'line'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},"'小白语文月考成绩'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"12"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"80"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"150"),s("span",{style:{color:"#24292E"}},")),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'bar'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},"'小黄语文月考成绩'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"12"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"80"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"150"),s("span",{style:{color:"#24292E"}},")),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        barWidth: "),s("span",{style:{color:"#005CC5"}},"12"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"//柱宽度")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          borderRadius: ["),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},"], "),s("span",{style:{color:"#6A737D"}},"//柱圆角")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        color: "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," echarts.graphic."),s("span",{style:{color:"#6F42C1"}},"LinearGradient"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},", [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          { offset: "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", color: "),s("span",{style:{color:"#032F62"}},"'pink'"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          { offset: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},", color: "),s("span",{style:{color:"#032F62"}},"'transparent'"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        ]), "),s("span",{style:{color:"#6A737D"}},"//柱渐变")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'pie'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},"'小蓝语文月考成绩'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"12"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          value: mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"80"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"150"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        })),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          normal: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#6F42C1"}},"color"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," () {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," echarts.graphic."),s("span",{style:{color:"#6F42C1"}},"LinearGradient"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                  offset: "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                  color: mock."),s("span",{style:{color:"#6F42C1"}},"mock"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'@color'"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                  offset: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                  color: mock."),s("span",{style:{color:"#6F42C1"}},"mock"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'@color'"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              ]);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},".chart"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"500"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"background"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"linear-gradient"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"90"),s("span",{style:{color:"#D73A49"}},"deg"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#dde4ff"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#fff"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#fff"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#dde4ff"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),ns=s("h2",{id:"横向柱形图",tabindex:"-1"},[l("横向柱形图 "),s("a",{class:"header-anchor",href:"#横向柱形图","aria-label":'Permalink to "横向柱形图"'},"​")],-1),as=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"xAxisChartRef"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"chart"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { useECharts } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/utils/useECharts'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," mock "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'mockjs'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"xAxisChartRef"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  chart "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useECharts"),s("span",{style:{color:"#E1E4E8"}},"(xAxisChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    tooltip: {},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    xAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      type: "),s("span",{style:{color:"#9ECBFF"}},"'value'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    yAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      type: "),s("span",{style:{color:"#9ECBFF"}},"'category'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      data: Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"7"),s("span",{style:{color:"#E1E4E8"}}," }, ("),s("span",{style:{color:"#FFAB70"}},"_"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"i"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"`周${"),s("span",{style:{color:"#E1E4E8"}},"i"),s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    series: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      type: "),s("span",{style:{color:"#9ECBFF"}},"'bar'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      data: Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"7"),s("span",{style:{color:"#E1E4E8"}}," }, ("),s("span",{style:{color:"#FFAB70"}},"_"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"i"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"10"),s("span",{style:{color:"#E1E4E8"}},")),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        color: "),s("span",{style:{color:"#9ECBFF"}},"'red'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},".chart"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"300"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"xAxisChartRef"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"chart"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { onMounted, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { useECharts } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/utils/useECharts'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," mock "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'mockjs'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"xAxisChartRef"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  chart "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useECharts"),s("span",{style:{color:"#24292E"}},"(xAxisChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    tooltip: {},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    xAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      type: "),s("span",{style:{color:"#032F62"}},"'value'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    yAxis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      type: "),s("span",{style:{color:"#032F62"}},"'category'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      data: Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"7"),s("span",{style:{color:"#24292E"}}," }, ("),s("span",{style:{color:"#E36209"}},"_"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"i"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"`周${"),s("span",{style:{color:"#24292E"}},"i"),s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    series: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      type: "),s("span",{style:{color:"#032F62"}},"'bar'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      data: Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"7"),s("span",{style:{color:"#24292E"}}," }, ("),s("span",{style:{color:"#E36209"}},"_"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"i"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"10"),s("span",{style:{color:"#24292E"}},")),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        color: "),s("span",{style:{color:"#032F62"}},"'red'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},".chart"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"300"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),es=s("h2",{id:"使用多个x轴实现15日内的天气预报",tabindex:"-1"},[l("使用多个x轴实现15日内的天气预报 "),s("a",{class:"header-anchor",href:"#使用多个x轴实现15日内的天气预报","aria-label":'Permalink to "使用多个x轴实现15日内的天气预报"'},"​")],-1),ts=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"xAxisChartRef"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"chart"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { useECharts } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/utils/useECharts'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," mock "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'mockjs'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," clear "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/echarts/weather/clear.png'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," cloudy "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/echarts/weather/cloudy.png'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," rainy "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/echarts/weather/rainy.png'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," thundershower "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/echarts/weather/thundershower.png'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"weather"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," [clear, cloudy, rainy, thundershower];")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"xAxisChartRef"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  chart "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useECharts"),s("span",{style:{color:"#E1E4E8"}},"(xAxisChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    tooltip: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      trigger: "),s("span",{style:{color:"#9ECBFF"}},"'none'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      axisPointer: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'cross'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    grid: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      top: "),s("span",{style:{color:"#79B8FF"}},"80"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      left: "),s("span",{style:{color:"#79B8FF"}},"30"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      bottom: "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      right: "),s("span",{style:{color:"#79B8FF"}},"30"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    xAxis: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'category'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        boundaryGap: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        position: "),s("span",{style:{color:"#9ECBFF"}},"'top'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        offset: "),s("span",{style:{color:"#79B8FF"}},"50"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisLine: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisTick: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          interval: "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          formatter: ["),s("span",{style:{color:"#9ECBFF"}},"'{a|{value}}'"),s("span",{style:{color:"#E1E4E8"}},"]."),s("span",{style:{color:"#B392F0"}},"join"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'"),s("span",{style:{color:"#79B8FF"}},"\\n"),s("span",{style:{color:"#9ECBFF"}},"'"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          rich: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            a: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              fontSize: "),s("span",{style:{color:"#79B8FF"}},"13"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        nameTextStyle: {},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"15"),s("span",{style:{color:"#E1E4E8"}}," }, ("),s("span",{style:{color:"#FFAB70"}},"_"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"i"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"day"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Date"),s("span",{style:{color:"#E1E4E8"}},"()."),s("span",{style:{color:"#B392F0"}},"getDate"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"date"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Date"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Date"),s("span",{style:{color:"#E1E4E8"}},"()."),s("span",{style:{color:"#B392F0"}},"setDate"),s("span",{style:{color:"#E1E4E8"}},"(day "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," i));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"`${"),s("span",{style:{color:"#E1E4E8"}},"date"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#B392F0"}},"getMonth"),s("span",{style:{color:"#9ECBFF"}},"() "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#9ECBFF"}}," "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#9ECBFF"}},"}/${"),s("span",{style:{color:"#E1E4E8"}},"date"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#B392F0"}},"getDate"),s("span",{style:{color:"#9ECBFF"}},"()"),s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'category'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        boundaryGap: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        position: "),s("span",{style:{color:"#9ECBFF"}},"'top'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        offset: "),s("span",{style:{color:"#79B8FF"}},"32"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisLine: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisTick: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          interval: "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          formatter: ["),s("span",{style:{color:"#9ECBFF"}},"'{a|{value}}'"),s("span",{style:{color:"#E1E4E8"}},"]."),s("span",{style:{color:"#B392F0"}},"join"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'"),s("span",{style:{color:"#79B8FF"}},"\\n"),s("span",{style:{color:"#9ECBFF"}},"'"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          rich: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            a: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              "),s("span",{style:{color:"#6A737D"}},"// color: 'white',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              fontSize: "),s("span",{style:{color:"#79B8FF"}},"12"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        nameTextStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          fontWeight: "),s("span",{style:{color:"#9ECBFF"}},"'bold'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          fontSize: "),s("span",{style:{color:"#79B8FF"}},"19"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"15"),s("span",{style:{color:"#E1E4E8"}}," }, ("),s("span",{style:{color:"#FFAB70"}},"_"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"i"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"day"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Date"),s("span",{style:{color:"#E1E4E8"}},"()."),s("span",{style:{color:"#B392F0"}},"getDate"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"date"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Date"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Date"),s("span",{style:{color:"#E1E4E8"}},"()."),s("span",{style:{color:"#B392F0"}},"setDate"),s("span",{style:{color:"#E1E4E8"}},"(day "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," i));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"week"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ["),s("span",{style:{color:"#9ECBFF"}},"'日'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'一'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'二'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'三'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'四'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'五'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'六'"),s("span",{style:{color:"#E1E4E8"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"`周${"),s("span",{style:{color:"#E1E4E8"}},"week"),s("span",{style:{color:"#9ECBFF"}},"["),s("span",{style:{color:"#E1E4E8"}},"date"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#B392F0"}},"getDay"),s("span",{style:{color:"#9ECBFF"}},"()]"),s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'category'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        boundaryGap: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        position: "),s("span",{style:{color:"#9ECBFF"}},"'top'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        offset: "),s("span",{style:{color:"#79B8FF"}},"32"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisLine: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisTick: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          interval: "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          formatter: ["),s("span",{style:{color:"#9ECBFF"}},"'{a|{value}}'"),s("span",{style:{color:"#E1E4E8"}},"]."),s("span",{style:{color:"#B392F0"}},"join"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#9ECBFF"}},"'"),s("span",{style:{color:"#79B8FF"}},"\\n"),s("span",{style:{color:"#9ECBFF"}},"'"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          rich: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            a: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              "),s("span",{style:{color:"#6A737D"}},"// color: 'white',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              fontSize: "),s("span",{style:{color:"#79B8FF"}},"12"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        nameTextStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          fontWeight: "),s("span",{style:{color:"#9ECBFF"}},"'bold'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          fontSize: "),s("span",{style:{color:"#79B8FF"}},"19"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"15"),s("span",{style:{color:"#E1E4E8"}}," }, ("),s("span",{style:{color:"#FFAB70"}},"_"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"i"),s("span",{style:{color:"#E1E4E8"}},") "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"day"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Date"),s("span",{style:{color:"#E1E4E8"}},"()."),s("span",{style:{color:"#B392F0"}},"getDate"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"date"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Date"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#F97583"}},"new"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"Date"),s("span",{style:{color:"#E1E4E8"}},"()."),s("span",{style:{color:"#B392F0"}},"setDate"),s("span",{style:{color:"#E1E4E8"}},"(day "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," i));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"week"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," ["),s("span",{style:{color:"#9ECBFF"}},"'日'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'一'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'二'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'三'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'四'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'五'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'六'"),s("span",{style:{color:"#E1E4E8"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"`周${"),s("span",{style:{color:"#E1E4E8"}},"week"),s("span",{style:{color:"#9ECBFF"}},"["),s("span",{style:{color:"#E1E4E8"}},"date"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#B392F0"}},"getDay"),s("span",{style:{color:"#9ECBFF"}},"()]"),s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        }),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'category'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        boundaryGap: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        position: "),s("span",{style:{color:"#9ECBFF"}},"'top'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        offset: "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#79B8FF"}},"24"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisLine: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisTick: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          interval: "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#B392F0"}},"formatter"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"value"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"index"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'{'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," index "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'| }"),s("span",{style:{color:"#79B8FF"}},"\\n"),s("span",{style:{color:"#9ECBFF"}},"{b|'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," value "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'}'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          rich: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#F97583"}},"..."),s("span",{style:{color:"#E1E4E8"}},"Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"15"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              backgroundColor: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                image: weather[mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"3"),s("span",{style:{color:"#E1E4E8"}},")],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              height: "),s("span",{style:{color:"#79B8FF"}},"16"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            })),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            b: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              fontSize: "),s("span",{style:{color:"#79B8FF"}},"11"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              lineHeight: "),s("span",{style:{color:"#79B8FF"}},"30"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              height: "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        nameTextStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          fontWeight: "),s("span",{style:{color:"#9ECBFF"}},"'bold'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          fontSize: "),s("span",{style:{color:"#79B8FF"}},"19"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          { length: "),s("span",{style:{color:"#79B8FF"}},"15"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," ["),s("span",{style:{color:"#9ECBFF"}},"'小雨'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'阴'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'多云'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'小雨'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'晴'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'雨夹雪'"),s("span",{style:{color:"#E1E4E8"}},"][mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}},")]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        ),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'category'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        boundaryGap: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        position: "),s("span",{style:{color:"#9ECBFF"}},"'bottom'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        offset: "),s("span",{style:{color:"#F97583"}},"-"),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisLine: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisTick: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          interval: "),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          "),s("span",{style:{color:"#B392F0"}},"formatter"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#F97583"}},"function"),s("span",{style:{color:"#E1E4E8"}}," ("),s("span",{style:{color:"#FFAB70"}},"value"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#FFAB70"}},"index"),s("span",{style:{color:"#E1E4E8"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#F97583"}},"return"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'{'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," index "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'| }"),s("span",{style:{color:"#79B8FF"}},"\\n"),s("span",{style:{color:"#9ECBFF"}},"{b|'"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," value "),s("span",{style:{color:"#F97583"}},"+"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'}'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          rich: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            "),s("span",{style:{color:"#F97583"}},"..."),s("span",{style:{color:"#E1E4E8"}},"Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"15"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              backgroundColor: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"                image: weather[mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"3"),s("span",{style:{color:"#E1E4E8"}},")],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              height: "),s("span",{style:{color:"#79B8FF"}},"16"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            })),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            b: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              fontSize: "),s("span",{style:{color:"#79B8FF"}},"11"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              lineHeight: "),s("span",{style:{color:"#79B8FF"}},"30"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"              height: "),s("span",{style:{color:"#79B8FF"}},"20"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        nameTextStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          fontWeight: "),s("span",{style:{color:"#9ECBFF"}},"'bold'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          fontSize: "),s("span",{style:{color:"#79B8FF"}},"19"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          { length: "),s("span",{style:{color:"#79B8FF"}},"15"),s("span",{style:{color:"#E1E4E8"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," ["),s("span",{style:{color:"#9ECBFF"}},"'小雨'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'阴'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'多云'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'小雨'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'晴'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'雨夹雪'"),s("span",{style:{color:"#E1E4E8"}},"][mock.Random."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"0"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}},")]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        ),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    yAxis: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'value'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        boundaryGap: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        show: "),s("span",{style:{color:"#79B8FF"}},"false"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        scale: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    series: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},"'最高气温'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'line'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        emphasis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          focus: "),s("span",{style:{color:"#9ECBFF"}},"'series'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        lineStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          color: "),s("span",{style:{color:"#9ECBFF"}},"'#FF8A15'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          color: "),s("span",{style:{color:"#9ECBFF"}},"'#FF8A15'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"24"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"`${"),s("span",{style:{color:"#E1E4E8"}},"mock"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#E1E4E8"}},"Random"),s("span",{style:{color:"#9ECBFF"}},"."),s("span",{style:{color:"#B392F0"}},"integer"),s("span",{style:{color:"#9ECBFF"}},"("),s("span",{style:{color:"#79B8FF"}},"18"),s("span",{style:{color:"#9ECBFF"}},", "),s("span",{style:{color:"#79B8FF"}},"29"),s("span",{style:{color:"#9ECBFF"}},")"),s("span",{style:{color:"#9ECBFF"}},"}`"),s("span",{style:{color:"#E1E4E8"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        name: "),s("span",{style:{color:"#9ECBFF"}},"'最低气温'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'line'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        emphasis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          focus: "),s("span",{style:{color:"#9ECBFF"}},"'series'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        lineStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          color: "),s("span",{style:{color:"#9ECBFF"}},"'#0091FF'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          color: "),s("span",{style:{color:"#9ECBFF"}},"'#0091FF'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        data: Array."),s("span",{style:{color:"#B392F0"}},"from"),s("span",{style:{color:"#E1E4E8"}},"({ length: "),s("span",{style:{color:"#79B8FF"}},"24"),s("span",{style:{color:"#E1E4E8"}}," }, () "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," mock.Random."),s("span",{style:{color:"#B392F0"}},"float"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"9"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"17"),s("span",{style:{color:"#E1E4E8"}},")),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},".chart"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"300"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"background"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"linear-gradient"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"90"),s("span",{style:{color:"#F97583"}},"deg"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#dde4ff"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#fff"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#fff"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#dde4ff"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"xAxisChartRef"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"chart"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { onMounted, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { useECharts } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/utils/useECharts'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," mock "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'mockjs'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," clear "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/echarts/weather/clear.png'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," cloudy "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/echarts/weather/cloudy.png'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," rainy "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/echarts/weather/rainy.png'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," thundershower "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/echarts/weather/thundershower.png'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"weather"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," [clear, cloudy, rainy, thundershower];")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"xAxisChartRef"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  chart "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useECharts"),s("span",{style:{color:"#24292E"}},"(xAxisChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    tooltip: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      trigger: "),s("span",{style:{color:"#032F62"}},"'none'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      axisPointer: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'cross'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    grid: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      top: "),s("span",{style:{color:"#005CC5"}},"80"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      left: "),s("span",{style:{color:"#005CC5"}},"30"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      bottom: "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      right: "),s("span",{style:{color:"#005CC5"}},"30"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    xAxis: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'category'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        boundaryGap: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        position: "),s("span",{style:{color:"#032F62"}},"'top'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        offset: "),s("span",{style:{color:"#005CC5"}},"50"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisLine: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisTick: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          interval: "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          formatter: ["),s("span",{style:{color:"#032F62"}},"'{a|{value}}'"),s("span",{style:{color:"#24292E"}},"]."),s("span",{style:{color:"#6F42C1"}},"join"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'"),s("span",{style:{color:"#005CC5"}},"\\n"),s("span",{style:{color:"#032F62"}},"'"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          rich: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            a: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              fontSize: "),s("span",{style:{color:"#005CC5"}},"13"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        nameTextStyle: {},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"15"),s("span",{style:{color:"#24292E"}}," }, ("),s("span",{style:{color:"#E36209"}},"_"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"i"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"day"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Date"),s("span",{style:{color:"#24292E"}},"()."),s("span",{style:{color:"#6F42C1"}},"getDate"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"date"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Date"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Date"),s("span",{style:{color:"#24292E"}},"()."),s("span",{style:{color:"#6F42C1"}},"setDate"),s("span",{style:{color:"#24292E"}},"(day "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," i));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"`${"),s("span",{style:{color:"#24292E"}},"date"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#6F42C1"}},"getMonth"),s("span",{style:{color:"#032F62"}},"() "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#032F62"}}," "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#032F62"}},"}/${"),s("span",{style:{color:"#24292E"}},"date"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#6F42C1"}},"getDate"),s("span",{style:{color:"#032F62"}},"()"),s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        }),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'category'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        boundaryGap: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        position: "),s("span",{style:{color:"#032F62"}},"'top'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        offset: "),s("span",{style:{color:"#005CC5"}},"32"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisLine: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisTick: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          interval: "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          formatter: ["),s("span",{style:{color:"#032F62"}},"'{a|{value}}'"),s("span",{style:{color:"#24292E"}},"]."),s("span",{style:{color:"#6F42C1"}},"join"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'"),s("span",{style:{color:"#005CC5"}},"\\n"),s("span",{style:{color:"#032F62"}},"'"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          rich: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            a: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              "),s("span",{style:{color:"#6A737D"}},"// color: 'white',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              fontSize: "),s("span",{style:{color:"#005CC5"}},"12"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        nameTextStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          fontWeight: "),s("span",{style:{color:"#032F62"}},"'bold'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          fontSize: "),s("span",{style:{color:"#005CC5"}},"19"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"15"),s("span",{style:{color:"#24292E"}}," }, ("),s("span",{style:{color:"#E36209"}},"_"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"i"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"day"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Date"),s("span",{style:{color:"#24292E"}},"()."),s("span",{style:{color:"#6F42C1"}},"getDate"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"date"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Date"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Date"),s("span",{style:{color:"#24292E"}},"()."),s("span",{style:{color:"#6F42C1"}},"setDate"),s("span",{style:{color:"#24292E"}},"(day "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," i));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"week"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ["),s("span",{style:{color:"#032F62"}},"'日'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'一'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'二'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'三'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'四'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'五'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'六'"),s("span",{style:{color:"#24292E"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"`周${"),s("span",{style:{color:"#24292E"}},"week"),s("span",{style:{color:"#032F62"}},"["),s("span",{style:{color:"#24292E"}},"date"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#6F42C1"}},"getDay"),s("span",{style:{color:"#032F62"}},"()]"),s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        }),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'category'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        boundaryGap: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        position: "),s("span",{style:{color:"#032F62"}},"'top'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        offset: "),s("span",{style:{color:"#005CC5"}},"32"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisLine: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisTick: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          interval: "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          formatter: ["),s("span",{style:{color:"#032F62"}},"'{a|{value}}'"),s("span",{style:{color:"#24292E"}},"]."),s("span",{style:{color:"#6F42C1"}},"join"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#032F62"}},"'"),s("span",{style:{color:"#005CC5"}},"\\n"),s("span",{style:{color:"#032F62"}},"'"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          rich: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            a: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              "),s("span",{style:{color:"#6A737D"}},"// color: 'white',")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              fontSize: "),s("span",{style:{color:"#005CC5"}},"12"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        nameTextStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          fontWeight: "),s("span",{style:{color:"#032F62"}},"'bold'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          fontSize: "),s("span",{style:{color:"#005CC5"}},"19"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"15"),s("span",{style:{color:"#24292E"}}," }, ("),s("span",{style:{color:"#E36209"}},"_"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"i"),s("span",{style:{color:"#24292E"}},") "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"day"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Date"),s("span",{style:{color:"#24292E"}},"()."),s("span",{style:{color:"#6F42C1"}},"getDate"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"date"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Date"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#D73A49"}},"new"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"Date"),s("span",{style:{color:"#24292E"}},"()."),s("span",{style:{color:"#6F42C1"}},"setDate"),s("span",{style:{color:"#24292E"}},"(day "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," i));")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"week"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," ["),s("span",{style:{color:"#032F62"}},"'日'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'一'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'二'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'三'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'四'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'五'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'六'"),s("span",{style:{color:"#24292E"}},"];")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"`周${"),s("span",{style:{color:"#24292E"}},"week"),s("span",{style:{color:"#032F62"}},"["),s("span",{style:{color:"#24292E"}},"date"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#6F42C1"}},"getDay"),s("span",{style:{color:"#032F62"}},"()]"),s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        }),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'category'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        boundaryGap: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        position: "),s("span",{style:{color:"#032F62"}},"'top'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        offset: "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#005CC5"}},"24"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisLine: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisTick: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          interval: "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#6F42C1"}},"formatter"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"value"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"index"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'{'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," index "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'| }"),s("span",{style:{color:"#005CC5"}},"\\n"),s("span",{style:{color:"#032F62"}},"{b|'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," value "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'}'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          rich: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#D73A49"}},"..."),s("span",{style:{color:"#24292E"}},"Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"15"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              backgroundColor: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                image: weather[mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"3"),s("span",{style:{color:"#24292E"}},")],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              height: "),s("span",{style:{color:"#005CC5"}},"16"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            })),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            b: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              fontSize: "),s("span",{style:{color:"#005CC5"}},"11"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              lineHeight: "),s("span",{style:{color:"#005CC5"}},"30"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              height: "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        nameTextStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          fontWeight: "),s("span",{style:{color:"#032F62"}},"'bold'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          fontSize: "),s("span",{style:{color:"#005CC5"}},"19"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          { length: "),s("span",{style:{color:"#005CC5"}},"15"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," ["),s("span",{style:{color:"#032F62"}},"'小雨'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'阴'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'多云'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'小雨'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'晴'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'雨夹雪'"),s("span",{style:{color:"#24292E"}},"][mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}},")]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        ),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'category'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        boundaryGap: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        position: "),s("span",{style:{color:"#032F62"}},"'bottom'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        offset: "),s("span",{style:{color:"#D73A49"}},"-"),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisLine: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisTick: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        axisLabel: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          interval: "),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          "),s("span",{style:{color:"#6F42C1"}},"formatter"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#D73A49"}},"function"),s("span",{style:{color:"#24292E"}}," ("),s("span",{style:{color:"#E36209"}},"value"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#E36209"}},"index"),s("span",{style:{color:"#24292E"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#D73A49"}},"return"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'{'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," index "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'| }"),s("span",{style:{color:"#005CC5"}},"\\n"),s("span",{style:{color:"#032F62"}},"{b|'"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," value "),s("span",{style:{color:"#D73A49"}},"+"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'}'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          rich: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            "),s("span",{style:{color:"#D73A49"}},"..."),s("span",{style:{color:"#24292E"}},"Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"15"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," ({")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              backgroundColor: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"                image: weather[mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"3"),s("span",{style:{color:"#24292E"}},")],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              height: "),s("span",{style:{color:"#005CC5"}},"16"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            })),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            b: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              fontSize: "),s("span",{style:{color:"#005CC5"}},"11"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              lineHeight: "),s("span",{style:{color:"#005CC5"}},"30"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"              height: "),s("span",{style:{color:"#005CC5"}},"20"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"            },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        nameTextStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          fontWeight: "),s("span",{style:{color:"#032F62"}},"'bold'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          fontSize: "),s("span",{style:{color:"#005CC5"}},"19"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"(")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          { length: "),s("span",{style:{color:"#005CC5"}},"15"),s("span",{style:{color:"#24292E"}}," },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," ["),s("span",{style:{color:"#032F62"}},"'小雨'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'阴'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'多云'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'小雨'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'晴'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'雨夹雪'"),s("span",{style:{color:"#24292E"}},"][mock.Random."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"0"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}},")]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        ),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    yAxis: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'value'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        boundaryGap: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        show: "),s("span",{style:{color:"#005CC5"}},"false"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        scale: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    series: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},"'最高气温'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'line'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        emphasis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          focus: "),s("span",{style:{color:"#032F62"}},"'series'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        lineStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          color: "),s("span",{style:{color:"#032F62"}},"'#FF8A15'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          color: "),s("span",{style:{color:"#032F62"}},"'#FF8A15'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"24"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"`${"),s("span",{style:{color:"#24292E"}},"mock"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#24292E"}},"Random"),s("span",{style:{color:"#032F62"}},"."),s("span",{style:{color:"#6F42C1"}},"integer"),s("span",{style:{color:"#032F62"}},"("),s("span",{style:{color:"#005CC5"}},"18"),s("span",{style:{color:"#032F62"}},", "),s("span",{style:{color:"#005CC5"}},"29"),s("span",{style:{color:"#032F62"}},")"),s("span",{style:{color:"#032F62"}},"}`"),s("span",{style:{color:"#24292E"}},"),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        name: "),s("span",{style:{color:"#032F62"}},"'最低气温'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'line'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        emphasis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          focus: "),s("span",{style:{color:"#032F62"}},"'series'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        lineStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          color: "),s("span",{style:{color:"#032F62"}},"'#0091FF'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          color: "),s("span",{style:{color:"#032F62"}},"'#0091FF'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        data: Array."),s("span",{style:{color:"#6F42C1"}},"from"),s("span",{style:{color:"#24292E"}},"({ length: "),s("span",{style:{color:"#005CC5"}},"24"),s("span",{style:{color:"#24292E"}}," }, () "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," mock.Random."),s("span",{style:{color:"#6F42C1"}},"float"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"9"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"17"),s("span",{style:{color:"#24292E"}},")),")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},".chart"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"300"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"background"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"linear-gradient"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"90"),s("span",{style:{color:"#D73A49"}},"deg"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#dde4ff"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#fff"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#fff"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#dde4ff"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),cs=s("h2",{id:"中国地图",tabindex:"-1"},[l("中国地图 "),s("a",{class:"header-anchor",href:"#中国地图","aria-label":'Permalink to "中国地图"'},"​")],-1),ps=s("div",{class:"language-vue vp-adaptive-theme"},[s("span",{class:"lang"},"vue"),s("pre",{"v-pre":"",class:"shiki github-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  <"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"xAxisChartRef"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"class"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"chart"'),s("span",{style:{color:"#E1E4E8"}},"></"),s("span",{style:{color:"#85E89D"}},"div"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"template"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"setup"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"ts"'),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { onMounted, ref } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'vue'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"import"),s("span",{style:{color:"#E1E4E8"}}," { useECharts } "),s("span",{style:{color:"#F97583"}},"from"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#9ECBFF"}},"'/utils/useECharts'"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"let"),s("span",{style:{color:"#E1E4E8"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F97583"}},"const"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#79B8FF"}},"xAxisChartRef"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"ref"),s("span",{style:{color:"#E1E4E8"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},"onMounted"),s("span",{style:{color:"#E1E4E8"}},"(() "),s("span",{style:{color:"#F97583"}},"=>"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  chart "),s("span",{style:{color:"#F97583"}},"="),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"useECharts"),s("span",{style:{color:"#E1E4E8"}},"(xAxisChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    geo: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      map: "),s("span",{style:{color:"#9ECBFF"}},"'china'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      roam: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 是否开启放大缩小/拖拽功能")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      zoom: "),s("span",{style:{color:"#79B8FF"}},"1.2"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 缩放比列")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      layoutCenter: ["),s("span",{style:{color:"#9ECBFF"}},"'50%'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#9ECBFF"}},"'50%'"),s("span",{style:{color:"#E1E4E8"}},"], "),s("span",{style:{color:"#6A737D"}},"// 地图中心点位置")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      layoutSize: "),s("span",{style:{color:"#9ECBFF"}},"'100%'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      label: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        show: "),s("span",{style:{color:"#79B8FF"}},"true"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        color: "),s("span",{style:{color:"#9ECBFF"}},"'#fff'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        areaColor: "),s("span",{style:{color:"#9ECBFF"}},"'#12235c'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        borderColor: "),s("span",{style:{color:"#9ECBFF"}},"'#2ab8ff'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        borderWidth: "),s("span",{style:{color:"#79B8FF"}},"0.5"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        shadowColor: "),s("span",{style:{color:"#9ECBFF"}},"'rgba(0,54,255, 0.4)'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        shadowBlur: "),s("span",{style:{color:"#79B8FF"}},"100"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      emphasis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"//区域激活时的样式")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          areaColor: "),s("span",{style:{color:"#9ECBFF"}},"'#02102b'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        label: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          color: "),s("span",{style:{color:"#9ECBFF"}},"'#fff'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    series: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        "),s("span",{style:{color:"#6A737D"}},"// 带有涟漪特效动画的散点（气泡）图")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        type: "),s("span",{style:{color:"#9ECBFF"}},"'effectScatter'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        coordinateSystem: "),s("span",{style:{color:"#9ECBFF"}},"'geo'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        showEffectOn: "),s("span",{style:{color:"#9ECBFF"}},"'render'"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        zlevel: "),s("span",{style:{color:"#79B8FF"}},"1"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        rippleEffect: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          number: "),s("span",{style:{color:"#79B8FF"}},"3"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 波纹的数量。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          period: "),s("span",{style:{color:"#79B8FF"}},"5"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 动画的周期，秒数。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          scale: "),s("span",{style:{color:"#79B8FF"}},"17"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 动画中波纹的最大缩放比例。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"          brushType: "),s("span",{style:{color:"#9ECBFF"}},"'fill'"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#6A737D"}},"// 波纹的绘制方式，可选 'stroke' 和 'fill'。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"        symbolSize: "),s("span",{style:{color:"#79B8FF"}},"2"),s("span",{style:{color:"#E1E4E8"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"script"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"<"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"lang"),s("span",{style:{color:"#E1E4E8"}},"="),s("span",{style:{color:"#9ECBFF"}},'"less"'),s("span",{style:{color:"#E1E4E8"}}," "),s("span",{style:{color:"#B392F0"}},"scoped"),s("span",{style:{color:"#E1E4E8"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#B392F0"}},".chart"),s("span",{style:{color:"#E1E4E8"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"height"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"500"),s("span",{style:{color:"#F97583"}},"px"),s("span",{style:{color:"#E1E4E8"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"  "),s("span",{style:{color:"#79B8FF"}},"background"),s("span",{style:{color:"#E1E4E8"}},": "),s("span",{style:{color:"#79B8FF"}},"linear-gradient"),s("span",{style:{color:"#E1E4E8"}},"("),s("span",{style:{color:"#79B8FF"}},"90"),s("span",{style:{color:"#F97583"}},"deg"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#dde4ff"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#fff"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#fff"),s("span",{style:{color:"#E1E4E8"}},", "),s("span",{style:{color:"#79B8FF"}},"#dde4ff"),s("span",{style:{color:"#E1E4E8"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#E1E4E8"}},"</"),s("span",{style:{color:"#85E89D"}},"style"),s("span",{style:{color:"#E1E4E8"}},">")])])]),s("pre",{"v-pre":"",class:"shiki github-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  <"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"xAxisChartRef"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"class"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"chart"'),s("span",{style:{color:"#24292E"}},"></"),s("span",{style:{color:"#22863A"}},"div"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"template"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"setup"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"ts"'),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { onMounted, ref } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'vue'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"import"),s("span",{style:{color:"#24292E"}}," { useECharts } "),s("span",{style:{color:"#D73A49"}},"from"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#032F62"}},"'/utils/useECharts'"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"let"),s("span",{style:{color:"#24292E"}}," chart;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#D73A49"}},"const"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#005CC5"}},"xAxisChartRef"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"ref"),s("span",{style:{color:"#24292E"}},"();")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},"onMounted"),s("span",{style:{color:"#24292E"}},"(() "),s("span",{style:{color:"#D73A49"}},"=>"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  chart "),s("span",{style:{color:"#D73A49"}},"="),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"useECharts"),s("span",{style:{color:"#24292E"}},"(xAxisChartRef.value,{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    geo: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      map: "),s("span",{style:{color:"#032F62"}},"'china'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      roam: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"// 是否开启放大缩小/拖拽功能")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      zoom: "),s("span",{style:{color:"#005CC5"}},"1.2"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"// 缩放比列")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      layoutCenter: ["),s("span",{style:{color:"#032F62"}},"'50%'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#032F62"}},"'50%'"),s("span",{style:{color:"#24292E"}},"], "),s("span",{style:{color:"#6A737D"}},"// 地图中心点位置")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      layoutSize: "),s("span",{style:{color:"#032F62"}},"'100%'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      label: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        show: "),s("span",{style:{color:"#005CC5"}},"true"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        color: "),s("span",{style:{color:"#032F62"}},"'#fff'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        areaColor: "),s("span",{style:{color:"#032F62"}},"'#12235c'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        borderColor: "),s("span",{style:{color:"#032F62"}},"'#2ab8ff'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        borderWidth: "),s("span",{style:{color:"#005CC5"}},"0.5"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        shadowColor: "),s("span",{style:{color:"#032F62"}},"'rgba(0,54,255, 0.4)'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        shadowBlur: "),s("span",{style:{color:"#005CC5"}},"100"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      emphasis: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"//区域激活时的样式")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        itemStyle: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          areaColor: "),s("span",{style:{color:"#032F62"}},"'#02102b'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        label: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          color: "),s("span",{style:{color:"#032F62"}},"'#fff'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    series: [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        "),s("span",{style:{color:"#6A737D"}},"// 带有涟漪特效动画的散点（气泡）图")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        type: "),s("span",{style:{color:"#032F62"}},"'effectScatter'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        coordinateSystem: "),s("span",{style:{color:"#032F62"}},"'geo'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        showEffectOn: "),s("span",{style:{color:"#032F62"}},"'render'"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        zlevel: "),s("span",{style:{color:"#005CC5"}},"1"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        rippleEffect: {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          number: "),s("span",{style:{color:"#005CC5"}},"3"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"// 波纹的数量。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          period: "),s("span",{style:{color:"#005CC5"}},"5"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"// 动画的周期，秒数。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          scale: "),s("span",{style:{color:"#005CC5"}},"17"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"// 动画中波纹的最大缩放比例。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"          brushType: "),s("span",{style:{color:"#032F62"}},"'fill'"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#6A737D"}},"// 波纹的绘制方式，可选 'stroke' 和 'fill'。")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"        symbolSize: "),s("span",{style:{color:"#005CC5"}},"2"),s("span",{style:{color:"#24292E"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"      },")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"    ],")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  })")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"});")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"script"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"<"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"lang"),s("span",{style:{color:"#24292E"}},"="),s("span",{style:{color:"#032F62"}},'"less"'),s("span",{style:{color:"#24292E"}}," "),s("span",{style:{color:"#6F42C1"}},"scoped"),s("span",{style:{color:"#24292E"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1"}},".chart"),s("span",{style:{color:"#24292E"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"height"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"500"),s("span",{style:{color:"#D73A49"}},"px"),s("span",{style:{color:"#24292E"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"  "),s("span",{style:{color:"#005CC5"}},"background"),s("span",{style:{color:"#24292E"}},": "),s("span",{style:{color:"#005CC5"}},"linear-gradient"),s("span",{style:{color:"#24292E"}},"("),s("span",{style:{color:"#005CC5"}},"90"),s("span",{style:{color:"#D73A49"}},"deg"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#dde4ff"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#fff"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#fff"),s("span",{style:{color:"#24292E"}},", "),s("span",{style:{color:"#005CC5"}},"#dde4ff"),s("span",{style:{color:"#24292E"}},");")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#24292E"}},"</"),s("span",{style:{color:"#22863A"}},"style"),s("span",{style:{color:"#24292E"}},">")])])])],-1),Cs=JSON.parse('{"title":"echarts","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/vue/echarts/base.md","filePath":"blogs/vue/echarts/base.md"}'),rs={name:"blogs/vue/echarts/base.md"},hs=Object.assign(rs,{setup(i){return(n,t)=>{const o=B("demo"),c=B("git-talk");return E(),y("div",null,[Z,V,a(o,{customClass:"",sourceCode:`<template>
  <div ref="helloChartRef" class="chart"></div>
</template>
<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { useECharts } from '/utils/useECharts';
  
  let chart;
  const helloChartRef = ref();
  const theme = ref('dark');

  onMounted(() => {
    chart = useECharts(helloChartRef.value,{
      xAxis: {
        // x轴
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
      },
      yAxis: {
        // y轴
      },
      toolbox: {
        // 工具箱 官方文档：http://echarts.apache.org/zh/option.html#toolbox
        feature: {
          // 按钮的位置和配置参数的排序有关
          restore: {}, // 刷新按钮
          dataZoom: {
            // 缩放按钮
            yAxisIndex: false, // 不选取y轴的坐标（就是全选y轴）
          },
          saveAsImage: {}, // 保存为图片的按钮
        },
      },
      series: {
        // 图表类型
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
    })
  });
<\/script>

<style lang="less" scoped>
  .chart {
    height: 300px;
  }
</style>
`},{highlight:e(()=>[N]),default:e(()=>[a(_)]),_:1}),J,a(o,{customClass:"",sourceCode:`<template>
  <div ref="pluginChartRef" class="chart"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useECharts } from '/utils/useECharts';

let chart;
const pluginChartRef = ref();

onMounted(() => {
  chart = useECharts(pluginChartRef.value,{
    xAxis: {
      // x轴
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
    },
    yAxis: {
      // y轴
    },
    toolbox: {
      // 工具箱 官方文档：http://echarts.apache.org/zh/option.html#toolbox
      feature: {
        // 按钮的位置和配置参数的排序有关
        restore: {}, // 刷新按钮
        dataZoom: {
          // 缩放按钮
          yAxisIndex: false, // 不选取y轴的坐标（就是全选y轴）
        },
        saveAsImage: {}, // 保存为图片的按钮
      },
    },
    series: {
      // 图表类型
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20],
    },
  })
});
<\/script>

<style lang="less" scoped>
.chart {
  height: 300px;
}
</style>
`},{highlight:e(()=>[q]),default:e(()=>[a(k)]),_:1}),K,a(o,{customClass:"",sourceCode:`<template>
  <div ref="titlePositionRef" class="chart"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useECharts } from '/utils/useECharts';

let chart;
const titlePositionRef = ref();

onMounted(() => {
  chart = useECharts(titlePositionRef.value,{
    title: {
      text: 'echarts标题', //标题文字
      link: 'https://www.baidu.com', //标题链接
      target: 'self', // 链接跳转方式,默认blank(打开新tab页)
      show: true, //标题是否显示
      subtext: '副标题',
      sublink: 'https://www.baidu.com', // 副标题链接
      // subtarget
      itemGap: 40, //正副标题的间距
      textStyle: {
        // 标题字体样式
        color: 'red',
        backgroundColor: '#00ff00',
      },
    },
    grid: {
      // 定位的代码
      top: 100,
      right: 200,
      bottom: 100,
      left: '10%',
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
  })
});
<\/script>

<style lang="less" scoped>
.chart {
  height: 300px;
}
</style>
`},{highlight:e(()=>[Q]),default:e(()=>[a(S)]),_:1}),U,a(o,{customClass:"",sourceCode:`<template>
  <div ref="xAxisChartRef" class="chart"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useECharts } from '/utils/useECharts';
import mock from 'mockjs';

import clear from '/echarts/weather/clear.png';
import cloudy from '/echarts/weather/cloudy.png';
import rainy from '/echarts/weather/rainy.png';
import thundershower from '/echarts/weather/thundershower.png';
const weather = [clear, cloudy, rainy, thundershower];

let chart;
const xAxisChartRef = ref();

onMounted(() => {
  chart = useECharts(xAxisChartRef.value,{
    grid: {
      left: 10,
      right: 10,
      bottom: 50,
      top: 50,
    },
    xAxis: [
      {
        type: 'category', //轴线类型
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun1'],
        position: 'bottom', //data相等轴线的位置,bottom在轴线下方
        name: 'x轴基本配置练习',
        nameLocation: 'center',
        nameTextStyle: {
          color: 'red',
        },
        nameGap: -5, //坐标轴名称与轴线之间的距离
        nameRotate: 45,
      },
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun66'],
        position: 'bottom',
        offset: -100,
        name: '轴线配置练习',
        nameLocation: 'center',
        axisLine: {
          // show: false,
          symbol: 'arrow', //坐标轴箭头
          lineStyle: {
            //轴线样式
            color: 'pink',
          },
        },
        axisTick: {
          // 刻度相关
          lineStyle: {
            color: 'blue',
          },
        },
      },
      {
        type: 'category',
        data: Array.from(
          { length: 15 },
          () => ['小雨', '阴', '多云', '小雨', '晴', '雨夹雪'][mock.Random.integer(0, 5)]
        ),
        name: '标签相关设置',
        nameLocation: 'center',
        position: 'top',
        nameGap: -20,
        offset: -200,
        axisLabel: {
          interval: 0,
          formatter: function (value, index) {
            return '{' + index + '| }';
          },
          rich: {
            ...Array.from({ length: 15 }, () => ({
              backgroundColor: {
                image: weather[mock.Random.integer(0, 3)],
              },
              height: 16,
            })),
            b: {
              fontSize: 11,
              lineHeight: 30,
              height: 20,
            },
          },
        },
      },
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun3'],
        position: 'bottom',
        offset: -300,
      },
      {
        type: 'category',
        data: Array.from({ length: 15 }, () => mock.mock('@ctitle')),
        position: 'bottom',
        offset: -400,
        axisLabel: {
          rotate: 80,
        },
      },
    ],
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [],
  })
});
<\/script>

<style lang="less" scoped>
.chart {
  height: 500px;
  background: linear-gradient(90deg, #dde4ff, #fff, #fff, #dde4ff);
}
</style>
`},{highlight:e(()=>[X]),default:e(()=>[a(L)]),_:1}),Y,a(o,{customClass:"",sourceCode:`<template>
  <div ref="xAxisChartRef" class="chart"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useECharts } from '/utils/useECharts';

let chart;
const xAxisChartRef = ref();

onMounted(() => {
  chart = useECharts(xAxisChartRef.value,{
    grid: {
      top: 100,
    },
    title: {
      text: '业务受理趋势',
      // subtext: 'Fake Data'
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['收件总数', '办结总数', '办结率'],
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    calculable: true,
    xAxis: [
      {
        type: 'category',
        // prettier-ignore
        data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: '你好',
      },
      {
        type: 'value',
        name: '增长率(%)',
        nameTextStyle: {
          color: '#999999',
        },
        splitLine: { show: false }, //去除网格线
        axisLine: { show: false }, //轴线
        axisTick: { show: false }, //刻度
        axisLabel: {
          margin: 2,
          interval: 10,
          color: '#999999',
        },
      },
    ],
    series: [
      {
        name: '办结总数',
        type: 'bar',
        data: [2, 5, 9, 26, 28, 70, 175, 182, 48, 18, 6, 2],
        markPoint: {
          data: [
            // 图钉
            { name: 'Max', value: 182, xAxis: 7, yAxis: 183 },
          ],
        },
        markLine: {},
        label: {
          show: false,
        },
      },
      {
        name: '办结率',
        type: 'line',
        color: ['red', 'pink'], //折线条的颜色
        smooth: true,
        yAxisIndex: 1, //使用的y轴下标
        itemStyle: {
          hadowBlur: 2,
        },
        data: [31, 62, 89, 40, 20, 30, 40, 25, 26, 25, 25, 25],
      },
    ],
  })
});
<\/script>

<style lang="less" scoped>
.chart {
  height: 500px;
  background: linear-gradient(90deg, #dde4ff, #fff, #fff, #dde4ff);
}
</style>
`},{highlight:e(()=>[ss]),default:e(()=>[a(z)]),_:1}),ls,a(o,{customClass:"",sourceCode:`<template>
  <div ref="xAxisChartRef" class="chart"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts';
import { useECharts } from '/utils/useECharts';
import mock from 'mockjs';

let chart;
const xAxisChartRef = ref();

onMounted(() => {
  chart = useECharts(xAxisChartRef.value,{
    tooltip: {},
    yAxis: {
      type: 'value',
      scale: true,
    },
    xAxis: {
      type: 'category',
      data: Array.from({ length: 12 }, (_, i) => \`\${i + 1}月\`),
    },
    series: [
      {
        type: 'line',
        name: '小白语文月考成绩',
        data: Array.from({ length: 12 }, () => mock.Random.integer(80, 150)),
      },
      {
        type: 'bar',
        name: '小黄语文月考成绩',
        data: Array.from({ length: 12 }, () => mock.Random.integer(80, 150)),
        barWidth: 12, //柱宽度
        itemStyle: {
          borderRadius: [10, 10, 10, 10], //柱圆角
        },
        color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [
          { offset: 0, color: 'pink' },
          { offset: 1, color: 'transparent' },
        ]), //柱渐变
      },
      {
        type: 'pie',
        name: '小蓝语文月考成绩',
        data: Array.from({ length: 12 }, () => ({
          value: mock.Random.integer(80, 150),
        })),
        itemStyle: {
          normal: {
            color: function () {
              return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: mock.mock('@color'),
                },
                {
                  offset: 1,
                  color: mock.mock('@color'),
                },
              ]);
            },
          },
        },
      },
    ],
  })
});
<\/script>

<style lang="less" scoped>
.chart {
  height: 500px;
  background: linear-gradient(90deg, #dde4ff, #fff, #fff, #dde4ff);
}
</style>
`},{highlight:e(()=>[os]),default:e(()=>[a(I)]),_:1}),ns,a(o,{customClass:"",sourceCode:`<template>
  <div ref="xAxisChartRef" class="chart"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useECharts } from '/utils/useECharts';
import mock from 'mockjs';

let chart;
const xAxisChartRef = ref();

onMounted(() => {
  chart = useECharts(xAxisChartRef.value,{
    tooltip: {},
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: Array.from({ length: 7 }, (_, i) => \`周\${i}\`),
    },
    series: {
      type: 'bar',
      data: Array.from({ length: 7 }, (_, i) => mock.Random.integer(5, 10)),
      itemStyle: {
        color: 'red',
      },
    },
  })
});
<\/script>

<style lang="less" scoped>
.chart {
  height: 300px;
}
</style>
`},{highlight:e(()=>[as]),default:e(()=>[a(W)]),_:1}),es,a(o,{customClass:"",sourceCode:`<template>
  <div ref="xAxisChartRef" class="chart"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useECharts } from '/utils/useECharts';
import mock from 'mockjs';
import clear from '/echarts/weather/clear.png';
import cloudy from '/echarts/weather/cloudy.png';
import rainy from '/echarts/weather/rainy.png';
import thundershower from '/echarts/weather/thundershower.png';
const weather = [clear, cloudy, rainy, thundershower];

let chart;
const xAxisChartRef = ref();

onMounted(() => {
  chart = useECharts(xAxisChartRef.value,{
    tooltip: {
      trigger: 'none',
      axisPointer: {
        type: 'cross',
      },
    },
    grid: {
      top: 80,
      left: 30,
      bottom: 50,
      right: 30,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        position: 'top',
        offset: 50,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          formatter: ['{a|{value}}'].join('\\n'),
          rich: {
            a: {
              fontSize: 13,
            },
          },
        },
        nameTextStyle: {},
        data: Array.from({ length: 15 }, (_, i) => {
          const day = new Date().getDate();
          const date = new Date(new Date().setDate(day + i));
          return \`\${date.getMonth() + 1}/\${date.getDate()}\`;
        }),
      },
      {
        type: 'category',
        boundaryGap: false,
        position: 'top',
        offset: 32,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          formatter: ['{a|{value}}'].join('\\n'),
          rich: {
            a: {
              // color: 'white',
              fontSize: 12,
            },
          },
        },
        nameTextStyle: {
          fontWeight: 'bold',
          fontSize: 19,
        },
        data: Array.from({ length: 15 }, (_, i) => {
          const day = new Date().getDate();
          const date = new Date(new Date().setDate(day + i));
          const week = ['日', '一', '二', '三', '四', '五', '六'];
          return \`周\${week[date.getDay()]}\`;
        }),
      },
      {
        type: 'category',
        boundaryGap: false,
        position: 'top',
        offset: 32,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          formatter: ['{a|{value}}'].join('\\n'),
          rich: {
            a: {
              // color: 'white',
              fontSize: 12,
            },
          },
        },
        nameTextStyle: {
          fontWeight: 'bold',
          fontSize: 19,
        },
        data: Array.from({ length: 15 }, (_, i) => {
          const day = new Date().getDate();
          const date = new Date(new Date().setDate(day + i));
          const week = ['日', '一', '二', '三', '四', '五', '六'];
          return \`周\${week[date.getDay()]}\`;
        }),
      },
      {
        type: 'category',
        boundaryGap: false,
        position: 'top',
        offset: -24,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          formatter: function (value, index) {
            return '{' + index + '| }\\n{b|' + value + '}';
          },
          rich: {
            ...Array.from({ length: 15 }, () => ({
              backgroundColor: {
                image: weather[mock.Random.integer(0, 3)],
              },
              height: 16,
            })),
            b: {
              fontSize: 11,
              lineHeight: 30,
              height: 20,
            },
          },
        },
        nameTextStyle: {
          fontWeight: 'bold',
          fontSize: 19,
        },
        data: Array.from(
          { length: 15 },
          () => ['小雨', '阴', '多云', '小雨', '晴', '雨夹雪'][mock.Random.integer(0, 5)]
        ),
      },
      {
        type: 'category',
        boundaryGap: false,
        position: 'bottom',
        offset: -5,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          interval: 0,
          formatter: function (value, index) {
            return '{' + index + '| }\\n{b|' + value + '}';
          },
          rich: {
            ...Array.from({ length: 15 }, () => ({
              backgroundColor: {
                image: weather[mock.Random.integer(0, 3)],
              },
              height: 16,
            })),
            b: {
              fontSize: 11,
              lineHeight: 30,
              height: 20,
            },
          },
        },
        nameTextStyle: {
          fontWeight: 'bold',
          fontSize: 19,
        },
        data: Array.from(
          { length: 15 },
          () => ['小雨', '阴', '多云', '小雨', '晴', '雨夹雪'][mock.Random.integer(0, 5)]
        ),
      },
    ],
    yAxis: [
      {
        type: 'value',
        boundaryGap: true,
        show: false,
        scale: true,
      },
    ],
    series: [
      {
        name: '最高气温',
        type: 'line',
        emphasis: {
          focus: 'series',
        },
        lineStyle: {
          color: '#FF8A15',
        },
        itemStyle: {
          color: '#FF8A15',
        },
        data: Array.from({ length: 24 }, () => \`\${mock.Random.integer(18, 29)}\`),
      },
      {
        name: '最低气温',
        type: 'line',
        emphasis: {
          focus: 'series',
        },
        lineStyle: {
          color: '#0091FF',
        },
        itemStyle: {
          color: '#0091FF',
        },
        data: Array.from({ length: 24 }, () => mock.Random.float(9, 17)),
      },
    ],
  })
});
<\/script>

<style lang="less" scoped>
.chart {
  height: 300px;
  background: linear-gradient(90deg, #dde4ff, #fff, #fff, #dde4ff);
}
</style>
`},{highlight:e(()=>[ts]),default:e(()=>[a(j)]),_:1}),cs,a(o,{customClass:"",sourceCode:`<template>
  <div ref="xAxisChartRef" class="chart"></div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useECharts } from '/utils/useECharts';

let chart;
const xAxisChartRef = ref();

onMounted(() => {
  chart = useECharts(xAxisChartRef.value,{
    geo: {
      map: 'china',
      roam: true, // 是否开启放大缩小/拖拽功能
      zoom: 1.2, // 缩放比列
      layoutCenter: ['50%', '50%'], // 地图中心点位置
      layoutSize: '100%',
      label: {
        show: true,
        color: '#fff',
      },
      itemStyle: {
        areaColor: '#12235c',
        borderColor: '#2ab8ff',
        borderWidth: 0.5,
        shadowColor: 'rgba(0,54,255, 0.4)',
        shadowBlur: 100,
      },
      emphasis: {
        //区域激活时的样式
        itemStyle: {
          areaColor: '#02102b',
        },
        label: {
          color: '#fff',
        },
      },
    },
    series: [
      {
        // 带有涟漪特效动画的散点（气泡）图
        type: 'effectScatter',
        coordinateSystem: 'geo',
        showEffectOn: 'render',
        zlevel: 1,
        rippleEffect: {
          number: 3, // 波纹的数量。
          period: 5, // 动画的周期，秒数。
          scale: 17, // 动画中波纹的最大缩放比例。
          brushType: 'fill', // 波纹的绘制方式，可选 'stroke' 和 'fill'。
        },
        symbolSize: 2,
      },
    ],
  })
});
<\/script>

<style lang="less" scoped>
.chart {
  height: 500px;
  background: linear-gradient(90deg, #dde4ff, #fff, #fff, #dde4ff);
}
</style>
`},{highlight:e(()=>[ps]),default:e(()=>[a(O)]),_:1}),a(c)])}}});export{Cs as __pageData,hs as default};
