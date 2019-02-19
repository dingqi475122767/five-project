import Vue from 'vue'
import Vuex from 'vuex'
import shop from './module/shop'
import services from './module/services'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop,
    services
  }
})
