const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Favorites extends Model {}

Favorites.init(
  {
    favorites_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:'user',
        key: 'id'
      }
    },
    thingsToDo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model: 'thingsToDo',
        key: 'id'
      }
    }
    
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'favorites'
  }
);

module.exports = Favorites;
