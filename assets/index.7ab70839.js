import{d as r,h as d,o as v,c as E,b as o,a as n,t as _,F as D,g as x,w as F,e as A}from"./_plugin-vue_export-helper.cbc82318.js";const V=n("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),f={class:"fs-12"},b=r({__name:"Base",setup(h){const i=d([{text:"\u676D\u5DDE",value:"Hangzhou"},{text:"\u5B81\u6CE2",value:"Ningbo"},{text:"\u6E29\u5DDE",value:"Wenzhou"},{text:"\u7ECD\u5174",value:"Shaoxing"},{text:"\u6E56\u5DDE",value:"Huzhou"}]),u=d(""),l=e=>{console.log(e)},s=e=>{console.log(e)},m=e=>{console.log(e)};return(e,t)=>{const a=x("r-select");return v(),E(D,null,[V,o(a,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=c=>u.value=c),placeholder:"\u8BF7\u9009\u62E9",columns:i.value,onConfirm:l,onCancel:s,onChange:m},null,8,["modelValue","columns"]),n("div",f,_(u.value),1)],64)}}}),$=n("h2",null,"\u6307\u5B9A\u6839\u8282\u70B9",-1),z={class:"fs-12"},B=r({__name:"Teleport",setup(h){const i=d([{text:"\u676D\u5DDE",value:"Hangzhou"},{text:"\u5B81\u6CE2",value:"Ningbo"},{text:"\u6E29\u5DDE",value:"Wenzhou"},{text:"\u7ECD\u5174",value:"Shaoxing"},{text:"\u6E56\u5DDE",value:"Huzhou"}]),u=d("Shaoxing"),l=e=>{console.log(e)},s=e=>{console.log(e)},m=e=>{console.log(e)};return(e,t)=>{const a=x("r-select");return v(),E(D,null,[$,o(a,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=c=>u.value=c),teleport:"body",columns:i.value,onConfirm:l,onCancel:s,onChange:m},null,8,["modelValue","columns"]),n("div",z,_(u.value),1)],64)}}}),H=n("h2",null,"\u591A\u5217\u9009\u62E9",-1),S={class:"fs-12"},U=r({__name:"Multiple",setup(h){const i=[[{text:"\u5468\u4E00",value:"Monday"},{text:"\u5468\u4E8C",value:"Tuesday"},{text:"\u5468\u4E09",value:"Wednesday"},{text:"\u5468\u56DB",value:"Thursday"},{text:"\u5468\u4E94",value:"Friday"}],[{text:"\u4E0A\u5348",value:"Morning"},{text:"\u4E0B\u5348",value:"Afternoon"},{text:"\u665A\u4E0A",value:"Evening"}]],u=d("Wednesday_Afternoon"),l=e=>{console.log(e)},s=e=>{console.log(e)},m=e=>{console.log(e)};return(e,t)=>{const a=x("r-select");return v(),E(D,null,[H,o(a,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=c=>u.value=c),"value-separator":"_","text-separator":"/",columns:i,onConfirm:l,onCancel:s,onChange:m},null,8,["modelValue"]),n("div",S,_(u.value),1)],64)}}}),T=n("h2",null,"\u7EA7\u8054\u9009\u62E9",-1),W={class:"fs-12"},j=r({__name:"Cascade",setup(h){const i=[{text:"\u6D59\u6C5F",value:"Zhejiang",children:[{text:"\u676D\u5DDE",value:"Hangzhou",children:[{text:"\u897F\u6E56\u533A",value:"Xihu",disabled:!0},{text:"\u4F59\u676D\u533A",value:"Yuhang"}]},{text:"\u6E29\u5DDE",value:"Wenzhou",children:[{text:"\u9E7F\u57CE\u533A",value:"Lucheng"},{text:"\u74EF\u6D77\u533A",value:"Ouhai"}]}]},{text:"\u798F\u5EFA",value:"Fujian",children:[{text:"\u798F\u5DDE",value:"Fuzhou",children:[{text:"\u9F13\u697C\u533A",value:"Gulou"},{text:"\u53F0\u6C5F\u533A",value:"Taijiang"}]},{text:"\u53A6\u95E8",value:"Xiamen",children:[{text:"\u601D\u660E\u533A",value:"Siming"},{text:"\u6D77\u6CA7\u533A",value:"Haicang"}]}]}],u=d("Fujian_Xiamen_Haicang"),l=e=>{console.log(e)},s=e=>{console.log(e)},m=e=>{console.log(e)};return(e,t)=>{const a=x("r-select");return v(),E(D,null,[T,o(a,{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=c=>u.value=c),"value-separator":"_","text-separator":"/",columns:i,onConfirm:l,onCancel:s,onChange:m},null,8,["modelValue"]),n("div",W,_(u.value),1)],64)}}}),M=n("h2",null,"\u81EA\u5B9A\u4E49 Columns \u7684\u7ED3\u6784",-1),O={class:"fs-12"},X=r({__name:"CustomColumns",setup(h){const i=[{cityName:"\u6D59\u6C5F",cities:[{cityName:"\u676D\u5DDE",cities:[{cityName:"\u897F\u6E56\u533A",cityClassName:"custom-classname",cityDisabled:!0},{cityName:"\u4F59\u676D\u533A"}]},{cityName:"\u6E29\u5DDE",cities:[{cityName:"\u9E7F\u57CE\u533A"},{cityName:"\u74EF\u6D77\u533A"}]}]},{cityName:"\u798F\u5EFA",cities:[{cityName:"\u798F\u5DDE",cities:[{cityName:"\u9F13\u697C\u533A"},{cityName:"\u53F0\u6C5F\u533A"}]},{cityName:"\u53A6\u95E8",cities:[{cityName:"\u601D\u660E\u533A"},{cityName:"\u6D77\u6CA7\u533A"}]}]}],u={text:"cityName",value:"cityName",children:"cities",className:"cityClassName",disabled:"cityDisabled"},l=d("\u798F\u5EFA_\u53A6\u95E8_\u601D\u660E\u533A"),s=t=>{console.log(t)},m=t=>{console.log(t)},e=t=>{console.log(t)};return(t,a)=>{const c=x("r-select");return v(),E(D,null,[M,o(c,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=g=>l.value=g),"value-separator":"_","text-separator":"/",columns:i,"columns-field-names":u,onConfirm:s,onCancel:m,onChange:e},null,8,["modelValue"]),n("div",O,_(l.value),1)],64)}}}),k=n("h2",null,"\u5E73\u94FA\u663E\u793A",-1),w={class:"fs-12 mb-10"},J={class:"fs-12 mb-10"},L={class:"fs-12"},Z=r({__name:"Tile",setup(h){const i=[{text:"\u676D\u5DDE",value:"Hangzhou"},{text:"\u5B81\u6CE2",value:"Ningbo"}],u=d("Hangzhou"),l=[{text:"\u676D\u5DDE",value:"Hangzhou"},{text:"\u5B81\u6CE2",value:"Ningbo",disabled:!0},{text:"\u6E29\u5DDE",value:"Wenzhou"},{text:"\u7ECD\u5174",value:"Shaoxing"},{text:"\u6E56\u5DDE",value:"Huzhou"},{text:"\u5609\u5174",value:"Jiaxing"},{text:"\u91D1\u534E",value:"Jinhua"},{text:"\u8862\u5DDE",value:"Quzhou"},{text:"\u821F\u5C71",value:"Zhoushan"},{text:"\u53F0\u5DDE",value:"Taizhou"},{text:"\u4E3D\u6C34",value:"Lishui"}],s=d("Shaoxing"),m=[{cityName:"\u676D\u5DDE"},{cityName:"\u5B81\u6CE2"},{cityName:"\u6E29\u5DDE"},{cityName:"\u7ECD\u5174"},{cityName:"\u6E56\u5DDE"}],e=d("\u7ECD\u5174"),t={text:"cityName",value:"cityName",children:"cities",className:"cityClassName",disabled:"cityDisabled"},a=p=>{console.log("confirm",p)},c=p=>{console.log(p)},g=p=>{console.log("change",p)};return(p,C)=>{const y=x("r-select");return v(),E(D,null,[k,o(y,{modelValue:u.value,"onUpdate:modelValue":C[0]||(C[0]=N=>u.value=N),type:"tile",columns:i,onConfirm:a,onCancel:c,onChange:g},null,8,["modelValue"]),n("div",w,_(u.value),1),o(y,{modelValue:s.value,"onUpdate:modelValue":C[1]||(C[1]=N=>s.value=N),type:"tile",columns:l,onConfirm:a,onCancel:c,onChange:g},null,8,["modelValue"]),n("div",J,_(s.value),1),o(y,{modelValue:e.value,"onUpdate:modelValue":C[2]||(C[2]=N=>e.value=N),type:"tile",columns:m,"columns-field-names":t,onConfirm:a,onCancel:c,onChange:g},null,8,["modelValue"]),n("div",L,_(e.value),1)],64)}}}),G={class:"demo demo-select"},Y=r({__name:"index",setup(h){return(i,u)=>{const l=x("nav-bar");return v(),E(D,null,[o(l,null,{default:F(()=>[A("Select")]),_:1}),n("div",G,[o(b),o(B),o(U),o(j),o(X),o(Z)])],64)}}});export{Y as default};
