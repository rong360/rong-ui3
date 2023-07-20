<template>
  <r-cell-group title="自定义图标">
    <r-cell>
      <r-radio-group v-model="checked">
        <r-radio name="a">
          <template #icon> 未选择 </template> <template #checkedIcon> 已选择</template>
          单选框
        </r-radio>
        <r-radio name="b">
          <template #icon> 未选择 </template> <template #checkedIcon> 已选择</template>
          单选框
        </r-radio>
      </r-radio-group>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref('a');
</script>
