<template>
  <r-cell-group title="radioGroup禁用">
    <r-cell :border="false">
      <r-radio-group v-model="checked" disabled>
        <r-radio name="a">单选框 A</r-radio>
        <r-radio name="b">单选框 B</r-radio>
        <r-radio name="c">单选框 C</r-radio>
        <r-radio name="d"> 单选框 D </r-radio>
        <r-radio name="e"> 单选框 E </r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>当前选中值: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');
</script>
