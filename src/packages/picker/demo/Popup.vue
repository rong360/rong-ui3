<template>
  <h2>搭配弹出层使用</h2>
  <r-cell title="请选择城市" is-link @click="show = true" :border="false"></r-cell>
  <r-popup v-model:show="show" round position="bottom">
    <r-picker title="标题" :columns="columns" @confirm="onConfirm" @change="onChange" @cancel="onCancel" />
    <div class="selected-values" v-show="selectedValues.length"> 当前值：{{ selectedValues }} </div>
  </r-popup>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const show = ref(false);

const columns = [
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' }
];

const selectedValues = ref([]);

const onConfirm = (value: any) => {
  selectedValues.value = value.selectedValues;
  show.value = false;
};

const onChange = (value: any) => {
  selectedValues.value = value.selectedValues;
};

const onCancel = () => {
  show.value = false;
};
</script>
