const express = require("express");
const router = express.Router();
const OriginController = require("../controllers/origin");

router.post("/getlist", OriginController.findmodel);
router.post("/create", OriginController.create);
router.post("/update/:id", OriginController.Originupdate);
router.delete("/:id", OriginController.delete);

module.exports = router;
