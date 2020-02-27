import controller from './controllers/transactionController';
import {validateTransaction} from './helpers';
import * as Auth from './auth';

const routes = (instance) => {
    instance.get('/transaction', Auth.authPortal,controller.getTransactions);
    instance.get('/balance', Auth.authPortal, controller.getBalance);
    instance.post('/transaction',  [Auth.authTerminal, validateTransaction], controller.sendTransaction);
};

export default routes;