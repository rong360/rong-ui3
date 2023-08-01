<template>
  <div class="doc-guide">
    <div class="doc-guide-nav">
      <div v-for="item in config.guide" class="doc-guide-nav__item" :key="item.name">
        <router-link :to="`/zh-CN/guide/${item.name}`">{{ item.cName }}</router-link>
      </div>
    </div>
    <div class="doc-guide-container">
      <router-view></router-view>
    </div>
    <div class="doc-guide-simulator scroll-area">
      <div class="doc-guide-simulator__phone">
        <div class="doc-guide-simulator__phone-status-bar">
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

<style lang="less">
.doc-guide {
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
    &__item {
      margin: 0 6px;
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
  &-simulator {
    padding: 10px 25px 40px 25px;
    &__phone {
      width: 375px;
      height: 100%;
      display: flex;
      flex-direction: column;
      border-radius: 10px;
      box-shadow: 0 0 9px 5px #ccc;
      overflow: hidden;
      &-status-bar {
        height: 64px;
        padding-top: 5px;
        background: linear-gradient(rgba(55, 55, 55, 0.98), #545456);
        img {
          display: block;
          width: 90%;
          margin: 5px auto 0;
        }
        input {
          width: 90%;
          height: 28px;
          line-height: 28px;
          color: #fff;
          background-color: #a2a2a2;
          white-space: nowrap;
          border-radius: 4px;
          overflow-x: scroll;
          padding: 0 5px;
          margin: 12px auto 0;
          display: block;
          font-size: 13px;
        }
      }
      iframe {
        width: 100%;
        flex: 1;
      }
    }
  }
}
</style>
