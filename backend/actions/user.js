const Sequelize = require('sequelize');
const { User, Vehicle, Booking } = require('../models/index');

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
    res.status(400).send(err);
  });
}

function makeBooking(req, res) {
  const startDate = new Date((new Date(req.body['select-date'])).getTime());
  const endDate = new Date(startDate.getTime() + (req.body['select-duration'] * 60 * 60 * 1000));
  Booking.findOne({
    where: {
      vehicleId: req.body.vehicleId,
      status: { [Sequelize.Op.notIn]: ['Cancelled', 'Ride Complete'] },
      [Sequelize.Op.or]: [{
        from: {
          [Sequelize.Op.between]: [startDate, endDate],
        },
      },
      {
        to: {
          [Sequelize.Op.between]: [startDate, endDate],
        },
      }],
    },
    nest: true,
    include: [Vehicle],
  }).then((bookings) => {
    if (bookings) res.status(400).send({ error: 'Booking slot does not exist for the selected Vehicle.Plese choose from these similar options.', vehicleType: bookings.vehicle.dataValues.vehicletype });
    else {
      Booking.create({
        userId: req.user.id,
        vehicleId: req.body.vehicleId,
        from: startDate,
        to: endDate,
        status: 'Booked',
      }).then(() => {
        res.status(200).send({ res: 'Success' });
      });
    }
  });
}


function getBookingHandler(req, res) {
  if (!req.user.isAdmin) {
    Booking.findAll({
      where: { userId: req.user.id },
      include: [Vehicle],
      raw: true,
      nest: true,
    })
      .then((result) => {
        res.status(200).send(result);
      },
      (err) => {
        res.status(400).send(err);
      });
  } else {
    Booking.findAll({
      include: [Vehicle],
      raw: true,
      nest: true,
    })
      .then((result) => {
        res.status(200).send(result);
      },
      (err) => {
        res.status(400).send(err);
      });
  }
}

function deleteBookingHandler(req, res) {
  if (req.body.isDelete === 'true') {
    Booking.update({
      status: 'Cancelled',
    }, {
      where: {
        id: req.body.id,
      },
    }).then(() => {
      res.status(200).send('removed');
    },
    (err) => {
      res.status(400).send(err);
    });
  } else {
    Booking.update({
      status: 'Ride Complete',
    }, {
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
}

module.exports = {
  updateHandler,
  getUserHandler,
  searchHandler,
  makeBooking,
  getBookingHandler,
  deleteBookingHandler,
};
