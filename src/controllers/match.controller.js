const Match = require("../models/match.model");

const createMatch = async (req, res) => {
    try {
        const matchData = req.body;
        const saveData = await Match.create(matchData);
        res.json({saveData, message:'Data Added'});
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const getAllMatches = async (req, res) => {
    try {
        const allData = await Match.find();
        res.json(allData);
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const getMatchById = async (req, res) => {
    try {
        const { MatchID } = req.query;
        const data = await Match.findOne({MatchID});
        res.json(data);
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const updateMatchById = async (req, res) => {
    try {
        const { MatchID } = req.query;
        const updatedData = req.body;
        const updatedMatch = await Match.findOneAndUpdate({MatchID}, updatedData, { new: true });
        res.json({updatedMatch, message:'updated data'} );
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const deleteMatchById = async (req, res) => {
    try {
        const { MatchID } = req.query;
        const deletedMatch = await Match.findOneAndDelete({MatchID});
        res.json({deletedMatch, message:'delete data'});
    } catch (error) {
        res.json({ Error: error.message });
    }
};

module.exports = {
    createMatch,
    getAllMatches,
    getMatchById,
    updateMatchById,
    deleteMatchById,
};
