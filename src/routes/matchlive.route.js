const express = require("express");
const router = express.Router();

const controller = require("../controllers/matchlive.controller");

router.post("/createMatchLive", controller.createMatchLive);
router.get("/getAllMatchLives", controller.getAllMatchLives);
router.get("/getMatchLiveById", controller.getMatchLiveById);
router.put("/updateMatchLiveById", controller.updateMatchLiveById);
router.delete("/deleteMatchLiveById", controller.deleteMatchLiveById);

module.exports = router;
