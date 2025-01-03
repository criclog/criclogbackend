const express = require("express");
const router = express.Router();

const controller = require("../controllers/match.controller");

router.post("/createMatch", controller.createMatch);
router.get("/getAllMatches", controller.getAllMatches);
router.get("/getMatchById", controller.getMatchById);
router.put("/updateMatchById", controller.updateMatchById);
router.delete("/deleteMatchById", controller.deleteMatchById);

module.exports = router;
