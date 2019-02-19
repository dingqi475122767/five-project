import Vue from 'vue'
import Vuex from 'vuex'
import shop from './module/shop';
import pets from "./module/pets"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop,
    pets
  }
})
