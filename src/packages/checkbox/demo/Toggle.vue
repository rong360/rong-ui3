<template>
  <r-cell-group title="checkboxGroup 全选/取消/反选">
    <r-cell :border="false">
      <r-checkbox-group v-model="checked" direction="horizontal" ref="checkboxGroupRef">
        <r-checkbox name="a">复选框 A</r-checkbox>
        <r-checkbox name="b">复选框 B</r-checkbox>
        <r-checkbox name="c">复选框 C</r-checkbox>
        <r-checkbox name="d" disabled> 复选框 D </r-checkbox>
        <r-checkbox name="e"> 复选框 E </r-checkbox>
      </r-checkbox-group>
    </r-cell>
    <r-cell :border="false">
      <r-button size="small" type="primary" @click="toggleAll(true)">全选</r-button>
      <r-button size="small" type="primary" style="margin: 0 10px" @click="toggleAll(false)">取消</r-button>
      <r-button size="small" type="primary" @click="toggleAll()">反选</r-button>
    </r-cell>
    <r-cell>当前选中值: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(['a', 'd']);
const checkboxGroupRef = ref();

const toggleAll = (checked?: boolean) => {
  checkboxGroupRef.value.toggleAll({ checked });
};
</script>
