import controller from './controllers/transactionController';

const routes = (instance) => {
    instance.get('/transactions', transactionController.getTransactions);
    instance.get('/balance', transactionController.getBalance);
    instance.post('/transaction/send', transactionController.sendTransaction);
};

export default routes;