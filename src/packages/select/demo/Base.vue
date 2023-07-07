<template>
  <h2>基础用法</h2>
  <r-select :columns="columns" @confirm="onConfirm" @cancel="onCancel" @change="onChange"></r-select>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const columns = [
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' }
];

const selectedValues = ref('Shaoxing');

const onConfirm = (value: any) => {
  // console.log(value);
  selectedValues.value = value.selectedValues;
};

const onCancel = (value: any) => {
  // console.log(value);
};

const onChange = (value: any) => {
  console.log(value);
};
</script>
