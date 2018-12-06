// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


// require styles

import App from './App'
// import axios from './axios'
import router from './router'
import jquery from 'jquery'
import './assets/css/bootstrap.min.css'

import './assets/js/bootstrap.min'
// import './assets/css/bootstrap.min.css'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);




import YDUI from 'vue-ydui'; /* 相当于import YDUI from 'vue-ydui/ydui.rem.js' */
import 'vue-ydui/dist/ydui.rem.css';
/* 使用px：import 'vue-ydui/dist/ydui.px.css'; */

Vue.use(YDUI);

//使用axios模块
import Axios from 'axios'
Axios.defaults.baseURL="https://api.zxqy.bsx.qumatou.com.cn/";
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios=Axios;
//解决axios post传数据后端接受不到问题
import qs from 'qs'
Vue.prototype.$qs=qs


Vue.config.productionTip = false

Vue.prototype.HOST = '/api'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
