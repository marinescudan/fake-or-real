import Vue from 'vue';
import App from './app.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import i18n from './i18n';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueYoutube from "vue-youtube";

Vue.use(VueYoutube);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
