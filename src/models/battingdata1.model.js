const mongoose = require("mongoose");
const { v4 } = require("uuid");

const battingData1Schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: v4,
    },
    MatchID: {
      type: String,
      required: true,
    },
    Run1: {
      type: Number,
      default: 0,
    },
    Four1: {
      type: Number,
      default: 0,
    },
    SR1: {
      type: Number,
      default: 0.0,
    },
    Min1: {
      type: Number,
      default: 0,
    },
    Run2: {
      type: Number,
      default: 0,
    },
    Four2: {
      type: Number,
      default: 0,
    },
    SR2: {
      type: Number,
      default: 0.0,
    },
    Min2: {
      type: Number,
      default: 0,
    },
    fallofwickets: {
      type: String,
    },
    BatterName1: {
      type: String,
      required: true,
    },
    Ball1: {
      type: Number,
      default: 0,
    },
    Six1: {
      type: Number,
      default: 0,
    },
    Status1: {
      type: String,
    
    },
    BatterName2: {
      type: String,
      required: true,
    },
    Ball2: {
      type: Number,
      default: 0,
    },
    Six2: {
      type: Number,
      default: 0,
    },
    Status2: {
      type: String,
      
    },
    Yettobat:{
      type:String
    }
  },
  {
    timestamps: true,
  }
);

const BattingData1 = mongoose.model("BattingData1", battingData1Schema);
module.exports = BattingData1;
