import {addShopAsync,getUsers_PT,getUsers_MD,isLogin,getShop,getOneShop,getApplyShop,consentApply} from '../services/shop'
export default ({
    namespaced: true,
    state: {
        shop: {
            shopUserID:"",
            shopName: "",
            address: "",
            phone: "",
            legalEntity: "",
            licence: "",
            licenceImg: "",
            gps: "",
            state:''
        },
        shops: [{
            shopUserID:"",
            shopName: "",
            address: "",
            phone: "",
            legalEntity: "",
            licence: "",
            licenceImg: "",
            gps: "",
            state:''
        }],
        one: [{
            shopUserID:"",
            shopName: "",
            address: "",
            phone: "",
            legalEntity: "",
            licence: "",
            licenceImg: "",
            gps: "",
            state:''
        }]
    },
    mutations: {
        get: (state, payload) => {
            Object.assign({},state.shop, state.shop.legalEntity=payload[0].username,state.shop.shopUserID=payload[0]._id)
        },
        getShops:(state,payload)=>{
            Object.assign({},state.shops,state.shops=payload)
        },
        getOneShop:(state,payload)=>{
            Object.assign({},state.one,state.one=payload)
        }
    },
    actions: {
        addShopAsync: async ({
            commit,
            dispatch
        }, payload) => {
            console.log(payload)
            await addShopAsync(payload)
            // dispatch('addShop')
        },
        getUsers_PT: async ({
            commit,
            dispatch
        }, payload) => {
            console.log(payload)
            const{data}=await getUsers_PT(payload)
            commit("get",data[0].username)
        },
        getUsers_MD: async ({
            commit,
            dispatch
        }, payload) => {
            const{data}=await getUsers_MD(payload)
            commit("get",data)
        },
        isLogin: async ({
            commit,
            dispatch
        }, payload) => {
            const{data}=await isLogin()
            dispatch("getUsers_MD",data)
        },
        getShop: async ({
            commit,
            dispatch
        }, payload) => {
            const{data}=await getShop(payload)
            commit("getShops",data)
        },
        getOneShop: async ({
            commit,
            dispatch
        }, payload) => {
            const{data}=await getOneShop(payload)
            commit("getOneShop",data)
        },
        getApplyShop: async ({
            commit,
            dispatch
        }, payload) => {
            const{data}=await getApplyShop(payload)
            commit("getShops",data)
        },
        consentApply: async ({
            commit,
            dispatch
        }, payload) => {
            await consentApply(payload)
            dispatch("getApplyShop")
        },
    }
})