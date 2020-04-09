module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
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
      allowNull: false,
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
    phone: {
      type: DataTypes.INTEGER(),
      allowNull: true,
    },
  });
  return {
    User,
  };
};
