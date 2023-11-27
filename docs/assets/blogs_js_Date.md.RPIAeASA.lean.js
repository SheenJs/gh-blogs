import{d as v,h as m,o as p,c as t,a as D,t as E,F as c,k,E as b,m as A,_ as w,D as M,I as B,R as f}from"./chunks/framework.sj-2qheI.js";import{m as C}from"./chunks/mock.yw7nhh6r.js";import"./chunks/commonjsHelpers.5-cIlDoe.js";function _(n,s){const i=s?new Date(s):new Date,l=i.getFullYear()+"",a=i.getMonth()+1,e=i.getDate(),r=i.getHours(),d=i.getMinutes(),h=i.getSeconds(),g=["日","一","二","三","四","五","六"];return n.replace(/YYYY|yyyy/g,l).replace(/YY|yy/g,l.substr(2,2)).replace(/MM/g,(a<10?"0":"")+a).replace(/DD/g,(e<10?"0":"")+e).replace(/HH|hh/g,(r<10?"0":"")+r).replace(/mm/g,(d<10?"0":"")+d).replace(/ss/g,(h<10?"0":"")+h)+`周${g[i.getDay()]}`}const $=(n=new Date)=>{const s=n.getFullYear(),i=n.getMonth(),l=n.getDate(),a=n.getDay(),e=s%4===0&&s%100!==0||s%400===0?[31,29,31,30,31,30,31,31,30,31,30,31][i]:[31,28,31,30,31,30,31,31,30,31,30,31][i],r=(()=>{const h=new Date(n);return h.setMonth(i),h.setDate(e),6-h.getDay()})(),d=(()=>{const h=new Date(n);h.setMonth(i),h.setDate(1);const g=h.getDay(),u=[];for(let y=0;y<g;y++)h.setDate(h.getDate()-1),u.unshift(h.getDate());return u})();return{year:s,month:i,date:l,week:a,days:e,calendarAfter:r,calendarPrevArr:d}},q=["日","一","二","三","四","五","六"];function o(n){return n>9?n:`0${n}`}function Y(n){const s=new Date(n),i=s.getFullYear(),l=s.getMonth()+1,a=s.getDate(),e=o(s.getHours()),r=o(s.getMinutes());o(s.getSeconds());const d=s.getDay(),h=new Date,g=h.getFullYear(),u=h.getMonth()+1,y=h.getDate(),F=(h.getTime()-s.getTime())/1e3/84e3;return F<1&&y===a&&g===i&&u===l?`${e}:${r}`:F<2&&y-a===1||a-y>27?`昨天 ${e}:${r}`:1<F&&F<=7?`周${q[d]} ${e}:${r}`:F>7&&i===g?`${l}月${a}日`:F>7&&g>i?`${i}年${l}月${a}日`:"在未来"}const x=k("h3",null,"开始时间",-1),P=k("h3",null,"结束时间",-1),H=v({__name:"1",setup(n){const s=new Date("2023-03-01"),i=new Date("2023-07-05"),l=m(_("yyyy-MM-DD",s.setDate(s.getDate()-[6,0,1,2,3,4,5][s.getDay()]))),a=m(_("yyyy-MM-DD",i.setDate(i.getDate()+[0,6,5,4,3,2,1][i.getDay()])));return(e,r)=>(p(),t(c,null,[x,D(" "+E(l.value)+" ",1),P,D(" "+E(a.value),1)],64))}}),T={class:"calendar"},N={class:"calendar-week"},S={class:"calendar-main"},V={class:"currentMonth-day"},I={class:"after-day"},R=v({__name:"2",setup(n){const s=m($());return(i,l)=>(p(),t("div",T,[k("div",N,[(p(!0),t(c,null,b(A(q),a=>(p(),t("div",{class:"week-item",key:a},E(a),1))),128))]),k("div",S,[(p(!0),t(c,null,b(s.value.calendarPrevArr,a=>(p(),t("div",{class:"prev-day",key:a},E(a),1))),128)),(p(!0),t(c,null,b(s.value.days,a=>(p(),t("div",V,E(a),1))),256)),(p(!0),t(c,null,b(s.value.calendarAfter,a=>(p(),t("div",I,E(a),1))),256))])]))}}),j=w(R,[["__scopeId","data-v-227d86ae"]]);function Z(){const n=[];for(let s=0;s<50;s++){const i=C.mock("@cname");n.push({img:C.Random.image("200x200",C.mock("@color"),i.substring(0,1)),name:i,content:C.mock("@cparagraph"),time:new Date().setDate(new Date().getDate()+C.Random.integer(-20,20))})}return n}const J={class:"container"},O={class:"item"},z=["src"],G={class:"item-right"},L={class:"item-right-top"},W={style:{color:"red"}},K={class:"content"},Q=v({__name:"3",setup(n){const s=m(Z());return(i,l)=>(p(),t("div",J,[(p(!0),t(c,null,b(s.value,({name:a,time:e,img:r,content:d})=>(p(),t("div",O,[k("img",{src:r},null,8,z),k("div",G,[k("div",L,[k("div",null,E(a),1),k("span",null,[D(E(A(_)("yyyy-MM-DD hh:mm",e))+" | ",1),k("span",W,E(A(Y)(e)),1)])]),k("div",K,E(d),1)])]))),256))]))}}),U=w(Q,[["__scopeId","data-v-271654a5"]]),X=f("",10),ss=k("h2",{id:"计算日历月",tabindex:"-1"},[D("计算日历月 "),k("a",{class:"header-anchor",href:"#计算日历月","aria-label":'Permalink to "计算日历月"'},"​")],-1),is=k("h3",{id:"前言-1",tabindex:"-1"},[D("前言 "),k("a",{class:"header-anchor",href:"#前言-1","aria-label":'Permalink to "前言"'},"​")],-1),as=k("blockquote",null,[k("p",null,"之前尝试过用js实现日历,记录一下")],-1),ns=f("",6),hs=f("",1),es=JSON.parse('{"title":"date对象","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/js/Date.md","filePath":"blogs/js/Date.md"}'),ks={name:"blogs/js/Date.md"},rs=Object.assign(ks,{setup(n){return(s,i)=>{const l=M("git-talk");return p(),t("div",null,[X,B(H),ss,is,as,B(j),ns,B(U),hs,B(l)])}}});export{es as __pageData,rs as default};