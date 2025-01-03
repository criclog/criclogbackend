const Tournament =require("../models/Tournament.model")
const fs=require("fs")
const path = require("path");

const createTournament=async(req,res)=>{
    try {
        let tournamentData = req.body;
        let{file}=req;

        if(!file) return res.status(404).json({Error:"no file"});
         
        const tournamentnewdata={
            ...tournamentData,
            ...file

        };
        const createdata=await Tournament.create(tournamentnewdata)
        res.json({createdata, message:"Create Successfull"})

    } catch (error) {
        res.json({ Error: error.message });
        
    }
};

const  getallTournament=async(req,res)=>{


    try {
        const allTournament=await Tournament.find();
        res.json(allTournament)
    } catch (error) {
        res.json({ Error: error.message });
        
    }
};


    const getidTournament=async(req,res)=>{
        try {
            const {objectid}=req.query;
            const oneTournament=await Tournament.findOne({_id:objectid})
            res.json(oneTournament)

        } catch (error) {
        res.json({ Error: error.message });
            
        }
    }


    const Tournamentupdate= async(req,res)=>{
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
        
            const existingtournaments = await Tournament.findById(objectid);
            if (!existingtournaments) {
              return res.status(404).json({ message: "data not found" });
            }
        
            if (file && existingtournaments.filename) {
              const oldFilePath = path.join(existingtournaments.destination, existingtournaments.filename);
              if (fs.existsSync(oldFilePath)) {
                fs.unlinkSync(oldFilePath);
              }
            }
        
            const updatedtournament = await Tournament.findByIdAndUpdate(objectid, updateData, { new: true });
            res.status(200).json({ updatedtournament, message: "data updated successfully" });
          } catch (error) {
            res.status(500).json({ error: error.message });
          }}
     
     
        const Tournamentdelete=async(req,res)=>{
            try {
                const { objectid } = req.query;
            
                const tournamentData = await Tournament.findById(objectid);
                if (!tournamentData) {
                  return res.status(404).json({ message: "data not found" });
                }
            
                if (tournamentData.filename) {
                  fs.unlinkSync(path.join(tournamentData.destination, tournamentData.filename));
                }
            
                await tournamentData.deleteOne();
                res.status(200).json({ message: "data deleted successfully" });
              } catch (error) {
                res.status(500).json({ error: error.message });
              }
        }
    




module.exports={
    createTournament,
    getallTournament,
    getidTournament,
    Tournamentupdate,
    Tournamentdelete
}
