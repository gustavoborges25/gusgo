import Vue from 'vue';
import 'Support/plugins/vuetify';
import VueSweetalert2 from 'vue-sweetalert2';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueSweetalert2);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
