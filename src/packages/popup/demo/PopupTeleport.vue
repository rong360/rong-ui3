<template>
  <h2>指定挂载节点</h2>
  <r-cell title="指定挂载节点" is-link :border="false" />
  <r-popup :popup-style="{ padding: '30px 50px' }" :close-on-click-overlay="true" teleport="body" v-model:show="show"
    >内容 teleport</r-popup
  >
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const show = ref(false);
</script>
