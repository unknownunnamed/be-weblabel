const { body } = require('express-validator');

const berita = [
    body('judul').notEmpty(),
    body('sumber').notEmpty(),
    body('isi').notEmpty(),
];

module.exports = berita;