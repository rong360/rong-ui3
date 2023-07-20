<template>
  <r-cell-group title="change事件">
    <r-cell :border="false">
      <r-radio-group v-model="checked" @change="onChange">
        <r-radio name="a">单选框 A</r-radio>
        <r-radio name="b">单选框 B</r-radio>
      </r-radio-group>
    </r-cell>
    <r-cell>当前选中值: {{ checked }}</r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');

const onChange = (name: string) => {
  console.log(name);
};
</script>
