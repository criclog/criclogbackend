const express=require("express")
const router=express.Router();
const controller=require("../controllers/Looking.controller")
const singleupload =require("../middlewares/market.multer")


router.post("/postlooking",singleupload,controller.postLooking)
router.get("/getlooking",controller.getLooking)



module.exports=router;