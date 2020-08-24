const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 80
    },
    userType: {
        type: Schema.Types.ObjectId,
        ref: 'UserType',
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        minlength: 3,
        maxlength: 80,
        unique: true
    },
    tel: {
        type: Schema.Types.ObjectId,
        ref: 'Country',
        required: true
    },
    phone: {
        type: String,
        required: true,
        minlength: 7,
        maxlength: 15,
        unique: true
    },
    password: {
        type: String,
        //required: true
    },
    profilePic: {
        type: String,
       // trim: true
    },
    file: {
        type: Object,
    },
    designation: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    blocked: {
        type: Number,
        enum: [0, 1],
        default: 0
    },
    active: {
        type: Number,
        enum: [0, 1],
        default: 1
    },
   });

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;