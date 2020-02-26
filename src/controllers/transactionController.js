import * as Transaction from '../models/transaction';

const getTransactions = async (req, res) => {
    try {
        let result = await Transaction.getTransactions();
        res.json(result);
    } catch(error) {
        res.status(500).send('Error!'+ error);
    }
};

const getBalance = async (req, res) => {
    try {
        res.json(Transaction.calculateBalance());
    } catch(error) {
        res.status(500).send('Error!'+ error);
    }
};

const sendTransaction = async (req, res) => {
    try {
        Transaction.createTransaction(req.query);
        console.log(req.query);
        res.json('Sucess!');
    } catch(error) {
        res.status(500).send('Error!'+ error);
    }
}

export default {getTransactions, getBalance, sendTransaction};