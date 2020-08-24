var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var PartsSchema = new mongoose.Schema({   
  
  Part_Id: mongoose.Types.ObjectId(),
  
  Part_Name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Part_Price: {
        type: Number,
        required: true
    },

  Part_Number:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
   Part_Overview:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    Part_top_cat_id: {
        type: Schema.Types.ObjectId,
        ref: 'Top_Level_Category',
        required: true
    },
    Part_second_cat_id: {
        type: Schema.Types.ObjectId,
        ref: 'Second_Level_Category',
        required: true
    },
    Part_second_cat_id: {
        type: Schema.Types.ObjectId,
        ref: 'Third_Level_Category',
        required: true
    },
     Part_second_origin_id: {
        type: Schema.Types.ObjectId,
        ref: 'Origin',
        required: true
    },
  Thumbnail_Path:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Large_Image_Path:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
});

PartsSchema.plugin(timestamps);

mongoose.model('Parts', PartsSchema);

module.exports = mongoose.model('Parts');