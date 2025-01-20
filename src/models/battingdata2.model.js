const mongoose = require("mongoose");
const { v4 } = require("uuid");

const battingData2Schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: v4,
    },
    MatchID: {
      type: String,
      required: true,
    },
    Team2Run1: {
      type: Number,
      default: 0,
    },
    Team2Four1: {
      type: Number,
      default: 0,
    },
    Team2SR1: {
      type: Number,
      default: 0.0,
    },
    Team2Min1: {
      type: Number,
      default: 0,
    },
    Team2Run2: {
      type: Number,
      default: 0,
    },
    Team2Four2: {
      type: Number,
      default: 0,
    },
    Team2SR2: {
      type: Number,
      default: 0.0,
    },
    Team2Min2: {
      type: Number,
      default: 0,
    },
    Team2fallofwickets: {
      type: String,
      default: "",
    },
    Team2BatterName1: {
      type: String,
      required: true,
    },
    Team2Ball1: {
      type: Number,
      default: 0,
    },
    Team2Six1: {
      type: Number,
      default: 0,
    },
    Team2Status1: {
      type: String,
      
    },
    Team2BatterName2: {
      type: String,
      required: true,
    },
    Team2Ball2: {
      type: Number,
      default: 0,
    },
    Team2Six2: {
      type: Number,
      default: 0,
    },
    Team2Status2: {
      type: String,
  
    },
    Team2Yettobat:{
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const BattingData2 = mongoose.model("BattingData2", battingData2Schema);
module.exports = BattingData2;
