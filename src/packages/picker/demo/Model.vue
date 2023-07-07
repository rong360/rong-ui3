<template>
  <h2>双向绑定</h2>
  <r-picker v-model="selectedValues" title="标题" :columns="columns" @cancel="onCancel" />
  <div class="selected-values" v-show="selectedValues.length"> 当前值：{{ selectedValues }} </div>
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

const selectedValues = ref([]);

const onCancel = () => {
  selectedValues.value = [];
};
</script>
