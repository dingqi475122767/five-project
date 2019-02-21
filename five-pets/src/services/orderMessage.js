import request from "../utils/request";

//获取订单
export function getOrderMessageByPageAsync({currentPage = 1,eachPage = 5}={}){
    return request(`/orderMessage/getOrderMessageBypage?currentPage=${currentPage}&eachPage=${eachPage}`)
}

//新增订单
export function addOrderMessageAsync (data){
    return request("/orderMessage/addOrderMessage",{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
    })
}