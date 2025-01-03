const playerMatch = require("../models/playerofmatch.model");

const createPlayerMatch = async (req, res) => {
    try {
        const playerMatchData = req.body;
        const saveData = await playerMatch.create(playerMatchData);
        res.json({saveData,message:'Data Added successfully'});
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const getAllPlayerMatches = async (req, res) => {
    try {
        const allData = await playerMatch.find();
        res.json(allData);
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const getPlayerMatchById = async (req, res) => {
    try {
        const { MatchID } = req.query;
        const data = await playerMatch.findOne({MatchID});
        res.json(data);
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const updatePlayerMatchById = async (req, res) => {
    try {
        const {MatchID} = req.query;
        const updatedData = req.body;
        const updatedPlayerMatch = await playerMatch.findOneAndUpdate({MatchID}, updatedData, { new: true });
        res.json({updatedPlayerMatch, message:'updated sucessfully'});
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const deletePlayerMatchById = async (req, res) => {
    try {
        const { MatchID } = req.query;
        const deletedPlayerMatch = await playerMatch.findOneAndDelete({MatchID});
        res.json({deletedPlayerMatch, message:'deleted successfully'});
    } catch (error) {
        res.json({ Error: error.message });
    }
};
 
module.exports = {
    createPlayerMatch,
    getAllPlayerMatches,
    getPlayerMatchById,
    updatePlayerMatchById,
    deletePlayerMatchById,
};
