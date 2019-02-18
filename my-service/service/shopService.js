const { addShop,getShop,getOne,getApplyShop,consentApply} = require('../Dao/shopDao');
//新增
module.exports.addShop = async function (shop) {
    return await addShop(shop);
}
//获取所有门店
module.exports.getShop = async function (shop) {
    return await getShop(shop);
}
//获取门店详情
module.exports.getOne = async function (shop) {
    return await getOne(shop);
}
//获取待审核门店
module.exports.getApplyShop = async function () {
    return await getApplyShop();
}
//通过审核
module.exports.consentApply = async function (consent) {
    return await consentApply(consent);
}