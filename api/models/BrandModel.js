var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var BrandSchema = new mongoose.Schema({   
  
  Brand_Id: mongoose.Types.ObjectId(),
  
  Brand_Name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
  Brand_Logo_Path: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    } 
});

BrandSchema.plugin(timestamps);

mongoose.model('Brand', BrandSchema);

module.exports = mongoose.model('Brand');