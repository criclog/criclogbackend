const express=require("express")
const router=express.Router();
const controller=require("../controllers/auth1.controllers")




router.post("/signup",controller.signup)
router.post("/signin",controller.signin)
router.put("/putpassword",controller.putpassword)


module.exports=router;