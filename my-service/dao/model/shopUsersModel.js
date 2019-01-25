const mongoose = require('mongoose');
// 定义数据结构
const shopUsersSchema = new mongoose.Schema({
    //账号
    username:String,
    //密码
    password:String,
    //账号状态
    state:String
})
// 通过数据结构来创建数据模型
mongoose.model("shopUsersModel", shopUsersSchema, "shopUsers");

module.exports.shopUsersModel = mongoose.model("shopUsersModel");