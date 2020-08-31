var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var CategoryRouter = require('./api/routes/index');
var ToplevelCategoryRouter = require('./api/routes/toplevelcategory');
var SecondlevelCategoryRouter = require('./api/routes/secondlevelcategory');
var ThirdlevelCategoryRouter = require('./api/routes/thirdlevelcategory');
var usersRouter = require('./api/routes/users');
var PartsRouter = require('./api/routes/parts');
const productRoute = require('./api/routes/products');
const dictionaryRoute = require('./api/routes/dictionary');
const cartRoute = require('./api/routes/carts');
const VehicletypeRoute = require('./api/routes/vehicletype');
var app = express();
//DB connection
const Mongoose = require("./databases/dbconnection");
Mongoose();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/topcategory', ToplevelCategoryRouter);
app.use('/api/vehicletype', VehicletypeRoute);
app.use('/users', usersRouter);
app.use('/api/products', productRoute);
app.use('/api/dictionary', dictionaryRoute);
app.use('/api/cart', cartRoute);
app.use('/api/parts', PartsRouter);

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