import request from '../utils/request'

// 分页查询商品数据
export function getGoodsByPageAsync({currentPage=1,eachPage=5,shopUserID}){
    return request(`/goods/getAllByPageWX?currentPage=${currentPage}&eachPage=${eachPage}&shopUserID=${shopUserID}`);
}

// 添加商品
export function addGoods({shopUserID,goodsName,goodsType,standard,packaging,price,goodsImg,sales,isDel}){
    return request('/goods/addGoods',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({shopUserID,goodsName,goodsType,standard,packaging,price,goodsImg,sales,isDel})
    })
}

// 删除商品
export function delGoodes(_id){
    return request('/goods/delGoods',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({_id})
    })
}

// 修改商品信息
export function updateGoods({_id,goodsName,goodsType,standard,packaging,price}){
    return request('/goods/updateGoods',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({_id,goodsName,goodsType,standard,packaging,price})
    })
}