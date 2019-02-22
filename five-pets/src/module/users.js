import { removeUsers, logAsync, addUsersAsync, isUsersAsync, getUsersByPageAsync, updateUsersAsync, isShopLoginAsync, isLoginAsync, exitAsync } from "../services/users";
import router from '../router';

export default {
    namespaced: true,
    state: {
        username: "",
        password: "",
        state: "",
        cd: false,
        currentPage: 1, //当前页
        eachPage: 5, //每页显示条数
        totalNum: 0, //总数据
        totalPage: 0, //总页数
        data: [],
        updateInfo: {},
        isLogin: false,//登录状态
    },
    mutations: {
        set(state, payload) {
        },
        setIsRepet(state, payload) {
            state.cd = payload
        },
        //获取用户分页信息保存到state里面
        getUsersByPage: (state, payload) => {
            Object.assign(state, payload)
        },
        setCurPage: (state, currentPage) => {
            state.currentPage = currentPage
        },
        setEachPage: (state, eachPage) => {
            state.eachPage = eachPage
        },
        // 将服务信息保存到sessionStorage中
        setUsersInfo: (state, users) => {
            sessionStorage.usersInfo = JSON.stringify(users)
        },
        // 从sessionStorage中获取服务信息
        getUsersInfo: (state) => {
            state.updateInfo = JSON.parse(sessionStorage.usersInfo)
        },
        //请求得到的登录状态
        setIsLogin(state, payload) {
            state.isLogin = payload
        }
    },
    actions: {
        //登陆平台
        logAsync: async ({ commit, state }, payload) => {
            // console.log(payload)
            const login = await logAsync(payload);
            if (login.data) {
                const data = JSON.stringify(login.data)
                localStorage.shopUsers = data
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
        isUsersAsync: async ({ state, commit }, payload) => {
            let data = await isUsersAsync(payload);
            commit("setIsRepet", data.data)//commit是一个方法
        },

        //查询翻页信息
        getUsersByPageAsync: async ({ commit, state }) => {
            const { data } = await getUsersByPageAsync({
                currentPage: state.currentPage,
                eachPage: state.eachPage
            })
            commit('getUsersByPage', data)
        },

        //修改用户信息
        updateUsersAsync: async ({ dispatch }, payload) => {
            await updateUsersAsync(payload);
            dispatch("getUsersByPageAsync");
        },

        //查看登录状态
        isLogin: async ({ commit }) => {
            const { data } = await isLoginAsync();
            if (data.username) {
                commit("setIsLogin", true)
            } else {
                commit("setIsLogin", false)
            }
        },

        //查单门店用户登录状态
        isShopLogin: async ({ commit }) => {
            const { data } = await isShopLoginAsync();
            if (data.username) {
                commit("setIsLogin", true)
            } else {
                commit("setIsLogin", false)
            }
        },

        //退出登录状态
        exit: async ({ commit }) => {
            const { data } = await exitAsync()
            commit("setIsLogin", false)
        },

        //删除平台用户
        removeUsersAsync: async ({ commit, dispatch }, payload) => {
            await removeUsers(payload);
            dispatch("getUsersByPageAsync");
        },
    }
}