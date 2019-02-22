const { shopUsersModel } = require('./model/shopUsersModel');

//门店注册
module.exports.reg = async function(data){
    return await shopUsersModel.create(data);
}

//门店登陆
module.exports.login = async function(data){
    return await shopUsersModel.find(data)
}


//验证平台用户是否重复
module.exports.isShopUsers = async function ({ username }) {
    return await shopUsersModel.find({ username });
}

// 分页查询所有服务
module.exports.getAllByPage = async function({currentPage,eachPage}){
    currentPage = currentPage - 0;
    eachPage = eachPage - 0;
    let totalNum = await shopUsersModel.countDocuments();//查询总条数
    let totalPage = Math.ceil(totalNum/eachPage);//获取总页数
    let data = await shopUsersModel
        .find()
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage)
    return {currentPage,eachPage,totalNum,totalPage,data}
}


// 修改用户信息
module.exports.updateShopUsers = async ({_id,username,password})=>{
    return await shopUsersModel.updateOne({_id},{username,password});
}


// 审核用户信息
module.exports.auditShopUsers = async ({_id,state})=>{
    return await shopUsersModel.updateOne({_id},{state});
}

//获取待审核用户
module.exports.getAuditByPage = async ({currentPage,eachPage})=>{
    currentPage = currentPage - 0;
    eachPage = eachPage - 0;
    let totalNum = await shopUsersModel.find({state:"waiting"}).countDocuments();//查询总条数
    let totalPage = Math.ceil(totalNum/eachPage);//获取总页数
    let data = await shopUsersModel
        .find({state:"waiting"})
        .skip((currentPage - 1) * eachPage)
        .limit(eachPage)
    return {currentPage,eachPage,totalNum,totalPage,data}
}