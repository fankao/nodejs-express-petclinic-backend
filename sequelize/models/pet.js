'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pet.belongsTo(models.Owner, {
        foreignKey: 'ownerId',
        as: 'owner'
      });
      Pet.belongsTo(models.Type, {
        foreignKey: 'typeId',
        as: 'type'
      });
      Pet.hasMany(models.Visit, {
        foreignKey: 'petId',
        as: 'visits',
        onDelete: 'CASCADE',
      })
    }
  };
  Pet.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    birthDate: {
      type: DataTypes.DATE,
    },
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    typeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Pet',
  });
  return Pet;
};