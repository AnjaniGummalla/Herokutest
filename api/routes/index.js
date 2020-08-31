var express = require('express');
var router = express.Router();
var CategoryModel = require('../models/ToplevelCategoryModel');
 
//var Authtoken = require('./TokenVerification');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/datalist', async function(req, res, next) {
  var datalist = await CategoryModel.find({});
  res.json({msg:"list",Data : datalist})
});
router.post('/create',async function(req, res, next) {
	let Data = {
		Category_Title: "Breaks",
		Thumbnail_Path: "Path of the Image",
		Large_Image_Path: "Path of the Image",
			}
			var createdata = await CategoryModel.create(Data);
			res.json({Msgs:"Sucess",Data: createdata})
  
});
module.exports = router;
