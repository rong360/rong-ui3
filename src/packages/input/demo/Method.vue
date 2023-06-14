<template>
  <h2>组件暴露的方法</h2>
  <r-input v-model="state.text" placeholder="请输入文本" ref="inputRef" />
  <div class="button-group">
    <r-button text="获得焦点" size="small" @click="focus" />
    <r-button text="失去焦点" size="small" @click="blur" />
    <r-button text="选择文本" size="small" @click="select" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

const state = reactive({
  text: ''
});

const inputRef = ref();

const focus = () => {
  inputRef.value?.focus();
};
const blur = () => {
  inputRef.value?.blur();
};
const select = () => {
  inputRef.value?.select();
};
</script>
