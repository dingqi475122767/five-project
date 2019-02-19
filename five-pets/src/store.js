import Vue from 'vue'
import Vuex from 'vuex'

import pets from "./module/pets"

import shop from './module/shop'
import services from './module/services'
import goods from './module/goods'

import { shopUsers, shopLogin } from './module/shopUsers';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    pets,
    services,
<<<<<<< HEAD
    shop, goods, shopUsers,
    shopLogin,

=======
    shop,
    goods,
    shopUsers
>>>>>>> aeda6bad33120f486e342bee62874e0f08626cd2
  }
})
