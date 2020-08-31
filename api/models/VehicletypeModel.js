var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var VehicletypeSchema = new mongoose.Schema({   
  
  Vehicle_Type: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
});

VehicletypeSchema.plugin(timestamps);

mongoose.model('Vehicletype', VehicletypeSchema);

module.exports = mongoose.model('Vehicletype');