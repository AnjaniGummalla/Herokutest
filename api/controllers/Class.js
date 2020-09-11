const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse,updateResponse,response} = require('../lib/response');

const Class = require("../models/ClassModel");

const findAll = (req, res, next) => {
  Class.find({Vehicle_Type:req.body.Vehicle_Type})
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

const classupdate = async (req, res, next) => {
  console.log(req.params.id)
 await Class.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(classes => {
      console.log(classes)
      if (!classes) error404(res, "classes not found with id " + req.params.id);
      updateResponse(res, classes, 'classes updated successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `classes not found with id ${err.value}`);
      error500(res, `Error updating classes with id ${err.value}`);
    });
};

const deleteDic = (req, res, next) => {
  Class.findByIdAndRemove(req.params.id)
    .then(Class => {
      if (!Class)
        error404(res, "Class not found with id " + req.params.id);
       response(res, 'Class Deleted successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Class not found with id ${err.value}`);
      error500(res, `Could not delete Class with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  classupdate,
  delete: deleteDic
};
