const BowlingData2 = require("../models/bowlingdata2.model");

const createBowlingData2 = async (req, res) => {
  try {
    const bowlingData2 = req.body;
    const saveData = await BowlingData2.create(bowlingData2);
    res.status(201).json({saveData, message:'added successfully'} ); // Respond with 201 for successful creation
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllBowlingData2 = async (req, res) => {
  try {
    const allData = await BowlingData2.find();
    res.status(200).json(allData); // Respond with 200 for successful fetch
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBowlingData2ById = async (req, res) => {
  try {
    const { MatchID } = req.query;
  
    const data = await BowlingData2.find({MatchID});
    if (!data) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBowlingData2ByIdandupdate = async (req, res) => {
  try {
      const { objid } = req.query;
     
      const data = await BowlingData2.findById(objid);
      if (!data) {
          return res.status(404).json({ error: "Data not found" });
      }
      res.status(200).json(data);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

const updateBowlingData2ById = async (req, res) => {
  try {
    const { objid } = req.query;
    if (!objid) {
      return res.status(400).json({ error: "ObjectId is required" });
    }
    const updatedData = req.body;
    const updatedBowlingData2 = await BowlingData2.findByIdAndUpdate(
      objid,
      updatedData,
      { new: true }
    );
    if (!updatedBowlingData2) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json({updatedBowlingData2, message:'Updated successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBowlingData2ById = async (req, res) => {
  try {
    const { objid } = req.query;
    if (!objid) {
      return res.status(400).json({ error: "ObjectId is required" });
    }
    const deletedBowlingData2 = await BowlingData2.findByIdAndDelete(objid);
    if (!deletedBowlingData2) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.status(200).json({deletedBowlingData2, message:'deleted successfully'});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBowlingData2,
  getAllBowlingData2,
  getBowlingData2ById,
  getBowlingData2ByIdandupdate,
  updateBowlingData2ById,
  deleteBowlingData2ById,
};
