var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema; 

var SparesVendorSchema = new mongoose.Schema({  

  Name:  {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
  Email : {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
  Primary_Contact : {
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 15
    },
  Secondary_Contact : {
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 15
    },
  Pan_No : {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
  Pan_File : {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
  Aadhar : {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
  Aadhar_File : {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
  Address : {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
     City: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Pincode: {
        type: Array,
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

  Country: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

GST_Number:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

});

SparesVendorSchema.plugin(timestamps);

mongoose.model('SparesVendor', SparesVendorSchema);

module.exports = mongoose.model('SparesVendor');

