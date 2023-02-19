import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import './plugins/element.js'
//引入MockServe.js
import '@/mock/serve'
import track from './tack.js'
Vue.prototype.$track = track;
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
