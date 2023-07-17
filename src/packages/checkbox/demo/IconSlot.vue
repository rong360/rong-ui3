<template>
  <h2>自定义图标</h2>
  <r-cell :border="false">
    <r-checkbox v-model="checked" :indeterminate="true">
      <template #icon> 未选择 </template>
      <template #checkedIcon> 已选择</template>
      <template #indeterminate> 半选择 </template>
      复选框
    </r-checkbox>
  </r-cell>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(true);
const checked2 = ref(false);

const activeIcon = `https://img.yzcdn.cn/vant/user-active.png`;
const inactiveIcon = `https://img.yzcdn.cn/vant/user-inactive.png`;
</script>
