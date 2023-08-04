import{a as C,_ as f}from"./demo.5d1a0931.js";import{a as i,_ as E,b}from"./index.0822bdaa.js";import{d,D as F,o as _,c as p,b as t,F as m,a as s,w as V,i as h,g as $,e as A}from"./plugin-vueexport-helper.e98510c0.js";const U=s("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),y=d({__name:"Base",setup(c){const u=F({text:""});return(a,e)=>{const o=i;return _(),p(m,null,[U,t(o,{modelValue:u.text,"onUpdate:modelValue":e[0]||(e[0]=l=>u.text=l),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C"},null,8,["modelValue"])],64)}}}),D=s("h2",null,"\u81EA\u5B9A\u4E49\u7C7B\u578B",-1),v=d({__name:"CustomType",setup(c){const u=F({text:"",password:"",number:"",digit:"",tel:""});return(a,e)=>{const o=i;return _(),p(m,null,[D,t(o,{modelValue:u.text,"onUpdate:modelValue":e[0]||(e[0]=l=>u.text=l),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C","max-length":"6"},null,8,["modelValue"]),t(o,{modelValue:u.password,"onUpdate:modelValue":e[1]||(e[1]=l=>u.password=l),type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"]),t(o,{modelValue:u.number,"onUpdate:modelValue":e[2]||(e[2]=l=>u.number=l),type:"number",decimal:"2","pad-zero":"",placeholder:"\u8BF7\u8F93\u5165\u6570\u5B57\uFF08\u652F\u6301\u5C0F\u6570\u3001\u7CBE\u5EA6\u63A7\u5236\u3001\u81EA\u52A8\u88650\uFF09"},null,8,["modelValue"]),t(o,{modelValue:u.digit,"onUpdate:modelValue":e[3]||(e[3]=l=>u.digit=l),type:"digit",placeholder:"\u8BF7\u8F93\u5165\u6574\u6570"},null,8,["modelValue"]),t(o,{modelValue:u.tel,"onUpdate:modelValue":e[4]||(e[4]=l=>u.tel=l),type:"tel",placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},null,8,["modelValue"])],64)}}}),w=s("h2",null,"\u663E\u793A\u6E05\u9664\u56FE\u6807",-1),k=d({__name:"Clearable",setup(c){const u=F({text:"",text2:"",text3:""});return(a,e)=>{const o=i,l=C;return _(),p(m,null,[w,t(o,{modelValue:u.text,"onUpdate:modelValue":e[0]||(e[0]=n=>u.text=n),placeholder:"\u663E\u793A\u6E05\u9664\u56FE\u6807",clearable:""},null,8,["modelValue"]),t(o,{modelValue:u.text2,"onUpdate:modelValue":e[1]||(e[1]=n=>u.text2=n),placeholder:"\u59CB\u7EC8\u663E\u793A\u6E05\u9664\u56FE\u6807","show-clear-icon-always":""},null,8,["modelValue"]),t(o,{modelValue:u.text3,"onUpdate:modelValue":e[2]||(e[2]=n=>u.text3=n),placeholder:"\u81EA\u5B9A\u4E49\u6E05\u9664\u56FE\u6807",clearable:""},{clear:V(()=>[t(l,{name:"close"})]),_:1},8,["modelValue"])],64)}}}),z=s("h2",null,"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9",-1),I=d({__name:"Formatter",setup(c){const u=F({text:"",text2:""}),a=e=>e.replace(/(\d{4})(?=\d)/g,"$1 ");return(e,o)=>{const l=i;return _(),p(m,null,[z,t(l,{modelValue:u.text,"onUpdate:modelValue":o[0]||(o[0]=n=>u.text=n),placeholder:"\u94F6\u884C\u5361\u56DB\u4F4D\u5206\u9694\uFF08\u5728\u8F93\u5165\u65F6\u6267\u884C\u683C\u5F0F\u5316\uFF09","max-length":"19",type:"digit",formatter:a},null,8,["modelValue"]),t(l,{modelValue:u.text2,"onUpdate:modelValue":o[1]||(o[1]=n=>u.text2=n),placeholder:"\u94F6\u884C\u5361\u56DB\u4F4D\u5206\u9694\uFF08\u5728\u5931\u7126\u65F6\u6267\u884C\u683C\u5F0F\u5316\uFF09",type:"digit","max-length":"19","format-trigger":"onBlur",formatter:a},null,8,["modelValue"])],64)}}}),N=s("h2",null,"\u7981\u7528\u548C\u53EA\u8BFB",-1),R=d({__name:"Readonly",setup(c){const u=F({readonly:"\u8F93\u5165\u6846\u53EA\u8BFB",disabled:"\u8F93\u5165\u6846\u5DF2\u7981\u7528"});return(a,e)=>{const o=i;return _(),p(m,null,[N,t(o,{modelValue:u.readonly,"onUpdate:modelValue":e[0]||(e[0]=l=>u.readonly=l),placeholder:"\u8F93\u5165\u6846\u53EA\u8BFB",readonly:""},null,8,["modelValue"]),t(o,{modelValue:u.disabled,"onUpdate:modelValue":e[1]||(e[1]=l=>u.disabled=l),placeholder:"\u8F93\u5165\u6846\u5DF2\u7981\u7528",disabled:""},null,8,["modelValue"])],64)}}}),T=s("h2",null,"\u5BF9\u9F50\u65B9\u5F0F",-1),q=d({__name:"InputAlign",setup(c){const u=F({text:"",text2:""});return(a,e)=>{const o=i;return _(),p(m,null,[T,t(o,{modelValue:u.text,"onUpdate:modelValue":e[0]||(e[0]=l=>u.text=l),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C"},null,8,["modelValue"]),t(o,{modelValue:u.text2,"onUpdate:modelValue":e[1]||(e[1]=l=>u.text2=l),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C","input-align":"right",clearable:""},null,8,["modelValue"])],64)}}}),M=s("h2",null,"\u4E8B\u4EF6\u6F14\u793A",-1),S=d({__name:"Event",setup(c){const u=F({text:""}),a=()=>{console.log("onClear")},e=()=>{console.log("onFocus")},o=()=>{console.log("onBlur")},l=n=>{console.log("onInput",n.target.value)};return(n,r)=>{const B=i;return _(),p(m,null,[M,t(B,{modelValue:u.text,"onUpdate:modelValue":r[0]||(r[0]=x=>u.text=x),placeholder:"\u4E8B\u4EF6\u6F14\u793A",clearable:"",onClear:a,onFocus:e,onBlur:o,onInput:l},null,8,["modelValue"])],64)}}}),j=s("h2",null,"\u7EC4\u4EF6\u66B4\u9732\u7684\u65B9\u6CD5",-1),G={class:"button-group"},H=d({__name:"Method",setup(c){const u=F({text:""}),a=h(),e=()=>{var n;(n=a.value)==null||n.focus()},o=()=>{var n;(n=a.value)==null||n.blur()},l=()=>{var n;(n=a.value)==null||n.select()};return(n,r)=>{const B=i,x=f;return _(),p(m,null,[j,t(B,{modelValue:u.text,"onUpdate:modelValue":r[0]||(r[0]=g=>u.text=g),placeholder:"\u8BF7\u8F93\u5165\u6587\u672C",ref_key:"inputRef",ref:a},null,8,["modelValue"]),s("div",G,[t(x,{text:"\u83B7\u5F97\u7126\u70B9",size:"small",onClick:e}),t(x,{text:"\u5931\u53BB\u7126\u70B9",size:"small",onClick:o}),t(x,{text:"\u9009\u62E9\u6587\u672C",size:"small",onClick:l})])],64)}}}),J=s("h2",null,"\u63D2\u69FD\u6F14\u793A",-1),K=d({__name:"Slots",setup(c){const u=F({text:""});return(a,e)=>{const o=C,l=f,n=i;return _(),p(m,null,[J,t(n,{modelValue:u.text,"onUpdate:modelValue":e[0]||(e[0]=r=>u.text=r),placeholder:"\u63D2\u69FD\u6F14\u793A"},{left:V(()=>[t(o,{name:"question-circle"})]),right:V(()=>[t(l,{type:"danger",text:"\u83B7\u53D6\u9A8C\u8BC1\u7801",size:"small"})]),_:1},8,["modelValue"])],64)}}}),L=s("h2",null,"\u914D\u5408\u8868\u5355\u4F7F\u7528",-1),O=d({__name:"Form",setup(c){const u=F({username:"",password:""});return(a,e)=>{const o=i,l=b,n=E;return _(),p(m,null,[L,t(n,null,{default:V(()=>[t(l,{title:"\u7528\u6237\u540D",prop:"username","title-align":"right"},{default:V(()=>[t(o,{modelValue:u.username,"onUpdate:modelValue":e[0]||(e[0]=r=>u.username=r),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},null,8,["modelValue"])]),_:1}),t(l,{title:"\u5BC6\u7801",prop:"password","title-align":"right",border:!1},{default:V(()=>[t(o,{modelValue:u.password,"onUpdate:modelValue":e[1]||(e[1]=r=>u.password=r),placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},null,8,["modelValue"])]),_:1})]),_:1})],64)}}}),P={class:"demo demo-input"},Y=d({__name:"index",setup(c){return(u,a)=>{const e=$("nav-bar");return _(),p(m,null,[t(e,null,{default:V(()=>[A("Input")]),_:1}),s("form",P,[t(y),t(v),t(k),t(I),t(R),t(q),t(S),t(H),t(K),t(O)])],64)}}});export{Y as default};
