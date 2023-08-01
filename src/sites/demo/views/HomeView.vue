<template>
  <div class="demo demo-home">
    <h1 class="demo-home__title">rong-ui3</h1>
    <h2 class="demo-home__desc">轻量、可靠的移动端组件库.</h2>
    <r-cell-group v-for="group in config.component" :title="group.name" :key="group.name" round>
      <template v-for="component in group.packages">
        <r-cell
          v-if="component.show"
          :title="component.cName"
          :key="component.name"
          :to="`${kebabCase(component.name)}`"
          is-link
        />
      </template>
    </r-cell-group>
  </div>
</template>

<script lang="ts" setup>
import { kebabCase } from '@/sites/doc/utils';
import config from '@/config.json';
</script>

<style lang="less">
.demo-home {
  min-height: 100% !important;
  &__title {
    font-size: 32px;
    margin-top: 40px;
    padding-left: 10px;
  }
  &__desc {
    margin-top: 10px !important;
    color: rgba(69, 90, 100, 0.6);
    font-size: 14px;
  }
}
</style>
