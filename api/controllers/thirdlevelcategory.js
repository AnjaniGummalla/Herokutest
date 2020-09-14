const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse,updateResponse,response } = require('../lib/response');
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
const categoryupdate = async (req, res, next) => {
  console.log(req.params.id)
 await SecondlevelCategory.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(Category => {
      console.log(Category)
      if (!Category) error404(res, "Category not found with id " + req.params.id);
      updateResponse(res, Category, 'Category updated successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Category not found with id ${err.value}`);
      error500(res, `Error updating Category with id ${err.value}`);
    });
};

const deleteDic = (req, res, next) => {
  ThirdlevelCategory.findByIdAndRemove(req.params.id)
    .then(ThirdlevelCategory => {
      if (!ThirdlevelCategory)
        error404(res, "ThirdlevelCategory not found with id " + req.params.id);
       response(res, 'Category Deleted successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `ThirdlevelCategory not found with id ${err.value}`);
      error500(res, `Could not delete ThirdlevelCategory with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  categoryupdate,
  delete: deleteDic
};
