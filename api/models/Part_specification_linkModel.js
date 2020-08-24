var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var Part_specification_linkSchema = new mongoose.Schema({   
  
 Specification_Link_Id: mongoose.Types.ObjectId(),

  Part_Id: {
        type: Schema.Types.ObjectId,
        ref: 'Parts',
        required: true
    },
  Part_Number: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    Part_specification_Id: {
        type: Schema.Types.ObjectId,
        ref: 'Specification',
        required: true
    },
});

Part_specification_linkSchema.plugin(timestamps);

mongoose.model('Part_Replacement', Part_specification_linkSchema);

module.exports = mongoose.model('Part_Replacement');