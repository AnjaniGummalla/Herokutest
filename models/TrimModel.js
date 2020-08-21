var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var TrimSchema = new mongoose.Schema({   
  
  Trim_Id: mongoose.Types.ObjectId(),
  
  Trim_Name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    Model_Id:{
        type: Schema.Types.ObjectId,
        ref: 'Model',
        required: true
    },
    Brand_Id:{
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: true
    },

});

TrimSchema.plugin(timestamps);

mongoose.model('Trim', TrimSchema);

module.exports = mongoose.model('Trim');