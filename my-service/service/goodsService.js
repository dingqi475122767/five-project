const {addGoods,getAllByPage,delGoods,updateGoods,getAllByPageWX} = require("../dao/goodsDao")
// 新增商品
module.exports.addGoods = async goods => await addGoods(goods);

// 分页查询所有商品
module.exports.getAllByPage = async input => await getAllByPage(input);

// 分页查询所有商品(微信小程序)
module.exports.getAllByPageWX = async input => await getAllByPageWX(input);

// 删除商品
module.exports.delGoods = async data => await delGoods(data);

// 修改商品信息
module.exports.updateGoods = async data => await updateGoods(data);
