<template>
  <div class="demo demo-picker">
    <Base />
    <Popup />
    <Model />
    <Multiple />
    <Cascade />
    <Disabled />
    <CustomColumns />
    <Async />
  </div>
</template>

<script lang="ts" setup>
import Base from './Base.vue';
import Popup from './Popup.vue';
import Model from './Model.vue';
import Multiple from './Multiple.vue';
import Cascade from './Cascade.vue';
import Disabled from './Disabled.vue';
import CustomColumns from './CustomColumns.vue';
import Async from './Async.vue';
</script>

<style lang="less">
.demo-picker {
  .selected-values {
    font-size: 12px;
    background-color: lightgoldenrodyellow;
    padding: 10px;
    margin-top: 2px;
  }
}
</style>
