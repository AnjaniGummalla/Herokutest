var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var ClassSchema = new mongoose.Schema({   
  
  //Class_Id: mongoose.Types.ObjectId(),
  
  Class_Name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
   Vehicle_Type: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicletype',
        required: true
    },
   Vehicle_CC:{
        type: Number,
        required: false,
        trim: true,
        minlength: 3,
        maxlength: 80,
        default: 0
    }

});

ClassSchema.plugin(timestamps);

mongoose.model('Class', ClassSchema);

module.exports = mongoose.model('Class');