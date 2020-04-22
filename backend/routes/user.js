const express = require('express');

const app = express();
const {
  updateHandler,
} = require('../actions/user');

app.post('/update', updateHandler);

module.exports = app;
