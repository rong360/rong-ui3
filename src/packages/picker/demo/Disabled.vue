<template>
  <h2>禁用选项</h2>
  <r-picker title="标题" :columns="columns" @confirm="onConfirm" @cancel="onCancel" />
  <div class="selected-values" v-show="selectedValues.length"> 当前值：{{ selectedValues }} </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const columns = [
  { text: '杭州', value: 'Hangzhou', disabled: true },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' }
];

const selectedValues = ref([]);

const onConfirm = (value: any) => {
  selectedValues.value = value.selectedValues;
};

const onCancel = () => {
  selectedValues.value = [];
};
</script>
