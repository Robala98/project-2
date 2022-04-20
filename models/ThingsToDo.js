const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ThingsToDo extends Model {}

ThingsToDo.init(
  {
    id: {
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
    modelName: 'thingsToDo'
  }
);

module.exports = ThingsToDo;
