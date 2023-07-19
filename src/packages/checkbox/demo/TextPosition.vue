<template>
  <r-cell-group title="左侧文本">
    <r-cell>
      <r-checkbox v-model="checked" text-position="left">复选框 </r-checkbox>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(true);
</script>
