const international = require("../models/international.model");
const  fs = require("fs");
const moment = require('moment')
const path = require("path");

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


const UpdateInternational= async(req,res)=>{
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
    
        const existinginternews = await international.findById(objectid);
        if (!existinginternews) {
          return res.status(404).json({ message: "data not found" });
        }
    
        if (file && existinginternews.filename) {
          const oldFilePath = path.join(existinginternews.destination, existinginternews.filename);
          if (fs.existsSync(oldFilePath)) {
            fs.unlinkSync(oldFilePath);
          } else {
            console.log(`File not found: ${oldFilePath}`);
          }
        }
    
        const updatedinternews = await international.findByIdAndUpdate(objectid, updateData, { new: true });
        res.status(200).json({ updatedinternews, message: "data updated successfully" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }}
 
 
    const InternationalDelete=async(req,res)=>{
        try {
            const { objectid } = req.query;
        
            const internewsData = await international.findById(objectid);
            if (!internewsData) {
              return res.status(404).json({ message: "data not found" });
            }
        
            if (internewsData.filename) {
              fs.unlinkSync(path.join(internewsData.destination, internewsData.filename));
            }
        
            await internewsData.deleteOne();
            res.status(200).json({ message: "data deleted successfully" });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }



module.exports = {
       createInternationalNews,
       getAllInternationalNews,
       getInternationalNewsById,
       UpdateInternational,
       InternationalDelete
     }
