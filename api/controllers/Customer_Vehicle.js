const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse } = require('../lib/response');

const Customer_Vehicle = require("../models/Customer_Vehicles");

const findAll = (req, res, next) => {
  Customer_Vehicle.find({Customer_id:req.params.id})
    .then(Customer_Vehicle => {
        getAllResponse(res, Customer_Vehicle);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving Customer_Vehicle.");
    });
};

const create = (req, res, next) => {
  const customer_Vehicle = new Customer_Vehicle(req.body);
  customer_Vehicle
    .save()
    .then(Customer_Vehicle => {
        createResponse(res, Customer_Vehicle);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the Customer_Vehicle.");
    });
};

const deleteDic = (req, res, next) => {
  Customer_Vehicle.findByIdAndRemove(req.params.id)
    .then(Customer_Vehicle => {
      if (!Customer_Vehicle)
        error404(res, "Customer_Vehicle not found with id " + req.params.id);
      res.send({ message: "Customer_Vehicle deleted successfully!" });
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Customer_Vehicle not found with id ${err.value}`);
      error500(res, `Could not delete Customer_Vehicle with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  delete: deleteDic
};
