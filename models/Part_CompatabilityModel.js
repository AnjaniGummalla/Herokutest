var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var Part_CompatabilitySchema = new mongoose.Schema({   

  Part_Id: {
        type: Schema.Types.ObjectId,
        ref: 'Parts',
        required: true
    },
    Model_Id: {
        type: Schema.Types.ObjectId,
        ref: 'Model',
        required: true
    },
  Trim_Id: {
        type: Schema.Types.ObjectId,
        ref: 'Trim',
        required: true
    },
    Generation_Id: {
        type: Schema.Types.ObjectId,
        ref: 'Generation',
        required: true
    },
});

Part_CompatabilitySchema.plugin(timestamps);

mongoose.model('Part_Compatability', Part_CompatabilitySchema);

module.exports = mongoose.model('Part_Compatability');