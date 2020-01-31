import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'

import store from './store'

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import 'node_modules/bootstrap/scss/bootstrap';
// import 'node_modules/bootstrap-vue/src/index.scss';

import router from './router'

import "@/styles/global.scss"
import "@/styles/media.scss"

export const bus  = new Vue();

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
