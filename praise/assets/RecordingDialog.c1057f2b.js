import{_ as V,a as k}from"./DevicesList.vue_vue_type_script_setup_true_lang.580a3f24.js";import{d as C,i as R,e as w,an as N,o as u,g as T,z as B,a as e,x as m,ao as r,a9 as p,ap as D,h as t,B as n,aq as E,t as _,c as M,A as S,ar as U,al as $}from"./index.964960e5.js";import{r as j,a as i,b as s,g as f,m as c}from"./recording.54fe589b.js";const z={class:"flex gap-2 text-xl"},q={class:"grid grid-cols-2 gap-4"},A={class:"flex flex-col gap-2 py-2"},F={class:"form-text"},G=e("label",{for:"title"},"Recording Name",-1),H=e("div",{class:"text-xs w-full opacity-50 py-2"},[e("div",null,[r("This will be used in the output filename that might "),e("br"),r("help you better organize your recording chips.")])],-1),I={class:"form-check"},J={class:"text-xs w-full opacity-50"},K=e("div",{class:"mt-2 opacity-50"}," Enumerated filenames ",-1),L={class:"font-mono"},O={key:0,class:"font-mono"},P=e("div",{class:"flex-auto"},null,-1),Z=C({__name:"RecordingDialog",props:{modelValue:{default:!1}},setup(v,{emit:x}){const g=v;R(w);const l=N(g,"modelValue",x),{startRecording:y}=j;function d(){l.value=!1}async function h(){d(),await $(),y({mimeType:c.value})}return(Q,a)=>{const b=k;return u(),T(U,{modelValue:t(l),"onUpdate:modelValue":a[3]||(a[3]=o=>n(l)?l.value=o:null),class:"px-6 py-4 recording-dialog flex flex-col gap-2"},{default:B(()=>[e("div",z,[m(b,{class:"my-auto"}),r("Recording ")]),e("div",q,[e("div",A,[e("div",F,[G,p(e("input",{"onUpdate:modelValue":a[0]||(a[0]=o=>n(i)?i.value=o:null),class:"bg-transparent text-current",name:"title",type:"text",placeholder:"Enter the title..."},null,512),[[D,t(i)]]),H]),e("div",I,[p(e("input",{"onUpdate:modelValue":a[1]||(a[1]=o=>n(s)?s.value=o:null),name:"record-camera",type:"checkbox"},null,512),[[E,t(s)]]),e("label",{for:"record-camera",onClick:a[2]||(a[2]=o=>s.value=!t(s))},"Record camera separately")]),e("div",J,[K,e("div",L,_(t(f)("screen",t(c))),1),t(s)?(u(),M("div",O,_(t(f)("camera",t(c))),1)):S("v-if",!0)])]),m(V)]),e("div",{class:"flex my-1"},[e("button",{class:"cancel",onClick:d}," Cancel "),P,e("button",{onClick:h}," Start ")])]),_:1},8,["modelValue"])}}});export{Z as default};