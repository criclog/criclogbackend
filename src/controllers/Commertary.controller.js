const Commentary = require("../models/Commertary.model");

const createCommentary = async (req, res) => {
    try {
        const commentaryData = req.body;
        const saveData = await Commentary.create(commentaryData);
        console.log(saveData);
        res.json({saveData, message:"added successfully"});
    } catch (error) {
        res.json({ Error: error.message });
    }
};


const getAllCommentaries = async (req, res) => {
    try {
        const allData = await Commentary.find();
        res.json(allData);
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const getCommentaryById = async (req, res) => {
    try {
        const { MatchID } = req.query;
        const data = await Commentary.find({MatchID});
       
        res.json(data);
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const getCommentaryByIdandupdate = async (req, res) => {
    try {
        const { objid } = req.query;
        const data = await Commentary.findById(objid);
       
        res.json(data);
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const updateCommentaryById = async (req, res) => {
    try {
        const { objid} = req.query;
        const updatedData = req.body;
        const updatedCommentary = await Commentary.findByIdAndUpdate(objid, updatedData, { new: true });
        res.json({updatedCommentary, message:'updated successfully'});
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const deleteCommentaryById = async (req, res) => {
    try {
        const { objid } = req.query;
        const deletedCommentary = await Commentary.findByIdAndDelete(objid);
        res.json({deletedCommentary, message:'deleted successfully'});
    } catch (error) {
        res.json({ Error: error.message });
    }
};

module.exports = {
    createCommentary,
    getAllCommentaries,
    getCommentaryById,
    getCommentaryByIdandupdate,
    updateCommentaryById,
    deleteCommentaryById,
};
