import request from '../utils/request';

//门店注册
export function regAsync(data) {
  return request("/shopUsers/reg", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}

//门店登陆
export function loginAsync(data) {
  return request("/shopUsers/login", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}

//验证门店账户是否重复
export function isShopUsersAsync(data) {
  return request('/shopUsers/isShopUsers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

//查询翻页信息
export function getUsersByPageAsync({ currentPage = 1, eachPage = 5 }) {
  return request(`/shopUsers/getAllByPage?currentPage=${currentPage}&eachPage=${eachPage}`);
}

//修改用户信息
export function updateShopUsersAsync({_id,username,password} = {}){
  return request('/shopUsers/updateShopUsers' , {  
      method: 'POST',  
      headers: {'Content-Type': 'application/json'},  
      body:JSON.stringify({_id,username,password}),
    })
}

//审核门店用户是否通过
export function auditShopUsersAsync(data) {
  return request('/shopUsers/auditShopUsers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

//获取待审核门店用户
export function getAuditByPage({ currentPage = 1, eachPage = 5 } = {}) {
  return request(`/shopUsers/getAuditByPage?currentPage=${currentPage}&eachPage=${eachPage}`)
}

//验证是否登录
export function isLoginAsync(){
  return request("/shopUsers/isLogin");
}

//退出登录
export function exitAsync(){
  return request("/shopUsers/exit");
}