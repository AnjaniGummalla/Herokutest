var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var GenerationSchema = new mongoose.Schema({   
  
  //Generation_Id: mongoose.Types.ObjectId(),
  
  Generation_Name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    Generation_From:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    Generation_To:{
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
      }
});

GenerationSchema.plugin(timestamps);

mongoose.model('Generation', GenerationSchema);

module.exports = mongoose.model('Generation');