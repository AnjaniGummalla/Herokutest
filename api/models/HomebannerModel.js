var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var HomebannerSchema = new mongoose.Schema({   
  
  Homebanner_Image: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Desc: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Status: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Date:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Time:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

});
HomebannerSchema.plugin(timestamps);

mongoose.model('Homebanner', HomebannerSchema);

module.exports = mongoose.model('Homebanner');