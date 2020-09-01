var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema; 

var VendorLocationSchema = new mongoose.Schema({  

  Vendor_id:  {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
  Pincode : {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
  
  Vendor_Location: {
        type: { type: String },
        coordinates: []
    },
  State: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  lat: Number,

  long: Number,

  Location_Type: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
     Country: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Street : {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
  Near_By_Landmark : {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

});

VendorLocationSchema.plugin(timestamps);

mongoose.model('VendorLocation', VendorLocationSchema);

module.exports = mongoose.model('VendorLocation');

