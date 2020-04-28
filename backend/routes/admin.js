const express = require('express');

const app = express();
const {
  addlocationHandler, getLocationsHandler, deleteLocationsHandler,
  editLocationsHandler, addVehicletypeHandler, getvehicletypeHandler,
  deletevehicletypeHandler, editvehicletypeHandler,
} = require('../actions/admin');

app.post('/addlocation', addlocationHandler);
app.get('/getlocations', getLocationsHandler);
app.post('/deletelocation', deleteLocationsHandler);
app.post('/editlocation', editLocationsHandler);

app.post('/addvehicletype', addVehicletypeHandler);
app.get('/getvehicletype', getvehicletypeHandler);
app.post('/deletevehicletype', deletevehicletypeHandler);
app.post('/editvehicletype', editvehicletypeHandler);

module.exports = app;
