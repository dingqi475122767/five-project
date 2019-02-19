const { reg,login } = require("../dao/shopUsersDao");

//门店注册
module.exports.reg = async function (data) {
    return await reg(data);
}

//门店注册
module.exports.login = async function (data) {
    return await login(data);
}