<template>
  <h2>基础用法</h2>
  <r-input v-model="state.text" placeholder="请输入文本" />
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  text: ''
});
</script>
