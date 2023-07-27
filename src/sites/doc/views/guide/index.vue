<template>
  <div class="doc-component">
    <div class="doc-component-nav">
      <div v-for="item in config.guide" class="doc-component-nav__item" :key="item.name">
        <router-link :to="`/zh-CN/guide/${item.name}`"
          ><span>{{ item.cName }}</span></router-link
        >
      </div>
    </div>
    <div class="doc-component-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import config from '@/config.json';
</script>

<style lang="less">
.doc-component {
  display: flex;
  height: 100%;
  > div {
    height: 100%;
    overflow-y: scroll;
  }
  &-nav {
    width: 220px;
    box-shadow: 0 8px 12px #ebedf0;
    padding: 24px 0;
    background-color: #fff;
    &__group {
      margin-bottom: 20px;
      padding-left: 6px;
      padding-right: 6px;
    }
    &__title {
      color: #455a64;
      font-size: 15px;
      font-weight: 600;
      line-height: 28px;
      padding: 8px 0 8px 24px;
    }
    &__item {
      a {
        display: block;
        margin: 8px 0;
        padding-left: 24px;
        color: #455a64;
        font-size: 14px;
        line-height: 36px;
        transition: color 0.2s;
        text-decoration: none;
        &.router-link-active {
          font-weight: 600;
          background-color: #ebfff0;
          border-radius: 999px;
        }
        &:hover,
        &:router-link-active {
          color: #4fc08d;
        }
        span {
          font-size: 12px;
          padding-left: 8px;
        }
      }
    }
  }
  &-container {
    flex: 1;
    padding-left: 20px;
    .markdown-body {
      min-height: 100%;
    }
  }
}
</style>
