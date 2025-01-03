const BattingData2 = require("../models/battingdata2.model");

const createBattingData2 = async (req, res) => {
  try {
    const battingData = req.body;
    const saveData = await BattingData2.create(battingData);
    res.status(201).json(saveData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllBattingData2 = async (req, res) => {
  try {
    const allData = await BattingData2.find();
    res.status(200).json(allData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBattingData2ById = async (req, res) => {
  try {
    const { objectid } = req.query;
    if (!objectid) {
      return res.status(400).json({ error: "ObjectId is required" });
    }
    const data = await BattingData2.findById(objectid);
    if (!data) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBattingData2ById = async (req, res) => {
  try {
    const { objectid } = req.query;
    if (!objectid) {
      return res.status(400).json({ error: "ObjectId is required" });
    }
    const updatedData = req.body;
    const updatedBattingData = await BattingData2.findByIdAndUpdate(
      objectid,
      updatedData,
      { new: true }
    );
    if (!updatedBattingData) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json(updatedBattingData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBattingData2ById = async (req, res) => {
  try {
    const { objectid } = req.query;
    if (!objectid) {
      return res.status(400).json({ error: "ObjectId is required" });
    }
    const deletedBattingData = await BattingData2.findByIdAndDelete(objectid);
    if (!deletedBattingData) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json(deletedBattingData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBattingData2,
  getAllBattingData2,
  getBattingData2ById,
  updateBattingData2ById,
  deleteBattingData2ById,
};
