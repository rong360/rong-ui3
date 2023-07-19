<template>
  <r-cell-group title="按钮形状">
    <r-cell :border="false">
      <r-checkbox-group v-model="checked" direction="horizontal">
        <r-checkbox name="a" shape="button">复选框 A</r-checkbox>
        <r-checkbox name="b" shape="button">复选框 B</r-checkbox>
        <r-checkbox name="c" shape="button">复选框 C</r-checkbox>
      </r-checkbox-group>
    </r-cell>
    <r-cell>当前选中值: {{ checked }}</r-cell>
    <r-cell :border="false">
      <r-checkbox-group v-model="checked2" direction="horizontal">
        <r-checkbox name="a" shape="square">复选框 A</r-checkbox>
        <r-checkbox name="b" shape="square">复选框 B</r-checkbox>
        <r-checkbox name="c" shape="square">复选框 C</r-checkbox>
      </r-checkbox-group>
    </r-cell>
    <r-cell>当前选中值: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(['a']);
const checked2 = ref(['a']);
</script>
