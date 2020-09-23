const express = require("express");
const router = express.Router();

const Part_Specification_Link_Controller = require("../controllers/Part_specification_link");

router.get('/getlist', Part_Specification_Link_Controller.findAll);

router.post('/productlist', Part_Specification_Link_Controller.getProduct);

router.post('/create', Part_Specification_Link_Controller.create);

router.get('/:id', Part_Specification_Link_Controller.findOne);

router.post('/update/:id', Part_Specification_Link_Controller.update);

router.delete('/:id', Part_Specification_Link_Controller.delete);

module.exports = router;
