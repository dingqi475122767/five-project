const {addPets} =require('../dao/petsDao');
//新增
module.exports.addPets = function(data){
    return await addPets(data);
}