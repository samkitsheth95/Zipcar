module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define('vehicle', {
    vehicletype: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    makeyear: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    modelnumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    registrationtag: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    mileage: {
      type: DataTypes.INTEGER(),
      allowNull: false,
    },
    lastserviced: {
      type: DataTypes.DATEONLY(),
      allowNull: false,
    },
    vehiclecondition: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    rentallocation: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  });
  return {
    Vehicle,
  };
};
