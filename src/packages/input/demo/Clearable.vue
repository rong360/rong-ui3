<template>
  <h2>显示清除图标</h2>
  <r-input v-model="state.text" placeholder="显示清除图标" clearable />
  <r-input v-model="state.text2" placeholder="始终显示清除图标" show-clear-icon-always />
  <r-input v-model="state.text3" placeholder="自定义清除图标" clearable >
    <template #clear>
      <r-icon name="close" />
    </template>
  </r-input>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  text: '',
  text2: '',
  text3: ''
});
</script>
