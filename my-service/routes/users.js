var express = require('express');
var router = express.Router();

const { login, addUsers, isUsers, getAllByPage, updateUsers } = require("../service/usersService");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//平台登陆
router.post('/login', async function (req, res, next) {
  const isLogin = await login(req.body)
  //将登录的账号保存到服务端储存
  if (isLogin) {
    req.session.users = req.body
  }
  res.send(isLogin);
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

//是否登录
router.get('/isLogin', async function (req, res, next) {
  let user = req.session.users;
  if (user) {
    res.send(user);
  } else {
    res.send(false);
  }
})

//退出登录
router.get("/exit", async function (req,res,next) {
  req.session.users = '';
  res.send(true)
})

module.exports = router;
