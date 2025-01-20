const mongoose = require("mongoose")
const {v4} = require("uuid")

const adminauthSchema = new mongoose.Schema({

    _id:{
        type:String,
        default:v4
    },
    userName:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true

    },
    password:{
        type:String
    },
    OTP:{
        type:String,
    },
    userId:{
        type:String,
    },
    mobileNo:{
        type:Number
    }

})

const adminauth = mongoose.model("adminauth",adminauthSchema);

module.exports =adminauth;