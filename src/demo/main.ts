import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import RongUi3 from '../../packages';

import './assets/main.css';

import Dialog2 from '../../dist/es/dialog';
import '../../dist/es/dialog/style';

const app = createApp(App);

app.use(router);
// app.use(RongUi3);
app.component('dialog2', Dialog2);

app.mount('#app');
