<template>
  <h2>禁用和只读</h2>
  <r-input v-model="state.readonly" placeholder="输入框只读" readonly/>
  <r-input v-model="state.disabled" placeholder="输入框已禁用" disabled/>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  readonly: '输入框只读',
  disabled: '输入框已禁用'
});
</script>
