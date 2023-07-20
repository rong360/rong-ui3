<template>
  <r-radio-group v-model="checked" ref="group">
    <r-cell-group title="搭配单元格组件使用">
      <r-cell v-for="item in list" :key="item" @click="onClickCell(item)">
        <template #title>单选框 {{ item }}</template>
        <template #right-icon>
          <r-radio :name="item" />
        </template>
      </r-cell>
      <r-cell>当前选中值: {{ checked }}</r-cell>
    </r-cell-group>
  </r-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const list = ref(['a', 'b']);
const checked = ref('a');
const group = ref();

const onClickCell = (name: string) => {
  checked.value = name;
};
</script>
