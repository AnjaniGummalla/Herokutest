const express = require("express");
const router = express.Router();
const CustomerController = require("../controllers/Customer");

router.get("/getlist", CustomerController.findAll);
router.post("/create", CustomerController.create);
router.post("/login", CustomerController.authlogin);
router.delete("/:id", CustomerController.delete);

module.exports = router;
