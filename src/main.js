import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'babel-polyfill'
import vuetify from '@/plugins/vuetify'
import "@/assets/scss/main.scss";
// Plugin
import "./plugins/animate.js";
import "./plugins/vue2-google-maps.js"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')