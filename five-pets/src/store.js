import Vue from 'vue'
import Vuex from 'vuex'
import shop from './model/shop'
import users from './model/users'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop,users
  }
})
