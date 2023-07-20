<template>
  <r-cell-group title="按钮形状">
    <r-cell :border="false">
      <r-radio-group v-model="checked" direction="horizontal">
        <r-radio name="a" shape="button">单选框 A</r-radio>
        <r-radio name="b" shape="button">单选框 B</r-radio>
        <r-radio name="c" shape="button">单选框 C</r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>当前选中值: {{ checked }}</r-cell>
    <r-cell>
      <r-radio-group v-model="checked2" direction="horizontal">
        <r-radio name="a" shape="round">单选框 A</r-radio>
        <r-radio name="b" shape="round">单选框 B</r-radio>
        <r-radio name="c" shape="round">单选框 C</r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>当前选中值: {{ checked2 }}</r-cell>
    <r-cell :border="false">
      <r-radio-group v-model="checked3" direction="horizontal">
        <r-radio name="a" shape="square">单选框 A</r-radio>
        <r-radio name="b" shape="square">单选框 B</r-radio>
        <r-radio name="c" shape="square">单选框 C</r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>当前选中值: {{ checked3 }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');
const checked2 = ref(['a']);
const checked3 = ref(['a']);
</script>
