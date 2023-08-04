import{d as e,o as l,c,a as s,b as n,u as a,X as t,g as d}from"./plugin-vueexport-helper.e98510c0.js";const r=`<template>
  <r-cell-group title="\u51FD\u6570\u5F0F\u8C03\u7528" round>
    <r-cell title="\u6587\u5B57\u63D0\u793A" is-link @click="clickBase" />
    <r-cell title="\u6210\u529F\u63D0\u793A" is-link @click="clickSuccess" />
    <r-cell title="\u5931\u8D25\u63D0\u793A" is-link @click="clickFail" />
    <r-cell title="\u957F\u6587\u6848\u63D0\u793A" is-link @click="clickLong" />
    <r-cell title="\u81EA\u5B9A\u4E49\u5185\u5BB9\u3001\u56FE\u6807" is-link @click="clickCustomContent" />
    <r-cell title="\u624B\u52A8\u5173\u95ED Toast" is-link @click="clickToastAlwaysShow" />
    <r-cell title="Loading \u63D0\u793A" is-link @click="clickLoadingAlwaysShow" />
    <r-cell title="\u52A8\u6001\u66F4\u65B0\u63D0\u793A" is-link @click="clickLoading" />
    <r-cell title="\u8BBE\u7F6E\u906E\u7F69" is-link @click="clickMask" />
  </r-cell-group>
</template>

<script lang="ts" setup>
import { createVNode, h } from 'vue';
import { showToast, showSuccessToast, showFailToast, showLongToast, showLoadingToast } from '../../index';

// \u6587\u5B57\u63D0\u793A
const clickBase = () => showToast('\u63D0\u793A\u5185\u5BB9');

// \u6210\u529F\u63D0\u793A
const clickSuccess = () => showSuccessToast('\u6210\u529F\u6587\u6848');

// \u5931\u8D25\u63D0\u793A
const clickFail = () => showFailToast('\u5931\u8D25\u6587\u6848');

// \u957F\u6587\u6848\u63D0\u793A
const clickLong = () => showLongToast('This message will contain a incomprehensibilities long word.');

// \u81EA\u5B9A\u4E49\u5185\u5BB9\u3001\u56FE\u6807
const clickCustomContent = () =>
  showToast({
    message: createVNode('span', { style: { color: 'pink' } }, '\u6211\u53EF\u4EE5\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6 vNode/.vue'),
    icon: h('img', { width: '60', src: 'https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif' })
    // slots: {
    //   icon: () =>
    //     createVNode('img', { width: '60', src: 'https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif' })
    // }
  });

// \u624B\u52A8\u5173\u95ED Toast
const clickToastAlwaysShow = () => {
  const toast = showToast({ message: '\u624B\u52A8\u5173\u95ED Toast', duration: 0 });

  setTimeout(() => {
    toast.remove();
  }, 3000);
};

// Loading \u63D0\u793A
const clickLoadingAlwaysShow = () => {
  const loading = showLoadingToast();

  setTimeout(() => {
    loading.remove();
  }, 3000);
};

// \u52A8\u6001\u66F4\u65B0\u63D0\u793A
const clickLoading = () => {
  const loading = showLoadingToast('\u5012\u8BA1\u65F6 3 \u79D2');

  let second = 3;
  const timer = setInterval(() => {
    second--;
    if (second) {
      loading.setMessage(\`\u5012\u8BA1\u65F6 \${second} \u79D2\`);
    } else {
      clearInterval(timer);
      loading.remove();
    }
  }, 1000);
};

// \u8BBE\u7F6E\u906E\u7F69
const clickMask = () => {
  showToast({
    message: 'click overlay',
    duration: 0,
    overlayStyle: { background: 'rgba(10,20,30,0.5)' },
    overlayClass: 'custom-overlay',
    closeOnClickOverlay: true,
    onClickOverlay() {
      alert('click overlay');
    }
  });
};
<\/script>
`,i=`<template>
  <r-cell-group title="\u7EC4\u4EF6\u5F0F\u4F7F\u7528" round>
    <r-cell title="\u57FA\u7840\u5F39\u6846" is-link @click="clickBase" />
    <r-toast title="\u7EC4\u4EF6\u8C03\u7528" message="\u6587\u5B57\u63D0\u793A" v-model:show="showBase"> </r-toast>

    <r-cell title="teleport \u4F7F\u7528" is-link @click="clickTeleport"></r-cell>
    <r-toast teleport="body" long v-model:show="showTeleport">
      <template #icon>
        <img width="60" src="https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif" />
      </template>
      \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\u770B\u4E00\u4E0B Elements Tab
    </r-toast>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// \u57FA\u7840\u5F39\u6846
const showBase = ref(false);
const clickBase = () => {
  showBase.value = true;
};

// teleport \u4F7F\u7528\uFF0C\u6302\u8F7D\u5230\u6307\u5B9A\u8282\u70B9
const showTeleport = ref(false);
const clickTeleport = () => {
  showTeleport.value = true;
};
<\/script>
`,p={class:"markdown-body"},h=t(`<h1>Toast \u8F7B\u63D0\u793A</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u5728\u9875\u9762\u4E2D\u95F4\u5F39\u51FA\u9ED1\u8272\u534A\u900F\u660E\u63D0\u793A\uFF0C\u7528\u4E8E\u6D88\u606F\u901A\u77E5\u3001\u52A0\u8F7D\u63D0\u793A\u3001\u64CD\u4F5C\u7ED3\u679C\u63D0\u793A\u7B49\u573A\u666F\u3002</p></div><div class="card"><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Toast</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Toast</span>);
</code></pre></div>`,3),F={class:"card"},E=t(`<h3>\u51FD\u6570\u8C03\u7528</h3><p>\u4E3A\u4E86\u4FBF\u4E8E\u4F7F\u7528 <code class="">Toast</code>\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u8F85\u52A9\u51FD\u6570\uFF0C\u901A\u8FC7\u8F85\u52A9\u51FD\u6570\u53EF\u4EE5\u5FEB\u901F\u5524\u8D77\u5168\u5C40\u7684 <code class="">Toast</code> \u7EC4\u4EF6\u3002</p><p>\u6BD4\u5982\u4F7F\u7528 showToast \u51FD\u6570\uFF0C\u8C03\u7528\u540E\u4F1A\u76F4\u63A5\u5728\u9875\u9762\u4E2D\u6E32\u67D3\u5BF9\u5E94\u7684\u5F39\u51FA\u6846\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-title function_">showToast</span>(<span class="hljs-string">&#39;\u63D0\u793A\u5185\u5BB9&#39;</span>);
</code></pre><p>\u4EE3\u7801\u6F14\u793A</p>`,5),g=t(`<div class="card"><h3>\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E</h3><p>\u901A\u8FC7 <code class="">setToastDefaultOptions</code> \u51FD\u6570\u53EF\u4EE5\u5168\u5C40\u4FEE\u6539 showToast \u7B49\u65B9\u6CD5\u7684\u9ED8\u8BA4\u914D\u7F6E\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { setToastDefaultOptions } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-title function_">setToastDefaultOptions</span>({ <span class="hljs-attr">duration</span>: <span class="hljs-number">3000</span> });
<span class="hljs-title function_">setToastDefaultOptions</span>(<span class="hljs-string">&#39;success&#39;</span>, { <span class="hljs-attr">overlayStyle</span>: { <span class="hljs-attr">backgroundColor</span>: <span class="hljs-string">&#39;rgba(123 ,2, 33, 0.5)&#39;</span> } });
</code></pre></div>`,1),m={class:"card"},C=t(`<h3>\u7EC4\u4EF6\u5F0F\u8C03\u7528</h3><p>\u652F\u6301\u5728template\u6A21\u7248\u4E2D\u4F7F\u7528 Toast \u7EC4\u4EF6\u3002\u4F7F\u7528\u524D\u9700\u8981\u901A\u8FC7 app.use \u7B49\u65B9\u5F0F\u6CE8\u518C\u7EC4\u4EF6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">r-toast</span> <span class="hljs-attr">teleport</span>=<span class="hljs-string">&quot;body&quot;</span> <span class="hljs-attr">long</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;showTeleport&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">icon</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;60&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
  \u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\u770B\u4E00\u4E0B Elements Tab
<span class="hljs-tag">&lt;/<span class="hljs-name">r-toast</span>&gt;</span>
</code></pre><p>\u4EE3\u7801\u6F14\u793A</p>`,4),D=t('<h2>API</h2><div class="card"><h3>\u65B9\u6CD5</h3><p>rong-ui3 \u4E2D\u5BFC\u51FA\u4E86\u4EE5\u4E0B Toast \u76F8\u5173\u7684\u8F85\u52A9\u51FD\u6570</p><table><thead><tr><th>\u65B9\u6CD5\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td>showToast</td><td>\u5C55\u793A\u63D0\u793A</td><td>string | ToastOptions</td><td>{ remove: () =&gt; void; setMessage: (message: string | VNode) =&gt; void; vNode: VNode; }</td></tr><tr><td>showLoadingToast</td><td>\u5C55\u793A\u52A0\u8F7D\u63D0\u793A</td><td>string | ToastOptions</td><td>\u540C\u4E0A</td></tr><tr><td>showSuccessToast</td><td>\u5C55\u793A\u6210\u529F\u63D0\u793A</td><td>string | ToastOptions</td><td>\u540C\u4E0A</td></tr><tr><td>showFailToast</td><td>\u5C55\u793A\u5931\u8D25\u63D0\u793A</td><td>string | ToastOptions</td><td>\u540C\u4E0A</td></tr><tr><td>showLongToast</td><td>\u5C55\u793A\u957F\u6587\u6848\u63D0\u793A</td><td>string | ToastOptions</td><td>\u540C\u4E0A</td></tr><tr><td>setToastDefaultOptions</td><td>\u4FEE\u6539\u9ED8\u8BA4\u914D\u7F6E\uFF0C\u5F71\u54CD\u6240\u6709\u7684 showToast \u8C03\u7528\u3002\u4F20\u5165 type \u53EF\u4EE5\u4FEE\u6539\u6307\u5B9A\u7C7B\u578B\u7684\u9ED8\u8BA4\u914D\u7F6E</td><td>type | ToastOptions</td><td>void</td></tr></tbody></table></div><div class="card"><h3>ToastOptions \u6570\u636E\u7ED3\u6784</h3><blockquote><p>\u5F53\u524D\u7EC4\u4EF6\u5185\u90E8\u900F\u4F20\u4E86 <a href="#/zh-CN/component/popup">Popup\u7EC4\u4EF6</a> \u548C <a href="#/zh-CN/component/overlay">Overlay\u7EC4\u4EF6</a></p></blockquote><p>\u8C03\u7528 showToast \u7B49\u65B9\u6CD5\u65F6\uFF0C\u8FD8\u652F\u6301\u4F20\u5165\u4EE5\u4E0B\u9009\u9879\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>message</td><td>\u6587\u672C\u5185\u5BB9</td><td>string | VNode</td><td>-</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807\uFF0C\u652F\u6301\u4F20\u5165\u56FE\u6807\u540D\u79F0\u6216\u8005h \u51FD\u6570\uFF0C\u56FE\u6807\u540D\u79F0\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 name \u5C5E\u6027</td><td>string | VNode</td><td>-</td></tr><tr><td>type</td><td>\u63D0\u793A\u7C7B\u578B\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">loading</code> <code class="">success</code> <code class="">fail</code> <code class="">long</code> <code class="">default</code></td><td>ToastType</td><td><code class="">default</code></td></tr><tr><td>duration</td><td>\u5C55\u793A\u65F6\u957F\uFF08\u6BEB\u79D2\uFF09<br>\u503C\u4E3A 0 \u65F6\uFF0Ctoast \u4E0D\u4F1A\u81EA\u52A8\u6D88\u5931</td><td>number</td><td><code class="">2000</code></td></tr><tr><td>overlay-duration</td><td>\u906E\u7F69\u5C55\u793A\u65F6\u957F\uFF08\u6BEB\u79D2\uFF09</td><td>number</td><td>-</td></tr><tr><td>content-style</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9\u533A\u57DF\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49message\u5185\u5BB9</td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807</td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>--r-toast-font-size</td><td>14px</td></tr><tr><td>--r-toast-line-height</td><td>20px</td></tr><tr><td>--r-toast-background-color</td><td>rgba(0, 0, 0, .7)</td></tr><tr><td>--r-toast-color</td><td>#fff</td></tr><tr><td>--r-toast-padding</td><td>8px 12px</td></tr><tr><td>--r-toast-overlay-background-color</td><td>transparent</td></tr><tr><td>--r-toast-default-width</td><td>120px</td></tr><tr><td>--r-toast-long-width</td><td>226px</td></tr><tr><td>--r-toast-border-radius</td><td>8px !important</td></tr><tr><td>--r-toast-icon-font-size</td><td>32px</td></tr><tr><td>--r-toast-icon-margin-bottom</td><td>8px</td></tr></tbody></table></div>',5),w={},f="",j=e({__name:"README",setup(A,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(k,B)=>{const u=d("hljs-block");return l(),c("div",p,[h,s("div",F,[E,s("p",null,[n(u,{code:a(r)},null,8,["code"])])]),g,s("div",m,[C,s("p",null,[n(u,{code:a(i)},null,8,["code"])])]),D])}}});export{j as default,f as excerpt,w as frontmatter};
