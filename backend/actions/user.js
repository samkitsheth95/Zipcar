const { User } = require('../models/index');

function updateHandler(req, res) {
  console.log({...req.body});
  //   if (req.body.isAdmin === '1' && req.body.passcode !== '12345') { res.status(400).send({ res: 'Failed' }); } else {
  //     bcrypt.hash(req.body.password, 10).then((hash) => {
  //       User.create({
  //         ...req.body,
  //         isAdmin: (req.body.isAdmin === '1' ? 1 : 0),
  //         password: hash,
  //       }).then(() => {
  //         res.send({ res: 'Success' });
  //       }, () => {
  //         res.status(400).send({ res: 'Failed' });
  //       });
  //     });
  //   }
  res.status(200).send({ res: 'done' });
}


module.exports = {
  updateHandler,
};
