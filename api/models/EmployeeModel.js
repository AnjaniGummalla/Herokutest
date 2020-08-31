var mongoose = require('mongoose');
const Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');
const bcrypt = require('bcrypt');

var EmployeeSchema = new mongoose.Schema({   
  
  Alternate_Contact: {
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 15
    },

  Email_Id: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  EmployeeAadharCard_file: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  EmployeeAadharCard_no: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  EmployeePanCard_file: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  EmployeePanCard_no: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Employee_Id: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Employee_LastName:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Employee_Name:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

    Location: [{
          type: Schema.Types.ObjectId,
          ref: 'Location'
      }],


  Nomaniee_Name:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  NomineeAadharCard_file: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  NomineeAadharCard_no: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  NomineeAddress:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  NomineeMobileNumber:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  NomineePanCard_file: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  NomineePanCard_no: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Permanentaddress: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Permissions : Array,

  Primary_Contact:{
        type: Number,
        required: true,
        trim: true,
        minlength: 10,
        maxlength: 15
    },

  Role_Name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  Sector: Array,

  Temporaryaddress:{
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  OTP: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  created_by : {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

  employee_status : {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },

});

EmployeeSchema.plugin(timestamps);
mongoose.model('Employee', EmployeeSchema);

module.exports = mongoose.model('Employee');