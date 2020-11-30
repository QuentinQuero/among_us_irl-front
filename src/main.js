import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from "@/router";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

// Import and define layouts
import onlineLayout from "@/layouts/online";
import offlineLayout from "@/layouts/offline";
import VueTable from "vuetable-2";

Vue.component('online-layout', onlineLayout);
Vue.component('offline-layout', offlineLayout);

new Vue({
  render: h => h(App),
  router,
  components: {
    'vuetable-pagination': VueTable.VuetablePagination
  }
}).$mount('#app')
