const { NotFoundInCatch, error500, error404, error422 } = require('../lib/error');
const { getAllResponse, createResponse, response,ServerResponse,updateResponse,getOneResponse } = require('../lib/response');
const bcrypt = require("bcryptjs");
const { check, validationResult} = require("express-validator/check");
const jwt = require("jsonwebtoken");
const User = require('../models/AdminModel')

//const Customer = require("../models/CustomerModel");

const findAll = (req, res, next) => {
  User.find()
    .then(User => {
        getAllResponse(res, User);
    })
    .catch(err => { 
        error500(res, err.message || "Some error occurred while retrieving User.");
    });
};

const create =  async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        const {
            Name,
            Email,
            Password
        } = req.body;
        try {
            let user = await User.findOne({
                Email
            });
            if (user) {
                response(res, "User Already exists");
            }

            user = new User({
                 Name,
                 Email,
                 Password
            });

            const salt = await bcrypt.genSalt(10);
            user.Password = await bcrypt.hash(Password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                "randomString", {
                    expiresIn: 10000
                },
                (err, token) => {
                    if (err) throw err;
                  createResponse(res,token,"Registration successfully");
                }
            );
        } catch (err) {
            console.log(err.message);
            response(res, "Error while Saving");
        }
    };

const authlogin = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { Email, Password } = req.body;
    try {
      let user = await User.findOne({
        Email
      });
      console.log(user);
      if (!user)
       response(res, "User Not Exists");

      const isMatch = await bcrypt.compare(Password, user.Password);
      if (!isMatch)
        response(res, "Incorrect Password");

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        "randomString",
        {
          expiresIn: 3600
        },
        (err, token) => {
          if (err) throw err;
          const data = {
            token: token,
            user: user
          }
           getOneResponse(res, data);
          
        }
      );
    } catch (e) {
      console.error(e);
      ServerResponse(res, "Server error");
    }
  };

const update = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
    .then(user => {
      if (!user) error404(res, "User not found with id " + req.params.id);
      updateResponse(res, user, 'User updated successfully');
    })
    .catch(err => {
      NotFoundInCatch(res, err, `user not found with id ${err.value}`);
      error500(res, `Error updating user with id ${err.value}`);
    });
};
const deleteDic = (req, res, next) => {
  Customer.findByIdAndRemove(req.params.id)
    .then(Customer => {
      if (!Customer)
        error404(res, "Customer not found with id " + req.params.id);
      res.send({ message: "Customer deleted successfully!" });
    })
    .catch(err => {
      NotFoundInCatch(res, err, `Customer not found with id ${err.value}`);
      error500(res, `Could not delete Customer with id ${err.value}`);
    });
};

module.exports = {
  findAll,
  authlogin,
  create,
  update,
  delete: deleteDic
};
