<template>
  <r-cell-group title="自定义大小">
    <r-cell>
      <r-radio-group v-model="checked">
        <r-radio name="a" style="font-size: 16px">自定义尺寸16 </r-radio>
        <r-radio name="b" :icon-style="{ fontSize: '16px' }">单独定义icon 16 </r-radio>
        <r-radio name="c" class="custom-radio-size">通过class自定义尺寸 </r-radio>
        <r-radio name="d" class="custom-radio-icon-size">通过class自定义icon尺寸 </r-radio>
      </r-radio-group>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');
</script>

<style lang="less" scoped>
.custom-radio-size {
  --r-radio-font-size: 16px;
}
.custom-radio-icon-size {
  --r-radio-icon-font-size: 16px;
}
</style>
