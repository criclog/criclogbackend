const express = require("express");
const router = express.Router();

const controller = require("../controllers/market.controler");
const singleUpload = require("../middlewares/market.multer");


router.post("/marketData",singleUpload,controller.createMarket);
router.get("/getallData", controller.getMarketdataall); 
router.get("/getMarketById", controller.getMarketById);



module.exports = router;