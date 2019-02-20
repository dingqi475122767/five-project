import request from '../utils/request';

//平台登陆
export function logAsync(data){
  // console.log(data)
    return request("/users/login",{  //  "/users/login"是三层架构的第一层，login是二级路径
        method: 'POST',  
        headers: {'Content-Type': 'application/json'},  
        body:JSON.stringify(data)
      })
}