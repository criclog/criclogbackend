const express = require("express");
const router = express.Router();

const controller = require("../controllers/news.controller");
const singleUpload = require("../middlewares/market.multer");

router.post("/newsData", singleUpload, controller.createNews);
router.get("/getnewsallData", controller.getNewsDataall);
router.get("/getnewsById", controller.getNewsById);
router.put("/updatenews",singleUpload,controller.Newsupdate)
router.delete("/deletenews",controller.Newsdelete)

module.exports = router;

