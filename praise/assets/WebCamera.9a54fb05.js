import{d as b,i as _,e as k,X as f,r as i,Y as h,af as z,b as m,ag as C,p as M,h as o,ah as S,o as j,c as W,a as s,y as l,n as H,A as $}from"./index.a1d44a30.js";import{r as B}from"./recording.889753cd.js";const A=b({__name:"WebCamera",setup(D){_(k);const e=f("slidev-webcam-size",Math.round(Math.min(window.innerHeight,window.innerWidth/8))),a=f("slidev-webcam-pos",{x:window.innerWidth-e.value-30,y:window.innerHeight-e.value-30},void 0,{deep:!0}),d=i(),u=i(),r=i(),{streamCamera:c,showAvatar:w}=B,{style:p}=h(d,{initialValue:a,onMove({x:t,y:n}){a.value.x=t,a.value.y=n}}),{isDragging:y}=h(u,{onMove({x:t,y:n}){e.value=Math.max(10,Math.min(t-a.value.x,n-a.value.y)/.8536)}});z(()=>{r.value&&(r.value.srcObject=c.value)},{flush:"post"});const g=m(()=>({width:`${e.value}px`,height:`${e.value}px`})),x=m(()=>({width:"14px",height:"14px",top:`${e.value*.8536-7}px`,left:`${e.value*.8536-7}px`,cursor:"nwse-resize"}));function v(){a.value.x>=window.innerWidth&&(a.value.x=window.innerWidth-e.value-30),a.value.y>=window.innerHeight&&(a.value.y=window.innerHeight-e.value-30)}return C("resize",v),M(v),(t,n)=>o(c)&&o(w)&&o(S)!=="none"?(j(),W("div",{key:0,class:"fixed z-10",style:l(o(p))},[s("div",{ref_key:"frame",ref:d,class:"rounded-full shadow bg-gray-400 bg-opacity-10 overflow-hidden object-cover",style:l(o(g))},[s("video",{ref_key:"video",ref:r,autoplay:"",muted:"",volume:"0",class:"object-cover min-w-full min-h-full rounded-full",style:{transform:"rotateY(180deg)"}},null,512)],4),s("div",{ref_key:"handler",ref:u,class:H(["absolute bottom-0 right-0 rounded-full bg-main shadow opacity-0 shadow z-30 hover:opacity-100 dark:border dark:border-true-gray-700",o(y)?"!opacity-100":""]),style:l(o(x))},null,6)],4)):$("v-if",!0)}});export{A as default};