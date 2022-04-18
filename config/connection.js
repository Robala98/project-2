const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    //Database name
    process.env.DB_NAME,
    //User
    process.env.DB_USER,
    //Password
    process.env.DB_PASSWORD,
    {
        //Database location
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

model.exports = sequelize;