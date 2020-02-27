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
    check('valor').isFloat().not().isEmpty(),
    check('bandeira').not().isEmpty(),
    check('modalidade').not().isEmpty(),
    check('horario').isISO8601().not().isEmpty()
];

export const getAvailableDate = (paymentType, transactionDate) => {
    try {
        let date = new Date(transactionDate);
        let offset, newDate;

        if(paymentType == 'credito') {
            date = new Date(date.getTime() + 30 * 24 * 3600 * 1000);
        }

        switch (date.getDate) {
            case 4: // friday
                offset = 3;
                break;
            case 5: // saturday
                offset = 2;
                break;
            default:
                offset = 1;
        }
        newDate = new Date(date.getTime() + offset * 24 * 3600 * 1000);
        return dateToString(newDate);
    } catch(error) {
        throw new Error(error);
    }
}

export const dateToString = (date) => {
    return date.toISOString().split('T')[0];
}

export const getLiquidValue = (paymentType, total) => {
    if(paymentType == 'credito') {
        let liquid = total * (1 - 0.02);
        return liquid.toFixed(2);
    } else if (paymentType == 'debito') {
        let liquid = total * (1 - 0.03);
        return liquid.toFixed(2);
    }
    throw new Error('Invalid payment type!');
}