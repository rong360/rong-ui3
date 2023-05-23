<template>
  <h2>设置动画时间</h2>
  <r-button type="primary" @click="show = true">设置动画时间</r-button>
  <r-overlay v-model:show="show" :duration="2.5" :close-on-click-overlay="true"></r-overlay>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);
</script>
