const bcrypt = require('bcrypt');
const { User } = require('../models/index');

function loginHandler(req, username, password, done) {
  User.findOne({
    where: {
      username,
    },
  }).then((user) => {
    if (!user) done(null, false, { message: 'Incorrect username or password.' });
    bcrypt.compare(password, user.dataValues.password).then((result) => {
      if (result) done(null, user.dataValues);
      done(null, false, { message: 'Incorrect username or password.' });
    });
  });
}

function serializeUser(user, done) {
  done(null, user.id);
}

function deserializeUser(id, done) {
  User.findByPk(id).then((user) => {
    done(null, user.dataValues);
  });
}

function logoutHandler(req, res) {
  req.logout();
  res.send({ res: 'Success' });
}

function registerHandler(req, res) {
  if (req.body.isAdmin === '1' && req.body.passcode !== '12345') { res.status(400).send({ res: 'Failed' }); } 
  else {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      User.create({
        ...req.body,
        isAdmin: (req.body.isAdmin === '1' ? 1 : 0),
        password: hash,
      }).then(() => {
        res.send({ res: 'Success' });
      }, () => {
        res.status(400).send({ res: 'Failed' });
      });
    });
  }
}

function isLoggedIn(req, res) {
  res.send({ logged_in: !!req.user, is_admin: req.user && req.user.isAdmin });
}

module.exports = {
  loginHandler, serializeUser, deserializeUser, logoutHandler, registerHandler, isLoggedIn,
};
