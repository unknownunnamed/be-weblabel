const express = require('express');
const controllers = require('../controllers');
const validation = require('../validation');
const router = express.Router();

router.post('/', validation.label.add, controllers.label.add);
router.get('/', controllers.label.get);
router.post('/many', validation.manyLabelValidation, controllers.label.addManyLabel);
router.put('/:id', validation.label.put, controllers.label.update);

module.exports = router;