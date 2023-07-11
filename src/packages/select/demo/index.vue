<template>
  <nav-bar>Select</nav-bar>
  <div class="demo demo-select">
    <Base />
    <TeleportVue />
    <Multiple />
    <Cascade />
    <CustomColumns />
    <Tile />
  </div>
</template>

<script lang="ts" setup>
import Base from './Base.vue';
import TeleportVue from './Teleport.vue';
import Multiple from './Multiple.vue';
import Cascade from './Cascade.vue';
import CustomColumns from './CustomColumns.vue';
import Tile from './Tile.vue';
</script>
