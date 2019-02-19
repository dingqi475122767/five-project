const { addShop,getShop,getOne,getApplyShop,consentApply,updateShop,delShop} = require('../dao/shopDao');
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
//修改门店信息
module.exports.updateShop = async function (shop) {
    return await updateShop(shop);
}
//删除门店
module.exports.delShop = async function (shop) {
    return await delShop(shop);
}