const express = require("express");
const router = express.Router();
const PartsController = require("../controllers/parts");

router.get('/getlist', PartsController.findAll);

router.post('/productlist', PartsController.getProduct);

router.post('/create', PartsController.create);

router.get('/:id', PartsController.findOne);

router.post('/update/:id', PartsController.update);

router.delete('/:id', PartsController.delete);

module.exports = router;
