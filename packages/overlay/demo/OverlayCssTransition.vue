<template>
  <demo-item title="关闭背景渐变">
    <r-button type="primary" @click="show = true">关闭背景渐变</r-button>
    <r-overlay v-model:show="show" :css-transition="false"></r-overlay>
  </demo-item>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);
</script>
