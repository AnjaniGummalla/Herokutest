var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var OriginSchema = new mongoose.Schema({   
  
  Origin_Id: mongoose.Types.ObjectId(),
  
  Origin_title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    }
});

OriginSchema.plugin(timestamps);

mongoose.model('Origin', OriginSchema);

module.exports = mongoose.model('Origin');