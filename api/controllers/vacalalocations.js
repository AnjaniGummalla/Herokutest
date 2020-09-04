const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse } = require('../lib/response');

const VacalaLocation = require("../models/LocationModel");

const findAll = (req, res, next) => {
  VacalaLocation.find()
    .then(VacalaLocation => {
        getAllResponse(res, VacalaLocation);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving VacalaLocation.");
    });
};

const create = (req, res, next) => {
  const VacalaLocation = new VacalaLocation(req.body);
  VacalaLocation
    .save()
    .then(VacalaLocation => {
        createResponse(res, VacalaLocation);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the VacalaLocation.");
    });
};

const deleteDic = (req, res, next) => {
  VacalaLocation.findByIdAndRemove(req.params.id)
    .then(VacalaLocation => {
      if (!VacalaLocation)
        error404(res, "VacalaLocation not found with id " + req.params.id);
      res.send({ message: "VacalaLocation deleted successfully!" });
    })
    .catch(err => {
      NotFoundInCatch(res, err, `VacalaLocation not found with id ${err.value}`);
      error500(res, `Could not delete VacalaLocation with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  delete: deleteDic
};
