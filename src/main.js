import Vue from 'vue';
import App from './app.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import i18n from './i18n';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueYoutube from "vue-youtube";
import VueScreen from "vue-screen";

Vue.use(VueYoutube);
Vue.use(VueAxios, axios);

Vue.use(VueScreen, {
  xs: 0, sm: 640, md: 960, lg: 1280, xl: 1600, xxl: 1920,
  breakpointsOrder: ["xs", "sm", "md", "lg", "xl", "xxl"]
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
