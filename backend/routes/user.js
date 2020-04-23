const express = require('express');

const app = express();
const {
  updateHandler, getUserHandler,
} = require('../actions/user');

app.post('/update', updateHandler);
app.get('/getuser', getUserHandler);

module.exports = app;
