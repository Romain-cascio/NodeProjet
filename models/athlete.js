// models/Athlete.js
module.exports = (sequelize, DataTypes) => {
  const Athlete = sequelize.define('Athlete', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
    },
  });

  return Athlete;
};
