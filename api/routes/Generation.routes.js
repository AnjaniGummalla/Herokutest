const express = require("express");
const router = express.Router();
const GenerationController = require("../controllers/Generation");

router.post("/getlist", GenerationController.findAll);
router.post("/create", GenerationController.create);
router.delete("/:id", GenerationController.delete);

module.exports = router;
