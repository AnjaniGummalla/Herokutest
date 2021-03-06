var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;
var Customer_VehicleSchema = new mongoose.Schema({   
  
  Customer_id: {
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
        type: Schema.Types.ObjectId,
        ref: 'Vehicletype',
        required: true
    },

  Cus_Vehicle_Model: {
        type: Schema.Types.ObjectId,
        ref: 'Model',
        required: true
    },

  Cus_Vehicle_Brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },

  Cus_Vehicle_Trim: {
        type: Schema.Types.ObjectId,
        ref: 'Trim',
        required: true
    },
  
  Cus_Vehicle_Generation: {
        type: Schema.Types.ObjectId,
        ref: 'Generation',
        required: true
    },

});

Customer_VehicleSchema.plugin(timestamps);

mongoose.model('CustomerVehicle', Customer_VehicleSchema);

module.exports = mongoose.model('CustomerVehicle');