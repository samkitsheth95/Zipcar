const express = require('express');
const session = require('express-session');
const multer = require('multer');
const cors = require('cors');
const dotenv = require('dotenv');
const passport = require('passport');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
dotenv.config();

app.use(cors({
  origin: [process.env.FRONTEND],
  credentials: true,
}));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(multer().any());
app.use(express.static('public'));

app.use(require('./routes'));

app.get('*', (req, res) => {
  res.redirect('/');
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
