import{b as m,c as A,d as T,e as D,f as v}from"./demo.b0d3c665.js";import{d,o as F,v as f,w as c,g as n,b as e,L as y,i as C,e as h,a as B,c as b,F as x}from"./plugin-vueexport-helper.26ce5e75.js";const L=d({__name:"ToastFunction",setup(g){const s=()=>m("\u63D0\u793A\u5185\u5BB9"),a=()=>A("\u6210\u529F\u6587\u6848"),u=()=>T("\u5931\u8D25\u6587\u6848"),k=()=>D("This message will contain a incomprehensibilities long word."),E=()=>m({message:e("span",{style:{color:"pink"}},"\u6211\u53EF\u4EE5\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6 vNode/.vue"),icon:y("img",{width:"60",src:"https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif"})}),l=()=>{const o=m({message:"\u624B\u52A8\u5173\u95ED Toast",duration:0});setTimeout(()=>{o.remove()},3e3)},i=()=>{const o=v();setTimeout(()=>{o.remove()},3e3)},r=()=>{const o=v("\u5012\u8BA1\u65F6 3 \u79D2");let _=3;const t=setInterval(()=>{_--,_?o.setMessage(`\u5012\u8BA1\u65F6 ${_} \u79D2`):(clearInterval(t),o.remove())},1e3)},p=()=>{m({message:"click overlay",duration:0,overlayStyle:{background:"rgba(10,20,30,0.5)"},overlayClass:"custom-overlay",closeOnClickOverlay:!0,onClickOverlay(){alert("click overlay")}})};return(o,_)=>{const t=n("r-cell"),w=n("r-cell-group");return F(),f(w,{title:"\u51FD\u6570\u5F0F\u8C03\u7528",round:""},{default:c(()=>[e(t,{title:"\u6587\u5B57\u63D0\u793A","is-link":"",onClick:s}),e(t,{title:"\u6210\u529F\u63D0\u793A","is-link":"",onClick:a}),e(t,{title:"\u5931\u8D25\u63D0\u793A","is-link":"",onClick:u}),e(t,{title:"\u957F\u6587\u6848\u63D0\u793A","is-link":"",onClick:k}),e(t,{title:"\u81EA\u5B9A\u4E49\u5185\u5BB9\u3001\u56FE\u6807","is-link":"",onClick:E}),e(t,{title:"\u624B\u52A8\u5173\u95ED Toast","is-link":"",onClick:l}),e(t,{title:"Loading \u63D0\u793A","is-link":"",onClick:i}),e(t,{title:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A","is-link":"",onClick:r}),e(t,{title:"\u8BBE\u7F6E\u906E\u7F69","is-link":"",onClick:p})]),_:1})}}}),S=B("img",{width:"60",src:"https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif"},null,-1),N=d({__name:"ToastComponent",setup(g){const s=C(!1),a=()=>{s.value=!0},u=C(!1),k=()=>{u.value=!0};return(E,l)=>{const i=n("r-cell"),r=n("r-toast"),p=n("r-cell-group");return F(),f(p,{title:"\u7EC4\u4EF6\u5F0F\u4F7F\u7528",round:""},{default:c(()=>[e(i,{title:"\u57FA\u7840\u5F39\u6846","is-link":"",onClick:a}),e(r,{title:"\u7EC4\u4EF6\u8C03\u7528",message:"\u6587\u5B57\u63D0\u793A",show:s.value,"onUpdate:show":l[0]||(l[0]=o=>s.value=o)},null,8,["show"]),e(i,{title:"teleport \u4F7F\u7528","is-link":"",onClick:k}),e(r,{teleport:"body",long:"",show:u.value,"onUpdate:show":l[1]||(l[1]=o=>u.value=o)},{icon:c(()=>[S]),default:c(()=>[h(" \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\u770B\u4E00\u4E0B Elements Tab ")]),_:1},8,["show"])]),_:1})}}}),$={class:"demo demo-toast"},z=d({__name:"index",setup(g){return(s,a)=>{const u=n("nav-bar");return F(),b(x,null,[e(u,null,{default:c(()=>[h("Toast")]),_:1}),B("div",$,[e(L),e(N)])],64)}}});export{z as default};
