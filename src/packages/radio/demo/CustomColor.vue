<template>
  <r-cell-group title="自定义颜色">
    <r-cell>
      <r-radio-group v-model="checked">
        <r-radio name="a" class="custom-radio-color">自定义颜色 </r-radio>
        <r-radio name="b" class="custom-radio-color">自定义颜色 </r-radio>
      </r-radio-group>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');
</script>

<style lang="less" scoped>
.custom-radio-color {
  --r-radio-icon-color: green;
  --r-radio-icon-checked-color: red;
  --r-radio-icon-indeterminate-color: green;
}
</style>
