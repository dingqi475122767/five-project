const { petsModel } = require('./model/petsModel');
//新增
module.exports.addPets = async function (data) {
return await petsModel.create(data);
}