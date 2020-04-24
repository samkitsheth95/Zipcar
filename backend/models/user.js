module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN(),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true,
    },
    password: {
      type: DataTypes.CHAR(60),
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY(),
      allowNull: true,
    },
    driverstate: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    phone: {
      type: DataTypes.INTEGER(),
      allowNull: true,
    },
    drivernumber: {
      type: DataTypes.BIGINT(),
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    ccname: {
      type: DataTypes.STRING(),
      allowNull: true,
    },
    ccnumber: {
      type: DataTypes.BIGINT(),
      allowNull: true,
    },
    expirymonth: {
      type: DataTypes.INTEGER(),
      allowNull: true,
    },
    expiryyear: {
      type: DataTypes.INTEGER(),
      allowNull: true,
    },
    cvv: {
      type: DataTypes.INTEGER(),
      allowNull: true,
    },
  });
  return {
    User,
  };
};
