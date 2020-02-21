import controller from './controllers/transactionController';

const routes = (instance) => {
    instance.get('/transactions', controller.getTransactions);
    instance.get('/balance', controller.getBalance);
    instance.post('/transaction/send', controller.sendTransaction);
};

export default routes;