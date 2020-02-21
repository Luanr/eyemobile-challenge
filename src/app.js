import express from 'express';
import basicAuth from 'express-basic-auth';
import routes from './routes';
import sequelize from './database';

const app = express();
const PORT = 3000;

app.use(basicAuth({users: {'': ''}}));
routes(app);

const initServer = () => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
};

const checkDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection sucessfully!');
    } catch(error) {
        console.log(error);
    }
};

checkDb();
initServer();