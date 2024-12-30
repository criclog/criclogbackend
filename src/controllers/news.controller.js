const news = require("../models/news.models");
const moment = require('moment');


const createNews = async (req, res) => {
    try {
        let newsData = req.body;
        let { file } = req;

        if (!file) {
            return res.status(400).json({ Error: 'No file uploaded' });
        }

        const currentDate = moment().format('DD-MM-YYYY');
        const currentDay = moment().format('dddd');

        const newnewsdata = {
            ...newsData,
            ...file,  
            date: currentDate,
            day: currentDay,
        };
        const saveData = await news.create(newnewsdata); 
        console.log(saveData);
        res.json({saveData, message:'news added successfully'});
    } catch (error) {
        res.json({ Error: error.message });
    }
};


const getNewsDataall = async (req, res) => {
    try {
        const allData = await news.find();
        console.log(allData);
        res.json(allData);
    } catch (error) {
        res.json({ Error: error.message });
    }
};

const getNewsById = async (req, res) => {
    try {
        const { objectid } = req.query;
        const data = await news.findOne({ _id: objectid });
        res.json(data);
    } catch (error) {
        res.json({ Error: error.message });
    }
};

module.exports = { createNews, getNewsDataall, getNewsById };
