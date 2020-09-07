const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse,ServerResponse,updateResponse,response } = require('../lib/response');

const Customer_Location = require("../models/Customer_LocationModel");

const findAll = (req, res, next) => {
  Customer_Location.find({Customer_id:req.body.Customer_id})
    .then(Customer_Location => {
        getAllResponse(res, Customer_Location);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving Customer_Location.");
    });
};

const create = (req, res, next) => {
  const customer_Location = new Customer_Location(req.body);
  customer_Location
    .save()
    .then(Customer_Location => {
        createResponse(res, Customer_Location);
    })
    .catch(err => {
      error422(res, err);
      error500(res, err.message || "Some error occurred while creating the Customer_Location.");
    });
};

const defaultlocationchange = async (req, res, next) => {
  try{
       var updatedData = await Customer_Location.findOneAndUpdate({Customer_id:req.body.Customer_id,Location_type:"Home"},{Location_type:""},{ new: true });
        console.log(updatedData);
        updateResponse(res, updatedData, 'Data updated successfully');
  }
  catch(e){
    console.log(e)
     ServerResponse(res, "Server error");
  }

};

const locationupdate = (req, res, next) => {
  Customer_Location.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(product => {
      if (!product) error404(res, "Location not found with id " + req.params.id);
      updateResponse(res, product, 'Location updated successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Location not found with id ${err.value}`);
      ServerResponse(res, "Server error");
    });
};


const deleteloc = (req, res, next) => {
  Customer_Location.findByIdAndRemove(req.params.id)
    .then(Customer_Location => {
      if (!Customer_Location)
        response(res, "Customer_Location not found with id " + req.params.id);
       response(res,'Location Deleted successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Customer_Location not found with id ${err.value}`);
      console.log(err)
        ServerResponse(res, "Server error");
    });
};

module.exports = {
  findAll,
  create,
  locationupdate,
  defaultlocationchange,
  delete: deleteloc
};
