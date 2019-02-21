import request from '../utils/request';

export function addServiceAsync({shopID,serviceName,servicePrice,serviceTiming,timeDay,timePoint,isDel} = {}){
    return request('/service/addService' , {  
        method: 'POST',  
        headers: {'Content-Type': 'application/json'},  
        body:JSON.stringify({shopID,serviceName,servicePrice,serviceTiming,timeDay,timePoint,isDel}),
      })
  }

//   export function getServiceByPageAsync({currentPage=1,eachPage=5,shopID}){
//     return request(`/service/getAllByPage?currentPage=${currentPage}&eachPage=${eachPage}&shopID=${shopID}`);
// }
export function getServiceByPageAsync({currentPage,eachPage,shopID} = {}){
  return request('/service/getAllByPage' , {  
      method: 'POST',  
      headers: {'Content-Type': 'application/json'},  
      body:JSON.stringify({currentPage,eachPage,shopID}),
    })
}



export function updateService({_id,shopID,serviceName,servicePrice,serviceTiming,timeDay,timePoint,isDel} = {}){
  return request('/service/updateService' , {  
      method: 'POST',  
      headers: {'Content-Type': 'application/json'},  
      body:JSON.stringify({_id,shopID,serviceName,servicePrice,serviceTiming,timeDay,timePoint,isDel}),
    })
}

export function removeService(_id) {
  return request("/service/removeService", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id })
  });
}