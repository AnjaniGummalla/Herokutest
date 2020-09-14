const express = require("express");
const router = express.Router();
const ThirdLevelCategoryController = require("../controllers/thirdlevelcategory");

router.get("/getlist", ThirdLevelCategoryController.findAll);
router.post("/create", ThirdLevelCategoryController.create);
router.post("/update/:id", ThirdLevelCategoryController.categoryupdate);
router.delete("/:id", ThirdLevelCategoryController.delete);

module.exports = router;
