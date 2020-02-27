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
        unique: true,
        type: DataTypes.STRING,
        isNumeric: true,
        notEmpty: true,
        allowNull: false
      },
      valor: {
          type: DataTypes.FLOAT,
          allowNull: false,
          validate: {
            isFloat: true,
            min: 0
          }
      },
      liquido: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            isFloat: true,
            min: 0
          }
      },
      bandeira: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isIn: [['MASTERCARD', 'VISA','ELO','AMEX']]
          }
      },
      modalidade: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isIn: [['credito', 'debito']]
          }
      },
      horario: {
          type: DataTypes.DATE,
          allowNull: false,
          validate: {
            notEmpty: true,
            isDate: true
          }
      },
      disponivel: {
          type: DataTypes.DATE,
          allowNull: true,
          validate: {
            notEmpty: true,
            isDate: true
          }
      },
    });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Transactions');
  }
};
