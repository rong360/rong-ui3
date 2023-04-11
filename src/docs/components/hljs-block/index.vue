<template>
  <pre ref="preRef" class="hljs-block"><code v-html="code" :class="codeClass"></code></pre>
</template>

<script setup lang="ts">
import { ref, watchEffect, computed, onMounted } from 'vue';
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

const code = ref('');
watchEffect(() => {
  code.value = hljs.highlight(props.code, { language: props.lang }).value;
});

const codeClass = computed(() => 'language-' + props.lang);

const preRef = ref<HTMLElement | null>(null);
onMounted(() => {
  // preRef.value && preRef.value.parentElement && (preRef.value.parentElement.className = 'hljs-wrap');
});
</script>

<style lang="less">
.hljs-block {
  max-height: 400px;
  overflow-y: auto;
}
</style>
