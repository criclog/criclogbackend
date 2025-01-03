const mongoose = require("mongoose");
const { v4 } = require("uuid");

const commentarySchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: v4, 
    },
    MatchID:{
      type: String
    },
    status1: {
      type: Number,
    },
    endover1: {
      type: Number,
    },
    overallscore1: {
      type: Number,
      default: 0,
    },
    status2: {
      type: Number,
    },
    endover2: {
      type:  Number,
    },
    overallscore2: {
      type: Number,
      default: 0,
    },
    team1over: {
      type: Number,
      default: 0,
    },
    message1: {
      type: String,
      default: "", 
    },
    runandwicket1: {
      type: Number,
      default: 0,
    },
    team2over: {
      type: Number,
      default: 0,
    },
    message2: {
      type: String,
      default: "",
    },
    runandwicket2: {
      type: Number,
      default: 0,
    },
   
  },
  {
    timestamps: true, 
  }
);

const commentary = mongoose.model("Commentary", commentarySchema);
module.exports = commentary;
