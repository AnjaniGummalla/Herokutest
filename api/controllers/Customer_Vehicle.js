const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse,ServerResponse,updateResponse,response } = require('../lib/response');

const Customer_Vehicle = require("../models/Customer_VehicleModel");

const findAll = (req, res, next) => {
  Customer_Vehicle.find({Customer_id:req.body.Customer_id})
    .then(Customer_Vehicle => {
        getAllResponse(res, Customer_Vehicle);
    })
    .catch(err => {
        error500(res, err.message || "Some error occurred while retrieving Customer_Vehicle.");
    });
};

const create = (req, res, next) => {
  const customer_Vehicle = new Customer_Vehicle(req.body);
  customer_Vehicle
    .save()
    .then(Customer_Vehicle => {
        createResponse(res, Customer_Vehicle);
    })
    .catch(err => {
      error422(res, err);
          console.log(err)
      error500(res, err.message || "Some error occurred while creating the Customer_Vehicle.");
    });
};

const defaultVehiclechange = async (req, res, next) => {
  try{
       var updatedData = await Customer_Vehicle.findOneAndUpdate({Customer_id:req.body.Customer_id,Vehicle_type:"Home"},{Vehicle_type:""},{ new: true });
        console.log(updatedData);
        updateResponse(res, updatedData, 'Data updated successfully');
  }
  catch(e){
    console.log(e)
     ServerResponse(res, "Server error");
  }

};

const vehicleupdate = (req, res, next) => {
  Customer_Vehicle.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(product => {
      if (!product) error404(res, "Vehicle not found with id " + req.params.id);
      updateResponse(res, product, 'Vehicle updated successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Vehicle not found with id ${err.value}`);
      ServerResponse(res, "Server error");
    });
};


const deletevehicle = (req, res, next) => {
  Customer_Vehicle.findByIdAndRemove(req.params.id)
    .then(Customer_Vehicle => {
      if (!Customer_Vehicle)
        response(res, "Customer_Vehicle not found with id " + req.params.id);
       response(res,'Vehicle Deleted successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Customer_Vehicle not found with id ${err.value}`);
      console.log(err)
        ServerResponse(res, "Server error");
    });
};

module.exports = {
  findAll,
  create,
  vehicleupdate,
  //defaultVehiclechange,
  delete: deletevehicle
};
