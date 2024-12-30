const Looking=require("../models/Looking.model")


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
            message:"Card Successfully"
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


module.exports={
    postLooking,
    getLooking
}