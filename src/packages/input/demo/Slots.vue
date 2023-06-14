<template>
  <h2>插槽演示</h2>
  <r-input v-model="state.text" placeholder="插槽演示">
    <template #left>
      <r-icon name="question-circle" />
    </template>
    <template #right>
      <r-button type="danger" text="获取验证码" size="small" />
    </template>
  </r-input>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  text: ''
});
</script>
