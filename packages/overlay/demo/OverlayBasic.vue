<template>
  <demo-item title="基础用法">
    <r-button type="primary" @click="show = true">显示遮罩层 {{ show }} </r-button>
    <r-overlay v-model:show="show" />
  </demo-item>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const show = ref(false);
</script>
