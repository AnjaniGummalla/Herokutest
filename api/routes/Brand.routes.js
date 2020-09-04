const express = require("express");
const router = express.Router();
const BrandController = require("../controllers/Brands");

router.post("/getlist", BrandController.findAll);
router.post("/create", BrandController.create);
router.delete("/:id", BrandController.delete);

module.exports = router;
