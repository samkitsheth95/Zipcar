module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('location', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    capacity: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
  });
  return {
    Location,
  };
};
