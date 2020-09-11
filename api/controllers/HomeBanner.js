const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse,response,updateResponse} = require('../lib/response');

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

const homebannerupdate = async (req, res, next) => {
  console.log(req.params.id)
 await HomeBanner.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(homebanner => {
      console.log(homebanner)
      if (!homebanner) error404(res, "homebanner not found with id " + req.params.id);
      updateResponse(res, homebanner, 'homebanner updated successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `homebanner not found with id ${err.value}`);
      error500(res, `Error updating homebanner with id ${err.value}`);
    });
};

const deleteDic = (req, res, next) => {
  HomeBanner.findByIdAndRemove(req.params.id)
    .then(HomeBanner => {
      if (!HomeBanner)
        error404(res, "HomeBanner not found with id " + req.params.id);
       response(res, 'HomeBanner Deleted successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `HomeBanner not found with id ${err.value}`);
      error500(res, `Could not delete HomeBanner with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  create,
  homebannerupdate,
  delete: deleteDic
};
