const { petsModel } = require('./model/petsModel');

//新增
module.exports.addPets = async function (data) {
    return await petsModel.create(data);
}
//删除
module.exports.removePets = async function ({_id}) {
    return await petsModel.deleteOne({_id});
}
//分页获取
module.exports.getPetsByPage = async function ({ shopId, currentPage, eachPage }) {
    currentPage = currentPage - 0;
    eachPage = eachPage - 0;
    let all = await petsModel.find({shopID:{$in:shopId}});
    let totalPage =  Math.ceil(all.length/eachPage);
    let data = await petsModel.find()   //{shopID:{$in:shopId}}
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage)
    return {currentPage,eachPage,data,total:all.length,totalPage};
}