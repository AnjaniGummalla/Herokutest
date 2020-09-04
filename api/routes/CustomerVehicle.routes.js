const express = require("express");
const router = express.Router();
const CustomerVehicleController = require("../controllers/Customer_Vehicle");

router.post("/getlist", CustomerVehicleController.findAll);
router.post("/create", CustomerVehicleController.create);
router.delete("/:id", CustomerVehicleController.delete);

module.exports = router;
