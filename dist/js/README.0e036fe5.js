import{d as c,o as d,c as p,a as u,b as o,u as e,$ as s,g as r,e as n}from"./format.990ee458.js";const i=`<template>
  <h2>\u57FA\u7840\u7528\u6CD5</h2>
  <r-cell title="\u5C55\u793A\u5F39\u51FA\u5C42" is-link @click="clickBase" :border="false" />
  <r-popup :popup-style="{ padding: '30px 50px' }" :close-on-click-overlay="true" v-model:show="show">\u5185\u5BB9</r-popup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const show = ref(false);
const clickBase = () => {
  show.value = true;
};
<\/script>
`,a=`<template>
  <r-cell-group title="\u5F39\u51FA\u4F4D\u7F6E" round>
    <r-cell title="\u9876\u90E8\u5F39\u51FA" is-link @click="clickTop" />
    <r-popup
      v-model:show="showTop"
      position="top"
      :round="false"
      :close-on-click-overlay="true"
      :popup-style="{ height: '30%' }"
    ></r-popup>

    <r-cell title="\u5E95\u90E8\u5F39\u51FA" is-link @click="clickBottom" />
    <r-popup
      v-model:show="showBottom"
      position="bottom"
      :round="false"
      :close-on-click-overlay="true"
      :popup-style="{ height: '30%' }"
    ></r-popup>

    <r-cell title="\u5DE6\u4FA7\u5F39\u51FA" is-link @click="clickLeft" />
    <r-popup
      v-model:show="showLeft"
      position="left"
      :round="false"
      :close-on-click-overlay="true"
      :popup-style="{ width: '30%', height: '100%' }"
    ></r-popup>

    <r-cell title="\u53F3\u4FA7\u5F39\u51FA" is-link @click="clickRight" />
    <r-popup
      v-model:show="showRight"
      position="right"
      :round="false"
      :close-on-click-overlay="true"
      :popup-style="{ width: '30%', height: '100%' }"
    ></r-popup>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// \u9876\u90E8\u5F39\u51FA
const showTop = ref(false);
const clickTop = () => {
  showTop.value = true;
};

// \u5E95\u90E8\u5F39\u51FA
const showBottom = ref(false);
const clickBottom = () => {
  showBottom.value = true;
};

// \u5DE6\u4FA7\u5F39\u51FA
const showLeft = ref(false);
const clickLeft = () => {
  showLeft.value = true;
};

// \u53F3\u4FA7\u5F39\u51FA
const showRight = ref(false);
const clickRight = () => {
  showRight.value = true;
};
<\/script>
`,F=`<template>
  <h2>\u5185\u5BB9\u6EDA\u52A8</h2>
  <r-cell title="\u5185\u5BB9\u6EDA\u52A8" is-link @click="show = true" :border="false" />
  <r-popup :close-on-click-overlay="true" v-model:show="show">
    <div style="height: 100px; width: 100px; overflow-y: scroll" class="scroll-area">
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
    </div>
  </r-popup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const show = ref(false);
<\/script>
`,E=`<template>
  <r-cell-group title="\u5173\u95ED\u56FE\u6807" round>
    <r-cell title="\u5173\u95ED\u56FE\u6807" is-link @click="showIcon = true" />
    <r-popup
      v-model:show="showIcon"
      position="bottom"
      :show-close-icon="true"
      :round="false"
      :popup-style="{ height: '30%' }"
    ></r-popup>

    <r-cell title="\u56FE\u6807\u4F4D\u7F6E" is-link @click="showIconPosition = true" />
    <r-popup
      v-model:show="showIconPosition"
      position="bottom"
      close-icon-position="top-left"
      :show-close-icon="true"
      :round="false"
      :popup-style="{ height: '30%' }"
    ></r-popup>

    <r-cell title="\u81EA\u5B9A\u4E49\u56FE\u6807" is-link @click="showIconCustom = true" />
    <r-popup
      v-model:show="showIconCustom"
      position="bottom"
      close-icon="loading"
      :show-close-icon="true"
      :round="false"
      :popup-style="{ height: '30%' }"
    >
      <!-- <template #close-icon> close </template> -->
    </r-popup>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showIcon = ref(false);
const showIconPosition = ref(false);
const showIconCustom = ref(false);
<\/script>
`,h=`<template>
  <r-cell-group title="\u5706\u89D2\u5F39\u7A97" round>
    <r-cell title="\u5706\u89D2\u5F39\u7A97\uFF08\u5C45\u4E2D\uFF09" is-link @click="showCenter = true" />
    <r-popup
      v-model:show="showCenter"
      :round="true"
      :popup-style="{ padding: '50px 50px' }"
      :close-on-click-overlay="true"
      >\u5185\u5BB9</r-popup
    >

    <r-cell title="\u5706\u89D2\u5F39\u7A97\uFF08\u5E95\u90E8\uFF09" is-link @click="showIconBottom = true" />
    <r-popup
      v-model:show="showIconBottom"
      position="bottom"
      :round="true"
      :popup-style="{ height: '30%' }"
      :close-on-click-overlay="true"
    ></r-popup>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const showCenter = ref(false);
const showIconBottom = ref(false);
<\/script>
`,A=`<template>
  <r-cell-group title="\u4E8B\u4EF6\u76D1\u542C" round>
    <r-cell title="\u76D1\u542C\u70B9\u51FB\u4E8B\u4EF6" is-link @click="showClickEvent = true" />
    <r-popup
      v-model:show="showClickEvent"
      position="bottom"
      :popup-style="{ height: '30%' }"
      :close-on-click-overlay="true"
      :show-close-icon="true"
      @click-popup="clickPopup"
      @click-overlay="clickOverlay"
      @click-close-icon="clickCloseIcon"
    ></r-popup>

    <r-cell title="\u76D1\u542C\u663E\u793A\u4E8B\u4EF6" is-link @click="showDisplayEvent = true" />
    <r-popup
      v-model:show="showDisplayEvent"
      position="bottom"
      :popup-style="{ height: '30%' }"
      :close-on-click-overlay="true"
      @open="open"
      @opened="opened"
      @close="close"
      @closed="closed"
    ></r-popup>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// \u76D1\u542C\u70B9\u51FB\u4E8B\u4EF6
const showClickEvent = ref(false);
const clickPopup = () => console.log('click popup');
const clickOverlay = () => console.log('click overlay');
const clickCloseIcon = () => console.log('click close icon');

// \u76D1\u542C\u663E\u793A\u4E8B\u4EF6
const showDisplayEvent = ref(false);
const open = () => console.log('open');
const opened = () => console.log('opened');
const close = () => console.log('close');
const closed = () => console.log('closed');
<\/script>
`,B=`<template>
  <h2>\u6307\u5B9A\u6302\u8F7D\u8282\u70B9</h2>
  <r-cell title="\u6307\u5B9A\u6302\u8F7D\u8282\u70B9" is-link :border="false" />
  <r-popup :popup-style="{ padding: '30px 50px' }" :close-on-click-overlay="true" teleport="body" v-model:show="show"
    >\u5185\u5BB9 teleport</r-popup
  >
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const show = ref(false);
<\/script>
`,D={class:"markdown-body"},C=s(`<h1>Popup \u5F39\u51FA\u5C42</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u5F39\u51FA\u5C42\u5BB9\u5668\uFF0C\u7528\u4E8E\u5C55\u793A\u5F39\u7A97\u3001\u4FE1\u606F\u63D0\u793A\u7B49\u5185\u5BB9\uFF0C\u652F\u6301\u591A\u4E2A\u5F39\u51FA\u5C42\u53E0\u52A0\u5C55\u793A</p></div><div class="card"><h3>\u5B89\u88C5</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Popup</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">Popup</span>)
</code></pre></div>`,3),v={class:"card"},m=u("h3",null,"\u57FA\u7840\u7528\u6CD5",-1),f=u("p",null,"\u901A\u8FC7 v-model:show \u63A7\u5236\u5F39\u51FA\u5C42\u662F\u5426\u5C55\u793A\u3002",-1),k={class:"card"},w=s('<h3>\u5F39\u51FA\u4F4D\u7F6E</h3><p>\u901A\u8FC7 <code class="">position</code> \u5C5E\u6027\u8BBE\u7F6E\u5F39\u7A97\u7684\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u9ED8\u8BA4\u4E3A\u5C45\u4E2D\u5F39\u51FA\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A <code class="">top</code>\u3001<code class="">bottom</code>\u3001<code class="">left</code>\u3001<code class="">right</code>\u3002</p><ul><li>\u5F53\u5F39\u7A97\u4ECE\u9876\u90E8\u6216\u5E95\u90E8\u5F39\u51FA\u65F6\uFF0C\u9ED8\u8BA4\u5BBD\u5EA6\u4E0E\u5C4F\u5E55\u5BBD\u5EA6\u4FDD\u6301\u4E00\u81F4\uFF0C\u5F39\u7A97\u9AD8\u5EA6\u53D6\u51B3\u4E8E\u5185\u5BB9\u7684\u9AD8\u5EA6</li><li>\u5F53\u5F39\u7A97\u4ECE\u5DE6\u4FA7\u6216\u53F3\u4FA7\u5F39\u51FA\u65F6\uFF0C\u9ED8\u8BA4\u4E0D\u8BBE\u7F6E\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u5F39\u7A97\u7684\u5BBD\u9AD8\u53D6\u51B3\u4E8E\u5185\u5BB9\u7684\u5BBD\u9AD8\u3002</li></ul>',3),g={class:"card"},y=u("h3",null,"\u5185\u5BB9\u6EDA\u52A8",-1),_=u("p",null,'\u7279\u522B\u63D0\u793A\uFF1A\u9ED8\u8BA4\u9501\u5C4F\uFF0C\u6EDA\u52A8\u5143\u7D20\u9700\u8981\u6DFB\u52A0 class="scroll-area" \u6837\u5F0F',-1),b={class:"card"},P=u("h3",null,"\u5173\u95ED\u56FE\u6807",-1),x=u("p",null,[n("\u8BBE\u7F6E "),u("code",{class:""},"show-close-icon"),n(" \u5C5E\u6027\u540E\uFF0C\u4F1A\u5728\u5F39\u51FA\u5C42\u7684\u53F3\u4E0A\u89D2\u663E\u793A\u5173\u95ED\u56FE\u6807\uFF0C\u901A\u8FC7"),u("code",{class:""},"close-icon-position"),n(" \u6765\u8BBE\u7F6E\u56FE\u6807\u7684\u4F4D\u7F6E\u3002\u53EF\u4EE5\u901A\u8FC7 close-icon \u5C5E\u6027\u81EA\u5B9A\u4E49\u56FE\u6807\uFF08\u7B49\u540C\u4E8E Icon \u7EC4\u4EF6\u7684 name \u5C5E\u6027\uFF09")],-1),I={class:"card"},j=u("h3",null,"\u5706\u89D2\u5F39\u7A97",-1),R=u("p",null,[n("\u8BBE\u7F6E "),u("code",{class:""},"round"),n(" \u5C5E\u6027\u540E\uFF0C\u5F39\u7A97\u4F1A\u6839\u636E\u5F39\u51FA\u4F4D\u7F6E\u6DFB\u52A0\u4E0D\u540C\u7684\u5706\u89D2\u6837\u5F0F\u3002")],-1),T={class:"card"},L=s("<h3>\u76D1\u542C\u70B9\u51FB\u4E8B\u4EF6 \u548C \u76D1\u542C\u663E\u793A\u4E8B\u4EF6</h3><p>Popup \u652F\u6301\u4EE5\u4E0B\u70B9\u51FB\u4E8B\u4EF6</p><ul><li>click-popup: \u70B9\u51FB\u5F39\u51FA\u5C42\u65F6\u89E6\u53D1\u3002</li><li>click-overlay: \u70B9\u51FB\u906E\u7F69\u5C42\u65F6\u89E6\u53D1\u3002</li><li>click-close-icon: \u70B9\u51FB\u5173\u95ED\u56FE\u6807\u65F6\u89E6\u53D1\u3002</li></ul><br><p>\u5F53 Popup \u88AB\u6253\u5F00\u6216\u5173\u95ED\u65F6\uFF0C\u4F1A\u89E6\u53D1\u4EE5\u4E0B\u4E8B\u4EF6\uFF1A</p><ul><li>open: \u6253\u5F00\u5F39\u51FA\u5C42\u65F6\u7ACB\u5373\u89E6\u53D1\u3002</li><li>opened: \u6253\u5F00\u5F39\u51FA\u5C42\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1\u3002</li><li>close: \u5173\u95ED\u5F39\u51FA\u5C42\u65F6\u7ACB\u5373\u89E6\u53D1\u3002</li><li>closed: \u5173\u95ED\u5F39\u51FA\u5C42\u4E14\u52A8\u753B\u7ED3\u675F\u540E\u89E6\u53D1\u3002</li></ul>",6),N={class:"card"},z=u("h3",null,"\u6307\u5B9A\u6302\u8F7D\u4F4D\u7F6E",-1),M=u("p",null,[n("\u5F39\u51FA\u5C42\u9ED8\u8BA4\u6302\u8F7D\u5230\u7EC4\u4EF6\u6807\u7B7E\u6240\u5728\u4F4D\u7F6E\uFF0C\u53EF\u4EE5\u901A\u8FC7 "),u("code",{class:""},"teleport"),n(" \u5C5E\u6027\u6307\u5B9A\u6302\u8F7D\u4F4D\u7F6E\u3002")],-1),S=s('<h2>API</h2><div class="card"><blockquote><p>\u5F53\u524D\u7EC4\u4EF6\u5185\u90E8\u900F\u4F20\u4E86 <a href="#/zh-CN/component/icon">Icon\u7EC4\u4EF6</a> \u548C <a href="#/zh-CN/component/overlay">Overlay\u7EC4\u4EF6</a></p></blockquote><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model:show</td><td>\u63A7\u5236\u5F53\u524D\u7EC4\u4EF6\u663E\u793A/\u9690\u85CF</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>z-index</td><td>\u906E\u7F69\u5C42\u7EA7</td><td>number</td><td><code class="">1000</code></td></tr><tr><td>duration</td><td>\u7EC4\u4EF6\u663E\u793A/\u9690\u85CF\u7684\u52A8\u753B\u65F6\u957F\uFF0C\u5355\u4F4D\u79D2</td><td>number</td><td><code class="">0.3</code></td></tr><tr><td>overlay</td><td>\u662F\u5426\u663E\u793A\u906E\u7F69</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>overlay-class</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u7C7B\u540D</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>overlay-style</td><td>\u81EA\u5B9A\u4E49\u906E\u7F69\u5C42\u6837\u5F0F</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>overlay-transition-name</td><td>\u52A8\u753B\u540D</td><td>string</td><td>-</td></tr><tr><td>close-on-click-overlay</td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5173\u95ED</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>position</td><td>\u5F39\u51FA\u4F4D\u7F6E\uFF08top,bottom,left,right,center\uFF09</td><td>string</td><td><code class="">center</code></td></tr><tr><td>popup-style</td><td>\u81EA\u5B9A\u4E49\u5F39\u6846\u6837\u5F0F</td><td>CSSProperties</td><td>-</td></tr><tr><td>pop-class</td><td>\u81EA\u5B9A\u4E49\u5F39\u6846\u7C7B\u540D</td><td>string</td><td>-</td></tr><tr><td>popup-transition-name</td><td>\u52A8\u753B\u540D</td><td>string</td><td>-</td></tr><tr><td>show-close-icon</td><td>\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>close-icon-position</td><td>\u5173\u95ED\u6309\u94AE\u4F4D\u7F6E\uFF08top-left,top-right,bottom-left,bottom-right\uFF09</td><td>string</td><td><code class="">top-right</code></td></tr><tr><td>close-icon-class</td><td>\u81EA\u5B9A\u4E49\u5173\u95ED\u6309\u94AE\u7C7B\u540D</td><td>string</td><td>&#39;&#39;</td></tr><tr><td>close-on-click-close-icon</td><td>\u662F\u5426\u70B9\u51FB\u5173\u95ED\u6309\u94AE\u5173\u95ED\u5F39\u7A97</td><td>boolean</td><td><code class="">true</code></td></tr><tr><td>round</td><td>\u662F\u5426\u663E\u793A\u5706\u89D2</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>teleport</td><td>\u6307\u5B9A\u6302\u8F7D\u8282\u70B9</td><td>string</td><td><code class="">body</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u5185\u5D4C\u5185\u5BB9</td></tr><tr><td>close-icon</td><td>\u5173\u95ED\u6309\u94AE\u7684\u81EA\u5B9A\u4E49\u56FE\u6807</td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click-overlay</td><td>\u70B9\u51FB\u906E\u7F69\u89E6\u53D1</td><td><code class="">event: MouseEvent</code></td></tr><tr><td>click-close-icon</td><td>\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u65F6\u89E6\u53D1</td><td><code class="">event: MouseEvent</code></td></tr><tr><td>open</td><td>\u6253\u5F00\u5F39\u6846\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>close</td><td>\u5173\u95ED\u5F39\u6846\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>opend</td><td>\u906E\u7F69\u6253\u5F00\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code class="">event: MouseEvent</code></td></tr><tr><td>closed</td><td>\u906E\u7F69\u5173\u95ED\u52A8\u753B\u7ED3\u675F\u65F6\u89E6\u53D1</td><td><code class="">event: MouseEvent</code></td></tr></tbody></table></div><div class="card"><h3>\u6837\u5F0F\u53D8\u91CF</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>--r-popup-background-color</td><td>#fff</td></tr><tr><td>--r-popup-border-radius</td><td>16px</td></tr><tr><td>--r-popup-close-icon-z-index</td><td>1</td></tr><tr><td>--r-popup-close-icon-color</td><td>#969799</td></tr><tr><td>--r-popup-close-icon-font-size</td><td>16px</td></tr><tr><td>--r-popup-close-icon-margin</td><td>12px</td></tr></tbody></table></div>',5),G={},H="",J=c({__name:"README",setup(V,{expose:l}){return l({frontmatter:{},excerpt:void 0}),(O,q)=>{const t=r("hljs-block");return d(),p("div",D,[C,u("div",v,[m,f,u("p",null,[o(t,{code:e(i)},null,8,["code"])])]),u("div",k,[w,u("p",null,[o(t,{code:e(a)},null,8,["code"])])]),u("div",g,[y,_,u("p",null,[o(t,{code:e(F)},null,8,["code"])])]),u("div",b,[P,x,u("p",null,[o(t,{code:e(E)},null,8,["code"])])]),u("div",I,[j,R,u("p",null,[o(t,{code:e(h)},null,8,["code"])])]),u("div",T,[L,u("p",null,[o(t,{code:e(A)},null,8,["code"])])]),u("div",N,[z,M,u("p",null,[o(t,{code:e(B)},null,8,["code"])])]),S])}}});export{J as default,H as excerpt,G as frontmatter};
