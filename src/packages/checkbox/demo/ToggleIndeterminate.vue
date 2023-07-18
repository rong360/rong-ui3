<template>
  <r-cell-group title="checkboxGroup 全选/半选/取消">
    <r-cell :border="false">
      <r-checkbox v-model="isCheckAll" :indeterminate="indeterminate" @change="toggleAll">全选</r-checkbox>
    </r-cell>
    <r-cell :border="false">
      <r-checkbox-group v-model="checked" ref="group" @change="onCheckboxGroupChange">
        <r-checkbox name="a">复选框 A</r-checkbox>
        <r-checkbox name="b">复选框 B</r-checkbox>
        <r-checkbox name="c">复选框 C</r-checkbox>
        <r-checkbox name="d"> 复选框 D </r-checkbox>
      </r-checkbox-group>
    </r-cell>
    <r-cell>当前选中值: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref([]);
const group = ref();
const indeterminate = ref(false);
const isCheckAll = ref(false);

const toggleAll = (value: boolean) => {
  group.value.toggleAll(value);
};

const onCheckboxGroupChange = (values: string[]) => {
  if (values.length === 4) {
    isCheckAll.value = true;
    indeterminate.value = false;
  } else if (values.length === 0) {
    isCheckAll.value = false;
    indeterminate.value = false;
  } else {
    isCheckAll.value = false;
    indeterminate.value = true;
  }
};
</script>
