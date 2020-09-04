const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse } = require('../lib/response');

const Vendor = require("../models/VendorModel");

const findAll = (req, res, next) => {
  Vendor.find()
    .then(Vendor => {
        getAllResponse(res, Vendor);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving Vendor.");
    });
};

const create = (req, res, next) => {
  const vendor = new Vendor(req.body);
  vendor
    .save()
    .then(Vendor => {
        createResponse(res, Vendor);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the Vendor.");
    });
};

const deleteDic = (req, res, next) => {
  Vendor.findByIdAndRemove(req.params.id)
    .then(Vendor => {
      if (!Vendor)
        error404(res, "Vendor not found with id " + req.params.id);
      res.send({ message: "Vendor deleted successfully!" });
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Vendor not found with id ${err.value}`);
      error500(res, `Could not delete Vendor with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  delete: deleteDic
};
