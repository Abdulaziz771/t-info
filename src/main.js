import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'

import store from './store'

//star-rating
import StarRating from 'vue-star-rating';
Vue.component('star-rating', StarRating);

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask);

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router'

import "@/styles/global.scss"
import "@/styles/media.scss"

export const bus  = new Vue();
Vue.use(BootstrapVue);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
