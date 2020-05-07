const express = require('express');

const app = express();
const {
  addlocationHandler, getLocationsHandler, deleteLocationsHandler,
  editLocationsHandler, addVehicletypeHandler, getvehicletypeHandler,
  deletevehicletypeHandler, editvehicletypeHandler, addvehicleHandler,
  getvehicleHandler, deletevehicleHandler, editvehicleHandler,
  getmemebersHandler, editmemberHandler,
} = require('../actions/admin');

app.post('/addlocation', addlocationHandler);
app.get('/getlocations', getLocationsHandler);
app.post('/deletelocation', deleteLocationsHandler);
app.post('/editlocation', editLocationsHandler);

app.post('/addvehicletype', addVehicletypeHandler);
app.get('/getvehicletype', getvehicletypeHandler);
app.post('/deletevehicletype', deletevehicletypeHandler);
app.post('/editvehicletype', editvehicletypeHandler);

app.post('/addvehicle', addvehicleHandler);
app.get('/getvehicle', getvehicleHandler);
app.post('/deletevehicle', deletevehicleHandler);
app.post('/editvehicle', editvehicleHandler);

app.get('/getmemebers', getmemebersHandler);
app.post('/editmember', editmemberHandler);

module.exports = app;
