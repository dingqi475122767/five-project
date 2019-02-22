const { reg, login, isShopUsers, getAllByPage, updateShopUsers, auditShopUsers,getAuditByPage } = require("../dao/shopUsersDao");

//门店用户注册
module.exports.reg = async function (data) {
    return await reg(data);
}

//门店用户登录
module.exports.login = async function (data) {
    const state = await login(data);
    if (state.length !== 0) {
        return state;
    } else {
        return false;
    }
}

//验证门店账户是否重复
module.exports.isShopUsers = async function (data) {
    const state = await isShopUsers(data);
    // console.log(state)
    if (state.length !== 0) {
        return true
    } else {
        return false
    }
}


// 分页查询所有服务
module.exports.getAllByPage = async function (service) {
    return await getAllByPage(service)
}

// 修改用户信息
module.exports.updateShopUsers = async data => await updateShopUsers(data);

// 审核用户信息
module.exports.auditShopUsers = async data => await auditShopUsers(data);

//获取待审核用户
module.exports.getAuditByPage = async data => await getAuditByPage(data);