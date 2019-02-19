const { reg } = require("../dao/shopUsersDao");

//门店注册
module.exports.reg = async function (data) {
    return await reg(data);
}