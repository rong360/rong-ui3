import{d as l,o as i,c,a as t,b as e,u as s,X as n,g as a,e as u}from"./plugin-vueexport-helper.e98510c0.js";const r=`<template>
  <h2>\u57FA\u7840\u7528\u6CD5</h2>
  <r-divider />
</template>
`,h=`<template>
  <h2>\u5C55\u793A\u6587\u672C</h2>
  <r-divider>\u6587\u672C</r-divider>
</template>
`,p=`<template>
  <h2>\u5185\u5BB9\u4F4D\u7F6E</h2>
  <r-divider content-position="left">\u6587\u672C</r-divider>
  <r-divider content-position="right">\u6587\u672C</r-divider>
</template>
`,F=`<template>
  <h2>\u865A\u7EBF</h2>
  <r-divider dashed></r-divider>
</template>
`,_=`<template>
  <h2>\u975E\u7EC6\u7EBF</h2>
  <r-divider :hairline="false">\u6587\u672C</r-divider>
</template>
`,E=`<template>
  <h2>\u65E0\u4E0A\u4E0B\u8FB9\u8DDD</h2>
  <r-divider :margin="false">\u6587\u672C</r-divider>
</template>
`,v=`<template>
  <h2>\u81EA\u5B9A\u4E49\u6837\u5F0F</h2>
  <r-divider :style="{ color: 'green', borderColor: '#1989fa', padding: '0 16px' }"> \u6587\u5B57 </r-divider>
</template>
`,B=`<template>
  <h2>\u5782\u76F4\u5206\u5272\u7EBF</h2>
  <div :style="{ fontSize: '14px' }">
    \u6587\u672C
    <r-divider direction="vertical" />
    <a href="#" :style="{ color: '#1989fa' }">\u94FE\u63A5</a>
    <r-divider direction="vertical" />
    <a href="#" :style="{ color: '#1989fa' }">\u94FE\u63A5</a>
  </div>
</template>
`,D={class:"markdown-body"},m=n(`<h1>Divider \u5206\u5272\u7EBF</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5C06\u5185\u5BB9\u5206\u9694\u4E3A\u591A\u4E2A\u533A\u57DF\u3002</p></div><div class="card"><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Divider</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Divider</span>);
</code></pre></div>`,3),C={class:"card"},A=t("h3",null,"\u57FA\u7840\u7528\u6CD5",-1),f=t("p",null,"\u9ED8\u8BA4\u6E32\u67D3\u4E00\u6761\u6C34\u5E73\u5206\u5272\u7EBF\u3002",-1),b={class:"card"},g=t("h3",null,"\u5C55\u793A\u6587\u672C",-1),y=t("p",null,"\u901A\u8FC7\u63D2\u69FD\u53EF\u4EE5\u5728\u5206\u5272\u7EBF\u4E2D\u95F4\u63D2\u5165\u5185\u5BB9\u3002",-1),x={class:"card"},j=t("h3",null,"\u5185\u5BB9\u4F4D\u7F6E",-1),k=t("p",null,[u("\u901A\u8FC7 "),t("code",{class:""},"content-position"),u(" \u6307\u5B9A\u5185\u5BB9\u6240\u5728\u4F4D\u7F6E\u3002")],-1),w={class:"card"},N=t("h3",null,"\u865A\u7EBF",-1),z=t("p",null,[u("\u6DFB\u52A0 "),t("code",{class:""},"dashed"),u(" \u5C5E\u6027\u4F7F\u5206\u5272\u7EBF\u6E32\u67D3\u4E3A\u865A\u7EBF\u3002")],-1),S={class:"card"},V=t("h3",null,"\u975E\u7EC6\u7EBF",-1),P=t("p",null,[u("\u6DFB\u52A0 "),t("code",{class:""},"hairline"),u(" \u5C5E\u6027\u4F7F\u5206\u5272\u7EBF\u6E32\u67D3\u4E3A\u975E\u7F29\u653E\u7684\u7EBF\u3002")],-1),M={class:"card"},T=t("h3",null,"\u65E0\u8FB9\u8DDD",-1),H=t("p",null,[u("\u6DFB\u52A0 "),t("code",{class:""},"margin"),u(" \u5C5E\u6027\u4F7F\u5206\u5272\u7EBF\u6E32\u67D3\u65E0margin\u8FB9\u8DDD\u3002")],-1),I={class:"card"},R=t("h3",null,"\u81EA\u5B9A\u4E49\u6837\u5F0F",-1),X=t("p",null,[u("\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 "),t("code",{class:""},"style"),u(" \u5C5E\u6027\u8BBE\u7F6E\u5206\u5272\u7EBF\u7684\u6837\u5F0F\u3002")],-1),q={class:"card"},G=t("h3",null,"\u5782\u76F4\u5206\u5272\u7EBF",-1),J=t("p",null,[u("\u6DFB\u52A0 "),t("code",{class:""},"direction"),u(" \u5C5E\u6027\u4F7F\u5206\u5272\u7EBF\u6C34\u5E73\u6216\u8005\u5782\u76F4\u5C55\u793A\u3002")],-1),K=n('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>dashed</td><td>\u662F\u5426\u4F7F\u7528\u865A\u7EBF</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>hairline</td><td>\u662F\u5426\u4F7F\u7528 <code class="">0.5px</code> \u7EBF</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>content-position</td><td>\u5185\u5BB9\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A <code class="">left</code>\u3001<code class="">right</code></td><td>string</td><td><code class="">center</code></td></tr><tr><td>direction</td><td>\u6C34\u5E73\u8FD8\u662F\u5782\u76F4\u7C7B\u578B</td><td>string</td><td><code class="">horizontal</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u5185\u5BB9</td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>--r-divider-text-font-size</td><td>14px</td></tr><tr><td>--r-divider-text-color</td><td>#707070</td></tr><tr><td>--r-divider-horizontal-margin</td><td>16px 0</td></tr><tr><td>--r-divider-vertical-margin</td><td>0 8px</td></tr><tr><td>--r-divider-content-padding</td><td>16px</td></tr></tbody></table></div>',4),W={},Y="",Z=l({__name:"README",setup(L,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(O,Q)=>{const d=a("hljs-block");return i(),c("div",D,[m,t("div",C,[A,f,t("p",null,[e(d,{code:s(r)},null,8,["code"])])]),t("div",b,[g,y,t("p",null,[e(d,{code:s(h)},null,8,["code"])])]),t("div",x,[j,k,t("p",null,[e(d,{code:s(p)},null,8,["code"])])]),t("div",w,[N,z,t("p",null,[e(d,{code:s(F)},null,8,["code"])])]),t("div",S,[V,P,t("p",null,[e(d,{code:s(_)},null,8,["code"])])]),t("div",M,[T,H,t("p",null,[e(d,{code:s(E)},null,8,["code"])])]),t("div",I,[R,X,t("p",null,[e(d,{code:s(v)},null,8,["code"])])]),t("div",q,[G,J,t("p",null,[e(d,{code:s(B)},null,8,["code"])])]),K])}}});export{Z as default,Y as excerpt,W as frontmatter};
