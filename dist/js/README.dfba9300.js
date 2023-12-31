import{d as s,o as p,c as e,a as n,b as c,u as r,$ as o,g as a}from"./format.990ee458.js";const u=`<template>
  <r-flex-fixed @scroll="scroll" @scroll-debounce="scrollDebounce">
    <template #header>
      <nav-bar>
        FlexFixed
        <template #bottom>
          <div class="tips">
            <div class="col">
              <h3>@scroll</h3>
              <p>scrollTop: {{ scrollInfo.scrollTop }}</p>
              <p>maxScrollTop: {{ scrollInfo.maxScrollTop }}</p>
              <p>direction: {{ scrollInfo.direction }}</p>
              <p>status: {{ scrollInfo.status }}</p>
            </div>
            <div class="col">
              <h3>@scroll-debounce</h3>
              <p>scrollTop: {{ scrollDebounceInfo.scrollTop }}</p>
              <p>maxScrollTop: {{ scrollDebounceInfo.maxScrollTop }}</p>
              <p>direction: {{ scrollDebounceInfo.direction }}</p>
              <p>status: {{ scrollDebounceInfo.status }}</p>
            </div>
          </div>
        </template>
      </nav-bar>
    </template>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
    <p>7</p>
    <p>8</p>
    <p>9</p>
    <p>10</p>
    <p>11</p>
    <p>12</p>
    <p>13</p>
    <p>14</p>
    <p>15</p>
    <p>16</p>
    <p>17</p>
    <p>18</p>
    <p>19</p>
    <p>20</p>
    <p>21</p>
    <p>22</p>
    <p>23</p>
    <p>24</p>
    <p>25</p>
    <p>26</p>
    <p>27</p>
    <p>28</p>
    <p>29</p>
    <p>30</p>
    <p>31</p>
    <p>32</p>
    <p>33</p>
    <p>34</p>
    <p>35</p>
    <p>36</p>
    <p>37</p>
    <p>38</p>
    <template #footer>
      <r-button type="primary" block shape="square">\u63D0\u4EA4</r-button>
    </template>
  </r-flex-fixed>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const scrollInfo = reactive({
  scrollTop: 0,
  maxScrollTop: 0,
  direction: '',
  status: ''
});
const scroll = ({ scrollTop, maxScrollTop, direction }: any) => {
  scrollInfo.status = '\u6EDA\u52A8\u4E2D...';
  if (maxScrollTop - scrollTop < 10) {
    scrollInfo.status = '\u6EDA\u52A8\u5E95\u5566~';
  } else if (scrollTop <= 0) {
    scrollInfo.status = '\u6EDA\u52A8\u9876\u5566~';
  }
  scrollInfo.scrollTop = scrollTop;
  scrollInfo.maxScrollTop = maxScrollTop;
  scrollInfo.direction = direction;
};

const scrollDebounceInfo = reactive({
  scrollTop: 0,
  maxScrollTop: 0,
  direction: '',
  status: ''
});
const scrollDebounce = ({ scrollTop, maxScrollTop, direction }: any) => {
  scrollDebounceInfo.status = '\u6EDA\u52A8\u4E2D...';
  if (maxScrollTop - scrollTop < 10) {
    scrollDebounceInfo.status = '\u6EDA\u52A8\u5E95\u5566~';
  } else if (scrollTop <= 0) {
    scrollDebounceInfo.status = '\u6EDA\u52A8\u9876\u5566~';
  }
  scrollDebounceInfo.scrollTop = scrollTop;
  scrollDebounceInfo.maxScrollTop = maxScrollTop;
  scrollDebounceInfo.direction = direction;
};
<\/script>

<style lang="less" scoped>
.tips {
  padding: 5px 15px;
  font-size: 12px;
  background-color: lightyellow;
  display: flex;
  .col {
    flex: 1;
  }
}
</style>
`,d={class:"markdown-body"},i=o(`<h1>FlexFixed \u5438\u9876\u6216\u5438\u5E95(flex\u5E03\u5C40)</h1><div class="card"><h3>\u4ECB\u7ECD</h3><p>\u5E38\u89C1\u7684\u9875\u9762\u5E03\u5C40\uFF0C\u9876\u90E8\u5438\u9876\u3001\u5E95\u90E8\u5438\u5E95\u3001\u4E2D\u95F4\u81EA\u9002\u5E94\u3002</p></div><div class="card"><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FlexFixed</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;rong-ui3&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">FlexFixed</span>);
</code></pre></div>`,3),h={class:"card"},f=n("h3",null,"\u4EE3\u7801\u6F14\u793A",-1),E=o('<h2>API</h2><div class="card"><h3>props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>hideFooterOnKeyboardShow</td><td>\u952E\u76D8\u5F39\u8D77\u65F6\u9690\u85CFfooter</td><td>boolean</td><td><code class="">false</code></td></tr><tr><td>useFixed</td><td>\u6EDA\u52A8\u533A\u57DF\u5305\u542Bheader, \u5E38\u7528\u4E8E\u7ED9\u6EDA\u52A8\u533A\u57DF\u52A0\u80CC\u666F\u56FE</td><td>boolean</td><td><code class="">false</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>default</td><td>\u6EDA\u52A8\u533A\u57DF</td></tr><tr><td>header</td><td>\u5934\u90E8</td></tr><tr><td>footer</td><td>\u5E95\u90E8</td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>on-scroll</td><td>\u6EDA\u52A8\u4E8B\u4EF6</td><td>({scrollTop, maxScrollTop, direction}\uFF09</td></tr><tr><td>on-scroll-debounce</td><td>\u6EDA\u52A8\u4E8B\u4EF6</td><td>({scrollTop, maxScrollTop, direction}\uFF09</td></tr></tbody></table></div>',4),T={},D="",v=s({__name:"README",setup(m,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(b,x)=>{const l=a("hljs-block");return p(),e("div",d,[i,n("div",h,[f,n("p",null,[c(l,{code:r(u)},null,8,["code"])])]),E])}}});export{v as default,D as excerpt,T as frontmatter};
