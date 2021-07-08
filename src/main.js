// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store  from './vuex/store.js'
// import ElementUI from 'element-ui';
import axios from 'axios'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Avatar from 'primevue/avatar';

// import 'primevue/resources/themes/saga-blue/theme.css ';
import 'primevue/resources/primevue.min.css';
// import 'primeicons/primeicons.css '


Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

Vue.component('InputText', InputText);
Vue.component('Avatar', Avatar);

// Vue.use(ElementUI, { size: 'small' });
Vue.use(PrimeVue, {ripple: true});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
