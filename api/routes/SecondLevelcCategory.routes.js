const express = require("express");
const router = express.Router();
const SecondLevelCategoryController = require("../controllers/secondlevelcategory");

router.post("/getlist", SecondLevelCategoryController.findAll);
router.post("/create", SecondLevelCategoryController.create);
router.post("/update/:id", SecondLevelCategoryController.categoryupdate);
router.delete("/:id", SecondLevelCategoryController.delete);

module.exports = router;
