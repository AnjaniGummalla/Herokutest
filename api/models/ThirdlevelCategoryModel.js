var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var Third_Level_CategorySchema = new mongoose.Schema({   
  
  //Third_level_Cat_Id: mongoose.Types.ObjectId(),
  
  Third_level_cat_title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Second_level_cat_name: {
        type: String,
        required: false,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Second_level_cat_id:  {
        type: Schema.Types.ObjectId,
        ref: 'Second_Level_Category',
        required: true
    },

  Top_level_cat_name:{
        type: String,
        required: false,
        trim: true,
        minlength: 3,
        maxlength: 80
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

Third_Level_CategorySchema.plugin(timestamps);

mongoose.model('Third_Level_Category', Third_Level_CategorySchema);

module.exports = mongoose.model('Third_Level_Category');