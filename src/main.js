import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'
import VueAnalytics from 'vue-analytics'

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.use(VueAnalytics, {
  id: 'UA-150354610-2',
  autoTracking: {
    screenview: true
  },
  trackEvent: true
});

const store = new Vuex.Store({
  state: {
    member: '阿云嘎',
    viewMode: '词云'
  },
  mutations: {
    changeMember (state, member) {
      state.member = member
    },
    changeMode (state, mode) {
      state.viewMode = mode
    }
  }
});


new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
