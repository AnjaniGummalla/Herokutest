const express = require("express");
const router = express.Router();
const Customer_VehicleController = require("../controllers/Customer_Vehicle");

router.post("/getlist", Customer_VehicleController.findAll);
router.post("/getvehicle",Customer_VehicleController.findvehicle);
router.post('/update/:id', Customer_VehicleController.vehicleupdate);
//router.post("/statuschange", Customer_VehicleController.defaultVehiclechange);
router.post("/create", Customer_VehicleController.create);
router.delete("/:id", Customer_VehicleController.delete);

module.exports = router;
