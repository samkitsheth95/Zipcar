const { User } = require('../models/index');

function updateHandler(req, res) {
  User.update({
    ...req.body,
  }, {
    where: {
      id: req.user.id,
    },
  });
  res.status(200).send(req.body);
}


module.exports = {
  updateHandler,
};
