<template>
  <h2>格式化输入内容</h2>
  <r-input
    v-model="state.text"
    placeholder="银行卡四位分隔（在输入时执行格式化）"
    max-length="19"
    type="digit"
    :formatter="formatter"
  />
  <r-input
    v-model="state.text2"
    placeholder="银行卡四位分隔（在失焦时执行格式化）"
    type="digit"
    max-length="19"
    format-trigger="onBlur"
    :formatter="formatter"
  />
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  text: '',
  text2: ''
});

// 数字4位分隔
const formatter = (value: string) => value.replace(/(\d{4})(?=\d)/g, '$1 ');
</script>
