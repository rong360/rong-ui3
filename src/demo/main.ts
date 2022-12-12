import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import RongUi3 from '../../packages';

import './assets/main.css';

const app = createApp(App);

app.use(router);
app.use(RongUi3);

app.mount('#app');
