<template>
  <demo-item title="设置动画时间">
    <r-button type="primary" @click="show = true">设置动画时间</r-button>
    <r-overlay v-model:show="show" :duration="2.5"></r-overlay>
  </demo-item>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);
</script>
