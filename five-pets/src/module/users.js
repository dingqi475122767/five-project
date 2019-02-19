export default {
    namespaced: true,
    state: {
        shopUsers: {
            username: "",
            password: "",
            state: "",
        }
    },
    mutations: {
  
    },
    actions: {
        regAsync: ({ commit, state }) => {
            console.log(regAsync)
        }
    }
  }