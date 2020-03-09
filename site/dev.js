import 'babel-polyfill';
import './index.less';
import 'highlight.js/styles/solarized-light.css';
import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import VueClipboard from 'vue-clipboard2';
import Md from './components/md';
import Api from './components/api';
import demoBox from './components/demoBox';
import demoContainer from './components/demoContainer';
import Modal from '../components/modal';
import message from '../components/message';
import notification from '../components/notification';
import Tooltip from '../components/tooltip';
import Icon from '../components/icon';
import Tree from '../components/tree';
import Input from '../components/input';
import '../components/tooltip/style';
import '../components/icon/style';
import '../components/tree/style';
import '../components/input/style';
import '../components/modal/style';
import '../components/message/style';
import '../components/notification/style';
import Test from '../components/tree/demo/index.vue';
import zhCN from './theme/zh-CN';
import enUS from './theme/en-US';

Vue.use(Vuex);
Vue.use(VueClipboard);
Vue.use(VueRouter);
Vue.use(VueI18n);
Vue.component(Md.name, Md);
Vue.component(Api.name, Api);
Vue.component('demo-box', demoBox);
Vue.component('demo-container', demoContainer);

Vue.prototype.$message = message;
Vue.prototype.$notification = notification;
Vue.prototype.$info = Modal.info;
Vue.prototype.$success = Modal.success;
Vue.prototype.$error = Modal.error;
Vue.prototype.$warning = Modal.warning;
Vue.prototype.$confirm = Modal.confirm;
Vue.prototype.$destroyAll = Modal.destroyAll;

Vue.use(Modal);
Vue.use(Tooltip);
Vue.use(Icon);
Vue.use(Tree);
Vue.use(Input);

const i18n = new VueI18n({
  locale: enUS.locale,
  messages: {
    [enUS.locale]: { message: enUS.messages },
    [zhCN.locale]: { message: zhCN.messages },
  },
});

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/test',
      component: () => import('../components/test/index.vue'),
    },
    {
      path: '/*',
      component: Test,
    },
  ],
});

const store = new Vuex.Store({
  state: {
    username: 'zeka',
  },
  mutations: {
    update(state, payload) {
      state.username = payload.username;
    },
  },
});
new Vue({
  el: '#app',
  i18n,
  router,
  store,
});
