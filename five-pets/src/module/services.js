import {addServiceAsync,getServiceByPageAsync,updateService,removeService} from '../services/service'
export default {
    namespaced: true,
    state: {
        currentPage: 1, //当前页
        eachPage: 5, //每页显示条数
        totalNum: 0, //总数据
        totalPage: 0, //总页数
        data: [],
        updateInfo:{}// 用于储存要修改的服务对象的信息
    },
    mutations: {
        getServiceByPage:(state,payload)=>{
            Object.assign(state,payload)
        },
        setCurPage:(state,currentPage)=>{
            state.currentPage = currentPage
        },
        setEachPage:(state,eachPage)=>{
            state.eachPage = eachPage
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
            const {data} = await getServiceByPageAsync({
                currentPage:state.currentPage,
                eachPage:state.eachPage,
                // shopID:JSON.parse(localStorage.getItem('shop'))[0]._id
            })
            commit('getServiceByPage',data)
        },
        addServiceAsync: async ({ commit, dispatch}, payload) => {
            await addServiceAsync(payload)
        },
        updateServiceAsync: async ({ dispatch }, payload) => {
            console.log(payload);
            await updateService(payload);
            dispatch("getServiceByPageAsync");
        },
        removeServiceAsync: async ({ dispatch }, { _id }) => {
            console.log("你是猪");
            await removeService({ _id });
            dispatch("getServiceByPageAsync");
          },
    }
}