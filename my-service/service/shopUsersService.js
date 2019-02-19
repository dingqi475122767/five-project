const { reg, login } = require("../dao/shopUsersDao");

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