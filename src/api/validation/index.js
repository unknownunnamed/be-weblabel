const userPassValidation = require('./userPassValidation');
const berita = require('./berita');
const label = require('./label');
const manyLabelValidation = require('./manyLabel');
const excel = require('./excel');

const validation = {
    userPassValidation,
    berita,
    label,
    excel,
    manyLabelValidation,
};

module.exports = validation;