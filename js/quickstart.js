import{d as u,o as a,c as n,W as p}from"./plugin-vueexport-helper.js";const l={class:"markdown-body"},t=p(`<h1>\u5FEB\u901F\u4E0A\u624B</h1><h3>\u4ECB\u7ECD</h3><p>\u901A\u8FC7\u672C\u6587\u4F60\u53EF\u4EE5\u638C\u63E1 rong-ui3 \u7684\u5B89\u88C5\u548C\u4F7F\u7528\u65B9\u6CD5\uFF0C\u64CD\u4F5C\u7B80\u5355\u6613\u4E0A\u624B\uFF0C\u5F00\u53D1\u7B80\u6D01\u5FEB\u901F\u3002</p><h3>\u5B89\u88C5</h3><h4>1. \u901A\u8FC7 npm \u5B89\u88C5</h4><p>\u5728\u9879\u76EE\u4E2D\u4F7F\u7528 rong-ui3 \u65F6\uFF0C\u53EF\u901A\u8FC7 npm \u5B89\u88C5\uFF1A</p><pre><code class="language-js">npm i rong-ui3
</code></pre><p>\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528 yarn \u6216 pnpm \u8FDB\u884C\u5B89\u88C5\uFF1A</p><pre><code class="language-js"># \u901A\u8FC7 yarn \u5B89\u88C5
yarn add rong-ui3

# \u901A\u8FC7 pnpm \u5B89\u88C5
pnpm add rong-ui3
</code></pre><h4>2. \u901A\u8FC7 CDN \u5B89\u88C5\u53CA\u4F7F\u7528</h4><blockquote><p>\u53EF\u4EE5\u5728 jsdelivr \u548C unpkg \u7B49\u516C\u5171 CDN \u4E0A\u83B7\u53D6\u5230 RongUI\u3002 \u4E0D\u63A8\u8350\u5728\u751F\u4EA7\u73AF\u5883\u4F7F\u7528\u7EC4\u4EF6\u5E93 CDN\uFF0C\u5982\u679C\u9700\u8981\u8FD9\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF0C\u5EFA\u8BAE\u5C06\u7279\u5B9A\u7248\u672C\u7684 CDN \u6587\u4EF6\u4E0B\u8F7D\u81F3\u672C\u5730\u9879\u76EE\u76EE\u5F55\u4E2D\u4F7F\u7528\u3002</p></blockquote><pre><code class="language-html"><span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-keyword">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">&quot;UTF-8&quot;</span> /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0&quot;</span> /&gt;</span>
    <span class="hljs-comment">&lt;!-- \u5F15\u5165\u6837\u5F0F --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;stylesheet&quot;</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/rong-ui3/style.css&quot;</span> /&gt;</span>
    <span class="hljs-comment">&lt;!-- \u5F15\u5165Vue --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.jsdelivr.net/npm/vue&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- \u5F15\u5165RongUI\u7EC4\u4EF6\u5E93 --&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://fastly.jsdelivr.net/npm/rong-ui3&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;app&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-handlebars"><span class="language-xml">
      // \u5728 #app \u6807\u7B7E\u4E0B\u6E32\u67D3\u4E00\u4E2A\u6309\u94AE\u7EC4\u4EF6
      const app = Vue.createApp({
        template: \`
        <span class="hljs-tag">&lt;<span class="hljs-name">r-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u4E3B\u8981\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">r-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">r-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>&gt;</span>\u4FE1\u606F\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">r-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">r-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;default&quot;</span>&gt;</span>\u9ED8\u8BA4\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">r-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">r-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;danger&quot;</span>&gt;</span>\u5371\u9669\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">r-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">r-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span>&gt;</span>\u8B66\u544A\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">r-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">r-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;success&quot;</span>&gt;</span>\u6210\u529F\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">r-button</span>&gt;</span>
        \`,
      });
      app.use(rongui3);
      app.mount(&quot;#app&quot;);
    </span></span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><h3>\u7EC4\u4EF6\u4F7F\u7528</h3><h4>\u65B9\u6CD5\u4E00\u3001\u5E38\u89C4\u7528\u6CD5</h4><h5>1. \u5168\u5C40\u5168\u91CF\u5F15\u5165</h5><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">App</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./App.vue&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">RongUI</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;rong-ui3&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;rong-ui3/style.css&quot;</span>;
<span class="hljs-title function_">createApp</span>(<span class="hljs-title class_">App</span>).<span class="hljs-title function_">use</span>(<span class="hljs-title class_">RongUI</span>).<span class="hljs-title function_">mount</span>(<span class="hljs-string">&quot;#app&quot;</span>);
</code></pre><h5>2. \u5168\u5C40\u90E8\u5206\u5F15\u5165</h5><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vue&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">App</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./App.vue&quot;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Button</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;rong-ui3&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;rong-ui3/style.css&quot;</span>;
<span class="hljs-title function_">createApp</span>(<span class="hljs-title class_">App</span>).<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Button</span>).<span class="hljs-title function_">mount</span>(<span class="hljs-string">&quot;#app&quot;</span>);
</code></pre><h4>\u65B9\u6CD5\u4E8C\u3001\u81EA\u52A8\u6309\u9700\u5F15\u5165</h4><p>\u5728\u57FA\u4E8E vite\u3001vue-cli \u6216 webpack \u7684\u9879\u76EE\u4E2D\u4F7F\u7528 NutUI \u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 unplugin-vue-components \u63D2\u4EF6\uFF0C\u4E0D\u9700\u624B\u52A8\u5F15\u5165\u7EC4\u4EF6\uFF0C\u5B83\u53EF\u81EA\u52A8\u5F15\u5165\u7EC4\u4EF6\u53CA\u6837\u5F0F\u3002\u6B64\u65B9\u6CD5\u5728\u4F7F\u7528\u4E2D\u914D\u7F6E\u8FC7\u7A0B\u6BD4\u8F83\u7E41\u7410\u4E00\u4E9B\uFF0C\u5982\u4E1A\u52A1\u573A\u666F\u65E0\u7279\u6B8A\u8981\u6C42\uFF0C\u66F4\u63A8\u8350\u4F7F\u7528\u7B80\u4FBF\u7684\u5E38\u89C4\u7528\u6CD5\u3002</p><h4>1\u3001\u5B89\u88C5\u63D2\u4EF6</h4><pre><code class="language-js"># \u901A\u8FC7 npm \u5B89\u88C5
npm i unplugin-vue-components -D

# \u901A\u8FC7 yarn \u5B89\u88C5
yarn add unplugin-vue-components -D

# \u901A\u8FC7 pnpm \u5B89\u88C5
pnpm add unplugin-vue-components -D
</code></pre><h4>2\u3001\u9879\u76EE\u914D\u7F6E</h4><details><summary>vite</summary><pre><code class="language-js"><span class="hljs-comment">// vite.config.js</span>
<span class="hljs-keyword">import</span> { defineConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vite&#39;</span>
<span class="hljs-keyword">import</span> vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Components</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">RongUIResolver</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3/resolver&#39;</span>

<span class="hljs-comment">// https://vitejs.dev/config/</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineConfig</span>({
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-title function_">vue</span>(),
    <span class="hljs-comment">// \u5F00\u542F unplugin \u63D2\u4EF6\uFF0C\u81EA\u52A8\u5F15\u5165 RongUI \u7EC4\u4EF6</span>
    <span class="hljs-title class_">Components</span>({
      <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">RongUIResolver</span>()]
    }),
  ]
})
</code></pre></details><br><details><summary>webpack</summary><pre><code class="language-js"><span class="hljs-comment">// vite.config.js</span>
<span class="hljs-keyword">import</span> { defineConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vite&#39;</span>
<span class="hljs-keyword">import</span> vue <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">Components</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;unplugin-vue-components/webpack&#39;</span>
<span class="hljs-keyword">import</span> <span class="hljs-title class_">RongUIResolver</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3/resolver&#39;</span>

<span class="hljs-comment">// https://vitejs.dev/config/</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">defineConfig</span>({
  <span class="hljs-attr">plugins</span>: [
    <span class="hljs-title function_">vue</span>(),
    <span class="hljs-comment">// \u5F00\u542F unplugin \u63D2\u4EF6\uFF0C\u81EA\u52A8\u5F15\u5165 RongUI \u7EC4\u4EF6</span>
    <span class="hljs-title class_">Components</span>({
      <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">RongUIResolver</span>()]
    }),
  ]
})
</code></pre></details><h4>3\u3001\u4F7F\u7528\u7EC4\u4EF6</h4><p>\u53EF\u4EE5\u76F4\u63A5\u5728\u6A21\u677F\u4E2D\u4F7F\u7528 RongUI \u7EC4\u4EF6\uFF0Cunplugin-vue-components \u63D2\u4EF6\u4F1A\u81EA\u52A8\u6CE8\u518C\u5BF9\u5E94\u7684\u7EC4\u4EF6\uFF0C\u5E76\u6309\u9700\u5F15\u5165\u7EC4\u4EF6\u6837\u5F0F\u3002</p><pre><code class="language-html"># \u76F4\u63A5\u4F7F\u7528
<span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">r-button</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">r-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre><pre><code class="language-js"># \u79FB\u9664\u624B\u52A8\u5F15\u5165\u548C\u6CE8\u518C\u7684\u4EE3\u7801
<span class="hljs-comment">// import { Button } from &#39;rong-ui3&#39;;</span>
<span class="hljs-comment">// app.use(Button);</span>
</code></pre><h4>4\u3001\u4F7F\u7528\u51FD\u6570\u5F0F\u7EC4\u4EF6</h4><p>RongUI \u4E2D Toast\uFF0CDialog \u7EC4\u4EF6\u9664\u6807\u7B7E\u5F0F\u4F7F\u7528\u5916\uFF0C\u8FD8\u53EF\u4F7F\u7528\u51FD\u6570\u5F62\u5F0F\u8C03\u7528\u3002\u5728\u4F7F\u7528\u65F6\uFF0Cunplugin-vue-components \u65E0\u6CD5\u81EA\u52A8\u5F15\u5165\u5BF9\u5E94\u7684\u6837\u5F0F\u6587\u4EF6\uFF0C\u9700\u8981\u4F60\u624B\u52A8\u5F15\u5165\u6837\u5F0F\u3002</p><pre><code class="language-js"><span class="hljs-comment">// Toast</span>
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;rong-ui3/es/toast/style/index.css&#39;</span>; <span class="hljs-comment">// or index.less</span>
</code></pre><pre><code class="language-js"><span class="hljs-comment">// Dialog</span>
<span class="hljs-keyword">import</span> { showDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;rong-ui3/es/dialog/style/index.css&#39;</span>; <span class="hljs-comment">// or index.less</span>
</code></pre><h3>\u6CE8\u610F\u4E8B\u9879</h3><h4>1\u3001\u6309\u9700\u5F15\u5165\u63D2\u4EF6\u5347\u7EA7</h4><p>rong-ui3 \u79FB\u9664\u4E86 <code class="">babel-plugin-import</code> \u3001<code class="">vite-plugin-style-import</code> \u63D2\u4EF6\u7684\u4F7F\u7528\uFF0C\u6309\u9700\u5F15\u5165\u6837\u5F0F\u4E0D\u518D\u4F9D\u8D56\u4E8E <code class="">babel</code>\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u9009\u62E9\u5176\u4ED6\u6548\u7387\u66F4\u9AD8\u7684\u7F16\u8BD1\u5DE5\u5177\u3002\u540C\u65F6\uFF0Crong-ui3 \u9002\u914D\u4E86\u652F\u6301\u81EA\u52A8\u5F15\u5165\u548C\u6CE8\u518C\u7EC4\u4EF6\u7684 <code class="">unplugin-vue-components</code> \u63D2\u4EF6\uFF0C\u8FD9\u5C06\u4F7F\u5F00\u53D1\u4F53\u9A8C\u6709\u6240\u63D0\u5347\u3002</p><h4>2\u3001\u7EC4\u4EF6\u5355\u4F4D\u9009\u62E9</h4><p>\u7EC4\u4EF6 css \u5355\u4F4D\u4F7F\u7528\u7684\u662F px\uFF0C\u5982\u679C\u4F60\u7684\u9879\u76EE\u4E2D\u9700\u8981 rem \u5355\u4F4D\uFF0C\u53EF\u501F\u52A9\u4E00\u4E9B\u5DE5\u5177\u8FDB\u884C\u8F6C\u6362\uFF0C\u6BD4\u5982 <code class="">webpack</code> \u7684 <code class="">px2rem-loader</code>\u3001<code class="">postcss</code> \u7684 <code class="">postcss-plugin-px2rem</code> \u63D2\u4EF6\u7B49\u3002</p><h4>3\u3001\u4F7F\u7528 JSX\u3001TSX \u7F16\u5199\u9879\u76EE\u65F6\u65E0\u6CD5\u5B9E\u73B0\u81EA\u52A8\u6309\u9700\u5F15\u5165</h4><p><code class="">unplugin-vue-components</code> \u63D2\u4EF6\u7684\u9ED8\u8BA4\u914D\u7F6E\u4E0D\u8BC6\u522B JSX\u3001TSX \u6587\u4EF6\uFF0C\u9700\u8981\u624B\u52A8\u6DFB\u52A0 include \u5B57\u6BB5\uFF1A</p><pre><code class="language-js"><span class="hljs-title class_">Components</span>({
  <span class="hljs-attr">include</span>: [<span class="hljs-regexp">/\\.[tj]sx?$/</span>, <span class="hljs-regexp">/\\.vue$/</span>, <span class="hljs-regexp">/\\.vue\\?vue/</span>],
  <span class="hljs-attr">resolvers</span>: [<span class="hljs-title class_">RongUIResolver</span>()],
})
</code></pre><h4>4\u3001\u5728 vue-cli \u6216 webpack \u4E2D\u4F7F\u7528\u6309\u9700\u5F15\u5165\u65F6\u7EC4\u4EF6\u6CA1\u6709\u7C7B\u578B\u63D0\u793A</h4><p>\u89E3\u51B3\u65B9\u6848\uFF1A<code class="">unplugin-vue-components</code> \u63D2\u4EF6\u4F1A\u4E3A\u5F15\u5165\u7684\u7EC4\u4EF6\u81EA\u52A8\u751F\u6210\u5168\u5C40\u7C7B\u578B\u6587\u4EF6 <code class="">components.d.ts</code>\uFF0C\u8BF7\u4FDD\u7559\u8BE5\u6587\u4EF6\u5E76\u5728 <code class="">tsconfig.json</code> \u4E2D\u5C06\u5B83\u6DFB\u52A0\u81F3 <code class="">include</code> \u5B57\u6BB5\u4E2D\u3002</p><pre><code class="language-js">{
  <span class="hljs-string">&quot;include&quot;</span>: [
    <span class="hljs-string">&quot;src/**/*.ts&quot;</span>,
    <span class="hljs-string">&quot;src/**/*.tsx&quot;</span>,
    <span class="hljs-string">&quot;src/**/*.vue&quot;</span>,
    <span class="hljs-string">&quot;components.d.ts&quot;</span>
  ],
}
</code></pre>`,45),e=[t],h={},j="",i=u({__name:"quickstart",setup(c,{expose:s}){return s({frontmatter:{},excerpt:void 0}),(o,r)=>(a(),n("div",l,e))}});export{i as default,j as excerpt,h as frontmatter};
