const Sequelize = require('sequelize');

const {
  MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB,
} = process.env;

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PASSWORD, {
  host: MYSQL_HOST,
  dialect: 'mysql',
});
const userMoldels = require('./user')(sequelize, Sequelize);
const locationMoldels = require('./location')(sequelize, Sequelize);
const vehicletypeMoldels = require('./vehicleType')(sequelize, Sequelize);
const vehicleMoldels = require('./vehicleType')(sequelize, Sequelize);

// sequelize.sync({ alter: true, force: false });

module.exports = {
  ...userMoldels, ...locationMoldels, ...vehicletypeMoldels, ...vehicleMoldels,
};
