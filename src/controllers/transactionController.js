import {Transaction} from '../models/transaction';
import {getPaymentDate, getLiquidValue, getAvailableDate} from '../helpers';
import {validationResult} from 'express-validator';
import {Sequelize} from 'sequelize';

const getTransactions = async (req, res) => {
    try {
        let result = await Transaction.findAll({
            attributes: ['nsu', 'valor','liquido','bandeira','modalidade','horario','disponivel']
        });
        res.json(result);
    } catch(error) {
        res.status(500).send('Error!'+ error);
    }
};

const getBalance = async (req, res) => {
    try {
        res.json({"receber": 1.0, "disponivel": 2.0});
    } catch(error) {
        res.status(500).send('Error!'+ error);
    }
};

const sendTransaction = async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(405).json({ errors: errors.array() });
    }

    try {
        const {nsu, valor, bandeira, modalidade, horario} = req.query;

        const floatValor = parseFloat(valor);
        const liquid = getLiquidValue(modalidade, floatValor);
        const paymentDate = getPaymentDate(modalidade, horario);

        const creation = await Transaction.create({
            nsu: nsu,
            valor: floatValor,
            bandeira: bandeira,
            modalidade: modalidade,
            horario: horario,
            liquido: liquid,
            disponivel: paymentDate
        });

        res.json('sucess');
    } catch(error) {
        res.status(405).json({errors: error.errors.map((err) => {return err.message})});
    }
}

export default {getTransactions, getBalance, sendTransaction};