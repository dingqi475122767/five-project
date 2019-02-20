import { addPets,getPetsByPage,removePets,update } from "../services/petService";
import {getAuditShopById} from "../services/shop"
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
            _id:"",
            shopID: "",
            petsName: "",  //宠物名字
            petsType: "",  //宠物类型
            petsPrice: "",  //宠物价额
            petsBirth: "",  //出生日期
            petsImg: "",    //宠物图片
        },
        shop:[]
    },
    mutations: {
        getPets: (state, {data}) => {
          state.petes =data
        },
        getShop:(state,payload)=>{
            state.shop = payload.data
        },
        setPet:(state,payload)=>{
           state.pet = payload;
        },
        setCurPage:(state,payload)=>{
            state.petes.currentPage = payload
        },
        setEachPage:(state,payload)=>{
            state.petes.eachPage = payload;
        },
    },
    actions: {
        addPetsAsync: async ({ commit }, { petsName, petsType, petsPrice, petsBirth, petsImg,shopID }) => {
            await addPets({
                petsName, petsType, petsPrice, petsBirth, petsImg,shopID
            })
        },
        getPetsByPageAsync:async ({commit,state})=>{
            let shop = await getAuditShopById( JSON.parse(localStorage.getItem("shopUsers"))[0]._id);
            let shopID =[];
            for(let item of shop.data){
                shopID.push(item._id)
            }
            let data = await getPetsByPage({
                currentPage:state.petes.currentPage,
                eachPage:state.petes.eachPage,
                shopID
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
        removeTrans:async({dispatch},_id)=>{
            await removePets({_id});
            dispatch("getPetsByPageAsync");
        },
        getShopsAsync:async ({commit})=>{
            let data = await getAuditShopById( JSON.parse(localStorage.getItem("shopUsers"))[0]._id);
            commit("getShop",data)
        },
        updateAsync:async ({commit,state})=>{
            await update({
                _id:state.pet._id,
                shopID: state.pet.shopID,
                petsName: state.pet.petsName,  
                petsType: state.pet.petsType,  
                petsPrice: state.pet.petsPrice, 
                petsBirth: state.pet.petsBirth,  
                petsImg: state.pet.petsImg,  
            })
        }
    }
}