<template>
  <div>
    this is dialog demo
    <r-dialog v-model:show="showDialog" overlay-class="sss" teleport="body"></r-dialog
  ></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showDialog = ref(true);
</script>
