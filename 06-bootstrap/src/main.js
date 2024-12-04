import { createApp } from 'vue';
import { createBootstrap } from 'bootstrap-vue-next';

// import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';

import App from './App.vue';
const app = createApp(App);
app.use(createBootstrap()); // Important
app.mount('#app');

// 전역 등록하기
import AppCard from './components/AppCard.vue';
app.component('AppCard', AppCard);
