<template>
  <r-cell-group title="禁用文本点击">
    <r-cell>
      <r-checkbox v-model="checked" label-disabled> 复选框 </r-checkbox>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(true);
</script>
