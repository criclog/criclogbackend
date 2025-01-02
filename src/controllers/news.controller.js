const news = require("../models/news.models");
const moment = require('moment');
const fs=require("fs")
const path = require("path");


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


const Newsupdate= async(req,res)=>{
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
    
        const existingnews = await news.findById(objectid);
        if (!existingnews) {
          return res.status(404).json({ message: "data not found" });
        }
    
        if (file && existingnews.filename) {
          const oldFilePath = path.join(existingnews.destination, existingnews.filename);
          if (fs.existsSync(oldFilePath)) {
            fs.unlinkSync(oldFilePath);
          } else {
            console.log(`File not found: ${oldFilePath}`);
          }
        }
    
        const updatedlooking = await news.findByIdAndUpdate(objectid, updateData, { new: true });
        res.status(200).json({ updatedlooking, message: "data updated successfully" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }}
 
 
    const Newsdelete=async(req,res)=>{
        try {
            const { objectid } = req.query;
        
            const newsData = await news.findById(objectid);
            if (!newsData) {
              return res.status(404).json({ message: "data not found" });
            }
        
            if (newsData.filename) {
              fs.unlinkSync(path.join(newsData.destination, newsData.filename));
            }
        
            await newsData.deleteOne();
            res.status(200).json({ message: "data deleted successfully" });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }

module.exports = {
      createNews,
      getNewsDataall, 
      getNewsById,
      Newsupdate,
      Newsdelete 
    }
