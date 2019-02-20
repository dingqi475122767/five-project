import {addShopAsync,getShop,getOneShop,getApplyShop,consentApply,updateShops,delShop} from '../services/shop'
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
            state:false
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
            _id:"",
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
        update: {
            _id:"",
            shopUserID:"",
            shopName: "",
            address: "",
            phone: "",
            legalEntity: "",
            licence: "",
            licenceImg: "",
            gps: "",
            state:''
        }
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
        },
        updateShop:(state,payload)=>{
            Object.assign({},state.update,state.update=payload[0])
        },
        updateSp:(state,payload)=>{
            Object.assign({},state.update,state.update=payload)
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
        updateShopAsync: async ({
            commit,
            dispatch
        }, payload) => {
            const{data}=await getOneShop(payload)
            commit("updateShop",data)
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
            commit("updateSp",payload)
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