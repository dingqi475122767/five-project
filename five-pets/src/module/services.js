import {addServiceAsync} from '../services/service'
export default {
    namespaced: true,
    state: {
        //单个服务  增加一个服务名称时需要用到
        service: [{
            shopID: '',
            serviceName: '', //服务名
            servicePrice: 60, //服务价格
            serviceTiming: 30, //服务时长
            // serviceSchedule: Number, //排期
            timeDay:'',//增加服务当天的日期
            timePoint:'',//增加服务的时间点
            isDel: false     //状态值 只有成功删除时状态值才会变成true
        }],
        //所有服务
        services: [{
            shopID: '',
            serviceName: '', //服务名
            servicePrice: 60, //服务价格
            serviceTiming: 30, //服务时长
            // serviceSchedule: Number, //排期
            timeDay:'',//增加服务当天的日期
            timePoint:'',//增加服务的时间点
            isDel: false   //状态值
        }],
        //查询某个服务
        searchService: [{
            shopID: '',
            serviceName: '', //服务名
            servicePrice: 60, //服务价格
            serviceTiming: 30, //服务时长
            // serviceSchedule: Number, //排期
            timeDay:'',//增加服务当天的日期
            timePoint:'',//增加服务的时间点
            isDel: false  //状态值
        }]
    },
    mutations: {

    },
    actions: {
        addServiceAsync: async ({ commit, dispatch}, payload) => {
            console.log('222')
            await addServiceAsync(payload)
        },
    }
}