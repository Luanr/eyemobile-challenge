'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Transactions', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nsu: {
        type: DataTypes.STRING,
        allowNull: false
      },
      valor: {
          type: DataTypes.FLOAT,
          allowNull: false
      },
      bandeira: {
          type: DataTypes.FLOAT,
          allowNull: false
      },
      modalidade: {
          type: DataTypes.STRING,
          allowNull: false
      },
      horario: {
          type: DataTypes.DATE,
          allowNull: false
      },
      disponivel: {
          type: DataTypes.DATE,
          allowNull: false
      },
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Transactions');
  }
};
