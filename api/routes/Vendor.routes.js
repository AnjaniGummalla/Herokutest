const express = require("express");
const router = express.Router();
const VendorController = require("../controllers/vendor");

router.post("/getlist", VendorController.findAll);
router.post("/create", VendorController.create);
router.delete("/:id", VendorController.delete);

module.exports = router;
