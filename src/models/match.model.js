const mongoose = require("mongoose");
const { v4 } = require("uuid");

const matchSchema = new mongoose.Schema(
  {

    _id: {
        type: String,
        default: v4,
      },
      MatchID:{
        type: String,
        required:true,
      },
    matchname: {
      type: String,
    },
    location: {
      type: String,
    },
    batteam: {
      type: String,
    },
    over: {
      type: Number,
      default: 0,
    },
    bowlingstatus: {
      type: String,
    },
    tossstatus: {
      type: String,
    },
    detaillocation: {
      type: String,
    },
    bowlover: {
      type: Number,
      default: 0,
    },
  
    matchtype: {
      type: String,
    },
    score: {
      type: String,
      default: 0,
    },
    bowlingteam: {
      type: String,
    },
    tosswin: {
      type: String,
    },
    Updatedtime:{
      type:String
    },
    MatchDate:{
type:String,
    },
  Team1players: { type: [String] }, 
  Team2players: { type: [String] },
  },
  {
    timestamps: true,
  }
);

const Match = mongoose.model("Match", matchSchema);
module.exports = Match;
