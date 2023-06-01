<template>
  <r-nav-bar @click-left="clickLeft" class-name="nav-bar">
    <slot></slot>
    <template #bottom>
      <slot name="bottom"></slot>
    </template>
  </r-nav-bar>
</template>

<script lang="ts" setup>
const clickLeft = () => history.back();
</script>
