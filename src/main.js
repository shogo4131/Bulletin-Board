import Vue from 'vue';
import App from './App.vue';
// import axios from 'axios';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
Vue.use(Vuetify);

// axios.defaults.baseURL =
  

new Vue({
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount('#app');
