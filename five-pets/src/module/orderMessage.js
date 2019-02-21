import { getOrderMessageByPageAsync, addOrderMessageAsync } from "../services/orderMessage";

export default {
    namespaced: true,
    state: {
        currentPage: 1,//当前页
        eachPage: 5,//当前页显示数量
        totalPage: 0,//总页数
        totalData: 0,//总数据量
        data: [],//显示的数据
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
        }
    },
    actions: {
        addOrderMessage: async ({ commit, state }, payload) => {
            await addOrderMessageAsync(payload)
        },
        getOrderMessageByPage: async ({ commit, state }) => {
            const { data } = await getOrderMessageByPageAsync({ currentPage: state.currentPage, eachPage: state.eachPage })
            commit("getAllByPage", data)
        },
    }
}