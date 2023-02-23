import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import './assets/all.scss'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);//把axios作為vue套件使用
app.use(LoadingPlugin);
app.mount('#app');
