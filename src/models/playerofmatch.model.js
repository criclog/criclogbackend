const mongoose = require("mongoose");
const { v4 } = require("uuid");

const playerMatchSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: v4,
    },
    MatchID:{
      type: String
    },
    playername: {
      type: String
      
    },
    team: {
      type: String
    
    },
    batting: {
      type: String,
    },
    bowling: {
      type: String,
    },
 
  },
  {
    timestamps: true, 
  }
);

const playerMatch = mongoose.model("playerMatch", playerMatchSchema);
module.exports = playerMatch;
