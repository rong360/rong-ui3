import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/main.css';
import './assets/styles/md-style.scss';
import DemoBlock from './components/demo-block/index.vue';
import HljsBlock from './components/hljs-block/index.vue';

// import * as rongui3 from '../../dist/rongui3.umd.js';
// import NutUI from '@nutui/nutui';

// import 'highlight.js/styles/stackoverflow-light.css';
// import 'highlight.js/lib/common';
// import hljsVuePlugin from '@highlightjs/vue-plugin';

// 采用按需加载时  此全局css样式，需要删除
// import '@nutui/nutui/dist/style.css';

const app = createApp(App);

app.use(router);
// app.use(NutUI);
// app.use(hljsVuePlugin);

app.component('DemoBlock', DemoBlock);
app.component('HljsBlock', HljsBlock)

app.mount('#app');
