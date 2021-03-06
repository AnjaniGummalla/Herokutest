var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
var AdminSchema = new mongoose.Schema({   
  
  Name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    
  User_Status:Boolean,

  Gender:{
        type: String,
        //required: true,
        trim: true,
        minlength: 1,
        maxlength: 80
    },

  Email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80,
        //unique: true
    },

  Password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  DOB: {
        type: String,
        //required: true,
    },
  
  Address: {
        type: String,
        //required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Phone: {
        type: Number,
        //required: true,
    },

  Profile_Pic: {
        type: String,
        //required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  OTP: {
        type: String,
        //required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

});

AdminSchema.plugin(timestamps);

mongoose.model('Admin', AdminSchema);

module.exports = mongoose.model('Admin');