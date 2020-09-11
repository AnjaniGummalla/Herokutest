const express = require("express");
const router = express.Router();
const ClassController = require("../controllers/Class");

router.post("/getlist", ClassController.findAll);
router.post("/create", ClassController.create);
router.post("/update/:id", ClassController.classupdate);
router.delete("/:id", ClassController.delete);

module.exports = router;
