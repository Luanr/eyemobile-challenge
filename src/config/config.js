require('dotenv').config();

module.exports = {
    development: {
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'eyemobileapi',
        dialect: 'postgres'
    },
    test: {
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'eyemobileapi',
        dialect: 'postgres'
    },
    production: {
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'eyemobileapi',
        dialect: 'postgres'
    },
}