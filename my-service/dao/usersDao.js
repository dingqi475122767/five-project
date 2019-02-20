const { usersModel } = require('./model/usersModel');

//平台登陆
module.exports.login = async function (data) {
    return await usersModel.find(data)
}