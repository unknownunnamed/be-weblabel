const Sequelize = require('sequelize');

const db = new Sequelize('weblabel', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = db;