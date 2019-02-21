const { shopUsersModel } = require('./model/shopUsersModel');

//门店注册
module.exports.reg = async function(data){
    return await shopUsersModel.create(data);
}

//门店登陆
module.exports.login = async function(data){
    return await shopUsersModel.find(data)
}


//验证平台用户是否重复
module.exports.isShopUsers = async function ({ username }) {
    return await shopUsersModel.find({ username });
}