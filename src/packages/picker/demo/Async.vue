<template>
  <h2>异步获取</h2>
  <r-picker v-model="selectedValues" title="标题" :columns="columns" @confirm="onConfirm" @cancel="onCancel" />
  <div class="selected-values" v-show="selectedValues.length"> 当前值：{{ selectedValues }} </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
const columns = ref<any[]>([]);

const selectedValues = ref<any[]>([]);

onMounted(() => {
  setTimeout(() => {
    columns.value = [
      { text: '杭州', value: 'Hangzhou' },
      { text: '宁波', value: 'Ningbo' },
      { text: '温州', value: 'Wenzhou' },
      { text: '绍兴', value: 'Shaoxing' },
      { text: '湖州', value: 'Huzhou' }
    ];
    selectedValues.value = ['Wenzhou'];
  }, 1000);
});

const onConfirm = (value: any) => {
  console.log(value);
};

const onCancel = () => {
  selectedValues.value = [];
};
</script>
