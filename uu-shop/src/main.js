// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//全局引入rem.js
import './assets/js/rem'
//全局引入 css文件
import './assets/css/reset.css'

import "./assets/css/index.css";
import "./assets/css/iconfont.css";
//引入vant UI 框架
import vantUI from 'vant'
//引入样式
import 'vant/lib/index.css'
Vue.use(vantUI)

//设置图片服务器
Vue.prototype.$imgUrl = 'http://localhost:3000'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
