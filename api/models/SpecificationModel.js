var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var SpecificationSchema = new mongoose.Schema({   
  
  Specification_Id: mongoose.Types.ObjectId(),
  
  Specification_Title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    }
});

SpecificationSchema.plugin(timestamps);

mongoose.model('Specification', SpecificationSchema);

module.exports = mongoose.model('Specification');