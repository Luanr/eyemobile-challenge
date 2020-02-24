import Dotenv from 'dotenv';
import Sequelize from 'sequelize';

Dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
})

const createDb = async () => {
    try {
        await sequelize.query(`CREATE DATABASE ${process.env.DB_NAME}`);
    } catch(e) {
    }
};

export default sequelize;