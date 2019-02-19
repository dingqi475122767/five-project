import {regAsync,loginAsync} from '../services/shopUsers'

export default {
  namespaced: true,
  state: {
    username: "",
    password: "",
    state: "",

  },
  mutations: {

  },
  actions: {
    //门店注册
    regAsync: (state,payload) => {
      // console.log(state,payload)
      regAsync(payload)
    },
    //门店登陆
    loginAsync:(state,payload)=>{
      console.log(state,payload)
    }
  }
}