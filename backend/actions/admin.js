const { Location } = require('../models/index');

function addlocationHandler(req, res) {
  Location.create({
    ...req.body,
  }).then(() => {
    res.status(200).send('added');
  },
  (err) => {
    res.status(400).send(err);
  });
}

function getLocationsHandler(req, res) {
  Location.findAll({ raw: true, attributes: ['id', 'name', 'address', 'capacity'] }).then((locations) => {
    res.status(200).send(locations);
  },
  (err) => {
    res.status(400).send(err);
  });
}

function deleteLocationsHandler(req, res) {
  Location.destroy({
    where: {
      id: req.body.id,
    },
  }).then(() => {
    res.status(200).send('removed');
  },
  (err) => {
    res.status(400).send(err);
  });
}

module.exports = {
  addlocationHandler, getLocationsHandler, deleteLocationsHandler,
};
