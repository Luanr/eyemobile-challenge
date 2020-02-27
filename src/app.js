import express from 'express';
import routes from './routes';
import sequelize from './database';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

//app.use(basicAuth({users: {'': ''}}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

routes(app);

const initServer = () => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
};

const checkDb = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true });
        console.log('Connection sucessfully!');
    } catch(error) {
        console.log(error);
    }
};

checkDb();
initServer();