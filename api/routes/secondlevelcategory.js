const express = require("express");
const router = express.Router();
const SecondLevelCategoryController = require("../controllers/secondlevelcategory");

router.get("/getlist", SecondLevelCategoryController.findAll);
router.post("/create", SecondLevelCategoryController.create);
router.delete("/:id", SecondLevelCategoryController.delete);

module.exports = router;
