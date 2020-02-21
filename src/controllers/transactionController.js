import Transaction from '../models/transaction';

const getTransactions = (req, res, next) => {
    try {
        res.send();
    } catch(error) {
        next(error);
    }
};

const getBalance = (req, res, next) => {
    try {

    } catch(error) {
        next(error);
    }
};

const sendTransaction = (req, res, next) => {
    try {
        const transaction = new Transaction(req.body);
    } catch(error) {
        next(error);
    }
}

export default {getTransactions, getBalance, sendTransaction};