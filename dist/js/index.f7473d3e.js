import{b as v,s as e,f as h,c as f}from"./demo.5d1a0931.js";import{d as i,o as a,c as E,a as r,Y as y,Z as b,q as x,v as w,w as p,b as u,L as I,F as P,g as S,e as O}from"./plugin-vueexport-helper.e98510c0.js";const N=t=>(y("data-v-057cccb3"),t=t(),b(),t),T={class:"protocol"},V=N(()=>r("div",null,"this is protocol content",-1)),$=i({__name:"Protocol",emits:["closeProtocolDialog"],setup(t,{emit:s}){const c=()=>{s("closeProtocolDialog")};return(n,_)=>(a(),E("div",T,[V,r("button",{onClick:c}," \u5173\u95ED ")]))}});const z=x($,[["__scopeId","data-v-057cccb3"]]);const q=i({__name:"DialogFunction",setup(t){const s=()=>{e({title:"\u57FA\u7840\u5F39\u7A97",message:u("span",{style:{color:"red"}},"\u6211\u53EF\u4EE5\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6 vNode/.vue"),onConfirm(){this.remove()}})},c=()=>{const l=e({title:"\u963B\u6B62cancel\u81EA\u52A8\u5173\u95ED",message:"cancelButtonAutoClose",closeOnClickCancelButton:!1,onCancel(){this.remove()},onConfirm(){l.remove()}})},n=()=>{e({message:"\u65E0\u6807\u9898\u5F39\u7A97"})},_=()=>{e({title:"\u6E29\u99A8\u63D0\u793A",message:"\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002",showCancelButton:!1,onConfirm(){this.remove()}})},C=()=>{e({title:"\u8BBE\u7F6E\u906E\u7F69",message:"this is a transparent dialog",overlayStyle:{background:"rgba(0,0,0,0)"},overlayClass:"custom-overlay",closeOnClickOverlay:!0,onClickOverlay(){alert("click overlay")}})},m=()=>{e({title:"\u652F\u6301\u5BCC\u6587\u672C html",message:`<p style='color:red'>\u5F20\u5C0F\u76D2</p><img width="100" src='https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif' />`})},A=()=>{const l=e({title:"\u5F02\u6B65\u5173\u95ED",message:"\u70B9\u51FB\u786E\u8BA4\u540E\uFF0C1\u79D2\u540E\u5173\u95ED",onConfirm(){setTimeout(()=>{l.remove()},1e3)}})},k=()=>{e({title:"\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE",showCloseIcon:!0,closeIconPosition:"top-right",closeIcon:"close",message:"\u53F3\u4E0A\u89D2\u589E\u52A0 close button",onClickCloseIcon(){this.remove()}})},F=()=>{e({title:"\u5D4C\u5957\u6EDA\u52A8",message:`<div style="height: 100px; overflow-y: scroll" class="scroll-area">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>`})},d=()=>{e({title:"\u6539\u53D8\u4F4D\u7F6E",message:"\u901A\u8FC7position\u6539\u53D8\u5F39\u7A97\u663E\u793A\u4F4D\u7F6E",position:"bottom"})},g=()=>{e({closeOnClickOverlay:!0,showCloseIcon:!0},{default:()=>"\u81EA\u5B9A\u4E49\u5185\u5BB9",header:()=>u("span",{style:{fontSize:"22px"}},"\u81EA\u5B9A\u4E49\u6807\u9898"),footer:()=>"\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\u533A\u57DF","close-icon":()=>u("span",{style:{color:"red"}},"close")})},D=()=>{const l=h({message:I(z,{onCloseProtocolDialog:()=>l.remove()})})};return(l,L)=>{const o=f,B=v;return a(),w(B,{title:"\u51FD\u6570\u5F0F\u8C03\u7528",round:""},{default:p(()=>[u(o,{title:"\u57FA\u7840\u5F39\u7A97","is-link":"",onClick:s}),u(o,{title:"\u963B\u6B62cancel\u81EA\u52A8\u5173\u95ED","is-link":"",onClick:c}),u(o,{title:"\u65E0\u6807\u9898\u5F39\u7A97","is-link":"",onClick:n}),u(o,{title:"\u63D0\u793A\u5F39\u7A97","is-link":"",onClick:_}),u(o,{title:"\u8BBE\u7F6E\u906E\u7F69","is-link":"",onClick:C}),u(o,{title:"\u652F\u6301\u5BCC\u6587\u672C html","is-link":"",onClick:m}),u(o,{title:"\u5F02\u6B65\u5173\u95ED","is-link":"",onClick:A}),u(o,{title:"\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE","is-link":"",onClick:k}),u(o,{title:"\u5D4C\u5957\u6EDA\u52A8","is-link":"",onClick:F}),u(o,{title:"\u6539\u53D8\u4F4D\u7F6E","is-link":"",onClick:d}),u(o,{title:"\u81EA\u5B9A\u4E49slot\u5185\u5BB9","is-link":"",onClick:g}),u(o,{title:"\u81EA\u5B9A\u4E49\u5F39\u7A97","is-link":"",onClick:D})]),_:1})}}}),H={class:"demo demo-dialog"},j=i({__name:"index",setup(t){return(s,c)=>{const n=S("nav-bar");return a(),E(P,null,[u(n,null,{default:p(()=>[O("Dialog")]),_:1}),r("div",H,[u(q)])],64)}}});export{j as default};