<template>
  <r-cell-group title="自定义颜色">
    <r-cell>
      <r-checkbox v-model="checked" class="custom-checkbox-color">自定义颜色 </r-checkbox>
    </r-cell>
    <r-cell>
      <r-checkbox v-model="checked2" class="custom-checkbox-color">自定义颜色 </r-checkbox>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(true);
const checked2 = ref(false);
</script>

<style lang="less" scoped>
.custom-checkbox-color {
  --r-checkbox-icon-color: green;
  --r-checkbox-icon-checked-color: red;
  --r-checkbox-icon-indeterminate-color: green;
}
</style>
