<template>
  <h2>指定根节点</h2>
  <r-select
    v-model="selectedValues"
    teleport="body"
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  ></r-select>
  <div class="fs-12">{{ selectedValues }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const columns = ref([
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' }
]);

const selectedValues = ref('Shaoxing');

const onConfirm = (value: any) => {
  console.log(value);
};

const onCancel = (value: any) => {
  console.log(value);
};

const onChange = (value: any) => {
  console.log(value);
};
</script>
