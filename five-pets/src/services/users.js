import request from '../utils/request';

//平台登陆
export function logAsync(data) {
  // console.log(data)
  return request("/users/login", {  //  "/users/login"是三层架构的第一层，login是二级路径
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}

//新增平台管理用户
export function addUsersAsync(data) {
  return request('/users/addUsers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

//验证平台账户是否重复
export function isUsersAsync(data) {
  return request('/users/isUsers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
}

//查询翻页信息
export function getUsersByPageAsync({currentPage=1,eachPage=5}){
  return request(`/users/getAllByPage?currentPage=${currentPage}&eachPage=${eachPage}`);
}

//修改用户信息
export function updateUsersAsync({_id,username,password} = {}){
  return request('/users/updateUsers' , {  
      method: 'POST',  
      headers: {'Content-Type': 'application/json'},  
      body:JSON.stringify({_id,username,password}),
    })
}