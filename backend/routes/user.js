const express = require('express');

const app = express();
const {
  updateHandler, getUserHandler, searchHandler,
} = require('../actions/user');

app.post('/update', updateHandler);
app.post('/search', searchHandler);
app.get('/getuser', getUserHandler);

module.exports = app;
