<template>
  <div class="doc-component">
    <div class="doc-component-nav">
      <div class="doc-component-nav__group" v-for="item in config.component" :key="item.enName">
        <div class="doc-component-nav__title">{{ item.name }}</div>
        <template v-for="component in item.packages" :key="component.name">
          <div class="doc-component-nav__item" v-if="component.show">
            <router-link :to="`/zh-CN/component/${kebabCase(component.name)}`"
              >{{ component.name }} <span>{{ component.cName }}</span></router-link
            >
          </div>
        </template>
      </div>
    </div>
    <div class="doc-component-container">
      <router-view></router-view>
    </div>
    <div class="doc-component-simulator scroll-area">
      <div class="doc-component-simulator__phone">
        <div class="doc-component-simulator__phone-status-bar">
          <img src="../../assets/images/phtitle.png" />
          <input type="text" :value="demoUrl" />
        </div>
        <iframe :src="demoUrl" frameborder="0" marginwidth="0" marginheight="0" :key="demoUrl"></iframe>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { kebabCase } from '@/sites/doc/utils';
import config from '@/config.json';

const demoUrl = ref('');
const route = useRoute();
watchEffect(() => {
  const ret = route.path.match(/component\/(.*)/);
  const componentName = ret ? ret[1] : '';
  demoUrl.value = `${location.origin}${location.pathname}/demo.html#/${componentName}`;
});
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
