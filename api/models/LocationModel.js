var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
var LocationSchema = new mongoose.Schema({   
  
  Location_Name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Pincodes: {
        type: Array,
        required: true
    },
  
  Image: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Lat: Number,

  Long: Number,

  Display_Name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Disable: Boolean

});
LocationSchema.plugin(timestamps);

mongoose.model('Location', LocationSchema);

module.exports = mongoose.model('Location');