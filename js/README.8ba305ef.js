import{d as r,o as d,c as s,a as e,b as t,u as o,X as n,g as a,e as c}from"./plugin-vueexport-helper.e98510c0.js";const h=`<template>
  <r-cell-group title="\u57FA\u7840\u7528\u6CD5">
    <r-cell>
      <r-checkbox v-model="checked">\u590D\u9009\u6846 </r-checkbox>
    </r-cell>
    <r-cell>
      <r-checkbox v-model="checked2" shape="square">\u590D\u9009\u6846 </r-checkbox>
    </r-cell>
    <r-cell>
      <r-checkbox v-model="checked3" shape="button">\u590D\u9009\u6846 </r-checkbox>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
<\/script>
`,i=`<template>
  <h2>\u534A\u9009\u72B6\u6001</h2>
  <r-cell :border="false"> <r-checkbox v-model="checked" :indeterminate="true">\u590D\u9009\u6846 </r-checkbox> </r-cell>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>
`,p=`<template>
  <r-cell-group title="\u7981\u7528\u72B6\u6001">
    <r-cell>
      <r-checkbox v-model="checked" disabled>\u672A\u9009\u65F6\u7981\u7528 </r-checkbox>
    </r-cell>
    <r-cell>
      <r-checkbox v-model="checked2" disabled>\u9009\u4E2D\u65F6\u7981\u7528 </r-checkbox>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(false);
const checked2 = ref(true);
<\/script>
`,b=`<template>
  <r-cell-group title="\u7981\u7528\u6587\u672C\u70B9\u51FB">
    <r-cell>
      <r-checkbox v-model="checked" label-disabled> \u590D\u9009\u6846 </r-checkbox>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(true);
<\/script>
`,k=`<template>
  <r-cell-group title="\u5DE6\u4FA7\u6587\u672C">
    <r-cell>
      <r-checkbox v-model="checked" text-position="left">\u590D\u9009\u6846 </r-checkbox>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(true);
<\/script>
`,m=`<template>
  <r-cell-group title="\u81EA\u5B9A\u4E49\u5927\u5C0F">
    <r-cell>
      <r-checkbox v-model="checked" style="font-size: 16px">\u81EA\u5B9A\u4E49\u5C3A\u5BF816 </r-checkbox>
    </r-cell>
    <r-cell>
      <r-checkbox v-model="checked2" :icon-style="{ fontSize: '16px' }">\u5355\u72EC\u5B9A\u4E49icon 16 </r-checkbox>
    </r-cell>
    <r-cell>
      <r-checkbox v-model="checked3" class="custom-checkbox-size">\u901A\u8FC7class\u81EA\u5B9A\u4E49\u5C3A\u5BF8 </r-checkbox>
    </r-cell>
    <r-cell>
      <r-checkbox v-model="checked4" class="custom-checkbox-icon-size">\u901A\u8FC7class\u81EA\u5B9A\u4E49icon\u5C3A\u5BF8 </r-checkbox>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
<\/script>

<style lang="less" scoped>
.custom-checkbox-size {
  --r-checkbox-font-size: 16px;
}
.custom-checkbox-icon-size {
  --r-checkbox-icon-font-size: 16px;
}
</style>
`,x=`<template>
  <r-cell-group title="\u81EA\u5B9A\u4E49\u989C\u8272">
    <r-cell>
      <r-checkbox v-model="checked" class="custom-checkbox-color">\u81EA\u5B9A\u4E49\u989C\u8272 </r-checkbox>
    </r-cell>
    <r-cell>
      <r-checkbox v-model="checked2" class="custom-checkbox-color">\u81EA\u5B9A\u4E49\u989C\u8272 </r-checkbox>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(true);
const checked2 = ref(false);
<\/script>

<style lang="less" scoped>
.custom-checkbox-color {
  --r-checkbox-icon-color: green;
  --r-checkbox-icon-checked-color: red;
  --r-checkbox-icon-indeterminate-color: green;
}
</style>
`,E=`<template>
  <h2>\u81EA\u5B9A\u4E49\u56FE\u6807</h2>
  <r-cell :border="false">
    <r-checkbox v-model="checked" :indeterminate="true">
      <template #icon> \u672A\u9009\u62E9 </template>
      <template #checkedIcon> \u5DF2\u9009\u62E9</template>
      <template #indeterminate> \u534A\u9009\u62E9 </template>
      \u590D\u9009\u6846
    </r-checkbox>
  </r-cell>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(true);
<\/script>
`,F=`<template>
  <h2>change\u4E8B\u4EF6</h2>
  <r-cell :border="false">
    <r-checkbox v-model="checked" @change="onChange">\u590D\u9009\u6846 </r-checkbox>
  </r-cell>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(true);

const onChange = (checked: boolean, label: string) => {
  console.log(checked, label);
};
<\/script>
`,C=`<template>
  <r-cell-group title="\u590D\u9009\u6846\u7EC4">
    <r-cell :border="false">
      <r-checkbox-group v-model="checked">
        <r-checkbox name="a">\u590D\u9009\u6846 A</r-checkbox>
        <r-checkbox name="b">\u590D\u9009\u6846 B</r-checkbox>
        <r-checkbox name="c">\u590D\u9009\u6846 C</r-checkbox>
        <r-checkbox name="d" v-if="show"> \u590D\u9009\u6846 D (\u7981\u7528)</r-checkbox>
        <r-checkbox name="e" disabled>\u590D\u9009\u6846 E (\u9009\u4E2D\u4E14\u7981\u7528)</r-checkbox>
      </r-checkbox-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(['a', 'b', 'e']);

const show = ref(true);

setTimeout(() => {
  show.value = false;
}, 2000);
<\/script>
`,g=`<template>
  <r-cell-group title="\u6C34\u5E73\u6392\u5217">
    <r-cell :border="false">
      <r-checkbox-group v-model="checked" direction="horizontal">
        <r-checkbox name="a">\u590D\u9009\u6846 A</r-checkbox>
        <r-checkbox name="b">\u590D\u9009\u6846 B</r-checkbox>
        <r-checkbox name="c">\u590D\u9009\u6846 C</r-checkbox>
        <r-checkbox name="d"> \u590D\u9009\u6846 D </r-checkbox>
        <r-checkbox name="e"> \u590D\u9009\u6846 E </r-checkbox>
      </r-checkbox-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(['a', 'd']);
<\/script>
`,f=`<template>
  <r-cell-group title="checkboxGroup\u7981\u7528">
    <r-cell :border="false">
      <r-checkbox-group v-model="checked" disabled>
        <r-checkbox name="a">\u590D\u9009\u6846 A</r-checkbox>
        <r-checkbox name="b">\u590D\u9009\u6846 B</r-checkbox>
        <r-checkbox name="c">\u590D\u9009\u6846 C</r-checkbox>
        <r-checkbox name="d"> \u590D\u9009\u6846 D </r-checkbox>
        <r-checkbox name="e"> \u590D\u9009\u6846 E </r-checkbox>
      </r-checkbox-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(['a', 'd']);
<\/script>
`,D=`<template>
  <r-cell-group title="checkboxGroup\u4F7F\u7528\uFF0C\u9650\u5236\u6700\u5927\u53EF\u9009\u6570\uFF082\u4E2A\uFF09">
    <r-cell :border="false">
      <r-checkbox-group v-model="checked" max="2">
        <r-checkbox name="a">\u590D\u9009\u6846 A</r-checkbox>
        <r-checkbox name="b">\u590D\u9009\u6846 B</r-checkbox>
        <r-checkbox name="c">\u590D\u9009\u6846 C</r-checkbox>
        <r-checkbox name="d"> \u590D\u9009\u6846 D </r-checkbox>
        <r-checkbox name="e"> \u590D\u9009\u6846 E </r-checkbox>
      </r-checkbox-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(['a']);
<\/script>
`,v=`<template>
  <r-cell-group title="checkboxGroup \u5168\u9009/\u53D6\u6D88/\u53CD\u9009">
    <r-cell :border="false">
      <r-checkbox-group v-model="checked" direction="horizontal" ref="checkboxGroupRef">
        <r-checkbox name="a">\u590D\u9009\u6846 A</r-checkbox>
        <r-checkbox name="b">\u590D\u9009\u6846 B</r-checkbox>
        <r-checkbox name="c">\u590D\u9009\u6846 C</r-checkbox>
        <r-checkbox name="d" disabled> \u590D\u9009\u6846 D </r-checkbox>
        <r-checkbox name="e"> \u590D\u9009\u6846 E </r-checkbox>
      </r-checkbox-group>
    </r-cell>
    <r-cell :border="false">
      <r-button size="small" type="primary" @click="toggleAll(true)">\u5168\u9009</r-button>
      <r-button size="small" type="primary" style="margin: 0 10px" @click="toggleAll(false)">\u53D6\u6D88</r-button>
      <r-button size="small" type="primary" @click="toggleAll()">\u53CD\u9009</r-button>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(['a', 'd']);
const checkboxGroupRef = ref();

const toggleAll = (checked?: boolean) => {
  checkboxGroupRef.value.toggleAll({ checked });
};
<\/script>
`,_=`<template>
  <r-cell-group title="checkboxGroup \u5168\u9009/\u534A\u9009/\u53D6\u6D88">
    <r-cell :border="false">
      <r-checkbox v-model="isCheckAll" :indeterminate="indeterminate" @change="toggleAll">\u5168\u9009</r-checkbox>
    </r-cell>
    <r-cell :border="false">
      <r-checkbox-group v-model="checked" ref="group" @change="onCheckboxGroupChange">
        <r-checkbox name="a">\u590D\u9009\u6846 A</r-checkbox>
        <r-checkbox name="b">\u590D\u9009\u6846 B</r-checkbox>
        <r-checkbox name="c">\u590D\u9009\u6846 C</r-checkbox>
        <r-checkbox name="d"> \u590D\u9009\u6846 D </r-checkbox>
      </r-checkbox-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref([]);
const group = ref();
const indeterminate = ref(false);
const isCheckAll = ref(false);

const toggleAll = (value: boolean) => {
  group.value.toggleAll(value);
};

const onCheckboxGroupChange = (values: string[]) => {
  if (values.length === 4) {
    isCheckAll.value = true;
    indeterminate.value = false;
  } else if (values.length === 0) {
    isCheckAll.value = false;
    indeterminate.value = false;
  } else {
    isCheckAll.value = false;
    indeterminate.value = true;
  }
};
<\/script>
`,B=`<template>
  <r-cell-group title="\u6309\u94AE\u5F62\u72B6">
    <r-cell :border="false">
      <r-checkbox-group v-model="checked" direction="horizontal">
        <r-checkbox name="a" shape="button">\u590D\u9009\u6846 A</r-checkbox>
        <r-checkbox name="b" shape="button">\u590D\u9009\u6846 B</r-checkbox>
        <r-checkbox name="c" shape="button">\u590D\u9009\u6846 C</r-checkbox>
      </r-checkbox-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
    <r-cell :border="false">
      <r-checkbox-group v-model="checked2" direction="horizontal">
        <r-checkbox name="a" shape="square">\u590D\u9009\u6846 A</r-checkbox>
        <r-checkbox name="b" shape="square">\u590D\u9009\u6846 B</r-checkbox>
        <r-checkbox name="c" shape="square">\u590D\u9009\u6846 C</r-checkbox>
      </r-checkbox-group>
    </r-cell>
    <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked2 }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(['a']);
const checked2 = ref(['a']);
<\/script>
`,A=`<template>
  <r-checkbox-group v-model="checked" ref="group">
    <r-cell-group title="\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528">
      <r-cell v-for="item in list" :key="item" @click="toggle(item)">
        <template #title>\u590D\u9009\u6846 {{ item }}</template>
        <template #right-icon>
          <r-checkbox :name="item" @click.stop />
        </template>
      </r-cell>
      <r-cell>\u5F53\u524D\u9009\u4E2D\u503C: {{ checked }}</r-cell>
    </r-cell-group>
  </r-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const list = ref(['a', 'b']);
const checked = ref(['a']);
const group = ref();

const toggle = (name: string) => {
  const checkbox = group.value.children.find((item: any) => item.props.name === name);
  checkbox.exposed.toggle();
};
<\/script>
`,y={class:"markdown-body"},G=n(`<h1>Checkbox \u590D\u9009\u6309\u94AE</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u591A\u9009\u6309\u94AE\u7528\u4E8E\u9009\u62E9\u3002</p></div><div class="card"><h3>\u5B89\u88C5</h3><pre><code class="language-ts"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Checkbox</span>, <span class="hljs-title class_">CheckboxGroup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Checkbox</span>);
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">CheckboxGroup</span>);
</code></pre></div>`,3),z={class:"card"},j=n('<h3>\u57FA\u7840\u7528\u6CD5</h3><p>\u901A\u8FC7 <code class="">v-model</code> \u7ED1\u5B9A\u590D\u9009\u6846\u7684\u52FE\u9009\u72B6\u6001\u3002<br> \u901A\u8FC7 <code class="">shape</code> \u5C5E\u6027\u53EF\u8BBE\u7F6E\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\uFF1A<code class="">round</code> <code class="">square</code> <code class="">button</code></p>',2),w={class:"card"},I=e("h3",null,"\u534A\u9009\u72B6\u6001",-1),R=e("p",null,[c("\u901A\u8FC7 "),e("code",{class:""},"indeterminate"),c(" \u5C5E\u6027\u8BBE\u7F6E\u662F\u5426\u652F\u6301\u534A\u9009\u72B6\u6001\u3002")],-1),S={class:"card"},q=e("h3",null,"\u7981\u7528\u72B6\u6001",-1),P=e("p",null,[c("\u901A\u8FC7\u8BBE\u7F6E "),e("code",{class:""},"disabled"),c(" \u5C5E\u6027\u53EF\u4EE5\u7981\u7528\u590D\u9009\u6846\u3002")],-1),T={class:"card"},M=e("h3",null,"\u7981\u7528\u6587\u672C\u70B9\u51FB",-1),N=e("p",null,"\u8BBE\u7F6E label-disabled \u5C5E\u6027\u540E\uFF0C\u70B9\u51FB\u56FE\u6807\u4EE5\u5916\u7684\u5185\u5BB9\u4E0D\u4F1A\u89E6\u53D1\u590D\u9009\u6846\u5207\u6362\u3002",-1),V={class:"card"},L=e("h3",null,"\u5DE6\u4FA7\u6587\u672C",-1),X=e("p",null,"\u5C06 text-position \u5C5E\u6027\u8BBE\u7F6E\u4E3A 'left'\uFF0C\u53EF\u4EE5\u5C06\u6587\u672C\u4F4D\u7F6E\u8C03\u6574\u5230\u590D\u9009\u6846\u5DE6\u4FA7\u3002",-1),H={class:"card"},J=e("h3",null,"\u81EA\u5B9A\u4E49\u5927\u5C0F",-1),K=e("p",null,[c("\u901A\u8FC7\u8BBE\u7F6E "),e("code",{class:""},"style"),c(" \u6216\u8005 "),e("code",{class:""},"class"),c(" \u7684font-size\u53EF\u4EE5\u63A7\u5236 "),e("code",{class:""},"Icon"),c(" \u5927\u5C0F\u3002")],-1),O={class:"card"},Q=e("h3",null,"\u81EA\u5B9A\u4E49\u989C\u8272",-1),U=e("p",null,[c("\u901A\u8FC7\u8BBE\u7F6E "),e("code",{class:""},"class"),c(" \u7684color\u53EF\u4EE5\u63A7\u5236 "),e("code",{class:""},"Icon"),c(" \u989C\u8272\u3002")],-1),W={class:"card"},Y=n('<h3>\u81EA\u5B9A\u4E49\u56FE\u6807</h3><p>\u901A\u8FC7 slot \u81EA\u5B9A\u4E49\u56FE\u6807, <code class="">icon</code> <code class="">checkedIcon</code> <code class="">indeterminate</code> \u5206\u522B\u5BF9\u5E94 <code class="">\u672A\u9009\u62E9</code> <code class="">\u5DF2\u9009\u62E9</code> <code class="">\u534A\u9009\u62E9</code> \u4E09\u79CD\u72B6\u6001\u6240\u5BF9\u5E94\u7684\u56FE\u6807\u3002</p>',2),Z={class:"card"},$=e("h3",null,"change\u4E8B\u4EF6",-1),ee=e("p",null,[c("\u503C\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5C06\u89E6\u53D1 "),e("code",{class:""},"change"),c(" \u4E8B\u4EF6")],-1),ce={class:"card"},ue=e("h3",null,"\u590D\u9009\u6846\u7EC4",-1),te=e("p",null,[c("\u590D\u9009\u6846\u53EF\u4EE5\u4E0E\u590D\u9009\u6846\u7EC4\u4E00\u8D77\u4F7F\u7528\uFF0C\u590D\u9009\u6846\u7EC4\u901A\u8FC7 "),e("code",{class:""},"v-model"),c(" \u6570\u7EC4\u7ED1\u5B9A\u590D\u9009\u6846\u7684\u52FE\u9009\u72B6\u6001\u3002")],-1),oe={class:"card"},ne=e("h3",null,"\u6C34\u5E73\u6392\u5217",-1),le=e("p",null,[c("\u5C06 "),e("code",{class:""},"direction"),c(" \u5C5E\u6027\u8BBE\u7F6E\u4E3A "),e("code",{class:""},"horizontal"),c(" \u540E\uFF0C\u590D\u9009\u6846\u7EC4\u4F1A\u53D8\u6210\u6C34\u5E73\u6392\u5217\u3002")],-1),re={class:"card"},de=e("h3",null,"checkboxGroup\u7981\u7528",-1),se=e("p",null,[e("code",{class:""},"CheckboxGroup"),c(" \u8BBE\u7F6E "),e("code",{class:""},"disabled"),c(" \u5C5E\u6027\u53EF\u4EE5\u7981\u7528\u590D\u9009\u6846\u3002")],-1),ae={class:"card"},he=e("h3",null,"checkboxGroup\u4F7F\u7528\uFF0C\u9650\u5236\u6700\u5927\u53EF\u9009\u6570\uFF082\u4E2A\uFF09",-1),ie=e("p",null,[e("code",{class:""},"CheckboxGroup"),c(" \u8BBE\u7F6E "),e("code",{class:""},"max"),c(" \u5C5E\u6027\u53EF\u4EE5\u9650\u5236\u590D\u9009\u6846\u7EC4\u7684\u6700\u5927\u53EF\u9009\u6570\u3002")],-1),pe={class:"card"},be=n('<h3>checkboxGroup \u5168\u9009/\u53D6\u6D88/\u53CD\u9009</h3><p>\u901A\u8FC7 <code class="">CheckboxGroup</code> \u5B9E\u4F8B\u4E0A\u7684 <code class="">toggleAll</code> \u65B9\u6CD5\u5207\u6362\u6240\u6709\u590D\u9009\u6846\uFF0C\u4F20 true \u4E3A\u9009\u4E2D\uFF0Cfalse \u4E3A\u53D6\u6D88\u9009\u4E2D\uFF0C\u4E0D\u4F20\u53C2\u4E3A\u53D6\u53CD\u3002<br> // \u5168\u90E8\u53CD\u9009<br> checkboxGroupRef?.value.toggleAll();<br> // \u5168\u90E8\u9009\u4E2D<br> checkboxGroupRef?.value.toggleAll(true);<br> // \u5168\u90E8\u53D6\u6D88<br> checkboxGroupRef?.value.toggleAll(false);</p><p>// \u5168\u90E8\u53CD\u9009\uFF0C\u5E76\u8DF3\u8FC7\u7981\u7528\u7684\u590D\u9009\u6846<br> checkboxGroupRef?.value.toggleAll({ skipDisabled: true });<br> // \u5168\u90E8\u9009\u4E2D\uFF0C\u5E76\u8DF3\u8FC7\u7981\u7528\u7684\u590D\u9009\u6846<br> checkboxGroupRef?.value.toggleAll({ checked: true, skipDisabled: true });</p>',3),ke={class:"card"},me=e("h3",null,"checkboxGroup \u5168\u9009/\u534A\u9009/\u53D6\u6D88",-1),xe={class:"card"},Ee=e("h3",null,"\u6309\u94AE\u5F62\u72B6",-1),Fe=e("p",null,[c("\u8BBE\u7F6E "),e("code",{class:""},"shape"),c(" \u5C5E\u6027\u53EF\u6539\u53D8\u590D\u9009\u6846\u4E3A "),e("code",{class:""},"button"),c(" \u5F62\u72B6\u3002")],-1),Ce={class:"card"},ge=e("h3",null,"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528",-1),fe=e("p",null,[c("\u5229\u7528 "),e("code",{class:""},"CheckboxGroup"),c(" \u629B\u51FA\u7684 "),e("code",{class:""},"children"),c(" \u548C "),e("code",{class:""},"Checkbox"),c(" \u629B\u51FA\u7684 "),e("code",{class:""},"toggle"),c("\u65B9\u6CD5\u8FDB\u884C\u5207\u6362\u3002")],-1),De=n('<h2>API</h2><div class="card"><h3>Checkbox Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u662F\u5426\u5904\u4E8E\u9009\u4E2D\u72B6\u6001</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u9009\u62E9</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>label-disabled</td><td>\u662F\u5426\u7981\u7528\u590D\u9009\u6846\u6587\u672C\u70B9\u51FB</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>text-position</td><td>\u6587\u672C\u6240\u5728\u7684\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\uFF1A<code class="">left</code>,<code class="">right</code></td><td>string</td><td><code class="">right</code></td></tr><tr><td>name</td><td>\u6807\u8BC6\u7B26\uFF0C\u901A\u5E38\u4E3A\u4E00\u4E2A\u552F\u4E00\u7684\u5B57\u7B26\u4E32\u6216\u6570\u5B57</td><td>string</td><td>-</td></tr><tr><td>indeterminate</td><td>\u5F53\u524D\u662F\u5426\u652F\u6301\u534A\u9009\u72B6\u6001\uFF0C\u4E00\u822C\u7528\u5728\u5168\u9009\u64CD\u4F5C\u4E2D</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>shape</td><td>\u5F62\u72B6\uFF0C\u53EF\u9009\u503C\uFF1A<code class="">round</code> <code class="">square</code> <code class="">button</code>\u3001</td><td>String</td><td><code class="">round</code></td></tr><tr><td>icon-style</td><td>\u81EA\u5B9A\u4E49icon\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr></tbody></table></div><div class="card"><h3>Checkbox Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>icon</td><td>\u672A\u9009\u4E2D\u65F6\u7684\u56FE\u6807</td></tr><tr><td>checkedIcon</td><td>\u9009\u4E2D\u65F6\u7684\u56FE\u6807</td></tr><tr><td>indeterminate</td><td>\u534A\u9009\u65F6\u7684\u56FE\u6807</td></tr></tbody></table></div><div class="card"><h3>CheckboxGroup Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u5F53\u524D\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26\uFF0C\u548C <code class="">name</code> \u76F8\u5BF9\u5E94</td><td>Array</td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u9009\u62E9,\u5C06\u7528\u4E8E\u5176\u4E0B\u7684\u5168\u90E8\u590D\u9009\u6846</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>max</td><td>\u9650\u5236\u9009\u62E9\u7684\u6570\u91CF\uFF0C\u4E0D\u80FD\u548C<code class="">\u5168\u9009/\u53D6\u6D88/\u53CD\u9009</code>\u4E00\u8D77\u4F7F\u7528, <code class="">0</code>\u8868\u793A\u6CA1\u6709\u9650\u5236</td><td>number</td><td><code class="">0</code></td></tr><tr><td>direction</td><td>\u6392\u5217\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">horizontal</code></td><td>string</td><td><code class="">vertical</code></td></tr></tbody></table></div><div class="card"><h3>Checkbox Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u503C\u53D8\u5316\u65F6\u89E6\u53D1</td><td>(checked, label), <code class="">checked</code> \u4EE3\u8868\u5F53\u524D\u72B6\u6001\uFF0C<code class="">label</code> \u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684\u503C</td></tr></tbody></table></div><div class="card"><h3>Checkbox Methods</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>toggle</td><td>\u5207\u6362\u590D\u9009\u6846</td><td>-</td></tr></tbody></table></div><div class="card"><h3>CheckboxGroup Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u503C\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code class="">label</code>,<code class="">label</code> \u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u9879\u7684\u96C6\u5408</td></tr></tbody></table></div><div class="card"><h3>CheckboxGroup Methods</h3><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>toggleAll</td><td>\u5207\u6362\u6240\u6709\u590D\u9009\u6846\uFF0C\u4F20 <code class="">true</code> \u4E3A\u9009\u4E2D\uFF0C<code class="">false</code> \u4E3A\u53D6\u6D88\u9009\u4E2D\uFF0C\u4E0D\u4F20\u53C2\u4E3A\u53D6\u53CD</td><td><code class="">options?: boolean | object</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>--r-checkbox-line-height</td><td>var(--r-line-height-md)</td></tr><tr><td>--r-checkbox-line-height</td><td>var(--r-line-height-md)</td></tr><tr><td>--r-checkbox-font-size</td><td>var(--r-font-size-md)</td></tr><tr><td>--r-checkbox-label-margin-left</td><td>var(--r-padding-xs)</td></tr><tr><td>--r-checkbox-horizontal-margin-right</td><td>var(--r-padding-sm)</td></tr><tr><td>--r-checkbox-label-margin-left</td><td>var(--r-padding-xs)</td></tr><tr><td>--r-checkbox-label-disabled-color</td><td>#999</td></tr><tr><td>--r-checkbox-icon-color</td><td>#d6d6d6</td></tr><tr><td>--r-checkbox-icon-font-size</td><td>inherit</td></tr><tr><td>--r-checkbox-icon-checked-color</td><td>var(--r-primary-color)</td></tr><tr><td>--r-checkbox-icon-indeterminate-color</td><td>var(--r-primary-color)</td></tr><tr><td>--r-checkbox-icon-disabled-color</td><td>#d6d6d6</td></tr><tr><td>--r-checkbox-button-background</td><td>#f6f7f9</td></tr><tr><td>--r-checkbox-button-border-radius</td><td>15px</td></tr><tr><td>--r-checkbox-button-padding</td><td>5px 18px</td></tr><tr><td>--r-checkbox-button-checked-background</td><td>#666</td></tr><tr><td>--r-checkbox-button-checked-color</td><td>#fff</td></tr></tbody></table></div>',9),ye={},Ge="",ze=r({__name:"README",setup(ve,{expose:l}){return l({frontmatter:{},excerpt:void 0}),(_e,Be)=>{const u=a("hljs-block");return d(),s("div",y,[G,e("div",z,[j,e("p",null,[t(u,{code:o(h)},null,8,["code"])])]),e("div",w,[I,R,e("p",null,[t(u,{code:o(i)},null,8,["code"])])]),e("div",S,[q,P,e("p",null,[t(u,{code:o(p)},null,8,["code"])])]),e("div",T,[M,N,e("p",null,[t(u,{code:o(b)},null,8,["code"])])]),e("div",V,[L,X,e("p",null,[t(u,{code:o(k)},null,8,["code"])])]),e("div",H,[J,K,e("p",null,[t(u,{code:o(m)},null,8,["code"])])]),e("div",O,[Q,U,e("p",null,[t(u,{code:o(x)},null,8,["code"])])]),e("div",W,[Y,e("p",null,[t(u,{code:o(E)},null,8,["code"])])]),e("div",Z,[$,ee,e("p",null,[t(u,{code:o(F)},null,8,["code"])])]),e("div",ce,[ue,te,e("p",null,[t(u,{code:o(C)},null,8,["code"])])]),e("div",oe,[ne,le,e("p",null,[t(u,{code:o(g)},null,8,["code"])])]),e("div",re,[de,se,e("p",null,[t(u,{code:o(f)},null,8,["code"])])]),e("div",ae,[he,ie,e("p",null,[t(u,{code:o(D)},null,8,["code"])])]),e("div",pe,[be,e("p",null,[t(u,{code:o(v)},null,8,["code"])])]),e("div",ke,[me,e("p",null,[t(u,{code:o(_)},null,8,["code"])])]),e("div",xe,[Ee,Fe,e("p",null,[t(u,{code:o(B)},null,8,["code"])])]),e("div",Ce,[ge,fe,e("p",null,[t(u,{code:o(A)},null,8,["code"])])]),De])}}});export{ze as default,Ge as excerpt,ye as frontmatter};
