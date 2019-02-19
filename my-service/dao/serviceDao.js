const {serviceModel} = require('./model/serviceModel');

//新增服务
module.exports.addService = async function(service){
    return await serviceModel.create(service);
}