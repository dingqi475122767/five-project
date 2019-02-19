import request from '../utils/request';

export function addServiceAsync({shopID,serviceName,servicePrice,serviceTiming,timeDay,timePoint,isDel} = {}){
    return request('/service/addService' , {  
        method: 'POST',  
        headers: {'Content-Type': 'application/json'},  
        body:JSON.stringify({shopID,serviceName,servicePrice,serviceTiming,timeDay,timePoint,isDel}),
      })
  }