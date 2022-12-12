<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
const router = useRouter();
const onBack = () => {
  router.back();
};
</script>

<template>
  <span @click="onBack">sdf9s</span>
  <RouterView />
</template>

<style scoped></style>
