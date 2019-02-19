import Vue from 'vue'
import Vuex from 'vuex'
import shop from './module/shop'
import services from './module/services'
import goods from './module/goods'
import shopUsers from './module/shopUsers';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop,
    services,
    goods,
    shopUsers
  }
})
