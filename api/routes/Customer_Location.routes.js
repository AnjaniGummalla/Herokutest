const express = require("express");
const router = express.Router();
const Customer_LocationController = require("../controllers/customer_location");

router.post("/getlist", Customer_LocationController.findAll);
router.post("/create", Customer_LocationController.create);
router.delete("/:id", Customer_LocationController.delete);

module.exports = router;
