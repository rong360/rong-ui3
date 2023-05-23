<template>
  <h2>关闭背景渐变</h2>
  <r-button type="primary" @click="show = true">关闭背景渐变</r-button>
  <r-overlay v-model:show="show" :css-transition="false" :close-on-click-overlay="true"></r-overlay>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);
</script>
