const {addService} =require('../dao/serviceDao');
//新增服务
module.exports.addService = async function(service){
    return await addService(service);
}

