const express = require("express");
const router = express.Router();
const VehicleModelController = require("../controllers/vehiclemodel");

router.get("/getlist", VehicleModelController.findAll);
router.post("/brand/list", VehicleModelController.findbrand);
router.post("/create", VehicleModelController.create);
router.post("/update/:id", VehicleModelController.vehiclemodelupdate);
router.delete("/:id", VehicleModelController.delete);

module.exports = router;
