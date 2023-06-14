<template>
  <h2>事件演示</h2>
  <r-input
    v-model="state.text"
    placeholder="事件演示"
    clearable
    @clear="onClear"
    @focus="onFocus"
    @blur="onBlur"
    @input="onInput"
  />
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const state = reactive({
  text: ''
});

const onClear = () => {
  console.log('onClear');
};

const onFocus = () => {
  console.log('onFocus');
};

const onBlur = () => {
  console.log('onBlur');
};

const onInput = (event: Event) => {
  console.log('onInput', (event.target as HTMLInputElement).value);
};
</script>
