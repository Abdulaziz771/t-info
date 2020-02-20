import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue'

import store from './store'

//star-rating
import StarRating from 'vue-star-rating';
Vue.component('star-rating', StarRating);

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask);

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

import vSelect from 'vue-select'
Vue.component('v-select', vSelect);

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './routes/router'

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
