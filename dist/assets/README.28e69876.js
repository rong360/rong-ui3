import{d as a,o as l,c as d,a as t,b as n,u as s,W as o,g as c,e as u}from"./_plugin-vue_export-helper.cbc82318.js";const p=`<template>
  <h2>\u57FA\u7840\u7528\u6CD5</h2>
  <r-button type="primary" @click="show = true">\u663E\u793A\u906E\u7F69\u5C42 {{ show }} </r-button>
  <r-overlay v-model:show="show" @click="show = false"></r-overlay>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);
<\/script>
`,h=`<template>
  <h2>\u5D4C\u5957\u5185\u5BB9</h2>
  <r-button type="primary" @click="show = true">\u5D4C\u5957\u5185\u5BB9</r-button>
  <r-overlay v-model:show="show" :close-on-click-overlay="true">
    <div class="wrapper">
      <div class="scroll-area" style="width: 120px; height: 120px; background-color: #fff; overflow-y: scroll">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        <p>15</p>
        <p>16</p>
        <p>17</p>
        <p>18</p>
        <p>19</p>
        <p>20</p>
      </div>
    </div>
  </r-overlay>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);
<\/script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
`,i=`<template>
  <h2>\u8BBE\u7F6E\u52A8\u753B\u65F6\u95F4</h2>
  <r-button type="primary" @click="show = true">\u8BBE\u7F6E\u52A8\u753B\u65F6\u95F4</r-button>
  <r-overlay v-model:show="show" :duration="2.5" :close-on-click-overlay="true"></r-overlay>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);
<\/script>
`,F=`<template>
  <h2>\u5173\u95ED\u80CC\u666F\u6E10\u53D8</h2>
  <r-button type="primary" @click="show = true">\u5173\u95ED\u80CC\u666F\u6E10\u53D8</r-button>
  <r-overlay v-model:show="show" :css-transition="false" :close-on-click-overlay="true"></r-overlay>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);
<\/script>
`,E={class:"markdown-body"},B=o(`<h1>Overlay \u906E\u7F69\u5C42</h1><h3>\u4ECB\u7ECD</h3><p>\u521B\u5EFA\u4E00\u4E2A\u906E\u7F69\u5C42\uFF0C\u901A\u5E38\u7528\u4E8E\u963B\u6B62\u7528\u6237\u8FDB\u884C\u5176\u5B83\u64CD\u4F5C</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">OverLay</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">OverLay</span>);
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><p>\u4F7F\u7528 show \u63A7\u5236\u906E\u7F69\u5C42\u7684\u663E\u793A/\u9690\u85CF</p>`,7),y=t("h3",null,"\u5D4C\u5165\u5185\u5BB9",-1),m=t("p",null,[u("\u901A\u8FC7\u9ED8\u8BA4\u63D2\u69FD\u53EF\u4EE5\u5728\u906E\u7F69\u5C42\u4E0A\u5D4C\u5165\u4EFB\u610F\u5185\u5BB9\u3002"),t("br"),t("strong",null,"\u7279\u522B\u63D0\u793A\uFF1A\u5D4C\u5957\u5185\u5BB9\u4E2D\u6709\u6EDA\u52A8\u533A\u57DF\u65F6\uFF0C\u6EDA\u52A8\u5143\u7D20\u9700\u8981\u6DFB\u52A0 scroll-area \u7C7B\u540D\u624D\u80FD\u6EDA\u52A8\u3002")],-1),D=t("h3",null,"\u8BBE\u7F6E\u52A8\u753B\u65F6\u95F4",-1),v=t("p",null,[u("\u901A\u8FC7 "),t("code",{class:""},"duration"),u(" \u8BBE\u7F6E\u906E\u7F69\u663E\u793A/\u9690\u85CF\u7684\u65F6\u95F4\uFF0C\u5355\u4F4D "),t("code",{class:""},"s")],-1),C=t("h3",null,"\u5173\u95ED\u80CC\u666F\u6E10\u53D8",-1),f=t("p",null,[u("\u901A\u8FC7 "),t("code",{class:""},"css-transition"),u(" \u8BBE\u7F6E\u80CC\u666F\u662F\u5426\u6DFB\u52A0\u6E10\u53D8\u52A8\u753B")],-1),A=o('<h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:show</td><td>\u5F53\u524D\u7EC4\u4EF6\u662F\u5426\u663E\u793A</td><td>Boolean</td><td><code class="">false</code></td></tr><tr><td>z-index</td><td>\u906E\u7F69\u5C42\u7EA7</td><td>String, Number</td><td><code class="">1000</code></td></tr><tr><td>duration</td><td>\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2</td><td>String, Number</td><td><code class="">0.3</code></td></tr><tr><td>css-transition</td><td>\u80CC\u666F\u662F\u5426\u6DFB\u52A0\u6E10\u53D8\u52A8\u753B</td><td>Boolean</td><td><code class="">true</code></td></tr><tr><td>transition-name</td><td>\u6E10\u53D8\u52A8\u753B\u540D\u79F0</td><td>String</td><td><code class="">r-overlay--fade</code></td></tr><tr><td>close-on-click-overlay</td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5173\u95ED</td><td>Boolean</td><td><code class="">true</code></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u5185\u5BB9</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td>event: MouseEvent</td></tr></tbody></table><h3>\u6837\u5F0F\u53D8\u91CF</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>--r-overlay-background</td><td>rgba(0, 0, 0, 0.7)</td></tr></tbody></table>',9),g={},j="",x=a({__name:"README",setup(b,{expose:r}){return r({frontmatter:{},excerpt:void 0}),(_,w)=>{const e=c("hljs-block");return l(),d("div",E,[B,t("p",null,[n(e,{code:s(p)},null,8,["code"])]),y,m,t("p",null,[n(e,{code:s(h)},null,8,["code"])]),D,v,t("p",null,[n(e,{code:s(i)},null,8,["code"])]),C,f,t("p",null,[n(e,{code:s(F)},null,8,["code"])]),A])}}});export{x as default,j as excerpt,g as frontmatter};
