<template>
  <r-nav-bar @click-left="clickLeft"><slot></slot></r-nav-bar>
</template>

<script lang="ts" setup>
const clickLeft = () => history.back();
</script>
