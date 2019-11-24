import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import vuetify from './plugins/vuetify';
import axios from "axios";
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false;
axios.defaults.baseURL = "http://localhost:4000";

new Vue({
  router,
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
