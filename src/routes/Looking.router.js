const express=require("express")
const router=express.Router();

const controller=require("../controllers/Looking.controller")
const singleupload =require("../middlewares/market.multer")


router.post("/postlooking",singleupload,controller.postLooking)
router.get("/getlooking",controller.getLooking)
router.get("/getlookingbyid",controller.getlookingById)
router.put("/updatelooking",singleupload,controller.updatelooking)
router.delete("/deletelooking",controller.deletelooking)


module.exports=router;