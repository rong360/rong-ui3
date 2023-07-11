<template>
  <h2>平铺显示</h2>
  <r-select
    v-model="selectedValues"
    type="tile"
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  ></r-select>
  <div class="fs-12 mb-10">{{ selectedValues }}</div>

  <r-select
    v-model="visibleOptionNumSelectedValues"
    type="tile"
    :columns="visibleOptionNumColumns"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  ></r-select>
  <div class="fs-12 mb-10">{{ visibleOptionNumSelectedValues }}</div>

  <r-select
    v-model="customFieldNameSelectedValues"
    type="tile"
    :columns="customFieldNameColumns"
    :columns-field-names="customFieldName"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  ></r-select>
  <div class="fs-12">{{ customFieldNameSelectedValues }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// 基础
const columns = [
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo' }
];

const selectedValues = ref('Hangzhou');

// 超过 visibleOptionNum 个选项时滚动
const visibleOptionNumColumns = [
  { text: '杭州', value: 'Hangzhou' },
  { text: '宁波', value: 'Ningbo', disabled: true },
  { text: '温州', value: 'Wenzhou' },
  { text: '绍兴', value: 'Shaoxing' },
  { text: '湖州', value: 'Huzhou' },
  { text: '嘉兴', value: 'Jiaxing' },
  { text: '金华', value: 'Jinhua' },
  { text: '衢州', value: 'Quzhou' },
  { text: '舟山', value: 'Zhoushan' },
  { text: '台州', value: 'Taizhou' },
  { text: '丽水', value: 'Lishui' }
];
const visibleOptionNumSelectedValues = ref('Shaoxing');

// 自定义字段名
const customFieldNameColumns = [
  { cityName: '杭州' },
  { cityName: '宁波' },
  { cityName: '温州' },
  { cityName: '绍兴' },
  { cityName: '湖州' }
];
const customFieldNameSelectedValues = ref('绍兴');
const customFieldName = {
  text: 'cityName',
  value: 'cityName',
  children: 'cities',
  className: 'cityClassName',
  disabled: 'cityDisabled'
};

const onConfirm = (value: any) => {
  console.log('confirm', value);
};

const onCancel = (value: any) => {
  console.log(value);
};

const onChange = (value: any) => {
  console.log('change', value);
};
</script>
