const express = require("express");
const router = express.Router();
const controller = require("../controllers/market.controler");
const singleUpload = require("../middlewares/market.multer");

// Routes
router.post("/marketData", singleUpload, controller.createMarket);
router.get("/getallData", controller.getMarketDataAll);
router.get("/getMarketById", controller.getMarketById);
router.put("/updatemarket", singleUpload, controller.updateMarket);
router.delete("/deletemarket", controller.deleteMarket);

module.exports = router;
