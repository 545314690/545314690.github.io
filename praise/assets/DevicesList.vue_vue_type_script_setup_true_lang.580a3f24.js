import{o as u,c as v,a as h,d as f,i as y,e as x,b as c,x as p,h as a,ag as l,B as o,as as n,aj as i,g as C,A as g}from"./index.964960e5.js";import{c as B,d as M,s as I,e as L,f as N,m}from"./recording.54fe589b.js";const b={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k=h("path",{fill:"currentColor",d:"M21 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h17a2 2 0 0 1 2 2v4.06l5.42-3.87A1 1 0 0 1 30 9v14a1 1 0 0 1-1.58.81L23 19.94V24a2 2 0 0 1-2 2ZM4 8v16h17v-6a1 1 0 0 1 1.58-.81L28 21.06V10.94l-5.42 3.87A1 1 0 0 1 21 14V8Z"},null,-1),T=[k];function U(_,d){return u(),v("svg",b,T)}const D={name:"carbon-video",render:U},j={class:"text-sm"},E=f({__name:"DevicesList",setup(_){y(x);const d=c(()=>[{value:"none",display:"None"},...B.value.map(e=>({value:e.deviceId,display:e.label}))]),V=c(()=>[{value:"none",display:"None"},...M.value.map(e=>({value:e.deviceId,display:e.label}))]),r=I.map(e=>({value:e,display:L[e].toUpperCase()}));return N(),(e,s)=>(u(),v("div",j,[p(n,{modelValue:a(l),"onUpdate:modelValue":s[0]||(s[0]=t=>o(l)?l.value=t:null),title:"Camera",items:a(d)},null,8,["modelValue","items"]),p(n,{modelValue:a(i),"onUpdate:modelValue":s[1]||(s[1]=t=>o(i)?i.value=t:null),title:"Microphone",items:a(V)},null,8,["modelValue","items"]),a(r).length?(u(),C(n,{key:0,modelValue:a(m),"onUpdate:modelValue":s[2]||(s[2]=t=>o(m)?m.value=t:null),title:"mimeType",items:a(r)},null,8,["modelValue","items"])):g("v-if",!0)]))}});export{E as _,D as a};