<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="doc-header">
    <div class="doc-header__title">
      <span class="doc-header__title">Rong-ui3</span>
      <span class="doc-header__subtitle">(适用于 Vue3)</span>
    </div>
    <div class="doc-header__nav">
      <ul class="nav-list">
        <li class="nav-item"><router-link to="/guide">指南</router-link></li>
        <li class="nav-item"><router-link to="/zh-CN/component">组件</router-link></li>
      </ul>
    </div>
  </div>
  <div class="doc-container">
    <RouterView />
  </div>
</template>

<style lang="less">
.doc {
  display: flex;
  flex-direction: column;
  height: 100%;
  &-header {
    height: 64px;
    line-height: 64px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    box-sizing: border-box;
    background-color: #001938;
    &__title {
      font-size: 22px;
      color: #fff;
    }
    &__subtitle {
      font-size: 13px;
      color: #999;
      padding-left: 5px;
    }
    &__nav {
      display: flex;
      align-items: center;
      padding-left: 200px;
      .nav-list {
        display: flex;
        align-items: center;
      }
      .nav-item {
        margin-right: 30px;
        a {
          color: #fff;
          font-size: 14px;
          display: inline-block;
          &.router-link-active {
            font-weight: bold;
            transform: scale(1.2);
          }
        }
      }
    }
  }
  &-container {
    flex: 1;
    overflow-y: scroll;
    background-color: #f7f8fa;
  }
}
</style>
