const express = require("express");
const router = express.Router();
const PartsController = require("../controllers/parts");

router.get('/', PartsController.findAll);

router.post('/', PartsController.getProduct);

router.post('/create', PartsController.create);

router.get('/:id', PartsController.findOne);

router.post('/:id', PartsController.update);

router.delete('/:id', PartsController.delete);

module.exports = router;
