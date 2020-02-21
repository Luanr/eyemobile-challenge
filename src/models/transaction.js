import {Model, DataTypes} from 'sequelize';
import sequelize from '../database';

class Transaction extends Model {}

Transaction.init({
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
}, {sequelize, modelName: 'transaction'});

const createTransaction = (... params) => {

}

export default Transaction;