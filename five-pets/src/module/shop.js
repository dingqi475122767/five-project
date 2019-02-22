import { addShopAsync, getShop, getOneShop, getApplyShop, consentApply, updateShops, delShop, auditShopAsync, getAuditByPage } from '../services/shop'
export default ({
    namespaced: true,
    state: {
        shop: {
            shopUserID: "",
            shopName: "",
            address: "",
            phone: "",
            legalEntity: "",
            licence: "",
            licenceImg: "",
            gps: "",
            state: false
        },
        shops: [{
            shopUserID: "",
            shopName: "",
            address: "",
            phone: "",
            legalEntity: "",
            licence: "",
            licenceImg: "",
            gps: "",
            state: ''
        }],
        one: [{
            _id: "",
            shopUserID: "",
            shopName: "",
            address: "",
            phone: "",
            legalEntity: "",
            licence: "",
            licenceImg: "",
            gps: "",
            state: ''
        }],
        update: {
            _id: "",
            shopUserID: "",
            shopName: "",
            address: "",
            phone: "",
            legalEntity: "",
            licence: "",
            licenceImg: "",
            gps: "",
            state: ''
        },
        auditShop: {
            currentPage: 1, //当前页
            eachPage: 5, //每页显示条数
            totalNum: 0, //总数据
            totalPage: 0, //总页数
            data: [],
        },
    },
    mutations: {
        get: (state, payload) => {
            Object.assign({}, state.shop, state.shop.legalEntity = payload[0].username, state.shop.shopUserID = payload[0]._id)
        },
        getShops: (state, payload) => {
            Object.assign({}, state.shops, state.shops = payload)
        },
        getOneShop: (state, payload) => {
            Object.assign({}, state.one, state.one = payload)
        },
        updateShop: (state, payload) => {
            Object.assign({}, state.update, state.update = payload[0])
        },
        updateSp: (state, payload) => {
            Object.assign({}, state.update, state.update = payload)
        },
        //获取待审核用户
        getAuditByPage: (state, payload) => {
            Object.assign(state.auditShop, payload)
        },
        //设置待审核用户的当前页
        setAuditCurPage(state, payload) {
            state.auditShop.currentPage = payload
        },
        //设置待审核用户的每页显示条数
        setAuditEachPage(state, payload) {
            state.auditShop.eachPage = payload
        }
    },
    actions: {
        addShopAsync: async ({
            commit,
            dispatch
        }, payload) => {
            await addShopAsync(payload)
        },
        getShop: async ({
            commit,
            dispatch
        }, payload) => {
            const { data } = await getShop(payload)
            commit("getShops", data)
        },
        getOneShop: async ({
            commit,
            dispatch
        }, payload) => {
            const { data } = await getOneShop(payload)
            commit("getOneShop", data)
        },
        updateShopAsync: async ({
            commit,
            dispatch
        }, payload) => {
            const { data } = await getOneShop(payload)
            commit("updateShop", data)
        },
        updateShops: async ({
            commit,
            dispatch
        }, payload) => {
            await updateShops(payload)
        },
        delShop: async ({
            commit,
            dispatch
        }, payload) => {
            await delShop(payload)
        },
        updateSp: async ({
            commit,
            dispatch
        }, payload) => {
            commit("updateSp", payload)
        },
        getApplyShop: async ({
            commit,
            dispatch
        }, payload) => {
            const { data } = await getApplyShop(payload)
            commit("getShops", data)
        },
        consentApply: async ({
            commit,
            dispatch
        }, payload) => {
            await consentApply(payload)
            dispatch("getApplyShop")
        },
        //审核用户信息
        auditShopAsync: async ({ dispatch }, payload) => {
            await auditShopAsync(payload);
            dispatch("getAuditShopByPageAsync");
        },
        //获取待审核用户
        getAuditShopByPageAsync: async ({ commit, state }) => {
            const { currentPage, eachPage } = state.auditShop
            const { data } = await getAuditByPage({ currentPage, eachPage })
            commit("getAuditByPage", data)
        }
    }
})