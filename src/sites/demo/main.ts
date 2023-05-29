import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import RongUi3 from '../../packages';
import './assets/main.less';
import '../../packages/index.less';
import NavBar from './components/NavBar.vue';

// import RongUi3 from 'rong-ui3';
// import 'rong-ui3/style.css';
// import 'rong-ui3/es/dialog/style/css.js';
// import './assets/main.css';

const app = createApp(App);

app.use(router);
app.use(RongUi3);

app.component('NavBar', NavBar);

app.mount('#app');
