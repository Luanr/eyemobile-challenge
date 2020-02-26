import {Model, DataTypes} from 'sequelize';
import sequelize from '../database';

export const Transaction = sequelize.define('Transactions', {
      nsu: {
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

export const getTransactions = () => {
    return Transaction.findAll({
        attributes: ['nsu', 'valor','liquido','bandeira','modalidade','horario','disponivel']
    });
}

export const createTransaction = (params) => {
    const nsu = params.nsu;
    const bandeira = params.bandeira;
    const modalidade = params.modalidade;
    const horario = params.horario;
    const valor = params.valor;
    let liquid, paymentDate, floatValor;

    floatValor = parseFloat(valor);
    liquid = getLiquidValue(modalidade, floatValor);
    paymentDate = getPaymentDate(modalidade, horario);

    let creation = Transaction.create({
        nsu: nsu,
        valor: floatValor,
        bandeira: bandeira,
        modalidade: modalidade,
        horario: horario,
        liquido: liquid,
        disponivel: paymentDate
    });
}

export const floatValue = (input) => {
    let remainder = input % 1;
    if(remainder != 0 && !remainder.isNaN()) {
        return parseFloat(input);
    } else {
        throw new Error('Invalid number'); 
    }
}

export const getPaymentDate = (paymentType, transactionDate) => {
    if(paymentType == 'credito') {
        return '2019-01-07';
    } else if (paymentType == 'debito') {
        return '2019-01-07';
    }
    throw new Error('Invalid payment type!');
}

export const getLiquidValue = (paymentType, total) => {
    if(paymentType == 'credito') {
        return total * 0.02;
    } else if (paymentType == 'debito') {
        return total * 0.03;
    }
    throw new Error('Invalid payment type!');
}

export const getAvailableDate = () => {

}

export const calculateBalance = () => {
    return {"receber": 1.0, "disponivel": 2.0};
}