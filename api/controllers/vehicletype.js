const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse } = require('../lib/response');

const Vehicletype = require("../models/VehicletypeModel");

const findAll = (req, res, next) => {
  Vehicletype.find()
    .then(Vehicletype => {
        getAllResponse(res, Vehicletype);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving Vehicletype.");
    });
};

const create = (req, res, next) => {
  const vehicletype = new Vehicletype(req.body);
  vehicletype
    .save()
    .then(Vehicletype => {
        createResponse(res, Vehicletype);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the Vehicletype.");
    });
};

const deleteDic = (req, res, next) => {
  Vehicletype.findByIdAndRemove(req.params.id)
    .then(Vehicletype => {
      if (!Vehicletype)
        error404(res, "Vehicletype not found with id " + req.params.id);
      res.send({ message: "Vehicletype deleted successfully!" });
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Vehicletype not found with id ${err.value}`);
      error500(res, `Could not delete Vehicletype with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  delete: deleteDic
};
