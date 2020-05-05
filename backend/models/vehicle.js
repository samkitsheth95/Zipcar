module.exports = (sequelize, DataTypes, User) => {
  const Vehicle = sequelize.define('vehicle', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    vehicletype: {
      type: DataTypes.STRING(255),
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
  const Booking = sequelize.define('booking', {
    from: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
    to: {
      type: DataTypes.DATE(),
      allowNull: false,
    },
  });
  Booking.belongsTo(User);
  Booking.belongsTo(Vehicle);
  return {
    Vehicle, Booking,
  };
};
