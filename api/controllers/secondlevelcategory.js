const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse } = require('../lib/response');

const SecondlevelCategory = require("../models/SecondlevelCategoryModel");

const findAll = (req, res, next) => {
  SecondlevelCategory.find()
    .then(SecondlevelCategory => {
        getAllResponse(res, SecondlevelCategory);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving SecondlevelCategory.");
    });
};

const create = (req, res, next) => {
  const secondlevelCategory = new SecondlevelCategory(req.body);
  secondlevelCategory
    .save()
    .then(SecondlevelCategory => {
        createResponse(res, SecondlevelCategory);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the SecondlevelCategory.");
    });
};

const deleteDic = (req, res, next) => {
  SecondlevelCategory.findByIdAndRemove(req.params.id)
    .then(SecondlevelCategory => {
      if (!SecondlevelCategory)
        error404(res, "SecondlevelCategory not found with id " + req.params.id);
      res.send({ message: "SecondlevelCategory deleted successfully!" });
    })
    .catch(err => {
      NotFoundInCatch(res, err, `SecondlevelCategory not found with id ${err.value}`);
      error500(res, `Could not delete SecondlevelCategory with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  delete: deleteDic
};
