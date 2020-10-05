const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/Admin");

router.post("/superlogin", AdminController.authlogin);
router.post("/create", AdminController.create);

module.exports = router;
