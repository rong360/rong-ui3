<template>
  <r-cell-group title="基础用法">
    <r-cell :border="false">
      <r-radio-group v-model="checked">
        <r-radio name="a">单选框 A</r-radio>
        <r-radio name="b">单选框 B</r-radio>
        <r-radio name="c">单选框 C</r-radio>
        <r-radio name="d" v-if="show"> 单选框 D (禁用)</r-radio>
        <r-radio name="e" disabled>单选框 E (选中且禁用)</r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>当前选中值: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');

const show = ref(true);

setTimeout(() => {
  show.value = false;
}, 2000);
</script>
