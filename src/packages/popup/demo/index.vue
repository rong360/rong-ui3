<template>
  <nav-bar>Popup</nav-bar>
  <div class="demo demo-popup">
    <PopupBase />
    <PopupPosition />
    <PopupScroll />
    <PopupClose />
    <PopupRound />
    <PopupEventListener />
    <PopupTeleport />
  </div>
</template>

<script lang="ts" setup>
import PopupBase from './PopupBase.vue';
import PopupPosition from './PopupPosition.vue';
import PopupScroll from './PopupScroll.vue';
import PopupClose from './PopupClose.vue';
import PopupRound from './PopupRound.vue';
import PopupEventListener from './PopupEventListener.vue';
import PopupTeleport from './PopupTeleport.vue';
</script>
