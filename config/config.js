const Sequelize = require('sequelize'); // need to know about sequleize to setup any connection

require('dotenv').config();

let sequelize; //we dont know if we are conecting to remote or local so we just make a space in bucket and will reassign value momentarily

if (process.env.JAWSDB_URL) {
    // if theres a jawsdb url we are on heroku and we want to connect to our cloud database
    sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
    // if we arent on the cloud we are local
    sequelize = new Sequelize(process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
          host: 'localhost',
          dialect: 'mysql',
          port: 3306,
        })
}

module.exports = sequelize;
