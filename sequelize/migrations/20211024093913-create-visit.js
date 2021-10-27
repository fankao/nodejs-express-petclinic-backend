'use strict';
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/database')[env];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Visits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      visitDate: {
        type: Sequelize.DATE
      },
      petId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Pets',
          key: 'id',
          as: 'petId',
        }
      }
    }, {
      schema: config.schema
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Visits');
  }
};