import { regAsync, loginAsync } from '../services/shopUsers'
import router from '../router';

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
    regAsync: async (state, payload) => {
      await regAsync(payload)
    },
    loginAsync: async ({commit,state}, payload) => {
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