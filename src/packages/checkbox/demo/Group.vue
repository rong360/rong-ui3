<template>
  <r-cell-group title="复选框组">
    <r-cell :border="false">
      <r-checkbox-group v-model="checked">
        <r-checkbox name="a">复选框 A</r-checkbox>
        <r-checkbox name="b">复选框 B</r-checkbox>
        <r-checkbox name="c">复选框 C</r-checkbox>
        <r-checkbox name="d" v-if="show"> 复选框 D (禁用)</r-checkbox>
        <r-checkbox name="e" disabled>复选框 E (选中且禁用)</r-checkbox>
      </r-checkbox-group>
    </r-cell>
    <r-cell>当前选中值: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(['a', 'b', 'e']);

const show = ref(true);

setTimeout(() => {
  show.value = false;
}, 2000);
</script>
