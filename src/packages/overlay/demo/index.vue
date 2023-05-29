<template>
  <nav-bar>Overlay</nav-bar>
  <div class="demo demo-overlay">
    <OverlayBase />
    <OverlayEmbedContent />
    <OverlayDuration />
    <OverlayCssTransition />
  </div>
</template>

<script lang="ts" setup>
import OverlayBase from './OverlayBase.vue';
import OverlayEmbedContent from './OverlayEmbedContent.vue';
import OverlayDuration from './OverlayDuration.vue';
import OverlayCssTransition from './OverlayCssTransition.vue';
</script>
