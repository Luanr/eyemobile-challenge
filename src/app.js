import express from 'express';
import routes from './routes';

const app = express();
const PORT = 3000;

app.use(basicAuth({users: {'': ''}}));
routes(app);

const initServer = () => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
};

initServer();