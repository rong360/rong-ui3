import{s as e,a as y}from"./demo.b0d3c665.js";import{d as F,o as m,c as B,a as d,Z as w,$ as b,q as x,v as D,w as C,g as a,b as u,L as I,i as g,F as P,e as T}from"./plugin-vueexport-helper.26ce5e75.js";const S=s=>(w("data-v-057cccb3"),s=s(),b(),s),O={class:"protocol"},$=S(()=>d("div",null,"this is protocol content",-1)),N=F({__name:"Protocol",emits:["closeProtocolDialog"],setup(s,{emit:t}){const c=()=>{t("closeProtocolDialog")};return(l,E)=>(m(),B("div",O,[$,d("button",{onClick:c}," \u5173\u95ED ")]))}});const V=x(N,[["__scopeId","data-v-057cccb3"]]),z=F({__name:"DialogFunction",setup(s){const t=()=>{e({title:"\u57FA\u7840\u5F39\u7A97",message:u("span",{style:{color:"red"}},"\u6211\u53EF\u4EE5\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6 vNode/.vue"),onConfirm(){this.remove()}})},c=()=>{const i=e({title:"\u963B\u6B62cancel\u81EA\u52A8\u5173\u95ED",message:"cancelButtonAutoClose",closeOnClickCancelButton:!1,onCancel(){this.remove()},onConfirm(){i.remove()}})},l=()=>{e({message:"\u65E0\u6807\u9898\u5F39\u7A97"})},E=()=>{e({title:"\u6E29\u99A8\u63D0\u793A",message:"\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002",showCancelButton:!1,onConfirm(){this.remove()}})},A=()=>{e({title:"\u8BBE\u7F6E\u906E\u7F69",message:"this is a transparent dialog",overlayStyle:{background:"rgba(0,0,0,0)"},overlayClass:"custom-overlay",closeOnClickOverlay:!0,onClickOverlay(){alert("click overlay")}})},n=()=>{e({title:"\u652F\u6301\u5BCC\u6587\u672C html",message:`<p style='color:red'>\u5F20\u5C0F\u76D2</p><img width="100" src='https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif' />`})},_=()=>{const i=e({title:"\u5F02\u6B65\u5173\u95ED",message:"\u70B9\u51FB\u786E\u8BA4\u540E\uFF0C1\u79D2\u540E\u5173\u95ED",onConfirm(){setTimeout(()=>{i.remove()},1e3)}})},p=()=>{e({title:"\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE",showCloseIcon:!0,closeIconPosition:"top-right",closeIcon:"close",message:"\u53F3\u4E0A\u89D2\u589E\u52A0 close button",onClickCloseIcon(){this.remove()}})},k=()=>{e({title:"\u5D4C\u5957\u6EDA\u52A8",message:`<div style="height: 100px; overflow-y: scroll" class="scroll-area">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>`})},r=()=>{e({title:"\u6539\u53D8\u4F4D\u7F6E",message:"\u901A\u8FC7position\u6539\u53D8\u5F39\u7A97\u663E\u793A\u4F4D\u7F6E",position:"bottom"})},h=()=>{e({closeOnClickOverlay:!0,showCloseIcon:!0},{default:()=>"\u81EA\u5B9A\u4E49\u5185\u5BB9",header:()=>u("span",{style:{fontSize:"22px"}},"\u81EA\u5B9A\u4E49\u6807\u9898"),footer:()=>"\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\u533A\u57DF","close-icon":()=>u("span",{style:{color:"red"}},"close")})},v=()=>{const i=y({message:I(V,{onCloseProtocolDialog:()=>i.remove()})})};return(i,L)=>{const o=a("r-cell"),f=a("r-cell-group");return m(),D(f,{title:"\u51FD\u6570\u5F0F\u8C03\u7528",round:""},{default:C(()=>[u(o,{title:"\u57FA\u7840\u5F39\u7A97","is-link":"",onClick:t}),u(o,{title:"\u963B\u6B62cancel\u81EA\u52A8\u5173\u95ED","is-link":"",onClick:c}),u(o,{title:"\u65E0\u6807\u9898\u5F39\u7A97","is-link":"",onClick:l}),u(o,{title:"\u63D0\u793A\u5F39\u7A97","is-link":"",onClick:E}),u(o,{title:"\u8BBE\u7F6E\u906E\u7F69","is-link":"",onClick:A}),u(o,{title:"\u652F\u6301\u5BCC\u6587\u672C html","is-link":"",onClick:n}),u(o,{title:"\u5F02\u6B65\u5173\u95ED","is-link":"",onClick:_}),u(o,{title:"\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE","is-link":"",onClick:p}),u(o,{title:"\u5D4C\u5957\u6EDA\u52A8","is-link":"",onClick:k}),u(o,{title:"\u6539\u53D8\u4F4D\u7F6E","is-link":"",onClick:r}),u(o,{title:"\u81EA\u5B9A\u4E49slot\u5185\u5BB9","is-link":"",onClick:h}),u(o,{title:"\u81EA\u5B9A\u4E49\u5F39\u7A97","is-link":"",onClick:v})]),_:1})}}}),U=d("div",null,"this is header",-1),q=F({__name:"DialogComponent",setup(s){const t=g(!1),c=()=>{t.value=!0},l=g(!1),E=()=>{l.value=!0};return(A,n)=>{const _=a("r-cell"),p=a("r-dialog"),k=a("r-cell-group");return m(),D(k,{title:"\u7EC4\u4EF6\u5F0F\u4F7F\u7528",round:""},{default:C(()=>[u(_,{title:"\u57FA\u7840\u5F39\u6846","is-link":"",onClick:c}),u(p,{title:"\u7EC4\u4EF6\u8C03\u7528",message:"\u5982\u679C\u9700\u8981\u5728\u5F39\u7A97\u5185\u5D4C\u5165\u7EC4\u4EF6\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7EC4\u4EF6\u8C03\u7528\u7684\u65B9\u5F0F\u3002",show:t.value,"onUpdate:show":n[0]||(n[0]=r=>t.value=r)},null,8,["show"]),u(_,{title:"teleport \u4F7F\u7528","is-link":"",onClick:E}),u(p,{title:"teleport to body",message:"\u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\u770B\u4E00\u4E0B Elements Tab",teleport:"body",show:l.value,"onUpdate:show":n[1]||(n[1]=r=>l.value=r)},{header:C(()=>[U]),_:1},8,["show"])]),_:1})}}}),H={class:"demo demo-dialog"},G=F({__name:"index",setup(s){return(t,c)=>{const l=a("nav-bar");return m(),B(P,null,[u(l,null,{default:C(()=>[T("Dialog")]),_:1}),d("div",H,[u(z),u(q)])],64)}}});export{G as default};