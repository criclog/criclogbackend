const mongoose =require("mongoose");
const {v4} = require("uuid")


const auth1Schema = new mongoose.Schema({
       _id: {
           type:String,
           default:v4
       },
    userName: {
        type:String,
        require :true
    },
    email: {
        type:String,
        require:true,
        unique:true,
      
    },

    password:{
        type:String,
    },
    OTP:{
        type:String,
    },
    
    mobileNo:{
    type:Number,
    minlength:10
   } ,
})


const auth1 = mongoose.model("auth1",auth1Schema);

module.exports = auth1;

