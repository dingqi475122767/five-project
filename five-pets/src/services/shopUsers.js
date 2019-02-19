import request from '../utils/request';

export function regAsync(data){
    return request("/shopUsers/reg",{  
        method: 'POST',  
        headers: {'Content-Type': 'application/json'},  
        body:JSON.stringify(data)
      })
}