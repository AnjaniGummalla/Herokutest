const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse,updateResponse,response} = require('../lib/response');

const Origin = require("../models/OriginModel");

const findmodel = (req, res, next) => {
  Origin.find({Model_Id:req.body.Model_Id})
    .then(Origin => {
        getAllResponse(res, Origin);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving Origin.");
    });
};

const create = (req, res, next) => {
  const Origines = new Origin(req.body);
  Origines
    .save()
    .then(Origin => {
        createResponse(res, Origin);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the Origin.");
    });
};

const Originupdate = async (req, res, next) => {
  console.log(req.params.id)
 await Origin.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(Origin => {
      console.log(Origin)
      if (!Origin) error404(res, "Origin not found with id " + req.params.id);
      updateResponse(res, Origin, 'Origin updated successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Origin not found with id ${err.value}`);
      error500(res, `Error updating Origin with id ${err.value}`);
    });
};

const deleteDic = (req, res, next) => {
  Origin.findByIdAndRemove(req.params.id)
    .then(Origin => {
      if (!Origin)
        error404(res, "Origin not found with id " + req.params.id);
      response(res, 'Origin Deleted successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Origin not found with id ${err.value}`);
      error500(res, `Could not delete Origin with id ${err.value}`);
    });
};

module.exports = {
  findmodel,
  create,
  Originupdate,
  delete: deleteDic
};
