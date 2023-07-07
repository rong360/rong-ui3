<template>
  <h2>自定义 Columns 的结构</h2>
  <r-picker
    :columns="columns"
    :columns-field-names="customFieldName"
    @confirm="onConfirm"
    @cancel="onCancel"
  ></r-picker>
  <div class="selected-values" v-show="selectedValues.length"> 当前值：{{ selectedValues }} </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const columns = [
  {
    cityName: '浙江',
    cities: [
      {
        cityName: '杭州',
        cities: [{ cityName: '西湖区', cityClassName: 'custom-classname', cityDisabled: true }, { cityName: '余杭区' }]
      },
      {
        cityName: '温州',
        cities: [{ cityName: '鹿城区' }, { cityName: '瓯海区' }]
      }
    ]
  },
  {
    cityName: '福建',
    cities: [
      {
        cityName: '福州',
        cities: [{ cityName: '鼓楼区' }, { cityName: '台江区' }]
      },
      {
        cityName: '厦门',
        cities: [{ cityName: '思明区' }, { cityName: '海沧区' }]
      }
    ]
  }
];

const customFieldName = {
  text: 'cityName',
  value: 'cityName',
  children: 'cities',
  className: 'cityClassName',
  disabled: 'cityDisabled'
};

const selectedValues = ref([]);

const onConfirm = (value: any) => {console.log(value)
  selectedValues.value = value.selectedValues;
};

const onCancel = () => {
  selectedValues.value = [];
};
</script>
