const express = require("express");
const router = express.Router();

const controller = require("../controllers/Commertary.controller");

router.post("/commentaryData", controller.createCommentary);
router.get("/getAllCommentaries", controller.getAllCommentaries);
router.get("/getCommentaryById", controller.getCommentaryById);  
router.get("/getCommentaryByIdandupdate", controller.getCommentaryByIdandupdate);  
router.put("/updateCommentaryById", controller.updateCommentaryById); 
router.delete("/deleteCommentaryById", controller.deleteCommentaryById);  

module.exports = router;
