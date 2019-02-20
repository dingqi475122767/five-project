import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import services from './module/services';
import shop from './module/shop';
import goods from './module/goods';
=======

import pets from "./module/pets"

import shop from './module/shop'
import services from './module/services'
import goods from './module/goods'

>>>>>>> 345150c6a08b1139b46c70a96f46698bf34056a0
import shopUsers from './module/shopUsers';
import users from './module/users';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
<<<<<<< HEAD
    shop,
    services,
    goods,
    shopUsers
=======
    pets,
    services,
    shop,
    goods,
    shopUsers,
    users
>>>>>>> 345150c6a08b1139b46c70a96f46698bf34056a0
  }
})
