var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var ClassSchema = new mongoose.Schema({   
  
  Class_Id: mongoose.Types.ObjectId(),
  
  Class_Name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    }
});

ClassSchema.plugin(timestamps);

mongoose.model('Class', ClassSchema);

module.exports = mongoose.model('Class');