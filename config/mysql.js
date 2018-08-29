const Sequelize = require('sequelize');

const url = 'mysql://root:123456@localhost:3306/testdb';
const mysql = new Sequelize(url, {
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
})

module.exports = mysql;