const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse } = require('../lib/response');

const Class = require("../models/ClassModel");

const findAll = (req, res, next) => {
  Class.find()
    .then(Class => {
        getAllResponse(res, Class);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving Class.");
    });
};

const create = (req, res, next) => {
  const classes = new Class(req.body);
  classes
    .save()
    .then(Class => {
        createResponse(res, Class);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the Class.");
    });
};

const deleteDic = (req, res, next) => {
  Class.findByIdAndRemove(req.params.id)
    .then(Class => {
      if (!Class)
        error404(res, "Class not found with id " + req.params.id);
      res.send({ message: "Class deleted successfully!" });
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Class not found with id ${err.value}`);
      error500(res, `Could not delete Class with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  delete: deleteDic
};
