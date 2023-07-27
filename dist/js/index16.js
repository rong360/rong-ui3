import{d as k,h as r,o as m,c as y,b as o,w as h,F as E,a as d,g as n,e as B,q as A}from"./_plugin-vue_export-helper.js";const x=d("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),D=k({__name:"PopupBase",setup(f){const l=r(!1),p=()=>{l.value=!0};return(t,u)=>{const e=n("r-cell"),s=n("r-popup");return m(),y(E,null,[x,o(e,{title:"\u5C55\u793A\u5F39\u51FA\u5C42","is-link":"",onClick:p,border:!1}),o(s,{"popup-style":{padding:"30px 50px"},"close-on-click-overlay":!0,show:l.value,"onUpdate:show":u[0]||(u[0]=c=>l.value=c)},{default:h(()=>[B("\u5185\u5BB9")]),_:1},8,["show"])],64)}}}),$=k({__name:"PopupPosition",setup(f){const l=r(!1),p=()=>{l.value=!0},t=r(!1),u=()=>{t.value=!0},e=r(!1),s=()=>{e.value=!0},c=r(!1),a=()=>{c.value=!0};return(_,v)=>{const i=n("r-cell"),F=n("r-popup"),C=n("r-cell-group");return m(),A(C,{title:"\u5F39\u51FA\u4F4D\u7F6E",round:""},{default:h(()=>[o(i,{title:"\u9876\u90E8\u5F39\u51FA","is-link":"",onClick:p}),o(F,{show:l.value,"onUpdate:show":v[0]||(v[0]=w=>l.value=w),position:"top",round:!1,"close-on-click-overlay":!0,"popup-style":{height:"30%"}},null,8,["show"]),o(i,{title:"\u5E95\u90E8\u5F39\u51FA","is-link":"",onClick:u}),o(F,{show:t.value,"onUpdate:show":v[1]||(v[1]=w=>t.value=w),position:"bottom",round:!1,"close-on-click-overlay":!0,"popup-style":{height:"30%"}},null,8,["show"]),o(i,{title:"\u5DE6\u4FA7\u5F39\u51FA","is-link":"",onClick:s}),o(F,{show:e.value,"onUpdate:show":v[2]||(v[2]=w=>e.value=w),position:"left",round:!1,"close-on-click-overlay":!0,"popup-style":{width:"30%",height:"100%"}},null,8,["show"]),o(i,{title:"\u53F3\u4FA7\u5F39\u51FA","is-link":"",onClick:a}),o(F,{show:c.value,"onUpdate:show":v[3]||(v[3]=w=>c.value=w),position:"right",round:!1,"close-on-click-overlay":!0,"popup-style":{width:"30%",height:"100%"}},null,8,["show"])]),_:1})}}}),b=d("h2",null,"\u5185\u5BB9\u6EDA\u52A8",-1),U=d("div",{style:{height:"100px",width:"100px","overflow-y":"scroll"},class:"scroll-area"},[d("p",null,"1"),d("p",null,"2"),d("p",null,"3"),d("p",null,"4"),d("p",null,"5")],-1),P=k({__name:"PopupScroll",setup(f){const l=r(!1);return(p,t)=>{const u=n("r-cell"),e=n("r-popup");return m(),y(E,null,[b,o(u,{title:"\u5185\u5BB9\u6EDA\u52A8","is-link":"",onClick:t[0]||(t[0]=s=>l.value=!0),border:!1}),o(e,{"close-on-click-overlay":!0,show:l.value,"onUpdate:show":t[1]||(t[1]=s=>l.value=s)},{default:h(()=>[U]),_:1},8,["show"])],64)}}}),I=k({__name:"PopupClose",setup(f){const l=r(!1),p=r(!1),t=r(!1);return(u,e)=>{const s=n("r-cell"),c=n("r-popup"),a=n("r-cell-group");return m(),A(a,{title:"\u5173\u95ED\u56FE\u6807",round:""},{default:h(()=>[o(s,{title:"\u5173\u95ED\u56FE\u6807","is-link":"",onClick:e[0]||(e[0]=_=>l.value=!0)}),o(c,{show:l.value,"onUpdate:show":e[1]||(e[1]=_=>l.value=_),position:"bottom","show-close-icon":!0,round:!1,"popup-style":{height:"30%"}},null,8,["show"]),o(s,{title:"\u56FE\u6807\u4F4D\u7F6E","is-link":"",onClick:e[2]||(e[2]=_=>p.value=!0)}),o(c,{show:p.value,"onUpdate:show":e[3]||(e[3]=_=>p.value=_),position:"bottom","close-icon-position":"top-left","show-close-icon":!0,round:!1,"popup-style":{height:"30%"}},null,8,["show"]),o(s,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807","is-link":"",onClick:e[4]||(e[4]=_=>t.value=!0)}),o(c,{show:t.value,"onUpdate:show":e[5]||(e[5]=_=>t.value=_),position:"bottom","close-icon":"loading","show-close-icon":!0,round:!1,"popup-style":{height:"30%"}},null,8,["show"])]),_:1})}}}),O=k({__name:"PopupRound",setup(f){const l=r(!1),p=r(!1);return(t,u)=>{const e=n("r-cell"),s=n("r-popup"),c=n("r-cell-group");return m(),A(c,{title:"\u5706\u89D2\u5F39\u7A97",round:""},{default:h(()=>[o(e,{title:"\u5706\u89D2\u5F39\u7A97\uFF08\u5C45\u4E2D\uFF09","is-link":"",onClick:u[0]||(u[0]=a=>l.value=!0)}),o(s,{show:l.value,"onUpdate:show":u[1]||(u[1]=a=>l.value=a),round:!0,"popup-style":{padding:"50px 50px"},"close-on-click-overlay":!0},{default:h(()=>[B("\u5185\u5BB9")]),_:1},8,["show"]),o(e,{title:"\u5706\u89D2\u5F39\u7A97\uFF08\u5E95\u90E8\uFF09","is-link":"",onClick:u[2]||(u[2]=a=>p.value=!0)}),o(s,{show:p.value,"onUpdate:show":u[3]||(u[3]=a=>p.value=a),position:"bottom",round:!0,"popup-style":{height:"30%"},"close-on-click-overlay":!0},null,8,["show"])]),_:1})}}}),T=k({__name:"PopupEventListener",setup(f){const l=r(!1),p=()=>console.log("click popup"),t=()=>console.log("click overlay"),u=()=>console.log("click close icon"),e=r(!1),s=()=>console.log("open"),c=()=>console.log("opened"),a=()=>console.log("close"),_=()=>console.log("closed");return(v,i)=>{const F=n("r-cell"),C=n("r-popup"),w=n("r-cell-group");return m(),A(w,{title:"\u4E8B\u4EF6\u76D1\u542C",round:""},{default:h(()=>[o(F,{title:"\u76D1\u542C\u70B9\u51FB\u4E8B\u4EF6","is-link":"",onClick:i[0]||(i[0]=g=>l.value=!0)}),o(C,{show:l.value,"onUpdate:show":i[1]||(i[1]=g=>l.value=g),position:"bottom","popup-style":{height:"30%"},"close-on-click-overlay":!0,"show-close-icon":!0,onClickPopup:p,onClickOverlay:t,onClickCloseIcon:u},null,8,["show"]),o(F,{title:"\u76D1\u542C\u663E\u793A\u4E8B\u4EF6","is-link":"",onClick:i[2]||(i[2]=g=>e.value=!0)}),o(C,{show:e.value,"onUpdate:show":i[3]||(i[3]=g=>e.value=g),position:"bottom","popup-style":{height:"30%"},"close-on-click-overlay":!0,onOpen:s,onOpened:c,onClose:a,onClosed:_},null,8,["show"])]),_:1})}}}),L=d("h2",null,"\u6307\u5B9A\u6302\u8F7D\u8282\u70B9",-1),N=k({__name:"PopupTeleport",setup(f){const l=r(!1);return(p,t)=>{const u=n("r-cell"),e=n("r-popup");return m(),y(E,null,[L,o(u,{title:"\u6307\u5B9A\u6302\u8F7D\u8282\u70B9","is-link":"",border:!1}),o(e,{"popup-style":{padding:"30px 50px"},"close-on-click-overlay":!0,teleport:"body",show:l.value,"onUpdate:show":t[0]||(t[0]=s=>l.value=s)},{default:h(()=>[B("\u5185\u5BB9 teleport")]),_:1},8,["show"])],64)}}}),R={class:"demo demo-popup"},q=k({__name:"index",setup(f){return(l,p)=>{const t=n("nav-bar");return m(),y(E,null,[o(t,null,{default:h(()=>[B("Popup")]),_:1}),d("div",R,[o(D),o($),o(P),o(I),o(O),o(T),o(N)])],64)}}});export{q as default};
