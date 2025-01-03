const express = require("express");
const router = express.Router();

const controller = require("../controllers/battingdata1.controller");

router.post("/BattingData1", controller.createBattingData1);
router.get("/getAllBattingData1", controller.getAllBattingData1);
router.get("/getBattingData1ById", controller.getBattingData1ById);
router.get("/getbatting1ByIdandupdate", controller.getbatting1ByIdandupdate);
router.put("/updateBattingData1ById", controller.updateBattingData1ById);
router.delete("/deleteBattingData1ById", controller.deleteBattingData1ById);

module.exports = router;
