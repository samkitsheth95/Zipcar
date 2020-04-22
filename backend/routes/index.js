const express = require('express');

const app = express();

app.use('/auth', require('./auth'));
app.use('/user', require('./user'));

module.exports = app;
