const mongoose = require('mongoose');
// 定义数据结构
const orderMessageSchema = new mongoose.Schema({
    //与门店关联
    shopID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"shopModule"
    },
    //与商品关联
    goodsID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"goodsModule"
    },
    //订单总价
    totalPrice:Number,
    //下单时间
    orderTime:String
})
// 通过数据结构来创建数据模型
mongoose.model("orderMessageModel", orderMessageSchema, "orderMessage");

module.exports.orderMessageModel = mongoose.model("orderMessageModel");