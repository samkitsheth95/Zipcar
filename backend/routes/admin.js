const express = require('express');

const app = express();
const {
  addlocationHandler, getLocationsHandler, deleteLocationsHandler
} = require('../actions/admin');

app.post('/addlocation', addlocationHandler);
app.get('/getlocations', getLocationsHandler);
app.post('/deletelocation', deleteLocationsHandler);


module.exports = app;
