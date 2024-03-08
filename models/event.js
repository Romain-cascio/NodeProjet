// models/event.js

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Event = sequelize.define('Event', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    SportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // ... autres champs nécessaires
  });

  return Event;
};
