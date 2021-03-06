import request from "../utils/request";
export function addPets({petsName,petsType,petsPrice,petsBirth,petsImg,shopID} = {}){
    return request('/pets/addPets' , {  
        method: 'POST',  
        headers: {'Content-Type': 'application/json'},  
        body:JSON.stringify({petsName,petsType,petsPrice,petsBirth,petsImg,shopID}),
      })
  };
  export function getPetsByPage({currentPage,eachPage,shopID} = {}){
    return request('/pets/getPetsByPage' , {  
        method: 'POST',  
        headers: {'Content-Type': 'application/json'},  
        body:JSON.stringify({currentPage,eachPage,shopID}),
      })
  }

  //删除
  export function removePets({_id} = {}){
    return request('/pets/removePets' , {  
        method: 'POST',  
        headers: {'Content-Type': 'application/json'},  
        body:JSON.stringify({_id}),
      })
  };

  export function update({_id,shopID,petsName,petsType,petsPrice,petsBirth,petsImg} = {}){
    return request('/pets/update' , {  
        method: 'POST',  
        headers: {'Content-Type': 'application/json'},  
        body:JSON.stringify({_id,shopID,petsName,petsType,petsPrice,petsBirth,petsImg}),
      })
  };
