const express = require('express');

const app = express();
const {
  updateHandler, getUserHandler, searchHandler, makeBooking, getBookingHandler,
} = require('../actions/user');

app.post('/update', updateHandler);
app.post('/search', searchHandler);
app.get('/getuser', getUserHandler);
app.get('/getbooking', getBookingHandler);
app.post('/book', makeBooking);

module.exports = app;
