const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse } = require('../lib/response');

const ThirdlevelCategory = require("../models/ThirdlevelCategoryModel");

const findAll = (req, res, next) => {
  ThirdlevelCategory.find()
    .then(ThirdlevelCategory => {
        getAllResponse(res, ThirdlevelCategory);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving ThirdlevelCategory.");
    });
};

const create = (req, res, next) => {
  const thirdlevelCategory = new ThirdlevelCategory(req.body);
  thirdlevelCategory
    .save()
    .then(ThirdlevelCategory => {
        createResponse(res, ThirdlevelCategory);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the ThirdlevelCategory.");
    });
};

const deleteDic = (req, res, next) => {
  ThirdlevelCategory.findByIdAndRemove(req.params.id)
    .then(ThirdlevelCategory => {
      if (!ThirdlevelCategory)
        error404(res, "ThirdlevelCategory not found with id " + req.params.id);
      res.send({ message: "ThirdlevelCategory deleted successfully!" });
    })
    .catch(err => {
      NotFoundInCatch(res, err, `ThirdlevelCategory not found with id ${err.value}`);
      error500(res, `Could not delete ThirdlevelCategory with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  delete: deleteDic
};
