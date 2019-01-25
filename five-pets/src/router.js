import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue';
import Reg from './views/register.vue';
import Mis from './views/mis.vue';
import UserList from './components/users/userList.vue';
import GoodsList from './components/goods/goodsList.vue';
import AddGoods from './components/goods/addGoods.vue'
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
      path:'/reg',
      name:'register',
      component:Reg
    },
    {
      path:'/login',
      name:'_login',
      component:Login
    },
    {
      path:'/mis',
      name:'mis',
      component:Mis,
      children:[
        {
          path:'userList',
          name:'userList',
          component:UserList
        },
        {
          path:'goodsList',
          name:'goodsList',
          component:GoodsList
        },
        {
          path:'addGoods',
          name:'addGoods',
          component:AddGoods
        },
      ]
    }
  ]
})