'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Visit.init({
    description: DataTypes.STRING,
    visitDate: DataTypes.DATE,
    petId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Visit',
  });
  return Visit;
};