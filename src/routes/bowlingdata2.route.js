const express = require("express");
const router = express.Router();

const controller = require("../controllers/bowlingdata2.controller");

router.post("/BowlingData2", controller.createBowlingData2);
router.get("/getAllBowlingData2", controller.getAllBowlingData2);
router.get("/getBowlingData2ById", controller.getBowlingData2ById);
router.get("/getBowlingData2ByIdandupdate", controller.getBowlingData2ByIdandupdate);
router.put("/updateBowlingData2ById", controller.updateBowlingData2ById);
router.delete("/deleteBowlingData2ById", controller.deleteBowlingData2ById);

module.exports = router;
