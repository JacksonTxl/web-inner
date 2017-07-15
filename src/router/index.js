import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home';
import PowerSet from './PowerSet';
import BindPhone from './BindPhone';
import ChangePassword from './ChangePassword';

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
    },
    {
      name: 'BindPhone',
      path: '/bindphone',
      component: BindPhone
    },
    {
      name: 'ChangePassword',
      path: '/changepassword',
      component: ChangePassword
    }
  ]
});
