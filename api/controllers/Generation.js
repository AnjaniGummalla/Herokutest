const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse,response } = require('../lib/response');

const Generation = require("../models/GenerationModel");

const findmodel = (req, res, next) => {
  Generation.find({Model_Id:req.body.Model_Id})
    .then(Generation => {
        getAllResponse(res, Generation);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving Generation.");
    });
};

const create = (req, res, next) => {
  const generation = new Generation(req.body);
  generation
    .save()
    .then(Generation => {
        createResponse(res, Generation);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the Generation.");
    });
};

const deleteDic = (req, res, next) => {
  Generation.findByIdAndRemove(req.params.id)
    .then(Generation => {
      if (!Generation)
        error404(res, "Generation not found with id " + req.params.id);
     response(res, 'Generation Deleted successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Generation not found with id ${err.value}`);
      error500(res, `Could not delete Generation with id ${err.value}`);
    });
};

module.exports = {
  findmodel,
  create,
  delete: deleteDic
};
