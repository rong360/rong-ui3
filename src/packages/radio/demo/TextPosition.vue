<template>
  <r-cell-group title="左侧文本">
    <r-cell :border="false">
      <r-radio-group v-model="checked">
        <r-radio name="a" text-position="left">单选框 A</r-radio>
        <r-radio name="b" text-position="left">单选框 B</r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>当前选中值: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');
</script>
