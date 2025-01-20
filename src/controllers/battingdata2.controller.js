const BattingData2 = require("../models/battingdata2.model");

const createBattingData2 = async (req, res) => {
  try {
    const battingData = req.body;
    const saveData = await BattingData2.create(battingData);
    res.status(200).json({saveData, message:'added successfully'});
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
    const { MatchID } = req.query;
  
    const data = await BattingData2.find({MatchID});
    if (!data) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getbatting2ByIdandupdate = async (req, res) => {
  try {
      const { objid } = req.query;
      const data = await BattingData2.findById(objid);
     
      res.json(data);
  } catch (error) {
      res.json({ Error: error.message });
  }
};

const updateBattingData2ById = async (req, res) => {
  try {
    const { objid } = req.query;
    if (!objid) {
      return res.status(400).json({ error: "ObjectId is required" });
    }
    const updatedData = req.body;
    const updatedBattingData = await BattingData2.findByIdAndUpdate(
      objid,
      updatedData,
      { new: true }
    );
    if (!updatedBattingData) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json({updatedBattingData, message:'Updated successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBattingData2ById = async (req, res) => {
  try {
    const { objid } = req.query;
    if (!objid) {
      return res.status(400).json({ error: "ObjectId is required" });
    }
    const deletedBattingData = await BattingData2.findByIdAndDelete(objid);
    if (!deletedBattingData) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json({deletedBattingData, message:'deleted successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBattingData2,
  getAllBattingData2,
  getBattingData2ById,
  getbatting2ByIdandupdate,
  updateBattingData2ById,
  deleteBattingData2ById,
};
