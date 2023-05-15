<template>
  <div class="demo demo-button">
    <ButtonType />
    <ButtonShape />
    <ButtonSize />
    <ButtonBlock />
    <ButtonDisabled />
    <ButtonPlain />
    <ButtonSlot />
    <dl class="demo__item">
      <dt></dt>
      <dd></dd>
    </dl>
  </div>
</template>

<script lang="ts" setup>
import ButtonType from './ButtonType.vue';
import ButtonShape from './ButtonShape.vue';
import ButtonSize from './ButtonSize.vue';
import ButtonBlock from './ButtonBlock.vue';
import ButtonDisabled from './ButtonDisabled.vue';
import ButtonPlain from './ButtonPlain.vue';
import ButtonSlot from './ButtonSlot.vue';
</script>

<style lang="less">
.demo-button {
  .demo__item {
    .r-button:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>
