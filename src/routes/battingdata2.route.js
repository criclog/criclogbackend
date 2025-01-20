const express = require("express");
const router = express.Router();

const controller = require("../controllers/battingdata2.controller");

router.post("/BattingData2", controller.createBattingData2);
router.get("/getAllBattingData2", controller.getAllBattingData2);
router.get("/getBattingData2ById", controller.getBattingData2ById);
router.get("/getbatting2ByIdandupdate", controller.getbatting2ByIdandupdate);
router.put("/updateBattingData2ById", controller.updateBattingData2ById);
router.delete("/deleteBattingData2ById", controller.deleteBattingData2ById);

module.exports = router;
