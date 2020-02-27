import {Transaction} from '../models/transaction';
import {getLiquidValue, getAvailableDate, dateToString} from '../helpers';
import {validationResult} from 'express-validator';
import {Op, Sequelize} from 'sequelize';

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
        let todayStr = dateToString(new Date());
        let toReceive = await Transaction.sum('liquido', {  where: {    disponivel: {   [Op.gt]: todayStr}   } });
        let available = await Transaction.sum('liquido', {  where: {    disponivel: {   [Op.lte]: todayStr}   } });;
        res.json({"receber": toReceive, "disponivel": available});
    } catch(error) {
        res.status(500).send('Error!'+ error);
    }
};

const sendTransaction = async (req, res) => {
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(405).json({ errors: errors.array() });
    }

    const {nsu, valor, bandeira, modalidade, horario} = req.query;

    const floatValor = parseFloat(valor).toFixed(2);
    const liquid = getLiquidValue(modalidade, floatValor);
    const availableDate = getAvailableDate(modalidade, horario);
    
    try {
        const creation = await Transaction.create({
            nsu: nsu,
            valor: floatValor,
            bandeira: bandeira,
            modalidade: modalidade,
            horario: horario,
            liquido: liquid,
            disponivel: availableDate
        });

        res.json('sucess');
    } catch(error) {
        res.status(405).json({errors: error.errors.map((err) => {return err.message})});
    }
}

export default {getTransactions, getBalance, sendTransaction};