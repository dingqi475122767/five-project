var express = require('express');
var router = express.Router();

const { login } = require("../service/usersService");

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

module.exports = router;
