const Bowling = require("../models/bowlingdata.model");

const createBowlingData = async (req, res) => {
    try {
        const bowlingData = req.body;
        const saveData = await Bowling.create(bowlingData);
        res.status(201).json({saveData, message:'Added successfully'}); // Respond with 201 for successful creation
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAllBowlingData = async (req, res) => {
    try {
        const allData = await Bowling.find();
        res.status(200).json(allData); // Respond with 200 for successful fetch
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBowlingDataById = async (req, res) => {
    try {
        const { MatchID } = req.query;
       
        const data = await Bowling.find({MatchID});
        if (!data) {
            return res.status(404).json({ error: "Data not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBowlingDataByIdandupdate = async (req, res) => {
    try {
        const { objid } = req.query;
       
        const data = await Bowling.findById(objid);
        if (!data) {
            return res.status(404).json({ error: "Data not found" });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const updateBowlingDataById = async (req, res) => {
    try {
        const { objid } = req.query;

        const updatedData = req.body;
        const updatedBowlingData = await Bowling.findByIdAndUpdate(objid, updatedData, { new: true });
        if (!updatedBowlingData) {
            return res.status(404).json({ error: "Data not found" });
        }
        res.status(200).json({updatedBowlingData, message:'Updated successfully'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteBowlingDataById = async (req, res) => {
    try {
        const { objid } = req.query;
        const deletedBowlingData = await Bowling.findByIdAndDelete(objid);
        if (!deletedBowlingData) {
            return res.status(404).json({ error: "Data not found" });
        }
        res.status(200).json({deletedBowlingData, message:'deleted successfully'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createBowlingData,
    getAllBowlingData,
    getBowlingDataById,
    getBowlingDataByIdandupdate,
    updateBowlingDataById,
    deleteBowlingDataById,
};
