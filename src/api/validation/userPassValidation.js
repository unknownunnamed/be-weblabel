const { body } = require('express-validator');

const userPassValidation = [
    body('username').notEmpty(),
    body('password').notEmpty(),
];

module.exports = userPassValidation;