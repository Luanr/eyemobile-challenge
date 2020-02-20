import express from 'express';
import routes from './routes';

const app = express();
const PORT = 3000;

routes(app);

const initServer = () => {
    app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
};

initServer();