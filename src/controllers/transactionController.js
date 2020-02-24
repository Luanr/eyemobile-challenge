import Transaction from '../models/transaction';

const getTransactions = (req, res) => {
    try {
        res.send();
    } catch(error) {
        res.status(500).send('Error!')
    }
};

const getBalance = async (req, res) => {
    try {
        res.json(Transaction.calculateBalance());
    } catch(error) {
        res.status(500).send('Error!')
    }
};

const sendTransaction = (req, res) => {
    try {
        const rawTransaction = Transaction.createTransaction(JSON.parse(req.body));
        res.status(200).end();
    } catch(error) {
        res.status(500).send('Error!')
    }
}

export default {getTransactions, getBalance, sendTransaction};