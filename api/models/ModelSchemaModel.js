var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var ModelSchema = new mongoose.Schema({   
  
  //Model_Id: mongoose.Types.ObjectId(),
  
  Model_Name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    Brand_Id:{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },
    Class_Id:{
        type: Schema.Types.ObjectId,
        ref: 'Class',
        required: true
    },
    Model_Image_Path:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

});

ModelSchema.plugin(timestamps);

mongoose.model('Model', ModelSchema);

module.exports = mongoose.model('Model');