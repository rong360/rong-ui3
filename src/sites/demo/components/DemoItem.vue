<template>
  <div class="demo__item">
    <h3 v-if="showTitle">
      <slot name="title">{{ title }}</slot>
    </h3>
    <slot>demo 内容</slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: 'demo 标题'
  },
  showTitle: {
    type: Boolean,
    default: true
  }
});
</script>

<style lang="less">
.demo__item {
  padding: 0 15px;
  margin-top: 15px;
  h3 {
    font-size: 14px;
    padding-bottom: 10px;
  }
  .row:not(:first-of-type) {
    margin-top: 10px;
  }
}
</style>
