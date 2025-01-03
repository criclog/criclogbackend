const BattingData1 = require("../models/battingdata1.model");

const createBattingData1 = async (req, res) => {
  try {
    const battingData = req.body;
    const saveData = await BattingData1.create(battingData);
    res.status(201).json({saveData, message:'Added successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllBattingData1 = async (req, res) => {
  try {
    const allData = await BattingData1.find();
    res.status(200).json(allData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBattingData1ById = async (req, res) => {
  try {
    const { MatchID } = req.query;
   
    const data = await BattingData1.find({MatchID});
    if (!data) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getbatting1ByIdandupdate = async (req, res) => {
  try {
      const { objid } = req.query;
      const data = await BattingData1.findById(objid);
     
      res.json(data);
  } catch (error) {
      res.json({ Error: error.message });
  }
};

const updateBattingData1ById = async (req, res) => {
  try {
    const { objid } = req.query;
    
    const updatedData = req.body;
    const updatedBattingData = await BattingData1.findByIdAndUpdate(objid,
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

const deleteBattingData1ById = async (req, res) => {
  try {
    const { objid } = req.query;
    
    const deletedBattingData = await BattingData1.findByIdAndDelete(objid);
    if (!deletedBattingData) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json({deletedBattingData, message:'Deleted successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBattingData1,
  getAllBattingData1,
  getBattingData1ById,
  getbatting1ByIdandupdate,
  updateBattingData1ById,
  deleteBattingData1ById,
};
