const mongoose = require("mongoose");
const { v4 } = require("uuid");

const bowlingData2Schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: v4,
    },
    MatchID: {
      type: String,
    },
    over2: {
      type: Number,
      default: 0,
    },
    run2: {
      type: Number,
      default: 0,
    },
    wicket2: {
      type: Number,
      default: 0,
    },
    bowlername2: {
      type: String,
    },
    med2: {
      type: Number,
      default: 0,
    },
    wide2: {
      type: Number,
      default: 0,
    },
    ECO2: {
      type: Number,
      default: 0.0,
    },
  },
  {
    timestamps: true,
  }
);

const BowlingData2 = mongoose.model("BowlingData2", bowlingData2Schema);
module.exports = BowlingData2;
