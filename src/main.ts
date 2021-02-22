import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

const vueApp = createApp(App);

vueApp.use(store);

vueApp.use(router);

vueApp.use(ElementPlus);

vueApp.mount('#app-root');
