var express = require('express');
var router = express.Router();

const { login, addUsers, isUsers, getAllByPage, updateUsers } = require("../service/usersService");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//平台登陆
router.post('/login', async function (req, res, next) {
  let option = await login(req.body)
  console.log(option)
  res.send(option);

});

//新增平台管理
router.post('/addUsers', async function (req, res, next) {
  // console.log(req.body)
  res.send(await addUsers(req.body));
});


//验证平台用户是否重复
router.post('/isUsers', async function (req, res, next) {
  // console.log(req.body)
  res.send(await isUsers(req.body));
});

// 分页查询服务
router.get('/getAllByPage', async function (req, res, next) {
  res.send(await getAllByPage(req.query))
});

//修改用户信息
router.post('/updateUsers', async function (req, res, next) {
  res.send(await updateUsers(req.body))
})

module.exports = router;
