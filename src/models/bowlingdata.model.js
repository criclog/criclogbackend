const mongoose = require("mongoose");
const { v4 } = require("uuid");

const bowlingDataSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: v4,
    },
    MatchID:{
      type: String,
      required:true
    },
    over: {
      type: Number,
      default: 0,
    },
    run: {
      type: Number,
      default: 0,
    },
    wicket: {
      type: Number,
      default: 0,
    },
    bowlername: {
      type: String,
    },
    med: {
      type: Number,
      default: 0,
    },
    wide: {
      type: Number,
      default: 0,
    },
    ECO: {
      type: Number,
      default: 0.0,
    },
  },
  {
    timestamps: true,
  }
);

const Bowling = mongoose.model("Bowling", bowlingDataSchema);
module.exports = Bowling;
