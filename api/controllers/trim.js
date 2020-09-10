const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse } = require('../lib/response');

const Trim = require("../models/TrimModel");

const findAll = (req, res, next) => {
  Trim.find()
    .then(Trim => {
        getAllResponse(res, Trim);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving Trim.");
    });
};

const create = (req, res, next) => {
  const Trimes = new Trim(req.body);
  Trimes
    .save()
    .then(Trim => {
        createResponse(res, Trim);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the Trim.");
    });
};

const deleteDic = (req, res, next) => {
  Trim.findByIdAndRemove(req.params.id)
    .then(Trim => {
      if (!Trim)
        error404(res, "Trim not found with id " + req.params.id);
      res.send({ message: "Trim deleted successfully!" });
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Trim not found with id ${err.value}`);
      error500(res, `Could not delete Trim with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  delete: deleteDic
};
