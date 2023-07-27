import{d as c,o as n,c as o,a as t,b as l,u as d,e as u,W as r,g as a}from"./plugin-vueexport-helper.js";const i=`<template>
  <h2>\u57FA\u7840\u7528\u6CD5</h2>
  <r-cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
  <r-cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" title-desc="\u63CF\u8FF0\u4FE1\u606F" />
  <r-cell title="\u70B9\u51FB\u6D4B\u8BD5" :border="false" @click="testClick" />
</template>

<script lang="ts" setup>
const testClick = () => alert('click');
<\/script>
`,F=`<template>
  <r-cell-group title="\u5206\u7EC4\u6807\u9898" round>
    <r-cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" />
    <r-cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" title-desc="\u63CF\u8FF0\u4FE1\u606F" />
  </r-cell-group>
</template>
`,h=`<template>
  <h2>\u5355\u5143\u683C\u5927\u5C0F</h2>
  <r-cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" size="large" />
  <r-cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" size="large" title-desc="\u63CF\u8FF0\u4FE1\u606F" />
</template>
`,p=`<template>
  <h2>\u5C55\u793A\u7BAD\u5934</h2>
  <r-cell title="\u5355\u5143\u683C" is-link />
  <r-cell title="\u5355\u5143\u683C" is-link value="\u5185\u5BB9" />
  <r-cell title="\u5355\u5143\u683C" is-link arrow-direction="down" value="\u5185\u5BB9" />
</template>
`,E=`<template>
  <h2>\u9875\u9762\u5BFC\u822A</h2>
  <r-cell title="URL \u8DF3\u8F6C" is-link url="https://github.com" />
  <r-cell title="\u8DEF\u7531\u8DF3\u8F6C" is-link to="/button" />
</template>
`,C=`<template>
  <h2>\u63D2\u69FD</h2>
  <r-cell :border="false">
    <template #left-icon>
      <div style="height: 40px; width: 40px; border-radius: 50%; background: rgb(229, 229, 229)"></div>
    </template>
    <template #title>title</template>
    <template #title-desc> <strong>title desc</strong></template>
    <template #value>content</template>
    <template #right-icon>
      <r-icon name="loading" />
    </template>
  </r-cell>
</template>
`,B=`<template>
  <h2>\u9876\u90E8\u5BF9\u9F50</h2>
  <r-cell title="\u5355\u5143\u683C" value="\u5185\u5BB9" title-desc="\u63CF\u8FF0\u4FE1\u606F" :border="false" :center="false" />
</template>
`,A={class:"markdown-body"},g=r(`<h1>Cell \u5355\u5143\u683C</h1><h3>\u4ECB\u7ECD</h3><p>\u5355\u5143\u683C\u4E3A\u5217\u8868\u4E2D\u7684\u5355\u4E2A\u5C55\u793A\u9879\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Cell</span>, <span class="hljs-title class_">CellGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Cell</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CellGroup</span>);
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><p><code class="">Cell</code> \u53EF\u4EE5\u5355\u72EC\u4F7F\u7528\u3002</p>`,7),D=t("code",{class:""},"CellGroup",-1),_=t("h3",null,"\u5355\u5143\u683C\u5927\u5C0F",-1),m=t("p",null,[u("\u901A\u8FC7 "),t("code",{class:""},"size"),u(" \u5C5E\u6027\u53EF\u4EE5\u63A7\u5236\u5355\u5143\u683C\u7684\u5927\u5C0F\u3002")],-1),b=t("h3",null,"\u5C55\u793A\u7BAD\u5934",-1),f=t("p",null,[u("\u8BBE\u7F6E "),t("code",{class:""},"is-link"),u(" \u5C5E\u6027\u540E\u4F1A\u5728\u5355\u5143\u683C\u53F3\u4FA7\u663E\u793A\u7BAD\u5934\uFF0C\u5E76\u4E14\u53EF\u4EE5\u901A\u8FC7 "),t("code",{class:""},"arrow-direction"),u(" \u5C5E\u6027\u63A7\u5236\u7BAD\u5934\u65B9\u5411\u3002")],-1),v=t("h3",null,"\u9875\u9762\u5BFC\u822A",-1),k=t("p",null,[u("\u53EF\u4EE5\u901A\u8FC7 "),t("code",{class:""},"url"),u(" \u5C5E\u6027\u8FDB\u884C URL \u8DF3\u8F6C\uFF0C\u6216\u901A\u8FC7 "),t("code",{class:""},"to"),u(" \u5C5E\u6027\u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C\u3002")],-1),j=t("h3",null,"\u63D2\u69FD",-1),x=t("p",null,[u("\u901A\u8FC7 slot "),t("code",{class:""},"left-icon"),u(),t("code",{class:""},"right-icon"),u(),t("code",{class:""},"title-desc"),u(" \u53EF\u4EE5\u63D2\u5165\u5DE6\u53F3Icon\u3001\u6807\u9898\u5185\u5BB9\u3001\u63CF\u8FF0\u5185\u5BB9\u7B49")],-1),y=t("h3",null,"\u9876\u90E8\u5BF9\u9F50",-1),S=t("p",null,[u("\u901A\u8FC7 "),t("code",{class:""},"center"),u(" \u5C5E\u6027\u53EF\u4EE5\u8BA9 "),t("code",{class:""},"Cell"),u(" \u7684\u5DE6\u53F3\u5185\u5BB9\u90FD\u5782\u76F4\u5C45\u4E2D\u3002")],-1),w=r('<h3>CellGroup Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u5206\u7EC4\u6807\u9898</td><td>String</td><td>-</td></tr><tr><td>round</td><td>\u662F\u5426\u5706\u89D2\u5C55\u793A</td><td>Boolean</td><td>false</td></tr></tbody></table><h3>Cell Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898\u540D\u79F0</td><td>String | VNode</td><td>-</td></tr><tr><td>title-desc</td><td>\u6807\u9898\u63CF\u8FF0</td><td>String</td><td>-</td></tr><tr><td>title-align</td><td>\u6807\u9898\u5BF9\u9F50 \u53EF\u9009\u503C\u4E3A <code class="">left</code> <code class="">center</code> <code class="">right</code></td><td>String</td><td>-</td></tr><tr><td>value</td><td>\u53F3\u4FA7\u5185\u5BB9</td><td>String</td><td>-</td></tr><tr><td>value-align</td><td>\u53F3\u4FA7\u5185\u5BB9\u5BF9\u9F50 \u53EF\u9009\u503C\u4E3A <code class="">left</code> <code class="">center</code> <code class="">right</code></td><td>String</td><td>-</td></tr><tr><td>border</td><td>\u662F\u5426\u663E\u793A\u4E0B\u8FB9\u6846</td><td>Boolean</td><td>true</td></tr><tr><td>center</td><td>\u662F\u5426\u4F7F\u5185\u5BB9\u5782\u76F4\u5C45\u4E2D</td><td>Boolean</td><td>true</td></tr><tr><td>size</td><td>\u5355\u5143\u683C\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">large</code></td><td>String</td><td>-</td></tr><tr><td>is-link</td><td>\u662F\u5426\u5C55\u793A\u53F3\u4FA7\u7BAD\u5934\u5E76\u5F00\u542F\u70B9\u51FB\u53CD\u9988</td><td>Boolean</td><td>false</td></tr><tr><td>url</td><td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u94FE\u63A5\u5730\u5740</td><td>String</td><td>-</td></tr><tr><td>to</td><td>\u70B9\u51FB\u540E\u8DF3\u8F6C\u7684\u76EE\u6807\u8DEF\u7531\u5BF9\u8C61\uFF0C\u540C vue-router \u7684 <a href="https://router.vuejs.org/zh/api/#to">to \u5C5E\u6027</a> \u5C5E\u6027</td><td>String \uFF5C Object</td><td>-</td></tr><tr><td>replace</td><td>\u662F\u5426\u5728\u8DF3\u8F6C\u65F6\u66FF\u6362\u5F53\u524D\u9875\u9762\u5386\u53F2</td><td>Boolean</td><td>false</td></tr><tr><td>arrow-direction</td><td>\u5355\u5143\u683C\u5927\u5C0F\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">up</code> <code class="">down</code> <code class="">left</code></td><td>String</td><td>right</td></tr></tbody></table><h3>Cell Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u6807\u9898</td></tr><tr><td>title-desc</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u4E0B\u65B9\u7684\u63CF\u8FF0\u4FE1\u606F</td></tr><tr><td>value</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u5185\u5BB9</td></tr><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>left-icon</td><td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u56FE\u6807</td></tr><tr><td>right-icon</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u56FE\u6807</td></tr><tr><td>extra</td><td>\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6700\u53F3\u4FA7\u7684\u989D\u5916\u5185\u5BB9</td></tr></tbody></table><h3>CellGroup Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>title</td><td>\u81EA\u5B9A\u4E49<code class="">title</code>\u6807\u9898\u533A\u57DF</td></tr><tr><td>value</td><td>\u9ED8\u8BA4\u63D2\u69FD</td></tr></tbody></table><h3>Cell Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u5355\u5143\u683C\u65F6\u89E6\u53D1</td><td>event:MouseEvent</td></tr></tbody></table><h3>\u6837\u5F0F\u53D8\u91CF</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>--r-cell-vertical-padding</td><td>10px</td></tr><tr><td>--r-cell-horizontal-padding</td><td>16px</td></tr><tr><td>--r-cell-color</td><td>#666</td></tr><tr><td>--r-cell-font-size</td><td>14px</td></tr><tr><td>--r-cell-line-height</td><td>24px</td></tr><tr><td>--r-cell-background</td><td>#fff</td></tr><tr><td>--r-cell-title-desc-font-size</td><td>12px</td></tr><tr><td>--r-cell-title-desc-line-height</td><td>18px</td></tr><tr><td>--r-cell-title-desc-color</td><td>#666</td></tr><tr><td>--r-cell-title-desc-margin-top</td><td>4px</td></tr><tr><td>--r-cell-value-color</td><td>#ccc</td></tr><tr><td>--r-cell-border-color</td><td>#ccc</td></tr><tr><td>--r-cell-right-icon-margin-left</td><td>4px</td></tr><tr><td>--r-cell-left-icon-margin-right</td><td>4px</td></tr><tr><td>--r-cell-large-vertical-padding</td><td>12px</td></tr><tr><td>--r-cell-large-title-font-size</td><td>16px</td></tr><tr><td>--r-cell-active-background-color</td><td>rgba(0, 0, 0, 0.1)</td></tr></tbody></table>',12),R={},L="",M=c({__name:"README",setup(z,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(G,N)=>{const e=a("hljs-block");return n(),o("div",A,[g,t("p",null,[l(e,{code:d(i)},null,8,["code"])]),t("p",null,[u("\u4E5F\u53EF\u4EE5\u4E8E "),D,u(" \u642D\u914D\u4F7F\u7528\uFF0C\u5C55\u793A\u5206\u7EC4\u6807\u9898\uFF0C\u8F6C\u6362\u4E3A\u5706\u89D2\u5361\u7247\u98CE\u683C. "),l(e,{code:d(F)},null,8,["code"])]),_,m,t("p",null,[l(e,{code:d(h)},null,8,["code"])]),b,f,t("p",null,[l(e,{code:d(p)},null,8,["code"])]),v,k,t("p",null,[l(e,{code:d(E)},null,8,["code"])]),j,x,t("p",null,[l(e,{code:d(C)},null,8,["code"])]),y,S,t("p",null,[l(e,{code:d(B)},null,8,["code"])]),w])}}});export{M as default,L as excerpt,R as frontmatter};
