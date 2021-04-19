import{l as o,f as s,a as e,b as t,c as l,d as n,e as a,g as r,h as c,i,j as u,k as m,r as d,o as f,m as p,n as g,F as x,p as b,q as h,s as v,t as k}from"./vendor.9c54798e.js";!function(o=".",s="__import__"){try{self[s]=new Function("u","return import(u)")}catch(e){const t=new URL(o,location),l=o=>{URL.revokeObjectURL(o.src),o.remove()};self[s]=o=>new Promise(((e,n)=>{const a=new URL(o,t);if(self[s].moduleMap[a])return e(self[s].moduleMap[a]);const r=new Blob([`import * as m from '${a}';`,`${s}.moduleMap['${a}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){n(new Error(`Failed to import: ${o}`)),l(c)},onload(){e(self[s].moduleMap[a]),l(c)}});document.head.appendChild(c)})),self[s].moduleMap={}}}("/assets/");o.add(s,e,t,l,n,a,r,c,i,u,m);const w={name:"Main"},y={class:"flex h-screen items-center"},j={class:"mx-auto sm:grid sm:grid-cols-2 gap-4 items-center select-none"},M=g("div",{class:""},[g("img",{class:"w-52 h-52 mx-auto",src:"/assets/kiki.15694b84.gif"})],-1),L={class:""},$=g("h1",{class:"text-5xl sm:text-6xl font-notosans font-semibold text-darkgrey"}," 나는 키키! ",-1),R=g("h3",{class:"mt-2 font-notosans text-darkgrey text-xl font-medium"}," 웹개발자가 되고싶은 학생 ",-1),U={class:"mt-2"},F={href:"mailto:devkiki7000@gmail.com"},S={href:"https://github.com/kiki7000"},_={href:"https://discord.com/users/758244072573370380"};w.render=function(o,s,e,t,l,n){const a=d("font-awesome-icon");return f(),p("div",y,[g("div",j,[M,g("div",L,[$,R,g("div",U,[g("a",F,[g(a,{class:"text-4xl p-2 rounded-full transition duration-500 ease-in-out transform hover:bg-gray-200",icon:["fas","envelope"]})]),g("a",S,[g(a,{class:"ml-0.5 text-4xl p-2 rounded-full transition duration-500 ease-in-out transform hover:bg-gray-200",icon:["fab","github"]})]),g("a",_,[g(a,{class:"ml-0.5 text-4xl p-2 rounded-full transition duration-500 ease-in-out transform hover:bg-gray-200",icon:["fab","discord"]})])])])])])};const O={name:"Skills",data:()=>({lang:[{icon:"python",color:"blue-500"},{icon:"node-js",color:"green-600"}],frameworks:[{icon:"react",color:"blue-300"},{icon:"vuejs",color:"green-300"},{icon:"bootstrap",color:"purple-500"}],tools:[{icon:"git-alt",color:"black"},{icon:"docker",color:"blue-600"}]})},E={class:"flex h-screen items-center select-none"},N={className:"flex flex-col mx-auto w-4/5 h-4/5"},q=g("h1",{class:"text-3xl font-semibold text-darkgrey"},"Skills",-1),B={class:"pl-4 mt-2 font-semibold"},C=g("h3",{class:"text-lg"},"Languages",-1),P={class:"pl-2 mt-2"},T={class:"pl-4 mt-2 font-semibold"},z=g("h3",{class:"text-lg"},"Frameworks",-1),A={class:"pl-2 mt-2"},D={class:"pl-4 mt-2 font-semibold"},G=g("h3",{class:"text-lg"},"Tools",-1),H={class:"pl-2 mt-2"},I=g("div",{class:"flex-grow"},null,-1),J={class:"ml-4"},K={href:"https://github.com/kiki7000",class:"group cursor-pointer font-bold text-lg"},Q=h("더 보기 ");O.render=function(o,s,e,t,l,n){const a=d("font-awesome-icon");return f(),p("div",E,[g("div",N,[q,g("div",B,[C,g("div",P,[(f(!0),p(x,null,b(l.lang,(o=>(f(),p("button",{class:["text-2xl ml-2 p-1 rounded-full focus:outline-none focus:ring focus:ring-opacity-50",`bg-${o.color}`],key:o},[g(a,{icon:["fab",o.icon],class:"fill-current",style:{color:"white"}},null,8,["icon"])],2)))),128))])]),g("div",T,[z,g("div",A,[(f(!0),p(x,null,b(l.frameworks,(o=>(f(),p("button",{class:["text-2xl ml-2 p-1 rounded-full focus:outline-none focus:ring focus:ring-opacity-50",`bg-${o.color}`],key:o},[g(a,{icon:["fab",o.icon],class:"fill-current",style:{color:"white"}},null,8,["icon"])],2)))),128))])]),g("div",D,[G,g("div",H,[(f(!0),p(x,null,b(l.tools,(o=>(f(),p("button",{class:["text-2xl ml-2 p-1 rounded-full focus:outline-none focus:ring focus:ring-opacity-50",`bg-${o.color}`],key:o},[g(a,{icon:["fab",o.icon],class:"fill-current",style:{color:"white"}},null,8,["icon"])],2)))),128))])]),I,g("div",J,[g("a",K,[Q,g(a,{class:"ml-1 fill-current cursor-pointer transition duration-200 ease-in-out transform group-hover:translate-x-2",icon:["fas","arrow-right"],style:{color:"#1b00b5"}})])])])])};const V={components:{Main:w,Skills:O}},W={className:"overflow-x-hidden"};V.render=function(o,s,e,t,l,n){const a=d("Main"),r=d("Skills");return f(),p("div",W,[g(a),g(r)])},v(V).component("font-awesome-icon",k).mount("#app");