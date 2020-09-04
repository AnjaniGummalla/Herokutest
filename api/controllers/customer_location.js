const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse } = require('../lib/response');

const Customer_Location = require("../models/Customer_LocationModel");

const findAll = (req, res, next) => {
  Customer_Location.find({Customer_id:req.params.id})
    .then(Customer_Location => {
        getAllResponse(res, Customer_Location);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving Customer_Location.");
    });
};

const create = (req, res, next) => {
  const Customer_Location = new Customer_Location(req.body);
  Customer_Location
    .save()
    .then(Customer_Location => {
        createResponse(res, Customer_Location);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the Customer_Location.");
    });
};

const deleteDic = (req, res, next) => {
  Customer_Location.findByIdAndRemove(req.params.id)
    .then(Customer_Location => {
      if (!Customer_Location)
        error404(res, "Customer_Location not found with id " + req.params.id);
      res.send({ message: "Customer_Location deleted successfully!" });
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Customer_Location not found with id ${err.value}`);
      error500(res, `Could not delete Customer_Location with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  delete: deleteDic
};
