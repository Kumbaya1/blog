import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 重置样式
import './assets/css/reset.css'
Vue.config.productionTip = false
// http://demo.cssmoban.com/cssthemes5/tope_16_pop/index.html
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
