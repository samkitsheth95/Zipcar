const Sequelize = require('sequelize');
const { User, Vehicle } = require('../models/index');

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

function searchHandler(req, res) {
  console.log({ ...req.body });
  const { Op } = Sequelize;
  Vehicle.findAll({
    where: {
      ...req.body,
      name: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', `%${req.body.name}%`),
    },
  }).then((result) => {
    // console.log(result);
    res.status(200).send(result);
  },
  (err) => {
    console.log(err);
    res.status(400).send(err);
  });
}

module.exports = {
  updateHandler, getUserHandler, searchHandler,
};
