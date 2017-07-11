import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home';
import PowerSet from './PowerSet';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'PowerSet',
      path: '/powerset',
      component: PowerSet
    }
  ]
});