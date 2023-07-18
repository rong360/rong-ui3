<template>
  <r-checkbox-group v-model="checked" ref="group">
    <r-cell-group title="搭配单元格组件使用">
      <r-cell v-for="item in list" :key="item" @click="toggle(item)">
        <template #title>复选框 {{ item }}</template>
        <template #right-icon>
          <r-checkbox :name="item" @click.stop />
        </template>
      </r-cell>
      <r-cell>当前选中值: {{ checked }}</r-cell>
    </r-cell-group>
  </r-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const list = ref(['a', 'b']);
const checked = ref(['a']);
const group = ref();

const toggle = (name: string) => {
  const checkbox = group.value.children.find((item: any) => item.props.name === name);
  checkbox.exposed.toggle();
};
</script>
