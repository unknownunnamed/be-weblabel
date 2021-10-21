const Sequelize = require('sequelize');
const db = require('../../config/database');

const Label = db.define('label', {
    label: Sequelize.INTEGER(1),
}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = Label;