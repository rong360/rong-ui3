<template>
  <nav-bar>NavBar</nav-bar>
  <div class="demo demo-nav-bar">
    <BaseUsage />
    <BackTo />
    <RightButton />
    <UseSlot />
    <FixedTop />
  </div>
</template>

<script lang="ts" setup>
import BaseUsage from './BaseUsage.vue';
import BackTo from './BackTo.vue';
import RightButton from './RightButton.vue';
import UseSlot from './UseSlot.vue';
import FixedTop from './FixedTop.vue';
</script>

<style lang="less" scoped>
.demo-nav-bar {
  padding: 0;
}
</style>
