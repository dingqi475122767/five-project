import request from "../utils/request";

//获取订单
export function getOrderMessageByPageAsync({currentPage = 1,eachPage = 5,shopID}={}){
    return request(`/orderMessage/getOrderMessageBypage?currentPage=${currentPage}&eachPage=${eachPage}&shopID=${shopID}`)
}

//新增订单
export function addOrderMessageAsync (data){
    return request("/orderMessage/addOrderMessage",{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
}

//获取该用户下的门店信息
export function getShopByUsersAsync (data){
    return request("/shop/getShopByUsers",{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
}