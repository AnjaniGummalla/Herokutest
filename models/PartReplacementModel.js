var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var Part_replacementSchema = new mongoose.Schema({   
  
 Part_Id: {
        type: Schema.Types.ObjectId,
        ref: 'Parts',
        required: true
    },
  
  Replacement_Part_Id: {
        type: Schema.Types.ObjectId,
        ref: 'Parts',
        required: true
    },
});

Part_replacementSchema.plugin(timestamps);

mongoose.model('Part_Replacement', Part_replacementSchema);

module.exports = mongoose.model('Part_Replacement');