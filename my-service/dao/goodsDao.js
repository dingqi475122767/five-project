const {goodsModel} = require('./model/goodsModel');

// 新增商品
module.exports.addGoods = async function(goods){
    return await goodsModel.create(goods)
}

// 分页查询所有商品，只显示isDel属性值为false的商品
module.exports.getAllByPage = async function({currentPage,eachPage}){
    currentPage = currentPage - 0;
    eachPage = eachPage - 0;
    let totalNum = await goodsModel.find({isDel:false}).countDocuments();//查询总条数
    let totalPage = Math.ceil(totalNum/eachPage);//获取总页数
    let data = await goodsModel
        .find({isDel:false})
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage)

    return {currentPage,eachPage,totalNum,totalPage,data}
}

// 删除商品，将商品的isDel属性修改为true，表示已经删除，页面上不再显示
module.exports.delGoods = async ({_id,isDel}) => await goodsModel.updateOne({_id},{isDel:!isDel})

// 修改商品信息
module.exports.updateGoods = async ({_id,goodsName,goodsType,standard,packaging,price})=>{
    return await goodsModel.updateOne({_id},{goodsName,goodsType,standard,packaging,price})
}