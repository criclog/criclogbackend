const market = require ("../models/market.model");


const createMarket = async (req,res) => {
    try {
        let marketData = req.body;
        let {file} = req;
        const newmarketData = {
            ...marketData, ...file
        };
        const saveData = await market.create(newmarketData);
        console.log(saveData);
        res.json({saveData, message:'product added successfully'});
    } catch (error) {
        res.json({Error:error.message})
    }
};
const getMarketdataall = async (req,res) => {
    try {
        const allData = await market.find();
        console.log(allData);
        res.json(allData);
    } catch (error) {
        res.json({Error:error.message})
    }};

    
const getMarketById = async (req, res) => {
    try { 
        const {objectid} = req.query;
        const data = await market.findOne({ _id:objectid });
        console.log(data);
        res.json(data);
    } catch (error) {
        res.json({Error:error.message}) 
    }
};



module.exports = {createMarket ,getMarketdataall,getMarketById,};