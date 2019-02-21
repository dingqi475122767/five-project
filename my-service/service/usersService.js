const { login, addUsers, isUsers } = require("../dao/usersDao");

//平台登陆
module.exports.login = async function (data) {
    const state = await login(data);
    if (state.length !== 0) {
        return state
    } else {
        return false
    }
}

//新增平台管理
module.exports.addUsers = async function (data) {
    const state = await addUsers(data);
    if (state.length !== 0) {
        return state
    } else {
        return false
    }
}

//验证平台账户是否重复
module.exports.isUsers = async function (data) {
    const state = await isUsers(data);
    if (state.length !== 0) {
        return true
    } else {
        return false
    }
}