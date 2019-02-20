import { regAsync, loginAsync } from '../services/shopUsers'
import router from '../router';//要用路径跳转就把东西写到要用的页面就可以了

export default {
  namespaced: true,
  state: {
    username: "",
    password: "",
    state: "",
  },
  mutations: {
    set(state,payload){
      console.log(payload)
    }
  },
  actions: {
    //门店注册
    regAsync: async (state, payload) => {
      await regAsync(payload)
    },
    //门店登陆
    loginAsync: async ({commit,state}, payload) => {//payload是拿到用户的输入
      const isLogin = await loginAsync(payload);
      if(isLogin.data){
        const value = JSON.stringify(isLogin.data)
        localStorage.setItem("shopUsers",value)
        router.push('/mis')
      }else{
        alert("账号密码不对")
      }
    }
  }
}