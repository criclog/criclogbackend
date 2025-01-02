const mongoose=require("mongoose");
const {v4}=require("uuid")

const TournamentSchema=new mongoose.Schema({
    _id:{
        type:String,
        default:v4
    },
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true

    },
    status:{
        type:String,
        required:true

    },
    ballType:{
        type:String,
        required:true

    },
    category:{
        type:String,
        required:true

    },
    livevideo:{
        type:String,
        required:true

    },
    Team1:{
        type:String,
        required:true

    },
    Team2:{
        type:String,
        required:true
    } ,
    originalname: {
        type: String,
    },
    destination: {
        type: String,
    },
    filename: {
        type: String,
    },
  },
    {
        timestamps: true,
    }
);

const Tournament=mongoose.model("Tournament",TournamentSchema)

module.exports=Tournament;















