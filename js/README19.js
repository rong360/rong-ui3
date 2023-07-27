import{d as a,o as c,c as d,a as e,b as u,u as l,W as o,g as i,e as n}from"./_plugin-vue_export-helper.js";const r=`<template>
  <h2>\u57FA\u7840\u7528\u6CD5</h2>
  <r-select
    v-model="selectedValues"
    placeholder="\u8BF7\u9009\u62E9"
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  ></r-select>
  <div class="fs-12">{{ selectedValues }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const columns = ref([
  { text: '\u676D\u5DDE', value: 'Hangzhou' },
  { text: '\u5B81\u6CE2', value: 'Ningbo' },
  { text: '\u6E29\u5DDE', value: 'Wenzhou' },
  { text: '\u7ECD\u5174', value: 'Shaoxing' },
  { text: '\u6E56\u5DDE', value: 'Huzhou' }
]);

const selectedValues = ref('');

const onConfirm = (value: any) => {
  console.log(value);
};

const onCancel = (value: any) => {
  console.log(value);
};

const onChange = (value: any) => {
  console.log(value);
};
<\/script>
`,m=`<template>
  <h2>\u6307\u5B9A\u6839\u8282\u70B9</h2>
  <r-select
    v-model="selectedValues"
    teleport="body"
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  ></r-select>
  <div class="fs-12">{{ selectedValues }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const columns = ref([
  { text: '\u676D\u5DDE', value: 'Hangzhou' },
  { text: '\u5B81\u6CE2', value: 'Ningbo' },
  { text: '\u6E29\u5DDE', value: 'Wenzhou' },
  { text: '\u7ECD\u5174', value: 'Shaoxing' },
  { text: '\u6E56\u5DDE', value: 'Huzhou' }
]);

const selectedValues = ref('Shaoxing');

const onConfirm = (value: any) => {
  console.log(value);
};

const onCancel = (value: any) => {
  console.log(value);
};

const onChange = (value: any) => {
  console.log(value);
};
<\/script>
`,h=`<template>
  <h2>\u591A\u5217\u9009\u62E9</h2>
  <r-select
    v-model="selectedValues"
    value-separator="_"
    text-separator="/"
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  ></r-select>
  <div class="fs-12">{{ selectedValues }}</div>
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

// const selectedValues = ref(['Wednesday', 'Afternoon']);
const selectedValues = ref('Wednesday_Afternoon');

const onConfirm = (value: any) => {
  console.log(value);
};

const onCancel = (value: any) => {
  console.log(value);
};

const onChange = (value: any) => {
  console.log(value);
};
<\/script>
`,p=`<template>
  <h2>\u7EA7\u8054\u9009\u62E9</h2>
  <r-select
    v-model="selectedValues"
    value-separator="_"
    text-separator="/"
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  ></r-select>
  <div class="fs-12">{{ selectedValues }}</div>
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

// const selectedValues = ref(['Fujian', 'Xiamen', 'Haicang']);
const selectedValues = ref('Fujian_Xiamen_Haicang');

const onConfirm = (value: any) => {
  console.log(value);
};

const onCancel = (value: any) => {
  console.log(value);
};

const onChange = (value: any) => {
  console.log(value);
};
<\/script>
`,v=`<template>
  <h2>\u81EA\u5B9A\u4E49 Columns \u7684\u7ED3\u6784</h2>
  <r-select
    v-model="selectedValues"
    value-separator="_"
    text-separator="/"
    :columns="columns"
    :columns-field-names="customFieldName"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  ></r-select>
  <div class="fs-12">{{ selectedValues }}</div>
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

// const selectedValues = ref(['\u798F\u5EFA', '\u53A6\u95E8', '\u601D\u660E\u533A']);
const selectedValues = ref('\u798F\u5EFA_\u53A6\u95E8_\u601D\u660E\u533A');

const onConfirm = (value: any) => {
  console.log(value);
};

const onCancel = (value: any) => {
  console.log(value);
};

const onChange = (value: any) => {
  console.log(value);
};
<\/script>
`,C=`<template>
  <h2>\u5E73\u94FA\u663E\u793A</h2>
  <r-select
    v-model="selectedValues"
    type="tile"
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  ></r-select>
  <div class="fs-12 mb-10">{{ selectedValues }}</div>

  <r-select
    v-model="visibleOptionNumSelectedValues"
    type="tile"
    :columns="visibleOptionNumColumns"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  ></r-select>
  <div class="fs-12 mb-10">{{ visibleOptionNumSelectedValues }}</div>

  <r-select
    v-model="customFieldNameSelectedValues"
    type="tile"
    :columns="customFieldNameColumns"
    :columns-field-names="customFieldName"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  ></r-select>
  <div class="fs-12">{{ customFieldNameSelectedValues }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// \u57FA\u7840
const columns = [
  { text: '\u676D\u5DDE', value: 'Hangzhou' },
  { text: '\u5B81\u6CE2', value: 'Ningbo' }
];

const selectedValues = ref('Hangzhou');

// \u8D85\u8FC7 visibleOptionNum \u4E2A\u9009\u9879\u65F6\u6EDA\u52A8
const visibleOptionNumColumns = [
  { text: '\u676D\u5DDE', value: 'Hangzhou' },
  { text: '\u5B81\u6CE2', value: 'Ningbo', disabled: true },
  { text: '\u6E29\u5DDE', value: 'Wenzhou' },
  { text: '\u7ECD\u5174', value: 'Shaoxing' },
  { text: '\u6E56\u5DDE', value: 'Huzhou' },
  { text: '\u5609\u5174', value: 'Jiaxing' },
  { text: '\u91D1\u534E', value: 'Jinhua' },
  { text: '\u8862\u5DDE', value: 'Quzhou' },
  { text: '\u821F\u5C71', value: 'Zhoushan' },
  { text: '\u53F0\u5DDE', value: 'Taizhou' },
  { text: '\u4E3D\u6C34', value: 'Lishui' }
];
const visibleOptionNumSelectedValues = ref('Shaoxing');

// \u81EA\u5B9A\u4E49\u5B57\u6BB5\u540D
const customFieldNameColumns = [
  { cityName: '\u676D\u5DDE' },
  { cityName: '\u5B81\u6CE2' },
  { cityName: '\u6E29\u5DDE' },
  { cityName: '\u7ECD\u5174' },
  { cityName: '\u6E56\u5DDE' }
];
const customFieldNameSelectedValues = ref('\u7ECD\u5174');
const customFieldName = {
  text: 'cityName',
  value: 'cityName',
  children: 'cities',
  className: 'cityClassName',
  disabled: 'cityDisabled'
};

const onConfirm = (value: any) => {
  console.log('confirm', value);
};

const onCancel = (value: any) => {
  console.log(value);
};

const onChange = (value: any) => {
  console.log('change', value);
};
<\/script>
`,E={class:"markdown-body"},F=o(`<h1>Select</h1><h3>\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u96C6\u5408\u4F9B\u7528\u6237\u9009\u62E9\u5176\u4E2D\u4E00\u9879\uFF0C\u5E26\u5F39\u5C42\u6548\u679C\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Select</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Select</span>);
</code></pre><h3>\u53C2\u6570\u8BF4\u660E</h3><ul><li><code class="">Select</code> \u57FA\u4E8E <code class="">Picker</code> <code class="">Popup</code> \u5C01\u88C5\uFF0C\u53C2\u6570\u4E0E <code class="">Picker</code> <code class="">Popup</code> \u76F8\u540C\u3002</li><li><code class="">columns</code> \u53C2\u6570\u540C <code class="">Picker</code> \u53EF\u4EE5\u662F\u4E00\u7EF4\u6570\u7EC4\u6216\u8005\u4E8C\u7EF4\u6570\u7EC4\u3002</li><li><code class="">v-model</code> \u53C2\u6570\u53EF\u4EE5\u662F\u6570\u7EC4\u6216\u8005\u5B57\u7B26\u4E32\u3002\u5F53\u4E3A\u5B57\u7B26\u4E32\u5E76\u4E14\u662F\u591A\u5217\u6548\u679C\u65F6\uFF0C\u9700\u4F20\u9012 <code class="">value-separator</code> \u5206\u9694\u7B26\u3002</li><li>\u591A\u5217\u9009\u62E9\u5668\u7684\u6807\u9898\u53EF\u4EE5\u4F20\u9012 <code class="">text-separator</code> \u5206\u9694\u7B26\u8FDB\u884C\u5206\u5272\u3002</li></ul><h3>\u57FA\u7840\u7528\u6CD5</h3>`,8),g=e("h3",null,"\u6307\u5B9A\u6839\u8282\u70B9",-1),f=e("p",null,[n("\u8BBE\u7F6E "),e("code",{class:""},"teleport"),n(" \u5C5E\u6027\u6307\u5B9A\u6839\u8282\u70B9\u3002")],-1),x=e("h3",null,"\u591A\u5217\u9009\u62E9",-1),y=e("p",null,[e("code",{class:""},"v-model"),n(" \u53C2\u6570\u53EF\u4EE5\u662F\u6570\u7EC4\u6216\u8005\u5B57\u7B26\u4E32\u3002\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u9700\u4F20\u9012 "),e("code",{class:""},"value-separator"),n(" \u5206\u9694\u7B26\u3002"),e("br"),n(' \u6807\u9898\u901A\u8FC7\u4F20\u9012 value-separator="_" \u8FDB\u884C\u5206\u9694\u3002')],-1),B=e("h3",null,"\u7EA7\u8054\u9009\u62E9",-1),A=e("h3",null,"\u81EA\u5B9A\u4E49 Columns \u7684\u7ED3\u6784",-1),N=e("p",null,[n("\u901A\u8FC7\u8BBE\u7F6E "),e("code",{class:""},"columns-field-names"),n(" \u81EA\u5B9A\u4E49 columns \u7ED3\u6784\u4E2D\u7684\u5B57\u6BB5\u3002")],-1),b=o('<h3>\u5E73\u94FA\u663E\u793A</h3><ul><li>\u901A\u8FC7\u8BBE\u7F6E <code class="">type=&quot;tile&quot;</code> \u663E\u793A\u5E73\u94FA\u6548\u679C\u3002</li><li>\u5E73\u94FA\u663E\u793A\u4E3A\u4E00\u79CD\u7279\u6B8A\u7684 <code class="">Select</code>, \u6570\u636E\u7ED3\u6784\u548C\u53C2\u6570\u540C <code class="">Select</code>\uFF0C\u4F46\u53EA\u652F\u6301\u5355\u5217\u6548\u679C\u3002</li><li>\u8BBE\u7F6E <code class="">visible-option-num</code> \u6307\u5B9A\u663E\u793A\u6570\u91CF\uFF0C\u6570\u636E\u8D85\u8FC7\u8FD9\u4E2A\u503C\u65F6\u624D\u51FA\u73B0\u6EDA\u52A8\u6548\u679C\u3002</li></ul>',2),_=o('<h2>API</h2><h3>Props</h3><blockquote><p>\u5F53\u524D\u7EC4\u4EF6\u5185\u90E8\u900F\u4F20\u4E86 <a href="#/zh-CN/component/popup">Popup\u7EC4\u4EF6</a> \u3001<a href="#/zh-CN/component/overlay">Overlay\u7EC4\u4EF6</a> \u548C <a href="#/zh-CN/component/picker">Picker\u7EC4\u4EF6</a></p></blockquote><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u9ED8\u8BA4\u9009\u4E2D\u9879</td><td>string | string[]</td><td>``</td></tr><tr><td>textSeparator</td><td>\u591A\u5217\u9009\u62E9\u5668\u6807\u9898\u6587\u5B57\u5206\u9694\u7B26</td><td>string</td><td>-</td></tr><tr><td>textFormatter</td><td>\u6807\u9898\u6587\u5B57\u683C\u5F0F\u5316\uFF0C\u5E38\u7528\u4E8E\u6587\u5B57\u8FC7\u957F\u65F6\u622A\u53D6</td><td>(value: string) =&gt; string</td><td>-</td></tr><tr><td>valueSeparator</td><td>\u591A\u5217\u9009\u62E9\u5668value\u5206\u9694\u7B26</td><td>string</td><td><code class="">,</code></td></tr><tr><td>placeholder</td><td>\u9009\u62E9\u5668\u5360\u4F4D\u7B26</td><td>string</td><td>-</td></tr><tr><td>textAlign</td><td>\u6807\u9898\u6587\u5B57\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C\u4E3A<code class="">left</code> <code class="">right</code></td><td>string</td><td>-</td></tr><tr><td>type</td><td>\u9009\u62E9\u5668\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A<code class="">picker</code> <code class="">tile</code></td><td>string</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code class="">{ selectedValues, selectedTexts, selectedOptions, selectedIndexes }</code></td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code class="">{ selectedValues, selectedTexts, selectedOptions, selectedIndexes }</code></td></tr><tr><td>change</td><td>\u9009\u9879\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1</td><td><code class="">{ columnIndex, selectedIndex, selectedValues, selectedTexts, selectedOptions, selectedIndexes }</code></td></tr></tbody></table><h2>\u4E3B\u9898\u5B9A\u5236</h2><h3>\u6837\u5F0F\u53D8\u91CF</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>--r-select-line-height</td><td>var(--r-cell-line-height, 24px)</td></tr><tr><td>--r-select-font-size</td><td>var(--r-cell-font-size, 14px)</td></tr><tr><td>--r-select-color</td><td>#323233</td></tr><tr><td>--r-select-placeholder-color</td><td>#c8c7cc</td></tr><tr><td>--r-select-content-right-padding-right</td><td>4px</td></tr><tr><td>--r-tile-background</td><td>#fff</td></tr><tr><td>--r-tile-toolbar-height</td><td>44px</td></tr><tr><td>--r-tile-toolbar-background</td><td>#f9fafb</td></tr><tr><td>--r-tile-action-padding</td><td>0 16px</td></tr><tr><td>--r-tile-action-font-size</td><td>14px</td></tr><tr><td>--r-tile-confirm-action-color</td><td>#1989fa</td></tr><tr><td>--r-tile-cancel-action-color</td><td>#969799</td></tr><tr><td>--r-tile-title-font-weight</td><td>500</td></tr><tr><td>--r-tile-title-font-size</td><td>16px</td></tr><tr><td>--r-tile-list-horizontal-padding</td><td>16px</td></tr><tr><td>--r-tile-option-text-color</td><td>#323233</td></tr><tr><td>--r-tile-option-border-color</td><td>#ebedf0</td></tr><tr><td>--r-tile-option-disabled-opacity</td><td>0.3</td></tr><tr><td>--r-tile-option-active-text-color</td><td>#4080e8</td></tr></tbody></table>',9),k={},j="",H=a({__name:"README",setup(D,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(V,z)=>{const t=i("hljs-block");return c(),d("div",E,[F,e("p",null,[u(t,{code:l(r)},null,8,["code"])]),g,f,e("p",null,[u(t,{code:l(m)},null,8,["code"])]),x,y,e("p",null,[u(t,{code:l(h)},null,8,["code"])]),B,e("p",null,[u(t,{code:l(p)},null,8,["code"])]),A,N,e("p",null,[u(t,{code:l(v)},null,8,["code"])]),b,e("p",null,[u(t,{code:l(C)},null,8,["code"])]),_])}}});export{H as default,j as excerpt,k as frontmatter};
