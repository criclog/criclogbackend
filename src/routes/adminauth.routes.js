
const express=require("express")
const router=express.Router();
const controller=require("../controllers/adminauth.controllers")





router.post("/signup",controller.signup)
router.post("/signin",controller.signin)
router.put("/putadmin",controller.putadmin)


module.exports=router;