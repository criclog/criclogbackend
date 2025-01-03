const express = require("express");
const router = express.Router();

const controller = require("../controllers/bowlingdata.controller");

router.post("/BowlingData", controller.createBowlingData);
router.get("/getAllBowlingData", controller.getAllBowlingData);
router.get("/getBowlingDataById", controller.getBowlingDataById);
router.get("/getBowlingDataByIdandupdate", controller.getBowlingDataByIdandupdate);
router.put("/updateBowlingDataById", controller.updateBowlingDataById);
router.delete("/deleteBowlingDataById", controller.deleteBowlingDataById);

module.exports = router;
