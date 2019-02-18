var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//引入一级路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopRouter = require('./routes/shop');
var shopUsersRouter = require('./routes/shopUsers');
var petsRouter = require('./routes/pets');
var goodsRouter = require('./routes/goods');
var serviceRouter = require('./routes/service');
var orderMessageRouter = require('./routes/orderMessage');
var commentRouter = require('./routes/comment');

var app = express();

//引入mongoose
require("./dao/database")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//引入session服务端本地存储功能
const session = require('express-session')

//调用引入的服务端本地存储功能
app.use(session({
  secret: 'acv',
  resave: true,
  saveUninitialized: true
}))


//一级路由跳转标签
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shopUsers', shopUsersRouter);
app.use('/shop', shopRouter);
app.use('/pets', petsRouter);
app.use('/goods', goodsRouter);
app.use('/service', serviceRouter);
app.use('/orderMessage', orderMessageRouter);
app.use('/comment', commentRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
