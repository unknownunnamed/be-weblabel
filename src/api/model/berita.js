const Sequelize = require('sequelize');
const db = require('../../config/database');

const Berita = db.define('berita', {
    judul: Sequelize.STRING(200),
    sumber: Sequelize.STRING(250),
    isi: Sequelize.STRING(3000),
}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = Berita;