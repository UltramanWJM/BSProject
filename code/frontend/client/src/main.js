// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'

// Vue.use(Antd)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
