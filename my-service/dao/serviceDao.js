const {serviceModel} = require('./model/serviceModel');

//新增服务
module.exports.addService = async function(service){
    return await serviceModel.create(service);
}

//分页查询所有状态值为false,绑定有shopID的服务
module.exports.getAllByPage = async function({currentPage,eachPage,shopID}){
    currentPage = currentPage - 0;
    eachPage = eachPage - 0;
    let totalNum = await serviceModel.find({isDel:false, shopID: { $in: shopID }}).countDocuments();//查询总条数
    let totalPage = Math.ceil(totalNum/eachPage);//获取总页数
    let data = await serviceModel
    .find({isDel:false, shopID: { $in: shopID }})
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage)
        .populate("shopID")
    return {currentPage,eachPage,totalNum,totalPage,data}
}

//分页查询所有状态值为false,绑定有shopID的服务
module.exports.getAllByPageWX = async function({currentPage,eachPage}){
    currentPage = currentPage - 0;
    eachPage = eachPage - 0;
    let totalNum = await serviceModel.find({isDel:false}).countDocuments();//查询总条数
    let totalPage = Math.ceil(totalNum/eachPage);//获取总页数
    let data = await serviceModel
    .find({isDel:false})
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage)
        .populate("shopID")
    return {currentPage,eachPage,totalNum,totalPage,data}
}

//修改服务
module.exports.updateService = async ({_id,shopID,serviceName,servicePrice,serviceTiming,serviceImg,timeDay,timePoint,isDel})=>{
    return await serviceModel.updateOne({_id},{shopID,serviceName,servicePrice,serviceTiming,serviceImg,timeDay,timePoint,isDel});
}

// 删除服务，实际只是将服务的状态值isDel修改为true 
// module.exports.removeService = async ({_id,isDel}) => await serviceModel.updateOne({_id},{isDel:!isDel})

module.exports.removeService = async function({_id,isDel}){
    console.log(_id,isDel);
    return await serviceModel.updateOne({_id},{isDel:!isDel})
}