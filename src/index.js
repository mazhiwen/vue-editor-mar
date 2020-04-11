import {
  utiDate,
} from 'utility-mar';
// import 'styles';
import 'vue-editor-mar/lib/theme-chalk/index.css';

import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  routes,
} from 'router';
import VueEditorMar from 'vue-editor-mar';
// import VueEditorMar from './packages';

import store from './store';


import App from './App.vue';


console.log(VueEditorMar);

Vue.use(VueEditorMar);
Vue.use(VueRouter);
// Vue.use(DropMenuPlugin);


const router = new VueRouter({
  mode: 'history',
  routes, // (缩写) 相当于 routes: routes
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
