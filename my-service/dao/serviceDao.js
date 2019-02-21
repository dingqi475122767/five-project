const {serviceModel} = require('./model/serviceModel');

//新增服务
module.exports.addService = async function(service){
    return await serviceModel.create(service);
}
// 分页查询所有服务
module.exports.getAllByPage = async function({currentPage,eachPage}){
    currentPage = currentPage - 0;
    eachPage = eachPage - 0;
    let totalNum = await serviceModel.countDocuments();//查询总条数
    let totalPage = Math.ceil(totalNum/eachPage);//获取总页数
    let data = await serviceModel
        .find()
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage)
    return {currentPage,eachPage,totalNum,totalPage,data}
}

//修改服务
module.exports.updateService = async function(service){
    return await serviceModel.updateOne(service);
}
