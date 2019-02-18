const {shopModel} = require('./model/shopModel');
//新增
module.exports.addShop = async function(shop){
    return await shopModel.create(shop);
}
//获取所有门店
module.exports.getShop = async function(shop){
    return await shopModel.find(shop);
}
//获取门店详情
module.exports.getOne = async function(shop){
    return await shopModel.find(shop);
}
//获取待审核门店
module.exports.getApplyShop = async function(){
    let data = await shopModel.find().or([{
        state: false
    }])
    return data
}
//通过审核
module.exports.consentApply = async function({_id,state}){
    return await shopModel.updateOne({_id}, {state})
}