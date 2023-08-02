import{d as A,D as C,i as B,o as D,c as b,b as e,w as a,F as y,a as v,g as m,e as E,r as h,v as q}from"./plugin-vueexport-helper.26ce5e75.js";const R=v("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),T=A({__name:"Base",setup(x){const u=C({name:"",age:"",password:"",mail:""}),g=C({name:[{required:!0,message:"name cannot be empty"},{validator:t=>!/\d+/.test(t),message:"\u59D3\u540D\u4E2D\u4E0D\u80FD\u6709\u6570\u5B57"}],age:[{required:!0,message:"\u8BF7\u586B\u5199\u5E74\u9F84"},{pattern:/^(\d{1,2}|1\d{2}|200)$/,message:"\u5FC5\u987B\u8F93\u51650-200\u533A\u95F4"},{validator:t=>/^[^0]/.test(t),message:"\u4E0D\u80FD\u4EE5 0 \u5F00\u5934"}],mail:[{required:!0,message:"Mailbox cannot be empty"},{validator:t=>new Promise(n=>{setTimeout(()=>{n(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(t))},1e3)}),message:"Incorrect email format"}]}),d=B(),_=B(!1),i=()=>{d.value.validate().then(t=>{t.valid?(console.log("getValue:",d.value.getValue()),console.log("getJsonValue",d.value.getJsonValue()),console.log("getSerializeValue",d.value.getSerializeValue())):console.log("error submit!!",t)})},o=()=>{d.value.reset()},f=t=>{_.value=t};return(t,n)=>{const s=m("r-input"),l=m("r-form-item"),F=m("r-button"),c=m("r-form");return D(),b(y,null,[R,e(c,{model:u,rules:g,ref_key:"formRef",ref:d,onComplete:f},{default:a(()=>[e(l,{title:"\u59D3\u540D",prop:"name"},{default:a(()=>[e(s,{modelValue:u.name,"onUpdate:modelValue":n[0]||(n[0]=r=>u.name=r),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1}),e(l,{title:"\u5E74\u9F84",prop:"age"},{default:a(()=>[e(s,{modelValue:u.age,"onUpdate:modelValue":n[1]||(n[1]=r=>u.age=r),type:"digit",placeholder:"\u8BF7\u8F93\u5165\u5E74\u9F84"},null,8,["modelValue"])]),_:1}),e(l,{title:"\u5BC6\u7801",prop:"password"},{default:a(()=>[e(s,{modelValue:u.password,"onUpdate:modelValue":n[2]||(n[2]=r=>u.password=r),type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF0C\u975E\u5FC5\u586B\u9879"},null,8,["modelValue"])]),_:1}),e(l,{title:"\u90AE\u7BB1",prop:"mail"},{default:a(()=>[e(s,{modelValue:u.mail,"onUpdate:modelValue":n[3]||(n[3]=r=>u.mail=r),type:"email",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\uFF0C\u5F02\u6B65\u6821\u9A8C"},null,8,["modelValue"])]),_:1}),e(l,{border:!1,class:"button-group"},{default:a(()=>[e(F,{type:"primary",size:"small",disabled:!_.value,onClick:i},{default:a(()=>[E("Submit")]),_:1},8,["disabled"]),e(F,{size:"small",onClick:o},{default:a(()=>[E("Reset")]),_:1})]),_:1})]),_:1},8,["model","rules"])],64)}}}),Z=v("h2",null,"\u57FA\u7840\u7528\u6CD5\u4E8C",-1),J=A({__name:"Base2",setup(x){const u=C({name:"",age:"",password:"",mail:""}),g=C({name:[{required:!0,message:"name cannot be empty"},{validator:t=>!/\d+/.test(t),message:"\u59D3\u540D\u4E2D\u4E0D\u80FD\u6709\u6570\u5B57"}],age:[{required:!0,message:"\u8BF7\u586B\u5199\u5E74\u9F84"},{pattern:/^(\d{1,2}|1\d{2}|200)$/,message:"\u5FC5\u987B\u8F93\u51650-200\u533A\u95F4"},{validator:t=>/^[^0]/.test(t),message:"\u4E0D\u80FD\u4EE5 0 \u5F00\u5934"}],mail:[{required:!0,message:"Mailbox cannot be empty"},{validator:t=>new Promise(n=>{setTimeout(()=>{n(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(t))},1e3)}),message:"Incorrect email format"}]}),d=B(),_=B(!1),i=()=>{d.value.validate().then(t=>{t.valid?(console.log("getValue:",d.value.getValue()),console.log("getJsonValue",d.value.getJsonValue()),console.log("getSerializeValue",d.value.getSerializeValue())):console.log("error submit!!",t)})},o=()=>{d.value.reset()},f=t=>{_.value=t};return(t,n)=>{const s=m("r-input"),l=m("r-form-item"),F=m("r-button"),c=m("r-form");return D(),b(y,null,[Z,e(c,{ref_key:"formRef",ref:d,onComplete:f},{default:a(()=>[e(l,{title:"\u59D3\u540D",prop:"name",rules:g.name,modelValue:u.name,"onUpdate:modelValue":n[1]||(n[1]=r=>u.name=r)},{default:a(()=>[e(s,{modelValue:u.name,"onUpdate:modelValue":n[0]||(n[0]=r=>u.name=r),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1},8,["rules","modelValue"]),e(l,{title:"\u5E74\u9F84",prop:"age",rules:g.age,modelValue:u.age,"onUpdate:modelValue":n[3]||(n[3]=r=>u.age=r)},{default:a(()=>[e(s,{modelValue:u.age,"onUpdate:modelValue":n[2]||(n[2]=r=>u.age=r),type:"digit",placeholder:"\u8BF7\u8F93\u5165\u5E74\u9F84"},null,8,["modelValue"])]),_:1},8,["rules","modelValue"]),e(l,{title:"\u5BC6\u7801",prop:"password",modelValue:u.password,"onUpdate:modelValue":n[5]||(n[5]=r=>u.password=r)},{default:a(()=>[e(s,{modelValue:u.password,"onUpdate:modelValue":n[4]||(n[4]=r=>u.password=r),type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF0C\u975E\u5FC5\u586B\u9879"},null,8,["modelValue"])]),_:1},8,["modelValue"]),e(l,{title:"\u90AE\u7BB1",prop:"mail",rules:g.mail,modelValue:u.mail,"onUpdate:modelValue":n[7]||(n[7]=r=>u.mail=r)},{default:a(()=>[e(s,{modelValue:u.mail,"onUpdate:modelValue":n[6]||(n[6]=r=>u.mail=r),type:"email",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\uFF0C\u5F02\u6B65\u6821\u9A8C"},null,8,["modelValue"])]),_:1},8,["rules","modelValue"]),e(l,{border:!1,class:"button-group"},{default:a(()=>[e(F,{type:"primary",size:"small",disabled:!_.value,onClick:i},{default:a(()=>[E("Submit")]),_:1},8,["disabled"]),e(F,{size:"small",onClick:o},{default:a(()=>[E("Reset")]),_:1})]),_:1})]),_:1},512)],64)}}}),I=v("h2",null,"\u975E\u7A7A\u6821\u9A8C\u3001\u5FC5\u586B*\u53F7\u3001\u6E05\u9664\u6309\u94AE\u3001\u5355\u4E2A\u8868\u5355\u9879\u9A8C\u8BC1",-1),L=A({__name:"NotEmptyVerify",setup(x){const u=C({name:"",age:"",password:"",mail:""}),V=B(),g=()=>{V.value.validate().then(i=>{if(i.valid)console.log("getValue:",V.value.getValue()),console.log("getJsonValue",V.value.getJsonValue()),console.log("getSerializeValue",V.value.getSerializeValue());else return console.log("error submit!!",i),!1})},d=()=>{V.value.reset()},_=i=>{V.value.validate(i).then(o=>{console.log("validateField",o)})};return(i,o)=>{const f=m("r-input"),t=m("r-form-item"),n=m("r-button"),s=m("r-form");return D(),b(y,null,[I,e(s,{ref_key:"formRef",ref:V,required:"","show-star":"","title-align":"right",clearable:""},{default:a(()=>[e(t,{title:"\u59D3\u540D",prop:"name",modelValue:u.name,"onUpdate:modelValue":o[2]||(o[2]=l=>u.name=l)},{default:a(()=>[e(f,{modelValue:u.name,"onUpdate:modelValue":o[0]||(o[0]=l=>u.name=l),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D\uFF0Cblur\u4E8B\u4EF6\u6821\u9A8C",onBlur:o[1]||(o[1]=l=>_("name"))},null,8,["modelValue"])]),_:1},8,["modelValue"]),e(t,{title:"\u5E74\u9F84",prop:"age",modelValue:u.age,"onUpdate:modelValue":o[4]||(o[4]=l=>u.age=l),required:!1},{default:a(()=>[e(f,{modelValue:u.age,"onUpdate:modelValue":o[3]||(o[3]=l=>u.age=l),type:"digit",placeholder:"\u8BF7\u8F93\u5165\u5E74\u9F84\uFF0C\u975E\u5FC5\u586B\u9879"},null,8,["modelValue"])]),_:1},8,["modelValue"]),e(t,{title:"\u5BC6\u7801",prop:"password",modelValue:u.password,"onUpdate:modelValue":o[7]||(o[7]=l=>u.password=l)},{default:a(()=>[e(f,{modelValue:u.password,"onUpdate:modelValue":o[5]||(o[5]=l=>u.password=l),type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF0C\u4E0D\u663E\u793A\u6E05\u9664\u6309\u94AE",clearable:!1,onBlur:o[6]||(o[6]=l=>_("password"))},null,8,["modelValue"])]),_:1},8,["modelValue"]),e(t,{title:"\u90AE\u7BB1",prop:"mail",modelValue:u.mail,"onUpdate:modelValue":o[10]||(o[10]=l=>u.mail=l)},{default:a(()=>[e(f,{modelValue:u.mail,"onUpdate:modelValue":o[8]||(o[8]=l=>u.mail=l),type:"email",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\uFF0Cblur\u4E8B\u4EF6\u6821\u9A8C",onBlur:o[9]||(o[9]=l=>_("mail"))},null,8,["modelValue"])]),_:1},8,["modelValue"]),e(t,{border:!1,class:"button-group"},{default:a(()=>[e(n,{type:"primary",size:"small",onClick:g},{default:a(()=>[E("Submit")]),_:1}),e(n,{size:"small",onClick:d},{default:a(()=>[E("Reset")]),_:1})]),_:1})]),_:1},512)],64)}}}),M=v("h2",null,"\u52A8\u6001\u8868\u5355",-1),N={class:"button-group"},H=A({__name:"DynamicForm",setup(x){const u=C([{type:"text",componentType:"input",title:"\u59D3\u540D",name:"name",value:"",rules:[{required:!0,message:"name cannot be empty"},{validator:t=>!/\d+/.test(t),message:"\u59D3\u540D\u4E2D\u4E0D\u80FD\u6709\u6570\u5B57"}]},{type:"password",componentType:"input",title:e("span",{style:{color:"red"}},"\u5BC6\u7801"),name:"password",value:""},{type:"digit",componentType:"input",title:"\u5E74\u9F84",name:"age",value:"",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5E74\u9F84"},{pattern:/^(\d{1,2}|1\d{2}|200)$/,message:"\u5FC5\u987B\u8F93\u51650-200\u533A\u95F4"},{validator:t=>/^[^0]/.test(t),message:"\u4E0D\u80FD\u4EE5 0 \u5F00\u5934"}]},{type:"email",componentType:"input",title:"\u90AE\u7BB1",name:"mail",value:"",rules:[{required:!0,message:"Mailbox cannot be empty"},{pattern:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,message:"Incorrect email format"}]}]),V=()=>{u.push({type:"tel",componentType:"input",title:"\u624B\u673A",name:"phone",value:"",maxLength:13,formatTrigger:"onInput",formatter:t=>t.replace(/(^\d{3})/g,"$1 ").replace(/(\d{4})/g,"$1 ")})},g=()=>{u.splice(u.length-1)},d=B(),_=B(!1),i=()=>{d.value.validate().then(t=>{t.valid?(console.log("getValue:",d.value.getValue()),console.log("getJsonValue",d.value.getJsonValue()),console.log("getSerializeValue",d.value.getSerializeValue())):console.log("error submit!!",t)})},o=()=>{d.value.reset()},f=t=>{_.value=t};return(t,n)=>{const s=m("r-input"),l=m("r-form-item"),F=m("r-button"),c=m("r-form");return D(),b(y,null,[M,e(c,{ref_key:"formRef",ref:d,required:"",clearable:"",onComplete:f},{default:a(()=>[(D(!0),b(y,null,h(u,r=>(D(),q(l,{key:r.name,title:r.title,prop:r.name,rules:r.rules,modelValue:r.value,"onUpdate:modelValue":z=>r.value=z},{default:a(()=>[e(s,{modelValue:r.value,"onUpdate:modelValue":z=>r.value=z,placeholder:"\u8BF7\u8F93\u5165",type:r.type,"format-trigger":r.formatTrigger,formatter:r.formatter,"max-length":r.maxLength},null,8,["modelValue","onUpdate:modelValue","type","format-trigger","formatter","max-length"])]),_:2},1032,["title","prop","rules","modelValue","onUpdate:modelValue"]))),128)),v("div",N,[e(F,{size:"small",onClick:V},{default:a(()=>[E("Add")]),_:1}),e(F,{size:"small",onClick:g},{default:a(()=>[E("Remove")]),_:1}),e(F,{type:"primary",size:"small",disabled:!_.value,onClick:i},{default:a(()=>[E("Submit")]),_:1},8,["disabled"]),e(F,{size:"small",onClick:o},{default:a(()=>[E("Reset")]),_:1})])]),_:1},512)],64)}}}),j=v("h2",null,"\u6EDA\u52A8\u5230\u6307\u5B9A\u8868\u5355\u9879",-1),P=v("p",null,"Submit",-1),W=v("p",null,"scroll to first error",-1),X=v("p",null,"Submit",-1),G=v("p",null,"scroll to age",-1),O=A({__name:"ScrollToField",setup(x){const u=C({name:"",age:"",password:"",mail:""}),V=C({name:[{required:!0,message:"name cannot be empty"},{validator:i=>!/\d+/.test(i),message:"\u59D3\u540D\u4E2D\u4E0D\u80FD\u6709\u6570\u5B57"}],age:[{required:!0,message:"\u8BF7\u586B\u5199\u5E74\u9F84"},{pattern:/^(\d{1,2}|1\d{2}|200)$/,message:"\u5FC5\u987B\u8F93\u51650-200\u533A\u95F4"},{validator:i=>/^[^0]/.test(i),message:"\u4E0D\u80FD\u4EE5 0 \u5F00\u5934"}],mail:[{required:!0,message:"Mailbox cannot be empty"},{pattern:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,message:"Incorrect email format"}]}),g=B(),d=()=>{g.value.validate().then(i=>{i.valid?(console.log("getValue:",g.value.getValue()),console.log("getJsonValue",g.value.getJsonValue()),console.log("getSerializeValue",g.value.getSerializeValue())):(console.log("error submit!!",i),g.value.scrollToField())})},_=i=>{g.value.scrollToField(i)};return(i,o)=>{const f=m("r-input"),t=m("r-form-item"),n=m("r-button"),s=m("r-form");return D(),b(y,null,[j,e(s,{ref_key:"formRef",ref:g},{default:a(()=>[e(t,{title:"\u59D3\u540D",prop:"name",rules:V.name,modelValue:u.name,"onUpdate:modelValue":o[1]||(o[1]=l=>u.name=l)},{default:a(()=>[e(f,{modelValue:u.name,"onUpdate:modelValue":o[0]||(o[0]=l=>u.name=l),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1},8,["rules","modelValue"]),e(t,{title:"\u5E74\u9F84",prop:"age",rules:V.age,modelValue:u.age,"onUpdate:modelValue":o[3]||(o[3]=l=>u.age=l)},{default:a(()=>[e(f,{modelValue:u.age,"onUpdate:modelValue":o[2]||(o[2]=l=>u.age=l),type:"digit",placeholder:"\u8BF7\u8F93\u5165\u5E74\u9F84"},null,8,["modelValue"])]),_:1},8,["rules","modelValue"]),e(t,{title:"\u5BC6\u7801",prop:"password",modelValue:u.password,"onUpdate:modelValue":o[5]||(o[5]=l=>u.password=l)},{default:a(()=>[e(f,{modelValue:u.password,"onUpdate:modelValue":o[4]||(o[4]=l=>u.password=l),type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF0C\u975E\u5FC5\u586B\u9879"},null,8,["modelValue"])]),_:1},8,["modelValue"]),e(t,{title:"\u90AE\u7BB1",prop:"mail",rules:V.mail,modelValue:u.mail,"onUpdate:modelValue":o[7]||(o[7]=l=>u.mail=l)},{default:a(()=>[e(f,{modelValue:u.mail,"onUpdate:modelValue":o[6]||(o[6]=l=>u.mail=l),type:"email",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\uFF0C\u5F02\u6B65\u6821\u9A8C"},null,8,["modelValue"])]),_:1},8,["rules","modelValue"]),e(t,{border:!1,class:"button-group"},{default:a(()=>[e(n,{type:"primary",size:"small",style:{"line-height":"1",padding:"0 8px"},onClick:d},{default:a(()=>[P,W]),_:1}),e(n,{size:"small",style:{"line-height":"1",padding:"0 8px"},onClick:o[8]||(o[8]=l=>_("age"))},{default:a(()=>[X,G]),_:1})]),_:1})]),_:1},512)],64)}}}),Y=v("h2",null,"\u8868\u5355\u7C7B\u578B",-1),K=A({__name:"FormType",setup(x){const u=C({name:"",age:"",password:"",mail:"",bankCard:"",checked:!1,groupChecked:[],radio:"",city:"",area:""}),g=C({name:[{required:!0,message:"name cannot be empty"},{validator:s=>!/\d+/.test(s),message:"\u59D3\u540D\u4E2D\u4E0D\u80FD\u6709\u6570\u5B57"}],age:[{required:!0,message:"\u8BF7\u586B\u5199\u5E74\u9F84"},{pattern:/^(\d{1,2}|1\d{2}|200)$/,message:"\u5FC5\u987B\u8F93\u51650-200\u533A\u95F4"},{validator:s=>/^[^0]/.test(s),message:"\u4E0D\u80FD\u4EE5 0 \u5F00\u5934"}],mail:[{required:!0,message:"Mailbox cannot be empty"},{validator:s=>new Promise(l=>{setTimeout(()=>{l(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s))},1e3)}),message:"Incorrect email format"}],bankCard:[{required:!0,message:"Bank card cannot be empty"},{validator:s=>s.replace(/\s/g,"").length===16,message:"\u94F6\u884C\u5361\u53F7\u683C\u5F0F\u4E0D\u6B63\u786E"}],checked:[{required:!0,message:"\u8BF7\u9009\u62E9\u590D\u9009\u6846"}],groupChecked:[{required:!0,message:"\u8BF7\u9009\u62E9\u590D\u9009\u6846\u7EC4"},{validator:s=>s.length>0,message:"\u590D\u9009\u6846\u7EC4\u6700\u5C11\u9009\u62E9\u4E00\u9879"}],radio:[{required:!0,message:"\u8BF7\u9009\u62E9\u5355\u9009\u6846"}],city:[{required:!0,message:"\u8BF7\u9009\u62E9\u57CE\u5E02"}],area:[{required:!0,message:"\u8BF7\u9009\u62E9\u7701\u5E02\u533A"}]}),d=B(),_=B(!1),i=B([{text:"\u676D\u5DDE",value:"Hangzhou"},{text:"\u5B81\u6CE2",value:"Ningbo"},{text:"\u6E29\u5DDE",value:"Wenzhou"},{text:"\u7ECD\u5174",value:"Shaoxing"},{text:"\u6E56\u5DDE",value:"Huzhou"}]),o=B([{text:"\u6D59\u6C5F",value:"Zhejiang",children:[{text:"\u676D\u5DDE",value:"Hangzhou",children:[{text:"\u897F\u6E56\u533A",value:"Xihu",disabled:!0},{text:"\u4F59\u676D\u533A",value:"Yuhang"}]},{text:"\u6E29\u5DDE",value:"Wenzhou",children:[{text:"\u9E7F\u57CE\u533A",value:"Lucheng"},{text:"\u74EF\u6D77\u533A",value:"Ouhai"}]}]},{text:"\u798F\u5EFA",value:"Fujian",children:[{text:"\u798F\u5DDE",value:"Fuzhou",children:[{text:"\u9F13\u697C\u533A",value:"Gulou"},{text:"\u53F0\u6C5F\u533A",value:"Taijiang"}]},{text:"\u53A6\u95E8",value:"Xiamen",children:[{text:"\u601D\u660E\u533A",value:"Siming"},{text:"\u6D77\u6CA7\u533A",value:"Haicang"}]}]}]),f=()=>{d.value.validate().then(s=>{s.valid?(console.log("getValue:",d.value.getValue()),console.log("getJsonValue",d.value.getJsonValue()),console.log("getSerializeValue",d.value.getSerializeValue())):console.log("error submit!!",s)})},t=()=>{d.value.reset()},n=s=>{_.value=s};return(s,l)=>{const F=m("r-input"),c=m("r-form-item"),r=m("r-checkbox"),z=m("r-checkbox-group"),k=m("r-radio"),$=m("r-radio-group"),U=m("r-select"),w=m("r-button"),S=m("r-form");return D(),b(y,null,[Y,e(S,{model:u,rules:g,ref_key:"formRef",ref:d,onComplete:n},{default:a(()=>[e(c,{title:"\u59D3\u540D",prop:"name"},{default:a(()=>[e(F,{modelValue:u.name,"onUpdate:modelValue":l[0]||(l[0]=p=>u.name=p),placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"},null,8,["modelValue"])]),_:1}),e(c,{title:"\u5E74\u9F84",prop:"age"},{default:a(()=>[e(F,{modelValue:u.age,"onUpdate:modelValue":l[1]||(l[1]=p=>u.age=p),type:"digit",placeholder:"\u8BF7\u8F93\u5165\u5E74\u9F84"},null,8,["modelValue"])]),_:1}),e(c,{title:"\u5BC6\u7801",prop:"password"},{default:a(()=>[e(F,{modelValue:u.password,"onUpdate:modelValue":l[2]||(l[2]=p=>u.password=p),type:"password",placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF0C\u975E\u5FC5\u586B\u9879"},null,8,["modelValue"])]),_:1}),e(c,{title:"\u90AE\u7BB1",prop:"mail"},{default:a(()=>[e(F,{modelValue:u.mail,"onUpdate:modelValue":l[3]||(l[3]=p=>u.mail=p),type:"email",placeholder:"\u8BF7\u8F93\u5165\u90AE\u7BB1\uFF0C\u5F02\u6B65\u6821\u9A8C"},null,8,["modelValue"])]),_:1}),e(c,{title:"\u94F6\u884C\u5361",prop:"bankCard"},{default:a(()=>[e(F,{modelValue:u.bankCard,"onUpdate:modelValue":l[4]||(l[4]=p=>u.bankCard=p),type:"digit",placeholder:"\u8BF7\u8F93\u5165\u94F6\u884C\u5361","max-length":"19",formatter:p=>p.replace(/(\d{4})(?=\d)/g,"$1 ")},null,8,["modelValue","formatter"])]),_:1}),e(c,{title:"\u590D\u9009\u6846",prop:"checked"},{default:a(()=>[e(r,{modelValue:u.checked,"onUpdate:modelValue":l[5]||(l[5]=p=>u.checked=p)},{default:a(()=>[E("\u590D\u9009\u6846")]),_:1},8,["modelValue"])]),_:1}),e(c,{title:"\u590D\u9009\u6846\u7EC4",prop:"groupChecked"},{default:a(()=>[e(z,{modelValue:u.groupChecked,"onUpdate:modelValue":l[6]||(l[6]=p=>u.groupChecked=p),direction:"horizontal"},{default:a(()=>[e(r,{name:"1"},{default:a(()=>[E("\u590D\u9009\u6846 1")]),_:1}),e(r,{name:"2"},{default:a(()=>[E("\u590D\u9009\u6846 2")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(c,{title:"\u5355\u9009\u6846",prop:"radio"},{default:a(()=>[e($,{modelValue:u.radio,"onUpdate:modelValue":l[7]||(l[7]=p=>u.radio=p),direction:"horizontal"},{default:a(()=>[e(k,{name:"a"},{default:a(()=>[E("\u5355\u9009\u6846 A")]),_:1}),e(k,{name:"b"},{default:a(()=>[E("\u5355\u9009\u6846 B")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(c,{title:"\u9009\u62E9\u5668",prop:"city"},{default:a(()=>[e(U,{modelValue:u.city,"onUpdate:modelValue":l[8]||(l[8]=p=>u.city=p),columns:i.value,placeholder:"\u70B9\u51FB\u9009\u62E9\u57CE\u5E02"},null,8,["modelValue","columns"])]),_:1}),e(c,{title:"\u5730\u533A\u9009\u62E9",prop:"area"},{default:a(()=>[e(U,{modelValue:u.area,"onUpdate:modelValue":l[9]||(l[9]=p=>u.area=p),columns:o.value,"text-separator":"/","value-separator":"_",placeholder:"\u70B9\u51FB\u9009\u62E9\u7701\u5E02\u533A"},null,8,["modelValue","columns"])]),_:1}),e(c,{border:!1,class:"button-group"},{default:a(()=>[e(w,{type:"primary",size:"small",disabled:!_.value,onClick:f},{default:a(()=>[E("Submit")]),_:1},8,["disabled"]),e(w,{size:"small",onClick:t},{default:a(()=>[E("Reset")]),_:1})]),_:1})]),_:1},8,["model","rules"])],64)}}}),Q={class:"demo demo-form"},ee=v("div",{style:{height:"600px"}},null,-1),le=A({__name:"index",setup(x){return(u,V)=>(D(),b("div",Q,[e(T),e(J),e(L),e(H),e(O),e(K),ee]))}});export{le as default};
