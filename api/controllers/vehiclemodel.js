const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse } = require('../lib/response');

const VehicleModel = require("../models/ModelSchemaModel");

const findAll = (req, res, next) => {
  VehicleModel.find()
    .then(VehicleModel => {
        getAllResponse(res, VehicleModel);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving VehicleModel.");
    });
};

const create = (req, res, next) => {
  const vehicleModel = new VehicleModel(req.body);
  vehicleModel
    .save()
    .then(VehicleModel => {
        createResponse(res, VehicleModel);
    })
    .catch(err => {
      error422(res, err);
  
      error500(res, err.message || "Some error occurred while creating the VehicleModel.");
    });
};

const deleteDic = (req, res, next) => {
  VehicleModel.findByIdAndRemove(req.params.id)
    .then(VehicleModel => {
      if (!VehicleModel)
        error404(res, "VehicleModel not found with id " + req.params.id);
      res.send({ message: "VehicleModel deleted successfully!" });
    })
    .catch(err => {
      NotFoundInCatch(res, err, `VehicleModel not found with id ${err.value}`);
      error500(res, `Could not delete VehicleModel with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  delete: deleteDic
};
