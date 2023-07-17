<template>
  <r-cell-group title="水平排列">
    <r-cell :border="false">
      <r-checkbox-group v-model="checked" direction="horizontal">
        <r-checkbox name="a">复选框 A</r-checkbox>
        <r-checkbox name="b">复选框 B</r-checkbox>
        <r-checkbox name="c">复选框 C</r-checkbox>
        <r-checkbox name="d"> 复选框 D </r-checkbox>
        <r-checkbox name="e"> 复选框 E </r-checkbox>
      </r-checkbox-group>
    </r-cell>
    <r-cell>当前选中值: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(['a', 'd']);
</script>
