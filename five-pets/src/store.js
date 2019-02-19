import Vue from 'vue'
import Vuex from 'vuex'
<<<<<<< HEAD
import shop from './module/shop'
import services from './module/services'
=======
import shop from './module/shop';
import goods from './module/goods'
import shopUsers from './module/shopUsers';

>>>>>>> d81f52546def9c77fcd9b2f9a1b5a7209e786976
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
<<<<<<< HEAD
    shop,
    services
=======
    shop,goods,shopUsers
>>>>>>> d81f52546def9c77fcd9b2f9a1b5a7209e786976
  }
})
