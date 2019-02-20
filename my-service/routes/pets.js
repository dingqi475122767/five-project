var express = require('express');
var router = express.Router();
const {addPets,getPetsByPage,removePets} = require('../service/petsService');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
const qnconfig = require('../config.js')
// 处理请求
router.get('/token', (req, res, next) => {
  // console.log(qnconfig.uploadToken)
  res.status(200).send(qnconfig.uploadToken)
})

//新增
router.post('/addPets',async function(req, res, next) {
 res.send(await addPets(req.body))
});
//删除
router.post('/removePets',async function(req, res, next) {
  res.send(await removePets(req.body))
 });
//分页获取
router.post('/getPetsByPage',async function(req, res, next) {
  res.send(await getPetsByPage(req.body));
 });


module.exports = router;