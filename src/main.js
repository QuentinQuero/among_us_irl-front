import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from "@/router";
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
