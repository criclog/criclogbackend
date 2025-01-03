const MatchLive = require("../models/matchlive.model");

const createMatchLive = async (req, res) => {
    try {
        const matchLiveData = req.body;
        const saveData = await MatchLive.create(matchLiveData);
        res.json({saveData,message:'Data Added successfully'});
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const getAllMatchLives = async (req, res) => {
    try {
        const allData = await MatchLive.find();
        res.json(allData);
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const getMatchLiveById = async (req, res) => {
    try {
        const { MatchID } = req.query;
        const data = await MatchLive.findOne({MatchID});
        res.json(data);
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const updateMatchLiveById = async (req, res) => {
    try {
        const { MatchID } = req.query;
        const updatedData = req.body;
        const updatedMatchLive = await MatchLive.findOneAndUpdate({MatchID}, updatedData, { new: true });
        res.json({updatedMatchLive, message:'updated sucessfully'});
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const deleteMatchLiveById = async (req, res) => {
    try {
        const { MatchID } = req.query;
        const deletedMatchLive = await MatchLive.findOneAndDelete({MatchID});
        res.json({deletedMatchLive, message:'deleted successfully'});
    } catch (error) {
        res.json({ Error: error.message });
    }
};

module.exports = {
    createMatchLive,
    getAllMatchLives,
    getMatchLiveById,
    updateMatchLiveById,
    deleteMatchLiveById,
};
