const express = require("express");
const router = express.Router();
const TrimController = require("../controllers/trim");

router.post("/getlist", TrimController.findmodel);
router.post("/create", TrimController.create);
router.post("/update/:id", TrimController.trimupdate);
router.delete("/:id", TrimController.delete);

module.exports = router;
