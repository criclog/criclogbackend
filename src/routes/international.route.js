const express = require("express");
const router = express.Router();

const controller = require("../controllers/international.controller");
const singleUpload = require("../middlewares/market.multer");  

router.post("/internationalData", singleUpload, controller.createInternationalNews);
router.get("/getAllInternationalData", controller.getAllInternationalNews);
router.get("/getInternationalById", controller.getInternationalNewsById);
router.put("/updateInternational",singleUpload,controller.UpdateInternational);
router.delete("/deleteInternational",controller.InternationalDelete)

module.exports = router;
