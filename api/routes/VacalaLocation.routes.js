const express = require("express");
const router = express.Router();
const vacalalocationController = require("../controllers/vacalalocations");

router.post("/getlist", vacalalocationController.findAll);
router.post("/create", vacalalocationController.create);
router.delete("/:id", vacalalocationController.delete);

module.exports = router;
