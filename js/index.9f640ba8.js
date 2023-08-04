import{t as M,a as P,p as V,b as T,c as B}from"./demo.5d1a0931.js";import{b as e,S as z,q as j,g as A,o as d,v as g,w as _,x as F,c as D,F as O,$ as N,m as R,a as C,y as U,A as I,V as q,d as v,L as G,i as w,e as $}from"./plugin-vueexport-helper.e98510c0.js";const b=(o={})=>typeof o=="string"?{message:o}:o,h={loading:{type:"loading",icon:"loading",message:"\u52A0\u8F7D\u4E2D...",duration:0},success:{type:"success",icon:"success"},fail:{type:"fail",icon:"fail"},long:{type:"long"},default:{type:"default"}},k=o=>{const{onClickOverlay:s,type:r,...a}=b(o),p=Object.assign({},h.default,r&&h[r],a),t=e(S,{show:!0,from$toast:!0,onClickOverlay:()=>s&&s.call(i),...p},p.slots);z(t,document.body);const i={remove:()=>{var l;return((l=t==null?void 0:t.component)==null?void 0:l.proxy).isToastShow=!1},vNode:t,setMessage:l=>{var n;return((n=t==null?void 0:t.component)==null?void 0:n.props).message=l}};return i},y=o=>s=>k(Object.assign({type:o},b(s))),E=y("loading"),H=y("success"),J=y("fail"),K=y("long");function Q(o,s,r,a,p,t){const c=P,m=A("RenderText"),i=V;return d(),g(i,q(o.toastPropss,{show:o.isToastShow,"onUpdate:show":s[0]||(s[0]=l=>o.isToastShow=l),"popup-transition-name":o.popupTransitionName||"r-popup-fade","overlay-class":o.classes.overlay,"popup-class":o.classes.popup,duration:o.overlayDuration,onClickOverlay:o.clickOverlay,onClickPopup:o.clickPopup,onOpened:o.popupOpened,onClosed:o.popupClosed}),{default:_(()=>[F(o.$slots,"icon",{},()=>[o.icon?(d(),D(O,{key:0},[typeof o.icon=="object"?(d(),g(N(o.icon),{key:0})):(d(),g(c,{key:1,name:o.icon,class:"toast-icon"},null,8,["name"]))],64)):R("",!0)]),C("div",{class:U(o.classes.content),style:I(o.contentStyle)},[F(o.$slots,"default",{},()=>[e(m,{text:o.message},null,8,["text"])])],6)]),_:3},16,["show","popup-transition-name","overlay-class","popup-class","duration","onClickOverlay","onClickPopup","onOpened","onClosed"])}const S=j(M,[["render",Q]]),W=v({__name:"ToastFunction",setup(o){const s=()=>k("\u63D0\u793A\u5185\u5BB9"),r=()=>H("\u6210\u529F\u6587\u6848"),a=()=>J("\u5931\u8D25\u6587\u6848"),p=()=>K("This message will contain a incomprehensibilities long word."),t=()=>k({message:e("span",{style:{color:"pink"}},"\u6211\u53EF\u4EE5\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6 vNode/.vue"),icon:G("img",{width:"60",src:"https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif"})}),c=()=>{const n=k({message:"\u624B\u52A8\u5173\u95ED Toast",duration:0});setTimeout(()=>{n.remove()},3e3)},m=()=>{const n=E();setTimeout(()=>{n.remove()},3e3)},i=()=>{const n=E("\u5012\u8BA1\u65F6 3 \u79D2");let f=3;const u=setInterval(()=>{f--,f?n.setMessage(`\u5012\u8BA1\u65F6 ${f} \u79D2`):(clearInterval(u),n.remove())},1e3)},l=()=>{k({message:"click overlay",duration:0,overlayStyle:{background:"rgba(10,20,30,0.5)"},overlayClass:"custom-overlay",closeOnClickOverlay:!0,onClickOverlay(){alert("click overlay")}})};return(n,f)=>{const u=B,L=T;return d(),g(L,{title:"\u51FD\u6570\u5F0F\u8C03\u7528",round:""},{default:_(()=>[e(u,{title:"\u6587\u5B57\u63D0\u793A","is-link":"",onClick:s}),e(u,{title:"\u6210\u529F\u63D0\u793A","is-link":"",onClick:r}),e(u,{title:"\u5931\u8D25\u63D0\u793A","is-link":"",onClick:a}),e(u,{title:"\u957F\u6587\u6848\u63D0\u793A","is-link":"",onClick:p}),e(u,{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u3001\u56FE\u6807","is-link":"",onClick:t}),e(u,{title:"\u624B\u52A8\u5173\u95ED Toast","is-link":"",onClick:c}),e(u,{title:"Loading \u63D0\u793A","is-link":"",onClick:m}),e(u,{title:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A","is-link":"",onClick:i}),e(u,{title:"\u8BBE\u7F6E\u906E\u7F69","is-link":"",onClick:l})]),_:1})}}});const X=C("img",{width:"60",src:"https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif"},null,-1),Y=v({__name:"ToastComponent",setup(o){const s=w(!1),r=()=>{s.value=!0},a=w(!1),p=()=>{a.value=!0};return(t,c)=>{const m=B,i=S,l=T;return d(),g(l,{title:"\u7EC4\u4EF6\u5F0F\u4F7F\u7528",round:""},{default:_(()=>[e(m,{title:"\u57FA\u7840\u5F39\u6846","is-link":"",onClick:r}),e(i,{title:"\u7EC4\u4EF6\u8C03\u7528",message:"\u6587\u5B57\u63D0\u793A",show:s.value,"onUpdate:show":c[0]||(c[0]=n=>s.value=n)},null,8,["show"]),e(m,{title:"teleport \u4F7F\u7528","is-link":"",onClick:p}),e(i,{teleport:"body",long:"",show:a.value,"onUpdate:show":c[1]||(c[1]=n=>a.value=n)},{icon:_(()=>[X]),default:_(()=>[$(" \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\u770B\u4E00\u4E0B Elements Tab ")]),_:1},8,["show"])]),_:1})}}}),Z={class:"demo demo-toast"},eo=v({__name:"index",setup(o){return(s,r)=>{const a=A("nav-bar");return d(),D(O,null,[e(a,null,{default:_(()=>[$("Toast")]),_:1}),C("div",Z,[e(W),e(Y)])],64)}}});export{eo as default};
