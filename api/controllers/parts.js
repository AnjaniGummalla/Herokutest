const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse } = require('../lib/response');

const PartsModel = require("../models/PartsModel");

const findAll = (req, res, next) => {
  PartsModel.find()
    .then(PartsModel => {
        getAllResponse(res, PartsModel);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving PartsModel.");
    });
};

const create = (req, res, next) => {
  const partsModel = new PartsModel(req.body);
  partsModel
    .save()
    .then(PartsModel => {
        createResponse(res, PartsModel);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the PartsModel.");
    });
};

const deleteDic = (req, res, next) => {
  PartsModel.findByIdAndRemove(req.params.id)
    .then(PartsModel => {
      if (!PartsModel)
        error404(res, "PartsModel not found with id " + req.params.id);
      res.send({ message: "PartsModel deleted successfully!" });
    })
    .catch(err => {
      NotFoundInCatch(res, err, `PartsModel not found with id ${err.value}`);
      error500(res, `Could not delete PartsModel with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  delete: deleteDic
};
