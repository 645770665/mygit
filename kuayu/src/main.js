// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import VueScrollLock from 'vue-scroll-lock'
import 'babel-polyfill';
// import Router from 'vue-router'
import qwe,{ce1,ce2} from './ceshi'
import 'element-ui/lib/theme-chalk/display.css';
import {qqqq,wwww} from './components/zhilin'
import {ZJ} from './pop/index' //自定义全局组件
// console.log(ce1.qwe(),ce2.qwe(),'ceshi');
// console.log(qwe,ce1,ce2,'ceshi');
// qwe.qunimabi()
// qwe.nimasile()
// Vue.use(cao)
Vue.directive('focus',qqqq)
// Vue.directive('wwww',wwww)

// import("./ceshi.js").then(res=>{
//   console.log(res);
//   res.ce1.qwe()
//   res.ce2.qwe()
//   res.ce3.qwe()
//   res.default.nimasile()
//   res.default.qunimabi()
// }).catch(res=>{
//   console.log(res,'catch');
// })

const abab = ()=> import('./components/cao.vue')
// console.log(abab());
Vue.use(ElementUI)
Vue.use(ZJ)
Vue.use(VueScrollLock)


Vue.prototype.$axios=axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
console.log('新增行？？？');