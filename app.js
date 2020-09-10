var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var CategoryRouter = require('./api/routes/index');
var UserRouter = require('./api/routes/Users.routes');
var Customer_VehicleRouter = require('./api/routes/CustomerVehicle.routes');
var Customer_LocationRouter = require('./api/routes/Customer_Location.routes');
var ToplevelCategoryRouter = require('./api/routes/TopLevelCategory.routes');
var SecondlevelCategoryRouter = require('./api/routes/SecondLevelcCategory.routes');
var ThirdlevelCategoryRouter = require('./api/routes/ThirdLevelCategory.routes');
var usersRouter = require('./api/routes/users');
var PartsRouter = require('./api/routes/Parts.routes');
const productRouter = require('./api/routes/products');
const dictionaryRouter = require('./api/routes/dictionary');
const cartRouter = require('./api/routes/carts');
const VehicletypeRouter = require('./api/routes/VehicleType.routes');
const VendorRouter = require('./api/routes/Vendor.routes');
const BrandRouter = require('./api/routes/Brand.routes');
const ClassRouter = require('./api/routes/Class.routes');
const GenerationRouter = require('./api/routes/Generation.routes');
const HomeBannerRouter = require('./api/routes/HomeBanner.routes');
const VehicleModelRouter = require('./api/routes/VehicleModel.routes');
const VacalaLocationRouter = require('./api/routes/VacalaLocation.routes');
const TrimRouter = require('./api/routes/Trim.routes');
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
app.use('/api/secondcategory', SecondlevelCategoryRouter);
app.use('/api/vehicletype', VehicletypeRouter);
app.use('/api/users', UserRouter);
app.use('/api/products', productRouter);
app.use('/api/dictionary', dictionaryRouter);
app.use('/api/cart', cartRouter);
app.use('/api/parts', PartsRouter);
app.use('/api/cusvehicle', Customer_VehicleRouter);
app.use('/api/vendor', VendorRouter);
app.use('/api/brand', BrandRouter);
app.use('/api/class', ClassRouter);
app.use('/api/generation', GenerationRouter);
app.use('/api/homebanner', HomeBannerRouter);
app.use('/api/vacalalocation', VacalaLocationRouter);
app.use('/api/userlocation', Customer_LocationRouter);
app.use('/api/vehiclemodel', VehicleModelRouter);
app.use('/api/trim', TrimRouter);
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