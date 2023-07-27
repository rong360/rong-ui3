import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import Home from '../views/home/index.vue';
import Guide from '../views/guide/index.vue';
import Component from '../views/component/index.vue';
import config from '@/config.json';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  }
  // {
  //   path: '/guide',
  //   name: 'guide',
  //   component: Guide
  // }
];

// 中文路由
const cnRoutes: Array<RouteRecordRaw> = [];
const cnDoc = import.meta.glob('@/packages/**/README.md');

for (const path in cnDoc) {
  const name = (path.match(/\/packages\/(.*)\/README.md/) as any[])[1];
  cnRoutes.push({
    path: name,
    component: cnDoc[path]
  });
}

routes.push({
  path: '/zh-CN/component/',
  component: Component,
  redirect: '/zh-CN/component/dialog',
  children: cnRoutes
});

// 指南
routes.push({
  path: '/zh-CN/guide',
  component: Guide,
  redirect: '/zh-CN/guide/intro',
  children: config.guide.map((item) => ({
    path: item.name,
    component: () => import(`../views/guide/markdown/${item.name}.md`)
  }))
});

// 英文路由
const enRoutes: Array<RouteRecordRaw> = [];
const enDoc = import.meta.glob('@/packages/**/doc/README.en-US.md');
for (const path in enDoc) {
  const name = (path.match(/\/packages\/(.*)\/doc\/README.en-US.md/) as any[])[1];
  enRoutes.push({
    path: name,
    component: enDoc[path]
  });
}
routes.push({
  path: '/en-US/component',
  component: Component,
  children: enRoutes
});

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
