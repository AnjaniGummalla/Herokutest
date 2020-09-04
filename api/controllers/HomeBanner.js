const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse } = require('../lib/response');

const HomeBanner = require("../models/HomeBannerModel");

const findAll = (req, res, next) => {
  HomeBanner.find()
    .then(HomeBanner => {
        getAllResponse(res, HomeBanner);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving HomeBanner.");
    });
};

const create = (req, res, next) => {
  const homeBanner = new HomeBanner(req.body);
  homeBanner
    .save()
    .then(HomeBanner => {
        createResponse(res, HomeBanner);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the HomeBanner.");
    });
};

const deleteDic = (req, res, next) => {
  HomeBanner.findByIdAndRemove(req.params.id)
    .then(HomeBanner => {
      if (!HomeBanner)
        error404(res, "HomeBanner not found with id " + req.params.id);
      res.send({ message: "HomeBanner deleted successfully!" });
    })
    .catch(err => {
      NotFoundInCatch(res, err, `HomeBanner not found with id ${err.value}`);
      error500(res, `Could not delete HomeBanner with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  delete: deleteDic
};
