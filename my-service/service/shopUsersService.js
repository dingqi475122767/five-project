const { reg, login,isShopUsers } = require("../dao/shopUsersDao");

//门店用户注册
module.exports.reg = async function (data) {
    return await reg(data);
}

//门店用户登录
module.exports.login = async function (data) {
    const state = await login(data);
    if(state.length!==0){
        return state;
    }else{
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