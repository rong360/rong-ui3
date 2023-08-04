<template>
  <div class="doc-guide doc-container-wrapper">
    <div class="nav">
      <div v-for="item in config.guide" class="nav__item" :key="item.name">
        <router-link :to="`/zh-CN/guide/${item.name}`">{{ item.cName }}</router-link>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="simulator scroll-area">
      <div class="simulator__phone">
        <div class="simulator__phone-status-bar">
          <img src="../../assets/images/phtitle.png" />
          <input type="text" :value="demoUrl" />
        </div>
        <iframe :src="demoUrl" frameborder="0" marginwidth="0" marginheight="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import config from '@/config.json';

const demoUrl = `${location.origin}${location.pathname}/demo.html`;
</script>

<style lang="less" scoped>
.doc-guide {
  .nav {
    padding-left: 6px;
    padding-right: 6px;
  }
}
</style>
