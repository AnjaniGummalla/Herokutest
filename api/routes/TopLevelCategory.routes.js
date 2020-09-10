const express = require("express");
const router = express.Router();
const TopLevelCategoryController = require("../controllers/toplevelcategory");

router.get("/getlist", TopLevelCategoryController.findAll);
router.post("/create", TopLevelCategoryController.create);
router.post("/update/:id", TopLevelCategoryController.categoryupdate);
router.delete("/:id", TopLevelCategoryController.delete);

module.exports = router;
