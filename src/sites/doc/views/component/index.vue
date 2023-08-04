<template>
  <div class="doc-component doc-container-wrapper">
    <div class="nav">
      <div class="nav__group" v-for="item in config.component" :key="item.enName">
        <div class="nav__title">{{ item.name }}</div>
        <template v-for="component in item.packages" :key="component.name">
          <div class="nav__item" v-if="component.show">
            <router-link :to="`/zh-CN/component/${kebabCase(component.name)}`"
              >{{ component.name }} <span>{{ component.cName }}</span></router-link
            >
          </div>
        </template>
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
