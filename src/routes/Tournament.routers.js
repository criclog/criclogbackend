const express = require("express");
const router = express.Router();

const controller = require("../controllers/Tournament.controller");
const singleUpload = require("../middlewares/market.multer");

router.post("/postTournament",singleUpload, controller.createTournament);
router.get("/getallTournament", controller.getallTournament);
router.get("/getidTournament", controller.getidTournament);
router.put("/updateTournament",singleUpload,controller.Tournamentupdate)
router.delete("/deleteTournament",controller.Tournamentdelete)

module.exports = router;

