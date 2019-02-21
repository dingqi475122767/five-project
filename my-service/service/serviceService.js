const {addService,getAllByPage,updateService} =require('../dao/serviceDao');
//新增服务
module.exports.addService = async function(service){
    return await addService(service);
}
// 分页查询所有服务
module.exports.getAllByPage = async function(service){
    return await getAllByPage(service)
}
//修改服务
module.exports.updateService = async function(service){
    return await updateService(service);
}

