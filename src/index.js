import Vue from 'vue';
import VueResource from 'vue-resource';
import AotSdk from 'sdk';
import Psdk from '../node_modules/sdk/dist/psdk3.0.0';
import App from './App';
import router from './router';
import './style/main.css';

Vue.use(VueResource);
Vue.use(AotSdk);
Vue.use(Psdk);
Vue.http.headers.common.Authorization = 'Windows^7.0^1.0.1^ABCDEFG^SIMBA';
Vue.http.options.emulateJSON = true;
const app = new Vue({
  router,
  ...App
});

app.$mount('#app');

