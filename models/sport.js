const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Sport = sequelize.define('Sport', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Sport;
};
