const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse,updateResponse,response } = require('../lib/response');

const SecondlevelCategory = require("../models/SecondlevelCategoryModel");

const findAll = (req, res, next) => {
  SecondlevelCategory.find({Top_level_cat_id:req.body.Top_level_cat_id})
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
  SecondlevelCategory.findByIdAndRemove(req.params.id)
    .then(SecondlevelCategory => {
      if (!SecondlevelCategory)
        error404(res, "SecondlevelCategory not found with id " + req.params.id);
       response(res, 'Category Deleted successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `SecondlevelCategory not found with id ${err.value}`);
      error500(res, `Could not delete SecondlevelCategory with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  categoryupdate,
  delete: deleteDic
};
