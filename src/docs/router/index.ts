import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import Home from '../views/home/index.vue';
import Guide from '../views/guide/index.vue';
import Component from '../views/component/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/guide',
    name: 'guide',
    component: Guide
  }
];

// 中文路由
const cnRoutes: Array<RouteRecordRaw> = [];
const cnDocs = import.meta.glob('/packages/components/**/doc.md');
for (const path in cnDocs) {
  const name = (path.match(/\/packages\/components\/(.*)\/doc.md/) as any[])[1];
  cnRoutes.push({
    path: '/zh-CN/component/' + name,
    component: cnDocs[path]
  });
}

routes.push({
  path: '/zh-CN/component',
  component: Component,
  children: cnRoutes
});

// 英文路由
const enRoutes: Array<RouteRecordRaw> = [];
const enDocs = import.meta.glob('/packages/**/doc.en-US.md');
for (const path in enDocs) {
  const name = (path.match(/\/packages\/(.*)\/doc.en-US.md/) as any[])[1];
  enRoutes.push({
    path: '/en-US/component/' + name,
    component: enDocs[path]
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
