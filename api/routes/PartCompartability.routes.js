const express = require("express");
const router = express.Router();

const PartCompatabilityController = require("../controllers/partcompatability");

router.get('/getlist', PartCompatabilityController.findAll);

router.post('/productlist', PartCompatabilityController.getProduct);

router.post('/create', PartCompatabilityController.create);

router.get('/:id', PartCompatabilityController.findOne);

router.post('/update/:id', PartCompatabilityController.update);

router.delete('/:id', PartCompatabilityController.delete);

module.exports = router;
