import{d as a,o as u,c as o,a as e,b as n,u as c,W as l,g as d,e as t}from"./_plugin-vue_export-helper.cbc82318.js";const r=`<template>
  <h2>Icon \u540D\u79F0</h2>
  <ul class="icons">
    <li><r-icon name="close" /><div class="text">close</div></li>
    <li><r-icon name="close-circle" /><div class="text">close-circle</div></li>
    <li><r-icon name="close-mask" /><div class="text">close-mask</div></li>
    <li><r-icon name="loading" /><div class="text">loading</div></li>
    <li><r-icon name="arrow-up" /><div class="text">arrow-up</div></li>
    <li><r-icon name="arrow-down" /><div class="text">arrow-down</div></li>
    <li><r-icon name="arrow-left" /><div class="text">arrow-left</div></li>
    <li><r-icon name="arrow-right" /><div class="text">arrow-right</div></li>
    <li><r-icon name="question-circle" /><div class="text">question-circle</div></li>
    <li><r-icon name="check-circle" /><div class="text">check-circle</div></li>
    <li><r-icon name="check-active-circle" /><div class="text">check-active-circle</div></li>
    <li><r-icon name="check-disabled-circle" /><div class="text">check-disabled-circle</div></li>
    <li><r-icon name="check-square" /><div class="text">check-square</div></li>
    <li><r-icon name="check-active-square" /><div class="text">check-active-square</div></li>
    <li><r-icon name="radio-circle" /><div class="text">radio-circle</div></li>
    <li><r-icon name="radio-active-circle" /><div class="text">radio-active-circle</div></li>
    <li><r-icon name="success" /><div class="text">success</div></li>
    <li><r-icon name="fail" /><div class="text">fail</div></li>
  </ul>
</template>

<style lang="less" scoped>
.icons {
  display: flex;
  flex-wrap: wrap;
  li {
    flex-basis: 25%;
    text-align: center;
    box-sizing: border-box;
    padding: 10px 0;
    .text {
      font-size: 12px;
    }
  }
}
</style>
`,h=`<template>
  <h2>Icon \u5927\u5C0F \u548C \u989C\u8272</h2>
  <ul class="icons">
    <li><r-icon name="close" size="24px" /><div class="text">close</div></li>
    <li><r-icon name="close-circle" style="font-size: 24px" /><div class="text">close-circle</div></li>
    <li><r-icon name="arrow-up" color="lightseagreen" /><div class="text">arrow-up</div></li>
    <li><r-icon name="arrow-down" style="color: lightseagreen" /><div class="text">arrow-down</div></li>
  </ul>
</template>

<style lang="less" scoped>
.icons {
  display: flex;
  flex-wrap: wrap;
  li {
    flex-basis: 25%;
    text-align: center;
    box-sizing: border-box;
    padding: 10px 0;
    .text {
      font-size: 12px;
    }
  }
}
</style>
`,p={class:"markdown-body"},F=l(`<h1>Icon \u56FE\u6807</h1><h3>\u4ECB\u7ECD</h3><p>\u57FA\u4E8Esvg\u7684\u56FE\u6807\u96C6\uFF0C\u53EF\u4EE5\u901A\u8FC7 Icon \u7EC4\u4EF6\u4F7F\u7528\uFF0C\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Icon</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Icon</span>);
</code></pre><h3>Icon \u540D\u79F0</h3><p>\u901A\u8FC7 <code class="">name</code> \u5C5E\u6027\u6765\u6307\u5B9A\u9700\u8981\u4F7F\u7528\u7684\u56FE\u6807\uFF0Crong-ui3 \u5185\u7F6E\u4E86\u4E00\u5957\u56FE\u6807\u5E93\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F20\u5165\u5BF9\u5E94\u7684\u540D\u79F0\u6765\u4F7F\u7528</p>`,7),v=e("h3",null,"Icon \u5927\u5C0F \u548C \u989C\u8272",-1),E=e("p",null,[t("\u53EF\u4EE5\u901A\u8FC7 "),e("code",{class:""},"size"),t(" \u548C "),e("code",{class:""},"color"),t(" \u5C5E\u6027\u8BBE\u7F6E\u5927\u5C0F\u548C\u989C\u8272\u3002\u4E5F\u53EF\u4EE5\u76F4\u63A5\u7528style\u6837\u5F0F "),e("code",{class:""},"font-size"),t(),e("code",{class:""},"color"),t("\u8BBE\u7F6E\u5927\u5C0F\u548C\u989C\u8272\u3002")],-1),m=l('<h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u56FE\u6807\u540D\u79F0</td><td>string</td><td><code class="">close</code></td></tr><tr><td>color</td><td>\u56FE\u6807\u989C\u8272</td><td>string</td><td>-</td></tr><tr><td>size</td><td>\u56FE\u6807\u5927\u5C0F\uFF0C\u5982 <code class="">20px</code> <code class="">2em</code> <code class="">2rem</code></td><td>string | number</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB\u56FE\u6807\u65F6\u89E6\u53D1</td><td>event: Event</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u5185\u5BB9</td></tr></tbody></table><h3>\u6837\u5F0F\u53D8\u91CF</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>--loading-spin-animation</td><td>loadingCircle 1s infinite linear</td></tr></tbody></table>',9),f={},w="",_=a({__name:"README",setup(x,{expose:i}){return i({frontmatter:{},excerpt:void 0}),(C,b)=>{const s=d("hljs-block");return u(),o("div",p,[F,e("p",null,[n(s,{code:c(r)},null,8,["code"])]),v,E,e("p",null,[n(s,{code:c(h)},null,8,["code"])]),m])}}});export{_ as default,w as excerpt,f as frontmatter};
