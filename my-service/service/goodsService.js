const {addGoods,getAllByPage,delGoods,updateGoods} = require("../dao/goodsDao")
// 新增商品
module.exports.addGoods = async goods => await addGoods(goods);

// 分页查询所有商品
module.exports.getAllByPage = async input => await getAllByPage(input);

// 删除商品
module.exports.delGoods = async data => await delGoods(data);

// 修改商品信息
module.exports.updateGoods = async data => await updateGoods(data);
