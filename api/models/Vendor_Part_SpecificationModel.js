var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var Vendo_PartSchema = new mongoose.Schema({   
  
 Part_Specification_id:{
        type: Schema.Types.ObjectId,
        ref: 'Parts',
        required: true
    },

 Vendor_id:{
        type: Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true
    },
  
 Part_Images: {
        type: Array
    },

  Part_Price: {
        type: Number,
        required: true
    },

  Offer_Price:{
        type: Number
    },
  Offer_Date_From:{
        type: String,
    },
  Offer_Date_To:{
        type: String,
    },
  Delivery_Days:{
        type: Number,
        required: false,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
  Shipping_Days:{
        type: Number,
        required: false,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
  Stock_Qty:{
        type: Number,
        required: false,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
  Product_Status:{
        type: Boolean,
        required: false,
        Default: true
    },
});

Vendo_PartSchema.plugin(timestamps);

mongoose.model('Parts_Specification', Vendo_PartSchema);

module.exports = mongoose.model('Parts_Specification');