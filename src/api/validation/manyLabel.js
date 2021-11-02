const { body } = require('express-validator');

const manyLabelValidation = [
    body('idUserLabel').isInt().notEmpty(),
    body('jumlahBerita').isInt().notEmpty()
];

module.exports = manyLabelValidation;