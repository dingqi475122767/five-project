import request from '../utils/request';

export function addShopAsync({shopName,address,phone,legalEntity,licence,licenceImg,gps,shopUserID,state} = {}){
  return request('/shop/addShop' , {  
      method: 'POST',  
      headers: {'Content-Type': 'application/json'},  
      body:JSON.stringify({shopName,address,phone,legalEntity,licence,licenceImg,gps,shopUserID,state}),
    })
}
export function getShop({shopUserID}={}) {
  return request(`/shop/getShop?shopUserID=${shopUserID}`);
}
export function getOneShop({_id} = {}){
  return request('/shop/getOne' , {  
    method: 'POST',  
    headers: {'Content-Type': 'application/json'},  
      body:JSON.stringify({_id}),
    })
}

export function getApplyShop() {
  return request(`/shop/getApplyShop`);
}
export function getAuditShopById(_id) {
  return request(`/shop/getAuditShopById?shopUserID=${_id}`);
}



export function consentApply({_id,state} = {}){
  return request('/shop/consentApply' , {  
    method: 'POST',  
    headers: {'Content-Type': 'application/json'},  
      body:JSON.stringify({_id,state}),
    })
}
export function updateShops({_id,shopName,address,phone,legalEntity,licence,licenceImg,gps,shopUserID,state} = {}){
  return request('/shop/updateShop' , {  
    method: 'POST',  
    headers: {'Content-Type': 'application/json'},  
      body:JSON.stringify({_id,shopName,address,phone,legalEntity,licence,licenceImg,gps,shopUserID,state}),
    })
}
export function delShop({_id} = {}){
  return request('/shop/delShop' , {  
    method: 'POST',  
    headers: {'Content-Type': 'application/json'},  
      body:JSON.stringify({_id}),
    })
}

//审核门店是否通过
export function auditShopAsync(data) {
  return request('/shop/auditShop', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

//获取待审核门店用户
export function getAuditByPage({ currentPage = 1, eachPage = 5 } = {}) {
  return request(`/shop/getAuditByPage?currentPage=${currentPage}&eachPage=${eachPage}`)
}