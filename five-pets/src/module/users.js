import { logAsync } from "../services/users";
import router from '../router';

export default {
    namespaced: true,
    state: {
        username: "",
        password: "",
        state: "",
    },
    mutations: {
        set(state, payload) {
            console.log("state", state, "payload", payload)
        }
    },
    actions: {
        logAsync: async ({ commit, state }, payload) => {
            // console.log(payload)
            const login = await logAsync(payload);
            if(login.data){
                router.push('/mis')
            }else{
                alert("账户或密码错误")
            }
        }
    }
}