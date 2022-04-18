const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Attractions extends Model {}

Attractions.init(
  {
    attractions_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    food: {
      type: DataTypes.STRING
    },
    activities: {
      type: DataTypes.STRING
    },
    hotel: {
      type: DataTypes.STRING
    }  
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'attractions'
  }
);

module.exports = Attractions;
