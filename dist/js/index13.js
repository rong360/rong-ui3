import{n as h,o as r,c,b as t,F as l,a as o,g as a,d as p,u as x,w as s,e as d,h as m,t as v}from"./_plugin-vue_export-helper.js";const b={},g=o("h2",null,"\u57FA\u7840\u7528\u6CD5",-1);function k(i,e){const n=a("r-nav-bar");return r(),c(l,null,[g,t(n,{title:"\u6807\u9898"})],64)}const E=h(b,[["render",k]]),$=o("h2",null,"\u8FD4\u56DE\u4E0A\u7EA7",-1),D=o("br",null,null,-1),F=p({__name:"BackTo",setup(i){const e=()=>alert("back"),n=t("span",{style:{color:"red"}},"\u8FD4\u56DE");return(_,f)=>{const u=a("r-nav-bar");return r(),c(l,null,[$,t(u,{title:"\u6807\u9898","show-arrow-left":!0,"left-text":"\u8FD4\u56DE",onClickLeft:e}),D,t(u,{title:"\u6807\u9898","show-arrow-left":!0,"left-text":x(n)},null,8,["left-text"])],64)}}}),w=o("h2",null,"\u53F3\u4FA7\u6309\u94AE",-1),A=p({__name:"RightButton",setup(i){const e=()=>alert("back"),n=()=>alert("\u6309\u94AE");return(_,f)=>{const u=a("r-nav-bar");return r(),c(l,null,[w,t(u,{title:"\u6807\u9898","show-arrow-left":!0,"left-text":"\u8FD4\u56DE","right-text":"\u6309\u94AE",onClickLeft:e,onClickRight:n})],64)}}}),y={},B=o("h2",null,"\u4F7F\u7528\u63D2\u69FD",-1),C=o("div",{class:"tips",style:{"background-color":"lightyellow","font-size":"12px",padding:"5px 15px"}}," this is tips info. ",-1);function L(i,e){const n=a("r-nav-bar");return r(),c(l,null,[B,t(n,null,{left:s(()=>[d(" back ")]),right:s(()=>[d(" button ")]),bottom:s(()=>[C]),default:s(()=>[d(" title ")]),_:1})],64)}const N=h(y,[["render",L]]),T=o("h2",null,"\u56FA\u5B9A\u5230\u9876\u90E8",-1),z=o("div",{class:"tips",style:{"background-color":"lightyellow","font-size":"12px",padding:"5px 15px"}}," this is tips info. ",-1),R=p({__name:"FixedTop",setup(i){const e=m(!1);return(n,_)=>{const f=a("r-nav-bar"),u=a("r-button");return r(),c(l,null,[T,t(f,{title:"\u6807\u9898","show-arrow-left":!0,"left-text":"\u8FD4\u56DE",fixed:e.value,"safe-area-inset-top":"",placeholder:"",style:{"z-index":"100"},"class-name":"custom"},{bottom:s(()=>[z]),_:1},8,["fixed"]),t(u,{onClick:_[0]||(_[0]=U=>e.value=!e.value),type:"primary"},{default:s(()=>[d(v(e.value?"\u53D6\u6D88\u56FA\u5B9A\u5230\u9876\u90E8":"\u56FA\u5B9A\u5230\u9876\u90E8"),1)]),_:1})],64)}}}),V={class:"demo demo-nav-bar"},S=p({__name:"index",setup(i){return(e,n)=>{const _=a("nav-bar");return r(),c(l,null,[t(_,null,{default:s(()=>[d("NavBar")]),_:1}),o("div",V,[t(E),t(F),t(A),t(N),t(R)])],64)}}});const j=h(S,[["__scopeId","data-v-f3380a71"]]);export{j as default};
