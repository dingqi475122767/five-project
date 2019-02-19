import Vue from 'vue'
import Vuex from 'vuex'

import pets from "./module/pets"

import shop from './module/shop'
import services from './module/services'
import goods from './module/goods'
import shopUsers from './module/shopUsers';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pets,
    services,
    shop,goods,shopUsers

  }
})
