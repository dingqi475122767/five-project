import {getGoodsByPageAsync,addGoods} from '../services/goods';

export default ({
    namespaced:true,
    state: {
        currentPage: 1, //当前页
        eachPage: 10, //每页显示条数
        totalNum: 0, //总数据
        totalPage: 0, //总页数
        data: []
    },
    mutations:{
        getGoodsByPage:(state,payload)=>{
            Object.assign(state,payload)
        },
        setCurPage:(state,currentPage)=>{
            state.currentPage = currentPage
        },
        setEachPage:(state,eachPage)=>{
            state.eachPage = eachPage
        }

    },
    actions:{
        getGoodsByPageAsync:async ({commit,state})=>{
            const {data} = await getGoodsByPageAsync({
                currentPage:state.currentPage,
                eachPage:state.eachPage
            })
            commit('getGoodsByPage',data)
        },
        addGoodsAsync:async ({dispatch},payload)=>{
            await addGoods(payload);
            dispatch("getGoodsByPageAsync")
        }

        
    }
})