import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue';
import Reg from './views/register.vue';
import Mis from './views/mis.vue';
import UserList from './components/users/userList.vue';
import AddService from './components/service/addService'
import ServiceList from './components/service/serviceList'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
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
      path: '/mis',
      name: 'mis',
      component: Mis,
      children: [
        {
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
          path:'userList',
          name:'userList',
          component:UserList
        },
        {
          path:'serviceList',
          name:'serviceList',
          component:ServiceList
        },
        {
          path:'addService',
          name:'addService',
          component:AddService
        }
      ]
    }
  ]
})