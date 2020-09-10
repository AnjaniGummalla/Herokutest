const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse,updateResponse,response } = require('../lib/response');

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

const categoryupdate = (req, res, next) => {
  ToplevelCategory.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(Category => {
      if (!Category) error404(res, "Category not found with id " + req.params.id);
      updateResponse(res, Category, 'Category updated successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Category not found with id ${err.value}`);
      error500(res, `Error updating Category with id ${err.value}`);
    });
};

const deleteDic = (req, res, next) => {
  ToplevelCategory.findByIdAndRemove(req.params.id)
    .then(ToplevelCategory => {
      if (!ToplevelCategory)
        error404(res, "ToplevelCategory not found with id " + req.params.id);
     response(res, 'Category Deleted successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `ToplevelCategory not found with id ${err.value}`);
      error500(res, `Could not delete ToplevelCategory with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  categoryupdate,
  delete: deleteDic
};
