const { login } = require("../dao/usersDao");

//平台登陆
module.exports.login = async function (data) {
    const state = await login(data);
    if (state.length !== 0) {
        return state
    } else {
        return false
    }
}