module.exports = (sequelize, DataTypes) => {
  const Vehicletype = sequelize.define('vehicletype', {
    vehicletype: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    hourlycost: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    onetofive: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    sixtoten: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    eleventofifteen: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    sixteenplus: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    sixmonthmemberfee: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    latefee: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
  });
  return {
    Vehicletype,
  };
};
