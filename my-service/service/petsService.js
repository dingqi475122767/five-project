const {addPets,getPetsByPage} =require('../dao/petsDao');
//新增
module.exports.addPets = async function(data){
    return await addPets(data);
}
//分页获取
module.exports.getPetsByPage = async function(data){
    return await getPetsByPage(data);
}