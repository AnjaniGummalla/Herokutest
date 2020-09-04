const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse } = require('../lib/response');

const Brand = require("../models/BrandModel");

const findAll = (req, res, next) => {
  Brand.find()
    .then(Brand => {
        getAllResponse(res, Brand);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving Brand.");
    });
};

const create = (req, res, next) => {
  const brand = new Brand(req.body);
  brand
    .save()
    .then(Brand => {
        createResponse(res, Brand);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the Brand.");
    });
};

const deleteDic = (req, res, next) => {
  Brand.findByIdAndRemove(req.params.id)
    .then(Brand => {
      if (!Brand)
        error404(res, "Brand not found with id " + req.params.id);
      res.send({ message: "Brand deleted successfully!" });
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Brand not found with id ${err.value}`);
      error500(res, `Could not delete Brand with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  delete: deleteDic
};
