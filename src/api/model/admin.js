const Sequelize = require('sequelize');
const db = require('../../config/database');

const Admin = db.define('admin', {
    username: Sequelize.STRING(20),
    password: Sequelize.STRING(20),
}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = Admin;