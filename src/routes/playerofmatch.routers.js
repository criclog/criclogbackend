const express = require("express");
const router = express.Router();

const controller = require("../controllers/playerofmatch.controller");

router.post("/createPlayerMatch", controller.createPlayerMatch);
router.get("/getAllPlayerMatches", controller.getAllPlayerMatches);
router.get("/getPlayerMatchById", controller.getPlayerMatchById);
router.put("/updatePlayerMatchById", controller.updatePlayerMatchById);
router.delete("/deletePlayerMatchById", controller.deletePlayerMatchById);

module.exports = router;
