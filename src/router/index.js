import Vue from 'vue';
import Router from 'vue-router';
import Home from './Home';
import PowerSet from './PowerSet';
import BindPhone from './BindPhone';
import ChangePassword from './ChangePassword';
import ResetPassword from './ResetPassword';
import Register from './Register';
import DownUrl from './DownUrl';
import CreateGroup from './CreateGroup';
import Frame from './Frame';
import Transfer from './Transfer';

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
    },
    {
      name: 'ResetPassword',
      path: '/resetpassword',
      component: ResetPassword
    },
    {
      name: 'Register',
      path: '/register',
      component: Register
    },
    {
      name: 'DownUrl',
      path: '/downurl',
      component: DownUrl
    },
    {
      name: 'CreateGroup',
      path: '/creategroup',
      component: CreateGroup
    },
    {
      name: 'Frame',
      path: '/frame',
      component: Frame
    },
    {
      name: 'Transfer',
      path: '/transfer',
      component: Transfer
    }
  ]
});
