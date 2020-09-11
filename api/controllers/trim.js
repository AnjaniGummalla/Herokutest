const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse,updateResponse,response} = require('../lib/response');

const Trim = require("../models/TrimModel");

const findmodel = (req, res, next) => {
  Trim.find({Model_Id:req.body.Model_Id})
    .then(Trim => {
        getAllResponse(res, Trim);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving Trim.");
    });
};

const create = (req, res, next) => {
  const Trimes = new Trim(req.body);
  Trimes
    .save()
    .then(Trim => {
        createResponse(res, Trim);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the Trim.");
    });
};

const trimupdate = async (req, res, next) => {
  console.log(req.params.id)
 await Trim.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(trim => {
      console.log(trim)
      if (!trim) error404(res, "trim not found with id " + req.params.id);
      updateResponse(res, trim, 'trim updated successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `trim not found with id ${err.value}`);
      error500(res, `Error updating trim with id ${err.value}`);
    });
};

const deleteDic = (req, res, next) => {
  Trim.findByIdAndRemove(req.params.id)
    .then(Trim => {
      if (!Trim)
        error404(res, "Trim not found with id " + req.params.id);
      response(res, 'Trim Deleted successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Trim not found with id ${err.value}`);
      error500(res, `Could not delete Trim with id ${err.value}`);
    });
};

module.exports = {
  findmodel,
  create,
  trimupdate,
  delete: deleteDic
};
