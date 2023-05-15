import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [];
const demoPages = import.meta.glob('@/packages/*/demo/index.vue');

routes.push({
  path: '',
  name: 'HomeView',
  component: HomeView
});

for (const path in demoPages) {
  const name = (path.match(/\/packages\/(.*)\/demo\/index.vue/) as any[])[1];
  routes.push({
    path: '/' + name,
    name,
    component: demoPages[path]
  });
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
