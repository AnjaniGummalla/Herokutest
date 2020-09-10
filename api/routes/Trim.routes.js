const express = require("express");
const router = express.Router();
const TrimController = require("../controllers/trim");

router.get("/getlist", TrimController.findAll);
router.post("/create", TrimController.create);
router.delete("/:id", TrimController.delete);

module.exports = router;
