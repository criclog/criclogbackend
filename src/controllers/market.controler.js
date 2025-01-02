const market = require("../models/market.model");
const fs = require("fs");
const path = require("path");

const createMarket = async (req, res) => {
  try {
    const marketData = req.body;
    const file = req.file;

    const newMarketData = {
      ...marketData,
      filename: file.filename,
      destination: file.destination,
      path: file.path,
    };

    const savedData = await market.create(newMarketData);
    res.status(201).json({ savedData, message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMarketDataAll = async (req, res) => {
  try {
    const allData = await market.find();
    res.status(200).json(allData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMarketById = async (req, res) => {
  try {
    const { objectid } = req.query;
    const data = await market.findById(objectid);
    if (!data) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateMarket = async (req, res) => {
    try {
      const { objectid } = req.query;
      const file = req.file;
  
      let updateData = { ...req.body };
      if (file) {
        updateData = {
          ...updateData,
          filename: file.filename,
          destination: file.destination,
          path: file.path,
          originalname: file.originalname,
        };
      }
  
      const existingMarket = await market.findById(objectid);
      if (!existingMarket) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      if (file && existingMarket.filename) {
        const oldFilePath = path.join(existingMarket.destination, existingMarket.filename);
        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        } else {
          console.log(`File not found: ${oldFilePath}`);
        }
      }
  
      const updatedMarket = await market.findByIdAndUpdate(objectid, updateData, { new: true });
      res.status(200).json({ updatedMarket, message: "Product updated successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
const deleteMarket = async (req, res) => {
  try {
    const { objectid } = req.query;

    const marketData = await market.findById(objectid);
    if (!marketData) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (marketData.filename) {
      fs.unlinkSync(path.join(marketData.destination, marketData.filename));
    }

    await marketData.deleteOne();
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMarket,
  getMarketDataAll,
  getMarketById,
  updateMarket,
  deleteMarket,
};
