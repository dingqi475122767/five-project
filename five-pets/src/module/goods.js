import {getGoodsByPageAsync,addGoods,delGoodes,updateGoods} from '../services/goods';

export default ({
    namespaced:true,
    state: {
        currentPage: 1, //当前页
        eachPage: 10, //每页显示条数
        totalNum: 0, //总数据
        totalPage: 0, //总页数
        data: [],
        updateInfo:{}// 用于储存要修改对象的信息
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
        },

        // 将商品信息保存到sessionStorage中
        setGoodsInfo:(state,goods)=>{
            sessionStorage.goodsInfo = JSON.stringify(goods)
        },
        // 从sessionStorage中获取商品信息
        getGoodsInfo:(state)=>{
            state.updateInfo = JSON.parse(sessionStorage.goodsInfo)
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
        },
        delGoodsAsync:async ({dispatch},_id)=>{
            await delGoodes(_id);
            dispatch('getGoodsByPageAsync')
        },
        updateGoodsAsync:async ({dispatch},{_id,goodsName,goodsType,standard,packaging,price})=>{
            await updateGoods({_id,goodsName,goodsType,standard,packaging,price});
            dispatch('getGoodsByPageAsync')
        }
    }
})