<template>
  <h2>点击触发change事件</h2>
  <r-cell :border="false">
    <r-checkbox v-model="checked" @change="onChange">复选框 </r-checkbox>
  </r-cell>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(true);

const onChange = (checked: boolean, label: string) => {
  console.log(checked, label);
};
</script>
