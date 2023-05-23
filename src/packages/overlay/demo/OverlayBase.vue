<template>
  <h2>基础用法</h2>
  <r-button type="primary" @click="show = true">显示遮罩层 {{ show }} </r-button>
  <r-overlay v-model:show="show" @click="clickBase"></r-overlay>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);
const clickBase = () => (show.value = false);
</script>
