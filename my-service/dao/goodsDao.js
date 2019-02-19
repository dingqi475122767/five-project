const {goodsModel} = require('./model/goodsModel');

// 新增商品
module.exports.addGoods = async function(goods){
    return await goodsModel.create(goods)
}

// 分页查询所有商品
module.exports.getAllByPage = async function({currentPage,eachPage}){
    currentPage = currentPage - 0;
    eachPage = eachPage - 0;
    // let totalNum = await stuModels.countDocuments();// 总条数
    // let totalPage = Math.ceil(totalNum / countItem); // 总页数
    // let data = await stuModels
    //     .find() // 查询所有数据
    //     .populate('classId')//联表查询
    //     .skip((currentPage - 1) * countItem) // 需要跳过的记录数
    //     .limit(countItem) // 限制每次查询的记录数
    // return { currentPage, countItem, totalNum, totalPage, data }

    let totalNum = await goodsModel.countDocuments();//查询总条数
    let totalPage = Math.ceil(totalNum/eachPage);//获取总页数
    let data = await goodsModel
        .find()
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage)

    return {currentPage,eachPage,totalNum,totalPage,data}
        

}