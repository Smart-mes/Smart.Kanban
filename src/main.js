import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
// 导入 table 组件
import 'vue-easytable/libs/themes-base/index.css'
import { VTable } from 'vue-easytable'
Vue.component(VTable.name, VTable)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
