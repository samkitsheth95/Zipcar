const { User } = require('../models/index');

function updateHandler(req, res) {
  User.update({
    ...req.body,
  }, {
    where: {
      id: req.user.id,
    },
  }).then((user) => {
    res.status(200).send(user);
  },
  (err) => {
    res.status(400).send(err);
  });
}

function getUserHandler(req, res) {
  User.findOne({
    where: {
      id: req.user.id,
    },
  }).then((user) => {
    res.status(200).send(user);
  },
  (err) => {
    res.status(400).send(err);
  });
}

module.exports = {
  updateHandler, getUserHandler,
};
