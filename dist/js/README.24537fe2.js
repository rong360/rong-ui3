import{d as c,o as a,c as o,a as t,b as u,u as n,$ as d,g as r,e as s}from"./format.990ee458.js";const i=`<template>
  <h2>\u57FA\u7840\u7528\u6CD5</h2>
  <r-picker title="\u6807\u9898" :columns="columns" @confirm="onConfirm" @cancel="onCancel" />
  <div class="selected-values" v-show="selectedValues.length"> \u5F53\u524D\u503C\uFF1A{{ selectedValues }} </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const columns = [
  { text: '\u676D\u5DDE', value: 'Hangzhou' },
  { text: '\u5B81\u6CE2', value: 'Ningbo' },
  { text: '\u6E29\u5DDE', value: 'Wenzhou' },
  { text: '\u7ECD\u5174', value: 'Shaoxing' },
  { text: '\u6E56\u5DDE', value: 'Huzhou' }
];

const selectedValues = ref([]);

const onConfirm = (value: any) => {
  selectedValues.value = value.selectedValues;
};

const onCancel = () => {
  selectedValues.value = [];
};
<\/script>
`,h=`<template>
  <h2>\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528</h2>
  <r-cell title="\u8BF7\u9009\u62E9\u57CE\u5E02" is-link @click="show = true" :border="false"></r-cell>
  <r-popup v-model:show="show" round position="bottom">
    <r-picker title="\u6807\u9898" :columns="columns" @confirm="onConfirm" @change="onChange" @cancel="onCancel" />
    <div class="selected-values" v-show="selectedValues.length"> \u5F53\u524D\u503C\uFF1A{{ selectedValues }} </div>
  </r-popup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const show = ref(false);

const columns = [
  { text: '\u676D\u5DDE', value: 'Hangzhou' },
  { text: '\u5B81\u6CE2', value: 'Ningbo' },
  { text: '\u6E29\u5DDE', value: 'Wenzhou' },
  { text: '\u7ECD\u5174', value: 'Shaoxing' },
  { text: '\u6E56\u5DDE', value: 'Huzhou' }
];

const selectedValues = ref([]);

const onConfirm = (value: any) => {
  selectedValues.value = value.selectedValues;
  show.value = false;
};

const onChange = (value: any) => {
  selectedValues.value = value.selectedValues;
};

const onCancel = () => {
  show.value = false;
};
<\/script>
`,p=`<template>
  <h2>\u53CC\u5411\u7ED1\u5B9A</h2>
  <r-picker v-model="selectedValues" title="\u6807\u9898" :columns="columns" @cancel="onCancel" />
  <div class="selected-values" v-show="selectedValues.length"> \u5F53\u524D\u503C\uFF1A{{ selectedValues }} </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const columns = [
  { text: '\u676D\u5DDE', value: 'Hangzhou' },
  { text: '\u5B81\u6CE2', value: 'Ningbo' },
  { text: '\u6E29\u5DDE', value: 'Wenzhou' },
  { text: '\u7ECD\u5174', value: 'Shaoxing' },
  { text: '\u6E56\u5DDE', value: 'Huzhou' }
];

const selectedValues = ref([]);

const onCancel = () => {
  selectedValues.value = [];
};
<\/script>
`,v=`<template>
  <h2>\u591A\u5217\u9009\u62E9</h2>
  <r-picker :columns="columns" @confirm="onConfirm" @cancel="onCancel"></r-picker>
  <div class="selected-values" v-show="selectedValues.length"> \u5F53\u524D\u503C\uFF1A{{ selectedValues }} </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const columns = [
  // \u7B2C\u4E00\u5217
  [
    { text: '\u5468\u4E00', value: 'Monday' },
    { text: '\u5468\u4E8C', value: 'Tuesday' },
    { text: '\u5468\u4E09', value: 'Wednesday' },
    { text: '\u5468\u56DB', value: 'Thursday' },
    { text: '\u5468\u4E94', value: 'Friday' }
  ],
  // \u7B2C\u4E8C\u5217
  [
    { text: '\u4E0A\u5348', value: 'Morning' },
    { text: '\u4E0B\u5348', value: 'Afternoon' },
    { text: '\u665A\u4E0A', value: 'Evening' }
  ]
];

const selectedValues = ref([]);

const onConfirm = (value: any) => {
  selectedValues.value = value.selectedValues;
};

const onCancel = () => {
  selectedValues.value = [];
};
<\/script>
`,m=`<template>
  <h2>\u7EA7\u8054\u9009\u62E9</h2>
  <r-picker :columns="columns" @confirm="onConfirm" @cancel="onCancel"></r-picker>
  <div class="selected-values" v-show="selectedValues.length"> \u5F53\u524D\u503C\uFF1A{{ selectedValues }} </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const columns = [
  {
    text: '\u6D59\u6C5F',
    value: 'Zhejiang',
    children: [
      {
        text: '\u676D\u5DDE',
        value: 'Hangzhou',
        children: [
          { text: '\u897F\u6E56\u533A', value: 'Xihu', disabled: true },
          { text: '\u4F59\u676D\u533A', value: 'Yuhang' }
        ]
      },
      {
        text: '\u6E29\u5DDE',
        value: 'Wenzhou',
        children: [
          { text: '\u9E7F\u57CE\u533A', value: 'Lucheng' },
          { text: '\u74EF\u6D77\u533A', value: 'Ouhai' }
        ]
      }
    ]
  },
  {
    text: '\u798F\u5EFA',
    value: 'Fujian',
    children: [
      {
        text: '\u798F\u5DDE',
        value: 'Fuzhou',
        children: [
          { text: '\u9F13\u697C\u533A', value: 'Gulou' },
          { text: '\u53F0\u6C5F\u533A', value: 'Taijiang' }
        ]
      },
      {
        text: '\u53A6\u95E8',
        value: 'Xiamen',
        children: [
          { text: '\u601D\u660E\u533A', value: 'Siming' },
          { text: '\u6D77\u6CA7\u533A', value: 'Haicang' }
        ]
      }
    ]
  }
];

const selectedValues = ref([]);

const onConfirm = (value: any) => {
  selectedValues.value = value.selectedValues;
};

const onCancel = () => {
  selectedValues.value = [];
};
<\/script>
`,E=`<template>
  <h2>\u7981\u7528\u9009\u9879</h2>
  <r-picker title="\u6807\u9898" :columns="columns" @confirm="onConfirm" @cancel="onCancel" />
  <div class="selected-values" v-show="selectedValues.length"> \u5F53\u524D\u503C\uFF1A{{ selectedValues }} </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const columns = [
  { text: '\u676D\u5DDE', value: 'Hangzhou', disabled: true },
  { text: '\u5B81\u6CE2', value: 'Ningbo' },
  { text: '\u6E29\u5DDE', value: 'Wenzhou' },
  { text: '\u7ECD\u5174', value: 'Shaoxing' },
  { text: '\u6E56\u5DDE', value: 'Huzhou' }
];

const selectedValues = ref([]);

const onConfirm = (value: any) => {
  selectedValues.value = value.selectedValues;
};

const onCancel = () => {
  selectedValues.value = [];
};
<\/script>
`,F=`<template>
  <h2>\u81EA\u5B9A\u4E49 Columns \u7684\u7ED3\u6784</h2>
  <r-picker
    :columns="columns"
    :columns-field-names="customFieldName"
    @confirm="onConfirm"
    @cancel="onCancel"
  ></r-picker>
  <div class="selected-values" v-show="selectedValues.length"> \u5F53\u524D\u503C\uFF1A{{ selectedValues }} </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const columns = [
  {
    cityName: '\u6D59\u6C5F',
    cities: [
      {
        cityName: '\u676D\u5DDE',
        cities: [{ cityName: '\u897F\u6E56\u533A', cityClassName: 'custom-classname', cityDisabled: true }, { cityName: '\u4F59\u676D\u533A' }]
      },
      {
        cityName: '\u6E29\u5DDE',
        cities: [{ cityName: '\u9E7F\u57CE\u533A' }, { cityName: '\u74EF\u6D77\u533A' }]
      }
    ]
  },
  {
    cityName: '\u798F\u5EFA',
    cities: [
      {
        cityName: '\u798F\u5DDE',
        cities: [{ cityName: '\u9F13\u697C\u533A' }, { cityName: '\u53F0\u6C5F\u533A' }]
      },
      {
        cityName: '\u53A6\u95E8',
        cities: [{ cityName: '\u601D\u660E\u533A' }, { cityName: '\u6D77\u6CA7\u533A' }]
      }
    ]
  }
];

const customFieldName = {
  text: 'cityName',
  value: 'cityName',
  children: 'cities',
  className: 'cityClassName',
  disabled: 'cityDisabled'
};

const selectedValues = ref([]);

const onConfirm = (value: any) => {
  selectedValues.value = value.selectedValues;
};

const onCancel = () => {
  selectedValues.value = [];
};
<\/script>
`,C={class:"markdown-body"},f=d(`<h1>Picker</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u96C6\u5408\u4F9B\u7528\u6237\u9009\u62E9\uFF0C\u652F\u6301\u5355\u5217\u9009\u62E9\u3001\u591A\u5217\u9009\u62E9\u548C\u7EA7\u8054\u9009\u62E9\uFF0C\u901A\u5E38\u4E0E\u5F39\u51FA\u5C42\u7EC4\u4EF6\u914D\u5408\u4F7F\u7528\u3002</p></div><div class="card"><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Picker</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Picker</span>);
</code></pre></div>`,3),x={class:"card"},B=t("h3",null,"\u57FA\u7840\u7528\u6CD5",-1),A={class:"card"},D=t("h3",null,"\u642D\u914D\u5F39\u51FA\u5C42\u4F7F\u7528",-1),g=t("p",null,"Picker \u901A\u5E38\u4F5C\u4E3A\u7528\u4E8E\u8F85\u52A9\u8868\u5355\u586B\u5199\uFF0C\u53EF\u4EE5\u642D\u914D Popup \u5B9E\u73B0\u6548\u679C\u3002",-1),b={class:"card"},_=d('<h3>\u53CC\u5411\u7ED1\u5B9A</h3><p>\u901A\u8FC7 <code class="">v-model</code> \u53EF\u4EE5\u7ED1\u5B9A\u5F53\u524D\u9009\u4E2D\u9879\u7684 values\uFF0C\u4FEE\u6539 <code class="">v-model</code> \u7ED1\u5B9A\u7684\u503C\u65F6\uFF0CPicker \u7684\u9009\u4E2D\u72B6\u6001\u4E5F\u4F1A\u968F\u4E4B\u6539\u53D8\u3002</p><p><code class="">v-model</code> \u7684\u503C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6570\u7EC4\u7684\u7B2C\u4E00\u4F4D\u5BF9\u5E94\u7B2C\u4E00\u5217\u9009\u4E2D\u9879\u7684 <code class="">value</code>\uFF0C\u7B2C\u4E8C\u4F4D\u5BF9\u5E94\u7B2C\u4E8C\u5217\u9009\u4E2D\u9879\u7684 <code class="">value</code>\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u3002</p>',3),y={class:"card"},V=t("h3",null,"\u591A\u5217\u9009\u62E9",-1),k=t("p",null,[t("code",{class:""},"columns"),s(" \u5C5E\u6027\u53EF\u4EE5\u901A\u8FC7\u4E8C\u7EF4\u6570\u7EC4\u7684\u5F62\u5F0F\u914D\u7F6E\u591A\u5217\u9009\u62E9\u3002")],-1),N={class:"card"},w=t("h3",null,"\u7EA7\u8054\u9009\u62E9",-1),j=t("p",null,[s("\u4F7F\u7528 "),t("code",{class:""},"columns"),s(" \u7684 "),t("code",{class:""},"children"),s(" \u5B57\u6BB5\u53EF\u4EE5\u5B9E\u73B0\u9009\u9879\u7EA7\u8054\u7684\u6548\u679C")],-1),z={class:"card"},P=t("h3",null,"\u7981\u7528\u9009\u9879",-1),S={class:"card"},H=t("h3",null,"\u81EA\u5B9A\u4E49 Columns \u7684\u7ED3\u6784",-1),O=d('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:value</td><td>\u9ED8\u8BA4\u9009\u4E2D\u9879</td><td>Array</td><td><code class="">[]</code></td></tr><tr><td>columns</td><td>\u5BF9\u8C61\u6570\u7EC4\uFF0C\u914D\u7F6E\u6BCF\u4E00\u5217\u663E\u793A\u7684\u6570\u636E</td><td>PickerOption[] | PickerOption[][]</td><td>-</td></tr><tr><td>columns-field-names</td><td>\u5B9A\u4E49 <code class="">columns</code> \u7ED3\u6784\u4E2D\u7684\u5B57\u6BB5</td><td>object</td><td><code class="">{ text: &#39;text&#39;, value: &#39;value&#39;, children: &#39;children&#39; }</code></td></tr><tr><td>title</td><td>\u8BBE\u7F6E\u6807\u9898</td><td>string | VNode</td><td>-</td></tr><tr><td>title-style</td><td>\u6807\u9898\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr><tr><td>cancel-button-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u6848</td><td>string | VNode</td><td><code class="">\u53D6\u6D88</code></td></tr><tr><td>cancel-button-style</td><td>\u53D6\u6D88\u6309\u94AE\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr><tr><td>confirm-button-text</td><td>\u786E\u5B9A\u6309\u94AE\u6587\u6848</td><td>string | VNode</td><td><code class="">\u786E\u5B9A</code></td></tr><tr><td>confirm-button-style</td><td>\u786E\u5B9A\u6309\u94AE\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr><tr><td>show-toolbar</td><td>\u662F\u5426\u663E\u793A\u9876\u90E8\u5BFC\u822A</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>visible-option-num</td><td>\u53EF\u89C1\u7684\u9009\u9879\u4E2A\u6570</td><td>number | string</td><td><code class="">6</code></td></tr><tr><td>swipe-duration</td><td>\u5FEB\u901F\u6ED1\u52A8\u65F6\u60EF\u6027\u6EDA\u52A8\u7684\u65F6\u957F\uFF0C\u5355\u4F4D <code class="">ms</code></td><td>number | string</td><td><code class="">1000</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code class="">{ selectedValues, selectedTexts, selectedOptions, selectedIndexes }</code></td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code class="">{ selectedValues, selectedTexts, selectedOptions, selectedIndexes }</code></td></tr><tr><td>change</td><td>\u9009\u9879\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td><code class="">{ columnIndex, selectedIndex, selectedValues, selectedOptions, selectedIndexes }</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>columns-top</td><td>\u81EA\u5B9A\u4E49\u6ED1\u52A8\u6570\u636E\u9876\u90E8\u533A\u57DF</td></tr><tr><td>columns-bottom</td><td>\u81EA\u5B9A\u4E49\u6ED1\u52A8\u6570\u636E\u5E95\u90E8\u533A\u57DF</td></tr></tbody></table></div><div class="card"><h3>PickerOption \u6570\u636E\u7ED3\u6784</h3><table><thead><tr><th>\u952E\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>text</td><td>\u9009\u9879\u7684\u6587\u5B57\u5185\u5BB9</td><td>string | number</td><td>-</td></tr><tr><td>value</td><td>\u9009\u9879\u5BF9\u5E94\u7684\u503C\uFF0C\u4E14\u552F\u4E00</td><td>string | number</td><td>-</td></tr><tr><td>children</td><td>\u7528\u4E8E\u7EA7\u8054\u9009\u9879</td><td>PickerOption[]</td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u9009\u9879</td><td>boolean</td><td>-</td></tr><tr><td>className</td><td>\u6DFB\u52A0\u989D\u5916\u7684\u7C7B\u540D</td><td>string | Array | object</td><td>-</td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>--r-picker-background</td><td>#fff</td></tr><tr><td>--r-picker-toolbar-height</td><td>44px</td></tr><tr><td>--r-picker-action-padding</td><td>0 16px</td></tr><tr><td>--r-picker-action-font-size</td><td>14px</td></tr><tr><td>--r-picker-confirm-action-color</td><td>#1989fa</td></tr><tr><td>--r-picker-cancel-action-color</td><td>#969799</td></tr><tr><td>--r-picker-title-font-weight</td><td>500</td></tr><tr><td>--r-picker-title-font-size</td><td>16px</td></tr><tr><td>--r-picker-option-font-size</td><td>16px</td></tr><tr><td>--r-picker-option-text-color</td><td>#323233</td></tr><tr><td>--r-picker-option-height</td><td>44px</td></tr><tr><td>--r-picker-frame-border-color</td><td>#ebedf0</td></tr></tbody></table></div>',6),X={},G="",L=c({__name:"README",setup(I,{expose:l}){return l({frontmatter:{},excerpt:void 0}),(T,W)=>{const e=r("hljs-block");return a(),o("div",C,[f,t("div",x,[B,t("p",null,[u(e,{code:n(i)},null,8,["code"])])]),t("div",A,[D,g,t("p",null,[u(e,{code:n(h)},null,8,["code"])])]),t("div",b,[_,t("p",null,[u(e,{code:n(p)},null,8,["code"])])]),t("div",y,[V,k,t("p",null,[u(e,{code:n(v)},null,8,["code"])])]),t("div",N,[w,j,t("p",null,[u(e,{code:n(m)},null,8,["code"])])]),t("div",z,[P,t("p",null,[u(e,{code:n(E)},null,8,["code"])])]),t("div",S,[H,t("p",null,[u(e,{code:n(F)},null,8,["code"])])]),O])}}});export{L as default,G as excerpt,X as frontmatter};
