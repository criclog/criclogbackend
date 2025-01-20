const express=require("express")
const router=express.Router();
const controller=require("../controllers/adminauth.controllers")





router.post("/signup",controller.signup)
router.post("/signin",controller.signin)
router.put("/putadmin",controller.putadmin)
router.put("/putadminuserdata",controller.putadminuserdata)
router.put("/sendadminOTP",controller.OTPSend)
router.post("/VerifyadminOTP",controller.OTPVerify)


module.exports=router;