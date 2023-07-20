<template>
  <r-cell-group title="水平排列">
    <r-cell :border="false">
      <r-radio-group v-model="checked" direction="horizontal">
        <r-radio name="a">复选框 A</r-radio>
        <r-radio name="b">复选框 B</r-radio>
        <r-radio name="c">复选框 C</r-radio>
        <r-radio name="d"> 复选框 D </r-radio>
        <r-radio name="e"> 复选框 E </r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>当前选中值: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');
</script>
