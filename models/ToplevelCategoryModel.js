var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var Top_Level_CategorySchema = new mongoose.Schema({   
  
  Category_Id: mongoose.Types.ObjectId(),
  
  Category_Title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Thumbnail_Path: {
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

Top_Level_Category.plugin(timestamps);

mongoose.model('Top_Level_Category', Top_Level_CategorySchema);

module.exports = mongoose.model('Top_Level_Category');