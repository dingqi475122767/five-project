const { shopUsersModel } = require('./model/shopUsersModel');

//门店注册
module.exports.reg = async function(data){
    return await shopUsersModel.create(data);
}

module.exports.login = async function(data){
    return await shopUsersModel.find(data)
}
