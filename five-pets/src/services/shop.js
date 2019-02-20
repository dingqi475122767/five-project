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