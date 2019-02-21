import { getOrderMessageByPageAsync, addOrderMessageAsync, getShopByUsersAsync } from "../services/orderMessage";

export default {
    namespaced: true,
    state: {
        currentPage: 1,//当前页
        eachPage: 5,//当前页显示数量
        totalPage: 0,//总页数
        totalData: 0,//总数据量
        data: [],//显示的数据
        shop: []//门店信息
    },
    mutations: {
        //获取默认orderMessage
        getAllByPage(state, payload) {
            Object.assign(state, payload)
        },
        //设置currentPage的值
        setCurrentPage(state, payload) {
            state.currentPage = payload
        },
        //设置eachPage的值
        setEachPage(state, payload) {
            state.eachPage = payload
        },
        getShopByUsers(state, payload) {
            state.shop = payload
        }
    },
    actions: {
        //新增订单
        addOrderMessage: async ({ commit, state }, payload) => {
            await addOrderMessageAsync(payload)
        },
        //请求对应门店的订单数据
        getOrderMessageByPage: async ({ commit, state },payload) => {
            const { data } = await getOrderMessageByPageAsync({ currentPage: state.currentPage, eachPage: state.eachPage,shopID:payload })
            commit("getAllByPage", data)
        },
        //请求对应账号的门店数据
        getShopByUsers: async ({ commit }) => {
            let _id = JSON.parse(localStorage.getItem("shopUsers"))[0]._id
            const { data } = await getShopByUsersAsync({ _id })
            commit("getShopByUsers",data)
        }
    }
}