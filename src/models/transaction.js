import {Sequelize, Model, DataTypes} from 'sequelize';

class Transaction extends Model {}

Transaction.init({
    nsu:        DataTypes.STRING,
    valor:      DataTypes.FLOAT,
    bandeira:   DataTypes.FLOAT,
    modalidade: DataTypes.STRING,
    horario:    DataTypes.DATE,
    disponivel: DataTypes.DATE
}, {sequelize, modelName: 'transaction'});

export default Transaction;