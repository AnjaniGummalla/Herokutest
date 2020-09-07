var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
const Schema = mongoose.Schema;

var CustomerLocationSchema = new mongoose.Schema({   

  Customer_id: String,

  Mobile_Number : Number,

  First_Name: String,

  Last_Name: String,

  City: String,

  Address: String,

  Pincode: String,

  State: String,

  // Customer_Location: {
  //       type: { type: String },
  //       coordinates: []
  //   },

  // lat: Number,

  // long: Number,
  
  Location_type:{
    type:  String,
    Default: ""
  },

  Country: String,

  Street: String,

  NearBy_LandMark: String,

  Location_NickName:String,

  Status: String,

  Flat_No : String

});
CustomerLocationSchema.plugin(timestamps);

//CustomerLocationSchema.index({ "Customer_Location": "2dsphere" });

mongoose.model('Customerlocation', CustomerLocationSchema);

module.exports = mongoose.model('Customerlocation');