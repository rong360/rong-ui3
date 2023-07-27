import{d as r,o as d,c as p,a as s,b as n,u as a,w as i,W as u,g as e,e as t}from"./plugin-vueexport-helper.js";const h=`<template>
  <r-cell-group title="\u51FD\u6570\u5F0F\u8C03\u7528" round>
    <r-cell title="\u57FA\u7840\u5F39\u7A97" is-link @click="clickBase" />
    <r-cell title="\u963B\u6B62cancel\u81EA\u52A8\u5173\u95ED" is-link @click="clickCancelButtonAutoClose" />
    <r-cell title="\u65E0\u6807\u9898\u5F39\u7A97" is-link @click="clickNoTitle" />
    <r-cell title="\u63D0\u793A\u5F39\u7A97" is-link @click="clickTips" />
    <r-cell title="\u8BBE\u7F6E\u906E\u7F69" is-link @click="clickTransparent" />
    <r-cell title="\u652F\u6301\u5BCC\u6587\u672C html" is-link @click="clickHtml" />
    <r-cell title="\u5F02\u6B65\u5173\u95ED" is-link @click="clickAsyncClose" />
    <r-cell title="\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE" is-link @click="clickCloseButton" />
    <r-cell title="\u5D4C\u5957\u6EDA\u52A8" is-link @click="clickScrollArea" />
    <r-cell title="\u6539\u53D8\u4F4D\u7F6E" is-link @click="clickPosition" />
    <r-cell title="\u81EA\u5B9A\u4E49slot\u5185\u5BB9" is-link @click="clickCustomSlot" />
  </r-cell-group>
</template>

<script lang="ts" setup>
import { createVNode } from 'vue';
import { showDialog } from '../../index';

// \u57FA\u7840\u5F39\u7A97
const clickBase = () => {
  showDialog({
    title: '\u57FA\u7840\u5F39\u7A97',
    message: createVNode('span', { style: { color: 'red' } }, '\u6211\u53EF\u4EE5\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6 vNode/.vue'),
    onConfirm() {
      this.remove();
    }
  });
};

// \u963B\u6B62cancel\u81EA\u52A8\u5173\u95ED
const clickCancelButtonAutoClose = () => {
  const dialog = showDialog({
    title: '\u963B\u6B62cancel\u81EA\u52A8\u5173\u95ED',
    message: 'cancelButtonAutoClose',
    closeOnClickCancelButton: false, // \u53EF\u53D6\u6D88\u9ED8\u8BA4\u5173\u95ED, \u5728onCancel\u91CC\u624B\u52A8\u5173\u95ED
    onCancel() {
      this.remove();
    },
    onConfirm() {
      dialog.remove();
    }
  });
};

// \u65E0\u6807\u9898\u5F39\u7A97
const clickNoTitle = () => {
  showDialog({
    message: '\u65E0\u6807\u9898\u5F39\u7A97'
  });
};

// \u63D0\u793A\u5F39\u7A97
const clickTips = () => {
  showDialog({
    title: '\u6E29\u99A8\u63D0\u793A',
    message: '\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002',
    showCancelButton: false,
    onConfirm() {
      this.remove();
    }
  });
};

// \u8BBE\u7F6E\u906E\u7F69
const clickTransparent = () => {
  showDialog({
    title: '\u8BBE\u7F6E\u906E\u7F69',
    message: 'this is a transparent dialog',
    overlayStyle: { background: 'rgba(0,0,0,0)' },
    overlayClass: 'custom-overlay',
    closeOnClickOverlay: true,
    onClickOverlay() {
      alert('click overlay');
    }
  });
};

// \u652F\u6301\u5BCC\u6587\u672C html
const clickHtml = () => {
  showDialog({
    title: '\u652F\u6301\u5BCC\u6587\u672C html',
    message: \`<p style='color:red'>\u5F20\u5C0F\u76D2</p><img width="100" src='https://img.zcool.cn/community/01f1af5542e7cf0000019ae97518ec.gif' />\`
  });
};

// \u5F02\u6B65\u5173\u95ED
const clickAsyncClose = () => {
  const dialog = showDialog({
    title: '\u5F02\u6B65\u5173\u95ED',
    message: \`\u70B9\u51FB\u786E\u8BA4\u540E\uFF0C1\u79D2\u540E\u5173\u95ED\`,
    onConfirm() {
      setTimeout(() => {
        dialog.remove();
      }, 1000);
    }
  });
};

// \u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE
const clickCloseButton = () => {
  showDialog({
    title: '\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE',
    showCloseIcon: true,
    closeIconPosition: 'top-right', // \u9ED8\u8BA4 top-right
    closeIcon: 'close', // \u9ED8\u8BA4 close
    message: '\u53F3\u4E0A\u89D2\u589E\u52A0 close button',
    onClickCloseIcon() {
      this.remove();
    }
  });
};

// \u5D4C\u5957\u6EDA\u52A8\u3002 \u5F39\u7A97\u9ED8\u8BA4\u9501\u5C4F\uFF0C\u6EDA\u52A8\u5143\u7D20\u9700\u8981\u6DFB\u52A0 class="scroll-area" \u6837\u5F0F\u3002
const clickScrollArea = () => {
  showDialog({
    title: '\u5D4C\u5957\u6EDA\u52A8',
    message: \`<div style="height: 100px; overflow-y: scroll" class="scroll-area">
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
      </div>\`
  });
};

// \u6539\u53D8\u4F4D\u7F6E
const clickPosition = () => {
  showDialog({
    title: '\u6539\u53D8\u4F4D\u7F6E',
    message: '\u901A\u8FC7position\u6539\u53D8\u5F39\u7A97\u663E\u793A\u4F4D\u7F6E',
    position: 'bottom'
  });
};

// \u81EA\u5B9A\u4E49slot\u5185\u5BB9
const clickCustomSlot = () => {
  showDialog(
    {
      closeOnClickOverlay: true,
      showCloseIcon: true
    },
    {
      default: () => '\u81EA\u5B9A\u4E49\u5185\u5BB9',
      header: () => createVNode('span', { style: { fontSize: '22px' } }, '\u81EA\u5B9A\u4E49\u6807\u9898'),
      footer: () => '\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\u533A\u57DF',
      'close-icon': () => createVNode('span', { style: { color: 'red' } }, 'close')
    }
  );
};
<\/script>
`,E=`<template>
  <r-cell-group title="\u7EC4\u4EF6\u5F0F\u4F7F\u7528" round>
    <r-cell title="\u57FA\u7840\u5F39\u6846" is-link @click="clickBase" />
    <r-dialog
      title="\u7EC4\u4EF6\u8C03\u7528"
      message="\u5982\u679C\u9700\u8981\u5728\u5F39\u7A97\u5185\u5D4C\u5165\u7EC4\u4EF6\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7EC4\u4EF6\u8C03\u7528\u7684\u65B9\u5F0F\u3002"
      v-model:show="showBase"
    >
    </r-dialog>

    <r-cell title="teleport \u4F7F\u7528" is-link @click="clickTeleport"></r-cell>
    <r-dialog
      title="teleport to body"
      message="\u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\u770B\u4E00\u4E0B Elements Tab"
      teleport="body"
      v-model:show="showTeleport"
    >
      <template #header>
        <div>this is header</div>
      </template>
    </r-dialog>
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
`,F={class:"markdown-body"},g=u(`<h1>Dialog \u5BF9\u8BDD\u6846</h1><h3>\u4ECB\u7ECD</h3><p>\u5F39\u51FA\u6A21\u6001\u6846\uFF0C\u5E38\u7528\u4E8E\u6D88\u606F\u63D0\u793A\u3001\u6D88\u606F\u786E\u8BA4\uFF0C\u6216\u5728\u5F53\u524D\u9875\u9762\u5185\u5B8C\u6210\u7279\u5B9A\u7684\u4EA4\u4E92\u64CD\u4F5C\u3002\u652F\u6301\u7EC4\u4EF6\u8C03\u7528\u548C\u51FD\u6570\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Dialog</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Dialog</span>);
</code></pre><h3>\u51FD\u6570\u8C03\u7528</h3><p>\u4E3A\u4E86\u4FBF\u4E8E\u4F7F\u7528 Dialog\uFF0C \u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u8F85\u52A9\u51FD\u6570\uFF0C\u901A\u8FC7\u8F85\u52A9\u51FD\u6570\u53EF\u4EE5\u5FEB\u901F\u5524\u8D77\u5168\u5C40\u7684\u5F39\u7A97\u7EC4\u4EF6\u3002</p><p>\u6BD4\u5982\u4F7F\u7528 showDialog \u51FD\u6570\uFF0C\u8C03\u7528\u540E\u4F1A\u76F4\u63A5\u5728\u9875\u9762\u4E2D\u6E32\u67D3\u5BF9\u5E94\u7684\u5F39\u51FA\u6846\u3002</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { showDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-title function_">showDialog</span>({ <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;\u63D0\u793A&#39;</span> });
</code></pre><p>\u4EE3\u7801\u6F14\u793A</p>`,10),m=u(`<h3>\u7EC4\u4EF6\u5F0F\u8C03\u7528</h3><p>\u5982\u679C\u9700\u8981\u5728 Dialog \u5185\u5D4C\u5165\u7EC4\u4EF6\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 Dialog \u7EC4\u4EF6\uFF0C\u5E76\u4F7F\u7528\u9ED8\u8BA4\u63D2\u69FD\u8FDB\u884C\u5B9A\u5236\u3002\u4F7F\u7528\u524D\u9700\u8981\u901A\u8FC7 app.use \u7B49\u65B9\u5F0F\u6CE8\u518C\u7EC4\u4EF6\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">r-dialog</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span> <span class="hljs-attr">message</span>=<span class="hljs-string">&quot;\u5185\u5BB9&quot;</span> <span class="hljs-attr">show-cancel-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">header</span>&gt;</span> \u6807\u9898 <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">r-dialog</span>&gt;</span>
</code></pre><p>\u4EE3\u7801\u6F14\u793A</p>`,4),A=s("h4",null,"\u7279\u522B\u63D0\u793A",-1),B=s("p",null,[t("\u5F39\u7A97\u9ED8\u8BA4\u9501\u5C4F\uFF0C\u6EDA\u52A8\u5143\u7D20\u9700\u8981\u6DFB\u52A0 "),s("code",{class:""},'class="scroll-area"'),t(" \u6837\u5F0F")],-1),D=s("pre",null,[s("code",{class:"language-html"},[t(`
`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"r-dialog"),t(),s("span",{class:"hljs-attr"},"v-model:show"),t("="),s("span",{class:"hljs-string"},'"showScrollArea"'),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"div"),t(),s("span",{class:"hljs-attr"},"style"),t("="),s("span",{class:"hljs-string"},'"height: 100px; overflow-y: scroll"'),t(),s("span",{class:"hljs-attr"},"class"),t("="),s("span",{class:"hljs-string"},'"scroll-area"'),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"p"),t(">")]),t("1"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"p"),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"p"),t(">")]),t("2"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"p"),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"p"),t(">")]),t("3"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"p"),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"p"),t(">")]),t("4"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"p"),t(">")]),t(`
      `),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"p"),t(">")]),t("5"),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"p"),t(">")]),t(`
    `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"div"),t(">")]),t(`
  `),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"r-dialog"),t(">")]),t(`
`),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"template"),t(">")]),t(`

`),s("span",{class:"hljs-tag"},[t("<"),s("span",{class:"hljs-name"},"script"),t(),s("span",{class:"hljs-attr"},"lang"),t("="),s("span",{class:"hljs-string"},'"ts"'),t(),s("span",{class:"hljs-attr"},"setup"),t(">")]),s("span",{class:"language-javascript"},[t(`
`),s("span",{class:"hljs-keyword"},"const"),t(" showScrollArea = "),s("span",{class:"hljs-title function_"},"ref"),t("("),s("span",{class:"hljs-literal"},"true"),t(`);
`)]),s("span",{class:"hljs-tag"},[t("</"),s("span",{class:"hljs-name"},"script"),t(">")]),t(`


`)])],-1),C=u('<h2>API</h2><blockquote><p>\u5F53\u524D\u7EC4\u4EF6\u5185\u90E8\u900F\u4F20\u4E86 <a href="#/zh-CN/component/popup">Popup\u7EC4\u4EF6</a> \u548C <a href="#/zh-CN/component/overlay">Overlay\u7EC4\u4EF6</a></p></blockquote><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td>String</td><td>-</td></tr><tr><td>message</td><td>\u5185\u5BB9\uFF0C\u652F\u6301HTML\u548C\u7EC4\u4EF6</td><td>String/VNode</td><td>-</td></tr><tr><td>show-confirm-button</td><td>\u662F\u5426\u663E\u793A\u786E\u5B9A\u6309\u94AE</td><td>Boolean</td><td>true</td></tr><tr><td>confirm-button-text</td><td>\u786E\u5B9A\u6309\u94AE\u6587\u6848</td><td>String/VNode</td><td>\u786E\u5B9A</td></tr><tr><td>confim-button-style</td><td>\u786E\u5B9A\u6309\u94AE\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr><tr><td>show-cancel-button</td><td>\u662F\u5426\u663E\u793A\u53D6\u6D88\u6309\u94AE</td><td>Boolean</td><td>true</td></tr><tr><td>cancel-button-text</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u6848</td><td>String/VNode</td><td>\u53D6\u6D88</td></tr><tr><td>cancel-button-style</td><td>\u53D6\u6D88\u6309\u94AE\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr><tr><td>close-on-click-cancel-button</td><td>\u53D6\u6D88\u6309\u94AE\u662F\u5426\u9ED8\u8BA4\u5173\u95ED\u5F39\u7A97</td><td>Boolean</td><td>true</td></tr><tr><td>show-close-button</td><td>\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE</td><td>Boolean</td><td>true</td></tr><tr><td>close-on-click-close-button</td><td>\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE\u662F\u5426\u9ED8\u8BA4\u5173\u95ED\u5F39\u7A97</td><td>Boolean</td><td>true</td></tr><tr><td>teleport</td><td>\u6307\u5B9A\u6302\u8F7D\u8282\u70B9</td><td>String</td><td>body</td></tr><tr><td>round</td><td>\u5706\u89D2\u5F39\u7A97</td><td>Boolean</td><td>true</td></tr><tr><td>close-on-click-overlay</td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u9ED8\u8BA4\u5173\u95ED\u5F39\u7A97</td><td>Boolean</td><td>false</td></tr><tr><td>overlay-class</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u7C7B\u540D</td><td>String</td><td>-</td></tr><tr><td>overlay-style</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr><tr><td>pop-class</td><td>\u81EA\u5B9A\u4E49popup\u5F39\u7A97\u7C7B\u540D</td><td>String</td><td>-</td></tr><tr><td>pop-style</td><td>\u81EA\u5B9A\u4E49popup\u5F39\u7A97\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>header</td><td>\u81EA\u5B9A\u4E49\u6807\u9898\u533A\u57DF</td></tr><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5BB9</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u5E95\u90E8\u6309\u94AE\u533A\u57DF</td></tr><tr><td>close-icon</td><td>\u81EA\u5B9A\u4E49close\u6309\u94AE</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>confirm</td><td>\u786E\u5B9A\u6309\u94AE\u56DE\u8C03</td><td>Function</td><td>-</td></tr><tr><td>cancel</td><td>\u53D6\u6D88\u6309\u94AE\u56DE\u8C03</td><td>Function</td><td>-</td></tr><tr><td>clickOverlay</td><td>\u70B9\u51FB\u906E\u7F69\u56DE\u8C03</td><td>Function</td><td>-</td></tr><tr><td>close</td><td>\u70B9\u51FB\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE\u56DE\u8C03</td><td>Function</td><td>-</td></tr></tbody></table>',8),v={},y="",b=r({__name:"README",setup(j,{expose:o}){return o({frontmatter:{},excerpt:void 0}),(k,w)=>{const l=e("hljs-block"),c=e("demo-block");return d(),p("div",F,[g,s("p",null,[n(l,{code:a(h)},null,8,["code"])]),m,s("p",null,[n(l,{code:a(E)},null,8,["code"])]),A,B,n(c,{"data-value":`
<template>
  <r-dialog v-model:show="showScrollArea">
    <div style="height: 100px; overflow-y: scroll" class="scroll-area">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
    </div>
  </r-dialog>
</template>

<script lang="ts" setup>
const showScrollArea = ref(true);
<\/script>


`},{default:i(()=>[t("\u5D4C\u5957\u6EDA\u52A8 "),D]),_:1}),C])}}});export{b as default,y as excerpt,v as frontmatter};
