import { logAsync, addUsersAsync, isUsersAsync } from "../services/users";
import router from '../router';

export default {
    namespaced: true,
    state: {
        username: "",
        password: "",
        state: "",
        cd: false
    },
    mutations: {
        set(state, payload) {
            console.log("state", state, "payload", payload)
        },
        setIsRepet(state, payload) {
            state.cd = payload
        }
    },
    actions: {
        //登陆平台
        logAsync: async ({ commit, state }, payload) => {
            // console.log(payload)
            const login = await logAsync(payload);
            if (login.data) {
                router.push('/mis')
            } else {
                alert("账户或密码错误")
            }
        },
        //新增平台用户
        addUsersAsync: async (state, payload) => {
            await addUsersAsync(payload)
        },
        //验证是否平台账户是否重复
        isUsersAsync: async ({state,commit}, payload) => {
            let data = await isUsersAsync(payload);  
            commit("setIsRepet",data.data)//commit是一个方法
        }
    }
}