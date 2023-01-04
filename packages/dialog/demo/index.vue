<template>
  <div>
    this is dialog demo
    <dialog2 v-model:show="showDialog"></dialog2
  ></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showDialog = ref(true);
</script>
