const express = require("express");
const router = express.Router();
const VehicleModelController = require("../controllers/vehiclemodel");

router.get("/getlist", VehicleModelController.findAll);
router.post("/create", VehicleModelController.create);
router.delete("/:id", VehicleModelController.delete);

module.exports = router;
