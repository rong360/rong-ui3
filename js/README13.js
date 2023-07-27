import{d as s,o as l,c as o,a as t,b as e,u as d,W as r,g as c,e as n}from"./plugin-vueexport-helper.js";const i=`<template>
  <h2>\u57FA\u7840\u7528\u6CD5</h2>
  <r-nav-bar title="\u6807\u9898" />
</template>
`,p=`<template>
  <h2>\u8FD4\u56DE\u4E0A\u7EA7</h2>
  <r-nav-bar title="\u6807\u9898" :show-arrow-left="true" left-text="\u8FD4\u56DE" @click-left="clickLeft" />
  <br />
  <r-nav-bar title="\u6807\u9898" :show-arrow-left="true" :left-text="leftText" />
</template>

<script lang="ts" setup>
import { createVNode } from 'vue';

const clickLeft = () => alert('back');

// left-text\u3001right-text\u3001title\u7C7B\u578B\u53EF\u4EE5\u662Fstring \u6216\u8005 vNode
const leftText = createVNode('span', { style: { color: 'red' } }, '\u8FD4\u56DE');
<\/script>
`,h=`<template>
  <h2>\u53F3\u4FA7\u6309\u94AE</h2>
  <r-nav-bar
    title="\u6807\u9898"
    :show-arrow-left="true"
    left-text="\u8FD4\u56DE"
    right-text="\u6309\u94AE"
    @click-left="clickLeft"
    @click-right="clickRight"
  />
</template>

<script lang="ts" setup>
const clickLeft = () => alert('back');
const clickRight = () => alert('\u6309\u94AE');
<\/script>
`,F=`<template>
  <h2>\u4F7F\u7528\u63D2\u69FD</h2>
  <r-nav-bar>
    <template #left> back </template>
    title
    <template #right> button </template>
    <template #bottom>
      <div class="tips" style="background-color: lightyellow; font-size: 12px; padding: 5px 15px">
        this is tips info.
      </div>
    </template>
  </r-nav-bar>
</template>
`,E=`<template>
  <h2>\u56FA\u5B9A\u5230\u9876\u90E8</h2>
  <r-nav-bar
    title="\u6807\u9898"
    :show-arrow-left="true"
    left-text="\u8FD4\u56DE"
    :fixed="fixed"
    safe-area-inset-top
    placeholder
    style="z-index: 100"
    class-name="custom"
  >
    <template #bottom>
      <div class="tips" style="background-color: lightyellow; font-size: 12px; padding: 5px 15px">
        this is tips info.
      </div>
    </template>
  </r-nav-bar>
  <r-button @click="fixed = !fixed" type="primary">{{ fixed ? '\u53D6\u6D88\u56FA\u5B9A\u5230\u9876\u90E8' : '\u56FA\u5B9A\u5230\u9876\u90E8' }}</r-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const fixed = ref(false);
<\/script>
`,f={class:"markdown-body"},A=r(`<h1>Navbar \u5934\u90E8\u5BFC\u822A</h1><h3>\u4ECB\u7ECD</h3><p>\u4E3A\u9875\u9762\u63D0\u4F9B\u5BFC\u822A\u529F\u80FD\uFF0C\u5E38\u7528\u4E8E\u9875\u9762\u9876\u90E8\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">NavBar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">NavBar</span>);
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><p>\u901A\u8FC7 <code class="">title</code> \u5C5E\u6027\u8BBE\u7F6E\u5BFC\u822A\u680F\u6807\u9898\u3002</p>`,7),B=t("h3",null,"\u8FD4\u56DE\u4E0A\u7EA7",-1),b=t("p",null,"\u5728\u5BFC\u822A\u680F\u5B9E\u73B0\u8FD4\u56DE\u4E0A\u7EA7\u529F\u80FD\u3002",-1),g=t("h3",null,"\u53F3\u4FA7\u6309\u94AE",-1),m=t("p",null,"\u5728\u5BFC\u822A\u680F\u53F3\u4FA7\u6DFB\u52A0\u53EF\u70B9\u51FB\u7684\u6309\u94AE\u3002",-1),D=t("h3",null,"\u4F7F\u7528\u63D2\u69FD",-1),v=t("p",null,"\u53EF\u4EE5\u901A\u8FC7\u63D2\u69FD\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u4E24\u4FA7\u7684\u5185\u5BB9\u3002",-1),x=t("h3",null,"\u56FA\u5B9A\u5230\u9876\u90E8",-1),_=t("p",null,[n("\u901A\u8FC7 "),t("code",{class:""},"fixed"),n(" \u5C5E\u6027\u56FA\u5B9A\u5230\u9876\u90E8\u3002\u540C\u65F6\u53EF\u4EE5\u7528 "),t("code",{class:""},"placeholder"),n(" \u5C5E\u6027\u8BBE\u7F6E\u662F\u5426\u5728\u6807\u7B7E\u4F4D\u7F6E\u751F\u6210\u4E00\u4E2A\u7B49\u9AD8\u7684\u5360\u4F4D\u5143\u7D20")],-1),C=r('<h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898\u540D\u79F0</td><td>string\uFF5CVNode</td><td>-</td></tr><tr><td>left-text</td><td>\u5DE6\u4FA7\u6587\u6848</td><td>string\uFF5CVNode</td><td>-</td></tr><tr><td>left-style</td><td>\u5DE6\u4FA7\u6837\u5F0F</td><td>string</td><td>-</td></tr><tr><td>show-left-arrow</td><td>\u662F\u5426\u5C55\u793A\u5DE6\u4FA7\u7BAD\u5934</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>right-text</td><td>\u53F3\u4FA7\u6587\u6848</td><td>string\uFF5CVNode</td><td>-</td></tr><tr><td>right-style</td><td>\u53F3\u4FA7\u6837\u5F0F</td><td>string</td><td>-</td></tr><tr><td>border</td><td>\u662F\u5426\u663E\u793A\u4E0B\u8FB9\u6846</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>fixed</td><td>\u662F\u5426\u56FA\u5B9A\u5230\u9876\u90E8</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>placeholder</td><td>\u56FA\u5B9A\u5728\u9876\u90E8\u65F6\uFF0C\u662F\u5426\u5728\u6807\u7B7E\u4F4D\u7F6E\u751F\u6210\u4E00\u4E2A\u7B49\u9AD8\u7684\u5360\u4F4D\u5143\u7D20</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>safe-area-inset-top</td><td>\u662F\u5426\u5F00\u542F\u9876\u90E8\u5B89\u5168\u533A\u9002\u914D</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>className</td><td>\u5BFC\u822A\u7C7B\u540D</td><td>string</td><td>-</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>left</td><td>\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u533A\u57DF\u5185\u5BB9</td></tr><tr><td>right</td><td>\u81EA\u5B9A\u4E49\u53F3\u4FA7\u533A\u57DF\u5185\u5BB9</td></tr><tr><td>bottom</td><td>\u81EA\u5B9A\u4E49\u5E95\u90E8\u533A\u57DF\u5185\u5BB9</td></tr><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click-right</td><td>\u70B9\u51FB\u5DE6\u4FA7\u6309\u94AE\u65F6\u89E6\u53D1</td><td>event:MouseEvent</td></tr><tr><td>click-right</td><td>\u70B9\u51FB\u53F3\u4FA7\u6309\u94AE\u65F6\u89E6\u53D1</td><td>event:MouseEvent</td></tr></tbody></table><h3>\u6837\u5F0F\u53D8\u91CF</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>--r-nav-bar-z-index</td><td>1</td></tr><tr><td>--r-nav-bar-background</td><td>#fff</td></tr><tr><td>--r-nav-bar-border-color</td><td>#ebedf0</td></tr><tr><td>--r-nav-bar-height</td><td>44px</td></tr><tr><td>--r-nav-bar-title-color</td><td>#323233</td></tr><tr><td>--r-nav-bar-title-font-size</td><td>16px</td></tr><tr><td>--r-nav-bar-title-font-weight</td><td>0</td></tr><tr><td>--r-nav-bar-left-padding</td><td>0 16px</td></tr><tr><td>--r-nav-bar-left-font-size</td><td>14px</td></tr><tr><td>--r-nav-bar-left-color</td><td>#1989fa</td></tr><tr><td>--r-nav-bar-arrow-margin-right</td><td>4px</td></tr><tr><td>--r-nav-bar-right-padding</td><td>0 16px</td></tr><tr><td>--r-nav-bar-right-font-size</td><td>14px</td></tr><tr><td>--r-nav-bar-right-color</td><td>#1989fa</td></tr></tbody></table>',9),N={},V="",z=s({__name:"README",setup(k,{expose:a}){return a({frontmatter:{},excerpt:void 0}),(y,w)=>{const u=c("hljs-block");return l(),o("div",f,[A,t("p",null,[e(u,{code:d(i)},null,8,["code"])]),B,b,t("p",null,[e(u,{code:d(p)},null,8,["code"])]),g,m,t("p",null,[e(u,{code:d(h)},null,8,["code"])]),D,v,t("p",null,[e(u,{code:d(F)},null,8,["code"])]),x,_,t("p",null,[e(u,{code:d(E)},null,8,["code"])]),C])}}});export{z as default,V as excerpt,N as frontmatter};
