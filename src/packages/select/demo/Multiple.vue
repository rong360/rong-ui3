<template>
  <h2>多列选择</h2>
  <r-select
    v-model="selectedValues"
    value-separator="_"
    text-separator="/"
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  ></r-select>
  <div class="fs-12">{{ selectedValues }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const columns = [
  // 第一列
  [
    { text: '周一', value: 'Monday' },
    { text: '周二', value: 'Tuesday' },
    { text: '周三', value: 'Wednesday' },
    { text: '周四', value: 'Thursday' },
    { text: '周五', value: 'Friday' }
  ],
  // 第二列
  [
    { text: '上午', value: 'Morning' },
    { text: '下午', value: 'Afternoon' },
    { text: '晚上', value: 'Evening' }
  ]
];

// const selectedValues = ref(['Wednesday', 'Afternoon']);
const selectedValues = ref('Wednesday_Afternoon');

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
