const { body } = require('express-validator');

const label = {
    add: [
        body('userlabelId').notEmpty(),
        body('beritumId').notEmpty(),
    ],
    put: [
        body('userlabelId').notEmpty(),
        body('beritumId').notEmpty(),
        body('label').notEmpty(),
    ]
};

module.exports = label;