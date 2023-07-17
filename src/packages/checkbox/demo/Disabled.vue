<template>
  <r-cell-group title="禁用状态">
    <r-cell>
      <r-checkbox v-model="checked" disabled>未选时禁用 </r-checkbox>
    </r-cell>
    <r-cell>
      <r-checkbox v-model="checked2" disabled>选中时禁用 </r-checkbox>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(false);
const checked2 = ref(true);
</script>
