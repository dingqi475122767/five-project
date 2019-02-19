import Vue from 'vue'
import Vuex from 'vuex'
import shop from './module/shop';
import goods from './module/goods'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop,goods
  }
})
