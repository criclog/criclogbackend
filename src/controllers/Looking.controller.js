const Looking=require("../models/Looking.model")
const fs =require("fs")
const path = require("path");

const postLooking= async (req,res)=>{
    
    try {
         const {data, body,file}=req;
         let lookingdata={
           ...body,
           ...data
         };
         if(file){

            lookingdata={
                ...lookingdata,
                ...file
            }
         }
        const save=await Looking.create(lookingdata)
        res.json({
            save,
            message:"Card Successfully Added"
        })
    } catch (error) {
     
        res.status(500).json({ Error:error.message })
    }
}


const getLooking= async(req,res)=>{
    try {
        const look =await Looking.find()
         if(!look) return res.status(404).json({message:"data not found"})
         res.json(look)
    } catch (error) {
        res.json({ Error:error.message })
        
    }
}

const getlookingById = async (req, res) => {
    try {
      const { objectid } = req.query;
      const data = await Looking.findById(objectid);
      if (!data) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

const updatelooking= async(req,res)=>{
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
    
        const existinglooking = await Looking.findById(objectid);
        if (!existinglooking) {
          return res.status(404).json({ message: "data not found" });
        }
    
        if (file && existinglooking.filename) {
          const oldFilePath = path.join(existinglooking.destination, existinglooking.filename);
          if (fs.existsSync(oldFilePath)) {
            fs.unlinkSync(oldFilePath);
          } else {
            console.log(`File not found: ${oldFilePath}`);
          }
        }
    
        const updatedlooking = await Looking.findByIdAndUpdate(objectid, updateData, { new: true });
        res.status(200).json({ updatedlooking, message: "data updated successfully" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }}
 
 
    const deletelooking=async(req,res)=>{
        try {
            const { objectid } = req.query;
        
            const lookingData = await Looking.findById(objectid);
            if (!lookingData) {
              return res.status(404).json({ message: "data not found" });
            }
        
            if (lookingData.filename) {
              fs.unlinkSync(path.join(lookingData.destination, lookingData.filename));
            }
        
            await lookingData.deleteOne();
            res.status(200).json({ message: "data deleted successfully" });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }
    }
 
    
 
 
 
 module.exports={
     postLooking,
     getLooking,
     getlookingById,
     updatelooking,
     deletelooking
 }