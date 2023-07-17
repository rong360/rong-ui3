<template>
  <h2>半选状态</h2>
  <r-cell :border="false"> <r-checkbox v-model="checked" :indeterminate="true">复选框 </r-checkbox> </r-cell>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(false);
</script>
