import {check} from 'express-validator';

export const floatValue = (input) => {
    let remainder = input % 1;
    if(remainder != 0 && !remainder.isNaN()) {
        return parseFloat(input);
    } else {
        throw new Error('Invalid number'); 
    }
}

export const validateTransaction = [
    check('nsu').not().isEmpty(),
    check('valor').not().isEmpty(),
    check('bandeira').not().isEmpty(),
    check('modalidade').not().isEmpty(),
    check('horario').not().isEmpty()
];

export const getPaymentDate = (paymentType, transactionDate) => {
    let date = new Date(transactionDate);
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