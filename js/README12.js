import{d as o,o as c,c as a,a as t,b as n,u as d,Y as s,g as r,e as u}from"./plugin-vueexport-helper.js";const i=`<template>
  <h2>\u57FA\u7840\u7528\u6CD5</h2>
  <r-input v-model="state.text" placeholder="\u8BF7\u8F93\u5165\u6587\u672C" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  text: ''
});
<\/script>
`,p=`<template>
  <h2>\u81EA\u5B9A\u4E49\u7C7B\u578B</h2>
  <r-input v-model="state.text" placeholder="\u8BF7\u8F93\u5165\u6587\u672C" max-length="6" />
  <r-input v-model="state.password" type="password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" />
  <r-input
    v-model="state.number"
    type="number"
    decimal="2"
    pad-zero
    placeholder="\u8BF7\u8F93\u5165\u6570\u5B57\uFF08\u652F\u6301\u5C0F\u6570\u3001\u7CBE\u5EA6\u63A7\u5236\u3001\u81EA\u52A8\u88650\uFF09"
  />
  <r-input v-model="state.digit" type="digit" placeholder="\u8BF7\u8F93\u5165\u6574\u6570" />
  <r-input v-model="state.tel" type="tel" placeholder="\u8BF7\u8F93\u5165\u624B\u673A\u53F7" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  text: '',
  password: '',
  number: '',
  digit: '',
  tel: ''
});
<\/script>
`,h=`<template>
  <h2>\u663E\u793A\u6E05\u9664\u56FE\u6807</h2>
  <r-input v-model="state.text" placeholder="\u663E\u793A\u6E05\u9664\u56FE\u6807" clearable />
  <r-input v-model="state.text2" placeholder="\u59CB\u7EC8\u663E\u793A\u6E05\u9664\u56FE\u6807" show-clear-icon-always />
  <r-input v-model="state.text3" placeholder="\u81EA\u5B9A\u4E49\u6E05\u9664\u56FE\u6807" clearable >
    <template #clear>
      <r-icon name="close" />
    </template>
  </r-input>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  text: '',
  text2: '',
  text3: ''
});
<\/script>
`,F=`<template>
  <h2>\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9</h2>
  <r-input
    v-model="state.text"
    placeholder="\u94F6\u884C\u5361\u56DB\u4F4D\u5206\u9694\uFF08\u5728\u8F93\u5165\u65F6\u6267\u884C\u683C\u5F0F\u5316\uFF09"
    max-length="19"
    type="digit"
    :formatter="formatter"
  />
  <r-input
    v-model="state.text2"
    placeholder="\u94F6\u884C\u5361\u56DB\u4F4D\u5206\u9694\uFF08\u5728\u5931\u7126\u65F6\u6267\u884C\u683C\u5F0F\u5316\uFF09"
    type="digit"
    max-length="19"
    format-trigger="onBlur"
    :formatter="formatter"
  />
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  text: '',
  text2: ''
});

// \u6570\u5B574\u4F4D\u5206\u9694
const formatter = (value: string) => value.replace(/(\\d{4})(?=\\d)/g, '$1 ');
<\/script>
`,m=`<template>
  <h2>\u7981\u7528\u548C\u53EA\u8BFB</h2>
  <r-input v-model="state.readonly" placeholder="\u8F93\u5165\u6846\u53EA\u8BFB" readonly/>
  <r-input v-model="state.disabled" placeholder="\u8F93\u5165\u6846\u5DF2\u7981\u7528" disabled/>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  readonly: '\u8F93\u5165\u6846\u53EA\u8BFB',
  disabled: '\u8F93\u5165\u6846\u5DF2\u7981\u7528'
});
<\/script>
`,E=`<template>
  <h2>\u5BF9\u9F50\u65B9\u5F0F</h2>
  <r-input v-model="state.text" placeholder="\u8BF7\u8F93\u5165\u6587\u672C" />
  <r-input v-model="state.text2" placeholder="\u8BF7\u8F93\u5165\u6587\u672C" input-align="right" clearable/>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  text: '',
  text2: ''
});
<\/script>
`,B=`<template>
  <h2>\u4E8B\u4EF6\u6F14\u793A</h2>
  <r-input
    v-model="state.text"
    placeholder="\u4E8B\u4EF6\u6F14\u793A"
    clearable
    @clear="onClear"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
  />
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  text: ''
});

const onClear = () => {
  console.log('onClear');
};

const onFocus = () => {
  console.log('onFocus');
};

const onBlur = () => {
  console.log('onBlur');
};

const onInput = (event: Event) => {
  console.log('onInput', (event.target as HTMLInputElement).value);
};
<\/script>
`,v=`<template>
  <h2>\u7EC4\u4EF6\u66B4\u9732\u7684\u65B9\u6CD5</h2>
  <r-input v-model="state.text" placeholder="\u8BF7\u8F93\u5165\u6587\u672C" ref="inputRef" />
  <div class="button-group">
    <r-button text="\u83B7\u5F97\u7126\u70B9" size="small" @click="focus" />
    <r-button text="\u5931\u53BB\u7126\u70B9" size="small" @click="blur" />
    <r-button text="\u9009\u62E9\u6587\u672C" size="small" @click="select" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const state = reactive({
  text: ''
});

const inputRef = ref();

const focus = () => {
  inputRef.value?.focus();
};
const blur = () => {
  inputRef.value?.blur();
};
const select = () => {
  inputRef.value?.select();
};
<\/script>
`,C=`<template>
  <h2>\u63D2\u69FD\u6F14\u793A</h2>
  <r-input v-model="state.text" placeholder="\u63D2\u69FD\u6F14\u793A">
    <template #left>
      <r-icon name="question-circle" />
    </template>
    <template #right>
      <r-button type="danger" text="\u83B7\u53D6\u9A8C\u8BC1\u7801" size="small" />
    </template>
  </r-input>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  text: ''
});
<\/script>
`,_=`<template>
  <h2>\u914D\u5408\u8868\u5355\u4F7F\u7528</h2>
  <r-form>
    <r-form-item title="\u7528\u6237\u540D" prop="username" title-align="right">
      <r-input v-model="state.username" placeholder="\u8BF7\u8F93\u5165\u7528\u6237\u540D" />
    </r-form-item>
    <r-form-item title="\u5BC6\u7801" prop="password" title-align="right" :border="false">
      <r-input v-model="state.password" placeholder="\u8BF7\u8F93\u5165\u5BC6\u7801" />
    </r-form-item>
  </r-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  username: '',
  password: ''
});
<\/script>
`,f={class:"markdown-body"},g=s(`<h1>Input \u8F93\u5165\u6846</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7528\u6237\u53EF\u4EE5\u5728\u6587\u672C\u6846\u91CC\u8F93\u5165\u5185\u5BB9\u3002</p></div><div class="card"><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Input</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Input</span>);
</code></pre></div>`,3),A={class:"card"},b=t("h3",null,"\u57FA\u7840\u7528\u6CD5",-1),D=t("p",null,[u("\u53EF\u4EE5\u901A\u8FC7 "),t("code",{class:""},"v-model"),u(" \u53CC\u5411\u7ED1\u5B9A\u8F93\u5165\u6846\u7684\u503C\uFF0C\u901A\u8FC7 "),t("code",{class:""},"placeholder"),u(" \u8BBE\u7F6E\u5360\u4F4D\u63D0\u793A\u6587\u5B57\u3002")],-1),x={class:"card"},y=t("h3",null,"\u81EA\u5B9A\u4E49\u7C7B\u578B",-1),w=t("p",null,[u("\u6839\u636E "),t("code",{class:""},"type"),u(" \u5C5E\u6027\u5B9A\u4E49\u4E0D\u540C\u7C7B\u578B\u7684\u8F93\u5165\u6846\uFF0C\u9ED8\u8BA4\u503C\u4E3A text\u3002")],-1),j={class:"card"},k=t("h3",null,"\u663E\u793A\u6E05\u9664\u56FE\u6807",-1),I=t("p",null,[u("\u901A\u8FC7\u8BBE\u7F6E "),t("code",{class:""},"clearable"),u(" \u5728\u8F93\u5165\u8FC7\u7A0B\u4E2D\u5C55\u793A\u6E05\u9664\u56FE\u6807\u3002 \u901A\u8FC7 "),t("code",{class:""},"show-clear-icon-always"),u(" \u8BBE\u7F6E\u59CB\u7EC8\u663E\u793A\u6E05\u9664\u56FE\u6807\u3002")],-1),z={class:"card"},R=t("h3",null,"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9",-1),N=t("p",null,[u("\u901A\u8FC7 "),t("code",{class:""},"formatter"),u(" \u5C5E\u6027\u53EF\u4EE5\u5BF9\u8F93\u5165\u7684\u5185\u5BB9\u8FDB\u884C\u683C\u5F0F\u5316\uFF0C\u901A\u8FC7 "),t("code",{class:""},"format-trigger"),u(" \u5C5E\u6027\u53EF\u4EE5\u6307\u5B9A\u6267\u884C\u683C\u5F0F\u5316\u7684\u65F6\u673A\u3002\u4F8B\u5982\u5BF9\u94F6\u884C\u5361\u8FDB\u884C\u5206\u9694\uFF1A")],-1),S={class:"card"},V=t("h3",null,"\u7981\u7528\u548C\u53EA\u8BFB",-1),M=t("p",null,[u("\u901A\u8FC7 "),t("code",{class:""},"readonly"),u(" \u5C06\u8F93\u5165\u6846\u8BBE\u7F6E\u4E3A\u53EA\u8BFB\u72B6\u6001\uFF0C\u901A\u8FC7 "),t("code",{class:""},"disabled"),u(" \u5C06\u8F93\u5165\u6846\u8BBE\u7F6E\u4E3A\u7981\u7528\u72B6\u6001\u3002")],-1),T={class:"card"},P=t("h3",null,"\u5BF9\u9F50\u65B9\u5F0F",-1),q=t("p",null,[u("\u901A\u8FC7 "),t("code",{class:""},"input-align"),u(" \u8BBE\u7F6E\u8F93\u5165\u6846\u5BF9\u9F50\u65B9\u5F0F\u3002")],-1),H={class:"card"},L=t("h3",null,"\u4E8B\u4EF6\u6F14\u793A",-1),O={class:"card"},Y=t("h3",null,"\u7EC4\u4EF6\u66B4\u9732\u7684\u65B9\u6CD5",-1),$=t("p",null,[u("\u7EC4\u4EF6\u5BF9\u5916\u66B4\u9732\u7684\u65B9\u6CD5\u6709 "),t("code",{class:""},"focus"),u(),t("code",{class:""},"blur"),u(),t("code",{class:""},"select")],-1),G={class:"card"},J=t("h3",null,"\u63D2\u69FD\u6F14\u793A",-1),K=t("p",null,[u("\u53EF\u4EE5\u901A\u8FC7 "),t("code",{class:""},"left"),u(),t("code",{class:""},"right"),u(" \u63D2\u69FD, \u5728\u8F93\u5165\u6846\u524D\u540E\u63D2\u5165\u81EA\u5B9A\u4E49\u5185\u5BB9\u3002")],-1),Q={class:"card"},U=t("h3",null,"\u914D\u5408\u8868\u5355\u4F7F\u7528",-1),W=s('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u8F93\u5165\u503C\uFF0C\u53CC\u5411\u7ED1\u5B9A</td><td>string</td><td>-</td></tr><tr><td>type</td><td>\u8F93\u5165\u6846\u7C7B\u578B, \u652F\u6301\u539F\u751F input \u6807\u7B7E\u7684\u6240\u6709 <code class="">type</code> \u5C5E\u6027\uFF0C\u989D\u5916\u652F\u6301\u4E86 <code class="">digit</code> \u7C7B\u578B</td><td>string</td><td><code class="">text</code></td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u4E3A\u7A7A\u65F6\u5360\u4F4D\u7B26</td><td>string</td><td>-</td></tr><tr><td>input-align</td><td>\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C <code class="">left</code>\u3001<code class="">center</code>\u3001<code class="">right</code></td><td>string</td><td><code class="">left</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>readonly</td><td>\u662F\u5426\u53EA\u8BFB</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>autofocus</td><td>\u662F\u5426\u81EA\u52A8\u83B7\u5F97\u7126\u70B9\uFF0C<code class="">iOS</code> \u7CFB\u7EDF\u4E0D\u652F\u6301\u8BE5\u5C5E\u6027</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>max-length</td><td>\u9650\u5236\u6700\u957F\u8F93\u5165\u5B57\u7B26</td><td>string \uFF5C number</td><td>-</td></tr><tr><td>clearable</td><td>\u5C55\u793A\u6E05\u9664 <code class="">Icon</code></td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>autocomplete</td><td>\u539F\u751F\u7684\u81EA\u52A8\u5B8C\u6210\u529F\u80FD</td><td>string</td><td><code class="">off</code></td></tr><tr><td>showClearIconAlways</td><td>\u662F\u5426\u59CB\u7EC8\u5C55\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>formatter</td><td>\u8F93\u5165\u5185\u5BB9\u683C\u5F0F\u5316\u51FD\u6570</td><td><code class="">(val: string) =&gt; string</code></td><td>-</td></tr><tr><td>format-trigger</td><td>\u683C\u5F0F\u5316\u51FD\u6570\u89E6\u53D1\u7684\u65F6\u673A\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">onInput</code>\u3001<code class="">onBlur</code></td><td>string</td><td><code class="">onInput</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>update:model-value</td><td>\u8F93\u5165\u6846\u5185\u5BB9\u53D8\u5316\u65F6\u89E6\u53D1</td><td><code class="">val</code></td></tr><tr><td>focus</td><td>\u8F93\u5165\u6846\u805A\u7126\u65F6\u89E6\u53D1</td><td><code class="">event</code></td></tr><tr><td>blur</td><td>\u8F93\u5165\u6846\u5931\u7126\u65F6\u89E6\u53D1</td><td><code class="">event</code></td></tr><tr><td>clear</td><td>\u70B9\u51FB\u6E05\u9664\u6309\u94AE\u65F6\u89E6\u53D1</td><td><code class="">event</code></td></tr><tr><td>click</td><td>\u70B9\u51FB\u7EC4\u4EF6\u65F6\u89E6\u53D1</td><td><code class="">event</code></td></tr><tr><td>input</td><td>\u8F93\u5165\u6846\u8F93\u5165\u5185\u5BB9\u65F6\u89E6\u53D1</td><td><code class="">event</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>clear</td><td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u5C3E\u90E8\u6E05\u9664\u6309\u94AE</td></tr><tr><td>left</td><td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u5DE6\u4FA7\u63D2\u69FD\u5185\u5BB9</td></tr><tr><td>right</td><td>\u81EA\u5B9A\u4E49\u8F93\u5165\u6846\u53F3\u4FA7\u63D2\u69FD\u5185\u5BB9</td></tr></tbody></table></div><div class="card"><h3>Ref</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>focus</td><td>\u83B7\u53D6\u7126\u70B9</td></tr><tr><td>blur</td><td>\u5931\u53BB\u7126\u70B9</td></tr><tr><td>select</td><td>\u9009\u62E9\u6587\u5B57</td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>--r-input-line-height</td><td>var(--r-cell-line-height, 24px)</td></tr><tr><td>--r-input-font-size</td><td>var(--r-cell-font-size, 14px)</td></tr><tr><td>--r-input-input-color</td><td>#323232</td></tr><tr><td>--r-input-input-font-size</td><td>var(--r-cell-font-size, 14px)</td></tr><tr><td>--r-input-input-placeholder-color</td><td>#c8c9cc</td></tr><tr><td>--r-input-input-disabled-color</td><td>#999</td></tr><tr><td>--r-input-input-slot-margin-left</td><td>4px</td></tr><tr><td>--r-input-input-slot-margin-right</td><td>4px</td></tr><tr><td>--r-input-clear-color</td><td>#c8c9cc</td></tr></tbody></table></div>',6),et={},nt="",dt=o({__name:"README",setup(X,{expose:l}){return l({frontmatter:{},excerpt:void 0}),(Z,tt)=>{const e=r("hljs-block");return c(),a("div",f,[g,t("div",A,[b,D,t("p",null,[n(e,{code:d(i)},null,8,["code"])])]),t("div",x,[y,w,t("p",null,[n(e,{code:d(p)},null,8,["code"])])]),t("div",j,[k,I,t("p",null,[n(e,{code:d(h)},null,8,["code"])])]),t("div",z,[R,N,t("p",null,[n(e,{code:d(F)},null,8,["code"])])]),t("div",S,[V,M,t("p",null,[n(e,{code:d(m)},null,8,["code"])])]),t("div",T,[P,q,t("p",null,[n(e,{code:d(E)},null,8,["code"])])]),t("div",H,[L,t("p",null,[n(e,{code:d(B)},null,8,["code"])])]),t("div",O,[Y,$,t("p",null,[n(e,{code:d(v)},null,8,["code"])])]),t("div",G,[J,K,t("p",null,[n(e,{code:d(C)},null,8,["code"])])]),t("div",Q,[U,t("p",null,[n(e,{code:d(_)},null,8,["code"])])]),W])}}});export{dt as default,nt as excerpt,et as frontmatter};
