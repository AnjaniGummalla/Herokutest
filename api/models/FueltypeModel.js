var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var FueltypeSchema = new mongoose.Schema({   
  
  Fuel_Type: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Background_Color:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
  Background_Color_name : {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
});

FueltypeSchema.plugin(timestamps);

mongoose.model('Fuel_Type', FueltypeSchema);

module.exports = mongoose.model('Fuel_Type');