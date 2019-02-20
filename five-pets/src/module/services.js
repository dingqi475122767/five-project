import {addServiceAsync,getServiceByPageAsync,updateService,removeService} from '../services/service'
export default {
    namespaced: true,
    state: {
        currentPage: 1, //当前页
        eachPage: 5, //每页显示条数
        totalNum: 0, //总数据
        totalPage: 0, //总页数
        data: []
        // //单个服务  增加一个服务名称时需要用到
        // service: [{
        //     shopID: '',
        //     serviceName: '', //服务名
        //     servicePrice: 60, //服务价格
        //     serviceTiming: 30, //服务时长
        //     // serviceSchedule: Number, //排期
        //     timeDay:'',//增加服务当天的日期
        //     timePoint:'',//增加服务的时间点
        //     isDel: false     //状态值 只有成功删除时状态值才会变成true
        // }],
        // //所有服务
        // services: [{
        //     shopID: '',
        //     serviceName: '', //服务名
        //     servicePrice: 60, //服务价格
        //     serviceTiming: 30, //服务时长
        //     // serviceSchedule: Number, //排期
        //     timeDay:'',//增加服务当天的日期
        //     timePoint:'',//增加服务的时间点
        //     isDel: false   //状态值
        // }],
        // //查询某个服务
        // searchService: [{
        //     shopID: '',
        //     serviceName: '', //服务名
        //     servicePrice: 60, //服务价格
        //     serviceTiming: 30, //服务时长
        //     // serviceSchedule: Number, //排期
        //     timeDay:'',//增加服务当天的日期
        //     timePoint:'',//增加服务的时间点
        //     isDel: false  //状态值
        // }]
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
        }

    },
    actions: {
        getServiceByPageAsync:async ({commit,state})=>{
            const {data} = await getServiceByPageAsync({
                currentPage:state.currentPage,
                eachPage:state.eachPage
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
        removeStudentAsync: async ({ dispatch }, { _id }) => {
            await removeService({ _id });
            dispatch("getServiceByPageAsync");
          },
    }
}