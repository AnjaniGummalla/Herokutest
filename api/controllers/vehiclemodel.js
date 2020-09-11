const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse,updateResponse,response} = require('../lib/response');

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
const findbrand = (req, res, next) => {
  VehicleModel.find({Brand_Id:req.body.Brand_Id})
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

const vehiclemodelupdate = async (req, res, next) => {
  console.log(req.params.id)
 await VehicleModel.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(vehiclemodel => {
      console.log(vehiclemodel)
      if (!vehiclemodel) error404(res, "vehiclemodel not found with id " + req.params.id);
      updateResponse(res, vehiclemodel, 'vehiclemodel updated successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `vehiclemodel not found with id ${err.value}`);
      error500(res, `Error updating vehiclemodel with id ${err.value}`);
    });
};

const deleteDic = (req, res, next) => {
  VehicleModel.findByIdAndRemove(req.params.id)
    .then(VehicleModel => {
      if (!VehicleModel)
        error404(res, "VehicleModel not found with id " + req.params.id);
        response(res, 'VehicleModel Deleted successfully');
         })
    .catch(err => {
      NotFoundInCatch(res, err, `VehicleModel not found with id ${err.value}`);
      error500(res, `Could not delete VehicleModel with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  findbrand,
  vehiclemodelupdate,
  delete: deleteDic
};
