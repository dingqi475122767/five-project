import {addServiceAsync,getServiceByPageAsync,updateService,removeService} from '../services/service'
import {getAuditShopById} from "../services/shop"

export default {
    namespaced: true,
    // state: {
    //     currentPage: 1, //当前页
    //     eachPage: 5, //每页显示条数
    //     totalNum: 0, //总数据
    //     totalPage: 0, //总页数
    //     data: [],
    //     updateInfo:{}// 用于储存要修改的服务对象的信息
    // },
    state: {
       service:{
             currentPage: 1, //当前页
             eachPage: 5, //每页显示条数
             totalNum: 0, //总数据
             totalPage: 0, //总页数
             data: [],
         },
       updateInfo:{},// 用于储存要修改的服务对象的信息
       shop:[]
    },
    mutations: {
        // getServiceByPage:(state,payload)=>{
        //     Object.assign(state,payload)
        // },
        getServiceByPage: (state, data) => {
            state.service =data
            console.log(data);
        },
        getShop:(state,payload)=>{
            state.shop = payload.data
        },
        setCurPage:(state,currentPage)=>{
            state.service.currentPage = currentPage
        },
        setEachPage:(state,eachPage)=>{
            state.service.eachPage = eachPage
        },
          // 将服务信息保存到sessionStorage中
        setServiceInfo:(state,service)=>{
            sessionStorage.serviceInfo = JSON.stringify(service)
        },
        // 从sessionStorage中获取服务信息
        getServiceInfo:(state)=>{
            state.updateInfo = JSON.parse(sessionStorage.serviceInfo)
        }

    },
    actions: {
        getServiceByPageAsync:async ({commit,state})=>{
            let shop = await getAuditShopById( JSON.parse(localStorage.getItem("shopUsers"))[0]._id);
            let shopID =[];
            for(let item of shop.data){
                shopID.push(item._id)
            }
            const {data} = await getServiceByPageAsync({
                currentPage:state.service.currentPage,
                eachPage:state.service.eachPage,
                shopID
            })
            commit('getServiceByPage',data)
        },
        addServiceAsync: async ({ commit, dispatch}, payload) => {
            await addServiceAsync(payload)
        },
        getShopsAsync:async ({commit})=>{
            let data = await getAuditShopById( JSON.parse(localStorage.getItem("shopUsers"))[0]._id);
            commit("getShop",data)
        },
        updateServiceAsync: async ({ dispatch }, payload) => {
            console.log(payload);
            await updateService(payload);
            dispatch("getServiceByPageAsync");
        },
        removeServiceAsync: async ({ dispatch }, _id) => {
            console.log("你是猪");
            await removeService(_id);
            dispatch("getServiceByPageAsync");
          },
    }
}