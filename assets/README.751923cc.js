import{d as s,o as a,c as l,a as t,b as n,u as r,W as e,g as c,e as u}from"./_plugin-vue_export-helper.1af59c52.js";const p=`<template>
  <h2>\u6309\u94AE\u7C7B\u578B</h2>
  <div class="row">
    <r-button>default</r-button>
    <r-button type="primary">primary</r-button>
    <r-button type="success">success</r-button>
  </div>
  <div class="row">
    <r-button type="danger">danger</r-button>
    <r-button type="warning">warning</r-button>
  </div>
</template>
`,i=`<template>
  <h2>\u6309\u94AE\u5F62\u72B6</h2>
  <div class="row">
    <r-button type="primary">\u9ED8\u8BA4\u5706\u5F62</r-button>
    <r-button type="success" shape="square">\u65B9\u5F62\u6309\u94AE</r-button>
  </div>
</template>
`,b=`<template>
  <h2>\u6309\u94AE\u5C3A\u5BF8</h2>
  <div class="row">
    <r-button type="primary" size="large">\u5927\u53F7\u6309\u94AE</r-button>
    <r-button type="primary">\u666E\u901A\u6309\u94AE</r-button>
    <r-button type="primary" size="small">\u5C0F\u53F7\u6309\u94AE</r-button>
  </div>
  <div class="row">
    <r-button type="primary" size="mini">\u8FF7\u4F60\u6309\u94AE</r-button>
  </div>
</template>
`,h=`<template>
  <h2>\u5757\u7EA7\u5143\u7D20</h2>
  <div class="row">
    <r-button>\u5757\u7EA7\u5143\u7D20</r-button>
  </div>
  <div class="row">
    <r-button type="primary" shape="square" block>\u5757\u7EA7\u5143\u7D20</r-button>
  </div>
</template>
`,E=`<template>
  <h2>\u7981\u7528\u72B6\u6001</h2>
  <div class="row">
    <r-button type="primary" disabled>\u7981\u7528\u72B6\u6001</r-button>
    <r-button type="success" disabled>\u7981\u7528\u72B6\u6001</r-button>
  </div>
</template>
`,F=`<template>
  <h2>\u6734\u7D20\u6309\u94AE</h2>
  <div class="row">
    <r-button plain>default</r-button>
    <r-button type="primary" plain>primary</r-button>
    <r-button type="success" plain>success</r-button>
  </div>
  <div class="row" style="background-color: aliceblue">
    <r-button type="danger" plain>danger</r-button>
    <r-button type="warning" plain>warning</r-button>
  </div>
</template>
`,B=`<template>
  <h2>\u63D2\u69FD</h2>
  <div class="row">
    <r-button type="primary">
      <template #prepend><r-icon name="loading"></r-icon></template>
      \u52A0\u8F7D\u4E2D...
    </r-button>
    <r-button type="primary">
      \u52A0\u8F7D\u4E2D...
      <template #append><r-icon name="loading"></r-icon></template>
    </r-button>
  </div>
</template>
`,m={class:"markdown-body"},A=e(`<h1>Button \u6309\u94AE</h1><h3>\u4ECB\u7ECD</h3><p>\u6309\u94AE\u7528\u4E8E\u89E6\u53D1\u4E00\u4E2A\u64CD\u4F5C\uFF0C\u5982\u63D0\u4EA4\u8868\u5355\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>);
</code></pre><h3>\u6309\u94AE\u7C7B\u578B</h3><p>\u6309\u94AE\u652F\u6301 <code class="">default</code>\u3001<code class="">primary</code>\u3001<code class="">success</code>\u3001<code class="">warning</code>\u3001<code class="">danger</code> \u4E94\u79CD\u7C7B\u578B\uFF0C\u9ED8\u8BA4\u4E3A <code class="">default</code>\u3002</p>`,7),C=t("h3",null,"\u6309\u94AE\u5F62\u72B6",-1),y=t("p",null,[u("\u901A\u8FC7 "),t("code",{class:""},"shape"),u(" \u5C5E\u6027\u8BBE\u7F6E\u6309\u94AE\u5F62\u72B6\uFF0C\u652F\u6301\u5706\u5F62\u3001\u65B9\u5F62\u6309\u94AE\uFF0C\u9ED8\u8BA4\u4E3A\u5706\u5F62\u3002")],-1),g=e('<h3>\u6309\u94AE\u5C3A\u5BF8</h3><p>\u901A\u8FC7 <code class="">size</code> \u5C5E\u6027\u8BBE\u7F6E\u6309\u94AE\u5C3A\u5BF8\uFF0C\u652F\u6301 <code class="">large</code> <code class="">normal</code> <code class="">small</code> <code class="">mini</code> \u56DB\u79CD\u5C3A\u5BF8\uFF0C\u9ED8\u8BA4\u4E3A <code class="">normal</code></p>',2),_=t("h3",null,"\u5757\u7EA7\u5143\u7D20",-1),D=t("p",null,[u("\u6309\u94AE\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E3A\u884C\u5185\u5757\u7EA7\u5143\u7D20\uFF0C\u901A\u8FC7 "),t("code",{class:""},"block"),u(" \u5C5E\u6027\u53EF\u4EE5\u5C06\u6309\u94AE\u7684\u5143\u7D20\u7C7B\u578B\u8BBE\u7F6E\u4E3A\u5757\u7EA7\u5143\u7D20\uFF0C\u5E38\u7528\u6765\u8BBE\u7F6E\u901A\u680F\u6309\u94AE\u3002")],-1),f=t("h3",null,"\u7981\u7528\u72B6\u6001",-1),w=t("p",null,[u("\u901A\u8FC7 "),t("code",{class:""},"disabled"),u(" \u5C5E\u6027\u6765\u7981\u7528\u6309\u94AE\uFF0C\u7981\u7528\u72B6\u6001\u4E0B\u6309\u94AE\u4E0D\u53EF\u70B9\u51FB\u3002")],-1),v=t("h3",null,"\u6734\u7D20\u6309\u94AE",-1),x=t("p",null,[u("\u901A\u8FC7 "),t("code",{class:""},"plain"),u(" \u5C5E\u6027\u5C06\u6309\u94AE\u8BBE\u7F6E\u4E3A\u6734\u7D20\u6309\u94AE\uFF0C\u6734\u7D20\u6309\u94AE\u7684\u6587\u5B57\u4E3A\u6309\u94AE\u989C\u8272\uFF0C\u80CC\u666F\u4E3A\u900F\u660E\u3002")],-1),k=t("h3",null,"\u6309\u94AE\u63D2\u69FD",-1),j=t("p",null,[u("\u901A\u8FC7 "),t("code",{class:""},"prepend"),u(),t("code",{class:""},"append"),u(" \u4E24\u4E2A\u63D2\u69FD\uFF0C\u53EF\u4EE5\u5728\u6309\u94AE\u5F00\u59CB\u6216\u8005\u7ED3\u675F\u4F4D\u7F6E\u63D2\u5165Icon\u6216\u8005\u5176\u5B83\u5185\u5BB9\u3002")],-1),z=e('<h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">primary</code> <code class="">success</code> <code class="">warning</code> <code class="">danger</code></td><td>String</td><td><code class="">default</code></td></tr><tr><td>size</td><td>\u5C3A\u5BF8\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">large</code> <code class="">small</code> <code class="">mini</code></td><td>String</td><td><code class="">normal</code></td></tr><tr><td>shape</td><td>\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">square</code></td><td>String</td><td><code class="">round</code></td></tr><tr><td>plain</td><td>\u662F\u5426\u4E3A\u6734\u7D20\u6309\u94AE</td><td>Boolean</td><td><code class="">false</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u6309\u94AE</td><td>Boolean</td><td><code class="">false</code></td></tr><tr><td>block</td><td>\u662F\u5426\u4E3A\u5757\u7EA7\u5143\u7D20</td><td>Boolean</td><td><code class="">false</code></td></tr><tr><td>text</td><td>\u6309\u94AE\u6587\u5B57</td><td>string/VNode</td><td>-</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u6309\u94AE\u5185\u5BB9</td></tr><tr><td>prepend</td><td>\u6309\u94AE\u524D\u65B9\u5185\u5BB9</td></tr><tr><td>append</td><td>\u6309\u94AE\u540E\u65B9\u5185\u5BB9</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u6309\u94AE\u65F6\u89E6\u53D1</td><td>event</td></tr></tbody></table><h3>\u6837\u5F0F\u53D8\u91CF</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>--r-button-transition</td><td>opacity 0.2s</td></tr><tr><td>--r-button-default-color</td><td>#666</td></tr><tr><td>--r-button-default-background</td><td>#fff</td></tr><tr><td>--r-button-default-border</td><td>1px solid rgb(204,204,204)</td></tr><tr><td>--r-button-primary-color</td><td>white</td></tr><tr><td>--r-button-primary-background</td><td>#1989fa</td></tr><tr><td>--r-button-primary-border</td><td>1px solid #1989fa</td></tr><tr><td>--r-button-success-color</td><td>white</td></tr><tr><td>--r-button-success-background</td><td>#07c160</td></tr><tr><td>--r-button-success-border</td><td>1px solid #07c160</td></tr><tr><td>--r-button-danger-color</td><td>white</td></tr><tr><td>--r-button-danger-background</td><td>#ee0a24</td></tr><tr><td>--r-button-danger-border</td><td>1px solid #ee0a24</td></tr><tr><td>--r-button-warning-color</td><td>white</td></tr><tr><td>--r-button-warning-background</td><td>#ff976a</td></tr><tr><td>--r-button-warning-border</td><td>1px solid #ff976a</td></tr><tr><td>--r-button-large-height</td><td>50px</td></tr><tr><td>--r-button-large-font-size</td><td>16px</td></tr><tr><td>--r-button-large-padding</td><td>0 24px</td></tr><tr><td>--r-button-normal-height</td><td>44px</td></tr><tr><td>--r-button-normal-font-size</td><td>14px</td></tr><tr><td>--r-button-normal-padding</td><td>0 21px</td></tr><tr><td>--r-button-small-height</td><td>32px</td></tr><tr><td>--r-button-small-font-size</td><td>12px</td></tr><tr><td>--r-button-small-padding</td><td>0 15px</td></tr><tr><td>--r-button-mini-height</td><td>24px</td></tr><tr><td>--r-button-mini-font-size</td><td>10px</td></tr><tr><td>--r-button-mini-padding</td><td>0 11px</td></tr><tr><td>--r-button-round-radius</td><td>25px</td></tr><tr><td>--r-button-plain-background</td><td>transparent</td></tr><tr><td>--r-button-disabled-opacity</td><td>0.5</td></tr></tbody></table>',9),P={},I="",T=s({__name:"README",setup(S,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(N,V)=>{const d=c("hljs-block");return a(),l("div",m,[A,t("p",null,[n(d,{code:r(p)},null,8,["code"])]),C,y,t("p",null,[n(d,{code:r(i)},null,8,["code"])]),g,t("p",null,[n(d,{code:r(b)},null,8,["code"])]),_,D,t("p",null,[n(d,{code:r(h)},null,8,["code"])]),f,w,t("p",null,[n(d,{code:r(E)},null,8,["code"])]),v,x,t("p",null,[n(d,{code:r(F)},null,8,["code"])]),k,j,t("p",null,[n(d,{code:r(B)},null,8,["code"])]),z])}}});export{T as default,I as excerpt,P as frontmatter};
