import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue';
import Reg from './views/register.vue';
import Mis from './views/mis.vue';
import UserList from './components/users/userList.vue';
import GoodsList from './components/goods/goodsList.vue';
import AddGoods from './components/goods/addGoods.vue'
import AddService from './components/service/addService'
import ServiceList from './components/service/serviceList'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'register',
      component: Reg
    },
    {
      path: '/login',
      name: '_login',
      component: Login
    },
    {
      path: '/mis/:id/:type',
      name: 'mis',
      component: Mis,
    },
    {
      path: '/mis',
      name: 'mis',
      component: Mis,
      children: [{
          path: 'userList',
          name: 'userList',
          component: UserList
        },
        {
          path: 'addPets',
          name: 'addPets',
          component: () => import('./components/pets/addPets.vue')
        },
        {
          path: 'petList',
          name: 'petList',
          component: () => import('./components/pets/petList.vue')
        },
        {
          path: 'petDetails',
          name: 'petDetails',
          component: () => import('./components/pets/petDetails.vue')
        },
        {
          path: 'addUser',
          name: 'addUser',
          component:()=>import('./components/users/addUser.vue')
        },
        {
          path: 'auditList',
          name: 'auditList',
          component:()=>import('./components/users/auditList.vue')
        },
        {
          path: 'goodsList',
          name: 'goodsList',
          component: GoodsList
        },
        {
          path: 'addGoods',
          name: 'addGoods',
          component: AddGoods
        },
        {
          path: 'addService',
          name: 'addService',
          component: AddService
        },
        {
          path: 'serviceList',
          name: 'serviceList',
          component: () => import('./components/service/serviceList.vue')
        },
        {
          path: 'orderMessage',
          name: 'orderMessage',
          component: () => import('./components/orderMessage/orderMessage.vue')
        },
        {
          path: 'addShop',
          name: 'addShop',
          component: () => import('./components/shop/addShop.vue')
        },
        {
          path: 'shopList',
          name: 'shopList',
          component: () => import('./components/shop/shopList.vue')
        },
      ]
    }
  ]
})