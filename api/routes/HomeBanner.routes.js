const express = require("express");
const router = express.Router();
const HomeBannerController = require("../controllers/HomeBanner");

router.post("/getlist", HomeBannerController.findAll);
router.post("/create", HomeBannerController.create);
router.delete("/:id", HomeBannerController.delete);

module.exports = router;
