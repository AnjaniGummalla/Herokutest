const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse } = require('../lib/response');

const ToplevelCategory = require("../models/ToplevelCategoryModel");

const findAll = (req, res, next) => {
  ToplevelCategory.find()
    .then(ToplevelCategory => {
        getAllResponse(res, ToplevelCategory);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving ToplevelCategory.");
    });
};

const create = (req, res, next) => {
  const toplevelCategory = new ToplevelCategory(req.body);
  toplevelCategory
    .save()
    .then(ToplevelCategory => {
        createResponse(res, ToplevelCategory);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the ToplevelCategory.");
    });
};

const deleteDic = (req, res, next) => {
  ToplevelCategory.findByIdAndRemove(req.params.id)
    .then(ToplevelCategory => {
      if (!ToplevelCategory)
        error404(res, "ToplevelCategory not found with id " + req.params.id);
      res.send({ message: "ToplevelCategory deleted successfully!" });
    })
    .catch(err => {
      NotFoundInCatch(res, err, `ToplevelCategory not found with id ${err.value}`);
      error500(res, `Could not delete ToplevelCategory with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  delete: deleteDic
};
