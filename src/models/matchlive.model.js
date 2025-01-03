const mongoose = require("mongoose");
const { v4 } = require("uuid");

const matchLiveSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: v4,
    },
    MatchID:{
      type: String,
      required:true
    },
    projected: {
      type: Number,
    },
    matchofficial: {
      type: String,
    },
    currentRR: {
      type: Number,
      default: 0,
    },
    overRR: {
      type: String,
      default: 0,
    },
    matchofficialrole: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const MatchLive = mongoose.model("MatchLive", matchLiveSchema);
module.exports = MatchLive;
