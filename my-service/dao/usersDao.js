const { usersModel } = require('./model/usersModel');

//平台登陆
module.exports.login = async function (data) {
    return await usersModel.find(data)
}

//新增门店管理用户
module.exports.addUsers = async function (data) {
    return await usersModel.create(data);
}

//验证平台用户是否重复
module.exports.isUsers = async function ({ username }) {
    return await usersModel.find({ username });
}