import { regAsync, loginAsync, isShopUsersAsync, getUsersByPageAsync, updateShopUsersAsync, auditShopUsersAsync,getAuditByPage } from '../services/shopUsers'
import router from '../router';//要用路径跳转就把东西写到要用的页面就可以了

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
    updateInfo: {},//储存用户信息
    audit: {//待审核用户
      currentPage: 1, //当前页
      eachPage: 5, //每页显示条数
      totalNum: 0, //总数据
      totalPage: 0, //总页数
      data: [],
    },
    auditShop:{

    }
  },
  mutations: {
    set(state, payload) {
      console.log(payload)
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
    // 将用户信息保存到sessionStorage中
    setShopUsersInfo: (state, shopUsers) => {
      sessionStorage.shopUsersInfo = JSON.stringify(shopUsers)
    },
    // 从sessionStorage中获取用户信息
    getShopUsersInfo: (state) => {
      state.updateInfo = JSON.parse(sessionStorage.shopUsersInfo)
    },
    //获取待审核用户
    getAuditByPage: (state, payload) => {
      Object.assign(state.audit, payload)
    },
    //设置待审核用户的当前页
    setAuditCurPage(state,payload){
      state.audit.currentPage = payload
    },
    //设置待审核用户的每页显示条数
    setAuditEachPage(state,payload){
      state.audit.eachPage = payload
    }
  },
  actions: {
    //门店注册
    regAsync: async (state, payload) => {
      await regAsync(payload)
    },
    //门店登陆
    loginAsync: async ({ commit, state }, payload) => {//payload是拿到用户的输入
      const isLogin = await loginAsync(payload);
      if (isLogin.data) {
        const value = JSON.stringify(isLogin.data)
        localStorage.setItem("shopUsers", value)
        router.push('/mis')
      } else {
        alert("账号密码不对")
      }
    },

    //验证是否门店账户是否重复
    isShopUsersAsync: async ({ state, commit }, payload) => {
      let data = await isShopUsersAsync(payload);
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
    updateShopUsersAsync: async ({ dispatch }, payload) => {
      console.log(payload);
      await updateShopUsersAsync(payload);
      dispatch("getUsersByPageAsync");
    },

    //审核用户信息
    auditShopUsersAsync: async ({ dispatch }, payload) => {
      await auditShopUsersAsync(payload);
      dispatch("getAuditByPageAsync");
    },

    //获取待审核用户
    getAuditByPageAsync: async ({ commit, state }) => {
      const { currentPage, eachPage } = state.audit
      const {data} = await getAuditByPage({currentPage,eachPage})
      commit("getAuditByPage",data)
    }
  }
}

