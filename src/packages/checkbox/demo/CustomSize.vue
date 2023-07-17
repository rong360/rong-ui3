<template>
  <r-cell-group title="自定义大小">
    <r-cell>
      <r-checkbox v-model="checked" style="font-size: 16px">自定义尺寸16 </r-checkbox>
    </r-cell>
    <r-cell>
      <r-checkbox v-model="checked2" :icon-style="{ fontSize: '16px' }">单独定义icon 16 </r-checkbox>
    </r-cell>
    <r-cell>
      <r-checkbox v-model="checked3" class="custom-checkbox-size">通过class自定义尺寸 </r-checkbox>
    </r-cell>
    <r-cell>
      <r-checkbox v-model="checked4" class="custom-checkbox-icon-size">通过class自定义icon尺寸 </r-checkbox>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
</script>

<style lang="less" scoped>
.custom-checkbox-size {
  --r-checkbox-font-size: 16px;
}
.custom-checkbox-icon-size {
  --r-checkbox-icon-font-size: 16px;
}
</style>
