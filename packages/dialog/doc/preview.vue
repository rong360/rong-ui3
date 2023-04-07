<template>
  <div>
    <h3> this is preview</h3>
    <pre>
      <code v-html="dd" class="language-html"></code>
    </pre>
    <!-- <pre class="language-html"><code class="language-html"><slot></slot></code></pre> -->
    <!-- <highlightjs autodetect="false" lang="html" :code="demo"></highlightjs> -->
    <!-- <hljsVuePlugin.component autodetect="false" lang="html" :code="demo"></hljsVuePlugin.component> -->
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from 'vue';
import demo from './test.vue?raw';
import hljs from 'highlight.js/lib/common';

const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  lang: {
    type: String,
    default: 'html'
  }
});
// import Prism from 'prismjs';
const dd = ref('');

watchEffect(() => {
  dd.value = hljs.highlight(props.code, { language: props.lang }).value;
});

// import 'highlight.js/lib/common';
// import hljsVuePlugin from '@highlightjs/vue-plugin';

onMounted(() => {
  // Prism.highlightAll();
});
</script>
