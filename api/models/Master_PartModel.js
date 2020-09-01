var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var Master_PartSchema = new mongoose.Schema({   
 
 Master_PartName:  {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
 
 Child_Part_Id: [{
         type: Schema.Types.ObjectId,
         ref: 'Parts',
         required: true
     }],
  Child_Part_qty: {
        type: Number,
        required: true,
    },
});

Master_PartSchema.plugin(timestamps);

mongoose.model('Master_Part', Master_PartSchema);

module.exports = mongoose.model('Master_Part');