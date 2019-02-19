const {addGoods,getAllByPage} = require("../dao/goodsDao")
// 新增商品
module.exports.addGoods = async goods => await addGoods(goods);

// 分页查询所有商品
module.exports.getAllByPage = async input => await getAllByPage(input)
