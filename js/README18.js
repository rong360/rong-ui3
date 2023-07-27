import{d as l,o as a,c,a as e,b as o,u,W as n,g as s,e as t}from"./_plugin-vue_export-helper.js";const i=`<template>
  <r-cell-group title="\u57FA\u7840\u7528\u6CD5">
    <r-cell :border="false">
      <r-radio-group v-model="checked">
        <r-radio name="a">\u5355\u9009\u6846 A</r-radio>
        <r-radio name="b">\u5355\u9009\u6846 B</r-radio>
        <r-radio name="c">\u5355\u9009\u6846 C</r-radio>
        <r-radio name="d" v-if="show"> \u5355\u9009\u6846 D (\u7981\u7528)</r-radio>
        <r-radio name="e" disabled>\u5355\u9009\u6846 E (\u9009\u4E2D\u4E14\u7981\u7528)</r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');

const show = ref(true);

setTimeout(() => {
  show.value = false;
}, 2000);
<\/script>
`,p=`<template>
  <r-cell-group title="\u7981\u7528\u6587\u672C\u70B9\u51FB">
    <r-cell :border="false">
      <r-radio-group v-model="checked">
        <r-radio name="a" label-disabled>\u5355\u9009\u6846 A</r-radio>
        <r-radio name="b" label-disabled>\u5355\u9009\u6846 B</r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');
<\/script>
`,h=`<template>
  <r-cell-group title="\u5DE6\u4FA7\u6587\u672C">
    <r-cell :border="false">
      <r-radio-group v-model="checked">
        <r-radio name="a" text-position="left">\u5355\u9009\u6846 A</r-radio>
        <r-radio name="b" text-position="left">\u5355\u9009\u6846 B</r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');
<\/script>
`,m=`<template>
  <r-cell-group title="\u81EA\u5B9A\u4E49\u5927\u5C0F">
    <r-cell>
      <r-radio-group v-model="checked">
        <r-radio name="a" style="font-size: 16px">\u81EA\u5B9A\u4E49\u5C3A\u5BF816 </r-radio>
        <r-radio name="b" :icon-style="{ fontSize: '16px' }">\u5355\u72EC\u5B9A\u4E49icon 16 </r-radio>
        <r-radio name="c" class="custom-radio-size">\u901A\u8FC7class\u81EA\u5B9A\u4E49\u5C3A\u5BF8 </r-radio>
        <r-radio name="d" class="custom-radio-icon-size">\u901A\u8FC7class\u81EA\u5B9A\u4E49icon\u5C3A\u5BF8 </r-radio>
      </r-radio-group>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');
<\/script>

<style lang="less" scoped>
.custom-radio-size {
  --r-radio-font-size: 16px;
}
.custom-radio-icon-size {
  --r-radio-icon-font-size: 16px;
}
</style>
`,E=`<template>
  <r-cell-group title="\u81EA\u5B9A\u4E49\u989C\u8272">
    <r-cell>
      <r-radio-group v-model="checked">
        <r-radio name="a" class="custom-radio-color">\u81EA\u5B9A\u4E49\u989C\u8272 </r-radio>
        <r-radio name="b" class="custom-radio-color">\u81EA\u5B9A\u4E49\u989C\u8272 </r-radio>
      </r-radio-group>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');
<\/script>

<style lang="less" scoped>
.custom-radio-color {
  --r-radio-icon-color: green;
  --r-radio-icon-checked-color: red;
  --r-radio-icon-indeterminate-color: green;
}
</style>
`,F=`<template>
  <r-cell-group title="\u81EA\u5B9A\u4E49\u56FE\u6807">
    <r-cell>
      <r-radio-group v-model="checked">
        <r-radio name="a">
          <template #icon> \u672A\u9009\u62E9 </template> <template #checkedIcon> \u5DF2\u9009\u62E9</template>
          \u5355\u9009\u6846
        </r-radio>
        <r-radio name="b">
          <template #icon> \u672A\u9009\u62E9 </template> <template #checkedIcon> \u5DF2\u9009\u62E9</template>
          \u5355\u9009\u6846
        </r-radio>
      </r-radio-group>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');
<\/script>
`,g=`<template>
  <r-cell-group title="change\u4E8B\u4EF6">
    <r-cell :border="false">
      <r-radio-group v-model="checked" @change="onChange">
        <r-radio name="a">\u5355\u9009\u6846 A</r-radio>
        <r-radio name="b">\u5355\u9009\u6846 B</r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');

const onChange = (name: string) => {
  console.log(name);
};
<\/script>
`,C=`<template>
  <r-cell-group title="\u6C34\u5E73\u6392\u5217">
    <r-cell :border="false">
      <r-radio-group v-model="checked" direction="horizontal">
        <r-radio name="a">\u590D\u9009\u6846 A</r-radio>
        <r-radio name="b">\u590D\u9009\u6846 B</r-radio>
        <r-radio name="c">\u590D\u9009\u6846 C</r-radio>
        <r-radio name="d"> \u590D\u9009\u6846 D </r-radio>
        <r-radio name="e"> \u590D\u9009\u6846 E </r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');
<\/script>
`,f=`<template>
  <r-cell-group title="radioGroup\u7981\u7528">
    <r-cell :border="false">
      <r-radio-group v-model="checked" disabled>
        <r-radio name="a">\u5355\u9009\u6846 A</r-radio>
        <r-radio name="b">\u5355\u9009\u6846 B</r-radio>
        <r-radio name="c">\u5355\u9009\u6846 C</r-radio>
        <r-radio name="d"> \u5355\u9009\u6846 D </r-radio>
        <r-radio name="e"> \u5355\u9009\u6846 E </r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');
<\/script>
`,b=`<template>
  <r-cell-group title="\u6309\u94AE\u5F62\u72B6">
    <r-cell :border="false">
      <r-radio-group v-model="checked" direction="horizontal">
        <r-radio name="a" shape="button">\u5355\u9009\u6846 A</r-radio>
        <r-radio name="b" shape="button">\u5355\u9009\u6846 B</r-radio>
        <r-radio name="c" shape="button">\u5355\u9009\u6846 C</r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
    <r-cell>
      <r-radio-group v-model="checked2" direction="horizontal">
        <r-radio name="a" shape="round">\u5355\u9009\u6846 A</r-radio>
        <r-radio name="b" shape="round">\u5355\u9009\u6846 B</r-radio>
        <r-radio name="c" shape="round">\u5355\u9009\u6846 C</r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked2 }}</r-cell>
    <r-cell :border="false">
      <r-radio-group v-model="checked3" direction="horizontal">
        <r-radio name="a" shape="square">\u5355\u9009\u6846 A</r-radio>
        <r-radio name="b" shape="square">\u5355\u9009\u6846 B</r-radio>
        <r-radio name="c" shape="square">\u5355\u9009\u6846 C</r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked3 }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');
const checked2 = ref(['a']);
const checked3 = ref(['a']);
<\/script>
`,B=`<template>
  <r-radio-group v-model="checked" ref="group">
    <r-cell-group title="\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528">
      <r-cell v-for="item in list" :key="item" @click="onClickCell(item)">
        <template #title>\u5355\u9009\u6846 {{ item }}</template>
        <template #right-icon>
          <r-radio :name="item" />
        </template>
      </r-cell>
      <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
    </r-cell-group>
  </r-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const list = ref(['a', 'b']);
const checked = ref('a');
const group = ref();

const onClickCell = (name: string) => {
  checked.value = name;
};
<\/script>
`,_={class:"markdown-body"},k=n(`<h1>Radio \u5355\u9009\u6846</h1><h3>\u4ECB\u7ECD</h3><p>\u5728\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u5355\u9009\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-ts"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Radio</span>, <span class="hljs-title class_">RadioGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Radio</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">RadioGroup</span>);
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><p>\u901A\u8FC7 <code class="">v-model</code> \u7ED1\u5B9A\u503C\u5F53\u524D\u9009\u4E2D\u9879\u7684 name\u3002<br> \u901A\u8FC7 <code class="">shape</code> \u5C5E\u6027\u53EF\u8BBE\u7F6E\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\uFF1A<code class="">radio</code> <code class="">round</code> <code class="">square</code> <code class="">button</code></p>`,7),A=e("h3",null,"\u7981\u7528\u6587\u672C\u70B9\u51FB",-1),D=e("p",null,"\u8BBE\u7F6E label-disabled \u5C5E\u6027\u540E\uFF0C\u70B9\u51FB\u56FE\u6807\u4EE5\u5916\u7684\u5185\u5BB9\u4E0D\u4F1A\u89E6\u53D1\u5355\u9009\u6846\u5207\u6362\u3002",-1),v=e("h3",null,"\u5DE6\u4FA7\u6587\u672C",-1),y=e("p",null,"\u5C06 text-position \u5C5E\u6027\u8BBE\u7F6E\u4E3A 'left'\uFF0C\u53EF\u4EE5\u5C06\u6587\u672C\u4F4D\u7F6E\u8C03\u6574\u5230\u5355\u9009\u6846\u5DE6\u4FA7\u3002",-1),z=e("h3",null,"\u81EA\u5B9A\u4E49\u5927\u5C0F",-1),x=e("p",null,[t("\u901A\u8FC7\u8BBE\u7F6E "),e("code",{class:""},"style"),t(" \u6216\u8005 "),e("code",{class:""},"class"),t(" \u7684font-size\u53EF\u4EE5\u63A7\u5236 "),e("code",{class:""},"Icon"),t(" \u5927\u5C0F\u3002")],-1),j=e("h3",null,"\u81EA\u5B9A\u4E49\u989C\u8272",-1),R=e("p",null,[t("\u901A\u8FC7\u8BBE\u7F6E "),e("code",{class:""},"class"),t(" \u7684color\u53EF\u4EE5\u63A7\u5236 "),e("code",{class:""},"Icon"),t(" \u989C\u8272\u3002")],-1),G=e("h3",null,"\u81EA\u5B9A\u4E49\u56FE\u6807",-1),w=e("p",null,[t("\u901A\u8FC7 slot \u81EA\u5B9A\u4E49\u56FE\u6807, "),e("code",{class:""},"icon"),t(),e("code",{class:""},"checkedIcon"),t(" \u5206\u522B\u5BF9\u5E94 "),e("code",{class:""},"\u672A\u9009\u62E9"),t(),e("code",{class:""},"\u5DF2\u9009\u62E9"),t(" \u4E24\u79CD\u72B6\u6001\u6240\u5BF9\u5E94\u7684\u56FE\u6807\u3002")],-1),S=e("h3",null,"change\u4E8B\u4EF6",-1),I=e("p",null,[t("\u503C\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5C06\u89E6\u53D1 "),e("code",{class:""},"change"),t(" \u4E8B\u4EF6")],-1),q=e("h3",null,"\u6C34\u5E73\u6392\u5217",-1),P=e("p",null,[t("\u5C06 "),e("code",{class:""},"direction"),t(" \u5C5E\u6027\u8BBE\u7F6E\u4E3A "),e("code",{class:""},"horizontal"),t(" \u540E\uFF0C\u5355\u9009\u6846\u7EC4\u4F1A\u53D8\u6210\u6C34\u5E73\u6392\u5217\u3002")],-1),N=e("h3",null,"RadioGroup\u7981\u7528",-1),V=e("p",null,[e("code",{class:""},"RadioGroup"),t(" \u8BBE\u7F6E "),e("code",{class:""},"disabled"),t(" \u5C5E\u6027\u53EF\u4EE5\u7981\u7528\u5355\u9009\u6846\u3002")],-1),T=e("h3",null,"\u6309\u94AE\u5F62\u72B6",-1),L=e("p",null,[t("\u8BBE\u7F6E "),e("code",{class:""},"shape"),t(" \u5C5E\u6027\u53EF\u6539\u53D8\u5355\u9009\u6846\u4E3A "),e("code",{class:""},"button"),t(" \u6216 "),e("code",{class:""},"square"),t(" \u5F62\u72B6\u3002")],-1),M=e("h3",null,"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528",-1),W=e("p",null,[t("\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528\u65F6\uFF0C\u9700\u8981\u518D\u5F15\u5165 "),e("code",{class:""},"Cell"),t(" \u548C "),e("code",{class:""},"CellGroup"),t(" \u7EC4\u4EF6\u3002")],-1),H=n('<h2>API</h2><h3>Radio Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u662F\u5426\u5904\u4E8E\u9009\u4E2D\u72B6\u6001</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u9009\u62E9</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>label-disabled</td><td>\u662F\u5426\u7981\u7528\u5355\u9009\u6846\u6587\u672C\u70B9\u51FB</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>text-position</td><td>\u6587\u672C\u6240\u5728\u7684\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\uFF1A<code class="">left</code>,<code class="">right</code></td><td>string</td><td><code class="">right</code></td></tr><tr><td>shape</td><td>\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\uFF1A <code class="">radio</code> <code class="">round</code> <code class="">square</code> <code class="">button</code>\u3001</td><td>String</td><td><code class="">radio</code></td></tr><tr><td>icon-style</td><td>\u81EA\u5B9A\u4E49icon\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr></tbody></table><h3>Radio Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>icon</td><td>\u672A\u9009\u4E2D\u65F6\u7684\u56FE\u6807</td></tr><tr><td>checkedIcon</td><td>\u9009\u4E2D\u65F6\u7684\u56FE\u6807</td></tr></tbody></table><h3>RadioGroup Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26\uFF0C\u548C <code class="">name</code> \u76F8\u5BF9\u5E94</td><td>any</td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u9009\u62E9,\u5C06\u7528\u4E8E\u5176\u4E0B\u7684\u5168\u90E8\u5355\u9009\u6846</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>direction</td><td>\u6392\u5217\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">horizontal</code></td><td>string</td><td><code class="">vertical</code></td></tr></tbody></table><h3>RadioGroup Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>name: string</td></tr></tbody></table><h3>\u6837\u5F0F\u53D8\u91CF</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>--r-radio-line-height</td><td>var(--r-line-height-md)</td></tr><tr><td>--r-radio-line-height</td><td>var(--r-line-height-md)</td></tr><tr><td>--r-radio-font-size</td><td>var(--r-font-size-md)</td></tr><tr><td>--r-radio-label-margin-left</td><td>var(--r-padding-xs)</td></tr><tr><td>--r-radio-horizontal-margin-right</td><td>var(--r-padding-sm)</td></tr><tr><td>--r-radio-label-margin-left</td><td>var(--r-padding-xs)</td></tr><tr><td>--r-radio-label-disabled-color</td><td>#999</td></tr><tr><td>--r-radio-icon-color</td><td>#d6d6d6</td></tr><tr><td>--r-radio-icon-font-size</td><td>inherit</td></tr><tr><td>--r-radio-icon-checked-color</td><td>var(--r-primary-color)</td></tr><tr><td>--r-radio-icon-indeterminate-color</td><td>var(--r-primary-color)</td></tr><tr><td>--r-radio-icon-disabled-color</td><td>#d6d6d6</td></tr><tr><td>--r-radio-button-background</td><td>#f6f7f9</td></tr><tr><td>--r-radio-button-border-radius</td><td>15px</td></tr><tr><td>--r-radio-button-padding</td><td>5px 18px</td></tr><tr><td>--r-radio-button-checked-background</td><td>#666</td></tr><tr><td>--r-radio-button-checked-color</td><td>#fff</td></tr></tbody></table>',11),U={},X="",Y=l({__name:"README",setup(J,{expose:d}){return d({frontmatter:{},excerpt:void 0}),(K,O)=>{const r=s("hljs-block");return a(),c("div",_,[k,e("p",null,[o(r,{code:u(i)},null,8,["code"])]),A,D,e("p",null,[o(r,{code:u(p)},null,8,["code"])]),v,y,e("p",null,[o(r,{code:u(h)},null,8,["code"])]),z,x,e("p",null,[o(r,{code:u(m)},null,8,["code"])]),j,R,e("p",null,[o(r,{code:u(E)},null,8,["code"])]),G,w,e("p",null,[o(r,{code:u(F)},null,8,["code"])]),S,I,e("p",null,[o(r,{code:u(g)},null,8,["code"])]),q,P,e("p",null,[o(r,{code:u(C)},null,8,["code"])]),N,V,e("p",null,[o(r,{code:u(f)},null,8,["code"])]),T,L,e("p",null,[o(r,{code:u(b)},null,8,["code"])]),M,W,e("p",null,[o(r,{code:u(B)},null,8,["code"])]),H])}}});export{Y as default,X as excerpt,U as frontmatter};
