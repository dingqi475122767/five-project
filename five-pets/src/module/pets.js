import { addPets,getPetsByPage } from "../services/petService"
export default {
    namespaced: true,
    state: {
        petes: {
            currentPage: 1,  //当前页
            eachPage: 5,   //每页显示条数
            total: 0,      //总数据
            data: [],
            totalPage: 0   //总页数
        },
        pet: {
            shopID: "",
            petsName: "",  //宠物名字
            petsType: "",  //宠物类型
            petsPrice: "",  //宠物价额
            petsBirth: "",  //出生日期
            petsImg: "",    //宠物图片
        }
    },
    mutations: {
        getPets: (state, {data}) => {
          state.petes =data
        },
        setCurPage:(state,payload)=>{
            state.petes.currentPage = payload
        },
        setEachPage:(state,payload)=>{
            state.petes.eachPage = payload;
        },
    },
    actions: {
        addPetsAsync: async ({ commit }, { petsName, petsType, petsPrice, petsBirth, petsImg }) => {
            await addPets({
                petsName, petsType, petsPrice, petsBirth, petsImg
            })
        },
        getPetsByPageAsync:async ({commit,state})=>{
            let data = await getPetsByPage({
                currentPage:state.petes.currentPage,
                eachPage:state.petes.eachPage,
            });
            commit("getPets",data)
        },
        setCurPageTrans:async ({commit,dispatch},currentPage)=>{
            commit("setCurPage",currentPage);
            dispatch("getPetsByPageAsync");
        },
        setEachPageTrans:async ({commit,dispatch},eachPage)=>{
            commit("setEachPage",eachPage);
            dispatch("getPetsByPageAsync");
        },
    }
}