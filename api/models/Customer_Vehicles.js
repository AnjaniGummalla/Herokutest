var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
var Customer_VehicleSchema = new mongoose.Schema({   
  
  Customer_Id: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Cus_Vehicle_Number:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Cus_Vehicle_Type:{
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 80
    },

  Cus_Vehicle_Model: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80,
        unique: true
    },

  Cus_Vehicle_Brand: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Cus_Vehicle_Trim: {
        type: String,
        required: true,
    },
  
  Cus_Vehicle_Generation: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

});

Customer_VehicleSchema.plugin(timestamps);

mongoose.model('CustomerVehicle', Customer_VehicleSchema);

module.exports = mongoose.model('CustomerVehicle');