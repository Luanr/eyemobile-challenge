import controller from './controllers/transactionController';
import {validateTransaction} from './helpers';
import {check} from 'express-validator';

const routes = (instance) => {
    instance.get('/transactions', controller.getTransactions);
    instance.get('/balance', controller.getBalance);
    instance.post('/transaction/send',  validateTransaction, controller.sendTransaction);
};

export default routes;