<template>
  <div> this is dialog demo <r-dialog v-model:show="showDialog"></r-dialog></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showDialog = ref(true);
</script>
