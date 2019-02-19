import {regAsync} from '../services/shopUsers'

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
    regAsync: (state,payload) => {
      // console.log(state,payload)
      regAsync(payload)
    }
  }
}