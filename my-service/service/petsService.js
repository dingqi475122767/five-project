const {addPets,getPetsByPage,removePets,updatePets,getPetsByPageWX} =require('../dao/petsDao');
//新增
module.exports.addPets = async function(data){
    return await addPets(data);
}
//删除
module.exports.removePets = async function(data){
    return await removePets(data);
}
//分页获取
module.exports.getPetsByPage = async function(data){
    return await getPetsByPage(data);
}
// 微信小程序
module.exports.getPetsByPageWX = async function(data){
    return await getPetsByPageWX(data);
}
module.exports.updatePets = async function(data){
    return await updatePets(data);
}