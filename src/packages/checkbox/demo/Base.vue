<template>
  <r-cell-group title="基础用法">
    <r-cell>
      <r-checkbox v-model="checked">复选框 </r-checkbox>
    </r-cell>
    <r-cell>
      <r-checkbox v-model="checked2" shape="square">复选框 </r-checkbox>
    </r-cell>
    <r-cell>
      <r-checkbox v-model="checked3" shape="button">复选框 </r-checkbox>
    </r-cell>
  </r-cell-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked = ref(true);
const checked2 = ref(false);
const checked3 = ref(false);
</script>
