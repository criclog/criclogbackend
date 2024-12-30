const mongoose = require("mongoose");
const { v4 } = require("uuid");

const internationalSchema = new mongoose.Schema(
    {
        _id: {
            type: String,
            default: v4,
        },
        newsTitle: {
            type: String,
            required: true,
        },
        location: {
            type: String,
        },
        description: {
            type: String,
        },
        matchDetails: {
            type: String,
        },
        keyMoments: {
            type: String,
        },
        topBatter: {
            type: String,
        },
        topBowler: {
            type: String,
        },
        date: {  
            type: String,
        },
        day: { 
            type: String,
        },
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

const international = mongoose.model("international", internationalSchema);

module.exports = international;
