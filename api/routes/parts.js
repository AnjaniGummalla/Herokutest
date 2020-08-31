const express = require("express");
const router = express.Router();
const PartsController = require("../controllers/parts");

router.get("/getlist", PartsController.findAll);
router.post("/create", PartsController.create);
router.delete("/:id", PartsController.delete);

module.exports = router;
