//require mongoose module
var mongoose = require('mongoose');

//require chalk module to give colors to console text
var chalk = require('chalk');

//require database URL from properties file
var dbURL = 'mongodb+srv://myvacala:myvacala@cluster0.tf4qf.mongodb.net/myvacala?retryWrites=true&w=majority';
console.log(dbURL);

// const mongoose = require('mongoose'); 
// mongoose.connect('mongodb+srv://myvacala:myvacala@cluster0.tf4qf.mongodb.net/myvacala?retryWrites=true&w=majority'); 
// var db = mongoose.connection; 
// db.on('error', console.log.bind(console, "connection error")); 
// db.once('open', function(callback){ 
//     console.log("connection succeeded"); 
// })
//Mongoose Plugin
//const SoftDeletePlugin = require("./plugins/softDelete.plugin");

var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

//export this function and imported by server.js
module.exports = function() {
    mongoose.set('useCreateIndex', true);
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('debug', true);
    mongoose.connect('mongodb+srv://myvacala:myvacala@cluster0.tf4qf.mongodb.net/myvacala?retryWrites=true&w=majority',{ useNewUrlParser: true }); 
//mongoose.connect(dbURL, { useNewUrlParser: true });

    //mongoose.plugin(require("./plugins/softDelete.plugin"), { deletedAt: true, deletedBy: true, overrideMethods: 'all' });

    mongoose.connection.on('connected', function() {
        console.log(connected("Mongoose default connection is open to ", dbURL));
    });

    mongoose.connection.on('error', function(err) {
        console.log(error("Mongoose default connection has occured " + err + " error"));
    });

    mongoose.connection.on('disconnected', function() {
        console.log(disconnected("Mongoose default connection is disconnected"));
    });

    process.on('SIGINT', function() {
        mongoose.connection.close(function() {
            console.log(termination("Mongoose default connection is disconnected due to application termination"));
            process.exit(0)
        });
    });

    mongoose.Promise = global.Promise;
}