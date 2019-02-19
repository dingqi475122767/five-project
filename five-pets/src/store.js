import Vue from 'vue';
import Vuex from 'vuex';
import shop from './module/shop';
import shopUsers from './module/shopUsers';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shop,
    shopUsers
  }
})
