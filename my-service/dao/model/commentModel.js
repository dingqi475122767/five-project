const mongoose = require('mongoose');
// 定义数据结构
const commentSchema = new mongoose.Schema({
    //订单关联
    orderMessageID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"orderMessageModule"
    }
})
// 通过数据结构来创建数据模型
mongoose.model("commentModel", commentSchema, "comment");

module.exports.commentModel = mongoose.model("commentModel");