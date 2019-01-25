const mongoose = require('mongoose');
// 定义数据结构
const goodsSchema = new mongoose.Schema({
    //门店用户关联
    shopUserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"shopUserModule"
    },
    //商品名
    goodsName:String,
    //商品类型
    goodsType:String,
    //适用规格(成犬,幼犬等)
    standard:String,
    //包装规格(1kg,5kg等)
    packaging:String,
    //价格
    price:Number,
    //商品图片
    goodsImg:String,
    //销量
    sales:Number
})
// 通过数据结构来创建数据模型
mongoose.model("goodsModel", goodsSchema, "goods");

module.exports.goodsModel = mongoose.model("goodsModel");