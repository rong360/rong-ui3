<template>
  <div>
    <h3>message 为单文件组件</h3>
    <div><button @click="add">add</button></div>
    <div>count:{{ count }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const count = ref(0);

function add() {
  count.value++;
}
</script>
