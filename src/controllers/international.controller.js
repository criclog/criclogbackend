const international = require("../models/international.model");
const moment = require('moment');

const createInternationalNews = async (req, res) => {
    try {
        let internationalData = req.body;
        let { file } = req;
        if (!file) {
            return res.status(400).json({ Error: 'No file uploaded' });
        }
        const currentDate = moment().format('DD-MM-YYYY');
        const currentDay = moment().format('dddd');

        const newInternationalData = {
            ...internationalData,
           ...file,
           date: currentDate,
           day: currentDay,
        };

        const saveData = await international.create(newInternationalData);
        console.log(saveData);
        res.json({saveData, message:'news added successfully'});
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const getAllInternationalNews = async (req, res) => {
    try {
        const allData = await international.find();
        console.log(allData);
        res.json(allData);
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const getInternationalNewsById = async (req, res) => {
    try {
        const { objectid } = req.query;
        const data = await international.findOne({ _id: objectid });
        res.json(data);
    } catch (error) {
        res.json({ Error: error.message });
    }
};

module.exports = { createInternationalNews, getAllInternationalNews, getInternationalNewsById };
