import{p as D,c as y,q as f}from"./demo.f1d8d762.js";import{d as _,j as i,o as v,c as r,b as l,O as E,P as h,a as s,t as p,F as x,w as N,x as V}from"./format.990ee458.js";const z=s("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),$=_({__name:"Base",setup(m){const e=[{text:"\u676D\u5DDE",value:"Hangzhou"},{text:"\u5B81\u6CE2",value:"Ningbo"},{text:"\u6E29\u5DDE",value:"Wenzhou"},{text:"\u7ECD\u5174",value:"Shaoxing"},{text:"\u6E56\u5DDE",value:"Huzhou"}],u=i([]),t=n=>{u.value=n.selectedValues},o=()=>{u.value=[]};return(n,c)=>{const a=D;return v(),r(x,null,[z,l(a,{title:"\u6807\u9898",columns:e,onConfirm:t,onCancel:o}),E(s("div",{class:"selected-values"}," \u5F53\u524D\u503C\uFF1A"+p(u.value),513),[[h,u.value.length]])],64)}}}),B=s("h2",null,"\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528",-1),b=_({__name:"Popup",setup(m){const e=i(!1),u=[{text:"\u676D\u5DDE",value:"Hangzhou"},{text:"\u5B81\u6CE2",value:"Ningbo"},{text:"\u6E29\u5DDE",value:"Wenzhou"},{text:"\u7ECD\u5174",value:"Shaoxing"},{text:"\u6E56\u5DDE",value:"Huzhou"}],t=i([]),o=a=>{t.value=a.selectedValues,e.value=!1},n=a=>{t.value=a.selectedValues},c=()=>{e.value=!1};return(a,d)=>{const F=y,A=D,g=f;return v(),r(x,null,[B,l(F,{title:"\u8BF7\u9009\u62E9\u57CE\u5E02","is-link":"",onClick:d[0]||(d[0]=C=>e.value=!0),border:!1}),l(g,{show:e.value,"onUpdate:show":d[1]||(d[1]=C=>e.value=C),round:"",position:"bottom"},{default:N(()=>[l(A,{title:"\u6807\u9898",columns:u,onConfirm:o,onChange:n,onCancel:c}),E(s("div",{class:"selected-values"}," \u5F53\u524D\u503C\uFF1A"+p(t.value),513),[[h,t.value.length]])]),_:1},8,["show"])],64)}}}),k=s("h2",null,"\u53CC\u5411\u7ED1\u5B9A",-1),H=_({__name:"Model",setup(m){const e=[{text:"\u676D\u5DDE",value:"Hangzhou"},{text:"\u5B81\u6CE2",value:"Ningbo"},{text:"\u6E29\u5DDE",value:"Wenzhou"},{text:"\u7ECD\u5174",value:"Shaoxing"},{text:"\u6E56\u5DDE",value:"Huzhou"}],u=i([]),t=()=>{u.value=[]};return(o,n)=>{const c=D;return v(),r(x,null,[k,l(c,{modelValue:u.value,"onUpdate:modelValue":n[0]||(n[0]=a=>u.value=a),title:"\u6807\u9898",columns:e,onCancel:t},null,8,["modelValue"]),E(s("div",{class:"selected-values"}," \u5F53\u524D\u503C\uFF1A"+p(u.value),513),[[h,u.value.length]])],64)}}}),w=s("h2",null,"\u591A\u5217\u9009\u62E9",-1),S=_({__name:"Multiple",setup(m){const e=[[{text:"\u5468\u4E00",value:"Monday"},{text:"\u5468\u4E8C",value:"Tuesday"},{text:"\u5468\u4E09",value:"Wednesday"},{text:"\u5468\u56DB",value:"Thursday"},{text:"\u5468\u4E94",value:"Friday"}],[{text:"\u4E0A\u5348",value:"Morning"},{text:"\u4E0B\u5348",value:"Afternoon"},{text:"\u665A\u4E0A",value:"Evening"}]],u=i([]),t=n=>{u.value=n.selectedValues},o=()=>{u.value=[]};return(n,c)=>{const a=D;return v(),r(x,null,[w,l(a,{columns:e,onConfirm:t,onCancel:o}),E(s("div",{class:"selected-values"}," \u5F53\u524D\u503C\uFF1A"+p(u.value),513),[[h,u.value.length]])],64)}}}),W=s("h2",null,"\u7EA7\u8054\u9009\u62E9",-1),M=_({__name:"Cascade",setup(m){const e=[{text:"\u6D59\u6C5F",value:"Zhejiang",children:[{text:"\u676D\u5DDE",value:"Hangzhou",children:[{text:"\u897F\u6E56\u533A",value:"Xihu",disabled:!0},{text:"\u4F59\u676D\u533A",value:"Yuhang"}]},{text:"\u6E29\u5DDE",value:"Wenzhou",children:[{text:"\u9E7F\u57CE\u533A",value:"Lucheng"},{text:"\u74EF\u6D77\u533A",value:"Ouhai"}]}]},{text:"\u798F\u5EFA",value:"Fujian",children:[{text:"\u798F\u5DDE",value:"Fuzhou",children:[{text:"\u9F13\u697C\u533A",value:"Gulou"},{text:"\u53F0\u6C5F\u533A",value:"Taijiang"}]},{text:"\u53A6\u95E8",value:"Xiamen",children:[{text:"\u601D\u660E\u533A",value:"Siming"},{text:"\u6D77\u6CA7\u533A",value:"Haicang"}]}]}],u=i([]),t=n=>{u.value=n.selectedValues},o=()=>{u.value=[]};return(n,c)=>{const a=D;return v(),r(x,null,[W,l(a,{columns:e,onConfirm:t,onCancel:o}),E(s("div",{class:"selected-values"}," \u5F53\u524D\u503C\uFF1A"+p(u.value),513),[[h,u.value.length]])],64)}}}),j=s("h2",null,"\u7981\u7528\u9009\u9879",-1),T=_({__name:"Disabled",setup(m){const e=[{text:"\u676D\u5DDE",value:"Hangzhou",disabled:!0},{text:"\u5B81\u6CE2",value:"Ningbo"},{text:"\u6E29\u5DDE",value:"Wenzhou"},{text:"\u7ECD\u5174",value:"Shaoxing"},{text:"\u6E56\u5DDE",value:"Huzhou"}],u=i([]),t=n=>{u.value=n.selectedValues},o=()=>{u.value=[]};return(n,c)=>{const a=D;return v(),r(x,null,[j,l(a,{title:"\u6807\u9898",columns:e,onConfirm:t,onCancel:o}),E(s("div",{class:"selected-values"}," \u5F53\u524D\u503C\uFF1A"+p(u.value),513),[[h,u.value.length]])],64)}}}),U=s("h2",null,"\u81EA\u5B9A\u4E49 Columns \u7684\u7ED3\u6784",-1),O=_({__name:"CustomColumns",setup(m){const e=[{cityName:"\u6D59\u6C5F",cities:[{cityName:"\u676D\u5DDE",cities:[{cityName:"\u897F\u6E56\u533A",cityClassName:"custom-classname",cityDisabled:!0},{cityName:"\u4F59\u676D\u533A"}]},{cityName:"\u6E29\u5DDE",cities:[{cityName:"\u9E7F\u57CE\u533A"},{cityName:"\u74EF\u6D77\u533A"}]}]},{cityName:"\u798F\u5EFA",cities:[{cityName:"\u798F\u5DDE",cities:[{cityName:"\u9F13\u697C\u533A"},{cityName:"\u53F0\u6C5F\u533A"}]},{cityName:"\u53A6\u95E8",cities:[{cityName:"\u601D\u660E\u533A"},{cityName:"\u6D77\u6CA7\u533A"}]}]}],u={text:"cityName",value:"cityName",children:"cities",className:"cityClassName",disabled:"cityDisabled"},t=i([]),o=c=>{t.value=c.selectedValues},n=()=>{t.value=[]};return(c,a)=>{const d=D;return v(),r(x,null,[U,l(d,{columns:e,"columns-field-names":u,onConfirm:o,onCancel:n}),E(s("div",{class:"selected-values"}," \u5F53\u524D\u503C\uFF1A"+p(t.value),513),[[h,t.value.length]])],64)}}}),P=s("h2",null,"\u5F02\u6B65\u83B7\u53D6",-1),X=_({__name:"Async",setup(m){const e=i([]),u=i([]);V(()=>{setTimeout(()=>{e.value=[{text:"\u676D\u5DDE",value:"Hangzhou"},{text:"\u5B81\u6CE2",value:"Ningbo"},{text:"\u6E29\u5DDE",value:"Wenzhou"},{text:"\u7ECD\u5174",value:"Shaoxing"},{text:"\u6E56\u5DDE",value:"Huzhou"}],u.value=["Wenzhou"]},2e3)});const t=n=>{console.log(n)},o=()=>{u.value=[]};return(n,c)=>{const a=D;return v(),r(x,null,[P,l(a,{modelValue:u.value,"onUpdate:modelValue":c[0]||(c[0]=d=>u.value=d),title:"\u6807\u9898",columns:e.value,onConfirm:t,onCancel:o},null,8,["modelValue","columns"]),E(s("div",{class:"selected-values"}," \u5F53\u524D\u503C\uFF1A"+p(u.value),513),[[h,u.value.length]])],64)}}}),q={class:"demo demo-picker"},Y=_({__name:"index",setup(m){return(e,u)=>(v(),r("div",q,[l($),l(b),l(H),l(S),l(M),l(T),l(O),l(X)]))}});export{Y as default};
