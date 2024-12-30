const mongoose =require("mongoose")
const { v4 }=require("uuid")


const LookingSchema=new mongoose.Schema({
    _id:{
        type:String,
        default:v4
    },
    Description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    date: {  
        type: String,
    },
    day: { 
        type: String,
    },
     originalname:{
         type:String
    },
     destination:{
       type:String
     },
      filename:{
         type:String
    },
},{
    timestamps: true,
})

const Looking=mongoose.model("Looking",LookingSchema)

module.exports=Looking;
