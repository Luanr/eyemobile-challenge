import {Model, DataTypes} from 'sequelize';
import sequelize from '../database';

const Transaction = sequelize.define('Transaction', {
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

const createTransaction = (... params) => {
    const {nsu, valor, bandeira, modalidade, horario} = params;

    try {

    } catch(e) {

    }
}

const calculateBalance = () => {
    return {"receber": 1.0, "disponivel": 2.0};
}

export default {Transaction, calculateBalance, createTransaction};