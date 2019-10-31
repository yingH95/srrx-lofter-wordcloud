import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuex from 'vuex'

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    member: '阿云嘎'
  },
  mutations: {
    changeMember (state, member) {
      state.member = member
    }
  }
});


new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
