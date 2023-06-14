<template>
  <h2>对齐方式</h2>
  <r-input v-model="state.text" placeholder="请输入文本" />
  <r-input v-model="state.text2" placeholder="请输入文本" input-align="right" clearable/>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  text: '',
  text2: ''
});
</script>
