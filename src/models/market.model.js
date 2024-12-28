const mongoose = require("mongoose");
const {v4} = require ("uuid");
const marketSchema = new mongoose.Schema(
    {
        _id:{
            type: String,
            default: v4
        },
        productname:{
            type: String
        },
        location:{
            type : String
        },
        price:{
            type:Number
        },
        sellername:{
            type: String
        },
       
        description:{
            type: String
        },
        originalname:{
            type:String
        },
        destination:{
            type:String
        },
        filename:{
            type:String
        }
    },
    {
    
        timestamps: true
    }
);
const market = mongoose.model("market",marketSchema);
module.exports = market;