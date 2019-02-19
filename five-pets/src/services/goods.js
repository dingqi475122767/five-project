import request from '../utils/request'


export function getGoodsByPageAsync({currentPage=1,eachPage=5}){
    return request(`/goods/getAllByPage?currentPage=${currentPage}&eachPage=${eachPage}`);
}


export function addGoods({goodsName,goodsType,standard,packaging,price,goodsImg,sales,isDel}){
    return request('/goods/addGoods',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({goodsName,goodsType,standard,packaging,price,goodsImg,sales,isDel})
    })
}