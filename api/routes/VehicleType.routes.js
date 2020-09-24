const express = require("express");
const router = express.Router();
const VehicletypeController = require("../controllers/vehicletype");

router.get("/getlist", VehicletypeController.findAll);
router.post("/create", VehicletypeController.create);
router.delete("/:id", VehicletypeController.delete);

module.exports = router;
