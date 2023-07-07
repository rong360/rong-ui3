<template>
  <h2>级联选择</h2>
  <r-select
    v-model="selectedValues"
    value-separator="_"
    text-separator="/"
    :columns="columns"
    @confirm="onConfirm"
    @cancel="onCancel"
    @change="onChange"
  ></r-select>
  {{ selectedValues }}
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const columns = [
  {
    text: '浙江',
    value: 'Zhejiang',
    children: [
      {
        text: '杭州',
        value: 'Hangzhou',
        children: [
          { text: '西湖区', value: 'Xihu', disabled: true },
          { text: '余杭区', value: 'Yuhang' }
        ]
      },
      {
        text: '温州',
        value: 'Wenzhou',
        children: [
          { text: '鹿城区', value: 'Lucheng' },
          { text: '瓯海区', value: 'Ouhai' }
        ]
      }
    ]
  },
  {
    text: '福建',
    value: 'Fujian',
    children: [
      {
        text: '福州',
        value: 'Fuzhou',
        children: [
          { text: '鼓楼区', value: 'Gulou' },
          { text: '台江区', value: 'Taijiang' }
        ]
      },
      {
        text: '厦门',
        value: 'Xiamen',
        children: [
          { text: '思明区', value: 'Siming' },
          { text: '海沧区', value: 'Haicang' }
        ]
      }
    ]
  }
];

// const selectedValues = ref(['Fujian', 'Xiamen', 'Haicang']);
const selectedValues = ref('Fujian_Xiamen_Haicang');

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
